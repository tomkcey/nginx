const http = require('http');

const appName = process.env.APP_NAME;
const port = process.env.PORT;

const server = http.createServer((_, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello from ${appName}.js!`);
})

server.on("connection", (_) => {
    console.log(`${appName} - new connection`);
})

server.listen(port, () => {
    console.log(`${appName} webserver running on port ${port}`)
});

process.on('SIGTERM', () => {
    server.close(() => {
        console.log(`${appName} - shutting down`);
    });
});