import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  C as t,
  D as n,
  F as r,
  L as i,
  P as a,
  R as o,
  T as s,
  _ as c,
  a as l,
  b as u,
  f as d,
  g as f,
  k as p,
  n as m,
  o as h,
  r as g,
  t as _,
  v,
  x as y,
  z as b,
} from "./react.Dq5lJgOf.mjs";
import {
  G as x,
  H as S,
  I as C,
  J as w,
  K as T,
  L as E,
  R as D,
  V as O,
  W as k,
  Y as A,
  Z as j,
  _t as ee,
  at as te,
  f as M,
  gt as N,
  i as P,
  l as F,
  p as I,
  s as L,
  tt as R,
  ut as z,
  z as B,
} from "./framer.d4MlGAvC.mjs";
function V({ routeId: e, pathVariables: t, localeId: n }) {
  return (
    (Q ??= T({
      routes: G,
      routeId: e,
      pathVariables: t,
      localeId: n,
      locales: K,
      collectionUtils: q,
    })),
    Q
  );
}
async function H({
  routeId: e,
  pathVariables: i,
  canonicalPathVariables: a,
  localeId: o,
  collectionItemId: s,
  contentLocaleId: c,
  shouldResolveInitialRouteContentState: f = !1,
}) {
  (A({
    checkServerSideRouter: !0,
    disableCustomCode: !1,
    disableHoverOnMobile: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    w(Y));
  let m = G[e].page.preload(),
    h = G[e];
  if (f && s === void 0 && h.collectionId) {
    let t = await V({ routeId: e, pathVariables: i, localeId: o });
    ((c ??= t.contentLocaleId), (a ??= t.canonicalPathVariables));
  }
  let g = d(I, {
      isWebsite: !0,
      environment: `site`,
      routeId: e,
      pathVariables: i,
      canonicalPathVariables: a,
      routes: G,
      collectionUtils: q,
      serverDatabaseClient: J,
      framerSiteId: Y,
      notFoundPage: B(() => import("./LOx3f7jw_wHGGbQejPhFueh9wb7S0MWv9-4FArpeZyA.7a-5IjrW.mjs")),
      isReducedMotion: void 0,
      localeId: o,
      locales: K,
      preserveQueryParams: !1,
      siteCanonicalURL: `https://lovely-priority-558032.framer.app`,
      EditorBar:
        b === void 0
          ? void 0
          : (() => {
              if (Z) console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
              else
                return B(async () => {
                  b.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: R, useLocaleInfo: te, useRouter: z },
                    react: {
                      createElement: d,
                      Fragment: r,
                      memo: t,
                      useCallback: p,
                      useEffect: u,
                      useRef: y,
                      useState: v,
                      useLayoutEffect: n,
                    },
                    "react-dom": { createPortal: l },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
            })(),
      adaptLayoutToTextDirection: !1,
      loadSnippetsModule: new F(
        () => import("./0iqH4CtHbtb_ciJZDQFidd3MwEr0ig46lu3zceMsJy8.U1APg39v.mjs")
      ),
      initialCollectionItemId: s,
      initialContentLocaleIdOverride: c,
    }),
    _ = d(L, { children: g }),
    x = d(M, { children: _, value: { routes: {} } });
  return (await m, x);
}
function U() {
  X && b.__framer_events.push(arguments);
}
async function W(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || b.__framer_hadFatalError) return;
    let r = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          r
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        r
      );
    U(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: r,
      stack: r ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let r, i, o, s, c, l, u;
    if (e)
      ((u = JSON.parse(t.dataset.framerHydrateV2)),
        (r = u.routeId),
        (i = u.localeId),
        (o = u.contentLocaleId),
        (s = u.pathVariables),
        (c = u.canonicalPathVariables),
        (l = u.breakpoints),
        (r = k(G, r)));
    else {
      k(G, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((r = t.get(`id`)), (i = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((s ??= {}), (s[e.slice(4)] = n));
      }
      if (!r || !i) {
        let e = C(G, decodeURIComponent(location.pathname), !0, K);
        ((r = e.routeId), (i = e.localeId), (s = e.pathVariables));
      }
    }
    let d = H({
      routeId: r,
      localeId: i,
      contentLocaleId: o,
      pathVariables: s,
      canonicalPathVariables: c,
      collectionItemId: e ? u?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    b !== void 0 &&
      (async () => {
        let e = G[r],
          t = K.find(({ id: e }) => (i ? e === i : e === "default")).code,
          n;
        n =
          u?.collectionItemId === void 0
            ? e?.collectionId
              ? await (
                  await V({ routeId: r, pathVariables: s, localeId: i })
                ).collectionItemId
              : null
            : u.collectionItemId;
        let a = Intl.DateTimeFormat().resolvedOptions(),
          o = a.timeZone,
          c = a.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          b.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: Y,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? r,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: b.location.href,
              hostname: b.location.hostname || null,
              pathname: b.location.pathname || null,
              hash: b.location.hash || null,
              search: b.location.search || null,
              timezone: o,
              locale: c,
            },
            `eager`,
          ]),
          await ee({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let f = await d;
    e
      ? (N(`framer-rewrite-breakpoints`, () => {
          (x(l), b.__framer_onRewriteBreakpoints?.(l));
        }),
        (Z ? (e) => e() : a)(() => {
          (S(), j(), _(t, f, { onRecoverableError: n }));
        }))
      : (await O(), g(t, { onRecoverableError: n }).render(f));
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var G, K, q, J, Y, X, Z, Q;
function $() {
  return ($ = e(() => {
    if (
      (i(),
      D(),
      s(),
      h(),
      m(),
      (G = {
        augiA20Il: {
          elements: {
            cd4ZEfD1w: `invisible-footer`,
            JH2w2jPyL: `hero-section`,
            M9UVpOaSs: `services-section`,
            MZ7LnZZon: `footer-section`,
            rxV0gPZfT: `about-section`,
            wmAymqz5D: `work-section`,
          },
          page: B(() => import("./hH-weX822B77xOPgBXP21TRi-rNypRPJ4bO7Oa0YBow.DpP-c2Oc.mjs")),
          path: `/`,
        },
        Jo35hgMHB: {
          elements: { KCQoApziF: `footer-section`, Tt_dtyS5H: `invisible-footer` },
          page: B(() => import("./lVMRbWuHRoEw_Oa3C_IiLIP4Ga8N0p6Q97s3oe6k2-M.9QpCfKZV.mjs")),
          path: `/licensing`,
        },
        f_gW3KuGX: {
          elements: { xb3d5Umth: `hero-section` },
          page: B(() => import("./LOx3f7jw_wHGGbQejPhFueh9wb7S0MWv9-4FArpeZyA.7a-5IjrW.mjs")),
          path: `/404`,
        },
        MIzyqw25e: {
          elements: { t0PFbtNka: `hero-section` },
          page: B(() => import("./OjT7lNqOKgO35RylbgLHuXPtGMwDmsg2cEpUPG5zfRg.C_DC5n3s.mjs")),
          path: `/construction`,
        },
        QyK1g_RQ2: {
          elements: {},
          page: B(() => import("./j9nSc9tggHmPw6SY6senH-TrHun6q_lM1smBdyhM7bw.BgCgQ3tQ.mjs")),
          path: `/klean`,
        },
        tjz6BMZL5: {
          elements: {},
          page: B(() => import("./Ew8RSXPEDIRSsq9AlfZcmTZLKQo-Q-6JZLwMjk8eOnM.qpb4tDjp.mjs")),
          path: `/typecon`,
        },
        zqauHOo8Z: {
          elements: {},
          page: B(() => import("./CHr2NxCAlzK3el9W4-KZVMJYF1x3wuinLeIIe0T35r4.h_osGQQU.mjs")),
          path: `/shyne`,
        },
        lLCR_W2fY: {
          elements: {},
          page: B(() => import("./KAaXFARcDW0jldly4fVi-9rU_cPflH9Q8gAitzU3snU.CdtsTkGD.mjs")),
          path: `/tagd`,
        },
        KAtQViVAr: {
          elements: {},
          page: B(() => import("./yK38h1UEp8T6zfG33N0HhHffB4Si1mA0E4RXeKanqfE.LNP8lu-K.mjs")),
          path: `/l.a.loid`,
        },
        c1ncc86xx: {
          elements: {},
          page: B(() => import("./2e-zo-R44ntCsAI3511IQhUTME5s2XIyRrsiMpozkhs.DCy9UOGF.mjs")),
          path: `/handyman`,
        },
        m7LV8a4BX: {
          elements: {},
          page: B(() => import("./PwLhva2AAMPEDCzXPid4ZxPazptfxYew5AWWHmPin2w.BxUMiAXt.mjs")),
          path: `/x-3`,
        },
        kyJxj_Z02: {
          elements: {},
          page: B(() => import("./NJ5GNK_9u4zjAv8BEGzqMErU5n-LKX5IKR-V3pXY9qM.D2Jzu53n.mjs")),
          path: `/book-covers`,
        },
        NVJGjNvHS: {
          elements: {},
          page: B(() => import("./bMLfmT3HSEQmqig7L2hkjq2URW48oGzGv38T_RbYQiY.Bh-4YLr9.mjs")),
          path: `/print`,
        },
        jvbgRsZai: {
          elements: {},
          page: B(() => import("./qGjNe6DJ_Xdeq5JY0cozpWy9PR_jmsE69SOvBxLL1qc.BdhbgK3a.mjs")),
          path: `/exoplanet`,
        },
        ohThSiAic: {
          collectionId: `gwRGFbq1J`,
          elements: { SNeapRqsu: `invisible-footer-01`, uq9B4ExM0: `footer-section` },
          page: B(() => import("./uCJvsvHFAc2hxAl8dTH242V4MXbwVDhsTrA_ojrbJAM.xZq1J-vR.mjs")),
          path: `/blog/:tJ_ak3APu`,
        },
      }),
      (K = [{ code: `en`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
      (q = {
        gwRGFbq1J: async () =>
          (await import("./UKqMpzE9omVcgGZbFSbhqf7SB4vX7xcINGYP-gsf_tE.ClBr_mBO.mjs"))?.utils,
      }),
      (J = void 0),
      (Y = `526f86a6a90782d8c5cf160550daecbd77380dba803079d171979751b291ff15`),
      (X = typeof document < `u`),
      (Z = X && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(o.userAgent)),
      X)
    ) {
      ((b.__framer_importFromPackage = (e, t) => () =>
        d(P, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
        (b.__framer_events = b.__framer_events || []),
        E());
      let e = document.getElementById(`main`);
      `framerHydrateV2` in e.dataset ? W(!0, e) : W(!1, e);
    }
  }))();
}
$();
export { H as getPageRoot };
//# sourceMappingURL=script_main.S5PVFFYi.mjs.map
