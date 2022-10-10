![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

<h1 align="center"> «1.2. Аргументы командной строки и console» </h1>

> **Задание 1.**
> Написать утилиту получения текущей даты и времени с богатым интерфейсом. Для реализации парсинга аргументов командной строки предлагаем использовать [yargs](https://yargs.js.org/).

- Текущая дата и время в формате ISO: `cmd current`

- Текущий год: `cmd current --year` или `cmd current -y`

- Текущий месяц: `cmd current --month` или `cmd current -m`

- Дата в календарном месяце: `cmd current --date` или `cmd current -d`

- Необходимо добавить возможность получать даты в прошлом или будущем через команды add и sub: `cmd add -d 2` — дата и время в формате ISO на два дня вперёд, `cmd sub --month 1` — дата и время в формате ISO на один месяц назад.
