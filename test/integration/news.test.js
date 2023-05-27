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
    it("should return all news", async () => {
        const response = await request(server).get(`/news`);
        expect(response.status).toBe(200);
    });
    it("should return news by given matchId", async () => {
        const response = await request(server).get(`/news/match?id=1`);
        expect(response.status).toBe(200);
    });
    it("should return news by given tourId", async () => {
        const response = await request(server).get(`/news/tour?id=1`);
        expect(response.status).toBe(200);
    });
    it("should return news by given sportId", async () => {
        const response = await request(server).get(`/news/sport?id=1`);
        expect(response.status).toBe(200);
    });
});
