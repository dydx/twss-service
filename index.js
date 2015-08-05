var restify = require('restify');
var twss = require('twss');

var server = restify.createServer({
    // config stuff
});

server.use(restify.bodyParser());

server.use(
    function crossOrigin(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Header", "X-Requested-With");
        return next();
    }
);

/**
 * Our predicate function, determines if given phrase
 * is TWSS or not
 *
 * @param {function} parser This is our TWSS module
 * @param {string} phrase This is the phrase to be tested
 * @return {boolean} true or false on the given input phrase  
 */
function is_that_what_she_said_p(parser, phrase) {
    if( typeof phrase === 'string' ) {
        return parser.is(phrase);
    } else {
        return undefined;
    }
}

function responder(req, res, next) {
    var phrase = req.body.phrase;
    // we are dependency injecting the twss module
    // in case we want to replace it later
    var response = is_that_what_she_said_p(twss, phrase);
    console.log('-> parsing request for "%s"', phrase);
    res.send({phrase: phrase, is_twss: response});
    console.log('-> response sent');
    return next();
}

/**
 * Our main endpoint
 *
 * @params {string} our PATH
 * @params {function} responder Our handler
 * @return {string} a JSON object with the results of the query
 */
server.post('/api', responder);

/**
 * Setting our server up to listen
 *
 * @params {number} port Port that our server is running on
 * @params {function} callback A function to run when the server starts
 */
server.listen(8000, function() {
    console.log('**** %s listening on %s ****', server.name, server.url);
});