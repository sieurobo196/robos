const http = require("http");
const fs = require('fs');

try {
    const fileConfig = fs.readFileSync('./config.json');
    const data = JSON.parse(fileConfig);
    Object.keys(data).forEach((key) => {
        process.env[key] = data[key];
    });
} catch (err) {
    console.log(err + '');
}
const app = require("./app");
const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
