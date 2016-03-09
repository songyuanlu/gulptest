/*单点登录方法*/
define(function (){
	var login = function(domains, domainNow, data){
		/*
		domains: 信任的域名集合
		domainNow: 当前的域名
		data: 需要传输的数据
		 */
		//删除通过此方法添加的iframe
	  	var ifrOld = document.getElementsByTagName('iframe');
	  	var ifrOldLen = ifrOld.length
	  	if (ifrOldLen > 0) {
	  		for (var i = 0; i < ifrOldLen; i++) {
	  			if (ifrOld[i].getAttribute('data-type') == 'domain') {
	  				if (navigator.appName == 'Microsoft Internet Explorer') {
	  					ifrOld[i].removeNode(true);
	  				}else{
	  					ifrOld[i].remove();
	  				}
	  			};
	  		};
	  	};
	  	//添加域名iframe
		var wwws = [];//需要创建iframe的域名集合
		var ifrs = [];//创建的iframe集合
	  	var domainsLen = domains.length;
	  	for (var i = 0; i < domainsLen; i++) {
	  		var dI = domains[i];
	  		if (dI != domainNow) {
	  			wwws.push(domains[i]);
	  			ifrs.push('ifr_'+i);
	  			var ifrNew = document.createElement("iframe");
	    		ifrNew.id = 'ifr_'+i;
	    		ifrNew.setAttribute('data-type','domain')
	    		ifrNew.src = domains[i] + '/html/test/postMessage.html';
	    		document.getElementsByTagName('body')[0].appendChild(ifrNew);
	  		};
	  	};
	    setTimeout(function(){
	    	var wwwsLen = wwws.length;
	    	for (var i = 0; i < wwwsLen; i++) {
	    		var ifrI = document.getElementById(ifrs[i]);
	    		ifrI.contentWindow.postMessage(data, wwws[i]);
	    	};
	    },100)
	}
	return {
		login: login
	};
});


