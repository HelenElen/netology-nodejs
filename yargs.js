const { describe } = require('yargs');
const yargs = require('yargs');

yargs.command({
  command: 'current',
  describe: 'Показ Текущей даты',
  handler({ year, y, month, m, date, d }) {
    const currentDate = new Date();
    if (year || y) console.log(currentDate.getFullYear());
    if (month || m) console.log(currentDate.getMonth() + 1);
    if (date || d) console.log(currentDate.getDate());

    console.log(String(currentDate));
  },
});

yargs.command({
  command: 'add',
  describe: 'Получить дату на N дней вперед',
  handler({ year, y, month, m, date, d }) {
    const currentDate = new Date();
    if (year || y) console.log(currentDate.getFullYear() + (year || y));
    if (month || m) console.log(currentDate.getMonth() + 1 + (month || m));
    if (date || d) console.log(currentDate.getDate() + (date || d));
  },
});

yargs.command({
  command: 'sub',
  describe: 'Получить дату на N дней назад',
  handler({ year, y, month, m, date, d }) {
    const currentDate = new Date();

    if (year || y) console.log(currentDate.getFullYear() - (year || y));
    if (month || m) console.log(currentDate.getMonth() + 1 - (month || m));
    if (date || d) console.log(currentDate.getDate() - (date || d));
  },
});

yargs.parse();
