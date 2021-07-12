import { queries as bookQueries } from "../modules/books/queries";
import { queries as starshipQueries } from "../modules/books/queries";
import { mutations as bookMutations } from "../modules/books/mutations";

export const resolvers = {
  Query: { ...bookQueries, starshipQueries },
  Mutation: { ...bookMutations },
};
