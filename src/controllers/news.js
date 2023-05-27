const News = require("../models/news.js");

const insertNews = async (news_body) => {
    if (!news_body) {
        throw new Error("Invalid News");
    }
    return await News.insertNews(news_body);
};

const validateNews = (body) => {
    if (!body.title || body.title === "") return false;
    if (!body.description || body.description === "") return false;
    if (!body.matchId && !body.tourId) return false;
    return true;
};

const getNewsByMatchId = async (matchId) => {
    return await News.getNewsByMatchId(matchId);
};

const getNewsByTourId = async (tourId) => {
    return await News.getNewsByTourId(tourId);
};

const getNewsBySportId = async (sportId) => {
    return await News.getNewsBySportId(sportId);
};

const getAllNews = async () => {
    return await News.getAllNews();
};

module.exports = {
    insertNews: insertNews,
    validateNews: validateNews,
    getNewsByMatchId: getNewsByMatchId,
    getNewsByTourId: getNewsByTourId,
    getNewsBySportId: getNewsBySportId,
    getAllNews: getAllNews,
};
