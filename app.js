const express = require('express');

console.log(`\n ================ Running Env : ${process.env.NODE_ENV} =================\n`);

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            message: 'hello from hotte API'
        }
    });
})

module.exports = app;