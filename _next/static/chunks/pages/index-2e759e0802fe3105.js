(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    5557: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(3222);
        },
      ]);
    },
    3222: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          __N_SSG: function () {
            return S;
          },
          default: function () {
            return L;
          },
        });
      var a = t(6027),
        i = t(1395),
        n = t(5482),
        r = t(6734),
        o = t(1776),
        c = t(5872),
        l = t(6880),
        m = t(9491),
        p = t(361),
        h = t(7746),
        d = t(7748),
        u = (t(608), t(5064), t(8163)),
        _ = t(6562),
        g = t.n(_),
        x = function (e) {
          return e || 0 === e
            ? Number(e)
                .toFixed(0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : e;
        };
      var j = function (e) {
        var s,
          t = e.t,
          a = e.apiData,
          n = t("home:banner", {}, { returnObjects: !0 }),
          c = (0, i._)((0, o.useState)(""), 2),
          l = c[0],
          m = c[1],
          p = (0, i._)((0, o.useState)(""), 2),
          h = p[0],
          d = p[1];
        return (
          (0, o.useEffect)(
            function () {
              var e;
              d(
                a && l
                  ? (e =
                      (+l *
                        +(null === a || void 0 === a ? void 0 : a.eth_price)) /
                      +(null === a || void 0 === a
                        ? void 0
                        : a.current_token_price)) || 0 === e
                    ? Number(e)
                        .toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    : e
                  : ""
              );
            },
            [l, a]
          ),
          (0, r.jsxs)("section", {
            className: "banner",
            children: [
              (0, r.jsxs)("picture", {
                children: [
                  (0, r.jsx)("source", {
                    media: "(max-width: 768px)",
                    srcSet:
                      "/img/pages/home/banner/banner_money_small.webp?v=3",
                    type: "image/webp",
                  }),
                  (0, r.jsx)("source", {
                    media: "(min-width: 769px)",
                    srcSet: "/img/pages/home/banner/banner_money.webp?v=3",
                    type: "image/webp",
                  }),
                  (0, r.jsx)("source", {
                    media: "(max-width: 768px)",
                    srcSet: "/img/pages/home/banner/banner_money_small.png?v=3",
                  }),
                  (0, r.jsx)("source", {
                    media: "(min-width: 769px)",
                    srcSet: "/img/pages/home/banner/banner_money.png?v=3",
                  }),
                  (0, r.jsx)("img", {
                    src: "/img/pages/home/banner/banner_money.png?v=2",
                    alt: "Tax Pepe",
                    width: 1441,
                    height: 716,
                    className: "money_img",
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: "container",
                children: (0, r.jsxs)("div", {
                  className: "banner_wrapper",
                  children: [
                    (0, r.jsxs)("div", {
                      className: "banner_title",
                      children: [
                        (0, r.jsxs)("h1", {
                          className: "banner_title_title",
                          children: [
                            (0, r.jsxs)("div", {
                              children: [
                                (0, r.jsx)("span", { children: "Tax" }),
                                (0, r.jsx)("span", {
                                  className: "black",
                                  children: "Pepe",
                                }),
                              ],
                            }),
                            (0, r.jsx)("span", { children: n.title_2 }),
                            (0, r.jsx)("span", { children: n.title_3 }),
                            (0, r.jsx)("span", { children: n.title_4 }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "banner_title_cta",
                          children: [
                            (0, r.jsx)(g(), {
                              className: "buy_cta",
                              prefetch: !1,
                              href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x86985efd75f4d746173bd63d14d0655fe2e1a42a",
                              children: (0, r.jsx)(u.Z, { text: n.buy_cta }),
                            }),
                            (0, r.jsx)(g(), {
                              className: "tg_cta",
                              prefetch: !1,
                              href: "https://t.me/TaxPepe_eth",
                              children: (0, r.jsx)(u.Z, { text: n.tg_cta }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
      var b = function (e) {
        var s = (0, e.t)("home:about", {}, { returnObjects: !0 });
        return (0, r.jsxs)("section", {
          className: "about",
          id: "about",
          children: [
            (0, r.jsxs)("picture", {
              children: [
                (0, r.jsx)("source", {
                  srcSet: "/img/pages/home/about/money_about.webp?v=2",
                  type: "image/webp",
                }),
                (0, r.jsx)("source", {
                  srcSet: "/img/pages/home/about/money_about.png?v=2",
                }),
                (0, r.jsx)("img", {
                  src: "/img/pages/home/about/money_about.png?v=2",
                  alt: "Tax Pepe",
                  width: 1870,
                  height: 320,
                  className: "money_img",
                }),
              ],
            }),
            (0, r.jsxs)("picture", {
              children: [
                (0, r.jsx)("source", {
                  media: "(max-width: 768px)",
                  srcSet: "/img/pages/home/about/about_tribune_small.webp?v=2",
                  type: "image/webp",
                }),
                (0, r.jsx)("source", {
                  media: "(min-width: 769px)",
                  srcSet: "/img/pages/home/about/about_tribune.webp?v=2",
                  type: "image/webp",
                }),
                (0, r.jsx)("source", {
                  media: "(max-width: 768px)",
                  srcSet: "/img/pages/home/about/about_tribune_small.png?v=2",
                }),
                (0, r.jsx)("source", {
                  media: "(min-width: 769px)",
                  srcSet: "/img/pages/home/about/about_tribune.png?v=2",
                }),
                (0, r.jsx)("img", {
                  src: "/img/pages/home/about/about_tribune.png?v=2",
                  alt: "Tax Pepe",
                  width: 1148,
                  height: 1402,
                  className: "tribune_img",
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "container",
              children: (0, r.jsxs)("div", {
                className: "about_wrapper",
                children: [
                  (0, r.jsxs)("div", {
                    className: "about_content",
                    children: [
                      (0, r.jsx)("h2", {
                        className: "about_title",
                        children: s.title,
                      }),
                      (0, r.jsx)("p", {
                        className: "about_text",
                        children: s.text_1,
                      }),
                      (0, r.jsx)("p", {
                        className: "about_text",
                        children: s.text_2,
                      }),
                      (0, r.jsxs)(g(), {
                        className: "buy_cta",
                        prefetch: !1,
                        href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x86985efd75f4d746173bd63d14d0655fe2e1a42a",
                        children: [
                          (0, r.jsx)("img", {
                            src: "/logo.svg",
                            alt: "Buy $TEPE",
                          }),
                          s.cta,
                          " Tax",
                          (0, r.jsx)("span", {
                            className: "buy_cta_black",
                            children: "Pepe",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("picture", {
                    children: [
                      (0, r.jsx)("source", {
                        media: "(max-width: 768px)",
                        srcSet:
                          "/img/pages/home/about/about_picture_small.webp?v=3",
                        type: "image/webp",
                      }),
                      (0, r.jsx)("source", {
                        media: "(min-width: 769px)",
                        srcSet: "/img/pages/home/about/about_picture.webp?v=3",
                        type: "image/webp",
                      }),
                      (0, r.jsx)("source", {
                        media: "(max-width: 768px)",
                        srcSet:
                          "/img/pages/home/about/about_picture_small.png?v=3",
                      }),
                      (0, r.jsx)("source", {
                        media: "(min-width: 769px)",
                        srcSet: "/img/pages/home/about/about_picture.png?v=3",
                      }),
                      (0, r.jsx)("img", {
                        src: "/img/pages/home/about/about_picture.png?v=3",
                        alt: "Tax Pepe",
                        width: 1805,
                        height: 1010,
                        className: "picture_img",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("picture", {
                    children: [
                      (0, r.jsx)("source", {
                        media: "(max-width: 768px)",
                        srcSet:
                          "/img/pages/home/about/about_heroes_small.webp?v=4",
                        type: "image/webp",
                      }),
                      (0, r.jsx)("source", {
                        media: "(min-width: 769px)",
                        srcSet: "/img/pages/home/about/about_heroes.webp?v=4",
                        type: "image/webp",
                      }),
                      (0, r.jsx)("source", {
                        media: "(max-width: 768px)",
                        srcSet:
                          "/img/pages/home/about/about_heroes_small.png?v=4",
                      }),
                      (0, r.jsx)("source", {
                        media: "(min-width: 769px)",
                        srcSet: "/img/pages/home/about/about_heroes.png?v=4",
                      }),
                      (0, r.jsx)("img", {
                        src: "/img/pages/home/about/about_heroes.png?v=4",
                        alt: "Tax Pepe",
                        width: 1658,
                        height: 724,
                        className: "heroes_img",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var v = function (e) {
        var s = (0, e.t)("home:how_to_buy", {}, { returnObjects: !0 }),
          t = function (e) {
            var s = e.item;
            return (0, r.jsxs)("li", {
              className: "how_to_buy_item",
              children: [
                (0, r.jsx)("span", {
                  className: "how_to_buy_item_key",
                  children: s.key,
                }),
                "1" === s.key &&
                  (0, r.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "298",
                    height: "102",
                    viewBox: "0 0 298 102",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                      d: "M1.57542 30.0708C0.440802 30.8575 0.158824 32.4151 0.945599 33.5497C1.73237 34.6844 3.28997 34.9663 4.42458 34.1796L1.57542 30.0708ZM289.456 101.065C290.803 101.366 292.139 100.517 292.44 99.1697L297.34 77.2097C297.641 75.8622 296.792 74.526 295.445 74.2253C294.097 73.9246 292.761 74.7732 292.46 76.1208L288.104 95.6407L268.585 91.285C267.237 90.9843 265.901 91.833 265.6 93.1806C265.299 94.5281 266.148 95.8643 267.496 96.165L289.456 101.065ZM3 32.1252L4.42458 34.1796C38.0412 10.8688 91.4818 -0.20106 145.356 8.40636C199.152 17.0015 253.088 45.1721 287.89 99.9655L290 98.6252L292.11 97.2848C256.412 41.0782 201.098 12.2489 146.144 3.46898C91.2682 -5.2986 36.4588 5.88157 1.57542 30.0708L3 32.1252Z",
                      fill: "white",
                    }),
                  }),
                "2" === s.key &&
                  (0, r.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "282",
                    height: "107",
                    viewBox: "0 0 282 107",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                      d: "M4.76543 70.3551C3.78783 69.3801 2.20492 69.3822 1.2299 70.3598C0.25488 71.3374 0.25697 72.9203 1.23457 73.8953L4.76543 70.3551ZM272.288 1.99271C271.732 0.729029 270.256 0.155596 268.993 0.711909L248.4 9.77755C247.136 10.3339 246.563 11.8093 247.119 13.0729C247.675 14.3366 249.151 14.91 250.414 14.3537L268.719 6.29538L276.778 24.6001C277.334 25.8638 278.809 26.4372 280.073 25.8809C281.337 25.3246 281.91 23.8492 281.354 22.5855L272.288 1.99271ZM3 72.1252L1.23457 73.8953C13.5667 86.195 33.6949 95.6695 57.4492 101.115C81.2569 106.572 108.956 108.041 136.663 104.116C192.066 96.2666 247.905 66.7505 272.33 3.90566L270 3L267.67 2.09434C244.095 62.7495 190.184 91.4834 135.962 99.1654C108.857 103.006 81.7744 101.561 58.5664 96.241C35.3051 90.9089 16.1833 81.7429 4.76543 70.3551L3 72.1252Z",
                      fill: "white",
                    }),
                  }),
                "3" === s.key &&
                  (0, r.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "298",
                    height: "102",
                    viewBox: "0 0 298 102",
                    fill: "none",
                    children: (0, r.jsx)("path", {
                      d: "M1.57542 30.0708C0.440802 30.8575 0.158824 32.4151 0.945599 33.5497C1.73237 34.6844 3.28997 34.9663 4.42458 34.1796L1.57542 30.0708ZM289.456 101.065C290.803 101.366 292.139 100.517 292.44 99.1697L297.34 77.2097C297.641 75.8622 296.792 74.526 295.445 74.2253C294.097 73.9246 292.761 74.7732 292.46 76.1208L288.104 95.6407L268.585 91.285C267.237 90.9843 265.901 91.833 265.6 93.1806C265.299 94.5281 266.148 95.8643 267.496 96.165L289.456 101.065ZM3 32.1252L4.42458 34.1796C38.0412 10.8688 91.4818 -0.20106 145.356 8.40636C199.152 17.0015 253.088 45.1721 287.89 99.9655L290 98.6252L292.11 97.2848C256.412 41.0782 201.098 12.2489 146.144 3.46898C91.2682 -5.2986 36.4588 5.88157 1.57542 30.0708L3 32.1252Z",
                      fill: "white",
                    }),
                  }),
                (0, r.jsxs)("div", {
                  className: "how_to_buy_item_wrapper",
                  children: [
                    (0, r.jsx)("h3", {
                      className: "how_to_buy_item_title",
                      children: s.title,
                    }),
                    (0, r.jsx)("p", {
                      className: "how_to_buy_item_text",
                      children: s.text,
                    }),
                  ],
                }),
              ],
            });
          };
        return (0, r.jsx)("section", {
          className: "how_to_buy",
          id: "how-to-buy",
          children: (0, r.jsx)("div", {
            className: "container",
            children: (0, r.jsxs)("div", {
              className: "how_to_buy_wrapper",
              children: [
                (0, r.jsxs)("h2", {
                  className: "how_to_buy_title",
                  children: [
                    s.title,
                    (0, r.jsx)("br", {}),
                    "Tax Pepe $TEPE",
                  ],
                }),
                (0, r.jsx)("ul", {
                  className: "how_to_buy_items",
                  children: s.items.map(function (e) {
                    return (0, r.jsx)(t, { item: e }, e.key);
                  }),
                }),
              ],
            }),
          }),
        });
      };
      var w = function (e) {
        var s = (0, e.t)("home:tokenomics", {}, { returnObjects: !0 });
        return (0, r.jsxs)("section", {
          className: "tokenomics",
          id: "tokenomics",
          children: [
            (0, r.jsxs)("picture", {
              children: [
                (0, r.jsx)("source", {
                  srcSet: "/img/pages/home/tokenomics/tokenomics_logo.webp?v=2",
                  type: "image/webp",
                }),
                (0, r.jsx)("source", {
                  srcSet: "/img/pages/home/tokenomics/tokenomics_logo.png?v=2",
                }),
                (0, r.jsx)("img", {
                  src: "/img/pages/home/tokenomics/tokenomics_logo.png?v=2",
                  alt: "PEPE Ecosystem",
                  width: 567,
                  height: 490,
                  className: "tokenomics_logo_img",
                }),
              ],
            }),
            (0, r.jsxs)("picture", {
              children: [
                (0, r.jsx)("source", {
                  srcSet:
                    "/img/pages/home/tokenomics/tokenomics_money.webp?v=2",
                  type: "image/webp",
                }),
                (0, r.jsx)("source", {
                  srcSet: "/img/pages/home/tokenomics/tokenomics_money.png?v=2",
                }),
                (0, r.jsx)("img", {
                  src: "/img/pages/home/tokenomics/tokenomics_money.png?v=2",
                  alt: "PEPE Tokenomics",
                  width: 1519,
                  height: 781,
                  className: "tokenomics_money_img",
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "container",
              children: (0, r.jsxs)("div", {
                className: "tokenomics_wrapper",
                children: [
                  (0, r.jsx)("h2", {
                    className: "tokenomics_title",
                    children: s.title,
                  }),
                  (0, r.jsxs)("div", {
                    className: "tokenomics_supply",
                    children: [
                      (0, r.jsxs)("picture", {
                        children: [
                          (0, r.jsx)("source", {
                            srcSet: "/img/pages/home/tokenomics/ball.webp?v=3",
                            type: "image/webp",
                          }),
                          (0, r.jsx)("source", {
                            srcSet: "/img/pages/home/tokenomics/ball.png?v=3",
                          }),
                          (0, r.jsx)("img", {
                            src: "/img/pages/home/tokenomics/ball.png?v=3",
                            alt: "PEPE Tokenomics",
                            width: 206,
                            height: 220,
                            className: "tokenomics_ball_top",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("picture", {
                        children: [
                          (0, r.jsx)("source", {
                            srcSet: "/img/pages/home/tokenomics/ball.webp?v=3",
                            type: "image/webp",
                          }),
                          (0, r.jsx)("source", {
                            srcSet: "/img/pages/home/tokenomics/ball.png?v=3",
                          }),
                          (0, r.jsx)("img", {
                            src: "/img/pages/home/tokenomics/ball.png?v=3",
                            alt: "PEPE Tokenomics",
                            width: 206,
                            height: 220,
                            className: "tokenomics_ball_bottom",
                          }),
                        ],
                      }),
                      (0, r.jsx)("h3", {
                        className: "tokenomics_supply_title",
                        children: s.supply_title,
                      }),
                      (0, r.jsx)("h4", {
                        className: "tokenomics_supply_value",
                        children: x(1e9),
                      }),
                      (0, r.jsxs)("p", {
                        className: "tokenomics_supply_contract",
                        children: [
                          (0, r.jsx)("span", { children: s.contract }),
                          (0, r.jsx)("span", {
                            children:
                              "0x86985efd75f4d746173bd63d14d0655fe2e1a42a",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("p", {
                        className: "tokenomics_supply_audit",
                        children: [
                          (0, r.jsx)("span", { children: s.audit }),
                          (0, r.jsx)("a", {
                            href: "https://etherscan.io/token/0x86985efd75f4d746173bd63d14d0655fe2e1a42a",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: "Audit",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var y = function (e) {
        var s = (0, e.t)("home:ecosystem", {}, { returnObjects: !0 });
        return (0, r.jsx)("section", {
          className: "ecosystem",
          id: "ecosystem",
          children: (0, r.jsx)("div", {
            className: "container",
            children: (0, r.jsxs)("div", {
              className: "ecosystem_wrapper",
              children: [
                (0, r.jsx)("h2", {
                  className: "ecosystem_title",
                  children: s.title,
                }),
                (0, r.jsxs)("ul", {
                  className: "ecosystem_items",
                  children: [
                    (0, r.jsx)("li", {
                      className: "ecosystem_item",
                      children: (0, r.jsxs)("div", {
                        className: "ecosystem_item_img_wrapper",
                        children: [
                          (0, r.jsxs)("picture", {
                            children: [
                              (0, r.jsx)("source", {
                                srcSet:
                                  "/img/pages/home/ecosystem/e_payfi.webp?v=2",
                                type: "image/webp",
                              }),
                              (0, r.jsx)("source", {
                                srcSet:
                                  "/img/pages/home/ecosystem/e_payfi.png?v=2",
                              }),
                              (0, r.jsx)("img", {
                                src: "/img/pages/home/ecosystem/e_payfi.png?v=2",
                                alt: "PEPE Ecosystem",
                                width: 406,
                                height: 506,
                                className: "ecosystem_item_img",
                              }),
                            ],
                          }),
                          (0, r.jsx)("p", {
                            className: "ecosystem_item_text",
                            children: s.puy_fi,
                          }),
                        ],
                      }),
                    }),
                    (0, r.jsx)("li", {
                      className: "ecosystem_item",
                      children: (0, r.jsxs)("div", {
                        className: "ecosystem_item_img_wrapper",
                        children: [
                          (0, r.jsxs)("picture", {
                            children: [
                              (0, r.jsx)("source", {
                                srcSet:
                                  "/img/pages/home/ecosystem/e_gaming.webp?v=2",
                                type: "image/webp",
                              }),
                              (0, r.jsx)("source", {
                                srcSet:
                                  "/img/pages/home/ecosystem/e_gaming.png?v=2",
                              }),
                              (0, r.jsx)("img", {
                                src: "/img/pages/home/ecosystem/e_gaming.png?v=2",
                                alt: "PEPE Ecosystem",
                                width: 532,
                                height: 706,
                                className: "ecosystem_item_img",
                              }),
                            ],
                          }),
                          (0, r.jsx)("p", {
                            className: "ecosystem_item_text",
                            children: s.gaming,
                          }),
                        ],
                      }),
                    }),
                    (0, r.jsx)("li", {
                      className: "ecosystem_item",
                      children: (0, r.jsxs)("div", {
                        className: "ecosystem_item_img_wrapper",
                        children: [
                          (0, r.jsxs)("picture", {
                            children: [
                              (0, r.jsx)("source", {
                                srcSet:
                                  "/img/pages/home/ecosystem/e_defi.webp?v=2",
                                type: "image/webp",
                              }),
                              (0, r.jsx)("source", {
                                srcSet:
                                  "/img/pages/home/ecosystem/e_defi.png?v=2",
                              }),
                              (0, r.jsx)("img", {
                                src: "/img/pages/home/ecosystem/e_defi.png?v=2",
                                alt: "PEPE Ecosystem",
                                width: 406,
                                height: 560,
                                className: "ecosystem_item_img",
                              }),
                            ],
                          }),
                          (0, r.jsx)("p", {
                            className: "ecosystem_item_text",
                            children: s.de_fi,
                          }),
                        ],
                      }),
                    }),
                    (0, r.jsx)("li", {
                      className: "ecosystem_item",
                      children: (0, r.jsxs)("div", {
                        className: "ecosystem_item_img_wrapper",
                        children: [
                          (0, r.jsxs)("picture", {
                            children: [
                              (0, r.jsx)("source", {
                                srcSet:
                                  "/img/pages/home/ecosystem/e_fun.webp?v=2",
                                type: "image/webp",
                              }),
                              (0, r.jsx)("source", {
                                srcSet:
                                  "/img/pages/home/ecosystem/e_fun.png?v=2",
                              }),
                              (0, r.jsx)("img", {
                                src: "/img/pages/home/ecosystem/e_fun.png?v=2",
                                alt: "PEPE Ecosystem",
                                width: 488,
                                height: 672,
                                className: "ecosystem_item_img",
                              }),
                            ],
                          }),
                          (0, r.jsx)("p", {
                            className: "ecosystem_item_text",
                            children: s.fun,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      var N = function (e) {
          var s = e.item;
          e.i;
          return (0, r.jsxs)("li", {
            className: "roadmap_item",
            children: [
              (0, r.jsxs)("div", {
                className: "roadmap_item_phase",
                children: [
                  (0, r.jsx)("img", {
                    src: "/img/pages/home/roadmap/phase_".concat(
                      s.phase,
                      ".png"
                    ),
                    alt: "$TEPE roadmap",
                  }),
                  (0, r.jsxs)("h3", {
                    children: [
                      (0, r.jsx)("span", { children: s.title }),
                      (0, r.jsx)("span", { children: s.phase }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)("ol", {
                className: "roadmap_item_list",
                children: s.items.map(function (e) {
                  return (0,
                  r.jsx)("li", { className: "list_item", children: e }, e);
                }),
              }),
            ],
          });
        },
        f = function (e) {
          var s = (0, e.t)("home:roadmap", {}, { returnObjects: !0 });
          return (0, r.jsx)("section", {
            className: "roadmap",
            id: "roadmap",
            children: (0, r.jsxs)("div", {
              className: "container",
              children: [
                (0, r.jsx)("h2", {
                  className: "roadmap_title",
                  children: s.title,
                }),
                (0, r.jsx)("div", {
                  className: "roadmap_wrapper",
                  children: (0, r.jsx)("ul", {
                    className: "roadmap_items",
                    children: s.items.map(function (e, s) {
                      return (0, r.jsx)(N, { i: s, item: e }, e.phase);
                    }),
                  }),
                }),
              ],
            }),
          });
        };
      var k = function (e) {
          var s = e.item;
          return (0, r.jsxs)("details", {
            className: "details",
            children: [
              (0, r.jsx)("summary", { children: s.title }),
              (0, r.jsx)("ul", {
                className: "content",
                children: s.text.map(function (e, s) {
                  return (0,
                  r.jsx)("li", { children: (0, r.jsx)("p", { children: e }) }, s);
                }),
              }),
            ],
          });
        },
        C = function (e) {
          var s = e.items;
          return (0, r.jsx)("div", {
            className: "accordion_wrapper",
            children: s.map(function (e) {
              return (0, r.jsx)(k, { item: e }, e.key);
            }),
          });
        },
        E = function (e) {
          var s = (0, e.t)("home:faqs", {}, { returnObjects: !0 });
          return (0, r.jsx)("section", {
            className: "faqs",
            children: (0, r.jsx)("div", {
              className: "container",
              children: (0, r.jsxs)("div", {
                className: "faqs_wrapper",
                children: [
                  (0, r.jsx)("h2", {
                    className: "faqs_title",
                    children: s.title,
                  }),
                  (0, r.jsx)("div", {
                    className: "faqs_list",
                    children: (0, r.jsx)(C, { items: s.list }),
                  }),
                ],
              }),
            }),
          });
        };
      var P = t(1545),
        S = !0;
      function L() {
        var e = (0, l.Z)().t,
          s = e("common:seo", {}, { returnObjects: !0 }),
          t = e("home:faqs", {}, { returnObjects: !0 }),
          u = (0, i._)((0, o.useState)(!0), 2),
          _ = u[0],
          g = u[1],
          x = (0, i._)((0, o.useState)(!1), 2),
          N = x[0],
          k = x[1],
          C = (0, i._)(
            (0, o.useState)({
              current_token_price: "0",
              next_token_price: "0",
              percent_tokens: "0",
              percent_usd: "0",
              stage_name: "Stage 1",
              tokens_left_by_stage: "0",
              tokens_sold: "0",
              total_tokens: "0",
              total_usd: "0",
              usd_raised: "0",
            }),
            2
          ),
          S = C[0],
          L = C[1],
          D = (function () {
            var e = (0, a._)(function () {
              return (0, n.Jh)(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [
                      4,
                      h.Z.get("/api/get-data", {
                        headers: { "Content-Type": "application/json" },
                      }),
                    ];
                  case 1:
                    return [2, e.sent()];
                }
              });
            });
            return function () {
              return e.apply(this, arguments);
            };
          })();
        (0, o.useEffect)(function () {
          var e = new Promise(function (e, s) {
              setTimeout(e, 2e3, !0);
            }),
            s = D()
              .then(function (e) {
                L(e.data);
              })
              .catch(function () {
                L({
                  current_token_price: "0",
                  next_token_price: "0",
                  percent_tokens: "0",
                  percent_usd: "0",
                  stage_name: "Stage 1",
                  tokens_left_by_stage: "0",
                  tokens_sold: "0",
                  total_tokens: "0",
                  total_usd: "0",
                  usd_raised: "0",
                });
              });
          Promise.all([e, s]).then(function (e) {
            g(!1), k(!0);
          });
        }, []);
        var Z = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Pepedollar TOKEN",
            url: "https://pepedollar.io",
            about: s.index_page.description,
            image: "https://pepedollar.io/logo.png",
            publisher: { "@id": "https://pepedollar.io/#organization" },
            inLanguage: "en-US",
            copyrightYear: "2024",
            keywords: s.index_page.keywords,
            mainEntity: {
              "@type": "Organization",
              name: "Pepedollar",
              alternateName: "TEPE",
              description: s.index_page.description,
              url: "https://pepedollar.io",
              logo: "https://pepedollar.io/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@pepedollar.io",
                contactType: "Customer Service",
              },
              sameAs: [
                "http://x.com/TaxPepe_eth",
                "https://t.me/TaxPepe_eth",
              ],
            },
          },
          M = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            name: "Pepedollar FAQ - Frequently Asked Questions",
            mainEntity: t.list.map(function (e) {
              return {
                "@type": "Question",
                name: e.title,
                acceptedAnswer: { "@type": "Answer", text: e.text.join(" ") },
              };
            }),
          };
        return (0, r.jsx)(c.Z, {
          loaded: N,
          title: s.index_page.title,
          description: s.index_page.description,
          keywords: s.index_page.keywords,
          page: "index",
          organizationSchemaData: Z,
          schemaData: M,
          children: (0, r.jsxs)("div", {
            className: "shadow",
            children: [
              (0, r.jsx)(P.Z, {}),
              (0, r.jsx)(m.Z, { t: e }),
              (0, r.jsx)(j, { t: e, apiData: S }),
              (0, r.jsxs)("main", {
                className: "main",
                style: { overflowX: "hidden" },
                children: [
                  (0, r.jsx)(b, { t: e }),
                  (0, r.jsx)(v, { t: e }),
                  (0, r.jsx)(y, { t: e }),
                  (0, r.jsx)(f, { t: e }),
                  (0, r.jsx)(w, { t: e }),
                  (0, r.jsx)(E, { t: e }),
                ],
              }),
              (0, r.jsx)(d.Z, { t: e }),
              (0, r.jsx)(p.Z, { isLoading: _, loaded: N }),
            ],
          }),
        });
      }
    },
  },
  function (e) {
    e.O(0, [7026, 7746, 7242, 9774, 2888, 179], function () {
      return (s = 5557), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
//# sourceMappingURL=index-2e759e0802fe3105.js.map
