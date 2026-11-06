import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  F as t,
  N as n,
  T as r,
  b as i,
  c as a,
  l as o,
  m as s,
  s as c,
  u as l,
  w as ee,
  x as u,
} from "./react.Dq5lJgOf.mjs";
import { T as d, a as te, i as ne, r as f } from "./motion.D3Y82hha.mjs";
import {
  $ as re,
  C as p,
  M as m,
  N as h,
  Q as ie,
  R as ae,
  a as g,
  at as oe,
  b as _,
  c as v,
  ft as y,
  ht as b,
  it as x,
  m as S,
  nt as se,
  o as ce,
  rt as le,
  st as ue,
  u as C,
  v as w,
} from "./framer.d4MlGAvC.mjs";
import { i as T, n as E, r as de, t as fe } from "./W6ZCCcKuw.57CkUy80.mjs";
import { i as D, n as pe, r as O, t as me } from "./TPvCPpffK.CJ-lgUmj.mjs";
import { i as k, n as A, r as j, t as he } from "./iBI2c5jgM.QEoKO0-0.mjs";
import { n as M, r as N } from "./QyK1g_RQ2.DBPlNLuf.mjs";
var P, F, I, L, ge, R, z, B, V, H, U, W, G, K, q, J, Y, _e, X, ve, Z, ye, Q, be;
function $() {
  return ($ = e(() => {
    (a(),
      ae(),
      f(),
      r(),
      k(),
      D(),
      T(),
      M(),
      (P = b(d.header)),
      (F = b(d.nav)),
      (I = b(d.div)),
      (L = {
        blzCBTMKs: `(max-width: 809px)`,
        Ev9okp3I6: `(min-width: 1200px)`,
        l3K0Z67iV: `(min-width: 810px) and (max-width: 1199px)`,
      }),
      (ge = () => typeof document < `u`),
      (R = `framer-XzbNX`),
      (z = {
        blzCBTMKs: `framer-v-cetls4`,
        Ev9okp3I6: `framer-v-1pzy562`,
        l3K0Z67iV: `framer-v-1djraab`,
      }),
      (B = {
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
      (V = {
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
      (H = {
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
      (U = {
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
      (W = {
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
      (G = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (K = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: G,
        x: 0,
        y: 0,
      }),
      (q = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: G,
        x: 0,
        y: 0,
      }),
      (J = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Y = ({ children: e, blockDocumentScrolling: t, enabled: n = !0 }) => {
        let [r, i] = ue({ blockDocumentScrolling: t });
        return e({ hide: () => i(!1), show: () => i(!0), toggle: () => i(!r), visible: n && r });
      }),
      (_e = ({ value: e }) =>
        x()
          ? null
          : /*#__PURE__*/ c(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (X = { Desktop: `Ev9okp3I6`, Phone: `blzCBTMKs`, Tablet: `l3K0Z67iV` }),
      (ve = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: X[r.variant] ?? r.variant ?? `Ev9okp3I6`,
      })),
      (Z = /*#__PURE__*/ s(function (e, r) {
        let a = u(null),
          s = r ?? a,
          f = ee(),
          { activeLocale: m, setLocale: ae } = oe(),
          _ = re(),
          { style: y, className: b, layoutId: x, variant: ue, ...T } = ve(e);
        (i(() => {
          let e = N(void 0, m);
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
            let e = N(void 0, m);
            ((document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport));
          }, [void 0, m]));
        let [E, de] = le(ue, L, !1),
          { activeVariantCallback: D, delay: pe } = ie(void 0),
          O = ({ overlay: e, loadMore: t }) =>
            D(async (...t) => {
              e.show();
            }),
          k = p(R, me, fe, he),
          A = u(null),
          j = () => !ge() || E !== `blzCBTMKs`,
          M = u(null),
          G = u(null),
          X = u(null);
        return (
          se({}),
          /*#__PURE__*/ c(ce.Provider, {
            value: { primaryVariantId: `Ev9okp3I6`, variantClassNames: z },
            children: /*#__PURE__*/ l(te, {
              id: x ?? f,
              children: [
                /*#__PURE__*/ c(_e, {
                  value: `html body { background: var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, rgb(244, 200, 119)); }`,
                }),
                /*#__PURE__*/ l(d.div, {
                  ...T,
                  className: p(k, `framer-1pzy562`, b),
                  ref: s,
                  style: { ...y },
                  children: [
                    /*#__PURE__*/ l(`aside`, {
                      className: `framer-1e2ordj`,
                      "data-framer-name": `Sidebar`,
                      children: [
                        /*#__PURE__*/ l(P, {
                          animate: B,
                          className: `framer-1wydw6k`,
                          "data-framer-appear-id": `1wydw6k`,
                          "data-framer-name": `Header`,
                          initial: V,
                          optimized: !0,
                          style: { transformPerspective: 1200 },
                          children: [
                            /*#__PURE__*/ c(S, {
                              breakpoint: E,
                              overrides: {
                                blzCBTMKs: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: h((_?.y || 0) + 0 + 0 + 0 + 0 + 30 + 0),
                                    pixelHeight: 1474,
                                    pixelWidth: 4e3,
                                    sizes: `290px`,
                                    src: `../../assets/images/ACwevQzwr8rMjwg9jinXC7vIrA-656143.png`,
                                    srcSet: `../../assets/images/ACwevQzwr8rMjwg9jinXC7vIrA.png 512w,../../assets/images/ACwevQzwr8rMjwg9jinXC7vIrA-22520a.png 1024w,../../assets/images/ACwevQzwr8rMjwg9jinXC7vIrA-5c978b.png 2048w,../../assets/images/ACwevQzwr8rMjwg9jinXC7vIrA-656143.png 4000w`,
                                  },
                                },
                              },
                              children: /*#__PURE__*/ c(v, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: h((_?.y || 0) + 0 + 0 + 0 + 30 + 0),
                                  pixelHeight: 1474,
                                  pixelWidth: 4e3,
                                  sizes: `290px`,
                                  src: `../../assets/images/ACwevQzwr8rMjwg9jinXC7vIrA-656143.png`,
                                  srcSet: `../../assets/images/ACwevQzwr8rMjwg9jinXC7vIrA.png 512w,../../assets/images/ACwevQzwr8rMjwg9jinXC7vIrA-22520a.png 1024w,../../assets/images/ACwevQzwr8rMjwg9jinXC7vIrA-5c978b.png 2048w,../../assets/images/ACwevQzwr8rMjwg9jinXC7vIrA-656143.png 4000w`,
                                },
                                className: `framer-1131thd`,
                              }),
                            }),
                            /*#__PURE__*/ c(w, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ c(t, {
                                children: /*#__PURE__*/ c(`p`, {
                                  className: `framer-styles-preset-t0brxi`,
                                  "data-styles-preset": `TPvCPpffK`,
                                  children: `In the current marketplaces for pet food, leading competitors do not offer products that meet the medical needs of the pets they claim to provide for. The Klean chain of stores intend to solve this issue by providing healthy foods at reasonable prices to help both pets and customers peace of mind. `,
                                }),
                              }),
                              className: `framer-13zka8b`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        /*#__PURE__*/ l(F, {
                          animate: H,
                          className: `framer-2wxg87`,
                          "data-framer-appear-id": `2wxg87`,
                          "data-framer-name": `Links`,
                          initial: V,
                          optimized: !0,
                          style: { transformPerspective: 1200 },
                          children: [
                            /*#__PURE__*/ c(w, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ c(t, {
                                children: /*#__PURE__*/ c(`p`, {
                                  className: `framer-styles-preset-17qvjw9`,
                                  "data-styles-preset": `W6ZCCcKuw`,
                                  children: /*#__PURE__*/ c(C, {
                                    href: { webPageId: `augiA20Il` },
                                    motionChild: !0,
                                    nodeId: `gXP_bTKRO`,
                                    openInNewTab: !1,
                                    scopeId: `QyK1g_RQ2`,
                                    smoothScroll: !1,
                                    children: /*#__PURE__*/ c(d.a, {
                                      className: `framer-styles-preset-1y1gbtr`,
                                      "data-styles-preset": `iBI2c5jgM`,
                                      children: `Home @_"`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-1nxlyf9`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ c(`div`, {
                              className: `framer-j0q2fp`,
                              "data-framer-name": `Line`,
                            }),
                            /*#__PURE__*/ c(w, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ c(t, {
                                children: /*#__PURE__*/ c(`p`, {
                                  className: `framer-styles-preset-17qvjw9`,
                                  "data-styles-preset": `W6ZCCcKuw`,
                                  children: /*#__PURE__*/ c(C, {
                                    href: `mailto:stelzerash@gmail.com`,
                                    motionChild: !0,
                                    nodeId: `Z3hEuOXge`,
                                    openInNewTab: !0,
                                    scopeId: `QyK1g_RQ2`,
                                    smoothScroll: !1,
                                    children: /*#__PURE__*/ c(d.a, {
                                      className: `framer-styles-preset-1y1gbtr`,
                                      "data-styles-preset": `iBI2c5jgM`,
                                      children: `Contact`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-1j8m91a`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ c(`div`, {
                              className: `framer-bxac1t`,
                              "data-framer-name": `Line`,
                            }),
                            /*#__PURE__*/ c(w, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ c(t, {
                                children: /*#__PURE__*/ c(`p`, {
                                  className: `framer-styles-preset-17qvjw9`,
                                  "data-styles-preset": `W6ZCCcKuw`,
                                  children: /*#__PURE__*/ c(C, {
                                    href: `https://www.linkedin.com/in/ashleystelz/`,
                                    motionChild: !0,
                                    nodeId: `URIk5CcKC`,
                                    openInNewTab: !0,
                                    scopeId: `QyK1g_RQ2`,
                                    smoothScroll: !1,
                                    children: /*#__PURE__*/ c(d.a, {
                                      className: `framer-styles-preset-1y1gbtr`,
                                      "data-styles-preset": `iBI2c5jgM`,
                                      children: `LinkedIn`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-1hmoxi5`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ c(S, {
                      breakpoint: E,
                      overrides: {
                        blzCBTMKs: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: h((_?.y || 0) + 0 + 558.6),
                            pixelHeight: 1883,
                            pixelWidth: 1440,
                            sizes: _?.width || `100vw`,
                            src: `../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ.jpg`,
                            srcSet: `../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ-dbc0c2.jpg 783w,../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ.jpg 1440w`,
                          },
                        },
                      },
                      children: /*#__PURE__*/ l(v, {
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
                        className: `framer-mwpqhm`,
                        children: [
                          /*#__PURE__*/ l(I, {
                            animate: U,
                            className: `framer-10ekbrd`,
                            "data-framer-appear-id": `10ekbrd`,
                            "data-framer-name": `hero`,
                            initial: V,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ c(S, {
                                breakpoint: E,
                                overrides: {
                                  blzCBTMKs: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: h((_?.y || 0) + 0 + 558.6 + 30 + 0 + 0 + 0),
                                      pixelHeight: 1183,
                                      pixelWidth: 1920,
                                      sizes: `calc(max((${_?.width || `100vw`} - 85px) / 2, 50px) * 2 + 25px)`,
                                      src: `../../assets/images/0Ilq67S1JZyHxpIHjpd4uolk0w.png`,
                                      srcSet: `../../assets/images/0Ilq67S1JZyHxpIHjpd4uolk0w-fbe8fd.png 512w,../../assets/images/0Ilq67S1JZyHxpIHjpd4uolk0w-a7d9f3.png 1024w,../../assets/images/0Ilq67S1JZyHxpIHjpd4uolk0w.png 1920w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ c(v, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: h((_?.y || 0) + 0 + 30 + 0 + 0 + 0),
                                    pixelHeight: 1183,
                                    pixelWidth: 1920,
                                    sizes: `calc(max((max(${_?.width || `100vw`} - 350px, 1px) - 85px) / 2, 50px) * 2 + 25px)`,
                                    src: `../../assets/images/0Ilq67S1JZyHxpIHjpd4uolk0w.png`,
                                    srcSet: `../../assets/images/0Ilq67S1JZyHxpIHjpd4uolk0w-fbe8fd.png 512w,../../assets/images/0Ilq67S1JZyHxpIHjpd4uolk0w-a7d9f3.png 1024w,../../assets/images/0Ilq67S1JZyHxpIHjpd4uolk0w.png 1920w`,
                                  },
                                  className: `framer-g0aknz`,
                                }),
                              }),
                              /*#__PURE__*/ c(`div`, {
                                className: `framer-a3org`,
                                children: /*#__PURE__*/ c(w, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ c(t, {
                                    children: /*#__PURE__*/ c(`p`, {
                                      className: `framer-styles-preset-17qvjw9`,
                                      "data-styles-preset": `W6ZCCcKuw`,
                                      children: `Recycled-paper bag`,
                                    }),
                                  }),
                                  className: `framer-1a4g1go`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ l(I, {
                            animate: U,
                            className: `framer-nn08aj`,
                            "data-framer-appear-id": `nn08aj`,
                            "data-framer-name": `img1`,
                            initial: V,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ c(S, {
                                breakpoint: E,
                                overrides: {
                                  blzCBTMKs: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: h((_?.y || 0) + 0 + 558.6 + 30 + 595.4 + 0 + 0),
                                      pixelHeight: 2878,
                                      pixelWidth: 1920,
                                      positionX: `66.3%`,
                                      positionY: `30.6%`,
                                      sizes: `calc(max((${_?.width || `100vw`} - 85px) / 2, 50px) * 2 + 25px)`,
                                      src: `../../assets/images/cw6roeJ9neNcE393YxexLKvVXcs-8e5201.png`,
                                      srcSet: `../../assets/images/cw6roeJ9neNcE393YxexLKvVXcs.png 683w,../../assets/images/cw6roeJ9neNcE393YxexLKvVXcs-26a19f.png 1366w,../../assets/images/cw6roeJ9neNcE393YxexLKvVXcs-8e5201.png 1920w`,
                                    },
                                  },
                                  l3K0Z67iV: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: h((_?.y || 0) + 0 + 30 + 595.4 + 0 + 0),
                                      pixelHeight: 2878,
                                      pixelWidth: 1920,
                                      positionX: `66.3%`,
                                      positionY: `30.6%`,
                                      sizes: `calc(max((max(${_?.width || `100vw`} - 350px, 1px) - 85px) / 2, 50px) * 2 + 25px)`,
                                      src: `../../assets/images/cw6roeJ9neNcE393YxexLKvVXcs-8e5201.png`,
                                      srcSet: `../../assets/images/cw6roeJ9neNcE393YxexLKvVXcs.png 683w,../../assets/images/cw6roeJ9neNcE393YxexLKvVXcs-26a19f.png 1366w,../../assets/images/cw6roeJ9neNcE393YxexLKvVXcs-8e5201.png 1920w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ c(v, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: h((_?.y || 0) + 0 + 30 + 595.4 + 0 + 0),
                                    pixelHeight: 2878,
                                    pixelWidth: 1920,
                                    positionX: `66.3%`,
                                    positionY: `30.6%`,
                                    sizes: `max((max(${_?.width || `100vw`} - 350px, 1px) - 85px) / 2, 50px)`,
                                    src: `../../assets/images/cw6roeJ9neNcE393YxexLKvVXcs-8e5201.png`,
                                    srcSet: `../../assets/images/cw6roeJ9neNcE393YxexLKvVXcs.png 683w,../../assets/images/cw6roeJ9neNcE393YxexLKvVXcs-26a19f.png 1366w,../../assets/images/cw6roeJ9neNcE393YxexLKvVXcs-8e5201.png 1920w`,
                                  },
                                  className: `framer-nl349l`,
                                }),
                              }),
                              /*#__PURE__*/ c(`div`, {
                                className: `framer-sncqou`,
                                children: /*#__PURE__*/ c(w, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ c(t, {
                                    children: /*#__PURE__*/ c(`p`, {
                                      className: `framer-styles-preset-17qvjw9`,
                                      "data-styles-preset": `W6ZCCcKuw`,
                                      children: `A Klean Storefront`,
                                    }),
                                  }),
                                  className: `framer-7ciofs`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ l(I, {
                            animate: U,
                            className: `framer-1midu2a`,
                            "data-framer-appear-id": `1midu2a`,
                            "data-framer-name": `img2`,
                            initial: V,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ c(S, {
                                breakpoint: E,
                                overrides: {
                                  blzCBTMKs: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: h((_?.y || 0) + 0 + 558.6 + 30 + 1190.8 + 0 + 0),
                                      pixelHeight: 1027,
                                      pixelWidth: 665,
                                      positionX: `58.4%`,
                                      positionY: `38.3%`,
                                      sizes: `calc(max((${_?.width || `100vw`} - 85px) / 2, 50px) * 2 + 25px)`,
                                      src: `../../assets/images/OLFKX6v1O8iflhOVbSKwh4cDtEE-b6c4c6.jpg`,
                                      srcSet: `../../assets/images/OLFKX6v1O8iflhOVbSKwh4cDtEE.jpg 663w,../../assets/images/OLFKX6v1O8iflhOVbSKwh4cDtEE-b6c4c6.jpg 665w`,
                                    },
                                  },
                                  l3K0Z67iV: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: h((_?.y || 0) + 0 + 30 + 1190.8 + 0 + 0),
                                      pixelHeight: 1027,
                                      pixelWidth: 665,
                                      positionX: `58.4%`,
                                      positionY: `38.3%`,
                                      sizes: `calc(max((max(${_?.width || `100vw`} - 350px, 1px) - 85px) / 2, 50px) * 2 + 25px)`,
                                      src: `../../assets/images/OLFKX6v1O8iflhOVbSKwh4cDtEE-b6c4c6.jpg`,
                                      srcSet: `../../assets/images/OLFKX6v1O8iflhOVbSKwh4cDtEE.jpg 663w,../../assets/images/OLFKX6v1O8iflhOVbSKwh4cDtEE-b6c4c6.jpg 665w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ c(v, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: h((_?.y || 0) + 0 + 30 + 595.4 + 0 + 0),
                                    pixelHeight: 1027,
                                    pixelWidth: 665,
                                    positionX: `58.4%`,
                                    positionY: `38.3%`,
                                    sizes: `max((max(${_?.width || `100vw`} - 350px, 1px) - 85px) / 2, 50px)`,
                                    src: `../../assets/images/OLFKX6v1O8iflhOVbSKwh4cDtEE-b6c4c6.jpg`,
                                    srcSet: `../../assets/images/OLFKX6v1O8iflhOVbSKwh4cDtEE.jpg 663w,../../assets/images/OLFKX6v1O8iflhOVbSKwh4cDtEE-b6c4c6.jpg 665w`,
                                  },
                                  className: `framer-1jk4epd`,
                                }),
                              }),
                              /*#__PURE__*/ c(`div`, {
                                className: `framer-1r5pzwt`,
                                children: /*#__PURE__*/ c(w, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ c(t, {
                                    children: /*#__PURE__*/ c(`p`, {
                                      className: `framer-styles-preset-17qvjw9`,
                                      "data-styles-preset": `W6ZCCcKuw`,
                                      children: `A Klean Employee wearing their apron`,
                                    }),
                                  }),
                                  className: `framer-18480nk`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ l(I, {
                            animate: W,
                            className: `framer-ildm0m`,
                            "data-framer-appear-id": `ildm0m`,
                            "data-framer-name": `img3`,
                            initial: V,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ c(Y, {
                                blockDocumentScrolling: !1,
                                enabled: j(),
                                children: (e) =>
                                  /*#__PURE__*/ c(o, {
                                    children: /*#__PURE__*/ c(S, {
                                      breakpoint: E,
                                      overrides: {
                                        blzCBTMKs: {
                                          background: {
                                            alt: ``,
                                            fit: `fit`,
                                            loading: h(
                                              (_?.y || 0) + 0 + 558.6 + 30 + 1786.2 + 0 + 0
                                            ),
                                            pixelHeight: 2225,
                                            pixelWidth: 1440,
                                            positionX: `center`,
                                            positionY: `center`,
                                            sizes: `calc(max((${_?.width || `100vw`} - 85px) / 2, 50px) * 2 + 25px)`,
                                            src: `../../assets/images/tGJK85UHlXpeb4ck2kBTUmLQWk-7c1554.jpg`,
                                            srcSet: `../../assets/images/tGJK85UHlXpeb4ck2kBTUmLQWk.jpg 662w,../../assets/images/tGJK85UHlXpeb4ck2kBTUmLQWk-b8f62f.jpg 1325w,../../assets/images/tGJK85UHlXpeb4ck2kBTUmLQWk-7c1554.jpg 1440w`,
                                          },
                                        },
                                        l3K0Z67iV: {
                                          background: {
                                            alt: ``,
                                            fit: `fit`,
                                            loading: h((_?.y || 0) + 0 + 30 + 1786.2 + 0 + 0),
                                            pixelHeight: 2225,
                                            pixelWidth: 1440,
                                            positionX: `center`,
                                            positionY: `center`,
                                            sizes: `calc(max((max(${_?.width || `100vw`} - 350px, 1px) - 85px) / 2, 50px) * 2 + 25px)`,
                                            src: `../../assets/images/tGJK85UHlXpeb4ck2kBTUmLQWk-7c1554.jpg`,
                                            srcSet: `../../assets/images/tGJK85UHlXpeb4ck2kBTUmLQWk.jpg 662w,../../assets/images/tGJK85UHlXpeb4ck2kBTUmLQWk-b8f62f.jpg 1325w,../../assets/images/tGJK85UHlXpeb4ck2kBTUmLQWk-7c1554.jpg 1440w`,
                                          },
                                        },
                                      },
                                      children: /*#__PURE__*/ c(v, {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          loading: h((_?.y || 0) + 0 + 30 + 1190.8 + 0 + 0),
                                          pixelHeight: 2225,
                                          pixelWidth: 1440,
                                          positionX: `center`,
                                          positionY: `center`,
                                          sizes: `max((max(${_?.width || `100vw`} - 350px, 1px) - 85px) / 2, 50px)`,
                                          src: `../../assets/images/tGJK85UHlXpeb4ck2kBTUmLQWk-7c1554.jpg`,
                                          srcSet: `../../assets/images/tGJK85UHlXpeb4ck2kBTUmLQWk.jpg 662w,../../assets/images/tGJK85UHlXpeb4ck2kBTUmLQWk-b8f62f.jpg 1325w,../../assets/images/tGJK85UHlXpeb4ck2kBTUmLQWk-7c1554.jpg 1440w`,
                                        },
                                        className: `framer-13398fj`,
                                        id: `13398fj`,
                                        onTap: O({ overlay: e }),
                                        ref: A,
                                        children:
                                          j() &&
                                          /*#__PURE__*/ c(ne, {
                                            children:
                                              e.visible &&
                                              /*#__PURE__*/ c(S, {
                                                breakpoint: E,
                                                overrides: {
                                                  l3K0Z67iV: { offsetX: -166, offsetY: -767.78125 },
                                                },
                                                children: /*#__PURE__*/ c(g, {
                                                  alignment: `center`,
                                                  anchorRef: A,
                                                  className: p(k),
                                                  collisionDetection: !0,
                                                  collisionDetectionPadding: 20,
                                                  "data-framer-portal-id": `13398fj`,
                                                  offsetX: 0.5,
                                                  offsetY: -757.1875,
                                                  onDismiss: e.hide,
                                                  placement: `bottom`,
                                                  safeArea: !1,
                                                  zIndex: 11,
                                                  children: /*#__PURE__*/ c(S, {
                                                    breakpoint: E,
                                                    overrides: {
                                                      l3K0Z67iV: {
                                                        background: {
                                                          alt: ``,
                                                          fit: `fit`,
                                                          loading: h(
                                                            (_?.y || 0) +
                                                              0 +
                                                              30 +
                                                              1786.2 +
                                                              0 +
                                                              0 +
                                                              -412
                                                          ),
                                                          pixelHeight: 2225,
                                                          pixelWidth: 1440,
                                                          positionX: `center`,
                                                          positionY: `center`,
                                                          sizes: `732px`,
                                                          src: `../../assets/images/tGJK85UHlXpeb4ck2kBTUmLQWk-7c1554.jpg`,
                                                          srcSet: `../../assets/images/tGJK85UHlXpeb4ck2kBTUmLQWk.jpg 662w,../../assets/images/tGJK85UHlXpeb4ck2kBTUmLQWk-b8f62f.jpg 1325w,../../assets/images/tGJK85UHlXpeb4ck2kBTUmLQWk-7c1554.jpg 1440w`,
                                                        },
                                                      },
                                                    },
                                                    children: /*#__PURE__*/ c(v, {
                                                      animate: q,
                                                      background: {
                                                        alt: ``,
                                                        fit: `fit`,
                                                        loading: h(
                                                          (_?.y || 0) +
                                                            0 +
                                                            30 +
                                                            1190.8 +
                                                            0 +
                                                            0 +
                                                            -412
                                                        ),
                                                        pixelHeight: 2225,
                                                        pixelWidth: 1440,
                                                        positionX: `center`,
                                                        positionY: `center`,
                                                        sizes: `732px`,
                                                        src: `../../assets/images/tGJK85UHlXpeb4ck2kBTUmLQWk-7c1554.jpg`,
                                                        srcSet: `../../assets/images/tGJK85UHlXpeb4ck2kBTUmLQWk.jpg 662w,../../assets/images/tGJK85UHlXpeb4ck2kBTUmLQWk-b8f62f.jpg 1325w,../../assets/images/tGJK85UHlXpeb4ck2kBTUmLQWk-7c1554.jpg 1440w`,
                                                      },
                                                      className: `framer-159cga4 hidden-cetls4`,
                                                      exit: K,
                                                      initial: J,
                                                      ref: M,
                                                      role: `dialog`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                          }),
                                      }),
                                    }),
                                  }),
                              }),
                              /*#__PURE__*/ c(`div`, {
                                className: `framer-wcz360`,
                                children: /*#__PURE__*/ c(w, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ c(t, {
                                    children: /*#__PURE__*/ c(`p`, {
                                      className: `framer-styles-preset-17qvjw9`,
                                      "data-styles-preset": `W6ZCCcKuw`,
                                      children: `The Klean branding pitch `,
                                    }),
                                  }),
                                  className: `framer-1vwd38f`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ l(I, {
                            animate: W,
                            className: `framer-qqfgao`,
                            "data-framer-appear-id": `qqfgao`,
                            "data-framer-name": `img4`,
                            initial: V,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ c(Y, {
                                blockDocumentScrolling: !1,
                                enabled: j(),
                                children: (e) =>
                                  /*#__PURE__*/ c(o, {
                                    children: /*#__PURE__*/ c(S, {
                                      breakpoint: E,
                                      overrides: {
                                        blzCBTMKs: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            loading: h(
                                              (_?.y || 0) + 0 + 558.6 + 30 + 2381.6 + 0 + 0
                                            ),
                                            pixelHeight: 1148,
                                            pixelWidth: 1440,
                                            positionX: `75.8%`,
                                            positionY: `48.7%`,
                                            sizes: `calc(max((${_?.width || `100vw`} - 85px) / 2, 50px) * 2 + 25px)`,
                                            src: `../../assets/images/0sE0a779hCrCMJ5roNUCiKZQw8-d13897.jpg`,
                                            srcSet: `../../assets/images/0sE0a779hCrCMJ5roNUCiKZQw8.jpg 512w,../../assets/images/0sE0a779hCrCMJ5roNUCiKZQw8-ad8d6c.jpg 1024w,../../assets/images/0sE0a779hCrCMJ5roNUCiKZQw8-d13897.jpg 1440w`,
                                          },
                                        },
                                        l3K0Z67iV: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            loading: h((_?.y || 0) + 0 + 30 + 2381.6 + 0 + 0),
                                            pixelHeight: 1148,
                                            pixelWidth: 1440,
                                            positionX: `75.8%`,
                                            positionY: `48.7%`,
                                            sizes: `calc(max((max(${_?.width || `100vw`} - 350px, 1px) - 85px) / 2, 50px) * 2 + 25px)`,
                                            src: `../../assets/images/0sE0a779hCrCMJ5roNUCiKZQw8-d13897.jpg`,
                                            srcSet: `../../assets/images/0sE0a779hCrCMJ5roNUCiKZQw8.jpg 512w,../../assets/images/0sE0a779hCrCMJ5roNUCiKZQw8-ad8d6c.jpg 1024w,../../assets/images/0sE0a779hCrCMJ5roNUCiKZQw8-d13897.jpg 1440w`,
                                          },
                                        },
                                      },
                                      children: /*#__PURE__*/ c(v, {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          loading: h((_?.y || 0) + 0 + 30 + 1190.8 + 0 + 0),
                                          pixelHeight: 1148,
                                          pixelWidth: 1440,
                                          positionX: `75.8%`,
                                          positionY: `48.7%`,
                                          sizes: `max((max(${_?.width || `100vw`} - 350px, 1px) - 85px) / 2, 50px)`,
                                          src: `../../assets/images/0sE0a779hCrCMJ5roNUCiKZQw8-d13897.jpg`,
                                          srcSet: `../../assets/images/0sE0a779hCrCMJ5roNUCiKZQw8.jpg 512w,../../assets/images/0sE0a779hCrCMJ5roNUCiKZQw8-ad8d6c.jpg 1024w,../../assets/images/0sE0a779hCrCMJ5roNUCiKZQw8-d13897.jpg 1440w`,
                                        },
                                        className: `framer-n9jkdg`,
                                        id: `n9jkdg`,
                                        onTap: O({ overlay: e }),
                                        ref: G,
                                        children:
                                          j() &&
                                          /*#__PURE__*/ c(ne, {
                                            children:
                                              e.visible &&
                                              /*#__PURE__*/ c(S, {
                                                breakpoint: E,
                                                overrides: {
                                                  l3K0Z67iV: { offsetX: -160.5, offsetY: -499.625 },
                                                },
                                                children: /*#__PURE__*/ c(g, {
                                                  alignment: `center`,
                                                  anchorRef: G,
                                                  className: p(k),
                                                  collisionDetection: !0,
                                                  collisionDetectionPadding: 20,
                                                  "data-framer-portal-id": `n9jkdg`,
                                                  offsetX: -369.5,
                                                  offsetY: -733.1875,
                                                  onDismiss: e.hide,
                                                  placement: `bottom`,
                                                  safeArea: !1,
                                                  zIndex: 11,
                                                  children: /*#__PURE__*/ c(S, {
                                                    breakpoint: E,
                                                    overrides: {
                                                      l3K0Z67iV: {
                                                        background: {
                                                          alt: ``,
                                                          fit: `fit`,
                                                          loading: h(
                                                            (_?.y || 0) +
                                                              0 +
                                                              30 +
                                                              2381.6 +
                                                              0 +
                                                              0 +
                                                              -285.5
                                                          ),
                                                          pixelHeight: 1148,
                                                          pixelWidth: 1440,
                                                          positionX: `center`,
                                                          positionY: `center`,
                                                          sizes: `721px`,
                                                          src: `../../assets/images/0sE0a779hCrCMJ5roNUCiKZQw8-d13897.jpg`,
                                                          srcSet: `../../assets/images/0sE0a779hCrCMJ5roNUCiKZQw8.jpg 512w,../../assets/images/0sE0a779hCrCMJ5roNUCiKZQw8-ad8d6c.jpg 1024w,../../assets/images/0sE0a779hCrCMJ5roNUCiKZQw8-d13897.jpg 1440w`,
                                                        },
                                                      },
                                                    },
                                                    children: /*#__PURE__*/ c(v, {
                                                      animate: q,
                                                      background: {
                                                        alt: ``,
                                                        fit: `fit`,
                                                        loading: h(
                                                          (_?.y || 0) +
                                                            0 +
                                                            30 +
                                                            1190.8 +
                                                            0 +
                                                            0 +
                                                            -378
                                                        ),
                                                        pixelHeight: 1148,
                                                        pixelWidth: 1440,
                                                        positionX: `center`,
                                                        positionY: `center`,
                                                        sizes: `955px`,
                                                        src: `../../assets/images/0sE0a779hCrCMJ5roNUCiKZQw8-d13897.jpg`,
                                                        srcSet: `../../assets/images/0sE0a779hCrCMJ5roNUCiKZQw8.jpg 512w,../../assets/images/0sE0a779hCrCMJ5roNUCiKZQw8-ad8d6c.jpg 1024w,../../assets/images/0sE0a779hCrCMJ5roNUCiKZQw8-d13897.jpg 1440w`,
                                                      },
                                                      className: `framer-1fi64xx hidden-cetls4`,
                                                      exit: K,
                                                      initial: J,
                                                      ref: X,
                                                      role: `dialog`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                          }),
                                      }),
                                    }),
                                  }),
                              }),
                              /*#__PURE__*/ c(`div`, {
                                className: `framer-1t7sv2o`,
                                children: /*#__PURE__*/ c(w, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ c(t, {
                                    children: /*#__PURE__*/ c(`p`, {
                                      className: `framer-styles-preset-17qvjw9`,
                                      "data-styles-preset": `W6ZCCcKuw`,
                                      children: `Initial concepts for the Klean logo`,
                                    }),
                                  }),
                                  className: `framer-1qiw8hi`,
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
                /*#__PURE__*/ c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (ye = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-XzbNX.framer-cbz3ar, .framer-XzbNX .framer-cbz3ar { display: block; }`,
        `.framer-XzbNX.framer-1pzy562 { align-content: flex-start; align-items: flex-start; background-color: var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, #f4c877); display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 50px 0px; position: relative; width: 1200px; }`,
        `.framer-XzbNX .framer-1e2ordj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100vh; justify-content: space-between; left: 0px; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 350px; z-index: 1; }`,
        `.framer-XzbNX .framer-1wydw6k { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px; position: sticky; top: 0px; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-XzbNX .framer-1131thd { flex: none; height: 176px; overflow: hidden; position: relative; width: 290px; }`,
        `.framer-XzbNX .framer-13zka8b { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 100%; overflow: hidden; position: relative; white-space: pre-wrap; width: 261px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-XzbNX .framer-2wxg87 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-XzbNX .framer-1nxlyf9, .framer-XzbNX .framer-1j8m91a, .framer-XzbNX .framer-1hmoxi5 { --framer-paragraph-spacing: 0px; flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }`,
        `.framer-XzbNX .framer-j0q2fp, .framer-XzbNX .framer-bxac1t { background-color: var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, #4b1d48); flex: none; height: 3px; opacity: 0.56; overflow: visible; position: relative; width: 100%; }`,
        `.framer-XzbNX .framer-mwpqhm { display: grid; flex: 1 0 0px; gap: 25px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: hidden; padding: 30px; position: relative; width: 1px; }`,
        `.framer-XzbNX .framer-10ekbrd { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; grid-column: span 2; height: min-content; justify-content: center; justify-self: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-XzbNX .framer-g0aknz, .framer-XzbNX .framer-nl349l, .framer-XzbNX .framer-1jk4epd { flex: none; height: 500px; overflow: hidden; position: relative; width: 100%; }`,
        `.framer-XzbNX .framer-a3org, .framer-XzbNX .framer-sncqou, .framer-XzbNX .framer-1r5pzwt, .framer-XzbNX .framer-1t7sv2o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-XzbNX .framer-1a4g1go, .framer-XzbNX .framer-7ciofs, .framer-XzbNX .framer-18480nk, .framer-XzbNX .framer-1qiw8hi { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-XzbNX .framer-nn08aj, .framer-XzbNX .framer-1midu2a { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-XzbNX .framer-ildm0m, .framer-XzbNX .framer-qqfgao { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-XzbNX .framer-13398fj { cursor: pointer; flex: none; gap: 10px; height: 500px; overflow: hidden; position: relative; width: 100%; }`,
        `.framer-XzbNX .framer-159cga4 { border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.05); height: 824px; overflow: hidden; position: relative; width: 732px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-XzbNX .framer-wcz360 { display: grid; flex: none; gap: 10px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-XzbNX .framer-1vwd38f { --framer-paragraph-spacing: 0px; align-self: start; flex: none; height: 100%; justify-self: start; position: relative; white-space: pre; width: 100%; }`,
        `.framer-XzbNX .framer-n9jkdg { cursor: pointer; flex: none; height: 500px; overflow: hidden; position: relative; width: 100%; }`,
        `.framer-XzbNX .framer-1fi64xx { height: 756px; overflow: visible; position: relative; width: 955px; will-change: var(--framer-will-change-effect-override, transform); }`,
        ...pe,
        ...E,
        ...A,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-XzbNX.framer-1pzy562 { width: 810px; } .framer-XzbNX .framer-nn08aj, .framer-XzbNX .framer-1midu2a, .framer-XzbNX .framer-ildm0m, .framer-XzbNX .framer-qqfgao { grid-column: span 2; } .framer-XzbNX .framer-1fi64xx { height: 571px; width: 721px; }}`,
        `@media (max-width: 809px) { .framer-XzbNX.framer-1pzy562 { flex-direction: column; width: 390px; } .framer-XzbNX .framer-1e2ordj { gap: 0px; height: min-content; justify-content: center; left: unset; position: relative; top: unset; width: 100%; } .framer-XzbNX .framer-1wydw6k { position: relative; top: unset; } .framer-XzbNX .framer-mwpqhm { flex: none; width: 100%; } .framer-XzbNX .framer-nn08aj, .framer-XzbNX .framer-1midu2a, .framer-XzbNX .framer-ildm0m, .framer-XzbNX .framer-qqfgao { grid-column: span 2; }}`,
      ]),
      (Q = y(Z, ye, `framer-XzbNX`)),
      (Q.displayName = `Page`),
      (Q.defaultProps = { height: 1871, width: 1200 }),
      _(
        Q,
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
          ...m(O),
          ...m(de),
          ...m(j),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (be = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerQyK1g_RQ2`,
            slots: [],
            annotations: {
              framerScrollSections: `* @framerResponsiveScreen`,
              framerIntrinsicHeight: `1871`,
              framerIntrinsicWidth: `1200`,
              framerAutoSizeImages: `true`,
              framerDisplayContentsDiv: `false`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"l3K0Z67iV":{"layout":["fixed","auto"]},"blzCBTMKs":{"layout":["fixed","auto"]}}}`,
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerImmutableVariables: `true`,
              framerColorSyntax: `true`,
              framerAcceptsLayoutTemplate: `false`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
$();
export { be as __FramerMetadata__, Q as default };
//# sourceMappingURL=j9nSc9tggHmPw6SY6senH-TrHun6q_lM1smBdyhM7bw.BgCgQ3tQ.mjs.map
