const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);
const dbHandler = require("./db-handler");
const authTests = require("./auth-tests");

const UserModel = require("../models/user.model");

beforeAll(async () => await dbConnect());
afterEach(async () => await dbClear());
afterAll(async () => await dbClose());

describe("User", () => {
  describe("Signup", () => {
    it("A user is created and saved successfully", async () => {
      let validUser = new UserModel(userData);
      let savedUser = await validUser.save();
      expect(savedUser._id).toBeDefined();
      expect(savedUser.id).toBeDefined();
      expect(savedUser.name).toBe(userData.name);
      expect(savedUser.email).toBe(userData.email);
      expect(savedUser.passwordHash).toBe(userData.passwordHash);
    });

    // it("A user can sign up", async (done) => {
    //   await signUpUser(userData).expect(200);
    // });
  });

  describe("Login", () => {
    logInUser = () => request.post("/users/login").send(userLogin);

    // it("A user can log in with an encrypted password", async (done) => {
    //   await logInUser(userData).expect(200);
    // });

    it("Gets the users endpoint", async (done) => {
      const res = await request.get("/users");
      done();
    });
  });
});
