const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    skillLevel: {
        type: String,
        enum: ['beginner', 'intermediate', 'pro'],
        default: 'beginner'
    },
    problemsSolved: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Problem'
    }],
    progress: {
        beginner: {
            completed: { type: Number, default: 0 },
            total: { type: Number, default: 0 }
        },
        intermediate: {
            completed: { type: Number, default: 0 },
            total: { type: Number, default: 0 }
        },
        pro: {
            completed: { type: Number, default: 0 },
            total: { type: Number, default: 0 }
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);