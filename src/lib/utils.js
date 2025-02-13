const { default: mongoose } = require("mongoose");

let connection = {};

export const connectToDb = async ()=>{
    try {
        if(connection.isConnected){
            console.log("using existing connection")
            return
        }
        const db = await mongoose.connect(process.env.MONGO_DB_ATLAS);
        connection.isConnected = db.connections[0].readyState;
        console.log("connected To Mongo Db")
      } catch (error) {
        console.log(error);
      }
}