const News = require("../models/news.js");

const insertNews = async (news_body) => {
    if(!news_body) {
        throw new Error("Invalid News")
    }
    return await News.insertNews(news_body);
}

const validateNews = (body) => {
    if(!body.title || body.title === "") return false
    if(!body.description || body.description === "") return false
    if(!body.matchId || !body.tourId) return false
    return true
}

module.exports = {
    insertNews: insertNews,
    validateNews: validateNews
}