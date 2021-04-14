const router = require("express").Router();
const Exercise = require("../models/excerise.model");
let Excerise = require("../models/excerise.model");

router.route("/").get((req,res) =>{
    Excerise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json("Error " + err));
});

router.route("/add").post((req,res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    newExercise.save()
    .then(() => res.json("Exercise added!"))
    .catch(err => res.status(400).json("Error:" + err));
}); 

router.route("/:id").get((req,res)=>{
    Excerise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json("Error" + err));
});

router.route("/:id").delete((req,res)=>{
    Excerise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted"))
    .catch(err => res.status(400).json("Error" + err));
});

router.route("/update/:id").post((req,res)=>{
    Excerise.findById(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save()
        .then(() => res.json("Exercise updated!"))
        .catch(err => res.status(400).json("Error" + err));
    })
    .catch(err => res.status(400).json("Error" + err));

});

module.exports = router;
