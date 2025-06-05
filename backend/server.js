const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Simple GET route for root to verify server is running
app.get('/', (req, res) => {
  const messagesFile = path.join(__dirname, 'messages.json');
  fs.readFile(messagesFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading messages.json:', err);
      return res.status(500).send('Error reading messages');
    }
    try {
      const messages = JSON.parse(data);
      let html = '<h1>Saved Messages</h1><ul>';
      messages.forEach((msg) => {
        html += `<li><strong>${msg.date}:</strong> ${msg.message}</li>`;
      });
      html += '</ul>';
      res.send(html);
    } catch (parseErr) {
      console.error('Error parsing messages.json:', parseErr);
      res.status(500).send('Error parsing messages');
    }
  });
});

// GET endpoint to retrieve all saved messages
app.get('/api/messages', (req, res) => {
  const messagesFile = path.join(__dirname, 'messages.json');
  fs.readFile(messagesFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading messages.json:', err);
      return res.status(500).json({ error: 'Failed to read messages' });
    }
    try {
      const messages = JSON.parse(data);
      res.json({ success: true, messages });
    } catch (parseErr) {
      console.error('Error parsing messages.json:', parseErr);
      res.status(500).json({ error: 'Failed to parse messages' });
    }
  });
});

// POST endpoint to receive contact messages
app.post('/api/contact', (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const messagesFile = path.join(__dirname, 'messages.json');

  // Read existing messages
  fs.readFile(messagesFile, 'utf8', (err, data) => {
    let messages = [];
    if (!err && data) {
      try {
        messages = JSON.parse(data);
      } catch (parseErr) {
        console.error('Error parsing messages.json:', parseErr);
      }
    }

    // Add new message with timestamp
    messages.push({ message, date: new Date().toISOString() });

    // Save updated messages
    fs.writeFile(messagesFile, JSON.stringify(messages, null, 2), (writeErr) => {
      if (writeErr) {
        console.error('Error writing messages.json:', writeErr);
        return res.status(500).json({ error: 'Failed to save message' });
      }
      res.json({ success: true, message: 'Message saved successfully' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
