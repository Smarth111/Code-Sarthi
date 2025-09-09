// CodeMaster Pro - Ultimate DSA Platform JavaScript
// Combining the best of LeetCode, CodeChef, HackerEarth, and ByteXL

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 CodeMaster Pro - Ultimate DSA Platform Loaded Successfully!');
    console.log('🎯 Features: LeetCode + CodeChef + HackerEarth + ByteXL');
    console.log('🔥 Ready to conquer algorithms!');
    
    // Initialize all functionality
    initializeThemeToggle();
    initializeUserMenus();
    initializeNavigation();
    initializePageSpecificFeatures();
    
    // Log page load time
    const loadTime = performance.now();
    console.log('Page Load Time:', loadTime.toFixed(2), 'ms');
});

// Theme Toggle Functionality
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    applyTheme(savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        applyTheme(newTheme);
        
        console.log('Theme changed to:', newTheme);
    });
}

function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const icon = themeToggle.querySelector('i');
    if (icon) {
        if (theme === 'light') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }
}

function applyTheme(theme) {
    const root = document.documentElement;
    
    if (theme === 'light') {
        root.style.setProperty('--bg-primary', '#ffffff');
        root.style.setProperty('--bg-secondary', '#f8f9fa');
        root.style.setProperty('--bg-tertiary', '#e9ecef');
        root.style.setProperty('--bg-card', 'rgba(0, 0, 0, 0.05)');
        root.style.setProperty('--text-primary', '#000000');
        root.style.setProperty('--text-secondary', '#495057');
        root.style.setProperty('--text-muted', '#6c757d');
    } else {
        root.style.setProperty('--bg-primary', '#0a0a0a');
        root.style.setProperty('--bg-secondary', '#1a1a1a');
        root.style.setProperty('--bg-tertiary', '#2a2a2a');
        root.style.setProperty('--bg-card', 'rgba(255, 255, 255, 0.05)');
        root.style.setProperty('--text-primary', '#ffffff');
        root.style.setProperty('--text-secondary', '#b0b0b0');
        root.style.setProperty('--text-muted', '#808080');
    }
    
    // Trigger theme change event for other components
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
}

// User Menu Dropdown Functionality
function initializeUserMenus() {
    const userMenus = document.querySelectorAll('.user-menu');
    
    userMenus.forEach(menu => {
        const avatar = menu.querySelector('.user-avatar');
        const dropdown = menu.querySelector('.user-dropdown');
        
        if (avatar && dropdown) {
            // Toggle dropdown on avatar click
            avatar.addEventListener('click', function(e) {
                e.stopPropagation();
                menu.classList.toggle('open');
                
                // Close other open menus
                userMenus.forEach(otherMenu => {
                    if (otherMenu !== menu) {
                        otherMenu.classList.remove('open');
                    }
                });
                
                console.log('User menu toggled');
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!menu.contains(e.target)) {
                    menu.classList.remove('open');
                }
            });
            
            // Close dropdown on escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    menu.classList.remove('open');
                }
            });
        }
    });
}

// Navigation Functionality
function initializeNavigation() {
    // Handle navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // If it's a hash link (same page), prevent default and scroll
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
            // If it's a regular link (different page), let it work normally
        });
    });
    
    // Handle logout functionality
    const logoutButtons = document.querySelectorAll('[onclick="logout()"], #logoutBtn');
    logoutButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            logout();
        });
    });
}

// Logout Function
function logout() {
    console.log('Logging out...');
    localStorage.removeItem('userData');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('progressData');
    localStorage.removeItem('allProblems');
    localStorage.removeItem('userSettings');
    window.location.href = '/';
}

// Page Specific Features
function initializePageSpecificFeatures() {
    const currentPage = window.location.pathname;
    
    switch(currentPage) {
        case '/':
            initializeLandingPage();
            break;
        case '/dashboard':
            initializeDashboard();
            break;
        case '/profile':
            initializeProfile();
            break;
        case '/settings':
            initializeSettings();
            break;
        case '/signin':
            initializeSignIn();
            break;
        case '/signup':
            initializeSignUp();
            break;
        default:
            console.log('Unknown page:', currentPage);
    }
}

// Landing Page Features
function initializeLandingPage() {
    console.log('Initializing landing page features...');
    
    // Animated counters
    initializeCounters();
    
    // Category card interactions
    initializeCategoryCards();
    
    // Floating elements
    initializeFloatingElements();
    
    // Contest timers
    initializeContestTimers();
}

