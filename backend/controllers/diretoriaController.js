import { getDirectorias, getHub } from '../services/diretoriaService.js';

export function list(req, res) {
  res.json(getDirectorias());
}

export function hub(req, res) {
  res.json(getHub(req.params.slug));
}
