"use client";

import Link from "next/link";

const posts = [
  {
    title: "How to Choose Glasses for Your Face Shape",
    slug: "choose-glasses-for-face-shape",
    excerpt: "Find the perfect frames for your unique features with our easy guide.",
    content: `
      <h2>How to Choose Glasses for Your Face Shape</h2>
      <p>Choosing the right glasses can enhance your look and boost your confidence. Here are some tips:</p>
      <ul>
        <li><b>Round Face:</b> Go for rectangular or square frames to add angles.</li>
        <li><b>Square Face:</b> Try round or oval frames to soften your features.</li>
        <li><b>Oval Face:</b> Lucky you! Most frame shapes will suit you.</li>
        <li><b>Heart Face:</b> Look for bottom-heavy frames to balance your forehead and chin.</li>
      </ul>
      <p>Visit us for a personalized fitting!</p>
    `
  },
  {
    title: "How to Clean Your Glasses Without Scratching Them",
    slug: "clean-glasses-without-scratching",
    excerpt: "Keep your glasses crystal clear and scratch-free with these expert tips from Canadian Vision Opticals.",
    content: `
      <h2>🕶️ How to Clean Your Glasses Without Scratching Them</h2>
      <p><i>By Canadian Vision Opticals — St. Catharines' Trusted Eyewear Experts</i></p>
      <p>Keeping your glasses clean doesn't just improve your vision, it also helps them last longer and look their best. But cleaning them the wrong way can cause scratches, streaks, or even permanent damage. Here's a quick and easy guide to cleaning your glasses the right way, recommended by our team at Canadian Vision Opticals.</p>
      <hr/>
      <h3>✅ What You'll Need:</h3>
      <ul>
        <li>A microfiber cloth</li>
        <li>Lens cleaning spray (or mild dish soap + water)</li>
        <li>Both hands! (Yes, handling with care matters)</li>
      </ul>
      <hr/>
      <h3>🚫 What Not to Use:</h3>
      <ul>
        <li>Paper towels, tissues, or your shirt</li>
        <li>Window cleaner or alcohol</li>
        <li>Hot water (it can damage lens coatings)</li>
      </ul>
      <hr/>
      <h3>🧼 Step-by-Step: Cleaning Your Glasses Like a Pro</h3>
      <ol>
        <li><b>Rinse Your Glasses First</b><br/>Gently rinse your lenses with lukewarm water to remove dust or particles. This prevents scratching during wiping.</li>
        <li><b>Apply Lens Cleaner or Soap</b><br/>Use one drop of dish soap or a lens-safe cleaner on each lens. Avoid anything scented or abrasive.</li>
        <li><b>Rub Gently with Your Fingers</b><br/>Lightly massage the lenses and frames. Don't forget the nose pads and temple arms!</li>
        <li><b>Rinse and Shake Dry</b><br/>Rinse again with water, then gently shake off excess droplets.</li>
        <li><b>Dry with a Microfiber Cloth</b><br/>Wipe using a clean, dry microfiber cloth. No pressure needed, just let the cloth do the work.</li>
      </ol>
      <hr/>
      <h3>🧠 Pro Tips:</h3>
      <ul>
        <li>Keep a travel-size lens cleaner and cloth in your bag or car.</li>
        <li>Clean your glasses daily to avoid buildup.</li>
        <li>Replace your microfiber cloth every few months.</li>
      </ul>
      <hr/>
      <h3>👁️ Need Help? Stop by Canadian Vision Opticals!</h3>
      <p>Not sure if your glasses are scratched, misaligned, or due for an upgrade? We're happy to help. Stop by our St. Catharines location or <a href="/book-appointment" class="text-blue-600 underline">book an appointment online</a>.</p>
    `
  },
  // Add more posts here as needed
];

export default function EyewearTipsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white px-4 py-16 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-3xl shadow-2xl p-10">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900 tracking-tight">
          Eyewear Care Tips & Blog
        </h1>
        <ul className="space-y-10">
          {posts.map((post) => (
            <li key={post.slug} className="border-b pb-8 last:border-b-0 last:pb-0">
              <h2 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-700 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-700 mb-2 text-base">{post.excerpt}</p>
              <details className="group">
                <summary className="cursor-pointer text-blue-700 hover:underline text-base font-medium flex items-center gap-2">
                  <span className="inline-block text-lg">▶</span> Read more
                </summary>
                <div
                  className="mt-4 prose prose-neutral prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800 prose-strong:text-gray-900 prose-a:text-blue-600 leading-relaxed space-y-4"
                  style={{ color: '#222', lineHeight: 1.8 }}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </details>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 