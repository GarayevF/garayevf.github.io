$(document).ready(function() {
    var pathParts = window.location.pathname.split('/')
    var thirdPart = pathParts.length >=3

    console.log(window.location.pathname.split('/')[1].toLowerCase());

    if(( window.location.pathname.split('/')[1].toLowerCase() == 'profile.html')){
        $('#phone').inputmask("\\+\\9\\9\\4 (99) 999 99 99", { "escapeChar": "\\" });
        $('#phone2').inputmask("\\+\\9\\9\\4 (99) 999 99 99", { "escapeChar": "\\" });
    }

    $(document).on('click', '.tab-btn, .type-box,', function() {

        if ($(this).hasClass('tab-btn')){
            if(!$(this).hasClass('active')){
                $('.tab-btn').removeClass('active')
                $(this).addClass('active')

                let a = $(this).attr('data-origin')
                $('.tab-layout').removeClass('active')

                $(`[data-target="${a}"]`).addClass('active')
            }
        }

        if ($(this).hasClass('type-box')){
            if(!$(this).hasClass('selected-box')){
                $('.type-box').removeClass('selected-box')
                $(this).addClass('selected-box')

                let a = $(this).attr('data-origin')
                $('.products-main-div').removeClass('active')

                $(`[data-target="${a}"]`).addClass('active')
            }
        }
        
    })


    
    
})