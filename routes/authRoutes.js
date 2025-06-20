const express = require('express');
const router = express.Router();
const User = require('../models/user');

function verificarAdmin(req, res, next) {
  if (req.session.adminAutenticado) {
    next();
  } else {
    res.redirect('/usuarios'); // redireciona para a tela de senha
  }
}


// Tela inicial
router.get('/', (req, res) => {
  res.render('index');
});

// Formulário de registro
router.get('/register', (req, res) => {
  res.render('register', { user: null });
});

// Formulário de login
router.get('/login', (req, res) => {
  res.render('login');
});

// Formulário de acesso à área de usuários
router.get('/usuarios', (req, res) => {
  res.render('usuariosAuth');
});

// Formulário de edição do usuário
router.get('/usuarios/edit/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.render('register', { user }); 
});


// Processar registro
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    await User.create({ username, email, password }); // sem hash por enquanto
    res.redirect('/login');
  } catch (error) {
    res.send('Erro ao registrar usuário');
  }
});

// Processar login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email, password } });

  if (user) {
    res.render('dashboard', { user });
  } else {
    res.send('Credenciais inválidas');
  }
});


// Verificar permissão para ver os usuários
router.post('/usuarios', async (req, res) => {
  const { adminPass } = req.body;
  const senha = 'admin123';

  if (adminPass === senha) {
    req.session.adminAutenticado = true;
    const usuarios = await User.findAll();
    res.render('usuarios', { usuarios });
  } else {
    res.send('Senha incorreta. <a href="/usuarios">Tentar novamente</a>');
  }
});

router.get('/usuarios', verificarAdmin, async (req, res) => {
  const usuarios = await User.findAll();
  res.render('usuarios', { usuarios });
});


// Atualizar usuário
router.post('/usuarios/edit/:id', async (req, res) => {
  const { username, email, password } = req.body;
  await User.update({ username, email, password }, { where: { id: req.params.id } });
  res.redirect('/usuarios');
});

// Excluir usuário
router.post('/usuarios/delete/:id', async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id } });
  res.redirect('/usuarios');
});

module.exports = router;
