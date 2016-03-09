// require(['require.config'], function() {
// })
require(['jquery', 'wx', 'header', 'cookie', 'vdate'], function($, wx, header, cookie, vdate){
	$('#abc').html('sfs')

	//调用header模块的add
	console.log(header.add(1,1));

	//调用header模块的Fntest
	var fnTest = new header.Fntest('song','web',27);
	fnTest.init()

	//调用校验
	console.log(new RegExp(vdate.vRules.username).test('fdsa'))
	
	//调用cookie
	var userInfor = {
		'name': 'song',
		'age': 26,
		'job': 'web'
	}

	// $.cookie('userInfor', JSON.stringify(userInfor));//设置cookie
	$.cookie('userInfor', JSON.stringify(userInfor), {
        expires: 3//设置日期
    });

	// $.removeCookie('userInfor');//删除Cooki
	console.log(JSON.parse($.cookie('userInfor')))
})