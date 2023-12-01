const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); // Import Axios for making HTTP requests

const app = express();
const port = 3000;

require('dotenv').config();

app.use(bodyParser.json());

// Your API endpoint for sending messages using POST
app.post('/send-message', async (req, res) => {
  try {
    const { token, channel, text } = req.body;

    if (token !== process.env.SECRET_TOKEN) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    console.log(`Sending message to channel ${process.env.SLACK_CHANNEL}: ${text}`);

    // Make a request to Slack's chat.postMessage API
    const response = await axios.post(
      'https://slack.com/api/chat.postMessage',
      {
        channel: process.env.SLACK_CHANNEL,
        text: text,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.SLACK_BOT_TOKEN}`, // Use your Slack Bot token here
        },
      }
    );

    if (!response.data.ok) {
      // Handle Slack API error
      console.error('Slack API Error:', response.data.error);
      return res.status(500).json({ error: 'Failed to send message to Slack' });
    }

    res.json({ message: 'Message sent successfully' });
  } catch (error) {
    // Handle unexpected errors
    console.error('Unexpected Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Your OAuth installation endpoint for handling GET requests
app.get('/install', (req, res) => {
  // Redirect to Slack's OAuth authorization URL
  const redirectUrl = `https://slack.com/oauth/v2/authorize?client_id=${process.env.SLACK_CLIENT_ID}&scope=${process.env.SLACK_SCOPES}&user_scope=${process.env.SLACK_USER_SCOPES}&redirect_uri=${process.env.SLACK_REDIRECT_URI}`;
  res.redirect(302, redirectUrl);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
