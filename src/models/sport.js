const mysql = require('../lib/mysql');

const getAllSportsToursAndMatches = async () => {
    const statement = 'select s.name as sportName, t.name as tourName, m.name as matchName, m.id as matchId, m.startTime as matchStartTime, m.format as matchFormat ' +
        'from matches m left join tours t on m.tourId = t.id ' +
        'left join sports s on t.sportId = s.id';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const findCorrespondingSportByTourId = async tourId => {
    const statement = 'select sportId from tours where tours.id = ?';
    const parameter = [tourId];
    return await mysql.query(statement, parameter);
}

module.exports = {
    getAllSportsToursAndMatches: getAllSportsToursAndMatches,
    findCorrespondingSportByTourId: findCorrespondingSportByTourId
}