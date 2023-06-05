// import BookListApp from './modules/BookListApp.js';
import { DateTime } from './modules/luxon.js';
import * as GenerateSec from './modules/GenerateSec.js';
import {
  handleFormSubmit, handleRemoveButtonClick, form, ul,
} from './modules/RenderBookList.js';

GenerateSec.list.addEventListener('click', GenerateSec.generateBookList);
GenerateSec.addForm.addEventListener('click', GenerateSec.generateAddForm);
GenerateSec.contact.addEventListener('click', GenerateSec.generateContact);
form.addEventListener('submit', handleFormSubmit);
ul.addEventListener('click', handleRemoveButtonClick);

const date = document.querySelector('#time');
date.innerText = `${DateTime.now().toLocaleString(DateTime.DATE_MED)}, ${DateTime.now().toLocaleString(DateTime.TIME_WITH_SECONDS)}`;
