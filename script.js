// Variables

let myLibrary = [];
let number = 0;

// DOM declarations

const mainBookSection = document.querySelector(".main-book-section");
const bookContainer = document.querySelector(".book-container");

let titleForm = document.getElementById("title");
let authorForm = document.getElementById("author");
let pagesForm = document.getElementById("pages");
let readForm = document.getElementById("read");

const submitButton = document.getElementById("submit-button");

// Book constructor

class Book {
    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }
}

function addBookToLibrary() {
    let title = titleForm.value;
    let author = authorForm.value;
    let pages = pagesForm.value;
    let read;
    
    if (readForm.checked) {
      read = true;
    }

    else {
      read = false;
    }

    const newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
  }

function loopArray() {

  while (bookContainer.firstChild) {
    bookContainer.removeChild(bookContainer.lastChild);
  }

  for (let i = 0; i < myLibrary.length; i++) {

    // Object properties

    const element = Object.values(myLibrary[i]);

    let title = element[0];
    let author = element[1];
    let pages = element[2];
    let read = element[3];

    // Book title author and pages

    const bookInfoTitle = document.createElement("div");
    const bookInfoAuthor = document.createElement("div");
    const bookInfoPages = document.createElement("div");

    bookInfoTitle.textContent = `${title}`;
    bookInfoAuthor.textContent = `${author}`;
    bookInfoPages.textContent = `${pages}`;

    // Book info display

    const bookInfoDisplay = document.createElement("div");
    bookInfoDisplay.classList.add("book-info-display");
  
    // Remove button

    const removeButton = document.createElement("button");

    removeButton.classList.add("remove-button");
    removeButton.textContent = "Remove";

    // Read change button

    const readChangeButton = document.createElement("button");

    if (read === true) {
      readChangeButton.classList.add("read-change-button-true");
      readChangeButton.textContent = "Read";
    }

    else {
      readChangeButton.classList.add("read-change-button-false");
      readChangeButton.textContent = "Not Read"
    }

    readChangeButton.addEventListener("click", () => {
      if (read === true) {
        readChangeButton.classList.remove("read-change-button-true");
        readChangeButton.classList.add("read-change-button-false");

        read = false;
        readChangeButton.textContent = "Not Read";
      }
  
      else {
        readChangeButton.classList.remove("read-change-button-false")
        readChangeButton.classList.add("read-change-button-true");

        read = true;
        readChangeButton.textContent = "Read";
      }
    })

    // Multiple appends

    bookInfoDisplay.appendChild(bookInfoTitle);
    bookInfoDisplay.appendChild(bookInfoAuthor);
    bookInfoDisplay.appendChild(bookInfoPages);

    bookInfoDisplay.appendChild(readChangeButton);
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

// Submit button event

submitButton.addEventListener("click", (e) => {
  if (!titleForm.checkValidity() || !authorForm.checkValidity() || !pagesForm.checkValidity()) {
    titleForm.reportValidity();
    authorForm.reportValidity();
    pagesForm.reportValidity();
  }

  else {
    e.preventDefault();
    addBookToLibrary();
    loopArray();

    closeModal(modal);
  }
  
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



