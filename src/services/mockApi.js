const diretorias = [
  { slug: 'DIATINF', description: 'Diretoria de TI e inovação', courses: ['Informática', 'Sistemas'] },
  { slug: 'DIAREN', description: 'Diretoria de artes e ensaio', courses: ['Artes', 'Educação Física'] },
  { slug: 'DIACIN', description: 'Diretoria de cenário e integração', courses: ['Design', 'Edificações'] },
  { slug: 'DIACON', description: 'Diretoria de comunicação', courses: ['Administração', 'Logística'] },
];

const users = {
  '2024001': { id: 'u1', name: 'Ana Paula', role: 'lider', diretoria: 'DIATINF', membershipStatus: 'approved' },
  '2024002': { id: 'u2', name: 'Bruno Lima', role: 'membro', diretoria: null, membershipStatus: 'none' },
};

const hubs = {
  DIATINF: {
    members: [
      { id: 'u1', name: 'Ana Paula' },
      { id: 'u2', name: 'Bruno Lima' },
    ],
    posts: [{ id: 'p1', type: 'Aviso', title: 'Reunião geral', content: 'Ensaio às 18h no ginásio.' }],
    ranking: [
      { name: 'Ana Paula', grams: 1500 },
      { name: 'Bruno Lima', grams: 700 },
    ],
    totalKg: 2.2,
  },
  DIAREN: { members: [], posts: [], ranking: [], totalKg: 0 },
  DIACIN: { members: [], posts: [], ranking: [], totalKg: 0 },
  DIACON: { members: [], posts: [], ranking: [], totalKg: 0 },
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function mockApiRequest(path, { method = 'GET', body } = {}) {
  await wait(120);

  if (path === '/auth/login' && method === 'POST') {
    if (body.matricula === '2024001' && body.senha === 'senha123') {
      return { token: 'mock-token', user: users['2024001'] };
    }
    if (body.matricula === '2024002' && body.senha === 'senha123') {
      return { token: 'mock-token', user: users['2024002'] };
    }
    throw new Error('Matrícula ou senha inválida.');
  }

  if (path === '/directorias' && method === 'GET') {
    return diretorias;
  }

  if (path === '/memberships/request' && method === 'POST') {
    const user = users['2024002'];
    user.diretoria = body.diretoria;
    user.membershipStatus = 'pending';
    return { user };
  }

  const hubMatch = path.match(/^\/directorias\/(.+)\/hub$/);
  if (hubMatch && method === 'GET') {
    return hubs[hubMatch[1]] || { members: [], posts: [], ranking: [], totalKg: 0 };
  }

  if (path === '/donations' && method === 'POST') {
    return { success: true };
  }

  throw new Error('Rota não disponível no modo mock.');
}
