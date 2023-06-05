import { DateTime } from './luxon.js';

const displayDate = () => {
  const date = document.querySelector('#time');
  const now = DateTime.now();
  date.innerText = `${now.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS)}`;
};
const time = setInterval(() => {
  displayDate();
}, 1000);
export { time as default };