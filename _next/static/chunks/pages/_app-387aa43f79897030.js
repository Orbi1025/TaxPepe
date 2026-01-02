(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2888],
  {
    242: function (n, e, t) {
      var o = {
        "./ar/common": [1111, 1111],
        "./ar/common.json": [1111, 1111],
        "./ar/home": [609, 609],
        "./ar/home.json": [609, 609],
        "./ar/services": [4791, 4791],
        "./ar/services.json": [4791, 4791],
        "./bn/common": [371, 371],
        "./bn/common.json": [371, 371],
        "./bn/home": [2481, 2481],
        "./bn/home.json": [2481, 2481],
        "./bn/services": [8788, 8788],
        "./bn/services.json": [8788, 8788],
        "./de/common": [7660, 1545],
        "./de/common.json": [7660, 1545],
        "./de/home": [8948, 8948],
        "./de/home.json": [8948, 8948],
        "./de/services": [3836, 3836],
        "./de/services.json": [3836, 3836],
        "./en/common": [464, 464],
        "./en/common.json": [464, 464],
        "./en/home": [2482, 2482],
        "./en/home.json": [2482, 2482],
        "./en/services": [6987, 6987],
        "./en/services.json": [6987, 6987],
        "./es/common": [357, 357],
        "./es/common.json": [357, 357],
        "./es/home": [6891, 6891],
        "./es/home.json": [6891, 6891],
        "./es/services": [5089, 5089],
        "./es/services.json": [5089, 5089],
        "./fr/common": [5167, 5167],
        "./fr/common.json": [5167, 5167],
        "./fr/home": [1660, 1660],
        "./fr/home.json": [1660, 1660],
        "./fr/services": [2798, 2798],
        "./fr/services.json": [2798, 2798],
        "./hi/common": [6729, 6729],
        "./hi/common.json": [6729, 6729],
        "./hi/home": [8945, 8945],
        "./hi/home.json": [8945, 8945],
        "./hi/services": [8783, 8783],
        "./hi/services.json": [8783, 8783],
        "./id/common": [1610, 1610],
        "./id/common.json": [1610, 1610],
        "./id/home": [6903, 6903],
        "./id/home.json": [6903, 6903],
        "./id/services": [7027, 7027],
        "./id/services.json": [7027, 7027],
        "./it/common": [9486, 9486],
        "./it/common.json": [9486, 9486],
        "./it/home": [3765, 3765],
        "./it/home.json": [3765, 3765],
        "./it/services": [8891, 8891],
        "./it/services.json": [8891, 8891],
        "./ja/common": [459, 459],
        "./ja/common.json": [459, 459],
        "./ja/home": [8769, 8769],
        "./ja/home.json": [8769, 8769],
        "./ja/services": [7465, 7465],
        "./ja/services.json": [7465, 7465],
        "./ko/common": [5271, 5271],
        "./ko/common.json": [5271, 5271],
        "./ko/home": [2853, 2853],
        "./ko/home.json": [2853, 2853],
        "./ko/services": [4745, 4745],
        "./ko/services.json": [4745, 4745],
        "./pt/common": [1400, 1400],
        "./pt/common.json": [1400, 1400],
        "./pt/home": [2983, 4766],
        "./pt/home.json": [2983, 4766],
        "./pt/services": [7034, 7034],
        "./pt/services.json": [7034, 7034],
        "./ru/common": [7247, 7247],
        "./ru/common.json": [7247, 7247],
        "./ru/home": [2503, 2503],
        "./ru/home.json": [2503, 2503],
        "./ru/services": [5377, 5377],
        "./ru/services.json": [5377, 5377],
        "./tr/common": [2973, 2973],
        "./tr/common.json": [2973, 2973],
        "./tr/home": [7646, 7646],
        "./tr/home.json": [7646, 7646],
        "./tr/services": [6358, 6358],
        "./tr/services.json": [6358, 6358],
        "./zh/common": [6671, 6671],
        "./zh/common.json": [6671, 6671],
        "./zh/home": [3056, 3056],
        "./zh/home.json": [3056, 3056],
        "./zh/services": [9013, 9013],
        "./zh/services.json": [9013, 9013],
      };
      function r(n) {
        if (!t.o(o, n))
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + n + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          });
        var e = o[n],
          r = e[0];
        return t.e(e[1]).then(function () {
          return t.t(r, 19);
        });
      }
      (r.keys = function () {
        return Object.keys(o);
      }),
        (r.id = 242),
        (n.exports = r);
    },
    3442: function (n, e, t) {
      "use strict";
      var o,
        r = t(1776);
      "function" === typeof r.createContext &&
        (o = (0, r.createContext)({
          t: function (n) {
            return Array.isArray(n) ? n[0] : n;
          },
          lang: "",
        })),
        (e.Z = o);
    },
    5064: function (n, e, t) {
      "use strict";
      t.d(e, {
        Z: function () {
          return p;
        },
      });
      var o = function (n, e, t, o) {
          return new (t || (t = Promise))(function (r, i) {
            function c(n) {
              try {
                u(o.next(n));
              } catch (e) {
                i(e);
              }
            }
            function a(n) {
              try {
                u(o.throw(n));
              } catch (e) {
                i(e);
              }
            }
            function u(n) {
              var e;
              n.done
                ? r(n.value)
                : ((e = n.value),
                  e instanceof t
                    ? e
                    : new t(function (n) {
                        n(e);
                      })).then(c, a);
            }
            u((o = o.apply(n, e || [])).next());
          });
        },
        r = function (n, e) {
          var t,
            o,
            r,
            i,
            c = {
              label: 0,
              sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: a(0), throw: a(1), return: a(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function a(a) {
            return function (u) {
              return (function (a) {
                if (t) throw new TypeError("Generator is already executing.");
                for (; i && ((i = 0), a[0] && (c = 0)), c; )
                  try {
                    if (
                      ((t = 1),
                      o &&
                        (r =
                          2 & a[0]
                            ? o.return
                            : a[0]
                            ? o.throw || ((r = o.return) && r.call(o), 0)
                            : o.next) &&
                        !(r = r.call(o, a[1])).done)
                    )
                      return r;
                    switch (((o = 0), r && (a = [2 & a[0], r.value]), a[0])) {
                      case 0:
                      case 1:
                        r = a;
                        break;
                      case 4:
                        return c.label++, { value: a[1], done: !1 };
                      case 5:
                        c.label++, (o = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = c.ops.pop()), c.trys.pop();
                        continue;
                      default:
                        if (
                          !(r = (r = c.trys).length > 0 && r[r.length - 1]) &&
                          (6 === a[0] || 2 === a[0])
                        ) {
                          c = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!r || (a[1] > r[0] && a[1] < r[3]))
                        ) {
                          c.label = a[1];
                          break;
                        }
                        if (6 === a[0] && c.label < r[1]) {
                          (c.label = r[1]), (r = a);
                          break;
                        }
                        if (r && c.label < r[2]) {
                          (c.label = r[2]), c.ops.push(a);
                          break;
                        }
                        r[2] && c.ops.pop(), c.trys.pop();
                        continue;
                    }
                    a = e.call(n, c);
                  } catch (u) {
                    (a = [6, u]), (o = 0);
                  } finally {
                    t = r = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, u]);
            };
          }
        },
        i = function (n, e, t) {
          if (t || 2 === arguments.length)
            for (var o, r = 0, i = e.length; r < i; r++)
              (!o && r in e) ||
                (o || (o = Array.prototype.slice.call(e, 0, r)), (o[r] = e[r]));
          return n.concat(o || Array.prototype.slice.call(e));
        };
      function c(n) {
        return n.reduce(function (n, e) {
          return n.concat(e);
        }, []);
      }
      function a(n, e, t) {
        var a = n.pages,
          u = void 0 === a ? {} : a;
        return o(this, void 0, void 0, function () {
          var n,
            a,
            s,
            l,
            f,
            p,
            v,
            d = this;
          return r(this, function (m) {
            switch (m.label) {
              case 0:
                return (
                  (n = "rgx:"),
                  (a = function (n) {
                    return o(d, void 0, void 0, function () {
                      return r(this, function (e) {
                        return [2, "function" === typeof n ? n(t) : n || []];
                      });
                    });
                  }),
                  (s = Object.keys(u).reduce(function (t, o) {
                    return (
                      o.substring(0, n.length) === n &&
                        new RegExp(o.replace(n, "")).test(e) &&
                        t.push(a(u[o])),
                      t
                    );
                  }, [])),
                  (l = [[]]),
                  [4, a(u["*"])]
                );
              case 1:
                return (
                  (f = [i.apply(void 0, l.concat([m.sent(), !0]))]),
                  [4, a(u[e])]
                );
              case 2:
                return (
                  (p = [i.apply(void 0, f.concat([m.sent(), !0]))]),
                  (v = c),
                  [4, Promise.all(s)]
                );
              case 3:
                return [
                  2,
                  i.apply(void 0, p.concat([v.apply(void 0, [m.sent()]), !0])),
                ];
            }
          });
        });
      }
      var u = t(6407),
        s = function () {
          return (
            (s =
              Object.assign ||
              function (n) {
                for (var e, t = 1, o = arguments.length; t < o; t++)
                  for (var r in (e = arguments[t]))
                    Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n;
              }),
            s.apply(this, arguments)
          );
        },
        l = function (n, e, t, o) {
          return new (t || (t = Promise))(function (r, i) {
            function c(n) {
              try {
                u(o.next(n));
              } catch (e) {
                i(e);
              }
            }
            function a(n) {
              try {
                u(o.throw(n));
              } catch (e) {
                i(e);
              }
            }
            function u(n) {
              var e;
              n.done
                ? r(n.value)
                : ((e = n.value),
                  e instanceof t
                    ? e
                    : new t(function (n) {
                        n(e);
                      })).then(c, a);
            }
            u((o = o.apply(n, e || [])).next());
          });
        },
        f = function (n, e) {
          var t,
            o,
            r,
            i,
            c = {
              label: 0,
              sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: a(0), throw: a(1), return: a(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function a(a) {
            return function (u) {
              return (function (a) {
                if (t) throw new TypeError("Generator is already executing.");
                for (; i && ((i = 0), a[0] && (c = 0)), c; )
                  try {
                    if (
                      ((t = 1),
                      o &&
                        (r =
                          2 & a[0]
                            ? o.return
                            : a[0]
                            ? o.throw || ((r = o.return) && r.call(o), 0)
                            : o.next) &&
                        !(r = r.call(o, a[1])).done)
                    )
                      return r;
                    switch (((o = 0), r && (a = [2 & a[0], r.value]), a[0])) {
                      case 0:
                      case 1:
                        r = a;
                        break;
                      case 4:
                        return c.label++, { value: a[1], done: !1 };
                      case 5:
                        c.label++, (o = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = c.ops.pop()), c.trys.pop();
                        continue;
                      default:
                        if (
                          !(r = (r = c.trys).length > 0 && r[r.length - 1]) &&
                          (6 === a[0] || 2 === a[0])
                        ) {
                          c = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!r || (a[1] > r[0] && a[1] < r[3]))
                        ) {
                          c.label = a[1];
                          break;
                        }
                        if (6 === a[0] && c.label < r[1]) {
                          (c.label = r[1]), (r = a);
                          break;
                        }
                        if (r && c.label < r[2]) {
                          (c.label = r[2]), c.ops.push(a);
                          break;
                        }
                        r[2] && c.ops.pop(), c.trys.pop();
                        continue;
                    }
                    a = e.call(n, c);
                  } catch (u) {
                    (a = [6, u]), (o = 0);
                  } finally {
                    t = r = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, u]);
            };
          }
        };
      function p(n) {
        var e, o;
        return (
          void 0 === n && (n = {}),
          l(this, void 0, void 0, function () {
            var r, i, c, l, p, v, d;
            return f(this, function (f) {
              switch (f.label) {
                case 0:
                  return (
                    (r = s(
                      s(
                        {},
                        ("undefined" === typeof window ? t.g : window)
                          .i18nConfig
                      ),
                      n
                    )),
                    (i = r.localesToIgnore || ["default"]),
                    (c =
                      (null === (e = r.req) || void 0 === e
                        ? void 0
                        : e.locale) ||
                      r.locale ||
                      (null === (o = r.router) || void 0 === o
                        ? void 0
                        : o.locale) ||
                      r.defaultLocale ||
                      ""),
                    r.pathname
                      ? i.includes(c)
                        ? [2, { __lang: c }]
                        : (r.loaderName ||
                            !1 === r.loader ||
                            console.warn(
                              '\ud83d\udea8 [next-translate] You can remove the "loadNamespaces" helper, unless you set "loader: false" in your i18n config file.'
                            ),
                          (l =
                            (function (n) {
                              void 0 === n && (n = "");
                              return n.length > 1 && n.endsWith("/")
                                ? n.slice(0, -1)
                                : n;
                            })(r.pathname.replace(/\/index$/, "")) || "/"),
                          [4, a(r, l, r)])
                      : (console.warn(
                          '\ud83d\udea8 [next-translate] You forgot to pass the "pathname" inside "loadNamespaces" configuration'
                        ),
                        [2, { __lang: c }])
                  );
                case 1:
                  return (
                    (p = f.sent()),
                    (v = function () {
                      return Promise.resolve({});
                    }),
                    [
                      4,
                      Promise.all(
                        p.map(function (n) {
                          return "function" === typeof r.loadLocaleFrom
                            ? r.loadLocaleFrom(c, n).catch(function () {
                                return {};
                              })
                            : v();
                        })
                      ),
                    ]
                  );
                case 2:
                  return (
                    (d = f.sent() || []),
                    (function (n, e) {
                      var t = e.page,
                        o = e.lang,
                        r = e.namespaces;
                      if (!1 !== n.logBuild && "undefined" === typeof window) {
                        var i =
                            null == u.env.NODE_DISABLE_COLORS &&
                            null == u.env.NO_COLOR &&
                            "dumb" !== u.env.TERM &&
                            "0" !== u.env.FORCE_COLOR,
                          c = function (n) {
                            return i ? "\x1b[36m".concat(n, "\x1b[0m") : n;
                          };
                        console.log(
                          c("next-translate"),
                          "- compiled page:",
                          c(t),
                          "- locale:",
                          c(o),
                          "- namespaces:",
                          c(r.join(", ")),
                          "- used loader:",
                          c(n.loaderName || "-")
                        );
                      }
                    })(r, { page: l, lang: c, namespaces: p }),
                    [
                      2,
                      {
                        __lang: c,
                        __namespaces: p.reduce(function (n, e, t) {
                          return (n[e] = d[t] || null), n;
                        }, {}),
                      },
                    ]
                  );
              }
            });
          })
        );
      }
    },
    1730: function (n, e, t) {
      "use strict";
      t.d(e, {
        Z: function () {
          return r;
        },
      });
      var o = function () {
        return (
          (o =
            Object.assign ||
            function (n) {
              for (var e, t = 1, o = arguments.length; t < o; t++)
                for (var r in (e = arguments[t]))
                  Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
              return n;
            }),
          o.apply(this, arguments)
        );
      };
      function r(n) {
        var e = n.config,
          t = n.allNamespaces,
          r = n.pluralRules,
          s = n.lang,
          l = e.logger,
          f = void 0 === l ? u : l,
          p = e.allowEmptyStrings,
          v = void 0 === p || p,
          d = function (n, t) {
            return Array.isArray(n)
              ? n.map(function (n) {
                  return d(n, t);
                })
              : n instanceof Object
              ? a({ obj: n, query: t, config: e, lang: s })
              : c({ text: n, query: t, config: e, lang: s });
          },
          m = function (n, c, a) {
            var u;
            void 0 === n && (n = "");
            var s = Array.isArray(n) ? n[0] : n,
              l = e.nsSeparator,
              p = void 0 === l ? ":" : l,
              h = e.loggerEnvironment,
              g = void 0 === h ? "browser" : h,
              y = (function (n, e) {
                if (!e) return { i18nKey: n };
                var t = n.indexOf(e);
                return t < 0
                  ? { i18nKey: n }
                  : {
                      namespace: n.slice(0, t),
                      i18nKey: n.slice(t + e.length),
                    };
              })(s, p),
              w = y.i18nKey,
              b = y.namespace,
              j =
                void 0 === b
                  ? null !== (u = null === a || void 0 === a ? void 0 : a.ns) &&
                    void 0 !== u
                    ? u
                    : e.defaultNS
                  : b,
              _ = (j && t[j]) || {},
              x = (function (n, e, t, o, r) {
                if (!r || "number" !== typeof r.count) return t;
                var c = "".concat(t, "_").concat(r.count);
                if (void 0 !== i(e, c, o)) return c;
                var a = "".concat(t, "_").concat(n.select(r.count));
                if (void 0 !== i(e, a, o)) return a;
                var u = "".concat(t, ".").concat(r.count);
                if (void 0 !== i(e, u, o)) return u;
                var s = "".concat(t, ".").concat(n.select(r.count));
                return void 0 !== i(e, s, o) ? s : t;
              })(r, _, w, e, c),
              O = i(_, x, e, a),
              T = "object" === typeof O ? JSON.parse(JSON.stringify(O)) : O,
              k =
                "undefined" === typeof T ||
                ("object" === typeof T && !Object.keys(T).length) ||
                ("" === T && !v),
              E =
                "string" ===
                typeof (null === a || void 0 === a ? void 0 : a.fallback)
                  ? [a.fallback]
                  : (null === a || void 0 === a ? void 0 : a.fallback) || [];
            if (
              (!k ||
                ("both" !== g &&
                  g !== ("undefined" === typeof window ? "node" : "browser")) ||
                f({ namespace: j, i18nKey: w }),
              k && Array.isArray(E) && E.length)
            ) {
              var L = E[0],
                P = E.slice(1);
              if ("string" === typeof L)
                return m(L, c, o(o({}, a), { fallback: P }));
            }
            return k &&
              a &&
              a.hasOwnProperty("default") &&
              !(null === E || void 0 === E ? void 0 : E.length)
              ? a.default
                ? d(a.default, c)
                : a.default
              : k
              ? s
              : d(T, c);
          };
        return m;
      }
      function i(n, e, t, o) {
        void 0 === e && (e = ""), void 0 === o && (o = { returnObjects: !1 });
        var r = (t || {}).keySeparator,
          i = void 0 === r ? "." : r,
          c = i ? e.split(i) : [e];
        if (e === i && o.returnObjects) return n;
        var a = c.reduce(function (n, e) {
          if ("string" === typeof n) return {};
          var t = n[e];
          return t || ("string" === typeof t ? t : {});
        }, n);
        return "string" === typeof a || (a instanceof Object && o.returnObjects)
          ? a
          : void 0;
      }
      function c(n) {
        var e = n.text,
          t = n.query,
          o = n.config,
          r = n.lang;
        if (!e || !t) return e || "";
        var i = function (n) {
            return n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
          },
          c = o.interpolation || {},
          a = c.format,
          u = void 0 === a ? null : a,
          s = c.prefix,
          l = void 0 === s ? "{{" : s,
          f = c.suffix,
          p = void 0 === f ? "}}" : f,
          v = "" === p ? "" : "(?:[\\s,]+([\\w-]*))?\\s*".concat(i(p));
        return Object.keys(t).reduce(function (n, e) {
          var o = new RegExp("".concat(i(l), "\\s*").concat(e).concat(v), "gm");
          return n.replace(o, function (n, o) {
            return o && u ? u(t[e], o, r) : t[e];
          });
        }, e);
      }
      function a(n) {
        var e = n.obj,
          t = n.query,
          o = n.config,
          r = n.lang;
        return t && 0 !== Object.keys(t).length
          ? (Object.keys(e).forEach(function (n) {
              e[n] instanceof Object &&
                a({ obj: e[n], query: t, config: o, lang: r }),
                "string" === typeof e[n] &&
                  (e[n] = c({ text: e[n], query: t, config: o, lang: r }));
            }),
            e)
          : e;
      }
      function u(n) {
        n.namespace, n.i18nKey;
      }
    },
    6880: function (n, e, t) {
      "use strict";
      t.d(e, {
        Z: function () {
          return f;
        },
      });
      var o = t(1776),
        r = function () {
          return (
            (r =
              Object.assign ||
              function (n) {
                for (var e, t = 1, o = arguments.length; t < o; t++)
                  for (var r in (e = arguments[t]))
                    Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n;
              }),
            r.apply(this, arguments)
          );
        };
      function i(n, e) {
        if ("string" !== typeof e) return n;
        return function (t, o, i) {
          return n(t, o, r({ ns: e }, i));
        };
      }
      var c = t(3442),
        a = t(1730);
      function u(n) {
        var e,
          t =
            null !== (e = globalThis.__NEXT_TRANSLATE__) && void 0 !== e
              ? e
              : {},
          o = t.lang,
          r = t.namespaces,
          c = t.config,
          u = c.localesToIgnore || ["default"],
          s = !o || u.includes(o);
        return {
          t: i(
            (0, a.Z)({
              config: c,
              allNamespaces: r,
              pluralRules: new Intl.PluralRules(s ? void 0 : o),
              lang: o,
            }),
            n
          ),
          lang: o,
        };
      }
      var s = function () {
        return (
          (s =
            Object.assign ||
            function (n) {
              for (var e, t = 1, o = arguments.length; t < o; t++)
                for (var r in (e = arguments[t]))
                  Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
              return n;
            }),
          s.apply(this, arguments)
        );
      };
      function l(n) {
        var e = (0, o.useContext)(c.Z);
        return (0, o.useMemo)(
          function () {
            return s(s({}, e), { t: i(e.t, n) });
          },
          [e, n]
        );
      }
      function f(n) {
        var e = globalThis.__NEXT_TRANSLATE__;
        return ((null === e || void 0 === e ? void 0 : e.config) ? u : l)(n);
      }
    },
    6407: function (n, e, t) {
      "use strict";
      var o, r;
      n.exports =
        (null == (o = t.g.process) ? void 0 : o.env) &&
        "object" === typeof (null == (r = t.g.process) ? void 0 : r.env)
          ? t.g.process
          : t(6046);
    },
    6046: function (n) {
      !(function () {
        var e = {
            229: function (n) {
              var e,
                t,
                o = (n.exports = {});
              function r() {
                throw new Error("setTimeout has not been defined");
              }
              function i() {
                throw new Error("clearTimeout has not been defined");
              }
              function c(n) {
                if (e === setTimeout) return setTimeout(n, 0);
                if ((e === r || !e) && setTimeout)
                  return (e = setTimeout), setTimeout(n, 0);
                try {
                  return e(n, 0);
                } catch (o) {
                  try {
                    return e.call(null, n, 0);
                  } catch (o) {
                    return e.call(this, n, 0);
                  }
                }
              }
              !(function () {
                try {
                  e = "function" === typeof setTimeout ? setTimeout : r;
                } catch (n) {
                  e = r;
                }
                try {
                  t = "function" === typeof clearTimeout ? clearTimeout : i;
                } catch (n) {
                  t = i;
                }
              })();
              var a,
                u = [],
                s = !1,
                l = -1;
              function f() {
                s &&
                  a &&
                  ((s = !1),
                  a.length ? (u = a.concat(u)) : (l = -1),
                  u.length && p());
              }
              function p() {
                if (!s) {
                  var n = c(f);
                  s = !0;
                  for (var e = u.length; e; ) {
                    for (a = u, u = []; ++l < e; ) a && a[l].run();
                    (l = -1), (e = u.length);
                  }
                  (a = null),
                    (s = !1),
                    (function (n) {
                      if (t === clearTimeout) return clearTimeout(n);
                      if ((t === i || !t) && clearTimeout)
                        return (t = clearTimeout), clearTimeout(n);
                      try {
                        t(n);
                      } catch (e) {
                        try {
                          return t.call(null, n);
                        } catch (e) {
                          return t.call(this, n);
                        }
                      }
                    })(n);
                }
              }
              function v(n, e) {
                (this.fun = n), (this.array = e);
              }
              function d() {}
              (o.nextTick = function (n) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var t = 1; t < arguments.length; t++)
                    e[t - 1] = arguments[t];
                u.push(new v(n, e)), 1 !== u.length || s || c(p);
              }),
                (v.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (o.title = "browser"),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ""),
                (o.versions = {}),
                (o.on = d),
                (o.addListener = d),
                (o.once = d),
                (o.off = d),
                (o.removeListener = d),
                (o.removeAllListeners = d),
                (o.emit = d),
                (o.prependListener = d),
                (o.prependOnceListener = d),
                (o.listeners = function (n) {
                  return [];
                }),
                (o.binding = function (n) {
                  throw new Error("process.binding is not supported");
                }),
                (o.cwd = function () {
                  return "/";
                }),
                (o.chdir = function (n) {
                  throw new Error("process.chdir is not supported");
                }),
                (o.umask = function () {
                  return 0;
                });
            },
          },
          t = {};
        function o(n) {
          var r = t[n];
          if (void 0 !== r) return r.exports;
          var i = (t[n] = { exports: {} }),
            c = !0;
          try {
            e[n](i, i.exports, o), (c = !1);
          } finally {
            c && delete t[n];
          }
          return i.exports;
        }
        o.ab = "//";
        var r = o(229);
        n.exports = r;
      })();
    },
    3906: function (n, e, t) {
      n.exports = t(8058);
    },
    3420: function (n, e, t) {
      n.exports = t(4603);
    },
    1118: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return t(194);
        },
      ]);
    },
    194: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return _;
          },
        });
      var o = t(7963),
        r = t(9482),
        i = t(6734),
        c = t(608),
        a = t(1776),
        u = t(3906),
        s = t(3442),
        l = t(1730),
        f = t(6880),
        p = function () {
          return (
            (p =
              Object.assign ||
              function (n) {
                for (var e, t = 1, o = arguments.length; t < o; t++)
                  for (var r in (e = arguments[t]))
                    Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n;
              }),
            p.apply(this, arguments)
          );
        },
        v = (0, a.createContext)({ ns: {}, config: {} });
      function d(n) {
        var e = n.lang,
          t = n.namespaces,
          o = void 0 === t ? {} : t,
          r = n.children,
          i = n.config,
          c = void 0 === i ? {} : i,
          d = (0, f.Z)().lang,
          m = (0, u.useRouter)() || {},
          h = m.locale,
          g = m.defaultLocale,
          y = (0, a.useContext)(v),
          w = p(
            p(
              p(
                {},
                (function () {
                  var n, e;
                  return "undefined" === typeof window
                    ? {}
                    : (null ===
                        (e =
                          null === (n = window.__NEXT_DATA__) || void 0 === n
                            ? void 0
                            : n.props) || void 0 === e
                        ? void 0
                        : e.__namespaces) || {};
                })()
              ),
              y.ns
            ),
            o
          ),
          b = e || d || h || g || "",
          j = p(p({}, y.config), c),
          _ = j.localesToIgnore || ["default"],
          x = !b || _.includes(b),
          O = new Intl.PluralRules(x ? void 0 : b),
          T = (0, l.Z)({
            config: j,
            allNamespaces: w,
            pluralRules: O,
            lang: b,
          });
        return a.createElement(
          s.Z.Provider,
          { value: { lang: b, t: T } },
          a.createElement(v.Provider, { value: { ns: w, config: j } }, r)
        );
      }
      var m = t(5064),
        h = function () {
          return (
            (h =
              Object.assign ||
              function (n) {
                for (var e, t = 1, o = arguments.length; t < o; t++)
                  for (var r in (e = arguments[t]))
                    Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n;
              }),
            h.apply(this, arguments)
          );
        },
        g = function (n, e, t, o) {
          return new (t || (t = Promise))(function (r, i) {
            function c(n) {
              try {
                u(o.next(n));
              } catch (e) {
                i(e);
              }
            }
            function a(n) {
              try {
                u(o.throw(n));
              } catch (e) {
                i(e);
              }
            }
            function u(n) {
              var e;
              n.done
                ? r(n.value)
                : ((e = n.value),
                  e instanceof t
                    ? e
                    : new t(function (n) {
                        n(e);
                      })).then(c, a);
            }
            u((o = o.apply(n, e || [])).next());
          });
        },
        y = function (n, e) {
          var t,
            o,
            r,
            i,
            c = {
              label: 0,
              sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: a(0), throw: a(1), return: a(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function a(a) {
            return function (u) {
              return (function (a) {
                if (t) throw new TypeError("Generator is already executing.");
                for (; i && ((i = 0), a[0] && (c = 0)), c; )
                  try {
                    if (
                      ((t = 1),
                      o &&
                        (r =
                          2 & a[0]
                            ? o.return
                            : a[0]
                            ? o.throw || ((r = o.return) && r.call(o), 0)
                            : o.next) &&
                        !(r = r.call(o, a[1])).done)
                    )
                      return r;
                    switch (((o = 0), r && (a = [2 & a[0], r.value]), a[0])) {
                      case 0:
                      case 1:
                        r = a;
                        break;
                      case 4:
                        return c.label++, { value: a[1], done: !1 };
                      case 5:
                        c.label++, (o = a[1]), (a = [0]);
                        continue;
                      case 7:
                        (a = c.ops.pop()), c.trys.pop();
                        continue;
                      default:
                        if (
                          !(r = (r = c.trys).length > 0 && r[r.length - 1]) &&
                          (6 === a[0] || 2 === a[0])
                        ) {
                          c = 0;
                          continue;
                        }
                        if (
                          3 === a[0] &&
                          (!r || (a[1] > r[0] && a[1] < r[3]))
                        ) {
                          c.label = a[1];
                          break;
                        }
                        if (6 === a[0] && c.label < r[1]) {
                          (c.label = r[1]), (r = a);
                          break;
                        }
                        if (r && c.label < r[2]) {
                          (c.label = r[2]), c.ops.push(a);
                          break;
                        }
                        r[2] && c.ops.pop(), c.trys.pop();
                        continue;
                    }
                    a = e.call(n, c);
                  } catch (u) {
                    (a = [6, u]), (o = 0);
                  } finally {
                    t = r = 0;
                  }
                if (5 & a[0]) throw a[1];
                return { value: a[0] ? a[1] : void 0, done: !0 };
              })([a, u]);
            };
          }
        };
      t(3814), t(6092);
      var w = function (n) {
          var e;
          null === (e = window.dataLayer) ||
            void 0 === e ||
            e.push({ event: "pageview", page: n });
        },
        b = t(3420),
        j = t.n(b);
      var _ = (function (n, e) {
        var o = this;
        function r(t) {
          var o,
            r,
            i = e.defaultLocale;
          return a.createElement(
            d,
            {
              lang:
                (null === (o = t.pageProps) || void 0 === o
                  ? void 0
                  : o.__lang) ||
                t.__lang ||
                i,
              namespaces:
                (null === (r = t.pageProps) || void 0 === r
                  ? void 0
                  : r.__namespaces) || t.__namespaces,
              config: e,
            },
            a.createElement(n, h({}, t))
          );
        }
        return (
          void 0 === e && (e = {}),
          e.isLoader ||
            !1 === e.loader ||
            console.warn(
              '\ud83d\udea8 [next-translate] You can remove the "appWithI18n" HoC on the _app.js, unless you set "loader: false" in your i18n config file.'
            ),
          "function" === typeof e.staticsHoc && e.staticsHoc(r, n),
          "undefined" === typeof window
            ? (t.g.i18nConfig = e)
            : (window.i18nConfig = e),
          e.skipInitialProps ||
            (r.getInitialProps = function (t) {
              return g(o, void 0, void 0, function () {
                var o, r, i;
                return y(this, function (c) {
                  switch (c.label) {
                    case 0:
                      return (
                        (o = h(h({}, t.ctx || {}), t || {})),
                        (r = { pageProps: {} }),
                        n.getInitialProps ? [4, n.getInitialProps(t)] : [3, 2]
                      );
                    case 1:
                      (r = c.sent() || {}), (c.label = 2);
                    case 2:
                      return (
                        (i = [h({}, r)]),
                        [
                          4,
                          (0, m.Z)(
                            h(h(h({}, o), e), { loaderName: "getInitialProps" })
                          ),
                        ]
                      );
                    case 3:
                      return [2, h.apply(void 0, i.concat([c.sent()]))];
                  }
                });
              });
            }),
          r
        );
      })(
        function (n) {
          var e = n.Component,
            t = n.pageProps,
            r = (0, u.useRouter)();
          return (
            (0, a.useEffect)(
              function () {
                return (
                  r.events.on("routeChangeComplete", w),
                  function () {
                    r.events.off("routeChangeComplete", w);
                  }
                );
              },
              [r.events]
            ),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(j(), {
                  id: "gtag-base",
                  strategy: "afterInteractive",
                  dangerouslySetInnerHTML: {
                    __html:
                      "\n            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n            })(window,document,'script','dataLayer', '".concat(
                        "GTM-T32TXC26",
                        "');\n          "
                      ),
                  },
                }),
                (0, i.jsx)(j(), {
                  strategy: "afterInteractive",
                  dangerouslySetInnerHTML: {
                    __html:
                      ' window.__lc = window.__lc || {};\n    window.__lc.license = 19254165;\n    window.__lc.integration_name = "manual_onboarding";\n    window.__lc.product_name = "livechat";\n    ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can\'t use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))',
                  },
                }),
                (0, i.jsx)(e, (0, o._)({}, t)),
              ],
            })
          );
        },
        (0, r._)((0, o._)({}, c), {
          isLoader: !0,
          skipInitialProps: !0,
          loadLocaleFrom:
            (c && c.loadLocaleFrom) ||
            function (n, e) {
              return t(242)("./".concat(n, "/").concat(e)).then(function (n) {
                return n.default;
              });
            },
        })
      );
    },
    3814: function () {},
    6092: function () {},
    608: function (n) {
      "use strict";
      n.exports = JSON.parse(
        '{"locales":["en","pt","de","es","zh","fr","tr","it","id","ru","ar","ko","ja","hi","bn"],"defaultLocale":"en","pages":{"*":["common"],"/":["common","home"],"/privacy-policy":["common","services","home"],"/terms-and-conditions":["common","services","home"],"/cookie-policy":["common","services","home"]},"localeDetection":false}'
      );
    },
  },
  function (n) {
    var e = function (e) {
      return n((n.s = e));
    };
    n.O(0, [9774, 179], function () {
      return e(1118), e(8058);
    });
    var t = n.O();
    _N_E = t;
  },
]);
//# sourceMappingURL=_app-387aa43f79897030.js.map
