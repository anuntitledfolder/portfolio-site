import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  C as t,
  D as n,
  E as r,
  F as i,
  I as a,
  L as o,
  M as s,
  N as c,
  O as l,
  P as u,
  R as d,
  S as f,
  T as p,
  a as m,
  b as h,
  c as g,
  d as _,
  f as v,
  g as y,
  h as b,
  i as x,
  j as S,
  k as C,
  l as w,
  m as T,
  o as E,
  p as D,
  s as O,
  u as ee,
  v as k,
  w as te,
  x as A,
  y as ne,
  z as j,
} from "./react.Dq5lJgOf.mjs";
import {
  A as re,
  B as ie,
  C as ae,
  D as oe,
  E as M,
  F as se,
  G as ce,
  H as le,
  K as ue,
  L as de,
  M as fe,
  N as pe,
  O as N,
  P as me,
  R as he,
  S as ge,
  T as _e,
  U as P,
  W as ve,
  _ as ye,
  a as be,
  b as xe,
  c as Se,
  d as F,
  f as Ce,
  g as we,
  h as Te,
  i as Ee,
  j as De,
  k as Oe,
  l as ke,
  m as Ae,
  o as je,
  p as Me,
  q as Ne,
  s as Pe,
  u as Fe,
  v as I,
  x as Ie,
  y as Le,
  z as Re,
} from "./motion.D3Y82hha.mjs";
function ze(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function Be(e) {
  return typeof e == `function`;
}
function Ve(e) {
  return typeof e == `boolean`;
}
function L(e) {
  return typeof e == `string`;
}
function R(e) {
  return Number.isFinite(e);
}
function He(e) {
  return Array.isArray(e);
}
function z(e) {
  return typeof e == `object` && !!e && !He(e);
}
function Ue(e) {
  for (let t in e) return !1;
  return !0;
}
function B(e) {
  return e === void 0;
}
function We(e) {
  return e === null;
}
function Ge(e) {
  return e == null;
}
function Ke(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function qe(e) {
  return z(e) && Be(e.return);
}
function Je(e) {
  return z(e) && Be(e.then);
}
function Ye(e) {
  return e instanceof Promise;
}
function Xe(e) {
  return `url('${ze(e)}')`;
}
function Ze(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${e ? `${e}\n` : ``}In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${n ? `:\n${n}` : `.`}`;
}
function V(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = Error(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function H(e, t) {
  throw t instanceof Error
    ? t
    : Error(
        t === void 0
          ? e
            ? `Unexpected value: ${e}`
            : `Application entered invalid state`
          : String(t)
      );
}
function Qe() {
  return U.location.origin === `https://screenshot.framer.invalid`;
}
function $e(e, t, n = _t) {
  if (e && !n.has(e) && typeof document < `u`) {
    if ((n.add(e), !t)) {
      if (!vt) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) vt = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = vt;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function et(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? yt.variable(e) : e === `` ? `""` : e;
}
function tt(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return nt(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return rt(r);
    case `lower-roman`:
    case `upper-roman`:
      return at(r);
    default:
      return nt(r);
  }
}
function nt(e) {
  return String(e).length;
}
function rt(e) {
  let t = 1;
  for (; it(t) < e; ) t++;
  return t;
}
function it(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function at(e) {
  let t = 0;
  for (let n of xt) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function ot(e, t) {
  return yt.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function st(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
var ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  U,
  gt,
  W,
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
  kt,
  At,
  jt,
  Mt;
function Nt() {
  return (Nt = e(() => {
    (o(),
      p(),
      (ct = () => {}),
      (lt = j !== void 0),
      (ut =
        lt &&
        (d.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(d.userAgent))),
      (dt = lt && typeof j.requestIdleCallback == `function`),
      (ft = dt ? j.requestIdleCallback : setTimeout),
      (pt = () => ct),
      (mt = () => !0),
      (ht = () => !1),
      (U = lt
        ? j
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (gt = { target: Qe() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (W = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => gt.target,
        hasRestrictions: () => {
          let e = gt.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (_t = /* @__PURE__ */ new Set()),
      (yt = /* @__PURE__ */ (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (V(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${et(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            V(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      (bt = `--max-list-digits`),
      (xt = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (St = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (Ct = { display: `inline-block` }),
      (wt = { display: `block` }),
      (Tt = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${St.display};
            flex-direction: ${St.flexDirection};
            justify-content: ${St.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${ot([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${ot([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${ot([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${Ct.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${ot([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${ot([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ot([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${ot([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${ot([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        /* Linked images keep the radius and padding of their image style. */
        a.framer-text:where(:not(.framer-image)):hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${ot([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${ot([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${ot([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${ot([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text:where(:not(.framer-image))[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${ot([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ot([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${ot([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${ot([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ot([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text:where(:not(.framer-image))[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${ot([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ot([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${ot([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${ot([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${ot([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${wt.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        /* A linked image gets its image style on both the link and the image; only the image draws the border and shadow. */
        a.framer-image.framer-text {
            border: none;
            box-shadow: none;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: "";
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${bt}, 1) + 1) * 1ch);
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
        `
        ${st(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (Et = `--text-truncation-display-inline-for-safari-16`),
      (Dt = `--text-truncation-display-none-for-safari-16`),
      (Ot = `--text-truncation-line-break-for-safari-16`),
      (kt = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (At = `(background: -webkit-named-image(i))`),
      (jt = `(contain-intrinsic-size: inherit)`),
      (Mt = [
        `@supports ${At} and (not ${jt}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${kt.join(`, `)} { display: var(${Et}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${kt.map((e) => `${e}::after`).join(`, `)} { content: var(${Ot}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${Dt}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${Et}, ${Ct.display}) }
    }`,
      ]));
  }))();
}
function Pt(e, t, n) {
  if (Lg.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (Lg.set(e, t), t))
    .catch((t) => {
      throw (Lg.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(ct), Lg.set(e, r));
}
function Ft(e, t) {
  lt && (Rg.set(e, t), zg.has(e) && Pt(e, t, `registered loader ${e}`));
}
function It() {
  if (!lt) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(Bg),
      i = r ? e.slice(1) : e;
    if (!i) continue;
    zg.add(i);
    let a = Rg.get(i);
    a
      ? Pt(i, a, `registered loader ${i}`)
      : r &&
        Pt(
          i,
          () =>
            import(
              /* @vite-ignore */
              n
            ),
          n
        );
  }
}
function Lt(e) {
  return typeof e == `object` && !!e && !b(e) && Hg in e;
}
function Rt(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function zt(e, t = `default`, n) {
  n && Ft(n, e);
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !Lg.has(n)) return;
      let e = Lg.get(n);
      Ye(e) ? s(() => e) : (i = Rt(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = Rt(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    c = !1,
    l = T(function (t, r) {
      if (
        (h(() => {
          c = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && Vg !== void 0 && Vg.add(n), !i)) throw s(e);
      return /* @__PURE__ */ O(i, { ref: r, ...t });
    });
  return (
    (l.preload = () => (o(), s(e))),
    (l.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: c })),
    l
  );
}
function Bt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Vt(e) {
  return e === null || !(Wg in e) ? !1 : typeof e.equals == `function`;
}
function Ht(e, t) {
  return e === t || (e !== e && t !== t);
}
function Ut(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!Ht(e[r], t[r])) return !1;
  return !0;
}
function Wt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!Xt(e[r], t[r], !0)) return !1;
  return !0;
}
function Gt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Ht(r, t.get(n))) return !1;
  return !0;
}
function Kt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Xt(r, t.get(n), !0)) return !1;
  return !0;
}
function qt(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function Jt(e, t) {
  let n = Ug(e);
  if (n.length !== Ug(t).length) return !1;
  for (let r of n)
    if (!Bt(t, r) || (!(r === `_owner` && Bt(e, `$$typeof`) && e.$$typeof) && !Ht(e[r], t[r])))
      return !1;
  return !0;
}
function Yt(e, t) {
  let n = Ug(e);
  if (n.length !== Ug(t).length) return !1;
  for (let r of n)
    if (!Bt(t, r) || (!(r === `_owner` && Bt(e, `$$typeof`) && e.$$typeof) && !Xt(e[r], t[r], !0)))
      return !1;
  return !0;
}
function Xt(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? Wt(e, t) : Ut(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? Kt(e, t) : Gt(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return qt(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? Vt(e) && Vt(t)
        ? e.equals(t)
        : n
          ? Yt(e, t)
          : Jt(e, t)
      : !1;
}
function Zt(e, t, n = !0) {
  try {
    return Xt(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function Qt(e) {
  return f.useCallback((t) => e[t], [e]);
}
function $t({ api: e, children: t }) {
  return /* @__PURE__ */ O(Gg.Provider, { value: e, children: t });
}
function en() {
  return f.useContext(Gg);
}
function tn({ routes: e, children: t }) {
  let n = Qt(e),
    r = s(() => ({ getRoute: n }), [n]);
  return /* @__PURE__ */ O(Gg.Provider, { value: r, children: t });
}
function nn() {
  let e = en(),
    t = S(Kg),
    n = t?.routeId ?? e.currentRouteId,
    r = t?.routeId ? t.pathVariables : e.currentPathVariables,
    i = t?.routeId ? void 0 : e.currentCanonicalPathVariables,
    a = n ? e.getRoute?.(n) : void 0;
  return s(() => {
    if (n && a) return { ...a, id: n, pathVariables: r, canonicalPathVariables: i };
  }, [i, n, r, a]);
}
function rn() {
  let e = nn();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function an(e) {
  let t = nn(),
    n = f.useRef(t);
  !Zt(n.current, t) && t && ((n.current = t), e(t));
}
function on(e) {
  let t = en();
  if (e) return t.getRoute?.(e);
}
function sn(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function cn(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) && performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++) document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function ln(e, t) {
  let n = nn(),
    r = on(t) ?? n;
  return f.useMemo(() => (r ? sn(r, e) : e), [e, r]);
}
function un() {
  return nn()?.pathVariables;
}
function dn(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === e_
  );
}
function fn(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function pn(e) {
  return typeof Buffer < `u` && Buffer.isBuffer(e);
}
function mn(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `<`:
      return `\\u003C`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `	`:
      return `\\t`;
    case `\b`:
      return `\\b`;
    case `\f`:
      return `\\f`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return e < ` ` ? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}` : ``;
  }
}
function hn(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = mn(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function gn(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function _n(e) {
  return t_.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function vn(e) {
  return !(!Number.isInteger(e) || e < 0 || e > Qg);
}
function yn(e) {
  return !(!Number.isInteger(e) || e < 0 || e > Zg);
}
function bn(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return vn(+e);
}
function xn(e) {
  for (var t = e.length - 1; t >= 0 && !bn(e[t]); t--);
  return t + 1;
}
function Sn(e) {
  let t = Object.keys(e);
  return ((t.length = xn(t)), t);
}
function Cn(e) {
  return new Uint8Array(e).toBase64();
}
function wn(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function Tn(e) {
  return Buffer.from(e).toString(`base64`);
}
function En(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function Dn(e) {
  let t = new Uint8Array(e),
    n = ``,
    r = 32768;
  for (let e = 0; e < t.length; e += r) {
    let i = t.subarray(e, e + r);
    n += String.fromCharCode.apply(null, i);
  }
  return btoa(n);
}
function On(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function kn(e, t) {
  if (!t) return e;
  let n = {};
  for (let r of Object.keys(e)) n[r] = t[r] ?? e[r];
  return n;
}
function An(e, t, n) {
  return jn(JSON.parse(e), t, n);
}
function jn(e, t, n) {
  let r = kn(d_, n?.operations);
  if (typeof e == `number`) return s(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let i = e,
    a = Array(i.length),
    o = null;
  function s(e, n = !1) {
    if (e === -1) return r.fromPrimitive(void 0);
    if (e === -3) return r.fromPrimitive(NaN);
    if (e === -4) return r.fromPrimitive(1 / 0);
    if (e === -5) return r.fromPrimitive(-1 / 0);
    if (e === -6) return r.fromPrimitive(-0);
    if (n || typeof e != `number`) throw Error(`Invalid input`);
    if (e in a) return a[e];
    if (e >= i.length) throw Error(`Invalid input`);
    let c = i[e];
    if (!c || typeof c != `object`) a[e] = r.fromPrimitive(c);
    else if (Array.isArray(c)) {
      if (typeof c[0] == `string`) {
        let n = c[0],
          l = t && Object.hasOwn(t, n) ? t[n] : void 0;
        if (l) {
          let t = c[1];
          if ((typeof t != `number` && (t = i.push(c[1]) - 1), Object.hasOwn(a, t)))
            return (a[e] = l(a[t]));
          if (((o ??= /* @__PURE__ */ new Set()), o.has(t)))
            throw Error(`Invalid circular reference`);
          return (o.add(t), (a[e] = l(s(t))), o.delete(t), a[e]);
        }
        switch (n) {
          case `Date`:
            a[e] = r.fromISOString(c[1]);
            break;
          case `Set`:
            let t = r.createSet();
            a[e] = t;
            for (let e = 1; e < c.length; e += 1) r.addValue(t, s(c[e]));
            break;
          case `Map`:
            let o = r.createMap();
            a[e] = o;
            for (let e = 1; e < c.length; e += 2) r.addEntry(o, s(c[e]), s(c[e + 1]));
            break;
          case `RegExp`:
            a[e] = r.fromRegExpInfo(c[1], c[2]);
            break;
          case `Object`: {
            let t = c[1];
            if (typeof i[t] == `object` && i[t][0] !== `BigInt`) throw Error(`Invalid input`);
            a[e] = r.box(s(t));
            break;
          }
          case `BigInt`:
            a[e] = r.fromPrimitive(BigInt(c[1]));
            break;
          case `null`:
            let l = r.createNullPrototypeObject();
            a[e] = l;
            for (let e = 1; e < c.length; e += 2) {
              let t = c[e];
              if (typeof t != `string`) throw Error(`Cannot parse an object with a non-string key`);
              if (t === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              r.set(l, t, s(c[e + 1]));
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Float16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`:
          case `DataView`: {
            if (i[c[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = s(c[1]);
            a[e] = r.fromViewInfo(n, t, c[2], c[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = c[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            a[e] = r.fromArrayBuffer(a_(t));
            break;
          }
          case `URL`:
          case `URLSearchParams`:
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`:
            a[e] = r.fromStringValue(n, c[1]);
            break;
          default:
            throw Error(`Unknown type ${n}`);
        }
      } else if (c[0] === -7) {
        let t = c[1];
        if (!yn(t)) throw Error(`Invalid input`);
        let n = r.createSparseArray(t);
        a[e] = n;
        for (let e = 2; e < c.length; e += 2) {
          let i = c[e];
          if (!vn(i) || i >= t) throw Error(`Invalid input`);
          r.set(n, i, s(c[e + 1]));
        }
      } else {
        let t = r.createArray(c.length);
        a[e] = t;
        for (let e = 0; e < c.length; e += 1) {
          let n = c[e];
          n !== -2 && r.set(t, e, s(n));
        }
      }
    } else {
      let t = r.createObject();
      a[e] = t;
      for (let e of Object.keys(c)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        r.set(t, e, s(c[e]));
      }
    }
    return a[e];
  }
  return s(0);
}
function Mn(e, t, n) {
  let r = Nn(!1, e, t, n);
  return typeof r == `string` ? r : `[${r.join(`,`)}]`;
}
function Nn(e, t, n, r) {
  let i = kn(c_, r?.operations),
    a = [],
    o = /* @__PURE__ */ new Map(),
    s = [];
  if (n) for (let e of Object.getOwnPropertyNames(n)) s.push({ key: e, fn: n[e] });
  let c = [],
    l = 0;
  function u(n, r) {
    let d = i.typeOf(n);
    if (d === `undefined`) return -1;
    let f;
    if (d === `number`) {
      if (((f = i.toPrimitive(n)), Number.isNaN(f))) return -3;
      if (f === 1 / 0) return -4;
      if (f === -1 / 0) return -5;
      if (f === 0 && 1 / f < 0) return -6;
    }
    let p = i.identify(n);
    if (o.has(p)) return o.get(p);
    ((r ??= l++), o.set(p, r));
    for (let { key: e, fn: t } of s) {
      let i = t(n);
      if (i) return ((a[r] = `["${e}",${u(i)}]`), r);
    }
    if (d === `function`) throw new $g(`Cannot stringify a function`, c, n, t);
    if (d === `symbol`) throw new $g(`Cannot stringify a Symbol primitive`, c, n, t);
    let m = ``;
    if (d !== `object`) m = Pn(d === `number` ? f : i.toPrimitive(n));
    else if (i.isThenable(n)) {
      if (!e)
        throw new $g(
          `Cannot stringify a Promise or thenable — use stringifyAsync instead`,
          c,
          n,
          t
        );
      ((m = i.toPromise(n).then((e) => {
        let t = u(e, r);
        t < 0 && (a[r] = t);
      })),
        m.catch(() => {}));
    } else {
      let e = i.tagOf(n);
      switch (e) {
        case `Number`:
        case `String`:
        case `Boolean`:
        case `BigInt`:
          m = `["Object",${u(i.unbox(n))}]`;
          break;
        case `Date`:
          m = `["Date","${i.toISOString(n)}"]`;
          break;
        case `URL`:
          m = `["URL",${hn(i.toStringValue(n))}]`;
          break;
        case `URLSearchParams`:
          m = `["URLSearchParams",${hn(i.toStringValue(n))}]`;
          break;
        case `RegExp`:
          let { source: r, flags: a } = i.regExpInfo(n);
          m = a ? `["RegExp",${hn(r)},"${a}"]` : `["RegExp",${hn(r)}]`;
          break;
        case `Array`: {
          let e = !1,
            t = i.lengthOf(n);
          m = `[`;
          for (let r = 0; r < t; r += 1)
            if ((r > 0 && (m += `,`), i.hasOwn(n, r)))
              (c.push(`[${r}]`), (m += u(i.get(n, r))), c.pop());
            else if (e) m += -2;
            else {
              let r = i.indicesOf(n),
                a = r.length,
                o = String(t).length;
              if ((t - a) * 3 > 4 + o + a * (o + 1)) {
                m = `[-7,` + t;
                for (let e = 0; e < r.length; e++) {
                  let t = r[e];
                  (c.push(`[${t}]`), (m += `,` + t + `,` + u(i.get(n, t))), c.pop());
                }
                break;
              }
              ((e = !0), (m += -2));
            }
          m += `]`;
          break;
        }
        case `Set`:
          m = `["Set"`;
          for (let e of i.valuesOf(n)) m += `,${u(e)}`;
          m += `]`;
          break;
        case `Map`:
          m = `["Map"`;
          for (let [e, t] of i.entriesOf(n)) {
            let n = i.typeOf(e),
              r = n !== `object` && n !== `function` && n !== `symbol`;
            (c.push(`.get(${r ? Pn(i.toPrimitive(e)) : `...`})`),
              (m += `,${u(e)},${u(t)}`),
              c.pop());
          }
          m += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Float16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`: {
          let t = i.viewInfo(n);
          ((m = `["` + e + `",` + u(t.buffer)),
            t.byteLength !== t.bufferByteLength && (m += `,${t.byteOffset},${t.length}`),
            (m += `]`));
          break;
        }
        case `DataView`: {
          let t = i.viewInfo(n);
          ((m = `["` + e + `",` + u(t.buffer)),
            t.byteLength !== t.bufferByteLength && (m += `,${t.byteOffset},${t.byteLength}`),
            (m += `]`));
          break;
        }
        case `ArrayBuffer`:
          m = `["ArrayBuffer","${i_(i.toArrayBuffer(n))}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          m = `["${e}",${hn(i.toStringValue(n))}]`;
          break;
        default: {
          let e = i.shapeOf(n);
          if (e.kind === `not-plain`) throw new $g(`Cannot stringify arbitrary non-POJOs`, c, n, t);
          if (e.kind === `symbol-keys`)
            throw new $g(`Cannot stringify POJOs with symbolic keys`, c, n, t);
          if (e.kind === `null-proto`) {
            m = `["null"`;
            for (let r of e.keys) {
              if (r === `__proto__`)
                throw new $g(`Cannot stringify objects with __proto__ keys`, c, n, t);
              (c.push(_n(r)), (m += `,${hn(r)},${u(i.get(n, r))}`), c.pop());
            }
            m += `]`;
          } else {
            m = `{`;
            let r = !1;
            for (let a of e.keys) {
              if (a === `__proto__`)
                throw new $g(`Cannot stringify objects with __proto__ keys`, c, n, t);
              (r && (m += `,`),
                (r = !0),
                c.push(_n(a)),
                (m += `${hn(a)}:${u(i.get(n, a))}`),
                c.pop());
            }
            m += `}`;
          }
        }
      }
    }
    return ((a[r] = m), r);
  }
  let d = u(t);
  return d < 0 ? `${d}` : a;
}
function Pn(e) {
  let t = typeof e;
  return t === `string`
    ? hn(e)
    : e === void 0
      ? `-1`
      : e === 0 && 1 / e < 0
        ? `-6`
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function Fn(e, t, n = `lazy`) {
  switch ((U.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, { detail: { trackingId: e, href: n } })
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }));
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, { detail: { trackingId: e } })
        );
      break;
    }
  }
}
function In(e) {
  return L(e) && (e === `` || f_.test(e));
}
function Ln() {
  return {
    [p_.QueryCache]: /* @__PURE__ */ new Map(),
    [p_.CollectionUtilsCache]: /* @__PURE__ */ new Map(),
  };
}
function Rn() {
  if (!lt) return;
  if (m_ !== void 0) return m_;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      m_ = An(e.text) ?? Ln();
    } catch (e) {
      ((m_ = Ln()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      ft(() => {
        (e?.remove(), (e = null));
      }),
      m_
    );
  }
}
function zn(e, t) {
  if (
    (console.warn(
      Ze(
        `Failed to resolve raw query result from DOM during hydration for: ${t}. This might make the page load slightly slower.`
      )
    ),
    Math.random() < 0.01)
  ) {
    let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
    Fn(`published_site_load_error`, { message: String(e), stack: t });
  }
}
function Bn(e, t) {
  let n = Rn();
  return n ? n[e].has(t) : !1;
}
function Vn(e, t) {
  let n = Rn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function Hn(e) {
  return e?.id ?? `default`;
}
function Un(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function Wn(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (v_.has(n)) return v_.get(n);
    let r = new b_(n, t);
    return (v_.set(n, r), r);
  };
}
function Gn({ children: e, collectionUtils: t }) {
  let n = s(() => ({ get: Wn(t) }), [t]);
  return /* @__PURE__ */ O(y_.Provider, { value: n, children: e });
}
function Kn() {
  return S(y_);
}
function qn(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Jn() {
  return d === void 0 ? void 0 : d;
}
function Yn() {
  let e = Jn();
  return e ? x_.test(e.platform) : !1;
}
function Xn() {
  let e = Jn();
  return e
    ? S_.test(e.platform)
      ? !0
      : C_.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function Zn() {
  return Yn() || Xn();
}
function Qn() {
  let e = Jn();
  return e ? w_.test(e.userAgent) : !1;
}
function $n() {
  let e = Jn();
  return e ? T_.test(e.userAgent) && E_.test(e.vendor) && !Qn() : !1;
}
function er() {
  let e = Jn();
  return e ? D_.test(e.userAgent) && O_.test(e.vendor) : !1;
}
function tr() {
  let e = Jn();
  return e ? k_.test(e.userAgent) : !1;
}
function nr() {
  return typeof document == `object`;
}
function rr() {
  let e = Jn();
  if (!e) return -1;
  let t = A_.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function ir() {
  let e = Jn();
  return e ? j_.test(e.userAgent) : !1;
}
function ar() {
  return !1;
}
function or() {
  let e = Jn();
  return e && M_.test(e.userAgent) ? `tablet` : e && N_.test(e.userAgent) ? `phone` : `desktop`;
}
function sr() {
  return or() === `desktop`;
}
function cr(e) {
  return Zn() ? e.metaKey : e.ctrlKey;
}
function lr() {}
async function ur() {}
function dr(e) {
  return typeof e == `function` ? e() : e;
}
function fr(e, t) {
  return L_[e] > L_[t];
}
function pr() {
  if (typeof scheduler < `u`) return scheduler;
}
function mr(e, t) {
  let n = e?.priority,
    r = pr();
  return n === `background`
    ? (t?.() ?? qn(1))
    : r?.yield
      ? r.yield(e).catch(lr)
      : r?.postTask
        ? r.postTask(lr, e).catch(lr)
        : t
          ? t()
          : n === `user-blocking`
            ? R_
            : qn(0);
}
function hr(e, t, n) {
  let r = -1 / 0,
    i,
    a = /* @__PURE__ */ new Set();
  function o() {
    for (let e of a) e();
    a.clear();
  }
  function s() {
    return document.hidden ? (o(), !0) : !1;
  }
  function c() {
    nr() && (document.addEventListener(`visibilitychange`, s), j.addEventListener(`pagehide`, o));
  }
  function l(n) {
    return new Promise((r) => {
      (setTimeout(r, z_),
        e(() => {
          mr(n, t).then(r);
        }));
    });
  }
  function u(e) {
    return nr()
      ? new Promise((t) => {
          let n = !0,
            r = () => {
              n && ((n = !1), a.delete(r), t());
            };
          (a.add(r), s() || c(), e.then(r, r));
        })
      : e;
  }
  function d(e, n) {
    let { continueAfter: r, ensureContinueBeforeUnload: i, ...a } = e,
      o = (n ?? r === `paint`) ? l(a) : mr(a, t);
    return i ? u(o) : o;
  }
  function f(e, t, n) {
    n && e.pendingPaintYieldCount++;
    let a = d(t, n),
      o = t.signal,
      s = !0,
      c = (t) => {
        s &&
          ((s = !1),
          o?.removeEventListener(`abort`, l),
          t && (r = performance.now()),
          n && e.pendingPaintYieldCount--,
          i === e && e.pendingPaintYieldCount === 0 && (i = void 0));
      },
      l = () => c(!1);
    return (
      o?.aborted ? l() : o?.addEventListener(`abort`, l, { once: !0 }),
      a.then(
        () => c(!0),
        () => c(!0)
      ),
      a
    );
  }
  function p(e, t) {
    let a = i;
    if (!a) {
      let n = performance.now(),
        o = t ?? (e.priority === `user-blocking` ? P_ : F_),
        s = nr() && document.hidden ? I_ : o;
      if (n - r < s) return;
      ((a = { pendingPaintYieldCount: 0 }), (i = a));
    }
    let o = e.continueAfter === `paint` && (a.pendingPaintYieldCount > 0 || n?.() !== !1);
    return f(a, e, o);
  }
  function m(e) {
    let { batch: n, batchDuration: r, ...i } = e ?? {};
    return !nr() && !t ? (n ? void 0 : R_) : n ? p(i, r) : d(i);
  }
  return m;
}
function gr(e, t = !1) {
  let n = ``;
  if (j !== void 0) {
    if (t) n = j.location.search;
    else {
      let e = j.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? j.location.search : e === `` ? `` : `?${e}`;
    }
  }
  return n ? _r(n, e) : e;
}
function _r(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== H_ && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function vr(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(U_)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !L(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = Ye(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = Ye(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = Ye(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      })
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    t &&
      n &&
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
function yr(e, t) {
  return t ? `/${t}${e}` : e;
}
async function br({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await vr(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = yr(u.path, t.slug)),
    o && u.path && (u.path = gr(u.path, !0)),
    u
  );
}
async function xr({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a || !r || !n?.path) return;
  let o = Array.from(n.path.matchAll(U_)).at(-1)?.[1];
  if (!o) return;
  let s = r[o];
  if (L(s)) return a.getRecordIdBySlug(s, e ?? void 0);
}
async function Sr({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  if (!e || e.id === "default") return;
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a?.getContentLocaleIdByRecordId) return;
  let o = await xr({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r });
  if (o) return a.getContentLocaleIdByRecordId(o, e);
}
async function Cr({
  activeLocale: e,
  defaultLocale: t,
  collectionUtilsCache: n,
  locales: r,
  pathVariables: i,
  route: a,
  routeId: o,
}) {
  if (!e || !a) return {};
  let s =
      (await Sr({ activeLocale: e, collectionUtils: n, currentRoute: a, pathVariables: i })) ??
      a.canonicalLocaleIdByLocaleId?.[e.id],
    c = s ? r.find(({ id: e }) => e === s) : void 0;
  if (!c || c.id === e.id) return { contentLocaleId: s };
  let { pathVariables: l } = await br({
    currentLocale: e,
    nextLocale: c,
    defaultLocale: t,
    route: a,
    routeId: o,
    pathVariables: i,
    collectionUtils: n,
    preserveQueryParams: !1,
  });
  return Zt(l ?? {}, i ?? {}, !1)
    ? { contentLocaleId: s }
    : { contentLocaleId: s, canonicalPathVariables: l };
}
function wr() {
  return f.useContext(K_);
}
function Tr() {
  let e = Kn(),
    { getRoute: t } = en(),
    { activeLocale: n, locales: r } = wr();
  return C(
    (i, a, o) => {
      if (!i || !t) return;
      let s = t(i),
        { pathVariables: c } = a;
      return Dr(
        s,
        {
          routeId: i,
          pathVariables: c,
          locale: a.locale ?? n ?? void 0,
          locales: r,
          collectionUtils: e,
        },
        o
      );
    },
    [t, e, n, r]
  );
}
function Er(e, t = !0) {
  let n = Tr();
  h(() => {
    if (t && J_) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function Dr(e, t, n = {}) {
  if (!J_ || !e) return;
  let { priority: r = `background`, yieldBeforePreload: i = !0, shouldLoadRouteData: a = !0 } = n,
    o = e.page;
  if (!o || !Lt(o)) return;
  let s = a && !!t;
  if (!o.getStatus().hasLoaded || s) {
    i && (await V_({ priority: r }));
    try {
      let n = await o.preload();
      s && t && n && (await Or(n, e, t, r));
    } catch {}
  }
}
async function Or(e, t, n, r) {
  let i = e.loader;
  if (!i?.load) return;
  let { canonicalPathVariables: a } = await Cr({
      activeLocale: n.locale ?? null,
      defaultLocale: n.locales?.find((e) => e.id === Jg),
      collectionUtilsCache: n.collectionUtils,
      locales: n.locales ?? [],
      pathVariables: n.pathVariables,
      route: t,
      routeId: n.routeId,
    }),
    o = {
      signal: n.signal ?? new AbortController().signal,
      pathVariables: n.pathVariables ?? {},
      canonicalPathVariables: a,
      routeId: n.routeId,
      locale: n.locale,
      priority: r,
      collectionUtils: n.collectionUtils,
    };
  try {
    await i.load({}, o);
  } catch {}
}
function kr() {
  if (Y_) return;
  Y_ = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (j.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((j.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), Fn(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function Ar({ children: e, value: t }) {
  return /* @__PURE__ */ O(X_.Provider, { value: t, children: e });
}
function jr() {
  return f.useContext(X_);
}
function Mr(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function Nr(e) {
  let t = Z_,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < Q_; ) ((n = e.next(t)), r.push(n.value), (t += Z_));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - Z_ }
  );
}
function Pr(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function Fr(e) {
  let { innerWidth: t, innerHeight: n } = j,
    [r, i] = Pr(e.x),
    [a, o] = Pr(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function Ir(e) {
  let [t, n] = Pr(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function Lr(e) {
  let { x: t, y: n } = Fr(e);
  return Math.hypot(Math.max(t, j.innerWidth - t), Math.max(n, j.innerHeight - n));
}
function Rr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function zr(e) {
  return e ? tv[e] : void 0;
}
function Br(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (Vr(t)) {
    let { easing: e, duration: n } = Nr(
      re({ keyframes: [0, 1], ...Hr(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = zr(n?.mask?.type),
    o = Rr(n, `start`, e, a),
    s = Rr({ ...nv, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function Vr(e) {
  return e.type === `spring`;
}
function Hr(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function Ur({ exit: e = iv, enter: t }) {
  let n = document.createElement(`style`);
  n.id = rv;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += Br(`exit`, e)),
    (r += Br(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function Wr() {
  ft(() => {
    I.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(rv);
      e && document.head.removeChild(e);
    });
  });
}
function Gr() {
  return !!document.startViewTransition;
}
function Kr(e) {
  return new Promise((t) => {
    I.render(() => {
      (performance.mark(`framer-vt-style`), Ur(e), t());
    });
  });
}
async function qr(e, t, n) {
  if (!Gr()) {
    e();
    return;
  }
  if ((await Kr(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(av),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), Wr());
      })
      .catch(av),
    r
  );
}
function Jr() {
  let e = jr(),
    t = A(void 0);
  return (
    h(() => {
      t.current &&= (t.current(), void 0);
    }),
    C(
      (n, r, i, a) => {
        let o = Mr(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return qr(
            async () => {
              (i(), await e);
            },
            o,
            a
          );
        }
        i();
      },
      [e]
    )
  );
}
function Yr(e, t) {
  ft(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function Xr(e, t) {
  ft(() => {
    let n = document.querySelector(`link[rel='canonical'][data-framer-generated-canonical]`);
    if (
      !e ||
      document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)
    ) {
      n?.remove();
      return;
    }
    let r = new URL(e, t ?? document.baseURI);
    ((r.search = ``), (r.hash = ``));
    let i = n ?? document.createElement(`link`);
    (i.setAttribute(`rel`, `canonical`),
      i.setAttribute(`data-framer-generated-canonical`, ``),
      i.setAttribute(`href`, r.toString()),
      document.head.append(i));
  });
}
function Zr(e) {
  ft(() => {
    let t = Array.from(
      document.querySelectorAll(`link[rel='alternate'][hreflang][data-framer-generated-hreflang]`)
    );
    if (document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)) {
      for (let e of t) e.remove();
      return;
    }
    let n = /* @__PURE__ */ new Map();
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      t && n.set(t, e);
    }
    let r = /* @__PURE__ */ new Set();
    for (let { href: t, hrefLang: i } of e) {
      r.add(i);
      let e = n.get(i) ?? document.createElement(`link`);
      (e.setAttribute(`rel`, `alternate`),
        e.setAttribute(`data-framer-generated-hreflang`, ``),
        e.setAttribute(`href`, t),
        e.setAttribute(`hreflang`, i),
        document.head.append(e));
    }
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      (!t || !r.has(t)) && e.remove();
    }
  });
}
//! Credit to Astro | MIT License
function Qr(e, t, r, i = n) {
  i(() => {
    let t = async (e) => (await V_({ ...r, continueAfter: `paint` }), e()),
      n = t(e);
    return () => {
      (async () => {
        let e = await n;
        e && t(e);
      })();
    };
  }, t);
}
function $r(e) {
  let t = A(/* @__PURE__ */ new Set());
  return (
    Qr(
      () => {
        for (let e of t.current) e();
        t.current.clear();
      },
      void 0,
      { priority: `user-blocking` }
    ),
    C(
      (n) => {
        let r,
          i = new Promise((e) => {
            ((r = e), t.current.add(e));
          });
        if (!e) return { promise: i, measureDetail: n, ignore: null };
        let a = `${e}-start`,
          o = `${e}-end`,
          s = !1;
        return (
          performance.mark(a),
          i
            .finally(() => {
              s || (performance.mark(o), performance.measure(e, { start: a, end: o, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: i,
            measureDetail: n,
            ignore: () => {
              ((s = !0), r && (t.current.delete(r), r()));
            },
          }
        );
      },
      [e]
    )
  );
}
function ei(e) {
  return z(e) && `routeId` in e;
}
function ti(e = j.history.state) {
  return ei(e) ? e : void 0;
}
function ni(e) {
  return e?.entryId;
}
function ri(e) {
  cv = e;
}
function ii() {
  return cv;
}
function ai() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function oi(e, t) {
  return si(e, ni(e) ?? ni(t));
}
function si(e, t = ai()) {
  return { ...e, entryId: t };
}
function ci(e, t) {
  (performance.mark(`framer-history-replace`), ri(oi(e, ti())), t && Yr(t, j.location.href));
  let n =
    !t || t === j.location.href
      ? j.History.prototype.replaceState.bind(j.history)
      : j.history.replaceState.bind(j.history);
  try {
    n(cv, ``, t);
  } catch {}
}
function li(e) {
  (performance.mark(`framer-history-replace`),
    ri(si(e)),
    History.prototype.replaceState.call(j.history, cv, ``, void 0));
}
function ui(e, t) {
  (performance.mark(`framer-history-push`), ri(si(e)), Yr(t, j.location.href), kr());
  try {
    j.history.pushState(cv, ``, t);
  } catch {}
}
function di({
  disabled: e,
  routeId: t,
  initialPathVariables: r,
  initialLocaleId: i,
  initialContentLocaleId: a,
  initialCanonicalPathVariables: o,
}) {
  n(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let n = j.location.hash ? j.location.hash.slice(1) : void 0;
    ci({
      ...ti(),
      routeId: t,
      hash: n,
      pathVariables: r,
      localeId: i,
      contentLocaleId: a,
      canonicalPathVariables: o,
    });
  }, []);
}
function fi(e, t, n) {
  let r = Jr(),
    i = $r(`framer-route-change`),
    { onHistoryTraversal: a, usesCustomScrollRestoration: o } = e,
    s = o ? `manual` : `after-transition`,
    c = A(void 0),
    l = C(() => {
      (c.current?.resolve(), (c.current = void 0));
    }, []),
    u = C(
      async ({ state: e }) => {
        if (!ei(e)) return;
        let o = i({ popstate: !0 }),
          c = cn();
        (o.promise.finally(c), ni(ii()) !== (ni(e) ?? ni(ti())) && a(), ri(e));
        let {
            routeId: u,
            hash: d,
            pathVariables: f,
            localeId: p,
            contentLocaleId: m,
            canonicalPathVariables: h,
          } = e,
          g = L(d) ? d : j.location.hash ? j.location.hash.slice(1) : void 0,
          _ = !1,
          v = () => {
            _ ||=
              (n(
                u,
                L(p) ? p : void 0,
                g,
                j.location.pathname + j.location.search + j.location.hash,
                z(f) ? f : void 0,
                m,
                h,
                !0,
                o,
                !1
              ),
              !0);
          },
          y = s === `after-transition`;
        (await Promise.resolve(r(t.current, u, v))
          .then((e) => e?.updateCallbackDone)
          .catch(v)
          .finally(() => {
            y || l();
          }),
          await o.promise,
          y && l(),
          await j.navigation?.transition?.finished.catch(ct),
          sv(),
          Yr(j.location.href));
      },
      [t, i, a, l, n, r, s]
    ),
    d = C(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        ei(t) &&
          e.intercept({
            async handler() {
              (await new Promise((e, t) => {
                c.current = { resolve: e, reject: t };
              }),
                (c.current = void 0));
            },
            scroll: s,
          });
      },
      [s]
    );
  h(
    () => (
      j.addEventListener(`popstate`, u),
      lv && j.navigation.addEventListener(`navigate`, d),
      () => {
        (j.removeEventListener(`popstate`, u),
          lv && j.navigation.removeEventListener(`navigate`, d));
      }
    ),
    [u, d]
  );
}
async function pi(e) {
  return (
    (await fetch(e, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect` &&
    ((j.location.href = j.location.origin + e), !0)
  );
}
function mi() {
  let e = Kn();
  return C((t) => hi({ ...t, collectionUtils: e }), [e]);
}
async function hi({ sitePrefix: e, ...t }) {
  let n = await br(t);
  if (n) {
    try {
      localStorage.preferredLocale = t.nextLocale.code;
    } catch {}
    try {
      if (!L(n.path)) throw Error(`Expected result.path to be a string`);
      if (
        (n.isMissingInLocale ||
          (t.route.includedLocales && !t.route.includedLocales.includes(t.nextLocale.id))) &&
        (await pi(e + n.path))
      )
        return;
    } catch {}
    return n;
  }
}
function gi(e) {
  let t = A(Promise.resolve()),
    n = A(),
    r = C(
      (r) => {
        if (r.navigationType === `traverse` || !r.canIntercept) return;
        let i = n.current;
        (i?.signal.addEventListener(`abort`, () => {
          i.abort(`user aborted`);
        }),
          r.intercept({ handler: () => t.current, scroll: e ? `manual` : `after-transition` }));
      },
      [e]
    );
  return C(
    (e, i, a) => {
      lv
        ? ((t.current = e),
          (n.current = i),
          j.navigation.addEventListener(`navigate`, r),
          a?.(),
          e.finally(() => {
            t.current === e &&
              ((n.current = void 0), j.navigation.removeEventListener(`navigate`, r));
          }))
        : a?.();
    },
    [r]
  );
}
function _i(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`; ) t++;
  for (; n > t && e[n - 1] === `-`; ) n--;
  return e.slice(t, n);
}
function vi(e) {
  return _i(e.trim().toLowerCase().replace(uv, `-`));
}
function yi({ children: e, value: t }) {
  return /* @__PURE__ */ O(fv.Provider, { value: t, children: e });
}
function bi() {
  return S(fv);
}
function xi(e, t) {
  let n = k(() => ({ inputs: t, result: e() }))[0],
    r = A(!0),
    i = A(n),
    a =
      r.current || (t && i.current.inputs && Zt(t, i.current.inputs, !1))
        ? i.current
        : { inputs: t, result: e() };
  return (
    h(() => {
      ((r.current = !1), (i.current = a));
    }, [a]),
    a.result
  );
}
function Si(e, t) {
  return xi(() => e, t);
}
function Ci() {
  return j.location.search;
}
function wi() {
  return ``;
}
function Ti(e) {
  return (
    mv.add(e),
    j.addEventListener(`popstate`, e),
    () => {
      (mv.delete(e), j.removeEventListener(`popstate`, e));
    }
  );
}
function Ei() {
  for (let e of mv) e();
}
function Di({ children: e, routerRenderKey: t, isNavigationCommitPending: n }) {
  let r = bi() === `preview`,
    [i, a] = k(``),
    o = A(t);
  pv(() => {
    o.current = t;
  }, [t]);
  let s = l(Ti, Ci, wi),
    c = ne(s),
    d = t !== ne(t),
    f = r ? i : d ? s : c,
    p = C(
      async (e) => {
        if (r) {
          u(() => {
            a((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        let i = n(),
          s = t;
        if ((await V_({ continueAfter: `paint` }), i || n() || o.current !== s)) return;
        let c = ti();
        if (!c) return;
        let l = new URL(j.location.href),
          d = e(l.searchParams).toString();
        l.search = d;
        let f = c.queryParamBackAnchorSearch,
          p = j.location.search.slice(1),
          m = f === void 0 && d !== p,
          h = f !== void 0 && d === f,
          g = { ...c, queryParamBackAnchorSearch: h ? void 0 : (f ?? (m ? p : void 0)) },
          _ = l.toString();
        (m || h ? ui(g, _) : ci(g, _), Ei());
      },
      [n, r, t]
    ),
    m = xi(() => ({ urlSearchParams: new URLSearchParams(f), replaceSearchParams: p }), [f, p]);
  return /* @__PURE__ */ O(hv.Provider, { value: m, children: e });
}
function Oi(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = ki(e),
    [r, i] = ki(t),
    a = Ai(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function ki(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function Ai(e, t) {
  if (e === t || ((e = `/` + ji(e)), (t = `/` + ji(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = vv(e, 1 + s);
    if (n !== vv(t, 1 + s)) break;
    n === _v && (o = s);
  }
  if (s === a) {
    if (i > a) {
      if (vv(t, 1 + s) === _v) return bv(t, 1 + s + 1);
      if (s === 0) return bv(t, 1 + s);
    } else r > a && (vv(e, 1 + s) === _v ? (o = s) : s === 0 && (o = 0));
  }
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || vv(e, s) === _v) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${bv(t, 1 + o)}`;
}
function ji(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = vv(e, o);
    else if (Sv(a)) break;
    else a = _v;
    if (Sv(a)) {
      if (r !== o - 1 && i !== 1) {
        if (i === 2) {
          if (t.length < 2 || n !== 2 || vv(t, t.length - 1) !== gv || vv(t, t.length - 2) !== gv) {
            if (t.length > 2) {
              let e = yv(t, xv);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = bv(t, 0, e)), (n = t.length - 1 - yv(t, xv))),
                (r = o),
                (i = 0));
              continue;
            }
            if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
        } else
          (t.length > 0 ? (t += `${xv}${bv(e, r + 1, o)}`) : (t = bv(e, r + 1, o)),
            (n = o - r - 1));
      }
      ((r = o), (i = 0));
    } else a === gv && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function Mi(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || j.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function Ni(e, t) {
  let n = e.replace(U_, (e, n) => t[n] ?? e);
  if (!n.includes(`:`)) return n;
}
function Pi(e, t, n) {
  let r = Object.assign({}, t.elements, n);
  if (e.startsWith(`:`)) {
    let n = e.slice(1),
      i = t.elementPatterns?.[n];
    if (i) return Ni(i, r);
  }
  if (e.includes(`:`)) return Ni(e, r);
  let i = t.elements?.[e];
  return i ? Ni(i, r) : e;
}
function Fi(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: c,
    onlyHash: l = !1,
    siteCanonicalURL: u,
    localeId: d,
    localeSlug: f,
  }
) {
  let p;
  if ((i && e && (p = Pi(i, e, o)), l)) return p ?? ``;
  let m = t ?? `/`;
  (n && d && (m = n[d] ?? m), r && (m = m.replace(U_, (e, t) => String(r[t] || e))));
  let h = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
  a && (h = h.replace(U_, (e, t) => String(a[t] || e)));
  let g = !!(m === h && p),
    _ = !g && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && m !== h;
  if (s) {
    if (Cv.has(m) && j !== void 0) {
      let e = Mi(u);
      h = Oi(j.location.pathname, e + h);
    } else h = Oi(m, h);
  } else h = yr(h, f);
  let v = g || _;
  return ((c || v) && (h = gr(h, v)), p && (h = `${h}#${p}`), h);
}
function Ii(e) {
  return wv in e && e[wv] === 1;
}
function Li() {
  if (!Tv) return;
  ((Dv = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  Tv.forEach((n) => t.addEventListener(n, Ev, e));
}
function Ri() {
  return (
    h(() => {
      if (!Dv || !Tv) return;
      let e = { capture: !0 },
        t = document.body;
      (Tv.forEach((n) => t.removeEventListener(n, Ev, e)),
        (Tv = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function zi(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function Bi(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function Vi() {
  ((kv = new Ov()), kv.render.markStart());
}
function Hi() {
  (c(() => {
    kv?.useInsertionEffects.markRouterStart();
  }, []),
    n(() => {
      kv?.useLayoutEffects.markRouterStart();
    }, []),
    h(() => {
      kv?.useEffects.markRouterStart();
    }, []));
}
function Ui() {
  (c(() => {
    (kv?.render.markEnd(), kv?.useInsertionEffects.markStart());
  }, []),
    n(() => {
      (kv?.useLayoutEffects.markStart(),
        document.visibilityState === `visible`
          ? I.read(() => {
              (kv?.browserRendering.requestAnimationFrame.markStart(),
                kv?.unattributedHydrationOverhead.measure());
            })
          : (Av = !0));
    }, []),
    h(() => {
      (kv?.useEffects.markStart(),
        kv?.browserRendering.hasStarted ||
          (kv?.mutationEffects.measure(), kv?.useEffects.markAreSynchronous()));
    }, []));
}
function Wi() {
  (c(() => {
    kv?.useInsertionEffects.markEnd();
  }, []),
    n(() => {
      (kv?.useLayoutEffects.markEnd(),
        !(Av || document.visibilityState !== `visible`) &&
          I.read(() => {
            (kv?.browserRendering.requestAnimationFrame.markEnd(),
              V_().then(() => {
                kv?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    h(() => {
      kv?.useEffects.markEnd();
    }, []));
}
function Gi() {
  return (Ui(), null);
}
function Ki() {
  return (Wi(), null);
}
function qi(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return f.isValidElement(e) ? f.cloneElement(e, n) : /* @__PURE__ */ O(e, { ...n });
}
function Ji() {
  return Pv;
}
function Yi(e) {
  if (Fv?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      V(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: Qi(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          V(t, `localizedPath must be defined`);
          let i = Qi(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e));
    for (let e in n) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    Fv = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: Fv.pathRoutes,
    paths: Fv.paths,
    pathRoutesLocalized: Fv.pathRoutesLocalized,
    pathsLocalized: Fv.pathsLocalized,
  };
}
function Xi(e, t, n = !0, r = Ji()) {
  return Zi(e, t, r, n);
}
function Zi(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = Yi(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = $i(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = $i(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = $i(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = $i(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function Qi(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function $i(e, t) {
  let n = [],
    r = ea(t).replace(U_, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
    } else {
      if (r === void 0) throw Error(`Path variable values cannot be undefined`);
      o[t] = r;
    }
  }
  return { isMatch: !0, pathVariables: o };
}
function ea(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
async function ta({
  routes: e,
  routeId: t,
  pathVariables: n,
  localeId: r,
  locales: i,
  collectionUtils: a,
}) {
  let o = e[t],
    s = i ?? [],
    c = { get: Wn(a) },
    l = s.find(({ id: e }) => e === Jg),
    u = s.find(({ id: e }) => e === (r ?? `default`)) ?? null,
    d = (
      o?.collectionId
        ? xr({ activeLocale: u, collectionUtils: c, currentRoute: o, pathVariables: n })
        : Promise.resolve(void 0)
    )
      .then((e) => e ?? null)
      .catch(
        (e) => (console.error(Ze(`Failed to resolve the initial collection item id.`, e)), null)
      );
  return {
    ...(await Cr({
      activeLocale: u,
      defaultLocale: l,
      collectionUtilsCache: c,
      locales: s,
      pathVariables: n,
      route: o,
      routeId: t,
    })),
    collectionItemId: d,
  };
}
function na(e) {
  return e.startsWith(`"`) && e.endsWith(`"`) ? e.slice(1, -1) : e;
}
function ra(e) {
  let t = /* @__PURE__ */ new Map();
  if (!e) return t;
  for (let n of e.split(`,`)) {
    let [e, ...r] = n.split(`;`),
      i = e?.trim().toLowerCase();
    if (!i) continue;
    let a = ``;
    for (let e of r) {
      let t = e.indexOf(`=`);
      t !== -1 && e.slice(0, t).trim().toLowerCase() === `desc` && (a = na(e.slice(t + 1).trim()));
    }
    t.set(i, a);
  }
  return t;
}
function ia(e, t) {
  let n = e.toLowerCase(),
    r = ra(t).get(n);
  if (r !== void 0) return { name: n, description: r };
}
function aa(e) {
  if (j === void 0 || typeof performance > `u` || !(`PerformanceServerTiming` in j)) return;
  let t = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
  if (!t || t.length === 0) return;
  let n = t.find((t) => t.name === e);
  if (n) return { name: n.name, description: n.description };
}
function oa() {
  let e = aa(`abtests`);
  return new URLSearchParams(e?.description);
}
function sa(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n,
    a = e[i];
  if (!a) return;
  let { abTestingParentId: o, ...s } = r,
    c = a.elements || r.elements ? { ...a.elements, ...r.elements } : void 0;
  e[i] = {
    ...s,
    includedLocales: a.includedLocales,
    elements: c,
    abTestingVariantId: n,
    abTestId: t,
  };
}
function ca(e, t) {
  for (let [n, r] of t) sa(e, n, r);
}
function la(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function ua(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0;
  e[n] = { ...a, includedLocales: r?.includedLocales, elements: o, abTestingVariantId: t };
}
function da(e, t) {
  if (j === void 0) return t;
  let n = t;
  if (t) {
    ua(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (ca(e, oa()), la(e), n);
}
function fa(e) {
  (h(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    c(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function pa(e, ...t) {
  Iv.has(e) || (Iv.add(e), console.warn(e, ...t));
}
function ma(e, t, n) {
  pa(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function ha(e) {
  return (
    typeof e == `object` &&
    !!e &&
    zv in e &&
    e[zv] instanceof Function &&
    Bv in e &&
    e[Bv] instanceof Function
  );
}
function ga(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = Rv(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function _a(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function va(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function ya(e) {
  return Math.round(e * 2) / 2;
}
function ba(e, t) {
  return { x: e, y: t };
}
function xa(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0) {
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  }
  return u;
}
function Sa(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Ca(e) {
  let t = wa(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function wa(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function Ta(e, t, n) {
  return (
    (Wv.rgb_r = e / 255),
    (Wv.rgb_g = t / 255),
    (Wv.rgb_b = n / 255),
    Wv.rgbToHsluv(),
    { h: Wv.hsluv_h, s: Wv.hsluv_s, l: Wv.hsluv_l }
  );
}
function Ea(e, t, n, r = 1) {
  return (
    (Wv.hsluv_h = e),
    (Wv.hsluv_s = t),
    (Wv.hsluv_l = n),
    Wv.hsluvToRgb(),
    { r: Wv.rgb_r * 255, g: Wv.rgb_g * 255, b: Wv.rgb_b * 255, a: r }
  );
}
function Da(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function Oa(e, t, n) {
  return {
    r: Sa(e) ? Fa(e, 255) * 255 : 0,
    g: Sa(t) ? Fa(t, 255) * 255 : 0,
    b: Sa(n) ? Fa(n, 255) * 255 : 0,
  };
}
function ka(e, t, n, r) {
  let i = [
    Ra(Math.round(e).toString(16)),
    Ra(Math.round(t).toString(16)),
    Ra(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function Aa(e, t, n) {
  let r,
    i,
    a = Fa(e, 255),
    o = Fa(t, 255),
    s = Fa(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function ja(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function Ma(e, t, n) {
  let r, i, a;
  if (((e = Fa(e, 360)), (t = Fa(t * 100, 100)), (n = Fa(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = ja(s, o, e + 1 / 3)), (i = ja(s, o, e)), (a = ja(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function Na(e, t, n) {
  ((e = Fa(e, 255)), (t = Fa(t, 255)), (n = Fa(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function Pa(e, t, n) {
  ((e = Fa(e, 360) * 6), (t = Fa(t * 100, 100)), (n = Fa(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function Fa(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    Ia(e) && (e = `100%`);
    let t = La(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function Ia(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function La(e) {
  return typeof e == `string` && e.includes(`%`);
}
function Ra(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function za(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = Hv[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = Gv.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = Gv.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = Gv.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: Ca(r[2] ?? ``), l: Ca(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = Gv.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: Ca(r[2] ?? ``),
              l: Ca(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = Gv.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: Ca(r[2] ?? ``), v: Ca(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = Gv.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: Ca(r[2] ?? ``),
                  v: Ca(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = Gv.hex8.exec(t))
                ? {
                    r: Ba(r[1] ?? ``),
                    g: Ba(r[2] ?? ``),
                    b: Ba(r[3] ?? ``),
                    a: Va(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = Gv.hex6.exec(t))
                  ? {
                      r: Ba(r[1] ?? ``),
                      g: Ba(r[2] ?? ``),
                      b: Ba(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = Gv.hex4.exec(t))
                    ? {
                        r: Ba(`${r[1]}${r[1]}`),
                        g: Ba(`${r[2]}${r[2]}`),
                        b: Ba(`${r[3]}${r[3]}`),
                        a: Va(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = Gv.hex3.exec(t))
                      ? {
                          r: Ba(`${r[1]}${r[1]}`),
                          g: Ba(`${r[2]}${r[2]}`),
                          b: Ba(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function Ba(e) {
  return parseInt(e, 16);
}
function Va(e) {
  return Ba(e) / 255;
}
function Ha(e) {
  let t = Kv.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function Ua(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function Wa({ r: e, g: t, b: n, a: r }) {
  return { r: Ua(e), g: Ua(t), b: Ua(n), a: r };
}
function Ga(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function Ka({ r: e, g: t, b: n, a: r }) {
  return { r: Ga(e), g: Ga(t), b: Ga(n), a: r };
}
function qa({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function Ja(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function Ya({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = Ja(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function Xa(e) {
  return Xv(Yv(e));
}
function Za(e) {
  return Jv(qv(e));
}
function Qa(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = to({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = $a(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? to(e)
              : no(e)),
    i
  );
}
function $a(e) {
  let t = za(e);
  if (t) return t.format === `hsl` ? no(t) : t.format === `hsv` ? eo(t) : to(t);
}
function eo(e) {
  let t = Pa(e.h, e.s, e.v);
  return { ...Aa(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : ro(e.a) };
}
function to(e) {
  let t = Oa(e.r, e.g, e.b);
  return { ...Aa(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : ro(e.a) };
}
function no(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = Sa(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Sa(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = wa(e.s)),
    (r = Sa(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = wa(e.l)),
    (i = Ma(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function ro(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function io({ children: e }) {
  if (S(uy).top) return /* @__PURE__ */ O(w, { children: e });
  let t = A({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    n = A({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    r = A(/* @__PURE__ */ new Set()).current,
    i = C(({ id: e, name: i, duplicatedFrom: a }) => {
      if (!e) return null;
      let o = i ? `byName` : `byId`,
        s = t.current[o][e];
      if (s) return s;
      let c = i || e;
      if (!a && !r.has(c) && (!t.current.byLayoutId[c] || t.current.byLayoutId[c] === c))
        return (
          t.current.count[o][c] === void 0 &&
            ((t.current.count[o][c] = 0), (t.current.byLayoutId[c] = c), (n.current[o][e] = c)),
          r.add(c),
          c
        );
      let l;
      if (a?.length)
        for (let s = a.length - 1; s >= 0; s--) {
          let c = a[s];
          V(!!c, `duplicatedId must be defined`);
          let u = t.current[o][c],
            d = t.current.byLastId[c];
          if (d && !l) {
            let e = t.current.byLayoutId[d],
              n = !e || e === i;
            d && !r.has(d) && (!i || n) && (l = [d, c]);
          }
          let f = u ? t.current.byLayoutId[u] : void 0,
            p = !f || f === i;
          if (u && !r.has(u) && (!i || p))
            return ((n.current[o][e] = u), (n.current.byLastId[c] = u), r.add(u), u);
        }
      let u = t.current.byLastId[e];
      if (u && !r.has(u)) return (r.add(u), (n.current.byId[e] = u), u);
      if (l) {
        let [t, i] = l;
        return ((n.current[o][e] = t), (n.current.byLastId[i] = t), r.add(t), t);
      }
      let d = t.current.byPossibleId[e];
      if (d && !r.has(d)) return (r.add(d), (n.current.byId[e] = d), d);
      let f = a?.[0],
        p = i || f || e,
        { layoutId: m, value: h } = ao(p, (t.current.count[o][p] ?? -1) + 1, r);
      if (((t.current.count[o][p] = h), (n.current[o][e] = m), a?.length && !i)) {
        let e = a[a.length - 1];
        if ((e && (n.current.byLastId[e] = m), a.length > 1))
          for (let e = 0; e < a.length - 1; e++) {
            let t = a[e];
            t !== void 0 && (n.current.byPossibleId[t] || (n.current.byPossibleId[t] = m));
          }
      }
      return ((n.current.byLayoutId[m] = c), r.add(m), m);
    }, []),
    a = C(() => {
      ((t.current = {
        byId: { ...t.current.byId, ...n.current.byId },
        byLastId: { ...t.current.byLastId, ...n.current.byLastId },
        byPossibleId: { ...t.current.byPossibleId, ...n.current.byPossibleId },
        byName: { ...t.current.byName, ...n.current.byName },
        byLastName: { ...t.current.byLastName, ...n.current.byLastName },
        byLayoutId: { ...t.current.byLayoutId, ...n.current.byLayoutId },
        count: { ...t.current.count, byName: {} },
      }),
        (n.current = {
          byId: {},
          byName: {},
          byLastId: {},
          byPossibleId: {},
          byLastName: {},
          byLayoutId: {},
        }),
        r.clear());
    }, []),
    o = A({ getLayoutId: i, persistLayoutIdCache: a, top: !0, enabled: !0 }).current;
  return /* @__PURE__ */ O(uy.Provider, { value: o, children: e });
}
function ao(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i); ) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function oo({ enabled: e = !0, ...t }) {
  let n = S(uy),
    r = s(() => ({ ...n, enabled: e }), [e]);
  return /* @__PURE__ */ O(uy.Provider, { ...t, value: r });
}
function so(e) {
  let t = A(null);
  return (t.current === null && (t.current = e()), t.current);
}
function co(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${lo(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return /* @__PURE__ */ ee(`div`, {
    style: fy,
    children: [
      /* @__PURE__ */ O(`div`, { className: `text`, style: my, children: r }),
      i && /* @__PURE__ */ O(`div`, { className: `text`, style: hy, children: i }),
    ],
  });
}
function lo(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function uo() {
  let e = W.current();
  return e === W.canvas || e === W.export;
}
function fo() {
  let [e] = k(() => uo());
  return e;
}
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
function po(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function mo(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of Dy) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function ho(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set(`scale-down-to`, `${t}`) : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function go(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < 512) continue;
    let n = ho(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${ho(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function _o(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of Ey) {
    let n = ho(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function vo(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = _o(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  }
  return { src: n, srcSet: go(n, t, mo(t.pixelWidth, t.pixelHeight)) };
}
function yo() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: Xe(Cy.imagePlaceholderSvg),
  };
}
function bo(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function xo(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function So(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...Ty,
    objectPosition: xo(e.positionX, e.positionY),
    objectFit: bo(e.fit),
  };
}
function Co(e) {
  let t = f.useRef(e ? `auto` : `async`),
    n = C((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    r = C(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    i = C(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function wo({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = Cy.useImageSource(e, t, n),
    s = So(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = Co(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : vo(e.nodeFixedSize, e, o);
  return /* @__PURE__ */ O(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function To({ image: e, containerSize: t, nodeId: n }) {
  let r = f.useRef(null),
    i = Cy.useImageElement(e, t, n),
    a = So(e);
  return (
    f.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    /* @__PURE__ */ O(`div`, { ref: r, style: { display: `contents`, ...Ty } })
  );
}
function Eo({ nodeId: e, image: t, containerSize: n }) {
  let r = f.useRef(null),
    i = Cy.useImageSource(t, n, e);
  return (
    f.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = So(t);
      Cy.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    /* @__PURE__ */ O(`div`, { ref: r, style: { display: `contents`, ...Ty } })
  );
}
function Do({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (L(t.src)) {
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = R(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = ya(e * (t.pixelWidth / 2)),
        s = Cy.useImageSource(t, n);
      ((r = {
        ...Oy,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: xo(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        W.current() === W.canvas
          ? Cy.canRenderOptimizedCanvasImage(Cy.useImageSource(t))
            ? /* @__PURE__ */ O(Eo, { image: t, ...n })
            : /* @__PURE__ */ O(To, { image: t, ...n })
          : /* @__PURE__ */ O(wo, { image: t, avoidAsyncDecoding: W.current() === W.export, ...n });
  }
  let o = a ? Oy : (r ?? { ...Oy, ...yo() });
  return i
    ? /* @__PURE__ */ O(_e.div, {
        layoutId: e,
        style: o,
        "data-framer-background-image-wrapper": !0,
        children: a,
      })
    : /* @__PURE__ */ O(`div`, {
        style: o,
        "data-framer-background-image-wrapper": !0,
        children: a,
      });
}
function Oo(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  (typeof r == `number`
    ? (o = s = c = l = r)
    : ((o = r.top || 0), (s = r.bottom || 0), (c = r.left || 0), (l = r.right || 0)),
    (o !== 0 || s !== 0 || c !== 0 || l !== 0) &&
      (n && o === s && o === c && o === l
        ? (t.border = `${o}px ${i} ${a}`)
        : ((t.borderStyle = e.borderStyle),
          (t.borderColor = e.borderColor),
          (t.borderTopWidth = `${o}px`),
          (t.borderBottomWidth = `${s}px`),
          (t.borderLeftWidth = `${c}px`),
          (t.borderRightWidth = `${l}px`))));
}
function ko(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...Ty,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), /* @__PURE__ */ O(_e.div, { style: n }))
    : (Oo(e, n, !1), /* @__PURE__ */ O(_e.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function Ao(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function jo(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !Ay.isImageObject(t)) return;
  let r = null;
  if (((r = L(n) ? { alt: ``, src: n } : Rv.get(t, null)), Ay.isImageObject(r))) return Ao(r, e);
}
function Mo(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function No(e) {
  return typeof e != `string` && typeof e != `number`;
}
function Po(e) {
  return e != null && typeof e != `boolean` && !Mo(e);
}
function G(e) {
  return Number.isFinite(e);
}
function Fo(e) {
  return (Math.PI / 180) * e;
}
function Io(e) {
  return B(e) ? !1 : e === 2 || e === 5;
}
function Lo(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function Ro(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return zo(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function zo(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      H(e, `unknown constraint key`);
  }
}
function Bo(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(Ro(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(Ro(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function Vo(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(Ro(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(Ro(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function Ho(e, t, n, r, i) {
  let a = Vo(G(e) ? e : Fy, n, r, i),
    o = Bo(G(t) ? t : Iy, n, r, i);
  return (
    G(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (G(n.left) && G(n.right)
        ? (o = a / n.aspectRatio)
        : (G(n.top) && G(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function Uo(e, t) {
  return !G(e) || !G(t) ? null : e + t;
}
function Wo(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function Go(e) {
  return !e._constraints || Wo(e) ? !1 : e._constraints.enabled;
}
function Ko(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    G(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    G(n) && G(r) ? { width: n, height: r } : null
  );
}
function qo(e) {
  let t = Ko(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return G(n) && G(r) ? { x: n, y: r, ...t } : null;
}
function Jo(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Go(e) || r) return qo(e);
  let i = Yo(e),
    a = Xo(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return Py.toRect(i, o, null, n, null);
}
function Yo(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = Ny.quickfix({
      left: G(t),
      right: G(n),
      top: G(r),
      bottom: G(i),
      widthType: Lo(c),
      heightType: Lo(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`) ? ((h = 3), (p = e)) : c === `auto` ? (h = 2) : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) && ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function Xo(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Zo() {
  return f.useContext(Ly).parentSize;
}
function Qo(e) {
  return typeof e == `object`;
}
function $o(e) {
  return Qo(e) ? e.width : e;
}
function es(e) {
  return Qo(e) ? e.height : e;
}
function ts(e, t) {
  return /* @__PURE__ */ O(Ry, { parentSize: t, children: e });
}
function ns(e) {
  return Jo(e, Zo(), !0);
}
function rs({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function is(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function as(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? _e[e] : _e.div;
}
function os() {
  return !1;
}
function ss() {
  return Qe() ? W.preview : W.current();
}
function cs() {
  return (Ky ??= import("./chunk.B3RYC8bk.DmiQNqXT.mjs").then((e) => {
    if (((qy = e.getCombinedCSSRules), nr())) for (let e of qy()) $e(e, void 0);
    return e;
  }));
}
function ls() {
  return qy ? qy() : (nr() && cs(), []);
}
function us(e) {
  return Uy(e, ls, `framer-lib-combinedCSSRules`);
}
function ds(e, t, n) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0),
    (e[`data-framer-layout-hint-x`] = n?.x),
    (e[`data-framer-layout-hint-y`] = n?.y));
}
function fs(e, t) {
  let n = {};
  return (
    W.current() === W.canvas &&
      ds(n, Jy ? e : void 0, {
        x: typeof t?.x == `number` ? t.x : void 0,
        y: typeof t?.y == `number` ? t.y : void 0,
      }),
    n
  );
}
function ps(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function ms(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = f.Children.map(t, (e) =>
        f.isValidElement(e) ? f.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function hs(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function gs(e, { specificLayoutId: t, postfix: n } = {}) {
  let { name: r, layoutIdKey: i, duplicatedFrom: a, __fromCodeComponentNode: o = !1, drag: c } = e,
    { getLayoutId: l, enabled: u } = S(uy);
  return s(() => {
    if (!u) return e.layoutId;
    let s = t || e.layoutId;
    if (!s && (c || !i || o)) return;
    let d = s || l({ id: i, name: r, duplicatedFrom: a });
    if (d) return n ? `${d}-${n}` : d;
  }, [u]);
}
function _s() {
  let [e, t] = f.useState(0);
  return f.useCallback(() => t((e) => e + 1), []);
}
function vs(e) {
  let t = _s();
  h(() => {
    let n = e?.current;
    if (n)
      return (
        Zy?.observeElementWithCallback(e.current, t),
        () => {
          Zy?.unobserve(n);
        }
      );
  }, [e, t]);
}
function ys(e) {
  return [
    ...(e.firstElementChild &&
    e.firstElementChild.hasAttribute(`data-framer-size-compatibility-wrapper`)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(bs)
    .map(xs);
}
function bs(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function xs(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(bs);
  return t ? xs(t) : e;
}
function Ss(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    c = S(Yy),
    l = W.current() === W.canvas;
  pv(() => {
    !l ||
      c ||
      s ||
      (t.current && i && a && o && Cy.queueMeasureRequest(ps(i), t.current, n(t.current)));
  });
}
function Cs(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && Cy.queueMeasureRequest(ps(t.id), t, ys(t));
}
function ws(e) {
  e.willChange = `transform`;
  let t = W.current() === W.canvas;
  eb && t && (e.translateZ = Qy);
}
function Ts(e) {
  ((e.willChange = `transform`), Es(e, !0));
}
function Es(e, t) {
  let n = W.current() === W.canvas;
  if (!eb || !n) return;
  let r = (L(e.transform) && e.transform) || ``;
  t ? r.includes($y) || (e.transform = r + $y) : (e.transform = r.replace($y, ``));
}
function Ds(e, t, n, r = !0) {
  if (!e) return;
  let i = gy(e.style),
    a = n || i[t],
    o = () => {
      Os(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function Os(e) {
  return L(e) || R(e) || We(e);
}
function ks(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function As(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  ks(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function js(e, t) {
  let n = [e, t];
  return ib.test(e) ? e : As(1e3, ab, n, () => rb.multiplyAlpha(e, t));
}
function Ms(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: js(e.value, t) }))
  );
}
function Ns(e, t) {
  let n = 0;
  return (
    Ms(e, t).forEach((e) => {
      n ^= nb(e.value) ^ e.position;
    }),
    n
  );
}
function Ps(e) {
  return e && ob.every((t) => t in e);
}
function Fs(e) {
  return e && sb.every((t) => t in e);
}
function Is({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || $v(t)
      ? (n.backgroundColor = t)
      : Y.isColorObject(e) && (n.backgroundColor = e.initialValue || Y.toRgbString(e))
    : e &&
      ((e = Rv.get(e, null)),
      typeof e == `string` || $v(e)
        ? (n.background = e)
        : lb.isLinearGradient(e)
          ? (n.background = lb.toCSS(e))
          : db.isRadialGradient(e)
            ? (n.background = db.toCSS(e))
            : Y.isColorObject(e) && (n.backgroundColor = e.initialValue || Y.toRgbString(e)));
}
function K(e, t, n, r) {
  (r === void 0 && (r = t), e[t] !== void 0 && (n[r] = e[t]));
}
function Ls(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function Rs(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function zs(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    ge(n)
      ? (t.cornerShape = pe(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    K(e, `size`, t),
    K(e, `width`, t),
    K(e, `height`, t),
    K(e, `minWidth`, t),
    K(e, `minHeight`, t),
    K(e, `top`, t),
    K(e, `right`, t),
    K(e, `bottom`, t),
    K(e, `left`, t),
    K(e, `position`, t),
    K(e, `overflow`, t),
    K(e, `opacity`, t),
    e._border?.borderWidth || K(e, `border`, t),
    K(e, `borderRadius`, t),
    K(e, `radius`, t, `borderRadius`),
    K(e, `color`, t),
    K(e, `shadow`, t, `boxShadow`),
    K(e, `x`, t),
    K(e, `y`, t),
    K(e, `z`, t),
    K(e, `rotate`, t),
    K(e, `rotateX`, t),
    K(e, `rotateY`, t),
    K(e, `rotateZ`, t),
    K(e, `scale`, t),
    K(e, `scaleX`, t),
    K(e, `scaleY`, t),
    K(e, `skew`, t),
    K(e, `skewX`, t),
    K(e, `skewY`, t),
    K(e, `originX`, t),
    K(e, `originY`, t),
    K(e, `originZ`, t),
    Is(e, t),
    t
  );
}
function Bs(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof gy(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function Vs(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (pb.has(t)) return `pointer`;
}
function Hs(e) {
  return Us(e) ? !0 : e.style ? !!Us(e.style) : !1;
}
function Us(e) {
  return mb in e && (e[mb] === `scroll` || e[mb] === `auto`);
}
function Ws(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = N(e.minWidth),
    h = N(e.minHeight),
    g = N(e.maxWidth),
    _ = N(e.maxHeight);
  return {
    top: N(n),
    left: N(t),
    bottom: N(r),
    right: N(i),
    width: N(a),
    height: N(o),
    size: N(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function Gs(e) {
  let t = S(Yy),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: a } = e,
    o = Ws(e),
    s = ns(o),
    c = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: W.current() === W.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (c.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let l = !Bs(e) && !e.__fromCanvasComponent && !Hs(e),
    u = !e.style || !(`pointerEvents` in e.style);
  l && u && (c.pointerEvents = `none`);
  let d = f.Children.count(e.children) > 0 &&
      f.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    p = zs(e);
  (a === void 0 && !i && (Ls(p) || (c.width = hb.width), Rs(p) || (c.height = hb.height)),
    o.minWidth !== void 0 && (c.minWidth = o.minWidth),
    o.minHeight !== void 0 && (c.minHeight = o.minHeight));
  let m = {};
  (Go(o) &&
    s &&
    !rs(e) &&
    (m = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(c, d, r, p, m, n),
    Object.assign(c, {
      overflowX: c.overflowX ?? c.overflow,
      overflowY: c.overflowY ?? c.overflow,
      overflow: void 0,
    }),
    tb.applyWillChange(e, c, !0));
  let h = c;
  c.transform || (h = { x: 0, y: 0, ...c });
  let g = uo();
  return (
    e.positionSticky
      ? (!g || Cy.isOnPageCanvas || t) &&
        ((h.position = `sticky`),
        (h.willChange = `transform`),
        (h.top = e.positionStickyTop),
        (h.right = e.positionStickyRight),
        (h.bottom = e.positionStickyBottom),
        (h.left = e.positionStickyLeft))
      : g &&
        (e.positionFixed
          ? (h.position = Cy.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (h.position = `absolute`)),
    `rotate` in h && h.rotate === void 0 && delete h.rotate,
    [h, s]
  );
}
function Ks(e) {
  let t = {};
  for (let n in e)
    (ae(n) || vy(n)) && !gb.has(n)
      ? (t[n] = gy(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof gy(e)[n] != `boolean` && !e.transition && (t.transition = gy(e)[n]));
  return t;
}
function qs(e) {
  return `data-framer-name` in e;
}
function Js(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function Ys(e) {
  return /* @__PURE__ */ O(_e.div, { layoutId: yb, style: Sb, children: e.children });
}
function Xs(e, t) {
  Be(e) ? e(t) : Zs(e) && (e.current = t);
}
function Zs(e) {
  return z(e) && `current` in e;
}
function Qs(e) {
  return Zs(e) && e.current !== null;
}
function $s() {
  let e = so(() => /* @__PURE__ */ new Set()),
    t = so(() => /* @__PURE__ */ new Map());
  return so(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      i !== n.current &&
        ((n.current = i),
        r && r(i),
        t.forEach((e, t) => {
          e ? e() : t(null);
        }),
        i === null
          ? (t.clear(), e.clear())
          : e.forEach((e) => {
              let n = e(i);
              t.set(e, n);
            }));
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function ec(e) {
  let t = A(null),
    n = $s();
  return so(() => (Zs(e) ? n(e) : Be(e) ? n(t, e) : n(t)));
}
function tc(e, t, n) {
  let r = A(),
    i = A();
  (xi(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function nc(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new Cb({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function rc(e, t, n) {
  let r = so(() => `${n.rootMargin}`),
    i = S(wb),
    { enabled: a, root: o, rootMargin: s, threshold: c } = n;
  tc(
    e,
    (e) => {
      if (a && e !== null) return nc(i, r, e, o, t, s, c);
    },
    [a, t, o, s, c]
  );
}
function ic(e, t, n) {
  let r = f.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n,
    c = f.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = oc(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
        } else if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
        }
      },
      [a, o?.y, t]
    );
  Tb(e, c, { threshold: Eb, rootMargin: s, enabled: i ?? !0 });
}
function ac(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, U.innerHeight);
}
function oc({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && ac(t, e) >= r;
}
function sc() {
  return /* @__PURE__ */ new Map();
}
function cc() {
  return so(sc);
}
function lc(e, t = []) {
  let { register: n, deregister: r } = S(jb);
  h(() => {
    if (e) return (n(e), () => r(e));
  }, [n, r, ...t]);
}
function uc(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function dc(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (G(t.originX) && (r.originX = t.originX),
      G(t.originY) && (r.originY = t.originY),
      G(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (G(n.originX) && (r.originX = n.originX),
      G(n.originY) && (r.originY = n.originY),
      G(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function fc(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function pc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return Lb.PushLeft;
    case `left`:
      return Lb.PushRight;
    case `bottom`:
      return Lb.PushUp;
    case `top`:
      return Lb.PushDown;
  }
}
function mc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return Lb.OverlayLeft;
    case `left`:
      return Lb.OverlayRight;
    case `bottom`:
      return Lb.OverlayUp;
    case `top`:
      return Lb.OverlayDown;
  }
}
function hc(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return Lb.FlipLeft;
    case `left`:
      return Lb.FlipRight;
    case `bottom`:
      return Lb.FlipUp;
    case `top`:
      return Lb.FlipDown;
  }
}
function gc(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return vc(e, t.transition, t.component);
    case `removeOverlay`:
      return yc(e);
    case `add`:
      return bc(e, t.key, t.transition, t.component);
    case `remove`:
      return Cc(e);
    case `update`:
      return _c(e, t.key, t.component);
    case `back`:
      return xc(e);
    case `forward`:
      return Sc(e);
    default:
      return;
  }
}
function _c(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function vc(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function yc(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function bc(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i?.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? Oc(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = Ec(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = wc(e, t, c),
    p = Dc(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function xc(e) {
  let t = { ...e.containers },
    n = Cc(e);
  if (n) return ((n.containers = t), n);
}
function Sc(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = bc(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function Cc(e) {
  let t = e.history.slice(0, e.current + 1);
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (V(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = Tc(e, r, n),
    u = Dc(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function wc(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n) ((r.containerVisualIndex[t] = e.history.length - 1), (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function Tc(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1), (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function Ec(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function Dc(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = kc(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function Oc(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).some((t) => t.key === e)
        ? !0
        : !r.slice(0, t - 1).some((t) => t.key === e);
}
function kc(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (e === n || e === r) {
    if (e === n && n > r) {
      let t = i[e];
      return Ac(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return Ac(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return Ac(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return Ac(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function Ac(e, t, n) {
  let r = {},
    i = {};
  return (
    zb.forEach((e) => {
      ((r[e] = Pb[e]), (i[e] = { ...n, from: Pb[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${gy(Pb)[a]}%` : gy(Pb)[a];
        ((gy(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function jc(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function Mc({ currentOverlayItem: e }) {
  return e?.transition?.exit;
}
function Nc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e?.transition?.animation
    ? e.transition.animation
    : t?.transition?.animation
      ? t.transition.animation
      : Ub;
}
function Pc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t?.transition?.backfaceVisible;
}
function Fc(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function Ic(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  }
  if (e < n) {
    let t = r[e + 1];
    return !t?.transition || t.transition.backfaceVisible;
  }
  {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  }
}
function Lc(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function Rc(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function zc(e, t) {
  let { current: n, history: r } = t;
  if (e !== n) {
    if (e < n) {
      let t = r[e + 1];
      if (t?.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t?.transition) return t.transition.enter;
    }
  }
}
function Bc(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t?.transition?.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t?.transition?.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return Ub;
}
function Vc(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function Hc(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function Uc(e) {
  return f.Children.map(e.component, (t) => {
    if (!Po(t) || !No(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? z(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      f.cloneElement(t, n)
    );
  });
}
function Wc(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function Gc(e, t) {
  let n = P(),
    r = de();
  return /* @__PURE__ */ O(Hb, {
    ref: (e) => {
      t && (typeof t == `function` ? t(e) : (t.current = e));
    },
    ...e,
    resetProjection: n,
    skipLayoutAnimation: r,
    children: e.children,
  });
}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Kc(e) {
  return z(e) && Kb in e;
}
function qc(e) {
  return z(e) || Be(e);
}
function Jc(e) {
  return !!e && qb in e && e[qb] === !0;
}
function Yc(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
      case `dimension`:
        return L(e.defaultValue) ? e.defaultValue : void 0;
      case `sharedtype`: {
        if (!(`definition` in e) || !Kc(e.definition)) return;
        let { definition: t } = e;
        switch (t.kind) {
          case `enum`:
            return L(e.defaultValue) && t.options.includes(e.defaultValue)
              ? e.defaultValue
              : void 0;
          default:
            t.kind;
            return;
        }
      }
      case `boolean`:
        return Ve(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return B(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return R(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return He(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return He(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = z(e.defaultValue) ? e.defaultValue : {};
        return (z(e.controls) && Xc(t, e.controls), t);
      }
      case `array`:
        return He(e.defaultValue) ? e.defaultValue : void 0;
      case `motionvalue`:
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function Xc(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!B(i) || Jc(r)) continue;
    let a = Yc(r);
    B(a) || (e[n] = a);
  }
}
function Zc(e) {
  if (z(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function Qc(e, t) {
  qc(e) && Xc(Zc(e), t);
}
function $c(e, t) {
  Object.assign(e, { [Jb]: t });
}
function el(e, t, n) {
  (Object.assign(e, { propertyControls: t }), Qc(e, t), n !== void 0 && $c(e, n));
}
function tl(e) {
  return e.propertyControls;
}
function nl(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function rl(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function il(e, t) {
  let n = [];
  (G(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    G(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    G(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    G(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    G(e.invert) && n.push(`invert(${e.invert / 100})`),
    G(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    G(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    G(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...nl(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function al(e, t) {
  G(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function ol(e, t) {
  (al(e, t), il(e, t));
}
function sl(e, t) {
  let n,
    r = (...r) => {
      (U.clearTimeout(n), (n = U.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      U.clearTimeout(n);
    }),
    r
  );
}
function cl(...e) {
  return e.filter(Boolean).join(` `);
}
function ll(e) {
  if (e.startsWith(ix)) return e.substr(ax);
}
function ul(e, t, n) {
  let i = r.map(e, (e) => (b(e) ? a(e, t) : e));
  return n ? i : /* @__PURE__ */ O(w, { children: i });
}
function dl(e) {
  let t = so(() => fl(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function fl(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = pl(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = pl(t)));
    },
    i = !1;
  function o(o, s) {
    if (i)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (i = !0),
      r.count(o) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      r.map(o, (e) => {
        if (b(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = Be(s) ? s(e.props) : s;
          return a(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let s = function (e, t) {
    return /* @__PURE__ */ O(w, { children: o(e, t) });
  };
  return (
    (s.cloneAsArray = o),
    {
      useSetup: (e) => {
        ((i = !1), n(e, t.childRef));
      },
      cloneAsElement: s,
    }
  );
}
function pl(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (Xs(n, e), Xs(t, e));
  };
}
function ml(e, t, n, r, i, a, o, s) {
  let c = f.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !f.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !vl(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = _l([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let p = _l([i, ...d], a);
  p.length && u.unshift({ variants: p });
  let m = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = /* @__PURE__ */ O(
        sx.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = gl(e, a, r);
    (f.length
      ? (V(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = /* @__PURE__ */ O(
          `div`,
          { className: `${cx} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : V(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      m.push(d));
  }
  return (
    V(!s || m.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? m : [...m, /* @__PURE__ */ O(`div`, { className: lx }, `property-overrides-separator`)]
  );
}
function hl(e) {
  return e.split(`-`)[2];
}
function gl(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${hl(a)}`);
  }
  return r;
}
function _l(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function vl(e, t) {
  for (let n of Object.keys(t)) if (!Zt(e[n], t[n], !0)) return !0;
  return !1;
}
function yl(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function bl(e) {
  return f.forwardRef(({ optimized: t, ...n }, r) => {
    let i = f.useContext(ox),
      a = f.useContext(sx)?.variants,
      o = n[_x];
    o && !nr() && hx.setAll(o, a, t ? n : null, i);
    let s = yx(n);
    return /* @__PURE__ */ O(e, { ref: r, ...n, ...s });
  });
}
function xl(e) {
  return L(e) || Array.isArray(e);
}
function Sl(e) {
  return e in Sx;
}
function Cl(e, t) {
  let n = so(() => ({ values: xx(t ? e : void 0) }));
  return (
    f.useEffect(() => {
      if (!t)
        for (let e of bx) {
          let t = Sx[e];
          B(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function wl(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: t,
    loopTransition: n,
    loopRepeatType: r,
    loop: i,
    loopPauseOffscreen: a,
  },
  o
) {
  let c = le(),
    l = so(xx),
    d = A(!1),
    f = Ex(),
    p = A(null),
    m = C(async () => {
      if (!i) return;
      let e = n || void 0,
        t = d.current && r === `mirror`,
        a = t ? Sx : i,
        o = t ? i : Sx;
      return (
        (d.current = !d.current),
        (p.current = Promise.all(
          bx.map((t) => {
            if (!(c && t !== `opacity`))
              return (
                l[t].jump(o[t] ?? Sx[t]),
                new Promise((n) => {
                  let r = { ...e, onComplete: () => n() },
                    i = a[t] ?? o[t];
                  typeof i == `number` && Te(l[t], i, r);
                })
              );
          })
        )),
        p.current
      );
    }, [i, r, n, c]),
    [g, _] = k(!1),
    v = A(!1),
    y = C(async () => {
      e && v.current && (await m(), await f(t ?? 0), y());
    }, [m, f, e, t]),
    b = C(() => {
      v.current || ((v.current = !0), u(() => _(!0)), y());
    }, [y]),
    x = C((e = !0) => {
      (bx.forEach((e) => {
        l[e].stop();
      }),
        bx.forEach((e) => {
          l[e].set(Sx[e]);
        }),
        (d.current = !1),
        e && ((v.current = !1), u(() => _(!1))));
    }, []),
    S = e && i,
    w = C(() => {
      document.hidden ? x(!1) : v.current && ((v.current = !1), b());
    }, [b, x]);
  (h(() => {
    if (S)
      return (
        document.addEventListener(`visibilitychange`, w),
        () => {
          document.removeEventListener(`visibilitychange`, w);
        }
      );
  }, [S, w]),
    h(() => {
      (S && a) || (S ? b() : x());
    }, [b, x, a, S]),
    h(() => () => x(), [x]));
  let T = A(!1),
    E = C(async () => {
      p.current && (await p.current, !T.current && x());
    }, [x]),
    D = C(
      (e) => {
        e.isIntersecting ? ((T.current = !0), b()) : ((T.current = !1), E());
      },
      [b, E]
    );
  Tb(o, D, { enabled: S && a });
  let O = g || !a;
  return s(() => ({ values: l, style: S && O ? Cx : wx }), [S, O]);
}
function Tl(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function El(e, t, n) {
  let { speed: r = 100, offset: i = 0, adjustPosition: a = !1, parallaxTransformEnabled: o } = e,
    s = f.useRef(null),
    c = le(),
    l = f.useCallback(
      (e) => (s.current === null || r === 100 ? 0 : Tl(e, s.current, r, i, a)),
      [r, i, a]
    ),
    { scrollY: u } = ve(),
    d = ue(u, l),
    p = Re(a && s.current === null ? `hidden` : n),
    m = Re(0),
    h = S(wb);
  return (
    tc(
      t,
      (e) => {
        if (e === null || !o) return;
        let t = nc(h, `undefined`, e, null, (e) => {
          ((s.current = e.boundingClientRect.top),
            I.update(() => {
              (d.set(l(u.get())), a && p.set(n ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [a, o]
    ),
    an(() => {
      o && d.set(0);
    }),
    { values: { y: c || !o ? m : d }, style: o ? { ...Cx, visibility: p } : wx }
  );
}
function Dl(e) {
  return typeof e == `object` && !!e;
}
function Ol(e) {
  if (Dl(e)) return e?.transition;
}
function kl(e, t, n, r, i, a) {
  let o = Ol(e);
  return Promise.all(
    bx.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = Dl(e) ? (e?.[s] ?? Sx[s]) : Sx[s];
          if ((ge(u) && (u = u.get()), !R(u))) return c();
          let d = Ne.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (L(i) && !l?.hasAnimated && U.MotionHandoffAnimation) {
            let e = U.MotionHandoffAnimation(i, s, I);
            e && (f = e);
          } else L(i) && U.MotionCancelOptimisedAnimation?.(i, s, I);
          a ? l.set(u) : Te(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function Al(
  { initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: a },
  o,
  c,
  l,
  u
) {
  let d = r ?? e,
    f = i ?? t,
    p = a ?? n,
    [m, h] = ie(),
    g = A({ lastPresence: !1, lastAnimate: f, hasMounted: !1, running: !1 }),
    _ = so(() => {
      let e = d ?? l;
      if (!z(e)) return { values: xx() };
      let t = {};
      for (let n in e) {
        let r = z(e) ? e[n] : void 0;
        R(r) && (t[n] = r);
      }
      return { values: xx(t) };
    });
  tc(
    o,
    (e) => {
      let { hasMounted: t } = g.current;
      if (t && f) return;
      let n = Ne.get(e);
      if (n) {
        Object.assign(g.current, { hasMounted: !0 });
        for (let e in _.values) {
          if (!Sl(e)) continue;
          let t = l?.[e];
          n.setBaseTarget(e, R(t) ? t : Sx[e]);
        }
      }
    },
    [f]
  );
  let v = le();
  tc(o, (e) => {
    if (!c) {
      h?.();
      return;
    }
    if (e === null) return;
    if (m !== g.current.lastPresence) {
      (Object.assign(g.current, { lastPresence: m }),
        m
          ? d &&
            f &&
            (Object.assign(g.current, { running: !0 }),
            kl(f, _, v, o, u).then(() => Object.assign(g.current, { running: !1 })))
          : p
            ? (Object.assign(g.current, { running: !0 }),
              kl(p, _, v, o, u)
                .then(() => Object.assign(g.current, { running: !1 }))
                .then(() => h()))
            : h());
      return;
    }
    let { lastAnimate: t, running: n } = g.current;
    !Zt(f, t) &&
      f &&
      (Object.assign(g.current, { lastAnimate: f }),
      kl(f, _, v, o, u, !n).then(() => Object.assign(g.current, { running: !1 })));
  });
  let y = c && f;
  return s(() => ({ values: _.values, style: y ? Cx : wx }), [y]);
}
function jl(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement; ) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function Ml(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o?.current) continue;
    let c = jl(o.current, document.documentElement) - kx - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function Nl(e, t = 0) {
  return e < t ? `up` : `down`;
}
function Pl(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = rn();
  f.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return Oe((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = Nl(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < Ax) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function Fl(e, t, n) {
  let r = Ml(e, t),
    i = [...Mx],
    a = r[0];
  if (!R(a)) return Nx;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!R(e)) return Nx;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function Il(e) {
  return {
    x: e?.x ?? Sx.x,
    y: e?.y ?? Sx.y,
    scale: e?.scale ?? Sx.scale,
    opacity: e?.opacity ?? Sx.opacity,
    transformPerspective: e?.transformPerspective ?? Sx.transformPerspective,
    rotate: e?.rotate ?? Sx.rotate,
    rotateX: e?.rotateX ?? Sx.rotateX,
    rotateY: e?.rotateY ?? Sx.rotateY,
    skewX: e?.skewX ?? Sx.skewX,
    skewY: e?.skewY ?? Sx.skewY,
    transition: e?.transition ?? void 0,
  };
}
function Ll({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return f.useMemo(
    () => ({
      initial: r ?? Il({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? Il({ opacity: t }),
      exit: i ?? Il(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function Rl(e, t) {
  let n = le(),
    r = Ll(e),
    i = e.styleAppearEffectEnabled,
    a = Cl(i ? r.initial : r.animate, i),
    o = f.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    c = rn(),
    l = f.useRef(),
    u = f.useCallback(async ({ transition: i, ...o }, s) => {
      let c = i ?? r.animate.transition ?? e.transition;
      await l.current;
      let u = Ne.get(t.current);
      l.current = Promise.all(
        bx.map((e) => {
          s && a.values[e].set(r.initial[e] ?? Sx[e]);
          let t = o[e] ?? Sx[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (R(t) && a.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...c, onComplete: () => r() };
                typeof t == `number` && Te(a.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    d = e.animateOnce && o.current.lastAppearState === !0;
  ic(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = o.current;
      t
        ? (o.current.scheduledAppearState = e)
        : ((o.current.scheduledAppearState = void 0),
          (o.current.lastAppearState = e),
          n !== e && u(e ? r.animate : r.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !d,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let p = e.targets && i && !e.scrollDirection;
  return (
    f.useEffect(() => {
      if (!p) return;
      let t = { initial: !0 },
        n = `initial`;
      return Oe((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = Fl(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let l = fe(a.current, s, c);
        if ((e.animateOnce && t[l]) || ((t[l] = !0), n === l)) return;
        n = l;
        let d = gy(r)[l];
        d && u(d);
      });
    }, [c, p]),
    Pl(e.scrollDirection, (e) => void u(e ?? r.animate), { enabled: i, repeat: !e.animateOnce }),
    an(() => {
      if (i && (e.targets || e.scrollDirection))
        for (let e of bx) a.values[e].set(r.initial?.[e] ?? Sx[e]);
    }),
    s(() => ({ values: a.values, style: i ? Cx : wx }), [i])
  );
}
function zl(e, t) {
  let n = f.useRef({});
  f.useEffect(() => {
    if (t !== void 0)
      for (let r of Ug(e)) {
        let i = e[r],
          a,
          o;
        function s() {
          let e = n.current[r];
          (e && e.stop(),
            (n.current[r] = we({
              keyframes: [i.get(), o],
              velocity: i.getVelocity(),
              ...t,
              restDelta: 0.001,
              onUpdate: a,
            })));
        }
        i.attach((e, t) => ((o = e), (a = t), I.postRender(s), i.get()));
      }
  }, [JSON.stringify(t)]);
}
function Bl(e, t) {
  let n = Ix();
  return {
    inputRange: Ml(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of bx) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function Vl(e) {
  let t = Ix();
  for (let { target: n } of e) for (let e of bx) t[e]?.push(n[e]);
  return t;
}
function Hl(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: r,
    spring: i,
    transformViewportThreshold: a = 0,
  },
  o
) {
  let s = le(),
    c = Cl(Fx(r, s), t),
    l = !t || !r,
    u = e === `onScrollTarget`,
    d = rn();
  return (
    n(() => {
      if (!l && u)
        return Oe((e, { y: t }) => {
          if (!r[0] || (r[0].ref && !r[0].ref.current)) return;
          let { inputRange: n, effectKeyOutputRange: i } = Bl(r, a * t.containerLength);
          if (n.length !== 0)
            for (let e of bx)
              (s && e !== `opacity`) ||
                (n.length === i[e].length &&
                  i[e][0] !== void 0 &&
                  c.values[e].set(fe(t.current, n, i[e])));
        });
    }, [s, u, a, r, l]),
    tc(
      o,
      (t) => {
        if (l || u || t === null) return;
        let n = Vl(r);
        return Oe(
          (e, { y: t }) => {
            for (let e of bx)
              (s && e !== `opacity`) ||
                (Lx.length === n[e].length &&
                  n[e][0] !== void 0 &&
                  c.values[e].set(fe(t.progress, Lx, n[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [d, s, e, u, r, l]
    ),
    zl(c.values, i),
    an(() => {
      if (l) return;
      let e = Fx(r, s);
      for (let t of bx) c.values[t].set(e?.[t] ?? Sx[t]);
    }),
    f.useMemo(() => ({ values: c.values, style: t ? Cx : wx }), [t])
  );
}
function Ul(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function Wl(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (n === `__targetOpacity` || n === `__perspectiveFX` || n === `__smartComponentFX`) continue;
    let r = ll(n);
    if (r) {
      for (let i of zx)
        if (Rx[i]?.has(r)) {
          t[i][r] = gy(e)[n];
          break;
        }
    } else t.forwardedProps[n] = gy(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = Ul(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = Ul(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function Gl(e) {
  return z(e) && Hx in e;
}
function Kl(e, t) {
  if (!e || !z(e)) return t;
  for (let n in e) {
    let r = e[n];
    ge(r) && Sl(n) && R(r.get()) && t[n].push(r);
  }
}
function ql(e) {
  return L(e) || Array.isArray(e);
}
function Jl() {
  return f.useContext(Wx);
}
function Yl(e) {
  let t = gs(e),
    { layoutIdKey: n, duplicatedFrom: r, ...i } = e;
  return { layoutId: t, ...i };
}
function Xl(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function Zl() {
  if (j === void 0 || Xx)
    return /* @__PURE__ */ O(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw Qx;
}
function Ql({ children: e }) {
  return S(eS)
    ? /* @__PURE__ */ O(w, { children: e })
    : /* @__PURE__ */ O(y, { fallback: $x, children: e });
}
function $l() {
  return /* @__PURE__ */ O(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function eu(e, t) {
  if (!lt || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  Fn(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function tu(...e) {
  console.error(...e);
}
function nu() {
  return W.current() !== W.canvas;
}
function ru({ getErrorMessage: e, fallback: t, children: n }) {
  return nu()
    ? /* @__PURE__ */ O(iu, {
        fallback: t,
        children: /* @__PURE__ */ O(nS, { fallback: t, getErrorMessage: e, children: n }),
      })
    : n;
}
function iu({ children: e, fallback: t = tS }) {
  return j === void 0
    ? /* @__PURE__ */ O(y, { fallback: t, children: e })
    : /* @__PURE__ */ O(Ql, { children: e });
}
function au() {
  return /* @__PURE__ */ O(`div`, {
    style: {
      padding: `12px 16px`,
      borderWidth: 1,
      borderRadius: 6,
      borderStyle: `solid`,
      borderColor: `rgba(149, 149, 149, 0.15)`,
      backgroundColor: `rgba(149, 149, 149, 0.1)`,
      fontSize: 12,
      color: `#a5a5a5`,
    },
    children: `Code component disabled`,
  });
}
function ou() {
  return f.useContext(iS);
}
function su() {
  let e = ou();
  return f.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0; ) t = t.parent;
    return t;
  }, [e]);
}
function cu({ children: e, scopeId: t, nodeId: n }) {
  let r = ou(),
    i = f.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return /* @__PURE__ */ O(iS.Provider, { value: i, children: e });
}
function lu(e, t) {
  return `${aS}${e}:${t}`;
}
function uu(e, t) {
  return fu(`component`, e, t);
}
function du(e, t) {
  return fu(`override`, e, t);
}
function fu(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor → open Quick Actions (press Cmd+K or Ctrl+K) → paste this: ${lu(t, n)} → click “Show Layer”.`;
}
function pu(e, t, n, r, i, a) {
  let o = hu(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function mu(e, t, n, r) {
  return hu(e, t, n, r);
}
function hu(e, t, n, r) {
  return !!(B(n) || (n === 1 && r && e === t));
}
function gu(e, t, n, r, i, a) {
  let o = ou();
  if (B(t) || B(n)) return /* @__PURE__ */ O(rS, { children: e });
  let { disableCustomCode: s } = Jx();
  return s && r
    ? /* @__PURE__ */ O(au, {})
    : (pu(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = /* @__PURE__ */ O(ru, {
          getErrorMessage: uu.bind(null, t, n),
          fallback: null,
          children: e,
        })),
      i && (e = /* @__PURE__ */ O(cu, { scopeId: t, nodeId: n, children: e })),
      e);
}
function _u() {
  if (cS !== void 0 || j === void 0) return;
  let e = U.matchMedia(`(any-hover: hover)`);
  ((cS = e.matches),
    e.addEventListener(`change`, function (e) {
      let t = e.matches;
      if (t !== cS) {
        cS = t;
        for (let e of lS) e();
      }
    }));
}
function vu() {
  return (_u(), yu());
}
function yu() {
  return cS ?? !1;
}
function bu(e) {
  return (
    lS.add(e),
    _u(),
    () => {
      lS.delete(e);
    }
  );
}
function xu(e = !1) {
  let [t, n] = k(e);
  return (
    pv(function () {
      function e(e = !0) {
        let t = yu();
        e ? u(() => n(t)) : n(t);
      }
      let t = bu(e);
      return (e(!1), t);
    }, []),
    t
  );
}
function Su(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function Cu(e) {
  return !(!e || e.placement || e.alignment);
}
function wu(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      H(e);
  }
}
function Tu(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${wu(t)}, -100%`;
    case `right`:
      return `0%, ${wu(t)}`;
    case `bottom`:
      return `${wu(t)}, 0%`;
    case `left`:
      return `-100%, ${wu(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function Eu(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n; ) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(`data-framer-portal-id`)) {
      let e = n.getAttribute(gS);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function Du(e) {
  let { registerCursors: t } = S(uS),
    r = so(() => e),
    i = te();
  n(() => t(r, i), [t, i]);
}
function Ou(e) {
  return !!(e && typeof e == `object` && vS in e);
}
function ku(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function Au() {
  return W.current() === W.canvas;
}
function ju(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function Mu(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function Nu(e, t, n, r) {
  if (L(e)) {
    let i = ju(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    try {
      let { routeId: e } = Xi(t.routes, o, o === ``, r);
      return t.getRoute(e);
    } catch {
      return;
    }
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function Pu(e) {
  return L(e) && e.startsWith(`data:${TS}`);
}
function Fu(e) {
  if (Pu(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(17),
        r = t.searchParams,
        i = r.has(xS) ? r.get(xS) : void 0,
        a,
        o = r.get(SS),
        s = r.get(CS),
        c = r.get(wS);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        { target: n === `none` ? null : n, element: i === `none` ? void 0 : i, collectionItem: a }
      );
    } catch {
      return;
    }
}
function Iu(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = Fu(e);
    if (!n?.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function Lu(e) {
  if (!Pu(e)) return e;
  let t = Fu(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: Ru(i) };
}
function Ru(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function zu({ children: e }) {
  return /* @__PURE__ */ O(ES.Provider, { value: void 0, children: e });
}
function Bu(e, t, n, i, a, o) {
  let c = S(ES),
    l = su(),
    u = s(() => ({ scopeId: t, nodeId: n, furthestExternalComponent: l }), [t, n, l]),
    d = en(),
    f = nn(),
    { locales: p } = wr(),
    m = s(() => {
      let e = Ou(i) ? i : Lu(i);
      if (e) return Nu(e, d, f, p);
    }, [f, i, d, p]),
    h = !!(!Au() && c?.nodeId && u.nodeId),
    g = C(
      (e) => {
        a.href &&
          (e.preventDefault(),
          e.stopPropagation(),
          cr(e) ? Uu(a.href, ``, `_blank`) : m ? a.navigate?.() : Uu(a.href, a.rel, a.target));
      },
      [a, m]
    ),
    _ = C(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), Uu(a.href, ``, `_blank`));
      },
      [a]
    ),
    y = C(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          m ? a.navigate?.() : Uu(a.href, a.rel, a.target));
      },
      [a, m]
    );
  tc(
    o,
    (e) => {
      e !== null && h && (e.dataset.hydrated = `true`);
    },
    [h]
  );
  let b = e;
  return (
    h &&
      (r.forEach(e, (e) => {
        Hu(e) &&
          (V(
            Vu(c),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          V(
            Vu(u),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          bS.collectNestedLink(c, u));
      }),
      (b = r.map(e, (e) => {
        if (!Hu(e)) return e;
        let t = Wu(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: g,
            onAuxClick: _,
            onKeyDown: y,
            as: r.as && Wu(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return v(t, { ...i, ref: a }, n);
      }))),
    /* @__PURE__ */ O(ES.Provider, { value: u, children: b })
  );
}
function Vu(e) {
  return !B(e?.nodeId);
}
function Hu(e) {
  return b(e) && (Wu(e.type) !== e.type || Wu(e.props.as) !== e.props.as);
}
function Uu(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function Wu(e) {
  return e === `a` ? `span` : Ie(e) && me(e) === `a` ? _e.span : e;
}
function Gu(e) {
  e &&
    I.read(() => {
      let t = document.getElementById(e);
      if (!t) return;
      let n = getComputedStyle(t),
        r = n.getPropertyValue(`--selection-color`).trim(),
        i = n.getPropertyValue(`--selection-background-color`).trim();
      I.render(() => {
        let t = document.querySelectorAll(`[data-framer-portal-id="${e}"]`);
        t.length !== 0 &&
          (r && t.forEach((e) => e.style.setProperty(DS, r)),
          i && t.forEach((e) => e.style.setProperty(OS, i)));
      });
    });
}
function Ku(e) {
  return [
    `[data-framer-portal-id="${e}"] * ::selection {
    color: var(${DS});
    background-color: var(${OS}, highlight);
}`,
  ];
}
function qu({ triggerId: e, children: t }) {
  return (
    f.useLayoutEffect(() => {
      e && Gu(e);
    }, [e]),
    t
  );
}
function Ju(e) {
  return `${e?.x}-${e?.y}`;
}
function Yu(e) {
  switch (e) {
    case `top`:
      return `bottom`;
    case `right`:
      return `left`;
    case `bottom`:
      return `top`;
    case `left`:
      return `right`;
    default:
      H(e);
  }
}
function Xu(e, t, n, r = 0) {
  let i = Math.max(e, r);
  if (e < i) return i;
  let a = t + r;
  return i + a > n ? n - a : i;
}
function Zu(e, t, n) {
  switch (e) {
    case `top`:
    case `bottom`:
      return t.y < 0 || t.y + t.height > n.height ? `y` : void 0;
    case `left`:
    case `right`:
      return t.x < 0 || t.x + t.width > n.width ? `x` : void 0;
    default:
      H(e);
  }
}
function Qu(e, t, n, r) {
  switch (Zu(t, e, r)) {
    case `x`:
      return { placement: Yu(t), x: n.x * -1, y: n.y };
    case `y`:
      return { placement: Yu(t), x: n.x, y: n.y * -1 };
    default:
      return { placement: t, x: n.x, y: n.y };
  }
}
function $u(e, t, n, r, i, a, o) {
  let s = X.rebaseRectOnto(t, e, n, r),
    c = { x: s.x + i.x, y: s.y + i.y, width: t.width, height: t.height };
  if (!a) return [n, c];
  let { x: l, y: u, placement: d } = Qu(c, n, i, a),
    f = X.rebaseRectOnto(t, e, d, r);
  return [
    d,
    {
      x: Xu(f.x + l, t.width, a.width, o),
      y: Xu(f.y + u, t.height, a.height, o),
      width: t.width,
      height: t.height,
    },
  ];
}
function ed(e, t, n) {
  return AS.containsPoint([t, ...n], e) ? t : e;
}
function td(e) {
  return {
    constrainX: (t) => Math.min(Math.max(t, e.x + jS), e.x + e.width - jS),
    constrainY: (t) => Math.min(Math.max(t, e.y + jS), e.y + e.height - jS),
  };
}
function nd({ x: e, y: t }, n, r, { constrainX: i, constrainY: a }) {
  let [o, s, c, l] = X.points(r);
  switch (n) {
    case `left`: {
      let n = { x: i(e - MS), y: t };
      return [n, ed(l, s, [n, c]), ed(c, o, [n, l])];
    }
    case `right`: {
      let n = { x: i(e + MS), y: t };
      return [n, ed(s, l, [n, o]), ed(o, c, [n, s])];
    }
    case `top`: {
      let n = { x: e, y: a(t - MS) };
      return [n, ed(s, o, [n, l]), ed(l, c, [n, s])];
    }
    case `bottom`: {
      let n = { x: e, y: a(t + MS) };
      return [n, ed(o, s, [n, c]), ed(c, l, [n, o])];
    }
    default:
      H(n);
  }
}
function rd(e, t) {
  switch (e) {
    case `left`:
      return `${Math.min(t.y, 0)}px auto auto 0px`;
    case `right`:
      return `${Math.min(t.y, 0)}px 0px auto auto`;
    case `top`:
      return `0px auto auto ${Math.min(t.x, 0)}px`;
    case `bottom`:
      return `auto auto 0px ${Math.min(t.x, 0)}px`;
    default:
      H(e);
  }
}
function id(e, t, n, r, i) {
  let a = Math.min(i.x, r.x),
    o = Math.min(i.y, r.y),
    s = X.merge(r, i),
    c = nd({ x: e, y: t }, n, i, td(r))
      .map((e) => `${e.x - a}px ${e.y - o}px`)
      .join(`, `);
  return {
    height: `${s.height}px`,
    width: `${s.width}px`,
    clipPath: `polygon(${c})`,
    inset: rd(n, X.delta(r, i)),
  };
}
function ad(e) {
  switch (e) {
    case `start`:
      return 0;
    case `center`:
      return 0.5;
    case `end`:
      return 1;
    default:
      H(e);
  }
}
function od(e = `bottom`, t = `center`) {
  switch (e) {
    case `top`:
      return { originX: ad(t), originY: 1 };
    case `right`:
      return { originX: 0, originY: ad(t) };
    case `bottom`:
      return { originX: ad(t), originY: 0 };
    case `left`:
      return { originX: 1, originY: ad(t) };
    default:
      H(e);
  }
}
function sd(e) {
  let t = e.current,
    n = { position: `absolute`, scrolls: !1 };
  for (; t; ) {
    if (
      t?.tagName === `BODY` ||
      (getComputedStyle(t)?.position === `fixed` && (n.position = `fixed`),
      (t.scrollWidth > t.clientWidth || t.scrollHeight > t.clientHeight) && (n.scrolls = !0),
      n.scrolls && n.position === `fixed`)
    )
      return n;
    t = t.parentElement;
  }
  return n;
}
function cd(e) {
  return (I.read(e, !0), () => ye(e));
}
function ld(e) {
  let t = 0,
    n = 0;
  return (r, i, a, o) => {
    e.current?.style &&
      ((t = o?.clientX ?? t),
      (n = o?.clientY ?? n),
      Object.assign(e.current.style, id(t, n, a, r, i)));
  };
}
function ud(e, t, n, r, i) {
  e.current &&
    Object.assign(e.current.style, {
      position: t,
      visibility: `visible`,
      left: (n?.x ?? 0) + r + `px`,
      top: (n?.y ?? 0) + i + `px`,
    });
}
function dd(e, t, n, { safeArea: r, onDismiss: i }) {
  let a = so(() => /* @__PURE__ */ new Set()),
    o = f.useContext(NS),
    [s, c] = ie();
  return (
    f.useEffect(() => {
      if (s) {
        if (!t.current) return;
        ((t.current.style.pointerEvents = ``), o.add(t.current));
      } else {
        if (!t.current) return;
        ((t.current.style.pointerEvents = `none`), o.delete(t.current), c());
      }
    }, [s, c, t, o]),
    f.useEffect(() => {
      if (!r) {
        let e = (e) => {
          e.key === `Escape` && i();
        };
        return (U.addEventListener(`keyup`, e), () => U.removeEventListener(`keyup`, e));
      }
      let o;
      function s() {
        if (o && a.size === 0) {
          for (let r of document.elementsFromPoint(o.x, o.y))
            if (r === e.current || r === t.current || r === n.current) return;
          i();
        }
      }
      function c(e) {
        ((o = e), I.read(s));
      }
      return (
        U.addEventListener(`mousemove`, c),
        () => {
          (U.removeEventListener(`mousemove`, c), ye(s));
        }
      );
    }, [i, r, e, n, t]),
    a
  );
}
function fd({
  placement: e,
  alignment: t,
  offset: n,
  collisionDetectionSize: r,
  collisionDetectionPadding: i,
}) {
  return (a, o) => $u(a, o, e, t, n, r, i);
}
function pd(e, t) {
  return so(() => {
    let { originX: n, originY: r } = od(e, t),
      i = { x: M(n), y: M(r) };
    return [
      i,
      (e) => {
        let n = od(e, t);
        (i.x.set(n.originX), i.y.set(n.originY));
      },
    ];
  });
}
function md(e, { x: t, y: n }) {
  if (!e || !Po(e) || !No(e) || (!z(e.props.style) && !B(e.props.style))) return null;
  let r = { ...e.props.style, originX: t, originY: n };
  return f.cloneElement(e, { style: r });
}
function hd(e, t) {
  if (t || B(e)) {
    let e = document.querySelector(`#template-overlay`) ?? document.querySelector(`#overlay`);
    if (e) return e;
  }
  return (L(e) ? document.querySelector(e) : void 0) || document.body;
}
function gd({
  alignment: e,
  placement: t,
  safeArea: n,
  offsetX: r,
  offsetY: i,
  anchorRef: a,
  className: o,
  children: s,
  portalSelector: c,
  zIndex: l,
  collisionDetection: u = !1,
  collisionDetectionPadding: d,
  onDismiss: p,
  ...m
}) {
  let h = f.useRef(null),
    g = f.useRef(null),
    _ = f.useRef(null),
    [v, y] = pd(t, e);
  f.useLayoutEffect(() => {
    if (!Qs(a) || !_.current || !t || !e) return;
    let o = { x: r ?? 0, y: i ?? 0 },
      s,
      c = !1,
      l = !1,
      f,
      p,
      m,
      v,
      b,
      x = 0,
      S = 0,
      C = sd(a),
      w = C.position,
      T = _.current.getBoundingClientRect(),
      E = fd({
        placement: t,
        alignment: e,
        offset: o,
        collisionDetectionSize: u ? { width: U.innerWidth, height: U.innerHeight } : void 0,
        collisionDetectionPadding: d,
      }),
      D = () => {
        c || (ud(h, w, m, x, S), n && b(f, m, p, v), (v = void 0));
      },
      O = () => {
        ((b = ld(g)), v ? D() : ud(h, w, m, x, S), (l = !0));
      },
      ee = () => {
        c || y(p);
      },
      k = () => {
        if (!E || c) return;
        (w === `fixed` ? ((x = 0), (S = 0)) : ((x = U.scrollX), (S = U.scrollY)),
          (f = a.current.getBoundingClientRect()));
        let e = E(f, T);
        ((p = e[0]), (m = e[1]));
      };
    if ((k(), ee(), O(), C.scrolls && (s = cd(k)), !n))
      return () => {
        (s?.(), (c = !0));
      };
    let te = (e) => {
        ((v = e), l && (I.read(k, !1, !0), I.update(ee, !1, !0), I.render(D, !1, !0)));
      },
      A = a.current;
    return (
      A.addEventListener(`mousemove`, te),
      () => {
        (A.removeEventListener(`mousemove`, te), s?.(), (c = !0));
      }
    );
  }, [n, t, e, r, i, a, u, d, y]);
  let b = dd(a, h, g, { safeArea: n, onDismiss: p }),
    C = S(Yy);
  return x.createPortal(
    /* @__PURE__ */ ee(_e.div, {
      ref: h,
      className: o,
      style: {
        top: 0,
        left: 0,
        visibility: `hidden`,
        width: `auto`,
        height: `auto`,
        position: `absolute`,
        zIndex: l,
      },
      ...m,
      children: [
        n
          ? /* @__PURE__ */ O(`div`, {
              ref: g,
              style: { position: `absolute` },
              "data-safearea": !0,
            })
          : /* @__PURE__ */ O(`div`, {
              style: { position: `fixed`, inset: 0 },
              "aria-hidden": !0,
              onClick: p,
            }),
        /* @__PURE__ */ O(NS.Provider, {
          value: b,
          children: /* @__PURE__ */ O(zu, {
            children: /* @__PURE__ */ O(kS, {
              triggerId: a.current?.id ?? void 0,
              children: /* @__PURE__ */ O(`div`, { ref: _, children: md(s, v) }),
            }),
          }),
        }),
      ],
    }),
    hd(c, C)
  );
}
function _d(e) {
  FS = e;
}
function vd() {
  return FS;
}
function yd(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : yd(e.parentElement, t)
      : null;
}
function bd({ children: e }) {
  return /* @__PURE__ */ O(Ql, { children: e });
}
function xd(e) {
  return T(function (t, n) {
    return /* @__PURE__ */ O(bd, { children: /* @__PURE__ */ O(e, { ...t, ref: n }) });
  });
}
function Sd(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return wd(e, t, o, s, a, c, l, i, r);
}
function Cd(e, t, n, r) {
  if (e.routes && e.getRoute && ju(t))
    try {
      let [i, a] = t.split(`#`, 2);
      V(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      V(o !== void 0, `A href must have a defined pathname.`);
      let s = o === ``,
        { routeId: c, pathVariables: l, localeId: u } = Xi(e.routes, o, s, r),
        d = e.getRoute(c);
      if (d)
        return {
          routeId: c,
          route: d,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, l),
          locale: u ? r?.find(({ id: e }) => e === u) : void 0,
        };
    } catch {}
}
function wd(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = Fi(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function Td() {
  let e = S(LS),
    t = nn()?.pathVariables;
  return e || t;
}
function Ed(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(IS)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function Dd() {
  return !!aa(`ss-only-routes`);
}
function Od(e) {
  if (j === void 0) return;
  let t = j.location.href,
    n;
  try {
    n = new URL(e, t);
  } catch {
    return;
  }
  return ((n.hash = ``), n);
}
function kd(e) {
  return ia(`rewrite`, e)?.description === `external`;
}
function Ad() {
  if (!Jx().checkServerSideRouter) return !1;
  if (VS === void 0) {
    let e = Dd();
    ((HS = !e && er() && rr() < 16.4), (VS = e || HS));
  }
  return VS;
}
function jd(e, t) {
  if (e.type === `opaqueredirect` || !e.ok) return { decision: `server` };
  let n = e.headers.get(`Framer-Location`);
  if (n)
    try {
      return { decision: `server`, redirectUrl: new URL(n, t).href };
    } catch {
      return { decision: `server` };
    }
  let r = e.headers.get(`Framer-Site-Id`);
  return r === null
    ? { decision: kd(e.headers.get(`server-timing`)) ? `server` : `client` }
    : { decision: r === vd() ? `client` : `server` };
}
async function Md(e) {
  let t = await fetch(e, {
    method: `HEAD`,
    redirect: `manual`,
    credentials: `same-origin`,
    headers: { "Framer-Navigation": `true` },
  });
  if (
    (HS &&
      t.type !== `opaqueredirect` &&
      t.status !== 0 &&
      t.ok &&
      !t.headers.has(`Framer-Location`) &&
      ((HS = !1), ia(`ss-only-routes`, t.headers.get(`server-timing`)) || (VS = !1)),
    t.status >= 500)
  )
    throw Error(`Transient response status ${t.status}`);
  return jd(t, e);
}
function Nd(e, t) {
  RS.has(e) && RS.set(e, t);
}
async function Pd(e) {
  await qn(zS);
  try {
    Nd(e, await Md(e));
  } catch {
    RS.delete(e);
  }
}
async function Fd(e) {
  try {
    let t = await Md(e);
    return (Nd(e, t), t);
  } catch {
    return (Pd(e), { decision: `server` });
  }
}
function Id(e) {
  if (!Ad()) return;
  let t = Od(e);
  if (!t || t.origin !== j.location.origin) return;
  let n = t.href;
  RS.has(n) || RS.set(n, Fd(n));
}
function Ld(e) {
  let t = Od(e);
  if (!t) return;
  let n = RS.get(t.href);
  return n && !Ye(n) ? n : void 0;
}
async function Rd(e) {
  let t = Od(e);
  if (!t) return;
  let n = RS.get(t.href);
  if (n) return Ye(n) ? Promise.race([n, qn(BS).then(() => void 0)]) : n;
}
function zd() {
  let e = d.connection || d.mozConnection || d.webkitConnection || {},
    t = d.deviceMemory && d.deviceMemory < GS,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? KS : qS));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(l, { threshold: WS }),
    s = 0;
  async function c(e, t) {
    if (r) return;
    Id(e.navigationUrl);
    let { id: n, preload: a } = e,
      l = XS.get(n);
    if (!l?.size || YS.has(n)) return;
    if (s >= i) {
      setTimeout(() => c(e, t), US);
      return;
    }
    (++s, YS.add(n));
    let u = a()?.catch(() => {});
    (o.unobserve(t), JS.delete(t));
    for (let e of l) (o.unobserve(e), JS.delete(e));
    (l.clear(), XS.delete(n), await u, --s);
  }
  function l(e) {
    for (let t of e) {
      let e = t.target,
        n = JS.get(e);
      if (!n || YS.has(n.id)) {
        (o.unobserve(e), JS.delete(e));
        continue;
      }
      let r = n.id,
        i = XS.get(r),
        a = XS.get(r)?.size ?? 0;
      t.isIntersecting
        ? (i ? i.add(e) : XS.set(r, /* @__PURE__ */ new Set([e])), setTimeout(() => c(n, e), US))
        : (i && i.delete(e), a <= 1 && XS.delete(r));
    }
  }
  return (e, t, n, r) => {
    if (!YS.has(n))
      return (
        JS.set(e, { id: n, preload: t, navigationUrl: r }),
        o.observe(e),
        () => {
          (JS.delete(e), o.unobserve(e));
        }
      );
  };
}
function Bd(e, t) {
  let n = ju(e),
    r = {
      href: e === `` || Mu(e, n) ? e : `https://${e}`,
      target: Vd(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = gr(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function Vd(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function Hd(e, t) {
  console.warn(
    Ze(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function Ud(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return Hd(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return Ye(i) ? i.catch(Hd) : i;
  } catch (e) {
    Hd(e);
  }
}
function Wd(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = Ud(o, r, n);
      Ye(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function Gd() {
  let e = Kn();
  return C((t, n, r, i = []) => Wd(t, n, r, e, i), [e]);
}
function Kd({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = Kn();
  return C(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = Ou(r) ? r : Lu(r);
      if (!Ou(c))
        return Fn(
          `published_site_click`,
          {
            ...s,
            href: o ? qd(o) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = a?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (L(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (Ye(n) ? await n : n) ?? null;
        }
      }
      return Fn(
        `published_site_click`,
        {
          ...s,
          href: o ? qd(o) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`
      );
    },
    [e, t, n, r, i, a]
  );
}
function qd(e) {
  try {
    let t = new URL(e, U.document.baseURI);
    return t.origin === U.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function Jd(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function Yd(e, t, n) {
  return async (r) => {
    let i = cr(r),
      a = yd(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    s
      ? (r.preventDefault(), n(c))
      : (await V_({
          priority: `user-blocking`,
          ensureContinueBeforeUnload: !0,
          continueAfter: `paint`,
        }),
        c());
  };
}
function Xd(e, t, n) {
  return async (r) => {
    let i = await Zd(t);
    i.decision === `client` ? n(r) : Qd(t ?? e, r, i.redirectUrl);
  };
}
async function Zd(e) {
  return !e || !Ad()
    ? { decision: `client` }
    : Ld(e) || (Id(e), (await Rd(e)) ?? { decision: `server` });
}
async function Qd(e, t, n) {
  (await V_({ priority: `user-blocking`, ensureContinueBeforeUnload: !0, continueAfter: `paint` }),
    t?.(),
    j.location.assign($d(e, n)));
}
function $d(e, t) {
  if (!t) return e;
  try {
    let n = new URL(e, j.location.href),
      r = new URL(t);
    return (n.hash && !r.hash && (r.hash = n.hash), r.href);
  } catch {
    return t;
  }
}
function ef(e) {
  let t = Mi(e);
  if (t && j.location.pathname === t) {
    let e = new URL(j.location.href);
    return ((e.pathname = `${t}/`), e.href);
  }
  return j.location.href;
}
function tf(e, t, n) {
  if (t || j === void 0) return;
  let r = ef(n),
    i;
  try {
    i = new URL(e, r);
  } catch {
    return;
  }
  let a = new URL(r);
  if (i.origin === a.origin && (i.pathname !== a.pathname || i.search !== a.search)) return i.href;
}
function nf(e, t, n, r, i, a, o, s) {
  if (!n) return Bd(e, r);
  let c = Cd(t, e, s, o);
  if (!c) return Bd(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return Bd(e, r);
  let m = Fi(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !ut,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = Vd(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = tf(m, g, t.siteCanonicalURL),
    v = { pathVariables: f, locale: p },
    y = Xd(m, _, (e) =>
      Jd(
        t,
        l,
        () =>
          i(l, v, { priority: `user-blocking`, yieldBeforePreload: !1, shouldLoadRouteData: !g }),
        d,
        f,
        r.smoothScroll,
        e
      )
    );
  return {
    href: m,
    target: h,
    onClick: Yd(m, r.trackLinkClick, y),
    navigate: y,
    "data-framer-page-link-current":
      (n && Ed(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () =>
      i(l, v, { priority: `background`, yieldBeforePreload: !0, shouldLoadRouteData: !g }),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
    _navigationUrl: _,
  };
}
function rf(e, t, n) {
  let r = af(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (Be(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (Be(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function af(e, t) {
  let n = z(e) ? e : void 0,
    r = n && !Ue(n),
    i = t && !Ue(t);
  if (r || i) return { ...n, ...t };
}
function of(e, t, n) {
  if (!(t && Xn())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: sf } : { ...i, onTap: r }) : e;
}
function sf(e) {
  let t = yd(e.target);
  t && t.getAttribute(`target`) !== `_blank` && e.preventDefault();
}
function cf(e, t, n, r, i, a) {
  let o = Ou(e) ? e : Lu(e);
  if (!Ou(o)) return L(e) ? Bd(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let s = t.getRoute(t.currentRouteId),
    {
      webPageId: c,
      hash: l,
      pathVariables: u,
      hashVariables: d,
      unresolvedHashSlugs: f,
      unresolvedPathSlugs: p,
    } = o,
    m = t.getRoute(c),
    h = p || f ? a?.(p, f) : void 0;
  if (Ye(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash);
  return Fi(m, {
    currentRoutePath: s?.path,
    currentRoutePathLocalized: s?.pathLocalized,
    currentPathVariables: t.currentPathVariables,
    hash: l,
    pathVariables: g,
    hashVariables: _,
    relative: !1,
    preserveQueryParams: t.preserveQueryParams,
    onlyHash: r,
    siteCanonicalURL: t.siteCanonicalURL,
    localeId: i?.id,
    localeSlug: i?.slug,
  });
}
function lf({ EditorBar: e, fast: t = !1 }) {
  let n = S($S),
    r = l(pt, t ? nC : rC, ht),
    i = Jx(),
    a = s(() => {
      let e = {},
        t;
      for (t in i)
        i.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = i[t]);
      return e;
    }, [i]);
  return !e || !n || !r
    ? null
    : /* @__PURE__ */ O(tC, {
        children: /* @__PURE__ */ O(y, {
          children: /* @__PURE__ */ O(e, { framerSiteId: n, features: a }),
        }),
      });
}
function uf(e, t) {
  return e.replace(U_, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function df({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = A(),
    i = A(),
    a = A(t),
    o = A(null);
  ((a.current = t),
    h(() => {
      e && ((r.current ??= /* @__PURE__ */ new Set()), r.current.add(e), i.current?.(e));
    }, [e]));
  let [s] = k(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? /* @__PURE__ */ new Set(),
      getCurrentRoutePath: () =>
        a.current ? pf(a.current, a.current.currentRouteId, a.current.currentPathVariables) : ``,
      resolveRoute: (e) => (a.current ? pf(a.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        i.current = e;
      },
      sendTrackingEvent: async (e) => {
        a.current && ff(a.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: o,
  }));
  return /* @__PURE__ */ O(iC.Provider, { value: s, children: n });
}
async function ff(e, t) {
  if (!In(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    Fn(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function pf(e, t, n) {
  let r = e.getRoute(t);
  return r?.path ? (n ? uf(r.path, n) : r.path) : ``;
}
function mf(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function hf() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((aC = e.timeZone), (oC = e.locale));
}
function gf({
  routeId: e,
  url: t,
  pathVariables: n,
  localeId: r,
  contentLocaleId: i,
  canonicalPathVariables: a,
}) {
  ui(
    {
      routeId: e,
      pathVariables: n,
      localeId: r,
      paginationInfo: ti()?.paginationInfo,
      contentLocaleId: i,
      canonicalPathVariables: a,
    },
    t
  );
}
function _f(e, t, n) {
  let { path: r } = t;
  if (!r) return;
  let {
      historyPath: i,
      hash: a,
      pathVariables: o,
      localeId: s,
      currentRoutePath: c,
      contentLocaleId: l,
      canonicalPathVariables: u,
    } = n,
    d = c !== void 0 && c === r,
    f = ti();
  ui(
    {
      routeId: e,
      hash: a,
      pathVariables: o,
      contentLocaleId: l,
      canonicalPathVariables: u,
      localeId: s,
      queryParamBackAnchorSearch: d ? f?.queryParamBackAnchorSearch : void 0,
    },
    i
  );
}
function vf(e, t, n, r) {
  let i = ti();
  t.path &&
    i?.hash !== n.hash &&
    (r?.(),
    ui(
      {
        routeId: e,
        hash: n.hash,
        pathVariables: n.pathVariables,
        localeId: n.localeId,
        queryParamBackAnchorSearch: i?.queryParamBackAnchorSearch,
        paginationInfo: i?.paginationInfo,
        contentLocaleId: i?.contentLocaleId,
        canonicalPathVariables: i?.canonicalPathVariables,
      },
      Fi(t, n)
    ));
}
function yf() {
  return rr() >= 17 ? uC : lC;
}
function bf(e = Ef) {
  let t = (e) => {
    e.persisted && kf();
  };
  er() && (j.addEventListener(`pageshow`, t), (cC = Date.now() - yf()));
  let n = xf(),
    r = Df(e);
  return function () {
    (j.removeEventListener(`pageshow`, t), n(), r());
  };
}
function xf() {
  let e = j.history.scrollRestoration;
  return (
    (j.history.scrollRestoration = `manual`),
    function () {
      j.history.scrollRestoration = e;
    }
  );
}
function Sf(e) {
  return z(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function Cf() {
  return { x: j.scrollX, y: j.scrollY };
}
function wf() {
  let e = ti();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (Sf(t)) return t;
}
function Tf(e) {
  let t = ti();
  t && (ci({ ...t, scrollPosition: e }), er() && (cC = Date.now()));
}
function Ef(e, t = !1) {
  let n = wf();
  if (!(n && n.x === e.x && n.y === e.y)) {
    if (er() && !t) {
      let e = yf();
      if (Date.now() - cC < e) return;
    }
    Tf(e);
  }
}
function Df(e) {
  let t = () => {
      e(Cf());
    },
    n = () => {
      e(Cf(), !0);
    },
    r = () => {
      document.visibilityState === `hidden` && n();
    };
  (document.addEventListener(`visibilitychange`, r), j.addEventListener(`pagehide`, n));
  let i = () => {
    (document.removeEventListener(`visibilitychange`, r), j.removeEventListener(`pagehide`, n));
  };
  if (!(`onscrollend` in j)) {
    let e = Of(t);
    return function () {
      (i(), e());
    };
  }
  return (
    j.addEventListener(`scrollend`, t),
    function () {
      (i(), j.removeEventListener(`scrollend`, t));
    }
  );
}
function Of(e) {
  let t, n;
  function r() {
    (clearTimeout(t), (t = void 0), (n = void 0));
  }
  let i = () => {
      let t = n;
      (r(), t !== void 0 && ni(ti()) === t && e());
    },
    a = () => {
      let e = ni(ti());
      if (e === void 0) {
        r();
        return;
      }
      (clearTimeout(t), (n = e));
      let a = er() ? yf() : 100;
      t = j.setTimeout(i, a);
    };
  return (
    j.addEventListener(`scroll`, a),
    function () {
      (j.removeEventListener(`scroll`, a), r());
    }
  );
}
function kf() {
  let e = wf();
  return e ? (j.scrollTo(e.x, e.y), !0) : !1;
}
function Af(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function jf(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (Af(n, t), !0);
}
function Mf(e, t, n) {
  n !== `preserve-scroll-position` &&
    I.render(
      () => {
        (n === `restore-scroll-position` && kf()) || jf(e, t) || j.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function Nf(e, t) {
  I.read(() => {
    j.scrollY === 0 &&
      j.scrollX === 0 &&
      I.render(
        () => {
          kf() || jf(e, t);
        },
        !1,
        !0
      );
  });
}
function Pf(e) {
  let t = Jx().scrollRestoration,
    r = A(void 0),
    i = A(!1),
    a = !(!t || e),
    o = C(
      (e) => {
        ((r.current = e), a && (i.current = !0));
      },
      [a]
    ),
    s = C((e, t = !1) => {
      i.current || Ef(e, t);
    }, []),
    c = C(() => {
      a && (i.current = !0);
    }, [a]),
    l = C(() => r.current !== void 0 || i.current, []),
    u = C((e, t) => {
      let n = r.current;
      n &&
        n.routeId === e &&
        n.remountKey === t &&
        ((r.current = void 0), (i.current = !1), Mf(n.hash, n.shouldSmoothScroll, n.behavior));
    }, []);
  return (
    n(() => {
      if (a) return bf(s);
    }, [a, s]),
    {
      usesCustomScrollRestoration: a,
      isNavigationCommitPending: l,
      onHistoryTraversal: c,
      scheduleScroll: o,
      commitNavigationScroll: u,
    }
  );
}
function Ff({ currentRouteId: e, remountKey: t, scrollRestoration: r }) {
  let { commitNavigationScroll: i, usesCustomScrollRestoration: a } = r;
  return (
    n(() => {
      i(e, t);
    }),
    h(() => {
      a && Nf(j.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function If() {
  let [e, t] = f.useState(0);
  return [e, f.useCallback(() => t((e) => e + 1), [])];
}
function Lf({ children: e, loadSnippetsModule: t }) {
  return /* @__PURE__ */ O(xC.Provider, { value: t, children: e });
}
function Rf() {
  return f.useContext(xC);
}
function zf(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function Bf(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (V(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (V(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      H(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await Vf(a.createContextualFragment(e), r, i));
}
async function Vf(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = Hf(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await Vf(r, e, null)));
  }
}
function Hf(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return Uf(r, t, n);
}
function Uf(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function Wf(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = _C), (n = vC));
      break;
    case `bodyEnd`:
      ((t = yC), (n = bC));
      break;
    case `headStart`:
      ((t = pC), (n = mC));
      break;
    case `headEnd`:
      ((t = hC), (n = gC));
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function Gf(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = zf(e),
    s = t.nextSibling;
  for (; s && s !== n; ) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function Kf(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = Wf(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = Gf(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((qf(t, o), s)) {
      await Bf(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = zf(e.id),
      u = `${c}\n${e.code}\n${l}`,
      d = Yf(e.id, n, r, i);
    d ? await Bf(u, d, `afterend`) : await Bf(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function qf(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t; ) {
    let e = n.nextSibling;
    (Jf(n) && n.remove(), (n = e));
  }
}
function Jf(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function Yf(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = Gf(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function Xf() {
  let e = Rf();
  return C(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(dC)?.dataset[fC] !== void 0;
      if (i && a) return;
      let { getSnippets: o, snippetsSorting: s } = await e.readMaybeAsync(),
        c = await o(t, n, r);
      for (let e in c) {
        let t = e,
          n = c[t],
          r = s[t];
        await Kf(t, n, r);
      }
    },
    [e]
  );
}
function Zf(e, t) {
  e.startsWith(`/`) && (e = `.` + e);
  let n = new URL(t);
  return (n.pathname.endsWith(`/`) || (n.pathname += `/`), new URL(e, n).href);
}
async function Qf({
  siteCanonicalURL: e,
  activeLocale: t,
  contentLocale: n,
  currentRoute: r,
  currentRouteId: i,
  currentPathVariables: a,
  locales: o,
  collectionUtils: s,
}) {
  if (!e || !t || !n || !r) return;
  let c,
    l = [],
    u = o.find((e) => e.id === Jg),
    { path: d } = await br({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: u,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
  d && (c = Zf(d, e));
  let f;
  for (let n of o) {
    if (r.includedLocales && !r.includedLocales.includes(n.id)) continue;
    let { path: o, isMissingInLocale: c } = await br({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: u,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
    if (!o || c) continue;
    let d = Zf(o, e);
    (l.push({ href: d, hrefLang: n.code }), n.id === "default" && (f = d));
  }
  return (
    f && l.push({ href: f, hrefLang: `x-default` }),
    () => {
      (Xr(c, j.location.href), Zr(l));
    }
  );
}
function $f({
  activeLocale: e,
  contentLocale: t,
  currentPathVariables: n,
  currentRoute: r,
  currentRouteId: i,
  isInitialNavigation: a,
  locales: o,
  siteCanonicalURL: s,
}) {
  let c = Kn(),
    l = Xf();
  h(() => {
    let u = !0,
      d = () => void (u = !1);
    return !e || !t
      ? (l(i, n ?? {}, e, a).catch((e) => {
          u && eu(e);
        }),
        d)
      : ((e.id === t.id
          ? /* @__PURE__ */ ur()
          : br({
              currentLocale: e,
              nextLocale: t,
              defaultLocale: o.find(({ id: e }) => e === Jg),
              route: r,
              routeId: i,
              pathVariables: n,
              collectionUtils: c,
              preserveQueryParams: !1,
            })
        )
          .then(async (d) => {
            if (!u) return;
            let f = d ? d.pathVariables : n;
            if ((await l(i, f ?? {}, t, a), !u)) return;
            let p = await Qf({
              siteCanonicalURL: s,
              activeLocale: e,
              contentLocale: t,
              currentRoute: r,
              currentRouteId: i,
              currentPathVariables: n,
              locales: o,
              collectionUtils: c,
            });
            u && p?.();
          })
          .catch((e) => {
            u && eu(e);
          }),
        d);
  }, [e, c, t, n, r, i, a, l, o, s]);
}
function ep(e) {
  if (!e) return ct;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function tp(e) {
  let t = gi(e),
    n = A(void 0),
    r = C(() => {
      (n.current?.abort(), (n.current = void 0));
    }, []);
  return {
    startNavigation: C(
      async (e, i, a, o = !0) => {
        r();
        let s = o ? new AbortController() : void 0;
        n.current = s;
        let c = s?.signal,
          l = cn(c);
        if ((i.promise.finally(l), a === void 0)) return (e(c), i.promise);
        let u,
          d = new Promise((e, t) => {
            ((u = e), c?.addEventListener(`abort`, t));
          }).catch(ct);
        if ((t(d, s, a), e(c), await i.promise, c?.aborted)) return;
        let f = j.navigation?.transition;
        u();
        try {
          await f?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        c?.aborted || sv();
      },
      [r, t]
    ),
    cancelPendingNavigation: r,
  };
}
function np({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: r,
  initialRoute: a,
  notFoundPage: o,
  collectionUtils: c,
  routes: l,
  initialLocaleId: d,
  initialCollectionItemId: f,
  initialContentLocaleIdOverride: p,
  locales: m = qg,
  initialCanonicalPathVariables: g,
  preserveQueryParams: _ = !1,
  LayoutTemplate: v,
  EditorBar: y,
  siteCanonicalURL: b,
  adaptLayoutToTextDirection: x,
}) {
  (Hi(),
    di({
      disabled: t,
      routeId: a,
      initialPathVariables: r,
      initialLocaleId: d,
      initialContentLocaleId: p,
      initialCanonicalPathVariables: g,
    }));
  let S = Jr(),
    [w, T] = If(),
    E = $r(`framer-route-change`),
    D = s(() => (!Jx().synchronousNavigationOnDesktop || !sr() ? u : (e) => e()), []),
    k = A(!0),
    te = A(),
    ne = A(0),
    re = A(a),
    ie = A(r),
    ae = A(),
    oe = A(d),
    M = Pf(t),
    { isNavigationCommitPending: se, usesCustomScrollRestoration: ce } = M,
    { startNavigation: le, cancelPendingNavigation: ue } = tp(ce),
    de = Kn(),
    fe = M.scheduleScroll,
    pe = oe.current,
    N = re.current,
    me = ie.current,
    he = l[N],
    ge = he?.path;
  if (!he) throw Error(`Router cannot find route for ${N}`);
  let _e = s(() => m.find(({ id: e }) => e === Jg), [m]),
    P = s(() => m.find(({ id: e }) => (pe ? e === pe : e === "default")) ?? null, [pe, m]),
    {
      contentLocale: ve,
      currentCanonicalPathVariables: ye,
      pageExistsInCurrentLocale: be,
      setRouteContentState: xe,
    } = ip({
      activeLocale: P,
      currentRoute: he,
      initialCanonicalPathVariables: g,
      initialContentLocaleIdOverride: p,
      locales: m,
      routes: l,
    }),
    Se = P?.textDirection ?? `ltr`,
    F = x ? Se : `ltr`;
  n(() => {
    x && document.documentElement.setAttribute(`dir`, Se);
  }, [Se, x]);
  let Ce = P?.code;
  n(() => {
    Ce && document.documentElement.setAttribute(`lang`, Ce);
  }, [Ce]);
  let we = mi(),
    Te = s(
      () => ({
        activeLocale: P,
        contentLocale: ve,
        locales: m,
        setLocale: async (e) => {
          let n = ++ne.current,
            r = E({ localized: !0 });
          if ((await V_({ priority: `user-blocking`, continueAfter: `paint` }), n !== ne.current)) {
            r.ignore?.();
            return;
          }
          let i;
          L(e) ? (i = e) : z(e) && (i = e.id);
          let a = m.find(({ id: e }) => e === i);
          if (!a) {
            r.ignore?.();
            return;
          }
          let o = re.current,
            s = l[o];
          if (!s) {
            r.ignore?.();
            return;
          }
          let c = Mi(b);
          try {
            let e = await we({
              currentLocale: P,
              nextLocale: a,
              route: s,
              routeId: o,
              defaultLocale: _e,
              pathVariables: ie.current,
              preserveQueryParams: _,
              sitePrefix: c,
            });
            if (!e || n !== ne.current) {
              r.ignore?.();
              return;
            }
            let i = e.path && c + e.path,
              { contentLocaleId: l, canonicalPathVariables: u } = await Cr({
                activeLocale: a,
                defaultLocale: _e,
                collectionUtilsCache: de,
                locales: m,
                pathVariables: e.pathVariables,
                route: s,
                routeId: o,
              });
            if (n !== ne.current) {
              r.ignore?.();
              return;
            }
            ((k.current = !1),
              (oe.current = a.id),
              (te.current = i),
              (ie.current = e.pathVariables),
              xe(l, u));
            let d = s.path && e.pathVariables ? uf(s.path, e.pathVariables) : s.path;
            (fe({
              routeId: o,
              remountKey: `${a.id}${d}`,
              hash: void 0,
              shouldSmoothScroll: !1,
              behavior: `preserve-scroll-position`,
            }),
              le(
                () => {
                  S(o, o, () => D(T));
                },
                r,
                t
                  ? void 0
                  : i
                    ? () => {
                        gf({
                          routeId: o,
                          url: i,
                          pathVariables: e.pathVariables,
                          localeId: a.id,
                          contentLocaleId: l,
                          canonicalPathVariables: u,
                        });
                      }
                    : void 0,
                !1
              ));
          } catch {
            r.ignore?.();
          }
        },
      }),
      [P, _e, ve, t, T, m, _, xe, l, fe, le, S, E, D, we, de, b]
    ),
    Ee = C(
      (e, t, n, r, i, a, o, s, c, u, d) => {
        k.current = !1;
        let f = re.current,
          p = l[e],
          m = sn(p, n),
          h = p?.path && i ? uf(p.path, i) : p?.path;
        ((re.current = e),
          (oe.current = t),
          (ie.current = i),
          (ae.current = void 0),
          xe(a, o),
          (te.current = r),
          fe({
            routeId: e,
            remountKey: `${t}${h}`,
            hash: m,
            shouldSmoothScroll: u ?? !1,
            behavior: s
              ? ce
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          s
            ? (ue(), D(T))
            : le(
                (t) => {
                  S(f, e, () => D(T), t);
                },
                c,
                d,
                !0
              ));
      },
      [T, xe, l, ce, fe, le, S, D, ue]
    );
  (fi(M, re, Ee),
    h(() => {
      if (t) return;
      let e = () => {
        let e = ti(),
          t = j.location.hash === `` ? void 0 : j.location.hash.slice(1);
        (e && sn(l[e.routeId], e.hash) === t) ||
          li({
            ...(e ||
              (ii() ?? { routeId: re.current, pathVariables: ie.current, localeId: oe.current })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (j.addEventListener(`hashchange`, e), () => j.removeEventListener(`hashchange`, e));
    }, [t, l]));
  let De = C(
      async (e, n, r, i, a) => {
        let o = l[e],
          s = Lt(o?.page) ? o.page.getStatus() : void 0,
          c = s?.hasRendered,
          u = E({ cached: c, preloaded: c ? void 0 : s?.hasLoaded }),
          d = ep(a);
        if (
          (V_({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(d),
          await V_({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = /* @__PURE__ */ new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(U_)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let f = sn(o, n),
          p = ie.current,
          h = oe.current;
        if (
          ae.current === void 0 &&
          mf({ routeId: re.current, pathVariables: p }, { routeId: e, pathVariables: r })
        ) {
          let a = se();
          if (a) {
            let t = o?.path && r ? uf(o.path, r) : o?.path;
            fe({
              routeId: e,
              remountKey: `${h}${t}`,
              hash: f,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else ue();
          (u.ignore?.(), !a && ce && Mf(f, i, `scroll-to-hash-or-top`));
          let s = l[e];
          (!t &&
            s &&
            vf(
              e,
              s,
              {
                currentRoutePath: s.path,
                currentRoutePathLocalized: s.pathLocalized,
                currentPathVariables: p,
                pathVariables: r,
                hash: n,
                localeId: h,
                preserveQueryParams: _,
                siteCanonicalURL: b,
              },
              d
            ),
            !a && !ce && Mf(f, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!o) return;
        let g = l[re.current],
          v =
            Mi(b) +
            Fi(o, {
              currentRoutePath: g?.path,
              currentRoutePathLocalized: g?.pathLocalized,
              currentPathVariables: p,
              hash: n,
              pathVariables: r,
              localeId: h,
              localeSlug: m.find(({ id: e }) => e === h)?.slug,
              preserveQueryParams: _,
              relative: !1,
              siteCanonicalURL: b,
            }),
          y = {};
        ae.current = y;
        let { contentLocaleId: x, canonicalPathVariables: S } = await Cr({
          activeLocale: P,
          defaultLocale: _e,
          collectionUtilsCache: de,
          locales: m,
          pathVariables: r,
          route: o,
          routeId: e,
        });
        ae.current === y &&
          Ee(
            e,
            h,
            n,
            v,
            r,
            x,
            S,
            !1,
            u,
            i,
            t
              ? void 0
              : () => {
                  (d(),
                    _f(e, o, {
                      historyPath: v,
                      currentRoutePath: g?.path,
                      hash: n,
                      pathVariables: r,
                      contentLocaleId: x,
                      canonicalPathVariables: S,
                      localeId: h,
                    }));
                }
          );
      },
      [ue, l, m, Ee, t, _, b, E, ce, se, fe, de, _e, P]
    ),
    Oe = Qt(l),
    ke = te.current,
    Ae = sC(he, N, ke, me, P, f),
    je = k.current;
  $f({
    activeLocale: P,
    contentLocale: ve,
    currentPathVariables: me,
    currentRoute: he,
    currentRouteId: N,
    isInitialNavigation: je,
    locales: m,
    siteCanonicalURL: b,
  });
  let Me = s(
      () => ({
        navigate: De,
        getRoute: Oe,
        currentRouteId: N,
        currentPathVariables: me,
        currentCanonicalPathVariables: ye,
        routes: l,
        collectionUtils: c,
        preserveQueryParams: _,
        pageviewEventData: Ae,
        siteCanonicalURL: b,
        isInitialNavigation: je,
      }),
      [De, Oe, N, me, ye, l, c, _, b, Ae, je]
    ),
    Ne = ge && me ? uf(ge, me) : ge,
    Pe = `${pe}${Ne}`,
    Fe = so(() => ({ ...e, display: `contents` }));
  return /* @__PURE__ */ O($t, {
    api: Me,
    children: /* @__PURE__ */ O(K_.Provider, {
      value: Te,
      children: /* @__PURE__ */ O(q_.Provider, {
        value: F,
        children: /* @__PURE__ */ O(mS, {
          children: /* @__PURE__ */ O(Di, {
            routerRenderKey: w,
            isNavigationCommitPending: M.isNavigationCommitPending,
            children: /* @__PURE__ */ ee(df, {
              currentRoutePath: Ne,
              routerAPI: Me,
              children: [
                y && /* @__PURE__ */ O(lf, { EditorBar: y, fast: !0 }),
                /* @__PURE__ */ O(Zx, {
                  children: /* @__PURE__ */ ee(Ql, {
                    children: [
                      /* @__PURE__ */ O(jv.Start, {}),
                      /* @__PURE__ */ O(Ff, {
                        currentRouteId: N,
                        remountKey: Pe,
                        scrollRestoration: M,
                      }),
                      /* @__PURE__ */ O(Nv, {
                        notFoundPage: o,
                        defaultPageStyle: e,
                        routerRenderKey: w,
                        children: /* @__PURE__ */ O(rp, {
                          LayoutTemplate: v,
                          webPageId: he?.abTestingVariantId ?? N,
                          style: e,
                          children: (t) =>
                            /* @__PURE__ */ O(
                              i,
                              { children: be ? qi(he.page, t ? Fe : e) : o && qi(o, e) },
                              Pe
                            ),
                        }),
                      }),
                      y && /* @__PURE__ */ O(lf, { EditorBar: y }),
                      /* @__PURE__ */ O(Ri, {}),
                      /* @__PURE__ */ O(jv.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function rp({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? /* @__PURE__ */ O(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function ip({
  activeLocale: e,
  currentRoute: t,
  initialCanonicalPathVariables: n,
  initialContentLocaleIdOverride: r,
  locales: i,
  routes: a,
}) {
  let o = A(n),
    c = A(r),
    l = c.current,
    u = !e || !t.includedLocales || t.includedLocales.includes(e.id),
    d = s(() => {
      if (!e) return null;
      let n;
      return (
        (n = u
          ? (l ?? t?.canonicalLocaleIdByLocaleId?.[e.id])
          : Object.values(a).find((e) => e.path && Cv.has(e.path))?.canonicalLocaleIdByLocaleId?.[
              e.id
            ]),
        n ? (i.find(({ id: e }) => e === n) ?? e) : e
      );
    }, [e, t, i, l, u, a]),
    f = C((e, t) => {
      ((c.current = e), (o.current = t));
    }, []);
  return {
    contentLocale: d,
    currentCanonicalPathVariables: o.current,
    pageExistsInCurrentLocale: u,
    setRouteContentState: f,
  };
}
function ap(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function op(e) {
  return typeof e == `object` && !!e;
}
function sp(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!op(r)) return;
    r = r[e];
  }
  return r;
}
function cp(e) {
  return `${e.credentials}:${e.url}`;
}
function lp(e) {
  return L(e) && !Number.isNaN(Number(e));
}
function up(e, t) {
  switch (e) {
    case `string`:
      return L(t) || R(t);
    case `color`:
      return L(t);
    case `boolean`:
      return Ve(t);
    case `number`:
      return R(t) || lp(t);
    case `link`:
    case `image`:
      return L(t) && Mu(t, !1);
    default:
      return !1;
  }
}
function dp(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = sp(e.data, t.resultKeyPath);
  if (B(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!up(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function fp(e) {
  return Math.max(e * 1e3, CC);
}
function pp(e, t) {
  if (W.current() === W.canvas) return !1;
  let n = fp(t);
  return Date.now() >= e + n;
}
function mp({ client: e, children: t }) {
  return /* @__PURE__ */ O(kC.Provider, { value: e, children: t });
}
function hp(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    canonicalPathVariables: s,
    routes: c,
    collectionUtils: l,
    serverDatabaseClient: u,
    notFoundPage: d,
    isReducedMotion: p = !1,
    skipAnimations: m = !1,
    includeDataObserver: h = !1,
    localeId: g,
    locales: _,
    preserveQueryParams: v,
    EditorBar: y,
    defaultPageStyle: b,
    disableHistory: x,
    LayoutTemplate: S,
    siteCanonicalURL: C,
    adaptLayoutToTextDirection: w,
    loadSnippetsModule: T,
    initialCollectionItemId: E,
    initialContentLocaleIdOverride: D,
  } = e;
  if (
    (f.useEffect(() => {
      n || cy.start();
    }, []),
    n)
  )
    return /* @__PURE__ */ O(yi, {
      value: r ?? `preview`,
      children: /* @__PURE__ */ O(je, {
        reducedMotion: m ? `always` : p ? `user` : `never`,
        skipAnimations: m,
        children: /* @__PURE__ */ O(Gn, {
          collectionUtils: l,
          children: /* @__PURE__ */ O(mp, {
            client: u,
            children: /* @__PURE__ */ O(OC, {
              children: /* @__PURE__ */ O($S.Provider, {
                value: a,
                children: /* @__PURE__ */ O(Lf, {
                  loadSnippetsModule: T,
                  children: /* @__PURE__ */ O(np, {
                    initialRoute: i,
                    initialPathVariables: o,
                    initialCanonicalPathVariables: s,
                    initialLocaleId: g,
                    initialCollectionItemId: E,
                    initialContentLocaleIdOverride: D,
                    routes: c,
                    collectionUtils: l,
                    notFoundPage: d,
                    locales: _,
                    defaultPageStyle: b ?? { minHeight: `100vh`, width: `auto` },
                    preserveQueryParams: v,
                    EditorBar: y,
                    disableHistory: x,
                    LayoutTemplate: S,
                    siteCanonicalURL: C,
                    adaptLayoutToTextDirection: w,
                  }),
                }),
              }),
            }),
          }),
        }),
      }),
    });
  {
    let e = h ? rx : f.Fragment;
    return /* @__PURE__ */ O(e, {
      children: /* @__PURE__ */ O(tn, {
        routes: c,
        children: /* @__PURE__ */ O(Wb, {
          children: f.isValidElement(t) ? t : f.createElement(t, { key: i }),
        }),
      }),
    });
  }
}
function gp(e, t) {
  let n = en(),
    { activeLocale: r } = wr(),
    i = Gd();
  return xi(() => {
    let t = [],
      a = (e) => {
        if (e)
          return L(e) || Ou(e)
            ? cf(e, n, void 0, void 0, r, o)
            : cf(e.href, n, e.implicitPathVariables, e.refKey, r, o);
      };
    function o(e, n) {
      return i(e, n, r, t);
    }
    let s = e(a);
    if (t.length > 0) throw Promise.allSettled(t);
    return s;
  }, [n, r, i, ...t]);
}
function _p(e) {
  return {
    trace(...t) {
      return Cy.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return Cy.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return Cy.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return Cy.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return Cy.getLogger(e)?.error(...t);
    },
    get enabled() {
      return Cy.getLogger(e) !== void 0;
    },
  };
}
function vp() {
  return (
    Symbol.dispose ||
      Object.defineProperty(Symbol, "dispose", {
        value: Symbol.for(`Symbol.dispose`),
        writable: !1,
        enumerable: !1,
        configurable: !1,
      }),
    Symbol.dispose
  );
}
function yp() {
  var e =
      typeof SuppressedError == `function`
        ? SuppressedError
        : function (e, t) {
            var n = Error();
            return ((n.name = `SuppressedError`), (n.error = e), (n.suppressed = t), n);
          },
    t = {},
    n = [];
  function r(e, t) {
    if (t != null) {
      if (Object(t) !== t)
        throw TypeError(
          `using declarations can only be used with objects, functions, null, or undefined.`
        );
      if (e) var r = t[Symbol.asyncDispose || Symbol.for(`Symbol.asyncDispose`)];
      if (r === void 0 && ((r = t[Symbol.dispose || Symbol.for(`Symbol.dispose`)]), e)) var i = r;
      if (typeof r != `function`) throw TypeError(`Object is not disposable.`);
      (i &&
        (r = function () {
          try {
            i.call(t);
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        n.push({ v: t, d: r, a: e }));
    } else e && n.push({ d: t, a: e });
    return t;
  }
  return {
    e: t,
    u: r.bind(null, !1),
    a: r.bind(null, !0),
    d: function () {
      var r,
        i = this.e,
        a = 0;
      function o() {
        for (; (r = n.pop()); )
          try {
            if (!r.a && a === 1) return ((a = 0), n.push(r), Promise.resolve().then(o));
            if (r.d) {
              var e = r.d.call(r.v);
              if (r.a) return ((a |= 2), Promise.resolve(e).then(o, s));
            } else a |= 1;
          } catch (e) {
            return s(e);
          }
        if (a === 1) return i === t ? Promise.resolve() : Promise.reject(i);
        if (i !== t) throw i;
      }
      function s(n) {
        return ((i = i === t ? n : new e(n, i)), o());
      }
      return o();
    },
  };
}
function bp() {
  return jC.priority;
}
function xp(e) {
  let t = jC;
  return (
    (jC = e),
    {
      [vp()]() {
        jC = t;
      },
    }
  );
}
function Sp(e = jC.priority, t = jC.canYield) {
  if (!t || e === void 0) return;
  let n = dr(e);
  return V_({ batch: !0, priority: n });
}
function Cp(e) {
  try {
    var t = yp();
    t.u(xp({ priority: jC.priority, canYield: !1 }));
    let n = e.next();
    return (V(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    t.e = e;
  } finally {
    t.d();
  }
}
async function wp(e, t, n = jC.priority, r = jC.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0)
    try {
      var o = yp();
      (o.u(xp(i)), (a = e.next()));
    } catch (e) {
      o.e = e;
    } finally {
      o.d();
    }
  for (; !a.done; )
    try {
      var s = yp();
      let t = await a.value,
        o = Sp(n, r);
      (o && (await o), s.u(xp(i)), (a = e.next(t)));
    } catch (e) {
      s.e = e;
    } finally {
      s.d();
    }
  return a.value;
}
function Tp(e, t = jC.priority, n = jC.canYield) {
  try {
    var r = yp();
    r.u(xp({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : wp(e, i, t, n);
  } catch (e) {
    r.e = e;
  } finally {
    r.d();
  }
}
function* q(e, t = jC.priority) {
  let n = {},
    r = Object.keys(e),
    i = [];
  for (let a of r) {
    let r = e[a];
    if (qe(r)) {
      let e = r.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            wp(r, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = r;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function* Ep(e, t = jC.priority) {
  let n = [],
    r = e.keys(),
    i = [];
  for (let a of r) {
    let r = Sp(t);
    r && (yield r);
    let o = e[a];
    if (qe(o)) {
      let e = o.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            wp(o, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = o;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function Dp(e) {
  return Ap(e) || Np(e);
}
function Op(e) {
  return He(e) && e.every(z);
}
function kp(e) {
  return z(e) && Be(e.read) && Be(e.preload);
}
function Ap(e) {
  return Op(e) || kp(e);
}
function jp(e) {
  return z(e) && z(e.schema);
}
function Mp(e) {
  return z(e) && z(e.collectionByLocaleId);
}
function Np(e) {
  return jp(e) || Mp(e);
}
function Pp(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = lm(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Fp(e, t) {
  return e?.type === `array`
    ? { type: `array`, value: e.value.map((e) => Z.cast(e, t.definition)) }
    : null;
}
function Ip(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Lp(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function Rp(e) {
  return Lp(e)?.value ?? !1;
}
function zp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Bp(e) {
  return e?.type === `color` ? e : null;
}
function Vp(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function Hp(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return Ke(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function Up(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Wp(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function Gp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Kp(e) {
  return e?.type === `file` ? e : null;
}
function qp(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Jp(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:` ? { type: `link`, value: e.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function Yp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Xp(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function Zp(e) {
  return Xp(e)?.value ?? null;
}
function Qp(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = lm(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function $p(e, t) {
  if (e?.type === `object`) {
    let n = {},
      r = Object.entries(t.definitions);
    for (let [t, i] of r) {
      let r = e.value[t] ?? null;
      n[t] = Z.cast(r, i);
    }
    return { type: `object`, value: n };
  }
  return null;
}
function em(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function tm(e) {
  return e?.type === `responsiveimage` ? e : null;
}
function nm(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function rm(e) {
  return e?.type === `richtext` ? e : null;
}
function im(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function am(e) {
  return e?.type === `vectorsetitem` ? e : null;
}
function om(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function sm(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function cm(e) {
  return sm(e)?.value ?? null;
}
function lm(e, t, n) {
  if (We(e) || We(t)) return (V(e === t), 0);
  switch (e.type) {
    case `array`:
      return (V(e.type === t.type), Pp(e, t, n));
    case `boolean`:
      return (V(e.type === t.type), Ip(e, t));
    case `color`:
      return (V(e.type === t.type), zp(e, t));
    case `date`:
      return (V(e.type === t.type), Vp(e, t));
    case `enum`:
      return (V(e.type === t.type), Up(e, t));
    case `file`:
      return (V(e.type === t.type), Gp(e, t));
    case `link`:
      return (V(e.type === t.type), qp(e, t));
    case `number`:
      return (V(e.type === t.type), Yp(e, t));
    case `object`:
      return (V(e.type === t.type), Qp(e, t, n));
    case `responsiveimage`:
      return (V(e.type === t.type), em(e, t));
    case `richtext`:
      return (V(e.type === t.type), nm(e, t));
    case `vectorsetitem`:
      return (V(e.type === t.type), im(e, t));
    case `string`:
      return (V(e.type === t.type), om(e, t, n));
    default:
      H(e);
  }
}
async function um(e, t) {
  return kp(e) ? (await e.preload(t), e.read(t)) : e;
}
function dm(e) {
  return e.includes(IC);
}
function fm(e) {
  if (!Np(e) || !e.id) return;
  let t = PC.get(e.id);
  if (!t) return (PC.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function pm(e) {
  let t = fm(e);
  if (t) return t;
  let n = FC.get(e);
  if (n) return n;
  let r = `${IC}${Math.random().toString(16).slice(2)}`;
  return (FC.set(e, r), r);
}
function mm(e, t) {
  if (Ap(e)) {
    let n = pm(e) + (t?.id ?? `default`),
      r = LC.get(n);
    if (r) return r;
    let i = new NC(e, t);
    return (LC.set(n, i), i);
  }
  if (jp(e)) return e;
  if (Mp(e)) {
    for (; t; ) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  H(e, `Unsupported collection type`);
}
function hm(e) {
  return e;
}
function gm(e) {
  return Be(e.getHash);
}
function J(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    z(r) && gm(r) ? (n += r.getHash()) : (n += JSON.stringify(r) ?? ``);
  }
  return hm(`${n})`);
}
function _m(e) {
  if (e === void 0) return;
  if (typeof e != `function`) return e;
  let t = e();
  return () => e() ?? t;
}
function vm(e) {
  if (e !== void 0) return dr(e);
}
function ym(e, t) {
  return { collectionId: pm(e), pointer: t };
}
function bm(e) {
  return z(e) && L(e.collectionId);
}
function xm(e, t) {
  return { collectionId: pm(e), pointer: t };
}
function Sm(e) {
  return z(e) && L(e.collectionId);
}
function Cm(e, t) {
  let n = /* @__PURE__ */ new Map();
  function r(e) {
    if (z(e)) {
      if (e.type === `Collection` && Dp(e.data)) {
        let r = mm(e.data, t),
          i = pm(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    } else if (He(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function wm(e) {
  return e;
}
function Tm(e) {
  return e;
}
function Em(e) {
  return e;
}
function Dm() {
  return 25;
}
function Om() {
  return 12500;
}
function km(e) {
  return Array(e).fill({ type: `All` });
}
function Am(e) {
  return e;
}
function jm(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new Ww(t ? `Assertion Error: ` + t : `Assertion Error`);
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function Mm(e) {
  let t = /* @__PURE__ */ new Set();
  if (!e) return t;
  jm(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (jm(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function Nm(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) Nm(n, t);
      return;
    case `object`:
      for (let n in e.value) Nm(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function Pm(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function Fm(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function Im(e) {
  return `${e.functionName}(${e.arguments.map((e) => Vm(e)).join(`, `)})`;
}
function Lm(e) {
  let t = `CASE`;
  e.value && (t += ` ${Vm(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${Vm(n.when)} THEN ${Vm(n.then)}`;
  return (e.else && (t += ` ELSE ${Vm(e.else)}`), (t += ` END`), t);
}
function Rm(e) {
  let t = Vm(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function zm(e) {
  let t = Vm(e.left),
    n = Vm(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function Bm(e) {
  return `CAST(${Vm(e.value)} as ${e.dataType})`;
}
function Vm(e) {
  switch (e.type) {
    case `Identifier`:
      return Pm(e);
    case `LiteralValue`:
      return Fm(e);
    case `FunctionCall`:
      return Im(e);
    case `Case`:
      return Lm(e);
    case `UnaryOperation`:
      return Rm(e);
    case `BinaryOperation`:
      return zm(e);
    case `TypeCast`:
      return Bm(e);
    case `Select`:
      return `${Km(e)}`;
    default:
      H(e);
  }
}
function Hm(e) {
  return jp(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function Um(e) {
  let t = `${Wm(e.left)} LEFT JOIN ${Wm(e.right)}`;
  return (e.constraint && (t += ` ON ${Vm(e.constraint)}`), t);
}
function Wm(e) {
  switch (e.type) {
    case `Collection`:
      return Hm(e);
    case `LeftJoin`:
      return Um(e);
    default:
      H(e);
  }
}
function Gm(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `\n${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `\n\t${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function Km(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = Vm(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${Wm(e.from)}`),
    e.where && (t += ` WHERE ${Vm(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${Vm(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${Vm(e.limit)}`),
    e.offset && (t += ` OFFSET ${Vm(e.offset)}`),
    Gm(t)
  );
}
function qm(e) {
  return z(e) && e.type === `Collection`;
}
function Jm(e, t) {
  return qm(t) && Dp(t.data) ? pm(t.data) : t;
}
function Ym(e, t) {
  let n = t?.id ?? `default`;
  return JSON.stringify(e, Jm) + n;
}
function Xm(e) {
  let { activeLocale: t } = wr();
  return sT.get(e, t).use();
}
function Zm(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(B(e) || z(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({ type: `BinaryOperation`, operator: `and`, left: e, right: t }));
}
function Qm(e) {
  let t = A(e);
  return (
    c(() => {
      t.current = e;
    }, [e]),
    Si((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function $m(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function eh() {
  return /* @__PURE__ */ new Set();
}
function th(e) {
  let t = so(eh),
    n = so(eh);
  return (
    lc(() => () => $m(n, t)),
    h(() => () => $m(n, t), []),
    h(() => {
      $m(n, t);
    }, [e]),
    A({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function nh(e, t, n) {
  return f.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function rh(e) {
  for (let [t, n] of Object.entries(e)) if (U.matchMedia(n).matches) return t;
}
function ih(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && U.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function ah(e, t, n = !0) {
  let r = S(Vb),
    i = fo(),
    a = Qe(),
    o = nr() && (!i || a),
    s = A(o ? (rh(t) ?? e) : e),
    c = A(n && r ? e : s.current),
    l = _s(),
    d = he(),
    f = C(
      (e) => {
        if (e !== s.current || e !== c.current) {
          function t() {
            ((s.current = c.current = e),
              u(() => {
                l();
              }));
          }
          i
            ? t()
            : d(() => {
                t();
              });
        }
      },
      [d, l, i]
    );
  return (
    pv(() => {
      i && f(a ? (rh(t) ?? e) : e);
    }, [e, a, i, t, f]),
    pv(() => {
      n && r === !0 && f(s.current);
    }, []),
    h(() => {
      if (!o || a) return;
      let e = [];
      for (let [n, r] of Object.entries(t)) {
        let t = U.matchMedia(r),
          i = (e) => {
            e.matches && f(n);
          };
        (oh(t, i), e.push([t, i]));
      }
      return () => e.forEach(([e, t]) => sh(e, t));
    }, [a, t, f, o]),
    [s.current, c.current]
  );
}
function oh(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function sh(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function ch(e) {
  setTimeout(e, 1);
}
function lh(e) {
  let t = /* @__PURE__ */ new Set(),
    n = ih(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (uh(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (dt ? U.requestIdleCallback : ch)(() => {
    document.querySelector(cT)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (uh(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    dh(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function uh(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function dh(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function fh(e, t) {
  e !== !1 &&
    I.render(() => {
      let e = document.documentElement.style;
      t ? e.setProperty(`overflow`, `hidden`) : e.removeProperty(`overflow`);
    });
}
function ph({ blockDocumentScrolling: e = !0, dismissWithEsc: t = !1 } = {}) {
  let [n, r] = f.useState(!1),
    i = f.useCallback(
      async (t) => {
        (await V_({ priority: `user-blocking`, continueAfter: `paint` }), u(() => r(t)), fh(e, t));
      },
      [e]
    );
  return (
    f.useEffect(
      () => () => {
        V_({ priority: `user-blocking`, continueAfter: `paint` }).then(() => {
          fh(e, !1);
        });
      },
      [e]
    ),
    f.useEffect(() => {
      if (!t) return;
      let e = (e) => {
        e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), i(!1));
      };
      return (U.addEventListener(`keydown`, e), () => U.removeEventListener(`keydown`, e));
    }, [t, i]),
    [n, i]
  );
}
function mh(e) {
  return z(e) && lT in e && e.page !== void 0;
}
function hh(e, t) {
  return `${e}-${t}`;
}
function gh(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (V(r !== void 0, `nextVariant should be defined`), r);
}
function _h(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function vh(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function yh(e, t) {
  return t[e] || `framer-v-${e}`;
}
function bh(e, t, n) {
  return e && n.has(e) ? e : t;
}
function xh() {
  let e = A(),
    t = A(),
    n = C(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    h(
      () => () => {
        n();
      },
      [n]
    ),
    C(
      (r) => {
        if (!document.hidden) {
          (r(), n());
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          document.hidden || (t.current?.(), n());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [n]
    )
  );
}
function Sh() {
  let e = A(),
    t = A(!1),
    n = A(),
    r = S(wb);
  return (
    h(
      () => () => {
        (e.current?.(), (n.current = void 0), (e.current = void 0));
      },
      []
    ),
    C(
      (i, a) => {
        if (!a?.current || t.current) {
          i();
          return;
        }
        if (((n.current = i), e.current)) return;
        let o = !1;
        e.current = nc(r, `undefined`, a.current, null, (e) => {
          ((t.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), t.current && n.current?.());
              })));
        });
      },
      [r]
    )
  );
}
function Ch(e) {
  let t = xh(),
    n = Sh();
  return C(
    (r, i = !1) => {
      ut ? r() : t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function wh() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (fT = () => {
        (e(), (t = void 0));
      }));
  });
}
function Th(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (dT = wh()));
}
function Eh() {
  (performance.mark(`click-received-listener`), (dT = void 0), fT?.(), (fT = void 0));
}
function Dh(e = !1) {
  h(() => {
    e &&
      (document.addEventListener(`pointerup`, Th, !0),
      document.__proto__.addEventListener.call(document, `click`, Eh, !0));
  }, [e]);
}
function Oh({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: a = {},
  variantClassNames: o = {},
  ref: c,
}) {
  let l = _s(),
    d = Au(),
    f = so(() => new Set(i));
  Dh(Jx().yieldOnTap);
  let p = Ch(c),
    m = A({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: bh(e, t, f),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    h = C((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = m.current,
        o = bh(e, a, f),
        s = vh(i?.[o], t, n, !1, r);
      return [o, s ? hh(o, s) : void 0];
    }, []),
    g = C(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = h(r);
        if (o === e && s === t) return;
        (a && (m.current.isError = !1),
          (m.current.baseVariant = o || n),
          (m.current.gestureVariant = s));
        let c = Jx().yieldOnTap && m.current.isPressedHasUpdated;
        (c &&
          dT &&
          (performance.mark(`wait-for-tap-start`),
          await dT,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await V_({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: d,
          isPressed: f,
          isHoveredHasUpdated: g,
          isPressedHasUpdated: _,
        } = m.current;
        d || g || f || _ ? u(l) : p(() => u(l), i);
      },
      [h, l, p]
    ),
    _ = C(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        e && !d && Jx().disableHoverOnMobile && !vu() && (e = !1);
        let r = t !== m.current.isPressed,
          i = e !== m.current.isHovered;
        (e !== void 0 && (m.current.isHovered = e),
          t !== void 0 && (m.current.isPressed = t),
          n !== void 0 && (m.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = m.current;
        ((m.current.isPressedHasUpdated = r),
          (m.current.isHoveredHasUpdated = i),
          g(a, o, s, a, !1));
      },
      [g, d]
    ),
    v = C(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = m.current,
          o = e === uT ? gh(r || [], i || n) : e;
        g(i, a, n, o, t, !0);
      },
      [g]
    ),
    y = C(() => {
      let { baseVariant: e } = m.current;
      ((m.current.loadedBaseVariant[e] = !0), p(() => u(l), !0));
    }, [l, p]);
  if (e !== m.current.lastVariant) {
    let [t, n] = h(e);
    ((m.current.lastVariant = t),
      (t !== m.current.baseVariant || n !== m.current.gestureVariant) &&
        ((m.current.baseVariant = t), (m.current.gestureVariant = n)));
  }
  let {
      baseVariant: b,
      gestureVariant: x,
      defaultVariant: S,
      enabledGestures: w,
      isHovered: T,
      isPressed: E,
      isError: D,
      loadedBaseVariant: O,
    } = m.current,
    ee = nh(m.current.baseVariant, m.current.gestureVariant, a);
  return s(() => {
    let e = [];
    b !== S && e.push(b);
    let t = w?.[b]?.loading,
      n = !D && !d && !!t && !O[b],
      r = n ? hh(b, `loading`) : x;
    r && e.push(r);
    let i = w?.[b],
      a = { onMouseEnter: () => _({ isHovered: !0 }), onMouseLeave: () => _({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => _({ isPressed: !0 }),
          onTapCancel: () => _({ isPressed: !1 }),
          onTap: () => _({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: b,
        gestureVariant: r,
        isLoading: n,
        transition: _h(m.current.transitions, b),
        setVariant: v,
        setGestureState: _,
        clearLoadingGesture: y,
        addVariantProps: ee,
        gestureHandlers: a,
        classNames: cl(yh(b, o), vh(i, T, E, n, D)),
      }
    );
  }, [b, x, T, E, O, ee, v, S, w, _, y, o]);
}
function kh(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (Jx().disableCustomCode) return e;
  if (!nu()) return jh(e, r, t, n);
  let a = Ah(e, r, t, n),
    o = !1;
  function s(r, s) {
    let c = ou();
    if (mu(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? /* @__PURE__ */ O(dv.Provider, {
            value: n,
            children: /* @__PURE__ */ O(ru, {
              getErrorMessage: du.bind(null, t, n),
              fallback: /* @__PURE__ */ O(e, { ...r, ref: s }),
              children: /* @__PURE__ */ O(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (tu(a.error), tu(du(t, n)), eu(a.error), !0)),
          /* @__PURE__ */ O(e, { ...r, ref: s }));
    if (a.status === `success`)
      return /* @__PURE__ */ O(dv.Provider, {
        value: n,
        children: /* @__PURE__ */ O(a.Component, { ...r, ref: s }),
      });
    throw a.error;
  }
  return f.forwardRef(s);
}
function Ah(e, t, n, r) {
  try {
    return { status: `success`, Component: jh(e, t, n, r) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function jh(e, t, n, r) {
  let i = pT.get(t);
  i || ((i = /* @__PURE__ */ new WeakMap()), pT.set(t, i));
  let a = i.get(e);
  a || ((a = /* @__PURE__ */ new Map()), i.set(e, a));
  let o = `${n}:${r}`;
  if (a.has(o)) return a.get(o);
  let s = t(e);
  return (a.set(o, s), s);
}
function Mh(e, t) {
  h(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (j.addEventListener(`keyup`, n), () => j.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function Nh(e, t, n, r) {
  let i = j.innerHeight - r,
    a = Math.min(j.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function Ph(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new j.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function Fh() {
  return (
    document.getElementById(`template-overlay`) ??
    document.getElementById(`overlay`) ??
    document.body
  );
}
function Ih(e, t) {
  return R(e) ? e : (t ?? 0);
}
function Lh(e) {
  return Ih(e?.paddingTop, e?.padding) + Ih(e?.paddingBottom, e?.padding);
}
function Rh(e) {
  return Ih(e?.paddingLeft, e?.padding) + Ih(e?.paddingRight, e?.padding);
}
function zh(e, t) {
  if (!e || !t?.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - Rh(e)}px)`,
      srcSet: vo(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function Bh(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in hT)) continue;
    let n = hT[t],
      r = e[t];
    if (R(n) && R(r) && n !== r) return !0;
  }
  return !1;
}
function Vh(e) {
  let t = Ne.get(e.current);
  if (!t) return !1;
  if (Bh(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (Bh(e.latestValues)) return !0;
  return !1;
}
function Hh(e) {
  return T(function ({ lightbox: t, lightboxClassName: n, onClick: r, ...a }, o) {
    let c = S(Pe),
      l = S(mT),
      d = !!l,
      f = A(null),
      p = o ?? f,
      g = A(),
      _ = s(() => zh(t, a.background), [t, a.background]),
      [v, y] = k(!1),
      [b, x] = k(),
      T = C(() => {
        t &&
          (v
            ? u(() => {
                y(!0);
              })
            : I.read(() => {
                if (!p.current) return;
                let e = getComputedStyle(p.current),
                  n =
                    p.current.getAttribute(`data-border`) === `true`
                      ? getComputedStyle(p.current, `::after`)
                      : void 0,
                  r = p.current.offsetWidth ?? 1,
                  i = p.current.offsetHeight ?? 1,
                  a = Vh(p) || d ? { duration: 0 } : t.transition;
                u(() => {
                  (x({
                    borderRadius: e.borderRadius,
                    aspectRatio: r / (i || 1),
                    borderTop: n?.borderTopWidth,
                    borderRight: n?.borderRightWidth,
                    borderBottom: n?.borderBottomWidth,
                    borderLeft: n?.borderLeftWidth,
                    borderStyle: n?.borderStyle,
                    borderColor: n?.borderColor,
                    transition: a,
                    imageRendering: e.imageRendering,
                    filter: e.filter,
                  }),
                    y(!0),
                    l?.stop());
                });
              }));
      }, [t, v, p, l?.stop, d]),
      E = b?.aspectRatio ?? 1,
      D = Qm(() => {
        if (!t || !_?.src) return;
        let e = g.current?.[_.src];
        if (e) return e;
        let n = Nh(E, t.maxWidth, Rh(t), Lh(t)),
          r = Ph(_, { width: n, height: n * E });
        return ((g.current = { [_.src]: r }), r);
      }),
      ne = C(
        async (e) => {
          (r?.(e), !v && t && _ && (await D(), T()));
        },
        [r, T, v, _, t, D]
      ),
      j = C((e) => {
        (e?.stopPropagation(),
          u(() => {
            y(!1);
          }));
      }, []);
    (Mh(v, j),
      h(() => {
        if (!t) return;
        let e;
        function n() {
          e = setTimeout(() => {
            D();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = p.current;
        return (
          i?.addEventListener(`mouseenter`, n),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, D),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, n),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, D));
          }
        );
      }, [D, p, t]));
    let re = te(),
      ie = b?.transition ?? a.transition ?? c.transition,
      ae = b?.borderRadius,
      oe = b?.imageRendering,
      M = b?.filter,
      se = b?.borderTop,
      ce = b?.borderRight,
      le = b?.borderBottom,
      ue = b?.borderLeft,
      de = b?.borderStyle,
      fe = b?.borderColor,
      pe = !!(se || ce || le || ue || de || fe),
      N = pe
        ? {
            "--border-top-width": se,
            "--border-right-width": ce,
            "--border-bottom-width": le,
            "--border-left-width": ue,
            "--border-style": de,
            "--border-color": fe,
          }
        : void 0,
      me = { [gS]: a.id },
      he = Ih(t?.paddingTop, t?.padding),
      ge = Ih(t?.paddingBottom, t?.padding),
      P = Ih(t?.paddingLeft, t?.padding),
      ve = Ih(t?.paddingRight, t?.padding),
      ye = b?.borderRadius ? { ...a.style, borderRadius: b.borderRadius } : a.style,
      be = v ? (a.layoutDependency ? `${a.layoutDependency}-open` : `open`) : a.layoutDependency,
      xe = d && v ? void 0 : (a.layoutId ?? (t ? re : void 0));
    return /* @__PURE__ */ ee(w, {
      children: [
        /* @__PURE__ */ O(e, {
          ...a,
          style: ye,
          onClick: ne,
          layoutId: xe,
          ref: p,
          layoutDependency: be,
          transition: ie,
        }),
        /* @__PURE__ */ O(Ee, {
          onExitComplete: () => {
            u(() => {
              (x(void 0), l?.start());
            });
          },
          children:
            v &&
            t &&
            _ &&
            /* @__PURE__ */ O(
              i,
              {
                children: m(
                  /* @__PURE__ */ ee(w, {
                    children: [
                      /* @__PURE__ */ O(_e.div, {
                        ...me,
                        className: n,
                        onClick: j,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: t.zIndex,
                          backgroundColor: t.backdrop ?? `transparent`,
                        },
                        transition: ie,
                        initial: gT,
                        animate: _T,
                        exit: gT,
                      }),
                      /* @__PURE__ */ O(_e.div, {
                        ...me,
                        className: n,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${he}px ${ve}px ${ge}px ${P}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: t.zIndex,
                        },
                        children: /* @__PURE__ */ O(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: E,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: t.maxWidth,
                          },
                          children: /* @__PURE__ */ O(_e.div, {
                            layoutId: xe,
                            transition: ie,
                            onClick: T,
                            className: `framer-lightbox-container`,
                            "data-border": pe,
                            style: {
                              aspectRatio: E,
                              borderRadius: ae,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: oe,
                              filter: M,
                              ...N,
                            },
                            children: /* @__PURE__ */ O(Do, {
                              image: _,
                              alt: _.alt,
                              draggable: a.draggable,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  Fh()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function Uh(e) {
  let t = {};
  for (let n in e) (ae(n) || vy(n)) && (t[n] = e[n]);
  return t;
}
function Wh(e, t) {
  return bT && !t
    ? Document.parseHTMLUnsafe(e)
    : ((yT ??= new DOMParser()), yT.parseFromString(e, t ?? `text/html`));
}
function Gh(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function Kh(e, t, n, r) {
  return e.replace(xT, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = Fu(u.replace(/&amp;/gu, `&`));
    if (!d?.target) return e;
    let f = t(d.target);
    if (!mh(f) || !mh(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = sn(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = Lu(u);
    if (!_ || L(_)) return e;
    Ed(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(IS, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = Oi(m, v)), i + o + `"${Gh(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function qh(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function Jh(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function Yh(e, t, n) {
  let r = A([]);
  qh(r.current, e) ||
    ((r.current = e),
    Cy.fontStore.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      t && n.current && W.current() === W.canvas && e > 0 && Cs(n.current);
    }));
}
function Xh() {
  return { current: null };
}
async function Zh(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, "current", {
      get() {
        return n;
      },
      set(e) {
        ((n = e), e === null ? t.abort() : r(e));
      },
      configurable: !0,
    }),
    i
  );
}
function Qh(e) {
  return e in TT;
}
function $h(e, t) {
  let n = {};
  for (let r in e) {
    if (!Qh(r)) continue;
    let i = e[r],
      a = TT[r];
    B(i) || B(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function eg(e, t = `character`, n, r, a) {
  if (r) {
    let t = Xh();
    return (n.add(t), /* @__PURE__ */ O(`span`, { ref: t, style: a, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let o = t === r,
          s = e.length <= 12;
        return /* @__PURE__ */ ee(
          i,
          {
            children: [
              /* @__PURE__ */ O(`span`, {
                style: { whiteSpace: s ? `nowrap` : `unset` },
                children: e.match(ET)?.map((e, t) => {
                  let r = Xh();
                  return (
                    n.add(r),
                    /* @__PURE__ */ O(`span`, { ref: r, style: a, children: e }, e + t)
                  );
                }),
              }),
              o ? null : ` `,
            ],
          },
          e + t + o
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let o = t === r,
          s = Xh();
        return (
          n.add(s),
          /* @__PURE__ */ ee(
            i,
            {
              children: [
                /* @__PURE__ */ O(`span`, { ref: s, style: a, children: e }),
                o ? null : ` `,
              ],
            },
            e + t + o
          )
        );
      });
    }
    default:
      return e;
  }
}
function tg(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      H(t);
  }
}
function ng(e) {
  let t = [];
  return (
    R(e.x) && t.push(`translateX(${e.x}px)`),
    R(e.y) && t.push(`translateY(${e.y}px)`),
    R(e.scale) && t.push(`scale(${e.scale})`),
    R(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    R(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    R(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    R(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    R(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function rg(e, t, n, r) {
  if (!n?.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : ng(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : ng(n.effect),
              };
      }
    default:
      H(i);
  }
}
function ig(e, t, n) {
  let r = so(() => /* @__PURE__ */ new Set()),
    i = uo(),
    a = n || !i,
    o = le(),
    c = A({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  c.current.effect = e;
  let l = e?.trigger ?? `onMount`,
    u = e?.target,
    d = e?.threshold;
  h(() => {
    if (!a || n) return;
    c.current.hasMounted = !0;
    function e() {
      let { effect: e } = c.current;
      if (
        !a ||
        !e ||
        (e?.repeat !== !0 && c.current.hasAnimatedOnce) ||
        (e?.type === `appear` && c.current.isAnimating)
      )
        return;
      Object.assign(c.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: i, tokenization: a } = e,
            s = { current: void 0 };
          return (
            og(
              a,
              e.effect,
              r,
              t,
              n,
              i,
              o,
              () => {
                Object.assign(c.current, { isAnimating: !1 });
              },
              s
            ),
            () => s.current?.()
          );
        }
        default:
          H(t);
      }
    }
    switch (l) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? Le(n, e, { amount: d ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = u?.ref?.current;
        return t
          ? Le(t, e, {
              amount: d ?? 0,
              root: document,
              margin: u?.offset ? `${u.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        H(l);
    }
  }, [a, r, n, t, u, d, l]);
  let f = !!e,
    p = e ? tg(e) : void 0;
  return s(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !f)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = c.current,
          s = rg(a, n || ag(e, t, i), c.current.effect, o);
        return {
          text: (e) => eg(e, p, r, o, s),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = Xh();
            return (r.add(t), { ref: t, style: { ...e, ...s } });
          },
        };
      },
      play: () => {
        let { effect: e } = c.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            og(p, e.effect, r, t, n, !1, o);
            break;
          }
          default:
            H(t);
        }
      },
    }),
    [a, f, r, n, p]
  );
}
function ag(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function og(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = $h(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await sg(n, u);
      if (
        e === null ||
        (Te(e, l, { ...r, restDelta: 0.001, delay: De(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        Te(e, n, { ...r, restDelta: 0.001, delay: De(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await Zh(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (I.read(() => {
          ((e = cg(n)),
            e.length !== 0 &&
              I.update(() => {
                let t = e.map((e, t) =>
                  Te(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          Te(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      H(e);
  }
}
async function sg(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await Zh(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function cg(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r ? n.push(i.current) : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function lg(e) {
  return e.type === i;
}
function ug(e) {
  return e.type === `br`;
}
function dg(e, t, n, i, o = {}, s, c = lg(e) ? -1 : 0) {
  let l = r.toArray(e.props.children);
  B(n) || (l = l.slice(0, 1));
  let u = !0;
  l = l.map((e) => {
    if (((!b(e) || !ug(e)) && (u = !1), b(e))) return dg(e, t, n, i, o, s, c + 1);
    let r = B(n) ? e : n;
    return L(r) && s ? s.text(r) : r;
  });
  let { "data-preset-tag": d, ...f } = e.props;
  if (L(e.type) || Ie(e.type)) {
    let n = me(e.type) || e.type,
      a = d || n,
      p = L(a) ? t?.[a] : void 0;
    ((f.className = cl(`framer-text`, f.className, p)),
      s && c === 0 && !u && Object.assign(f, s.props(f.style)));
    let m = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      h = t?.anchor;
    if (m && h) {
      let e = fg(l, o);
      f.id = e;
      let t = cl(`framer-text`, h),
        n = /* @__PURE__ */ O(`a`, { href: `#${e}`, className: t, children: l });
      ((f.style = { ...f.style, scrollMarginTop: i }), (l = [n]));
    }
    a === `ol` &&
      (f.style = {
        ...f.style,
        [bt]: mg(f.start ?? 1, r.count(f.children), f.style?.[`--list-style-type`] ?? ``),
      });
  }
  return a(e, f, ...l);
}
function fg(e, t) {
  let n = vi(e.map(pg).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function pg(e) {
  return L(e) || R(e)
    ? e.toString()
    : b(e)
      ? pg(e.props.children)
      : Array.isArray(e)
        ? e.map(pg).join(``)
        : ``;
}
function mg(e, t, n) {
  return tt(Number(e) || 1, t, n);
}
function hg(e) {
  try {
    let t = Wh(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function gg(e, t) {
  vg(e, _g(t));
}
function _g(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function vg(e, t) {
  (yg(e, t),
    Array.from(e.children).forEach((e) => {
      vg(e, t);
    }));
}
function yg(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if ((n === `id` && e.setAttribute(n, `${t}_${r}`), n === `href` || n === `xlink:href`)) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function bg(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (t?.[1] !== void 0 && t?.[2] !== void 0 && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (zT[t[2]] || 1));
}
function xg(e) {
  let t = bg(e.getAttribute(`width`)),
    n = bg(e.getAttribute(`height`));
  if (typeof t == `number` && typeof n == `number` && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function Sg(e) {
  return e > BT ? `lazy` : void 0;
}
function Cg(e, t, n) {
  let r = Eg(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function wg(e) {
  return e ? (e.fonts ?? Ji()) : Ji();
}
function Tg(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : Eg(e);
}
function Eg(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    Dg(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(Og) })
      : t.fonts.push(Og(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function Dg(e) {
  return HT in e;
}
function Og(e) {
  let t = kg(e) || Ag(e) ? e : jg(e);
  return Ag(t) ? t : Mg(t);
}
function kg(e) {
  return `source` in e;
}
function Ag(e) {
  return `cssFamilyName` in e;
}
function jg(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function Mg(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${VT}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function Ng(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
async function Pg(e, t) {
  let n = [],
    r = !0;
  for (let i of e) {
    if (!r) {
      let e = V_({ batch: !0, priority: t.priority, signal: t.signal });
      e && (await e);
    }
    r = !1;
    try {
      let e = i();
      n.push(
        Promise.resolve(e).then(
          (e) => ({ status: `fulfilled`, value: e }),
          (e) => ({ status: `rejected`, reason: e })
        )
      );
    } catch (e) {
      n.push(Promise.resolve({ status: `rejected`, reason: e }));
    }
  }
  return Promise.all(n);
}
function Fg(e) {
  return e.loader;
}
function Ig(e, t, n) {
  let r = Fg(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var Lg,
  Rg,
  zg,
  Bg,
  Vg,
  Hg,
  Ug,
  Wg,
  Gg,
  Kg,
  qg,
  Jg,
  Yg,
  Xg,
  Zg,
  Qg,
  $g,
  e_,
  t_,
  n_,
  r_,
  i_,
  a_,
  o_,
  s_,
  c_,
  l_,
  u_,
  d_,
  f_,
  p_,
  m_,
  h_,
  g_,
  __,
  v_,
  y_,
  b_,
  x_,
  S_,
  C_,
  w_,
  T_,
  E_,
  D_,
  O_,
  k_,
  A_,
  j_,
  M_,
  N_,
  P_,
  F_,
  I_,
  L_,
  R_,
  z_,
  B_,
  V_,
  H_,
  U_,
  W_,
  G_,
  K_,
  q_,
  J_,
  Y_,
  X_,
  Z_,
  Q_,
  $_,
  ev,
  tv,
  nv,
  rv,
  iv,
  av,
  ov,
  sv,
  cv,
  lv,
  uv,
  dv,
  fv,
  pv,
  mv,
  hv,
  gv,
  _v,
  vv,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  Zv,
  Qv,
  Y,
  $v,
  ey,
  ty,
  ny,
  ry,
  iy,
  ay,
  oy,
  sy,
  cy,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  wy,
  Ty,
  Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  X,
  My,
  Ny,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  Uy,
  Wy,
  Gy,
  Ky,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  Ob,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  Z,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  Q,
  GC,
  KC,
  qC,
  JC,
  YC,
  $,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  PT,
  FT,
  IT,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT;
function UT() {
  return (UT = e(() => {
    (o(),
      xe(),
      Nt(),
      p(),
      g(),
      E(),
      (Lg = /* @__PURE__ */ new Map()),
      (Rg = /* @__PURE__ */ new Map()),
      (zg = /* @__PURE__ */ new Set()),
      (Bg = `:`),
      (Vg = lt ? void 0 : /* @__PURE__ */ new Set()),
      (Hg = `preload`),
      (Ug = Object.keys),
      (Wg = `equals`),
      (Gg = /* @__PURE__ */ f.createContext({})),
      (Kg = /* @__PURE__ */ f.createContext({})),
      (qg = []),
      (Jg = `default`),
      (Yg = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (Xg = class e {
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = Yg.Pending;
        preloadPromise;
        value;
        reason;
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && Ft(t, e));
        }
        then(e, t) {
          return this.promiseState === Yg.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === Yg.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== Yg.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && Vg !== void 0 && Vg.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = Yg.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = Yg.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && Lg.has(this.cacheHash) ? Lg.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!Ye(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        read = () => {
          if (this.promiseState === Yg.Fulfilled) return this.value;
          throw this.promiseState === Yg.Rejected
            ? this.reason
            : Error(`Need to call preload() before read()`);
        };
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (Zg = 2 ** 32 - 1),
      (Qg = Zg - 1),
      ($g = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (e_ = /* @__PURE__ */ Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (t_ = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (n_ = typeof Uint8Array.fromBase64 == `function`),
      (r_ = typeof process == `object` && process.versions?.node !== void 0),
      (i_ = n_ ? Cn : r_ ? Tn : Dn),
      (a_ = n_ ? wn : r_ ? En : On),
      (o_ = /* @__PURE__ */ Object.freeze({ kind: `not-plain` })),
      (s_ = /* @__PURE__ */ Object.freeze({ kind: `symbol-keys` })),
      (c_ = /* @__PURE__ */ Object.freeze({
        identify: (e) => e,
        typeOf: (e) => (e === null ? `null` : typeof e),
        toPrimitive: (e) => e,
        tagOf: (e) => fn(e),
        isThenable: (e) => typeof e.then == `function`,
        toPromise: (e) => Promise.resolve(e),
        unbox: (e) => e.valueOf(),
        toISOString: (e) => (isNaN(e.getDate()) ? `` : e.toISOString()),
        toStringValue: (e) => e.toString(),
        regExpInfo: (e) => ({ source: e.source, flags: e.flags }),
        valuesOf: (e) => e,
        entriesOf: (e) => e,
        viewInfo: (e) => (
          pn(e) && (e = new Uint8Array(e)),
          {
            buffer: e.buffer,
            byteOffset: e.byteOffset,
            byteLength: e.byteLength,
            length: e.length,
            bufferByteLength: e.buffer.byteLength,
          }
        ),
        toArrayBuffer: (e) => e,
        lengthOf: (e) => e.length,
        hasOwn: (e, t) => Object.hasOwn(e, t),
        indicesOf: (e) => Sn(e),
        shapeOf: (e) =>
          dn(e)
            ? gn(e).length > 0
              ? s_
              : {
                  kind: Object.getPrototypeOf(e) === null ? `null-proto` : `plain`,
                  keys: Object.keys(e),
                }
            : o_,
        get: (e, t) => e[t],
      })),
      (l_ = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, `byteLength`).get),
      (u_ =
        typeof SharedArrayBuffer > `u`
          ? void 0
          : Object.getOwnPropertyDescriptor(SharedArrayBuffer.prototype, `byteLength`).get),
      (d_ = /* @__PURE__ */ Object.freeze({
        fromPrimitive: (e) => e,
        fromISOString: (e) => new Date(e),
        fromStringValue: (e, t) =>
          e === `URL`
            ? new URL(t)
            : e === `URLSearchParams`
              ? new URLSearchParams(t)
              : Temporal[e.slice(9)].from(t),
        fromArrayBuffer: (e) => e,
        fromRegExpInfo: (e, t) => new RegExp(e, t),
        fromViewInfo: (e, t, n, r) => {
          try {
            l_.call(t);
          } catch (e) {
            if (!u_) throw e;
            u_.call(t);
          }
          let i = globalThis[e];
          return n === void 0 ? new i(t) : new i(t, n, r);
        },
        box: (e) => Object(e),
        createArray: (e) => Array(e),
        createSparseArray: (e) => {
          let t = [];
          return ((t[Qg] = void 0), delete t[Qg], (t.length = e), t);
        },
        createObject: () => ({}),
        createNullPrototypeObject: () => Object.create(null),
        createSet: () => /* @__PURE__ */ new Set(),
        createMap: () => /* @__PURE__ */ new Map(),
        set: (e, t, n) => {
          e[t] = n;
        },
        addValue: (e, t) => {
          e.add(t);
        },
        addEntry: (e, t, n) => {
          e.set(t, n);
        },
      })),
      (f_ = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (p_ = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (h_ = class {
        payload = Ln();
        isEmpty = !0;
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        toString() {
          if (!this.isEmpty)
            try {
              return Mn(this.payload);
            } catch (e) {
              console.error(`Failed to serialize handover data.`, e);
              return;
            }
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (g_ = lt ? void 0 : new h_()),
      (__ = p_.CollectionUtilsCache),
      (v_ = /* @__PURE__ */ new WeakMap()),
      (y_ = /* @__PURE__ */ _(void 0)),
      (b_ = class {
        collectionId;
        module;
        cacheMap = /* @__PURE__ */ new Map();
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new Xg(async () => {
              try {
                let t = await e();
                return (V(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(Ze(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        callUtilsMethod(e, t, n) {
          let r = Hn(n),
            i = Un(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (g_ !== void 0) {
              if (Ye(e)) return e.then((e) => (g_.set(__, i, e), e));
              g_.set(__, i, e);
            }
            return e;
          }
          if (Bn(__, i)) {
            let e = Vn(__, i);
            return (this.cacheMap.set(i, new Xg(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = Ye(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e]?.(t, n)) : a?.[e]?.(t, n);
          } catch (e) {
            (console.error(Ze(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (g_ !== void 0 && g_.set(__, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new Xg(async () => {
            try {
              let e = Ye(s) ? await s : s;
              return (g_ !== void 0 && g_.set(__, i, e), e);
            } catch (e) {
              console.error(Ze(`Failed to call CollectionUtils method.`, e));
              return;
            }
          });
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
        getContentLocaleIdByRecordId(e, t) {
          return this.callUtilsMethod(`getContentLocaleIdByRecordId`, e, t);
        }
      }),
      (x_ = /Mac/u),
      (S_ = /iPhone|iPod|iPad/iu),
      (C_ = /MacIntel/iu),
      (w_ = /Edg\//u),
      (T_ = /Chrome/u),
      (E_ = /Google Inc/u),
      (D_ = /Safari/u),
      (O_ = /Apple Computer/u),
      (k_ = /Firefox\/\d+\.\d+$/u),
      (A_ = /Version\/([\d.]+)/u),
      (j_ = /FramerX/u),
      (M_ = /tablet|iPad|Nexus 9/iu),
      (N_ = /mobi/iu),
      (P_ = 1e3 / 60),
      (F_ = 40),
      (I_ = 500),
      (L_ = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (R_ = /* @__PURE__ */ Promise.resolve()),
      (z_ = 100),
      (B_ = (e) => {
        I.read(e, !1, !0);
      }),
      (V_ = /* @__PURE__ */ hr(B_)),
      (H_ = `framer_variant`),
      (U_ = /* @__PURE__ */ RegExp(`:([a-z]\\w*)`, `gi`)),
      (W_ = async () => {}),
      (G_ = { contentLocale: null, activeLocale: null, locales: [], setLocale: W_ }),
      (K_ = /* @__PURE__ */ (() => {
        let e = f.createContext(G_);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (q_ = /* @__PURE__ */ (() => {
        let e = f.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (J_ = !ut),
      (Y_ = !1),
      (X_ = /* @__PURE__ */ f.createContext({ global: void 0, routes: {} })),
      (Z_ = 10),
      (Q_ = 1e4),
      ($_ = (e) => `--view-transition-${e}`),
      (ev = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${$_(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${$_(`conic-offset`)})`,
            r =
              (t === `exit` && e.angularDirection === `clockwise`) ||
              (t === `enter` && e.angularDirection === `counter-clockwise`),
            i = r ? `transparent` : `black`,
            a = r ? `black` : `transparent`,
            o = `conic-gradient(from `;
          return (
            (o += `${e.angle}deg at ${e.x} ${e.y}, `),
            (o += `${i} 0%, ${i} ${n}, `),
            (o += `${a} ${n}, ${a} 100%)`),
            `mask-image: ${o}; -webkit-mask-image: ${o};`
          );
        },
        makePropertyRules: () => `
        @property ${$_(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (tv = {
        circle: {
          makeKeyframe: (e, t) => `${$_(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${$_(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${Lr(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${$_(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: ev,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${Ir(e.x)} ${Ir(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = Pr(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${$_(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${$_(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${$_(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${$_(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${$_(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${$_(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (nv = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (rv = `view-transition-styles`),
      (iv = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (av = () => {}),
      (sv = () => {
        let e = document.title;
        e &&
          (document.ariaNotify
            ? document.ariaNotify(e, { priority: `high` })
            : (ov ||
                ((ov = document.createElement(`div`)),
                ov.setAttribute(`aria-live`, `assertive`),
                ov.setAttribute(`aria-atomic`, `true`),
                (ov.style.position = `absolute`),
                (ov.style.transform = `scale(0)`),
                document.body.append(ov)),
              setTimeout(() => {
                ov.textContent = e;
              }, 60)));
      }),
      (lv =
        lt &&
        typeof j.navigation?.back == `function` &&
        !(
          /* @__PURE__ */ (() => {
            if (d === void 0) return !1;
            let e = d.userAgent,
              t = e.indexOf(`Chrome/`),
              n = +e.slice(t + 7, e.indexOf(`.`, t));
            return n > 101 && n < 128;
          })()
        ) &&
        !er()),
      (uv = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (dv = /* @__PURE__ */ f.createContext(null)),
      (fv = /* @__PURE__ */ (() => {
        let e = _(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (pv = typeof document < `u` ? n : h),
      (mv = /* @__PURE__ */ new Set()),
      (hv = /* @__PURE__ */ (() => {
        let e = _({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (gv = 46),
      (_v = 47),
      (vv = (e, t) => e.charCodeAt(t)),
      (yv = (e, t) => e.lastIndexOf(t)),
      (bv = (e, t, n) => e.slice(t, n)),
      (xv = `/`),
      (Sv = (e) => e === _v),
      (Cv = /* @__PURE__ */ new Set([`/404.html`, `/404`, `/404/`])),
      (wv = `__f_replay`),
      (Tv =
        /* @__PURE__ */ `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (Ev = (e) => {
        e.target?.closest?.(`#main`) &&
          (Ii(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (Dv = !1),
      (Ov = class {
        markRenderStart = zi(() => {
          performance.mark(`framer-hydration-start`);
        });
        markRenderEnd = zi(() => {
          (performance.mark(`framer-hydration-render-end`),
            Bi(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        });
        markUseInsertionEffectsStart = zi(() => {
          performance.mark(`framer-hydration-insertion-effects-start`);
        });
        markUseInsertionEffectRouterStart = zi(() => {
          performance.mark(`framer-hydration-router-insertion-effect`);
        });
        markUseInsertionEffectsEnd = zi(() => {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            Bi(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`
            ));
        });
        markUseLayoutEffectsStart = zi(() => {
          performance.mark(`framer-hydration-layout-effects-start`);
        });
        markRouterUseLayoutEffectStart = zi(() => {
          performance.mark(`framer-hydration-router-layout-effect`);
        });
        markUseLayoutEffectsEnd = zi(() => {
          (performance.mark(`framer-hydration-layout-effects-end`),
            Bi(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`
            ));
        });
        markUseEffectsStart = zi(() => {
          performance.mark(`framer-hydration-effects-start`);
        });
        markUseEffectsRouterStart = zi(() => {
          performance.mark(`framer-hydration-router-effect`);
        });
        markUseEffectsAreSynchronous = zi(() => {
          performance.mark(`framer-hydration-effects-sync`);
        });
        markUseEffectsEnd = zi(() => {
          (performance.mark(`framer-hydration-effects-end`),
            Bi(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ??
                performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name,
              `framer-hydration-effects-end`
            ));
        });
        markRafStart = zi(() => {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        });
        markRafEnd = zi(() => {
          (performance.mark(`framer-hydration-browser-raf-end`),
            Bi(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        });
        markLayoutStylePaintEnd = zi(() => {
          (performance.mark(`framer-hydration-first-paint`),
            Bi(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            Bi(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        });
        measureMutationEffects = zi(() => {
          Bi(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        });
        measureUnattributedHydrationOverhead = zi(() => {
          Bi(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        });
        render = { markStart: () => this.markRenderStart(), markEnd: () => this.markRenderEnd() };
        mutationEffects = { measure: () => this.measureMutationEffects() };
        useInsertionEffects = {
          markStart: () => this.markUseInsertionEffectsStart(),
          markRouterStart: () => this.markUseInsertionEffectRouterStart(),
          markEnd: () => this.markUseInsertionEffectsEnd(),
        };
        useLayoutEffects = {
          markStart: () => this.markUseLayoutEffectsStart(),
          markRouterStart: () => this.markRouterUseLayoutEffectStart(),
          markEnd: () => this.markUseLayoutEffectsEnd(),
        };
        useEffects = {
          markStart: () => this.markUseEffectsStart(),
          markRouterStart: () => this.markUseEffectsRouterStart(),
          markEnd: () => this.markUseEffectsEnd(),
          markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
        };
        browserRendering = {
          hasStarted: !1,
          requestAnimationFrame: {
            markStart: () => this.markRafStart(),
            markEnd: () => this.markRafEnd(),
          },
          layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
        };
        unattributedHydrationOverhead = {
          measure: () => this.measureUnattributedHydrationOverhead(),
        };
      }),
      (Av = !1),
      (jv = { Start: Gi, End: Ki }),
      (Mv = class extends Error {}),
      (Nv = class extends D {
        constructor(e) {
          (super(e), (this.state = { error: void 0, routerRenderKey: e.routerRenderKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.routerRenderKey !== t.routerRenderKey) {
            let n = { routerRenderKey: e.routerRenderKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof Mv)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return qi(e, t);
        }
      }),
      (Pv = /* @__PURE__ */ Object.freeze([])),
      (Iv = /* @__PURE__ */ new Set()),
      (Lv = class {
        observers = /* @__PURE__ */ new Set();
        transactions = {};
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function` ? r(e, t) : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (Rv = /* @__PURE__ */ (() => {
        function e(e) {
          return (
            ma(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            ha(e) ? e : new Vv(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = /* @__PURE__ */ new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : ha(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              t[n] = ha(r) ? r.get() : r;
            }
            return t;
          }),
          e
        );
      })()),
      (zv = `onUpdate`),
      (Bv = `finishTransaction`),
      (Vv = class {
        value;
        observers = new Lv();
        constructor(e) {
          this.value = e;
        }
        static interpolationFor(e, t) {
          if (ha(e)) return ga(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (ha(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      (function (e) {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) => e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), { x: 0, y: 0 })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: va(e.x, t.x), y: va(e.y, t.y) })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t);
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(e) {
          let t = ba.centroid(e),
            n = /* @__PURE__ */ new Map();
          for (let r = 0; r < e.length; r++) {
            let i = e[r];
            i && n.set(i, Math.atan2(i.y - t.y, i.x - t.x));
          }
          return e.sort((e, t) => (n.get(e) ?? 0) - (n.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((ba ||= {})),
      (Hv = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (Uv = class e {
        constructor() {
          ((this.hex = `#000000`),
            (this.rgb_r = 0),
            (this.rgb_g = 0),
            (this.rgb_b = 0),
            (this.xyz_x = 0),
            (this.xyz_y = 0),
            (this.xyz_z = 0),
            (this.luv_l = 0),
            (this.luv_u = 0),
            (this.luv_v = 0),
            (this.lch_l = 0),
            (this.lch_c = 0),
            (this.lch_h = 0),
            (this.hsluv_h = 0),
            (this.hsluv_s = 0),
            (this.hsluv_l = 0),
            (this.hpluv_h = 0),
            (this.hpluv_p = 0),
            (this.hpluv_l = 0),
            (this.r0s = 0),
            (this.r0i = 0),
            (this.r1s = 0),
            (this.r1i = 0),
            (this.g0s = 0),
            (this.g0i = 0),
            (this.g1s = 0),
            (this.g1i = 0),
            (this.b0s = 0),
            (this.b0i = 0),
            (this.b1s = 0),
            (this.b1i = 0));
        }
        static fromLinear(e) {
          return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
        }
        static toLinear(e) {
          return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
        }
        static yToL(t) {
          return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16;
        }
        static lToY(t) {
          return t <= 8 ? (e.refY * t) / e.kappa : e.refY * ((t + 16) / 116) ** 3;
        }
        static rgbChannelToHex(t) {
          let n = Math.round(t * 255),
            r = n % 16,
            i = ((n - r) / 16) | 0;
          return e.hexChars.charAt(i) + e.hexChars.charAt(r);
        }
        static hexToRgbChannel(t, n) {
          let r = e.hexChars.indexOf(t.charAt(n)),
            i = e.hexChars.indexOf(t.charAt(n + 1));
          return (r * 16 + i) / 255;
        }
        static distanceFromOriginAngle(e, t, n) {
          let r = t / (Math.sin(n) - e * Math.cos(n));
          return r < 0 ? 1 / 0 : r;
        }
        static distanceFromOrigin(e, t) {
          return Math.abs(t) / Math.sqrt(e ** 2 + 1);
        }
        static min6(e, t, n, r, i, a) {
          return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))));
        }
        rgbToHex() {
          ((this.hex = `#`),
            (this.hex += e.rgbChannelToHex(this.rgb_r)),
            (this.hex += e.rgbChannelToHex(this.rgb_g)),
            (this.hex += e.rgbChannelToHex(this.rgb_b)));
        }
        hexToRgb() {
          ((this.hex = this.hex.toLowerCase()),
            (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
            (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
            (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
        }
        xyzToRgb() {
          ((this.rgb_r = e.fromLinear(
            e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z
          )),
            (this.rgb_g = e.fromLinear(
              e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z
            )),
            (this.rgb_b = e.fromLinear(
              e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z
            )));
        }
        rgbToXyz() {
          let t = e.toLinear(this.rgb_r),
            n = e.toLinear(this.rgb_g),
            r = e.toLinear(this.rgb_b);
          ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
            (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
            (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
        }
        xyzToLuv() {
          let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
            n = 4 * this.xyz_x,
            r = 9 * this.xyz_y;
          (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
            (this.luv_l = e.yToL(this.xyz_y)),
            this.luv_l === 0
              ? ((this.luv_u = 0), (this.luv_v = 0))
              : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                (this.luv_v = 13 * this.luv_l * (r - e.refV))));
        }
        luvToXyz() {
          if (this.luv_l === 0) {
            ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
            return;
          }
          let t = this.luv_u / (13 * this.luv_l) + e.refU,
            n = this.luv_v / (13 * this.luv_l) + e.refV;
          ((this.xyz_y = e.lToY(this.luv_l)),
            (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
            (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
        }
        luvToLch() {
          if (
            ((this.lch_l = this.luv_l),
            (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
            this.lch_c < 1e-8)
          )
            this.lch_h = 0;
          else {
            let e = Math.atan2(this.luv_v, this.luv_u);
            ((this.lch_h = (e * 180) / Math.PI), this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
          }
        }
        lchToLuv() {
          let e = (this.lch_h / 180) * Math.PI;
          ((this.luv_l = this.lch_l),
            (this.luv_u = Math.cos(e) * this.lch_c),
            (this.luv_v = Math.sin(e) * this.lch_c));
        }
        calculateBoundingLines(t) {
          let n = (t + 16) ** 3 / 1560896,
            r = n > e.epsilon ? n : t / e.kappa,
            i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
            a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
            o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
            s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
            c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
            l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
            u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
            d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
            f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
          ((this.r0s = i / o),
            (this.r0i = (a * t) / o),
            (this.r1s = i / (o + 126452)),
            (this.r1i = ((a - 769860) * t) / (o + 126452)),
            (this.g0s = s / l),
            (this.g0i = (c * t) / l),
            (this.g1s = s / (l + 126452)),
            (this.g1i = ((c - 769860) * t) / (l + 126452)),
            (this.b0s = u / f),
            (this.b0i = (d * t) / f),
            (this.b1s = u / (f + 126452)),
            (this.b1i = ((d - 769860) * t) / (f + 126452)));
        }
        calcMaxChromaHpluv() {
          let t = e.distanceFromOrigin(this.r0s, this.r0i),
            n = e.distanceFromOrigin(this.r1s, this.r1i),
            r = e.distanceFromOrigin(this.g0s, this.g0i),
            i = e.distanceFromOrigin(this.g1s, this.g1i),
            a = e.distanceFromOrigin(this.b0s, this.b0i),
            o = e.distanceFromOrigin(this.b1s, this.b1i);
          return e.min6(t, n, r, i, a, o);
        }
        calcMaxChromaHsluv(t) {
          let n = (t / 360) * Math.PI * 2,
            r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
            i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
            a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
            o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
            s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
            c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
          return e.min6(r, i, a, o, s, c);
        }
        hsluvToLch() {
          if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hsluv_l), this.calculateBoundingLines(this.hsluv_l));
            let e = this.calcMaxChromaHsluv(this.hsluv_h);
            this.lch_c = (e / 100) * this.hsluv_s;
          }
          this.lch_h = this.hsluv_h;
        }
        lchToHsluv() {
          if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHsluv(this.lch_h);
            ((this.hsluv_s = (this.lch_c / e) * 100), (this.hsluv_l = this.lch_l));
          }
          this.hsluv_h = this.lch_h;
        }
        hpluvToLch() {
          if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
          else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
          else {
            ((this.lch_l = this.hpluv_l), this.calculateBoundingLines(this.hpluv_l));
            let e = this.calcMaxChromaHpluv();
            this.lch_c = (e / 100) * this.hpluv_p;
          }
          this.lch_h = this.hpluv_h;
        }
        lchToHpluv() {
          if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
          else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
          else {
            this.calculateBoundingLines(this.lch_l);
            let e = this.calcMaxChromaHpluv();
            ((this.hpluv_p = (this.lch_c / e) * 100), (this.hpluv_l = this.lch_l));
          }
          this.hpluv_h = this.lch_h;
        }
        hsluvToRgb() {
          (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hpluvToRgb() {
          (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
        }
        hsluvToHex() {
          (this.hsluvToRgb(), this.rgbToHex());
        }
        hpluvToHex() {
          (this.hpluvToRgb(), this.rgbToHex());
        }
        rgbToHsluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHsluv());
        }
        rgbToHpluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHpluv());
        }
        hexToHsluv() {
          (this.hexToRgb(), this.rgbToHsluv());
        }
        hexToHpluv() {
          (this.hexToRgb(), this.rgbToHpluv());
        }
      }),
      (Uv.hexChars = `0123456789abcdef`),
      (Uv.refY = 1),
      (Uv.refU = 0.19783000664283),
      (Uv.refV = 0.46831999493879),
      (Uv.kappa = 903.2962962),
      (Uv.epsilon = 0.0088564516),
      (Uv.m_r0 = 3.240969941904521),
      (Uv.m_r1 = -1.537383177570093),
      (Uv.m_r2 = -0.498610760293),
      (Uv.m_g0 = -0.96924363628087),
      (Uv.m_g1 = 1.87596750150772),
      (Uv.m_g2 = 0.041555057407175),
      (Uv.m_b0 = 0.055630079696993),
      (Uv.m_b1 = -0.20397695888897),
      (Uv.m_b2 = 1.056971514242878),
      (Wv = /* @__PURE__ */ new Uv()),
      (Gv = /* @__PURE__ */ (() => {
        let e = `(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`,
          t = `[\\s|\\(]+(` + e + `)[,|\\s]+(` + e + `)[,|\\s]+(` + e + `)\\s*\\)?`,
          n =
            `[\\s|\\(]+(` +
            e +
            `)[,|\\s]+(` +
            e +
            `)[,|\\s]+(` +
            e +
            `)[,|\\s]+(` +
            e +
            `)\\s*\\)?`;
        return {
          rgb: RegExp(`rgb` + t),
          rgba: RegExp(`rgba` + n),
          hsl: RegExp(`hsl` + t),
          hsla: RegExp(`hsla` + n),
          hsv: RegExp(`hsv` + t),
          hsva: RegExp(`hsva` + n),
          hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
          hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
          hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
          hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        };
      })()),
      (Kv =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (qv = (e) => {
        let { r: t, g: n, b: r, a: i } = Wa(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (Jv = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Ka({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (Yv = (e) => {
        let { r: t, g: n, b: r, a: i } = Wa(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (Xv = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Ka({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (Zv = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return qa(this);
        }
        rgb() {
          return Za(this);
        }
        hsl() {
          return Aa(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(Ya(t));
            case `srgb`:
              return new e(Xa(Ya(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            Xa({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = Y(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = Ha(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!L(t) || !Y.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (Qv = /* @__PURE__ */ new Map()),
      (Y = /* @__PURE__ */ (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = Qv.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (Qv.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = Qa(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          }
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) => (typeof t == `string` ? e.isColorString(t) : e.isColorObject(t))),
          (e.isColorString = (e) => typeof e == `string` && za(e) !== !1),
          (e.isColorObject = (e) =>
            z(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => ka(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && Zv.isP3String(e)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...Ta(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = Na(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = Na(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = ka(e.r, e.g, e.b, !0);
            for (let e of Object.keys(Hv)) if (Hv[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100))))),
              (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100))))),
              (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100))))),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.alphaComposite = (t, n) => {
            if (t.a === 1) return t;
            if (n.a < 1)
              throw Error(
                "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
              );
            return t.a === 0
              ? n
              : e({
                  r: Math.round(t.r * t.a + n.r * (1 - t.a)),
                  g: Math.round(t.g * t.a + n.g * (1 - t.a)),
                  b: Math.round(t.b * t.a + n.b * (1 - t.a)),
                  a: 1,
                });
          }),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: xa(i, [0, 1], [t.r, r.r], a),
                g: xa(i, [0, 1], [t.g, r.g], a),
                b: xa(i, [0, 1], [t.b, r.b], a),
                a: xa(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: xa(i, [0, 1], [u, u + f], a),
                s: xa(i, [0, 1], [c.s, l.s], a),
                l: xa(i, [0, 1], [c.l, l.l], a),
                a: xa(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(Ea(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => Aa(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !(
              (t.toLowerCase().slice(-5) !== `color` && t !== `fill` && t !== `stroke`) ||
              typeof n != `string` ||
              !e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        function r(e) {
          e /= 255;
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: i, b: a } = e.toRgb(t);
            return 0.2126 * r(n) + 0.7152 * r(i) + 0.0722 * r(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      ($v = (e) => e instanceof ke),
      (ey = /* @__PURE__ */ Me((e, t) => {
        var n = Object.prototype.hasOwnProperty,
          r = `~`;
        function i() {}
        Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
        function a(e, t, n) {
          ((this.fn = e), (this.context = t), (this.once = n || !1));
        }
        function o(e, t, n, i, o) {
          if (typeof n != `function`) throw TypeError(`The listener must be a function`);
          var s = new a(n, i || e, o),
            c = r ? r + t : t;
          return (
            e._events[c]
              ? e._events[c].fn
                ? (e._events[c] = [e._events[c], s])
                : e._events[c].push(s)
              : ((e._events[c] = s), e._eventsCount++),
            e
          );
        }
        function s(e, t) {
          --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
        }
        function c() {
          ((this._events = new i()), (this._eventsCount = 0));
        }
        ((c.prototype.eventNames = function () {
          var e = [],
            t,
            i;
          if (this._eventsCount === 0) return e;
          for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
          return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
        }),
          (c.prototype.listeners = function (e) {
            var t = r ? r + e : e,
              n = this._events[t];
            if (!n) return [];
            if (n.fn) return [n.fn];
            for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
            return o;
          }),
          (c.prototype.listenerCount = function (e) {
            var t = r ? r + e : e,
              n = this._events[t];
            return n ? (n.fn ? 1 : n.length) : 0;
          }),
          (c.prototype.emit = function (e, t, n, i, a, o) {
            var s = r ? r + e : e;
            if (!this._events[s]) return !1;
            var c = this._events[s],
              l = arguments.length,
              u,
              d;
            if (c.fn) {
              switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
                case 1:
                  return (c.fn.call(c.context), !0);
                case 2:
                  return (c.fn.call(c.context, t), !0);
                case 3:
                  return (c.fn.call(c.context, t, n), !0);
                case 4:
                  return (c.fn.call(c.context, t, n, i), !0);
                case 5:
                  return (c.fn.call(c.context, t, n, i, a), !0);
                case 6:
                  return (c.fn.call(c.context, t, n, i, a, o), !0);
              }
              for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
              c.fn.apply(c.context, u);
            } else {
              var f = c.length,
                p;
              for (d = 0; d < f; d++)
                switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                  case 1:
                    c[d].fn.call(c[d].context);
                    break;
                  case 2:
                    c[d].fn.call(c[d].context, t);
                    break;
                  case 3:
                    c[d].fn.call(c[d].context, t, n);
                    break;
                  case 4:
                    c[d].fn.call(c[d].context, t, n, i);
                    break;
                  default:
                    if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                    c[d].fn.apply(c[d].context, u);
                }
            }
            return !0;
          }),
          (c.prototype.on = function (e, t, n) {
            return o(this, e, t, n, !1);
          }),
          (c.prototype.once = function (e, t, n) {
            return o(this, e, t, n, !0);
          }),
          (c.prototype.removeListener = function (e, t, n, i) {
            var a = r ? r + e : e;
            if (!this._events[a]) return this;
            if (!t) return (s(this, a), this);
            var o = this._events[a];
            if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
            else {
              for (var c = 0, l = [], u = o.length; c < u; c++)
                (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
              l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
            }
            return this;
          }),
          (c.prototype.removeAllListeners = function (e) {
            var t;
            return (
              e
                ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                : ((this._events = new i()), (this._eventsCount = 0)),
              this
            );
          }),
          (c.prototype.off = c.prototype.removeListener),
          (c.prototype.addListener = c.prototype.on),
          (c.prefixed = r),
          (c.EventEmitter = c),
          t !== void 0 && (t.exports = c));
      })),
      (ty = ey().EventEmitter),
      (ny = class {
        _emitter = new ty();
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames()) if (t === this._emitter.listeners(e)) return;
          }
          n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames()) e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (ry = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (iy = U.requestAnimationFrame || ry),
      (ay = (e) => iy(e)),
      (oy = 1 / 60),
      (sy = class extends ny {
        _started = !1;
        _frame = 0;
        _frameTasks = [];
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          oy = e;
        }
        static get TimeStep() {
          return oy;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return (this._started || ((this._frame = 0), (this._started = !0), ay(this.tick)), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * oy;
        }
        tick = () => {
          this._started &&
            (ay(this.tick),
            this.emit(`update`, this._frame, oy),
            this.emit(`render`, this._frame, oy),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (cy = /* @__PURE__ */ new sy()),
      (ly = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      Ae({
        borderTopWidth: ly(`y`),
        borderLeftWidth: ly(`x`),
        borderRightWidth: ly(`x`),
        borderBottomWidth: ly(`y`),
      }),
      (uy = /* @__PURE__ */ f.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (dy = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (fy = {
        ...dy,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (py = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (my = { ...py, fontWeight: 500 }),
      (hy = {
        ...py,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (gy = (e) => e),
      (_y =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (vy = /* #__PURE__ */ po(
        (e) =>
          _y.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (yy = (e) => () => {
        pa(e);
      }),
      (by = () => () => {}),
      (xy = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = Cy.useImageSource(e, t, n);
          return s(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        fontStore: {
          isSelectorLoaded() {
            return !0;
          },
          async loadFonts() {
            return { newlyLoadedFontCount: 0 };
          },
          async loadWebFontsFromSelectors() {
            return [];
          },
          async loadMissingFonts() {},
        },
        isOnPageCanvas: !1,
      }),
      (Sy = !1),
      (Cy = /* @__PURE__ */ new Proxy(xy, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? by()
              : yy(
                  Sy
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (wy = {
        isSelectorLoaded(e) {
          return Cy.fontStore.isSelectorLoaded(e);
        },
        loadFonts(e) {
          return Cy.fontStore.loadFonts(e);
        },
        loadWebFontsFromSelectors(e) {
          return Cy.fontStore.loadWebFontsFromSelectors(e);
        },
        loadMissingFonts(e, t) {
          return Cy.fontStore.loadMissingFonts(e, t);
        },
      }),
      (Ty = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (Ey = [1, 2, 2.2]),
      (Dy = [512, 1024, 2048, 4096]),
      (Oy = { position: `absolute`, ...Ty, top: 0, right: 0, bottom: 0, left: 0 }),
      (ky = `src`),
      (Ay = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && ky in e;
        },
      }),
      (jy = /* @__PURE__ */ (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = Fo(ba.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(ba(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
          }),
          (e.distance = (e) => ba.distance(e.a, e.b)),
          e
        );
      })()),
      (X = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
        divide: (e, t) => X.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return { x: t, y: n, width: Math.max(r - t, 1), height: Math.max(i - n, 1) };
        },
        round: (e, t = 0) => ({
          x: _a(e.x, t),
          y: _a(e.y, t),
          width: _a(e.width, t),
          height: _a(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: X.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: X.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return { x: a, y: o, width: ba.distance(t, n), height: ba.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(X.minX)), y: Math.min(...e.map(X.minY)) },
            n = { x: Math.max(...e.map(X.maxX)), y: Math.max(...e.map(X.maxY)) };
          return X.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: X.minX(e), y: X.minY(e) },
          { x: X.minX(e), y: X.maxY(e) },
          { x: X.maxX(e), y: X.minY(e) },
          { x: X.maxX(e), y: X.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < X.minX(e) ||
            t.x > X.maxX(e) ||
            t.y < X.minY(e) ||
            t.y > X.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of X.points(t)) if (!X.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(t.x >= X.maxX(e) || X.maxX(t) <= e.x || t.y >= X.maxY(e) || X.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = X.maxX(e),
            r = X.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = X.maxY(e),
            r = X.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => !t.some((t) => X.intersects(t, e)),
        isEqual: (e, t) => X.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x ? (n = e.x - t.x) : t.x > X.maxX(e) && (n = t.x - X.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > X.maxY(e) && (r = t.y - X.maxY(e)),
            ba.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: X.minX(e), y: X.minY(e) },
            r = { x: X.minX(t), y: X.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = X.minX(e),
            r = X.minY(e),
            i = X.maxX(e),
            a = X.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = X.cornerPoints(e);
          return [jy(t, n), jy(n, r), jy(r, i), jy(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  H(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              H(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  H(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              H(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = X.center(e),
            r = jy(t, n),
            i = X.edges(e);
          for (let e = 0; e < i.length; e++) {
            let t = i[e];
            if (t && jy.intersection(r, t, !0)) {
              let n = My[e];
              return (V(n, () => `Invalid edge name: ${JSON.stringify(My)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          V(r, `Rect array is empty`);
          let i = X.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            V(o);
            let s = X.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (My = [`top`, `right`, `bottom`, `left`]),
      (Ny = {
        quickfix: (e) => (
          (Io(e.widthType) || Io(e.heightType)) && (e.aspectRatio = null),
          G(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || Io(e.widthType) || G(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || Io(e.heightType) || G(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (Py = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = Ny.quickfix({
              left: G(t) || ha(t),
              right: G(n) || ha(n),
              top: G(r) || ha(r),
              bottom: G(i) || ha(i),
              widthType: Lo(a),
              heightType: Lo(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = Rv.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = Rv.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? Rv.getNumber(t) : null,
              right: d.right ? Rv.getNumber(n) : null,
              top: d.top ? Rv.getNumber(r) : null,
              bottom: d.bottom ? Rv.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? Rv.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? Rv.getNumber(t?.sizing.height) : null,
            c = Uo(e.left, e.right);
          if (o && G(c)) i = o - c;
          else if (n && Io(e.widthType)) i = n.width;
          else if (G(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                H(e.widthType);
            }
          let l = Uo(e.top, e.bottom);
          if (s && G(l)) a = s - l;
          else if (n && Io(e.heightType)) a = n.height;
          else if (G(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                H(e.heightType);
            }
          return Ho(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = Py.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? Rv.getNumber(l.width) : null,
            d = l ? Rv.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? X.pixelAligned(f) : f;
        },
      }),
      (Fy = 200),
      (Iy = 200),
      (Ly = /* @__PURE__ */ f.createContext({ parentSize: 0 })),
      (Ry = (e) => {
        let t = Zo(),
          { parentSize: n, children: r } = e,
          i = f.useMemo(() => ({ parentSize: n }), [$o(n), es(n)]);
        return t === 1
          ? r
            ? /* @__PURE__ */ O(w, { children: r })
            : null
          : /* @__PURE__ */ O(Ly.Provider, { value: i, children: r });
      }),
      (zy = /* @__PURE__ */ f.createContext(void 0)),
      (By = `style[data-framer-css-ssr-minified]`),
      (Vy = /* #__PURE__ */ (() => {
        if (!nr()) return /* @__PURE__ */ new Set();
        let e = document.querySelector(By)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : /* @__PURE__ */ new Set();
      })()),
      (Hy = `data-framer-css-ssr`),
      (Uy = (e, t, n) => (
        os() &&
          n !== void 0 &&
          !Be(t) &&
          (Array.isArray(t)
            ? t
            : t.split(`
`)
          ).filter(Boolean),
        f.forwardRef((r, i) => {
          let { sheet: a, cache: o } = f.useContext(zy) ?? {},
            s = n;
          if (!nr()) {
            Be(t) && (t = t(ss(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            Gy.add(e, s);
          }
          return (
            c(() => {
              (s && Vy.has(s)) ||
                (Be(t)
                  ? t(ss(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && $e(e, a, o));
            }, []),
            /* @__PURE__ */ O(e, { ...r, ref: i })
          );
        })
      )),
      (Wy = class {
        styles = /* @__PURE__ */ new Set();
        componentIds = /* @__PURE__ */ new Set();
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (Gy = /* @__PURE__ */ new Wy()),
      (Jy = /* @__PURE__ */ $n()),
      (Yy = /* @__PURE__ */ f.createContext(!1)),
      (Xy = class {
        sharedResizeObserver;
        callbacks = /* @__PURE__ */ new WeakMap();
        constructor() {
          this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      (Zy = nr() ? new Xy() : void 0),
      (Qy = `0.000001px`),
      ($y = ` translateZ(${Qy})`),
      (eb = ir() || er() || ar()),
      (tb = /* @__PURE__ */ (() => {
        class e extends D {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? ws(t) : Ts(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !Zt(this.props, e);
          }
          componentDidUpdate(e) {
            gy(this.props).clip &&
              gy(this.props).radius === 0 &&
              gy(e).radius !== 0 &&
              Ds(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (nb = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (rb = {
        hueRotate: (e, t) => Y.toHslString(Y.hueRotate(Y(e), t)),
        setAlpha: (e, t) => Y.toRgbString(Y.alpha(Y(e), t)),
        getAlpha: (e) => {
          let t = za(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => Y.toRgbString(Y.multiplyAlpha(Y(e), t)),
        toHexValue: (e) => Y.toHex(Y(e)).toUpperCase(),
        toHex: (e) => Y.toHexString(Y(e)).toUpperCase(),
        toRgb: (e) => Y.toRgb(Y(e)),
        toRgbString: (e) => Y.toRgbString(Y(e)),
        toHSV: (e) => Y.toHsv(Y(e)),
        toHSL: (e) => Y.toHsl(Y(e)),
        toHslString: (e) => Y.toHslString(Y(e)),
        toHsvString: (e) => Y.toHsvString(Y(e)),
        hsvToHSLString: (e) => Y.toHslString(Y(Da(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => Y.toHex(Y(Da(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => Y.toHexString(Y(Da(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => Y.toRgbString(Y(Da(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => Da(e.h, e.s, e.v),
        rgbaToString: (e) => Y.toRgbString(Y(e)),
        rgbToHexValue: (e) => Y.toHex(Y(e)),
        rgbToHexString: (e) => Y.toHexString(Y(e)),
        hslToString: (e) => Y.toHslString(Y(e)),
        hslToRgbString: (e) => Y.toRgbString(Y(e)),
        toColorPickerSquare: (e) => Y.toRgbString(Y({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => Y(e).isValid !== !1,
        equals: (e, t) =>
          Y.isP3String(e) || Y.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = Y(e)),
              typeof t == `string` && (t = Y(t)),
              Y.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = Y(e);
          return t.a === 1 ? Y.toHexString(t) : Y.toRgbString(t);
        },
        toFormatString: (e) => (Y.isP3String(e) ? e : Y.toRgbString(Y(e))),
      }),
      (ib = /var\(.+\)/u),
      (ab = /* @__PURE__ */ new Map()),
      (ob = [`stops`]),
      (sb = [`start`, `end`]),
      (cb = [`angle`, `alpha`]),
      (lb = {
        isLinearGradient: (e) => z(e) && cb.every((t) => t in e) && (Fs(e) || Ps(e)),
        hash: (e) => e.angle ^ Ns(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = Ms(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (ub = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (db = {
        isRadialGradient: (e) => z(e) && ub.every((t) => t in e) && (Fs(e) || Ps(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ Ns(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = Ms(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (fb = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (pb = /* @__PURE__ */ new Set([...fb, ...fb.map((e) => `${e}Capture`)])),
      (mb = `overflow`),
      (hb = { x: 0, y: 0, width: 200, height: 200 }),
      (gb = /* @__PURE__ */ new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (_b = /* @__PURE__ */ T(function (e, t) {
        let { name: n, center: r, border: i, _border: a, __portal: o } = e,
          { props: s, children: c } = ms(e),
          l = Ks(s),
          u = gs(e),
          d = Vs(e),
          f = A(null),
          p = t ?? f,
          m = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": d,
            "data-framer-highlight": d === `pointer` || void 0,
            "data-layoutid": u,
            "data-framer-offset-parent-id": gy(e)[`data-framer-offset-parent-id`],
          };
        !qs(e) && n && (gy(m)[`data-framer-name`] = n);
        let [h, g] = Gs(s),
          _ = Ws(s),
          v = rs(_),
          y = r && !(g && !v && Go(_)) ? r : void 0;
        (y ? (l.transformTemplate ||= hs(r)) : (l.transformTemplate ||= void 0),
          Object.assign(m, fs(y, s.style)),
          Ss(e, p));
        let b = jo(e),
          x = Js(s, _, g, S(Yy)),
          C = ts(
            /* @__PURE__ */ ee(w, {
              children: [
                b
                  ? /* @__PURE__ */ O(Do, {
                      alt: e.alt ?? ``,
                      image: b,
                      containerSize: g ?? void 0,
                      nodeId: e.id && ps(e.id),
                      layoutId: u,
                    })
                  : null,
                c,
                /* @__PURE__ */ O(ko, { ...a, border: i, layoutId: u }),
              ],
            }),
            x
          ),
          T = as(e.as),
          E = is(b);
        return (
          e.fitImageDimension &&
            E &&
            ((h[e.fitImageDimension] = `auto`), (h.aspectRatio = E.width / E.height)),
          /* @__PURE__ */ ee(T, { ...m, ...l, layoutId: u, style: h, ref: p, children: [C, o] })
        );
      })),
      (vb = /* @__PURE__ */ us(
        /* @__PURE__ */ T(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? /* @__PURE__ */ O(_b, { ...e, ref: t }) : null;
        })
      )),
      (yb = `__LAYOUT_TREE_ROOT`),
      (bb = /* @__PURE__ */ f.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (xb = class extends D {
        shouldAnimate = !1;
        transition;
        lead;
        follow;
        scheduledPromotion = !1;
        scheduledDidUpdate = !1;
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity:
                  t.options.layoutId === `__LAYOUT_TREE_ROOT` && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        scheduleProjectionDidUpdate = () => {
          this.scheduledDidUpdate = !0;
        };
        schedulePromoteTree = (e, t, n) => {
          ((this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0));
        };
        initLead = (e, t) => {
          ((this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0));
        };
        sharedLayoutContext = {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        };
        render() {
          return /* @__PURE__ */ O(bb.Provider, {
            value: this.sharedLayoutContext,
            children: this.props.children,
          });
        }
      }),
      (Sb = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (Cb = class {
        sharedIntersectionObserver;
        callbacks = /* @__PURE__ */ new WeakMap();
        constructor(e) {
          this.sharedIntersectionObserver = new IntersectionObserver(
            this.intersectionObserverCallback.bind(this),
            e
          );
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (wb = /* @__PURE__ */ _(/* @__PURE__ */ new Map())),
      (Tb = typeof IntersectionObserver > `u` ? ct : rc),
      (Eb = /* @__PURE__ */ Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (Db = /* @__PURE__ */ f.createContext(null)),
      (Ob = class extends D {
        layoutMaybeMutated = !1;
        projectionNodes = /* @__PURE__ */ new Map();
        rootProjectionNode;
        isExiting;
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        shouldPreserveFollowOpacity = (e) =>
          e.options.layoutId === `__LAYOUT_TREE_ROOT` && !this.props.isExiting;
        switchLayoutGroupContext = {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        };
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return /* @__PURE__ */ O(F.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (kb = (e) => {
        let t = f.useContext(bb);
        return /* @__PURE__ */ O(Ob, { ...e, sharedLayoutContext: t });
      }),
      (Ab = /* @__PURE__ */ f.createContext(!0)),
      (jb = /* @__PURE__ */ _({ register: () => {}, deregister: () => {} })),
      (Mb = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let r = cc(),
          i = C(
            (e) => {
              r.has(e)
                ? console.warn(`NavigationTargetWrapper: already registered`)
                : r.set(e, void 0);
            },
            [r]
          ),
          a = C(
            (e) => {
              (r.get(e)?.(), r.delete(e));
            },
            [r]
          ),
          o = A({ register: i, deregister: a }).current;
        return (
          h(
            () => (
              r.forEach((n, i) => {
                let a = i(e, t);
                r.set(i, Be(a) ? a : void 0);
              }),
              () => {
                r.forEach((e, t) => {
                  e && (e(), r.set(t, void 0));
                });
              }
            ),
            [e, t, r]
          ),
          /* @__PURE__ */ O(jb.Provider, { value: o, children: n })
        );
      }),
      (Nb = /* @__PURE__ */ f.memo(function ({
        isLayeredContainer: e,
        isCurrent: t,
        isPrevious: n,
        isOverlayed: r = !1,
        visible: i,
        transitionProps: a,
        children: o,
        backdropColor: s,
        onTapBackdrop: c,
        backfaceVisible: l,
        exitBackfaceVisible: u,
        animation: d,
        exitAnimation: f,
        instant: p,
        initialProps: m,
        exitProps: g,
        position: _ = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: v,
        index: y,
        areMagicMotionLayersPresent: b,
        id: x,
        isInitial: C,
      }) {
        let w = se(),
          T = S(Fe),
          { persistLayoutIdCache: E } = S(uy),
          D = A({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: dc({}, m, a),
          }),
          k = A(null),
          te = T !== null && !T.isPresent;
        (t && D.current.wasCurrent === void 0 && E(),
          h(() => {
            if (e || !w) return;
            if (te) {
              D.current = { ...D.current, wasBeingRemoved: te };
              return;
            }
            let { wasPrevious: r, wasCurrent: i } = D.current,
              o = (t && !i) || (!te && D.current.wasBeingRemoved && t),
              s = n && !r,
              c = dc(D.current.origins, m, a),
              l = D.current.wasReset;
            (o || s
              ? (w.stop(), w.start({ zIndex: y, ...c, ...a }), (l = !1))
              : l === !1 && (w.stop(), w.set({ zIndex: y, ...Pb, opacity: 0 }), (l = !0)),
              (D.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [t, n, te]));
        let ne = p ? { type: !1 } : `velocity` in d ? { ...d, velocity: 0 } : d,
          j = p ? { type: !1 } : f || d,
          re = { ..._ };
        ((re.left === void 0 || re.right === void 0) && (re.width = `auto`),
          (re.top === void 0 || re.bottom === void 0) && (re.height = `auto`));
        let ie = (fc(a) || fc(m)) && (e || t || n) ? 1200 : void 0,
          ae = { ...Pb, ...D.current.origins },
          oe = e
            ? {
                initial: { ...ae, ...m },
                animate: { ...ae, ...a, transition: ne },
                exit: { ...ae, ...g, transition: d },
              }
            : { animate: w, exit: { ...ae, ...g, transition: j } },
          M = !(te || b === !1),
          ce = !!t && M,
          le = t && C;
        return /* @__PURE__ */ ee(vb, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || te || (t && v) ? y : void 0,
            pointerEvents: void 0,
            visibility: i ? `visible` : `hidden`,
            perspective: ie,
          },
          children: [
            e &&
              /* @__PURE__ */ O(vb, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: d,
                initial: { opacity: p && i ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: s || `transparent`,
                onTap: te ? void 0 : c,
              }),
            /* @__PURE__ */ O(vb, {
              ...re,
              ...oe,
              transition: {
                default: ne,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: te ? u : l,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!t,
              style: { pointerEvents: void 0, opacity: le || e || (t && v) ? 1 : 0 },
              "data-is-present": M ? void 0 : !1,
              ref: k,
              children: /* @__PURE__ */ O(Db.Provider, {
                value: k,
                children: /* @__PURE__ */ O(Ab.Provider, {
                  value: ce,
                  children: /* @__PURE__ */ O(Mb, {
                    isCurrent: ce,
                    isOverlayed: r,
                    children: /* @__PURE__ */ O(kb, {
                      isLead: t,
                      animatesLayout: !!v,
                      transition: ne,
                      isExiting: !M,
                      isOverlayed: r,
                      id: x,
                      children: o,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, uc)),
      (Pb = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (Fb = class {
        warning = () => {
          pa(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
        };
        goBack = () => this.warning();
        instant = () => this.warning();
        fade = () => this.warning();
        push = () => this.warning();
        modal = () => this.warning();
        overlay = () => this.warning();
        flip = () => this.warning();
        customTransition = () => this.warning();
        magicMotion = () => this.warning();
      }),
      (Ib = /* @__PURE__ */ _(/* @__PURE__ */ new Fb())),
      (Lb = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } },
        FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } },
        FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } },
        FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (Rb = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (zb = /* @__PURE__ */ Ug(Pb)),
      (Bb = /* @__PURE__ */ f.createContext(void 0)),
      (Vb = /* @__PURE__ */ f.createContext(void 0)),
      (Hb = /* @__PURE__ */ (() => {
        class e extends D {
          #e = null;
          state = Rb();
          static defaultProps = { enabled: !0 };
          static contextType = Bb;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !Po(t) || !No(t)) return;
            let n = { ...Lb.Instant },
              r = {
                type: `add`,
                key: t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = gc(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!Po(t) || !No(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, Lb.Instant)
                : this.#r({ type: `update`, key: n, component: t }));
          }
          componentWillUnmount() {
            this.props.resetProjection?.();
          }
          #t(e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }
          #n() {
            return globalThis.event ? this.#e === globalThis.event.timeStamp : !1;
          }
          #r = (e) => {
            if (!this.props.enabled && this.state.history.length > 0) return;
            let t = gc(this.state, e);
            if (!t) return;
            let { skipLayoutAnimation: n } = this.props,
              r = t.history[t.current],
              i =
                (e.type === `add` && e.transition.withMagicMotion) ||
                (e.type === `forward` && r?.transition.withMagicMotion) ||
                (e.type === `remove` && !!t.previousTransition),
              a = () => {
                (this.setState(t), r?.key && this.context?.(r.key));
              };
            n && !i ? n(a) : a();
          };
          #i(e, t, n) {
            if (
              this.#n() ||
              ((this.#e = globalThis.event?.timeStamp || null), !e || !Po(e) || !No(e))
            )
              return;
            let r = { ...t, ...n };
            if (r.overCurrentContext)
              return this.#r({ type: `addOverlay`, transition: r, component: e });
            let i = e.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            this.#r({ type: `add`, key: i, transition: r, component: e });
          }
          goBack = () => {
            if (!this.#n())
              return (
                (this.#e = globalThis.event?.timeStamp || null),
                this.state.currentOverlay === -1
                  ? this.#r({ type: `remove` })
                  : this.#r({ type: `removeOverlay` })
              );
          };
          instant(e) {
            this.#i(e, Lb.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, Lb.Fade, t);
          }
          push(e, t) {
            this.#i(e, pc(t), t);
          }
          modal(e, t) {
            this.#i(e, Lb.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, mc(t), t);
          }
          flip(e, t) {
            this.#i(e, hc(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, Lb.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = jc(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              V(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              V(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                /* @__PURE__ */ O(
                  Nb,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: Vc(o, e),
                    transitionProps: u,
                    animation: Bc(o, e),
                    backfaceVisible: Rc(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: /* @__PURE__ */ O(Ys, {
                      children: Uc({ component: n, transition: l?.transition }),
                    }),
                  },
                  t
                )
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              /* @__PURE__ */ O(
                Nb,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: Lc(n, t),
                  transitionProps: zc(n, t),
                  instant: Vc(n, t, !0),
                  animation: Bc(n, t),
                  exitProps: e.transition.enter,
                  visible: Hc(n, t),
                  backdropColor: Fc(e.transition),
                  backfaceVisible: Ic(n, t),
                  onTapBackdrop: Wc(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: Uc({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return /* @__PURE__ */ O(vb, {
              "data-framer-component-type": `NavigationRoot`,
              top: 0,
              left: 0,
              width: `100%`,
              height: `100%`,
              position: `relative`,
              style: {
                overflow: `hidden`,
                backgroundColor: `unset`,
                pointerEvents: void 0,
                ...this.props.style,
              },
              children: /* @__PURE__ */ O(Ib.Provider, {
                value: this,
                children: /* @__PURE__ */ ee(Vb.Provider, {
                  value: i,
                  children: [
                    /* @__PURE__ */ O(Nb, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: Mc(n),
                      animation: Nc(n),
                      backfaceVisible: Pc(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: /* @__PURE__ */ O(io, {
                        children: /* @__PURE__ */ O(xb, {
                          children: /* @__PURE__ */ O(Ee, {
                            presenceAffectsLayout: !1,
                            children: a,
                          }),
                        }),
                      }),
                    }),
                    /* @__PURE__ */ O(Ee, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (Ub = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (Wb = /* @__PURE__ */ us(/* @__PURE__ */ f.forwardRef(Gc))),
      (Gb = /* @__PURE__ */ (function (e) {
        return (
          (e.Boolean = `boolean`),
          (e.Number = `number`),
          (e.MotionValue = `motionvalue`),
          (e.Dimension = `dimension`),
          (e.String = `string`),
          (e.RichText = `richtext`),
          (e.FusedNumber = `fusednumber`),
          (e.Enum = `enum`),
          (e.SegmentedEnum = `segmentedenum`),
          (e.Color = `color`),
          (e.Image = `image`),
          (e.ResponsiveImage = `responsiveimage`),
          (e.File = `file`),
          (e.ComponentInstance = `componentinstance`),
          (e.Slot = `slot`),
          (e.Array = `array`),
          (e.EventHandler = `eventhandler`),
          (e.ChangeHandler = `changehandler`),
          (e.Transition = `transition`),
          (e.BoxShadow = `boxshadow`),
          (e.Link = `link`),
          (e.Date = `date`),
          (e.Object = `object`),
          (e.Font = `font`),
          (e.PageScope = `pagescope`),
          (e.ScrollSectionRef = `scrollsectionref`),
          (e.CustomCursor = `customcursor`),
          (e.Border = `border`),
          (e.Cursor = `cursor`),
          (e.Padding = `padding`),
          (e.BorderRadius = `borderradius`),
          (e.Gap = `gap`),
          (e.CollectionReference = `collectionreference`),
          (e.MultiCollectionReference = `multicollectionreference`),
          (e.TrackingId = `trackingid`),
          (e.VectorSetItem = `vectorsetitem`),
          (e.LinkRelValues = `linkrelvalues`),
          (e.Location = `location`),
          (e.SharedType = `sharedtype`),
          e
        );
      })({})),
      (Kb = /* @__PURE__ */ Symbol.for(`framer.sharedEnum`)),
      (qb = `optional`),
      (Jb = `outputControls`),
      (Yb = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (Xb = /* @__PURE__ */ Symbol(`private`)),
      (Zb = /* @__PURE__ */ (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [Xb]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new Lv(),
                reset() {
                  for (let t in i)
                    if (Yb(i, t)) {
                      let n = Yb(e, t) ? gy(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: /* @__PURE__ */ new Set(),
              },
            },
            i = new Proxy(r, $b);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[Xb].reset()),
          (e.addObserver = (e, t) => e[Xb].observers.add(t)),
          e
        );
      })()),
      (Qb = class {
        set = (e, t, n, r) => {
          if (t === Xb) return !1;
          let i = e[Xb],
            a,
            o;
          if (
            (ha(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables &&
              typeof n != `function` &&
              typeof n != `object` &&
              !a &&
              (a = Rv(n)),
            i.observeAnimatables && a)
          ) {
            let e = i.transactions;
            a.onUpdate({
              update: (t, n) => {
                (n && e.add(n), i.observers.notify({ value: r }, n));
              },
              finish: (t) => {
                e.delete(t) && i.observers.finishTransaction(t);
              },
            });
          }
          let s = !1,
            c = !0,
            l = gy(e)[t];
          if (l !== void 0) {
            ha(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (gy(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === Xb) return gy(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[Xb].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(Xb);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== Xb) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      ($b = /* @__PURE__ */ new Qb()),
      (ex = /* @__PURE__ */ (() => {
        function e(t = {}) {
          let n = Zb(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => Zb.resetObject(e));
          }),
          (e.addObserver = (e, t) => Zb.addObserver(e, t)),
          e
        );
      })()),
      (tx = { update: 0 }),
      (nx = /* @__PURE__ */ f.createContext({ update: NaN })),
      (rx = class extends D {
        observers = [];
        state = tx;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), cy.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), ex.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            ex._stores.forEach((e) => {
              let t = ex.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            /* @__PURE__ */ O(nx.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      (ix = `__framer__`),
      (ax = 10),
      (ox = /* @__PURE__ */ f.createContext(void 0)),
      (sx = /* @__PURE__ */ f.createContext(void 0)),
      (cx = `ssr-variant`),
      (lx = `ssr-variant-group-separator`),
      (ux = /* @__PURE__ */ f.forwardRef(function (e, t) {
        let n = dl(t),
          r = f.useContext(sx),
          i = f.useSyncExternalStore(pt, ht, mt),
          a = so(() => (i ? (nr() ? 1 : 2) : 0)),
          o = f.useContext(ox);
        return xi(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, yl(t, c, i));
            case 1:
              return ml(i, s, c, u, l, d, n, t);
            case 2:
              return ml(i, s, c, u, l, d, ul, void 0);
            default:
              H(a);
          }
        }, [o, r, n, e]);
      })),
      (dx = /* @__PURE__ */ Uy(ux, `.${cx} { display: contents }`, `PropertyOverrides`)),
      (fx = `default`),
      (px = /* @__PURE__ */ new Set([fx])),
      (mx = class {
        entries = /* @__PURE__ */ new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (V(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (V(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
          }
        }
        setHash(e, t = fx, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return fx;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = hl(r)) : fx;
        }
        setAll(e, t = px, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = Be(n.transformTemplate) ? n.transformTemplate?.({}, gx) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: z(a) ? a : void 0,
              animate: z(o) ? o : void 0,
              transformTemplate: L(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (hx = /* @__PURE__ */ new mx()),
      (gx = `__Appear_Animation_Transform__`),
      (_x = `data-framer-appear-id`),
      (vx = `data-framer-appear-animation`),
      (yx = (e) => {
        if (uo())
          return {
            animate: xl(e.animate) ? e.animate : void 0,
            initial: xl(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (bx = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (xx = (e) => ({
        x: M(e?.x ?? 0),
        y: M(e?.y ?? 0),
        opacity: M(e?.opacity ?? 1),
        scale: M(e?.scale ?? 1),
        rotate: M(e?.rotate ?? 0),
        rotateX: M(e?.rotateX ?? 0),
        rotateY: M(e?.rotateY ?? 0),
        skewX: M(e?.skewX ?? 0),
        skewY: M(e?.skewY ?? 0),
        transformPerspective: M(e?.transformPerspective ?? 0),
      })),
      (Sx = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (Cx = /* @__PURE__ */ Object.freeze({ willChange: `transform` })),
      (wx = /* @__PURE__ */ Object.freeze({})),
      (Tx = /* @__PURE__ */ new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (Ex = () => {
        let e = A();
        return (
          h(
            () => () => {
              clearTimeout(e.current);
            },
            []
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (Dx = /* @__PURE__ */ new Set([
        `speed`,
        `adjustPosition`,
        `offset`,
        `parallaxTransformEnabled`,
      ])),
      (Ox = /* @__PURE__ */ new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (kx = 1),
      (Ax = 4),
      (jx = /* @__PURE__ */ new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (Mx = [`animate`, `animate`]),
      (Nx = { inputRange: [], outputRange: [] }),
      (Px = /* @__PURE__ */ new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (Fx = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (Ix = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (Lx = [0, 1]),
      (Rx = { parallax: Dx, styleAppear: jx, styleTransform: Px, loop: Tx, presence: Ox }),
      (zx = /* @__PURE__ */ Ug(Rx)),
      (Bx = (e) => e.reduce((e, t) => (e += t), 0)),
      (Vx = (e) => e.reduce((e, t) => (e *= t), 1)),
      (Hx = `current`),
      (Ux = (e) =>
        f.forwardRef((t, n) => {
          let r = !Ie(e);
          if (t.__withFX) {
            let i = { ...t };
            return (
              r || Reflect.deleteProperty(i, `__withFX`),
              /* @__PURE__ */ O(e, { ...i, animate: void 0, initial: void 0, exit: void 0, ref: n })
            );
          }
          let i = yx(t);
          if (i) return /* @__PURE__ */ O(e, { ...Wl(t).forwardedProps, ...i, ref: n });
          let {
              parallax: a = {},
              styleAppear: o = {},
              styleTransform: s = {},
              presence: c = {},
              loop: l = {},
              forwardedProps: u,
              targetOpacityValue: d,
              withPerspective: p,
              inSmartComponent: m = !1,
            } = Wl(t),
            h = ec(n),
            { values: g, style: _ } = Al(
              c,
              h,
              m,
              B(d) ? t.style : { ...t.style, opacity: void 0 },
              t[oe]
            ),
            { values: v, style: y } = El(a, h, t.style?.visibility),
            { values: b, style: x } = Hl(s, h),
            { values: S, style: C } = Rl(o, h),
            { values: w, style: T } = wl(l, h),
            E = f.useMemo(() => {
              let e = new ke(d ?? 1);
              return {
                scale: [S.scale, w.scale, g.scale, b.scale],
                opacity: [S.opacity, w.opacity, g.opacity, e, b.opacity],
                x: [S.x, w.x, g.x, b.x],
                y: [S.y, w.y, v.y, g.y, b.y],
                rotate: [S.rotate, w.rotate, g.rotate, b.rotate],
                rotateX: [S.rotateX, w.rotateX, g.rotateX, b.rotateX],
                rotateY: [S.rotateY, w.rotateY, g.rotateY, b.rotateY],
                skewX: [S.skewX, w.skewX, g.skewX, b.skewX],
                skewY: [S.skewY, w.skewY, g.skewY, b.skewY],
                transformPerspective: [b.transformPerspective, S.transformPerspective],
              };
            }, [d, b, v, S, w, g]);
          Kl(t.style, E);
          let D = ue(E.scale, Vx),
            ee = ue(E.opacity, Vx),
            k = ue(E.x, Bx),
            te = ue(E.y, Bx),
            A = ue(E.rotate, Bx),
            ne = ue(E.rotateX, Bx),
            j = ue(E.rotateY, Bx),
            re = ue(E.skewX, Bx),
            ie = ue(E.skewY, Bx),
            ae = ue(E.transformPerspective, Bx),
            { drag: M, dragConstraints: se } = u;
          vs(M && Gl(se) ? se : void 0);
          let ce = {
            opacity: ee,
            scale: D,
            x: k,
            y: te,
            rotate: A,
            rotateX: ne,
            rotateY: j,
            skewX: re,
            skewY: ie,
          };
          B(p) && (ce.transformPerspective = ae);
          let le = ql(t.animate) ? t.animate : void 0,
            de = ql(t.initial) ? t.initial : void 0,
            fe = ql(t.exit) ? t.exit : void 0,
            pe = m && !c.presenceInitial ? { initial: de, animate: le, exit: fe } : {},
            N = r ? { __withFX: !0 } : {};
          return /* @__PURE__ */ O(e, {
            ...u,
            ...pe,
            ...N,
            style: { ...t.style, ...y, ...x, ...T, ...ce, ...C, ..._ },
            values: g,
            ref: h,
          });
        })),
      (Wx = /* @__PURE__ */ f.createContext({})),
      (Gx = /* @__PURE__ */ f.forwardRef(function (
        { width: e, height: t, y: n, children: r, ...i },
        a
      ) {
        let o = f.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = dl(a);
        return /* @__PURE__ */ O(Wx.Provider, { value: o, children: s(r, i) });
      })),
      (Kx = (e) =>
        f.forwardRef((t, n) => {
          let r = Yl(t);
          return /* @__PURE__ */ O(e, { ...r, ref: n });
        })),
      (qx = {}),
      (Jx = () => qx),
      (Yx = (e) => {
        qx = e;
      }),
      (Xx = !1),
      (Zx = class extends D {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!Xl(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              Ze(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          Fn(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!Xl(e)) throw e;
          return ((Xx = !0), this.props.children);
        }
      }),
      (Qx = j === void 0 ? null : new Promise(() => {})),
      ($x = /* @__PURE__ */ O(Zl, {})),
      (eS = /* @__PURE__ */ (() => {
        let e = _(!1);
        return ((e.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`), e);
      })()),
      (tS = /* @__PURE__ */ O($l, {})),
      (nS = class extends D {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (tu(this.props.getErrorMessage(), t?.componentStack), eu(e, t));
        }
        render() {
          let { children: e, fallback: t = tS } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (rS = class extends D {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            eu(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (iS = /* @__PURE__ */ f.createContext(void 0)),
      (aS = `code-crash:`),
      (oS = /* @__PURE__ */ Kx(
        /* @__PURE__ */ f.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            rendersWithMotion: c,
            __withFX: l,
            ...u
          },
          d
        ) {
          let p = so(() => (t ? `${t}-container` : void 0)),
            m = as(n),
            h = gu(
              f.Children.map(e, (e) =>
                f.isValidElement(e) ? f.cloneElement(e, { layoutId: t ?? e.props.layoutId }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return /* @__PURE__ */ O(m, {
            layoutId: p,
            ...u,
            ref: d,
            children: /* @__PURE__ */ O(Yy.Provider, {
              value: !0,
              children: /* @__PURE__ */ O(dv.Provider, {
                value: i ?? null,
                children: /* @__PURE__ */ O(oo, {
                  enabled: !1,
                  children: /* @__PURE__ */ O(be, {
                    id: t ?? ``,
                    inherit: u.layout ? !0 : `id`,
                    children: h,
                  }),
                }),
              }),
            }),
          });
        })
      )),
      (sS = /* @__PURE__ */ f.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = gu(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = as(f);
          return /* @__PURE__ */ O(dv.Provider, {
            value: a ?? null,
            children: /* @__PURE__ */ O(n, { ...u, ref: t, style: e.style, children: d }),
          });
        }
        {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return /* @__PURE__ */ O(dv.Provider, {
            value: a ?? null,
            children: /* @__PURE__ */ O(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (lS = /* @__PURE__ */ new Set()),
      (uS = /* @__PURE__ */ _({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (dS = `framer-cursor-none`),
      (fS = `framer-pointer-events-none`),
      (pS = /* @__PURE__ */ t(function ({ children: e }) {
        let t = so(() => {
            let e = /* @__PURE__ */ new Set(),
              t = {},
              n = /* @__PURE__ */ new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = Su(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = le();
        return /* @__PURE__ */ ee(uS.Provider, {
          value: t,
          children: [e, !n && /* @__PURE__ */ O(_S, {})],
        });
      })),
      (mS = /* @__PURE__ */ Uy(
        pS,
        [
          `.${dS}, .${dS} * { cursor: none !important; }`,
          `.${fS}, .${fS} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (hS = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (gS = `data-framer-portal-id`),
      (_S = /* @__PURE__ */ t(function () {
        let { onRegisterCursors: e } = S(uS),
          t = xu(!1),
          r = Re(0),
          i = Re(0),
          a = Re(0),
          o = A(null),
          s = A({ cursors: {}, cursorHash: void 0 }),
          c = _s();
        (h(() => {
          if (!t) return;
          let e = 0,
            n = 0;
          function l() {
            (r.set(e), i.set(n), Te(a, 1, { type: `tween`, duration: 0.2 }));
          }
          let u = () => {
            if (Ue(s.current.cursors)) return;
            let t = Eu(e, n);
            t !== s.current.cursorHash && ((s.current.cursorHash = t), I.update(() => c()));
          };
          function d(t) {
            t.pointerType === `touch`
              ? ye(u)
              : (I.read(u, !0), (e = t.clientX), (n = t.clientY), I.update(l));
          }
          function f(e) {
            if (e.target === o.current || !o.current) return;
            let t = new PointerEvent(e.type, {
              bubbles: !0,
              cancelable: e.cancelable,
              pointerType: e.pointerType,
              pointerId: e.pointerId,
              composed: e.composed,
              isPrimary: e.isPrimary,
              buttons: e.buttons,
              button: e.button,
            });
            I.update(() => {
              o.current?.dispatchEvent(t);
            });
          }
          return (
            U.addEventListener(`pointermove`, d),
            document.addEventListener(`pointerdown`, f),
            document.addEventListener(`pointerup`, f),
            I.read(u, !0),
            () => {
              (U.removeEventListener(`pointermove`, d),
                document.removeEventListener(`pointerdown`, f),
                document.removeEventListener(`pointerup`, f),
                ye(u));
            }
          );
        }, [a, r, i, c, t]),
          h(() => {
            if (!t) return;
            function e() {
              Te(a, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              U.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), U.removeEventListener(`blur`, e));
              }
            );
          }, [a, t]),
          n(() => {
            function t(e) {
              ((s.current.cursors = e),
                (s.current.cursorHash = Ue(e) ? null : Eu(r.get(), i.get())),
                c());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(dS, !1));
            };
          }, [r, i, e, c]));
        let { cursors: l, cursorHash: u } = s.current,
          d = u ? l[u] : null,
          f = Cu(d);
        n(() => {
          t && document.body.classList.toggle(dS, f);
        }, [f, t]);
        let p = d?.component,
          m = d?.transition ?? { duration: 0 },
          g = m.duration === void 0 ? m : { ...m, duration: m.duration * 1e3 },
          _ = ce(r, g),
          v = ce(i, g),
          b = ue(() => _.get() + (d?.offset?.x ?? 0)),
          x = ue(() => v.get() + (d?.offset?.y ?? 0)),
          w = d?.alignment,
          T = d?.placement,
          E = C((e, t) => `translate(${Tu(T, w)}) ${t}`, [w, T]);
        return !t || !d || !p
          ? null
          : /* @__PURE__ */ O(y, {
              children: /* @__PURE__ */ O(p, {
                transformTemplate: E,
                style: { ...hS, x: b, y: x, opacity: a },
                globalTapTarget: !0,
                variant: d?.variant,
                ref: o,
                className: fS,
              }),
            });
      })),
      (vS = `webPageId`),
      (yS = class {
        collectedLinks = /* @__PURE__ */ new Map();
        nestingInfo = /* @__PURE__ */ new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = /* @__PURE__ */ new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            V(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (V(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((lt && !ar()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(ku(e), e), this.collectedLinks.set(ku(t), t));
          let n = this.nestingInfo.get(ku(e)) ?? /* @__PURE__ */ new Set();
          (n.add(ku(t)), this.nestingInfo.set(ku(e), n));
        }
      }),
      (bS = /* @__PURE__ */ new yS()),
      (xS = `element`),
      (SS = `collection`),
      (CS = `collectionItemId`),
      (wS = `pathVariables`),
      (TS = `framer/page-link,`),
      (ES = /* @__PURE__ */ _(void 0)),
      (DS = `--text-selection-color`),
      (OS = `--text-selection-background-color`),
      (kS = /* @__PURE__ */ Uy(qu, (e, t) => Ku(t?.triggerId), `InjectSelectionStyle`)),
      (AS = {
        isClockwise: (e) => AS.signedArea(e) <= 0,
        signedArea: (e) => {
          let t = 0,
            n = e.length;
          for (let r = 0; r < n; r++) {
            let i = e[r],
              a = e[(r + 1) % n];
            i && a && (t += i.x * -a.y - a.x * -i.y);
          }
          return (1 / 2) * t;
        },
        containsPoint: (e, t) => {
          let n;
          for (let r = 0; r < e.length; r++) {
            if (ba.isEqual(e[r], t)) return !0;
            let i = e[r]?.x ?? 0,
              a = e[r]?.y ?? 0,
              o = (r + 1) % e.length;
            if (ba.isEqual(e[o], t)) return !0;
            let s = e[o]?.x ?? 0,
              c = e[o]?.y ?? 0,
              l = (t.x - i) * (c - a) - (t.y - a) * (s - i);
            if (l === 0) continue;
            let u = l > 0;
            if (((n ??= u), n !== u)) return !1;
          }
          return !0;
        },
        intersects: (e, t) => {
          if (e.length < 1 || t.length < 1) return !1;
          let n = X.boundingRectFromPoints(e),
            r = X.boundingRectFromPoints(t);
          if (!X.intersects(n, r)) return !1;
          let i = [],
            a = e.length;
          e.forEach((t, n) => {
            let r = e[(n + 1) % a];
            r && i.push(jy(t, r));
          });
          let o = [],
            s = t.length;
          t.forEach((e, n) => {
            let r = t[(n + 1) % s];
            r && o.push(jy(e, r));
          });
          for (let e of i) for (let t of o) if (jy.intersection(e, t, !0)) return !0;
          return !!(AS.containsPoint(t, e[0]) || AS.containsPoint(e, t[0]));
        },
        contains: (e, t) => {
          for (let n = 0; n < t.length; n++) if (!AS.containsPoint(e, t[n])) return !1;
          return !0;
        },
        clipToRect: (e, t) => {
          let n = X.edges(t),
            r = /* @__PURE__ */ new Set(),
            i = e.length,
            a = [],
            o = [];
          for (let s = 0; s < i; s++) {
            let c = e[s],
              l = e[(s + 1) % i];
            if (X.containsPoint(t, c)) {
              let e = Ju(c);
              if ((r.add(e), o.push(c), X.containsPoint(t, l))) continue;
            }
            let u = jy(c, l);
            n.forEach((e) => {
              let t = jy.intersection(u, e, !0);
              if (!t) return;
              let n = Ju(t);
              r.has(n) || (r.add(n), a.push(t));
            });
          }
          return a.length === 0
            ? o
            : (X.points(t).forEach((t) => {
                AS.containsPoint(e, t) && (r.add(Ju(t)), a.push(t));
              }),
              ba.sortClockwise([...o, ...a]));
        },
      }),
      (jS = 5),
      (MS = 4),
      (NS = /* @__PURE__ */ (() => {
        let e = f.createContext(/* @__PURE__ */ new Set());
        return ((e.displayName = `FloatingStackingContext`), e);
      })()),
      (PS = class extends D {
        state = { error: void 0 };
        message = `Made UI non-interactive due to an error.`;
        messageFatal = `Fatal error.`;
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((j.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(Ze(ut ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          Fn(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (ut && document.getElementById(`main`)?.innerHTML) || ``;
          return /* @__PURE__ */ O(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${Ze()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (IS = /:([a-z]\w*)/gi),
      (LS = /* @__PURE__ */ _(void 0)),
      (RS = /* @__PURE__ */ new Map()),
      (zS = 500),
      (BS = 500),
      (HS = !1),
      (US = 500),
      (WS = 0.9),
      (GS = 1.7),
      (KS = 4),
      (qS = 1 / 0),
      (JS = /* @__PURE__ */ new WeakMap()),
      (YS = /* @__PURE__ */ new Set()),
      (XS = /* @__PURE__ */ new Map()),
      (ZS = !J_ || typeof IntersectionObserver > `u` ? null : /* @__PURE__ */ zd()),
      (QS = /* @__PURE__ */ xd(
        /* @__PURE__ */ T(function (
          {
            children: e,
            href: t,
            openInNewTab: n,
            smoothScroll: r,
            clickTrackingId: i,
            relValues: a,
            preserveParams: o,
            nodeId: c,
            scopeId: l,
            motionChild: u,
            ...d
          },
          f
        ) {
          let p = en(),
            m = nn(),
            h = Td(),
            { activeLocale: g, locales: _ } = wr(),
            v = Gd(),
            y = Tr(),
            x = Au(),
            S = Kd({ nodeId: c, clickTrackingId: i, router: p, href: t, activeLocale: g }),
            C = s(() => {
              if (!t) return {};
              let e = Ou(t) ? t : Lu(t);
              if (!e) return {};
              if (L(e))
                return nf(
                  e,
                  p,
                  m,
                  {
                    openInNewTab: n,
                    trackLinkClick: S,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  y,
                  g?.id,
                  _,
                  h
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = v(i, s, g);
              if (Ye(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: f,
                  locale: b,
                } = Sd(p, m, e, g, c, h),
                x = Vd(n, !0),
                C = x === `_blank`,
                w = tf(u, C, p.siteCanonicalURL),
                T = { pathVariables: f, locale: b },
                E = Xd(u, w, (e) =>
                  Jd(
                    p,
                    l,
                    () =>
                      y(l, T, {
                        priority: `user-blocking`,
                        yieldBeforePreload: !1,
                        shouldLoadRouteData: !C,
                      }),
                    d,
                    f,
                    r,
                    e
                  )
                );
              return {
                href: u,
                target: x,
                onClick: Yd(u, S, E),
                "data-framer-page-link-current": (m && Ed(m, e, h)) || void 0,
                navigate: E,
                preload: () =>
                  y(l, T, {
                    priority: `background`,
                    yieldBeforePreload: !0,
                    shouldLoadRouteData: !C,
                  }),
                _routeId: l,
                _pathVariables: f,
                _locale: b,
                _navigationUrl: w,
              };
            }, [t, p, g, h, n, m, r, S, a, _, o, v, y]),
            w = ec(b(e) && `ref` in e ? e.ref : void 0),
            {
              navigate: T,
              preload: E,
              _routeId: D,
              _pathVariables: O,
              _locale: ee,
              _navigationUrl: k,
              ...te
            } = C;
          tc(
            w,
            (e) => {
              if (e !== null && D && E && k && !x)
                return ZS?.(e, E, `${D}:${ee?.id}:${JSON.stringify(O)}`, k);
            },
            [E, D, O, ee, k, x]
          );
          let A = !!T;
          return Bu(
            dl(f).cloneAsArray(e, (e) => rf(e, { ...d, ...of(te, u, A) }, w)),
            l,
            c,
            t,
            C,
            w
          );
        })
      )),
      ($S = /* @__PURE__ */ f.createContext(void 0)),
      (eC = `__framer_force_showing_editorbar_since`),
      (tC = class extends D {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (nC = () => {
        try {
          return !!localStorage[eC];
        } catch {
          return !1;
        }
      }),
      (rC = () => !nC()),
      (iC = /* @__PURE__ */ (() => {
        let e = _(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (aC = null),
      (oC = null),
      ft(hf),
      (sC = (e, t, n, r, i, a) => {
        let o = S($S),
          s = A(),
          c = Kn(),
          l = A(!0);
        return (
          h(() => {
            function u() {
              (!aC || !oC) && hf();
              let s = n ? new URL(n, U.location.href) : U.location,
                u = {
                  version: 2,
                  abTestId: e?.abTestId,
                  framerSiteId: o ?? null,
                  webPageId: e?.abTestingVariantId ?? t,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: i?.code || null,
                  referrer: null,
                  url: s.href,
                  hostname: s.hostname,
                  pathname: s.pathname,
                  search: s.search || null,
                  hash: s.hash || null,
                  timezone: aC,
                  locale: oC,
                },
                d = l.current && a !== void 0 ? a : void 0;
              return e?.collectionId && r
                ? (async () => {
                    let t = d ?? null;
                    if (d === void 0) {
                      let n = e.collectionId && c?.get(e.collectionId),
                        [a] = Object.values(r);
                      if (n && L(a)) {
                        let e = n.getRecordIdBySlug(a, i || void 0);
                        t = (Ye(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...u, collectionItemId: t };
                  })()
                : u;
            }
            (async () => {
              let e = (s.current = u()),
                t = e instanceof Promise ? await e : e;
              ((s.current = t),
                l.current ? (l.current = !1) : Fn(`published_site_pageview`, t, `eager`));
            })();
            let d = async (e) => {
              if (e.persisted) {
                let e = (s.current = u()),
                  t = e instanceof Promise ? await e : e;
                ((s.current = t), Fn(`published_site_pageview`, t, `eager`));
              }
            };
            return (
              j.addEventListener(`pageshow`, d),
              () => {
                j.removeEventListener(`pageshow`, d);
              }
            );
          }, [e, t, n, r, i, o, c, a]),
          s
        );
      }),
      (cC = 0),
      (lC = 500),
      (uC = 200),
      (dC = `main`),
      (fC = `framerGeneratedPage`),
      (pC = `<!-- Start of headStart -->`),
      (mC = `<!-- End of headStart -->`),
      (hC = `<!-- Start of headEnd -->`),
      (gC = `<!-- End of headEnd -->`),
      (_C = `<!-- Start of bodyStart -->`),
      (vC = `<!-- End of bodyStart -->`),
      (yC = `<!-- Start of bodyEnd -->`),
      (bC = `<!-- End of bodyEnd -->`),
      (xC = /* @__PURE__ */ f.createContext(void 0)),
      (SC = { status: `loading`, data: void 0 }),
      (CC = 5e3),
      (wC = () => {}),
      (TC = class e {
        static cacheKey = `framer-fetch-client-cache`;
        responseValues = /* @__PURE__ */ new Map();
        #e = /* @__PURE__ */ new Map();
        #t = /* @__PURE__ */ new Set();
        #n = /* @__PURE__ */ new Map();
        #r = /* @__PURE__ */ new Map();
        #i = /* @__PURE__ */ new Map();
        #a = /* @__PURE__ */ new Map();
        unmount() {
          for (let [e, t] of this.#a) (clearInterval(t), this.#a.delete(e));
        }
        stopQueryRefetching(e) {
          let t = cp(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = cp(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = Math.min(fp(r), 2 ** 31 - 1),
            a = U.setInterval(() => {
              if (document.visibilityState === `hidden`) return;
              let n = this.#r.get(t);
              r && n && this.fetchWithCache({ ...e, cacheDuration: r });
            }, i);
          this.#a.set(t, a);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3) throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              pp(r, i) ||
                (this.#r.set(e, r),
                this.#n.set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = this.#e.get(e);
          if (n) for (let e of n) e();
        }
        persistCache = sl(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && pp(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!nr() || !Mu(e.url, !1)) return;
          let t = cp(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = dp(n, e);
          return (e.resultOutputType === `image` && L(i) && (await ap(i).catch(wC)), i);
        }
        async fetchWithCache(e) {
          if (!nr()) return;
          let t = cp(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && pp(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, SC);
          let a = (async () => {
            try {
              let n = await fetch(e.url, { method: `GET`, credentials: e.credentials });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: /* @__PURE__ */ Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                this.#r.set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            this.#i.set(t, a),
            a.finally(() => {
              this.#i.delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!t || this.#t.has(e)) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!Mu(r, !1)) return wC;
          let a = cp(e),
            o = this.#n.get(a);
          ((!o || i < o) && this.#n.set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = this.#e.get(a) ?? /* @__PURE__ */ new Set();
          return (
            s.add(t),
            this.#e.set(a, s),
            () => {
              let n = this.#e.get(a);
              n && (n.delete(t), n.size === 0 && (this.#e.delete(a), this.stopQueryRefetching(e)));
            }
          );
        }
      }),
      (EC = /* @__PURE__ */ _(void 0)),
      (DC = /* @__PURE__ */ _(!0)),
      (OC = ({ children: e, client: t }) => {
        let [n] = k(() => t ?? new TC()),
          [r, i] = k(!0);
        return (
          h(
            () => (
              n.hydrateCache(),
              u(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          /* @__PURE__ */ O(DC.Provider, {
            value: r,
            children: /* @__PURE__ */ O(EC.Provider, { value: n, children: e }),
          })
        );
      }),
      (kC = /* @__PURE__ */ (() => {
        let e = _(void 0);
        return ((e.displayName = `ServerDatabaseClientContext`), e);
      })()),
      (Se.WillChange = class extends Ce {
        add(e) {
          e !== `backgroundColor` && super.add(e);
        }
      }),
      (AC = /* @__PURE__ */ xd(
        /* @__PURE__ */ T(function ({ links: e, children: t, ...n }, r) {
          return dl(r)(t(gp((t) => e.map(t), [e])), n);
        })
      )),
      (jC = { priority: void 0, canYield: !0 }),
      (Z = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return Fp(e, t);
            case `boolean`:
              return Lp(e);
            case `color`:
              return Bp(e);
            case `date`:
              return Hp(e);
            case `enum`:
              return Wp(e);
            case `file`:
              return Kp(e);
            case `link`:
              return Jp(e);
            case `number`:
              return Xp(e);
            case `object`:
              return $p(e, t);
            case `responsiveimage`:
              return tm(e);
            case `richtext`:
              return rm(e);
            case `string`:
              return sm(e);
            case `vectorsetitem`:
              return am(e);
            case `unknown`:
              return e;
            default:
              H(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return Ve(e)
            ? { type: `boolean`, value: e }
            : Ke(e)
              ? { type: `date`, value: e.toISOString() }
              : R(e)
                ? { type: `number`, value: e }
                : L(e)
                  ? { type: `string`, value: e }
                  : He(e)
                    ? { type: `array`, value: e.map(Z.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && lm(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && lm(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && lm(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && lm(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && lm(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => Z.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => Z.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = cm(e),
            i = cm(t);
          return We(r) || We(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = cm(e),
            i = cm(t);
          return We(r) || We(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = cm(e),
            i = cm(t);
          return We(r) || We(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.endsWith(i));
        },
        length(e) {
          return e?.type === `array` ? e.value.length : 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(Z.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return L(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              H(e);
          }
        },
      }),
      (MC = { type: `unknown`, isNullable: !0 }),
      (NC = class {
        collection;
        locale;
        schema;
        indexes = [];
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = tl(e);
          V(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (V(n !== `array`, `Array properties are not supported`),
              V(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (Ge(i)) continue;
            let a = this.schema[t];
            B(a) ||
              (V(a.type !== `unknown`, `Invalid definition type`),
              (n[t] =
                a.type === `richtext`
                  ? { type: a.type, value: { itemIndex: r, key: t } }
                  : { type: a.type, value: i }));
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await um(this.collection, this.locale))[t]?.[n];
          return Xg.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await um(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = Sp(e);
            i && (await i);
            let a = t[r];
            V(a, `Can't find collection item`);
            let o = String(r);
            n.push(this.getDatabaseItem(a, o));
          }
          return n;
        }
        async resolveItems(e, t) {
          let n = await um(this.collection, this.locale),
            r = [];
          for (let i of e) {
            let e = Sp(t);
            e && (await e);
            let a = n[Number(i)];
            (V(a, `Can't find collection item`), r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (PC = /* @__PURE__ */ new Map()),
      (FC = /* @__PURE__ */ new WeakMap()),
      (IC = `$r_`),
      (LC = /* @__PURE__ */ new Map()),
      (RC = class {
        collections;
        priority;
        constructor(e, t, n) {
          ((this.collections = Cm(e, t)), (this.priority = _m(n)));
        }
        *resolveArrayValue(e) {
          return yield* Ep(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* q(t);
        }
        richTextCache = /* @__PURE__ */ new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          V(bm(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          V(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? /* @__PURE__ */ new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return Je(t) ? yield t : t;
        }
        vectorSetItemCache = /* @__PURE__ */ new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          V(Sm(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (V(n, `Can't find collection for vector set item pointer`),
            V(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? /* @__PURE__ */ new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return Je(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      (zC = `index`),
      (BC = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), J(this.name, ...e));
        }
      }),
      (VC = class {
        id;
        name;
        data;
        indexes = new UC();
        fields = new Q();
        fieldByName = /* @__PURE__ */ new Map();
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (HC = class {
        id;
        data;
        collection;
        lookupNodes;
        constraint;
        ordering;
        resolvedFields = new Q();
        constructor(e, t, n, r, i, a) {
          ((this.id = e),
            (this.data = t),
            (this.collection = n),
            (this.lookupNodes = r),
            (this.constraint = i),
            (this.ordering = a));
          for (let e in t.schema) {
            let t = n.getFieldByName(e);
            t && this.resolvedFields.add(t);
          }
        }
      }),
      (UC = class extends BC {
        name = `Indexes`;
      }),
      (WC = class {
        id;
        name;
        definition;
        collection;
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        isProvidedByScan() {
          let e = this.collection?.data.scannedFields;
          return !e || (this.name !== void 0 && this.name in e);
        }
        getValue(e) {
          V(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          return t ? this.wrapPointers(t) : null;
        }
        wrapPointers(e) {
          switch (e?.type) {
            case `array`:
              return { type: `array`, value: e.value.map((e) => this.wrapPointers(e)) };
            case `object`: {
              let t = {};
              for (let n in e.value) t[n] = this.wrapPointers(e.value[n]);
              return { type: `object`, value: t };
            }
            case `richtext`:
              return (
                V(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: ym(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                V(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: xm(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (Q = class extends BC {
        name = `Fields`;
      }),
      (GC = class {
        field;
        direction;
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        getHash() {
          return J(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (KC = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return J(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e || (this.length === e.length && this.getHash() === e.getHash());
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== `index`) return !1;
          return !0;
        }
      }),
      (qC = class {
        ordering;
        resolvedFields;
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        getHash() {
          return J(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 || e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0 || e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (JC = class e {
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (V(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (V(!this.node, `Node already set`), (this.node = e));
        }
        ordering;
        setOrdering(e) {
          this.ordering = e;
        }
        fields = [];
        fieldsByName = /* @__PURE__ */ new Map();
        constructor(e) {
          this.parent = e;
        }
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
          let t = this.fieldsByName.get(e.name);
          t ? t.push(e) : this.fieldsByName.set(e.name, [e]);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.fields.push(t);
          for (let [t, n] of e.fieldsByName) {
            let e = this.fieldsByName.get(t);
            e ? e.push(...n) : this.fieldsByName.set(t, n.slice());
          }
        }
        resolveField(e, t) {
          let n = this.fieldsByName.get(e);
          if (n) {
            let e;
            for (let r of n)
              if (!(t && r.collectionName !== t)) {
                if (e) throw Error(`Ambiguous fields`);
                e = r;
              }
            if (e) return e;
          }
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fieldsByName.get(e.name)?.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new KC();
        }
        getRequiredResolvedFields() {
          let e = new Q();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new qC(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          V(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (V(e, `Field must exist`), e.field);
        }
      }),
      (YC = 1e3),
      ($ = class e {
        network;
        constructor(e) {
          this.network = e;
        }
        static estimate(t, n) {
          let r = Dm(),
            i = Om(),
            a = t * r + n / i;
          return new e(a);
        }
        static max(t, n) {
          let r = Math.max(t.network, n.network);
          return new e(r);
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : +(e.network > t.network);
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (XC = class {
        pointers = /* @__PURE__ */ new Map();
        values = /* @__PURE__ */ new Map();
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (ZC = class e {
        fields;
        tuples;
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          let r = this.tuples.map(n);
          return new e(t, r);
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = /* @__PURE__ */ new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new Q();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = /* @__PURE__ */ new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (QC = class {
        isSynchronous;
        constructor(e) {
          this.isSynchronous = e;
        }
      }),
      ($C = class extends QC {
        group;
        getGroup() {
          return (V(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (V(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return Cp(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return wp(this.evaluate(void 0), void 0, e);
        }
      }),
      (ew = class {
        input;
        field;
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        getHash() {
          return J(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (tw = class e extends $C {
        input;
        projections;
        passthrough;
        inputGroup;
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return J(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new Q();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new Q();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new qC(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new $(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = $.max(i, n);
          }
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map((e) => new ew(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* Ep(
              n.tuples.map((t) =>
                Ep(
                  this.projections.map((n) => q({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new XC();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            V(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (nw = { type: 0 }),
      (rw = class extends QC {
        referencedFields;
        referencedOuterFields;
        isSynchronous;
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        evaluateSync() {
          return Cp(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return wp(this.evaluate(void 0, void 0));
        }
      }),
      (iw = { type: 0 }),
      (aw = class {
        when;
        then;
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        getHash() {
          return J(`CaseCondition`, this.when, this.then);
        }
      }),
      (ow = class e extends rw {
        input;
        conditions;
        otherwise;
        definition = { type: `unknown`, isNullable: !0 };
        constructor(e, t, n) {
          let r = new Q(),
            i = new Q(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n));
        }
        getHash() {
          return J(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new $(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new aw(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* q({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: Ep(
              this.conditions.map((n) =>
                q({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (Z.equal(n, e, iw)) return t;
          } else for (let { when: e, then: t } of r) if (Rp(e)) return t;
          return i;
        }
      }),
      (sw = class {
        normalizer;
        query;
        locale;
        collectionId = 0;
        indexId = 0;
        fieldId = 0;
        subqueries = [];
        constructor(e, t, n) {
          ((this.normalizer = e), (this.query = t), (this.locale = n));
        }
        build() {
          let e = new JC();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new Q(),
            o;
          if (t.orderBy) {
            o = new KC();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (B(t)) continue;
                a.add(t.field);
                let r = new GC(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new WC(Em(this.fieldId++), void 0, t.definition, void 0),
                  a = new ew(t, r);
                i.push(a);
                let s = new GC(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new Q(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (B(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              V(n.alias, `Subqueries should have an alias`);
              let r = Em(this.fieldId++),
                a = n.alias,
                s = new WC(r, a, t.definition, void 0),
                c = new ew(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              H(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = mm(t.data, this.locale),
            i = t.alias,
            a = new VC(wm(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new WC(Em(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new WC(Em(this.fieldId++), zC, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: zC, collectionName: i });
            let t = new KC(),
              r = new GC(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new KC(),
              o = new HC(Tm(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new KC(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              H(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
              H(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)), e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(MC, null);
        }
        buildLiteralValue(e) {
          let t = Z.parse(e.value);
          return this.normalizer.newScalarConstant(MC, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (V(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                V(n, `Missing argument`),
                V(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                V(n, `Missing argument`),
                V(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              H(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new cw(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new cw(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) => new aw(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              H(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              H(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, { type: `boolean`, isNullable: !0 });
            case `DATE`:
              return this.normalizer.newScalarCast(n, { type: `date`, isNullable: !0 });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, { type: `number`, isNullable: !0 });
            case `STRING`:
              return this.normalizer.newScalarCast(n, { type: `string`, isNullable: !0 });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (cw = class {
        inScope;
        referencedFields = new Q();
        referencedOuterFields = new Q();
        constructor(e) {
          this.inScope = e;
        }
      }),
      (lw = class e extends $C {
        input;
        predicate;
        inputGroup;
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return J(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new qC(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* Ep(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => Rp(n[t] ?? null));
        }
      }),
      (uw = class e extends $C {
        index;
        query;
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        getHash() {
          return J(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return $.estimate(1, e ? 100 * YC : 50 * YC);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query, bp()),
            i = bp(),
            a = [];
          for (let n of r) {
            let r = Sp(i);
            r && (yield r);
            let o = new XC();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new ZC(n, a);
        }
      }),
      (dw = class e extends $C {
        left;
        right;
        leftGroup;
        rightGroup;
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return J(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new qC(new KC(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* q({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (fw = class e extends $C {
        collection;
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        getHash() {
          return J(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        getScanFields() {
          return this.collection.data.scannedFields
            ? new Q(Array.from(this.collection.fields).filter((e) => e.isProvidedByScan()))
            : this.collection.fields;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.getScanFields());
        }
        optimize() {
          return $.estimate(1, 200 * YC);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = this.getScanFields(),
            r = yield e.data.scanItems(bp()),
            i = bp(),
            a = [];
          for (let t of r) {
            let r = Sp(i);
            r && (yield r);
            let o = new XC();
            for (let r of n) {
              let n = r.getValue(t);
              (o.addPointer(e, t.pointer), o.addValue(r, n));
            }
            a.push(o);
          }
          return new ZC(t, a);
        }
      }),
      (pw = class e extends $C {
        left;
        right;
        leftGroup;
        rightGroup;
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return J(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new qC(new KC(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* q({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (mw = class e extends rw {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return J(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* q({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Rp(n) && Rp(r) };
        }
      }),
      (hw = class extends rw {
        definition;
        value;
        constructor(e, t) {
          let n = new Q(),
            r = new Q();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        getHash() {
          return J(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (gw = { type: 0 }),
      (_w = class e extends rw {
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return J(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* q({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.contains(n, r, gw) };
        }
      }),
      (vw = { type: 0 }),
      (yw = class e extends rw {
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return J(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* q({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.endsWith(n, r, vw) };
        }
      }),
      (bw = class e extends rw {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return J(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* q({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.equal(n, r, nw) };
        }
      }),
      (xw = class e extends rw {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return J(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* q({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.greaterThan(n, r, nw) };
        }
      }),
      (Sw = class e extends rw {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return J(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* q({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.greaterThanOrEqual(n, r, nw) };
        }
      }),
      (Cw = class e extends rw {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return J(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* q({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.lessThan(n, r, nw) };
        }
      }),
      (ww = class e extends rw {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return J(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* q({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.lessThanOrEqual(n, r, nw) };
        }
      }),
      (Tw = class e extends rw {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return J(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* q({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Z.equal(n, r, nw) };
        }
      }),
      (Ew = class e extends rw {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return J(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* q({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Rp(n) || Rp(r) };
        }
      }),
      (Dw = { type: 0 }),
      (Ow = class e extends rw {
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return J(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* q({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.startsWith(n, r, Dw) };
        }
      }),
      (kw = class {
        normalizer;
        memo;
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        explore(e) {
          let t = e.getGroup();
          if (e instanceof lw) {
            if (e.predicate instanceof mw) {
              let n = new dw(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof Ew) {
              let n = new pw(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof fw)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new uw(n, km(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof lw) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof fw)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof bw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof hw &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = km(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new uw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Tw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof hw &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = km(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new uw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Cw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof hw &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = km(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new uw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof ww &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof hw &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = km(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new uw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof xw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof hw &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = km(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new uw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Sw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof hw &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = km(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new uw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof _w &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof hw &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = km(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new uw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Ow &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof hw &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = km(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new uw(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof yw &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof hw &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = km(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new uw(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (Aw = class {
        id;
        relational;
        nodes = [];
        winners = /* @__PURE__ */ new Map();
        constructor(e, t) {
          ((this.id = e), (this.relational = t));
        }
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new jw();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          V(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (jw = class {
        node;
        cost = new $(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), $.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (Mw = class {
        outputFields;
        constructor(e) {
          this.outputFields = e;
        }
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (Nw = class {
        nodes = /* @__PURE__ */ new Map();
        groups = [];
        addGroup(e) {
          let t = new Aw(Am(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new Mw(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            V(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (Pw = class e extends $C {
        left;
        right;
        constraint;
        leftGroup;
        rightGroup;
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return J(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new Q();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new Q(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new qC(new KC(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return $.max($.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = this.rightGroup.getOptimized(i),
            o = this.constraint.getOptimized();
          return new e(r, a, o);
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = /* @__PURE__ */ new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new ZC(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new XC();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* q({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof bw) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = new ZC(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new XC();
              (n.merge(i),
                n.merge(a),
                Rp(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (Fw = class e extends $C {
        input;
        limit;
        ordering;
        inputGroup;
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return J(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields(e) {
          return Array.from(e).every((e) => e.isProvidedByScan());
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new qC(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* q({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = Zp(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (Iw = class e extends $C {
        input;
        offset;
        ordering;
        inputGroup;
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return J(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new qC(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* q({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = Zp(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (Lw = class e extends rw {
        input;
        namedFields;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return J(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q(),
            t = Object.values(this.namedFields);
          for (let n of t) B(n.collection) || e.add(n);
          return new qC(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new XC();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (Rw = class e extends rw {
        input;
        definition;
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            V(t.isNullable, `Unsupported non-nullable cast`));
        }
        getHash() {
          return J(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t, this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return Z.cast(n, this.definition);
        }
      }),
      (zw = class e extends rw {
        input;
        field;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        getHash() {
          return J(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q();
          return (B(this.field.collection) || e.add(this.field), new qC(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new XC();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) => e.getValue(this.field)),
            }
          );
        }
      }),
      (Bw = { type: 0 }),
      (Vw = class e extends rw {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return J(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* q({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Z.in(n, r, Bw) };
        }
      }),
      (Hw = { type: 1 }),
      (Uw = class e extends rw {
        source;
        target;
        definition = { type: `number`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        getHash() {
          return J(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* q({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: Z.indexOf(n, r, Hw) };
        }
      }),
      (Ww = class extends Error {}),
      (Gw = class e extends rw {
        left;
        right;
        definition = {
          type: `array`,
          definition: { type: `string`, isNullable: !1 },
          isNullable: !1,
        };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return J(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* q({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = Mm(n),
            a = Mm(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (Kw = class e extends rw {
        input;
        definition = { type: `number`, isNullable: !1 };
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        getHash() {
          return J(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: Z.length(n) };
        }
      }),
      (qw = class e extends rw {
        input;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        getHash() {
          return J(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !Rp(yield* this.input.evaluate(e, t)) };
        }
      }),
      (Jw = { type: 0 }),
      (Yw = class e extends rw {
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        getHash() {
          return J(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* q({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Z.in(n, r, Jw) };
        }
      }),
      (Xw = class extends rw {
        field;
        isOuterField;
        definition;
        constructor(e, t) {
          V(e.name !== zC, `Invalid field name`);
          let n = new Q(),
            r = new Q();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            (this.definition = e.definition));
        }
        getHash() {
          return J(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (V(e, `Context must exist`), e.getValue(this.field))
            : (V(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (Zw = class {
        memo;
        constructor(e) {
          this.memo = e;
        }
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new fw(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new uw(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new Pw(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof hw && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof Pw && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new lw(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new tw(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof tw &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new Fw(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new Iw(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof hw) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new Xw(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new hw(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof qw)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof bw) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof Tw) return this.newScalarEquals(e.left, e.right);
          if (e instanceof Cw) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof ww) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof xw) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof Sw) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof mw) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof Ew) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new qw(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof hw && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof hw && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof hw && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof hw && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new mw(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof hw && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof hw && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof hw && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof hw && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new Ew(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof Xw;
          if (t instanceof Xw && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new bw(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof Xw;
          if (t instanceof Xw && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Tw(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof Xw;
          if (t instanceof Xw && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Cw(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof Xw;
          if (t instanceof Xw && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new ww(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof Xw;
          if (t instanceof Xw && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new xw(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof Xw;
          if (t instanceof Xw && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Sw(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new Vw(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new Yw(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new aw(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new ow(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new _w(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new Ow(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new yw(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new Kw(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new Uw(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new Lw(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new zw(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new Gw(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new Rw(e, t);
          return this.finishScalar(n);
        }
      }),
      (Qw = class extends $C {}),
      ($w = class e extends Qw {
        input;
        fields;
        resolver;
        inputGroup;
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return J(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new Q();
          return new qC(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return $.estimate(0, 100 * YC).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          V(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = /* @__PURE__ */ new Map();
          for (let e of this.fields) {
            V(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new Q()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples) for (let t of this.fields) Nm(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r, this.resolver.priority);
              return (
                V(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new XC();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (V(s, `Item not found`), V(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (eT = { type: 0 }),
      (tT = class e extends Qw {
        input;
        ordering;
        inputGroup;
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return J(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== `index` && (B(e.collection) || t.add(e));
          return new qC(new KC(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new $(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === `index`) {
                let r = n.collection;
                V(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                V(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                V(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!Z.equal(a, o, eT)) {
                if (We(a) || Z.lessThan(a, o, eT)) return i ? -1 : 1;
                if (We(o) || Z.greaterThan(a, o, eT)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (nT = class {
        query;
        locale;
        resolver;
        memo = new Nw();
        normalizer = new Zw(this.memo);
        explorer = new kw(this.normalizer);
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        optimize(e) {
          let t = new sw(this.normalizer, this.query, this.locale).build(),
            n = Sp(e);
          return n ? n.then(() => this.optimizeBuiltQuery(t)) : this.optimizeBuiltQuery(t);
        }
        optimizeBuiltQuery(e) {
          let t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (V(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new $w(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new tT(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (rT = /* @__PURE__ */ _p(`query-engine`)),
      (iT = class {
        async evalQuery(e, t, n, r) {
          rT.enabled && rT.debug(`Query:\n${Km(e)}`);
          let i = new RC(e, t, r),
            a = new nT(e, t, i),
            o = Sp(i.priority);
          o && (await o);
          let s = a.optimize(r),
            [c, l] = Ye(s) ? await s : s,
            u = Sp(r);
          u && (await u);
          let d = await c.evaluateAsync(r),
            f = Object.entries(l),
            p = [],
            m = [];
          for (let e of d.tuples) {
            let t = Sp(r);
            t && (await t);
            let a = {},
              o = {};
            for (let [t, r] of f) {
              let s = e.getValue(r);
              ((a[t] = i.resolveValue(s)), n && (o[t] = s));
            }
            (n && p.push(o), m.push(q(a, r)));
          }
          let h = Tp(Ep(m, r), r);
          return n ? [Ye(h) ? await h : h, p] : h;
        }
        async serializeableQuery(e, t, n) {
          return this.evalQuery(e, t, !0, n);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n, r) {
          let i = new RC(t, n, r);
          return Tp(
            Ep(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let r = e[n];
                  t[n] = i.resolveValue(r);
                }
                return q(t);
              })
            ),
            void 0,
            !1
          );
        }
      }),
      (aT = p_.QueryCache),
      (oT = class {
        queryEngine;
        maxSize;
        cache = /* @__PURE__ */ new Map();
        serializedCache = g_ === void 0 ? void 0 : /* @__PURE__ */ new Map();
        constructor(e, t = 1 / 0) {
          ((this.queryEngine = e), (this.maxSize = t));
        }
        clear() {
          (this.cache.clear(), this.serializedCache?.clear());
        }
        prune() {
          if (!(this.cache.size <= this.maxSize))
            for (let [e, t] of this.cache) {
              if (this.cache.size <= this.maxSize) break;
              t.value.state !== `pending` &&
                (this.cache.delete(e), this.serializedCache?.delete(e));
            }
        }
        get(e, t, n) {
          let r = Ym(e, t),
            i = this.cache.get(r);
          if (i) {
            let a = vm(n) ?? `user-visible`,
              o = vm(i.priority);
            if (o === void 0 && n !== void 0 && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, n));
            if (o !== void 0 && fr(a, o) && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, a));
            if (
              (this.cache.delete(r),
              this.cache.set(r, i),
              g_ !== void 0 &&
                this.serializedCache !== void 0 &&
                !dm(r) &&
                i.value.state === `fulfilled`)
            ) {
              let e = this.serializedCache.get(r);
              e !== void 0 && g_.set(aT, r, e);
            }
            return i.value;
          }
          let a = new Xg(() => {
            let i = dm(r),
              a = i ? void 0 : Vn(aT, r);
            if (a)
              try {
                return this.queryEngine.resolveSerializableQueryResult(a, e, t);
              } catch (e) {
                zn(e, r);
              }
            return g_ !== void 0 && !i
              ? this.queryEngine
                  .serializeableQuery(e, t, n)
                  .then(([e, t]) => (this.serializedCache?.set(r, t), g_.set(aT, r, t), e))
              : this.queryEngine.query(e, t, n);
          });
          return (this.cache.set(r, { value: a, priority: n }), this.prune(), a);
        }
      }),
      (sT = /* @__PURE__ */ new oT(/* @__PURE__ */ new iT())),
      (cT = `style[data-framer-breakpoint-css]`),
      (lT = `page`),
      (uT = /* @__PURE__ */ Symbol(`cycle`)),
      (pT = /* @__PURE__ */ new WeakMap()),
      (mT = /* @__PURE__ */ (() => {
        let e = _(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (hT = {
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }),
      (gT = { opacity: 0 }),
      (_T = { opacity: 1 }),
      (vT = /* @__PURE__ */ Hh(
        /* @__PURE__ */ f.forwardRef(function (e, t) {
          let {
              background: n,
              children: r,
              alt: i,
              draggable: a,
              fitImageDimension: o,
              style: c,
              ...l
            } = e,
            d = { ...c },
            p = s(() => is(n), [n]),
            [m, h] = k();
          f.useEffect(() => {
            if (!n?.src || !o || p) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                u(() => h({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = n.src));
          }, [n?.src, o, p]);
          let g = p ?? m;
          (o && g && ((d[o] = `auto`), (d.aspectRatio = g.width / g.height)),
            n && delete d.background);
          let _ = as(e.as);
          return /* @__PURE__ */ ee(_, {
            ...l,
            style: d,
            ref: t,
            draggable: a,
            children: [n && /* @__PURE__ */ O(Do, { image: n, alt: i, draggable: a }), r],
          });
        })
      )),
      (bT = !tr() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (xT =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (ST = `{{ text-placeholder }}`),
      (CT = `rich-text-wrapper`),
      (wT = /* @__PURE__ */ us(
        /* @__PURE__ */ T(function (e, t) {
          let {
              id: n,
              name: r,
              html: i,
              htmlFromDesign: a,
              text: o,
              textFromDesign: c,
              fonts: l = [],
              width: u,
              height: d,
              left: f,
              right: p,
              top: m,
              bottom: g,
              center: _,
              className: v,
              stylesPresetsClassName: y,
              visible: b = !0,
              opacity: x,
              rotation: C = 0,
              verticalAlignment: w = `top`,
              isEditable: T = !1,
              environment: E = W.current,
              withExternalLayout: D = !1,
              positionSticky: ee,
              positionStickyTop: k,
              positionStickyRight: te,
              positionStickyBottom: ne,
              positionStickyLeft: j,
              __htmlStructure: re,
              __fromCanvasComponent: ie = !1,
              _forwardedOverrideId: ae,
              _forwardedOverrides: oe,
              _usesDOMRect: M,
              children: se,
              ...ce
            } = e,
            le = Zo(),
            ue = gs(e),
            de = A(null),
            fe = t ?? de,
            { navigate: pe, getRoute: N } = en(),
            me = nn();
          (Er(e.preload ?? []), Ss(e, fe));
          let he = S(Yy),
            ge = Au(),
            P = o,
            ve = ae ?? n;
          if (ve && oe) {
            let e = oe[ve];
            typeof e == `string` && (P = e);
          }
          let ye = ``;
          if (P) {
            let e = Gh(P);
            ye = re ? re.replace(ST, e) : `<p>${e}</p>`;
          } else if (i) ye = i;
          else if (c) {
            let e = Gh(c);
            ye = re ? re.replace(ST, e) : `<p>${e}</p>`;
          } else a && (ye = a);
          let be = Td(),
            xe = s(() => (ge || !N || !me ? ye : Kh(ye, N, me, be)), [ye, N, me, be]);
          if (
            (h(() => {
              let e = fe.current;
              if (e === null) return;
              function t(e) {
                let t = yd(e.target, fe.current);
                !cr(e) &&
                  pe &&
                  t &&
                  t.getAttribute(`target`) !== `_blank` &&
                  Iu(pe, t, be) &&
                  e.preventDefault();
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [pe, be]),
            Yh(l, ie, fe),
            !b)
          )
            return null;
          let Se = T && E() === W.canvas,
            F = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: Jh(w),
              opacity: Se ? 0 : x,
              flexShrink: 0,
            },
            Ce = W.hasRestrictions(),
            we = Jo(e, le || 0, !1),
            Te = M && (u === `auto` || d === `auto`),
            Ee = !!e.transformTemplate || !we || !Ce || ie || Te,
            De = Ee ? (e.transformTemplate ?? hs(_)) : void 0;
          if (!D) {
            if (we && Ce && !Te) {
              let e = Rv.getNumber(C).toFixed(4);
              ((F.transform = `translate(${we.x}px, ${we.y}px) rotate(${e}deg)`),
                (F.width = we.width),
                (F.minWidth = we.width),
                (F.height = we.height));
            } else
              ((F.left = f),
                (F.right = p),
                (F.top = m),
                (F.bottom = g),
                (F.width = u),
                (F.height = d),
                (F.rotate = C));
            ee
              ? (!ge || he) &&
                ((F.position = `sticky`),
                (F.willChange = `transform`),
                (F.top = k),
                (F.right = te),
                (F.bottom = ne),
                (F.left = j))
              : ge && (e.positionFixed || e.positionAbsolute) && (F.position = `absolute`);
          }
          return (
            ol(e, F),
            rl(e, F),
            Object.assign(F, e.style),
            /* @__PURE__ */ O(_e.div, {
              id: n,
              ref: fe,
              ...Uh(gy(ce)),
              ...fs(Ee ? _ : void 0, e.style),
              style: F,
              layoutId: ue,
              "data-framer-name": r,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": _,
              className: cl(v, y, CT),
              transformTemplate: De,
              dangerouslySetInnerHTML: { __html: xe },
            })
          );
        })
      )),
      (TT = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (ET =
        /\p{Regional_Indicator}{2}|\p{Emoji}\p{Emoji_Modifier}?\p{Variation_Selector}?(?:\u{200d}\p{Emoji}\p{Emoji_Modifier}?\p{Variation_Selector}?)*|./gu),
      (DT = /* @__PURE__ */ T(function (e, t) {
        return /* @__PURE__ */ O(`svg`, { ...e, ref: t, children: e.children });
      })),
      (OT = /* @__PURE__ */ _e.create(DT)),
      (kT = /* @__PURE__ */ T(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return /* @__PURE__ */ O(OT, {
          ...r,
          ref: i,
          viewBox: t,
          children: /* @__PURE__ */ O(_e.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (AT = []),
      (jT = `RichTextContainer`),
      (MT = /* @__PURE__ */ T(function (e, t) {
        let {
            __fromCanvasComponent: n = !1,
            _forwardedOverrideId: r,
            _forwardedOverrides: i,
            _usesDOMRect: a,
            anchorLinkOffsetY: o,
            as: c,
            bottom: l,
            center: u,
            children: d,
            environment: f = W.current,
            fonts: p = AT,
            height: m,
            isEditable: h = !1,
            left: g,
            name: _,
            opacity: v,
            positionSticky: y,
            positionStickyBottom: b,
            positionStickyLeft: x,
            positionStickyRight: C,
            positionStickyTop: w,
            right: T,
            rotation: E = 0,
            style: D,
            _initialStyle: ee,
            stylesPresetsClassNames: k,
            text: te,
            top: ne,
            verticalAlignment: j = `top`,
            visible: re = !0,
            width: ie,
            withExternalLayout: ae = !1,
            viewBox: oe,
            viewBoxScale: M = 1,
            effect: se,
            ...ce
          } = e,
          le = Zo(),
          ue = f(),
          de = ue === W.canvas,
          fe = de || ue === W.export,
          pe = S(Yy),
          N = gs(e),
          me = A(null),
          he = t ?? me;
        (Ss(e, he), Yh(p, n, he));
        let ge = ig(se, he),
          _e = s(() => {
            if (d) return dg(d, k, te, o, void 0, ge.getTokenizer());
          }, [d, k, te, o, ge]);
        if (!re) return null;
        let P = { opacity: h && de ? 0 : v },
          ve = Jh(j);
        ve !== St.justifyContent && (P.justifyContent = ve);
        let ye = {},
          be = W.hasRestrictions(),
          xe = Jo(e, le || 0, !1),
          Se = a && (ie === `auto` || m === `auto`),
          F = !!e.transformTemplate || !xe || !be || n || Se,
          Ce = F ? (e.transformTemplate ?? hs(u)) : void 0;
        (ae ||
          (xe && be && !Se
            ? ((ye.x = xe.x + (R(D?.x) ? D.x : 0)),
              (ye.y = xe.y + (R(D?.y) ? D.y : 0)),
              (ye.left = 0),
              (ye.top = 0),
              (P.rotate = Rv.getNumber(E)),
              (P.width = xe.width),
              (P.minWidth = xe.width),
              (P.height = xe.height))
            : ((P.left = g),
              (P.right = T),
              (P.top = ne),
              (P.bottom = l),
              (P.width = ie),
              (P.height = m),
              (P.rotate = E)),
          y
            ? (!fe || pe) &&
              ((P.position = `sticky`),
              (P.willChange = `transform`),
              (P.top = w),
              (P.right = C),
              (P.bottom = b),
              (P.left = x))
            : de && (e.positionFixed || e.positionAbsolute) && (P.position = `absolute`)),
          ol(e, P),
          rl(e, P),
          Object.assign(P, ee, D, ye),
          N && (ce.layout = `preserve-aspect`));
        let we = as(e.as),
          Te = ce[`data-framer-name`] ?? _,
          Ee = Uh(gy(ce)),
          De = fs(F ? u : void 0, D);
        return L(e.viewBox)
          ? e.as === void 0
            ? /* @__PURE__ */ O(kT, {
                ...Ee,
                ...De,
                ref: he,
                style: P,
                layoutId: N,
                viewBox: oe,
                viewBoxScale: M,
                transformTemplate: Ce,
                "data-framer-name": Te,
                "data-framer-component-type": jT,
                children: _e,
              })
            : /* @__PURE__ */ O(we, {
                ...Ee,
                ...De,
                ref: he,
                style: P,
                layoutId: N,
                transformTemplate: Ce,
                "data-framer-name": Te,
                "data-framer-component-type": jT,
                children: /* @__PURE__ */ O(kT, {
                  viewBox: oe,
                  viewBoxScale: M,
                  style: { width: `100%`, height: `100%` },
                  children: _e,
                }),
              })
          : /* @__PURE__ */ O(we, {
              ...Ee,
              ...De,
              ref: he,
              style: P,
              layoutId: N,
              transformTemplate: Ce,
              "data-framer-name": Te,
              "data-framer-component-type": jT,
              children: _e,
            });
      })),
      (NT = /* @__PURE__ */ us(
        /* @__PURE__ */ T(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (L(a)) {
            !r.stylesPresetsClassName &&
              z(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [L(t) ? `html` : `htmlFromDesign`]: a };
            return /* @__PURE__ */ O(wT, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && L(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return /* @__PURE__ */ O(MT, { ...r, ref: i, children: b(a) ? a : void 0 });
        })
      )),
      (PT = /* @__PURE__ */ nr()),
      (FT = class {
        id;
        svg;
        innerHTML;
        viewBox;
        count;
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
      }),
      (IT = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (LT = class {
        entries = /* @__PURE__ */ new Map();
        vectorSetItems = /* @__PURE__ */ new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(nb(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = hg(e);
            (s &&
              (t && gg(s, n),
              (s.id = n),
              (o = xg(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (e && e !== ``) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t && (--t.count, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          PT && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = IT),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          PT && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new FT(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !PT) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        PT && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${IT}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t, n) => {
              let r = t.svg;
              e.push(r.includes(`id="${n}"`) ? r : r.replace(/^<svg/u, `<svg id="${n}"`));
            }),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (RT = /* @__PURE__ */ new LT()),
      (zT = {
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 16,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }),
      (BT = 1e3),
      (VT = `Variable`),
      (HT = `explicitInter`),
      (ke.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = M(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  }))();
}
export {
  Jl as $,
  Hy as A,
  Vg as B,
  cl as C,
  hx as D,
  vx as E,
  g_ as F,
  lh as G,
  Vi as H,
  Xi as I,
  _d as J,
  ta as K,
  It as L,
  Tg as M,
  Sg as N,
  _x as O,
  Zm as P,
  th as Q,
  UT as R,
  Gy as S,
  Mt as St,
  Ig as T,
  bS as U,
  cs as V,
  da as W,
  RT as X,
  Yx as Y,
  Li as Z,
  AC as _,
  V_ as _t,
  gd as a,
  wr as at,
  Cg as b,
  $e as bt,
  vT as c,
  Xm as ct,
  Mv as d,
  Oh as dt,
  un as et,
  Ar as f,
  Uy as ft,
  iT as g,
  Ng as gt,
  oT as h,
  bl as ht,
  co as i,
  Au as it,
  wg as j,
  gx as k,
  Xg as l,
  ln as lt,
  dx as m,
  Ux as mt,
  oS as n,
  Du as nt,
  ox as o,
  fa as ot,
  hp as p,
  kh as pt,
  Pg as q,
  Gb as r,
  ah as rt,
  PS as s,
  ph as st,
  Gx as t,
  nn as tt,
  QS as u,
  en as ut,
  NT as v,
  W as vt,
  wy as w,
  el as x,
  Tt as xt,
  sS as y,
  Nt as yt,
  zt as z,
};
//# sourceMappingURL=framer.d4MlGAvC.mjs.map
