$(document).ready(function(){
    //    패널메뉴
    $('.panelBg').hide();
    
    $('.panel').click(function() {
        $('.panelBg').fadeIn(300);
        $('.panelMenu').css('width','100%');
    });
    
    $('.close').click(function() {
        $('.panelBg').fadeOut(300);
        $('.panelMenu').css('width','0'); 
    });
    
    
    

    //mainSlider 슬릭구현
    $('.mainSlider').slick({
        dots:true,
        infinite:false,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });
    
    //슬릭버튼
    
    $('.prev').hide();
    
    $('.mainSlider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      if(nextSlide>0){
          $('.prev').fadeIn(200);
      }else{
         $('.prev').fadeOut(200);
      }
    });
    
    $('.mainSlider').on('afterChange', function(event, slick, currentSlide){
      if(currentSlide==3){
          $('.next').fadeOut(200);
      }else{
          $('.next').fadeIn(200);          
      }
    });
    
    
    //con04mainSlider 슬릭구현
    $('.con04mainSlider').slick({
        dots:true,
        infinite:false,
        prevArrow: $('.con04prev'),
        nextArrow: $('.con04next'),
    });
    
    //슬릭버튼
    
    $('.con04prev').hide();
    
    $('.con04mainSlider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      if(nextSlide>0){
          $('.con04prev').fadeIn(200);
      }else{
         $('.con04prev').fadeOut(200);
      }
    });
    
    $('.con04mainSlider').on('afterChange', function(event, slick, currentSlide){
      if(currentSlide==3){
          $('.con04next').fadeOut(200);
      }else{
          $('.con04next').fadeIn(200);          
      }
    });
    
    
    
    //con05mainSlider 슬릭구현
    
    $('.con05mainSlider').slick({
        dots:true,
        infinite:false,
        prevArrow: $('.con05prev'),
        nextArrow: $('.con05next'),
    })
    
    //슬릭버튼
    
    $('.con05prev').hide();
    
    $('.con05mainSlider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      if(nextSlide>0){
          $('.con05prev').fadeIn(200);
      }else{
         $('.con05prev').fadeOut(200);
      }
    });
    
    $('.con05mainSlider').on('afterChange', function(event, slick, currentSlide){
      if(currentSlide==1){
          $('.con05next').fadeOut(200);
      }else{
          $('.con05next').fadeIn(200);          
      }
    });
    
    
    
    
    //con06mainSlider 슬릭구현
    $('.con06mainSlider').slick({
        dots:true,
        infinite:false,
        prevArrow: $('.con06prev'),
        nextArrow: $('.con06next'),
    });
    
    //슬릭버튼
    
    $('.con06prev').hide();
    
    $('.con06mainSlider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      if(nextSlide>0){
          $('.con06prev').fadeIn(200);
      }else{
         $('.con06prev').fadeOut(200);
      }
    });
    
    $('.con06mainSlider').on('afterChange', function(event, slick, currentSlide){
      if(currentSlide==3){
          $('.con06next').fadeOut(200);
      }else{
          $('.con06next').fadeIn(200);          
      }
    });
    
   
    
    
    
    
    
    
    


});