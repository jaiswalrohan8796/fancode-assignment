const mysql = require('../lib/mysql');

const getAllTours = async () => {
    const statement = 'select * from tours;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getMatchesByTourName = async params => {
    const statement = 'select * from matches left join tours on matches.tourId = tours.id where tours.name = ?';
    const parameters = [ params.name ];
    return await mysql.query(statement, parameters);
}

const findCorrespondingTourByMatchId = async matchId => {
    const statement = 'select tourId from matches where matches.id = ?';
    const parameter = [matchId]
    return await mysql.query(statement, parameter);
}
module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName,
    findCorrespondingTourByMatchId: findCorrespondingTourByMatchId
}