export const list = document.querySelector('.list');
export const addForm = document.querySelector('.add-form');
export const contact = document.querySelector('.contact');
export const bookSec = document.getElementById('book-list');
export const formSec = document.getElementById('form');
export const contactSec = document.getElementById('contact');
export const generateBookList = () => {
  bookSec.classList.remove('active');
  formSec.classList.remove('active');
  contactSec.classList.remove('active');
  list.className = list.className.replace('text-dark', 'text-warning');
  addForm.className = addForm.className.replace('text-warning', 'text-dark');
  contact.className = contact.className.replace('text-warning', 'text-dark');
};

export const generateAddForm = () => {
  bookSec.classList.add('active');
  formSec.classList.add('active');
  contactSec.classList.remove('active');
  list.className = list.className.replace('text-warning', 'text-dark');
  addForm.className = addForm.className.replace('text-dark', 'text-warning');
  contact.className = contact.className.replace('text-warning', 'text-dark');
};

export const generateContact = () => {
  bookSec.classList.add('active');
  formSec.classList.remove('active');
  contactSec.classList.add('active');
  list.className = list.className.replace('text-warning', 'text-dark');
  addForm.className = addForm.className.replace('text-warning', 'text-dark');
  contact.className = contact.className.replace('text-dark', 'text-warning');
};