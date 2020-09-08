const express = require('express'); //common js syntax for imports
const connectDB = require('./config/db');
const app = express();

//connect Database
connectDB();

//Init middleware to access body data
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.json({ msg: 'Welcome ZEEZEE API' }));

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/workouts', require('./routes/workouts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
