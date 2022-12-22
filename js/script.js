



/* 자동슬라이더 탭기능 */

function autoSlider(){
    var slideIndex = 0;
    
    function showSlides(){
        var i;
        var slides = $('slideList img');
         slides.hide();
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1} 
        $(slides[slideIndex-1]).show(); 
        setTimeout(showSlides, 500); // Change image every 3 seconds
    }
  }
   autoSlider();  


   let banner=$('.slideList>li');
   let button=$('.pagerwrap>.pager');
   let $play=$('.play'); 
   let $stop=$('.stop'); 

   let current=0;
   let setIntervalId;
   
   timer();
   function timer(){
       setIntervalId=setInterval(function(){
           var prev=banner.eq(current);
           var prevBtn=button.eq(current);
           move(prev,0,'-100%');
           prevBtn.removeClass('on');
           current++;
           if(current==banner.size()){current=0;}
           var next=banner.eq(current);
           var nextBtn=button.eq(current);
           move(next,'100%',0);
           nextBtn.addClass('on');
       },2000);
   }
   function move(tg, start, end){
       tg.css('left',start).stop().animate({left:end},500);
   }
   
   $('.pagerwrap').on({mouseover:function(){
       clearInterval(setIntervalId);
   },mouseout:function(){
       timer();
   }
   });
   $play.click(function(e){
    e.preventDefault();
    timer();
   });
   $stop.click(function(e){
    e.preventDefault();
    clearInterval(setIntervalId);
   
   })
   
  
   
   //button.on({click:function(){}});
   button.click(function(e){
    e.preventDefault();
       var tg=$(this);
       var i=tg.index();
       
       button.removeClass('on');
       tg.addClass('on');
       if(current>i){
           move2(i);
       }else{
           move1(i);
       }
       
   });
   
   function move1(i){
       if(current==i) return;// 현재 보이는 이미지가 i번째랑 같은면 종료시켜
       var currentEl=banner.eq(current);
       var nextEl=banner.eq(i);
       currentEl.css("left","0").stop().animate({left:'-100%'},500);
       nextEl.css('left','100%').stop().animate({left:0},500);
       current=i;
   }
   function move2(i){
       if(current==i) return;// 현재 보이는 이미지가 i번째랑 같은면 종료시켜
       var currentEl=banner.eq(current);
       var nextEl=banner.eq(i);
       currentEl.css("left","0").stop().animate({left:'100%'},500);
       nextEl.css('left','-100%').stop().animate({left:0},500);
       current=i;
   }
