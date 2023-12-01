const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

require('dotenv').config();

app.use(bodyParser.json());

// Your API endpoint for sending messages using POST
app.post('/send-message', (req, res) => {
  const { token, channel, text } = req.body;

  if (token !== process.env.SECRET_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  console.log(`Sending message to channel ${process.env.SLACK_CHANNEL}: ${text}`);

  res.json({ message: 'Message sent successfully' });
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
