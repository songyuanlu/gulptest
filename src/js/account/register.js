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

require(['jquery', 'cookie', 'validate', 'vdate'], function($, cookie, validate, vdate){

		var register = {
			// _name: $('input[name="name"]'),
			// _nameVal: '',
			init: function(){
				var me = this;
				me.vation();
				$.cookie('username', 'song');
				console.log($.cookie('username'))
			},
			vation: function(){
				var me = this;
				$("#register").validate({
				    rules: {
						shopName: {
							required: true,
							minlength: 1,
							maxlength: 20,
						},
						lastname: "required",
						username: {
							required: true,
							minlength: 2
						},
						password: {
							required: true,
							minlength: 5
						},
						confirm_password: {
							required: true,
							minlength: 5,
							equalTo: "#password"
						},
						email: {
							required: true,
							email: true
						}
					},
					messages: {
						shopName: {
							required: "请输入店铺名称",
							minlength: "请输入1~20个字符",
							maxlength: "请输入1~20个字符"
						},
						lastname: "请输入您的姓氏",
						username: {
							required: "请输入用户名",
							minlength: "用户名必需由两个字母组成"
						},
						password: {
							required: "请输入密码",
							minlength: "密码长度不能小于 5 个字母"
						},
						confirm_password: {
							required: "请输入密码",
							minlength: "密码长度不能小于 5 个字母",
							equalTo: "两次密码输入不一致"
						},
						email: "请输入一个正确的邮箱"
					}
				});
			},
			events: function(){
				var me = this;

				// $('#register').submit(function(e) {
			
				// });
			}
		}
		register.init();
	});