# Fluxo - App de Controle Financeiro Pessoal com IA

Estrutura base do projeto gerada para receber as telas do Google Stitch.

## Tecnologias Utilizadas
- **Next.js 14+** (App Router)
- **React & TypeScript**
- **Tailwind CSS v3** (Para estilização, quando integrado com Stitch)
- **Prisma ORM & SQLite** (Banco de dados local)

## Como Rodar Localmente

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Crie seu arquivo de ambiente:
   Copie o arquivo `.env.example` para `.env`:
   ```bash
   cp .env.example .env
   ```

3. Inicialize o banco de dados e as tipagens do Prisma:
   ```bash
   npx prisma db push
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador. O projeto está agora pronto para você importar o código gerado pelo Google Stitch!
