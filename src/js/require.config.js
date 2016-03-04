var path = 'http://localhost:2222';
require.config({
	baseUrl: path+'/js',
	paths: {
		'jquery': 'lib/jquery/1.12.1/jquery',
		'wx': 'lib/weixin/1.0.0/jweixin',
		'cookie': 'plugins/cookie/jquery.cookie',
		'validate': 'plugins/validate/jquery.validate.min',
		'header': 'units/header',
		'vdate': 'units/vdate'
	}
});