# Slack's Notification


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

{
	"token": "process.env.SECRET_TOKEN",
	"channel":"your_channel",
	"text":"${text}"
}