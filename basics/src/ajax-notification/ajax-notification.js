/* 
	requirements: jQuery
*/

// define internal scope
(function(){

	// on document ready
	$(function(){

		var lockLayerFactory = {
			_self: undefined, // reference to lock layer element
			_class: 'locklayer',
			_defaultStructure: function getHTMLStructureAsString(){
				return '<div class="' + this._class + '"></div>';
			},
			init: function initLockLayer(parent){
				this._self = $(parent).appendTo(this.getHTMLStructureAsString());
			}
		}

		lockLayerFactory.init('body');


		function registerAjaxCallbacks(onStart, onComplete){

			if(!XMLHttpRequest.isProxy){

				XMLHttpRequest.isProxy = true;
				var baseSend = XMLHttpRequest.prototype.send;
				
				XMLHttpRequest.prototype.send = function(){
					
					this.onloadend = onComplete;
					
					onStart(this)
					baseSend.apply(this, arguments);
					
				};
			}
		}
	});


})()