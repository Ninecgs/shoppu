<div align="center">
  
# 🛍️ Shoppu

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/) [![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/) [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)




</div>

---

## Sobre

**Shoppu** é uma plataforma de e-commerce full-stack completa, desenvolvida com foco em **arquitetura escalável**, **boas práticas de código** e **experiência do usuário**.

### Objetivos

- ✅ Construir um e-commerce funcional do zero
- ✅ Aplicar padrões de arquitetura profissionais (Clean Architecture, SOLID)
- ✅ Implementar autenticação e autorização robustas
- ✅ Criar uma experiência de usuário fluida e responsiva
- ✅ Documentar decisões técnicas e aprendizados

---

## ✨ Funcionalidades

### 🏪 **Loja (Cliente)**
- 📋 **Planejado:** Catálogo de produtos com filtros e busca
- 📋 **Planejado:** Carrinho de compras persistente
- 📋 **Planejado:** Checkout completo (multi-step)
- 📋 **Planejado:** Sistema de avaliações de produtos
- 📋 **Planejado:** Histórico de pedidos

### 🔐 **Autenticação**
- 🚧 **Em desenvolvimento:** Registro e login de usuários
- 🚧 **Em desenvolvimento:** Autenticação JWT
- 📋 **Planejado:** OAuth (Google, GitHub)
- 📋 **Planejado:** Recuperação de senha

### 👨‍💼 **Painel Administrativo**
- 🚧 **Em desenvolvimento:** CRUD de produtos
- 🚧 **Em desenvolvimento:** Gestão de categorias
- 📋 **Planejado:** Dashboard com métricas
- 📋 **Planejado:** Gestão de pedidos
- 📋 **Planejado:** Relatórios de vendas

### 🛠️ **Infraestrutura**
- ✅ **Completo:** API RESTful com TypeScript
- ✅ **Completo:** Arquitetura em camadas
- 🚧 **Em desenvolvimento:** Banco de dados PostgreSQL + Prisma ORM
- 📋 **Planejado:** Testes automatizados (Jest)
- 📋 **Planejado:** CI/CD com GitHub Actions
- 📋 **Planejado:** Deploy (Vercel + Railway)

**Legenda:** ✅ Completo • 🚧 Em desenvolvimento • 📋 Planejado

---

## 🚀 Tecnologias

### **Backend**

| Tecnologia | Versão | Por que escolhi |
|-----------|--------|-----------------|
| **Node.js** | v18+ | Runtime JavaScript server-side, ecossistema maduro |
| **Express** | ^4.x | Framework minimalista e flexível para APIs REST |
| **TypeScript** | ^5.x | Type-safety, menos bugs, melhor DX |
| **Prisma** | ^5.x | ORM moderno com type-safety e migrations automáticas |
| **PostgreSQL** | v18 | Banco relacional robusto, ACID compliant |
| **JWT** | - | Autenticação stateless, escalável |
| **Bcrypt** | - | Hash de senhas seguro (salt + hash) |
| **Jest** | - | Framework de testes com ótima DX |

### **Frontend** (Planejado)

| Tecnologia | Por que escolhi |
|-----------|-----------------|
| **React** | Biblioteca mais demandada no mercado, component-based |
| **TypeScript** | Consistência com backend, type-safety end-to-end |
| **Next.js** | SSR/SSG, otimizações automáticas, SEO-friendly |
| **TailwindCSS** | Utility-first, produtividade, design system consistente |
| **React Hook Form** | Performance, validação declarativa |
| **Zod** | Schema validation com inferência de tipos |

### **DevOps** (Planejado)

- **Docker** - Containerização
- **GitHub Actions** - CI/CD
- **Vercel** - Deploy frontend
- **Railway/Render** - Deploy backend

---

## 🏗️ Arquitetura

O projeto segue os princípios de **Clean Architecture** e **Separation of Concerns**, organizando o código em camadas com responsabilidades bem definidas:
```
backend/
├── src/
│   ├── controllers/      # Recebe requisições HTTP, retorna respostas
│   ├── services/         # Lógica de negócio (regras, validações, orquestração)
│   ├── repositories/     # Acesso a dados (abstração do Prisma)
│   ├── middlewares/      # Autenticação, validação, error handling
│   ├── routes/           # Definição de rotas e endpoints
│   ├── types/            # Interfaces TypeScript e DTOs
│   └── utils/            # Funções auxiliares reutilizáveis
├── prisma/
│   └── schema.prisma     # Schema do banco de dados
└── tests/                # Testes automatizados
```

### 📊 Fluxo de Requisição
```
Cliente → Routes → Middlewares → Controller → Service → Repository → Database
                                      ↓
                                  Response
```

**Por que essa arquitetura?**

- ✅ **Manutenibilidade:** Mudanças isoladas (ex: trocar DB só afeta repositories)
- ✅ **Testabilidade:** Cada camada pode ser testada isoladamente
- ✅ **Escalabilidade:** Fácil adicionar novas features sem quebrar código existente
- ✅ **Reutilização:** Services podem ser usados em REST, GraphQL, CLI, etc
- ✅ **SOLID Principles:** Cada camada tem uma responsabilidade única

---

## 💻 Como Rodar Localmente

### **Pré-requisitos**

Certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [PostgreSQL](https://www.postgresql.org/) (v14 ou superior)
- [Git](https://git-scm.com/)

### **Passo a Passo**

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/shoppu.git
cd shoppu
```

2. **Instale as dependências do backend**
```bash
cd backend
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na pasta `backend/`:
```env
# Server
PORT=3000

# Database (configure com suas credenciais PostgreSQL)
DATABASE_URL="postgresql://postgres:sua_senha@localhost:5432/shoppu_dev"

# JWT
JWT_SECRET="seu_secret_super_secreto_aqui"
```

4. **Configure o banco de dados**
```bash
# Criar banco de dados (no psql)
createdb shoppu_dev

# Rodar migrations do Prisma (quando disponível)
npx prisma migrate dev

# (Opcional) Popular banco com dados de teste
npx prisma db seed
```

5. **Inicie o servidor**
```bash
npm run dev
```

O servidor estará rodando em `http://localhost:3000`

6. **Teste a API**

Acesse: `http://localhost:3000/api/health`

Você deve ver:
```json
{
  "status": "ok",
  "message": "Shoppu API is running! 🛍️",
  "timestamp": "2025-11-13T..."
}
```

---

## 🗺️ Roadmap

### **Fase 1: Backend Foundation** ✅ (Em andamento)
- [x] Setup do projeto (TypeScript, Express, estrutura de pastas)
- [x] Servidor HTTP funcionando
- [ ] Banco de dados (Prisma + PostgreSQL)
- [ ] Sistema de autenticação (JWT)
- [ ] CRUD de produtos e categorias
- [ ] Upload de imagens

### **Fase 2: Frontend Dashboard Admin** 📋
- [ ] Setup React + TypeScript + Vite
- [ ] Tela de login
- [ ] Dashboard com métricas
- [ ] Interface de gestão de produtos
- [ ] Interface de gestão de categorias

### **Fase 3: Storefront (Loja)** 📋
- [ ] Catálogo de produtos
- [ ] Página de detalhes do produto
- [ ] Carrinho de compras
- [ ] Sistema de busca e filtros

### **Fase 4: Checkout & Pedidos** 📋
- [ ] Fluxo de checkout multi-step
- [ ] Integração com gateway de pagamento
- [ ] Sistema de pedidos
- [ ] Histórico de compras

### **Fase 5: Features Avançadas** 📋
- [ ] Sistema de avaliações
- [ ] Wishlist
- [ ] Cupons de desconto
- [ ] Notificações por email

### **Fase 6: DevOps & Produção** 📋
- [ ] Testes automatizados (Jest + Cypress)
- [ ] Docker + Docker Compose
- [ ] CI/CD com GitHub Actions
- [ ] Deploy em produção
- [ ] Monitoramento e logs

---

## 📚 Aprendizados

### **Decisões Arquiteturais**

**Por que arquitetura em camadas?**
- Separação de responsabilidades facilita manutenção e testes
- Código mais limpo e organizado
- Preparação para escalar (microserviços no futuro)

**Por que Prisma ao invés de TypeORM?**
- Melhor integração com TypeScript (type-safety completo)
- Migrations mais simples
- Schema declarativo e legível
- Comunidade ativa e documentação excelente

**Por que PostgreSQL ao invés de MongoDB?**
- E-commerce tem dados relacionais (produtos, categorias, pedidos)
- ACID compliance (crucial para transações financeiras)
- Queries complexas mais fáceis (JOIN, aggregations)

### **Desafios Enfrentados**

_[Esta seção será atualizada conforme o projeto avança]_

---

