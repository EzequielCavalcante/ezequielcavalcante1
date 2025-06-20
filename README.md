# ezequielcavalcante1
Aplicação web simples para cadastro, edição, listagem e exclusão de usuários, com sistema básico de login e proteção de acesso administrativo via senha.
# Aplicação Web de Usuários com Express, EJS, Sequelize e SQLite

---

## Descrição

Esta é uma aplicação web simples para cadastro, edição, listagem e exclusão de usuários, com sistema básico de login e proteção de acesso administrativo via senha. Utiliza:

- **Express** para o servidor web
- **EJS** para views (templating engine) com partials
- **Sequelize** como ORM para banco SQLite
- **express-session** para controle de sessões e autenticação básica

---

## Funcionalidades

- Tela inicial com links para registrar, logar e área administrativa
- Cadastro de usuário (nome, email, senha)
- Login de usuário
- Dashboard personalizado após login
- Área administrativa protegida por senha “admin123”
- Listagem, edição e exclusão de usuários pela área administrativa
- Edição dos dados do usuário com formulário pré-preenchido


---

## Como rodar a aplicação

### Pré-requisitos

- Node.js instalado (recomendo versão 16+)

---

### Passos para iniciar

1. Clone ou baixe o projeto

2. abra um terminal bash e digite:
	node server.js

3. abra no navegador uma nova aba e digite o seguinte endereço
	http://localhost:3000


Fluxo de uso

  Registrar usuário:
    Na tela inicial Clique no botão "Registrar-se" preencha nome, email e senha.

  Fazer login:
    Na tela inicial Clique no botão "Login" ou logo após registrar você será redirecionado para a tela de login onde você colocará o email e senha cadastrados para entrar.

  Área administrativa:
   	Na tela inicial clique no botão "Ver todas as contas (admin) então será pedido a senha administrativa (admin123).
    após isso aparecerá a lista com todos usuários cadastrados com opções para editar ou excluir.

  Editar usuário:
    Na lista administrativa, clique em “Editar” para alterar dados do usuário.

  Excluir usuário:
    Na lista administrativa, clique em “Excluir” para remover o usuário.

Observações
Senhas são armazenadas em texto plano (sem hash) 
O banco SQLite fica em arquivo database.sqlite
