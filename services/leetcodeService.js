const axios = require("axios");

const getLeetCodeProfile = async (username) => {
   const query = `
query skillStats($username: String!) {
  matchedUser(username: $username) {
    username

    submitStats {
      acSubmissionNum {
        difficulty
        count
      }
    }

    profile {
      ranking
    }

    tagProblemCounts {
      advanced {
        tagName
        tagSlug
        problemsSolved
      }
      intermediate {
        tagName
        tagSlug
        problemsSolved
      }
      fundamental {
        tagName
        tagSlug
        problemsSolved
      }
    }
  }
}
`;

    const response = await axios.post(
        "https://leetcode.com/graphql",
        {
            query,
            variables: { username }
        },
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );

    return response.data.data.matchedUser;
};

module.exports = {
    getLeetCodeProfile
};