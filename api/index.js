import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';

dotenv.config();

mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>console.log('MongoDB successful'))
.catch((err)=>console.log(err))

const app = express();

app.use(express.json());


app.listen(3000, ()=>{
  console.log('Server is running in port 3000')
})

app.use('/api/user', userRoute);


//lvdEyVW5mHyNvjC9


//mongodb+srv://jamletigio:lvdEyVW5mHyNvjC9@blog-website.xdo3bl9.mongodb.net/?retryWrites=true&w=majority&appName=blog-website