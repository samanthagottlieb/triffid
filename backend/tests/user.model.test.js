const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const UserModel = require("../models/user.model");
const userData = {
  name: "Wesley",
  email: "wesley@example.com",
  passwordHash: "wesley",
};

describe("User", () => {
  beforeAll(async () => {
    mongoServer = new MongoMemoryServer();
    const mongoUri = await mongoServer.getUri();
    con = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterEach(async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany();
    }
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
  });

  it("creates & saves user successfully", async () => {
    let validUser = new UserModel(userData);
    let savedUser = await validUser.save();
    expect(savedUser._id).toBeDefined();
    expect(savedUser.name).toBe(userData.name);
    expect(savedUser.email).toBe(userData.email);
  });
});
