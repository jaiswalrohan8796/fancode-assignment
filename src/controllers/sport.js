const Sport = require('../models/sport');

const getAllSportsToursAndMatches = async () => {
    const matches = await Sport.getAllSportsToursAndMatches();
    const res = {};
    matches.forEach(match => {
        const { sportName, tourName, matchName, matchId, matchStartTime, matchFormat } = match;
        if (!res[sportName]) {
            res[sportName] = {};
        }
        if (!res[sportName][tourName]) {
            res[sportName][tourName] = [];
        }
        // adding match details as an object
        let matchDetails = {
            matchId, matchName, matchFormat, matchStartTime
        }
        res[sportName][tourName].push(matchDetails);
    });
    return res;
}

const findCorrespondingSportByTourId = async tourId => {
    if(!tourId) {
        throw new Error("Missing required parameter: tourId")
    }
    return await Sport.findCorrespondingSportByTourId(tourId)
}

module.exports = {
    getAllSportsToursAndMatches: getAllSportsToursAndMatches,
    findCorrespondingSportByTourId: findCorrespondingSportByTourId
}