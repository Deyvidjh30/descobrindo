import { authenticateUser } from '../services/authService.js';

export function login(req, res) {
  try {
    const { matricula, senha } = req.body;
    const data = authenticateUser(matricula, senha);
    res.json(data);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}
