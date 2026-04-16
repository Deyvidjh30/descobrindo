import { CalendarClock, MapPin, Megaphone, Target, Telescope, Timer } from 'lucide-react';

const itens = [
  { icon: CalendarClock, titulo: 'Data', descricao: '18/06/2026, abertura às 19h.' },
  { icon: Telescope, titulo: 'Tema', descricao: 'Futuro em Movimento.' },
  { icon: Target, titulo: 'Objetivo', descricao: 'Unir diretorias com performance criativa.' },
  { icon: MapPin, titulo: 'Local', descricao: 'Arena Central ScriptA.' },
  { icon: Timer, titulo: 'Cronograma', descricao: 'Ensaios semanais + prévia final.' },
  { icon: Megaphone, titulo: 'Avisos', descricao: 'Check-in obrigatório por equipe.' },
];

export default function OverviewEvento() {
  return (
    <section>
      <h3 className="text-2xl font-semibold text-white">Visão geral do evento</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {itens.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.titulo} className="glass-card rounded-2xl border border-[rgba(108,99,255,0.25)] p-4">
              <Icon size={18} className="text-indigo-300" />
              <h4 className="mt-2 text-sm font-semibold text-white">{item.titulo}</h4>
              <p className="mt-1 text-sm text-slate-300">{item.descricao}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
