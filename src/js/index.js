require(['require.config'], function() {

	require(['jquery', 'wx', 'header', 'validate'], function($, wx, header, validate){
		$('#abc').html('sfs')

		//调用header模块的add
		console.log(header.add(1,1));

		//调用header模块的Fntest
		var fnTest = new header.Fntest('song','web',27);
		fnTest.init()
		console.log(new RegExp(validate.vRules.username).test('fdsa'))
		
	})
})
