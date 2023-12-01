const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Choose any available port

require('dotenv').config();

app.use(bodyParser.json());

// Your API endpoint for sending messages
app.post('/send-message', (req, res) => {
  // Extract data from the request body
  const { token, channel, text } = req.body;

  // Check if the provided token is valid (this is just a basic example)
  if (token !== process.env.SECRET_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Perform the desired action (e.g., send message to Slack)
  // In a real application, you would use a Slack SDK or API library here
  console.log(`Sending message to channel ${process.env.SLACK_CHANNEL}: ${text}`);

  // Respond to the client
  res.json({ message: 'Message sent successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
