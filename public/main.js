function Main(){

	var self = this;

	this.module = null;
	this.objs = {};
	this.user = {};
	this.bussy = false;
	this.userAway = false;
	this.userAwayTimeOut = null;
	this.votevalues = [];

	this.$ = function(obj){//lazy
		!this.objs[obj] && (this.objs[obj] = $(obj));
		return this.objs[obj]
	};

	this.onAnimationEnd = function(obj,callback,addRemove){
		obj = $(obj);
		obj.on('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', typeof callback === "function" 
		? callback : function(){ obj[(addRemove ? addRemove : 'remove') + 'Class'](callback) });
	};

	this.preloader = function(callback){
		var queue = {
			//https://static.panoramio.com.storage.googleapis.com/photos/large/1227010.jpg
			//https://static.panoramio.com.storage.googleapis.com/photos/large/51677125.jpg
			images: [GLOBALS.BACKGROUND_URL,GLOBALS.BACKGROUND_OVERLAY/*,"http://upload.wikimedia.org/wikipedia/en/8/8a/CampoMarteView.JPG"*/],
			imgObjs: [],
			count: 0,
			add: function(imgObj,key){
				this.imgObjs[key] = imgObj;
				this.count++ == this.images.length - 1 && callback(this.imgObjs);
			}
		};
		$.each(queue.images,function(key, val){
			var image = new Image();
			image.src = val;
			image.onload = queue.add.bind(queue,image,key);
		});
	};

	this.createTimer = function(countdown){
		//Library TimeCircles configuration
		countdown = self.$('.countdown-time');
		countdown.addClass('animated bounceIn').TimeCircles({
			bg_width: 1,
			fg_width: 0.04,
			circle_bg_color: '#bbb',
			time: {
				Days: {color: '#fff', text:'Días'},
				Hours: {color: '#fff', text:'Horas'},
				Minutes: {color: '#fff', text:'Minutos'},
				Seconds: {color: '#fff', text:'Segundos'}
			}
		});
		self.onAnimationEnd(countdown, 'animated bounceIn');
	};

	this.start = function(){
		var background, overlay;

		$("#timer").show();

		$(window).on("resize",function(e){

			//Countdown update animation on resize
			var countdown = self.$('.countdown-time');
			(countdown.TimeCircles().destroy(), self.createTimer());
			self.onAnimationEnd(countdown, 'animated bounceIn');

			//Background resize
			if(!background) return;
			
			var vp = getViewportSize(), windowWidth = vp.width, windowHeight = vp.height
			, iw = $(background).width(), ih = $(background).height(), 
			rw = windowHeight / windowWidth, ri = ih / iw, newWidth, newHeight, properties;

			newWidth = rw > ri ? windowHeight / ri : windowWidth;
			newHeight = rw > ri ? windowHeight : windowWidth * ri;

	        properties = {
	            width: newWidth + "px",
	            height: newHeight + "px",
	            top: ((windowHeight - newHeight) / 2) + "px",
	            bottom: "auto",
	            left: ((windowWidth - newWidth) / 2) + "px",
	            right: "auto"
	        };

			background.add(overlay).css(properties);
		}).bind('hover focus',function(){
			self.userAway = false;
			self.userAwayTimeOut && clearTimeout(self.userAwayTimeOut);
			self.userAwayTimeOut = setTimeout(function(){
				self.userAway = true;
			},9e5); //15min
		}).bind("blur",function(){
			self.userAway = true;
		}).bind('mousemove',function(){
			self.userAway = false;
		});


		var wrapBG = self.$("#background");
		wrapBG.append('<img src="'+GLOBALS.BACKGROUND_URL+'" />').append('<div class="layer"></div>')

		this.preloader(function(images){
			wrapBG.find('.layer, img').remove();

			background = $(images[0]);
			overlay = $("<div/ >");
			overlay.addClass("overlay").css({background:'rgba(0,0,0,.4) url('+images[1].src+') repeat'});
			wrapBG.append(background,overlay);
			$(window).triggerHandler("resize");
		});

		$(window).triggerHandler("resize");
		setTimeout(function(){
			var arrow = $('.wrap-arrow');
			$('div', arrow).addClass('show-opacity animated bounceIn');
			setTimeout(function(){
				$('img', arrow).addClass('show-opacity animated arrow');
			},200);
		},1000);

		$('[data-hint], .barline').removeAttr('title');

		//$(document).ready(function(){
			Page.initDOM();
		//});

		this.initFB();

	};

	this.initDOM = function(){

		this.route();

		$(document).keydown(function(e){
			e.keyCode == 27 && self.modalClose && self.modalClose()
		});

		$("#share").click(function(e){
			FB.ui({
			  method: 'feed',
			  link: GLOBALS.FBSHARE_URL,
			  href: GLOBALS.FBSHARE_URL,
			  caption: GLOBALS.FBSHARE_CAPTION,
				picture: GLOBALS.FBSHARE_IMAGE,
				name: GLOBALS.FBSHARE_TITLE,
				description: GLOBALS.FBSHARE_DESCR
			}, function(response){
				(response||{}).post_id && self.createModal(GLOBALS.FBSHARE_END,2000);
			});
		});

		$("a[data-modal]").click(function(){
			var modal = $(this).data("modal");
			modal && self.createModal(self.$("#" + modal));
		});

		$("a[data-navigate]").click(function(e){
			var url = /\/(.*?)$/.exec($(this).attr("href"));
			url && Router.navigate("/" + url[1]);
			e.preventDefault(), e.stopPropagation();
		});
	
		$(".bar > div", "#bars").click(function(){
			self.addVote(/bar(\d+)/.exec($(this).parent().attr('class'))[1]);
		});		

		setTimeout(function(){
			self.updateVoteValues();

			setInterval(function(){
				!self.userAway && self.callUpdateVotes();
			}, 5e3);
		},1000);

	};

	this.callUpdateVotes = function(){
		$.post(GLOBALS.AJAX_REQUEST, {module: 'update'}, function(data){
			if(!data || data == self.votevalues.join('|')) return;
			self.updateVoteValues(data.split('|'));
		});
	}

	this.updateVoteValues = function(valuesparam){
		var bars = $(".bar", "#bars"), values = valuesparam, sum = 0;

		if(!values){ //count from html
			values = [];
			bars.each(function(){
				values.push($(this).data('votevalues'));
			});
		}

		self.votevalues = values;

		$.each(values,function(k,v){
			sum += +v;
		});

		bars.each(function(k){
			var el = $(this), div = el.find('> div'), i = el.find('i'), b = el.find('b'), s = el.find('span')
			, value = values[k], percent = value / sum * 100;
			
			div.addClass('show').css("width", percent + '%');
			i.text(value + " " + GLOBALS.VOTE_STR);
			s.text("(" + ((percent | 0) +'%') + ")");
		});
	};

	this.createModal = function(text,buttoncallback){
		var modal = $("#modal"), wrap = modal.find('.modal-wrap'), load = modal.find('.mloading'),
		 textObj = modal.find('.modal-text'), button = modal.find('.button-wrap'), mclose = function(){
		 	if(load.is(':visible')) return;
		 	wrap.removeClass('show-opacity');
			setTimeout(function(){
				modal.hide().removeClass('show');
				modal.find('.modal-content').hide();
				Router.navigate();
			},450);
		};

		wrap.click(function(e){
			e.stopPropagation()
		});
		modal.click(mclose);

		this.modalClose = mclose;
		
		load.hide();

		if(!button.data('bindclick')){
			button.click(mclose).data('bindclick',1);
		}

		if(typeof buttoncallback === "number"){
			button.hide();
			textObj.html(text);
			setTimeout(mclose,buttoncallback);
		}else if(typeof text === "object"){
			var clone = text.clone();
			if(clone.attr('id') == "map"){
				!clone.find('iframe').length && clone.append('<iframe width="500" height="500" frameborder="0" style="border:0" src="'+GLOBALS.MAP_URL+'"></iframe>');
			}
			textObj.empty().append(clone);
			clone.show();
			button.show();
		}else if(text == "loading"){
			text = "";
			load.show();
			buttoncallback && setTimeout(mclose,buttoncallback);
			textObj.html(text);
		}else{
			button.find('.button').unbind('click').bind('click',function(){
				buttoncallback && buttoncallback.call(this)
				mclose();
			}).show();
			textObj.html(text);
		}
		
		modal.show();

		setTimeout(function(){
			modal.addClass('show');
			text != "" ? wrap.show().addClass('show-opacity') : wrap.hide();
		},100);
		
	};

	this.route = function(){
		Router
		.config({ mode: 'history'})
		.add(/lugar/, function() {
		    self.createModal(self.$("#map"));
		})
		.add(function() {
    		self.modalClose && self.modalClose()
		})
		.check(window.location.pathname).listen();
		//.navigate(window.location.pathname);
	};

	this.sendVote = function(option){
		if(self.bussy || !self.user.token) return;
		
		self.bussy = true;
		self.createModal("loading");

		$.post(GLOBALS.AJAX_REQUEST,{module: 'addvote', token: self.user.token, option: +option}, function(data){
			var code = +data;
			switch(code){
				case 2: 
					self.createModal(GLOBALS.VOTE_DONE,3000);
					localStorage[GLOBALS.VOTESTORAGEKEY] = 1;
					break;
				case 4:
					self.createModal(GLOBALS.VOTE_EXISTS,3000);
					break;
				default:
					self.createModal(GLOBALS.VOTE_ERROR,2000);
			}
			self.callUpdateVotes();
			self.bussy = false;
		})
	};

	this.addVote = function(option){
		if(typeof localStorage[GLOBALS.VOTESTORAGEKEY] !== "undefined"){
			self.createModal(GLOBALS.VOTE_EXISTS,2000);
			return;
		}
	    FB.login(function(response) {
			self.user.token = response.authResponse.accessToken;
			self.sendVote(option);
		}, {scope: 'email user_birthday'});

		/*FB.getLoginStatus(function(response) {
		  if (response.status === 'connected') {
		    self.user.token = response.authResponse.accessToken;
		    self.sendVote(option);
		  }else{
		    FB.login(function(response) {
					self.user.token = response.authResponse.accessToken;
					self.sendVote();
				}, {scope: 'email user_birthday'});
		  }
		});*/
	};

	this.initFB = function(){
		window.fbAsyncInit = function() {
			FB.init({
				appId      : GLOBALS.FBAPPID,
				xfbml      : false,
				version    : 'v2.2'
			});
		};

		(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	}

}

var Page = new Main;
Page.start();