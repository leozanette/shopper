const app = require('./app');
require('dotenv').config();

app.listen(process.env.PORT, () => {
  console.log(`escutando na porta ${process.env.PORT}`)
});