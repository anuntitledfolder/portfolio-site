import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  F as t,
  M as n,
  T as r,
  c as i,
  j as a,
  m as o,
  s,
  u as c,
  w as l,
  x as u,
} from "./react.Dq5lJgOf.mjs";
import { T as d, a as f, r as p, s as m } from "./motion.D3Y82hha.mjs";
import {
  $ as h,
  C as g,
  M as _,
  R as v,
  at as y,
  b,
  dt as x,
  ft as S,
  r as C,
  u as w,
  v as T,
  x as E,
} from "./framer.d4MlGAvC.mjs";
import { i as D, n as O, r as k, t as A } from "./bxgEdFl3x.BRgl95F3.mjs";
function j(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var M, N, P, F, I, L, R, z, B, V, H, U, W;
function G() {
  return (G = e(() => {
    (i(),
      v(),
      p(),
      r(),
      D(),
      (M = { CPBNX3kaV: { hover: !0 }, vWvb95gt6: { hover: !0 } }),
      (N = [`vWvb95gt6`, `CPBNX3kaV`]),
      (P = `framer-yLeHT`),
      (F = { CPBNX3kaV: `framer-v-172bdv`, vWvb95gt6: `framer-v-1mt2mc5` }),
      (I = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (L = ({ value: e, children: t }) => {
        let r = a(m),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(m.Provider, { value: o, children: t });
      }),
      (R = d.create(t)),
      (z = { "New Tab": `vWvb95gt6`, Default: `CPBNX3kaV` }),
      (B = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        nlwAGWLgu: n ?? a.nlwAGWLgu,
        variant: z[a.variant] ?? a.variant ?? `vWvb95gt6`,
        WuckUKYRf: r ?? a.WuckUKYRf ?? `Hire Me on Contra`,
      })),
      (V = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (H = /*#__PURE__*/ o(function (e, n) {
        let r = u(null),
          i = n ?? r,
          a = l(),
          { activeLocale: o, setLocale: p } = y();
        h();
        let {
            style: m,
            className: _,
            layoutId: v,
            variant: b,
            WuckUKYRf: S,
            nlwAGWLgu: C,
            ...E
          } = B(e),
          {
            baseVariant: D,
            classNames: O,
            clearLoadingGesture: k,
            gestureHandlers: z,
            gestureVariant: H,
            isLoading: U,
            setGestureState: W,
            setVariant: G,
            variants: K,
          } = x({
            cycleOrder: N,
            defaultVariant: `vWvb95gt6`,
            enabledGestures: M,
            ref: i,
            variant: b,
            variantClassNames: F,
          }),
          q = V(e, K),
          J = g(P, A);
        return /*#__PURE__*/ s(f, {
          id: v ?? a,
          children: /*#__PURE__*/ s(R, {
            animate: K,
            initial: !1,
            children: /*#__PURE__*/ s(L, {
              value: I,
              children: /*#__PURE__*/ s(w, {
                href: C,
                motionChild: !0,
                nodeId: `vWvb95gt6`,
                openInNewTab: !0,
                scopeId: `KGXnTYsGd`,
                ...j({ CPBNX3kaV: { openInNewTab: !1 } }, D, H),
                children: /*#__PURE__*/ c(d.a, {
                  ...E,
                  ...z,
                  className: `${g(J, `framer-1mt2mc5`, _, O)} framer-12wdjac`,
                  "data-border": !0,
                  "data-framer-name": `New Tab`,
                  layoutDependency: q,
                  layoutId: `vWvb95gt6`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `2px`,
                    "--border-color": `var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10))`,
                    "--border-left-width": `2px`,
                    "--border-right-width": `2px`,
                    "--border-style": `solid`,
                    "--border-top-width": `2px`,
                    backgroundColor: `var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, rgb(244, 200, 119))`,
                    borderBottomLeftRadius: 48,
                    borderBottomRightRadius: 48,
                    borderTopLeftRadius: 48,
                    borderTopRightRadius: 48,
                    ...m,
                  },
                  variants: {
                    "CPBNX3kaV-hover": {
                      "--border-color": `var(--token-e963b8ae-02ac-4e93-b75a-f86ceff4c8c2, rgb(25, 29, 22))`,
                    },
                    "vWvb95gt6-hover": {
                      "--border-color": `var(--token-99351878-363a-47b2-9a3c-6acaef70a562, rgb(137, 251, 131))`,
                    },
                    CPBNX3kaV: {
                      "--border-color": `var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, rgb(75, 29, 72))`,
                    },
                  },
                  ...j(
                    {
                      "CPBNX3kaV-hover": { "data-framer-name": void 0 },
                      "vWvb95gt6-hover": { "data-framer-name": void 0 },
                      CPBNX3kaV: { "data-framer-name": `Default` },
                    },
                    D,
                    H
                  ),
                  children: [
                    /*#__PURE__*/ s(d.div, {
                      className: `framer-4a2f61`,
                      "data-framer-name": `background`,
                      layoutDependency: q,
                      layoutId: `BJlFvMNJu`,
                      style: {
                        "--border-bottom-width": `0px`,
                        "--border-color": `rgba(0, 0, 0, 0)`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-style": `solid`,
                        "--border-top-width": `0px`,
                        backgroundColor: `var(--token-99351878-363a-47b2-9a3c-6acaef70a562, rgb(137, 251, 131))`,
                        borderBottomLeftRadius: 24,
                        borderBottomRightRadius: 24,
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                      },
                      variants: {
                        "CPBNX3kaV-hover": {
                          "--border-bottom-width": `1px`,
                          "--border-color": `rgb(34, 34, 34)`,
                          "--border-left-width": `1px`,
                          "--border-right-width": `1px`,
                          "--border-style": `solid`,
                          "--border-top-width": `1px`,
                          backgroundColor: `var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, rgb(244, 200, 119))`,
                        },
                        "vWvb95gt6-hover": {
                          backgroundColor: `var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, rgb(244, 200, 119))`,
                          borderBottomLeftRadius: 48,
                          borderBottomRightRadius: 48,
                          borderTopLeftRadius: 48,
                          borderTopRightRadius: 48,
                        },
                        CPBNX3kaV: {
                          backgroundColor: `var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, rgb(75, 29, 72))`,
                        },
                      },
                      ...j({ "CPBNX3kaV-hover": { "data-border": !0 } }, D, H),
                    }),
                    /*#__PURE__*/ s(T, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ s(t, {
                        children: /*#__PURE__*/ s(d.h3, {
                          className: `framer-styles-preset-1y82f25`,
                          "data-styles-preset": `bxgEdFl3x`,
                          style: {
                            "--framer-text-color": `var(--extracted-a0htzi, var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10)))`,
                          },
                          children: `Hire Me on Contra`,
                        }),
                      }),
                      className: `framer-11lij2j`,
                      fonts: [`Inter`],
                      layoutDependency: q,
                      layoutId: `aDz27PUVy`,
                      style: {
                        "--extracted-a0htzi": `var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: S,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (U = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-yLeHT.framer-12wdjac, .framer-yLeHT .framer-12wdjac { display: block; }`,
        `.framer-yLeHT.framer-1mt2mc5 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 12px 48px 12px 48px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-yLeHT .framer-4a2f61 { bottom: -74px; flex: none; height: 74px; left: 0px; overflow: hidden; position: absolute; right: 0px; will-change: var(--framer-will-change-override, transform); z-index: 0; }`,
        `.framer-yLeHT .framer-11lij2j { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yLeHT.framer-1mt2mc5 { gap: 0px; } .framer-yLeHT.framer-1mt2mc5 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-yLeHT.framer-1mt2mc5 > :first-child { margin-left: 0px; } .framer-yLeHT.framer-1mt2mc5 > :last-child { margin-right: 0px; } }`,
        `.framer-yLeHT.framer-v-1mt2mc5.hover .framer-4a2f61 { bottom: 0px; height: unset; top: 0px; }`,
        `.framer-yLeHT.framer-v-172bdv.hover .framer-4a2f61 { bottom: -166px; left: 144px; right: -144px; }`,
        ...O,
        `.framer-yLeHT[data-border="true"]::after, .framer-yLeHT [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
      ]),
      (W = S(H, U, `framer-yLeHT`)),
      (W.displayName = `Button`),
      (W.defaultProps = { height: 59, width: 374.5 }),
      E(W, {
        variant: {
          options: [`vWvb95gt6`, `CPBNX3kaV`],
          optionTitles: [`New Tab`, `Default`],
          title: `Variant`,
          type: C.Enum,
        },
        WuckUKYRf: {
          defaultValue: `Hire Me on Contra`,
          displayTextArea: !1,
          title: `Title`,
          type: C.String,
        },
        nlwAGWLgu: { title: `Link`, type: C.Link },
      }),
      b(
        W,
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
          ..._(k),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
export { G as n, W as t };
//# sourceMappingURL=KGXnTYsGd.DGyEz3Wd.mjs.map
