/* ===========================================================
 * jquery-onepage-scroll.js v1.3.1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Create an Apple-like website that let user scroll
 * one page at a time
 *
 * Credit: Eike Send for the awesome swipe event
 * https://github.com/peachananr/onepage-scroll
 *
 * License: GPL v3
 *
 * ========================================================== */

!function ($) {

    var defaults = {
        sectionContainer: "section",
        easing: "ease",
        animationTime: 1000,
        pagination: true,
        updateURL: false,
        keyboard: true,
        beforeMove: null,
        afterMove: null,
        loop: true,
        responsiveFallback: false,
        direction: 'vertical'
    };

    /*------------------------------------------------*/
    /*  Credit: Eike Send for the awesome swipe event */
    /*------------------------------------------------*/

    $.fn.swipeEvents = function () {
        return this.each(function () {

            var startX,
                startY,
                $this = $(this);

            $this.bind('touchstart', touchstart);

            function touchstart(event) {
                var touches = event.originalEvent.touches;
                if (touches && touches.length) {
                    startX = touches[0].pageX;
                    startY = touches[0].pageY;
                    $this.bind('touchmove', touchmove);
                }
            }

            function touchmove(event) {
                var touches = event.originalEvent.touches;
                if (touches && touches.length) {
                    var deltaX = startX - touches[0].pageX;
                    var deltaY = startY - touches[0].pageY;

                    if (deltaX >= 50) {
                        $this.trigger("swipeLeft");
                    }
                    if (deltaX <= -50) {
                        $this.trigger("swipeRight");
                    }
                    if (deltaY >= 50) {
                        $this.trigger("swipeUp");
                    }
                    if (deltaY <= -50) {
                        $this.trigger("swipeDown");
                    }
                    if (Math.abs(deltaX) >= 50 || Math.abs(deltaY) >= 50) {
                        $this.unbind('touchmove', touchmove);
                    }
                }
            }

        });
    };


    $.fn.onepage_scroll = function (options) {
        var settings = $.extend({}, defaults, options),
            el = $(this),
            sections = $(settings.sectionContainer)
        total = sections.length,
            status = "off",
            topPos = 0,
            leftPos = 0,
            lastAnimation = 0,
            quietPeriod = 500,
            paginationList = "";

        $.fn.transformPage = function (settings, pos, index) {
            if (typeof settings.beforeMove == 'function') settings.beforeMove(index);

            // Just a simple edit that makes use of modernizr to detect an IE8 browser and changes the transform method into
            // an top animate so IE8 users can also use this script.
            if ($('html').hasClass('ie8')) {
                if (settings.direction == 'horizontal') {
                    var toppos = (el.width() / 100) * pos;
                    $(this).animate({left: toppos + 'px'}, settings.animationTime);
                } else {
                    var toppos = (el.height() / 100) * pos;
                    $(this).animate({top: toppos + 'px'}, settings.animationTime);
                }
            } else {
                $(this).css({
                    "-webkit-transform": ( settings.direction == 'horizontal' ) ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
                    "-webkit-transition": "all " + settings.animationTime + "ms " + settings.easing,
                    "-moz-transform": ( settings.direction == 'horizontal' ) ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
                    "-moz-transition": "all " + settings.animationTime + "ms " + settings.easing,
                    "-ms-transform": ( settings.direction == 'horizontal' ) ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
                    "-ms-transition": "all " + settings.animationTime + "ms " + settings.easing,
                    "transform": ( settings.direction == 'horizontal' ) ? "translate3d(" + pos + "%, 0, 0)" : "translate3d(0, " + pos + "%, 0)",
                    "transition": "all " + settings.animationTime + "ms " + settings.easing
                });
            }
            $(this).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function (e) {
                if (typeof settings.afterMove == 'function') settings.afterMove(index);
            });
        }

        $.fn.moveDown = function () {
            var el = $(this)
            index = $(settings.sectionContainer + ".active").data("index");
            current = $(settings.sectionContainer + "[data-index='" + index + "']");
            next = $(settings.sectionContainer + "[data-index='" + (index + 1) + "']");
            if (next.length < 1) {
                if (settings.loop == true) {
                    pos = 0;
                    next = $(settings.sectionContainer + "[data-index='1']");
                } else {
                    return
                }

            } else {
                pos = (index * 100) * -1;
            }
            if (typeof settings.beforeMove == 'function') settings.beforeMove(next.data("index"));
            current.removeClass("active")
            next.addClass("active");
            if (settings.pagination == true) {
                $(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
                $(".onepage-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active");
            }

            $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
            $("body").addClass("viewing-page-" + next.data("index"))

            if (history.replaceState && settings.updateURL == true) {
                var href = window.location.href.substr(0, window.location.href.indexOf('#')) + "#" + (index + 1);
                history.pushState({}, document.title, href);
            }
            el.transformPage(settings, pos, next.data("index"));
        }

        $.fn.moveUp = function () {
            var el = $(this)
            index = $(settings.sectionContainer + ".active").data("index");
            current = $(settings.sectionContainer + "[data-index='" + index + "']");
            next = $(settings.sectionContainer + "[data-index='" + (index - 1) + "']");

            if (next.length < 1) {
                if (settings.loop == true) {
                    pos = ((total - 1) * 100) * -1;
                    next = $(settings.sectionContainer + "[data-index='" + total + "']");
                }
                else {
                    return
                }
            } else {
                pos = ((next.data("index") - 1) * 100) * -1;
            }
            if (typeof settings.beforeMove == 'function') settings.beforeMove(next.data("index"));
            current.removeClass("active")
            next.addClass("active")
            if (settings.pagination == true) {
                $(".onepage-pagination li a" + "[data-index='" + index + "']").removeClass("active");
                $(".onepage-pagination li a" + "[data-index='" + next.data("index") + "']").addClass("active");
            }
            $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
            $("body").addClass("viewing-page-" + next.data("index"))

            if (history.replaceState && settings.updateURL == true) {
                var href = window.location.href.substr(0, window.location.href.indexOf('#')) + "#" + (index - 1);
                history.pushState({}, document.title, href);
            }
            el.transformPage(settings, pos, next.data("index"));
        }

        $.fn.moveTo = function (page_index) {
            current = $(settings.sectionContainer + ".active")
            next = $(settings.sectionContainer + "[data-index='" + (page_index) + "']");
            if (next.length > 0) {
                if (typeof settings.beforeMove == 'function') settings.beforeMove(next.data("index"));
                current.removeClass("active")
                next.addClass("active")
                $(".onepage-pagination li a" + ".active").removeClass("active");
                $(".onepage-pagination li a" + "[data-index='" + (page_index) + "']").addClass("active");
                $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
                $("body").addClass("viewing-page-" + next.data("index"))

                pos = ((page_index - 1) * 100) * -1;

                if (history.replaceState && settings.updateURL == true) {
                    var href = window.location.href.substr(0, window.location.href.indexOf('#')) + "#" + (page_index - 1);
                    history.pushState({}, document.title, href);
                }
                el.transformPage(settings, pos, page_index);
            }
        }

        function responsive() {
            //start modification
            var valForTest = false;
            var typeOfRF = typeof settings.responsiveFallback

            if (typeOfRF == "number") {
                valForTest = $(window).width() < settings.responsiveFallback;
            }
            if (typeOfRF == "boolean") {
                valForTest = settings.responsiveFallback;
            }
            if (typeOfRF == "function") {
                valFunction = settings.responsiveFallback();
                valForTest = valFunction;
                typeOFv = typeof valForTest;
                if (typeOFv == "number") {
                    valForTest = $(window).width() < valFunction;
                }
            }

            //end modification
            if (valForTest) {
                $("body").addClass("disabled-onepage-scroll");
                $(document).unbind('mousewheel DOMMouseScroll MozMousePixelScroll');
                el.swipeEvents().unbind("swipeDown swipeUp");
            } else {
                if ($("body").hasClass("disabled-onepage-scroll")) {
                    $("body").removeClass("disabled-onepage-scroll");
                    $("html, body, .wrapper").animate({scrollTop: 0}, "fast");
                }


                el.swipeEvents().bind("swipeDown", function (event) {
                    if (!$("body").hasClass("disabled-onepage-scroll")) event.preventDefault();
                    el.moveUp();
                }).bind("swipeUp", function (event) {
                    if (!$("body").hasClass("disabled-onepage-scroll")) event.preventDefault();
                    el.moveDown();
                });

                $(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function (event) {
                    event.preventDefault();
                    var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
                    init_scroll(event, delta);
                });
            }
        }


        function init_scroll(event, delta) {
            deltaOfInterest = delta;
            var timeNow = new Date().getTime();
            // Cancel scroll if currently animating or within quiet period
            if (timeNow - lastAnimation < quietPeriod + settings.animationTime) {
                event.preventDefault();
                return;
            }

            if (deltaOfInterest < 0) {
                el.moveDown()
            } else {
                el.moveUp()
            }
            lastAnimation = timeNow;
        }

        // Prepare everything before binding wheel scroll

        el.addClass("onepage-wrapper").css("position", "relative");
        $.each(sections, function (i) {
            $(this).css({
                position: "absolute",
                top: topPos + "%"
            }).addClass("section").attr("data-index", i + 1);


            $(this).css({
                position: "absolute",
                left: ( settings.direction == 'horizontal' )
                    ? leftPos + "%"
                    : 0,
                top: ( settings.direction == 'vertical' || settings.direction != 'horizontal' )
                    ? topPos + "%"
                    : 0
            });

            if (settings.direction == 'horizontal')
                leftPos = leftPos + 100;
            else
                topPos = topPos + 100;


            if (settings.pagination == true) {
                paginationList += "<li><a data-index='" + (i + 1) + "' href='#" + (i + 1) + "'></a></li>"
            }
        });

        el.swipeEvents().bind("swipeDown", function (event) {
            if (!$("body").hasClass("disabled-onepage-scroll")) event.preventDefault();
            el.moveUp();
        }).bind("swipeUp", function (event) {
            if (!$("body").hasClass("disabled-onepage-scroll")) event.preventDefault();
            el.moveDown();
        });

        // Create Pagination and Display Them
        if (settings.pagination == true) {
            if ($('ul.onepage-pagination').length < 1) $("<ul class='onepage-pagination'></ul>").prependTo("body");

            if (settings.direction == 'horizontal') {
                posLeft = (el.find(".onepage-pagination").width() / 2) * -1;
                el.find(".onepage-pagination").css("margin-left", posLeft);
            } else {
                posTop = (el.find(".onepage-pagination").height() / 2) * -1;
                el.find(".onepage-pagination").css("margin-top", posTop);
            }
            $('ul.onepage-pagination').html(paginationList);
        }

        if (window.location.hash != "" && window.location.hash != "#1") {
            init_index = window.location.hash.replace("#", "")

            if (parseInt(init_index) <= total && parseInt(init_index) > 0) {
                $(settings.sectionContainer + "[data-index='" + init_index + "']").addClass("active")
                $("body").addClass("viewing-page-" + init_index)
                if (settings.pagination == true) $(".onepage-pagination li a" + "[data-index='" + init_index + "']").addClass("active");

                next = $(settings.sectionContainer + "[data-index='" + (init_index) + "']");
                if (next) {
                    next.addClass("active")
                    if (settings.pagination == true) $(".onepage-pagination li a" + "[data-index='" + (init_index) + "']").addClass("active");
                    $("body")[0].className = $("body")[0].className.replace(/\bviewing-page-\d.*?\b/g, '');
                    $("body").addClass("viewing-page-" + next.data("index"))
                    if (history.replaceState && settings.updateURL == true) {
                        var href = window.location.href.substr(0, window.location.href.indexOf('#')) + "#" + (init_index);
                        history.pushState({}, document.title, href);
                    }
                }
                pos = ((init_index - 1) * 100) * -1;
                el.transformPage(settings, pos, init_index);
            } else {
                $(settings.sectionContainer + "[data-index='1']").addClass("active")
                $("body").addClass("viewing-page-1")
                if (settings.pagination == true) $(".onepage-pagination li a" + "[data-index='1']").addClass("active");
            }
        } else {
            $(settings.sectionContainer + "[data-index='1']").addClass("active")
            $("body").addClass("viewing-page-1")
            if (settings.pagination == true) $(".onepage-pagination li a" + "[data-index='1']").addClass("active");
        }

        if (settings.pagination == true) {
            $(".onepage-pagination li a").click(function () {
                var page_index = $(this).data("index");
                el.moveTo(page_index);
            });
        }


        $(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function (event) {
            event.preventDefault();
            var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
            if (!$("body").hasClass("disabled-onepage-scroll")) init_scroll(event, delta);
        });


        if (settings.responsiveFallback != false) {
            $(window).resize(function () {
                responsive();
            });

            responsive();
        }

        if (settings.keyboard == true) {
            $(document).keydown(function (e) {
                var tag = e.target.tagName.toLowerCase();

                if (!$("body").hasClass("disabled-onepage-scroll")) {
                    switch (e.which) {
                        case 38:
                            if (tag != 'input' && tag != 'textarea') el.moveUp()
                            break;
                        case 40:
                            if (tag != 'input' && tag != 'textarea') el.moveDown()
                            break;
                        case 32: //spacebar
                            if (tag != 'input' && tag != 'textarea') el.moveDown()
                            break;
                        case 33: //pageg up
                            if (tag != 'input' && tag != 'textarea') el.moveUp()
                            break;
                        case 34: //page dwn
                            if (tag != 'input' && tag != 'textarea') el.moveDown()
                            break;
                        case 36: //home
                            el.moveTo(1);
                            break;
                        case 35: //end
                            el.moveTo(total);
                            break;
                        default:
                            return;
                    }
                }

            });
        }
        return false;
    }


}(window.jQuery);

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=aea0528d3546d0fd1c6ccdda5d69b960)
 * Config saved to config.json and https://gist.github.com/aea0528d3546d0fd1c6ccdda5d69b960
 */
