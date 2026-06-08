# fluxo - Asset Intelligence & Wealth Management

**fluxo** é uma plataforma técnica de gestão de patrimônio de alta fidelidade, desenhada para usuários que exigem precisão, clareza e insights analíticos profundos. Afastando-se da estética tradicional de bancos de varejo, o Fluxo adota uma interface "Neon Dark" inspirada em terminais de trading técnico e ferramentas de gestão de ativos premium.

## 🚀 Tecnologias e Arquitetura
- **Next.js 14+ (App Router)**: Framework React de ponta para renderização híbrida e rotas otimizadas.
- **React & TypeScript**: Tipagem forte e rigorosa em todo o fluxo de dados e estado da interface.
- **Tailwind CSS v4 (Alpha)**: Estilização utilitária ultra-rápida, centralizada através de um design system no `@theme`.
- **Recharts**: Renderização de gráficos interativos de alta fidelidade e performance.
- **Prisma ORM & SQLite**: Persistência de dados local segura e expansível.

## 🎨 Design System: "Neon Dark"
Nossa identidade visual se apoia na integridade técnica e fluidez de mercado:

*   **Base Surface**: `#060B14` (Deep Space Blue)
*   **Primary Accent**: `#00F5D4` (Electric Cyan) — Foco em saldos, brand, e CTAs principais.
*   **Cores Funcionais**:
    *   Income / Positivo: `#B4FF6A` (Neon Lime)
    *   Expense / Negativo: `#FF4D6A` (Neon Rose)
    *   Alertas / Warning: `#FFB020` (Neon Amber)
*   **Tipografia**:
    *   *JetBrains Mono*: Toda a data técnica numérica e labels de charts.
    *   *Inter / Plus Jakarta Sans*: Textos e labels da interface.

## 📦 Estrutura do Projeto (Screen Inventory)
Consulte o arquivo `PRD.md` para um detalhamento profundo da nossa arquitetura de produto. O projeto é dividido nas seguintes features implementadas:

1. **Onboarding Flow (`/onboarding`)**: Configuração inicial de Metas e Perfil do usuário.
2. **Dashboard Global (`/`)**: Visão consolidada em tempo real de ativos e progresso de metas.
3. **Transaction Ledger (`/transactions`)**: Timeline de alta fidelidade com gastos e fluxo de caixa.
4. **Metas Financeiras (`/goals`)**: Acompanhamento dinâmico e inteligente de objetivos (reserva, viagens, bens).
5. **Relatórios Analíticos (`/reports`)**: Indexação de volatilidade, evolução patrimonial e taxas de economia.
6. **Investment Deep-Dive (`/investments/[id]`)**: Charting de performance de ativos, trade interface interativa e top holdings.
7. **Security & Profile (`/profile`)**: Configuração de segurança de conta e 2FA.

## 🛠️ Como Iniciar Localmente

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Configure o ambiente:**
   Copie as configurações do `.env.example`:
   ```bash
   cp .env.example .env
   ```

3. **Inicialize o Banco de Dados (Prisma):**
   ```bash
   npx prisma db push
   ```

4. **Rode o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. Acesse o terminal web em [http://localhost:3000](http://localhost:3000). 

## 📝 Documentação Adicional
- Leia o [PRD](PRD.md) para entender a visão do produto.
- Acompanhe o [CHANGELOG](CHANGELOG.md) para verificar o histórico de features integradas na migração para Next.js.
