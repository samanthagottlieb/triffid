const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);

module.exports = userData = {
  name: "Wesley",
  email: "wesley@example.com",
  passwordHash: "wesley",
};

module.exports = userLogin = {
  email: "wesley@example.com",
  passwordHash: "wesley",
};

module.exports = signUpUser = (userData) =>
  request.post("/users/signup").send(userData);

module.exports = logInUser = () =>
  request.post("/users/login").send({
    email: "wesley@example.com",
    passwordHash: "wesley",
  });
