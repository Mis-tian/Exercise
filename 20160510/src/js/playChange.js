/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-05-10 20:19:17
 * @version $Id$
 */

define(function( require,exports,module ){
    var
        //视频对象
        oVideoWrap      = document.querySelector('.videoBox'),

        oVideo          = oVideoWrap.querySelector('#v1'),
        //左菜单
        oVideo_list     = document.querySelector('.video_list'),
        oListBtnOpen    = oVideo_list.querySelectorAll('.listBtnOpen')[0],
        oVideo_play     = oVideoWrap.querySelector('.video_play'),
        oListBtnContraction= oVideo_list.querySelector(".listBtnContraction"),
        //播放容器
        playBox         = oVideo_play.querySelector(".play"),
        //暂停按钮
        oStop           = playBox.querySelector('#stop'),
        //播放按PP钮
        oPlay           = playBox.querySelector('#play'),
        //停止按钮
        oPause          = playBox.querySelector('#pause'),
        //时间容器
        timerBox        = oVideoWrap.querySelector('.timer'),
        //当前播放时间
        oTimeThis       = timerBox.querySelector('.timeThis'),
        //总播放时间
        oTotalTime      = timerBox.querySelector('#totalTime'),
        //音量设置
        oVolume         = oVideoWrap.querySelector('.volume'),//容器
        oVolume_this    = oVideoWrap.querySelector('.volume_this'),//本体
        oVolumeBtn      = oVolume_this.querySelector('.button'),//按钮

        //部分进度
        oSpeeds        = oVideoWrap.querySelector('.speed'),
        oSpeed_this        = oSpeeds.querySelector('.speed_this'),
        oSpeed_buffer      = oSpeeds.querySelector('.speed_buffer'),
        oSpeed_buffer_btn  = oSpeed_this.querySelector('.button');


        oListBtnOpen.onclick = function(){
           oVideo_play.style.width = 80+'%';         
           oVideo_list.style.width = 20+'%';         
           oListBtnOpen.style.display = 'none';
           oListBtnContraction.style.display = 'block';
     
        }
        oListBtnContraction.onclick = function(){
           oVideo_list.style.width = 0;    
           oVideo_play.style.width = 100+'%';  
           oListBtnOpen.style.display = 'block';
           oListBtnContraction.style.display = 'none';
        }
        oPlay.onclick = function(){
            oVideo.play();
            this.style.display = 'none';
            oPause.style.display = 'block';
        }
        oStop.onclick = function(){
            oPause.style.display = 'none';
            oPlay.style.display = 'block';       
            oVideo.pause(); 
            oVideo.currentTime=0;
        }
        oPause.onclick = function(){
            oVideo.pause();
            this.style.display = 'none';
            oPlay.style.display = 'block';       
            //播放时间0+暂停 模仿停止
        }
        oVideo.ontimeupdate = function(){
            var s = Math.round(oVideo.currentTime);
            var m = parseInt( s/60 );
            var S = Math.round( oVideo.duration );
            var M = Math.round( S/60 );
            oTimeThis.innerHTML = fullZore(m)+':'+fullZore(s);
            oTotalTime.innerHTML = fullZore(M)+':'+fullZore(S);
            oSpeed_this.style.width = (s/S*100)+'%';
            oSpeed_buffer_btn.style.left = oSpeed_this.offsetWidth+'px';
        }
        //所有拖拽控件
        drag_Btn(oVolumeBtn,oVolume,function(scale){oVolume_this.style.width = (scale*100)+'%';});
        drag_Btn(oSpeed_buffer_btn,oSpeeds,function(scale){ oSpeed_buffer.style.width = (scale*100)+'%'; });
        function drag_Btn(btn,parent,fn){
            btn.onmousedown = function( ev ){
                var disX = ev.pageX - this.offsetLeft;
                 //console.log(disX);
                document.onmousemove = function(ev){
                    var l = ev.pageX - disX;
                    if( l > parent.offsetWidth - btn.offsetWidth ) l = parent.offsetWidth - btn.offsetWidth;
                    if( l < 0 ) l = 0;
                    btn.style.left = l + 'px';
                    var scale =  l / ( parent.offsetWidth - btn.offsetWidth );
                    fn && fn(scale);
                    oVideo.volume = l / ( parent.offsetWidth - btn.offsetWidth ); 
                }
                document.onmouseup = function(){
                    document.onmousemove = null;
                    document.onmouseup = null;
                }
                return false;
            }
        }
        //缓冲 onprogress
        oVideo.onprogress = function(){
            //比例  缓冲的进度/视频总时间
            //缓冲的进度 oV.buffer.end(0)
            var scale = this.buffered.end(0)/this.duration;
            //console.log(this.buffered.end(0));
            oSpeed_buffer.style.width = scale*100 + "%";
        };        
        function fullZore( n ){
            return n >= 10 ? '' + n : '0' + n;
        }
        function getPos(obj){
            var json = {left:0,top:0};
            while( obj ){
                json['left'] += obj.offsetLeft;
                json['top'] += obj.offsetTop;
                obj = obj.offsetParent;
            }
            return json;
        }

});