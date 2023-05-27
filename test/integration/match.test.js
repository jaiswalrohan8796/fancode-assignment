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

    it("should return matches", async () => {
        const response = await request(server).get(`/matches`);
        expect(response.status).toBe(200);
    });

});
