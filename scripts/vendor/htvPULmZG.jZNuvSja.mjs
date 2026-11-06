import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  E as t,
  F as n,
  M as r,
  T as i,
  c as a,
  j as o,
  m as s,
  s as c,
  u as l,
  w as u,
  x as d,
} from "./react.Dq5lJgOf.mjs";
import { T as f, a as p, n as m, r as h, s as g } from "./motion.D3Y82hha.mjs";
import {
  $ as _,
  C as v,
  M as y,
  N as b,
  Q as x,
  R as S,
  at as C,
  b as w,
  c as T,
  dt as E,
  ft as D,
  j as O,
  r as k,
  t as ee,
  u as A,
  v as j,
  vt as te,
  w as M,
  x as N,
  y as P,
} from "./framer.d4MlGAvC.mjs";
import { r as ne, t as re } from "./server.browser.igXv0Fzy.mjs";
import { i as F, n as I, r as L, t as R } from "./W6ZCCcKuw.57CkUy80.mjs";
function z(e) {
  let n;
  return (
    t.map(e, (e) => {
      n === void 0 && (n = e);
    }),
    n
  );
}
var B, V, H, U, ie, ae, oe;
function W() {
  return (W = e(() => {
    (a(),
      i(),
      S(),
      h(),
      ne(),
      (B = D(
        function (e) {
          let n,
            r,
            i,
            a = t.count(e.slots) > 0,
            o = te.current() === te.canvas,
            s = a && e.type === `graphic`,
            u = e.type === `circle`,
            d = e.type === `ellipse` ? e.cylinderHeight / 2 : 0,
            p = H(e.flip, d);
          if (s) {
            let t = z(e.slots),
              i = z(t.props.svg),
              a = z(t.props.children);
            if (o && !a.props.frame)
              return /*#__PURE__*/ l(`div`, {
                style: U,
                children: [
                  /*#__PURE__*/ c(`div`, { style: ie, children: `💎` }),
                  /*#__PURE__*/ c(`p`, { style: ae, children: `Please connect to Graphic` }),
                  /*#__PURE__*/ c(`p`, {
                    style: oe,
                    children: `You can only connect the Arc to a Graphic with a single path.`,
                  }),
                ],
              });
            if (o && a) {
              let e = re(a),
                t = a.props.frame;
              for (let i of ((r = `0 0 ${t.width} ${t.height}`), e.match(/[\w-]+="[^"]*"/g)))
                i.includes(`d=`) && (n = V(i));
            }
            if (!o && i) {
              let e = i.match(/[\w-]+="[^"]*"/g);
              for (let t of ((r = (r = (r = i.split(`viewBox=`)[1]).split(`>`)[0]).replace(
                /^"(.+(?="$))"$/,
                `$1`
              )),
              e))
                t.includes(`d=`) && (n = V(t));
            }
          }
          let h = `curve-${m(n || p)}`;
          return (
            e.alignmentBaseline === `top` && (i = `Text Top`),
            e.alignmentBaseline === `center` && (i = `Central`),
            e.alignmentBaseline === `bottom` && (i = `Hanging`),
            /*#__PURE__*/ c(f.div, {
              style: { width: `100%`, height: `100%`, position: `relative` },
              draggable: `false`,
              children: /*#__PURE__*/ l(f.svg, {
                className: `transform-origin-center-center`,
                style: {
                  width: `100%`,
                  height: `100%`,
                  position: `absolute`,
                  inset: 0,
                  transformOrigin: `center`,
                  willChange: e.rotate && `transform`,
                },
                viewBox: s ? r : `0 0 100 100`,
                overflow: `visible`,
                animate: u && e.rotate && { rotate: 360 },
                transition: u &&
                  e.rotate && { duration: 100 / e.rotateSpeed, repeat: 1 / 0, ease: `linear` },
                children: [
                  /*#__PURE__*/ c(`path`, {
                    id: h,
                    d: s ? n : p,
                    strokeWidth: `none`,
                    fill: `transparent`,
                  }),
                  /*#__PURE__*/ c(`text`, {
                    children: /*#__PURE__*/ l(`textPath`, {
                      href: `#${h}`,
                      startOffset: e.startOffset,
                      dominantBaseline: i,
                      style: { ...e.font, wordSpacing: e.wordSpacing, fill: e.color },
                      children: [
                        e.text,
                        !o &&
                          e.animate &&
                          /*#__PURE__*/ c(`animate`, {
                            attributeName: `startOffset`,
                            from: `${e.animateStart}%`,
                            to: `${e.animateEnd}%`,
                            begin: `0s`,
                            dur: `${e.animateDuration}s`,
                            repeatCount: `indefinite`,
                          }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          );
        },
        [`.transform-origin-center-center { transform-origin: center center !important; }`]
      )),
      (B.defaultProps = { height: 50, width: 50 }),
      N(B, {
        text: {
          title: `Content`,
          type: k.String,
          defaultValue: `✦ THANK YOU ✦ FOR VISITING`,
          displayTextArea: !0,
        },
        type: {
          title: `Type`,
          type: k.Enum,
          options: [`circle`, `ellipse`, `graphic`],
          optionTitles: [`Circle`, `Ellipse`, `Graphic`],
          defaultValue: !0,
        },
        cylinderHeight: {
          title: `Height`,
          type: k.Number,
          unit: `px`,
          min: 0,
          max: 1e3,
          hidden: ({ type: e }) => e !== `ellipse`,
        },
        rotate: {
          type: k.Boolean,
          title: `Rotate`,
          defaultValue: !1,
          hidden: ({ type: e }) => e !== `circle`,
        },
        rotateSpeed: {
          type: k.Number,
          title: `Speed`,
          min: 0,
          max: 50,
          defaultValue: 5,
          displayStepper: !0,
          step: 1,
          hidden: ({ type: e, rotate: t }) => e !== `circle` || !t,
        },
        slots: {
          type: k.ComponentInstance,
          title: `Graphic`,
          hidden: ({ type: e }) => e !== `graphic`,
        },
        alignmentBaseline: {
          title: `Align`,
          type: k.Enum,
          options: [`top`, `center`, `bottom`],
          optionIcons: [`align-top`, `align-middle`, `align-bottom`],
          defaultValue: `bottom`,
          displaySegmentedControl: !0,
        },
        flip: {
          type: k.Boolean,
          defaultValue: !1,
          title: `Direction`,
          enabledTitle: `CW`,
          disabledTitle: `CCW`,
          hidden: ({ type: e }) => e === `graphic`,
        },
        startOffset: {
          title: `Offset`,
          type: k.Number,
          defaultValue: 0,
          max: 360,
          unit: `°`,
          step: 0.5,
        },
        color: { title: `Color`, type: k.Color, defaultValue: `#999` },
        font: { type: k.Font, title: `Font`, controls: `extended`, displayTextAlignment: !1 },
        wordSpacing: {
          type: k.Number,
          step: 1,
          defaultValue: 0,
          title: `Word`,
          displayStepper: !0,
        },
        animate: { type: k.Boolean, defaultValue: !1, title: `Animate` },
        animateStart: {
          type: k.Number,
          min: -200,
          max: 200,
          step: 0.1,
          defaultValue: -50,
          title: `From`,
          unit: `%`,
          hidden: (e) => !e.animate,
        },
        animateEnd: {
          type: k.Number,
          min: -200,
          max: 200,
          step: 0.1,
          defaultValue: 150,
          title: `To`,
          unit: `%`,
          hidden: (e) => !e.animate,
        },
        animateDuration: {
          type: k.Number,
          min: 0,
          max: 50,
          defaultValue: 5,
          title: `Time`,
          unit: `s`,
          displayStepper: !0,
          hidden: (e) => !e.animate,
        },
      }),
      (V = (e) => e.split(`=`)[1].replace(/['"]+/g, ``)),
      (H = (e, t) => {
        let n = 50 - t,
          r = 50 + t;
        return e
          ? `M 0 50 L 0 ${r} A 1 1 0 1 0 100 ${r} L 100 ${n} A 1 1 0 1 0 0 ${n} L 0 50`
          : `M 0 50 L 0 ${n} A 1 1 0 0 1 100 ${n} L 100 50 L 100 ${r} A 1 1 0 0 1 0 ${r} L 0 ${n}`;
      }),
      (U = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
      }),
      (ie = { fontSize: 32, marginBottom: 10 }),
      (ae = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (oe = { margin: 0, opacity: 0.7, maxWidth: 160, lineHeight: 1.5, textAlign: `center` }));
  }))();
}
var se, ce, le;
function ue() {
  return (ue = e(() => {
    (S(),
      M.loadFonts([`GF;Roboto Serif-200`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`]),
      (se = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Roboto Serif`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/robotoserif/v15/R71RjywflP6FLr3gZx7K8UyuXDs9zVwDmXCb8lxYgmuii32UGoVldX6UgfjL4-3sMM_kB_qXSEXTJQCFLH5-_bcElqotp6J2Af5fR4k.woff2`,
              weight: `200`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/vFzuJY0c65av44uhEKB6vyjFMg.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `italic`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (ce = [
        `.framer-BSozQ .framer-styles-preset-r8xh5o:not(.rich-text-wrapper), .framer-BSozQ .framer-styles-preset-r8xh5o.rich-text-wrapper p { --framer-font-family: "Roboto Serif", serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 26px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 200; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, #31110a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (le = `framer-BSozQ`));
  }))();
}
var de, fe, pe;
function me() {
  return (me = e(() => {
    (S(),
      M.loadWebFontsFromSelectors([
        `GF;Inter Tight-regular`,
        `GF;Inter Tight-700`,
        `GF;Inter Tight-700italic`,
        `GF;Inter Tight-italic`,
      ]),
      (de = [
        {
          family: `Inter Tight`,
          moduleAsset: {
            localModuleIdentifier: `local-module:css/WXLgYgNfz:default`,
            url: `https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjDw-qXCRToK8EPg.ttf`,
          },
          style: `normal`,
          url: `https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mjDw-qXCRToK8EPg.ttf`,
          weight: `400`,
        },
        {
          family: `Inter Tight`,
          moduleAsset: {
            localModuleIdentifier: `local-module:css/WXLgYgNfz:default`,
            url: `https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mj6AiqXCRToK8EPg.ttf`,
          },
          style: `normal`,
          url: `https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mj6AiqXCRToK8EPg.ttf`,
          weight: `700`,
        },
        {
          family: `Inter Tight`,
          moduleAsset: {
            localModuleIdentifier: `local-module:css/WXLgYgNfz:default`,
            url: `https://fonts.gstatic.com/s/intertight/v7/NGShv5HMAFg6IuGlBNMjxLsC66ZMtb8hyW62x0ylGC5XgqoUPvi5.ttf`,
          },
          style: `italic`,
          url: `https://fonts.gstatic.com/s/intertight/v7/NGShv5HMAFg6IuGlBNMjxLsC66ZMtb8hyW62x0ylGC5XgqoUPvi5.ttf`,
          weight: `700`,
        },
        {
          family: `Inter Tight`,
          moduleAsset: {
            localModuleIdentifier: `local-module:css/WXLgYgNfz:default`,
            url: `https://fonts.gstatic.com/s/intertight/v7/NGShv5HMAFg6IuGlBNMjxLsC66ZMtb8hyW62x0xCHy5XgqoUPvi5.ttf`,
          },
          style: `italic`,
          url: `https://fonts.gstatic.com/s/intertight/v7/NGShv5HMAFg6IuGlBNMjxLsC66ZMtb8hyW62x0xCHy5XgqoUPvi5.ttf`,
          weight: `400`,
        },
      ]),
      (fe = [
        `.framer-00CJH .framer-styles-preset-tifong:not(.rich-text-wrapper), .framer-00CJH .framer-styles-preset-tifong.rich-text-wrapper p { --framer-font-family: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-bold: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-italic: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-7556d445-f146-4c56-8498-b781258a332a, #e6fafc); --framer-text-decoration: none; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 0px) { .framer-00CJH .framer-styles-preset-tifong:not(.rich-text-wrapper), .framer-00CJH .framer-styles-preset-tifong.rich-text-wrapper p { --framer-font-family: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-bold: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-family-italic: "Inter Tight", "Inter Tight Placeholder", sans-serif; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-7556d445-f146-4c56-8498-b781258a332a, #e6fafc); --framer-text-decoration: none; --framer-text-transform: none; } }`,
      ]),
      (pe = `framer-00CJH`));
  }))();
}
function G(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var he, ge, _e, ve, ye, be, K, q, xe, Se, Ce, we, Te, Ee, De, J;
function Oe() {
  return (Oe = e(() => {
    (a(),
      S(),
      h(),
      i(),
      W(),
      ue(),
      F(),
      me(),
      (he = O(B)),
      (ge = { oXNss8DIB: { hover: !0 }, uytax5Kr_: { hover: !0 } }),
      (_e = [`oXNss8DIB`, `uytax5Kr_`]),
      (ve = `framer-HptHs`),
      (ye = { oXNss8DIB: `framer-v-1slu7z2`, uytax5Kr_: `framer-v-hfk02m` }),
      (be = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (K = (e, t) => `translate(-50%, -50%) ${t}`),
      (q = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (xe = ({ value: e, children: t }) => {
        let n = o(g),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ c(g.Provider, { value: a, children: t });
      }),
      (Se = f.create(n)),
      (Ce = { Desktop: `oXNss8DIB`, Tablet: `uytax5Kr_` }),
      (we = ({ height: e, id: t, image: n, width: r, ...i }) => ({
        ...i,
        MeZhx32Q2: n ??
          i.MeZhx32Q2 ?? {
            pixelHeight: 2625,
            pixelWidth: 2625,
            src: `../../assets/images/dRpOrWE915SxQSaLyk5DEqLR4.png`,
            srcSet: `../../assets/images/dRpOrWE915SxQSaLyk5DEqLR4.png 512w,../../assets/images/dRpOrWE915SxQSaLyk5DEqLR4-f6d389.png 1024w,../../assets/images/dRpOrWE915SxQSaLyk5DEqLR4-602367.png 2048w,../../assets/images/dRpOrWE915SxQSaLyk5DEqLR4-310a7f.png 2625w`,
          },
        variant: Ce[i.variant] ?? i.variant ?? `oXNss8DIB`,
      })),
      (Te = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ee = /*#__PURE__*/ s(function (e, t) {
        let r = d(null),
          i = t ?? r,
          a = u(),
          { activeLocale: o, setLocale: s } = C(),
          m = _(),
          { style: h, className: g, layoutId: y, variant: S, MeZhx32Q2: w, ...D } = we(e),
          {
            baseVariant: O,
            classNames: k,
            clearLoadingGesture: te,
            gestureHandlers: M,
            gestureVariant: N,
            isLoading: ne,
            setGestureState: re,
            setVariant: F,
            variants: I,
          } = E({
            cycleOrder: _e,
            defaultVariant: `oXNss8DIB`,
            enabledGestures: ge,
            ref: i,
            variant: S,
            variantClassNames: ye,
          }),
          L = Te(e, I),
          { activeVariantCallback: z, delay: V } = x(O),
          H = z(async (...e) => {
            F(`oXNss8DIB`);
          }),
          U = v(ve, pe, le, R);
        return /*#__PURE__*/ c(p, {
          id: y ?? a,
          children: /*#__PURE__*/ c(Se, {
            animate: I,
            initial: !1,
            children: /*#__PURE__*/ c(xe, {
              value: be,
              children: /*#__PURE__*/ c(A, {
                href: `mailto:untitledfolder2020@gmail.com`,
                motionChild: !0,
                nodeId: `oXNss8DIB`,
                openInNewTab: !0,
                scopeId: `AqGoFcwVG`,
                children: /*#__PURE__*/ l(f.a, {
                  ...D,
                  ...M,
                  className: `${v(U, `framer-1slu7z2`, g, k)} framer-1evce6v`,
                  "data-border": !0,
                  "data-framer-name": `Desktop`,
                  layoutDependency: L,
                  layoutId: `oXNss8DIB`,
                  ref: i,
                  style: {
                    "--border-bottom-width": `2px`,
                    "--border-color": `var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, rgb(75, 29, 72))`,
                    "--border-left-width": `2px`,
                    "--border-right-width": `2px`,
                    "--border-style": `solid`,
                    "--border-top-width": `2px`,
                    backgroundColor: `var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, rgb(244, 200, 119))`,
                    borderBottomLeftRadius: 200,
                    borderBottomRightRadius: 200,
                    borderTopLeftRadius: 200,
                    borderTopRightRadius: 200,
                    ...h,
                  },
                  ...G(
                    {
                      "oXNss8DIB-hover": { "data-framer-name": void 0 },
                      "uytax5Kr_-hover": { "data-framer-name": void 0 },
                      uytax5Kr_: { "data-framer-name": `Tablet` },
                    },
                    O,
                    N
                  ),
                  children: [
                    /*#__PURE__*/ c(ee, {
                      children: /*#__PURE__*/ c(P, {
                        className: `framer-ktjz13-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: L,
                        layoutId: `f5ZNLx0kn-container`,
                        nodeId: `f5ZNLx0kn`,
                        rendersWithMotion: !0,
                        scopeId: `AqGoFcwVG`,
                        transformTemplate: K,
                        children: /*#__PURE__*/ c(B, {
                          alignmentBaseline: `bottom`,
                          animate: !1,
                          animateDuration: 5,
                          animateEnd: 150,
                          animateStart: -50,
                          color: `var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10))`,
                          cylinderHeight: 0,
                          flip: !1,
                          font: {
                            fontFamily: `"Roboto Serif", "Roboto Serif Placeholder", serif`,
                            fontSize: `11px`,
                            fontStyle: `normal`,
                            fontWeight: 400,
                            letterSpacing: `0em`,
                            lineHeight: `1em`,
                          },
                          height: `100%`,
                          id: `f5ZNLx0kn`,
                          layoutId: `f5ZNLx0kn`,
                          rotate: !0,
                          rotateSpeed: 5,
                          slots: [],
                          startOffset: 0,
                          style: { height: `100%`, width: `100%` },
                          text: `Have some ideas? @_"`,
                          type: `circle`,
                          width: `100%`,
                          wordSpacing: 0,
                          ...G(
                            {
                              "oXNss8DIB-hover": { text: `Send me some... @_"` },
                              "uytax5Kr_-hover": { text: `Send me some...` },
                            },
                            O,
                            N
                          ),
                        }),
                      }),
                    }),
                    /*#__PURE__*/ l(f.div, {
                      className: `framer-162dybe`,
                      layoutDependency: L,
                      layoutId: `ik_EQKWOe`,
                      style: {
                        borderBottomLeftRadius: 120,
                        borderBottomRightRadius: 120,
                        borderTopLeftRadius: 120,
                        borderTopRightRadius: 120,
                      },
                      transformTemplate: K,
                      children: [
                        /*#__PURE__*/ c(T, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 6535,
                            intrinsicWidth: 4360,
                            loading: b(
                              (m?.y || 0) +
                                ((m?.height || 384) * 0.5000000000000002 - 110) +
                                220 -
                                297
                            ),
                            pixelHeight: 6535,
                            pixelWidth: 4360,
                            sizes: `423px`,
                            ...q(w),
                          },
                          className: `framer-vvrx7g`,
                          layoutDependency: L,
                          layoutId: `d6Aue9FKu`,
                          style: {
                            borderBottomLeftRadius: 120,
                            borderBottomRightRadius: 120,
                            borderTopLeftRadius: 120,
                            borderTopRightRadius: 120,
                            filter: `grayscale(0.5)`,
                            WebkitFilter: `grayscale(0.5)`,
                          },
                          ...G(
                            {
                              uytax5Kr_: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 6535,
                                  intrinsicWidth: 4360,
                                  loading: b(
                                    (m?.y || 0) +
                                      ((m?.height || 192) * 0.5000000000000002 - 60) +
                                      120 -
                                      156
                                  ),
                                  pixelHeight: 6535,
                                  pixelWidth: 4360,
                                  sizes: `205px`,
                                  ...q(w),
                                },
                              },
                            },
                            O,
                            N
                          ),
                        }),
                        /*#__PURE__*/ c(f.div, {
                          className: `framer-aaa059`,
                          "data-framer-name": `Contact`,
                          "data-highlight": !0,
                          layoutDependency: L,
                          layoutId: `MaUnd9CMO`,
                          onTap: H,
                          style: {
                            backgroundColor: `var(--token-a779c6c1-3500-42be-a361-25eb7e57427d, rgb(248, 241, 185))`,
                            opacity: 0,
                          },
                          variants: {
                            "oXNss8DIB-hover": {
                              backgroundColor: `var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, rgb(75, 29, 72))`,
                              opacity: 1,
                            },
                            "uytax5Kr_-hover": {
                              backgroundColor: `var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, rgb(75, 29, 72))`,
                              opacity: 1,
                            },
                            uytax5Kr_: {
                              backgroundColor: `var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10))`,
                            },
                          },
                          children: /*#__PURE__*/ c(j, {
                            __fromCanvasComponent: !0,
                            children: /*#__PURE__*/ c(n, {
                              children: /*#__PURE__*/ c(f.p, {
                                className: `framer-styles-preset-tifong`,
                                "data-styles-preset": `WXLgYgNfz`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a779c6c1-3500-42be-a361-25eb7e57427d, rgb(247, 235, 178)))`,
                                },
                                children: `Contact`,
                              }),
                            }),
                            className: `framer-jewl5v`,
                            fonts: [`Inter`],
                            layoutDependency: L,
                            layoutId: `fngUuvTMj`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-a779c6c1-3500-42be-a361-25eb7e57427d, rgb(247, 235, 178))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...G(
                              {
                                "oXNss8DIB-hover": {
                                  children: /*#__PURE__*/ c(n, {
                                    children: /*#__PURE__*/ c(f.p, {
                                      className: `framer-styles-preset-r8xh5o`,
                                      "data-styles-preset": `eZLPp4Ya8`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a779c6c1-3500-42be-a361-25eb7e57427d, rgb(247, 235, 178)))`,
                                      },
                                      children: `Snail Mail`,
                                    }),
                                  }),
                                },
                                "uytax5Kr_-hover": {
                                  children: /*#__PURE__*/ c(n, {
                                    children: /*#__PURE__*/ c(f.p, {
                                      className: `framer-styles-preset-17qvjw9`,
                                      "data-styles-preset": `W6ZCCcKuw`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-a779c6c1-3500-42be-a361-25eb7e57427d, rgb(247, 235, 178)))`,
                                      },
                                      children: `Snail Mail`,
                                    }),
                                  }),
                                },
                              },
                              O,
                              N
                            ),
                          }),
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
      (De = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-HptHs.framer-1evce6v, .framer-HptHs .framer-1evce6v { display: block; }`,
        `.framer-HptHs.framer-1slu7z2 { cursor: pointer; height: 384px; overflow: hidden; position: relative; text-decoration: none; width: 384px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-HptHs .framer-ktjz13-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 320px); left: 50%; position: absolute; top: 50%; width: 320px; }`,
        `.framer-HptHs .framer-162dybe { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 220px); justify-content: center; left: 50%; overflow: hidden; padding: 0px; position: absolute; top: 50%; width: 220px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-HptHs .framer-vvrx7g { aspect-ratio: 1 / 1; bottom: -126px; flex: none; height: var(--framer-aspect-ratio-supported, 423px); left: -106px; overflow: hidden; position: absolute; right: -97px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-HptHs .framer-aaa059 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 220px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 220px; z-index: 1; }`,
        `.framer-HptHs .framer-jewl5v { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-HptHs .framer-162dybe, .framer-HptHs .framer-aaa059 { gap: 0px; } .framer-HptHs .framer-162dybe > *, .framer-HptHs .framer-aaa059 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-HptHs .framer-162dybe > :first-child, .framer-HptHs .framer-aaa059 > :first-child { margin-left: 0px; } .framer-HptHs .framer-162dybe > :last-child, .framer-HptHs .framer-aaa059 > :last-child { margin-right: 0px; } }`,
        `.framer-HptHs.framer-v-hfk02m.framer-1slu7z2 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 192px); width: 192px; }`,
        `.framer-HptHs.framer-v-hfk02m .framer-ktjz13-container { height: var(--framer-aspect-ratio-supported, 164px); width: 164px; }`,
        `.framer-HptHs.framer-v-hfk02m .framer-162dybe { height: var(--framer-aspect-ratio-supported, 120px); width: 120px; }`,
        `.framer-HptHs.framer-v-hfk02m .framer-vvrx7g { bottom: -49px; height: var(--framer-aspect-ratio-supported, 205px); left: -43px; right: -42px; }`,
        `.framer-HptHs.framer-v-hfk02m .framer-aaa059 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 120px); width: 120px; }`,
        `.framer-HptHs.framer-v-1slu7z2.hover.framer-1slu7z2 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 384px); }`,
        ...fe,
        ...ce,
        ...I,
        `.framer-HptHs[data-border="true"]::after, .framer-HptHs [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
      ]),
      (J = D(Ee, De, `framer-HptHs`)),
      (J.displayName = `Contact Button`),
      (J.defaultProps = { height: 384, width: 384 }),
      N(J, {
        variant: {
          options: [`oXNss8DIB`, `uytax5Kr_`],
          optionTitles: [`Desktop`, `Tablet`],
          title: `Variant`,
          type: k.Enum,
        },
        MeZhx32Q2: {
          __defaultAssetReference: `data:framer/asset-reference,dRpOrWE915SxQSaLyk5DEqLR4.png?originalFilename=snails2-03.png&preferredSize=auto`,
          title: `Image`,
          type: k.ResponsiveImage,
        },
      }),
      w(
        J,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Roboto Serif`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/robotoserif/v15/R71RjywflP6FLr3gZx7K8UyuXDs9zVwDmXCb8lxYgmuii32UGoVldX6UgfjL4-3sMM_kB_qXSEXTJQCFLH5-_bcEliotp6J2Af5fR4k.woff2`,
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
            ],
          },
          ...he,
          ...y(de),
          ...y(se),
          ...y(L),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function ke(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ae, je, Me, Ne, Pe, Y, X, Fe, Ie, Le, Re, ze, Z;
function Be() {
  return (Be = e(() => {
    (a(),
      S(),
      h(),
      i(),
      W(),
      (Ae = O(B)),
      (je = [`bLbruZGKs`, `Baa_qDBie`]),
      (Me = `framer-rhFmN`),
      (Ne = { Baa_qDBie: `framer-v-1wvgiam`, bLbruZGKs: `framer-v-1gieg9s` }),
      (Pe = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Y = (e, t) => `translate(-50%, -50%) ${t}`),
      (X = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Fe = ({ value: e, children: t }) => {
        let n = o(g),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ c(g.Provider, { value: a, children: t });
      }),
      (Ie = f.create(n)),
      (Le = { Desktop: `bLbruZGKs`, Tablet: `Baa_qDBie` }),
      (Re = ({ content: e, height: t, id: n, image: r, width: i, ...a }) => ({
        ...a,
        HpsExVU1H: e ?? a.HpsExVU1H ?? `✦ BRAND CREATOR ✦ ILLUSTRATOR ✦ PRINT MEDIA`,
        kEViRGUuk: r ??
          a.kEViRGUuk ?? {
            src: `../../assets/images/dRpOrWE915SxQSaLyk5DEqLR4.png`,
            srcSet: `../../assets/images/dRpOrWE915SxQSaLyk5DEqLR4.png 512w,../../assets/images/dRpOrWE915SxQSaLyk5DEqLR4-f6d389.png 1024w,../../assets/images/dRpOrWE915SxQSaLyk5DEqLR4-602367.png 2048w,../../assets/images/dRpOrWE915SxQSaLyk5DEqLR4-310a7f.png 2625w`,
          },
        variant: Le[a.variant] ?? a.variant ?? `bLbruZGKs`,
      })),
      (ze = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = D(
        /* @__PURE__ */ s(function (e, t) {
          let r = d(null),
            i = t ?? r,
            a = u(),
            { activeLocale: o, setLocale: s } = C(),
            m = _(),
            {
              style: h,
              className: g,
              layoutId: y,
              variant: x,
              kEViRGUuk: S,
              HpsExVU1H: w,
              ...D
            } = Re(e),
            {
              baseVariant: O,
              classNames: k,
              clearLoadingGesture: te,
              gestureHandlers: M,
              gestureVariant: N,
              isLoading: ne,
              setGestureState: re,
              setVariant: F,
              variants: I,
            } = E({
              cycleOrder: je,
              defaultVariant: `bLbruZGKs`,
              ref: i,
              variant: x,
              variantClassNames: Ne,
            }),
            L = ze(e, I),
            R = v(Me);
          return /*#__PURE__*/ c(p, {
            id: y ?? a,
            children: /*#__PURE__*/ c(Ie, {
              animate: I,
              initial: !1,
              children: /*#__PURE__*/ c(Fe, {
                value: Pe,
                children: /*#__PURE__*/ c(A, {
                  href: { webPageId: `augiA20Il` },
                  motionChild: !0,
                  nodeId: `bLbruZGKs`,
                  scopeId: `BYNb_BvuU`,
                  children: /*#__PURE__*/ l(f.a, {
                    ...D,
                    ...M,
                    className: `${v(R, `framer-1gieg9s`, g, k)} framer-1we9rwo`,
                    "data-border": !0,
                    "data-framer-name": `Desktop`,
                    layoutDependency: L,
                    layoutId: `bLbruZGKs`,
                    ref: i,
                    style: {
                      "--border-bottom-width": `2px`,
                      "--border-color": `var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, rgb(75, 29, 72))`,
                      "--border-left-width": `2px`,
                      "--border-right-width": `2px`,
                      "--border-style": `solid`,
                      "--border-top-width": `2px`,
                      backgroundColor: `var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, rgb(244, 200, 119))`,
                      borderBottomLeftRadius: 200,
                      borderBottomRightRadius: 200,
                      borderTopLeftRadius: 200,
                      borderTopRightRadius: 200,
                      ...h,
                    },
                    ...ke({ Baa_qDBie: { "data-framer-name": `Tablet` } }, O, N),
                    children: [
                      /*#__PURE__*/ c(ee, {
                        children: /*#__PURE__*/ c(P, {
                          className: `framer-jll17m-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: L,
                          layoutId: `qE9P3TVNT-container`,
                          nodeId: `qE9P3TVNT`,
                          rendersWithMotion: !0,
                          scopeId: `BYNb_BvuU`,
                          transformTemplate: Y,
                          children: /*#__PURE__*/ c(B, {
                            alignmentBaseline: `bottom`,
                            animate: !1,
                            animateDuration: 5,
                            animateEnd: 150,
                            animateStart: -50,
                            color: `var(--token-0c0eb9bb-b09d-4dfb-b5a4-0f923b340700, rgb(49, 17, 10))`,
                            cylinderHeight: 0,
                            flip: !1,
                            font: {
                              fontFamily: `"Roboto Serif", "Roboto Serif Placeholder", serif`,
                              fontSize: `11px`,
                              fontStyle: `normal`,
                              fontWeight: 400,
                              letterSpacing: `0.02em`,
                              lineHeight: `1em`,
                            },
                            height: `100%`,
                            id: `qE9P3TVNT`,
                            layoutId: `qE9P3TVNT`,
                            rotate: !0,
                            rotateSpeed: 5,
                            slots: [],
                            startOffset: 0,
                            style: { height: `100%`, width: `100%` },
                            text: w,
                            type: `circle`,
                            width: `100%`,
                            wordSpacing: 0,
                          }),
                        }),
                      }),
                      /*#__PURE__*/ c(f.div, {
                        className: `framer-s3fh2t`,
                        layoutDependency: L,
                        layoutId: `ImhoXYHs2`,
                        style: {
                          borderBottomLeftRadius: 120,
                          borderBottomRightRadius: 120,
                          borderTopLeftRadius: 120,
                          borderTopRightRadius: 120,
                        },
                        transformTemplate: Y,
                        children: /*#__PURE__*/ c(T, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 6535,
                            intrinsicWidth: 4360,
                            loading: b(
                              (m?.y || 0) +
                                ((m?.height || 384) * 0.5000000000000002 - 110) +
                                220 -
                                316
                            ),
                            pixelHeight: 6535,
                            pixelWidth: 4360,
                            sizes: `453px`,
                            ...X(S),
                          },
                          className: `framer-h4qtjd`,
                          layoutDependency: L,
                          layoutId: `QoOKl9a76`,
                          style: {
                            borderBottomLeftRadius: 120,
                            borderBottomRightRadius: 120,
                            borderTopLeftRadius: 120,
                            borderTopRightRadius: 120,
                            filter: `grayscale(0.5)`,
                            WebkitFilter: `grayscale(0.5)`,
                          },
                          ...ke(
                            {
                              Baa_qDBie: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 6535,
                                  intrinsicWidth: 4360,
                                  loading: b(
                                    (m?.y || 0) +
                                      ((m?.height || 192) * 0.5000000000000002 - 60) +
                                      120 -
                                      168
                                  ),
                                  pixelHeight: 6535,
                                  pixelWidth: 4360,
                                  sizes: `243px`,
                                  ...X(S),
                                },
                              },
                            },
                            O,
                            N
                          ),
                        }),
                      }),
                      /*#__PURE__*/ c(j, {
                        __fromCanvasComponent: !0,
                        children: /*#__PURE__*/ c(n, {
                          children: /*#__PURE__*/ c(f.p, {
                            style: {
                              "--font-selector": `SW50ZXI=`,
                              "--framer-font-family": `"Inter", sans-serif`,
                              "--framer-font-size": `16px`,
                              "--framer-font-style": `normal`,
                              "--framer-font-weight": `400`,
                              "--framer-letter-spacing": `0em`,
                              "--framer-line-height": `1.2em`,
                              "--framer-text-alignment": `start`,
                              "--framer-text-color": `var(--extracted-r6o4lv, hsl(0, 0%, 0%))`,
                            },
                            children: /*#__PURE__*/ c(f.br, { className: `trailing-break` }),
                          }),
                        }),
                        className: `framer-1si1mk9`,
                        fonts: [`Inter`],
                        layoutDependency: L,
                        layoutId: `fCEk0XW8y`,
                        style: {
                          "--extracted-r6o4lv": `hsl(0, 0%, 0%)`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-rhFmN.framer-1we9rwo, .framer-rhFmN .framer-1we9rwo { display: block; }`,
          `.framer-rhFmN.framer-1gieg9s { height: 384px; overflow: hidden; position: relative; text-decoration: none; width: 384px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-rhFmN .framer-jll17m-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 320px); left: 50%; position: absolute; top: 50%; width: 320px; }`,
          `.framer-rhFmN .framer-s3fh2t { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 220px); justify-content: center; left: 50%; overflow: hidden; padding: 0px; position: absolute; top: 50%; width: 220px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-rhFmN .framer-h4qtjd { aspect-ratio: 1 / 1; bottom: -137px; flex: none; height: var(--framer-aspect-ratio-supported, 453px); left: -122px; overflow: visible; position: absolute; right: -111px; z-index: 1; }`,
          `.framer-rhFmN .framer-1si1mk9 { flex: none; height: auto; left: 239px; position: absolute; top: 44px; white-space: pre; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-rhFmN .framer-s3fh2t { gap: 0px; } .framer-rhFmN .framer-s3fh2t > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-rhFmN .framer-s3fh2t > :first-child { margin-left: 0px; } .framer-rhFmN .framer-s3fh2t > :last-child { margin-right: 0px; } }`,
          `.framer-rhFmN.framer-v-1wvgiam.framer-1gieg9s { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 192px); width: 192px; }`,
          `.framer-rhFmN.framer-v-1wvgiam .framer-jll17m-container { height: var(--framer-aspect-ratio-supported, 164px); width: 164px; }`,
          `.framer-rhFmN.framer-v-1wvgiam .framer-s3fh2t { height: var(--framer-aspect-ratio-supported, 120px); width: 120px; }`,
          `.framer-rhFmN.framer-v-1wvgiam .framer-h4qtjd { bottom: -75px; height: var(--framer-aspect-ratio-supported, 243px); left: -62px; right: -61px; }`,
          `.framer-rhFmN[data-border="true"]::after, .framer-rhFmN [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-rhFmN`
      )),
      (Z.displayName = `Logo-Profile`),
      (Z.defaultProps = { height: 384, width: 384 }),
      N(Z, {
        variant: {
          options: [`bLbruZGKs`, `Baa_qDBie`],
          optionTitles: [`Desktop`, `Tablet`],
          title: `Variant`,
          type: k.Enum,
        },
        kEViRGUuk: {
          __defaultAssetReference: `data:framer/asset-reference,dRpOrWE915SxQSaLyk5DEqLR4.png?originalFilename=snails2-03.png&preferredSize=auto`,
          title: `Image`,
          type: k.ResponsiveImage,
        },
        HpsExVU1H: {
          defaultValue: `✦ BRAND CREATOR ✦ ILLUSTRATOR ✦ PRINT MEDIA`,
          displayTextArea: !0,
          title: `Content`,
          type: k.String,
        },
      }),
      w(
        Z,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Roboto Serif`,
                source: `google`,
                style: `normal`,
                url: `https://fonts.gstatic.com/s/robotoserif/v15/R71RjywflP6FLr3gZx7K8UyuXDs9zVwDmXCb8lxYgmuii32UGoVldX6UgfjL4-3sMM_kB_qXSEXTJQCFLH5-_bcEliotp6J2Af5fR4k.woff2`,
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
            ],
          },
          ...Ae,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
function Q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe, Ze, Qe, $;
function $e() {
  return ($e = e(() => {
    (a(),
      S(),
      h(),
      i(),
      F(),
      (Ve = { gg7eTiMWX: { hover: !0 }, gjuBRTGMF: { hover: !0 }, JIOR1dDzo: { hover: !0 } }),
      (He = [`JIOR1dDzo`, `gjuBRTGMF`, `gg7eTiMWX`]),
      (Ue = `framer-1duQW`),
      (We = {
        gg7eTiMWX: `framer-v-1ebnfl0`,
        gjuBRTGMF: `framer-v-120j4dd`,
        JIOR1dDzo: `framer-v-u3ouxd`,
      }),
      (Ge = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Ke = ({ value: e, children: t }) => {
        let n = o(g),
          i = e ?? n.transition,
          a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
        return /*#__PURE__*/ c(g.Provider, { value: a, children: t });
      }),
      (qe = f.create(n)),
      (Je = { "New Tab Light": `gg7eTiMWX`, "New Tab": `gjuBRTGMF`, Default: `JIOR1dDzo` }),
      (Ye = ({ height: e, id: t, link2: n, title: r, width: i, ...a }) => ({
        ...a,
        FH9GqwMqG: r ?? a.FH9GqwMqG ?? `Menu Link`,
        hM93PXv53: n ?? a.hM93PXv53,
        variant: Je[a.variant] ?? a.variant ?? `JIOR1dDzo`,
      })),
      (Xe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ze = /*#__PURE__*/ s(function (e, t) {
        let r = d(null),
          i = t ?? r,
          a = u(),
          { activeLocale: o, setLocale: s } = C();
        _();
        let {
            style: m,
            className: h,
            layoutId: g,
            variant: y,
            FH9GqwMqG: b,
            hM93PXv53: x,
            ...S
          } = Ye(e),
          {
            baseVariant: w,
            classNames: T,
            clearLoadingGesture: D,
            gestureHandlers: O,
            gestureVariant: k,
            isLoading: ee,
            setGestureState: te,
            setVariant: M,
            variants: N,
          } = E({
            cycleOrder: He,
            defaultVariant: `JIOR1dDzo`,
            enabledGestures: Ve,
            ref: i,
            variant: y,
            variantClassNames: We,
          }),
          P = Xe(e, N),
          ne = v(Ue, R);
        return /*#__PURE__*/ c(p, {
          id: g ?? a,
          children: /*#__PURE__*/ c(qe, {
            animate: N,
            initial: !1,
            children: /*#__PURE__*/ c(Ke, {
              value: Ge,
              children: /*#__PURE__*/ c(A, {
                href: x,
                motionChild: !0,
                nodeId: `JIOR1dDzo`,
                scopeId: `htvPULmZG`,
                smoothScroll: !0,
                ...Q({ gg7eTiMWX: { openInNewTab: !0 }, gjuBRTGMF: { openInNewTab: !0 } }, w, k),
                children: /*#__PURE__*/ l(f.a, {
                  ...S,
                  ...O,
                  className: `${v(ne, `framer-u3ouxd`, h, T)} framer-1s3m1d2`,
                  "data-framer-name": `Default`,
                  layoutDependency: P,
                  layoutId: `JIOR1dDzo`,
                  ref: i,
                  style: { ...m },
                  ...Q(
                    {
                      "gg7eTiMWX-hover": { "data-framer-name": void 0 },
                      "gjuBRTGMF-hover": { "data-framer-name": void 0 },
                      "JIOR1dDzo-hover": { "data-framer-name": void 0 },
                      gg7eTiMWX: { "data-framer-name": `New Tab Light` },
                      gjuBRTGMF: { "data-framer-name": `New Tab` },
                    },
                    w,
                    k
                  ),
                  children: [
                    /*#__PURE__*/ c(f.div, {
                      className: `framer-gg1g22`,
                      layoutDependency: P,
                      layoutId: `c0phUx8c1`,
                      style: {
                        backgroundColor: `var(--token-e963b8ae-02ac-4e93-b75a-f86ceff4c8c2, rgb(25, 29, 22))`,
                      },
                      variants: {
                        gg7eTiMWX: {
                          backgroundColor: `var(--token-7556d445-f146-4c56-8498-b781258a332a, rgb(232, 251, 252))`,
                        },
                      },
                    }),
                    /*#__PURE__*/ c(j, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ c(n, {
                        children: /*#__PURE__*/ c(f.p, {
                          className: `framer-styles-preset-17qvjw9`,
                          "data-styles-preset": `W6ZCCcKuw`,
                          children: `Menu Link`,
                        }),
                      }),
                      className: `framer-1kommnn`,
                      fonts: [`Inter`],
                      layoutDependency: P,
                      layoutId: `M5zP0zkdr`,
                      style: {
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: b,
                      variants: {
                        "gjuBRTGMF-hover": {
                          "--extracted-r6o4lv": `var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, rgb(75, 29, 72))`,
                        },
                        "JIOR1dDzo-hover": {
                          "--extracted-r6o4lv": `var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, rgb(75, 29, 72))`,
                        },
                        gg7eTiMWX: {
                          "--extracted-r6o4lv": `var(--token-7556d445-f146-4c56-8498-b781258a332a, rgb(232, 251, 252))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Q(
                        {
                          "gjuBRTGMF-hover": {
                            children: /*#__PURE__*/ c(n, {
                              children: /*#__PURE__*/ c(f.p, {
                                className: `framer-styles-preset-17qvjw9`,
                                "data-styles-preset": `W6ZCCcKuw`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, rgb(75, 29, 72)))`,
                                },
                                children: `Menu Link`,
                              }),
                            }),
                          },
                          "JIOR1dDzo-hover": {
                            children: /*#__PURE__*/ c(n, {
                              children: /*#__PURE__*/ c(f.p, {
                                className: `framer-styles-preset-17qvjw9`,
                                "data-styles-preset": `W6ZCCcKuw`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, rgb(75, 29, 72)))`,
                                },
                                children: `Menu Link`,
                              }),
                            }),
                          },
                          gg7eTiMWX: {
                            children: /*#__PURE__*/ c(n, {
                              children: /*#__PURE__*/ c(f.p, {
                                className: `framer-styles-preset-17qvjw9`,
                                "data-styles-preset": `W6ZCCcKuw`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7556d445-f146-4c56-8498-b781258a332a, rgb(232, 251, 252)))`,
                                },
                                children: `Menu Link`,
                              }),
                            }),
                          },
                        },
                        w,
                        k
                      ),
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      })),
      (Qe = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-1duQW.framer-1s3m1d2, .framer-1duQW .framer-1s3m1d2 { display: block; }`,
        `.framer-1duQW.framer-u3ouxd { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 8px 0px; position: relative; text-decoration: none; width: min-content; }`,
        `.framer-1duQW .framer-gg1g22 { bottom: -1px; flex: none; height: 1px; left: calc(50.00000000000002% - 1px / 2); overflow: hidden; position: absolute; width: 1px; z-index: 1; }`,
        `.framer-1duQW .framer-1kommnn { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-1duQW.framer-u3ouxd { gap: 0px; } .framer-1duQW.framer-u3ouxd > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-1duQW.framer-u3ouxd > :first-child { margin-left: 0px; } .framer-1duQW.framer-u3ouxd > :last-child { margin-right: 0px; } }`,
        `.framer-1duQW.framer-v-u3ouxd.hover .framer-gg1g22, .framer-1duQW.framer-v-120j4dd.hover .framer-gg1g22, .framer-1duQW.framer-v-1ebnfl0.hover .framer-gg1g22 { bottom: 0px; height: 2px; left: 0px; right: 0px; width: unset; }`,
        ...I,
      ]),
      ($ = D(Ze, Qe, `framer-1duQW`)),
      ($.displayName = `Menu Link`),
      ($.defaultProps = { height: 33, width: 98 }),
      N($, {
        variant: {
          options: [`JIOR1dDzo`, `gjuBRTGMF`, `gg7eTiMWX`],
          optionTitles: [`Default`, `New Tab`, `New Tab Light`],
          title: `Variant`,
          type: k.Enum,
        },
        FH9GqwMqG: {
          defaultValue: `Menu Link`,
          displayTextArea: !1,
          title: `Title`,
          type: k.String,
        },
        hM93PXv53: { title: `Link 2`, type: k.Link },
      }),
      w(
        $,
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
          ...y(L),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }))();
}
export { J as a, Be as i, $e as n, Oe as o, Z as r, $ as t };
//# sourceMappingURL=htvPULmZG.jZNuvSja.mjs.map
