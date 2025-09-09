var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'DSA Platform Backend',
    description: 'A comprehensive backend for DSA learning platform'
  });
});

/* GET signin page */
router.get('/signin', function(req, res) {
  res.render('signin');
});

/* GET signup page */
router.get('/signup', function(req, res) {
  res.render('signup');
});

/* GET dashboard page */
router.get('/dashboard', function(req, res) {
  res.render('dashboard');
});

/* GET profile page */
router.get('/profile', function(req, res) {
  res.render('profile');
});

/* GET settings page */
router.get('/settings', function(req, res) {
  res.render('settings');
});

/* GET API info */
router.get('/api', function(req, res) {
  res.json({
    name: 'DSA Platform Backend API',
    version: '1.0.0',
    description: 'Backend API for DSA learning platform',
    endpoints: {
      health: '/health',
      users: '/users',
      api: '/api',
      signin: '/signin',
      signup: '/signup',
      dashboard: '/dashboard',
      profile: '/profile',
      settings: '/settings'
    },
    status: 'running'
  });
});

/* GET DSA topics */
router.get('/api/topics', function(req, res) {
  res.json({
    topics: [
      'Arrays',
      'Strings',
      'Linked Lists',
      'Stacks',
      'Queues',
      'Trees',
      'Graphs',
      'Dynamic Programming',
      'Greedy Algorithms',
      'Backtracking',
      'Sorting',
      'Searching'
    ]
  });
});

/* POST user signup */
router.post('/api/signup', function(req, res) {
  try {
    const { firstName, lastName, email, username, password, experienceLevel } = req.body;
    
    // In a real app, you'd hash the password and store in database
    // For demo purposes, we'll simulate success
    const userData = {
      id: Date.now(),
      firstName,
      lastName,
      email,
      username,
      experienceLevel,
      points: 0,
      problemsSolved: 0,
      streak: 0,
      rank: '#--',
      createdAt: new Date().toISOString()
    };
    
    res.json({
      success: true,
      message: 'User registered successfully',
      user: userData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Registration failed',
      error: error.message
    });
  }
});

