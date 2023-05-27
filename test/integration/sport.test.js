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

    it("should return sports tours & matches", async () => {
        const response = await request(server).get(`/sport/tour/match`);
        expect(response.status).toBe(200);
    });
});
