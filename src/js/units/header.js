define(function (){
	var add = function (x,y){
		return x+y;
	};

	function Fntest(name,job,age){
		this.name = name;
		this.job = job;
		this.age = age;
	}
	Fntest.prototype = {
		constructor: Fntest,
		init: function(){
			var self = this;
			self.sayName();
		},
		sayName: function(){
			var self = this;
			console.log(self.name)
		}
	};
	return {
		Fntest: Fntest,
		add: add
	};
});

/*good*/ 
function Fntest(name){
	this.name = name;
}
/*bad*/
function Fntest(name){
  this.name = name;
}

/*good*/
var a = 0,
	b = 1,
	c = 2;
/*bad*/
var a = 0;


