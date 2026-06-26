const topicWeights = {
    "Dynamic Programming": 10,
    "Graph Theory": 10,
    "Shortest Path": 10,
    "Topological Sort": 9,
    "Union-Find": 9,
    "Trie": 8,
    "Segment Tree": 8,
    "Binary Indexed Tree": 8,
    "Monotonic Queue": 7,
    "Monotonic Stack": 7,
    "Backtracking": 6,
    "Binary Search": 5,
    "Greedy": 4,
    "Tree": 3,
    "Breadth-First Search": 3,
    "Depth-First Search": 3,
    "Design": 3,
    "Heap (Priority Queue)": 3,
    "Bit Manipulation": 2,
    "Array": 1,
    "String": 1,
    "Hash Table": 1
};

const roadmap = {

    "Segment Tree": [
        {
            title: "Range Sum Query Mutable",
            slug: "range-sum-query-mutable",
            difficulty: "Medium",
            priority: 1
        },
        {
            title: "My Calendar III",
            slug: "my-calendar-iii",
            difficulty: "Hard",
            priority: 2
        },
        {
            title: "Range Module",
            slug: "range-module",
            difficulty: "Hard",
            priority: 3
        }
    ],

    "Topological Sort": [
        {
            title: "Course Schedule",
            slug: "course-schedule",
            difficulty: "Medium",
            priority: 1
        },
        {
            title: "Course Schedule II",
            slug: "course-schedule-ii",
            difficulty: "Medium",
            priority: 2
        },
        {
            title: "Alien Dictionary",
            slug: "alien-dictionary",
            difficulty: "Hard",
            priority: 3
        }
    ],

    "Trie": [
        {
            title: "Implement Trie",
            slug: "implement-trie-prefix-tree",
            difficulty: "Medium",
            priority: 1
        },
        {
            title: "Replace Words",
            slug: "replace-words",
            difficulty: "Medium",
            priority: 2
        },
        {
            title: "Word Search II",
            slug: "word-search-ii",
            difficulty: "Hard",
            priority: 3
        }
    ],

    "Shortest Path": [
        {
            title: "Network Delay Time",
            slug: "network-delay-time",
            difficulty: "Medium",
            priority: 1
        },
        {
            title: "Path With Minimum Effort",
            slug: "path-with-minimum-effort",
            difficulty: "Medium",
            priority: 2
        },
        {
            title: "Cheapest Flights Within K Stops",
            slug: "cheapest-flights-within-k-stops",
            difficulty: "Medium",
            priority: 3
        }
    ],

    "Union-Find": [
        {
            title: "Number of Provinces",
            slug: "number-of-provinces",
            difficulty: "Medium",
            priority: 1
        },
        {
            title: "Accounts Merge",
            slug: "accounts-merge",
            difficulty: "Medium",
            priority: 2
        },
        {
            title: "Redundant Connection",
            slug: "redundant-connection",
            difficulty: "Medium",
            priority: 3
        }
    ],

    "Dynamic Programming": [
        {
            title: "House Robber",
            slug: "house-robber",
            difficulty: "Medium",
            priority: 1
        },
        {
            title: "Coin Change",
            slug: "coin-change",
            difficulty: "Medium",
            priority: 2
        },
        {
            title: "Target Sum",
            slug: "target-sum",
            difficulty: "Medium",
            priority: 3
        },
        {
            title: "Longest Increasing Subsequence",
            slug: "longest-increasing-subsequence",
            difficulty: "Medium",
            priority: 4
        },
        {
            title: "Partition Equal Subset Sum",
            slug: "partition-equal-subset-sum",
            difficulty: "Medium",
            priority: 5
        }
    ],

    "Graph Theory": [
        {
            title: "Clone Graph",
            slug: "clone-graph",
            difficulty: "Medium",
            priority: 1
        },
        {
            title: "Number of Islands",
            slug: "number-of-islands",
            difficulty: "Medium",
            priority: 2
        },
        {
            title: "Critical Connections in a Network",
            slug: "critical-connections-in-a-network",
            difficulty: "Hard",
            priority: 3
        }
    ],

    "Binary Indexed Tree": [
        {
            title: "Count of Smaller Numbers After Self",
            slug: "count-of-smaller-numbers-after-self",
            difficulty: "Hard",
            priority: 1
        },
        {
            title: "Range Sum Query Mutable",
            slug: "range-sum-query-mutable",
            difficulty: "Medium",
            priority: 2
        },
        {
            title: "Reverse Pairs",
            slug: "reverse-pairs",
            difficulty: "Hard",
            priority: 3
        }
    ],

    "Monotonic Queue": [
        {
            title: "Sliding Window Maximum",
            slug: "sliding-window-maximum",
            difficulty: "Hard",
            priority: 1
        },
        {
            title: "Shortest Subarray with Sum at Least K",
            slug: "shortest-subarray-with-sum-at-least-k",
            difficulty: "Hard",
            priority: 2
        }
    ],

    "Monotonic Stack": [
        {
            title: "Daily Temperatures",
            slug: "daily-temperatures",
            difficulty: "Medium",
            priority: 1
        },
        {
            title: "Largest Rectangle in Histogram",
            slug: "largest-rectangle-in-histogram",
            difficulty: "Hard",
            priority: 2
        },
        {
            title: "Next Greater Element I",
            slug: "next-greater-element-i",
            difficulty: "Easy",
            priority: 3
        }
    ],

    "Breadth-First Search": [
        {
            title: "Binary Tree Level Order Traversal",
            slug: "binary-tree-level-order-traversal",
            difficulty: "Medium",
            priority: 1
        },
        {
            title: "Rotting Oranges",
            slug: "rotting-oranges",
            difficulty: "Medium",
            priority: 2
        },
        {
            title: "Word Ladder",
            slug: "word-ladder",
            difficulty: "Hard",
            priority: 3
        }
    ],

    "Depth-First Search": [
        {
            title: "Number of Islands",
            slug: "number-of-islands",
            difficulty: "Medium",
            priority: 1
        },
        {
            title: "Clone Graph",
            slug: "clone-graph",
            difficulty: "Medium",
            priority: 2
        },
        {
            title: "Path Sum",
            slug: "path-sum",
            difficulty: "Easy",
            priority: 3
        }
    ],

    "Stack": [
        {
            title: "Valid Parentheses",
            slug: "valid-parentheses",
            difficulty: "Easy",
            priority: 1
        },
        {
            title: "Min Stack",
            slug: "min-stack",
            difficulty: "Medium",
            priority: 2
        },
        {
            title: "Daily Temperatures",
            slug: "daily-temperatures",
            difficulty: "Medium",
            priority: 3
        }
    ],

    "String": [
        {
            title: "Valid Anagram",
            slug: "valid-anagram",
            difficulty: "Easy",
            priority: 1
        },
        {
            title: "Longest Common Prefix",
            slug: "longest-common-prefix",
            difficulty: "Easy",
            priority: 2
        },
        {
            title: "Group Anagrams",
            slug: "group-anagrams",
            difficulty: "Medium",
            priority: 3
        }
    ],

    "Tree": [
        {
            title: "Balanced Binary Tree",
            slug: "balanced-binary-tree",
            difficulty: "Easy",
            priority: 1
        },
        {
            title: "Diameter of Binary Tree",
            slug: "diameter-of-binary-tree",
            difficulty: "Easy",
            priority: 2
        },
        {
            title: "Path Sum",
            slug: "path-sum",
            difficulty: "Easy",
            priority: 3
        }
    ],

    "Binary Tree": [
        {
            title: "Invert Binary Tree",
            slug: "invert-binary-tree",
            difficulty: "Easy",
            priority: 1
        },
        {
            title: "Maximum Depth of Binary Tree",
            slug: "maximum-depth-of-binary-tree",
            difficulty: "Easy",
            priority: 2
        },
        {
            title: "Binary Tree Paths",
            slug: "binary-tree-paths",
            difficulty: "Easy",
            priority: 3
        }
    ],

    "Design": [
        {
            title: "LRU Cache",
            slug: "lru-cache",
            difficulty: "Medium",
            priority: 1
        },
        {
            title: "Design Browser History",
            slug: "design-browser-history",
            difficulty: "Medium",
            priority: 2
        },
        {
            title: "Design Twitter",
            slug: "design-twitter",
            difficulty: "Medium",
            priority: 3
        }
    ],

    "Heap (Priority Queue)": [
        {
            title: "Kth Largest Element in an Array",
            slug: "kth-largest-element-in-an-array",
            difficulty: "Medium",
            priority: 1
        },
        {
            title: "Find Median from Data Stream",
            slug: "find-median-from-data-stream",
            difficulty: "Hard",
            priority: 2
        },
        {
            title: "Task Scheduler",
            slug: "task-scheduler",
            difficulty: "Medium",
            priority: 3
        }
    ],

    "Bit Manipulation": [
        {
            title: "Single Number",
            slug: "single-number",
            difficulty: "Easy",
            priority: 1
        },
        {
            title: "Counting Bits",
            slug: "counting-bits",
            difficulty: "Easy",
            priority: 2
        },
        {
            title: "Maximum XOR of Two Numbers in an Array",
            slug: "maximum-xor-of-two-numbers-in-an-array",
            difficulty: "Medium",
            priority: 3
        }
    ],

    "Binary Search": [
        {
            title: "Search in Rotated Sorted Array",
            slug: "search-in-rotated-sorted-array",
            difficulty: "Medium",
            priority: 1
        },
        {
            title: "Koko Eating Bananas",
            slug: "koko-eating-bananas",
            difficulty: "Medium",
            priority: 2
        },
        {
            title: "Find Peak Element",
            slug: "find-peak-element",
            difficulty: "Medium",
            priority: 3
        }
    ],

    "Backtracking": [
        {
            title: "Subsets",
            slug: "subsets",
            difficulty: "Medium",
            priority: 1
        },
        {
            title: "Combination Sum",
            slug: "combination-sum",
            difficulty: "Medium",
            priority: 2
        },
        {
            title: "N-Queens",
            slug: "n-queens",
            difficulty: "Hard",
            priority: 3
        }
    ],

    "Greedy": [
        {
            title: "Jump Game",
            slug: "jump-game",
            difficulty: "Medium",
            priority: 1
        },
        {
            title: "Gas Station",
            slug: "gas-station",
            difficulty: "Medium",
            priority: 2
        },
        {
            title: "Partition Labels",
            slug: "partition-labels",
            difficulty: "Medium",
            priority: 3
        }
    ]
};

