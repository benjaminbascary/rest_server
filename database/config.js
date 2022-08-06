
const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODBCONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('DATABASE CONNECTED');
    
  } catch (error) {
    console.log(error)
    throw new Error('Error en la coneccion de base de datos!');
  }
}

module.exports = {
  dbConnection
}
