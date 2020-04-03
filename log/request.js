const url = require('url');
// const debug = require('debug')('server:request');
// const log = require('winston');
const log = require('./log')(module);

module.exports = function(req, res) {
    const urlParsed = url.parse(req.url, true);

    // debug('Got request', req.method, req.url);
    log.info('Got request', req.method, req.url);

    if (req.method === 'GET' &&
        urlParsed.pathname === '/echo' &&
        urlParsed.query.message) {
        const message = urlParsed.query.message;
        // debug('Echo: ' + message);
        log.debug('Echo: ' + message);
        res.end(message);
        return;
    }

    // debug('Unknown URL');
    log.error('Unknown URL');

    res.statusCode = 404;
    res.end('Not Found');
};