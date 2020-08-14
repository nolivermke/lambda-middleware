import request from "supertest";
const server = request("http://localhost:3000/dev");

describe("Handler with cors middleware", () => {
  it("returns 200", async () => {
    await server.get("/hello").expect(200);
  });
});
