const express = require('express');
const dbConnect = require('./database/index');
const { PORT } = require('./config/index');
const router = require('./routes/index');
const errorHandler = require('./middlewears/errorHandler');
const cookieParser = require('cookie-parser');
const cors = require('cors'); // Add cors

const app = express();

// CORS setup
app.use(cors({
  origin: 'http://localhost:3000', // Your React frontend URL
  credentials: true, // Allow cookies to be sent across domains
}));

app.use(cookieParser());
app.use(express.json());
app.use(router);
dbConnect();
app.use(errorHandler);

app.listen(PORT, () => console.log(`Backend started at PORT: ${PORT}`));
