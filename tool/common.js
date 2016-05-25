/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-19 22:15:32
 * @version $Id$
 */
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-12 18:33:18
 * @version $Id$
 */


function jsonp(options){
    //0.    整理参数
    options=options||{};
    options.data=options.data||{};
    options.cbKey=options.cbKey||'cb';
    options.timeout=options.timeout||0;
    
    //1 准备一个本地函数（全局) ,名字随机
    var cbValue=('jsonp'+Math.random()).replace('.','');
    options.data[options.cbKey]=cbValue;
    window[options.data[options.cbKey]]=function(json){
        options.success && options.success(json);
        //清理工作
        document.getElementsByTagName('head')[0].removeChild(oScript);  
        window[options.data[options.cbKey]]=null;
        clearTimeout(timer);
    };
    
    //2 整理data数据
    var arr=[];
    for(var key in options.data){
        arr.push(key+'='+encodeURIComponent(options.data[key]));    
    }
    options.url = options.url+'?'+arr.join('&');
    
    //3 创建script.指定src，插入到页面(head)
    var oScript=document.createElement('script');
    oScript.src=options.url;
    document.getElementsByTagName('head')[0].appendChild(oScript);
    
    //4 超时设定
    if(options.timeout){
        var timer=setTimeout(function(){
            options.error && options.error();
            window[options.data[options.cbKey]]=function(){
                //清理工作
                document.getElementsByTagName('head')[0].removeChild(oScript);  
                window[options.data[options.cbKey]]=null;
                clearTimeout(timer);    
            };
                
        },options.timeout); 
    }
}
function ajax( options )
{
    options  = options || {};
    options.data = options.data || {};
    options.timeout = options.timeout || 0;
    options.type = options.type || 'get';
    var arr = [];
    options.data.t = Math.random();
    for( var ket in options.data ){
        arr.push( key +'='+ encodeURIComponent( options.data[key] ) );
    }
    var str = arr.join('&');
    if( window.XMLHttpRequest ){
        var oAjax = new XMLHttpRequest();
    }else{
        var oAjax = new ActiveOBject('Microsoft.XMLHTTP');
    }
    if( options.type == 'get' ){
        oAjax.open( options.type,options.url+'?'+str );
        oAjax.send();
    }else{
        oAjax.open( options.type,options.url );
        oAjax.setRequestHeader('content-type','applicotion/x-www-form-urlencoded');
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
function removeCookie(name){
    setCookie(name,'',-1);
}

function getCookie(name){
    var str = document.cookie;
    var arr=str.split('; ');
    for(var i=0;i<arr.length;i++){
        var arr2=arr[i].split('='); 
        if(arr2[0]==name){
            return arr2[1];
        }
    }
    return '';
}

function setCookie(name,value,timeout){
    var d=new Date();
    d.setDate(d.getDate()+timeout);
    document.cookie=name+'='+value+';expires='+d;
}
/*==============================cookie=====================================*/

 function ready ( fn ){
    if( document.addEventListener ){
        document.addEventListener('DOMContentLoaded',fn,false);//DOM打头的事件都属于高级事件 都要用addEvent
    }else{
        document.onreadystatechange = function(){
            if( document.readyState == 'complete' ){//加载状态 css js html 加载完毕之后的状态
                fn();
            }
        }
    }
}
function addClass( obj,sClass ){
    var re = new RegExp( '\\b'+sClass+'\\b' );
    if( !re.test( obj.className ) ){
        obj.className = obj.className +' '+sClass;
    }
}
function removeClass(obj,sClass){
    var re = new RegExp( '\\b'+sClass+'\\b' );
    if( re.test( obj.className ) ){
        obj.className = obj.className.replace(re,'');
        obj.className = obj.className.match(/\S+/g).join(' ');
    }
}
function hasClass( obj,sClass ){
    var re = new RegExp( '\\b'+sClass+'\\b' );
    return re.test( obj.className );
}
function toggleClass( obj,sClass ){
    var re = new RegExp( '\\b'+sClass+'\\b' );
    if( hasClass( obj,sClass ) ){
        removeClass( obj,sClass );
    }else{
        addClass( obj,sClass );
    }
}

function addEvent ( obj,fn,sEvt ){
    if( obj.addEventListener ){ //ev.cancelBubble = true;解决冒泡问题
        obj.addEventListener( sEvt,fn,false );//ev.preventDefault 能解决addEventListener在高版本中 return false 不能解决默认事件问题
    }else{ //ev.preventDefault(); 在低版本IE中不支持 就用return false 来阻止默认事件
       obj.attachEvent('on'+sEvt,fn);//ev.srcElement;解决低版本detachEvent this指向window的问题
   }
}
function removeEvent(obj,fn,sEvt){
    if(obj.removeEventListener){
        obj.removeEventListener(sEvt,fn,false); 
    }else{
        obj.detachEvent('on'+sEvt,fn);//ev.srcElement;解决低版本detachEvent this指向window的问题
    }   
}


function getStyle(obj, attr) {
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr];
};
function getPos ( obj ){//获取元素到页面的定位距离
    var json = {left:0,top:0};
    while(obj){
        json['left'] += obj.offsetLeft;
        json['top'] += obj.offsetTop;
        obj = obj.offsetParent;
    }
    return json;
}
function css() {
	if (arguments.length == 2) {
		////获取//批量修改
		if (typeof arguments[1] == 'string') {
			//获取
			var obj = arguments[0];
			var attr = arguments[1];
			if (obj.currentStyle) return obj.currentStyle[attr];
			else return getComputedStyle(obj, false)[attr];
		} else if (typeof arguments[1] == 'object') {
			//批量修改
			var obj = arguments[0];
			var json = arguments[1];
			for (var key in json) {
				obj.style[key] = json[key];
			}
		}
	} else if (arguments.length == 3) {
		//修改
		var obj = arguments[0];
		var key = arguments[1];
		var value = arguments[2];
		obj.style[key] = value;
	}
}

function stringChangeArr(str) { //字符串转换成数组
	return str.split(' ');
}

function FirstLetter(str) { //首字母大写
	var arr = str.toLowerCase().split(' ');
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
	}
	return arr.join(' ');
}

