import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  D as t,
  E as n,
  I as r,
  L as i,
  M as a,
  P as o,
  T as s,
  b as c,
  c as ee,
  k as l,
  s as u,
  u as d,
  v as te,
  x as f,
  z as p,
} from "./react.Dq5lJgOf.mjs";
import { K as m, T as h, V as ne, h as g, r as re, z as _ } from "./motion.D3Y82hha.mjs";
import { R as v, r as y, vt as ie, x as ae } from "./framer.d4MlGAvC.mjs";
import { n as oe, r as se, t as b } from "./index.es._dzr92Qq.mjs";
var ce;
function x() {
  return (x = e(() => {
    ce = (e, t, n) => Math.min(Math.max(n, e), t);
  }))();
}
var le;
function S() {
  return (S = e(() => {
    (v(),
      (le = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      { ...le },
      y.EventHandler,
      y.EventHandler,
      y.EventHandler,
      y.Number,
      y.Boolean,
      y.String,
      y.Enum);
  }))();
}
function C() {
  return (C = e(() => {
    (v(), s());
  }))();
}
function w() {
  return (w = e(() => {
    s();
  }))();
}
function T() {
  return (T = e(() => {
    v();
  }))();
}
function E() {
  return (E = e(() => {
    v();
  }))();
}
function D() {
  return (D = e(() => {
    s();
  }))();
}
function O() {
  return (O = e(() => {
    v();
  }))();
}
function k() {
  return (k = e(() => {
    (i(), s());
  }))();
}
function ue() {
  return (ue = e(() => {
    (s(), E());
  }))();
}
function A() {
  return (A = e(() => {
    (s(), v(), E(), w());
  }))();
}
function de() {
  return (de = e(() => {
    (v(), s(), S());
  }))();
}
function j() {
  return (j = e(() => {
    (s(), v());
  }))();
}
function M() {
  return (M = e(() => {
    s();
  }))();
}
function fe(e) {
  let {
    padding: t,
    paddingPerSide: n,
    paddingTop: r,
    paddingRight: i,
    paddingBottom: o,
    paddingLeft: s,
  } = e;
  return a(() => (n ? `${r}px ${i}px ${o}px ${s}px` : t), [t, n, r, i, o, s]);
}
var pe;
function N() {
  return (N = e(() => {
    (s(),
      v(),
      y.FusedNumber,
      (pe = {
        padding: {
          type: y.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
          title: `Padding`,
        },
      }));
  }))();
}
function P() {
  return (P = e(() => {
    (S(), C(), w(), T(), E(), D(), O(), k(), ue(), A(), de(), j(), M(), N());
  }))();
}
function me() {
  return (me = e(() => {
    P();
  }))();
}
function he([e, t]) {
  return e + (100 - e) * (t / 100) * 0.5;
}
function ge() {
  let [e, n] = te(!1);
  return (
    t(() => {
      n(p.matchMedia(`(pointer:fine)`).matches);
    }, []),
    e
  );
}
function F(e, t, { edgeOpacity: n, moreItems: r, buttonRef: i }, a) {
  r.current && e === t
    ? ((r.current = !1), g(n, 1, a), i.current.setAttribute(`disabled`, ``))
    : !r.current &&
      e !== t &&
      ((r.current = !0), g(n, 0, a), i.current.removeAttribute(`disabled`));
}
function _e(e, t) {
  let n = f(e),
    r = _(+!n.current),
    i = m(r, [0, 1], [t || 0, 1]),
    a = m(r, (e) => 1 - e),
    o = f(null),
    s = m(a, (e) => (e > 0.2 ? `auto` : `none`)),
    c = m(s, (e) => (e === `auto` ? `pointer` : `default`));
  return {
    moreItems: n,
    fadeOpacity: i,
    edgeOpacity: r,
    buttonStyle: { ...V, opacity: a, pointerEvents: s, cursor: c },
    buttonRef: o,
  };
}
function ve({ element: e }) {
  e.setAttribute(`aria-hidden`, !1);
}
function ye(e, t, n, r, i, a, o) {
  c(() => {
    if (!e.current) return;
    let s = se(
        (e) => {
          ((n.current = e[t]),
            e[t].current === i.current && (i.current = void 0),
            r(e[t].current),
            a());
        },
        { container: e.current, axis: t }
      ),
      c = oe(e.current, () => {
        (o(), a());
      });
    return () => {
      (s(), c());
    };
  }, [a, o]);
}
function I({
  slots: e,
  gap: t,
  axis: i,
  align: a,
  sizingObject: s,
  fadeObject: ee,
  arrowObject: p,
  snapObject: g,
  progressObject: re,
  ariaLabel: v,
  borderRadius: y,
  effectsObject: ae,
  ...oe
}) {
  let se = e.filter(Boolean),
    b = n.count(se),
    x = ie.current() === ie.canvas,
    le = fe(oe),
    S = i ? `x` : `y`,
    { fadeContent: C, fadeWidth: w, fadeInset: T, fadeTransition: E, fadeAlpha: D } = ee,
    { snap: O, snapEdge: k, fluid: ue } = g,
    {
      widthType: A,
      widthInset: de,
      widthColumns: j,
      heightType: M,
      heightInset: pe,
      heightRows: N,
    } = s,
    {
      showScrollbar: P,
      showProgressDots: me,
      dotSize: I,
      dotsInset: L,
      dotsRadius: R,
      dotsPadding: z,
      dotsGap: B,
      dotsFill: Oe,
      dotsBackground: ke,
      dotsActiveOpacity: Ae,
      dotsOpacity: je,
      dotsBlur: Me,
    } = re,
    {
      showMouseControls: Ne,
      arrowSize: H,
      arrowRadius: Pe,
      arrowFill: Fe,
      leftArrow: Ie,
      rightArrow: Le,
      arrowPadding: Re,
    } = p,
    U = f(void 0),
    W = f(void 0),
    G = _(0),
    ze = (e) => {
      G.set(W.current === void 0 ? e : W.current);
    },
    Be = ge(),
    K = _e(!1, D),
    q = _e(!0, D),
    J = _(T * 0.5),
    Ve = m(J, (e) => 100 - e),
    He = _(w),
    Ue = m([J, He], he),
    We = m(Ue, (e) => 100 - e),
    Ge = _(i ? `right` : `bottom`),
    Ke = m(
      [Ge, K.fadeOpacity, J, Ue, q.fadeOpacity, Ve, We],
      (e) =>
        `linear-gradient(to ${e[0]}, rgb(0, 0, 0, ${e[1]}) ${e[2]}%, rgb(0, 0, 0, 1) ${e[3]}%, rgba(0, 0, 0, 1) ${e[6]}%, rgb(0, 0, 0, ${e[4]}) ${e[5]}%)`
    ),
    Y = f(null),
    [X, qe] = te(x ? 4 : 1),
    Z = { scrollSnapAlign: k, flexShrink: 0 },
    Q = {};
  (a === `stretch` &&
    (i ? ((Q.height = `100%`), (Z.height = `auto`)) : ((Q.width = `100%`), (Z.width = `auto`))),
    ue || (Z.scrollSnapStop = `always`),
    A === `stretch`
      ? ((Z.width = `calc(100% - ${de || 0}px)`), (Q.width = `100%`))
      : A === `columns` &&
        ((Z.width = `calc(${100 / j}% - ${t}px + ${t / j}px)`), (Q.width = `100%`)),
    M === `stretch`
      ? ((Z.height = `calc(100% - ${pe || 0}px)`), (Q.height = `100%`))
      : M === `rows` &&
        ((Z.height = `calc(${100 / N}% - ${t}px + ${t / N}px)`), (Q.height = `100%`)));
  let Je = x ? `hidden` : `auto`,
    Ye = { ...Ce, padding: le },
    Xe = {
      ...we,
      gap: t,
      alignItems: a,
      flexDirection: i ? `row` : `column`,
      overflowX: i ? Je : `hidden`,
      overflowY: i ? `hidden` : Je,
      scrollSnapType: O ? `${S} mandatory` : void 0,
      WebkitOverflowScrolling: `touch`,
      WebkitMaskImage: C ? Ke : void 0,
      maskImage: C ? Ke : void 0,
      borderRadius: y,
    },
    Ze = { "aria-roledescription": `carousel` };
  v && (Ze[`aria-title`] = v);
  let Qe = {};
  if (
    (a === `stretch` && ((Qe[`aria-role`] = `group`), (Qe[`aria-roledescription`] = `slide`)), !x)
  ) {
    let e = f([]);
    ye(
      Y,
      S,
      U,
      ze,
      W,
      l(() => {
        if (!U.current) return;
        let { targetLength: t, containerLength: n, scrollLength: r } = U.current,
          i = G.get();
        if (!t && !n) return;
        if (t > n) {
          (F(i, 0, K, E), F(i, r, q, E));
          for (let t = 0; t < e.current.length; t++) {
            let { element: r, start: a, end: o } = e.current[t];
            o < i || a > i + n
              ? r.setAttribute(`aria-hidden`, !0)
              : r.setAttribute(`aria-hidden`, !1);
          }
        } else (F(0, 0, K, E), F(1, 1, q, E), e.current.forEach(ve));
        let a = Math.ceil(t / n);
        isNaN(a) || (a / b > 0.65 && (a = b), a !== X && qe(a));
      }, [X]),
      l(() => {
        Y.current &&
          (e.current = Array.from(Y.current.children).map((e) =>
            i
              ? { element: e, start: e.offsetLeft, end: e.offsetLeft + e.offsetWidth }
              : { element: e, start: e.offsetTop, end: e.offsetTop + e.offsetHeight }
          ));
      }, [])
    );
  }
  x &&
    (c(() => {
      He.set(w);
    }, [w]),
    c(() => {
      J.set(T * 0.5);
    }, [T]),
    c(() => {
      Ge.set(i ? `right` : `bottom`);
    }, [i]));
  let $e = ne(),
    et = (e) => {
      W.current = e;
      let t = i ? { left: e } : { top: e };
      Y.current.scrollTo({ ...t, behavior: $e ? `auto` : `smooth` });
    },
    tt = (e, t = 0) => {
      if (!U.current) return;
      let { scrollLength: n } = U.current,
        r = n / (X - 1);
      et(e * r + t * r);
    },
    nt = (e) => () => {
      if (!U.current) return;
      let { containerLength: t, scrollLength: n } = U.current,
        r = G.get(),
        i = n / X,
        a = ce(0, X - 1, Math.floor(r / i)),
        o = 0;
      (O && (k === `start` || k === `end`) && e >= 1 && (o = 0.4), tt(a + e, o));
    };
  if (b === 0) return /*#__PURE__*/ u(xe, {});
  let rt = [],
    $ = {};
  if (X > 1 && me && !P) {
    for (let e = 0; e < X; e++) {
      let t = (x && !e) || !1;
      rt.push(
        /*#__PURE__*/ u(be, {
          dotStyle: { ...De, width: I, height: I, backgroundColor: Oe },
          buttonStyle: V,
          isSelected: t,
          selectedOpacity: Ae,
          opacity: je,
          onClick: () => o(() => tt(e)),
          currentScroll: G,
          scrollInfo: U,
          total: X,
          index: e,
          gap: B,
          padding: z,
          axis: i,
        })
      );
    }
    Me && ($.backdropFilter = $.WebkitBackdropFilter = `blur(${Me}px)`);
  }
  return /*#__PURE__*/ d(`section`, {
    style: Ye,
    ...Ze,
    children: [
      /*#__PURE__*/ u(h.ul, {
        ref: Y,
        style: Xe,
        className: `framer--carousel`,
        "data-show-scrollbar": P,
        "aria-atomic": `false`,
        "aria-live": `polite`,
        onWheel: () => (W.current = void 0),
        children: n.map(se, (e, t) =>
          /*#__PURE__*/ u(`li`, {
            style: Z,
            ...Qe,
            "aria-label": `${t + 1} of ${b}`,
            children: /*#__PURE__*/ r(e, { ...e.props, style: { ...e.props?.style, ...Q } }),
          })
        ),
      }),
      /*#__PURE__*/ d(`fieldset`, {
        style: { ...Te, padding: Re, display: `flex`, flexDirection: i ? `row` : `column` },
        "aria-label": `Carousel pagination controls`,
        className: `framer--carousel-controls`,
        "data-show-mouse-controls": Ne,
        children: [
          Be &&
            /*#__PURE__*/ u(h.button, {
              ref: K.buttonRef,
              type: `button`,
              style: {
                ...K.buttonStyle,
                backgroundColor: Fe,
                width: H,
                height: H,
                borderRadius: Pe,
                rotate: i ? 0 : 90,
                display: Ne ? `block` : `none`,
              },
              onClick: nt(-1),
              "aria-label": `Previous`,
              whileTap: { scale: 0.9 },
              transition: { duration: 0.05 },
              children: /*#__PURE__*/ u(`img`, {
                decoding: `async`,
                alt: ``,
                width: H,
                height: H,
                src: Ie || `../../assets/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg`,
              }),
            }),
          Be &&
            /*#__PURE__*/ u(h.button, {
              ref: q.buttonRef,
              type: `button`,
              style: {
                ...q.buttonStyle,
                backgroundColor: Fe,
                width: H,
                height: H,
                borderRadius: Pe,
                rotate: i ? 0 : 90,
                display: Ne ? `block` : `none`,
              },
              onClick: nt(1),
              "aria-label": `Next`,
              whileTap: { scale: 0.9 },
              transition: { duration: 0.05 },
              children: /*#__PURE__*/ u(`img`, {
                decoding: `async`,
                alt: ``,
                width: H,
                height: H,
                src: Le || `../../assets/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg`,
              }),
            }),
          rt.length > 1
            ? /*#__PURE__*/ u(`div`, {
                style: {
                  ...Ee,
                  left: i ? `50%` : L,
                  top: i ? `unset` : `50%`,
                  transform: i ? `translateX(-50%)` : `translateY(-50%)`,
                  flexDirection: i ? `row` : `column`,
                  bottom: i ? L : `unset`,
                  borderRadius: R,
                  backgroundColor: ke,
                  ...$,
                },
                children: rt,
              })
            : null,
        ],
      }),
      /*#__PURE__*/ u(Se, {}),
    ],
  });
}
function be({
  currentScroll: e,
  scrollInfo: t,
  isSelected: n,
  selectedOpacity: r,
  opacity: i,
  total: a,
  index: o,
  dotStyle: s,
  buttonStyle: c,
  gap: ee,
  padding: l,
  axis: d,
  ...te
}) {
  let f = m(e, (e) => {
      if (!t.current?.scrollLength) return o === 0 ? r : i;
      let n = t.current?.scrollLength / a,
        s = n * o,
        c = s + n;
      return e >= s && (o < a - 1 ? e < c : o === a - 1) ? r : i;
    }),
    p = ee / 2,
    ne = !d && o > 0 ? p : l,
    g = !d && o !== a - 1 ? p : l,
    re = d && o !== a - 1 ? p : l,
    _ = d && o > 0 ? p : l;
  return /*#__PURE__*/ u(`button`, {
    "aria-label": `Scroll to page ${o + 1}`,
    type: `button`,
    ...te,
    style: { ...c, padding: `${ne}px ${re}px ${g}px ${_}px` },
    children: /*#__PURE__*/ u(h.div, { style: { ...s, opacity: f } }),
  });
}
function xe() {
  return /*#__PURE__*/ d(`section`, {
    style: L,
    children: [
      /*#__PURE__*/ u(`div`, { style: R, children: `✨` }),
      /*#__PURE__*/ u(`p`, { style: z, children: `Connect to Content` }),
      /*#__PURE__*/ u(`p`, { style: B, children: `Add layers or components to swipe between.` }),
    ],
  });
}
function Se() {
  return /*#__PURE__*/ u(`div`, {
    dangerouslySetInnerHTML: {
      __html: `<style>@media (pointer: fine) {
                .framer--carousel[data-show-scrollbar="false"]::-webkit-scrollbar {
                    display: none;
                    -webkit-appearance: none;
                    width: 0;
                    height: 0;
                }

                .framer--carousel[data-show-scrollbar="false"]::-webkit-scrollbar-thumb {
                    display: none;
                }

                .framer--carousel[data-show-scrollbar="false"] {
                    scrollbar-width: none;
                    scrollbar-height: none;
                }
            }</style>`,
    },
  });
}
var L, R, z, B, Ce, we, V, Te, Ee, De;
function Oe() {
  return (Oe = e(() => {
    (i(),
      ee(),
      s(),
      v(),
      b(),
      x(),
      re(),
      me(),
      (I.defaultProps = {
        gap: 10,
        padding: 10,
        progressObject: { showScrollbar: !1, showProgressDots: !1 },
        sizingObject: {
          widthType: `auto`,
          widthOffset: 0,
          widthColumns: 2,
          heightType: `auto`,
          heightOffset: 0,
          heightRows: 2,
        },
        borderRadius: 0,
      }),
      ae(I, {
        slots: { type: y.Array, title: `Children`, control: { type: y.ComponentInstance } },
        axis: {
          type: y.Enum,
          title: `Direction`,
          options: [!0, !1],
          optionIcons: [`direction-horizontal`, `direction-vertical`],
          displaySegmentedControl: !0,
        },
        align: {
          type: y.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            axis: {
              true: [`align-top`, `align-middle`, `align-bottom`],
              false: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        gap: { type: y.Number, title: `Gap` },
        ...pe,
        sizingObject: {
          type: y.Object,
          title: `Sizing`,
          controls: {
            widthType: {
              type: y.Enum,
              title: `Width`,
              options: [`auto`, `stretch`, `columns`],
              optionTitles: [`Auto`, `Stretch`, `Columns`],
              defaultValue: `auto`,
            },
            widthInset: {
              type: y.Number,
              title: `Inset`,
              min: 0,
              max: 500,
              defaultValue: 0,
              hidden: (e) => e.widthType !== `stretch`,
            },
            widthColumns: {
              type: y.Number,
              title: `Columns`,
              min: 1,
              max: 10,
              defaultValue: 2,
              displayStepper: !0,
              hidden: (e) => e.widthType !== `columns`,
            },
            heightType: {
              type: y.Enum,
              title: `Height`,
              options: [`auto`, `stretch`, `rows`],
              optionTitles: [`Auto`, `Stretch`, `Rows`],
              defaultValue: `auto`,
            },
            heightInset: {
              type: y.Number,
              title: `Inset`,
              min: 0,
              max: 500,
              defaultValue: 0,
              hidden: (e) => e.heightType !== `stretch`,
            },
            heightRows: {
              type: y.Number,
              title: `Rows`,
              min: 1,
              max: 10,
              defaultValue: 2,
              displayStepper: !0,
              hidden: (e) => e.heightType !== `rows`,
            },
          },
        },
        snapObject: {
          type: y.Object,
          title: `Snapping`,
          controls: {
            snap: { type: y.Boolean, title: `Enable` },
            snapEdge: {
              type: y.Enum,
              title: `Edge`,
              options: [`start`, `center`, `end`],
              optionTitles: [`Left`, `Center`, `Right`],
              defaultValue: `center`,
              hidden: (e) => !e.snap,
            },
            fluid: { type: y.Boolean, title: `Fluid`, defaultValue: !1, hidden: (e) => !e.snap },
          },
        },
        fadeObject: {
          type: y.Object,
          title: `Fading`,
          controls: {
            fadeContent: { type: y.Boolean, title: `Enable`, defaultValue: !1 },
            fadeWidth: {
              type: y.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden: (e) => !e.fadeContent,
            },
            fadeInset: {
              type: y.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden: (e) => !e.fadeContent,
            },
            fadeAlpha: {
              type: y.Number,
              title: `Opacity`,
              hidden: (e) => !e.fadeContent,
              min: 0,
              max: 1,
              step: 0.05,
              defaultValue: 0,
            },
            fadeTransition: {
              type: y.Transition,
              title: `Transition`,
              hidden: (e) => !e.fadeContent,
            },
          },
        },
        progressObject: {
          type: y.Object,
          title: `Progress`,
          controls: {
            showScrollbar: { type: y.Boolean, title: `Scroll Bar`, defaultValue: !1 },
            showProgressDots: {
              type: y.Boolean,
              title: `Dots`,
              defaultValue: !1,
              hidden: (e) => e.showScrollbar,
            },
            dotSize: {
              type: y.Number,
              title: `Size`,
              min: 1,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsInset: {
              type: y.Number,
              title: `Inset`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsGap: {
              type: y.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsPadding: {
              type: y.Number,
              title: `Padding`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsFill: {
              type: y.Color,
              title: `Fill`,
              defaultValue: `#fff`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBackground: {
              type: y.Color,
              title: `Backdrop`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsRadius: {
              type: y.Number,
              title: `Radius`,
              min: 0,
              max: 200,
              defaultValue: 50,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsOpacity: {
              type: y.Number,
              title: `Opacity`,
              min: 0,
              max: 1,
              defaultValue: 0.5,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsActiveOpacity: {
              type: y.Number,
              title: `Current`,
              min: 0,
              max: 1,
              defaultValue: 1,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBlur: {
              type: y.Number,
              title: `Blur`,
              min: 0,
              max: 50,
              defaultValue: 4,
              step: 1,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
          },
        },
        arrowObject: {
          type: y.Object,
          title: `Arrows`,
          controls: {
            showMouseControls: { type: y.Boolean, title: `Show`, defaultValue: !0 },
            arrowFill: {
              type: y.Color,
              title: `Fill`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showMouseControls,
            },
            leftArrow: { type: y.Image, title: `Previous`, hidden: (e) => !e.showMouseControls },
            rightArrow: { type: y.Image, title: `Next`, hidden: (e) => !e.showMouseControls },
            arrowSize: {
              type: y.Number,
              title: `Size`,
              min: 0,
              max: 200,
              displayStepper: !0,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowRadius: {
              type: y.Number,
              title: `Radius`,
              min: 0,
              max: 500,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowPadding: {
              type: y.Number,
              title: `Inset`,
              min: 0,
              max: 100,
              defaultValue: 20,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls,
            },
          },
        },
        ariaLabel: { type: y.String, title: `Aria Label`, placeholder: `Movies...` },
        borderRadius: {
          type: y.Number,
          title: `Radius`,
          min: 0,
          max: 500,
          displayStepper: !0,
          defaultValue: 0,
        },
      }),
      (L = {
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
      (R = { fontSize: 32, marginBottom: 10 }),
      (z = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (B = { margin: 0, opacity: 0.7, maxWidth: 130, lineHeight: 1.5, textAlign: `center` }),
      (Ce = {
        display: `flex`,
        overflow: `hidden`,
        width: `100%`,
        height: `100%`,
        position: `relative`,
      }),
      (we = {
        padding: 0,
        margin: 0,
        listStyle: `none`,
        position: `relative`,
        display: `flex`,
        flex: `1 1 100%`,
        width: `100%`,
        height: `100%`,
      }),
      (V = {
        border: `none`,
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        background: `transparent`,
        cursor: `pointer`,
        margin: 0,
        padding: 0,
      }),
      (Te = {
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        position: `absolute`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: `none`,
        border: 0,
        padding: 0,
        margin: 0,
      }),
      (Ee = {
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        position: `absolute`,
        pointerEvents: `auto`,
      }),
      (De = {
        borderRadius: `50%`,
        background: `white`,
        cursor: `pointer`,
        border: `none`,
        placeContent: `center`,
        placeItems: `center`,
        padding: 0,
      }));
  }))();
}
export { Oe as n, I as t };
//# sourceMappingURL=Carousel.Iu5GI51U.mjs.map
