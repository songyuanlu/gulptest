var baseUrl = 'http://localhost:2222/js'
require.config({
	baseUrl: baseUrl,
	paths: {
		'jquery': 'lib/jquery/1.12.1/jquery',
		'wx': 'lib/weixin/1.0.0/jweixin',
		'cookie': 'plugins/cookie/jquery.cookie',
		'validate': 'plugins/validate/jquery.validate.min',
		'header': 'units/header',
		'vdate': 'units/vdate'
	}
});