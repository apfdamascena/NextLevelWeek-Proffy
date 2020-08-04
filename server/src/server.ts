import express from 'express';

const APP = express();

APP.get('/users', (request, response) => {
    return response.send("hello world");
});

APP.listen(2608);