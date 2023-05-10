const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const connection = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '321password',
  database: 'tracker_db',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected as id ' + connection.threadId + '\n');
  start();
});

const start = () => {
  // Your inquirer prompt and switch cases here
};

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

