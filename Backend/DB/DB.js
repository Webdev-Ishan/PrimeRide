const mongoose = require('mongoose');

function dbconnect() {
    mongoose.connect(process.env.DB_connect)
        .then(() => {
            console.log('Database connection successful');
        })
        .catch(err => {
            console.error('Database connection error:', err);
        });
}

module.exports = dbconnect;