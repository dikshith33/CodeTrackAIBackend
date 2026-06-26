const axios = require("axios");

const getCodeforcesProfile = async (username) => {

    const response = await axios.get(
        `https://codeforces.com/api/user.info?handles=${username}`
    );

    return response.data.result[0];
};

const getCodeforcesRatingHistory = async (username) => {

    const response = await axios.get(
        `https://codeforces.com/api/user.rating?handle=${username}`
    );

    return response.data.result;
};

module.exports = {
    getCodeforcesProfile,
    getCodeforcesRatingHistory
};