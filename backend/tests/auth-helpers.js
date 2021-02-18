const app = require("../server");
const supertest = require("supertest");
const request = supertest(app);
const createUser = require("./signup-helper").createUser;

module.exports = wesleyData = {
  name: "Wesley",
  email: "wesley@example.com",
  passwordHash: "wesley",
};

module.exports = wesleyLogin = {
  email: "wesley@example.com",
  password: "wesley",
};

module.exports = logInUser = async () => {
  return await request
    .post("/users/login")
    .send(wesleyLogin)
    .set("Accept", "application/json");
};

// module.exports = getWesleyToken = () => {
//   let user = await createUser();
//   let userLoggedIn = await logInUser();
//   let parsedUserLoggedIn = JSON.parse(userLoggedIn.text);
//   let wesleyToken = parsedUserLoggedIn.token;
// };
