'use strict';

var logger=require('./logger');
var calc = require('./calc');


var services={

    dialogs:{
        alert:function(msg){
            alert(msg);
        },
        confirm:function(msg){
            return confirm(msg);
        },
        prompt:function(msg,value){
           return prompt(msg, value);
        }
    }
};
$(function(){
    logger.log('services loaded');    
})


module.exports=services;