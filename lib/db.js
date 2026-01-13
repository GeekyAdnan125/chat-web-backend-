import mongoose from "mongoose";
export const connectDB = async () =>{
    try {
        mongoose.connection.on('connected', ()=> console.log('Database Connected'));
       await mongoose.connect(`${process.env.MONGODB_URI}`)
       console.log("Data base is connected sucessfully"); 
    } catch (error) {
        console.log("error while connecting to database"); 
        console.log(error);
    }
}