const saveDataToLocalStorage = (data) => {
  localStorage.setItem('bookData', JSON.stringify(data));
};
export { saveDataToLocalStorage as default };