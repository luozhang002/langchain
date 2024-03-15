/***
 *  curl https://api.baichuan-ai.com/v1/files \
  -H "Authorization: Bearer $API_KEY"
 */
const API_KEY = "";
const https = require('https');    
const options = {  
  hostname: 'api.baichuan-ai.com',  
  port: 443,  
  path: '/v1/files',  
  method: 'GET',  
  headers: {  
    'Authorization': `Bearer ${API_KEY}`  
  }  
};
  
const req = https.request(options, (res) => {  
  let data = '';  
  // 监听数据块  
  res.on('data', (chunk) => {  
    data += chunk;  
  });  
  
  // 监听请求结束  
  res.on('end', () => {  
    try {  
      // 解析JSON数据（如果API返回的是JSON）  
      const parsedData = JSON.parse(data);  
      console.log(parsedData);  
    } catch (e) {  
      // 如果不是JSON，直接打印字符串  
      console.log(data);  
    }  
  });  
});  
  
// 处理请求错误  
req.on('error', (error) => {  
  console.error(error);  
});  
  
// 发送请求  
req.end();