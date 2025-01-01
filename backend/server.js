const express = require("express");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
dotenv.config();
const cors = require("cors");
const connection = require("./config/db");
const userRouter = require("./routes/userRoute");
const notesRouter = require("./routes/notesRoute");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/notes", notesRouter);
app.use(notFound);
app.use(errorHandler);

connection();

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
