import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MascotesInterativos from '../components/MascotesInterativos';
import LoginCard from '../components/LoginCard';
import { useAuth } from '../hooks/useAuth';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [submitPulse, setSubmitPulse] = useState(0);

  const onSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSubmitPulse((value) => value + 1);
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
    <main className="relative min-h-screen overflow-hidden bg-[#0B0F1A] px-4 py-8 text-[#E5E7EB]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(79,70,229,0.35),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(108,99,255,0.25),transparent_30%),linear-gradient(180deg,#0B0F1A,#05070D)]" />
      <div className="absolute -left-8 top-24 h-56 w-56 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-64px)] w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="futuristic-grid glass-card rounded-[20px] border border-white/10 p-8">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg text-4xl font-semibold leading-tight text-white lg:text-5xl"
          >
            A sua torcida começa em uma interface elegante, moderna e viva
          </motion.h2>
          <p className="mt-4 max-w-lg text-slate-300">
            Faça login para acompanhar ranking, avisos institucionais, votação de enquetes, eventos e planejamento colaborativo da torcida.
          </p>

          <div className="mt-10">
            <p className="mb-8 text-xs uppercase tracking-[0.24em] text-slate-400">Mascotes interativos</p>
            <MascotesInterativos isPasswordFocused={passwordFocused} passwordValue={senha} submitPulse={submitPulse} />
          </div>
        </section>

        <section>
          <LoginCard
            matricula={matricula}
            senha={senha}
            showPassword={showPassword}
            loading={loading}
            error={error}
            onMatriculaChange={setMatricula}
            onSenhaChange={setSenha}
            onTogglePassword={() => setShowPassword((value) => !value)}
            onSubmit={onSubmit}
            onPasswordFocus={() => setPasswordFocused(true)}
            onPasswordBlur={() => setPasswordFocused(false)}
          />
        </section>
      </div>

      <footer className="relative z-10 mt-6 border-t border-white/10 bg-[#070A12]/80 py-4 text-center text-xs text-slate-400">
        © 2026 ScriptA. Todos os direitos reservados.
      </footer>
    </main>
  );
}
