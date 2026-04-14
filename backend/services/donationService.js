import { addDonation } from '../repositories/donationRepository.js';

export function registerDonation(requesterRole, payload) {
  if (requesterRole !== 'lider') {
    throw new Error('Apenas líder pode registrar doações.');
  }

  if (!payload.grams || payload.grams <= 0) {
    throw new Error('Quantidade inválida.');
  }

  addDonation(payload);
  return { success: true };
}
