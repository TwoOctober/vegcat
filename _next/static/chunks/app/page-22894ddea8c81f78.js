(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931], {
    6293: function(e, t, a) {
      Promise.resolve().then(a.bind(a, 473))
    },
    473: function(e, t, a) {
      "use strict";
      a.r(t), a.d(t, {
        default: function() {
          return k
        }
      });
      var i = a(6102),
        r = a(1147),
        n = a.n(r),
        s = a(7174),
        o = a(8281),
        l = a(1240),
        d = a(578),
        c = a(2239),
        u = a(1528),
        g = a(1407);

      function m(e) {
        let {
          className: t
        } = e;
        return (0, i.jsx)("svg", {
          viewBox: "0 0 24 24",
          fill: "currentColor",
          className: t,
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, i.jsx)("path", {
            d: "M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .356-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.789 1.894v7.52c.02.765.283 1.395.789 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498 1.134-.755 1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z"
          })
        })
      }

      function x(e) {
        let {
          text: t,
          delay: a = 0,
          speed: r = 100,
          className: n = "",
          showCursor: o = !1,
          onComplete: l,
          forceFullText: d = !1
        } = e, [u, g] = (0, s.useState)(""), m = (0, s.useRef)(null), x = (0, s.useRef)(!1);
        return (0, s.useEffect)(() => {
          if (m.current && clearTimeout(m.current), d || x.current) {
            g(t), null == l || l();
            return
          }
          let e = 0,
            i = () => {
              e < t.length ? (g(t.slice(0, e + 1)), e++, m.current = setTimeout(i, r)) : (x.current = !0, null == l || l())
            };
          return m.current = setTimeout(i, a), () => {
            m.current && clearTimeout(m.current)
          }
        }, [t, a, r, l, d]), (0, i.jsxs)("span", {
          className: n,
          children: [u, o && (0, i.jsx)(c.E.span, {
            animate: {
              opacity: [1, 0, 1]
            },
            transition: {
              duration: .8,
              repeat: u.length < t.length ? Number.POSITIVE_INFINITY : 0,
              ease: "easeInOut"
            },
            className: "inline-block ml-1 w-0.5 h-[1em] bg-current"
          })]
        })
      }

      function p(e) {
        let {
          onComplete: t,
          isLoading: a
        } = e, [r, n] = (0, s.useState)(0), [o, l] = (0, s.useState)(0), [d, u] = (0, s.useState)(!1);
        return (0, s.useEffect)(() => {
          let e = () => {
            u(window.innerWidth <= 768)
          };
          return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, []), (0, s.useEffect)(() => {
          let e = setTimeout(() => {
            null == t || t()
          }, 800);
          return () => clearTimeout(e)
        }, [t]), (0, i.jsx)(c.E.div, {
          className: "relative cursor-pointer select-none",
          onClick: () => {
            if (a) return;
            let e = 360 * (Math.random() > .5 ? 1 : -1);
            n(t => t + e), l(e => e + 1)
          },
          whileHover: {
            scale: 1.05
          },
          whileTap: {
            scale: .95
          },
          children: (0, i.jsx)(c.E.div, {
            animate: {
              rotate: r
            },
            transition: {
              duration: 1.2,
              ease: "easeOut"
            },
            className: "relative",
            children: (0, i.jsx)("div", {
              className: "".concat(d ? "w-48 h-48 sm:w-56 sm:h-56" : "w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80", " rounded-full overflow-hidden relative"),
              children: (0, i.jsx)("div", {
                className: "absolute inset-0 rounded-full p-1",
                style: {
                  background: "linear-gradient(45deg, #b8956a, #d4a574, #e8c5a0, #b8956a)",
                  backgroundSize: "300% 300%",
                  animation: "gradientShift 4s ease infinite"
                },
                children: (0, i.jsx)("div", {
                  className: "w-full h-full rounded-full overflow-hidden bg-black",
                  children: (0, i.jsx)(g.default, {
                    src: "http://q.qlogo.cn/headimg_dl?dst_uin=1145145797&spec=640&img_type=jpg",
                    alt: "Avatar",
                    width: 640,
                    height: 640,
                    className: "w-full h-full object-cover",
                    priority: !0,
                    loading: "eager"
                  })
                })
              })
            })
          }, o)
        })
      }

      function b() {
        let [e, t] = (0, s.useState)({
          x: 0,
          y: 0
        }), [a, r] = (0, s.useState)({
          x: 0,
          y: 0
        }), [n, o] = (0, s.useState)(!1), [l, d] = (0, s.useState)({
          is360: !1,
          isIE: !1,
          isOldChrome: !1,
          supportsGradient: !0,
          supportsFilter: !0,
          supportsBackgroundImage: !0
        });
        (0, s.useEffect)(() => {
          let e = () => {
            o(window.innerWidth <= 768)
          };
          e(), window.addEventListener("resize", e), (() => {
            let e = navigator.userAgent.toLowerCase(),
              t = document.createElement("div"),
              a = e.includes("360") || e.includes("qihu") || e.includes("360se") || e.includes("360ee") || /360\w+/i.test(e),
              i = e.includes("msie") || e.includes("trident") || /edge\/\d+/i.test(e),
              r = e.match(/chrome\/(\d+)/),
              n = r && 50 > Number.parseInt(r[1]);
            t.style.background = "linear-gradient(45deg, red, blue)", t.style.background = "-webkit-linear-gradient(45deg, red, blue)", t.style.background = "-moz-linear-gradient(45deg, red, blue)";
            let s = "" !== t.style.background;
            t.style.filter = "blur(10px)", t.style.webkitFilter = "blur(10px)";
            let o = "" !== t.style.filter || "" !== t.style.webkitFilter;
            t.style.backgroundImage = "url('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')", d({
              is360: a,
              isIE: i,
              isOldChrome: n,
              supportsGradient: s,
              supportsFilter: o,
              supportsBackgroundImage: "" !== t.style.backgroundImage
            })
          })();
          let a = e => {
            if (l.supportsFilter && !n) {
              let a = {
                x: e.clientX,
                y: e.clientY
              };
              t(a), setTimeout(() => {
                r(a)
              }, 150)
            }
          };
          return window.addEventListener("mousemove", a, {
            passive: !0
          }), () => {
            window.removeEventListener("mousemove", a), window.removeEventListener("resize", e)
          }
        }, [l.supportsFilter, n]);
        let u = n ? "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAECh8xo0pFTN0Yp1H_7zL3pzPQX1c0JTwACZRkAApqnmFYYPck9JMXOrTYE.jpg" : "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAECvfFo1T7nkSNHFW3k3piiOQel15EpPAACQC8AAttgqVZ4h-_ykpBOHjYE.jpg";
        return (0, i.jsxs)("div", {
          className: "fixed inset-0 overflow-hidden pointer-events-none",
          children: [(0, i.jsx)("div", {
            className: "absolute inset-0",
            style: l.is360 || l.isIE || l.isOldChrome ? {
              backgroundColor: "#8b6f47",
              backgroundImage: l.supportsBackgroundImage ? "url('".concat(u, "')") : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed"
            } : l.supportsBackgroundImage ? {
              backgroundImage: "url('".concat(u, "')"),
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            } : {
              backgroundColor: "#8b6f47",
              backgroundImage: l.supportsGradient ? "radial-gradient(circle at 25% 25%, #b8956a 0%, transparent 50%), radial-gradient(circle at 75% 75%, #d4a574 0%, transparent 50%)" : "none"
            }
          }), (0, i.jsx)("div", {
            className: "absolute inset-0",
            style: l.is360 || l.isIE ? {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=50)"
            } : l.supportsGradient ? {
              background: "linear-gradient(135deg, rgba(184, 149, 106, 0.25) 0%, rgba(212, 165, 116, 0.15) 50%, rgba(232, 197, 160, 0.25) 100%)"
            } : {
              backgroundColor: "rgba(184, 149, 106, 0.2)"
            }
          }), (0, i.jsx)("div", {
            className: "absolute inset-0",
            style: {
              backgroundColor: "rgba(0, 0, 0, 0.45)",
              filter: l.isIE ? "progid:DXImageTransform.Microsoft.Alpha(opacity=45)" : "none"
            }
          }), l.supportsFilter && !l.is360 && !l.isIE && !n && (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(c.E.div, {
              className: "absolute w-96 h-96 rounded-full",
              style: {
                left: a.x - 200,
                top: a.y - 200,
                background: "radial-gradient(circle, rgba(184, 149, 106, 0.08) 0%, transparent 70%)",
                filter: "blur(40px)",
                WebkitFilter: "blur(40px)",
                opacity: .6
              },
              transition: {
                x: {
                  type: "spring",
                  stiffness: 30,
                  damping: 50
                },
                y: {
                  type: "spring",
                  stiffness: 30,
                  damping: 50
                }
              }
            }), (0, i.jsx)(c.E.div, {
              className: "absolute w-80 h-80 rounded-full",
              style: {
                left: .3 * a.x - 160,
                top: .3 * a.y - 160,
                background: "radial-gradient(circle, rgba(212, 165, 116, 0.06) 0%, transparent 70%)",
                filter: "blur(35px)",
                WebkitFilter: "blur(35px)",
                opacity: .5
              },
              transition: {
                x: {
                  type: "spring",
                  stiffness: 20,
                  damping: 60
                },
                y: {
                  type: "spring",
                  stiffness: 20,
                  damping: 60
                }
              }
            })]
          })]
        })
      }

      function f(e) {
        let {
          onComplete: t
        } = e;
        return (0, s.useEffect)(() => {
          let e = setTimeout(t, 400);
          return () => clearTimeout(e)
        }, [t]), (0, i.jsx)(c.E.div, {
          initial: {
            opacity: 1
          },
          exit: {
            opacity: 0
          },
          transition: {
            duration: .3
          },
          className: "fixed inset-0 z-50 flex items-center justify-center",
          style: {
            background: "linear-gradient(135deg, #b8956a 0%, #d4a574 100%)",
            filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#b8956a', endColorstr='#d4a574', GradientType=1)"
          },
          children: (0, i.jsxs)("div", {
            className: "text-center space-y-6",
            children: [(0, i.jsx)(c.E.div, {
              animate: {
                rotate: 360
              },
              transition: {
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear"
              },
              className: "w-8 h-8 border-2 border-white/30 border-t-white rounded-full mx-auto"
            }), (0, i.jsx)(c.E.div, {
              initial: {
                opacity: 0,
                y: 10
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                delay: .1,
                duration: .3
              },
              className: "text-white text-lg font-medium",
              children: "Loading..."
            })]
          })
        })
      }

      function h(e) {
        let {
          isOpen: t,
          onClose: a
        } = e;
        return t ? (0, i.jsx)(u.M, {
          children: (0, i.jsx)(c.E.div, {
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            exit: {
              opacity: 0
            },
            className: "fixed inset-0 z-50 flex items-center justify-center p-4",
            style: {
              backgroundColor: "rgba(0, 0, 0, 0.8)"
            },
            onClick: a,
            children: (0, i.jsxs)(c.E.div, {
              initial: {
                scale: .8,
                opacity: 0
              },
              animate: {
                scale: 1,
                opacity: 1
              },
              exit: {
                scale: .8,
                opacity: 0
              },
              transition: {
                duration: .3,
                ease: "easeOut"
              },
              className: "relative max-w-md w-full",
              onClick: e => e.stopPropagation(),
              style: {
                background: "linear-gradient(135deg, #b8956a 0%, #d4a574 100%)",
                borderRadius: "12px",
                border: "2px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
              },
              children: [(0, i.jsx)("button", {
                onClick: a,
                className: "absolute top-3 right-3 w-8 h-8 rounded-full bg-black/20 hover:bg-black/30 transition-colors flex items-center justify-center text-white",
                children: "\xd7"
              }), (0, i.jsx)("div", {
                className: "p-6 pb-4",
                children: (0, i.jsx)("h3", {
                  className: "text-xl font-medium text-white text-center warm-text",
                  children: "联系方式"
                })
              }), (0, i.jsxs)("div", {
                className: "px-6 pb-6",
                children: [(0, i.jsx)("div", {
                  className: "relative rounded-lg overflow-hidden bg-black/10",
                  children: (0, i.jsx)("img", {
                    src: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAECk7do09oCTJLgnsKMQfhKnlXjNutRcAACHiAAAttgoVbC13g_hSTY1zYE.jpg",
                    alt: "联系方式",
                    className: "w-full h-auto",
                    style: {
                      maxHeight: "400px",
                      objectFit: "contain"
                    }
                  })
                }), (0, i.jsx)("div", {
                  className: "mt-4 text-center",
                  children: (0, i.jsx)("a", {
                    href: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAECk7do09oCTJLgnsKMQfhKnlXjNutRcAACHiAAAttgoVbC13g_hSTY1zYE.jpg",
                    download: "vegcat-contact.jpg",
                    className: "inline-block px-4 py-2 bg-black/20 hover:bg-black/30 rounded-lg text-white text-sm transition-colors warm-text",
                    children: "保存图片"
                  })
                })]
              })]
            })
          })
        }) : null
      }

      function k() {
        let [e, t] = (0, s.useState)(!0), [a, r] = (0, s.useState)(!1), [g, k] = (0, s.useState)("漫无止境的八月循环了多少次"), [w, y] = (0, s.useState)(!1), [j, v] = (0, s.useState)(!1);
        return (0, s.useRef)(null), (0, s.useEffect)(() => {
          let e = () => {
            y(window.innerWidth <= 768)
          };
          return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
        }, []), (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(n(), {
            id: "feded1e949e896e7",
            children: '@-webkit-keyframes gradientShift{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-moz-keyframes gradientShift{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@-o-keyframes gradientShift{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}@keyframes gradientShift{0%{background-position:0%50%}50%{background-position:100%50%}100%{background-position:0%50%}}.warm-text.jsx-feded1e949e896e7{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Helvetica Neue",Arial,sans-serif;text-shadow:0 2px 4px rgba(0,0,0,.4)}.warm-button.jsx-feded1e949e896e7{background:-webkit-linear-gradient(45deg,#a67c52,#b8956a,#d4a574);background:-moz-linear-gradient(45deg,#a67c52,#b8956a,#d4a574);background:-o-linear-gradient(45deg,#a67c52,#b8956a,#d4a574);background:linear-gradient(45deg,#a67c52,#b8956a,#d4a574);background:-webkit-linear-gradient(45deg,#a67c52,#b8956a,#d4a574);background:-moz-linear-gradient(45deg,#a67c52,#b8956a,#d4a574);background:-o-linear-gradient(45deg,#a67c52,#b8956a,#d4a574);background:-ms-linear-gradient(45deg,#a67c52,#b8956a,#d4a574);border:2px solid rgba(255,255,255,.15);border-radius:8px;-webkit-box-shadow:0 4px 15px rgba(166,124,82,.25);-moz-box-shadow:0 4px 15px rgba(166,124,82,.25);box-shadow:0 4px 15px rgba(166,124,82,.25);-webkit-transition:all.3s ease;-moz-transition:all.3s ease;-o-transition:all.3s ease;transition:all.3s ease;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Helvetica Neue",Arial,sans-serif;-webkit-border-radius:8px;-moz-border-radius:8px;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#a67c52\', endColorstr=\'#d4a574\', GradientType=1);behavior:url(PIE.htc)}.warm-button.jsx-feded1e949e896e7:hover{-webkit-box-shadow:0 6px 20px rgba(166,124,82,.35);-moz-box-shadow:0 6px 20px rgba(166,124,82,.35);box-shadow:0 6px 20px rgba(166,124,82,.35);-webkit-transform:translatey(-2px);-moz-transform:translatey(-2px);-ms-transform:translatey(-2px);-o-transform:translatey(-2px);transform:translatey(-2px);background:-webkit-linear-gradient(45deg,#b8956a,#d4a574,#e8c5a0);background:-moz-linear-gradient(45deg,#b8956a,#d4a574,#e8c5a0);background:-o-linear-gradient(45deg,#b8956a,#d4a574,#e8c5a0);background:linear-gradient(45deg,#b8956a,#d4a574,#e8c5a0);background:-webkit-linear-gradient(45deg,#b8956a,#d4a574,#e8c5a0);background:-moz-linear-gradient(45deg,#b8956a,#d4a574,#e8c5a0);background:-o-linear-gradient(45deg,#b8956a,#d4a574,#e8c5a0);background:-ms-linear-gradient(45deg,#b8956a,#d4a574,#e8c5a0);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#b8956a\', endColorstr=\'#e8c5a0\', GradientType=1)}@media(max-width:768px){.mobile-button.jsx-feded1e949e896e7{width:auto!important;min-width:120px;max-width:160px;padding:12px 20px!important}}@media(min-width:769px){.desktop-button.jsx-feded1e949e896e7{min-width:160px!important;padding:12px 28px!important}}.browser-360.jsx-feded1e949e896e7 .warm-button.jsx-feded1e949e896e7{background-color:#b8956a!important;background-image:none!important}.ie-fallback.jsx-feded1e949e896e7{background-color:#b8956a!important;background-image:none!important}'
          }), (0, i.jsxs)("div", {
            className: "jsx-feded1e949e896e7 min-h-screen text-white relative overflow-hidden flex flex-col",
            children: [(0, i.jsx)(u.M, {
              children: e && (0, i.jsx)(f, {
                onComplete: () => t(!1)
              })
            }), (0, i.jsx)(b, {}), (0, i.jsx)(c.E.div, {
              initial: {
                opacity: 0,
                y: 30
              },
              animate: {
                opacity: e ? 0 : 1,
                y: e ? 30 : 0
              },
              transition: {
                delay: .1,
                duration: .6,
                ease: "easeOut"
              },
              className: "relative z-10 flex-1 flex items-center justify-center px-4 sm:px-8 py-4 sm:py-8",
              children: (0, i.jsx)("div", {
                className: "jsx-feded1e949e896e7 max-w-4xl w-full",
                children: (0, i.jsxs)("div", {
                  className: "jsx-feded1e949e896e7 text-center space-y-4 sm:space-y-6",
                  children: [(0, i.jsx)("div", {
                    className: "jsx-feded1e949e896e7 flex justify-center",
                    children: (0, i.jsx)(p, {
                      onComplete: () => {},
                      isLoading: e
                    })
                  }), (0, i.jsx)("div", {
                    className: "jsx-feded1e949e896e7 " + "warm-text font-medium ".concat(w ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl lg:text-3xl"),
                    children: (0, i.jsx)(x, {
                      text: "Vegcat.icu",
                      delay: 400,
                      speed: 80
                    })
                  }), (0, i.jsx)(c.E.div, {
                    className: "text-lg sm:text-xl lg:text-2xl max-w-lg leading-relaxed mx-auto warm-text",
                    children: (0, i.jsx)(u.M, {
                      mode: "wait",
                      children: (0, i.jsx)(c.E.div, {
                        initial: {
                          opacity: 0,
                          scale: .95
                        },
                        animate: {
                          opacity: 1,
                          scale: 1
                        },
                        exit: {
                          opacity: 0,
                          scale: .95
                        },
                        transition: {
                          duration: .3,
                          ease: "easeOut"
                        },
                        children: (0, i.jsx)(x, {
                          text: g,
                          delay: e ? 800 : 0,
                          speed: a ? 0 : 60,
                          forceFullText: a
                        })
                      }, g)
                    })
                  }), (0, i.jsx)(c.E.div, {
                    transition: {
                      delay: 1.2,
                      duration: .6,
                      ease: "easeOut"
                    },
                    className: "flex flex-col sm:flex-row flex-wrap justify-center gap-4 pt-6",
                    children: [{
                      icon: m,
                      label: "Bilibili",
                      href: "https://m.bilibili.com/space/497350955"
                    }, {
                      icon: o.Z,
                      label: "Steam",
                      href: "https://steamcommunity.com/id/TwoOctober"
                    }, {
                      icon: l.Z,
                      label: "联系我",
                      href: "#",
                      onClick: () => v(!0)
                    }].map((t, a) => (0, i.jsx)(c.E.div, {
                      initial: {
                        opacity: 0,
                        scale: .9,
                        y: 20
                      },
                      animate: {
                        opacity: e ? 0 : 1,
                        scale: 1,
                        y: 0
                      },
                      transition: {
                        delay: 1.4 + .1 * a,
                        duration: .4,
                        ease: "easeOut"
                      },
                      whileHover: {
                        scale: 1.05,
                        y: -3,
                        transition: {
                          duration: .2
                        }
                      },
                      whileTap: {
                        scale: .95,
                        transition: {
                          duration: .1
                        }
                      },
                      className: w ? "mobile-button" : "desktop-button",
                      children: (0, i.jsx)("a", {
                        href: t.href,
                        target: "#" === t.href ? "_self" : "_blank",
                        rel: "#" === t.href ? "" : "noopener noreferrer",
                        onClick: t.onClick ? e => {
                          e.preventDefault(), t.onClick()
                        } : void 0,
                        className: "jsx-feded1e949e896e7 " + "warm-button block text-center no-underline text-white font-medium ".concat(w ? "px-5 py-3 text-sm" : "px-6 py-3"),
                        children: (0, i.jsxs)("span", {
                          className: "jsx-feded1e949e896e7 flex items-center justify-center",
                          children: [(0, i.jsx)(t.icon, {
                            className: "w-5 h-5 mr-2"
                          }), t.label, (0, i.jsx)(d.Z, {
                            className: "w-4 h-4 ml-2"
                          })]
                        })
                      })
                    }, t.label))
                  })]
                })
              })
            }), (0, i.jsx)(c.E.div, {
              initial: {
                opacity: 0,
                y: 10
              },
              animate: {
                opacity: e ? 0 : 1,
                y: e ? 10 : 0
              },
              transition: {
                delay: 2,
                duration: .6,
                ease: "easeOut"
              },
              className: "relative z-10 pb-4",
              children: (0, i.jsxs)("div", {
                className: "jsx-feded1e949e896e7 flex justify-between items-center px-4 sm:px-8",
                children: [(0, i.jsx)("div", {
                  className: "jsx-feded1e949e896e7 flex-shrink-0",
                  children: (0, i.jsx)("a", {
                    href: "https://cat.vegcat.icu",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "jsx-feded1e949e896e7 text-amber-200 hover:text-amber-100 transition-colors duration-300 text-sm warm-text no-underline",
                    children: "旧版网页"
                  })
                }), (0, i.jsx)("div", {
                  className: "jsx-feded1e949e896e7 text-amber-200 text-sm warm-text text-right",
                  children: (0, i.jsx)(x, {
                    text: "\xa9 2025 Powered by Vegcat",
                    delay: 200,
                    speed: 80
                  })
                })]
              })
            }), (0, i.jsx)(h, {
              isOpen: j,
              onClose: () => v(!1)
            })]
          })]
        })
      }
    }
  },
  function(e) {
    e.O(0, [852, 553, 923, 744], function() {
      return e(e.s = 6293)
    }), _N_E = e.O()
  }
]);