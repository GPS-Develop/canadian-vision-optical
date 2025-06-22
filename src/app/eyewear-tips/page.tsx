"use client";

import { AnimationWrapper } from "../components/AnimationWrapper";

const posts = [
  {
    icon: "👁️",
    title: "Choosing Glasses for Your Face Shape",
    content: `
      <p>Finding the perfect frames is about balancing your features. Here's a quick guide:</p>
      <ul class="list-disc list-inside space-y-2 mt-4">
        <li><b>Round Face:</b> Square or rectangular frames add definition.</li>
        <li><b>Square Face:</b> Round or oval frames soften sharp angles.</li>
        <li><b>Oval Face:</b> Most frame shapes will complement your features.</li>
        <li><b>Heart Face:</b> Bottom-heavy frames or frames with low-set temples work best.</li>
      </ul>
    `
  },
  {
    icon: "🧼",
    title: "How to Clean Your Glasses",
    content: `
      <p>Keep your vision crystal clear and your lenses scratch-free. Follow these simple steps:</p>
      <ol class="list-decimal list-inside space-y-2 mt-4">
        <li>Rinse with lukewarm water to remove dust.</li>
        <li>Apply a drop of lotion-free dish soap to each lens.</li>
        <li>Gently rub the lenses, frames, and nose pads.</li>
        <li>Rinse thoroughly and gently shake off excess water.</li>
        <li>Dry with a clean, soft microfiber cloth.</li>
      </ol>
      <p class="mt-4 text-sm text-gray-500"><b>Pro-Tip:</b> Never use paper towels, tissues, or the hem of your shirt.</p>
    `
  },
  {
    icon: "💻",
    title: "Reducing Digital Eye Strain",
    content: `
      <p>Staring at screens all day? Protect your eyes with these tips:</p>
      <ul class="list-disc list-inside space-y-2 mt-4">
        <li><b>Follow the 20-20-20 Rule:</b> Every 20 minutes, look at something 20 feet away for at least 20 seconds.</li>
        <li><b>Adjust Your Screen:</b> Position it at arm's length and slightly below eye level.</li>
        <li><b>Reduce Glare:</b> Use an anti-glare screen filter or adjust lighting.</li>
        <li><b>Blink Often:</b> Consciously blink more frequently to keep your eyes moist.</li>
        <li><b>Consider Blue Light Glasses:</b> Ask us about lenses designed to filter blue light.</li>
      </ul>
    `
  },
  {
    icon: "☀️",
    title: "The Importance of UV Protection",
    content: `
      <p>Sunglasses are more than a fashion statement—they're essential for eye health. Here's why:</p>
      <ul class="list-disc list-inside space-y-2 mt-4">
        <li>They protect your eyes from harmful ultraviolet (UV) rays.</li>
        <li>Prolonged UV exposure can increase the risk of cataracts and other eye conditions.</li>
        <li>Look for sunglasses that block 100% of UVA and UVB rays.</li>
        <li>We offer a wide selection of prescription and non-prescription sunglasses.</li>
      </ul>
    `
  },
];

export default function EyewearTipsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <AnimationWrapper>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Eyewear Care & Tips
            </h1>
          </AnimationWrapper>
          <AnimationWrapper delay={0.1}>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of helpful tips to help you care for your eyewear and keep your vision healthy.
            </p>
          </AnimationWrapper>
        </div>
      </div>

      {/* Tips Grid */}
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <AnimationWrapper key={post.title} delay={0.1 * (index + 1)}>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 h-full flex flex-col">
                <div className="text-4xl mb-4">{post.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h2>
                <div
                  className="prose prose-neutral text-gray-600"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  );
} 