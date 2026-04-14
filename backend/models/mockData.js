export const diretorias = [
  { slug: 'DIATINF', description: 'Diretoria de TI e inovação', courses: ['Informática', 'Sistemas'] },
  { slug: 'DIAREN', description: 'Diretoria de artes e ensaio', courses: ['Artes', 'Educação Física'] },
  { slug: 'DIACIN', description: 'Diretoria de cenário e integração', courses: ['Design', 'Edificações'] },
  { slug: 'DIACON', description: 'Diretoria de comunicação', courses: ['Administração', 'Logística'] },
];

export const users = [
  { id: 'u1', matricula: '2024001', senha: 'senha123', name: 'Ana Paula', role: 'lider', diretoria: 'DIATINF', membershipStatus: 'approved' },
  { id: 'u2', matricula: '2024002', senha: 'senha123', name: 'Bruno Lima', role: 'membro', diretoria: null, membershipStatus: 'none' },
  { id: 'u3', matricula: '2024003', senha: 'senha123', name: 'Carla Souza', role: 'sublider', diretoria: 'DIATINF', membershipStatus: 'approved' },
];

export const posts = {
  DIATINF: [{ id: 'p1', area: 'Sonoplastia', type: 'Aviso', title: 'Reunião técnica', content: 'Hoje às 19h no laboratório.' }],
  DIAREN: [],
  DIACIN: [],
  DIACON: [],
};

export const donations = [
  { userId: 'u1', diretoria: 'DIATINF', grams: 1500 },
  { userId: 'u3', diretoria: 'DIATINF', grams: 900 },
];

export const membershipRequests = [];
