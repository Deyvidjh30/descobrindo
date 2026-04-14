const roleColor = {
  lider: 'bg-amber-500/20 text-amber-200 border-amber-400/40',
  sublider: 'bg-cyan-500/20 text-cyan-200 border-cyan-400/40',
  membro: 'bg-slate-500/20 text-slate-100 border-slate-300/30',
};

export default function RoleBadge({ role }) {
  const label = role === 'lider' ? 'Líder' : role === 'sublider' ? 'Sub-líder' : 'Membro';
  return (
    <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${roleColor[role] || roleColor.membro}`}>
      {label}
    </span>
  );
}
