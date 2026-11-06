import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  F as t,
  N as n,
  T as r,
  b as ee,
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
  _ as ie,
  at as m,
  b as h,
  ft as g,
  it as _,
  j as v,
  lt as y,
  m as b,
  mt as x,
  n as S,
  nt as ae,
  o as oe,
  rt as se,
  t as C,
  ut as ce,
  v as le,
} from "./framer.d4MlGAvC.mjs";
import { i as w, n as T, r as E, t as D } from "./SmoothScroll_Prod.f7eF_O69.mjs";
import { i as O, n as k, r as A, t as ue } from "./bxgEdFl3x.BRgl95F3.mjs";
import { n as j, t as M } from "./KGXnTYsGd.DGyEz3Wd.mjs";
import { n as de, r as N } from "./f_gW3KuGX.BeCkKIUb.mjs";
var P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    (i(),
      p(),
      u(),
      r(),
      w(),
      T(),
      j(),
      O(),
      de(),
      (P = v(D)),
      (F = v(M)),
      (I = x(l.div)),
      (L = v(E)),
      (R = {
        d0Rd4khRX: `(min-width: 810px) and (max-width: 1199px)`,
        O2qsIp_bQ: `(min-width: 1200px)`,
        OdGIWK9lf: `(max-width: 809px)`,
      }),
      (z = `framer-JXBzL`),
      (B = {
        d0Rd4khRX: `framer-v-xg4l2t`,
        O2qsIp_bQ: `framer-v-z45z91`,
        OdGIWK9lf: `framer-v-adhs2w`,
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
      (q = { Desktop: `O2qsIp_bQ`, Phone: `OdGIWK9lf`, Tablet: `d0Rd4khRX` }),
      (J = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: q[r.variant] ?? r.variant ?? `O2qsIp_bQ`,
      })),
      (Y = /*#__PURE__*/ a(function (e, r) {
        let i = c(null),
          a = r ?? i,
          u = te(),
          { activeLocale: f, setLocale: p } = m(),
          h = re(),
          { style: g, className: _, layoutId: v, variant: x, ...w } = J(e);
        (ee(() => {
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
          n(() => {
            let e = N(void 0, f);
            ((document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport));
          }, [void 0, f]));
        let [T, O] = se(x, R, !1),
          k = d(z, ue),
          A = y(`xb3d5Umth`),
          j = c(null);
        return (
          ce(),
          ae({}),
          /*#__PURE__*/ o(oe.Provider, {
            value: { primaryVariantId: `O2qsIp_bQ`, variantClassNames: B },
            children: /*#__PURE__*/ s(ne, {
              id: v ?? u,
              children: [
                /*#__PURE__*/ o(K, {
                  value: `html body { background: var(--token-e963b8ae-02ac-4e93-b75a-f86ceff4c8c2, rgb(50, 58, 44)); }`,
                }),
                /*#__PURE__*/ s(l.div, {
                  ...w,
                  className: d(k, `framer-z45z91`, _),
                  ref: a,
                  style: { ...g },
                  children: [
                    /*#__PURE__*/ o(C, {
                      children: /*#__PURE__*/ o(S, {
                        className: `framer-g9w611-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        nodeId: `GXT794xAH`,
                        scopeId: `f_gW3KuGX`,
                        children: /*#__PURE__*/ o(D, {
                          height: `100%`,
                          id: `GXT794xAH`,
                          intensity: 10,
                          layoutId: `GXT794xAH`,
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
                      className: `framer-19rkilm`,
                      "data-framer-name": `Hero Section`,
                      id: A,
                      ref: j,
                      style: { transformPerspective: 1200 },
                      children: /*#__PURE__*/ o(`div`, {
                        className: `framer-17s02my`,
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
                          className: `framer-rh4z5t`,
                          "data-framer-name": `Text + Button`,
                          style: { transformPerspective: 1200 },
                          children: [
                            /*#__PURE__*/ o(le, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ o(t, {
                                children: /*#__PURE__*/ o(`h3`, {
                                  className: `framer-styles-preset-1y82f25`,
                                  "data-styles-preset": `bxgEdFl3x`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10))`,
                                  },
                                  children: `oops! The page you're looking for doesn't exist`,
                                }),
                              }),
                              className: `framer-164bx12`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ o(ie, {
                              links: [
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                /*#__PURE__*/ o(b, {
                                  breakpoint: T,
                                  overrides: {
                                    OdGIWK9lf: {
                                      y: (h?.y || 0) + 0 + 0 + 0 + 0 + 24 + 404.9 + 0 + 83.2,
                                    },
                                  },
                                  children: /*#__PURE__*/ o(C, {
                                    height: 59,
                                    y: (h?.y || 0) + 0 + 0 + 48 + 24 + 356.9 + 0 + 83.2,
                                    children: /*#__PURE__*/ o(S, {
                                      className: `framer-vcrcj1-container`,
                                      nodeId: `Y6KAQ1nUf`,
                                      scopeId: `f_gW3KuGX`,
                                      children: /*#__PURE__*/ o(b, {
                                        breakpoint: T,
                                        overrides: {
                                          d0Rd4khRX: { nlwAGWLgu: e[1] },
                                          OdGIWK9lf: { nlwAGWLgu: e[2] },
                                        },
                                        children: /*#__PURE__*/ o(M, {
                                          height: `100%`,
                                          id: `Y6KAQ1nUf`,
                                          layoutId: `Y6KAQ1nUf`,
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
                      className: `framer-11s63ct`,
                      "data-framer-name": `Noise Layer`,
                      children: /*#__PURE__*/ o(C, {
                        children: /*#__PURE__*/ o(S, {
                          className: `framer-1b3wo03-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          nodeId: `Z1NUAT7JL`,
                          scopeId: `f_gW3KuGX`,
                          children: /*#__PURE__*/ o(E, {
                            backgroundSize: 256,
                            borderRadius: 0,
                            height: `100%`,
                            id: `Z1NUAT7JL`,
                            layoutId: `Z1NUAT7JL`,
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
        `.framer-JXBzL.framer-1bufmda, .framer-JXBzL .framer-1bufmda { display: block; }`,
        `.framer-JXBzL.framer-z45z91 { align-content: center; align-items: center; background-color: var(--token-e963b8ae-02ac-4e93-b75a-f86ceff4c8c2, #323a2c); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-JXBzL .framer-g9w611-container { flex: none; height: auto; left: 50%; position: absolute; top: 0px; transform: translateX(-50%); width: auto; z-index: 1; }`,
        `.framer-JXBzL .framer-19rkilm { align-content: center; align-items: center; background-color: var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, #4b1d48); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: visible; padding: 48px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-JXBzL .framer-17s02my { align-content: center; align-items: center; background-color: var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, #f4c877); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: hidden; padding: 24px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-JXBzL .framer-rh4z5t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-JXBzL .framer-164bx12 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-JXBzL .framer-vcrcj1-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-JXBzL .framer-11s63ct { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: hidden; padding: 0px; pointer-events: none; position: fixed; right: 0px; top: 0px; z-index: 1; }`,
        `.framer-JXBzL .framer-1b3wo03-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
        `@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-JXBzL.framer-z45z91, .framer-JXBzL .framer-19rkilm, .framer-JXBzL .framer-17s02my, .framer-JXBzL .framer-rh4z5t, .framer-JXBzL .framer-11s63ct { gap: 0px; } .framer-JXBzL.framer-z45z91 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-JXBzL.framer-z45z91 > :first-child, .framer-JXBzL .framer-17s02my > :first-child, .framer-JXBzL .framer-rh4z5t > :first-child { margin-top: 0px; } .framer-JXBzL.framer-z45z91 > :last-child, .framer-JXBzL .framer-17s02my > :last-child, .framer-JXBzL .framer-rh4z5t > :last-child { margin-bottom: 0px; } .framer-JXBzL .framer-19rkilm > *, .framer-JXBzL .framer-11s63ct > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-JXBzL .framer-19rkilm > :first-child, .framer-JXBzL .framer-11s63ct > :first-child { margin-left: 0px; } .framer-JXBzL .framer-19rkilm > :last-child, .framer-JXBzL .framer-11s63ct > :last-child { margin-right: 0px; } .framer-JXBzL .framer-17s02my > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-JXBzL .framer-rh4z5t > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } }`,
        ...k,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-JXBzL.framer-z45z91 { width: 810px; }}`,
        `@media (max-width: 809px) { .framer-JXBzL.framer-z45z91 { width: 390px; } .framer-JXBzL .framer-19rkilm { flex-direction: column; padding: 0px; } .framer-JXBzL .framer-17s02my, .framer-JXBzL .framer-1b3wo03-container { height: 1px; width: 100%; } .framer-JXBzL .framer-11s63ct { flex-direction: column; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-JXBzL .framer-19rkilm, .framer-JXBzL .framer-11s63ct { gap: 0px; } .framer-JXBzL .framer-19rkilm > *, .framer-JXBzL .framer-11s63ct > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-JXBzL .framer-19rkilm > :first-child, .framer-JXBzL .framer-11s63ct > :first-child { margin-top: 0px; } .framer-JXBzL .framer-19rkilm > :last-child, .framer-JXBzL .framer-11s63ct > :last-child { margin-bottom: 0px; } }}`,
      ]),
      (Z = g(Y, X, `framer-JXBzL`)),
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
          default: {
            type: `reactComponent`,
            name: `Framerf_gW3KuGX`,
            slots: [],
            annotations: {
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerScrollSections: `{"xb3d5Umth":{"pattern":":xb3d5Umth","name":"hero-section"}}`,
              framerColorSyntax: `true`,
              framerIntrinsicWidth: `1200`,
              framerAcceptsLayoutTemplate: `true`,
              framerDisplayContentsDiv: `false`,
              framerResponsiveScreen: ``,
              framerImmutableVariables: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"d0Rd4khRX":{"layout":["fixed","auto"]},"OdGIWK9lf":{"layout":["fixed","auto"]}}}`,
              framerIntrinsicHeight: `800`,
              framerAutoSizeImages: `true`,
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
//# sourceMappingURL=LOx3f7jw_wHGGbQejPhFueh9wb7S0MWv9-4FArpeZyA.7a-5IjrW.mjs.map
