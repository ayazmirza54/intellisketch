require('dotenv').config();

module.exports = {
    SERVER_URL: 'localhost',
    PORT: process.env.PORT || 8900,
    ENV: process.env.NODE_ENV || 'development',
    GEMINI_API_KEY: process.env.GEMINI_API_KEY
};