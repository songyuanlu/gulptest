// var hostName = 'http://'+location.hostname+(location.port?':'+location.port:'')
require.config({
	baseUrl: 'http://localhost:2222'+'/js',
	paths: {
		'jquery': 'lib/jquery/1.12.1/jquery',
		'wx': 'lib/weixin/1.0.0/jweixin',
		'cookie': 'plugins/cookie/jquery.cookie',
		'md5': 'plugins/md5/jquery.md5',
		'validate': 'plugins/validate/jquery.validate.min',
		'header': 'units/header',
		'vdate': 'units/vdate',
		'getUser': 'units/getUser',
		'singLogin': 'units/singLogin',
	}
});