function getDayByDate(time) { //本月 总天数 或 最后一天周几
	var d = new Date();
	d.setMonth(d.getMonth() + 1, 1);
	d.setDate(0);
	if (time == 'date') {
		return d.getDate();
	} else if (time == 'day') {
		return d.getDay();
	} else {
		return d;
	}
}
function isArray(){
    var types = Object.prototype.toString.call(arguments[0]);
    return types == '[object Array]' ? true : false;
}
function isFunction(){
    var types = Object.prototype.toString.call(arguments[0]);
    return types == '[object Function]'? true : false;
}

function isObject(){
    var types = Object.prototype.toString.call(arguments[0]);
    return types == '[object object]'? true : false;
}

function isString(){
    var types = Object.prototype.toString.call(arguments[0]);
    return types == '[object String]'? true : false;
}

function isUndefined(){
    var types = Object.prototype.toString.call(arguments[0]);
    return types == '[object Undefined]'? true : false;
}

function isNumber(){
    var types = Object.prototype.toString.call(arguments[0]);
    return types == '[object Number]'? true : false;
}
function isBoolean(){
    var types = Object.prototype.toString.call(arguments[0]);
    return types == '[object Boolean]'? true : false;
}
function isType(obj) {//返回类型
	var types = Object.prototype.toString.call(arguments[0]);
	if (types == '[object Array]') {
		return 'array';
	} else if (types == '[object object]') {
		return 'object';
	} else if (types == '[object String]') {
		return 'string';
	} else if (types == '[object Undefined]') {
		return 'undefined';
	} else if (types == '[object Number]') {
		return 'number';
	} else if (types == '[object Boolean]') {
		return 'boolean';
	} else if (types == '[object Function]') {
		return 'function';
	}
}
function strChangeObject(str) {
	return eval('('+str+')');
}
function strChangeJsonStatistics(str) { //字符串 数组 转换 json 并统计
	var arr = [], json = {};
	if (isString(str)) {
		arr = str.split(' ');
		for (var i = 0; i < arr.length; i++) {
			if (status || status == undefined) {
				json[arr[i]] = '';
			} else if (status == false) {
				var key = arr[i];
				if (json[key]) {
					json[key]++;
				} else {
					json[key] = 1;
				}
			}
		}
		return json;
	}
    if (isArray(str)) {
        for (var i = 0; i < str.length; i++) {
            var key = str[i];
            if( json[key] ){
                json[key]++;
            }else{
                json[key] = 1;
            }
        }
        return json;
    }
}

