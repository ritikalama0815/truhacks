import mongoose from "mongoose";

const connectDB = async() =>{
    mongoose.connection.on('connected', () =>{
        console.log("DB OK");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/hackathon`)

}
export default connectDB;