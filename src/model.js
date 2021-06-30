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
