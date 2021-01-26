const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const dbHandler = require("./db-handler");
const UserModel = require("../models/user.model");
const userData = {
  name: "Wesley",
  email: "wesley@example.com",
  passwordHash: "wesley",
};

beforeAll(async () => await dbConnect());
afterEach(async () => await dbClear());
afterAll(async () => await dbClose());

describe("User", () => {
  it("creates & saves user successfully", async () => {
    let validUser = new UserModel(userData);
    let savedUser = await validUser.save();
    expect(savedUser._id).toBeDefined();
    expect(savedUser.name).toBe(userData.name);
    expect(savedUser.email).toBe(userData.email);
    expect(savedUser.passwordHash).toBe(userData.passwordHash);
  });
});
