const ranking = [
  { diretoria: 'DIATINF', percentual: 82 },
  { diretoria: 'DIACON', percentual: 73 },
  { diretoria: 'DIAREN', percentual: 66 },
  { diretoria: 'DIACIN', percentual: 59 },
];

const avisos = [
  'Líderes devem revisar pedidos pendentes até sexta-feira.',
  'Postagens da torcida serão liberadas após aprovação.',
  'Somente admins registram doações em gramas.',
];

export default function Engajamento() {
  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <article className="glass-card rounded-2xl border border-[rgba(108,99,255,0.25)] p-5">
        <h3 className="text-xl font-semibold text-white">Engajamento</h3>
        <p className="mt-1 text-sm text-slate-400">Ranking de diretorias e progresso atual.</p>

        <ul className="mt-4 space-y-3">
          {ranking.map((item) => (
            <li key={item.diretoria}>
              <div className="mb-1 flex items-center justify-between text-sm text-slate-200">
                <span>{item.diretoria}</span>
                <span>{item.percentual}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-800">
                <div
                  className="h-2.5 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#4F46E5]"
                  style={{ width: `${item.percentual}%`, boxShadow: '0 0 14px rgba(108,99,255,0.8)' }}
                />
              </div>
            </li>
          ))}
        </ul>
      </article>

      <article className="glass-card rounded-2xl border border-[rgba(108,99,255,0.25)] p-5">
        <h3 className="text-xl font-semibold text-white">Últimos avisos</h3>
        <ul className="mt-4 space-y-3 text-sm text-slate-300">
          {avisos.map((aviso) => (
            <li key={aviso} className="rounded-xl border border-white/10 bg-slate-900/70 px-3 py-2">
              {aviso}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
