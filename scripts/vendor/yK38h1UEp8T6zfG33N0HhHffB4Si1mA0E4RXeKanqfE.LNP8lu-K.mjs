import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  C as t,
  D as n,
  E as r,
  F as i,
  I as a,
  L as o,
  M as s,
  P as c,
  T as l,
  b as u,
  c as d,
  j as f,
  k as p,
  m,
  s as h,
  u as g,
  v as _,
  w as v,
  x as y,
  z as b,
} from "./react.Dq5lJgOf.mjs";
import {
  I as x,
  J as S,
  K as C,
  T as w,
  a as ee,
  h as te,
  r as T,
  s as ne,
  v as re,
  w as ie,
  z as ae,
} from "./motion.D3Y82hha.mjs";
import {
  $ as oe,
  C as E,
  M as D,
  N as O,
  R as k,
  at as se,
  b as ce,
  c as A,
  ft as le,
  ht as ue,
  it as de,
  j as fe,
  m as pe,
  n as me,
  nt as he,
  o as ge,
  ot as _e,
  r as j,
  rt as ve,
  t as ye,
  u as M,
  v as N,
  vt as be,
  x as xe,
} from "./framer.d4MlGAvC.mjs";
import { n as Se, t as Ce } from "./index.es._dzr92Qq.mjs";
import { i as we, n as Te, r as P, t as Ee } from "./W6ZCCcKuw.57CkUy80.mjs";
import { i as F, n as I, r as De, t as Oe } from "./TPvCPpffK.CJ-lgUmj.mjs";
import { i as ke, n as Ae, r as je, t as Me } from "./iBI2c5jgM.QEoKO0-0.mjs";
import { n as Ne, t as Pe } from "./UsePageVisibility.iv4uwWms.mjs";
import { n as Fe, r as Ie } from "./KAtQViVAr.BWr1_fkl.mjs";
function Le(e, t) {
  let n,
    r = e.current;
  return (
    Object.defineProperty(e, "current", {
      get() {
        return r;
      },
      set(e) {
        ((r = e), e === null ? t.abort() : n?.(e));
      },
      configurable: !0,
    }),
    r ||
      new Promise((e, r) => {
        ((n = e), t.signal.addEventListener(`abort`, r));
      }).catch(() => {})
  );
}
function L(e) {
  let {
      slots: t = [],
      startFrom: i,
      direction: a,
      effectsOptions: o,
      autoPlayControl: l,
      dragControl: d,
      alignment: f,
      gap: m,
      padding: v,
      paddingPerSide: ee,
      paddingTop: T,
      paddingRight: ne,
      paddingBottom: ie,
      paddingLeft: oe,
      itemAmount: E,
      fadeOptions: D,
      intervalControl: O,
      transitionControl: k,
      arrowOptions: se,
      borderRadius: ce,
      progressOptions: A,
      style: le,
    } = e,
    {
      effectsOpacity: ue,
      effectsScale: de,
      effectsRotate: fe,
      effectsPerspective: pe,
      effectsHover: me,
      playOffscreen: he,
    } = o,
    { fadeContent: ge, overflow: _e, fadeWidth: j, fadeInset: ve, fadeAlpha: ye } = D,
    {
      showMouseControls: M,
      arrowSize: N,
      arrowRadius: xe,
      arrowFill: Ce,
      leftArrow: we,
      rightArrow: Te,
      arrowShouldSpace: P = !0,
      arrowShouldFadeIn: Ee = !1,
      arrowPosition: F,
      arrowPadding: I,
      arrowGap: De,
      arrowPaddingTop: Oe,
      arrowPaddingRight: ke,
      arrowPaddingBottom: Ae,
      arrowPaddingLeft: je,
    } = se,
    {
      showProgressDots: Me,
      dotSize: Pe,
      dotsInset: Fe,
      dotsRadius: Ie,
      dotsPadding: L,
      dotsGap: Ze,
      dotsFill: Qe,
      dotsBackground: $e,
      dotsActiveOpacity: R,
      dotsOpacity: et,
      dotsBlur: tt,
    } = A,
    nt = ee ? `${T}px ${ne}px ${ie}px ${oe}px` : `${v}px`,
    z = be.current() === be.canvas,
    B = t.filter(Boolean),
    rt = r.count(B) > 0,
    V = a === `left` || a === `right`,
    H = a === `right` || a === `bottom`;
  if (!rt)
    return /*#__PURE__*/ g(`section`, {
      style: Be,
      children: [
        /*#__PURE__*/ h(`div`, { style: Ve, children: `⭐️` }),
        /*#__PURE__*/ h(`p`, { style: He, children: `Connect to Content` }),
        /*#__PURE__*/ h(`p`, {
          style: Ue,
          children: `Add layers or components to make infinite auto-playing slideshows.`,
        }),
      ],
    });
  let U = y(null),
    W = s(() => [{ current: null }, { current: null }], [B]),
    G = y(void 0),
    [K, it] = _({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
      viewportLength: null,
    }),
    [at, ot] = _(!1),
    [st, q] = _(l),
    [ct, lt] = _(!1),
    [J, ut] = _(!1),
    dt = [],
    ft = 4;
  z && (ft = 1);
  let pt = p(() => {
      if (!U.current) return;
      let e = W[0].current,
        t = W[1].current,
        n = V ? U.current.offsetWidth : U.current.offsetHeight,
        r = e ? (V ? e.offsetLeft : e.offsetTop) : 0,
        i = (t ? (V ? t.offsetLeft + t.offsetWidth : t.offsetTop + t.offsetHeight) : 0) - r + m,
        a = e ? (V ? e.offsetWidth : e.offsetHeight) : 0,
        o = e ? e.offsetWidth : 0,
        s = e ? e.offsetHeight : 0,
        c = V
          ? Math.max(
              document.documentElement.clientWidth || 0,
              b.innerWidth || 0,
              U.current.offsetWidth
            )
          : Math.max(
              document.documentElement.clientHeight || 0,
              b.innerHeight || 0,
              U.current.offsetHeight
            );
      it({ parent: n, children: i, item: a, itemWidth: o, itemHeight: s, viewportLength: c });
    }, []),
    mt = p(async () => {
      let e = new AbortController(),
        [t, n] = W;
      if (!z && (!t.current || !n.current))
        try {
          await Promise.all([Le(t, e), Le(n, e)]);
        } catch {
          e.abort();
        }
      re.read(pt, !1, !0);
    }, [pt]);
  n(() => {
    mt();
  }, [E]);
  let ht = y(!0);
  (u(
    () =>
      Se(U.current, ({ contentSize: e }) => {
        (!ht.current && (e.width || e.height) && (mt(), c(() => ut(!0))), (ht.current = !1));
      }),
    []
  ),
    u(() => {
      if (J) {
        let e = setTimeout(() => c(() => ut(!1)), 500);
        return () => clearTimeout(e);
      }
    }, [J]));
  let Y = B?.length,
    gt = z ? 0 : K?.children,
    _t = K?.item + m,
    vt = i * _t,
    [X, Z] = _(i + Y),
    [yt, bt] = _(!1);
  z && X !== i && Z(i);
  let xt = y(null),
    St = x(xt),
    Ct = Ne() && St,
    wt = H ? 1 : -1,
    Q = ae(gt),
    Tt = V ? -i * (K?.itemWidth + m) : -i * (K?.itemHeight + m),
    Et = () => wt * X * _t,
    Dt = z
      ? 0
      : C(Q, (e) => {
          let t = S(-gt, -gt * 2, e);
          return isNaN(t) ? 0 : t;
        }),
    Ot = S(0, Y, X),
    kt = S(0, -Y, X);
  n(() => {
    K?.children !== null && !ht.current && J && Q.set(Et());
  }, [K, gt, wt, vt, X, _t, J]);
  let At = () => {
      !z &&
        rt &&
        K.parent &&
        !yt &&
        (Q.get() !== Et() && te(Q, Et(), k),
        l &&
          st &&
          (he || Ct) &&
          (G.current = setTimeout(() => {
            (c(() => Z((e) => e + 1)), At());
          }, O * 1e3)));
    },
    $ = (e, t = !1) => {
      H
        ? t
          ? c(() => Z((t) => t - e))
          : Z((t) => t - e)
        : t
          ? c(() => Z((t) => t + e))
          : Z((t) => t + e);
    },
    jt = (e) => {
      let t = S(0, Y, X),
        n = S(0, -Y, X),
        r = e - t,
        i = e - Math.abs(n);
      c(H ? () => Z((e) => e - i) : () => Z((e) => e + r));
    },
    Mt = () => {
      c(() => bt(!0));
    },
    Nt = (e, { offset: t, velocity: n }) => {
      c(() => bt(!1));
      let r = V ? t.x : t.y,
        i = V ? n.x : n.y,
        a = r < -K.item / 2,
        o = r > K.item / 2,
        s = Math.round(Math.abs(r) / K.item),
        l = s === 0 ? 1 : s;
      i > 200 ? $(-l, !0) : i < -200 ? $(l, !0) : (a && $(s, !0), o && $(-s, !0));
    };
  u(() => {
    if (Ct && !J) return (At(), () => G.current && clearTimeout(G.current));
  }, [dt, Ct, J]);
  let Pt = 0,
    Ft = `calc(${100 / E}% - ${m}px + ${m / E}px)`;
  for (let e = 0; e < ft; e++)
    dt = dt.concat(
      r.map(B, (t, n) => {
        let r;
        return (
          e === 0 && (n === 0 && (r = W[0]), n === B.length - 1 && (r = W[1])),
          /*#__PURE__*/ h(
            qe,
            {
              ref: r,
              slideKey: e + n + `lg`,
              index: e,
              width: V && E > 1 ? Ft : `100%`,
              height: V ? `100%` : E > 1 ? Ft : `100%`,
              size: K,
              child: t,
              numChildren: B?.length,
              wrappedValue: Dt,
              childCounter: Pt++,
              gap: m,
              isCanvas: z,
              isHorizontal: V,
              effectsOpacity: ue,
              effectsScale: de,
              effectsRotate: fe,
              children: e + n,
            },
            e + n + `lg`
          )
        );
      })
    );
  let It = V ? `to right` : `to bottom`,
    Lt = j / 2,
    Rt = 100 - j / 2,
    zt = `linear-gradient(${It}, rgba(0, 0, 0, ${ye}) ${Ke(ve, 0, Lt)}%, rgba(0, 0, 0, 1) ${Lt}%, rgba(0, 0, 0, 1) ${Rt}%, rgba(0, 0, 0, ${ye}) ${100 - ve}%)`,
    Bt = [],
    Vt = {};
  if (Me) {
    for (let e = 0; e < B?.length; e++)
      Bt.push(
        /*#__PURE__*/ h(
          Je,
          {
            dotStyle: { ...Xe, width: Pe, height: Pe, backgroundColor: Qe },
            buttonStyle: We,
            selectedOpacity: R,
            opacity: et,
            onClick: () => jt(e),
            wrappedIndex: Ot,
            wrappedIndexInverted: kt,
            total: Y,
            index: e,
            gap: Ze,
            padding: L,
            isHorizontal: V,
            isInverted: H,
          },
          e
        )
      );
    tt > 0 && (Vt.backdropFilter = Vt.WebkitBackdropFilter = `blur(${tt}px)`);
  }
  let Ht = d
      ? {
          drag: V ? `x` : `y`,
          onDragStart: Mt,
          onDragEnd: Nt,
          dragDirectionLock: !0,
          values: { x: Q, y: Q },
          dragMomentum: !1,
        }
      : {},
    Ut = F === `top-left` || F === `top-mid` || F === `top-right`,
    Wt = F === `bottom-left` || F === `bottom-mid` || F === `bottom-right`,
    Gt = F === `top-left` || F === `bottom-left`,
    Kt = F === `top-right` || F === `bottom-right`,
    qt = F === `top-mid` || F === `bottom-mid` || F === `auto`;
  return /*#__PURE__*/ g(`section`, {
    style: {
      ...ze,
      padding: nt,
      WebkitMaskImage: ge ? zt : void 0,
      maskImage: ge ? zt : void 0,
      opacity: K?.item === null ? Re : 1,
      userSelect: `none`,
    },
    onMouseEnter: () => {
      (ot(!0), me || q(!1));
    },
    onMouseLeave: () => {
      (ot(!1), me || q(!0));
    },
    onMouseDown: (e) => {
      (e.preventDefault(), c(() => lt(!0)));
    },
    onMouseUp: () => c(() => lt(!1)),
    ref: xt,
    children: [
      /*#__PURE__*/ h(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          margin: 0,
          padding: `inherit`,
          position: `absolute`,
          inset: 0,
          overflow: _e ? `visible` : `hidden`,
          borderRadius: ce,
          userSelect: `none`,
          perspective: z ? `none` : pe,
        },
        children: /*#__PURE__*/ h(w.ul, {
          ref: U,
          ...Ht,
          style: {
            ...ze,
            gap: m,
            placeItems: f,
            x: V ? (z ? Tt : Dt) : 0,
            y: V ? 0 : z ? Tt : Dt,
            flexDirection: V ? `row` : `column`,
            transformStyle: fe !== 0 && !z ? `preserve-3d` : void 0,
            cursor: d ? (ct ? `grabbing` : `grab`) : `auto`,
            userSelect: `none`,
            ...le,
          },
          children: dt,
        }),
      }),
      /*#__PURE__*/ g(`fieldset`, {
        style: { ...Ge },
        "aria-label": `Slideshow pagination controls`,
        className: `framer--slideshow-controls`,
        children: [
          /*#__PURE__*/ g(w.div, {
            style: {
              position: `absolute`,
              display: `flex`,
              flexDirection: V ? `row` : `column`,
              justifyContent: P ? `space-between` : `center`,
              gap: P ? `unset` : De,
              opacity: Ee ? Re : 1,
              alignItems: `center`,
              inset: I,
              top: P ? I : Ut ? Oe : `unset`,
              left: P ? I : Gt ? je : qt ? 0 : `unset`,
              right: P ? I : Kt ? ke : qt ? 0 : `unset`,
              bottom: P ? I : Wt ? Ae : `unset`,
            },
            animate: Ee && { opacity: at ? 1 : Re },
            transition: k,
            children: [
              /*#__PURE__*/ h(w.button, {
                type: `button`,
                style: {
                  ...We,
                  backgroundColor: Ce,
                  width: N,
                  height: N,
                  borderRadius: xe,
                  rotate: V ? 0 : 90,
                  display: M ? `block` : `none`,
                  pointerEvents: `auto`,
                },
                onClick: () => $(-1, !0),
                "aria-label": `Previous`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: /*#__PURE__*/ h(`img`, {
                  decoding: `async`,
                  width: N,
                  height: N,
                  src: we || `../../assets/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg`,
                  alt: `Back Arrow`,
                }),
              }),
              /*#__PURE__*/ h(w.button, {
                type: `button`,
                style: {
                  ...We,
                  backgroundColor: Ce,
                  width: N,
                  height: N,
                  borderRadius: xe,
                  rotate: V ? 0 : 90,
                  display: M ? `block` : `none`,
                  pointerEvents: `auto`,
                },
                onClick: () => $(1, !0),
                "aria-label": `Next`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: /*#__PURE__*/ h(`img`, {
                  decoding: `async`,
                  width: N,
                  height: N,
                  src: Te || `../../assets/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg`,
                  alt: `Next Arrow`,
                }),
              }),
            ],
          }),
          Bt.length > 1
            ? /*#__PURE__*/ h(`div`, {
                style: {
                  ...Ye,
                  left: V ? `50%` : Fe,
                  top: V ? `unset` : `50%`,
                  transform: V ? `translateX(-50%)` : `translateY(-50%)`,
                  flexDirection: V ? `row` : `column`,
                  bottom: V ? Fe : `unset`,
                  borderRadius: Ie,
                  backgroundColor: $e,
                  userSelect: `none`,
                  ...Vt,
                },
                children: Bt,
              })
            : null,
        ],
      }),
    ],
  });
}
var Re, ze, Be, Ve, He, Ue, We, Ge, Ke, qe, Je, Ye, Xe;
function Ze() {
  return (Ze = e(() => {
    (o(),
      d(),
      Ce(),
      k(),
      T(),
      l(),
      Pe(),
      (Re = 0.001),
      (L.defaultProps = {
        direction: `left`,
        dragControl: !1,
        startFrom: 0,
        itemAmount: 1,
        infinity: !0,
        gap: 10,
        padding: 10,
        autoPlayControl: !0,
        effectsOptions: {
          effectsOpacity: 1,
          effectsScale: 1,
          effectsRotate: 0,
          effectsPerspective: 1200,
          effectsHover: !0,
          playOffscreen: !1,
        },
        transitionControl: { type: `spring`, stiffness: 200, damping: 40 },
        fadeOptions: { fadeContent: !1, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        arrowOptions: {
          showMouseControls: !0,
          arrowShouldFadeIn: !1,
          arrowShouldSpace: !0,
          arrowFill: `rgba(0,0,0,0.2)`,
          arrowSize: 40,
        },
        progressOptions: { showProgressDots: !0 },
      }),
      xe(L, {
        slots: { type: j.Array, title: `Content`, control: { type: j.ComponentInstance } },
        direction: {
          type: j.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          displaySegmentedControl: !0,
          defaultValue: L.defaultProps.direction,
        },
        autoPlayControl: { type: j.Boolean, title: `Auto Play`, defaultValue: !0 },
        intervalControl: {
          type: j.Number,
          title: `Interval`,
          defaultValue: 1.5,
          min: 0.5,
          max: 10,
          step: 0.1,
          displayStepper: !0,
          unit: `s`,
          hidden: (e) => !e.autoPlayControl,
        },
        dragControl: { type: j.Boolean, title: `Draggable`, defaultValue: !1 },
        startFrom: {
          type: j.Number,
          title: `Current`,
          min: 0,
          max: 10,
          displayStepper: !0,
          defaultValue: L.defaultProps.startFrom,
        },
        effectsOptions: {
          type: j.Object,
          title: `Effects`,
          controls: {
            effectsOpacity: {
              type: j.Number,
              title: `Opacity`,
              defaultValue: L.defaultProps.effectsOptions.effectsOpacity,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsScale: {
              type: j.Number,
              title: `Scale`,
              defaultValue: L.defaultProps.effectsOptions.effectsScale,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsPerspective: {
              type: j.Number,
              title: `Perspective`,
              defaultValue: L.defaultProps.effectsOptions.effectsPerspective,
              min: 200,
              max: 2e3,
              step: 1,
            },
            effectsRotate: {
              type: j.Number,
              title: `Rotate`,
              defaultValue: L.defaultProps.effectsOptions.effectsRotate,
              min: -180,
              max: 180,
              step: 1,
            },
            effectsHover: {
              type: j.Boolean,
              title: `On Hover`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: L.defaultProps.effectsOptions.effectsHover,
            },
            playOffscreen: {
              type: j.Boolean,
              title: `Offscreen`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: L.defaultProps.effectsOptions.playOffscreen,
            },
          },
        },
        alignment: {
          type: j.Enum,
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
        itemAmount: {
          type: j.Number,
          title: `Items`,
          min: 1,
          max: 10,
          displayStepper: !0,
          defaultValue: L.defaultProps.itemAmount,
        },
        gap: { type: j.Number, title: `Gap`, min: 0 },
        padding: {
          title: `Padding`,
          type: j.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          defaultValue: 0,
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        borderRadius: {
          type: j.Number,
          title: `Radius`,
          min: 0,
          max: 500,
          displayStepper: !0,
          defaultValue: 0,
        },
        transitionControl: {
          type: j.Transition,
          defaultValue: L.defaultProps.transitionControl,
          title: `Transition`,
        },
        fadeOptions: {
          type: j.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: j.Boolean, title: `Fade`, defaultValue: !1 },
            overflow: {
              type: j.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: j.Number,
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
              type: j.Number,
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
              type: j.Number,
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
        arrowOptions: {
          type: j.Object,
          title: `Arrows`,
          controls: {
            showMouseControls: {
              type: j.Boolean,
              title: `Show`,
              defaultValue: L.defaultProps.arrowOptions.showMouseControls,
            },
            arrowFill: {
              type: j.Color,
              title: `Fill`,
              hidden: (e) => !e.showMouseControls,
              defaultValue: L.defaultProps.arrowOptions.arrowFill,
            },
            leftArrow: { type: j.Image, title: `Previous`, hidden: (e) => !e.showMouseControls },
            rightArrow: { type: j.Image, title: `Next`, hidden: (e) => !e.showMouseControls },
            arrowSize: {
              type: j.Number,
              title: `Size`,
              min: 0,
              max: 200,
              displayStepper: !0,
              defaultValue: L.defaultProps.arrowOptions.arrowSize,
              hidden: (e) => !e.showMouseControls,
            },
            arrowRadius: {
              type: j.Number,
              title: `Radius`,
              min: 0,
              max: 500,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldFadeIn: {
              type: j.Boolean,
              title: `Fade In`,
              defaultValue: !1,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldSpace: {
              type: j.Boolean,
              title: `Distance`,
              enabledTitle: `Space`,
              disabledTitle: `Group`,
              defaultValue: L.defaultProps.arrowOptions.arrowShouldSpace,
              hidden: (e) => !e.showMouseControls,
            },
            arrowPosition: {
              type: j.Enum,
              title: `Position`,
              options: [
                `auto`,
                `top-left`,
                `top-mid`,
                `top-right`,
                `bottom-left`,
                `bottom-mid`,
                `bottom-right`,
              ],
              optionTitles: [
                `Center`,
                `Top Left`,
                `Top Middle`,
                `Top Right`,
                `Bottom Left`,
                `Bottom Middle`,
                `Bottom Right`,
              ],
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
            arrowPadding: {
              type: j.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 20,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || !e.arrowShouldSpace,
            },
            arrowPaddingTop: {
              type: j.Number,
              title: `Top`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `bottom-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-right`,
            },
            arrowPaddingBottom: {
              type: j.Number,
              title: `Bottom`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-right`,
            },
            arrowPaddingRight: {
              type: j.Number,
              title: `Right`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowPaddingLeft: {
              type: j.Number,
              title: `Left`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-right` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-right` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowGap: {
              type: j.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
          },
        },
        progressOptions: {
          type: j.Object,
          title: `Dots`,
          controls: {
            showProgressDots: { type: j.Boolean, title: `Show`, defaultValue: !1 },
            dotSize: {
              type: j.Number,
              title: `Size`,
              min: 1,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsInset: {
              type: j.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsGap: {
              type: j.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsPadding: {
              type: j.Number,
              title: `Padding`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsFill: {
              type: j.Color,
              title: `Fill`,
              defaultValue: `#fff`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBackground: {
              type: j.Color,
              title: `Backdrop`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsRadius: {
              type: j.Number,
              title: `Radius`,
              min: 0,
              max: 200,
              defaultValue: 50,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsOpacity: {
              type: j.Number,
              title: `Opacity`,
              min: 0,
              max: 1,
              defaultValue: 0.5,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsActiveOpacity: {
              type: j.Number,
              title: `Current`,
              min: 0,
              max: 1,
              defaultValue: 1,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBlur: {
              type: j.Number,
              title: `Blur`,
              min: 0,
              max: 50,
              defaultValue: 0,
              step: 1,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
          },
        },
      }),
      (ze = {
        display: `flex`,
        flexDirection: `row`,
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
      (Be = {
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
      (Ve = { fontSize: 32, marginBottom: 10 }),
      (He = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (Ue = { margin: 0, opacity: 0.7, maxWidth: 180, lineHeight: 1.5, textAlign: `center` }),
      (We = {
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
      (Ge = {
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        position: `absolute`,
        pointerEvents: `none`,
        userSelect: `none`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: 0,
        padding: 0,
        margin: 0,
      }),
      (Ke = (e, t, n) => Math.min(Math.max(e, t), n)),
      (qe = /*#__PURE__*/ t(
        /*#__PURE__*/ m(function (e, t) {
          let {
              slideKey: n,
              width: r,
              height: i,
              child: o,
              size: s,
              gap: c,
              wrappedValue: l,
              numChildren: d,
              childCounter: f,
              isCanvas: p,
              effects: m,
              effectsOpacity: g,
              effectsScale: _,
              effectsRotate: v,
              isHorizontal: b,
              isLast: x,
              index: S,
            } = e,
            w = y(),
            te = (s?.item + c) * f,
            T = [-s?.item, 0, s?.parent - s?.item + c, s?.parent].map((e) => e - te),
            ne = !p && C(l, T, [-v, 0, 0, v]),
            re = !p && C(l, T, [v, 0, 0, -v]),
            ae = !p && C(l, T, [g, 1, 1, g]),
            oe = !p && C(l, T, [_, 1, 1, _]),
            E = !p && C(l, T, [1, 1, 0, 0]),
            D = !p && C(l, (e) => e >= T[1] && e <= T[2]);
          u(() => {
            if (D)
              return D.on(`change`, (e) => {
                (t?.current ?? w.current)?.setAttribute(`aria-hidden`, !e);
              });
          }, []);
          let O = p
              ? `visible`
              : C(
                  l,
                  [T[0] - s.viewportLength, ie(T[1], T[2], 0.5), T[3] + s.viewportLength],
                  [`hidden`, `visible`, `hidden`]
                ),
            k = n + `child`;
          return /*#__PURE__*/ h(ee, {
            inherit: `id`,
            id: k,
            children: /*#__PURE__*/ h(`li`, {
              style: { display: `contents` },
              "aria-hidden": S !== 0,
              children: /*#__PURE__*/ a(o, {
                ref: t ?? w,
                key: k,
                style: {
                  ...o.props?.style,
                  flexShrink: 0,
                  userSelect: `none`,
                  width: r,
                  height: i,
                  opacity: ae,
                  scale: oe,
                  originX: b ? E : 0.5,
                  originY: b ? 0.5 : E,
                  rotateY: b ? ne : 0,
                  rotateX: b ? 0 : re,
                  visibility: O,
                },
                layoutId: o.props.layoutId ? o.props.layoutId + `-original-` + S : void 0,
              }),
            }),
          });
        })
      )),
      (Je = /*#__PURE__*/ t(function ({
        selectedOpacity: e,
        opacity: t,
        total: n,
        index: r,
        wrappedIndex: i,
        wrappedIndexInverted: a,
        dotStyle: o,
        buttonStyle: s,
        gap: c,
        padding: l,
        isHorizontal: u,
        isInverted: d,
        ...f
      }) {
        let p = i === r;
        d && (p = Math.abs(a) === r);
        let m = c / 2,
          g = !u && r > 0 ? m : l,
          _ = !u && r !== n - 1 ? m : l,
          v = u && r !== n - 1 ? m : l,
          y = u && r > 0 ? m : l;
        return /*#__PURE__*/ h(`button`, {
          "aria-label": `Scroll to page ${r + 1}`,
          type: `button`,
          ...f,
          style: { ...s, padding: `${g}px ${v}px ${_}px ${y}px` },
          children: /*#__PURE__*/ h(w.div, {
            style: { ...o },
            initial: !1,
            animate: { opacity: p ? e : t },
            transition: { duration: 0.3 },
          }),
        });
      })),
      (Ye = {
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        position: `absolute`,
        pointerEvents: `auto`,
      }),
      (Xe = {
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
var Qe, $e, R, et, tt, nt, z, B, rt, V, H, U, W, G, K, it, at, ot, st, q, ct;
function lt() {
  return (lt = e(() => {
    (d(),
      k(),
      T(),
      l(),
      Ze(),
      ke(),
      F(),
      we(),
      Fe(),
      (Qe = ue(w.header)),
      ($e = ue(w.nav)),
      (R = ue(w.div)),
      (et = fe(L)),
      (tt = {
        e5ZHvgusn: `(min-width: 1200px)`,
        NSWcGmKgH: `(max-width: 809.98px)`,
        VM4yFsShN: `(min-width: 810px) and (max-width: 1199.98px)`,
      }),
      (nt = []),
      (z = `framer-Pxjwq`),
      (B = {
        e5ZHvgusn: `framer-v-1jyocny`,
        NSWcGmKgH: `framer-v-43vfdn`,
        VM4yFsShN: `framer-v-g9cx3u`,
      }),
      (rt = (e, t, n) => (e && t ? `position` : n)),
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
      (K = { Desktop: `e5ZHvgusn`, Phone: `NSWcGmKgH`, Tablet: `VM4yFsShN` }),
      (it = ({ value: e }) =>
        de()
          ? null
          : /*#__PURE__*/ h(`style`, {
              dangerouslySetInnerHTML: { __html: e },
              "data-framer-html-style": ``,
            })),
      (at = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: K[r.variant] ?? r.variant ?? `e5ZHvgusn`,
      })),
      (ot = /*#__PURE__*/ m(function (e, t) {
        let n = y(null),
          r = t ?? n;
        v();
        let { activeLocale: a, contentLocale: o, setLocale: c } = se(),
          l = oe(),
          { style: u, className: d, layoutId: p, variant: m, ..._ } = at(e),
          b = s(() => Ie({}, o), [o]);
        _e(b);
        let [x, S] = ve(m, tt, !1),
          C = E(z, Oe, Ee, Me),
          te = f(ge)?.isLayoutTemplate,
          T = !!f(ne)?.transition?.layout,
          re = rt(te, T);
        return (
          he({}),
          /*#__PURE__*/ h(ge.Provider, {
            value: {
              activeVariantId: x,
              humanReadableVariantMap: K,
              primaryVariantId: `e5ZHvgusn`,
              variantClassNames: B,
            },
            children: /*#__PURE__*/ g(ee, {
              id: p ?? `KAtQViVAr`,
              children: [
                /*#__PURE__*/ h(it, {
                  value: `html body { background: var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, rgb(244, 200, 119)); }`,
                }),
                /*#__PURE__*/ g(w.div, {
                  ..._,
                  className: E(C, `framer-1jyocny`, d),
                  ref: r,
                  style: { ...u },
                  children: [
                    /*#__PURE__*/ g(w.aside, {
                      className: `framer-1yxbpmk`,
                      "data-framer-name": `Sidebar`,
                      layout: re,
                      children: [
                        /*#__PURE__*/ g(Qe, {
                          animate: V,
                          className: `framer-r4o3qm`,
                          "data-framer-appear-id": `r4o3qm`,
                          "data-framer-name": `Header`,
                          initial: H,
                          optimized: !0,
                          style: { transformPerspective: 1200 },
                          children: [
                            /*#__PURE__*/ h(A, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: O((l?.y || 0) + 30),
                                pixelHeight: 1937,
                                pixelWidth: 3124,
                                sizes: `290px`,
                                src: `../../assets/images/7hEvtPRyxq9owTABZijhNlajW1w-be0fce.png`,
                                srcSet: `../../assets/images/7hEvtPRyxq9owTABZijhNlajW1w.png 512w,../../assets/images/7hEvtPRyxq9owTABZijhNlajW1w-899281.png 1024w,../../assets/images/7hEvtPRyxq9owTABZijhNlajW1w-60c188.png 2048w,../../assets/images/7hEvtPRyxq9owTABZijhNlajW1w-be0fce.png 3124w`,
                              },
                              className: `framer-1sg0re0`,
                            }),
                            /*#__PURE__*/ h(N, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ h(i, {
                                children: /*#__PURE__*/ h(`p`, {
                                  className: `framer-styles-preset-t0brxi`,
                                  "data-styles-preset": `TPvCPpffK`,
                                  children: `L.A.loid is a festival concert experience based in LA County that showcases producers who use vocal synth programs. Performances are all weekend long and feature the unbelievable hologram shows the genre is known for.`,
                                }),
                              }),
                              className: `framer-18dfyhc`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        /*#__PURE__*/ g($e, {
                          animate: U,
                          className: `framer-ssch0v`,
                          "data-framer-appear-id": `ssch0v`,
                          "data-framer-name": `Links`,
                          initial: H,
                          optimized: !0,
                          style: { transformPerspective: 1200 },
                          children: [
                            /*#__PURE__*/ h(N, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ h(i, {
                                children: /*#__PURE__*/ h(`p`, {
                                  className: `framer-styles-preset-17qvjw9`,
                                  "data-styles-preset": `W6ZCCcKuw`,
                                  children: /*#__PURE__*/ h(M, {
                                    href: { webPageId: `augiA20Il` },
                                    motionChild: !0,
                                    nodeId: `ltQq6yDO4`,
                                    openInNewTab: !1,
                                    relValues: [],
                                    scopeId: `KAtQViVAr`,
                                    smoothScroll: !1,
                                    children: /*#__PURE__*/ h(w.a, {
                                      className: `framer-styles-preset-1y1gbtr`,
                                      "data-styles-preset": `iBI2c5jgM`,
                                      children: `Home @_"`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-1x4wg1x`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ h(`div`, {
                              className: `framer-1evzv08`,
                              "data-framer-name": `Line`,
                            }),
                            /*#__PURE__*/ h(N, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ h(i, {
                                children: /*#__PURE__*/ h(`p`, {
                                  className: `framer-styles-preset-17qvjw9`,
                                  "data-styles-preset": `W6ZCCcKuw`,
                                  children: /*#__PURE__*/ h(M, {
                                    href: `mailto:stelzerash@gmail.com`,
                                    motionChild: !0,
                                    nodeId: `HHU3zkvpL`,
                                    openInNewTab: !0,
                                    relValues: [],
                                    scopeId: `KAtQViVAr`,
                                    smoothScroll: !1,
                                    children: /*#__PURE__*/ h(w.a, {
                                      className: `framer-styles-preset-1y1gbtr`,
                                      "data-styles-preset": `iBI2c5jgM`,
                                      children: `Contact`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-1hhm9bm`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            /*#__PURE__*/ h(`div`, {
                              className: `framer-g6n5ox`,
                              "data-framer-name": `Line`,
                            }),
                            /*#__PURE__*/ h(N, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ h(i, {
                                children: /*#__PURE__*/ h(`p`, {
                                  className: `framer-styles-preset-17qvjw9`,
                                  "data-styles-preset": `W6ZCCcKuw`,
                                  children: /*#__PURE__*/ h(M, {
                                    href: `https://www.linkedin.com/in/ashleystelz/`,
                                    motionChild: !0,
                                    nodeId: `LjxbHgwbZ`,
                                    openInNewTab: !0,
                                    relValues: [],
                                    scopeId: `KAtQViVAr`,
                                    smoothScroll: !1,
                                    children: /*#__PURE__*/ h(w.a, {
                                      className: `framer-styles-preset-1y1gbtr`,
                                      "data-styles-preset": `iBI2c5jgM`,
                                      children: `LinkedIn`,
                                    }),
                                  }),
                                }),
                              }),
                              className: `framer-98jjot`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    /*#__PURE__*/ h(pe, {
                      breakpoint: x,
                      overrides: {
                        NSWcGmKgH: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: O((l?.y || 0) + 560.6),
                            pixelHeight: 1883,
                            pixelWidth: 1440,
                            sizes: l?.width || `100vw`,
                            src: `../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ-b89d69.jpg`,
                            srcSet: `../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ-59b40d.jpg 783w,../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ-b89d69.jpg 1440w`,
                          },
                        },
                      },
                      children: /*#__PURE__*/ g(A, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: O(l?.y || 0),
                          pixelHeight: 1883,
                          pixelWidth: 1440,
                          sizes: `max(${l?.width || `100vw`} - 350px, 1px)`,
                          src: `../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ-b89d69.jpg`,
                          srcSet: `../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ-59b40d.jpg 783w,../../assets/images/f4W7N2fqNJchFyMtYQdzdAOquQ-b89d69.jpg 1440w`,
                        },
                        className: `framer-1mummc5`,
                        layout: re,
                        children: [
                          /*#__PURE__*/ g(R, {
                            animate: W,
                            className: `framer-ab1h38`,
                            "data-framer-appear-id": `ab1h38`,
                            "data-framer-name": `hero`,
                            initial: H,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ h(pe, {
                                breakpoint: x,
                                overrides: {
                                  NSWcGmKgH: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: O((l?.y || 0) + 590.5),
                                      pixelHeight: 1440,
                                      pixelWidth: 2560,
                                      positionX: `center`,
                                      positionY: `top`,
                                      sizes: `calc(max((${l?.width || `100vw`} - 85px) / 2, 50px) * 2 + 25px)`,
                                      src: `../../assets/images/BsTlQH7RLldpCY2YFKgrwGkQJgQ-b5573b.jpg`,
                                      srcSet: `../../assets/images/BsTlQH7RLldpCY2YFKgrwGkQJgQ-734f61.jpg 512w,../../assets/images/BsTlQH7RLldpCY2YFKgrwGkQJgQ-e05b7e.jpg 1024w,../../assets/images/BsTlQH7RLldpCY2YFKgrwGkQJgQ.jpg 2048w,../../assets/images/BsTlQH7RLldpCY2YFKgrwGkQJgQ-b5573b.jpg 2560w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ h(A, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: O((l?.y || 0) + 29.9),
                                    pixelHeight: 1440,
                                    pixelWidth: 2560,
                                    positionX: `center`,
                                    positionY: `top`,
                                    sizes: `calc(max((max(${l?.width || `100vw`} - 350px, 1px) - 85px) / 2, 50px) * 2 + 25px)`,
                                    src: `../../assets/images/BsTlQH7RLldpCY2YFKgrwGkQJgQ-b5573b.jpg`,
                                    srcSet: `../../assets/images/BsTlQH7RLldpCY2YFKgrwGkQJgQ-734f61.jpg 512w,../../assets/images/BsTlQH7RLldpCY2YFKgrwGkQJgQ-e05b7e.jpg 1024w,../../assets/images/BsTlQH7RLldpCY2YFKgrwGkQJgQ.jpg 2048w,../../assets/images/BsTlQH7RLldpCY2YFKgrwGkQJgQ-b5573b.jpg 2560w`,
                                  },
                                  className: `framer-1e1tzyy`,
                                }),
                              }),
                              /*#__PURE__*/ h(`div`, {
                                className: `framer-72t1pp`,
                                children: /*#__PURE__*/ h(N, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ h(i, {
                                    children: /*#__PURE__*/ h(`p`, {
                                      className: `framer-styles-preset-17qvjw9`,
                                      "data-styles-preset": `W6ZCCcKuw`,
                                      children: `Risograph posters to be mass produced for urban advertising `,
                                    }),
                                  }),
                                  className: `framer-g3blcp`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ g(R, {
                            animate: W,
                            className: `framer-k6p1kz`,
                            "data-framer-appear-id": `k6p1kz`,
                            "data-framer-name": `img1`,
                            initial: H,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ h(pe, {
                                breakpoint: x,
                                overrides: {
                                  NSWcGmKgH: {
                                    background: {
                                      alt: ``,
                                      fit: `fit`,
                                      loading: O((l?.y || 0) + 1150.8),
                                      pixelHeight: 1957,
                                      pixelWidth: 822,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `calc(max((${l?.width || `100vw`} - 85px) / 2, 50px) * 2 + 25px)`,
                                      src: `../../assets/images/aD38WkswkZdf0H1YKPT9c6sT7Fs.png`,
                                      srcSet: `../../assets/images/aD38WkswkZdf0H1YKPT9c6sT7Fs.png 822w`,
                                    },
                                  },
                                  VM4yFsShN: {
                                    background: {
                                      alt: ``,
                                      fit: `fit`,
                                      loading: O((l?.y || 0) + 590.2),
                                      pixelHeight: 1957,
                                      pixelWidth: 822,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `calc(max((max(${l?.width || `100vw`} - 350px, 1px) - 85px) / 2, 50px) * 2 + 25px)`,
                                      src: `../../assets/images/aD38WkswkZdf0H1YKPT9c6sT7Fs.png`,
                                      srcSet: `../../assets/images/aD38WkswkZdf0H1YKPT9c6sT7Fs.png 822w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ h(A, {
                                  background: {
                                    alt: ``,
                                    fit: `fit`,
                                    loading: O((l?.y || 0) + 590.2),
                                    pixelHeight: 1957,
                                    pixelWidth: 822,
                                    positionX: `center`,
                                    positionY: `center`,
                                    sizes: `max((max(${l?.width || `100vw`} - 350px, 1px) - 85px) / 2, 50px)`,
                                    src: `../../assets/images/aD38WkswkZdf0H1YKPT9c6sT7Fs.png`,
                                    srcSet: `../../assets/images/aD38WkswkZdf0H1YKPT9c6sT7Fs.png 822w`,
                                  },
                                  className: `framer-1y6t4ot`,
                                }),
                              }),
                              /*#__PURE__*/ h(`div`, {
                                className: `framer-bb3706`,
                                children: /*#__PURE__*/ h(N, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ h(i, {
                                    children: /*#__PURE__*/ h(`p`, {
                                      className: `framer-styles-preset-17qvjw9`,
                                      "data-styles-preset": `W6ZCCcKuw`,
                                      children: `Labeled wristbands`,
                                    }),
                                  }),
                                  className: `framer-3nb9sc`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ g(R, {
                            animate: W,
                            className: `framer-14n3ya2`,
                            "data-framer-appear-id": `14n3ya2`,
                            "data-framer-name": `img2`,
                            initial: H,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ h(pe, {
                                breakpoint: x,
                                overrides: {
                                  NSWcGmKgH: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: O((l?.y || 0) + 1711),
                                      pixelHeight: 1253,
                                      pixelWidth: 1440,
                                      positionX: `51.4%`,
                                      positionY: `28.7%`,
                                      sizes: `calc(max((${l?.width || `100vw`} - 85px) / 2, 50px) * 2 + 25px)`,
                                      src: `../../assets/images/ej0Pw0uM0gjeJ7PB5zOD4BBd58M-e7f42b.jpg`,
                                      srcSet: `../../assets/images/ej0Pw0uM0gjeJ7PB5zOD4BBd58M.jpg 512w,../../assets/images/ej0Pw0uM0gjeJ7PB5zOD4BBd58M-832bbc.jpg 1024w,../../assets/images/ej0Pw0uM0gjeJ7PB5zOD4BBd58M-e7f42b.jpg 1440w`,
                                    },
                                  },
                                  VM4yFsShN: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: O((l?.y || 0) + 1150.4),
                                      pixelHeight: 1253,
                                      pixelWidth: 1440,
                                      positionX: `51.4%`,
                                      positionY: `28.7%`,
                                      sizes: `calc(max((max(${l?.width || `100vw`} - 350px, 1px) - 85px) / 2, 50px) * 2 + 25px)`,
                                      src: `../../assets/images/ej0Pw0uM0gjeJ7PB5zOD4BBd58M-e7f42b.jpg`,
                                      srcSet: `../../assets/images/ej0Pw0uM0gjeJ7PB5zOD4BBd58M.jpg 512w,../../assets/images/ej0Pw0uM0gjeJ7PB5zOD4BBd58M-832bbc.jpg 1024w,../../assets/images/ej0Pw0uM0gjeJ7PB5zOD4BBd58M-e7f42b.jpg 1440w`,
                                    },
                                  },
                                },
                                children: /*#__PURE__*/ h(A, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: O((l?.y || 0) + 590.2),
                                    pixelHeight: 1253,
                                    pixelWidth: 1440,
                                    positionX: `51.4%`,
                                    positionY: `28.7%`,
                                    sizes: `max((max(${l?.width || `100vw`} - 350px, 1px) - 85px) / 2, 50px)`,
                                    src: `../../assets/images/ej0Pw0uM0gjeJ7PB5zOD4BBd58M-e7f42b.jpg`,
                                    srcSet: `../../assets/images/ej0Pw0uM0gjeJ7PB5zOD4BBd58M.jpg 512w,../../assets/images/ej0Pw0uM0gjeJ7PB5zOD4BBd58M-832bbc.jpg 1024w,../../assets/images/ej0Pw0uM0gjeJ7PB5zOD4BBd58M-e7f42b.jpg 1440w`,
                                  },
                                  className: `framer-p2qruc`,
                                }),
                              }),
                              /*#__PURE__*/ h(`div`, {
                                className: `framer-15okanp`,
                                children: /*#__PURE__*/ h(N, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ h(i, {
                                    children: /*#__PURE__*/ h(`p`, {
                                      className: `framer-styles-preset-17qvjw9`,
                                      "data-styles-preset": `W6ZCCcKuw`,
                                      children: `Concert T-Shirt`,
                                    }),
                                  }),
                                  className: `framer-1syqmg2`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          /*#__PURE__*/ g(R, {
                            animate: G,
                            className: `framer-4nxx7o`,
                            "data-framer-appear-id": `4nxx7o`,
                            "data-framer-name": `img3`,
                            initial: H,
                            optimized: !0,
                            style: { transformPerspective: 1200 },
                            children: [
                              /*#__PURE__*/ h(ye, {
                                children: /*#__PURE__*/ h(me, {
                                  className: `framer-1eenqwh-container`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  nodeId: `bUPKMBpfD`,
                                  scopeId: `KAtQViVAr`,
                                  children: /*#__PURE__*/ h(L, {
                                    alignment: `center`,
                                    arrowOptions: {
                                      arrowFill: `rgba(0, 0, 0, 0.2)`,
                                      arrowGap: 10,
                                      arrowPadding: 20,
                                      arrowPaddingBottom: 0,
                                      arrowPaddingLeft: 0,
                                      arrowPaddingRight: 0,
                                      arrowPaddingTop: 0,
                                      arrowPosition: `auto`,
                                      arrowRadius: 40,
                                      arrowShouldFadeIn: !1,
                                      arrowShouldSpace: !0,
                                      arrowSize: 40,
                                      showMouseControls: !0,
                                    },
                                    autoPlayControl: !0,
                                    borderRadius: 0,
                                    direction: `right`,
                                    dragControl: !1,
                                    effectsOptions: {
                                      effectsHover: !0,
                                      effectsOpacity: 1,
                                      effectsPerspective: 1200,
                                      effectsRotate: 0,
                                      effectsScale: 1,
                                      playOffscreen: !1,
                                    },
                                    fadeOptions: {
                                      fadeAlpha: 0,
                                      fadeContent: !1,
                                      fadeInset: 0,
                                      fadeWidth: 25,
                                      overflow: !1,
                                    },
                                    gap: 10,
                                    height: `100%`,
                                    id: `bUPKMBpfD`,
                                    intervalControl: 3,
                                    itemAmount: 1,
                                    layoutId: `bUPKMBpfD`,
                                    padding: 0,
                                    paddingBottom: 0,
                                    paddingLeft: 0,
                                    paddingPerSide: !1,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    progressOptions: {
                                      dotsActiveOpacity: 1,
                                      dotsBackground: `rgba(0, 0, 0, 0.2)`,
                                      dotsBlur: 0,
                                      dotsFill: `rgb(255, 255, 255)`,
                                      dotsGap: 10,
                                      dotsInset: 10,
                                      dotSize: 10,
                                      dotsOpacity: 0.5,
                                      dotsPadding: 10,
                                      dotsRadius: 50,
                                      showProgressDots: !0,
                                    },
                                    slots: [
                                      /*#__PURE__*/ h(A, {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          intrinsicHeight: 641,
                                          intrinsicWidth: 1140,
                                          pixelHeight: 641,
                                          pixelWidth: 1140,
                                          positionX: `center`,
                                          positionY: `center`,
                                          sizes: `1140px`,
                                          src: `../../assets/images/KLilvibZ9hoSlM1cuDJvaFjmZs.png`,
                                          srcSet: `../../assets/images/KLilvibZ9hoSlM1cuDJvaFjmZs-e9696d.png 512w,../../assets/images/KLilvibZ9hoSlM1cuDJvaFjmZs-fa0958.png 1024w,../../assets/images/KLilvibZ9hoSlM1cuDJvaFjmZs.png 1140w`,
                                        },
                                        className: `framer-48cjon`,
                                        "data-framer-name": `Web2-05`,
                                      }),
                                      /*#__PURE__*/ h(A, {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          intrinsicHeight: 810,
                                          intrinsicWidth: 1440,
                                          pixelHeight: 810,
                                          pixelWidth: 1440,
                                          positionX: `center`,
                                          positionY: `center`,
                                          sizes: `1133px`,
                                          src: `../../assets/images/MpwBrK3IxpxxeU2HS7QnJPtRkTo.jpg`,
                                          srcSet: `../../assets/images/MpwBrK3IxpxxeU2HS7QnJPtRkTo-05553d.jpg 512w,../../assets/images/MpwBrK3IxpxxeU2HS7QnJPtRkTo-9219f6.jpg 1024w,../../assets/images/MpwBrK3IxpxxeU2HS7QnJPtRkTo.jpg 1440w`,
                                        },
                                        className: `framer-1l1vh19`,
                                        "data-framer-name": `Web2-03 copy`,
                                      }),
                                      /*#__PURE__*/ h(A, {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          intrinsicHeight: 810,
                                          intrinsicWidth: 1440,
                                          pixelHeight: 810,
                                          pixelWidth: 1440,
                                          positionX: `center`,
                                          positionY: `center`,
                                          sizes: `1133px`,
                                          src: `../../assets/images/cONl0vuO51DUTeHa7yJr1fAkQY.jpg`,
                                          srcSet: `../../assets/images/cONl0vuO51DUTeHa7yJr1fAkQY-d54d18.jpg 512w,../../assets/images/cONl0vuO51DUTeHa7yJr1fAkQY-67c7ab.jpg 1024w,../../assets/images/cONl0vuO51DUTeHa7yJr1fAkQY.jpg 1440w`,
                                        },
                                        className: `framer-12a3abu`,
                                        "data-framer-name": `Web3-04 copy`,
                                      }),
                                    ],
                                    startFrom: 3,
                                    style: { height: `100%`, width: `100%` },
                                    transitionControl: {
                                      damping: 40,
                                      delay: 0,
                                      mass: 1,
                                      stiffness: 200,
                                      type: `spring`,
                                    },
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              /*#__PURE__*/ h(`div`, {
                                className: `framer-zrg332`,
                                children: /*#__PURE__*/ h(N, {
                                  __fromCanvasComponent: !0,
                                  children: /*#__PURE__*/ h(i, {
                                    children: /*#__PURE__*/ h(`p`, {
                                      className: `framer-styles-preset-17qvjw9`,
                                      "data-styles-preset": `W6ZCCcKuw`,
                                      children: `Website`,
                                    }),
                                  }),
                                  className: `framer-j7jirl`,
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
                /*#__PURE__*/ h(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      })),
      (st = [
        `.framer-Pxjwq.framer-276d6y, .framer-Pxjwq .framer-276d6y { display: block; }`,
        `.framer-Pxjwq.framer-1jyocny { align-content: flex-start; align-items: flex-start; background-color: var(--token-b1efb7a6-2281-4b42-8c39-12787c8dbc20, #f4c877); display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 50px 0px; position: relative; width: 1200px; }`,
        `.framer-Pxjwq .framer-1yxbpmk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100vh; justify-content: space-between; left: 0px; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 350px; z-index: 1; }`,
        `.framer-Pxjwq .framer-r4o3qm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px; position: sticky; top: 0px; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-Pxjwq .framer-1sg0re0 { flex: none; height: 178px; overflow: hidden; position: relative; width: 290px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-Pxjwq .framer-18dfyhc { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 100%; overflow: hidden; position: relative; white-space: pre-wrap; width: 261px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Pxjwq .framer-ssch0v { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 30px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-Pxjwq .framer-1x4wg1x, .framer-Pxjwq .framer-1hhm9bm, .framer-Pxjwq .framer-98jjot { --framer-paragraph-spacing: 0px; flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }`,
        `.framer-Pxjwq .framer-1evzv08, .framer-Pxjwq .framer-g6n5ox { background-color: var(--token-fb51c9c1-305d-433e-a3ef-b9662dd89546, #4b1d48); flex: none; height: 3px; opacity: 0.56; overflow: visible; position: relative; width: 100%; }`,
        `.framer-Pxjwq .framer-1mummc5 { display: grid; flex: 1 0 0px; gap: 25px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: hidden; padding: 30px; position: relative; width: 1px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-Pxjwq .framer-ab1h38 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; grid-column: span 2; height: 535px; justify-content: center; justify-self: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Pxjwq .framer-1e1tzyy { flex: none; height: 93%; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-Pxjwq .framer-72t1pp, .framer-Pxjwq .framer-bb3706, .framer-Pxjwq .framer-15okanp, .framer-Pxjwq .framer-zrg332 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Pxjwq .framer-g3blcp, .framer-Pxjwq .framer-3nb9sc, .framer-Pxjwq .framer-1syqmg2, .framer-Pxjwq .framer-j7jirl { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Pxjwq .framer-k6p1kz, .framer-Pxjwq .framer-14n3ya2 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Pxjwq .framer-1y6t4ot, .framer-Pxjwq .framer-p2qruc { flex: none; height: 500px; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-Pxjwq .framer-4nxx7o { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 57px; grid-column: span 2; height: 520px; justify-content: center; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Pxjwq .framer-1eenqwh-container { flex: none; height: 84%; position: relative; width: 100%; }`,
        `.framer-Pxjwq .framer-48cjon { aspect-ratio: 1.7784711388455539 / 1; height: auto; overflow: visible; position: relative; width: 1140px; }`,
        `.framer-Pxjwq .framer-1l1vh19, .framer-Pxjwq .framer-12a3abu { aspect-ratio: 1.7777777777777777 / 1; height: auto; overflow: visible; position: relative; width: 1133px; }`,
        ...I,
        ...Te,
        ...Ae,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-Pxjwq.framer-1jyocny { width: 810px; } .framer-Pxjwq .framer-k6p1kz, .framer-Pxjwq .framer-14n3ya2 { grid-column: span 2; }}`,
        `@media (max-width: 809.98px) { .framer-Pxjwq.framer-1jyocny { flex-direction: column; width: 390px; } .framer-Pxjwq .framer-1yxbpmk { gap: 0px; height: min-content; justify-content: center; left: unset; position: relative; top: unset; width: 100%; } .framer-Pxjwq .framer-r4o3qm { position: relative; top: unset; } .framer-Pxjwq .framer-1mummc5 { flex: none; width: 100%; } .framer-Pxjwq .framer-k6p1kz, .framer-Pxjwq .framer-14n3ya2 { grid-column: span 2; }}`,
      ]),
      (q = le(ot, st, `framer-Pxjwq`)),
      (q.displayName = `Page 4`),
      (q.defaultProps = { height: 1766, width: 1200 }),
      ce(
        q,
        [
          {
            explicitInter: !0,
            fonts: [
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
          ...et,
          ...D(De),
          ...D(P),
          ...D(je),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (ct = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerKAtQViVAr`,
            slots: [],
            annotations: {
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"VM4yFsShN":{"layout":["fixed","auto"]},"NSWcGmKgH":{"layout":["fixed","auto"]}}}`,
              framerIntrinsicWidth: `1200`,
              framerAutoSizeImages: `true`,
              framerImmutableVariables: `true`,
              framerLayoutTemplateFlowEffect: `true`,
              framerColorSyntax: `true`,
              framerDisplayContentsDiv: `false`,
              framerIntrinsicHeight: `1766`,
              framerAcceptsLayoutTemplate: `false`,
              framerResponsiveScreen: `true`,
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerScrollSections: `false`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }))();
}
lt();
export { ct as __FramerMetadata__, q as default, nt as queryParamNames };
//# sourceMappingURL=yK38h1UEp8T6zfG33N0HhHffB4Si1mA0E4RXeKanqfE.LNP8lu-K.mjs.map
