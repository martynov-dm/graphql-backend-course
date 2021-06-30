import { PORT } from "./init/config";
import { app, server } from "./init/server";

app.listen({ port: PORT }, () =>
  console.log(
    `Server is running at http://localhost:${PORT}${server.graphqlPath}`
  )
);
