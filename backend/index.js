import express from "express";
import errorHandler from "./middleware/error.js";
import dotenv from  "dotenv";
import connectDb from "./lib/connnectDb.js";
import getPost from "./routes/post.user.js";
const app  = express();
dotenv.config();

// middleware
app.use(express.json());

app.use('/post' ,getPost );


app.use(errorHandler)
// connection
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    connectDb()
    console.log("server running on port " + PORT)
});