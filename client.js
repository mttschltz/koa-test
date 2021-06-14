const fetch = require('node-fetch');
const write = require('write');

console.log('starting...')

fetch('http://localhost:3000')
    .then(res => res.text())
    .then(body => {
        write.sync('dist/index.html', `<html><body>from server: ${body}</body></html>`, { newline: true }); 
    });