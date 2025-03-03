import express from "express";
import errorHandler from "./middleware/error.js";
import dotenv from  "dotenv";
import connectDb from "./lib/connnectDb.js";
import getPost from "./routes/post.user.js";
import clerkRouter from "./routes/webhook.route.js"
import  {clerkMiddleware } from '@clerk/express'
const app  = express();
dotenv.config();
app.use(clerkMiddleware)
app.use("/webhooks",clerkRouter)
// middleware
app.use(express.json());

app.use('/post' ,getPost );
const timestamp = 1740922734934;
const date = new Date(timestamp);
console.log(date.toUTCString()); // Outputs a readable date


// connection
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    connectDb()
    console.log("server running on port " + PORT)
});
app.use(errorHandler)
