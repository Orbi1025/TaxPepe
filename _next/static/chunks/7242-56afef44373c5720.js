"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7242],
  {
    7748: function (e, t, a) {
      var n = a(6734),
        l = (a(1776), a(6562)),
        s = a.n(l);
      t.Z = function (e) {
        var t = (0, e.t)("common:footer", {}, { returnObjects: !0 }),
          a = function (e) {
            var t = e.item;
            return (0, n.jsx)("li", {
              className: "list_item",
              children: (0, n.jsx)(s(), {
                className: "list_item_link",
                prefetch: !1,
                href: t.url,
                target: t.target,
                children: t.title,
              }),
            });
          };
        return (0, n.jsx)("footer", {
          className: "footer",
          children: (0, n.jsxs)("div", {
            className: "container",
            children: [
              (0, n.jsxs)("p", {
                className: "footer_copyright",
                children: [
                  "\xa9 Tax Pepe ",
                  new Date().getFullYear(),
                  ". ",
                  t.copy,
                ],
              }),
            ],
          }),
        });
      };
    },
    9491: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = a(1395),
        l = a(6734),
        s = a(1776),
        r = a(6562),
        o = a.n(r),
        i = a(3906);
      var c = function (e) {
          var t = e.locales,
            a = (0, i.useRouter)();
          return (0, l.jsx)("div", {
            className: "lang_list",
            children: (0, l.jsxs)("div", {
              className: "lang_current",
              children: [
                (0, l.jsxs)("div", {
                  className: "lang_current_img",
                  children: [
                    (0, l.jsx)("svg", {
                      className: "curr_img",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: (0, l.jsx)("path", {
                        d: "M9.99999 18.3332C8.8611 18.3332 7.78471 18.1144 6.77082 17.6769C5.75693 17.2394 4.87152 16.6422 4.11457 15.8853C3.35763 15.1283 2.76041 14.2429 2.32291 13.229C1.88541 12.2151 1.66666 11.1387 1.66666 9.99984C1.66666 8.84706 1.88541 7.7672 2.32291 6.76025C2.76041 5.75331 3.35763 4.87136 4.11457 4.11442C4.87152 3.35748 5.75693 2.76025 6.77082 2.32275C7.78471 1.88525 8.8611 1.6665 9.99999 1.6665C11.1528 1.6665 12.2326 1.88525 13.2396 2.32275C14.2465 2.76025 15.1285 3.35748 15.8854 4.11442C16.6424 4.87136 17.2396 5.75331 17.6771 6.76025C18.1146 7.7672 18.3333 8.84706 18.3333 9.99984C18.3333 11.1387 18.1146 12.2151 17.6771 13.229C17.2396 14.2429 16.6424 15.1283 15.8854 15.8853C15.1285 16.6422 14.2465 17.2394 13.2396 17.6769C12.2326 18.1144 11.1528 18.3332 9.99999 18.3332ZM9.99999 16.6248C10.3611 16.1248 10.6736 15.604 10.9375 15.0623C11.2014 14.5207 11.4167 13.9443 11.5833 13.3332H8.41666C8.58332 13.9443 8.7986 14.5207 9.06249 15.0623C9.32638 15.604 9.63888 16.1248 9.99999 16.6248ZM7.83332 16.2915C7.58332 15.8332 7.36457 15.3575 7.17707 14.8644C6.98957 14.3714 6.83332 13.8609 6.70832 13.3332H4.24999C4.65277 14.0276 5.15624 14.6318 5.76041 15.1457C6.36457 15.6596 7.05554 16.0415 7.83332 16.2915ZM12.1667 16.2915C12.9444 16.0415 13.6354 15.6596 14.2396 15.1457C14.8437 14.6318 15.3472 14.0276 15.75 13.3332H13.2917C13.1667 13.8609 13.0104 14.3714 12.8229 14.8644C12.6354 15.3575 12.4167 15.8332 12.1667 16.2915ZM3.54166 11.6665H6.37499C6.33332 11.3887 6.30207 11.1144 6.28124 10.8436C6.26041 10.5728 6.24999 10.2915 6.24999 9.99984C6.24999 9.70817 6.26041 9.42692 6.28124 9.15609C6.30207 8.88525 6.33332 8.61095 6.37499 8.33317H3.54166C3.47221 8.61095 3.42013 8.88525 3.38541 9.15609C3.35068 9.42692 3.33332 9.70817 3.33332 9.99984C3.33332 10.2915 3.35068 10.5728 3.38541 10.8436C3.42013 11.1144 3.47221 11.3887 3.54166 11.6665ZM8.04166 11.6665H11.9583C12 11.3887 12.0312 11.1144 12.0521 10.8436C12.0729 10.5728 12.0833 10.2915 12.0833 9.99984C12.0833 9.70817 12.0729 9.42692 12.0521 9.15609C12.0312 8.88525 12 8.61095 11.9583 8.33317H8.04166C7.99999 8.61095 7.96874 8.88525 7.94791 9.15609C7.92707 9.42692 7.91666 9.70817 7.91666 9.99984C7.91666 10.2915 7.92707 10.5728 7.94791 10.8436C7.96874 11.1144 7.99999 11.3887 8.04166 11.6665ZM13.625 11.6665H16.4583C16.5278 11.3887 16.5799 11.1144 16.6146 10.8436C16.6493 10.5728 16.6667 10.2915 16.6667 9.99984C16.6667 9.70817 16.6493 9.42692 16.6146 9.15609C16.5799 8.88525 16.5278 8.61095 16.4583 8.33317H13.625C13.6667 8.61095 13.6979 8.88525 13.7187 9.15609C13.7396 9.42692 13.75 9.70817 13.75 9.99984C13.75 10.2915 13.7396 10.5728 13.7187 10.8436C13.6979 11.1144 13.6667 11.3887 13.625 11.6665ZM13.2917 6.6665H15.75C15.3472 5.97206 14.8437 5.36789 14.2396 4.854C13.6354 4.34011 12.9444 3.95817 12.1667 3.70817C12.4167 4.1665 12.6354 4.6422 12.8229 5.13525C13.0104 5.62831 13.1667 6.13873 13.2917 6.6665ZM8.41666 6.6665H11.5833C11.4167 6.05539 11.2014 5.479 10.9375 4.93734C10.6736 4.39567 10.3611 3.87484 9.99999 3.37484C9.63888 3.87484 9.32638 4.39567 9.06249 4.93734C8.7986 5.479 8.58332 6.05539 8.41666 6.6665ZM4.24999 6.6665H6.70832C6.83332 6.13873 6.98957 5.62831 7.17707 5.13525C7.36457 4.6422 7.58332 4.1665 7.83332 3.70817C7.05554 3.95817 6.36457 4.34011 5.76041 4.854C5.15624 5.36789 4.65277 5.97206 4.24999 6.6665Z",
                        fill: "#000",
                      }),
                    }),
                    (0, l.jsx)("span", {
                      className: "lang_title",
                      children: t[a.locale],
                    }),
                    (0, l.jsxs)("svg", {
                      className: "dropdown_svg",
                      width: "25",
                      height: "24",
                      viewBox: "0 0 25 24",
                      fill: "#000",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        (0, l.jsx)("g", {
                          clipPath: "url(#clip0_2_582)",
                          children: (0, l.jsx)("path", {
                            d: "M7.97003 10L12.97 15L17.97 10",
                            fill: "#000",
                          }),
                        }),
                        (0, l.jsx)("defs", {
                          children: (0, l.jsx)("clipPath", {
                            id: "clip0_2_582",
                            children: (0, l.jsx)("rect", {
                              width: "24",
                              height: "24",
                              fill: "white",
                              transform: "translate(0.970032)",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: "lang_hidden_wrapper",
                  children: (0, l.jsx)("ol", {
                    className: "lang_hidden",
                    children: a.locales.map(function (e) {
                      return (0,
                      l.jsx)("li", { children: (0, l.jsx)(o(), { href: a.asPath, locale: e, children: (0, l.jsxs)("span", { className: "href_lang", children: [(0, l.jsx)("div", { className: "href_lang_img", children: (0, l.jsx)("img", { width: 10, height: 10, src: "/img/flags/".concat(e, ".svg"), alt: e }) }), t[e]] }) }) }, e);
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        p = a(8163),
        d =
          (a(4260),
          function (e) {
            var t = e.t,
              a = (0, s.useRef)(null),
              r = t("common:menu", {}, { returnObjects: !0 }),
              d = t("common:locales", {}, { returnObjects: !0 }),
              h = (0, n._)((0, s.useState)(!1), 2),
              m = h[0],
              f = h[1],
              u = function () {
                f(!m);
              },
              x = (0, i.useRouter)();
            (0, s.useEffect)(
              function () {
                if (x.asPath.includes("#")) {
                  var e = x.asPath.split("#")[1],
                    t = document.getElementById(e);
                  t && t.scrollIntoView({ behavior: "smooth" });
                }
              },
              [x.asPath]
            ),
              (0, s.useEffect)(
                function () {
                  m
                    ? document.body.classList.add("is_menu_visible")
                    : document.body.classList.remove("is_menu_visible");
                },
                [m]
              ),
              (0, s.useEffect)(
                function () {
                  if (m) {
                    var e = function (e) {
                      var t;
                      m &&
                        (null === (t = a.current) || void 0 === t
                          ? void 0
                          : t.contains(e.target)) &&
                        setTimeout(function () {
                          u();
                        }, 20);
                    };
                    return (
                      window.addEventListener("mousedown", e),
                      function () {
                        window.removeEventListener("mousedown", e);
                      }
                    );
                  }
                },
                [m, a]
              );
            var g = function (e) {
              var t = e.item,
                a = e.i;
              return (0, l.jsx)("li", {
                className: "main_nav_item",
                "data-aos": "fade-up",
                "data-aos-duration": "800",
                "data-aos-easing": "ease-out-quad",
                "data-aos-delay": 100 * (a + 1),
                children:
                  "whitepaper" === t.url
                    ? (0, l.jsx)("a", {
                        className: "nav_left_list_inner_link",
                        href: "http://x.com/TaxPepe_eth",
                        target: t.target,
                        children: "Twitter/X",
                      })
                    : (0, l.jsx)(o(), {
                        prefetch: !1,
                        scroll: !1,
                        className: "nav_left_list_inner_link",
                        href: t.url,
                        target: t.target,
                        children: t.title,
                      }),
              });
            };
            return (0, l.jsx)("header", {
              className: "header",
              children: (0, l.jsx)("div", {
                className: "container",
                children: (0, l.jsxs)("div", {
                  className: "header_wrapper",
                  children: [
                    (0, l.jsx)(o(), {
                      className: "nav_logo",
                      prefetch: !1,
                      href: "/",
                      children: (0, l.jsx)("img", {
                        src: "/img/main/main_logo.png",
                        alt: "Buy $Tax Pepe",
                      }),
                    }),
                    (0, l.jsx)("nav", {
                      ref: a,
                      className: "nav_list_main nav_list",
                      children: (0, l.jsx)("ul", {
                        className: "nav_list_main_items",
                        children: r.list.map(function (e, t) {
                          return (0, l.jsx)(g, { i: t, item: e }, e.title);
                        }),
                      }),
                    }),
                    (0, l.jsx)("svg", {
                      onClick: u,
                      className: "nav_burger",
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      children: (0, l.jsx)("path", {
                        d: "M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z",
                        fill: "#000",
                      }),
                    }),
                    (0, l.jsx)("nav", {
                      className: "nav_list_add nav_list",
                      children: (0, l.jsxs)("ul", {
                        className: "nav_list_add_items",
                        children: [
                          (0, l.jsx)("li", {
                            className: "nav_item",
                            "data-aos": "fade-up",
                            "data-aos-duration": "800",
                            "data-aos-easing": "ease-out-quad",
                            "data-aos-delay": 900,
                            children: (0, l.jsx)(o(), {
                              className: "nav_buy_button",
                              prefetch: !1,
                              href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
                              children: (0, l.jsx)(p.Z, { text: r.sign_up }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            });
          });
    },
    361: function (e, t, a) {
      var n = a(6734);
      a(1776);
      t.Z = function (e) {
        var t = e.isLoading,
          a = e.loaded;
        return (0, n.jsx)("div", {
          className: "page_loader "
            .concat(t ? "loading" : "", " ")
            .concat(a ? "loaded" : ""),
          children: (0, n.jsx)("div", {
            className: "page_loader_content",
            children: (0, n.jsx)("img", {
              src: "/logo.png",
              alt: "$Tax Pepe",
            }),
          }),
        });
      };
    },
    1545: function (e, t, a) {
      var n = a(6734),
        l = (a(1776), a(6562)),
        s = a.n(l);
      a(4260), a(8163);
      t.Z = function () {
        return (0, n.jsx)("div", {
          className: "promo_banner",
          children: (0, n.jsx)("div", {
            className: "container",
            children: (0, n.jsxs)("div", {
              className: "promo_banner_content",
              children: [
                (0, n.jsxs)("p", {
                  children: [
                    "Tax Pepe now LIVE ",
                    (0, n.jsx)("span", {
                      className: "promo_code",
                      children: "$TEPE",
                    }),
                  ],
                }),
                (0, n.jsx)(s(), {
                  className: "nav_buy_button",
                  prefetch: !1,
                  href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
                  children: "BUY $TEPE NOW",
                }),
              ],
            }),
          }),
        });
      };
    },
    8163: function (e, t, a) {
      var n = a(6734);
      a(1776);
      t.Z = function (e) {
        var t = e.text,
          a = e.cta,
          l = e.style;
        return (0, n.jsx)("button", {
          style: l,
          onClick: a || void 0,
          className: "main_button",
          children: t,
        });
      };
    },
    5872: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return d;
        },
      });
      var n = a(6734),
        l = a(1776),
        s = a(150),
        r = a.n(s),
        o = a(3631),
        i = a(992),
        c = a.n(i),
        p = a(3906);
      function d(e) {
        var t = e.children,
          a = e.title,
          s = e.alternate,
          i = e.description,
          d = e.keywords,
          h = e.page,
          m = e.loaded,
          f = e.schemaData,
          u = e.organizationSchemaData,
          x = e.canonical,
          g = (0, p.useRouter)();
        return (
          (0, l.useEffect)(function () {
            o.Z.then(function (e) {
              e && document.body.classList.add("webp");
            });
          }, []),
          (0, l.useEffect)(
            function () {
              m && c().init({ once: !0 });
            },
            [m]
          ),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(r(), {
                children: [
                  (0, n.jsx)("title", { children: a }),
                  (0, n.jsx)("link", {
                    rel: "icon",
                    href: "/img/icons/favicon.png",
                  }),
                  (0, n.jsx)("link", {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/img/icons/apple-touch-icon.png",
                  }),
                  (0, n.jsx)("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "/img/icons/favicon-32x32.png",
                  }),
                  (0, n.jsx)("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "/img/icons/favicon-16x16.png",
                  }),
                  (0, n.jsx)("link", {
                    rel: "mask-icon",
                    href: '/img/icons/safari-pinned-tab.svg" color="#fc5a57',
                  }),
                  (0, n.jsx)("meta", {
                    name: "msapplication-TileColor",
                    content: "#da532c",
                  }),
                  (0, n.jsx)("meta", {
                    name: "theme-color",
                    content: "#ffffff",
                  }),
                  (0, n.jsx)("meta", { name: "description", content: i }),
                  (0, n.jsx)("meta", { name: "keywords", content: d }),
                  (0, n.jsx)("link", {
                    rel: "canonical",
                    href:
                      x && "en" === g.locale
                        ? "https://pepedollar.io" + x
                        : x && "en" !== g.locale
                        ? "https://pepedollar.io/" + g.locale + x
                        : "en" === g.locale
                        ? "https://pepedollar.io"
                        : "https://pepedollar.io/" + g.locale,
                  }),
                  (0, n.jsx)("link", {
                    rel: "alternate",
                    hreflang: "en",
                    href: s
                      ? "".concat("https://pepedollar.io", "/").concat(s)
                      : "".concat("https://pepedollar.io"),
                  }),
                  (0, n.jsx)("link", {
                    rel: "alternate",
                    hreflang: "ar",
                    href: s
                      ? "".concat("https://pepedollar.io", "/ar/").concat(s)
                      : "".concat("https://pepedollar.io", "/ar"),
                  }),
                  (0, n.jsx)("link", {
                    rel: "alternate",
                    hreflang: "bn",
                    href: s
                      ? "".concat("https://pepedollar.io", "/bn/").concat(s)
                      : "".concat("https://pepedollar.io", "/bn"),
                  }),
                  (0, n.jsx)("link", {
                    rel: "alternate",
                    hreflang: "de",
                    href: s
                      ? "".concat("https://pepedollar.io", "/de/").concat(s)
                      : "".concat("https://pepedollar.io", "/de"),
                  }),
                  (0, n.jsx)("link", {
                    rel: "alternate",
                    hreflang: "es",
                    href: s
                      ? "".concat("https://pepedollar.io", "/es/").concat(s)
                      : "".concat("https://pepedollar.io", "/es"),
                  }),
                  (0, n.jsx)("link", {
                    rel: "alternate",
                    hreflang: "fr",
                    href: s
                      ? "".concat("https://pepedollar.io", "/fr/").concat(s)
                      : "".concat("https://pepedollar.io", "/fr"),
                  }),
                  (0, n.jsx)("link", {
                    rel: "alternate",
                    hreflang: "hi",
                    href: s
                      ? "".concat("https://pepedollar.io", "/hi/").concat(s)
                      : "".concat("https://pepedollar.io", "/hi"),
                  }),
                  (0, n.jsx)("link", {
                    rel: "alternate",
                    hreflang: "id",
                    href: s
                      ? "".concat("https://pepedollar.io", "/id/").concat(s)
                      : "".concat("https://pepedollar.io", "/id"),
                  }),
                  (0, n.jsx)("link", {
                    rel: "alternate",
                    hreflang: "it",
                    href: s
                      ? "".concat("https://pepedollar.io", "/it/").concat(s)
                      : "".concat("https://pepedollar.io", "/it"),
                  }),
                  (0, n.jsx)("link", {
                    rel: "alternate",
                    hreflang: "ja",
                    href: s
                      ? "".concat("https://pepedollar.io", "/ja/").concat(s)
                      : "".concat("https://pepedollar.io", "/ja"),
                  }),
                  (0, n.jsx)("link", {
                    rel: "alternate",
                    hreflang: "ko",
                    href: s
                      ? "".concat("https://pepedollar.io", "/ko/").concat(s)
                      : "".concat("https://pepedollar.io", "/ko"),
                  }),
                  (0, n.jsx)("link", {
                    rel: "alternate",
                    hreflang: "pt",
                    href: s
                      ? "".concat("https://pepedollar.io", "/pt/").concat(s)
                      : "".concat("https://pepedollar.io", "/pt"),
                  }),
                  (0, n.jsx)("link", {
                    rel: "alternate",
                    hreflang: "ru",
                    href: s
                      ? "".concat("https://pepedollar.io", "/ru/").concat(s)
                      : "".concat("https://pepedollar.io", "/ru"),
                  }),
                  (0, n.jsx)("link", {
                    rel: "alternate",
                    hreflang: "tr",
                    href: s
                      ? "".concat("https://pepedollar.io", "/tr/").concat(s)
                      : "".concat("https://pepedollar.io", "/tr"),
                  }),
                  (0, n.jsx)("link", {
                    rel: "alternate",
                    hreflang: "zh",
                    href: s
                      ? "".concat("https://pepedollar.io", "/zh/").concat(s)
                      : "".concat("https://pepedollar.io", "/zh"),
                  }),
                  (0, n.jsx)("link", {
                    rel: "alternate",
                    hreflang: "x-default",
                    href: s
                      ? "".concat("https://pepedollar.io", "/").concat(s)
                      : "".concat("https://pepedollar.io"),
                  }),
                  (0, n.jsx)("meta", {
                    property: "og:url",
                    content: "https://pepedollar.io",
                  }),
                  (0, n.jsx)("meta", {
                    property: "og:type",
                    content: "website",
                  }),
                  (0, n.jsx)("meta", { property: "og:title", content: a }),
                  (0, n.jsx)("meta", {
                    property: "og:description",
                    content: i,
                  }),
                  (0, n.jsx)("meta", {
                    property: "og:image",
                    content: "".concat(
                      "https://pepedollar.io",
                      "/img/main/og.png"
                    ),
                  }),
                  (0, n.jsx)("meta", {
                    name: "twitter:card",
                    content: "summary_large_image",
                  }),
                  (0, n.jsx)("meta", {
                    property: "twitter:domain",
                    content: "https://pepedollar.io",
                  }),
                  (0, n.jsx)("meta", {
                    property: "twitter:url",
                    content: "https://pepedollar.io",
                  }),
                  (0, n.jsx)("meta", { name: "twitter:title", content: "" }),
                  (0, n.jsx)("meta", {
                    name: "twitter:description",
                    content: "",
                  }),
                  (0, n.jsx)("meta", {
                    name: "twitter:image",
                    content: "".concat(
                      "https://pepedollar.io",
                      "/img/main/og.png"
                    ),
                  }),
                  f &&
                    (0, n.jsx)("script", {
                      type: "application/ld+json",
                      dangerouslySetInnerHTML: { __html: JSON.stringify(f) },
                    }),
                  u &&
                    (0, n.jsx)("script", {
                      type: "application/ld+json",
                      dangerouslySetInnerHTML: { __html: JSON.stringify(u) },
                    }),
                ],
              }),
              (0, n.jsx)("div", { className: h, children: t }),
            ],
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=7242-56afef44373c5720.js.map
