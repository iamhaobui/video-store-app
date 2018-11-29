const express = require('express');
const router = express.Router();

const Video = require('../models/video');

// Add Video 
router.post('/add', (req, res, next) => {
    let newVideo = new Video({
        title: req.body.title,
        runningTime: req.body.runningTime,
        genre: req.body.genre,
        rating: req.body.rating,
        director: req.body.director,
        status: req.body.status
    });

    Video.addVideo(newVideo, (err, video) => {
        if (err) {
            res.json({success: false, msg: "failed to add new video" });
        } else {
            res.json({success: true, msg: "Successfully add new video"})
        }
    })
})

// Delete Video


module.exports = router;