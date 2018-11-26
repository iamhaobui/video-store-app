const express = require('express');
const router = express.Router();

const Video = require('../models/video');

// Add Video 
router.post('/add', (req, res, next) => {
    let newVideo = new Video({
        title: req.body.title,
        runningTime: req.body.time,
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



// Update Video 
router.put('/update/:id', function(req, res) {
    var id = req.params.id;
    Video.findOne({_id: id}, function(err, foundObject) {
        if (err) {
            console.log(err);
            res.status(500).send();
        } else {
            if (!foundObject) {
                res.status(404).send();
            } else {
                if(req.body.title) {
                    foundObject.title = req.body.title;
                }

                if (req.body.runningTime) {
                    foundObject.runningTime = req.body.runningTime;
                }

                if (req.body.genre) {
                    foundObject.genre = req.body.genre;
                }

                if (req.body.rating) {
                    foundObject.rating = req.body.rating;
                }

                if (req.body.director) {
                    foundObject.director = req.body.director;
                }

                if (req.body.status) {
                    foundObject.status = req.body.status;
                }

                foundObject.save(function(err, updatedObject) {
                    if (err) {
                        console.log(err);
                        res.status(500).send();
                    } else {
                        res.json(updatedObject);
                    }
                })
            }
        }
    })
})

module.exports = router;