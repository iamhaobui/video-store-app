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