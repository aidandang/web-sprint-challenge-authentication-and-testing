const request = require('supertest');
const server = require("../api/server");
const db = require("../database/dbConfig");

describe("/login", () => {
  beforeAll(async () => {
    await db('users').truncate();
  })

  it("POST /api/auth/register", async () => {
    const newUser = { username: 'paulsmith', password: '12345678'}
    const response = await request(server).post('/api/auth/register').send(newUser);
    expect(response.status).toBe(201);
    expect(response.type).toBe("application/json");
    expect(response.body.status).toBe('success');
    expect(response.body.message).toBe('Registered successfully. Welcome, paulsmith.');
  });

  it("POST /api/auth/login", async () => {
    const user = { username: 'paulsmith', password: '12345678'}
    const response = await request(server).post('/api/auth/login').send(user);
    expect(response.status).toBe(201);
    expect(response.type).toBe("application/json");
    expect(response.body.token).toBeDefined();
    expect(response.body.message).toBe('Welcome, paulsmith.')
  });
});