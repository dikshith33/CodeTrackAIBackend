const {
    askAI
} = require(
    "../services/aiService"
);

const chatWithAI =
    async (req, res) => {

        try {

            const {
                question
            } = req.body;

            const answer =
                await askAI(
                    question
                );

            res.json({
                answer
            });

        } catch (error) {

            console.log(error);

            res.status(500).json({
                message:
                    "AI Error"
            });

        }

    };

module.exports = {
    chatWithAI
};