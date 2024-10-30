// const express = require('express');
// const path = require('path');
// const app = express();
// const port = 3000;

// app.get('/api/data', (req, res) => {
//     const data = { message: 'Hello from the API!' };
//     res.json(data);
// });

// // Serve HTML and JS files
// app.use(express.static(path.join(__dirname, 'public')));

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });


var express = require('express');
var app = express();

app.listen(3000);

app.get('/home', (req, res) => {
    res.sendFile('indexcca3.html', {root:__dirname});
})