const Tour = require("../controllers/tour");
const Sport = require("../controllers/sport.js");
const News = require("../controllers/news.js");

module.exports = function (app) {
    app.route("/news/match").get(async (req, res, next) => {
        try {
            const matchId = req.query.id;
            if (!matchId) {
                throw new Error("Match ID is missing");
            }
            let result = await News.getNewsByMatchId(matchId);
            return res.json(result);
        } catch (err) {
            next(err);
        }
    });

    app.route("/news/tour").get(async (req, res, next) => {
        try {
            const tourId = req.query.id;
            if (!tourId) {
                throw new Error("Tour ID is missing");
            }
            let result = await News.getNewsByTourId(tourId);
            return res.json(result);
        } catch (err) {
            next(err);
        }
    });

    app.route("/news/sport").get(async (req, res, next) => {
        try {
            const sportId = req.query.id;
            if (!sportId) {
                throw new Error("Sport ID is missing");
            }
            let result = await News.getNewsBySportId(sportId);
            return res.json(result);
        } catch (err) {
            next(err);
        }
    });

    app.route("/news").get(async (req, res, next) => {
        try {
            let result = await News.getAllNews();
            return res.json(result);
        } catch (err) {
            next(err);
        }
    });
    app.route("/news").post(async (req, res, next) => {
        try {
            let news_body = req.body;
            let isValid = News.validateNews(news_body);
            if (!isValid) {
                throw new Error("News Body is invalid");
            }
            //find corresponding tour & sport for given match news
            if (news_body.matchId) {
                let tours = await Tour.findCorrespondingTourByMatchId(
                    news_body.matchId
                );
                news_body.tourId = tours[0].tourId;
                let sports = await Sport.findCorrespondingSportByTourId(
                    news_body.tourId
                );
                news_body.sportId = sports[0].sportId;
            }
            //find corresponding sport for given tour news
            else if (news_body.tourId) {
                news_body.matchId = null;
                let sports = await Sport.findCorrespondingSportByTourId(
                    news_body.tourId
                );
                news_body.sportId = sports[0].sportId;
            }
            //inserting into news table
            const insertResult = await News.insertNews(news_body);
            if (!insertResult) {
                throw new Error("News insertion failed");
            }
            return res.json({ id: insertResult.insertId, ...news_body });
        } catch (err) {
            next(err);
        }
    });
};
