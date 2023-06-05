import { DateTime } from './luxon.js';

const displayDate = () => {
  const date = document.querySelector('#time');
  const now = DateTime.now();
  date.innerText = `${now.toLocaleString(DateTime.DATE_HUGE)}, ${now.toLocaleString(DateTime.TIME_WITH_SECONDS)}`;
};
const time = setInterval(() => {
  displayDate();
}, 1000);
export { time as default };