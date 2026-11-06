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
  w as s,
  x as c,
} from "./react.Dq5lJgOf.mjs";
import { T as l, a as u, r as d } from "./motion.D3Y82hha.mjs";
import {
  $ as f,
  C as p,
  M as m,
  N as h,
  R as ne,
  at as re,
  b as g,
  c as _,
  ft as v,
  ht as y,
  it as b,
  m as x,
  nt as S,
  o as C,
  rt as ie,
  u as w,
  v as T,
} from "./framer.d4MlGAvC.mjs";
import { i as E, n as D, r as O, t as k } from "./W6ZCCcKuw.57CkUy80.mjs";
import { i as ae, n as A, r as oe, t as se } from "./TPvCPpffK.CJ-lgUmj.mjs";
import { i as ce, n as le, r as ue, t as de } from "./UTXu6vuhB.CPC5hcTR.mjs";
import { i as fe, n as j, r as pe, t as M } from "./iBI2c5jgM.QEoKO0-0.mjs";
import { n as N, r as P } from "./NVJGjNvHS.bsmUlHKa.mjs";
var F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (r(),
      ne(),
      d(),
      n(),
      fe(),
      ae(),
      ce(),
      E(),
      N(),
      (F = y(l.header)),
      (I = y(l.nav)),
      (L = y(l.div)),
      (R = {
        ADldF6TKi: `(min-width: 1200px)`,
        rRt0wxrIv: `(min-width: 810px) and (max-width: 1199px)`,
        yCOzxv6ap: `(max-width: 809px)`,
      }),
      (z = `framer-RoLvc`),
      (B = {
        ADldF6TKi: `framer-v-ol1hri`,
        rRt0wxrIv: `framer-v-7a06mg`,
        yCOzxv6ap: `framer-v-fjphn4`,
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
        b()
          ? null
          : /*#__PURE__*/ a(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (q = { Desktop: `ADldF6TKi`, Phone: `yCOzxv6ap`, Tablet: `rRt0wxrIv` }),
      (J = ({ height: e, id: t, width: ee, ...n }) => ({
        ...n,
        variant: q[n.variant] ?? n.variant ?? `ADldF6TKi`,
      })),
      (Y = /*#__PURE__*/ i(function (e, n) {
        let r = c(null),
          i = n ?? r,
          d = s(),
          { activeLocale: m, setLocale: ne } = re(),
          g = f(),
          { style: v, className: y, layoutId: b, variant: E, ...D } = J(e);
        (te(() => {
          let e = P(void 0, m);
          if (e.robots) {
            let t = document.querySelector(`meta[name="robots"]`);
            t
              ? t.setAttribute(`content`, e.robots)
              : ((t = document.createElement(`meta`)),
                t.setAttribute(`name`, `robots`),
                t.setAttribute(`content`, e.robots),
                document.head.appendChild(t));
          }
        }, [void 0, m]),
          ee(() => {
            let e = P(void 0, m);
            ((document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport));
          }, [void 0, m]));
        let [O, ae] = ie(E, R, !1),
          A = p(z, de, se, k, M);
        return (
          S({}),
          /*#__PURE__*/ a(C.Provider, {
            value: { primaryVariantId: `ADldF6TKi`, variantClassNames: B },
            children: /*#__PURE__*/ o(u, {
              id: b ?? d,
              children: [
                /*#__PURE__*/ a(K, {
                  value: `html body { background: var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, rgb(244, 200, 119)); }`,
                }),
                /*#__PURE__*/ o(l.div, {
                  ...D,
                  className: p(A, `framer-ol1hri`, y),
                  ref: i,
                  style: { ...v },
                  children: [
                    /*#__PURE__*/ o(`aside`, {
                      className: `framer-u0p8d5`,
                      "data-framer-name": `Sidebar`,
                      children: [
                        /*#__PURE__*/ o(F, {
                          animate: V,
                          className: `framer-1c8u0g1`,
                          "data-framer-appear-id": `1c8u0g1`,
                          "data-framer-name": `Header`,
                          initial: H,
                          optimized: !0,
                          style: { transformPerspective: 1200 },
                          children: [
                            /*#__PURE__*/ a(T, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ a(t, {
                                children: /*#__PURE__*/ o(`h2`, {
                                  className: `framer-styles-preset-1vx9vuq`,
                                  "data-styles-preset": `UTXu6vuhB`,
                                  children: [`Print`, /*#__PURE__*/ a(`br`, {}), `Products`],
                                }),
                              }),
                              className: `framer-ifrbq6`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ a(T, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ a(t, {
                                children: /*#__PURE__*/ a(`p`, {
                                  className: `framer-styles-preset-t0brxi`,
                                  "data-styles-preset": `TPvCPpffK`,
                                  children: `Throughout my years doing illustration work, I have found nothing more satisfying than bringing my digital work to life through print. I have made a variety of products through print from stickers to experimenting with risograph printing`,
                                }),
                              }),
                              className: `framer-1f7aqtu`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        /*#__PURE__*/ o(I, {
                          animate: U,
                          className: `framer-1sfdduh`,
                          "data-framer-appear-id": `1sfdduh`,
                          "data-framer-name": `Links`,
                          initial: H,
                          optimized: !0,
                          style: { transformPerspective: 1200 },
                          children: [
                            /*#__PURE__*/ a(T, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ a(t, {
                                children: /*#__PURE__*/ a(`p`, {
                                  className: `framer-styles-preset-17qvjw9`,
                                  "data-styles-preset": `W6ZCCcKuw`,
                                  children: /*#__PURE__*/ a(w, {
                                    href: { webPageId: `augiA20Il` },
                                    motionChild: !0,
                                    nodeId: `rMZc5Sr5t`,
                                    openInNewTab: !1,
                                    scopeId: `NVJGjNvHS`,
                                    smoothScroll: !1,
                                    children: /*#__PURE__*/ a(l.a, {
                                      className: `framer-styles-preset-1y1gbtr`,
                                      "data-styles-preset": `iBI2c5jgM`,
                                      children: `Home @_"`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-1kfflnh`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ a(`div`, {
                              className: `framer-1gfxeij`,
                              "data-framer-name": `Line`,
                            }),
                            /*#__PURE__*/ a(T, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ a(t, {
                                children: /*#__PURE__*/ a(`p`, {
                                  className: `framer-styles-preset-17qvjw9`,
                                  "data-styles-preset": `W6ZCCcKuw`,
                                  children: /*#__PURE__*/ a(w, {
                                    href: `mailto:stelzerash@gmail.com`,
                                    motionChild: !0,
                                    nodeId: `Ht8n1wGMu`,
                                    openInNewTab: !0,
                                    scopeId: `NVJGjNvHS`,
                                    smoothScroll: !1,
                                    children: /*#__PURE__*/ a(l.a, {
                                      className: `framer-styles-preset-1y1gbtr`,
                                      "data-styles-preset": `iBI2c5jgM`,
                                      children: `Contact`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-1f0uizx`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ a(`div`, {
                              className: `framer-1np066e`,
                              "data-framer-name": `Line`,
                            }),
                            /*#__PURE__*/ a(T, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ a(t, {
                                children: /*#__PURE__*/ a(`p`, {
                                  className: `framer-styles-preset-17qvjw9`,
                                  "data-styles-preset": `W6ZCCcKuw`,
                                  children: /*#__PURE__*/ a(w, {
                                    href: `https://www.linkedin.com/in/ashleystelz/`,
                                    motionChild: !0,
                                    nodeId: `fp_qTSqLN`,
                                    openInNewTab: !0,
                                    scopeId: `NVJGjNvHS`,
                                    smoothScroll: !1,
                                    children: /*#__PURE__*/ a(l.a, {
                                      className: `framer-styles-preset-1y1gbtr`,
                                      "data-styles-preset": `iBI2c5jgM`,
                                      children: `LinkedIn`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-yyaecu`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ a(x, {
                      breakpoint: O,
                      overrides: {
                        yCOzxv6ap: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: h((g?.y || 0) + 0 + 461.8),
                            pixelHeight: 1883,
                            pixelWidth: 1440,
                            sizes: g?.width || `100vw`,
                            src: `../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ.jpg`,
                            srcSet: `../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ-dbc0c2.jpg 783w,../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ.jpg 1440w`,
                          },
                        },
                      },
                      children: /*#__PURE__*/ o(_, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: h((g?.y || 0) + 0),
                          pixelHeight: 1883,
                          pixelWidth: 1440,
                          sizes: `max(${g?.width || `100vw`} - 350px, 1px)`,
                          src: `../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ.jpg`,
                          srcSet: `../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ-dbc0c2.jpg 783w,../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ.jpg 1440w`,
                        },
                        className: `framer-16wai3v`,
                        children: [
                          /*#__PURE__*/ o(L, {
                            animate: W,
                            className: `framer-n1320t`,
                            "data-framer-appear-id": `n1320t`,
                            "data-framer-name": `hero`,
                            initial: H,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ a(x, {
                                breakpoint: O,
                                overrides: {
                                  yCOzxv6ap: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: h((g?.y || 0) + 0 + 461.8 + 30 + 0 + 0 + 0),
                                      pixelHeight: 1440,
                                      pixelWidth: 2560,
                                      positionX: `center`,
                                      positionY: `top`,
                                      sizes: `calc(max((${g?.width || `100vw`} - 85px) / 2, 50px) * 2 + 25px)`,
                                      src: `../../assets/images/BsTlQH7RLldpCY2YFKgrwGkQJgQ-edcdb9.jpg`,
                                      srcSet: `../../assets/images/BsTlQH7RLldpCY2YFKgrwGkQJgQ-85543f.jpg 512w,../../assets/images/BsTlQH7RLldpCY2YFKgrwGkQJgQ-b6c00a.jpg 1024w,../../assets/images/BsTlQH7RLldpCY2YFKgrwGkQJgQ-0c4a16.jpg 2048w,../../assets/images/BsTlQH7RLldpCY2YFKgrwGkQJgQ-edcdb9.jpg 2560w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ a(_, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: h((g?.y || 0) + 0 + 30 + 0 + 0 + 0),
                                    pixelHeight: 1440,
                                    pixelWidth: 2560,
                                    positionX: `center`,
                                    positionY: `top`,
                                    sizes: `calc(max((max(${g?.width || `100vw`} - 350px, 1px) - 85px) / 2, 50px) * 2 + 25px)`,
                                    src: `../../assets/images/BsTlQH7RLldpCY2YFKgrwGkQJgQ-edcdb9.jpg`,
                                    srcSet: `../../assets/images/BsTlQH7RLldpCY2YFKgrwGkQJgQ-85543f.jpg 512w,../../assets/images/BsTlQH7RLldpCY2YFKgrwGkQJgQ-b6c00a.jpg 1024w,../../assets/images/BsTlQH7RLldpCY2YFKgrwGkQJgQ-0c4a16.jpg 2048w,../../assets/images/BsTlQH7RLldpCY2YFKgrwGkQJgQ-edcdb9.jpg 2560w`,
                                  },
                                  className: `framer-78itc4`,
                                }),
                              }),
                              /*#__PURE__*/ a(`div`, {
                                className: `framer-auo5up`,
                                children: /*#__PURE__*/ a(T, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ a(t, {
                                    children: /*#__PURE__*/ a(`p`, {
                                      className: `framer-styles-preset-17qvjw9`,
                                      "data-styles-preset": `W6ZCCcKuw`,
                                      children: `Risograph print`,
                                    }),
                                  }),
                                  className: `framer-228ojo`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ o(L, {
                            animate: W,
                            className: `framer-n9hz32`,
                            "data-framer-appear-id": `n9hz32`,
                            "data-framer-name": `img1`,
                            initial: H,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ a(x, {
                                breakpoint: O,
                                overrides: {
                                  yCOzxv6ap: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: h((g?.y || 0) + 0 + 461.8 + 30 + 661 + 0 + 0),
                                      pixelHeight: 3024,
                                      pixelWidth: 4032,
                                      sizes: `383px`,
                                      src: `../../assets/images/IEzXQcr0WT9Kj5axkSpcm4YhEtA-a4a0e9.jpg`,
                                      srcSet: `../../assets/images/IEzXQcr0WT9Kj5axkSpcm4YhEtA.jpg 512w,../../assets/images/IEzXQcr0WT9Kj5axkSpcm4YhEtA-f5d38a.jpg 1024w,../../assets/images/IEzXQcr0WT9Kj5axkSpcm4YhEtA-4d1db7.jpg 2048w,../../assets/images/IEzXQcr0WT9Kj5axkSpcm4YhEtA-a4a0e9.jpg 4032w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ a(_, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: h((g?.y || 0) + 0 + 30 + 661 + 0 + 0),
                                    pixelHeight: 3024,
                                    pixelWidth: 4032,
                                    sizes: `383px`,
                                    src: `../../assets/images/IEzXQcr0WT9Kj5axkSpcm4YhEtA-a4a0e9.jpg`,
                                    srcSet: `../../assets/images/IEzXQcr0WT9Kj5axkSpcm4YhEtA.jpg 512w,../../assets/images/IEzXQcr0WT9Kj5axkSpcm4YhEtA-f5d38a.jpg 1024w,../../assets/images/IEzXQcr0WT9Kj5axkSpcm4YhEtA-4d1db7.jpg 2048w,../../assets/images/IEzXQcr0WT9Kj5axkSpcm4YhEtA-a4a0e9.jpg 4032w`,
                                  },
                                  className: `framer-lwnhrd`,
                                }),
                              }),
                              /*#__PURE__*/ a(`div`, {
                                className: `framer-z5s3xu`,
                                children: /*#__PURE__*/ a(T, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ a(t, {
                                    children: /*#__PURE__*/ a(`p`, {
                                      className: `framer-styles-preset-17qvjw9`,
                                      "data-styles-preset": `W6ZCCcKuw`,
                                      children: `Hand-cut stickers`,
                                    }),
                                  }),
                                  className: `framer-tblse1`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ o(L, {
                            animate: W,
                            className: `framer-e279pv`,
                            "data-framer-appear-id": `e279pv`,
                            "data-framer-name": `img2`,
                            initial: H,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ a(x, {
                                breakpoint: O,
                                overrides: {
                                  rRt0wxrIv: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: h((g?.y || 0) + 0 + 30 + 1322 + 0 + 0),
                                      pixelHeight: 1898,
                                      pixelWidth: 1424,
                                      sizes: `383px`,
                                      src: `../../assets/images/fBIIA7RfGGmBhiWs7FAwJVoCOE-992cb8.jpg`,
                                      srcSet: `../../assets/images/fBIIA7RfGGmBhiWs7FAwJVoCOE.jpg 768w,../../assets/images/fBIIA7RfGGmBhiWs7FAwJVoCOE-992cb8.jpg 1424w`,
                                    },
                                  },
                                  yCOzxv6ap: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: h((g?.y || 0) + 0 + 461.8 + 30 + 1322 + 0 + 0),
                                      pixelHeight: 1898,
                                      pixelWidth: 1424,
                                      sizes: `383px`,
                                      src: `../../assets/images/fBIIA7RfGGmBhiWs7FAwJVoCOE-992cb8.jpg`,
                                      srcSet: `../../assets/images/fBIIA7RfGGmBhiWs7FAwJVoCOE.jpg 768w,../../assets/images/fBIIA7RfGGmBhiWs7FAwJVoCOE-992cb8.jpg 1424w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ a(_, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: h((g?.y || 0) + 0 + 30 + 661 + 0 + 0),
                                    pixelHeight: 1898,
                                    pixelWidth: 1424,
                                    sizes: `383px`,
                                    src: `../../assets/images/fBIIA7RfGGmBhiWs7FAwJVoCOE-992cb8.jpg`,
                                    srcSet: `../../assets/images/fBIIA7RfGGmBhiWs7FAwJVoCOE.jpg 768w,../../assets/images/fBIIA7RfGGmBhiWs7FAwJVoCOE-992cb8.jpg 1424w`,
                                  },
                                  className: `framer-150ktqw`,
                                }),
                              }),
                              /*#__PURE__*/ a(`div`, {
                                className: `framer-1ym1n3h`,
                                children: /*#__PURE__*/ a(T, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ a(t, {
                                    children: /*#__PURE__*/ a(`p`, {
                                      className: `framer-styles-preset-17qvjw9`,
                                      "data-styles-preset": `W6ZCCcKuw`,
                                      children: `Screen printed charity poster`,
                                    }),
                                  }),
                                  className: `framer-1f6essi`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ o(L, {
                            animate: G,
                            className: `framer-1yq39h9`,
                            "data-framer-appear-id": `1yq39h9`,
                            "data-framer-name": `img3`,
                            initial: H,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ a(x, {
                                breakpoint: O,
                                overrides: {
                                  rRt0wxrIv: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: h((g?.y || 0) + 0 + 30 + 1983 + 0 + 0),
                                      pixelHeight: 1440,
                                      pixelWidth: 3024,
                                      sizes: `calc(max((max(${g?.width || `100vw`} - 350px, 1px) - 85px) / 2, 50px) * 2 + 25px)`,
                                      src: `../../assets/images/DwAnd8oJICEUlTgTkxoTuMSC8r8-823c16.jpg`,
                                      srcSet: `../../assets/images/DwAnd8oJICEUlTgTkxoTuMSC8r8-695c9f.jpg 512w,../../assets/images/DwAnd8oJICEUlTgTkxoTuMSC8r8-f0a06f.jpg 1024w,../../assets/images/DwAnd8oJICEUlTgTkxoTuMSC8r8.jpg 2048w,../../assets/images/DwAnd8oJICEUlTgTkxoTuMSC8r8-823c16.jpg 3024w`,
                                    },
                                  },
                                  yCOzxv6ap: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: h((g?.y || 0) + 0 + 461.8 + 30 + 1983 + 0 + 0),
                                      pixelHeight: 1440,
                                      pixelWidth: 3024,
                                      sizes: `calc(max((${g?.width || `100vw`} - 85px) / 2, 50px) * 2 + 25px)`,
                                      src: `../../assets/images/DwAnd8oJICEUlTgTkxoTuMSC8r8-823c16.jpg`,
                                      srcSet: `../../assets/images/DwAnd8oJICEUlTgTkxoTuMSC8r8-695c9f.jpg 512w,../../assets/images/DwAnd8oJICEUlTgTkxoTuMSC8r8-f0a06f.jpg 1024w,../../assets/images/DwAnd8oJICEUlTgTkxoTuMSC8r8.jpg 2048w,../../assets/images/DwAnd8oJICEUlTgTkxoTuMSC8r8-823c16.jpg 3024w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ a(_, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: h((g?.y || 0) + 0 + 30 + 1322 + 0 + 0),
                                    pixelHeight: 1440,
                                    pixelWidth: 3024,
                                    sizes: `calc(max((max(${g?.width || `100vw`} - 350px, 1px) - 85px) / 2, 50px) * 2 + 25px)`,
                                    src: `../../assets/images/DwAnd8oJICEUlTgTkxoTuMSC8r8-823c16.jpg`,
                                    srcSet: `../../assets/images/DwAnd8oJICEUlTgTkxoTuMSC8r8-695c9f.jpg 512w,../../assets/images/DwAnd8oJICEUlTgTkxoTuMSC8r8-f0a06f.jpg 1024w,../../assets/images/DwAnd8oJICEUlTgTkxoTuMSC8r8.jpg 2048w,../../assets/images/DwAnd8oJICEUlTgTkxoTuMSC8r8-823c16.jpg 3024w`,
                                  },
                                  className: `framer-149gpue`,
                                }),
                              }),
                              /*#__PURE__*/ a(`div`, {
                                className: `framer-qi45p0`,
                                children: /*#__PURE__*/ a(T, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ a(t, {
                                    children: /*#__PURE__*/ a(`p`, {
                                      className: `framer-styles-preset-17qvjw9`,
                                      "data-styles-preset": `W6ZCCcKuw`,
                                      children: `Risograph prints`,
                                    }),
                                  }),
                                  className: `framer-19pp6j`,
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
        `.framer-RoLvc.framer-1jlna9v, .framer-RoLvc .framer-1jlna9v { display: block; }`,
        `.framer-RoLvc.framer-ol1hri { align-content: flex-start; align-items: flex-start; background-color: var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, #f4c877); display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 50px 0px; position: relative; width: 1200px; }`,
        `.framer-RoLvc .framer-u0p8d5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100vh; justify-content: space-between; left: 0px; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 350px; z-index: 1; }`,
        `.framer-RoLvc .framer-1c8u0g1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px; position: sticky; top: 0px; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-RoLvc .framer-ifrbq6, .framer-RoLvc .framer-1kfflnh, .framer-RoLvc .framer-1f0uizx, .framer-RoLvc .framer-yyaecu { --framer-paragraph-spacing: 0px; flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }`,
        `.framer-RoLvc .framer-1f7aqtu { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 100%; overflow: hidden; position: relative; white-space: pre-wrap; width: 261px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-RoLvc .framer-1sfdduh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-RoLvc .framer-1gfxeij, .framer-RoLvc .framer-1np066e { background-color: var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, #4b1d48); flex: none; height: 3px; opacity: 0.56; overflow: visible; position: relative; width: 100%; }`,
        `.framer-RoLvc .framer-16wai3v { display: grid; flex: 1 0 0px; gap: 25px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: hidden; padding: 30px; position: relative; width: 1px; }`,
        `.framer-RoLvc .framer-n1320t { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; grid-column: span 2; height: min-content; justify-content: center; justify-self: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-RoLvc .framer-78itc4, .framer-RoLvc .framer-149gpue { flex: none; height: 500px; overflow: hidden; position: relative; width: 100%; }`,
        `.framer-RoLvc .framer-auo5up, .framer-RoLvc .framer-z5s3xu, .framer-RoLvc .framer-1ym1n3h, .framer-RoLvc .framer-qi45p0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-RoLvc .framer-228ojo { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 99%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-RoLvc .framer-n9hz32, .framer-RoLvc .framer-e279pv { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-RoLvc .framer-lwnhrd, .framer-RoLvc .framer-150ktqw { flex: none; height: 500px; overflow: hidden; position: relative; width: 383px; }`,
        `.framer-RoLvc .framer-tblse1, .framer-RoLvc .framer-1f6essi { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-RoLvc .framer-1yq39h9 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; grid-column: span 2; height: min-content; justify-content: center; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-RoLvc .framer-19pp6j { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 101%; word-break: break-word; word-wrap: break-word; }`,
        `@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-RoLvc.framer-ol1hri, .framer-RoLvc .framer-1c8u0g1, .framer-RoLvc .framer-1sfdduh, .framer-RoLvc .framer-n1320t, .framer-RoLvc .framer-n9hz32, .framer-RoLvc .framer-e279pv, .framer-RoLvc .framer-1yq39h9 { gap: 0px; } .framer-RoLvc.framer-ol1hri > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-RoLvc.framer-ol1hri > :first-child { margin-left: 0px; } .framer-RoLvc.framer-ol1hri > :last-child { margin-right: 0px; } .framer-RoLvc .framer-1c8u0g1 > * { margin: 0px; margin-bottom: calc(15px / 2); margin-top: calc(15px / 2); } .framer-RoLvc .framer-1c8u0g1 > :first-child, .framer-RoLvc .framer-1sfdduh > :first-child, .framer-RoLvc .framer-n1320t > :first-child, .framer-RoLvc .framer-n9hz32 > :first-child, .framer-RoLvc .framer-e279pv > :first-child, .framer-RoLvc .framer-1yq39h9 > :first-child { margin-top: 0px; } .framer-RoLvc .framer-1c8u0g1 > :last-child, .framer-RoLvc .framer-1sfdduh > :last-child, .framer-RoLvc .framer-n1320t > :last-child, .framer-RoLvc .framer-n9hz32 > :last-child, .framer-RoLvc .framer-e279pv > :last-child, .framer-RoLvc .framer-1yq39h9 > :last-child { margin-bottom: 0px; } .framer-RoLvc .framer-1sfdduh > *, .framer-RoLvc .framer-n1320t > *, .framer-RoLvc .framer-n9hz32 > *, .framer-RoLvc .framer-e279pv > *, .framer-RoLvc .framer-1yq39h9 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }`,
        ...le,
        ...A,
        ...D,
        ...j,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-RoLvc.framer-ol1hri { width: 810px; } .framer-RoLvc .framer-n9hz32, .framer-RoLvc .framer-e279pv { grid-column: span 2; }}`,
        `@media (max-width: 809px) { .framer-RoLvc.framer-ol1hri { flex-direction: column; width: 390px; } .framer-RoLvc .framer-u0p8d5 { gap: 0px; height: min-content; justify-content: center; left: unset; position: relative; top: unset; width: 100%; } .framer-RoLvc .framer-1c8u0g1 { position: relative; top: unset; } .framer-RoLvc .framer-16wai3v { flex: none; width: 100%; } .framer-RoLvc .framer-n9hz32, .framer-RoLvc .framer-e279pv { grid-column: span 2; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-RoLvc.framer-ol1hri, .framer-RoLvc .framer-u0p8d5 { gap: 0px; } .framer-RoLvc.framer-ol1hri > *, .framer-RoLvc .framer-u0p8d5 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-RoLvc.framer-ol1hri > :first-child, .framer-RoLvc .framer-u0p8d5 > :first-child { margin-top: 0px; } .framer-RoLvc.framer-ol1hri > :last-child, .framer-RoLvc .framer-u0p8d5 > :last-child { margin-bottom: 0px; } }}`,
      ]),
      (Z = v(Y, X, `framer-RoLvc`)),
      (Z.displayName = `Book Covers`),
      (Z.defaultProps = { height: 1766, width: 1200 }),
      g(
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
          ...m(ue),
          ...m(oe),
          ...m(O),
          ...m(pe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerNVJGjNvHS`,
            slots: [],
            annotations: {
              framerImmutableVariables: `true`,
              framerColorSyntax: `true`,
              framerAutoSizeImages: `true`,
              framerIntrinsicWidth: `1200`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"rRt0wxrIv":{"layout":["fixed","auto"]},"yCOzxv6ap":{"layout":["fixed","auto"]}}}`,
              framerAcceptsLayoutTemplate: `false`,
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerScrollSections: `* @framerResponsiveScreen`,
              framerDisplayContentsDiv: `false`,
              framerIntrinsicHeight: `1766`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
$();
export { Q as __FramerMetadata__, Z as default };
//# sourceMappingURL=bMLfmT3HSEQmqig7L2hkjq2URW48oGzGv38T_RbYQiY.Bh-4YLr9.mjs.map
