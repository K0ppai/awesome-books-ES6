// import BookListApp from './modules/BookListApp.js';
import * as GenerateSec from './modules/GenerateSec.js';
import {
  handleFormSubmit, handleRemoveButtonClick, form, ul,
} from './modules/RenderBookList.js';

GenerateSec.list.addEventListener('click', GenerateSec.generateBookList);
GenerateSec.addForm.addEventListener('click', GenerateSec.generateAddForm);
GenerateSec.contact.addEventListener('click', GenerateSec.generateContact);
form.addEventListener('submit', handleFormSubmit);
ul.addEventListener('click', handleRemoveButtonClick);
