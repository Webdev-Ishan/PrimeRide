const mongoose = require('mongoose'); // require mongoose


// create a function for connecting to the db

function dbconnect() {

    mongoose.connect(process.env.DB_connect) // this variable stores the db details and name etc..
        .then(() => {
            console.log('Database connection successful');
        })
        .catch(err => {
            console.error('Database connection error:', err);
        });
} // it is a promise.....

// export it
module.exports = dbconnect;