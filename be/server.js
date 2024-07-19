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
const corsOptions = {
  origin: [
    process.env.FRONTEND_URL, // URL del frontend distribuito su Vercel
    'http://localhost:3000' // URL locale per sviluppo
  ],
  credentials: true, // Permetti invio di credenziali (cookie, autorizzazioni, etc.)
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Middleware per gestire le richieste preflight
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

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
