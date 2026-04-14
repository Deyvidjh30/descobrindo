export default function DonationRanking({ ranking }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
      <h3 className="mb-3 text-lg font-semibold text-white">🏆 Ranking de Doadores</h3>
      <ul className="space-y-2">
        {ranking.map((item, index) => (
          <li key={item.name} className="flex items-center justify-between rounded-lg bg-slate-800/80 px-3 py-2 text-sm">
            <span className="text-slate-200">#{index + 1} {item.name}</span>
            <span className="font-semibold text-emerald-300">{item.grams}g</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
