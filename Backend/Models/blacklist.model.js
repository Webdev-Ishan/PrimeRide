const mongoose = require('mongoose');

const jwtBlacklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires:86400
    }
});


const JwtBlacklist = mongoose.model('JwtBlacklist', jwtBlacklistSchema);

module.exports = JwtBlacklist;