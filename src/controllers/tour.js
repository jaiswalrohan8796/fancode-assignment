const Tour = require('../models/tour');

const getAllTours = async () => {
    return await Tour.getAllTours();
}

const getMatchesByTourName = async params => {
    const { name } = params;

    if (!name) {
        throw new Error('Missing required parameter: name');
    }

    return await Tour.getMatchesByTourName(params);
}

const findCorrespondingTourByMatchId = async matchId => {
    if(!matchId) {
        throw new Error("Missing required parameter: matchId")
    }

    return await Tour.findCorrespondingTourByMatchId(matchId)
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName,
    findCorrespondingTourByMatchId : findCorrespondingTourByMatchId
}