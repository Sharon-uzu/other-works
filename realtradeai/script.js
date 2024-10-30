// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser'); // Add this line for parsing JSON bodies
// const app = express();

// app.use(cors());
// app.use(bodyParser.json()); // Add this line for parsing JSON bodies

// // Example GET endpoint
// app.get('/api/data', (req, res) => {
//   // Handle GET request
//   res.json({ message: 'GET request received' });
// });

// // Example POST endpoint
// app.post('/api/data', (req, res) => {
//   // Handle POST request
//   const requestData = req.body; // Assuming JSON data in the request body
//   console.log('POST request data:', requestData);
//   res.json({ message: 'POST request received' });
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });







const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const users = []; // In-memory storage for simplicity (use a database in production)

// Sign-up endpoint
app.post('/api/signup', (req, res) => {
  const { fullname, username, email, password, sq, sa } = req.body;

  // Simple validation (you should add more robust validation in a real-world scenario)
  if (!fullname || !username || !email  || !password  || !sq || !sa) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Check if the username is already taken
  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ error: 'Username is already taken.' });
  }

  // Check if the email is already taken
  if (users.some((user) => user.email === email)) {
    return res.status(400).json({ error: 'Email  already exist.' });
  }

  // Store the user in memory (replace this with a database in production)
  const newUser = { username, password };
  users.push(newUser);

  res.json({ message: 'User signed up successfully.' });
});










// Sign-in endpoint
// app.post('/api/signin', (req, res) => {
//   const { username, password } = req.body;

//   // Simple validation
//   if (!username || !password) {
//     return res.status(400).json({ error: 'Username and password are required.' });
//   }

//   // Check if the user exists
//   const user = users.find((user) => user.username === username);

//   if (!user || user.password !== password) {
//     return res.status(401).json({ error: 'Invalid username or password.' });
//   }

//   res.json({ message: 'User signed in successfully.' });
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
