!function (e, n) {
    "use strict";
    var t = {
        sectionContainer: "section",
        easing: "ease",
        animationTime: 1e3,
        pagination: !0,
        paginationTarget: "body",
        updateURL: !1,
        touchEnabled: !0,
        mousewheelEnabled: !0,
        keyboard: !0,
        beforeMove: null,
        afterMove: null,
        loop: !1
    };
    e.fn.swipeEvents = function () {
        return this.each(function () {
            function n(e) {
                var n = e.originalEvent.touches;
                n && n.length && (a = n[0].pageX, i = n[0].pageY, o.bind("touchmove", t)), e.preventDefault()
            }

            function t(e) {
                var n = e.originalEvent.touches;
                if (n && n.length) {
                    var r = a - n[0].pageX, s = i - n[0].pageY, l = 50;
                    r >= l && o.trigger("swipeLeft"), -l >= r && o.trigger("swipeRight"), s >= l && o.trigger("swipeUp"), -l >= s && o.trigger("swipeDown"), (Math.abs(r) >= l || Math.abs(s) >= l) && o.unbind("touchmove", t)
                }
                e.preventDefault()
            }

            var a, i, o = e(this);
            o.bind("touchstart", n)
        })
    }, e.fn.onepage_scroll = function (a) {
        function i(e) {
            c.removeClass("active").filter("[data-index='" + e + "']").addClass("active")
        }

        function o(e) {
            g[0].className = g[0].className.replace(/\bviewing-page-\d.*?\b/g, ""), g.addClass("viewing-page-" + e)
        }

        function r(e) {
            if (window.history.replaceState && u.updateURL === !0) {
                var n = window.location.href.substr(0, window.location.href.indexOf("#")) + "#" + e;
                window.history.pushState({}, window.document.title, n)
            }
        }

        function s() {
            return p.filter(".active").data("index")
        }

        function l() {
            return p.filter(".active")
        }

        function d(e) {
            return p.filter("[data-index='" + e + "']")
        }

        function f(e, n) {
            var t = n, a = (new Date).getTime();
            return a - h < b + u.animationTime ? void e.preventDefault() : (0 > t ? v.moveDown() : v.moveUp(), void(h = a))
        }

        var c, u = e.extend({}, t, a), v = e(this), p = e(u.sectionContainer), g = e("body"), m = p.length, w = 0, h = 0, b = 500, T = "";
        if (v.bind("beforeMove", function (e, n, t) {
                u.pagination === !0 && i(t), o(n), r(n), "function" == typeof u.beforeMove && u.beforeMove(n, t)
            }), v.bind("afterMove", function (e, n, t) {
                "function" == typeof u.afterMove && u.afterMove(n, t)
            }), e.fn.transformPage = function (e, t, a, i) {
                v.trigger("beforeMove", [a, i]), n.csstransitions ? v.css({
                    "-webkit-transform": "translate3d(0, " + t + "%, 0)",
                    "-webkit-transition": "all " + e.animationTime + "ms " + e.easing,
                    "-moz-transform": "translate3d(0, " + t + "%, 0)",
                    "-moz-transition": "all " + e.animationTime + "ms " + e.easing,
                    "-ms-transform": "translate3d(0, " + t + "%, 0)",
                    "-ms-transition": "all " + e.animationTime + "ms " + e.easing,
                    transform: "translate3d(0, " + t + "%, 0)",
                    transition: "all " + e.animationTime + "ms " + e.easing
                }).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function () {
                    v.trigger("afterMove", [a, i])
                }) : v.animate({top: t + "%"}, e.animationTime, "swing", function () {
                    v.trigger("afterMove", [a, i])
                })
            }, e.fn.moveTo = function (e) {
                var n, t, a, i;
                n = s(), n !== e && (u.loop === !0 && (e = (e - 1 + m) % m + 1), a = d(e), a.length && (i = 100 * (1 - e), t = l(), t.removeClass("active"), a.addClass("active"), v.transformPage(u, i, n, e)))
            }, e.fn.move = function (e) {
                var n = p.filter(".active").data("index");
                "up" === e ? n -= 1 : n += 1, v.moveTo(n)
            }, e.fn.moveDown = function () {
                v.move("down")
            }, e.fn.moveUp = function () {
                v.move("up")
            }, v.addClass("onepage-wrapper").css("position", "relative"), e.each(p, function (n) {
                e(this).css({
                    position: "absolute",
                    top: w + "%"
                }).addClass("section").attr("data-index", n + 1), w += 100, u.pagination === !0 && (T += "<li><a data-index='" + (n + 1) + "' href='#" + (n + 1) + "'></a></li>")
            }), u.touchEnabled === !0 && v.swipeEvents().bind("swipeDown", function () {
                v.moveUp()
            }).bind("swipeUp", function () {
                v.moveDown()
            }), u.pagination === !0) {
            e("<ul class='onepage-pagination'>" + T + "</ul>").prependTo(u.paginationTarget);
            var M = v.find(".onepage-pagination").height() / 2 * -1;
            v.find(".onepage-pagination").css("margin-top", M), c = e(".onepage-pagination li a")
        }
        if ("" !== window.location.hash && "#1" !== window.location.hash) {
            var D = window.location.hash.replace("#", ""), E = p.filter("[data-index='" + D + "']");
            E && r(D), v.moveTo(D)
        } else d(1).addClass("active"), o(1), u.pagination === !0 && i(1);
        return u.pagination === !0 && c.click(function (n) {
            var t = e(this).data("index");
            e(this).hasClass("active") || v.moveTo(t), u.updateURL === !1 && n.preventDefault()
        }), u.mousewheelEnabled === !0 && v.bind("mousewheel DOMMouseScroll", function (e) {
            if ("SELECT" !== e.target.tagName) {
                e.preventDefault();
                var n = e.originalEvent.wheelDelta || -e.originalEvent.detail;
                f(e, n)
            }
        }), u.keyboard === !0 && e(window.document).keydown(function (e) {
            var n = e.target.tagName.toLowerCase();
            switch (e.which) {
                case 38:
                    "input" !== n && "textarea" !== n && v.moveUp();
                    break;
                case 40:
                    "input" !== n && "textarea" !== n && v.moveDown();
                    break;
                default:
                    return
            }
            e.preventDefault()
        }), this
    }
}(jQuery, window.Modernizr);
!function (t) {
    "use strict";
    var a = {
        upKey: 38,
        downKey: 40,
        easing: "linear",
        scrollTime: 600,
        activeClass: "active",
        onPageChange: null,
        topOffset: 0
    };
    t.scrollIt = function (o) {
        var e = t.extend(a, o), n = 0, l = t("[data-scroll-index]:last").attr("data-scroll-index"), s = function (a) {
            if (!(0 > a || a > l)) {
                var o = t("[data-scroll-index=" + a + "]").offset().top + e.topOffset + 1;
                t("html,body").animate({scrollTop: o, easing: e.easing}, e.scrollTime)
            }
        }, r = function (a) {
            var o = t(a.target).closest("[data-scroll-nav]").attr("data-scroll-nav") || t(a.target).closest("[data-scroll-goto]").attr("data-scroll-goto");
            s(parseInt(o))
        }, c = function (a) {
            var o = a.which;
            return !t("html,body").is(":animated") || o != e.upKey && o != e.downKey ? o == e.upKey && n > 0 ? (s(parseInt(n) - 1), !1) : o == e.downKey && l > n ? (s(parseInt(n) + 1), !1) : !0 : !1
        }, i = function (a) {
            e.onPageChange && a && n != a && e.onPageChange(a), n = a, t("[data-scroll-nav]").removeClass(e.activeClass), t("[data-scroll-nav=" + a + "]").addClass(e.activeClass)
        }, d = function () {
            var a = t(window).scrollTop(), o = t("[data-scroll-index]").filter(function (o, n) {
                return a >= t(n).offset().top + e.topOffset && a < t(n).offset().top + e.topOffset + t(n).outerHeight()
            }), n = o.first().attr("data-scroll-index");
            i(n)
        };
        t(window).on("scroll", d).scroll(), t(window).on("keydown", c), t("body").on("click", "[data-scroll-nav], [data-scroll-goto]", function (t) {
            t.preventDefault(), r(t)
        })
    }
}(jQuery);
if ("undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
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
        var i = !1, o = this;
        t(this).one("bsTransitionEnd", function () {
            i = !0
        });
        var n = function () {
            i || t(o).trigger(t.support.transition.end)
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
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var i = t(this), n = i.data("bs.alert");
            n || i.data("bs.alert", n = new o(this)), "string" == typeof e && n[e].call(i)
        })
    }

    var i = '[data-dismiss="alert"]', o = function (e) {
        t(e).on("click", i, this.close)
    };
    o.VERSION = "3.3.6", o.TRANSITION_DURATION = 150, o.prototype.close = function (e) {
        function i() {
            a.detach().trigger("closed.bs.alert").remove()
        }

        var n = t(this), s = n.attr("data-target");
        s || (s = n.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t(s);
        e && e.preventDefault(), a.length || (a = n.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i())
    };
    var n = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function () {
        return t.fn.alert = n, this
    }, t(document).on("click.bs.alert.data-api", i, o.prototype.close)
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.button"), s = "object" == typeof e && e;
            n || o.data("bs.button", n = new i(this, s)), "toggle" == e ? n.toggle() : e && n.setState(e)
        })
    }

    var i = function (e, o) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
    };
    i.VERSION = "3.3.6", i.DEFAULTS = {loadingText: "loading..."}, i.prototype.setState = function (e) {
        var i = "disabled", o = this.$element, n = o.is("input") ? "val" : "html", s = o.data();
        e += "Text", null == s.resetText && o.data("resetText", o[n]()), setTimeout(t.proxy(function () {
            o[n](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function () {
        var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var o = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function () {
        return t.fn.button = o, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (i) {
        var o = t(i.target);
        o.hasClass("btn") || (o = o.closest(".btn")), e.call(o, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.carousel"), s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e), a = "string" == typeof e ? e : s.slide;
            n || o.data("bs.carousel", n = new i(this, s)), "number" == typeof e ? n.to(e) : a ? n[a]() : s.interval && n.pause().cycle()
        })
    }

    var i = function (e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
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
        var i = this.getItemIndex(e), o = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (o && !this.options.wrap)return e;
        var n = "prev" == t ? -1 : 1, s = (i + n) % this.$items.length;
        return this.$items.eq(s)
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
    }, i.prototype.slide = function (e, o) {
        var n = this.$element.find(".item.active"), s = o || this.getItemForDirection(e, n), a = this.interval, r = "next" == e ? "left" : "right", l = this;
        if (s.hasClass("active"))return this.sliding = !1;
        var h = s[0], d = t.Event("slide.bs.carousel", {relatedTarget: h, direction: r});
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(s)]);
                p && p.addClass("active")
            }
            var c = t.Event("slid.bs.carousel", {relatedTarget: h, direction: r});
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, n.addClass(r), s.addClass(r), n.one("bsTransitionEnd", function () {
                s.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger(c)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(c)), a && this.cycle(), this
        }
    };
    var o = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = o, this
    };
    var n = function (i) {
        var o, n = t(this), s = t(n.attr("data-target") || (o = n.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var a = t.extend({}, s.data(), n.data()), r = n.attr("data-slide-to");
            r && (a.interval = !1), e.call(s, a), r && s.data("bs.carousel").to(r), i.preventDefault()
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
    function e(e) {
        var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(o)
    }

    function i(e) {
        return this.each(function () {
            var i = t(this), n = i.data("bs.collapse"), s = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
            !n && s.toggle && /show|hide/.test(e) && (s.toggle = !1), n || i.data("bs.collapse", n = new o(this, s)), "string" == typeof e && n[e]()
        })
    }

    var o = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    o.VERSION = "3.3.6", o.TRANSITION_DURATION = 350, o.DEFAULTS = {toggle: !0}, o.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, o.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var r = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)return r.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, o.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var n = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : n.call(this)
            }
        }
    }, o.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, o.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (i, o) {
            var n = t(o);
            this.addAriaAndCollapsedClass(e(n), n)
        }, this)).end()
    }, o.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var n = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = n, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (o) {
        var n = t(this);
        n.attr("data-target") || o.preventDefault();
        var s = e(n), a = s.data("bs.collapse"), r = a ? "toggle" : n.data();
        i.call(s, r)
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = i && t(i);
        return o && o.length ? o : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(n).remove(), t(s).each(function () {
            var o = t(this), n = e(o), s = {relatedTarget: this};
            n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (o.attr("aria-expanded", "false"), n.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))))
        }))
    }

    function o(e) {
        return this.each(function () {
            var i = t(this), o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new a(this)), "string" == typeof e && o[e].call(i)
        })
    }

    var n = ".dropdown-backdrop", s = '[data-toggle="dropdown"]', a = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    a.VERSION = "3.3.6", a.prototype.toggle = function (o) {
        var n = t(this);
        if (!n.is(".disabled, :disabled")) {
            var s = e(n), a = s.hasClass("open");
            if (i(), !a) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var r = {relatedTarget: this};
                if (s.trigger(o = t.Event("show.bs.dropdown", r)), o.isDefaultPrevented())return;
                n.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r))
            }
            return !1
        }
    }, a.prototype.keydown = function (i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var o = t(this);
            if (i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled")) {
                var n = e(o), a = n.hasClass("open");
                if (!a && 27 != i.which || a && 27 == i.which)return 27 == i.which && n.find(s).trigger("focus"), o.trigger("click");
                var r = " li:not(.disabled):visible a", l = n.find(".dropdown-menu" + r);
                if (l.length) {
                    var h = l.index(i.target);
                    38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                }
            }
        }
    };
    var r = t.fn.dropdown;
    t.fn.dropdown = o, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = r, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, a.prototype.toggle).on("keydown.bs.dropdown.data-api", s, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery), +function (t) {
    "use strict";
    function e(e, o) {
        return this.each(function () {
            var n = t(this), s = n.data("bs.modal"), a = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            s || n.data("bs.modal", s = new i(this, a)), "string" == typeof e ? s[e](o) : a.show && s.show(o)
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
        var o = this, n = t.Event("show.bs.modal", {relatedTarget: e});
        this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            o.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var n = t.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), n && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
            var s = t.Event("shown.bs.modal", {relatedTarget: e});
            n ? o.$dialog.one("bsTransitionEnd", function () {
                o.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(s)
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
        var o = this, n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && n;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function () {
                o.removeBackdrop(), e && e()
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
    var o = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () {
        return t.fn.modal = o, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) {
        var o = t(this), n = o.attr("href"), s = t(o.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")), a = s.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(n) && n}, s.data(), o.data());
        o.is("a") && i.preventDefault(), s.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
                o.is(":visible") && o.trigger("focus")
            })
        }), e.call(s, a, this)
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.tooltip"), s = "object" == typeof e && e;
            !n && /destroy|hide/.test(e) || (n || o.data("bs.tooltip", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }

    var i = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, i.prototype.init = function (e, i, o) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
            var a = n[s];
            if ("click" == a)this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != a) {
                var r = "hover" == a ? "mouseenter" : "focusin", l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function () {
        var e = {}, i = this.getDefaults();
        return this._options && t.each(this._options, function (t, o) {
            i[t] != o && (e[t] = o)
        }), e
    }, i.prototype.enter = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function () {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function () {
        for (var t in this.inState)if (this.inState[t])return !0;
        return !1
    }, i.prototype.leave = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function () {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    }, i.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !o)return;
            var n = this, s = this.tip(), a = this.getUID(this.type);
            this.setContent(), s.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && s.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement, l = /\s?auto?\s?/i, h = l.test(r);
            h && (r = r.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition(), p = s[0].offsetWidth, c = s[0].offsetHeight;
            if (h) {
                var f = r, u = this.getPosition(this.$viewport);
                r = "bottom" == r && d.bottom + c > u.bottom ? "top" : "top" == r && d.top - c < u.top ? "bottom" : "right" == r && d.right + p > u.width ? "left" : "left" == r && d.left - p < u.left ? "right" : r, s.removeClass(f).addClass(r)
            }
            var g = this.getCalculatedOffset(r, d, p, c);
            this.applyPlacement(g, r);
            var v = function () {
                var t = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(i.TRANSITION_DURATION) : v()
        }
    }, i.prototype.applyPlacement = function (e, i) {
        var o = this.tip(), n = o[0].offsetWidth, s = o[0].offsetHeight, a = parseInt(o.css("margin-top"), 10), r = parseInt(o.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(o[0], t.extend({
            using: function (t) {
                o.css({top: Math.round(t.top), left: Math.round(t.left)})
            }
        }, e), 0), o.addClass("in");
        var l = o[0].offsetWidth, h = o[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? e.left += d.left : e.top += d.top;
        var p = /top|bottom/.test(i), c = p ? 2 * d.left - n + l : 2 * d.top - s + h, f = p ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(c, o[0][f], p)
    }, i.prototype.replaceArrow = function (t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function (e) {
        function o() {
            "in" != n.hoverState && s.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
        }

        var n = this, s = t(this.$tip), a = t.Event("hide.bs." + this.type);
        return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function () {
        return this.getTitle()
    }, i.prototype.getPosition = function (e) {
        e = e || this.$element;
        var i = e[0], o = "BODY" == i.tagName, n = i.getBoundingClientRect();
        null == n.width && (n = t.extend({}, n, {width: n.right - n.left, height: n.bottom - n.top}));
        var s = o ? {
            top: 0,
            left: 0
        } : e.offset(), a = {scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()}, r = o ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
        return t.extend({}, n, a, r, s)
    }, i.prototype.getCalculatedOffset = function (t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {top: e.top + e.height / 2 - o / 2, left: e.left - i} : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
        var n = {top: 0, left: 0};
        if (!this.$viewport)return n;
        var s = this.options.viewport && this.options.viewport.padding || 0, a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - s - a.scroll, l = e.top + s - a.scroll + o;
            r < a.top ? n.top = a.top - r : l > a.top + a.height && (n.top = a.top + a.height - l)
        } else {
            var h = e.left - s, d = e.left + s + i;
            h < a.left ? n.left = a.left - h : d > a.right && (n.left = a.left + a.width - d)
        }
        return n
    }, i.prototype.getTitle = function () {
        var t, e = this.$element, i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length))throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function () {
        this.enabled = !0
    }, i.prototype.disable = function () {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function (e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var o = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = o, this
    }
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.popover"), s = "object" == typeof e && e;
            !n && /destroy|hide/.test(e) || (n || o.data("bs.popover", n = new i(this, s)), "string" == typeof e && n[e]())
        })
    }

    var i = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.6", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function () {
        return i.DEFAULTS
    }, i.prototype.setContent = function () {
        var t = this.tip(), e = this.getTitle(), i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function () {
        var t = this.$element, e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var o = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function () {
        return t.fn.popover = o, this
    }
}(jQuery), +function (t) {
    "use strict";
    function e(i, o) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.scrollspy"), s = "object" == typeof i && i;
            n || o.data("bs.scrollspy", n = new e(this, s)), "string" == typeof i && n[i]()
        })
    }

    e.VERSION = "3.3.6", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this, i = "offset", o = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this), n = e.data("target") || e.attr("href"), s = /^#./.test(n) && t(n);
            return s && s.length && s.is(":visible") && [[s[i]().top + o, n]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(), o = this.options.offset + i - this.$scrollElement.height(), n = this.offsets, s = this.targets, a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= o)return a != (t = s[s.length - 1]) && this.activate(t);
        if (a && e < n[0])return this.activeTarget = null, this.clear();
        for (t = n.length; t--;)a != s[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]', o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")),
            o.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var o = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = o, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.tab");
            n || o.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]()
        })
    }

    var i = function (e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.show = function () {
        var e = this.element, i = e.closest("ul:not(.dropdown-menu)"), o = e.data("target");
        if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var n = i.find(".active:last a"), s = t.Event("hide.bs.tab", {relatedTarget: e[0]}), a = t.Event("show.bs.tab", {relatedTarget: n[0]});
            if (n.trigger(s), e.trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var r = t(o);
                this.activate(e.closest("li"), i), this.activate(r, r.parent(), function () {
                    n.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: n[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function (e, o, n) {
        function s() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n()
        }

        var a = o.find("> .active"), r = n && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
        a.length && r ? a.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), a.removeClass("in")
    };
    var o = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
        return t.fn.tab = o, this
    };
    var n = function (i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery), +function (t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var o = t(this), n = o.data("bs.affix"), s = "object" == typeof e && e;
            n || o.data("bs.affix", n = new i(this, s)), "string" == typeof e && n[e]()
        })
    }

    var i = function (e, o) {
        this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.6", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function (t, e, i, o) {
        var n = this.$target.scrollTop(), s = this.$element.offset(), a = this.$target.height();
        if (null != i && "top" == this.affixed)return i > n ? "top" : !1;
        if ("bottom" == this.affixed)return null != i ? n + this.unpin <= s.top ? !1 : "bottom" : t - o >= n + a ? !1 : "bottom";
        var r = null == this.affixed, l = r ? n : s.top, h = r ? a : e;
        return null != i && i >= n ? "top" : null != o && l + h >= t - o ? "bottom" : !1
    }, i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(), e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(), o = this.options.offset, n = o.top, s = o.bottom, a = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof o && (s = n = o), "function" == typeof n && (n = o.top(this.$element)), "function" == typeof s && (s = o.bottom(this.$element));
            var r = this.getState(a, e, n, s);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (r ? "-" + r : ""), h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented())return;
                this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({top: a - e - s})
        }
    };
    var o = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function () {
        return t.fn.affix = o, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var i = t(this), o = i.data();
            o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
        })
    })
}(jQuery);
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function (e) {
    function n(e) {
        return u.raw ? e : encodeURIComponent(e)
    }

    function o(e) {
        return u.raw ? e : decodeURIComponent(e)
    }

    function i(e) {
        return n(u.json ? JSON.stringify(e) : String(e))
    }

    function r(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(c, " ")), u.json ? JSON.parse(e) : e
        } catch (n) {
        }
    }

    function t(n, o) {
        var i = u.raw ? n : r(n);
        return e.isFunction(o) ? o(i) : i
    }

    var c = /\+/g, u = e.cookie = function (r, c, f) {
        if (void 0 !== c && !e.isFunction(c)) {
            if (f = e.extend({}, u.defaults, f), "number" == typeof f.expires) {
                var a = f.expires, d = f.expires = new Date;
                d.setTime(+d + 864e5 * a)
            }
            return document.cookie = [n(r), "=", i(c), f.expires ? "; expires=" + f.expires.toUTCString() : "", f.path ? "; path=" + f.path : "", f.domain ? "; domain=" + f.domain : "", f.secure ? "; secure" : ""].join("")
        }
        for (var p = r ? void 0 : {}, s = document.cookie ? document.cookie.split("; ") : [], m = 0, x = s.length; x > m; m++) {
            var v = s[m].split("="), k = o(v.shift()), l = v.join("=");
            if (r && r === k) {
                p = t(l, c);
                break
            }
            r || void 0 === (l = t(l)) || (p[k] = l)
        }
        return p
    };
    u.defaults = {}, e.removeCookie = function (n, o) {
        return void 0 === e.cookie(n) ? !1 : (e.cookie(n, "", e.extend({}, o, {expires: -1})), !e.cookie(n))
    }
});
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    var o = !1, t = !1, i = 0, r = 2e3, n = 0, s = ["webkit", "ms", "moz", "o"], l = window.requestAnimationFrame || !1, a = window.cancelAnimationFrame || !1;
    if (!l)for (var c in s) {
        var d = s[c];
        if (l = window[d + "RequestAnimationFrame"]) {
            a = window[d + "CancelAnimationFrame"] || window[d + "CancelRequestAnimationFrame"];
            break
        }
    }
    var u = window.MutationObserver || window.WebKitMutationObserver || !1, h = {
        zindex: "auto",
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        cursorcolor: "#424242",
        cursorwidth: "6px",
        cursorborder: "1px solid #fff",
        cursorborderradius: "5px",
        scrollspeed: 60,
        mousescrollstep: 24,
        touchbehavior: !1,
        hwacceleration: !0,
        usetransition: !0,
        boxzoom: !1,
        dblclickzoom: !0,
        gesturezoom: !0,
        grabcursorenabled: !0,
        autohidemode: !0,
        background: "",
        iframeautoresize: !0,
        cursorminheight: 32,
        preservenativescrolling: !0,
        railoffset: !1,
        railhoffset: !1,
        bouncescroll: !0,
        spacebarenabled: !0,
        railpadding: {top: 0, right: 0, left: 0, bottom: 0},
        disableoutline: !0,
        horizrailenabled: !0,
        railalign: "right",
        railvalign: "bottom",
        enabletranslate3d: !0,
        enablemousewheel: !0,
        enablekeyboard: !0,
        smoothscroll: !0,
        sensitiverail: !0,
        enablemouselockapi: !0,
        cursorfixedheight: !1,
        directionlockdeadzone: 6,
        hidecursordelay: 400,
        nativeparentscrolling: !0,
        enablescrollonselection: !0,
        overflowx: !0,
        overflowy: !0,
        cursordragspeed: .3,
        rtlmode: "auto",
        cursordragontouch: !1,
        oneaxismousemode: "auto",
        scriptpath: function () {
            var e = document.getElementsByTagName("script"), e = e.length ? e[e.length - 1].src.split("?")[0] : "";
            return 0 < e.split("/").length ? e.split("/").slice(0, -1).join("/") + "/" : ""
        }(),
        preventmultitouchscrolling: !0,
        disablemutationobserver: !1
    }, p = !1, m = function () {
        if (p)return p;
        var e = document.createElement("DIV"), o = e.style, t = navigator.userAgent, i = navigator.platform, r = {haspointerlock: "pointerLockElement" in document || "webkitPointerLockElement" in document || "mozPointerLockElement" in document};
        r.isopera = "opera" in window, r.isopera12 = r.isopera && "getUserMedia" in navigator, r.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini), r.isie = "all" in document && "attachEvent" in e && !r.isopera, r.isieold = r.isie && !("msInterpolationMode" in o), r.isie7 = r.isie && !r.isieold && (!("documentMode" in document) || 7 == document.documentMode), r.isie8 = r.isie && "documentMode" in document && 8 == document.documentMode, r.isie9 = r.isie && "performance" in window && 9 == document.documentMode, r.isie10 = r.isie && "performance" in window && 10 == document.documentMode, r.isie11 = "msRequestFullscreen" in e && 11 <= document.documentMode, r.isieedge12 = navigator.userAgent.match(/Edge\/12\./), r.isieedge = "msOverflowStyle" in e, r.ismodernie = r.isie11 || r.isieedge, r.isie9mobile = /iemobile.9/i.test(t), r.isie9mobile && (r.isie9 = !1), r.isie7mobile = !r.isie9mobile && r.isie7 && /iemobile/i.test(t), r.ismozilla = "MozAppearance" in o, r.iswebkit = "WebkitAppearance" in o, r.ischrome = "chrome" in window, r.ischrome38 = r.ischrome && "touchAction" in o, r.ischrome22 = !r.ischrome38 && r.ischrome && r.haspointerlock, r.ischrome26 = !r.ischrome38 && r.ischrome && "transition" in o, r.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window, r.hasw3ctouch = (window.PointerEvent || !1) && (0 < navigator.MaxTouchPoints || 0 < navigator.msMaxTouchPoints), r.hasmstouch = !r.hasw3ctouch && (window.MSPointerEvent || !1), r.ismac = /^mac$/i.test(i), r.isios = r.cantouch && /iphone|ipad|ipod/i.test(i), r.isios4 = r.isios && !("seal" in Object), r.isios7 = r.isios && "webkitHidden" in document, r.isios8 = r.isios && "hidden" in document, r.isandroid = /android/i.test(t), r.haseventlistener = "addEventListener" in e, r.trstyle = !1, r.hastransform = !1, r.hastranslate3d = !1, r.transitionstyle = !1, r.hastransition = !1, r.transitionend = !1, i = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"];
        for (t = 0; t < i.length; t++)if (void 0 !== o[i[t]]) {
            r.trstyle = i[t];
            break
        }
        r.hastransform = !!r.trstyle, r.hastransform && (o[r.trstyle] = "translate3d(1px,2px,3px)", r.hastranslate3d = /translate3d/.test(o[r.trstyle])), r.transitionstyle = !1, r.prefixstyle = "", r.transitionend = !1;
        for (var i = "transition webkitTransition msTransition MozTransition OTransition OTransition KhtmlTransition".split(" "), n = " -webkit- -ms- -moz- -o- -o -khtml-".split(" "), s = "transitionend webkitTransitionEnd msTransitionEnd transitionend otransitionend oTransitionEnd KhtmlTransitionEnd".split(" "), t = 0; t < i.length; t++)if (i[t] in o) {
            r.transitionstyle = i[t], r.prefixstyle = n[t], r.transitionend = s[t];
            break
        }
        r.ischrome26 && (r.prefixstyle = n[1]), r.hastransition = r.transitionstyle;
        e:{
            for (t = ["grab", "-webkit-grab", "-moz-grab"], (r.ischrome && !r.ischrome38 || r.isie) && (t = []), i = 0; i < t.length; i++)if (n = t[i], o.cursor = n, o.cursor == n) {
                o = n;
                break e
            }
            o = "url(//patriciaportfolio.googlecode.com/files/openhand.cur),n-resize"
        }
        return r.cursorgrabvalue = o, r.hasmousecapture = "setCapture" in e, r.hasMutationObserver = !1 !== u, p = r
    }, g = function (s, c) {
        function d() {
            var e = b.doc.css(S.trstyle);
            return e && "matrix" == e.substr(0, 6) ? e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/) : !1
        }

        function p() {
            var e = b.win;
            if ("zIndex" in e)return e.zIndex();
            for (; 0 < e.length && 9 != e[0].nodeType;) {
                var o = e.css("zIndex");
                if (!isNaN(o) && 0 != o)return parseInt(o);
                e = e.parent()
            }
            return !1
        }

        function g(e, o, t) {
            return o = e.css(o), e = parseFloat(o), isNaN(e) ? (e = M[o] || 0, t = 3 == e ? t ? b.win.outerHeight() - b.win.innerHeight() : b.win.outerWidth() - b.win.innerWidth() : 1, b.isie8 && e && (e += 1), t ? e : 0) : e
        }

        function w(e, o, t, i) {
            b._bind(e, o, function (i) {
                i = i ? i : window.event;
                var r = {
                    original: i,
                    target: i.target || i.srcElement,
                    type: "wheel",
                    deltaMode: "MozMousePixelScroll" == i.type ? 0 : 1,
                    deltaX: 0,
                    deltaZ: 0,
                    preventDefault: function () {
                        return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1
                    },
                    stopImmediatePropagation: function () {
                        i.stopImmediatePropagation ? i.stopImmediatePropagation() : i.cancelBubble = !0
                    }
                };
                return "mousewheel" == o ? (i.wheelDeltaX && (r.deltaX = -.025 * i.wheelDeltaX), i.wheelDeltaY && (r.deltaY = -.025 * i.wheelDeltaY), r.deltaY || r.deltaX || (r.deltaY = -.025 * i.wheelDelta)) : r.deltaY = i.detail, t.call(e, r)
            }, i)
        }

        function v(e, o, t) {
            var i, r;
            if (0 == e.deltaMode ? (i = -Math.floor(b.opt.mousescrollstep / 54 * e.deltaX), r = -Math.floor(b.opt.mousescrollstep / 54 * e.deltaY)) : 1 == e.deltaMode && (i = -Math.floor(e.deltaX * b.opt.mousescrollstep), r = -Math.floor(e.deltaY * b.opt.mousescrollstep)), o && b.opt.oneaxismousemode && 0 == i && r && (i = r, r = 0, t && (0 > i ? b.getScrollLeft() >= b.page.maxw : 0 >= b.getScrollLeft()) && (r = i, i = 0)), b.isrtlmode && (i = -i), i && (b.scrollmom && b.scrollmom.stop(), b.lastdeltax += i, b.debounced("mousewheelx", function () {
                    var e = b.lastdeltax;
                    b.lastdeltax = 0, b.rail.drag || b.doScrollLeftBy(e)
                }, 15)), r) {
                if (b.opt.nativeparentscrolling && t && !b.ispage && !b.zoomactive)if (0 > r) {
                    if (b.getScrollTop() >= b.page.maxh)return !0
                } else if (0 >= b.getScrollTop())return !0;
                b.scrollmom && b.scrollmom.stop(), b.lastdeltay += r, b.synched("mousewheely", function () {
                    var e = b.lastdeltay;
                    b.lastdeltay = 0, b.rail.drag || b.doScrollBy(e)
                }, 15)
            }
            return e.stopImmediatePropagation(), e.preventDefault()
        }

        var b = this;
        if (this.version = "3.6.8", this.name = "nicescroll", this.me = c, this.opt = {
                doc: e("body"),
                win: !1
            }, e.extend(this.opt, h), this.opt.snapbackspeed = 80, s)for (var y in b.opt)void 0 !== s[y] && (b.opt[y] = s[y]);
        if (b.opt.disablemutationobserver && (u = !1), this.iddoc = (this.doc = b.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "", this.ispage = /^BODY|HTML/.test(b.opt.win ? b.opt.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = !1 !== b.opt.win, this.win = b.opt.win || (this.ispage ? e(window) : this.doc), this.docscroll = this.ispage && !this.haswrapper ? e(window) : this.win, this.body = e("body"), this.iframe = this.isfixed = this.viewport = !1, this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = !1, this.canshowonmouseevent = "scroll" != b.opt.autohidemode, this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1, this.scroll = {
                x: 0,
                y: 0
            }, this.scrollratio = {
                x: 0,
                y: 0
            }, this.cursorheight = 20, this.scrollvaluemax = 0, "auto" == this.opt.rtlmode) {
            y = this.win[0] == window ? this.body : this.win;
            var x = y.css("writing-mode") || y.css("-webkit-writing-mode") || y.css("-ms-writing-mode") || y.css("-moz-writing-mode");
            "horizontal-tb" == x || "lr-tb" == x || "" == x ? (this.isrtlmode = "rtl" == y.css("direction"), this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == x || "tb" == x || "tb-rl" == x || "rl-tb" == x, this.isvertical = "vertical-rl" == x || "tb" == x || "tb-rl" == x)
        } else this.isrtlmode = !0 === this.opt.rtlmode, this.isvertical = !1;
        this.observerbody = this.observerremover = this.observer = this.scrollmom = this.scrollrunning = !1;
        do this.id = "ascrail" + r++; while (document.getElementById(this.id));
        this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1, this.visibility = !0, this.hidden = this.locked = this.railslocked = !1, this.cursoractive = !0, this.wheelprevented = !1, this.overflowx = b.opt.overflowx, this.overflowy = b.opt.overflowy, this.nativescrollingarea = !1, this.checkarea = 0, this.events = [], this.saved = {}, this.delaylist = {}, this.synclist = {}, this.lastdeltay = this.lastdeltax = 0, this.detected = m();
        var S = e.extend({}, this.detected);
        this.ishwscroll = (this.canhwscroll = S.hastransform && b.opt.hwacceleration) && b.haswrapper, this.hasreversehr = this.isrtlmode ? this.isvertical ? !(S.iswebkit || S.isie || S.isie11) : !(S.iswebkit || S.isie && !S.isie10 && !S.isie11) : !1, this.istouchcapable = !1, S.cantouch || !S.hasw3ctouch && !S.hasmstouch ? !S.cantouch || S.isios || S.isandroid || !S.iswebkit && !S.ismozilla || (this.istouchcapable = !0) : this.istouchcapable = !0, b.opt.enablemouselockapi || (S.hasmousecapture = !1, S.haspointerlock = !1), this.debounced = function (e, o, t) {
            b && (b.delaylist[e] || (o.call(b), b.delaylist[e] = {
                h: l(function () {
                    b.delaylist[e].fn.call(b), b.delaylist[e] = !1
                }, t)
            }), b.delaylist[e].fn = o)
        };
        var z = !1;
        this.synched = function (e, o) {
            return b.synclist[e] = o, function () {
                z || (l(function () {
                    if (b) {
                        z = !1;
                        for (var e in b.synclist) {
                            var o = b.synclist[e];
                            o && o.call(b), b.synclist[e] = !1
                        }
                    }
                }), z = !0)
            }(), e
        }, this.unsynched = function (e) {
            b.synclist[e] && (b.synclist[e] = !1)
        }, this.css = function (e, o) {
            for (var t in o)b.saved.css.push([e, t, e.css(t)]), e.css(t, o[t])
        }, this.scrollTop = function (e) {
            return void 0 === e ? b.getScrollTop() : b.setScrollTop(e)
        }, this.scrollLeft = function (e) {
            return void 0 === e ? b.getScrollLeft() : b.setScrollLeft(e)
        };
        var T = function (e, o, t, i, r, n, s) {
            this.st = e, this.ed = o, this.spd = t, this.p1 = i || 0, this.p2 = r || 1, this.p3 = n || 0, this.p4 = s || 1, this.ts = (new Date).getTime(), this.df = this.ed - this.st
        };
        if (T.prototype = {
                B2: function (e) {
                    return 3 * e * e * (1 - e)
                }, B3: function (e) {
                    return 3 * e * (1 - e) * (1 - e)
                }, B4: function (e) {
                    return (1 - e) * (1 - e) * (1 - e)
                }, getNow: function () {
                    var e = 1 - ((new Date).getTime() - this.ts) / this.spd, o = this.B2(e) + this.B3(e) + this.B4(e);
                    return 0 > e ? this.ed : this.st + Math.round(this.df * o)
                }, update: function (e, o) {
                    return this.st = this.getNow(), this.ed = e, this.spd = o, this.ts = (new Date).getTime(), this.df = this.ed - this.st, this
                }
            }, this.ishwscroll) {
            this.doc.translate = {
                x: 0,
                y: 0,
                tx: "0px",
                ty: "0px"
            }, S.hastranslate3d && S.isios && this.doc.css("-webkit-backface-visibility", "hidden"), this.getScrollTop = function (e) {
                if (!e) {
                    if (e = d())return 16 == e.length ? -e[13] : -e[5];
                    if (b.timerscroll && b.timerscroll.bz)return b.timerscroll.bz.getNow()
                }
                return b.doc.translate.y
            }, this.getScrollLeft = function (e) {
                if (!e) {
                    if (e = d())return 16 == e.length ? -e[12] : -e[4];
                    if (b.timerscroll && b.timerscroll.bh)return b.timerscroll.bh.getNow()
                }
                return b.doc.translate.x
            }, this.notifyScrollEvent = function (e) {
                var o = document.createEvent("UIEvents");
                o.initUIEvent("scroll", !1, !0, window, 1), o.niceevent = !0, e.dispatchEvent(o)
            };
            var k = this.isrtlmode ? 1 : -1;
            S.hastranslate3d && b.opt.enabletranslate3d ? (this.setScrollTop = function (e, o) {
                b.doc.translate.y = e, b.doc.translate.ty = -1 * e + "px", b.doc.css(S.trstyle, "translate3d(" + b.doc.translate.tx + "," + b.doc.translate.ty + ",0px)"), o || b.notifyScrollEvent(b.win[0])
            }, this.setScrollLeft = function (e, o) {
                b.doc.translate.x = e, b.doc.translate.tx = e * k + "px", b.doc.css(S.trstyle, "translate3d(" + b.doc.translate.tx + "," + b.doc.translate.ty + ",0px)"), o || b.notifyScrollEvent(b.win[0])
            }) : (this.setScrollTop = function (e, o) {
                b.doc.translate.y = e, b.doc.translate.ty = -1 * e + "px", b.doc.css(S.trstyle, "translate(" + b.doc.translate.tx + "," + b.doc.translate.ty + ")"), o || b.notifyScrollEvent(b.win[0])
            }, this.setScrollLeft = function (e, o) {
                b.doc.translate.x = e, b.doc.translate.tx = e * k + "px", b.doc.css(S.trstyle, "translate(" + b.doc.translate.tx + "," + b.doc.translate.ty + ")"), o || b.notifyScrollEvent(b.win[0])
            })
        } else this.getScrollTop = function () {
            return b.docscroll.scrollTop()
        }, this.setScrollTop = function (e) {
            return setTimeout(function () {
                b && b.docscroll.scrollTop(e)
            }, 1)
        }, this.getScrollLeft = function () {
            return b.hasreversehr ? b.detected.ismozilla ? b.page.maxw - Math.abs(b.docscroll.scrollLeft()) : b.page.maxw - b.docscroll.scrollLeft() : b.docscroll.scrollLeft()
        }, this.setScrollLeft = function (e) {
            return setTimeout(function () {
                return b ? (b.hasreversehr && (e = b.detected.ismozilla ? -(b.page.maxw - e) : b.page.maxw - e), b.docscroll.scrollLeft(e)) : void 0
            }, 1)
        };
        this.getTarget = function (e) {
            return e ? e.target ? e.target : e.srcElement ? e.srcElement : !1 : !1
        }, this.hasParent = function (e, o) {
            if (!e)return !1;
            for (var t = e.target || e.srcElement || e || !1; t && t.id != o;)t = t.parentNode || !1;
            return !1 !== t
        };
        var M = {thin: 1, medium: 3, thick: 5};
        this.getDocumentScrollOffset = function () {
            return {
                top: window.pageYOffset || document.documentElement.scrollTop,
                left: window.pageXOffset || document.documentElement.scrollLeft
            }
        }, this.getOffset = function () {
            if (b.isfixed) {
                var e = b.win.offset(), o = b.getDocumentScrollOffset();
                return e.top -= o.top, e.left -= o.left, e
            }
            return e = b.win.offset(), b.viewport ? (o = b.viewport.offset(), {
                top: e.top - o.top,
                left: e.left - o.left
            }) : e
        }, this.updateScrollBar = function (e) {
            var o, t, i;
            if (b.ishwscroll)b.rail.css({height: b.win.innerHeight() - (b.opt.railpadding.top + b.opt.railpadding.bottom)}), b.railh && b.railh.css({width: b.win.innerWidth() - (b.opt.railpadding.left + b.opt.railpadding.right)}); else {
                var r = b.getOffset();
                o = r.top, t = r.left - (b.opt.railpadding.left + b.opt.railpadding.right), o += g(b.win, "border-top-width", !0), t += b.rail.align ? b.win.outerWidth() - g(b.win, "border-right-width") - b.rail.width : g(b.win, "border-left-width"), (i = b.opt.railoffset) && (i.top && (o += i.top), i.left && (t += i.left)), b.railslocked || b.rail.css({
                    top: o,
                    left: t,
                    height: (e ? e.h : b.win.innerHeight()) - (b.opt.railpadding.top + b.opt.railpadding.bottom)
                }), b.zoom && b.zoom.css({
                    top: o + 1,
                    left: 1 == b.rail.align ? t - 20 : t + b.rail.width + 4
                }), b.railh && !b.railslocked && (o = r.top, t = r.left, (i = b.opt.railhoffset) && (i.top && (o += i.top), i.left && (t += i.left)), e = b.railh.align ? o + g(b.win, "border-top-width", !0) + b.win.innerHeight() - b.railh.height : o + g(b.win, "border-top-width", !0), t += g(b.win, "border-left-width"), b.railh.css({
                    top: e - (b.opt.railpadding.top + b.opt.railpadding.bottom),
                    left: t,
                    width: b.railh.width
                }))
            }
        }, this.doRailClick = function (e, o, t) {
            var i;
            b.railslocked || (b.cancelEvent(e), o ? (o = t ? b.doScrollLeft : b.doScrollTop, i = t ? (e.pageX - b.railh.offset().left - b.cursorwidth / 2) * b.scrollratio.x : (e.pageY - b.rail.offset().top - b.cursorheight / 2) * b.scrollratio.y, o(i)) : (o = t ? b.doScrollLeftBy : b.doScrollBy, i = t ? b.scroll.x : b.scroll.y, e = t ? e.pageX - b.railh.offset().left : e.pageY - b.rail.offset().top, t = t ? b.view.w : b.view.h, o(i >= e ? t : -t)))
        }, b.hasanimationframe = l, b.hascancelanimationframe = a, b.hasanimationframe ? b.hascancelanimationframe || (a = function () {
            b.cancelAnimationFrame = !0
        }) : (l = function (e) {
            return setTimeout(e, 15 - Math.floor(+new Date / 1e3) % 16)
        }, a = clearTimeout), this.init = function () {
            if (b.saved.css = [], S.isie7mobile || S.isoperamini)return !0;
            S.hasmstouch && b.css(b.ispage ? e("html") : b.win, {_touchaction: "none"});
            var r = S.ismodernie || S.isie10 ? {"-ms-overflow-style": "none"} : {"overflow-y": "hidden"};
            if (b.zindex = "auto", b.zindex = b.ispage || "auto" != b.opt.zindex ? b.opt.zindex : p() || "auto", !b.ispage && "auto" != b.zindex && b.zindex > n && (n = b.zindex), b.isie && 0 == b.zindex && "auto" == b.opt.zindex && (b.zindex = "auto"), !b.ispage || !S.cantouch && !S.isieold && !S.isie9mobile) {
                var s = b.docscroll;
                b.ispage && (s = b.haswrapper ? b.win : b.doc), S.isie9mobile || b.css(s, r), b.ispage && S.isie7 && ("BODY" == b.doc[0].nodeName ? b.css(e("html"), {"overflow-y": "hidden"}) : "HTML" == b.doc[0].nodeName && b.css(e("body"), r)), !S.isios || b.ispage || b.haswrapper || b.css(e("body"), {"-webkit-overflow-scrolling": "touch"});
                var l = e(document.createElement("div"));
                l.css({
                    position: "relative",
                    top: 0,
                    "float": "right",
                    width: b.opt.cursorwidth,
                    height: 0,
                    "background-color": b.opt.cursorcolor,
                    border: b.opt.cursorborder,
                    "background-clip": "padding-box",
                    "-webkit-border-radius": b.opt.cursorborderradius,
                    "-moz-border-radius": b.opt.cursorborderradius,
                    "border-radius": b.opt.cursorborderradius
                }), l.hborder = parseFloat(l.outerHeight() - l.innerHeight()), l.addClass("nicescroll-cursors"), b.cursor = l;
                var a = e(document.createElement("div"));
                a.attr("id", b.id), a.addClass("nicescroll-rails nicescroll-rails-vr");
                var c, d, h, m = ["left", "right", "top", "bottom"];
                for (h in m)d = m[h], (c = b.opt.railpadding[d]) ? a.css("padding-" + d, c + "px") : b.opt.railpadding[d] = 0;
                a.append(l), a.width = Math.max(parseFloat(b.opt.cursorwidth), l.outerWidth()), a.css({
                    width: a.width + "px",
                    zIndex: b.zindex,
                    background: b.opt.background,
                    cursor: "default"
                }), a.visibility = !0, a.scrollable = !0, a.align = "left" == b.opt.railalign ? 0 : 1, b.rail = a, l = b.rail.drag = !1, !b.opt.boxzoom || b.ispage || S.isieold || (l = document.createElement("div"), b.bind(l, "click", b.doZoom), b.bind(l, "mouseenter", function () {
                    b.zoom.css("opacity", b.opt.cursoropacitymax)
                }), b.bind(l, "mouseleave", function () {
                    b.zoom.css("opacity", b.opt.cursoropacitymin)
                }), b.zoom = e(l), b.zoom.css({
                    cursor: "pointer",
                    zIndex: b.zindex,
                    backgroundImage: "url(" + b.opt.scriptpath + "zoomico.png)",
                    height: 18,
                    width: 18,
                    backgroundPosition: "0px 0px"
                }), b.opt.dblclickzoom && b.bind(b.win, "dblclick", b.doZoom), S.cantouch && b.opt.gesturezoom && (b.ongesturezoom = function (e) {
                    return 1.5 < e.scale && b.doZoomIn(e), .8 > e.scale && b.doZoomOut(e), b.cancelEvent(e)
                }, b.bind(b.win, "gestureend", b.ongesturezoom))), b.railh = !1;
                var g;
                if (b.opt.horizrailenabled && (b.css(s, {overflowX: "hidden"}), l = e(document.createElement("div")), l.css({
                        position: "absolute",
                        top: 0,
                        height: b.opt.cursorwidth,
                        width: 0,
                        backgroundColor: b.opt.cursorcolor,
                        border: b.opt.cursorborder,
                        backgroundClip: "padding-box",
                        "-webkit-border-radius": b.opt.cursorborderradius,
                        "-moz-border-radius": b.opt.cursorborderradius,
                        "border-radius": b.opt.cursorborderradius
                    }), S.isieold && l.css("overflow", "hidden"), l.wborder = parseFloat(l.outerWidth() - l.innerWidth()), l.addClass("nicescroll-cursors"), b.cursorh = l, g = e(document.createElement("div")), g.attr("id", b.id + "-hr"), g.addClass("nicescroll-rails nicescroll-rails-hr"), g.height = Math.max(parseFloat(b.opt.cursorwidth), l.outerHeight()), g.css({
                        height: g.height + "px",
                        zIndex: b.zindex,
                        background: b.opt.background
                    }), g.append(l), g.visibility = !0, g.scrollable = !0, g.align = "top" == b.opt.railvalign ? 0 : 1, b.railh = g, b.railh.drag = !1), b.ispage ? (a.css({
                        position: "fixed",
                        top: 0,
                        height: "100%"
                    }), a.align ? a.css({right: 0}) : a.css({left: 0}), b.body.append(a), b.railh && (g.css({
                        position: "fixed",
                        left: 0,
                        width: "100%"
                    }), g.align ? g.css({bottom: 0}) : g.css({top: 0}), b.body.append(g))) : (b.ishwscroll ? ("static" == b.win.css("position") && b.css(b.win, {position: "relative"}), s = "HTML" == b.win[0].nodeName ? b.body : b.win, e(s).scrollTop(0).scrollLeft(0), b.zoom && (b.zoom.css({
                        position: "absolute",
                        top: 1,
                        right: 0,
                        "margin-right": a.width + 4
                    }), s.append(b.zoom)), a.css({
                        position: "absolute",
                        top: 0
                    }), a.align ? a.css({right: 0}) : a.css({left: 0}), s.append(a), g && (g.css({
                        position: "absolute",
                        left: 0,
                        bottom: 0
                    }), g.align ? g.css({bottom: 0}) : g.css({top: 0}), s.append(g))) : (b.isfixed = "fixed" == b.win.css("position"), s = b.isfixed ? "fixed" : "absolute", b.isfixed || (b.viewport = b.getViewport(b.win[0])), b.viewport && (b.body = b.viewport, 0 == /fixed|absolute/.test(b.viewport.css("position")) && b.css(b.viewport, {position: "relative"})), a.css({position: s}), b.zoom && b.zoom.css({position: s}), b.updateScrollBar(), b.body.append(a), b.zoom && b.body.append(b.zoom), b.railh && (g.css({position: s}), b.body.append(g))), S.isios && b.css(b.win, {
                        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                        "-webkit-touch-callout": "none"
                    }), S.isie && b.opt.disableoutline && b.win.attr("hideFocus", "true"), S.iswebkit && b.opt.disableoutline && b.win.css("outline", "none")), !1 === b.opt.autohidemode ? (b.autohidedom = !1, b.rail.css({opacity: b.opt.cursoropacitymax}), b.railh && b.railh.css({opacity: b.opt.cursoropacitymax})) : !0 === b.opt.autohidemode || "leave" === b.opt.autohidemode ? (b.autohidedom = e().add(b.rail), S.isie8 && (b.autohidedom = b.autohidedom.add(b.cursor)), b.railh && (b.autohidedom = b.autohidedom.add(b.railh)), b.railh && S.isie8 && (b.autohidedom = b.autohidedom.add(b.cursorh))) : "scroll" == b.opt.autohidemode ? (b.autohidedom = e().add(b.rail), b.railh && (b.autohidedom = b.autohidedom.add(b.railh))) : "cursor" == b.opt.autohidemode ? (b.autohidedom = e().add(b.cursor), b.railh && (b.autohidedom = b.autohidedom.add(b.cursorh))) : "hidden" == b.opt.autohidemode && (b.autohidedom = !1, b.hide(), b.railslocked = !1), S.isie9mobile)b.scrollmom = new f(b), b.onmangotouch = function () {
                    var e = b.getScrollTop(), o = b.getScrollLeft();
                    if (e == b.scrollmom.lastscrolly && o == b.scrollmom.lastscrollx)return !0;
                    var t = e - b.mangotouch.sy, i = o - b.mangotouch.sx;
                    if (0 != Math.round(Math.sqrt(Math.pow(i, 2) + Math.pow(t, 2)))) {
                        var r = 0 > t ? -1 : 1, n = 0 > i ? -1 : 1, s = +new Date;
                        b.mangotouch.lazy && clearTimeout(b.mangotouch.lazy), 80 < s - b.mangotouch.tm || b.mangotouch.dry != r || b.mangotouch.drx != n ? (b.scrollmom.stop(), b.scrollmom.reset(o, e), b.mangotouch.sy = e, b.mangotouch.ly = e, b.mangotouch.sx = o, b.mangotouch.lx = o, b.mangotouch.dry = r, b.mangotouch.drx = n, b.mangotouch.tm = s) : (b.scrollmom.stop(), b.scrollmom.update(b.mangotouch.sx - i, b.mangotouch.sy - t), b.mangotouch.tm = s, t = Math.max(Math.abs(b.mangotouch.ly - e), Math.abs(b.mangotouch.lx - o)), b.mangotouch.ly = e, b.mangotouch.lx = o, t > 2 && (b.mangotouch.lazy = setTimeout(function () {
                            b.mangotouch.lazy = !1, b.mangotouch.dry = 0, b.mangotouch.drx = 0, b.mangotouch.tm = 0, b.scrollmom.doMomentum(30)
                        }, 100)))
                    }
                }, a = b.getScrollTop(), g = b.getScrollLeft(), b.mangotouch = {
                    sy: a,
                    ly: a,
                    dry: 0,
                    sx: g,
                    lx: g,
                    drx: 0,
                    lazy: !1,
                    tm: 0
                }, b.bind(b.docscroll, "scroll", b.onmangotouch); else {
                    if (S.cantouch || b.istouchcapable || b.opt.touchbehavior || S.hasmstouch) {
                        b.scrollmom = new f(b), b.ontouchstart = function (o) {
                            if (o.pointerType && 2 != o.pointerType && "touch" != o.pointerType)return !1;
                            if (b.hasmoving = !1, !b.railslocked) {
                                var t;
                                if (S.hasmstouch)for (t = o.target ? o.target : !1; t;) {
                                    var i = e(t).getNiceScroll();
                                    if (0 < i.length && i[0].me == b.me)break;
                                    if (0 < i.length)return !1;
                                    if ("DIV" == t.nodeName && t.id == b.id)break;
                                    t = t.parentNode ? t.parentNode : !1
                                }
                                if (b.cancelScroll(), (t = b.getTarget(o)) && /INPUT/i.test(t.nodeName) && /range/i.test(t.type))return b.stopPropagation(o);
                                if (!("clientX" in o) && "changedTouches" in o && (o.clientX = o.changedTouches[0].clientX, o.clientY = o.changedTouches[0].clientY), b.forcescreen && (i = o, o = {original: o.original ? o.original : o}, o.clientX = i.screenX, o.clientY = i.screenY), b.rail.drag = {
                                        x: o.clientX,
                                        y: o.clientY,
                                        sx: b.scroll.x,
                                        sy: b.scroll.y,
                                        st: b.getScrollTop(),
                                        sl: b.getScrollLeft(),
                                        pt: 2,
                                        dl: !1
                                    }, b.ispage || !b.opt.directionlockdeadzone)b.rail.drag.dl = "f"; else {
                                    var i = e(window).width(), r = e(window).height(), r = Math.max(0, Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - r), i = Math.max(0, Math.max(document.body.scrollWidth, document.documentElement.scrollWidth) - i);
                                    b.rail.drag.ck = !b.rail.scrollable && b.railh.scrollable ? r > 0 ? "v" : !1 : b.rail.scrollable && !b.railh.scrollable && i > 0 ? "h" : !1, b.rail.drag.ck || (b.rail.drag.dl = "f")
                                }
                                if (b.opt.touchbehavior && b.isiframe && S.isie && (i = b.win.position(), b.rail.drag.x += i.left, b.rail.drag.y += i.top), b.hasmoving = !1, b.lastmouseup = !1, b.scrollmom.reset(o.clientX, o.clientY), !S.cantouch && !this.istouchcapable && !o.pointerType) {
                                    if (!t || !/INPUT|SELECT|TEXTAREA/i.test(t.nodeName))return !b.ispage && S.hasmousecapture && t.setCapture(), b.opt.touchbehavior ? (t.onclick && !t._onclick && (t._onclick = t.onclick, t.onclick = function (e) {
                                        return b.hasmoving ? !1 : void t._onclick.call(this, e)
                                    }), b.cancelEvent(o)) : b.stopPropagation(o);
                                    /SUBMIT|CANCEL|BUTTON/i.test(e(t).attr("type")) && (pc = {
                                        tg: t,
                                        click: !1
                                    }, b.preventclick = pc)
                                }
                            }
                        }, b.ontouchend = function (e) {
                            if (!b.rail.drag)return !0;
                            if (2 == b.rail.drag.pt) {
                                if (e.pointerType && 2 != e.pointerType && "touch" != e.pointerType)return !1;
                                if (b.scrollmom.doMomentum(), b.rail.drag = !1, b.hasmoving && (b.lastmouseup = !0, b.hideCursor(), S.hasmousecapture && document.releaseCapture(), !S.cantouch))return b.cancelEvent(e)
                            } else if (1 == b.rail.drag.pt)return b.onmouseup(e)
                        };
                        var w = b.opt.touchbehavior && b.isiframe && !S.hasmousecapture;
                        b.ontouchmove = function (o, t) {
                            if (!b.rail.drag || o.targetTouches && b.opt.preventmultitouchscrolling && 1 < o.targetTouches.length || o.pointerType && 2 != o.pointerType && "touch" != o.pointerType)return !1;
                            if (2 == b.rail.drag.pt) {
                                if (S.cantouch && S.isios && void 0 === o.original)return !0;
                                if (b.hasmoving = !0, b.preventclick && !b.preventclick.click && (b.preventclick.click = b.preventclick.tg.onclick || !1, b.preventclick.tg.onclick = b.onpreventclick), o = e.extend({original: o}, o), "changedTouches" in o && (o.clientX = o.changedTouches[0].clientX, o.clientY = o.changedTouches[0].clientY), b.forcescreen) {
                                    var i = o;
                                    o = {original: o.original ? o.original : o}, o.clientX = i.screenX, o.clientY = i.screenY
                                }
                                var r, i = r = 0;
                                w && !t && (r = b.win.position(), i = -r.left, r = -r.top);
                                var n = o.clientY + r;
                                r = n - b.rail.drag.y;
                                var s = o.clientX + i, l = s - b.rail.drag.x, a = b.rail.drag.st - r;
                                b.ishwscroll && b.opt.bouncescroll ? 0 > a ? a = Math.round(a / 2) : a > b.page.maxh && (a = b.page.maxh + Math.round((a - b.page.maxh) / 2)) : (0 > a && (n = a = 0), a > b.page.maxh && (a = b.page.maxh, n = 0));
                                var c;
                                if (b.railh && b.railh.scrollable && (c = b.isrtlmode ? l - b.rail.drag.sl : b.rail.drag.sl - l, b.ishwscroll && b.opt.bouncescroll ? 0 > c ? c = Math.round(c / 2) : c > b.page.maxw && (c = b.page.maxw + Math.round((c - b.page.maxw) / 2)) : (0 > c && (s = c = 0), c > b.page.maxw && (c = b.page.maxw, s = 0))), i = !1, b.rail.drag.dl)i = !0, "v" == b.rail.drag.dl ? c = b.rail.drag.sl : "h" == b.rail.drag.dl && (a = b.rail.drag.st); else {
                                    r = Math.abs(r);
                                    var l = Math.abs(l), d = b.opt.directionlockdeadzone;
                                    if ("v" == b.rail.drag.ck) {
                                        if (r > d && .3 * r >= l)return b.rail.drag = !1, !0;
                                        l > d && (b.rail.drag.dl = "f", e("body").scrollTop(e("body").scrollTop()))
                                    } else if ("h" == b.rail.drag.ck) {
                                        if (l > d && .3 * l >= r)return b.rail.drag = !1, !0;
                                        r > d && (b.rail.drag.dl = "f", e("body").scrollLeft(e("body").scrollLeft()))
                                    }
                                }
                                if (b.synched("touchmove", function () {
                                        b.rail.drag && 2 == b.rail.drag.pt && (b.prepareTransition && b.prepareTransition(0), b.rail.scrollable && b.setScrollTop(a), b.scrollmom.update(s, n), b.railh && b.railh.scrollable ? (b.setScrollLeft(c), b.showCursor(a, c)) : b.showCursor(a), S.isie10 && document.selection.clear())
                                    }), S.ischrome && b.istouchcapable && (i = !1), i)return b.cancelEvent(o)
                            } else if (1 == b.rail.drag.pt)return b.onmousemove(o)
                        }
                    }
                    if (b.onmousedown = function (e, o) {
                            if (!b.rail.drag || 1 == b.rail.drag.pt) {
                                if (b.railslocked)return b.cancelEvent(e);
                                b.cancelScroll(), b.rail.drag = {
                                    x: e.clientX,
                                    y: e.clientY,
                                    sx: b.scroll.x,
                                    sy: b.scroll.y,
                                    pt: 1,
                                    hr: !!o
                                };
                                var t = b.getTarget(e);
                                return !b.ispage && S.hasmousecapture && t.setCapture(), b.isiframe && !S.hasmousecapture && (b.saved.csspointerevents = b.doc.css("pointer-events"), b.css(b.doc, {"pointer-events": "none"})), b.hasmoving = !1, b.cancelEvent(e)
                            }
                        }, b.onmouseup = function (e) {
                            return b.rail.drag ? 1 != b.rail.drag.pt ? !0 : (S.hasmousecapture && document.releaseCapture(), b.isiframe && !S.hasmousecapture && b.doc.css("pointer-events", b.saved.csspointerevents), b.rail.drag = !1, b.hasmoving && b.triggerScrollEnd(), b.cancelEvent(e)) : void 0
                        }, b.onmousemove = function (e) {
                            if (b.rail.drag) {
                                if (1 == b.rail.drag.pt) {
                                    if (S.ischrome && 0 == e.which)return b.onmouseup(e);
                                    if (b.cursorfreezed = !0, b.hasmoving = !0, b.rail.drag.hr) {
                                        b.scroll.x = b.rail.drag.sx + (e.clientX - b.rail.drag.x), 0 > b.scroll.x && (b.scroll.x = 0);
                                        var o = b.scrollvaluemaxw;
                                        b.scroll.x > o && (b.scroll.x = o)
                                    } else b.scroll.y = b.rail.drag.sy + (e.clientY - b.rail.drag.y), 0 > b.scroll.y && (b.scroll.y = 0), o = b.scrollvaluemax, b.scroll.y > o && (b.scroll.y = o);
                                    return b.synched("mousemove", function () {
                                        b.rail.drag && 1 == b.rail.drag.pt && (b.showCursor(), b.rail.drag.hr ? b.hasreversehr ? b.doScrollLeft(b.scrollvaluemaxw - Math.round(b.scroll.x * b.scrollratio.x), b.opt.cursordragspeed) : b.doScrollLeft(Math.round(b.scroll.x * b.scrollratio.x), b.opt.cursordragspeed) : b.doScrollTop(Math.round(b.scroll.y * b.scrollratio.y), b.opt.cursordragspeed))
                                    }), b.cancelEvent(e)
                                }
                            } else b.checkarea = 0
                        }, S.cantouch || b.opt.touchbehavior)b.onpreventclick = function (e) {
                        return b.preventclick ? (b.preventclick.tg.onclick = b.preventclick.click, b.preventclick = !1, b.cancelEvent(e)) : void 0
                    }, b.bind(b.win, "mousedown", b.ontouchstart), b.onclick = S.isios ? !1 : function (e) {
                        return b.lastmouseup ? (b.lastmouseup = !1, b.cancelEvent(e)) : !0
                    }, b.opt.grabcursorenabled && S.cursorgrabvalue && (b.css(b.ispage ? b.doc : b.win, {cursor: S.cursorgrabvalue}), b.css(b.rail, {cursor: S.cursorgrabvalue})); else {
                        var v = function (e) {
                            if (b.selectiondrag) {
                                if (e) {
                                    var o = b.win.outerHeight();
                                    e = e.pageY - b.selectiondrag.top, e > 0 && o > e && (e = 0), e >= o && (e -= o), b.selectiondrag.df = e
                                }
                                0 != b.selectiondrag.df && (b.doScrollBy(2 * -Math.floor(b.selectiondrag.df / 6)), b.debounced("doselectionscroll", function () {
                                    v()
                                }, 50))
                            }
                        };
                        b.hasTextSelected = "getSelection" in document ? function () {
                            return 0 < document.getSelection().rangeCount
                        } : "selection" in document ? function () {
                            return "None" != document.selection.type
                        } : function () {
                            return !1
                        }, b.onselectionstart = function (e) {
                            b.ispage || (b.selectiondrag = b.win.offset())
                        }, b.onselectionend = function (e) {
                            b.selectiondrag = !1
                        }, b.onselectiondrag = function (e) {
                            b.selectiondrag && b.hasTextSelected() && b.debounced("selectionscroll", function () {
                                v(e)
                            }, 250)
                        }
                    }
                    S.hasw3ctouch ? (b.css(b.rail, {"touch-action": "none"}), b.css(b.cursor, {"touch-action": "none"}), b.bind(b.win, "pointerdown", b.ontouchstart), b.bind(document, "pointerup", b.ontouchend), b.bind(document, "pointermove", b.ontouchmove)) : S.hasmstouch ? (b.css(b.rail, {"-ms-touch-action": "none"}), b.css(b.cursor, {"-ms-touch-action": "none"}), b.bind(b.win, "MSPointerDown", b.ontouchstart), b.bind(document, "MSPointerUp", b.ontouchend), b.bind(document, "MSPointerMove", b.ontouchmove), b.bind(b.cursor, "MSGestureHold", function (e) {
                        e.preventDefault()
                    }), b.bind(b.cursor, "contextmenu", function (e) {
                        e.preventDefault()
                    })) : this.istouchcapable && (b.bind(b.win, "touchstart", b.ontouchstart), b.bind(document, "touchend", b.ontouchend), b.bind(document, "touchcancel", b.ontouchend), b.bind(document, "touchmove", b.ontouchmove)), (b.opt.cursordragontouch || !S.cantouch && !b.opt.touchbehavior) && (b.rail.css({cursor: "default"}), b.railh && b.railh.css({cursor: "default"}), b.jqbind(b.rail, "mouseenter", function () {
                        return b.ispage || b.win.is(":visible") ? (b.canshowonmouseevent && b.showCursor(), void(b.rail.active = !0)) : !1
                    }), b.jqbind(b.rail, "mouseleave", function () {
                        b.rail.active = !1, b.rail.drag || b.hideCursor()
                    }), b.opt.sensitiverail && (b.bind(b.rail, "click", function (e) {
                        b.doRailClick(e, !1, !1)
                    }), b.bind(b.rail, "dblclick", function (e) {
                        b.doRailClick(e, !0, !1)
                    }), b.bind(b.cursor, "click", function (e) {
                        b.cancelEvent(e)
                    }), b.bind(b.cursor, "dblclick", function (e) {
                        b.cancelEvent(e)
                    })), b.railh && (b.jqbind(b.railh, "mouseenter", function () {
                        return b.ispage || b.win.is(":visible") ? (b.canshowonmouseevent && b.showCursor(), void(b.rail.active = !0)) : !1
                    }), b.jqbind(b.railh, "mouseleave", function () {
                        b.rail.active = !1, b.rail.drag || b.hideCursor()
                    }), b.opt.sensitiverail && (b.bind(b.railh, "click", function (e) {
                        b.doRailClick(e, !1, !0)
                    }), b.bind(b.railh, "dblclick", function (e) {
                        b.doRailClick(e, !0, !0)
                    }), b.bind(b.cursorh, "click", function (e) {
                        b.cancelEvent(e)
                    }), b.bind(b.cursorh, "dblclick", function (e) {
                        b.cancelEvent(e)
                    })))), S.cantouch || b.opt.touchbehavior ? (b.bind(S.hasmousecapture ? b.win : document, "mouseup", b.ontouchend), b.bind(document, "mousemove", b.ontouchmove), b.onclick && b.bind(document, "click", b.onclick), b.opt.cursordragontouch ? (b.bind(b.cursor, "mousedown", b.onmousedown), b.bind(b.cursor, "mouseup", b.onmouseup), b.cursorh && b.bind(b.cursorh, "mousedown", function (e) {
                        b.onmousedown(e, !0)
                    }), b.cursorh && b.bind(b.cursorh, "mouseup", b.onmouseup)) : (b.bind(b.rail, "mousedown", function (e) {
                        e.preventDefault()
                    }), b.railh && b.bind(b.railh, "mousedown", function (e) {
                        e.preventDefault()
                    }))) : (b.bind(S.hasmousecapture ? b.win : document, "mouseup", b.onmouseup), b.bind(document, "mousemove", b.onmousemove), b.onclick && b.bind(document, "click", b.onclick), b.bind(b.cursor, "mousedown", b.onmousedown), b.bind(b.cursor, "mouseup", b.onmouseup), b.railh && (b.bind(b.cursorh, "mousedown", function (e) {
                        b.onmousedown(e, !0)
                    }), b.bind(b.cursorh, "mouseup", b.onmouseup)), !b.ispage && b.opt.enablescrollonselection && (b.bind(b.win[0], "mousedown", b.onselectionstart), b.bind(document, "mouseup", b.onselectionend), b.bind(b.cursor, "mouseup", b.onselectionend), b.cursorh && b.bind(b.cursorh, "mouseup", b.onselectionend), b.bind(document, "mousemove", b.onselectiondrag)), b.zoom && (b.jqbind(b.zoom, "mouseenter", function () {
                        b.canshowonmouseevent && b.showCursor(), b.rail.active = !0
                    }), b.jqbind(b.zoom, "mouseleave", function () {
                        b.rail.active = !1, b.rail.drag || b.hideCursor()
                    }))), b.opt.enablemousewheel && (b.isiframe || b.mousewheel(S.isie && b.ispage ? document : b.win, b.onmousewheel),
                        b.mousewheel(b.rail, b.onmousewheel), b.railh && b.mousewheel(b.railh, b.onmousewheelhr)), b.ispage || S.cantouch || /HTML|^BODY/.test(b.win[0].nodeName) || (b.win.attr("tabindex") || b.win.attr({tabindex: i++}), b.jqbind(b.win, "focus", function (e) {
                        o = b.getTarget(e).id || !0, b.hasfocus = !0, b.canshowonmouseevent && b.noticeCursor()
                    }), b.jqbind(b.win, "blur", function (e) {
                        o = !1, b.hasfocus = !1
                    }), b.jqbind(b.win, "mouseenter", function (e) {
                        t = b.getTarget(e).id || !0, b.hasmousefocus = !0, b.canshowonmouseevent && b.noticeCursor()
                    }), b.jqbind(b.win, "mouseleave", function () {
                        t = !1, b.hasmousefocus = !1, b.rail.drag || b.hideCursor()
                    }))
                }
                if (b.onkeypress = function (i) {
                        if (b.railslocked && 0 == b.page.maxh)return !0;
                        i = i ? i : window.e;
                        var r = b.getTarget(i);
                        if (r && /INPUT|TEXTAREA|SELECT|OPTION/.test(r.nodeName) && (!r.getAttribute("type") && !r.type || !/submit|button|cancel/i.tp) || e(r).attr("contenteditable"))return !0;
                        if (b.hasfocus || b.hasmousefocus && !o || b.ispage && !o && !t) {
                            if (r = i.keyCode, b.railslocked && 27 != r)return b.cancelEvent(i);
                            var n = i.ctrlKey || !1, s = i.shiftKey || !1, l = !1;
                            switch (r) {
                                case 38:
                                case 63233:
                                    b.doScrollBy(72), l = !0;
                                    break;
                                case 40:
                                case 63235:
                                    b.doScrollBy(-72), l = !0;
                                    break;
                                case 37:
                                case 63232:
                                    b.railh && (n ? b.doScrollLeft(0) : b.doScrollLeftBy(72), l = !0);
                                    break;
                                case 39:
                                case 63234:
                                    b.railh && (n ? b.doScrollLeft(b.page.maxw) : b.doScrollLeftBy(-72), l = !0);
                                    break;
                                case 33:
                                case 63276:
                                    b.doScrollBy(b.view.h), l = !0;
                                    break;
                                case 34:
                                case 63277:
                                    b.doScrollBy(-b.view.h), l = !0;
                                    break;
                                case 36:
                                case 63273:
                                    b.railh && n ? b.doScrollPos(0, 0) : b.doScrollTo(0), l = !0;
                                    break;
                                case 35:
                                case 63275:
                                    b.railh && n ? b.doScrollPos(b.page.maxw, b.page.maxh) : b.doScrollTo(b.page.maxh), l = !0;
                                    break;
                                case 32:
                                    b.opt.spacebarenabled && (s ? b.doScrollBy(b.view.h) : b.doScrollBy(-b.view.h), l = !0);
                                    break;
                                case 27:
                                    b.zoomactive && (b.doZoom(), l = !0)
                            }
                            if (l)return b.cancelEvent(i)
                        }
                    }, b.opt.enablekeyboard && b.bind(document, S.isopera && !S.isopera12 ? "keypress" : "keydown", b.onkeypress), b.bind(document, "keydown", function (e) {
                        e.ctrlKey && (b.wheelprevented = !0)
                    }), b.bind(document, "keyup", function (e) {
                        e.ctrlKey || (b.wheelprevented = !1)
                    }), b.bind(window, "blur", function (e) {
                        b.wheelprevented = !1
                    }), b.bind(window, "resize", b.lazyResize), b.bind(window, "orientationchange", b.lazyResize), b.bind(window, "load", b.lazyResize), S.ischrome && !b.ispage && !b.haswrapper) {
                    var y = b.win.attr("style"), a = parseFloat(b.win.css("width")) + 1;
                    b.win.css("width", a), b.synched("chromefix", function () {
                        b.win.attr("style", y)
                    })
                }
                b.onAttributeChange = function (e) {
                    b.lazyResize(b.isieold ? 250 : 30)
                }, b.isie11 || !1 === u || (b.observerbody = new u(function (o) {
                    return o.forEach(function (o) {
                        return "attributes" == o.type ? e("body").hasClass("modal-open") && e("body").hasClass("modal-dialog") && !e.contains(e(".modal-dialog")[0], b.doc[0]) ? b.hide() : b.show() : void 0
                    }), document.body.scrollHeight != b.page.maxh ? b.lazyResize(30) : void 0
                }), b.observerbody.observe(document.body, {
                    childList: !0,
                    subtree: !0,
                    characterData: !1,
                    attributes: !0,
                    attributeFilter: ["class"]
                })), b.ispage || b.haswrapper || (!1 !== u ? (b.observer = new u(function (e) {
                    e.forEach(b.onAttributeChange)
                }), b.observer.observe(b.win[0], {
                    childList: !0,
                    characterData: !1,
                    attributes: !0,
                    subtree: !1
                }), b.observerremover = new u(function (e) {
                    e.forEach(function (e) {
                        if (0 < e.removedNodes.length)for (var o in e.removedNodes)if (b && e.removedNodes[o] == b.win[0])return b.remove()
                    })
                }), b.observerremover.observe(b.win[0].parentNode, {
                    childList: !0,
                    characterData: !1,
                    attributes: !1,
                    subtree: !1
                })) : (b.bind(b.win, S.isie && !S.isie9 ? "propertychange" : "DOMAttrModified", b.onAttributeChange), S.isie9 && b.win[0].attachEvent("onpropertychange", b.onAttributeChange), b.bind(b.win, "DOMNodeRemoved", function (e) {
                    e.target == b.win[0] && b.remove()
                }))), !b.ispage && b.opt.boxzoom && b.bind(window, "resize", b.resizeZoom), b.istextarea && (b.bind(b.win, "keydown", b.lazyResize), b.bind(b.win, "mouseup", b.lazyResize)), b.lazyResize(30)
            }
            if ("IFRAME" == this.doc[0].nodeName) {
                var x = function () {
                    b.iframexd = !1;
                    var o;
                    try {
                        o = "contentDocument" in this ? this.contentDocument : this.contentWindow.document
                    } catch (t) {
                        b.iframexd = !0, o = !1
                    }
                    if (b.iframexd)return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0;
                    if (b.forcescreen = !0, b.isiframe && (b.iframe = {
                            doc: e(o),
                            html: b.doc.contents().find("html")[0],
                            body: b.doc.contents().find("body")[0]
                        }, b.getContentSize = function () {
                            return {
                                w: Math.max(b.iframe.html.scrollWidth, b.iframe.body.scrollWidth),
                                h: Math.max(b.iframe.html.scrollHeight, b.iframe.body.scrollHeight)
                            }
                        }, b.docscroll = e(b.iframe.body)), !S.isios && b.opt.iframeautoresize && !b.isiframe) {
                        b.win.scrollTop(0), b.doc.height("");
                        var i = Math.max(o.getElementsByTagName("html")[0].scrollHeight, o.body.scrollHeight);
                        b.doc.height(i)
                    }
                    b.lazyResize(30), S.isie7 && b.css(e(b.iframe.html), r), b.css(e(b.iframe.body), r), S.isios && b.haswrapper && b.css(e(o.body), {"-webkit-transform": "translate3d(0,0,0)"}), "contentWindow" in this ? b.bind(this.contentWindow, "scroll", b.onscroll) : b.bind(o, "scroll", b.onscroll), b.opt.enablemousewheel && b.mousewheel(o, b.onmousewheel), b.opt.enablekeyboard && b.bind(o, S.isopera ? "keypress" : "keydown", b.onkeypress), (S.cantouch || b.opt.touchbehavior) && (b.bind(o, "mousedown", b.ontouchstart), b.bind(o, "mousemove", function (e) {
                        return b.ontouchmove(e, !0)
                    }), b.opt.grabcursorenabled && S.cursorgrabvalue && b.css(e(o.body), {cursor: S.cursorgrabvalue})), b.bind(o, "mouseup", b.ontouchend), b.zoom && (b.opt.dblclickzoom && b.bind(o, "dblclick", b.doZoom), b.ongesturezoom && b.bind(o, "gestureend", b.ongesturezoom))
                };
                this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function () {
                    x.call(b.doc[0], !1)
                }, 500), b.bind(this.doc, "load", x)
            }
        }, this.showCursor = function (e, o) {
            if (b.cursortimeout && (clearTimeout(b.cursortimeout), b.cursortimeout = 0), b.rail) {
                if (b.autohidedom && (b.autohidedom.stop().css({opacity: b.opt.cursoropacitymax}), b.cursoractive = !0), b.rail.drag && 1 == b.rail.drag.pt || (void 0 !== e && !1 !== e && (b.scroll.y = Math.round(1 * e / b.scrollratio.y)), void 0 !== o && (b.scroll.x = Math.round(1 * o / b.scrollratio.x))), b.cursor.css({
                        height: b.cursorheight,
                        top: b.scroll.y
                    }), b.cursorh) {
                    var t = b.hasreversehr ? b.scrollvaluemaxw - b.scroll.x : b.scroll.x;
                    !b.rail.align && b.rail.visibility ? b.cursorh.css({
                        width: b.cursorwidth,
                        left: t + b.rail.width
                    }) : b.cursorh.css({width: b.cursorwidth, left: t}), b.cursoractive = !0
                }
                b.zoom && b.zoom.stop().css({opacity: b.opt.cursoropacitymax})
            }
        }, this.hideCursor = function (e) {
            b.cursortimeout || !b.rail || !b.autohidedom || b.hasmousefocus && "leave" == b.opt.autohidemode || (b.cursortimeout = setTimeout(function () {
                b.rail.active && b.showonmouseevent || (b.autohidedom.stop().animate({opacity: b.opt.cursoropacitymin}), b.zoom && b.zoom.stop().animate({opacity: b.opt.cursoropacitymin}), b.cursoractive = !1), b.cursortimeout = 0
            }, e || b.opt.hidecursordelay))
        }, this.noticeCursor = function (e, o, t) {
            b.showCursor(o, t), b.rail.active || b.hideCursor(e)
        }, this.getContentSize = b.ispage ? function () {
            return {
                w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }
        } : b.haswrapper ? function () {
            return {
                w: b.doc.outerWidth() + parseInt(b.win.css("paddingLeft")) + parseInt(b.win.css("paddingRight")),
                h: b.doc.outerHeight() + parseInt(b.win.css("paddingTop")) + parseInt(b.win.css("paddingBottom"))
            }
        } : function () {
            return {w: b.docscroll[0].scrollWidth, h: b.docscroll[0].scrollHeight}
        }, this.onResize = function (e, o) {
            if (!b || !b.win)return !1;
            if (!b.haswrapper && !b.ispage) {
                if ("none" == b.win.css("display"))return b.visibility && b.hideRail().hideRailHr(), !1;
                b.hidden || b.visibility || b.showRail().showRailHr()
            }
            var t = b.page.maxh, i = b.page.maxw, r = b.view.h, n = b.view.w;
            if (b.view = {
                    w: b.ispage ? b.win.width() : parseInt(b.win[0].clientWidth),
                    h: b.ispage ? b.win.height() : parseInt(b.win[0].clientHeight)
                }, b.page = o ? o : b.getContentSize(), b.page.maxh = Math.max(0, b.page.h - b.view.h), b.page.maxw = Math.max(0, b.page.w - b.view.w), b.page.maxh == t && b.page.maxw == i && b.view.w == n && b.view.h == r) {
                if (b.ispage)return b;
                if (t = b.win.offset(), b.lastposition && (i = b.lastposition, i.top == t.top && i.left == t.left))return b;
                b.lastposition = t
            }
            return 0 == b.page.maxh ? (b.hideRail(), b.scrollvaluemax = 0, b.scroll.y = 0, b.scrollratio.y = 0, b.cursorheight = 0, b.setScrollTop(0), b.rail && (b.rail.scrollable = !1)) : (b.page.maxh -= b.opt.railpadding.top + b.opt.railpadding.bottom, b.rail.scrollable = !0), 0 == b.page.maxw ? (b.hideRailHr(), b.scrollvaluemaxw = 0, b.scroll.x = 0, b.scrollratio.x = 0, b.cursorwidth = 0, b.setScrollLeft(0), b.railh && (b.railh.scrollable = !1)) : (b.page.maxw -= b.opt.railpadding.left + b.opt.railpadding.right, b.railh && (b.railh.scrollable = b.opt.horizrailenabled)), b.railslocked = b.locked || 0 == b.page.maxh && 0 == b.page.maxw, b.railslocked ? (b.ispage || b.updateScrollBar(b.view), !1) : (b.hidden || b.visibility ? !b.railh || b.hidden || b.railh.visibility || b.showRailHr() : b.showRail().showRailHr(), b.istextarea && b.win.css("resize") && "none" != b.win.css("resize") && (b.view.h -= 20), b.cursorheight = Math.min(b.view.h, Math.round(b.view.h / b.page.h * b.view.h)), b.cursorheight = b.opt.cursorfixedheight ? b.opt.cursorfixedheight : Math.max(b.opt.cursorminheight, b.cursorheight), b.cursorwidth = Math.min(b.view.w, Math.round(b.view.w / b.page.w * b.view.w)), b.cursorwidth = b.opt.cursorfixedheight ? b.opt.cursorfixedheight : Math.max(b.opt.cursorminheight, b.cursorwidth), b.scrollvaluemax = b.view.h - b.cursorheight - b.cursor.hborder - (b.opt.railpadding.top + b.opt.railpadding.bottom), b.railh && (b.railh.width = 0 < b.page.maxh ? b.view.w - b.rail.width : b.view.w, b.scrollvaluemaxw = b.railh.width - b.cursorwidth - b.cursorh.wborder - (b.opt.railpadding.left + b.opt.railpadding.right)), b.ispage || b.updateScrollBar(b.view), b.scrollratio = {
                x: b.page.maxw / b.scrollvaluemaxw,
                y: b.page.maxh / b.scrollvaluemax
            }, b.getScrollTop() > b.page.maxh ? b.doScrollTop(b.page.maxh) : (b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y)), b.scroll.x = Math.round(b.getScrollLeft() * (1 / b.scrollratio.x)), b.cursoractive && b.noticeCursor()), b.scroll.y && 0 == b.getScrollTop() && b.doScrollTo(Math.floor(b.scroll.y * b.scrollratio.y)), b)
        }, this.resize = b.onResize, this.hlazyresize = 0, this.lazyResize = function (e) {
            return b.haswrapper || b.hide(), b.hlazyresize && clearTimeout(b.hlazyresize), b.hlazyresize = setTimeout(function () {
                b && b.show().resize()
            }, 240), b
        }, this.jqbind = function (o, t, i) {
            b.events.push({e: o, n: t, f: i, q: !0}), e(o).bind(t, i)
        }, this.mousewheel = function (e, o, t) {
            if (e = "jquery" in e ? e[0] : e, "onwheel" in document.createElement("div"))b._bind(e, "wheel", o, t || !1); else {
                var i = void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                w(e, i, o, t || !1), "DOMMouseScroll" == i && w(e, "MozMousePixelScroll", o, t || !1)
            }
        }, S.haseventlistener ? (this.bind = function (e, o, t, i) {
            b._bind("jquery" in e ? e[0] : e, o, t, i || !1)
        }, this._bind = function (e, o, t, i) {
            b.events.push({e: e, n: o, f: t, b: i, q: !1}), e.addEventListener(o, t, i || !1)
        }, this.cancelEvent = function (e) {
            return e ? (e = e.original ? e.original : e, e.cancelable && e.preventDefault(), e.stopPropagation(), e.preventManipulation && e.preventManipulation(), !1) : !1
        }, this.stopPropagation = function (e) {
            return e ? (e = e.original ? e.original : e, e.stopPropagation(), !1) : !1
        }, this._unbind = function (e, o, t, i) {
            e.removeEventListener(o, t, i)
        }) : (this.bind = function (e, o, t, i) {
            var r = "jquery" in e ? e[0] : e;
            b._bind(r, o, function (e) {
                return (e = e || window.event || !1) && e.srcElement && (e.target = e.srcElement), "pageY" in e || (e.pageX = e.clientX + document.documentElement.scrollLeft, e.pageY = e.clientY + document.documentElement.scrollTop), !1 === t.call(r, e) || !1 === i ? b.cancelEvent(e) : !0
            })
        }, this._bind = function (e, o, t, i) {
            b.events.push({e: e, n: o, f: t, b: i, q: !1}), e.attachEvent ? e.attachEvent("on" + o, t) : e["on" + o] = t
        }, this.cancelEvent = function (e) {
            return (e = window.event || !1) ? (e.cancelBubble = !0, e.cancel = !0, e.returnValue = !1) : !1
        }, this.stopPropagation = function (e) {
            return (e = window.event || !1) ? (e.cancelBubble = !0, !1) : !1
        }, this._unbind = function (e, o, t, i) {
            e.detachEvent ? e.detachEvent("on" + o, t) : e["on" + o] = !1
        }), this.unbindAll = function () {
            for (var e = 0; e < b.events.length; e++) {
                var o = b.events[e];
                o.q ? o.e.unbind(o.n, o.f) : b._unbind(o.e, o.n, o.f, o.b)
            }
        }, this.showRail = function () {
            return 0 == b.page.maxh || !b.ispage && "none" == b.win.css("display") || (b.visibility = !0, b.rail.visibility = !0, b.rail.css("display", "block")), b
        }, this.showRailHr = function () {
            return b.railh ? (0 == b.page.maxw || !b.ispage && "none" == b.win.css("display") || (b.railh.visibility = !0, b.railh.css("display", "block")), b) : b
        }, this.hideRail = function () {
            return b.visibility = !1, b.rail.visibility = !1, b.rail.css("display", "none"), b
        }, this.hideRailHr = function () {
            return b.railh ? (b.railh.visibility = !1, b.railh.css("display", "none"), b) : b
        }, this.show = function () {
            return b.hidden = !1, b.railslocked = !1, b.showRail().showRailHr()
        }, this.hide = function () {
            return b.hidden = !0, b.railslocked = !0, b.hideRail().hideRailHr()
        }, this.toggle = function () {
            return b.hidden ? b.show() : b.hide()
        }, this.remove = function () {
            b.stop(), b.cursortimeout && clearTimeout(b.cursortimeout);
            for (var o in b.delaylist)b.delaylist[o] && a(b.delaylist[o].h);
            for (b.doZoomOut(), b.unbindAll(), S.isie9 && b.win[0].detachEvent("onpropertychange", b.onAttributeChange), !1 !== b.observer && b.observer.disconnect(), !1 !== b.observerremover && b.observerremover.disconnect(), !1 !== b.observerbody && b.observerbody.disconnect(), b.events = null, b.cursor && b.cursor.remove(), b.cursorh && b.cursorh.remove(), b.rail && b.rail.remove(), b.railh && b.railh.remove(), b.zoom && b.zoom.remove(), o = 0; o < b.saved.css.length; o++) {
                var t = b.saved.css[o];
                t[0].css(t[1], void 0 === t[2] ? "" : t[2])
            }
            b.saved = !1, b.me.data("__nicescroll", "");
            var i = e.nicescroll;
            i.each(function (e) {
                if (this && this.id === b.id) {
                    delete i[e];
                    for (var o = ++e; o < i.length; o++, e++)i[e] = i[o];
                    i.length--, i.length && delete i[i.length]
                }
            });
            for (var r in b)b[r] = null, delete b[r];
            b = null
        }, this.scrollstart = function (e) {
            return this.onscrollstart = e, b
        }, this.scrollend = function (e) {
            return this.onscrollend = e, b
        }, this.scrollcancel = function (e) {
            return this.onscrollcancel = e, b
        }, this.zoomin = function (e) {
            return this.onzoomin = e, b
        }, this.zoomout = function (e) {
            return this.onzoomout = e, b
        }, this.isScrollable = function (o) {
            if (o = o.target ? o.target : o, "OPTION" == o.nodeName)return !0;
            for (; o && 1 == o.nodeType && !/^BODY|HTML/.test(o.nodeName);) {
                var t = e(o), t = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
                if (/scroll|auto/.test(t))return o.clientHeight != o.scrollHeight;
                o = o.parentNode ? o.parentNode : !1
            }
            return !1
        }, this.getViewport = function (o) {
            for (o = o && o.parentNode ? o.parentNode : !1; o && 1 == o.nodeType && !/^BODY|HTML/.test(o.nodeName);) {
                var t = e(o);
                if (/fixed|absolute/.test(t.css("position")))return t;
                var i = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
                if (/scroll|auto/.test(i) && o.clientHeight != o.scrollHeight || 0 < t.getNiceScroll().length)return t;
                o = o.parentNode ? o.parentNode : !1
            }
            return !1
        }, this.triggerScrollEnd = function () {
            if (b.onscrollend) {
                var e = b.getScrollLeft(), o = b.getScrollTop();
                b.onscrollend.call(b, {type: "scrollend", current: {x: e, y: o}, end: {x: e, y: o}})
            }
        }, this.onmousewheel = function (e) {
            if (!b.wheelprevented) {
                if (b.railslocked)return b.debounced("checkunlock", b.resize, 250), !0;
                if (b.rail.drag)return b.cancelEvent(e);
                if ("auto" == b.opt.oneaxismousemode && 0 != e.deltaX && (b.opt.oneaxismousemode = !1), b.opt.oneaxismousemode && 0 == e.deltaX && !b.rail.scrollable)return b.railh && b.railh.scrollable ? b.onmousewheelhr(e) : !0;
                var o = +new Date, t = !1;
                return b.opt.preservenativescrolling && b.checkarea + 600 < o && (b.nativescrollingarea = b.isScrollable(e), t = !0), b.checkarea = o, b.nativescrollingarea ? !0 : ((e = v(e, !1, t)) && (b.checkarea = 0), e)
            }
        }, this.onmousewheelhr = function (e) {
            if (!b.wheelprevented) {
                if (b.railslocked || !b.railh.scrollable)return !0;
                if (b.rail.drag)return b.cancelEvent(e);
                var o = +new Date, t = !1;
                return b.opt.preservenativescrolling && b.checkarea + 600 < o && (b.nativescrollingarea = b.isScrollable(e), t = !0), b.checkarea = o, b.nativescrollingarea ? !0 : b.railslocked ? b.cancelEvent(e) : v(e, !0, t)
            }
        }, this.stop = function () {
            return b.cancelScroll(), b.scrollmon && b.scrollmon.stop(), b.cursorfreezed = !1, b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y)), b.noticeCursor(), b
        }, this.getTransitionSpeed = function (e) {
            return e = Math.min(Math.round(10 * b.opt.scrollspeed), Math.round(e / 20 * b.opt.scrollspeed)), e > 20 ? e : 0
        }, b.opt.smoothscroll ? b.ishwscroll && S.hastransition && b.opt.usetransition && b.opt.smoothscroll ? (this.prepareTransition = function (e, o) {
            var t = o ? e > 20 ? e : 0 : b.getTransitionSpeed(e), i = t ? S.prefixstyle + "transform " + t + "ms ease-out" : "";
            return b.lasttransitionstyle && b.lasttransitionstyle == i || (b.lasttransitionstyle = i, b.doc.css(S.transitionstyle, i)), t
        }, this.doScrollLeft = function (e, o) {
            var t = b.scrollrunning ? b.newscrolly : b.getScrollTop();
            b.doScrollPos(e, t, o)
        }, this.doScrollTop = function (e, o) {
            var t = b.scrollrunning ? b.newscrollx : b.getScrollLeft();
            b.doScrollPos(t, e, o)
        }, this.doScrollPos = function (e, o, t) {
            var i = b.getScrollTop(), r = b.getScrollLeft();
            return (0 > (b.newscrolly - i) * (o - i) || 0 > (b.newscrollx - r) * (e - r)) && b.cancelScroll(), 0 == b.opt.bouncescroll && (0 > o ? o = 0 : o > b.page.maxh && (o = b.page.maxh), 0 > e ? e = 0 : e > b.page.maxw && (e = b.page.maxw)), b.scrollrunning && e == b.newscrollx && o == b.newscrolly ? !1 : (b.newscrolly = o, b.newscrollx = e, b.newscrollspeed = t || !1, b.timer ? !1 : void(b.timer = setTimeout(function () {
                var t = b.getScrollTop(), i = b.getScrollLeft(), r = Math.round(Math.sqrt(Math.pow(e - i, 2) + Math.pow(o - t, 2))), r = b.newscrollspeed && 1 < b.newscrollspeed ? b.newscrollspeed : b.getTransitionSpeed(r);
                b.newscrollspeed && 1 >= b.newscrollspeed && (r *= b.newscrollspeed), b.prepareTransition(r, !0), b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm), r > 0 && (!b.scrollrunning && b.onscrollstart && b.onscrollstart.call(b, {
                    type: "scrollstart",
                    current: {x: i, y: t},
                    request: {x: e, y: o},
                    end: {x: b.newscrollx, y: b.newscrolly},
                    speed: r
                }), S.transitionend ? b.scrollendtrapped || (b.scrollendtrapped = !0, b.bind(b.doc, S.transitionend, b.onScrollTransitionEnd, !1)) : (b.scrollendtrapped && clearTimeout(b.scrollendtrapped), b.scrollendtrapped = setTimeout(b.onScrollTransitionEnd, r)), b.timerscroll = {
                    bz: new T(t, b.newscrolly, r, 0, 0, .58, 1),
                    bh: new T(i, b.newscrollx, r, 0, 0, .58, 1)
                }, b.cursorfreezed || (b.timerscroll.tm = setInterval(function () {
                    b.showCursor(b.getScrollTop(), b.getScrollLeft())
                }, 60))), b.synched("doScroll-set", function () {
                    b.timer = 0, b.scrollendtrapped && (b.scrollrunning = !0), b.setScrollTop(b.newscrolly), b.setScrollLeft(b.newscrollx), b.scrollendtrapped || b.onScrollTransitionEnd()
                })
            }, 50)))
        }, this.cancelScroll = function () {
            if (!b.scrollendtrapped)return !0;
            var e = b.getScrollTop(), o = b.getScrollLeft();
            return b.scrollrunning = !1, S.transitionend || clearTimeout(S.transitionend), b.scrollendtrapped = !1, b._unbind(b.doc[0], S.transitionend, b.onScrollTransitionEnd), b.prepareTransition(0), b.setScrollTop(e), b.railh && b.setScrollLeft(o), b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm), b.timerscroll = !1, b.cursorfreezed = !1, b.showCursor(e, o), b
        }, this.onScrollTransitionEnd = function () {
            b.scrollendtrapped && b._unbind(b.doc[0], S.transitionend, b.onScrollTransitionEnd), b.scrollendtrapped = !1, b.prepareTransition(0), b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm), b.timerscroll = !1;
            var e = b.getScrollTop(), o = b.getScrollLeft();
            return b.setScrollTop(e), b.railh && b.setScrollLeft(o), b.noticeCursor(!1, e, o), b.cursorfreezed = !1, 0 > e ? e = 0 : e > b.page.maxh && (e = b.page.maxh), 0 > o ? o = 0 : o > b.page.maxw && (o = b.page.maxw), e != b.newscrolly || o != b.newscrollx ? b.doScrollPos(o, e, b.opt.snapbackspeed) : (b.onscrollend && b.scrollrunning && b.triggerScrollEnd(), void(b.scrollrunning = !1))
        }) : (this.doScrollLeft = function (e, o) {
            var t = b.scrollrunning ? b.newscrolly : b.getScrollTop();
            b.doScrollPos(e, t, o)
        }, this.doScrollTop = function (e, o) {
            var t = b.scrollrunning ? b.newscrollx : b.getScrollLeft();
            b.doScrollPos(t, e, o)
        }, this.doScrollPos = function (e, o, t) {
            function i() {
                if (b.cancelAnimationFrame)return !0;
                if (b.scrollrunning = !0, u = 1 - u)return b.timer = l(i) || 1;
                var e, o, t = 0, r = o = b.getScrollTop();
                b.dst.ay ? (r = b.bzscroll ? b.dst.py + b.bzscroll.getNow() * b.dst.ay : b.newscrolly, e = r - o, (0 > e && r < b.newscrolly || e > 0 && r > b.newscrolly) && (r = b.newscrolly), b.setScrollTop(r), r == b.newscrolly && (t = 1)) : t = 1, o = e = b.getScrollLeft(), b.dst.ax ? (o = b.bzscroll ? b.dst.px + b.bzscroll.getNow() * b.dst.ax : b.newscrollx, e = o - e, (0 > e && o < b.newscrollx || e > 0 && o > b.newscrollx) && (o = b.newscrollx), b.setScrollLeft(o), o == b.newscrollx && (t += 1)) : t += 1, 2 == t ? (b.timer = 0, b.cursorfreezed = !1, b.bzscroll = !1, b.scrollrunning = !1, 0 > r ? r = 0 : r > b.page.maxh && (r = Math.max(0, b.page.maxh)), 0 > o ? o = 0 : o > b.page.maxw && (o = b.page.maxw), o != b.newscrollx || r != b.newscrolly ? b.doScrollPos(o, r) : b.onscrollend && b.triggerScrollEnd()) : b.timer = l(i) || 1
            }

            if (o = void 0 === o || !1 === o ? b.getScrollTop(!0) : o, b.timer && b.newscrolly == o && b.newscrollx == e)return !0;
            b.timer && a(b.timer), b.timer = 0;
            var r = b.getScrollTop(), n = b.getScrollLeft();
            (0 > (b.newscrolly - r) * (o - r) || 0 > (b.newscrollx - n) * (e - n)) && b.cancelScroll(), b.newscrolly = o, b.newscrollx = e, b.bouncescroll && b.rail.visibility || (0 > b.newscrolly ? b.newscrolly = 0 : b.newscrolly > b.page.maxh && (b.newscrolly = b.page.maxh)), b.bouncescroll && b.railh.visibility || (0 > b.newscrollx ? b.newscrollx = 0 : b.newscrollx > b.page.maxw && (b.newscrollx = b.page.maxw)), b.dst = {}, b.dst.x = e - n, b.dst.y = o - r, b.dst.px = n, b.dst.py = r;
            var s = Math.round(Math.sqrt(Math.pow(b.dst.x, 2) + Math.pow(b.dst.y, 2)));
            b.dst.ax = b.dst.x / s, b.dst.ay = b.dst.y / s;
            var c = 0, d = s;
            if (0 == b.dst.x ? (c = r, d = o, b.dst.ay = 1, b.dst.py = 0) : 0 == b.dst.y && (c = n, d = e, b.dst.ax = 1, b.dst.px = 0), s = b.getTransitionSpeed(s), t && 1 >= t && (s *= t), b.bzscroll = s > 0 ? b.bzscroll ? b.bzscroll.update(d, s) : new T(c, d, s, 0, 1, 0, 1) : !1, !b.timer) {
                (r == b.page.maxh && o >= b.page.maxh || n == b.page.maxw && e >= b.page.maxw) && b.checkContentSize();
                var u = 1;
                b.cancelAnimationFrame = !1, b.timer = 1, b.onscrollstart && !b.scrollrunning && b.onscrollstart.call(b, {
                    type: "scrollstart",
                    current: {x: n, y: r},
                    request: {x: e, y: o},
                    end: {x: b.newscrollx, y: b.newscrolly},
                    speed: s
                }), i(), (r == b.page.maxh && o >= r || n == b.page.maxw && e >= n) && b.checkContentSize(), b.noticeCursor()
            }
        }, this.cancelScroll = function () {
            return b.timer && a(b.timer), b.timer = 0, b.bzscroll = !1, b.scrollrunning = !1, b
        }) : (this.doScrollLeft = function (e, o) {
            var t = b.getScrollTop();
            b.doScrollPos(e, t, o)
        }, this.doScrollTop = function (e, o) {
            var t = b.getScrollLeft();
            b.doScrollPos(t, e, o)
        }, this.doScrollPos = function (e, o, t) {
            var i = e > b.page.maxw ? b.page.maxw : e;
            0 > i && (i = 0);
            var r = o > b.page.maxh ? b.page.maxh : o;
            0 > r && (r = 0), b.synched("scroll", function () {
                b.setScrollTop(r), b.setScrollLeft(i)
            })
        }, this.cancelScroll = function () {
        }), this.doScrollBy = function (e, o) {
            var t = 0, t = o ? Math.floor((b.scroll.y - e) * b.scrollratio.y) : (b.timer ? b.newscrolly : b.getScrollTop(!0)) - e;
            if (b.bouncescroll) {
                var i = Math.round(b.view.h / 2);
                -i > t ? t = -i : t > b.page.maxh + i && (t = b.page.maxh + i)
            }
            return b.cursorfreezed = !1, i = b.getScrollTop(!0), 0 > t && 0 >= i ? b.noticeCursor() : t > b.page.maxh && i >= b.page.maxh ? (b.checkContentSize(), b.noticeCursor()) : void b.doScrollTop(t)
        }, this.doScrollLeftBy = function (e, o) {
            var t = 0, t = o ? Math.floor((b.scroll.x - e) * b.scrollratio.x) : (b.timer ? b.newscrollx : b.getScrollLeft(!0)) - e;
            if (b.bouncescroll) {
                var i = Math.round(b.view.w / 2);
                -i > t ? t = -i : t > b.page.maxw + i && (t = b.page.maxw + i)
            }
            return b.cursorfreezed = !1, i = b.getScrollLeft(!0), 0 > t && 0 >= i || t > b.page.maxw && i >= b.page.maxw ? b.noticeCursor() : void b.doScrollLeft(t)
        }, this.doScrollTo = function (e, o) {
            b.cursorfreezed = !1, b.doScrollTop(e)
        }, this.checkContentSize = function () {
            var e = b.getContentSize();
            e.h == b.page.h && e.w == b.page.w || b.resize(!1, e)
        }, b.onscroll = function (e) {
            b.rail.drag || b.cursorfreezed || b.synched("scroll", function () {
                b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y)), b.railh && (b.scroll.x = Math.round(b.getScrollLeft() * (1 / b.scrollratio.x))), b.noticeCursor()
            })
        }, b.bind(b.docscroll, "scroll", b.onscroll), this.doZoomIn = function (o) {
            if (!b.zoomactive) {
                b.zoomactive = !0, b.zoomrestore = {style: {}};
                var t, i = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "), r = b.win[0].style;
                for (t in i) {
                    var s = i[t];
                    b.zoomrestore.style[s] = void 0 !== r[s] ? r[s] : ""
                }
                return b.zoomrestore.style.width = b.win.css("width"), b.zoomrestore.style.height = b.win.css("height"), b.zoomrestore.padding = {
                    w: b.win.outerWidth() - b.win.width(),
                    h: b.win.outerHeight() - b.win.height()
                }, S.isios4 && (b.zoomrestore.scrollTop = e(window).scrollTop(), e(window).scrollTop(0)), b.win.css({
                    position: S.isios4 ? "absolute" : "fixed",
                    top: 0,
                    left: 0,
                    zIndex: n + 100,
                    margin: 0
                }), i = b.win.css("backgroundColor"), ("" == i || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(i)) && b.win.css("backgroundColor", "#fff"), b.rail.css({zIndex: n + 101}), b.zoom.css({zIndex: n + 102}), b.zoom.css("backgroundPosition", "0px -18px"), b.resizeZoom(), b.onzoomin && b.onzoomin.call(b), b.cancelEvent(o)
            }
        }, this.doZoomOut = function (o) {
            return b.zoomactive ? (b.zoomactive = !1, b.win.css("margin", ""), b.win.css(b.zoomrestore.style), S.isios4 && e(window).scrollTop(b.zoomrestore.scrollTop), b.rail.css({"z-index": b.zindex}), b.zoom.css({"z-index": b.zindex}), b.zoomrestore = !1, b.zoom.css("backgroundPosition", "0px 0px"), b.onResize(), b.onzoomout && b.onzoomout.call(b), b.cancelEvent(o)) : void 0
        }, this.doZoom = function (e) {
            return b.zoomactive ? b.doZoomOut(e) : b.doZoomIn(e)
        }, this.resizeZoom = function () {
            if (b.zoomactive) {
                var o = b.getScrollTop();
                b.win.css({
                    width: e(window).width() - b.zoomrestore.padding.w + "px",
                    height: e(window).height() - b.zoomrestore.padding.h + "px"
                }), b.onResize(), b.setScrollTop(Math.min(b.page.maxh, o))
            }
        }, this.init(), e.nicescroll.push(this)
    }, f = function (e) {
        var o = this;
        this.nc = e, this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0, this.snapy = this.snapx = !1, this.demuly = this.demulx = 0, this.lastscrolly = this.lastscrollx = -1, this.timer = this.chky = this.chkx = 0, this.time = function () {
            return +new Date
        }, this.reset = function (e, t) {
            o.stop();
            var i = o.time();
            o.steptime = 0, o.lasttime = i, o.speedx = 0, o.speedy = 0, o.lastx = e, o.lasty = t, o.lastscrollx = -1, o.lastscrolly = -1
        }, this.update = function (e, t) {
            var i = o.time();
            o.steptime = i - o.lasttime, o.lasttime = i;
            var i = t - o.lasty, r = e - o.lastx, n = o.nc.getScrollTop(), s = o.nc.getScrollLeft(), n = n + i, s = s + r;
            o.snapx = 0 > s || s > o.nc.page.maxw, o.snapy = 0 > n || n > o.nc.page.maxh, o.speedx = r, o.speedy = i, o.lastx = e, o.lasty = t
        }, this.stop = function () {
            o.nc.unsynched("domomentum2d"), o.timer && clearTimeout(o.timer), o.timer = 0, o.lastscrollx = -1, o.lastscrolly = -1
        }, this.doSnapy = function (e, t) {
            var i = !1;
            0 > t ? (t = 0, i = !0) : t > o.nc.page.maxh && (t = o.nc.page.maxh, i = !0), 0 > e ? (e = 0, i = !0) : e > o.nc.page.maxw && (e = o.nc.page.maxw, i = !0), i ? o.nc.doScrollPos(e, t, o.nc.opt.snapbackspeed) : o.nc.triggerScrollEnd()
        }, this.doMomentum = function (e) {
            var t = o.time(), i = e ? t + e : o.lasttime;
            e = o.nc.getScrollLeft();
            var r = o.nc.getScrollTop(), n = o.nc.page.maxh, s = o.nc.page.maxw;
            if (o.speedx = s > 0 ? Math.min(60, o.speedx) : 0, o.speedy = n > 0 ? Math.min(60, o.speedy) : 0, i = i && 60 >= t - i, (0 > r || r > n || 0 > e || e > s) && (i = !1), e = o.speedx && i ? o.speedx : !1, o.speedy && i && o.speedy || e) {
                var l = Math.max(16, o.steptime);
                l > 50 && (e = l / 50, o.speedx *= e, o.speedy *= e, l = 50), o.demulxy = 0, o.lastscrollx = o.nc.getScrollLeft(), o.chkx = o.lastscrollx, o.lastscrolly = o.nc.getScrollTop(), o.chky = o.lastscrolly;
                var a = o.lastscrollx, c = o.lastscrolly, d = function () {
                    var e = 600 < o.time() - t ? .04 : .02;
                    o.speedx && (a = Math.floor(o.lastscrollx - o.speedx * (1 - o.demulxy)), o.lastscrollx = a, 0 > a || a > s) && (e = .1), o.speedy && (c = Math.floor(o.lastscrolly - o.speedy * (1 - o.demulxy)), o.lastscrolly = c, 0 > c || c > n) && (e = .1), o.demulxy = Math.min(1, o.demulxy + e), o.nc.synched("domomentum2d", function () {
                        o.speedx && (o.nc.getScrollLeft(), o.chkx = a, o.nc.setScrollLeft(a)), o.speedy && (o.nc.getScrollTop(), o.chky = c, o.nc.setScrollTop(c)), o.timer || (o.nc.hideCursor(), o.doSnapy(a, c))
                    }), 1 > o.demulxy ? o.timer = setTimeout(d, l) : (o.stop(), o.nc.hideCursor(), o.doSnapy(a, c))
                };
                d()
            } else o.doSnapy(o.nc.getScrollLeft(), o.nc.getScrollTop())
        }
    }, w = e.fn.scrollTop;
    e.cssHooks.pageYOffset = {
        get: function (o, t, i) {
            return (t = e.data(o, "__nicescroll") || !1) && t.ishwscroll ? t.getScrollTop() : w.call(o)
        }, set: function (o, t) {
            var i = e.data(o, "__nicescroll") || !1;
            return i && i.ishwscroll ? i.setScrollTop(parseInt(t)) : w.call(o, t), this
        }
    }, e.fn.scrollTop = function (o) {
        if (void 0 === o) {
            var t = this[0] ? e.data(this[0], "__nicescroll") || !1 : !1;
            return t && t.ishwscroll ? t.getScrollTop() : w.call(this)
        }
        return this.each(function () {
            var t = e.data(this, "__nicescroll") || !1;
            t && t.ishwscroll ? t.setScrollTop(parseInt(o)) : w.call(e(this), o)
        })
    };
    var v = e.fn.scrollLeft;
    e.cssHooks.pageXOffset = {
        get: function (o, t, i) {
            return (t = e.data(o, "__nicescroll") || !1) && t.ishwscroll ? t.getScrollLeft() : v.call(o)
        }, set: function (o, t) {
            var i = e.data(o, "__nicescroll") || !1;
            return i && i.ishwscroll ? i.setScrollLeft(parseInt(t)) : v.call(o, t), this
        }
    }, e.fn.scrollLeft = function (o) {
        if (void 0 === o) {
            var t = this[0] ? e.data(this[0], "__nicescroll") || !1 : !1;
            return t && t.ishwscroll ? t.getScrollLeft() : v.call(this)
        }
        return this.each(function () {
            var t = e.data(this, "__nicescroll") || !1;
            t && t.ishwscroll ? t.setScrollLeft(parseInt(o)) : v.call(e(this), o)
        })
    };
    var b = function (o) {
        var t = this;
        if (this.length = 0, this.name = "nicescrollarray", this.each = function (o) {
                return e.each(t, o), t
            }, this.push = function (e) {
                t[t.length] = e, t.length++
            }, this.eq = function (e) {
                return t[e]
            }, o)for (var i = 0; i < o.length; i++) {
            var r = e.data(o[i], "__nicescroll") || !1;
            r && (this[this.length] = r, this.length++)
        }
        return this
    };
    !function (e, o, t) {
        for (var i = 0; i < o.length; i++)t(e, o[i])
    }(b.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" "), function (e, o) {
        e[o] = function () {
            var e = arguments;
            return this.each(function () {
                this[o].apply(this, e)
            })
        }
    }), e.fn.getNiceScroll = function (o) {
        return void 0 === o ? new b(this) : this[o] && e.data(this[o], "__nicescroll") || !1
    }, e.expr[":"].nicescroll = function (o) {
        return void 0 !== e.data(o, "__nicescroll")
    }, e.fn.niceScroll = function (o, t) {
        void 0 !== t || "object" != typeof o || "jquery" in o || (t = o, o = !1), t = e.extend({}, t);
        var i = new b;
        void 0 === t && (t = {}), o && (t.doc = e(o), t.win = e(this));
        var r = !("doc" in t);
        return r || "win" in t || (t.win = e(this)), this.each(function () {
            var o = e(this).data("__nicescroll") || !1;
            o || (t.doc = r ? e(this) : t.doc, o = new g(t, e(this)), e(this).data("__nicescroll", o)), i.push(o)
        }), 1 == i.length ? i[0] : i
    }, window.NiceScroll = {
        getjQuery: function () {
            return e
        }
    }, e.nicescroll || (e.nicescroll = new b, e.nicescroll.options = h)
});
!function (e) {
    e(function () {
        function e() {
            var e = document.getElementById("map"), t = new google.maps.DirectionsRenderer({preserveViewport: !0}), o = {
                center: new google.maps.LatLng(50.452606, 30.524959),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: !1,
                zoom: 15,
                styles: [{featureType: "landscape", stylers: [{color: "#dbdfe6"}]}, {
                    featureType: "poi",
                    elementType: "geometry.fill",
                    stylers: [{color: "#bec6d2"}]
                }, {
                    featureType: "water",
                    elementType: "geometry.fill",
                    stylers: [{hue: "#003bff"}, {color: "#bcc4d1"}]
                }, {
                    featureType: "road",
                    elementType: "geometry.fill",
                    stylers: [{color: "#ffffff"}]
                }, {
                    featureType: "transit.station.rail",
                    elementType: "geometry.stroke",
                    stylers: [{color: "#304669"}]
                }, {
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#304669"}]
                }, {
                    featureType: "poi.park",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#304669"}]
                }, {
                    featureType: "road.highway",
                    elementType: "labels.text.fill",
                    stylers: [{color: "#304669"}]
                }, {
                    featureType: "road.highway",
                    elementType: "geometry.stroke",
                    stylers: [{color: "#b3bcca"}]
                }, {
                    featureType: "road",
                    elementType: "labels.icon",
                    stylers: [{hue: "#2b3f5e"}]
                }, {
                    featureType: "transit",
                    elementType: "labels.icon",
                    stylers: [{hue: "#2b3f5e"}]
                }, {featureType: "road", elementType: "labels.text.fill", stylers: [{color: "#24344e"}]}]
            };
            map = new google.maps.Map(e, o), map.setZoom(15);
            var l = {
                lat: 50.452606,
                lng: 30.524959
            }, a = '<div class="default-text"> CFC Consulting</div> <span class="address"> 8 Kostolna str. Kyiv</span>', r = new google.maps.InfoWindow({content: a}), s = new google.maps.Marker({
                position: l,
                map: map
            });
            s.addListener("click", function () {
                r.open(map, s)
            }), google.maps.event.trigger(map, "resize"), t.setMap(map), google.maps.event.addDomListener(window, "resize", function () {
                var e = map.getCenter();
                google.maps.event.trigger(map, "resize"), map.setCenter(e)
            })
        }

        try {
            map = null, google.maps.event.addDomListener(window, "load", function () {
                e()
            }), setTimeout(function () {
                var e = map.getCenter();
                google.maps.event.trigger(map, "resize"), map.setCenter(e)
            }, 1e4)
        } catch (t) {
            console.log("Map is not allowed on this page")
        }
    })
}(jQuery);
!function (e) {
    e(function () {
        var o = {};
        o.showMenuDropdown = function () {
            e(".navigation").toggleClass("overlay"), e("#menu_dropdown_content").toggleClass("show"), e(".menu-icon").toggleClass("active")
        }, o.closeDropdownMenu = function () {
            e(".navigation").removeClass("overlay"), e("#menu_dropdown_content").removeClass("show"), e(".menu-icon").removeClass("active")
        }, o.headerBg = function (o) {
            4 == o ? e(".navigation").css("background", "transparent") : e(".navigation").css("background", "rgba(255, 255, 255, 0.6)")
        }, o.logoOnNav = function (o) {
            0 == o ? e(".logo-wrapper").css("display", "none") : e(".logo-wrapper").css("display", "inline-block")
        }, o.showModal = function (o) {
            e("#" + o).modal("show")
        }, o.showItem = function (o, n, i) {
            if (1 === n)e(o + "-" + i).hide(); else {
                var t = n - 1;
                e(o + "-" + t).hide()
            }
            e(o + "-" + n).fadeIn(600)
        }, o.newsSlider = function () {
            var n = 0, i = e(".carousel>.views-row");
            setInterval(function () {
                n === i.length && (n = 0), o.showItem(".carousel>.views-row", n + 1, i.length), n++
            }, 4e3)
        }, e(document).ready(function () {
            void 0 === e.cookie("isNew") ? e.cookie("isNew", !1, {expires: 1}) : (e(".loader").css("display", "none"), e(".navigation, .top-story-section, .team-section, .services-section, .news-section, .career-section, .contacts-section").show(), e("#main").css("visibility", "visible")), e(window).width() > 1240 && e(".mobile-top-story-section").remove(), setTimeout(function () {
                e(".logo, .line, .line-animated").show()
            }, 4e3), setTimeout(function () {
                e(".loader").addClass("softly-hidden")
            }, 6600), setTimeout(function () {
                e(".navigation, .top-story-section, .team-section, .services-section, .news-section, .career-section, .contacts-section").css("display", "block"), e("#main").css("visibility", "visible")
            }, 7500), setTimeout(function () {
                e(".loader").fadeOut(100)
            }, 7500), e("#menu_dropdown, #menu_icon").on("click", function (e) {
                e.preventDefault(), o.showMenuDropdown()
            }), e(".navigation").on("click", function (n) {
                void 0 == e(n.target).attr("id") && o.closeDropdownMenu()
            }), e(".services-link").on("click", function (n) {
                n.preventDefault();
                var i = e(this).attr("data-target");
                setTimeout(function (e) {
                    o.showModal(i)
                }, 1100)
            }), e(".trigger-zone").on("mouseenter", function () {
                var o = e(this).attr("id");
                e("#" + o + "_popup").css("tranform", "translate(0px, -100px").show()
            }), e(".trigger-zone").on("mouseleave", function () {
                var o = e(this).attr("id");
                e("#" + o + "_popup").hide()
            }), e("#mobile_menu_icon, #mobile_menu").on("click", function () {
                e("#side_nav_menu").addClass("active")
            }), e("#close_mobile_menu").on("click", function () {
                e("#side_nav_menu").removeClass("active")
            });
            try {
                var n = e("#menu_dropdown_content>li.active>a"), i = n[0].text();
                e("#menu_dropdown").text(i);
                var t = e(".side-nav-menu-list>li.active>a"), s = t[0].text();
                void 0 !== s && 0 !== s.length && e("#mobile_menu").text(s);
                var a = e(".side-nav-menu-list>li.active");
                a[0].css("display", "none");
                var c = e("#menu_dropdown_content>li.active");
                c[0].css("display", "none")
            } catch (r) {
                console.log(r)
            }
            o.newsSlider(), e.scrollIt({
                upKey: 38,
                downKey: 40,
                easing: "easeInBounce",
                scrollTime: 1e3,
                activeClass: "active",
                onPageChange: function (e) {
                    o.headerBg(e), o.logoOnNav(e)
                },
                topOffset: 0
            }), e(".field-item").niceScroll({
                cursorwidth: "2px",
                cursorcolor: "#374e73",
                cursorborder: "0 none",
                cursorborderradius: "6px"
            })
        })
    })
}(jQuery);