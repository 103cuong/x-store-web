import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

// Port.
const port = process.env.PORT || 8001;

// Initialize app.
const app = express();

// Body parser.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable cors.
app.use(cors());

// Routes.
app.get('/', (req, res) => res.send('<p>👋 Xin chào</p>'));

// Start server.
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
