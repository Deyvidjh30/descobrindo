import { createContext, useMemo, useState } from 'react';
import { apiRequest } from '../services/api';

export const AuthContext = createContext(null);

function getStoredUser() {
  const saved = localStorage.getItem('user');
  if (!saved) return null;

  try {
    return JSON.parse(saved);
  } catch (_error) {
    localStorage.removeItem('user');
    return null;
  }
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [user, setUser] = useState(getStoredUser);

  const login = async (matricula, senha) => {
    const data = await apiRequest('/auth/login', {
      method: 'POST',
      body: { matricula, senha },
    });

    setToken(data.token);
    setUser(data.user);
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const value = useMemo(() => ({ token, user, login, logout, setUser }), [token, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
