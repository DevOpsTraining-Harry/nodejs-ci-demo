const http = require('http');
const PORT = 3000;
const server = http.createServer((req, res) => {
  res.end('Frontend: Hello, update from Node.js app!\n');
});
server.listen(PORT, () => {
  console.log(`Frontend running on port ${PORT}`);
});
