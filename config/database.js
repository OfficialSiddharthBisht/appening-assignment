const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) => {
        console.log(`Database connected with server: ${data.connection.host}`);
    }).catch((err) => {
        console.log(`Database error: ${err}`);
    })
}

module.exports = connectDatabase;