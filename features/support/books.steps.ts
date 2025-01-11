import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';



interface Book {
    title: string;
    author: string;
}

let books: Book[] = [];
let searchResults: Book[] = [];

Given('I have the following books in the store', function (dataTable) {
books = dataTable.hashes();
console.log(books);
  /*   books = dataTable.hashes().map((row: { title: string; author: string }) => ({
        title: row.title,
        author: row.author, */
  //  }));
});

When('I search for books by author {string}', function (author: string) {
    searchResults = books.filter(book => book.author === author);
    console.log("Matching Result - ",searchResults);
   
});

Then('I find {int} books', function (expectedCount: number) {
    expect(searchResults.length).to.equal(expectedCount);
});
