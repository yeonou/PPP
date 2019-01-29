$(function(){
    
    /* Main Slide */
    var slide = $('.main_slide ul').children('li');
    var slideNum = slide.length;
    var maxIndex = slideNum-1;
    var currentNum = 0;
    var newNum = currentNum+1;
    function slideMove (){
        newNum = currentNum+1;
        
        if(newNum>maxIndex){
            newNum = 0;
        }
             
        slide.eq(currentNum).stop().fadeOut(400);
        slide.eq(newNum).hide();
        slide.eq(newNum).stop().fadeIn(400,function(){
            currentNum = newNum;
        });
        
        $('.pagenation a').filter('.on').removeClass('on');
        $('.pagenation a').eq(newNum).addClass('on');
    }
    var timer = setInterval(slideMove,8000);
    
    $('.pagenation a').on('click',function(event){
        event.preventDefault();
        clearInterval(timer);
        
        newNum = $(this).index();
        $('.pagenation a').filter('.on').removeClass('on');
        $(this).addClass('on');
        
        slide.eq(currentNum).stop().fadeOut(400);
        slide.eq(newNum).stop().fadeIn(400,function(){
            currentNum = newNum;            
        });
        timer = setInterval(slideMove,8000);
    });
    
    
    /* Toggle Menu */
    
    $('#toggle_btn').on('click',function(event){
        event.preventDefault();
        if($(this).attr('class') == 'active'){
            $(this).removeClass('active');
            
            $('#border').addClass('active').fadeOut(1000);
			$('footer').addClass('active').fadeOut(1000);
			$(this).find('span').removeClass('btn_g');			
        }else{
            $(this).addClass('active');
            
            $('#border').removeClass('active').fadeIn(1000);
			$('footer').removeClass('active').fadeIn(1000);
			$(this).find('span').addClass('btn_g');			
        }
    });
    
    /* Form Select */
    
   var selectVal 
    $('select').on('change', function(){        
        var selectVal = $(this).find("option[value='" + $(this).val() + "']").text()
        console.log(selectVal);
        $(this).next('p').text(selectVal);
        console.log($(this).next('p'));
        /*console.log($('#budget option:selected').text());*/
    });
    
   
    /*$('#budget').on('change', function(){
        console.log($(this).find("option[value='" + $(this).val() + "']").text());
    });*/
});