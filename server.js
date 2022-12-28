const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

// config 
dotenv.config({ path: "./config/config.env" });
const port = process.env.PORT || 4001;


// Database connect
connectDatabase();

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

