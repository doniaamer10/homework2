const express = require('express');
const app = express();
const port = 4000;

app.get('/info', (req, res) => {
  const deviceInfo = {
    os: 'Windows 10',
    browser: 'Google Chrome',
    resolution: '1920x1080',
  };


  const responseText = `
    نظام التشغيل: ${deviceInfo.os}
    المتصفح: ${deviceInfo.browser}
    الدقة: ${deviceInfo.resolution}
  `;

  res.send(responseText);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

