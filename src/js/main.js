require.config({
	paths: {
		"jquery": "../js/lib/jquery/1.12.1/jquery",
		"wx": "../js/lib/weixin/1.0.0/jweixin"
	}
});


require(['jquery', 'wx', 'header'], function($, wx, header){
	$('#abc').html('sfs')

	//调用header模块的add
	console.log(header.add(1,1));

	//调用header模块的Fntest
	var fnTest = new header.Fntest('song','web',27);
	fnTest.init()
})