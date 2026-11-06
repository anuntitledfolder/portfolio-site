import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  C as t,
  D as n,
  E as r,
  I as i,
  L as a,
  M as o,
  P as s,
  T as c,
  b as l,
  c as u,
  k as ee,
  m as d,
  s as f,
  u as p,
  v as m,
  x as h,
  z as g,
} from "./react.Dq5lJgOf.mjs";
import {
  I as _,
  J as v,
  K as y,
  T as b,
  a as te,
  h as ne,
  r as x,
  v as S,
  w as re,
  z as ie,
} from "./motion.D3Y82hha.mjs";
import { R as C, r as w, vt as T, x as E } from "./framer.d4MlGAvC.mjs";
import { n as ae, t as D } from "./index.es._dzr92Qq.mjs";
import { n as O, t as oe } from "./UsePageVisibility.iv4uwWms.mjs";
function k(e, t) {
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
function A(e) {
  let {
      slots: t = [],
      startFrom: i,
      direction: a,
      effectsOptions: c,
      autoPlayControl: u,
      dragControl: d,
      alignment: te,
      gap: x,
      padding: re,
      paddingPerSide: C,
      paddingTop: w,
      paddingRight: E,
      paddingBottom: D,
      paddingLeft: oe,
      itemAmount: A,
      fadeOptions: ve,
      intervalControl: ye,
      transitionControl: be,
      arrowOptions: xe,
      borderRadius: Se,
      progressOptions: Ce,
      style: we,
    } = e,
    {
      effectsOpacity: Te,
      effectsScale: Ee,
      effectsRotate: De,
      effectsPerspective: Oe,
      effectsHover: ke,
      playOffscreen: Ae,
    } = c,
    { fadeContent: je, overflow: Me, fadeWidth: Ne, fadeInset: Pe, fadeAlpha: Fe } = ve,
    {
      showMouseControls: Ie,
      arrowSize: N,
      arrowRadius: Le,
      arrowFill: Re,
      leftArrow: ze,
      rightArrow: Be,
      arrowShouldSpace: P = !0,
      arrowShouldFadeIn: Ve = !1,
      arrowPosition: F,
      arrowPadding: I,
      arrowGap: He,
      arrowPaddingTop: Ue,
      arrowPaddingRight: We,
      arrowPaddingBottom: Ge,
      arrowPaddingLeft: Ke,
    } = xe,
    {
      showProgressDots: qe,
      dotSize: Je,
      dotsInset: Ye,
      dotsRadius: Xe,
      dotsPadding: Ze,
      dotsGap: Qe,
      dotsFill: $e,
      dotsBackground: et,
      dotsActiveOpacity: tt,
      dotsOpacity: nt,
      dotsBlur: rt,
    } = Ce,
    it = C ? `${w}px ${E}px ${D}px ${oe}px` : `${re}px`,
    L = T.current() === T.canvas,
    R = t.filter(Boolean),
    at = r.count(R),
    ot = at > 0,
    z = a === `left` || a === `right`,
    B = a === `right` || a === `bottom`;
  if (!ot)
    return /*#__PURE__*/ p(`section`, {
      style: ce,
      children: [
        /*#__PURE__*/ f(`div`, { style: le, children: `⭐️` }),
        /*#__PURE__*/ f(`p`, { style: ue, children: `Connect to Content` }),
        /*#__PURE__*/ f(`p`, {
          style: de,
          children: `Add layers or components to make infinite auto-playing slideshows.`,
        }),
      ],
    });
  let V = h(null),
    H = o(() => [{ current: null }, { current: null }], [R]),
    st = h(void 0),
    [U, ct] = m({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
      viewportLength: null,
    }),
    [lt, ut] = m(!1),
    [dt, ft] = m(u),
    [pt, mt] = m(!1),
    [W, ht] = m(!1),
    G = [],
    gt = 4;
  L && (gt = 1);
  let _t = ee(() => {
      if (!V.current) return;
      let e = H[0].current,
        t = H[1].current,
        n = z ? V.current.offsetWidth : V.current.offsetHeight,
        r = e ? (z ? e.offsetLeft : e.offsetTop) : 0,
        i = (t ? (z ? t.offsetLeft + t.offsetWidth : t.offsetTop + t.offsetHeight) : 0) - r + x,
        a = e ? (z ? e.offsetWidth : e.offsetHeight) : 0,
        o = e ? e.offsetWidth : 0,
        s = e ? e.offsetHeight : 0,
        c = z
          ? Math.max(
              document.documentElement.clientWidth || 0,
              g.innerWidth || 0,
              V.current.offsetWidth
            )
          : Math.max(
              document.documentElement.clientHeight || 0,
              g.innerHeight || 0,
              V.current.offsetHeight
            );
      ct({ parent: n, children: i, item: a, itemWidth: o, itemHeight: s, viewportLength: c });
    }, []),
    vt = ee(async () => {
      let e = new AbortController(),
        [t, n] = H;
      if (!L && (!t.current || !n.current))
        try {
          await Promise.all([k(t, e), at > 1 ? k(n, e) : !0]);
        } catch {
          e.abort();
        }
      S.read(_t, !1, !0);
    }, [_t]);
  n(() => {
    vt();
  }, [A]);
  let yt = h(!0);
  (l(
    () =>
      ae(V.current, ({ contentSize: e }) => {
        (!yt.current && (e.width || e.height) && (vt(), s(() => ht(!0))), (yt.current = !1));
      }),
    []
  ),
    l(() => {
      if (W) {
        let e = setTimeout(() => s(() => ht(!1)), 500);
        return () => clearTimeout(e);
      }
    }, [W]));
  let K = R?.length,
    q = L ? 0 : U?.children,
    bt = U?.item + x,
    xt = i * bt,
    [J, Y] = m(i + K),
    [St, Ct] = m(!1);
  L && J !== i && Y(i);
  let wt = h(null),
    Tt = _(wt),
    X = O() && Tt,
    Et = B ? 1 : -1,
    Z = ie(q),
    Dt = z ? -i * (U?.itemWidth + x) : -i * (U?.itemHeight + x),
    Ot = () => Et * J * bt,
    kt = L
      ? 0
      : y(Z, (e) => {
          let t = v(-q, -q * 2, e);
          return isNaN(t) ? 0 : t;
        }),
    At = v(0, K, J),
    jt = v(0, -K, J);
  n(() => {
    U?.children !== null && !yt.current && W && Z.set(Ot());
  }, [U, q, Et, xt, J, bt, W]);
  let Mt = () => {
      !L &&
        ot &&
        U.parent &&
        !St &&
        (Z.get() !== Ot() && ne(Z, Ot(), be),
        u &&
          dt &&
          (Ae || X) &&
          (st.current = setTimeout(() => {
            (s(() => Y((e) => e + 1)), Mt());
          }, ye * 1e3)));
    },
    Q = (e, t = !1) => {
      B
        ? t
          ? s(() => Y((t) => t - e))
          : Y((t) => t - e)
        : t
          ? s(() => Y((t) => t + e))
          : Y((t) => t + e);
    },
    Nt = (e) => {
      let t = v(0, K, J),
        n = v(0, -K, J),
        r = e - t,
        i = e - Math.abs(n);
      s(B ? () => Y((e) => e - i) : () => Y((e) => e + r));
    },
    Pt = () => {
      s(() => Ct(!0));
    },
    Ft = (e, { offset: t, velocity: n }) => {
      s(() => Ct(!1));
      let r = z ? t.x : t.y,
        i = z ? n.x : n.y,
        a = r < -U.item / 2,
        o = r > U.item / 2,
        c = Math.round(Math.abs(r) / U.item),
        l = c === 0 ? 1 : c;
      i > 200 ? Q(-l, !0) : i < -200 ? Q(l, !0) : (a && Q(c, !0), o && Q(-c, !0));
    };
  l(() => {
    if (!(!X || W || at <= 1)) return (Mt(), () => st.current && clearTimeout(st.current));
  }, [G, X, W]);
  let It = 0,
    Lt = `calc(${100 / A}% - ${x}px + ${x / A}px)`;
  for (let e = 0; e < gt; e++)
    G = G.concat(
      r.map(R, (t, n) => {
        let r;
        return (
          e === 0 && (n === 0 ? (r = H[0]) : n === R.length - 1 && (r = H[1])),
          /*#__PURE__*/ f(
            me,
            {
              ref: r,
              slideKey: e + n + `lg`,
              index: e,
              width: z && A > 1 ? Lt : `100%`,
              height: z ? `100%` : A > 1 ? Lt : `100%`,
              size: U,
              child: t,
              numChildren: R?.length,
              wrappedValue: kt,
              childCounter: It++,
              gap: x,
              isCanvas: L,
              isHorizontal: z,
              effectsOpacity: Te,
              effectsScale: Ee,
              effectsRotate: De,
              children: e + n,
            },
            e + n + `lg`
          )
        );
      })
    );
  let Rt = z ? `to right` : `to bottom`,
    zt = Ne / 2,
    Bt = 100 - Ne / 2,
    Vt = `linear-gradient(${Rt}, rgba(0, 0, 0, ${Fe}) ${pe(Pe, 0, zt)}%, rgba(0, 0, 0, 1) ${zt}%, rgba(0, 0, 0, 1) ${Bt}%, rgba(0, 0, 0, ${Fe}) ${100 - Pe}%)`,
    Ht = [],
    $ = {};
  if (qe) {
    for (let e = 0; e < R?.length; e++)
      Ht.push(
        /*#__PURE__*/ f(
          he,
          {
            dotStyle: { ..._e, width: Je, height: Je, backgroundColor: $e },
            buttonStyle: M,
            selectedOpacity: tt,
            opacity: nt,
            onClick: () => Nt(e),
            wrappedIndex: At,
            wrappedIndexInverted: jt,
            total: K,
            index: e,
            gap: Qe,
            padding: Ze,
            isHorizontal: z,
            isInverted: B,
          },
          e
        )
      );
    rt > 0 && ($.backdropFilter = $.WebkitBackdropFilter = `blur(${rt}px)`);
  }
  let Ut = d
      ? {
          drag: z ? `x` : `y`,
          onDragStart: Pt,
          onDragEnd: Ft,
          dragDirectionLock: !0,
          values: { x: Z, y: Z },
          dragMomentum: !1,
        }
      : {},
    Wt = F === `top-left` || F === `top-mid` || F === `top-right`,
    Gt = F === `bottom-left` || F === `bottom-mid` || F === `bottom-right`,
    Kt = F === `top-left` || F === `bottom-left`,
    qt = F === `top-right` || F === `bottom-right`,
    Jt = F === `top-mid` || F === `bottom-mid` || F === `auto`;
  return /*#__PURE__*/ p(`section`, {
    style: {
      ...se,
      padding: it,
      WebkitMaskImage: je ? Vt : void 0,
      maskImage: je ? Vt : void 0,
      opacity: U?.item === null ? j : 1,
      userSelect: `none`,
    },
    onMouseEnter: () => {
      (ut(!0), ke || ft(!1));
    },
    onMouseLeave: () => {
      (ut(!1), ke || ft(!0));
    },
    onMouseDown: (e) => {
      (e.preventDefault(), s(() => mt(!0)));
    },
    onMouseUp: () => s(() => mt(!1)),
    ref: wt,
    children: [
      /*#__PURE__*/ f(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          margin: 0,
          padding: `inherit`,
          position: `absolute`,
          inset: 0,
          overflow: Me ? `visible` : `hidden`,
          borderRadius: Se,
          userSelect: `none`,
          perspective: L ? `none` : Oe,
        },
        children: /*#__PURE__*/ f(b.ul, {
          ref: V,
          ...Ut,
          style: {
            ...se,
            gap: x,
            placeItems: te,
            x: z ? (L ? Dt : kt) : 0,
            y: z ? 0 : L ? Dt : kt,
            flexDirection: z ? `row` : `column`,
            transformStyle: De !== 0 && !L ? `preserve-3d` : void 0,
            cursor: d ? (pt ? `grabbing` : `grab`) : `auto`,
            userSelect: `none`,
            ...we,
          },
          children: G,
        }),
      }),
      /*#__PURE__*/ p(`fieldset`, {
        style: { ...fe },
        "aria-label": `Slideshow pagination controls`,
        className: `framer--slideshow-controls`,
        children: [
          /*#__PURE__*/ p(b.div, {
            style: {
              position: `absolute`,
              display: `flex`,
              flexDirection: z ? `row` : `column`,
              justifyContent: P ? `space-between` : `center`,
              gap: P ? `unset` : He,
              opacity: Ve ? j : 1,
              alignItems: `center`,
              inset: I,
              top: P ? I : Wt ? Ue : `unset`,
              left: P ? I : Kt ? Ke : Jt ? 0 : `unset`,
              right: P ? I : qt ? We : Jt ? 0 : `unset`,
              bottom: P ? I : Gt ? Ge : `unset`,
            },
            animate: Ve && { opacity: lt ? 1 : j },
            transition: be,
            children: [
              /*#__PURE__*/ f(b.button, {
                type: `button`,
                style: {
                  ...M,
                  backgroundColor: Re,
                  width: N,
                  height: N,
                  borderRadius: Le,
                  rotate: z ? 0 : 90,
                  display: Ie ? `block` : `none`,
                  pointerEvents: `auto`,
                },
                onClick: () => Q(-1, !0),
                "aria-label": `Previous`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: /*#__PURE__*/ f(`img`, {
                  decoding: `async`,
                  width: N,
                  height: N,
                  src: ze || `../../assets/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg`,
                  alt: `Back Arrow`,
                }),
              }),
              /*#__PURE__*/ f(b.button, {
                type: `button`,
                style: {
                  ...M,
                  backgroundColor: Re,
                  width: N,
                  height: N,
                  borderRadius: Le,
                  rotate: z ? 0 : 90,
                  display: Ie ? `block` : `none`,
                  pointerEvents: `auto`,
                },
                onClick: () => Q(1, !0),
                "aria-label": `Next`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: /*#__PURE__*/ f(`img`, {
                  decoding: `async`,
                  width: N,
                  height: N,
                  src: Be || `../../assets/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg`,
                  alt: `Next Arrow`,
                }),
              }),
            ],
          }),
          Ht.length > 1
            ? /*#__PURE__*/ f(`div`, {
                style: {
                  ...ge,
                  left: z ? `50%` : Ye,
                  top: z ? `unset` : `50%`,
                  transform: z ? `translateX(-50%)` : `translateY(-50%)`,
                  flexDirection: z ? `row` : `column`,
                  bottom: z ? Ye : `unset`,
                  borderRadius: Xe,
                  backgroundColor: et,
                  userSelect: `none`,
                  ...$,
                },
                children: Ht,
              })
            : null,
        ],
      }),
    ],
  });
}
var j, se, ce, le, ue, de, M, fe, pe, me, he, ge, _e;
function ve() {
  return (ve = e(() => {
    (a(),
      u(),
      D(),
      C(),
      x(),
      c(),
      oe(),
      (j = 0.001),
      (A.defaultProps = {
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
      E(A, {
        slots: { type: w.Array, title: `Content`, control: { type: w.ComponentInstance } },
        direction: {
          type: w.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          displaySegmentedControl: !0,
          defaultValue: A.defaultProps.direction,
        },
        autoPlayControl: { type: w.Boolean, title: `Auto Play`, defaultValue: !0 },
        intervalControl: {
          type: w.Number,
          title: `Interval`,
          defaultValue: 1.5,
          min: 0.5,
          max: 10,
          step: 0.1,
          displayStepper: !0,
          unit: `s`,
          hidden: (e) => !e.autoPlayControl,
        },
        dragControl: { type: w.Boolean, title: `Draggable`, defaultValue: !1 },
        startFrom: {
          type: w.Number,
          title: `Current`,
          min: 0,
          max: 10,
          displayStepper: !0,
          defaultValue: A.defaultProps.startFrom,
        },
        effectsOptions: {
          type: w.Object,
          title: `Effects`,
          controls: {
            effectsOpacity: {
              type: w.Number,
              title: `Opacity`,
              defaultValue: A.defaultProps.effectsOptions.effectsOpacity,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsScale: {
              type: w.Number,
              title: `Scale`,
              defaultValue: A.defaultProps.effectsOptions.effectsScale,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsPerspective: {
              type: w.Number,
              title: `Perspective`,
              defaultValue: A.defaultProps.effectsOptions.effectsPerspective,
              min: 200,
              max: 2e3,
              step: 1,
            },
            effectsRotate: {
              type: w.Number,
              title: `Rotate`,
              defaultValue: A.defaultProps.effectsOptions.effectsRotate,
              min: -180,
              max: 180,
              step: 1,
            },
            effectsHover: {
              type: w.Boolean,
              title: `On Hover`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: A.defaultProps.effectsOptions.effectsHover,
            },
            playOffscreen: {
              type: w.Boolean,
              title: `Offscreen`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: A.defaultProps.effectsOptions.playOffscreen,
            },
          },
        },
        alignment: {
          type: w.Enum,
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
          type: w.Number,
          title: `Items`,
          min: 1,
          max: 10,
          displayStepper: !0,
          defaultValue: A.defaultProps.itemAmount,
        },
        gap: { type: w.Number, title: `Gap`, min: 0 },
        padding: {
          title: `Padding`,
          type: w.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          defaultValue: 0,
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        borderRadius: {
          type: w.Number,
          title: `Radius`,
          min: 0,
          max: 500,
          displayStepper: !0,
          defaultValue: 0,
        },
        transitionControl: {
          type: w.Transition,
          defaultValue: A.defaultProps.transitionControl,
          title: `Transition`,
        },
        fadeOptions: {
          type: w.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: w.Boolean, title: `Fade`, defaultValue: !1 },
            overflow: {
              type: w.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: w.Number,
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
              type: w.Number,
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
              type: w.Number,
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
          type: w.Object,
          title: `Arrows`,
          controls: {
            showMouseControls: {
              type: w.Boolean,
              title: `Show`,
              defaultValue: A.defaultProps.arrowOptions.showMouseControls,
            },
            arrowFill: {
              type: w.Color,
              title: `Fill`,
              hidden: (e) => !e.showMouseControls,
              defaultValue: A.defaultProps.arrowOptions.arrowFill,
            },
            leftArrow: { type: w.Image, title: `Previous`, hidden: (e) => !e.showMouseControls },
            rightArrow: { type: w.Image, title: `Next`, hidden: (e) => !e.showMouseControls },
            arrowSize: {
              type: w.Number,
              title: `Size`,
              min: 0,
              max: 200,
              displayStepper: !0,
              defaultValue: A.defaultProps.arrowOptions.arrowSize,
              hidden: (e) => !e.showMouseControls,
            },
            arrowRadius: {
              type: w.Number,
              title: `Radius`,
              min: 0,
              max: 500,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldFadeIn: {
              type: w.Boolean,
              title: `Fade In`,
              defaultValue: !1,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldSpace: {
              type: w.Boolean,
              title: `Distance`,
              enabledTitle: `Space`,
              disabledTitle: `Group`,
              defaultValue: A.defaultProps.arrowOptions.arrowShouldSpace,
              hidden: (e) => !e.showMouseControls,
            },
            arrowPosition: {
              type: w.Enum,
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
              type: w.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 20,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || !e.arrowShouldSpace,
            },
            arrowPaddingTop: {
              type: w.Number,
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
              type: w.Number,
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
              type: w.Number,
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
              type: w.Number,
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
              type: w.Number,
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
          type: w.Object,
          title: `Dots`,
          controls: {
            showProgressDots: { type: w.Boolean, title: `Show`, defaultValue: !1 },
            dotSize: {
              type: w.Number,
              title: `Size`,
              min: 1,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsInset: {
              type: w.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsGap: {
              type: w.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsPadding: {
              type: w.Number,
              title: `Padding`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsFill: {
              type: w.Color,
              title: `Fill`,
              defaultValue: `#fff`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBackground: {
              type: w.Color,
              title: `Backdrop`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsRadius: {
              type: w.Number,
              title: `Radius`,
              min: 0,
              max: 200,
              defaultValue: 50,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsOpacity: {
              type: w.Number,
              title: `Opacity`,
              min: 0,
              max: 1,
              defaultValue: 0.5,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsActiveOpacity: {
              type: w.Number,
              title: `Current`,
              min: 0,
              max: 1,
              defaultValue: 1,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBlur: {
              type: w.Number,
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
      (se = {
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
      (de = { margin: 0, opacity: 0.7, maxWidth: 180, lineHeight: 1.5, textAlign: `center` }),
      (M = {
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
      (fe = {
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
      (pe = (e, t, n) => Math.min(Math.max(e, t), n)),
      (me = /*#__PURE__*/ t(
        /*#__PURE__*/ d(function (e, t) {
          let {
              slideKey: n,
              width: r,
              height: a,
              child: o,
              size: s,
              gap: c,
              wrappedValue: u,
              numChildren: ee,
              childCounter: d,
              isCanvas: p,
              effects: m,
              effectsOpacity: g,
              effectsScale: _,
              effectsRotate: v,
              isHorizontal: b,
              isLast: ne,
              index: x,
            } = e,
            S = h(),
            ie = (s?.item + c) * d,
            C = [-s?.item, 0, s?.parent - s?.item + c, s?.parent].map((e) => e - ie),
            w = !p && y(u, C, [-v, 0, 0, v]),
            T = !p && y(u, C, [v, 0, 0, -v]),
            E = !p && y(u, C, [g, 1, 1, g]),
            ae = !p && y(u, C, [_, 1, 1, _]),
            D = !p && y(u, C, [1, 1, 0, 0]),
            O = !p && y(u, (e) => e >= C[1] && e <= C[2]);
          l(() => {
            if (O)
              return O.on(`change`, (e) => {
                (t?.current ?? S.current)?.setAttribute(`aria-hidden`, !e);
              });
          }, []);
          let oe = p
              ? `visible`
              : y(
                  u,
                  [C[0] - s.viewportLength, re(C[1], C[2], 0.5), C[3] + s.viewportLength],
                  [`hidden`, `visible`, `hidden`]
                ),
            k = n + `child`;
          return /*#__PURE__*/ f(te, {
            inherit: `id`,
            id: k,
            children: /*#__PURE__*/ f(`li`, {
              style: { display: `contents` },
              "aria-hidden": x !== 0,
              children: /*#__PURE__*/ i(o, {
                ref: t ?? S,
                key: k,
                style: {
                  ...o.props?.style,
                  flexShrink: 0,
                  userSelect: `none`,
                  width: r,
                  height: a,
                  opacity: E,
                  scale: ae,
                  originX: b ? D : 0.5,
                  originY: b ? 0.5 : D,
                  rotateY: b ? w : 0,
                  rotateX: b ? 0 : T,
                  visibility: oe,
                },
                layoutId: o.props.layoutId ? o.props.layoutId + `-original-` + x : void 0,
              }),
            }),
          });
        })
      )),
      (he = /*#__PURE__*/ t(function ({
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
        isInverted: ee,
        ...d
      }) {
        let p = i === r;
        ee && (p = Math.abs(a) === r);
        let m = c / 2,
          h = !u && r > 0 ? m : l,
          g = !u && r !== n - 1 ? m : l,
          _ = u && r !== n - 1 ? m : l,
          v = u && r > 0 ? m : l;
        return /*#__PURE__*/ f(`button`, {
          "aria-label": `Scroll to page ${r + 1}`,
          type: `button`,
          ...d,
          style: { ...s, padding: `${h}px ${_}px ${g}px ${v}px` },
          children: /*#__PURE__*/ f(b.div, {
            style: { ...o },
            initial: !1,
            animate: { opacity: p ? e : t },
            transition: { duration: 0.3 },
          }),
        });
      })),
      (ge = {
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        position: `absolute`,
        pointerEvents: `auto`,
      }),
      (_e = {
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
export { ve as n, A as t };
//# sourceMappingURL=SlideShow.RRgiJ-25.mjs.map
