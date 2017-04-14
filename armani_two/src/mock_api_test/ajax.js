export default function ajax ( options )
{
    options  = options || {};
    options.data = options.data || {};
    options.timeout = options.timeout || 0;
    options.type = options.type || 'get';
    let arr = [];
    let oAjax = null;
    options.data.t = Math.random();
    for( let ket in options.data ){
        arr.push( ket +'='+ encodeURIComponent( options.data[ket] ) );
    }
    let str = arr.join('&');
    if( window.XMLHttpRequest ){
        oAjax = new XMLHttpRequest();
    }else{
        oAjax = new ActiveOBject('Microsoft.XMLHTTP');
    }
    oAjax.withCredentials = true; //支持跨域发送cookies
    if( options.type == 'get' ){
        oAjax.open( options.type,options.url+'?'+str );
        oAjax.send();
    }else{
        oAjax.open( options.type,options.url );
        oAjax.setRequestHeader('content-type','application/json;charset=UTF-8');
        oAjax.send(str);
    }
    if( options.timeout ){
        var timer = setTimeout(function(){
            alert('超时');
            oAjax.abort();
        },options.timeout)
    }
    oAjax.onreadystatechange = function(){
        if( oAjax.readyState == 4 ){
            if( oAjax.status >= 200 && oAjax.status < 300 || oAjax.status == 304 ){
                clearTimeout(timer);
                options.succcess && options.succcess(oAjax.responseText);
            }else{
                options.error && options.error( oAjax.status );
            }
        }
    }
}  
