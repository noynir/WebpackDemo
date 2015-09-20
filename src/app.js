'use strict';

var logger= require('./logger');
//var services= require('./services');

require('./calc');
logger.log("app started");
logger.log('app in progress');

$(function(){
    $('body').append("<h1>Hello World</h1>");
})

