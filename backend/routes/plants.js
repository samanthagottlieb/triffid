const { User } = require("../models/user.model");
const router = require("express").Router();
const multer = require("multer");
let Plant = require("../models/plant.model");

// Defined storage for multer image upload
const storage = multer.diskStorage({
  // File destination
  destination: function (request, file, callback) {
    callback(null, "./public/uploads/images");
  },
  // Add back the file extensions that multer strips off
  filename: function (request, file, callback) {
    callback(null, Date.now() * file.originalname);
  },
});

// Upload parameters for multer.
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 3,
  },
});

router.get("/", async (req, res) => {
  // let filter = User.findById(req.body.id);
  // const plantList = await Plant.find(filter)
  const plantList = await Plant.find().select(
    "nickname type wateringFrequency pottyChange notes -_id"
  );

  if (!plantList) {
    res.status(500).json({ success: false });
  }
  res.send(plantList);
});

router.post("/add", async (req, res) => {
  let newPlant = new Plant({
    userid: req.body.userid,
    nickname: req.body.nickname,
    type: req.body.type,
    lastWatered: req.body.lastWatered,
    wateringFrequency: req.body.wateringFrequency,
    pottyChange: req.body.pottyChange,
    notes: req.body.notes,
  });
  newPlant = await newPlant.save();

  if (!newPlant) return res.status(400).send("The plant could not be added.");

  res.send(newPlant);
});

router.route("/:id").get((req, res) => {
  let userid = req.params.id;
  Plant.find({ userid: userid })
    .exec()
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
      plant.lastWatered = req.body.lastWatered;
      plant.wateringFrequency = req.body.wateringFrequency;
      plant.pottyChange = req.body.pottyChange;
      plant.notes = req.body.notes;

      plant
        .save()
        .then(() => res.json("Plant updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
