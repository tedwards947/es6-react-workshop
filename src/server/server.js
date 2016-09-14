import React from 'react';
import ReactDOM from 'react-dom/server';
import * as ReactRouter from 'react-router';

import restify from 'restify';

function respond(req, res, next) {
    res.send('hello ' + req.params.name);
    next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});