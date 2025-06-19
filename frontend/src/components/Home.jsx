// src/pages/Home.jsx or App.js
import ScrollReveal from "./Scrollreveal";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen space-y-32 p-10">
      <ScrollReveal>
        <h1 className="text-5xl font-bold text-center">🚀 Welcome to My Page</h1>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <p className="max-w-2xl mx-auto text-center text-lg text-gray-300">
          This section fades and slides in when you scroll to it. Clean and smooth!
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[1, 2, 3].map((n) => (
            <div key={n} className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h2 className="text-xl font-semibold">Card {n}</h2>
              <p className="text-gray-400 mt-2">
                Scroll-triggered animation with Framer Motion + Intersection Observer.
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
