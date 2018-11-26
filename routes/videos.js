const express = require('express');
const router = express.Router();

const Video = require('../models/video');

// Add Video 
router.post('/add', (req, res, next) => {
    let newVideo = new Video({
        title: req.body.title,
        time: req.body.time,
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

// Get Videos 
router.get('/lists', function(req, res) {
    Video.find({}, function(err, videos) {
      var videoMap = {};
  
      videos.forEach(function(video) {
        videoMap[video._id] = video;
      });
  
      res.json(videoMap);
    });
  });

// Delete Video


module.exports = router;