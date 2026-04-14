import { askMembership } from '../services/membershipService.js';

export function request(req, res) {
  try {
    if (req.user.diretoria && req.user.diretoria !== req.body.diretoria) {
      return res.status(400).json({ message: 'Usuário já pertence a outra diretoria.' });
    }

    const user = askMembership(req.user.id, req.body.diretoria);
    return res.json({ user });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}
