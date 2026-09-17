const mongoose = require('mongoose');

let isMongoConnected = false;

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/prospect_hub';
  try {
    // Attempt fast connection with short timeout so server does not hang if Mongo is not running
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 2000
    });
    isMongoConnected = true;
    console.log(`[Database] MongoDB Connected successfully to ${mongoUri}`);
  } catch (err) {
    isMongoConnected = false;
    console.warn('[Database] Local MongoDB server not reachable. Utilizing high-performance persistent JSON storage adapter.');
  }
};

const getStatus = () => isMongoConnected;

module.exports = { connectDB, getStatus };
