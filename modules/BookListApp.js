export default class BookListApp {
  constructor() {
    this.bookData = JSON.parse(localStorage.getItem('bookData')) || [];
  }
}
