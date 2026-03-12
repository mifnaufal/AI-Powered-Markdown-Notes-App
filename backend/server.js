require('dotenv').config();
const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const aiRoutes = require('./routes/aiRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use('/api/ai', aiRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'API Running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use(errorHandler);