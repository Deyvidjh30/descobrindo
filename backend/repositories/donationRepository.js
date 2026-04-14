import { donations } from '../models/mockData.js';

export function addDonation({ userId, diretoria, grams }) {
  donations.push({ userId, diretoria, grams });
  return true;
}
