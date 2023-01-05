// Variables

let myLibrary = [];
let number = 0;

// DOM declarations

const mainBookSection = document.querySelector(".main-book-section");
const bookContainer = document.querySelector(".book-container");

let titleForm = document.getElementById("title");
let authorForm = document.getElementById("author");
let pagesForm = document.getElementById("pages");
let readForm = document.getElementsByName("read");

const submitButton = document.getElementById("submit-button");

// Book constructor

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = titleForm.value;
    let author = authorForm.value;
    let pages = pagesForm.value;
    let read = readForm.value;

    const newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
  }

function loopArray() {

  while (bookContainer.firstChild) {
    bookContainer.removeChild(bookContainer.lastChild)
  }

  for (let i = 0; i < myLibrary.length; i++) {

    const element = Object.values(myLibrary[i]);

    let title = element[0];
    let author = element[1];
    let pages = element[2];
    let read = element[3];

    const bookInfoDisplay = document.createElement("div");

    bookInfoDisplay.textContent = `Title: ${title} Author: ${author} Pages: ${pages} Read: ${read}`;
    bookInfoDisplay.style.cssText = "display: flex; color: white; border: 1px solid red; font-weight: bold;"

    const removeButton = document.createElement("button");

    removeButton.style.cssText = "width: 50px; height: 30px;"

    bookInfoDisplay.appendChild(removeButton);
    bookContainer.appendChild(bookInfoDisplay);
    mainBookSection.appendChild(bookContainer);

                

    removeButton.addEventListener("click", () => {
      myLibrary.splice(i, 1);

      bookContainer.removeChild(bookContainer.children[i]);

      loopArray();
    })
  }
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
  loopArray();

  closeModal(modal);
})

/* ADD BOOK */

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}



