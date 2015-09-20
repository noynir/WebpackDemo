webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var logger=__webpack_require__(2);
	var calc = __webpack_require__(3);


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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);