// write a nodejs server that will expose a method call "get" that will return the value of the key passed in the query string
// example: http://localhost:3000/get?key=hello
// if the key is not passed, return "key not passed"
// if the key is passed, return "hello" + key
// if the url has other methods, return "method not supported"
// when server is listening, log "server is listening on port 3000"


const http = require('http');
const url = require('url');




const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === '/get') {
        const key = query.key;
        if (!key) {
            res.end('hello world');
        } else {
            res.end(`hello ${key}`);
        }
    } else {
        res.end('method not supported');
    }

    if (pathname === '/DaysBetweenDates') {
    const date1 = query.date1;
    const date2 = query.date2;
    if (!date1 || !date2) {
        res.end('Both date1 and date2 parameters are required');
    } else {
        const daysBetween = Math.floor((new Date(date2) - new Date(date1)) / (1000 * 60 * 60 * 24));
        res.end(`Days between ${date1} and ${date2}: ${daysBetween}`);
    }
}


});

server.listen(3000, () => {
    console.log('server is listening on port 3000');
});