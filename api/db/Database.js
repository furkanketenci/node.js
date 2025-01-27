import mongoose from 'mongoose';
import config from '../config/index.js';

const DBCONNECTION = async () => {
    try {
        await mongoose.connect(config.CONNECTION_STRING);
        console.log('DB CONNECTED!')
    }
    catch (err) {
        console.log('DB DISCONNECT!', err.message);
    }
}

export default DBCONNECTION;