const generateRecommendations = (
    topics,
    totalSolved = 0
) => {

    const solvedMap = {};

    topics.forEach(topic => {
        solvedMap[topic.tagName] =
            topic.problemsSolved;
    });

    let learningTrack = "beginner";

    if (totalSolved >= 600) {
        learningTrack = "advanced";
    } else if (totalSolved >= 150) {
        learningTrack = "intermediate";
    }

    const beginnerTopics = [
        "Array",
        "String",
        "Hash Table",
        "Binary Search",
        "Greedy"
    ];

    const intermediateTopics = [
        "Tree",
        "Breadth-First Search",
        "Depth-First Search",
        "Backtracking",
        "Dynamic Programming"
    ];

    const advancedTopics = [
        "Segment Tree",
        "Binary Indexed Tree",
        "Trie",
        "Union-Find",
        "Topological Sort",
        "Shortest Path",
        "Monotonic Queue",
        "Monotonic Stack",
        "Graph Theory"
    ];

    let targetTopics = [];

    if (learningTrack === "beginner") {
        targetTopics = beginnerTopics;
    } else if (learningTrack === "intermediate") {
        targetTopics = intermediateTopics;
    } else {
        targetTopics = advancedTopics;
    }

    const scoredTopics = targetTopics.map(tagName => {

        const solved =
            solvedMap[tagName] || 0;

        const weight =
            topicWeights[tagName] || 1;

        return {
            tagName,
            problemsSolved: solved,
            score:
                weight /
                (solved + 1)
        };

    });

    scoredTopics.sort(
        (a, b) => b.score - a.score
    );

    const focusTopics =
        scoredTopics.slice(0, 5);

    const recommendations = [];

    focusTopics.forEach(topic => {

        const problems =
            roadmap[topic.tagName] || [];

        problems.forEach(problem => {

            recommendations.push({

                topic: topic.tagName,

                title: problem.title,

                difficulty:
                    problem.difficulty,

                priority:
                    problem.priority,

                url:
                    `https://leetcode.com/problems/${problem.slug}/`

            });

        });

    });

    recommendations.sort(
        (a, b) =>
            a.priority - b.priority
    );

    return {
        learningTrack,
        focusTopics,
        recommendations
    };
};

module.exports = {
    generateRecommendations
};