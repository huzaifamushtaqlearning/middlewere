const express = require('express');
const app = express();

// 🔐 Middleware sirf admin route ke liye
function checkAdmin(req, res, next) {
  if (req.query.admin === 'true') next();
  else res.send('❌ Access Denied');
}

// ✅ Sirf yahan use kiya
app.get('/admin', checkAdmin, (req, res) => {
  res.send('👑 Admin Access Granted');
});

// 🚪 Normal route, middleware nahi chahiye
app.get('/', (req, res) => {
  res.send('🏠 Welcome to Home Page');
});

app.listen(3000);
