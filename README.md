# DSA Platform Backend

A comprehensive backend for DSA (Data Structures and Algorithms) learning platform built with Node.js, Express, and MongoDB.

## 🚀 Features

- **User Authentication**: JWT-based authentication with bcrypt password hashing
- **DSA Problem Management**: Organize and manage DSA problems by topics
- **User Progress Tracking**: Track user progress and submissions
- **RESTful API**: Clean and well-structured API endpoints
- **CORS Enabled**: Cross-origin resource sharing support
- **MongoDB Ready**: Database integration prepared
- **Modern UI**: Beautiful and responsive web interface

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (ready for integration)
- **Authentication**: JWT, bcrypt
- **Frontend**: EJS templates with modern CSS
- **Development**: Nodemon for hot reloading

## 📁 Project Structure

```
dsa-platform-backend/
├── bin/
│   └── www                 # Server entry point
├── public/
│   ├── images/            # Static images
│   ├── javascripts/       # Client-side JavaScript
│   └── stylesheets/       # CSS styles
├── routes/
│   ├── index.js           # Main routes
│   └── users.js           # User management routes
├── views/
│   ├── index.ejs          # Home page
│   └── error.ejs          # Error page
├── app.js                 # Express app configuration
└── package.json           # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (optional, for full functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dsa-platform-backend
   ```

2. **Install dependencies**
   ```bash
   npm run install-deps
   ```

3. **Set up environment variables**
   ```bash
   # Copy .env.example to .env and update values
   cp dsa-platform-backend/.env.example dsa-platform-backend/.env
   ```

4. **Start the application**
   ```bash
   # Development mode with hot reload
   npm run dev
   
   # Production mode
   npm start
   ```

5. **Access the application**
   - Web Interface: http://localhost:3000
   - API Endpoints: http://localhost:3000/api
   - Health Check: http://localhost:3000/health

## 📡 API Endpoints

### Core Endpoints
- `GET /` - Home page
- `GET /health` - Health check
- `GET /api` - API information
- `GET /api/topics` - DSA topics list

### User Management
- `GET /users` - User endpoints info
- `POST /users/register` - User registration (TODO)
- `POST /users/login` - User login (TODO)
- `GET /users/profile` - User profile (TODO)

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the `dsa-platform-backend` directory:

```env
NODE_ENV=development
PORT=3000
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:3001
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d
MONGODB_URI=mongodb://localhost:27017/dsa-platform
LOG_LEVEL=debug
```

## 🚧 TODO

- [ ] Implement user registration with bcrypt
- [ ] Implement user login with JWT
- [ ] Add MongoDB connection and models
- [ ] Create DSA problem CRUD operations
- [ ] Implement user progress tracking
- [ ] Add problem submission system
- [ ] Create admin panel
- [ ] Add testing framework

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🆘 Support

For support and questions, please open an issue in the repository.

---

**Happy Coding! 🎉**
