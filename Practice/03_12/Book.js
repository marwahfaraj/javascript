/***
 * creat Book class
 */

class Book {
  constructor(
    // Define prameter
    bookTitle,
    bookAuther,
    bookISBN,
    bookPubYear
  ) {
    //Define properties
    this.bookTitle = bookTitle;
    this.bookAuther = bookAuther;
    this.bookISBN = bookISBN;
    this.bookPubYear = bookPubYear;
  }
}

export default Book;
