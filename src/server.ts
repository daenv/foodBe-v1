require('dotenv').config();
const app = require('./v1/app');
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Server start with port ${PORT}`);
});

process.on('SIGINT', () => {
  server.close(() => console.log(`exits server express`));
});
