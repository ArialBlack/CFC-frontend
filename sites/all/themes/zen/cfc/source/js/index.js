/**
 * Created by v.ratyshniy on 05.05.2016.
 */

(function ($) {
    $(function () {


        var CFC = {};

        CFC.showMenuDropdown = function () {

            $('.navigation').toggleClass('overlay');
            $("#menu_dropdown_content").toggleClass("show");
            $(".menu-icon").toggleClass('active');

        };

        CFC.closeDropdownMenu = function () {
            $('.navigation').removeClass('overlay');
            $("#menu_dropdown_content").removeClass("show");
            $(".menu-icon").removeClass('active');
        };

        CFC.headerBg = function (pageIndex) {
            if (pageIndex == 4) {
                $('.navigation').css('background', 'transparent');
            } else {
                $('.navigation').css('background', 'rgba(255, 255, 255, 0.6)');
            }
        };

        CFC.logoOnNav = function (pageIndex) {
            if (pageIndex == 0) {
                $('.logo-wrapper').css('display', 'none');
            } else {
                $('.logo-wrapper').css('display', 'inline-block');
            }
        };

        CFC.showModal = function (modalId) {
            $('#' + modalId).modal("show");
        };

        CFC.showItem = function (itemClass, currentItem, length) {
            if (currentItem === 1) {
                $(itemClass + '-' + length).hide();
            } else {
                var previous = currentItem - 1;
                $(itemClass + '-' + previous).hide();
            }
            $(itemClass + '-' + currentItem).fadeIn(600);
        };

        CFC.newsSlider = function () {
            var counter = 0;
            var newsArray = $('.carousel>.views-row');
            setInterval(function () {
                if (counter === newsArray.length) {
                    counter = 0;
                }
                CFC.showItem('.carousel>.views-row', counter + 1, newsArray.length);
                counter++;
            }, 4000);
        };

        $(document).ready(function () {

            if ($.cookie('isNew') === undefined) {
                $.cookie('isNew', false, {expires: 1});
            } else {
                $('.loader').css('display', 'none');
                $('.navigation, .top-story-section, .team-section, .services-section, .news-section, .career-section, .contacts-section').show();

                $('#main').css('visibility', 'visible');
            }

            if ($(window).width() > 1240) {
                $(".mobile-top-story-section").remove();
            }
            //LOADER SETTINGS
            setTimeout(function () {
                $('.logo, .line, .line-animated').show();
            }, 4000);

            setTimeout(function () {
                $(".loader").addClass('softly-hidden');
            }, 6600);

            setTimeout(function () {
                $('.navigation, .top-story-section, .team-section, .services-section, .news-section, .career-section, .contacts-section').css('display', 'block');

                $('#main').css('visibility', 'visible');

            }, 7500);

            setTimeout(function () {
                $(".loader").fadeOut(100);
                //   $('.loader').css('transition','all, 0s').css('display', 'none');
            }, 7500);

            $("#menu_dropdown, #menu_icon").on('click', function (e) {
                e.preventDefault();
                CFC.showMenuDropdown();
            });

            $('.navigation').on('click', function (e) {
                if ($(e.target).attr('id') == undefined) {
                    CFC.closeDropdownMenu();
                }
            });

            $('.services-link').on('click', function (e) {
                e.preventDefault();
                var modalId = $(this).attr('data-target');
                setTimeout(function (e) {
                    CFC.showModal(modalId);
                }, 1100)
            });

            $('.trigger-zone').on('mouseenter', function () {
                var popUpId = $(this).attr('id');
                $('#' + popUpId + "_popup").css('tranform', 'translate(0px, -100px').show();
            });
            $('.trigger-zone').on('mouseleave', function () {
                var popUpId = $(this).attr('id');
                $('#' + popUpId + "_popup").hide();
            });

            $('#mobile_menu_icon, #mobile_menu').on('click', function () {
                $('#side_nav_menu').addClass('active');
            });

            $("#close_mobile_menu").on('click', function () {
                $('#side_nav_menu').removeClass('active');
            });

            try {
            var whereAmI = $("#menu_dropdown_content>li.active>a");
            var whereAmIText = whereAmI[0].innerText;
            $("#menu_dropdown").text(whereAmIText);


            var whereAmIMobile = $(".side-nav-menu-list>li.active>a");
            var whereAmIMobileText = whereAmIMobile[0].innerText;

            if (whereAmIMobileText !== undefined && whereAmIMobileText.length !== 0) {
                $("#mobile_menu").text(whereAmIMobileText);
            }

            var activeNodes = $(".side-nav-menu-list>li.active");
            activeNodes[0].style.display = 'none';
            var activeMobileNodes = $("#menu_dropdown_content>li.active");
            activeMobileNodes[0].style.display = 'none';
            } catch (e) {
                console.log(e);
            }

            CFC.newsSlider();

            $.scrollIt({
                upKey: 38,             // key code to navigate to the next section
                downKey: 40,           // key code to navigate to the previous section
                easing: 'easeInBounce',      // the easing function for animation
                scrollTime: 1000,       // how long (in ms) the animation takes
                activeClass: 'active', // class given to the active nav element
                onPageChange: function (pageIndex) {
                    CFC.headerBg(pageIndex);
                    CFC.logoOnNav(pageIndex);
                },    // function(pageIndex) that is called when page is changed
                topOffset: 0           // offste (in px) for fixed top navigation
            });


            $(".field-item").niceScroll({
                "cursorwidth": '2px',
                "cursorcolor": "#374e73",
                "cursorborder": "0 none",
                "cursorborderradius": "6px"
            });
	
	
	        var elems = $(".team-content-wrapper .view-id-team .views-row");
	        var wrapper = $('<div class="slide" />');
	        var pArrLen = elems.length;
	        for (var i = 0;i < pArrLen;i+=2){
		        elems.filter(':eq('+i+'),:eq('+(i+1)+')').wrapAll(wrapper);
	        };
	        $('.team-content-wrapper .view-id-team .view-content').addClass('team-carousel');
            $('.team-carousel').owlCarousel({
	            center: false,
	            items: 3,
	            loop: true,
	            margin:5,
	            slideBy: 1,
	            dots: false,
	            navText: ['&#60;', '&#62;'],
	            nav: true,
	            navContainer: 'team-carousel-container',
	            navElement: 'span',
	            navClass: ['team-carousel-nav-arrow left', 'team-carousel-nav-arrow right']
            });
        });
    });
}(jQuery));