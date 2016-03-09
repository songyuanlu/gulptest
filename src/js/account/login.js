require(['jquery', 'cookie', 'md5', 'vdate', 'getUser'], function($, cookie, md5, vdate, getUser){
	var login = {
		_login: $('#login'),
		_tips: $('#tips'),
		_name: $('#name'),
		_nameVal: '',
		_paw: $('#password'),
		_pawVal: '',
		_submit: $('#submit'),
		init: function(){
			var me = this;
			me.vation();
		},
		vation: function(){
			var me = this;

			me._submit.click(function(e) {
				// e.preventDefault();

				//验证用户名
				me._nameVal = me._name.val();
				
				if (me._nameVal.length < 1) {
					me._tips.html('请输入用户名');
					return;
				}else if(!new RegExp(vdate.vRegExp.mobile).test(me._nameVal)){
					me._tips.html('请输入正确的用户名');
					return;
				}

				//验证密码
				me._pawVal = me._paw.val();
				if (me._pawVal.length < 1) {
					me._tips.html('请输入密码');
					return;
				}else if (me._pawVal.length < 6 || me._pawVal.length > 16) {
					me._tips.html('请输入正确的密码');
					return;
				};
				
				var user = JSON.stringify({
		            	name: me._nameVal,
		            	password: me._pawVal
		            });

				$.ajax({
		            type : 'POST',
		            url : hostName +'url',
		            data: user,
		            dataType: "json",
		            contentType: "application/json",
		            success : function(ret){
		            	//存储用户名
		            	$.cookie('user', user, {
				            expires: 3//设置日期
				        });
		            },
		            error: function(){
		            	me._tips.html('账户名与密码不匹配，请重新输入');
		            }
		        })
			});
		},
		events: function(){
			var me = this;
		}
	}
	login.init();
});