
const cards = [
  { title: "Speed", desc: "Super fast performance with V8." },
  { title: "Flexibility", desc: "Modular UI with reusable components." },
  { title: "Smooth UI", desc: "Framer Motion powered transitions." },
];


function HeroSection() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold mb-10 text-center"
      >
        🚀 Build Smooth Animated UI
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
          >
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-300">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


export default HeroSection
