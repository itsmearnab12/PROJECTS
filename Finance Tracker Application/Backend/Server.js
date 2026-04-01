//1st: Import all the required file to create the server
import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import transactionRouter from "./routes/transactionRoutes.js";

//2nd: Create the express app and also define the port number
const app = express();
//Note: Here (process.env.PORT) means if we define a PORT number in .env file then the server will run on that port number other wise the server will run on port: 4000
const port = process.env.PORT || 4000;
connectDB();

//3rd: using express.json so that all the request will be passed through json
app.use(express.json());
app.use(cookieParser());
//Note: Here credentials true in object means we can send the cookie in response from the express app
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

//5th: creating a arrow function to send response
app.get("/", (req, res) => res.send("API Working"));
app.use("/api/auth", authRouter);
app.use("/api/transaction", transactionRouter);

//4th: Creating the link in which the server will run
app.listen(port, () => console.log(`Server statred on PORT:${port}`));