// Dashboard Features
function initializeDashboard() {
    console.log('Initializing dashboard features...');
    
    // Check authentication
    if (!localStorage.getItem('isAuthenticated')) {
        window.location.href = '/signin';
        return;
    }
    
    // Initialize problems
    initializeProblems();
    
    // Load user data
    loadUserData();
}

// Profile Features
function initializeProfile() {
    console.log('Initializing profile features...');
    
    // Check authentication
    if (!localStorage.getItem('isAuthenticated')) {
        window.location.href = '/signin';
        return;
    }
    
    // Load profile data
    loadProfileData();
}

// Settings Features
function initializeSettings() {
    console.log('Initializing settings features...');
    
    // Check authentication
    if (!localStorage.getItem('isAuthenticated')) {
        window.location.href = '/signin';
        return;
    }
    
    // Initialize settings controls
    initializeSettingsControls();
}

// Sign In Features
function initializeSignIn() {
    console.log('Initializing sign in features...');
    
    // Handle form submission
    const signInForm = document.querySelector('#signInForm');
    if (signInForm) {
        signInForm.addEventListener('submit', handleSignIn);
    }
}

// Sign Up Features
function initializeSignUp() {
    console.log('Initializing sign up features...');
    
    // Handle form submission
    const signUpForm = document.querySelector('#signUpForm');
    if (signUpForm) {
        signUpForm.addEventListener('submit', handleSignUp);
    }
}

// Landing Page Specific Functions
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    if (counters.length === 0) return;
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(counter, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        counter.textContent = Math.floor(current).toLocaleString();
    }, 20);
}

function initializeCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        const button = card.querySelector('.btn');
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const category = card.getAttribute('data-category');
                if (category) {
                    localStorage.setItem('selectedCategory', category);
                    window.location.href = '/dashboard';
                }
            });
        }
    });
}

