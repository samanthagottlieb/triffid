const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);

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