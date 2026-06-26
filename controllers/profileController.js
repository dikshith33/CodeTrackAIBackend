const {
    getLeetCodeProfile
} = require("../services/leetcodeService");

const {
    getCodeforcesProfile,
    getCodeforcesRatingHistory: fetchCodeforcesRatingHistory
} = require("../services/codeforcesService");
const {
    generateRecommendations
} = require("../services/recommendationService");

const getProfile = async (req, res) => {
    try {
        const { username } = req.params;

        const user = await getLeetCodeProfile(username);

        console.log(JSON.stringify(user, null, 2));

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const stats = user.submitStats.acSubmissionNum;

        const total =
            stats.find(s => s.difficulty === "All")?.count || 0;

        const easy =
            stats.find(s => s.difficulty === "Easy")?.count || 0;

        const medium =
            stats.find(s => s.difficulty === "Medium")?.count || 0;

        const hard =
    stats.find(s => s.difficulty === "Hard")?.count || 0;

const topicStats = [
    ...user.tagProblemCounts.fundamental,
    ...user.tagProblemCounts.intermediate,
    ...user.tagProblemCounts.advanced
];

const recommendationData =
    generateRecommendations(
        topicStats,
        total
    );

        res.json({
    username: user.username,
    ranking: user.profile.ranking,
    totalSolved: total,
    easy,
    medium,
    hard,

    topicStats,
    learningTrack:
    recommendationData.learningTrack,

    focusTopics:
    recommendationData.focusTopics,

    recommendations:
        recommendationData.recommendations
});

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Server Error"
        });
    }
};

const getCodeforcesUser = async (req, res) => {
    try {
        const { username } = req.params;

        const user = await getCodeforcesProfile(username);

        if (!user) {
            return res.status(404).json({
                message: "Codeforces User Not Found"
            });
        }

        res.json({
            handle: user.handle,
            rating: user.rating,
            maxRating: user.maxRating,
            rank: user.rank,
            maxRank: user.maxRank
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Codeforces User Not Found"
        });
    }
};

const getCodeforcesRatingHistory = async (req, res) => {
    try {
        const { username } = req.params;

        const history =
            await fetchCodeforcesRatingHistory(username);

        res.json(history);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Unable to fetch history"
        });
    }
};

module.exports = {
    getProfile,
    getCodeforcesUser,
    getCodeforcesRatingHistory
};