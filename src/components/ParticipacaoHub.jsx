import { CheckCircle2, Clock3, ShieldCheck, Users } from 'lucide-react';

const areasTorcida = ['Cenário', 'Dança', 'Roteiro', 'Sonoplastia', 'Figurino', 'Financeiro', 'Staff'];

export default function ParticipacaoHub({ user }) {
  const status = user?.membershipStatus || 'none';
  const statusMap = {
    none: { label: 'Sem solicitação', icon: Clock3, color: 'text-slate-300', bg: 'bg-slate-700/40 border-slate-500/30' },
    pending: { label: 'Pendente', icon: Clock3, color: 'text-amber-300', bg: 'bg-amber-500/10 border-amber-400/40' },
    approved: { label: 'Aprovado', icon: CheckCircle2, color: 'text-emerald-300', bg: 'bg-emerald-500/10 border-emerald-400/40' },
  };

  const data = statusMap[status] || statusMap.none;
  const Icon = data.icon;

  return (
    <section className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
      <article className="glass-card rounded-2xl border border-[rgba(108,99,255,0.25)] p-5">
        <h3 className="text-xl font-semibold text-white">Sistema de participação</h3>
        <p className="mt-1 text-sm text-slate-400">Solicite entrada em apenas uma diretoria e aguarde aprovação da liderança.</p>

        <div className={`mt-4 flex items-center gap-2 rounded-xl border px-3 py-2 ${data.bg}`}>
          <Icon size={16} className={data.color} />
          <span className={`text-sm font-medium ${data.color}`}>{data.label}</span>
        </div>

        <ul className="mt-4 space-y-2 text-sm text-slate-300">
          <li className="flex gap-2"><ShieldCheck size={16} className="mt-0.5 text-indigo-300" />Apenas líderes podem aprovar solicitações.</li>
          <li className="flex gap-2"><Users size={16} className="mt-0.5 text-indigo-300" />Usuário pode participar de somente uma diretoria.</li>
          <li className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 text-indigo-300" />Acesso aos módulos é liberado após aprovação.</li>
        </ul>
      </article>

      <article className="glass-card rounded-2xl border border-[rgba(108,99,255,0.25)] p-5">
        <h3 className="text-xl font-semibold text-white">Interface da torcida</h3>
        <p className="mt-1 text-sm text-slate-400">Abas de organização por núcleo de produção.</p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {areasTorcida.map((area) => (
            <button
              key={area}
              disabled={status !== 'approved'}
              className="rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-slate-200 transition hover:border-indigo-300/50 hover:bg-indigo-500/10 disabled:cursor-not-allowed disabled:opacity-45"
            >
              {area}
            </button>
          ))}
        </div>
      </article>
    </section>
  );
}
