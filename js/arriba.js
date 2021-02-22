Window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.ir-arriba')
        .classList.add('show');
        
    }else{
        document.querySelector('.ir-arriba')
            .classList.remove('show');
    }
}

document.querySelector('.ir-arriba').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}); 

/*

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});

*/
/*
$(document).ready(function () {
    $('.ir-arriba').hide();
    $('.ir-arriba').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000)
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() & gt; 200) {
            $('.ir-arriba').fadeIn();
        } else {
            $('.ir-arriba').fadeOut();
        }
    });
});

*/
  
  
  
  
  
  
  
  
  
  
  
  
  