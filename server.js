const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 80; // Порт сервера

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Папка для статических файлов

// Функция генерации случайного пароля
function generatePassword(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|;:,.<>?';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;
}

// Маршрут для отображения HTML страницы
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Маршрут для обработки запроса на генерацию пароля
app.post('/generate_password', (req, res) => {
  const passwordLength = parseInt(req.body.password_length);
  const password = generatePassword(passwordLength);
  res.send(password);
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server running at http://c2072.myvds.org:${port}`);
});
