
# WesFlix 🎬

Bem-vindo ao **WesFlix**, uma aplicação de catálogo de filmes construída com Next.js e Tailwind CSS. 
Explore detalhes dos filmes mais populares, salve seus favoritos e aproveite uma experiência simples e responsiva.

---

## ✨ Sobre o Projeto

O **WesFlix** foi criado com o objetivo de fornecer uma plataforma leve e funcional para listar filmes, 
visualizar detalhes e gerenciar uma lista de favoritos usando o armazenamento local do navegador. 
A aplicação utiliza dados da **API do TMDB** e é ideal como estudo prático de Next.js e consumo de APIs.

---

## 🚀 Funcionalidades Implementadas

### 🏠 Página Inicial

- Lista de filmes populares carregados dinamicamente da API.
- Cards com imagens, títulos e botões de detalhes.

### 🎞️ Página de Detalhes do Filme

- Visualização de banner (poster completo), título e sinopse.
- Informações detalhadas do filme.
- Botão para adicionar/remover da lista de favoritos.

### ⭐ Lista de Favoritos

- Página dedicada com todos os filmes salvos pelo usuário.
- Opção para visualizar detalhes ou excluir da lista.

### 🔄 Armazenamento Local (localStorage)

- Persistência de favoritos entre sessões usando o navegador.

### 📱 Layout Responsivo

- Estilizado com **Tailwind CSS** para adaptação em diferentes tamanhos de tela.
- Design moderno e minimalista.

---

## 🛠️ Tecnologias Utilizadas

- **Framework Principal:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Notificações:** react-hot-toast
- **Ícones:** React Icons
- **API de Dados:** [The Movie Database (TMDB)](https://www.themoviedb.org/)
- **Deploy:** Vercel (recomendado)

---

## 🏁 Começando

Siga estas instruções para obter uma cópia do projeto rodando na sua máquina local para desenvolvimento e testes.

### ✅ Pré-requisitos

- [Node.js](https://nodejs.org) (versão 18.x ou superior recomendada)
- npm ou yarn

### ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/wesflix.git
cd wesflix
```

Instale todas as dependências do projeto:

Com npm:

```bash
npm install
```

Ou com yarn:

```bash
yarn install
```

### 📦 Instalação Manual de Dependências (caso necessário)

```bash
npm install react-hot-toast react-icons
```

### 🔑 Configuração da API do TMDB

Crie um arquivo `.env.local` na raiz do projeto e adicione sua chave de API do TMDB:

```env
NEXT_PUBLIC_TMDB_API_KEY=sua_api_key_aqui
```

Você pode obter sua chave gratuita em [https://www.themoviedb.org/](https://www.themoviedb.org/).

### ▶️ Rodando o Servidor de Desenvolvimento

Com npm:

```bash
npm run dev
```

Ou com yarn:

```bash
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar o projeto.

A aplicação será recarregada automaticamente sempre que você fizer alterações nos arquivos.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.
