import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "../types.gql";
import { resolvers } from "./resolvers";
import { api as starshipsAPI } from "../modules/starships/datasource";
const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  dataSources: () => {
    return { starshipsAPI };
  },
});

server.applyMiddleware({ app });

export { server, app };
