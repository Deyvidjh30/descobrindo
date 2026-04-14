import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiRequest } from '../services/api';
import { useAuth } from '../hooks/useAuth';
import DonationRanking from '../components/DonationRanking';

const areas = ['Cenário', 'Dança', 'Roteiro', 'Sonoplastia', 'Figurino', 'Financeiro', 'Staff'];

export default function DiretoriaPage() {
  const { slug } = useParams();
  const { token, user } = useAuth();
  const [data, setData] = useState(null);
  const [grams, setGrams] = useState('');
  const [donorId, setDonorId] = useState('');

  useEffect(() => {
    apiRequest(`/directorias/${slug}/hub`, { token }).then(setData);
  }, [slug, token]);

  const addDonation = async (e) => {
    e.preventDefault();
    await apiRequest('/donations', {
      method: 'POST',
      token,
      body: { diretoria: slug, userId: donorId, grams: Number(grams) },
    });
    const refreshed = await apiRequest(`/directorias/${slug}/hub`, { token });
    setData(refreshed);
    setGrams('');
  };

  if (!data) return <main className="p-8 text-white">Carregando...</main>;

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <h1 className="text-3xl font-bold">Torcida {slug}</h1>
      <p className="mt-2 text-slate-300">Total arrecadado: {data.totalKg.toFixed(2)} KG</p>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 md:col-span-2">
          <h2 className="text-xl font-semibold">Áreas da torcida</h2>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {areas.map((area) => (
              <div key={area} className="rounded-lg bg-slate-800/80 px-3 py-2 text-sm">
                {area}
              </div>
            ))}
          </div>
          <h3 className="mt-6 font-semibold">Posts recentes</h3>
          <ul className="mt-2 space-y-2">
            {data.posts.map((post) => (
              <li key={post.id} className="rounded-lg bg-slate-800/80 p-3 text-sm">
                <p className="font-medium">[{post.type}] {post.title}</p>
                <p className="text-slate-300">{post.content}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <DonationRanking ranking={data.ranking} />
          {user.role === 'lider' && (
            <form onSubmit={addDonation} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <h3 className="font-semibold">Registrar doação</h3>
              <select
                value={donorId}
                onChange={(e) => setDonorId(e.target.value)}
                className="mt-3 w-full rounded-lg bg-slate-800 px-3 py-2"
                required
              >
                <option value="">Selecione membro</option>
                {data.members.map((member) => (
                  <option key={member.id} value={member.id}>{member.name}</option>
                ))}
              </select>
              <input
                type="number"
                min="1"
                value={grams}
                onChange={(e) => setGrams(e.target.value)}
                className="mt-2 w-full rounded-lg bg-slate-800 px-3 py-2"
                placeholder="Quantidade (gramas)"
                required
              />
              <button className="mt-3 w-full rounded-lg bg-emerald-500 px-3 py-2 font-semibold text-slate-950">Salvar</button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
