<div align="center">
  
# Shoppu ショップ

 
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) [![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/) [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  


[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

</div>

---

## 📖 Sobre

**Shoppu** (do japonês ショップ "shop" + inglês) é uma plataforma de e-commerce full-stack completa, desenvolvida com foco em **arquitetura escalável**, **boas práticas de código**, **tecnologias modernas** e **experiência do usuário**.

### 🎯 Objetivos

- ✅ Construir um e-commerce funcional do zero
- ✅ Aplicar padrões de arquitetura profissionais (Clean Architecture, SOLID)
- ✅ Implementar autenticação e autorização robustas
- ✅ Criar uma experiência de usuário fluida e responsiva

---

## ✨ Funcionalidades

### 🏪 **Loja (Cliente)**
- 📋 Catálogo de produtos com filtros e busca
- 📋 Carrinho de compras persistente
- 📋 Checkout completo (multi-step)
- 📋 Sistema de avaliações de produtos
- 📋 Histórico de pedidos

### 🔐 **Autenticação**
- 🚧 Registro e login de usuários
- 🚧 Autenticação JWT
- 📋 OAuth (Google, GitHub) - opcional
- 📋 Recuperação de senha

### 👨‍💼 **Painel Administrativo**
- 🚧 CRUD de produtos
- 🚧 Gestão de categorias
- 📋 Dashboard com métricas
- 📋 Gestão de pedidos
- 📋 Relatórios de vendas

### 🛠️ **Infraestrutura**
- ✅ API RESTful com TypeScript
- ✅ Arquitetura em camadas
- 🚧 Banco de dados PostgreSQL + Prisma ORM
- 📋 Testes automatizados (Jest + Supertest)
- 📋 CI/CD com GitHub Actions
- 📋 Deploy (Vercel + Railway)
- 📋 Documentação automática (Swagger)

**Legenda:** ✅ Completo • 🚧 Em desenvolvimento • 📋 Planejado

---

## 🚀 Stack Tecnológica

### **Backend**

| Tecnologia | Versão | Por que escolhi |
|-----------|--------|-----------------|
| **Node.js** | v18+ | Runtime JavaScript server-side, ecossistema maduro |
| **Express** | ^4.x | Framework minimalista e flexível para APIs REST |
| **TypeScript** | ^5.x | Type-safety, menos bugs, melhor DX |
| **Prisma** | ^5.x | ORM moderno com type-safety e migrations automáticas |
| **PostgreSQL** | v14+ | Banco relacional robusto, ACID compliant |
| **Zod** | ^3.x | Validação schema-based compartilhada front+back |
| **JWT** | - | Autenticação stateless, escalável |
| **Bcrypt** | - | Hash de senhas seguro (salt + hash) |
| **Helmet** | - | Segurança HTTP headers |
| **Express Rate Limit** | - | Proteção contra brute-force e DDoS |
| **Swagger** | - | Documentação interativa da API |
| **Jest + Supertest** | - | Framework de testes unitários e de integração |

### **Frontend**

| Tecnologia | Por que escolhi |
|-----------|-----------------|
| **React** | Biblioteca mais demandada no mercado, component-based |
| **TypeScript** | Consistência com backend, type-safety end-to-end |
| **Next.js** | SSR/SSG, otimizações automáticas, SEO-friendly |
| **Shadcn/ui** | Componentes acessíveis e customizáveis |
| **TailwindCSS** | Utility-first, produtividade, design system consistente |
| **Zustand** | Gerenciamento de estado simples e performático |
| **React Query (TanStack)** | Data fetching, cache e sincronização com servidor |
| **React Hook Form** | Performance, validação declarativa |
| **Zod** | Schema validation com inferência de tipos |
| **Framer Motion** | Animações fluidas (opcional) |

### **DevOps & Qualidade de Código**

| Tecnologia | Função |
|-----------|---------|
| **Docker + Docker Compose** | Containerização e ambiente consistente |
| **GitHub Actions** | CI/CD - testes e deploy automatizados |
| **ESLint** | Linting e padrões de código |
| **Prettier** | Formatação automática |
| **Husky** | Git hooks para qualidade de código |
| **Lint-staged** | Roda linters apenas em arquivos modificados |
| **Sentry** | Error tracking em produção (opcional) |

### **Deploy**
- **Vercel** - Frontend (Next.js)
- **Railway/Render** - Backend (Node.js + PostgreSQL)

---

## 🏗️ Arquitetura

O projeto segue os princípios de **Clean Architecture** e **Separation of Concerns**, organizando o código em camadas com responsabilidades bem definidas:
```
backend/
├── src/
│   ├── controllers/      # Requisições HTTP e respostas
│   ├── services/         # Lógica de negócio e orquestração
│   ├── repositories/     # Acesso a dados (abstração do Prisma)
│   ├── middlewares/      # Autenticação, validação, error handling
│   ├── routes/           # Definição de endpoints
│   ├── types/            # Interfaces TypeScript e DTOs
│   ├── utils/            # Funções auxiliares reutilizáveis
│   └── config/           # Configurações (Swagger, database, etc)
├── prisma/
│   ├── schema.prisma     # Schema do banco de dados
│   └── migrations/       # Histórico de migrations
├── tests/                # Testes automatizados
└── docs/                 # Documentação adicional
```

### 📊 Fluxo de Requisição
```
Cliente → Routes → Middlewares → Controller → Service → Repository → Database
              ↓         ↓
         Rate Limit  Validation
          Security    (Zod)
          (Helmet)
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

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [PostgreSQL](https://www.postgresql.org/) (v14 ou superior)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) (opcional, mas recomendado)

### **Passo a Passo**

1. **Clone o repositório**
```bash
git clone https://github.com/ninecgs/shoppu.git
cd shoppu
```

2. **Backend Setup**
```bash
cd backend
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na pasta `backend/`:
```env
# Server
PORT=3000
NODE_ENV=development

# Database
DATABASE_URL="postgresql://postgres:sua_senha@localhost:5432/shoppu_dev"

# JWT
JWT_SECRET="seu_secret_super_secreto_aqui"

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000  # 15 minutos
RATE_LIMIT_MAX_REQUESTS=100   # 100 requests por janela
```

4. **Configure o banco de dados**
```bash
# Criar banco de dados
createdb shoppu_dev

# Rodar migrations do Prisma
npx prisma migrate dev

# (Opcional) Popular banco com dados de teste
npx prisma db seed
```

5. **Inicie o servidor**
```bash
# Desenvolvimento
npm run dev

# Ou com Docker
docker-compose up
```

O servidor estará rodando em `http://localhost:3000`

6. **Acesse a documentação da API**

- Health check: `http://localhost:3000/api/health`
- Swagger docs: `http://localhost:3000/api-docs` (quando configurado)

---

## 🗺️ Roadmap

### **Fase 1: Backend Foundation** ⌛
- [x] Setup do projeto (TypeScript, Express, estrutura de pastas)
- [x] Servidor HTTP funcionando
- [x] ESLint + Prettier configurados
- [ ] Banco de dados (Prisma + PostgreSQL)
- [ ] Sistema de autenticação (JWT)
- [ ] Helmet + Rate Limiting
- [ ] Validação com Zod
- [ ] CRUD de produtos e categorias
- [ ] Upload de imagens
- [ ] Documentação Swagger
- [ ] Testes unitários básicos

### **Fase 2: Frontend Dashboard Admin** 📋
- [ ] Setup React + TypeScript + Next.js
- [ ] Configuração Shadcn/ui + TailwindCSS
- [ ] Zustand stores (auth, produtos)
- [ ] React Query setup
- [ ] Tela de login
- [ ] Dashboard com métricas
- [ ] Interface de gestão de produtos
- [ ] Interface de gestão de categorias
- [ ] React Hook Form + Zod

### **Fase 3: Storefront (Loja)** 📋
- [ ] Catálogo de produtos (grid responsivo)
- [ ] Página de detalhes do produto
- [ ] Sistema de busca e filtros (Zustand)
- [ ] Carrinho de compras (Zustand + persist)
- [ ] React Query para data fetching
- [ ] Animações com Framer Motion (opcional)

### **Fase 4: Checkout & Pedidos** 📋
- [ ] Fluxo de checkout multi-step
- [ ] Integração com gateway de pagamento (mockado)
- [ ] Sistema de pedidos (backend + frontend)
- [ ] Histórico de compras
- [ ] Validação completa com Zod

### **Fase 5: Features Avançadas** 📋
- [ ] Sistema de avaliações
- [ ] Wishlist (Zustand)
- [ ] Cupons de desconto
- [ ] Notificações por email (opcional)
- [ ] OAuth (Google/GitHub) - opcional

### **Fase 6: DevOps & Produção** 📋
- [ ] Testes completos (Jest + Supertest)
- [ ] Testes E2E com Cypress (opcional)
- [ ] Docker + Docker Compose
- [ ] Husky + Lint-staged
- [ ] CI/CD com GitHub Actions
- [ ] Deploy em produção (Vercel + Railway)
- [ ] Monitoramento com Sentry (opcional)


---

## 📚 Decisões Técnicas

### **Arquitetura em Camadas**
Separação de responsabilidades facilita manutenção, testes e escalabilidade. Código mais limpo e organizado.

### **Prisma vs TypeORM**
Prisma oferece melhor integração com TypeScript (type-safety completo), migrations mais simples, schema declarativo e legível.

### **PostgreSQL vs MongoDB**
E-commerce tem dados fortemente relacionais (produtos ↔ categorias ↔ pedidos). PostgreSQL oferece ACID compliance (crucial para transações financeiras) e queries complexas mais fáceis (JOINs, aggregations).

### **Zustand vs Redux**
Zustand é mais simples (menos boilerplate), mais performático e suficiente para o escopo do projeto. Redux seria overkill.

### **React Query**
Elimina código boilerplate de data fetching, oferece cache inteligente e sincronização automática com o servidor. Padrão da indústria.

### **Shadcn/ui vs Material-UI**
Shadcn/ui oferece componentes que você possui (copy-paste), totalmente customizáveis, acessíveis por padrão. Mais controle que bibliotecas de componentes tradicionais.

### **Zod (Backend + Frontend)**
Compartilhar schemas de validação entre frontend e backend elimina duplicação, garante consistência e oferece type-safety completo.

### **Helmet + Rate Limiting**
Segurança essencial: Helmet adiciona headers de segurança, Rate Limiting previne brute-force e DDoS. Ambos são práticas obrigatórias em produção.

---

## 🧪 Testes

### **Estratégia de Testes**
```
📊 Pirâmide de Testes

        /\
       /  \      E2E (Cypress) - Poucos
      /____\     Integration (Supertest) - Médio
     /______\    Unit (Jest) - Muitos
```

**Cobertura alvo:** 70%+ de code coverage

**O que será testado:**
- ✅ Services (lógica de negócio)
- ✅ Repositories (queries)
- ✅ Controllers (requisições)
- ✅ Middlewares (auth, validation)
- ✅ Utils (funções auxiliares)
- 🔜 E2E (fluxos completos) - opcional

---

## 🔒 Segurança

**Medidas implementadas:**
- 🔐 JWT com refresh tokens
- 🔒 Bcrypt para hash de senhas (salt + hash)
- 🛡️ Helmet (headers de segurança)
- ⏱️ Rate Limiting (proteção brute-force)
- ✅ Validação de entrada (Zod)
- 🚫 SQL Injection (Prisma parametriza queries)
- 🔑 Variáveis de ambiente para secrets
- 🌐 CORS configurado

---

## 📖 Documentação

- **API:** Swagger UI disponível em `/api-docs`
- **Código:** JSDoc + comentários estratégicos
- **Arquitetura:** Este README + `/docs`
- **Decisões técnicas:** Documentadas neste README
