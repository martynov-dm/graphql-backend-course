import { v4 as uuidv4 } from "uuid";
import { booksDb } from "./db";

export const getBooks = () => {
  const books = [];
  booksDb.forEach((value, index) => books.push({ id: index, ...value }));
  return books;
};

export const getBookById = (id) => {
  const book = booksDb.get(id);
  if (!book) throw new Error(`No book with id ${id}`);
  return { id, ...booksDb.get(id) };
};

export const saveBook = (book) => {
  const id = uuidv4();
  booksDb.set(id, book);
  const savedBook = booksDb.get(id);

  return { id, ...savedBook };
};

export const removeBook = (id) => {
  const expectedBook = booksDb.get(id);
  booksDb.delete(id);

  return { id, ...expectedBook };
};

export const updateBook = (id, receivedBook) => {
  const previousBook = booksDb.get(id);
  const expectedBook = {
    ...previousBook,
    ...receivedBook,
  };
  removeBook(id);

  return saveBook(expectedBook);
};
