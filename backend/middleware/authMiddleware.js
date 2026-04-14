import { findById } from '../repositories/userRepository.js';
import { verifyToken } from '../services/authService.js';

export function authenticate(req, res, next) {
  try {
    const auth = req.headers.authorization;
    if (!auth) throw new Error('Token ausente');
    const token = auth.replace('Bearer ', '');
    const payload = verifyToken(token);
    const dbUser = findById(payload.sub);

    req.user = {
      id: dbUser.id,
      role: dbUser.role,
      diretoria: dbUser.diretoria,
      membershipStatus: dbUser.membershipStatus,
    };
    next();
  } catch (_e) {
    res.status(401).json({ message: 'Não autorizado.' });
  }
}
