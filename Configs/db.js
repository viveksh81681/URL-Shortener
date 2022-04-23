const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://vattsalbhatt:Vattsal123@cluster0.66fyu.mongodb.net/apartments"
  );
};

module.exports = connect;
