const express = require('express');
const path = require('path');
const app = express();

// Serve static files (CSS)
app.use(express.static('public'));

// Routes for HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'home.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'contact.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
