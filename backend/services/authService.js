import jwt from 'jsonwebtoken';
import { findByMatricula } from '../repositories/userRepository.js';

const SECRET = 'dev-secret-key';

export function authenticateUser(matricula, senha) {
  const user = findByMatricula(matricula);
  if (!user || user.senha !== senha) {
    throw new Error('Matrícula ou senha inválida.');
  }

  const token = jwt.sign({ sub: user.id, role: user.role }, SECRET, { expiresIn: '6h' });

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      role: user.role,
      diretoria: user.diretoria,
      membershipStatus: user.membershipStatus,
    },
  };
}

export function verifyToken(token) {
  return jwt.verify(token, SECRET);
}
