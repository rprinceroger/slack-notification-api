## Install Viribuz - Notification from the Slack App Directory

To install `Viribuz - Notification`, you can use the following link to install it directly from the Slack App Directory:

[Install Viribuz - Notification](https://slack.com/apps/{6276811745539.6274103266021}?channel={C0687AZT28L}&team={T0684PVMXFV}&install_redirect={https://slack-notification-redirect-uri-api.onrender.com})

Follow the on-screen instructions to complete the installation process. If you encounter any issues or have questions, please [contact our support team](mailto:prince@viribuztech.com).

Using Viribuz - Notification API it will allow you to send message directly to our `#failure-alerts` channel.

<br>

## Using Bash Terminal to get the TEAM_ID: 
```
curl -X POST -H "Authorization: Bearer YOUR_SLACK_ACCESS_TOKEN" https://slack.com/api/auth.test
```

<br>

## HTTP Method and route: GET /slack/oauth/callback

https://viribuz-tech-slack-notification-redirect.onrender.com/slack/oauth/callback

<br>

## HTTP Method and route: POST /send-message

https://viribuz-tech-slack-notification.onrender.com/send-message


**Request Body:**
```
{
    "token": "Our Viribuz OAuth Token (please contact support to get details)",
    "channel": "Channel inside our Workspace (please contact support to get details)",
    "text": "Insert here your dynamic message to our channel."
}
```