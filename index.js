const express = require("express");
const app = express();

app.use(express.json());

const { initDB } = require("./db/init");
initDB();

const postsRouter = require("./routes/posts");
app.use("/posts", postsRouter);

const errorMiddleware = require("./middlewares/error.middleware");
app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
