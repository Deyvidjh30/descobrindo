import { CalendarDays, FilePlus2, Heart, MessageCircle, PenSquare, Scale, Trash2, Vote } from 'lucide-react';

export default function ComunidadeHub() {
  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <article className="glass-card rounded-2xl border border-[rgba(108,99,255,0.25)] p-5">
        <h3 className="text-xl font-semibold text-white">Sistema de posts</h3>
        <div className="mt-3 space-y-2 text-sm text-slate-300">
          <p className="flex items-center gap-2"><FilePlus2 size={16} className="text-indigo-300" /> Criar post</p>
          <p className="flex items-center gap-2"><MessageCircle size={16} className="text-indigo-300" /> Comentar</p>
          <p className="flex items-center gap-2"><Heart size={16} className="text-indigo-300" /> Curtir</p>
          <p className="flex items-center gap-2"><PenSquare size={16} className="text-indigo-300" /> Editar (admin)</p>
          <p className="flex items-center gap-2"><Trash2 size={16} className="text-indigo-300" /> Excluir (admin)</p>
        </div>
      </article>

      <article className="glass-card rounded-2xl border border-[rgba(108,99,255,0.25)] p-5">
        <h3 className="text-xl font-semibold text-white">Eventos e enquetes</h3>
        <div className="mt-3 space-y-2 text-sm text-slate-300">
          <p className="flex items-center gap-2"><CalendarDays size={16} className="text-indigo-300" /> Criar evento com data/hora e participantes</p>
          <p className="flex items-center gap-2"><Vote size={16} className="text-indigo-300" /> Criar enquete, votar e exibir resultados</p>
        </div>
      </article>

      <article className="glass-card rounded-2xl border border-[rgba(108,99,255,0.25)] p-5 lg:col-span-2">
        <h3 className="text-xl font-semibold text-white">Doações</h3>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-slate-900/70 p-3">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Entrada</p>
            <p className="mt-1 text-sm text-slate-200">Registro em gramas com conversão automática para KG.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-900/70 p-3">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Controle</p>
            <p className="mt-1 text-sm text-slate-200">Contador global e ranking de doadores por diretoria.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-900/70 p-3">
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-slate-400"><Scale size={14} />Admin</p>
            <p className="mt-1 text-sm text-slate-200">Somente admin seleciona membro e registra doação.</p>
          </div>
        </div>
      </article>
    </section>
  );
}
