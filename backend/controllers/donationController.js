import { registerDonation } from '../services/donationService.js';

export function create(req, res) {
  try {
    const result = registerDonation(req.user.role, req.body);
    res.json(result);
  } catch (error) {
    res.status(403).json({ message: error.message });
  }
}
