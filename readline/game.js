const rl = require('readline');
const input = rl.createInterface(process.stdin, process.stdout);

let min = 0;
let max = 100;
let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

const checkNumber = (number) => {
  if (!Number(number)) {
    input.question(`Пожалуйста введите число!\n`, (a) => {
      checkNumber(a);
    });
  }
  if (Number(number) == randomNumber) {
    console.log(`Поздравляю! Отгадано число ${number}`);
    input.close();
  }
  if (Number(number) > randomNumber) {
    input.question(`Загаданое число Меньше ${number}.\n`, (a) => {
      checkNumber(a);
    });
  }
  if (Number(number) < randomNumber) {
    input.question(`Загаданое число Больше ${number}.\n`, (a) => {
      checkNumber(a);
    });
  }
};

const startGame = () => {
  input.question(
    'Отгадай число, которое находится в диапазоне от 0 до 100\n',
    (a) => {
      a = checkNumber(a);
    }
  );
};
const welcomeText = () => {
  input.question(
    'Ты готов поиграть в игру на угадывание числа? (да/нет)\n',
    (answer) => {
      if (answer.match(/^д(а)?$/i)) {
        startGame();
      }
    }
  );
};

welcomeText();