/* POST user signin */
router.post('/api/signin', function(req, res) {
  try {
    const { email, password } = req.body;
    
    // Demo credentials check
    if (email === 'demo@example.com' && password === 'demo123') {
      const userData = {
        id: 1,
        firstName: 'Demo',
        lastName: 'User',
        email: 'demo@example.com',
        username: 'demo_user',
        experienceLevel: 'Intermediate',
        points: 150,
        problemsSolved: 12,
        streak: 5,
        rank: '#42',
        createdAt: '2024-01-01T00:00:00.000Z'
      };
      
      res.json({
        success: true,
        message: 'Login successful',
        user: userData,
        token: 'demo_token_' + Date.now()
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Login failed',
      error: error.message
    });
  }
});

/* GET user profile */
router.get('/api/profile', function(req, res) {
  try {
    // In a real app, you'd get this from database using user ID
    const userData = {
      id: 1,
      firstName: 'Demo',
      lastName: 'User',
      email: 'demo@example.com',
      username: 'demo_user',
      experienceLevel: 'Intermediate',
      points: 150,
      problemsSolved: 12,
      streak: 5,
      rank: '#42',
      createdAt: '2024-01-01T00:00:00.000Z',
      lastActive: new Date().toISOString(),
      achievements: [
        { id: 1, name: 'First Problem', description: 'Solved your first problem', unlocked: true, progress: 100 },
        { id: 2, name: 'Streak Master', description: 'Maintain a 7-day streak', unlocked: false, progress: 71 },
        { id: 3, name: 'Category Explorer', description: 'Solve problems in 3 categories', unlocked: true, progress: 100 },
        { id: 4, name: 'Point Collector', description: 'Earn 100 points', unlocked: true, progress: 100 },
        { id: 5, name: 'Algorithm Master', description: 'Solve 50 problems', unlocked: false, progress: 24 }
      ],
      progress: {
        arrays: 60,
        linkedlists: 40,
        trees: 20,
        dp: 0
      },
      recentActivity: [
        { type: 'problem_solved', title: 'Two Sum', category: 'arrays', points: 10, time: new Date(Date.now() - 3600000).toISOString() },
        { type: 'streak_continued', title: 'Daily streak maintained', points: 5, time: new Date(Date.now() - 86400000).toISOString() },
        { type: 'achievement_unlocked', title: 'First Problem', points: 0, time: new Date(Date.now() - 172800000).toISOString() }
      ]
    };
    
    res.json({
      success: true,
      user: userData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch profile',
      error: error.message
    });
  }
});

/* PUT update user profile */
router.put('/api/profile', function(req, res) {
  try {
    const { firstName, lastName, email, experienceLevel } = req.body;
    
    // In a real app, you'd update the database
    res.json({
      success: true,
      message: 'Profile updated successfully',
      user: { firstName, lastName, email, experienceLevel }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Profile update failed',
      error: error.message
    });
  }
});

/* GET user settings */
router.get('/api/settings', function(req, res) {
  try {
    const settings = {
      appearance: {
        theme: 'dark',
        accentColor: 'primary',
        fontSize: 'medium'
      },
      notifications: {
        email: {
          newProblems: true,
          contestReminders: true,
          achievements: true
        },
        push: {
          dailyReminders: true,
          streakMaintenance: true
        }
      },
      problemPreferences: {
        defaultDifficulty: 'all',
        preferredCategories: ['arrays', 'linkedlists', 'trees', 'dp'],
        problemsPerSession: 5
      },
      codeEditor: {
        defaultLanguage: 'javascript',
        features: {
          autoCompletion: true,
          syntaxHighlighting: true,
          lineNumbers: true
        },
        tabSize: 4
      },
      privacy: {
        profileVisibility: 'public',
        activitySharing: true,
        progressUpdates: true,
        dataUsage: false
      },
      account: {
        language: 'english',
        timezone: 'UTC'
      }
    };
    
    res.json({
      success: true,
      settings: settings
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch settings',
      error: error.message
    });
  }
});

/* PUT update user settings */
router.put('/api/settings', function(req, res) {
  try {
    const settings = req.body;
    
    // In a real app, you'd save to database
    res.json({
      success: true,
      message: 'Settings updated successfully',
      settings: settings
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Settings update failed',
      error: error.message
    });
  }
});

/* GET problems by category */
router.get('/api/problems/:category', function(req, res) {
  try {
    const { category } = req.params;
    const { limit = 5 } = req.query;
    
    // In a real app, you'd fetch from database
    const problems = getProblemsByCategory(category, parseInt(limit));
    
    res.json({
      success: true,
      problems: problems,
      total: problems.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch problems',
      error: error.message
    });
  }
});

/* POST submit solution */
router.post('/api/submit-solution', function(req, res) {
  try {
    const { problemId, code, language, category } = req.body;
    
    // Simulate code execution and testing
    const result = simulateCodeExecution(code, problemId);
    
    if (result.success) {
      res.json({
        success: true,
        message: 'Solution accepted!',
        points: result.points,
        testResults: result.testResults
      });
    } else {
      res.json({
        success: false,
        message: 'Solution failed some test cases',
        testResults: result.testResults
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Solution submission failed',
      error: error.message
    });
  }
});

// Helper function to get problems by category
function getProblemsByCategory(category, limit) {
  const allProblems = [
    // Arrays & Strings
    { id: 1, title: "Two Sum", category: "arrays", difficulty: "easy", points: 10, description: "Find two numbers that add up to target" },
    { id: 2, title: "Valid Parentheses", category: "arrays", difficulty: "easy", points: 15, description: "Check if parentheses are valid" },
    { id: 3, title: "Maximum Subarray", category: "arrays", difficulty: "medium", points: 20, description: "Find maximum sum subarray" },
    { id: 4, title: "Longest Substring", category: "arrays", difficulty: "medium", points: 25, description: "Find longest substring without repeating chars" },
    { id: 5, title: "Container With Most Water", category: "arrays", difficulty: "hard", points: 30, description: "Find container with maximum water" },
    
    // Linked Lists
    { id: 6, title: "Reverse Linked List", category: "linkedlists", difficulty: "easy", points: 15, description: "Reverse a linked list" },
    { id: 7, title: "Detect Cycle", category: "linkedlists", difficulty: "medium", points: 20, description: "Detect cycle in linked list" },
    { id: 8, title: "Merge Two Lists", category: "linkedlists", difficulty: "easy", points: 15, description: "Merge two sorted linked lists" },
    { id: 9, title: "Remove Nth Node", category: "linkedlists", difficulty: "medium", points: 20, description: "Remove nth node from end" },
    { id: 10, title: "Add Two Numbers", category: "linkedlists", difficulty: "medium", points: 25, description: "Add two numbers represented by linked lists" },
    
    // Trees & Graphs
    { id: 11, title: "Maximum Depth", category: "trees", difficulty: "easy", points: 15, description: "Find maximum depth of binary tree" },
    { id: 12, title: "Validate BST", category: "trees", difficulty: "medium", points: 20, description: "Check if binary tree is valid BST" },
    { id: 13, title: "Number of Islands", category: "trees", difficulty: "medium", points: 25, description: "Count number of islands in grid" },
    { id: 14, title: "Course Schedule", category: "trees", difficulty: "medium", points: 25, description: "Check if course schedule is possible" },
    { id: 15, title: "Word Ladder", category: "trees", difficulty: "hard", points: 30, description: "Find shortest transformation sequence" },
    
    // Dynamic Programming
    { id: 16, title: "Climbing Stairs", category: "dp", difficulty: "easy", points: 15, description: "Count ways to climb stairs" },
    { id: 17, title: "Fibonacci Number", category: "dp", difficulty: "easy", points: 10, description: "Calculate nth Fibonacci number" },
    { id: 18, title: "Longest Common Subsequence", category: "dp", difficulty: "medium", points: 25, description: "Find longest common subsequence" },
    { id: 19, title: "Coin Change", category: "dp", difficulty: "medium", points: 25, description: "Find minimum coins needed" },
    { id: 20, title: "Edit Distance", category: "dp", difficulty: "hard", points: 30, description: "Find minimum edit distance" }
  ];
  
  return allProblems.filter(p => p.category === category).slice(0, limit);
}

// Helper function to simulate code execution
function simulateCodeExecution(code, problemId) {
  // Simulate test execution
  const testResults = [
    { testCase: 1, passed: true, input: "[2,7,11,15]", output: "[0,1]", expected: "[0,1]" },
    { testCase: 2, passed: true, input: "[3,2,4]", output: "[1,2]", expected: "[1,2]" },
    { testCase: 3, passed: true, input: "[3,3]", output: "[0,1]", expected: "[0,1]" }
  ];
  
  const allPassed = testResults.every(t => t.passed);
  const points = allPassed ? 10 : 0;
  
  return {
    success: allPassed,
    points: points,
    testResults: testResults
  };
}

module.exports = router;
