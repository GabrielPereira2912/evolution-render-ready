require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

// Configurações básicas
app.use(express.json());
app.use(cors());

// Rota de teste
app.get('/', (req, res) => {
  res.send('Evolution API rodando com sucesso no Render!');
});

// Porta dinâmica para funcionar no Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
