import { mockApiRequest } from './mockApi';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
const ENABLE_MOCK = import.meta.env.VITE_ENABLE_MOCK === 'true';

export async function apiRequest(path, { method = 'GET', token, body } = {}) {
  if (ENABLE_MOCK) {
    return mockApiRequest(path, { method, body });
  }

  try {
    const response = await fetch(`${API_URL}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Erro na requisição.');
    }

    return response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      return mockApiRequest(path, { method, body });
    }
    throw error;
  }
}
