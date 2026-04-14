import { users, membershipRequests } from '../models/mockData.js';

export function findByMatricula(matricula) {
  return users.find((u) => u.matricula === matricula);
}

export function findById(id) {
  return users.find((u) => u.id === id);
}

export function requestMembership(userId, diretoria) {
  const user = findById(userId);
  if (!user) return null;
  user.diretoria = diretoria;
  user.membershipStatus = 'pending';
  membershipRequests.push({ userId, diretoria, status: 'pending' });
  return user;
}
