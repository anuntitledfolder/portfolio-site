import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  F as t,
  N as n,
  T as r,
  b as i,
  c as a,
  m as o,
  s,
  u as c,
  w as l,
  x as ee,
} from "./react.Dq5lJgOf.mjs";
import { T as u, a as te, r as d } from "./motion.D3Y82hha.mjs";
import {
  $ as f,
  C as p,
  M as m,
  N as h,
  R as g,
  at as ne,
  b as _,
  c as v,
  ft as y,
  ht as b,
  it as x,
  m as S,
  nt as re,
  o as C,
  rt as ie,
  u as w,
  v as T,
} from "./framer.d4MlGAvC.mjs";
import { i as E, n as D, r as O, t as k } from "./W6ZCCcKuw.57CkUy80.mjs";
import { i as A, n as j, r as M, t as N } from "./iBI2c5jgM.QEoKO0-0.mjs";
import { n as P, r as F } from "./jvbgRsZai.jMuXJSCh.mjs";
var I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (a(),
      g(),
      d(),
      r(),
      A(),
      E(),
      P(),
      (I = b(u.header)),
      (L = b(u.nav)),
      (R = b(u.div)),
      (z = {
        SOw3K6dCK: `(min-width: 810px) and (max-width: 1199px)`,
        ueJ6rvPn3: `(max-width: 809px)`,
        uyEjXQZUW: `(min-width: 1200px)`,
      }),
      (B = `framer-M7PNf`),
      (V = {
        SOw3K6dCK: `framer-v-gr464g`,
        ueJ6rvPn3: `framer-v-87gp3i`,
        uyEjXQZUW: `framer-v-puiwtc`,
      }),
      (H = {
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
      (U = {
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
      (W = {
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
      (G = {
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
      (K = ({ value: e }) =>
        x()
          ? null
          : /*#__PURE__*/ s(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (q = { Desktop: `uyEjXQZUW`, Phone: `ueJ6rvPn3`, Tablet: `SOw3K6dCK` }),
      (J = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: q[r.variant] ?? r.variant ?? `uyEjXQZUW`,
      })),
      (Y = /*#__PURE__*/ o(function (e, r) {
        let a = ee(null),
          o = r ?? a,
          d = l(),
          { activeLocale: m, setLocale: g } = ne(),
          _ = f(),
          { style: y, className: b, layoutId: x, variant: E, ...D } = J(e);
        (i(() => {
          let e = F(void 0, m);
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
          n(() => {
            let e = F(void 0, m);
            ((document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport));
          }, [void 0, m]));
        let [O, A] = ie(E, z, !1),
          j = p(B, k, N);
        return (
          re({}),
          /*#__PURE__*/ s(C.Provider, {
            value: { primaryVariantId: `uyEjXQZUW`, variantClassNames: V },
            children: /*#__PURE__*/ c(te, {
              id: x ?? d,
              children: [
                /*#__PURE__*/ s(K, {
                  value: `html body { background: var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, rgb(244, 200, 119)); }`,
                }),
                /*#__PURE__*/ c(u.div, {
                  ...D,
                  className: p(j, `framer-puiwtc`, b),
                  ref: o,
                  style: { ...y },
                  children: [
                    /*#__PURE__*/ c(`aside`, {
                      className: `framer-1c5rx8x`,
                      "data-framer-name": `Sidebar`,
                      children: [
                        /*#__PURE__*/ c(I, {
                          animate: H,
                          className: `framer-19ev5q`,
                          "data-framer-appear-id": `19ev5q`,
                          "data-framer-name": `Header`,
                          initial: U,
                          optimized: !0,
                          style: { transformPerspective: 1200 },
                          children: [
                            /*#__PURE__*/ s(T, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ s(t, {
                                children: /*#__PURE__*/ c(`h2`, {
                                  style: {
                                    "--font-selector": `R0Y7Um9ib3RvIFNsYWItNzAw`,
                                    "--framer-font-family": `"Roboto Slab", "Roboto Slab Placeholder", serif`,
                                    "--framer-font-size": `60px`,
                                    "--framer-font-weight": `700`,
                                    "--framer-line-height": `1.1em`,
                                    "--framer-text-color": `var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10))`,
                                  },
                                  children: [`Exoplanet`, /*#__PURE__*/ s(`br`, {}), `Poster`],
                                }),
                              }),
                              className: `framer-111r0h`,
                              fonts: [`GF;Roboto Slab-700`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ s(T, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ s(t, {
                                children: /*#__PURE__*/ s(`p`, {
                                  style: {
                                    "--font-selector": `R0Y7Um9ib3RvLXJlZ3VsYXI=`,
                                    "--framer-font-family": `"Roboto", "Roboto Placeholder", sans-serif`,
                                    "--framer-font-size": `18px`,
                                    "--framer-line-height": `1.4em`,
                                    "--framer-text-color": `var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10))`,
                                  },
                                  children: `This travel poster for PSR B1620-26b is an artist interpretation that aims to show a wider audience the beauty these far off, and strangely named, planets could hold.`,
                                }),
                              }),
                              className: `framer-f2c492`,
                              fonts: [`GF;Roboto-regular`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        /*#__PURE__*/ c(L, {
                          animate: W,
                          className: `framer-d48flf`,
                          "data-framer-appear-id": `d48flf`,
                          "data-framer-name": `Links`,
                          initial: U,
                          optimized: !0,
                          style: { transformPerspective: 1200 },
                          children: [
                            /*#__PURE__*/ s(T, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ s(t, {
                                children: /*#__PURE__*/ s(`p`, {
                                  className: `framer-styles-preset-17qvjw9`,
                                  "data-styles-preset": `W6ZCCcKuw`,
                                  children: /*#__PURE__*/ s(w, {
                                    href: { webPageId: `augiA20Il` },
                                    motionChild: !0,
                                    nodeId: `PsEQ3LZL4`,
                                    openInNewTab: !1,
                                    scopeId: `jvbgRsZai`,
                                    smoothScroll: !1,
                                    children: /*#__PURE__*/ s(u.a, {
                                      className: `framer-styles-preset-1y1gbtr`,
                                      "data-styles-preset": `iBI2c5jgM`,
                                      children: `Home @_"`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-sxblgb`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ s(`div`, {
                              className: `framer-1spp0ze`,
                              "data-framer-name": `Line`,
                            }),
                            /*#__PURE__*/ s(T, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ s(t, {
                                children: /*#__PURE__*/ s(`p`, {
                                  className: `framer-styles-preset-17qvjw9`,
                                  "data-styles-preset": `W6ZCCcKuw`,
                                  children: /*#__PURE__*/ s(w, {
                                    href: `mailto:stelzerash@gmail.com`,
                                    motionChild: !0,
                                    nodeId: `BBdQlPe5k`,
                                    openInNewTab: !0,
                                    scopeId: `jvbgRsZai`,
                                    smoothScroll: !1,
                                    children: /*#__PURE__*/ s(u.a, {
                                      className: `framer-styles-preset-1y1gbtr`,
                                      "data-styles-preset": `iBI2c5jgM`,
                                      children: `Contact`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-1hyg5ny`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ s(`div`, {
                              className: `framer-q1f3ra`,
                              "data-framer-name": `Line`,
                            }),
                            /*#__PURE__*/ s(T, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ s(t, {
                                children: /*#__PURE__*/ s(`p`, {
                                  className: `framer-styles-preset-17qvjw9`,
                                  "data-styles-preset": `W6ZCCcKuw`,
                                  children: /*#__PURE__*/ s(w, {
                                    href: `https://www.linkedin.com/in/ashleystelz/`,
                                    motionChild: !0,
                                    nodeId: `dgdj5ScJ_`,
                                    openInNewTab: !0,
                                    scopeId: `jvbgRsZai`,
                                    smoothScroll: !1,
                                    children: /*#__PURE__*/ s(u.a, {
                                      className: `framer-styles-preset-1y1gbtr`,
                                      "data-styles-preset": `iBI2c5jgM`,
                                      children: `LinkedIn`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-19g4q9k`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ s(S, {
                      breakpoint: O,
                      overrides: {
                        ueJ6rvPn3: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: h((_?.y || 0) + 0 + 448.6),
                            pixelHeight: 1883,
                            pixelWidth: 1440,
                            sizes: _?.width || `100vw`,
                            src: `../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ.jpg`,
                            srcSet: `../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ-dbc0c2.jpg 783w,../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ.jpg 1440w`,
                          },
                        },
                      },
                      children: /*#__PURE__*/ c(v, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: h((_?.y || 0) + 0),
                          pixelHeight: 1883,
                          pixelWidth: 1440,
                          sizes: `max(${_?.width || `100vw`} - 350px, 1px)`,
                          src: `../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ.jpg`,
                          srcSet: `../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ-dbc0c2.jpg 783w,../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ.jpg 1440w`,
                        },
                        className: `framer-vdzdxs`,
                        children: [
                          /*#__PURE__*/ c(R, {
                            animate: G,
                            className: `framer-1jvdvvs`,
                            "data-framer-appear-id": `1jvdvvs`,
                            "data-framer-name": `hero`,
                            initial: U,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ s(S, {
                                breakpoint: O,
                                overrides: {
                                  ueJ6rvPn3: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: h((_?.y || 0) + 0 + 448.6 + 30 + 0 + 0 + 0),
                                      pixelHeight: 1080,
                                      pixelWidth: 720,
                                      sizes: `calc(max((${_?.width || `100vw`} - 85px) / 2, 50px) * 2 + 25px)`,
                                      src: `../../assets/images/vHWvg7RdZzupQcbzDQRzyYsQ.jpg`,
                                      srcSet: `../../assets/images/vHWvg7RdZzupQcbzDQRzyYsQ-701f09.jpg 682w,../../assets/images/vHWvg7RdZzupQcbzDQRzyYsQ.jpg 720w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ s(v, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: h((_?.y || 0) + 0 + 30 + 0 + 0 + 0),
                                    pixelHeight: 1080,
                                    pixelWidth: 720,
                                    sizes: `calc(max((max(${_?.width || `100vw`} - 350px, 1px) - 85px) / 2, 50px) * 2 + 25px)`,
                                    src: `../../assets/images/vHWvg7RdZzupQcbzDQRzyYsQ.jpg`,
                                    srcSet: `../../assets/images/vHWvg7RdZzupQcbzDQRzyYsQ-701f09.jpg 682w,../../assets/images/vHWvg7RdZzupQcbzDQRzyYsQ.jpg 720w`,
                                  },
                                  className: `framer-66gds4`,
                                }),
                              }),
                              /*#__PURE__*/ s(`div`, {
                                className: `framer-cqxzl5`,
                                children: /*#__PURE__*/ s(T, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ s(t, {
                                    children: /*#__PURE__*/ s(`p`, {
                                      style: {
                                        "--font-selector": `R0Y7Um9ib3RvIFNlcmlmLXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Roboto Serif", "Roboto Serif Placeholder", serif`,
                                        "--framer-font-size": `18px`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-color": `var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10))`,
                                      },
                                      children: `This interpretation is based on our current knowledge of gas giant planets, PSR B1620-26b’s estimated composition, and previous artist interpretations.`,
                                    }),
                                  }),
                                  className: `framer-1qbgm1w`,
                                  fonts: [`GF;Roboto Serif-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ c(R, {
                            animate: G,
                            className: `framer-iy4emw`,
                            "data-framer-appear-id": `iy4emw`,
                            "data-framer-name": `img1`,
                            initial: U,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ s(S, {
                                breakpoint: O,
                                overrides: {
                                  ueJ6rvPn3: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: h((_?.y || 0) + 0 + 448.6 + 30 + 661 + 0 + 0),
                                      pixelHeight: 2156,
                                      pixelWidth: 1440,
                                      sizes: `383px`,
                                      src: `../../assets/images/yGGKGjuEEeVNbC6zBE4cD56X3iw-5c8aac.jpg`,
                                      srcSet: `../../assets/images/yGGKGjuEEeVNbC6zBE4cD56X3iw.jpg 683w,../../assets/images/yGGKGjuEEeVNbC6zBE4cD56X3iw-6261d4.jpg 1367w,../../assets/images/yGGKGjuEEeVNbC6zBE4cD56X3iw-5c8aac.jpg 1440w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ s(v, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: h((_?.y || 0) + 0 + 30 + 661 + 0 + 0),
                                    pixelHeight: 2156,
                                    pixelWidth: 1440,
                                    sizes: `383px`,
                                    src: `../../assets/images/yGGKGjuEEeVNbC6zBE4cD56X3iw-5c8aac.jpg`,
                                    srcSet: `../../assets/images/yGGKGjuEEeVNbC6zBE4cD56X3iw.jpg 683w,../../assets/images/yGGKGjuEEeVNbC6zBE4cD56X3iw-6261d4.jpg 1367w,../../assets/images/yGGKGjuEEeVNbC6zBE4cD56X3iw-5c8aac.jpg 1440w`,
                                  },
                                  className: `framer-1sy07cv`,
                                }),
                              }),
                              /*#__PURE__*/ s(`div`, {
                                className: `framer-19wrxru`,
                                children: /*#__PURE__*/ s(T, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ s(t, {
                                    children: /*#__PURE__*/ s(`p`, {
                                      style: {
                                        "--font-selector": `R0Y7Um9ib3RvIFNlcmlmLXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Roboto Serif", "Roboto Serif Placeholder", serif`,
                                        "--framer-font-size": `18px`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-color": `var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10))`,
                                      },
                                      children: `The poster is used as an advertisement for a planetarium show but is also sold separately.`,
                                    }),
                                  }),
                                  className: `framer-d0hobs`,
                                  fonts: [`GF;Roboto Serif-regular`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ c(R, {
                            animate: G,
                            className: `framer-7bqkvv`,
                            "data-framer-appear-id": `7bqkvv`,
                            "data-framer-name": `img2`,
                            initial: U,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ s(S, {
                                breakpoint: O,
                                overrides: {
                                  SOw3K6dCK: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: h((_?.y || 0) + 0 + 30 + 1322 + 0 + 0),
                                      pixelHeight: 1920,
                                      pixelWidth: 1440,
                                      sizes: `383px`,
                                      src: `../../assets/images/F1Kug5bxg6jEMmf95fxK9lPdTI-213e34.jpg`,
                                      srcSet: `../../assets/images/F1Kug5bxg6jEMmf95fxK9lPdTI.jpg 768w,../../assets/images/F1Kug5bxg6jEMmf95fxK9lPdTI-213e34.jpg 1440w`,
                                    },
                                  },
                                  ueJ6rvPn3: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: h((_?.y || 0) + 0 + 448.6 + 30 + 1322 + 0 + 0),
                                      pixelHeight: 1920,
                                      pixelWidth: 1440,
                                      sizes: `383px`,
                                      src: `../../assets/images/F1Kug5bxg6jEMmf95fxK9lPdTI-213e34.jpg`,
                                      srcSet: `../../assets/images/F1Kug5bxg6jEMmf95fxK9lPdTI.jpg 768w,../../assets/images/F1Kug5bxg6jEMmf95fxK9lPdTI-213e34.jpg 1440w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ s(v, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: h((_?.y || 0) + 0 + 30 + 661 + 0 + 0),
                                    pixelHeight: 1920,
                                    pixelWidth: 1440,
                                    sizes: `383px`,
                                    src: `../../assets/images/F1Kug5bxg6jEMmf95fxK9lPdTI-213e34.jpg`,
                                    srcSet: `../../assets/images/F1Kug5bxg6jEMmf95fxK9lPdTI.jpg 768w,../../assets/images/F1Kug5bxg6jEMmf95fxK9lPdTI-213e34.jpg 1440w`,
                                  },
                                  className: `framer-1p4ssjx`,
                                }),
                              }),
                              /*#__PURE__*/ s(`div`, {
                                className: `framer-e2o515`,
                                children: /*#__PURE__*/ s(T, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ s(t, {
                                    children: /*#__PURE__*/ s(`p`, {
                                      style: {
                                        "--font-selector": `R0Y7Um9ib3RvIFNlcmlmLXJlZ3VsYXI=`,
                                        "--framer-font-family": `"Roboto Serif", "Roboto Serif Placeholder", serif`,
                                        "--framer-font-size": `18px`,
                                        "--framer-line-height": `1.4em`,
                                        "--framer-text-color": `var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10))`,
                                      },
                                      children: `An example of the illustration as a wall poster`,
                                    }),
                                  }),
                                  className: `framer-ngxpg8`,
                                  fonts: [`GF;Roboto Serif-regular`],
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
                /*#__PURE__*/ s(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (X = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-M7PNf.framer-armie0, .framer-M7PNf .framer-armie0 { display: block; }`,
        `.framer-M7PNf.framer-puiwtc { align-content: flex-start; align-items: flex-start; background-color: var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, #f4c877); display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 50px 0px; position: relative; width: 1200px; }`,
        `.framer-M7PNf .framer-1c5rx8x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100vh; justify-content: space-between; left: 0px; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 350px; z-index: 1; }`,
        `.framer-M7PNf .framer-19ev5q { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px; position: sticky; top: 0px; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-M7PNf .framer-111r0h { --framer-paragraph-spacing: 0px; flex: none; height: auto; overflow: hidden; position: relative; white-space: pre-wrap; width: 110%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-M7PNf .framer-f2c492 { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 100%; overflow: hidden; position: relative; white-space: pre-wrap; width: 261px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-M7PNf .framer-d48flf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-M7PNf .framer-sxblgb, .framer-M7PNf .framer-1hyg5ny, .framer-M7PNf .framer-19g4q9k { --framer-paragraph-spacing: 0px; flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }`,
        `.framer-M7PNf .framer-1spp0ze, .framer-M7PNf .framer-q1f3ra { background-color: var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, #4b1d48); flex: none; height: 3px; opacity: 0.56; overflow: visible; position: relative; width: 100%; }`,
        `.framer-M7PNf .framer-vdzdxs { display: grid; flex: 1 0 0px; gap: 25px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: hidden; padding: 30px; position: relative; width: 1px; }`,
        `.framer-M7PNf .framer-1jvdvvs { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; grid-column: span 2; height: min-content; justify-content: center; justify-self: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-M7PNf .framer-66gds4 { flex: none; height: 500px; overflow: hidden; position: relative; width: 100%; }`,
        `.framer-M7PNf .framer-cqxzl5, .framer-M7PNf .framer-19wrxru, .framer-M7PNf .framer-e2o515 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-M7PNf .framer-1qbgm1w, .framer-M7PNf .framer-d0hobs, .framer-M7PNf .framer-ngxpg8 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-M7PNf .framer-iy4emw, .framer-M7PNf .framer-7bqkvv { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-M7PNf .framer-1sy07cv, .framer-M7PNf .framer-1p4ssjx { flex: none; height: 500px; overflow: hidden; position: relative; width: 383px; }`,
        ...D,
        ...j,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-M7PNf.framer-puiwtc { width: 810px; } .framer-M7PNf .framer-iy4emw, .framer-M7PNf .framer-7bqkvv { grid-column: span 2; }}`,
        `@media (max-width: 809px) { .framer-M7PNf.framer-puiwtc { flex-direction: column; width: 390px; } .framer-M7PNf .framer-1c5rx8x { gap: 0px; height: min-content; justify-content: center; left: unset; position: relative; top: unset; width: 100%; } .framer-M7PNf .framer-19ev5q { position: relative; top: unset; } .framer-M7PNf .framer-vdzdxs { flex: none; width: 100%; } .framer-M7PNf .framer-iy4emw, .framer-M7PNf .framer-7bqkvv { grid-column: span 2; }}`,
      ]),
      (Z = y(Y, X, `framer-M7PNf`)),
      (Z.displayName = `Princessbride`),
      (Z.defaultProps = { height: 1306, width: 1200 }),
      _(
        Z,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Roboto Slab`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/robotoslab/v34/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjoa4OWbW5iddG-1A.woff2`,
                weight: `700`,
              },
              {
                family: `Roboto`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbWmWggvWl0Qn.woff2`,
                weight: `400`,
              },
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
              {
                family: `Roboto Serif`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/robotoserif/v15/R71RjywflP6FLr3gZx7K8UyuXDs9zVwDmXCb8lxYgmuii32UGoVldX6UgfjL4-3sMM_kB_qXSEXTJQCFLH5-_bcEliotp6J2Af5fR4k.woff2`,
                weight: `400`,
              },
            ],
          },
          ...m(O),
          ...m(M),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerjvbgRsZai`,
            slots: [],
            annotations: {
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"SOw3K6dCK":{"layout":["fixed","auto"]},"ueJ6rvPn3":{"layout":["fixed","auto"]}}}`,
              framerIntrinsicHeight: `1306`,
              framerColorSyntax: `true`,
              framerDisplayContentsDiv: `false`,
              framerIntrinsicWidth: `1200`,
              framerImmutableVariables: `true`,
              framerScrollSections: `* @framerResponsiveScreen`,
              framerContractVersion: `1`,
              framerAutoSizeImages: `true`,
              framerComponentViewportWidth: `true`,
              framerAcceptsLayoutTemplate: `false`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
$();
export { Q as __FramerMetadata__, Z as default };
//# sourceMappingURL=qGjNe6DJ_Xdeq5JY0cozpWy9PR_jmsE69SOvBxLL1qc.BdhbgK3a.mjs.map
