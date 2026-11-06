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
  x as s,
} from "./react.Dq5lJgOf.mjs";
import { T as c, a as l, r as u } from "./motion.D3Y82hha.mjs";
import {
  $ as d,
  C as f,
  M as p,
  N as m,
  R as re,
  at as ie,
  b as h,
  c as g,
  ft as _,
  ht as v,
  it as y,
  m as b,
  nt as x,
  o as S,
  rt as ae,
  u as C,
  v as w,
} from "./framer.d4MlGAvC.mjs";
import { i as T, n as E, r as D, t as O } from "./W6ZCCcKuw.57CkUy80.mjs";
import { i as oe, n as k, r as se, t as ce } from "./TPvCPpffK.CJ-lgUmj.mjs";
import { i as le, n as ue, r as A, t as de } from "./UTXu6vuhB.CPC5hcTR.mjs";
import { i as fe, n as pe, r as j, t as M } from "./iBI2c5jgM.QEoKO0-0.mjs";
import { n as N, r as P } from "./kyJxj_Z02.BphAayCp.mjs";
var F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (r(),
      re(),
      u(),
      n(),
      fe(),
      oe(),
      le(),
      T(),
      N(),
      (F = v(c.header)),
      (I = v(c.nav)),
      (L = v(c.div)),
      (R = {
        euQObvbfb: `(max-width: 809px)`,
        mLafCaI63: `(min-width: 1200px)`,
        WjJlr4vdn: `(min-width: 810px) and (max-width: 1199px)`,
      }),
      (z = `framer-R3V09`),
      (B = {
        euQObvbfb: `framer-v-1f0e84`,
        mLafCaI63: `framer-v-jzxaqs`,
        WjJlr4vdn: `framer-v-1o9hl7i`,
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
        y()
          ? null
          : /*#__PURE__*/ a(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (q = { Desktop: `mLafCaI63`, Phone: `euQObvbfb`, Tablet: `WjJlr4vdn` }),
      (J = ({ height: e, id: t, width: ee, ...n }) => ({
        ...n,
        variant: q[n.variant] ?? n.variant ?? `mLafCaI63`,
      })),
      (Y = /*#__PURE__*/ i(function (e, n) {
        let r = s(null),
          i = n ?? r,
          u = ne(),
          { activeLocale: p, setLocale: re } = ie(),
          h = d(),
          { style: _, className: v, layoutId: y, variant: T, ...E } = J(e);
        (te(() => {
          let e = P(void 0, p);
          if (e.robots) {
            let t = document.querySelector(`meta[name="robots"]`);
            t
              ? t.setAttribute(`content`, e.robots)
              : ((t = document.createElement(`meta`)),
                t.setAttribute(`name`, `robots`),
                t.setAttribute(`content`, e.robots),
                document.head.appendChild(t));
          }
        }, [void 0, p]),
          ee(() => {
            let e = P(void 0, p);
            ((document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport));
          }, [void 0, p]));
        let [D, oe] = ae(T, R, !1),
          k = f(z, de, ce, O, M);
        return (
          x({}),
          /*#__PURE__*/ a(S.Provider, {
            value: { primaryVariantId: `mLafCaI63`, variantClassNames: B },
            children: /*#__PURE__*/ o(l, {
              id: y ?? u,
              children: [
                /*#__PURE__*/ a(K, {
                  value: `html body { background: var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, rgb(244, 200, 119)); }`,
                }),
                /*#__PURE__*/ o(c.div, {
                  ...E,
                  className: f(k, `framer-jzxaqs`, v),
                  ref: i,
                  style: { ..._ },
                  children: [
                    /*#__PURE__*/ o(`aside`, {
                      className: `framer-h62vkl`,
                      "data-framer-name": `Sidebar`,
                      children: [
                        /*#__PURE__*/ o(F, {
                          animate: V,
                          className: `framer-16yq7jl`,
                          "data-framer-appear-id": `16yq7jl`,
                          "data-framer-name": `Header`,
                          initial: H,
                          optimized: !0,
                          style: { transformPerspective: 1200 },
                          children: [
                            /*#__PURE__*/ a(w, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ a(t, {
                                children: /*#__PURE__*/ o(`h2`, {
                                  className: `framer-styles-preset-1vx9vuq`,
                                  "data-styles-preset": `UTXu6vuhB`,
                                  children: [`Book`, /*#__PURE__*/ a(`br`, {}), `Covers`],
                                }),
                              }),
                              className: `framer-idoh7f`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ a(w, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ a(t, {
                                children: /*#__PURE__*/ a(`p`, {
                                  className: `framer-styles-preset-t0brxi`,
                                  "data-styles-preset": `TPvCPpffK`,
                                  children: `Despite the saying, many people do judge a book by its cover. An intreeging cover is important for drawing customer’s attention. These illustrations are designed to stand on their own as posters or to be used as book covers.`,
                                }),
                              }),
                              className: `framer-11r1d93`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        /*#__PURE__*/ o(I, {
                          animate: U,
                          className: `framer-1aagdf4`,
                          "data-framer-appear-id": `1aagdf4`,
                          "data-framer-name": `Links`,
                          initial: H,
                          optimized: !0,
                          style: { transformPerspective: 1200 },
                          children: [
                            /*#__PURE__*/ a(w, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ a(t, {
                                children: /*#__PURE__*/ a(`p`, {
                                  className: `framer-styles-preset-17qvjw9`,
                                  "data-styles-preset": `W6ZCCcKuw`,
                                  children: /*#__PURE__*/ a(C, {
                                    href: { webPageId: `augiA20Il` },
                                    motionChild: !0,
                                    nodeId: `kBhUvNUxD`,
                                    openInNewTab: !1,
                                    scopeId: `kyJxj_Z02`,
                                    smoothScroll: !1,
                                    children: /*#__PURE__*/ a(c.a, {
                                      className: `framer-styles-preset-1y1gbtr`,
                                      "data-styles-preset": `iBI2c5jgM`,
                                      children: `Home @_"`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-hy8p54`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ a(`div`, {
                              className: `framer-1etlcd2`,
                              "data-framer-name": `Line`,
                            }),
                            /*#__PURE__*/ a(w, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ a(t, {
                                children: /*#__PURE__*/ a(`p`, {
                                  className: `framer-styles-preset-17qvjw9`,
                                  "data-styles-preset": `W6ZCCcKuw`,
                                  children: /*#__PURE__*/ a(C, {
                                    href: `mailto:stelzerash@gmail.com`,
                                    motionChild: !0,
                                    nodeId: `WQp8pTBoo`,
                                    openInNewTab: !0,
                                    scopeId: `kyJxj_Z02`,
                                    smoothScroll: !1,
                                    children: /*#__PURE__*/ a(c.a, {
                                      className: `framer-styles-preset-1y1gbtr`,
                                      "data-styles-preset": `iBI2c5jgM`,
                                      children: `Contact`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-89qf0d`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ a(`div`, {
                              className: `framer-1h19zym`,
                              "data-framer-name": `Line`,
                            }),
                            /*#__PURE__*/ a(w, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ a(t, {
                                children: /*#__PURE__*/ a(`p`, {
                                  className: `framer-styles-preset-17qvjw9`,
                                  "data-styles-preset": `W6ZCCcKuw`,
                                  children: /*#__PURE__*/ a(C, {
                                    href: `https://www.linkedin.com/in/ashleystelz/`,
                                    motionChild: !0,
                                    nodeId: `Hf0DH6khJ`,
                                    openInNewTab: !0,
                                    scopeId: `kyJxj_Z02`,
                                    smoothScroll: !1,
                                    children: /*#__PURE__*/ a(c.a, {
                                      className: `framer-styles-preset-1y1gbtr`,
                                      "data-styles-preset": `iBI2c5jgM`,
                                      children: `LinkedIn`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-gt0m84`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ a(b, {
                      breakpoint: D,
                      overrides: {
                        euQObvbfb: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: m((h?.y || 0) + 0 + 461.8),
                            pixelHeight: 1883,
                            pixelWidth: 1440,
                            sizes: h?.width || `100vw`,
                            src: `../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ.jpg`,
                            srcSet: `../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ-dbc0c2.jpg 783w,../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ.jpg 1440w`,
                          },
                        },
                      },
                      children: /*#__PURE__*/ o(g, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: m((h?.y || 0) + 0),
                          pixelHeight: 1883,
                          pixelWidth: 1440,
                          sizes: `max(${h?.width || `100vw`} - 350px, 1px)`,
                          src: `../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ.jpg`,
                          srcSet: `../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ-dbc0c2.jpg 783w,../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ.jpg 1440w`,
                        },
                        className: `framer-wc20eh`,
                        children: [
                          /*#__PURE__*/ o(L, {
                            animate: W,
                            className: `framer-1pe8c40`,
                            "data-framer-appear-id": `1pe8c40`,
                            "data-framer-name": `img1`,
                            initial: H,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ a(b, {
                                breakpoint: D,
                                overrides: {
                                  euQObvbfb: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: m((h?.y || 0) + 0 + 461.8 + 30 + 0 + 0 + 0),
                                      pixelHeight: 1440,
                                      pixelWidth: 2160,
                                      positionX: `46.6%`,
                                      positionY: `51.8%`,
                                      sizes: `calc(max((${h?.width || `100vw`} - 85px) / 2, 50px) * 2 + 25px)`,
                                      src: `../../assets/images/aOSFBWCebKfQT5npGXBdcYTQjSc-8e246b.jpg`,
                                      srcSet: `../../assets/images/aOSFBWCebKfQT5npGXBdcYTQjSc-37c8e8.jpg 512w,../../assets/images/aOSFBWCebKfQT5npGXBdcYTQjSc-f98947.jpg 1024w,../../assets/images/aOSFBWCebKfQT5npGXBdcYTQjSc.jpg 2048w,../../assets/images/aOSFBWCebKfQT5npGXBdcYTQjSc-8e246b.jpg 2160w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ a(g, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: m((h?.y || 0) + 0 + 30 + 0 + 0 + 0),
                                    pixelHeight: 1440,
                                    pixelWidth: 2160,
                                    positionX: `46.6%`,
                                    positionY: `51.8%`,
                                    sizes: `calc(max((max(${h?.width || `100vw`} - 350px, 1px) - 85px) / 2, 50px) * 2 + 25px)`,
                                    src: `../../assets/images/aOSFBWCebKfQT5npGXBdcYTQjSc-8e246b.jpg`,
                                    srcSet: `../../assets/images/aOSFBWCebKfQT5npGXBdcYTQjSc-37c8e8.jpg 512w,../../assets/images/aOSFBWCebKfQT5npGXBdcYTQjSc-f98947.jpg 1024w,../../assets/images/aOSFBWCebKfQT5npGXBdcYTQjSc.jpg 2048w,../../assets/images/aOSFBWCebKfQT5npGXBdcYTQjSc-8e246b.jpg 2160w`,
                                  },
                                  className: `framer-mb7t6y`,
                                }),
                              }),
                              /*#__PURE__*/ a(`div`, {
                                className: `framer-3tzgs9`,
                                children: /*#__PURE__*/ a(w, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ a(t, {
                                    children: /*#__PURE__*/ a(`p`, {
                                      className: `framer-styles-preset-17qvjw9`,
                                      "data-styles-preset": `W6ZCCcKuw`,
                                      children: `With this design, my goal was to contrast the public image of the Princess Bride as a primarily romance novel with imagery of a sword to allude to the many conflicts that drive the story.`,
                                    }),
                                  }),
                                  className: `framer-19mr48y`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ o(L, {
                            animate: W,
                            className: `framer-1gkfa4k`,
                            "data-framer-appear-id": `1gkfa4k`,
                            "data-framer-name": `img1`,
                            initial: H,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ a(b, {
                                breakpoint: D,
                                overrides: {
                                  euQObvbfb: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: m((h?.y || 0) + 0 + 461.8 + 30 + 661 + 0 + 0),
                                      pixelHeight: 1425,
                                      pixelWidth: 2085,
                                      positionX: `81.7%`,
                                      positionY: `42.9%`,
                                      sizes: `calc(max((${h?.width || `100vw`} - 85px) / 2, 50px) * 2 + 25px)`,
                                      src: `../../assets/images/JoxJvWgOTy6Uw9QCg0o4gkOlUWA-2cd5a8.png`,
                                      srcSet: `../../assets/images/JoxJvWgOTy6Uw9QCg0o4gkOlUWA-1cf27a.png 512w,../../assets/images/JoxJvWgOTy6Uw9QCg0o4gkOlUWA-0e4e37.png 1024w,../../assets/images/JoxJvWgOTy6Uw9QCg0o4gkOlUWA.png 2048w,../../assets/images/JoxJvWgOTy6Uw9QCg0o4gkOlUWA-2cd5a8.png 2085w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ a(g, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: m((h?.y || 0) + 0 + 30 + 661 + 0 + 0),
                                    pixelHeight: 1425,
                                    pixelWidth: 2085,
                                    positionX: `81.7%`,
                                    positionY: `42.9%`,
                                    sizes: `calc(max((max(${h?.width || `100vw`} - 350px, 1px) - 85px) / 2, 50px) * 2 + 25px)`,
                                    src: `../../assets/images/JoxJvWgOTy6Uw9QCg0o4gkOlUWA-2cd5a8.png`,
                                    srcSet: `../../assets/images/JoxJvWgOTy6Uw9QCg0o4gkOlUWA-1cf27a.png 512w,../../assets/images/JoxJvWgOTy6Uw9QCg0o4gkOlUWA-0e4e37.png 1024w,../../assets/images/JoxJvWgOTy6Uw9QCg0o4gkOlUWA.png 2048w,../../assets/images/JoxJvWgOTy6Uw9QCg0o4gkOlUWA-2cd5a8.png 2085w`,
                                  },
                                  className: `framer-1f7cvrf`,
                                }),
                              }),
                              /*#__PURE__*/ a(`div`, {
                                className: `framer-plrru`,
                                children: /*#__PURE__*/ a(w, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ a(t, {
                                    children: /*#__PURE__*/ a(`p`, {
                                      className: `framer-styles-preset-17qvjw9`,
                                      "data-styles-preset": `W6ZCCcKuw`,
                                      children: `Full book jacket`,
                                    }),
                                  }),
                                  className: `framer-1k106g`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ o(L, {
                            animate: W,
                            className: `framer-bmsj7i`,
                            "data-framer-appear-id": `bmsj7i`,
                            "data-framer-name": `img2`,
                            initial: H,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ a(b, {
                                breakpoint: D,
                                overrides: {
                                  euQObvbfb: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: m((h?.y || 0) + 0 + 461.8 + 30 + 1322 + 0 + 0),
                                      pixelHeight: 1440,
                                      pixelWidth: 1920,
                                      sizes: `calc(max((${h?.width || `100vw`} - 85px) / 2, 50px) * 2 + 25px)`,
                                      src: `../../assets/images/4EBHxY7ODzYXmDKKVx5Gmahlg3E.jpg`,
                                      srcSet: `../../assets/images/4EBHxY7ODzYXmDKKVx5Gmahlg3E-d4f3d4.jpg 512w,../../assets/images/4EBHxY7ODzYXmDKKVx5Gmahlg3E-cd1509.jpg 1024w,../../assets/images/4EBHxY7ODzYXmDKKVx5Gmahlg3E.jpg 1920w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ a(g, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: m((h?.y || 0) + 0 + 30 + 1322 + 0 + 0),
                                    pixelHeight: 1440,
                                    pixelWidth: 1920,
                                    sizes: `calc(max((max(${h?.width || `100vw`} - 350px, 1px) - 85px) / 2, 50px) * 2 + 25px)`,
                                    src: `../../assets/images/4EBHxY7ODzYXmDKKVx5Gmahlg3E.jpg`,
                                    srcSet: `../../assets/images/4EBHxY7ODzYXmDKKVx5Gmahlg3E-d4f3d4.jpg 512w,../../assets/images/4EBHxY7ODzYXmDKKVx5Gmahlg3E-cd1509.jpg 1024w,../../assets/images/4EBHxY7ODzYXmDKKVx5Gmahlg3E.jpg 1920w`,
                                  },
                                  className: `framer-vteh8f`,
                                }),
                              }),
                              /*#__PURE__*/ a(`div`, {
                                className: `framer-95efhd`,
                                children: /*#__PURE__*/ a(w, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ a(t, {
                                    children: /*#__PURE__*/ a(`p`, {
                                      className: `framer-styles-preset-17qvjw9`,
                                      "data-styles-preset": `W6ZCCcKuw`,
                                      children: `A key illustration used as a BLAD for a book on urban legends and experimentation with combining traditional and digital techniques. Referenced were photos from childhood camping trips and the video game that lead to stelz.design the popularity boom of this mysterious figure.`,
                                    }),
                                  }),
                                  className: `framer-hf8bss`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ o(L, {
                            animate: G,
                            className: `framer-19c44la`,
                            "data-framer-appear-id": `19c44la`,
                            "data-framer-name": `img3`,
                            initial: H,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ a(b, {
                                breakpoint: D,
                                overrides: {
                                  euQObvbfb: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: m((h?.y || 0) + 0 + 461.8 + 30 + 1983 + 0 + 0),
                                      pixelHeight: 1844,
                                      pixelWidth: 1440,
                                      sizes: `383px`,
                                      src: `../../assets/images/X0diZl1GSEDPvfmQ2nig6BwFyg-573cea.jpg`,
                                      srcSet: `../../assets/images/X0diZl1GSEDPvfmQ2nig6BwFyg.jpg 799w,../../assets/images/X0diZl1GSEDPvfmQ2nig6BwFyg-573cea.jpg 1440w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ a(g, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: m((h?.y || 0) + 0 + 30 + 1983 + 0 + 0),
                                    pixelHeight: 1844,
                                    pixelWidth: 1440,
                                    sizes: `383px`,
                                    src: `../../assets/images/X0diZl1GSEDPvfmQ2nig6BwFyg-573cea.jpg`,
                                    srcSet: `../../assets/images/X0diZl1GSEDPvfmQ2nig6BwFyg.jpg 799w,../../assets/images/X0diZl1GSEDPvfmQ2nig6BwFyg-573cea.jpg 1440w`,
                                  },
                                  className: `framer-gxjfo9`,
                                }),
                              }),
                              /*#__PURE__*/ a(`div`, {
                                className: `framer-185p9qc`,
                                children: /*#__PURE__*/ a(w, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ a(t, {
                                    children: /*#__PURE__*/ a(`p`, {
                                      className: `framer-styles-preset-17qvjw9`,
                                      "data-styles-preset": `W6ZCCcKuw`,
                                      children: `Poster example`,
                                    }),
                                  }),
                                  className: `framer-c5qgpk`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ o(L, {
                            animate: G,
                            className: `framer-107279l`,
                            "data-framer-appear-id": `107279l`,
                            "data-framer-name": `img4`,
                            initial: H,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ a(b, {
                                breakpoint: D,
                                overrides: {
                                  euQObvbfb: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: m((h?.y || 0) + 0 + 461.8 + 30 + 2644 + 0 + 0),
                                      pixelHeight: 1920,
                                      pixelWidth: 1440,
                                      sizes: `383px`,
                                      src: `../../assets/images/nNVkutqLovq5IHlFCvl7GfVvrg-81fd60.jpg`,
                                      srcSet: `../../assets/images/nNVkutqLovq5IHlFCvl7GfVvrg.jpg 768w,../../assets/images/nNVkutqLovq5IHlFCvl7GfVvrg-81fd60.jpg 1440w`,
                                    },
                                  },
                                  WjJlr4vdn: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: m((h?.y || 0) + 0 + 30 + 2644 + 0 + 0),
                                      pixelHeight: 1920,
                                      pixelWidth: 1440,
                                      sizes: `383px`,
                                      src: `../../assets/images/nNVkutqLovq5IHlFCvl7GfVvrg-81fd60.jpg`,
                                      srcSet: `../../assets/images/nNVkutqLovq5IHlFCvl7GfVvrg.jpg 768w,../../assets/images/nNVkutqLovq5IHlFCvl7GfVvrg-81fd60.jpg 1440w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ a(g, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: m((h?.y || 0) + 0 + 30 + 1983 + 0 + 0),
                                    pixelHeight: 1920,
                                    pixelWidth: 1440,
                                    sizes: `383px`,
                                    src: `../../assets/images/nNVkutqLovq5IHlFCvl7GfVvrg-81fd60.jpg`,
                                    srcSet: `../../assets/images/nNVkutqLovq5IHlFCvl7GfVvrg.jpg 768w,../../assets/images/nNVkutqLovq5IHlFCvl7GfVvrg-81fd60.jpg 1440w`,
                                  },
                                  className: `framer-1vfkjzv`,
                                }),
                              }),
                              /*#__PURE__*/ a(`div`, {
                                className: `framer-ie8pq8`,
                                children: /*#__PURE__*/ a(w, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ a(t, {
                                    children: /*#__PURE__*/ a(`p`, {
                                      className: `framer-styles-preset-17qvjw9`,
                                      "data-styles-preset": `W6ZCCcKuw`,
                                      children: `The base charcoal drawing that was then colored digitally to create the final illustration.`,
                                    }),
                                  }),
                                  className: `framer-7sz181`,
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
        `.framer-R3V09.framer-1jp47t8, .framer-R3V09 .framer-1jp47t8 { display: block; }`,
        `.framer-R3V09.framer-jzxaqs { align-content: flex-start; align-items: flex-start; background-color: var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, #f4c877); display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 50px 0px; position: relative; width: 1200px; }`,
        `.framer-R3V09 .framer-h62vkl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100vh; justify-content: space-between; left: 0px; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 350px; z-index: 1; }`,
        `.framer-R3V09 .framer-16yq7jl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px; position: sticky; top: 0px; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-R3V09 .framer-idoh7f, .framer-R3V09 .framer-hy8p54, .framer-R3V09 .framer-89qf0d, .framer-R3V09 .framer-gt0m84 { --framer-paragraph-spacing: 0px; flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }`,
        `.framer-R3V09 .framer-11r1d93 { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 100%; overflow: hidden; position: relative; white-space: pre-wrap; width: 261px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-R3V09 .framer-1aagdf4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px; position: relative; width: 350px; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-R3V09 .framer-1etlcd2, .framer-R3V09 .framer-1h19zym { background-color: var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, #4b1d48); flex: none; height: 3px; opacity: 0.56; overflow: visible; position: relative; width: 100%; }`,
        `.framer-R3V09 .framer-wc20eh { display: grid; flex: 1 0 0px; gap: 25px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: hidden; padding: 30px; position: relative; width: 1px; }`,
        `.framer-R3V09 .framer-1pe8c40, .framer-R3V09 .framer-1gkfa4k { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; grid-column: span 2; height: min-content; justify-content: center; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-R3V09 .framer-mb7t6y, .framer-R3V09 .framer-1f7cvrf { aspect-ratio: 1.58 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 500px); max-height: 100%; overflow: hidden; position: relative; width: 100%; }`,
        `.framer-R3V09 .framer-3tzgs9, .framer-R3V09 .framer-plrru, .framer-R3V09 .framer-95efhd, .framer-R3V09 .framer-185p9qc, .framer-R3V09 .framer-ie8pq8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-R3V09 .framer-19mr48y, .framer-R3V09 .framer-hf8bss { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-R3V09 .framer-1k106g, .framer-R3V09 .framer-c5qgpk { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-R3V09 .framer-bmsj7i { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; grid-column: span 2; height: 100%; justify-content: center; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-R3V09 .framer-vteh8f { aspect-ratio: 1.58 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 500px); overflow: hidden; position: relative; width: 100%; }`,
        `.framer-R3V09 .framer-19c44la, .framer-R3V09 .framer-107279l { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-R3V09 .framer-gxjfo9, .framer-R3V09 .framer-1vfkjzv { flex: none; height: 500px; overflow: hidden; position: relative; width: 383px; }`,
        `.framer-R3V09 .framer-7sz181 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 92%; word-break: break-word; word-wrap: break-word; }`,
        ...ue,
        ...k,
        ...E,
        ...pe,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-R3V09.framer-jzxaqs { width: 810px; } .framer-R3V09 .framer-mb7t6y, .framer-R3V09 .framer-1f7cvrf { height: var(--framer-aspect-ratio-supported, 253px); } .framer-R3V09 .framer-vteh8f { height: var(--framer-aspect-ratio-supported, 254px); } .framer-R3V09 .framer-19c44la, .framer-R3V09 .framer-107279l { grid-column: span 2; }}`,
        `@media (max-width: 809px) { .framer-R3V09.framer-jzxaqs { flex-direction: column; width: 390px; } .framer-R3V09 .framer-h62vkl { gap: 0px; height: min-content; justify-content: center; left: unset; position: relative; top: unset; width: 100%; } .framer-R3V09 .framer-16yq7jl { position: relative; top: unset; } .framer-R3V09 .framer-wc20eh { flex: none; width: 100%; } .framer-R3V09 .framer-mb7t6y, .framer-R3V09 .framer-1f7cvrf, .framer-R3V09 .framer-vteh8f { height: var(--framer-aspect-ratio-supported, 209px); } .framer-R3V09 .framer-19c44la, .framer-R3V09 .framer-107279l { grid-column: span 2; }}`,
      ]),
      (Z = _(Y, X, `framer-R3V09`)),
      (Z.displayName = `Page 6`),
      (Z.defaultProps = { height: 2628, width: 1200 }),
      h(
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
          ...p(A),
          ...p(se),
          ...p(D),
          ...p(j),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerkyJxj_Z02`,
            slots: [],
            annotations: {
              framerContractVersion: `1`,
              framerDisplayContentsDiv: `false`,
              framerColorSyntax: `true`,
              framerIntrinsicHeight: `2628`,
              framerAcceptsLayoutTemplate: `false`,
              framerImmutableVariables: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"WjJlr4vdn":{"layout":["fixed","auto"]},"euQObvbfb":{"layout":["fixed","auto"]}}}`,
              framerComponentViewportWidth: `true`,
              framerScrollSections: `* @framerResponsiveScreen`,
              framerAutoSizeImages: `true`,
              framerIntrinsicWidth: `1200`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
$();
export { Q as __FramerMetadata__, Z as default };
//# sourceMappingURL=NJ5GNK_9u4zjAv8BEGzqMErU5n-LKX5IKR-V3pXY9qM.D2Jzu53n.mjs.map
