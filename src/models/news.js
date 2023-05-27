const mysql = require('../lib/mysql');

const insertNews = async (news_body) => {
    const statement = 'insert into news (title, description, matchId, tourId, sportId) values (?, ?, ?, ?, ?)';
    const parameter = [news_body.title, news_body.description, news_body.matchId, news_body.tourId, news_body.sportId]
    return await mysql.query(statement, parameter)
}

module.exports = {
    getAllMatches: getAllMatches,
    insertNews: insertNews
}