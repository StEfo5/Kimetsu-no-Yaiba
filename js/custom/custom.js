/*========================================== MASTER JAVASCRIPT ===================================================================

	Project     :	EVENTS TEMPLATES
	Version     :	1.0
	Last Change : 	01/07/2017
	Primary Use :   EVENTS TEMPLATES

=================================================================================================================================*/
$(document).on('ready', function() {
    "use strict"; //Start of Use Strict
    var menu_bar = $('.navbar-default');
    var menu_li = $('.navbar-default li a');
    var collapse = $('.navbar-collapse');
    var navbar_header = $('.navbar_header button');
    var top_nav = $('#top-nav');
    var menu_scroll = $('.header-menu-1');

    if(top_nav.length) {
			var x = top_nav.offset().top;
			if (x > 50) {
				top_nav.fadeIn();
			}
			else {
				top_nav.fadeOut();
			}
			$(document).on('scroll',function() {
				var y = $(this).scrollTop();
					if (y > 50) {
						top_nav.fadeIn();
					}
					else	{
						top_nav.fadeOut();
					}
			});
		}

    //RESPONSIVE MENU SHOW AND HIDE FUNCTION
    if (menu_li.length) {
        menu_li.on("click", function(event) {
            collapse.slideToggle();
        });
        $('.navbar-default .navbar-toggle').on("click", function(e) {
            collapse.slideToggle();
        });
    }

	//MENU BAR SMOOTH SCROLLING FUNCTION
	var menu_list=$('.navbar-nav');
		if(menu_list.length) {
			menu_list.on( "click", ".pagescroll", function( event ) {					
					event.preventDefault();	
					var hash_tag= $(this).attr('href');					
					if($(hash_tag).length) {
                            $('html, body').animate({
                            scrollTop: $(hash_tag).offset().top - 50
                        }, 2000);
                    } 
				return false;
			});	
		}
		
  
	//GALLERY POPUP
	 var gallery = $('.popup-gallery');
		if (gallery.length) {
		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}
			}
		});
	}

   				

    //CONTACT FORM VALIDATION	
    if ($('.contact-form').length) {
        $('.contact-form').each(function() {
            $(this).validate({
                errorClass: 'error',
                submitHandler: function(form) {
                    $.ajax({
                        type: "POST",
                        url: "mail/mail.php",
                        data: $(form).serialize(),
                        success: function(data) {
                            if (data) {
                                $('.sucessMessage').html('Mail Sent Successfully !');
                                $('.sucessMessage').show();
                                $('.sucessMessage').delay(3000).fadeOut();
                            } else {
                                $('.failMessage').html(data);
                                $('.failMessage').show();
                                $('.failMessage').delay(3000).fadeOut();
                            }
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            $('.failMessage').html(textStatus);
                            $('.failMessage').show();
                            $('.failMessage').delay(3000).fadeOut();
                        }
                    });
                }
            });
        });
    }
	
	//Accordion	
	var accord = $(".accord");
		if(accord.length){
		  accord.each(function(){
			var all_panels = $(this).find('.accord-ans').hide();
			var all_titles = $(this).find('.accord-title');
			$(this).find('.accord-ans.active').slideDown();

			all_titles.on("click", function() {
			  var acc_title = $(this);
			  var acc_inner =  acc_title.next();

			  if(!acc_inner.hasClass('active')){
				 all_panels.removeClass('active').slideUp();
				 acc_inner.addClass('active').slideDown();
				 all_titles.removeClass('active');
				 acc_title.addClass('active');
			  } else {
				all_panels.removeClass('active').slideUp();
				all_titles.removeClass('active');
			  }
			});
		  });
		 
		} 
		
		//HEADER POPUP			
		var form = $(".popup-gmaps");
			if(form.length){
			$('.popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
			});
		}
		
			
		//TAB CONTAINER
		var list = $(".list-group-item");
		if(list.length){
			list.on("click", function(event) {		
			event.preventDefault();
			$(this).siblings('a.active').removeClass("active");
			$(this).addClass("active");
			var index = $(this).index();
			$(".tab-content").removeClass("active");
			$(".tab-content").eq(index).addClass("active");
		});
		
		}
    return false;
    // End of use strict
});