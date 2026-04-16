import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, CircleUserRound } from 'lucide-react';
import { apiRequest } from '../services/api';
import { useAuth } from '../hooks/useAuth';
import RoleBadge from '../components/RoleBadge';
import HeroEvento from '../components/HeroEvento';
import GridDiretorias from '../components/GridDiretorias';
import OverviewEvento from '../components/OverviewEvento';
import Engajamento from '../components/Engajamento';

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
    <main className="min-h-screen bg-[#0B0F1A] px-4 pb-10 text-[#E5E7EB] md:px-8">
      <nav className="fixed left-0 right-0 top-0 z-40 border-b border-[rgba(108,99,255,0.25)] bg-[#070A12]/85 backdrop-blur-lg">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-[#6C63FF] to-[#4F46E5] shadow-[0_0_16px_rgba(108,99,255,0.8)]" />
            <div>
              <p className="text-sm font-semibold text-white">Torcida ScriptA</p>
              <p className="text-xs text-slate-400">Painel institucional</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-xl border border-white/10 p-2 text-slate-300 hover:bg-white/10">
              <Bell size={16} />
            </button>
            <RoleBadge role={user?.role} />
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-2 py-1.5">
              <CircleUserRound size={16} />
              <span className="text-sm">{user?.name}</span>
            </div>
            <button onClick={logout} className="rounded-xl border border-white/10 px-3 py-1.5 text-sm hover:bg-white/10">
              Sair
            </button>
          </div>
        </div>
      </nav>

      <div className="mx-auto w-full max-w-7xl space-y-8">
        <HeroEvento />

        {message && <p className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">{message}</p>}

        <GridDiretorias
          directorias={directorias}
          user={user}
          onRequestJoin={requestJoin}
          onAccessDiretoria={(slug) => navigate(`/diretoria/${slug}`)}
        />

        <OverviewEvento />
        <Engajamento />
      </div>
    </main>
  );
}
