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


        CFC.headerBg = function (pageIndex) {
            if (pageIndex == 4) {
                $('.navigation').css('background', 'transparent');
            } else {
                $('.navigation').css('background', 'rgba(255, 255, 255, 0.6)');
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
            if ($(window).width() > 1279) {
                $(".mobile-top-story-section").remove();
            }
            //LOADER SETTINGS
            setTimeout(function () {
                $('.logo, .line, .line-animated').show();
            }, 4000);
            if ($('.loader').css('display') == 'none') {
                $('.navigation, .team-section, .services-section, .news-section, .career-section, .contacts-section').show();

                $('#main').css('visibility', 'visible');
            }

            setTimeout(function () {
                $(".loader").addClass('softly-hidden');
            }, 8600);

            setTimeout(function () {
                $('.navigation, .top-story-section, .team-section, .services-section, .news-section, .career-section, .contacts-section').css('display', 'block');

                $('#main').css('visibility', 'visible');

            }, 9400);

            setTimeout(function () {
                $(".loader").fadeOut(100);
                //   $('.loader').css('transition','all, 0s').css('display', 'none');
            }, 9400);

            $("#menu_dropdown, .menu-icon").on('click', function () {
                CFC.showMenuDropdown()
            });

            $("#menu_dropdown_content").on('mouseleave', function () {
                CFC.hideMenuDropdown()
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
            CFC.newsSlider();

            $.scrollIt({
                upKey: 38,             // key code to navigate to the next section
                downKey: 40,           // key code to navigate to the previous section
                easing: 'easeInBounce',      // the easing function for animation
                scrollTime: 1000,       // how long (in ms) the animation takes
                activeClass: 'active', // class given to the active nav element
                onPageChange: function (pageIndex) {
                    CFC.headerBg(pageIndex);
                },    // function(pageIndex) that is called when page is changed
                topOffset: 0           // offste (in px) for fixed top navigation
            });

        });
    });
}(jQuery));