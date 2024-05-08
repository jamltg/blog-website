import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>console.log('MongoDB successful'))
.catch((err)=>console.log(err))

const app = express();

//cors for cross-origin
const corsOptions = {
  origin:'*',
  credentials:true,
  optionSuccessStatus:200,
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());


app.listen(3000, ()=>{
  console.log('Server is running in port 3000')
})

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success:false,
    statusCode,
    message
  });
});