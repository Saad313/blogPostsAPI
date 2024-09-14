// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
// mongodb://localhost:27017/myblogapp
mongoose.connect('mongodb+srv://msaadrehman313:Pakyman123@cluster0.1gyhz.mongodb.net/myblogapp?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define Routes
const blogRoutes = require('./server/routes');
app.use('/api/blogs', blogRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



