const db = require("../models");
const Tutorial = db.testme;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  const post = {
    userid: req.body.userid,
    activity: req.body.activity,
    thelocation: req.body.thelocation,
    gender: req.body.gender,
    datestarts: req.body.datestarts,
    starttime: req.body.starttime,
    endtime: req.body.endtime,
    postdescription: req.body.postdescription,
  
  }
};

Tutorial.create(post)
    .then(data => {
        res.send(data);
    })
    .catch(err=> {
        res.status(500).send({
            message:
                err.message || "Some error occurred"
        })
    })

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};