"use client";

import { useEffect, useRef, useState, useCallback } from 'react';
import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

interface Frame {
  id: string;
  name: string;
  imageUrl: string;
}

const frames: Omit<Frame, 'position'>[] = [
  {
    id: '1',
    name: 'Classic Round',
    imageUrl: '/frames/classic-round.png',
  },
  {
    id: '2',
    name: 'Modern Square',
    imageUrl: '/frames/modern-square.svg',
  },
  {
    id: '3',
    name: 'Aviator Style',
    imageUrl: '/frames/ray-ban.png',
  },
  {
    id: '4',
    name: 'Cat Eye',
    imageUrl: '/frames/cat-eye.svg',
  }
];

export default function VirtualTryOn() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  
  const [faceLandmarker, setFaceLandmarker] = useState<FaceLandmarker | null>(null);
  const [isLoadingModel, setIsLoadingModel] = useState(true);
  const [isStreaming, setIsStreaming] = useState(false);
  const lastVideoTimeRef = useRef(-1);
  
  const [selectedFrame, setSelectedFrame] = useState<(typeof frames[0]) | null>(null);
  const [frameImage, setFrameImage] = useState<HTMLImageElement | null>(null);
  
  const [error, setError] = useState<string | null>(null);

  // 1. Initialize the FaceLandmarker
  useEffect(() => {
    const createFaceLandmarker = async () => {
      try {
        const filesetResolver = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.10/wasm"
        );
        const landmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
          baseOptions: {
            modelAssetPath: `/models/face_landmarker.task`,
            delegate: "GPU",
          },
          outputFaceBlendshapes: true,
          runningMode: "VIDEO",
          numFaces: 1,
        });
        setFaceLandmarker(landmarker);
        setIsLoadingModel(false);
      } catch (e) {
        console.error("Failed to create FaceLandmarker", e);
        setError("Sorry, the AI model failed to load. Please try refreshing the page.");
      }
    };
    createFaceLandmarker();
  }, []);

  // 2. Load the glasses image when a frame is selected
  useEffect(() => {
    if (selectedFrame) {
      const img = new Image();
      img.src = selectedFrame.imageUrl;
      img.onload = () => setFrameImage(img);
      img.onerror = () => console.error(`Failed to load image: ${selectedFrame.imageUrl}`);
    } else {
      setFrameImage(null);
    }
  }, [selectedFrame]);


  // 3. The main loop for prediction and drawing
  const predictWebcam = useCallback(() => {
    if (!videoRef.current || !faceLandmarker || !isStreaming) {
      return;
    }

    const video = videoRef.current;
    if (video.currentTime !== lastVideoTimeRef.current) {
      const results = faceLandmarker.detectForVideo(video, Date.now());
      lastVideoTimeRef.current = video.currentTime;

      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      if (results.faceLandmarks.length > 0 && frameImage) {
        const landmarks = results.faceLandmarks[0];
        
        // Key points for glasses placement
        const leftEye = landmarks[130];  // Left eye corner
        const rightEye = landmarks[359]; // Right eye corner
        const noseBridge = landmarks[168]; // Point on the nose bridge

        if (leftEye && rightEye && noseBridge) {
          const videoWidth = video.videoWidth;
          const videoHeight = video.videoHeight;

          // Calculate position and scale
          const eyeCenterX = (leftEye.x + rightEye.x) / 2 * videoWidth;
          const eyeCenterY = (leftEye.y + rightEye.y) / 2 * videoHeight;
          
          const eyeDistance = Math.sqrt(
            Math.pow((rightEye.x - leftEye.x) * videoWidth, 2) +
            Math.pow((rightEye.y - leftEye.y) * videoHeight, 2)
          );

          const glassesWidth = eyeDistance * 2.5; // Adjust this multiplier for a better fit
          const scale = glassesWidth / frameImage.width;

          // Calculate rotation
          const angle = Math.atan2(
            (rightEye.y - leftEye.y) * videoHeight,
            (rightEye.x - leftEye.x) * videoWidth
          );

          // Draw the glasses
          ctx.save();
          ctx.translate(eyeCenterX, eyeCenterY);
          ctx.rotate(angle);
          ctx.drawImage(
            frameImage,
            -glassesWidth / 2,
            -frameImage.height * scale / 2,
            glassesWidth,
            frameImage.height * scale
          );
          ctx.restore();
        }
      }
    }

    animationRef.current = requestAnimationFrame(predictWebcam);
  }, [faceLandmarker, isStreaming, frameImage]);

  useEffect(() => {
    if (isStreaming) {
      animationRef.current = requestAnimationFrame(predictWebcam);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isStreaming, predictWebcam]);


  const startCamera = async () => {
    if (!faceLandmarker) return;
    setError(null);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: { ideal: 640 }, height: { ideal: 480 } } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play();
          setIsStreaming(true);
        };
      }
    } catch (e) {
      console.error("Error accessing camera", e);
      setError("Unable to access camera. Please check your permissions and try again.");
    }
  };

  const stopCamera = () => {
    setIsStreaming(false);
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    // Clear canvas
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopCamera();
      faceLandmarker?.close();
    };
  }, [faceLandmarker]);


  // ... (captureImage function remains similar)
  const captureImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = 'vellore-optical-tryon.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
      {/* Camera and Canvas Section */}
      <div className="flex-1 flex flex-col items-center">
        <div className="relative bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="relative">
            <video ref={videoRef} className="hidden" />
            <canvas ref={canvasRef} width={640} height={480} className="border-2 border-gray-300 rounded-lg bg-gray-100" />
            
            {isLoadingModel && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-80 rounded-lg">
                <div className="text-center">
                  <div className="text-xl mb-2">🚀</div>
                  <p className="text-gray-700 font-medium">Loading AI model...</p>
                </div>
              </div>
            )}

            {!isStreaming && !isLoadingModel && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4">📷</div>
                  <p className="text-gray-600">Click &quot;Start Camera&quot; to begin</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Camera Controls */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={startCamera}
            disabled={isLoadingModel || isStreaming}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isLoadingModel ? 'Loading...' : 'Start Camera'}
          </button>
          <button
            onClick={stopCamera}
            disabled={!isStreaming}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            Stop Camera
          </button>
          {isStreaming && selectedFrame && (
            <button onClick={captureImage} className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              📸 Capture
            </button>
          )}
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 max-w-md">
            {error}
          </div>
        )}
      </div>

      {/* Frame Selection Section */}
      <div className="lg:w-80 bg-white rounded-2xl shadow-xl p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Select Frames</h3>
        
        <div className="grid grid-cols-2 gap-4">
          {frames.map((frame) => (
            <button
              key={frame.id}
              onClick={() => setSelectedFrame(frame)}
              disabled={!isStreaming}
              className={`p-4 border-2 rounded-lg transition-all ${
                selectedFrame?.id === frame.id 
                  ? 'border-blue-500 bg-blue-50 shadow-md' 
                  : 'border-gray-300 hover:border-gray-400'
              } ${!isStreaming ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}`}
            >
              <div className="w-full h-16 bg-gray-100 rounded mb-2 flex items-center justify-center overflow-hidden">
                <img 
                  src={frame.imageUrl} 
                  alt={frame.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-sm font-medium text-gray-900">{frame.name}</p>
            </button>
          ))}
        </div>

        {!isStreaming && (
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-700">Start your camera to try on frames</p>
          </div>
        )}

        {selectedFrame && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-700"><strong>Selected:</strong> {selectedFrame.name}</p>
          </div>
        )}
      </div>
    </div>
  );
} 