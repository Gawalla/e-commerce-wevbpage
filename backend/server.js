import express from 'express'
import dotenv from 'dotenv'
import router  from './userManagement/routes/user.js'
import mongoose from 'mongoose';
dotenv.config()
const port = process.env.PORT || 3000;
const mongodbUri = process.env.MONGODB_URI;
const jwtSecret = process.env.JWT_SECRET;

const app=express()
app.use(express.json());
app.get("/", (req, res) => {
  res.send('welcome')
})
app.use('/user', router)
app.listen(port,()=>{
console.log('server connected')
})
console.log(typeof mongodbUri)
    mongoose.connect(mongodbUri).then(()=>{
        console.log('db connected')
    }).catch(err=>{
console.log(`${err} while connectiong the mongodb`)
})


