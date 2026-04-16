const diretoriaMeta = {
  DIATINF: { cor: '#3B82F6', mascote: '🐅' },
  DIAREN: { cor: '#EF4444', mascote: '🐎' },
  DIACIN: { cor: '#22C55E', mascote: '🐍' },
  DIACON: { cor: '#A855F7', mascote: '🐉' },
};

export default function GridDiretorias({ directorias, user, onRequestJoin, onAccessDiretoria }) {
  return (
    <section>
      <h3 className="text-2xl font-semibold text-white">Diretorias</h3>
      <p className="mt-1 text-sm text-slate-400">Escolha uma diretoria para solicitar participação.</p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {directorias.map((diretoria) => {
          const meta = diretoriaMeta[diretoria.slug] || { cor: '#6C63FF', mascote: '🎭' };
          const bloqueado = Boolean(user?.diretoria && user?.diretoria !== diretoria.slug);

          return (
            <article
              key={diretoria.slug}
              className="rounded-3xl border bg-[#111827]/90 p-5 transition hover:-translate-y-1"
              style={{ borderColor: `${meta.cor}66`, boxShadow: `0 0 25px ${meta.cor}33` }}
            >
              <div className="flex items-start justify-between">
                <h4 className="text-xl font-semibold text-white">{diretoria.slug}</h4>
                <span className="text-2xl">{meta.mascote}</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{diretoria.description}</p>
              <p className="mt-2 text-xs text-slate-400">Cursos: {diretoria.courses.join(', ')}</p>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => onRequestJoin(diretoria.slug)}
                  disabled={bloqueado}
                  className="btn-primary rounded-xl px-4 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Participar
                </button>
                {user?.diretoria === diretoria.slug && user.membershipStatus === 'approved' && (
                  <button
                    onClick={() => onAccessDiretoria(diretoria.slug)}
                    className="rounded-xl border border-white/30 px-4 py-2 text-sm text-slate-200 hover:bg-white/10"
                  >
                    Acessar torcida
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
