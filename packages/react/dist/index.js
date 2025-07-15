import ql, { forwardRef as $f, useRef as Pa, useImperativeHandle as kf, useEffect as Cf } from "react";
var zo = { exports: {} }, Yr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var La;
function _f() {
  if (La) return Yr;
  La = 1;
  var e = ql, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(a, l, c) {
    var d, p = {}, f = null, g = null;
    c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (d in l) r.call(l, d) && !i.hasOwnProperty(d) && (p[d] = l[d]);
    if (a && a.defaultProps) for (d in l = a.defaultProps, l) p[d] === void 0 && (p[d] = l[d]);
    return { $$typeof: t, type: a, key: f, ref: g, props: p, _owner: o.current };
  }
  return Yr.Fragment = n, Yr.jsx = s, Yr.jsxs = s, Yr;
}
var Fr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ta;
function Sf() {
  return Ta || (Ta = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ql, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), h = Symbol.iterator, v = "@@iterator";
    function C(V) {
      if (V === null || typeof V != "object")
        return null;
      var Q = h && V[h] || V[v];
      return typeof Q == "function" ? Q : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(V) {
      {
        for (var Q = arguments.length, ve = new Array(Q > 1 ? Q - 1 : 0), Pe = 1; Pe < Q; Pe++)
          ve[Pe - 1] = arguments[Pe];
        x("error", V, ve);
      }
    }
    function x(V, Q, ve) {
      {
        var Pe = w.ReactDebugCurrentFrame, Be = Pe.getStackAddendum();
        Be !== "" && (Q += "%s", ve = ve.concat([Be]));
        var Ze = ve.map(function(Ae) {
          return String(Ae);
        });
        Ze.unshift("Warning: " + Q), Function.prototype.apply.call(console[V], console, Ze);
      }
    }
    var $ = !1, k = !1, M = !1, z = !1, q = !1, U;
    U = Symbol.for("react.module.reference");
    function j(V) {
      return !!(typeof V == "string" || typeof V == "function" || V === r || V === i || q || V === o || V === c || V === d || z || V === g || $ || k || M || typeof V == "object" && V !== null && (V.$$typeof === f || V.$$typeof === p || V.$$typeof === s || V.$$typeof === a || V.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      V.$$typeof === U || V.getModuleId !== void 0));
    }
    function T(V, Q, ve) {
      var Pe = V.displayName;
      if (Pe)
        return Pe;
      var Be = Q.displayName || Q.name || "";
      return Be !== "" ? ve + "(" + Be + ")" : ve;
    }
    function _(V) {
      return V.displayName || "Context";
    }
    function D(V) {
      if (V == null)
        return null;
      if (typeof V.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof V == "function")
        return V.displayName || V.name || null;
      if (typeof V == "string")
        return V;
      switch (V) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof V == "object")
        switch (V.$$typeof) {
          case a:
            var Q = V;
            return _(Q) + ".Consumer";
          case s:
            var ve = V;
            return _(ve._context) + ".Provider";
          case l:
            return T(V, V.render, "ForwardRef");
          case p:
            var Pe = V.displayName || null;
            return Pe !== null ? Pe : D(V.type) || "Memo";
          case f: {
            var Be = V, Ze = Be._payload, Ae = Be._init;
            try {
              return D(Ae(Ze));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var b = Object.assign, P = 0, L, A, B, O, Z, F, X;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function W() {
      {
        if (P === 0) {
          L = console.log, A = console.info, B = console.warn, O = console.error, Z = console.group, F = console.groupCollapsed, X = console.groupEnd;
          var V = {
            configurable: !0,
            enumerable: !0,
            value: te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: V,
            log: V,
            warn: V,
            error: V,
            group: V,
            groupCollapsed: V,
            groupEnd: V
          });
        }
        P++;
      }
    }
    function pe() {
      {
        if (P--, P === 0) {
          var V = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: b({}, V, {
              value: L
            }),
            info: b({}, V, {
              value: A
            }),
            warn: b({}, V, {
              value: B
            }),
            error: b({}, V, {
              value: O
            }),
            group: b({}, V, {
              value: Z
            }),
            groupCollapsed: b({}, V, {
              value: F
            }),
            groupEnd: b({}, V, {
              value: X
            })
          });
        }
        P < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = w.ReactCurrentDispatcher, ge;
    function G(V, Q, ve) {
      {
        if (ge === void 0)
          try {
            throw Error();
          } catch (Be) {
            var Pe = Be.stack.trim().match(/\n( *(at )?)/);
            ge = Pe && Pe[1] || "";
          }
        return `
` + ge + V;
      }
    }
    var ke = !1, ae;
    {
      var se = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new se();
    }
    function ne(V, Q) {
      if (!V || ke)
        return "";
      {
        var ve = ae.get(V);
        if (ve !== void 0)
          return ve;
      }
      var Pe;
      ke = !0;
      var Be = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ze;
      Ze = oe.current, oe.current = null, W();
      try {
        if (Q) {
          var Ae = function() {
            throw Error();
          };
          if (Object.defineProperty(Ae.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ae, []);
            } catch (St) {
              Pe = St;
            }
            Reflect.construct(V, [], Ae);
          } else {
            try {
              Ae.call();
            } catch (St) {
              Pe = St;
            }
            V.call(Ae.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (St) {
            Pe = St;
          }
          V();
        }
      } catch (St) {
        if (St && Pe && typeof St.stack == "string") {
          for (var Oe = St.stack.split(`
`), bt = Pe.stack.split(`
`), tt = Oe.length - 1, it = bt.length - 1; tt >= 1 && it >= 0 && Oe[tt] !== bt[it]; )
            it--;
          for (; tt >= 1 && it >= 0; tt--, it--)
            if (Oe[tt] !== bt[it]) {
              if (tt !== 1 || it !== 1)
                do
                  if (tt--, it--, it < 0 || Oe[tt] !== bt[it]) {
                    var qt = `
` + Oe[tt].replace(" at new ", " at ");
                    return V.displayName && qt.includes("<anonymous>") && (qt = qt.replace("<anonymous>", V.displayName)), typeof V == "function" && ae.set(V, qt), qt;
                  }
                while (tt >= 1 && it >= 0);
              break;
            }
        }
      } finally {
        ke = !1, oe.current = Ze, pe(), Error.prepareStackTrace = Be;
      }
      var br = V ? V.displayName || V.name : "", nr = br ? G(br) : "";
      return typeof V == "function" && ae.set(V, nr), nr;
    }
    function me(V, Q, ve) {
      return ne(V, !1);
    }
    function ee(V) {
      var Q = V.prototype;
      return !!(Q && Q.isReactComponent);
    }
    function ye(V, Q, ve) {
      if (V == null)
        return "";
      if (typeof V == "function")
        return ne(V, ee(V));
      if (typeof V == "string")
        return G(V);
      switch (V) {
        case c:
          return G("Suspense");
        case d:
          return G("SuspenseList");
      }
      if (typeof V == "object")
        switch (V.$$typeof) {
          case l:
            return me(V.render);
          case p:
            return ye(V.type, Q, ve);
          case f: {
            var Pe = V, Be = Pe._payload, Ze = Pe._init;
            try {
              return ye(Ze(Be), Q, ve);
            } catch {
            }
          }
        }
      return "";
    }
    var re = Object.prototype.hasOwnProperty, Ee = {}, K = w.ReactDebugCurrentFrame;
    function Je(V) {
      if (V) {
        var Q = V._owner, ve = ye(V.type, V._source, Q ? Q.type : null);
        K.setExtraStackFrame(ve);
      } else
        K.setExtraStackFrame(null);
    }
    function de(V, Q, ve, Pe, Be) {
      {
        var Ze = Function.call.bind(re);
        for (var Ae in V)
          if (Ze(V, Ae)) {
            var Oe = void 0;
            try {
              if (typeof V[Ae] != "function") {
                var bt = Error((Pe || "React class") + ": " + ve + " type `" + Ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof V[Ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw bt.name = "Invariant Violation", bt;
              }
              Oe = V[Ae](Q, Ae, Pe, ve, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tt) {
              Oe = tt;
            }
            Oe && !(Oe instanceof Error) && (Je(Be), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Pe || "React class", ve, Ae, typeof Oe), Je(null)), Oe instanceof Error && !(Oe.message in Ee) && (Ee[Oe.message] = !0, Je(Be), E("Failed %s type: %s", ve, Oe.message), Je(null));
          }
      }
    }
    var Ce = Array.isArray;
    function _e(V) {
      return Ce(V);
    }
    function Re(V) {
      {
        var Q = typeof Symbol == "function" && Symbol.toStringTag, ve = Q && V[Symbol.toStringTag] || V.constructor.name || "Object";
        return ve;
      }
    }
    function gt(V) {
      try {
        return wt(V), !1;
      } catch {
        return !0;
      }
    }
    function wt(V) {
      return "" + V;
    }
    function Ve(V) {
      if (gt(V))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Re(V)), wt(V);
    }
    var Qe = w.ReactCurrentOwner, he = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, We, ct;
    function et(V) {
      if (re.call(V, "ref")) {
        var Q = Object.getOwnPropertyDescriptor(V, "ref").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return V.ref !== void 0;
    }
    function _t(V) {
      if (re.call(V, "key")) {
        var Q = Object.getOwnPropertyDescriptor(V, "key").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return V.key !== void 0;
    }
    function at(V, Q) {
      typeof V.ref == "string" && Qe.current;
    }
    function Bt(V, Q) {
      {
        var ve = function() {
          We || (We = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        ve.isReactWarning = !0, Object.defineProperty(V, "key", {
          get: ve,
          configurable: !0
        });
      }
    }
    function Kr(V, Q) {
      {
        var ve = function() {
          ct || (ct = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        ve.isReactWarning = !0, Object.defineProperty(V, "ref", {
          get: ve,
          configurable: !0
        });
      }
    }
    var yn = function(V, Q, ve, Pe, Be, Ze, Ae) {
      var Oe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: V,
        key: Q,
        ref: ve,
        props: Ae,
        // Record the component responsible for creating this element.
        _owner: Ze
      };
      return Oe._store = {}, Object.defineProperty(Oe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Oe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Pe
      }), Object.defineProperty(Oe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Be
      }), Object.freeze && (Object.freeze(Oe.props), Object.freeze(Oe)), Oe;
    };
    function wn(V, Q, ve, Pe, Be) {
      {
        var Ze, Ae = {}, Oe = null, bt = null;
        ve !== void 0 && (Ve(ve), Oe = "" + ve), _t(Q) && (Ve(Q.key), Oe = "" + Q.key), et(Q) && (bt = Q.ref, at(Q, Be));
        for (Ze in Q)
          re.call(Q, Ze) && !he.hasOwnProperty(Ze) && (Ae[Ze] = Q[Ze]);
        if (V && V.defaultProps) {
          var tt = V.defaultProps;
          for (Ze in tt)
            Ae[Ze] === void 0 && (Ae[Ze] = tt[Ze]);
        }
        if (Oe || bt) {
          var it = typeof V == "function" ? V.displayName || V.name || "Unknown" : V;
          Oe && Bt(Ae, it), bt && Kr(Ae, it);
        }
        return yn(V, Oe, bt, Be, Pe, Qe.current, Ae);
      }
    }
    var tr = w.ReactCurrentOwner, qi = w.ReactDebugCurrentFrame;
    function bn(V) {
      if (V) {
        var Q = V._owner, ve = ye(V.type, V._source, Q ? Q.type : null);
        qi.setExtraStackFrame(ve);
      } else
        qi.setExtraStackFrame(null);
    }
    var yr;
    yr = !1;
    function wr(V) {
      return typeof V == "object" && V !== null && V.$$typeof === t;
    }
    function jr() {
      {
        if (tr.current) {
          var V = D(tr.current.type);
          if (V)
            return `

Check the render method of \`` + V + "`.";
        }
        return "";
      }
    }
    function Zi(V) {
      return "";
    }
    var tn = {};
    function pf(V) {
      {
        var Q = jr();
        if (!Q) {
          var ve = typeof V == "string" ? V : V.displayName || V.name;
          ve && (Q = `

Check the top-level render call using <` + ve + ">.");
        }
        return Q;
      }
    }
    function Ca(V, Q) {
      {
        if (!V._store || V._store.validated || V.key != null)
          return;
        V._store.validated = !0;
        var ve = pf(Q);
        if (tn[ve])
          return;
        tn[ve] = !0;
        var Pe = "";
        V && V._owner && V._owner !== tr.current && (Pe = " It was passed a child from " + D(V._owner.type) + "."), bn(V), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ve, Pe), bn(null);
      }
    }
    function _a(V, Q) {
      {
        if (typeof V != "object")
          return;
        if (_e(V))
          for (var ve = 0; ve < V.length; ve++) {
            var Pe = V[ve];
            wr(Pe) && Ca(Pe, Q);
          }
        else if (wr(V))
          V._store && (V._store.validated = !0);
        else if (V) {
          var Be = C(V);
          if (typeof Be == "function" && Be !== V.entries)
            for (var Ze = Be.call(V), Ae; !(Ae = Ze.next()).done; )
              wr(Ae.value) && Ca(Ae.value, Q);
        }
      }
    }
    function gf(V) {
      {
        var Q = V.type;
        if (Q == null || typeof Q == "string")
          return;
        var ve;
        if (typeof Q == "function")
          ve = Q.propTypes;
        else if (typeof Q == "object" && (Q.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Q.$$typeof === p))
          ve = Q.propTypes;
        else
          return;
        if (ve) {
          var Pe = D(Q);
          de(ve, V.props, "prop", Pe, V);
        } else if (Q.PropTypes !== void 0 && !yr) {
          yr = !0;
          var Be = D(Q);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Be || "Unknown");
        }
        typeof Q.getDefaultProps == "function" && !Q.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hf(V) {
      {
        for (var Q = Object.keys(V.props), ve = 0; ve < Q.length; ve++) {
          var Pe = Q[ve];
          if (Pe !== "children" && Pe !== "key") {
            bn(V), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Pe), bn(null);
            break;
          }
        }
        V.ref !== null && (bn(V), E("Invalid attribute `ref` supplied to `React.Fragment`."), bn(null));
      }
    }
    var Sa = {};
    function Ea(V, Q, ve, Pe, Be, Ze) {
      {
        var Ae = j(V);
        if (!Ae) {
          var Oe = "";
          (V === void 0 || typeof V == "object" && V !== null && Object.keys(V).length === 0) && (Oe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var bt = Zi();
          bt ? Oe += bt : Oe += jr();
          var tt;
          V === null ? tt = "null" : _e(V) ? tt = "array" : V !== void 0 && V.$$typeof === t ? (tt = "<" + (D(V.type) || "Unknown") + " />", Oe = " Did you accidentally export a JSX literal instead of a component?") : tt = typeof V, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tt, Oe);
        }
        var it = wn(V, Q, ve, Be, Ze);
        if (it == null)
          return it;
        if (Ae) {
          var qt = Q.children;
          if (qt !== void 0)
            if (Pe)
              if (_e(qt)) {
                for (var br = 0; br < qt.length; br++)
                  _a(qt[br], V);
                Object.freeze && Object.freeze(qt);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _a(qt, V);
        }
        if (re.call(Q, "key")) {
          var nr = D(V), St = Object.keys(Q).filter(function(xf) {
            return xf !== "key";
          }), Ki = St.length > 0 ? "{key: someKey, " + St.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Sa[nr + Ki]) {
            var bf = St.length > 0 ? "{" + St.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ki, nr, bf, nr), Sa[nr + Ki] = !0;
          }
        }
        return V === r ? hf(it) : gf(it), it;
      }
    }
    function vf(V, Q, ve) {
      return Ea(V, Q, ve, !0);
    }
    function mf(V, Q, ve) {
      return Ea(V, Q, ve, !1);
    }
    var yf = mf, wf = vf;
    Fr.Fragment = r, Fr.jsx = yf, Fr.jsxs = wf;
  }()), Fr;
}
var Ma;
function Ef() {
  return Ma || (Ma = 1, process.env.NODE_ENV === "production" ? zo.exports = _f() : zo.exports = Sf()), zo.exports;
}
var Pf = Ef();
const Lf = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Lf);
const Ms = 1, Ns = 2, Zl = 4, Tf = 8, Mf = 16, Nf = 1, Of = 2, Kl = 4, Df = 8, Vf = 16, jl = 1, Af = 2, Os = "[", Ds = "[!", Vs = "]", or = {}, ht = Symbol(), Hf = "http://www.w3.org/1999/xhtml", zf = "http://www.w3.org/2000/svg", Rf = "@attach", If = !1;
var bo = Array.isArray, Bf = Array.prototype.indexOf, As = Array.from, ti = Object.keys, ni = Object.defineProperty, Sn = Object.getOwnPropertyDescriptor, Yl = Object.getOwnPropertyDescriptors, Fl = Object.prototype, qf = Array.prototype, ki = Object.getPrototypeOf, Na = Object.isExtensible;
function Wr(e) {
  return typeof e == "function";
}
const ft = () => {
};
function Zf(e) {
  return e();
}
function ri(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function xt(e, t, n = !1) {
  return e === void 0 ? n ? (
    /** @type {() => V} */
    t()
  ) : (
    /** @type {V} */
    t
  ) : e;
}
function xo(e, t) {
  if (Array.isArray(e))
    return e;
  if (t === void 0 || !(Symbol.iterator in e))
    return Array.from(e);
  const n = [];
  for (const r of e)
    if (n.push(r), n.length === t) break;
  return n;
}
const Ht = 2, Hs = 4, $o = 8, zs = 16, On = 32, hr = 64, Rs = 128, Vt = 256, oi = 512, zt = 1024, Ln = 2048, vr = 4096, En = 8192, Ci = 16384, Wl = 32768, Ir = 65536, Oa = 1 << 17, Kf = 1 << 18, Xl = 1 << 19, is = 1 << 20, Is = 1 << 21, an = Symbol("$state"), Bs = Symbol("legacy props"), jf = Symbol(""), Ul = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Yf = 1, qs = 3, Lr = 8;
function Gl(e) {
  return e === this.v;
}
function Jl(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ql(e) {
  return !Jl(e, this.v);
}
function Ff(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Wf() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Xf(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Uf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Gf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Jf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Qf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ep() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function tp() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Br = !1, np = !1;
function rp() {
  Br = !0;
}
const op = [];
function eu(e, t = !1) {
  return Yo(e, /* @__PURE__ */ new Map(), "", op);
}
function Yo(e, t, n, r, o = null) {
  if (typeof e == "object" && e !== null) {
    var i = t.get(e);
    if (i !== void 0) return i;
    if (e instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(e)
    );
    if (e instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(e)
    );
    if (bo(e)) {
      var s = (
        /** @type {Snapshot<any>} */
        Array(e.length)
      );
      t.set(e, s), o !== null && t.set(o, s);
      for (var a = 0; a < e.length; a += 1) {
        var l = e[a];
        a in e && (s[a] = Yo(l, t, n, r));
      }
      return s;
    }
    if (ki(e) === Fl) {
      s = {}, t.set(e, s), o !== null && t.set(o, s);
      for (var c in e)
        s[c] = Yo(e[c], t, n, r);
      return s;
    }
    if (e instanceof Date)
      return (
        /** @type {Snapshot<T>} */
        structuredClone(e)
      );
    if (typeof /** @type {T & { toJSON?: any } } */
    e.toJSON == "function")
      return Yo(
        /** @type {T & { toJSON(): any } } */
        e.toJSON(),
        t,
        n,
        r,
        // Associate the instance with the toJSON clone
        e
      );
  }
  if (e instanceof EventTarget)
    return (
      /** @type {Snapshot<T>} */
      e
    );
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(e)
    );
  } catch {
    return (
      /** @type {Snapshot<T>} */
      e
    );
  }
}
function Zs(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Xe = null;
function Da(e) {
  Xe = e;
}
function jn(e) {
  return (
    /** @type {T} */
    tu().get(e)
  );
}
function Tr(e, t) {
  return tu().set(e, t), t;
}
function ue(e, t = !1, n) {
  Xe = {
    p: Xe,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  }, Br && !t && (Xe.l = {
    s: null,
    u: null,
    r1: [],
    r2: ur(!1)
  });
}
function ce(e) {
  var t = (
    /** @type {ComponentContext} */
    Xe
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      fu(r);
  }
  return e !== void 0 && (t.x = e), Xe = t.p, e ?? /** @type {T} */
  {};
}
function _i() {
  return !Br || Xe !== null && Xe.l === null;
}
function tu(e) {
  return Xe === null && Zs(), Xe.c ??= new Map(ip(Xe) || void 0);
}
function ip(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function jt(e) {
  if (typeof e != "object" || e === null || an in e)
    return e;
  const t = ki(e);
  if (t !== Fl && t !== qf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = bo(e), o = /* @__PURE__ */ Me(0), i = ar, s = (a) => {
    if (ar === i)
      return a();
    var l = Ke, c = ar;
    Fn(null), za(i);
    var d = a();
    return Fn(l), za(c), d;
  };
  return r && n.set("length", /* @__PURE__ */ Me(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Qf();
        var d = n.get(l);
        return d === void 0 ? d = s(() => {
          var p = /* @__PURE__ */ Me(c.value);
          return n.set(l, p), p;
        }) : Y(d, c.value, !0), !0;
      },
      deleteProperty(a, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in a) {
            const f = s(() => /* @__PURE__ */ Me(ht));
            n.set(l, f), Fo(o);
          }
        } else {
          if (r && typeof l == "string") {
            var d = (
              /** @type {Source<number>} */
              n.get("length")
            ), p = Number(l);
            Number.isInteger(p) && p < d.v && Y(d, p);
          }
          Y(c, ht), Fo(o);
        }
        return !0;
      },
      get(a, l, c) {
        if (l === an)
          return e;
        var d = n.get(l), p = l in a;
        if (d === void 0 && (!p || Sn(a, l)?.writable) && (d = s(() => {
          var g = jt(p ? a[l] : ht), h = /* @__PURE__ */ Me(g);
          return h;
        }), n.set(l, d)), d !== void 0) {
          var f = u(d);
          return f === ht ? void 0 : f;
        }
        return Reflect.get(a, l, c);
      },
      getOwnPropertyDescriptor(a, l) {
        var c = Reflect.getOwnPropertyDescriptor(a, l);
        if (c && "value" in c) {
          var d = n.get(l);
          d && (c.value = u(d));
        } else if (c === void 0) {
          var p = n.get(l), f = p?.v;
          if (p !== void 0 && f !== ht)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return c;
      },
      has(a, l) {
        if (l === an)
          return !0;
        var c = n.get(l), d = c !== void 0 && c.v !== ht || Reflect.has(a, l);
        if (c !== void 0 || ze !== null && (!d || Sn(a, l)?.writable)) {
          c === void 0 && (c = s(() => {
            var f = d ? jt(a[l]) : ht, g = /* @__PURE__ */ Me(f);
            return g;
          }), n.set(l, c));
          var p = u(c);
          if (p === ht)
            return !1;
        }
        return d;
      },
      set(a, l, c, d) {
        var p = n.get(l), f = l in a;
        if (r && l === "length")
          for (var g = c; g < /** @type {Source<number>} */
          p.v; g += 1) {
            var h = n.get(g + "");
            h !== void 0 ? Y(h, ht) : g in a && (h = s(() => /* @__PURE__ */ Me(ht)), n.set(g + "", h));
          }
        if (p === void 0)
          (!f || Sn(a, l)?.writable) && (p = s(() => /* @__PURE__ */ Me(void 0)), Y(p, jt(c)), n.set(l, p));
        else {
          f = p.v !== ht;
          var v = s(() => jt(c));
          Y(p, v);
        }
        var C = Reflect.getOwnPropertyDescriptor(a, l);
        if (C?.set && C.set.call(d, c), !f) {
          if (r && typeof l == "string") {
            var w = (
              /** @type {Source<number>} */
              n.get("length")
            ), E = Number(l);
            Number.isInteger(E) && E >= w.v && Y(w, E + 1);
          }
          Fo(o);
        }
        return !0;
      },
      ownKeys(a) {
        u(o);
        var l = Reflect.ownKeys(a).filter((p) => {
          var f = n.get(p);
          return f === void 0 || f.v !== ht;
        });
        for (var [c, d] of n)
          d.v !== ht && !(c in a) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        ep();
      }
    }
  );
}
function Va(e) {
  try {
    if (e !== null && typeof e == "object" && an in e)
      return e[an];
  } catch {
  }
  return e;
}
function sp(e, t) {
  return Object.is(Va(e), Va(t));
}
// @__NO_SIDE_EFFECTS__
function qr(e) {
  var t = Ht | Ln, n = Ke !== null && (Ke.f & Ht) !== 0 ? (
    /** @type {Derived} */
    Ke
  ) : null;
  return ze === null || n !== null && (n.f & Vt) !== 0 ? t |= Vt : ze.f |= Xl, {
    ctx: Xe,
    deps: null,
    effects: null,
    equals: Gl,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ht
    ),
    wv: 0,
    parent: n ?? ze,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function S(e) {
  const t = /* @__PURE__ */ qr(e);
  return ku(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ks(e) {
  const t = /* @__PURE__ */ qr(e);
  return t.equals = Ql, t;
}
function nu(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Mt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function ap(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Ht) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function js(e) {
  var t, n = ze;
  Wn(ap(e));
  try {
    nu(e), t = Su(e);
  } finally {
    Wn(n);
  }
  return t;
}
function ru(e) {
  var t = js(e);
  if (e.equals(t) || (e.v = t, e.wv = Cu()), !Yn) {
    var n = (qn || (e.f & Vt) !== 0) && e.deps !== null ? vr : zt;
    pn(e, n);
  }
}
const ir = /* @__PURE__ */ new Map();
function ur(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Gl,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Me(e, t) {
  const n = ur(e);
  return ku(n), n;
}
// @__NO_SIDE_EFFECTS__
function ou(e, t = !1, n = !0) {
  const r = ur(e);
  return t || (r.equals = Ql), Br && n && Xe !== null && Xe.l !== null && (Xe.l.s ??= []).push(r), r;
}
function Y(e, t, n = !1) {
  Ke !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Wt || (Ke.f & Oa) !== 0) && _i() && (Ke.f & (Ht | zs | Oa)) !== 0 && !Pn?.includes(e) && tp();
  let r = n ? jt(t) : t;
  return ss(e, r);
}
function ss(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Yn ? ir.set(e, t) : ir.set(e, n), e.v = t, (e.f & Ht) !== 0 && ((e.f & Ln) !== 0 && js(
      /** @type {Derived} */
      e
    ), pn(e, (e.f & Vt) === 0 ? zt : vr)), e.wv = Cu(), iu(e, Ln), _i() && ze !== null && (ze.f & zt) !== 0 && (ze.f & (On | hr)) === 0 && (Zt === null ? mp([e]) : Zt.push(e));
  }
  return t;
}
function Aa(e, t = 1) {
  var n = u(e), r = t === 1 ? n++ : n--;
  return Y(e, n), r;
}
function Fo(e) {
  Y(e, e.v + 1);
}
function iu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = _i(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      (a & Ln) === 0 && (!r && s === ze || (pn(s, t), (a & (zt | Vt)) !== 0 && ((a & Ht) !== 0 ? iu(
        /** @type {Derived} */
        s,
        vr
      ) : Ei(
        /** @type {Effect} */
        s
      ))));
    }
}
function ko(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function lp() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let Se = !1;
function Dt(e) {
  Se = e;
}
let Ne;
function mt(e) {
  if (e === null)
    throw ko(), or;
  return Ne = e;
}
function Tn() {
  return mt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ vn(Ne)
  );
}
function R(e) {
  if (Se) {
    if (/* @__PURE__ */ vn(Ne) !== null)
      throw ko(), or;
    Ne = e;
  }
}
function be(e = 1) {
  if (Se) {
    for (var t = e, n = Ne; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ vn(n);
    Ne = n;
  }
}
function as() {
  for (var e = 0, t = Ne; ; ) {
    if (t.nodeType === Lr) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === Vs) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Os || n === Ds) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ vn(t)
    );
    t.remove(), t = r;
  }
}
function su(e) {
  if (!e || e.nodeType !== Lr)
    throw ko(), or;
  return (
    /** @type {Comment} */
    e.data
  );
}
var Et, au, lu, uu;
function ls() {
  if (Et === void 0) {
    Et = window, au = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    lu = Sn(t, "firstChild").get, uu = Sn(t, "nextSibling").get, Na(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Na(n) && (n.__t = void 0);
  }
}
function Mn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function lt(e) {
  return lu.call(e);
}
// @__NO_SIDE_EFFECTS__
function vn(e) {
  return uu.call(e);
}
function I(e, t) {
  if (!Se)
    return /* @__PURE__ */ lt(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ lt(Ne)
  );
  if (n === null)
    n = Ne.appendChild(Mn());
  else if (t && n.nodeType !== qs) {
    var r = Mn();
    return n?.before(r), mt(r), r;
  }
  return mt(n), n;
}
function fe(e, t) {
  if (!Se) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ lt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ vn(n) : n;
  }
  return Ne;
}
function H(e, t = 1, n = !1) {
  let r = Se ? Ne : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ vn(r);
  if (!Se)
    return r;
  if (n && r?.nodeType !== qs) {
    var i = Mn();
    return r === null ? o?.after(i) : r.before(i), mt(i), i;
  }
  return mt(r), /** @type {TemplateNode} */
  r;
}
function Ys(e) {
  e.textContent = "";
}
function cu(e) {
  ze === null && Ke === null && Xf(), Ke !== null && (Ke.f & Vt) !== 0 && ze === null && Wf(), Yn && Ff();
}
function up(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Dn(e, t, n, r = !0) {
  var o = ze, i = {
    ctx: Xe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ln,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o,
    b: o && o.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      Xs(i), i.f |= Wl;
    } catch (l) {
      throw Mt(i), l;
    }
  else t !== null && Ei(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Xl | Rs)) === 0;
  if (!s && r && (o !== null && up(i, o), Ke !== null && (Ke.f & Ht) !== 0)) {
    var a = (
      /** @type {Derived} */
      Ke
    );
    (a.effects ??= []).push(i);
  }
  return i;
}
function cp() {
  return Ke !== null && !Wt;
}
function du(e) {
  const t = Dn($o, null, !1);
  return pn(t, zt), t.teardown = e, t;
}
function nt(e) {
  if (cu(), !Ke && ze && (ze.f & On) !== 0) {
    var t = (
      /** @type {ComponentContext} */
      Xe
    );
    (t.e ??= []).push(e);
  } else
    return fu(e);
}
function fu(e) {
  return Dn(Hs | Is, e, !1);
}
function pu(e) {
  return cu(), Dn($o | Is, e, !0);
}
function Fs(e) {
  const t = Dn(hr, e, !0);
  return () => {
    Mt(t);
  };
}
function dp(e) {
  const t = Dn(hr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Mr(t, () => {
      Mt(t), r(void 0);
    }) : (Mt(t), r(void 0));
  });
}
function Co(e) {
  return Dn(Hs, e, !1);
}
function _o(e) {
  return Dn($o, e, !0);
}
function Le(e, t = [], n = qr) {
  const r = t.map(n);
  return Jn(() => e(...r.map(u)));
}
function Jn(e, t = 0) {
  var n = Dn($o | zs | t, e, !0);
  return n;
}
function fn(e, t = !0) {
  return Dn($o | On, e, !0, t);
}
function gu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Yn, r = Ke;
    Ha(!0), Fn(null);
    try {
      t.call(null);
    } finally {
      Ha(n), Fn(r);
    }
  }
}
function hu(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    n.ac?.abort(Ul);
    var r = n.next;
    (n.f & hr) !== 0 ? n.parent = null : Mt(n, t), n = r;
  }
}
function fp(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & On) === 0 && Mt(t), t = n;
  }
}
function Mt(e, t = !0) {
  var n = !1;
  (t || (e.f & Kf) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (vu(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), hu(e, t && !n), si(e, 0), pn(e, Ci);
  var r = e.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  gu(e);
  var o = e.parent;
  o !== null && o.first !== null && mu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function vu(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ vn(e)
    );
    e.remove(), e = n;
  }
}
function mu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Mr(e, t) {
  var n = [];
  Ws(e, n, !0), yu(n, () => {
    Mt(e), t && t();
  });
}
function yu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Ws(e, t, n) {
  if ((e.f & En) === 0) {
    if (e.f ^= En, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Ir) !== 0 || (r.f & On) !== 0;
      Ws(r, t, i ? n : !1), r = o;
    }
  }
}
function ro(e) {
  wu(e, !0);
}
function wu(e, t) {
  if ((e.f & En) !== 0) {
    e.f ^= En;
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Ir) !== 0 || (n.f & On) !== 0;
      wu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const pp = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let oo = [], io = [];
function bu() {
  var e = oo;
  oo = [], ri(e);
}
function xu() {
  var e = io;
  io = [], ri(e);
}
function So(e) {
  oo.length === 0 && queueMicrotask(bu), oo.push(e);
}
function gp(e) {
  io.length === 0 && pp(xu), io.push(e);
}
function hp() {
  oo.length > 0 && bu(), io.length > 0 && xu();
}
function vp(e) {
  var t = (
    /** @type {Effect} */
    ze
  );
  if ((t.f & Wl) === 0) {
    if ((t.f & Rs) === 0)
      throw e;
    t.fn(e);
  } else
    $u(e, t);
}
function $u(e, t) {
  for (; t !== null; ) {
    if ((t.f & Rs) !== 0)
      try {
        t.b.error(e);
        return;
      } catch {
      }
    t = t.parent;
  }
  throw e;
}
let so = !1, ao = null, sr = !1, Yn = !1;
function Ha(e) {
  Yn = e;
}
let to = [], Ke = null, Wt = !1;
function Fn(e) {
  Ke = e;
}
let ze = null;
function Wn(e) {
  ze = e;
}
let Pn = null;
function ku(e) {
  Ke !== null && Ke.f & is && (Pn === null ? Pn = [e] : Pn.push(e));
}
let $t = null, Ot = 0, Zt = null;
function mp(e) {
  Zt = e;
}
let ii = 1, lo = 0, ar = lo;
function za(e) {
  ar = e;
}
let qn = !1;
function Cu() {
  return ++ii;
}
function Si(e) {
  var t = e.f;
  if ((t & Ln) !== 0)
    return !0;
  if ((t & vr) !== 0) {
    var n = e.deps, r = (t & Vt) !== 0;
    if (n !== null) {
      var o, i, s = (t & oi) !== 0, a = r && ze !== null && !qn, l = n.length;
      if (s || a) {
        var c = (
          /** @type {Derived} */
          e
        ), d = c.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !i?.reactions?.includes(c)) && (i.reactions ??= []).push(c);
        s && (c.f ^= oi), a && d !== null && (d.f & Vt) === 0 && (c.f ^= Vt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], Si(
          /** @type {Derived} */
          i
        ) && ru(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || ze !== null && !qn) && pn(e, zt);
  }
  return !1;
}
function _u(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !Pn?.includes(e))
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      (i.f & Ht) !== 0 ? _u(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? pn(i, Ln) : (i.f & zt) !== 0 && pn(i, vr), Ei(
        /** @type {Effect} */
        i
      ));
    }
}
function Su(e) {
  var t = $t, n = Ot, r = Zt, o = Ke, i = qn, s = Pn, a = Xe, l = Wt, c = ar, d = e.f;
  $t = /** @type {null | Value[]} */
  null, Ot = 0, Zt = null, qn = (d & Vt) !== 0 && (Wt || !sr || Ke === null), Ke = (d & (On | hr)) === 0 ? e : null, Pn = null, Da(e.ctx), Wt = !1, ar = ++lo, e.f |= is, e.ac !== null && (e.ac.abort(Ul), e.ac = null);
  try {
    var p = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if ($t !== null) {
      var g;
      if (si(e, Ot), f !== null && Ot > 0)
        for (f.length = Ot + $t.length, g = 0; g < $t.length; g++)
          f[Ot + g] = $t[g];
      else
        e.deps = f = $t;
      if (!qn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (d & Ht) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (g = Ot; g < f.length; g++)
          (f[g].reactions ??= []).push(e);
    } else f !== null && Ot < f.length && (si(e, Ot), f.length = Ot);
    if (_i() && Zt !== null && !Wt && f !== null && (e.f & (Ht | vr | Ln)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      Zt.length; g++)
        _u(
          Zt[g],
          /** @type {Effect} */
          e
        );
    return o !== null && o !== e && (lo++, Zt !== null && (r === null ? r = Zt : r.push(.../** @type {Source[]} */
    Zt))), p;
  } catch (h) {
    vp(h);
  } finally {
    $t = t, Ot = n, Zt = r, Ke = o, qn = i, Pn = s, Da(a), Wt = l, ar = c, e.f ^= is;
  }
}
function yp(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Bf.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && (t.f & Ht) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  ($t === null || !$t.includes(t)) && (pn(t, vr), (t.f & (Vt | oi)) === 0 && (t.f ^= oi), nu(
    /** @type {Derived} **/
    t
  ), si(
    /** @type {Derived} **/
    t,
    0
  ));
}
function si(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      yp(e, n[r]);
}
function Xs(e) {
  var t = e.f;
  if ((t & Ci) === 0) {
    pn(e, zt);
    var n = ze, r = sr;
    ze = e, sr = !0;
    try {
      (t & zs) !== 0 ? fp(e) : hu(e), gu(e);
      var o = Su(e);
      e.teardown = typeof o == "function" ? o : null, e.wv = ii;
      var i;
      If && np && (e.f & Ln) !== 0 && e.deps;
    } finally {
      sr = r, ze = n;
    }
  }
}
function wp() {
  try {
    Uf();
  } catch (e) {
    if (ao !== null)
      $u(e, ao);
    else
      throw e;
  }
}
function Eu() {
  var e = sr;
  try {
    var t = 0;
    for (sr = !0; to.length > 0; ) {
      t++ > 1e3 && wp();
      var n = to, r = n.length;
      to = [];
      for (var o = 0; o < r; o++) {
        var i = xp(n[o]);
        bp(i);
      }
      ir.clear();
    }
  } finally {
    so = !1, sr = e, ao = null;
  }
}
function bp(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (Ci | En)) === 0 && Si(r)) {
        var o = ii;
        if (Xs(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? mu(r) : r.fn = null), ii > o && (r.f & Is) !== 0)
          break;
      }
    }
    for (; n < t; n += 1)
      Ei(e[n]);
  }
}
function Ei(e) {
  so || (so = !0, queueMicrotask(Eu));
  for (var t = ao = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (hr | On)) !== 0) {
      if ((n & zt) === 0) return;
      t.f ^= zt;
    }
  }
  to.push(t);
}
function xp(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (On | hr)) !== 0, i = o && (r & zt) !== 0;
    if (!i && (r & En) === 0) {
      (r & Hs) !== 0 ? t.push(n) : o ? n.f ^= zt : Si(n) && Xs(n);
      var s = n.first;
      if (s !== null) {
        n = s;
        continue;
      }
    }
    var a = n.parent;
    for (n = n.next; n === null && a !== null; )
      n = a.next, a = a.parent;
  }
  return t;
}
function m(e) {
  for (var t; ; ) {
    if (hp(), to.length === 0)
      return so = !1, ao = null, /** @type {T} */
      t;
    so = !0, Eu();
  }
}
async function $p() {
  await Promise.resolve(), m();
}
function u(e) {
  var t = e.f, n = (t & Ht) !== 0;
  if (Ke !== null && !Wt) {
    if (!Pn?.includes(e)) {
      var r = Ke.deps;
      e.rv < lo && (e.rv = lo, $t === null && r !== null && r[Ot] === e ? Ot++ : $t === null ? $t = [e] : (!qn || !$t.includes(e)) && $t.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && (i.f & Vt) === 0 && (o.f ^= Vt);
  }
  if (n && !Yn && (o = /** @type {Derived} */
  e, Si(o) && ru(o)), Yn) {
    if (ir.has(e))
      return ir.get(e);
    if (n) {
      o = /** @type {Derived} */
      e;
      var s = o.v;
      return ((o.f & zt) !== 0 || Pu(o)) && (s = js(o)), ir.set(o, s), s;
    }
  }
  return e.v;
}
function Pu(e) {
  if (e.v === ht) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ir.has(t) || (t.f & Ht) !== 0 && Pu(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function dt(e) {
  var t = Wt;
  try {
    return Wt = !0, e();
  } finally {
    Wt = t;
  }
}
const kp = -7169;
function pn(e, t) {
  e.f = e.f & kp | t;
}
function Cp(e, t) {
  var n = {};
  for (var r in e)
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function Us(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (an in e)
      us(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && an in n && us(n);
      }
  }
}
function us(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        us(e[r], t);
      } catch {
      }
    const n = ki(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Yl(n);
      for (let o in r) {
        const i = r[o].get;
        if (i)
          try {
            i.call(e);
          } catch {
          }
      }
    }
  }
}
function _p(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, So(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Sp(e) {
  Se && /* @__PURE__ */ lt(e) !== null && Ys(e);
}
let Ra = !1;
function Ep() {
  Ra || (Ra = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Pp(e) {
  var t = Ke, n = ze;
  Fn(null), Wn(null);
  try {
    return e();
  } finally {
    Fn(t), Wn(n);
  }
}
const Lu = /* @__PURE__ */ new Set(), cs = /* @__PURE__ */ new Set();
function Gs(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || Gr.call(t, i), !i.cancelBubble)
      return Pp(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? So(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function ds(e, t, n, r = {}) {
  var o = Gs(t, e, n, r);
  return () => {
    e.removeEventListener(t, o, r);
  };
}
function Ia(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = Gs(e, t, n, i);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && du(() => {
    t.removeEventListener(e, s, i);
  });
}
function Vn(e) {
  for (var t = 0; t < e.length; t++)
    Lu.add(e[t]);
  for (var n of cs)
    n(e);
}
function Gr(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    o[0] || e.target
  ), s = 0, a = e.__root;
  if (a) {
    var l = o.indexOf(a);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = o.indexOf(t);
    if (c === -1)
      return;
    l <= c && (s = l);
  }
  if (i = /** @type {Element} */
  o[s] || e.target, i !== t) {
    ni(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var d = Ke, p = ze;
    Fn(null), Wn(null);
    try {
      for (var f, g = []; i !== null; ) {
        var h = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var v = i["__" + r];
          if (v != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (bo(v)) {
              var [C, ...w] = v;
              C.apply(i, [e, ...w]);
            } else
              v.call(i, e);
        } catch (E) {
          f ? g.push(E) : f = E;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        i = h;
      }
      if (f) {
        for (let E of g)
          queueMicrotask(() => {
            throw E;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Fn(d), Wn(p);
    }
  }
}
function Js(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Tt(e, t) {
  var n = (
    /** @type {Effect} */
    ze
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function J(e, t) {
  var n = (t & jl) !== 0, r = (t & Af) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (Se)
      return Tt(Ne, null), Ne;
    o === void 0 && (o = Js(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ lt(o)));
    var s = (
      /** @type {TemplateNode} */
      r || au ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ lt(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Tt(a, l);
    } else
      Tt(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Lp(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & jl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (Se)
      return Tt(Ne, null), Ne;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        Js(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ lt(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ lt(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ lt(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ lt(l);
    }
    var c = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ lt(c)
      ), p = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      Tt(d, p);
    } else
      Tt(c, c);
    return c;
  };
}
// @__NO_SIDE_EFFECTS__
function we(e, t) {
  return /* @__PURE__ */ Lp(e, t, "svg");
}
function Te(e = "") {
  if (!Se) {
    var t = Mn(e + "");
    return Tt(t, t), t;
  }
  var n = Ne;
  return n.nodeType !== qs && (n.before(n = Mn()), mt(n)), Tt(n, n), n;
}
function Ie() {
  if (Se)
    return Tt(Ne, null), Ne;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Mn();
  return e.append(t, n), Tt(t, n), e;
}
function N(e, t) {
  if (Se) {
    ze.nodes_end = Ne, Tn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Tp(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const Mp = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function Np(e) {
  return Mp.includes(e);
}
const Op = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function Dp(e) {
  return e = e.toLowerCase(), Op[e] ?? e;
}
const Vp = ["touchstart", "touchmove"];
function Ap(e) {
  return Vp.includes(e);
}
const Hp = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function zp(e) {
  return Hp.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function Ye(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function Tu(e, t) {
  return Mu(e, t);
}
function Rp(e, t) {
  ls(), t.intro = t.intro ?? !1;
  const n = t.target, r = Se, o = Ne;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ lt(n)
    ); i && (i.nodeType !== Lr || /** @type {Comment} */
    i.data !== Os); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ vn(i);
    if (!i)
      throw or;
    Dt(!0), mt(
      /** @type {Comment} */
      i
    ), Tn();
    const s = Mu(e, { ...t, anchor: i });
    if (Ne === null || Ne.nodeType !== Lr || /** @type {Comment} */
    Ne.data !== Vs)
      throw ko(), or;
    return Dt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === or)
      return t.recover === !1 && Gf(), ls(), Ys(n), Dt(!1), Tu(e, t);
    throw s;
  } finally {
    Dt(r), mt(o);
  }
}
const xr = /* @__PURE__ */ new Map();
function Mu(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  ls();
  var a = /* @__PURE__ */ new Set(), l = (p) => {
    for (var f = 0; f < p.length; f++) {
      var g = p[f];
      if (!a.has(g)) {
        a.add(g);
        var h = Ap(g);
        t.addEventListener(g, Gr, { passive: h });
        var v = xr.get(g);
        v === void 0 ? (document.addEventListener(g, Gr, { passive: h }), xr.set(g, 1)) : xr.set(g, v + 1);
      }
    }
  };
  l(As(Lu)), cs.add(l);
  var c = void 0, d = dp(() => {
    var p = n ?? t.appendChild(Mn());
    return fn(() => {
      if (i) {
        ue({});
        var f = (
          /** @type {ComponentContext} */
          Xe
        );
        f.c = i;
      }
      o && (r.$$events = o), Se && Tt(
        /** @type {TemplateNode} */
        p,
        null
      ), c = e(p, r) || {}, Se && (ze.nodes_end = Ne), i && ce();
    }), () => {
      for (var f of a) {
        t.removeEventListener(f, Gr);
        var g = (
          /** @type {number} */
          xr.get(f)
        );
        --g === 0 ? (document.removeEventListener(f, Gr), xr.delete(f)) : xr.set(f, g);
      }
      cs.delete(l), p !== n && p.parentNode?.removeChild(p);
    };
  });
  return fs.set(c, d), c;
}
let fs = /* @__PURE__ */ new WeakMap();
function Ip(e, t) {
  const n = fs.get(e);
  return n ? (fs.delete(e), n(t)) : Promise.resolve();
}
function rt(e, t, ...n) {
  var r = e, o = ft, i;
  Jn(() => {
    o !== (o = t()) && (i && (Mt(i), i = null), i = fn(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Ir), Se && (r = Ne);
}
function Qn(e) {
  Xe === null && Zs(), Br && Xe.l !== null ? Bp(Xe).m.push(e) : nt(() => {
    const t = dt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Pi(e) {
  Xe === null && Zs(), Qn(() => () => dt(e));
}
function Bp(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
function le(e, t, [n, r] = [0, 0]) {
  Se && n === 0 && Tn();
  var o = e, i = null, s = null, a = ht, l = n > 0 ? Ir : 0, c = !1;
  const d = (f, g = !0) => {
    c = !0, p(g, f);
  }, p = (f, g) => {
    if (a === (a = f)) return;
    let h = !1;
    if (Se && r !== -1) {
      if (n === 0) {
        const C = su(o);
        C === Os ? r = 0 : C === Ds ? r = 1 / 0 : (r = parseInt(C.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const v = r > n;
      !!a === v && (o = as(), mt(o), Dt(!1), h = !0, r = -1);
    }
    a ? (i ? ro(i) : g && (i = fn(() => g(o))), s && Mr(s, () => {
      s = null;
    })) : (s ? ro(s) : g && (s = fn(() => g(o, [n + 1, r]))), i && Mr(i, () => {
      i = null;
    })), h && Dt(!0);
  };
  Jn(() => {
    c = !1, t(d), c || p(null, null);
  }, l), Se && (o = Ne);
}
function qp(e, t) {
  Se && mt(
    /** @type {TemplateNode} */
    /* @__PURE__ */ lt(e)
  ), _o(() => {
    var n = t();
    for (var r in n) {
      var o = n[r];
      o ? e.style.setProperty(r, o) : e.style.removeProperty(r);
    }
  });
}
function Nr(e, t) {
  return t;
}
function Zp(e, t, n, r) {
  for (var o = [], i = t.length, s = 0; s < i; s++)
    Ws(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Ys(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), In(e, t[0].prev, t[i - 1].next);
  }
  yu(o, () => {
    for (var c = 0; c < i; c++) {
      var d = t[c];
      a || (r.delete(d.k), In(e, d.prev, d.next)), Mt(d.e, !a);
    }
  });
}
function yt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & Zl) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      e
    );
    s = Se ? mt(
      /** @type {Comment | Text} */
      /* @__PURE__ */ lt(c)
    ) : c.appendChild(Mn());
  }
  Se && Tn();
  var d = null, p = !1, f = /* @__PURE__ */ Ks(() => {
    var g = n();
    return bo(g) ? g : g == null ? [] : As(g);
  });
  Jn(() => {
    var g = u(f), h = g.length;
    if (p && h === 0)
      return;
    p = h === 0;
    let v = !1;
    if (Se) {
      var C = su(s) === Ds;
      C !== (h === 0) && (s = as(), mt(s), Dt(!1), v = !0);
    }
    if (Se) {
      for (var w = null, E, x = 0; x < h; x++) {
        if (Ne.nodeType === Lr && /** @type {Comment} */
        Ne.data === Vs) {
          s = /** @type {Comment} */
          Ne, v = !0, Dt(!1);
          break;
        }
        var $ = g[x], k = r($, x);
        E = Nu(
          Ne,
          a,
          w,
          null,
          $,
          k,
          x,
          o,
          t,
          n
        ), a.items.set(k, E), w = E;
      }
      h > 0 && mt(as());
    }
    Se || Kp(g, a, s, o, t, r, n), i !== null && (h === 0 ? d ? ro(d) : d = fn(() => i(s)) : d !== null && Mr(d, () => {
      d = null;
    })), v && Dt(!0), u(f);
  }), Se && (s = Ne);
}
function Kp(e, t, n, r, o, i, s) {
  var a = (o & Tf) !== 0, l = (o & (Ms | Ns)) !== 0, c = e.length, d = t.items, p = t.first, f = p, g, h = null, v, C = [], w = [], E, x, $, k;
  if (a)
    for (k = 0; k < c; k += 1)
      E = e[k], x = i(E, k), $ = d.get(x), $ !== void 0 && ($.a?.measure(), (v ??= /* @__PURE__ */ new Set()).add($));
  for (k = 0; k < c; k += 1) {
    if (E = e[k], x = i(E, k), $ = d.get(x), $ === void 0) {
      var M = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : n;
      h = Nu(
        M,
        t,
        h,
        h === null ? t.first : h.next,
        E,
        x,
        k,
        r,
        o,
        s
      ), d.set(x, h), C = [], w = [], f = h.next;
      continue;
    }
    if (l && jp($, E, k, o), ($.e.f & En) !== 0 && (ro($.e), a && ($.a?.unfix(), (v ??= /* @__PURE__ */ new Set()).delete($))), $ !== f) {
      if (g !== void 0 && g.has($)) {
        if (C.length < w.length) {
          var z = w[0], q;
          h = z.prev;
          var U = C[0], j = C[C.length - 1];
          for (q = 0; q < C.length; q += 1)
            Ba(C[q], z, n);
          for (q = 0; q < w.length; q += 1)
            g.delete(w[q]);
          In(t, U.prev, j.next), In(t, h, U), In(t, j, z), f = z, h = j, k -= 1, C = [], w = [];
        } else
          g.delete($), Ba($, f, n), In(t, $.prev, $.next), In(t, $, h === null ? t.first : h.next), In(t, h, $), h = $;
        continue;
      }
      for (C = [], w = []; f !== null && f.k !== x; )
        (f.e.f & En) === 0 && (g ??= /* @__PURE__ */ new Set()).add(f), w.push(f), f = f.next;
      if (f === null)
        continue;
      $ = f;
    }
    C.push($), h = $, f = $.next;
  }
  if (f !== null || g !== void 0) {
    for (var T = g === void 0 ? [] : As(g); f !== null; )
      (f.e.f & En) === 0 && T.push(f), f = f.next;
    var _ = T.length;
    if (_ > 0) {
      var D = (o & Zl) !== 0 && c === 0 ? n : null;
      if (a) {
        for (k = 0; k < _; k += 1)
          T[k].a?.measure();
        for (k = 0; k < _; k += 1)
          T[k].a?.fix();
      }
      Zp(t, T, D, d);
    }
  }
  a && So(() => {
    if (v !== void 0)
      for ($ of v)
        $.a?.apply();
  }), ze.first = t.first && t.first.e, ze.last = h && h.e;
}
function jp(e, t, n, r) {
  (r & Ms) !== 0 && ss(e.v, t), (r & Ns) !== 0 ? ss(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Nu(e, t, n, r, o, i, s, a, l, c) {
  var d = (l & Ms) !== 0, p = (l & Mf) === 0, f = d ? p ? /* @__PURE__ */ ou(o, !1, !1) : ur(o) : o, g = (l & Ns) === 0 ? s : ur(s), h = {
    i: g,
    v: f,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return h.e = fn(() => a(e, f, g, c), Se), h.e.prev = n && n.e, h.e.next = r && r.e, n === null ? t.first = h : (n.next = h, n.e.next = h.e), r !== null && (r.prev = h, r.e.prev = h.e), h;
  } finally {
  }
}
function Ba(e, t, n) {
  for (var r = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, o = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, i = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); i !== r; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ vn(i)
    );
    o.before(i), i = s;
  }
}
function In(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function Qs(e, t, n = !1, r = !1, o = !1) {
  var i = e, s = "";
  Le(() => {
    var a = (
      /** @type {Effect} */
      ze
    );
    if (s === (s = t() ?? "")) {
      Se && Tn();
      return;
    }
    if (a.nodes_start !== null && (vu(
      a.nodes_start,
      /** @type {TemplateNode} */
      a.nodes_end
    ), a.nodes_start = a.nodes_end = null), s !== "") {
      if (Se) {
        Ne.data;
        for (var l = Tn(), c = l; l !== null && (l.nodeType !== Lr || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ vn(l);
        if (l === null)
          throw ko(), or;
        Tt(Ne, c), i = mt(l);
        return;
      }
      var d = s + "";
      n ? d = `<svg>${d}</svg>` : r && (d = `<math>${d}</math>`);
      var p = Js(d);
      if ((n || r) && (p = /** @type {Element} */
      /* @__PURE__ */ lt(p)), Tt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ lt(p),
        /** @type {TemplateNode} */
        p.lastChild
      ), n || r)
        for (; /* @__PURE__ */ lt(p); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ lt(p)
          );
      else
        i.before(p);
    }
  });
}
function ea(e, t, n) {
  Se && Tn();
  var r = e, o, i;
  Jn(() => {
    o !== (o = t()) && (i && (Mr(i), i = null), o && (i = fn(() => n(r, o))));
  }, Ir), Se && (r = Ne);
}
function Yp(e, t, n, r, o, i) {
  let s = Se;
  Se && Tn();
  var a, l, c = null;
  Se && Ne.nodeType === Yf && (c = /** @type {Element} */
  Ne, Tn());
  var d = (
    /** @type {TemplateNode} */
    Se ? Ne : e
  ), p;
  Jn(() => {
    const f = t() || null;
    var g = f === "svg" ? zf : null;
    f !== a && (p && (f === null ? Mr(p, () => {
      p = null, l = null;
    }) : f === l ? ro(p) : Mt(p)), f && f !== l && (p = fn(() => {
      if (c = Se ? (
        /** @type {Element} */
        c
      ) : g ? document.createElementNS(g, f) : document.createElement(f), Tt(c, c), r) {
        Se && zp(f) && c.append(document.createComment(""));
        var h = (
          /** @type {TemplateNode} */
          Se ? /* @__PURE__ */ lt(c) : c.appendChild(Mn())
        );
        Se && (h === null ? Dt(!1) : mt(h)), r(c, h);
      }
      ze.nodes_end = c, d.before(c);
    })), a = f, a && (l = a));
  }, Ir), s && (Dt(!0), mt(d));
}
function qe(e, t) {
  So(() => {
    var n = e.getRootNode(), r = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + t.hash)) {
      const o = document.createElement("style");
      o.id = t.hash, o.textContent = t.code, r.appendChild(o);
    }
  });
}
function vt(e, t, n) {
  Co(() => {
    var r = dt(() => t(e, n?.()) || {});
    if (n && r?.update) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      _o(() => {
        var s = n();
        Us(s), o && Jl(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r?.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Fp(e, t) {
  var n = void 0, r;
  Jn(() => {
    n !== (n = t()) && (r && (Mt(r), r = null), n && (r = fn(() => {
      Co(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
function Ou(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ou(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Wp() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ou(e)) && (r && (r += " "), r += t);
  return r;
}
function An(e) {
  return typeof e == "object" ? Wp(e) : e ?? "";
}
const qa = [...` 	
\r\f \v\uFEFF`];
function Xp(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || qa.includes(r[s - 1])) && (a === r.length || qa.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function Za(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function ji(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Up(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(ji)), o && l.push(...Object.keys(o).map(ji));
      var c = 0, d = -1;
      const v = e.length;
      for (var p = 0; p < v; p++) {
        var f = e[p];
        if (a ? f === "/" && e[p - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[p + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && d === -1)
            d = p;
          else if (f === ";" || p === v - 1) {
            if (d !== -1) {
              var g = ji(e.substring(c, d).trim());
              if (!l.includes(g)) {
                f !== ";" && p++;
                var h = e.substring(c, p).trim();
                n += " " + h + ";";
              }
            }
            c = p + 1, d = -1;
          }
        }
      }
    }
    return r && (n += Za(r)), o && (n += Za(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function Nt(e, t, n, r, o, i) {
  var s = e.__className;
  if (Se || s !== n || s === void 0) {
    var a = Xp(n, r, i);
    (!Se || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var c = !!i[l];
      (o == null || c !== !!o[l]) && e.classList.toggle(l, c);
    }
  return i;
}
function Yi(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function Ct(e, t, n, r) {
  var o = e.__style;
  if (Se || o !== t) {
    var i = Up(t, r);
    (!Se || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (Yi(e, n?.[0], r[0]), Yi(e, n?.[1], r[1], "important")) : Yi(e, n, r));
  return r;
}
function ps(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!bo(t))
      return lp();
    for (var r of e.options)
      r.selected = t.includes(Ka(r));
    return;
  }
  for (r of e.options) {
    var o = Ka(r);
    if (sp(o, t)) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function Gp(e) {
  var t = new MutationObserver(() => {
    ps(e, e.__value);
  });
  t.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), du(() => {
    t.disconnect();
  });
}
function Ka(e) {
  return "__value" in e ? e.__value : e.value;
}
const Bn = Symbol("class"), on = Symbol("style"), Du = Symbol("is custom element"), Vu = Symbol("is html");
function ln(e) {
  if (Se) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          $e(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          $e(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, gp(n), Ep();
  }
}
function Wo(e, t) {
  var n = Li(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function gs(e, t) {
  var n = Li(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function Jp(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function $e(e, t, n, r) {
  var o = Li(e);
  Se && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[jf] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Au(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Qp(e, t, n, r, o = !1) {
  var i = Li(e), s = i[Du], a = !i[Vu];
  let l = Se && s;
  l && Dt(!1);
  var c = t || {}, d = e.tagName === "OPTION";
  for (var p in t)
    p in n || (n[p] = null);
  n.class ? n.class = An(n.class) : (r || n[Bn]) && (n.class = null), n[on] && (n.style ??= null);
  var f = Au(e);
  for (const x in n) {
    let $ = n[x];
    if (d && x === "value" && $ == null) {
      e.value = e.__value = "", c[x] = $;
      continue;
    }
    if (x === "class") {
      var g = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Nt(e, g, $, r, t?.[Bn], n[Bn]), c[x] = $, c[Bn] = n[Bn];
      continue;
    }
    if (x === "style") {
      Ct(e, $, t?.[on], n[on]), c[x] = $, c[on] = n[on];
      continue;
    }
    var h = c[x];
    if (!($ === h && !($ === void 0 && e.hasAttribute(x)))) {
      c[x] = $;
      var v = x[0] + x[1];
      if (v !== "$$")
        if (v === "on") {
          const k = {}, M = "$$" + x;
          let z = x.slice(2);
          var C = Np(z);
          if (Tp(z) && (z = z.slice(0, -7), k.capture = !0), !C && h) {
            if ($ != null) continue;
            e.removeEventListener(z, c[M], k), c[M] = null;
          }
          if ($ != null)
            if (C)
              e[`__${z}`] = $, Vn([z]);
            else {
              let q = function(U) {
                c[x].call(this, U);
              };
              c[M] = Gs(z, e, q, k);
            }
          else C && (e[`__${z}`] = void 0);
        } else if (x === "style")
          $e(e, x, $);
        else if (x === "autofocus")
          _p(
            /** @type {HTMLElement} */
            e,
            !!$
          );
        else if (!s && (x === "__value" || x === "value" && $ != null))
          e.value = e.__value = $;
        else if (x === "selected" && d)
          Jp(
            /** @type {HTMLOptionElement} */
            e,
            $
          );
        else {
          var w = x;
          a || (w = Dp(w));
          var E = w === "defaultValue" || w === "defaultChecked";
          if ($ == null && !s && !E)
            if (i[x] = null, w === "value" || w === "checked") {
              let k = (
                /** @type {HTMLInputElement} */
                e
              );
              const M = t === void 0;
              if (w === "value") {
                let z = k.defaultValue;
                k.removeAttribute(w), k.defaultValue = z, k.value = k.__value = M ? z : null;
              } else {
                let z = k.defaultChecked;
                k.removeAttribute(w), k.defaultChecked = z, k.checked = M ? z : !1;
              }
            } else
              e.removeAttribute(x);
          else E || f.includes(w) && (s || typeof $ != "string") ? e[w] = $ : typeof $ != "function" && $e(e, w, $);
        }
    }
  }
  return l && Dt(!0), c;
}
function ut(e, t, n = [], r, o = !1, i = qr) {
  const s = n.map(i);
  var a = void 0, l = {}, c = e.nodeName === "SELECT", d = !1;
  if (Jn(() => {
    var f = t(...s.map(u)), g = Qp(e, a, f, r, o);
    d && c && "value" in f && ps(
      /** @type {HTMLSelectElement} */
      e,
      f.value
    );
    for (let v of Object.getOwnPropertySymbols(l))
      f[v] || Mt(l[v]);
    for (let v of Object.getOwnPropertySymbols(f)) {
      var h = f[v];
      v.description === Rf && (!a || h !== a[v]) && (l[v] && Mt(l[v]), l[v] = fn(() => Fp(e, () => h))), g[v] = h;
    }
    a = g;
  }), c) {
    var p = (
      /** @type {HTMLSelectElement} */
      e
    );
    Co(() => {
      ps(
        p,
        /** @type {Record<string | symbol, any>} */
        a.value,
        !0
      ), Gp(p);
    });
  }
  d = !0;
}
function Li(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Du]: e.nodeName.includes("-"),
      [Vu]: e.namespaceURI === Hf
    }
  );
}
var ja = /* @__PURE__ */ new Map();
function Au(e) {
  var t = ja.get(e.nodeName);
  if (t) return t;
  ja.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Yl(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = ki(r);
  }
  return t;
}
class ta {
  /** */
  #t = /* @__PURE__ */ new WeakMap();
  /** @type {ResizeObserver | undefined} */
  #e;
  /** @type {ResizeObserverOptions} */
  #n;
  /** @static */
  static entries = /* @__PURE__ */ new WeakMap();
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    this.#n = t;
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = this.#t.get(t) || /* @__PURE__ */ new Set();
    return r.add(n), this.#t.set(t, r), this.#r().observe(t, this.#n), () => {
      var o = this.#t.get(t);
      o.delete(n), o.size === 0 && (this.#t.delete(t), this.#e.unobserve(t));
    };
  }
  #r() {
    return this.#e ?? (this.#e = new ResizeObserver(
      /** @param {any} entries */
      (t) => {
        for (var n of t) {
          ta.entries.set(n.target, n);
          for (var r of this.#t.get(n.target) || [])
            r(n);
        }
      }
    ));
  }
}
var eg = /* @__PURE__ */ new ta({
  box: "border-box"
});
function Ya(e, t, n) {
  var r = eg.observe(e, () => n(e[t]));
  Co(() => (dt(() => n(e[t])), r));
}
function Fa(e, t) {
  return e === t || e?.[an] === t;
}
function Rt(e = {}, t, n, r) {
  return Co(() => {
    var o, i;
    return _o(() => {
      o = i, i = [], dt(() => {
        e !== n(...i) && (t(e, ...i), o && Fa(n(...o), e) && t(null, ...o));
      });
    }), () => {
      So(() => {
        i && Fa(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Hu(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Xe
  ), n = t.l.u;
  if (!n) return;
  let r = () => Us(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ qr(() => {
      let a = !1;
      const l = t.s;
      for (const c in l)
        l[c] !== i[c] && (i[c] = l[c], a = !0);
      return a && o++, o;
    });
    r = () => u(s);
  }
  n.b.length && pu(() => {
    Wa(t, r), ri(n.b);
  }), nt(() => {
    const o = dt(() => n.m.map(Zf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && nt(() => {
    Wa(t, r), ri(n.a);
  });
}
function Wa(e, t) {
  if (e.l.s)
    for (const n of e.l.s) u(n);
  t();
}
let Ro = !1;
function tg(e) {
  var t = Ro;
  try {
    return Ro = !1, [e(), Ro];
  } finally {
    Ro = t;
  }
}
const ng = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return e.props[t];
  },
  set(e, t) {
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.includes(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
// @__NO_SIDE_EFFECTS__
function je(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    ng
  );
}
const rg = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return u(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    if (!(t in e.special)) {
      var r = ze;
      try {
        Wn(e.parent_effect), e.special[t] = y(
          {
            get [t]() {
              return e.props[t];
            }
          },
          /** @type {string} */
          t,
          Kl
        );
      } finally {
        Wn(r);
      }
    }
    return e.special[t](n), Aa(e.version), !0;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.includes(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  deleteProperty(e, t) {
    return e.exclude.includes(t) || (e.exclude.push(t), Aa(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Xa(e, t) {
  return new Proxy(
    {
      props: e,
      exclude: t,
      special: {},
      version: ur(0),
      // TODO this is only necessary because we need to track component
      // destruction inside `prop`, because of `bind:this`, but it
      // seems likely that we can simplify `bind:this` instead
      parent_effect: (
        /** @type {Effect} */
        ze
      )
    },
    rg
  );
}
const og = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Wr(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      Wr(o) && (o = o());
      const i = Sn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (Wr(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Sn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === an || t === Bs) return !1;
    for (let n of e.props)
      if (Wr(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (Wr(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function Fe(...e) {
  return new Proxy({ props: e }, og);
}
function y(e, t, n, r) {
  var o = !Br || (n & Of) !== 0, i = (n & Df) !== 0, s = (n & Vf) !== 0, a = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, a = s ? dt(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (i) {
    var p = an in e || Bs in e;
    d = Sn(e, t)?.set ?? (p && t in e ? (x) => e[t] = x : void 0);
  }
  var f, g = !1;
  i ? [f, g] = tg(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = c(), d && (o && Jf(), d(f)));
  var h;
  if (o ? h = () => {
    var x = (
      /** @type {V} */
      e[t]
    );
    return x === void 0 ? c() : (l = !0, x);
  } : h = () => {
    var x = (
      /** @type {V} */
      e[t]
    );
    return x !== void 0 && (a = /** @type {V} */
    void 0), x === void 0 ? a : x;
  }, o && (n & Kl) === 0)
    return h;
  if (d) {
    var v = e.$$legacy;
    return function(x, $) {
      return arguments.length > 0 ? ((!o || !$ || v || g) && d($ ? h() : x), x) : h();
    };
  }
  var C = !1, w = ((n & Nf) !== 0 ? qr : Ks)(() => (C = !1, h()));
  i && u(w);
  var E = (
    /** @type {Effect} */
    ze
  );
  return function(x, $) {
    if (arguments.length > 0) {
      const k = $ ? u(w) : o && i ? jt(x) : x;
      return Y(w, k), C = !0, a !== void 0 && (a = k), x;
    }
    return Yn && C || (E.f & Ci) !== 0 ? w.v : u(w);
  };
}
function ig(e) {
  return new sg(e);
}
class sg {
  /** @type {any} */
  #t;
  /** @type {Record<string, any>} */
  #e;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    var n = /* @__PURE__ */ new Map(), r = (i, s) => {
      var a = /* @__PURE__ */ ou(s, !1, !1);
      return n.set(i, a), a;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(i, s) {
          return u(n.get(s) ?? r(s, Reflect.get(i, s)));
        },
        has(i, s) {
          return s === Bs ? !0 : (u(n.get(s) ?? r(s, Reflect.get(i, s))), Reflect.has(i, s));
        },
        set(i, s, a) {
          return Y(n.get(s) ?? r(s, a), a), Reflect.set(i, s, a);
        }
      }
    );
    this.#e = (t.hydrate ? Rp : Tu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    }), (!t?.props?.$$host || t.sync === !1) && m(), this.#t = o.$$events;
    for (const i of Object.keys(this.#e))
      i === "$set" || i === "$destroy" || i === "$on" || ni(this, i, {
        get() {
          return this.#e[i];
        },
        /** @param {any} value */
        set(s) {
          this.#e[i] = s;
        },
        enumerable: !0
      });
    this.#e.$set = /** @param {Record<string, any>} next */
    (i) => {
      Object.assign(o, i);
    }, this.#e.$destroy = () => {
      Ip(this.#e);
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    this.#e.$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    this.#t[t] = this.#t[t] || [];
    const r = (...o) => n.call(this, ...o);
    return this.#t[t].push(r), () => {
      this.#t[t] = this.#t[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    this.#e.$destroy();
  }
}
let zu;
typeof HTMLElement == "function" && (zu = class extends HTMLElement {
  /** The Svelte component constructor */
  $$ctor;
  /** Slots */
  $$s;
  /** @type {any} The Svelte component instance */
  $$c;
  /** Whether or not the custom element is connected */
  $$cn = !1;
  /** @type {Record<string, any>} Component props data */
  $$d = {};
  /** `true` if currently in the process of reflecting component props back to attributes */
  $$r = !1;
  /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
  $$p_d = {};
  /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
  $$l = {};
  /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
  $$l_u = /* @__PURE__ */ new Map();
  /** @type {any} The managed render effect for reflecting attributes */
  $$me;
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, t, n) {
    super(), this.$$ctor = e, this.$$s = t, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, t, n) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(t), this.$$c) {
      const r = this.$$c.$on(e, t);
      this.$$l_u.set(t, r);
    }
    super.addEventListener(e, t, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, t, n) {
    if (super.removeEventListener(e, t, n), this.$$c) {
      const r = this.$$l_u.get(t);
      r && (r(), this.$$l_u.delete(t));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(r) {
        return (o) => {
          const i = document.createElement("slot");
          r !== "default" && (i.name = r), N(o, i);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const t = {}, n = ag(this);
      for (const r of this.$$s)
        r in n && (r === "default" && !this.$$d.children ? (this.$$d.children = e(r), t.default = !0) : t[r] = e(r));
      for (const r of this.attributes) {
        const o = this.$$g_p(r.name);
        o in this.$$d || (this.$$d[o] = Xo(o, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = ig({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: t,
          $$host: this
        }
      }), this.$$me = Fs(() => {
        _o(() => {
          this.$$r = !0;
          for (const r of ti(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const o = Xo(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, o);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const o of this.$$l[r]) {
          const i = this.$$c.$on(r, o);
          this.$$l_u.set(o, i);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(e, t, n) {
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = Xo(e, n, this.$$p_d, "toProp"), this.$$c?.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return ti(this.$$p_d).find(
      (t) => this.$$p_d[t].attribute === e || !this.$$p_d[t].attribute && t.toLowerCase() === e
    ) || e;
  }
});
function Xo(e, t, n, r) {
  const o = n[e]?.type;
  if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (o) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (o) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function ag(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ie(e, t, n, r, o, i) {
  let s = class extends zu {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ti(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return ti(t).forEach((a) => {
    ni(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        l = Xo(a, l, t), this.$$d[a] = l;
        var c = this.$$c;
        if (c) {
          var d = Sn(c, a)?.get;
          d ? c[a] = l : c.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    ni(s.prototype, a, {
      get() {
        return this.$$c?.[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
var lg = { value: () => {
} };
function Ti() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Uo(n);
}
function Uo(e) {
  this._ = e;
}
function ug(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Uo.prototype = Ti.prototype = {
  constructor: Uo,
  on: function(e, t) {
    var n = this._, r = ug(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = cg(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = Ua(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = Ua(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Uo(e);
  },
  call: function(e, t) {
    if ((o = arguments.length - 2) > 0) for (var n = new Array(o), r = 0, o, i; r < o; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (i = this._[e], r = 0, o = i.length; r < o; ++r) i[r].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var r = this._[e], o = 0, i = r.length; o < i; ++o) r[o].value.apply(t, n);
  }
};
function cg(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function Ua(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = lg, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var hs = "http://www.w3.org/1999/xhtml";
const Ga = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: hs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Mi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ga.hasOwnProperty(t) ? { space: Ga[t], local: e } : e;
}
function dg(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === hs && t.documentElement.namespaceURI === hs ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function fg(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Ru(e) {
  var t = Mi(e);
  return (t.local ? fg : dg)(t);
}
function pg() {
}
function na(e) {
  return e == null ? pg : function() {
    return this.querySelector(e);
  };
}
function gg(e) {
  typeof e != "function" && (e = na(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, c, d = 0; d < s; ++d)
      (l = i[d]) && (c = e.call(l, l.__data__, d, i)) && ("__data__" in l && (c.__data__ = l.__data__), a[d] = c);
  return new It(r, this._parents);
}
function hg(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function vg() {
  return [];
}
function Iu(e) {
  return e == null ? vg : function() {
    return this.querySelectorAll(e);
  };
}
function mg(e) {
  return function() {
    return hg(e.apply(this, arguments));
  };
}
function yg(e) {
  typeof e == "function" ? e = mg(e) : e = Iu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && (r.push(e.call(l, l.__data__, c, s)), o.push(l));
  return new It(r, o);
}
function Bu(e) {
  return function() {
    return this.matches(e);
  };
}
function qu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var wg = Array.prototype.find;
function bg(e) {
  return function() {
    return wg.call(this.children, e);
  };
}
function xg() {
  return this.firstElementChild;
}
function $g(e) {
  return this.select(e == null ? xg : bg(typeof e == "function" ? e : qu(e)));
}
var kg = Array.prototype.filter;
function Cg() {
  return Array.from(this.children);
}
function _g(e) {
  return function() {
    return kg.call(this.children, e);
  };
}
function Sg(e) {
  return this.selectAll(e == null ? Cg : _g(typeof e == "function" ? e : qu(e)));
}
function Eg(e) {
  typeof e != "function" && (e = Bu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new It(r, this._parents);
}
function Zu(e) {
  return new Array(e.length);
}
function Pg() {
  return new It(this._enter || this._groups.map(Zu), this._parents);
}
function ai(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
ai.prototype = {
  constructor: ai,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function Lg(e) {
  return function() {
    return e;
  };
}
function Tg(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, c = i.length; s < c; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new ai(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function Mg(e, t, n, r, o, i, s) {
  var a, l, c = /* @__PURE__ */ new Map(), d = t.length, p = i.length, f = new Array(d), g;
  for (a = 0; a < d; ++a)
    (l = t[a]) && (f[a] = g = s.call(l, l.__data__, a, t) + "", c.has(g) ? o[a] = l : c.set(g, l));
  for (a = 0; a < p; ++a)
    g = s.call(e, i[a], a, i) + "", (l = c.get(g)) ? (r[a] = l, l.__data__ = i[a], c.delete(g)) : n[a] = new ai(e, i[a]);
  for (a = 0; a < d; ++a)
    (l = t[a]) && c.get(f[a]) === l && (o[a] = l);
}
function Ng(e) {
  return e.__data__;
}
function Og(e, t) {
  if (!arguments.length) return Array.from(this, Ng);
  var n = t ? Mg : Tg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = Lg(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), c = 0; c < i; ++c) {
    var d = r[c], p = o[c], f = p.length, g = Dg(e.call(d, d && d.__data__, c, r)), h = g.length, v = a[c] = new Array(h), C = s[c] = new Array(h), w = l[c] = new Array(f);
    n(d, p, v, C, w, g, t);
    for (var E = 0, x = 0, $, k; E < h; ++E)
      if ($ = v[E]) {
        for (E >= x && (x = E + 1); !(k = C[x]) && ++x < h; ) ;
        $._next = k || null;
      }
  }
  return s = new It(s, r), s._enter = a, s._exit = l, s;
}
function Dg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Vg() {
  return new It(this._exit || this._groups.map(Zu), this._parents);
}
function Ag(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function Hg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var c = n[l], d = r[l], p = c.length, f = a[l] = new Array(p), g, h = 0; h < p; ++h)
      (g = c[h] || d[h]) && (f[h] = g);
  for (; l < o; ++l)
    a[l] = n[l];
  return new It(a, this._parents);
}
function zg() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function Rg(e) {
  e || (e = Ig);
  function t(p, f) {
    return p && f ? e(p.__data__, f.__data__) : !p - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), c, d = 0; d < a; ++d)
      (c = s[d]) && (l[d] = c);
    l.sort(t);
  }
  return new It(o, this._parents).order();
}
function Ig(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Bg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function qg() {
  return Array.from(this);
}
function Zg() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function Kg() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function jg() {
  return !this.node();
}
function Yg(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Fg(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Wg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Xg(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Ug(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Gg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Jg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Qg(e, t) {
  var n = Mi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Wg : Fg : typeof t == "function" ? n.local ? Jg : Gg : n.local ? Ug : Xg)(n, t));
}
function Ku(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function eh(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function th(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function nh(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function rh(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? eh : typeof t == "function" ? nh : th)(e, t, n ?? "")) : Or(this.node(), e);
}
function Or(e, t) {
  return e.style.getPropertyValue(t) || Ku(e).getComputedStyle(e, null).getPropertyValue(t);
}
function oh(e) {
  return function() {
    delete this[e];
  };
}
function ih(e, t) {
  return function() {
    this[e] = t;
  };
}
function sh(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function ah(e, t) {
  return arguments.length > 1 ? this.each((t == null ? oh : typeof t == "function" ? sh : ih)(e, t)) : this.node()[e];
}
function ju(e) {
  return e.trim().split(/^|\s+/);
}
function ra(e) {
  return e.classList || new Yu(e);
}
function Yu(e) {
  this._node = e, this._names = ju(e.getAttribute("class") || "");
}
Yu.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function Fu(e, t) {
  for (var n = ra(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Wu(e, t) {
  for (var n = ra(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function lh(e) {
  return function() {
    Fu(this, e);
  };
}
function uh(e) {
  return function() {
    Wu(this, e);
  };
}
function ch(e, t) {
  return function() {
    (t.apply(this, arguments) ? Fu : Wu)(this, e);
  };
}
function dh(e, t) {
  var n = ju(e + "");
  if (arguments.length < 2) {
    for (var r = ra(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? ch : t ? lh : uh)(n, t));
}
function fh() {
  this.textContent = "";
}
function ph(e) {
  return function() {
    this.textContent = e;
  };
}
function gh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function hh(e) {
  return arguments.length ? this.each(e == null ? fh : (typeof e == "function" ? gh : ph)(e)) : this.node().textContent;
}
function vh() {
  this.innerHTML = "";
}
function mh(e) {
  return function() {
    this.innerHTML = e;
  };
}
function yh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function wh(e) {
  return arguments.length ? this.each(e == null ? vh : (typeof e == "function" ? yh : mh)(e)) : this.node().innerHTML;
}
function bh() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function xh() {
  return this.each(bh);
}
function $h() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function kh() {
  return this.each($h);
}
function Ch(e) {
  var t = typeof e == "function" ? e : Ru(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function _h() {
  return null;
}
function Sh(e, t) {
  var n = typeof e == "function" ? e : Ru(e), r = t == null ? _h : typeof t == "function" ? t : na(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Eh() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Ph() {
  return this.each(Eh);
}
function Lh() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Th() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Mh(e) {
  return this.select(e ? Th : Lh);
}
function Nh(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function Oh(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function Dh(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function Vh(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function Ah(e, t, n) {
  return function() {
    var r = this.__on, o, i = Oh(t);
    if (r) {
      for (var s = 0, a = r.length; s < a; ++s)
        if ((o = r[s]).type === e.type && o.name === e.name) {
          this.removeEventListener(o.type, o.listener, o.options), this.addEventListener(o.type, o.listener = i, o.options = n), o.value = t;
          return;
        }
    }
    this.addEventListener(e.type, i, n), o = { type: e.type, name: e.name, value: t, listener: i, options: n }, r ? r.push(o) : this.__on = [o];
  };
}
function Hh(e, t, n) {
  var r = Dh(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, c = a.length, d; l < c; ++l)
        for (o = 0, d = a[l]; o < i; ++o)
          if ((s = r[o]).type === d.type && s.name === d.name)
            return d.value;
    }
    return;
  }
  for (a = t ? Ah : Vh, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Xu(e, t, n) {
  var r = Ku(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function zh(e, t) {
  return function() {
    return Xu(this, e, t);
  };
}
function Rh(e, t) {
  return function() {
    return Xu(this, e, t.apply(this, arguments));
  };
}
function Ih(e, t) {
  return this.each((typeof t == "function" ? Rh : zh)(e, t));
}
function* Bh() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Uu = [null];
function It(e, t) {
  this._groups = e, this._parents = t;
}
function Eo() {
  return new It([[document.documentElement]], Uu);
}
function qh() {
  return this;
}
It.prototype = Eo.prototype = {
  constructor: It,
  select: gg,
  selectAll: yg,
  selectChild: $g,
  selectChildren: Sg,
  filter: Eg,
  data: Og,
  enter: Pg,
  exit: Vg,
  join: Ag,
  merge: Hg,
  selection: qh,
  order: zg,
  sort: Rg,
  call: Bg,
  nodes: qg,
  node: Zg,
  size: Kg,
  empty: jg,
  each: Yg,
  attr: Qg,
  style: rh,
  property: ah,
  classed: dh,
  text: hh,
  html: wh,
  raise: xh,
  lower: kh,
  append: Ch,
  insert: Sh,
  remove: Ph,
  clone: Mh,
  datum: Nh,
  on: Hh,
  dispatch: Ih,
  [Symbol.iterator]: Bh
};
function Kt(e) {
  return typeof e == "string" ? new It([[document.querySelector(e)]], [document.documentElement]) : new It([[e]], Uu);
}
function Zh(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function Ft(e, t) {
  if (e = Zh(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (t.getBoundingClientRect) {
      var o = t.getBoundingClientRect();
      return [e.clientX - o.left - t.clientLeft, e.clientY - o.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const Kh = { passive: !1 }, uo = { capture: !0, passive: !1 };
function Fi(e) {
  e.stopImmediatePropagation();
}
function _r(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Gu(e) {
  var t = e.document.documentElement, n = Kt(e).on("dragstart.drag", _r, uo);
  "onselectstart" in t ? n.on("selectstart.drag", _r, uo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Ju(e, t) {
  var n = e.document.documentElement, r = Kt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", _r, uo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Io = (e) => () => e;
function vs(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: a,
  dx: l,
  dy: c,
  dispatch: d
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: o, enumerable: !0, configurable: !0 },
    active: { value: i, enumerable: !0, configurable: !0 },
    x: { value: s, enumerable: !0, configurable: !0 },
    y: { value: a, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: c, enumerable: !0, configurable: !0 },
    _: { value: d }
  });
}
vs.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function jh(e) {
  return !e.ctrlKey && !e.button;
}
function Yh() {
  return this.parentNode;
}
function Fh(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Wh() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Xh() {
  var e = jh, t = Yh, n = Fh, r = Wh, o = {}, i = Ti("start", "drag", "end"), s = 0, a, l, c, d, p = 0;
  function f($) {
    $.on("mousedown.drag", g).filter(r).on("touchstart.drag", C).on("touchmove.drag", w, Kh).on("touchend.drag touchcancel.drag", E).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g($, k) {
    if (!(d || !e.call(this, $, k))) {
      var M = x(this, t.call(this, $, k), $, k, "mouse");
      M && (Kt($.view).on("mousemove.drag", h, uo).on("mouseup.drag", v, uo), Gu($.view), Fi($), c = !1, a = $.clientX, l = $.clientY, M("start", $));
    }
  }
  function h($) {
    if (_r($), !c) {
      var k = $.clientX - a, M = $.clientY - l;
      c = k * k + M * M > p;
    }
    o.mouse("drag", $);
  }
  function v($) {
    Kt($.view).on("mousemove.drag mouseup.drag", null), Ju($.view, c), _r($), o.mouse("end", $);
  }
  function C($, k) {
    if (e.call(this, $, k)) {
      var M = $.changedTouches, z = t.call(this, $, k), q = M.length, U, j;
      for (U = 0; U < q; ++U)
        (j = x(this, z, $, k, M[U].identifier, M[U])) && (Fi($), j("start", $, M[U]));
    }
  }
  function w($) {
    var k = $.changedTouches, M = k.length, z, q;
    for (z = 0; z < M; ++z)
      (q = o[k[z].identifier]) && (_r($), q("drag", $, k[z]));
  }
  function E($) {
    var k = $.changedTouches, M = k.length, z, q;
    for (d && clearTimeout(d), d = setTimeout(function() {
      d = null;
    }, 500), z = 0; z < M; ++z)
      (q = o[k[z].identifier]) && (Fi($), q("end", $, k[z]));
  }
  function x($, k, M, z, q, U) {
    var j = i.copy(), T = Ft(U || M, k), _, D, b;
    if ((b = n.call($, new vs("beforestart", {
      sourceEvent: M,
      target: f,
      identifier: q,
      active: s,
      x: T[0],
      y: T[1],
      dx: 0,
      dy: 0,
      dispatch: j
    }), z)) != null)
      return _ = b.x - T[0] || 0, D = b.y - T[1] || 0, function P(L, A, B) {
        var O = T, Z;
        switch (L) {
          case "start":
            o[q] = P, Z = s++;
            break;
          case "end":
            delete o[q], --s;
          // falls through
          case "drag":
            T = Ft(B || A, k), Z = s;
            break;
        }
        j.call(
          L,
          $,
          new vs(L, {
            sourceEvent: A,
            subject: b,
            target: f,
            identifier: q,
            active: Z,
            x: T[0] + _,
            y: T[1] + D,
            dx: T[0] - O[0],
            dy: T[1] - O[1],
            dispatch: j
          }),
          z
        );
      };
  }
  return f.filter = function($) {
    return arguments.length ? (e = typeof $ == "function" ? $ : Io(!!$), f) : e;
  }, f.container = function($) {
    return arguments.length ? (t = typeof $ == "function" ? $ : Io($), f) : t;
  }, f.subject = function($) {
    return arguments.length ? (n = typeof $ == "function" ? $ : Io($), f) : n;
  }, f.touchable = function($) {
    return arguments.length ? (r = typeof $ == "function" ? $ : Io(!!$), f) : r;
  }, f.on = function() {
    var $ = i.on.apply(i, arguments);
    return $ === i ? f : $;
  }, f.clickDistance = function($) {
    return arguments.length ? (p = ($ = +$) * $, f) : Math.sqrt(p);
  }, f;
}
function oa(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Qu(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Po() {
}
var co = 0.7, li = 1 / co, Sr = "\\s*([+-]?\\d+)\\s*", fo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", un = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Uh = /^#([0-9a-f]{3,8})$/, Gh = new RegExp(`^rgb\\(${Sr},${Sr},${Sr}\\)$`), Jh = new RegExp(`^rgb\\(${un},${un},${un}\\)$`), Qh = new RegExp(`^rgba\\(${Sr},${Sr},${Sr},${fo}\\)$`), e1 = new RegExp(`^rgba\\(${un},${un},${un},${fo}\\)$`), t1 = new RegExp(`^hsl\\(${fo},${un},${un}\\)$`), n1 = new RegExp(`^hsla\\(${fo},${un},${un},${fo}\\)$`), Ja = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
oa(Po, cr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Qa,
  // Deprecated! Use color.formatHex.
  formatHex: Qa,
  formatHex8: r1,
  formatHsl: o1,
  formatRgb: el,
  toString: el
});
function Qa() {
  return this.rgb().formatHex();
}
function r1() {
  return this.rgb().formatHex8();
}
function o1() {
  return ec(this).formatHsl();
}
function el() {
  return this.rgb().formatRgb();
}
function cr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Uh.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? tl(t) : n === 3 ? new Pt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Bo(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Bo(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Gh.exec(e)) ? new Pt(t[1], t[2], t[3], 1) : (t = Jh.exec(e)) ? new Pt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Qh.exec(e)) ? Bo(t[1], t[2], t[3], t[4]) : (t = e1.exec(e)) ? Bo(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = t1.exec(e)) ? ol(t[1], t[2] / 100, t[3] / 100, 1) : (t = n1.exec(e)) ? ol(t[1], t[2] / 100, t[3] / 100, t[4]) : Ja.hasOwnProperty(e) ? tl(Ja[e]) : e === "transparent" ? new Pt(NaN, NaN, NaN, 0) : null;
}
function tl(e) {
  return new Pt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Bo(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new Pt(e, t, n, r);
}
function i1(e) {
  return e instanceof Po || (e = cr(e)), e ? (e = e.rgb(), new Pt(e.r, e.g, e.b, e.opacity)) : new Pt();
}
function ms(e, t, n, r) {
  return arguments.length === 1 ? i1(e) : new Pt(e, t, n, r ?? 1);
}
function Pt(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
oa(Pt, ms, Qu(Po, {
  brighter(e) {
    return e = e == null ? li : Math.pow(li, e), new Pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? co : Math.pow(co, e), new Pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Pt(lr(this.r), lr(this.g), lr(this.b), ui(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: nl,
  // Deprecated! Use color.formatHex.
  formatHex: nl,
  formatHex8: s1,
  formatRgb: rl,
  toString: rl
}));
function nl() {
  return `#${rr(this.r)}${rr(this.g)}${rr(this.b)}`;
}
function s1() {
  return `#${rr(this.r)}${rr(this.g)}${rr(this.b)}${rr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rl() {
  const e = ui(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${lr(this.r)}, ${lr(this.g)}, ${lr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ui(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function lr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function rr(e) {
  return e = lr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ol(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Xt(e, t, n, r);
}
function ec(e) {
  if (e instanceof Xt) return new Xt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Po || (e = cr(e)), !e) return new Xt();
  if (e instanceof Xt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Xt(s, a, l, e.opacity);
}
function a1(e, t, n, r) {
  return arguments.length === 1 ? ec(e) : new Xt(e, t, n, r ?? 1);
}
function Xt(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
oa(Xt, a1, Qu(Po, {
  brighter(e) {
    return e = e == null ? li : Math.pow(li, e), new Xt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? co : Math.pow(co, e), new Xt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new Pt(
      Wi(e >= 240 ? e - 240 : e + 120, o, r),
      Wi(e, o, r),
      Wi(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Xt(il(this.h), qo(this.s), qo(this.l), ui(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ui(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${il(this.h)}, ${qo(this.s) * 100}%, ${qo(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function il(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function qo(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Wi(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ia = (e) => () => e;
function l1(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function u1(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function c1(e) {
  return (e = +e) == 1 ? tc : function(t, n) {
    return n - t ? u1(t, n, e) : ia(isNaN(t) ? n : t);
  };
}
function tc(e, t) {
  var n = t - e;
  return n ? l1(e, n) : ia(isNaN(e) ? t : e);
}
const ci = function e(t) {
  var n = c1(t);
  function r(o, i) {
    var s = n((o = ms(o)).r, (i = ms(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), c = tc(o.opacity, i.opacity);
    return function(d) {
      return o.r = s(d), o.g = a(d), o.b = l(d), o.opacity = c(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function d1(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(i) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - i) + t[o] * i;
    return r;
  };
}
function f1(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function p1(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), i = new Array(n), s;
  for (s = 0; s < r; ++s) o[s] = no(e[s], t[s]);
  for (; s < n; ++s) i[s] = t[s];
  return function(a) {
    for (s = 0; s < r; ++s) i[s] = o[s](a);
    return i;
  };
}
function g1(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function rn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function h1(e, t) {
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = no(e[o], t[o]) : r[o] = t[o];
  return function(i) {
    for (o in n) r[o] = n[o](i);
    return r;
  };
}
var ys = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Xi = new RegExp(ys.source, "g");
function v1(e) {
  return function() {
    return e;
  };
}
function m1(e) {
  return function(t) {
    return e(t) + "";
  };
}
function nc(e, t) {
  var n = ys.lastIndex = Xi.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = ys.exec(e)) && (o = Xi.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: rn(r, o) })), n = Xi.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? m1(l[0].x) : v1(t) : (t = l.length, function(c) {
    for (var d = 0, p; d < t; ++d) a[(p = l[d]).i] = p.x(c);
    return a.join("");
  });
}
function no(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? ia(t) : (n === "number" ? rn : n === "string" ? (r = cr(t)) ? (t = r, ci) : nc : t instanceof cr ? ci : t instanceof Date ? g1 : f1(t) ? d1 : Array.isArray(t) ? p1 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? h1 : rn)(e, t);
}
var sl = 180 / Math.PI, rc = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function oc(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * sl,
    skewX: Math.atan(l) * sl,
    scaleX: s,
    scaleY: a
  };
}
var Zo;
function y1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? rc : oc(t.a, t.b, t.c, t.d, t.e, t.f);
}
function w1(e) {
  return e == null || (Zo || (Zo = document.createElementNS("http://www.w3.org/2000/svg", "g")), Zo.setAttribute("transform", e), !(e = Zo.transform.baseVal.consolidate())) ? rc : (e = e.matrix, oc(e.a, e.b, e.c, e.d, e.e, e.f));
}
function ic(e, t, n, r) {
  function o(c) {
    return c.length ? c.pop() + " " : "";
  }
  function i(c, d, p, f, g, h) {
    if (c !== p || d !== f) {
      var v = g.push("translate(", null, t, null, n);
      h.push({ i: v - 4, x: rn(c, p) }, { i: v - 2, x: rn(d, f) });
    } else (p || f) && g.push("translate(" + p + t + f + n);
  }
  function s(c, d, p, f) {
    c !== d ? (c - d > 180 ? d += 360 : d - c > 180 && (c += 360), f.push({ i: p.push(o(p) + "rotate(", null, r) - 2, x: rn(c, d) })) : d && p.push(o(p) + "rotate(" + d + r);
  }
  function a(c, d, p, f) {
    c !== d ? f.push({ i: p.push(o(p) + "skewX(", null, r) - 2, x: rn(c, d) }) : d && p.push(o(p) + "skewX(" + d + r);
  }
  function l(c, d, p, f, g, h) {
    if (c !== p || d !== f) {
      var v = g.push(o(g) + "scale(", null, ",", null, ")");
      h.push({ i: v - 4, x: rn(c, p) }, { i: v - 2, x: rn(d, f) });
    } else (p !== 1 || f !== 1) && g.push(o(g) + "scale(" + p + "," + f + ")");
  }
  return function(c, d) {
    var p = [], f = [];
    return c = e(c), d = e(d), i(c.translateX, c.translateY, d.translateX, d.translateY, p, f), s(c.rotate, d.rotate, p, f), a(c.skewX, d.skewX, p, f), l(c.scaleX, c.scaleY, d.scaleX, d.scaleY, p, f), c = d = null, function(g) {
      for (var h = -1, v = f.length, C; ++h < v; ) p[(C = f[h]).i] = C.x(g);
      return p.join("");
    };
  };
}
var b1 = ic(y1, "px, ", "px)", "deg)"), x1 = ic(w1, ", ", ")", ")"), $1 = 1e-12;
function al(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function k1(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function C1(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Go = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], c = i[2], d = s[0], p = s[1], f = s[2], g = d - a, h = p - l, v = g * g + h * h, C, w;
    if (v < $1)
      w = Math.log(f / c) / t, C = function(z) {
        return [
          a + z * g,
          l + z * h,
          c * Math.exp(t * z * w)
        ];
      };
    else {
      var E = Math.sqrt(v), x = (f * f - c * c + r * v) / (2 * c * n * E), $ = (f * f - c * c - r * v) / (2 * f * n * E), k = Math.log(Math.sqrt(x * x + 1) - x), M = Math.log(Math.sqrt($ * $ + 1) - $);
      w = (M - k) / t, C = function(z) {
        var q = z * w, U = al(k), j = c / (n * E) * (U * C1(t * q + k) - k1(k));
        return [
          a + j * g,
          l + j * h,
          c * U / al(t * q + k)
        ];
      };
    }
    return C.duration = w * 1e3 * t / Math.SQRT2, C;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Dr = 0, Jr = 0, Xr = 0, sc = 1e3, di, Qr, fi = 0, dr = 0, Ni = 0, po = typeof performance == "object" && performance.now ? performance : Date, ac = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function sa() {
  return dr || (ac(_1), dr = po.now() + Ni);
}
function _1() {
  dr = 0;
}
function pi() {
  this._call = this._time = this._next = null;
}
pi.prototype = lc.prototype = {
  constructor: pi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? sa() : +n) + (t == null ? 0 : +t), !this._next && Qr !== this && (Qr ? Qr._next = this : di = this, Qr = this), this._call = e, this._time = n, ws();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ws());
  }
};
function lc(e, t, n) {
  var r = new pi();
  return r.restart(e, t, n), r;
}
function S1() {
  sa(), ++Dr;
  for (var e = di, t; e; )
    (t = dr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Dr;
}
function ll() {
  dr = (fi = po.now()) + Ni, Dr = Jr = 0;
  try {
    S1();
  } finally {
    Dr = 0, P1(), dr = 0;
  }
}
function E1() {
  var e = po.now(), t = e - fi;
  t > sc && (Ni -= t, fi = e);
}
function P1() {
  for (var e, t = di, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : di = n);
  Qr = e, ws(r);
}
function ws(e) {
  if (!Dr) {
    Jr && (Jr = clearTimeout(Jr));
    var t = e - dr;
    t > 24 ? (e < 1 / 0 && (Jr = setTimeout(ll, e - po.now() - Ni)), Xr && (Xr = clearInterval(Xr))) : (Xr || (fi = po.now(), Xr = setInterval(E1, sc)), Dr = 1, ac(ll));
  }
}
function ul(e, t, n) {
  var r = new pi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var L1 = Ti("start", "end", "cancel", "interrupt"), T1 = [], uc = 0, cl = 1, bs = 2, Jo = 3, dl = 4, xs = 5, Qo = 6;
function Oi(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  M1(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: L1,
    tween: T1,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: uc
  });
}
function aa(e, t) {
  var n = Jt(e, t);
  if (n.state > uc) throw new Error("too late; already scheduled");
  return n;
}
function mn(e, t) {
  var n = Jt(e, t);
  if (n.state > Jo) throw new Error("too late; already running");
  return n;
}
function Jt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function M1(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = lc(i, 0, n.time);
  function i(c) {
    n.state = cl, n.timer.restart(s, n.delay, n.time), n.delay <= c && s(c - n.delay);
  }
  function s(c) {
    var d, p, f, g;
    if (n.state !== cl) return l();
    for (d in r)
      if (g = r[d], g.name === n.name) {
        if (g.state === Jo) return ul(s);
        g.state === dl ? (g.state = Qo, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete r[d]) : +d < t && (g.state = Qo, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete r[d]);
      }
    if (ul(function() {
      n.state === Jo && (n.state = dl, n.timer.restart(a, n.delay, n.time), a(c));
    }), n.state = bs, n.on.call("start", e, e.__data__, n.index, n.group), n.state === bs) {
      for (n.state = Jo, o = new Array(f = n.tween.length), d = 0, p = -1; d < f; ++d)
        (g = n.tween[d].value.call(e, e.__data__, n.index, n.group)) && (o[++p] = g);
      o.length = p + 1;
    }
  }
  function a(c) {
    for (var d = c < n.duration ? n.ease.call(null, c / n.duration) : (n.timer.restart(l), n.state = xs, 1), p = -1, f = o.length; ++p < f; )
      o[p].call(e, d);
    n.state === xs && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Qo, n.timer.stop(), delete r[t];
    for (var c in r) return;
    delete e.__transition;
  }
}
function ei(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > bs && r.state < xs, r.state = Qo, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function N1(e) {
  return this.each(function() {
    ei(this, e);
  });
}
function O1(e, t) {
  var n, r;
  return function() {
    var o = mn(this, e), i = o.tween;
    if (i !== n) {
      r = n = i;
      for (var s = 0, a = r.length; s < a; ++s)
        if (r[s].name === t) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    o.tween = r;
  };
}
function D1(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = mn(this, e), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var a = { name: t, value: n }, l = 0, c = o.length; l < c; ++l)
        if (o[l].name === t) {
          o[l] = a;
          break;
        }
      l === c && o.push(a);
    }
    i.tween = o;
  };
}
function V1(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = Jt(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? O1 : D1)(n, e, t));
}
function la(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = mn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return Jt(o, r).value[t];
  };
}
function cc(e, t) {
  var n;
  return (typeof t == "number" ? rn : t instanceof cr ? ci : (n = cr(t)) ? (t = n, ci) : nc)(e, t);
}
function A1(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function H1(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function z1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function R1(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function I1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function B1(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function q1(e, t) {
  var n = Mi(e), r = n === "transform" ? x1 : cc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? B1 : I1)(n, r, la(this, "attr." + e, t)) : t == null ? (n.local ? H1 : A1)(n) : (n.local ? R1 : z1)(n, r, t));
}
function Z1(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function K1(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function j1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && K1(e, i)), n;
  }
  return o._value = t, o;
}
function Y1(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Z1(e, i)), n;
  }
  return o._value = t, o;
}
function F1(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Mi(e);
  return this.tween(n, (r.local ? j1 : Y1)(r, t));
}
function W1(e, t) {
  return function() {
    aa(this, e).delay = +t.apply(this, arguments);
  };
}
function X1(e, t) {
  return t = +t, function() {
    aa(this, e).delay = t;
  };
}
function U1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? W1 : X1)(t, e)) : Jt(this.node(), t).delay;
}
function G1(e, t) {
  return function() {
    mn(this, e).duration = +t.apply(this, arguments);
  };
}
function J1(e, t) {
  return t = +t, function() {
    mn(this, e).duration = t;
  };
}
function Q1(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? G1 : J1)(t, e)) : Jt(this.node(), t).duration;
}
function ev(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    mn(this, e).ease = t;
  };
}
function tv(e) {
  var t = this._id;
  return arguments.length ? this.each(ev(t, e)) : Jt(this.node(), t).ease;
}
function nv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    mn(this, e).ease = n;
  };
}
function rv(e) {
  if (typeof e != "function") throw new Error();
  return this.each(nv(this._id, e));
}
function ov(e) {
  typeof e != "function" && (e = Bu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, c = 0; c < s; ++c)
      (l = i[c]) && e.call(l, l.__data__, c, i) && a.push(l);
  return new Nn(r, this._parents, this._name, this._id);
}
function iv(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], c = n[a], d = l.length, p = s[a] = new Array(d), f, g = 0; g < d; ++g)
      (f = l[g] || c[g]) && (p[g] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new Nn(s, this._parents, this._name, this._id);
}
function sv(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function av(e, t, n) {
  var r, o, i = sv(t) ? aa : mn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function lv(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Jt(this.node(), n).on.on(e) : this.each(av(n, e, t));
}
function uv(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function cv() {
  return this.on("end.remove", uv(this._id));
}
function dv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = na(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, c = i[s] = new Array(l), d, p, f = 0; f < l; ++f)
      (d = a[f]) && (p = e.call(d, d.__data__, f, a)) && ("__data__" in d && (p.__data__ = d.__data__), c[f] = p, Oi(c[f], t, n, f, c, Jt(d, n)));
  return new Nn(i, this._parents, t, n);
}
function fv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Iu(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], c = l.length, d, p = 0; p < c; ++p)
      if (d = l[p]) {
        for (var f = e.call(d, d.__data__, p, l), g, h = Jt(d, n), v = 0, C = f.length; v < C; ++v)
          (g = f[v]) && Oi(g, t, n, v, f, h);
        i.push(f), s.push(d);
      }
  return new Nn(i, s, t, n);
}
var pv = Eo.prototype.constructor;
function gv() {
  return new pv(this._groups, this._parents);
}
function hv(e, t) {
  var n, r, o;
  return function() {
    var i = Or(this, e), s = (this.style.removeProperty(e), Or(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function dc(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function vv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Or(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function mv(e, t, n) {
  var r, o, i;
  return function() {
    var s = Or(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Or(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function yv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = mn(this, e), c = l.on, d = l.value[i] == null ? a || (a = dc(t)) : void 0;
    (c !== n || o !== d) && (r = (n = c).copy()).on(s, o = d), l.on = r;
  };
}
function wv(e, t, n) {
  var r = (e += "") == "transform" ? b1 : cc;
  return t == null ? this.styleTween(e, hv(e, r)).on("end.style." + e, dc(e)) : typeof t == "function" ? this.styleTween(e, mv(e, r, la(this, "style." + e, t))).each(yv(this._id, e)) : this.styleTween(e, vv(e, r, t), n).on("end.style." + e, null);
}
function bv(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function xv(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && bv(e, s, n)), r;
  }
  return i._value = t, i;
}
function $v(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, xv(e, t, n ?? ""));
}
function kv(e) {
  return function() {
    this.textContent = e;
  };
}
function Cv(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function _v(e) {
  return this.tween("text", typeof e == "function" ? Cv(la(this, "text", e)) : kv(e == null ? "" : e + ""));
}
function Sv(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function Ev(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && Sv(o)), t;
  }
  return r._value = e, r;
}
function Pv(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, Ev(e));
}
function Lv() {
  for (var e = this._name, t = this._id, n = fc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      if (l = s[c]) {
        var d = Jt(l, t);
        Oi(l, e, n, c, s, {
          time: d.time + d.delay + d.duration,
          delay: 0,
          duration: d.duration,
          ease: d.ease
        });
      }
  return new Nn(r, this._parents, e, n);
}
function Tv() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var c = mn(this, r), d = c.on;
      d !== e && (t = (e = d).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), c.on = t;
    }), o === 0 && i();
  });
}
var Mv = 0;
function Nn(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function fc() {
  return ++Mv;
}
var xn = Eo.prototype;
Nn.prototype = {
  constructor: Nn,
  select: dv,
  selectAll: fv,
  selectChild: xn.selectChild,
  selectChildren: xn.selectChildren,
  filter: ov,
  merge: iv,
  selection: gv,
  transition: Lv,
  call: xn.call,
  nodes: xn.nodes,
  node: xn.node,
  size: xn.size,
  empty: xn.empty,
  each: xn.each,
  on: lv,
  attr: q1,
  attrTween: F1,
  style: wv,
  styleTween: $v,
  text: _v,
  textTween: Pv,
  remove: cv,
  tween: V1,
  delay: U1,
  duration: Q1,
  ease: tv,
  easeVarying: rv,
  end: Tv,
  [Symbol.iterator]: xn[Symbol.iterator]
};
function Nv(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Ov = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Nv
};
function Dv(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Vv(e) {
  var t, n;
  e instanceof Nn ? (t = e._id, e = e._name) : (t = fc(), (n = Ov).time = sa(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, c = 0; c < a; ++c)
      (l = s[c]) && Oi(l, e, t, c, s, n || Dv(l, t));
  return new Nn(r, this._parents, e, t);
}
Eo.prototype.interrupt = N1;
Eo.prototype.transition = Vv;
const Ko = (e) => () => e;
function Av(e, {
  sourceEvent: t,
  target: n,
  transform: r,
  dispatch: o
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: r, enumerable: !0, configurable: !0 },
    _: { value: o }
  });
}
function kn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
kn.prototype = {
  constructor: kn,
  scale: function(e) {
    return e === 1 ? this : new kn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new kn(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var Di = new kn(1, 0, 0);
pc.prototype = kn.prototype;
function pc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Di;
  return e.__zoom;
}
function Ui(e) {
  e.stopImmediatePropagation();
}
function Ur(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Hv(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function zv() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function fl() {
  return this.__zoom || Di;
}
function Rv(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Iv() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Bv(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function gc() {
  var e = Hv, t = zv, n = Bv, r = Rv, o = Iv, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Go, c = Ti("start", "zoom", "end"), d, p, f, g = 500, h = 150, v = 0, C = 10;
  function w(b) {
    b.property("__zoom", fl).on("wheel.zoom", q, { passive: !1 }).on("mousedown.zoom", U).on("dblclick.zoom", j).filter(o).on("touchstart.zoom", T).on("touchmove.zoom", _).on("touchend.zoom touchcancel.zoom", D).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  w.transform = function(b, P, L, A) {
    var B = b.selection ? b.selection() : b;
    B.property("__zoom", fl), b !== B ? k(b, P, L, A) : B.interrupt().each(function() {
      M(this, arguments).event(A).start().zoom(null, typeof P == "function" ? P.apply(this, arguments) : P).end();
    });
  }, w.scaleBy = function(b, P, L, A) {
    w.scaleTo(b, function() {
      var B = this.__zoom.k, O = typeof P == "function" ? P.apply(this, arguments) : P;
      return B * O;
    }, L, A);
  }, w.scaleTo = function(b, P, L, A) {
    w.transform(b, function() {
      var B = t.apply(this, arguments), O = this.__zoom, Z = L == null ? $(B) : typeof L == "function" ? L.apply(this, arguments) : L, F = O.invert(Z), X = typeof P == "function" ? P.apply(this, arguments) : P;
      return n(x(E(O, X), Z, F), B, s);
    }, L, A);
  }, w.translateBy = function(b, P, L, A) {
    w.transform(b, function() {
      return n(this.__zoom.translate(
        typeof P == "function" ? P.apply(this, arguments) : P,
        typeof L == "function" ? L.apply(this, arguments) : L
      ), t.apply(this, arguments), s);
    }, null, A);
  }, w.translateTo = function(b, P, L, A, B) {
    w.transform(b, function() {
      var O = t.apply(this, arguments), Z = this.__zoom, F = A == null ? $(O) : typeof A == "function" ? A.apply(this, arguments) : A;
      return n(Di.translate(F[0], F[1]).scale(Z.k).translate(
        typeof P == "function" ? -P.apply(this, arguments) : -P,
        typeof L == "function" ? -L.apply(this, arguments) : -L
      ), O, s);
    }, A, B);
  };
  function E(b, P) {
    return P = Math.max(i[0], Math.min(i[1], P)), P === b.k ? b : new kn(P, b.x, b.y);
  }
  function x(b, P, L) {
    var A = P[0] - L[0] * b.k, B = P[1] - L[1] * b.k;
    return A === b.x && B === b.y ? b : new kn(b.k, A, B);
  }
  function $(b) {
    return [(+b[0][0] + +b[1][0]) / 2, (+b[0][1] + +b[1][1]) / 2];
  }
  function k(b, P, L, A) {
    b.on("start.zoom", function() {
      M(this, arguments).event(A).start();
    }).on("interrupt.zoom end.zoom", function() {
      M(this, arguments).event(A).end();
    }).tween("zoom", function() {
      var B = this, O = arguments, Z = M(B, O).event(A), F = t.apply(B, O), X = L == null ? $(F) : typeof L == "function" ? L.apply(B, O) : L, te = Math.max(F[1][0] - F[0][0], F[1][1] - F[0][1]), W = B.__zoom, pe = typeof P == "function" ? P.apply(B, O) : P, oe = l(W.invert(X).concat(te / W.k), pe.invert(X).concat(te / pe.k));
      return function(ge) {
        if (ge === 1) ge = pe;
        else {
          var G = oe(ge), ke = te / G[2];
          ge = new kn(ke, X[0] - G[0] * ke, X[1] - G[1] * ke);
        }
        Z.zoom(null, ge);
      };
    });
  }
  function M(b, P, L) {
    return !L && b.__zooming || new z(b, P);
  }
  function z(b, P) {
    this.that = b, this.args = P, this.active = 0, this.sourceEvent = null, this.extent = t.apply(b, P), this.taps = 0;
  }
  z.prototype = {
    event: function(b) {
      return b && (this.sourceEvent = b), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(b, P) {
      return this.mouse && b !== "mouse" && (this.mouse[1] = P.invert(this.mouse[0])), this.touch0 && b !== "touch" && (this.touch0[1] = P.invert(this.touch0[0])), this.touch1 && b !== "touch" && (this.touch1[1] = P.invert(this.touch1[0])), this.that.__zoom = P, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(b) {
      var P = Kt(this.that).datum();
      c.call(
        b,
        this.that,
        new Av(b, {
          sourceEvent: this.sourceEvent,
          target: w,
          transform: this.that.__zoom,
          dispatch: c
        }),
        P
      );
    }
  };
  function q(b, ...P) {
    if (!e.apply(this, arguments)) return;
    var L = M(this, P).event(b), A = this.__zoom, B = Math.max(i[0], Math.min(i[1], A.k * Math.pow(2, r.apply(this, arguments)))), O = Ft(b);
    if (L.wheel)
      (L.mouse[0][0] !== O[0] || L.mouse[0][1] !== O[1]) && (L.mouse[1] = A.invert(L.mouse[0] = O)), clearTimeout(L.wheel);
    else {
      if (A.k === B) return;
      L.mouse = [O, A.invert(O)], ei(this), L.start();
    }
    Ur(b), L.wheel = setTimeout(Z, h), L.zoom("mouse", n(x(E(A, B), L.mouse[0], L.mouse[1]), L.extent, s));
    function Z() {
      L.wheel = null, L.end();
    }
  }
  function U(b, ...P) {
    if (f || !e.apply(this, arguments)) return;
    var L = b.currentTarget, A = M(this, P, !0).event(b), B = Kt(b.view).on("mousemove.zoom", X, !0).on("mouseup.zoom", te, !0), O = Ft(b, L), Z = b.clientX, F = b.clientY;
    Gu(b.view), Ui(b), A.mouse = [O, this.__zoom.invert(O)], ei(this), A.start();
    function X(W) {
      if (Ur(W), !A.moved) {
        var pe = W.clientX - Z, oe = W.clientY - F;
        A.moved = pe * pe + oe * oe > v;
      }
      A.event(W).zoom("mouse", n(x(A.that.__zoom, A.mouse[0] = Ft(W, L), A.mouse[1]), A.extent, s));
    }
    function te(W) {
      B.on("mousemove.zoom mouseup.zoom", null), Ju(W.view, A.moved), Ur(W), A.event(W).end();
    }
  }
  function j(b, ...P) {
    if (e.apply(this, arguments)) {
      var L = this.__zoom, A = Ft(b.changedTouches ? b.changedTouches[0] : b, this), B = L.invert(A), O = L.k * (b.shiftKey ? 0.5 : 2), Z = n(x(E(L, O), A, B), t.apply(this, P), s);
      Ur(b), a > 0 ? Kt(this).transition().duration(a).call(k, Z, A, b) : Kt(this).call(w.transform, Z, A, b);
    }
  }
  function T(b, ...P) {
    if (e.apply(this, arguments)) {
      var L = b.touches, A = L.length, B = M(this, P, b.changedTouches.length === A).event(b), O, Z, F, X;
      for (Ui(b), Z = 0; Z < A; ++Z)
        F = L[Z], X = Ft(F, this), X = [X, this.__zoom.invert(X), F.identifier], B.touch0 ? !B.touch1 && B.touch0[2] !== X[2] && (B.touch1 = X, B.taps = 0) : (B.touch0 = X, O = !0, B.taps = 1 + !!d);
      d && (d = clearTimeout(d)), O && (B.taps < 2 && (p = X[0], d = setTimeout(function() {
        d = null;
      }, g)), ei(this), B.start());
    }
  }
  function _(b, ...P) {
    if (this.__zooming) {
      var L = M(this, P).event(b), A = b.changedTouches, B = A.length, O, Z, F, X;
      for (Ur(b), O = 0; O < B; ++O)
        Z = A[O], F = Ft(Z, this), L.touch0 && L.touch0[2] === Z.identifier ? L.touch0[0] = F : L.touch1 && L.touch1[2] === Z.identifier && (L.touch1[0] = F);
      if (Z = L.that.__zoom, L.touch1) {
        var te = L.touch0[0], W = L.touch0[1], pe = L.touch1[0], oe = L.touch1[1], ge = (ge = pe[0] - te[0]) * ge + (ge = pe[1] - te[1]) * ge, G = (G = oe[0] - W[0]) * G + (G = oe[1] - W[1]) * G;
        Z = E(Z, Math.sqrt(ge / G)), F = [(te[0] + pe[0]) / 2, (te[1] + pe[1]) / 2], X = [(W[0] + oe[0]) / 2, (W[1] + oe[1]) / 2];
      } else if (L.touch0) F = L.touch0[0], X = L.touch0[1];
      else return;
      L.zoom("touch", n(x(Z, F, X), L.extent, s));
    }
  }
  function D(b, ...P) {
    if (this.__zooming) {
      var L = M(this, P).event(b), A = b.changedTouches, B = A.length, O, Z;
      for (Ui(b), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, g), O = 0; O < B; ++O)
        Z = A[O], L.touch0 && L.touch0[2] === Z.identifier ? delete L.touch0 : L.touch1 && L.touch1[2] === Z.identifier && delete L.touch1;
      if (L.touch1 && !L.touch0 && (L.touch0 = L.touch1, delete L.touch1), L.touch0) L.touch0[1] = this.__zoom.invert(L.touch0[0]);
      else if (L.end(), L.taps === 2 && (Z = Ft(Z, this), Math.hypot(p[0] - Z[0], p[1] - Z[1]) < C)) {
        var F = Kt(this).on("dblclick.zoom");
        F && F.apply(this, arguments);
      }
    }
  }
  return w.wheelDelta = function(b) {
    return arguments.length ? (r = typeof b == "function" ? b : Ko(+b), w) : r;
  }, w.filter = function(b) {
    return arguments.length ? (e = typeof b == "function" ? b : Ko(!!b), w) : e;
  }, w.touchable = function(b) {
    return arguments.length ? (o = typeof b == "function" ? b : Ko(!!b), w) : o;
  }, w.extent = function(b) {
    return arguments.length ? (t = typeof b == "function" ? b : Ko([[+b[0][0], +b[0][1]], [+b[1][0], +b[1][1]]]), w) : t;
  }, w.scaleExtent = function(b) {
    return arguments.length ? (i[0] = +b[0], i[1] = +b[1], w) : [i[0], i[1]];
  }, w.translateExtent = function(b) {
    return arguments.length ? (s[0][0] = +b[0][0], s[1][0] = +b[1][0], s[0][1] = +b[0][1], s[1][1] = +b[1][1], w) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, w.constrain = function(b) {
    return arguments.length ? (n = b, w) : n;
  }, w.duration = function(b) {
    return arguments.length ? (a = +b, w) : a;
  }, w.interpolate = function(b) {
    return arguments.length ? (l = b, w) : l;
  }, w.on = function() {
    var b = c.on.apply(c, arguments);
    return b === c ? w : b;
  }, w.clickDistance = function(b) {
    return arguments.length ? (v = (b = +b) * b, w) : Math.sqrt(v);
  }, w.tapDistance = function(b) {
    return arguments.length ? (C = +b, w) : C;
  }, w;
}
const go = {
  error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
  error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
  error003: (e) => `Node type "${e}" not found. Using fallback type "default".`,
  error004: () => "The React Flow parent container needs a width and a height to render the graph.",
  error005: () => "Only child nodes can use a parent extent.",
  error006: () => "Can't create edge. An edge needs a source and a target.",
  error007: (e) => `The old edge with id=${e} does not exist.`,
  error009: (e) => `Marker type "${e}" doesn't exist.`,
  error008: (e, { id: t, sourceHandle: n, targetHandle: r }) => `Couldn't create edge for ${e} handle id: "${e === "source" ? n : r}", edge id: ${t}.`,
  error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
  error011: (e) => `Edge type "${e}" not found. Using fallback type "default".`,
  error012: (e) => `Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,
  error013: (e = "react") => `It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,
  error014: () => "useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",
  error015: () => "It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs."
}, $s = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
], hc = ["Enter", " ", "Escape"], qv = {
  "node.a11yDescription.default": "Press enter or space to select a node. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.keyboardDisabled": "Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.",
  "node.a11yDescription.ariaLiveMessage": ({ direction: e, x: t, y: n }) => `Moved selected node ${e}. New position, x: ${t}, y: ${n}`,
  "edge.a11yDescription.default": "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.",
  // Control elements
  "controls.ariaLabel": "Control Panel",
  "controls.zoomIn.ariaLabel": "Zoom In",
  "controls.zoomOut.ariaLabel": "Zoom Out",
  "controls.fitView.ariaLabel": "Fit View",
  "controls.interactive.ariaLabel": "Toggle Interactivity",
  // Mini map
  "minimap.ariaLabel": "Mini Map",
  // Handle
  "handle.ariaLabel": "Handle"
};
var Vr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(Vr || (Vr = {}));
var cn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(cn || (cn = {}));
var gi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(gi || (gi = {}));
const ks = {
  inProgress: !1,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null
};
var $n;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})($n || ($n = {}));
var ho;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(ho || (ho = {}));
var xe;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(xe || (xe = {}));
const pl = {
  [xe.Left]: xe.Right,
  [xe.Right]: xe.Left,
  [xe.Top]: xe.Bottom,
  [xe.Bottom]: xe.Top
};
function Zv(e, t) {
  if (!e && !t)
    return !0;
  if (!e || !t || e.size !== t.size)
    return !1;
  if (!e.size && !t.size)
    return !0;
  for (const n of e.keys())
    if (!t.has(n))
      return !1;
  return !0;
}
function gl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t?.has(i) || r.push(o);
  }), r.length && n(r);
}
function Kv(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const vc = (e) => "id" in e && "source" in e && "target" in e, jv = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ua = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Lo = (e, t = [0, 0]) => {
  const { width: n, height: r } = er(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, Yv = (e, t = { nodeOrigin: [0, 0] }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : ua(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? hi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Vi(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Ai(n);
}, To = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = hi(r);
      n = Vi(n, o);
    }
  }), Ai(n);
}, ca = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Mo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const c of e.values()) {
    const { measured: d, selectable: p = !0, hidden: f = !1 } = c;
    if (s && !p || f)
      continue;
    const g = d.width ?? c.width ?? c.initialWidth ?? null, h = d.height ?? c.height ?? c.initialHeight ?? null, v = vo(a, Hr(c)), C = (g ?? 0) * (h ?? 0), w = i && v > 0;
    (!c.internals.handleBounds || w || v >= C || c.dragging) && l.push(c);
  }
  return l;
}, Fv = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function Wv(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t?.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && (t?.includeHiddenNodes || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Xv({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!0);
  const a = Wv(e, s), l = To(a), c = da(l, t, n, s?.minZoom ?? o, s?.maxZoom ?? i, s?.padding ?? 0.1);
  return await r.setViewport(c, {
    duration: s?.duration,
    ease: s?.ease,
    interpolate: s?.interpolate
  }), Promise.resolve(!0);
}
function mc({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: c } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, d = s.origin ?? r;
  let p = s.extent || o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i?.("005", go.error005());
    else {
      const g = a.measured.width, h = a.measured.height;
      g && h && (p = [
        [l, c],
        [l + g, c + h]
      ]);
    }
  else a && zr(s.extent) && (p = [
    [s.extent[0][0] + l, s.extent[0][1] + c],
    [s.extent[1][0] + l, s.extent[1][1] + c]
  ]);
  const f = zr(p) ? fr(t, p, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && i?.("015", go.error015()), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * d[0],
      y: f.y - c + (s.measured.height ?? 0) * d[1]
    },
    positionAbsolute: f
  };
}
async function Uv({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((p) => p.id)), s = [];
  for (const p of n) {
    if (p.deletable === !1)
      continue;
    const f = i.has(p.id), g = !f && p.parentId && s.find((h) => h.id === p.parentId);
    (f || g) && s.push(p);
  }
  const a = new Set(t.map((p) => p.id)), l = r.filter((p) => p.deletable !== !1), c = Fv(s, l);
  for (const p of l)
    a.has(p.id) && !c.find((f) => f.id === p.id) && c.push(p);
  if (!o)
    return {
      edges: c,
      nodes: s
    };
  const d = await o({
    nodes: s,
    edges: c
  });
  return typeof d == "boolean" ? d ? { edges: c, nodes: s } : { edges: [], nodes: [] } : d;
}
const Ar = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), fr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Ar(e.x, t[0][0], t[1][0] - (n?.width ?? 0)),
  y: Ar(e.y, t[0][1], t[1][1] - (n?.height ?? 0))
});
function yc(e, t, n) {
  const { width: r, height: o } = er(n), { x: i, y: s } = n.internals.positionAbsolute;
  return fr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const hl = (e, t, n) => e < t ? Ar(Math.abs(e - t), 1, t) / t : e > n ? -Ar(Math.abs(e - n), 1, t) / t : 0, wc = (e, t, n = 15, r = 40) => {
  const o = hl(e.x, r, t.width - r) * n, i = hl(e.y, r, t.height - r) * n;
  return [o, i];
}, Vi = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), Cs = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Ai = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Hr = (e, t = [0, 0]) => {
  const { x: n, y: r } = ua(e) ? e.internals.positionAbsolute : Lo(e, t);
  return {
    x: n,
    y: r,
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}, hi = (e, t = [0, 0]) => {
  const { x: n, y: r } = ua(e) ? e.internals.positionAbsolute : Lo(e, t);
  return {
    x: n,
    y: r,
    x2: n + (e.measured?.width ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (e.measured?.height ?? e.height ?? e.initialHeight ?? 0)
  };
}, bc = (e, t) => Ai(Vi(Cs(e), Cs(t))), vo = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, vl = (e) => Cn(e.width) && Cn(e.height) && Cn(e.x) && Cn(e.y), Cn = (e) => !isNaN(e) && isFinite(e), Gv = (e, t) => {
}, Hi = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Mo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? Hi(a, s) : a;
}, vi = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
});
function $r(e, t) {
  if (typeof e == "number")
    return Math.floor((t - t / (1 + e)) * 0.5);
  if (typeof e == "string" && e.endsWith("px")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(n);
  }
  if (typeof e == "string" && e.endsWith("%")) {
    const n = parseFloat(e);
    if (!Number.isNaN(n))
      return Math.floor(t * n * 0.01);
  }
  return console.error(`[React Flow] The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`), 0;
}
function Jv(e, t, n) {
  if (typeof e == "string" || typeof e == "number") {
    const r = $r(e, n), o = $r(e, t);
    return {
      top: r,
      right: o,
      bottom: r,
      left: o,
      x: o * 2,
      y: r * 2
    };
  }
  if (typeof e == "object") {
    const r = $r(e.top ?? e.y ?? 0, n), o = $r(e.bottom ?? e.y ?? 0, n), i = $r(e.left ?? e.x ?? 0, t), s = $r(e.right ?? e.x ?? 0, t);
    return { top: r, right: s, bottom: o, left: i, x: i + s, y: r + o };
  }
  return { top: 0, right: 0, bottom: 0, left: 0, x: 0, y: 0 };
}
function Qv(e, t, n, r, o, i) {
  const { x: s, y: a } = vi(e, [t, n, r]), { x: l, y: c } = vi({ x: e.x + e.width, y: e.y + e.height }, [t, n, r]), d = o - l, p = i - c;
  return {
    left: Math.floor(s),
    top: Math.floor(a),
    right: Math.floor(d),
    bottom: Math.floor(p)
  };
}
const da = (e, t, n, r, o, i) => {
  const s = Jv(i, t, n), a = (t - s.x) / e.width, l = (n - s.y) / e.height, c = Math.min(a, l), d = Ar(c, r, o), p = e.x + e.width / 2, f = e.y + e.height / 2, g = t / 2 - p * d, h = n / 2 - f * d, v = Qv(e, g, h, d, t, n), C = {
    left: Math.min(v.left - s.left, 0),
    top: Math.min(v.top - s.top, 0),
    right: Math.min(v.right - s.right, 0),
    bottom: Math.min(v.bottom - s.bottom, 0)
  };
  return {
    x: g - C.left + C.right,
    y: h - C.top + C.bottom,
    zoom: d
  };
}, kr = () => typeof navigator < "u" && navigator?.userAgent?.indexOf("Mac") >= 0;
function zr(e) {
  return e !== void 0 && e !== "parent";
}
function er(e) {
  return {
    width: e.measured?.width ?? e.width ?? e.initialWidth ?? 0,
    height: e.measured?.height ?? e.height ?? e.initialHeight ?? 0
  };
}
function xc(e) {
  return (e.measured?.width ?? e.width ?? e.initialWidth) !== void 0 && (e.measured?.height ?? e.height ?? e.initialHeight) !== void 0;
}
function e0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function t0(e) {
  return { ...qv, ...e || {} };
}
function Gi(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = sn(e), a = Mo({ x: i - (o?.left ?? 0), y: s - (o?.top ?? 0) }, r), { x: l, y: c } = n ? Hi(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: c,
    ...a
  };
}
const $c = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), kc = (e) => e?.getRootNode?.() || window?.document, n0 = ["INPUT", "SELECT", "TEXTAREA"];
function Cc(e) {
  const t = e.composedPath?.()?.[0] || e.target;
  return t?.nodeType !== 1 ? !1 : n0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const _c = (e) => "clientX" in e, sn = (e, t) => {
  const n = _c(e), r = n ? e.clientX : e.touches?.[0].clientX, o = n ? e.clientY : e.touches?.[0].clientY;
  return {
    x: r - (t?.left ?? 0),
    y: o - (t?.top ?? 0)
  };
}, ml = (e, t, n, r, o) => {
  const i = t.querySelectorAll(`.${e}`);
  return !i || !i.length ? null : Array.from(i).map((s) => {
    const a = s.getBoundingClientRect();
    return {
      id: s.getAttribute("data-handleid"),
      type: e,
      nodeId: o,
      position: s.getAttribute("data-handlepos"),
      x: (a.left - n.left) / r,
      y: (a.top - n.top) / r,
      ...$c(s)
    };
  });
};
function r0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, c = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, d = Math.abs(l - e), p = Math.abs(c - t);
  return [l, c, d, p];
}
function jo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function yl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case xe.Left:
      return [t - jo(t - r, i), n];
    case xe.Right:
      return [t + jo(r - t, i), n];
    case xe.Top:
      return [t, n - jo(n - o, i)];
    case xe.Bottom:
      return [t, n + jo(o - n, i)];
  }
}
function Sc({ sourceX: e, sourceY: t, sourcePosition: n = xe.Bottom, targetX: r, targetY: o, targetPosition: i = xe.Top, curvature: s = 0.25 }) {
  const [a, l] = yl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [c, d] = yl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [p, f, g, h] = r0({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: a,
    sourceControlY: l,
    targetControlX: c,
    targetControlY: d
  });
  return [
    `M${e},${t} C${a},${l} ${c},${d} ${r},${o}`,
    p,
    f,
    g,
    h
  ];
}
function Ec({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function o0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r, elevateOnSelect: o = !1 }) {
  if (r !== void 0)
    return r;
  const i = o && n ? 1e3 : 0, s = Math.max(e.parentId ? e.internals.z : 0, t.parentId ? t.internals.z : 0);
  return i + s;
}
function i0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Vi(hi(e), hi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return vo(s, Ai(i)) > 0;
}
const s0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, a0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), l0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return vc(e) ? n = { ...e } : n = {
    ...e,
    id: s0(e)
  }, a0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Pc({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = Ec({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const wl = {
  [xe.Left]: { x: -1, y: 0 },
  [xe.Right]: { x: 1, y: 0 },
  [xe.Top]: { x: 0, y: -1 },
  [xe.Bottom]: { x: 0, y: 1 }
}, u0 = ({ source: e, sourcePosition: t = xe.Bottom, target: n }) => t === xe.Left || t === xe.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, bl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function c0({ source: e, sourcePosition: t = xe.Bottom, target: n, targetPosition: r = xe.Top, center: o, offset: i, stepPosition: s }) {
  const a = wl[t], l = wl[r], c = { x: e.x + a.x * i, y: e.y + a.y * i }, d = { x: n.x + l.x * i, y: n.y + l.y * i }, p = u0({
    source: c,
    sourcePosition: t,
    target: d
  }), f = p.x !== 0 ? "x" : "y", g = p[f];
  let h = [], v, C;
  const w = { x: 0, y: 0 }, E = { x: 0, y: 0 }, [, , x, $] = Ec({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (a[f] * l[f] === -1) {
    f === "x" ? (v = o.x ?? c.x + (d.x - c.x) * s, C = o.y ?? (c.y + d.y) / 2) : (v = o.x ?? (c.x + d.x) / 2, C = o.y ?? c.y + (d.y - c.y) * s);
    const k = [
      { x: v, y: c.y },
      { x: v, y: d.y }
    ], M = [
      { x: c.x, y: C },
      { x: d.x, y: C }
    ];
    a[f] === g ? h = f === "x" ? k : M : h = f === "x" ? M : k;
  } else {
    const k = [{ x: c.x, y: d.y }], M = [{ x: d.x, y: c.y }];
    if (f === "x" ? h = a.x === g ? M : k : h = a.y === g ? k : M, t === r) {
      const T = Math.abs(e[f] - n[f]);
      if (T <= i) {
        const _ = Math.min(i - 1, i - T);
        a[f] === g ? w[f] = (c[f] > e[f] ? -1 : 1) * _ : E[f] = (d[f] > n[f] ? -1 : 1) * _;
      }
    }
    if (t !== r) {
      const T = f === "x" ? "y" : "x", _ = a[f] === l[T], D = c[T] > d[T], b = c[T] < d[T];
      (a[f] === 1 && (!_ && D || _ && b) || a[f] !== 1 && (!_ && b || _ && D)) && (h = f === "x" ? k : M);
    }
    const z = { x: c.x + w.x, y: c.y + w.y }, q = { x: d.x + E.x, y: d.y + E.y }, U = Math.max(Math.abs(z.x - h[0].x), Math.abs(q.x - h[0].x)), j = Math.max(Math.abs(z.y - h[0].y), Math.abs(q.y - h[0].y));
    U >= j ? (v = (z.x + q.x) / 2, C = h[0].y) : (v = h[0].x, C = (z.y + q.y) / 2);
  }
  return [[
    e,
    { x: c.x + w.x, y: c.y + w.y },
    ...h,
    { x: d.x + E.x, y: d.y + E.y },
    n
  ], v, C, x, $];
}
function d0(e, t, n, r) {
  const o = Math.min(bl(e, t) / 2, bl(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const c = e.x < n.x ? -1 : 1, d = e.y < n.y ? 1 : -1;
    return `L ${i + o * c},${s}Q ${i},${s} ${i},${s + o * d}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function fa({ sourceX: e, sourceY: t, sourcePosition: n = xe.Bottom, targetX: r, targetY: o, targetPosition: i = xe.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: c = 20, stepPosition: d = 0.5 }) {
  const [p, f, g, h, v] = c0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: c,
    stepPosition: d
  });
  return [p.reduce((C, w, E) => {
    let x = "";
    return E > 0 && E < p.length - 1 ? x = d0(p[E - 1], w, p[E + 1], s) : x = `${E === 0 ? "M" : "L"}${w.x} ${w.y}`, C += x, C;
  }, ""), f, g, h, v];
}
function xl(e) {
  return e && !!(e.internals.handleBounds || e.handles?.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function f0(e) {
  const { sourceNode: t, targetNode: n } = e;
  if (!xl(t) || !xl(n))
    return null;
  const r = t.internals.handleBounds || $l(t.handles), o = n.internals.handleBounds || $l(n.handles), i = kl(r?.source ?? [], e.sourceHandle), s = kl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === Vr.Strict ? o?.target ?? [] : (o?.target ?? []).concat(o?.source ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return e.onError?.("008", go.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = i?.position || xe.Bottom, l = s?.position || xe.Top, c = mo(t, i, a), d = mo(n, s, l);
  return {
    sourceX: c.x,
    sourceY: c.y,
    targetX: d.x,
    targetY: d.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function $l(e) {
  if (!e)
    return null;
  const t = [], n = [];
  for (const r of e)
    r.width = r.width ?? 1, r.height = r.height ?? 1, r.type === "source" ? t.push(r) : r.type === "target" && n.push(r);
  return {
    source: t,
    target: n
  };
}
function mo(e, t, n = xe.Left, r = !1) {
  const o = (t?.x ?? 0) + e.internals.positionAbsolute.x, i = (t?.y ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? er(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch (t?.position ?? n) {
    case xe.Top:
      return { x: o + s / 2, y: i };
    case xe.Right:
      return { x: o + s, y: i + a / 2 };
    case xe.Bottom:
      return { x: o + s / 2, y: i + a };
    case xe.Left:
      return { x: o, y: i + a / 2 };
  }
}
function kl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function _s(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((n) => `${n}=${e[n]}`).join("&")}` : "";
}
function p0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const c = _s(l, t);
      i.has(c) || (s.push({ id: c, color: l.color || n, ...l }), i.add(c));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function g0(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case xe.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case xe.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case xe.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const pa = {
  nodeOrigin: [0, 0],
  nodeExtent: $s,
  elevateNodesOnSelect: !0,
  defaults: {}
}, h0 = {
  ...pa,
  checkEquality: !0
};
function ga(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function v0(e, t, n) {
  const r = ga(pa, n);
  for (const o of e.values())
    if (o.parentId)
      ha(o, e, t, r);
    else {
      const i = Lo(o, r.nodeOrigin), s = zr(o.extent) ? o.extent : r.nodeExtent, a = fr(i, s, er(o));
      o.internals.positionAbsolute = a;
    }
}
function m0(e, t, n, r) {
  const o = ga(h0, r);
  let i = e.length > 0;
  const s = new Map(t), a = o?.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const l of e) {
    let c = s.get(l.id);
    if (o.checkEquality && l === c?.internals.userNode)
      t.set(l.id, c);
    else {
      const d = Lo(l, o.nodeOrigin), p = zr(l.extent) ? l.extent : o.nodeExtent, f = fr(d, p, er(l));
      c = {
        ...o.defaults,
        ...l,
        measured: {
          width: l.measured?.width,
          height: l.measured?.height
        },
        internals: {
          positionAbsolute: f,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: l.measured ? c?.internals.handleBounds : void 0,
          z: Lc(l, a),
          userNode: l
        }
      }, t.set(l.id, c);
    }
    (c.measured === void 0 || c.measured.width === void 0 || c.measured.height === void 0) && !c.hidden && (i = !1), l.parentId && ha(c, t, n, r);
  }
  return i;
}
function y0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function ha(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = ga(pa, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  y0(e, n);
  const c = o ? 1e3 : 0, { x: d, y: p, z: f } = w0(e, l, i, s, c), { positionAbsolute: g } = e.internals, h = d !== g.x || p !== g.y;
  (h || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: h ? { x: d, y: p } : g,
      z: f
    }
  });
}
function Lc(e, t) {
  return (Cn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function w0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = er(e), l = Lo(e, n), c = zr(e.extent) ? fr(l, e.extent, a) : l;
  let d = fr({ x: i + c.x, y: s + c.y }, r, a);
  e.extent === "parent" && (d = yc(d, a, t));
  const p = Lc(e, o), f = t.internals.z ?? 0;
  return {
    x: d.x,
    y: d.y,
    z: f >= p ? f + 1 : p
  };
}
function b0(e, t, n, r = [0, 0]) {
  const o = [], i = /* @__PURE__ */ new Map();
  for (const s of e) {
    const a = t.get(s.parentId);
    if (!a)
      continue;
    const l = i.get(s.parentId)?.expandedRect ?? Hr(a), c = bc(l, s.rect);
    i.set(s.parentId, { expandedRect: c, parent: a });
  }
  return i.size > 0 && i.forEach(({ expandedRect: s, parent: a }, l) => {
    const c = a.internals.positionAbsolute, d = er(a), p = a.origin ?? r, f = s.x < c.x ? Math.round(Math.abs(c.x - s.x)) : 0, g = s.y < c.y ? Math.round(Math.abs(c.y - s.y)) : 0, h = Math.max(d.width, Math.round(s.width)), v = Math.max(d.height, Math.round(s.height)), C = (h - d.width) * p[0], w = (v - d.height) * p[1];
    (f > 0 || g > 0 || C || w) && (o.push({
      id: l,
      type: "position",
      position: {
        x: a.position.x - f + C,
        y: a.position.y - g + w
      }
    }), n.get(l)?.forEach((E) => {
      e.some((x) => x.id === E.id) || o.push({
        id: E.id,
        type: "position",
        position: {
          x: E.position.x + f,
          y: E.position.y + g
        }
      });
    })), (d.width < s.width || d.height < s.height || f || g) && o.push({
      id: l,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: h + (f ? p[0] * f - C : 0),
        height: v + (g ? p[1] * g - w : 0)
      }
    });
  }), o;
}
function x0(e, t, n, r, o, i) {
  const s = r?.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], c = window.getComputedStyle(s), { m22: d } = new window.DOMMatrixReadOnly(c.transform), p = [];
  for (const f of e.values()) {
    const g = t.get(f.id);
    if (!g)
      continue;
    if (g.hidden) {
      t.set(g.id, {
        ...g,
        internals: {
          ...g.internals,
          handleBounds: void 0
        }
      }), a = !0;
      continue;
    }
    const h = $c(f.nodeElement), v = g.measured.width !== h.width || g.measured.height !== h.height;
    if (h.width && h.height && (v || !g.internals.handleBounds || f.force)) {
      const C = f.nodeElement.getBoundingClientRect(), w = zr(g.extent) ? g.extent : i;
      let { positionAbsolute: E } = g.internals;
      g.parentId && g.extent === "parent" ? E = yc(E, h, t.get(g.parentId)) : w && (E = fr(E, w, h));
      const x = {
        ...g,
        measured: h,
        internals: {
          ...g.internals,
          positionAbsolute: E,
          handleBounds: {
            source: ml("source", f.nodeElement, C, d, g.id),
            target: ml("target", f.nodeElement, C, d, g.id)
          }
        }
      };
      t.set(g.id, x), g.parentId && ha(x, t, n, { nodeOrigin: o }), a = !0, v && (l.push({
        id: g.id,
        type: "dimensions",
        dimensions: h
      }), g.expandParent && g.parentId && p.push({
        id: g.id,
        parentId: g.parentId,
        rect: Hr(x, o)
      }));
    }
  }
  if (p.length > 0) {
    const f = b0(p, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function $0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
  if (!t || !e.x && !e.y)
    return Promise.resolve(!1);
  const s = await t.setViewportConstrained({
    x: n[0] + e.x,
    y: n[1] + e.y,
    zoom: n[2]
  }, [
    [0, 0],
    [o, i]
  ], r), a = !!s && (s.x !== n[0] || s.y !== n[1] || s.k !== n[2]);
  return Promise.resolve(a);
}
function Cl(e, t, n, r, o, i) {
  let s = o;
  const a = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, a.set(n, t)), s = `${o}-${e}`;
  const l = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, l.set(n, t)), i) {
    s = `${o}-${e}-${i}`;
    const c = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, c.set(n, t));
  }
}
function k0(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, c = `${o}-${s}--${i}-${a}`, d = `${i}-${a}--${o}-${s}`;
    Cl("source", l, d, e, o, s), Cl("target", l, c, e, i, a), t.set(r.id, r);
  }
}
function C0(e, t) {
  if (e === null || t === null)
    return !1;
  const n = Array.isArray(e) ? e : [e], r = Array.isArray(t) ? t : [t];
  if (n.length !== r.length)
    return !1;
  for (let o = 0; o < n.length; o++)
    if (n[o].id !== r[o].id || n[o].type !== r[o].type || !Object.is(n[o].data, r[o].data))
      return !1;
  return !0;
}
function Tc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : Tc(n, t) : !1;
}
function _l(e, t, n) {
  let r = e;
  do {
    if (r?.matches?.(t))
      return !0;
    if (r === n)
      return !1;
    r = r?.parentElement;
  } while (r);
  return !1;
}
function _0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !Tc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
      const a = e.get(i);
      a && o.set(i, {
        id: i,
        position: a.position || { x: 0, y: 0 },
        distance: {
          x: n.x - a.internals.positionAbsolute.x,
          y: n.y - a.internals.positionAbsolute.y
        },
        extent: a.extent,
        parentId: a.parentId,
        origin: a.origin,
        expandParent: a.expandParent,
        internals: {
          positionAbsolute: a.internals.positionAbsolute || { x: 0, y: 0 }
        },
        measured: {
          width: a.measured.width ?? 0,
          height: a.measured.height ?? 0
        }
      });
    }
  return o;
}
function Ji({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  const o = [];
  for (const [s, a] of t) {
    const l = n.get(s)?.internals.userNode;
    l && o.push({
      ...l,
      position: a.position,
      dragging: r
    });
  }
  if (!e)
    return [o[0], o];
  const i = n.get(e)?.internals.userNode;
  return [
    i ? {
      ...i,
      position: t.get(e)?.position || i.position,
      dragging: r
    } : o[0],
    o
  ];
}
function S0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, c = { x: 0, y: 0 }, d = null, p = !1, f = null, g = !1, h = !1;
  function v({ noDragClassName: w, handleSelector: E, domNode: x, isSelectable: $, nodeId: k, nodeClickDistance: M = 0 }) {
    f = Kt(x);
    function z({ x: T, y: _ }, D) {
      const { nodeLookup: b, nodeExtent: P, snapGrid: L, snapToGrid: A, nodeOrigin: B, onNodeDrag: O, onSelectionDrag: Z, onError: F, updateNodePositions: X } = t();
      i = { x: T, y: _ };
      let te = !1, W = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && P) {
        const pe = To(a);
        W = Cs(pe);
      }
      for (const [pe, oe] of a) {
        if (!b.has(pe))
          continue;
        let ge = { x: T - oe.distance.x, y: _ - oe.distance.y };
        A && (ge = Hi(ge, L));
        let G = [
          [P[0][0], P[0][1]],
          [P[1][0], P[1][1]]
        ];
        if (a.size > 1 && P && !oe.extent) {
          const { positionAbsolute: se } = oe.internals, ne = se.x - W.x + P[0][0], me = se.x + oe.measured.width - W.x2 + P[1][0], ee = se.y - W.y + P[0][1], ye = se.y + oe.measured.height - W.y2 + P[1][1];
          G = [
            [ne, ee],
            [me, ye]
          ];
        }
        const { position: ke, positionAbsolute: ae } = mc({
          nodeId: pe,
          nextPosition: ge,
          nodeLookup: b,
          nodeExtent: G,
          nodeOrigin: B,
          onError: F
        });
        te = te || oe.position.x !== ke.x || oe.position.y !== ke.y, oe.position = ke, oe.internals.positionAbsolute = ae;
      }
      if (h = h || te, !!te && (X(a, !0), D && (r || O || !k && Z))) {
        const [pe, oe] = Ji({
          nodeId: k,
          dragItems: a,
          nodeLookup: b
        });
        r?.(D, a, pe, oe), O?.(D, pe, oe), k || Z?.(D, oe);
      }
    }
    async function q() {
      if (!d)
        return;
      const { transform: T, panBy: _, autoPanSpeed: D, autoPanOnNodeDrag: b } = t();
      if (!b) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [P, L] = wc(c, d, D);
      (P !== 0 || L !== 0) && (i.x = (i.x ?? 0) - P / T[2], i.y = (i.y ?? 0) - L / T[2], await _({ x: P, y: L }) && z(i, null)), s = requestAnimationFrame(q);
    }
    function U(T) {
      const { nodeLookup: _, multiSelectionActive: D, nodesDraggable: b, transform: P, snapGrid: L, snapToGrid: A, selectNodesOnDrag: B, onNodeDragStart: O, onSelectionDragStart: Z, unselectNodesAndEdges: F } = t();
      p = !0, (!B || !$) && !D && k && (_.get(k)?.selected || F()), $ && B && k && e?.(k);
      const X = Gi(T.sourceEvent, { transform: P, snapGrid: L, snapToGrid: A, containerBounds: d });
      if (i = X, a = _0(_, b, X, k), a.size > 0 && (n || O || !k && Z)) {
        const [te, W] = Ji({
          nodeId: k,
          dragItems: a,
          nodeLookup: _
        });
        n?.(T.sourceEvent, a, te, W), O?.(T.sourceEvent, te, W), k || Z?.(T.sourceEvent, W);
      }
    }
    const j = Xh().clickDistance(M).on("start", (T) => {
      const { domNode: _, nodeDragThreshold: D, transform: b, snapGrid: P, snapToGrid: L } = t();
      d = _?.getBoundingClientRect() || null, g = !1, h = !1, D === 0 && U(T), i = Gi(T.sourceEvent, { transform: b, snapGrid: P, snapToGrid: L, containerBounds: d }), c = sn(T.sourceEvent, d);
    }).on("drag", (T) => {
      const { autoPanOnNodeDrag: _, transform: D, snapGrid: b, snapToGrid: P, nodeDragThreshold: L, nodeLookup: A } = t(), B = Gi(T.sourceEvent, { transform: D, snapGrid: b, snapToGrid: P, containerBounds: d });
      if ((T.sourceEvent.type === "touchmove" && T.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      k && !A.has(k)) && (g = !0), !g) {
        if (!l && _ && p && (l = !0, q()), !p) {
          const O = B.xSnapped - (i.x ?? 0), Z = B.ySnapped - (i.y ?? 0);
          Math.sqrt(O * O + Z * Z) > L && U(T);
        }
        (i.x !== B.xSnapped || i.y !== B.ySnapped) && a && p && (c = sn(T.sourceEvent, d), z(B, T.sourceEvent));
      }
    }).on("end", (T) => {
      if (!(!p || g) && (l = !1, p = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: _, updateNodePositions: D, onNodeDragStop: b, onSelectionDragStop: P } = t();
        if (h && (D(a, !1), h = !1), o || b || !k && P) {
          const [L, A] = Ji({
            nodeId: k,
            dragItems: a,
            nodeLookup: _,
            dragging: !1
          });
          o?.(T.sourceEvent, a, L, A), b?.(T.sourceEvent, L, A), k || P?.(T.sourceEvent, A);
        }
      }
    }).filter((T) => {
      const _ = T.target;
      return !T.button && (!w || !_l(_, `.${w}`, x)) && (!E || _l(_, E, x));
    });
    f.call(j);
  }
  function C() {
    f?.on(".drag", null);
  }
  return {
    update: v,
    destroy: C
  };
}
function E0(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    vo(o, Hr(i)) > 0 && r.push(i);
  return r;
}
const P0 = 250;
function L0(e, t, n, r) {
  let o = [], i = 1 / 0;
  const s = E0(e, n, t + P0);
  for (const a of s) {
    const l = [...a.internals.handleBounds?.source ?? [], ...a.internals.handleBounds?.target ?? []];
    for (const c of l) {
      if (r.nodeId === c.nodeId && r.type === c.type && r.id === c.id)
        continue;
      const { x: d, y: p } = mo(a, c, c.position, !0), f = Math.sqrt(Math.pow(d - e.x, 2) + Math.pow(p - e.y, 2));
      f > t || (f < i ? (o = [{ ...c, x: d, y: p }], i = f) : f === i && o.push({ ...c, x: d, y: p }));
    }
  }
  if (!o.length)
    return null;
  if (o.length > 1) {
    const a = r.type === "source" ? "target" : "source";
    return o.find((l) => l.type === a) ?? o[0];
  }
  return o[0];
}
function Mc(e, t, n, r, o, i = !1) {
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? s.internals.handleBounds?.[t] : [...s.internals.handleBounds?.source ?? [], ...s.internals.handleBounds?.target ?? []], l = (n ? a?.find((c) => c.id === n) : a?.[0]) ?? null;
  return l && i ? { ...l, ...mo(s, l, l.position, !0) } : l;
}
function Nc(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function T0(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Oc = () => !0;
function M0(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: c, autoPanOnConnect: d, flowId: p, panBy: f, cancelConnection: g, onConnectStart: h, onConnect: v, onConnectEnd: C, isValidConnection: w = Oc, onReconnectEnd: E, updateConnection: x, getTransform: $, getFromHandle: k, autoPanSpeed: M, dragThreshold: z = 1 }) {
  const q = kc(e.target);
  let U = 0, j;
  const { x: T, y: _ } = sn(e), D = q?.elementFromPoint(T, _), b = Nc(i, D), P = a?.getBoundingClientRect();
  let L = !1;
  if (!P || !b)
    return;
  const A = Mc(o, b, r, l, t);
  if (!A)
    return;
  let B = sn(e, P), O = !1, Z = null, F = !1, X = null;
  function te() {
    if (!d || !P)
      return;
    const [ae, se] = wc(B, P, M);
    f({ x: ae, y: se }), U = requestAnimationFrame(te);
  }
  const W = {
    ...A,
    nodeId: o,
    type: b,
    position: A.position
  }, pe = l.get(o);
  let oe = {
    inProgress: !0,
    isValid: null,
    from: mo(pe, W, xe.Left, !0),
    fromHandle: W,
    fromPosition: W.position,
    fromNode: pe,
    to: B,
    toHandle: null,
    toPosition: pl[W.position],
    toNode: null
  };
  function ge() {
    L = !0, x(oe), h?.(e, { nodeId: o, handleId: r, handleType: b });
  }
  z === 0 && ge();
  function G(ae) {
    if (!L) {
      const { x: ee, y: ye } = sn(ae), re = ee - T, Ee = ye - _;
      if (!(re * re + Ee * Ee > z * z))
        return;
      ge();
    }
    if (!k() || !W) {
      ke(ae);
      return;
    }
    const se = $();
    B = sn(ae, P), j = L0(Mo(B, se, !1, [1, 1]), n, l, W), O || (te(), O = !0);
    const ne = Dc(ae, {
      handle: j,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: w,
      doc: q,
      lib: c,
      flowId: p,
      nodeLookup: l
    });
    X = ne.handleDomNode, Z = ne.connection, F = T0(!!j, ne.isValid);
    const me = {
      // from stays the same
      ...oe,
      isValid: F,
      to: ne.toHandle && F ? vi({ x: ne.toHandle.x, y: ne.toHandle.y }, se) : B,
      toHandle: ne.toHandle,
      toPosition: F && ne.toHandle ? ne.toHandle.position : pl[W.position],
      toNode: ne.toHandle ? l.get(ne.toHandle.nodeId) : null
    };
    F && j && oe.toHandle && me.toHandle && oe.toHandle.type === me.toHandle.type && oe.toHandle.nodeId === me.toHandle.nodeId && oe.toHandle.id === me.toHandle.id && oe.to.x === me.to.x && oe.to.y === me.to.y || (x(me), oe = me);
  }
  function ke(ae) {
    if (L) {
      (j || X) && Z && F && v?.(Z);
      const { inProgress: se, ...ne } = oe, me = {
        ...ne,
        toPosition: oe.toHandle ? oe.toPosition : null
      };
      C?.(ae, me), i && E?.(ae, me);
    }
    g(), cancelAnimationFrame(U), O = !1, F = !1, Z = null, X = null, q.removeEventListener("mousemove", G), q.removeEventListener("mouseup", ke), q.removeEventListener("touchmove", G), q.removeEventListener("touchend", ke);
  }
  q.addEventListener("mousemove", G), q.addEventListener("mouseup", ke), q.addEventListener("touchmove", G), q.addEventListener("touchend", ke);
}
function Dc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: c = Oc, nodeLookup: d }) {
  const p = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: g, y: h } = sn(e), v = s.elementFromPoint(g, h), C = v?.classList.contains(`${a}-flow__handle`) ? v : f, w = {
    handleDomNode: C,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (C) {
    const E = Nc(void 0, C), x = C.getAttribute("data-nodeid"), $ = C.getAttribute("data-handleid"), k = C.classList.contains("connectable"), M = C.classList.contains("connectableend");
    if (!x || !E)
      return w;
    const z = {
      source: p ? x : r,
      sourceHandle: p ? $ : o,
      target: p ? r : x,
      targetHandle: p ? o : $
    };
    w.connection = z;
    const q = k && M && (n === Vr.Strict ? p && E === "source" || !p && E === "target" : x !== r || $ !== o);
    w.isValid = q && c(z), w.toHandle = Mc(x, E, $, d, n, !0);
  }
  return w;
}
const Sl = {
  onPointerDown: M0,
  isValid: Dc
};
function N0({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = Kt(e);
  function i({ translateExtent: a, width: l, height: c, zoomStep: d = 10, pannable: p = !0, zoomable: f = !0, inversePan: g = !1 }) {
    const h = (x) => {
      const $ = n();
      if (x.sourceEvent.type !== "wheel" || !t)
        return;
      const k = -x.sourceEvent.deltaY * (x.sourceEvent.deltaMode === 1 ? 0.05 : x.sourceEvent.deltaMode ? 1 : 2e-3) * d, M = $[2] * Math.pow(2, k);
      t.scaleTo(M);
    };
    let v = [0, 0];
    const C = (x) => {
      (x.sourceEvent.type === "mousedown" || x.sourceEvent.type === "touchstart") && (v = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ]);
    }, w = (x) => {
      const $ = n();
      if (x.sourceEvent.type !== "mousemove" && x.sourceEvent.type !== "touchmove" || !t)
        return;
      const k = [
        x.sourceEvent.clientX ?? x.sourceEvent.touches[0].clientX,
        x.sourceEvent.clientY ?? x.sourceEvent.touches[0].clientY
      ], M = [k[0] - v[0], k[1] - v[1]];
      v = k;
      const z = r() * Math.max($[2], Math.log($[2])) * (g ? -1 : 1), q = {
        x: $[0] - M[0] * z,
        y: $[1] - M[1] * z
      }, U = [
        [0, 0],
        [l, c]
      ];
      t.setViewportConstrained({
        x: q.x,
        y: q.y,
        zoom: $[2]
      }, U, a);
    }, E = gc().on("start", C).on("zoom", p ? w : null).on("zoom.wheel", f ? h : null);
    o.call(E, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: Ft
  };
}
const O0 = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, zi = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), Qi = ({ x: e, y: t, zoom: n }) => Di.translate(e, t).scale(n), Cr = (e, t) => e.target.closest(`.${t}`), Vc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), D0 = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2, es = (e, t = 0, n = D0, r = () => {
}) => {
  const o = typeof t == "number" && t > 0;
  return o || r(), o ? e.transition().duration(t).ease(n).on("end", r) : e;
}, Ac = (e) => {
  const t = e.ctrlKey && kr() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function V0({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: c }) {
  return (d) => {
    if (Cr(d, t))
      return !1;
    d.preventDefault(), d.stopImmediatePropagation();
    const p = n.property("__zoom").k || 1;
    if (d.ctrlKey && s) {
      const C = Ft(d), w = Ac(d), E = p * Math.pow(2, w);
      r.scaleTo(n, E, C, d);
      return;
    }
    const f = d.deltaMode === 1 ? 20 : 1;
    let g = o === cn.Vertical ? 0 : d.deltaX * f, h = o === cn.Horizontal ? 0 : d.deltaY * f;
    !kr() && d.shiftKey && o !== cn.Vertical && (g = d.deltaY * f, h = 0), r.translateBy(
      n,
      -(g / p) * i,
      -(h / p) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const v = zi(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a?.(d, v)), e.isPanScrolling && (l?.(d, v), e.panScrollTimeout = setTimeout(() => {
      c?.(d, v), e.isPanScrolling = !1;
    }, 150));
  };
}
function A0({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    const i = r.type === "wheel", s = !t && i && !r.ctrlKey, a = Cr(r, e);
    if (r.ctrlKey && i && a && r.preventDefault(), s || a)
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function H0({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    if (r.sourceEvent?.internal)
      return;
    const o = zi(r.transform);
    e.mouseButton = r.sourceEvent?.button || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, r.sourceEvent?.type === "mousedown" && t(!0), n && n?.(r.sourceEvent, o);
  };
}
function z0({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    e.usedRightMouseButton = !!(n && Vc(t, e.mouseButton ?? 0)), i.sourceEvent?.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !i.sourceEvent?.internal && o?.(i.sourceEvent, zi(i.transform));
  };
}
function R0({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    if (!s.sourceEvent?.internal && (e.isZoomingOrPanning = !1, i && Vc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && O0(e.prevViewport, s.transform))) {
      const a = zi(s.transform);
      e.prevViewport = a, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          o?.(s.sourceEvent, a);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function I0({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: c }) {
  return (d) => {
    const p = e || t, f = n && d.ctrlKey;
    if (d.button === 1 && d.type === "mousedown" && (Cr(d, `${c}-flow__node`) || Cr(d, `${c}-flow__edge`)))
      return !0;
    if (!r && !p && !o && !i && !n || s || Cr(d, a) && d.type === "wheel" || Cr(d, l) && (d.type !== "wheel" || o && d.type === "wheel" && !e) || !n && d.ctrlKey && d.type === "wheel")
      return !1;
    if (!n && d.type === "touchstart" && d.touches?.length > 1)
      return d.preventDefault(), !1;
    if (!p && !o && !f && d.type === "wheel" || !r && (d.type === "mousedown" || d.type === "touchstart") || Array.isArray(r) && !r.includes(d.button) && d.type === "mousedown")
      return !1;
    const g = Array.isArray(r) && r.includes(d.button) || !d.button || d.button <= 1;
    return (!d.ctrlKey || d.type === "wheel") && g;
  };
}
function B0({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: c }) {
  const d = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, p = e.getBoundingClientRect(), f = gc().clickDistance(!Cn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), g = Kt(e).call(f);
  x({
    x: i.x,
    y: i.y,
    zoom: Ar(i.zoom, t, n)
  }, [
    [0, 0],
    [p.width, p.height]
  ], o);
  const h = g.on("wheel.zoom"), v = g.on("dblclick.zoom");
  f.wheelDelta(Ac);
  function C(_, D) {
    return g ? new Promise((b) => {
      f?.interpolate(D?.interpolate === "linear" ? no : Go).transform(es(g, D?.duration, D?.ease, () => b(!0)), _);
    }) : Promise.resolve(!1);
  }
  function w({ noWheelClassName: _, noPanClassName: D, onPaneContextMenu: b, userSelectionActive: P, panOnScroll: L, panOnDrag: A, panOnScrollMode: B, panOnScrollSpeed: O, preventScrolling: Z, zoomOnPinch: F, zoomOnScroll: X, zoomOnDoubleClick: te, zoomActivationKeyPressed: W, lib: pe, onTransformChange: oe }) {
    P && !d.isZoomingOrPanning && E();
    const ge = L && !W && !P ? V0({
      zoomPanValues: d,
      noWheelClassName: _,
      d3Selection: g,
      d3Zoom: f,
      panOnScrollMode: B,
      panOnScrollSpeed: O,
      zoomOnPinch: F,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : A0({
      noWheelClassName: _,
      preventScrolling: Z,
      d3ZoomHandler: h
    });
    if (g.on("wheel.zoom", ge, { passive: !1 }), !P) {
      const ke = H0({
        zoomPanValues: d,
        onDraggingChange: c,
        onPanZoomStart: a
      });
      f.on("start", ke);
      const ae = z0({
        zoomPanValues: d,
        panOnDrag: A,
        onPaneContextMenu: !!b,
        onPanZoom: s,
        onTransformChange: oe
      });
      f.on("zoom", ae);
      const se = R0({
        zoomPanValues: d,
        panOnDrag: A,
        panOnScroll: L,
        onPaneContextMenu: b,
        onPanZoomEnd: l,
        onDraggingChange: c
      });
      f.on("end", se);
    }
    const G = I0({
      zoomActivationKeyPressed: W,
      panOnDrag: A,
      zoomOnScroll: X,
      panOnScroll: L,
      zoomOnDoubleClick: te,
      zoomOnPinch: F,
      userSelectionActive: P,
      noPanClassName: D,
      noWheelClassName: _,
      lib: pe
    });
    f.filter(G), te ? g.on("dblclick.zoom", v) : g.on("dblclick.zoom", null);
  }
  function E() {
    f.on("zoom", null);
  }
  async function x(_, D, b) {
    const P = Qi(_), L = f?.constrain()(P, D, b);
    return L && await C(L), new Promise((A) => A(L));
  }
  async function $(_, D) {
    const b = Qi(_);
    return await C(b, D), new Promise((P) => P(b));
  }
  function k(_) {
    if (g) {
      const D = Qi(_), b = g.property("__zoom");
      (b.k !== _.zoom || b.x !== _.x || b.y !== _.y) && f?.transform(g, D, null, { sync: !0 });
    }
  }
  function M() {
    const _ = g ? pc(g.node()) : { x: 0, y: 0, k: 1 };
    return { x: _.x, y: _.y, zoom: _.k };
  }
  function z(_, D) {
    return g ? new Promise((b) => {
      f?.interpolate(D?.interpolate === "linear" ? no : Go).scaleTo(es(g, D?.duration, D?.ease, () => b(!0)), _);
    }) : Promise.resolve(!1);
  }
  function q(_, D) {
    return g ? new Promise((b) => {
      f?.interpolate(D?.interpolate === "linear" ? no : Go).scaleBy(es(g, D?.duration, D?.ease, () => b(!0)), _);
    }) : Promise.resolve(!1);
  }
  function U(_) {
    f?.scaleExtent(_);
  }
  function j(_) {
    f?.translateExtent(_);
  }
  function T(_) {
    const D = !Cn(_) || _ < 0 ? 0 : _;
    f?.clickDistance(D);
  }
  return {
    update: w,
    destroy: E,
    setViewport: $,
    setViewportConstrained: x,
    getViewport: M,
    scaleTo: z,
    scaleBy: q,
    setScaleExtent: U,
    setTranslateExtent: j,
    syncViewport: k,
    setClickDistance: T
  };
}
var El;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(El || (El = {}));
var q0 = /* @__PURE__ */ J("<div><!></div>");
function Xn(e, t) {
  ue(t, !0);
  let n = y(t, "id", 7, null), r = y(t, "type", 7, "source"), o = y(t, "position", 23, () => xe.Top), i = y(t, "style", 7), s = y(t, "class", 7), a = y(t, "isConnectable", 7), l = y(t, "isConnectableStart", 7, !0), c = y(t, "isConnectableEnd", 7, !0), d = y(t, "isValidConnection", 7), p = y(t, "onconnect", 7), f = y(t, "ondisconnect", 7), g = y(t, "children", 7), h = /* @__PURE__ */ je(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "id",
    "type",
    "position",
    "style",
    "class",
    "isConnectable",
    "isConnectableStart",
    "isConnectableEnd",
    "isValidConnection",
    "onconnect",
    "ondisconnect",
    "children"
  ]);
  const v = jn("svelteflow__node_id"), C = jn("svelteflow__node_connectable");
  let w = /* @__PURE__ */ S(() => r() === "target"), E = /* @__PURE__ */ S(() => a() !== void 0 ? a() : C.value), x = Qt(), $ = /* @__PURE__ */ S(() => x.ariaLabelConfig), k = null;
  pu(() => {
    if (p() || f()) {
      x.edges;
      let O = x.connectionLookup.get(`${v}-${r()}${n() ? `-${n()}` : ""}`);
      if (k && !Zv(O, k)) {
        const Z = O ?? /* @__PURE__ */ new Map();
        gl(k, Z, f()), gl(Z, k, p());
      }
      k = new Map(O);
    }
  });
  let M = /* @__PURE__ */ S(() => {
    if (!x.connection.inProgress)
      return [!1, !1, !1, !1, null];
    const { fromHandle: O, toHandle: Z, isValid: F } = x.connection, X = O && O.nodeId === v && O.type === r() && O.id === n(), te = Z && Z.nodeId === v && Z.type === r() && Z.id === n(), W = x.connectionMode === Vr.Strict ? O?.type !== r() : v !== O?.nodeId || n() !== O?.id;
    return [
      !0,
      X,
      te,
      W,
      te && F
    ];
  }), z = /* @__PURE__ */ S(() => xo(u(M), 5)), q = /* @__PURE__ */ S(() => u(z)[0]), U = /* @__PURE__ */ S(() => u(z)[1]), j = /* @__PURE__ */ S(() => u(z)[2]), T = /* @__PURE__ */ S(() => u(z)[3]), _ = /* @__PURE__ */ S(() => u(z)[4]);
  function D(O) {
    const Z = x.onbeforeconnect?.(O) ?? O;
    Z && (x.addEdge(Z), x.onconnect?.(O));
  }
  function b(O) {
    const Z = _c(O);
    (Z && O.button === 0 || !Z) && Sl.onPointerDown(O, {
      handleId: n(),
      nodeId: v,
      isTarget: u(w),
      connectionRadius: x.connectionRadius,
      domNode: x.domNode,
      nodeLookup: x.nodeLookup,
      connectionMode: x.connectionMode,
      lib: "svelte",
      autoPanOnConnect: x.autoPanOnConnect,
      flowId: x.flowId,
      isValidConnection: d() ?? x.isValidConnection,
      updateConnection: x.updateConnection,
      cancelConnection: x.cancelConnection,
      panBy: x.panBy,
      onConnect: D,
      onConnectStart: (F, X) => {
        x.onconnectstart?.(F, {
          nodeId: X.nodeId,
          handleId: X.handleId,
          handleType: X.handleType
        });
      },
      onConnectEnd: (F, X) => {
        x.onconnectend?.(F, X);
      },
      getTransform: () => [x.viewport.x, x.viewport.y, x.viewport.zoom],
      getFromHandle: () => x.connection.fromHandle,
      dragThreshold: x.connectionDragThreshold
    });
  }
  function P(O) {
    if (!v || !x.clickConnectStartHandle && !l())
      return;
    if (!x.clickConnectStartHandle) {
      x.onclickconnectstart?.(O, { nodeId: v, handleId: n(), handleType: r() }), x.clickConnectStartHandle = { nodeId: v, type: r(), id: n() };
      return;
    }
    const Z = kc(O.target), F = d() ?? x.isValidConnection, { connectionMode: X, clickConnectStartHandle: te, flowId: W, nodeLookup: pe } = x, { connection: oe, isValid: ge } = Sl.isValid(O, {
      handle: { nodeId: v, id: n(), type: r() },
      connectionMode: X,
      fromNodeId: te.nodeId,
      fromHandleId: te.id ?? null,
      fromType: te.type,
      isValidConnection: F,
      flowId: W,
      doc: Z,
      lib: "svelte",
      nodeLookup: pe
    });
    ge && oe && D(oe);
    const G = structuredClone(eu(x.connection));
    delete G.inProgress, G.toPosition = G.toHandle ? G.toHandle.position : null, x.onclickconnectend?.(O, G), x.clickConnectStartHandle = null;
  }
  var L = q0(), A = () => {
  };
  ut(
    L,
    (O) => ({
      "data-handleid": n(),
      "data-nodeid": v,
      "data-handlepos": o(),
      "data-id": `${x.flowId ?? ""}-${v ?? ""}-${n() ?? "null" ?? ""}-${r() ?? ""}`,
      class: [
        "svelte-flow__handle",
        `svelte-flow__handle-${o()}`,
        x.noDragClass,
        x.noPanClass,
        o(),
        s()
      ],
      onmousedown: b,
      ontouchstart: b,
      onclick: x.clickConnect ? P : void 0,
      onkeypress: A,
      style: i(),
      role: "button",
      "aria-label": u($)["handle.ariaLabel"],
      tabindex: "-1",
      ...h,
      [Bn]: O
    }),
    [
      () => ({
        valid: u(_),
        connectingto: u(j),
        connectingfrom: u(U),
        source: !u(w),
        target: u(w),
        connectablestart: l(),
        connectableend: c(),
        connectable: u(E),
        connectionindicator: u(E) && (!u(q) || u(T)) && (u(q) || x.clickConnectStartHandle ? c() : l())
      })
    ]
  );
  var B = I(L);
  return rt(B, () => g() ?? ft), R(L), N(e, L), ce({
    get id() {
      return n();
    },
    set id(O = null) {
      n(O), m();
    },
    get type() {
      return r();
    },
    set type(O = "source") {
      r(O), m();
    },
    get position() {
      return o();
    },
    set position(O = xe.Top) {
      o(O), m();
    },
    get style() {
      return i();
    },
    set style(O) {
      i(O), m();
    },
    get class() {
      return s();
    },
    set class(O) {
      s(O), m();
    },
    get isConnectable() {
      return a();
    },
    set isConnectable(O) {
      a(O), m();
    },
    get isConnectableStart() {
      return l();
    },
    set isConnectableStart(O = !0) {
      l(O), m();
    },
    get isConnectableEnd() {
      return c();
    },
    set isConnectableEnd(O = !0) {
      c(O), m();
    },
    get isValidConnection() {
      return d();
    },
    set isValidConnection(O) {
      d(O), m();
    },
    get onconnect() {
      return p();
    },
    set onconnect(O) {
      p(O), m();
    },
    get ondisconnect() {
      return f();
    },
    set ondisconnect(O) {
      f(O), m();
    },
    get children() {
      return g();
    },
    set children(O) {
      g(O), m();
    }
  });
}
ie(
  Xn,
  {
    id: {},
    type: {},
    position: {},
    style: {},
    class: {},
    isConnectable: {},
    isConnectableStart: {},
    isConnectableEnd: {},
    isValidConnection: {},
    onconnect: {},
    ondisconnect: {},
    children: {}
  },
  [],
  [],
  !0
);
var Z0 = /* @__PURE__ */ J("<!> <!>", 1);
function va(e, t) {
  ue(t, !0);
  let n = y(t, "data", 7), r = y(t, "targetPosition", 23, () => xe.Top), o = y(t, "sourcePosition", 23, () => xe.Bottom);
  var i = Z0(), s = fe(i);
  Xn(s, {
    type: "target",
    get position() {
      return r();
    }
  });
  var a = H(s), l = H(a);
  return Xn(l, {
    type: "source",
    get position() {
      return o();
    }
  }), Le(() => Ye(a, ` ${n()?.label ?? ""} `)), N(e, i), ce({
    get data() {
      return n();
    },
    set data(c) {
      n(c), m();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(c = xe.Top) {
      r(c), m();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(c = xe.Bottom) {
      o(c), m();
    }
  });
}
ie(va, { data: {}, targetPosition: {}, sourcePosition: {} }, [], [], !0);
var K0 = /* @__PURE__ */ J(" <!>", 1);
function Hc(e, t) {
  ue(t, !0);
  let n = y(t, "data", 23, () => ({ label: "Node" })), r = y(t, "sourcePosition", 23, () => xe.Bottom);
  be();
  var o = K0(), i = fe(o), s = H(i);
  return Xn(s, {
    type: "source",
    get position() {
      return r();
    }
  }), Le(() => Ye(i, `${n()?.label ?? ""} `)), N(e, o), ce({
    get data() {
      return n();
    },
    set data(a = { label: "Node" }) {
      n(a), m();
    },
    get sourcePosition() {
      return r();
    },
    set sourcePosition(a = xe.Bottom) {
      r(a), m();
    }
  });
}
ie(Hc, { data: {}, sourcePosition: {} }, [], [], !0);
var j0 = /* @__PURE__ */ J(" <!>", 1);
function zc(e, t) {
  ue(t, !0);
  let n = y(t, "data", 23, () => ({ label: "Node" })), r = y(t, "targetPosition", 23, () => xe.Top);
  be();
  var o = j0(), i = fe(o), s = H(i);
  return Xn(s, {
    type: "target",
    get position() {
      return r();
    }
  }), Le(() => Ye(i, `${n()?.label ?? ""} `)), N(e, o), ce({
    get data() {
      return n();
    },
    set data(a = { label: "Node" }) {
      n(a), m();
    },
    get targetPosition() {
      return r();
    },
    set targetPosition(a = xe.Top) {
      r(a), m();
    }
  });
}
ie(zc, { data: {}, targetPosition: {} }, [], [], !0);
function Rc(e, t) {
}
ie(Rc, {}, [], [], !0);
function ts(e, t, n) {
  if (!n || !t)
    return;
  const r = n === "root" ? t : t.querySelector(`.svelte-flow__${n}`);
  r && r.appendChild(e);
}
function Ic(e, t) {
  const n = /* @__PURE__ */ S(Qt), r = /* @__PURE__ */ S(() => u(n).domNode);
  let o;
  return u(r) ? ts(e, u(r), t) : o = Fs(() => {
    nt(() => {
      ts(e, u(r), t), o?.();
    });
  }), {
    async update(i) {
      ts(e, u(r), i);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e), o?.();
    }
  };
}
function Bc() {
  let e = /* @__PURE__ */ Me(typeof window > "u");
  if (u(e)) {
    const t = Fs(() => {
      nt(() => {
        Y(e, !1), t?.();
      });
    });
  }
  return {
    get value() {
      return u(e);
    }
  };
}
const Pl = (e) => jv(e), Y0 = (e) => vc(e);
function gn(e) {
  return e === void 0 ? void 0 : `${e}px`;
}
const mi = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
var F0 = /* @__PURE__ */ J("<div><!></div>");
const W0 = {
  hash: "svelte-w2n27y",
  code: ".transparent.svelte-w2n27y {background:transparent;}"
};
function qc(e, t) {
  ue(t, !0), qe(e, W0);
  let n = y(t, "x", 7, 0), r = y(t, "y", 7, 0), o = y(t, "width", 7), i = y(t, "height", 7), s = y(t, "selectEdgeOnClick", 7, !1), a = y(t, "transparent", 7, !1), l = y(t, "class", 7), c = y(t, "children", 7), d = /* @__PURE__ */ je(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "x",
    "y",
    "width",
    "height",
    "selectEdgeOnClick",
    "transparent",
    "class",
    "children"
  ]);
  const p = Qt(), f = jn("svelteflow__edge_id");
  let g = /* @__PURE__ */ S(() => p.visible.edges.get(f)?.zIndex);
  var h = F0(), v = () => {
    s() && f && p.handleEdgeSelection(f);
  };
  ut(
    h,
    (w) => ({
      class: [
        "svelte-flow__edge-label",
        { transparent: a() },
        l()
      ],
      tabindex: "-1",
      onclick: v,
      ...d,
      [on]: w
    }),
    [
      () => ({
        display: Bc().value ? "none" : void 0,
        cursor: s() ? "pointer" : void 0,
        transform: `translate(-50%, -50%) translate(${n() ?? ""}px,${r() ?? ""}px)`,
        "pointer-events": "all",
        width: gn(o()),
        height: gn(i()),
        "z-index": u(g)
      })
    ],
    "svelte-w2n27y"
  );
  var C = I(h);
  return rt(C, () => c() ?? ft), R(h), vt(h, (w, E) => Ic?.(w, E), () => "edge-labels"), N(e, h), ce({
    get x() {
      return n();
    },
    set x(w = 0) {
      n(w), m();
    },
    get y() {
      return r();
    },
    set y(w = 0) {
      r(w), m();
    },
    get width() {
      return o();
    },
    set width(w) {
      o(w), m();
    },
    get height() {
      return i();
    },
    set height(w) {
      i(w), m();
    },
    get selectEdgeOnClick() {
      return s();
    },
    set selectEdgeOnClick(w = !1) {
      s(w), m();
    },
    get transparent() {
      return a();
    },
    set transparent(w = !1) {
      a(w), m();
    },
    get class() {
      return l();
    },
    set class(w) {
      l(w), m();
    },
    get children() {
      return c();
    },
    set children(w) {
      c(w), m();
    }
  });
}
ie(
  qc,
  {
    x: {},
    y: {},
    width: {},
    height: {},
    selectEdgeOnClick: {},
    transparent: {},
    class: {},
    children: {}
  },
  [],
  [],
  !0
);
var X0 = /* @__PURE__ */ we("<path></path>"), U0 = /* @__PURE__ */ we('<path fill="none"></path><!><!>', 1);
function No(e, t) {
  ue(t, !0);
  let n = y(t, "id", 7), r = y(t, "path", 7), o = y(t, "label", 7), i = y(t, "labelX", 7), s = y(t, "labelY", 7), a = y(t, "labelStyle", 7), l = y(t, "markerStart", 7), c = y(t, "markerEnd", 7), d = y(t, "style", 7), p = y(t, "interactionWidth", 7, 20), f = y(t, "class", 7), g = /* @__PURE__ */ je(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "id",
    "path",
    "label",
    "labelX",
    "labelY",
    "labelStyle",
    "markerStart",
    "markerEnd",
    "style",
    "interactionWidth",
    "class"
  ]);
  var h = U0(), v = fe(h), C = H(v);
  {
    var w = ($) => {
      var k = X0();
      ut(k, () => ({
        d: r(),
        "stroke-opacity": 0,
        "stroke-width": p(),
        fill: "none",
        class: "svelte-flow__edge-interaction",
        ...g
      })), N($, k);
    };
    le(C, ($) => {
      p() > 0 && $(w);
    });
  }
  var E = H(C);
  {
    var x = ($) => {
      qc($, {
        get x() {
          return i();
        },
        get y() {
          return s();
        },
        get style() {
          return a();
        },
        selectEdgeOnClick: !0,
        children: (k, M) => {
          be();
          var z = Te();
          Le(() => Ye(z, o())), N(k, z);
        },
        $$slots: { default: !0 }
      });
    };
    le(E, ($) => {
      o() && $(x);
    });
  }
  return Le(() => {
    $e(v, "id", n()), $e(v, "d", r()), Nt(v, 0, An(["svelte-flow__edge-path", f()])), $e(v, "marker-start", l()), $e(v, "marker-end", c()), Ct(v, d());
  }), N(e, h), ce({
    get id() {
      return n();
    },
    set id($) {
      n($), m();
    },
    get path() {
      return r();
    },
    set path($) {
      r($), m();
    },
    get label() {
      return o();
    },
    set label($) {
      o($), m();
    },
    get labelX() {
      return i();
    },
    set labelX($) {
      i($), m();
    },
    get labelY() {
      return s();
    },
    set labelY($) {
      s($), m();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle($) {
      a($), m();
    },
    get markerStart() {
      return l();
    },
    set markerStart($) {
      l($), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd($) {
      c($), m();
    },
    get style() {
      return d();
    },
    set style($) {
      d($), m();
    },
    get interactionWidth() {
      return p();
    },
    set interactionWidth($ = 20) {
      p($), m();
    },
    get class() {
      return f();
    },
    set class($) {
      f($), m();
    }
  });
}
ie(
  No,
  {
    id: {},
    path: {},
    label: {},
    labelX: {},
    labelY: {},
    labelStyle: {},
    markerStart: {},
    markerEnd: {},
    style: {},
    interactionWidth: {},
    class: {}
  },
  [],
  [],
  !0
);
function ma(e, t) {
  ue(t, !0);
  let n = y(t, "id", 7), r = y(t, "interactionWidth", 7), o = y(t, "label", 7), i = y(t, "labelStyle", 7), s = y(t, "markerEnd", 7), a = y(t, "markerStart", 7), l = y(t, "pathOptions", 7), c = y(t, "sourcePosition", 7), d = y(t, "sourceX", 7), p = y(t, "sourceY", 7), f = y(t, "style", 7), g = y(t, "targetPosition", 7), h = y(t, "targetX", 7), v = y(t, "targetY", 7), C = /* @__PURE__ */ S(() => Sc({
    sourceX: d(),
    sourceY: p(),
    targetX: h(),
    targetY: v(),
    sourcePosition: c(),
    targetPosition: g(),
    curvature: l()?.curvature
  })), w = /* @__PURE__ */ S(() => xo(u(C), 3)), E = /* @__PURE__ */ S(() => u(w)[0]), x = /* @__PURE__ */ S(() => u(w)[1]), $ = /* @__PURE__ */ S(() => u(w)[2]);
  return No(e, {
    get id() {
      return n();
    },
    get path() {
      return u(E);
    },
    get labelX() {
      return u(x);
    },
    get labelY() {
      return u($);
    },
    get label() {
      return o();
    },
    get labelStyle() {
      return i();
    },
    get markerStart() {
      return a();
    },
    get markerEnd() {
      return s();
    },
    get interactionWidth() {
      return r();
    },
    get style() {
      return f();
    }
  }), ce({
    get id() {
      return n();
    },
    set id(k) {
      n(k), m();
    },
    get interactionWidth() {
      return r();
    },
    set interactionWidth(k) {
      r(k), m();
    },
    get label() {
      return o();
    },
    set label(k) {
      o(k), m();
    },
    get labelStyle() {
      return i();
    },
    set labelStyle(k) {
      i(k), m();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(k) {
      s(k), m();
    },
    get markerStart() {
      return a();
    },
    set markerStart(k) {
      a(k), m();
    },
    get pathOptions() {
      return l();
    },
    set pathOptions(k) {
      l(k), m();
    },
    get sourcePosition() {
      return c();
    },
    set sourcePosition(k) {
      c(k), m();
    },
    get sourceX() {
      return d();
    },
    set sourceX(k) {
      d(k), m();
    },
    get sourceY() {
      return p();
    },
    set sourceY(k) {
      p(k), m();
    },
    get style() {
      return f();
    },
    set style(k) {
      f(k), m();
    },
    get targetPosition() {
      return g();
    },
    set targetPosition(k) {
      g(k), m();
    },
    get targetX() {
      return h();
    },
    set targetX(k) {
      h(k), m();
    },
    get targetY() {
      return v();
    },
    set targetY(k) {
      v(k), m();
    }
  });
}
ie(
  ma,
  {
    id: {},
    interactionWidth: {},
    label: {},
    labelStyle: {},
    markerEnd: {},
    markerStart: {},
    pathOptions: {},
    sourcePosition: {},
    sourceX: {},
    sourceY: {},
    style: {},
    targetPosition: {},
    targetX: {},
    targetY: {}
  },
  [],
  [],
  !0
);
function Zc(e, t) {
  ue(t, !0);
  let n = y(t, "interactionWidth", 7), r = y(t, "label", 7), o = y(t, "labelStyle", 7), i = y(t, "style", 7), s = y(t, "markerEnd", 7), a = y(t, "markerStart", 7), l = y(t, "sourcePosition", 7), c = y(t, "sourceX", 7), d = y(t, "sourceY", 7), p = y(t, "targetPosition", 7), f = y(t, "targetX", 7), g = y(t, "targetY", 7), h = /* @__PURE__ */ S(() => fa({
    sourceX: c(),
    sourceY: d(),
    targetX: f(),
    targetY: g(),
    sourcePosition: l(),
    targetPosition: p()
  })), v = /* @__PURE__ */ S(() => xo(u(h), 3)), C = /* @__PURE__ */ S(() => u(v)[0]), w = /* @__PURE__ */ S(() => u(v)[1]), E = /* @__PURE__ */ S(() => u(v)[2]);
  return No(e, {
    get path() {
      return u(C);
    },
    get labelX() {
      return u(w);
    },
    get labelY() {
      return u(E);
    },
    get label() {
      return r();
    },
    get labelStyle() {
      return o();
    },
    get markerStart() {
      return a();
    },
    get markerEnd() {
      return s();
    },
    get interactionWidth() {
      return n();
    },
    get style() {
      return i();
    }
  }), ce({
    get interactionWidth() {
      return n();
    },
    set interactionWidth(x) {
      n(x), m();
    },
    get label() {
      return r();
    },
    set label(x) {
      r(x), m();
    },
    get labelStyle() {
      return o();
    },
    set labelStyle(x) {
      o(x), m();
    },
    get style() {
      return i();
    },
    set style(x) {
      i(x), m();
    },
    get markerEnd() {
      return s();
    },
    set markerEnd(x) {
      s(x), m();
    },
    get markerStart() {
      return a();
    },
    set markerStart(x) {
      a(x), m();
    },
    get sourcePosition() {
      return l();
    },
    set sourcePosition(x) {
      l(x), m();
    },
    get sourceX() {
      return c();
    },
    set sourceX(x) {
      c(x), m();
    },
    get sourceY() {
      return d();
    },
    set sourceY(x) {
      d(x), m();
    },
    get targetPosition() {
      return p();
    },
    set targetPosition(x) {
      p(x), m();
    },
    get targetX() {
      return f();
    },
    set targetX(x) {
      f(x), m();
    },
    get targetY() {
      return g();
    },
    set targetY(x) {
      g(x), m();
    }
  });
}
ie(
  Zc,
  {
    interactionWidth: {},
    label: {},
    labelStyle: {},
    style: {},
    markerEnd: {},
    markerStart: {},
    sourcePosition: {},
    sourceX: {},
    sourceY: {},
    targetPosition: {},
    targetX: {},
    targetY: {}
  },
  [],
  [],
  !0
);
function Kc(e, t) {
  ue(t, !0);
  let n = y(t, "sourceX", 7), r = y(t, "sourceY", 7), o = y(t, "targetX", 7), i = y(t, "targetY", 7), s = y(t, "label", 7), a = y(t, "labelStyle", 7), l = y(t, "markerStart", 7), c = y(t, "markerEnd", 7), d = y(t, "interactionWidth", 7), p = y(t, "style", 7), f = /* @__PURE__ */ S(() => Pc({
    sourceX: n(),
    sourceY: r(),
    targetX: o(),
    targetY: i()
  })), g = /* @__PURE__ */ S(() => xo(u(f), 3)), h = /* @__PURE__ */ S(() => u(g)[0]), v = /* @__PURE__ */ S(() => u(g)[1]), C = /* @__PURE__ */ S(() => u(g)[2]);
  return No(e, {
    get path() {
      return u(h);
    },
    get labelX() {
      return u(v);
    },
    get labelY() {
      return u(C);
    },
    get label() {
      return s();
    },
    get labelStyle() {
      return a();
    },
    get markerStart() {
      return l();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return p();
    }
  }), ce({
    get sourceX() {
      return n();
    },
    set sourceX(w) {
      n(w), m();
    },
    get sourceY() {
      return r();
    },
    set sourceY(w) {
      r(w), m();
    },
    get targetX() {
      return o();
    },
    set targetX(w) {
      o(w), m();
    },
    get targetY() {
      return i();
    },
    set targetY(w) {
      i(w), m();
    },
    get label() {
      return s();
    },
    set label(w) {
      s(w), m();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(w) {
      a(w), m();
    },
    get markerStart() {
      return l();
    },
    set markerStart(w) {
      l(w), m();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(w) {
      c(w), m();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(w) {
      d(w), m();
    },
    get style() {
      return p();
    },
    set style(w) {
      p(w), m();
    }
  });
}
ie(
  Kc,
  {
    sourceX: {},
    sourceY: {},
    targetX: {},
    targetY: {},
    label: {},
    labelStyle: {},
    markerStart: {},
    markerEnd: {},
    interactionWidth: {},
    style: {}
  },
  [],
  [],
  !0
);
function jc(e, t) {
  ue(t, !0);
  let n = y(t, "sourceX", 7), r = y(t, "sourceY", 7), o = y(t, "sourcePosition", 7), i = y(t, "targetX", 7), s = y(t, "targetY", 7), a = y(t, "targetPosition", 7), l = y(t, "label", 7), c = y(t, "labelStyle", 7), d = y(t, "markerStart", 7), p = y(t, "markerEnd", 7), f = y(t, "interactionWidth", 7), g = y(t, "style", 7), h = /* @__PURE__ */ S(() => fa({
    sourceX: n(),
    sourceY: r(),
    targetX: i(),
    targetY: s(),
    sourcePosition: o(),
    targetPosition: a(),
    borderRadius: 0
  })), v = /* @__PURE__ */ S(() => xo(u(h), 3)), C = /* @__PURE__ */ S(() => u(v)[0]), w = /* @__PURE__ */ S(() => u(v)[1]), E = /* @__PURE__ */ S(() => u(v)[2]);
  return No(e, {
    get path() {
      return u(C);
    },
    get labelX() {
      return u(w);
    },
    get labelY() {
      return u(E);
    },
    get label() {
      return l();
    },
    get labelStyle() {
      return c();
    },
    get markerStart() {
      return d();
    },
    get markerEnd() {
      return p();
    },
    get interactionWidth() {
      return f();
    },
    get style() {
      return g();
    }
  }), ce({
    get sourceX() {
      return n();
    },
    set sourceX(x) {
      n(x), m();
    },
    get sourceY() {
      return r();
    },
    set sourceY(x) {
      r(x), m();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(x) {
      o(x), m();
    },
    get targetX() {
      return i();
    },
    set targetX(x) {
      i(x), m();
    },
    get targetY() {
      return s();
    },
    set targetY(x) {
      s(x), m();
    },
    get targetPosition() {
      return a();
    },
    set targetPosition(x) {
      a(x), m();
    },
    get label() {
      return l();
    },
    set label(x) {
      l(x), m();
    },
    get labelStyle() {
      return c();
    },
    set labelStyle(x) {
      c(x), m();
    },
    get markerStart() {
      return d();
    },
    set markerStart(x) {
      d(x), m();
    },
    get markerEnd() {
      return p();
    },
    set markerEnd(x) {
      p(x), m();
    },
    get interactionWidth() {
      return f();
    },
    set interactionWidth(x) {
      f(x), m();
    },
    get style() {
      return g();
    },
    set style(x) {
      g(x), m();
    }
  });
}
ie(
  jc,
  {
    sourceX: {},
    sourceY: {},
    sourcePosition: {},
    targetX: {},
    targetY: {},
    targetPosition: {},
    label: {},
    labelStyle: {},
    markerStart: {},
    markerEnd: {},
    interactionWidth: {},
    style: {}
  },
  [],
  [],
  !0
);
function G0(e) {
  let t = 0, n = ur(0), r;
  return () => {
    cp() && (u(n), _o(() => (t === 0 && (r = dt(() => e(() => Fo(n)))), t += 1, () => {
      $p().then(() => {
        t -= 1, t === 0 && (r?.(), r = void 0);
      });
    })));
  };
}
class J0 {
  #t;
  #e;
  /**
   *
   * @param {() => T} fn
   * @param {(update: () => void) => void} onsubscribe
   */
  constructor(t, n) {
    this.#t = t, this.#e = G0(n);
  }
  get current() {
    return this.#e(), this.#t();
  }
}
const Q0 = /\(.+\)/, em = /* @__PURE__ */ new Set(["all", "print", "screen", "and", "or", "not", "only"]);
class tm extends J0 {
  /**
   * @param {string} query A media query string
   * @param {boolean} [fallback] Fallback value for the server
   */
  constructor(t, n) {
    let r = Q0.test(t) || // we need to use `some` here because technically this `window.matchMedia('random,screen')` still returns true
    t.split(/[\s,]+/).some((i) => em.has(i.trim())) ? t : `(${t})`;
    const o = window.matchMedia(r);
    super(
      () => o.matches,
      (i) => ds(o, "change", i)
    );
  }
}
function nm(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  return ca(e, { x: 0, y: 0, width: n, height: r }, t, !0).forEach((i) => {
    o.set(i.id, i);
  }), o;
}
function Ll(e) {
  const { edges: t, defaultEdgeOptions: n, nodeLookup: r, previousEdges: o, connectionMode: i, onerror: s, onlyRenderVisible: a, elevateEdgesOnSelect: l } = e, c = /* @__PURE__ */ new Map();
  for (const d of t) {
    const p = r.get(d.source), f = r.get(d.target);
    if (!p || !f)
      continue;
    if (a) {
      const { visibleNodes: v, transform: C, width: w, height: E } = e;
      if (i0({
        sourceNode: p,
        targetNode: f,
        width: w,
        height: E,
        transform: C
      }))
        v.set(p.id, p), v.set(f.id, f);
      else
        continue;
    }
    const g = o.get(d.id);
    if (g && d === g.edge && p == g.sourceNode && f == g.targetNode) {
      c.set(d.id, g);
      continue;
    }
    const h = f0({
      id: d.id,
      sourceNode: p,
      targetNode: f,
      sourceHandle: d.sourceHandle || null,
      targetHandle: d.targetHandle || null,
      connectionMode: i,
      onError: s
    });
    h && c.set(d.id, {
      ...n,
      ...d,
      ...h,
      zIndex: o0({
        selected: d.selected,
        zIndex: d.zIndex ?? n.zIndex,
        sourceNode: p,
        targetNode: f,
        elevateOnSelect: l
      }),
      sourceNode: p,
      targetNode: f,
      edge: d
    });
  }
  return c;
}
const Yc = {
  input: Hc,
  output: zc,
  default: va,
  group: Rc
}, Fc = {
  straight: Kc,
  smoothstep: Zc,
  default: ma,
  step: jc
};
function rm(e, t, n, r, o, i) {
  if (t && !n && r && o) {
    const s = To(i, {
      filter: (a) => !!((a.width || a.initialWidth) && (a.height || a.initialHeight))
    });
    return da(s, r, o, 0.5, 2, 0.1);
  } else
    return n ?? { x: 0, y: 0, zoom: 1 };
}
function om(e) {
  class t {
    #t = /* @__PURE__ */ S(() => e.props.id ?? "1");
    get flowId() {
      return u(this.#t);
    }
    set flowId(r) {
      Y(this.#t, r);
    }
    #e = /* @__PURE__ */ Me(null);
    get domNode() {
      return u(this.#e);
    }
    set domNode(r) {
      Y(this.#e, r);
    }
    #n = /* @__PURE__ */ Me(null);
    get panZoom() {
      return u(this.#n);
    }
    set panZoom(r) {
      Y(this.#n, r);
    }
    #r = /* @__PURE__ */ Me(e.width ?? 0);
    get width() {
      return u(this.#r);
    }
    set width(r) {
      Y(this.#r, r);
    }
    #o = /* @__PURE__ */ Me(e.height ?? 0);
    get height() {
      return u(this.#o);
    }
    set height(r) {
      Y(this.#o, r);
    }
    #i = /* @__PURE__ */ S(() => {
      const r = m0(e.nodes, this.nodeLookup, this.parentLookup, {
        nodeExtent: this.nodeExtent,
        nodeOrigin: this.nodeOrigin,
        elevateNodesOnSelect: e.props.elevateNodesOnSelect ?? !0,
        checkEquality: !0
      });
      return this.fitViewQueued && r && (this.fitViewOptions?.duration ? this.resolveFitView() : queueMicrotask(() => {
        this.resolveFitView();
      })), r;
    });
    get nodesInitialized() {
      return u(this.#i);
    }
    set nodesInitialized(r) {
      Y(this.#i, r);
    }
    #s = /* @__PURE__ */ S(() => this.panZoom !== null);
    get viewportInitialized() {
      return u(this.#s);
    }
    set viewportInitialized(r) {
      Y(this.#s, r);
    }
    #a = /* @__PURE__ */ S(() => (k0(this.connectionLookup, this.edgeLookup, e.edges), e.edges));
    get _edges() {
      return u(this.#a);
    }
    set _edges(r) {
      Y(this.#a, r);
    }
    get nodes() {
      return this.nodesInitialized, e.nodes;
    }
    set nodes(r) {
      e.nodes = r;
    }
    get edges() {
      return this._edges;
    }
    set edges(r) {
      e.edges = r;
    }
    _prevSelectedNodes = [];
    _prevSelectedNodeIds = /* @__PURE__ */ new Set();
    #l = /* @__PURE__ */ S(() => {
      const r = this._prevSelectedNodeIds.size, o = /* @__PURE__ */ new Set(), i = this.nodes.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedNodeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedNodeIds.size > 0) && (this._prevSelectedNodes = i), this._prevSelectedNodeIds = o, this._prevSelectedNodes;
    });
    get selectedNodes() {
      return u(this.#l);
    }
    set selectedNodes(r) {
      Y(this.#l, r);
    }
    _prevSelectedEdges = [];
    _prevSelectedEdgeIds = /* @__PURE__ */ new Set();
    #u = /* @__PURE__ */ S(() => {
      const r = this._prevSelectedEdgeIds.size, o = /* @__PURE__ */ new Set(), i = this.edges.filter((s) => (s.selected && (o.add(s.id), this._prevSelectedEdgeIds.delete(s.id)), s.selected));
      return (r !== o.size || this._prevSelectedEdgeIds.size > 0) && (this._prevSelectedEdges = i), this._prevSelectedEdgeIds = o, this._prevSelectedEdges;
    });
    get selectedEdges() {
      return u(this.#u);
    }
    set selectedEdges(r) {
      Y(this.#u, r);
    }
    selectionChangeHandlers = /* @__PURE__ */ new Map();
    nodeLookup = /* @__PURE__ */ new Map();
    parentLookup = /* @__PURE__ */ new Map();
    connectionLookup = /* @__PURE__ */ new Map();
    edgeLookup = /* @__PURE__ */ new Map();
    _prevVisibleEdges = /* @__PURE__ */ new Map();
    #c = /* @__PURE__ */ S(() => {
      const {
        // We need to access this._nodes to trigger on changes
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        nodes: r,
        _edges: o,
        _prevVisibleEdges: i,
        nodeLookup: s,
        connectionMode: a,
        onerror: l,
        onlyRenderVisibleElements: c,
        defaultEdgeOptions: d
      } = this;
      let p, f;
      const g = {
        edges: o,
        defaultEdgeOptions: d,
        previousEdges: i,
        nodeLookup: s,
        connectionMode: a,
        elevateEdgesOnSelect: e.props.elevateEdgesOnSelect ?? !0,
        onerror: l
      };
      if (c) {
        const { viewport: h, width: v, height: C } = this, w = [h.x, h.y, h.zoom];
        p = nm(s, w, v, C), f = Ll({
          ...g,
          onlyRenderVisible: !0,
          visibleNodes: p,
          transform: w,
          width: v,
          height: C
        });
      } else
        p = this.nodeLookup, f = Ll(g);
      return { nodes: p, edges: f };
    });
    get visible() {
      return u(this.#c);
    }
    set visible(r) {
      Y(this.#c, r);
    }
    #d = /* @__PURE__ */ S(() => e.props.nodesDraggable ?? !0);
    get nodesDraggable() {
      return u(this.#d);
    }
    set nodesDraggable(r) {
      Y(this.#d, r);
    }
    #f = /* @__PURE__ */ S(() => e.props.nodesConnectable ?? !0);
    get nodesConnectable() {
      return u(this.#f);
    }
    set nodesConnectable(r) {
      Y(this.#f, r);
    }
    #p = /* @__PURE__ */ S(() => e.props.elementsSelectable ?? !0);
    get elementsSelectable() {
      return u(this.#p);
    }
    set elementsSelectable(r) {
      Y(this.#p, r);
    }
    #g = /* @__PURE__ */ S(() => e.props.nodesFocusable ?? !0);
    get nodesFocusable() {
      return u(this.#g);
    }
    set nodesFocusable(r) {
      Y(this.#g, r);
    }
    #h = /* @__PURE__ */ S(() => e.props.edgesFocusable ?? !0);
    get edgesFocusable() {
      return u(this.#h);
    }
    set edgesFocusable(r) {
      Y(this.#h, r);
    }
    #v = /* @__PURE__ */ S(() => e.props.disableKeyboardA11y ?? !1);
    get disableKeyboardA11y() {
      return u(this.#v);
    }
    set disableKeyboardA11y(r) {
      Y(this.#v, r);
    }
    #m = /* @__PURE__ */ S(() => e.props.minZoom ?? 0.5);
    get minZoom() {
      return u(this.#m);
    }
    set minZoom(r) {
      Y(this.#m, r);
    }
    #y = /* @__PURE__ */ S(() => e.props.maxZoom ?? 2);
    get maxZoom() {
      return u(this.#y);
    }
    set maxZoom(r) {
      Y(this.#y, r);
    }
    #w = /* @__PURE__ */ S(() => e.props.nodeOrigin ?? [0, 0]);
    get nodeOrigin() {
      return u(this.#w);
    }
    set nodeOrigin(r) {
      Y(this.#w, r);
    }
    #b = /* @__PURE__ */ S(() => e.props.nodeExtent ?? $s);
    get nodeExtent() {
      return u(this.#b);
    }
    set nodeExtent(r) {
      Y(this.#b, r);
    }
    #x = /* @__PURE__ */ S(() => e.props.translateExtent ?? $s);
    get translateExtent() {
      return u(this.#x);
    }
    set translateExtent(r) {
      Y(this.#x, r);
    }
    #$ = /* @__PURE__ */ S(() => e.props.defaultEdgeOptions ?? {});
    get defaultEdgeOptions() {
      return u(this.#$);
    }
    set defaultEdgeOptions(r) {
      Y(this.#$, r);
    }
    #k = /* @__PURE__ */ S(() => e.props.nodeDragThreshold ?? 1);
    get nodeDragThreshold() {
      return u(this.#k);
    }
    set nodeDragThreshold(r) {
      Y(this.#k, r);
    }
    #C = /* @__PURE__ */ S(() => e.props.autoPanOnNodeDrag ?? !0);
    get autoPanOnNodeDrag() {
      return u(this.#C);
    }
    set autoPanOnNodeDrag(r) {
      Y(this.#C, r);
    }
    #_ = /* @__PURE__ */ S(() => e.props.autoPanOnConnect ?? !0);
    get autoPanOnConnect() {
      return u(this.#_);
    }
    set autoPanOnConnect(r) {
      Y(this.#_, r);
    }
    #S = /* @__PURE__ */ S(() => e.props.autoPanOnNodeFocus ?? !0);
    get autoPanOnNodeFocus() {
      return u(this.#S);
    }
    set autoPanOnNodeFocus(r) {
      Y(this.#S, r);
    }
    #E = /* @__PURE__ */ S(() => e.props.connectionDragThreshold ?? 1);
    get connectionDragThreshold() {
      return u(this.#E);
    }
    set connectionDragThreshold(r) {
      Y(this.#E, r);
    }
    fitViewQueued = e.props.fitView ?? !1;
    fitViewOptions = e.props.fitViewOptions;
    fitViewResolver = null;
    #P = /* @__PURE__ */ S(() => e.props.snapGrid ?? null);
    get snapGrid() {
      return u(this.#P);
    }
    set snapGrid(r) {
      Y(this.#P, r);
    }
    #L = /* @__PURE__ */ Me(!1);
    get dragging() {
      return u(this.#L);
    }
    set dragging(r) {
      Y(this.#L, r);
    }
    #T = /* @__PURE__ */ Me(null);
    get selectionRect() {
      return u(this.#T);
    }
    set selectionRect(r) {
      Y(this.#T, r);
    }
    #M = /* @__PURE__ */ Me(!1);
    get selectionKeyPressed() {
      return u(this.#M);
    }
    set selectionKeyPressed(r) {
      Y(this.#M, r);
    }
    #N = /* @__PURE__ */ Me(!1);
    get multiselectionKeyPressed() {
      return u(this.#N);
    }
    set multiselectionKeyPressed(r) {
      Y(this.#N, r);
    }
    #O = /* @__PURE__ */ Me(!1);
    get deleteKeyPressed() {
      return u(this.#O);
    }
    set deleteKeyPressed(r) {
      Y(this.#O, r);
    }
    #D = /* @__PURE__ */ Me(!1);
    get panActivationKeyPressed() {
      return u(this.#D);
    }
    set panActivationKeyPressed(r) {
      Y(this.#D, r);
    }
    #V = /* @__PURE__ */ Me(!1);
    get zoomActivationKeyPressed() {
      return u(this.#V);
    }
    set zoomActivationKeyPressed(r) {
      Y(this.#V, r);
    }
    #A = /* @__PURE__ */ Me(null);
    get selectionRectMode() {
      return u(this.#A);
    }
    set selectionRectMode(r) {
      Y(this.#A, r);
    }
    #H = /* @__PURE__ */ Me("");
    get ariaLiveMessage() {
      return u(this.#H);
    }
    set ariaLiveMessage(r) {
      Y(this.#H, r);
    }
    #z = /* @__PURE__ */ S(() => e.props.selectionMode ?? gi.Partial);
    get selectionMode() {
      return u(this.#z);
    }
    set selectionMode(r) {
      Y(this.#z, r);
    }
    #R = /* @__PURE__ */ S(() => ({ ...Yc, ...e.props.nodeTypes }));
    get nodeTypes() {
      return u(this.#R);
    }
    set nodeTypes(r) {
      Y(this.#R, r);
    }
    #I = /* @__PURE__ */ S(() => ({ ...Fc, ...e.props.edgeTypes }));
    get edgeTypes() {
      return u(this.#I);
    }
    set edgeTypes(r) {
      Y(this.#I, r);
    }
    #B = /* @__PURE__ */ S(() => e.props.noPanClass ?? "nopan");
    get noPanClass() {
      return u(this.#B);
    }
    set noPanClass(r) {
      Y(this.#B, r);
    }
    #q = /* @__PURE__ */ S(() => e.props.noDragClass ?? "nodrag");
    get noDragClass() {
      return u(this.#q);
    }
    set noDragClass(r) {
      Y(this.#q, r);
    }
    #Z = /* @__PURE__ */ S(() => e.props.noWheelClass ?? "nowheel");
    get noWheelClass() {
      return u(this.#Z);
    }
    set noWheelClass(r) {
      Y(this.#Z, r);
    }
    #K = /* @__PURE__ */ S(() => t0(e.props.ariaLabelConfig));
    get ariaLabelConfig() {
      return u(this.#K);
    }
    set ariaLabelConfig(r) {
      Y(this.#K, r);
    }
    #j = /* @__PURE__ */ Me(rm(this.nodesInitialized, e.props.fitView, e.props.initialViewport, this.width, this.height, this.nodeLookup));
    get _viewport() {
      return u(this.#j);
    }
    set _viewport(r) {
      Y(this.#j, r);
    }
    get viewport() {
      return e.viewport ?? this._viewport;
    }
    set viewport(r) {
      e.viewport && (e.viewport = r), this._viewport = r;
    }
    #Y = /* @__PURE__ */ Me(
      // _connection is viewport independent and originating from XYHandle
      ks
    );
    get _connection() {
      return u(this.#Y);
    }
    set _connection(r) {
      Y(this.#Y, r);
    }
    #F = /* @__PURE__ */ S(() => this._connection.inProgress ? {
      ...this._connection,
      to: Mo(this._connection.to, [this.viewport.x, this.viewport.y, this.viewport.zoom])
    } : this._connection);
    get connection() {
      return u(this.#F);
    }
    set connection(r) {
      Y(this.#F, r);
    }
    #W = /* @__PURE__ */ S(() => e.props.connectionMode ?? Vr.Strict);
    get connectionMode() {
      return u(this.#W);
    }
    set connectionMode(r) {
      Y(this.#W, r);
    }
    #X = /* @__PURE__ */ S(() => e.props.connectionRadius ?? 20);
    get connectionRadius() {
      return u(this.#X);
    }
    set connectionRadius(r) {
      Y(this.#X, r);
    }
    #U = /* @__PURE__ */ S(() => e.props.isValidConnection ?? (() => !0));
    get isValidConnection() {
      return u(this.#U);
    }
    set isValidConnection(r) {
      Y(this.#U, r);
    }
    #G = /* @__PURE__ */ S(() => e.props.selectNodesOnDrag ?? !0);
    get selectNodesOnDrag() {
      return u(this.#G);
    }
    set selectNodesOnDrag(r) {
      Y(this.#G, r);
    }
    #J = /* @__PURE__ */ S(() => e.props.defaultMarkerColor ?? "#b1b1b7");
    get defaultMarkerColor() {
      return u(this.#J);
    }
    set defaultMarkerColor(r) {
      Y(this.#J, r);
    }
    #Q = /* @__PURE__ */ S(() => p0(e.edges, {
      defaultColor: this.defaultMarkerColor,
      id: this.flowId,
      defaultMarkerStart: this.defaultEdgeOptions.markerStart,
      defaultMarkerEnd: this.defaultEdgeOptions.markerEnd
    }));
    get markers() {
      return u(this.#Q);
    }
    set markers(r) {
      Y(this.#Q, r);
    }
    #ee = /* @__PURE__ */ S(() => e.props.onlyRenderVisibleElements ?? !1);
    get onlyRenderVisibleElements() {
      return u(this.#ee);
    }
    set onlyRenderVisibleElements(r) {
      Y(this.#ee, r);
    }
    #te = /* @__PURE__ */ S(() => e.props.onflowerror ?? Gv);
    get onerror() {
      return u(this.#te);
    }
    set onerror(r) {
      Y(this.#te, r);
    }
    #ne = /* @__PURE__ */ S(() => e.props.ondelete);
    get ondelete() {
      return u(this.#ne);
    }
    set ondelete(r) {
      Y(this.#ne, r);
    }
    #re = /* @__PURE__ */ S(() => e.props.onbeforedelete);
    get onbeforedelete() {
      return u(this.#re);
    }
    set onbeforedelete(r) {
      Y(this.#re, r);
    }
    #oe = /* @__PURE__ */ S(() => e.props.onbeforeconnect);
    get onbeforeconnect() {
      return u(this.#oe);
    }
    set onbeforeconnect(r) {
      Y(this.#oe, r);
    }
    #ie = /* @__PURE__ */ S(() => e.props.onconnect);
    get onconnect() {
      return u(this.#ie);
    }
    set onconnect(r) {
      Y(this.#ie, r);
    }
    #se = /* @__PURE__ */ S(() => e.props.onconnectstart);
    get onconnectstart() {
      return u(this.#se);
    }
    set onconnectstart(r) {
      Y(this.#se, r);
    }
    #ae = /* @__PURE__ */ S(() => e.props.onconnectend);
    get onconnectend() {
      return u(this.#ae);
    }
    set onconnectend(r) {
      Y(this.#ae, r);
    }
    #le = /* @__PURE__ */ S(() => e.props.onbeforereconnect);
    get onbeforereconnect() {
      return u(this.#le);
    }
    set onbeforereconnect(r) {
      Y(this.#le, r);
    }
    #ue = /* @__PURE__ */ S(() => e.props.onreconnect);
    get onreconnect() {
      return u(this.#ue);
    }
    set onreconnect(r) {
      Y(this.#ue, r);
    }
    #ce = /* @__PURE__ */ S(() => e.props.onreconnectstart);
    get onreconnectstart() {
      return u(this.#ce);
    }
    set onreconnectstart(r) {
      Y(this.#ce, r);
    }
    #de = /* @__PURE__ */ S(() => e.props.onreconnectend);
    get onreconnectend() {
      return u(this.#de);
    }
    set onreconnectend(r) {
      Y(this.#de, r);
    }
    #fe = /* @__PURE__ */ S(() => e.props.clickConnect ?? !0);
    get clickConnect() {
      return u(this.#fe);
    }
    set clickConnect(r) {
      Y(this.#fe, r);
    }
    #pe = /* @__PURE__ */ S(() => e.props.onclickconnectstart);
    get onclickconnectstart() {
      return u(this.#pe);
    }
    set onclickconnectstart(r) {
      Y(this.#pe, r);
    }
    #ge = /* @__PURE__ */ S(() => e.props.onclickconnectend);
    get onclickconnectend() {
      return u(this.#ge);
    }
    set onclickconnectend(r) {
      Y(this.#ge, r);
    }
    #he = /* @__PURE__ */ Me(null);
    get clickConnectStartHandle() {
      return u(this.#he);
    }
    set clickConnectStartHandle(r) {
      Y(this.#he, r);
    }
    #ve = /* @__PURE__ */ S(() => e.props.onselectiondrag);
    get onselectiondrag() {
      return u(this.#ve);
    }
    set onselectiondrag(r) {
      Y(this.#ve, r);
    }
    #me = /* @__PURE__ */ S(() => e.props.onselectiondragstart);
    get onselectiondragstart() {
      return u(this.#me);
    }
    set onselectiondragstart(r) {
      Y(this.#me, r);
    }
    #ye = /* @__PURE__ */ S(() => e.props.onselectiondragstop);
    get onselectiondragstop() {
      return u(this.#ye);
    }
    set onselectiondragstop(r) {
      Y(this.#ye, r);
    }
    resolveFitView = async () => {
      this.panZoom && (await Xv(
        {
          nodes: this.nodeLookup,
          width: this.width,
          height: this.height,
          panZoom: this.panZoom,
          minZoom: this.minZoom,
          maxZoom: this.maxZoom
        },
        this.fitViewOptions
      ), this.fitViewResolver?.resolve(!0), this.fitViewQueued = !1, this.fitViewOptions = void 0, this.fitViewResolver = null);
    };
    _prefersDark = new tm("(prefers-color-scheme: dark)", e.props.colorModeSSR === "dark");
    #we = /* @__PURE__ */ S(() => e.props.colorMode === "system" ? this._prefersDark.current ? "dark" : "light" : e.props.colorMode ?? "light");
    get colorMode() {
      return u(this.#we);
    }
    set colorMode(r) {
      Y(this.#we, r);
    }
    constructor() {
    }
    resetStoreValues() {
      this.dragging = !1, this.selectionRect = null, this.selectionRectMode = null, this.selectionKeyPressed = !1, this.multiselectionKeyPressed = !1, this.deleteKeyPressed = !1, this.panActivationKeyPressed = !1, this.zoomActivationKeyPressed = !1, this._connection = ks, this.clickConnectStartHandle = null, this.viewport = e.props.initialViewport ?? { x: 0, y: 0, zoom: 1 }, this.ariaLiveMessage = "";
    }
  }
  return new t();
}
function Qt() {
  const e = jn(yi);
  if (!e)
    throw new Error("To call useStore outside of <SvelteFlow /> you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
const yi = Symbol();
function Wc(e) {
  const t = om(e);
  function n(T) {
    t.nodeTypes = {
      ...Yc,
      ...T
    };
  }
  function r(T) {
    t.edgeTypes = {
      ...Fc,
      ...T
    };
  }
  function o(T) {
    t.edges = l0(T, t.edges);
  }
  const i = (T, _ = !1) => {
    t.nodes = t.nodes.map((D) => {
      const b = T.get(D.id);
      return b ? { ...D, position: b.position, dragging: _ } : D;
    });
  };
  function s(T) {
    const { changes: _, updatedInternals: D } = x0(T, t.nodeLookup, t.parentLookup, t.domNode, t.nodeOrigin);
    if (!D)
      return;
    v0(t.nodeLookup, t.parentLookup, {
      nodeOrigin: t.nodeOrigin,
      nodeExtent: t.nodeExtent
    }), t.fitViewQueued && t.resolveFitView();
    const b = /* @__PURE__ */ new Map();
    for (const P of _) {
      const L = t.nodeLookup.get(P.id)?.internals.userNode;
      if (!L)
        continue;
      const A = { ...L };
      switch (P.type) {
        case "dimensions": {
          const B = { ...A.measured, ...P.dimensions };
          P.setAttributes && (A.width = P.dimensions?.width ?? A.width, A.height = P.dimensions?.height ?? A.height), A.measured = B;
          break;
        }
        case "position":
          A.position = P.position ?? A.position;
          break;
      }
      b.set(P.id, A);
    }
    t.nodes = t.nodes.map((P) => b.get(P.id) ?? P);
  }
  function a(T) {
    const _ = t.fitViewResolver ?? Promise.withResolvers();
    return t.fitViewQueued = !0, t.fitViewOptions = T, t.fitViewResolver = _, t.nodes = [...t.nodes], _.promise;
  }
  async function l(T, _, D) {
    const b = typeof D?.zoom < "u" ? D.zoom : t.maxZoom, P = t.panZoom;
    return P ? (await P.setViewport({
      x: t.width / 2 - T * b,
      y: t.height / 2 - _ * b,
      zoom: b
    }, { duration: D?.duration, ease: D?.ease, interpolate: D?.interpolate }), Promise.resolve(!0)) : Promise.resolve(!1);
  }
  function c(T, _) {
    const D = t.panZoom;
    return D ? D.scaleBy(T, _) : Promise.resolve(!1);
  }
  function d(T) {
    return c(1.2, T);
  }
  function p(T) {
    return c(1 / 1.2, T);
  }
  function f(T) {
    const _ = t.panZoom;
    _ && (_.setScaleExtent([T, t.maxZoom]), t.minZoom = T);
  }
  function g(T) {
    const _ = t.panZoom;
    _ && (_.setScaleExtent([t.minZoom, T]), t.maxZoom = T);
  }
  function h(T) {
    const _ = t.panZoom;
    _ && (_.setTranslateExtent(T), t.translateExtent = T);
  }
  function v(T) {
    t.panZoom?.setClickDistance(T);
  }
  function C(T, _ = null) {
    let D = !1;
    const b = T.map((P) => (!_ || _.has(P.id)) && P.selected ? (D = !0, { ...P, selected: !1 }) : P);
    return [D, b];
  }
  function w(T) {
    const _ = T?.nodes ? new Set(T.nodes.map((B) => B.id)) : null, [D, b] = C(t.nodes, _);
    D && (t.nodes = b);
    const P = T?.edges ? new Set(T.edges.map((B) => B.id)) : null, [L, A] = C(t.edges, P);
    L && (t.edges = A);
  }
  function E(T) {
    const _ = t.multiselectionKeyPressed;
    t.nodes = t.nodes.map((D) => {
      const b = T.includes(D.id), P = _ && D.selected || b;
      if (D.selected !== P) {
        const L = t.nodeLookup.get(D.id);
        return L && (L.selected = P), D.selected = P, { ...D };
      }
      return D;
    }), _ || w({ nodes: [] });
  }
  function x(T) {
    const _ = t.multiselectionKeyPressed;
    t.edges = t.edges.map((D) => {
      const b = T.includes(D.id), P = _ && D.selected || b;
      return D.selected !== P ? { ...D, selected: P } : D;
    }), _ || w({ edges: [] });
  }
  function $(T, _, D) {
    const b = t.nodeLookup.get(T);
    if (!b) {
      console.warn("012", go.error012(T));
      return;
    }
    t.selectionRect = null, t.selectionRectMode = null, b.selected ? (_ || b.selected && t.multiselectionKeyPressed) && (w({ nodes: [b], edges: [] }), requestAnimationFrame(() => D?.blur())) : E([T]);
  }
  function k(T) {
    const _ = t.edgeLookup.get(T);
    if (!_) {
      console.warn("012", go.error012(T));
      return;
    }
    (_.selectable || t.elementsSelectable && typeof _.selectable > "u") && (t.selectionRect = null, t.selectionRectMode = null, _.selected ? _.selected && t.multiselectionKeyPressed && w({ nodes: [], edges: [_] }) : x([T]));
  }
  function M(T, _) {
    const { nodeExtent: D, snapGrid: b, nodeOrigin: P, nodeLookup: L, nodesDraggable: A, onerror: B } = t, O = /* @__PURE__ */ new Map(), Z = b?.[0] ?? 5, F = b?.[1] ?? 5, X = T.x * Z * _, te = T.y * F * _;
    for (const W of L.values()) {
      if (!(W.selected && (W.draggable || A && typeof W.draggable > "u")))
        continue;
      let pe = {
        x: W.internals.positionAbsolute.x + X,
        y: W.internals.positionAbsolute.y + te
      };
      b && (pe = Hi(pe, b));
      const { position: oe, positionAbsolute: ge } = mc({
        nodeId: W.id,
        nextPosition: pe,
        nodeLookup: L,
        nodeExtent: D,
        nodeOrigin: P,
        onError: B
      });
      W.position = oe, W.internals.positionAbsolute = ge, O.set(W.id, W);
    }
    i(O);
  }
  function z(T) {
    return $0({
      delta: T,
      panZoom: t.panZoom,
      transform: [t.viewport.x, t.viewport.y, t.viewport.zoom],
      translateExtent: t.translateExtent,
      width: t.width,
      height: t.height
    });
  }
  const q = (T) => {
    t._connection = { ...T };
  };
  function U() {
    t._connection = ks;
  }
  function j() {
    t.resetStoreValues(), w();
  }
  return Object.assign(t, {
    setNodeTypes: n,
    setEdgeTypes: r,
    addEdge: o,
    updateNodePositions: i,
    updateNodeInternals: s,
    zoomIn: d,
    zoomOut: p,
    fitView: a,
    setCenter: l,
    setMinZoom: f,
    setMaxZoom: g,
    setTranslateExtent: h,
    setPaneClickDistance: v,
    unselectNodesAndEdges: w,
    addSelectedNodes: E,
    addSelectedEdges: x,
    handleNodeSelection: $,
    handleEdgeSelection: k,
    moveSelectedNodes: M,
    panBy: z,
    updateConnection: q,
    cancelConnection: U,
    reset: j
  });
}
function im(e, t) {
  const { minZoom: n, maxZoom: r, initialViewport: o, onPanZoomStart: i, onPanZoom: s, onPanZoomEnd: a, translateExtent: l, paneClickDistance: c, setPanZoomInstance: d, onDraggingChange: p, onTransformChange: f } = t, g = B0({
    domNode: e,
    minZoom: n,
    maxZoom: r,
    translateExtent: l,
    viewport: o,
    paneClickDistance: c,
    onPanZoom: s,
    onPanZoomStart: i,
    onPanZoomEnd: a,
    onDraggingChange: p
  }), h = g.getViewport();
  return (o.x !== h.x || o.y !== h.y || o.zoom !== h.zoom) && f([h.x, h.y, h.zoom]), d(g), g.update(t), {
    update(v) {
      g.update(v);
    }
  };
}
var sm = /* @__PURE__ */ J('<div class="svelte-flow__zoom svelte-flow__container"><!></div>');
function Xc(e, t) {
  ue(t, !0);
  let n = y(t, "store", 15), r = y(t, "panOnScrollMode", 23, () => cn.Free), o = y(t, "preventScrolling", 7, !0), i = y(t, "zoomOnScroll", 7, !0), s = y(t, "zoomOnDoubleClick", 7, !0), a = y(t, "zoomOnPinch", 7, !0), l = y(t, "panOnDrag", 7, !0), c = y(t, "panOnScroll", 7, !1), d = y(t, "paneClickDistance", 7, 1), p = y(t, "onmovestart", 7), f = y(t, "onmove", 7), g = y(t, "onmoveend", 7), h = y(t, "oninit", 7), v = y(t, "children", 7), C = /* @__PURE__ */ S(() => n().panActivationKeyPressed || l()), w = /* @__PURE__ */ S(() => n().panActivationKeyPressed || c());
  const { viewport: E } = n();
  let x = !1;
  nt(() => {
    !x && n().viewportInitialized && (h()?.(), x = !0);
  });
  var $ = sm(), k = I($);
  return rt(k, v), R($), vt($, (M, z) => im?.(M, z), () => ({
    viewport: n().viewport,
    minZoom: n().minZoom,
    maxZoom: n().maxZoom,
    initialViewport: E,
    onDraggingChange: (M) => {
      n(n().dragging = M, !0);
    },
    setPanZoomInstance: (M) => {
      n(n().panZoom = M, !0);
    },
    onPanZoomStart: p(),
    onPanZoom: f(),
    onPanZoomEnd: g(),
    zoomOnScroll: i(),
    zoomOnDoubleClick: s(),
    zoomOnPinch: a(),
    panOnScroll: u(w),
    panOnDrag: u(C),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: r() || cn.Free,
    zoomActivationKeyPressed: n().zoomActivationKeyPressed,
    preventScrolling: typeof o() == "boolean" ? o() : !0,
    noPanClassName: n().noPanClass,
    noWheelClassName: n().noWheelClass,
    userSelectionActive: !!n().selectionRect,
    translateExtent: n().translateExtent,
    lib: "svelte",
    paneClickDistance: d(),
    onTransformChange: (M) => {
      n(n().viewport = { x: M[0], y: M[1], zoom: M[2] }, !0);
    }
  })), N(e, $), ce({
    get store() {
      return n();
    },
    set store(M) {
      n(M), m();
    },
    get panOnScrollMode() {
      return r();
    },
    set panOnScrollMode(M = cn.Free) {
      r(M), m();
    },
    get preventScrolling() {
      return o();
    },
    set preventScrolling(M = !0) {
      o(M), m();
    },
    get zoomOnScroll() {
      return i();
    },
    set zoomOnScroll(M = !0) {
      i(M), m();
    },
    get zoomOnDoubleClick() {
      return s();
    },
    set zoomOnDoubleClick(M = !0) {
      s(M), m();
    },
    get zoomOnPinch() {
      return a();
    },
    set zoomOnPinch(M = !0) {
      a(M), m();
    },
    get panOnDrag() {
      return l();
    },
    set panOnDrag(M = !0) {
      l(M), m();
    },
    get panOnScroll() {
      return c();
    },
    set panOnScroll(M = !1) {
      c(M), m();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(M = 1) {
      d(M), m();
    },
    get onmovestart() {
      return p();
    },
    set onmovestart(M) {
      p(M), m();
    },
    get onmove() {
      return f();
    },
    set onmove(M) {
      f(M), m();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(M) {
      g(M), m();
    },
    get oninit() {
      return h();
    },
    set oninit(M) {
      h(M), m();
    },
    get children() {
      return v();
    },
    set children(M) {
      v(M), m();
    }
  });
}
ie(
  Xc,
  {
    store: {},
    panOnScrollMode: {},
    preventScrolling: {},
    zoomOnScroll: {},
    zoomOnDoubleClick: {},
    zoomOnPinch: {},
    panOnDrag: {},
    panOnScroll: {},
    paneClickDistance: {},
    onmovestart: {},
    onmove: {},
    onmoveend: {},
    oninit: {},
    children: {}
  },
  [],
  [],
  !0
);
function Tl(e, t) {
  return (n) => {
    n.target === t && e?.(n);
  };
}
function Ml(e) {
  return (t) => {
    const n = e.has(t.id);
    return !!t.selected !== n ? { ...t, selected: n } : t;
  };
}
function Nl(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
var am = /* @__PURE__ */ J("<div><!></div>");
function Uc(e, t) {
  ue(t, !0);
  let n = y(t, "store", 15), r = y(t, "panOnDrag", 7, !0), o = y(t, "selectionOnDrag", 7), i = y(t, "onpaneclick", 7), s = y(t, "onpanecontextmenu", 7), a = y(t, "onselectionstart", 7), l = y(t, "onselectionend", 7), c = y(t, "children", 7), d, p = null, f = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ S(() => n().panActivationKeyPressed || r()), v = /* @__PURE__ */ S(() => n().selectionKeyPressed || n().selectionRect || o() && u(h) !== !0), C = /* @__PURE__ */ S(() => n().elementsSelectable && (u(v) || n().selectionRectMode === "user")), w = !1;
  function E(_) {
    if (w || n().connection.inProgress) {
      w = !1;
      return;
    }
    i()?.({ event: _ }), n().unselectNodesAndEdges(), n(n().selectionRectMode = null, !0);
  }
  function x(_) {
    if (p = d?.getBoundingClientRect(), !n().elementsSelectable || !u(v) || _.button !== 0 || _.target !== d || !p)
      return;
    _.target?.setPointerCapture?.(_.pointerId);
    const { x: D, y: b } = sn(_, p);
    n().unselectNodesAndEdges(), n(n().selectionRect = { width: 0, height: 0, startX: D, startY: b, x: D, y: b }, !0), a()?.(_);
  }
  function $(_) {
    if (!u(v) || !p || !n().selectionRect)
      return;
    w = !0;
    const D = sn(_, p), { startX: b = 0, startY: P = 0 } = n().selectionRect, L = {
      ...n().selectionRect,
      x: D.x < b ? D.x : b,
      y: D.y < P ? D.y : P,
      width: Math.abs(D.x - b),
      height: Math.abs(D.y - P)
    }, A = f, B = g;
    f = new Set(ca(
      n().nodeLookup,
      L,
      [
        n().viewport.x,
        n().viewport.y,
        n().viewport.zoom
      ],
      n().selectionMode === gi.Partial,
      !0
    ).map((Z) => Z.id));
    const O = n().defaultEdgeOptions.selectable ?? !0;
    g = /* @__PURE__ */ new Set();
    for (const Z of f) {
      const F = n().connectionLookup.get(Z);
      if (F)
        for (const { edgeId: X } of F.values()) {
          const te = n().edgeLookup.get(X);
          te && (te.selectable ?? O) && g.add(X);
        }
    }
    Nl(A, f) || n(n().nodes = n().nodes.map(Ml(f)), !0), Nl(B, g) || n(n().edges = n().edges.map(Ml(g)), !0), n(n().selectionRectMode = "user", !0), n(n().selectionRect = L, !0);
  }
  function k(_) {
    _.button === 0 && (_.target?.releasePointerCapture?.(_.pointerId), !u(v) && n().selectionRectMode === "user" && _.target === d && E?.(_), n(n().selectionRect = null, !0), f.size > 0 && n(n().selectionRectMode = "nodes", !0), n().selectionKeyPressed && (w = !1), l()?.(_));
  }
  const M = (_) => {
    if (Array.isArray(u(h)) && u(h).includes(2)) {
      _.preventDefault();
      return;
    }
    s()?.({ event: _ });
  };
  var z = am();
  let q;
  var U = /* @__PURE__ */ S(() => u(C) ? void 0 : Tl(E, d));
  z.__click = function(..._) {
    u(U)?.apply(this, _);
  }, z.__pointerdown = function(..._) {
    (u(C) ? x : void 0)?.apply(this, _);
  }, z.__pointermove = function(..._) {
    (u(C) ? $ : void 0)?.apply(this, _);
  }, z.__pointerup = function(..._) {
    (u(C) ? k : void 0)?.apply(this, _);
  };
  var j = /* @__PURE__ */ S(() => Tl(M, d));
  z.__contextmenu = function(..._) {
    u(j)?.apply(this, _);
  };
  var T = I(z);
  return rt(T, c), R(z), Rt(z, (_) => d = _, () => d), Le((_) => q = Nt(z, 1, "svelte-flow__pane svelte-flow__container", null, q, _), [
    () => ({
      draggable: r() === !0 || Array.isArray(r()) && r().includes(0),
      dragging: n().dragging,
      selection: u(v)
    })
  ]), N(e, z), ce({
    get store() {
      return n();
    },
    set store(_) {
      n(_), m();
    },
    get panOnDrag() {
      return r();
    },
    set panOnDrag(_ = !0) {
      r(_), m();
    },
    get selectionOnDrag() {
      return o();
    },
    set selectionOnDrag(_) {
      o(_), m();
    },
    get onpaneclick() {
      return i();
    },
    set onpaneclick(_) {
      i(_), m();
    },
    get onpanecontextmenu() {
      return s();
    },
    set onpanecontextmenu(_) {
      s(_), m();
    },
    get onselectionstart() {
      return a();
    },
    set onselectionstart(_) {
      a(_), m();
    },
    get onselectionend() {
      return l();
    },
    set onselectionend(_) {
      l(_), m();
    },
    get children() {
      return c();
    },
    set children(_) {
      c(_), m();
    }
  });
}
Vn([
  "click",
  "pointerdown",
  "pointermove",
  "pointerup",
  "contextmenu"
]);
ie(
  Uc,
  {
    store: {},
    panOnDrag: {},
    selectionOnDrag: {},
    onpaneclick: {},
    onpanecontextmenu: {},
    onselectionstart: {},
    onselectionend: {},
    children: {}
  },
  [],
  [],
  !0
);
var lm = /* @__PURE__ */ J('<div class="svelte-flow__viewport xyflow__viewport svelte-flow__container"><!></div>');
function Gc(e, t) {
  ue(t, !0);
  let n = y(t, "store", 15), r = y(t, "children", 7);
  var o = lm();
  let i;
  var s = I(o);
  return rt(s, r), R(o), Le((a) => i = Ct(o, "", i, a), [
    () => ({
      transform: `translate(${n().viewport.x ?? ""}px, ${n().viewport.y ?? ""}px) scale(${n().viewport.zoom ?? ""})`
    })
  ]), N(e, o), ce({
    get store() {
      return n();
    },
    set store(a) {
      n(a), m();
    },
    get children() {
      return r();
    },
    set children(a) {
      r(a), m();
    }
  });
}
ie(Gc, { store: {}, children: {} }, [], [], !0);
function Jc(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = S0({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: s,
    getStoreItems: () => {
      const { snapGrid: c, viewport: d } = n;
      return {
        nodes: n.nodes,
        nodeLookup: n.nodeLookup,
        edges: n.edges,
        nodeExtent: n.nodeExtent,
        snapGrid: c || [0, 0],
        snapToGrid: !!c,
        nodeOrigin: n.nodeOrigin,
        multiSelectionActive: n.multiselectionKeyPressed,
        domNode: n.domNode,
        transform: [d.x, d.y, d.zoom],
        autoPanOnNodeDrag: n.autoPanOnNodeDrag,
        nodesDraggable: n.nodesDraggable,
        selectNodesOnDrag: n.selectNodesOnDrag,
        nodeDragThreshold: n.nodeDragThreshold,
        unselectNodesAndEdges: n.unselectNodesAndEdges,
        updateNodePositions: n.updateNodePositions,
        onSelectionDrag: n.onselectiondrag,
        onSelectionDragStart: n.onselectiondragstart,
        onSelectionDragStop: n.onselectiondragstop,
        panBy: n.panBy
      };
    }
  });
  function l(c, d) {
    if (d.disabled) {
      a.destroy();
      return;
    }
    a.update({
      domNode: c,
      noDragClassName: d.noDragClass,
      handleSelector: d.handleSelector,
      nodeId: d.nodeId,
      isSelectable: d.isSelectable,
      nodeClickDistance: d.nodeClickDistance
    });
  }
  return l(e, t), {
    update(c) {
      l(e, c);
    },
    destroy() {
      a.destroy();
    }
  };
}
var um = /* @__PURE__ */ J('<div aria-live="assertive" aria-atomic="true" class="a11y-live-msg svelte-62ze0y"> </div>'), cm = /* @__PURE__ */ J('<div class="a11y-hidden svelte-62ze0y"> </div> <div class="a11y-hidden svelte-62ze0y"> </div> <!>', 1);
const dm = {
  hash: "svelte-62ze0y",
  code: ".a11y-hidden.svelte-62ze0y {display:none;}.a11y-live-msg.svelte-62ze0y {position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0px, 0px, 0px, 0px);clip-path:inset(100%);}"
};
function Qc(e, t) {
  ue(t, !0), qe(e, dm);
  let n = y(t, "store", 7);
  var r = cm(), o = fe(r), i = I(o, !0);
  R(o);
  var s = H(o, 2), a = I(s, !0);
  R(s);
  var l = H(s, 2);
  {
    var c = (d) => {
      var p = um(), f = I(p, !0);
      R(p), Le(() => {
        $e(p, "id", `${fm}-${n().flowId}`), Ye(f, n().ariaLiveMessage);
      }), N(d, p);
    };
    le(l, (d) => {
      n().disableKeyboardA11y || d(c);
    });
  }
  return Le(() => {
    $e(o, "id", `${ed}-${n().flowId}`), Ye(i, n().disableKeyboardA11y ? n().ariaLabelConfig["node.a11yDescription.default"] : n().ariaLabelConfig["node.a11yDescription.keyboardDisabled"]), $e(s, "id", `${td}-${n().flowId}`), Ye(a, n().ariaLabelConfig["edge.a11yDescription.default"]);
  }), N(e, r), ce({
    get store() {
      return n();
    },
    set store(d) {
      n(d), m();
    }
  });
}
ie(Qc, { store: {} }, [], [], !0);
const ed = "svelte-flow__node-desc", td = "svelte-flow__edge-desc", fm = "svelte-flow__aria-live";
var pm = /* @__PURE__ */ J("<div><!></div>");
function nd(e, t) {
  ue(t, !0);
  let n = y(t, "store", 15), r = y(t, "node", 7), o = y(t, "resizeObserver", 7), i = y(t, "nodeClickDistance", 7), s = y(t, "onnodeclick", 7), a = y(t, "onnodedrag", 7), l = y(t, "onnodedragstart", 7), c = y(t, "onnodedragstop", 7), d = y(t, "onnodepointerenter", 7), p = y(t, "onnodepointerleave", 7), f = y(t, "onnodepointermove", 7), g = y(t, "onnodecontextmenu", 7), h = /* @__PURE__ */ S(() => xt(r().data, () => ({}), !0)), v = /* @__PURE__ */ S(() => xt(r().selected, !1)), C = /* @__PURE__ */ S(() => r().draggable), w = /* @__PURE__ */ S(() => r().selectable), E = /* @__PURE__ */ S(() => xt(r().deletable, !0)), x = /* @__PURE__ */ S(() => r().connectable), $ = /* @__PURE__ */ S(() => r().focusable), k = /* @__PURE__ */ S(() => xt(r().hidden, !1)), M = /* @__PURE__ */ S(() => xt(r().dragging, !1)), z = /* @__PURE__ */ S(() => xt(r().style, "")), q = /* @__PURE__ */ S(() => r().class), U = /* @__PURE__ */ S(() => xt(r().type, "default")), j = /* @__PURE__ */ S(() => r().parentId), T = /* @__PURE__ */ S(() => r().sourcePosition), _ = /* @__PURE__ */ S(() => r().targetPosition), D = /* @__PURE__ */ S(() => xt(r().measured, () => ({ width: 0, height: 0 }), !0).width), b = /* @__PURE__ */ S(() => xt(r().measured, () => ({ width: 0, height: 0 }), !0).height), P = /* @__PURE__ */ S(() => r().initialWidth), L = /* @__PURE__ */ S(() => r().initialHeight), A = /* @__PURE__ */ S(() => r().width), B = /* @__PURE__ */ S(() => r().height), O = /* @__PURE__ */ S(() => r().dragHandle), Z = /* @__PURE__ */ S(() => xt(r().internals.z, 0)), F = /* @__PURE__ */ S(() => r().internals.positionAbsolute.x), X = /* @__PURE__ */ S(() => r().internals.positionAbsolute.y), te = /* @__PURE__ */ S(() => r().internals.userNode), { id: W } = r(), pe = /* @__PURE__ */ S(() => u(C) ?? n().nodesDraggable), oe = /* @__PURE__ */ S(() => u(w) ?? n().elementsSelectable), ge = /* @__PURE__ */ S(() => u(x) ?? n().nodesConnectable), G = /* @__PURE__ */ S(() => xc(r())), ke = /* @__PURE__ */ S(() => !!r().internals.handleBounds), ae = /* @__PURE__ */ S(() => u(G) && u(ke)), se = /* @__PURE__ */ S(() => u($) ?? n().nodesFocusable);
  function ne(he) {
    return n().parentLookup.has(he);
  }
  let me = /* @__PURE__ */ S(() => ne(W)), ee = /* @__PURE__ */ Me(null), ye = null, re = u(U), Ee = u(T), K = u(_), Je = /* @__PURE__ */ S(() => n().nodeTypes[u(U)] ?? va), de = /* @__PURE__ */ S(() => n().ariaLabelConfig);
  Tr("svelteflow__node_connectable", {
    get value() {
      return u(ge);
    }
  }), Tr("svelteflow__node_id", W);
  let Ce = /* @__PURE__ */ S(() => {
    const he = u(D) === void 0 ? u(A) ?? u(P) : u(A), We = u(b) === void 0 ? u(B) ?? u(L) : u(B);
    if (!(he === void 0 && We === void 0 && u(z) === void 0))
      return `${u(z)};${he ? `width:${gn(he)};` : ""}${We ? `height:${gn(We)};` : ""}`;
  });
  nt(() => {
    (u(U) !== re || u(T) !== Ee || u(_) !== K) && u(ee) !== null && requestAnimationFrame(() => {
      u(ee) !== null && n().updateNodeInternals(/* @__PURE__ */ new Map([[W, { id: W, nodeElement: u(ee), force: !0 }]]));
    }), re = u(U), Ee = u(T), K = u(_);
  }), nt(() => {
    o() && (!u(ae) || u(ee) !== ye) && (ye && o().unobserve(ye), u(ee) && o().observe(u(ee)), ye = u(ee));
  }), Pi(() => {
    ye && o()?.unobserve(ye);
  });
  function _e(he) {
    u(oe) && (!n().selectNodesOnDrag || !u(pe) || n().nodeDragThreshold > 0) && n().handleNodeSelection(W), s()?.({ node: u(te), event: he });
  }
  function Re(he) {
    if (!(Cc(he) || n().disableKeyboardA11y))
      if (hc.includes(he.key) && u(oe)) {
        const We = he.key === "Escape";
        n().handleNodeSelection(W, We, u(ee));
      } else u(pe) && r().selected && Object.prototype.hasOwnProperty.call(mi, he.key) && (he.preventDefault(), n(
        n().ariaLiveMessage = u(de)["node.a11yDescription.ariaLiveMessage"]({
          direction: he.key.replace("Arrow", "").toLowerCase(),
          x: ~~r().internals.positionAbsolute.x,
          y: ~~r().internals.positionAbsolute.y
        }),
        !0
      ), n().moveSelectedNodes(mi[he.key], he.shiftKey ? 4 : 1));
  }
  const gt = () => {
    if (n().disableKeyboardA11y || !n().autoPanOnNodeFocus || !u(ee)?.matches(":focus-visible"))
      return;
    const { width: he, height: We, viewport: ct } = n();
    ca(/* @__PURE__ */ new Map([[W, r()]]), { x: 0, y: 0, width: he, height: We }, [ct.x, ct.y, ct.zoom], !0).length > 0 || n().setCenter(r().position.x + (r().measured.width ?? 0) / 2, r().position.y + (r().measured.height ?? 0) / 2, { zoom: ct.zoom });
  };
  var wt = Ie(), Ve = fe(wt);
  {
    var Qe = (he) => {
      var We = pm();
      ut(
        We,
        (et, _t) => ({
          "data-id": W,
          class: [
            "svelte-flow__node",
            `svelte-flow__node-${u(U)}`,
            u(q)
          ],
          style: u(Ce),
          onclick: _e,
          onpointerenter: d() ? (at) => d()({ node: u(te), event: at }) : void 0,
          onpointerleave: p() ? (at) => p()({ node: u(te), event: at }) : void 0,
          onpointermove: f() ? (at) => f()({ node: u(te), event: at }) : void 0,
          oncontextmenu: g() ? (at) => g()({ node: u(te), event: at }) : void 0,
          onkeydown: u(se) ? Re : void 0,
          onfocus: u(se) ? gt : void 0,
          tabIndex: u(se) ? 0 : void 0,
          role: r().ariaRole ?? (u(se) ? "group" : void 0),
          "aria-roledescription": "node",
          "aria-describedby": n().disableKeyboardA11y ? void 0 : `${ed}-${n().flowId}`,
          ...r().domAttributes,
          [Bn]: et,
          [on]: _t
        }),
        [
          () => ({
            dragging: u(M),
            selected: u(v),
            draggable: u(pe),
            connectable: u(ge),
            selectable: u(oe),
            nopan: u(pe),
            parent: u(me)
          }),
          () => ({
            "z-index": u(Z),
            transform: `translate(${u(F) ?? ""}px, ${u(X) ?? ""}px)`,
            visibility: u(G) ? "visible" : "hidden"
          })
        ]
      );
      var ct = I(We);
      ea(ct, () => u(Je), (et, _t) => {
        _t(et, {
          get data() {
            return u(h);
          },
          get id() {
            return W;
          },
          get selected() {
            return u(v);
          },
          get selectable() {
            return u(oe);
          },
          get deletable() {
            return u(E);
          },
          get sourcePosition() {
            return u(T);
          },
          get targetPosition() {
            return u(_);
          },
          get zIndex() {
            return u(Z);
          },
          get dragging() {
            return u(M);
          },
          get draggable() {
            return u(pe);
          },
          get dragHandle() {
            return u(O);
          },
          get parentId() {
            return u(j);
          },
          get type() {
            return u(U);
          },
          get isConnectable() {
            return u(ge);
          },
          get positionAbsoluteX() {
            return u(F);
          },
          get positionAbsoluteY() {
            return u(X);
          },
          get width() {
            return u(A);
          },
          get height() {
            return u(B);
          }
        });
      }), R(We), vt(We, (et, _t) => Jc?.(et, _t), () => ({
        nodeId: W,
        isSelectable: u(oe),
        disabled: !u(pe),
        handleSelector: u(O),
        noDragClass: n().noDragClass,
        nodeClickDistance: i(),
        onNodeMouseDown: n().handleNodeSelection,
        onDrag: (et, _t, at, Bt) => {
          a()?.({ event: et, targetNode: at, nodes: Bt });
        },
        onDragStart: (et, _t, at, Bt) => {
          l()?.({ event: et, targetNode: at, nodes: Bt });
        },
        onDragStop: (et, _t, at, Bt) => {
          c()?.({ event: et, targetNode: at, nodes: Bt });
        },
        store: n()
      })), Rt(We, (et) => Y(ee, et), () => u(ee)), N(he, We);
    };
    le(Ve, (he) => {
      u(k) || he(Qe);
    });
  }
  return N(e, wt), ce({
    get store() {
      return n();
    },
    set store(he) {
      n(he), m();
    },
    get node() {
      return r();
    },
    set node(he) {
      r(he), m();
    },
    get resizeObserver() {
      return o();
    },
    set resizeObserver(he) {
      o(he), m();
    },
    get nodeClickDistance() {
      return i();
    },
    set nodeClickDistance(he) {
      i(he), m();
    },
    get onnodeclick() {
      return s();
    },
    set onnodeclick(he) {
      s(he), m();
    },
    get onnodedrag() {
      return a();
    },
    set onnodedrag(he) {
      a(he), m();
    },
    get onnodedragstart() {
      return l();
    },
    set onnodedragstart(he) {
      l(he), m();
    },
    get onnodedragstop() {
      return c();
    },
    set onnodedragstop(he) {
      c(he), m();
    },
    get onnodepointerenter() {
      return d();
    },
    set onnodepointerenter(he) {
      d(he), m();
    },
    get onnodepointerleave() {
      return p();
    },
    set onnodepointerleave(he) {
      p(he), m();
    },
    get onnodepointermove() {
      return f();
    },
    set onnodepointermove(he) {
      f(he), m();
    },
    get onnodecontextmenu() {
      return g();
    },
    set onnodecontextmenu(he) {
      g(he), m();
    }
  });
}
ie(
  nd,
  {
    store: {},
    node: {},
    resizeObserver: {},
    nodeClickDistance: {},
    onnodeclick: {},
    onnodedrag: {},
    onnodedragstart: {},
    onnodedragstop: {},
    onnodepointerenter: {},
    onnodepointerleave: {},
    onnodepointermove: {},
    onnodecontextmenu: {}
  },
  [],
  [],
  !0
);
var gm = /* @__PURE__ */ J('<div class="svelte-flow__nodes"></div>');
function rd(e, t) {
  ue(t, !0);
  let n = y(t, "store", 15), r = y(t, "nodeClickDistance", 7), o = y(t, "onnodeclick", 7), i = y(t, "onnodecontextmenu", 7), s = y(t, "onnodepointerenter", 7), a = y(t, "onnodepointermove", 7), l = y(t, "onnodepointerleave", 7), c = y(t, "onnodedrag", 7), d = y(t, "onnodedragstart", 7), p = y(t, "onnodedragstop", 7);
  const f = typeof ResizeObserver > "u" ? null : new ResizeObserver((h) => {
    const v = /* @__PURE__ */ new Map();
    h.forEach((C) => {
      const w = C.target.getAttribute("data-id");
      v.set(w, { id: w, nodeElement: C.target, force: !0 });
    }), n().updateNodeInternals(v);
  });
  Pi(() => {
    f?.disconnect();
  });
  var g = gm();
  return yt(g, 21, () => n().visible.nodes.values(), (h) => h.id, (h, v) => {
    nd(h, {
      get node() {
        return u(v);
      },
      get resizeObserver() {
        return f;
      },
      get nodeClickDistance() {
        return r();
      },
      get onnodeclick() {
        return o();
      },
      get onnodepointerenter() {
        return s();
      },
      get onnodepointermove() {
        return a();
      },
      get onnodepointerleave() {
        return l();
      },
      get onnodedrag() {
        return c();
      },
      get onnodedragstart() {
        return d();
      },
      get onnodedragstop() {
        return p();
      },
      get onnodecontextmenu() {
        return i();
      },
      get store() {
        return n();
      },
      set store(C) {
        n(C);
      }
    });
  }), R(g), N(e, g), ce({
    get store() {
      return n();
    },
    set store(h) {
      n(h), m();
    },
    get nodeClickDistance() {
      return r();
    },
    set nodeClickDistance(h) {
      r(h), m();
    },
    get onnodeclick() {
      return o();
    },
    set onnodeclick(h) {
      o(h), m();
    },
    get onnodecontextmenu() {
      return i();
    },
    set onnodecontextmenu(h) {
      i(h), m();
    },
    get onnodepointerenter() {
      return s();
    },
    set onnodepointerenter(h) {
      s(h), m();
    },
    get onnodepointermove() {
      return a();
    },
    set onnodepointermove(h) {
      a(h), m();
    },
    get onnodepointerleave() {
      return l();
    },
    set onnodepointerleave(h) {
      l(h), m();
    },
    get onnodedrag() {
      return c();
    },
    set onnodedrag(h) {
      c(h), m();
    },
    get onnodedragstart() {
      return d();
    },
    set onnodedragstart(h) {
      d(h), m();
    },
    get onnodedragstop() {
      return p();
    },
    set onnodedragstop(h) {
      p(h), m();
    }
  });
}
ie(
  rd,
  {
    store: {},
    nodeClickDistance: {},
    onnodeclick: {},
    onnodecontextmenu: {},
    onnodepointerenter: {},
    onnodepointermove: {},
    onnodepointerleave: {},
    onnodedrag: {},
    onnodedragstart: {},
    onnodedragstop: {}
  },
  [],
  [],
  !0
);
var hm = /* @__PURE__ */ we('<svg class="svelte-flow__edge-wrapper"><g><!></g></svg>');
function od(e, t) {
  ue(t, !0);
  const n = y(t, "edge", 7), r = y(t, "store", 15), o = y(t, "onedgeclick", 7), i = y(t, "onedgecontextmenu", 7), s = y(t, "onedgepointerenter", 7), a = y(t, "onedgepointerleave", 7);
  let l = /* @__PURE__ */ S(() => n().source), c = /* @__PURE__ */ S(() => n().target), d = /* @__PURE__ */ S(() => n().sourceX), p = /* @__PURE__ */ S(() => n().sourceY), f = /* @__PURE__ */ S(() => n().targetX), g = /* @__PURE__ */ S(() => n().targetY), h = /* @__PURE__ */ S(() => n().sourcePosition), v = /* @__PURE__ */ S(() => n().targetPosition), C = /* @__PURE__ */ S(() => xt(n().animated, !1)), w = /* @__PURE__ */ S(() => xt(n().selected, !1)), E = /* @__PURE__ */ S(() => n().label), x = /* @__PURE__ */ S(() => n().labelStyle), $ = /* @__PURE__ */ S(() => xt(n().data, () => ({}), !0)), k = /* @__PURE__ */ S(() => n().style), M = /* @__PURE__ */ S(() => n().interactionWidth), z = /* @__PURE__ */ S(() => xt(n().type, "default")), q = /* @__PURE__ */ S(() => n().sourceHandle), U = /* @__PURE__ */ S(() => n().targetHandle), j = /* @__PURE__ */ S(() => n().markerStart), T = /* @__PURE__ */ S(() => n().markerEnd), _ = /* @__PURE__ */ S(() => n().selectable), D = /* @__PURE__ */ S(() => n().focusable), b = /* @__PURE__ */ S(() => xt(n().deletable, !0)), P = /* @__PURE__ */ S(() => n().hidden), L = /* @__PURE__ */ S(() => n().zIndex), A = /* @__PURE__ */ S(() => n().class), B = /* @__PURE__ */ S(() => n().ariaLabel), O = null;
  const { id: Z } = n();
  Tr("svelteflow__edge_id", Z);
  let F = /* @__PURE__ */ S(() => u(_) ?? r().elementsSelectable), X = /* @__PURE__ */ S(() => u(D) ?? r().edgesFocusable), te = /* @__PURE__ */ S(() => r().edgeTypes[u(z)] ?? ma), W = /* @__PURE__ */ S(() => u(j) ? `url('#${_s(u(j), r().flowId)}')` : void 0), pe = /* @__PURE__ */ S(() => u(T) ? `url('#${_s(u(T), r().flowId)}')` : void 0);
  function oe(ne) {
    const me = r().edgeLookup.get(Z);
    me && (u(F) && r().handleEdgeSelection(Z), o()?.({ event: ne, edge: me }));
  }
  function ge(ne, me) {
    const ee = r().edgeLookup.get(Z);
    ee && me({ event: ne, edge: ee });
  }
  function G(ne) {
    if (!r().disableKeyboardA11y && hc.includes(ne.key) && u(F)) {
      const { unselectNodesAndEdges: me, addSelectedEdges: ee } = r();
      ne.key === "Escape" ? (O?.blur(), me({ edges: [n()] })) : ee([Z]);
    }
  }
  var ke = Ie(), ae = fe(ke);
  {
    var se = (ne) => {
      var me = hm();
      let ee;
      var ye = I(me);
      ut(
        ye,
        (Ee) => ({
          class: ["svelte-flow__edge", u(A)],
          "data-id": Z,
          onclick: oe,
          oncontextmenu: i() ? (K) => {
            ge(K, i());
          } : void 0,
          onpointerenter: s() ? (K) => {
            ge(K, s());
          } : void 0,
          onpointerleave: a() ? (K) => {
            ge(K, a());
          } : void 0,
          "aria-label": u(B) === null ? void 0 : u(B) ? u(B) : `Edge from ${u(l)} to ${u(c)}`,
          "aria-describedby": u(X) ? `${td}-${r().flowId}` : void 0,
          role: n().ariaRole ?? (u(X) ? "group" : "img"),
          "aria-roledescription": "edge",
          onkeydown: u(X) ? G : void 0,
          tabindex: u(X) ? 0 : void 0,
          ...n().domAttributes,
          [Bn]: Ee
        }),
        [
          () => ({
            animated: u(C),
            selected: u(w),
            selectable: u(F)
          })
        ]
      );
      var re = I(ye);
      ea(re, () => u(te), (Ee, K) => {
        K(Ee, {
          get id() {
            return Z;
          },
          get source() {
            return u(l);
          },
          get target() {
            return u(c);
          },
          get sourceX() {
            return u(d);
          },
          get sourceY() {
            return u(p);
          },
          get targetX() {
            return u(f);
          },
          get targetY() {
            return u(g);
          },
          get sourcePosition() {
            return u(h);
          },
          get targetPosition() {
            return u(v);
          },
          get animated() {
            return u(C);
          },
          get selected() {
            return u(w);
          },
          get label() {
            return u(E);
          },
          get labelStyle() {
            return u(x);
          },
          get data() {
            return u($);
          },
          get style() {
            return u(k);
          },
          get interactionWidth() {
            return u(M);
          },
          get selectable() {
            return u(F);
          },
          get deletable() {
            return u(b);
          },
          get type() {
            return u(z);
          },
          get sourceHandleId() {
            return u(q);
          },
          get targetHandleId() {
            return u(U);
          },
          get markerStart() {
            return u(W);
          },
          get markerEnd() {
            return u(pe);
          }
        });
      }), R(ye), Rt(ye, (Ee) => O = Ee, () => O), R(me), Le((Ee) => ee = Ct(me, "", ee, Ee), [() => ({ "z-index": u(L) })]), N(ne, me);
    };
    le(ae, (ne) => {
      u(P) || ne(se);
    });
  }
  return N(e, ke), ce({
    get edge() {
      return n();
    },
    set edge(ne) {
      n(ne), m();
    },
    get store() {
      return r();
    },
    set store(ne) {
      r(ne), m();
    },
    get onedgeclick() {
      return o();
    },
    set onedgeclick(ne) {
      o(ne), m();
    },
    get onedgecontextmenu() {
      return i();
    },
    set onedgecontextmenu(ne) {
      i(ne), m();
    },
    get onedgepointerenter() {
      return s();
    },
    set onedgepointerenter(ne) {
      s(ne), m();
    },
    get onedgepointerleave() {
      return a();
    },
    set onedgepointerleave(ne) {
      a(ne), m();
    }
  });
}
ie(
  od,
  {
    edge: {},
    store: {},
    onedgeclick: {},
    onedgecontextmenu: {},
    onedgepointerenter: {},
    onedgepointerleave: {}
  },
  [],
  [],
  !0
);
rp();
var vm = /* @__PURE__ */ we("<defs></defs>");
function id(e, t) {
  ue(t, !1);
  const n = Qt();
  Hu();
  var r = vm();
  yt(r, 5, () => n.markers, (o) => o.id, (o, i) => {
    sd(o, Fe(() => u(i)));
  }), R(r), N(e, r), ce();
}
ie(id, {}, [], [], !0);
var mm = /* @__PURE__ */ we('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), ym = /* @__PURE__ */ we('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), wm = /* @__PURE__ */ we('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function sd(e, t) {
  ue(t, !0);
  let n = y(t, "id", 7), r = y(t, "type", 7), o = y(t, "width", 7, 12.5), i = y(t, "height", 7, 12.5), s = y(t, "markerUnits", 7, "strokeWidth"), a = y(t, "orient", 7, "auto-start-reverse"), l = y(t, "color", 7), c = y(t, "strokeWidth", 7);
  var d = wm(), p = I(d);
  {
    var f = (h) => {
      var v = mm();
      Le(() => {
        $e(v, "stroke", l()), $e(v, "stroke-width", c());
      }), N(h, v);
    }, g = (h, v) => {
      {
        var C = (w) => {
          var E = ym();
          Le(() => {
            $e(E, "stroke", l()), $e(E, "stroke-width", c()), $e(E, "fill", l());
          }), N(w, E);
        };
        le(
          h,
          (w) => {
            r() === ho.ArrowClosed && w(C);
          },
          v
        );
      }
    };
    le(p, (h) => {
      r() === ho.Arrow ? h(f) : h(g, !1);
    });
  }
  return R(d), Le(() => {
    $e(d, "id", n()), $e(d, "markerWidth", `${o()}`), $e(d, "markerHeight", `${i()}`), $e(d, "markerUnits", s()), $e(d, "orient", a());
  }), N(e, d), ce({
    get id() {
      return n();
    },
    set id(h) {
      n(h), m();
    },
    get type() {
      return r();
    },
    set type(h) {
      r(h), m();
    },
    get width() {
      return o();
    },
    set width(h = 12.5) {
      o(h), m();
    },
    get height() {
      return i();
    },
    set height(h = 12.5) {
      i(h), m();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(h = "strokeWidth") {
      s(h), m();
    },
    get orient() {
      return a();
    },
    set orient(h = "auto-start-reverse") {
      a(h), m();
    },
    get color() {
      return l();
    },
    set color(h) {
      l(h), m();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(h) {
      c(h), m();
    }
  });
}
ie(
  sd,
  {
    id: {},
    type: {},
    width: {},
    height: {},
    markerUnits: {},
    orient: {},
    color: {},
    strokeWidth: {}
  },
  [],
  [],
  !0
);
var bm = /* @__PURE__ */ J('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!></div>');
function ad(e, t) {
  ue(t, !0);
  let n = y(t, "store", 15), r = y(t, "onedgeclick", 7), o = y(t, "onedgecontextmenu", 7), i = y(t, "onedgepointerenter", 7), s = y(t, "onedgepointerleave", 7);
  var a = bm(), l = I(a), c = I(l);
  id(c, {}), R(l);
  var d = H(l, 2);
  return yt(d, 17, () => n().visible.edges.values(), (p) => p.id, (p, f) => {
    od(p, {
      get edge() {
        return u(f);
      },
      get onedgeclick() {
        return r();
      },
      get onedgecontextmenu() {
        return o();
      },
      get onedgepointerenter() {
        return i();
      },
      get onedgepointerleave() {
        return s();
      },
      get store() {
        return n();
      },
      set store(g) {
        n(g);
      }
    });
  }), R(a), N(e, a), ce({
    get store() {
      return n();
    },
    set store(p) {
      n(p), m();
    },
    get onedgeclick() {
      return r();
    },
    set onedgeclick(p) {
      r(p), m();
    },
    get onedgecontextmenu() {
      return o();
    },
    set onedgecontextmenu(p) {
      o(p), m();
    },
    get onedgepointerenter() {
      return i();
    },
    set onedgepointerenter(p) {
      i(p), m();
    },
    get onedgepointerleave() {
      return s();
    },
    set onedgepointerleave(p) {
      s(p), m();
    }
  });
}
ie(
  ad,
  {
    store: {},
    onedgeclick: {},
    onedgecontextmenu: {},
    onedgepointerenter: {},
    onedgepointerleave: {}
  },
  [],
  [],
  !0
);
var xm = /* @__PURE__ */ J('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const $m = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function ya(e, t) {
  ue(t, !0), qe(e, $m);
  let n = y(t, "x", 7, 0), r = y(t, "y", 7, 0), o = y(t, "width", 7, 0), i = y(t, "height", 7, 0), s = y(t, "isVisible", 7, !0);
  var a = Ie(), l = fe(a);
  {
    var c = (d) => {
      var p = xm();
      let f;
      Le((g) => f = Ct(p, "", f, g), [
        () => ({
          width: typeof o() == "string" ? o() : gn(o()),
          height: typeof i() == "string" ? i() : gn(i()),
          transform: `translate(${n()}px, ${r()}px)`
        })
      ]), N(d, p);
    };
    le(l, (d) => {
      s() && d(c);
    });
  }
  return N(e, a), ce({
    get x() {
      return n();
    },
    set x(d = 0) {
      n(d), m();
    },
    get y() {
      return r();
    },
    set y(d = 0) {
      r(d), m();
    },
    get width() {
      return o();
    },
    set width(d = 0) {
      o(d), m();
    },
    get height() {
      return i();
    },
    set height(d = 0) {
      i(d), m();
    },
    get isVisible() {
      return s();
    },
    set isVisible(d = !0) {
      s(d), m();
    }
  });
}
ie(ya, { x: {}, y: {}, width: {}, height: {}, isVisible: {} }, [], [], !0);
function km(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
function Cm(e, t, n) {
  const r = t().nodes.filter((o) => o.selected);
  n()?.({ nodes: r, event: e });
}
var _m = /* @__PURE__ */ J("<div><!></div>");
const Sm = {
  hash: "svelte-16qgzgd",
  code: ".svelte-flow__selection-wrapper.svelte-16qgzgd {position:absolute;top:0;left:0;z-index:2000;pointer-events:all;}"
};
function ld(e, t) {
  ue(t, !0), qe(e, Sm);
  let n = y(t, "store", 15), r = y(t, "onnodedrag", 7), o = y(t, "onnodedragstart", 7), i = y(t, "onnodedragstop", 7), s = y(t, "onselectionclick", 7), a = y(t, "onselectioncontextmenu", 7), l = /* @__PURE__ */ Me(void 0);
  nt(() => {
    n().disableKeyboardA11y || u(l)?.focus({ preventScroll: !0 });
  });
  let c = /* @__PURE__ */ S(() => n().selectionRectMode === "nodes" ? (n().nodes, To(n().nodeLookup, { filter: (h) => !!h.selected })) : null);
  function d(h) {
    Object.prototype.hasOwnProperty.call(mi, h.key) && (h.preventDefault(), n().moveSelectedNodes(mi[h.key], h.shiftKey ? 4 : 1));
  }
  var p = Ie(), f = fe(p);
  {
    var g = (h) => {
      var v = _m();
      v.__contextmenu = [km, n, a], v.__click = [Cm, n, s], v.__keydown = function(...E) {
        (n().disableKeyboardA11y ? void 0 : d)?.apply(this, E);
      };
      let C;
      var w = I(v);
      ya(w, { width: "100%", height: "100%", x: 0, y: 0 }), R(v), vt(v, (E, x) => Jc?.(E, x), () => ({
        disabled: !1,
        store: n(),
        onDrag: (E, x, $, k) => {
          r()?.({ event: E, targetNode: null, nodes: k });
        },
        onDragStart: (E, x, $, k) => {
          o()?.({ event: E, targetNode: null, nodes: k });
        },
        onDragStop: (E, x, $, k) => {
          i()?.({ event: E, targetNode: null, nodes: k });
        }
      })), Rt(v, (E) => Y(l, E), () => u(l)), Le(
        (E) => {
          Nt(v, 1, An(["svelte-flow__selection-wrapper", n().noPanClass]), "svelte-16qgzgd"), $e(v, "role", n().disableKeyboardA11y ? void 0 : "button"), $e(v, "tabindex", n().disableKeyboardA11y ? void 0 : -1), C = Ct(v, "", C, E);
        },
        [
          () => ({
            width: gn(u(c).width),
            height: gn(u(c).height),
            transform: `translate(${u(c).x ?? ""}px, ${u(c).y ?? ""}px)`
          })
        ]
      ), N(h, v);
    };
    le(f, (h) => {
      n().selectionRectMode === "nodes" && u(c) && Cn(u(c).x) && Cn(u(c).y) && h(g);
    });
  }
  return N(e, p), ce({
    get store() {
      return n();
    },
    set store(h) {
      n(h), m();
    },
    get onnodedrag() {
      return r();
    },
    set onnodedrag(h) {
      r(h), m();
    },
    get onnodedragstart() {
      return o();
    },
    set onnodedragstart(h) {
      o(h), m();
    },
    get onnodedragstop() {
      return i();
    },
    set onnodedragstop(h) {
      i(h), m();
    },
    get onselectionclick() {
      return s();
    },
    set onselectionclick(h) {
      s(h), m();
    },
    get onselectioncontextmenu() {
      return a();
    },
    set onselectioncontextmenu(h) {
      a(h), m();
    }
  });
}
Vn(["contextmenu", "click", "keydown"]);
ie(
  ld,
  {
    store: {},
    onnodedrag: {},
    onnodedragstart: {},
    onnodedragstop: {},
    onselectionclick: {},
    onselectioncontextmenu: {}
  },
  [],
  [],
  !0
);
function Em(e) {
  switch (e) {
    case "ctrl":
      return 8;
    case "shift":
      return 4;
    case "alt":
      return 2;
    case "meta":
      return 1;
  }
}
function nn(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(a) {
    const l = Array.isArray(r) ? r : [r], c = [a.metaKey, a.altKey, a.shiftKey, a.ctrlKey].reduce(
      (d, p, f) => p ? d | 1 << f : d,
      0
    );
    for (const d of l) {
      const p = {
        preventDefault: !1,
        enabled: !0,
        ...d
      }, { modifier: f, key: g, callback: h, preventDefault: v, enabled: C } = p;
      if (C) {
        if (a.key !== g) continue;
        if (f === null || f === !1) {
          if (c !== 0) continue;
        } else if (f !== void 0 && f?.[0]?.length > 0) {
          const E = Array.isArray(f) ? f : [f];
          let x = !1;
          for (const $ of E)
            if ((Array.isArray($) ? $ : [$]).reduce(
              (k, M) => k | Em(M),
              0
            ) === c) {
              x = !0;
              break;
            }
          if (!x) continue;
        }
        v && a.preventDefault();
        const w = {
          node: e,
          trigger: p,
          originalEvent: a
        };
        e.dispatchEvent(new CustomEvent("shortcut", { detail: w })), h?.(w);
      }
    }
  }
  let s;
  return n && (s = ds(e, o, i)), {
    update: (a) => {
      const { enabled: l = !0, type: c = "keydown" } = a;
      n && (!l || o !== c) ? s?.() : !n && l && (s = ds(e, c, i)), n = l, o = c, r = a.trigger;
    },
    destroy: () => {
      s?.();
    }
  };
}
function pt() {
  const e = /* @__PURE__ */ S(Qt), t = (i) => {
    const s = Pl(i) ? i : u(e).nodeLookup.get(i.id), a = s.parentId ? e0(s.position, s.measured, s.parentId, u(e).nodeLookup, u(e).nodeOrigin) : s.position, l = {
      ...s,
      position: a,
      width: s.measured?.width ?? s.width,
      height: s.measured?.height ?? s.height
    };
    return Hr(l);
  };
  function n(i, s, a = { replace: !1 }) {
    u(e).nodes = dt(() => u(e).nodes).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a?.replace && Pl(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  function r(i, s, a = { replace: !1 }) {
    u(e).edges = dt(() => u(e).edges).map((l) => {
      if (l.id === i) {
        const c = typeof s == "function" ? s(l) : s;
        return a.replace && Y0(c) ? c : { ...l, ...c };
      }
      return l;
    });
  }
  const o = (i) => u(e).nodeLookup.get(i);
  return {
    zoomIn: u(e).zoomIn,
    zoomOut: u(e).zoomOut,
    getInternalNode: o,
    getNode: (i) => o(i)?.internals.userNode,
    getNodes: (i) => i === void 0 ? u(e).nodes : Ol(u(e).nodeLookup, i),
    getEdge: (i) => u(e).edgeLookup.get(i),
    getEdges: (i) => i === void 0 ? u(e).edges : Ol(u(e).edgeLookup, i),
    setZoom: (i, s) => {
      const a = u(e).panZoom;
      return a ? a.scaleTo(i, { duration: s?.duration }) : Promise.resolve(!1);
    },
    getZoom: () => u(e).viewport.zoom,
    setViewport: async (i, s) => {
      const a = u(e).viewport;
      return u(e).panZoom ? (await u(e).panZoom.setViewport(
        {
          x: i.x ?? a.x,
          y: i.y ?? a.y,
          zoom: i.zoom ?? a.zoom
        },
        s
      ), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => eu(u(e).viewport),
    setCenter: async (i, s, a) => u(e).setCenter(i, s, a),
    fitView: (i) => u(e).fitView(i),
    fitBounds: async (i, s) => {
      if (!u(e).panZoom)
        return Promise.resolve(!1);
      const a = da(i, u(e).width, u(e).height, u(e).minZoom, u(e).maxZoom, s?.padding ?? 0.1);
      return await u(e).panZoom.setViewport(a, {
        duration: s?.duration,
        ease: s?.ease,
        interpolate: s?.interpolate
      }), Promise.resolve(!0);
    },
    getIntersectingNodes: (i, s = !0, a) => {
      const l = vl(i), c = l ? i : t(i);
      return c ? (a || u(e).nodes).filter((d) => {
        const p = u(e).nodeLookup.get(d.id);
        if (!p || !l && d.id === i.id)
          return !1;
        const f = Hr(p), g = vo(f, c);
        return s && g > 0 || g >= f.width * f.height || g >= c.width * c.height;
      }) : [];
    },
    isNodeIntersecting: (i, s, a = !0) => {
      const l = vl(i) ? i : t(i);
      if (!l)
        return !1;
      const c = vo(l, s);
      return a && c > 0 || c >= l.width * l.height;
    },
    deleteElements: async ({ nodes: i = [], edges: s = [] }) => {
      const { nodes: a, edges: l } = await Uv({
        nodesToRemove: i,
        edgesToRemove: s,
        nodes: u(e).nodes,
        edges: u(e).edges,
        onBeforeDelete: u(e).onbeforedelete
      });
      return a && (u(e).nodes = dt(() => u(e).nodes).filter((c) => !a.some(({ id: d }) => d === c.id))), l && (u(e).edges = dt(() => u(e).edges).filter((c) => !l.some(({ id: d }) => d === c.id))), { deletedNodes: a, deletedEdges: l };
    },
    screenToFlowPosition: (i, s = { snapToGrid: !0 }) => {
      if (!u(e).domNode)
        return i;
      const a = s.snapToGrid ? u(e).snapGrid : !1, { x: l, y: c, zoom: d } = u(e).viewport, { x: p, y: f } = u(e).domNode.getBoundingClientRect(), g = { x: i.x - p, y: i.y - f };
      return Mo(g, [l, c, d], a !== null, a || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (i) => {
      if (!u(e).domNode)
        return i;
      const { x: s, y: a, zoom: l } = u(e).viewport, { x: c, y: d } = u(e).domNode.getBoundingClientRect(), p = vi(i, [s, a, l]);
      return { x: p.x + c, y: p.y + d };
    },
    toObject: () => structuredClone({
      nodes: [...u(e).nodes],
      edges: [...u(e).edges],
      viewport: { ...u(e).viewport }
    }),
    updateNode: n,
    updateNodeData: (i, s, a) => {
      const l = u(e).nodeLookup.get(i)?.internals.userNode;
      if (!l)
        return;
      const c = typeof s == "function" ? s(l) : s;
      n(i, (d) => ({
        ...d,
        data: a?.replace ? c : { ...d.data, ...c }
      }));
    },
    updateEdge: r,
    getNodesBounds: (i) => Yv(i, {
      nodeLookup: u(e).nodeLookup,
      nodeOrigin: u(e).nodeOrigin
    }),
    getHandleConnections: ({ type: i, id: s, nodeId: a }) => Array.from(u(e).connectionLookup.get(`${a}-${i}-${s ?? null}`)?.values() ?? [])
  };
}
function Ol(e, t) {
  const n = [];
  for (const r of t) {
    const o = e.get(r);
    if (o) {
      const i = "internals" in o ? o.internals?.userNode : o;
      n.push(i);
    }
  }
  return n;
}
function ud(e, t) {
  ue(t, !0);
  let n = y(t, "store", 15), r = y(t, "selectionKey", 7, "Shift"), o = y(t, "multiSelectionKey", 23, () => kr() ? "Meta" : "Control"), i = y(t, "deleteKey", 7, "Backspace"), s = y(t, "panActivationKey", 7, " "), a = y(t, "zoomActivationKey", 23, () => kr() ? "Meta" : "Control"), { deleteElements: l } = pt();
  function c(v) {
    return v !== null && typeof v == "object";
  }
  function d(v) {
    return c(v) ? v.modifier || [] : [];
  }
  function p(v) {
    return v == null ? "" : c(v) ? v.key : v;
  }
  function f(v, C) {
    return (Array.isArray(v) ? v : [v]).map((w) => {
      const E = p(w);
      return {
        key: E,
        modifier: d(w),
        enabled: E !== null,
        callback: C
      };
    });
  }
  function g() {
    n(n().selectionRect = null, !0), n(n().selectionKeyPressed = !1, !0), n(n().multiselectionKeyPressed = !1, !0), n(n().deleteKeyPressed = !1, !0), n(n().panActivationKeyPressed = !1, !0), n(n().zoomActivationKeyPressed = !1, !0);
  }
  async function h() {
    const v = n().nodes.filter((x) => x.selected), C = n().edges.filter((x) => x.selected), { deletedNodes: w, deletedEdges: E } = await l({ nodes: v, edges: C });
    (w.length > 0 || E.length > 0) && n().ondelete?.({ nodes: w, edges: E });
  }
  return Ia("blur", Et, g), Ia("contextmenu", Et, g), vt(Et, (v, C) => nn?.(v, C), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !0, !0)),
    type: "keydown"
  })), vt(Et, (v, C) => nn?.(v, C), () => ({
    trigger: f(r(), () => n(n().selectionKeyPressed = !1, !0)),
    type: "keyup"
  })), vt(Et, (v, C) => nn?.(v, C), () => ({
    trigger: f(o(), () => {
      n(n().multiselectionKeyPressed = !0, !0);
    }),
    type: "keydown"
  })), vt(Et, (v, C) => nn?.(v, C), () => ({
    trigger: f(o(), () => n(n().multiselectionKeyPressed = !1, !0)),
    type: "keyup"
  })), vt(Et, (v, C) => nn?.(v, C), () => ({
    trigger: f(i(), (v) => {
      !(v.originalEvent.ctrlKey || v.originalEvent.metaKey || v.originalEvent.shiftKey) && !Cc(v.originalEvent) && (n(n().deleteKeyPressed = !0, !0), h());
    }),
    type: "keydown"
  })), vt(Et, (v, C) => nn?.(v, C), () => ({
    trigger: f(i(), () => n(n().deleteKeyPressed = !1, !0)),
    type: "keyup"
  })), vt(Et, (v, C) => nn?.(v, C), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), vt(Et, (v, C) => nn?.(v, C), () => ({
    trigger: f(s(), () => n(n().panActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), vt(Et, (v, C) => nn?.(v, C), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !0, !0)),
    type: "keydown"
  })), vt(Et, (v, C) => nn?.(v, C), () => ({
    trigger: f(a(), () => n(n().zoomActivationKeyPressed = !1, !0)),
    type: "keyup"
  })), ce({
    get store() {
      return n();
    },
    set store(v) {
      n(v), m();
    },
    get selectionKey() {
      return r();
    },
    set selectionKey(v = "Shift") {
      r(v), m();
    },
    get multiSelectionKey() {
      return o();
    },
    set multiSelectionKey(v = kr() ? "Meta" : "Control") {
      o(v), m();
    },
    get deleteKey() {
      return i();
    },
    set deleteKey(v = "Backspace") {
      i(v), m();
    },
    get panActivationKey() {
      return s();
    },
    set panActivationKey(v = " ") {
      s(v), m();
    },
    get zoomActivationKey() {
      return a();
    },
    set zoomActivationKey(v = kr() ? "Meta" : "Control") {
      a(v), m();
    }
  });
}
ie(
  ud,
  {
    store: {},
    selectionKey: {},
    multiSelectionKey: {},
    deleteKey: {},
    panActivationKey: {},
    zoomActivationKey: {}
  },
  [],
  [],
  !0
);
var Pm = /* @__PURE__ */ we('<path fill="none" class="svelte-flow__connection-path"></path>'), Lm = /* @__PURE__ */ we('<svg class="svelte-flow__connectionline"><g><!></g></svg>');
function cd(e, t) {
  ue(t, !0);
  let n = y(t, "store", 15), r = y(t, "type", 7), o = y(t, "containerStyle", 7), i = y(t, "style", 7), s = y(t, "LineComponent", 7), a = /* @__PURE__ */ S(() => {
    if (!n().connection.inProgress)
      return "";
    const p = {
      sourceX: n().connection.from.x,
      sourceY: n().connection.from.y,
      sourcePosition: n().connection.fromPosition,
      targetX: n().connection.to.x,
      targetY: n().connection.to.y,
      targetPosition: n().connection.toPosition
    };
    switch (r()) {
      case $n.Bezier: {
        const [f] = Sc(p);
        return f;
      }
      case $n.Straight: {
        const [f] = Pc(p);
        return f;
      }
      case $n.Step:
      case $n.SmoothStep: {
        const [f] = fa({
          ...p,
          borderRadius: r() === $n.Step ? 0 : void 0
        });
        return f;
      }
    }
  });
  var l = Ie(), c = fe(l);
  {
    var d = (p) => {
      var f = Lm(), g = I(f), h = I(g);
      {
        var v = (w) => {
          var E = Ie(), x = fe(E);
          ea(x, s, ($, k) => {
            k($, {});
          }), N(w, E);
        }, C = (w) => {
          var E = Pm();
          Le(() => {
            $e(E, "d", u(a)), Ct(E, i());
          }), N(w, E);
        };
        le(h, (w) => {
          s() ? w(v) : w(C, !1);
        });
      }
      R(g), R(f), Le(
        (w) => {
          $e(f, "width", n().width), $e(f, "height", n().height), Ct(f, o()), Nt(g, 0, w);
        },
        [
          () => An([
            "svelte-flow__connection",
            Kv(n().connection.isValid)
          ])
        ]
      ), N(p, f);
    };
    le(c, (p) => {
      n().connection.inProgress && p(d);
    });
  }
  return N(e, l), ce({
    get store() {
      return n();
    },
    set store(p) {
      n(p), m();
    },
    get type() {
      return r();
    },
    set type(p) {
      r(p), m();
    },
    get containerStyle() {
      return o();
    },
    set containerStyle(p) {
      o(p), m();
    },
    get style() {
      return i();
    },
    set style(p) {
      i(p), m();
    },
    get LineComponent() {
      return s();
    },
    set LineComponent(p) {
      s(p), m();
    }
  });
}
ie(
  cd,
  {
    store: {},
    type: {},
    containerStyle: {},
    style: {},
    LineComponent: {}
  },
  [],
  [],
  !0
);
var Tm = /* @__PURE__ */ J("<div><!></div>");
function Oo(e, t) {
  ue(t, !0);
  let n = y(t, "position", 7, "top-right"), r = y(t, "style", 7), o = y(t, "class", 7), i = y(t, "children", 7), s = /* @__PURE__ */ je(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "style",
    "class",
    "children"
  ]), a = /* @__PURE__ */ S(() => `${n()}`.split("-"));
  var l = Tm();
  ut(l, (d) => ({ class: d, style: r(), ...s }), [
    () => ["svelte-flow__panel", o(), ...u(a)]
  ]);
  var c = I(l);
  return rt(c, () => i() ?? ft), R(l), N(e, l), ce({
    get position() {
      return n();
    },
    set position(d = "top-right") {
      n(d), m();
    },
    get style() {
      return r();
    },
    set style(d) {
      r(d), m();
    },
    get class() {
      return o();
    },
    set class(d) {
      o(d), m();
    },
    get children() {
      return i();
    },
    set children(d) {
      i(d), m();
    }
  });
}
ie(Oo, { position: {}, style: {}, class: {}, children: {} }, [], [], !0);
var Mm = /* @__PURE__ */ J('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function dd(e, t) {
  ue(t, !0);
  let n = y(t, "proOptions", 7), r = y(t, "position", 7, "bottom-right");
  var o = Ie(), i = fe(o);
  {
    var s = (a) => {
      Oo(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, c) => {
          var d = Mm();
          N(l, d);
        },
        $$slots: { default: !0 }
      });
    };
    le(i, (a) => {
      n()?.hideAttribution || a(s);
    });
  }
  return N(e, o), ce({
    get proOptions() {
      return n();
    },
    set proOptions(a) {
      n(a), m();
    },
    get position() {
      return r();
    },
    set position(a = "bottom-right") {
      r(a), m();
    }
  });
}
ie(dd, { proOptions: {}, position: {} }, [], [], !0);
var Nm = /* @__PURE__ */ J("<div><!></div>");
const Om = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function fd(e, t) {
  ue(t, !0), qe(e, Om);
  let n = y(t, "width", 7), r = y(t, "height", 7), o = y(t, "colorMode", 7), i = y(t, "domNode", 15), s = y(t, "clientWidth", 15), a = y(t, "clientHeight", 15), l = y(t, "children", 7), c = y(t, "rest", 7), d = /* @__PURE__ */ S(() => c().class), p = /* @__PURE__ */ S(() => Cp(c(), [
    "id",
    "class",
    "nodeTypes",
    "edgeTypes",
    "colorMode",
    "isValidConnection",
    "onmove",
    "onmovestart",
    "onmoveend",
    "onflowerror",
    "ondelete",
    "onbeforedelete",
    "onbeforeconnect",
    "onconnect",
    "onconnectstart",
    "onconnectend",
    "onbeforereconnect",
    "onreconnect",
    "onreconnectstart",
    "onreconnectend",
    "onclickconnectstart",
    "onclickconnectend",
    "oninit",
    "onselectionchange",
    "onselectiondragstart",
    "onselectiondrag",
    "onselectiondragstop",
    "onselectionstart",
    "onselectionend",
    "clickConnect",
    "fitView",
    "fitViewOptions",
    "nodeOrigin",
    "nodeDragThreshold",
    "connectionDragThreshold",
    "minZoom",
    "maxZoom",
    "initialViewport",
    "connectionRadius",
    "connectionMode",
    "selectionMode",
    "selectNodesOnDrag",
    "snapGrid",
    "defaultMarkerColor",
    "translateExtent",
    "nodeExtent",
    "onlyRenderVisibleElements",
    "autoPanOnConnect",
    "autoPanOnNodeDrag",
    "colorModeSSR",
    "style",
    "defaultEdgeOptions",
    "elevateNodesOnSelect",
    "elevateEdgesOnSelect",
    "nodesDraggable",
    "autoPanOnNodeFocus",
    "nodesConnectable",
    "elementsSelectable",
    "nodesFocusable",
    "edgesFocusable",
    "disableKeyboardA11y",
    "noDragClass",
    "noPanClass",
    "noWheelClass",
    "ariaLabelConfig"
  ]));
  function f(v) {
    v.currentTarget.scrollTo({ top: 0, left: 0, behavior: "auto" }), c().onscroll && c().onscroll(v);
  }
  var g = Nm();
  ut(
    g,
    (v) => ({
      class: [
        "svelte-flow",
        "svelte-flow__container",
        u(d),
        o()
      ],
      "data-testid": "svelte-flow__wrapper",
      role: "application",
      onscroll: f,
      ...u(p),
      [on]: v
    }),
    [
      () => ({ width: gn(n()), height: gn(r()) })
    ],
    "svelte-12wlba6"
  );
  var h = I(g);
  return rt(h, () => l() ?? ft), R(g), Rt(g, (v) => i(v), () => i()), Ya(g, "clientHeight", a), Ya(g, "clientWidth", s), N(e, g), ce({
    get width() {
      return n();
    },
    set width(v) {
      n(v), m();
    },
    get height() {
      return r();
    },
    set height(v) {
      r(v), m();
    },
    get colorMode() {
      return o();
    },
    set colorMode(v) {
      o(v), m();
    },
    get domNode() {
      return i();
    },
    set domNode(v) {
      i(v), m();
    },
    get clientWidth() {
      return s();
    },
    set clientWidth(v) {
      s(v), m();
    },
    get clientHeight() {
      return a();
    },
    set clientHeight(v) {
      a(v), m();
    },
    get children() {
      return l();
    },
    set children(v) {
      l(v), m();
    },
    get rest() {
      return c();
    },
    set rest(v) {
      c(v), m();
    }
  });
}
ie(
  fd,
  {
    width: {},
    height: {},
    colorMode: {},
    domNode: {},
    clientWidth: {},
    clientHeight: {},
    children: {},
    rest: {}
  },
  [],
  [],
  !0
);
var Dm = /* @__PURE__ */ J('<div class="svelte-flow__viewport-back svelte-flow__container"></div> <!> <div class="svelte-flow__edge-labels svelte-flow__container"></div> <!> <!> <!> <div class="svelte-flow__viewport-front svelte-flow__container"></div>', 1), Vm = /* @__PURE__ */ J("<!> <!>", 1), Am = /* @__PURE__ */ J("<!> <!> <!> <!> <!>", 1);
function pd(e, t) {
  ue(t, !0);
  let n = y(t, "width", 7), r = y(t, "height", 7), o = y(t, "proOptions", 7), i = y(t, "selectionKey", 7), s = y(t, "deleteKey", 7), a = y(t, "panActivationKey", 7), l = y(t, "multiSelectionKey", 7), c = y(t, "zoomActivationKey", 7), d = y(t, "paneClickDistance", 7, 1), p = y(t, "nodeClickDistance", 7, 1), f = y(t, "onmovestart", 7), g = y(t, "onmoveend", 7), h = y(t, "onmove", 7), v = y(t, "oninit", 7), C = y(t, "onnodeclick", 7), w = y(t, "onnodecontextmenu", 7), E = y(t, "onnodedrag", 7), x = y(t, "onnodedragstart", 7), $ = y(t, "onnodedragstop", 7), k = y(t, "onnodepointerenter", 7), M = y(t, "onnodepointermove", 7), z = y(t, "onnodepointerleave", 7), q = y(t, "onselectionclick", 7), U = y(t, "onselectioncontextmenu", 7), j = y(t, "onselectionstart", 7), T = y(t, "onselectionend", 7), _ = y(t, "onedgeclick", 7), D = y(t, "onedgecontextmenu", 7), b = y(t, "onedgepointerenter", 7), P = y(t, "onedgepointerleave", 7), L = y(t, "onpaneclick", 7), A = y(t, "onpanecontextmenu", 7), B = y(t, "panOnScrollMode", 23, () => cn.Free), O = y(t, "preventScrolling", 7, !0), Z = y(t, "zoomOnScroll", 7, !0), F = y(t, "zoomOnDoubleClick", 7, !0), X = y(t, "zoomOnPinch", 7, !0), te = y(t, "panOnScroll", 7, !1), W = y(t, "panOnDrag", 7, !0), pe = y(t, "selectionOnDrag", 7, !0), oe = y(t, "connectionLineComponent", 7), ge = y(t, "connectionLineStyle", 7), G = y(t, "connectionLineContainerStyle", 7), ke = y(t, "connectionLineType", 23, () => $n.Bezier), ae = y(t, "attributionPosition", 7), se = y(t, "children", 7), ne = y(t, "nodes", 31, () => jt([])), me = y(t, "edges", 31, () => jt([])), ee = y(t, "viewport", 31, () => {
  }), ye = /* @__PURE__ */ je(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "width",
    "height",
    "proOptions",
    "selectionKey",
    "deleteKey",
    "panActivationKey",
    "multiSelectionKey",
    "zoomActivationKey",
    "paneClickDistance",
    "nodeClickDistance",
    "onmovestart",
    "onmoveend",
    "onmove",
    "oninit",
    "onnodeclick",
    "onnodecontextmenu",
    "onnodedrag",
    "onnodedragstart",
    "onnodedragstop",
    "onnodepointerenter",
    "onnodepointermove",
    "onnodepointerleave",
    "onselectionclick",
    "onselectioncontextmenu",
    "onselectionstart",
    "onselectionend",
    "onedgeclick",
    "onedgecontextmenu",
    "onedgepointerenter",
    "onedgepointerleave",
    "onpaneclick",
    "onpanecontextmenu",
    "panOnScrollMode",
    "preventScrolling",
    "zoomOnScroll",
    "zoomOnDoubleClick",
    "zoomOnPinch",
    "panOnScroll",
    "panOnDrag",
    "selectionOnDrag",
    "connectionLineComponent",
    "connectionLineStyle",
    "connectionLineContainerStyle",
    "connectionLineType",
    "attributionPosition",
    "children",
    "nodes",
    "edges",
    "viewport"
  ]), re = Wc({
    props: ye,
    width: n(),
    height: r(),
    get nodes() {
      return ne();
    },
    set nodes(K) {
      ne(K);
    },
    get edges() {
      return me();
    },
    set edges(K) {
      me(K);
    },
    get viewport() {
      return ee();
    },
    set viewport(K) {
      ee(K);
    }
  });
  const Ee = jn(yi);
  return Ee && Ee.setStore && Ee.setStore(re), Tr(yi, {
    provider: !1,
    getStore() {
      return re;
    }
  }), nt(() => {
    const K = { nodes: re.selectedNodes, edges: re.selectedEdges };
    dt(() => t.onselectionchange)?.(K);
    for (const Je of re.selectionChangeHandlers.values())
      Je(K);
  }), Pi(() => {
    re.reset();
  }), fd(e, {
    get colorMode() {
      return re.colorMode;
    },
    get width() {
      return n();
    },
    get height() {
      return r();
    },
    get rest() {
      return ye;
    },
    get domNode() {
      return re.domNode;
    },
    set domNode(K) {
      re.domNode = K;
    },
    get clientWidth() {
      return re.width;
    },
    set clientWidth(K) {
      re.width = K;
    },
    get clientHeight() {
      return re.height;
    },
    set clientHeight(K) {
      re.height = K;
    },
    children: (K, Je) => {
      var de = Am(), Ce = fe(de);
      ud(Ce, {
        get selectionKey() {
          return i();
        },
        get deleteKey() {
          return s();
        },
        get panActivationKey() {
          return a();
        },
        get multiSelectionKey() {
          return l();
        },
        get zoomActivationKey() {
          return c();
        },
        get store() {
          return re;
        },
        set store(Ve) {
          re = Ve;
        }
      });
      var _e = H(Ce, 2);
      Xc(_e, {
        get panOnScrollMode() {
          return B();
        },
        get preventScrolling() {
          return O();
        },
        get zoomOnScroll() {
          return Z();
        },
        get zoomOnDoubleClick() {
          return F();
        },
        get zoomOnPinch() {
          return X();
        },
        get panOnScroll() {
          return te();
        },
        get panOnDrag() {
          return W();
        },
        get paneClickDistance() {
          return d();
        },
        get onmovestart() {
          return f();
        },
        get onmove() {
          return h();
        },
        get onmoveend() {
          return g();
        },
        get oninit() {
          return v();
        },
        get store() {
          return re;
        },
        set store(Ve) {
          re = Ve;
        },
        children: (Ve, Qe) => {
          Uc(Ve, {
            get onpaneclick() {
              return L();
            },
            get onpanecontextmenu() {
              return A();
            },
            get onselectionstart() {
              return j();
            },
            get onselectionend() {
              return T();
            },
            get panOnDrag() {
              return W();
            },
            get selectionOnDrag() {
              return pe();
            },
            get store() {
              return re;
            },
            set store(he) {
              re = he;
            },
            children: (he, We) => {
              var ct = Vm(), et = fe(ct);
              Gc(et, {
                get store() {
                  return re;
                },
                set store(tr) {
                  re = tr;
                },
                children: (tr, qi) => {
                  var bn = Dm(), yr = H(fe(bn), 2);
                  ad(yr, {
                    get onedgeclick() {
                      return _();
                    },
                    get onedgecontextmenu() {
                      return D();
                    },
                    get onedgepointerenter() {
                      return b();
                    },
                    get onedgepointerleave() {
                      return P();
                    },
                    get store() {
                      return re;
                    },
                    set store(tn) {
                      re = tn;
                    }
                  });
                  var wr = H(yr, 4);
                  cd(wr, {
                    get type() {
                      return ke();
                    },
                    get LineComponent() {
                      return oe();
                    },
                    get containerStyle() {
                      return G();
                    },
                    get style() {
                      return ge();
                    },
                    get store() {
                      return re;
                    },
                    set store(tn) {
                      re = tn;
                    }
                  });
                  var jr = H(wr, 2);
                  rd(jr, {
                    get nodeClickDistance() {
                      return p();
                    },
                    get onnodeclick() {
                      return C();
                    },
                    get onnodecontextmenu() {
                      return w();
                    },
                    get onnodepointerenter() {
                      return k();
                    },
                    get onnodepointermove() {
                      return M();
                    },
                    get onnodepointerleave() {
                      return z();
                    },
                    get onnodedrag() {
                      return E();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return $();
                    },
                    get store() {
                      return re;
                    },
                    set store(tn) {
                      re = tn;
                    }
                  });
                  var Zi = H(jr, 2);
                  ld(Zi, {
                    get onselectionclick() {
                      return q();
                    },
                    get onselectioncontextmenu() {
                      return U();
                    },
                    get onnodedrag() {
                      return E();
                    },
                    get onnodedragstart() {
                      return x();
                    },
                    get onnodedragstop() {
                      return $();
                    },
                    get store() {
                      return re;
                    },
                    set store(tn) {
                      re = tn;
                    }
                  }), be(2), N(tr, bn);
                },
                $$slots: { default: !0 }
              });
              var _t = H(et, 2);
              const at = /* @__PURE__ */ S(() => !!(re.selectionRect && re.selectionRectMode === "user")), Bt = /* @__PURE__ */ S(() => re.selectionRect?.width), Kr = /* @__PURE__ */ S(() => re.selectionRect?.height), yn = /* @__PURE__ */ S(() => re.selectionRect?.x), wn = /* @__PURE__ */ S(() => re.selectionRect?.y);
              ya(_t, {
                get isVisible() {
                  return u(at);
                },
                get width() {
                  return u(Bt);
                },
                get height() {
                  return u(Kr);
                },
                get x() {
                  return u(yn);
                },
                get y() {
                  return u(wn);
                }
              }), N(he, ct);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { default: !0 }
      });
      var Re = H(_e, 2);
      dd(Re, {
        get proOptions() {
          return o();
        },
        get position() {
          return ae();
        }
      });
      var gt = H(Re, 2);
      Qc(gt, {
        get store() {
          return re;
        }
      });
      var wt = H(gt, 2);
      rt(wt, () => se() ?? ft), N(K, de);
    },
    $$slots: { default: !0 }
  }), ce({
    get width() {
      return n();
    },
    set width(K) {
      n(K), m();
    },
    get height() {
      return r();
    },
    set height(K) {
      r(K), m();
    },
    get proOptions() {
      return o();
    },
    set proOptions(K) {
      o(K), m();
    },
    get selectionKey() {
      return i();
    },
    set selectionKey(K) {
      i(K), m();
    },
    get deleteKey() {
      return s();
    },
    set deleteKey(K) {
      s(K), m();
    },
    get panActivationKey() {
      return a();
    },
    set panActivationKey(K) {
      a(K), m();
    },
    get multiSelectionKey() {
      return l();
    },
    set multiSelectionKey(K) {
      l(K), m();
    },
    get zoomActivationKey() {
      return c();
    },
    set zoomActivationKey(K) {
      c(K), m();
    },
    get paneClickDistance() {
      return d();
    },
    set paneClickDistance(K = 1) {
      d(K), m();
    },
    get nodeClickDistance() {
      return p();
    },
    set nodeClickDistance(K = 1) {
      p(K), m();
    },
    get onmovestart() {
      return f();
    },
    set onmovestart(K) {
      f(K), m();
    },
    get onmoveend() {
      return g();
    },
    set onmoveend(K) {
      g(K), m();
    },
    get onmove() {
      return h();
    },
    set onmove(K) {
      h(K), m();
    },
    get oninit() {
      return v();
    },
    set oninit(K) {
      v(K), m();
    },
    get onnodeclick() {
      return C();
    },
    set onnodeclick(K) {
      C(K), m();
    },
    get onnodecontextmenu() {
      return w();
    },
    set onnodecontextmenu(K) {
      w(K), m();
    },
    get onnodedrag() {
      return E();
    },
    set onnodedrag(K) {
      E(K), m();
    },
    get onnodedragstart() {
      return x();
    },
    set onnodedragstart(K) {
      x(K), m();
    },
    get onnodedragstop() {
      return $();
    },
    set onnodedragstop(K) {
      $(K), m();
    },
    get onnodepointerenter() {
      return k();
    },
    set onnodepointerenter(K) {
      k(K), m();
    },
    get onnodepointermove() {
      return M();
    },
    set onnodepointermove(K) {
      M(K), m();
    },
    get onnodepointerleave() {
      return z();
    },
    set onnodepointerleave(K) {
      z(K), m();
    },
    get onselectionclick() {
      return q();
    },
    set onselectionclick(K) {
      q(K), m();
    },
    get onselectioncontextmenu() {
      return U();
    },
    set onselectioncontextmenu(K) {
      U(K), m();
    },
    get onselectionstart() {
      return j();
    },
    set onselectionstart(K) {
      j(K), m();
    },
    get onselectionend() {
      return T();
    },
    set onselectionend(K) {
      T(K), m();
    },
    get onedgeclick() {
      return _();
    },
    set onedgeclick(K) {
      _(K), m();
    },
    get onedgecontextmenu() {
      return D();
    },
    set onedgecontextmenu(K) {
      D(K), m();
    },
    get onedgepointerenter() {
      return b();
    },
    set onedgepointerenter(K) {
      b(K), m();
    },
    get onedgepointerleave() {
      return P();
    },
    set onedgepointerleave(K) {
      P(K), m();
    },
    get onpaneclick() {
      return L();
    },
    set onpaneclick(K) {
      L(K), m();
    },
    get onpanecontextmenu() {
      return A();
    },
    set onpanecontextmenu(K) {
      A(K), m();
    },
    get panOnScrollMode() {
      return B();
    },
    set panOnScrollMode(K = cn.Free) {
      B(K), m();
    },
    get preventScrolling() {
      return O();
    },
    set preventScrolling(K = !0) {
      O(K), m();
    },
    get zoomOnScroll() {
      return Z();
    },
    set zoomOnScroll(K = !0) {
      Z(K), m();
    },
    get zoomOnDoubleClick() {
      return F();
    },
    set zoomOnDoubleClick(K = !0) {
      F(K), m();
    },
    get zoomOnPinch() {
      return X();
    },
    set zoomOnPinch(K = !0) {
      X(K), m();
    },
    get panOnScroll() {
      return te();
    },
    set panOnScroll(K = !1) {
      te(K), m();
    },
    get panOnDrag() {
      return W();
    },
    set panOnDrag(K = !0) {
      W(K), m();
    },
    get selectionOnDrag() {
      return pe();
    },
    set selectionOnDrag(K = !0) {
      pe(K), m();
    },
    get connectionLineComponent() {
      return oe();
    },
    set connectionLineComponent(K) {
      oe(K), m();
    },
    get connectionLineStyle() {
      return ge();
    },
    set connectionLineStyle(K) {
      ge(K), m();
    },
    get connectionLineContainerStyle() {
      return G();
    },
    set connectionLineContainerStyle(K) {
      G(K), m();
    },
    get connectionLineType() {
      return ke();
    },
    set connectionLineType(K = $n.Bezier) {
      ke(K), m();
    },
    get attributionPosition() {
      return ae();
    },
    set attributionPosition(K) {
      ae(K), m();
    },
    get children() {
      return se();
    },
    set children(K) {
      se(K), m();
    },
    get nodes() {
      return ne();
    },
    set nodes(K = []) {
      ne(K), m();
    },
    get edges() {
      return me();
    },
    set edges(K = []) {
      me(K), m();
    },
    get viewport() {
      return ee();
    },
    set viewport(K = void 0) {
      ee(K), m();
    }
  });
}
ie(
  pd,
  {
    width: {},
    height: {},
    proOptions: {},
    selectionKey: {},
    deleteKey: {},
    panActivationKey: {},
    multiSelectionKey: {},
    zoomActivationKey: {},
    paneClickDistance: {},
    nodeClickDistance: {},
    onmovestart: {},
    onmoveend: {},
    onmove: {},
    oninit: {},
    onnodeclick: {},
    onnodecontextmenu: {},
    onnodedrag: {},
    onnodedragstart: {},
    onnodedragstop: {},
    onnodepointerenter: {},
    onnodepointermove: {},
    onnodepointerleave: {},
    onselectionclick: {},
    onselectioncontextmenu: {},
    onselectionstart: {},
    onselectionend: {},
    onedgeclick: {},
    onedgecontextmenu: {},
    onedgepointerenter: {},
    onedgepointerleave: {},
    onpaneclick: {},
    onpanecontextmenu: {},
    panOnScrollMode: {},
    preventScrolling: {},
    zoomOnScroll: {},
    zoomOnDoubleClick: {},
    zoomOnPinch: {},
    panOnScroll: {},
    panOnDrag: {},
    selectionOnDrag: {},
    connectionLineComponent: {},
    connectionLineStyle: {},
    connectionLineContainerStyle: {},
    connectionLineType: {},
    attributionPosition: {},
    children: {},
    nodes: {},
    edges: {},
    viewport: {}
  },
  [],
  [],
  !0
);
function gd(e, t) {
  ue(t, !0);
  let n = y(t, "children", 7), r = /* @__PURE__ */ Me(Wc({ props: {}, nodes: [], edges: [] }));
  Tr(yi, {
    provider: !0,
    getStore() {
      return u(r);
    },
    setStore: (s) => {
      Y(r, s);
    }
  }), Pi(() => {
    u(r).reset();
  });
  var o = Ie(), i = fe(o);
  return rt(i, () => n() ?? ft), N(e, o), ce({
    get children() {
      return n();
    },
    set children(s) {
      n(s), m();
    }
  });
}
ie(gd, { children: {} }, [], [], !0);
var Hm = /* @__PURE__ */ J("<button><!></button>");
function eo(e, t) {
  ue(t, !0);
  let n = y(t, "class", 7), r = y(t, "bgColor", 7), o = y(t, "bgColorHover", 7), i = y(t, "color", 7), s = y(t, "colorHover", 7), a = y(t, "borderColor", 7), l = y(t, "onclick", 7), c = y(t, "children", 7), d = /* @__PURE__ */ je(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor",
    "onclick",
    "children"
  ]);
  var p = Hm();
  ut(
    p,
    (g) => ({
      type: "button",
      onclick: l(),
      class: ["svelte-flow__controls-button", n()],
      ...d,
      [on]: g
    }),
    [
      () => ({
        "--xy-controls-button-background-color-props": r(),
        "--xy-controls-button-background-color-hover-props": o(),
        "--xy-controls-button-color-props": i(),
        "--xy-controls-button-color-hover-props": s(),
        "--xy-controls-button-border-color-props": a()
      })
    ]
  );
  var f = I(p);
  return rt(f, () => c() ?? ft), R(p), N(e, p), ce({
    get class() {
      return n();
    },
    set class(g) {
      n(g), m();
    },
    get bgColor() {
      return r();
    },
    set bgColor(g) {
      r(g), m();
    },
    get bgColorHover() {
      return o();
    },
    set bgColorHover(g) {
      o(g), m();
    },
    get color() {
      return i();
    },
    set color(g) {
      i(g), m();
    },
    get colorHover() {
      return s();
    },
    set colorHover(g) {
      s(g), m();
    },
    get borderColor() {
      return a();
    },
    set borderColor(g) {
      a(g), m();
    },
    get onclick() {
      return l();
    },
    set onclick(g) {
      l(g), m();
    },
    get children() {
      return c();
    },
    set children(g) {
      c(g), m();
    }
  });
}
ie(
  eo,
  {
    class: {},
    bgColor: {},
    bgColorHover: {},
    color: {},
    colorHover: {},
    borderColor: {},
    onclick: {},
    children: {}
  },
  [],
  [],
  !0
);
var zm = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function hd(e) {
  var t = zm();
  N(e, t);
}
ie(hd, {}, [], [], !0);
var Rm = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function vd(e) {
  var t = Rm();
  N(e, t);
}
ie(vd, {}, [], [], !0);
var Im = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function md(e) {
  var t = Im();
  N(e, t);
}
ie(md, {}, [], [], !0);
var Bm = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function yd(e) {
  var t = Bm();
  N(e, t);
}
ie(yd, {}, [], [], !0);
var qm = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function wd(e) {
  var t = qm();
  N(e, t);
}
ie(wd, {}, [], [], !0);
var Zm = /* @__PURE__ */ J("<!> <!>", 1), Km = /* @__PURE__ */ J("<!> <!> <!> <!> <!> <!>", 1);
function bd(e, t) {
  ue(t, !0);
  let n = y(t, "position", 7, "bottom-left"), r = y(t, "orientation", 7, "vertical"), o = y(t, "showZoom", 7, !0), i = y(t, "showFitView", 7, !0), s = y(t, "showLock", 7, !0), a = y(t, "style", 7), l = y(t, "class", 7), c = y(t, "buttonBgColor", 7), d = y(t, "buttonBgColorHover", 7), p = y(t, "buttonColor", 7), f = y(t, "buttonColorHover", 7), g = y(t, "buttonBorderColor", 7), h = y(t, "fitViewOptions", 7), v = y(t, "children", 7), C = y(t, "before", 7), w = y(t, "after", 7), E = /* @__PURE__ */ je(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "orientation",
    "showZoom",
    "showFitView",
    "showLock",
    "style",
    "class",
    "buttonBgColor",
    "buttonBgColorHover",
    "buttonColor",
    "buttonColorHover",
    "buttonBorderColor",
    "fitViewOptions",
    "children",
    "before",
    "after"
  ]), x = /* @__PURE__ */ S(Qt);
  const $ = {
    bgColor: c(),
    bgColorHover: d(),
    color: p(),
    colorHover: f(),
    borderColor: g()
  };
  let k = /* @__PURE__ */ S(() => u(x).nodesDraggable || u(x).nodesConnectable || u(x).elementsSelectable), M = /* @__PURE__ */ S(() => u(x).viewport.zoom <= u(x).minZoom), z = /* @__PURE__ */ S(() => u(x).viewport.zoom >= u(x).maxZoom), q = /* @__PURE__ */ S(() => u(x).ariaLabelConfig), U = /* @__PURE__ */ S(() => r() === "horizontal" ? "horizontal" : "vertical");
  const j = () => {
    u(x).zoomIn();
  }, T = () => {
    u(x).zoomOut();
  }, _ = () => {
    u(x).fitView(h());
  }, D = () => {
    let P = !u(k);
    u(x).nodesDraggable = P, u(x).nodesConnectable = P, u(x).elementsSelectable = P;
  }, b = /* @__PURE__ */ S(() => [
    "svelte-flow__controls",
    u(U),
    l()
  ]);
  return Oo(e, Fe(
    {
      get class() {
        return u(b);
      },
      get position() {
        return n();
      },
      "data-testid": "svelte-flow__controls",
      get "aria-label"() {
        return u(q)["controls.ariaLabel"];
      },
      get style() {
        return a();
      }
    },
    () => E,
    {
      children: (P, L) => {
        var A = Km(), B = fe(A);
        {
          var O = (ae) => {
            var se = Ie(), ne = fe(se);
            rt(ne, C), N(ae, se);
          };
          le(B, (ae) => {
            C() && ae(O);
          });
        }
        var Z = H(B, 2);
        {
          var F = (ae) => {
            var se = Zm(), ne = fe(se);
            eo(ne, Fe(
              {
                onclick: j,
                class: "svelte-flow__controls-zoomin",
                get title() {
                  return u(q)["controls.zoomIn.ariaLabel"];
                },
                get "aria-label"() {
                  return u(q)["controls.zoomIn.ariaLabel"];
                },
                get disabled() {
                  return u(z);
                }
              },
              () => $,
              {
                children: (ee, ye) => {
                  hd(ee);
                },
                $$slots: { default: !0 }
              }
            ));
            var me = H(ne, 2);
            eo(me, Fe(
              {
                onclick: T,
                class: "svelte-flow__controls-zoomout",
                get title() {
                  return u(q)["controls.zoomOut.ariaLabel"];
                },
                get "aria-label"() {
                  return u(q)["controls.zoomOut.ariaLabel"];
                },
                get disabled() {
                  return u(M);
                }
              },
              () => $,
              {
                children: (ee, ye) => {
                  vd(ee);
                },
                $$slots: { default: !0 }
              }
            )), N(ae, se);
          };
          le(Z, (ae) => {
            o() && ae(F);
          });
        }
        var X = H(Z, 2);
        {
          var te = (ae) => {
            eo(ae, Fe(
              {
                class: "svelte-flow__controls-fitview",
                onclick: _,
                get title() {
                  return u(q)["controls.fitView.ariaLabel"];
                },
                get "aria-label"() {
                  return u(q)["controls.fitView.ariaLabel"];
                }
              },
              () => $,
              {
                children: (se, ne) => {
                  md(se);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          le(X, (ae) => {
            i() && ae(te);
          });
        }
        var W = H(X, 2);
        {
          var pe = (ae) => {
            eo(ae, Fe(
              {
                class: "svelte-flow__controls-interactive",
                onclick: D,
                get title() {
                  return u(q)["controls.interactive.ariaLabel"];
                },
                get "aria-label"() {
                  return u(q)["controls.interactive.ariaLabel"];
                }
              },
              () => $,
              {
                children: (se, ne) => {
                  var me = Ie(), ee = fe(me);
                  {
                    var ye = (Ee) => {
                      wd(Ee);
                    }, re = (Ee) => {
                      yd(Ee);
                    };
                    le(ee, (Ee) => {
                      u(k) ? Ee(ye) : Ee(re, !1);
                    });
                  }
                  N(se, me);
                },
                $$slots: { default: !0 }
              }
            ));
          };
          le(W, (ae) => {
            s() && ae(pe);
          });
        }
        var oe = H(W, 2);
        {
          var ge = (ae) => {
            var se = Ie(), ne = fe(se);
            rt(ne, v), N(ae, se);
          };
          le(oe, (ae) => {
            v() && ae(ge);
          });
        }
        var G = H(oe, 2);
        {
          var ke = (ae) => {
            var se = Ie(), ne = fe(se);
            rt(ne, w), N(ae, se);
          };
          le(G, (ae) => {
            w() && ae(ke);
          });
        }
        N(P, A);
      },
      $$slots: { default: !0 }
    }
  )), ce({
    get position() {
      return n();
    },
    set position(P = "bottom-left") {
      n(P), m();
    },
    get orientation() {
      return r();
    },
    set orientation(P = "vertical") {
      r(P), m();
    },
    get showZoom() {
      return o();
    },
    set showZoom(P = !0) {
      o(P), m();
    },
    get showFitView() {
      return i();
    },
    set showFitView(P = !0) {
      i(P), m();
    },
    get showLock() {
      return s();
    },
    set showLock(P = !0) {
      s(P), m();
    },
    get style() {
      return a();
    },
    set style(P) {
      a(P), m();
    },
    get class() {
      return l();
    },
    set class(P) {
      l(P), m();
    },
    get buttonBgColor() {
      return c();
    },
    set buttonBgColor(P) {
      c(P), m();
    },
    get buttonBgColorHover() {
      return d();
    },
    set buttonBgColorHover(P) {
      d(P), m();
    },
    get buttonColor() {
      return p();
    },
    set buttonColor(P) {
      p(P), m();
    },
    get buttonColorHover() {
      return f();
    },
    set buttonColorHover(P) {
      f(P), m();
    },
    get buttonBorderColor() {
      return g();
    },
    set buttonBorderColor(P) {
      g(P), m();
    },
    get fitViewOptions() {
      return h();
    },
    set fitViewOptions(P) {
      h(P), m();
    },
    get children() {
      return v();
    },
    set children(P) {
      v(P), m();
    },
    get before() {
      return C();
    },
    set before(P) {
      C(P), m();
    },
    get after() {
      return w();
    },
    set after(P) {
      w(P), m();
    }
  });
}
ie(
  bd,
  {
    position: {},
    orientation: {},
    showZoom: {},
    showFitView: {},
    showLock: {},
    style: {},
    class: {},
    buttonBgColor: {},
    buttonBgColorHover: {},
    buttonColor: {},
    buttonColorHover: {},
    buttonBorderColor: {},
    fitViewOptions: {},
    children: {},
    before: {},
    after: {}
  },
  [],
  [],
  !0
);
var _n;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(_n || (_n = {}));
var jm = /* @__PURE__ */ we("<circle></circle>");
function xd(e, t) {
  ue(t, !0);
  let n = y(t, "radius", 7), r = y(t, "class", 7);
  var o = jm();
  return Le(() => {
    $e(o, "cx", n()), $e(o, "cy", n()), $e(o, "r", n()), Nt(o, 0, An(["svelte-flow__background-pattern", "dots", r()]));
  }), N(e, o), ce({
    get radius() {
      return n();
    },
    set radius(i) {
      n(i), m();
    },
    get class() {
      return r();
    },
    set class(i) {
      r(i), m();
    }
  });
}
ie(xd, { radius: {}, class: {} }, [], [], !0);
var Ym = /* @__PURE__ */ we("<path></path>");
function $d(e, t) {
  ue(t, !0);
  let n = y(t, "lineWidth", 7), r = y(t, "dimensions", 7), o = y(t, "variant", 7), i = y(t, "class", 7);
  var s = Ym();
  return Le(() => {
    $e(s, "stroke-width", n()), $e(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), Nt(s, 0, An(["svelte-flow__background-pattern", o(), i()]));
  }), N(e, s), ce({
    get lineWidth() {
      return n();
    },
    set lineWidth(a) {
      n(a), m();
    },
    get dimensions() {
      return r();
    },
    set dimensions(a) {
      r(a), m();
    },
    get variant() {
      return o();
    },
    set variant(a) {
      o(a), m();
    },
    get class() {
      return i();
    },
    set class(a) {
      i(a), m();
    }
  });
}
ie($d, { lineWidth: {}, dimensions: {}, variant: {}, class: {} }, [], [], !0);
const Fm = {
  [_n.Dots]: 1,
  [_n.Lines]: 1,
  [_n.Cross]: 6
};
var Wm = /* @__PURE__ */ we('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
function kd(e, t) {
  ue(t, !0);
  let n = y(t, "id", 7), r = y(t, "variant", 23, () => _n.Dots), o = y(t, "gap", 7, 20), i = y(t, "size", 7), s = y(t, "lineWidth", 7, 1), a = y(t, "bgColor", 7), l = y(t, "patternColor", 7), c = y(t, "patternClass", 7), d = y(t, "class", 7), p = /* @__PURE__ */ S(Qt), f = /* @__PURE__ */ S(() => r() === _n.Dots), g = /* @__PURE__ */ S(() => r() === _n.Cross), h = /* @__PURE__ */ S(() => Array.isArray(o()) ? o() : [o(), o()]), v = /* @__PURE__ */ S(() => `background-pattern-${u(p).flowId}-${n() ?? ""}`), C = /* @__PURE__ */ S(() => [
    u(h)[0] * u(p).viewport.zoom || 1,
    u(h)[1] * u(p).viewport.zoom || 1
  ]), w = /* @__PURE__ */ S(() => (i() ?? Fm[r()]) * u(p).viewport.zoom), E = /* @__PURE__ */ S(() => u(g) ? [u(w), u(w)] : u(C)), x = /* @__PURE__ */ S(() => u(f) ? [u(w) / 2, u(w) / 2] : [
    u(E)[0] / 2,
    u(E)[1] / 2
  ]);
  var $ = Wm();
  let k;
  var M = I($), z = I(M);
  {
    var q = (T) => {
      const _ = /* @__PURE__ */ S(() => u(w) / 2);
      xd(T, {
        get radius() {
          return u(_);
        },
        get class() {
          return c();
        }
      });
    }, U = (T) => {
      $d(T, {
        get dimensions() {
          return u(E);
        },
        get variant() {
          return r();
        },
        get lineWidth() {
          return s();
        },
        get class() {
          return c();
        }
      });
    };
    le(z, (T) => {
      u(f) ? T(q) : T(U, !1);
    });
  }
  R(M);
  var j = H(M);
  return R($), Le(
    (T) => {
      Nt($, 0, An([
        "svelte-flow__background",
        "svelte-flow__container",
        d()
      ])), k = Ct($, "", k, T), $e(M, "id", u(v)), $e(M, "x", u(p).viewport.x % u(C)[0]), $e(M, "y", u(p).viewport.y % u(C)[1]), $e(M, "width", u(C)[0]), $e(M, "height", u(C)[1]), $e(M, "patternTransform", `translate(-${u(x)[0]},-${u(x)[1]})`), $e(j, "fill", `url(#${u(v)})`);
    },
    [
      () => ({
        "--xy-background-color-props": a(),
        "--xy-background-pattern-color-props": l()
      })
    ]
  ), N(e, $), ce({
    get id() {
      return n();
    },
    set id(T) {
      n(T), m();
    },
    get variant() {
      return r();
    },
    set variant(T = _n.Dots) {
      r(T), m();
    },
    get gap() {
      return o();
    },
    set gap(T = 20) {
      o(T), m();
    },
    get size() {
      return i();
    },
    set size(T) {
      i(T), m();
    },
    get lineWidth() {
      return s();
    },
    set lineWidth(T = 1) {
      s(T), m();
    },
    get bgColor() {
      return a();
    },
    set bgColor(T) {
      a(T), m();
    },
    get patternColor() {
      return l();
    },
    set patternColor(T) {
      l(T), m();
    },
    get patternClass() {
      return c();
    },
    set patternClass(T) {
      c(T), m();
    },
    get class() {
      return d();
    },
    set class(T) {
      d(T), m();
    }
  });
}
ie(
  kd,
  {
    id: {},
    variant: {},
    gap: {},
    size: {},
    lineWidth: {},
    bgColor: {},
    patternColor: {},
    patternClass: {},
    class: {}
  },
  [],
  [],
  !0
);
var Xm = /* @__PURE__ */ we("<rect></rect>");
function Cd(e, t) {
  ue(t, !0);
  let n = y(t, "x", 7), r = y(t, "y", 7), o = y(t, "width", 7), i = y(t, "height", 7), s = y(t, "borderRadius", 7, 5), a = y(t, "color", 7), l = y(t, "shapeRendering", 7), c = y(t, "strokeColor", 7), d = y(t, "strokeWidth", 7, 2), p = y(t, "selected", 7), f = y(t, "class", 7);
  var g = Xm();
  let h, v;
  return Le(
    (C, w) => {
      h = Nt(g, 0, An(["svelte-flow__minimap-node", f()]), null, h, C), $e(g, "x", n()), $e(g, "y", r()), $e(g, "rx", s()), $e(g, "ry", s()), $e(g, "width", o()), $e(g, "height", i()), $e(g, "shape-rendering", l()), v = Ct(g, "", v, w);
    },
    [
      () => ({ selected: p() }),
      () => ({
        fill: a(),
        stroke: c(),
        "stroke-width": d()
      })
    ]
  ), N(e, g), ce({
    get x() {
      return n();
    },
    set x(C) {
      n(C), m();
    },
    get y() {
      return r();
    },
    set y(C) {
      r(C), m();
    },
    get width() {
      return o();
    },
    set width(C) {
      o(C), m();
    },
    get height() {
      return i();
    },
    set height(C) {
      i(C), m();
    },
    get borderRadius() {
      return s();
    },
    set borderRadius(C = 5) {
      s(C), m();
    },
    get color() {
      return a();
    },
    set color(C) {
      a(C), m();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(C) {
      l(C), m();
    },
    get strokeColor() {
      return c();
    },
    set strokeColor(C) {
      c(C), m();
    },
    get strokeWidth() {
      return d();
    },
    set strokeWidth(C = 2) {
      d(C), m();
    },
    get selected() {
      return p();
    },
    set selected(C) {
      p(C), m();
    },
    get class() {
      return f();
    },
    set class(C) {
      f(C), m();
    }
  });
}
ie(
  Cd,
  {
    x: {},
    y: {},
    width: {},
    height: {},
    borderRadius: {},
    color: {},
    shapeRendering: {},
    strokeColor: {},
    strokeWidth: {},
    selected: {},
    class: {}
  },
  [],
  [],
  !0
);
function Um(e, t) {
  const n = N0({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const { viewport: o } = t.store;
      return [o.x, o.y, o.zoom];
    },
    getViewScale: t.getViewScale
  });
  n.update({
    translateExtent: t.translateExtent,
    width: t.width,
    height: t.height,
    inversePan: t.inversePan,
    zoomStep: t.zoomStep,
    pannable: t.pannable,
    zoomable: t.zoomable
  });
  function r(o) {
    n.update({
      translateExtent: o.translateExtent,
      width: o.width,
      height: o.height,
      inversePan: o.inversePan,
      zoomStep: o.zoomStep,
      pannable: o.pannable,
      zoomable: o.zoomable
    });
  }
  return {
    update: r,
    destroy() {
      n.destroy();
    }
  };
}
const ns = (e) => e instanceof Function ? e : () => e;
var Gm = /* @__PURE__ */ we("<title> </title>"), Jm = /* @__PURE__ */ we('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>'), Qm = /* @__PURE__ */ J('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1);
function _d(e, t) {
  ue(t, !0);
  let n = y(t, "position", 7, "bottom-right"), r = y(t, "ariaLabel", 7), o = y(t, "nodeStrokeColor", 7, "transparent"), i = y(t, "nodeColor", 7), s = y(t, "nodeClass", 7, ""), a = y(t, "nodeBorderRadius", 7, 5), l = y(t, "nodeStrokeWidth", 7, 2), c = y(t, "bgColor", 7), d = y(t, "maskColor", 7), p = y(t, "maskStrokeColor", 7), f = y(t, "maskStrokeWidth", 7), g = y(t, "width", 7, 200), h = y(t, "height", 7, 150), v = y(t, "pannable", 7, !0), C = y(t, "zoomable", 7, !0), w = y(t, "inversePan", 7), E = y(t, "zoomStep", 7), x = y(t, "class", 7), $ = /* @__PURE__ */ je(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "position",
    "ariaLabel",
    "nodeStrokeColor",
    "nodeColor",
    "nodeClass",
    "nodeBorderRadius",
    "nodeStrokeWidth",
    "bgColor",
    "maskColor",
    "maskStrokeColor",
    "maskStrokeWidth",
    "width",
    "height",
    "pannable",
    "zoomable",
    "inversePan",
    "zoomStep",
    "class"
  ]), k = /* @__PURE__ */ S(Qt), M = /* @__PURE__ */ S(() => u(k).ariaLabelConfig);
  const z = i() === void 0 ? void 0 : ns(i()), q = ns(o()), U = ns(s()), j = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  );
  let T = /* @__PURE__ */ S(() => `svelte-flow__minimap-desc-${u(k).flowId}`), _ = /* @__PURE__ */ S(() => ({
    x: -u(k).viewport.x / u(k).viewport.zoom,
    y: -u(k).viewport.y / u(k).viewport.zoom,
    width: u(k).width / u(k).viewport.zoom,
    height: u(k).height / u(k).viewport.zoom
  })), D = /* @__PURE__ */ S(() => u(k).nodeLookup.size > 0 ? bc(To(u(k).nodeLookup, { filter: (G) => !G.hidden }), u(_)) : u(_)), b = /* @__PURE__ */ S(() => u(D).width / g()), P = /* @__PURE__ */ S(() => u(D).height / h()), L = /* @__PURE__ */ S(() => Math.max(u(b), u(P))), A = /* @__PURE__ */ S(() => u(L) * g()), B = /* @__PURE__ */ S(() => u(L) * h()), O = /* @__PURE__ */ S(() => 5 * u(L)), Z = /* @__PURE__ */ S(() => u(D).x - (u(A) - u(D).width) / 2 - u(O)), F = /* @__PURE__ */ S(() => u(D).y - (u(B) - u(D).height) / 2 - u(O)), X = /* @__PURE__ */ S(() => u(A) + u(O) * 2), te = /* @__PURE__ */ S(() => u(B) + u(O) * 2);
  const W = () => u(L);
  var pe = Qm(), oe = fe(pe);
  const ge = /* @__PURE__ */ S(() => ["svelte-flow__minimap", x()]);
  return qp(oe, () => ({ "--xy-minimap-background-color-props": c() })), Oo(oe.lastChild, Fe(
    {
      get position() {
        return n();
      },
      get class() {
        return u(ge);
      },
      "data-testid": "svelte-flow__minimap"
    },
    () => $,
    {
      children: (G, ke) => {
        var ae = Ie(), se = fe(ae);
        {
          var ne = (me) => {
            var ee = Jm();
            let ye;
            var re = I(ee);
            {
              var Ee = (de) => {
                var Ce = Gm(), _e = I(Ce, !0);
                R(Ce), Le(() => {
                  $e(Ce, "id", u(T)), Ye(_e, r() ?? u(M)["minimap.ariaLabel"]);
                }), N(de, Ce);
              };
              le(re, (de) => {
                (r() ?? u(M)["minimap.ariaLabel"]) && de(Ee);
              });
            }
            var K = H(re);
            yt(K, 17, () => u(k).nodes, (de) => de.id, (de, Ce) => {
              var _e = Ie();
              const Re = /* @__PURE__ */ S(() => u(k).nodeLookup.get(u(Ce).id));
              var gt = fe(_e);
              {
                var wt = (Ve) => {
                  const Qe = /* @__PURE__ */ S(() => er(u(Re))), he = /* @__PURE__ */ S(() => z?.(u(Re))), We = /* @__PURE__ */ S(() => q(u(Re))), ct = /* @__PURE__ */ S(() => U(u(Re)));
                  Cd(Ve, Fe(
                    {
                      get x() {
                        return u(Re).internals.positionAbsolute.x;
                      },
                      get y() {
                        return u(Re).internals.positionAbsolute.y;
                      }
                    },
                    () => u(Qe),
                    {
                      get selected() {
                        return u(Re).selected;
                      },
                      get color() {
                        return u(he);
                      },
                      get borderRadius() {
                        return a();
                      },
                      get strokeColor() {
                        return u(We);
                      },
                      get strokeWidth() {
                        return l();
                      },
                      get shapeRendering() {
                        return j;
                      },
                      get class() {
                        return u(ct);
                      }
                    }
                  ));
                };
                le(gt, (Ve) => {
                  u(Re) && xc(u(Re)) && Ve(wt);
                });
              }
              N(de, _e);
            });
            var Je = H(K);
            R(ee), vt(ee, (de, Ce) => Um?.(de, Ce), () => ({
              store: u(k),
              panZoom: u(k).panZoom,
              getViewScale: W,
              translateExtent: u(k).translateExtent,
              width: u(k).width,
              height: u(k).height,
              inversePan: w(),
              zoomStep: E(),
              pannable: v(),
              zoomable: C()
            })), Le(
              (de) => {
                $e(ee, "width", g()), $e(ee, "height", h()), $e(ee, "viewBox", `${u(Z) ?? ""} ${u(F) ?? ""} ${u(X) ?? ""} ${u(te) ?? ""}`), $e(ee, "aria-labelledby", u(T)), ye = Ct(ee, "", ye, de), $e(Je, "d", `M${u(Z) - u(O)},${u(F) - u(O)}h${u(X) + u(O) * 2}v${u(te) + u(O) * 2}h${-u(X) - u(O) * 2}z
      M${u(_).x ?? ""},${u(_).y ?? ""}h${u(_).width ?? ""}v${u(_).height ?? ""}h${-u(_).width}z`);
              },
              [
                () => ({
                  "--xy-minimap-mask-background-color-props": d(),
                  "--xy-minimap-mask-stroke-color-props": p(),
                  "--xy-minimap-mask-stroke-width-props": f() ? f() * u(L) : void 0
                })
              ]
            ), N(me, ee);
          };
          le(se, (me) => {
            u(k).panZoom && me(ne);
          });
        }
        N(G, ae);
      },
      $$slots: { default: !0 }
    }
  )), R(oe), N(e, pe), ce({
    get position() {
      return n();
    },
    set position(G = "bottom-right") {
      n(G), m();
    },
    get ariaLabel() {
      return r();
    },
    set ariaLabel(G) {
      r(G), m();
    },
    get nodeStrokeColor() {
      return o();
    },
    set nodeStrokeColor(G = "transparent") {
      o(G), m();
    },
    get nodeColor() {
      return i();
    },
    set nodeColor(G) {
      i(G), m();
    },
    get nodeClass() {
      return s();
    },
    set nodeClass(G = "") {
      s(G), m();
    },
    get nodeBorderRadius() {
      return a();
    },
    set nodeBorderRadius(G = 5) {
      a(G), m();
    },
    get nodeStrokeWidth() {
      return l();
    },
    set nodeStrokeWidth(G = 2) {
      l(G), m();
    },
    get bgColor() {
      return c();
    },
    set bgColor(G) {
      c(G), m();
    },
    get maskColor() {
      return d();
    },
    set maskColor(G) {
      d(G), m();
    },
    get maskStrokeColor() {
      return p();
    },
    set maskStrokeColor(G) {
      p(G), m();
    },
    get maskStrokeWidth() {
      return f();
    },
    set maskStrokeWidth(G) {
      f(G), m();
    },
    get width() {
      return g();
    },
    set width(G = 200) {
      g(G), m();
    },
    get height() {
      return h();
    },
    set height(G = 150) {
      h(G), m();
    },
    get pannable() {
      return v();
    },
    set pannable(G = !0) {
      v(G), m();
    },
    get zoomable() {
      return C();
    },
    set zoomable(G = !0) {
      C(G), m();
    },
    get inversePan() {
      return w();
    },
    set inversePan(G) {
      w(G), m();
    },
    get zoomStep() {
      return E();
    },
    set zoomStep(G) {
      E(G), m();
    },
    get class() {
      return x();
    },
    set class(G) {
      x(G), m();
    }
  });
}
ie(
  _d,
  {
    position: {},
    ariaLabel: {},
    nodeStrokeColor: {},
    nodeColor: {},
    nodeClass: {},
    nodeBorderRadius: {},
    nodeStrokeWidth: {},
    bgColor: {},
    maskColor: {},
    maskStrokeColor: {},
    maskStrokeWidth: {},
    width: {},
    height: {},
    pannable: {},
    zoomable: {},
    inversePan: {},
    zoomStep: {},
    class: {}
  },
  [],
  [],
  !0
);
var e2 = /* @__PURE__ */ J("<div><!></div>");
function Sd(e, t) {
  ue(t, !0);
  let n = y(t, "nodeId", 7), r = y(t, "position", 23, () => xe.Top), o = y(t, "align", 7, "center"), i = y(t, "offset", 7, 10), s = y(t, "isVisible", 7), a = y(t, "children", 7), l = /* @__PURE__ */ je(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "nodeId",
    "position",
    "align",
    "offset",
    "isVisible",
    "children"
  ]);
  const c = Qt(), { getNodesBounds: d } = pt(), p = jn("svelteflow__node_id");
  let f = /* @__PURE__ */ S(() => (c.nodes, (Array.isArray(n()) ? n() : [n() ?? p]).reduce(
    ($, k) => {
      const M = c.nodeLookup.get(k);
      return M && $.push(M), $;
    },
    []
  ))), g = /* @__PURE__ */ S(() => {
    const $ = d(u(f));
    return $ ? g0($, c.viewport, r(), i(), o()) : "";
  }), h = /* @__PURE__ */ S(() => u(f).length === 0 ? 1 : Math.max(...u(f).map(($) => ($.internals.z || 5) + 1))), v = /* @__PURE__ */ S(() => c.nodes.filter(($) => $.selected).length), C = /* @__PURE__ */ S(() => typeof s() == "boolean" ? s() : u(f).length === 1 && u(f)[0].selected && u(v) === 1);
  var w = Ie(), E = fe(w);
  {
    var x = ($) => {
      var k = e2();
      ut(
        k,
        (z, q) => ({
          class: "svelte-flow__node-toolbar",
          "data-id": z,
          ...l,
          [on]: q
        }),
        [
          () => u(f).reduce((z, q) => `${z}${q.id} `, "").trim(),
          () => ({
            display: Bc().value ? "none" : void 0,
            position: "absolute",
            transform: u(g),
            "z-index": u(h)
          })
        ]
      );
      var M = I(k);
      rt(M, () => a() ?? ft), R(k), vt(k, (z, q) => Ic?.(z, q), () => "root"), N($, k);
    };
    le(E, ($) => {
      c.domNode && u(C) && u(f) && $(x);
    });
  }
  return N(e, w), ce({
    get nodeId() {
      return n();
    },
    set nodeId($) {
      n($), m();
    },
    get position() {
      return r();
    },
    set position($ = xe.Top) {
      r($), m();
    },
    get align() {
      return o();
    },
    set align($ = "center") {
      o($), m();
    },
    get offset() {
      return i();
    },
    set offset($ = 10) {
      i($), m();
    },
    get isVisible() {
      return s();
    },
    set isVisible($) {
      s($), m();
    },
    get children() {
      return a();
    },
    set children($) {
      a($), m();
    }
  });
}
ie(
  Sd,
  {
    nodeId: {},
    position: {},
    align: {},
    offset: {},
    isVisible: {},
    children: {}
  },
  [],
  [],
  !0
);
function Hn(e) {
  const t = /* @__PURE__ */ S(Qt), n = /* @__PURE__ */ S(() => u(t).nodes), r = /* @__PURE__ */ S(() => u(t).nodeLookup);
  let o = [], i = !0;
  const s = /* @__PURE__ */ S(() => {
    u(n);
    const a = [], l = Array.isArray(e), c = l ? e : [e];
    for (const d of c) {
      const p = u(r).get(d)?.internals.userNode;
      p && a.push({ id: p.id, type: p.type, data: p.data });
    }
    return (!C0(a, o) || i) && (o = a, i = !1), l ? o : o[0] ?? null;
  });
  return {
    get current() {
      return u(s);
    }
  };
}
const Dl = "tinyflow-component";
class t2 {
  options;
  rootEl;
  svelteFlowInstance;
  constructor(t) {
    if (typeof t.element != "string" && !(t.element instanceof Element))
      throw new Error("element must be a string or Element");
    this._setOptions(t), this._init();
  }
  _init() {
    if (typeof this.options.element == "string") {
      if (this.rootEl = document.querySelector(this.options.element), !this.rootEl)
        throw new Error(
          `element not found by document.querySelector('${this.options.element}')`
        );
    } else if (this.options.element instanceof Element)
      this.rootEl = this.options.element;
    else
      throw new Error("element must be a string or Element");
    const t = document.createElement(Dl);
    t.style.display = "block", t.style.width = "100%", t.style.height = "100%", t.classList.add("tf-theme-light"), t.options = this.options, t.onInit = (n) => {
      this.svelteFlowInstance = n;
    }, this.rootEl.appendChild(t);
  }
  _setOptions(t) {
    this.options = {
      ...t
    };
  }
  getOptions() {
    return this.options;
  }
  getData() {
    return this.svelteFlowInstance.toObject();
  }
  setData(t) {
    this.options.data = t;
    const n = document.createElement(Dl);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const n2 = () => {
  let e = /* @__PURE__ */ Me([]), t = /* @__PURE__ */ Me([]), n = /* @__PURE__ */ Me({ x: 250, y: 100, zoom: 1 });
  return {
    // nodes: nodesInternal,
    // edges: edgesInternal,
    // viewport,
    init: (r, o) => {
      Y(e, r), Y(t, o);
    },
    getNodes: () => u(e),
    setNodes: (r) => {
      Y(e, r);
    },
    getEdges: () => u(t),
    setEdges: (r) => {
      Y(t, r);
    },
    getViewport: () => u(n),
    setViewport: (r) => {
      Y(n, r);
    },
    getNode: (r) => u(e).find((o) => o.id === r),
    addNode: (r) => {
      Y(e, [...u(e), r]);
    },
    removeNode: (r) => {
      Y(e, u(e).filter((o) => o.id !== r));
    },
    updateNode: (r, o) => {
      Y(e, u(e).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateNodes: (r) => {
      Y(e, r(u(e)));
    },
    updateNodeData: (r, o) => {
      Y(e, u(e).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    },
    selectNodeOnly: (r) => {
      Y(e, u(e).map((o) => o.id === r ? { ...o, selected: !0 } : { ...o, selected: !1 }));
    },
    getEdge: (r) => u(t).find((o) => o.id === r),
    addEdge: (r) => {
      Y(t, [...u(t), r]);
    },
    removeEdge: (r) => {
      Y(t, u(t).filter((o) => o.id !== r));
    },
    updateEdge: (r, o) => {
      Y(t, u(t).map((i) => i.id === r ? { ...i, ...o } : i));
    },
    updateEdges: (r) => {
      Y(t, r(u(t)));
    },
    updateEdgeData: (r, o) => {
      Y(t, u(t).map((i) => i.id === r ? { ...i, data: { ...i.data, ...o } } : i));
    }
  };
}, Ue = n2();
var r2 = /* @__PURE__ */ J("<button><!></button>");
function De(e, t) {
  ue(t, !0);
  const n = y(t, "children", 7), r = y(t, "primary", 7), o = /* @__PURE__ */ je(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children",
    "primary"
  ]);
  var i = r2();
  ut(i, () => ({
    type: "button",
    ...o,
    class: `tf-btn ${r() ? "tf-btn-primary" : ""} nopan nodrag ${t.class ?? ""}`
  }));
  var s = I(i);
  return rt(s, () => n() ?? ft), R(i), N(e, i), ce({
    get children() {
      return n();
    },
    set children(a) {
      n(a), m();
    },
    get primary() {
      return r();
    },
    set primary(a) {
      r(a), m();
    }
  });
}
ie(De, { children: {}, primary: {} }, [], [], !0);
var o2 = /* @__PURE__ */ J("<input/>");
function Ed(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = o2();
  ln(r), ut(r, () => ({
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), N(e, r), ce();
}
ie(Ed, {}, [], [], !0);
var i2 = /* @__PURE__ */ J('<div><input type="hidden"/> <!> <!></div>');
const s2 = {
  hash: "svelte-1swt2gg",
  code: ".tf-chosen.svelte-1swt2gg {display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:5px;}"
};
function Pd(e, t) {
  ue(t, !0), qe(e, s2);
  const n = y(t, "placeholder", 7), r = y(t, "label", 7), o = y(t, "value", 7), i = y(t, "buttonText", 7, "选择..."), s = y(t, "onChosen", 7), a = /* @__PURE__ */ je(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "placeholder",
    "label",
    "value",
    "buttonText",
    "onChosen"
  ]);
  var l = i2();
  ut(
    l,
    () => ({
      ...a,
      class: `tf-chosen nopan nodrag ${t.class ?? ""}`
    }),
    void 0,
    "svelte-1swt2gg"
  );
  var c = I(l);
  ln(c);
  var d = H(c, 2);
  st(d, {
    get value() {
      return r();
    },
    get placeholder() {
      return n();
    },
    style: "flex-grow: 1;",
    disabled: !0
  });
  var p = H(d, 2);
  return De(p, {
    onclick: (f) => {
      s()?.(o(), r(), f);
    },
    style: "padding: 3px",
    children: (f, g) => {
      be();
      var h = Te();
      Le(() => Ye(h, i())), N(f, h);
    },
    $$slots: { default: !0 }
  }), R(l), Le(() => Wo(c, o())), N(e, l), ce({
    get placeholder() {
      return n();
    },
    set placeholder(f) {
      n(f), m();
    },
    get label() {
      return r();
    },
    set label(f) {
      r(f), m();
    },
    get value() {
      return o();
    },
    set value(f) {
      o(f), m();
    },
    get buttonText() {
      return i();
    },
    set buttonText(f = "选择...") {
      i(f), m();
    },
    get onChosen() {
      return s();
    },
    set onChosen(f) {
      s(f), m();
    }
  });
}
ie(
  Pd,
  {
    placeholder: {},
    label: {},
    value: {},
    buttonText: {},
    onChosen: {}
  },
  [],
  [],
  !0
);
var a2 = /* @__PURE__ */ J("<input/>");
function st(e, t) {
  ue(t, !0);
  const n = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = a2();
  ln(r), ut(r, () => ({
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), N(e, r), ce();
}
ie(st, {}, [], [], !0);
var l2 = /* @__PURE__ */ J("<textarea></textarea>");
function Ge(e, t) {
  ue(t, !0);
  const n = y(t, "value", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "value"]);
  var o = l2();
  return Sp(o), ut(o, () => ({
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), N(e, o), ce({
    get value() {
      return n();
    },
    set value(i) {
      n(i), m();
    }
  });
}
ie(Ge, { value: {} }, [], [], !0);
var u2 = /* @__PURE__ */ J('<div role="button"><!></div>'), c2 = /* @__PURE__ */ J("<div></div>");
function Ld(e, t) {
  const n = Xa(t, ["children", "$$slots", "$$events", "$$legacy", "$$host"]), r = Xa(n, ["items", "onChange", "activeIndex"]);
  ue(t, !1);
  let o = y(t, "items", 28, () => []), i = y(t, "onChange", 12, () => {
  }), s = y(t, "activeIndex", 12, 0);
  function a(c, d) {
    s(d), i()?.(c, d);
  }
  Hu();
  var l = c2();
  return ut(l, () => ({
    ...r,
    class: `tf-tabs ${Us(r), dt(() => r.class) ?? ""}`
  })), yt(l, 5, o, Nr, (c, d, p) => {
    var f = u2();
    $e(f, "tabindex", p), f.__click = () => a(u(d), p), f.__keydown = (C) => {
      (C.key === "Enter" || C.key === " ") && (C.preventDefault(), a(u(d), p));
    };
    var g = I(f);
    {
      var h = (C) => {
        var w = Te();
        Le(() => Ye(w, (u(d), dt(() => u(d).label)))), N(C, w);
      }, v = (C) => {
        var w = Ie(), E = fe(w);
        rt(E, () => (u(d), dt(() => u(d).label) ?? ft)), N(C, w);
      };
      le(g, (C) => {
        u(d), dt(() => typeof u(d).label == "string") ? C(h) : C(v, !1);
      });
    }
    R(f), Le(() => Nt(f, 1, `tf-tabs-item ${p === s() ? "active" : ""}`)), N(c, f);
  }), R(l), N(e, l), ce({
    get items() {
      return o();
    },
    set items(c) {
      o(c), m();
    },
    get onChange() {
      return i();
    },
    set onChange(c) {
      i(c), m();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(c) {
      s(c), m();
    }
  });
}
Vn(["click", "keydown"]);
ie(Ld, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var d2 = (e, t, n) => t(u(n)), f2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(u(n)));
}, p2 = /* @__PURE__ */ J('<span class="tf-collapse-item-title-icon"><!></span>'), g2 = /* @__PURE__ */ J('<div class="tf-collapse-item-description"><!></div>'), h2 = /* @__PURE__ */ J('<div class="tf-collapse-item-content"><!></div>'), v2 = /* @__PURE__ */ J('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), m2 = /* @__PURE__ */ J("<div></div>");
const y2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function Td(e, t) {
  ue(t, !0), qe(e, y2);
  let n = y(t, "items", 7), r = y(t, "onChange", 7), o = y(t, "activeKeys", 31, () => jt([]));
  function i(a) {
    o().includes(a.key) ? o(o().filter((l) => l !== a.key)) : (o().push(a.key), o(o())), r()?.(a, o());
  }
  var s = m2();
  return yt(s, 21, n, Nr, (a, l, c) => {
    var d = v2(), p = I(d);
    $e(p, "tabindex", c), p.__click = [d2, i, l], p.__keydown = [f2, i, l];
    var f = I(p);
    {
      var g = ($) => {
        var k = p2(), M = I(k);
        Zn(M, {
          get target() {
            return u(l).icon;
          }
        }), R(k), N($, k);
      };
      le(f, ($) => {
        u(l).icon && $(g);
      });
    }
    var h = H(f, 2);
    Zn(h, {
      get target() {
        return u(l).title;
      }
    });
    var v = H(h, 2);
    R(p);
    var C = H(p, 2);
    {
      var w = ($) => {
        var k = g2(), M = I(k);
        Zn(M, {
          get target() {
            return u(l).description;
          }
        }), R(k), N($, k);
      };
      le(C, ($) => {
        u(l).description && $(w);
      });
    }
    var E = H(C, 2);
    {
      var x = ($) => {
        var k = h2(), M = I(k);
        Zn(M, {
          get target() {
            return u(l).content;
          }
        }), R(k), N($, k);
      };
      le(E, ($) => {
        o().includes(u(l).key) && $(x);
      });
    }
    R(d), Le(($) => Nt(v, 1, `tf-collapse-item-title-arrow ${$ ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(u(l).key) ? "rotate-90" : ""
    ]), N(a, d);
  }), R(s), Le(() => {
    Ct(s, t.style), Nt(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), N(e, s), ce({
    get items() {
      return n();
    },
    set items(a) {
      n(a), m();
    },
    get onChange() {
      return r();
    },
    set onChange(a) {
      r(a), m();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(a = []) {
      o(a), m();
    }
  });
}
Vn(["click", "keydown"]);
ie(Td, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Zn(e, t) {
  ue(t, !0);
  let n = y(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = Ie(), o = fe(r);
  {
    var i = (a) => {
      var l = Ie(), c = fe(l);
      rt(c, () => n() ?? ft), N(a, l);
    }, s = (a) => {
      var l = Ie(), c = fe(l);
      Qs(c, n), N(a, l);
    };
    le(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return N(e, r), ce({
    get target() {
      return n();
    },
    set target(a) {
      n(a), m();
    }
  });
}
ie(Zn, { target: {} }, [], [], !0);
var w2 = (e, t, n) => t(u(n)), b2 = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), x2 = /* @__PURE__ */ J('<div class="tf-select-content-children"><!></div>'), $2 = /* @__PURE__ */ J('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), k2 = /* @__PURE__ */ J('<div class="tf-select-content nopan nodrag"><!></div>'), C2 = /* @__PURE__ */ J("<!> <!>", 1), _2 = /* @__PURE__ */ J('<div class="tf-select-input-placeholder"> </div>'), S2 = /* @__PURE__ */ J('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), E2 = /* @__PURE__ */ J("<div><!></div>");
function kt(e, t) {
  ue(t, !0);
  const n = (w, E = ft) => {
    var x = Ie(), $ = fe(x);
    yt($, 19, E, (k, M) => `${M}_${k.value}`, (k, M) => {
      var z = $2(), q = fe(z);
      q.__click = [w2, h, M];
      var U = I(q), j = I(U);
      {
        var T = (P) => {
          var L = b2();
          N(P, L);
        };
        le(j, (P) => {
          u(M).children && u(M).children.length > 0 && P(T);
        });
      }
      R(U);
      var _ = H(U, 2);
      Zn(_, {
        get target() {
          return u(M).label;
        }
      }), R(q);
      var D = H(q, 2);
      {
        var b = (P) => {
          var L = x2(), A = I(L);
          n(A, () => u(M).children), R(L), N(P, L);
        };
        le(D, (P) => {
          u(M).children && u(M).children.length > 0 && (a() || c().includes(u(M).value)) && P(b);
        });
      }
      N(k, z);
    }), N(w, x);
  };
  let r = y(t, "items", 7), o = y(t, "onSelect", 7), i = y(t, "value", 23, () => []), s = y(t, "defaultValue", 23, () => []), a = y(t, "expandAll", 7, !0), l = y(t, "multiple", 7, !1), c = y(t, "expandValue", 23, () => []), d = y(t, "placeholder", 7), p = /* @__PURE__ */ je(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "items",
    "onSelect",
    "value",
    "defaultValue",
    "expandAll",
    "multiple",
    "expandValue",
    "placeholder"
  ]), f = /* @__PURE__ */ S(() => {
    const w = [], E = (x) => {
      for (let $ of x)
        i().length > 0 ? i().includes($.value) && w.push($) : s().includes($.value) && w.push($), $.children && $.children.length > 0 && E($.children);
    };
    return E(r()), w;
  }), g;
  function h(w) {
    g?.hide(), o()?.(w);
  }
  var v = E2();
  ut(v, () => ({ ...p, class: `tf-select ${p.class ?? ""}` }));
  var C = I(v);
  return Rt(
    mr(C, {
      floating: (w) => {
        var E = k2(), x = I(E);
        n(x, r), R(E), N(w, E);
      },
      children: (w, E) => {
        var x = S2();
        ut(x, () => ({ class: "tf-select-input nopan nodrag", ...p }));
        var $ = I(x);
        yt(
          $,
          23,
          () => u(f),
          (k, M) => `${M}_${k.value}`,
          (k, M, z) => {
            var q = Ie(), U = fe(q);
            {
              var j = (_) => {
                var D = Ie(), b = fe(D);
                {
                  var P = (L) => {
                    Zn(L, {
                      get target() {
                        return u(M).label;
                      }
                    });
                  };
                  le(b, (L) => {
                    u(z) === 0 && L(P);
                  });
                }
                N(_, D);
              }, T = (_) => {
                var D = C2(), b = fe(D);
                Zn(b, {
                  get target() {
                    return u(M).label;
                  }
                });
                var P = H(b, 2);
                {
                  var L = (A) => {
                    var B = Te(",");
                    N(A, B);
                  };
                  le(P, (A) => {
                    u(z) < u(f).length - 1 && A(L);
                  });
                }
                N(_, D);
              };
              le(U, (_) => {
                l() ? _(T, !1) : _(j);
              });
            }
            N(k, q);
          },
          (k) => {
            var M = _2(), z = I(M, !0);
            R(M), Le(() => Ye(z, d())), N(k, M);
          }
        ), R($), be(2), R(x), N(w, x);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (w) => g = w,
    () => g
  ), R(v), N(e, v), ce({
    get items() {
      return r();
    },
    set items(w) {
      r(w), m();
    },
    get onSelect() {
      return o();
    },
    set onSelect(w) {
      o(w), m();
    },
    get value() {
      return i();
    },
    set value(w = []) {
      i(w), m();
    },
    get defaultValue() {
      return s();
    },
    set defaultValue(w = []) {
      s(w), m();
    },
    get expandAll() {
      return a();
    },
    set expandAll(w = !0) {
      a(w), m();
    },
    get multiple() {
      return l();
    },
    set multiple(w = !1) {
      l(w), m();
    },
    get expandValue() {
      return c();
    },
    set expandValue(w = []) {
      c(w), m();
    },
    get placeholder() {
      return d();
    },
    set placeholder(w) {
      d(w), m();
    }
  });
}
Vn(["click"]);
ie(
  kt,
  {
    items: {},
    onSelect: {},
    value: {},
    defaultValue: {},
    expandAll: {},
    multiple: {},
    expandValue: {},
    placeholder: {}
  },
  [],
  [],
  !0
);
const yo = Math.min, Er = Math.max, wi = Math.round, dn = (e) => ({
  x: e,
  y: e
}), P2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, L2 = {
  start: "end",
  end: "start"
};
function Ss(e, t, n) {
  return Er(e, yo(t, n));
}
function Do(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pr(e) {
  return e.split("-")[0];
}
function Vo(e) {
  return e.split("-")[1];
}
function Md(e) {
  return e === "x" ? "y" : "x";
}
function wa(e) {
  return e === "y" ? "height" : "width";
}
const T2 = /* @__PURE__ */ new Set(["top", "bottom"]);
function Kn(e) {
  return T2.has(pr(e)) ? "y" : "x";
}
function ba(e) {
  return Md(Kn(e));
}
function M2(e, t, n) {
  n === void 0 && (n = !1);
  const r = Vo(e), o = ba(e), i = wa(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = bi(s)), [s, bi(s)];
}
function N2(e) {
  const t = bi(e);
  return [Es(e), t, Es(t)];
}
function Es(e) {
  return e.replace(/start|end/g, (t) => L2[t]);
}
const Vl = ["left", "right"], Al = ["right", "left"], O2 = ["top", "bottom"], D2 = ["bottom", "top"];
function V2(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Al : Vl : t ? Vl : Al;
    case "left":
    case "right":
      return t ? O2 : D2;
    default:
      return [];
  }
}
function A2(e, t, n, r) {
  const o = Vo(e);
  let i = V2(pr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Es)))), i;
}
function bi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => P2[t]);
}
function H2(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Nd(e) {
  return typeof e != "number" ? H2(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function xi(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Hl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Kn(t), s = ba(t), a = wa(s), l = pr(t), c = i === "y", d = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let g;
  switch (l) {
    case "top":
      g = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (Vo(t)) {
    case "start":
      g[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      g[s] += f * (n && c ? -1 : 1);
      break;
  }
  return g;
}
const z2 = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: p
  } = Hl(c, r, l), f = r, g = {}, h = 0;
  for (let v = 0; v < a.length; v++) {
    const {
      name: C,
      fn: w
    } = a[v], {
      x: E,
      y: x,
      data: $,
      reset: k
    } = await w({
      x: d,
      y: p,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: g,
      rects: c,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = E ?? d, p = x ?? p, g = {
      ...g,
      [C]: {
        ...g[C],
        ...$
      }
    }, k && h <= 50 && (h++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (c = k.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : k.rects), {
      x: d,
      y: p
    } = Hl(c, f, l)), v = -1);
  }
  return {
    x: d,
    y: p,
    placement: f,
    strategy: o,
    middlewareData: g
  };
};
async function Od(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: a,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: p = "floating",
    altBoundary: f = !1,
    padding: g = 0
  } = Do(t, e), h = Nd(g), v = a[f ? p === "floating" ? "reference" : "floating" : p], C = xi(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n ? v : v.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), w = p === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, E = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), x = await (i.isElement == null ? void 0 : i.isElement(E)) ? await (i.getScale == null ? void 0 : i.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, $ = xi(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: E,
    strategy: l
  }) : w);
  return {
    top: (C.top - $.top + h.top) / x.y,
    bottom: ($.bottom - C.bottom + h.bottom) / x.y,
    left: (C.left - $.left + h.left) / x.x,
    right: ($.right - C.right + h.right) / x.x
  };
}
const R2 = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: a,
      middlewareData: l
    } = t, {
      element: c,
      padding: d = 0
    } = Do(e, t) || {};
    if (c == null)
      return {};
    const p = Nd(d), f = {
      x: n,
      y: r
    }, g = ba(o), h = wa(g), v = await s.getDimensions(c), C = g === "y", w = C ? "top" : "left", E = C ? "bottom" : "right", x = C ? "clientHeight" : "clientWidth", $ = i.reference[h] + i.reference[g] - f[g] - i.floating[h], k = f[g] - i.reference[g], M = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let z = M ? M[x] : 0;
    (!z || !await (s.isElement == null ? void 0 : s.isElement(M))) && (z = a.floating[x] || i.floating[h]);
    const q = $ / 2 - k / 2, U = z / 2 - v[h] / 2 - 1, j = yo(p[w], U), T = yo(p[E], U), _ = j, D = z - v[h] - T, b = z / 2 - v[h] / 2 + q, P = Ss(_, b, D), L = !l.arrow && Vo(o) != null && b !== P && i.reference[h] / 2 - (b < _ ? j : T) - v[h] / 2 < 0, A = L ? b < _ ? b - _ : b - D : 0;
    return {
      [g]: f[g] + A,
      data: {
        [g]: P,
        centerOffset: b - P - A,
        ...L && {
          alignmentOffset: A
        }
      },
      reset: L
    };
  }
}), I2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: c
      } = t, {
        mainAxis: d = !0,
        crossAxis: p = !0,
        fallbackPlacements: f,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: v = !0,
        ...C
      } = Do(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = pr(o), E = Kn(a), x = pr(a) === a, $ = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), k = f || (x || !v ? [bi(a)] : N2(a)), M = h !== "none";
      !f && M && k.push(...A2(a, v, h, $));
      const z = [a, ...k], q = await Od(t, C), U = [];
      let j = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && U.push(q[w]), p) {
        const b = M2(o, s, $);
        U.push(q[b[0]], q[b[1]]);
      }
      if (j = [...j, {
        placement: o,
        overflows: U
      }], !U.every((b) => b <= 0)) {
        var T, _;
        const b = (((T = i.flip) == null ? void 0 : T.index) || 0) + 1, P = z[b];
        if (P && (!(p === "alignment" && E !== Kn(P)) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        j.every((A) => A.overflows[0] > 0 && Kn(A.placement) === E)))
          return {
            data: {
              index: b,
              overflows: j
            },
            reset: {
              placement: P
            }
          };
        let L = (_ = j.filter((A) => A.overflows[0] <= 0).sort((A, B) => A.overflows[1] - B.overflows[1])[0]) == null ? void 0 : _.placement;
        if (!L)
          switch (g) {
            case "bestFit": {
              var D;
              const A = (D = j.filter((B) => {
                if (M) {
                  const O = Kn(B.placement);
                  return O === E || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  O === "y";
                }
                return !0;
              }).map((B) => [B.placement, B.overflows.filter((O) => O > 0).reduce((O, Z) => O + Z, 0)]).sort((B, O) => B[1] - O[1])[0]) == null ? void 0 : D[0];
              A && (L = A);
              break;
            }
            case "initialPlacement":
              L = a;
              break;
          }
        if (o !== L)
          return {
            reset: {
              placement: L
            }
          };
      }
      return {};
    }
  };
}, B2 = /* @__PURE__ */ new Set(["left", "top"]);
async function q2(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = pr(n), a = Vo(n), l = Kn(n) === "y", c = B2.has(s) ? -1 : 1, d = i && l ? -1 : 1, p = Do(t, e);
  let {
    mainAxis: f,
    crossAxis: g,
    alignmentAxis: h
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return a && typeof h == "number" && (g = a === "end" ? h * -1 : h), l ? {
    x: g * d,
    y: f * c
  } : {
    x: f * c,
    y: g * d
  };
}
const Z2 = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: a
      } = t, l = await q2(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, K2 = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (C) => {
            let {
              x: w,
              y: E
            } = C;
            return {
              x: w,
              y: E
            };
          }
        },
        ...l
      } = Do(e, t), c = {
        x: n,
        y: r
      }, d = await Od(t, l), p = Kn(pr(o)), f = Md(p);
      let g = c[f], h = c[p];
      if (i) {
        const C = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", E = g + d[C], x = g - d[w];
        g = Ss(E, g, x);
      }
      if (s) {
        const C = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", E = h + d[C], x = h - d[w];
        h = Ss(E, h, x);
      }
      const v = a.fn({
        ...t,
        [f]: g,
        [p]: h
      });
      return {
        ...v,
        data: {
          x: v.x - n,
          y: v.y - r,
          enabled: {
            [f]: i,
            [p]: s
          }
        }
      };
    }
  };
};
function Ri() {
  return typeof window < "u";
}
function Zr(e) {
  return Dd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function At(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function zn(e) {
  var t;
  return (t = (Dd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Dd(e) {
  return Ri() ? e instanceof Node || e instanceof At(e).Node : !1;
}
function Ut(e) {
  return Ri() ? e instanceof Element || e instanceof At(e).Element : !1;
}
function hn(e) {
  return Ri() ? e instanceof HTMLElement || e instanceof At(e).HTMLElement : !1;
}
function zl(e) {
  return !Ri() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof At(e).ShadowRoot;
}
const j2 = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ao(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Gt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !j2.has(o);
}
const Y2 = /* @__PURE__ */ new Set(["table", "td", "th"]);
function F2(e) {
  return Y2.has(Zr(e));
}
const W2 = [":popover-open", ":modal"];
function Ii(e) {
  return W2.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const X2 = ["transform", "translate", "scale", "rotate", "perspective"], U2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"], G2 = ["paint", "layout", "strict", "content"];
function xa(e) {
  const t = $a(), n = Ut(e) ? Gt(e) : e;
  return X2.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || U2.some((r) => (n.willChange || "").includes(r)) || G2.some((r) => (n.contain || "").includes(r));
}
function J2(e) {
  let t = Un(e);
  for (; hn(t) && !Rr(t); ) {
    if (xa(t))
      return t;
    if (Ii(t))
      return null;
    t = Un(t);
  }
  return null;
}
function $a() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Q2 = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Rr(e) {
  return Q2.has(Zr(e));
}
function Gt(e) {
  return At(e).getComputedStyle(e);
}
function Bi(e) {
  return Ut(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Un(e) {
  if (Zr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    zl(e) && e.host || // Fallback.
    zn(e)
  );
  return zl(t) ? t.host : t;
}
function Vd(e) {
  const t = Un(e);
  return Rr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : hn(t) && Ao(t) ? t : Vd(t);
}
function Ad(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = Vd(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = At(o);
  return i ? (Ps(s), t.concat(s, s.visualViewport || [], Ao(o) ? o : [], [])) : t.concat(o, Ad(o, []));
}
function Ps(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Hd(e) {
  const t = Gt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = hn(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = wi(n) !== i || wi(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function zd(e) {
  return Ut(e) ? e : e.contextElement;
}
function Pr(e) {
  const t = zd(e);
  if (!hn(t))
    return dn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Hd(t);
  let s = (i ? wi(n.width) : n.width) / r, a = (i ? wi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const ey = /* @__PURE__ */ dn(0);
function Rd(e) {
  const t = At(e);
  return !$a() || !t.visualViewport ? ey : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ty(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== At(e) ? !1 : t;
}
function wo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = zd(e);
  let s = dn(1);
  t && (r ? Ut(r) && (s = Pr(r)) : s = Pr(e));
  const a = ty(i, n, r) ? Rd(i) : dn(0);
  let l = (o.left + a.x) / s.x, c = (o.top + a.y) / s.y, d = o.width / s.x, p = o.height / s.y;
  if (i) {
    const f = At(i), g = r && Ut(r) ? At(r) : r;
    let h = f, v = Ps(h);
    for (; v && r && g !== h; ) {
      const C = Pr(v), w = v.getBoundingClientRect(), E = Gt(v), x = w.left + (v.clientLeft + parseFloat(E.paddingLeft)) * C.x, $ = w.top + (v.clientTop + parseFloat(E.paddingTop)) * C.y;
      l *= C.x, c *= C.y, d *= C.x, p *= C.y, l += x, c += $, h = At(v), v = Ps(h);
    }
  }
  return xi({
    width: d,
    height: p,
    x: l,
    y: c
  });
}
function ka(e, t) {
  const n = Bi(e).scrollLeft;
  return t ? t.left + n : wo(zn(e)).left + n;
}
function Id(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    ka(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function ny(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = zn(r), a = t ? Ii(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = dn(1);
  const d = dn(0), p = hn(r);
  if ((p || !p && !i) && ((Zr(r) !== "body" || Ao(s)) && (l = Bi(r)), hn(r))) {
    const g = wo(r);
    c = Pr(r), d.x = g.x + r.clientLeft, d.y = g.y + r.clientTop;
  }
  const f = s && !p && !i ? Id(s, l, !0) : dn(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + d.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + d.y + f.y
  };
}
function ry(e) {
  return Array.from(e.getClientRects());
}
function oy(e) {
  const t = zn(e), n = Bi(e), r = e.ownerDocument.body, o = Er(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Er(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ka(e);
  const a = -n.scrollTop;
  return Gt(r).direction === "rtl" && (s += Er(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function iy(e, t) {
  const n = At(e), r = zn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const c = $a();
    (!c || c && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
const sy = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function ay(e, t) {
  const n = wo(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = hn(e) ? Pr(e) : dn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, c = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: c
  };
}
function Rl(e, t, n) {
  let r;
  if (t === "viewport")
    r = iy(e, n);
  else if (t === "document")
    r = oy(zn(e));
  else if (Ut(t))
    r = ay(t, n);
  else {
    const o = Rd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return xi(r);
}
function Bd(e, t) {
  const n = Un(e);
  return n === t || !Ut(n) || Rr(n) ? !1 : Gt(n).position === "fixed" || Bd(n, t);
}
function ly(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ad(e, []).filter((a) => Ut(a) && Zr(a) !== "body"), o = null;
  const i = Gt(e).position === "fixed";
  let s = i ? Un(e) : e;
  for (; Ut(s) && !Rr(s); ) {
    const a = Gt(s), l = xa(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && o && sy.has(o.position) || Ao(s) && !l && Bd(e, s)) ? r = r.filter((c) => c !== s) : o = a, s = Un(s);
  }
  return t.set(e, r), r;
}
function uy(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? Ii(t) ? [] : ly(t, this._c) : [].concat(n), r], s = i[0], a = i.reduce((l, c) => {
    const d = Rl(t, c, o);
    return l.top = Er(d.top, l.top), l.right = yo(d.right, l.right), l.bottom = yo(d.bottom, l.bottom), l.left = Er(d.left, l.left), l;
  }, Rl(t, s, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function cy(e) {
  const {
    width: t,
    height: n
  } = Hd(e);
  return {
    width: t,
    height: n
  };
}
function dy(e, t, n) {
  const r = hn(t), o = zn(t), i = n === "fixed", s = wo(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = dn(0);
  function c() {
    l.x = ka(o);
  }
  if (r || !r && !i)
    if ((Zr(t) !== "body" || Ao(o)) && (a = Bi(t)), r) {
      const g = wo(t, !0, i, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else o && c();
  i && !r && o && c();
  const d = o && !r && !i ? Id(o, a) : dn(0), p = s.left + a.scrollLeft - l.x - d.x, f = s.top + a.scrollTop - l.y - d.y;
  return {
    x: p,
    y: f,
    width: s.width,
    height: s.height
  };
}
function rs(e) {
  return Gt(e).position === "static";
}
function Il(e, t) {
  if (!hn(e) || Gt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return zn(e) === n && (n = n.ownerDocument.body), n;
}
function qd(e, t) {
  const n = At(e);
  if (Ii(e))
    return n;
  if (!hn(e)) {
    let o = Un(e);
    for (; o && !Rr(o); ) {
      if (Ut(o) && !rs(o))
        return o;
      o = Un(o);
    }
    return n;
  }
  let r = Il(e, t);
  for (; r && F2(r) && rs(r); )
    r = Il(r, t);
  return r && Rr(r) && rs(r) && !xa(r) ? n : r || J2(e) || n;
}
const fy = async function(e) {
  const t = this.getOffsetParent || qd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: dy(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function py(e) {
  return Gt(e).direction === "rtl";
}
const gy = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ny,
  getDocumentElement: zn,
  getClippingRect: uy,
  getOffsetParent: qd,
  getElementRects: fy,
  getClientRects: ry,
  getDimensions: cy,
  getScale: Pr,
  isElement: Ut,
  isRTL: py
}, hy = Z2, vy = K2, my = I2, yy = R2, wy = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: gy,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return z2(e, t, {
    ...o,
    platform: i
  });
}, by = ({
  trigger: e,
  triggerEvent: t,
  floatContent: n,
  placement: r = "bottom",
  offsetOptions: o,
  flipOptions: i,
  shiftOptions: s,
  interactive: a,
  showArrow: l
}) => {
  if (typeof e == "string") {
    const w = document.querySelector(e);
    if (w)
      e = w;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let c;
  if (typeof n == "string") {
    const w = document.querySelector(n);
    if (w)
      c = w;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    c = n;
  let d;
  l && (d = document.createElement("div"), d.style.position = "absolute", d.style.backgroundColor = "#222", d.style.width = "8px", d.style.height = "8px", d.style.transform = "rotate(45deg)", d.style.display = "none", c.firstElementChild.before(d));
  function p() {
    wy(e, c, {
      placement: r,
      middleware: [
        hy(o),
        // 手动偏移配置
        my(i),
        //自动翻转
        vy(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [yy({ element: d })] : []
      ]
    }).then(({ x: w, y: E, placement: x, middlewareData: $ }) => {
      if (Object.assign(c.style, {
        left: `${w}px`,
        top: `${E}px`
      }), l) {
        const { x: k, y: M } = $.arrow, z = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[x.split("-")[0]];
        Object.assign(d.style, {
          zIndex: -1,
          left: k != null ? `${k}px` : "",
          top: M != null ? `${M}px` : "",
          right: "",
          bottom: "",
          [z]: "2px"
        });
      }
    });
  }
  let f = !1;
  function g() {
    c.style.display = "block", c.style.visibility = "block", c.style.position = "absolute", l && (d.style.display = "block"), f = !0, p();
  }
  function h() {
    c.style.display = "none", l && (d.style.display = "none"), f = !1;
  }
  function v(w) {
    w.stopPropagation(), f ? h() : g();
  }
  function C(w) {
    c.contains(w.target) || h();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((w) => {
    e.addEventListener(w, v);
  }), document.addEventListener("click", C), {
    destroy() {
      t.forEach((w) => {
        e.removeEventListener(w, v);
      }), document.removeEventListener("click", C);
    },
    hide() {
      h();
    },
    isVisible() {
      return f;
    }
  };
};
var xy = /* @__PURE__ */ J('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function mr(e, t) {
  ue(t, !0);
  const n = y(t, "children", 7), r = y(t, "floating", 7), o = y(t, "placement", 7, "bottom");
  let i, s, a;
  Qn(() => (a = by({
    trigger: i,
    floatContent: s,
    interactive: !0,
    placement: o()
  }), () => {
    a.destroy();
  }));
  function l() {
    a.hide();
  }
  var c = xy(), d = I(c), p = I(d);
  rt(p, n), R(d), Rt(d, (h) => i = h, () => i);
  var f = H(d, 2), g = I(f);
  return rt(g, r), R(f), Rt(f, (h) => s = h, () => s), R(c), N(e, c), ce({
    hide: l,
    get children() {
      return n();
    },
    set children(h) {
      n(h), m();
    },
    get floating() {
      return r();
    },
    set floating(h) {
      r(h), m();
    },
    get placement() {
      return o();
    },
    set placement(h = "bottom") {
      o(h), m();
    }
  });
}
ie(mr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function He(e, t) {
  ue(t, !0);
  const n = y(t, "children", 7), r = y(t, "level", 7, 1), o = y(t, "mt", 7), i = y(t, "mb", 7);
  var s = Ie(), a = fe(s);
  return Yp(a, () => `h${r()}`, !1, (l, c) => {
    ut(l, () => ({
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = Ie(), p = fe(d);
    rt(p, () => n() ?? ft), N(c, d);
  }), N(e, s), ce({
    get children() {
      return n();
    },
    set children(l) {
      n(l), m();
    },
    get level() {
      return r();
    },
    set level(l = 1) {
      r(l), m();
    },
    get mt() {
      return o();
    },
    set mt(l) {
      o(l), m();
    },
    get mb() {
      return i();
    },
    set mb(l) {
      i(l), m();
    }
  });
}
ie(He, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var $y = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const ky = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function Ho(e, t) {
  ue(t, !0), qe(e, ky);
  const n = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  De(e, Fe(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = $y();
      N(r, i);
    },
    $$slots: { default: !0 }
  })), ce();
}
ie(Ho, {}, [], [], !0);
const Cy = () => ({ deleteNode: (e) => {
  Ue.removeNode(e), Ue.updateEdges((t) => t.filter((n) => n.source !== e && n.target !== e));
} }), gr = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, _y = () => ({ copyNode: (e) => {
  const t = Ue.getNode(e);
  if (t) {
    const n = gr(), r = {
      ...t,
      id: n,
      position: { x: t.position.x + 50, y: t.position.y + 50 }
    };
    Ue.updateNodes((o) => [...o.map((i) => ({ ...i, selected: !1 })), r]);
  }
} }), ot = () => jn("svelteflow__node_id"), Gn = () => jn("tinyflow_options");
var Sy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), Ey = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), Py = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), Ly = /* @__PURE__ */ J('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), Ty = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, My = (e, t, n) => {
  const r = e.target.checked;
  t(n, { loopEnable: r });
}, Ny = /* @__PURE__ */ J('<div class="input-item svelte-1jesvb7">循环间隔时间（单位：毫秒）： <!></div> <div class="input-item svelte-1jesvb7">最大循环次数（0 表示不限制）： <!></div> <div class="input-item svelte-1jesvb7">退出条件： <!></div>', 1), Oy = /* @__PURE__ */ J('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"/></label> <label class="input-item-inline svelte-1jesvb7"><span>循环执行：</span> <input type="checkbox"/></label> <!></div>'), Dy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), Vy = /* @__PURE__ */ J('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), Ay = /* @__PURE__ */ J('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const Hy = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function Yt(e, t) {
  ue(t, !0), qe(e, Hy);
  const n = y(t, "data", 7), r = y(t, "id", 7, ""), o = y(t, "icon", 7), i = y(t, "handle", 7), s = y(t, "children", 7), a = y(t, "allowExecute", 7, !0), l = y(t, "allowCopy", 7, !0), c = y(t, "allowDelete", 7, !0), d = y(t, "allowSetting", 7, !0), p = y(t, "allowSettingOfCondition", 7, !0), f = y(t, "showSourceHandle", 7, !0), g = y(t, "showTargetHandle", 7, !0), h = y(t, "onCollapse", 7);
  let v = n().expand ? ["key"] : [];
  const { updateNodeData: C, getNode: w } = pt(), E = /* @__PURE__ */ S(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: x } = Cy(), { copyNode: $ } = _y(), k = Gn(), M = () => {
    k.onNodeExecute?.(w(r()));
  };
  let z = ot();
  var q = Ay(), U = fe(q);
  {
    var j = (O) => {
      Sd(O, {
        get position() {
          return xe.Top;
        },
        align: "end",
        children: (Z, F) => {
          var X = Vy(), te = I(X);
          {
            var W = (se) => {
              De(se, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  x(r());
                },
                children: (ne, me) => {
                  var ee = Sy();
                  N(ne, ee);
                },
                $$slots: { default: !0 }
              });
            };
            le(te, (se) => {
              c() && se(W);
            });
          }
          var pe = H(te, 2);
          {
            var oe = (se) => {
              De(se, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  $(r());
                },
                children: (ne, me) => {
                  var ee = Ey();
                  N(ne, ee);
                },
                $$slots: { default: !0 }
              });
            };
            le(pe, (se) => {
              l() && se(oe);
            });
          }
          var ge = H(pe, 2);
          {
            var G = (se) => {
              De(se, {
                class: "tf-node-toolbar-item",
                onclick: M,
                children: (ne, me) => {
                  var ee = Py();
                  N(ne, ee);
                },
                $$slots: { default: !0 }
              });
            };
            le(ge, (se) => {
              a() && se(G);
            });
          }
          var ke = H(ge, 2);
          {
            var ae = (se) => {
              mr(se, {
                placement: "bottom",
                floating: (ne) => {
                  var me = Oy(), ee = I(me), ye = H(I(ee));
                  st(ye, {
                    style: "width: 100%;",
                    onchange: (Ve) => {
                      const Qe = Ve.target.value;
                      C(z, { title: Qe });
                    },
                    get value() {
                      return n().title;
                    }
                  }), R(ee);
                  var re = H(ee, 2), Ee = H(I(re));
                  Ge(Ee, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Ve) => {
                      const Qe = Ve.target.value;
                      C(z, { description: Qe });
                    },
                    get value() {
                      return n().description;
                    }
                  }), R(re);
                  var K = H(re, 2);
                  {
                    var Je = (Ve) => {
                      var Qe = Ly(), he = H(I(Qe));
                      Ge(he, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (We) => {
                          const ct = We.target.value;
                          C(z, { condition: ct });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), R(Qe), N(Ve, Qe);
                    };
                    le(K, (Ve) => {
                      p() && Ve(Je);
                    });
                  }
                  var de = H(K, 2), Ce = H(I(de), 2);
                  ln(Ce), Ce.__change = [Ty, C, z], R(de);
                  var _e = H(de, 2), Re = H(I(_e), 2);
                  ln(Re), Re.__change = [My, C, z], R(_e);
                  var gt = H(_e, 2);
                  {
                    var wt = (Ve) => {
                      var Qe = Ny(), he = fe(Qe), We = H(I(he));
                      const ct = /* @__PURE__ */ S(() => n().loopIntervalMs || "1000");
                      Ge(We, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (yn) => {
                          const wn = yn.target.value;
                          C(z, { loopIntervalMs: wn });
                        },
                        get value() {
                          return u(ct);
                        }
                      }), R(he);
                      var et = H(he, 2), _t = H(I(et));
                      const at = /* @__PURE__ */ S(() => n().maxLoopCount || "0");
                      Ge(_t, {
                        rows: 1,
                        style: "width: 100%;",
                        onchange: (yn) => {
                          const wn = yn.target.value;
                          C(z, { maxLoopCount: wn });
                        },
                        get value() {
                          return u(at);
                        }
                      }), R(et);
                      var Bt = H(et, 2), Kr = H(I(Bt));
                      Ge(Kr, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (yn) => {
                          const wn = yn.target.value;
                          C(z, { loopBreakCondition: wn });
                        },
                        get value() {
                          return n().loopBreakCondition;
                        }
                      }), R(Bt), N(Ve, Qe);
                    };
                    le(gt, (Ve) => {
                      n().loopEnable && Ve(wt);
                    });
                  }
                  R(me), Le(() => {
                    gs(Ce, !!n().async), gs(Re, !!n().loopEnable);
                  }), N(ne, me);
                },
                children: (ne, me) => {
                  De(ne, {
                    class: "tf-node-toolbar-item",
                    children: (ee, ye) => {
                      var re = Dy();
                      N(ee, re);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            le(ke, (se) => {
              d() && se(ae);
            });
          }
          R(X), N(Z, X);
        },
        $$slots: { default: !0 }
      });
    };
    le(U, (O) => {
      (a() || l() || c()) && O(j);
    });
  }
  var T = H(U, 2), _ = H(I(T), 2), D = I(_);
  Td(D, {
    get items() {
      return u(E);
    },
    get activeKeys() {
      return v;
    },
    onChange: (O, Z) => {
      C(r(), { expand: Z?.includes("key") }), h()?.(Z?.includes("key") ? "key" : "");
    }
  }), R(_), R(T);
  var b = H(T, 2);
  {
    var P = (O) => {
      Xn(O, {
        type: "target",
        get position() {
          return xe.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    le(b, (O) => {
      g() && O(P);
    });
  }
  var L = H(b, 2);
  {
    var A = (O) => {
      Xn(O, {
        type: "source",
        get position() {
          return xe.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    le(L, (O) => {
      f() && O(A);
    });
  }
  var B = H(L, 2);
  return rt(B, () => i() ?? ft), N(e, q), ce({
    get data() {
      return n();
    },
    set data(O) {
      n(O), m();
    },
    get id() {
      return r();
    },
    set id(O = "") {
      r(O), m();
    },
    get icon() {
      return o();
    },
    set icon(O) {
      o(O), m();
    },
    get handle() {
      return i();
    },
    set handle(O) {
      i(O), m();
    },
    get children() {
      return s();
    },
    set children(O) {
      s(O), m();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(O = !0) {
      a(O), m();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(O = !0) {
      l(O), m();
    },
    get allowDelete() {
      return c();
    },
    set allowDelete(O = !0) {
      c(O), m();
    },
    get allowSetting() {
      return d();
    },
    set allowSetting(O = !0) {
      d(O), m();
    },
    get allowSettingOfCondition() {
      return p();
    },
    set allowSettingOfCondition(O = !0) {
      p(O), m();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(O = !0) {
      f(O), m();
    },
    get showTargetHandle() {
      return g();
    },
    set showTargetHandle(O = !0) {
      g(O), m();
    },
    get onCollapse() {
      return h();
    },
    set onCollapse(O) {
      h(O), m();
    }
  });
}
Vn(["change"]);
ie(
  Yt,
  {
    data: {},
    id: {},
    icon: {},
    handle: {},
    children: {},
    allowExecute: {},
    allowCopy: {},
    allowDelete: {},
    allowSetting: {},
    allowSettingOfCondition: {},
    showSourceHandle: {},
    showTargetHandle: {},
    onCollapse: {}
  },
  [],
  [],
  !0
);
const Zd = [
  {
    value: "String",
    label: "String"
  },
  {
    value: "Number",
    label: "Number"
  },
  {
    value: "Boolean",
    label: "Boolean"
  },
  {
    value: "File",
    label: "File"
  },
  {
    value: "Object",
    label: "Object"
  },
  {
    value: "Array",
    label: "Array"
  }
], zy = [
  {
    value: "ref",
    label: "引用"
  },
  {
    value: "fixed",
    label: "固定值"
  }
  // {
  //     value: 'input',
  //     label: '输入'
  // }
];
var Ry = /* @__PURE__ */ J('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Iy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), By = /* @__PURE__ */ J('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const qy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Kd(e, t) {
  ue(t, !0), qe(e, qy);
  const n = y(t, "parameter", 7), r = y(t, "index", 7);
  let o = ot(), i = /* @__PURE__ */ S(() => Hn(o)), s = /* @__PURE__ */ S(() => ({
    ...n(),
    ...u(i)?.current?.data?.parameters[r()]
  }));
  const { updateNodeData: a } = pt(), l = (k, M) => {
    a(o, (z) => {
      let q = z.data.parameters;
      return q[r()][k] = M, { parameters: q };
    });
  }, c = (k) => {
    const M = k.target.value;
    l("name", M);
  }, d = (k) => {
    const M = k.target.checked;
    l("required", M);
  }, p = (k) => {
    const M = k.value;
    M && l("dataType", M);
  };
  let f;
  const g = () => {
    a(o, (k) => {
      let M = k.data.parameters;
      return M.splice(r(), 1), { parameters: [...M] };
    }), f?.hide();
  };
  var h = By(), v = fe(h), C = I(v);
  st(C, {
    style: "width: 100%;",
    get value() {
      return u(s).name;
    },
    placeholder: "请输入参数名称",
    oninput: c
  }), R(v);
  var w = H(v, 2), E = I(w);
  Ed(E, {
    get checked() {
      return u(s).required;
    },
    onchange: d
  }), R(w);
  var x = H(w, 2), $ = I(x);
  return Rt(
    mr($, {
      placement: "bottom",
      floating: (k) => {
        var M = Ry(), z = I(M), q = H(I(z));
        const U = /* @__PURE__ */ S(() => u(s).dataType ? [u(s).dataType] : ["String"]);
        kt(q, {
          get items() {
            return Zd;
          },
          style: "width: 100%",
          onSelect: p,
          get value() {
            return u(U);
          }
        }), R(z);
        var j = H(z, 2), T = H(I(j));
        Ge(T, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return u(s).defaultValue;
          },
          onchange: (L) => {
            const A = L.target.value;
            l("defaultValue", A);
          }
        }), R(j);
        var _ = H(j, 2), D = H(I(_));
        Ge(D, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return u(s).description;
          },
          onchange: (L) => {
            const A = L.target.value;
            l("description", A);
          }
        }), R(_);
        var b = H(_, 2), P = I(b);
        De(P, {
          onclick: g,
          children: (L, A) => {
            be();
            var B = Te("删除");
            N(L, B);
          },
          $$slots: { default: !0 }
        }), R(b), R(M), N(k, M);
      },
      children: (k, M) => {
        De(k, {
          class: "input-btn-more",
          children: (z, q) => {
            var U = Iy();
            N(z, U);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (k) => f = k,
    () => f
  ), R(x), N(e, h), ce({
    get parameter() {
      return n();
    },
    set parameter(k) {
      n(k), m();
    },
    get index() {
      return r();
    },
    set index(k) {
      r(k), m();
    }
  });
}
ie(Kd, { parameter: {}, index: {} }, [], [], !0);
var Zy = /* @__PURE__ */ J('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), Ky = /* @__PURE__ */ J('<div class="none-params svelte-3n0wca">无输入参数</div>'), jy = /* @__PURE__ */ J('<div class="input-container svelte-3n0wca"><!> <!></div>');
const Yy = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function jd(e, t) {
  ue(t, !0), qe(e, Yy);
  let n = ot(), r = /* @__PURE__ */ S(() => Hn(n)), o = /* @__PURE__ */ S(() => [...u(r)?.current?.data?.parameters || []]);
  var i = jy(), s = I(i);
  {
    var a = (c) => {
      var d = Zy();
      be(4), N(c, d);
    };
    le(s, (c) => {
      u(o).length !== 0 && c(a);
    });
  }
  var l = H(s, 2);
  yt(
    l,
    19,
    () => u(o),
    (c) => c.id,
    (c, d, p) => {
      Kd(c, {
        get parameter() {
          return u(d);
        },
        get index() {
          return u(p);
        }
      });
    },
    (c) => {
      var d = Ky();
      N(c, d);
    }
  ), R(i), N(e, i), ce();
}
ie(jd, {}, [], [], !0);
const $i = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = gr()), $i(t.children);
}), e), en = () => {
  const { updateNodeData: e } = pt();
  return {
    addParameter: (t, n = "parameters", r) => {
      $i(r?.children);
      const o = {
        name: "",
        dataType: "String",
        refType: "ref",
        ...r,
        id: gr()
      };
      e(t, (i) => {
        let s = i.data[n];
        return s ? s.push(o) : s = [o], { [n]: [...s] };
      });
    }
  };
};
var Fy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), Wy = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xy = /* @__PURE__ */ J('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const Uy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Yd(e, t) {
  ue(t, !0), qe(e, Uy);
  const n = y(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en();
  return Yt(e, Fe(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (s) => {
      var a = Fy();
      N(s, a);
    },
    children: (s, a) => {
      var l = Xy(), c = fe(l), d = I(c);
      He(d, {
        level: 3,
        children: (g, h) => {
          be();
          var v = Te("输入参数");
          N(g, v);
        },
        $$slots: { default: !0 }
      });
      var p = H(d, 2);
      De(p, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o, "parameters", { refType: "input" });
        },
        children: (g, h) => {
          var v = Wy();
          N(g, v);
        },
        $$slots: { default: !0 }
      }), R(c);
      var f = H(c, 2);
      jd(f, {}), N(s, l);
    },
    $$slots: { icon: !0, default: !0 }
  })), ce({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
ie(Yd, { data: {} }, [], [], !0);
const Fd = (e, t, n) => {
  for (const r of n)
    r.target === t && r.source && (e.push(r.source), Fd(e, r.source, n));
}, Wd = (e, t, n) => !e || e.length === 0 ? [] : e.map((r) => ({
  label: r.name + (n ? ` (Array<${r.dataType || "String"}>)` : ` (${r.dataType || "String"})`),
  value: t + "." + r.name,
  children: Wd(r.children, t + "." + r.name, n)
})), Bl = (e, t, n) => {
  if (e.type === "startNode") {
    const r = e.data.parameters, o = [];
    if (r) for (const i of r)
      o.push({
        label: i.name + (t ? ` (Array<${i.dataType || "String"}>)` : ` (${i.dataType || "String"})`),
        value: e.id + "." + i.name
      });
    return { label: e.data.title, value: e.id, children: o };
  } else {
    if (e.type === "loopNode" && n.parentId)
      return {
        label: e.data.title,
        value: e.id,
        children: [
          { label: "loopItem", value: e.id + ".loopItem" },
          { label: "index (Number)", value: e.id + ".index" }
        ]
      };
    {
      const r = e.data.outputDefs;
      if (r)
        return {
          label: e.data.title,
          value: e.id,
          children: Wd(r, e.id, t)
        };
    }
  }
}, Xd = (e = !1) => {
  const t = ot(), n = Hn(t), r = /* @__PURE__ */ S(Qt), o = /* @__PURE__ */ S(() => u(r).nodes), i = /* @__PURE__ */ S(() => u(r).edges), s = /* @__PURE__ */ S(() => u(r).nodeLookup);
  let a = /* @__PURE__ */ S(() => {
    const l = [];
    if (!n.current)
      return [];
    const c = u(s).get(t);
    if (e)
      for (const d of u(o)) {
        const p = d.parentId === n.current.id;
        if (p) {
          const f = Bl(d, p, c);
          f && l.push(f);
        }
      }
    else {
      const d = [];
      Fd(d, t, u(i));
      for (const p of u(o))
        if (d.includes(p.id)) {
          const f = p.parentId === n.current.id, g = Bl(p, f, c);
          g && l.push(g);
        }
    }
    return l;
  });
  return {
    get current() {
      return u(a);
    }
  };
};
var Gy = /* @__PURE__ */ J('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Jy = /* @__PURE__ */ J('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const Qy = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Ud(e, t) {
  ue(t, !0), qe(e, Qy), Qn(() => {
    u(l).refType || g({ value: "ref" });
  });
  const n = y(t, "parameter", 7), r = y(t, "index", 7), o = y(t, "dataKeyName", 7), i = y(t, "useChildrenOnly", 7);
  let s = ot(), a = /* @__PURE__ */ S(() => Hn(s)), l = /* @__PURE__ */ S(() => ({
    ...n(),
    ...u(a)?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: c } = pt(), d = (T, _) => {
    c(s, (D) => {
      let b = D.data?.[o()];
      return b[r()] = { ...b[r()], [T]: _ }, { [o()]: b };
    });
  }, p = (T, _) => {
    const D = _.target.value;
    d(T, D);
  }, f = (T) => {
    const _ = T.value;
    d("ref", _);
  }, g = (T) => {
    const _ = T.value;
    d("refType", _);
  };
  let h;
  const v = () => {
    c(s, (T) => {
      let _ = T.data?.[o()];
      return _.splice(r(), 1), { [o()]: [..._] };
    }), h?.hide();
  };
  let C = Xd(i());
  var w = Jy(), E = fe(w), x = I(E);
  const $ = /* @__PURE__ */ S(() => u(l).nameDisabled === !0);
  st(x, {
    style: "width: 100%;",
    get value() {
      return u(l).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return u($);
    },
    oninput: (T) => p("name", T)
  }), R(E);
  var k = H(E, 2), M = I(k);
  {
    var z = (T) => {
      st(T, {
        get value() {
          return u(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (_) => p("value", _)
      });
    }, q = (T, _) => {
      {
        var D = (b) => {
          const P = /* @__PURE__ */ S(() => [u(l).ref]);
          kt(b, {
            get items() {
              return C.current;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return u(P);
            },
            expandAll: !0,
            onSelect: f
          });
        };
        le(
          T,
          (b) => {
            u(l).refType !== "input" && b(D);
          },
          _
        );
      }
    };
    le(M, (T) => {
      u(l).refType === "fixed" ? T(z) : T(q, !1);
    });
  }
  R(k);
  var U = H(k, 2), j = I(U);
  return Rt(
    mr(j, {
      placement: "bottom",
      floating: (T) => {
        var _ = Gy(), D = I(_), b = H(I(D));
        const P = /* @__PURE__ */ S(() => u(l).refType ? [u(l).refType] : []);
        kt(b, {
          get items() {
            return zy;
          },
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return u(P);
          },
          onSelect: g
        }), R(D);
        var L = H(D, 2), A = H(I(L));
        Ge(A, {
          rows: 1,
          style: "width: 100%;",
          onchange: (X) => {
            p("defaultValue", X);
          },
          get value() {
            return u(l).defaultValue;
          }
        }), R(L);
        var B = H(L, 2), O = H(I(B));
        Ge(O, {
          rows: 3,
          style: "width: 100%;",
          onchange: (X) => {
            p("description", X);
          },
          get value() {
            return u(l).description;
          }
        }), R(B);
        var Z = H(B, 2), F = I(Z);
        De(F, {
          onclick: v,
          children: (X, te) => {
            be();
            var W = Te("删除");
            N(X, W);
          },
          $$slots: { default: !0 }
        }), R(Z), R(_), N(T, _);
      },
      children: (T, _) => {
        Ho(T, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (T) => h = T,
    () => h
  ), R(U), N(e, w), ce({
    get parameter() {
      return n();
    },
    set parameter(T) {
      n(T), m();
    },
    get index() {
      return r();
    },
    set index(T) {
      r(T), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(T) {
      o(T), m();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(T) {
      i(T), m();
    }
  });
}
ie(
  Ud,
  {
    parameter: {},
    index: {},
    dataKeyName: {},
    useChildrenOnly: {}
  },
  [],
  [],
  !0
);
var ew = /* @__PURE__ */ J('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), tw = /* @__PURE__ */ J('<div class="none-params svelte-1sm1mgi"> </div>'), nw = /* @__PURE__ */ J('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const rw = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Lt(e, t) {
  ue(t, !0), qe(e, rw);
  const n = y(t, "noneParameterText", 7, "无输入参数"), r = y(t, "dataKeyName", 7, "parameters"), o = y(t, "useChildrenOnly", 7);
  let i = ot(), s = /* @__PURE__ */ S(() => Hn(i)), a = /* @__PURE__ */ S(() => [...u(s)?.current?.data?.[r()] || []]);
  var l = nw(), c = I(l);
  {
    var d = (f) => {
      var g = ew();
      be(4), N(f, g);
    };
    le(c, (f) => {
      u(a).length !== 0 && f(d);
    });
  }
  var p = H(c, 2);
  return yt(
    p,
    19,
    () => u(a),
    (f) => f.id,
    (f, g, h) => {
      Ud(f, {
        get parameter() {
          return u(g);
        },
        get index() {
          return u(h);
        },
        get dataKeyName() {
          return r();
        },
        get useChildrenOnly() {
          return o();
        }
      });
    },
    (f) => {
      var g = tw(), h = I(g, !0);
      R(g), Le(() => Ye(h, n())), N(f, g);
    }
  ), R(l), N(e, l), ce({
    get noneParameterText() {
      return n();
    },
    set noneParameterText(f = "无输入参数") {
      n(f), m();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(f = "parameters") {
      r(f), m();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(f) {
      o(f), m();
    }
  });
}
ie(Lt, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
var ow = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), iw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), sw = /* @__PURE__ */ J('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const aw = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function Gd(e, t) {
  ue(t, !0), qe(e, aw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en();
  return Yt(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      allowExecute: !1,
      showSourceHandle: !1,
      icon: (s) => {
        var a = ow();
        N(s, a);
      },
      children: (s, a) => {
        var l = sw(), c = fe(l), d = I(c);
        He(d, {
          level: 3,
          children: (g, h) => {
            be();
            var v = Te("输出参数");
            N(g, v);
          },
          $$slots: { default: !0 }
        });
        var p = H(d, 2);
        De(p, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (g, h) => {
            var v = iw();
            N(g, v);
          },
          $$slots: { default: !0 }
        }), R(c);
        var f = H(c, 2);
        Lt(f, { noneParameterText: "无输出参数", dataKeyName: "outputDefs" }), N(s, l);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
ie(Gd, { data: {} }, [], [], !0);
const os = (e) => JSON.parse(JSON.stringify(e));
var lw = /* @__PURE__ */ we('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), uw = /* @__PURE__ */ J('<div class="input-more-item svelte-1cfeest"><!></div>'), cw = /* @__PURE__ */ J('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), dw = /* @__PURE__ */ J('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const fw = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Jd(e, t) {
  ue(t, !0), qe(e, fw);
  const n = y(t, "parameter", 7), r = y(t, "position", 7), o = y(t, "dataKeyName", 7);
  let i = ot(), s = /* @__PURE__ */ S(() => Hn(i)), a = /* @__PURE__ */ S(() => {
    let D = u(s)?.current?.data?.[o()], b;
    if (D && r().length > 0) {
      let P = D;
      for (let L = 0; L < r().length; L++) {
        const A = r()[L];
        L == r().length - 1 ? b = P[A] : P = P[A].children;
      }
    }
    return { ...n(), ...b };
  });
  const { updateNodeData: l } = pt(), c = (D, b) => {
    l(i, (P) => {
      const L = P.data?.[o()];
      if (L && r().length > 0) {
        let A = L;
        for (let B = 0; B < r().length; B++) {
          const O = r()[B];
          B == r().length - 1 ? A[O] = { ...A[O], [D]: b } : A = A[O].children;
        }
      }
      return { [o()]: [...os(L)] };
    });
  }, d = (D, b) => {
    const P = b.target.value;
    c(D, P);
  }, p = (D) => {
    const b = D.value;
    c("dataType", b);
  };
  let f;
  const g = () => {
    l(i, (D) => {
      let b = D.data?.[o()];
      if (b && r().length > 0) {
        let P = b;
        for (let L = 0; L < r().length; L++) {
          const A = r()[L];
          L == r().length - 1 ? P.splice(A, 1) : P = P[A].children;
        }
      }
      return { [o()]: [...os(b)] };
    }), f?.hide();
  }, h = () => {
    l(i, (D) => {
      let b = D.data?.[o()];
      if (b && r().length > 0) {
        let P = b;
        for (let L = 0; L < r().length; L++) {
          const A = r()[L];
          L == r().length - 1 ? P[A].children ? P[A].children.push({ id: gr(), name: "newParam", dataType: "String" }) : P[A].children = [{ id: gr(), name: "newParam", dataType: "String" }] : P = P[A].children;
        }
      }
      return { [o()]: [...os(b)] };
    });
  };
  var v = dw(), C = fe(v), w = I(C);
  {
    var E = (D) => {
      var b = Ie(), P = fe(b);
      yt(P, 17, r, Nr, (L, A) => {
        be();
        var B = Te(" ");
        N(L, B);
      }), N(D, b);
    };
    le(w, (D) => {
      r().length > 1 && D(E);
    });
  }
  var x = H(w, 2);
  const $ = /* @__PURE__ */ S(() => u(a).nameDisabled === !0);
  st(x, {
    style: "width: 100%;",
    get value() {
      return u(a).name;
    },
    placeholder: "请输入参数名称",
    oninput: (D) => {
      d("name", D);
    },
    get disabled() {
      return u($);
    }
  }), R(C);
  var k = H(C, 2), M = I(k);
  const z = /* @__PURE__ */ S(() => u(a).dataType ? [u(a).dataType] : []), q = /* @__PURE__ */ S(() => u(a).dataTypeDisabled === !0);
  kt(M, {
    get items() {
      return Zd;
    },
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return u(z);
    },
    get disabled() {
      return u(q);
    },
    onSelect: p
  });
  var U = H(M, 2);
  {
    var j = (D) => {
      De(D, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: h,
        children: (b, P) => {
          var L = lw();
          N(b, L);
        },
        $$slots: { default: !0 }
      });
    };
    le(U, (D) => {
      (u(a).dataType === "Object" || u(a).dataType === "Array") && u(a).addChildDisabled !== !0 && D(j);
    });
  }
  R(k);
  var T = H(k, 2), _ = I(T);
  return Rt(
    mr(_, {
      placement: "bottom",
      floating: (D) => {
        var b = cw(), P = I(b), L = H(I(P));
        const A = /* @__PURE__ */ S(() => u(a).defaultValue || "");
        Ge(L, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return u(A);
          },
          onchange: (te) => {
            d("defaultValue", te);
          }
        }), R(P);
        var B = H(P, 2), O = H(I(B));
        const Z = /* @__PURE__ */ S(() => u(a).description || "");
        Ge(O, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return u(Z);
          },
          onchange: (te) => {
            d("description", te);
          }
        }), R(B);
        var F = H(B, 2);
        {
          var X = (te) => {
            var W = uw(), pe = I(W);
            De(pe, {
              onclick: g,
              children: (oe, ge) => {
                be();
                var G = Te("删除");
                N(oe, G);
              },
              $$slots: { default: !0 }
            }), R(W), N(te, W);
          };
          le(F, (te) => {
            u(a).deleteDisabled !== !0 && te(X);
          });
        }
        R(b), N(D, b);
      },
      children: (D, b) => {
        Ho(D, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (D) => f = D,
    () => f
  ), R(T), N(e, v), ce({
    get parameter() {
      return n();
    },
    set parameter(D) {
      n(D), m();
    },
    get position() {
      return r();
    },
    set position(D) {
      r(D), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(D) {
      o(D), m();
    }
  });
}
ie(Jd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var pw = /* @__PURE__ */ J("<!> <!>", 1), gw = /* @__PURE__ */ J('<div class="none-params svelte-1sm1mgi"> </div>'), hw = /* @__PURE__ */ J('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), vw = /* @__PURE__ */ J('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const mw = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Rn(e, t) {
  ue(t, !0), qe(e, mw);
  const n = (f, g = ft, h = ft) => {
    var v = Ie(), C = fe(v);
    yt(
      C,
      19,
      g,
      (w) => `${w.id}_${w.children ? w.children.length : 0}`,
      (w, E, x) => {
        var $ = pw(), k = fe($);
        const M = /* @__PURE__ */ S(() => [...h(), u(x)]);
        Jd(k, {
          get parameter() {
            return u(E);
          },
          get position() {
            return u(M);
          },
          get dataKeyName() {
            return o();
          }
        });
        var z = H(k, 2);
        {
          var q = (U) => {
            var j = /* @__PURE__ */ Ks(() => [...h(), u(x)]);
            n(U, () => u(E).children, () => u(j));
          };
          le(z, (U) => {
            u(E).children && U(q);
          });
        }
        N(w, $);
      },
      (w) => {
        var E = Ie(), x = fe(E);
        {
          var $ = (k) => {
            var M = gw(), z = I(M, !0);
            R(M), Le(() => Ye(z, r())), N(k, M);
          };
          le(x, (k) => {
            h().length === 0 && k($);
          });
        }
        N(w, E);
      }
    ), N(f, v);
  }, r = y(t, "noneParameterText", 7, "无输出参数"), o = y(t, "dataKeyName", 7, "outputDefs");
  let i = ot(), s = /* @__PURE__ */ S(() => Hn(i)), a = /* @__PURE__ */ S(() => [...u(s)?.current?.data?.[o()] || []]);
  var l = vw(), c = I(l);
  {
    var d = (f) => {
      var g = hw();
      be(4), N(f, g);
    };
    le(c, (f) => {
      u(a).length !== 0 && f(d);
    });
  }
  var p = H(c, 2);
  return n(p, () => u(a) || [], () => []), R(l), N(e, l), ce({
    get noneParameterText() {
      return r();
    },
    set noneParameterText(f = "无输出参数") {
      r(f), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(f = "outputDefs") {
      o(f), m();
    }
  });
}
ie(Rn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var yw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), ww = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), bw = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), xw = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), $w = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), kw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cw = /* @__PURE__ */ J('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"/></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"/></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const _w = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Qd(e, t) {
  ue(t, !0), qe(e, _w);
  const n = y(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en(), s = Gn();
  let a = /* @__PURE__ */ Me(jt([]));
  Qn(async () => {
    const d = await s.provider?.llm?.();
    u(a).push(...d || []);
  });
  const { updateNodeData: l } = pt(), c = (d) => {
    l(o, () => ({ outType: d })), d === "text" ? l(o, {
      outputDefs: [
        {
          name: "output",
          dataType: "String",
          dataTypeDisabled: !0,
          deleteDisabled: !0
        }
      ]
    }) : l(o, { outputDefs: [] });
  };
  return nt(() => {
    n().outType || c("text");
  }), Yt(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var p = yw();
        N(d, p);
      },
      children: (d, p) => {
        var f = Cw(), g = fe(f), h = I(g);
        He(h, {
          level: 3,
          children: (ee, ye) => {
            be();
            var re = Te("输入参数");
            N(ee, re);
          },
          $$slots: { default: !0 }
        });
        var v = H(h, 2);
        De(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (ee, ye) => {
            var re = ww();
            N(ee, re);
          },
          $$slots: { default: !0 }
        }), R(g);
        var C = H(g, 2);
        Lt(C, {});
        var w = H(C, 2);
        He(w, {
          level: 3,
          mt: "10px",
          children: (ee, ye) => {
            be();
            var re = Te("模型设置");
            N(ee, re);
          },
          $$slots: { default: !0 }
        });
        var E = H(w, 4), x = I(E);
        const $ = /* @__PURE__ */ S(() => n().llmId ? [n().llmId] : []);
        kt(x, {
          get items() {
            return u(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (ee) => {
            const ye = ee.value;
            l(o, () => ({ llmId: ye }));
          },
          get value() {
            return u($);
          }
        });
        var k = H(x, 2);
        Ho(k, {}), R(E);
        var M = H(E, 4), z = I(M), q = I(z), U = I(q);
        R(q);
        var j = H(q, 2);
        ln(j), j.__input = [bw, l, o], R(z), R(M);
        var T = H(M, 2), _ = I(T), D = I(_), b = I(D);
        R(D);
        var P = H(D, 2);
        ln(P), P.__input = [xw, l, o], R(_), R(T);
        var L = H(T, 2), A = I(L), B = I(A), O = I(B);
        R(B);
        var Z = H(B, 2);
        ln(Z), Z.__input = [$w, l, o], R(A), R(L);
        var F = H(L, 4), X = I(F);
        const te = /* @__PURE__ */ S(() => n().systemPrompt || "");
        Ge(X, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return u(te);
          },
          oninput: (ee) => {
            l(o, { systemPrompt: ee.target.value });
          }
        }), R(F);
        var W = H(F, 4), pe = I(W);
        const oe = /* @__PURE__ */ S(() => n().userPrompt || "");
        Ge(pe, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return u(oe);
          },
          oninput: (ee) => {
            l(o, { userPrompt: ee.target.value });
          }
        }), R(W);
        var ge = H(W, 2), G = I(ge);
        He(G, {
          level: 3,
          mt: "10px",
          children: (ee, ye) => {
            be();
            var re = Te("输出参数");
            N(ee, re);
          },
          $$slots: { default: !0 }
        });
        var ke = H(G, 2);
        const ae = /* @__PURE__ */ S(() => n().outType ? [n().outType] : []);
        kt(ke, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (ee) => {
            c(ee.value);
          },
          get value() {
            return u(ae);
          }
        });
        var se = H(ke, 2);
        {
          var ne = (ee) => {
            De(ee, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (ye, re) => {
                var Ee = kw();
                N(ye, Ee);
              },
              $$slots: { default: !0 }
            });
          };
          le(se, (ee) => {
            n().outType === "json" && ee(ne);
          });
        }
        R(ge);
        var me = H(ge, 2);
        Rn(me, {}), Le(() => {
          Ye(U, `Temperature: ${n().temperature ?? 0.5 ?? ""}`), Wo(j, n().temperature ?? 0.5), Ye(b, `Top P: ${n().topP ?? 0.9 ?? ""}`), Wo(P, n().topP ?? 0.9), Ye(O, `Top K: ${n().topK ?? 50 ?? ""}`), Wo(Z, n().topK ?? 50);
        }), N(d, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(d) {
      n(d), m();
    }
  });
}
Vn(["input"]);
ie(Qd, { data: {} }, [], [], !0);
var Sw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Ew = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Pw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Lw = /* @__PURE__ */ J('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const Tw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function ef(e, t) {
  ue(t, !0), qe(e, Tw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Qn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = ot(), { addParameter: i } = en(), { updateNodeData: s } = pt(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return Yt(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var c = Sw();
        N(l, c);
      },
      children: (l, c) => {
        var d = Lw(), p = fe(d), f = I(p);
        He(f, {
          level: 3,
          children: (j, T) => {
            be();
            var _ = Te("输入参数");
            N(j, _);
          },
          $$slots: { default: !0 }
        });
        var g = H(f, 2);
        De(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (j, T) => {
            var _ = Ew();
            N(j, _);
          },
          $$slots: { default: !0 }
        }), R(p);
        var h = H(p, 2);
        Lt(h, {});
        var v = H(h, 2);
        He(v, {
          level: 3,
          mt: "10px",
          children: (j, T) => {
            be();
            var _ = Te("代码");
            N(j, _);
          },
          $$slots: { default: !0 }
        });
        var C = H(v, 4), w = I(C);
        const E = /* @__PURE__ */ S(() => n().engine ? [n().engine] : ["qlexpress"]);
        kt(w, {
          get items() {
            return a;
          },
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (j) => {
            const T = j.value;
            s(o, () => ({ engine: T }));
          },
          get value() {
            return u(E);
          }
        }), R(C);
        var x = H(C, 4), $ = I(x);
        const k = /* @__PURE__ */ S(() => n().code || "");
        Ge($, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (j) => {
            s(o, () => ({ code: j.target.value }));
          },
          get value() {
            return u(k);
          }
        }), R(x);
        var M = H(x, 2), z = I(M);
        He(z, {
          level: 3,
          mt: "10px",
          children: (j, T) => {
            be();
            var _ = Te("输出参数");
            N(j, _);
          },
          $$slots: { default: !0 }
        });
        var q = H(z, 2);
        De(q, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (j, T) => {
            var _ = Pw();
            N(j, _);
          },
          $$slots: { default: !0 }
        }), R(M);
        var U = H(M, 2);
        Rn(U, {}), N(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
ie(ef, { data: {} }, [], [], !0);
var Mw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), Nw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ow = /* @__PURE__ */ J('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Dw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function tf(e, t) {
  ue(t, !0), qe(e, Dw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en(), { updateNodeData: s } = pt();
  return nt(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), Yt(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = Mw();
        N(a, l);
      },
      children: (a, l) => {
        var c = Ow(), d = fe(c), p = I(d);
        He(p, {
          level: 3,
          children: (k, M) => {
            be();
            var z = Te("输入参数");
            N(k, z);
          },
          $$slots: { default: !0 }
        });
        var f = H(p, 2);
        De(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (k, M) => {
            var z = Nw();
            N(k, z);
          },
          $$slots: { default: !0 }
        }), R(d);
        var g = H(d, 2);
        Lt(g, {});
        var h = H(g, 2);
        He(h, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (k, M) => {
            be();
            var z = Te("模板内容");
            N(k, z);
          },
          $$slots: { default: !0 }
        });
        var v = H(h, 2), C = I(v);
        const w = /* @__PURE__ */ S(() => n().template || "");
        Ge(C, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (k) => {
            s(o, () => ({ template: k.target.value }));
          },
          get value() {
            return u(w);
          }
        }), R(v);
        var E = H(v, 2), x = I(E);
        He(x, {
          level: 3,
          mt: "10px",
          children: (k, M) => {
            be();
            var z = Te("输出参数");
            N(k, z);
          },
          $$slots: { default: !0 }
        }), R(E);
        var $ = H(E, 2);
        Rn($, {}), N(a, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
ie(tf, { data: {} }, [], [], !0);
var Vw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Aw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Hw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), zw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Rw = /* @__PURE__ */ J('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), Iw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Bw = /* @__PURE__ */ J('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), qw = /* @__PURE__ */ J('<div style="width: 100%"><!></div>'), Zw = /* @__PURE__ */ J('<div style="width: 100%"><!></div>'), Kw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jw = /* @__PURE__ */ J('<div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const Yw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function nf(e, t) {
  ue(t, !0), qe(e, Yw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]);
  Qn(() => {
    n().method || a(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = ot(), { addParameter: s } = en(), { updateNodeData: a } = pt();
  return Yt(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var c = Vw();
        N(l, c);
      },
      children: (l, c) => {
        var d = jw(), p = fe(d), f = I(p);
        He(f, {
          level: 3,
          children: (de, Ce) => {
            be();
            var _e = Te("输入参数");
            N(de, _e);
          },
          $$slots: { default: !0 }
        });
        var g = H(f, 2);
        De(g, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i);
          },
          children: (de, Ce) => {
            var _e = Aw();
            N(de, _e);
          },
          $$slots: { default: !0 }
        }), R(p);
        var h = H(p, 2);
        Lt(h, {});
        var v = H(h, 2);
        He(v, {
          level: 3,
          mt: "10px",
          children: (de, Ce) => {
            be();
            var _e = Te("URL 地址");
            N(de, _e);
          },
          $$slots: { default: !0 }
        });
        var C = H(v, 2), w = I(C), E = I(w);
        const x = /* @__PURE__ */ S(() => n().method ? [n().method] : ["get"]);
        kt(E, {
          get items() {
            return o;
          },
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (de) => {
            const Ce = de.value;
            a(i, () => ({ method: Ce }));
          },
          get value() {
            return u(x);
          }
        }), R(w);
        var $ = H(w, 2), k = I($);
        const M = /* @__PURE__ */ S(() => n().url || "");
        st(k, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (de) => {
            a(i, () => ({ url: de.target.value }));
          },
          get value() {
            return u(M);
          }
        }), R($), R(C);
        var z = H(C, 2), q = I(z);
        He(q, {
          level: 3,
          children: (de, Ce) => {
            be();
            var _e = Te("Http 头信息");
            N(de, _e);
          },
          $$slots: { default: !0 }
        });
        var U = H(q, 2);
        De(U, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (de, Ce) => {
            var _e = Hw();
            N(de, _e);
          },
          $$slots: { default: !0 }
        }), R(z);
        var j = H(z, 2);
        Lt(j, { dataKeyName: "headers" });
        var T = H(j, 2);
        He(T, {
          level: 3,
          mt: "10px",
          children: (de, Ce) => {
            be();
            var _e = Te("Body");
            N(de, _e);
          },
          $$slots: { default: !0 }
        });
        var _ = H(T, 2), D = I(_), b = I(D);
        const P = /* @__PURE__ */ S(() => !n().bodyType);
        st(b, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return u(P);
          },
          onchange: (de) => {
            de.target?.checked && a(i, { bodyType: "" });
          }
        }), be(), R(D);
        var L = H(D, 2), A = I(L);
        const B = /* @__PURE__ */ S(() => n().bodyType === "form-data");
        st(A, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return u(B);
          },
          onchange: (de) => {
            de.target?.checked && a(i, { bodyType: "form-data" });
          }
        }), be(), R(L);
        var O = H(L, 2), Z = I(O);
        const F = /* @__PURE__ */ S(() => n().bodyType === "x-www-form-urlencoded");
        st(Z, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return u(F);
          },
          onchange: (de) => {
            de.target?.checked && a(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), be(), R(O);
        var X = H(O, 2), te = I(X);
        const W = /* @__PURE__ */ S(() => n().bodyType === "json");
        st(te, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return u(W);
          },
          onchange: (de) => {
            de.target?.checked && a(i, { bodyType: "json" });
          }
        }), be(), R(X);
        var pe = H(X, 2), oe = I(pe);
        const ge = /* @__PURE__ */ S(() => n().bodyType === "raw");
        st(oe, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return u(ge);
          },
          onchange: (de) => {
            de.target?.checked && a(i, { bodyType: "raw" });
          }
        }), be(), R(pe), R(_);
        var G = H(_, 2);
        {
          var ke = (de) => {
            var Ce = Rw(), _e = fe(Ce), Re = I(_e);
            He(Re, {
              level: 3,
              children: (Ve, Qe) => {
                be();
                var he = Te("参数");
                N(Ve, he);
              },
              $$slots: { default: !0 }
            });
            var gt = H(Re, 2);
            De(gt, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formData");
              },
              children: (Ve, Qe) => {
                var he = zw();
                N(Ve, he);
              },
              $$slots: { default: !0 }
            }), R(_e);
            var wt = H(_e, 2);
            Lt(wt, { dataKeyName: "formData" }), N(de, Ce);
          };
          le(G, (de) => {
            n().bodyType === "form-data" && de(ke);
          });
        }
        var ae = H(G, 2);
        {
          var se = (de) => {
            var Ce = Bw(), _e = fe(Ce), Re = I(_e);
            He(Re, {
              level: 3,
              children: (Ve, Qe) => {
                be();
                var he = Te("Body 参数");
                N(Ve, he);
              },
              $$slots: { default: !0 }
            });
            var gt = H(Re, 2);
            De(gt, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "formUrlencoded");
              },
              children: (Ve, Qe) => {
                var he = Iw();
                N(Ve, he);
              },
              $$slots: { default: !0 }
            }), R(_e);
            var wt = H(_e, 2);
            Lt(wt, { dataKeyName: "formUrlencoded" }), N(de, Ce);
          };
          le(ae, (de) => {
            n().bodyType === "x-www-form-urlencoded" && de(se);
          });
        }
        var ne = H(ae, 2);
        {
          var me = (de) => {
            var Ce = qw(), _e = I(Ce);
            Ge(_e, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Re) => {
                a(i, { bodyJson: Re.target.value });
              }
            }), R(Ce), N(de, Ce);
          };
          le(ne, (de) => {
            n().bodyType === "json" && de(me);
          });
        }
        var ee = H(ne, 2);
        {
          var ye = (de) => {
            var Ce = Zw(), _e = I(Ce);
            Ge(_e, {
              rows: 5,
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Re) => {
                a(i, { bodyRaw: Re.target.value });
              }
            }), R(Ce), N(de, Ce);
          };
          le(ee, (de) => {
            n().bodyType === "raw" && de(ye);
          });
        }
        var re = H(ee, 2), Ee = I(re);
        He(Ee, {
          level: 3,
          mt: "10px",
          children: (de, Ce) => {
            be();
            var _e = Te("输出参数");
            N(de, _e);
          },
          $$slots: { default: !0 }
        });
        var K = H(Ee, 2);
        De(K, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (de, Ce) => {
            var _e = Kw();
            N(de, _e);
          },
          $$slots: { default: !0 }
        }), R(re);
        var Je = H(re, 2);
        Rn(Je, {}), N(l, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(l) {
      n(l), m();
    }
  });
}
ie(nf, { data: {} }, [], [], !0);
var Fw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), Ww = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xw = /* @__PURE__ */ J('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Uw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function rf(e, t) {
  ue(t, !0), qe(e, Uw);
  const n = y(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en(), s = Gn();
  let a = /* @__PURE__ */ Me(jt([]));
  Qn(async () => {
    const c = await s.provider?.knowledge?.();
    u(a).push(...c || []);
  });
  const { updateNodeData: l } = pt();
  return nt(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "documents",
      dataType: "Array",
      nameDisabled: !0,
      dataTypeDisabled: !0,
      addChildDisabled: !0,
      deleteDisabled: !0,
      children: [
        {
          name: "title",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0,
          deleteDisabled: !0
        },
        {
          name: "content",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0,
          deleteDisabled: !0
        },
        {
          name: "documentId",
          dataType: "Number",
          nameDisabled: !0,
          dataTypeDisabled: !0,
          deleteDisabled: !0
        },
        {
          name: "knowledgeId",
          dataType: "Number",
          nameDisabled: !0,
          dataTypeDisabled: !0,
          deleteDisabled: !0
        }
      ]
    });
  }), Yt(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = Fw();
        N(c, d);
      },
      children: (c, d) => {
        var p = Xw(), f = fe(p), g = I(f);
        He(g, {
          level: 3,
          children: (_, D) => {
            be();
            var b = Te("输入参数");
            N(_, b);
          },
          $$slots: { default: !0 }
        });
        var h = H(g, 2);
        De(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (_, D) => {
            var b = Ww();
            N(_, b);
          },
          $$slots: { default: !0 }
        }), R(f);
        var v = H(f, 2);
        Lt(v, {});
        var C = H(v, 2);
        He(C, {
          level: 3,
          mt: "10px",
          children: (_, D) => {
            be();
            var b = Te("知识库设置");
            N(_, b);
          },
          $$slots: { default: !0 }
        });
        var w = H(C, 4), E = I(w);
        const x = /* @__PURE__ */ S(() => n().knowledgeId ? [n().knowledgeId] : []);
        kt(E, {
          get items() {
            return u(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (_) => {
            const D = _.value;
            l(o, () => ({ knowledgeId: D }));
          },
          get value() {
            return u(x);
          }
        }), R(w);
        var $ = H(w, 4), k = I($);
        st(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (_) => {
            const D = _.target.value;
            l(o, () => ({ keyword: D }));
          }
        }), R($);
        var M = H($, 4), z = I(M);
        const q = /* @__PURE__ */ S(() => n().limit || "");
        st(z, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (_) => {
            const D = _.target.value;
            l(o, () => ({ limit: D }));
          },
          get value() {
            return u(q);
          }
        }), R(M);
        var U = H(M, 2), j = I(U);
        He(j, {
          level: 3,
          mt: "10px",
          children: (_, D) => {
            be();
            var b = Te("输出参数");
            N(_, b);
          },
          $$slots: { default: !0 }
        }), R(U);
        var T = H(U, 2);
        Rn(T, {}), N(c, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(c) {
      n(c), m();
    }
  });
}
ie(rf, { data: {} }, [], [], !0);
var Gw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), Jw = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Qw = /* @__PURE__ */ J('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const eb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function of(e, t) {
  ue(t, !0), qe(e, eb);
  const n = y(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en(), s = Gn();
  let a = /* @__PURE__ */ Me(jt([]));
  Qn(async () => {
    const c = await s.provider?.searchEngine?.();
    u(a).push(...c || []);
  });
  const { updateNodeData: l } = pt();
  return nt(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "documents",
      dataType: "Array",
      nameDisabled: !0,
      dataTypeDisabled: !0,
      addChildDisabled: !0,
      deleteDisabled: !0,
      children: [
        {
          name: "title",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0,
          deleteDisabled: !0
        },
        {
          name: "content",
          dataType: "String",
          nameDisabled: !0,
          dataTypeDisabled: !0,
          deleteDisabled: !0
        }
      ]
    });
  }), Yt(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = Gw();
        N(c, d);
      },
      children: (c, d) => {
        var p = Qw(), f = fe(p), g = I(f);
        He(g, {
          level: 3,
          children: (T, _) => {
            be();
            var D = Te("输入参数");
            N(T, D);
          },
          $$slots: { default: !0 }
        });
        var h = H(g, 2);
        De(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (T, _) => {
            var D = Jw();
            N(T, D);
          },
          $$slots: { default: !0 }
        }), R(f);
        var v = H(f, 2);
        Lt(v, {});
        var C = H(v, 2);
        He(C, {
          level: 3,
          mt: "10px",
          children: (T, _) => {
            be();
            var D = Te("搜索引擎设置");
            N(T, D);
          },
          $$slots: { default: !0 }
        });
        var w = H(C, 4), E = I(w);
        const x = /* @__PURE__ */ S(() => n().engine ? [n().engine] : []);
        kt(E, {
          get items() {
            return u(a);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (T) => {
            const _ = T.value;
            l(o, () => ({ engine: _ }));
          },
          get value() {
            return u(x);
          }
        }), R(w);
        var $ = H(w, 4), k = I($);
        st(k, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (T) => {
            const _ = T.target.value;
            l(o, () => ({ keyword: _ }));
          }
        }), R($);
        var M = H($, 4), z = I(M);
        st(z, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (T) => {
            const _ = T.target.value;
            l(o, () => ({ limit: _ }));
          }
        }), R(M);
        var q = H(M, 2), U = I(q);
        He(U, {
          level: 3,
          mt: "10px",
          children: (T, _) => {
            be();
            var D = Te("输出参数");
            N(T, D);
          },
          $$slots: { default: !0 }
        }), R(q);
        var j = H(q, 2);
        Rn(j, {}), N(c, p);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(c) {
      n(c), m();
    }
  });
}
ie(of, { data: {} }, [], [], !0);
var tb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), nb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), rb = /* @__PURE__ */ J('<div class="heading svelte-1eqcy61"><!></div> <!> <div class="heading svelte-1eqcy61"><!> <!></div> <!>', 1);
const ob = {
  hash: "svelte-1eqcy61",
  code: ".heading.svelte-1eqcy61 {display:flex;margin:10px 0;align-items:center;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function sf(e, t) {
  ue(t, !0), qe(e, ob);
  const n = y(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en();
  return nt(() => {
    (!n().loopVars || n().loopVars.length === 0) && i(o, "loopVars", { name: "loopVar", nameDisabled: !0, deleteDisabled: !0 });
  }), Yt(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (s) => {
        var a = tb();
        N(s, a);
      },
      handle: (s) => {
        Xn(s, {
          type: "source",
          get position() {
            return xe.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (s, a) => {
        var l = rb(), c = fe(l), d = I(c);
        He(d, {
          level: 3,
          children: (C, w) => {
            be();
            var E = Te("循环变量");
            N(C, E);
          },
          $$slots: { default: !0 }
        }), R(c);
        var p = H(c, 2);
        Lt(p, { dataKeyName: "loopVars" });
        var f = H(p, 2), g = I(f);
        He(g, {
          level: 3,
          children: (C, w) => {
            be();
            var E = Te("输出参数");
            N(C, E);
          },
          $$slots: { default: !0 }
        });
        var h = H(g, 2);
        De(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (C, w) => {
            var E = nb();
            N(C, E);
          },
          $$slots: { default: !0 }
        }), R(f);
        var v = H(f, 2);
        Lt(v, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs",
          useChildrenOnly: !0
        }), N(s, l);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(s) {
      n(s), m();
    }
  });
}
ie(sf, { data: {} }, [], [], !0);
const ib = (e, t) => {
  const n = e.checked;
  t("required", n);
};
var sb = /* @__PURE__ */ J('<div class="input-more-setting svelte-2f9bnc"><div class="input-more-item svelte-2f9bnc">数据类型： <!></div> <div class="input-more-item svelte-2f9bnc">确认方式： <!></div> <label class="input-item-inline svelte-2f9bnc"><span>是否必填：</span> <input type="checkbox"/></label> <div class="input-more-item svelte-2f9bnc">默认值： <!></div> <div class="input-more-item svelte-2f9bnc">参数描述： <!></div> <div class="input-more-item svelte-2f9bnc"><!></div></div>'), ab = /* @__PURE__ */ J('<div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div> <div class="input-item svelte-2f9bnc"><!></div>', 1);
const lb = {
  hash: "svelte-2f9bnc",
  code: ".input-item.svelte-2f9bnc {display:flex;align-items:center;}.input-item-inline.svelte-2f9bnc {display:flex;align-items:center;font-size:12px;color:#666;}.input-more-setting.svelte-2f9bnc {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-2f9bnc .input-more-item:where(.svelte-2f9bnc) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function af(e, t) {
  ue(t, !0), qe(e, lb);
  const n = y(t, "parameter", 7), r = y(t, "index", 7), o = y(t, "dataKeyName", 7), i = y(t, "useChildrenOnly", 7);
  let s = ot(), a = Hn(s), l = /* @__PURE__ */ S(() => ({
    ...n(),
    ...a?.current?.data?.[o()][r()]
  }));
  const { updateNodeData: c } = pt(), d = (b, P) => {
    c(s, (L) => {
      let A = L.data?.[o()];
      return A[r()] = { ...A[r()], [b]: P }, { [o()]: A };
    });
  }, p = (b, P) => {
    const L = P.target.value;
    d(b, L);
  }, f = (b) => {
    const P = b.value;
    d("ref", P);
  }, g = (b) => {
    const P = b.value;
    d("selectionMode", P);
  }, h = (b) => {
    const P = b.value;
    d("selectionDataType", P);
  };
  let v;
  const C = () => {
    c(s, (b) => {
      let P = b.data?.[o()];
      return P.splice(r(), 1), { [o()]: [...P] };
    }), v?.hide();
  };
  let w = Xd(i());
  const E = [
    { label: "文字", value: "text" },
    { label: "图片", value: "image" },
    { label: "视频", value: "video" },
    { label: "音频", value: "audio" },
    { label: "文件", value: "file" },
    { label: "其他", value: "other" }
  ], x = [
    { label: "单选", value: "single" },
    { label: "多选", value: "multiple" }
  ];
  var $ = ab(), k = fe($), M = I(k);
  const z = /* @__PURE__ */ S(() => u(l).nameDisabled === !0);
  st(M, {
    style: "width: 100%;",
    get value() {
      return u(l).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return u(z);
    },
    oninput: (b) => p("name", b)
  }), R(k);
  var q = H(k, 2), U = I(q);
  {
    var j = (b) => {
      st(b, {
        get value() {
          return u(l).value;
        },
        placeholder: "请输入参数值",
        oninput: (P) => p("value", P)
      });
    }, T = (b, P) => {
      {
        var L = (A) => {
          const B = /* @__PURE__ */ S(() => [u(l).ref]);
          kt(A, {
            get items() {
              return w.current;
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return u(B);
            },
            expandAll: !0,
            onSelect: f
          });
        };
        le(
          b,
          (A) => {
            u(l).refType !== "input" && A(L);
          },
          P
        );
      }
    };
    le(U, (b) => {
      u(l).refType === "fixed" ? b(j) : b(T, !1);
    });
  }
  R(q);
  var _ = H(q, 2), D = I(_);
  return Rt(
    mr(D, {
      placement: "bottom",
      floating: (b) => {
        var P = sb(), L = I(P), A = H(I(L));
        const B = /* @__PURE__ */ S(() => u(l).selectionDataType ? [u(l).selectionDataType] : []);
        kt(A, {
          get items() {
            return E;
          },
          style: "width: 100%",
          defaultValue: ["text"],
          get value() {
            return u(B);
          },
          onSelect: h
        }), R(L);
        var O = H(L, 2), Z = H(I(O));
        const F = /* @__PURE__ */ S(() => u(l).selectionMode ? [u(l).selectionMode] : []);
        kt(Z, {
          get items() {
            return x;
          },
          style: "width: 100%",
          defaultValue: ["single"],
          get value() {
            return u(F);
          },
          onSelect: g
        }), R(O);
        var X = H(O, 2), te = H(I(X), 2);
        ln(te), gs(te, !1), te.__change = [ib, d], R(X);
        var W = H(X, 2), pe = H(I(W));
        Ge(pe, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ae) => {
            p("defaultValue", ae);
          },
          get value() {
            return u(l).defaultValue;
          }
        }), R(W);
        var oe = H(W, 2), ge = H(I(oe));
        Ge(ge, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ae) => {
            p("description", ae);
          },
          get value() {
            return u(l).description;
          }
        }), R(oe);
        var G = H(oe, 2), ke = I(G);
        De(ke, {
          onclick: C,
          children: (ae, se) => {
            be();
            var ne = Te("删除");
            N(ae, ne);
          },
          $$slots: { default: !0 }
        }), R(G), R(P), N(b, P);
      },
      children: (b, P) => {
        Ho(b, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (b) => v = b,
    () => v
  ), R(_), N(e, $), ce({
    get parameter() {
      return n();
    },
    set parameter(b) {
      n(b), m();
    },
    get index() {
      return r();
    },
    set index(b) {
      r(b), m();
    },
    get dataKeyName() {
      return o();
    },
    set dataKeyName(b) {
      o(b), m();
    },
    get useChildrenOnly() {
      return i();
    },
    set useChildrenOnly(b) {
      i(b), m();
    }
  });
}
Vn(["change"]);
ie(
  af,
  {
    parameter: {},
    index: {},
    dataKeyName: {},
    useChildrenOnly: {}
  },
  [],
  [],
  !0
);
var ub = /* @__PURE__ */ J('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), cb = /* @__PURE__ */ J('<div class="none-params svelte-1sm1mgi"> </div>'), db = /* @__PURE__ */ J('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const fb = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function lf(e, t) {
  ue(t, !0), qe(e, fb);
  const n = y(t, "noneParameterText", 7, "无输入参数"), r = y(t, "dataKeyName", 7, "parameters"), o = y(t, "useChildrenOnly", 7);
  let i = ot(), s = /* @__PURE__ */ S(() => Hn(i)), a = /* @__PURE__ */ S(() => [...u(s)?.current?.data?.[r()] || []]);
  var l = db(), c = I(l);
  {
    var d = (f) => {
      var g = ub();
      be(4), N(f, g);
    };
    le(c, (f) => {
      u(a).length !== 0 && f(d);
    });
  }
  var p = H(c, 2);
  return yt(
    p,
    19,
    () => u(a),
    (f) => f.id,
    (f, g, h) => {
      af(f, {
        get parameter() {
          return u(g);
        },
        get index() {
          return u(h);
        },
        get dataKeyName() {
          return r();
        },
        get useChildrenOnly() {
          return o();
        }
      });
    },
    (f) => {
      var g = cb(), h = I(g, !0);
      R(g), Le(() => Ye(h, n())), N(f, g);
    }
  ), R(l), N(e, l), ce({
    get noneParameterText() {
      return n();
    },
    set noneParameterText(f = "无输入参数") {
      n(f), m();
    },
    get dataKeyName() {
      return r();
    },
    set dataKeyName(f = "parameters") {
      r(f), m();
    },
    get useChildrenOnly() {
      return o();
    },
    set useChildrenOnly(f) {
      o(f), m();
    }
  });
}
ie(lf, { noneParameterText: {}, dataKeyName: {}, useChildrenOnly: {} }, [], [], !0);
const Ls = (e, t) => {
  if (e === t) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const n = Array.isArray(e), r = Array.isArray(t);
  if (n !== r) return !1;
  if (n && r) {
    if (e.length !== t.length) return !1;
    for (let o = 0; o < e.length; o++)
      if (!Ls(e[o], t[o])) return !1;
    return !0;
  } else {
    const o = Object.keys(e), i = Object.keys(t);
    if (o.length !== i.length) return !1;
    for (const s of o)
      if (!(s in t) || !Ls(e[s], t[s])) return !1;
    return !0;
  }
};
var pb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), gb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), hb = /* @__PURE__ */ J('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">消息内容</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const vb = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function uf(e, t) {
  ue(t, !0), qe(e, vb);
  const n = y(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en(), { updateNodeData: s } = pt();
  return nt(() => {
    if (n().confirms) {
      const a = n().confirms.map((l) => ({
        // id?: string;
        // name?: string;
        // nameDisabled?: boolean;
        // dataType?: string;
        // dataTypeDisabled?: boolean;
        // ref?: string;
        // refType?: string;
        // value?: string;
        // description?: string;
        // required?: boolean;
        // defaultValue?: string;
        // deleteDisabled?: boolean;
        // addChildDisabled?: boolean;
        // children?: Parameter[];
        ...l,
        nameDisabled: !0,
        dataTypeDisabled: !0,
        dataType: l.selectionMode === "multiple" ? "Array" : "String",
        addChildDisabled: !0
      }));
      Ls(a, n().outputDefs) || s(o, () => ({ outputDefs: a }));
    }
  }), Yt(e, Fe(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (a) => {
        var l = pb();
        N(a, l);
      },
      children: (a, l) => {
        var c = hb(), d = fe(c), p = I(d);
        He(p, {
          level: 3,
          children: (k, M) => {
            be();
            var z = Te("确认数据");
            N(k, z);
          },
          $$slots: { default: !0 }
        });
        var f = H(p, 2);
        De(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "confirms");
          },
          children: (k, M) => {
            var z = gb();
            N(k, z);
          },
          $$slots: { default: !0 }
        }), R(d);
        var g = H(d, 2);
        lf(g, { dataKeyName: "confirms" });
        var h = H(g, 2);
        He(h, {
          level: 3,
          mt: "10px",
          children: (k, M) => {
            be();
            var z = Te("确认消息");
            N(k, z);
          },
          $$slots: { default: !0 }
        });
        var v = H(h, 4), C = I(v);
        const w = /* @__PURE__ */ S(() => n().message || "");
        Ge(C, {
          rows: 5,
          placeholder: "请输入用户需要确认的消息内容",
          style: "width: 100%",
          onchange: (k) => {
            s(o, () => ({ message: k.target.value }));
          },
          get value() {
            return u(w);
          }
        }), R(v);
        var E = H(v, 2), x = I(E);
        He(x, {
          level: 3,
          mt: "10px",
          children: (k, M) => {
            be();
            var z = Te("输出参数");
            N(k, z);
          },
          $$slots: { default: !0 }
        }), R(E);
        var $ = H(E, 2);
        Rn($, {}), N(a, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(a) {
      n(a), m();
    }
  });
}
ie(uf, { data: {} }, [], [], !0);
const mb = {
  startNode: Yd,
  codeNode: ef,
  confirmNode: uf,
  llmNode: Qd,
  templateNode: tf,
  httpNode: nf,
  knowledgeNode: rf,
  searchEngineNode: of,
  loopNode: sf,
  endNode: Gd
};
var yb = /* @__PURE__ */ J("<!> ", 1);
function Ts(e, t) {
  ue(t, !0);
  const n = y(t, "icon", 7), r = y(t, "title", 7), o = y(t, "type", 7), i = y(t, "description", 7), s = y(t, "extra", 7);
  return De(e, {
    draggable: !0,
    ondragstart: (a) => {
      if (!a.dataTransfer)
        return null;
      const l = {
        type: o(),
        data: { title: r(), description: i(), ...s() }
      };
      a.dataTransfer.setData("application/tinyflow", JSON.stringify(l)), a.dataTransfer.effectAllowed = "move";
    },
    get "data-node-type"() {
      return o();
    },
    children: (a, l) => {
      var c = yb(), d = fe(c);
      Qs(d, n);
      var p = H(d);
      Le(() => Ye(p, ` ${r() ?? ""}`)), N(a, c);
    },
    $$slots: { default: !0 }
  }), ce({
    get icon() {
      return n();
    },
    set icon(a) {
      n(a), m();
    },
    get title() {
      return r();
    },
    set title(a) {
      r(a), m();
    },
    get type() {
      return o();
    },
    set type(a) {
      o(a), m();
    },
    get description() {
      return i();
    },
    set description(a) {
      i(a), m();
    },
    get extra() {
      return s();
    },
    set extra(a) {
      s(a), m();
    }
  });
}
ie(Ts, { icon: {}, title: {}, type: {}, description: {}, extra: {} }, [], [], !0);
var wb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), bb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), xb = /* @__PURE__ */ J('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function cf(e, t) {
  ue(t, !0);
  let n = /* @__PURE__ */ Me("base"), r = /* @__PURE__ */ Me("show");
  const o = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>',
      title: "开始节点",
      type: "startNode",
      sortNo: 100,
      description: "开始定义输入参数"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>',
      title: "循环",
      type: "loopNode",
      sortNo: 200,
      description: "用于循环执行任务"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>',
      title: "大模型",
      type: "llmNode",
      sortNo: 300,
      description: "使用大模型处理问题"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>',
      title: "知识库",
      type: "knowledgeNode",
      sortNo: 400,
      description: "通过知识库获取内容"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>',
      title: "搜索引擎",
      type: "searchEngineNode",
      sortNo: 500,
      description: "通过搜索引擎搜索内容"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>',
      title: "Http 请求",
      type: "httpNode",
      sortNo: 600,
      description: "通过 HTTP 请求获取数据"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>',
      title: "动态代码",
      type: "codeNode",
      sortNo: 700,
      description: "动态执行代码"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>',
      title: "内容模板",
      type: "templateNode",
      sortNo: 800,
      description: "通过模板引擎生成内容"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.3873 13.4975L17.9403 20.5117L13.2418 22.2218L10.6889 15.2076L6.79004 17.6529L8.4086 1.63318L19.9457 12.8646L15.3873 13.4975ZM15.3768 19.3163L12.6618 11.8568L15.6212 11.4459L9.98201 5.9561L9.19088 13.7863L11.7221 12.1988L14.4371 19.6583L15.3768 19.3163Z"></path></svg>',
      title: "用户确认",
      type: "confirmNode",
      sortNo: 900,
      description: "确认继续或选择内容"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>',
      title: "结束节点",
      type: "endNode",
      sortNo: 1e3,
      description: "结束定义输出参数"
    }
  ], i = [
    { label: "基础节点", value: "base" },
    { label: "业务工具", value: "tools" }
  ], s = [], a = Gn(), l = a.customNodes;
  if (l) {
    const w = Object.keys(l).sort((E, x) => (l[E].sortNo || 0) - (l[x].sortNo || 0));
    for (let E of w)
      l[E].group === "base" ? o.push({ type: E, ...l[E] }) : s.push({
        icon: l[E].icon,
        title: l[E].title,
        type: E
      });
    o.sort((E, x) => (E.sortNo || 0) - (x.sortNo || 0));
  }
  if (a.hiddenNodes) {
    const w = typeof a.hiddenNodes == "function" ? a.hiddenNodes() : a.hiddenNodes;
    if (Array.isArray(w)) {
      for (let E of w)
        for (let x = 0; x < o.length; x++)
          if (o[x].type === E) {
            o.splice(x, 1);
            break;
          }
    }
  }
  var c = xb(), d = I(c), p = I(d), f = I(p);
  Ld(f, {
    style: "width: 100%",
    get items() {
      return i;
    },
    onChange: (w) => {
      Y(n, w.value.toString(), !0);
    }
  }), R(p);
  var g = H(p, 2), h = I(g);
  yt(h, 21, () => o, Nr, (w, E) => {
    Ts(w, Fe(() => u(E)));
  }), R(h);
  var v = H(h, 2);
  yt(v, 21, () => s, Nr, (w, E) => {
    Ts(w, Fe(() => u(E)));
  }), R(v), R(g), R(d);
  var C = H(d, 2);
  De(C, {
    onclick: () => {
      Y(r, u(r) ? "" : "show", !0);
    },
    children: (w, E) => {
      var x = Ie(), $ = fe(x);
      {
        var k = (z) => {
          var q = wb();
          N(z, q);
        }, M = (z) => {
          var q = bb();
          N(z, q);
        };
        le($, (z) => {
          u(r) === "show" ? z(k) : z(M, !1);
        });
      }
      N(w, x);
    },
    $$slots: { default: !0 }
  }), R(c), Le(() => {
    Nt(c, 1, `tf-toolbar ${u(r) ?? ""}`), Ct(h, `display: ${u(n) === "base" ? "flex" : "none"}`), Ct(v, `display: ${u(n) !== "base" ? "flex" : "none"}`);
  }), N(e, c), ce();
}
ie(cf, {}, [], [], !0);
const $b = () => ({ getNode: (e) => Ue.getNode(e) }), kb = () => ({ ensureParentInNodesBefore: (e, t) => {
  Ue.updateNodes((n) => {
    let r = -1;
    for (let s = 0; s < n.length; s++)
      if (n[s].id === e) {
        r = s;
        break;
      }
    if (r <= 0)
      return n;
    let o = -1;
    for (let s = 0; s < r; s++)
      if (n[s].parentId === e || n[s].id === t) {
        o = s;
        break;
      }
    if (o == -1)
      return n;
    const i = n[r];
    for (let s = r; s > o; s--)
      n[s] = n[s - 1];
    return n[o] = i, n;
  });
} }), Cb = () => ({ getEdgesByTarget: (e) => Ue.getEdges().filter((t) => t.target === e) });
var _b = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Sb = /* @__PURE__ */ J('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Eb = /* @__PURE__ */ J('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Pb = /* @__PURE__ */ J('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Lb = /* @__PURE__ */ J('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input/></div></div>', 1), Tb = /* @__PURE__ */ J('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Mb = /* @__PURE__ */ J('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Nb = /* @__PURE__ */ we('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ob = /* @__PURE__ */ J('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Db = /* @__PURE__ */ J("<!> <!> <div></div> <!>", 1);
const Vb = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function df(e, t) {
  ue(t, !0), qe(e, Vb);
  const n = y(t, "data", 7), r = /* @__PURE__ */ je(t, ["$$slots", "$$events", "$$legacy", "$$host", "data"]), o = ot(), { addParameter: i } = en(), s = pt(), { updateNodeData: a } = s, l = (C) => {
    a(o, C);
  }, c = (C, w) => {
    l({ [C]: w.target?.value });
  }, d = { ...r, id: o, data: n() }, p = document.createElement("div"), f = Gn().customNodes[t.type];
  f.render?.(p, d, s);
  const g = f.forms;
  let h;
  nt(() => {
    n().expand && h && h.append(p);
  }), nt(() => {
    n() && f.onUpdate?.(p, { ...d, data: n() });
  }), nt(() => {
    !n().parameters && f.parameters && l({
      parameters: $i(JSON.parse(JSON.stringify(f.parameters)))
    });
  }), nt(() => {
    !n().outputDefs && f.outputDefs && l({
      outputDefs: $i(JSON.parse(JSON.stringify(f.outputDefs)))
    });
  });
  const v = /* @__PURE__ */ S(() => ({ ...n(), description: f.description }));
  return Yt(e, Fe(
    {
      get data() {
        return u(v);
      }
    },
    () => r,
    {
      icon: (C) => {
        var w = Ie(), E = fe(w);
        Qs(E, () => f.icon), N(C, w);
      },
      children: (C, w) => {
        var E = Db(), x = fe(E);
        {
          var $ = (j) => {
            var T = Sb(), _ = fe(T), D = I(_);
            He(D, {
              level: 3,
              children: (A, B) => {
                be();
                var O = Te("输入参数");
                N(A, O);
              },
              $$slots: { default: !0 }
            });
            var b = H(D, 2);
            {
              var P = (A) => {
                De(A, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o);
                  },
                  children: (B, O) => {
                    var Z = _b();
                    N(B, Z);
                  },
                  $$slots: { default: !0 }
                });
              };
              le(b, (A) => {
                f.parametersAddEnable !== !1 && A(P);
              });
            }
            R(_);
            var L = H(_, 2);
            Lt(L, {}), N(j, T);
          };
          le(x, (j) => {
            f.parametersEnable !== !1 && j($);
          });
        }
        var k = H(x, 2);
        {
          var M = (j) => {
            var T = Ie(), _ = fe(T);
            yt(_, 17, () => g, Nr, (D, b) => {
              var P = Ie(), L = fe(P);
              {
                var A = (O) => {
                  var Z = Eb(), F = fe(Z), X = I(F, !0);
                  R(F);
                  var te = H(F, 2), W = I(te);
                  const pe = /* @__PURE__ */ S(() => n()[u(b).name] || u(b).defaultValue);
                  st(W, Fe(
                    {
                      get placeholder() {
                        return u(b).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return u(pe);
                      }
                    },
                    () => u(b).attrs,
                    {
                      onchange: (oe) => {
                        c(u(b).name, oe);
                      }
                    }
                  )), R(te), Le(() => Ye(X, u(b).label)), N(O, Z);
                }, B = (O, Z) => {
                  {
                    var F = (te) => {
                      var W = Pb(), pe = fe(W), oe = I(pe, !0);
                      R(pe);
                      var ge = H(pe, 2), G = I(ge);
                      const ke = /* @__PURE__ */ S(() => n()[u(b).name] || u(b).defaultValue);
                      Ge(G, Fe(
                        {
                          rows: 3,
                          get placeholder() {
                            return u(b).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return u(ke);
                          }
                        },
                        () => u(b).attrs,
                        {
                          onchange: (ae) => {
                            c(u(b).name, ae);
                          }
                        }
                      )), R(ge), Le(() => Ye(oe, u(b).label)), N(te, W);
                    }, X = (te, W) => {
                      {
                        var pe = (ge) => {
                          var G = Lb(), ke = fe(G), ae = I(ke, !0);
                          R(ke);
                          var se = H(ke, 2), ne = I(se), me = I(ne), ee = I(me);
                          R(me);
                          var ye = H(me, 2);
                          ln(ye);
                          var re = (Ee) => l({ [u(b).name]: parseFloat(Ee.target.value) });
                          ut(
                            ye,
                            () => ({
                              class: "nodrag",
                              type: "range",
                              ...u(b).attrs,
                              value: n()[u(b).name] ?? u(b).defaultValue,
                              oninput: re
                            }),
                            void 0,
                            "svelte-q0cqsa"
                          ), R(ne), R(se), Le(() => {
                            Ye(ae, u(b).label), Ye(ee, `${u(b).description ?? ""}: ${n()[u(b).name] ?? u(b).defaultValue ?? ""}`);
                          }), N(ge, G);
                        }, oe = (ge, G) => {
                          {
                            var ke = (se) => {
                              var ne = Tb(), me = fe(ne), ee = I(me, !0);
                              R(me);
                              var ye = H(me, 2), re = I(ye);
                              const Ee = /* @__PURE__ */ S(() => u(b).options || []), K = /* @__PURE__ */ S(() => n()[u(b).name] ? [n()[u(b).name]] : [u(b).defaultValue]);
                              kt(re, {
                                get items() {
                                  return u(Ee);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return u(b).placeholder;
                                },
                                onSelect: (Je) => {
                                  const de = Je.value;
                                  l({ [u(b).name]: de });
                                },
                                get value() {
                                  return u(K);
                                }
                              }), R(ye), Le(() => Ye(ee, u(b).label)), N(se, ne);
                            }, ae = (se, ne) => {
                              {
                                var me = (ye) => {
                                  var re = Mb(), Ee = fe(re), K = I(Ee, !0);
                                  R(Ee);
                                  var Je = H(Ee, 2), de = I(Je);
                                  const Ce = /* @__PURE__ */ S(() => u(b).chosen?.buttonText);
                                  Pd(de, {
                                    style: "width: 100%",
                                    get placeholder() {
                                      return u(b).placeholder;
                                    },
                                    get buttonText() {
                                      return u(Ce);
                                    },
                                    onChosen: (_e, Re, gt) => {
                                      u(b).chosen?.onChosen?.(l, _e, Re, gt);
                                    },
                                    get value() {
                                      return n()[u(b).chosen?.valueDataKey || ""];
                                    },
                                    get label() {
                                      return n()[u(b).chosen?.labelDataKey || ""];
                                    }
                                  }), R(Je), Le(() => Ye(K, u(b).label)), N(ye, re);
                                }, ee = (ye, re) => {
                                  {
                                    var Ee = (K) => {
                                      He(K, Fe({ level: 3, mt: "10px" }, () => u(b).attrs, {
                                        children: (Je, de) => {
                                          be();
                                          var Ce = Te();
                                          Le(() => Ye(Ce, u(b).label)), N(Je, Ce);
                                        },
                                        $$slots: { default: !0 }
                                      }));
                                    };
                                    le(
                                      ye,
                                      (K) => {
                                        u(b).type === "heading" && K(Ee);
                                      },
                                      re
                                    );
                                  }
                                };
                                le(
                                  se,
                                  (ye) => {
                                    u(b).type === "chosen" ? ye(me) : ye(ee, !1);
                                  },
                                  ne
                                );
                              }
                            };
                            le(
                              ge,
                              (se) => {
                                u(b).type === "select" ? se(ke) : se(ae, !1);
                              },
                              G
                            );
                          }
                        };
                        le(
                          te,
                          (ge) => {
                            u(b).type === "slider" ? ge(pe) : ge(oe, !1);
                          },
                          W
                        );
                      }
                    };
                    le(
                      O,
                      (te) => {
                        u(b).type === "textarea" ? te(F) : te(X, !1);
                      },
                      Z
                    );
                  }
                };
                le(L, (O) => {
                  u(b).type === "input" ? O(A) : O(B, !1);
                });
              }
              N(D, P);
            }), N(j, T);
          };
          le(k, (j) => {
            g && j(M);
          });
        }
        var z = H(k, 2);
        Rt(z, (j) => h = j, () => h);
        var q = H(z, 2);
        {
          var U = (j) => {
            var T = Ob(), _ = fe(T), D = I(_);
            He(D, {
              level: 3,
              mt: "10px",
              children: (A, B) => {
                be();
                var O = Te("输出参数");
                N(A, O);
              },
              $$slots: { default: !0 }
            });
            var b = H(D, 2);
            {
              var P = (A) => {
                De(A, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o, "outputDefs");
                  },
                  children: (B, O) => {
                    var Z = Nb();
                    N(B, Z);
                  },
                  $$slots: { default: !0 }
                });
              };
              le(b, (A) => {
                f.outputDefsAddEnable !== !1 && A(P);
              });
            }
            R(_);
            var L = H(_, 2);
            Rn(L, {}), N(j, T);
          };
          le(q, (j) => {
            f.outputDefsEnable !== !1 && j(U);
          });
        }
        Le(() => {
          Ct(z, f.rootStyle || ""), Nt(z, 1, An(f.rootClass), "svelte-q0cqsa");
        }), N(C, E);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), ce({
    get data() {
      return n();
    },
    set data(C) {
      n(C), m();
    }
  });
}
ie(df, { data: {} }, [], [], !0);
const Ab = () => ({ updateEdgeData: (e, t, n) => {
  const r = Ue.getEdge(e);
  if (!r)
    return;
  const o = typeof t == "function" ? t(r) : t;
  r.data = n?.replace ? o : { ...r.data, ...o }, Ue.updateEdges((i) => i.map((s) => s.id === e ? r : s));
} }), Hb = () => ({ deleteEdge: (e) => {
  Ue.removeEdge(e);
} });
var zb = /* @__PURE__ */ J('<div class="panel-content svelte-80qc4q"><div>边属性设置</div> <div class="setting-title svelte-80qc4q">边条件设置</div> <div class="setting-item svelte-80qc4q"><!></div> <div class="setting-item svelte-80qc4q" style="padding: 8px 0"><!> <!></div></div>'), Rb = /* @__PURE__ */ J("<!> <!> <!> <!>", 1), Ib = /* @__PURE__ */ J('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Bb = {
  hash: "svelte-80qc4q",
  code: ".panel-content.svelte-80qc4q {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-80qc4q {margin:10px 0;font-size:12px;color:#999;}.setting-item.svelte-80qc4q {display:flex;gap:5px;align-items:center;justify-content:end;}"
};
function ff(e, t) {
  ue(t, !0), qe(e, Bb);
  const n = y(t, "onInit", 7), r = pt();
  n()(r);
  let o = /* @__PURE__ */ Me(!1), i = /* @__PURE__ */ Me(null);
  const { updateEdgeData: s } = Ab(), a = (L) => {
    L.preventDefault(), L.dataTransfer && (L.dataTransfer.dropEffect = "move");
  }, l = (L) => {
    L.preventDefault();
    const A = r.screenToFlowPosition({ x: L.clientX - 250, y: L.clientY - 100 }), B = L.dataTransfer?.getData("application/tinyflow");
    if (!B)
      return;
    const O = JSON.parse(B), Z = { id: `node_${gr()}`, position: A, data: {}, ...O };
    Ue.addNode(Z), Ue.selectNodeOnly(Z.id);
  }, { getNode: c } = $b(), d = (L) => {
    const A = c(L.source), B = c(L.target);
    if (L.sourceHandle === "loop_handle" || A.parentId) {
      const O = r.getEdges();
      for (let Z of O)
        if (Z.target === L.target) {
          const F = c(Z.source);
          if (L.sourceHandle === "loop_handle" && F.parentId !== A.id || A.parentId && F.parentId !== A.parentId)
            return !1;
        }
    }
    return !(!A.parentId && B.parentId && B.parentId !== A.id);
  }, { ensureParentInNodesBefore: p } = kb(), f = (L, A) => {
    if (!A.isValid)
      return;
    const B = A.toNode;
    if (B.parentId)
      return;
    const O = A.fromNode, Z = A.fromHandle, F = { position: { ...B.position } };
    if (Z.id === "loop_handle" ? F.parentId = O.id : O.parentId && (F.parentId = O.parentId), F.parentId) {
      const X = c(F.parentId);
      F.position = {
        x: B.position.x - X.position.x,
        y: B.position.y - X.position.y
      }, p(F.parentId, B.id), r.updateNode(B.id, F);
    }
    setTimeout(() => {
      Ue.getEdges().forEach((X) => {
        X.target === B.id && X.source == O.id && (Y(o, !0), Y(i, X, !0));
      });
    });
  }, { getEdgesByTarget: g } = Cb(), h = (L) => {
    L.edges.forEach((A) => {
      A.id === u(i)?.id && (Y(i, null), Y(o, !1));
      const B = c(A.target);
      if (B && B.parentId) {
        const O = g(A.target), Z = c(B.parentId);
        if (O.length === 0)
          r.updateNode(B.id, {
            parentId: void 0,
            position: {
              x: B.position.x + Z.position.x,
              y: B.position.y + Z.position.y
            }
          });
        else {
          let F = !1;
          for (let X = 0; X < O.length; X++) {
            const te = O[X], W = c(te.source);
            if (W.parentId || W.type === "loopNode") {
              F = !0;
              break;
            }
          }
          F || r.updateNode(B.id, {
            parentId: void 0,
            position: {
              x: B.position.x + Z.position.x,
              y: B.position.y + Z.position.y
            }
          });
        }
      }
    });
  }, { deleteEdge: v } = Hb(), C = (L, A) => {
  }, w = (L) => {
  }, E = {
    // ...nodeTypes
  }, x = Gn().customNodes;
  if (x)
    for (let L of Object.keys(x))
      E[L] = df;
  const $ = Gn().onDataChange;
  nt(() => {
    $?.({
      nodes: Ue.getNodes(),
      edges: Ue.getEdges(),
      viewport: Ue.getViewport()
    });
  });
  var k = Ib(), M = I(k);
  const z = /* @__PURE__ */ S(() => ({ ...mb, ...E }));
  var q = Ue.getNodes, U = Ue.setNodes, j = Ue.getEdges, T = Ue.setEdges, _ = Ue.getViewport, D = Ue.setViewport;
  const b = /* @__PURE__ */ S(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: ho.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  pd(M, {
    get nodeTypes() {
      return u(z);
    },
    get nodes() {
      return q();
    },
    set nodes(L) {
      U(L);
    },
    get edges() {
      return j();
    },
    set edges(L) {
      T(L);
    },
    get viewport() {
      return _();
    },
    set viewport(L) {
      D(L);
    },
    class: "tinyflow-logo",
    ondrop: l,
    ondragover: a,
    isValidConnection: d,
    onconnectend: f,
    onconnectstart: C,
    onconnect: w,
    connectionRadius: 50,
    onedgeclick: (L) => {
      Y(o, !0), Y(i, L.edge, !0);
    },
    onbeforeconnect: (L) => ({ ...L, id: gr() }),
    ondelete: h,
    onclick: (L) => {
      const A = L.target;
      A.classList.contains("svelte-flow__edge-interaction") || A.classList.contains("panel-content") || A.closest(".panel-content") || (Y(o, !1), Y(i, null));
    },
    get defaultEdgeOptions() {
      return u(b);
    },
    children: (L, A) => {
      var B = Rb(), O = fe(B);
      kd(O, {});
      var Z = H(O, 2);
      bd(Z, {});
      var F = H(Z, 2);
      _d(F, {});
      var X = H(F, 2);
      {
        var te = (W) => {
          Oo(W, {
            children: (pe, oe) => {
              var ge = zb(), G = H(I(ge), 4), ke = I(G);
              const ae = /* @__PURE__ */ S(() => u(i)?.data?.condition);
              Ge(ke, {
                rows: 3,
                placeholder: "请输入边条件",
                style: "width: 100%",
                get value() {
                  return u(ae);
                },
                onchange: (ee) => {
                  u(i) && s(u(i).id, { condition: ee.target?.value });
                }
              }), R(G);
              var se = H(G, 2), ne = I(se);
              De(ne, {
                onclick: () => {
                  v(u(i)?.id), Y(o, !1);
                },
                children: (ee, ye) => {
                  be();
                  var re = Te("删除");
                  N(ee, re);
                },
                $$slots: { default: !0 }
              });
              var me = H(ne, 2);
              De(me, {
                primary: !0,
                onclick: () => {
                  Y(o, !1);
                },
                children: (ee, ye) => {
                  be();
                  var re = Te("保存");
                  N(ee, re);
                },
                $$slots: { default: !0 }
              }), R(se), R(ge), N(pe, ge);
            },
            $$slots: { default: !0 }
          });
        };
        le(X, (W) => {
          u(o) && W(te);
        });
      }
      N(L, B);
    },
    $$slots: { default: !0 }
  });
  var P = H(M, 2);
  return cf(P, {}), R(k), N(e, k), ce({
    get onInit() {
      return n();
    },
    set onInit(L) {
      n(L), m();
    }
  });
}
ie(ff, { onInit: {} }, [], [], !0);
function qb(e, t) {
  ue(t, !0);
  const n = y(t, "options", 7), r = y(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return Ue.init(o?.nodes || [], o?.edges || []), Tr("tinyflow_options", n()), gd(e, {
    children: (i, s) => {
      ff(i, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), ce({
    get options() {
      return n();
    },
    set options(i) {
      n(i), m();
    },
    get onInit() {
      return r();
    },
    set onInit(i) {
      r(i), m();
    }
  });
}
customElements.define("tinyflow-component", ie(qb, { options: {}, onInit: {} }, [], [], !1));
const Kb = $f((e, t) => {
  const n = Pa(null), r = Pa(null);
  kf(t, () => ({
    getData: () => r.current ? r.current.getData() : (console.warn("Tinyflow instance is not initialized"), null)
  }));
  const { data: o, style: i, className: s } = e;
  return Cf(() => {
    if (n.current) {
      const a = new t2({
        ...e,
        element: n.current
        // data: data
      });
      return r.current = a, () => {
        a.destroy(), r.current = null;
      };
    }
  }, [o]), /* @__PURE__ */ Pf.jsx("div", { ref: n, style: { height: "600px", ...i }, className: s });
});
export {
  Kb as Tinyflow
};
//# sourceMappingURL=index.js.map
