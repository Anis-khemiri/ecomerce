import mongoose from "mongoose"



const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    //   useUnifieldTopology: true,
    //   useCreateIndex: true,
    })
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`error: ${error.message}`.red.underline);
    process.exit(1);
  }
};
export default connectDB;
