import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MascotGroup from '../components/MascotGroup';
import { useAuth } from '../hooks/useAuth';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(matricula, senha);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-8">
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/30 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="z-10 grid w-full max-w-4xl gap-8 rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-2xl backdrop-blur-xl md:grid-cols-2 md:p-10"
      >
        <section>
          <h1 className="text-3xl font-bold text-white">Torcida Digital</h1>
          <p className="mt-2 text-sm text-slate-300">Acesso ao sistema dos Jogos Internos.</p>
          <form className="mt-8 space-y-4" onSubmit={onSubmit}>
            <input
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400"
              placeholder="Matrícula"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
              required
            />
            <input
              type="password"
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-slate-100 outline-none focus:border-cyan-400"
              placeholder="Senha institucional"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            {error && <p className="text-sm text-rose-300">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-slate-900 transition hover:bg-cyan-400 disabled:opacity-60"
            >
              {loading ? 'Entrando...' : 'Acessar'}
            </button>
          </form>
        </section>

        <section className="flex flex-col justify-between gap-6">
          <MascotGroup active={Boolean(senha)} />
          <div className="rounded-xl border border-white/10 bg-slate-800/70 p-4 text-sm text-slate-300">
            Dica demo: use <strong>2024001</strong> / <strong>senha123</strong>.
          </div>
        </section>
      </motion.div>
      <footer className="absolute bottom-4 text-center text-xs text-slate-400">
        Instituto de Ensino • Projeto Torcida Digital • 2026
      </footer>
    </main>
  );
}
