window.alert=function(s){
   $('.not-global-body').removeClass('hide');
   $('.not-text').text(s);
   return;
};

function show(item){
    hideall();
    $(item).removeClass('hide');
}

function hideall(){
    $(".authorization").addClass('hide');
    $(".checkin").addClass('hide');
    $(".modal-commun").addClass('hide');
}

function  clear_window(){
    $('.error').text('');
}




$(document).ready(function () {
    
$('a.buy').on('click', function(e) {
    e.preventDefault();
    $('.pre-reg').hide();
    $('.buy-form').show();
    $('.title > h1').html('Во время оплаты указывайте<br>настоящий e-mail');
})  

$(function(){
 
    var elem = $('.am');
    var top = $(this).scrollTop();
     
    if(top > 67){
        elem.removeClass('hide');
    }           
     
    $(window).scroll(function(){
        top = $(this).scrollTop();
         
        if (top > 67) {
            elem.removeClass('hide');
        } else {
            elem.addClass('hide');
        }
    });
 
});

$(".price-block-item").hover(function () {
        $(".price-block-item").removeClass('act');
        $(this).addClass('act');
    });
    
    
    $(".not-btn:not(.success)").click(function () {
        $('.not-global-body').addClass('hide');
    });
    
    $(".not-btn.success").click(function () {
        $('.not-global-body2').addClass('hide');
    });
    
    $(".txt-ann").click(function () {
        switch ($(this).text()) {
            case 'Для бизнеса':
              $('.bg-b3').removeClass('forself');
              $('.bg-b3').addClass('forbiz');
              $('.wrap-forbiz').removeClass('hide');
              $('.wrap-forself').addClass('hide');
              break;
            case 'Для себя':
              $('.bg-b3').removeClass('forbiz');
              $('.bg-b3').addClass('forself');
              $('.wrap-forbiz').addClass('hide');
              $('.wrap-forself').removeClass('hide');
              break;
          }
    });
    
    $("#rules_href").click(function () {
        $('.not-global-body2').removeClass('hide');
    });
    
    $(".close-btn2").click(function () {
        $('.not-global-body2').addClass('hide');
    });
    
    $(".point").click(function () {
        var div = $(".slider-global");
        var w = div.prop('scrollWidth') / 3;
        var wh = parseInt($(this).attr('data')) - 1;
        div.animate({scrollLeft:w*wh},'slow');
        //div.scrollLeft(w*wh);
        $('.point').removeClass('act');
        $(this).addClass('act');
    });
    
    $(document).click(function(event) {
        
       // if ($(event.target).closest(".not-body").length && $(event.target).closest(".not-global-body")) return;
       // $('.not-global-body').addClass('hide');

        event.stopPropagation();
    });
$(".menu-item").click(function () {
        switch($(this).text())
        {
            case 'Возможности':
                $('body').animate({ scrollTop: $('#bl1').offset().top - 85 }, 800);
                break;
            case 'Как это работает':
                $('body').animate({ scrollTop: $('.b1').offset().top - 85 }, 800);
                break;
            case 'Эффективность':
                $('body').animate({ scrollTop: $('.bq3').offset().top - 85 }, 800);
                break;
            case 'Отзывы':
                $('body').animate({ scrollTop: $('.bq4').offset().top - 85 }, 800);
                break;
            case 'Вопросы':
                $('body').animate({ scrollTop: $('#bl6').offset().top - 85 }, 800);
                break;
        }
    });
    
    $(".top-block-border").click(function () {
        $('.top-block-border').parent().removeClass('act');
        $(this).parent().addClass('act');
    });
    
    $("a.navigation-a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        
            $('body').animate({ scrollTop: destination }, 1100);
        return false; 
    });
    
    $("a").click(function () {
    var f = $(this).attr("href").substr(0,1);
    if (f == '#'){
        return false;
    }
    });
    
});

 function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

$(document).ready(function(){
 
$(window).scroll(function(){
if ($(this).scrollTop() > 100) {
$('.scrollup').fadeIn();
} else {
$('.scrollup').fadeOut();
}
});
 
$('.scrollup').click(function(){
$("html, body").animate({ scrollTop: 0 }, 600);
return false;
});
 
});


  $(document).ready(function()
        {
        
          $(".slider").each(function ()
          {
            var count = 0;
            var obj = $(this);
            $(obj).append("<div class='nav'></div>");
            
            $(obj).find("li").each(function ()
            {
              count++;
              $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>");
              $(this).addClass("slider"+$(this).index());
            });

            $(obj).find("span").first().addClass("on");
            if(count < 2){
                $(obj).find("span").first().hide();
            }
          });
        });
      function sliderJS (obj, sl) // slider function
      {
        var ul = $(sl).find("ul");
        var bl = $(sl).find("li.slider"+obj);
        var step = $(bl).width();
        $(ul).animate({marginLeft: "-"+step*obj}, 500);
      }

      $(document).on("click", ".slider .nav span", function() // slider click navigate
      {
        var sl = $(this).closest(".slider");
        $(sl).find("span").removeClass("on");
        $(this).addClass("on");
        var obj = $(this).attr("rel");
        sliderJS(obj, sl);
        return false;
      });
    function moveToNext()
        {
            var curIndex = parseInt( $(".slider .nav span.on").attr("rel") );
            var totalSlides = $(".slider .nav span").length;
            var nextIndex = curIndex + 1;

            if( nextIndex >= totalSlides )
            {
                nextIndex = 0;
            }//if

            $(".slider .nav span.on").removeClass("on");
            $(".slider .nav span").eq( nextIndex ).addClass("on").trigger("click");

        }
    setInterval(moveToNext, 5000);