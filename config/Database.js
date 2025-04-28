
 import mongoose from "mongoose"
const  connectdatabase=async()=>{
    try {
        const data=await mongoose.connect(process.env.MONGO_DB);
        console.log(`mongodb is connected ${data.connection.host}`)
        
        
    } catch (error) {
        console.log(`ERROR IN MONGODB ${error}`)
        
    }

}
export default connectdatabase