function initializeFloatingElements() {
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.5}s`;
    });
}

function initializeContestTimers() {
    const contestCards = document.querySelectorAll('.contest-card.live');
    contestCards.forEach(card => {
        const timeElement = card.querySelector('.contest-info span:first-child');
        if (timeElement && timeElement.textContent.includes('left')) {
            updateContestTimer(timeElement);
        }
    });
}

function updateContestTimer(timeElement) {
    let timeText = timeElement.textContent;
    let timeLeft = timeText.match(/(\d+)h (\d+)m/);
    
    if (timeLeft) {
        let hours = parseInt(timeLeft[1]);
        let minutes = parseInt(timeLeft[2]);
        
        const timer = setInterval(() => {
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
            }
            
            if (hours < 0) {
                clearInterval(timer);
                timeElement.innerHTML = '<i class="fas fa-clock"></i> Contest Ended';
                timeElement.style.color = 'var(--danger)';
            } else {
                timeElement.innerHTML = `<i class="fas fa-clock"></i> ${hours}h ${minutes}m left`;
            }
        }, 60000);
    }
}

// Dashboard Specific Functions
function initializeProblems() {
    const problems = [
        // Arrays & Strings Problems (5 questions)
        {
            id: 1,
            title: "Two Sum",
            category: "arrays",
            difficulty: "easy",
            points: 10,
            description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
            examples: [
                { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
                { input: "nums = [3,2,4], target = 6", output: "[1,2]" }
            ],
            testCases: [
                { input: "[2,7,11,15]", target: 9, output: "[0,1]" },
                { input: "[3,2,4]", target: 6, output: "[1,2]" }
            ]
        },
        // Add more problems here...
    ];
    
    localStorage.setItem('allProblems', JSON.stringify(problems));
}

function loadUserData() {
    // Load user data from localStorage or API
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    
    // Update UI elements
    const userNameElements = document.querySelectorAll('#userName');
    userNameElements.forEach(element => {
        element.textContent = userData.firstName || 'User';
    });
    
    const userPointsElements = document.querySelectorAll('#userPoints');
    userPointsElements.forEach(element => {
        element.textContent = userData.points || '0';
    });
    
    const problemsSolvedElements = document.querySelectorAll('#problemsSolved');
    problemsSolvedElements.forEach(element => {
        element.textContent = userData.problemsSolved || '0';
    });
    
    const streakElements = document.querySelectorAll('#streak');
    streakElements.forEach(element => {
        element.textContent = userData.streak || '0';
    });
}

// Profile Specific Functions
function loadProfileData() {
    // Load profile data from localStorage or API
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    
    // Update profile elements
    const profileNameElements = document.querySelectorAll('#profileName');
    profileNameElements.forEach(element => {
        element.textContent = userData.firstName + ' ' + userData.lastName || 'User Name';
    });
    
    const profileEmailElements = document.querySelectorAll('#profileEmail');
    profileEmailElements.forEach(element => {
        element.textContent = userData.email || 'user@email.com';
    });
}

// Settings Specific Functions
function initializeSettingsControls() {
    // Theme options
    const themeOptions = document.querySelectorAll('.theme-option');
    themeOptions.forEach(option => {
        option.addEventListener('click', function() {
            const theme = this.dataset.theme;
            document.body.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            applyTheme(theme);
            
            // Update active state
            themeOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Color options
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            const color = this.dataset.color;
            document.documentElement.style.setProperty('--primary', getColorValue(color));
            localStorage.setItem('accentColor', color);
            
            // Update active state
            colorOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Font size controls
    const fontSizeBtns = document.querySelectorAll('.font-size-btn');
    fontSizeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.dataset.action;
            const display = document.querySelector('.font-size-display');
            let currentSize = parseInt(display.textContent) || 16;
            
            if (action === 'increase') {
                currentSize = Math.min(currentSize + 2, 24);
            } else if (action === 'decrease') {
                currentSize = Math.max(currentSize - 2, 12);
            }
            
            document.documentElement.style.fontSize = currentSize + 'px';
            if (display) {
                display.textContent = currentSize + 'px';
            }
            localStorage.setItem('fontSize', currentSize);
        });
    });
    
    // Toggle controls
    const toggles = document.querySelectorAll('.toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
            const setting = this.dataset.setting;
            const value = this.classList.contains('active');
            localStorage.setItem(setting, value);
        });
    });
    
    // Range sliders
    const rangeSliders = document.querySelectorAll('.range-slider');
    rangeSliders.forEach(slider => {
        const valueDisplay = slider.parentElement.querySelector('.range-value');
        slider.addEventListener('input', function() {
            if (valueDisplay) {
                valueDisplay.textContent = this.value;
            }
            localStorage.setItem(this.dataset.setting, this.value);
        });
    });
    
    // Select controls
    const selects = document.querySelectorAll('.setting-select');
    selects.forEach(select => {
        select.addEventListener('change', function() {
            localStorage.setItem(this.dataset.setting, this.value);
        });
    });
    
    // Category checkboxes
    const categoryCheckboxes = document.querySelectorAll('.category-checkbox input');
    categoryCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const category = this.value;
            const checked = this.checked;
            let preferredCategories = JSON.parse(localStorage.getItem('preferredCategories') || '[]');
            
            if (checked && !preferredCategories.includes(category)) {
                preferredCategories.push(category);
            } else if (!checked && preferredCategories.includes(category)) {
                preferredCategories = preferredCategories.filter(c => c !== category);
            }
            
            localStorage.setItem('preferredCategories', JSON.stringify(preferredCategories));
        });
    });
    
    // Tab size controls
    const tabSizeBtns = document.querySelectorAll('.tab-size-btn');
    tabSizeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const size = this.dataset.size;
            document.documentElement.style.setProperty('--tab-size', size + 'px');
            localStorage.setItem('tabSize', size);
            
            // Update active state
            tabSizeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Save settings button
    const saveBtn = document.querySelector('.save-settings');
    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            saveSettings();
        });
    }
    
    // Reset to defaults button
    const resetBtn = document.querySelector('.reset-defaults');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            resetToDefaults();
        });
    }
}

function getColorValue(color) {
    const colors = {
        'primary': '#00ff88',
        'secondary': '#667eea',
        'accent': '#ff6b6b'
    };
    return colors[color] || '#00ff88';
}

function saveSettings() {
    // Collect all settings and save to backend
    const settings = {
        appearance: {
            theme: localStorage.getItem('theme') || 'dark',
            accentColor: localStorage.getItem('accentColor') || 'primary',
            fontSize: localStorage.getItem('fontSize') || 16
        },
        notifications: {
            email: {
                newProblems: localStorage.getItem('emailNewProblems') === 'true',
                contestReminders: localStorage.getItem('emailContestReminders') === 'true',
                achievements: localStorage.getItem('emailAchievements') === 'true'
            },
            push: {
                dailyReminders: localStorage.getItem('pushDailyReminders') === 'true',
                streakMaintenance: localStorage.getItem('pushStreakMaintenance') === 'true'
            }
        },
        problemPreferences: {
            defaultDifficulty: localStorage.getItem('defaultDifficulty') || 'all',
            preferredCategories: JSON.parse(localStorage.getItem('preferredCategories') || '[]'),
            problemsPerSession: parseInt(localStorage.getItem('problemsPerSession') || 5)
        },
        codeEditor: {
            defaultLanguage: localStorage.getItem('defaultLanguage') || 'javascript',
            features: {
                autoCompletion: localStorage.getItem('autoCompletion') === 'true',
                syntaxHighlighting: localStorage.getItem('syntaxHighlighting') === 'true',
                lineNumbers: localStorage.getItem('lineNumbers') === 'true'
            },
            tabSize: parseInt(localStorage.getItem('tabSize') || 4)
        },
        privacy: {
            profileVisibility: localStorage.getItem('profileVisibility') || 'public',
            activitySharing: localStorage.getItem('activitySharing') === 'true',
            progressUpdates: localStorage.getItem('progressUpdates') === 'true',
            dataUsage: localStorage.getItem('dataUsage') === 'true'
        },
        account: {
            language: localStorage.getItem('language') || 'english',
            timezone: localStorage.getItem('timezone') || 'UTC'
        }
    };
    
    // Save to backend
    fetch('/api/settings', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(settings)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showNotification('Settings saved successfully!', 'success');
        } else {
            showNotification('Failed to save settings', 'error');
        }
    })
    .catch(error => {
        showNotification('Error saving settings', 'error');
    });
}

function resetToDefaults() {
    if (confirm('Are you sure you want to reset all settings to defaults?')) {
        // Reset theme
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        applyTheme('dark');
        
        // Reset other settings
        localStorage.removeItem('accentColor');
        localStorage.removeItem('fontSize');
        localStorage.removeItem('emailNewProblems');
        localStorage.removeItem('emailContestReminders');
        localStorage.removeItem('emailAchievements');
        localStorage.removeItem('pushDailyReminders');
        localStorage.removeItem('pushStreakMaintenance');
        localStorage.removeItem('defaultDifficulty');
        localStorage.removeItem('preferredCategories');
        localStorage.removeItem('problemsPerSession');
        localStorage.removeItem('defaultLanguage');
        localStorage.removeItem('autoCompletion');
        localStorage.removeItem('syntaxHighlighting');
        localStorage.removeItem('lineNumbers');
        localStorage.removeItem('tabSize');
        localStorage.removeItem('profileVisibility');
        localStorage.removeItem('activitySharing');
        localStorage.removeItem('progressUpdates');
        localStorage.removeItem('dataUsage');
        localStorage.removeItem('language');
        localStorage.removeItem('timezone');
        
        // Reload page to apply defaults
        window.location.reload();
    }
}

// Authentication Functions
function handleSignIn(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // For demo purposes, use hardcoded credentials
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
            rank: '#42'
        };
        
        localStorage.setItem('userData', JSON.stringify(userData));
        localStorage.setItem('isAuthenticated', 'true');
        
        window.location.href = '/dashboard';
    } else {
        showNotification('Invalid credentials. Use demo@example.com / demo123', 'error');
    }
}

function handleSignUp(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // For demo purposes, simulate successful registration
    const userData = {
        id: Date.now(),
        firstName,
        lastName,
        email,
        username,
        experienceLevel: 'Beginner',
        points: 0,
        problemsSolved: 0,
        streak: 0,
        rank: '#--'
    };
    
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('isAuthenticated', 'true');
    
    showNotification('Registration successful! Redirecting to dashboard...', 'success');
    setTimeout(() => {
        window.location.href = '/dashboard';
    }, 2000);
}

// Utility Functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.background = '#00ff88';
            break;
        case 'error':
            notification.style.background = '#ff5252';
            break;
        default:
            notification.style.background = '#29b6f6';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Edit avatar functionality
function editAvatar() {
    showNotification('Avatar upload feature coming soon!', 'info');
}

// Global functions for onclick attributes
window.logout = logout;
window.editAvatar = editAvatar;
window.saveSettings = saveSettings;
window.resetToDefaults = resetToDefaults;
window.exportData = function() {
    const data = {
        userData: JSON.parse(localStorage.getItem('userData') || '{}'),
        settings: JSON.parse(localStorage.getItem('userSettings') || '{}'),
        progress: JSON.parse(localStorage.getItem('progressData') || '{}'),
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `codemaster-pro-data-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    showNotification('Data exported successfully!', 'success');
};

window.deleteAccount = function() {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
        localStorage.clear();
        showNotification('Account deleted. Redirecting...', 'success');
        setTimeout(() => {
            window.location.href = '/';
        }, 2000);
    }
};
