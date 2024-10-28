// chat_app.js
const EventEmitter = require("events");
const chatEmitter = new EventEmitter();

// Функция для отправки сообщения
function sendMessage(username, message, emitter) {
  emitter.emit("message", { username, message });
}

// Регистрация обработчика для события `message`
chatEmitter.on("message", (data) => {
  console.log(`${data.username}: ${data.message}`);
});

// Вызов функции sendMessage с различными пользователями и сообщениями
sendMessage("Alice", "Привет всем!", chatEmitter);
sendMessage("Bob", "Привет, Alice!", chatEmitter);
sendMessage("Charlie", "Как дела?", chatEmitter);
