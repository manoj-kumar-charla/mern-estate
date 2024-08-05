import { log } from 'console';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log("connect to database");
}).catch((err) => {
  console.log(err);
});

// console.log(db);


const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.listen(3000, () => {
  console.log("listening on port 3000 !!");
})




app.use("/api/user", userRouter);
app.use("/api/user", authRouter);
app.use((error, req, res, next) =>{
  const statusCode = error.statusCode || 550;
  const massage = error.errorResponse.errmsg || "Internal Server Error";
  res.status(statusCode).json({
    success : false,
    statusCode,
    massage
  });
  // next();
});
