$(document).ready(function () {
    //mobile navbar
    $(document).ready(function () {
        $('.offcanvas-menu-wrapper li').click(function () {
            $('.offcanvas-menu-wrapper').removeClass('show-offcanvas-menu-wrapper');
            $('.offcanvas-menu-overlay').removeClass('active');
        })
    })
    $('.canvas-open').click(function () {
        $('.offcanvas-menu-wrapper').addClass('show-offcanvas-menu-wrapper');
        $('.offcanvas-menu-overlay').addClass('active');
    });
    $('.canvas-close, .offcanvas-menu-overlay').click(function () {
        $('.offcanvas-menu-wrapper').removeClass('show-offcanvas-menu-wrapper');
        $('.offcanvas-menu-overlay').removeClass('active');
    });


    //Likes and comments
    var likes = 0;
    $('.fa-thumbs-up').click(function () {
        likes = likes + 1;
        localStorage.setItem("likes", likes);
        $('.your-blogs-type-icons span').eq(0).html(localStorage.getItem("likes", likes));
        localStorage.setItem
    })


    // Scroll top icon   
    var scrollTop = $('.scrollTop');
    $(window).scroll(function () {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
            $(scrollTop).css('opacity', '1');

        } else {
            $(scrollTop).css('opacity', '0');
        }

    });

    $(scrollTop).click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    //Close comments bar

    $('.all-comments-close').click(function () {
        $('.all-comments').hide();
    })

    $('.details-likes-comments ul a').eq(1).click(function () {
        $('.all-comments').show();
    })


    //User add blog ==> Tags section

    $('.blogtags input').keyup(function () {
        if ($(this).val().length > 0) {
            $('.add-tag').show();
        }
        else {
            $('.add-tag').hide();
        }
    })

    //   $('.add-tag').click(function(){
    //     $('.tagslist ul').append(`<li><span>${$('.blogtags input').val()}</span><span class="delete-tag"><i class='fas fa-close'></i></span></li>`)
    //   })

    // $('.delete-tag').click(function(){
    //   alert();
    //   $(this).closest("li").remove();
    // })        

})

