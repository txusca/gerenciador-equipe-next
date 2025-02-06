# Gerenciador de equipe Next

Gerenciador de equipe Next é um sistema simples para organizar pessoas e times em um só lugar. Este projeto foi criado utilizando Next.js, React, TypeScript e Tailwind CSS.

## Estrutura do Projeto

```plaintext
.
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.js
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── public/
├── README.md
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Card.tsx
│   │   │   ├── ColaboradorForm.tsx
│   │   │   ├── TimeForm.tsx
│   │   │   ├── Header.tsx
│   │   │   └── MinhaOrganizacao.tsx
│   │   ├── core/
│   │   │   └── Colaborador.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
├── tailwind.config.ts
└── tsconfig.json
```

## Instalação

Para instalar as dependências do projeto, execute:

```
npm install
```

### Scripts Disponíveis

No diretório do projeto, você pode executar:

`npm install`

Instala as dependências do projeto.

`npm run dev`

Executa o aplicativo no modo de desenvolvimento.\
Abra http://localhost:3000 para ver no navegador.

`npm run build`

Compila o aplicativo para produção na pasta `build`.

`npm run start`

Inicia o servidor de produção.

`npm run lint`

Executa o linter para verificar problemas no código.

### Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### Estrutura de Componentes

<span style="color: blue;">⚛</span> `Card.tsx`

Componente para exibir informações de um colaborador.

<span style="color: blue;">⚛</span> `ColaboradorForm.tsx`

Componente para adicionar um novo colaborador.

<span style="color: blue;">⚛</span> `TimeForm.tsx`

Componente para adicionar um novo time.

<span style="color: blue;">⚛</span> `Header.tsx`

Componente para o cabeçalho do aplicativo.

<span style="color: blue;">⚛</span> `MinhaOrganizacao.tsx`

Componente para exibir a organização dos colaboradores.

### Licença

Este projeto está licenciado sob a Licença MIT.
