const mongoose = require('mongoose');
const config = require('../config/database');

// Video Schema
const VideoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    runningTime: {
        type: String
    },
    genre: {
        type: String,
        required: true
    },
    rating: {
        type: String
    },
    director: {
        type: String
    },
    status: {
        type: String,
        required: true
    }
});

const Video = module.exports = mongoose.model('Video', VideoSchema);

Video.insertMany(
    [
        {title: 'Lord Of The Ring', runningTime: '106 minutes', genre: 'Fantasy', rating: '4 stars', director: 'John Doe', status: 'Unavailable'},
        {title: 'Black Panther', runningTime: '135 minutes', genre: 'Fiction', rating: '5 stars', director: 'Ryan Coogler', status: 'Available'},
        {title: 'Avengers: Infinity War', runningTime: '160 minutes', genre: 'Fiction', rating: '5 stars', director: 'Anthony Russo', status: 'Unavailable'},
        {title: 'Incredibles 2', runningTime: '125 minutes', genre: 'Fiction', rating: '4 stars', director: 'Brad Bird', status: 'Available'},
        {title: 'Deadpool 2', runningTime: '120 minutes', genre: 'Fiction', rating: '5 stars', director: 'David Leitch', status: 'Unavailable'},
    ]
)

module.exports.getVideoById = function(id, callback) {
    Video.findById(id, callback);
}

module.exports.getVideoByTitle = function(title, callback) {
    const query = {title: title};
    Video.findOne(query, callback)
}

module.exports.addVideo = function(newVideo, callback) {
    newVideo.save(callback);
}