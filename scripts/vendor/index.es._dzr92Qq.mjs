import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { L as t, z as n } from "./react.Dq5lJgOf.mjs";
function r(e, t) {
  return u(e) ? e[d(0, e.length, t)] : e;
}
function i(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = m(0, t, r);
    e.push(f(n, 1, i));
  }
}
function a(e) {
  let t = [0];
  return (i(t, e - 1), t);
}
function o(e, t = a(e.length), n = p) {
  let o = e.length,
    s = o - t.length;
  return (
    s > 0 && i(t, s),
    (i) => {
      let a = 0;
      for (; a < o - 2 && !(i < t[a + 1]); a++);
      let s = c(0, 1, m(t[a], t[a + 1], i));
      return ((s = r(n, a)(s)), f(e[a], e[a + 1], s));
    }
  );
}
function s(e, t) {
  return t ? (1e3 / t) * e : 0;
}
var c, l, u, d, f, p, m, h;
function g() {
  return (g = e(() => {
    ((c = (e, t, n) => Math.min(Math.max(n, e), t)),
      (l = (e) => typeof e == `number`),
      (u = (e) => Array.isArray(e) && !l(e[0])),
      (d = (e, t, n) => {
        let r = t - e;
        return ((((n - e) % r) + r) % r) + e;
      }),
      (f = (e, t, n) => -n * e + n * t + e),
      (p = (e) => e),
      (m = (e, t, n) => (t - e === 0 ? 1 : (n - e) / (t - e))),
      (h = (e) => typeof e == `string`));
  }))();
}
function _() {
  return (_ = e(() => {
    g();
  }))();
}
function v() {
  return (v = e(() => {
    _();
  }))();
}
function ee(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
function te() {
  return (te = e(() => {}))();
}
var y;
function b() {
  return (b = e(() => {
    ((y = {}),
      Object.defineProperty(y, "__esModule", { value: !0 }),
      (y.warning = function () {}),
      (y.invariant = function () {}),
      y.__esModule,
      y.warning,
      y.invariant);
  }))();
}
function x() {
  return (x = e(() => {
    g();
  }))();
}
function S(e, t) {
  return (
    typeof e == `string`
      ? t
        ? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function ne(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = S(e),
    o = /* @__PURE__ */ new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n) {
            if (e.isIntersecting) {
              let n = t(e);
              typeof n == `function` ? o.set(e.target, n) : s.unobserve(e.target);
            } else n && (n(e), o.delete(e.target));
          }
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : L[i] }
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function re(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function ie({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = R.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return re(e, n);
        },
      });
    });
}
function ae(e) {
  e.forEach(ie);
}
function oe() {
  typeof ResizeObserver < `u` && (z = new ResizeObserver(ae));
}
function se(e, t) {
  z || oe();
  let n = S(e);
  return (
    n.forEach((e) => {
      let n = R.get(e);
      (n || ((n = /* @__PURE__ */ new Set()), R.set(e, n)), n.add(t), z?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = R.get(e);
        (n?.delete(t), (n != null && n.size) || z == null || z.unobserve(e));
      });
    }
  );
}
function ce() {
  ((V = () => {
    let e = { width: n.innerWidth, height: n.innerHeight },
      t = { target: n, size: e, contentSize: e };
    B.forEach((e) => e(t));
  }),
    n.addEventListener(`resize`, V));
}
function le(e) {
  return (
    B.add(e),
    V || ce(),
    () => {
      (B.delete(e), !B.size && V && (V = void 0));
    }
  );
}
function ue(e, t) {
  return typeof e == `function` ? le(e) : se(e, t);
}
function de(e, t, n, r) {
  let i = n[t],
    { length: a, position: o } = G[t],
    c = i.current,
    l = n.time;
  ((i.current = e[`scroll` + o]),
    (i.scrollLength = e[`scroll` + a] - e[`client` + a]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = m(0, i.scrollLength, i.current)));
  let u = r - l;
  i.velocity = u > H ? 0 : s(i.current - c, u);
}
function fe(e, t, n) {
  (de(e, `x`, t, n), de(e, `y`, t, n), (t.time = n));
}
function pe(e, t) {
  let n = { x: 0, y: 0 },
    r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      ((n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent));
    else if (r instanceof SVGGraphicsElement && `getBBox` in r) {
      let { top: e, left: t } = r.getBBox();
      for (n.x += t, n.y += e; r && r.tagName !== `svg`; ) r = r.parentNode;
    }
  return n;
}
function C(e, t, n = 0) {
  let r = 0;
  if ((q[e] !== void 0 && (e = q[e]), h(e))) {
    let t = parseFloat(e);
    e.endsWith(`px`)
      ? (r = t)
      : e.endsWith(`%`)
        ? (e = t / 100)
        : e.endsWith(`vw`)
          ? (r = (t / 100) * document.documentElement.clientWidth)
          : e.endsWith(`vh`)
            ? (r = (t / 100) * document.documentElement.clientHeight)
            : (e = t);
  }
  return (l(e) && (r = t * e), n + r);
}
function me(e, t, n, r) {
  let i = Array.isArray(e) ? e : be,
    a = 0,
    o = 0;
  return (
    l(e)
      ? (i = [e, e])
      : h(e) && ((e = e.trim()), (i = e.includes(` `) ? e.split(` `) : [e, q[e] ? e : `0`])),
    (a = C(i[0], n, r)),
    (o = C(i[1], t)),
    a - o
  );
}
function he(e, t, n) {
  let { offset: r = K.All } = n,
    { target: i = e, axis: s = `y` } = n,
    c = s === `y` ? `height` : `width`,
    l = i === e ? J : pe(i, e),
    u =
      i === e
        ? { width: e.scrollWidth, height: e.scrollHeight }
        : { width: i.clientWidth, height: i.clientHeight },
    d = { width: e.clientWidth, height: e.clientHeight };
  t[s].offset.length = 0;
  let f = !t[s].interpolate,
    p = r.length;
  for (let e = 0; e < p; e++) {
    let n = me(r[e], d[c], u[c], l[s]);
    (f || n === t[s].interpolatorOffsets[e] || (f = !0), (t[s].offset[e] = n));
  }
  (f && ((t[s].interpolate = o(a(p), t[s].offset)), (t[s].interpolatorOffsets = [...t[s].offset])),
    (t[s].progress = t[s].interpolate(t[s].current)));
}
function ge(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r != e; )
      ((n.x.targetOffset += r.offsetLeft), (n.y.targetOffset += r.offsetTop), (r = r.offsetParent));
  }
  ((n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight));
}
function _e(e, t, n, r = {}) {
  let i = r.axis || `y`;
  return {
    measure: () => ge(e, r.target, n),
    update: (t) => {
      (fe(e, n, t), (r.offset || r.target) && he(e, n, r));
    },
    notify: typeof t == `function` ? () => t(n) : ve(t, n[i]),
  };
}
function ve(e, t) {
  return (
    e.pause(),
    e.forEachNative((e, { easing: t }) => {
      var n, r;
      if (e.updateDuration) (t || (e.easing = p), e.updateDuration(1));
      else {
        let i = { duration: 1e3 };
        (t || (i.easing = `linear`), (r = (n = e.effect)?.updateTiming) == null || r.call(n, i));
      }
    }),
    () => {
      e.currentTime = t.progress;
    }
  );
}
function ye(e, t = {}) {
  var { container: r = document.documentElement } = t,
    i = ee(t, [`container`]);
  let a = Z.get(r);
  a || ((a = /* @__PURE__ */ new Set()), Z.set(r, a));
  let o = _e(r, e, W(), i);
  if ((a.add(o), !Y.has(r))) {
    let e = () => {
      let e = performance.now();
      for (let e of a) e.measure();
      for (let t of a) t.update(e);
      for (let e of a) e.notify();
    };
    Y.set(r, e);
    let t = Q(r);
    (n.addEventListener(`resize`, e, { passive: !0 }),
      r !== document.documentElement && X.set(r, ue(r, e)),
      t.addEventListener(`scroll`, e, { passive: !0 }));
  }
  let s = Y.get(r),
    c = requestAnimationFrame(s);
  return () => {
    var t;
    (typeof e != `function` && e.stop(), cancelAnimationFrame(c));
    let i = Z.get(r);
    if (!i || (i.delete(o), i.size)) return;
    let a = Y.get(r);
    (Y.delete(r),
      a &&
        (Q(r).removeEventListener(`scroll`, a),
        (t = X.get(r)) == null || t(),
        n.removeEventListener(`resize`, a)));
  };
}
function w(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function T(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var E, D, O, k, A, j, M, N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, be, J, Y, X, Z, Q, xe, $, Se;
function Ce() {
  return (Ce = e(() => {
    (t(),
      g(),
      v(),
      te(),
      b(),
      x(),
      (E = [``, `X`, `Y`, `Z`]),
      (D = [`translate`, `scale`, `rotate`, `skew`]),
      (O = { syntax: `<angle>`, initialValue: `0deg`, toDefaultUnit: (e) => e + `deg` }),
      (k = {
        translate: {
          syntax: `<length-percentage>`,
          initialValue: `0px`,
          toDefaultUnit: (e) => e + `px`,
        },
        rotate: O,
        scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: p },
        skew: O,
      }),
      (A = /* @__PURE__ */ new Map()),
      (j = (e) => `--motion-${e}`),
      (M = [`x`, `y`, `z`]),
      D.forEach((e) => {
        E.forEach((t) => {
          (M.push(e + t), A.set(j(e + t), k[e]));
        });
      }),
      new Set(M),
      (N = (e) => document.createElement(`div`).animate(e, { duration: 0.001 })),
      (P = {
        cssRegisterProperty: () =>
          typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
        waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
        partialKeyframes: () => {
          try {
            N({ opacity: [1] });
          } catch {
            return !1;
          }
          return !0;
        },
        finished: () => !!N({ opacity: [0, 1] }).finished,
      }),
      (F = {}),
      (I = {}));
    for (let e in P) I[e] = () => (F[e] === void 0 && (F[e] = P[e]()), F[e]);
    ((L = { any: 0, all: 1 }),
      (R = /* @__PURE__ */ new WeakMap()),
      (B = /* @__PURE__ */ new Set()),
      (H = 50),
      (U = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0,
      })),
      (W = () => ({ time: 0, x: U(), y: U() })),
      (G = { x: { length: `Width`, position: `Left` }, y: { length: `Height`, position: `Top` } }),
      (K = {
        Enter: [
          [0, 1],
          [1, 1],
        ],
        Exit: [
          [0, 0],
          [1, 0],
        ],
        Any: [
          [1, 0],
          [0, 1],
        ],
        All: [
          [0, 0],
          [1, 1],
        ],
      }),
      (q = { start: 0, center: 0.5, end: 1 }),
      (be = [0, 0]),
      (J = { x: 0, y: 0 }),
      (Y = /* @__PURE__ */ new WeakMap()),
      (X = /* @__PURE__ */ new WeakMap()),
      (Z = /* @__PURE__ */ new WeakMap()),
      (Q = (e) => (e === document.documentElement ? n : e)),
      (xe = {
        isActive: (e) => !!e.inView,
        subscribe: (e, { enable: t, disable: n }, { inViewOptions: r = {} }) => {
          let { once: i } = r;
          return ne(
            e,
            (r) => {
              if ((t(), T(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), T(e, `viewleave`, t));
                };
            },
            ee(r, [`once`])
          );
        },
      }),
      ($ = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), w(e, t, r));
      }),
      (Se = {
        inView: xe,
        hover: {
          isActive: (e) => !!e.hover,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = $(e, `hoverstart`, t),
              i = $(e, `hoverend`, n);
            return (
              e.addEventListener(`pointerenter`, r),
              e.addEventListener(`pointerleave`, i),
              () => {
                (e.removeEventListener(`pointerenter`, r),
                  e.removeEventListener(`pointerleave`, i));
              }
            );
          },
        },
        press: {
          isActive: (e) => !!e.press,
          subscribe: (e, { enable: t, disable: r }) => {
            let i = (t) => {
                (r(), w(e, `pressend`, t), n.removeEventListener(`pointerup`, i));
              },
              a = (r) => {
                (t(), w(e, `pressstart`, r), n.addEventListener(`pointerup`, i));
              };
            return (
              e.addEventListener(`pointerdown`, a),
              () => {
                (e.removeEventListener(`pointerdown`, a), n.removeEventListener(`pointerup`, i));
              }
            );
          },
        },
      }),
      [...Object.keys(Se)]);
  }))();
}
export { ue as n, ye as r, Ce as t };
//# sourceMappingURL=index.es._dzr92Qq.mjs.map
