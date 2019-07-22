
const express = require('express');

const connectDB = require('./config/db');

const app = express();

// Connect to database

connectDB();

app.use(express.json({ extended: false }));

// Define Routes

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

// https://youtu.be/W-b9KGwVECs
// https://github.com/bradtraversy/microposts_fullstack_vue/blob/master/server/index.js

// Handle production

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(__dirname + '/'));
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