function reverseString(str) { //反转字符串
	var arr = str.split(' ');
	return arr.reverse().join(' ');
}

function arrayRemoveRepeat(arr) { //数组去重
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i] == arr[j]) {
				arr.splice(j--, 1);
			}
		}
	}
	return arr;
}
function arrayRepeat( arr ){//数组去重
    var arr2=[];
    for(var i=0;i<arr.length;i++){
        //假设没找到的
        var find=false;
        
        //在arr2里面一个一个的找
        for(var j=0;j<arr2.length;j++){
            if(arr2[j]==arr[i]){
                find=true;
                break;
            }else{
                find=false; 
            }
        }
        
        //没找到，才添加
        if(!find){
            arr2.push(arr[i]);  
        }     
    }
    return arr2;
}
function isNum() { //是不是数字
	for (var i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] != 'number') {
			return false;
		}
	};
	return true;
}
function fontLength( str ){//假设在UTF8的编码下,计算文件长度 汉子算3字符
    var len = 0;
    for (var i = 0; i < str.length; i++) {
      if( str.charCodeAt(i) >= 0x4e00 && str.charCodeAt(i) < 0x9fa5 ){
        len +=3 ;
    }else{
        len++;
    }
}
return len;
}
/*function getByClass ( oPrent,sClass ){
    var aEle = oPrent.getElementsByTagName('*');
    var result = [];
    if( oPrent.getElementsByClassName ){
        return oPrent.getElementsByClassName(sClass);
    }else{
        for (var i = 0; i < aEle.length; i++) {
            var  temArr = aEle[i].className.split(' ');
            for (var j = 0; j < temArr.length; j++) {
                if( temArr[j] == sClass ){
                    result.push(aEle[i]);
                    break;
                }
            }
        }
        return result;
    }
}*/

function getByClass(oParent,sClass){
    var arr = [];
    var aEle = oParent.getElementsByTagName('*');
    
    //var re = /sClass/;  //当正则需要传参的时候，一定要用全称的写法
    var re = new RegExp('\\b'+sClass+'\\b');
    if( oParent.getElementsByClassName ){
        return oParent.getElementsByClassName(sClass);
    }else{
        for(var i=0;i<aEle.length;i++){
            if( re.test(aEle[i].className) ){
                arr.push( aEle[i] );
            }
        }
    }
    return arr;
    
}

function rnd(n, m) {
	return Math.round(Math.random() * (m - n) + n);
};

function fullZreo(num) {
	return (num > 10) ? ('' + num) : ('0' + num);
};

