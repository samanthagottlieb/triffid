const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);

module.exports = wesleyData = {
  name: "Wesley",
  email: "wesley@example.com",
  passwordHash: "wesley",
};

module.exports = wesleyLogin = {
  email: "wesley@example.com",
  passwordHash: "wesley",
};

module.exports = logInUser = (userLogin) =>
  request.post("/users/login").send(userLogin);

async function createUser() {
    return await request.post("/users/add")
      .send({
        name: "Wesley",
        email: "wesley@example.com",
        password: "wesley"
      })
      .set('Accept', 'application/json');
}

module.exports = {createUser};