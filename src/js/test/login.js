var hostName = 'http://localhost:2222';
require.config({
	baseUrl: hostName+'/js',
	paths: {
		'singLogin': 'units/singLogin',
	}
});

require(['singLogin'], function(singLogin){
	var domainArr = ['http://localhost:2222', 'http://localhost:2223']
	document.getElementById('submit').onclick= function() {
	  	//当前域名
	  	var hostName = 'http://'+location.hostname+(location.port?':'+location.port:'')
	  	localStorage.testName = '我是测试2222';
	  	singLogin.login(domainArr, hostName, localStorage.testName);
	};
});