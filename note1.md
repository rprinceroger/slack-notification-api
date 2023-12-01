# Slack's Notification


User OAuth Token: 
```
xoxp-1432875016049-5975527742320-6255001939271-40046ec332b5001a43ef5d475a3efe72
```


App ID: 
```
A067Z69HW76
```

Date of App Creation: 
```
Nov 29, 2023
```

Client ID: 
```
1432875016049.6271213608244
```

Client Secret: 
```
d8925ff6b103cace0442b6967c3abce6
```

Signing Secret: 
```
fcde40c957c65dc1411a1a7072878e83
```

Verification Token: 
```
28xdbyZJVPIdIUEfVTzvbanP
```


Slack Channel ID: 
```
D05TTS6KT2A - NOTED THIS IS MY PERSONAL CHANNEL ID.

This is for the Alert Channel: (C061JUJ5PCJ)



C0687AZT28L - TEST
```


Token: 
```
xapp-1-A067Z69HW76-6291829642480-a97d262fbf80ab5ac141ff8383b9c7b1631159926b5460304db0eaf0afeacf84
```


Scope
app_configurations:write
Configure your application connections:write
Route your app’s interactions and event payloads over WebSockets authorizations:read

View information about your app’s authorizations on installed teams


Sample Script:
```

curl -X POST -H "Content-type: application/json" -H "Authorization: Bearer YOUR_TOKEN" \
-d '{"channel":"YOUR_CHANNEL_ID","text":"Hello, Slack!"}' \
https://slack.com/api/chat.postMessage


```

```

curl -X POST -H "Content-type: application/json" -H "Authorization: Bearer xapp-1-A067Z69HW76-6291829642480-a97d262fbf80ab5ac141ff8383b9c7b1631159926b5460304db0eaf0afeacf84" \
-d '{"channel":"D05TTS6KT2A","text":"Hello, Slack!"}' \
https://slack.com/api/chat.postMessage



```

Sample - Reqeust Body: 
```
{
	"token": "process.env.SECRET_TOKEN",
	"channel":"your_channel",
	"text":"${text}"
}
```


POST 
https://viribuz-slack-notification.onrender.com/send-message

```

{
    "token": "xoxp-1432875016049-5975527742320-6255001939271-40046ec332b5001a43ef5d475a3efe72",
    "channel": "D05TTS6KT2A",
    "text": "Insert here your dynamic message - Test 3."
}

```

Blocker: I don't have access with App Management Settings of Slack.
https://viribuz.slack.com/apps/manage/custom-integrations



https://viribuz-slack-notification.onrender.com/send-message









This is Slack Workflow:
https://slack.com/shortcuts/Ft06848PNUJW/3187b19b7735c9766568222ef7e15141