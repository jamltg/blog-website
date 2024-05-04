import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>console.log('MongoDB successful'))
.catch((err)=>console.log(err))

const app = express();


app.listen(3000, ()=>{
  console.log('Server is running in port 3000')
})


//lvdEyVW5mHyNvjC9


//mongodb+srv://jamletigio:lvdEyVW5mHyNvjC9@blog-website.xdo3bl9.mongodb.net/?retryWrites=true&w=majority&appName=blog-website