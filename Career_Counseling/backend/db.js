const mongoose = require('mongoose');

// Encode special characters in the password
const url = "mongodb+srv://maddaharshith5:Harshith%23%2344@cluster0.opfximn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = async () => {
    await mongoose.connect(url);
    console.log("connected");
};

module.exports = connectToMongo;
