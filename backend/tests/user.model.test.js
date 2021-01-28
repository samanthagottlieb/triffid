const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);
const createUser = require("./signup-helper").createUser;
const dbHandler = require("./db-handler");
const authTests = require("./auth-helpers");
const authJwt = require("../helpers/jwt");
require("dotenv").config();
const UserModel = require("../models/user.model");

beforeAll(async () => await dbConnect());
afterEach(async () => await dbClear());
afterAll(async () => await dbClose());

describe("User", () => {
  describe("Signup", () => {
    it("A user is created and saved successfully", async () => {
      let validUser = new UserModel(wesleyData);
      let savedUser = await validUser.save();
      expect(savedUser._id).toBeDefined();
      expect(savedUser.id).toBeDefined();
      expect(savedUser.name).toBe(wesleyData.name);
      expect(savedUser.email).toBe(wesleyData.email);
      expect(savedUser.passwordHash).toBe(wesleyData.passwordHash);
    });

    it("Gives the right server response", async () => {
      let user = await createUser();
      expect(user.status).toEqual(200);
    });
  });

  describe("Login", () => {
    it("A user can log in with", async () => {
      let user = await createUser();
      let userLoggedIn = await logInUser();
      expect(userLoggedIn.status).toEqual(200);
    });
  });
});
