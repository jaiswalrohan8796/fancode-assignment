const request = require("supertest");
const { app } = require("../../index");

describe("Integration Tests", () => {
    let server;

    beforeAll((done) => {
        server = app.listen(done);
    });

    afterAll((done) => {
        server.close(done);
    });

    it("should return a 200 OK status code for GET request to /health", async () => {
        const response = await request(server).get("/health");
        expect(response.status).toBe(200);
    });
    it("should return matches by tour name", async () => {
        const response = await request(server).get(
            `/tour/matches?name=Indian Premier League, 2023`
        );
        expect(response.status).toBe(200);
    });
    it("", async () => {
        const response = await request(server).get(`/sport/tour/match`);
        expect(response.status).toBe(200);
    });
});
