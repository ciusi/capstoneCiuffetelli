const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./database');
const dotenv = require('dotenv');
const auth = require('./middleware/auth'); 

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Configura CORS per permettere richieste dal frontend
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:3000'
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    return res.status(200).json({});
  }
  next();
});

app.use(bodyParser.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/core-vitals', require('./routes/coreVitalsAudit'));
app.use('/seo-in', require('./routes/seoInAudit'));
app.use('/seo-off', require ('./routes/seoOffAudit'));
app.use('/api/audit', require('./routes/audit'));
app.use('/api/blog', require('./routes/blog')); 

// Rotta protetta 
app.get('/api/protected', auth, (req, res) => {
  res.send('This is a protected route');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
