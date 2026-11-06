import { t as e } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { T as t, b as n, v as r } from "./react.Dq5lJgOf.mjs";
function i() {
  if (!a()) return;
  let [e, t] = r(!document.hidden);
  return (
    n(() => {
      let e = () => t(!document.hidden);
      return (
        document.addEventListener(`visibilitychange`, e, !1),
        () => {
          document.removeEventListener(`visibilitychange`, e);
        }
      );
    }, []),
    e
  );
}
var a;
function o() {
  return (o = e(() => {
    (t(), (a = () => typeof document == `object`));
  }))();
}
export { i as n, o as t };
//# sourceMappingURL=UsePageVisibility.iv4uwWms.mjs.map
