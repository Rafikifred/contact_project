require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const contactsRouter = require('./routes/contacts'); // require

const app = express();
app.use(express.json());

// Root route (optional)
app.get('/', (req, res) => res.send('Contacts API running!'));

// Use contacts routes
app.use('/contacts', contactsRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
