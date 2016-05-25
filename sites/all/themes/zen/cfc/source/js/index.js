/**
 * Created by v.ratyshniy on 05.05.2016.
 */

(function ($) {
    $(function () {


        var CFC = {};
        CFC.showMenuDropdown = function () {
            $("#menu_dropdown_content").toggleClass("show");
            $(".menu-icon").toggleClass('active');
        };

        CFC.hideMenuDropdown = function () {
            $("#menu_dropdown_content").removeClass("show");
            $(".menu-icon").toggleClass('active');
        };

        CFC.showMenuDropdownEnterEvent = function () {
            $("#menu_dropdown_content").addClass("show");
            $(".menu-icon").toggleClass('active');
        };

        $(document).ready(function () {
            if (!$('.loader').css('display')) {
                $('.navigation, #main').show();
            }

            setTimeout(function () {
                $('.loader').fadeOut(500);

                $('.navigation, #main').show();
            }, 3800);

            setTimeout(function () {

                $('.line').css('opacity', '1');
            }, 8000);


            $("#menu_dropdown, .menu-icon").on('click', function () {
                CFC.showMenuDropdown()
            });

            $("#menu_dropdown, .menu-icon").on('mouseenter', function () {
                CFC.showMenuDropdownEnterEvent()
            });
            $("#menu_dropdown_content").on('mouseleave', function () {
                CFC.hideMenuDropdown()
            });


            $.scrollIt({
                upKey: 38,             // key code to navigate to the next section
                downKey: 40,           // key code to navigate to the previous section
                easing: 'easeInBounce',      // the easing function for animation
                scrollTime: 1000,       // how long (in ms) the animation takes
                activeClass: 'active', // class given to the active nav element
                onPageChange: null,    // function(pageIndex) that is called when page is changed
                topOffset: 0           // offste (in px) for fixed top navigation
            });


            //$(".main").onepage_scroll({
            //    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
            //    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
            //                                     // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
            //    animationTime: 600,             // AnimationTime let you define how long each section takes to animate
            //    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
            //    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
            //    beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
            //    afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
            //    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
            //    keyboard: true,                  // You can activate the keyboard controls
            //    responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
            //    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
            //    // the browser's width is less than 600, the fallback will kick in.
            //    direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
            //});

        });


    });
}(jQuery));