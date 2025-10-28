const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection (Optional - won't crash app if not connected)
const connectDB = async () => {
  if (process.env.MONGODB_URI && process.env.MONGODB_URI !== 'mongodb://localhost:27017/portfolio') {
    try {
      const conn = await mongoose.connect(process.env.MONGODB_URI);
      console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.warn('⚠️  MongoDB not connected (will work without database):', error.message);
    }
  } else {
    console.log('ℹ️  MongoDB not configured - running in API-only mode');
  }
};

connectDB();

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'success',
    message: 'API is running!',
    timestamp: new Date().toISOString()
  });
});

// Contact form submission route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        message: 'Please fill in all required fields' 
      });
    }

    // Here you would save to database
    // For now, just return success
    console.log('Contact form submission:', { name, email, subject, message });
    
    res.status(201).json({ 
      status: 'success',
      message: 'Message sent successfully!' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      status: 'error',
      message: 'Error sending message', 
      error: error.message 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 API endpoint: http://localhost:${PORT}/api`);
});

