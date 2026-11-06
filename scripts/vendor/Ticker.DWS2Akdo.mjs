import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  D as t,
  E as n,
  I as r,
  M as i,
  T as a,
  b as o,
  c as s,
  k as c,
  s as l,
  u,
  v as ee,
  x as d,
} from "./react.Dq5lJgOf.mjs";
import {
  I as te,
  K as ne,
  T as re,
  V as ie,
  a as f,
  r as p,
  v as ae,
  z as oe,
} from "./motion.D3Y82hha.mjs";
import { R as m, r as h, vt as g, x as _ } from "./framer.d4MlGAvC.mjs";
import { n as se, t as v } from "./index.es._dzr92Qq.mjs";
function y(e) {
  let {
      slots: a = [],
      gap: s,
      padding: p,
      paddingPerSide: m,
      paddingTop: h,
      paddingRight: _,
      paddingBottom: v,
      paddingLeft: y,
      speed: E,
      hoverFactor: D,
      direction: O,
      alignment: de,
      sizingOptions: fe,
      fadeOptions: pe,
      style: me,
    } = e,
    { fadeContent: k, overflow: he, fadeWidth: A, fadeInset: j, fadeAlpha: M } = pe,
    { widthType: N, heightType: P } = fe,
    ge = m ? `${h}px ${_}px ${v}px ${y}px` : `${p}px`,
    F = g.current(),
    I = F === g.canvas || F === g.export,
    L = a.filter(Boolean),
    R = n.count(L),
    z = R > 0;
  O === !0 && (O = `left`);
  let B = O === `left` || O === `right`,
    _e = oe(0),
    V = x[O];
  ne(_e, V);
  let H = d(null),
    U = i(() => [{ current: null }, { current: null }], []),
    [W, ve] = ee({ parent: null, children: null }),
    G = null,
    K = [],
    q = 0,
    J = 0;
  (I && ((q = R ? Math.floor(10 / R) : 0), (J = 1)),
    !I &&
      z &&
      W.parent &&
      ((q = Math.round((W.parent / W.children) * 2) + 1), (q = Math.min(q, b)), (J = 1)));
  let Y = c(() => {
      if (z && H.current) {
        let e = B ? H.current.offsetWidth : H.current.offsetHeight,
          t = U[0].current ? (B ? U[0].current.offsetLeft : U[0].current.offsetTop) : 0,
          n =
            (U[1].current
              ? B
                ? U[1].current.offsetLeft + U[1].current.offsetWidth
                : U[1].current.offsetTop + U[1].current.offsetHeight
              : 0) -
            t +
            s;
        ve({ parent: e, children: n });
      }
    }, []),
    ye = I ? { contentVisibility: `auto` } : {};
  if (z) {
    if (!I) {
      let e = d(!0);
      t(
        () => (
          ae.read(Y, !1, !0),
          se(H.current, ({ contentSize: t }) => {
            (!e.current && (t.width || t.height) && ae.read(Y, !1, !0), (e.current = !1));
          })
        ),
        []
      );
    }
    G = n.map(L, (e, t) => {
      let n;
      (t === 0 && (n = U[0]), t === L.length - 1 && (n = U[1]));
      let i = { width: N ? e.props?.width : `100%`, height: P ? e.props?.height : `100%` };
      return /*#__PURE__*/ l(f, {
        inherit: `id`,
        children: /*#__PURE__*/ l(`li`, {
          ref: n,
          style: i,
          children: /*#__PURE__*/ r(
            e,
            {
              style: { ...e.props?.style, ...i, flexShrink: 0, ...ye },
              layoutId: e.props.layoutId ? e.props.layoutId + `-original-` + t : void 0,
            },
            e.props?.children
          ),
        }),
      });
    });
  }
  let X = I ? !0 : te(H);
  if (!I)
    for (let e = 0; e < q; e++)
      K = K.concat(
        n.map(L, (t, n) => {
          let i = {
            width: N ? t.props?.width : `100%`,
            height: P ? t.props?.height : `100%`,
            willChange: X ? `transform` : void 0,
          };
          return /*#__PURE__*/ l(
            f,
            {
              inherit: `id`,
              children: /*#__PURE__*/ l(
                `li`,
                {
                  style: i,
                  "aria-hidden": !0,
                  children: /*#__PURE__*/ r(
                    t,
                    {
                      key: e + ` ` + n,
                      style: {
                        ...t.props?.style,
                        width: N ? t.props?.width : `100%`,
                        height: P ? t.props?.height : `100%`,
                        flexShrink: 0,
                        ...ye,
                      },
                      layoutId: t.props.layoutId ? t.props.layoutId + `-dupe-` + e : void 0,
                    },
                    t.props?.children
                  ),
                },
                e + `li` + n
              ),
            },
            e + `lg` + n
          );
        })
      );
  let Z = W.children + W.children * Math.round(W.parent / W.children);
  (d(null), d(null), d(0));
  let be = d(!1),
    xe = ie(),
    Se = d(null),
    Q = d(null);
  if (!I) {
    o(() => {
      if (!xe && Z && E)
        return (
          (Q.current = Se.current.animate(
            { transform: [V(0), V(Z)] },
            { duration: (Math.abs(Z) / E) * 1e3, iterations: 1 / 0, easing: `linear` }
          )),
          () => Q.current.cancel()
        );
    }, [D, Z, E]);
    let e = c(() => {
      if (!Q.current) return;
      let e = document.hidden;
      X && !e && Q.current.playState === `paused`
        ? Q.current.play()
        : (!X || e) && Q.current.playState === `running` && Q.current.pause();
    }, [X]);
    (o(() => {
      e();
    }, [X, D, Z, E]),
      o(
        () => (
          document.addEventListener(`visibilitychange`, e),
          () => {
            document.removeEventListener(`visibilitychange`, e);
          }
        ),
        [e]
      ));
  }
  let Ce = B ? `to right` : `to bottom`,
    $ = A / 2,
    we = 100 - A / 2,
    Te = `linear-gradient(${Ce}, rgba(0, 0, 0, ${M}) ${w(j, 0, $)}%, rgba(0, 0, 0, 1) ${$}%, rgba(0, 0, 0, 1) ${we}%, rgba(0, 0, 0, ${M}) ${100 - j}%)`;
  return z
    ? /*#__PURE__*/ l(`section`, {
        style: {
          ...S,
          opacity: J,
          WebkitMaskImage: k ? Te : void 0,
          maskImage: k ? Te : void 0,
          overflow: he ? `visible` : `hidden`,
          padding: ge,
        },
        ref: H,
        children: /*#__PURE__*/ u(re.ul, {
          ref: Se,
          style: {
            ...S,
            gap: s,
            top: O === `bottom` && T(Z) ? -Z : void 0,
            left: O === `right` && T(Z) ? -Z : void 0,
            placeItems: de,
            position: `relative`,
            flexDirection: B ? `row` : `column`,
            ...me,
            willChange: I || !X ? `auto` : `transform`,
            transform: V(0),
          },
          onMouseEnter: () => {
            ((be.current = !0), Q.current && (Q.current.playbackRate = D));
          },
          onMouseLeave: () => {
            ((be.current = !1), Q.current && (Q.current.playbackRate = 1));
          },
          children: [G, K],
        }),
      })
    : /*#__PURE__*/ u(`section`, {
        style: ce,
        children: [
          /*#__PURE__*/ l(`div`, { style: le, children: `✨` }),
          /*#__PURE__*/ l(`p`, { style: ue, children: `Connect to Content` }),
          /*#__PURE__*/ l(`p`, {
            style: C,
            children: `Add layers or components to infinitely loop on your page.`,
          }),
        ],
      });
}
var b, x, S, ce, le, ue, C, w, T;
function E() {
  return (E = e(() => {
    (s(),
      a(),
      m(),
      p(),
      v(),
      (b = 100),
      (x = {
        left: (e) => `translateX(-${e}px)`,
        right: (e) => `translateX(${e}px)`,
        top: (e) => `translateY(-${e}px)`,
        bottom: (e) => `translateY(${e}px)`,
      }),
      (y.defaultProps = {
        gap: 10,
        padding: 10,
        sizingOptions: { widthType: !0, heightType: !0 },
        fadeOptions: { fadeContent: !0, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        direction: !0,
      }),
      _(y, {
        slots: { type: h.Array, title: `Children`, control: { type: h.ComponentInstance } },
        speed: {
          type: h.Number,
          title: `Speed`,
          min: 0,
          max: 1e3,
          defaultValue: 100,
          unit: `%`,
          displayStepper: !0,
          step: 5,
        },
        direction: {
          type: h.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          defaultValue: `left`,
          displaySegmentedControl: !0,
        },
        alignment: {
          type: h.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        gap: { type: h.Number, title: `Gap` },
        padding: {
          title: `Padding`,
          type: h.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        sizingOptions: {
          type: h.Object,
          title: `Sizing`,
          controls: {
            widthType: {
              type: h.Boolean,
              title: `Width`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
            heightType: {
              type: h.Boolean,
              title: `Height`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
          },
        },
        fadeOptions: {
          type: h.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: h.Boolean, title: `Fade`, defaultValue: !0 },
            overflow: {
              type: h.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: h.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: h.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: h.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        hoverFactor: {
          type: h.Number,
          title: `Hover`,
          min: 0,
          max: 1,
          unit: `x`,
          defaultValue: 1,
          step: 0.1,
          displayStepper: !0,
          description: `Slows down the speed while you are hovering.`,
        },
      }),
      (S = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (ce = {
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
        padding: `20px 20px 30px 20px`,
      }),
      (le = { fontSize: 32, marginBottom: 10 }),
      (ue = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (C = { margin: 0, opacity: 0.7, maxWidth: 150, lineHeight: 1.5, textAlign: `center` }),
      (w = (e, t, n) => Math.min(Math.max(e, t), n)),
      (T = (e) => typeof e == `number` && !isNaN(e)));
  }))();
}
export { E as n, y as t };
//# sourceMappingURL=Ticker.DWS2Akdo.mjs.map
