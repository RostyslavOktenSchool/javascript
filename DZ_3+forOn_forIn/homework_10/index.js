let books = [
     {title: "empty1", pages: 50, author: ["emptyN"], genre: ["detectiv, comedy"]},
     {title: "empty2", pages: 70, author: ["emptyQ"], genre: "detectiv"},
     {title: "empty3", pages: 125, author: ["emptyW"], genre: "detectiv"},
     {title: "empty4", pages: 200, author: ["emptyE"], genre: "detectiv"},
     {title: "empty5", pages: 300, author: ["emptyR"], genre: "detectiv"},
     {title: "empty6", pages: 150, author: ["emptyT"], genre: "detectiv"},
     {title: "empty7", pages: 110, author: ["emptyD", "emptyP"], genre: "detectiv"},
]

// let maxPage = books[0];

// for (let i = 1; i < books.length; i++) {
//   if (books[i].pages > maxPage.pages) {
//     maxPage = books[i];
//   }
// }

// console.log("Найтовстіша книжка:", maxPage);

// let maxGenre = books[0];

// for (let i = 1; i < books.length; i++) {
//   if (books[i].genre > maxGenre.genre) {
//     maxGenre = books[i];
//   }
// }

// console.log("Найбільша кількість жанрів:", maxGenre);

// let maxTitle = books[0];

// for (let i = 1; i < books.length; i++) {
//   if (books[i].title > maxTitle.title) {
//     maxTitle = books[i];
//   }
// }

// console.log("Найдовша назва книги:", maxTitle);

// let maxAuthor = books[0];

// for (let i = 1; i < books.length; i++) {
//   if (books[i].author.length > maxAuthor.author.length) {
//     maxAuthor = books[i];
//   }
// }

// console.log("Найбільше авторів:", maxAuthor);

for (let i = 0; i < books.length; i++) {
  if (books[i].author.length === 1) {
    console.log("Книга з одним автором:");
    console.log("Назва:", books[i].title);
    console.log("Автор:", books[i].author[0]);
  }
}


