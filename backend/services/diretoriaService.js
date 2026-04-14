import { buildHub, listDirectorias } from '../repositories/diretoriaRepository.js';

export function getDirectorias() {
  return listDirectorias();
}

export function getHub(slug) {
  return buildHub(slug);
}
