const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);
const createUser = require("./signup-helper").createUser;
const dbHandler = require("./db-handler");
const authTests = require("./auth-helpers");
const authJwt = require("../helpers/jwt");
require("dotenv").config();
const UserModel = require("../models/user.model");
const PlantModel = require("../models/plant.model");

beforeAll(async () => await dbConnect());
afterEach(async () => await dbClear());
afterAll(async () => await dbClose());

describe("Plant", () => {
  describe("Add", () => {
    it("A user can successfully add a plant to their terrarium", async () => {
      let user = await createUser();
      let parsedUser = JSON.parse(user.text);
      let userLoggedIn = await logInUser();
      let parsedUserLoggedIn = JSON.parse(userLoggedIn.text);
      let wesleyToken = parsedUserLoggedIn.token;
      await request
        .post("/plants/add")
        .send({
          userid: parsedUser._id,
          nickname: "Stina",
          type: "plant",
          lastWatered: Date.now(),
          wateringFrequency: 7,
          notes: "hello!",
        })
        .set("Authorization", `Bearer ${wesleyToken}`)
        .then((response) => {
          expect(response.statusCode).toBe(200);
          expect(response.type).toBe("application/json");
        });
    });
    it("A user cannot add a plant without a nickname", async () => {
      let user = await createUser();
      let parsedUser = JSON.parse(user.text);
      let noNamePlant = new PlantModel({
        userid: parsedUser._id,
        nickname: "",
        type: "plant",
        lastWatered: Date.now(),
        wateringFrequency: 7,
        notes: "hello!",
      });

      await expect(noNamePlant.save()).rejects.toThrow();
    });
  });

  describe("GET /", () => {
    it("Shows the user's terrarium", async () => {
      await createUser();
      let userLoggedIn = await logInUser();
      let parsedUserLoggedIn = JSON.parse(userLoggedIn.text);
      let wesleyToken = parsedUserLoggedIn.token;

      await request
        .get("/plants")
        .set("Authorization", `Bearer ${wesleyToken}`)
        .then((response) => {
          expect(response.statusCode).toBe(200);
          expect(response.type).toBe("application/json");
        });

      //   let user = await createUser();
      //   let userLoggedIn = await logInUser();
      // const mockUserID = jest.fn();
      // jest.mock("../models/user.model", () => {
      //   return jest.fn().mockImplementation(() => {
      //     return {
      //       userid: mockUserID,
      //     };
      //   });

      // const plant = new Plant();
    });
  });
});
