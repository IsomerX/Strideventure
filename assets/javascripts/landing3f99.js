webpackJsonp(
  [0],
  {
    22: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = n(3),
        o = n.n(i),
        s = n(0),
        a = n.n(s);
      o.a.fn.videoAutoPlay = a()(function (t) {
        function e() {
          t.find("source").each(function () {
            o()(this).attr(
              "src",
              o()(this).attr("src") || o()(this).data("src")
            );
          });
          var e = t.parent();
          t.remove().attr("autoplay", "autoplay"), e.append(t), t.get(0).play();
        }
        "complete" === document.readyState ? e() : o()(window).on("load", e),
          t.on("change", e);
      });
    },
    272: function (t, e, n) {
      n(7),
        n(286),
        n(22),
        n(287),
        n(30),
        n(288),
        n(289),
        n(290),
        n(291),
        n(64),
        n(292),
        (t.exports = n(31));
    },
    286: function (t, e, n) {
      "use strict";
      function i(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      function s(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var a = n(1),
        r = n(0),
        l = n.n(r),
        u = n(60),
        c = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        h = function t(e, n, i) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, n);
          if (void 0 === o) {
            var s = Object.getPrototypeOf(e);
            return null === s ? void 0 : t(s, n, i);
          }
          if ("value" in o) return o.value;
          var a = o.get;
          if (void 0 !== a) return a.call(i);
        },
        d = (function (t) {
          function e() {
            return (
              i(this, e),
              o(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            c(e, [
              {
                key: "updateNavigation",
                value: function (t) {
                  h(
                    e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                    "updateNavigation",
                    this
                  ).call(this, t);
                  var n = t.relatedTarget,
                    i = n.items();
                  this.$container
                    .find(".js-carousel-year")
                    .removeClass("card__year--active");
                  for (
                    var o =
                        t.item.index + t.page.size === t.item.count
                          ? ~~(t.page.size / 2)
                          : 0,
                      s = t.item.index + o,
                      r = s;
                    r >= 0;
                    r--
                  ) {
                    var l = Object(a.a)(i[r]).find(".js-carousel-year");
                    if (l.length) {
                      l.addClass("card__year--active");
                      break;
                    }
                  }
                },
              },
            ]),
            e
          );
        })(u.default);
      a.a.fn.carouselHighlightYear = l()(d);
    },
    287: function (t, e, n) {
      "use strict";
      function i(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(1),
        s = n(0),
        a = n.n(s),
        r = n(8),
        l = n.n(r),
        u = (n(11), n(4)),
        c = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        h = (function () {
          function t(e, n) {
            i(this, t);
            this.options = o.a.extend({}, this.constructor.Defaults, n);
            (this.$container = e),
              (this.$counter = e.find(".js-scroll-counter")),
              (this.$section = e.closest("[data-scroll-section]")),
              (this.$elements = e.find("[data-target]")),
              (this.targets = l()(this.$elements.toArray(), function (t) {
                return Object(o.a)(Object(o.a)(t).data("target"));
              })),
              (this.ns = Object(u.a)()),
              (this.offsets = null),
              (this.index = 0),
              this.handleResize(),
              this.$section
                .on(
                  "accordion.opened accordion.closed",
                  this.handleResize.bind(this)
                )
                .on(
                  "accordion.opened accordion.closed",
                  this.handleScroll.bind(this)
                ),
              e.on("destroyed", this.destroy.bind(this)),
              Object(o.a)(window)
                .on("resize." + this.ns, this.handleResize.bind(this))
                .on("scroll." + this.ns, this.handleScroll.bind(this));
          }
          return (
            c(t, null, [
              {
                key: "Defaults",
                get: function () {
                  return {};
                },
              },
            ]),
            c(t, [
              {
                key: "destroy",
                value: function () {
                  Object(o.a)(window)
                    .add(document)
                    .off("." + this.ns);
                },
              },
              {
                key: "handleResize",
                value: function () {
                  for (
                    var t = Object(o.a)(window).scrollTop(),
                      e = this.targets,
                      n = (this.offsets = []),
                      i = 0;
                    i < e.length;
                    i++
                  ) {
                    var s = e[i].get(0).getBoundingClientRect().top + t;
                    n.push(s);
                  }
                },
              },
              {
                key: "handleScroll",
                value: function () {
                  for (
                    var t = this.$counter.get(0).getBoundingClientRect(),
                      e = Object(o.a)(window).scrollTop(),
                      n = t.top + 0.8 * t.height,
                      i = this.offsets,
                      s = 0,
                      a = 1;
                    a < i.length;
                    a++
                  )
                    n > i[a] - e && (s = a);
                  this.index !== s &&
                    (this.$container
                      .removeClass("scroll-counter--" + (this.index + 1))
                      .addClass("scroll-counter--" + (s + 1)),
                    (this.index = s));
                },
              },
            ]),
            t
          );
        })();
      o.a.fn.scrollCounter = a()(h);
    },
    288: function (t, e, n) {
      "use strict";
      function i(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(1),
        s = n(0),
        a = n.n(s),
        r = n(5),
        l = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        u = (function () {
          function t(e, n) {
            var s = this;
            i(this, t);
            var a = (this.options = o.a.extend(
              {},
              this.constructor.Defaults,
              n
            ));
            if (
              ((this.$container = e),
              (this.$headings = e.find(a.headingSelector)),
              (this.$contents = e.find(a.contentSelector)),
              (this.active = null),
              r.a.hasHoverSupport()
                ? this.$headings
                    .on("mouseenter", this.handleMouseEnter.bind(this))
                    .on("mouseleave", this.handleMouseLeave.bind(this))
                : this.$headings.on("click", this.handleClick.bind(this)),
              "function" == typeof window.requestIdleCallback)
            ) {
              setTimeout(function () {
                requestIdleCallback(s.loadBackgrounds.bind(s));
              }, 1760);
            }
          }
          return (
            l(t, null, [
              {
                key: "Defaults",
                get: function () {
                  return {
                    headingSelector: "[aria-controls]",
                    contentSelector: '[role="dialog"]',
                  };
                },
              },
            ]),
            l(t, [
              {
                key: "loadBackgrounds",
                value: function () {
                  this.$container
                    .find(".js-landing-intro-background")
                    .appear("show");
                },
              },
              {
                key: "getHeading",
                value: function (t) {
                  return this.$headings.filter('[aria-controls="' + t + '"]');
                },
              },
              {
                key: "getContent",
                value: function (t) {
                  return this.$contents.filter("#" + t);
                },
              },
              {
                key: "getContentParts",
                value: function (t) {
                  var e = this.getContent(t);
                  return {
                    headingNumber: e.find("h2 > b"),
                    headingText: e.find("h2 > span"),
                    text: e.find("p"),
                  };
                },
              },
              {
                key: "show",
                value: function (t) {
                  var e = this,
                    n = this.active ? 0 : 150;
                  this.active &&
                    this.active !== t &&
                    this.hide(this.active, 350);
                  var i = this.getHeading(t),
                    o = this.getContent(t),
                    s = this.getContentParts(t);
                  i.addClass("is-active landing-intro__popup--top"),
                    o.attr("aria-hidden", !1);
                  var a = o.find(".js-landing-intro-background").eq(0),
                    r = a.parent();
                  a.remove().attr("autoplay", "autoplay"),
                    r.append(a),
                    a.get(0).play(),
                    this.$container.trigger("appear"),
                    o.transitionstop(function () {
                      o.transition("fade-in", {
                        transition: function (t) {
                          return t.addClass("is-active");
                        },
                        after: function (t) {
                          return t.removeClass("landing-intro__popup--top");
                        },
                        delay: n,
                      });
                    }),
                    s.headingNumber.transitionstop(function () {
                      s.headingNumber.transition("block-in-bottom", {
                        delay: n + 100,
                      });
                    }),
                    s.headingText.transitionstop(function () {
                      s.headingText.transition("title", { delay: n + 50 });
                    }),
                    s.text.transitionstop(function () {
                      s.text.transition("title", { delay: n + 200 });
                    }),
                    (this.active = t),
                    o
                      .find(".landing-intro__popup__close")
                      .on("click", function () {
                        e.hide(t);
                      });
                },
              },
              {
                key: "hide",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    n = this.getHeading(t),
                    i = this.getContent(t);
                  this.getContentParts(t);
                  n.removeClass("is-active"),
                    i.attr("aria-hidden", !0),
                    i.transitionstop(function () {
                      i.transition("fade-out", {
                        delay: e,
                        after: function (t) {
                          return t.removeClass("is-active");
                        },
                      });
                    }),
                    (this.active = null);
                },
              },
              {
                key: "toggle",
                value: function (t) {
                  this.active === t ? this.hide(t) : this.show(t);
                },
              },
              {
                key: "handleMouseEnter",
                value: function (t) {
                  var e = Object(o.a)(t.currentTarget).attr("aria-controls");
                  this.show(e);
                },
              },
              {
                key: "handleMouseLeave",
                value: function (t) {
                  var e = this,
                    n = Object(o.a)(t.currentTarget).attr("aria-controls");
                  setTimeout(function () {
                    e.active === n && e.hide(n);
                  }, 16);
                },
              },
              {
                key: "handleClick",
                value: function (t) {
                  var e = Object(o.a)(t.currentTarget).attr("aria-controls");
                  this.toggle(e), t.preventDefault();
                },
              },
            ]),
            t
          );
        })();
      o.a.fn.landingPopups = a()(u);
    },
    289: function (t, e, n) {
      "use strict";
      function i(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(1),
        s = n(0),
        a = n.n(s),
        r = n(100),
        l = n.n(r),
        u = (n(11), n(4)),
        c = n(5),
        h = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        d = (function () {
          function t(e, n) {
            if ((i(this, t), !c.a.hasHoverSupport())) return {};
            this.options = o.a.extend({}, this.constructor.Defaults, n);
            (this.$container = e),
              (this.$events = e.closest("[data-scroll-section]")),
              (this.$move = e.find(".js-background-move")),
              (this.constraints = {});
            this.ns = Object(u.a)();
            (this.ease = l.a.multiple({
              x: new l.a({ force: 0.1, precision: 2e-4 }),
              y: new l.a({ force: 0.1, precision: 2e-4 }),
            })),
              this.ease.reset({ x: 0, y: 0 }),
              this.ease.on("step", this.update.bind(this)),
              e.on("destroyed", this.destroy.bind(this)),
              this.handleResize(),
              Object(o.a)(window).on(
                "resize." + this.ns,
                this.handleResize.bind(this)
              ),
              this.$events.on(
                "mousemove." + this.ns,
                this.handleMouseMove.bind(this)
              );
          }
          return (
            h(t, null, [
              {
                key: "Defaults",
                get: function () {
                  return { distance: 5 };
                },
              },
            ]),
            h(t, [
              {
                key: "destroy",
                value: function () {
                  Object(o.a)(window)
                    .add(document)
                    .off("." + this.ns),
                    this.ease.destroy();
                },
              },
              {
                key: "handleResize",
                value: function () {
                  this.constraints = {
                    width: window.innerWidth,
                    height: window.innerHeight,
                  };
                },
              },
              {
                key: "handleMouseMove",
                value: function (t) {
                  var e = this.constraints;
                  this.ease.to({
                    x: -2 * (t.clientX / e.width - 0.5),
                    y: -2 * (t.clientY / e.height - 0.5),
                  });
                },
              },
              {
                key: "update",
                value: function (t) {
                  var e = this.options.distance,
                    n = (2 * e) / 100 + 1;
                  this.$move.css(
                    "transform",
                    "translate3d(" +
                      t.x * e +
                      "%, " +
                      t.y * e +
                      "%, 0) scale(" +
                      n +
                      ")"
                  );
                },
              },
            ]),
            t
          );
        })();
      o.a.fn.backgroundMove = a()(d);
    },
    290: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var i = n(1),
        o = n(0),
        s = n.n(o);
      n(19);
      i.a.fn.landingBackground = s()(function (t, e) {
        var n = 1 + ~~(Math.random() * e.count);
        t.find(".js-landing-background")
          .template()
          .template("replace", { index: n });
      });
    },
    291: function (t, e, n) {
      "use strict";
      function i(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(1),
        s = n(0),
        a = n.n(s),
        r = n(2),
        l = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        u = (function () {
          function t(e) {
            i(this, t),
              (this.$container = e),
              (this.$content = e.find('[role="region"]')),
              (this.isExpanded = !1),
              e.on("click", this.toggle.bind(this));
          }
          return (
            l(t, [
              {
                key: "toggle",
                value: function () {
                  this.isExpanded
                    ? this.hide()
                    : r.a.matches("md-up") && this.show();
                },
              },
              {
                key: "show",
                value: function () {
                  (this.isExpanded = !0),
                    this.$container.attr("aria-expanded", !0),
                    this.$content.attr("aria-hidden", !1);
                },
              },
              {
                key: "hide",
                value: function () {
                  (this.isExpanded = !1),
                    this.$container.attr("aria-expanded", !1),
                    this.$content.attr("aria-hidden", !0);
                },
              },
            ]),
            t
          );
        })();
      o.a.fn.landingCard = a()(u);
    },
    292: function (t, e, n) {
      "use strict";
      function i(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(1),
        s = n(0),
        a = n.n(s),
        r = n(10),
        l = n.n(r),
        u = (n(11), n(4)),
        c = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        h = (function () {
          function t(e, n) {
            i(this, t);
            this.options = o.a.extend({}, this.constructor.Defaults, n);
            (this.$container = e),
              (this.$wrapper = e.parent()),
              (this.constraints = this.getConstraints()),
              (this.position = null);
            var s = (this.ns = Object(u.a)());
            e.on("destroyed", this.destroy.bind(this)),
              Object(o.a)(window).on(
                "resize." + s,
                l()(this.handleResize.bind(this), 60)
              ),
              o.a.isCustomScroll && o.a.isCustomScroll()
                ? Object(o.a)(window).on("scroll." + s, this.update.bind(this))
                : Object(o.a)(window).onpassive(
                    "scroll." + s,
                    this.update.bind(this)
                  );
          }
          return (
            c(t, null, [
              {
                key: "Defaults",
                get: function () {
                  return {
                    viewportOffsetTop: -350,
                    marginTop: -350,
                    viewportOffsetBottom: -200,
                    marginBottom: 200,
                  };
                },
              },
            ]),
            c(t, [
              {
                key: "destroy",
                value: function () {
                  Object(o.a)(window)
                    .add(document)
                    .off("." + this.ns)
                    .offpassive("." + this.ns);
                },
              },
              {
                key: "getConstraints",
                value: function () {
                  var t = this.options,
                    e = t.marginTop,
                    n = t.marginBottom,
                    i = t.viewportOffsetTop,
                    s = t.viewportOffsetBottom,
                    a = Object(o.a)(window).scrollTop(),
                    r = window.innerHeight,
                    l = this.$wrapper.get(0).getBoundingClientRect();
                  this.$container.get(0).getBoundingClientRect();
                  return {
                    scrollFrom: l.top + a - r + i,
                    scrollTo: l.top + a + l.height + s,
                    positionFrom: e,
                    positionTo: l.height - n,
                  };
                },
              },
              {
                key: "handleResize",
                value: function () {
                  (this.constraints = this.getConstraints()), this.update();
                },
              },
              {
                key: "update",
                value: function () {
                  var t = this.constraints,
                    e = Object(o.a)(window).scrollTop(),
                    n = Math.min(
                      1,
                      Math.max(
                        0,
                        (e - t.scrollFrom) / (t.scrollTo - t.scrollFrom)
                      )
                    );
                  if (n !== this.position) {
                    this.position = n;
                    var i =
                      (t.positionTo - t.positionFrom) * n + t.positionFrom;
                    this.$container.css(
                      "transform",
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                        i +
                        ", 0, 1)"
                    );
                  }
                },
              },
            ]),
            t
          );
        })();
      o.a.fn.counterParallax = a()(h);
    },
    30: function (t, e, n) {
      "use strict";
      function i(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(1),
        s = n(0),
        a = n.n(s),
        r = n(5),
        l = n(4),
        u = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        c = r.a.hasHoverSupport(),
        h = (function () {
          function t(e, n) {
            if ((i(this, t), !c)) return this;
            this.options = o.a.extend({}, this.constructor.Defaults, n);
            (this.$container = e),
              (this.$contents = e.find(".js-scroll-freeze-content")),
              (this.contentScrollHeights = []),
              (this.scroller = Object(o.a)("body").scroller("instance")),
              (this.constraints = null),
              (this.isFixed = !1),
              (this.isScrollAbove = !0),
              (this.ns = Object(l.a)()),
              e.on("destroyed", this.destroy.bind(this)),
              Object(o.a)(window).on(
                "resize." + this.ns,
                this.handleResize.bind(this)
              ),
              Object(o.a)(window).on(
                "scroll." + this.ns,
                this.handleScroll.bind(this)
              ),
              e
                .on("tabchange", this.handleResize.bind(this))
                .on("tabchange", this.handleScroll.bind(this)),
              this.handleResize();
          }
          return (
            u(t, null, [
              {
                key: "Defaults",
                get: function () {
                  return {};
                },
              },
            ]),
            u(t, [
              {
                key: "destroy",
                value: function () {
                  Object(o.a)(window)
                    .add(document)
                    .off("." + this.ns),
                    (this.scroller = null);
                },
              },
              {
                key: "handleResize",
                value: function () {
                  var t = this.$container.get(0).getBoundingClientRect(),
                    e = t.top + Object(o.a)(window).scrollTop(),
                    n = window.innerHeight,
                    i = 0,
                    s = 0;
                  t.height < n
                    ? ((i = e - n + t.height), (s = e))
                    : ((i = e), (s = e - n + t.height)),
                    this.updateContentScrollHeights();
                  var a = Math.max.apply(Math, this.contentScrollHeights);
                  this.constraints = { from: a ? i : -1, to: a ? s : -1 };
                },
              },
              {
                key: "handleScroll",
                value: function () {
                  var t = Object(o.a)(window).scrollTop();
                  this.handleResize();
                  var e = this.constraints,
                    n = t >= e.from && t < e.to,
                    i = !1;
                  if (
                    (this.isFixed !== n &&
                      ((this.isFixed = n),
                      (i = !0),
                      n
                        ? ((t = this.isScrollAbove ? e.from : e.to),
                          this.scroller.setScrollMultiplier(
                            this.getScrollMultiplier(),
                            t
                          ))
                        : ((this.isScrollAbove = t < e.from),
                          this.scroller.setScrollMultiplier(1))),
                    n || i)
                  )
                    for (
                      var s = this.$contents,
                        a = this.contentScrollHeights,
                        r = 0;
                      r < s.length;
                      r++
                    ) {
                      var l = Math.max(
                          0,
                          Math.min(1, (t - e.from) / (e.to - e.from))
                        ),
                        u = a[r] * l;
                      s.eq(r)
                        .children()
                        .css("transform", "translateY(" + -u + "px)");
                    }
                },
              },
              {
                key: "getScrollMultiplier",
                value: function () {
                  var t = Math.max.apply(Math, this.contentScrollHeights),
                    e = this.constraints;
                  return (e.to - e.from) / t;
                },
              },
              {
                key: "updateContentScrollHeights",
                value: function () {
                  for (
                    var t = this.$contents,
                      e = (this.contentScrollHeights = []),
                      n = 0;
                    n < t.length;
                    n++
                  ) {
                    var i = t.get(n),
                      o = i.getBoundingClientRect();
                    if (o.width && o.height) {
                      var s = t.eq(n).children().get(0).offsetHeight;
                      e.push(s - i.offsetHeight);
                    } else e.push(0);
                  }
                },
              },
            ]),
            t
          );
        })();
      o.a.fn.scrollFreeze = a()(h);
    },
    31: function (t, e, n) {
      "use strict";
      function i(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var o = n(3),
        s = n.n(o),
        a = n(0),
        r = n.n(a),
        l = (n(22), n(2)),
        u = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        c = 1,
        h = null,
        d = (function () {
          function t(e, n) {
            i(this, t),
              (this.options = s.a.extend(!0, {}, this.constructor.Defaults, n)),
              (this.$container = e),
              (this.uid = "video" + c++),
              (this.$play = s()(
                ".js-video-embed-play, .js-video-embed-button-" +
                  this.options.id
              )),
              (this.$pause = s()(".js-video-embed-pause")),
              (this.$mute = s()(".js-video-embed-mute")),
              (this.$stop = s()(".js-video-embed-stop")),
              (this.$placeholder = e.find(".js-video-embed-placeholder")),
              (this.fullscreen = e.hasClass("video-embed--fullscreen")),
              e
                .closest(".lightbox")
                .on("lightbox-show", this.playVideo.bind(this))
                .on("lightbox-hide", this.pauseVideo.bind(this)),
              this.apiReady(this.embed.bind(this));
          }
          return (
            u(t, null, [
              {
                key: "Defaults",
                get: function () {
                  return { id: null, url: null, controls: !1, subtitles: !1 };
                },
              },
            ]),
            u(t, [
              {
                key: "apiReady",
                value: function (t) {
                  !(function e() {
                    window.Vimeo && window.Vimeo.Player
                      ? t()
                      : setTimeout(e, 60);
                  })();
                },
              },
              {
                key: "embed",
                value: function () {
                  var t = this.$container,
                    e = t.find("iframe"),
                    n = this.getVideoPosition(
                      window.innerWidth,
                      window.innerHeight
                    );
                  e.get(0)
                    ? (this.$video = t.find(".video-embed__inner"))
                    : (this.$video = s()(
                        '<div class="video-embed__inner" id="' +
                          this.uid +
                          '"></div>'
                      ).appendTo(t)),
                    this.options.url
                      ? (e.eq(0).prop("src", this.options.url),
                        (this.player = new Vimeo.Player(e.get(0) || this.uid, {
                          url: this.options.url,
                          width: n.width,
                          height: "100%",
                          byline: !1,
                          portrait: !1,
                          title: !1,
                          controls: 0,
                        })))
                      : (this.player = new Vimeo.Player(e.get(0) || this.uid, {
                          id: this.options.id,
                          width: n.width,
                          height: "100%",
                          byline: !1,
                          portrait: !1,
                          title: !1,
                          controls: 0,
                        })),
                    this.player.on("play", this.handlePlay.bind(this)),
                    this.player.on("pause", this.handlePause.bind(this)),
                    this.player.on("volumechange", this.handleMute.bind(this)),
                    this.player.on(
                      "timeupdate",
                      this.handleCurrentTimeChange.bind(this)
                    ),
                    (this.progressDragging = !1),
                    s()(window).on("resize", this.handleResize.bind(this)),
                    this.$mute.on("click", this.toggleMute.bind(this)),
                    this.$play.on("click", this.toggleVideo.bind(this)),
                    this.$pause.on("click", this.toggleVideo.bind(this)),
                    this.$stop.on("click", this.pauseVideo.bind(this)),
                    this.options.controls && this.createProgressBar(),
                    this.handleResize();
                },
              },
              {
                key: "toggleMute",
                value: function () {
                  var t = this;
                  this.player.getVolume().then(function (e) {
                    h = h || e || 1;
                    var n = e > 0;
                    t.player.setVolume(n ? 0 : h);
                  });
                },
              },
              {
                key: "handleMute",
                value: function (t) {
                  this.$container.toggleClass(
                    "video-embed--muted",
                    0 === t.volume
                  );
                },
              },
              {
                key: "toggleVideo",
                value: function () {
                  var t = this;
                  this.player.getPaused().then(function (e) {
                    e ? t.playVideo() : t.pauseVideo();
                  });
                },
              },
              {
                key: "playVideo",
                value: function () {
                  this.player &&
                    (this.$placeholder.remove(), this.player.play());
                },
              },
              {
                key: "pauseVideo",
                value: function () {
                  this.player && this.player.pause();
                },
              },
              {
                key: "handleResize",
                value: function () {
                  if (this.fullscreen)
                    if (l.a.matches("md-up")) {
                      var t = this.getVideoPosition(
                        window.innerWidth,
                        window.innerHeight
                      );
                      this.$video.css({
                        width: t.width + "px",
                        height: "100%",
                        left: ~~t.x + "px",
                        top: ~~t.y + "px",
                      });
                    } else
                      this.$video.css({
                        width: "",
                        height: "",
                        left: "",
                        top: "",
                      });
                },
              },
              {
                key: "handlePlay",
                value: function () {
                  this.$container.addClass("video-embed--playing"),
                    s()("html").addClass("video-playing");
                },
              },
              {
                key: "handlePause",
                value: function () {
                  this.$container.removeClass("video-embed--playing"),
                    s()("html").removeClass("video-playing");
                },
              },
              {
                key: "getVideoPosition",
                value: function (t, e) {
                  var n = 1280,
                    i = 800,
                    o = n / i;
                  return (
                    (n = t),
                    (i = n / o),
                    i < e && ((i = e), (n = i * o)),
                    { height: i, width: n, x: (t - n) / 2, y: (e - i) / 2 }
                  );
                },
              },
              {
                key: "createProgressBar",
                value: function () {
                  var t = s()(
                    '\n            <div class="video-embed__progress-bar">\n                <div class="video-embed__progress-bar__inner">\n                </div>\n                <div class="video-embed__progress-bar__text">0:00 / 0:00</div>\n            </div>'
                  );
                  this.$container.append(t),
                    (this.$progress = t),
                    (this.$progressInner = t.find(
                      ".video-embed__progress-bar__inner"
                    )),
                    (this.$progressText = t.find(
                      ".video-embed__progress-bar__text"
                    )),
                    t.on(
                      "mousedown touchstart",
                      this.handleProgressClickStart.bind(this)
                    );
                },
              },
              {
                key: "handleCurrentTimeChange",
                value: function (t) {
                  this.progressDragging || this.updateProgressBar(t.percent);
                },
              },
              {
                key: "updateProgressBar",
                value: function (t) {
                  var e = this.$progressInner,
                    n = this.$progressText;
                  e &&
                    e.length &&
                    (e.css("transform", "translateX(" + (100 * t - 100) + "%)"),
                    this.player.getDuration().then(function (e) {
                      var i = e * t,
                        o = ~~(i / 60),
                        s = ~~(i % 60),
                        a = ~~(e / 60),
                        r = ~~(e % 60);
                      n.text(
                        o +
                          ":" +
                          (s < 10 ? "0" : "") +
                          s +
                          " / " +
                          a +
                          ":" +
                          (r < 10 ? "0" : "") +
                          r
                      );
                    }));
                },
              },
              {
                key: "handleProgressClickStart",
                value: function (t) {
                  var e = "mousedown" === t.type ? "mousemove" : "touchmove",
                    n = "mousedown" === t.type ? "mouseup" : "touchend";
                  t.preventDefault(),
                    s()(document).on(
                      e + "." + this.uid,
                      this.handleProgressClick.bind(this)
                    ),
                    s()(document).on(
                      n + "." + this.uid,
                      this.handleProgressClickStop.bind(this)
                    ),
                    this.$progress.addClass(
                      "video-embed__progress-bar--disable-animation"
                    ),
                    this.$container.addClass("video-embed--dragging"),
                    (this.progressDragging = !0),
                    this.handleProgressClick(t);
                },
              },
              {
                key: "handleProgressClickStop",
                value: function () {
                  var t = this;
                  s()(document).off("." + this.uid),
                    (this.progressDragging = !1),
                    this.$container.removeClass("video-embed--dragging"),
                    setTimeout(function () {
                      t.$progress.removeClass(
                        "video-embed__progress-bar--disable-animation"
                      );
                    }, 60);
                },
              },
              {
                key: "handleProgressClick",
                value: function (t) {
                  var e = this.player,
                    n =
                      "mousemove" === t.type || "mousedown" === t.type
                        ? t.clientX
                        : t.originalEvent.touches[0].clientX,
                    i = this.$progress,
                    o = i.get(0).getBoundingClientRect(),
                    s = Math.min(1, Math.max(0, (n - o.left) / o.width));
                  this.updateProgressBar(s),
                    e.getDuration().then(function (t) {
                      e.setCurrentTime(t * s);
                    });
                },
              },
            ]),
            t
          );
        })();
      (e.default = d), (s.a.fn.videoEmbed = r()(d));
    },
    64: function (t, e, n) {
      "use strict";
      function i(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      function s(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var a = n(3),
        r = n.n(a),
        l = n(0),
        u = n.n(l),
        c = n(62),
        h = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function (e, n, i) {
            return n && t(e.prototype, n), i && t(e, i), e;
          };
        })(),
        d = function t(e, n, i) {
          null === e && (e = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(e, n);
          if (void 0 === o) {
            var s = Object.getPrototypeOf(e);
            return null === s ? void 0 : t(s, n, i);
          }
          if ("value" in o) return o.value;
          var a = o.get;
          if (void 0 !== a) return a.call(i);
        },
        f = (function (t) {
          function e() {
            return (
              i(this, e),
              o(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments)
              )
            );
          }
          return (
            s(e, t),
            h(
              e,
              [
                {
                  key: "animateContent",
                  value: function (t, n, i) {
                    var o = t ? this.getContent(t) : r()();
                    if (o.length) {
                      var s = o.find("picture").appear("show"),
                        a = o.find(".h3"),
                        l = o.find("p");
                      "in" === n
                        ? (s.transitionstop(function () {
                            s.transition("team-tabs-image-in");
                          }),
                          a.transitionstop(function () {
                            a.transition("title");
                          }),
                          l.transitionstop(function () {
                            l.transition("fade-in");
                          }))
                        : (s.transitionstop(function () {
                            s.transition("team-tabs-image-out");
                          }),
                          a.transitionstop(function () {
                            a.transition("fade-out");
                          }),
                          l.transitionstop(function () {
                            l.transition("fade-out");
                          }));
                    }
                    return d(
                      e.prototype.__proto__ ||
                        Object.getPrototypeOf(e.prototype),
                      "animateContent",
                      this
                    ).call(this, t, n, i);
                  },
                },
              ],
              [
                {
                  key: "Defaults",
                  get: function () {
                    return r.a.extend({}, c.default.Defaults, {
                      animateHeight: !1,
                      animationInRight: "animation--team-tabs-in",
                      animationInLeft: "animation--team-tabs-in",
                      animationOutRight: "animation--team-tabs-out",
                      animationOutLeft: "animation--team-tabs-out",
                    });
                  },
                },
              ]
            ),
            e
          );
        })(c.default);
      (r.a.transition.sequences["team-tabs-in"] =
        r.a.transition.generateSequenceIn("team-tabs-in")),
        (r.a.transition.sequences["team-tabs-out"] =
          r.a.transition.generateSequenceOut("team-tabs-out")),
        (r.a.transition.sequences["team-tabs-image-in"] =
          r.a.transition.generateSequenceIn("team-tabs-image-in")),
        (r.a.transition.sequences["team-tabs-image-out"] =
          r.a.transition.generateSequenceOut("team-tabs-image-out")),
        (r.a.fn.teamTabs = u()(f, {
          api: [
            "open",
            "swap",
            "getContent",
            "getHeading",
            "getActiveItemId",
            "getCount",
            "getIndex",
            "hasContent",
            "next",
            "prev",
          ],
        }));
    },
  },
  [272]
);
