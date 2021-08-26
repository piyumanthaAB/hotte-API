const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DB_CONN.replace('<password>', process.env.DB_PSW);


mongoose.connect(DB, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log("DB connection Success !");
});



const server = app.listen(process.env.PORT, () => {
    console.log(`Server is listening in port ${process.env.port}`);
})