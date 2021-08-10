import mongoose from "mongoose";
import configConnection from './dataConnection'

//Conecction to DB Twittter
async function connections() {
  try {
    const db = await mongoose.connect(`${configConnection.MONGO_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    
    });
    console.log(`Conetado a la Base de Datos: ${db.connection.name}`);
  } catch (error) {
      console.log(error)
  }
}

export default { connections };