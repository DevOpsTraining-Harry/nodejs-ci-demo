const http = require('http');
const PORT = 4000;
const server = http.createServer((req, res) => {
  res.end('Backend: Hello from backend service!\n');
});
server.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
