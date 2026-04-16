import { Eye, EyeOff, IdCard, Lock } from 'lucide-react';

export default function LoginCard({
  matricula,
  senha,
  showPassword,
  loading,
  error,
  onMatriculaChange,
  onSenhaChange,
  onTogglePassword,
  onSubmit,
  onPasswordFocus,
  onPasswordBlur,
}) {
  return (
    <div className="glass-card rounded-3xl border border-[rgba(108,99,255,0.35)] p-8 shadow-2xl shadow-[rgba(79,70,229,0.25)]">
      <p className="text-xs tracking-[0.25em] text-slate-400">ACESSO</p>
      <h1 className="mt-2 text-4xl font-bold text-slate-100">Participe da torcida</h1>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <label className="input-shell">
          <IdCard size={18} className="text-slate-400" />
          <input
            className="input-core"
            placeholder="Digite sua matrícula"
            value={matricula}
            onChange={(event) => onMatriculaChange(event.target.value)}
            required
          />
        </label>

        <label className="input-shell">
          <Lock size={18} className="text-slate-400" />
          <input
            type={showPassword ? 'text' : 'password'}
            className="input-core"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(event) => onSenhaChange(event.target.value)}
            onFocus={onPasswordFocus}
            onBlur={onPasswordBlur}
            required
          />
          <button
            type="button"
            onClick={onTogglePassword}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-700/70 hover:text-slate-200"
            aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </label>

        {error && <p className="text-sm text-rose-300">{error}</p>}

        <button type="submit" disabled={loading} className="btn-primary mt-2 w-full rounded-2xl px-4 py-3 font-semibold text-white">
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>

      <p className="mt-5 text-xs text-slate-400">Demo: 2024001 / senha123</p>
    </div>
  );
}
