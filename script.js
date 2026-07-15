const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  Book.prototype.toggleRead = function() {
    this.read = !this.read;
  }
};

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
};

addBookToLibrary('Dune', 'Frank', '412', false);

addBookToLibrary('Carl', 'Ayo', '27', true);

addBookToLibrary('Sweet', 'Banana', '39', false);

console.log(myLibrary);

function displayBooks() {
  const libraryContainer = document.querySelector("#library");

  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = book.author;

    const pages = document.createElement("p");
    pages.textContent = book.pages;

    const read = document.createElement("p");
    read.textContent = book.read ? "Read" : "Not Read";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", () => {
      myLibrary.splice(index, 1);

      document.querySelector("#library").textContent = "";
      displayBooks();
    })

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle Read";

    toggleBtn.addEventListener("click", () => {
      book.toggleRead();

      document.querySelector("#library").textContent = "";
      displayBooks();
    })

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(removeBtn);
    card.appendChild(toggleBtn);
    
    libraryContainer.appendChild(card);
  });
};

displayBooks();

const dialog = document.querySelector("#favDialog");
const newBookBtn = document.querySelector(".bookBtn");
const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");

newBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  addBookToLibrary(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readInput.checked
  );

  document.querySelector("#library").textContent = "";
  displayBooks();
  form.reset();
  dialog.close();
});

card.classList.add("card");