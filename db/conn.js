// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);
// require("dotenv").config();

// const client = mongoose
//   .connect()
//   .then(() => {
//     console.log("DB connected");
//   })
//   .catch((error) => {
//     console.log("Error: ", error);

//     return error;
//   });

// module.exports = client;
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);

const mongodbconn = mongoose
  .connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
  useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected Mongoose DB")
  })
  .catch((error) => {
    return error;
  });

module.exports = mongodbconn;