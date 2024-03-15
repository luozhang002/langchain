/**
 *  curl -X POST https://api.baichuan-ai.com/v1/chat/completions\
     -H 'Content-Type: application/json'\
     -H 'Authorization: Bearer ${api_key}'\
     -d '{
          "model": "Baichuan2-Turbo",
          "messages": [
            { "role": "user", "content": "我日薪8块钱，请问在闰年的二月，我月薪多少" }
          ],
          "temperature": 0.3,
          "stream": false
        }'              
 */

const api_key = process.env.API_KEY;
const https = require('https');

const options = {
  hostname: 'api.baichuan-ai.com',
  port: 443,
  path: '/v1/chat/completions',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${api_key}`,
  },
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(JSON.parse(data));
  });
});

req.write(JSON.stringify({
  model: 'Baichuan2-Turbo',
  messages: [
    { role: 'user', content: '我日薪8块钱，请问在闰年的二月，我月薪多少' },
  ],
  temperature: 0.3,
  stream: false,
}));

req.end();