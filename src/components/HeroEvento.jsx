import { motion } from 'framer-motion';

export default function HeroEvento() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative mt-24 overflow-hidden rounded-3xl border border-[rgba(108,99,255,0.35)]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1A]/95 via-[#111827]/80 to-[#0B0F1A]/95" />
      <div className="relative flex min-h-[320px] flex-col justify-end gap-3 p-8 md:min-h-[360px]">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Festival Interdiretorias 2026</p>
        <h2 className="max-w-2xl text-3xl font-bold text-white md:text-4xl">Conexão, energia e tecnologia para a torcida campeã</h2>
        <p className="text-slate-200">Tema: Futuro em Movimento • 18 de junho de 2026 • Arena Central ScriptA</p>
        <button className="btn-primary mt-3 w-fit rounded-xl px-5 py-2.5 text-sm font-semibold text-white">Ver mais</button>
      </div>
    </motion.section>
  );
}
