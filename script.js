	'use strict'
	var obj = {
		methodt: function(name){
			console.log(this, name);
		}
	};
	
	var setTime = {
		meth: function(name){
			this.name = name;
			setTimeout(function(){
				console.log(this, name);
			},10000);
		}
	}

	var doc = document.querySelector('.paragraph');
	doc.addEventListener('click', function(){
		console.log(this, "gugui");
	});

	setTimeout(function(){
		console.log(this, "hjgjyjf");
	},2000);



	obj.methodt("oi");
	setTime.meth("link");