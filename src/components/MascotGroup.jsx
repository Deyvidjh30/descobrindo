import { motion } from 'framer-motion';

const mascots = [
  { emoji: '🐍', label: 'Cobra (DIACIN)', color: 'from-green-400/30 to-green-700/40' },
  { emoji: '🐅', label: 'Tigre (DIATINF)', color: 'from-blue-400/30 to-blue-700/40' },
  { emoji: '🐉', label: 'Dragão (DIACON)', color: 'from-purple-400/30 to-purple-700/40' },
  { emoji: '🐎', label: 'Cavalo (DIAREN)', color: 'from-red-400/30 to-red-700/40' },
];

export default function MascotGroup({ active }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {mascots.map((mascot, index) => (
        <motion.div
          key={mascot.label}
          animate={
            active
              ? {
                  y: [0, -4, 0],
                  rotate: [0, -3, 3, 0],
                  scale: [1, 1.04, 1],
                }
              : { y: 0, rotate: 0, scale: 1 }
          }
          transition={{ repeat: active ? Infinity : 0, duration: 0.9 + index * 0.2 }}
          className={`rounded-xl border border-white/10 bg-gradient-to-br ${mascot.color} p-3 text-center backdrop-blur-sm`}
          title={mascot.label}
        >
          <motion.div
            animate={active ? { opacity: [1, 0.7, 1] } : { opacity: 1 }}
            transition={{ repeat: active ? Infinity : 0, duration: 0.6 }}
            className="text-3xl"
          >
            {mascot.emoji}
          </motion.div>
          <p className="mt-2 text-xs text-slate-100">{mascot.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
