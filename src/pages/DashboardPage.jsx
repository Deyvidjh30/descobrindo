import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiRequest } from '../services/api';
import { useAuth } from '../hooks/useAuth';
import RoleBadge from '../components/RoleBadge';

const diretoriaColors = {
  DIACIN: 'from-green-500/30 to-green-800/40',
  DIATINF: 'from-blue-500/30 to-blue-800/40',
  DIACON: 'from-purple-500/30 to-purple-800/40',
  DIAREN: 'from-red-500/30 to-red-800/40',
};

export default function DashboardPage() {
  const { token, user, setUser, logout } = useAuth();
  const navigate = useNavigate();
  const [directorias, setDirectorias] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    apiRequest('/directorias', { token }).then(setDirectorias);
  }, [token]);

  const requestJoin = async (slug) => {
    const data = await apiRequest('/memberships/request', {
      method: 'POST',
      token,
      body: { diretoria: slug },
    });
    setUser(data.user);
    setMessage(`Solicitação enviada para ${slug}. Status: ${data.user.membershipStatus}.`);
  };

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white md:px-8">
      <header className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold">Olá, {user?.name}</h1>
          <p className="text-sm text-slate-300">Escolha sua diretoria para participar da torcida digital.</p>
        </div>
        <div className="flex items-center gap-3">
          <RoleBadge role={user?.role} />
          <button onClick={logout} className="rounded-lg border border-white/20 px-3 py-2 text-sm hover:bg-white/10">Sair</button>
        </div>
      </header>

      {message && <p className="mb-4 rounded-lg bg-emerald-500/20 px-4 py-3 text-sm text-emerald-200">{message}</p>}

      <section className="grid gap-4 md:grid-cols-2">
        {directorias.map((d) => (
          <article key={d.slug} className={`rounded-2xl border border-white/10 bg-gradient-to-br ${diretoriaColors[d.slug]} p-5`}>
            <h2 className="text-xl font-semibold">{d.slug}</h2>
            <p className="mt-2 text-sm text-slate-200">{d.description}</p>
            <p className="mt-3 text-xs text-slate-300">Cursos: {d.courses.join(', ')}</p>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => requestJoin(d.slug)}
                disabled={Boolean(user?.diretoria && user?.diretoria !== d.slug)}
                className="rounded-lg bg-white/90 px-3 py-2 text-sm font-semibold text-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Solicitar participação
              </button>
              {user?.diretoria === d.slug && user.membershipStatus === 'approved' && (
                <button onClick={() => navigate(`/diretoria/${d.slug}`)} className="rounded-lg border border-white/40 px-3 py-2 text-sm">
                  Acessar torcida
                </button>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
