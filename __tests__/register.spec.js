const request = require('supertest');
const server = require("../api/server");
const db = require("../database/dbConfig");

describe("/register", () => {
  beforeEach(async () => {
    await db('users').truncate();
  })

  it("POST /api/auth/register", async () => {
    const newUser = { username: 'paulsmith', password: '12345678'}
    const response = await request(server).post('/api/auth/register').send(newUser);
    expect(response.status).toBe(201);
    expect(response.type).toBe("application/json");
    expect(response.body).toEqual({
      status: 'success',
      message: 'Registered successfully. Welcome, paulsmith.'
    });
  });
});