# Sistema Web

Interface web responsiva desenvolvida com HTML, CSS e JavaScript. O projeto reúne uma página inicial com navegação, telas de login e cadastro, perfil de usuário e uma área de games com dados de Pokémon carregados em tempo real pela [PokéAPI](https://pokeapi.co/).

## Demonstração

Acesse o projeto publicado no GitHub Pages:

**[guilhermefariah.github.io/Sistema-Web](https://guilhermefariah.github.io/Sistema-Web/)**

## Funcionalidades

- Página inicial com navegação entre as áreas do sistema;
- Tela de login;
- Tela de cadastro de usuário;
- Página de perfil;
- Área de games com exibição do Pokémon do dia;
- Consumo da PokéAPI para mostrar imagem, tipos, habilidades, medidas e estatísticas do Pokémon;
- Indicadores de carregamento, conexão com a API e erro;
- Layout responsivo com tema escuro e componentes estilizados em CSS.

## Tecnologias

- **HTML5** — estrutura das páginas;
- **CSS3** — layout, responsividade e identidade visual;
- **JavaScript** — interatividade e integração com a PokéAPI;
- **PokéAPI** — fonte dos dados exibidos na área de games;
- **GitHub Pages** — hospedagem da aplicação.

## Como executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/Guilhermefariah/Sistema-Web.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd Sistema-Web
   ```

3. Abra `frontend/index.html` no navegador.

   Para uma experiência mais próxima de um ambiente de desenvolvimento, use uma extensão como **Live Server** no Visual Studio Code ou qualquer servidor HTTP local.

## Estrutura do projeto

```text
Sistema-Web/
├── frontend/
│   ├── assets/             # Imagens e recursos visuais
│   ├── css/                # Estilos globais e das páginas de usuário
│   ├── js/                 # Scripts JavaScript
│   ├── pages/
│   │   ├── games/          # Página da Pokédex
│   │   └── user/           # Login, cadastro e perfil
│   └── index.html          # Página inicial
└── README.md
```

## Observações

- A área de games precisa de conexão com a internet para consultar a PokéAPI.
- As telas de login, cadastro e perfil são atualmente uma demonstração visual no front-end; ainda não há autenticação nem persistência de dados em um servidor.

## Autor

Desenvolvido por [Guilherme Faria](https://github.com/Guilhermefariah).
