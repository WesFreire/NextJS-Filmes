🎬 WesFlix
Bem-vindo ao WesFlix, uma aplicação moderna para explorar filmes populares e salvar seus favoritos! Este projeto utiliza tecnologias modernas do ecossistema React/Next.js para fornecer uma navegação rápida, visual atrativo e uma experiência interativa ao usuário.

✨ Sobre o Projeto
O WesFlix é uma SPA (Single Page Application) desenvolvida com Next.js (App Router) que consome dados da API do TMDB para exibir uma galeria de filmes, com páginas de detalhes e um sistema de favoritos armazenado localmente no navegador.

Foi criado com o objetivo de praticar o consumo de APIs, roteamento com o App Router, uso de imagens otimizadas, estilização com Tailwind CSS e controle de estado no navegador.

🚀 Funcionalidades Implementadas
📺 Página Inicial:
Lista dinâmica de filmes populares da API do TMDB.

Imagens em alta resolução (poster e backdrop).

Layout responsivo com grid adaptável.

🎞️ Detalhes do Filme:
Página individual com informações completas do filme: título, sinopse, nota, imagem de fundo.

Visual moderno com destaque para a imagem do backdrop.

Botão de adicionar/remover dos favoritos.

❤️ Meus Favoritos:
Página para listar os filmes salvos pelo usuário.

Layout em cards com poster, nome e ações.

Botões para ver detalhes ou remover da lista.

💡 Funcionalidades Extras:
Armazenamento local de favoritos com localStorage.

Toasts com feedback usando react-hot-toast.

UI responsiva e acessível com Tailwind CSS.

Navegação fluida com o App Router do Next.js.

🛠️ Tecnologias Utilizadas
Framework Principal: Next.js (App Router)

Linguagem: TypeScript

Estilização: Tailwind CSS

Ícones & Feedback: React Icons, React Hot Toast

Imagens Otimizadas: Next/Image

API de Dados: The Movie Database (TMDB)

🏁 Começando
✅ Pré-requisitos
Node.js v18 ou superior

npm ou yarn

⚙️ Instalação
Clone o repositório:

bash
Copy
Edit
git clone https://github.com/seu-usuario/wesflix.git
cd wesflix
Instale as dependências:

bash
Copy
Edit
npm install
# ou
yarn install
Crie um arquivo .env.local com sua chave da API do TMDB:

ini
Copy
Edit
NEXT_PUBLIC_TMDB_API_KEY=sua_api_key_aqui
▶️ Executando o Projeto
Para rodar localmente em ambiente de desenvolvimento:

bash
Copy
Edit
npm run dev
# ou
yarn dev
Abra o navegador em: http://localhost:3000

🌐 Deploy
Você pode fazer o deploy facilmente usando a Vercel, que oferece suporte nativo a projetos Next.js com App Router.
