const request = require('supertest');
const server = require("../api/server");
const db = require("../database/dbConfig");

describe("jokes routes", () => {
  it("GET /api/jokes should return 401", async () => {
    const response = await request(server).get('/api/jokes');
    expect(response.status).toBe(401);
    expect(response.type).toBe("application/json");
  });
});
