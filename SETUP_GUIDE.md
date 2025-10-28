# 🚀 Professional Portfolio Setup Guide

This guide will walk you through setting up your React + Node.js + MongoDB portfolio with professional styling.

## 📋 Project Overview

This portfolio is built with:
- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Styling**: Professional dark/light theme with Tailwind CSS
- **Features**: Dark mode toggle, smooth animations, responsive design

---

## 🛠️ Step 1: Frontend Setup (React + Tailwind CSS)

### What we've created:
```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Navigation with dark mode toggle
│   │   ├── Hero.tsx         # Hero section with animations
│   │   ├── About.tsx        # About section
│   │   ├── Skills.tsx       # Skills showcase
│   │   ├── Projects.tsx     # Projects gallery
│   │   ├── Gallery.tsx      # Photo gallery
│   │   ├── Contact.tsx      # Contact form
│   │   └── Footer.tsx       # Footer
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Tailwind CSS + animations
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── package.json
```

### Installation Steps:

1. **Navigate to frontend directory:**
   ```powershell
   cd frontend
   ```

2. **Install dependencies (already done):**
   ```powershell
   npm install
   npm install -D tailwindcss postcss autoprefixer
   ```

3. **Run the development server:**
   ```powershell
   npm run dev
   ```

4. **Open your browser:**
   - Default URL: `http://localhost:5173`
   - The app will automatically reload when you make changes

### Features:
- ✅ Professional dark/light theme toggle
- ✅ Smooth animations and transitions
- ✅ Fully responsive design
- ✅ Modern gradient backgrounds
- ✅ Hover effects and interactive elements
- ✅ Custom Tailwind configuration

---

## 🔌 Step 2: Backend Setup (Node.js + Express)

### Installation:

1. **Navigate to backend directory:**
   ```powershell
   cd ..
   mkdir backend
   cd backend
   ```

2. **Initialize Node.js project:**
   ```powershell
   npm init -y
   ```

3. **Install Express and MongoDB:**
   ```powershell
   npm install express mongoose cors dotenv
   npm install -D @types/node @types/express @types/cors nodemon
   ```

### Create Backend Structure:

```
backend/
├── src/
│   ├── controllers/    # Route controllers
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   ├── middleware/     # Custom middleware
│   ├── config/         # Configuration files
│   └── server.js       # Entry point
├── .env                # Environment variables
└── package.json
```

### Basic Express Server (server.js):

```javascript
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

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Error:', err));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'API is running!' });
});

// Contact Form Route
app.post('/api/contact', async (req, res) => {
  try {
    // Store contact message in database
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending message', error });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
```

### Update package.json:
```json
{
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js"
  }
}
```

---

## 🗄️ Step 3: MongoDB Setup

### Option 1: Local MongoDB

1. **Download MongoDB Community Server:**
   - Visit: https://www.mongodb.com/try/download/community
   - Install and start the service

2. **Connection String:**
   ```env
   MONGODB_URI=mongodb://localhost:27017/portfolio
   ```

### Option 2: MongoDB Atlas (Cloud - Recommended)

1. **Create free account:**
   - Visit: https://www.mongodb.com/cloud/atlas
   - Create a free cluster (M0 tier)

2. **Get connection string:**
   - Click "Connect" → "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password

3. **Add to .env file:**
   ```env
   MONGODB_URI=your_atlas_connection_string
   ```

---

## 🎨 Step 4: Professional Theme Features

### Color Scheme:
- **Primary**: Blue tones (#0ea5e9 - #0369a1)
- **Accent**: Purple tones (#a855f7)
- **Dark Mode**: Professional dark background with light text
- **Light Mode**: Clean white background

### Animations:
- Fade-in effects
- Slide-up animations
- Blob animations (background)
- Float effect (profile photo)
- Hover transformations

### Components Explained:

**Navbar:**
- Sticky navigation
- Smooth scrolling
- Dark mode toggle
- Mobile-responsive menu

**Hero Section:**
- Animated gradient background
- Floating profile photo
- Gradient text effects
- Call-to-action buttons

**Skills Section:**
- Categorized skills display
- Hover effects
- Color-coded categories

**Projects:**
- Card layout with hover effects
- Technology tags
- Click to view functionality

**Contact Form:**
- Input validation
- Email, phone, location display
- Social media links

---

## 🚀 Running the Complete Application

### Terminal 1 (Frontend):
```powershell
cd frontend
npm run dev
```

### Terminal 2 (Backend):
```powershell
cd backend
npm run dev
```

### Access:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

---

## 📝 Next Steps

1. **Add Your Photos:**
   - Place images in `frontend/public/`
   - Update image paths in components

2. **Connect to API:**
   - Update contact form to use backend API
   - Add more API endpoints as needed

3. **Deploy:**
   - Frontend: Vercel, Netlify, or GitHub Pages
   - Backend: Heroku, Railway, or Render
   - MongoDB: Already on Atlas if using cloud

---

## 🎯 Key Features Implemented

✅ Professional dark/light theme  
✅ Smooth animations and transitions  
✅ Fully responsive design  
✅ Modern UI/UX principles  
✅ TypeScript support  
✅ Tailwind CSS styling  
✅ Modular component structure  
✅ MongoDB database ready  
✅ Express API setup  

---

## 💡 Tips

- Use **Dark Mode** for a modern, professional look
- All animations are smooth and performant
- The theme is fully customizable in `tailwind.config.js`
- Components are reusable and maintainable
- Follow the component structure for adding new features

---

**Created by Beryl Nyauma**  
For more information, contact: berylnyauma@gmail.com

