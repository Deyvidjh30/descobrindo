import { requestMembership } from '../repositories/userRepository.js';

export function askMembership(userId, diretoria) {
  const user = requestMembership(userId, diretoria);
  if (!user) throw new Error('Usuário não encontrado.');

  return {
    id: user.id,
    name: user.name,
    role: user.role,
    diretoria: user.diretoria,
    membershipStatus: user.membershipStatus,
  };
}
