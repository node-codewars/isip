'use strict';
var test = require('ava');
var isIp = require('./');

test(function (t) {
    t.assert(isIp('192.168.0.1'));
});
