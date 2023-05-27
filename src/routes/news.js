const Tour = require('../controllers/tour');
const Sport = require("../controllers/sport.js");
const News = require("../controllers/news.js");

module.exports = function(app) {
    app.route("/news").post(async (req, res, next) => {
        try {
            let news_body = req.body
            console.log(news_body)
            let isValid = News.validateNews(news_body)
            if(!isValid) {
                throw new Error("News Body is invalid")
            }
            //find corresponding tour & sport for given match news
            if(news_body.matchId) {
                news_body.tourId = Tour.findCorrespondingTourByMatchId(news_body.matchId)
                news_body.sportId = Sport.findCorrespondingSportByTourId(news_body.tourId)
            }
            //find corresponding sport for given tour news
            else if (news_body.tourId) {
                news_body.matchId = null;
                news_body.sportId = Sport.findCorrespondingSportByTourId(news_body.tourId)
            }
            //inserting into news table
            const insertResult = News.insertNews(news_body);
            if(!insertResult) {
                throw new Error("News insertion failed");
            }
            return res.json(insertResult, ...news_body)
        }
        catch(err) {
            next(err)
        }
    })
}

