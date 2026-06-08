# Changelog

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

O formato baseia-se no [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/), e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Unreleased] - Em Desenvolvimento

### Features Implementadas na Migração (Stitch -> Next.js)

#### Feature 8: Detalhes de Investimentos (`/investments/[id]`)
- Criação da página dinâmica de detalhes de um ativo.
- Gráfico de performance em tempo real (`AreaChart` do Recharts) com gradiente e markers interativos.
- Painel lateral interativo (`Operar Ativo`) contendo validação de campos (buy/sell).
- Tabela consolidada usando o `MOCK_INVESTMENTS`.

#### Feature 7: Relatórios (`/reports`)
- Criação da página analítica de Relatório Financeiro (`/reports`).
- Integração de gráficos avançados via `Recharts` (BarChart para evolução, PieCharts para distribuição e métrica de economia).
- Tabela de detalhamento alimentada via `MOCK_GOALS`.

#### Feature 6: Objetivos (`/goals`)
- Criação da página de listagem e acompanhamento de metas financeiras (`/goals`).
- Adição de formulário responsivo para criação de novas metas.
- Gráfico estático de progressão de fluxo implementado.
- Reintrodução do link de Relatórios na SideNavBar.

#### Feature 5: Perfil e Onboarding (`/profile`, `/onboarding`)
- Criação da página de Onboarding com seleção interativa de fluxo e redirecionamento.
- Criação da página de Perfil com configurações, exclusão de conta via Modal e formulários com hooks React.
- Avatar de usuário sincronizado globalmente com `MOCK_USER`.

#### Feature 4: Metas e Aportes (Dashboard)
- Adição dos componentes `<SavingsGoalCard />` e `<InvestmentsList />` diretamente na tela inicial.
- Tratamento de formatação local com `formatCurrencyCompact`.

#### Feature 3: Transações (`/transactions`)
- Implementação da tela de transações completa (extrato do usuário).
- Categorização de histórico por datas com renderização de valores agrupados.

#### Feature 2: Dashboard Completo (`/`)
- Conversão total da UI do Stitch em JSX usando React e Tailwind.
- Substituição de gráficos vetoriais hardcoded por bibliotecas dinâmicas interativas (`Recharts`).
- Injeção inicial de Mock Data e Tipagens via `MOCK_TRANSACTIONS` e afins.
- Correção de bugs de layout responsivo (h-min em cards).

#### Feature 1: Setup Global e Layouts
- Setup das configurações globais do `tailwind.config.ts` (design tokens do Fluxo).
- Criação de Layouts unificados para rotas logadas `(dashboard)` com `SideNavBar` e `Header`.
