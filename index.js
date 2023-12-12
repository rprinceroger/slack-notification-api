const express = require('express');
const bodyParser = require('body-parser');
const { WebClient } = require('@slack/web-api');

const app = express();
const port = 3000;

require('dotenv').config();

app.use(bodyParser.json());

// Initialize Slack Web API client
const slackClient = new WebClient(process.env.SLACK_BOT_TOKEN);

// Your API endpoint for sending messages using POST
app.post('/send-message', async (req, res) => {
  try {
    const { token, channel, text } = req.body;

    if (token !== process.env.SECRET_TOKEN) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Check if the channel is undefined or empty
    if (!channel || channel.trim() === '') {
      return res.status(400).json({ error: 'Bad Request', details: 'Channel is required' });
    }

    console.log(`Sending message to channel ${channel}: ${text}`);

    // Send a message to the specified Slack channel
    const result = await slackClient.chat.postMessage({
      channel: channel,
      text: text,
    });

    console.log('Message sent to Slack:', result);

    res.json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error handling /send-message:', error);

        // Send a more informative error response
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

// Your OAuth installation endpoint for handling GET requests
app.get('/install', (req, res) => {
  try {
    // Redirect to Slack's OAuth authorization URL
    const redirectUrl = `https://slack.com/oauth/v2/authorize?client_id=${process.env.SLACK_CLIENT_ID}&scope=${process.env.SLACK_SCOPES}&user_scope=${process.env.SLACK_USER_SCOPES}&redirect_uri=${process.env.SLACK_REDIRECT_URI}`;
    res.redirect(302, redirectUrl);
  } catch (error) {
    console.error('Error handling /install:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
