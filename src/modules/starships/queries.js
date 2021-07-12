import { ApolloError } from "apollo-server-express";
import { getBookById, getBooks } from "./model";

export const queries = {
  starships: async (_, __, { datasource }) => {
    const { results } = await datasource.starshipsAPI.getStarships();
    return results;
  },
};
