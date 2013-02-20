/* 
	requirements: jQuery
*/

// define internal scope
(function(){

	// on document ready
	$(function(){

		var lockLayerFactory = {

			// returns a new instance of lock layer
			init: function initLockLayer(parent){

				var self = this._createContainer($(parent));
				var content = this._createContent(self);
				var image = this._createImage(content.find('.locklayer-left'));
				var message = this._createMessage(content.find('.locklayer-right'));
				var w = $(window);

				function positionContent(){
					var windowHeight = w.height();
					var windowWidth = w.width();
					var top = (windowHeight / 2) - (content.height() / 2);
					var left = (windowWidth / 2) - (content.width() / 2);
					content.css('top', top); // adjust the position of content area on window resize
					content.css('left', left);
				}

				
				w.resize(positionContent);

				return {
					show: function showLockLayer(){
						positionContent();
						self.show();
					},
					hide: function hideLockLayer(){
						self.hide();
					}
				}
				
			},
			_class: 'locklayer', // CSS class name
			_defaultMessageText: 'Please wait until the data is retrieved.', // TODO use resource file to get localized messages.
			
			_createContainer: function createMainContainerForLockLayer(parent){
				return $('<div class="' + this._class + '">').appendTo(parent);
			},
			_createContent: function createContentArea(parent){
				return $('<table class="locklayer-content"><tr><td class="locklayer-left"></td><td class="locklayer-right"></td></tr></table>').appendTo(parent);
			},
			_createMessage: function createMessageArea(parent){
				return $('<div class="locklayer-message">'+ this._defaultMessageText +'</div>').appendTo(parent);
			},
			_createImage: function createImageArea(parent){
				return $('<div class="locklayer-image"></div>').appendTo(parent);
			}
		}	

		var lockLayer = lockLayerFactory.init('body');
		
		function showLockLayer(){
			lockLayer.show();
			console.log('showLockLayer');
		}

		function hideLockLayer(){
			lockLayer.hide();
			console.log('hideLockLayer');
		}

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

		registerAjaxCallbacks(showLockLayer, hideLockLayer);
	});


})()