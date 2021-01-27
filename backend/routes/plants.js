const { User } = require("../models/user.model");
const router = require("express").Router();
const multer = require("multer");
let Plant = require("../models/plant.model");

const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

// Defined storage for multer image upload
const storage = multer.diskStorage({
  // File destination
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  // Add back the file extensions that multer strips off
  filename: function (req, file, cb) {
    const fileName = file.originalname;
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${fileName}-${Date.now()}.${extension}`);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 25,
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

router.post("/add", upload.single("selectImage"), async (req, res, next) => {
  const fileName = req.file.filename;
  const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;
  let newPlant = new Plant({
    userid: req.body.userid,
    nickname: req.body.nickname,
    type: req.body.type,
    lastWatered: req.body.lastWatered,
    wateringFrequency: req.body.wateringFrequency,
    notes: req.body.notes,
    image: `${basePath}${fileName}`,
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
