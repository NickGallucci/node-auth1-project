const server = require('./api/server.js');

const host = process.env.HOST || "http://127.0.0.1";
const port = process.env.PORT || 8001;

server.listen(port, () => console.log (`\n ***Server running on ${host}:${port}!** \n`));