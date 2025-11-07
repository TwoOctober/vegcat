(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [852], {
    5852: function(t, e, i) {
      "use strict";
      i.d(e, {
        Z: function() {
          return l
        }
      });
      var n = i(7174);
      let r = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        s = function() {
          for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
          return e.filter((t, e, i) => !!t && "" !== t.trim() && i.indexOf(t) === e).join(" ").trim()
        };
      var o = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      };
      let a = (0, n.forwardRef)((t, e) => {
          let {
            color: i = "currentColor",
            size: r = 24,
            strokeWidth: a = 2,
            absoluteStrokeWidth: l,
            className: u = "",
            children: h,
            iconNode: d,
            ...c
          } = t;
          return (0, n.createElement)("svg", {
            ref: e,
            ...o,
            width: r,
            height: r,
            stroke: i,
            strokeWidth: l ? 24 * Number(a) / Number(r) : a,
            className: s("lucide", u),
            ...c
          }, [...d.map(t => {
            let [e, i] = t;
            return (0, n.createElement)(e, i)
          }), ...Array.isArray(h) ? h : [h]])
        }),
        l = (t, e) => {
          let i = (0, n.forwardRef)((i, o) => {
            let {
              className: l,
              ...u
            } = i;
            return (0, n.createElement)(a, {
              ref: o,
              iconNode: e,
              className: s("lucide-".concat(r(t)), l),
              ...u
            })
          });
          return i.displayName = "".concat(t), i
        }
    },
    578: function(t, e, i) {
      "use strict";
      i.d(e, {
        Z: function() {
          return n
        }
      });
      let n = (0, i(5852).Z)("ArrowRight", [
        ["path", {
          d: "M5 12h14",
          key: "1ays0h"
        }],
        ["path", {
          d: "m12 5 7 7-7 7",
          key: "xquz4c"
        }]
      ])
    },
    8281: function(t, e, i) {
      "use strict";
      i.d(e, {
        Z: function() {
          return n
        }
      });
      let n = (0, i(5852).Z)("Gamepad2", [
        ["line", {
          x1: "6",
          x2: "10",
          y1: "11",
          y2: "11",
          key: "1gktln"
        }],
        ["line", {
          x1: "8",
          x2: "8",
          y1: "9",
          y2: "13",
          key: "qnk9ow"
        }],
        ["line", {
          x1: "15",
          x2: "15.01",
          y1: "12",
          y2: "12",
          key: "krot7o"
        }],
        ["line", {
          x1: "18",
          x2: "18.01",
          y1: "10",
          y2: "10",
          key: "1lcuu1"
        }],
        ["path", {
          d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
          key: "mfqc10"
        }]
      ])
    },
    1240: function(t, e, i) {
      "use strict";
      i.d(e, {
        Z: function() {
          return n
        }
      });
      let n = (0, i(5852).Z)("Globe", [
        ["circle", {
          cx: "12",
          cy: "12",
          r: "10",
          key: "1mglay"
        }],
        ["path", {
          d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
          key: "13o1zl"
        }],
        ["path", {
          d: "M2 12h20",
          key: "9i4pu4"
        }]
      ])
    },
    1407: function(t, e, i) {
      "use strict";
      i.d(e, {
        default: function() {
          return r.a
        }
      });
      var n = i(6101),
        r = i.n(n)
    },
    2554: function(t, e, i) {
      "use strict";
      var n, r;
      t.exports = (null == (n = i.g.process) ? void 0 : n.env) && "object" == typeof(null == (r = i.g.process) ? void 0 : r.env) ? i.g.process : i(2842)
    },
    4682: function(t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), Object.defineProperty(e, "Image", {
        enumerable: !0,
        get: function() {
          return x
        }
      });
      let n = i(6975),
        r = i(5749),
        s = i(6102),
        o = r._(i(7174)),
        a = n._(i(2496)),
        l = n._(i(5837)),
        u = i(8835),
        h = i(4442),
        d = i(6876);
      i(127);
      let c = i(293),
        p = n._(i(5449)),
        f = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !0
        };

      function m(t, e, i, n, r, s, o) {
        let a = null == t ? void 0 : t.src;
        t && t["data-loaded-src"] !== a && (t["data-loaded-src"] = a, ("decode" in t ? t.decode() : Promise.resolve()).catch(() => {}).then(() => {
          if (t.parentElement && t.isConnected) {
            if ("empty" !== e && r(!0), null == i ? void 0 : i.current) {
              let e = new Event("load");
              Object.defineProperty(e, "target", {
                writable: !1,
                value: t
              });
              let n = !1,
                r = !1;
              i.current({
                ...e,
                nativeEvent: e,
                currentTarget: t,
                target: t,
                isDefaultPrevented: () => n,
                isPropagationStopped: () => r,
                persist: () => {},
                preventDefault: () => {
                  n = !0, e.preventDefault()
                },
                stopPropagation: () => {
                  r = !0, e.stopPropagation()
                }
              })
            }(null == n ? void 0 : n.current) && n.current(t)
          }
        }))
      }

      function g(t) {
        return o.use ? {
          fetchPriority: t
        } : {
          fetchpriority: t
        }
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let y = (0, o.forwardRef)((t, e) => {
        let {
          src: i,
          srcSet: n,
          sizes: r,
          height: a,
          width: l,
          decoding: u,
          className: h,
          style: d,
          fetchPriority: c,
          placeholder: p,
          loading: f,
          unoptimized: y,
          fill: v,
          onLoadRef: x,
          onLoadingCompleteRef: w,
          setBlurComplete: b,
          setShowAltText: S,
          sizesInput: T,
          onLoad: P,
          onError: A,
          ...C
        } = t;
        return (0, s.jsx)("img", {
          ...C,
          ...g(c),
          loading: f,
          width: l,
          height: a,
          decoding: u,
          "data-nimg": v ? "fill" : "1",
          className: h,
          style: d,
          sizes: r,
          srcSet: n,
          src: i,
          ref: (0, o.useCallback)(t => {
            e && ("function" == typeof e ? e(t) : "object" == typeof e && (e.current = t)), t && (A && (t.src = t.src), t.complete && m(t, p, x, w, b, y, T))
          }, [i, p, x, w, b, A, y, T, e]),
          onLoad: t => {
            m(t.currentTarget, p, x, w, b, y, T)
          },
          onError: t => {
            S(!0), "empty" !== p && b(!0), A && A(t)
          }
        })
      });

      function v(t) {
        let {
          isAppRouter: e,
          imgAttributes: i
        } = t, n = {
          as: "image",
          imageSrcSet: i.srcSet,
          imageSizes: i.sizes,
          crossOrigin: i.crossOrigin,
          referrerPolicy: i.referrerPolicy,
          ...g(i.fetchPriority)
        };
        return e && a.default.preload ? (a.default.preload(i.src, n), null) : (0, s.jsx)(l.default, {
          children: (0, s.jsx)("link", {
            rel: "preload",
            href: i.srcSet ? void 0 : i.src,
            ...n
          }, "__nimg-" + i.src + i.srcSet + i.sizes)
        })
      }
      let x = (0, o.forwardRef)((t, e) => {
        let i = (0, o.useContext)(c.RouterContext),
          n = (0, o.useContext)(d.ImageConfigContext),
          r = (0, o.useMemo)(() => {
            let t = f || n || h.imageConfigDefault,
              e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
              i = t.deviceSizes.sort((t, e) => t - e);
            return {
              ...t,
              allSizes: e,
              deviceSizes: i
            }
          }, [n]),
          {
            onLoad: a,
            onLoadingComplete: l
          } = t,
          m = (0, o.useRef)(a);
        (0, o.useEffect)(() => {
          m.current = a
        }, [a]);
        let g = (0, o.useRef)(l);
        (0, o.useEffect)(() => {
          g.current = l
        }, [l]);
        let [x, w] = (0, o.useState)(!1), [b, S] = (0, o.useState)(!1), {
          props: T,
          meta: P
        } = (0, u.getImgProps)(t, {
          defaultLoader: p.default,
          imgConf: r,
          blurComplete: x,
          showAltText: b
        });
        return (0, s.jsxs)(s.Fragment, {
          children: [(0, s.jsx)(y, {
            ...T,
            unoptimized: P.unoptimized,
            placeholder: P.placeholder,
            fill: P.fill,
            onLoadRef: m,
            onLoadingCompleteRef: g,
            setBlurComplete: w,
            setShowAltText: S,
            sizesInput: t.sizes,
            ref: e
          }), P.priority ? (0, s.jsx)(v, {
            isAppRouter: !i,
            imgAttributes: T
          }) : null]
        })
      });
      ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
        value: !0
      }), Object.assign(e.default, e), t.exports = e.default)
    },
    9662: function() {},
    2842: function(t) {
      ! function() {
        var e = {
            229: function(t) {
              var e, i, n, r = t.exports = {};

              function s() {
                throw Error("setTimeout has not been defined")
              }

              function o() {
                throw Error("clearTimeout has not been defined")
              }

              function a(t) {
                if (e === setTimeout) return setTimeout(t, 0);
                if ((e === s || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
                try {
                  return e(t, 0)
                } catch (i) {
                  try {
                    return e.call(null, t, 0)
                  } catch (i) {
                    return e.call(this, t, 0)
                  }
                }
              }! function() {
                try {
                  e = "function" == typeof setTimeout ? setTimeout : s
                } catch (t) {
                  e = s
                }
                try {
                  i = "function" == typeof clearTimeout ? clearTimeout : o
                } catch (t) {
                  i = o
                }
              }();
              var l = [],
                u = !1,
                h = -1;

              function d() {
                u && n && (u = !1, n.length ? l = n.concat(l) : h = -1, l.length && c())
              }

              function c() {
                if (!u) {
                  var t = a(d);
                  u = !0;
                  for (var e = l.length; e;) {
                    for (n = l, l = []; ++h < e;) n && n[h].run();
                    h = -1, e = l.length
                  }
                  n = null, u = !1,
                    function(t) {
                      if (i === clearTimeout) return clearTimeout(t);
                      if ((i === o || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t);
                      try {
                        i(t)
                      } catch (e) {
                        try {
                          return i.call(null, t)
                        } catch (e) {
                          return i.call(this, t)
                        }
                      }
                    }(t)
                }
              }

              function p(t, e) {
                this.fun = t, this.array = e
              }

              function f() {}
              r.nextTick = function(t) {
                var e = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                l.push(new p(t, e)), 1 !== l.length || u || a(c)
              }, p.prototype.run = function() {
                this.fun.apply(null, this.array)
              }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = f, r.addListener = f, r.once = f, r.off = f, r.removeListener = f, r.removeAllListeners = f, r.emit = f, r.prependListener = f, r.prependOnceListener = f, r.listeners = function(t) {
                return []
              }, r.binding = function(t) {
                throw Error("process.binding is not supported")
              }, r.cwd = function() {
                return "/"
              }, r.chdir = function(t) {
                throw Error("process.chdir is not supported")
              }, r.umask = function() {
                return 0
              }
            }
          },
          i = {};

        function n(t) {
          var r = i[t];
          if (void 0 !== r) return r.exports;
          var s = i[t] = {
              exports: {}
            },
            o = !0;
          try {
            e[t](s, s.exports, n), o = !1
          } finally {
            o && delete i[t]
          }
          return s.exports
        }
        n.ab = "//";
        var r = n(229);
        t.exports = r
      }()
    },
    3877: function(t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), Object.defineProperty(e, "AmpStateContext", {
        enumerable: !0,
        get: function() {
          return n
        }
      });
      let n = i(6975)._(i(7174)).default.createContext({})
    },
    9058: function(t, e) {
      "use strict";

      function i(t) {
        let {
          ampFirst: e = !1,
          hybrid: i = !1,
          hasQuery: n = !1
        } = void 0 === t ? {} : t;
        return e || i && n
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), Object.defineProperty(e, "isInAmpMode", {
        enumerable: !0,
        get: function() {
          return i
        }
      })
    },
    8835: function(t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), Object.defineProperty(e, "getImgProps", {
        enumerable: !0,
        get: function() {
          return a
        }
      }), i(127);
      let n = i(9916),
        r = i(4442);

      function s(t) {
        return void 0 !== t.default
      }

      function o(t) {
        return void 0 === t ? t : "number" == typeof t ? Number.isFinite(t) ? t : NaN : "string" == typeof t && /^[0-9]+$/.test(t) ? parseInt(t, 10) : NaN
      }

      function a(t, e) {
        var i;
        let a, l, u, {
            src: h,
            sizes: d,
            unoptimized: c = !1,
            priority: p = !1,
            loading: f,
            className: m,
            quality: g,
            width: y,
            height: v,
            fill: x = !1,
            style: w,
            overrideSrc: b,
            onLoad: S,
            onLoadingComplete: T,
            placeholder: P = "empty",
            blurDataURL: A,
            fetchPriority: C,
            decoding: M = "async",
            layout: E,
            objectFit: k,
            objectPosition: R,
            lazyBoundary: j,
            lazyRoot: V,
            ...D
          } = t,
          {
            imgConf: _,
            showAltText: F,
            blurComplete: L,
            defaultLoader: O
          } = e,
          I = _ || r.imageConfigDefault;
        if ("allSizes" in I) a = I;
        else {
          let t = [...I.deviceSizes, ...I.imageSizes].sort((t, e) => t - e),
            e = I.deviceSizes.sort((t, e) => t - e);
          a = {
            ...I,
            allSizes: t,
            deviceSizes: e
          }
        }
        if (void 0 === O) throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
        let B = D.loader || O;
        delete D.loader, delete D.srcSet;
        let z = "__next_img_default" in B;
        if (z) {
          if ("custom" === a.loader) throw Error('Image with src "' + h + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
        } else {
          let t = B;
          B = e => {
            let {
              config: i,
              ...n
            } = e;
            return t(n)
          }
        }
        if (E) {
          "fill" === E && (x = !0);
          let t = {
            intrinsic: {
              maxWidth: "100%",
              height: "auto"
            },
            responsive: {
              width: "100%",
              height: "auto"
            }
          } [E];
          t && (w = {
            ...w,
            ...t
          });
          let e = {
            responsive: "100vw",
            fill: "100vw"
          } [E];
          e && !d && (d = e)
        }
        let U = "",
          N = o(y),
          W = o(v);
        if ("object" == typeof(i = h) && (s(i) || void 0 !== i.src)) {
          let t = s(h) ? h.default : h;
          if (!t.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t));
          if (!t.height || !t.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t));
          if (l = t.blurWidth, u = t.blurHeight, A = A || t.blurDataURL, U = t.src, !x) {
            if (N || W) {
              if (N && !W) {
                let e = N / t.width;
                W = Math.round(t.height * e)
              } else if (!N && W) {
                let e = W / t.height;
                N = Math.round(t.width * e)
              }
            } else N = t.width, W = t.height
          }
        }
        let $ = !p && ("lazy" === f || void 0 === f);
        (!(h = "string" == typeof h ? h : U) || h.startsWith("data:") || h.startsWith("blob:")) && (c = !0, $ = !1), a.unoptimized && (c = !0), z && h.endsWith(".svg") && !a.dangerouslyAllowSVG && (c = !0), p && (C = "high");
        let H = o(g),
          Y = Object.assign(x ? {
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            objectFit: k,
            objectPosition: R
          } : {}, F ? {} : {
            color: "transparent"
          }, w),
          X = L || "empty" === P ? null : "blur" === P ? 'url("data:image/svg+xml;charset=utf-8,' + (0, n.getImageBlurSvg)({
            widthInt: N,
            heightInt: W,
            blurWidth: l,
            blurHeight: u,
            blurDataURL: A || "",
            objectFit: Y.objectFit
          }) + '")' : 'url("' + P + '")',
          q = X ? {
            backgroundSize: Y.objectFit || "cover",
            backgroundPosition: Y.objectPosition || "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundImage: X
          } : {},
          K = function(t) {
            let {
              config: e,
              src: i,
              unoptimized: n,
              width: r,
              quality: s,
              sizes: o,
              loader: a
            } = t;
            if (n) return {
              src: i,
              srcSet: void 0,
              sizes: void 0
            };
            let {
              widths: l,
              kind: u
            } = function(t, e, i) {
              let {
                deviceSizes: n,
                allSizes: r
              } = t;
              if (i) {
                let t = /(^|\s)(1?\d?\d)vw/g,
                  e = [];
                for (let n; n = t.exec(i); n) e.push(parseInt(n[2]));
                if (e.length) {
                  let t = .01 * Math.min(...e);
                  return {
                    widths: r.filter(e => e >= n[0] * t),
                    kind: "w"
                  }
                }
                return {
                  widths: r,
                  kind: "w"
                }
              }
              return "number" != typeof e ? {
                widths: n,
                kind: "w"
              } : {
                widths: [...new Set([e, 2 * e].map(t => r.find(e => e >= t) || r[r.length - 1]))],
                kind: "x"
              }
            }(e, r, o), h = l.length - 1;
            return {
              sizes: o || "w" !== u ? o : "100vw",
              srcSet: l.map((t, n) => a({
                config: e,
                src: i,
                quality: s,
                width: t
              }) + " " + ("w" === u ? t : n + 1) + u).join(", "),
              src: a({
                config: e,
                src: i,
                quality: s,
                width: l[h]
              })
            }
          }({
            config: a,
            src: h,
            unoptimized: c,
            width: N,
            quality: H,
            sizes: d,
            loader: B
          });
        return {
          props: {
            ...D,
            loading: $ ? "lazy" : f,
            fetchPriority: C,
            width: N,
            height: W,
            decoding: M,
            className: m,
            style: {
              ...Y,
              ...q
            },
            sizes: K.sizes,
            srcSet: K.srcSet,
            src: b || K.src
          },
          meta: {
            unoptimized: c,
            priority: p,
            placeholder: P,
            fill: x
          }
        }
      }
    },
    5837: function(t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
        }),
        function(t, e) {
          for (var i in e) Object.defineProperty(t, i, {
            enumerable: !0,
            get: e[i]
          })
        }(e, {
          default: function() {
            return m
          },
          defaultHead: function() {
            return d
          }
        });
      let n = i(6975),
        r = i(5749),
        s = i(6102),
        o = r._(i(7174)),
        a = n._(i(1575)),
        l = i(3877),
        u = i(3827),
        h = i(9058);

      function d(t) {
        void 0 === t && (t = !1);
        let e = [(0, s.jsx)("meta", {
          charSet: "utf-8"
        })];
        return t || e.push((0, s.jsx)("meta", {
          name: "viewport",
          content: "width=device-width"
        })), e
      }

      function c(t, e) {
        return "string" == typeof e || "number" == typeof e ? t : e.type === o.default.Fragment ? t.concat(o.default.Children.toArray(e.props.children).reduce((t, e) => "string" == typeof e || "number" == typeof e ? t : t.concat(e), [])) : t.concat(e)
      }
      i(127);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];

      function f(t, e) {
        let {
          inAmpMode: i
        } = e;
        return t.reduce(c, []).reverse().concat(d(i).reverse()).filter(function() {
          let t = new Set,
            e = new Set,
            i = new Set,
            n = {};
          return r => {
            let s = !0,
              o = !1;
            if (r.key && "number" != typeof r.key && r.key.indexOf("$") > 0) {
              o = !0;
              let e = r.key.slice(r.key.indexOf("$") + 1);
              t.has(e) ? s = !1 : t.add(e)
            }
            switch (r.type) {
              case "title":
              case "base":
                e.has(r.type) ? s = !1 : e.add(r.type);
                break;
              case "meta":
                for (let t = 0, e = p.length; t < e; t++) {
                  let e = p[t];
                  if (r.props.hasOwnProperty(e)) {
                    if ("charSet" === e) i.has(e) ? s = !1 : i.add(e);
                    else {
                      let t = r.props[e],
                        i = n[e] || new Set;
                      ("name" !== e || !o) && i.has(t) ? s = !1 : (i.add(t), n[e] = i)
                    }
                  }
                }
            }
            return s
          }
        }()).reverse().map((t, e) => {
          let n = t.key || e;
          if (!i && "link" === t.type && t.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(e => t.props.href.startsWith(e))) {
            let e = {
              ...t.props || {}
            };
            return e["data-href"] = e.href, e.href = void 0, e["data-optimized-fonts"] = !0, o.default.cloneElement(t, e)
          }
          return o.default.cloneElement(t, {
            key: n
          })
        })
      }
      let m = function(t) {
        let {
          children: e
        } = t, i = (0, o.useContext)(l.AmpStateContext), n = (0, o.useContext)(u.HeadManagerContext);
        return (0, s.jsx)(a.default, {
          reduceComponentsToState: f,
          headManager: n,
          inAmpMode: (0, h.isInAmpMode)(i),
          children: e
        })
      };
      ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
        value: !0
      }), Object.assign(e.default, e), t.exports = e.default)
    },
    9916: function(t, e) {
      "use strict";

      function i(t) {
        let {
          widthInt: e,
          heightInt: i,
          blurWidth: n,
          blurHeight: r,
          blurDataURL: s,
          objectFit: o
        } = t, a = n ? 40 * n : e, l = r ? 40 * r : i, u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
        return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + s + "'/%3E%3C/svg%3E"
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), Object.defineProperty(e, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
          return i
        }
      })
    },
    6876: function(t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), Object.defineProperty(e, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
          return s
        }
      });
      let n = i(6975)._(i(7174)),
        r = i(4442),
        s = n.default.createContext(r.imageConfigDefault)
    },
    4442: function(t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
        }),
        function(t, e) {
          for (var i in e) Object.defineProperty(t, i, {
            enumerable: !0,
            get: e[i]
          })
        }(e, {
          VALID_LOADERS: function() {
            return i
          },
          imageConfigDefault: function() {
            return n
          }
        });
      let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          localPatterns: void 0,
          remotePatterns: [],
          unoptimized: !1
        }
    },
    6101: function(t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
          value: !0
        }),
        function(t, e) {
          for (var i in e) Object.defineProperty(t, i, {
            enumerable: !0,
            get: e[i]
          })
        }(e, {
          default: function() {
            return l
          },
          getImageProps: function() {
            return a
          }
        });
      let n = i(6975),
        r = i(8835),
        s = i(4682),
        o = n._(i(5449));

      function a(t) {
        let {
          props: e
        } = (0, r.getImgProps)(t, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0
          }
        });
        for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
        return {
          props: e
        }
      }
      let l = s.Image
    },
    5449: function(t, e) {
      "use strict";

      function i(t) {
        let {
          config: e,
          src: i,
          width: n,
          quality: r
        } = t;
        return e.path + "?url=" + encodeURIComponent(i) + "&w=" + n + "&q=" + (r || 75)
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
          return n
        }
      }), i.__next_img_default = !0;
      let n = i
    },
    293: function(t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), Object.defineProperty(e, "RouterContext", {
        enumerable: !0,
        get: function() {
          return n
        }
      });
      let n = i(6975)._(i(7174)).default.createContext(null)
    },
    1575: function(t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
          return a
        }
      });
      let n = i(7174),
        r = "undefined" == typeof window,
        s = r ? () => {} : n.useLayoutEffect,
        o = r ? () => {} : n.useEffect;

      function a(t) {
        let {
          headManager: e,
          reduceComponentsToState: i
        } = t;

        function a() {
          if (e && e.mountedInstances) {
            let r = n.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));
            e.updateHead(i(r, t))
          }
        }
        if (r) {
          var l;
          null == e || null == (l = e.mountedInstances) || l.add(t.children), a()
        }
        return s(() => {
          var i;
          return null == e || null == (i = e.mountedInstances) || i.add(t.children), () => {
            var i;
            null == e || null == (i = e.mountedInstances) || i.delete(t.children)
          }
        }), s(() => (e && (e._pendingUpdate = a), () => {
          e && (e._pendingUpdate = a)
        })), o(() => (e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null), () => {
          e && e._pendingUpdate && (e._pendingUpdate(), e._pendingUpdate = null)
        })), null
      }
    },
    9859: function(t, e, i) {
      "use strict";
      var n = i(2554);
      i(9662);
      var r = i(7174),
        s = r && "object" == typeof r && "default" in r ? r : {
          default: r
        },
        o = void 0 !== n && n.env && !0,
        a = function(t) {
          return "[object String]" === Object.prototype.toString.call(t)
        },
        l = function() {
          function t(t) {
            var e = void 0 === t ? {} : t,
              i = e.name,
              n = void 0 === i ? "stylesheet" : i,
              r = e.optimizeForSpeed,
              s = void 0 === r ? o : r;
            u(a(n), "`name` must be a string"), this._name = n, this._deletedRulePlaceholder = "#" + n + "-deleted-rule____{}", u("boolean" == typeof s, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = s, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
            var l = "undefined" != typeof window && document.querySelector('meta[property="csp-nonce"]');
            this._nonce = l ? l.getAttribute("content") : null
          }
          var e = t.prototype;
          return e.setOptimizeForSpeed = function(t) {
              u("boolean" == typeof t, "`setOptimizeForSpeed` accepts a boolean"), u(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = t, this.inject()
            }, e.isOptimizeForSpeed = function() {
              return this._optimizeForSpeed
            }, e.inject = function() {
              var t = this;
              if (u(!this._injected, "sheet already injected"), this._injected = !0, "undefined" != typeof window && this._optimizeForSpeed) {
                this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (o || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
                return
              }
              this._serverSheet = {
                cssRules: [],
                insertRule: function(e, i) {
                  return "number" == typeof i ? t._serverSheet.cssRules[i] = {
                    cssText: e
                  } : t._serverSheet.cssRules.push({
                    cssText: e
                  }), i
                },
                deleteRule: function(e) {
                  t._serverSheet.cssRules[e] = null
                }
              }
            }, e.getSheetForTag = function(t) {
              if (t.sheet) return t.sheet;
              for (var e = 0; e < document.styleSheets.length; e++)
                if (document.styleSheets[e].ownerNode === t) return document.styleSheets[e]
            }, e.getSheet = function() {
              return this.getSheetForTag(this._tags[this._tags.length - 1])
            }, e.insertRule = function(t, e) {
              if (u(a(t), "`insertRule` accepts only strings"), "undefined" == typeof window) return "number" != typeof e && (e = this._serverSheet.cssRules.length), this._serverSheet.insertRule(t, e), this._rulesCount++;
              if (this._optimizeForSpeed) {
                var i = this.getSheet();
                "number" != typeof e && (e = i.cssRules.length);
                try {
                  i.insertRule(t, e)
                } catch (e) {
                  return o || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                }
              } else {
                var n = this._tags[e];
                this._tags.push(this.makeStyleTag(this._name, t, n))
              }
              return this._rulesCount++
            }, e.replaceRule = function(t, e) {
              if (this._optimizeForSpeed || "undefined" == typeof window) {
                var i = "undefined" != typeof window ? this.getSheet() : this._serverSheet;
                if (e.trim() || (e = this._deletedRulePlaceholder), !i.cssRules[t]) return t;
                i.deleteRule(t);
                try {
                  i.insertRule(e, t)
                } catch (n) {
                  o || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), i.insertRule(this._deletedRulePlaceholder, t)
                }
              } else {
                var n = this._tags[t];
                u(n, "old rule at index `" + t + "` not found"), n.textContent = e
              }
              return t
            }, e.deleteRule = function(t) {
              if ("undefined" == typeof window) {
                this._serverSheet.deleteRule(t);
                return
              }
              if (this._optimizeForSpeed) this.replaceRule(t, "");
              else {
                var e = this._tags[t];
                u(e, "rule at index `" + t + "` not found"), e.parentNode.removeChild(e), this._tags[t] = null
              }
            }, e.flush = function() {
              this._injected = !1, this._rulesCount = 0, "undefined" != typeof window ? (this._tags.forEach(function(t) {
                return t && t.parentNode.removeChild(t)
              }), this._tags = []) : this._serverSheet.cssRules = []
            }, e.cssRules = function() {
              var t = this;
              return "undefined" == typeof window ? this._serverSheet.cssRules : this._tags.reduce(function(e, i) {
                return i ? e = e.concat(Array.prototype.map.call(t.getSheetForTag(i).cssRules, function(e) {
                  return e.cssText === t._deletedRulePlaceholder ? null : e
                })) : e.push(null), e
              }, [])
            }, e.makeStyleTag = function(t, e, i) {
              e && u(a(e), "makeStyleTag accepts only strings as second parameter");
              var n = document.createElement("style");
              this._nonce && n.setAttribute("nonce", this._nonce), n.type = "text/css", n.setAttribute("data-" + t, ""), e && n.appendChild(document.createTextNode(e));
              var r = document.head || document.getElementsByTagName("head")[0];
              return i ? r.insertBefore(n, i) : r.appendChild(n), n
            },
            function(t, e) {
              for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
              }
            }(t.prototype, [{
              key: "length",
              get: function() {
                return this._rulesCount
              }
            }]), t
        }();

      function u(t, e) {
        if (!t) throw Error("StyleSheet: " + e + ".")
      }
      var h = function(t) {
          for (var e = 5381, i = t.length; i;) e = 33 * e ^ t.charCodeAt(--i);
          return e >>> 0
        },
        d = {};

      function c(t, e) {
        if (!e) return "jsx-" + t;
        var i = String(e),
          n = t + i;
        return d[n] || (d[n] = "jsx-" + h(t + "-" + i)), d[n]
      }

      function p(t, e) {
        "undefined" == typeof window && (e = e.replace(/\/style/gi, "\\/style"));
        var i = t + e;
        return d[i] || (d[i] = e.replace(/__jsx-style-dynamic-selector/g, t)), d[i]
      }
      var f = function() {
          function t(t) {
            var e = void 0 === t ? {} : t,
              i = e.styleSheet,
              n = void 0 === i ? null : i,
              r = e.optimizeForSpeed,
              s = void 0 !== r && r;
            this._sheet = n || new l({
              name: "styled-jsx",
              optimizeForSpeed: s
            }), this._sheet.inject(), n && "boolean" == typeof s && (this._sheet.setOptimizeForSpeed(s), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
          }
          var e = t.prototype;
          return e.add = function(t) {
            var e = this;
            void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(t.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), "undefined" == typeof window || this._fromServer || (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(t, e) {
              return t[e] = 0, t
            }, {}));
            var i = this.getIdAndRules(t),
              n = i.styleId,
              r = i.rules;
            if (n in this._instancesCounts) {
              this._instancesCounts[n] += 1;
              return
            }
            var s = r.map(function(t) {
              return e._sheet.insertRule(t)
            }).filter(function(t) {
              return -1 !== t
            });
            this._indices[n] = s, this._instancesCounts[n] = 1
          }, e.remove = function(t) {
            var e = this,
              i = this.getIdAndRules(t).styleId;
            if (function(t, e) {
                if (!t) throw Error("StyleSheetRegistry: " + e + ".")
              }(i in this._instancesCounts, "styleId: `" + i + "` not found"), this._instancesCounts[i] -= 1, this._instancesCounts[i] < 1) {
              var n = this._fromServer && this._fromServer[i];
              n ? (n.parentNode.removeChild(n), delete this._fromServer[i]) : (this._indices[i].forEach(function(t) {
                return e._sheet.deleteRule(t)
              }), delete this._indices[i]), delete this._instancesCounts[i]
            }
          }, e.update = function(t, e) {
            this.add(e), this.remove(t)
          }, e.flush = function() {
            this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
          }, e.cssRules = function() {
            var t = this,
              e = this._fromServer ? Object.keys(this._fromServer).map(function(e) {
                return [e, t._fromServer[e]]
              }) : [],
              i = this._sheet.cssRules();
            return e.concat(Object.keys(this._indices).map(function(e) {
              return [e, t._indices[e].map(function(t) {
                return i[t].cssText
              }).join(t._optimizeForSpeed ? "" : "\n")]
            }).filter(function(t) {
              return !!t[1]
            }))
          }, e.styles = function(t) {
            var e, i;
            return e = this.cssRules(), void 0 === (i = t) && (i = {}), e.map(function(t) {
              var e = t[0],
                n = t[1];
              return s.default.createElement("style", {
                id: "__" + e,
                key: "__" + e,
                nonce: i.nonce ? i.nonce : void 0,
                dangerouslySetInnerHTML: {
                  __html: n
                }
              })
            })
          }, e.getIdAndRules = function(t) {
            var e = t.children,
              i = t.dynamic,
              n = t.id;
            if (i) {
              var r = c(n, i);
              return {
                styleId: r,
                rules: Array.isArray(e) ? e.map(function(t) {
                  return p(r, t)
                }) : [p(r, e)]
              }
            }
            return {
              styleId: c(n),
              rules: Array.isArray(e) ? e : [e]
            }
          }, e.selectFromServer = function() {
            return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(t, e) {
              return t[e.id.slice(2)] = e, t
            }, {})
          }, t
        }(),
        m = r.createContext(null);
      m.displayName = "StyleSheetContext";
      var g = s.default.useInsertionEffect || s.default.useLayoutEffect,
        y = "undefined" != typeof window ? new f : void 0;

      function v(t) {
        var e = y || r.useContext(m);
        return e && ("undefined" == typeof window ? e.add(t) : g(function() {
          return e.add(t),
            function() {
              e.remove(t)
            }
        }, [t.id, String(t.dynamic)])), null
      }
      v.dynamic = function(t) {
        return t.map(function(t) {
          return c(t[0], t[1])
        }).join(" ")
      }, e.style = v
    },
    1147: function(t, e, i) {
      "use strict";
      t.exports = i(9859).style
    },
    1528: function(t, e, i) {
      "use strict";
      i.d(e, {
        M: function() {
          return x
        }
      });
      var n = i(6102),
        r = i(7174),
        s = i(2177),
        o = i(4893),
        a = i(1065),
        l = i(5940),
        u = i(1438),
        h = i(5190);

      function d(t, e) {
        if ("function" == typeof t) return t(e);
        null != t && (t.current = e)
      }
      class c extends r.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = e.offsetParent,
              i = (0, u.R)(t) && t.offsetWidth || 0,
              n = this.props.sizeRef.current;
            n.height = e.offsetHeight || 0, n.width = e.offsetWidth || 0, n.top = e.offsetTop, n.left = e.offsetLeft, n.right = i - n.width - n.left
          }
          return null
        }
        componentDidUpdate() {}
        render() {
          return this.props.children
        }
      }

      function p(t) {
        let {
          children: e,
          isPresent: i,
          anchorX: s,
          root: o
        } = t, a = (0, r.useId)(), l = (0, r.useRef)(null), u = (0, r.useRef)({
          width: 0,
          height: 0,
          top: 0,
          left: 0,
          right: 0
        }), {
          nonce: p
        } = (0, r.useContext)(h._), f = function(...t) {
          return r.useCallback(function(...t) {
            return e => {
              let i = !1,
                n = t.map(t => {
                  let n = d(t, e);
                  return i || "function" != typeof n || (i = !0), n
                });
              if (i) return () => {
                for (let e = 0; e < n.length; e++) {
                  let i = n[e];
                  "function" == typeof i ? i() : d(t[e], null)
                }
              }
            }
          }(...t), t)
        }(l, null == e ? void 0 : e.ref);
        return (0, r.useInsertionEffect)(() => {
          let {
            width: t,
            height: e,
            top: n,
            left: r,
            right: h
          } = u.current;
          if (i || !l.current || !t || !e) return;
          l.current.dataset.motionPopId = a;
          let d = document.createElement("style");
          p && (d.nonce = p);
          let c = null != o ? o : document.head;
          return c.appendChild(d), d.sheet && d.sheet.insertRule('\n          [data-motion-pop-id="'.concat(a, '"] {\n            position: absolute !important;\n            width: ').concat(t, "px !important;\n            height: ").concat(e, "px !important;\n            ").concat("left" === s ? "left: ".concat(r) : "right: ".concat(h), "px !important;\n            top: ").concat(n, "px !important;\n          }\n        ")), () => {
            c.contains(d) && c.removeChild(d)
          }
        }, [i]), (0, n.jsx)(c, {
          isPresent: i,
          childRef: l,
          sizeRef: u,
          children: r.cloneElement(e, {
            ref: f
          })
        })
      }
      let f = t => {
        let {
          children: e,
          initial: i,
          isPresent: s,
          onExitComplete: a,
          custom: u,
          presenceAffectsLayout: h,
          mode: d,
          anchorX: c,
          root: f
        } = t, g = (0, o.h)(m), y = (0, r.useId)(), v = !0, x = (0, r.useMemo)(() => (v = !1, {
          id: y,
          initial: i,
          isPresent: s,
          custom: u,
          onExitComplete: t => {
            for (let e of (g.set(t, !0), g.values()))
              if (!e) return;
            a && a()
          },
          register: t => (g.set(t, !1), () => g.delete(t))
        }), [s, g, a]);
        return h && v && (x = {
          ...x
        }), (0, r.useMemo)(() => {
          g.forEach((t, e) => g.set(e, !1))
        }, [s]), r.useEffect(() => {
          s || g.size || !a || a()
        }, [s]), "popLayout" === d && (e = (0, n.jsx)(p, {
          isPresent: s,
          anchorX: c,
          root: f,
          children: e
        })), (0, n.jsx)(l.O.Provider, {
          value: x,
          children: e
        })
      };

      function m() {
        return new Map
      }
      var g = i(9793);
      let y = t => t.key || "";

      function v(t) {
        let e = [];
        return r.Children.forEach(t, t => {
          (0, r.isValidElement)(t) && e.push(t)
        }), e
      }
      let x = t => {
        let {
          children: e,
          custom: i,
          initial: l = !0,
          onExitComplete: u,
          presenceAffectsLayout: h = !0,
          mode: d = "sync",
          propagate: c = !1,
          anchorX: p = "left",
          root: m
        } = t, [x, w] = (0, g.oO)(c), b = (0, r.useMemo)(() => v(e), [e]), S = c && !x ? [] : b.map(y), T = (0, r.useRef)(!0), P = (0, r.useRef)(b), A = (0, o.h)(() => new Map), [C, M] = (0, r.useState)(b), [E, k] = (0, r.useState)(b);
        (0, a.L)(() => {
          T.current = !1, P.current = b;
          for (let t = 0; t < E.length; t++) {
            let e = y(E[t]);
            S.includes(e) ? A.delete(e) : !0 !== A.get(e) && A.set(e, !1)
          }
        }, [E, S.length, S.join("-")]);
        let R = [];
        if (b !== C) {
          let t = [...b];
          for (let e = 0; e < E.length; e++) {
            let i = E[e],
              n = y(i);
            S.includes(n) || (t.splice(e, 0, i), R.push(i))
          }
          return "wait" === d && R.length && (t = R), k(v(t)), M(b), null
        }
        let {
          forceRender: j
        } = (0, r.useContext)(s.p);
        return (0, n.jsx)(n.Fragment, {
          children: E.map(t => {
            let e = y(t),
              r = (!c || !!x) && (b === E || S.includes(e));
            return (0, n.jsx)(f, {
              isPresent: r,
              initial: (!T.current || !!l) && void 0,
              custom: i,
              presenceAffectsLayout: h,
              mode: d,
              root: m,
              onExitComplete: r ? void 0 : () => {
                if (!A.has(e)) return;
                A.set(e, !0);
                let t = !0;
                A.forEach(e => {
                  e || (t = !1)
                }), t && (null == j || j(), k(P.current), c && (null == w || w()), u && u())
              },
              anchorX: p,
              children: t
            }, e)
          })
        })
      }
    },
    9793: function(t, e, i) {
      "use strict";
      i.d(e, {
        oO: function() {
          return s
        }
      });
      var n = i(7174),
        r = i(5940);

      function s() {
        let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
          e = (0, n.useContext)(r.O);
        if (null === e) return [!0, null];
        let {
          isPresent: i,
          onExitComplete: s,
          register: o
        } = e, a = (0, n.useId)();
        (0, n.useEffect)(() => {
          if (t) return o(a)
        }, [t]);
        let l = (0, n.useCallback)(() => t && s && s(a), [a, s, t]);
        return !i && s ? [!1, l] : [!0]
      }
    },
    2177: function(t, e, i) {
      "use strict";
      i.d(e, {
        p: function() {
          return n
        }
      });
      let n = (0, i(7174).createContext)({})
    },
    5190: function(t, e, i) {
      "use strict";
      i.d(e, {
        _: function() {
          return n
        }
      });
      let n = (0, i(7174).createContext)({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
      })
    },
    5940: function(t, e, i) {
      "use strict";
      i.d(e, {
        O: function() {
          return n
        }
      });
      let n = (0, i(7174).createContext)(null)
    },
    2239: function(t, e, i) {
      "use strict";
      let n;
      i.d(e, {
        E: function() {
          return sk
        }
      });
      var r, s = i(7174);
      let o = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        a = new Set(o),
        l = t => 180 * t / Math.PI,
        u = t => d(l(Math.atan2(t[1], t[0]))),
        h = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: u,
          rotateZ: u,
          skewX: t => l(Math.atan(t[1])),
          skewY: t => l(Math.atan(t[2])),
          skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
        },
        d = t => ((t %= 360) < 0 && (t += 360), t),
        c = t => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        p = t => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        f = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: c,
          scaleY: p,
          scale: t => (c(t) + p(t)) / 2,
          rotateX: t => d(l(Math.atan2(t[6], t[5]))),
          rotateY: t => d(l(Math.atan2(-t[2], t[0]))),
          rotateZ: u,
          rotate: u,
          skewX: t => l(Math.atan(t[4])),
          skewY: t => l(Math.atan(t[1])),
          skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
        };

      function m(t) {
        return t.includes("scale") ? 1 : 0
      }

      function g(t, e) {
        let i, n;
        if (!t || "none" === t) return m(e);
        let r = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (r) i = f, n = r;
        else {
          let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          i = h, n = e
        }
        if (!n) return m(e);
        let s = i[e],
          o = n[1].split(",").map(v);
        return "function" == typeof s ? s(o) : o[s]
      }
      let y = (t, e) => {
        let {
          transform: i = "none"
        } = getComputedStyle(t);
        return g(i, e)
      };

      function v(t) {
        return parseFloat(t.trim())
      }
      let x = t => e => "string" == typeof e && e.startsWith(t),
        w = x("--"),
        b = x("var(--"),
        S = t => !!b(t) && T.test(t.split("/*")[0].trim()),
        T = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

      function P({
        top: t,
        left: e,
        right: i,
        bottom: n
      }) {
        return {
          x: {
            min: e,
            max: i
          },
          y: {
            min: t,
            max: n
          }
        }
      }
      let A = (t, e, i) => t + (e - t) * i;

      function C(t) {
        return void 0 === t || 1 === t
      }

      function M({
        scale: t,
        scaleX: e,
        scaleY: i
      }) {
        return !C(t) || !C(e) || !C(i)
      }

      function E(t) {
        return M(t) || k(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
      }

      function k(t) {
        var e, i;
        return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
      }

      function R(t, e, i, n, r) {
        return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e
      }

      function j(t, e = 0, i = 1, n, r) {
        t.min = R(t.min, e, i, n, r), t.max = R(t.max, e, i, n, r)
      }

      function V(t, {
        x: e,
        y: i
      }) {
        j(t.x, e.translate, e.scale, e.originPoint), j(t.y, i.translate, i.scale, i.originPoint)
      }

      function D(t, e) {
        t.min = t.min + e, t.max = t.max + e
      }

      function _(t, e, i, n, r = .5) {
        let s = A(t.min, t.max, r);
        j(t, e, i, s, n)
      }

      function F(t, e) {
        _(t.x, e.x, e.scaleX, e.scale, e.originX), _(t.y, e.y, e.scaleY, e.scale, e.originY)
      }

      function L(t, e) {
        return P(function(t, e) {
          if (!e) return t;
          let i = e({
              x: t.left,
              y: t.top
            }),
            n = e({
              x: t.right,
              y: t.bottom
            });
          return {
            top: i.y,
            left: i.x,
            bottom: n.y,
            right: n.x
          }
        }(t.getBoundingClientRect(), e))
      }
      let O = new Set(["width", "height", "top", "left", "right", "bottom", ...o]),
        I = (t, e, i) => i > e ? e : i < t ? t : i,
        B = {
          test: t => "number" == typeof t,
          parse: parseFloat,
          transform: t => t
        },
        z = {
          ...B,
          transform: t => I(0, 1, t)
        },
        U = {
          ...B,
          default: 1
        },
        N = t => ({
          test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: e => `${e}${t}`
        }),
        W = N("deg"),
        $ = N("%"),
        H = N("px"),
        Y = N("vh"),
        X = N("vw"),
        q = {
          ...$,
          parse: t => $.parse(t) / 100,
          transform: t => $.transform(100 * t)
        },
        K = t => e => e.test(t),
        G = [B, H, $, W, X, Y, {
          test: t => "auto" === t,
          parse: t => t
        }],
        Z = t => G.find(K(t)),
        J = () => {},
        Q = () => {},
        tt = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        te = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        ti = t => t === B || t === H,
        tn = new Set(["x", "y", "z"]),
        tr = o.filter(t => !tn.has(t)),
        ts = {
          width: ({
            x: t
          }, {
            paddingLeft: e = "0",
            paddingRight: i = "0"
          }) => t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({
            y: t
          }, {
            paddingTop: e = "0",
            paddingBottom: i = "0"
          }) => t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, {
            top: e
          }) => parseFloat(e),
          left: (t, {
            left: e
          }) => parseFloat(e),
          bottom: ({
            y: t
          }, {
            top: e
          }) => parseFloat(e) + (t.max - t.min),
          right: ({
            x: t
          }, {
            left: e
          }) => parseFloat(e) + (t.max - t.min),
          x: (t, {
            transform: e
          }) => g(e, "x"),
          y: (t, {
            transform: e
          }) => g(e, "y")
        };
      ts.translateX = ts.x, ts.translateY = ts.y;
      let to = t => t,
        ta = {},
        tl = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"],
        tu = {
          value: null,
          addProjectionMetrics: null
        };

      function th(t, e) {
        let i = !1,
          n = !0,
          r = {
            delta: 0,
            timestamp: 0,
            isProcessing: !1
          },
          s = () => i = !0,
          o = tl.reduce((t, i) => (t[i] = function(t, e) {
            let i = new Set,
              n = new Set,
              r = !1,
              s = !1,
              o = new WeakSet,
              a = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
              },
              l = 0;

            function u(e) {
              o.has(e) && (h.schedule(e), t()), l++, e(a)
            }
            let h = {
              schedule: (t, e = !1, s = !1) => {
                let a = s && r ? i : n;
                return e && o.add(t), a.has(t) || a.add(t), t
              },
              cancel: t => {
                n.delete(t), o.delete(t)
              },
              process: t => {
                if (a = t, r) {
                  s = !0;
                  return
                }
                r = !0, [i, n] = [n, i], i.forEach(u), e && tu.value && tu.value.frameloop[e].push(l), l = 0, i.clear(), r = !1, s && (s = !1, h.process(t))
              }
            };
            return h
          }(s, e ? i : void 0), t), {}),
          {
            setup: a,
            read: l,
            resolveKeyframes: u,
            preUpdate: h,
            update: d,
            preRender: c,
            render: p,
            postRender: f
          } = o,
          m = () => {
            let s = ta.useManualTiming ? r.timestamp : performance.now();
            i = !1, ta.useManualTiming || (r.delta = n ? 1e3 / 60 : Math.max(Math.min(s - r.timestamp, 40), 1)), r.timestamp = s, r.isProcessing = !0, a.process(r), l.process(r), u.process(r), h.process(r), d.process(r), c.process(r), p.process(r), f.process(r), r.isProcessing = !1, i && e && (n = !1, t(m))
          },
          g = () => {
            i = !0, n = !0, r.isProcessing || t(m)
          };
        return {
          schedule: tl.reduce((t, e) => {
            let n = o[e];
            return t[e] = (t, e = !1, r = !1) => (i || g(), n.schedule(t, e, r)), t
          }, {}),
          cancel: t => {
            for (let e = 0; e < tl.length; e++) o[tl[e]].cancel(t)
          },
          state: r,
          steps: o
        }
      }
      let {
        schedule: td,
        cancel: tc,
        state: tp,
        steps: tf
      } = th("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : to, !0), tm = new Set, tg = !1, ty = !1, tv = !1;

      function tx() {
        if (ty) {
          let t = Array.from(tm).filter(t => t.needsMeasurement),
            e = new Set(t.map(t => t.element)),
            i = new Map;
          e.forEach(t => {
            let e = function(t) {
              let e = [];
              return tr.forEach(i => {
                let n = t.getValue(i);
                void 0 !== n && (e.push([i, n.get()]), n.set(i.startsWith("scale") ? 1 : 0))
              }), e
            }(t);
            e.length && (i.set(t, e), t.render())
          }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
            t.render();
            let e = i.get(t);
            e && e.forEach(([e, i]) => {
              t.getValue(e)?.set(i)
            })
          }), t.forEach(t => t.measureEndState()), t.forEach(t => {
            void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
          })
        }
        ty = !1, tg = !1, tm.forEach(t => t.complete(tv)), tm.clear()
      }

      function tw() {
        tm.forEach(t => {
          t.readKeyframes(), t.needsMeasurement && (ty = !0)
        })
      }
      class tb {
        constructor(t, e, i, n, r, s = !1) {
          this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = i, this.motionValue = n, this.element = r, this.isAsync = s
        }
        scheduleResolve() {
          this.state = "scheduled", this.isAsync ? (tm.add(this), tg || (tg = !0, td.read(tw), td.resolveKeyframes(tx))) : (this.readKeyframes(), this.complete())
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n
          } = this;
          if (null === t[0]) {
            let r = n?.get(),
              s = t[t.length - 1];
            if (void 0 !== r) t[0] = r;
            else if (i && e) {
              let n = i.readValue(e, s);
              null != n && (t[0] = n)
            }
            void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0])
          }! function(t) {
            for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1])
          }(t)
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = !1) {
          this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), tm.delete(this)
        }
        cancel() {
          "scheduled" === this.state && (tm.delete(this), this.state = "pending")
        }
        resume() {
          "pending" === this.state && this.scheduleResolve()
        }
      }
      let tS = t => /^0[^.\s]+$/u.test(t),
        tT = t => Math.round(1e5 * t) / 1e5,
        tP = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        tA = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        tC = (t, e) => i => !!("string" == typeof i && tA.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e)),
        tM = (t, e, i) => n => {
          if ("string" != typeof n) return n;
          let [r, s, o, a] = n.match(tP);
          return {
            [t]: parseFloat(r),
            [e]: parseFloat(s),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1
          }
        },
        tE = t => I(0, 255, t),
        tk = {
          ...B,
          transform: t => Math.round(tE(t))
        },
        tR = {
          test: tC("rgb", "red"),
          parse: tM("red", "green", "blue"),
          transform: ({
            red: t,
            green: e,
            blue: i,
            alpha: n = 1
          }) => "rgba(" + tk.transform(t) + ", " + tk.transform(e) + ", " + tk.transform(i) + ", " + tT(z.transform(n)) + ")"
        },
        tj = {
          test: tC("#"),
          parse: function(t) {
            let e = "",
              i = "",
              n = "",
              r = "";
            return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), n = t.substring(5, 7), r = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), n = t.substring(3, 4), r = t.substring(4, 5), e += e, i += i, n += n, r += r), {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(n, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1
            }
          },
          transform: tR.transform
        },
        tV = {
          test: tC("hsl", "hue"),
          parse: tM("hue", "saturation", "lightness"),
          transform: ({
            hue: t,
            saturation: e,
            lightness: i,
            alpha: n = 1
          }) => "hsla(" + Math.round(t) + ", " + $.transform(tT(e)) + ", " + $.transform(tT(i)) + ", " + tT(z.transform(n)) + ")"
        },
        tD = {
          test: t => tR.test(t) || tj.test(t) || tV.test(t),
          parse: t => tR.test(t) ? tR.parse(t) : tV.test(t) ? tV.parse(t) : tj.parse(t),
          transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? tR.transform(t) : tV.transform(t),
          getAnimatableNone: t => {
            let e = tD.parse(t);
            return e.alpha = 0, tD.transform(e)
          }
        },
        t_ = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        tF = "number",
        tL = "color",
        tO = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

      function tI(t) {
        let e = t.toString(),
          i = [],
          n = {
            color: [],
            number: [],
            var: []
          },
          r = [],
          s = 0,
          o = e.replace(tO, t => (tD.test(t) ? (n.color.push(s), r.push(tL), i.push(tD.parse(t))) : t.startsWith("var(") ? (n.var.push(s), r.push("var"), i.push(t)) : (n.number.push(s), r.push(tF), i.push(parseFloat(t))), ++s, "${}")).split("${}");
        return {
          values: i,
          split: o,
          indexes: n,
          types: r
        }
      }

      function tB(t) {
        return tI(t).values
      }

      function tz(t) {
        let {
          split: e,
          types: i
        } = tI(t), n = e.length;
        return t => {
          let r = "";
          for (let s = 0; s < n; s++)
            if (r += e[s], void 0 !== t[s]) {
              let e = i[s];
              e === tF ? r += tT(t[s]) : e === tL ? r += tD.transform(t[s]) : r += t[s]
            } return r
        }
      }
      let tU = t => "number" == typeof t ? 0 : tD.test(t) ? tD.getAnimatableNone(t) : t,
        tN = {
          test: function(t) {
            return isNaN(t) && "string" == typeof t && (t.match(tP)?.length || 0) + (t.match(t_)?.length || 0) > 0
          },
          parse: tB,
          createTransformer: tz,
          getAnimatableNone: function(t) {
            let e = tB(t);
            return tz(t)(e.map(tU))
          }
        },
        tW = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function t$(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(tP) || [];
        if (!n) return t;
        let r = i.replace(n, ""),
          s = tW.has(e) ? 1 : 0;
        return n !== i && (s *= 100), e + "(" + s + r + ")"
      }
      let tH = /\b([a-z-]*)\(.*?\)/gu,
        tY = {
          ...tN,
          getAnimatableNone: t => {
            let e = t.match(tH);
            return e ? e.map(t$).join(" ") : t
          }
        },
        tX = {
          ...B,
          transform: Math.round
        },
        tq = {
          borderWidth: H,
          borderTopWidth: H,
          borderRightWidth: H,
          borderBottomWidth: H,
          borderLeftWidth: H,
          borderRadius: H,
          radius: H,
          borderTopLeftRadius: H,
          borderTopRightRadius: H,
          borderBottomRightRadius: H,
          borderBottomLeftRadius: H,
          width: H,
          maxWidth: H,
          height: H,
          maxHeight: H,
          top: H,
          right: H,
          bottom: H,
          left: H,
          padding: H,
          paddingTop: H,
          paddingRight: H,
          paddingBottom: H,
          paddingLeft: H,
          margin: H,
          marginTop: H,
          marginRight: H,
          marginBottom: H,
          marginLeft: H,
          backgroundPositionX: H,
          backgroundPositionY: H,
          rotate: W,
          rotateX: W,
          rotateY: W,
          rotateZ: W,
          scale: U,
          scaleX: U,
          scaleY: U,
          scaleZ: U,
          skew: W,
          skewX: W,
          skewY: W,
          distance: H,
          translateX: H,
          translateY: H,
          translateZ: H,
          x: H,
          y: H,
          z: H,
          perspective: H,
          transformPerspective: H,
          opacity: z,
          originX: q,
          originY: q,
          originZ: H,
          zIndex: tX,
          fillOpacity: z,
          strokeOpacity: z,
          numOctaves: tX
        },
        tK = {
          ...tq,
          color: tD,
          backgroundColor: tD,
          outlineColor: tD,
          fill: tD,
          stroke: tD,
          borderColor: tD,
          borderTopColor: tD,
          borderRightColor: tD,
          borderBottomColor: tD,
          borderLeftColor: tD,
          filter: tY,
          WebkitFilter: tY
        },
        tG = t => tK[t];

      function tZ(t, e) {
        let i = tG(t);
        return i !== tY && (i = tN), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
      }
      let tJ = new Set(["auto", "none", "0"]);
      class tQ extends tb {
        constructor(t, e, i, n, r) {
          super(t, e, i, n, r, !0)
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            element: e,
            name: i
          } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && S(n = n.trim())) {
              let r = function t(e, i, n = 1) {
                Q(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
                let [r, s] = function(t) {
                  let e = te.exec(t);
                  if (!e) return [, ];
                  let [, i, n, r] = e;
                  return [`--${i??n}`, r]
                }(e);
                if (!r) return;
                let o = window.getComputedStyle(i).getPropertyValue(r);
                if (o) {
                  let t = o.trim();
                  return tt(t) ? parseFloat(t) : t
                }
                return S(s) ? t(s, i, n + 1) : s
              }(n, e.current);
              void 0 !== r && (t[i] = r), i === t.length - 1 && (this.finalKeyframe = n)
            }
          }
          if (this.resolveNoneKeyframes(), !O.has(i) || 2 !== t.length) return;
          let [n, r] = t, s = Z(n), o = Z(r);
          if (s !== o) {
            if (ti(s) && ti(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i))
              } else ts[i] && (this.needsMeasurement = !0)
          }
        }
        resolveNoneKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e
          } = this, i = [];
          for (let e = 0; e < t.length; e++) {
            var n;
            (null === t[e] || ("number" == typeof(n = t[e]) ? 0 === n : null === n || "none" === n || "0" === n || tS(n))) && i.push(e)
          }
          i.length && function(t, e, i) {
            let n, r = 0;
            for (; r < t.length && !n;) {
              let e = t[r];
              "string" == typeof e && !tJ.has(e) && tI(e).values.length && (n = t[r]), r++
            }
            if (n && i)
              for (let r of e) t[r] = tZ(i, n)
          }(t, i, e)
        }
        measureInitialState() {
          let {
            element: t,
            unresolvedKeyframes: e,
            name: i
          } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ts[i](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1)
        }
        measureEndState() {
          let {
            element: t,
            name: e,
            unresolvedKeyframes: i
          } = this;
          if (!t || !t.current) return;
          let n = t.getValue(e);
          n && n.jump(this.measuredOrigin, !1);
          let r = i.length - 1,
            s = i[r];
          i[r] = ts[e](t.measureViewportBox(), window.getComputedStyle(t.current)), null !== s && void 0 === this.finalKeyframe && (this.finalKeyframe = s), this.removedTransforms?.length && this.removedTransforms.forEach(([e, i]) => {
            t.getValue(e).set(i)
          }), this.resolveNoneKeyframes()
        }
      }
      let t0 = t => !!(t && t.getVelocity);

      function t1() {
        n = void 0
      }
      let t2 = {
        now: () => (void 0 === n && t2.set(tp.isProcessing || ta.useManualTiming ? tp.timestamp : performance.now()), n),
        set: t => {
          n = t, queueMicrotask(t1)
        }
      };

      function t5(t, e) {
        -1 === t.indexOf(e) && t.push(e)
      }

      function t4(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1)
      }
      class t3 {
        constructor() {
          this.subscriptions = []
        }
        add(t) {
          return t5(this.subscriptions, t), () => t4(this.subscriptions, t)
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i)
              }
          }
        }
        getSize() {
          return this.subscriptions.length
        }
        clear() {
          this.subscriptions.length = 0
        }
      }
      let t9 = t => !isNaN(parseFloat(t)),
        t7 = {
          current: void 0
        };
      class t8 {
        constructor(t, e = {}) {
          this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = t => {
            let e = t2.now();
            if (this.updatedAt !== e && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
              for (let t of this.dependents) t.dirty()
          }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
        }
        setCurrent(t) {
          this.current = t, this.updatedAt = t2.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = t9(this.current))
        }
        setPrevFrameValue(t = this.current) {
          this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
        }
        onChange(t) {
          return this.on("change", t)
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new t3);
          let i = this.events[t].add(e);
          return "change" === t ? () => {
            i(), td.read(() => {
              this.events.change.getSize() || this.stop()
            })
          } : i
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear()
        }
        attach(t, e) {
          this.passiveEffect = t, this.stopPassiveEffect = e
        }
        set(t) {
          this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
        }
        setWithVelocity(t, e, i) {
          this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - i
        }
        jump(t, e = !0) {
          this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
        dirty() {
          this.events.change?.notify(this.current)
        }
        addDependent(t) {
          this.dependents || (this.dependents = new Set), this.dependents.add(t)
        }
        removeDependent(t) {
          this.dependents && this.dependents.delete(t)
        }
        get() {
          return t7.current && t7.current.push(this), this.current
        }
        getPrevious() {
          return this.prev
        }
        getVelocity() {
          var t;
          let e = t2.now();
          if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30) return 0;
          let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return t = parseFloat(this.current) - parseFloat(this.prevFrameValue), i ? 1e3 / i * t : 0
        }
        start(t) {
          return this.stop(), new Promise(e => {
            this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
          }).then(() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
          })
        }
        stop() {
          this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
        }
        isAnimating() {
          return !!this.animation
        }
        clearAnimation() {
          delete this.animation
        }
        destroy() {
          this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
      }

      function t6(t, e) {
        return new t8(t, e)
      }
      let et = [...G, tD, tN],
        ee = t => et.find(K(t)),
        {
          schedule: ei,
          cancel: en
        } = th(queueMicrotask, !1),
        er = {
          animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"]
        },
        es = {};
      for (let t in er) es[t] = {
        isEnabled: e => er[t].some(t => !!e[t])
      };
      let eo = () => ({
          translate: 0,
          scale: 1,
          origin: 0,
          originPoint: 0
        }),
        ea = () => ({
          x: eo(),
          y: eo()
        }),
        el = () => ({
          min: 0,
          max: 0
        }),
        eu = () => ({
          x: el(),
          y: el()
        });
      var eh = i(2124);
      let ed = {
          current: null
        },
        ec = {
          current: !1
        },
        ep = new WeakMap;

      function ef(t) {
        return null !== t && "object" == typeof t && "function" == typeof t.start
      }

      function em(t) {
        return "string" == typeof t || Array.isArray(t)
      }
      let eg = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
        ey = ["initial", ...eg];

      function ev(t) {
        return ef(t.animate) || ey.some(e => em(t[e]))
      }

      function ex(t) {
        return !!(ev(t) || t.variants)
      }

      function ew(t) {
        let e = [{}, {}];
        return t?.values.forEach((t, i) => {
          e[0][i] = t.get(), e[1][i] = t.getVelocity()
        }), e
      }

      function eb(t, e, i, n) {
        if ("function" == typeof e) {
          let [r, s] = ew(n);
          e = e(void 0 !== i ? i : t.custom, r, s)
        }
        if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
          let [r, s] = ew(n);
          e = e(void 0 !== i ? i : t.custom, r, s)
        }
        return e
      }
      let eS = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
      class eT {
        scrapeMotionValuesFromProps(t, e, i) {
          return {}
        }
        constructor({
          parent: t,
          props: e,
          presenceContext: i,
          reducedMotionConfig: n,
          blockInitialAnimation: r,
          visualState: s
        }, o = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = tb, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.renderScheduledAt = 0, this.scheduleRender = () => {
            let t = t2.now();
            this.renderScheduledAt < t && (this.renderScheduledAt = t, td.render(this.render, !1, !0))
          };
          let {
            latestValues: a,
            renderState: l
          } = s;
          this.latestValues = a, this.baseTarget = {
            ...a
          }, this.initialValues = e.initial ? {
            ...a
          } : {}, this.renderState = l, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = o, this.blockInitialAnimation = !!r, this.isControllingVariants = ev(e), this.isVariantNode = ex(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
          let {
            willChange: u,
            ...h
          } = this.scrapeMotionValuesFromProps(e, {}, this);
          for (let t in h) {
            let e = h[t];
            void 0 !== a[t] && t0(e) && e.set(a[t])
          }
        }
        mount(t) {
          this.current = t, ep.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), ec.current || function() {
            if (ec.current = !0, eh.j) {
              if (window.matchMedia) {
                let t = window.matchMedia("(prefers-reduced-motion)"),
                  e = () => ed.current = t.matches;
                t.addEventListener("change", e), e()
              } else ed.current = !1
            }
          }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || ed.current), this.parent?.addChild(this), this.update(this.props, this.presenceContext)
        }
        unmount() {
          for (let t in this.projection && this.projection.unmount(), tc(this.notifyUpdate), tc(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this), this.events) this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), e.isMounted = !1)
          }
          this.current = null
        }
        addChild(t) {
          this.children.add(t), this.enteringChildren ?? (this.enteringChildren = new Set), this.enteringChildren.add(t)
        }
        removeChild(t) {
          this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t)
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let n = a.has(t);
          n && this.onBindTransform && this.onBindTransform();
          let r = e.on("change", e => {
            this.latestValues[t] = e, this.props.onUpdate && td.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
          });
          window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
            r(), i && i(), e.owner && e.stop()
          })
        }
        sortNodePosition(t) {
          return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
        }
        updateFeatures() {
          let t = "animation";
          for (t in es) {
            let e = es[t];
            if (!e) continue;
            let {
              isEnabled: i,
              Feature: n
            } = e;
            if (!this.features[t] && n && i(this.props) && (this.features[t] = new n(this)), this.features[t]) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props)
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : eu()
        }
        getStaticValue(t) {
          return this.latestValues[t]
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
          for (let e = 0; e < eS.length; e++) {
            let i = eS[e];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n))
          }
          this.prevMotionValues = function(t, e, i) {
            for (let n in e) {
              let r = e[n],
                s = i[n];
              if (t0(r)) t.addValue(n, r);
              else if (t0(s)) t.addValue(n, t6(r, {
                owner: t
              }));
              else if (s !== r) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r)
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, t6(void 0 !== e ? e : r, {
                    owner: t
                  }))
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e
          }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
        }
        getProps() {
          return this.props
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0
        }
        getDefaultTransition() {
          return this.props.transition
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint
        }
        getClosestVariantNode() {
          return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i && (i && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
        }
        hasValue(t) {
          return this.values.has(t)
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t]) return this.props.values[t];
          let i = this.values.get(t);
          return void 0 === i && void 0 !== e && (i = t6(null === e ? void 0 : e, {
            owner: this
          }), this.addValue(t, i)), i
        }
        readValue(t, e) {
          let i = void 0 === this.latestValues[t] && this.current ? this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
          return null != i && ("string" == typeof i && (tt(i) || tS(i)) ? i = parseFloat(i) : !ee(i) && tN.test(e) && (i = tZ(t, e)), this.setBaseTarget(t, t0(i) ? i.get() : i)), t0(i) ? i.get() : i
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e
        }
        getBaseTarget(t) {
          let e;
          let {
            initial: i
          } = this.props;
          if ("string" == typeof i || "object" == typeof i) {
            let n = eb(this.props, i, this.presenceContext?.custom);
            n && (e = n[t])
          }
          if (i && void 0 !== e) return e;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || t0(n) ? void 0 !== this.initialValues[t] && void 0 === e ? void 0 : this.baseTarget[t] : n
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new t3), this.events[t].add(e)
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e)
        }
        scheduleRenderMicrotask() {
          ei.render(this.render)
        }
      }
      class eP extends eT {
        constructor() {
          super(...arguments), this.KeyframeResolver = tQ
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0
        }
        removeValueFromRenderState(t, {
          vars: e,
          style: i
        }) {
          delete e[t], delete i[t]
        }
        handleChildMotionValue() {
          this.childSubscription && (this.childSubscription(), delete this.childSubscription);
          let {
            children: t
          } = this.props;
          t0(t) && (this.childSubscription = t.on("change", t => {
            this.current && (this.current.textContent = `${t}`)
          }))
        }
      }
      let eA = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
        eC = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        eM = o.length;

      function eE(t, e, i) {
        let {
          style: n,
          vars: r,
          transformOrigin: s
        } = t, l = !1, u = !1;
        for (let t in e) {
          let i = e[t];
          if (a.has(t)) {
            l = !0;
            continue
          }
          if (w(t)) {
            r[t] = i;
            continue
          } {
            let e = eA(i, tq[t]);
            t.startsWith("origin") ? (u = !0, s[t] = e) : n[t] = e
          }
        }
        if (!e.transform && (l || i ? n.transform = function(t, e, i) {
            let n = "",
              r = !0;
            for (let s = 0; s < eM; s++) {
              let a = o[s],
                l = t[a];
              if (void 0 === l) continue;
              let u = !0;
              if (!(u = "number" == typeof l ? l === (a.startsWith("scale") ? 1 : 0) : 0 === parseFloat(l)) || i) {
                let t = eA(l, tq[a]);
                if (!u) {
                  r = !1;
                  let e = eC[a] || a;
                  n += `${e}(${t}) `
                }
                i && (e[a] = t)
              }
            }
            return n = n.trim(), i ? n = i(e, r ? "" : n) : r && (n = "none"), n
          }(e, t.transform, i) : n.transform && (n.transform = "none")), u) {
          let {
            originX: t = "50%",
            originY: e = "50%",
            originZ: i = 0
          } = s;
          n.transformOrigin = `${t} ${e} ${i}`
        }
      }

      function ek(t, {
        style: e,
        vars: i
      }, n, r) {
        let s;
        let o = t.style;
        for (s in e) o[s] = e[s];
        for (s in r?.applyProjectionStyles(o, n), i) o.setProperty(s, i[s])
      }
      let eR = {};

      function ej(t, {
        layout: e,
        layoutId: i
      }) {
        return a.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!eR[t] || "opacity" === t)
      }

      function eV(t, e, i) {
        let {
          style: n
        } = t, r = {};
        for (let s in n)(t0(n[s]) || e.style && t0(e.style[s]) || ej(s, t) || i?.getValue(s)?.liveStyle !== void 0) && (r[s] = n[s]);
        return r
      }
      class eD extends eP {
        constructor() {
          super(...arguments), this.type = "html", this.renderInstance = ek
        }
        readValueFromInstance(t, e) {
          if (a.has(e)) return this.projection?.isProjecting ? m(e) : y(t, e);
          {
            let i = window.getComputedStyle(t),
              n = (w(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n
          }
        }
        measureInstanceViewportBox(t, {
          transformPagePoint: e
        }) {
          return L(t, e)
        }
        build(t, e, i) {
          eE(t, e, i.transformTemplate)
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return eV(t, e, i)
        }
      }
      let e_ = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        eF = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        eL = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function eO(t, {
        attrX: e,
        attrY: i,
        attrScale: n,
        pathLength: r,
        pathSpacing: s = 1,
        pathOffset: o = 0,
        ...a
      }, l, u, h) {
        if (eE(t, a, u), l) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return
        }
        t.attrs = t.style, t.style = {};
        let {
          attrs: d,
          style: c
        } = t;
        d.transform && (c.transform = d.transform, delete d.transform), (c.transform || d.transformOrigin) && (c.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), c.transform && (c.transformBox = h?.transformBox ?? "fill-box", delete d.transformBox), void 0 !== e && (d.x = e), void 0 !== i && (d.y = i), void 0 !== n && (d.scale = n), void 0 !== r && function(t, e, i = 1, n = 0, r = !0) {
          t.pathLength = 1;
          let s = r ? eF : eL;
          t[s.offset] = H.transform(-n);
          let o = H.transform(e),
            a = H.transform(i);
          t[s.array] = `${o} ${a}`
        }(d, r, s, o, !1)
      }
      let eI = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]),
        eB = t => "string" == typeof t && "svg" === t.toLowerCase();

      function ez(t, e, i) {
        let n = eV(t, e, i);
        for (let i in t)(t0(t[i]) || t0(e[i])) && (n[-1 !== o.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
        return n
      }
      class eU extends eP {
        constructor() {
          super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = eu
        }
        getBaseTargetFromProps(t, e) {
          return t[e]
        }
        readValueFromInstance(t, e) {
          if (a.has(e)) {
            let t = tG(e);
            return t && t.default || 0
          }
          return e = eI.has(e) ? e : e_(e), t.getAttribute(e)
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return ez(t, e, i)
        }
        build(t, e, i) {
          eO(t, e, this.isSVGTag, i.transformTemplate, i.style)
        }
        renderInstance(t, e, i, n) {
          ! function(t, e, i, n) {
            for (let i in ek(t, e, void 0, n), e.attrs) t.setAttribute(eI.has(i) ? i : e_(i), e.attrs[i])
          }(t, e, 0, n)
        }
        mount(t) {
          this.isSVGTag = eB(t.tagName), super.mount(t)
        }
      }
      let eN = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function eW(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (eN.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1
      }
      var e$ = i(6102),
        eH = i(2177);
      let eY = (0, s.createContext)({
        strict: !1
      });
      var eX = i(5190);
      let eq = (0, s.createContext)({});

      function eK(t) {
        return Array.isArray(t) ? t.join(" ") : t
      }
      let eG = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
      });

      function eZ(t, e, i) {
        for (let n in e) t0(e[n]) || ej(n, i) || (t[n] = e[n])
      }
      let eJ = () => ({
          ...eG(),
          attrs: {}
        }),
        eQ = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

      function e0(t) {
        return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || eQ.has(t)
      }
      let e1 = t => !e0(t);
      try {
        r = require("@emotion/is-prop-valid").default, "function" == typeof r && (e1 = t => t.startsWith("on") ? !e0(t) : r(t))
      } catch {}
      var e2 = i(5940),
        e5 = i(4893);

      function e4(t) {
        return t0(t) ? t.get() : t
      }
      let e3 = t => (e, i) => {
          let n = (0, s.useContext)(eq),
            r = (0, s.useContext)(e2.O),
            o = () => (function(t, e, i, n) {
              let {
                scrapeMotionValuesFromProps: r,
                createRenderState: s
              } = t;
              return {
                latestValues: function(t, e, i, n) {
                  let r = {},
                    s = n(t, {});
                  for (let t in s) r[t] = e4(s[t]);
                  let {
                    initial: o,
                    animate: a
                  } = t, l = ev(t), u = ex(t);
                  e && u && !l && !1 !== t.inherit && (void 0 === o && (o = e.initial), void 0 === a && (a = e.animate));
                  let h = !!i && !1 === i.initial,
                    d = (h = h || !1 === o) ? a : o;
                  if (d && "boolean" != typeof d && !ef(d)) {
                    let e = Array.isArray(d) ? d : [d];
                    for (let i = 0; i < e.length; i++) {
                      let n = eb(t, e[i]);
                      if (n) {
                        let {
                          transitionEnd: t,
                          transition: e,
                          ...i
                        } = n;
                        for (let t in i) {
                          let e = i[t];
                          if (Array.isArray(e)) {
                            let t = h ? e.length - 1 : 0;
                            e = e[t]
                          }
                          null !== e && (r[t] = e)
                        }
                        for (let e in t) r[e] = t[e]
                      }
                    }
                  }
                  return r
                }(e, i, n, r),
                renderState: s()
              }
            })(t, e, n, r);
          return i ? o() : (0, e5.h)(o)
        },
        e9 = e3({
          scrapeMotionValuesFromProps: eV,
          createRenderState: eG
        }),
        e7 = e3({
          scrapeMotionValuesFromProps: ez,
          createRenderState: eJ
        }),
        e8 = Symbol.for("motionComponentSymbol");

      function e6(t) {
        return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
      }
      let it = "data-" + e_("framerAppearId"),
        ie = (0, s.createContext)({});
      var ii = i(1065);

      function ir(t) {
        var e, i;
        let {
          forwardMotionProps: n = !1
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, o = arguments.length > 3 ? arguments[3] : void 0;
        r && function(t) {
          for (let e in t) es[e] = {
            ...es[e],
            ...t[e]
          }
        }(r);
        let a = eW(t) ? e7 : e9;

        function l(e, i) {
          var r;
          let l;
          let u = {
              ...(0, s.useContext)(eX._),
              ...e,
              layoutId: function(t) {
                let {
                  layoutId: e
                } = t, i = (0, s.useContext)(eH.p).id;
                return i && void 0 !== e ? i + "-" + e : e
              }(e)
            },
            {
              isStatic: h
            } = u,
            d = function(t) {
              let {
                initial: e,
                animate: i
              } = function(t, e) {
                if (ev(t)) {
                  let {
                    initial: e,
                    animate: i
                  } = t;
                  return {
                    initial: !1 === e || em(e) ? e : void 0,
                    animate: em(i) ? i : void 0
                  }
                }
                return !1 !== t.inherit ? e : {}
              }(t, (0, s.useContext)(eq));
              return (0, s.useMemo)(() => ({
                initial: e,
                animate: i
              }), [eK(e), eK(i)])
            }(e),
            c = a(e, h);
          if (!h && eh.j) {
            (0, s.useContext)(eY).strict;
            let e = function(t) {
              let {
                drag: e,
                layout: i
              } = es;
              if (!e && !i) return {};
              let n = {
                ...e,
                ...i
              };
              return {
                MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == i ? void 0 : i.isEnabled(t)) ? n.MeasureLayout : void 0,
                ProjectionNode: n.ProjectionNode
              }
            }(u);
            l = e.MeasureLayout, d.visualElement = function(t, e, i, n, r) {
              var o, a, l, u;
              let {
                visualElement: h
              } = (0, s.useContext)(eq), d = (0, s.useContext)(eY), c = (0, s.useContext)(e2.O), p = (0, s.useContext)(eX._).reducedMotion, f = (0, s.useRef)(null);
              n = n || d.renderer, !f.current && n && (f.current = n(t, {
                visualState: e,
                parent: h,
                props: i,
                presenceContext: c,
                blockInitialAnimation: !!c && !1 === c.initial,
                reducedMotionConfig: p
              }));
              let m = f.current,
                g = (0, s.useContext)(ie);
              m && !m.projection && r && ("html" === m.type || "svg" === m.type) && function(t, e, i, n) {
                let {
                  layoutId: r,
                  layout: s,
                  drag: o,
                  dragConstraints: a,
                  layoutScroll: l,
                  layoutRoot: u,
                  layoutCrossfade: h
                } = e;
                t.projection = new i(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                  if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                }(t.parent)), t.projection.setOptions({
                  layoutId: r,
                  layout: s,
                  alwaysMeasureLayout: !!o || a && e6(a),
                  visualElement: t,
                  animationType: "string" == typeof s ? s : "both",
                  initialPromotionConfig: n,
                  crossfade: h,
                  layoutScroll: l,
                  layoutRoot: u
                })
              }(f.current, i, r, g);
              let y = (0, s.useRef)(!1);
              (0, s.useInsertionEffect)(() => {
                m && y.current && m.update(i, c)
              });
              let v = i[it],
                x = (0, s.useRef)(!!v && !(null === (o = (a = window).MotionHandoffIsComplete) || void 0 === o ? void 0 : o.call(a, v)) && (null === (l = (u = window).MotionHasOptimisedAnimation) || void 0 === l ? void 0 : l.call(u, v)));
              return (0, ii.L)(() => {
                m && (y.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), x.current && m.animationState && m.animationState.animateChanges())
              }), (0, s.useEffect)(() => {
                m && (!x.current && m.animationState && m.animationState.animateChanges(), x.current && (queueMicrotask(() => {
                  var t, e;
                  null === (t = (e = window).MotionHandoffMarkAsComplete) || void 0 === t || t.call(e, v)
                }), x.current = !1), m.enteringChildren = void 0)
              }), m
            }(t, c, u, o, e.ProjectionNode)
          }
          return (0, e$.jsxs)(eq.Provider, {
            value: d,
            children: [l && d.visualElement ? (0, e$.jsx)(l, {
              visualElement: d.visualElement,
              ...u
            }) : null, function(t, e, i, n, r) {
              let {
                latestValues: o
              } = n, a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5], l = (eW(t) ? function(t, e, i, n) {
                let r = (0, s.useMemo)(() => {
                  let i = eJ();
                  return eO(i, e, eB(n), t.transformTemplate, t.style), {
                    ...i.attrs,
                    style: {
                      ...i.style
                    }
                  }
                }, [e]);
                if (t.style) {
                  let e = {};
                  eZ(e, t.style, t), r.style = {
                    ...e,
                    ...r.style
                  }
                }
                return r
              } : function(t, e) {
                let i = {},
                  n = function(t, e) {
                    let i = t.style || {},
                      n = {};
                    return eZ(n, i, t), Object.assign(n, function(t, e) {
                      let {
                        transformTemplate: i
                      } = t;
                      return (0, s.useMemo)(() => {
                        let t = eG();
                        return eE(t, e, i), Object.assign({}, t.vars, t.style)
                      }, [e])
                    }(t, e)), n
                  }(t, e);
                return t.drag && !1 !== t.dragListener && (i.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = !0 === t.drag ? "none" : "pan-".concat("x" === t.drag ? "y" : "x")), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (i.tabIndex = 0), i.style = n, i
              })(e, o, r, t), u = function(t, e, i) {
                let n = {};
                for (let r in t)("values" !== r || "object" != typeof t.values) && (e1(r) || !0 === i && e0(r) || !e && !e0(r) || t.draggable && r.startsWith("onDrag")) && (n[r] = t[r]);
                return n
              }(e, "string" == typeof t, a), h = t !== s.Fragment ? {
                ...u,
                ...l,
                ref: i
              } : {}, {
                children: d
              } = e, c = (0, s.useMemo)(() => t0(d) ? d.get() : d, [d]);
              return (0, s.createElement)(t, {
                ...h,
                children: c
              })
            }(t, e, (r = d.visualElement, (0, s.useCallback)(t => {
              t && c.onMount && c.onMount(t), r && (t ? r.mount(t) : r.unmount()), i && ("function" == typeof i ? i(t) : e6(i) && (i.current = t))
            }, [r])), c, h, n)]
          })
        }
        l.displayName = "motion.".concat("string" == typeof t ? t : "create(".concat(null !== (i = null !== (e = t.displayName) && void 0 !== e ? e : t.name) && void 0 !== i ? i : "", ")"));
        let u = (0, s.forwardRef)(l);
        return u[e8] = t, u
      }

      function is(t, e, i) {
        let n = t.getProps();
        return eb(n, e, void 0 !== i ? i : n.custom, t)
      }

      function io(t, e) {
        return t?.[e] ?? t?.default ?? t
      }
      let ia = t => Array.isArray(t);

      function il(t, e) {
        let i = t.getValue("willChange");
        if (t0(i) && i.add) return i.add(e);
        if (!i && ta.WillChange) {
          let i = new ta.WillChange("auto");
          t.addValue("willChange", i), i.add(e)
        }
      }

      function iu(t) {
        t.duration = 0, t.type
      }
      let ih = (t, e) => i => e(t(i)),
        id = (...t) => t.reduce(ih),
        ic = t => 1e3 * t,
        ip = t => t / 1e3,
        im = {
          layout: 0,
          mainThread: 0,
          waapi: 0
        };

      function ig(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
      }

      function iy(t, e) {
        return i => i > 0 ? e : t
      }
      let iv = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r)
        },
        ix = [tj, tR, tV],
        iw = t => ix.find(e => e.test(t));

      function ib(t) {
        let e = iw(t);
        if (J(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e) return !1;
        let i = e.parse(t);
        return e === tV && (i = function({
          hue: t,
          saturation: e,
          lightness: i,
          alpha: n
        }) {
          t /= 360, i /= 100;
          let r = 0,
            s = 0,
            o = 0;
          if (e /= 100) {
            let n = i < .5 ? i * (1 + e) : i + e - i * e,
              a = 2 * i - n;
            r = ig(a, n, t + 1 / 3), s = ig(a, n, t), o = ig(a, n, t - 1 / 3)
          } else r = s = o = i;
          return {
            red: Math.round(255 * r),
            green: Math.round(255 * s),
            blue: Math.round(255 * o),
            alpha: n
          }
        }(i)), i
      }
      let iS = (t, e) => {
          let i = ib(t),
            n = ib(e);
          if (!i || !n) return iy(t, e);
          let r = {
            ...i
          };
          return t => (r.red = iv(i.red, n.red, t), r.green = iv(i.green, n.green, t), r.blue = iv(i.blue, n.blue, t), r.alpha = A(i.alpha, n.alpha, t), tR.transform(r))
        },
        iT = new Set(["none", "hidden"]);

      function iP(t, e) {
        return i => A(t, e, i)
      }

      function iA(t) {
        return "number" == typeof t ? iP : "string" == typeof t ? S(t) ? iy : tD.test(t) ? iS : iE : Array.isArray(t) ? iC : "object" == typeof t ? tD.test(t) ? iS : iM : iy
      }

      function iC(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => iA(t)(t, e[i]));
        return t => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i
        }
      }

      function iM(t, e) {
        let i = {
            ...t,
            ...e
          },
          n = {};
        for (let r in i) void 0 !== t[r] && void 0 !== e[r] && (n[r] = iA(t[r])(t[r], e[r]));
        return t => {
          for (let e in n) i[e] = n[e](t);
          return i
        }
      }
      let iE = (t, e) => {
        let i = tN.createTransformer(e),
          n = tI(t),
          r = tI(e);
        return n.indexes.var.length === r.indexes.var.length && n.indexes.color.length === r.indexes.color.length && n.indexes.number.length >= r.indexes.number.length ? iT.has(t) && !r.values.length || iT.has(e) && !n.values.length ? iT.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t : id(iC(function(t, e) {
          let i = [],
            n = {
              color: 0,
              var: 0,
              number: 0
            };
          for (let r = 0; r < e.values.length; r++) {
            let s = e.types[r],
              o = t.indexes[s][n[s]],
              a = t.values[o] ?? 0;
            i[r] = a, n[s]++
          }
          return i
        }(n, r), r.values), i) : (J(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), iy(t, e))
      };

      function ik(t, e, i) {
        return "number" == typeof t && "number" == typeof e && "number" == typeof i ? A(t, e, i) : iA(t)(t, e)
      }
      let iR = t => {
          let e = ({
            timestamp: e
          }) => t(e);
          return {
            start: (t = !0) => td.update(e, t),
            stop: () => tc(e),
            now: () => tp.isProcessing ? tp.timestamp : t2.now()
          }
        },
        ij = (t, e, i = 10) => {
          let n = "",
            r = Math.max(Math.round(e / i), 2);
          for (let e = 0; e < r; e++) n += Math.round(1e4 * t(e / (r - 1))) / 1e4 + ", ";
          return `linear(${n.substring(0,n.length-2)})`
        };

      function iV(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < 2e4;) e += 50, i = t.next(e);
        return e >= 2e4 ? 1 / 0 : e
      }

      function iD(t, e, i) {
        var n, r;
        let s = Math.max(e - 5, 0);
        return n = i - t(s), (r = e - s) ? 1e3 / r * n : 0
      }
      let i_ = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: .3,
        visualDuration: .3,
        restSpeed: {
          granular: .01,
          default: 2
        },
        restDelta: {
          granular: .005,
          default: .5
        },
        minDuration: .01,
        maxDuration: 10,
        minDamping: .05,
        maxDamping: 1
      };

      function iF(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      let iL = ["duration", "bounce"],
        iO = ["stiffness", "damping", "mass"];

      function iI(t, e) {
        return e.some(e => void 0 !== t[e])
      }

      function iB(t = i_.visualDuration, e = i_.bounce) {
        let i;
        let n = "object" != typeof t ? {
            visualDuration: t,
            keyframes: [0, 1],
            bounce: e
          } : t,
          {
            restSpeed: r,
            restDelta: s
          } = n,
          o = n.keyframes[0],
          a = n.keyframes[n.keyframes.length - 1],
          l = {
            done: !1,
            value: o
          },
          {
            stiffness: u,
            damping: h,
            mass: d,
            duration: c,
            velocity: p,
            isResolvedFromDuration: f
          } = function(t) {
            let e = {
              velocity: i_.velocity,
              stiffness: i_.stiffness,
              damping: i_.damping,
              mass: i_.mass,
              isResolvedFromDuration: !1,
              ...t
            };
            if (!iI(t, iO) && iI(t, iL)) {
              if (t.visualDuration) {
                let i = 2 * Math.PI / (1.2 * t.visualDuration),
                  n = i * i,
                  r = 2 * I(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
                e = {
                  ...e,
                  mass: i_.mass,
                  stiffness: n,
                  damping: r
                }
              } else {
                let i = function({
                  duration: t = i_.duration,
                  bounce: e = i_.bounce,
                  velocity: i = i_.velocity,
                  mass: n = i_.mass
                }) {
                  let r, s;
                  J(t <= ic(i_.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                  let o = 1 - e;
                  o = I(i_.minDamping, i_.maxDamping, o), t = I(i_.minDuration, i_.maxDuration, ip(t)), o < 1 ? (r = e => {
                    let n = e * o,
                      r = n * t;
                    return .001 - (n - i) / iF(e, o) * Math.exp(-r)
                  }, s = e => {
                    let n = e * o * t,
                      s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                      a = iF(Math.pow(e, 2), o);
                    return (n * i + i - s) * Math.exp(-n) * (-r(e) + .001 > 0 ? -1 : 1) / a
                  }) : (r = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1), s = e => t * t * (i - e) * Math.exp(-e * t));
                  let a = function(t, e, i) {
                    let n = i;
                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                    return n
                  }(r, s, 5 / t);
                  if (t = ic(t), isNaN(a)) return {
                    stiffness: i_.stiffness,
                    damping: i_.damping,
                    duration: t
                  };
                  {
                    let e = Math.pow(a, 2) * n;
                    return {
                      stiffness: e,
                      damping: 2 * o * Math.sqrt(n * e),
                      duration: t
                    }
                  }
                }(t);
                (e = {
                  ...e,
                  ...i,
                  mass: i_.mass
                }).isResolvedFromDuration = !0
              }
            }
            return e
          }({
            ...n,
            velocity: -ip(n.velocity || 0)
          }),
          m = p || 0,
          g = h / (2 * Math.sqrt(u * d)),
          y = a - o,
          v = ip(Math.sqrt(u / d)),
          x = 5 > Math.abs(y);
        if (r || (r = x ? i_.restSpeed.granular : i_.restSpeed.default), s || (s = x ? i_.restDelta.granular : i_.restDelta.default), g < 1) {
          let t = iF(v, g);
          i = e => a - Math.exp(-g * v * e) * ((m + g * v * y) / t * Math.sin(t * e) + y * Math.cos(t * e))
        } else if (1 === g) i = t => a - Math.exp(-v * t) * (y + (m + v * y) * t);
        else {
          let t = v * Math.sqrt(g * g - 1);
          i = e => {
            let i = Math.exp(-g * v * e),
              n = Math.min(t * e, 300);
            return a - i * ((m + g * v * y) * Math.sinh(n) + t * y * Math.cosh(n)) / t
          }
        }
        let w = {
          calculatedDuration: f && c || null,
          next: t => {
            let e = i(t);
            if (f) l.done = t >= c;
            else {
              let n = 0 === t ? m : 0;
              g < 1 && (n = 0 === t ? ic(m) : iD(i, t, e));
              let o = Math.abs(n) <= r,
                u = Math.abs(a - e) <= s;
              l.done = o && u
            }
            return l.value = l.done ? a : e, l
          },
          toString: () => {
            let t = Math.min(iV(w), 2e4),
              e = ij(e => w.next(t * e).value, t, 30);
            return t + "ms " + e
          },
          toTransition: () => {}
        };
        return w
      }

      function iz({
        keyframes: t,
        velocity: e = 0,
        power: i = .8,
        timeConstant: n = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = .5,
        restSpeed: h
      }) {
        let d, c;
        let p = t[0],
          f = {
            done: !1,
            value: p
          },
          m = t => void 0 !== a && t < a || void 0 !== l && t > l,
          g = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l,
          y = i * e,
          v = p + y,
          x = void 0 === o ? v : o(v);
        x !== v && (y = x - p);
        let w = t => -y * Math.exp(-t / n),
          b = t => x + w(t),
          S = t => {
            let e = w(t),
              i = b(t);
            f.done = Math.abs(e) <= u, f.value = f.done ? x : i
          },
          T = t => {
            m(f.value) && (d = t, c = iB({
              keyframes: [f.value, g(f.value)],
              velocity: iD(b, t, f.value),
              damping: r,
              stiffness: s,
              restDelta: u,
              restSpeed: h
            }))
          };
        return T(0), {
          calculatedDuration: null,
          next: t => {
            let e = !1;
            return (c || void 0 !== d || (e = !0, S(t), T(t)), void 0 !== d && t >= d) ? c.next(t - d) : (e || S(t), f)
          }
        }
      }
      iB.applyToOptions = t => {
        let e = function(t, e = 100, i) {
          let n = i({
              ...t,
              keyframes: [0, e]
            }),
            r = Math.min(iV(n), 2e4);
          return {
            type: "keyframes",
            ease: t => n.next(r * t).value / e,
            duration: ip(r)
          }
        }(t, 100, iB);
        return t.ease = e.ease, t.duration = ic(e.duration), t.type = "keyframes", t
      };
      let iU = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

      function iN(t, e, i, n) {
        if (t === e && i === n) return to;
        let r = e => (function(t, e, i, n, r) {
          let s, o;
          let a = 0;
          do(s = iU(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o; while (Math.abs(s) > 1e-7 && ++a < 12);
          return o
        })(e, 0, 1, t, i);
        return t => 0 === t || 1 === t ? t : iU(r(t), e, n)
      }
      let iW = iN(.42, 0, 1, 1),
        i$ = iN(0, 0, .58, 1),
        iH = iN(.42, 0, .58, 1),
        iY = t => Array.isArray(t) && "number" != typeof t[0],
        iX = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        iq = t => e => 1 - t(1 - e),
        iK = iN(.33, 1.53, .69, .99),
        iG = iq(iK),
        iZ = iX(iG),
        iJ = t => (t *= 2) < 1 ? .5 * iG(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
        iQ = t => 1 - Math.sin(Math.acos(t)),
        i0 = iq(iQ),
        i1 = iX(iQ),
        i2 = t => Array.isArray(t) && "number" == typeof t[0],
        i5 = {
          linear: to,
          easeIn: iW,
          easeInOut: iH,
          easeOut: i$,
          circIn: iQ,
          circInOut: i1,
          circOut: i0,
          backIn: iG,
          backInOut: iZ,
          backOut: iK,
          anticipate: iJ
        },
        i4 = t => "string" == typeof t,
        i3 = t => {
          if (i2(t)) {
            Q(4 === t.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
            let [e, i, n, r] = t;
            return iN(e, i, n, r)
          }
          return i4(t) ? (Q(void 0 !== i5[t], `Invalid easing type '${t}'`, "invalid-easing-type"), i5[t]) : t
        },
        i9 = (t, e, i) => {
          let n = e - t;
          return 0 === n ? 1 : (i - t) / n
        };

      function i7({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut"
      }) {
        let r = iY(n) ? n.map(i3) : i3(n),
          s = {
            done: !1,
            value: e[0]
          },
          o = function(t, e, {
            clamp: i = !0,
            ease: n,
            mixer: r
          } = {}) {
            let s = t.length;
            if (Q(s === e.length, "Both input and output ranges must be the same length", "range-length"), 1 === s) return () => e[0];
            if (2 === s && e[0] === e[1]) return () => e[1];
            let o = t[0] === t[1];
            t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
            let a = function(t, e, i) {
                let n = [],
                  r = i || ta.mix || ik,
                  s = t.length - 1;
                for (let i = 0; i < s; i++) {
                  let s = r(t[i], t[i + 1]);
                  e && (s = id(Array.isArray(e) ? e[i] || to : e, s)), n.push(s)
                }
                return n
              }(e, n, r),
              l = a.length,
              u = i => {
                if (o && i < t[0]) return e[0];
                let n = 0;
                if (l > 1)
                  for (; n < t.length - 2 && !(i < t[n + 1]); n++);
                let r = i9(t[n], t[n + 1], i);
                return a[n](r)
              };
            return i ? e => u(I(t[0], t[s - 1], e)) : u
          }((i && i.length === e.length ? i : function(t) {
            let e = [0];
            return function(t, e) {
              let i = t[t.length - 1];
              for (let n = 1; n <= e; n++) {
                let r = i9(0, e, n);
                t.push(A(i, 1, r))
              }
            }(e, t.length - 1), e
          }(e)).map(e => e * t), e, {
            ease: Array.isArray(r) ? r : e.map(() => r || iH).splice(0, e.length - 1)
          });
        return {
          calculatedDuration: t,
          next: e => (s.value = o(e), s.done = e >= t, s)
        }
      }
      let i8 = t => null !== t;

      function i6(t, {
        repeat: e,
        repeatType: i = "loop"
      }, n, r = 1) {
        let s = t.filter(i8),
          o = r < 0 || e && "loop" !== i && e % 2 == 1 ? 0 : s.length - 1;
        return o && void 0 !== n ? n : s[o]
      }
      let nt = {
        decay: iz,
        inertia: iz,
        tween: i7,
        keyframes: i7,
        spring: iB
      };

      function ne(t) {
        "string" == typeof t.type && (t.type = nt[t.type])
      }
      class ni {
        constructor() {
          this.updateFinished()
        }
        get finished() {
          return this._finished
        }
        updateFinished() {
          this._finished = new Promise(t => {
            this.resolve = t
          })
        }
        notifyFinished() {
          this.resolve()
        }
        then(t, e) {
          return this.finished.then(t, e)
        }
      }
      let nn = t => t / 100;
      class nr extends ni {
        constructor(t) {
          super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
            let {
              motionValue: t
            } = this.options;
            t && t.updatedAt !== t2.now() && this.tick(t2.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), this.options.onStop?.())
          }, im.mainThread++, this.options = t, this.initAnimation(), this.play(), !1 === t.autoplay && this.pause()
        }
        initAnimation() {
          let {
            options: t
          } = this;
          ne(t);
          let {
            type: e = i7,
            repeat: i = 0,
            repeatDelay: n = 0,
            repeatType: r,
            velocity: s = 0
          } = t, {
            keyframes: o
          } = t, a = e || i7;
          a !== i7 && "number" != typeof o[0] && (this.mixKeyframes = id(nn, ik(o[0], o[1])), o = [0, 100]);
          let l = a({
            ...t,
            keyframes: o
          });
          "mirror" === r && (this.mirroredGenerator = a({
            ...t,
            keyframes: [...o].reverse(),
            velocity: -s
          })), null === l.calculatedDuration && (l.calculatedDuration = iV(l));
          let {
            calculatedDuration: u
          } = l;
          this.calculatedDuration = u, this.resolvedDuration = u + n, this.totalDuration = this.resolvedDuration * (i + 1) - n, this.generator = l
        }
        updateTime(t) {
          let e = Math.round(t - this.startTime) * this.playbackSpeed;
          null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = e
        }
        tick(t, e = !1) {
          let {
            generator: i,
            totalDuration: n,
            mixKeyframes: r,
            mirroredGenerator: s,
            resolvedDuration: o,
            calculatedDuration: a
          } = this;
          if (null === this.startTime) return i.next(0);
          let {
            delay: l = 0,
            keyframes: u,
            repeat: h,
            repeatType: d,
            repeatDelay: c,
            type: p,
            onUpdate: f,
            finalKeyframe: m
          } = this.options;
          this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - n / this.speed, this.startTime)), e ? this.currentTime = t : this.updateTime(t);
          let g = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1),
            y = this.playbackSpeed >= 0 ? g < 0 : g > n;
          this.currentTime = Math.max(g, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = n);
          let v = this.currentTime,
            x = i;
          if (h) {
            let t = Math.min(this.currentTime, n) / o,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, h + 1)) % 2 && ("reverse" === d ? (i = 1 - i, c && (i -= c / o)) : "mirror" === d && (x = s)), v = I(0, 1, i) * o
          }
          let w = y ? {
            done: !1,
            value: u[0]
          } : x.next(v);
          r && (w.value = r(w.value));
          let {
            done: b
          } = w;
          y || null === a || (b = this.playbackSpeed >= 0 ? this.currentTime >= n : this.currentTime <= 0);
          let S = null === this.holdTime && ("finished" === this.state || "running" === this.state && b);
          return S && p !== iz && (w.value = i6(u, this.options, m, this.speed)), f && f(w.value), S && this.finish(), w
        }
        then(t, e) {
          return this.finished.then(t, e)
        }
        get duration() {
          return ip(this.calculatedDuration)
        }
        get time() {
          return ip(this.currentTime)
        }
        set time(t) {
          t = ic(t), this.currentTime = t, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver?.start(!1)
        }
        get speed() {
          return this.playbackSpeed
        }
        set speed(t) {
          this.updateTime(t2.now());
          let e = this.playbackSpeed !== t;
          this.playbackSpeed = t, e && (this.time = ip(this.currentTime))
        }
        play() {
          if (this.isStopped) return;
          let {
            driver: t = iR,
            startTime: e
          } = this.options;
          this.driver || (this.driver = t(t => this.tick(t))), this.options.onPlay?.();
          let i = this.driver.now();
          "finished" === this.state ? (this.updateFinished(), this.startTime = i) : null !== this.holdTime ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = e ?? i), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
        }
        pause() {
          this.state = "paused", this.updateTime(t2.now()), this.holdTime = this.currentTime
        }
        complete() {
          "running" !== this.state && this.play(), this.state = "finished", this.holdTime = null
        }
        finish() {
          this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.()
        }
        cancel() {
          this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.()
        }
        teardown() {
          this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, im.mainThread--
        }
        stopDriver() {
          this.driver && (this.driver.stop(), this.driver = void 0)
        }
        sample(t) {
          return this.startTime = 0, this.tick(t, !0)
        }
        attachTimeline(t) {
          return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), t.observe(this)
        }
      }
      let ns = t => t.startsWith("--");

      function no(t) {
        let e;
        return () => (void 0 === e && (e = t()), e)
      }
      let na = no(() => void 0 !== window.ScrollTimeline),
        nl = {},
        nu = function(t, e) {
          let i = no(t);
          return () => nl[e] ?? i()
        }(() => {
          try {
            document.createElement("div").animate({
              opacity: 0
            }, {
              easing: "linear(0, 1)"
            })
          } catch (t) {
            return !1
          }
          return !0
        }, "linearEasing"),
        nh = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        nd = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: nh([0, .65, .55, 1]),
          circOut: nh([.55, 0, 1, .45]),
          backIn: nh([.31, .01, .66, -.59]),
          backOut: nh([.33, 1.53, .69, .99])
        };

      function nc(t) {
        return "function" == typeof t && "applyToOptions" in t
      }
      class np extends ni {
        constructor(t) {
          if (super(), this.finishedTime = null, this.isStopped = !1, !t) return;
          let {
            element: e,
            name: i,
            keyframes: n,
            pseudoElement: r,
            allowFlatten: s = !1,
            finalKeyframe: o,
            onComplete: a
          } = t;
          this.isPseudoElement = !!r, this.allowFlatten = s, this.options = t, Q("string" != typeof t.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
          let l = function({
            type: t,
            ...e
          }) {
            return nc(t) && nu() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e)
          }(t);
          this.animation = function(t, e, i, {
            delay: n = 0,
            duration: r = 300,
            repeat: s = 0,
            repeatType: o = "loop",
            ease: a = "easeOut",
            times: l
          } = {}, u) {
            let h = {
              [e]: i
            };
            l && (h.offset = l);
            let d = function t(e, i) {
              if (e) return "function" == typeof e ? nu() ? ij(e, i) : "ease-out" : i2(e) ? nh(e) : Array.isArray(e) ? e.map(e => t(e, i) || nd.easeOut) : nd[e]
            }(a, r);
            Array.isArray(d) && (h.easing = d), tu.value && im.waapi++;
            let c = {
              delay: n,
              duration: r,
              easing: Array.isArray(d) ? "linear" : d,
              fill: "both",
              iterations: s + 1,
              direction: "reverse" === o ? "alternate" : "normal"
            };
            u && (c.pseudoElement = u);
            let p = t.animate(h, c);
            return tu.value && p.finished.finally(() => {
              im.waapi--
            }), p
          }(e, i, n, l, r), !1 === l.autoplay && this.animation.pause(), this.animation.onfinish = () => {
            if (this.finishedTime = this.time, !r) {
              let t = i6(n, this.options, o, this.speed);
              this.updateMotionValue ? this.updateMotionValue(t) : ns(i) ? e.style.setProperty(i, t) : e.style[i] = t, this.animation.cancel()
            }
            a?.(), this.notifyFinished()
          }
        }
        play() {
          this.isStopped || (this.animation.play(), "finished" === this.state && this.updateFinished())
        }
        pause() {
          this.animation.pause()
        }
        complete() {
          this.animation.finish?.()
        }
        cancel() {
          try {
            this.animation.cancel()
          } catch (t) {}
        }
        stop() {
          if (this.isStopped) return;
          this.isStopped = !0;
          let {
            state: t
          } = this;
          "idle" !== t && "finished" !== t && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
        }
        commitStyles() {
          this.isPseudoElement || this.animation.commitStyles?.()
        }
        get duration() {
          return ip(Number(this.animation.effect?.getComputedTiming?.().duration || 0))
        }
        get time() {
          return ip(Number(this.animation.currentTime) || 0)
        }
        set time(t) {
          this.finishedTime = null, this.animation.currentTime = ic(t)
        }
        get speed() {
          return this.animation.playbackRate
        }
        set speed(t) {
          t < 0 && (this.finishedTime = null), this.animation.playbackRate = t
        }
        get state() {
          return null !== this.finishedTime ? "finished" : this.animation.playState
        }
        get startTime() {
          return Number(this.animation.startTime)
        }
        set startTime(t) {
          this.animation.startTime = t
        }
        attachTimeline({
          timeline: t,
          observe: e
        }) {
          return (this.allowFlatten && this.animation.effect?.updateTiming({
            easing: "linear"
          }), this.animation.onfinish = null, t && na()) ? (this.animation.timeline = t, to) : e(this)
        }
      }
      let nf = {
        anticipate: iJ,
        backInOut: iZ,
        circInOut: i1
      };
      class nm extends np {
        constructor(t) {
          "string" == typeof t.ease && t.ease in nf && (t.ease = nf[t.ease]), ne(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t
        }
        updateMotionValue(t) {
          let {
            motionValue: e,
            onUpdate: i,
            onComplete: n,
            element: r,
            ...s
          } = this.options;
          if (!e) return;
          if (void 0 !== t) {
            e.set(t);
            return
          }
          let o = new nr({
              ...s,
              autoplay: !1
            }),
            a = ic(this.finishedTime ?? this.time);
          e.setWithVelocity(o.sample(a - 10).value, o.sample(a).value, 10), o.stop()
        }
      }
      let ng = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (tN.test(t) || "0" === t) && !t.startsWith("url(")),
        ny = new Set(["opacity", "clipPath", "filter", "transform"]),
        nv = no(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
      class nx extends ni {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: s = "loop",
          keyframes: o,
          name: a,
          motionValue: l,
          element: u,
          ...h
        }) {
          super(), this.stop = () => {
            this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel()
          }, this.createdAt = t2.now();
          let d = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: s,
              name: a,
              motionValue: l,
              element: u,
              ...h
            },
            c = u?.KeyframeResolver || tb;
          this.keyframeResolver = new c(o, (t, e, i) => this.onKeyframesResolved(t, e, d, !i), a, l, u), this.keyframeResolver?.scheduleResolve()
        }
        onKeyframesResolved(t, e, i, n) {
          this.keyframeResolver = void 0;
          let {
            name: r,
            type: s,
            velocity: o,
            delay: a,
            isHandoff: l,
            onUpdate: u
          } = i;
          this.resolvedAt = t2.now(), ! function(t, e, i, n) {
            let r = t[0];
            if (null === r) return !1;
            if ("display" === e || "visibility" === e) return !0;
            let s = t[t.length - 1],
              o = ng(r, e),
              a = ng(s, e);
            return J(o === a, `You are trying to animate ${e} from "${r}" to "${s}". "${o?s:r}" is not an animatable value.`, "value-not-animatable"), !!o && !!a && (function(t) {
              let e = t[0];
              if (1 === t.length) return !0;
              for (let i = 0; i < t.length; i++)
                if (t[i] !== e) return !0
            }(t) || ("spring" === i || nc(i)) && n)
          }(t, r, s, o) && ((ta.instantAnimations || !a) && u?.(i6(t, i, e)), t[0] = t[t.length - 1], iu(i), i.repeat = 0);
          let h = {
              startTime: n ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
              finalKeyframe: e,
              ...i,
              keyframes: t
            },
            d = !l && function(t) {
              let {
                motionValue: e,
                name: i,
                repeatDelay: n,
                repeatType: r,
                damping: s,
                type: o
              } = t;
              if (!(e?.owner?.current instanceof HTMLElement)) return !1;
              let {
                onUpdate: a,
                transformTemplate: l
              } = e.owner.getProps();
              return nv() && i && ny.has(i) && ("transform" !== i || !l) && !a && !n && "mirror" !== r && 0 !== s && "inertia" !== o
            }(h) ? new nm({
              ...h,
              element: h.motionValue.owner.current
            }) : new nr(h);
          d.finished.then(() => this.notifyFinished()).catch(to), this.pendingTimeline && (this.stopTimeline = d.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = d
        }
        get finished() {
          return this._animation ? this.animation.finished : this._finished
        }
        then(t, e) {
          return this.finished.finally(t).then(() => {})
        }
        get animation() {
          return this._animation || (this.keyframeResolver?.resume(), tv = !0, tw(), tx(), tv = !1), this._animation
        }
        get duration() {
          return this.animation.duration
        }
        get time() {
          return this.animation.time
        }
        set time(t) {
          this.animation.time = t
        }
        get speed() {
          return this.animation.speed
        }
        get state() {
          return this.animation.state
        }
        set speed(t) {
          this.animation.speed = t
        }
        get startTime() {
          return this.animation.startTime
        }
        attachTimeline(t) {
          return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop()
        }
        play() {
          this.animation.play()
        }
        pause() {
          this.animation.pause()
        }
        complete() {
          this.animation.complete()
        }
        cancel() {
          this._animation && this.animation.cancel(), this.keyframeResolver?.cancel()
        }
      }
      let nw = t => null !== t,
        nb = {
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        },
        nS = t => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        }),
        nT = {
          type: "keyframes",
          duration: .8
        },
        nP = {
          type: "keyframes",
          ease: [.25, .1, .35, 1],
          duration: .3
        },
        nA = (t, {
          keyframes: e
        }) => e.length > 2 ? nT : a.has(t) ? t.startsWith("scale") ? nS(e[1]) : nb : nP,
        nC = (t, e, i, n = {}, r, s) => o => {
          let a = io(n, t) || {},
            l = a.delay || n.delay || 0,
            {
              elapsed: u = 0
            } = n;
          u -= ic(l);
          let h = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...a,
            delay: -u,
            onUpdate: t => {
              e.set(t), a.onUpdate && a.onUpdate(t)
            },
            onComplete: () => {
              o(), a.onComplete && a.onComplete()
            },
            name: t,
            motionValue: e,
            element: s ? void 0 : r
          };
          ! function({
            when: t,
            delay: e,
            delayChildren: i,
            staggerChildren: n,
            staggerDirection: r,
            repeat: s,
            repeatType: o,
            repeatDelay: a,
            from: l,
            elapsed: u,
            ...h
          }) {
            return !!Object.keys(h).length
          }(a) && Object.assign(h, nA(t, h)), h.duration && (h.duration = ic(h.duration)), h.repeatDelay && (h.repeatDelay = ic(h.repeatDelay)), void 0 !== h.from && (h.keyframes[0] = h.from);
          let d = !1;
          if (!1 !== h.type && (0 !== h.duration || h.repeatDelay) || (iu(h), 0 !== h.delay || (d = !0)), (ta.instantAnimations || ta.skipAnimations) && (d = !0, iu(h), h.delay = 0), h.allowFlatten = !a.type && !a.ease, d && !s && void 0 !== e.get()) {
            let t = function(t, {
              repeat: e,
              repeatType: i = "loop"
            }, n) {
              let r = t.filter(nw),
                s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
              return r[s]
            }(h.keyframes, a);
            if (void 0 !== t) {
              td.update(() => {
                h.onUpdate(t), h.onComplete()
              });
              return
            }
          }
          return a.isSync ? new nr(h) : new nx(h)
        };

      function nM(t, e, {
        delay: i = 0,
        transitionOverride: n,
        type: r
      } = {}) {
        let {
          transition: s = t.getDefaultTransition(),
          transitionEnd: o,
          ...a
        } = e;
        n && (s = n);
        let l = [],
          u = r && t.animationState && t.animationState.getState()[r];
        for (let e in a) {
          let n = t.getValue(e, t.latestValues[e] ?? null),
            r = a[e];
          if (void 0 === r || u && function({
              protectedKeys: t,
              needsAnimating: e
            }, i) {
              let n = t.hasOwnProperty(i) && !0 !== e[i];
              return e[i] = !1, n
            }(u, e)) continue;
          let o = {
              delay: i,
              ...io(s || {}, e)
            },
            h = n.get();
          if (void 0 !== h && !n.isAnimating && !Array.isArray(r) && r === h && !o.velocity) continue;
          let d = !1;
          if (window.MotionHandoffAnimation) {
            let i = t.props[it];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, td);
              null !== t && (o.startTime = t, d = !0)
            }
          }
          il(t, e), n.start(nC(e, n, r, t.shouldReduceMotion && O.has(e) ? {
            type: !1
          } : o, t, d));
          let c = n.animation;
          c && l.push(c)
        }
        return o && Promise.all(l).then(() => {
          td.update(() => {
            o && function(t, e) {
              let {
                transitionEnd: i = {},
                transition: n = {},
                ...r
              } = is(t, e) || {};
              for (let e in r = {
                  ...r,
                  ...i
                }) {
                var s;
                let i = ia(s = r[e]) ? s[s.length - 1] || 0 : s;
                t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, t6(i))
              }
            }(t, o)
          })
        }), l
      }

      function nE(t, e, i, n = 0, r = 1) {
        let s = Array.from(t).sort((t, e) => t.sortNodePosition(e)).indexOf(e),
          o = t.size,
          a = (o - 1) * n;
        return "function" == typeof i ? i(s, o) : 1 === r ? s * n : a - s * n
      }

      function nk(t, e, i = {}) {
        let n = is(t, e, "exit" === i.type ? t.presenceContext?.custom : void 0),
          {
            transition: r = t.getDefaultTransition() || {}
          } = n || {};
        i.transitionOverride && (r = i.transitionOverride);
        let s = n ? () => Promise.all(nM(t, n, i)) : () => Promise.resolve(),
          o = t.variantChildren && t.variantChildren.size ? (n = 0) => {
            let {
              delayChildren: s = 0,
              staggerChildren: o,
              staggerDirection: a
            } = r;
            return function(t, e, i = 0, n = 0, r = 0, s = 1, o) {
              let a = [];
              for (let l of t.variantChildren) l.notify("AnimationStart", e), a.push(nk(l, e, {
                ...o,
                delay: i + ("function" == typeof n ? 0 : n) + nE(t.variantChildren, l, n, r, s)
              }).then(() => l.notify("AnimationComplete", e)));
              return Promise.all(a)
            }(t, e, n, s, o, a, i)
          } : () => Promise.resolve(),
          {
            when: a
          } = r;
        if (!a) return Promise.all([s(), o(i.delay)]);
        {
          let [t, e] = "beforeChildren" === a ? [s, o] : [o, s];
          return t().then(() => e())
        }
      }

      function nR(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++)
          if (e[n] !== t[n]) return !1;
        return !0
      }
      let nj = ey.length,
        nV = [...eg].reverse(),
        nD = eg.length;

      function n_(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }

      function nF() {
        return {
          animate: n_(!0),
          whileInView: n_(),
          whileHover: n_(),
          whileTap: n_(),
          whileDrag: n_(),
          whileFocus: n_(),
          exit: n_()
        }
      }
      class nL {
        constructor(t) {
          this.isMounted = !1, this.node = t
        }
        update() {}
      }
      class nO extends nL {
        constructor(t) {
          super(t), t.animationState || (t.animationState = function(t) {
            let e = e => Promise.all(e.map(({
                animation: e,
                options: i
              }) => (function(t, e, i = {}) {
                let n;
                if (t.notify("AnimationStart", e), Array.isArray(e)) n = Promise.all(e.map(e => nk(t, e, i)));
                else if ("string" == typeof e) n = nk(t, e, i);
                else {
                  let r = "function" == typeof e ? is(t, e, i.custom) : e;
                  n = Promise.all(nM(t, r, i))
                }
                return n.then(() => {
                  t.notify("AnimationComplete", e)
                })
              })(t, e, i))),
              i = nF(),
              n = !0,
              r = e => (i, n) => {
                let r = is(t, n, "exit" === e ? t.presenceContext?.custom : void 0);
                if (r) {
                  let {
                    transition: t,
                    transitionEnd: e,
                    ...n
                  } = r;
                  i = {
                    ...i,
                    ...n,
                    ...e
                  }
                }
                return i
              };

            function s(s) {
              let {
                props: o
              } = t, a = function t(e) {
                if (!e) return;
                if (!e.isControllingVariants) {
                  let i = e.parent && t(e.parent) || {};
                  return void 0 !== e.props.initial && (i.initial = e.props.initial), i
                }
                let i = {};
                for (let t = 0; t < nj; t++) {
                  let n = ey[t],
                    r = e.props[n];
                  (em(r) || !1 === r) && (i[n] = r)
                }
                return i
              }(t.parent) || {}, l = [], u = new Set, h = {}, d = 1 / 0;
              for (let e = 0; e < nD; e++) {
                var c;
                let p = nV[e],
                  f = i[p],
                  m = void 0 !== o[p] ? o[p] : a[p],
                  g = em(m),
                  y = p === s ? f.isActive : null;
                !1 === y && (d = e);
                let v = m === a[p] && m !== o[p] && g;
                if (v && n && t.manuallyAnimateOnMount && (v = !1), f.protectedKeys = {
                    ...h
                  }, !f.isActive && null === y || !m && !f.prevProp || ef(m) || "boolean" == typeof m) continue;
                let x = (c = f.prevProp, "string" == typeof m ? m !== c : !!Array.isArray(m) && !nR(m, c)),
                  w = x || p === s && f.isActive && !v && g || e > d && g,
                  b = !1,
                  S = Array.isArray(m) ? m : [m],
                  T = S.reduce(r(p), {});
                !1 === y && (T = {});
                let {
                  prevResolvedValues: P = {}
                } = f, A = {
                  ...P,
                  ...T
                }, C = e => {
                  w = !0, u.has(e) && (b = !0, u.delete(e)), f.needsAnimating[e] = !0;
                  let i = t.getValue(e);
                  i && (i.liveStyle = !1)
                };
                for (let t in A) {
                  let e = T[t],
                    i = P[t];
                  if (!h.hasOwnProperty(t))(ia(e) && ia(i) ? nR(e, i) : e === i) ? void 0 !== e && u.has(t) ? C(t) : f.protectedKeys[t] = !0 : null != e ? C(t) : u.add(t)
                }
                f.prevProp = m, f.prevResolvedValues = T, f.isActive && (h = {
                  ...h,
                  ...T
                }), n && t.blockInitialAnimation && (w = !1);
                let M = v && x,
                  E = !M || b;
                w && E && l.push(...S.map(e => {
                  let i = {
                    type: p
                  };
                  if ("string" == typeof e && n && !M && t.manuallyAnimateOnMount && t.parent) {
                    let {
                      parent: n
                    } = t, r = is(n, e);
                    if (n.enteringChildren && r) {
                      let {
                        delayChildren: e
                      } = r.transition || {};
                      i.delay = nE(n.enteringChildren, t, e)
                    }
                  }
                  return {
                    animation: e,
                    options: i
                  }
                }))
              }
              if (u.size) {
                let e = {};
                if ("boolean" != typeof o.initial) {
                  let i = is(t, Array.isArray(o.initial) ? o.initial[0] : o.initial);
                  i && i.transition && (e.transition = i.transition)
                }
                u.forEach(i => {
                  let n = t.getBaseTarget(i),
                    r = t.getValue(i);
                  r && (r.liveStyle = !0), e[i] = n ?? null
                }), l.push({
                  animation: e
                })
              }
              let p = !!l.length;
              return n && (!1 === o.initial || o.initial === o.animate) && !t.manuallyAnimateOnMount && (p = !1), n = !1, p ? e(l) : Promise.resolve()
            }
            return {
              animateChanges: s,
              setActive: function(e, n) {
                if (i[e].isActive === n) return Promise.resolve();
                t.variantChildren?.forEach(t => t.animationState?.setActive(e, n)), i[e].isActive = n;
                let r = s(e);
                for (let t in i) i[t].protectedKeys = {};
                return r
              },
              setAnimateFunction: function(i) {
                e = i(t)
              },
              getState: () => i,
              reset: () => {
                i = nF(), n = !0
              }
            }
          }(t))
        }
        updateAnimationControlsSubscription() {
          let {
            animate: t
          } = this.node.getProps();
          ef(t) && (this.unmountControls = t.subscribe(this.node))
        }
        mount() {
          this.updateAnimationControlsSubscription()
        }
        update() {
          let {
            animate: t
          } = this.node.getProps(), {
            animate: e
          } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription()
        }
        unmount() {
          this.node.animationState.reset(), this.unmountControls?.()
        }
      }
      let nI = 0;
      class nB extends nL {
        constructor() {
          super(...arguments), this.id = nI++
        }
        update() {
          if (!this.node.presenceContext) return;
          let {
            isPresent: t,
            onExitComplete: e
          } = this.node.presenceContext, {
            isPresent: i
          } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e && !t && n.then(() => {
            e(this.id)
          })
        }
        mount() {
          let {
            register: t,
            onExitComplete: e
          } = this.node.presenceContext || {};
          e && e(this.id), t && (this.unmount = t(this.id))
        }
        unmount() {}
      }
      let nz = {
        x: !1,
        y: !1
      };

      function nU(t, e, i, n = {
        passive: !0
      }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i)
      }
      let nN = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

      function nW(t) {
        return {
          point: {
            x: t.pageX,
            y: t.pageY
          }
        }
      }
      let n$ = t => e => nN(e) && t(e, nW(e));

      function nH(t, e, i, n) {
        return nU(t, e, n$(i), n)
      }

      function nY(t) {
        return t.max - t.min
      }

      function nX(t, e, i, n = .5) {
        t.origin = n, t.originPoint = A(e.min, e.max, t.origin), t.scale = nY(i) / nY(e), t.translate = A(i.min, i.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
      }

      function nq(t, e, i, n) {
        nX(t.x, e.x, i.x, n ? n.originX : void 0), nX(t.y, e.y, i.y, n ? n.originY : void 0)
      }

      function nK(t, e, i) {
        t.min = i.min + e.min, t.max = t.min + nY(e)
      }

      function nG(t, e, i) {
        t.min = e.min - i.min, t.max = t.min + nY(e)
      }

      function nZ(t, e, i) {
        nG(t.x, e.x, i.x), nG(t.y, e.y, i.y)
      }

      function nJ(t) {
        return [t("x"), t("y")]
      }
      let nQ = ({
          current: t
        }) => t ? t.ownerDocument.defaultView : null,
        n0 = (t, e) => Math.abs(t - e);
      class n1 {
        constructor(t, e, {
          transformPagePoint: i,
          contextWindow: n = window,
          dragSnapToOrigin: r = !1,
          distanceThreshold: s = 3
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = n4(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                r = (t = i.offset, e = {
                  x: 0,
                  y: 0
                }, Math.sqrt(n0(t.x, e.x) ** 2 + n0(t.y, e.y) ** 2) >= this.distanceThreshold);
              if (!n && !r) return;
              let {
                point: s
              } = i, {
                timestamp: o
              } = tp;
              this.history.push({
                ...s,
                timestamp: o
              });
              let {
                onStart: a,
                onMove: l
              } = this.handlers;
              n || (a && a(this.lastMoveEvent, i), this.startEvent = this.lastMoveEvent), l && l(this.lastMoveEvent, i)
            }, this.handlePointerMove = (t, e) => {
              this.lastMoveEvent = t, this.lastMoveEventInfo = n2(e, this.transformPagePoint), td.update(this.updatePoint, !0)
            }, this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: r
              } = this.handlers;
              if (this.dragSnapToOrigin && r && r(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let s = n4("pointercancel" === t.type ? this.lastMoveEventInfo : n2(e, this.transformPagePoint), this.history);
              this.startEvent && i && i(t, s), n && n(t, s)
            }, !nN(t)) return;
          this.dragSnapToOrigin = r, this.handlers = e, this.transformPagePoint = i, this.distanceThreshold = s, this.contextWindow = n || window;
          let o = n2(nW(t), this.transformPagePoint),
            {
              point: a
            } = o,
            {
              timestamp: l
            } = tp;
          this.history = [{
            ...a,
            timestamp: l
          }];
          let {
            onSessionStart: u
          } = e;
          u && u(t, n4(o, this.history)), this.removeListeners = id(nH(this.contextWindow, "pointermove", this.handlePointerMove), nH(this.contextWindow, "pointerup", this.handlePointerUp), nH(this.contextWindow, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(t) {
          this.handlers = t
        }
        end() {
          this.removeListeners && this.removeListeners(), tc(this.updatePoint)
        }
      }

      function n2(t, e) {
        return e ? {
          point: e(t.point)
        } : t
      }

      function n5(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y
        }
      }

      function n4({
        point: t
      }, e) {
        return {
          point: t,
          delta: n5(t, n3(e)),
          offset: n5(t, e[0]),
          velocity: function(t, e) {
            if (t.length < 2) return {
              x: 0,
              y: 0
            };
            let i = t.length - 1,
              n = null,
              r = n3(t);
            for (; i >= 0 && (n = t[i], !(r.timestamp - n.timestamp > ic(.1)));) i--;
            if (!n) return {
              x: 0,
              y: 0
            };
            let s = ip(r.timestamp - n.timestamp);
            if (0 === s) return {
              x: 0,
              y: 0
            };
            let o = {
              x: (r.x - n.x) / s,
              y: (r.y - n.y) / s
            };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
          }(e, 0)
        }
      }

      function n3(t) {
        return t[t.length - 1]
      }

      function n9(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
        }
      }

      function n7(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([i, n] = [n, i]), {
          min: i,
          max: n
        }
      }

      function n8(t, e, i) {
        return {
          min: n6(t, e),
          max: n6(t, i)
        }
      }

      function n6(t, e) {
        return "number" == typeof t ? t : t[e] || 0
      }
      let rt = new WeakMap;
      class re {
        constructor(t) {
          this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = eu(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t
        }
        start(t, {
          snapToCursor: e = !1,
          distanceThreshold: i
        } = {}) {
          let {
            presenceContext: n
          } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let {
            dragSnapToOrigin: r
          } = this.getProps();
          this.panSession = new n1(t, {
            onSessionStart: t => {
              let {
                dragSnapToOrigin: i
              } = this.getProps();
              i ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(nW(t).point)
            },
            onStart: (t, e) => {
              let {
                drag: i,
                dragPropagation: n,
                onDragStart: r
              } = this.getProps();
              if (i && !n && (this.openDragLock && this.openDragLock(), this.openDragLock = "x" === i || "y" === i ? nz[i] ? null : (nz[i] = !0, () => {
                  nz[i] = !1
                }) : nz.x || nz.y ? null : (nz.x = nz.y = !0, () => {
                  nz.x = nz.y = !1
                }), !this.openDragLock)) return;
              this.latestPointerEvent = t, this.latestPanInfo = e, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), nJ(t => {
                let e = this.getAxisMotionValue(t).get() || 0;
                if ($.test(e)) {
                  let {
                    projection: i
                  } = this.visualElement;
                  if (i && i.layout) {
                    let n = i.layout.layoutBox[t];
                    if (n) {
                      let t = nY(n);
                      e = parseFloat(e) / 100 * t
                    }
                  }
                }
                this.originPoint[t] = e
              }), r && td.postRender(() => r(t, e)), il(this.visualElement, "transform");
              let {
                animationState: s
              } = this.visualElement;
              s && s.setActive("whileDrag", !0)
            },
            onMove: (t, e) => {
              this.latestPointerEvent = t, this.latestPanInfo = e;
              let {
                dragPropagation: i,
                dragDirectionLock: n,
                onDirectionLock: r,
                onDrag: s
              } = this.getProps();
              if (!i && !this.openDragLock) return;
              let {
                offset: o
              } = e;
              if (n && null === this.currentDirection) {
                this.currentDirection = function(t, e = 10) {
                  let i = null;
                  return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                }(o), null !== this.currentDirection && r && r(this.currentDirection);
                return
              }
              this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), s && s(t, e)
            },
            onSessionEnd: (t, e) => {
              this.latestPointerEvent = t, this.latestPanInfo = e, this.stop(t, e), this.latestPointerEvent = null, this.latestPanInfo = null
            },
            resumeAnimation: () => nJ(t => "paused" === this.getAnimationState(t) && this.getAxisMotionValue(t).animation?.play())
          }, {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: r,
            distanceThreshold: i,
            contextWindow: nQ(this.visualElement)
          })
        }
        stop(t, e) {
          let i = t || this.latestPointerEvent,
            n = e || this.latestPanInfo,
            r = this.isDragging;
          if (this.cancel(), !r || !n || !i) return;
          let {
            velocity: s
          } = n;
          this.startAnimation(s);
          let {
            onDragEnd: o
          } = this.getProps();
          o && td.postRender(() => o(i, n))
        }
        cancel() {
          this.isDragging = !1;
          let {
            projection: t,
            animationState: e
          } = this.visualElement;
          t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
          let {
            dragPropagation: i
          } = this.getProps();
          !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
        }
        updateAxis(t, e, i) {
          let {
            drag: n
          } = this.getProps();
          if (!i || !ri(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints && this.constraints[t] && (s = function(t, {
            min: e,
            max: i
          }, n) {
            return void 0 !== e && t < e ? t = n ? A(e, t, n.min) : Math.max(t, e) : void 0 !== i && t > i && (t = n ? A(i, t, n.max) : Math.min(t, i)), t
          }(s, this.constraints[t], this.elastic[t])), r.set(s)
        }
        resolveConstraints() {
          let {
            dragConstraints: t,
            dragElastic: e
          } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, n = this.constraints;
          t && e6(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && i ? this.constraints = function(t, {
            top: e,
            left: i,
            bottom: n,
            right: r
          }) {
            return {
              x: n9(t.x, i, r),
              y: n9(t.y, e, n)
            }
          }(i.layoutBox, t) : this.constraints = !1, this.elastic = function(t = .35) {
            return !1 === t ? t = 0 : !0 === t && (t = .35), {
              x: n8(t, "left", "right"),
              y: n8(t, "top", "bottom")
            }
          }(e), n !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && nJ(t => {
            !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
              let i = {};
              return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
            }(i.layoutBox[t], this.constraints[t]))
          })
        }
        resolveRefConstraints() {
          var t;
          let {
            dragConstraints: e,
            onMeasureDragConstraints: i
          } = this.getProps();
          if (!e || !e6(e)) return !1;
          let n = e.current;
          Q(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
          let {
            projection: r
          } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = function(t, e, i) {
              let n = L(t, i),
                {
                  scroll: r
                } = e;
              return r && (D(n.x, r.offset.x), D(n.y, r.offset.y)), n
            }(n, r.root, this.visualElement.getTransformPagePoint()),
            o = {
              x: n7((t = r.layout.layoutBox).x, s.x),
              y: n7(t.y, s.y)
            };
          if (i) {
            let t = i(function({
              x: t,
              y: e
            }) {
              return {
                top: e.min,
                right: t.max,
                bottom: e.max,
                left: t.min
              }
            }(o));
            this.hasMutatedConstraints = !!t, t && (o = P(t))
          }
          return o
        }
        startAnimation(t) {
          let {
            drag: e,
            dragMomentum: i,
            dragElastic: n,
            dragTransition: r,
            dragSnapToOrigin: s,
            onDragTransitionEnd: o
          } = this.getProps(), a = this.constraints || {};
          return Promise.all(nJ(o => {
            if (!ri(o, e, this.currentDirection)) return;
            let l = a && a[o] || {};
            s && (l = {
              min: 0,
              max: 0
            });
            let u = {
              type: "inertia",
              velocity: i ? t[o] : 0,
              bounceStiffness: n ? 200 : 1e6,
              bounceDamping: n ? 40 : 1e7,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...r,
              ...l
            };
            return this.startAxisValueAnimation(o, u)
          })).then(o)
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return il(this.visualElement, t), i.start(nC(t, i, 0, e, this.visualElement, !1))
        }
        stopAnimation() {
          nJ(t => this.getAxisMotionValue(t).stop())
        }
        pauseAnimation() {
          nJ(t => this.getAxisMotionValue(t).animation?.pause())
        }
        getAnimationState(t) {
          return this.getAxisMotionValue(t).animation?.state
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
        }
        snapToCursor(t) {
          nJ(e => {
            let {
              drag: i
            } = this.getProps();
            if (!ri(e, i, this.currentDirection)) return;
            let {
              projection: n
            } = this.visualElement, r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let {
                min: i,
                max: s
              } = n.layout.layoutBox[e];
              r.set(t[e] - A(i, s, .5))
            }
          })
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let {
            drag: t,
            dragConstraints: e
          } = this.getProps(), {
            projection: i
          } = this.visualElement;
          if (!e6(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = {
            x: 0,
            y: 0
          };
          nJ(t => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = function(t, e) {
                let i = .5,
                  n = nY(t),
                  r = nY(e);
                return r > n ? i = i9(e.min, e.max - n, t.min) : n > r && (i = i9(t.min, t.max - r, e.min)), I(0, 1, i)
              }({
                min: i,
                max: i
              }, this.constraints[t])
            }
          });
          let {
            transformTemplate: r
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = r ? r({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), nJ(e => {
            if (!ri(e, t, null)) return;
            let i = this.getAxisMotionValue(e),
              {
                min: r,
                max: s
              } = this.constraints[e];
            i.set(A(r, s, n[e]))
          })
        }
        addListeners() {
          if (!this.visualElement.current) return;
          rt.set(this.visualElement, this);
          let t = nH(this.visualElement.current, "pointerdown", t => {
              let {
                drag: e,
                dragListener: i = !0
              } = this.getProps();
              e && i && this.start(t)
            }),
            e = () => {
              let {
                dragConstraints: t
              } = this.getProps();
              e6(t) && t.current && (this.constraints = this.resolveRefConstraints())
            },
            {
              projection: i
            } = this.visualElement,
            n = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), td.read(e);
          let r = nU(window, "resize", () => this.scalePositionWithinConstraints()),
            s = i.addEventListener("didUpdate", ({
              delta: t,
              hasLayoutChanged: e
            }) => {
              this.isDragging && e && (nJ(e => {
                let i = this.getAxisMotionValue(e);
                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
              }), this.visualElement.render())
            });
          return () => {
            r(), t(), n(), s && s()
          }
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = .35,
              dragMomentum: o = !0
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o
          }
        }
      }

      function ri(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t)
      }
      class rn extends nL {
        constructor(t) {
          super(t), this.removeGroupControls = to, this.removeListeners = to, this.controls = new re(t)
        }
        mount() {
          let {
            dragControls: t
          } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || to
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners()
        }
      }
      let rr = t => (e, i) => {
        t && td.postRender(() => t(e, i))
      };
      class rs extends nL {
        constructor() {
          super(...arguments), this.removePointerDownListener = to
        }
        onPointerDown(t) {
          this.session = new n1(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: nQ(this.node)
          })
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n
          } = this.node.getProps();
          return {
            onSessionStart: rr(t),
            onStart: rr(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, n && td.postRender(() => n(t, e))
            }
          }
        }
        mount() {
          this.removePointerDownListener = nH(this.node.current, "pointerdown", t => this.onPointerDown(t))
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers())
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end()
        }
      }
      var ro = i(9793);
      let ra = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
      };

      function rl(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
      }
      let ru = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!H.test(t)) return t;
              t = parseFloat(t)
            }
            let i = rl(t, e.target.x),
              n = rl(t, e.target.y);
            return `${i}% ${n}%`
          }
        },
        rh = !1;
      class rd extends s.Component {
        componentDidMount() {
          let {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: i,
            layoutId: n
          } = this.props, {
            projection: r
          } = t;
          ! function(t) {
            for (let e in t) eR[e] = t[e], w(e) && (eR[e].isCSSVariable = !0)
          }(rp), r && (e.group && e.group.add(r), i && i.register && n && i.register(r), rh && r.root.didUpdate(), r.addEventListener("animationComplete", () => {
            this.safeToRemove()
          }), r.setOptions({
            ...r.options,
            onExitComplete: () => this.safeToRemove()
          })), ra.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
          let {
            layoutDependency: e,
            visualElement: i,
            drag: n,
            isPresent: r
          } = this.props, {
            projection: s
          } = i;
          return s && (s.isPresent = r, rh = !0, n || t.layoutDependency !== e || void 0 === e || t.isPresent !== r ? s.willUpdate() : this.safeToRemove(), t.isPresent === r || (r ? s.promote() : s.relegate() || td.postRender(() => {
            let t = s.getStack();
            t && t.members.length || this.safeToRemove()
          }))), null
        }
        componentDidUpdate() {
          let {
            projection: t
          } = this.props.visualElement;
          t && (t.root.didUpdate(), ei.postRender(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
          }))
        }
        componentWillUnmount() {
          let {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: i
          } = this.props, {
            projection: n
          } = t;
          rh = !0, n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), i && i.deregister && i.deregister(n))
        }
        safeToRemove() {
          let {
            safeToRemove: t
          } = this.props;
          t && t()
        }
        render() {
          return null
        }
      }

      function rc(t) {
        let [e, i] = (0, ro.oO)(), n = (0, s.useContext)(eH.p);
        return (0, e$.jsx)(rd, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, s.useContext)(ie),
          isPresent: e,
          safeToRemove: i
        })
      }
      let rp = {
        borderRadius: {
          ...ru,
          applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: ru,
        borderTopRightRadius: ru,
        borderBottomLeftRadius: ru,
        borderBottomRightRadius: ru,
        boxShadow: {
          correct: (t, {
            treeScale: e,
            projectionDelta: i
          }) => {
            let n = tN.parse(t);
            if (n.length > 5) return t;
            let r = tN.createTransformer(t),
              s = "number" != typeof n[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            n[0 + s] /= o, n[1 + s] /= a;
            let l = A(o, a, .5);
            return "number" == typeof n[2 + s] && (n[2 + s] /= l), "number" == typeof n[3 + s] && (n[3 + s] /= l), r(n)
          }
        }
      };
      var rf = i(7624);

      function rm(t) {
        return (0, rf.K)(t) && "ownerSVGElement" in t
      }
      let rg = (t, e) => t.depth - e.depth;
      class ry {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(t) {
          t5(this.children, t), this.isDirty = !0
        }
        remove(t) {
          t4(this.children, t), this.isDirty = !0
        }
        forEach(t) {
          this.isDirty && this.children.sort(rg), this.isDirty = !1, this.children.forEach(t)
        }
      }
      let rv = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        rx = rv.length,
        rw = t => "string" == typeof t ? parseFloat(t) : t,
        rb = t => "number" == typeof t || H.test(t);

      function rS(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
      }
      let rT = rA(0, .5, i0),
        rP = rA(.5, .95, to);

      function rA(t, e, i) {
        return n => n < t ? 0 : n > e ? 1 : i(i9(t, e, n))
      }

      function rC(t, e) {
        t.min = e.min, t.max = e.max
      }

      function rM(t, e) {
        rC(t.x, e.x), rC(t.y, e.y)
      }

      function rE(t, e) {
        t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
      }

      function rk(t, e, i, n, r) {
        return t -= e, t = n + 1 / i * (t - n), void 0 !== r && (t = n + 1 / r * (t - n)), t
      }

      function rR(t, e, [i, n, r], s, o) {
        ! function(t, e = 0, i = 1, n = .5, r, s = t, o = t) {
          if ($.test(e) && (e = parseFloat(e), e = A(o.min, o.max, e / 100) - o.min), "number" != typeof e) return;
          let a = A(s.min, s.max, n);
          t === s && (a -= e), t.min = rk(t.min, e, i, a, r), t.max = rk(t.max, e, i, a, r)
        }(t, e[i], e[n], e[r], e.scale, s, o)
      }
      let rj = ["x", "scaleX", "originX"],
        rV = ["y", "scaleY", "originY"];

      function rD(t, e, i, n) {
        rR(t.x, e, rj, i ? i.x : void 0, n ? n.x : void 0), rR(t.y, e, rV, i ? i.y : void 0, n ? n.y : void 0)
      }

      function r_(t) {
        return 0 === t.translate && 1 === t.scale
      }

      function rF(t) {
        return r_(t.x) && r_(t.y)
      }

      function rL(t, e) {
        return t.min === e.min && t.max === e.max
      }

      function rO(t, e) {
        return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
      }

      function rI(t, e) {
        return rO(t.x, e.x) && rO(t.y, e.y)
      }

      function rB(t) {
        return nY(t.x) / nY(t.y)
      }

      function rz(t, e) {
        return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
      }
      class rU {
        constructor() {
          this.members = []
        }
        add(t) {
          t5(this.members, t), t.scheduleRender()
        }
        remove(t) {
          if (t4(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t)
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex(e => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break
            }
          }
          return !!e && (this.promote(e), !0)
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
            i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let {
              crossfade: n
            } = t.options;
            !1 === n && i.hide()
          }
        }
        exitAnimationComplete() {
          this.members.forEach(t => {
            let {
              options: e,
              resumingFrom: i
            } = t;
            e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
          })
        }
        scheduleRender() {
          this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
          })
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
        }
      }
      let rN = {
          nodes: 0,
          calculatedTargetDeltas: 0,
          calculatedProjections: 0
        },
        rW = ["", "X", "Y", "Z"],
        r$ = 0;

      function rH(t, e, i, n) {
        let {
          latestValues: r
        } = e;
        r[t] && (i[t] = r[t], e.setStaticValue(t, 0), n && (n[t] = 0))
      }

      function rY({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r
      }) {
        return class {
          constructor(t = {}, i = e?.()) {
            this.id = r$++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              this.projectionUpdateScheduled = !1, tu.value && (rN.nodes = rN.calculatedTargetDeltas = rN.calculatedProjections = 0), this.nodes.forEach(rK), this.nodes.forEach(r2), this.nodes.forEach(r5), this.nodes.forEach(rG), tu.addProjectionMetrics && tu.addProjectionMetrics(rN)
            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ry)
          }
          addEventListener(t, e) {
            return this.eventHandlers.has(t) || this.eventHandlers.set(t, new t3), this.eventHandlers.get(t).add(e)
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e)
          }
          hasListeners(t) {
            return this.eventHandlers.has(t)
          }
          mount(e) {
            if (this.instance) return;
            this.isSVG = rm(e) && !(rm(e) && "svg" === e.tagName), this.instance = e;
            let {
              layoutId: i,
              layout: n,
              visualElement: r
            } = this.options;
            if (r && !r.current && r.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (n || i) && (this.isLayoutDirty = !0), t) {
              let i;
              let n = 0,
                r = () => this.root.updateBlockedByResize = !1;
              td.read(() => {
                n = window.innerWidth
              }), t(e, () => {
                let t = window.innerWidth;
                t !== n && (n = t, this.root.updateBlockedByResize = !0, i && i(), i = function(t, e) {
                  let i = t2.now(),
                    n = ({
                      timestamp: e
                    }) => {
                      let r = e - i;
                      r >= 250 && (tc(n), t(r - 250))
                    };
                  return td.setup(n, !0), () => tc(n)
                }(r, 0), ra.hasAnimatedSinceResize && (ra.hasAnimatedSinceResize = !1, this.nodes.forEach(r1)))
              })
            }
            i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && r && (i || n) && this.addEventListener("didUpdate", ({
              delta: t,
              hasLayoutChanged: e,
              hasRelativeLayoutChanged: i,
              layout: n
            }) => {
              if (this.isTreeAnimationBlocked()) {
                this.target = void 0, this.relativeTarget = void 0;
                return
              }
              let s = this.options.transition || r.getDefaultTransition() || r6,
                {
                  onLayoutAnimationStart: o,
                  onLayoutAnimationComplete: a
                } = r.getProps(),
                l = !this.targetLayout || !rI(this.targetLayout, n),
                u = !e && i;
              if (this.options.layoutRoot || this.resumeFrom || u || e && (l || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                let e = {
                  ...io(s, "layout"),
                  onPlay: o,
                  onComplete: a
                };
                (r.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e), this.setAnimationOrigin(t, u)
              } else e || r1(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
              this.targetLayout = n
            })
          }
          unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), tc(this.updateProjection)
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
          }
          isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
          }
          startUpdate() {
            !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(r4), this.animationId++)
          }
          getTransformTemplate() {
            let {
              visualElement: t
            } = this.options;
            return t && t.getProps().transformTemplate
          }
          willUpdate(t = !0) {
            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
              this.options.onExitComplete && this.options.onExitComplete();
              return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
                let {
                  visualElement: i
                } = e.options;
                if (!i) return;
                let n = i.props[it];
                if (window.MotionHasOptimisedAnimation(n, "transform")) {
                  let {
                    layout: t,
                    layoutId: i
                  } = e.options;
                  window.MotionCancelOptimisedAnimation(n, "transform", td, !(t || i))
                }
                let {
                  parent: r
                } = e;
                r && !r.hasCheckedOptimisedAppear && t(r)
              }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
            }
            let {
              layoutId: e,
              layout: i
            } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            this.prevTransformTemplateValue = n ? n(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
          }
          update() {
            if (this.updateScheduled = !1, this.isUpdateBlocked()) {
              this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(rJ);
              return
            }
            if (this.animationId <= this.animationCommitId) {
              this.nodes.forEach(rQ);
              return
            }
            this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(r0), this.nodes.forEach(rX), this.nodes.forEach(rq)) : this.nodes.forEach(rQ), this.clearAllSnapshots();
            let t = t2.now();
            tp.delta = I(0, 1e3 / 60, t - tp.timestamp), tp.timestamp = t, tp.isProcessing = !0, tf.update.process(tp), tf.preRender.process(tp), tf.render.process(tp), tp.isProcessing = !1
          }
          didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0, ei.read(this.scheduleUpdate))
          }
          clearAllSnapshots() {
            this.nodes.forEach(rZ), this.sharedNodes.forEach(r3)
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, td.preRender(this.updateProjection, !1, !0))
          }
          scheduleCheckAfterUnmount() {
            td.postRender(() => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
          }
          updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(), !this.snapshot || nY(this.snapshot.measuredBox.x) || nY(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
          }
          updateLayout() {
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
            let t = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = eu(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
            let {
              visualElement: e
            } = this.options;
            e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && this.instance) {
              let e = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e
              }
            }
          }
          resetTransform() {
            if (!r) return;
            let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !rF(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              s = n !== this.prevTransformTemplateValue;
            t && this.instance && (e || E(this.latestValues) || s) && (r(this.instance, n), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return t && (n = this.removeTransform(n)), si((e = n).x), si(e.y), {
              animationId: this.root.animationId,
              measuredBox: i,
              layoutBox: n,
              latestValues: {},
              source: this.id
            }
          }
          measurePageBox() {
            let {
              visualElement: t
            } = this.options;
            if (!t) return eu();
            let e = t.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(sr))) {
              let {
                scroll: t
              } = this.root;
              t && (D(e.x, t.offset.x), D(e.y, t.offset.y))
            }
            return e
          }
          removeElementScroll(t) {
            let e = eu();
            if (rM(e, t), this.scroll?.wasRoot) return e;
            for (let i = 0; i < this.path.length; i++) {
              let n = this.path[i],
                {
                  scroll: r,
                  options: s
                } = n;
              n !== this.root && r && s.layoutScroll && (r.wasRoot && rM(e, t), D(e.x, r.offset.x), D(e.y, r.offset.y))
            }
            return e
          }
          applyTransform(t, e = !1) {
            let i = eu();
            rM(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e && n.options.layoutScroll && n.scroll && n !== n.root && F(i, {
                x: -n.scroll.offset.x,
                y: -n.scroll.offset.y
              }), E(n.latestValues) && F(i, n.latestValues)
            }
            return E(this.latestValues) && F(i, this.latestValues), i
          }
          removeTransform(t) {
            let e = eu();
            rM(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !E(i.latestValues)) continue;
              M(i.latestValues) && i.updateSnapshot();
              let n = eu();
              rM(n, i.measurePageBox()), rD(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, n)
            }
            return E(this.latestValues) && rD(e, this.latestValues), e
          }
          setTargetDelta(t) {
            this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade
            }
          }
          clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== tp.timestamp && this.relativeParent.resolveTargetDelta(!0)
          }
          resolveTargetDelta(t = !1) {
            let e = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
            let i = !!this.resumingFrom || this !== e;
            if (!(t || i && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
            let {
              layout: n,
              layoutId: r
            } = this.options;
            if (this.layout && (n || r)) {
              if (this.resolvedRelativeTargetAt = tp.timestamp, !this.targetDelta && !this.relativeTarget) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = eu(), this.relativeTargetOrigin = eu(), nZ(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), rM(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              if (this.relativeTarget || this.targetDelta) {
                if (this.target || (this.target = eu(), this.targetWithTransforms = eu()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
                  var s, o, a;
                  this.forceRelativeParentToResolveTarget(), s = this.target, o = this.relativeTarget, a = this.relativeParent.target, nK(s.x, o.x, a.x), nK(s.y, o.y, a.y)
                } else this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : rM(this.target, this.layout.layoutBox), V(this.target, this.targetDelta)) : rM(this.target, this.layout.layoutBox);
                if (this.attemptToResolveRelativeTarget) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = eu(), this.relativeTargetOrigin = eu(), nZ(this.relativeTargetOrigin, this.target, t.target), rM(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                tu.value && rN.calculatedTargetDeltas++
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent || M(this.parent.latestValues) || k(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
          }
          isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
          }
          calcProjection() {
            let t = this.getLead(),
              e = !!this.resumingFrom || this !== t,
              i = !0;
            if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (i = !1), e && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = !1), this.resolvedRelativeTargetAt === tp.timestamp && (i = !1), i) return;
            let {
              layout: n,
              layoutId: r
            } = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(n || r)) return;
            rM(this.layoutCorrected, this.layout.layoutBox);
            let s = this.treeScale.x,
              o = this.treeScale.y;
            ! function(t, e, i, n = !1) {
              let r, s;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (r = i[a]).projectionDelta;
                  let {
                    visualElement: o
                  } = r.options;
                  (!o || !o.props.style || "contents" !== o.props.style.display) && (n && r.options.layoutScroll && r.scroll && r !== r.root && F(t, {
                    x: -r.scroll.offset.x,
                    y: -r.scroll.offset.y
                  }), s && (e.x *= s.x.scale, e.y *= s.y.scale, V(t, s)), n && E(r.latestValues) && F(t, r.latestValues))
                }
                e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
              }
            }(this.layoutCorrected, this.treeScale, this.path, e), t.layout && !t.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (t.target = t.layout.layoutBox, t.targetWithTransforms = eu());
            let {
              target: a
            } = t;
            if (!a) {
              this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
              return
            }
            this.projectionDelta && this.prevProjectionDelta ? (rE(this.prevProjectionDelta.x, this.projectionDelta.x), rE(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), nq(this.projectionDelta, this.layoutCorrected, a, this.latestValues), this.treeScale.x === s && this.treeScale.y === o && rz(this.projectionDelta.x, this.prevProjectionDelta.x) && rz(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", a)), tu.value && rN.calculatedProjections++
          }
          hide() {
            this.isVisible = !1
          }
          show() {
            this.isVisible = !0
          }
          scheduleRender(t = !0) {
            if (this.options.visualElement?.scheduleRender(), t) {
              let t = this.getStack();
              t && t.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
          }
          createProjectionDeltas() {
            this.prevProjectionDelta = ea(), this.projectionDelta = ea(), this.projectionDeltaWithTransform = ea()
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              r = n ? n.latestValues : {},
              s = {
                ...this.latestValues
              },
              o = ea();
            this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
            let a = eu(),
              l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              d = !!(l && !h && !0 === this.options.crossfade && !this.path.some(r8));
            this.animationProgress = 0, this.mixTargetDelta = e => {
              let n = e / 1e3;
              if (r9(o.x, t.x, n), r9(o.y, t.y, n), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                var u, c, p, f;
                nZ(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), p = this.relativeTarget, f = this.relativeTargetOrigin, r7(p.x, f.x, a.x, n), r7(p.y, f.y, a.y, n), i && (u = this.relativeTarget, c = i, rL(u.x, c.x) && rL(u.y, c.y)) && (this.isProjectionDirty = !1), i || (i = eu()), rM(i, this.relativeTarget)
              }
              l && (this.animationValues = s, function(t, e, i, n, r, s) {
                r ? (t.opacity = A(0, i.opacity ?? 1, rT(n)), t.opacityExit = A(e.opacity ?? 1, 0, rP(n))) : s && (t.opacity = A(e.opacity ?? 1, i.opacity ?? 1, n));
                for (let r = 0; r < rx; r++) {
                  let s = `border${rv[r]}Radius`,
                    o = rS(e, s),
                    a = rS(i, s);
                  (void 0 !== o || void 0 !== a) && (o || (o = 0), a || (a = 0), 0 === o || 0 === a || rb(o) === rb(a) ? (t[s] = Math.max(A(rw(o), rw(a), n), 0), ($.test(a) || $.test(o)) && (t[s] += "%")) : t[s] = a)
                }(e.rotate || i.rotate) && (t.rotate = A(e.rotate || 0, i.rotate || 0, n))
              }(s, r, this.latestValues, n, d, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (tc(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = td.update(() => {
              ra.hasAnimatedSinceResize = !0, im.layout++, this.motionValue || (this.motionValue = t6(0)), this.currentAnimation = function(t, e, i) {
                let n = t0(t) ? t : t6(t);
                return n.start(nC("", n, e, i)), n.animation
              }(this.motionValue, [0, 1e3], {
                ...t,
                velocity: 0,
                isSync: !0,
                onUpdate: e => {
                  this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                },
                onStop: () => {
                  im.layout--
                },
                onComplete: () => {
                  im.layout--, t.onComplete && t.onComplete(), this.completeAnimation()
                }
              }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            })
          }
          completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
            let t = this.getStack();
            t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
          }
          finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r
              } = t;
            if (e && i && n) {
              if (this !== t && this.layout && n && sn(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
                i = this.target || eu();
                let e = nY(this.layout.layoutBox.x);
                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                let n = nY(this.layout.layoutBox.y);
                i.y.min = t.target.y.min, i.y.max = i.y.min + n
              }
              rM(e, i), F(e, r), nq(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new rU), this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
            })
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this
          }
          getLead() {
            let {
              layoutId: t
            } = this.options;
            return t && this.getStack()?.lead || this
          }
          getPrevLead() {
            let {
              layoutId: t
            } = this.options;
            return t ? this.getStack()?.prevLead : void 0
          }
          getStack() {
            let {
              layoutId: t
            } = this.options;
            if (t) return this.root.sharedNodes.get(t)
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
              transition: e
            })
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this)
          }
          resetSkewAndRotation() {
            let {
              visualElement: t
            } = this.options;
            if (!t) return;
            let e = !1,
              {
                latestValues: i
              } = t;
            if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0), !e) return;
            let n = {};
            i.z && rH("z", t, n, this.animationValues);
            for (let e = 0; e < rW.length; e++) rH(`rotate${rW[e]}`, t, n, this.animationValues), rH(`skew${rW[e]}`, t, n, this.animationValues);
            for (let e in t.render(), n) t.setStaticValue(e, n[e]), this.animationValues && (this.animationValues[e] = n[e]);
            t.scheduleRender()
          }
          applyProjectionStyles(t, e) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
              t.visibility = "hidden";
              return
            }
            let i = this.getTransformTemplate();
            if (this.needsReset) {
              this.needsReset = !1, t.visibility = "", t.opacity = "", t.pointerEvents = e4(e?.pointerEvents) || "", t.transform = i ? i(this.latestValues, "") : "none";
              return
            }
            let n = this.getLead();
            if (!this.projectionDelta || !this.layout || !n.target) {
              this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = e4(e?.pointerEvents) || ""), this.hasProjected && !E(this.latestValues) && (t.transform = i ? i({}, "") : "none", this.hasProjected = !1);
              return
            }
            t.visibility = "";
            let r = n.animationValues || n.latestValues;
            this.applyTransformsToTarget();
            let s = function(t, e, i) {
              let n = "",
                r = t.x.translate / e.x,
                s = t.y.translate / e.y,
                o = i?.z || 0;
              if ((r || s || o) && (n = `translate3d(${r}px, ${s}px, ${o}px) `), (1 !== e.x || 1 !== e.y) && (n += `scale(${1/e.x}, ${1/e.y}) `), i) {
                let {
                  transformPerspective: t,
                  rotate: e,
                  rotateX: r,
                  rotateY: s,
                  skewX: o,
                  skewY: a
                } = i;
                t && (n = `perspective(${t}px) ${n}`), e && (n += `rotate(${e}deg) `), r && (n += `rotateX(${r}deg) `), s && (n += `rotateY(${s}deg) `), o && (n += `skewX(${o}deg) `), a && (n += `skewY(${a}deg) `)
              }
              let a = t.x.scale * e.x,
                l = t.y.scale * e.y;
              return (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`), n || "none"
            }(this.projectionDeltaWithTransform, this.treeScale, r);
            i && (s = i(r, s)), t.transform = s;
            let {
              x: o,
              y: a
            } = this.projectionDelta;
            for (let e in t.transformOrigin = `${100*o.origin}% ${100*a.origin}% 0`, n.animationValues ? t.opacity = n === this ? r.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : r.opacityExit : t.opacity = n === this ? void 0 !== r.opacity ? r.opacity : "" : void 0 !== r.opacityExit ? r.opacityExit : 0, eR) {
              if (void 0 === r[e]) continue;
              let {
                correct: i,
                applyTo: o,
                isCSSVariable: a
              } = eR[e], l = "none" === s ? r[e] : i(r[e], n);
              if (o) {
                let e = o.length;
                for (let i = 0; i < e; i++) t[o[i]] = l
              } else a ? this.options.visualElement.renderState.vars[e] = l : t[e] = l
            }
            this.options.layoutId && (t.pointerEvents = n === this ? e4(e?.pointerEvents) || "" : "none")
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach(t => t.currentAnimation?.stop()), this.root.nodes.forEach(rJ), this.root.sharedNodes.clear()
          }
        }
      }

      function rX(t) {
        t.updateLayout()
      }

      function rq(t) {
        let e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
          let {
            layoutBox: i,
            measuredBox: n
          } = t.layout, {
            animationType: r
          } = t.options, s = e.source !== t.layout.source;
          "size" === r ? nJ(t => {
            let n = s ? e.measuredBox[t] : e.layoutBox[t],
              r = nY(n);
            n.min = i[t].min, n.max = n.min + r
          }) : sn(r, e.layoutBox, i) && nJ(n => {
            let r = s ? e.measuredBox[n] : e.layoutBox[n],
              o = nY(i[n]);
            r.max = r.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[n].max = t.relativeTarget[n].min + o)
          });
          let o = ea();
          nq(o, i, e.layoutBox);
          let a = ea();
          s ? nq(a, t.applyTransform(n, !0), e.measuredBox) : nq(a, i, e.layoutBox);
          let l = !rF(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let {
                snapshot: r,
                layout: s
              } = n;
              if (r && s) {
                let o = eu();
                nZ(o, e.layoutBox, r.layoutBox);
                let a = eu();
                nZ(a, i, s.layoutBox), rI(o, a) || (u = !0), n.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = o, t.relativeParent = n)
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: e,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: u
          })
        } else if (t.isLead()) {
          let {
            onExitComplete: e
          } = t.options;
          e && e()
        }
        t.options.transition = void 0
      }

      function rK(t) {
        tu.value && rN.nodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
      }

      function rG(t) {
        t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
      }

      function rZ(t) {
        t.clearSnapshot()
      }

      function rJ(t) {
        t.clearMeasurements()
      }

      function rQ(t) {
        t.isLayoutDirty = !1
      }

      function r0(t) {
        let {
          visualElement: e
        } = t.options;
        e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
      }

      function r1(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
      }

      function r2(t) {
        t.resolveTargetDelta()
      }

      function r5(t) {
        t.calcProjection()
      }

      function r4(t) {
        t.resetSkewAndRotation()
      }

      function r3(t) {
        t.removeLeadSnapshot()
      }

      function r9(t, e, i) {
        t.translate = A(e.translate, 0, i), t.scale = A(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
      }

      function r7(t, e, i, n) {
        t.min = A(e.min, i.min, n), t.max = A(e.max, i.max, n)
      }

      function r8(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
      }
      let r6 = {
          duration: .45,
          ease: [.4, 0, .1, 1]
        },
        st = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
        se = st("applewebkit/") && !st("chrome/") ? Math.round : to;

      function si(t) {
        t.min = se(t.min), t.max = se(t.max)
      }

      function sn(t, e, i) {
        return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(rB(e) - rB(i)))
      }

      function sr(t) {
        return t !== t.root && t.scroll?.wasRoot
      }
      let ss = rY({
          attachResizeListener: (t, e) => nU(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        so = {
          current: void 0
        },
        sa = rY({
          measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
          }),
          defaultParent: () => {
            if (!so.current) {
              let t = new ss({});
              t.mount(window), t.setOptions({
                layoutScroll: !0
              }), so.current = t
            }
            return so.current
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none"
          },
          checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
        });

      function sl(t, e) {
        let i = function(t, e, i) {
            if (t instanceof EventTarget) return [t];
            if ("string" == typeof t) {
              let e = document,
                i = (void 0) ?? e.querySelectorAll(t);
              return i ? Array.from(i) : []
            }
            return Array.from(t)
          }(t),
          n = new AbortController;
        return [i, {
          passive: !0,
          ...e,
          signal: n.signal
        }, () => n.abort()]
      }

      function su(t) {
        return !("touch" === t.pointerType || nz.x || nz.y)
      }

      function sh(t, e, i) {
        let {
          props: n
        } = t;
        t.animationState && n.whileHover && t.animationState.setActive("whileHover", "Start" === i);
        let r = n["onHover" + i];
        r && td.postRender(() => r(e, nW(e)))
      }
      class sd extends nL {
        mount() {
          let {
            current: t
          } = this.node;
          t && (this.unmount = function(t, e, i = {}) {
            let [n, r, s] = sl(t, i), o = t => {
              if (!su(t)) return;
              let {
                target: i
              } = t, n = e(i, t);
              if ("function" != typeof n || !i) return;
              let s = t => {
                su(t) && (n(t), i.removeEventListener("pointerleave", s))
              };
              i.addEventListener("pointerleave", s, r)
            };
            return n.forEach(t => {
              t.addEventListener("pointerenter", o, r)
            }), s
          }(t, (t, e) => (sh(this.node, e, "Start"), t => sh(this.node, t, "End"))))
        }
        unmount() {}
      }
      class sc extends nL {
        constructor() {
          super(...arguments), this.isActive = !1
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible")
          } catch (e) {
            t = !0
          }
          t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
        }
        onBlur() {
          this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
        }
        mount() {
          this.unmount = id(nU(this.node.current, "focus", () => this.onFocus()), nU(this.node.current, "blur", () => this.onBlur()))
        }
        unmount() {}
      }
      var sp = i(1438);
      let sf = (t, e) => !!e && (t === e || sf(t, e.parentElement)),
        sm = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        sg = new WeakSet;

      function sy(t) {
        return e => {
          "Enter" === e.key && t(e)
        }
      }

      function sv(t, e) {
        t.dispatchEvent(new PointerEvent("pointer" + e, {
          isPrimary: !0,
          bubbles: !0
        }))
      }
      let sx = (t, e) => {
        let i = t.currentTarget;
        if (!i) return;
        let n = sy(() => {
          if (sg.has(i)) return;
          sv(i, "down");
          let t = sy(() => {
            sv(i, "up")
          });
          i.addEventListener("keyup", t, e), i.addEventListener("blur", () => sv(i, "cancel"), e)
        });
        i.addEventListener("keydown", n, e), i.addEventListener("blur", () => i.removeEventListener("keydown", n), e)
      };

      function sw(t) {
        return nN(t) && !(nz.x || nz.y)
      }

      function sb(t, e, i) {
        let {
          props: n
        } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
        t.animationState && n.whileTap && t.animationState.setActive("whileTap", "Start" === i);
        let r = n["onTap" + ("End" === i ? "" : i)];
        r && td.postRender(() => r(e, nW(e)))
      }
      class sS extends nL {
        mount() {
          let {
            current: t
          } = this.node;
          t && (this.unmount = function(t, e, i = {}) {
            let [n, r, s] = sl(t, i), o = t => {
              let n = t.currentTarget;
              if (!sw(t)) return;
              sg.add(n);
              let s = e(n, t),
                o = (t, e) => {
                  window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", l), sg.has(n) && sg.delete(n), sw(t) && "function" == typeof s && s(t, {
                    success: e
                  })
                },
                a = t => {
                  o(t, n === window || n === document || i.useGlobalTarget || sf(n, t.target))
                },
                l = t => {
                  o(t, !1)
                };
              window.addEventListener("pointerup", a, r), window.addEventListener("pointercancel", l, r)
            };
            return n.forEach(t => {
              (i.useGlobalTarget ? window : t).addEventListener("pointerdown", o, r), (0, sp.R)(t) && (t.addEventListener("focus", t => sx(t, r)), sm.has(t.tagName) || -1 !== t.tabIndex || t.hasAttribute("tabindex") || (t.tabIndex = 0))
            }), s
          }(t, (t, e) => (sb(this.node, e, "Start"), (t, {
            success: e
          }) => sb(this.node, t, e ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
          }))
        }
        unmount() {}
      }
      let sT = new WeakMap,
        sP = new WeakMap,
        sA = t => {
          let e = sT.get(t.target);
          e && e(t)
        },
        sC = t => {
          t.forEach(sA)
        },
        sM = {
          some: 0,
          all: 1
        };
      class sE extends nL {
        constructor() {
          super(...arguments), this.hasEnteredView = !1, this.isInView = !1
        }
        startObserver() {
          this.unmount();
          let {
            viewport: t = {}
          } = this.node.getProps(), {
            root: e,
            margin: i,
            amount: n = "some",
            once: r
          } = t, s = {
            root: e ? e.current : void 0,
            rootMargin: i,
            threshold: "number" == typeof n ? n : sM[n]
          };
          return function(t, e, i) {
            let n = function({
              root: t,
              ...e
            }) {
              let i = t || document;
              sP.has(i) || sP.set(i, {});
              let n = sP.get(i),
                r = JSON.stringify(e);
              return n[r] || (n[r] = new IntersectionObserver(sC, {
                root: t,
                ...e
              })), n[r]
            }(e);
            return sT.set(t, i), n.observe(t), () => {
              sT.delete(t), n.unobserve(t)
            }
          }(this.node.current, s, t => {
            let {
              isIntersecting: e
            } = t;
            if (this.isInView === e || (this.isInView = e, r && !e && this.hasEnteredView)) return;
            e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
            let {
              onViewportEnter: i,
              onViewportLeave: n
            } = this.node.getProps(), s = e ? i : n;
            s && s(t)
          })
        }
        mount() {
          this.startObserver()
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let {
            props: t,
            prevProps: e
          } = this.node;
          ["amount", "margin", "root"].some(function({
            viewport: t = {}
          }, {
            viewport: e = {}
          } = {}) {
            return i => t[i] !== e[i]
          }(t, e)) && this.startObserver()
        }
        unmount() {}
      }
      let sk = function(t, e) {
        if ("undefined" == typeof Proxy) return ir;
        let i = new Map,
          n = (i, n) => ir(i, n, t, e);
        return new Proxy((t, e) => n(t, e), {
          get: (r, s) => "create" === s ? n : (i.has(s) || i.set(s, ir(s, void 0, t, e)), i.get(s))
        })
      }({
        animation: {
          Feature: nO
        },
        exit: {
          Feature: nB
        },
        inView: {
          Feature: sE
        },
        tap: {
          Feature: sS
        },
        focus: {
          Feature: sc
        },
        hover: {
          Feature: sd
        },
        pan: {
          Feature: rs
        },
        drag: {
          Feature: rn,
          ProjectionNode: sa,
          MeasureLayout: rc
        },
        layout: {
          ProjectionNode: sa,
          MeasureLayout: rc
        }
      }, (t, e) => eW(t) ? new eU(e) : new eD(e, {
        allowProjection: t !== s.Fragment
      }))
    },
    2124: function(t, e, i) {
      "use strict";
      i.d(e, {
        j: function() {
          return n
        }
      });
      let n = "undefined" != typeof window
    },
    4893: function(t, e, i) {
      "use strict";
      i.d(e, {
        h: function() {
          return r
        }
      });
      var n = i(7174);

      function r(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current
      }
    },
    1065: function(t, e, i) {
      "use strict";
      i.d(e, {
        L: function() {
          return r
        }
      });
      var n = i(7174);
      let r = i(2124).j ? n.useLayoutEffect : n.useEffect
    },
    1438: function(t, e, i) {
      "use strict";
      i.d(e, {
        R: function() {
          return r
        }
      });
      var n = i(7624);

      function r(t) {
        return (0, n.K)(t) && "offsetHeight" in t
      }
    },
    7624: function(t, e, i) {
      "use strict";

      function n(t) {
        return "object" == typeof t && null !== t
      }
      i.d(e, {
        K: function() {
          return n
        }
      })
    }
  }
]);