import BookListApp from './BookListApp.js';
import saveDataToLocalStorage from './LocalStorage.js';

const app = new BookListApp();
export const form = document.querySelector('.form');
export const ul = document.getElementById('book-list-container');
export const renderBookList = () => {
  ul.innerHTML = '';

  app.bookData.forEach((book, index) => {
    const li = document.createElement('li');
    li.className = 'px-3 py-2 d-flex fw-bold fs-5';

    const titleSpan = document.createElement('span');
    titleSpan.className = 'title';
    titleSpan.innerText = `"${book.Title}"`;

    const authorSpan = document.createElement('span');
    authorSpan.className = 'author';
    authorSpan.innerText = book.Author;

    const byText = document.createElement('span');
    byText.innerText = 'by';
    byText.className = 'ps-3 pe-3';

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn fw-bold btn btn-outline-dark btn-sm ms-auto';
    removeBtn.innerText = 'Remove';

    if (index % 2 !== 0) {
      li.className += ' bg-warning';
    }

    li.append(titleSpan, byText, authorSpan, removeBtn);
    ul.appendChild(li);
  });
};

const addBook = (book) => {
  app.bookData.push(book);
  saveDataToLocalStorage(app.bookData);
};

const removeBook = (index) => {
  app.bookData.splice(index, 1);
  saveDataToLocalStorage(app.bookData);
};

export const handleFormSubmit = (e) => {
  e.preventDefault();

  const title = form.querySelector('input[placeholder="Title"]').value;
  const author = form.querySelector('input[placeholder="Author"]').value;

  const newBook = {
    Title: title,
    Author: author,
  };

  addBook(newBook);
  renderBookList();
  form.reset();
};

export const handleRemoveButtonClick = (e) => {
  if (e.target.tagName === 'BUTTON') {
    const li = e.target.parentElement;
    const index = Array.prototype.indexOf.call(ul.children, li);

    removeBook(index);
    renderBookList();
  }
};

renderBookList();
