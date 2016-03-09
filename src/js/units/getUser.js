/*
@获取用户信息
1、有本地存储用本地存储 code:1 有本地信息，code:2 无本地信息
2、无本地存储，去后台获取用户信息
 */
define(function (){

    var user = function(){
        var user = $.cookie('user')
        if (user) {
            user = JSON.parse(user);
            return {
                'code': 1,
                'user': user 
            }
        }else{
            return {
                'code': 0
            }
        }  
    }

    return {
        user: user
    };
})