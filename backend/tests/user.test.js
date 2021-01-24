const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("../models/user.model");
const databaseName = "test";
const request = require("request");
require("dotenv").config();

// const mongo = require("mongodb");
// const supertest = require("supertest");
// const request = require("supertest");

beforeAll(async () => {
  const url = `mongodb://localhost/${databaseName}`;
  await mongoose.connect(url, { useNewUrlParser: true });
});

describe("User", () => {
  it("Should save user to database", async (done) => {
    const res = await request.post("/add").send({
      name: "Wesley",
      email: "wesley@example.com",
      password: "wesley",
    });
    done();
  });
});

async function removeAllCollections() {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }
}

afterEach(async () => {
  await removeAllCollections();
});

// const setUp = function () {
//   // get a handler to the testDB Database
//   mongo.Db.connect(
//     "mongodb://localhost:5000/testDB",
//     { server: { poolSize: 1 } },
//     function (err, db) {
//       if (err) throw err;
//       // create a test collection in the database
//       db.createCollection("test", function (err, test) {
//         if (err) throw err;
//         // insert a dummy document into the test collection
//         test.insert({
//           _id: "007",
//           name: "TestPerson",
//           email: "test@example.com",
//           __v: 0,
//           id: "007",
//         });

//         app.listen(5000);
//         console.log("App listening on port 5000");
//       });
//     }
//   );
// };

// setUp();

////

// const port = process.env.NODE_ENV === "test" ? 3001 : 3000;
// let db;
// if (process.env.NODE_ENV === "test") {
//   db = new sqlite3.Database(":memory:");
// } else {
//   db = new sqlite3.Database("db.sqlite");
// }
