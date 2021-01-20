const router = require("express").Router();
let Plant = require("../models/plant.model");

router.route("/").get((req, res) => {
  Plant.find()
    .then((plants) => res.json(plants))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const userid = req.body.userid;
  const nickname = req.body.nickname;
  const type = req.body.type;
  const wateringFrequency = req.body.wateringFrequency;
  const pottyChange = Date.parse(req.body.pottyChange);
  const notes = req.body.notes;

  const newPlant = new Plant({
    userid,
    nickname,
    type,
    wateringFrequency,
    pottyChange,
    notes,
  });

  newPlant
    .save()
    .then(() => res.json("Plant added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Plant.findById(req.params.id)
    .then((plant) => res.json(plant))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Plant.findByIdAndDelete(req.params.id)
    .then(() => res.json("Plant deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Plant.findById(req.params.id)
    .then((plant) => {
      plant.userid = req.body.userid;
      plant.nickname = req.body.nickname;
      plant.type = req.body.type;
      plant.wateringFrequency = req.body.wateringFrequency;
      plant.pottyChange = Date.parse(req.body.pottyChange);
      plant.notes = req.body.notes;

      plant
        .save()
        .then(() => res.json("Plant updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
