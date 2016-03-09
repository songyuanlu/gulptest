require(['jquery', 'cookie', 'validate'], function($, cookie, validate){
	var register = {
		type: 'personal',
		_form: $('#register'),
		vFrom: '',
		//初始化
		init: function(){
			var me = this;
			me.attrs();
			me.tab();
			me.vation();
		},
		//属性设置
		attrs: function(){
			var me = this;
			me._shopName = $('#shopName');
			me._rec = $('#rec');
		},
		//切换注册
		tab: function(){
			var me = this;
			var _switch = $('#tab');
			_switch.on('click', '.tab', function(e) {
				var that = $(this);
				if (!that.hasClass('on')) {
					that.siblings('.on').removeClass('on')
					that.addClass('on');
					me.type = that.attr('data-type');
					me.switchRules(me.type);
				}else{
					return;
				}
			});
		},
		//切换验证规则
		switchRules: function(type){
			var me = this;
			if (type == 'personal') {
				me._shopName.parents('li').hide();
				me._rec.parents('li').hide();
				me._shopName.rules('remove');
				me._rec.rules('remove');
			}else if(type == 'shop'){
				me._shopName.parents('li').show();
				me._rec.parents('li').show();
				me._shopName.rules('add', {
					required: true,
					rangelength: [1,20],
					messages: { 
						required: '请输入店铺名称',
						rangelength: '请输入1~20个字符'
					}
				});
				me._rec.rules('add', {
					minlength: 6,
					maxlength: 6,
					messages: { 
						minlength: '请输入6位推荐码',
						maxlength: '请输入6位推荐码'
					}
				});
			}
			me.vFrom.resetForm()
		},
		//验证
		vation: function(){
			var me = this;
			me.vFrom = me._form.validate({
				onkeyup: false,
				errorPlacement: function(error, element) {
					$(element).parents('.li-input').next('.li-explain')
						.append(error);
				},
			    rules: {
					tel: {
						required: true,
						minlength: 11,
						maxlength: 11,
					},
					code: {
						required: true,
						minlength: 4,
						maxlength: 4
					},
					password: {
						required: true,
						rangelength: [6,16]
					},
					confirm_password: {
						required: true,
						rangelength: [6,16],
						equalTo: '#password'
					}
				},
				messages: {
					tel: {
						required: '请输入手机号',
						minlength: '请输入正确有效的手机号',
						maxlength: '请输入正确有效的手机号',
					},
					code: {
						required: '请输入验证码',
						minlength: '验证码错误',
						maxlength: '验证码错误'
					},
					password: {
						required: '请输入密码',
						rangelength: '请输入6-16位密码'
					},
					confirm_password: {
						required: '请再次输入密码',
						rangelength: '请输入6-16位密码',
						equalTo: '两次密码输入不一致'
					}
				},
		        submitHandler: function() { 
					console.log(me._form.serialize()) 
				}
			});
		},
		//事件
		events: function(){
			var me = this;
			// $('#register').submit(function(e) {
			
			// });
		}
	}
	register.init();
});