function dragAll(oPrent,sClass ){
    var aDrag = getByClass(oPrent,sClass);
    for (var i = 0; i < aDrag.length; i++) {
        (function(index){
            aDrag[i].onmousedown = function(e){
                var ev = e || window.event;
                var disX = ev.clientX - aDrag[index].offsetLeft;
                var disY = ev.clientY - aDrag[index].offsetTop;
                document.onmousemove = function(e){
                   var ev = e || window.event;
                   var L = ev.clientX - disX;
                   var T = ev.clientY - disY;

                   if( L < 50 ) L = 0;
                   if( T < 50 ) T = 0;
                   if( L > document.documentElement.clientWidth - aDrag[index].offsetWidth - 50 ) L = document.documentElement.clientWidth - aDrag[index].offsetWidth;
                   if( T > document.documentElement.clientHeight - aDrag[index].offsetHeight - 50 ) T = document.documentElement.clientHeight - aDrag[index].offsetHeight;

                   aDrag[index].style.left = L + 'px';
                   aDrag[index].style.top = T + 'px';
               }
               document.onmouseup = function(e){
                   document.onmousemove = null;
                   document.onmouseup = null;
                   aDrag[index].releaseCapture&&aDrag[index].releaseCapture();
               }
               aDrag[index].setCapture&&aDrag[index].setCapture();
               return false;
           }
       })(i)
   };
}
function Sort ( arr ){
    for (var i = 0; i < arr.length; i++) {
       var minValIndex = findMin( arr,i );
       var tem = arr[i];
       arr[i] = arr[minValIndex];
       arr[minValIndex] = tem;
   };
   return arr;
}
function findMin( arr,start ){
    var minNum = 99999999999;
    var minNumIndex = -1;
    for (var i = start; i < arr.length; i++) {
        if( arr[i] < minNum ){
            minNum = arr[i];
            minNumIndex = i;
        }
    }
    return minNumIndex;
}
function move ( obj,targtJson,options ){
    options = options || {};
    options.time = options.time || 300;
    options.fn = options.fn || null;
    options.type = options.type || 'linear';
    var dis = {};
    var start = {};
    var n = 0;
    var count = Math.round( options.time / 30 );
    for( var attr in targtJson ){
        start[attr] = parseFloat( getStyle( obj,attr ) );
        dis[attr] = targtJson[attr] - start[attr];
    }
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        n++;
        for( var attr in targtJson ){
                switch( options.type ){
                    case 'linear':
                    var a = n / count;
                    var cur = start[attr] + dis[attr] * a;
                    break;
                    case 'ease-in':
                    var a = n / count;
                    var cur = start[attr] + dis[attr] * a *a *a;
                    break;
                    case 'ease-out':
                    var a = 1 - n / count;//越来越小
                    var cur = start[attr] + dis[attr] * (1- a * a * a);
                    break;
                }

                if( attr == 'opacity' ){
                    obj.style[attr] = cur;
                    obj.style['filter'] = 'alpha( opacity = '+cur * 100 +')';
                }else{
                    obj.style[attr] = cur + 'px';
                }              
            }
            if( n == count ){
                clearInterval( obj.timer );
                options.fn && options.fn();
            }              
        },30);
}

function addMouseWheel ( obj,fn ){
    if( navigator.userAgent.toLowerCase().indexOf( 'firefox' ) != -1 ){
        obj.addEventListener( 'DOMMouseScroll',WheelFn,false );
    }else{
        obj.onmousewheel = WheelFn;
    }
    function WheelFn ( ev ){
        var ev = ev || event;
        if( ev.wheelDelta ){//Chrome IE
            var down = ev.wheelDelta < 0 ? true : false;
        }else{//ff
            var down = ev.detail > 0 ? true : false;
        }
        fn( down );
        ev.preventDefault && ev.preventDefault();
        return false;
    }
}

function a2d( n ){
    return n * 180/Math.PI;
}
function d2a( n ){
    return n * Math.PI/180;
}
/*    over/out 
        冒泡：
        解决： onmouseenter/onmouseleave   ie6有问题
        解决：
            判断来自是不是oDiv以外的对象  是  划入了

        A.contains(B)   a是否包含b  true/false
        
        来自
        oEvt.fromElement    for other
        oEvt.relatedTarget  for ff
        
        去向
        oEvt.toElement      for other
        oEvt.relatedTarget  for ff*/