if ("undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var s = t(this), n = s.data("bs.carousel"), o = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e), a = "string" == typeof e ? e : o.slide;
            n || s.data("bs.carousel", n = new i(this, o)), "number" == typeof e ? n.to(e) : a ? n[a]() : o.interval && n.pause().cycle()
        })
    }

    var i = function (e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function (t, e) {
        var i = this.getItemIndex(e), s = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (s && !this.options.wrap)return e;
        var n = "prev" == t ? -1 : 1, o = (i + n) % this.$items.length;
        return this.$items.eq(o)
    }, i.prototype.to = function (t) {
        var e = this, i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function (e, s) {
        var n = this.$element.find(".item.active"), o = s || this.getItemForDirection(e, n), a = this.interval, r = "next" == e ? "left" : "right", l = this;
        if (o.hasClass("active"))return this.sliding = !1;
        var d = o[0], h = t.Event("slide.bs.carousel", {relatedTarget: d, direction: r});
        if (this.$element.trigger(h), !h.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var c = t(this.$indicators.children()[this.getItemIndex(o)]);
                c && c.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {relatedTarget: d, direction: r});
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, n.addClass(r), o.addClass(r), n.one("bsTransitionEnd", function () {
                o.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(p)), a && this.cycle(), this
        }
    };
    var s = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = s, this
    };
    var n = function (i) {
        var s, n = t(this), o = t(n.attr("data-target") || (s = n.attr("href")) && s.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var a = t.extend({}, o.data(), n.data()), r = n.attr("data-slide-to");
            r && (a.interval = !1), e.call(o, a), r && o.data("bs.carousel").to(r), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e, s) {
        return this.each(function () {
            var n = t(this), o = n.data("bs.modal"), a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            o || n.data("bs.modal", o = new i(this, a)), "string" == typeof e ? o[e](s) : a.show && o.show(s)
        })
    }

    var i = function (e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function (e) {
        var s = this, n = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            s.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(s.$element) && (s.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var n = t.support.transition && s.$element.hasClass("fade");
            s.$element.parent().length || s.$element.appendTo(s.$body), s.$element.show().scrollTop(0), s.adjustDialog(), n && s.$element[0].offsetWidth, s.$element.addClass("in"), s.enforceFocus();
            var o = t.Event("shown.bs.modal", {relatedTarget: e});
            n ? s.$dialog.one("bsTransitionEnd", function () {
                s.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : s.$element.trigger("focus").trigger(o)
        }))
    }, i.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function (e) {
        var s = this, n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && n;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function () {
                s.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
        } else e && e()
    }, i.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, i.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var s = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
        return t.fn.modal = s, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
        var s = t(this), n = s.attr("href"), o = t(s.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")), a = o.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(n) && n}, o.data(), s.data());
        s.is("a") && i.preventDefault(), o.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
                s.is(":visible") && s.trigger("focus")
            })
        }), e.call(o, a, this)
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var s = t(this), n = s.data("bs.tab");
            n || s.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
        })
    }

    var i = function (e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
        var e = this.element, i = e.closest("ul:not(.dropdown-menu)"), s = e.data("target");
        if (s || (s = e.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var n = i.find(".active:last a"), o = t.Event("hide.bs.tab", {relatedTarget: e[0]}), a = t.Event("show.bs.tab", {relatedTarget: n[0]});
            if (n.trigger(o), e.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var r = t(s);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function () {
                    n.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function (e, s, n) {
        function o() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
        }

        var a = s.find("> .active"), r = n && t.support.transition && (a.length && a.hasClass("fade") || !!s.find("> .fade").length);
        a.length && r ? a.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), a.removeClass("in")
    };
    var s = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
        return t.fn.tab = s, this
    };
    var n = function (i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        var i, s = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(s)
    }

    function i(e) {
        return this.each(function () {
            var i = t(this), n = i.data("bs.collapse"), o = t.extend({}, s.DEFAULTS, i.data(), "object" == typeof e && e);
            !n && o.toggle && /show|hide/.test(e) && (o.toggle = !1), n || i.data("bs.collapse", n = new s(this, o)), "string" == typeof e && n[e]()
        })
    }

    var s = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, s.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    s.VERSION = "3.3.6", s.TRANSITION_DURATION = 350, s.DEFAULTS = {toggle: !0}, s.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, s.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)return r.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(s.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, s.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(s.TRANSITION_DURATION) : n.call(this)
            }
        }
    }, s.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, s.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, s) {
            var n = t(s);
            this.addAriaAndCollapsedClass(e(n), n)
        }, this)).end()
    }, s.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var n = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = s, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = n, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (s) {
        var n = t(this);
        n.attr("data-target") || s.preventDefault();
        var o = e(n), a = o.data("bs.collapse"), r = a ? "toggle" : n.data();
        i.call(o, r)
    })
}(jQuery), +function (t) {
    "use strict";
    function e(i, s) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, s), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function () {
            var s = t(this), n = s.data("bs.scrollspy"), o = "object" == typeof i && i;
            n || s.data("bs.scrollspy", n = new e(this, o)), "string" == typeof i && n[i]()
        })
    }

    e.VERSION = "3.3.6", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this, i = "offset", s = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", s = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this), n = e.data("target") || e.attr("href"), o = /^#./.test(n) && t(n);
            return o && o.length && o.is(":visible") && [[o[i]().top + s, n]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(), s = this.options.offset + i - this.$scrollElement.height(), n = this.offsets, o = this.targets, a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= s)return a != (t = o[o.length - 1]) && this.activate(t);
        if (a && e < n[0])return this.activeTarget = null, this.clear();
        for (t = n.length; t--;)a != o[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', s = t(i).parents("li").addClass("active");
        s.parent(".dropdown-menu").length && (s = s.closest("li.dropdown").addClass("active")), s.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var s = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = s, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"), e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var i in e)if (void 0 !== t.style[i])return {end: e[i]};
        return !1
    }

    t.fn.emulateTransitionEnd = function (e) {
        var i = !1, s = this;
        t(this).one("bsTransitionEnd", function () {
            i = !0
        });
        var n = function () {
            i || t(s).trigger(t.support.transition.end)
        };
        return setTimeout(n, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery);
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

            setTimeout(function () {
                $('.loader').fadeOut(500);

                $('.navigation, .main-content').show();
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