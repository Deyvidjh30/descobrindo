import { diretorias, posts, users, donations } from '../models/mockData.js';

export function listDirectorias() {
  return diretorias;
}

export function buildHub(slug) {
  const members = users.filter((u) => u.diretoria === slug && u.membershipStatus === 'approved');
  const byUser = new Map();
  for (const donation of donations.filter((d) => d.diretoria === slug)) {
    byUser.set(donation.userId, (byUser.get(donation.userId) || 0) + donation.grams);
  }

  const ranking = members
    .map((m) => ({ name: m.name, grams: byUser.get(m.id) || 0 }))
    .sort((a, b) => b.grams - a.grams);

  const totalGrams = ranking.reduce((acc, item) => acc + item.grams, 0);

  return {
    members,
    posts: posts[slug] || [],
    ranking,
    totalKg: totalGrams / 1000,
  };
}
