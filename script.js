// Variables

let myLibrary = [];

// DOM declarations

const bookContainer = document.querySelector(".book-container");

// Book constructor

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = prompt("Title");
    let author = prompt("Author");
    let pages = prompt("Pages");
    let read = prompt("Read");

    const newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
}

function loopArray() {
    for (let i = 0; i < myLibrary.length; i++) {
                const element = Object.values(myLibrary[i]);

                let title = element[0];
                let author = element[1];
                let pages = element[2];
                let read = element[3];

                const bookInfoDisplay = document.createElement("div");

                bookInfoDisplay.textContent = `Title: ${title} Author: ${author} Pages: ${pages} Read: ${read}`;
                bookInfoDisplay.style.cssText = "color: white; border: 1px solid red; font-weight: bold;"

                bookContainer.appendChild(bookInfoDisplay);
        }
    }

addBookToLibrary();
addBookToLibrary();
loopArray();



