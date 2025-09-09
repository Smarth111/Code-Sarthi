const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ['beginner', 'intermediate', 'pro'],
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['array', 'string', 'linkedlist', 'tree', 'graph', 'dp', 'greedy', 'other']
    },
    testCases: [{
        input: String,
        output: String,
        explanation: String
    }],
    constraints: {
        type: String,
        required: true
    },
    sampleCode: {
        javascript: String,
        python: String,
        java: String,
        cpp: String
    },
    solution: {
        approach: String,
        complexity: {
            time: String,
            space: String
        },
        code: {
            javascript: String,
            python: String,
            java: String,
            cpp: String
        }
    },
    order: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Problem', problemSchema);
