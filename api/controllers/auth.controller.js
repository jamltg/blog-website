import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req,res,next)=>{
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === '' ||
    email === '' ||
    password === ''
  ) {
    next(errorHandler(400, 'All fields are required'));
  }
  
  var salt = bcryptjs.genSaltSync(10);
  var hashedPassword = bcryptjs.hashSync(password, salt);

  const newUser = new User({
    username,
    email,
    password: hashedPassword
  });

  try{
    await newUser.save();
    res.json('Signup successful!');
  }catch(err){
    next(err);
  }
};


export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === '' || password === ''){
    next(errorHandler(400, 'All fields are required.'))
  }

  try{
    const validUser = await User.findOne({email});
    if (!validUser){
      return next(errorHandler(404, 'User not Found'))
    }
    //password is not yet hashed, validUser.password is hashed
    //bcryptjs hashes password for us automatically
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword){
      return next(errorHandler(400, 'Invalid Password'))
    }
    const token = jwt.sign({id:validUser._id}, process.env.JWT_SECRET);
    const {password: pass, ...rest} = validUser._doc;
    res.status(200).cookie('access_token',token,{httpOnly:true}).json(rest);
  }catch(err){
    next(err);
  }
}