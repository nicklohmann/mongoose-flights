import mongoose from "mongoose";

//shortcut to Mongoose.connection object
const db = mongoose.connection

//Connect to the database
mongoose.connect(process.env.DATABASE_URL)

//DataBase Sanity Check
db.on('connected' , function() {
  console.log(`DB SANITY CHECK Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
})


