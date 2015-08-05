# TWSS-Service

A simple Restify service built using Daniel Rapp's [twss.js](https://github.com/DanielRapp/twss.js/) library

# Installation and Usage

Just `git clone https://github.com/dydx/twss-service`
Then `npm install`
Finally `node index.js`

## requests

Requests are sent via form-data, with a key of `phrase` having a string value of a phrase you wish to test

## responses

Responses are JSON encoded with the `phrase` being sent back, as well as a boolean `is_twss`. They look like this:

```
{
    "phrase": "its getting hot in here",
    "is_twss": true
}
```

# caveats

It seems to give odd results from time to time, the classifier might need some more training, or perhaps with different training sets

# thanks

Again, thanks to Daniel Rapp for the TWSS library.