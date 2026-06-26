const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const askAI = async (question) => {
    try {
        const model = genAI.getGenerativeModel({
            model: "gemini-3.1-flash-lite"
        });

const prompt = `
You are a senior competitive programming mentor and DSA instructor.

Question:
${question}

Analyze the user's request carefully.

If the user asks for:
- code
- solution
- implementation
- cpp
- c++
- java
- python

then include a complete working implementation in the requested language.

Respond in markdown using the following structure:

# Problem Summary

Briefly explain the problem in simple terms.

## Intuition

Explain the thought process behind solving the problem.

Use simple examples whenever helpful.

## Brute Force

Explain the naive approach.

Include:
- Idea
- Steps
- Time Complexity
- Space Complexity

## Optimal Solution

Explain the best approach.

Include:
- Key observation
- Algorithm
- Why it works

${
question.toLowerCase().match(
    /(code|solution|implementation|cpp|c\+\+|java|python)/
)
? `
## Code

Provide complete working code.

Requirements:
- Use clean variable names.
- Add useful comments.
- Follow competitive programming best practices.
`
: ""
}

## Complexity Analysis

Present complexity in a markdown table.

| Metric | Value |
|----------|----------|
| Time Complexity | ... |
| Space Complexity | ... |

## Common Mistakes

List 1-2 common mistakes beginners make.

## Similar Problems

List related LeetCode problems and patterns.

Additional Formatting Rules:

- Use markdown headings.
- Use markdown tables where appropriate.
- Use code blocks ONLY for actual source code.
- Use inline code for variables, arrays, inputs, outputs, and values.
- Do NOT put examples like \`[1,2,5]\`, \`11\`, \`nums\`, \`target\` in separate code blocks.
- Do NOT create code blocks for examples unless showing actual code.
- Keep explanations concise and beginner-friendly.
- Focus on learning and interview preparation.
- Use bullet points when possible.
- Avoid large walls of text.
- Do NOT use LaTeX notation.
- Do NOT wrap complexity expressions in $ symbols.
- Write complexities as plain text.
- Example: O(n), O(n log n), O(n²), O(1).
`;

        const result = await model.generateContent(prompt);

        const response = await result.response;
        const text = response.text();

        return text;

    } catch (error) {
        console.error("AI Error:", error);
        throw error;
    }
};

module.exports = { askAI };