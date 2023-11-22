import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import bellowRoutes from "./routes/bellowRoutes";
import userRoutes from "./routes/userRoutes";
import mongoose from "mongoose";

const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:4200", "http://localhost:3001"]
};
const connectionString: string = "mongodb://127.0.0.1:27017/socialDB";
mongoose.connect(connectionString).then(
  () => console.log("database connection successful!"),
  (err) => console.log("Error connecting to the database", err)
);

const app = express();

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsOptions));

// routes
app.use("/api/bellow", bellowRoutes);
app.use("/api/users", userRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).end();
});
app.listen(3000);
