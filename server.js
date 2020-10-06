const express = require('express'); //common js syntax for imports
const connectDB = require('./config/db');
const path = require('path');

const app = express();

//connect Database
connectDB();

//Init middleware to access body data
app.use(express.json({ extended: false }));

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use(
  '/api/workouts',
  require('./routes/workouts'),
  require('./routes/exercises')
);

//serve static assets in prod
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
