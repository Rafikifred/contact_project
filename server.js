require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const contactsRouter = require('./routes/contacts'); // require
const setupSwagger = require('./swagger'); // import swagger setup


const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors()); // Allow all origins




// Root route (optional)
app.get('/', (req, res) => res.send('Contacts API running!'));

// Use contacts routes
app.use('/contacts', contactsRouter);
// Setup Swagger documentation
setupSwagger(app);


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
