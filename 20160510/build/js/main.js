define("playChange",function(e,t,o){function n(e,t,o){e.onmousedown=function(n){var l=n.pageX-this.offsetLeft;return document.onmousemove=function(n){var i=n.pageX-l;i>t.offsetWidth-e.offsetWidth&&(i=t.offsetWidth-e.offsetWidth),0>i&&(i=0),e.style.left=i+"px";var r=i/(t.offsetWidth-e.offsetWidth);o&&o(r),u.volume=i/(t.offsetWidth-e.offsetWidth)},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null},!1}}function l(e){return e>=10?""+e:"0"+e}var i=document.querySelector(".videoBox"),u=i.querySelector("#v1"),r=document.querySelector(".video_list"),s=r.querySelectorAll(".listBtnOpen")[0],c=i.querySelector(".video_play"),y=r.querySelector(".listBtnContraction"),d=c.querySelector(".play"),f=d.querySelector("#stop"),a=d.querySelector("#play"),p=d.querySelector("#pause"),h=i.querySelector(".timer"),m=h.querySelector(".timeThis"),q=h.querySelector("#totalTime"),S=i.querySelector(".volume"),v=i.querySelector(".volume_this"),k=v.querySelector(".button"),b=i.querySelector(".speed"),w=b.querySelector(".speed_this"),W=b.querySelector(".speed_buffer"),g=w.querySelector(".button");s.onclick=function(){c.style.width="80%",r.style.width="20%",s.style.display="none",y.style.display="block"},y.onclick=function(){r.style.width=0,c.style.width="100%",s.style.display="block",y.style.display="none"},a.onclick=function(){u.play(),this.style.display="none",p.style.display="block"},f.onclick=function(){p.style.display="none",a.style.display="block",u.pause(),u.currentTime=0},p.onclick=function(){u.pause(),this.style.display="none",a.style.display="block"},u.ontimeupdate=function(){var e=Math.round(u.currentTime),t=parseInt(e/60),o=Math.round(u.duration),n=Math.round(o/60);m.innerHTML=l(t)+":"+l(e),q.innerHTML=l(n)+":"+l(o),w.style.width=e/o*100+"%",g.style.left=w.offsetWidth+"px"},n(k,S,function(e){v.style.width=100*e+"%"}),n(g,b,function(e){W.style.width=100*e+"%"}),u.onprogress=function(){var e=this.buffered.end(0)/this.duration;W.style.width=100*e+"%"}}),define("main",["playChange"],function(e,t,o){e("playChange")});