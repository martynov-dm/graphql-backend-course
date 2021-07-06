import { v4 as uuidv4 } from "uuid";

const initialDB = [
  [
    "ID-1",
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
    },
  ],
  [
    "ID-2",
    {
      title: "Jurrassic Park",
      author: "Michael Jackson",
    },
  ],
];

const booksDb = new Map(initialDB);

export const getBooks = () => {
  const books = [];
  booksDb.forEach((value, index) => books.push({ id: index, ...value }));
  return books;
};

export const getBookById = (id) => ({ id, ...booksDb.get(id) });

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
