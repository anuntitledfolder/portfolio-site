import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  F as t,
  N as ee,
  T as n,
  b as te,
  c as r,
  m as i,
  s as a,
  u as o,
  w as ne,
  x as re,
} from "./react.Dq5lJgOf.mjs";
import { T as s, a as c, r as l } from "./motion.D3Y82hha.mjs";
import {
  $ as ie,
  C as u,
  M as d,
  N as f,
  R as ae,
  at as p,
  b as m,
  c as h,
  ft as g,
  ht as _,
  it as v,
  j as y,
  m as b,
  n as oe,
  nt as x,
  o as S,
  rt as C,
  t as w,
  u as T,
  v as E,
} from "./framer.d4MlGAvC.mjs";
import { n as D, t as O } from "./Ticker.DWS2Akdo.mjs";
import { i as k, n as se, r as A, t as ce } from "./W6ZCCcKuw.57CkUy80.mjs";
import { i as le, n as ue, r as j, t as de } from "./TPvCPpffK.CJ-lgUmj.mjs";
import { i as fe, n as pe, r as me, t as he } from "./iBI2c5jgM.QEoKO0-0.mjs";
import { n as M, r as N } from "./m7LV8a4BX.uXGbWXfC.mjs";
var P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (r(),
      ae(),
      l(),
      n(),
      D(),
      fe(),
      le(),
      k(),
      M(),
      (P = _(s.header)),
      (F = _(s.nav)),
      (I = _(s.div)),
      (L = y(O)),
      (R = {
        D5wCD5XBy: `(min-width: 810px) and (max-width: 1199px)`,
        xu21mhxbN: `(max-width: 809px)`,
        ZUH0g96w1: `(min-width: 1200px)`,
      }),
      (z = `framer-ixrcr`),
      (B = {
        D5wCD5XBy: `framer-v-104sihd`,
        xu21mhxbN: `framer-v-ynm0w2`,
        ZUH0g96w1: `framer-v-3t9p9r`,
      }),
      (V = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (H = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        x: 0,
        y: 0,
      }),
      (U = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: { delay: 0.15, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (W = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: { delay: 0.2, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (G = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: { delay: 0.3, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (K = ({ value: e }) =>
        v()
          ? null
          : /*#__PURE__*/ a(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (q = { Desktop: `ZUH0g96w1`, Phone: `xu21mhxbN`, Tablet: `D5wCD5XBy` }),
      (J = ({ height: e, id: t, width: ee, ...n }) => ({
        ...n,
        variant: q[n.variant] ?? n.variant ?? `ZUH0g96w1`,
      })),
      (Y = /*#__PURE__*/ i(function (e, n) {
        let r = re(null),
          i = n ?? r,
          l = ne(),
          { activeLocale: d, setLocale: ae } = p(),
          m = ie(),
          { style: g, className: _, layoutId: v, variant: y, ...D } = J(e);
        (te(() => {
          let e = N(void 0, d);
          if (e.robots) {
            let t = document.querySelector(`meta[name="robots"]`);
            t
              ? t.setAttribute(`content`, e.robots)
              : ((t = document.createElement(`meta`)),
                t.setAttribute(`name`, `robots`),
                t.setAttribute(`content`, e.robots),
                document.head.appendChild(t));
          }
        }, [void 0, d]),
          ee(() => {
            let e = N(void 0, d);
            ((document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport));
          }, [void 0, d]));
        let [k, se] = C(y, R, !1),
          A = u(z, de, ce, he);
        return (
          x({}),
          /*#__PURE__*/ a(S.Provider, {
            value: { primaryVariantId: `ZUH0g96w1`, variantClassNames: B },
            children: /*#__PURE__*/ o(c, {
              id: v ?? l,
              children: [
                /*#__PURE__*/ a(K, {
                  value: `html body { background: var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, rgb(244, 200, 119)); }`,
                }),
                /*#__PURE__*/ o(s.div, {
                  ...D,
                  className: u(A, `framer-3t9p9r`, _),
                  ref: i,
                  style: { ...g },
                  children: [
                    /*#__PURE__*/ o(`aside`, {
                      className: `framer-1650f1z`,
                      "data-framer-name": `Sidebar`,
                      children: [
                        /*#__PURE__*/ o(P, {
                          animate: V,
                          className: `framer-toguoq`,
                          "data-framer-appear-id": `toguoq`,
                          "data-framer-name": `Header`,
                          initial: H,
                          optimized: !0,
                          style: { transformPerspective: 1200 },
                          children: [
                            /*#__PURE__*/ a(b, {
                              breakpoint: k,
                              overrides: {
                                xu21mhxbN: {
                                  background: {
                                    alt: ``,
                                    fit: `fit`,
                                    loading: f((m?.y || 0) + 0 + 0 + 0 + 0 + 30 + 0),
                                    pixelHeight: 2884,
                                    pixelWidth: 2440,
                                    positionX: `center`,
                                    positionY: `center`,
                                    sizes: `296px`,
                                    src: `https://framerusercontent.com/images/kUQMVdLsp51Eoma2tTS2NqfdrY.png`,
                                    srcSet: `https://framerusercontent.com/images/kUQMVdLsp51Eoma2tTS2NqfdrY.png?scale-down-to=1024 866w,https://framerusercontent.com/images/kUQMVdLsp51Eoma2tTS2NqfdrY.png?scale-down-to=2048 1732w,https://framerusercontent.com/images/kUQMVdLsp51Eoma2tTS2NqfdrY.png 2440w`,
                                  },
                                },
                              },
                              children: /*#__PURE__*/ a(h, {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  loading: f((m?.y || 0) + 0 + 0 + 0 + 30 + 0),
                                  pixelHeight: 2884,
                                  pixelWidth: 2440,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `296px`,
                                  src: `https://framerusercontent.com/images/kUQMVdLsp51Eoma2tTS2NqfdrY.png`,
                                  srcSet: `https://framerusercontent.com/images/kUQMVdLsp51Eoma2tTS2NqfdrY.png?scale-down-to=1024 866w,https://framerusercontent.com/images/kUQMVdLsp51Eoma2tTS2NqfdrY.png?scale-down-to=2048 1732w,https://framerusercontent.com/images/kUQMVdLsp51Eoma2tTS2NqfdrY.png 2440w`,
                                },
                                className: `framer-1l8ugdv`,
                              }),
                            }),
                            /*#__PURE__*/ a(E, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ a(t, {
                                children: /*#__PURE__*/ a(`p`, {
                                  className: `framer-styles-preset-t0brxi`,
                                  "data-styles-preset": `TPvCPpffK`,
                                  children: `The X-3 Podcast’s brand identity was crafted to poke fun at the cynical feelings of a player who was just one victory away from advancing in a tournament but couldn’t quite make it.`,
                                }),
                              }),
                              className: `framer-2f575v`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        /*#__PURE__*/ o(F, {
                          animate: U,
                          className: `framer-1uryn3d`,
                          "data-framer-appear-id": `1uryn3d`,
                          "data-framer-name": `Links`,
                          initial: H,
                          optimized: !0,
                          style: { transformPerspective: 1200 },
                          children: [
                            /*#__PURE__*/ a(E, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ a(t, {
                                children: /*#__PURE__*/ a(`p`, {
                                  className: `framer-styles-preset-17qvjw9`,
                                  "data-styles-preset": `W6ZCCcKuw`,
                                  children: /*#__PURE__*/ a(T, {
                                    href: { webPageId: `augiA20Il` },
                                    motionChild: !0,
                                    nodeId: `eqvLFAg5V`,
                                    openInNewTab: !1,
                                    scopeId: `m7LV8a4BX`,
                                    smoothScroll: !1,
                                    children: /*#__PURE__*/ a(s.a, {
                                      className: `framer-styles-preset-1y1gbtr`,
                                      "data-styles-preset": `iBI2c5jgM`,
                                      children: `Home @_"`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-q1fmb`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ a(`div`, {
                              className: `framer-19j9d66`,
                              "data-framer-name": `Line`,
                            }),
                            /*#__PURE__*/ a(E, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ a(t, {
                                children: /*#__PURE__*/ a(`p`, {
                                  className: `framer-styles-preset-17qvjw9`,
                                  "data-styles-preset": `W6ZCCcKuw`,
                                  children: /*#__PURE__*/ a(T, {
                                    href: `mailto:stelzerash@gmail.com`,
                                    motionChild: !0,
                                    nodeId: `gnLEBZsYc`,
                                    openInNewTab: !0,
                                    scopeId: `m7LV8a4BX`,
                                    smoothScroll: !1,
                                    children: /*#__PURE__*/ a(s.a, {
                                      className: `framer-styles-preset-1y1gbtr`,
                                      "data-styles-preset": `iBI2c5jgM`,
                                      children: `Contact`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-1seb2k7`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ a(`div`, {
                              className: `framer-1nh1st7`,
                              "data-framer-name": `Line`,
                            }),
                            /*#__PURE__*/ a(E, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ a(t, {
                                children: /*#__PURE__*/ a(`p`, {
                                  className: `framer-styles-preset-17qvjw9`,
                                  "data-styles-preset": `W6ZCCcKuw`,
                                  children: /*#__PURE__*/ a(T, {
                                    href: `https://www.linkedin.com/in/ashleystelz/`,
                                    motionChild: !0,
                                    nodeId: `jfVD0_51N`,
                                    openInNewTab: !0,
                                    scopeId: `m7LV8a4BX`,
                                    smoothScroll: !1,
                                    children: /*#__PURE__*/ a(s.a, {
                                      className: `framer-styles-preset-1y1gbtr`,
                                      "data-styles-preset": `iBI2c5jgM`,
                                      children: `LinkedIn`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-1v4z91t`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ a(b, {
                      breakpoint: k,
                      overrides: {
                        xu21mhxbN: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: f((m?.y || 0) + 0 + 603.6),
                            pixelHeight: 1883,
                            pixelWidth: 1440,
                            sizes: m?.width || `100vw`,
                            src: `../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ.jpg`,
                            srcSet: `../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ-dbc0c2.jpg 783w,../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ.jpg 1440w`,
                          },
                        },
                      },
                      children: /*#__PURE__*/ o(h, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: f((m?.y || 0) + 0),
                          pixelHeight: 1883,
                          pixelWidth: 1440,
                          sizes: `max(${m?.width || `100vw`} - 350px, 1px)`,
                          src: `../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ.jpg`,
                          srcSet: `../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ-dbc0c2.jpg 783w,../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ.jpg 1440w`,
                        },
                        className: `framer-wkbo6m`,
                        children: [
                          /*#__PURE__*/ o(I, {
                            animate: W,
                            className: `framer-1cy1j5m`,
                            "data-framer-appear-id": `1cy1j5m`,
                            "data-framer-name": `hero`,
                            initial: H,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ a(b, {
                                breakpoint: k,
                                overrides: {
                                  xu21mhxbN: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: f((m?.y || 0) + 0 + 603.6 + 30 + 0 + 0 + 0),
                                      pixelHeight: 1440,
                                      pixelWidth: 2013,
                                      positionX: `49.3%`,
                                      positionY: `39.4%`,
                                      sizes: `calc(max((${m?.width || `100vw`} - 85px) / 2, 50px) * 2 + 25px)`,
                                      src: `https://framerusercontent.com/images/d3uIdtb3IcuuoAEQrvsCPTGcez4.jpg`,
                                      srcSet: `https://framerusercontent.com/images/d3uIdtb3IcuuoAEQrvsCPTGcez4.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/d3uIdtb3IcuuoAEQrvsCPTGcez4.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/d3uIdtb3IcuuoAEQrvsCPTGcez4.jpg 2013w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ a(h, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: f((m?.y || 0) + 0 + 30 + 0 + 0 + 0),
                                    pixelHeight: 1440,
                                    pixelWidth: 2013,
                                    positionX: `49.3%`,
                                    positionY: `39.4%`,
                                    sizes: `calc(max((max(${m?.width || `100vw`} - 350px, 1px) - 85px) / 2, 50px) * 2 + 25px)`,
                                    src: `https://framerusercontent.com/images/d3uIdtb3IcuuoAEQrvsCPTGcez4.jpg`,
                                    srcSet: `https://framerusercontent.com/images/d3uIdtb3IcuuoAEQrvsCPTGcez4.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/d3uIdtb3IcuuoAEQrvsCPTGcez4.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/d3uIdtb3IcuuoAEQrvsCPTGcez4.jpg 2013w`,
                                  },
                                  className: `framer-1xr0xre`,
                                }),
                              }),
                              /*#__PURE__*/ a(`div`, {
                                className: `framer-js8e7h`,
                                children: /*#__PURE__*/ a(E, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ a(t, {
                                    children: /*#__PURE__*/ a(`p`, {
                                      className: `framer-styles-preset-17qvjw9`,
                                      "data-styles-preset": `W6ZCCcKuw`,
                                      children: `Key Illustration`,
                                    }),
                                  }),
                                  className: `framer-yub5bx`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ o(I, {
                            animate: W,
                            className: `framer-1ilndi0`,
                            "data-framer-appear-id": `1ilndi0`,
                            "data-framer-name": `img1`,
                            initial: H,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ a(b, {
                                breakpoint: k,
                                overrides: {
                                  xu21mhxbN: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: f((m?.y || 0) + 0 + 603.6 + 30 + 560.2 + 0 + 0),
                                      pixelHeight: 1080,
                                      pixelWidth: 1920,
                                      positionX: `24.6%`,
                                      positionY: `45.3%`,
                                      sizes: `calc(max((${m?.width || `100vw`} - 85px) / 2, 50px) * 2 + 25px)`,
                                      src: `https://framerusercontent.com/images/VQNARvdQD4XYzi9i1sZq4BBEuaw.png`,
                                      srcSet: `https://framerusercontent.com/images/VQNARvdQD4XYzi9i1sZq4BBEuaw.png?scale-down-to=512 512w,https://framerusercontent.com/images/VQNARvdQD4XYzi9i1sZq4BBEuaw.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/VQNARvdQD4XYzi9i1sZq4BBEuaw.png 1920w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ a(h, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: f((m?.y || 0) + 0 + 30 + 560.2 + 0 + 0),
                                    pixelHeight: 1080,
                                    pixelWidth: 1920,
                                    positionX: `24.6%`,
                                    positionY: `45.3%`,
                                    sizes: `calc(max((max(${m?.width || `100vw`} - 350px, 1px) - 85px) / 2, 50px) * 2 + 25px)`,
                                    src: `https://framerusercontent.com/images/VQNARvdQD4XYzi9i1sZq4BBEuaw.png`,
                                    srcSet: `https://framerusercontent.com/images/VQNARvdQD4XYzi9i1sZq4BBEuaw.png?scale-down-to=512 512w,https://framerusercontent.com/images/VQNARvdQD4XYzi9i1sZq4BBEuaw.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/VQNARvdQD4XYzi9i1sZq4BBEuaw.png 1920w`,
                                  },
                                  className: `framer-1y4zsry`,
                                }),
                              }),
                              /*#__PURE__*/ a(`div`, {
                                className: `framer-1ofd1nk`,
                                children: /*#__PURE__*/ a(E, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ a(t, {
                                    children: /*#__PURE__*/ a(`p`, {
                                      className: `framer-styles-preset-17qvjw9`,
                                      "data-styles-preset": `W6ZCCcKuw`,
                                      children: `Key Illustration closeup`,
                                    }),
                                  }),
                                  className: `framer-1v05ivt`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ o(I, {
                            animate: G,
                            className: `framer-114h70o`,
                            "data-framer-appear-id": `114h70o`,
                            "data-framer-name": `img3`,
                            initial: H,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ a(w, {
                                children: /*#__PURE__*/ a(oe, {
                                  className: `framer-3qa5nk-container`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  nodeId: `Keegrs9H1`,
                                  scopeId: `m7LV8a4BX`,
                                  children: /*#__PURE__*/ a(O, {
                                    alignment: `center`,
                                    direction: `left`,
                                    fadeOptions: {
                                      fadeAlpha: 0.35,
                                      fadeContent: !1,
                                      fadeInset: 0,
                                      fadeWidth: 6,
                                      overflow: !1,
                                    },
                                    gap: 17,
                                    height: `100%`,
                                    hoverFactor: 1,
                                    id: `Keegrs9H1`,
                                    layoutId: `Keegrs9H1`,
                                    padding: 10,
                                    paddingBottom: 10,
                                    paddingLeft: 10,
                                    paddingPerSide: !1,
                                    paddingRight: 10,
                                    paddingTop: 10,
                                    sizingOptions: { heightType: !0, widthType: !0 },
                                    slots: [
                                      /*#__PURE__*/ a(h, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 2884,
                                          intrinsicWidth: 2440,
                                          pixelHeight: 2884,
                                          pixelWidth: 2440,
                                          sizes: `189px`,
                                          src: `https://framerusercontent.com/images/kUQMVdLsp51Eoma2tTS2NqfdrY.png`,
                                          srcSet: `https://framerusercontent.com/images/kUQMVdLsp51Eoma2tTS2NqfdrY.png?scale-down-to=1024 866w,https://framerusercontent.com/images/kUQMVdLsp51Eoma2tTS2NqfdrY.png?scale-down-to=2048 1732w,https://framerusercontent.com/images/kUQMVdLsp51Eoma2tTS2NqfdrY.png 2440w`,
                                        },
                                        className: `framer-oovcy6`,
                                        "data-framer-name": `X3 logo_color`,
                                      }),
                                      /*#__PURE__*/ a(h, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 3096,
                                          intrinsicWidth: 3e3,
                                          pixelHeight: 3096,
                                          pixelWidth: 3e3,
                                          sizes: `240.3101px`,
                                          src: `https://framerusercontent.com/images/xPUsGNSO8EzgW7K6oMmx9kGHq0.png`,
                                          srcSet: `https://framerusercontent.com/images/xPUsGNSO8EzgW7K6oMmx9kGHq0.png?scale-down-to=1024 992w,https://framerusercontent.com/images/xPUsGNSO8EzgW7K6oMmx9kGHq0.png?scale-down-to=2048 1984w,https://framerusercontent.com/images/xPUsGNSO8EzgW7K6oMmx9kGHq0.png 3000w`,
                                        },
                                        className: `framer-1aytnzu`,
                                        "data-framer-name": `X3 logo_variations-04`,
                                      }),
                                      /*#__PURE__*/ a(h, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 3096,
                                          intrinsicWidth: 3e3,
                                          pixelHeight: 3096,
                                          pixelWidth: 3e3,
                                          sizes: `240.3101px`,
                                          src: `https://framerusercontent.com/images/BguGkwTwIk50AjxpCk7BID1yiY8.png`,
                                          srcSet: `https://framerusercontent.com/images/BguGkwTwIk50AjxpCk7BID1yiY8.png?scale-down-to=1024 992w,https://framerusercontent.com/images/BguGkwTwIk50AjxpCk7BID1yiY8.png?scale-down-to=2048 1984w,https://framerusercontent.com/images/BguGkwTwIk50AjxpCk7BID1yiY8.png 3000w`,
                                        },
                                        className: `framer-v9k5no`,
                                        "data-framer-name": `X3 logo_variations-06`,
                                      }),
                                      /*#__PURE__*/ a(h, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 3096,
                                          intrinsicWidth: 3e3,
                                          pixelHeight: 3096,
                                          pixelWidth: 3e3,
                                          sizes: `240px`,
                                          src: `https://framerusercontent.com/images/4NBhhgPhXpE6bo3bI2Km5lhbM.png`,
                                          srcSet: `https://framerusercontent.com/images/4NBhhgPhXpE6bo3bI2Km5lhbM.png?scale-down-to=1024 992w,https://framerusercontent.com/images/4NBhhgPhXpE6bo3bI2Km5lhbM.png?scale-down-to=2048 1984w,https://framerusercontent.com/images/4NBhhgPhXpE6bo3bI2Km5lhbM.png 3000w`,
                                        },
                                        className: `framer-1sagzip`,
                                        "data-framer-name": `X3 logo_variations-07`,
                                      }),
                                      /*#__PURE__*/ a(h, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 3096,
                                          intrinsicWidth: 3e3,
                                          pixelHeight: 3096,
                                          pixelWidth: 3e3,
                                          sizes: `240.3101px`,
                                          src: `https://framerusercontent.com/images/DwFgMhg1W5p4a8Zcb5yAZIqc9OA.png`,
                                          srcSet: `https://framerusercontent.com/images/DwFgMhg1W5p4a8Zcb5yAZIqc9OA.png?scale-down-to=1024 992w,https://framerusercontent.com/images/DwFgMhg1W5p4a8Zcb5yAZIqc9OA.png?scale-down-to=2048 1984w,https://framerusercontent.com/images/DwFgMhg1W5p4a8Zcb5yAZIqc9OA.png 3000w`,
                                        },
                                        className: `framer-q52wlu`,
                                        "data-framer-name": `X3 logo_variations-08`,
                                      }),
                                      /*#__PURE__*/ a(h, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 3096,
                                          intrinsicWidth: 3e3,
                                          pixelHeight: 3096,
                                          pixelWidth: 3e3,
                                          sizes: `240px`,
                                          src: `https://framerusercontent.com/images/t67dRi1iO1EQuwzu0G5SXLVzlys.png`,
                                          srcSet: `https://framerusercontent.com/images/t67dRi1iO1EQuwzu0G5SXLVzlys.png?scale-down-to=1024 992w,https://framerusercontent.com/images/t67dRi1iO1EQuwzu0G5SXLVzlys.png?scale-down-to=2048 1984w,https://framerusercontent.com/images/t67dRi1iO1EQuwzu0G5SXLVzlys.png 3000w`,
                                        },
                                        className: `framer-18738p3`,
                                        "data-framer-name": `X3 logo_variations-09`,
                                      }),
                                      /*#__PURE__*/ a(h, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 3096,
                                          intrinsicWidth: 3e3,
                                          pixelHeight: 3096,
                                          pixelWidth: 3e3,
                                          sizes: `240.3101px`,
                                          src: `https://framerusercontent.com/images/zMqK6RO9VNoT2eP2wKb39a06fnU.png`,
                                          srcSet: `https://framerusercontent.com/images/zMqK6RO9VNoT2eP2wKb39a06fnU.png?scale-down-to=1024 992w,https://framerusercontent.com/images/zMqK6RO9VNoT2eP2wKb39a06fnU.png?scale-down-to=2048 1984w,https://framerusercontent.com/images/zMqK6RO9VNoT2eP2wKb39a06fnU.png 3000w`,
                                        },
                                        className: `framer-1qa3src`,
                                        "data-framer-name": `X3 logo_variations-10`,
                                      }),
                                    ],
                                    speed: 75,
                                    style: { height: `100%`, width: `100%` },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ a(`div`, {
                                className: `framer-1gnzzqw`,
                                children: /*#__PURE__*/ a(E, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ a(t, {
                                    children: /*#__PURE__*/ a(`p`, {
                                      className: `framer-styles-preset-17qvjw9`,
                                      "data-styles-preset": `W6ZCCcKuw`,
                                      children: `Logo color variations `,
                                    }),
                                  }),
                                  className: `framer-ta29m2`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                /*#__PURE__*/ a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (X = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-ixrcr.framer-1fuogwh, .framer-ixrcr .framer-1fuogwh { display: block; }`,
        `.framer-ixrcr.framer-3t9p9r { align-content: flex-start; align-items: flex-start; background-color: var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, #f4c877); display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 50px 0px; position: relative; width: 1200px; }`,
        `.framer-ixrcr .framer-1650f1z { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100vh; justify-content: space-between; left: 0px; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 350px; z-index: 1; }`,
        `.framer-ixrcr .framer-toguoq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px; position: sticky; top: 0px; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-ixrcr .framer-1l8ugdv { flex: none; height: 221px; overflow: hidden; position: relative; width: 296px; }`,
        `.framer-ixrcr .framer-2f575v { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 100%; overflow: hidden; position: relative; white-space: pre-wrap; width: 261px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ixrcr .framer-1uryn3d { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px; position: relative; width: 350px; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-ixrcr .framer-q1fmb, .framer-ixrcr .framer-1seb2k7, .framer-ixrcr .framer-1v4z91t { --framer-paragraph-spacing: 0px; flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }`,
        `.framer-ixrcr .framer-19j9d66, .framer-ixrcr .framer-1nh1st7 { background-color: var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, #4b1d48); flex: none; height: 3px; opacity: 0.56; overflow: visible; position: relative; width: 100%; }`,
        `.framer-ixrcr .framer-wkbo6m { display: grid; flex: 1 0 0px; gap: 25px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: hidden; padding: 30px; position: relative; width: 1px; }`,
        `.framer-ixrcr .framer-1cy1j5m { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; grid-column: span 2; height: min-content; justify-content: center; justify-self: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-ixrcr .framer-1xr0xre, .framer-ixrcr .framer-1y4zsry { aspect-ratio: 1.58 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 500px); overflow: hidden; position: relative; width: 100%; }`,
        `.framer-ixrcr .framer-js8e7h, .framer-ixrcr .framer-1ofd1nk, .framer-ixrcr .framer-1gnzzqw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ixrcr .framer-yub5bx, .framer-ixrcr .framer-1v05ivt, .framer-ixrcr .framer-ta29m2 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-ixrcr .framer-1ilndi0 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; grid-column: span 2; height: min-content; justify-content: center; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-ixrcr .framer-114h70o { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; grid-column: span 2; height: min-content; justify-content: center; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-ixrcr .framer-3qa5nk-container { flex: none; height: 266px; position: relative; width: 100%; }`,
        `.framer-ixrcr .framer-oovcy6 { aspect-ratio: 0.8460471567267683 / 1; height: var(--framer-aspect-ratio-supported, 223px); overflow: visible; position: relative; width: 189px; }`,
        `.framer-ixrcr .framer-1aytnzu, .framer-ixrcr .framer-v9k5no, .framer-ixrcr .framer-1sagzip, .framer-ixrcr .framer-q52wlu, .framer-ixrcr .framer-18738p3, .framer-ixrcr .framer-1qa3src { aspect-ratio: 0.9689922480620154 / 1; height: var(--framer-aspect-ratio-supported, 248px); overflow: visible; position: relative; width: 240px; }`,
        ...ue,
        ...se,
        ...pe,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-ixrcr.framer-3t9p9r { width: 810px; } .framer-ixrcr .framer-1xr0xre, .framer-ixrcr .framer-1y4zsry { height: var(--framer-aspect-ratio-supported, 253px); }}`,
        `@media (max-width: 809px) { .framer-ixrcr.framer-3t9p9r { flex-direction: column; width: 390px; } .framer-ixrcr .framer-1650f1z { gap: 0px; height: min-content; justify-content: center; left: unset; position: relative; top: unset; width: 100%; } .framer-ixrcr .framer-toguoq { position: relative; top: unset; } .framer-ixrcr .framer-wkbo6m { flex: none; width: 100%; } .framer-ixrcr .framer-1xr0xre, .framer-ixrcr .framer-1y4zsry { height: var(--framer-aspect-ratio-supported, 209px); }}`,
      ]),
      (Z = g(Y, X, `framer-ixrcr`)),
      (Z.displayName = `Page 5`),
      (Z.defaultProps = { height: 1766, width: 1200 }),
      m(
        Z,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...L,
          ...d(j),
          ...d(A),
          ...d(me),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `Framerm7LV8a4BX`,
            slots: [],
            annotations: {
              framerIntrinsicHeight: `1766`,
              framerContractVersion: `1`,
              framerDisplayContentsDiv: `false`,
              framerColorSyntax: `true`,
              framerImmutableVariables: `true`,
              framerAutoSizeImages: `true`,
              framerComponentViewportWidth: `true`,
              framerAcceptsLayoutTemplate: `false`,
              framerScrollSections: `* @framerResponsiveScreen`,
              framerIntrinsicWidth: `1200`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"D5wCD5XBy":{"layout":["fixed","auto"]},"xu21mhxbN":{"layout":["fixed","auto"]}}}`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
$();
export { Q as __FramerMetadata__, Z as default };
//# sourceMappingURL=PwLhva2AAMPEDCzXPid4ZxPazptfxYew5AWWHmPin2w.BxUMiAXt.mjs.map
