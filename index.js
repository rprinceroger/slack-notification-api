const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

require('dotenv').config();

app.use(bodyParser.json());

// Your API endpoint for sending messages using POST
app.post('/send-message', (req, res) => {
  try {
    const { token, channel, text } = req.body;

    if (token !== process.env.SECRET_TOKEN) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    console.log(`Sending message to channel ${process.env.SLACK_CHANNEL}: ${text}`);

    res.json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error handling /send-message:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
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
