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
  w as ee,
  x as l,
} from "./react.Dq5lJgOf.mjs";
import { T as u, a as te, r as ne, s as d } from "./motion.D3Y82hha.mjs";
import {
  $ as re,
  C as f,
  M as p,
  N as m,
  R as h,
  T as g,
  _,
  at as ie,
  b as v,
  c as y,
  dt as ae,
  ft as b,
  ht as x,
  it as S,
  j as C,
  lt as w,
  m as T,
  mt as E,
  n as D,
  nt as O,
  o as k,
  ot as oe,
  q as se,
  r as A,
  rt as j,
  t as M,
  u as ce,
  ut as le,
  v as N,
  x as P,
} from "./framer.d4MlGAvC.mjs";
import { n as F, t as ue } from "./Ticker.DWS2Akdo.mjs";
import { i as I, n as de, r as fe, t as pe } from "./SmoothScroll_Prod.f7eF_O69.mjs";
import { n as me, t as he } from "./Carousel.Iu5GI51U.mjs";
import { a as L, i as ge, n as _e, o as ve, r as ye, t as R } from "./htvPULmZG.jZNuvSja.mjs";
import { i as z, n as B, r as V, t as be } from "./W6ZCCcKuw.57CkUy80.mjs";
import { i as H, n as U, r as W, t as xe } from "./bxgEdFl3x.BRgl95F3.mjs";
import { i as Se, n as Ce, r as we, t as Te } from "./TPvCPpffK.CJ-lgUmj.mjs";
import { i as Ee, n as De, r as Oe, t as ke } from "./ookvPmU1_.B3tQFuMT.mjs";
import { i as Ae, n as je, r as Me, t as Ne } from "./UTXu6vuhB.CPC5hcTR.mjs";
import { n as Pe, r as Fe } from "./augiA20Il.ar7cp7oU.mjs";
function Ie(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Le, Re, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, G;
function Xe() {
  return (Xe = e(() => {
    (i(),
      h(),
      ne(),
      r(),
      H(),
      z(),
      (Le = { Vzjny78hd: { hover: !0 } }),
      (Re = [`Vzjny78hd`, `PRG63vtsE`]),
      (ze = `framer-qKFH0`),
      (Be = { PRG63vtsE: `framer-v-h9hfy0`, Vzjny78hd: `framer-v-o9534h` }),
      (Ve = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (He = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Ue = ({ value: e, children: t }) => {
        let r = a(d),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(d.Provider, { value: o, children: t });
      }),
      (We = u.create(t)),
      (Ge = { "Variant 1": `Vzjny78hd`, "Variant 2": `PRG63vtsE` }),
      (Ke = ({ category: e, height: t, id: n, image: r, link: i, title: a, width: o, ...s }) => ({
        ...s,
        B_5p0DjNz: a ?? s.B_5p0DjNz ?? `Title`,
        diRQTP3WL: e ?? s.diRQTP3WL ?? `Category`,
        Ij4lEINiq: i ?? s.Ij4lEINiq,
        KcQTipTAI: r ??
          s.KcQTipTAI ?? {
            pixelHeight: 4408,
            pixelWidth: 3456,
            src: `https://framerusercontent.com/images/tWtU0ZIG5P4MdOGXj8ki9nPBYM.jpg?scale-down-to=1024`,
            srcSet: `https://framerusercontent.com/images/tWtU0ZIG5P4MdOGXj8ki9nPBYM.jpg?scale-down-to=1024 802w,https://framerusercontent.com/images/tWtU0ZIG5P4MdOGXj8ki9nPBYM.jpg?scale-down-to=2048 1605w,https://framerusercontent.com/images/tWtU0ZIG5P4MdOGXj8ki9nPBYM.jpg?scale-down-to=4096 3211w,https://framerusercontent.com/images/tWtU0ZIG5P4MdOGXj8ki9nPBYM.jpg 3456w`,
          },
        variant: Ge[s.variant] ?? s.variant ?? `Vzjny78hd`,
      })),
      (qe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Je = /*#__PURE__*/ o(function (e, n) {
        let r = l(null),
          i = n ?? r,
          a = ee(),
          { activeLocale: o, setLocale: ne } = ie(),
          d = re(),
          {
            style: p,
            className: h,
            layoutId: g,
            variant: _,
            Ij4lEINiq: v,
            KcQTipTAI: b,
            B_5p0DjNz: x,
            diRQTP3WL: S,
            ...C
          } = Ke(e),
          {
            baseVariant: w,
            classNames: T,
            clearLoadingGesture: E,
            gestureHandlers: D,
            gestureVariant: O,
            isLoading: k,
            setGestureState: oe,
            setVariant: se,
            variants: A,
          } = ae({
            cycleOrder: Re,
            defaultVariant: `Vzjny78hd`,
            enabledGestures: Le,
            ref: i,
            variant: _,
            variantClassNames: Be,
          }),
          j = qe(e, A),
          M = f(ze, xe, be),
          le = () => O !== `Vzjny78hd-hover`,
          P = () => O === `Vzjny78hd-hover`;
        return /*#__PURE__*/ s(te, {
          id: g ?? a,
          children: /*#__PURE__*/ s(We, {
            animate: A,
            initial: !1,
            children: /*#__PURE__*/ s(Ue, {
              value: Ve,
              children: /*#__PURE__*/ s(ce, {
                href: v,
                motionChild: !0,
                nodeId: `Vzjny78hd`,
                scopeId: `mC_rWf2v2`,
                children: /*#__PURE__*/ c(u.a, {
                  ...C,
                  ...D,
                  className: `${f(M, `framer-o9534h`, h, T)} framer-ext0ks`,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: j,
                  layoutId: `Vzjny78hd`,
                  ref: i,
                  style: {
                    boxShadow: `0.3582863430856378px 0.3582863430856378px 0.4560240650442918px -1px rgba(75, 29, 72, 0.78), 1.086527764397033px 1.086527764397033px 1.3829240702746826px -2px rgba(75, 29, 72, 0.73), 2.8721940846680076px 2.8721940846680076px 3.655706245474746px -3px rgba(75, 29, 72, 0.61), 9px 9px 11.455129855222069px -4px rgba(75, 29, 72, 0.2)`,
                    ...p,
                  },
                  ...Ie(
                    {
                      "Vzjny78hd-hover": { "data-framer-name": void 0 },
                      PRG63vtsE: { "data-framer-name": `Variant 2` },
                    },
                    w,
                    O
                  ),
                  children: [
                    le() &&
                      /*#__PURE__*/ s(u.div, {
                        className: `framer-tszfl3`,
                        "data-framer-name": `Ticker Background`,
                        layoutDependency: j,
                        layoutId: `MJLlIuuj7`,
                        style: {
                          backgroundColor: `var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, rgb(75, 29, 72))`,
                        },
                      }),
                    /*#__PURE__*/ s(y, {
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: m((d?.y || 0) + -86),
                        sizes: d?.width || `100vw`,
                        ...He(b),
                      },
                      className: `framer-1xfo68m`,
                      layoutDependency: j,
                      layoutId: `YleuNpNCq`,
                      style: { filter: `grayscale(0)`, WebkitFilter: `grayscale(0)` },
                      ...Ie(
                        {
                          "Vzjny78hd-hover": {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: m((d?.y || 0) + -49),
                              sizes: d?.width || `100vw`,
                              ...He(b),
                            },
                          },
                        },
                        w,
                        O
                      ),
                      children:
                        P() &&
                        /*#__PURE__*/ s(N, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ s(t, {
                            children: /*#__PURE__*/ s(u.h3, {
                              className: `framer-styles-preset-1y82f25`,
                              "data-styles-preset": `bxgEdFl3x`,
                              style: {
                                "--framer-text-color": `var(--extracted-a0htzi, var(--token-a779c6c1-3500-42be-a361-25eb7e57427d, rgb(248, 241, 185)))`,
                              },
                              children: `Title`,
                            }),
                          }),
                          className: `framer-msqsk8`,
                          fonts: [`Inter`],
                          layoutDependency: j,
                          layoutId: `y1YRximbe`,
                          style: {
                            "--extracted-a0htzi": `var(--token-a779c6c1-3500-42be-a361-25eb7e57427d, rgb(248, 241, 185))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: x,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                    }),
                    /*#__PURE__*/ c(u.div, {
                      className: `framer-1hgokrx`,
                      "data-framer-name": `Title`,
                      layoutDependency: j,
                      layoutId: `aZFY5w5N9`,
                      style: { opacity: 1 },
                      variants: { "Vzjny78hd-hover": { opacity: 0 } },
                      children: [
                        /*#__PURE__*/ s(N, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ s(t, {
                            children: /*#__PURE__*/ s(u.h3, {
                              className: `framer-styles-preset-1y82f25`,
                              "data-styles-preset": `bxgEdFl3x`,
                              children: `Title`,
                            }),
                          }),
                          className: `framer-1ofh2nb`,
                          "data-framer-name": `Title`,
                          fonts: [`Inter`],
                          layoutDependency: j,
                          layoutId: `o96cxRmtW`,
                          text: x,
                          variants: {
                            "Vzjny78hd-hover": {
                              "--extracted-a0htzi": `var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, rgb(75, 29, 72))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...Ie(
                            {
                              "Vzjny78hd-hover": {
                                children: /*#__PURE__*/ s(t, {
                                  children: /*#__PURE__*/ s(u.h3, {
                                    className: `framer-styles-preset-1y82f25`,
                                    "data-styles-preset": `bxgEdFl3x`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-a0htzi, var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, rgb(75, 29, 72)))`,
                                    },
                                    children: `Title`,
                                  }),
                                }),
                              },
                            },
                            w,
                            O
                          ),
                        }),
                        le() &&
                          /*#__PURE__*/ s(N, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ s(t, {
                              children: /*#__PURE__*/ s(u.p, {
                                className: `framer-styles-preset-17qvjw9`,
                                "data-styles-preset": `W6ZCCcKuw`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10)))`,
                                },
                                children: `Category`,
                              }),
                            }),
                            className: `framer-mvfthi`,
                            "data-framer-name": `Category`,
                            fonts: [`Inter`],
                            layoutDependency: j,
                            layoutId: `kkaSMXQkj`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10))`,
                            },
                            text: S,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (Ye = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-qKFH0.framer-ext0ks, .framer-qKFH0 .framer-ext0ks { display: block; }`,
        `.framer-qKFH0.framer-o9534h { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: wrap; gap: 24px; height: 545px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 481px; }`,
        `.framer-qKFH0 .framer-tszfl3 { bottom: -98px; flex: none; height: 98px; left: 0px; overflow: hidden; position: absolute; right: 0px; z-index: 2; }`,
        `.framer-qKFH0 .framer-1xfo68m { flex: none; height: 505px; left: 0px; position: absolute; right: 0px; top: -86px; z-index: 1; }`,
        `.framer-qKFH0 .framer-msqsk8 { bottom: 14px; flex: none; height: auto; left: 12px; position: absolute; white-space: pre; width: auto; }`,
        `.framer-qKFH0 .framer-1hgokrx { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 41px; height: min-content; justify-content: center; left: 11px; overflow: hidden; padding: 0px; position: absolute; right: 0px; z-index: 0; }`,
        `.framer-qKFH0 .framer-1ofh2nb, .framer-qKFH0 .framer-mvfthi { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-qKFH0.framer-o9534h, .framer-qKFH0 .framer-1hgokrx { gap: 0px; } .framer-qKFH0.framer-o9534h > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-qKFH0.framer-o9534h > :first-child, .framer-qKFH0 .framer-1hgokrx > :first-child { margin-top: 0px; } .framer-qKFH0.framer-o9534h > :last-child, .framer-qKFH0 .framer-1hgokrx > :last-child { margin-bottom: 0px; } .framer-qKFH0 .framer-1hgokrx > * { margin: 0px; margin-bottom: calc(41px / 2); margin-top: calc(41px / 2); } }`,
        `.framer-qKFH0.framer-v-h9hfy0.framer-o9534h { cursor: unset; }`,
        `.framer-qKFH0.framer-v-o9534h.hover .framer-1xfo68m { height: 594px; top: -49px; }`,
        ...U,
        ...B,
      ]),
      (G = b(Je, Ye, `framer-qKFH0`)),
      (G.displayName = `Product Card`),
      (G.defaultProps = { height: 545, width: 481 }),
      P(G, {
        variant: {
          options: [`Vzjny78hd`, `PRG63vtsE`],
          optionTitles: [`Variant 1`, `Variant 2`],
          title: `Variant`,
          type: A.Enum,
        },
        Ij4lEINiq: { title: `Link`, type: A.Link },
        KcQTipTAI: {
          __defaultAssetReference: `data:framer/asset-reference,tWtU0ZIG5P4MdOGXj8ki9nPBYM.jpg?originalFilename=photo-1507238691740-187a5b1d37b8%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlfGVufDB8fHx8MTY5NTI4MDY1OXww%26ixlib%3Drb-4.0.jpg&preferredSize=auto`,
          title: `Image`,
          type: A.ResponsiveImage,
        },
        B_5p0DjNz: { defaultValue: `Title`, title: `Title`, type: A.String },
        diRQTP3WL: { defaultValue: `Category`, title: `Category`, type: A.String },
      }),
      v(
        G,
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
          ...p(W),
          ...p(V),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function Ze(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Qe, $e, et, tt, nt, rt, it, at, ot, st, ct, K;
function lt() {
  return (lt = e(() => {
    (i(),
      h(),
      ne(),
      r(),
      H(),
      Se(),
      (Qe = [`Wq7LQW8Bm`, `v4MZtWY3E`]),
      ($e = `framer-Wpk9C`),
      (et = { v4MZtWY3E: `framer-v-1yqoprg`, Wq7LQW8Bm: `framer-v-g2i3s1` }),
      (tt = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (nt = ({ value: e, children: t }) => {
        let r = a(d),
          i = e ?? r.transition,
          o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ s(d.Provider, { value: o, children: t });
      }),
      (rt = u.create(t)),
      (it = { "Desktop and Tablet": `Wq7LQW8Bm`, Mobile: `v4MZtWY3E` }),
      (at = ({ content: e, heading3: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        clFUjnGQV: t ?? a.clFUjnGQV ?? `Design Philosophy`,
        FhoU6ADwj:
          e ??
          a.FhoU6ADwj ??
          `Design is more than just aesthetics; it's about solving problems and making experiences better. I believe in the power of user-centered design, where every pixel serves a purpose. It's about finding that perfect balance between form and function, creating designs that not only look great but also work seamlessly.`,
        variant: it[a.variant] ?? a.variant ?? `Wq7LQW8Bm`,
      })),
      (ot = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (st = /*#__PURE__*/ o(function (e, n) {
        let r = l(null),
          i = n ?? r,
          a = ee(),
          { activeLocale: o, setLocale: ne } = ie();
        re();
        let {
            style: d,
            className: p,
            layoutId: m,
            variant: h,
            clFUjnGQV: g,
            FhoU6ADwj: _,
            ...v
          } = at(e),
          {
            baseVariant: y,
            classNames: b,
            clearLoadingGesture: x,
            gestureHandlers: S,
            gestureVariant: C,
            isLoading: w,
            setGestureState: T,
            setVariant: E,
            variants: D,
          } = ae({
            cycleOrder: Qe,
            defaultVariant: `Wq7LQW8Bm`,
            ref: i,
            variant: h,
            variantClassNames: et,
          }),
          O = ot(e, D),
          k = f($e, xe, Te);
        return /*#__PURE__*/ s(te, {
          id: m ?? a,
          children: /*#__PURE__*/ s(rt, {
            animate: D,
            initial: !1,
            children: /*#__PURE__*/ s(nt, {
              value: tt,
              children: /*#__PURE__*/ c(u.div, {
                ...v,
                ...S,
                className: f(k, `framer-g2i3s1`, p, b),
                "data-border": !0,
                "data-framer-name": `Desktop and Tablet`,
                layoutDependency: O,
                layoutId: `Wq7LQW8Bm`,
                ref: i,
                style: {
                  "--border-bottom-width": `0px`,
                  "--border-color": `var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, rgb(75, 29, 72))`,
                  "--border-left-width": `0px`,
                  "--border-right-width": `0px`,
                  "--border-style": `solid`,
                  "--border-top-width": `0px`,
                  backgroundColor: `var(--token-e963b8ae-02ac-4e93-b75a-f86ceff4c8c2, rgb(25, 29, 22))`,
                  boxShadow: `0.3582863430856378px 0.3582863430856378px 0.4560240650442918px -1px rgba(75, 29, 72, 0.78), 1.086527764397033px 1.086527764397033px 1.3829240702746826px -2px rgba(75, 29, 72, 0.73), 2.8721940846680076px 2.8721940846680076px 3.655706245474746px -3px rgba(75, 29, 72, 0.61), 9px 9px 11.455129855222069px -4px rgba(75, 29, 72, 0.2)`,
                  ...d,
                },
                ...Ze({ v4MZtWY3E: { "data-framer-name": `Mobile` } }, y, C),
                children: [
                  /*#__PURE__*/ s(u.div, {
                    className: `framer-3m4p1j`,
                    "data-framer-name": `Heading`,
                    layoutDependency: O,
                    layoutId: `Sp0DE7koS`,
                    style: { backgroundColor: `rgb(247, 225, 178)` },
                    children: /*#__PURE__*/ s(N, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ s(t, {
                        children: /*#__PURE__*/ s(u.h3, {
                          className: `framer-styles-preset-1y82f25`,
                          "data-styles-preset": `bxgEdFl3x`,
                          style: {
                            "--framer-text-color": `var(--extracted-a0htzi, var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, rgb(75, 29, 72)))`,
                          },
                          children: `Design Philosophy`,
                        }),
                      }),
                      className: `framer-1xxd1n5`,
                      fonts: [`Inter`],
                      layoutDependency: O,
                      layoutId: `BLv8ET6tF`,
                      style: {
                        "--extracted-a0htzi": `var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, rgb(75, 29, 72))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: g,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Ze(
                        {
                          v4MZtWY3E: {
                            children: /*#__PURE__*/ s(t, {
                              children: /*#__PURE__*/ s(u.h3, {
                                className: `framer-styles-preset-1y82f25`,
                                "data-styles-preset": `bxgEdFl3x`,
                                style: {
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-a0htzi, var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, rgb(75, 29, 72)))`,
                                },
                                children: `Design Philosophy`,
                              }),
                            }),
                          },
                        },
                        y,
                        C
                      ),
                    }),
                  }),
                  /*#__PURE__*/ s(u.div, {
                    className: `framer-1i6rt3l`,
                    "data-framer-name": `Description`,
                    layoutDependency: O,
                    layoutId: `TI6AkNItc`,
                    style: { backgroundColor: `rgb(255, 240, 254)` },
                    children: /*#__PURE__*/ s(N, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ s(t, {
                        children: /*#__PURE__*/ s(u.p, {
                          className: `framer-styles-preset-t0brxi`,
                          "data-styles-preset": `TPvCPpffK`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10)))`,
                          },
                          children: `Design is more than just aesthetics; it's about solving problems and making experiences better. I believe in the power of user-centered design, where every pixel serves a purpose. It's about finding that perfect balance between form and function, creating designs that not only look great but also work seamlessly.`,
                        }),
                      }),
                      className: `framer-1iupsb0`,
                      fonts: [`Inter`],
                      layoutDependency: O,
                      layoutId: `CgEUex4iO`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: _,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Ze(
                        {
                          v4MZtWY3E: {
                            children: /*#__PURE__*/ s(t, {
                              children: /*#__PURE__*/ s(u.p, {
                                className: `framer-styles-preset-t0brxi`,
                                "data-styles-preset": `TPvCPpffK`,
                                style: {
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10)))`,
                                },
                                children: `Design is more than just aesthetics; it's about solving problems and making experiences better. I believe in the power of user-centered design, where every pixel serves a purpose. It's about finding that perfect balance between form and function, creating designs that not only look great but also work seamlessly.`,
                              }),
                            }),
                          },
                        },
                        y,
                        C
                      ),
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
      })),
      (ct = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-Wpk9C.framer-1scmq33, .framer-Wpk9C .framer-1scmq33 { display: block; }`,
        `.framer-Wpk9C.framer-g2i3s1 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 528px; }`,
        `.framer-Wpk9C .framer-3m4p1j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 48px; position: relative; width: 100%; }`,
        `.framer-Wpk9C .framer-1xxd1n5 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Wpk9C .framer-1i6rt3l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 48px; position: relative; width: 100%; }`,
        `.framer-Wpk9C .framer-1iupsb0 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Wpk9C.framer-g2i3s1, .framer-Wpk9C .framer-3m4p1j, .framer-Wpk9C .framer-1i6rt3l { gap: 0px; } .framer-Wpk9C.framer-g2i3s1 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-Wpk9C.framer-g2i3s1 > :first-child { margin-top: 0px; } .framer-Wpk9C.framer-g2i3s1 > :last-child { margin-bottom: 0px; } .framer-Wpk9C .framer-3m4p1j > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Wpk9C .framer-3m4p1j > :first-child, .framer-Wpk9C .framer-1i6rt3l > :first-child { margin-left: 0px; } .framer-Wpk9C .framer-3m4p1j > :last-child, .framer-Wpk9C .framer-1i6rt3l > :last-child { margin-right: 0px; } .framer-Wpk9C .framer-1i6rt3l > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } }`,
        `.framer-Wpk9C.framer-v-1yqoprg .framer-3m4p1j { justify-content: center; }`,
        `.framer-Wpk9C.framer-v-1yqoprg .framer-1xxd1n5 { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Wpk9C.framer-v-1yqoprg .framer-1i6rt3l { padding: 48px 24px 48px 24px; }`,
        ...U,
        ...Ce,
        `.framer-Wpk9C[data-border="true"]::after, .framer-Wpk9C [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
      ]),
      (K = b(st, ct, `framer-Wpk9C`)),
      (K.displayName = `About Card`),
      (K.defaultProps = { height: 378, width: 528 }),
      P(K, {
        variant: {
          options: [`Wq7LQW8Bm`, `v4MZtWY3E`],
          optionTitles: [`Desktop and Tablet`, `Mobile`],
          title: `Variant`,
          type: A.Enum,
        },
        clFUjnGQV: {
          defaultValue: `Design Philosophy`,
          displayTextArea: !1,
          title: `Heading3`,
          type: A.String,
        },
        FhoU6ADwj: {
          defaultValue: `Design is more than just aesthetics; it's about solving problems and making experiences better. I believe in the power of user-centered design, where every pixel serves a purpose. It's about finding that perfect balance between form and function, creating designs that not only look great but also work seamlessly.`,
          displayTextArea: !1,
          title: `Content`,
          type: A.String,
        },
      }),
      v(
        K,
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
          ...p(W),
          ...p(we),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
var ut,
  dt,
  q,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  J,
  kt,
  At,
  Y,
  jt,
  X,
  Mt,
  Z,
  Q,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  $,
  Vt;
function Ht() {
  return (Ht = e(() => {
    (i(),
      h(),
      ne(),
      r(),
      F(),
      I(),
      me(),
      de(),
      ve(),
      ge(),
      _e(),
      Xe(),
      lt(),
      Ee(),
      Ae(),
      z(),
      Pe(),
      (ut = C(pe)),
      (dt = E(N)),
      (q = x(dt)),
      (ft = C(R)),
      (pt = E(y)),
      (mt = x(N)),
      (ht = C(G)),
      (gt = C(he)),
      (_t = C(ue)),
      (vt = E(u.div)),
      (yt = C(K)),
      (bt = C(L)),
      (xt = C(fe)),
      (St = {
        i3KWEszDs: `(max-width: 809.98px)`,
        WQLkyLRf1: `(min-width: 1200px)`,
        ypI3yepZf: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (Ct = () => typeof document < `u`),
      (wt = []),
      (Tt = `framer-IPdlO`),
      (Et = {
        i3KWEszDs: `framer-v-1sghj8m`,
        WQLkyLRf1: `framer-v-72rtr7`,
        ypI3yepZf: `framer-v-13sbry5`,
      }),
      (Dt = (e, t, n) => (e && t ? `position` : n)),
      (Ot = {
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
      (J = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (kt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: J,
        x: 0,
        y: -1200,
      }),
      (At = { damping: 60, delay: 0, mass: 1, stiffness: 200, type: `spring` }),
      (Y = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 500,
        transition: At,
        x: 0,
        y: 0,
      }),
      (jt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 500,
        x: 0,
        y: 120,
      }),
      (X = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Mt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: J,
        x: 0,
        y: 0,
      }),
      (Z = {
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
      (Q = (e, t) => {
        if (e && typeof e == `object`) return { ...e, alt: t };
      }),
      (Nt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.8,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: J,
        x: 0,
        y: 0,
      }),
      (Pt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        transition: At,
        x: 0,
        y: 0,
      }),
      (Ft = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transformPerspective: 1200,
        x: 0,
        y: 120,
      }),
      (It = { Desktop: `WQLkyLRf1`, Phone: `i3KWEszDs`, Tablet: `ypI3yepZf` }),
      (Lt = ({ value: e }) =>
        S()
          ? null
          : /*#__PURE__*/ s(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (Rt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: It[r.variant] ?? r.variant ?? `WQLkyLRf1`,
      })),
      (zt = /*#__PURE__*/ o(function (e, r) {
        let i = l(null),
          o = r ?? i;
        ee();
        let { activeLocale: ne, contentLocale: p, setLocale: h } = ie(),
          g = re(),
          { style: v, className: ae, layoutId: b, variant: x, ...S } = Rt(e),
          C = n(() => Fe({}, p), [p]);
        oe(C);
        let [E, se] = j(x, St, !1),
          A = f(Tt, Ne, ke, be),
          ce = a(k)?.isLayoutTemplate,
          P = !!a(d)?.transition?.layout,
          F = Dt(ce, P),
          I = l(null),
          de = w(`JH2w2jPyL`),
          me = l(null);
        le();
        let ge = () => !Ct() || E !== `i3KWEszDs`,
          _e = w(`wmAymqz5D`),
          ve = l(null),
          ye = w(`M9UVpOaSs`),
          z = w(`rxV0gPZfT`),
          B = l(null),
          V = w(`cd4ZEfD1w`),
          H = l(null),
          U = w(`MZ7LnZZon`),
          W = l(null);
        return (
          O({}),
          /*#__PURE__*/ s(k.Provider, {
            value: {
              activeVariantId: E,
              humanReadableVariantMap: It,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: Et,
            },
            children: /*#__PURE__*/ c(te, {
              id: b ?? `augiA20Il`,
              children: [
                /*#__PURE__*/ s(Lt, {
                  value: `html body { background: var(--token-e963b8ae-02ac-4e93-b75a-f86ceff4c8c2, rgb(50, 58, 44)); }`,
                }),
                /*#__PURE__*/ c(u.div, {
                  ...S,
                  className: f(A, `framer-72rtr7`, ae),
                  ref: o,
                  style: { ...v },
                  children: [
                    /*#__PURE__*/ s(M, {
                      children: /*#__PURE__*/ s(D, {
                        className: `framer-1q66or9-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: F,
                        nodeId: `fbi4b6Sdg`,
                        scopeId: `augiA20Il`,
                        children: /*#__PURE__*/ s(pe, {
                          height: `100%`,
                          id: `fbi4b6Sdg`,
                          intensity: 10,
                          layoutId: `fbi4b6Sdg`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    /*#__PURE__*/ c(pt, {
                      __framer__animate: { transition: J },
                      __framer__animateOnce: !1,
                      __framer__enter: Ot,
                      __framer__exit: kt,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__targets: [{ ref: I, target: `animate` }],
                      __framer__threshold: 0.5,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: m(g?.y || 0),
                        pixelHeight: 576,
                        pixelWidth: 720,
                        sizes: g?.width || `100vw`,
                        src: `../../assets/images/NcQfp6aDEOihcLnjCDISX9gvh0.jpg`,
                        srcSet: `../../assets/images/NcQfp6aDEOihcLnjCDISX9gvh0-772099.jpg 512w,../../assets/images/NcQfp6aDEOihcLnjCDISX9gvh0.jpg 720w`,
                      },
                      className: `framer-1dc0chv`,
                      "data-framer-name": `Hero Section`,
                      id: de,
                      layout: F,
                      ref: me,
                      style: { transformPerspective: 1200 },
                      children: [
                        /*#__PURE__*/ c(`div`, {
                          className: `framer-tu4m6l`,
                          "data-framer-name": `Background`,
                          children: [
                            /*#__PURE__*/ s(q, {
                              __framer__styleTransformEffectEnabled: !0,
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 2,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                              ],
                              __framer__transformTrigger: `onScroll`,
                              __fromCanvasComponent: !0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              animate: Y,
                              children: /*#__PURE__*/ s(t, {
                                children: /*#__PURE__*/ c(`h1`, {
                                  style: {
                                    "--font-selector": `R0Y7QWJyaWwgRmF0ZmFjZS1yZWd1bGFy`,
                                    "--framer-font-family": `"Abril Fatface", sans-serif`,
                                    "--framer-font-size": `131.46196280542836px`,
                                    "--framer-line-height": `0.8em`,
                                    "--framer-text-alignment": `right`,
                                    "--framer-text-color": `var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10))`,
                                  },
                                  children: [
                                    /*#__PURE__*/ s(`span`, {
                                      style: { "--framer-font-size": `181.3577532338523px` },
                                      children: `Ashley`,
                                    }),
                                    /*#__PURE__*/ s(`span`, {
                                      style: { "--framer-font-size": `181.3577532338523px` },
                                      children: /*#__PURE__*/ s(`br`, {}),
                                    }),
                                    /*#__PURE__*/ s(`span`, {
                                      style: { "--framer-font-size": `181.3577532338523px` },
                                      children: `Stelzer`,
                                    }),
                                  ],
                                }),
                              }),
                              className: `framer-1k0oh17`,
                              "data-framer-appear-id": `1k0oh17`,
                              fonts: [`GF;Abril Fatface-regular`],
                              initial: jt,
                              optimized: !0,
                              style: { transformPerspective: 500 },
                              verticalAlignment: `top`,
                              viewBox: `0 0 607 290`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ c(`div`, {
                              className: `framer-i7vhvu`,
                              "data-framer-name": `Menu`,
                              children: [
                                /*#__PURE__*/ s(_, {
                                  links: [
                                    {
                                      href: { hash: `:rxV0gPZfT`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { hash: `:rxV0gPZfT`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { hash: `:rxV0gPZfT`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { hash: `:rxV0gPZfT`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { hash: `:rxV0gPZfT`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { hash: `:rxV0gPZfT`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    /*#__PURE__*/ s(T, {
                                      breakpoint: E,
                                      overrides: { i3KWEszDs: { y: (g?.y || 0) + 677 } },
                                      children: /*#__PURE__*/ s(M, {
                                        height: 33,
                                        y: (g?.y || 0) + 96,
                                        children: /*#__PURE__*/ s(D, {
                                          className: `framer-1abmulm-container`,
                                          "data-framer-name": `About`,
                                          name: `About`,
                                          nodeId: `bKaADTDyf`,
                                          scopeId: `augiA20Il`,
                                          children: /*#__PURE__*/ s(T, {
                                            breakpoint: E,
                                            overrides: {
                                              i3KWEszDs: { BUm4gpVFM: e[5], hM93PXv53: e[4] },
                                              ypI3yepZf: { BUm4gpVFM: e[3], hM93PXv53: e[2] },
                                            },
                                            children: /*#__PURE__*/ s(R, {
                                              BUm4gpVFM: e[1],
                                              FH9GqwMqG: `About`,
                                              height: `100%`,
                                              hM93PXv53: e[0],
                                              id: `bKaADTDyf`,
                                              layoutId: `bKaADTDyf`,
                                              name: `About`,
                                              variant: X(`JIOR1dDzo`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                                /*#__PURE__*/ s(_, {
                                  links: [
                                    {
                                      href: { hash: `:wmAymqz5D`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { hash: `:wmAymqz5D`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { hash: `:wmAymqz5D`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    /*#__PURE__*/ s(T, {
                                      breakpoint: E,
                                      overrides: { i3KWEszDs: { y: (g?.y || 0) + 677 } },
                                      children: /*#__PURE__*/ s(M, {
                                        height: 33,
                                        y: (g?.y || 0) + 96,
                                        children: /*#__PURE__*/ s(D, {
                                          className: `framer-728i1i-container`,
                                          "data-framer-name": `Services`,
                                          name: `Services`,
                                          nodeId: `tdQ5Qb4y6`,
                                          scopeId: `augiA20Il`,
                                          children: /*#__PURE__*/ s(T, {
                                            breakpoint: E,
                                            overrides: {
                                              i3KWEszDs: { hM93PXv53: e[2] },
                                              ypI3yepZf: { hM93PXv53: e[1] },
                                            },
                                            children: /*#__PURE__*/ s(R, {
                                              FH9GqwMqG: `Branding`,
                                              height: `100%`,
                                              hM93PXv53: e[0],
                                              id: `tdQ5Qb4y6`,
                                              layoutId: `tdQ5Qb4y6`,
                                              name: `Services`,
                                              variant: X(`JIOR1dDzo`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                                /*#__PURE__*/ s(_, {
                                  links: [
                                    {
                                      href: { hash: `:M9UVpOaSs`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { hash: `:M9UVpOaSs`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { hash: `:M9UVpOaSs`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    /*#__PURE__*/ s(T, {
                                      breakpoint: E,
                                      overrides: { i3KWEszDs: { y: (g?.y || 0) + 677 } },
                                      children: /*#__PURE__*/ s(M, {
                                        height: 33,
                                        y: (g?.y || 0) + 96,
                                        children: /*#__PURE__*/ s(D, {
                                          className: `framer-1streg2-container`,
                                          "data-framer-name": `Work`,
                                          name: `Work`,
                                          nodeId: `YmNU8Vzon`,
                                          scopeId: `augiA20Il`,
                                          children: /*#__PURE__*/ s(T, {
                                            breakpoint: E,
                                            overrides: {
                                              i3KWEszDs: { hM93PXv53: e[2] },
                                              ypI3yepZf: { hM93PXv53: e[1] },
                                            },
                                            children: /*#__PURE__*/ s(R, {
                                              FH9GqwMqG: `Illustration`,
                                              height: `100%`,
                                              hM93PXv53: e[0],
                                              id: `YmNU8Vzon`,
                                              layoutId: `YmNU8Vzon`,
                                              name: `Work`,
                                              variant: X(`JIOR1dDzo`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                                /*#__PURE__*/ s(T, {
                                  breakpoint: E,
                                  overrides: { i3KWEszDs: { y: (g?.y || 0) + 677 } },
                                  children: /*#__PURE__*/ s(M, {
                                    height: 33,
                                    y: (g?.y || 0) + 96,
                                    children: /*#__PURE__*/ s(D, {
                                      className: `framer-7i8p72-container`,
                                      "data-framer-name": `Contact`,
                                      name: `Contact`,
                                      nodeId: `yChuPrMcj`,
                                      scopeId: `augiA20Il`,
                                      children: /*#__PURE__*/ s(R, {
                                        FH9GqwMqG: `Contact`,
                                        height: `100%`,
                                        hM93PXv53: `mailto:stelzerash@gmail.com`,
                                        id: `yChuPrMcj`,
                                        layoutId: `yChuPrMcj`,
                                        name: `Contact`,
                                        variant: X(`JIOR1dDzo`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            /*#__PURE__*/ s(q, {
                              __framer__styleTransformEffectEnabled: !0,
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 2,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                              ],
                              __framer__transformTrigger: `onScroll`,
                              __fromCanvasComponent: !0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              animate: Y,
                              children: /*#__PURE__*/ s(t, {
                                children: /*#__PURE__*/ s(`h3`, {
                                  style: {
                                    "--font-selector": `R0Y7Um9ib3RvIFNsYWItNzAw`,
                                    "--framer-font-family": `"Roboto Slab", "Roboto Slab Placeholder", serif`,
                                    "--framer-font-size": `32px`,
                                    "--framer-font-weight": `700`,
                                    "--framer-line-height": `1.1em`,
                                    "--framer-text-alignment": `right`,
                                    "--framer-text-color": `var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10))`,
                                  },
                                  children: `Visual Designer and Illustrator`,
                                }),
                              }),
                              className: `framer-wm2t4r`,
                              "data-framer-appear-id": `wm2t4r`,
                              fonts: [`GF;Roboto Slab-700`],
                              initial: jt,
                              optimized: !0,
                              style: { transformPerspective: 500 },
                              verticalAlignment: `top`,
                              viewBox: `0 0 468 35`,
                              viewBoxScale: 0.93,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        ge() &&
                          /*#__PURE__*/ s(T, {
                            breakpoint: E,
                            overrides: {
                              ypI3yepZf: {
                                background: {
                                  alt: ``,
                                  fit: `fit`,
                                  intrinsicHeight: 630,
                                  intrinsicWidth: 630,
                                  loading: m((g?.y || 0) + 492.484),
                                  pixelHeight: 630,
                                  pixelWidth: 630,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `calc(${g?.width || `100vw`} * 0.2689)`,
                                  src: `../../assets/images/qBR3CVHabloaspzZdXDjyFD2o-770274.png`,
                                  srcSet: `../../assets/images/qBR3CVHabloaspzZdXDjyFD2o.png 512w,../../assets/images/qBR3CVHabloaspzZdXDjyFD2o-770274.png 630w`,
                                },
                              },
                            },
                            children: /*#__PURE__*/ s(y, {
                              background: {
                                alt: ``,
                                fit: `fit`,
                                intrinsicHeight: 630,
                                intrinsicWidth: 630,
                                loading: m((g?.y || 0) + 519.8171),
                                pixelHeight: 630,
                                pixelWidth: 630,
                                positionX: `center`,
                                positionY: `center`,
                                sizes: `calc(${g?.width || `100vw`} * 0.2377)`,
                                src: `../../assets/images/qBR3CVHabloaspzZdXDjyFD2o-770274.png`,
                                srcSet: `../../assets/images/qBR3CVHabloaspzZdXDjyFD2o.png 512w,../../assets/images/qBR3CVHabloaspzZdXDjyFD2o-770274.png 630w`,
                              },
                              className: `framer-380z2z hidden-1sghj8m`,
                            }),
                          }),
                      ],
                    }),
                    /*#__PURE__*/ s(u.div, {
                      className: `framer-1xupjlt`,
                      "data-framer-name": `Work Section`,
                      id: _e,
                      layout: F,
                      ref: ve,
                      children: /*#__PURE__*/ c(`div`, {
                        className: `framer-1xamy2q`,
                        "data-framer-name": `Content`,
                        children: [
                          /*#__PURE__*/ s(T, {
                            breakpoint: E,
                            overrides: {
                              i3KWEszDs: {
                                children: /*#__PURE__*/ s(t, {
                                  children: /*#__PURE__*/ s(`h2`, {
                                    className: `framer-styles-preset-1vx9vuq`,
                                    "data-styles-preset": `UTXu6vuhB`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10))`,
                                    },
                                    children: `Have a look around!`,
                                  }),
                                }),
                              },
                            },
                            children: /*#__PURE__*/ s(mt, {
                              __fromCanvasComponent: !0,
                              animate: Mt,
                              children: /*#__PURE__*/ s(t, {
                                children: /*#__PURE__*/ s(`h2`, {
                                  className: `framer-styles-preset-1vx9vuq`,
                                  "data-styles-preset": `UTXu6vuhB`,
                                  style: {
                                    "--framer-text-color": `var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10))`,
                                  },
                                  children: `Have a look around!`,
                                }),
                              }),
                              className: `framer-15d7pwa`,
                              "data-framer-appear-id": `15d7pwa`,
                              fonts: [`Inter`],
                              initial: Z,
                              optimized: !0,
                              style: { transformPerspective: 1200 },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          /*#__PURE__*/ s(_, {
                            links: [
                              { href: { webPageId: `QyK1g_RQ2` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `QyK1g_RQ2` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `QyK1g_RQ2` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              /*#__PURE__*/ s(T, {
                                breakpoint: E,
                                overrides: {
                                  i3KWEszDs: {
                                    width: `max(${g?.width || `100vw`} - 48px, 50px)`,
                                    y: (g?.y || 0) + 1693,
                                  },
                                  ypI3yepZf: { y: (g?.y || 0) + 847.8519 },
                                },
                                children: /*#__PURE__*/ s(M, {
                                  height: 545,
                                  width: `max((max(${g?.width || `100vw`}, 1px) - 196px) / 2, 50px)`,
                                  y: (g?.y || 0) + 1096,
                                  children: /*#__PURE__*/ s(D, {
                                    className: `framer-13qabd1-container`,
                                    "data-framer-name": `klean`,
                                    name: `klean`,
                                    nodeId: `jrovsafaF`,
                                    scopeId: `augiA20Il`,
                                    children: /*#__PURE__*/ s(T, {
                                      breakpoint: E,
                                      overrides: {
                                        i3KWEszDs: { Ij4lEINiq: e[2] },
                                        ypI3yepZf: { Ij4lEINiq: e[1] },
                                      },
                                      children: /*#__PURE__*/ s(G, {
                                        B_5p0DjNz: `Klean`,
                                        diRQTP3WL: ``,
                                        height: `100%`,
                                        id: `jrovsafaF`,
                                        Ij4lEINiq: e[0],
                                        KcQTipTAI: Q(
                                          {
                                            pixelHeight: 2012,
                                            pixelWidth: 1920,
                                            positionX: `67.2%`,
                                            positionY: `32.5%`,
                                            src: `../../assets/images/2BhqiInha5rvRUgSKClfBkoSI-3d83a3.png`,
                                            srcSet: `../../assets/images/2BhqiInha5rvRUgSKClfBkoSI.png 977w,../../assets/images/2BhqiInha5rvRUgSKClfBkoSI-3d83a3.png 1920w`,
                                          },
                                          ``
                                        ),
                                        layoutId: `jrovsafaF`,
                                        name: `klean`,
                                        style: { width: `100%` },
                                        variant: X(`Vzjny78hd`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                          }),
                          /*#__PURE__*/ s(_, {
                            links: [
                              { href: { webPageId: `tjz6BMZL5` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `tjz6BMZL5` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `tjz6BMZL5` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              /*#__PURE__*/ s(T, {
                                breakpoint: E,
                                overrides: {
                                  i3KWEszDs: {
                                    width: `max(${g?.width || `100vw`} - 48px, 50px)`,
                                    y: (g?.y || 0) + 2338,
                                  },
                                  ypI3yepZf: { y: (g?.y || 0) + 1492.8519 },
                                },
                                children: /*#__PURE__*/ s(M, {
                                  height: 545,
                                  width: `max((max(${g?.width || `100vw`}, 1px) - 196px) / 2, 50px)`,
                                  y: (g?.y || 0) + 1741,
                                  children: /*#__PURE__*/ s(D, {
                                    className: `framer-1o0h41v-container`,
                                    "data-framer-name": `x3`,
                                    name: `x3`,
                                    nodeId: `M0WOrVtYk`,
                                    scopeId: `augiA20Il`,
                                    children: /*#__PURE__*/ s(T, {
                                      breakpoint: E,
                                      overrides: {
                                        i3KWEszDs: { Ij4lEINiq: e[2] },
                                        ypI3yepZf: { Ij4lEINiq: e[1] },
                                      },
                                      children: /*#__PURE__*/ s(G, {
                                        B_5p0DjNz: `TypeCon 2025`,
                                        diRQTP3WL: ``,
                                        height: `100%`,
                                        id: `M0WOrVtYk`,
                                        Ij4lEINiq: e[0],
                                        KcQTipTAI: Q(
                                          {
                                            pixelHeight: 2507,
                                            pixelWidth: 3342,
                                            positionX: `17.1%`,
                                            positionY: `27.9%`,
                                            src: `../../assets/images/T2Yd4EaqUXTWLqof2pdgzxmMZ0I-cdc1bd.jpg`,
                                            srcSet: `../../assets/images/T2Yd4EaqUXTWLqof2pdgzxmMZ0I-96be0d.jpg 512w,../../assets/images/T2Yd4EaqUXTWLqof2pdgzxmMZ0I.jpg 1024w,../../assets/images/T2Yd4EaqUXTWLqof2pdgzxmMZ0I-6ec756.jpg 2048w,../../assets/images/T2Yd4EaqUXTWLqof2pdgzxmMZ0I-cdc1bd.jpg 3342w`,
                                          },
                                          ``
                                        ),
                                        layoutId: `M0WOrVtYk`,
                                        name: `x3`,
                                        style: { width: `100%` },
                                        variant: X(`Vzjny78hd`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                          }),
                          /*#__PURE__*/ s(_, {
                            links: [
                              { href: { webPageId: `KAtQViVAr` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `KAtQViVAr` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `KAtQViVAr` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              /*#__PURE__*/ s(T, {
                                breakpoint: E,
                                overrides: {
                                  i3KWEszDs: {
                                    width: `max(${g?.width || `100vw`} - 48px, 50px)`,
                                    y: (g?.y || 0) + 2983,
                                  },
                                  ypI3yepZf: { y: (g?.y || 0) + 1492.8519 },
                                },
                                children: /*#__PURE__*/ s(M, {
                                  height: 545,
                                  width: `max((max(${g?.width || `100vw`}, 1px) - 196px) / 2, 50px)`,
                                  y: (g?.y || 0) + 1741,
                                  children: /*#__PURE__*/ s(D, {
                                    className: `framer-1g5gijn-container`,
                                    "data-framer-name": `laloid`,
                                    name: `laloid`,
                                    nodeId: `pgXQTJM4c`,
                                    scopeId: `augiA20Il`,
                                    children: /*#__PURE__*/ s(T, {
                                      breakpoint: E,
                                      overrides: {
                                        i3KWEszDs: { Ij4lEINiq: e[2] },
                                        ypI3yepZf: { Ij4lEINiq: e[1] },
                                      },
                                      children: /*#__PURE__*/ s(G, {
                                        B_5p0DjNz: `L.A.loid`,
                                        diRQTP3WL: ``,
                                        height: `100%`,
                                        id: `pgXQTJM4c`,
                                        Ij4lEINiq: e[0],
                                        KcQTipTAI: Q(
                                          {
                                            pixelHeight: 3098,
                                            pixelWidth: 3307,
                                            src: `../../assets/images/OtfNjMTMt06iU3zunCZVTSXRBO8-ff0ba6.jpg`,
                                            srcSet: `../../assets/images/OtfNjMTMt06iU3zunCZVTSXRBO8-db7cb6.jpg 512w,../../assets/images/OtfNjMTMt06iU3zunCZVTSXRBO8.jpg 1024w,../../assets/images/OtfNjMTMt06iU3zunCZVTSXRBO8-d94220.jpg 2048w,../../assets/images/OtfNjMTMt06iU3zunCZVTSXRBO8-ff0ba6.jpg 3307w`,
                                          },
                                          ``
                                        ),
                                        layoutId: `pgXQTJM4c`,
                                        name: `laloid`,
                                        style: { width: `100%` },
                                        variant: X(`Vzjny78hd`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                          }),
                          /*#__PURE__*/ s(_, {
                            links: [
                              { href: { webPageId: `lLCR_W2fY` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `lLCR_W2fY` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `lLCR_W2fY` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              /*#__PURE__*/ s(T, {
                                breakpoint: E,
                                overrides: {
                                  i3KWEszDs: {
                                    width: `max(${g?.width || `100vw`} - 48px, 50px)`,
                                    y: (g?.y || 0) + 3628,
                                  },
                                  ypI3yepZf: { y: (g?.y || 0) + 2137.8519 },
                                },
                                children: /*#__PURE__*/ s(M, {
                                  height: 545,
                                  width: `max((max(${g?.width || `100vw`}, 1px) - 196px) / 2, 50px)`,
                                  y: (g?.y || 0) + 2386,
                                  children: /*#__PURE__*/ s(D, {
                                    className: `framer-1lqtf25-container`,
                                    "data-framer-name": `tagd`,
                                    name: `tagd`,
                                    nodeId: `aUtNw5fK2`,
                                    scopeId: `augiA20Il`,
                                    children: /*#__PURE__*/ s(T, {
                                      breakpoint: E,
                                      overrides: {
                                        i3KWEszDs: { Ij4lEINiq: e[2] },
                                        ypI3yepZf: { Ij4lEINiq: e[1] },
                                      },
                                      children: /*#__PURE__*/ s(G, {
                                        B_5p0DjNz: `TAG'd`,
                                        diRQTP3WL: ``,
                                        height: `100%`,
                                        id: `aUtNw5fK2`,
                                        Ij4lEINiq: e[0],
                                        KcQTipTAI: Q(
                                          {
                                            pixelHeight: 851,
                                            pixelWidth: 729,
                                            src: `../../assets/images/3FfoQBfYqjzIPFRfpFQ5YUK8BE.png`,
                                            srcSet: `../../assets/images/3FfoQBfYqjzIPFRfpFQ5YUK8BE.png 729w`,
                                          },
                                          ``
                                        ),
                                        layoutId: `aUtNw5fK2`,
                                        name: `tagd`,
                                        style: { width: `100%` },
                                        variant: X(`Vzjny78hd`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                          }),
                          /*#__PURE__*/ s(_, {
                            links: [
                              { href: { webPageId: `kyJxj_Z02` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `kyJxj_Z02` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `kyJxj_Z02` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              /*#__PURE__*/ s(T, {
                                breakpoint: E,
                                overrides: {
                                  i3KWEszDs: {
                                    width: `max(${g?.width || `100vw`} - 48px, 50px)`,
                                    y: (g?.y || 0) + 4273,
                                  },
                                  ypI3yepZf: { y: (g?.y || 0) + 2137.8519 },
                                },
                                children: /*#__PURE__*/ s(M, {
                                  height: 545,
                                  width: `max((max(${g?.width || `100vw`}, 1px) - 196px) / 2, 50px)`,
                                  y: (g?.y || 0) + 2386,
                                  children: /*#__PURE__*/ s(D, {
                                    className: `framer-tdhwa0-container`,
                                    "data-framer-name": `book`,
                                    name: `book`,
                                    nodeId: `gUIhr5Uy2`,
                                    scopeId: `augiA20Il`,
                                    children: /*#__PURE__*/ s(T, {
                                      breakpoint: E,
                                      overrides: {
                                        i3KWEszDs: { Ij4lEINiq: e[2] },
                                        ypI3yepZf: { Ij4lEINiq: e[1] },
                                      },
                                      children: /*#__PURE__*/ s(G, {
                                        B_5p0DjNz: `Book Covers`,
                                        diRQTP3WL: ``,
                                        height: `100%`,
                                        id: `gUIhr5Uy2`,
                                        Ij4lEINiq: e[0],
                                        KcQTipTAI: Q(
                                          {
                                            pixelHeight: 2385,
                                            pixelWidth: 3800,
                                            src: `../../assets/images/RA0flaV7QkJeDaJA2e9FOMD4zbE-2bcf9b.jpg`,
                                            srcSet: `../../assets/images/RA0flaV7QkJeDaJA2e9FOMD4zbE-f02cae.jpg 512w,../../assets/images/RA0flaV7QkJeDaJA2e9FOMD4zbE.jpg 1024w,../../assets/images/RA0flaV7QkJeDaJA2e9FOMD4zbE-ccb41c.jpg 2048w,../../assets/images/RA0flaV7QkJeDaJA2e9FOMD4zbE-2bcf9b.jpg 3800w`,
                                          },
                                          ``
                                        ),
                                        layoutId: `gUIhr5Uy2`,
                                        name: `book`,
                                        style: { width: `100%` },
                                        variant: X(`Vzjny78hd`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                          }),
                          /*#__PURE__*/ s(_, {
                            links: [
                              { href: { webPageId: `jvbgRsZai` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `jvbgRsZai` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `jvbgRsZai` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              /*#__PURE__*/ s(T, {
                                breakpoint: E,
                                overrides: {
                                  i3KWEszDs: {
                                    width: `max(${g?.width || `100vw`} - 48px, 50px)`,
                                    y: (g?.y || 0) + 4918,
                                  },
                                  ypI3yepZf: { y: (g?.y || 0) + 2782.8519 },
                                },
                                children: /*#__PURE__*/ s(M, {
                                  height: 545,
                                  width: `max((max(${g?.width || `100vw`}, 1px) - 196px) / 2, 50px)`,
                                  y: (g?.y || 0) + 3031,
                                  children: /*#__PURE__*/ s(D, {
                                    className: `framer-ahv02u-container`,
                                    "data-framer-name": `exo`,
                                    name: `exo`,
                                    nodeId: `YcM78R2o1`,
                                    scopeId: `augiA20Il`,
                                    children: /*#__PURE__*/ s(T, {
                                      breakpoint: E,
                                      overrides: {
                                        i3KWEszDs: { Ij4lEINiq: e[2] },
                                        ypI3yepZf: { Ij4lEINiq: e[1] },
                                      },
                                      children: /*#__PURE__*/ s(G, {
                                        B_5p0DjNz: `Exoplanet Poster`,
                                        diRQTP3WL: ``,
                                        height: `100%`,
                                        id: `YcM78R2o1`,
                                        Ij4lEINiq: e[0],
                                        KcQTipTAI: Q(
                                          {
                                            pixelHeight: 1839,
                                            pixelWidth: 1440,
                                            positionX: `61.2%`,
                                            positionY: `72%`,
                                            src: `../../assets/images/c6BDYX95HIDj22Pfz6C9Uh7LGo-cf86e2.jpg`,
                                            srcSet: `../../assets/images/c6BDYX95HIDj22Pfz6C9Uh7LGo.jpg 801w,../../assets/images/c6BDYX95HIDj22Pfz6C9Uh7LGo-cf86e2.jpg 1440w`,
                                          },
                                          ``
                                        ),
                                        layoutId: `YcM78R2o1`,
                                        name: `exo`,
                                        style: { width: `100%` },
                                        variant: X(`Vzjny78hd`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                          }),
                          /*#__PURE__*/ s(_, {
                            links: [
                              { href: { webPageId: `c1ncc86xx` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `c1ncc86xx` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `c1ncc86xx` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              /*#__PURE__*/ s(T, {
                                breakpoint: E,
                                overrides: {
                                  i3KWEszDs: {
                                    width: `max(${g?.width || `100vw`} - 48px, 50px)`,
                                    y: (g?.y || 0) + 5563,
                                  },
                                  ypI3yepZf: { y: (g?.y || 0) + 2782.8519 },
                                },
                                children: /*#__PURE__*/ s(M, {
                                  height: 545,
                                  width: `max((max(${g?.width || `100vw`}, 1px) - 196px) / 2, 50px)`,
                                  y: (g?.y || 0) + 3031,
                                  children: /*#__PURE__*/ s(D, {
                                    className: `framer-ghjni0-container`,
                                    "data-framer-name": `print`,
                                    name: `print`,
                                    nodeId: `FQSRbfvGm`,
                                    scopeId: `augiA20Il`,
                                    children: /*#__PURE__*/ s(T, {
                                      breakpoint: E,
                                      overrides: {
                                        i3KWEszDs: { Ij4lEINiq: e[2] },
                                        ypI3yepZf: { Ij4lEINiq: e[1] },
                                      },
                                      children: /*#__PURE__*/ s(G, {
                                        B_5p0DjNz: `Handyman`,
                                        diRQTP3WL: ``,
                                        height: `100%`,
                                        id: `FQSRbfvGm`,
                                        Ij4lEINiq: e[0],
                                        KcQTipTAI: Q(
                                          {
                                            pixelHeight: 863,
                                            pixelWidth: 1026,
                                            src: `../../assets/images/cxSTmusamCP5zTeKDthnTkjEQzU-c38768.jpg`,
                                            srcSet: `../../assets/images/cxSTmusamCP5zTeKDthnTkjEQzU-8ec278.jpg 512w,../../assets/images/cxSTmusamCP5zTeKDthnTkjEQzU.jpg 1024w,../../assets/images/cxSTmusamCP5zTeKDthnTkjEQzU-c38768.jpg 1026w`,
                                          },
                                          ``
                                        ),
                                        layoutId: `FQSRbfvGm`,
                                        name: `print`,
                                        style: { width: `100%` },
                                        variant: X(`Vzjny78hd`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                          }),
                          /*#__PURE__*/ s(_, {
                            links: [
                              { href: { webPageId: `NVJGjNvHS` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `NVJGjNvHS` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `NVJGjNvHS` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              /*#__PURE__*/ s(T, {
                                breakpoint: E,
                                overrides: {
                                  i3KWEszDs: {
                                    width: `max(${g?.width || `100vw`} - 48px, 50px)`,
                                    y: (g?.y || 0) + 6208,
                                  },
                                  ypI3yepZf: { y: (g?.y || 0) + 3427.8519 },
                                },
                                children: /*#__PURE__*/ s(M, {
                                  height: 545,
                                  width: `calc(max((max(${g?.width || `100vw`}, 1px) - 196px) / 2, 50px) * 2 + 100px)`,
                                  y: (g?.y || 0) + 3676,
                                  children: /*#__PURE__*/ s(D, {
                                    className: `framer-2fzc6t-container`,
                                    "data-framer-name": `print`,
                                    name: `print`,
                                    nodeId: `kVOdEGzlW`,
                                    scopeId: `augiA20Il`,
                                    children: /*#__PURE__*/ s(T, {
                                      breakpoint: E,
                                      overrides: {
                                        i3KWEszDs: { Ij4lEINiq: e[2] },
                                        ypI3yepZf: { Ij4lEINiq: e[1] },
                                      },
                                      children: /*#__PURE__*/ s(G, {
                                        B_5p0DjNz: `Print Products`,
                                        diRQTP3WL: ``,
                                        height: `100%`,
                                        id: `kVOdEGzlW`,
                                        Ij4lEINiq: e[0],
                                        KcQTipTAI: Q(
                                          {
                                            pixelHeight: 3375,
                                            pixelWidth: 3024,
                                            src: `../../assets/images/v79UZejdvcq3JTzJJsdlxOONd8-eb8547.jpg`,
                                            srcSet: `../../assets/images/v79UZejdvcq3JTzJJsdlxOONd8-93a34d.jpg 917w,../../assets/images/v79UZejdvcq3JTzJJsdlxOONd8.jpg 1835w,../../assets/images/v79UZejdvcq3JTzJJsdlxOONd8-eb8547.jpg 3024w`,
                                          },
                                          ``
                                        ),
                                        layoutId: `kVOdEGzlW`,
                                        name: `print`,
                                        style: { width: `100%` },
                                        variant: X(`Vzjny78hd`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                    }),
                    /*#__PURE__*/ s(u.div, {
                      className: `framer-212adg`,
                      "data-framer-name": `illust Section`,
                      id: ye,
                      layout: F,
                      ref: I,
                      children: /*#__PURE__*/ c(`div`, {
                        className: `framer-5yratm`,
                        "data-framer-name": `Content`,
                        children: [
                          /*#__PURE__*/ s(M, {
                            children: /*#__PURE__*/ s(D, {
                              className: `framer-5gv85e-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `L0tglV2IB`,
                              scopeId: `augiA20Il`,
                              children: /*#__PURE__*/ s(he, {
                                align: `center`,
                                ariaLabel: ``,
                                arrowObject: {
                                  arrowFill: `rgba(0, 0, 0, 0.2)`,
                                  arrowPadding: 20,
                                  arrowRadius: 40,
                                  arrowSize: 40,
                                  showMouseControls: !0,
                                },
                                axis: !0,
                                borderRadius: 0,
                                fadeObject: {
                                  fadeAlpha: 1,
                                  fadeContent: !0,
                                  fadeInset: 8,
                                  fadeTransition: {
                                    damping: 60,
                                    delay: 0,
                                    mass: 1,
                                    stiffness: 500,
                                    type: `spring`,
                                  },
                                  fadeWidth: 54,
                                },
                                gap: 10,
                                height: `100%`,
                                id: `L0tglV2IB`,
                                layoutId: `L0tglV2IB`,
                                padding: 10,
                                paddingBottom: 100,
                                paddingLeft: 10,
                                paddingPerSide: !0,
                                paddingRight: 10,
                                paddingTop: 10,
                                progressObject: {
                                  dotsActiveOpacity: 1,
                                  dotsBackground: `var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10))`,
                                  dotsBlur: 4,
                                  dotsFill: `var(--token-a779c6c1-3500-42be-a361-25eb7e57427d, rgb(247, 235, 178))`,
                                  dotsGap: 10,
                                  dotsInset: 10,
                                  dotSize: 10,
                                  dotsOpacity: 0.5,
                                  dotsPadding: 10,
                                  dotsRadius: 50,
                                  showProgressDots: !0,
                                  showScrollbar: !1,
                                },
                                sizingObject: {
                                  heightInset: 0,
                                  heightRows: 2,
                                  heightType: `auto`,
                                  widthColumns: 2,
                                  widthInset: 0,
                                  widthType: `auto`,
                                },
                                slots: [
                                  /*#__PURE__*/ s(y, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 3e3,
                                      intrinsicWidth: 3e3,
                                      pixelHeight: 3e3,
                                      pixelWidth: 3e3,
                                      sizes: `708px`,
                                      src: `../../assets/images/GlW2Fnexu5140RbKbe0P6A71YM-dbaf83.png`,
                                      srcSet: `../../assets/images/GlW2Fnexu5140RbKbe0P6A71YM-61ac57.png 512w,../../assets/images/GlW2Fnexu5140RbKbe0P6A71YM.png 1024w,../../assets/images/GlW2Fnexu5140RbKbe0P6A71YM-ae2ee2.png 2048w,../../assets/images/GlW2Fnexu5140RbKbe0P6A71YM-dbaf83.png 3000w`,
                                    },
                                    className: `framer-147uxuk`,
                                    "data-framer-name": `KarltonpikminFINAL`,
                                  }),
                                  /*#__PURE__*/ s(y, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1136,
                                      intrinsicWidth: 640,
                                      pixelHeight: 1136,
                                      pixelWidth: 640,
                                      sizes: `399px`,
                                      src: `../../assets/images/9Em8gqi0z8d7kts9kQNMYK6W1s-f70720.png`,
                                      srcSet: `../../assets/images/9Em8gqi0z8d7kts9kQNMYK6W1s.png 576w,../../assets/images/9Em8gqi0z8d7kts9kQNMYK6W1s-f70720.png 640w`,
                                    },
                                    className: `framer-ybu7hu`,
                                    "data-framer-name": `JayV6`,
                                  }),
                                  /*#__PURE__*/ s(y, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 4500,
                                      intrinsicWidth: 3e3,
                                      pixelHeight: 4500,
                                      pixelWidth: 3e3,
                                      sizes: `475.3333px`,
                                      src: `../../assets/images/Yt7tDXVQ1RoOAmIMlAxC3aofjk-b03cc1.jpg`,
                                      srcSet: `../../assets/images/Yt7tDXVQ1RoOAmIMlAxC3aofjk.jpg 682w,../../assets/images/Yt7tDXVQ1RoOAmIMlAxC3aofjk-d87f38.jpg 1365w,../../assets/images/Yt7tDXVQ1RoOAmIMlAxC3aofjk-979fb1.jpg 2730w,../../assets/images/Yt7tDXVQ1RoOAmIMlAxC3aofjk-b03cc1.jpg 3000w`,
                                    },
                                    className: `framer-158fm15`,
                                    "data-framer-name": `illust_planet`,
                                  }),
                                  /*#__PURE__*/ s(y, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 3024,
                                      intrinsicWidth: 4032,
                                      pixelHeight: 3024,
                                      pixelWidth: 4032,
                                      sizes: `940px`,
                                      src: `../../assets/images/eoD0CFYZiKplHRlKnfkzOZmyzSM-3b7a3c.jpg`,
                                      srcSet: `../../assets/images/eoD0CFYZiKplHRlKnfkzOZmyzSM-af472e.jpg 512w,../../assets/images/eoD0CFYZiKplHRlKnfkzOZmyzSM.jpg 1024w,../../assets/images/eoD0CFYZiKplHRlKnfkzOZmyzSM-c25a5c.jpg 2048w,../../assets/images/eoD0CFYZiKplHRlKnfkzOZmyzSM-3b7a3c.jpg 4032w`,
                                    },
                                    className: `framer-is2gfp`,
                                    "data-framer-name": `laloid_riso`,
                                  }),
                                  /*#__PURE__*/ s(y, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 3236,
                                      intrinsicWidth: 2087,
                                      pixelHeight: 3236,
                                      pixelWidth: 2087,
                                      sizes: `461px`,
                                      src: `../../assets/images/yqyYn60rAzmIvzggknGVjzT0u8-996906.jpg`,
                                      srcSet: `../../assets/images/yqyYn60rAzmIvzggknGVjzT0u8.jpg 660w,../../assets/images/yqyYn60rAzmIvzggknGVjzT0u8-5be3be.jpg 1320w,../../assets/images/yqyYn60rAzmIvzggknGVjzT0u8-996906.jpg 2087w`,
                                    },
                                    className: `framer-l0kjiy`,
                                    "data-framer-name": `illust_slender`,
                                  }),
                                  /*#__PURE__*/ s(y, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 3924,
                                      intrinsicWidth: 3024,
                                      pixelHeight: 3924,
                                      pixelWidth: 3024,
                                      sizes: `551.0092px`,
                                      src: `../../assets/images/VXrKu7NurR1ouyNOIcQRtbjpo-4121dd.jpg`,
                                      srcSet: `../../assets/images/VXrKu7NurR1ouyNOIcQRtbjpo.jpg 789w,../../assets/images/VXrKu7NurR1ouyNOIcQRtbjpo-1d6f0a.jpg 1578w,../../assets/images/VXrKu7NurR1ouyNOIcQRtbjpo-4121dd.jpg 3024w`,
                                    },
                                    className: `framer-1867l2j`,
                                    "data-framer-name": `illust_nrg`,
                                  }),
                                ],
                                snapObject: { fluid: !1, snap: !0, snapEdge: `center` },
                                style: { height: `100%`, width: `100%` },
                                width: `100%`,
                              }),
                            }),
                          }),
                          /*#__PURE__*/ s(M, {
                            children: /*#__PURE__*/ s(D, {
                              className: `framer-2stjvw-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `kEYcMh8qP`,
                              scopeId: `augiA20Il`,
                              children: /*#__PURE__*/ s(T, {
                                breakpoint: E,
                                overrides: { i3KWEszDs: { speed: 80 } },
                                children: /*#__PURE__*/ s(ue, {
                                  alignment: `center`,
                                  direction: `left`,
                                  fadeOptions: {
                                    fadeAlpha: 0,
                                    fadeContent: !1,
                                    fadeInset: 0,
                                    fadeWidth: 25,
                                    overflow: !1,
                                  },
                                  gap: 17,
                                  height: `100%`,
                                  hoverFactor: 0.6,
                                  id: `kEYcMh8qP`,
                                  layoutId: `kEYcMh8qP`,
                                  padding: 10,
                                  paddingBottom: 0,
                                  paddingLeft: 10,
                                  paddingPerSide: !0,
                                  paddingRight: 10,
                                  paddingTop: 10,
                                  sizingOptions: { heightType: !0, widthType: !0 },
                                  slots: [
                                    /*#__PURE__*/ s(y, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1e3,
                                        intrinsicWidth: 1e3,
                                        pixelHeight: 1e3,
                                        pixelWidth: 1e3,
                                        sizes: `329px`,
                                        src: `../../assets/images/7IhR8qNsCcyb5tG4l9ZG21sLWc-3d0176.png`,
                                        srcSet: `../../assets/images/7IhR8qNsCcyb5tG4l9ZG21sLWc.png 512w,../../assets/images/7IhR8qNsCcyb5tG4l9ZG21sLWc-3d0176.png 1000w`,
                                      },
                                      className: `framer-5i5eq6`,
                                      "data-framer-name": `Cool porygon2`,
                                    }),
                                    /*#__PURE__*/ s(y, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1e3,
                                        intrinsicWidth: 1e3,
                                        pixelHeight: 1e3,
                                        pixelWidth: 1e3,
                                        sizes: `329px`,
                                        src: `../../assets/images/1HkYDdsIT2ur8jMdkvgtP3bosD8-87e0c0.png`,
                                        srcSet: `../../assets/images/1HkYDdsIT2ur8jMdkvgtP3bosD8.png 512w,../../assets/images/1HkYDdsIT2ur8jMdkvgtP3bosD8-87e0c0.png 1000w`,
                                      },
                                      className: `framer-1kpxv6j`,
                                      "data-framer-name": `Mopfini`,
                                    }),
                                    /*#__PURE__*/ s(y, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 3e3,
                                        intrinsicWidth: 3e3,
                                        pixelHeight: 3e3,
                                        pixelWidth: 3e3,
                                        sizes: `342px`,
                                        src: `../../assets/images/PRkihSMOobmF400sywW6GMnRiI-ed60f7.png`,
                                        srcSet: `../../assets/images/PRkihSMOobmF400sywW6GMnRiI.png 512w,../../assets/images/PRkihSMOobmF400sywW6GMnRiI-7325ee.png 1024w,../../assets/images/PRkihSMOobmF400sywW6GMnRiI-f06ee2.png 2048w,../../assets/images/PRkihSMOobmF400sywW6GMnRiI-ed60f7.png 3000w`,
                                      },
                                      className: `framer-ezffo0`,
                                      "data-framer-name": `Mopsquirtcooking2`,
                                    }),
                                    /*#__PURE__*/ s(y, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 3e3,
                                        intrinsicWidth: 3e3,
                                        pixelHeight: 3e3,
                                        pixelWidth: 3e3,
                                        sizes: `353px`,
                                        src: `../../assets/images/0gIKN3eoFnkudfPhUsq0Gp3bWtA-2a40dd.png`,
                                        srcSet: `../../assets/images/0gIKN3eoFnkudfPhUsq0Gp3bWtA.png 512w,../../assets/images/0gIKN3eoFnkudfPhUsq0Gp3bWtA-7130d3.png 1024w,../../assets/images/0gIKN3eoFnkudfPhUsq0Gp3bWtA-004844.png 2048w,../../assets/images/0gIKN3eoFnkudfPhUsq0Gp3bWtA-2a40dd.png 3000w`,
                                      },
                                      className: `framer-1155gtx`,
                                      "data-framer-name": `Mopsquirtcooking1`,
                                    }),
                                    /*#__PURE__*/ s(y, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 2400,
                                        intrinsicWidth: 2400,
                                        pixelHeight: 2400,
                                        pixelWidth: 2400,
                                        sizes: `445px`,
                                        src: `../../assets/images/45WPouagWUVgdxCZ27Qo9Brg9c-26fa1b.png`,
                                        srcSet: `../../assets/images/45WPouagWUVgdxCZ27Qo9Brg9c.png 512w,../../assets/images/45WPouagWUVgdxCZ27Qo9Brg9c-8d5ab0.png 1024w,../../assets/images/45WPouagWUVgdxCZ27Qo9Brg9c-6e8bcc.png 2048w,../../assets/images/45WPouagWUVgdxCZ27Qo9Brg9c-26fa1b.png 2400w`,
                                      },
                                      className: `framer-17ouir8`,
                                      "data-framer-name": `Sticker- Sketch`,
                                    }),
                                    /*#__PURE__*/ s(y, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 500,
                                        intrinsicWidth: 500,
                                        pixelHeight: 500,
                                        pixelWidth: 500,
                                        sizes: `329px`,
                                        src: `../../assets/images/GRc2vCqteaf0Ar53J8jHdFqUH8.png`,
                                      },
                                      className: `framer-9jxdyq`,
                                      "data-framer-name": `OifeySlargest`,
                                    }),
                                    /*#__PURE__*/ s(y, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 224,
                                        intrinsicWidth: 224,
                                        pixelHeight: 224,
                                        pixelWidth: 224,
                                        sizes: `329px`,
                                        src: `../../assets/images/Ej37bRLr15BANFeSlboEjb5k.png`,
                                      },
                                      className: `framer-1hq09us`,
                                      "data-framer-name": `Illiana knife edits FINAL outline test`,
                                    }),
                                    /*#__PURE__*/ s(y, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 392,
                                        intrinsicWidth: 392,
                                        pixelHeight: 392,
                                        pixelWidth: 392,
                                        sizes: `356px`,
                                        src: `../../assets/images/mWOYzeAnGEwMG838DHryqLbzMC0.png`,
                                      },
                                      className: `framer-14i8qoz`,
                                      "data-framer-name": `Brigand boss cyl`,
                                    }),
                                  ],
                                  speed: 150,
                                  style: { height: `100%`, width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                          /*#__PURE__*/ s(M, {
                            children: /*#__PURE__*/ s(D, {
                              className: `framer-dlk5z5-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `TfdPUUH72`,
                              scopeId: `augiA20Il`,
                              children: /*#__PURE__*/ s(T, {
                                breakpoint: E,
                                overrides: { i3KWEszDs: { speed: 80 } },
                                children: /*#__PURE__*/ s(ue, {
                                  alignment: `center`,
                                  direction: `left`,
                                  fadeOptions: {
                                    fadeAlpha: 0,
                                    fadeContent: !1,
                                    fadeInset: 0,
                                    fadeWidth: 25,
                                    overflow: !1,
                                  },
                                  gap: 17,
                                  height: `100%`,
                                  hoverFactor: 0.6,
                                  id: `TfdPUUH72`,
                                  layoutId: `TfdPUUH72`,
                                  padding: 10,
                                  paddingBottom: 50,
                                  paddingLeft: 10,
                                  paddingPerSide: !0,
                                  paddingRight: 10,
                                  paddingTop: 10,
                                  sizingOptions: { heightType: !0, widthType: !0 },
                                  slots: [
                                    /*#__PURE__*/ s(y, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 3e3,
                                        intrinsicWidth: 3e3,
                                        pixelHeight: 3e3,
                                        pixelWidth: 3e3,
                                        sizes: `300px`,
                                        src: `../../assets/images/UHrdeNwC0ilTh0ntyJmSrOco1GY-556eca.png`,
                                        srcSet: `../../assets/images/UHrdeNwC0ilTh0ntyJmSrOco1GY.png 512w,../../assets/images/UHrdeNwC0ilTh0ntyJmSrOco1GY-f3acd1.png 1024w,../../assets/images/UHrdeNwC0ilTh0ntyJmSrOco1GY-edd409.png 2048w,../../assets/images/UHrdeNwC0ilTh0ntyJmSrOco1GY-556eca.png 3000w`,
                                      },
                                      className: `framer-b4i66r`,
                                      "data-framer-name": `Sneeb notxt`,
                                    }),
                                    /*#__PURE__*/ s(y, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 995,
                                        intrinsicWidth: 921,
                                        pixelHeight: 995,
                                        pixelWidth: 921,
                                        sizes: `300.8291px`,
                                        src: `../../assets/images/DLkgTlUIb7Ba7D7iPuAP2gO5MDk.png`,
                                        srcSet: `../../assets/images/DLkgTlUIb7Ba7D7iPuAP2gO5MDk.png 921w`,
                                      },
                                      className: `framer-1mib8ix`,
                                      "data-framer-name": `Route 1`,
                                    }),
                                    /*#__PURE__*/ s(y, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1e3,
                                        intrinsicWidth: 1e3,
                                        pixelHeight: 1e3,
                                        pixelWidth: 1e3,
                                        sizes: `328px`,
                                        src: `../../assets/images/oq9i7cISIVIGd7WWMBUKSskSpE-d6819c.png`,
                                        srcSet: `../../assets/images/oq9i7cISIVIGd7WWMBUKSskSpE.png 512w,../../assets/images/oq9i7cISIVIGd7WWMBUKSskSpE-d6819c.png 1000w`,
                                      },
                                      className: `framer-164mwpa`,
                                      "data-framer-name": `MoxieGolis copy`,
                                    }),
                                    /*#__PURE__*/ s(y, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1500,
                                        intrinsicWidth: 1500,
                                        pixelHeight: 1500,
                                        pixelWidth: 1500,
                                        sizes: `362px`,
                                        src: `../../assets/images/2VtQUQlAzOlIa5w0XfU9VXaRFFM-981653.png`,
                                        srcSet: `../../assets/images/2VtQUQlAzOlIa5w0XfU9VXaRFFM.png 512w,../../assets/images/2VtQUQlAzOlIa5w0XfU9VXaRFFM-5f6239.png 1024w,../../assets/images/2VtQUQlAzOlIa5w0XfU9VXaRFFM-981653.png 1500w`,
                                      },
                                      className: `framer-s70ny3`,
                                      "data-framer-name": `Wooloo`,
                                    }),
                                    /*#__PURE__*/ s(y, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 500,
                                        intrinsicWidth: 500,
                                        pixelHeight: 500,
                                        pixelWidth: 500,
                                        sizes: `329px`,
                                        src: `../../assets/images/1ClD2Lc0Cv6CJX1vwRc4QGgyxBE.png`,
                                      },
                                      className: `framer-kz7lqo`,
                                      "data-framer-name": `Big comfey`,
                                    }),
                                    /*#__PURE__*/ s(y, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 1e3,
                                        intrinsicWidth: 1e3,
                                        pixelHeight: 1e3,
                                        pixelWidth: 1e3,
                                        sizes: `329px`,
                                        src: `../../assets/images/9M9p2gsK6hyUKJaS2Yc94uE5nMM-312250.png`,
                                        srcSet: `../../assets/images/9M9p2gsK6hyUKJaS2Yc94uE5nMM.png 512w,../../assets/images/9M9p2gsK6hyUKJaS2Yc94uE5nMM-312250.png 1000w`,
                                      },
                                      className: `framer-unooxj`,
                                      "data-framer-name": `Xman`,
                                    }),
                                    /*#__PURE__*/ s(y, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 3e3,
                                        intrinsicWidth: 3e3,
                                        pixelHeight: 3e3,
                                        pixelWidth: 3e3,
                                        sizes: `555px`,
                                        src: `../../assets/images/N6qrqSfx676C4f2PbMGT9NGL7zQ-88134a.png`,
                                        srcSet: `../../assets/images/N6qrqSfx676C4f2PbMGT9NGL7zQ-49fb27.png 512w,../../assets/images/N6qrqSfx676C4f2PbMGT9NGL7zQ.png 1024w,../../assets/images/N6qrqSfx676C4f2PbMGT9NGL7zQ-70f58b.png 2048w,../../assets/images/N6qrqSfx676C4f2PbMGT9NGL7zQ-88134a.png 3000w`,
                                      },
                                      className: `framer-a511wy`,
                                      "data-framer-name": `Freddy vgc bears`,
                                    }),
                                    /*#__PURE__*/ s(y, {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 3e3,
                                        intrinsicWidth: 3e3,
                                        pixelHeight: 3e3,
                                        pixelWidth: 3e3,
                                        sizes: `555px`,
                                        src: `../../assets/images/jVvXObXQ9Qf3RqMoKh66nougcs-f4456b.png`,
                                        srcSet: `../../assets/images/jVvXObXQ9Qf3RqMoKh66nougcs-63a186.png 512w,../../assets/images/jVvXObXQ9Qf3RqMoKh66nougcs.png 1024w,../../assets/images/jVvXObXQ9Qf3RqMoKh66nougcs-bdfcb3.png 2048w,../../assets/images/jVvXObXQ9Qf3RqMoKh66nougcs-f4456b.png 3000w`,
                                      },
                                      className: `framer-1ul6uqp`,
                                      "data-framer-name": `Freddy vgc bears2`,
                                    }),
                                  ],
                                  speed: 150,
                                  style: { height: `100%`, width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    /*#__PURE__*/ s(u.div, {
                      className: `framer-uxg16f`,
                      "data-framer-name": `About Section`,
                      id: z,
                      layout: F,
                      ref: B,
                      children: /*#__PURE__*/ c(`div`, {
                        className: `framer-dtjvet`,
                        "data-framer-name": `Content`,
                        children: [
                          /*#__PURE__*/ c(vt, {
                            __framer__animate: { transition: J },
                            __framer__animateOnce: !0,
                            __framer__enter: Z,
                            __framer__exit: Nt,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-19s4q8f`,
                            "data-framer-name": `About Description`,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ s(N, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ s(t, {
                                  children: /*#__PURE__*/ s(`h2`, {
                                    className: `framer-styles-preset-14b947d`,
                                    "data-styles-preset": `ookvPmU1_`,
                                    style: {
                                      "--framer-text-color": `var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10))`,
                                    },
                                    children: `About Me`,
                                  }),
                                }),
                                className: `framer-1fryzmn`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              /*#__PURE__*/ s(T, {
                                breakpoint: E,
                                overrides: {
                                  i3KWEszDs: {
                                    children: /*#__PURE__*/ s(t, {
                                      children: /*#__PURE__*/ s(`p`, {
                                        className: `framer-styles-preset-17qvjw9`,
                                        "data-styles-preset": `W6ZCCcKuw`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: `Hello! My name is Ashley Stelzer and I'm majoring in Visual Communication Design at Cal Poly Pomona. I have been working in digital art since I was given my first drawing tablet at 14 years old and I haven't stopped since! `,
                                      }),
                                    }),
                                  },
                                },
                                children: /*#__PURE__*/ s(N, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ s(t, {
                                    children: /*#__PURE__*/ s(`p`, {
                                      className: `framer-styles-preset-17qvjw9`,
                                      "data-styles-preset": `W6ZCCcKuw`,
                                      children: `Hello! My name is Ashley Stelzer and I'm majoring in Visual Communication Design at Cal Poly Pomona. I have been working in digital art since I was given my first drawing tablet at 14 years old and I haven't stopped since! `,
                                    }),
                                  }),
                                  className: `framer-wokmd`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ c(vt, {
                            __framer__animate: { transition: J },
                            __framer__animateOnce: !0,
                            __framer__enter: Z,
                            __framer__exit: Nt,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-5payvk`,
                            "data-framer-name": `About rows`,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ s(T, {
                                breakpoint: E,
                                overrides: {
                                  i3KWEszDs: {
                                    width: `calc(${g?.width || `100vw`} - 48px)`,
                                    y: (g?.y || 0) + 9026.2,
                                  },
                                  ypI3yepZf: { y: (g?.y || 0) + 5935.8519 },
                                },
                                children: /*#__PURE__*/ s(M, {
                                  height: 378,
                                  width: `max((max(${g?.width || `100vw`}, 1px) - 144px) / 2, 1px)`,
                                  y: (g?.y || 0) + 6289,
                                  children: /*#__PURE__*/ s(D, {
                                    className: `framer-104sjun-container`,
                                    nodeId: `zBUawiqLy`,
                                    scopeId: `augiA20Il`,
                                    children: /*#__PURE__*/ s(T, {
                                      breakpoint: E,
                                      overrides: {
                                        i3KWEszDs: { variant: X(`v4MZtWY3E`) },
                                        ypI3yepZf: { clFUjnGQV: `Design Process` },
                                      },
                                      children: /*#__PURE__*/ s(K, {
                                        clFUjnGQV: `My Design Philosophy`,
                                        FhoU6ADwj: `Ever since I was young, I have been a kinesthetic learner, which is a fancy way to say I work and learn best when I can be hands-on. No matter the media, no matter the project, you will always find me with sheets of paper notes and sketches sprawled out on the ground as I piece together the best solution. I believe taking the physical into account is extremely valuable with design, even if it's digital.`,
                                        height: `100%`,
                                        id: `zBUawiqLy`,
                                        layoutId: `zBUawiqLy`,
                                        style: { width: `100%` },
                                        variant: X(`Wq7LQW8Bm`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ s(T, {
                                breakpoint: E,
                                overrides: {
                                  i3KWEszDs: {
                                    width: `calc(${g?.width || `100vw`} - 48px)`,
                                    y: (g?.y || 0) + 9404.2,
                                  },
                                  ypI3yepZf: { y: (g?.y || 0) + 6313.8519 },
                                },
                                children: /*#__PURE__*/ s(M, {
                                  height: 378,
                                  width: `max((max(${g?.width || `100vw`}, 1px) - 144px) / 2, 1px)`,
                                  y: (g?.y || 0) + 6667,
                                  children: /*#__PURE__*/ s(D, {
                                    className: `framer-15evb85-container`,
                                    nodeId: `Juv_5yiEO`,
                                    scopeId: `augiA20Il`,
                                    children: /*#__PURE__*/ s(T, {
                                      breakpoint: E,
                                      overrides: { i3KWEszDs: { variant: X(`v4MZtWY3E`) } },
                                      children: /*#__PURE__*/ s(K, {
                                        clFUjnGQV: `Experience`,
                                        FhoU6ADwj: `Much of my work has been focused on independent illustration commissions that taught me early on how to communicate one-on-one with clients and bring their visions to reality. I've also worked as a print tech for Cal Poly Pomona’s art department print lab for two years and have since trained many of my coworkers in print processes. However, my first internship was actually with the Planetary Science Institute working with UVIS spectra.`,
                                        height: `100%`,
                                        id: `Juv_5yiEO`,
                                        layoutId: `Juv_5yiEO`,
                                        style: { width: `100%` },
                                        variant: X(`Wq7LQW8Bm`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ s(T, {
                                breakpoint: E,
                                overrides: {
                                  i3KWEszDs: {
                                    width: `calc(${g?.width || `100vw`} - 48px)`,
                                    y: (g?.y || 0) + 9782.2,
                                  },
                                  ypI3yepZf: { y: (g?.y || 0) + 6691.8519 },
                                },
                                children: /*#__PURE__*/ s(M, {
                                  height: 378,
                                  width: `max((max(${g?.width || `100vw`}, 1px) - 144px) / 2, 1px)`,
                                  y: (g?.y || 0) + 7045,
                                  children: /*#__PURE__*/ s(D, {
                                    className: `framer-1ocs05b-container`,
                                    nodeId: `h8I2EHzfb`,
                                    scopeId: `augiA20Il`,
                                    children: /*#__PURE__*/ s(T, {
                                      breakpoint: E,
                                      overrides: { i3KWEszDs: { variant: X(`v4MZtWY3E`) } },
                                      children: /*#__PURE__*/ s(K, {
                                        clFUjnGQV: `Skills`,
                                        FhoU6ADwj: `I am well versed in the Adobe Creative suite, especially with Photosop, Illustrator, and InDesign. I have also used a variety of other programs, such as Clip Studio Paint, for digital illustration.  I have many years of working with small-batch print production and have learned how to create and edit designs intended for both print and digital, often converting files between the two.  Much of my work has been independent for a client so I have become accustomed to setting my own deadlines and tracking project progress. `,
                                        height: `100%`,
                                        id: `h8I2EHzfb`,
                                        layoutId: `h8I2EHzfb`,
                                        style: { width: `100%` },
                                        variant: X(`Wq7LQW8Bm`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    /*#__PURE__*/ s(u.div, {
                      className: `framer-1os9r0o`,
                      "data-framer-name": `Invisible footer`,
                      id: V,
                      layout: F,
                      ref: H,
                    }),
                    /*#__PURE__*/ s(u.div, {
                      className: `framer-iq6kjw`,
                      "data-framer-name": `Footer Section`,
                      id: U,
                      layout: F,
                      ref: W,
                      children: /*#__PURE__*/ s(T, {
                        breakpoint: E,
                        overrides: {
                          i3KWEszDs: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: m(0),
                              pixelHeight: 576,
                              pixelWidth: 720,
                              sizes: g?.width || `100vw`,
                              src: `../../assets/images/ZGyFfct3y1TuptNUWJsOtLGXE8Y.jpg`,
                              srcSet: `../../assets/images/ZGyFfct3y1TuptNUWJsOtLGXE8Y-8a2f40.jpg 512w,../../assets/images/ZGyFfct3y1TuptNUWJsOtLGXE8Y.jpg 720w`,
                            },
                          },
                        },
                        children: /*#__PURE__*/ c(y, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: m(0),
                            pixelHeight: 576,
                            pixelWidth: 720,
                            sizes: `max(${g?.width || `100vw`}, 1px)`,
                            src: `../../assets/images/ZGyFfct3y1TuptNUWJsOtLGXE8Y.jpg`,
                            srcSet: `../../assets/images/ZGyFfct3y1TuptNUWJsOtLGXE8Y-8a2f40.jpg 512w,../../assets/images/ZGyFfct3y1TuptNUWJsOtLGXE8Y.jpg 720w`,
                          },
                          className: `framer-1h0ngkf`,
                          "data-framer-name": `Content`,
                          children: [
                            /*#__PURE__*/ s(`div`, {
                              className: `framer-l1v84x`,
                              children: /*#__PURE__*/ s(T, {
                                breakpoint: E,
                                overrides: {
                                  i3KWEszDs: { viewBox: `0 0 961 136` },
                                  ypI3yepZf: { viewBox: `0 0 961 136` },
                                },
                                children: /*#__PURE__*/ s(q, {
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 2,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: H,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onScrollTarget`,
                                  __framer__transformViewportThreshold: 1,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  animate: Pt,
                                  children: /*#__PURE__*/ s(t, {
                                    children: /*#__PURE__*/ s(`h2`, {
                                      style: {
                                        "--font-selector": `R0Y7QWJyaWwgRmF0ZmFjZS1yZWd1bGFy`,
                                        "--framer-font-family": `"Abril Fatface", sans-serif`,
                                        "--framer-font-size": `124px`,
                                        "--framer-line-height": `1.1em`,
                                        "--framer-text-color": `var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10))`,
                                      },
                                      children: `Talk to you soon!`,
                                    }),
                                  }),
                                  className: `framer-168jrui`,
                                  "data-framer-appear-id": `168jrui`,
                                  fonts: [`GF;Abril Fatface-regular`],
                                  initial: Ft,
                                  optimized: !0,
                                  style: { transformPerspective: 1200 },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            /*#__PURE__*/ s(_, {
                              links: [
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                /*#__PURE__*/ s(T, {
                                  breakpoint: E,
                                  overrides: {
                                    i3KWEszDs: { height: 192, width: `192px`, y: 96 },
                                    ypI3yepZf: { height: 192, width: `192px`, y: 760 },
                                  },
                                  children: /*#__PURE__*/ s(M, {
                                    height: 384,
                                    width: `384px`,
                                    y: 568,
                                    children: /*#__PURE__*/ s(D, {
                                      className: `framer-mmz9kx-container`,
                                      nodeId: `Fya4QkIi_`,
                                      scopeId: `augiA20Il`,
                                      children: /*#__PURE__*/ s(T, {
                                        breakpoint: E,
                                        overrides: {
                                          i3KWEszDs: { FscnUdkBi: e[2], variant: X(`uytax5Kr_`) },
                                          ypI3yepZf: { FscnUdkBi: e[1], variant: X(`uytax5Kr_`) },
                                        },
                                        children: /*#__PURE__*/ s(L, {
                                          FscnUdkBi: e[0],
                                          height: `100%`,
                                          id: `Fya4QkIi_`,
                                          layoutId: `Fya4QkIi_`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: X(`oXNss8DIB`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                            /*#__PURE__*/ c(`div`, {
                              className: `framer-vpil48`,
                              "data-framer-name": `Footer Links`,
                              children: [
                                /*#__PURE__*/ c(`div`, {
                                  className: `framer-1a4wc8r`,
                                  "data-framer-name": `Menu`,
                                  children: [
                                    /*#__PURE__*/ s(_, {
                                      links: [
                                        {
                                          href: { hash: `:rxV0gPZfT`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:rxV0gPZfT`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:rxV0gPZfT`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        /*#__PURE__*/ s(T, {
                                          breakpoint: E,
                                          overrides: {
                                            i3KWEszDs: { y: 709 },
                                            ypI3yepZf: { y: 504 },
                                          },
                                          children: /*#__PURE__*/ s(M, {
                                            height: 33,
                                            y: 568,
                                            children: /*#__PURE__*/ s(D, {
                                              className: `framer-1dgexd6-container`,
                                              "data-framer-name": `contact`,
                                              name: `contact`,
                                              nodeId: `srSgyNAUa`,
                                              scopeId: `augiA20Il`,
                                              children: /*#__PURE__*/ s(T, {
                                                breakpoint: E,
                                                overrides: {
                                                  i3KWEszDs: { BUm4gpVFM: e[2] },
                                                  ypI3yepZf: { BUm4gpVFM: e[1] },
                                                },
                                                children: /*#__PURE__*/ s(R, {
                                                  BUm4gpVFM: e[0],
                                                  FH9GqwMqG: `Contact`,
                                                  height: `100%`,
                                                  hM93PXv53: `mailto:stelzerash@gmail.com`,
                                                  id: `srSgyNAUa`,
                                                  layoutId: `srSgyNAUa`,
                                                  name: `contact`,
                                                  variant: X(`gjuBRTGMF`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                    /*#__PURE__*/ s(T, {
                                      breakpoint: E,
                                      overrides: { i3KWEszDs: { y: 766 }, ypI3yepZf: { y: 504 } },
                                      children: /*#__PURE__*/ s(M, {
                                        height: 33,
                                        y: 568,
                                        children: /*#__PURE__*/ s(D, {
                                          className: `framer-viwheq-container`,
                                          "data-framer-name": `LinkedIn`,
                                          name: `LinkedIn`,
                                          nodeId: `X5s6rvPBd`,
                                          scopeId: `augiA20Il`,
                                          children: /*#__PURE__*/ s(R, {
                                            FH9GqwMqG: `LinkedIn`,
                                            height: `100%`,
                                            hM93PXv53: `https://www.linkedin.com/in/ashleystelz/`,
                                            id: `X5s6rvPBd`,
                                            layoutId: `X5s6rvPBd`,
                                            name: `LinkedIn`,
                                            variant: X(`gjuBRTGMF`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    /*#__PURE__*/ s(_, {
                                      links: [
                                        {
                                          href: { hash: `:wmAymqz5D`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:wmAymqz5D`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: { hash: `:wmAymqz5D`, webPageId: `augiA20Il` },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        /*#__PURE__*/ s(T, {
                                          breakpoint: E,
                                          overrides: {
                                            i3KWEszDs: { y: 823 },
                                            ypI3yepZf: { y: 504 },
                                          },
                                          children: /*#__PURE__*/ s(M, {
                                            height: 33,
                                            y: 568,
                                            children: /*#__PURE__*/ s(D, {
                                              className: `framer-1ddv602-container`,
                                              "data-framer-name": `Returntotop`,
                                              name: `Returntotop`,
                                              nodeId: `pNHFm1fnB`,
                                              scopeId: `augiA20Il`,
                                              children: /*#__PURE__*/ s(T, {
                                                breakpoint: E,
                                                overrides: {
                                                  i3KWEszDs: { hM93PXv53: e[2] },
                                                  ypI3yepZf: { hM93PXv53: e[1] },
                                                },
                                                children: /*#__PURE__*/ s(R, {
                                                  FH9GqwMqG: `Back To Top`,
                                                  height: `100%`,
                                                  hM93PXv53: e[0],
                                                  id: `pNHFm1fnB`,
                                                  layoutId: `pNHFm1fnB`,
                                                  name: `Returntotop`,
                                                  variant: X(`gjuBRTGMF`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ s(`div`, {
                                  className: `framer-1tfd55v`,
                                  "data-framer-name": `Credentials`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    /*#__PURE__*/ s(u.div, {
                      className: `framer-xv0hac`,
                      "data-framer-name": `Noise Layer`,
                      layout: F,
                      children: /*#__PURE__*/ s(M, {
                        children: /*#__PURE__*/ s(D, {
                          className: `framer-14yuw8x-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          nodeId: `T1NCmC9ZT`,
                          scopeId: `augiA20Il`,
                          children: /*#__PURE__*/ s(fe, {
                            backgroundSize: 84,
                            borderRadius: 0,
                            height: `100%`,
                            id: `T1NCmC9ZT`,
                            layoutId: `T1NCmC9ZT`,
                            opacity: 0.1,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                          }),
                        }),
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
      (Bt = [
        `.framer-IPdlO.framer-lux5qc, .framer-IPdlO .framer-lux5qc { display: block; }`,
        `.framer-IPdlO.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-e963b8ae-02ac-4e93-b75a-f86ceff4c8c2, #323a2c); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-IPdlO .framer-1q66or9-container { flex: none; height: auto; left: 50%; position: absolute; top: 0px; transform: translateX(-50%); width: auto; z-index: 1; }`,
        `.framer-IPdlO .framer-1dc0chv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: visible; padding: 48px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-IPdlO .framer-tu4m6l { align-content: center; align-items: center; background-color: var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, #f4c877); border-top-left-radius: 196px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: hidden; padding: 24px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-IPdlO .framer-1k0oh17 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: 57%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-IPdlO .framer-i7vhvu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: absolute; right: 48px; top: 48px; width: min-content; z-index: 1; }`,
        `.framer-IPdlO .framer-1abmulm-container, .framer-IPdlO .framer-728i1i-container, .framer-IPdlO .framer-1streg2-container, .framer-IPdlO .framer-7i8p72-container, .framer-IPdlO .framer-1dgexd6-container, .framer-IPdlO .framer-viwheq-container, .framer-IPdlO .framer-1ddv602-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-IPdlO .framer-wm2t4r { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: 54%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-IPdlO .framer-380z2z { bottom: 0px; flex: none; height: 48%; overflow: hidden; position: absolute; right: 0px; width: 24%; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
        `.framer-IPdlO .framer-1xupjlt, .framer-IPdlO .framer-212adg, .framer-IPdlO .framer-uxg16f { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-IPdlO .framer-1xamy2q { background-color: var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, #f4c877); display: grid; flex: 1 0 0px; gap: 100px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(4, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 96px 48px 96px 48px; position: relative; width: 1px; }`,
        `.framer-IPdlO .framer-15d7pwa { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; align-self: start; flex: none; height: 100%; justify-self: start; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-IPdlO .framer-13qabd1-container, .framer-IPdlO .framer-1lqtf25-container, .framer-IPdlO .framer-tdhwa0-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-IPdlO .framer-1o0h41v-container, .framer-IPdlO .framer-1g5gijn-container, .framer-IPdlO .framer-ahv02u-container, .framer-IPdlO .framer-ghjni0-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }`,
        `.framer-IPdlO .framer-2fzc6t-container { align-self: start; flex: none; grid-column: span 2; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-IPdlO .framer-5yratm { align-content: flex-start; align-items: flex-start; background-color: var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, #f4c877); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1876px; justify-content: flex-start; overflow: visible; padding: 96px 48px 96px 48px; position: relative; width: 1px; }`,
        `.framer-IPdlO .framer-5gv85e-container { cursor: pointer; flex: none; height: 850px; position: relative; width: 100%; }`,
        `.framer-IPdlO .framer-147uxuk { aspect-ratio: 1 / 1; height: auto; overflow: visible; position: relative; width: 708px; }`,
        `.framer-IPdlO .framer-ybu7hu { aspect-ratio: 0.5633802816901409 / 1; height: auto; overflow: visible; position: relative; width: 399px; }`,
        `.framer-IPdlO .framer-158fm15 { aspect-ratio: 0.6666666666666666 / 1; height: auto; overflow: visible; position: relative; width: 475px; }`,
        `.framer-IPdlO .framer-is2gfp { aspect-ratio: 1.3333333333333333 / 1; height: auto; overflow: visible; position: relative; width: 940px; }`,
        `.framer-IPdlO .framer-l0kjiy { aspect-ratio: 0.6449320148331273 / 1; height: auto; overflow: visible; position: relative; width: 461px; }`,
        `.framer-IPdlO .framer-1867l2j { aspect-ratio: 0.7706422018348624 / 1; height: auto; overflow: visible; position: relative; width: 552px; }`,
        `.framer-IPdlO .framer-2stjvw-container { flex: none; height: 28%; position: relative; width: 100%; }`,
        `.framer-IPdlO .framer-5i5eq6, .framer-IPdlO .framer-1kpxv6j, .framer-IPdlO .framer-9jxdyq, .framer-IPdlO .framer-1hq09us, .framer-IPdlO .framer-kz7lqo, .framer-IPdlO .framer-unooxj { aspect-ratio: 1 / 1; height: auto; overflow: visible; position: relative; width: 329px; }`,
        `.framer-IPdlO .framer-ezffo0 { aspect-ratio: 1 / 1; height: auto; overflow: visible; position: relative; width: 342px; }`,
        `.framer-IPdlO .framer-1155gtx { aspect-ratio: 1 / 1; height: auto; overflow: visible; position: relative; width: 353px; }`,
        `.framer-IPdlO .framer-17ouir8 { aspect-ratio: 1 / 1; height: auto; overflow: visible; position: relative; width: 445px; }`,
        `.framer-IPdlO .framer-14i8qoz { aspect-ratio: 1 / 1; height: auto; overflow: visible; position: relative; width: 356px; }`,
        `.framer-IPdlO .framer-dlk5z5-container { flex: none; height: 27%; position: relative; width: 100%; }`,
        `.framer-IPdlO .framer-b4i66r { aspect-ratio: 1 / 1; height: auto; overflow: visible; position: relative; width: 300px; }`,
        `.framer-IPdlO .framer-1mib8ix { aspect-ratio: 0.9256281407035176 / 1; height: auto; overflow: visible; position: relative; width: 301px; }`,
        `.framer-IPdlO .framer-164mwpa { aspect-ratio: 1 / 1; height: auto; overflow: visible; position: relative; width: 328px; }`,
        `.framer-IPdlO .framer-s70ny3 { aspect-ratio: 1 / 1; height: auto; overflow: visible; position: relative; width: 362px; }`,
        `.framer-IPdlO .framer-a511wy, .framer-IPdlO .framer-1ul6uqp { aspect-ratio: 1 / 1; height: auto; overflow: visible; position: relative; width: 555px; }`,
        `.framer-IPdlO .framer-dtjvet { align-content: flex-start; align-items: flex-start; background-color: var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, #f4c877); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 96px 48px 96px 48px; position: relative; width: 1px; }`,
        `.framer-IPdlO .framer-19s4q8f { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: sticky; top: 96px; width: 1px; z-index: 1; }`,
        `.framer-IPdlO .framer-1fryzmn { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
        `.framer-IPdlO .framer-wokmd { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: sticky; top: 96px; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-IPdlO .framer-5payvk { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-IPdlO .framer-104sjun-container, .framer-IPdlO .framer-15evb85-container, .framer-IPdlO .framer-1ocs05b-container { flex: none; height: auto; position: sticky; top: 96px; width: 100%; z-index: 1; }`,
        `.framer-IPdlO .framer-1os9r0o { flex: none; height: 100vh; overflow: hidden; pointer-events: none; position: relative; width: 100%; }`,
        `.framer-IPdlO .framer-iq6kjw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: fixed; right: 0px; top: 0px; z-index: 0; }`,
        `.framer-IPdlO .framer-1h0ngkf { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: 100%; justify-content: flex-start; overflow: visible; padding: 48px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-IPdlO .framer-l1v84x { background-color: var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, #f4c877); border-bottom-right-radius: 192px; flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-IPdlO .framer-168jrui { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 2px; position: absolute; right: -16px; top: -18px; white-space: pre-wrap; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-IPdlO .framer-mmz9kx-container { bottom: 48px; flex: none; height: 384px; position: absolute; right: 48px; width: 384px; z-index: 1; }`,
        `.framer-IPdlO .framer-vpil48 { align-content: flex-start; align-items: flex-start; bottom: 96px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 336px; justify-content: space-between; left: 96px; overflow: hidden; padding: 0px; position: absolute; width: min-content; z-index: 1; }`,
        `.framer-IPdlO .framer-1a4wc8r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-IPdlO .framer-1tfd55v { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; min-height: 20px; overflow: hidden; padding: 0px; position: relative; width: auto; z-index: 1; }`,
        `.framer-IPdlO .framer-xv0hac { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 42px; justify-content: center; left: 0px; opacity: 0.81; overflow: hidden; padding: 0px; pointer-events: none; position: fixed; right: 0px; top: 0px; z-index: 1; }`,
        `.framer-IPdlO .framer-14yuw8x-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
        ...je,
        ...De,
        ...B,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-IPdlO.framer-72rtr7 { width: 810px; } .framer-IPdlO .framer-1dc0chv { height: 75.18518518518519vh; } .framer-IPdlO .framer-tu4m6l { border-top-left-radius: 96px; } .framer-IPdlO .framer-1k0oh17, .framer-IPdlO .framer-wm2t4r { width: 444px; } .framer-IPdlO .framer-380z2z { height: 34%; width: 27%; } .framer-IPdlO .framer-1o0h41v-container, .framer-IPdlO .framer-1g5gijn-container, .framer-IPdlO .framer-ahv02u-container, .framer-IPdlO .framer-ghjni0-container { height: auto; } .framer-IPdlO .framer-5yratm { height: 1771px; } .framer-IPdlO .framer-dtjvet { order: 0; } .framer-IPdlO .framer-l1v84x { border-bottom-right-radius: 96px; } .framer-IPdlO .framer-168jrui { white-space: pre; } .framer-IPdlO .framer-mmz9kx-container { aspect-ratio: 1 / 1; height: auto; width: 192px; } .framer-IPdlO .framer-vpil48 { height: 40%; }}`,
        `@media (max-width: 809.98px) { .framer-IPdlO.framer-72rtr7 { width: 390px; } .framer-IPdlO .framer-1dc0chv { flex-direction: column; padding: 192px 0px 0px 0px; } .framer-IPdlO .framer-tu4m6l { border-top-left-radius: unset; height: 1px; order: 1; width: 100%; will-change: unset; } .framer-IPdlO .framer-1k0oh17 { order: 0; width: 394px; } .framer-IPdlO .framer-i7vhvu { gap: 12px; left: 50%; order: 3; padding: 41px; right: unset; top: 444px; transform: translateX(-50%); width: 92%; } .framer-IPdlO .framer-1abmulm-container { order: 0; } .framer-IPdlO .framer-728i1i-container { order: 1; } .framer-IPdlO .framer-1streg2-container { order: 2; } .framer-IPdlO .framer-7i8p72-container { order: 5; } .framer-IPdlO .framer-wm2t4r { order: 2; width: 394px; } .framer-IPdlO .framer-1xupjlt, .framer-IPdlO .framer-212adg, .framer-IPdlO .framer-uxg16f, .framer-IPdlO .framer-iq6kjw, .framer-IPdlO .framer-xv0hac { flex-direction: column; } .framer-IPdlO .framer-1xamy2q { flex: none; grid-template-columns: repeat(1, minmax(50px, 1fr)); padding: 48px 24px 48px 24px; width: 100%; } .framer-IPdlO .framer-1o0h41v-container, .framer-IPdlO .framer-1g5gijn-container, .framer-IPdlO .framer-ahv02u-container, .framer-IPdlO .framer-ghjni0-container { height: auto; } .framer-IPdlO .framer-2fzc6t-container { grid-column: span 1; } .framer-IPdlO .framer-5yratm { flex: none; padding: 48px 24px 48px 24px; width: 100%; } .framer-IPdlO .framer-dtjvet { flex: none; flex-direction: column; padding: 48px 24px 48px 24px; width: 100%; } .framer-IPdlO .framer-19s4q8f { align-content: center; align-items: center; flex: none; top: 48px; width: 100%; } .framer-IPdlO .framer-1fryzmn { position: sticky; top: 40px; } .framer-IPdlO .framer-5payvk { flex: none; width: 100%; z-index: 1; } .framer-IPdlO .framer-104sjun-container, .framer-IPdlO .framer-15evb85-container, .framer-IPdlO .framer-1ocs05b-container { top: 40px; } .framer-IPdlO .framer-1h0ngkf { gap: 0px; height: 1px; padding: 0px; width: 100%; } .framer-IPdlO .framer-l1v84x { border-bottom-right-radius: unset; will-change: unset; } .framer-IPdlO .framer-168jrui { left: 0px; right: 0px; top: -8px; white-space: pre; } .framer-IPdlO .framer-mmz9kx-container { aspect-ratio: 1 / 1; bottom: unset; height: auto; left: 51%; right: unset; top: 96px; transform: translateX(-50%); width: 192px; } .framer-IPdlO .framer-vpil48 { align-content: center; align-items: center; bottom: 48px; gap: 96px; height: min-content; justify-content: center; left: 50%; transform: translateX(-50%); } .framer-IPdlO .framer-1a4wc8r { flex-direction: column; gap: 24px; } .framer-IPdlO .framer-1tfd55v { flex-direction: column; gap: 24px; justify-content: flex-start; } .framer-IPdlO .framer-14yuw8x-container { height: 1px; width: 100%; }}`,
      ]),
      ($ = b(zt, Bt, `framer-IPdlO`)),
      ($.displayName = `Home`),
      ($.defaultProps = { height: 8372, width: 1200 }),
      v(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Abril Fatface`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Abril Fatface`,
                url: `https://fonts.gstatic.com/s/abrilfatface/v25/zOL64pLDlL1D99S8g8PtiKchm-VsjOLhZBY.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Roboto Slab`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Roboto Slab`,
                url: `https://fonts.gstatic.com/s/robotoslab/v36/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjoa4OWbW5iddG-1A.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...ut,
          ...ft,
          ...ht,
          ...gt,
          ..._t,
          ...yt,
          ...bt,
          ...xt,
          ...p(Me),
          ...p(Oe),
          ...p(V),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = {
        load: (e, t) =>
          se(
            [
              () => g(ye, {}, t),
              () => g(R, {}, t),
              () => g(G, {}, t),
              () => g(K, {}, t),
              () => g(L, {}, t),
            ],
            t
          ),
      }),
      (Vt = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FrameraugiA20Il`,
            slots: [],
            annotations: {
              framerComponentViewportWidth: `true`,
              framerDisplayContentsDiv: `false`,
              framerContractVersion: `1`,
              framerIntrinsicHeight: `8372`,
              framerAcceptsLayoutTemplate: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"ypI3yepZf":{"layout":["fixed","auto"]},"i3KWEszDs":{"layout":["fixed","auto"]}}}`,
              framerIntrinsicWidth: `1200`,
              framerResponsiveScreen: `true`,
              framerScrollSections: `{"JH2w2jPyL":{"pattern":":JH2w2jPyL","name":"hero-section"},"wmAymqz5D":{"pattern":":wmAymqz5D","name":"work-section"},"M9UVpOaSs":{"pattern":":M9UVpOaSs","name":"services-section"},"rxV0gPZfT":{"pattern":":rxV0gPZfT","name":"about-section"},"cd4ZEfD1w":{"pattern":":cd4ZEfD1w","name":"invisible-footer"},"MZ7LnZZon":{"pattern":":MZ7LnZZon","name":"footer-section"}}`,
              framerAutoSizeImages: `true`,
              framerColorSyntax: `true`,
              framerImmutableVariables: `true`,
              framerLayoutTemplateFlowEffect: `true`,
            },
          },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
Ht();
export { Vt as __FramerMetadata__, $ as default, wt as queryParamNames };
//# sourceMappingURL=hH-weX822B77xOPgBXP21TRi-rNypRPJ4bO7Oa0YBow.DpP-c2Oc.mjs.map
