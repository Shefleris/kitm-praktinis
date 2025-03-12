const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const app = require('./app.js');

const port = process.env.PORT || 3000;
const db = process.env.DATABASE.replace(
    '<db_user>', process.env.DATABASE_USER
  ).replace(
    '<db_password>', process.env.DATABASE_PASSWORD
  ).replace(
    '<db_name>', process.env.DATABASE_NAME
  )

mongoose
  .connect(db)
  .then(()=>console.log("Database connection live"))

app.listen(port, ()=>{
  console.group('--------')
  console.log(`Example app listening on port ${port}`)
  console.log(`http://localhost:${port}`)
  console.groupEnd()
  console.log('--------')
})