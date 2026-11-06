import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  F as t,
  N as ee,
  T as n,
  b as r,
  c as i,
  m as a,
  s as o,
  u as s,
  w as te,
  x as c,
} from "./react.Dq5lJgOf.mjs";
import { T as l, a as ne, r as u } from "./motion.D3Y82hha.mjs";
import {
  $ as re,
  C as d,
  M as f,
  R as p,
  _ as m,
  at as ie,
  b as h,
  ft as g,
  it as _,
  j as v,
  lt as ae,
  m as y,
  mt as b,
  n as x,
  nt as oe,
  o as se,
  rt as ce,
  t as S,
  ut as le,
  v as C,
} from "./framer.d4MlGAvC.mjs";
import { i as w, n as T, r as E, t as D } from "./SmoothScroll_Prod.f7eF_O69.mjs";
import { i as O, n as k, r as A, t as ue } from "./bxgEdFl3x.BRgl95F3.mjs";
import { n as j, t as M } from "./KGXnTYsGd.DGyEz3Wd.mjs";
import { n as de, r as N } from "./MIzyqw25e.MnP6DWr6.mjs";
var P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (i(),
      p(),
      u(),
      n(),
      w(),
      T(),
      j(),
      O(),
      de(),
      (P = v(D)),
      (F = v(M)),
      (I = b(l.div)),
      (L = v(E)),
      (R = {
        b45AbHaZB: `(min-width: 810px) and (max-width: 1199px)`,
        K0iZbo919: `(max-width: 809px)`,
        lyhat7uo6: `(min-width: 1200px)`,
      }),
      (z = `framer-Xl5nI`),
      (B = {
        b45AbHaZB: `framer-v-vfxudu`,
        K0iZbo919: `framer-v-1fp9quz`,
        lyhat7uo6: `framer-v-k55dgr`,
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
        x: 0,
        y: 0,
      }),
      (H = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (U = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: H,
        x: 0,
        y: -1200,
      }),
      (W = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.8,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        x: 0,
        y: 0,
      }),
      (G = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.8,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: H,
        x: 0,
        y: 0,
      }),
      (K = ({ value: e }) =>
        _()
          ? null
          : /*#__PURE__*/ o(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (q = { Desktop: `lyhat7uo6`, Phone: `K0iZbo919`, Tablet: `b45AbHaZB` }),
      (J = ({ height: e, id: t, width: ee, ...n }) => ({
        ...n,
        variant: q[n.variant] ?? n.variant ?? `lyhat7uo6`,
      })),
      (Y = /*#__PURE__*/ a(function (e, n) {
        let i = c(null),
          a = n ?? i,
          u = te(),
          { activeLocale: f, setLocale: p } = ie(),
          h = re(),
          { style: g, className: _, layoutId: v, variant: b, ...w } = J(e);
        (r(() => {
          let e = N(void 0, f);
          if (e.robots) {
            let t = document.querySelector(`meta[name="robots"]`);
            t
              ? t.setAttribute(`content`, e.robots)
              : ((t = document.createElement(`meta`)),
                t.setAttribute(`name`, `robots`),
                t.setAttribute(`content`, e.robots),
                document.head.appendChild(t));
          }
        }, [void 0, f]),
          ee(() => {
            let e = N(void 0, f);
            ((document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport));
          }, [void 0, f]));
        let [T, O] = ce(b, R, !1),
          k = d(z, ue),
          A = ae(`t0PFbtNka`),
          j = c(null);
        return (
          le(),
          oe({}),
          /*#__PURE__*/ o(se.Provider, {
            value: { primaryVariantId: `lyhat7uo6`, variantClassNames: B },
            children: /*#__PURE__*/ s(ne, {
              id: v ?? u,
              children: [
                /*#__PURE__*/ o(K, {
                  value: `html body { background: var(--token-e963b8ae-02ac-4e93-b75a-f86ceff4c8c2, rgb(50, 58, 44)); }`,
                }),
                /*#__PURE__*/ s(l.div, {
                  ...w,
                  className: d(k, `framer-k55dgr`, _),
                  ref: a,
                  style: { ...g },
                  children: [
                    /*#__PURE__*/ o(S, {
                      children: /*#__PURE__*/ o(x, {
                        className: `framer-c23y5m-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `eDVmTDN3C`,
                        scopeId: `MIzyqw25e`,
                        children: /*#__PURE__*/ o(D, {
                          height: `100%`,
                          id: `eDVmTDN3C`,
                          intensity: 10,
                          layoutId: `eDVmTDN3C`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    /*#__PURE__*/ o(I, {
                      __framer__animate: { transition: H },
                      __framer__animateOnce: !1,
                      __framer__enter: V,
                      __framer__exit: U,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.5,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      className: `framer-s3zp0t`,
                      "data-framer-name": `Hero Section`,
                      id: A,
                      ref: j,
                      style: { transformPerspective: 1200 },
                      children: /*#__PURE__*/ o(`div`, {
                        className: `framer-s5e3qk`,
                        "data-framer-name": `Background`,
                        children: /*#__PURE__*/ s(I, {
                          __framer__animate: { transition: H },
                          __framer__animateOnce: !0,
                          __framer__enter: W,
                          __framer__exit: G,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-t0e11a`,
                          "data-framer-name": `Text + Button`,
                          style: { transformPerspective: 1200 },
                          children: [
                            /*#__PURE__*/ o(C, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ o(t, {
                                children: /*#__PURE__*/ o(`h3`, {
                                  className: `framer-styles-preset-1y82f25`,
                                  "data-styles-preset": `bxgEdFl3x`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10))`,
                                  },
                                  children: `Pardon the dust!`,
                                }),
                              }),
                              className: `framer-k680um`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ o(C, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ o(t, {
                                children: /*#__PURE__*/ o(`h3`, {
                                  className: `framer-styles-preset-1y82f25`,
                                  "data-styles-preset": `bxgEdFl3x`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10))`,
                                  },
                                  children: `This page is still under construction`,
                                }),
                              }),
                              className: `framer-kpivtu`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ o(m, {
                              links: [
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                /*#__PURE__*/ o(y, {
                                  breakpoint: T,
                                  overrides: {
                                    K0iZbo919: {
                                      y: (h?.y || 0) + 0 + 0 + 0 + 0 + 24 + 363.3 + 0 + 166.4,
                                    },
                                  },
                                  children: /*#__PURE__*/ o(S, {
                                    height: 59,
                                    y: (h?.y || 0) + 0 + 0 + 48 + 24 + 315.3 + 0 + 166.4,
                                    children: /*#__PURE__*/ o(x, {
                                      className: `framer-zxo2st-container`,
                                      nodeId: `spm9h0Mtg`,
                                      scopeId: `MIzyqw25e`,
                                      children: /*#__PURE__*/ o(y, {
                                        breakpoint: T,
                                        overrides: {
                                          b45AbHaZB: { nlwAGWLgu: e[1] },
                                          K0iZbo919: { nlwAGWLgu: e[2] },
                                        },
                                        children: /*#__PURE__*/ o(M, {
                                          height: `100%`,
                                          id: `spm9h0Mtg`,
                                          layoutId: `spm9h0Mtg`,
                                          nlwAGWLgu: e[0],
                                          variant: `CPBNX3kaV`,
                                          width: `100%`,
                                          WuckUKYRf: `Back to Home`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    /*#__PURE__*/ o(`div`, {
                      className: `framer-1ak2r7c`,
                      "data-framer-name": `Noise Layer`,
                      children: /*#__PURE__*/ o(S, {
                        children: /*#__PURE__*/ o(x, {
                          className: `framer-5wuuz5-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          nodeId: `Hciz6UdqH`,
                          scopeId: `MIzyqw25e`,
                          children: /*#__PURE__*/ o(E, {
                            backgroundSize: 256,
                            borderRadius: 0,
                            height: `100%`,
                            id: `Hciz6UdqH`,
                            layoutId: `Hciz6UdqH`,
                            opacity: 0.1,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                /*#__PURE__*/ o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (X = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-Xl5nI.framer-164wbve, .framer-Xl5nI .framer-164wbve { display: block; }`,
        `.framer-Xl5nI.framer-k55dgr { align-content: center; align-items: center; background-color: var(--token-e963b8ae-02ac-4e93-b75a-f86ceff4c8c2, #323a2c); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-Xl5nI .framer-c23y5m-container { flex: none; height: auto; left: 50%; position: absolute; top: 0px; transform: translateX(-50%); width: auto; z-index: 1; }`,
        `.framer-Xl5nI .framer-s3zp0t { align-content: center; align-items: center; background-color: var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, #4b1d48); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: visible; padding: 48px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-Xl5nI .framer-s5e3qk { align-content: center; align-items: center; background-color: var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, #f4c877); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: hidden; padding: 24px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Xl5nI .framer-t0e11a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Xl5nI .framer-k680um, .framer-Xl5nI .framer-kpivtu { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Xl5nI .framer-zxo2st-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-Xl5nI .framer-1ak2r7c { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: hidden; padding: 0px; pointer-events: none; position: fixed; right: 0px; top: 0px; z-index: 1; }`,
        `.framer-Xl5nI .framer-5wuuz5-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
        `@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Xl5nI.framer-k55dgr, .framer-Xl5nI .framer-s3zp0t, .framer-Xl5nI .framer-s5e3qk, .framer-Xl5nI .framer-t0e11a, .framer-Xl5nI .framer-1ak2r7c { gap: 0px; } .framer-Xl5nI.framer-k55dgr > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-Xl5nI.framer-k55dgr > :first-child, .framer-Xl5nI .framer-s5e3qk > :first-child, .framer-Xl5nI .framer-t0e11a > :first-child { margin-top: 0px; } .framer-Xl5nI.framer-k55dgr > :last-child, .framer-Xl5nI .framer-s5e3qk > :last-child, .framer-Xl5nI .framer-t0e11a > :last-child { margin-bottom: 0px; } .framer-Xl5nI .framer-s3zp0t > *, .framer-Xl5nI .framer-1ak2r7c > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Xl5nI .framer-s3zp0t > :first-child, .framer-Xl5nI .framer-1ak2r7c > :first-child { margin-left: 0px; } .framer-Xl5nI .framer-s3zp0t > :last-child, .framer-Xl5nI .framer-1ak2r7c > :last-child { margin-right: 0px; } .framer-Xl5nI .framer-s5e3qk > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Xl5nI .framer-t0e11a > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } }`,
        ...k,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-Xl5nI.framer-k55dgr { width: 810px; }}`,
        `@media (max-width: 809px) { .framer-Xl5nI.framer-k55dgr { width: 390px; } .framer-Xl5nI .framer-s3zp0t { flex-direction: column; padding: 0px; } .framer-Xl5nI .framer-s5e3qk, .framer-Xl5nI .framer-5wuuz5-container { height: 1px; width: 100%; } .framer-Xl5nI .framer-1ak2r7c { flex-direction: column; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Xl5nI .framer-s3zp0t, .framer-Xl5nI .framer-1ak2r7c { gap: 0px; } .framer-Xl5nI .framer-s3zp0t > *, .framer-Xl5nI .framer-1ak2r7c > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Xl5nI .framer-s3zp0t > :first-child, .framer-Xl5nI .framer-1ak2r7c > :first-child { margin-top: 0px; } .framer-Xl5nI .framer-s3zp0t > :last-child, .framer-Xl5nI .framer-1ak2r7c > :last-child { margin-bottom: 0px; } }}`,
      ]),
      (Z = g(Y, X, `framer-Xl5nI`)),
      (Z.displayName = `404`),
      (Z.defaultProps = { height: 800, width: 1200 }),
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
          ...P,
          ...F,
          ...L,
          ...f(A),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerMIzyqw25e`,
            slots: [],
            annotations: {
              framerComponentViewportWidth: `true`,
              framerIntrinsicWidth: `1200`,
              framerDisplayContentsDiv: `false`,
              framerAutoSizeImages: `true`,
              framerResponsiveScreen: ``,
              framerColorSyntax: `true`,
              framerContractVersion: `1`,
              framerAcceptsLayoutTemplate: `true`,
              framerScrollSections: `{"t0PFbtNka":{"pattern":":t0PFbtNka","name":"hero-section"}}`,
              framerImmutableVariables: `true`,
              framerIntrinsicHeight: `800`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"b45AbHaZB":{"layout":["fixed","auto"]},"K0iZbo919":{"layout":["fixed","auto"]}}}`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
$();
export { Q as __FramerMetadata__, Z as default };
//# sourceMappingURL=OjT7lNqOKgO35RylbgLHuXPtGMwDmsg2cEpUPG5zfRg.C_DC5n3s.mjs.map
