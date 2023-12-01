## Install Viribuz - Notification from the Slack App Directory

To install `Notification`, you can use the following link to install it directly from the Slack App Directory:

[Install Viribuz - Notification](https://slack.com/oauth/v2/authorize?client_id=1432875016049.6271213608244&scope=incoming-webhook&user_scope=chat:write)

Follow the on-screen instructions to complete the installation process. If you encounter any issues or have questions, please [contact our support team](mailto:prince@viribuztech.com).

Using Viribuz - Notification API it will allow you to send message directly to our `#failure-alerts` channel.

<br>

## Using Bash Terminal to get the TEAM_ID: 
```
curl -X POST -H "Authorization: Bearer YOUR_SLACK_ACCESS_TOKEN" https://slack.com/api/auth.test
```

<br>

## HTTP Method and route: POST /send-message

https://viribuz-slack-notification.onrender.com/send-message


**Request Body:**
```
{
    "token": "Our Viribuz OAuth Token (please contact support to get details)",
    "channel": "Channel inside our Workspace (please contact support to get details)",
    "text": "Insert here your dynamic message to our channel."
}
```