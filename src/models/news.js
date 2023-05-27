const mysql = require("../lib/mysql");

const insertNews = async (news_body) => {
    const statement =
        "insert into news (title, description, matchId, tourId, sportId) values (?, ?, ?, ?, ?);";
    const parameter = [
        news_body.title,
        news_body.description,
        news_body.matchId,
        news_body.tourId,
        news_body.sportId,
    ];
    return await mysql.query(statement, parameter);
};

const getNewsByMatchId = async (matchId) => {
    const statement = "select * from news where news.matchId = ?";
    const parameter = [matchId];
    return await mysql.query(statement, parameter);
};

const getNewsByTourId = async (tourId) => {
    const statement = "select * from news where news.tourId = ?";
    const parameter = [tourId];
    return await mysql.query(statement, parameter);
};

const getNewsBySportId = async (sportId) => {
    const statement = "select * from news where news.sportId = ?";
    const parameter = [sportId];
    return await mysql.query(statement, parameter);
};

const getAllNews = async () => {
    const statement = "select * from news";
    const parameter = [];
    return await mysql.query(statement, parameter);
};

module.exports = {
    insertNews: insertNews,
    getNewsByMatchId: getNewsByMatchId,
    getNewsByTourId: getNewsByTourId,
    getNewsBySportId: getNewsBySportId,
    getAllNews: getAllNews,
};
