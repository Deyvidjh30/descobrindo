# Torcida Digital — Jogos Internos

Aplicação web moderna e responsiva para organização da abertura dos jogos internos.

## Stack
- Frontend: React + Vite + Tailwind + Framer Motion
- Backend: Node.js + Express
- Auth: JWT
- Arquitetura backend em camadas: Controller → Service → Repository

## Funcionalidades implementadas
- Login por matrícula/senha (mock)
- Dashboard com seleção de diretoria
- Regras de entrada em apenas uma diretoria
- Hub de diretoria com áreas da torcida
- Feed inicial de posts
- Ranking de doações (gramas + total em KG)
- Registro de doação restrito ao papel de líder
- Layout responsivo com tema moderno + mascotes animados na tela de login
- Fallback automático para modo mock no frontend quando API estiver indisponível

## Estrutura
```
/src
  /components
  /pages
  /services
  /hooks
  /contexts
  /styles
/backend
  /controllers
  /services
  /repositories
  /models
  /routes
  /middleware
```

## Como rodar
### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
npm install
npm run dev
```

### Configuração opcional
Crie um `.env` a partir de `.env.example`:
```bash
cp .env.example .env
```

- `VITE_API_URL`: URL da API.
- `VITE_ENABLE_MOCK=true`: força modo mock sem backend.

## Usuários demo
- Líder: `2024001` / `senha123`
- Membro: `2024002` / `senha123`
