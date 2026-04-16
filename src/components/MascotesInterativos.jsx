import { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const mascotes = [
  { id: 'cobra', nome: 'Cobra', cor: '#22C55E' },
  { id: 'tigre', nome: 'Tigre', cor: '#3B82F6' },
  { id: 'dragao', nome: 'Dragão', cor: '#A855F7' },
  { id: 'cavalo', nome: 'Cavalo', cor: '#EF4444' },
];

function MascoteCabeca({ nome, cor, controls, brilhoAtivo, index }) {
  return (
    <motion.div
      animate={controls}
      initial={{ scale: 1, x: 0, rotate: 0, opacity: 1 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="relative flex h-28 w-24 items-center justify-center rounded-2xl border"
      style={{
        borderColor: brilhoAtivo ? cor : `${cor}77`,
        boxShadow: brilhoAtivo ? `0 0 25px ${cor}99` : `0 0 12px ${cor}55`,
        background: `linear-gradient(160deg, ${cor}22, #111827)`,
      }}
      title={nome}
    >
      <div className="relative h-16 w-16 rounded-full border-2" style={{ borderColor: cor, boxShadow: `0 0 12px ${cor}88` }}>
        <div className="absolute left-3 top-5 h-2.5 w-2.5 rounded-full bg-white" />
        <div className="absolute right-3 top-5 h-2.5 w-2.5 rounded-full bg-white" />
        <div className="absolute bottom-3 left-1/2 h-1.5 w-7 -translate-x-1/2 rounded-full" style={{ backgroundColor: `${cor}CC` }} />
      </div>
      <p className="absolute -bottom-6 text-xs text-slate-200">{nome}</p>
    </motion.div>
  );
}

export default function MascotesInterativos({ isPasswordFocused, passwordValue, submitPulse }) {
  const controlsA = useAnimationControls();
  const controlsB = useAnimationControls();
  const controlsC = useAnimationControls();
  const controlsD = useAnimationControls();
  const controlsList = [controlsA, controlsB, controlsC, controlsD];

  useEffect(() => {
    controlsList.forEach((controls) => {
      controls.start({ scale: isPasswordFocused ? 1.05 : 1 });
    });
  }, [isPasswordFocused, controlsA, controlsB, controlsC, controlsD]);

  useEffect(() => {
    const hasText = passwordValue.length > 0;
    controlsList.forEach((controls, index) => {
      if (!hasText) {
        controls.start({ x: 0, rotate: 0, opacity: 1, transition: { duration: 0.25 } });
        return;
      }

      controls.start({
        opacity: [1, 0.6, 1],
        rotate: [0, index % 2 === 0 ? -3 : 3, 0],
        x: [0, index % 2 === 0 ? -5 : 5, 0],
        transition: { duration: 0.7, repeat: Infinity, repeatDelay: 0.4 + index * 0.08 },
      });
    });
  }, [passwordValue, controlsA, controlsB, controlsC, controlsD]);

  useEffect(() => {
    if (!submitPulse) return;

    controlsList.forEach((controls) => {
      controls.start({
        y: [0, -10, 0],
        scale: [1.05, 1.12, 1.05],
        boxShadow: ['0 0 18px rgba(108,99,255,0.45)', '0 0 35px rgba(108,99,255,0.95)', '0 0 18px rgba(108,99,255,0.45)'],
        transition: { duration: 0.55 },
      });
    });
  }, [submitPulse, controlsA, controlsB, controlsC, controlsD]);

  return (
    <div className="flex flex-wrap items-end gap-4">
      {mascotes.map((mascote, index) => (
        <MascoteCabeca
          key={mascote.id}
          nome={mascote.nome}
          cor={mascote.cor}
          controls={controlsList[index]}
          brilhoAtivo={isPasswordFocused || passwordValue.length > 0}
          index={index}
        />
      ))}
    </div>
  );
}
