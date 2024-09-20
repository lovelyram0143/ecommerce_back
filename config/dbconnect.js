const { default: mongoose } = require("mongoose");

/**
 * The function `db_connect` attempts to connect to a MongoDB database using Mongoose and logs a
 * success message if the connection is successful.
 */
const db_connect = () => {
  try {
    mongoose.connect(
      "mongodb+srv://Lovelyram:qYIvnrL3zf11O6nI@cluster0.e40gwsk.mongodb.net/ecommerence?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Database error");
  }
};
module.exports = db_connect;
