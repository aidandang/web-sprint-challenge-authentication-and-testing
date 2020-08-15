const request = require('supertest');
const server = require("../api/server");
const db = require("../database/dbConfig");

describe("validate user register", () => {
  beforeEach(async () => {
    await db('users').truncate();
  })

  it("username and password are missing", async () => {
    const newUser = { password: '12345678' }
    const response = await request(server).post('/api/auth/register').send(newUser);
    expect(response.status).toBe(404);
    expect(response.body.status).toBe('fail');
    expect(response.body.message).toBe('username and password fields are missing.');
  });

  it("username no more than 255 chars", async () => {
    const newUser = {
      username: "paulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmithpaulsmith",
      password: "dgdfgdgf"
    }
    const response = await request(server).post('/api/auth/register').send(newUser);
    expect(response.status).toBe(404);
    expect(response.body.status).toBe('fail');
    expect(response.body.message).toBe('username is no more than 255 characters.');
  });
});