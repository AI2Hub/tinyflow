var ff = Object.defineProperty;
var Ia = (e) => {
  throw TypeError(e);
};
var gf = (e, t, n) => t in e ? ff(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ct = (e, t, n) => gf(e, typeof t != "symbol" ? t + "" : t, n), os = (e, t, n) => t.has(e) || Ia("Cannot " + n);
var ct = (e, t, n) => (os(e, t, "read from private field"), n ? n.call(e) : t.get(e)), rr = (e, t, n) => t.has(e) ? Ia("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), no = (e, t, n, r) => (os(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), za = (e, t, n) => (os(e, t, "access private method"), n);
const hf = "5";
var Gl;
typeof window < "u" && ((Gl = window.__svelte ?? (window.__svelte = {})).v ?? (Gl.v = /* @__PURE__ */ new Set())).add(hf);
let Xr = !1, vf = !1;
function pf() {
  Xr = !0;
}
pf();
const Xs = 1, Ws = 2, jl = 4, mf = 8, yf = 16, wf = 1, _f = 2, Ul = 4, xf = 8, bf = 16, Jl = 1, Cf = 2, Ks = "[", Gs = "[!", js = "]", Cr = {}, Dt = Symbol(), kf = "http://www.w3.org/1999/xhtml", $f = "http://www.w3.org/2000/svg", Ra = !1;
function Di(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
var To = Array.isArray, Ef = Array.prototype.indexOf, Us = Array.from, si = Object.keys, go = Object.defineProperty, Dn = Object.getOwnPropertyDescriptor, Ql = Object.getOwnPropertyDescriptors, Sf = Object.prototype, Pf = Array.prototype, Js = Object.getPrototypeOf, Ba = Object.isExtensible;
function ro(e) {
  return typeof e == "function";
}
const gt = () => {
};
function Nf(e) {
  return e();
}
function ho(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const cn = 2, eu = 4, Vi = 8, Qs = 16, zn = 32, vr = 64, ai = 128, Yt = 256, li = 512, Nt = 1024, _n = 2048, tr = 4096, Vn = 8192, Ai = 16384, Tf = 32768, Wr = 65536, Mf = 1 << 17, Hf = 1 << 19, tu = 1 << 20, _s = 1 << 21, Wn = Symbol("$state"), ea = Symbol("legacy props"), Df = Symbol("");
function Vf(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Af() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Of(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Lf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function If() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function zf(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Rf() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Bf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function qf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Oi(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let De = !1;
function Bt(e) {
  De = e;
}
let Re;
function St(e) {
  if (e === null)
    throw Oi(), Cr;
  return Re = e;
}
function xn() {
  return St(
    /** @type {TemplateNode} */
    /* @__PURE__ */ En(Re)
  );
}
function Y(e) {
  if (De) {
    if (/* @__PURE__ */ En(Re) !== null)
      throw Oi(), Cr;
    Re = e;
  }
}
function Ae(e = 1) {
  if (De) {
    for (var t = e, n = Re; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ En(n);
    Re = n;
  }
}
function xs() {
  for (var e = 0, t = Re; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === js) {
        if (e === 0) return t;
        e -= 1;
      } else (n === Ks || n === Gs) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ En(t)
    );
    t.remove(), t = r;
  }
}
function an(e) {
  if (typeof e != "object" || e === null || Wn in e)
    return e;
  const t = Js(e);
  if (t !== Sf && t !== Pf)
    return e;
  var n = /* @__PURE__ */ new Map(), r = To(e), o = /* @__PURE__ */ $t(0), i = Ue, s = (a) => {
    var l = Ue;
    bn(i);
    var u = a();
    return bn(l), u;
  };
  return r && n.set("length", /* @__PURE__ */ $t(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, l, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Rf();
        var c = n.get(l);
        return c === void 0 ? (c = s(() => /* @__PURE__ */ $t(u.value)), n.set(l, c)) : J(
          c,
          s(() => an(u.value))
        ), !0;
      },
      deleteProperty(a, l) {
        var u = n.get(l);
        if (u === void 0)
          l in a && n.set(
            l,
            s(() => /* @__PURE__ */ $t(Dt))
          );
        else {
          if (r && typeof l == "string") {
            var c = (
              /** @type {Source<number>} */
              n.get("length")
            ), d = Number(l);
            Number.isInteger(d) && d < c.v && J(c, d);
          }
          J(u, Dt), qa(o);
        }
        return !0;
      },
      get(a, l, u) {
        var h;
        if (l === Wn)
          return e;
        var c = n.get(l), d = l in a;
        if (c === void 0 && (!d || (h = Dn(a, l)) != null && h.writable) && (c = s(() => /* @__PURE__ */ $t(an(d ? a[l] : Dt))), n.set(l, c)), c !== void 0) {
          var f = g(c);
          return f === Dt ? void 0 : f;
        }
        return Reflect.get(a, l, u);
      },
      getOwnPropertyDescriptor(a, l) {
        var u = Reflect.getOwnPropertyDescriptor(a, l);
        if (u && "value" in u) {
          var c = n.get(l);
          c && (u.value = g(c));
        } else if (u === void 0) {
          var d = n.get(l), f = d == null ? void 0 : d.v;
          if (d !== void 0 && f !== Dt)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return u;
      },
      has(a, l) {
        var f;
        if (l === Wn)
          return !0;
        var u = n.get(l), c = u !== void 0 && u.v !== Dt || Reflect.has(a, l);
        if (u !== void 0 || Je !== null && (!c || (f = Dn(a, l)) != null && f.writable)) {
          u === void 0 && (u = s(() => /* @__PURE__ */ $t(c ? an(a[l]) : Dt)), n.set(l, u));
          var d = g(u);
          if (d === Dt)
            return !1;
        }
        return c;
      },
      set(a, l, u, c) {
        var m;
        var d = n.get(l), f = l in a;
        if (r && l === "length")
          for (var h = u; h < /** @type {Source<number>} */
          d.v; h += 1) {
            var v = n.get(h + "");
            v !== void 0 ? J(v, Dt) : h in a && (v = s(() => /* @__PURE__ */ $t(Dt)), n.set(h + "", v));
          }
        d === void 0 ? (!f || (m = Dn(a, l)) != null && m.writable) && (d = s(() => /* @__PURE__ */ $t(void 0)), J(
          d,
          s(() => an(u))
        ), n.set(l, d)) : (f = d.v !== Dt, J(
          d,
          s(() => an(u))
        ));
        var _ = Reflect.getOwnPropertyDescriptor(a, l);
        if (_ != null && _.set && _.set.call(c, u), !f) {
          if (r && typeof l == "string") {
            var x = (
              /** @type {Source<number>} */
              n.get("length")
            ), k = Number(l);
            Number.isInteger(k) && k >= x.v && J(x, k + 1);
          }
          qa(o);
        }
        return !0;
      },
      ownKeys(a) {
        g(o);
        var l = Reflect.ownKeys(a).filter((d) => {
          var f = n.get(d);
          return f === void 0 || f.v !== Dt;
        });
        for (var [u, c] of n)
          c.v !== Dt && !(u in a) && l.push(u);
        return l;
      },
      setPrototypeOf() {
        Bf();
      }
    }
  );
}
function qa(e, t = 1) {
  J(e, e.v + t);
}
var Vt, nu, ru, ou;
function bs() {
  if (Vt === void 0) {
    Vt = window, nu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    ru = Dn(t, "firstChild").get, ou = Dn(t, "nextSibling").get, Ba(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ba(n) && (n.__t = void 0);
  }
}
function On(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Et(e) {
  return ru.call(e);
}
// @__NO_SIDE_EFFECTS__
function En(e) {
  return ou.call(e);
}
function F(e, t) {
  if (!De)
    return /* @__PURE__ */ Et(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Et(Re)
  );
  if (n === null)
    n = Re.appendChild(On());
  else if (t && n.nodeType !== 3) {
    var r = On();
    return n == null || n.before(r), St(r), r;
  }
  return St(n), n;
}
function we(e, t) {
  if (!De) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Et(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ En(n) : n;
  }
  return Re;
}
function B(e, t = 1, n = !1) {
  let r = De ? Re : e;
  for (var o; t--; )
    o = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ En(r);
  if (!De)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var s = On();
    return r === null ? o == null || o.after(s) : r.before(s), St(s), s;
  }
  return St(r), /** @type {TemplateNode} */
  r;
}
function ta(e) {
  e.textContent = "";
}
function iu(e) {
  return e === this.v;
}
function na(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ra(e) {
  return !na(e, this.v);
}
// @__NO_SIDE_EFFECTS__
function Hr(e) {
  var t = cn | _n, n = Ue !== null && Ue.f & cn ? (
    /** @type {Derived} */
    Ue
  ) : null;
  return Je === null || n !== null && n.f & Yt ? t |= Yt : Je.f |= tu, {
    ctx: Xe,
    deps: null,
    effects: null,
    equals: iu,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? Je
  };
}
// @__NO_SIDE_EFFECTS__
function Ne(e) {
  const t = /* @__PURE__ */ Hr(e);
  return mu(t), t;
}
// @__NO_SIDE_EFFECTS__
function xe(e) {
  const t = /* @__PURE__ */ Hr(e);
  return t.equals = ra, t;
}
function su(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Ut(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Yf(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & cn))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function au(e) {
  var t, n = Je;
  Un(Yf(e));
  try {
    su(e), t = xu(e);
  } finally {
    Un(n);
  }
  return t;
}
function lu(e) {
  var t = au(e), n = (Fn || e.f & Yt) && e.deps !== null ? tr : Nt;
  Jt(e, n), e.equals(t) || (e.v = t, e.wv = wu());
}
function uu(e) {
  Je === null && Ue === null && Of(), Ue !== null && Ue.f & Yt && Je === null && Af(), Ho && Vf();
}
function Zf(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function pr(e, t, n, r = !0) {
  var o = Je, i = {
    ctx: Xe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | _n,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n)
    try {
      Ii(i), i.f |= Tf;
    } catch (l) {
      throw Ut(i), l;
    }
  else t !== null && zi(i);
  var s = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (tu | ai)) === 0;
  if (!s && r && (o !== null && Zf(i, o), Ue !== null && Ue.f & cn)) {
    var a = (
      /** @type {Derived} */
      Ue
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return i;
}
function oa(e) {
  const t = pr(Vi, null, !1);
  return Jt(t, Nt), t.teardown = e, t;
}
function un(e) {
  uu();
  var t = Je !== null && (Je.f & zn) !== 0 && Xe !== null && !Xe.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Xe
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: Je,
      reaction: Ue
    });
  } else {
    var r = Rt(e);
    return r;
  }
}
function Ff(e) {
  return uu(), Kr(e);
}
function Xf(e) {
  const t = pr(vr, e, !0);
  return () => {
    Ut(t);
  };
}
function Wf(e) {
  const t = pr(vr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Dr(t, () => {
      Ut(t), r(void 0);
    }) : (Ut(t), r(void 0));
  });
}
function Rt(e) {
  return pr(eu, e, !1);
}
function he(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    Xe
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Kr(() => {
    e(), !r.ran && (r.ran = !0, J(n.l.r2, !0), Cn(t));
  });
}
function mt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    Xe
  );
  Kr(() => {
    if (g(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        n.f & Nt && Jt(n, tr), Gr(n) && Ii(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function Kr(e) {
  return pr(Vi, e, !0);
}
function $e(e, t = [], n = Hr) {
  const r = t.map(n);
  return mr(() => e(...r.map(g)));
}
function mr(e, t = 0) {
  return pr(Vi | Qs | t, e, !0);
}
function Ln(e, t = !0) {
  return pr(Vi | zn, e, !0, t);
}
function cu(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ho, r = Ue;
    Za(!0), bn(null);
    try {
      t.call(null);
    } finally {
      Za(n), bn(r);
    }
  }
}
function du(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    n.f & vr ? n.parent = null : Ut(n, t), n = r;
  }
}
function Kf(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & zn || Ut(t), t = n;
  }
}
function Ut(e, t = !0) {
  var n = !1;
  if ((t || e.f & Hf) && e.nodes_start !== null) {
    for (var r = e.nodes_start, o = e.nodes_end; r !== null; ) {
      var i = r === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ En(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  du(e, t && !n), fi(e, 0), Jt(e, Ai);
  var s = e.transitions;
  if (s !== null)
    for (const l of s)
      l.stop();
  cu(e);
  var a = e.parent;
  a !== null && a.first !== null && fu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function fu(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Dr(e, t) {
  var n = [];
  ia(e, n, !0), gu(n, () => {
    Ut(e), t && t();
  });
}
function gu(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function ia(e, t, n) {
  if (!(e.f & Vn)) {
    if (e.f ^= Vn, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var o = r.next, i = (r.f & Wr) !== 0 || (r.f & zn) !== 0;
      ia(r, t, i ? n : !1), r = o;
    }
  }
}
function vo(e) {
  hu(e, !0);
}
function hu(e, t) {
  if (e.f & Vn) {
    e.f ^= Vn, e.f & Nt || (e.f ^= Nt), Gr(e) && (Jt(e, _n), zi(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & Wr) !== 0 || (n.f & zn) !== 0;
      hu(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
const Gf = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let po = [], mo = [];
function vu() {
  var e = po;
  po = [], ho(e);
}
function pu() {
  var e = mo;
  mo = [], ho(e);
}
function Mo(e) {
  po.length === 0 && queueMicrotask(vu), po.push(e);
}
function jf(e) {
  mo.length === 0 && Gf(pu), mo.push(e);
}
function Ya() {
  po.length > 0 && vu(), mo.length > 0 && pu();
}
let Qo = !1, ui = !1, ci = null, sr = !1, Ho = !1;
function Za(e) {
  Ho = e;
}
let fo = [];
let Ue = null, mn = !1;
function bn(e) {
  Ue = e;
}
let Je = null;
function Un(e) {
  Je = e;
}
let Pt = null;
function Uf(e) {
  Pt = e;
}
function mu(e) {
  Ue !== null && Ue.f & _s && (Pt === null ? Uf([e]) : Pt.push(e));
}
let kt = null, zt = 0, Kt = null;
function Jf(e) {
  Kt = e;
}
let yu = 1, di = 0, Fn = !1;
function wu() {
  return ++yu;
}
function Gr(e) {
  var d;
  var t = e.f;
  if (t & _n)
    return !0;
  if (t & tr) {
    var n = e.deps, r = (t & Yt) !== 0;
    if (n !== null) {
      var o, i, s = (t & li) !== 0, a = r && Je !== null && !Fn, l = n.length;
      if (s || a) {
        var u = (
          /** @type {Derived} */
          e
        ), c = u.parent;
        for (o = 0; o < l; o++)
          i = n[o], (s || !((d = i == null ? void 0 : i.reactions) != null && d.includes(u))) && (i.reactions ?? (i.reactions = [])).push(u);
        s && (u.f ^= li), a && c !== null && !(c.f & Yt) && (u.f ^= Yt);
      }
      for (o = 0; o < l; o++)
        if (i = n[o], Gr(
          /** @type {Derived} */
          i
        ) && lu(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || Je !== null && !Fn) && Jt(e, Nt);
  }
  return !1;
}
function Qf(e, t) {
  for (var n = t; n !== null; ) {
    if (n.f & ai)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= ai;
      }
    n = n.parent;
  }
  throw Qo = !1, e;
}
function e1(e) {
  return (e.f & Ai) === 0 && (e.parent === null || (e.parent.f & ai) === 0);
}
function Li(e, t, n, r) {
  if (Qo) {
    if (n === null && (Qo = !1), e1(t))
      throw e;
    return;
  }
  n !== null && (Qo = !0);
  {
    Qf(e, t);
    return;
  }
}
function _u(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var o = 0; o < r.length; o++) {
      var i = r[o];
      Pt != null && Pt.includes(e) || (i.f & cn ? _u(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? Jt(i, _n) : i.f & Nt && Jt(i, tr), zi(
        /** @type {Effect} */
        i
      )));
    }
}
function xu(e) {
  var h;
  var t = kt, n = zt, r = Kt, o = Ue, i = Fn, s = Pt, a = Xe, l = mn, u = e.f;
  kt = /** @type {null | Value[]} */
  null, zt = 0, Kt = null, Fn = (u & Yt) !== 0 && (mn || !sr || Ue === null), Ue = u & (zn | vr) ? null : e, Pt = null, Xa(e.ctx), mn = !1, di++, e.f |= _s;
  try {
    var c = (
      /** @type {Function} */
      (0, e.fn)()
    ), d = e.deps;
    if (kt !== null) {
      var f;
      if (fi(e, zt), d !== null && zt > 0)
        for (d.length = zt + kt.length, f = 0; f < kt.length; f++)
          d[zt + f] = kt[f];
      else
        e.deps = d = kt;
      if (!Fn)
        for (f = zt; f < d.length; f++)
          ((h = d[f]).reactions ?? (h.reactions = [])).push(e);
    } else d !== null && zt < d.length && (fi(e, zt), d.length = zt);
    if (Ri() && Kt !== null && !mn && d !== null && !(e.f & (cn | tr | _n)))
      for (f = 0; f < /** @type {Source[]} */
      Kt.length; f++)
        _u(
          Kt[f],
          /** @type {Effect} */
          e
        );
    return o !== e && (di++, Kt !== null && (r === null ? r = Kt : r.push(.../** @type {Source[]} */
    Kt))), c;
  } finally {
    kt = t, zt = n, Kt = r, Ue = o, Fn = i, Pt = s, Xa(a), mn = l, e.f ^= _s;
  }
}
function t1(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Ef.call(n, e);
    if (r !== -1) {
      var o = n.length - 1;
      o === 0 ? n = t.reactions = null : (n[r] = n[o], n.pop());
    }
  }
  n === null && t.f & cn && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (kt === null || !kt.includes(t)) && (Jt(t, tr), t.f & (Yt | li) || (t.f ^= li), su(
    /** @type {Derived} **/
    t
  ), fi(
    /** @type {Derived} **/
    t,
    0
  ));
}
function fi(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      t1(e, n[r]);
}
function Ii(e) {
  var t = e.f;
  if (!(t & Ai)) {
    Jt(e, Nt);
    var n = Je, r = Xe, o = sr;
    Je = e, sr = !0;
    try {
      t & Qs ? Kf(e) : du(e), cu(e);
      var i = xu(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = yu;
      var s = e.deps, a;
      Ra && vf && e.f & _n;
    } catch (l) {
      Li(l, e, n, r || e.ctx);
    } finally {
      sr = o, Je = n;
    }
  }
}
function n1() {
  try {
    Lf();
  } catch (e) {
    if (ci !== null)
      Li(e, ci, null);
    else
      throw e;
  }
}
function bu() {
  var e = sr;
  try {
    var t = 0;
    for (sr = !0; fo.length > 0; ) {
      t++ > 1e3 && n1();
      var n = fo, r = n.length;
      fo = [];
      for (var o = 0; o < r; o++) {
        var i = o1(n[o]);
        r1(i);
      }
      yo.clear();
    }
  } finally {
    ui = !1, sr = e, ci = null;
  }
}
function r1(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if (!(r.f & (Ai | Vn)))
        try {
          Gr(r) && (Ii(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? fu(r) : r.fn = null));
        } catch (o) {
          Li(o, r, null, r.ctx);
        }
    }
}
function zi(e) {
  ui || (ui = !0, queueMicrotask(bu));
  for (var t = ci = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (vr | zn)) {
      if (!(n & Nt)) return;
      t.f ^= Nt;
    }
  }
  fo.push(t);
}
function o1(e) {
  for (var t = [], n = e; n !== null; ) {
    var r = n.f, o = (r & (zn | vr)) !== 0, i = o && (r & Nt) !== 0;
    if (!i && !(r & Vn)) {
      if (r & eu)
        t.push(n);
      else if (o)
        n.f ^= Nt;
      else {
        var s = Ue;
        try {
          Ue = n, Gr(n) && Ii(n);
        } catch (u) {
          Li(u, n, null, n.ctx);
        } finally {
          Ue = s;
        }
      }
      var a = n.first;
      if (a !== null) {
        n = a;
        continue;
      }
    }
    var l = n.parent;
    for (n = n.next; n === null && l !== null; )
      n = l.next, l = l.parent;
  }
  return t;
}
function y(e) {
  var t;
  for (Ya(); fo.length > 0; )
    ui = !0, bu(), Ya();
  return (
    /** @type {T} */
    t
  );
}
function g(e) {
  var t = e.f, n = (t & cn) !== 0;
  if (Ue !== null && !mn) {
    if (!(Pt != null && Pt.includes(e))) {
      var r = Ue.deps;
      e.rv < di && (e.rv = di, kt === null && r !== null && r[zt] === e ? zt++ : kt === null ? kt = [e] : (!Fn || !kt.includes(e)) && kt.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), i = o.parent;
    i !== null && !(i.f & Yt) && (o.f ^= Yt);
  }
  return n && (o = /** @type {Derived} */
  e, Gr(o) && lu(o)), Ho && yo.has(e) ? yo.get(e) : e.v;
}
function Cn(e) {
  var t = mn;
  try {
    return mn = !0, e();
  } finally {
    mn = t;
  }
}
const i1 = -7169;
function Jt(e, t) {
  e.f = e.f & i1 | t;
}
function ee(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Wn in e)
      Cs(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Wn in n && Cs(n);
      }
  }
}
function Cs(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Cs(e[r], t);
      } catch {
      }
    const n = Js(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Ql(n);
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
const yo = /* @__PURE__ */ new Map();
function Vr(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: iu,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function $t(e, t) {
  const n = Vr(e);
  return mu(n), n;
}
// @__NO_SIDE_EFFECTS__
function se(e, t = !1) {
  var r;
  const n = Vr(e);
  return t || (n.equals = ra), Xr && Xe !== null && Xe.l !== null && ((r = Xe.l).s ?? (r.s = [])).push(n), n;
}
function J(e, t, n = !1) {
  Ue !== null && !mn && Ri() && Ue.f & (cn | Qs) && !(Pt != null && Pt.includes(e)) && qf();
  let r = n ? an(t) : t;
  return ks(e, r);
}
function ks(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Ho ? yo.set(e, t) : yo.set(e, n), e.v = t, e.f & cn && (e.f & _n && au(
      /** @type {Derived} */
      e
    ), Jt(e, e.f & Yt ? tr : Nt)), e.wv = wu(), Cu(e, _n), Ri() && Je !== null && Je.f & Nt && !(Je.f & (zn | vr)) && (Kt === null ? Jf([e]) : Kt.push(e));
  }
  return t;
}
function Fa(e, t = 1) {
  var n = g(e), r = t === 1 ? n++ : n--;
  return J(e, n), r;
}
function Cu(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = Ri(), o = n.length, i = 0; i < o; i++) {
      var s = n[i], a = s.f;
      a & _n || !r && s === Je || (Jt(s, t), a & (Nt | Yt) && (a & cn ? Cu(
        /** @type {Derived} */
        s,
        tr
      ) : zi(
        /** @type {Effect} */
        s
      )));
    }
}
let Xe = null;
function Xa(e) {
  Xe = e;
}
function ur(e) {
  return (
    /** @type {T} */
    sa().get(e)
  );
}
function Ar(e, t) {
  return sa().set(e, t), t;
}
function s1(e) {
  return sa().has(e);
}
function de(e, t = !1, n) {
  var r = Xe = {
    p: Xe,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  Xr && !t && (Xe.l = {
    s: null,
    u: null,
    r1: [],
    r2: Vr(!1)
  }), oa(() => {
    r.d = !0;
  });
}
function fe(e) {
  const t = Xe;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var n = Je, r = Ue;
      t.e = null;
      try {
        for (var o = 0; o < s.length; o++) {
          var i = s[o];
          Un(i.effect), bn(i.reaction), Rt(i.fn);
        }
      } finally {
        Un(n), bn(r);
      }
    }
    Xe = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function Ri() {
  return !Xr || Xe !== null && Xe.l === null;
}
function sa(e) {
  return Xe === null && Di(), Xe.c ?? (Xe.c = new Map(a1(Xe) || void 0));
}
function a1(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function l1(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const u1 = [
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
function c1(e) {
  return u1.includes(e);
}
const d1 = {
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
function f1(e) {
  return e = e.toLowerCase(), d1[e] ?? e;
}
const g1 = ["touchstart", "touchmove"];
function h1(e) {
  return g1.includes(e);
}
const v1 = (
  /** @type {const} */
  ["textarea", "script", "style", "title"]
);
function p1(e) {
  return v1.includes(
    /** @type {RAW_TEXT_ELEMENTS[number]} */
    e
  );
}
function m1(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Mo(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function y1(e) {
  De && /* @__PURE__ */ Et(e) !== null && ta(e);
}
let Wa = !1;
function w1() {
  Wa || (Wa = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = n.__on_r) == null || t.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function _1(e) {
  var t = Ue, n = Je;
  bn(null), Un(null);
  try {
    return e();
  } finally {
    bn(t), Un(n);
  }
}
const ku = /* @__PURE__ */ new Set(), $s = /* @__PURE__ */ new Set();
function $u(e, t, n, r = {}) {
  function o(i) {
    if (r.capture || ao.call(t, i), !i.cancelBubble)
      return _1(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Mo(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function nt(e, t, n, r, o) {
  var i = { capture: r, passive: o }, s = $u(e, t, n, i);
  (t === document.body || t === window || t === document) && oa(() => {
    t.removeEventListener(e, s, i);
  });
}
function jr(e) {
  for (var t = 0; t < e.length; t++)
    ku.add(e[t]);
  for (var n of $s)
    n(e);
}
function ao(e) {
  var m;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, o = ((m = e.composedPath) == null ? void 0 : m.call(e)) || [], i = (
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
    var u = o.indexOf(t);
    if (u === -1)
      return;
    l <= u && (s = l);
  }
  if (i = /** @type {Element} */
  o[s] || e.target, i !== t) {
    go(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var c = Ue, d = Je;
    bn(null), Un(null);
    try {
      for (var f, h = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var _ = i["__" + r];
          if (_ != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (To(_)) {
              var [x, ...k] = _;
              x.apply(i, [e, ...k]);
            } else
              _.call(i, e);
        } catch (b) {
          f ? h.push(b) : f = b;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        i = v;
      }
      if (f) {
        for (let b of h)
          queueMicrotask(() => {
            throw b;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, bn(c), Un(d);
    }
  }
}
function aa(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Ot(e, t) {
  var n = (
    /** @type {Effect} */
    Je
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ie(e, t) {
  var n = (t & Jl) !== 0, r = (t & Cf) !== 0, o, i = !e.startsWith("<!>");
  return () => {
    if (De)
      return Ot(Re, null), Re;
    o === void 0 && (o = aa(i ? e : "<!>" + e), n || (o = /** @type {Node} */
    /* @__PURE__ */ Et(o)));
    var s = (
      /** @type {TemplateNode} */
      r || nu ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Et(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Ot(a, l);
    } else
      Ot(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function ke(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), o = (t & Jl) !== 0, i = `<${n}>${r ? e : "<!>" + e}</${n}>`, s;
  return () => {
    if (De)
      return Ot(Re, null), Re;
    if (!s) {
      var a = (
        /** @type {DocumentFragment} */
        aa(i)
      ), l = (
        /** @type {Element} */
        /* @__PURE__ */ Et(a)
      );
      if (o)
        for (s = document.createDocumentFragment(); /* @__PURE__ */ Et(l); )
          s.appendChild(
            /** @type {Node} */
            /* @__PURE__ */ Et(l)
          );
      else
        s = /** @type {Element} */
        /* @__PURE__ */ Et(l);
    }
    var u = (
      /** @type {TemplateNode} */
      s.cloneNode(!0)
    );
    if (o) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Et(u)
      ), d = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Ot(c, d);
    } else
      Ot(u, u);
    return u;
  };
}
function Ye(e = "") {
  if (!De) {
    var t = On(e + "");
    return Ot(t, t), t;
  }
  var n = Re;
  return n.nodeType !== 3 && (n.before(n = On()), St(n)), Ot(n, n), n;
}
function et() {
  if (De)
    return Ot(Re, null), Re;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = On();
  return e.append(t, n), Ot(t, n), e;
}
function V(e, t) {
  if (De) {
    Je.nodes_end = Re, xn();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function dt(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Eu(e, t) {
  return Su(e, t);
}
function x1(e, t) {
  bs(), t.intro = t.intro ?? !1;
  const n = t.target, r = De, o = Re;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Et(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== Ks); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ En(i);
    if (!i)
      throw Cr;
    Bt(!0), St(
      /** @type {Comment} */
      i
    ), xn();
    const s = Su(e, { ...t, anchor: i });
    if (Re === null || Re.nodeType !== 8 || /** @type {Comment} */
    Re.data !== js)
      throw Oi(), Cr;
    return Bt(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === Cr)
      return t.recover === !1 && If(), bs(), ta(n), Bt(!1), Eu(e, t);
    throw s;
  } finally {
    Bt(r), St(o);
  }
}
const _r = /* @__PURE__ */ new Map();
function Su(e, { target: t, anchor: n, props: r = {}, events: o, context: i, intro: s = !0 }) {
  bs();
  var a = /* @__PURE__ */ new Set(), l = (d) => {
    for (var f = 0; f < d.length; f++) {
      var h = d[f];
      if (!a.has(h)) {
        a.add(h);
        var v = h1(h);
        t.addEventListener(h, ao, { passive: v });
        var _ = _r.get(h);
        _ === void 0 ? (document.addEventListener(h, ao, { passive: v }), _r.set(h, 1)) : _r.set(h, _ + 1);
      }
    }
  };
  l(Us(ku)), $s.add(l);
  var u = void 0, c = Wf(() => {
    var d = n ?? t.appendChild(On());
    return Ln(() => {
      if (i) {
        de({});
        var f = (
          /** @type {ComponentContext} */
          Xe
        );
        f.c = i;
      }
      o && (r.$$events = o), De && Ot(
        /** @type {TemplateNode} */
        d,
        null
      ), u = e(d, r) || {}, De && (Je.nodes_end = Re), i && fe();
    }), () => {
      var v;
      for (var f of a) {
        t.removeEventListener(f, ao);
        var h = (
          /** @type {number} */
          _r.get(f)
        );
        --h === 0 ? (document.removeEventListener(f, ao), _r.delete(f)) : _r.set(f, h);
      }
      $s.delete(l), d !== n && ((v = d.parentNode) == null || v.removeChild(d));
    };
  });
  return Es.set(u, c), u;
}
let Es = /* @__PURE__ */ new WeakMap();
function b1(e, t) {
  const n = Es.get(e);
  return n ? (Es.delete(e), n(t)) : Promise.resolve();
}
function pe(e, t, [n, r] = [0, 0]) {
  De && n === 0 && xn();
  var o = e, i = null, s = null, a = Dt, l = n > 0 ? Wr : 0, u = !1;
  const c = (f, h = !0) => {
    u = !0, d(h, f);
  }, d = (f, h) => {
    if (a === (a = f)) return;
    let v = !1;
    if (De && r !== -1) {
      if (n === 0) {
        const x = (
          /** @type {Comment} */
          o.data
        );
        x === Ks ? r = 0 : x === Gs ? r = 1 / 0 : (r = parseInt(x.substring(1)), r !== r && (r = a ? 1 / 0 : -1));
      }
      const _ = r > n;
      !!a === _ && (o = xs(), St(o), Bt(!1), v = !0, r = -1);
    }
    a ? (i ? vo(i) : h && (i = Ln(() => h(o))), s && Dr(s, () => {
      s = null;
    })) : (s ? vo(s) : h && (s = Ln(() => h(o, [n + 1, r]))), i && Dr(i, () => {
      i = null;
    })), v && Bt(!0);
  };
  mr(() => {
    u = !1, t(c), u || d(null, null);
  }, l), De && (o = Re);
}
function Or(e, t) {
  return t;
}
function C1(e, t, n, r) {
  for (var o = [], i = t.length, s = 0; s < i; s++)
    ia(t[s].e, o, !0);
  var a = i > 0 && o.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    ta(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), qn(e, t[0].prev, t[i - 1].next);
  }
  gu(o, () => {
    for (var u = 0; u < i; u++) {
      var c = t[u];
      a || (r.delete(c.k), qn(e, c.prev, c.next)), Ut(c.e, !a);
    }
  });
}
function Tt(e, t, n, r, o, i = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = (t & jl) !== 0;
  if (l) {
    var u = (
      /** @type {Element} */
      e
    );
    s = De ? St(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Et(u)
    ) : u.appendChild(On());
  }
  De && xn();
  var c = null, d = !1, f = /* @__PURE__ */ xe(() => {
    var h = n();
    return To(h) ? h : h == null ? [] : Us(h);
  });
  mr(() => {
    var h = g(f), v = h.length;
    if (d && v === 0)
      return;
    d = v === 0;
    let _ = !1;
    if (De) {
      var x = (
        /** @type {Comment} */
        s.data === Gs
      );
      x !== (v === 0) && (s = xs(), St(s), Bt(!1), _ = !0);
    }
    if (De) {
      for (var k = null, m, b = 0; b < v; b++) {
        if (Re.nodeType === 8 && /** @type {Comment} */
        Re.data === js) {
          s = /** @type {Comment} */
          Re, _ = !0, Bt(!1);
          break;
        }
        var p = h[b], C = r(p, b);
        m = Pu(
          Re,
          a,
          k,
          null,
          p,
          C,
          b,
          o,
          t,
          n
        ), a.items.set(C, m), k = m;
      }
      v > 0 && St(xs());
    }
    De || k1(h, a, s, o, t, r, n), i !== null && (v === 0 ? c ? vo(c) : c = Ln(() => i(s)) : c !== null && Dr(c, () => {
      c = null;
    })), _ && Bt(!0), g(f);
  }), De && (s = Re);
}
function k1(e, t, n, r, o, i, s) {
  var E, N, $, T;
  var a = (o & mf) !== 0, l = (o & (Xs | Ws)) !== 0, u = e.length, c = t.items, d = t.first, f = d, h, v = null, _, x = [], k = [], m, b, p, C;
  if (a)
    for (C = 0; C < u; C += 1)
      m = e[C], b = i(m, C), p = c.get(b), p !== void 0 && ((E = p.a) == null || E.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(p));
  for (C = 0; C < u; C += 1) {
    if (m = e[C], b = i(m, C), p = c.get(b), p === void 0) {
      var H = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : n;
      v = Pu(
        H,
        t,
        v,
        v === null ? t.first : v.next,
        m,
        b,
        C,
        r,
        o,
        s
      ), c.set(b, v), x = [], k = [], f = v.next;
      continue;
    }
    if (l && $1(p, m, C, o), p.e.f & Vn && (vo(p.e), a && ((N = p.a) == null || N.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(p))), p !== f) {
      if (h !== void 0 && h.has(p)) {
        if (x.length < k.length) {
          var S = k[0], D;
          v = S.prev;
          var L = x[0], A = x[x.length - 1];
          for (D = 0; D < x.length; D += 1)
            Ka(x[D], S, n);
          for (D = 0; D < k.length; D += 1)
            h.delete(k[D]);
          qn(t, L.prev, A.next), qn(t, v, L), qn(t, A, S), f = S, v = A, C -= 1, x = [], k = [];
        } else
          h.delete(p), Ka(p, f, n), qn(t, p.prev, p.next), qn(t, p, v === null ? t.first : v.next), qn(t, v, p), v = p;
        continue;
      }
      for (x = [], k = []; f !== null && f.k !== b; )
        f.e.f & Vn || (h ?? (h = /* @__PURE__ */ new Set())).add(f), k.push(f), f = f.next;
      if (f === null)
        continue;
      p = f;
    }
    x.push(p), v = p, f = p.next;
  }
  if (f !== null || h !== void 0) {
    for (var I = h === void 0 ? [] : Us(h); f !== null; )
      f.e.f & Vn || I.push(f), f = f.next;
    var O = I.length;
    if (O > 0) {
      var R = o & jl && u === 0 ? n : null;
      if (a) {
        for (C = 0; C < O; C += 1)
          ($ = I[C].a) == null || $.measure();
        for (C = 0; C < O; C += 1)
          (T = I[C].a) == null || T.fix();
      }
      C1(t, I, R, c);
    }
  }
  a && Mo(() => {
    var P;
    if (_ !== void 0)
      for (p of _)
        (P = p.a) == null || P.apply();
  }), Je.first = t.first && t.first.e, Je.last = v && v.e;
}
function $1(e, t, n, r) {
  r & Xs && ks(e.v, t), r & Ws ? ks(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Pu(e, t, n, r, o, i, s, a, l, u) {
  var c = (l & Xs) !== 0, d = (l & yf) === 0, f = c ? d ? /* @__PURE__ */ se(o) : Vr(o) : o, h = l & Ws ? Vr(s) : s, v = {
    i: h,
    v: f,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    return v.e = Ln(() => a(e, f, h, u), De), v.e.prev = n && n.e, v.e.next = r && r.e, n === null ? t.first = v : (n.next = v, n.e.next = v.e), r !== null && (r.prev = v, r.e.prev = v.e), v;
  } finally {
  }
}
function Ka(e, t, n) {
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
      /* @__PURE__ */ En(i)
    );
    o.before(i), i = s;
  }
}
function qn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function la(e, t, n, r, o) {
  var i = e, s = "", a;
  mr(() => {
    if (s === (s = t() ?? "")) {
      De && xn();
      return;
    }
    a !== void 0 && (Ut(a), a = void 0), s !== "" && (a = Ln(() => {
      if (De) {
        Re.data;
        for (var l = xn(), u = l; l !== null && (l.nodeType !== 8 || /** @type {Comment} */
        l.data !== ""); )
          u = l, l = /** @type {TemplateNode} */
          /* @__PURE__ */ En(l);
        if (l === null)
          throw Oi(), Cr;
        Ot(Re, u), i = St(l);
        return;
      }
      var c = s + "", d = aa(c);
      Ot(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Et(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), i.before(d);
    }));
  });
}
function wt(e, t, n, r, o) {
  var a;
  De && xn();
  var i = (a = t.$$slots) == null ? void 0 : a[n], s = !1;
  i === !0 && (i = t[n === "default" ? "children" : n], s = !0), i === void 0 || i(e, s ? () => r : r);
}
function E1(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const n in e.$$slots)
    t[n] = !0;
  return t;
}
function cr(e, t, ...n) {
  var r = e, o = gt, i;
  mr(() => {
    o !== (o = t()) && (i && (Ut(i), i = null), i = Ln(() => (
      /** @type {SnippetFn} */
      o(r, ...n)
    )));
  }, Wr), De && (r = Re);
}
function Nu(e, t, n) {
  De && xn();
  var r = e, o, i;
  mr(() => {
    o !== (o = t()) && (i && (Dr(i), i = null), o && (i = Ln(() => n(r, o))));
  }, Wr), De && (r = Re);
}
function S1(e, t, n, r, o, i) {
  let s = De;
  De && xn();
  var a, l, u = null;
  De && Re.nodeType === 1 && (u = /** @type {Element} */
  Re, xn());
  var c = (
    /** @type {TemplateNode} */
    De ? Re : e
  ), d;
  mr(() => {
    const f = t() || null;
    var h = f === "svg" ? $f : null;
    f !== a && (d && (f === null ? Dr(d, () => {
      d = null, l = null;
    }) : f === l ? vo(d) : Ut(d)), f && f !== l && (d = Ln(() => {
      if (u = De ? (
        /** @type {Element} */
        u
      ) : h ? document.createElementNS(h, f) : document.createElement(f), Ot(u, u), r) {
        De && p1(f) && u.append(document.createComment(""));
        var v = (
          /** @type {TemplateNode} */
          De ? /* @__PURE__ */ Et(u) : u.appendChild(On())
        );
        De && (v === null ? Bt(!1) : St(v)), r(u, v);
      }
      Je.nodes_end = u, c.before(u);
    })), a = f, a && (l = a));
  }, Wr), s && (Bt(!0), St(c));
}
function tt(e, t) {
  Mo(() => {
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
function yt(e, t, n) {
  Rt(() => {
    var r = Cn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var o = !1, i = (
        /** @type {any} */
        {}
      );
      Kr(() => {
        var s = n();
        ee(s), o && na(i, s) && (i = s, r.update(s));
      }), o = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Tu(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Tu(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function P1() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Tu(e)) && (r && (r += " "), r += t);
  return r;
}
function gn(e) {
  return typeof e == "object" ? P1(e) : e ?? "";
}
const Ga = [...` 	
\r\f \v\uFEFF`];
function N1(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (t && (r = r ? r + " " + t : t), n) {
    for (var o in n)
      if (n[o])
        r = r ? r + " " + o : o;
      else if (r.length)
        for (var i = o.length, s = 0; (s = r.indexOf(o, s)) >= 0; ) {
          var a = s + i;
          (s === 0 || Ga.includes(r[s - 1])) && (a === r.length || Ga.includes(r[a])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(a + 1) : s = a;
        }
  }
  return r === "" ? null : r;
}
function ja(e, t = !1) {
  var n = t ? " !important;" : ";", r = "";
  for (var o in e) {
    var i = e[o];
    i != null && i !== "" && (r += " " + o + ": " + i + n);
  }
  return r;
}
function is(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function T1(e, t) {
  if (t) {
    var n = "", r, o;
    if (Array.isArray(t) ? (r = t[0], o = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, s = 0, a = !1, l = [];
      r && l.push(...Object.keys(r).map(is)), o && l.push(...Object.keys(o).map(is));
      var u = 0, c = -1;
      const _ = e.length;
      for (var d = 0; d < _; d++) {
        var f = e[d];
        if (a ? f === "/" && e[d - 1] === "*" && (a = !1) : i ? i === f && (i = !1) : f === "/" && e[d + 1] === "*" ? a = !0 : f === '"' || f === "'" ? i = f : f === "(" ? s++ : f === ")" && s--, !a && i === !1 && s === 0) {
          if (f === ":" && c === -1)
            c = d;
          else if (f === ";" || d === _ - 1) {
            if (c !== -1) {
              var h = is(e.substring(u, c).trim());
              if (!l.includes(h)) {
                f !== ";" && d++;
                var v = e.substring(u, d).trim();
                n += " " + v + ";";
              }
            }
            u = d + 1, c = -1;
          }
        }
      }
    }
    return r && (n += ja(r)), o && (n += ja(o, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function _t(e, t, n, r, o, i) {
  var s = e.__className;
  if (De || s !== n || s === void 0) {
    var a = N1(n, r, i);
    (!De || a !== e.getAttribute("class")) && (a == null ? e.removeAttribute("class") : t ? e.className = a : e.setAttribute("class", a)), e.__className = n;
  } else if (i && o !== i)
    for (var l in i) {
      var u = !!i[l];
      (o == null || u !== !!o[l]) && e.classList.toggle(l, u);
    }
  return i;
}
function ss(e, t = {}, n, r) {
  for (var o in n) {
    var i = n[o];
    t[o] !== i && (n[o] == null ? e.style.removeProperty(o) : e.style.setProperty(o, i, r));
  }
}
function ft(e, t, n, r) {
  var o = e.__style;
  if (De || o !== t) {
    var i = T1(t, r);
    (!De || i !== e.getAttribute("style")) && (i == null ? e.removeAttribute("style") : e.style.cssText = i), e.__style = t;
  } else r && (Array.isArray(r) ? (ss(e, n == null ? void 0 : n[0], r[0]), ss(e, n == null ? void 0 : n[1], r[1], "important")) : ss(e, n, r));
  return r;
}
const oo = Symbol("class"), or = Symbol("style"), Mu = Symbol("is custom element"), Hu = Symbol("is html");
function ar(e) {
  if (De) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          be(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          be(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = n, jf(n), w1();
  }
}
function as(e, t) {
  var n = Bi(e);
  n.value === (n.value = // treat null and undefined the same for the initial value
  t ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t ?? "");
}
function M1(e, t) {
  var n = Bi(e);
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function H1(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function be(e, t, n, r) {
  var o = Bi(e);
  De && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = n) && (t === "loading" && (e[Df] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Du(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Qt(e, t, n, r, o = !1) {
  var i = Bi(e), s = i[Mu], a = !i[Hu];
  let l = De && s;
  l && Bt(!1);
  var u = t || {}, c = e.tagName === "OPTION";
  for (var d in t)
    d in n || (n[d] = null);
  n.class ? n.class = gn(n.class) : (r || n[oo]) && (n.class = null), n[or] && (n.style ?? (n.style = null));
  var f = Du(e);
  for (const b in n) {
    let p = n[b];
    if (c && b === "value" && p == null) {
      e.value = e.__value = "", u[b] = p;
      continue;
    }
    if (b === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      _t(e, h, p, r, t == null ? void 0 : t[oo], n[oo]), u[b] = p, u[oo] = n[oo];
      continue;
    }
    if (b === "style") {
      ft(e, p, t == null ? void 0 : t[or], n[or]), u[b] = p, u[or] = n[or];
      continue;
    }
    var v = u[b];
    if (p !== v) {
      u[b] = p;
      var _ = b[0] + b[1];
      if (_ !== "$$")
        if (_ === "on") {
          const C = {}, H = "$$" + b;
          let S = b.slice(2);
          var x = c1(S);
          if (l1(S) && (S = S.slice(0, -7), C.capture = !0), !x && v) {
            if (p != null) continue;
            e.removeEventListener(S, u[H], C), u[H] = null;
          }
          if (p != null)
            if (x)
              e[`__${S}`] = p, jr([S]);
            else {
              let D = function(L) {
                u[b].call(this, L);
              };
              u[H] = $u(S, e, D, C);
            }
          else x && (e[`__${S}`] = void 0);
        } else if (b === "style")
          be(e, b, p);
        else if (b === "autofocus")
          m1(
            /** @type {HTMLElement} */
            e,
            !!p
          );
        else if (!s && (b === "__value" || b === "value" && p != null))
          e.value = e.__value = p;
        else if (b === "selected" && c)
          H1(
            /** @type {HTMLOptionElement} */
            e,
            p
          );
        else {
          var k = b;
          a || (k = f1(k));
          var m = k === "defaultValue" || k === "defaultChecked";
          if (p == null && !s && !m)
            if (i[b] = null, k === "value" || k === "checked") {
              let C = (
                /** @type {HTMLInputElement} */
                e
              );
              const H = t === void 0;
              if (k === "value") {
                let S = C.defaultValue;
                C.removeAttribute(k), C.defaultValue = S, C.value = C.__value = H ? S : null;
              } else {
                let S = C.defaultChecked;
                C.removeAttribute(k), C.defaultChecked = S, C.checked = H ? S : !1;
              }
            } else
              e.removeAttribute(b);
          else m || f.includes(k) && (s || typeof p != "string") ? e[k] = p : typeof p != "function" && be(e, k, p);
        }
    }
  }
  return l && Bt(!0), u;
}
function Bi(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Mu]: e.nodeName.includes("-"),
      [Hu]: e.namespaceURI === kf
    })
  );
}
var Ua = /* @__PURE__ */ new Map();
function Du(e) {
  var t = Ua.get(e.nodeName);
  if (t) return t;
  Ua.set(e.nodeName, t = []);
  for (var n, r = e, o = Element.prototype; o !== r; ) {
    n = Ql(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Js(r);
  }
  return t;
}
var Zn, Mr, No, Mi, Vu;
const Hi = class Hi {
  /** @param {ResizeObserverOptions} options */
  constructor(t) {
    rr(this, Mi);
    /** */
    rr(this, Zn, /* @__PURE__ */ new WeakMap());
    /** @type {ResizeObserver | undefined} */
    rr(this, Mr);
    /** @type {ResizeObserverOptions} */
    rr(this, No);
    no(this, No, t);
  }
  /**
   * @param {Element} element
   * @param {(entry: ResizeObserverEntry) => any} listener
   */
  observe(t, n) {
    var r = ct(this, Zn).get(t) || /* @__PURE__ */ new Set();
    return r.add(n), ct(this, Zn).set(t, r), za(this, Mi, Vu).call(this).observe(t, ct(this, No)), () => {
      var o = ct(this, Zn).get(t);
      o.delete(n), o.size === 0 && (ct(this, Zn).delete(t), ct(this, Mr).unobserve(t));
    };
  }
};
Zn = new WeakMap(), Mr = new WeakMap(), No = new WeakMap(), Mi = new WeakSet(), Vu = function() {
  return ct(this, Mr) ?? no(this, Mr, new ResizeObserver(
    /** @param {any} entries */
    (t) => {
      for (var n of t) {
        Hi.entries.set(n.target, n);
        for (var r of ct(this, Zn).get(n.target) || [])
          r(n);
      }
    }
  ));
}, /** @static */
Ct(Hi, "entries", /* @__PURE__ */ new WeakMap());
let Ss = Hi;
var D1 = /* @__PURE__ */ new Ss({
  box: "border-box"
});
function Ja(e, t, n) {
  var r = D1.observe(e, () => n(e[t]));
  Rt(() => (Cn(() => n(e[t])), r));
}
function Qa(e, t) {
  return e === t || (e == null ? void 0 : e[Wn]) === t;
}
function kn(e = {}, t, n, r) {
  return Rt(() => {
    var o, i;
    return Kr(() => {
      o = i, i = [], Cn(() => {
        e !== n(...i) && (t(e, ...i), o && Qa(n(...o), e) && t(null, ...o));
      });
    }), () => {
      Mo(() => {
        i && Qa(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Ie(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    Xe
  ), n = t.l.u;
  if (!n) return;
  let r = () => ee(t.s);
  if (e) {
    let o = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Hr(() => {
      let a = !1;
      const l = t.s;
      for (const u in l)
        l[u] !== i[u] && (i[u] = l[u], a = !0);
      return a && o++, o;
    });
    r = () => g(s);
  }
  n.b.length && Ff(() => {
    el(t, r), ho(n.b);
  }), un(() => {
    const o = Cn(() => n.m.map(Nf));
    return () => {
      for (const i of o)
        typeof i == "function" && i();
    };
  }), n.a.length && un(() => {
    el(t, r), ho(n.a);
  });
}
function el(e, t) {
  if (e.l.s)
    for (const n of e.l.s) g(n);
  t();
}
function Fe(e, t) {
  var i;
  var n = (
    /** @type {Record<string, Function[] | Function>} */
    (i = e.$$events) == null ? void 0 : i[t.type]
  ), r = To(n) ? n.slice() : n == null ? [] : [n];
  for (var o of r)
    o.call(this, t);
}
function tn(e) {
  Xe === null && Di(), Xr && Xe.l !== null ? A1(Xe).m.push(e) : un(() => {
    const t = Cn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function ua(e) {
  Xe === null && Di(), tn(() => () => Cn(e));
}
function V1(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function qi() {
  const e = Xe;
  return e === null && Di(), (t, n, r) => {
    var i;
    const o = (
      /** @type {Record<string, Function | Function[]>} */
      (i = e.s.$$events) == null ? void 0 : i[
        /** @type {any} */
        t
      ]
    );
    if (o) {
      const s = To(o) ? o.slice() : [o], a = V1(
        /** @type {string} */
        t,
        n,
        r
      );
      for (const l of s)
        l.call(e.x, a);
      return !a.defaultPrevented;
    }
    return !0;
  };
}
function A1(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function ca(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), gt;
  const r = Cn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const xr = [];
function Wt(e, t) {
  return {
    subscribe: Ce(e, t).subscribe
  };
}
function Ce(e, t = gt) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(a) {
    if (na(e, a) && (e = a, n)) {
      const l = !xr.length;
      for (const u of r)
        u[1](), xr.push(u, e);
      if (l) {
        for (let u = 0; u < xr.length; u += 2)
          xr[u][0](xr[u + 1]);
        xr.length = 0;
      }
    }
  }
  function i(a) {
    o(a(
      /** @type {T} */
      e
    ));
  }
  function s(a, l = gt) {
    const u = [a, l];
    return r.add(u), r.size === 1 && (n = t(o, i) || gt), a(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
function Kn(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return Wt(n, (s, a) => {
    let l = !1;
    const u = [];
    let c = 0, d = gt;
    const f = () => {
      if (c)
        return;
      d();
      const v = t(r ? u[0] : u, s, a);
      i ? s(v) : d = typeof v == "function" ? v : gt;
    }, h = o.map(
      (v, _) => ca(
        v,
        (x) => {
          u[_] = x, c &= ~(1 << _), l && f();
        },
        () => {
          c |= 1 << _;
        }
      )
    );
    return l = !0, f(), function() {
      ho(h), d(), l = !1;
    };
  });
}
function K(e) {
  let t;
  return ca(e, (n) => t = n)(), t;
}
let Xo = !1, Ps = Symbol();
function ne(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ se(void 0),
    unsubscribe: gt
  });
  if (r.store !== e && !(Ps in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = gt;
    else {
      var o = !0;
      r.unsubscribe = ca(e, (i) => {
        o ? r.source.v = i : J(r.source, i);
      }), o = !1;
    }
  return e && Ps in n ? K(e) : g(r.source);
}
function O1(e, t, n) {
  let r = n[t];
  return r && r.store !== e && (r.unsubscribe(), r.unsubscribe = gt), e;
}
function gi(e, t) {
  return e.set(t), t;
}
function rt() {
  const e = {};
  function t() {
    oa(() => {
      for (var n in e)
        e[n].unsubscribe();
      go(e, Ps, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function L1(e) {
  var t = Xo;
  try {
    return Xo = !1, [e(), Xo];
  } finally {
    Xo = t;
  }
}
const I1 = {
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
function xt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    I1
  );
}
const z1 = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return g(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    return t in e.special || (e.special[t] = w(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      Ul
    )), e.special[t](n), Fa(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), Fa(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function at(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: Vr(0) }, z1);
}
const R1 = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (ro(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let o = e.props[r];
      ro(o) && (o = o());
      const i = Dn(o, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (ro(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const o = Dn(r, t);
        return o && !o.configurable && (o.configurable = !0), o;
      }
    }
  },
  has(e, t) {
    if (t === Wn || t === ea) return !1;
    for (let n of e.props)
      if (ro(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      ro(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function lt(...e) {
  return new Proxy({ props: e }, R1);
}
function tl(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function w(e, t, n, r) {
  var H;
  var o = (n & wf) !== 0, i = !Xr || (n & _f) !== 0, s = (n & xf) !== 0, a = (n & bf) !== 0, l = !1, u;
  s ? [u, l] = L1(() => (
    /** @type {V} */
    e[t]
  )) : u = /** @type {V} */
  e[t];
  var c = Wn in e || ea in e, d = s && (((H = Dn(e, t)) == null ? void 0 : H.set) ?? (c && t in e && ((S) => e[t] = S))) || void 0, f = (
    /** @type {V} */
    r
  ), h = !0, v = !1, _ = () => (v = !0, h && (h = !1, a ? f = Cn(
    /** @type {() => V} */
    r
  ) : f = /** @type {V} */
  r), f);
  u === void 0 && r !== void 0 && (d && i && zf(), u = _(), d && d(u));
  var x;
  if (i)
    x = () => {
      var S = (
        /** @type {V} */
        e[t]
      );
      return S === void 0 ? _() : (h = !0, v = !1, S);
    };
  else {
    var k = (o ? Hr : xe)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    k.f |= Mf, x = () => {
      var S = g(k);
      return S !== void 0 && (f = /** @type {V} */
      void 0), S === void 0 ? f : S;
    };
  }
  if (!(n & Ul))
    return x;
  if (d) {
    var m = e.$$legacy;
    return function(S, D) {
      return arguments.length > 0 ? ((!i || !D || m || l) && d(D ? x() : S), S) : x();
    };
  }
  var b = !1, p = /* @__PURE__ */ se(u), C = /* @__PURE__ */ Hr(() => {
    var S = x(), D = g(p);
    return b ? (b = !1, D) : p.v = S;
  });
  return s && g(C), o || (C.equals = ra), function(S, D) {
    if (arguments.length > 0) {
      const L = D ? g(C) : i && s ? an(S) : S;
      if (!C.equals(L)) {
        if (b = !0, J(p, L), v && f !== void 0 && (f = L), tl(C))
          return S;
        Cn(() => g(C));
      }
      return S;
    }
    return tl(C) ? C.v : g(C);
  };
}
function B1(e) {
  return new q1(e);
}
var Tn, Gt;
class q1 {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    rr(this, Tn);
    /** @type {Record<string, any>} */
    rr(this, Gt);
    var i;
    var n = /* @__PURE__ */ new Map(), r = (s, a) => {
      var l = /* @__PURE__ */ se(a);
      return n.set(s, l), l;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, a) {
          return g(n.get(a) ?? r(a, Reflect.get(s, a)));
        },
        has(s, a) {
          return a === ea ? !0 : (g(n.get(a) ?? r(a, Reflect.get(s, a))), Reflect.has(s, a));
        },
        set(s, a, l) {
          return J(n.get(a) ?? r(a, l), l), Reflect.set(s, a, l);
        }
      }
    );
    no(this, Gt, (t.hydrate ? x1 : Eu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && y(), no(this, Tn, o.$$events);
    for (const s of Object.keys(ct(this, Gt)))
      s === "$set" || s === "$destroy" || s === "$on" || go(this, s, {
        get() {
          return ct(this, Gt)[s];
        },
        /** @param {any} value */
        set(a) {
          ct(this, Gt)[s] = a;
        },
        enumerable: !0
      });
    ct(this, Gt).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(o, s);
    }, ct(this, Gt).$destroy = () => {
      b1(ct(this, Gt));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    ct(this, Gt).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    ct(this, Tn)[t] = ct(this, Tn)[t] || [];
    const r = (...o) => n.call(this, ...o);
    return ct(this, Tn)[t].push(r), () => {
      ct(this, Tn)[t] = ct(this, Tn)[t].filter(
        /** @param {any} fn */
        (o) => o !== r
      );
    };
  }
  $destroy() {
    ct(this, Gt).$destroy();
  }
}
Tn = new WeakMap(), Gt = new WeakMap();
let Au;
typeof HTMLElement == "function" && (Au = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    Ct(this, "$$ctor");
    /** Slots */
    Ct(this, "$$s");
    /** @type {any} The Svelte component instance */
    Ct(this, "$$c");
    /** Whether or not the custom element is connected */
    Ct(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Ct(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Ct(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Ct(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Ct(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Ct(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Ct(this, "$$me");
    this.$$ctor = t, this.$$s = n, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, n, r) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const o = this.$$c.$on(t, n);
      this.$$l_u.set(n, o);
    }
    super.addEventListener(t, n, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, n, r) {
    if (super.removeEventListener(t, n, r), this.$$c) {
      const o = this.$$l_u.get(n);
      o && (o(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(o) {
        return (i) => {
          const s = document.createElement("slot");
          o !== "default" && (s.name = o), V(i, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = Y1(this);
      for (const o of this.$$s)
        o in r && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), n.default = !0) : n[o] = t(o));
      for (const o of this.attributes) {
        const i = this.$$g_p(o.name);
        i in this.$$d || (this.$$d[i] = ei(i, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = B1({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Xf(() => {
        Kr(() => {
          var o;
          this.$$r = !0;
          for (const i of si(this.$$c)) {
            if (!((o = this.$$p_d[i]) != null && o.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const s = ei(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, s);
          }
          this.$$r = !1;
        });
      });
      for (const o in this.$$l)
        for (const i of this.$$l[o]) {
          const s = this.$$c.$on(o, i);
          this.$$l_u.set(i, s);
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
  attributeChangedCallback(t, n, r) {
    var o;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = ei(t, r, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return si(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function ei(e, t, n, r) {
  var i;
  const o = (i = n[e]) == null ? void 0 : i.type;
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
function Y1(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ue(e, t, n, r, o, i) {
  let s = class extends Au {
    constructor() {
      super(e, n, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return si(t).map(
        (a) => (t[a].attribute || a).toLowerCase()
      );
    }
  };
  return si(t).forEach((a) => {
    go(s.prototype, a, {
      get() {
        return this.$$c && a in this.$$c ? this.$$c[a] : this.$$d[a];
      },
      set(l) {
        var d;
        l = ei(a, l, t), this.$$d[a] = l;
        var u = this.$$c;
        if (u) {
          var c = (d = Dn(u, a)) == null ? void 0 : d.get;
          c ? u[a] = l : u.$set({ [a]: l });
        }
      }
    });
  }), r.forEach((a) => {
    go(s.prototype, a, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[a];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
function Mt(e) {
  if (typeof e == "string" || typeof e == "number") return "" + e;
  let t = "";
  if (Array.isArray(e))
    for (let n = 0, r; n < e.length; n++)
      (r = Mt(e[n])) !== "" && (t += (t && " ") + r);
  else
    for (let n in e)
      e[n] && (t += (t && " ") + n);
  return t;
}
var Z1 = { value: () => {
} };
function Yi() {
  for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
    if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ti(n);
}
function ti(e) {
  this._ = e;
}
function F1(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var r = "", o = n.indexOf(".");
    if (o >= 0 && (r = n.slice(o + 1), n = n.slice(0, o)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ti.prototype = Yi.prototype = {
  constructor: ti,
  on: function(e, t) {
    var n = this._, r = F1(e + "", n), o, i = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++i < s; ) if ((o = (e = r[i]).type) && (o = X1(n[o], e.name))) return o;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++i < s; )
      if (o = (e = r[i]).type) n[o] = nl(n[o], e.name, t);
      else if (t == null) for (o in n) n[o] = nl(n[o], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new ti(e);
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
function X1(e, t) {
  for (var n = 0, r = e.length, o; n < r; ++n)
    if ((o = e[n]).name === t)
      return o.value;
}
function nl(e, t, n) {
  for (var r = 0, o = e.length; r < o; ++r)
    if (e[r].name === t) {
      e[r] = Z1, e = e.slice(0, r).concat(e.slice(r + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Ns = "http://www.w3.org/1999/xhtml";
const rl = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ns,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Zi(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), rl.hasOwnProperty(t) ? { space: rl[t], local: e } : e;
}
function W1(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Ns && t.documentElement.namespaceURI === Ns ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function K1(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Ou(e) {
  var t = Zi(e);
  return (t.local ? K1 : W1)(t);
}
function G1() {
}
function da(e) {
  return e == null ? G1 : function() {
    return this.querySelector(e);
  };
}
function j1(e) {
  typeof e != "function" && (e = da(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = new Array(s), l, u, c = 0; c < s; ++c)
      (l = i[c]) && (u = e.call(l, l.__data__, c, i)) && ("__data__" in l && (u.__data__ = l.__data__), a[c] = u);
  return new Ft(r, this._parents);
}
function U1(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function J1() {
  return [];
}
function Lu(e) {
  return e == null ? J1 : function() {
    return this.querySelectorAll(e);
  };
}
function Q1(e) {
  return function() {
    return U1(e.apply(this, arguments));
  };
}
function eg(e) {
  typeof e == "function" ? e = Q1(e) : e = Lu(e);
  for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
    for (var s = t[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (r.push(e.call(l, l.__data__, u, s)), o.push(l));
  return new Ft(r, o);
}
function Iu(e) {
  return function() {
    return this.matches(e);
  };
}
function zu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var tg = Array.prototype.find;
function ng(e) {
  return function() {
    return tg.call(this.children, e);
  };
}
function rg() {
  return this.firstElementChild;
}
function og(e) {
  return this.select(e == null ? rg : ng(typeof e == "function" ? e : zu(e)));
}
var ig = Array.prototype.filter;
function sg() {
  return Array.from(this.children);
}
function ag(e) {
  return function() {
    return ig.call(this.children, e);
  };
}
function lg(e) {
  return this.selectAll(e == null ? sg : ag(typeof e == "function" ? e : zu(e)));
}
function ug(e) {
  typeof e != "function" && (e = Iu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new Ft(r, this._parents);
}
function Ru(e) {
  return new Array(e.length);
}
function cg() {
  return new Ft(this._enter || this._groups.map(Ru), this._parents);
}
function hi(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
hi.prototype = {
  constructor: hi,
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
function dg(e) {
  return function() {
    return e;
  };
}
function fg(e, t, n, r, o, i) {
  for (var s = 0, a, l = t.length, u = i.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = i[s], r[s] = a) : n[s] = new hi(e, i[s]);
  for (; s < l; ++s)
    (a = t[s]) && (o[s] = a);
}
function gg(e, t, n, r, o, i, s) {
  var a, l, u = /* @__PURE__ */ new Map(), c = t.length, d = i.length, f = new Array(c), h;
  for (a = 0; a < c; ++a)
    (l = t[a]) && (f[a] = h = s.call(l, l.__data__, a, t) + "", u.has(h) ? o[a] = l : u.set(h, l));
  for (a = 0; a < d; ++a)
    h = s.call(e, i[a], a, i) + "", (l = u.get(h)) ? (r[a] = l, l.__data__ = i[a], u.delete(h)) : n[a] = new hi(e, i[a]);
  for (a = 0; a < c; ++a)
    (l = t[a]) && u.get(f[a]) === l && (o[a] = l);
}
function hg(e) {
  return e.__data__;
}
function vg(e, t) {
  if (!arguments.length) return Array.from(this, hg);
  var n = t ? gg : fg, r = this._parents, o = this._groups;
  typeof e != "function" && (e = dg(e));
  for (var i = o.length, s = new Array(i), a = new Array(i), l = new Array(i), u = 0; u < i; ++u) {
    var c = r[u], d = o[u], f = d.length, h = pg(e.call(c, c && c.__data__, u, r)), v = h.length, _ = a[u] = new Array(v), x = s[u] = new Array(v), k = l[u] = new Array(f);
    n(c, d, _, x, k, h, t);
    for (var m = 0, b = 0, p, C; m < v; ++m)
      if (p = _[m]) {
        for (m >= b && (b = m + 1); !(C = x[b]) && ++b < v; ) ;
        p._next = C || null;
      }
  }
  return s = new Ft(s, r), s._enter = a, s._exit = l, s;
}
function pg(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function mg() {
  return new Ft(this._exit || this._groups.map(Ru), this._parents);
}
function yg(e, t, n) {
  var r = this.enter(), o = this, i = this.exit();
  return typeof e == "function" ? (r = e(r), r && (r = r.selection())) : r = r.append(e + ""), t != null && (o = t(o), o && (o = o.selection())), n == null ? i.remove() : n(i), r && o ? r.merge(o).order() : o;
}
function wg(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, o = n.length, i = r.length, s = Math.min(o, i), a = new Array(o), l = 0; l < s; ++l)
    for (var u = n[l], c = r[l], d = u.length, f = a[l] = new Array(d), h, v = 0; v < d; ++v)
      (h = u[v] || c[v]) && (f[v] = h);
  for (; l < o; ++l)
    a[l] = n[l];
  return new Ft(a, this._parents);
}
function _g() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var r = e[t], o = r.length - 1, i = r[o], s; --o >= 0; )
      (s = r[o]) && (i && s.compareDocumentPosition(i) ^ 4 && i.parentNode.insertBefore(s, i), i = s);
  return this;
}
function xg(e) {
  e || (e = bg);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
    for (var s = n[i], a = s.length, l = o[i] = new Array(a), u, c = 0; c < a; ++c)
      (u = s[c]) && (l[c] = u);
    l.sort(t);
  }
  return new Ft(o, this._parents).order();
}
function bg(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Cg() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function kg() {
  return Array.from(this);
}
function $g() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
      var s = r[o];
      if (s) return s;
    }
  return null;
}
function Eg() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Sg() {
  return !this.node();
}
function Pg(e) {
  for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
    for (var o = t[n], i = 0, s = o.length, a; i < s; ++i)
      (a = o[i]) && e.call(a, a.__data__, i, o);
  return this;
}
function Ng(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Tg(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Mg(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Hg(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Dg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Vg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Ag(e, t) {
  var n = Zi(e);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Tg : Ng : typeof t == "function" ? n.local ? Vg : Dg : n.local ? Hg : Mg)(n, t));
}
function Bu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Og(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Lg(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Ig(e, t, n) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
  };
}
function zg(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Og : typeof t == "function" ? Ig : Lg)(e, t, n ?? "")) : Lr(this.node(), e);
}
function Lr(e, t) {
  return e.style.getPropertyValue(t) || Bu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Rg(e) {
  return function() {
    delete this[e];
  };
}
function Bg(e, t) {
  return function() {
    this[e] = t;
  };
}
function qg(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Yg(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Rg : typeof t == "function" ? qg : Bg)(e, t)) : this.node()[e];
}
function qu(e) {
  return e.trim().split(/^|\s+/);
}
function fa(e) {
  return e.classList || new Yu(e);
}
function Yu(e) {
  this._node = e, this._names = qu(e.getAttribute("class") || "");
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
function Zu(e, t) {
  for (var n = fa(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
}
function Fu(e, t) {
  for (var n = fa(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
}
function Zg(e) {
  return function() {
    Zu(this, e);
  };
}
function Fg(e) {
  return function() {
    Fu(this, e);
  };
}
function Xg(e, t) {
  return function() {
    (t.apply(this, arguments) ? Zu : Fu)(this, e);
  };
}
function Wg(e, t) {
  var n = qu(e + "");
  if (arguments.length < 2) {
    for (var r = fa(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Xg : t ? Zg : Fg)(n, t));
}
function Kg() {
  this.textContent = "";
}
function Gg(e) {
  return function() {
    this.textContent = e;
  };
}
function jg(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Ug(e) {
  return arguments.length ? this.each(e == null ? Kg : (typeof e == "function" ? jg : Gg)(e)) : this.node().textContent;
}
function Jg() {
  this.innerHTML = "";
}
function Qg(e) {
  return function() {
    this.innerHTML = e;
  };
}
function eh(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function th(e) {
  return arguments.length ? this.each(e == null ? Jg : (typeof e == "function" ? eh : Qg)(e)) : this.node().innerHTML;
}
function nh() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function rh() {
  return this.each(nh);
}
function oh() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ih() {
  return this.each(oh);
}
function sh(e) {
  var t = typeof e == "function" ? e : Ou(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function ah() {
  return null;
}
function lh(e, t) {
  var n = typeof e == "function" ? e : Ou(e), r = t == null ? ah : typeof t == "function" ? t : da(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function uh() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function ch() {
  return this.each(uh);
}
function dh() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function fh() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function gh(e) {
  return this.select(e ? fh : dh);
}
function hh(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function vh(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function ph(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", r = t.indexOf(".");
    return r >= 0 && (n = t.slice(r + 1), t = t.slice(0, r)), { type: t, name: n };
  });
}
function mh(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, r = -1, o = t.length, i; n < o; ++n)
        i = t[n], (!e.type || i.type === e.type) && i.name === e.name ? this.removeEventListener(i.type, i.listener, i.options) : t[++r] = i;
      ++r ? t.length = r : delete this.__on;
    }
  };
}
function yh(e, t, n) {
  return function() {
    var r = this.__on, o, i = vh(t);
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
function wh(e, t, n) {
  var r = ph(e + ""), o, i = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, u = a.length, c; l < u; ++l)
        for (o = 0, c = a[l]; o < i; ++o)
          if ((s = r[o]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (a = t ? yh : mh, o = 0; o < i; ++o) this.each(a(r[o], t, n));
  return this;
}
function Xu(e, t, n) {
  var r = Bu(e), o = r.CustomEvent;
  typeof o == "function" ? o = new o(t, n) : (o = r.document.createEvent("Event"), n ? (o.initEvent(t, n.bubbles, n.cancelable), o.detail = n.detail) : o.initEvent(t, !1, !1)), e.dispatchEvent(o);
}
function _h(e, t) {
  return function() {
    return Xu(this, e, t);
  };
}
function xh(e, t) {
  return function() {
    return Xu(this, e, t.apply(this, arguments));
  };
}
function bh(e, t) {
  return this.each((typeof t == "function" ? xh : _h)(e, t));
}
function* Ch() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var r = e[t], o = 0, i = r.length, s; o < i; ++o)
      (s = r[o]) && (yield s);
}
var Wu = [null];
function Ft(e, t) {
  this._groups = e, this._parents = t;
}
function Do() {
  return new Ft([[document.documentElement]], Wu);
}
function kh() {
  return this;
}
Ft.prototype = Do.prototype = {
  constructor: Ft,
  select: j1,
  selectAll: eg,
  selectChild: og,
  selectChildren: lg,
  filter: ug,
  data: vg,
  enter: cg,
  exit: mg,
  join: yg,
  merge: wg,
  selection: kh,
  order: _g,
  sort: xg,
  call: Cg,
  nodes: kg,
  node: $g,
  size: Eg,
  empty: Sg,
  each: Pg,
  attr: Ag,
  style: zg,
  property: Yg,
  classed: Wg,
  text: Ug,
  html: th,
  raise: rh,
  lower: ih,
  append: sh,
  insert: lh,
  remove: ch,
  clone: gh,
  datum: hh,
  on: wh,
  dispatch: bh,
  [Symbol.iterator]: Ch
};
function jt(e) {
  return typeof e == "string" ? new Ft([[document.querySelector(e)]], [document.documentElement]) : new Ft([[e]], Wu);
}
function $h(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function sn(e, t) {
  if (e = $h(e), t === void 0 && (t = e.currentTarget), t) {
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
const Eh = { passive: !1 }, wo = { capture: !0, passive: !1 };
function ls(e) {
  e.stopImmediatePropagation();
}
function kr(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Ku(e) {
  var t = e.document.documentElement, n = jt(e).on("dragstart.drag", kr, wo);
  "onselectstart" in t ? n.on("selectstart.drag", kr, wo) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Gu(e, t) {
  var n = e.document.documentElement, r = jt(e).on("dragstart.drag", null);
  t && (r.on("click.drag", kr, wo), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Wo = (e) => () => e;
function Ts(e, {
  sourceEvent: t,
  subject: n,
  target: r,
  identifier: o,
  active: i,
  x: s,
  y: a,
  dx: l,
  dy: u,
  dispatch: c
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
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
Ts.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function Sh(e) {
  return !e.ctrlKey && !e.button;
}
function Ph() {
  return this.parentNode;
}
function Nh(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Th() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Mh() {
  var e = Sh, t = Ph, n = Nh, r = Th, o = {}, i = Yi("start", "drag", "end"), s = 0, a, l, u, c, d = 0;
  function f(p) {
    p.on("mousedown.drag", h).filter(r).on("touchstart.drag", x).on("touchmove.drag", k, Eh).on("touchend.drag touchcancel.drag", m).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function h(p, C) {
    if (!(c || !e.call(this, p, C))) {
      var H = b(this, t.call(this, p, C), p, C, "mouse");
      H && (jt(p.view).on("mousemove.drag", v, wo).on("mouseup.drag", _, wo), Ku(p.view), ls(p), u = !1, a = p.clientX, l = p.clientY, H("start", p));
    }
  }
  function v(p) {
    if (kr(p), !u) {
      var C = p.clientX - a, H = p.clientY - l;
      u = C * C + H * H > d;
    }
    o.mouse("drag", p);
  }
  function _(p) {
    jt(p.view).on("mousemove.drag mouseup.drag", null), Gu(p.view, u), kr(p), o.mouse("end", p);
  }
  function x(p, C) {
    if (e.call(this, p, C)) {
      var H = p.changedTouches, S = t.call(this, p, C), D = H.length, L, A;
      for (L = 0; L < D; ++L)
        (A = b(this, S, p, C, H[L].identifier, H[L])) && (ls(p), A("start", p, H[L]));
    }
  }
  function k(p) {
    var C = p.changedTouches, H = C.length, S, D;
    for (S = 0; S < H; ++S)
      (D = o[C[S].identifier]) && (kr(p), D("drag", p, C[S]));
  }
  function m(p) {
    var C = p.changedTouches, H = C.length, S, D;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), S = 0; S < H; ++S)
      (D = o[C[S].identifier]) && (ls(p), D("end", p, C[S]));
  }
  function b(p, C, H, S, D, L) {
    var A = i.copy(), I = sn(L || H, C), O, R, E;
    if ((E = n.call(p, new Ts("beforestart", {
      sourceEvent: H,
      target: f,
      identifier: D,
      active: s,
      x: I[0],
      y: I[1],
      dx: 0,
      dy: 0,
      dispatch: A
    }), S)) != null)
      return O = E.x - I[0] || 0, R = E.y - I[1] || 0, function N($, T, P) {
        var M = I, z;
        switch ($) {
          case "start":
            o[D] = N, z = s++;
            break;
          case "end":
            delete o[D], --s;
          // falls through
          case "drag":
            I = sn(P || T, C), z = s;
            break;
        }
        A.call(
          $,
          p,
          new Ts($, {
            sourceEvent: T,
            subject: E,
            target: f,
            identifier: D,
            active: z,
            x: I[0] + O,
            y: I[1] + R,
            dx: I[0] - M[0],
            dy: I[1] - M[1],
            dispatch: A
          }),
          S
        );
      };
  }
  return f.filter = function(p) {
    return arguments.length ? (e = typeof p == "function" ? p : Wo(!!p), f) : e;
  }, f.container = function(p) {
    return arguments.length ? (t = typeof p == "function" ? p : Wo(p), f) : t;
  }, f.subject = function(p) {
    return arguments.length ? (n = typeof p == "function" ? p : Wo(p), f) : n;
  }, f.touchable = function(p) {
    return arguments.length ? (r = typeof p == "function" ? p : Wo(!!p), f) : r;
  }, f.on = function() {
    var p = i.on.apply(i, arguments);
    return p === i ? f : p;
  }, f.clickDistance = function(p) {
    return arguments.length ? (d = (p = +p) * p, f) : Math.sqrt(d);
  }, f;
}
function ga(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function ju(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Vo() {
}
var _o = 0.7, vi = 1 / _o, $r = "\\s*([+-]?\\d+)\\s*", xo = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", yn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Hh = /^#([0-9a-f]{3,8})$/, Dh = new RegExp(`^rgb\\(${$r},${$r},${$r}\\)$`), Vh = new RegExp(`^rgb\\(${yn},${yn},${yn}\\)$`), Ah = new RegExp(`^rgba\\(${$r},${$r},${$r},${xo}\\)$`), Oh = new RegExp(`^rgba\\(${yn},${yn},${yn},${xo}\\)$`), Lh = new RegExp(`^hsl\\(${xo},${yn},${yn}\\)$`), Ih = new RegExp(`^hsla\\(${xo},${yn},${yn},${xo}\\)$`), ol = {
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
ga(Vo, bo, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: il,
  // Deprecated! Use color.formatHex.
  formatHex: il,
  formatHex8: zh,
  formatHsl: Rh,
  formatRgb: sl,
  toString: sl
});
function il() {
  return this.rgb().formatHex();
}
function zh() {
  return this.rgb().formatHex8();
}
function Rh() {
  return Uu(this).formatHsl();
}
function sl() {
  return this.rgb().formatRgb();
}
function bo(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Hh.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? al(t) : n === 3 ? new At(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Ko(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Ko(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Dh.exec(e)) ? new At(t[1], t[2], t[3], 1) : (t = Vh.exec(e)) ? new At(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Ah.exec(e)) ? Ko(t[1], t[2], t[3], t[4]) : (t = Oh.exec(e)) ? Ko(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Lh.exec(e)) ? cl(t[1], t[2] / 100, t[3] / 100, 1) : (t = Ih.exec(e)) ? cl(t[1], t[2] / 100, t[3] / 100, t[4]) : ol.hasOwnProperty(e) ? al(ol[e]) : e === "transparent" ? new At(NaN, NaN, NaN, 0) : null;
}
function al(e) {
  return new At(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ko(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new At(e, t, n, r);
}
function Bh(e) {
  return e instanceof Vo || (e = bo(e)), e ? (e = e.rgb(), new At(e.r, e.g, e.b, e.opacity)) : new At();
}
function Ms(e, t, n, r) {
  return arguments.length === 1 ? Bh(e) : new At(e, t, n, r ?? 1);
}
function At(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ga(At, Ms, ju(Vo, {
  brighter(e) {
    return e = e == null ? vi : Math.pow(vi, e), new At(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? _o : Math.pow(_o, e), new At(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new At(lr(this.r), lr(this.g), lr(this.b), pi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ll,
  // Deprecated! Use color.formatHex.
  formatHex: ll,
  formatHex8: qh,
  formatRgb: ul,
  toString: ul
}));
function ll() {
  return `#${ir(this.r)}${ir(this.g)}${ir(this.b)}`;
}
function qh() {
  return `#${ir(this.r)}${ir(this.g)}${ir(this.b)}${ir((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ul() {
  const e = pi(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${lr(this.r)}, ${lr(this.g)}, ${lr(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function pi(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function lr(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function ir(e) {
  return e = lr(e), (e < 16 ? "0" : "") + e.toString(16);
}
function cl(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ln(e, t, n, r);
}
function Uu(e) {
  if (e instanceof ln) return new ln(e.h, e.s, e.l, e.opacity);
  if (e instanceof Vo || (e = bo(e)), !e) return new ln();
  if (e instanceof ln) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), i = Math.max(t, n, r), s = NaN, a = i - o, l = (i + o) / 2;
  return a ? (t === i ? s = (n - r) / a + (n < r) * 6 : n === i ? s = (r - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? i + o : 2 - i - o, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new ln(s, a, l, e.opacity);
}
function Yh(e, t, n, r) {
  return arguments.length === 1 ? Uu(e) : new ln(e, t, n, r ?? 1);
}
function ln(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ga(ln, Yh, ju(Vo, {
  brighter(e) {
    return e = e == null ? vi : Math.pow(vi, e), new ln(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? _o : Math.pow(_o, e), new ln(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new At(
      us(e >= 240 ? e - 240 : e + 120, o, r),
      us(e, o, r),
      us(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new ln(dl(this.h), Go(this.s), Go(this.l), pi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = pi(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${dl(this.h)}, ${Go(this.s) * 100}%, ${Go(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function dl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Go(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function us(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Ju = (e) => () => e;
function Zh(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Fh(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Xh(e) {
  return (e = +e) == 1 ? Qu : function(t, n) {
    return n - t ? Fh(t, n, e) : Ju(isNaN(t) ? n : t);
  };
}
function Qu(e, t) {
  var n = t - e;
  return n ? Zh(e, n) : Ju(isNaN(e) ? t : e);
}
const fl = function e(t) {
  var n = Xh(t);
  function r(o, i) {
    var s = n((o = Ms(o)).r, (i = Ms(i)).r), a = n(o.g, i.g), l = n(o.b, i.b), u = Qu(o.opacity, i.opacity);
    return function(c) {
      return o.r = s(c), o.g = a(c), o.b = l(c), o.opacity = u(c), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Yn(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var Hs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, cs = new RegExp(Hs.source, "g");
function Wh(e) {
  return function() {
    return e;
  };
}
function Kh(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Gh(e, t) {
  var n = Hs.lastIndex = cs.lastIndex = 0, r, o, i, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (r = Hs.exec(e)) && (o = cs.exec(t)); )
    (i = o.index) > n && (i = t.slice(n, i), a[s] ? a[s] += i : a[++s] = i), (r = r[0]) === (o = o[0]) ? a[s] ? a[s] += o : a[++s] = o : (a[++s] = null, l.push({ i: s, x: Yn(r, o) })), n = cs.lastIndex;
  return n < t.length && (i = t.slice(n), a[s] ? a[s] += i : a[++s] = i), a.length < 2 ? l[0] ? Kh(l[0].x) : Wh(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) a[(d = l[c]).i] = d.x(u);
    return a.join("");
  });
}
var gl = 180 / Math.PI, Ds = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ec(e, t, n, r, o, i) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * r) && (n -= e * l, r -= t * l), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, l /= a), e * r < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: o,
    translateY: i,
    rotate: Math.atan2(t, e) * gl,
    skewX: Math.atan(l) * gl,
    scaleX: s,
    scaleY: a
  };
}
var jo;
function jh(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ds : ec(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Uh(e) {
  return e == null || (jo || (jo = document.createElementNS("http://www.w3.org/2000/svg", "g")), jo.setAttribute("transform", e), !(e = jo.transform.baseVal.consolidate())) ? Ds : (e = e.matrix, ec(e.a, e.b, e.c, e.d, e.e, e.f));
}
function tc(e, t, n, r) {
  function o(u) {
    return u.length ? u.pop() + " " : "";
  }
  function i(u, c, d, f, h, v) {
    if (u !== d || c !== f) {
      var _ = h.push("translate(", null, t, null, n);
      v.push({ i: _ - 4, x: Yn(u, d) }, { i: _ - 2, x: Yn(c, f) });
    } else (d || f) && h.push("translate(" + d + t + f + n);
  }
  function s(u, c, d, f) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), f.push({ i: d.push(o(d) + "rotate(", null, r) - 2, x: Yn(u, c) })) : c && d.push(o(d) + "rotate(" + c + r);
  }
  function a(u, c, d, f) {
    u !== c ? f.push({ i: d.push(o(d) + "skewX(", null, r) - 2, x: Yn(u, c) }) : c && d.push(o(d) + "skewX(" + c + r);
  }
  function l(u, c, d, f, h, v) {
    if (u !== d || c !== f) {
      var _ = h.push(o(h) + "scale(", null, ",", null, ")");
      v.push({ i: _ - 4, x: Yn(u, d) }, { i: _ - 2, x: Yn(c, f) });
    } else (d !== 1 || f !== 1) && h.push(o(h) + "scale(" + d + "," + f + ")");
  }
  return function(u, c) {
    var d = [], f = [];
    return u = e(u), c = e(c), i(u.translateX, u.translateY, c.translateX, c.translateY, d, f), s(u.rotate, c.rotate, d, f), a(u.skewX, c.skewX, d, f), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, f), u = c = null, function(h) {
      for (var v = -1, _ = f.length, x; ++v < _; ) d[(x = f[v]).i] = x.x(h);
      return d.join("");
    };
  };
}
var Jh = tc(jh, "px, ", "px)", "deg)"), Qh = tc(Uh, ", ", ")", ")"), ev = 1e-12;
function hl(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function tv(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function nv(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const rv = function e(t, n, r) {
  function o(i, s) {
    var a = i[0], l = i[1], u = i[2], c = s[0], d = s[1], f = s[2], h = c - a, v = d - l, _ = h * h + v * v, x, k;
    if (_ < ev)
      k = Math.log(f / u) / t, x = function(S) {
        return [
          a + S * h,
          l + S * v,
          u * Math.exp(t * S * k)
        ];
      };
    else {
      var m = Math.sqrt(_), b = (f * f - u * u + r * _) / (2 * u * n * m), p = (f * f - u * u - r * _) / (2 * f * n * m), C = Math.log(Math.sqrt(b * b + 1) - b), H = Math.log(Math.sqrt(p * p + 1) - p);
      k = (H - C) / t, x = function(S) {
        var D = S * k, L = hl(C), A = u / (n * m) * (L * nv(t * D + C) - tv(C));
        return [
          a + A * h,
          l + A * v,
          u * L / hl(t * D + C)
        ];
      };
    }
    return x.duration = k * 1e3 * t / Math.SQRT2, x;
  }
  return o.rho = function(i) {
    var s = Math.max(1e-3, +i), a = s * s, l = a * a;
    return e(s, a, l);
  }, o;
}(Math.SQRT2, 2, 4);
var Ir = 0, lo = 0, io = 0, nc = 1e3, mi, uo, yi = 0, dr = 0, Fi = 0, Co = typeof performance == "object" && performance.now ? performance : Date, rc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function ha() {
  return dr || (rc(ov), dr = Co.now() + Fi);
}
function ov() {
  dr = 0;
}
function wi() {
  this._call = this._time = this._next = null;
}
wi.prototype = oc.prototype = {
  constructor: wi,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ha() : +n) + (t == null ? 0 : +t), !this._next && uo !== this && (uo ? uo._next = this : mi = this, uo = this), this._call = e, this._time = n, Vs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Vs());
  }
};
function oc(e, t, n) {
  var r = new wi();
  return r.restart(e, t, n), r;
}
function iv() {
  ha(), ++Ir;
  for (var e = mi, t; e; )
    (t = dr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Ir;
}
function vl() {
  dr = (yi = Co.now()) + Fi, Ir = lo = 0;
  try {
    iv();
  } finally {
    Ir = 0, av(), dr = 0;
  }
}
function sv() {
  var e = Co.now(), t = e - yi;
  t > nc && (Fi -= t, yi = e);
}
function av() {
  for (var e, t = mi, n, r = 1 / 0; t; )
    t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : mi = n);
  uo = e, Vs(r);
}
function Vs(e) {
  if (!Ir) {
    lo && (lo = clearTimeout(lo));
    var t = e - dr;
    t > 24 ? (e < 1 / 0 && (lo = setTimeout(vl, e - Co.now() - Fi)), io && (io = clearInterval(io))) : (io || (yi = Co.now(), io = setInterval(sv, nc)), Ir = 1, rc(vl));
  }
}
function pl(e, t, n) {
  var r = new wi();
  return t = t == null ? 0 : +t, r.restart((o) => {
    r.stop(), e(o + t);
  }, t, n), r;
}
var lv = Yi("start", "end", "cancel", "interrupt"), uv = [], ic = 0, ml = 1, As = 2, ni = 3, yl = 4, Os = 5, ri = 6;
function Xi(e, t, n, r, o, i) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  cv(e, n, {
    name: t,
    index: r,
    // For context during callback.
    group: o,
    // For context during callback.
    on: lv,
    tween: uv,
    time: i.time,
    delay: i.delay,
    duration: i.duration,
    ease: i.ease,
    timer: null,
    state: ic
  });
}
function va(e, t) {
  var n = hn(e, t);
  if (n.state > ic) throw new Error("too late; already scheduled");
  return n;
}
function Sn(e, t) {
  var n = hn(e, t);
  if (n.state > ni) throw new Error("too late; already running");
  return n;
}
function hn(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function cv(e, t, n) {
  var r = e.__transition, o;
  r[t] = n, n.timer = oc(i, 0, n.time);
  function i(u) {
    n.state = ml, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, d, f, h;
    if (n.state !== ml) return l();
    for (c in r)
      if (h = r[c], h.name === n.name) {
        if (h.state === ni) return pl(s);
        h.state === yl ? (h.state = ri, h.timer.stop(), h.on.call("interrupt", e, e.__data__, h.index, h.group), delete r[c]) : +c < t && (h.state = ri, h.timer.stop(), h.on.call("cancel", e, e.__data__, h.index, h.group), delete r[c]);
      }
    if (pl(function() {
      n.state === ni && (n.state = yl, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = As, n.on.call("start", e, e.__data__, n.index, n.group), n.state === As) {
      for (n.state = ni, o = new Array(f = n.tween.length), c = 0, d = -1; c < f; ++c)
        (h = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (o[++d] = h);
      o.length = d + 1;
    }
  }
  function a(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = Os, 1), d = -1, f = o.length; ++d < f; )
      o[d].call(e, c);
    n.state === Os && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = ri, n.timer.stop(), delete r[t];
    for (var u in r) return;
    delete e.__transition;
  }
}
function oi(e, t) {
  var n = e.__transition, r, o, i = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((r = n[s]).name !== t) {
        i = !1;
        continue;
      }
      o = r.state > As && r.state < Os, r.state = ri, r.timer.stop(), r.on.call(o ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[s];
    }
    i && delete e.__transition;
  }
}
function dv(e) {
  return this.each(function() {
    oi(this, e);
  });
}
function fv(e, t) {
  var n, r;
  return function() {
    var o = Sn(this, e), i = o.tween;
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
function gv(e, t, n) {
  var r, o;
  if (typeof n != "function") throw new Error();
  return function() {
    var i = Sn(this, e), s = i.tween;
    if (s !== r) {
      o = (r = s).slice();
      for (var a = { name: t, value: n }, l = 0, u = o.length; l < u; ++l)
        if (o[l].name === t) {
          o[l] = a;
          break;
        }
      l === u && o.push(a);
    }
    i.tween = o;
  };
}
function hv(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var r = hn(this.node(), n).tween, o = 0, i = r.length, s; o < i; ++o)
      if ((s = r[o]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? fv : gv)(n, e, t));
}
function pa(e, t, n) {
  var r = e._id;
  return e.each(function() {
    var o = Sn(this, r);
    (o.value || (o.value = {}))[t] = n.apply(this, arguments);
  }), function(o) {
    return hn(o, r).value[t];
  };
}
function sc(e, t) {
  var n;
  return (typeof t == "number" ? Yn : t instanceof bo ? fl : (n = bo(t)) ? (t = n, fl) : Gh)(e, t);
}
function vv(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function pv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function mv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttribute(e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function yv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function wv(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function _v(e, t, n) {
  var r, o, i;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a)));
  };
}
function xv(e, t) {
  var n = Zi(e), r = n === "transform" ? Qh : sc;
  return this.attrTween(e, typeof t == "function" ? (n.local ? _v : wv)(n, r, pa(this, "attr." + e, t)) : t == null ? (n.local ? pv : vv)(n) : (n.local ? yv : mv)(n, r, t));
}
function bv(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Cv(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function kv(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && Cv(e, i)), n;
  }
  return o._value = t, o;
}
function $v(e, t) {
  var n, r;
  function o() {
    var i = t.apply(this, arguments);
    return i !== r && (n = (r = i) && bv(e, i)), n;
  }
  return o._value = t, o;
}
function Ev(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var r = Zi(e);
  return this.tween(n, (r.local ? kv : $v)(r, t));
}
function Sv(e, t) {
  return function() {
    va(this, e).delay = +t.apply(this, arguments);
  };
}
function Pv(e, t) {
  return t = +t, function() {
    va(this, e).delay = t;
  };
}
function Nv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Sv : Pv)(t, e)) : hn(this.node(), t).delay;
}
function Tv(e, t) {
  return function() {
    Sn(this, e).duration = +t.apply(this, arguments);
  };
}
function Mv(e, t) {
  return t = +t, function() {
    Sn(this, e).duration = t;
  };
}
function Hv(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Tv : Mv)(t, e)) : hn(this.node(), t).duration;
}
function Dv(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Sn(this, e).ease = t;
  };
}
function Vv(e) {
  var t = this._id;
  return arguments.length ? this.each(Dv(t, e)) : hn(this.node(), t).ease;
}
function Av(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Sn(this, e).ease = n;
  };
}
function Ov(e) {
  if (typeof e != "function") throw new Error();
  return this.each(Av(this._id, e));
}
function Lv(e) {
  typeof e != "function" && (e = Iu(e));
  for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
    for (var i = t[o], s = i.length, a = r[o] = [], l, u = 0; u < s; ++u)
      (l = i[u]) && e.call(l, l.__data__, u, i) && a.push(l);
  return new In(r, this._parents, this._name, this._id);
}
function Iv(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, r = t.length, o = n.length, i = Math.min(r, o), s = new Array(r), a = 0; a < i; ++a)
    for (var l = t[a], u = n[a], c = l.length, d = s[a] = new Array(c), f, h = 0; h < c; ++h)
      (f = l[h] || u[h]) && (d[h] = f);
  for (; a < r; ++a)
    s[a] = t[a];
  return new In(s, this._parents, this._name, this._id);
}
function zv(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Rv(e, t, n) {
  var r, o, i = zv(t) ? va : Sn;
  return function() {
    var s = i(this, e), a = s.on;
    a !== r && (o = (r = a).copy()).on(t, n), s.on = o;
  };
}
function Bv(e, t) {
  var n = this._id;
  return arguments.length < 2 ? hn(this.node(), n).on.on(e) : this.each(Rv(n, e, t));
}
function qv(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function Yv() {
  return this.on("end.remove", qv(this._id));
}
function Zv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = da(e));
  for (var r = this._groups, o = r.length, i = new Array(o), s = 0; s < o; ++s)
    for (var a = r[s], l = a.length, u = i[s] = new Array(l), c, d, f = 0; f < l; ++f)
      (c = a[f]) && (d = e.call(c, c.__data__, f, a)) && ("__data__" in c && (d.__data__ = c.__data__), u[f] = d, Xi(u[f], t, n, f, u, hn(c, n)));
  return new In(i, this._parents, t, n);
}
function Fv(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Lu(e));
  for (var r = this._groups, o = r.length, i = [], s = [], a = 0; a < o; ++a)
    for (var l = r[a], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var f = e.call(c, c.__data__, d, l), h, v = hn(c, n), _ = 0, x = f.length; _ < x; ++_)
          (h = f[_]) && Xi(h, t, n, _, f, v);
        i.push(f), s.push(c);
      }
  return new In(i, s, t, n);
}
var Xv = Do.prototype.constructor;
function Wv() {
  return new Xv(this._groups, this._parents);
}
function Kv(e, t) {
  var n, r, o;
  return function() {
    var i = Lr(this, e), s = (this.style.removeProperty(e), Lr(this, e));
    return i === s ? null : i === n && s === r ? o : o = t(n = i, r = s);
  };
}
function ac(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Gv(e, t, n) {
  var r, o = n + "", i;
  return function() {
    var s = Lr(this, e);
    return s === o ? null : s === r ? i : i = t(r = s, n);
  };
}
function jv(e, t, n) {
  var r, o, i;
  return function() {
    var s = Lr(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Lr(this, e))), s === l ? null : s === r && l === o ? i : (o = l, i = t(r = s, a));
  };
}
function Uv(e, t) {
  var n, r, o, i = "style." + t, s = "end." + i, a;
  return function() {
    var l = Sn(this, e), u = l.on, c = l.value[i] == null ? a || (a = ac(t)) : void 0;
    (u !== n || o !== c) && (r = (n = u).copy()).on(s, o = c), l.on = r;
  };
}
function Jv(e, t, n) {
  var r = (e += "") == "transform" ? Jh : sc;
  return t == null ? this.styleTween(e, Kv(e, r)).on("end.style." + e, ac(e)) : typeof t == "function" ? this.styleTween(e, jv(e, r, pa(this, "style." + e, t))).each(Uv(this._id, e)) : this.styleTween(e, Gv(e, r, t), n).on("end.style." + e, null);
}
function Qv(e, t, n) {
  return function(r) {
    this.style.setProperty(e, t.call(this, r), n);
  };
}
function e0(e, t, n) {
  var r, o;
  function i() {
    var s = t.apply(this, arguments);
    return s !== o && (r = (o = s) && Qv(e, s, n)), r;
  }
  return i._value = t, i;
}
function t0(e, t, n) {
  var r = "style." + (e += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  return this.tween(r, e0(e, t, n ?? ""));
}
function n0(e) {
  return function() {
    this.textContent = e;
  };
}
function r0(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function o0(e) {
  return this.tween("text", typeof e == "function" ? r0(pa(this, "text", e)) : n0(e == null ? "" : e + ""));
}
function i0(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function s0(e) {
  var t, n;
  function r() {
    var o = e.apply(this, arguments);
    return o !== n && (t = (n = o) && i0(o)), t;
  }
  return r._value = e, r;
}
function a0(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, s0(e));
}
function l0() {
  for (var e = this._name, t = this._id, n = lc(), r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var c = hn(l, t);
        Xi(l, e, n, u, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new In(r, this._parents, e, n);
}
function u0() {
  var e, t, n = this, r = n._id, o = n.size();
  return new Promise(function(i, s) {
    var a = { value: s }, l = { value: function() {
      --o === 0 && i();
    } };
    n.each(function() {
      var u = Sn(this, r), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), o === 0 && i();
  });
}
var c0 = 0;
function In(e, t, n, r) {
  this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function lc() {
  return ++c0;
}
var Nn = Do.prototype;
In.prototype = {
  constructor: In,
  select: Zv,
  selectAll: Fv,
  selectChild: Nn.selectChild,
  selectChildren: Nn.selectChildren,
  filter: Lv,
  merge: Iv,
  selection: Wv,
  transition: l0,
  call: Nn.call,
  nodes: Nn.nodes,
  node: Nn.node,
  size: Nn.size,
  empty: Nn.empty,
  each: Nn.each,
  on: Bv,
  attr: xv,
  attrTween: Ev,
  style: Jv,
  styleTween: t0,
  text: o0,
  textTween: a0,
  remove: Yv,
  tween: hv,
  delay: Nv,
  duration: Hv,
  ease: Vv,
  easeVarying: Ov,
  end: u0,
  [Symbol.iterator]: Nn[Symbol.iterator]
};
function d0(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var f0 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: d0
};
function g0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function h0(e) {
  var t, n;
  e instanceof In ? (t = e._id, e = e._name) : (t = lc(), (n = f0).time = ha(), e = e == null ? null : e + "");
  for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
    for (var s = r[i], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Xi(l, e, t, u, s, n || g0(l, t));
  return new In(r, this._parents, e, t);
}
Do.prototype.interrupt = dv;
Do.prototype.transition = h0;
const Uo = (e) => () => e;
function v0(e, {
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
function Mn(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Mn.prototype = {
  constructor: Mn,
  scale: function(e) {
    return e === 1 ? this : new Mn(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Mn(this.k, this.x + this.k * e, this.y + this.k * t);
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
var Wi = new Mn(1, 0, 0);
uc.prototype = Mn.prototype;
function uc(e) {
  for (; !e.__zoom; ) if (!(e = e.parentNode)) return Wi;
  return e.__zoom;
}
function ds(e) {
  e.stopImmediatePropagation();
}
function so(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function p0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function m0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function wl() {
  return this.__zoom || Wi;
}
function y0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function w0() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function _0(e, t, n) {
  var r = e.invertX(t[0][0]) - n[0][0], o = e.invertX(t[1][0]) - n[1][0], i = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
    s > i ? (i + s) / 2 : Math.min(0, i) || Math.max(0, s)
  );
}
function cc() {
  var e = p0, t = m0, n = _0, r = y0, o = w0, i = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = rv, u = Yi("start", "zoom", "end"), c, d, f, h = 500, v = 150, _ = 0, x = 10;
  function k(E) {
    E.property("__zoom", wl).on("wheel.zoom", D, { passive: !1 }).on("mousedown.zoom", L).on("dblclick.zoom", A).filter(o).on("touchstart.zoom", I).on("touchmove.zoom", O).on("touchend.zoom touchcancel.zoom", R).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  k.transform = function(E, N, $, T) {
    var P = E.selection ? E.selection() : E;
    P.property("__zoom", wl), E !== P ? C(E, N, $, T) : P.interrupt().each(function() {
      H(this, arguments).event(T).start().zoom(null, typeof N == "function" ? N.apply(this, arguments) : N).end();
    });
  }, k.scaleBy = function(E, N, $, T) {
    k.scaleTo(E, function() {
      var P = this.__zoom.k, M = typeof N == "function" ? N.apply(this, arguments) : N;
      return P * M;
    }, $, T);
  }, k.scaleTo = function(E, N, $, T) {
    k.transform(E, function() {
      var P = t.apply(this, arguments), M = this.__zoom, z = $ == null ? p(P) : typeof $ == "function" ? $.apply(this, arguments) : $, q = M.invert(z), X = typeof N == "function" ? N.apply(this, arguments) : N;
      return n(b(m(M, X), z, q), P, s);
    }, $, T);
  }, k.translateBy = function(E, N, $, T) {
    k.transform(E, function() {
      return n(this.__zoom.translate(
        typeof N == "function" ? N.apply(this, arguments) : N,
        typeof $ == "function" ? $.apply(this, arguments) : $
      ), t.apply(this, arguments), s);
    }, null, T);
  }, k.translateTo = function(E, N, $, T, P) {
    k.transform(E, function() {
      var M = t.apply(this, arguments), z = this.__zoom, q = T == null ? p(M) : typeof T == "function" ? T.apply(this, arguments) : T;
      return n(Wi.translate(q[0], q[1]).scale(z.k).translate(
        typeof N == "function" ? -N.apply(this, arguments) : -N,
        typeof $ == "function" ? -$.apply(this, arguments) : -$
      ), M, s);
    }, T, P);
  };
  function m(E, N) {
    return N = Math.max(i[0], Math.min(i[1], N)), N === E.k ? E : new Mn(N, E.x, E.y);
  }
  function b(E, N, $) {
    var T = N[0] - $[0] * E.k, P = N[1] - $[1] * E.k;
    return T === E.x && P === E.y ? E : new Mn(E.k, T, P);
  }
  function p(E) {
    return [(+E[0][0] + +E[1][0]) / 2, (+E[0][1] + +E[1][1]) / 2];
  }
  function C(E, N, $, T) {
    E.on("start.zoom", function() {
      H(this, arguments).event(T).start();
    }).on("interrupt.zoom end.zoom", function() {
      H(this, arguments).event(T).end();
    }).tween("zoom", function() {
      var P = this, M = arguments, z = H(P, M).event(T), q = t.apply(P, M), X = $ == null ? p(q) : typeof $ == "function" ? $.apply(P, M) : $, U = Math.max(q[1][0] - q[0][0], q[1][1] - q[0][1]), G = P.__zoom, W = typeof N == "function" ? N.apply(P, M) : N, le = l(G.invert(X).concat(U / G.k), W.invert(X).concat(U / W.k));
      return function(ye) {
        if (ye === 1) ye = W;
        else {
          var ge = le(ye), oe = U / ge[2];
          ye = new Mn(oe, X[0] - ge[0] * oe, X[1] - ge[1] * oe);
        }
        z.zoom(null, ye);
      };
    });
  }
  function H(E, N, $) {
    return !$ && E.__zooming || new S(E, N);
  }
  function S(E, N) {
    this.that = E, this.args = N, this.active = 0, this.sourceEvent = null, this.extent = t.apply(E, N), this.taps = 0;
  }
  S.prototype = {
    event: function(E) {
      return E && (this.sourceEvent = E), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(E, N) {
      return this.mouse && E !== "mouse" && (this.mouse[1] = N.invert(this.mouse[0])), this.touch0 && E !== "touch" && (this.touch0[1] = N.invert(this.touch0[0])), this.touch1 && E !== "touch" && (this.touch1[1] = N.invert(this.touch1[0])), this.that.__zoom = N, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(E) {
      var N = jt(this.that).datum();
      u.call(
        E,
        this.that,
        new v0(E, {
          sourceEvent: this.sourceEvent,
          target: k,
          transform: this.that.__zoom,
          dispatch: u
        }),
        N
      );
    }
  };
  function D(E, ...N) {
    if (!e.apply(this, arguments)) return;
    var $ = H(this, N).event(E), T = this.__zoom, P = Math.max(i[0], Math.min(i[1], T.k * Math.pow(2, r.apply(this, arguments)))), M = sn(E);
    if ($.wheel)
      ($.mouse[0][0] !== M[0] || $.mouse[0][1] !== M[1]) && ($.mouse[1] = T.invert($.mouse[0] = M)), clearTimeout($.wheel);
    else {
      if (T.k === P) return;
      $.mouse = [M, T.invert(M)], oi(this), $.start();
    }
    so(E), $.wheel = setTimeout(z, v), $.zoom("mouse", n(b(m(T, P), $.mouse[0], $.mouse[1]), $.extent, s));
    function z() {
      $.wheel = null, $.end();
    }
  }
  function L(E, ...N) {
    if (f || !e.apply(this, arguments)) return;
    var $ = E.currentTarget, T = H(this, N, !0).event(E), P = jt(E.view).on("mousemove.zoom", X, !0).on("mouseup.zoom", U, !0), M = sn(E, $), z = E.clientX, q = E.clientY;
    Ku(E.view), ds(E), T.mouse = [M, this.__zoom.invert(M)], oi(this), T.start();
    function X(G) {
      if (so(G), !T.moved) {
        var W = G.clientX - z, le = G.clientY - q;
        T.moved = W * W + le * le > _;
      }
      T.event(G).zoom("mouse", n(b(T.that.__zoom, T.mouse[0] = sn(G, $), T.mouse[1]), T.extent, s));
    }
    function U(G) {
      P.on("mousemove.zoom mouseup.zoom", null), Gu(G.view, T.moved), so(G), T.event(G).end();
    }
  }
  function A(E, ...N) {
    if (e.apply(this, arguments)) {
      var $ = this.__zoom, T = sn(E.changedTouches ? E.changedTouches[0] : E, this), P = $.invert(T), M = $.k * (E.shiftKey ? 0.5 : 2), z = n(b(m($, M), T, P), t.apply(this, N), s);
      so(E), a > 0 ? jt(this).transition().duration(a).call(C, z, T, E) : jt(this).call(k.transform, z, T, E);
    }
  }
  function I(E, ...N) {
    if (e.apply(this, arguments)) {
      var $ = E.touches, T = $.length, P = H(this, N, E.changedTouches.length === T).event(E), M, z, q, X;
      for (ds(E), z = 0; z < T; ++z)
        q = $[z], X = sn(q, this), X = [X, this.__zoom.invert(X), q.identifier], P.touch0 ? !P.touch1 && P.touch0[2] !== X[2] && (P.touch1 = X, P.taps = 0) : (P.touch0 = X, M = !0, P.taps = 1 + !!c);
      c && (c = clearTimeout(c)), M && (P.taps < 2 && (d = X[0], c = setTimeout(function() {
        c = null;
      }, h)), oi(this), P.start());
    }
  }
  function O(E, ...N) {
    if (this.__zooming) {
      var $ = H(this, N).event(E), T = E.changedTouches, P = T.length, M, z, q, X;
      for (so(E), M = 0; M < P; ++M)
        z = T[M], q = sn(z, this), $.touch0 && $.touch0[2] === z.identifier ? $.touch0[0] = q : $.touch1 && $.touch1[2] === z.identifier && ($.touch1[0] = q);
      if (z = $.that.__zoom, $.touch1) {
        var U = $.touch0[0], G = $.touch0[1], W = $.touch1[0], le = $.touch1[1], ye = (ye = W[0] - U[0]) * ye + (ye = W[1] - U[1]) * ye, ge = (ge = le[0] - G[0]) * ge + (ge = le[1] - G[1]) * ge;
        z = m(z, Math.sqrt(ye / ge)), q = [(U[0] + W[0]) / 2, (U[1] + W[1]) / 2], X = [(G[0] + le[0]) / 2, (G[1] + le[1]) / 2];
      } else if ($.touch0) q = $.touch0[0], X = $.touch0[1];
      else return;
      $.zoom("touch", n(b(z, q, X), $.extent, s));
    }
  }
  function R(E, ...N) {
    if (this.__zooming) {
      var $ = H(this, N).event(E), T = E.changedTouches, P = T.length, M, z;
      for (ds(E), f && clearTimeout(f), f = setTimeout(function() {
        f = null;
      }, h), M = 0; M < P; ++M)
        z = T[M], $.touch0 && $.touch0[2] === z.identifier ? delete $.touch0 : $.touch1 && $.touch1[2] === z.identifier && delete $.touch1;
      if ($.touch1 && !$.touch0 && ($.touch0 = $.touch1, delete $.touch1), $.touch0) $.touch0[1] = this.__zoom.invert($.touch0[0]);
      else if ($.end(), $.taps === 2 && (z = sn(z, this), Math.hypot(d[0] - z[0], d[1] - z[1]) < x)) {
        var q = jt(this).on("dblclick.zoom");
        q && q.apply(this, arguments);
      }
    }
  }
  return k.wheelDelta = function(E) {
    return arguments.length ? (r = typeof E == "function" ? E : Uo(+E), k) : r;
  }, k.filter = function(E) {
    return arguments.length ? (e = typeof E == "function" ? E : Uo(!!E), k) : e;
  }, k.touchable = function(E) {
    return arguments.length ? (o = typeof E == "function" ? E : Uo(!!E), k) : o;
  }, k.extent = function(E) {
    return arguments.length ? (t = typeof E == "function" ? E : Uo([[+E[0][0], +E[0][1]], [+E[1][0], +E[1][1]]]), k) : t;
  }, k.scaleExtent = function(E) {
    return arguments.length ? (i[0] = +E[0], i[1] = +E[1], k) : [i[0], i[1]];
  }, k.translateExtent = function(E) {
    return arguments.length ? (s[0][0] = +E[0][0], s[1][0] = +E[1][0], s[0][1] = +E[0][1], s[1][1] = +E[1][1], k) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, k.constrain = function(E) {
    return arguments.length ? (n = E, k) : n;
  }, k.duration = function(E) {
    return arguments.length ? (a = +E, k) : a;
  }, k.interpolate = function(E) {
    return arguments.length ? (l = E, k) : l;
  }, k.on = function() {
    var E = u.on.apply(u, arguments);
    return E === u ? k : E;
  }, k.clickDistance = function(E) {
    return arguments.length ? (_ = (E = +E) * E, k) : Math.sqrt(_);
  }, k.tapDistance = function(E) {
    return arguments.length ? (x = +E, k) : x;
  }, k;
}
const zr = {
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
}, _i = [
  [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
  [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
];
var fr;
(function(e) {
  e.Strict = "strict", e.Loose = "loose";
})(fr || (fr = {}));
var Gn;
(function(e) {
  e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal";
})(Gn || (Gn = {}));
var xi;
(function(e) {
  e.Partial = "partial", e.Full = "full";
})(xi || (xi = {}));
const Ls = {
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
var Er;
(function(e) {
  e.Bezier = "default", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e.SimpleBezier = "simplebezier";
})(Er || (Er = {}));
var ko;
(function(e) {
  e.Arrow = "arrow", e.ArrowClosed = "arrowclosed";
})(ko || (ko = {}));
var He;
(function(e) {
  e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom";
})(He || (He = {}));
const _l = {
  [He.Left]: He.Right,
  [He.Right]: He.Left,
  [He.Top]: He.Bottom,
  [He.Bottom]: He.Top
};
function x0(e, t) {
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
function xl(e, t, n) {
  if (!n)
    return;
  const r = [];
  e.forEach((o, i) => {
    t != null && t.has(i) || r.push(o);
  }), r.length && n(r);
}
function b0(e) {
  return e === null ? null : e ? "valid" : "invalid";
}
const C0 = (e) => "id" in e && "source" in e && "target" in e, k0 = (e) => "id" in e && "position" in e && !("source" in e) && !("target" in e), ma = (e) => "id" in e && "internals" in e && !("source" in e) && !("target" in e), Ao = (e, t = [0, 0]) => {
  const { width: n, height: r } = nr(e), o = e.origin ?? t, i = n * o[0], s = r * o[1];
  return {
    x: e.position.x - i,
    y: e.position.y - s
  };
}, $0 = (e, t = { nodeOrigin: [0, 0], nodeLookup: void 0 }) => {
  if (e.length === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  const n = e.reduce((r, o) => {
    const i = typeof o == "string";
    let s = !t.nodeLookup && !i ? o : void 0;
    t.nodeLookup && (s = i ? t.nodeLookup.get(o) : ma(o) ? o : t.nodeLookup.get(o.id));
    const a = s ? bi(s, t.nodeOrigin) : { x: 0, y: 0, x2: 0, y2: 0 };
    return Ki(r, a);
  }, { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 });
  return Gi(n);
}, Oo = (e, t = {}) => {
  if (e.size === 0)
    return { x: 0, y: 0, width: 0, height: 0 };
  let n = { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 };
  return e.forEach((r) => {
    if (t.filter === void 0 || t.filter(r)) {
      const o = bi(r);
      n = Ki(n, o);
    }
  }), Gi(n);
}, dc = (e, t, [n, r, o] = [0, 0, 1], i = !1, s = !1) => {
  const a = {
    ...Lo(t, [n, r, o]),
    width: t.width / o,
    height: t.height / o
  }, l = [];
  for (const u of e.values()) {
    const { measured: c, selectable: d = !0, hidden: f = !1 } = u;
    if (s && !d || f)
      continue;
    const h = c.width ?? u.width ?? u.initialWidth ?? null, v = c.height ?? u.height ?? u.initialHeight ?? null, _ = $o(a, Br(u)), x = (h ?? 0) * (v ?? 0), k = i && _ > 0;
    (!u.internals.handleBounds || k || _ >= x || u.dragging) && l.push(u);
  }
  return l;
}, Is = (e, t) => {
  const n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    n.add(r.id);
  }), t.filter((r) => n.has(r.source) || n.has(r.target));
};
function bl(e, t) {
  const n = /* @__PURE__ */ new Map(), r = t != null && t.nodes ? new Set(t.nodes.map((o) => o.id)) : null;
  return e.forEach((o) => {
    o.measured.width && o.measured.height && ((t == null ? void 0 : t.includeHiddenNodes) || !o.hidden) && (!r || r.has(o.id)) && n.set(o.id, o);
  }), n;
}
async function Cl({ nodes: e, width: t, height: n, panZoom: r, minZoom: o, maxZoom: i }, s) {
  if (e.size === 0)
    return Promise.resolve(!1);
  const a = Oo(e), l = wa(a, t, n, (s == null ? void 0 : s.minZoom) ?? o, (s == null ? void 0 : s.maxZoom) ?? i, (s == null ? void 0 : s.padding) ?? 0.1);
  return await r.setViewport(l, { duration: s == null ? void 0 : s.duration }), Promise.resolve(!0);
}
function E0({ nodeId: e, nextPosition: t, nodeLookup: n, nodeOrigin: r = [0, 0], nodeExtent: o, onError: i }) {
  const s = n.get(e), a = s.parentId ? n.get(s.parentId) : void 0, { x: l, y: u } = a ? a.internals.positionAbsolute : { x: 0, y: 0 }, c = s.origin ?? r;
  let d = o;
  if (s.extent === "parent" && !s.expandParent)
    if (!a)
      i == null || i("005", zr.error005());
    else {
      const h = a.measured.width, v = a.measured.height;
      h && v && (d = [
        [l, u],
        [l + h, u + v]
      ]);
    }
  else a && qr(s.extent) && (d = [
    [s.extent[0][0] + l, s.extent[0][1] + u],
    [s.extent[1][0] + l, s.extent[1][1] + u]
  ]);
  const f = qr(d) ? gr(t, d, s.measured) : t;
  return (s.measured.width === void 0 || s.measured.height === void 0) && (i == null || i("015", zr.error015())), {
    position: {
      x: f.x - l + (s.measured.width ?? 0) * c[0],
      y: f.y - u + (s.measured.height ?? 0) * c[1]
    },
    positionAbsolute: f
  };
}
async function fc({ nodesToRemove: e = [], edgesToRemove: t = [], nodes: n, edges: r, onBeforeDelete: o }) {
  const i = new Set(e.map((f) => f.id)), s = [];
  for (const f of n) {
    if (f.deletable === !1)
      continue;
    const h = i.has(f.id), v = !h && f.parentId && s.find((_) => _.id === f.parentId);
    (h || v) && s.push(f);
  }
  const a = new Set(t.map((f) => f.id)), l = r.filter((f) => f.deletable !== !1), c = Is(s, l);
  for (const f of l)
    a.has(f.id) && !c.find((v) => v.id === f.id) && c.push(f);
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
const Rr = (e, t = 0, n = 1) => Math.min(Math.max(e, t), n), gr = (e = { x: 0, y: 0 }, t, n) => ({
  x: Rr(e.x, t[0][0], t[1][0] - ((n == null ? void 0 : n.width) ?? 0)),
  y: Rr(e.y, t[0][1], t[1][1] - ((n == null ? void 0 : n.height) ?? 0))
});
function gc(e, t, n) {
  const { width: r, height: o } = nr(n), { x: i, y: s } = n.internals.positionAbsolute;
  return gr(e, [
    [i, s],
    [i + r, s + o]
  ], t);
}
const kl = (e, t, n) => e < t ? Rr(Math.abs(e - t), 1, t) / t : e > n ? -Rr(Math.abs(e - n), 1, t) / t : 0, hc = (e, t, n = 15, r = 40) => {
  const o = kl(e.x, r, t.width - r) * n, i = kl(e.y, r, t.height - r) * n;
  return [o, i];
}, Ki = (e, t) => ({
  x: Math.min(e.x, t.x),
  y: Math.min(e.y, t.y),
  x2: Math.max(e.x2, t.x2),
  y2: Math.max(e.y2, t.y2)
}), zs = ({ x: e, y: t, width: n, height: r }) => ({
  x: e,
  y: t,
  x2: e + n,
  y2: t + r
}), Gi = ({ x: e, y: t, x2: n, y2: r }) => ({
  x: e,
  y: t,
  width: n - e,
  height: r - t
}), Br = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = ma(e) ? e.internals.positionAbsolute : Ao(e, t);
  return {
    x: n,
    y: r,
    width: ((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0
  };
}, bi = (e, t = [0, 0]) => {
  var o, i;
  const { x: n, y: r } = ma(e) ? e.internals.positionAbsolute : Ao(e, t);
  return {
    x: n,
    y: r,
    x2: n + (((o = e.measured) == null ? void 0 : o.width) ?? e.width ?? e.initialWidth ?? 0),
    y2: r + (((i = e.measured) == null ? void 0 : i.height) ?? e.height ?? e.initialHeight ?? 0)
  };
}, vc = (e, t) => Gi(Ki(zs(e), zs(t))), $o = (e, t) => {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), r = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * r);
}, $l = (e) => Hn(e.width) && Hn(e.height) && Hn(e.x) && Hn(e.y), Hn = (e) => !isNaN(e) && isFinite(e), S0 = (e, t) => {
}, ya = (e, t = [1, 1]) => ({
  x: t[0] * Math.round(e.x / t[0]),
  y: t[1] * Math.round(e.y / t[1])
}), Lo = ({ x: e, y: t }, [n, r, o], i = !1, s = [1, 1]) => {
  const a = {
    x: (e - n) / o,
    y: (t - r) / o
  };
  return i ? ya(a, s) : a;
}, pc = ({ x: e, y: t }, [n, r, o]) => ({
  x: e * o + n,
  y: t * o + r
}), wa = (e, t, n, r, o, i) => {
  const s = t / (e.width * (1 + i)), a = n / (e.height * (1 + i)), l = Math.min(s, a), u = Rr(l, r, o), c = e.x + e.width / 2, d = e.y + e.height / 2, f = t / 2 - c * u, h = n / 2 - d * u;
  return { x: f, y: h, zoom: u };
}, Ci = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function qr(e) {
  return e !== void 0 && e !== "parent";
}
function nr(e) {
  var t, n;
  return {
    width: ((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth ?? 0,
    height: ((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight ?? 0
  };
}
function mc(e) {
  var t, n;
  return (((t = e.measured) == null ? void 0 : t.width) ?? e.width ?? e.initialWidth) !== void 0 && (((n = e.measured) == null ? void 0 : n.height) ?? e.height ?? e.initialHeight) !== void 0;
}
function P0(e, t = { width: 0, height: 0 }, n, r, o) {
  const i = { ...e }, s = r.get(n);
  if (s) {
    const a = s.origin || o;
    i.x += s.internals.positionAbsolute.x - (t.width ?? 0) * a[0], i.y += s.internals.positionAbsolute.y - (t.height ?? 0) * a[1];
  }
  return i;
}
function fs(e, { snapGrid: t = [0, 0], snapToGrid: n = !1, transform: r, containerBounds: o }) {
  const { x: i, y: s } = An(e), a = Lo({ x: i - ((o == null ? void 0 : o.left) ?? 0), y: s - ((o == null ? void 0 : o.top) ?? 0) }, r), { x: l, y: u } = n ? ya(a, t) : a;
  return {
    xSnapped: l,
    ySnapped: u,
    ...a
  };
}
const _a = (e) => ({
  width: e.offsetWidth,
  height: e.offsetHeight
}), N0 = (e) => {
  var t;
  return ((t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) || (window == null ? void 0 : window.document);
}, T0 = ["INPUT", "SELECT", "TEXTAREA"];
function M0(e) {
  var r, o;
  const t = ((o = (r = e.composedPath) == null ? void 0 : r.call(e)) == null ? void 0 : o[0]) || e.target;
  return (t == null ? void 0 : t.nodeType) !== 1 ? !1 : T0.includes(t.nodeName) || t.hasAttribute("contenteditable") || !!t.closest(".nokey");
}
const yc = (e) => "clientX" in e, An = (e, t) => {
  var i, s;
  const n = yc(e), r = n ? e.clientX : (i = e.touches) == null ? void 0 : i[0].clientX, o = n ? e.clientY : (s = e.touches) == null ? void 0 : s[0].clientY;
  return {
    x: r - ((t == null ? void 0 : t.left) ?? 0),
    y: o - ((t == null ? void 0 : t.top) ?? 0)
  };
}, El = (e, t, n, r, o) => {
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
      ..._a(s)
    };
  });
};
function H0({ sourceX: e, sourceY: t, targetX: n, targetY: r, sourceControlX: o, sourceControlY: i, targetControlX: s, targetControlY: a }) {
  const l = e * 0.125 + o * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + i * 0.375 + a * 0.375 + r * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function Jo(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function Sl({ pos: e, x1: t, y1: n, x2: r, y2: o, c: i }) {
  switch (e) {
    case He.Left:
      return [t - Jo(t - r, i), n];
    case He.Right:
      return [t + Jo(r - t, i), n];
    case He.Top:
      return [t, n - Jo(n - o, i)];
    case He.Bottom:
      return [t, n + Jo(o - n, i)];
  }
}
function wc({ sourceX: e, sourceY: t, sourcePosition: n = He.Bottom, targetX: r, targetY: o, targetPosition: i = He.Top, curvature: s = 0.25 }) {
  const [a, l] = Sl({
    pos: n,
    x1: e,
    y1: t,
    x2: r,
    y2: o,
    c: s
  }), [u, c] = Sl({
    pos: i,
    x1: r,
    y1: o,
    x2: e,
    y2: t,
    c: s
  }), [d, f, h, v] = H0({
    sourceX: e,
    sourceY: t,
    targetX: r,
    targetY: o,
    sourceControlX: a,
    sourceControlY: l,
    targetControlX: u,
    targetControlY: c
  });
  return [
    `M${e},${t} C${a},${l} ${u},${c} ${r},${o}`,
    d,
    f,
    h,
    v
  ];
}
function _c({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const o = Math.abs(n - e) / 2, i = n < e ? n + o : n - o, s = Math.abs(r - t) / 2, a = r < t ? r + s : r - s;
  return [i, a, o, s];
}
function D0({ sourceNode: e, targetNode: t, selected: n = !1, zIndex: r = 0, elevateOnSelect: o = !1 }) {
  if (!o)
    return r;
  const i = n || t.selected || e.selected, s = Math.max(e.internals.z || 0, t.internals.z || 0, 1e3);
  return r + (i ? s : 0);
}
function V0({ sourceNode: e, targetNode: t, width: n, height: r, transform: o }) {
  const i = Ki(bi(e), bi(t));
  i.x === i.x2 && (i.x2 += 1), i.y === i.y2 && (i.y2 += 1);
  const s = {
    x: -o[0] / o[2],
    y: -o[1] / o[2],
    width: n / o[2],
    height: r / o[2]
  };
  return $o(s, Gi(i)) > 0;
}
const A0 = ({ source: e, sourceHandle: t, target: n, targetHandle: r }) => `xy-edge__${e}${t || ""}-${n}${r || ""}`, O0 = (e, t) => t.some((n) => n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)), L0 = (e, t) => {
  if (!e.source || !e.target)
    return t;
  let n;
  return C0(e) ? n = { ...e } : n = {
    ...e,
    id: A0(e)
  }, O0(n, t) ? t : (n.sourceHandle === null && delete n.sourceHandle, n.targetHandle === null && delete n.targetHandle, t.concat(n));
};
function Rs({ sourceX: e, sourceY: t, targetX: n, targetY: r }) {
  const [o, i, s, a] = _c({
    sourceX: e,
    sourceY: t,
    targetX: n,
    targetY: r
  });
  return [`M ${e},${t}L ${n},${r}`, o, i, s, a];
}
const Pl = {
  [He.Left]: { x: -1, y: 0 },
  [He.Right]: { x: 1, y: 0 },
  [He.Top]: { x: 0, y: -1 },
  [He.Bottom]: { x: 0, y: 1 }
}, I0 = ({ source: e, sourcePosition: t = He.Bottom, target: n }) => t === He.Left || t === He.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 }, Nl = (e, t) => Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
function z0({ source: e, sourcePosition: t = He.Bottom, target: n, targetPosition: r = He.Top, center: o, offset: i }) {
  const s = Pl[t], a = Pl[r], l = { x: e.x + s.x * i, y: e.y + s.y * i }, u = { x: n.x + a.x * i, y: n.y + a.y * i }, c = I0({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", f = c[d];
  let h = [], v, _;
  const x = { x: 0, y: 0 }, k = { x: 0, y: 0 }, [m, b, p, C] = _c({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[d] * a[d] === -1) {
    v = o.x ?? m, _ = o.y ?? b;
    const S = [
      { x: v, y: l.y },
      { x: v, y: u.y }
    ], D = [
      { x: l.x, y: _ },
      { x: u.x, y: _ }
    ];
    s[d] === f ? h = d === "x" ? S : D : h = d === "x" ? D : S;
  } else {
    const S = [{ x: l.x, y: u.y }], D = [{ x: u.x, y: l.y }];
    if (d === "x" ? h = s.x === f ? D : S : h = s.y === f ? S : D, t === r) {
      const R = Math.abs(e[d] - n[d]);
      if (R <= i) {
        const E = Math.min(i - 1, i - R);
        s[d] === f ? x[d] = (l[d] > e[d] ? -1 : 1) * E : k[d] = (u[d] > n[d] ? -1 : 1) * E;
      }
    }
    if (t !== r) {
      const R = d === "x" ? "y" : "x", E = s[d] === a[R], N = l[R] > u[R], $ = l[R] < u[R];
      (s[d] === 1 && (!E && N || E && $) || s[d] !== 1 && (!E && $ || E && N)) && (h = d === "x" ? S : D);
    }
    const L = { x: l.x + x.x, y: l.y + x.y }, A = { x: u.x + k.x, y: u.y + k.y }, I = Math.max(Math.abs(L.x - h[0].x), Math.abs(A.x - h[0].x)), O = Math.max(Math.abs(L.y - h[0].y), Math.abs(A.y - h[0].y));
    I >= O ? (v = (L.x + A.x) / 2, _ = h[0].y) : (v = h[0].x, _ = (L.y + A.y) / 2);
  }
  return [[
    e,
    { x: l.x + x.x, y: l.y + x.y },
    ...h,
    { x: u.x + k.x, y: u.y + k.y },
    n
  ], v, _, p, C];
}
function R0(e, t, n, r) {
  const o = Math.min(Nl(e, t) / 2, Nl(t, n) / 2, r), { x: i, y: s } = t;
  if (e.x === i && i === n.x || e.y === s && s === n.y)
    return `L${i} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${i + o * u},${s}Q ${i},${s} ${i},${s + o * c}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${i},${s + o * l}Q ${i},${s} ${i + o * a},${s}`;
}
function ki({ sourceX: e, sourceY: t, sourcePosition: n = He.Bottom, targetX: r, targetY: o, targetPosition: i = He.Top, borderRadius: s = 5, centerX: a, centerY: l, offset: u = 20 }) {
  const [c, d, f, h, v] = z0({
    source: { x: e, y: t },
    sourcePosition: n,
    target: { x: r, y: o },
    targetPosition: i,
    center: { x: a, y: l },
    offset: u
  });
  return [c.reduce((x, k, m) => {
    let b = "";
    return m > 0 && m < c.length - 1 ? b = R0(c[m - 1], k, c[m + 1], s) : b = `${m === 0 ? "M" : "L"}${k.x} ${k.y}`, x += b, x;
  }, ""), d, f, h, v];
}
function Tl(e) {
  var t;
  return e && !!(e.internals.handleBounds || (t = e.handles) != null && t.length) && !!(e.measured.width || e.width || e.initialWidth);
}
function B0(e) {
  var d;
  const { sourceNode: t, targetNode: n } = e;
  if (!Tl(t) || !Tl(n))
    return null;
  const r = t.internals.handleBounds || Ml(t.handles), o = n.internals.handleBounds || Ml(n.handles), i = Hl((r == null ? void 0 : r.source) ?? [], e.sourceHandle), s = Hl(
    // when connection type is loose we can define all handles as sources and connect source -> source
    e.connectionMode === fr.Strict ? (o == null ? void 0 : o.target) ?? [] : ((o == null ? void 0 : o.target) ?? []).concat((o == null ? void 0 : o.source) ?? []),
    e.targetHandle
  );
  if (!i || !s)
    return (d = e.onError) == null || d.call(e, "008", zr.error008(i ? "target" : "source", {
      id: e.id,
      sourceHandle: e.sourceHandle,
      targetHandle: e.targetHandle
    })), null;
  const a = (i == null ? void 0 : i.position) || He.Bottom, l = (s == null ? void 0 : s.position) || He.Top, u = Eo(t, i, a), c = Eo(n, s, l);
  return {
    sourceX: u.x,
    sourceY: u.y,
    targetX: c.x,
    targetY: c.y,
    sourcePosition: a,
    targetPosition: l
  };
}
function Ml(e) {
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
function Eo(e, t, n = He.Left, r = !1) {
  const o = ((t == null ? void 0 : t.x) ?? 0) + e.internals.positionAbsolute.x, i = ((t == null ? void 0 : t.y) ?? 0) + e.internals.positionAbsolute.y, { width: s, height: a } = t ?? nr(e);
  if (r)
    return { x: o + s / 2, y: i + a / 2 };
  switch ((t == null ? void 0 : t.position) ?? n) {
    case He.Top:
      return { x: o + s / 2, y: i };
    case He.Right:
      return { x: o + s, y: i + a / 2 };
    case He.Bottom:
      return { x: o + s / 2, y: i + a };
    case He.Left:
      return { x: o, y: i + a / 2 };
  }
}
function Hl(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Bs(e, t) {
  return e ? typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((r) => `${r}=${e[r]}`).join("&")}` : "";
}
function q0(e, { id: t, defaultColor: n, defaultMarkerStart: r, defaultMarkerEnd: o }) {
  const i = /* @__PURE__ */ new Set();
  return e.reduce((s, a) => ([a.markerStart || r, a.markerEnd || o].forEach((l) => {
    if (l && typeof l == "object") {
      const u = Bs(l, t);
      i.has(u) || (s.push({ id: u, color: l.color || n, ...l }), i.add(u));
    }
  }), s), []).sort((s, a) => s.id.localeCompare(a.id));
}
function Y0(e, t, n, r, o) {
  let i = 0.5;
  o === "start" ? i = 0 : o === "end" && (i = 1);
  let s = [
    (e.x + e.width * i) * t.zoom + t.x,
    e.y * t.zoom + t.y - r
  ], a = [-100 * i, -100];
  switch (n) {
    case He.Right:
      s = [
        (e.x + e.width) * t.zoom + t.x + r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [0, -100 * i];
      break;
    case He.Bottom:
      s[1] = (e.y + e.height) * t.zoom + t.y + r, a[1] = 0;
      break;
    case He.Left:
      s = [
        e.x * t.zoom + t.x - r,
        (e.y + e.height * i) * t.zoom + t.y
      ], a = [-100, -100 * i];
      break;
  }
  return `translate(${s[0]}px, ${s[1]}px) translate(${a[0]}%, ${a[1]}%)`;
}
const xa = {
  nodeOrigin: [0, 0],
  nodeExtent: _i,
  elevateNodesOnSelect: !0,
  defaults: {}
}, Z0 = {
  ...xa,
  checkEquality: !0
};
function ba(e, t) {
  const n = { ...e };
  for (const r in t)
    t[r] !== void 0 && (n[r] = t[r]);
  return n;
}
function F0(e, t, n) {
  const r = ba(xa, n);
  for (const o of e.values())
    if (o.parentId)
      Ca(o, e, t, r);
    else {
      const i = Ao(o, r.nodeOrigin), s = qr(o.extent) ? o.extent : r.nodeExtent, a = gr(i, s, nr(o));
      o.internals.positionAbsolute = a;
    }
}
function xc(e, t, n, r) {
  var a, l;
  const o = ba(Z0, r), i = new Map(t), s = o != null && o.elevateNodesOnSelect ? 1e3 : 0;
  t.clear(), n.clear();
  for (const u of e) {
    let c = i.get(u.id);
    if (o.checkEquality && u === (c == null ? void 0 : c.internals.userNode))
      t.set(u.id, c);
    else {
      const d = Ao(u, o.nodeOrigin), f = qr(u.extent) ? u.extent : o.nodeExtent, h = gr(d, f, nr(u));
      c = {
        ...o.defaults,
        ...u,
        measured: {
          width: (a = u.measured) == null ? void 0 : a.width,
          height: (l = u.measured) == null ? void 0 : l.height
        },
        internals: {
          positionAbsolute: h,
          // if user re-initializes the node or removes `measured` for whatever reason, we reset the handleBounds so that the node gets re-measured
          handleBounds: u.measured ? c == null ? void 0 : c.internals.handleBounds : void 0,
          z: bc(u, s),
          userNode: u
        }
      }, t.set(u.id, c);
    }
    u.parentId && Ca(c, t, n, r);
  }
}
function X0(e, t) {
  if (!e.parentId)
    return;
  const n = t.get(e.parentId);
  n ? n.set(e.id, e) : t.set(e.parentId, /* @__PURE__ */ new Map([[e.id, e]]));
}
function Ca(e, t, n, r) {
  const { elevateNodesOnSelect: o, nodeOrigin: i, nodeExtent: s } = ba(xa, r), a = e.parentId, l = t.get(a);
  if (!l) {
    console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);
    return;
  }
  X0(e, n);
  const u = o ? 1e3 : 0, { x: c, y: d, z: f } = W0(e, l, i, s, u), { positionAbsolute: h } = e.internals, v = c !== h.x || d !== h.y;
  (v || f !== e.internals.z) && t.set(e.id, {
    ...e,
    internals: {
      ...e.internals,
      positionAbsolute: v ? { x: c, y: d } : h,
      z: f
    }
  });
}
function bc(e, t) {
  return (Hn(e.zIndex) ? e.zIndex : 0) + (e.selected ? t : 0);
}
function W0(e, t, n, r, o) {
  const { x: i, y: s } = t.internals.positionAbsolute, a = nr(e), l = Ao(e, n), u = qr(e.extent) ? gr(l, e.extent, a) : l;
  let c = gr({ x: i + u.x, y: s + u.y }, r, a);
  e.extent === "parent" && (c = gc(c, a, t));
  const d = bc(e, o), f = t.internals.z ?? 0;
  return {
    x: c.x,
    y: c.y,
    z: f > d ? f : d
  };
}
function K0(e, t, n, r = [0, 0]) {
  var s;
  const o = [], i = /* @__PURE__ */ new Map();
  for (const a of e) {
    const l = t.get(a.parentId);
    if (!l)
      continue;
    const u = ((s = i.get(a.parentId)) == null ? void 0 : s.expandedRect) ?? Br(l), c = vc(u, a.rect);
    i.set(a.parentId, { expandedRect: c, parent: l });
  }
  return i.size > 0 && i.forEach(({ expandedRect: a, parent: l }, u) => {
    var b;
    const c = l.internals.positionAbsolute, d = nr(l), f = l.origin ?? r, h = a.x < c.x ? Math.round(Math.abs(c.x - a.x)) : 0, v = a.y < c.y ? Math.round(Math.abs(c.y - a.y)) : 0, _ = Math.max(d.width, Math.round(a.width)), x = Math.max(d.height, Math.round(a.height)), k = (_ - d.width) * f[0], m = (x - d.height) * f[1];
    (h > 0 || v > 0 || k || m) && (o.push({
      id: u,
      type: "position",
      position: {
        x: l.position.x - h + k,
        y: l.position.y - v + m
      }
    }), (b = n.get(u)) == null || b.forEach((p) => {
      e.some((C) => C.id === p.id) || o.push({
        id: p.id,
        type: "position",
        position: {
          x: p.position.x + h,
          y: p.position.y + v
        }
      });
    })), (d.width < a.width || d.height < a.height || h || v) && o.push({
      id: u,
      type: "dimensions",
      setAttributes: !0,
      dimensions: {
        width: _ + (h ? f[0] * h - k : 0),
        height: x + (v ? f[1] * v - m : 0)
      }
    });
  }), o;
}
function G0(e, t, n, r, o, i) {
  const s = r == null ? void 0 : r.querySelector(".xyflow__viewport");
  let a = !1;
  if (!s)
    return { changes: [], updatedInternals: a };
  const l = [], u = window.getComputedStyle(s), { m22: c } = new window.DOMMatrixReadOnly(u.transform), d = [];
  for (const f of e.values()) {
    const h = t.get(f.id);
    if (!h)
      continue;
    if (h.hidden) {
      t.set(h.id, {
        ...h,
        internals: {
          ...h.internals,
          handleBounds: void 0
        }
      }), a = !0;
      continue;
    }
    const v = _a(f.nodeElement), _ = h.measured.width !== v.width || h.measured.height !== v.height;
    if (!!(v.width && v.height && (_ || !h.internals.handleBounds || f.force))) {
      const k = f.nodeElement.getBoundingClientRect(), m = qr(h.extent) ? h.extent : i;
      let { positionAbsolute: b } = h.internals;
      h.parentId && h.extent === "parent" ? b = gc(b, v, t.get(h.parentId)) : m && (b = gr(b, m, v));
      const p = {
        ...h,
        measured: v,
        internals: {
          ...h.internals,
          positionAbsolute: b,
          handleBounds: {
            source: El("source", f.nodeElement, k, c, h.id),
            target: El("target", f.nodeElement, k, c, h.id)
          }
        }
      };
      t.set(h.id, p), h.parentId && Ca(p, t, n, { nodeOrigin: o }), a = !0, _ && (l.push({
        id: h.id,
        type: "dimensions",
        dimensions: v
      }), h.expandParent && h.parentId && d.push({
        id: h.id,
        parentId: h.parentId,
        rect: Br(p, o)
      }));
    }
  }
  if (d.length > 0) {
    const f = K0(d, t, n, o);
    l.push(...f);
  }
  return { changes: l, updatedInternals: a };
}
async function j0({ delta: e, panZoom: t, transform: n, translateExtent: r, width: o, height: i }) {
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
function Dl(e, t, n, r, o, i) {
  let s = o;
  const a = r.get(s) || /* @__PURE__ */ new Map();
  r.set(s, a.set(n, t)), s = `${o}-${e}`;
  const l = r.get(s) || /* @__PURE__ */ new Map();
  if (r.set(s, l.set(n, t)), i) {
    s = `${o}-${e}-${i}`;
    const u = r.get(s) || /* @__PURE__ */ new Map();
    r.set(s, u.set(n, t));
  }
}
function Cc(e, t, n) {
  e.clear(), t.clear();
  for (const r of n) {
    const { source: o, target: i, sourceHandle: s = null, targetHandle: a = null } = r, l = { edgeId: r.id, source: o, target: i, sourceHandle: s, targetHandle: a }, u = `${o}-${s}--${i}-${a}`, c = `${i}-${a}--${o}-${s}`;
    Dl("source", l, c, e, o, s), Dl("target", l, u, e, i, a), t.set(r.id, r);
  }
}
function U0(e, t) {
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
function kc(e, t) {
  if (!e.parentId)
    return !1;
  const n = t.get(e.parentId);
  return n ? n.selected ? !0 : kc(n, t) : !1;
}
function Vl(e, t, n) {
  var o;
  let r = e;
  do {
    if ((o = r == null ? void 0 : r.matches) != null && o.call(r, t))
      return !0;
    if (r === n)
      return !1;
    r = r == null ? void 0 : r.parentElement;
  } while (r);
  return !1;
}
function J0(e, t, n, r) {
  const o = /* @__PURE__ */ new Map();
  for (const [i, s] of e)
    if ((s.selected || s.id === r) && (!s.parentId || !kc(s, e)) && (s.draggable || t && typeof s.draggable > "u")) {
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
function gs({ nodeId: e, dragItems: t, nodeLookup: n, dragging: r = !0 }) {
  var s, a, l;
  const o = [];
  for (const [u, c] of t) {
    const d = (s = n.get(u)) == null ? void 0 : s.internals.userNode;
    d && o.push({
      ...d,
      position: c.position,
      dragging: r
    });
  }
  if (!e)
    return [o[0], o];
  const i = (a = n.get(e)) == null ? void 0 : a.internals.userNode;
  return [
    i ? {
      ...i,
      position: ((l = t.get(e)) == null ? void 0 : l.position) || i.position,
      dragging: r
    } : o[0],
    o
  ];
}
function Q0({ onNodeMouseDown: e, getStoreItems: t, onDragStart: n, onDrag: r, onDragStop: o }) {
  let i = { x: null, y: null }, s = 0, a = /* @__PURE__ */ new Map(), l = !1, u = { x: 0, y: 0 }, c = null, d = !1, f = null, h = !1;
  function v({ noDragClassName: x, handleSelector: k, domNode: m, isSelectable: b, nodeId: p, nodeClickDistance: C = 0 }) {
    f = jt(m);
    function H({ x: A, y: I }, O) {
      const { nodeLookup: R, nodeExtent: E, snapGrid: N, snapToGrid: $, nodeOrigin: T, onNodeDrag: P, onSelectionDrag: M, onError: z, updateNodePositions: q } = t();
      i = { x: A, y: I };
      let X = !1, U = { x: 0, y: 0, x2: 0, y2: 0 };
      if (a.size > 1 && E) {
        const G = Oo(a);
        U = zs(G);
      }
      for (const [G, W] of a) {
        if (!R.has(G))
          continue;
        let le = { x: A - W.distance.x, y: I - W.distance.y };
        $ && (le = ya(le, N));
        let ye = [
          [E[0][0], E[0][1]],
          [E[1][0], E[1][1]]
        ];
        if (a.size > 1 && E && !W.extent) {
          const { positionAbsolute: Te } = W.internals, Q = Te.x - U.x + E[0][0], re = Te.x + W.measured.width - U.x2 + E[1][0], Ee = Te.y - U.y + E[0][1], _e = Te.y + W.measured.height - U.y2 + E[1][1];
          ye = [
            [Q, Ee],
            [re, _e]
          ];
        }
        const { position: ge, positionAbsolute: oe } = E0({
          nodeId: G,
          nextPosition: le,
          nodeLookup: R,
          nodeExtent: ye,
          nodeOrigin: T,
          onError: z
        });
        X = X || W.position.x !== ge.x || W.position.y !== ge.y, W.position = ge, W.internals.positionAbsolute = oe;
      }
      if (X && (q(a, !0), O && (r || P || !p && M))) {
        const [G, W] = gs({
          nodeId: p,
          dragItems: a,
          nodeLookup: R
        });
        r == null || r(O, a, G, W), P == null || P(O, G, W), p || M == null || M(O, W);
      }
    }
    async function S() {
      if (!c)
        return;
      const { transform: A, panBy: I, autoPanSpeed: O, autoPanOnNodeDrag: R } = t();
      if (!R) {
        l = !1, cancelAnimationFrame(s);
        return;
      }
      const [E, N] = hc(u, c, O);
      (E !== 0 || N !== 0) && (i.x = (i.x ?? 0) - E / A[2], i.y = (i.y ?? 0) - N / A[2], await I({ x: E, y: N }) && H(i, null)), s = requestAnimationFrame(S);
    }
    function D(A) {
      var X;
      const { nodeLookup: I, multiSelectionActive: O, nodesDraggable: R, transform: E, snapGrid: N, snapToGrid: $, selectNodesOnDrag: T, onNodeDragStart: P, onSelectionDragStart: M, unselectNodesAndEdges: z } = t();
      d = !0, (!T || !b) && !O && p && ((X = I.get(p)) != null && X.selected || z()), b && T && p && (e == null || e(p));
      const q = fs(A.sourceEvent, { transform: E, snapGrid: N, snapToGrid: $, containerBounds: c });
      if (i = q, a = J0(I, R, q, p), a.size > 0 && (n || P || !p && M)) {
        const [U, G] = gs({
          nodeId: p,
          dragItems: a,
          nodeLookup: I
        });
        n == null || n(A.sourceEvent, a, U, G), P == null || P(A.sourceEvent, U, G), p || M == null || M(A.sourceEvent, G);
      }
    }
    const L = Mh().clickDistance(C).on("start", (A) => {
      const { domNode: I, nodeDragThreshold: O, transform: R, snapGrid: E, snapToGrid: N } = t();
      c = (I == null ? void 0 : I.getBoundingClientRect()) || null, h = !1, O === 0 && D(A), i = fs(A.sourceEvent, { transform: R, snapGrid: E, snapToGrid: N, containerBounds: c }), u = An(A.sourceEvent, c);
    }).on("drag", (A) => {
      const { autoPanOnNodeDrag: I, transform: O, snapGrid: R, snapToGrid: E, nodeDragThreshold: N, nodeLookup: $ } = t(), T = fs(A.sourceEvent, { transform: O, snapGrid: R, snapToGrid: E, containerBounds: c });
      if ((A.sourceEvent.type === "touchmove" && A.sourceEvent.touches.length > 1 || // if user deletes a node while dragging, we need to abort the drag to prevent errors
      p && !$.has(p)) && (h = !0), !h) {
        if (!l && I && d && (l = !0, S()), !d) {
          const P = T.xSnapped - (i.x ?? 0), M = T.ySnapped - (i.y ?? 0);
          Math.sqrt(P * P + M * M) > N && D(A);
        }
        (i.x !== T.xSnapped || i.y !== T.ySnapped) && a && d && (u = An(A.sourceEvent, c), H(T, A.sourceEvent));
      }
    }).on("end", (A) => {
      if (!(!d || h) && (l = !1, d = !1, cancelAnimationFrame(s), a.size > 0)) {
        const { nodeLookup: I, updateNodePositions: O, onNodeDragStop: R, onSelectionDragStop: E } = t();
        if (O(a, !1), o || R || !p && E) {
          const [N, $] = gs({
            nodeId: p,
            dragItems: a,
            nodeLookup: I,
            dragging: !1
          });
          o == null || o(A.sourceEvent, a, N, $), R == null || R(A.sourceEvent, N, $), p || E == null || E(A.sourceEvent, $);
        }
      }
    }).filter((A) => {
      const I = A.target;
      return !A.button && (!x || !Vl(I, `.${x}`, m)) && (!k || Vl(I, k, m));
    });
    f.call(L);
  }
  function _() {
    f == null || f.on(".drag", null);
  }
  return {
    update: v,
    destroy: _
  };
}
function ep(e, t, n) {
  const r = [], o = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const i of t.values())
    $o(o, Br(i)) > 0 && r.push(i);
  return r;
}
const tp = 250;
function np(e, t, n, r) {
  var a, l;
  let o = [], i = 1 / 0;
  const s = ep(e, n, t + tp);
  for (const u of s) {
    const c = [...((a = u.internals.handleBounds) == null ? void 0 : a.source) ?? [], ...((l = u.internals.handleBounds) == null ? void 0 : l.target) ?? []];
    for (const d of c) {
      if (r.nodeId === d.nodeId && r.type === d.type && r.id === d.id)
        continue;
      const { x: f, y: h } = Eo(u, d, d.position, !0), v = Math.sqrt(Math.pow(f - e.x, 2) + Math.pow(h - e.y, 2));
      v > t || (v < i ? (o = [{ ...d, x: f, y: h }], i = v) : v === i && o.push({ ...d, x: f, y: h }));
    }
  }
  if (!o.length)
    return null;
  if (o.length > 1) {
    const u = r.type === "source" ? "target" : "source";
    return o.find((c) => c.type === u) ?? o[0];
  }
  return o[0];
}
function $c(e, t, n, r, o, i = !1) {
  var u, c, d;
  const s = r.get(e);
  if (!s)
    return null;
  const a = o === "strict" ? (u = s.internals.handleBounds) == null ? void 0 : u[t] : [...((c = s.internals.handleBounds) == null ? void 0 : c.source) ?? [], ...((d = s.internals.handleBounds) == null ? void 0 : d.target) ?? []], l = (n ? a == null ? void 0 : a.find((f) => f.id === n) : a == null ? void 0 : a[0]) ?? null;
  return l && i ? { ...l, ...Eo(s, l, l.position, !0) } : l;
}
function Ec(e, t) {
  return e || (t != null && t.classList.contains("target") ? "target" : t != null && t.classList.contains("source") ? "source" : null);
}
function rp(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
const Sc = () => !0;
function op(e, { connectionMode: t, connectionRadius: n, handleId: r, nodeId: o, edgeUpdaterType: i, isTarget: s, domNode: a, nodeLookup: l, lib: u, autoPanOnConnect: c, flowId: d, panBy: f, cancelConnection: h, onConnectStart: v, onConnect: _, onConnectEnd: x, isValidConnection: k = Sc, onReconnectEnd: m, updateConnection: b, getTransform: p, getFromHandle: C, autoPanSpeed: H }) {
  const S = N0(e.target);
  let D = 0, L;
  const { x: A, y: I } = An(e), O = S == null ? void 0 : S.elementFromPoint(A, I), R = Ec(i, O), E = a == null ? void 0 : a.getBoundingClientRect();
  if (!E || !R)
    return;
  const N = $c(o, R, r, l, t);
  if (!N)
    return;
  let $ = An(e, E), T = !1, P = null, M = !1, z = null;
  function q() {
    if (!c || !E)
      return;
    const [oe, Te] = hc($, E, H);
    f({ x: oe, y: Te }), D = requestAnimationFrame(q);
  }
  const X = {
    ...N,
    nodeId: o,
    type: R,
    position: N.position
  }, U = l.get(o), W = {
    inProgress: !0,
    isValid: null,
    from: Eo(U, X, He.Left, !0),
    fromHandle: X,
    fromPosition: X.position,
    fromNode: U,
    to: $,
    toHandle: null,
    toPosition: _l[X.position],
    toNode: null
  };
  b(W);
  let le = W;
  v == null || v(e, { nodeId: o, handleId: r, handleType: R });
  function ye(oe) {
    if (!C() || !X) {
      ge(oe);
      return;
    }
    const Te = p();
    $ = An(oe, E), L = np(Lo($, Te, !1, [1, 1]), n, l, X), T || (q(), T = !0);
    const Q = Pc(oe, {
      handle: L,
      connectionMode: t,
      fromNodeId: o,
      fromHandleId: r,
      fromType: s ? "target" : "source",
      isValidConnection: k,
      doc: S,
      lib: u,
      flowId: d,
      nodeLookup: l
    });
    z = Q.handleDomNode, P = Q.connection, M = rp(!!L, Q.isValid);
    const re = {
      // from stays the same
      ...le,
      isValid: M,
      to: L && M ? pc({ x: L.x, y: L.y }, Te) : $,
      toHandle: Q.toHandle,
      toPosition: M && Q.toHandle ? Q.toHandle.position : _l[X.position],
      toNode: Q.toHandle ? l.get(Q.toHandle.nodeId) : null
    };
    M && L && le.toHandle && re.toHandle && le.toHandle.type === re.toHandle.type && le.toHandle.nodeId === re.toHandle.nodeId && le.toHandle.id === re.toHandle.id && le.to.x === re.to.x && le.to.y === re.to.y || (b(re), le = re);
  }
  function ge(oe) {
    (L || z) && P && M && (_ == null || _(P));
    const { inProgress: Te, ...Q } = le, re = {
      ...Q,
      toPosition: le.toHandle ? le.toPosition : null
    };
    x == null || x(oe, re), i && (m == null || m(oe, re)), h(), cancelAnimationFrame(D), T = !1, M = !1, P = null, z = null, S.removeEventListener("mousemove", ye), S.removeEventListener("mouseup", ge), S.removeEventListener("touchmove", ye), S.removeEventListener("touchend", ge);
  }
  S.addEventListener("mousemove", ye), S.addEventListener("mouseup", ge), S.addEventListener("touchmove", ye), S.addEventListener("touchend", ge);
}
function Pc(e, { handle: t, connectionMode: n, fromNodeId: r, fromHandleId: o, fromType: i, doc: s, lib: a, flowId: l, isValidConnection: u = Sc, nodeLookup: c }) {
  const d = i === "target", f = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t == null ? void 0 : t.nodeId}-${t == null ? void 0 : t.id}-${t == null ? void 0 : t.type}"]`) : null, { x: h, y: v } = An(e), _ = s.elementFromPoint(h, v), x = _ != null && _.classList.contains(`${a}-flow__handle`) ? _ : f, k = {
    handleDomNode: x,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (x) {
    const m = Ec(void 0, x), b = x.getAttribute("data-nodeid"), p = x.getAttribute("data-handleid"), C = x.classList.contains("connectable"), H = x.classList.contains("connectableend");
    if (!b || !m)
      return k;
    const S = {
      source: d ? b : r,
      sourceHandle: d ? p : o,
      target: d ? r : b,
      targetHandle: d ? o : p
    };
    k.connection = S;
    const L = C && H && (n === fr.Strict ? d && m === "source" || !d && m === "target" : b !== r || p !== o);
    k.isValid = L && u(S), k.toHandle = $c(b, m, p, c, n, !1);
  }
  return k;
}
const ip = {
  onPointerDown: op,
  isValid: Pc
};
function sp({ domNode: e, panZoom: t, getTransform: n, getViewScale: r }) {
  const o = jt(e);
  function i({ translateExtent: a, width: l, height: u, zoomStep: c = 10, pannable: d = !0, zoomable: f = !0, inversePan: h = !1 }) {
    const v = (b) => {
      const p = n();
      if (b.sourceEvent.type !== "wheel" || !t)
        return;
      const C = -b.sourceEvent.deltaY * (b.sourceEvent.deltaMode === 1 ? 0.05 : b.sourceEvent.deltaMode ? 1 : 2e-3) * c, H = p[2] * Math.pow(2, C);
      t.scaleTo(H);
    };
    let _ = [0, 0];
    const x = (b) => {
      (b.sourceEvent.type === "mousedown" || b.sourceEvent.type === "touchstart") && (_ = [
        b.sourceEvent.clientX ?? b.sourceEvent.touches[0].clientX,
        b.sourceEvent.clientY ?? b.sourceEvent.touches[0].clientY
      ]);
    }, k = (b) => {
      const p = n();
      if (b.sourceEvent.type !== "mousemove" && b.sourceEvent.type !== "touchmove" || !t)
        return;
      const C = [
        b.sourceEvent.clientX ?? b.sourceEvent.touches[0].clientX,
        b.sourceEvent.clientY ?? b.sourceEvent.touches[0].clientY
      ], H = [C[0] - _[0], C[1] - _[1]];
      _ = C;
      const S = r() * Math.max(p[2], Math.log(p[2])) * (h ? -1 : 1), D = {
        x: p[0] - H[0] * S,
        y: p[1] - H[1] * S
      }, L = [
        [0, 0],
        [l, u]
      ];
      t.setViewportConstrained({
        x: D.x,
        y: D.y,
        zoom: p[2]
      }, L, a);
    }, m = cc().on("start", x).on("zoom", d ? k : null).on("zoom.wheel", f ? v : null);
    o.call(m, {});
  }
  function s() {
    o.on("zoom", null);
  }
  return {
    update: i,
    destroy: s,
    pointer: sn
  };
}
const ap = (e, t) => e.x !== t.x || e.y !== t.y || e.zoom !== t.k, ji = (e) => ({
  x: e.x,
  y: e.y,
  zoom: e.k
}), hs = ({ x: e, y: t, zoom: n }) => Wi.translate(e, t).scale(n), br = (e, t) => e.target.closest(`.${t}`), Nc = (e, t) => t === 2 && Array.isArray(e) && e.includes(2), vs = (e, t = 0, n = () => {
}) => {
  const r = typeof t == "number" && t > 0;
  return r || n(), r ? e.transition().duration(t).on("end", n) : e;
}, Tc = (e) => {
  const t = e.ctrlKey && Ci() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
};
function lp({ zoomPanValues: e, noWheelClassName: t, d3Selection: n, d3Zoom: r, panOnScrollMode: o, panOnScrollSpeed: i, zoomOnPinch: s, onPanZoomStart: a, onPanZoom: l, onPanZoomEnd: u }) {
  return (c) => {
    if (br(c, t))
      return !1;
    c.preventDefault(), c.stopImmediatePropagation();
    const d = n.property("__zoom").k || 1;
    if (c.ctrlKey && s) {
      const x = sn(c), k = Tc(c), m = d * Math.pow(2, k);
      r.scaleTo(n, m, x, c);
      return;
    }
    const f = c.deltaMode === 1 ? 20 : 1;
    let h = o === Gn.Vertical ? 0 : c.deltaX * f, v = o === Gn.Horizontal ? 0 : c.deltaY * f;
    !Ci() && c.shiftKey && o !== Gn.Vertical && (h = c.deltaY * f, v = 0), r.translateBy(
      n,
      -(h / d) * i,
      -(v / d) * i,
      // @ts-ignore
      { internal: !0 }
    );
    const _ = ji(n.property("__zoom"));
    clearTimeout(e.panScrollTimeout), e.isPanScrolling || (e.isPanScrolling = !0, a == null || a(c, _)), e.isPanScrolling && (l == null || l(c, _), e.panScrollTimeout = setTimeout(() => {
      u == null || u(c, _), e.isPanScrolling = !1;
    }, 150));
  };
}
function up({ noWheelClassName: e, preventScrolling: t, d3ZoomHandler: n }) {
  return function(r, o) {
    if (!t && r.type === "wheel" && !r.ctrlKey || br(r, e))
      return null;
    r.preventDefault(), n.call(this, r, o);
  };
}
function cp({ zoomPanValues: e, onDraggingChange: t, onPanZoomStart: n }) {
  return (r) => {
    var i, s, a;
    if ((i = r.sourceEvent) != null && i.internal)
      return;
    const o = ji(r.transform);
    e.mouseButton = ((s = r.sourceEvent) == null ? void 0 : s.button) || 0, e.isZoomingOrPanning = !0, e.prevViewport = o, ((a = r.sourceEvent) == null ? void 0 : a.type) === "mousedown" && t(!0), n && (n == null || n(r.sourceEvent, o));
  };
}
function dp({ zoomPanValues: e, panOnDrag: t, onPaneContextMenu: n, onTransformChange: r, onPanZoom: o }) {
  return (i) => {
    var s, a;
    e.usedRightMouseButton = !!(n && Nc(t, e.mouseButton ?? 0)), (s = i.sourceEvent) != null && s.sync || r([i.transform.x, i.transform.y, i.transform.k]), o && !((a = i.sourceEvent) != null && a.internal) && (o == null || o(i.sourceEvent, ji(i.transform)));
  };
}
function fp({ zoomPanValues: e, panOnDrag: t, panOnScroll: n, onDraggingChange: r, onPanZoomEnd: o, onPaneContextMenu: i }) {
  return (s) => {
    var a;
    if (!((a = s.sourceEvent) != null && a.internal) && (e.isZoomingOrPanning = !1, i && Nc(t, e.mouseButton ?? 0) && !e.usedRightMouseButton && s.sourceEvent && i(s.sourceEvent), e.usedRightMouseButton = !1, r(!1), o && ap(e.prevViewport, s.transform))) {
      const l = ji(s.transform);
      e.prevViewport = l, clearTimeout(e.timerId), e.timerId = setTimeout(
        () => {
          o == null || o(s.sourceEvent, l);
        },
        // we need a setTimeout for panOnScroll to supress multiple end events fired during scroll
        n ? 150 : 0
      );
    }
  };
}
function gp({ zoomActivationKeyPressed: e, zoomOnScroll: t, zoomOnPinch: n, panOnDrag: r, panOnScroll: o, zoomOnDoubleClick: i, userSelectionActive: s, noWheelClassName: a, noPanClassName: l, lib: u }) {
  return (c) => {
    var v;
    const d = e || t, f = n && c.ctrlKey;
    if (c.button === 1 && c.type === "mousedown" && (br(c, `${u}-flow__node`) || br(c, `${u}-flow__edge`)))
      return !0;
    if (!r && !d && !o && !i && !n || s || br(c, a) && c.type === "wheel" || br(c, l) && (c.type !== "wheel" || o && c.type === "wheel" && !e) || !n && c.ctrlKey && c.type === "wheel")
      return !1;
    if (!n && c.type === "touchstart" && ((v = c.touches) == null ? void 0 : v.length) > 1)
      return c.preventDefault(), !1;
    if (!d && !o && !f && c.type === "wheel" || !r && (c.type === "mousedown" || c.type === "touchstart") || Array.isArray(r) && !r.includes(c.button) && c.type === "mousedown")
      return !1;
    const h = Array.isArray(r) && r.includes(c.button) || !c.button || c.button <= 1;
    return (!c.ctrlKey || c.type === "wheel") && h;
  };
}
function hp({ domNode: e, minZoom: t, maxZoom: n, paneClickDistance: r, translateExtent: o, viewport: i, onPanZoom: s, onPanZoomStart: a, onPanZoomEnd: l, onDraggingChange: u }) {
  const c = {
    isZoomingOrPanning: !1,
    usedRightMouseButton: !1,
    prevViewport: { x: 0, y: 0, zoom: 0 },
    mouseButton: 0,
    timerId: void 0,
    panScrollTimeout: void 0,
    isPanScrolling: !1
  }, d = e.getBoundingClientRect(), f = cc().clickDistance(!Hn(r) || r < 0 ? 0 : r).scaleExtent([t, n]).translateExtent(o), h = jt(e).call(f);
  b({
    x: i.x,
    y: i.y,
    zoom: Rr(i.zoom, t, n)
  }, [
    [0, 0],
    [d.width, d.height]
  ], o);
  const v = h.on("wheel.zoom"), _ = h.on("dblclick.zoom");
  f.wheelDelta(Tc);
  function x(O, R) {
    return h ? new Promise((E) => {
      f == null || f.transform(vs(h, R == null ? void 0 : R.duration, () => E(!0)), O);
    }) : Promise.resolve(!1);
  }
  function k({ noWheelClassName: O, noPanClassName: R, onPaneContextMenu: E, userSelectionActive: N, panOnScroll: $, panOnDrag: T, panOnScrollMode: P, panOnScrollSpeed: M, preventScrolling: z, zoomOnPinch: q, zoomOnScroll: X, zoomOnDoubleClick: U, zoomActivationKeyPressed: G, lib: W, onTransformChange: le }) {
    N && !c.isZoomingOrPanning && m();
    const ge = $ && !G && !N ? lp({
      zoomPanValues: c,
      noWheelClassName: O,
      d3Selection: h,
      d3Zoom: f,
      panOnScrollMode: P,
      panOnScrollSpeed: M,
      zoomOnPinch: q,
      onPanZoomStart: a,
      onPanZoom: s,
      onPanZoomEnd: l
    }) : up({
      noWheelClassName: O,
      preventScrolling: z,
      d3ZoomHandler: v
    });
    if (h.on("wheel.zoom", ge, { passive: !1 }), !N) {
      const Te = cp({
        zoomPanValues: c,
        onDraggingChange: u,
        onPanZoomStart: a
      });
      f.on("start", Te);
      const Q = dp({
        zoomPanValues: c,
        panOnDrag: T,
        onPaneContextMenu: !!E,
        onPanZoom: s,
        onTransformChange: le
      });
      f.on("zoom", Q);
      const re = fp({
        zoomPanValues: c,
        panOnDrag: T,
        panOnScroll: $,
        onPaneContextMenu: E,
        onPanZoomEnd: l,
        onDraggingChange: u
      });
      f.on("end", re);
    }
    const oe = gp({
      zoomActivationKeyPressed: G,
      panOnDrag: T,
      zoomOnScroll: X,
      panOnScroll: $,
      zoomOnDoubleClick: U,
      zoomOnPinch: q,
      userSelectionActive: N,
      noPanClassName: R,
      noWheelClassName: O,
      lib: W
    });
    f.filter(oe), U ? h.on("dblclick.zoom", _) : h.on("dblclick.zoom", null);
  }
  function m() {
    f.on("zoom", null);
  }
  async function b(O, R, E) {
    const N = hs(O), $ = f == null ? void 0 : f.constrain()(N, R, E);
    return $ && await x($), new Promise((T) => T($));
  }
  async function p(O, R) {
    const E = hs(O);
    return await x(E, R), new Promise((N) => N(E));
  }
  function C(O) {
    if (h) {
      const R = hs(O), E = h.property("__zoom");
      (E.k !== O.zoom || E.x !== O.x || E.y !== O.y) && (f == null || f.transform(h, R, null, { sync: !0 }));
    }
  }
  function H() {
    const O = h ? uc(h.node()) : { x: 0, y: 0, k: 1 };
    return { x: O.x, y: O.y, zoom: O.k };
  }
  function S(O, R) {
    return h ? new Promise((E) => {
      f == null || f.scaleTo(vs(h, R == null ? void 0 : R.duration, () => E(!0)), O);
    }) : Promise.resolve(!1);
  }
  function D(O, R) {
    return h ? new Promise((E) => {
      f == null || f.scaleBy(vs(h, R == null ? void 0 : R.duration, () => E(!0)), O);
    }) : Promise.resolve(!1);
  }
  function L(O) {
    f == null || f.scaleExtent(O);
  }
  function A(O) {
    f == null || f.translateExtent(O);
  }
  function I(O) {
    const R = !Hn(O) || O < 0 ? 0 : O;
    f == null || f.clickDistance(R);
  }
  return {
    update: k,
    destroy: m,
    setViewport: p,
    setViewportConstrained: b,
    getViewport: H,
    scaleTo: S,
    scaleBy: D,
    setScaleExtent: L,
    setTranslateExtent: A,
    syncViewport: C,
    setClickDistance: I
  };
}
var Al;
(function(e) {
  e.Line = "line", e.Handle = "handle";
})(Al || (Al = {}));
var vp = /* @__PURE__ */ ie('<div role="button" tabindex="-1"><!></div>');
function Jn(e, t) {
  de(t, !1);
  const [n, r] = rt(), o = () => ne(U, "$connectable", n), i = () => ne(ge, "$connectionRadius", n), s = () => ne(le, "$domNode", n), a = () => ne(ye, "$nodeLookup", n), l = () => ne(W, "$connectionMode", n), u = () => ne(Q, "$lib", n), c = () => ne(Pe, "$autoPanOnConnect", n), d = () => ne(Se, "$flowId", n), f = () => ne(Te, "$isValidConnectionStore", n), h = () => ne(Ee, "$onedgecreate", n), v = () => ne(ae, "$onConnectAction", n), _ = () => ne(ve, "$onConnectStartAction", n), x = () => ne(Me, "$onConnectEndAction", n), k = () => ne(oe, "$viewport", n), m = () => ne(Ke, "$connection", n), b = () => ne(Oe, "$edges", n), p = () => ne(Le, "$connectionLookup", n), C = /* @__PURE__ */ se(), H = /* @__PURE__ */ se(), S = /* @__PURE__ */ se(), D = /* @__PURE__ */ se(), L = /* @__PURE__ */ se(), A = /* @__PURE__ */ se(), I = /* @__PURE__ */ se(), O = /* @__PURE__ */ se();
  let R = w(t, "id", 12, void 0), E = w(t, "type", 12, "source"), N = w(t, "position", 28, () => He.Top), $ = w(t, "style", 12, void 0), T = w(t, "isValidConnection", 12, void 0), P = w(t, "onconnect", 12, void 0), M = w(t, "ondisconnect", 12, void 0), z = w(t, "isConnectable", 12, void 0), q = w(t, "class", 12, void 0);
  const X = ur("svelteflow__node_id"), U = ur("svelteflow__node_connectable"), G = We(), {
    connectionMode: W,
    domNode: le,
    nodeLookup: ye,
    connectionRadius: ge,
    viewport: oe,
    isValidConnection: Te,
    lib: Q,
    addEdge: re,
    onedgecreate: Ee,
    panBy: _e,
    cancelConnection: me,
    updateConnection: j,
    autoPanOnConnect: Pe,
    edges: Oe,
    connectionLookup: Le,
    onconnect: ae,
    onconnectstart: ve,
    onconnectend: Me,
    flowId: Se,
    connection: Ke
  } = G;
  function ut(Ve) {
    const ot = yc(Ve);
    (ot && Ve.button === 0 || !ot) && ip.onPointerDown(Ve, {
      handleId: g(S),
      nodeId: X,
      isTarget: g(C),
      connectionRadius: i(),
      domNode: s(),
      nodeLookup: a(),
      connectionMode: l(),
      lib: u(),
      autoPanOnConnect: c(),
      flowId: d(),
      isValidConnection: T() ?? f(),
      updateConnection: j,
      cancelConnection: me,
      panBy: _e,
      onConnect: (Be) => {
        var it;
        const ze = h() ? h()(Be) : Be;
        ze && (re(ze), (it = v()) == null || it(Be));
      },
      onConnectStart: (Be, ze) => {
        var it;
        (it = _()) == null || it(Be, {
          nodeId: ze.nodeId,
          handleId: ze.handleId,
          handleType: ze.handleType
        });
      },
      onConnectEnd: (Be, ze) => {
        var it;
        (it = x()) == null || it(Be, ze);
      },
      getTransform: () => [
        k().x,
        k().y,
        k().zoom
      ],
      getFromHandle: () => m().fromHandle
    });
  }
  let te = /* @__PURE__ */ se(null), Ze = /* @__PURE__ */ se();
  he(() => ee(E()), () => {
    J(C, E() === "target");
  }), he(
    () => (ee(z()), o()),
    () => {
      J(H, z() !== void 0 ? z() : o());
    }
  ), he(() => ee(R()), () => {
    J(S, R() || null);
  }), he(
    () => (ee(P()), ee(M()), b(), p(), ee(E()), ee(R())),
    () => {
      (P() || M()) && (b(), J(Ze, p().get(`${X}-${E()}${R() ? `-${R()}` : ""}`)));
    }
  ), he(
    () => (g(te), g(Ze), ee(M()), ee(P())),
    () => {
      if (g(te) && !x0(g(Ze), g(te))) {
        const Ve = g(Ze) ?? /* @__PURE__ */ new Map();
        xl(g(te), Ve, M()), xl(Ve, g(te), P());
      }
      J(te, g(Ze) ?? /* @__PURE__ */ new Map());
    }
  ), he(() => m(), () => {
    J(D, !!m().fromHandle);
  }), he(
    () => (m(), ee(E()), g(S)),
    () => {
      var Ve, ot, Be;
      J(L, ((Ve = m().fromHandle) == null ? void 0 : Ve.nodeId) === X && ((ot = m().fromHandle) == null ? void 0 : ot.type) === E() && ((Be = m().fromHandle) == null ? void 0 : Be.id) === g(S));
    }
  ), he(
    () => (m(), ee(E()), g(S)),
    () => {
      var Ve, ot, Be;
      J(A, ((Ve = m().toHandle) == null ? void 0 : Ve.nodeId) === X && ((ot = m().toHandle) == null ? void 0 : ot.type) === E() && ((Be = m().toHandle) == null ? void 0 : Be.id) === g(S));
    }
  ), he(
    () => (l(), m(), ee(E()), g(S)),
    () => {
      var Ve, ot, Be;
      J(I, l() === fr.Strict ? ((Ve = m().fromHandle) == null ? void 0 : Ve.type) !== E() : X !== ((ot = m().fromHandle) == null ? void 0 : ot.nodeId) || g(S) !== ((Be = m().fromHandle) == null ? void 0 : Be.id));
    }
  ), he(() => (g(A), m()), () => {
    J(O, g(A) && m().isValid);
  }), mt(), Ie();
  var ce = vp();
  be(ce, "data-nodeid", X);
  let nn;
  var rn = F(ce);
  wt(rn, t, "default", {}), Y(ce), $e(
    (Ve, ot) => {
      be(ce, "data-handleid", g(S)), be(ce, "data-handlepos", N()), be(ce, "data-id", `${d() ?? ""}-${X ?? ""}-${R() || ""}-${E() ?? ""}`), nn = _t(ce, 1, Ve, null, nn, ot), ft(ce, $());
    },
    [
      () => gn(Mt([
        "svelte-flow__handle",
        `svelte-flow__handle-${N()}`,
        "nodrag",
        "nopan",
        N(),
        q()
      ])),
      () => ({
        valid: g(O),
        connectingto: g(A),
        connectingfrom: g(L),
        source: !g(C),
        target: g(C),
        connectablestart: g(H),
        connectableend: g(H),
        connectable: g(H),
        connectionindicator: g(H) && (!g(D) || g(I))
      })
    ],
    xe
  ), nt("mousedown", ce, ut), nt("touchstart", ce, ut), V(e, ce);
  var pn = fe({
    get id() {
      return R();
    },
    set id(Ve) {
      R(Ve), y();
    },
    get type() {
      return E();
    },
    set type(Ve) {
      E(Ve), y();
    },
    get position() {
      return N();
    },
    set position(Ve) {
      N(Ve), y();
    },
    get style() {
      return $();
    },
    set style(Ve) {
      $(Ve), y();
    },
    get isValidConnection() {
      return T();
    },
    set isValidConnection(Ve) {
      T(Ve), y();
    },
    get onconnect() {
      return P();
    },
    set onconnect(Ve) {
      P(Ve), y();
    },
    get ondisconnect() {
      return M();
    },
    set ondisconnect(Ve) {
      M(Ve), y();
    },
    get isConnectable() {
      return z();
    },
    set isConnectable(Ve) {
      z(Ve), y();
    },
    get class() {
      return q();
    },
    set class(Ve) {
      q(Ve), y();
    }
  });
  return r(), pn;
}
ue(
  Jn,
  {
    id: {},
    type: {},
    position: {},
    style: {},
    isValidConnection: {},
    onconnect: {},
    ondisconnect: {},
    isConnectable: {},
    class: {}
  },
  ["default"],
  [],
  !0
);
var pp = /* @__PURE__ */ ie("<!> <!>", 1);
function $i(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, ["data", "targetPosition", "sourcePosition"]), de(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0), i = w(t, "sourcePosition", 12, void 0);
  Ie();
  var s = pp(), a = we(s);
  const l = /* @__PURE__ */ xe(() => o() ?? He.Top);
  Jn(a, {
    type: "target",
    get position() {
      return g(l);
    }
  });
  var u = B(a), c = B(u);
  const d = /* @__PURE__ */ xe(() => i() ?? He.Bottom);
  return Jn(c, {
    type: "source",
    get position() {
      return g(d);
    }
  }), $e(() => {
    var f;
    return dt(u, ` ${((f = r()) == null ? void 0 : f.label) ?? ""} `);
  }), V(e, s), fe({
    get data() {
      return r();
    },
    set data(f) {
      r(f), y();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(f) {
      o(f), y();
    },
    get sourcePosition() {
      return i();
    },
    set sourcePosition(f) {
      i(f), y();
    }
  });
}
ue(
  $i,
  {
    data: {},
    targetPosition: {},
    sourcePosition: {}
  },
  [],
  [],
  !0
);
var mp = /* @__PURE__ */ ie(" <!>", 1);
function Mc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, ["data", "sourcePosition"]), de(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "sourcePosition", 12, void 0);
  Ie(), Ae();
  var i = mp(), s = we(i), a = B(s);
  const l = /* @__PURE__ */ xe(() => o() ?? He.Bottom);
  return Jn(a, {
    type: "source",
    get position() {
      return g(l);
    }
  }), $e(() => {
    var u;
    return dt(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), V(e, i), fe({
    get data() {
      return r();
    },
    set data(u) {
      r(u), y();
    },
    get sourcePosition() {
      return o();
    },
    set sourcePosition(u) {
      o(u), y();
    }
  });
}
ue(Mc, { data: {}, sourcePosition: {} }, [], [], !0);
var yp = /* @__PURE__ */ ie(" <!>", 1);
function Hc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, ["data", "targetPosition"]), de(t, !1);
  let r = w(t, "data", 28, () => ({ label: "Node" })), o = w(t, "targetPosition", 12, void 0);
  Ie(), Ae();
  var i = yp(), s = we(i), a = B(s);
  const l = /* @__PURE__ */ xe(() => o() ?? He.Top);
  return Jn(a, {
    type: "target",
    get position() {
      return g(l);
    }
  }), $e(() => {
    var u;
    return dt(s, `${((u = r()) == null ? void 0 : u.label) ?? ""} `);
  }), V(e, i), fe({
    get data() {
      return r();
    },
    set data(u) {
      r(u), y();
    },
    get targetPosition() {
      return o();
    },
    set targetPosition(u) {
      o(u), y();
    }
  });
}
ue(Hc, { data: {}, targetPosition: {} }, [], [], !0);
function Dc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, []);
}
ue(Dc, {}, [], [], !0);
function Ol(e, t, n) {
  if (!t)
    return;
  const r = n ? t.querySelector(n) : t;
  r && r.appendChild(e);
}
function Sr(e, { target: t, domNode: n }) {
  return Ol(e, n, t), {
    async update({ target: r, domNode: o }) {
      Ol(e, o, r);
    },
    destroy() {
      e.parentNode && e.parentNode.removeChild(e);
    }
  };
}
var wp = /* @__PURE__ */ ie("<div><!></div>");
function Vc(e, t) {
  de(t, !1);
  const [n, r] = rt(), o = () => ne(i, "$domNode", n), { domNode: i } = We();
  Ie();
  var s = wp(), a = F(s);
  wt(a, t, "default", {}), Y(s), yt(s, (l, u) => Sr == null ? void 0 : Sr(l, u), () => ({
    target: ".svelte-flow__edgelabel-renderer",
    domNode: o()
  })), V(e, s), fe(), r();
}
ue(Vc, {}, ["default"], [], !0);
function Ac() {
  const { edgeLookup: e, selectionRect: t, selectionRectMode: n, multiselectionKeyPressed: r, addSelectedEdges: o, unselectNodesAndEdges: i, elementsSelectable: s } = We();
  return (a) => {
    const l = K(e).get(a);
    if (!l) {
      console.warn("012", zr.error012(a));
      return;
    }
    (l.selectable || K(s) && typeof l.selectable > "u") && (t.set(null), n.set(null), l.selected ? l.selected && K(r) && i({ nodes: [], edges: [l] }) : o([a]));
  };
}
var _p = /* @__PURE__ */ ie('<div class="svelte-flow__edge-label" role="button" tabindex="-1"><!></div>');
function Oc(e, t) {
  de(t, !1);
  let n = w(t, "style", 12, void 0), r = w(t, "x", 12, void 0), o = w(t, "y", 12, void 0);
  const i = Ac(), s = ur("svelteflow__edge_id");
  return Ie(), Vc(e, {
    children: (a, l) => {
      var u = _p();
      let c;
      var d = F(u);
      wt(d, t, "default", {}), Y(u), $e(() => c = ft(u, "pointer-events: all;" + n(), c, {
        transform: `translate(-50%, -50%) translate(${r() ?? ""}px,${o() ?? ""}px)`
      })), nt("keyup", u, () => {
      }), nt("click", u, () => {
        s && i(s);
      }), V(a, u);
    },
    $$slots: { default: !0 }
  }), fe({
    get style() {
      return n();
    },
    set style(a) {
      n(a), y();
    },
    get x() {
      return r();
    },
    set x(a) {
      r(a), y();
    },
    get y() {
      return o();
    },
    set y(a) {
      o(a), y();
    }
  });
}
ue(Oc, { style: {}, x: {}, y: {} }, ["default"], [], !0);
var xp = /* @__PURE__ */ ke('<path fill="none" class="svelte-flow__edge-interaction"></path>'), bp = /* @__PURE__ */ ke('<path fill="none"></path><!><!>', 1);
function Io(e, t) {
  de(t, !1);
  let n = w(t, "id", 12, void 0), r = w(t, "path", 12), o = w(t, "label", 12, void 0), i = w(t, "labelX", 12, void 0), s = w(t, "labelY", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "markerStart", 12, void 0), u = w(t, "markerEnd", 12, void 0), c = w(t, "style", 12, void 0), d = w(t, "interactionWidth", 12, 20), f = w(t, "class", 12, void 0), h = d() === void 0 ? 20 : d();
  Ie();
  var v = bp(), _ = we(v), x = B(_);
  {
    var k = (p) => {
      var C = xp();
      be(C, "stroke-opacity", 0), be(C, "stroke-width", h), $e(() => be(C, "d", r())), V(p, C);
    };
    pe(x, (p) => {
      h && p(k);
    });
  }
  var m = B(x);
  {
    var b = (p) => {
      Oc(p, {
        get x() {
          return i();
        },
        get y() {
          return s();
        },
        get style() {
          return a();
        },
        children: (C, H) => {
          Ae();
          var S = Ye();
          $e(() => dt(S, o())), V(C, S);
        },
        $$slots: { default: !0 }
      });
    };
    pe(m, (p) => {
      o() && p(b);
    });
  }
  return $e(
    (p) => {
      be(_, "id", n()), be(_, "d", r()), _t(_, 0, p), be(_, "marker-start", l()), be(_, "marker-end", u()), ft(_, c());
    },
    [
      () => gn(Mt(["svelte-flow__edge-path", f()]))
    ],
    xe
  ), V(e, v), fe({
    get id() {
      return n();
    },
    set id(p) {
      n(p), y();
    },
    get path() {
      return r();
    },
    set path(p) {
      r(p), y();
    },
    get label() {
      return o();
    },
    set label(p) {
      o(p), y();
    },
    get labelX() {
      return i();
    },
    set labelX(p) {
      i(p), y();
    },
    get labelY() {
      return s();
    },
    set labelY(p) {
      s(p), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(p) {
      a(p), y();
    },
    get markerStart() {
      return l();
    },
    set markerStart(p) {
      l(p), y();
    },
    get markerEnd() {
      return u();
    },
    set markerEnd(p) {
      u(p), y();
    },
    get style() {
      return c();
    },
    set style(p) {
      c(p), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(p) {
      d(p), y();
    },
    get class() {
      return f();
    },
    set class(p) {
      f(p), y();
    }
  });
}
ue(
  Io,
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
function Ei(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, [
    "label",
    "labelStyle",
    "style",
    "markerStart",
    "markerEnd",
    "interactionWidth",
    "sourceX",
    "sourceY",
    "sourcePosition",
    "targetX",
    "targetY",
    "targetPosition"
  ]), de(t, !1);
  const r = /* @__PURE__ */ se(), o = /* @__PURE__ */ se(), i = /* @__PURE__ */ se();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), h = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), x = w(t, "targetY", 12), k = w(t, "targetPosition", 12);
  return he(
    () => (g(r), g(o), g(i), ee(f()), ee(h()), ee(_()), ee(x()), ee(v()), ee(k())),
    () => {
      ((m) => (J(r, m[0]), J(o, m[1]), J(i, m[2])))(wc({
        sourceX: f(),
        sourceY: h(),
        targetX: _(),
        targetY: x(),
        sourcePosition: v(),
        targetPosition: k()
      }));
    }
  ), mt(), Ie(), Io(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(i);
    },
    get label() {
      return s();
    },
    get labelStyle() {
      return a();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return l();
    }
  }), fe({
    get label() {
      return s();
    },
    set label(m) {
      s(m), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(m) {
      a(m), y();
    },
    get style() {
      return l();
    },
    set style(m) {
      l(m), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(m) {
      u(m), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(m) {
      c(m), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(m) {
      d(m), y();
    },
    get sourceX() {
      return f();
    },
    set sourceX(m) {
      f(m), y();
    },
    get sourceY() {
      return h();
    },
    set sourceY(m) {
      h(m), y();
    },
    get sourcePosition() {
      return v();
    },
    set sourcePosition(m) {
      v(m), y();
    },
    get targetX() {
      return _();
    },
    set targetX(m) {
      _(m), y();
    },
    get targetY() {
      return x();
    },
    set targetY(m) {
      x(m), y();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(m) {
      k(m), y();
    }
  });
}
ue(
  Ei,
  {
    label: {},
    labelStyle: {},
    style: {},
    markerStart: {},
    markerEnd: {},
    interactionWidth: {},
    sourceX: {},
    sourceY: {},
    sourcePosition: {},
    targetX: {},
    targetY: {},
    targetPosition: {}
  },
  [],
  [],
  !0
);
function Lc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, [
    "label",
    "labelStyle",
    "style",
    "markerStart",
    "markerEnd",
    "interactionWidth",
    "sourceX",
    "sourceY",
    "sourcePosition",
    "targetX",
    "targetY",
    "targetPosition"
  ]), de(t, !1);
  const r = /* @__PURE__ */ se(), o = /* @__PURE__ */ se(), i = /* @__PURE__ */ se();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), h = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), x = w(t, "targetY", 12), k = w(t, "targetPosition", 12);
  return he(
    () => (g(r), g(o), g(i), ee(f()), ee(h()), ee(_()), ee(x()), ee(v()), ee(k())),
    () => {
      ((m) => (J(r, m[0]), J(o, m[1]), J(i, m[2])))(ki({
        sourceX: f(),
        sourceY: h(),
        targetX: _(),
        targetY: x(),
        sourcePosition: v(),
        targetPosition: k()
      }));
    }
  ), mt(), Ie(), Io(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(i);
    },
    get label() {
      return s();
    },
    get labelStyle() {
      return a();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return l();
    }
  }), fe({
    get label() {
      return s();
    },
    set label(m) {
      s(m), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(m) {
      a(m), y();
    },
    get style() {
      return l();
    },
    set style(m) {
      l(m), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(m) {
      u(m), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(m) {
      c(m), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(m) {
      d(m), y();
    },
    get sourceX() {
      return f();
    },
    set sourceX(m) {
      f(m), y();
    },
    get sourceY() {
      return h();
    },
    set sourceY(m) {
      h(m), y();
    },
    get sourcePosition() {
      return v();
    },
    set sourcePosition(m) {
      v(m), y();
    },
    get targetX() {
      return _();
    },
    set targetX(m) {
      _(m), y();
    },
    get targetY() {
      return x();
    },
    set targetY(m) {
      x(m), y();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(m) {
      k(m), y();
    }
  });
}
ue(
  Lc,
  {
    label: {},
    labelStyle: {},
    style: {},
    markerStart: {},
    markerEnd: {},
    interactionWidth: {},
    sourceX: {},
    sourceY: {},
    sourcePosition: {},
    targetX: {},
    targetY: {},
    targetPosition: {}
  },
  [],
  [],
  !0
);
function Ic(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, [
    "label",
    "labelStyle",
    "style",
    "markerStart",
    "markerEnd",
    "interactionWidth",
    "sourceX",
    "sourceY",
    "targetX",
    "targetY"
  ]), de(t, !1);
  const r = /* @__PURE__ */ se(), o = /* @__PURE__ */ se(), i = /* @__PURE__ */ se();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), h = w(t, "sourceY", 12), v = w(t, "targetX", 12), _ = w(t, "targetY", 12);
  return he(
    () => (g(r), g(o), g(i), ee(f()), ee(h()), ee(v()), ee(_())),
    () => {
      ((x) => (J(r, x[0]), J(o, x[1]), J(i, x[2])))(Rs({
        sourceX: f(),
        sourceY: h(),
        targetX: v(),
        targetY: _()
      }));
    }
  ), mt(), Ie(), Io(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(i);
    },
    get label() {
      return s();
    },
    get labelStyle() {
      return a();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return l();
    }
  }), fe({
    get label() {
      return s();
    },
    set label(x) {
      s(x), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(x) {
      a(x), y();
    },
    get style() {
      return l();
    },
    set style(x) {
      l(x), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(x) {
      u(x), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(x) {
      c(x), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(x) {
      d(x), y();
    },
    get sourceX() {
      return f();
    },
    set sourceX(x) {
      f(x), y();
    },
    get sourceY() {
      return h();
    },
    set sourceY(x) {
      h(x), y();
    },
    get targetX() {
      return v();
    },
    set targetX(x) {
      v(x), y();
    },
    get targetY() {
      return _();
    },
    set targetY(x) {
      _(x), y();
    }
  });
}
ue(
  Ic,
  {
    label: {},
    labelStyle: {},
    style: {},
    markerStart: {},
    markerEnd: {},
    interactionWidth: {},
    sourceX: {},
    sourceY: {},
    targetX: {},
    targetY: {}
  },
  [],
  [],
  !0
);
function zc(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]);
  at(n, [
    "label",
    "labelStyle",
    "style",
    "markerStart",
    "markerEnd",
    "interactionWidth",
    "sourceX",
    "sourceY",
    "sourcePosition",
    "targetX",
    "targetY",
    "targetPosition"
  ]), de(t, !1);
  const r = /* @__PURE__ */ se(), o = /* @__PURE__ */ se(), i = /* @__PURE__ */ se();
  let s = w(t, "label", 12, void 0), a = w(t, "labelStyle", 12, void 0), l = w(t, "style", 12, void 0), u = w(t, "markerStart", 12, void 0), c = w(t, "markerEnd", 12, void 0), d = w(t, "interactionWidth", 12, void 0), f = w(t, "sourceX", 12), h = w(t, "sourceY", 12), v = w(t, "sourcePosition", 12), _ = w(t, "targetX", 12), x = w(t, "targetY", 12), k = w(t, "targetPosition", 12);
  return he(
    () => (g(r), g(o), g(i), ee(f()), ee(h()), ee(_()), ee(x()), ee(v()), ee(k())),
    () => {
      ((m) => (J(r, m[0]), J(o, m[1]), J(i, m[2])))(ki({
        sourceX: f(),
        sourceY: h(),
        targetX: _(),
        targetY: x(),
        sourcePosition: v(),
        targetPosition: k(),
        borderRadius: 0
      }));
    }
  ), mt(), Ie(), Io(e, {
    get path() {
      return g(r);
    },
    get labelX() {
      return g(o);
    },
    get labelY() {
      return g(i);
    },
    get label() {
      return s();
    },
    get labelStyle() {
      return a();
    },
    get markerStart() {
      return u();
    },
    get markerEnd() {
      return c();
    },
    get interactionWidth() {
      return d();
    },
    get style() {
      return l();
    }
  }), fe({
    get label() {
      return s();
    },
    set label(m) {
      s(m), y();
    },
    get labelStyle() {
      return a();
    },
    set labelStyle(m) {
      a(m), y();
    },
    get style() {
      return l();
    },
    set style(m) {
      l(m), y();
    },
    get markerStart() {
      return u();
    },
    set markerStart(m) {
      u(m), y();
    },
    get markerEnd() {
      return c();
    },
    set markerEnd(m) {
      c(m), y();
    },
    get interactionWidth() {
      return d();
    },
    set interactionWidth(m) {
      d(m), y();
    },
    get sourceX() {
      return f();
    },
    set sourceX(m) {
      f(m), y();
    },
    get sourceY() {
      return h();
    },
    set sourceY(m) {
      h(m), y();
    },
    get sourcePosition() {
      return v();
    },
    set sourcePosition(m) {
      v(m), y();
    },
    get targetX() {
      return _();
    },
    set targetX(m) {
      _(m), y();
    },
    get targetY() {
      return x();
    },
    set targetY(m) {
      x(m), y();
    },
    get targetPosition() {
      return k();
    },
    set targetPosition(m) {
      k(m), y();
    }
  });
}
ue(
  zc,
  {
    label: {},
    labelStyle: {},
    style: {},
    markerStart: {},
    markerEnd: {},
    interactionWidth: {},
    sourceX: {},
    sourceY: {},
    sourcePosition: {},
    targetX: {},
    targetY: {},
    targetPosition: {}
  },
  [],
  [],
  !0
);
function Cp(e, t) {
  const n = e.set, r = t.set, o = K(e), i = K(t);
  let a = o.length === 0 && i.length > 0 ? i : o;
  e.set(a);
  const l = (u) => {
    const c = n(u);
    return a = c, r(a), c;
  };
  e.set = t.set = l, e.update = t.update = (u) => l(u(a));
}
function kp(e, t) {
  const n = e.set, r = t.set;
  let o = K(t);
  e.set(o);
  const i = (s) => {
    n(s), r(s), o = s;
  };
  e.set = t.set = i, e.update = t.update = (s) => i(s(o));
}
const $p = (e, t, n) => {
  if (!n)
    return;
  const r = K(e), o = t.set, i = n.set;
  let s = n ? K(n) : { x: 0, y: 0, zoom: 1 };
  t.set(s), t.set = (a) => (o(a), i(a), s = a, a), n.set = (a) => (r == null || r.syncViewport(a), o(a), i(a), s = a, a), t.update = (a) => {
    t.set(a(s));
  }, n.update = (a) => {
    n.set(a(s));
  };
}, Ep = (e, t, n, r = [0, 0], o = _i) => {
  const { subscribe: i, set: s, update: a } = Ce([]);
  let l = e, u = {}, c = !0;
  const d = (_) => (xc(_, t, n, {
    elevateNodesOnSelect: c,
    nodeOrigin: r,
    nodeExtent: o,
    defaults: u,
    checkEquality: !1
  }), l = _, s(l), l), f = (_) => d(_(l)), h = (_) => {
    u = _;
  }, v = (_) => {
    c = _.elevateNodesOnSelect ?? c;
  };
  return d(l), {
    subscribe: i,
    set: d,
    update: f,
    setDefaultOptions: h,
    setOptions: v
  };
}, Sp = (e, t, n, r) => {
  const { subscribe: o, set: i, update: s } = Ce([]);
  let a = e, l = {};
  const u = (f) => {
    const h = l ? f.map((v) => ({ ...l, ...v })) : f;
    Cc(t, n, h), a = h, i(a);
  }, c = (f) => u(f(a)), d = (f) => {
    l = f;
  };
  return u(a), {
    subscribe: o,
    set: u,
    update: c,
    setDefaultOptions: d
  };
}, Rc = {
  input: Mc,
  output: Hc,
  default: $i,
  group: Dc
}, Bc = {
  straight: Ic,
  smoothstep: Lc,
  default: Ei,
  step: zc
}, Pp = ({ nodes: e = [], edges: t = [], width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) => {
  const a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), d = i ?? [0, 0], f = s ?? _i;
  xc(e, a, l, {
    nodeExtent: f,
    nodeOrigin: d,
    elevateNodesOnSelect: !1,
    checkEquality: !1
  }), Cc(u, c, t);
  let h = { x: 0, y: 0, zoom: 1 };
  if (o && n && r) {
    const v = Oo(a, {
      filter: (_) => !!((_.width || _.initialWidth) && (_.height || _.initialHeight))
    });
    h = wa(v, n, r, 0.5, 2, 0.1);
  }
  return {
    flowId: Ce(null),
    nodes: Ep(e, a, l, d, f),
    nodeLookup: Wt(a),
    parentLookup: Wt(l),
    edgeLookup: Wt(c),
    visibleNodes: Wt([]),
    edges: Sp(t, u, c),
    visibleEdges: Wt([]),
    connectionLookup: Wt(u),
    height: Ce(500),
    width: Ce(500),
    minZoom: Ce(0.5),
    maxZoom: Ce(2),
    nodeOrigin: Ce(d),
    nodeDragThreshold: Ce(1),
    nodeExtent: Ce(f),
    translateExtent: Ce(_i),
    autoPanOnNodeDrag: Ce(!0),
    autoPanOnConnect: Ce(!0),
    fitViewOnInit: Ce(!1),
    fitViewOnInitDone: Ce(!1),
    fitViewOptions: Ce(void 0),
    panZoom: Ce(null),
    snapGrid: Ce(null),
    dragging: Ce(!1),
    selectionRect: Ce(null),
    selectionKeyPressed: Ce(!1),
    multiselectionKeyPressed: Ce(!1),
    deleteKeyPressed: Ce(!1),
    panActivationKeyPressed: Ce(!1),
    zoomActivationKeyPressed: Ce(!1),
    selectionRectMode: Ce(null),
    selectionMode: Ce(xi.Partial),
    nodeTypes: Ce(Rc),
    edgeTypes: Ce(Bc),
    viewport: Ce(h),
    connectionMode: Ce(fr.Strict),
    domNode: Ce(null),
    connection: Wt(Ls),
    connectionLineType: Ce(Er.Bezier),
    connectionRadius: Ce(20),
    isValidConnection: Ce(() => !0),
    nodesDraggable: Ce(!0),
    nodesConnectable: Ce(!0),
    elementsSelectable: Ce(!0),
    selectNodesOnDrag: Ce(!0),
    markers: Wt([]),
    defaultMarkerColor: Ce("#b1b1b7"),
    lib: Wt("svelte"),
    onlyRenderVisibleElements: Ce(!1),
    onerror: Ce(S0),
    ondelete: Ce(void 0),
    onedgecreate: Ce(void 0),
    onconnect: Ce(void 0),
    onconnectstart: Ce(void 0),
    onconnectend: Ce(void 0),
    onbeforedelete: Ce(void 0),
    nodesInitialized: Ce(!1),
    edgesInitialized: Ce(!1),
    viewportInitialized: Ce(!1),
    initialized: Wt(!1)
  };
};
function Np(e) {
  const t = Kn([
    e.edges,
    e.nodes,
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.viewport,
    e.width,
    e.height
  ], ([n, , r, o, i, s, a]) => o && s && a ? n.filter((u) => {
    const c = r.get(u.source), d = r.get(u.target);
    return c && d && V0({
      sourceNode: c,
      targetNode: d,
      width: s,
      height: a,
      transform: [i.x, i.y, i.zoom]
    });
  }) : n);
  return Kn([t, e.nodes, e.nodeLookup, e.connectionMode, e.onerror], ([n, , r, o, i]) => n.reduce((a, l) => {
    const u = r.get(l.source), c = r.get(l.target);
    if (!u || !c)
      return a;
    const d = B0({
      id: l.id,
      sourceNode: u,
      targetNode: c,
      sourceHandle: l.sourceHandle || null,
      targetHandle: l.targetHandle || null,
      connectionMode: o,
      onError: i
    });
    return d && a.push({
      ...l,
      zIndex: D0({
        selected: l.selected,
        zIndex: l.zIndex,
        sourceNode: u,
        targetNode: c,
        elevateOnSelect: !1
      }),
      ...d
    }), a;
  }, []));
}
function Tp(e) {
  return Kn([
    e.nodeLookup,
    e.onlyRenderVisibleElements,
    e.width,
    e.height,
    e.viewport,
    e.nodes
  ], ([t, n, r, o, i]) => {
    const s = [i.x, i.y, i.zoom];
    return n ? dc(t, { x: 0, y: 0, width: r, height: o }, s, !0) : Array.from(t.values());
  });
}
const Ui = Symbol();
function qc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = Pp({
    nodes: e,
    edges: t,
    width: n,
    height: r,
    fitView: o,
    nodeOrigin: i,
    nodeExtent: s
  });
  function l($) {
    a.nodeTypes.set({
      ...Rc,
      ...$
    });
  }
  function u($) {
    a.edgeTypes.set({
      ...Bc,
      ...$
    });
  }
  function c($) {
    const T = K(a.edges);
    a.edges.set(L0($, T));
  }
  const d = ($, T = !1) => {
    var M;
    const P = K(a.nodeLookup);
    for (const [z, q] of $) {
      const X = (M = P.get(z)) == null ? void 0 : M.internals.userNode;
      X && (X.position = q.position, X.dragging = T);
    }
    a.nodes.update((z) => z);
  };
  function f($) {
    var q, X, U;
    const T = K(a.nodeLookup), P = K(a.parentLookup), { changes: M, updatedInternals: z } = G0($, T, K(a.parentLookup), K(a.domNode), K(a.nodeOrigin));
    if (z) {
      if (F0(T, P, { nodeOrigin: i, nodeExtent: s }), !K(a.fitViewOnInitDone) && K(a.fitViewOnInit)) {
        const G = K(a.fitViewOptions), W = v({
          ...G,
          nodes: G == null ? void 0 : G.nodes
        });
        a.fitViewOnInitDone.set(W);
      }
      for (const G of M) {
        const W = (q = T.get(G.id)) == null ? void 0 : q.internals.userNode;
        if (W)
          switch (G.type) {
            case "dimensions": {
              const le = { ...W.measured, ...G.dimensions };
              G.setAttributes && (W.width = ((X = G.dimensions) == null ? void 0 : X.width) ?? W.width, W.height = ((U = G.dimensions) == null ? void 0 : U.height) ?? W.height), W.measured = le;
              break;
            }
            case "position":
              W.position = G.position ?? W.position;
              break;
          }
      }
      a.nodes.update((G) => G), K(a.nodesInitialized) || a.nodesInitialized.set(!0);
    }
  }
  function h($) {
    const T = K(a.panZoom), P = K(a.domNode);
    if (!T || !P)
      return Promise.resolve(!1);
    const { width: M, height: z } = _a(P), q = bl(K(a.nodeLookup), $);
    return Cl({
      nodes: q,
      width: M,
      height: z,
      minZoom: K(a.minZoom),
      maxZoom: K(a.maxZoom),
      panZoom: T
    }, $);
  }
  function v($) {
    const T = K(a.panZoom);
    if (!T)
      return !1;
    const P = bl(K(a.nodeLookup), $);
    return Cl({
      nodes: P,
      width: K(a.width),
      height: K(a.height),
      minZoom: K(a.minZoom),
      maxZoom: K(a.maxZoom),
      panZoom: T
    }, $), P.size > 0;
  }
  function _($, T) {
    const P = K(a.panZoom);
    return P ? P.scaleBy($, T) : Promise.resolve(!1);
  }
  function x($) {
    return _(1.2, $);
  }
  function k($) {
    return _(1 / 1.2, $);
  }
  function m($) {
    const T = K(a.panZoom);
    T && (T.setScaleExtent([$, K(a.maxZoom)]), a.minZoom.set($));
  }
  function b($) {
    const T = K(a.panZoom);
    T && (T.setScaleExtent([K(a.minZoom), $]), a.maxZoom.set($));
  }
  function p($) {
    const T = K(a.panZoom);
    T && (T.setTranslateExtent($), a.translateExtent.set($));
  }
  function C($) {
    let T = !1;
    return $.forEach((P) => {
      P.selected && (P.selected = !1, T = !0);
    }), T;
  }
  function H($) {
    var T;
    (T = K(a.panZoom)) == null || T.setClickDistance($);
  }
  function S($) {
    C(($ == null ? void 0 : $.nodes) || K(a.nodes)) && a.nodes.set(K(a.nodes)), C(($ == null ? void 0 : $.edges) || K(a.edges)) && a.edges.set(K(a.edges));
  }
  a.deleteKeyPressed.subscribe(async ($) => {
    var T;
    if ($) {
      const P = K(a.nodes), M = K(a.edges), z = P.filter((G) => G.selected), q = M.filter((G) => G.selected), { nodes: X, edges: U } = await fc({
        nodesToRemove: z,
        edgesToRemove: q,
        nodes: P,
        edges: M,
        onBeforeDelete: K(a.onbeforedelete)
      });
      (X.length || U.length) && (a.nodes.update((G) => G.filter((W) => !X.some((le) => le.id === W.id))), a.edges.update((G) => G.filter((W) => !U.some((le) => le.id === W.id))), (T = K(a.ondelete)) == null || T({
        nodes: X,
        edges: U
      }));
    }
  });
  function D($) {
    const T = K(a.multiselectionKeyPressed);
    a.nodes.update((P) => P.map((M) => {
      const z = $.includes(M.id), q = T && M.selected || z;
      return M.selected = q, M;
    })), T || a.edges.update((P) => P.map((M) => (M.selected = !1, M)));
  }
  function L($) {
    const T = K(a.multiselectionKeyPressed);
    a.edges.update((P) => P.map((M) => {
      const z = $.includes(M.id), q = T && M.selected || z;
      return M.selected = q, M;
    })), T || a.nodes.update((P) => P.map((M) => (M.selected = !1, M)));
  }
  function A($) {
    var P;
    const T = (P = K(a.nodes)) == null ? void 0 : P.find((M) => M.id === $);
    if (!T) {
      console.warn("012", zr.error012($));
      return;
    }
    a.selectionRect.set(null), a.selectionRectMode.set(null), T.selected ? T.selected && K(a.multiselectionKeyPressed) && S({ nodes: [T], edges: [] }) : D([$]);
  }
  function I($) {
    const T = K(a.viewport);
    return j0({
      delta: $,
      panZoom: K(a.panZoom),
      transform: [T.x, T.y, T.zoom],
      translateExtent: K(a.translateExtent),
      width: K(a.width),
      height: K(a.height)
    });
  }
  const O = Ce(Ls), R = ($) => {
    O.set({ ...$ });
  };
  function E() {
    O.set(Ls);
  }
  function N() {
    a.fitViewOnInitDone.set(!1), a.selectionRect.set(null), a.selectionRectMode.set(null), a.snapGrid.set(null), a.isValidConnection.set(() => !0), S(), E();
  }
  return {
    // state
    ...a,
    // derived state
    visibleEdges: Np(a),
    visibleNodes: Tp(a),
    connection: Kn([O, a.viewport], ([$, T]) => $.inProgress ? {
      ...$,
      to: Lo($.to, [T.x, T.y, T.zoom])
    } : { ...$ }),
    markers: Kn([a.edges, a.defaultMarkerColor, a.flowId], ([$, T, P]) => q0($, { defaultColor: T, id: P })),
    initialized: (() => {
      let $ = !1;
      const T = K(a.nodes).length, P = K(a.edges).length;
      return Kn([a.nodesInitialized, a.edgesInitialized, a.viewportInitialized], ([M, z, q]) => $ || (T === 0 ? $ = q : P === 0 ? $ = q && M : $ = q && M && z, $));
    })(),
    // actions
    syncNodeStores: ($) => Cp(a.nodes, $),
    syncEdgeStores: ($) => kp(a.edges, $),
    syncViewport: ($) => $p(a.panZoom, a.viewport, $),
    setNodeTypes: l,
    setEdgeTypes: u,
    addEdge: c,
    updateNodePositions: d,
    updateNodeInternals: f,
    zoomIn: x,
    zoomOut: k,
    fitView: ($) => h($),
    setMinZoom: m,
    setMaxZoom: b,
    setTranslateExtent: p,
    setPaneClickDistance: H,
    unselectNodesAndEdges: S,
    addSelectedNodes: D,
    addSelectedEdges: L,
    handleNodeSelection: A,
    panBy: I,
    updateConnection: R,
    cancelConnection: E,
    reset: N
  };
}
function We() {
  const e = ur(Ui);
  if (!e)
    throw new Error("In order to use useStore you need to wrap your component in a <SvelteFlowProvider />");
  return e.getStore();
}
function Mp({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s }) {
  const a = qc({ nodes: e, edges: t, width: n, height: r, fitView: o, nodeOrigin: i, nodeExtent: s });
  return Ar(Ui, {
    getStore: () => a
  }), a;
}
function ps(e, t) {
  const { panZoom: n, minZoom: r, maxZoom: o, initialViewport: i, viewport: s, dragging: a, translateExtent: l, paneClickDistance: u } = t, c = hp({
    domNode: e,
    minZoom: r,
    maxZoom: o,
    translateExtent: l,
    viewport: i,
    paneClickDistance: u,
    onDraggingChange: a.set
  }), d = c.getViewport();
  return s.set(d), n.set(c), c.update(t), {
    update(f) {
      c.update(f);
    }
  };
}
var Hp = /* @__PURE__ */ ie('<div class="svelte-flow__zoom svelte-4xkw84"><!></div>');
const Dp = {
  hash: "svelte-4xkw84",
  code: ".svelte-flow__zoom.svelte-4xkw84 {width:100%;height:100%;position:absolute;top:0;left:0;z-index:4;}"
};
function Yc(e, t) {
  de(t, !1), tt(e, Dp);
  const [n, r] = rt(), o = () => ne(P, "$panActivationKeyPressed", n), i = () => ne(R, "$minZoom", n), s = () => ne(E, "$maxZoom", n), a = () => ne(M, "$zoomActivationKeyPressed", n), l = () => ne(O, "$selectionRect", n), u = () => ne($, "$translateExtent", n), c = () => ne(T, "$lib", n), d = /* @__PURE__ */ se(), f = /* @__PURE__ */ se(), h = /* @__PURE__ */ se();
  let v = w(t, "initialViewport", 12, void 0), _ = w(t, "onMoveStart", 12, void 0), x = w(t, "onMove", 12, void 0), k = w(t, "onMoveEnd", 12, void 0), m = w(t, "panOnScrollMode", 12), b = w(t, "preventScrolling", 12), p = w(t, "zoomOnScroll", 12), C = w(t, "zoomOnDoubleClick", 12), H = w(t, "zoomOnPinch", 12), S = w(t, "panOnDrag", 12), D = w(t, "panOnScroll", 12), L = w(t, "paneClickDistance", 12);
  const {
    viewport: A,
    panZoom: I,
    selectionRect: O,
    minZoom: R,
    maxZoom: E,
    dragging: N,
    translateExtent: $,
    lib: T,
    panActivationKeyPressed: P,
    zoomActivationKeyPressed: M,
    viewportInitialized: z
  } = We(), q = (W) => A.set({
    x: W[0],
    y: W[1],
    zoom: W[2]
  });
  tn(() => {
    gi(z, !0);
  }), he(() => ee(v()), () => {
    J(d, v() || { x: 0, y: 0, zoom: 1 });
  }), he(
    () => (o(), ee(S())),
    () => {
      J(f, o() || S());
    }
  ), he(
    () => (o(), ee(D())),
    () => {
      J(h, o() || D());
    }
  ), mt(), Ie();
  var X = Hp(), U = F(X);
  wt(U, t, "default", {}), Y(X), yt(X, (W, le) => ps == null ? void 0 : ps(W, le), () => ({
    viewport: A,
    minZoom: i(),
    maxZoom: s(),
    initialViewport: g(d),
    dragging: N,
    panZoom: I,
    onPanZoomStart: _(),
    onPanZoom: x(),
    onPanZoomEnd: k(),
    zoomOnScroll: p(),
    zoomOnDoubleClick: C(),
    zoomOnPinch: H(),
    panOnScroll: g(h),
    panOnDrag: g(f),
    panOnScrollSpeed: 0.5,
    panOnScrollMode: m() || Gn.Free,
    zoomActivationKeyPressed: a(),
    preventScrolling: typeof b() == "boolean" ? b() : !0,
    noPanClassName: "nopan",
    noWheelClassName: "nowheel",
    userSelectionActive: !!l(),
    translateExtent: u(),
    lib: c(),
    paneClickDistance: L(),
    onTransformChange: q
  })), V(e, X);
  var G = fe({
    get initialViewport() {
      return v();
    },
    set initialViewport(W) {
      v(W), y();
    },
    get onMoveStart() {
      return _();
    },
    set onMoveStart(W) {
      _(W), y();
    },
    get onMove() {
      return x();
    },
    set onMove(W) {
      x(W), y();
    },
    get onMoveEnd() {
      return k();
    },
    set onMoveEnd(W) {
      k(W), y();
    },
    get panOnScrollMode() {
      return m();
    },
    set panOnScrollMode(W) {
      m(W), y();
    },
    get preventScrolling() {
      return b();
    },
    set preventScrolling(W) {
      b(W), y();
    },
    get zoomOnScroll() {
      return p();
    },
    set zoomOnScroll(W) {
      p(W), y();
    },
    get zoomOnDoubleClick() {
      return C();
    },
    set zoomOnDoubleClick(W) {
      C(W), y();
    },
    get zoomOnPinch() {
      return H();
    },
    set zoomOnPinch(W) {
      H(W), y();
    },
    get panOnDrag() {
      return S();
    },
    set panOnDrag(W) {
      S(W), y();
    },
    get panOnScroll() {
      return D();
    },
    set panOnScroll(W) {
      D(W), y();
    },
    get paneClickDistance() {
      return L();
    },
    set paneClickDistance(W) {
      L(W), y();
    }
  });
  return r(), G;
}
ue(
  Yc,
  {
    initialViewport: {},
    onMoveStart: {},
    onMove: {},
    onMoveEnd: {},
    panOnScrollMode: {},
    preventScrolling: {},
    zoomOnScroll: {},
    zoomOnDoubleClick: {},
    zoomOnPinch: {},
    panOnDrag: {},
    panOnScroll: {},
    paneClickDistance: {}
  },
  ["default"],
  [],
  !0
);
function Ll(e, t) {
  return (n) => {
    n.target === t && (e == null || e(n));
  };
}
function Il(e) {
  return (t) => {
    const n = e.includes(t.id);
    return t.selected !== n && (t.selected = n), t;
  };
}
var Vp = /* @__PURE__ */ ie("<div><!></div>");
const Ap = {
  hash: "svelte-1esy7hx",
  code: ".svelte-flow__pane.svelte-1esy7hx {position:absolute;top:0;left:0;width:100%;height:100%;}"
};
function Zc(e, t) {
  de(t, !1), tt(e, Ap);
  const [n, r] = rt(), o = () => ne(E, "$panActivationKeyPressed", n), i = () => ne(O, "$selectionKeyPressed", n), s = () => ne(A, "$selectionRect", n), a = () => ne(L, "$elementsSelectable", n), l = () => ne(I, "$selectionRectMode", n), u = () => ne(H, "$edges", n), c = () => ne(C, "$nodeLookup", n), d = () => ne(S, "$viewport", n), f = () => ne(R, "$selectionMode", n), h = () => ne(D, "$dragging", n), v = /* @__PURE__ */ se(), _ = /* @__PURE__ */ se(), x = /* @__PURE__ */ se();
  let k = w(t, "panOnDrag", 12, void 0), m = w(t, "selectionOnDrag", 12, void 0);
  const b = qi(), {
    nodes: p,
    nodeLookup: C,
    edges: H,
    viewport: S,
    dragging: D,
    elementsSelectable: L,
    selectionRect: A,
    selectionRectMode: I,
    selectionKeyPressed: O,
    selectionMode: R,
    panActivationKeyPressed: E,
    unselectNodesAndEdges: N
  } = We();
  let $ = /* @__PURE__ */ se(), T = null, P = [], M = !1;
  function z(Q) {
    if (M) {
      M = !1;
      return;
    }
    b("paneclick", { event: Q }), N(), I.set(null);
  }
  function q(Q) {
    var _e, me;
    if (T = g($).getBoundingClientRect(), !L || !g(_) || Q.button !== 0 || Q.target !== g($) || !T)
      return;
    (me = (_e = Q.target) == null ? void 0 : _e.setPointerCapture) == null || me.call(_e, Q.pointerId);
    const { x: re, y: Ee } = An(Q, T);
    N(), A.set({
      width: 0,
      height: 0,
      startX: re,
      startY: Ee,
      x: re,
      y: Ee
    });
  }
  function X(Q) {
    if (!g(_) || !T || !s())
      return;
    M = !0;
    const re = An(Q, T), Ee = s().startX ?? 0, _e = s().startY ?? 0, me = {
      ...s(),
      x: re.x < Ee ? re.x : Ee,
      y: re.y < _e ? re.y : _e,
      width: Math.abs(re.x - Ee),
      height: Math.abs(re.y - _e)
    }, j = P.map((ae) => ae.id), Pe = Is(P, u()).map((ae) => ae.id);
    P = dc(
      c(),
      me,
      [
        d().x,
        d().y,
        d().zoom
      ],
      f() === xi.Partial,
      !0
    );
    const Oe = Is(P, u()).map((ae) => ae.id), Le = P.map((ae) => ae.id);
    (j.length !== Le.length || Le.some((ae) => !j.includes(ae))) && p.update((ae) => ae.map(Il(Le))), (Pe.length !== Oe.length || Oe.some((ae) => !Pe.includes(ae))) && H.update((ae) => ae.map(Il(Oe))), I.set("user"), A.set(me);
  }
  function U(Q) {
    var re, Ee;
    Q.button === 0 && ((Ee = (re = Q.target) == null ? void 0 : re.releasePointerCapture) == null || Ee.call(re, Q.pointerId), !g(_) && l() === "user" && Q.target === g($) && (z == null || z(Q)), A.set(null), P.length > 0 && gi(I, "nodes"), i() && (M = !1));
  }
  const G = (Q) => {
    var re;
    if (Array.isArray(g(v)) && ((re = g(v)) != null && re.includes(2))) {
      Q.preventDefault();
      return;
    }
    b("panecontextmenu", { event: Q });
  };
  he(
    () => (o(), ee(k())),
    () => {
      J(v, o() || k());
    }
  ), he(
    () => (i(), s(), ee(m()), g(v)),
    () => {
      J(_, i() || s() || m() && g(v) !== !0);
    }
  ), he(
    () => (a(), g(_), l()),
    () => {
      J(x, a() && (g(_) || l() === "user"));
    }
  ), mt(), Ie();
  var W = Vp(), le = /* @__PURE__ */ Ne(() => g(x) ? void 0 : Ll(z, g($))), ye = /* @__PURE__ */ Ne(() => Ll(G, g($)));
  let ge;
  var oe = F(W);
  wt(oe, t, "default", {}), Y(W), kn(W, (Q) => J($, Q), () => g($)), $e(
    (Q) => ge = _t(W, 1, "svelte-flow__pane svelte-1esy7hx", null, ge, Q),
    [
      () => ({
        draggable: k() === !0 || Array.isArray(k()) && k().includes(0),
        dragging: h(),
        selection: g(_)
      })
    ],
    xe
  ), nt("click", W, function(...Q) {
    var re;
    (re = g(le)) == null || re.apply(this, Q);
  }), nt("pointerdown", W, function(...Q) {
    var re;
    (re = g(x) ? q : void 0) == null || re.apply(this, Q);
  }), nt("pointermove", W, function(...Q) {
    var re;
    (re = g(x) ? X : void 0) == null || re.apply(this, Q);
  }), nt("pointerup", W, function(...Q) {
    var re;
    (re = g(x) ? U : void 0) == null || re.apply(this, Q);
  }), nt("contextmenu", W, function(...Q) {
    var re;
    (re = g(ye)) == null || re.apply(this, Q);
  }), V(e, W);
  var Te = fe({
    get panOnDrag() {
      return k();
    },
    set panOnDrag(Q) {
      k(Q), y();
    },
    get selectionOnDrag() {
      return m();
    },
    set selectionOnDrag(Q) {
      m(Q), y();
    }
  });
  return r(), Te;
}
ue(Zc, { panOnDrag: {}, selectionOnDrag: {} }, ["default"], [], !0);
var Op = /* @__PURE__ */ ie('<div class="svelte-flow__viewport xyflow__viewport svelte-1floaup"><!></div>');
const Lp = {
  hash: "svelte-1floaup",
  code: ".svelte-flow__viewport.svelte-1floaup {width:100%;height:100%;position:absolute;top:0;left:0;}"
};
function Fc(e, t) {
  de(t, !1), tt(e, Lp);
  const [n, r] = rt(), o = () => ne(i, "$viewport", n), { viewport: i } = We();
  Ie();
  var s = Op(), a = F(s);
  wt(a, t, "default", {}), Y(s), $e(() => ft(s, `transform: translate(${o().x ?? ""}px, ${o().y ?? ""}px) scale(${o().zoom ?? ""})`)), V(e, s), fe(), r();
}
ue(Fc, {}, ["default"], [], !0);
function Pr(e, t) {
  const { store: n, onDrag: r, onDragStart: o, onDragStop: i, onNodeMouseDown: s } = t, a = Q0({
    onDrag: r,
    onDragStart: o,
    onDragStop: i,
    onNodeMouseDown: s,
    getStoreItems: () => {
      const u = K(n.snapGrid), c = K(n.viewport);
      return {
        nodes: K(n.nodes),
        nodeLookup: K(n.nodeLookup),
        edges: K(n.edges),
        nodeExtent: K(n.nodeExtent),
        snapGrid: u || [0, 0],
        snapToGrid: !!u,
        nodeOrigin: K(n.nodeOrigin),
        multiSelectionActive: K(n.multiselectionKeyPressed),
        domNode: K(n.domNode),
        transform: [c.x, c.y, c.zoom],
        autoPanOnNodeDrag: K(n.autoPanOnNodeDrag),
        nodesDraggable: K(n.nodesDraggable),
        selectNodesOnDrag: K(n.selectNodesOnDrag),
        nodeDragThreshold: K(n.nodeDragThreshold),
        unselectNodesAndEdges: n.unselectNodesAndEdges,
        updateNodePositions: n.updateNodePositions,
        panBy: n.panBy
      };
    }
  });
  function l(u, c) {
    if (c.disabled) {
      a.destroy();
      return;
    }
    a.update({
      domNode: u,
      noDragClassName: c.noDragClass,
      handleSelector: c.handleSelector,
      nodeId: c.nodeId,
      isSelectable: c.isSelectable,
      nodeClickDistance: c.nodeClickDistance
    });
  }
  return l(e, t), {
    update(u) {
      l(e, u);
    },
    destroy() {
      a.destroy();
    }
  };
}
function Ip({ width: e, height: t, initialWidth: n, initialHeight: r, measuredWidth: o, measuredHeight: i }) {
  if (o === void 0 && i === void 0) {
    const s = e ?? n, a = t ?? r;
    return {
      width: s ? `width:${s}px;` : "",
      height: a ? `height:${a}px;` : ""
    };
  }
  return {
    width: e ? `width:${e}px;` : "",
    height: t ? `height:${t}px;` : ""
  };
}
var zp = /* @__PURE__ */ ie("<div><!></div>");
function Xc(e, t) {
  de(t, !1);
  const [n, r] = rt(), o = () => ne(ye, "$nodeTypes", n), i = () => ne(re, "$elementsSelectable", n), s = () => ne(Ee, "$nodesDraggable", n), a = () => ne(Pe, "$connectableStore", n), l = /* @__PURE__ */ se(void 0, !0), u = /* @__PURE__ */ se(void 0, !0), c = /* @__PURE__ */ se(void 0, !0), d = /* @__PURE__ */ se(void 0, !0);
  let f = w(t, "node", 13), h = w(t, "id", 13), v = w(t, "data", 29, () => ({})), _ = w(t, "selected", 13, !1), x = w(t, "draggable", 13, void 0), k = w(t, "selectable", 13, void 0), m = w(t, "connectable", 13, !0), b = w(t, "deletable", 13, !0), p = w(t, "hidden", 13, !1), C = w(t, "dragging", 13, !1), H = w(t, "resizeObserver", 13, null), S = w(t, "style", 13, void 0), D = w(t, "type", 13, "default"), L = w(t, "isParent", 13, !1), A = w(t, "positionX", 13), I = w(t, "positionY", 13), O = w(t, "sourcePosition", 13, void 0), R = w(t, "targetPosition", 13, void 0), E = w(t, "zIndex", 13), N = w(t, "measuredWidth", 13, void 0), $ = w(t, "measuredHeight", 13, void 0), T = w(t, "initialWidth", 13, void 0), P = w(t, "initialHeight", 13, void 0), M = w(t, "width", 13, void 0), z = w(t, "height", 13, void 0), q = w(t, "dragHandle", 13, void 0), X = w(t, "initialized", 13, !1), U = w(t, "parentId", 13, void 0), G = w(t, "nodeClickDistance", 13, void 0), W = w(t, "class", 13, "");
  const le = We(), {
    nodeTypes: ye,
    nodeDragThreshold: ge,
    selectNodesOnDrag: oe,
    handleNodeSelection: Te,
    updateNodeInternals: Q,
    elementsSelectable: re,
    nodesDraggable: Ee
  } = le;
  let _e = /* @__PURE__ */ se(void 0, !0), me = /* @__PURE__ */ se(null, !0);
  const j = qi(), Pe = Ce(m());
  let Oe = /* @__PURE__ */ se(void 0, !0), Le = /* @__PURE__ */ se(void 0, !0), ae = /* @__PURE__ */ se(void 0, !0);
  Ar("svelteflow__node_id", h()), Ar("svelteflow__node_connectable", Pe), ua(() => {
    var te;
    g(me) && ((te = H()) == null || te.unobserve(g(me)));
  });
  function ve(te) {
    k() && (!K(oe) || !x() || K(ge) > 0) && Te(h()), j("nodeclick", { node: f().internals.userNode, event: te });
  }
  he(() => ee(D()), () => {
    J(l, D() || "default");
  }), he(() => (o(), g(l)), () => {
    J(u, !!o()[g(l)]);
  }), he(
    () => (o(), g(l), $i),
    () => {
      J(c, o()[g(l)] || $i);
    }
  ), he(
    () => (g(u), ee(D())),
    () => {
      g(u) || console.warn("003", zr.error003(D()));
    }
  ), he(
    () => (ee(M()), ee(z()), ee(T()), ee(P()), ee(N()), ee($())),
    () => {
      J(d, Ip({
        width: M(),
        height: z(),
        initialWidth: T(),
        initialHeight: P(),
        measuredWidth: N(),
        measuredHeight: $()
      }));
    }
  ), he(() => ee(m()), () => {
    Pe.set(!!m());
  }), he(
    () => (g(Oe), g(l), g(Le), ee(O()), g(ae), ee(R()), ee(h()), g(_e)),
    () => {
      (g(Oe) && g(l) !== g(Oe) || g(Le) && O() !== g(Le) || g(ae) && R() !== g(ae)) && requestAnimationFrame(() => Q(/* @__PURE__ */ new Map([
        [
          h(),
          {
            id: h(),
            nodeElement: g(_e),
            force: !0
          }
        ]
      ]))), J(Oe, g(l)), J(Le, O()), J(ae, R());
    }
  ), he(
    () => (ee(H()), g(_e), g(me), ee(X())),
    () => {
      H() && (g(_e) !== g(me) || !X()) && (g(me) && H().unobserve(g(me)), g(_e) && H().observe(g(_e)), J(me, g(_e)));
    }
  ), mt(), Ie(!0);
  var Me = et(), Se = we(Me);
  {
    var Ke = (te) => {
      var Ze = zp();
      let ce, nn;
      var rn = F(Ze);
      const pn = /* @__PURE__ */ xe(() => _() ?? !1), Ve = /* @__PURE__ */ xe(() => k() ?? i() ?? !0), ot = /* @__PURE__ */ xe(() => b() ?? !0), Be = /* @__PURE__ */ xe(() => x() ?? s() ?? !0);
      Nu(rn, () => g(c), (ze, it) => {
        it(ze, {
          get data() {
            return v();
          },
          get id() {
            return h();
          },
          get selected() {
            return g(pn);
          },
          get selectable() {
            return g(Ve);
          },
          get deletable() {
            return g(ot);
          },
          get sourcePosition() {
            return O();
          },
          get targetPosition() {
            return R();
          },
          get zIndex() {
            return E();
          },
          get dragging() {
            return C();
          },
          get draggable() {
            return g(Be);
          },
          get dragHandle() {
            return q();
          },
          get parentId() {
            return U();
          },
          get type() {
            return g(l);
          },
          get isConnectable() {
            return a();
          },
          get positionAbsoluteX() {
            return A();
          },
          get positionAbsoluteY() {
            return I();
          },
          get width() {
            return M();
          },
          get height() {
            return z();
          }
        });
      }), Y(Ze), yt(Ze, (ze, it) => Pr == null ? void 0 : Pr(ze, it), () => ({
        nodeId: h(),
        isSelectable: k(),
        disabled: !1,
        handleSelector: q(),
        noDragClass: "nodrag",
        nodeClickDistance: G(),
        onNodeMouseDown: Te,
        onDrag: (ze, it, on, Xt) => {
          j("nodedrag", { event: ze, targetNode: on, nodes: Xt });
        },
        onDragStart: (ze, it, on, Xt) => {
          j("nodedragstart", { event: ze, targetNode: on, nodes: Xt });
        },
        onDragStop: (ze, it, on, Xt) => {
          j("nodedragstop", { event: ze, targetNode: on, nodes: Xt });
        },
        store: le
      })), kn(Ze, (ze) => J(_e, ze), () => g(_e)), Rt(() => nt("click", Ze, ve)), Rt(() => nt("mouseenter", Ze, (ze) => j("nodemouseenter", { node: f(), event: ze }))), Rt(() => nt("mouseleave", Ze, (ze) => j("nodemouseleave", { node: f(), event: ze }))), Rt(() => nt("mousemove", Ze, (ze) => j("nodemousemove", { node: f(), event: ze }))), Rt(() => nt("contextmenu", Ze, (ze) => j("nodecontextmenu", { node: f(), event: ze }))), $e(
        (ze, it) => {
          be(Ze, "data-id", h()), ce = _t(Ze, 1, ze, null, ce, it), nn = ft(Ze, `${S() ?? ""};${g(d).width ?? ""}${g(d).height ?? ""}`, nn, {
            "z-index": E(),
            transform: `translate(${A() ?? ""}px, ${I() ?? ""}px)`,
            visibility: X() ? "visible" : "hidden"
          });
        },
        [
          () => gn(Mt([
            "svelte-flow__node",
            `svelte-flow__node-${g(l)}`,
            W()
          ])),
          () => ({
            dragging: C(),
            selected: _(),
            draggable: x(),
            connectable: m(),
            selectable: k(),
            nopan: x(),
            parent: L()
          })
        ],
        xe
      ), V(te, Ze);
    };
    pe(Se, (te) => {
      p() || te(Ke);
    });
  }
  V(e, Me);
  var ut = fe({
    get node() {
      return f();
    },
    set node(te) {
      f(te), y();
    },
    get id() {
      return h();
    },
    set id(te) {
      h(te), y();
    },
    get data() {
      return v();
    },
    set data(te) {
      v(te), y();
    },
    get selected() {
      return _();
    },
    set selected(te) {
      _(te), y();
    },
    get draggable() {
      return x();
    },
    set draggable(te) {
      x(te), y();
    },
    get selectable() {
      return k();
    },
    set selectable(te) {
      k(te), y();
    },
    get connectable() {
      return m();
    },
    set connectable(te) {
      m(te), y();
    },
    get deletable() {
      return b();
    },
    set deletable(te) {
      b(te), y();
    },
    get hidden() {
      return p();
    },
    set hidden(te) {
      p(te), y();
    },
    get dragging() {
      return C();
    },
    set dragging(te) {
      C(te), y();
    },
    get resizeObserver() {
      return H();
    },
    set resizeObserver(te) {
      H(te), y();
    },
    get style() {
      return S();
    },
    set style(te) {
      S(te), y();
    },
    get type() {
      return D();
    },
    set type(te) {
      D(te), y();
    },
    get isParent() {
      return L();
    },
    set isParent(te) {
      L(te), y();
    },
    get positionX() {
      return A();
    },
    set positionX(te) {
      A(te), y();
    },
    get positionY() {
      return I();
    },
    set positionY(te) {
      I(te), y();
    },
    get sourcePosition() {
      return O();
    },
    set sourcePosition(te) {
      O(te), y();
    },
    get targetPosition() {
      return R();
    },
    set targetPosition(te) {
      R(te), y();
    },
    get zIndex() {
      return E();
    },
    set zIndex(te) {
      E(te), y();
    },
    get measuredWidth() {
      return N();
    },
    set measuredWidth(te) {
      N(te), y();
    },
    get measuredHeight() {
      return $();
    },
    set measuredHeight(te) {
      $(te), y();
    },
    get initialWidth() {
      return T();
    },
    set initialWidth(te) {
      T(te), y();
    },
    get initialHeight() {
      return P();
    },
    set initialHeight(te) {
      P(te), y();
    },
    get width() {
      return M();
    },
    set width(te) {
      M(te), y();
    },
    get height() {
      return z();
    },
    set height(te) {
      z(te), y();
    },
    get dragHandle() {
      return q();
    },
    set dragHandle(te) {
      q(te), y();
    },
    get initialized() {
      return X();
    },
    set initialized(te) {
      X(te), y();
    },
    get parentId() {
      return U();
    },
    set parentId(te) {
      U(te), y();
    },
    get nodeClickDistance() {
      return G();
    },
    set nodeClickDistance(te) {
      G(te), y();
    },
    get class() {
      return W();
    },
    set class(te) {
      W(te), y();
    }
  });
  return r(), ut;
}
ue(
  Xc,
  {
    node: {},
    id: {},
    data: {},
    selected: {},
    draggable: {},
    selectable: {},
    connectable: {},
    deletable: {},
    hidden: {},
    dragging: {},
    resizeObserver: {},
    style: {},
    type: {},
    isParent: {},
    positionX: {},
    positionY: {},
    sourcePosition: {},
    targetPosition: {},
    zIndex: {},
    measuredWidth: {},
    measuredHeight: {},
    initialWidth: {},
    initialHeight: {},
    width: {},
    height: {},
    dragHandle: {},
    initialized: {},
    parentId: {},
    nodeClickDistance: {},
    class: {}
  },
  [],
  [],
  !0
);
var Rp = /* @__PURE__ */ ie('<div class="svelte-flow__nodes svelte-tf4uy4"></div>');
const Bp = {
  hash: "svelte-tf4uy4",
  code: ".svelte-flow__nodes.svelte-tf4uy4 {width:100%;height:100%;position:absolute;left:0;top:0;}"
};
function Wc(e, t) {
  de(t, !1), tt(e, Bp);
  const [n, r] = rt(), o = () => ne(c, "$visibleNodes", n), i = () => ne(d, "$nodesDraggable", n), s = () => ne(h, "$elementsSelectable", n), a = () => ne(f, "$nodesConnectable", n), l = () => ne(_, "$parentLookup", n);
  let u = w(t, "nodeClickDistance", 12, 0);
  const {
    visibleNodes: c,
    nodesDraggable: d,
    nodesConnectable: f,
    elementsSelectable: h,
    updateNodeInternals: v,
    parentLookup: _
  } = We(), x = typeof ResizeObserver > "u" ? null : new ResizeObserver((b) => {
    const p = /* @__PURE__ */ new Map();
    b.forEach((C) => {
      const H = C.target.getAttribute("data-id");
      p.set(H, { id: H, nodeElement: C.target, force: !0 });
    }), v(p);
  });
  ua(() => {
    x == null || x.disconnect();
  }), Ie();
  var k = Rp();
  Tt(k, 5, o, (b) => b.id, (b, p) => {
    const C = /* @__PURE__ */ xe(() => !!g(p).selected), H = /* @__PURE__ */ xe(() => !!g(p).hidden), S = /* @__PURE__ */ xe(() => !!(g(p).draggable || i() && typeof g(p).draggable > "u")), D = /* @__PURE__ */ xe(() => !!(g(p).selectable || s() && typeof g(p).selectable > "u")), L = /* @__PURE__ */ xe(() => !!(g(p).connectable || a() && typeof g(p).connectable > "u")), A = /* @__PURE__ */ xe(() => g(p).deletable ?? !0), I = /* @__PURE__ */ xe(() => l().has(g(p).id)), O = /* @__PURE__ */ xe(() => g(p).type ?? "default"), R = /* @__PURE__ */ xe(() => g(p).internals.z ?? 0), E = /* @__PURE__ */ xe(() => mc(g(p)));
    Xc(b, {
      get node() {
        return g(p);
      },
      get id() {
        return g(p).id;
      },
      get data() {
        return g(p).data;
      },
      get selected() {
        return g(C);
      },
      get hidden() {
        return g(H);
      },
      get draggable() {
        return g(S);
      },
      get selectable() {
        return g(D);
      },
      get connectable() {
        return g(L);
      },
      get deletable() {
        return g(A);
      },
      get positionX() {
        return g(p).internals.positionAbsolute.x;
      },
      get positionY() {
        return g(p).internals.positionAbsolute.y;
      },
      get isParent() {
        return g(I);
      },
      get style() {
        return g(p).style;
      },
      get class() {
        return g(p).class;
      },
      get type() {
        return g(O);
      },
      get sourcePosition() {
        return g(p).sourcePosition;
      },
      get targetPosition() {
        return g(p).targetPosition;
      },
      get dragging() {
        return g(p).dragging;
      },
      get zIndex() {
        return g(R);
      },
      get dragHandle() {
        return g(p).dragHandle;
      },
      get initialized() {
        return g(E);
      },
      get width() {
        return g(p).width;
      },
      get height() {
        return g(p).height;
      },
      get initialWidth() {
        return g(p).initialWidth;
      },
      get initialHeight() {
        return g(p).initialHeight;
      },
      get measuredWidth() {
        return g(p).measured.width;
      },
      get measuredHeight() {
        return g(p).measured.height;
      },
      get parentId() {
        return g(p).parentId;
      },
      resizeObserver: x,
      get nodeClickDistance() {
        return u();
      },
      $$events: {
        nodeclick(N) {
          Fe.call(this, t, N);
        },
        nodemouseenter(N) {
          Fe.call(this, t, N);
        },
        nodemousemove(N) {
          Fe.call(this, t, N);
        },
        nodemouseleave(N) {
          Fe.call(this, t, N);
        },
        nodedrag(N) {
          Fe.call(this, t, N);
        },
        nodedragstart(N) {
          Fe.call(this, t, N);
        },
        nodedragstop(N) {
          Fe.call(this, t, N);
        },
        nodecontextmenu(N) {
          Fe.call(this, t, N);
        }
      }
    });
  }), Y(k), V(e, k);
  var m = fe({
    get nodeClickDistance() {
      return u();
    },
    set nodeClickDistance(b) {
      u(b), y();
    }
  });
  return r(), m;
}
ue(Wc, { nodeClickDistance: {} }, [], [], !0);
var qp = /* @__PURE__ */ ke('<svg><g role="img"><!></g></svg>');
function Kc(e, t) {
  de(t, !1);
  const [n, r] = rt(), o = () => ne(W, "$edgeTypes", n), i = () => ne(le, "$flowId", n), s = () => ne(ye, "$elementsSelectable", n), a = () => ne(G, "$edgeLookup", n), l = /* @__PURE__ */ se(void 0, !0), u = /* @__PURE__ */ se(void 0, !0), c = /* @__PURE__ */ se(void 0, !0), d = /* @__PURE__ */ se(void 0, !0), f = /* @__PURE__ */ se(void 0, !0);
  let h = w(t, "id", 13), v = w(t, "type", 13, "default"), _ = w(t, "source", 13, ""), x = w(t, "target", 13, ""), k = w(t, "data", 29, () => ({})), m = w(t, "style", 13, void 0), b = w(t, "zIndex", 13, void 0), p = w(t, "animated", 13, !1), C = w(t, "selected", 13, !1), H = w(t, "selectable", 13, void 0), S = w(t, "deletable", 13, void 0), D = w(t, "hidden", 13, !1), L = w(t, "label", 13, void 0), A = w(t, "labelStyle", 13, void 0), I = w(t, "markerStart", 13, void 0), O = w(t, "markerEnd", 13, void 0), R = w(t, "sourceHandle", 13, void 0), E = w(t, "targetHandle", 13, void 0), N = w(t, "sourceX", 13), $ = w(t, "sourceY", 13), T = w(t, "targetX", 13), P = w(t, "targetY", 13), M = w(t, "sourcePosition", 13), z = w(t, "targetPosition", 13), q = w(t, "ariaLabel", 13, void 0), X = w(t, "interactionWidth", 13, void 0), U = w(t, "class", 13, "");
  Ar("svelteflow__edge_id", h());
  const {
    edgeLookup: G,
    edgeTypes: W,
    flowId: le,
    elementsSelectable: ye
  } = We(), ge = qi(), oe = Ac();
  function Te(j) {
    const Pe = a().get(h());
    Pe && (oe(h()), ge("edgeclick", { event: j, edge: Pe }));
  }
  function Q(j, Pe) {
    const Oe = a().get(h());
    Oe && ge(Pe, { event: j, edge: Oe });
  }
  he(() => ee(v()), () => {
    J(l, v() || "default");
  }), he(
    () => (o(), g(l), Ei),
    () => {
      J(u, o()[g(l)] || Ei);
    }
  ), he(
    () => (ee(I()), i()),
    () => {
      J(c, I() ? `url('#${Bs(I(), i())}')` : void 0);
    }
  ), he(
    () => (ee(O()), i()),
    () => {
      J(d, O() ? `url('#${Bs(O(), i())}')` : void 0);
    }
  ), he(
    () => (ee(H()), s()),
    () => {
      J(f, H() ?? s());
    }
  ), mt(), Ie(!0);
  var re = et(), Ee = we(re);
  {
    var _e = (j) => {
      var Pe = qp();
      let Oe;
      var Le = F(Pe);
      let ae;
      var ve = F(Le);
      const Me = /* @__PURE__ */ xe(() => S() ?? !0);
      Nu(ve, () => g(u), (Se, Ke) => {
        Ke(Se, {
          get id() {
            return h();
          },
          get source() {
            return _();
          },
          get target() {
            return x();
          },
          get sourceX() {
            return N();
          },
          get sourceY() {
            return $();
          },
          get targetX() {
            return T();
          },
          get targetY() {
            return P();
          },
          get sourcePosition() {
            return M();
          },
          get targetPosition() {
            return z();
          },
          get animated() {
            return p();
          },
          get selected() {
            return C();
          },
          get label() {
            return L();
          },
          get labelStyle() {
            return A();
          },
          get data() {
            return k();
          },
          get style() {
            return m();
          },
          get interactionWidth() {
            return X();
          },
          get selectable() {
            return g(f);
          },
          get deletable() {
            return g(Me);
          },
          get type() {
            return g(l);
          },
          get sourceHandleId() {
            return R();
          },
          get targetHandleId() {
            return E();
          },
          get markerStart() {
            return g(c);
          },
          get markerEnd() {
            return g(d);
          }
        });
      }), Y(Le), Y(Pe), $e(
        (Se, Ke) => {
          Oe = ft(Pe, "", Oe, { "z-index": b() }), ae = _t(Le, 0, Se, null, ae, Ke), be(Le, "data-id", h()), be(Le, "aria-label", q() === null ? void 0 : q() ? q() : `Edge from ${_()} to ${x()}`);
        },
        [
          () => gn(Mt(["svelte-flow__edge", U()])),
          () => ({
            animated: p(),
            selected: C(),
            selectable: g(f)
          })
        ],
        xe
      ), nt("click", Le, Te), nt("contextmenu", Le, (Se) => {
        Q(Se, "edgecontextmenu");
      }), nt("mouseenter", Le, (Se) => {
        Q(Se, "edgemouseenter");
      }), nt("mouseleave", Le, (Se) => {
        Q(Se, "edgemouseleave");
      }), V(j, Pe);
    };
    pe(Ee, (j) => {
      D() || j(_e);
    });
  }
  V(e, re);
  var me = fe({
    get id() {
      return h();
    },
    set id(j) {
      h(j), y();
    },
    get type() {
      return v();
    },
    set type(j) {
      v(j), y();
    },
    get source() {
      return _();
    },
    set source(j) {
      _(j), y();
    },
    get target() {
      return x();
    },
    set target(j) {
      x(j), y();
    },
    get data() {
      return k();
    },
    set data(j) {
      k(j), y();
    },
    get style() {
      return m();
    },
    set style(j) {
      m(j), y();
    },
    get zIndex() {
      return b();
    },
    set zIndex(j) {
      b(j), y();
    },
    get animated() {
      return p();
    },
    set animated(j) {
      p(j), y();
    },
    get selected() {
      return C();
    },
    set selected(j) {
      C(j), y();
    },
    get selectable() {
      return H();
    },
    set selectable(j) {
      H(j), y();
    },
    get deletable() {
      return S();
    },
    set deletable(j) {
      S(j), y();
    },
    get hidden() {
      return D();
    },
    set hidden(j) {
      D(j), y();
    },
    get label() {
      return L();
    },
    set label(j) {
      L(j), y();
    },
    get labelStyle() {
      return A();
    },
    set labelStyle(j) {
      A(j), y();
    },
    get markerStart() {
      return I();
    },
    set markerStart(j) {
      I(j), y();
    },
    get markerEnd() {
      return O();
    },
    set markerEnd(j) {
      O(j), y();
    },
    get sourceHandle() {
      return R();
    },
    set sourceHandle(j) {
      R(j), y();
    },
    get targetHandle() {
      return E();
    },
    set targetHandle(j) {
      E(j), y();
    },
    get sourceX() {
      return N();
    },
    set sourceX(j) {
      N(j), y();
    },
    get sourceY() {
      return $();
    },
    set sourceY(j) {
      $(j), y();
    },
    get targetX() {
      return T();
    },
    set targetX(j) {
      T(j), y();
    },
    get targetY() {
      return P();
    },
    set targetY(j) {
      P(j), y();
    },
    get sourcePosition() {
      return M();
    },
    set sourcePosition(j) {
      M(j), y();
    },
    get targetPosition() {
      return z();
    },
    set targetPosition(j) {
      z(j), y();
    },
    get ariaLabel() {
      return q();
    },
    set ariaLabel(j) {
      q(j), y();
    },
    get interactionWidth() {
      return X();
    },
    set interactionWidth(j) {
      X(j), y();
    },
    get class() {
      return U();
    },
    set class(j) {
      U(j), y();
    }
  });
  return r(), me;
}
ue(
  Kc,
  {
    id: {},
    type: {},
    source: {},
    target: {},
    data: {},
    style: {},
    zIndex: {},
    animated: {},
    selected: {},
    selectable: {},
    deletable: {},
    hidden: {},
    label: {},
    labelStyle: {},
    markerStart: {},
    markerEnd: {},
    sourceHandle: {},
    targetHandle: {},
    sourceX: {},
    sourceY: {},
    targetX: {},
    targetY: {},
    sourcePosition: {},
    targetPosition: {},
    ariaLabel: {},
    interactionWidth: {},
    class: {}
  },
  [],
  [],
  !0
);
function Gc(e, t) {
  de(t, !1);
  let n = w(t, "onMount", 12, void 0), r = w(t, "onDestroy", 12, void 0);
  return tn(() => {
    var o;
    return (o = n()) == null || o(), r();
  }), Ie(), fe({
    get onMount() {
      return n();
    },
    set onMount(o) {
      n(o), y();
    },
    get onDestroy() {
      return r();
    },
    set onDestroy(o) {
      r(o), y();
    }
  });
}
ue(Gc, { onMount: {}, onDestroy: {} }, [], [], !0);
var Yp = /* @__PURE__ */ ke("<defs></defs>");
function jc(e, t) {
  de(t, !1);
  const [n, r] = rt(), o = () => ne(i, "$markers", n), { markers: i } = We();
  Ie();
  var s = Yp();
  Tt(s, 5, o, (a) => a.id, (a, l) => {
    Uc(a, lt(() => g(l)));
  }), Y(s), V(e, s), fe(), r();
}
ue(jc, {}, [], [], !0);
var Zp = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" fill="none" points="-5,-4 0,0 -5,4"></polyline>'), Fp = /* @__PURE__ */ ke('<polyline stroke-linecap="round" stroke-linejoin="round" points="-5,-4 0,0 -5,4 -5,-4"></polyline>'), Xp = /* @__PURE__ */ ke('<marker class="svelte-flow__arrowhead" viewBox="-10 -10 20 20" refX="0" refY="0"><!></marker>');
function Uc(e, t) {
  de(t, !1);
  let n = w(t, "id", 12), r = w(t, "type", 12), o = w(t, "width", 12, 12.5), i = w(t, "height", 12, 12.5), s = w(t, "markerUnits", 12, "strokeWidth"), a = w(t, "orient", 12, "auto-start-reverse"), l = w(t, "color", 12, void 0), u = w(t, "strokeWidth", 12, void 0);
  Ie();
  var c = Xp(), d = F(c);
  {
    var f = (v) => {
      var _ = Zp();
      $e(() => {
        be(_, "stroke", l()), be(_, "stroke-width", u());
      }), V(v, _);
    }, h = (v, _) => {
      {
        var x = (k) => {
          var m = Fp();
          $e(() => {
            be(m, "stroke", l()), be(m, "stroke-width", u()), be(m, "fill", l());
          }), V(k, m);
        };
        pe(
          v,
          (k) => {
            r() === ko.ArrowClosed && k(x);
          },
          _
        );
      }
    };
    pe(d, (v) => {
      r() === ko.Arrow ? v(f) : v(h, !1);
    });
  }
  return Y(c), $e(() => {
    be(c, "id", n()), be(c, "markerWidth", `${o()}`), be(c, "markerHeight", `${i()}`), be(c, "markerUnits", s()), be(c, "orient", a());
  }), V(e, c), fe({
    get id() {
      return n();
    },
    set id(v) {
      n(v), y();
    },
    get type() {
      return r();
    },
    set type(v) {
      r(v), y();
    },
    get width() {
      return o();
    },
    set width(v) {
      o(v), y();
    },
    get height() {
      return i();
    },
    set height(v) {
      i(v), y();
    },
    get markerUnits() {
      return s();
    },
    set markerUnits(v) {
      s(v), y();
    },
    get orient() {
      return a();
    },
    set orient(v) {
      a(v), y();
    },
    get color() {
      return l();
    },
    set color(v) {
      l(v), y();
    },
    get strokeWidth() {
      return u();
    },
    set strokeWidth(v) {
      u(v), y();
    }
  });
}
ue(
  Uc,
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
var Wp = /* @__PURE__ */ ie('<div class="svelte-flow__edges"><svg class="svelte-flow__marker"><!></svg> <!> <!></div>');
function Jc(e, t) {
  de(t, !1);
  const [n, r] = rt(), o = () => ne(a, "$visibleEdges", n), i = () => ne(c, "$elementsSelectable", n);
  let s = w(t, "defaultEdgeOptions", 12);
  const {
    visibleEdges: a,
    edgesInitialized: l,
    edges: { setDefaultOptions: u },
    elementsSelectable: c
  } = We();
  tn(() => {
    s() && u(s());
  }), Ie();
  var d = Wp(), f = F(d), h = F(f);
  jc(h, {}), Y(f);
  var v = B(f, 2);
  Tt(v, 1, o, (m) => m.id, (m, b) => {
    const p = /* @__PURE__ */ xe(() => g(b).selectable ?? i()), C = /* @__PURE__ */ xe(() => g(b).type || "default");
    Kc(m, {
      get id() {
        return g(b).id;
      },
      get source() {
        return g(b).source;
      },
      get target() {
        return g(b).target;
      },
      get data() {
        return g(b).data;
      },
      get style() {
        return g(b).style;
      },
      get animated() {
        return g(b).animated;
      },
      get selected() {
        return g(b).selected;
      },
      get selectable() {
        return g(p);
      },
      get deletable() {
        return g(b).deletable;
      },
      get hidden() {
        return g(b).hidden;
      },
      get label() {
        return g(b).label;
      },
      get labelStyle() {
        return g(b).labelStyle;
      },
      get markerStart() {
        return g(b).markerStart;
      },
      get markerEnd() {
        return g(b).markerEnd;
      },
      get sourceHandle() {
        return g(b).sourceHandle;
      },
      get targetHandle() {
        return g(b).targetHandle;
      },
      get sourceX() {
        return g(b).sourceX;
      },
      get sourceY() {
        return g(b).sourceY;
      },
      get targetX() {
        return g(b).targetX;
      },
      get targetY() {
        return g(b).targetY;
      },
      get sourcePosition() {
        return g(b).sourcePosition;
      },
      get targetPosition() {
        return g(b).targetPosition;
      },
      get ariaLabel() {
        return g(b).ariaLabel;
      },
      get interactionWidth() {
        return g(b).interactionWidth;
      },
      get class() {
        return g(b).class;
      },
      get type() {
        return g(C);
      },
      get zIndex() {
        return g(b).zIndex;
      },
      $$events: {
        edgeclick(H) {
          Fe.call(this, t, H);
        },
        edgecontextmenu(H) {
          Fe.call(this, t, H);
        },
        edgemouseenter(H) {
          Fe.call(this, t, H);
        },
        edgemouseleave(H) {
          Fe.call(this, t, H);
        }
      }
    });
  });
  var _ = B(v, 2);
  {
    var x = (m) => {
      Gc(m, {
        onMount: () => {
          gi(l, !0);
        },
        onDestroy: () => {
          gi(l, !1);
        }
      });
    };
    pe(_, (m) => {
      o().length > 0 && m(x);
    });
  }
  Y(d), V(e, d);
  var k = fe({
    get defaultEdgeOptions() {
      return s();
    },
    set defaultEdgeOptions(m) {
      s(m), y();
    }
  });
  return r(), k;
}
ue(Jc, { defaultEdgeOptions: {} }, [], [], !0);
var Kp = /* @__PURE__ */ ie('<div class="svelte-flow__selection svelte-1iugwpu"></div>');
const Gp = {
  hash: "svelte-1iugwpu",
  code: ".svelte-flow__selection.svelte-1iugwpu {position:absolute;top:0;left:0;}"
};
function ka(e, t) {
  de(t, !1), tt(e, Gp);
  let n = w(t, "x", 12, 0), r = w(t, "y", 12, 0), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "isVisible", 12, !0);
  var a = et(), l = we(a);
  {
    var u = (c) => {
      var d = Kp();
      let f;
      $e(() => f = ft(d, "", f, {
        width: typeof o() == "string" ? o() : `${o()}px`,
        height: typeof i() == "string" ? i() : `${i()}px`,
        transform: `translate(${n()}px, ${r()}px)`
      })), V(c, d);
    };
    pe(l, (c) => {
      s() && c(u);
    });
  }
  return V(e, a), fe({
    get x() {
      return n();
    },
    set x(c) {
      n(c), y();
    },
    get y() {
      return r();
    },
    set y(c) {
      r(c), y();
    },
    get width() {
      return o();
    },
    set width(c) {
      o(c), y();
    },
    get height() {
      return i();
    },
    set height(c) {
      i(c), y();
    },
    get isVisible() {
      return s();
    },
    set isVisible(c) {
      s(c), y();
    }
  });
}
ue(
  ka,
  {
    x: {},
    y: {},
    width: {},
    height: {},
    isVisible: {}
  },
  [],
  [],
  !0
);
function Qc(e, t) {
  de(t, !1);
  const [n, r] = rt(), o = () => ne(s, "$selectionRect", n), i = () => ne(a, "$selectionRectMode", n), { selectionRect: s, selectionRectMode: a } = We();
  Ie();
  const l = /* @__PURE__ */ xe(() => !!(o() && i() === "user")), u = /* @__PURE__ */ xe(() => {
    var h;
    return (h = o()) == null ? void 0 : h.width;
  }), c = /* @__PURE__ */ xe(() => {
    var h;
    return (h = o()) == null ? void 0 : h.height;
  }), d = /* @__PURE__ */ xe(() => {
    var h;
    return (h = o()) == null ? void 0 : h.x;
  }), f = /* @__PURE__ */ xe(() => {
    var h;
    return (h = o()) == null ? void 0 : h.y;
  });
  ka(e, {
    get isVisible() {
      return g(l);
    },
    get width() {
      return g(u);
    },
    get height() {
      return g(c);
    },
    get x() {
      return g(d);
    },
    get y() {
      return g(f);
    }
  }), fe(), r();
}
ue(Qc, {}, [], [], !0);
var jp = /* @__PURE__ */ ie('<div class="selection-wrapper nopan svelte-5pxri" role="button" tabindex="-1"><!></div>');
const Up = {
  hash: "svelte-5pxri",
  code: ".selection-wrapper.svelte-5pxri {position:absolute;top:0;left:0;z-index:7;pointer-events:all;}"
};
function ed(e, t) {
  de(t, !1), tt(e, Up);
  const [n, r] = rt(), o = () => ne(l, "$selectionRectMode", n), i = () => ne(c, "$nodeLookup", n), s = () => ne(u, "$nodes", n), a = We(), { selectionRectMode: l, nodes: u, nodeLookup: c } = a, d = qi();
  let f = /* @__PURE__ */ se(null);
  function h(m) {
    const b = s().filter((p) => p.selected);
    d("selectioncontextmenu", { nodes: b, event: m });
  }
  function v(m) {
    const b = s().filter((p) => p.selected);
    d("selectionclick", { nodes: b, event: m });
  }
  he(
    () => (o(), i(), s()),
    () => {
      o() === "nodes" && (J(f, Oo(i(), { filter: (m) => !!m.selected })), s());
    }
  ), mt(), Ie();
  var _ = et(), x = we(_);
  {
    var k = (m) => {
      var b = jp(), p = F(b);
      ka(p, { width: "100%", height: "100%", x: 0, y: 0 }), Y(b), yt(b, (C, H) => Pr == null ? void 0 : Pr(C, H), () => ({
        disabled: !1,
        store: a,
        onDrag: (C, H, S, D) => {
          d("nodedrag", { event: C, targetNode: null, nodes: D });
        },
        onDragStart: (C, H, S, D) => {
          d("nodedragstart", { event: C, targetNode: null, nodes: D });
        },
        onDragStop: (C, H, S, D) => {
          d("nodedragstop", { event: C, targetNode: null, nodes: D });
        }
      })), Rt(() => nt("contextmenu", b, h)), Rt(() => nt("click", b, v)), Rt(() => nt("keyup", b, () => {
      })), $e(() => ft(b, `width: ${g(f).width ?? ""}px; height: ${g(f).height ?? ""}px; transform: translate(${g(f).x ?? ""}px, ${g(f).y ?? ""}px)`)), V(m, b);
    };
    pe(x, (m) => {
      o() === "nodes" && g(f) && Hn(g(f).x) && Hn(g(f).y) && m(k);
    });
  }
  V(e, _), fe(), r();
}
ue(ed, {}, [], [], !0);
function Ge(e, t) {
  let { enabled: n = !0, trigger: r, type: o = "keydown" } = t;
  function i(s) {
    const a = Array.isArray(r) ? r : [r], l = {
      alt: s.altKey,
      ctrl: s.ctrlKey,
      shift: s.shiftKey,
      meta: s.metaKey
    };
    for (const u of a) {
      const c = {
        modifier: [],
        preventDefault: !1,
        enabled: !0,
        ...u
      }, { modifier: d, key: f, callback: h, preventDefault: v, enabled: _ } = c;
      if (_) {
        if (d.length && !(Array.isArray(d) ? d : [d]).map(
          (m) => typeof m == "string" ? [m] : m
        ).some(
          (m) => m.every((b) => l[b])
        ))
          continue;
        if (s.key === f) {
          v && s.preventDefault();
          const x = {
            node: e,
            trigger: c,
            originalEvent: s
          };
          e.dispatchEvent(new CustomEvent("shortcut", { detail: x })), h == null || h(x);
        }
      }
    }
  }
  return n && e.addEventListener(o, i), {
    update: (s) => {
      const { enabled: a = !0, type: l = "keydown" } = s;
      n && (!a || o !== l) ? e.removeEventListener(o, i) : !n && a && e.addEventListener(l, i), n = a, o = l, r = s.trigger;
    },
    destroy: () => {
      e.removeEventListener(o, i);
    }
  };
}
function td(e, t) {
  de(t, !1);
  let n = w(t, "selectionKey", 12, "Shift"), r = w(t, "multiSelectionKey", 28, () => Ci() ? "Meta" : "Control"), o = w(t, "deleteKey", 12, "Backspace"), i = w(t, "panActivationKey", 12, " "), s = w(t, "zoomActivationKey", 28, () => Ci() ? "Meta" : "Control");
  const {
    selectionKeyPressed: a,
    multiselectionKeyPressed: l,
    deleteKeyPressed: u,
    panActivationKeyPressed: c,
    zoomActivationKeyPressed: d,
    selectionRect: f
  } = We();
  function h(m) {
    return m !== null && typeof m == "object";
  }
  function v(m) {
    return h(m) ? m.modifier || [] : [];
  }
  function _(m) {
    return m == null ? "" : h(m) ? m.key : m;
  }
  function x(m, b) {
    return (Array.isArray(m) ? m : [m]).map((C) => {
      const H = _(C);
      return {
        key: H,
        modifier: v(C),
        enabled: H !== null,
        callback: b
      };
    });
  }
  function k() {
    f.set(null), a.set(!1), l.set(!1), u.set(!1), c.set(!1), d.set(!1);
  }
  return Ie(), nt("blur", Vt, k), nt("contextmenu", Vt, k), yt(Vt, (m, b) => Ge == null ? void 0 : Ge(m, b), () => ({
    trigger: x(n(), () => a.set(!0)),
    type: "keydown"
  })), yt(Vt, (m, b) => Ge == null ? void 0 : Ge(m, b), () => ({
    trigger: x(n(), () => a.set(!1)),
    type: "keyup"
  })), yt(Vt, (m, b) => Ge == null ? void 0 : Ge(m, b), () => ({
    trigger: x(r(), () => l.set(!0)),
    type: "keydown"
  })), yt(Vt, (m, b) => Ge == null ? void 0 : Ge(m, b), () => ({
    trigger: x(r(), () => l.set(!1)),
    type: "keyup"
  })), yt(Vt, (m, b) => Ge == null ? void 0 : Ge(m, b), () => ({
    trigger: x(o(), (m) => {
      !(m.originalEvent.ctrlKey || m.originalEvent.metaKey || m.originalEvent.shiftKey) && !M0(m.originalEvent) && u.set(!0);
    }),
    type: "keydown"
  })), yt(Vt, (m, b) => Ge == null ? void 0 : Ge(m, b), () => ({
    trigger: x(o(), () => u.set(!1)),
    type: "keyup"
  })), yt(Vt, (m, b) => Ge == null ? void 0 : Ge(m, b), () => ({
    trigger: x(i(), () => c.set(!0)),
    type: "keydown"
  })), yt(Vt, (m, b) => Ge == null ? void 0 : Ge(m, b), () => ({
    trigger: x(i(), () => c.set(!1)),
    type: "keyup"
  })), yt(Vt, (m, b) => Ge == null ? void 0 : Ge(m, b), () => ({
    trigger: x(s(), () => d.set(!0)),
    type: "keydown"
  })), yt(Vt, (m, b) => Ge == null ? void 0 : Ge(m, b), () => ({
    trigger: x(s(), () => d.set(!1)),
    type: "keyup"
  })), fe({
    get selectionKey() {
      return n();
    },
    set selectionKey(m) {
      n(m), y();
    },
    get multiSelectionKey() {
      return r();
    },
    set multiSelectionKey(m) {
      r(m), y();
    },
    get deleteKey() {
      return o();
    },
    set deleteKey(m) {
      o(m), y();
    },
    get panActivationKey() {
      return i();
    },
    set panActivationKey(m) {
      i(m), y();
    },
    get zoomActivationKey() {
      return s();
    },
    set zoomActivationKey(m) {
      s(m), y();
    }
  });
}
ue(
  td,
  {
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
var Jp = /* @__PURE__ */ ke('<path fill="none" class="svelte-flow__connection-path"></path>'), Qp = /* @__PURE__ */ ke('<svg class="svelte-flow__connectionline"><g><!><!></g></svg>');
function nd(e, t) {
  de(t, !1);
  const [n, r] = rt(), o = () => ne(h, "$connection", n), i = () => ne(v, "$connectionLineType", n), s = () => ne(d, "$width", n), a = () => ne(f, "$height", n);
  let l = w(t, "containerStyle", 12, ""), u = w(t, "style", 12, ""), c = w(t, "isCustomComponent", 12, !1);
  const {
    width: d,
    height: f,
    connection: h,
    connectionLineType: v
  } = We();
  let _ = /* @__PURE__ */ se(null);
  he(
    () => (o(), ee(c()), i(), g(_), Rs),
    () => {
      if (o().inProgress && !c()) {
        const { from: p, to: C, fromPosition: H, toPosition: S } = o(), D = {
          sourceX: p.x,
          sourceY: p.y,
          sourcePosition: H,
          targetX: C.x,
          targetY: C.y,
          targetPosition: S
        };
        switch (i()) {
          case Er.Bezier:
            ((L) => J(_, L[0]))(wc(D));
            break;
          case Er.Step:
            ((L) => J(_, L[0]))(ki({ ...D, borderRadius: 0 }));
            break;
          case Er.SmoothStep:
            ((L) => J(_, L[0]))(ki(D));
            break;
          default:
            ((L) => J(_, L[0]))(Rs(D));
        }
      }
    }
  ), mt(), Ie();
  var x = et(), k = we(x);
  {
    var m = (p) => {
      var C = Qp(), H = F(C), S = F(H);
      wt(S, t, "connectionLine", {});
      var D = B(S);
      {
        var L = (A) => {
          var I = Jp();
          $e(() => {
            be(I, "d", g(_)), ft(I, u());
          }), V(A, I);
        };
        pe(D, (A) => {
          c() || A(L);
        });
      }
      Y(H), Y(C), $e(
        (A) => {
          be(C, "width", s()), be(C, "height", a()), ft(C, l()), _t(H, 0, A);
        },
        [
          () => gn(Mt([
            "svelte-flow__connection",
            b0(o().isValid)
          ]))
        ],
        xe
      ), V(p, C);
    };
    pe(k, (p) => {
      o().inProgress && p(m);
    });
  }
  V(e, x);
  var b = fe({
    get containerStyle() {
      return l();
    },
    set containerStyle(p) {
      l(p), y();
    },
    get style() {
      return u();
    },
    set style(p) {
      u(p), y();
    },
    get isCustomComponent() {
      return c();
    },
    set isCustomComponent(p) {
      c(p), y();
    }
  });
  return r(), b;
}
ue(
  nd,
  {
    containerStyle: {},
    style: {},
    isCustomComponent: {}
  },
  ["connectionLine"],
  [],
  !0
);
var e2 = /* @__PURE__ */ ie("<div><!></div>");
function zo(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = at(n, ["position", "style", "class"]);
  de(t, !1);
  const [o, i] = rt(), s = () => ne(d, "$selectionRectMode", o), a = /* @__PURE__ */ se();
  let l = w(t, "position", 12, "top-right"), u = w(t, "style", 12, void 0), c = w(t, "class", 12, void 0);
  const { selectionRectMode: d } = We();
  he(() => ee(l()), () => {
    J(a, `${l()}`.split("-"));
  }), mt(), Ie();
  var f = e2();
  let h;
  var v = F(f);
  wt(v, t, "default", {}), Y(f), $e(
    (x) => h = Qt(f, h, {
      class: x,
      style: u(),
      ...r,
      [or]: {
        "pointer-events": s() ? "none" : ""
      }
    }),
    [
      () => Mt([
        "svelte-flow__panel",
        c(),
        ...g(a)
      ])
    ],
    xe
  ), V(e, f);
  var _ = fe({
    get position() {
      return l();
    },
    set position(x) {
      l(x), y();
    },
    get style() {
      return u();
    },
    set style(x) {
      u(x), y();
    },
    get class() {
      return c();
    },
    set class(x) {
      c(x), y();
    }
  });
  return i(), _;
}
ue(zo, { position: {}, style: {}, class: {} }, ["default"], [], !0);
var t2 = /* @__PURE__ */ ie('<a href="https://svelteflow.dev" target="_blank" rel="noopener noreferrer" aria-label="Svelte Flow attribution">Svelte Flow</a>');
function rd(e, t) {
  de(t, !1);
  let n = w(t, "proOptions", 12, void 0), r = w(t, "position", 12, "bottom-right");
  Ie();
  var o = et(), i = we(o);
  {
    var s = (a) => {
      zo(a, {
        get position() {
          return r();
        },
        class: "svelte-flow__attribution",
        "data-message": "Feel free to remove the attribution or check out how you could support us: https://svelteflow.dev/support-us",
        children: (l, u) => {
          var c = t2();
          V(l, c);
        },
        $$slots: { default: !0 }
      });
    };
    pe(i, (a) => {
      var l;
      (l = n()) != null && l.hideAttribution || a(s);
    });
  }
  return V(e, o), fe({
    get proOptions() {
      return n();
    },
    set proOptions(a) {
      n(a), y();
    },
    get position() {
      return r();
    },
    set position(a) {
      r(a), y();
    }
  });
}
ue(rd, { proOptions: {}, position: {} }, [], [], !0);
function zl(e, { nodeTypes: t, edgeTypes: n, minZoom: r, maxZoom: o, translateExtent: i, paneClickDistance: s }) {
  t !== void 0 && e.setNodeTypes(t), n !== void 0 && e.setEdgeTypes(n), r !== void 0 && e.setMinZoom(r), o !== void 0 && e.setMaxZoom(o), i !== void 0 && e.setTranslateExtent(i), s !== void 0 && e.setPaneClickDistance(s);
}
const n2 = (e) => Object.keys(e);
function Rl(e, t) {
  n2(t).forEach((n) => {
    const r = t[n];
    r !== void 0 && e[n].set(r);
  });
}
function r2() {
  return typeof window > "u" || !window.matchMedia ? null : window.matchMedia("(prefers-color-scheme: dark)");
}
function o2(e = "light") {
  return Wt("light", (n) => {
    if (e !== "system") {
      n(e);
      return;
    }
    const r = r2(), o = () => n(r != null && r.matches ? "dark" : "light");
    return n(r != null && r.matches ? "dark" : "light"), r == null || r.addEventListener("change", o), () => {
      r == null || r.removeEventListener("change", o);
    };
  });
}
var i2 = /* @__PURE__ */ ie('<!> <!> <div class="svelte-flow__edgelabel-renderer"></div> <div class="svelte-flow__viewport-portal"></div> <!> <!>', 1), s2 = /* @__PURE__ */ ie("<!> <!>", 1), a2 = /* @__PURE__ */ ie("<div><!> <!> <!> <!></div>");
const l2 = {
  hash: "svelte-12wlba6",
  code: ".svelte-flow.svelte-12wlba6 {width:100%;height:100%;overflow:hidden;position:relative;z-index:0;background-color:var(--background-color, var(--background-color-default));}:root {--background-color-default: #fff;--background-pattern-color-default: #ddd;--minimap-mask-color-default: rgb(240, 240, 240, 0.6);--minimap-mask-stroke-color-default: none;--minimap-mask-stroke-width-default: 1;--controls-button-background-color-default: #fefefe;--controls-button-background-color-hover-default: #f4f4f4;--controls-button-color-default: inherit;--controls-button-color-hover-default: inherit;--controls-button-border-color-default: #eee;}"
};
function od(e, t) {
  const n = E1(t), r = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), o = at(r, [
    "id",
    "nodes",
    "edges",
    "fitView",
    "fitViewOptions",
    "minZoom",
    "maxZoom",
    "initialViewport",
    "viewport",
    "nodeTypes",
    "edgeTypes",
    "selectionKey",
    "selectionMode",
    "panActivationKey",
    "multiSelectionKey",
    "zoomActivationKey",
    "nodesDraggable",
    "nodesConnectable",
    "nodeDragThreshold",
    "elementsSelectable",
    "snapGrid",
    "deleteKey",
    "connectionRadius",
    "connectionLineType",
    "connectionMode",
    "connectionLineStyle",
    "connectionLineContainerStyle",
    "onMoveStart",
    "onMove",
    "onMoveEnd",
    "isValidConnection",
    "translateExtent",
    "nodeExtent",
    "onlyRenderVisibleElements",
    "panOnScrollMode",
    "preventScrolling",
    "zoomOnScroll",
    "zoomOnDoubleClick",
    "zoomOnPinch",
    "panOnScroll",
    "panOnDrag",
    "selectionOnDrag",
    "autoPanOnConnect",
    "autoPanOnNodeDrag",
    "onerror",
    "ondelete",
    "onedgecreate",
    "attributionPosition",
    "proOptions",
    "defaultEdgeOptions",
    "width",
    "height",
    "colorMode",
    "onconnect",
    "onconnectstart",
    "onconnectend",
    "onbeforedelete",
    "oninit",
    "nodeOrigin",
    "paneClickDistance",
    "nodeClickDistance",
    "defaultMarkerColor",
    "style",
    "class"
  ]);
  de(t, !1), tt(e, l2);
  const [i, s] = rt(), a = () => ne(b(), "$viewport", i), l = () => ne(ns, "$initialized", i), u = () => ne(g(c), "$colorModeClass", i), c = /* @__PURE__ */ se();
  let d = w(t, "id", 12, "1"), f = w(t, "nodes", 12), h = w(t, "edges", 12), v = w(t, "fitView", 12, void 0), _ = w(t, "fitViewOptions", 12, void 0), x = w(t, "minZoom", 12, void 0), k = w(t, "maxZoom", 12, void 0), m = w(t, "initialViewport", 12, void 0), b = w(t, "viewport", 12, void 0), p = w(t, "nodeTypes", 12, void 0), C = w(t, "edgeTypes", 12, void 0), H = w(t, "selectionKey", 12, void 0), S = w(t, "selectionMode", 12, void 0), D = w(t, "panActivationKey", 12, void 0), L = w(t, "multiSelectionKey", 12, void 0), A = w(t, "zoomActivationKey", 12, void 0), I = w(t, "nodesDraggable", 12, void 0), O = w(t, "nodesConnectable", 12, void 0), R = w(t, "nodeDragThreshold", 12, void 0), E = w(t, "elementsSelectable", 12, void 0), N = w(t, "snapGrid", 12, void 0), $ = w(t, "deleteKey", 12, void 0), T = w(t, "connectionRadius", 12, void 0), P = w(t, "connectionLineType", 12, void 0), M = w(t, "connectionMode", 28, () => fr.Strict), z = w(t, "connectionLineStyle", 12, ""), q = w(t, "connectionLineContainerStyle", 12, ""), X = w(t, "onMoveStart", 12, void 0), U = w(t, "onMove", 12, void 0), G = w(t, "onMoveEnd", 12, void 0), W = w(t, "isValidConnection", 12, void 0), le = w(t, "translateExtent", 12, void 0), ye = w(t, "nodeExtent", 12, void 0), ge = w(t, "onlyRenderVisibleElements", 12, void 0), oe = w(t, "panOnScrollMode", 28, () => Gn.Free), Te = w(t, "preventScrolling", 12, !0), Q = w(t, "zoomOnScroll", 12, !0), re = w(t, "zoomOnDoubleClick", 12, !0), Ee = w(t, "zoomOnPinch", 12, !0), _e = w(t, "panOnScroll", 12, !1), me = w(t, "panOnDrag", 12, !0), j = w(t, "selectionOnDrag", 12, void 0), Pe = w(t, "autoPanOnConnect", 12, !0), Oe = w(t, "autoPanOnNodeDrag", 12, !0), Le = w(t, "onerror", 12, void 0), ae = w(t, "ondelete", 12, void 0), ve = w(t, "onedgecreate", 12, void 0), Me = w(t, "attributionPosition", 12, void 0), Se = w(t, "proOptions", 12, void 0), Ke = w(t, "defaultEdgeOptions", 12, void 0), ut = w(t, "width", 12, void 0), te = w(t, "height", 12, void 0), Ze = w(t, "colorMode", 12, "light"), ce = w(t, "onconnect", 12, void 0), nn = w(t, "onconnectstart", 12, void 0), rn = w(t, "onconnectend", 12, void 0), pn = w(t, "onbeforedelete", 12, void 0), Ve = w(t, "oninit", 12, void 0), ot = w(t, "nodeOrigin", 12, void 0), Be = w(t, "paneClickDistance", 12, 0), ze = w(t, "nodeClickDistance", 12, 0), it = w(t, "defaultMarkerColor", 12, "#b1b1b7"), on = w(t, "style", 12, void 0), Xt = w(t, "class", 12, void 0), Qr = /* @__PURE__ */ se(), bt = /* @__PURE__ */ se(), Ht = /* @__PURE__ */ se();
  const wr = a() || m(), st = s1(Ui) ? We() : Mp({
    nodes: K(f()),
    edges: K(h()),
    width: ut(),
    height: te(),
    fitView: v(),
    nodeOrigin: ot(),
    nodeExtent: ye()
  });
  tn(() => (st.width.set(g(bt)), st.height.set(g(Ht)), st.domNode.set(g(Qr)), st.syncNodeStores(f()), st.syncEdgeStores(h()), st.syncViewport(b()), v() !== void 0 && st.fitViewOnInit.set(v()), _() && st.fitViewOptions.set(_()), zl(st, {
    nodeTypes: p(),
    edgeTypes: C(),
    minZoom: x(),
    maxZoom: k(),
    translateExtent: le(),
    paneClickDistance: Be()
  }), () => {
    st.reset();
  }));
  const { initialized: ns } = st;
  let eo = /* @__PURE__ */ se(!1);
  he(
    () => (g(bt), g(Ht)),
    () => {
      g(bt) !== void 0 && g(Ht) !== void 0 && (st.width.set(g(bt)), st.height.set(g(Ht)));
    }
  ), he(
    () => (g(eo), l(), ee(Ve())),
    () => {
      var Z;
      !g(eo) && l() && ((Z = Ve()) == null || Z(), J(eo, !0));
    }
  ), he(
    () => (ee(d()), ee(P()), ee(T()), ee(S()), ee(N()), ee(it()), ee(I()), ee(O()), ee(E()), ee(ge()), ee(W()), ee(Pe()), ee(Oe()), ee(Le()), ee(ae()), ee(ve()), ee(M()), ee(R()), ee(ce()), ee(nn()), ee(rn()), ee(pn()), ee(ot()), Rl),
    () => {
      const Z = {
        flowId: d(),
        connectionLineType: P(),
        connectionRadius: T(),
        selectionMode: S(),
        snapGrid: N(),
        defaultMarkerColor: it(),
        nodesDraggable: I(),
        nodesConnectable: O(),
        elementsSelectable: E(),
        onlyRenderVisibleElements: ge(),
        isValidConnection: W(),
        autoPanOnConnect: Pe(),
        autoPanOnNodeDrag: Oe(),
        onerror: Le(),
        ondelete: ae(),
        onedgecreate: ve(),
        connectionMode: M(),
        nodeDragThreshold: R(),
        onconnect: ce(),
        onconnectstart: nn(),
        onconnectend: rn(),
        onbeforedelete: pn(),
        nodeOrigin: ot()
      };
      Rl(st, Z);
    }
  ), he(
    () => (ee(p()), ee(C()), ee(x()), ee(k()), ee(le()), ee(Be())),
    () => {
      zl(st, {
        nodeTypes: p(),
        edgeTypes: C(),
        minZoom: x(),
        maxZoom: k(),
        translateExtent: le(),
        paneClickDistance: Be()
      });
    }
  ), he(
    () => ee(Ze()),
    () => {
      O1(J(c, o2(Ze())), "$colorModeClass", i);
    }
  ), mt(), Ie();
  var It = a2();
  let Yo;
  var Zo = F(It);
  td(Zo, {
    get selectionKey() {
      return H();
    },
    get deleteKey() {
      return $();
    },
    get panActivationKey() {
      return D();
    },
    get multiSelectionKey() {
      return L();
    },
    get zoomActivationKey() {
      return A();
    }
  });
  var Fo = B(Zo, 2);
  const rs = /* @__PURE__ */ xe(() => oe() === void 0 ? Gn.Free : oe()), Ud = /* @__PURE__ */ xe(() => Te() === void 0 ? !0 : Te()), Jd = /* @__PURE__ */ xe(() => Q() === void 0 ? !0 : Q()), Qd = /* @__PURE__ */ xe(() => re() === void 0 ? !0 : re()), ef = /* @__PURE__ */ xe(() => Ee() === void 0 ? !0 : Ee()), tf = /* @__PURE__ */ xe(() => _e() === void 0 ? !1 : _e()), nf = /* @__PURE__ */ xe(() => me() === void 0 ? !0 : me()), rf = /* @__PURE__ */ xe(() => Be() === void 0 ? 0 : Be());
  Yc(Fo, {
    initialViewport: wr,
    get onMoveStart() {
      return X();
    },
    get onMove() {
      return U();
    },
    get onMoveEnd() {
      return G();
    },
    get panOnScrollMode() {
      return g(rs);
    },
    get preventScrolling() {
      return g(Ud);
    },
    get zoomOnScroll() {
      return g(Jd);
    },
    get zoomOnDoubleClick() {
      return g(Qd);
    },
    get zoomOnPinch() {
      return g(ef);
    },
    get panOnScroll() {
      return g(tf);
    },
    get panOnDrag() {
      return g(nf);
    },
    get paneClickDistance() {
      return g(rf);
    },
    children: (Z, Iw) => {
      const af = /* @__PURE__ */ xe(() => me() === void 0 ? !0 : me());
      Zc(Z, {
        get panOnDrag() {
          return g(af);
        },
        get selectionOnDrag() {
          return j();
        },
        $$events: {
          paneclick(to) {
            Fe.call(this, t, to);
          },
          panecontextmenu(to) {
            Fe.call(this, t, to);
          }
        },
        children: (to, zw) => {
          var Ma = s2(), Ha = we(Ma);
          Fc(Ha, {
            children: (uf, Rw) => {
              var Da = i2(), Va = we(Da);
              Jc(Va, {
                get defaultEdgeOptions() {
                  return Ke();
                },
                $$events: {
                  edgeclick(qe) {
                    Fe.call(this, t, qe);
                  },
                  edgecontextmenu(qe) {
                    Fe.call(this, t, qe);
                  },
                  edgemouseenter(qe) {
                    Fe.call(this, t, qe);
                  },
                  edgemouseleave(qe) {
                    Fe.call(this, t, qe);
                  }
                }
              });
              var Aa = B(Va, 2);
              nd(Aa, {
                get containerStyle() {
                  return q();
                },
                get style() {
                  return z();
                },
                isCustomComponent: n.connectionLine,
                $$slots: {
                  connectionLine: (qe, Bw) => {
                    var La = et(), df = we(La);
                    wt(df, t, "connectionLine", {}), V(qe, La);
                  }
                }
              });
              var Oa = B(Aa, 6);
              Wc(Oa, {
                get nodeClickDistance() {
                  return ze();
                },
                $$events: {
                  nodeclick(qe) {
                    Fe.call(this, t, qe);
                  },
                  nodemouseenter(qe) {
                    Fe.call(this, t, qe);
                  },
                  nodemousemove(qe) {
                    Fe.call(this, t, qe);
                  },
                  nodemouseleave(qe) {
                    Fe.call(this, t, qe);
                  },
                  nodedragstart(qe) {
                    Fe.call(this, t, qe);
                  },
                  nodedrag(qe) {
                    Fe.call(this, t, qe);
                  },
                  nodedragstop(qe) {
                    Fe.call(this, t, qe);
                  },
                  nodecontextmenu(qe) {
                    Fe.call(this, t, qe);
                  }
                }
              });
              var cf = B(Oa, 2);
              ed(cf, {
                $$events: {
                  selectionclick(qe) {
                    Fe.call(this, t, qe);
                  },
                  selectioncontextmenu(qe) {
                    Fe.call(this, t, qe);
                  },
                  nodedragstart(qe) {
                    Fe.call(this, t, qe);
                  },
                  nodedrag(qe) {
                    Fe.call(this, t, qe);
                  },
                  nodedragstop(qe) {
                    Fe.call(this, t, qe);
                  }
                }
              }), V(uf, Da);
            },
            $$slots: { default: !0 }
          });
          var lf = B(Ha, 2);
          Qc(lf, {}), V(to, Ma);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
  var Ta = B(Fo, 2);
  rd(Ta, {
    get proOptions() {
      return Se();
    },
    get position() {
      return Me();
    }
  });
  var of = B(Ta, 2);
  wt(of, t, "default", {}), Y(It), kn(It, (Z) => J(Qr, Z), () => g(Qr)), $e(
    (Z) => Yo = Qt(
      It,
      Yo,
      {
        style: on(),
        class: Z,
        "data-testid": "svelte-flow__wrapper",
        ...o,
        role: "application"
      },
      "svelte-12wlba6"
    ),
    [
      () => Mt([
        "svelte-flow",
        Xt(),
        u()
      ])
    ],
    xe
  ), Ja(It, "clientWidth", (Z) => J(bt, Z)), Ja(It, "clientHeight", (Z) => J(Ht, Z)), nt("dragover", It, function(Z) {
    Fe.call(this, t, Z);
  }), nt("drop", It, function(Z) {
    Fe.call(this, t, Z);
  }), V(e, It);
  var sf = fe({
    get id() {
      return d();
    },
    set id(Z) {
      d(Z), y();
    },
    get nodes() {
      return f();
    },
    set nodes(Z) {
      f(Z), y();
    },
    get edges() {
      return h();
    },
    set edges(Z) {
      h(Z), y();
    },
    get fitView() {
      return v();
    },
    set fitView(Z) {
      v(Z), y();
    },
    get fitViewOptions() {
      return _();
    },
    set fitViewOptions(Z) {
      _(Z), y();
    },
    get minZoom() {
      return x();
    },
    set minZoom(Z) {
      x(Z), y();
    },
    get maxZoom() {
      return k();
    },
    set maxZoom(Z) {
      k(Z), y();
    },
    get initialViewport() {
      return m();
    },
    set initialViewport(Z) {
      m(Z), y();
    },
    get viewport() {
      return b();
    },
    set viewport(Z) {
      b(Z), y();
    },
    get nodeTypes() {
      return p();
    },
    set nodeTypes(Z) {
      p(Z), y();
    },
    get edgeTypes() {
      return C();
    },
    set edgeTypes(Z) {
      C(Z), y();
    },
    get selectionKey() {
      return H();
    },
    set selectionKey(Z) {
      H(Z), y();
    },
    get selectionMode() {
      return S();
    },
    set selectionMode(Z) {
      S(Z), y();
    },
    get panActivationKey() {
      return D();
    },
    set panActivationKey(Z) {
      D(Z), y();
    },
    get multiSelectionKey() {
      return L();
    },
    set multiSelectionKey(Z) {
      L(Z), y();
    },
    get zoomActivationKey() {
      return A();
    },
    set zoomActivationKey(Z) {
      A(Z), y();
    },
    get nodesDraggable() {
      return I();
    },
    set nodesDraggable(Z) {
      I(Z), y();
    },
    get nodesConnectable() {
      return O();
    },
    set nodesConnectable(Z) {
      O(Z), y();
    },
    get nodeDragThreshold() {
      return R();
    },
    set nodeDragThreshold(Z) {
      R(Z), y();
    },
    get elementsSelectable() {
      return E();
    },
    set elementsSelectable(Z) {
      E(Z), y();
    },
    get snapGrid() {
      return N();
    },
    set snapGrid(Z) {
      N(Z), y();
    },
    get deleteKey() {
      return $();
    },
    set deleteKey(Z) {
      $(Z), y();
    },
    get connectionRadius() {
      return T();
    },
    set connectionRadius(Z) {
      T(Z), y();
    },
    get connectionLineType() {
      return P();
    },
    set connectionLineType(Z) {
      P(Z), y();
    },
    get connectionMode() {
      return M();
    },
    set connectionMode(Z) {
      M(Z), y();
    },
    get connectionLineStyle() {
      return z();
    },
    set connectionLineStyle(Z) {
      z(Z), y();
    },
    get connectionLineContainerStyle() {
      return q();
    },
    set connectionLineContainerStyle(Z) {
      q(Z), y();
    },
    get onMoveStart() {
      return X();
    },
    set onMoveStart(Z) {
      X(Z), y();
    },
    get onMove() {
      return U();
    },
    set onMove(Z) {
      U(Z), y();
    },
    get onMoveEnd() {
      return G();
    },
    set onMoveEnd(Z) {
      G(Z), y();
    },
    get isValidConnection() {
      return W();
    },
    set isValidConnection(Z) {
      W(Z), y();
    },
    get translateExtent() {
      return le();
    },
    set translateExtent(Z) {
      le(Z), y();
    },
    get nodeExtent() {
      return ye();
    },
    set nodeExtent(Z) {
      ye(Z), y();
    },
    get onlyRenderVisibleElements() {
      return ge();
    },
    set onlyRenderVisibleElements(Z) {
      ge(Z), y();
    },
    get panOnScrollMode() {
      return oe();
    },
    set panOnScrollMode(Z) {
      oe(Z), y();
    },
    get preventScrolling() {
      return Te();
    },
    set preventScrolling(Z) {
      Te(Z), y();
    },
    get zoomOnScroll() {
      return Q();
    },
    set zoomOnScroll(Z) {
      Q(Z), y();
    },
    get zoomOnDoubleClick() {
      return re();
    },
    set zoomOnDoubleClick(Z) {
      re(Z), y();
    },
    get zoomOnPinch() {
      return Ee();
    },
    set zoomOnPinch(Z) {
      Ee(Z), y();
    },
    get panOnScroll() {
      return _e();
    },
    set panOnScroll(Z) {
      _e(Z), y();
    },
    get panOnDrag() {
      return me();
    },
    set panOnDrag(Z) {
      me(Z), y();
    },
    get selectionOnDrag() {
      return j();
    },
    set selectionOnDrag(Z) {
      j(Z), y();
    },
    get autoPanOnConnect() {
      return Pe();
    },
    set autoPanOnConnect(Z) {
      Pe(Z), y();
    },
    get autoPanOnNodeDrag() {
      return Oe();
    },
    set autoPanOnNodeDrag(Z) {
      Oe(Z), y();
    },
    get onerror() {
      return Le();
    },
    set onerror(Z) {
      Le(Z), y();
    },
    get ondelete() {
      return ae();
    },
    set ondelete(Z) {
      ae(Z), y();
    },
    get onedgecreate() {
      return ve();
    },
    set onedgecreate(Z) {
      ve(Z), y();
    },
    get attributionPosition() {
      return Me();
    },
    set attributionPosition(Z) {
      Me(Z), y();
    },
    get proOptions() {
      return Se();
    },
    set proOptions(Z) {
      Se(Z), y();
    },
    get defaultEdgeOptions() {
      return Ke();
    },
    set defaultEdgeOptions(Z) {
      Ke(Z), y();
    },
    get width() {
      return ut();
    },
    set width(Z) {
      ut(Z), y();
    },
    get height() {
      return te();
    },
    set height(Z) {
      te(Z), y();
    },
    get colorMode() {
      return Ze();
    },
    set colorMode(Z) {
      Ze(Z), y();
    },
    get onconnect() {
      return ce();
    },
    set onconnect(Z) {
      ce(Z), y();
    },
    get onconnectstart() {
      return nn();
    },
    set onconnectstart(Z) {
      nn(Z), y();
    },
    get onconnectend() {
      return rn();
    },
    set onconnectend(Z) {
      rn(Z), y();
    },
    get onbeforedelete() {
      return pn();
    },
    set onbeforedelete(Z) {
      pn(Z), y();
    },
    get oninit() {
      return Ve();
    },
    set oninit(Z) {
      Ve(Z), y();
    },
    get nodeOrigin() {
      return ot();
    },
    set nodeOrigin(Z) {
      ot(Z), y();
    },
    get paneClickDistance() {
      return Be();
    },
    set paneClickDistance(Z) {
      Be(Z), y();
    },
    get nodeClickDistance() {
      return ze();
    },
    set nodeClickDistance(Z) {
      ze(Z), y();
    },
    get defaultMarkerColor() {
      return it();
    },
    set defaultMarkerColor(Z) {
      it(Z), y();
    },
    get style() {
      return on();
    },
    set style(Z) {
      on(Z), y();
    },
    get class() {
      return Xt();
    },
    set class(Z) {
      Xt(Z), y();
    }
  });
  return s(), sf;
}
ue(
  od,
  {
    id: {},
    nodes: {},
    edges: {},
    fitView: {},
    fitViewOptions: {},
    minZoom: {},
    maxZoom: {},
    initialViewport: {},
    viewport: {},
    nodeTypes: {},
    edgeTypes: {},
    selectionKey: {},
    selectionMode: {},
    panActivationKey: {},
    multiSelectionKey: {},
    zoomActivationKey: {},
    nodesDraggable: {},
    nodesConnectable: {},
    nodeDragThreshold: {},
    elementsSelectable: {},
    snapGrid: {},
    deleteKey: {},
    connectionRadius: {},
    connectionLineType: {},
    connectionMode: {},
    connectionLineStyle: {},
    connectionLineContainerStyle: {},
    onMoveStart: {},
    onMove: {},
    onMoveEnd: {},
    isValidConnection: {},
    translateExtent: {},
    nodeExtent: {},
    onlyRenderVisibleElements: {},
    panOnScrollMode: {},
    preventScrolling: {},
    zoomOnScroll: {},
    zoomOnDoubleClick: {},
    zoomOnPinch: {},
    panOnScroll: {},
    panOnDrag: {},
    selectionOnDrag: {},
    autoPanOnConnect: {},
    autoPanOnNodeDrag: {},
    onerror: {},
    ondelete: {},
    onedgecreate: {},
    attributionPosition: {},
    proOptions: {},
    defaultEdgeOptions: {},
    width: {},
    height: {},
    colorMode: {},
    onconnect: {},
    onconnectstart: {},
    onconnectend: {},
    onbeforedelete: {},
    oninit: {},
    nodeOrigin: {},
    paneClickDistance: {},
    nodeClickDistance: {},
    defaultMarkerColor: {},
    style: {},
    class: {}
  },
  ["connectionLine", "default"],
  [],
  !0
);
function id(e, t) {
  de(t, !1);
  let n = w(t, "initialNodes", 12, void 0), r = w(t, "initialEdges", 12, void 0), o = w(t, "initialWidth", 12, void 0), i = w(t, "initialHeight", 12, void 0), s = w(t, "fitView", 12, void 0), a = w(t, "nodeOrigin", 12, void 0);
  const l = qc({
    nodes: n(),
    edges: r(),
    width: o(),
    height: i(),
    nodeOrigin: a(),
    fitView: s()
  });
  Ar(Ui, { getStore: () => l }), ua(() => {
    l.reset();
  }), Ie();
  var u = et(), c = we(u);
  return wt(c, t, "default", {}), V(e, u), fe({
    get initialNodes() {
      return n();
    },
    set initialNodes(d) {
      n(d), y();
    },
    get initialEdges() {
      return r();
    },
    set initialEdges(d) {
      r(d), y();
    },
    get initialWidth() {
      return o();
    },
    set initialWidth(d) {
      o(d), y();
    },
    get initialHeight() {
      return i();
    },
    set initialHeight(d) {
      i(d), y();
    },
    get fitView() {
      return s();
    },
    set fitView(d) {
      s(d), y();
    },
    get nodeOrigin() {
      return a();
    },
    set nodeOrigin(d) {
      a(d), y();
    }
  });
}
ue(
  id,
  {
    initialNodes: {},
    initialEdges: {},
    initialWidth: {},
    initialHeight: {},
    fitView: {},
    nodeOrigin: {}
  },
  ["default"],
  [],
  !0
);
var u2 = /* @__PURE__ */ ie("<button><!></button>");
function co(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = at(n, [
    "class",
    "bgColor",
    "bgColorHover",
    "color",
    "colorHover",
    "borderColor"
  ]);
  de(t, !1);
  let o = w(t, "class", 12, void 0), i = w(t, "bgColor", 12, void 0), s = w(t, "bgColorHover", 12, void 0), a = w(t, "color", 12, void 0), l = w(t, "colorHover", 12, void 0), u = w(t, "borderColor", 12, void 0);
  Ie();
  var c = u2();
  let d;
  var f = F(c);
  return wt(f, t, "default", { class: "button-svg" }), Y(c), $e(
    (h) => d = Qt(c, d, {
      type: "button",
      class: h,
      ...r,
      [or]: {
        "--xy-controls-button-background-color-props": i(),
        "--xy-controls-button-background-color-hover-props": s(),
        "--xy-controls-button-color-props": a(),
        "--xy-controls-button-color-hover-props": l(),
        "--xy-controls-button-border-color-props": u()
      }
    }),
    [
      () => Mt([
        "svelte-flow__controls-button",
        o()
      ])
    ],
    xe
  ), nt("click", c, function(h) {
    Fe.call(this, t, h);
  }), V(e, c), fe({
    get class() {
      return o();
    },
    set class(h) {
      o(h), y();
    },
    get bgColor() {
      return i();
    },
    set bgColor(h) {
      i(h), y();
    },
    get bgColorHover() {
      return s();
    },
    set bgColorHover(h) {
      s(h), y();
    },
    get color() {
      return a();
    },
    set color(h) {
      a(h), y();
    },
    get colorHover() {
      return l();
    },
    set colorHover(h) {
      l(h), y();
    },
    get borderColor() {
      return u();
    },
    set borderColor(h) {
      u(h), y();
    }
  });
}
ue(
  co,
  {
    class: {},
    bgColor: {},
    bgColorHover: {},
    color: {},
    colorHover: {},
    borderColor: {}
  },
  ["default"],
  [],
  !0
);
var c2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"></path></svg>');
function sd(e) {
  var t = c2();
  V(e, t);
}
ue(sd, {}, [], [], !0);
var d2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 5"><path d="M0 0h32v4.2H0z"></path></svg>');
function ad(e) {
  var t = d2();
  V(e, t);
}
ue(ad, {}, [], [], !0);
var f2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 30"><path d="M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"></path></svg>');
function ld(e) {
  var t = f2();
  V(e, t);
}
ue(ld, {}, [], [], !0);
var g2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"></path></svg>');
function ud(e) {
  var t = g2();
  V(e, t);
}
ue(ud, {}, [], [], !0);
var h2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 32"><path d="M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"></path></svg>');
function cd(e) {
  var t = h2();
  V(e, t);
}
ue(cd, {}, [], [], !0);
var v2 = /* @__PURE__ */ ie("<!> <!>", 1), p2 = /* @__PURE__ */ ie("<!> <!> <!> <!> <!> <!>", 1);
function dd(e, t) {
  de(t, !1);
  const [n, r] = rt(), o = () => ne(P, "$nodesDraggable", n), i = () => ne(M, "$nodesConnectable", n), s = () => ne(z, "$elementsSelectable", n), a = () => ne(N, "$viewport", n), l = () => ne($, "$minZoom", n), u = () => ne(T, "$maxZoom", n), c = /* @__PURE__ */ se(), d = /* @__PURE__ */ se(), f = /* @__PURE__ */ se(), h = /* @__PURE__ */ se();
  let v = w(t, "position", 12, "bottom-left"), _ = w(t, "showZoom", 12, !0), x = w(t, "showFitView", 12, !0), k = w(t, "showLock", 12, !0), m = w(t, "buttonBgColor", 12, void 0), b = w(t, "buttonBgColorHover", 12, void 0), p = w(t, "buttonColor", 12, void 0), C = w(t, "buttonColorHover", 12, void 0), H = w(t, "buttonBorderColor", 12, void 0), S = w(t, "ariaLabel", 12, void 0), D = w(t, "style", 12, void 0), L = w(t, "orientation", 12, "vertical"), A = w(t, "fitViewOptions", 12, void 0), I = w(t, "class", 12, "");
  const {
    zoomIn: O,
    zoomOut: R,
    fitView: E,
    viewport: N,
    minZoom: $,
    maxZoom: T,
    nodesDraggable: P,
    nodesConnectable: M,
    elementsSelectable: z
  } = We(), q = {
    bgColor: m(),
    bgColorHover: b(),
    color: p(),
    colorHover: C(),
    borderColor: H()
  }, X = () => {
    O();
  }, U = () => {
    R();
  }, G = () => {
    E(A());
  }, W = () => {
    J(c, !g(c)), P.set(g(c)), M.set(g(c)), z.set(g(c));
  };
  he(
    () => (o(), i(), s()),
    () => {
      J(c, o() || i() || s());
    }
  ), he(() => (a(), l()), () => {
    J(d, a().zoom <= l());
  }), he(() => (a(), u()), () => {
    J(f, a().zoom >= u());
  }), he(() => ee(L()), () => {
    J(h, L() === "horizontal" ? "horizontal" : "vertical");
  }), mt(), Ie();
  const le = /* @__PURE__ */ xe(() => Mt([
    "svelte-flow__controls",
    g(h),
    I()
  ])), ye = /* @__PURE__ */ xe(() => S() ?? "Svelte Flow controls");
  zo(e, {
    get class() {
      return g(le);
    },
    get position() {
      return v();
    },
    "data-testid": "svelte-flow__controls",
    get "aria-label"() {
      return g(ye);
    },
    get style() {
      return D();
    },
    children: (oe, Te) => {
      var Q = p2(), re = we(Q);
      wt(re, t, "before", {});
      var Ee = B(re, 2);
      {
        var _e = (ve) => {
          var Me = v2(), Se = we(Me);
          co(Se, lt(
            {
              class: "svelte-flow__controls-zoomin",
              title: "zoom in",
              "aria-label": "zoom in",
              get disabled() {
                return g(f);
              }
            },
            q,
            {
              $$events: { click: X },
              children: (ut, te) => {
                sd(ut);
              },
              $$slots: { default: !0 }
            }
          ));
          var Ke = B(Se, 2);
          co(Ke, lt(
            {
              class: "svelte-flow__controls-zoomout",
              title: "zoom out",
              "aria-label": "zoom out",
              get disabled() {
                return g(d);
              }
            },
            q,
            {
              $$events: { click: U },
              children: (ut, te) => {
                ad(ut);
              },
              $$slots: { default: !0 }
            }
          )), V(ve, Me);
        };
        pe(Ee, (ve) => {
          _() && ve(_e);
        });
      }
      var me = B(Ee, 2);
      {
        var j = (ve) => {
          co(ve, lt(
            {
              class: "svelte-flow__controls-fitview",
              title: "fit view",
              "aria-label": "fit view"
            },
            q,
            {
              $$events: { click: G },
              children: (Me, Se) => {
                ld(Me);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        pe(me, (ve) => {
          x() && ve(j);
        });
      }
      var Pe = B(me, 2);
      {
        var Oe = (ve) => {
          co(ve, lt(
            {
              class: "svelte-flow__controls-interactive",
              title: "toggle interactivity",
              "aria-label": "toggle interactivity"
            },
            q,
            {
              $$events: { click: W },
              children: (Me, Se) => {
                var Ke = et(), ut = we(Ke);
                {
                  var te = (ce) => {
                    cd(ce);
                  }, Ze = (ce) => {
                    ud(ce);
                  };
                  pe(ut, (ce) => {
                    g(c) ? ce(te) : ce(Ze, !1);
                  });
                }
                V(Me, Ke);
              },
              $$slots: { default: !0 }
            }
          ));
        };
        pe(Pe, (ve) => {
          k() && ve(Oe);
        });
      }
      var Le = B(Pe, 2);
      wt(Le, t, "default", {});
      var ae = B(Le, 2);
      wt(ae, t, "after", {}), V(oe, Q);
    },
    $$slots: { default: !0 }
  });
  var ge = fe({
    get position() {
      return v();
    },
    set position(oe) {
      v(oe), y();
    },
    get showZoom() {
      return _();
    },
    set showZoom(oe) {
      _(oe), y();
    },
    get showFitView() {
      return x();
    },
    set showFitView(oe) {
      x(oe), y();
    },
    get showLock() {
      return k();
    },
    set showLock(oe) {
      k(oe), y();
    },
    get buttonBgColor() {
      return m();
    },
    set buttonBgColor(oe) {
      m(oe), y();
    },
    get buttonBgColorHover() {
      return b();
    },
    set buttonBgColorHover(oe) {
      b(oe), y();
    },
    get buttonColor() {
      return p();
    },
    set buttonColor(oe) {
      p(oe), y();
    },
    get buttonColorHover() {
      return C();
    },
    set buttonColorHover(oe) {
      C(oe), y();
    },
    get buttonBorderColor() {
      return H();
    },
    set buttonBorderColor(oe) {
      H(oe), y();
    },
    get ariaLabel() {
      return S();
    },
    set ariaLabel(oe) {
      S(oe), y();
    },
    get style() {
      return D();
    },
    set style(oe) {
      D(oe), y();
    },
    get orientation() {
      return L();
    },
    set orientation(oe) {
      L(oe), y();
    },
    get fitViewOptions() {
      return A();
    },
    set fitViewOptions(oe) {
      A(oe), y();
    },
    get class() {
      return I();
    },
    set class(oe) {
      I(oe), y();
    }
  });
  return r(), ge;
}
ue(
  dd,
  {
    position: {},
    showZoom: {},
    showFitView: {},
    showLock: {},
    buttonBgColor: {},
    buttonBgColorHover: {},
    buttonColor: {},
    buttonColorHover: {},
    buttonBorderColor: {},
    ariaLabel: {},
    style: {},
    orientation: {},
    fitViewOptions: {},
    class: {}
  },
  ["before", "default", "after"],
  [],
  !0
);
var jn;
(function(e) {
  e.Lines = "lines", e.Dots = "dots", e.Cross = "cross";
})(jn || (jn = {}));
var m2 = /* @__PURE__ */ ke("<circle></circle>");
function fd(e, t) {
  de(t, !1);
  let n = w(t, "radius", 12, 5), r = w(t, "class", 12, "");
  Ie();
  var o = m2();
  return $e(
    (i) => {
      be(o, "cx", n()), be(o, "cy", n()), be(o, "r", n()), _t(o, 0, i);
    },
    [
      () => gn(Mt([
        "svelte-flow__background-pattern",
        "dots",
        r()
      ]))
    ],
    xe
  ), V(e, o), fe({
    get radius() {
      return n();
    },
    set radius(i) {
      n(i), y();
    },
    get class() {
      return r();
    },
    set class(i) {
      r(i), y();
    }
  });
}
ue(fd, { radius: {}, class: {} }, [], [], !0);
var y2 = /* @__PURE__ */ ke("<path></path>");
function gd(e, t) {
  de(t, !1);
  let n = w(t, "lineWidth", 12, 1), r = w(t, "dimensions", 12), o = w(t, "variant", 12, void 0), i = w(t, "class", 12, "");
  Ie();
  var s = y2();
  return $e(
    (a) => {
      be(s, "stroke-width", n()), be(s, "d", `M${r()[0] / 2} 0 V${r()[1]} M0 ${r()[1] / 2} H${r()[0]}`), _t(s, 0, a);
    },
    [
      () => gn(Mt([
        "svelte-flow__background-pattern",
        o(),
        i()
      ]))
    ],
    xe
  ), V(e, s), fe({
    get lineWidth() {
      return n();
    },
    set lineWidth(a) {
      n(a), y();
    },
    get dimensions() {
      return r();
    },
    set dimensions(a) {
      r(a), y();
    },
    get variant() {
      return o();
    },
    set variant(a) {
      o(a), y();
    },
    get class() {
      return i();
    },
    set class(a) {
      i(a), y();
    }
  });
}
ue(
  gd,
  {
    lineWidth: {},
    dimensions: {},
    variant: {},
    class: {}
  },
  [],
  [],
  !0
);
const w2 = {
  [jn.Dots]: 1,
  [jn.Lines]: 1,
  [jn.Cross]: 6
};
var _2 = /* @__PURE__ */ ke('<svg data-testid="svelte-flow__background"><pattern patternUnits="userSpaceOnUse"><!></pattern><rect x="0" y="0" width="100%" height="100%"></rect></svg>');
const x2 = {
  hash: "svelte-1r7pe8d",
  code: ".svelte-flow__background.svelte-1r7pe8d {position:absolute;width:100%;height:100%;top:0;left:0;}"
};
function hd(e, t) {
  de(t, !1), tt(e, x2);
  const [n, r] = rt(), o = () => ne(C, "$flowId", n), i = () => ne(p, "$viewport", n), s = /* @__PURE__ */ se(), a = /* @__PURE__ */ se(), l = /* @__PURE__ */ se(), u = /* @__PURE__ */ se(), c = /* @__PURE__ */ se();
  let d = w(t, "id", 12, void 0), f = w(t, "variant", 28, () => jn.Dots), h = w(t, "gap", 12, 20), v = w(t, "size", 12, 1), _ = w(t, "lineWidth", 12, 1), x = w(t, "bgColor", 12, void 0), k = w(t, "patternColor", 12, void 0), m = w(t, "patternClass", 12, void 0), b = w(t, "class", 12, "");
  const { viewport: p, flowId: C } = We(), H = v() || w2[f()], S = f() === jn.Dots, D = f() === jn.Cross, L = Array.isArray(h()) ? h() : [h(), h()];
  he(
    () => (o(), ee(d())),
    () => {
      J(s, `background-pattern-${o()}-${d() ? d() : ""}`);
    }
  ), he(() => i(), () => {
    J(a, [
      L[0] * i().zoom || 1,
      L[1] * i().zoom || 1
    ]);
  }), he(() => i(), () => {
    J(l, H * i().zoom);
  }), he(() => (g(l), g(a)), () => {
    J(u, D ? [g(l), g(l)] : g(a));
  }), he(
    () => (g(l), g(u)),
    () => {
      J(c, S ? [
        g(l) / 2,
        g(l) / 2
      ] : [
        g(u)[0] / 2,
        g(u)[1] / 2
      ]);
    }
  ), mt(), Ie();
  var A = _2();
  let I;
  var O = F(A), R = F(O);
  {
    var E = (P) => {
      const M = /* @__PURE__ */ xe(() => g(l) / 2);
      fd(P, {
        get radius() {
          return g(M);
        },
        get class() {
          return m();
        }
      });
    }, N = (P) => {
      gd(P, {
        get dimensions() {
          return g(u);
        },
        get variant() {
          return f();
        },
        get lineWidth() {
          return _();
        },
        get class() {
          return m();
        }
      });
    };
    pe(R, (P) => {
      S ? P(E) : P(N, !1);
    });
  }
  Y(O);
  var $ = B(O);
  Y(A), $e(
    (P) => {
      _t(A, 0, P, "svelte-1r7pe8d"), I = ft(A, "", I, {
        "--xy-background-color-props": x(),
        "--xy-background-pattern-color-props": k()
      }), be(O, "id", g(s)), be(O, "x", i().x % g(a)[0]), be(O, "y", i().y % g(a)[1]), be(O, "width", g(a)[0]), be(O, "height", g(a)[1]), be(O, "patternTransform", `translate(-${g(c)[0]},-${g(c)[1]})`), be($, "fill", `url(#${g(s)})`);
    },
    [
      () => gn(Mt(["svelte-flow__background", b()]))
    ],
    xe
  ), V(e, A);
  var T = fe({
    get id() {
      return d();
    },
    set id(P) {
      d(P), y();
    },
    get variant() {
      return f();
    },
    set variant(P) {
      f(P), y();
    },
    get gap() {
      return h();
    },
    set gap(P) {
      h(P), y();
    },
    get size() {
      return v();
    },
    set size(P) {
      v(P), y();
    },
    get lineWidth() {
      return _();
    },
    set lineWidth(P) {
      _(P), y();
    },
    get bgColor() {
      return x();
    },
    set bgColor(P) {
      x(P), y();
    },
    get patternColor() {
      return k();
    },
    set patternColor(P) {
      k(P), y();
    },
    get patternClass() {
      return m();
    },
    set patternClass(P) {
      m(P), y();
    },
    get class() {
      return b();
    },
    set class(P) {
      b(P), y();
    }
  });
  return r(), T;
}
ue(
  hd,
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
var b2 = /* @__PURE__ */ ke("<rect></rect>");
function vd(e, t) {
  de(t, !1);
  let n = w(t, "x", 12), r = w(t, "y", 12), o = w(t, "width", 12, 0), i = w(t, "height", 12, 0), s = w(t, "borderRadius", 12, 5), a = w(t, "color", 12, void 0), l = w(t, "shapeRendering", 12), u = w(t, "strokeColor", 12, void 0), c = w(t, "strokeWidth", 12, 2), d = w(t, "selected", 12, !1), f = w(t, "class", 12, "");
  Ie();
  var h = b2();
  let v;
  return $e(
    (_, x) => {
      v = _t(h, 0, _, null, v, x), be(h, "x", n()), be(h, "y", r()), be(h, "rx", s()), be(h, "ry", s()), be(h, "width", o()), be(h, "height", i()), ft(h, `${a() ? `fill: ${a()};` : ""}${u() ? `stroke: ${u()};` : ""}${c() ? `stroke-width: ${c()};` : ""}`), be(h, "shape-rendering", l());
    },
    [
      () => gn(Mt(["svelte-flow__minimap-node", f()])),
      () => ({ selected: d() })
    ],
    xe
  ), V(e, h), fe({
    get x() {
      return n();
    },
    set x(_) {
      n(_), y();
    },
    get y() {
      return r();
    },
    set y(_) {
      r(_), y();
    },
    get width() {
      return o();
    },
    set width(_) {
      o(_), y();
    },
    get height() {
      return i();
    },
    set height(_) {
      i(_), y();
    },
    get borderRadius() {
      return s();
    },
    set borderRadius(_) {
      s(_), y();
    },
    get color() {
      return a();
    },
    set color(_) {
      a(_), y();
    },
    get shapeRendering() {
      return l();
    },
    set shapeRendering(_) {
      l(_), y();
    },
    get strokeColor() {
      return u();
    },
    set strokeColor(_) {
      u(_), y();
    },
    get strokeWidth() {
      return c();
    },
    set strokeWidth(_) {
      c(_), y();
    },
    get selected() {
      return d();
    },
    set selected(_) {
      d(_), y();
    },
    get class() {
      return f();
    },
    set class(_) {
      f(_), y();
    }
  });
}
ue(
  vd,
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
function ms(e, t) {
  const n = sp({
    domNode: e,
    panZoom: t.panZoom,
    getTransform: () => {
      const o = K(t.viewport);
      return [o.x, o.y, o.zoom];
    },
    getViewScale: t.getViewScale
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
const ys = (e) => e instanceof Function ? e : () => e;
var C2 = /* @__PURE__ */ ke("<title> </title>"), k2 = /* @__PURE__ */ ke('<svg class="svelte-flow__minimap-svg" role="img"><!><!><path class="svelte-flow__minimap-mask" fill-rule="evenodd" pointer-events="none"></path></svg>');
function pd(e, t) {
  de(t, !1);
  const [n, r] = rt(), o = () => ne(me, "$flowId", n), i = () => ne(re, "$viewport", n), s = () => ne(Ee, "$containerWidth", n), a = () => ne(_e, "$containerHeight", n), l = () => ne(Q, "$nodeLookup", n), u = () => ne(Te, "$nodes", n), c = () => ne(j, "$panZoom", n), d = () => ne(Pe, "$translateExtent", n), f = /* @__PURE__ */ se(), h = /* @__PURE__ */ se(), v = /* @__PURE__ */ se(), _ = /* @__PURE__ */ se(), x = /* @__PURE__ */ se(), k = /* @__PURE__ */ se(), m = /* @__PURE__ */ se(), b = /* @__PURE__ */ se(), p = /* @__PURE__ */ se(), C = /* @__PURE__ */ se(), H = /* @__PURE__ */ se(), S = /* @__PURE__ */ se(), D = /* @__PURE__ */ se();
  let L = w(t, "position", 12, "bottom-right"), A = w(t, "ariaLabel", 12, "Mini map"), I = w(t, "nodeStrokeColor", 12, "transparent"), O = w(t, "nodeColor", 12, void 0), R = w(t, "nodeClass", 12, ""), E = w(t, "nodeBorderRadius", 12, 5), N = w(t, "nodeStrokeWidth", 12, 2), $ = w(t, "bgColor", 12, void 0), T = w(t, "maskColor", 12, void 0), P = w(t, "maskStrokeColor", 12, void 0), M = w(t, "maskStrokeWidth", 12, void 0), z = w(t, "width", 12, void 0), q = w(t, "height", 12, void 0), X = w(t, "pannable", 12, !0), U = w(t, "zoomable", 12, !0), G = w(t, "inversePan", 12, void 0), W = w(t, "zoomStep", 12, void 0), le = w(t, "style", 12, ""), ye = w(t, "class", 12, "");
  const ge = 200, oe = 150, {
    nodes: Te,
    nodeLookup: Q,
    viewport: re,
    width: Ee,
    height: _e,
    flowId: me,
    panZoom: j,
    translateExtent: Pe
  } = We(), Oe = O() === void 0 ? void 0 : ys(O()), Le = ys(I()), ae = ys(R()), ve = (
    // @ts-expect-error - TS doesn't know about chrome
    typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision"
  ), Me = `svelte-flow__minimap-desc-${o()}`;
  let Se = /* @__PURE__ */ se(g(f));
  const Ke = () => g(k);
  he(
    () => (i(), s(), a()),
    () => {
      J(f, {
        x: -i().x / i().zoom,
        y: -i().y / i().zoom,
        width: s() / i().zoom,
        height: a() / i().zoom
      });
    }
  ), he(
    () => (l(), g(f), u()),
    () => {
      J(Se, l().size > 0 ? vc(Oo(l()), g(f)) : g(f)), u();
    }
  ), he(() => ee(z()), () => {
    J(h, z() ?? ge);
  }), he(() => ee(q()), () => {
    J(v, q() ?? oe);
  }), he(
    () => (g(Se), g(h)),
    () => {
      J(_, g(Se).width / g(h));
    }
  ), he(
    () => (g(Se), g(v)),
    () => {
      J(x, g(Se).height / g(v));
    }
  ), he(
    () => (g(_), g(x)),
    () => {
      J(k, Math.max(g(_), g(x)));
    }
  ), he(() => (g(k), g(h)), () => {
    J(m, g(k) * g(h));
  }), he(
    () => (g(k), g(v)),
    () => {
      J(b, g(k) * g(v));
    }
  ), he(() => g(k), () => {
    J(p, 5 * g(k));
  }), he(
    () => (g(Se), g(m), g(p)),
    () => {
      J(C, g(Se).x - (g(m) - g(Se).width) / 2 - g(p));
    }
  ), he(
    () => (g(Se), g(b), g(p)),
    () => {
      J(H, g(Se).y - (g(b) - g(Se).height) / 2 - g(p));
    }
  ), he(() => (g(m), g(p)), () => {
    J(S, g(m) + g(p) * 2);
  }), he(() => (g(b), g(p)), () => {
    J(D, g(b) + g(p) * 2);
  }), mt(), Ie();
  const ut = /* @__PURE__ */ xe(() => le() + ($() ? `;--xy-minimap-background-color-props:${$()}` : "")), te = /* @__PURE__ */ xe(() => Mt(["svelte-flow__minimap", ye()]));
  zo(e, {
    get position() {
      return L();
    },
    get style() {
      return g(ut);
    },
    get class() {
      return g(te);
    },
    "data-testid": "svelte-flow__minimap",
    children: (ce, nn) => {
      var rn = et(), pn = we(rn);
      {
        var Ve = (ot) => {
          var Be = k2();
          be(Be, "aria-labelledby", Me);
          let ze;
          var it = F(Be);
          {
            var on = (bt) => {
              var Ht = C2();
              be(Ht, "id", Me);
              var wr = F(Ht, !0);
              Y(Ht), $e(() => dt(wr, A())), V(bt, Ht);
            };
            pe(it, (bt) => {
              A() && bt(on);
            });
          }
          var Xt = B(it);
          Tt(Xt, 1, u, (bt) => bt.id, (bt, Ht) => {
            var wr = et();
            const st = /* @__PURE__ */ xe(() => l().get(g(Ht).id));
            var ns = we(wr);
            {
              var eo = (It) => {
                const Yo = /* @__PURE__ */ xe(() => nr(g(st))), Zo = /* @__PURE__ */ xe(() => Oe == null ? void 0 : Oe(g(st))), Fo = /* @__PURE__ */ xe(() => Le(g(st))), rs = /* @__PURE__ */ xe(() => ae(g(st)));
                vd(It, lt(
                  {
                    get x() {
                      return g(st).internals.positionAbsolute.x;
                    },
                    get y() {
                      return g(st).internals.positionAbsolute.y;
                    }
                  },
                  () => g(Yo),
                  {
                    get selected() {
                      return g(st).selected;
                    },
                    get color() {
                      return g(Zo);
                    },
                    get borderRadius() {
                      return E();
                    },
                    get strokeColor() {
                      return g(Fo);
                    },
                    get strokeWidth() {
                      return N();
                    },
                    shapeRendering: ve,
                    get class() {
                      return g(rs);
                    }
                  }
                ));
              };
              pe(ns, (It) => {
                g(st) && mc(g(st)) && It(eo);
              });
            }
            V(bt, wr);
          });
          var Qr = B(Xt);
          Y(Be), yt(Be, (bt, Ht) => ms == null ? void 0 : ms(bt, Ht), () => ({
            panZoom: c(),
            viewport: re,
            getViewScale: Ke,
            translateExtent: d(),
            width: s(),
            height: a(),
            inversePan: G(),
            zoomStep: W(),
            pannable: X(),
            zoomable: U()
          })), $e(() => {
            be(Be, "width", g(h)), be(Be, "height", g(v)), be(Be, "viewBox", `${g(C) ?? ""} ${g(H) ?? ""} ${g(S) ?? ""} ${g(D) ?? ""}`), ze = ft(Be, "", ze, {
              "--xy-minimap-mask-background-color-props": T(),
              "--xy-minimap-mask-stroke-color-props": P(),
              "--xy-minimap-mask-stroke-width-props": M() ? M() * g(k) : void 0
            }), be(Qr, "d", `M${g(C) - g(p)},${g(H) - g(p)}h${g(S) + g(p) * 2}v${g(D) + g(p) * 2}h${-g(S) - g(p) * 2}z
      M${g(f).x ?? ""},${g(f).y ?? ""}h${g(f).width ?? ""}v${g(f).height ?? ""}h${-g(f).width}z`);
          }), V(ot, Be);
        };
        pe(pn, (ot) => {
          c() && ot(Ve);
        });
      }
      V(ce, rn);
    },
    $$slots: { default: !0 }
  });
  var Ze = fe({
    get position() {
      return L();
    },
    set position(ce) {
      L(ce), y();
    },
    get ariaLabel() {
      return A();
    },
    set ariaLabel(ce) {
      A(ce), y();
    },
    get nodeStrokeColor() {
      return I();
    },
    set nodeStrokeColor(ce) {
      I(ce), y();
    },
    get nodeColor() {
      return O();
    },
    set nodeColor(ce) {
      O(ce), y();
    },
    get nodeClass() {
      return R();
    },
    set nodeClass(ce) {
      R(ce), y();
    },
    get nodeBorderRadius() {
      return E();
    },
    set nodeBorderRadius(ce) {
      E(ce), y();
    },
    get nodeStrokeWidth() {
      return N();
    },
    set nodeStrokeWidth(ce) {
      N(ce), y();
    },
    get bgColor() {
      return $();
    },
    set bgColor(ce) {
      $(ce), y();
    },
    get maskColor() {
      return T();
    },
    set maskColor(ce) {
      T(ce), y();
    },
    get maskStrokeColor() {
      return P();
    },
    set maskStrokeColor(ce) {
      P(ce), y();
    },
    get maskStrokeWidth() {
      return M();
    },
    set maskStrokeWidth(ce) {
      M(ce), y();
    },
    get width() {
      return z();
    },
    set width(ce) {
      z(ce), y();
    },
    get height() {
      return q();
    },
    set height(ce) {
      q(ce), y();
    },
    get pannable() {
      return X();
    },
    set pannable(ce) {
      X(ce), y();
    },
    get zoomable() {
      return U();
    },
    set zoomable(ce) {
      U(ce), y();
    },
    get inversePan() {
      return G();
    },
    set inversePan(ce) {
      G(ce), y();
    },
    get zoomStep() {
      return W();
    },
    set zoomStep(ce) {
      W(ce), y();
    },
    get style() {
      return le();
    },
    set style(ce) {
      le(ce), y();
    },
    get class() {
      return ye();
    },
    set class(ce) {
      ye(ce), y();
    }
  });
  return r(), Ze;
}
ue(
  pd,
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
    style: {},
    class: {}
  },
  [],
  [],
  !0
);
const Bl = (e) => k0(e);
function Lt() {
  const { zoomIn: e, zoomOut: t, fitView: n, onbeforedelete: r, snapGrid: o, viewport: i, width: s, height: a, minZoom: l, maxZoom: u, panZoom: c, nodes: d, edges: f, domNode: h, nodeLookup: v, nodeOrigin: _, edgeLookup: x, connectionLookup: k } = We(), m = (C) => {
    var A, I;
    const H = K(v), S = Bl(C) ? C : H.get(C.id), D = S.parentId ? P0(S.position, S.measured, S.parentId, H, K(_)) : S.position, L = {
      ...S,
      position: D,
      width: ((A = S.measured) == null ? void 0 : A.width) ?? S.width,
      height: ((I = S.measured) == null ? void 0 : I.height) ?? S.height
    };
    return Br(L);
  }, b = (C, H, S = { replace: !1 }) => {
    var A;
    const D = (A = K(v).get(C)) == null ? void 0 : A.internals.userNode;
    if (!D)
      return;
    const L = typeof H == "function" ? H(D) : H;
    S.replace ? d.update((I) => I.map((O) => O.id === C ? Bl(L) ? L : { ...O, ...L } : O)) : (Object.assign(D, L), d.update((I) => I));
  }, p = (C) => K(v).get(C);
  return {
    zoomIn: e,
    zoomOut: t,
    getInternalNode: p,
    getNode: (C) => {
      var H;
      return (H = p(C)) == null ? void 0 : H.internals.userNode;
    },
    getNodes: (C) => C === void 0 ? K(d) : ql(K(v), C),
    getEdge: (C) => K(x).get(C),
    getEdges: (C) => C === void 0 ? K(f) : ql(K(x), C),
    setZoom: (C, H) => {
      const S = K(c);
      return S ? S.scaleTo(C, { duration: H == null ? void 0 : H.duration }) : Promise.resolve(!1);
    },
    getZoom: () => K(i).zoom,
    setViewport: async (C, H) => {
      const S = K(i), D = K(c);
      return D ? (await D.setViewport({
        x: C.x ?? S.x,
        y: C.y ?? S.y,
        zoom: C.zoom ?? S.zoom
      }, { duration: H == null ? void 0 : H.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    getViewport: () => K(i),
    setCenter: async (C, H, S) => {
      const D = typeof (S == null ? void 0 : S.zoom) < "u" ? S.zoom : K(u), L = K(c);
      return L ? (await L.setViewport({
        x: K(s) / 2 - C * D,
        y: K(a) / 2 - H * D,
        zoom: D
      }, { duration: S == null ? void 0 : S.duration }), Promise.resolve(!0)) : Promise.resolve(!1);
    },
    fitView: n,
    fitBounds: async (C, H) => {
      const S = K(c);
      if (!S)
        return Promise.resolve(!1);
      const D = wa(C, K(s), K(a), K(l), K(u), (H == null ? void 0 : H.padding) ?? 0.1);
      return await S.setViewport(D, { duration: H == null ? void 0 : H.duration }), Promise.resolve(!0);
    },
    getIntersectingNodes: (C, H = !0, S) => {
      const D = $l(C), L = D ? C : m(C);
      return L ? (S || K(d)).filter((A) => {
        const I = K(v).get(A.id);
        if (!I || !D && A.id === C.id)
          return !1;
        const O = Br(I), R = $o(O, L);
        return H && R > 0 || R >= L.width * L.height;
      }) : [];
    },
    isNodeIntersecting: (C, H, S = !0) => {
      const L = $l(C) ? C : m(C);
      if (!L)
        return !1;
      const A = $o(L, H);
      return S && A > 0 || A >= L.width * L.height;
    },
    deleteElements: async ({ nodes: C = [], edges: H = [] }) => {
      const { nodes: S, edges: D } = await fc({
        nodesToRemove: C,
        edgesToRemove: H,
        nodes: K(d),
        edges: K(f),
        onBeforeDelete: K(r)
      });
      return S && d.update((L) => L.filter((A) => !S.some(({ id: I }) => I === A.id))), D && f.update((L) => L.filter((A) => !D.some(({ id: I }) => I === A.id))), {
        deletedNodes: S,
        deletedEdges: D
      };
    },
    screenToFlowPosition: (C, H = { snapToGrid: !0 }) => {
      const S = K(h);
      if (!S)
        return C;
      const D = H.snapToGrid ? K(o) : !1, { x: L, y: A, zoom: I } = K(i), { x: O, y: R } = S.getBoundingClientRect(), E = {
        x: C.x - O,
        y: C.y - R
      };
      return Lo(E, [L, A, I], D !== null, D || [1, 1]);
    },
    /**
     *
     * @param position
     * @returns
     */
    flowToScreenPosition: (C) => {
      const H = K(h);
      if (!H)
        return C;
      const { x: S, y: D, zoom: L } = K(i), { x: A, y: I } = H.getBoundingClientRect(), O = pc(C, [S, D, L]);
      return {
        x: O.x + A,
        y: O.y + I
      };
    },
    toObject: () => ({
      nodes: K(d).map((C) => ({
        ...C,
        // we want to make sure that changes to the nodes object that gets returned by toObject
        // do not affect the nodes object
        position: { ...C.position },
        data: { ...C.data }
      })),
      edges: K(f).map((C) => ({ ...C })),
      viewport: { ...K(i) }
    }),
    updateNode: b,
    updateNodeData: (C, H, S) => {
      var A;
      const D = (A = K(v).get(C)) == null ? void 0 : A.internals.userNode;
      if (!D)
        return;
      const L = typeof H == "function" ? H(D) : H;
      D.data = S != null && S.replace ? L : { ...D.data, ...L }, d.update((I) => I);
    },
    getNodesBounds: (C) => {
      const H = K(v), S = K(_);
      return $0(C, { nodeLookup: H, nodeOrigin: S });
    },
    getHandleConnections: ({ type: C, id: H, nodeId: S }) => {
      var D;
      return Array.from(((D = K(k).get(`${S}-${C}-${H ?? null}`)) == null ? void 0 : D.values()) ?? []);
    },
    viewport: i
  };
}
function ql(e, t) {
  var r;
  const n = [];
  for (const o of t) {
    const i = e.get(o);
    if (i) {
      const s = "internals" in i ? (r = i.internals) == null ? void 0 : r.userNode : i;
      n.push(s);
    }
  }
  return n;
}
var $2 = /* @__PURE__ */ ie('<div class="svelte-flow__node-toolbar"><!></div>');
function md(e, t) {
  de(t, !1);
  const [n, r] = rt(), o = () => ne(b, "$nodes", n), i = () => ne(m, "$nodeLookup", n), s = () => ne(k, "$viewport", n), a = () => ne(x, "$domNode", n), l = /* @__PURE__ */ se(), u = /* @__PURE__ */ se(), c = /* @__PURE__ */ se();
  let d = w(t, "nodeId", 12, void 0), f = w(t, "position", 12, void 0), h = w(t, "align", 12, void 0), v = w(t, "offset", 12, void 0), _ = w(t, "isVisible", 12, void 0);
  const { domNode: x, viewport: k, nodeLookup: m, nodes: b } = We(), { getNodesBounds: p } = Lt(), C = ur("svelteflow__node_id");
  let H = /* @__PURE__ */ se(), S = /* @__PURE__ */ se([]), D = v() !== void 0 ? v() : 10, L = f() !== void 0 ? f() : He.Top, A = h() !== void 0 ? h() : "center";
  he(
    () => (o(), ee(d()), i()),
    () => {
      o();
      const N = Array.isArray(d()) ? d() : [d() || C];
      J(S, N.reduce(
        ($, T) => {
          const P = i().get(T);
          return P && $.push(P), $;
        },
        []
      ));
    }
  ), he(
    () => (g(S), s()),
    () => {
      const N = p(g(S));
      N && J(H, Y0(N, s(), L, D, A));
    }
  ), he(() => g(S), () => {
    J(l, g(S).length === 0 ? 1 : Math.max(...g(S).map((N) => (N.internals.z || 5) + 1)));
  }), he(() => o(), () => {
    J(u, o().filter((N) => N.selected).length);
  }), he(
    () => (ee(_()), g(S), g(u)),
    () => {
      J(c, typeof _() == "boolean" ? _() : g(S).length === 1 && g(S)[0].selected && g(u) === 1);
    }
  ), mt(), Ie();
  var I = et(), O = we(I);
  {
    var R = (N) => {
      var $ = $2();
      let T;
      var P = F($);
      wt(P, t, "default", {}), Y($), yt($, (M, z) => Sr == null ? void 0 : Sr(M, z), () => ({ domNode: a() })), $e(
        (M) => {
          be($, "data-id", M), T = ft($, "", T, {
            position: "absolute",
            transform: g(H),
            "z-index": g(l)
          });
        },
        [
          () => g(S).reduce((M, z) => `${M}${z.id} `, "").trim()
        ],
        xe
      ), V(N, $);
    };
    pe(O, (N) => {
      a() && g(c) && g(S) && N(R);
    });
  }
  V(e, I);
  var E = fe({
    get nodeId() {
      return d();
    },
    set nodeId(N) {
      d(N), y();
    },
    get position() {
      return f();
    },
    set position(N) {
      f(N), y();
    },
    get align() {
      return h();
    },
    set align(N) {
      h(N), y();
    },
    get offset() {
      return v();
    },
    set offset(N) {
      v(N), y();
    },
    get isVisible() {
      return _();
    },
    set isVisible(N) {
      _(N), y();
    }
  });
  return r(), E;
}
ue(
  md,
  {
    nodeId: {},
    position: {},
    align: {},
    offset: {},
    isVisible: {}
  },
  ["default"],
  [],
  !0
);
function yr(e) {
  const { nodes: t, nodeLookup: n } = We();
  let r = [], o = !0;
  return Kn([t, n], ([, i], s) => {
    var c;
    const a = [], l = Array.isArray(e), u = l ? e : [e];
    for (const d of u) {
      const f = (c = i.get(d)) == null ? void 0 : c.internals.userNode;
      f && a.push({
        id: f.id,
        type: f.type,
        data: f.data
      });
    }
    (!U0(a, r) || o) && (r = a, s(l ? a : a[0] ?? null), o = !1);
  });
}
const Yl = "tinyflow-component";
class Yw {
  constructor(t) {
    Ct(this, "options");
    Ct(this, "rootEl");
    Ct(this, "svelteFlowInstance");
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
    const t = document.createElement(Yl);
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
    const n = document.createElement(Yl);
    n.style.display = "block", n.style.width = "100%", n.style.height = "100%", n.classList.add("tf-theme-light"), n.options = this.options, n.onInit = (r) => {
      this.svelteFlowInstance = r;
    }, this.destroy(), this.rootEl.appendChild(n);
  }
  destroy() {
    for (; this.rootEl.firstChild; )
      this.rootEl.removeChild(this.rootEl.firstChild);
  }
}
const E2 = () => {
  const e = Ce([]), t = Ce([]), n = Ce({ x: 250, y: 100, zoom: 1 });
  return {
    nodes: e,
    edges: t,
    viewport: n,
    init: (r, o) => {
      e.set(r), t.set(o);
    },
    addNode: (r) => {
      e.update((o) => [...o, r]);
    },
    removeNode: (r) => {
      e.update((o) => o.filter((i) => i.id !== r));
    },
    updateNode: (r, o) => {
      e.update((i) => i.map((s) => s.id === r ? o : s));
    },
    updateNodeData: (r, o) => {
      e.update(
        (i) => i.map((s) => s.id === r ? { ...s, data: { ...s.data, ...o } } : s)
      );
    },
    selectNodeOnly: (r) => {
      e.update(
        (o) => o.map(
          (i) => i.id === r ? { ...i, selected: !0 } : { ...i, selected: !1 }
        )
      );
    },
    addEdge: (r) => {
      t.update((o) => [...o, r]);
    },
    removeEdge: (r) => {
      t.update((o) => o.filter((i) => i.id !== r));
    },
    updateEdge: (r, o) => {
      t.update((i) => i.map((s) => s.id === r ? o : s));
    },
    updateEdgeData: (r, o) => {
      t.update((i) => i.map((s) => s.id === r ? { ...s, data: o } : s));
    }
  };
}, ii = E2();
var S2 = /* @__PURE__ */ ie("<button><!></button>");
function je(e, t) {
  de(t, !0);
  const n = w(t, "children", 7), r = /* @__PURE__ */ xt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "children"
  ]);
  var o = S2();
  let i;
  var s = F(o);
  return cr(s, () => n() ?? gt), Y(o), $e(() => i = Qt(o, i, {
    type: "button",
    ...r,
    class: `tf-btn nopan nodrag ${t.class ?? ""}`
  })), V(e, o), fe({
    get children() {
      return n();
    },
    set children(a) {
      n(a), y();
    }
  });
}
ue(je, { children: {} }, [], [], !0);
var P2 = /* @__PURE__ */ ie("<input>");
function yd(e, t) {
  de(t, !0);
  const n = /* @__PURE__ */ xt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = P2();
  ar(r);
  let o;
  $e(() => o = Qt(r, o, {
    type: "checkbox",
    ...n,
    class: `tf-checkbox nopan nodrag ${t.class ?? ""}`
  })), V(e, r), fe();
}
ue(yd, {}, [], [], !0);
var N2 = /* @__PURE__ */ ie("<input>");
function vt(e, t) {
  de(t, !0);
  const n = /* @__PURE__ */ xt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  var r = N2();
  ar(r);
  let o;
  $e(() => o = Qt(r, o, {
    type: "text",
    spellcheck: "false",
    ...n,
    class: `tf-input  nopan nodrag ${t.class ?? ""}`
  })), V(e, r), fe();
}
ue(vt, {}, [], [], !0);
var T2 = /* @__PURE__ */ ie("<textarea></textarea>");
function pt(e, t) {
  de(t, !0);
  const n = w(t, "value", 7), r = /* @__PURE__ */ xt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "value"
  ]);
  var o = T2();
  y1(o);
  let i;
  return $e(() => i = Qt(o, i, {
    spellcheck: "false",
    ...r,
    class: `tf-textarea nodrag nowheel ${t.class ?? ""}`,
    value: n() || ""
  })), V(e, o), fe({
    get value() {
      return n();
    },
    set value(s) {
      n(s), y();
    }
  });
}
ue(pt, { value: {} }, [], [], !0);
var M2 = /* @__PURE__ */ ie('<div role="button"><!></div>'), H2 = /* @__PURE__ */ ie("<div></div>");
function wd(e, t) {
  const n = at(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host"
  ]), r = at(n, ["items", "onChange", "activeIndex"]);
  de(t, !1);
  let o = w(t, "items", 28, () => []), i = w(t, "onChange", 12, () => {
  }), s = w(t, "activeIndex", 12, 0);
  function a(c, d) {
    var f;
    s(d), (f = i()) == null || f(c, d);
  }
  Ie();
  var l = H2();
  let u;
  return Tt(l, 5, o, Or, (c, d, f) => {
    var h = M2();
    be(h, "tabindex", f), h.__click = () => a(g(d), f), h.__keydown = (k) => {
      (k.key === "Enter" || k.key === " ") && (k.preventDefault(), a(g(d), f));
    };
    var v = F(h);
    {
      var _ = (k) => {
        var m = Ye();
        $e(() => dt(m, g(d).label)), V(k, m);
      }, x = (k) => {
        var m = et(), b = we(m);
        cr(b, () => g(d).label ?? gt), V(k, m);
      };
      pe(v, (k) => {
        typeof g(d).label == "string" ? k(_) : k(x, !1);
      });
    }
    Y(h), $e(() => _t(h, 1, `tf-tabs-item ${(f === s() ? "active" : "") ?? ""}`)), V(c, h);
  }), Y(l), $e(() => u = Qt(l, u, {
    ...r,
    class: `tf-tabs ${r.class ?? ""}`
  })), V(e, l), fe({
    get items() {
      return o();
    },
    set items(c) {
      o(c), y();
    },
    get onChange() {
      return i();
    },
    set onChange(c) {
      i(c), y();
    },
    get activeIndex() {
      return s();
    },
    set activeIndex(c) {
      s(c), y();
    }
  });
}
jr(["click", "keydown"]);
ue(wd, { items: {}, onChange: {}, activeIndex: {} }, [], [], !0);
var D2 = (e, t, n) => t(g(n)), V2 = (e, t, n) => {
  (e.key === "Enter" || e.key === " ") && (e.preventDefault(), t(g(n)));
}, A2 = /* @__PURE__ */ ie('<span class="tf-collapse-item-title-icon"><!></span>'), O2 = /* @__PURE__ */ ie('<div class="tf-collapse-item-description"><!></div>'), L2 = /* @__PURE__ */ ie('<div class="tf-collapse-item-content"><!></div>'), I2 = /* @__PURE__ */ ie('<div class="tf-collapse-item"><div class="tf-collapse-item-title" role="button"><!> <!> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path></svg></span></div> <!> <!></div>'), z2 = /* @__PURE__ */ ie("<div></div>");
const R2 = {
  hash: "svelte-1jfktzw",
  code: `
    /* 定义旋转的 CSS 类 */.rotate-90.svelte-1jfktzw {transform:rotate(90deg);transition:transform 0.3s ease;}`
};
function _d(e, t) {
  de(t, !0), tt(e, R2);
  let n = w(t, "items", 7), r = w(t, "onChange", 7), o = w(t, "activeKeys", 31, () => an([]));
  function i(a) {
    var l;
    o().includes(a.key) ? o(o().filter((u) => u !== a.key)) : (o().push(a.key), o(o())), (l = r()) == null || l(a, o());
  }
  var s = z2();
  return Tt(s, 21, n, Or, (a, l, u) => {
    var c = I2(), d = F(c);
    be(d, "tabindex", u), d.__click = [D2, i, l], d.__keydown = [V2, i, l];
    var f = F(d);
    {
      var h = (p) => {
        var C = A2(), H = F(C);
        Xn(H, {
          get target() {
            return g(l).icon;
          }
        }), Y(C), V(p, C);
      };
      pe(f, (p) => {
        g(l).icon && p(h);
      });
    }
    var v = B(f, 2);
    Xn(v, {
      get target() {
        return g(l).title;
      }
    });
    var _ = B(v, 2);
    Y(d);
    var x = B(d, 2);
    {
      var k = (p) => {
        var C = O2(), H = F(C);
        Xn(H, {
          get target() {
            return g(l).description;
          }
        }), Y(C), V(p, C);
      };
      pe(x, (p) => {
        g(l).description && p(k);
      });
    }
    var m = B(x, 2);
    {
      var b = (p) => {
        var C = L2(), H = F(C);
        Xn(H, {
          get target() {
            return g(l).content;
          }
        }), Y(C), V(p, C);
      };
      pe(m, (p) => {
        o().includes(g(l).key) && p(b);
      });
    }
    Y(c), $e((p) => _t(_, 1, `tf-collapse-item-title-arrow ${p ?? ""}`, "svelte-1jfktzw"), [
      () => o().includes(g(l).key) ? "rotate-90" : ""
    ]), V(a, c);
  }), Y(s), $e(() => {
    ft(s, t.style), _t(s, 1, `tf-collapse ${t.class ?? ""}`, "svelte-1jfktzw");
  }), V(e, s), fe({
    get items() {
      return n();
    },
    set items(a) {
      n(a), y();
    },
    get onChange() {
      return r();
    },
    set onChange(a) {
      r(a), y();
    },
    get activeKeys() {
      return o();
    },
    set activeKeys(a = []) {
      o(a), y();
    }
  });
}
jr(["click", "keydown"]);
ue(_d, { items: {}, onChange: {}, activeKeys: {} }, [], [], !0);
function Xn(e, t) {
  de(t, !0);
  let n = w(t, "target", 7);
  typeof n() > "u" && n("undefined");
  var r = et(), o = we(r);
  {
    var i = (a) => {
      var l = et(), u = we(l);
      cr(u, () => n() ?? gt), V(a, l);
    }, s = (a) => {
      var l = et(), u = we(l);
      la(u, n), V(a, l);
    };
    pe(o, (a) => {
      typeof n() == "function" ? a(i) : a(s, !1);
    });
  }
  return V(e, r), fe({
    get target() {
      return n();
    },
    set target(a) {
      n(a), y();
    }
  });
}
ue(Xn, { target: {} }, [], [], !0);
var B2 = (e, t, n) => t(g(n)), q2 = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14L8 10H16L12 14Z"></path></svg>'), Y2 = /* @__PURE__ */ ie('<div class="tf-select-content-children"><!></div>'), Z2 = /* @__PURE__ */ ie('<button class="tf-select-content-item"><span><!></span> <!></button> <!>', 1), F2 = /* @__PURE__ */ ie('<div class="tf-select-content nopan nodrag"><!></div>'), X2 = /* @__PURE__ */ ie("<!> <!>", 1), W2 = /* @__PURE__ */ ie('<div class="tf-select-input-placeholder"> </div>'), K2 = /* @__PURE__ */ ie('<button><div class="tf-select-input-value"></div> <div class="tf-select-input-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div></button>'), G2 = /* @__PURE__ */ ie("<div><!></div>");
function en(e, t) {
  de(t, !0);
  const n = (b, p = gt) => {
    var C = et(), H = we(C);
    Tt(H, 19, p, (S, D) => `${D}_${S.value}`, (S, D) => {
      var L = Z2(), A = we(L);
      A.__click = [B2, _, D];
      var I = F(A), O = F(I);
      {
        var R = (T) => {
          var P = q2();
          V(T, P);
        };
        pe(O, (T) => {
          g(D).children && g(D).children.length > 0 && T(R);
        });
      }
      Y(I);
      var E = B(I, 2);
      Xn(E, {
        get target() {
          return g(D).label;
        }
      }), Y(A);
      var N = B(A, 2);
      {
        var $ = (T) => {
          var P = Y2(), M = F(P);
          n(M, () => g(D).children), Y(P), V(T, P);
        };
        pe(N, (T) => {
          g(D).children && g(D).children.length > 0 && (l() || c().includes(g(D).value)) && T($);
        });
      }
      V(S, L);
    }), V(b, C);
  };
  let r = w(t, "items", 7), o = w(t, "onExpand", 7), i = w(t, "onSelect", 7), s = w(t, "value", 23, () => []), a = w(t, "defaultValue", 23, () => []), l = w(t, "expandAll", 7, !0), u = w(t, "multiple", 7, !1), c = w(t, "expandValue", 23, () => []), d = w(t, "placeholder", 7), f = /* @__PURE__ */ xt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "items",
    "onExpand",
    "onSelect",
    "value",
    "defaultValue",
    "expandAll",
    "multiple",
    "expandValue",
    "placeholder"
  ]), h = /* @__PURE__ */ Ne(() => {
    const b = [], p = (C) => {
      for (let H of C)
        s().length > 0 ? s().includes(H.value) && b.push(H) : a().includes(H.value) && b.push(H), H.children && H.children.length > 0 && p(H.children);
    };
    return p(r()), b;
  }), v;
  function _(b) {
    var p, C;
    if (b.children && b.children.length > 0) {
      (p = o()) == null || p(b);
      return;
    } else
      v == null || v.hide(), (C = i()) == null || C(b);
  }
  var x = G2();
  let k;
  var m = F(x);
  return kn(
    Jr(m, {
      floating: (p) => {
        var C = F2(), H = F(C);
        n(H, r), Y(C), V(p, C);
      },
      children: (p, C) => {
        var H = K2();
        let S;
        var D = F(H);
        Tt(
          D,
          23,
          () => g(h),
          (L, A) => `${A}_${L.value}`,
          (L, A, I) => {
            var O = et(), R = we(O);
            {
              var E = ($) => {
                var T = et(), P = we(T);
                {
                  var M = (z) => {
                    Xn(z, {
                      get target() {
                        return g(A).label;
                      }
                    });
                  };
                  pe(P, (z) => {
                    g(I) === 0 && z(M);
                  });
                }
                V($, T);
              }, N = ($) => {
                var T = X2(), P = we(T);
                Xn(P, {
                  get target() {
                    return g(A).label;
                  }
                });
                var M = B(P, 2);
                {
                  var z = (q) => {
                    var X = Ye(",");
                    V(q, X);
                  };
                  pe(M, (q) => {
                    g(I) < g(h).length - 1 && q(z);
                  });
                }
                V($, T);
              };
              pe(R, ($) => {
                u() ? $(N, !1) : $(E);
              });
            }
            V(L, O);
          },
          (L) => {
            var A = W2(), I = F(A, !0);
            Y(A), $e(() => dt(I, d())), V(L, A);
          }
        ), Y(D), Ae(2), Y(H), $e(() => S = Qt(H, S, {
          class: "tf-select-input nopan nodrag",
          ...f
        })), V(p, H);
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (p) => v = p,
    () => v
  ), Y(x), $e(() => k = Qt(x, k, {
    ...f,
    class: `tf-select ${f.class ?? ""}`
  })), V(e, x), fe({
    get items() {
      return r();
    },
    set items(b) {
      r(b), y();
    },
    get onExpand() {
      return o();
    },
    set onExpand(b) {
      o(b), y();
    },
    get onSelect() {
      return i();
    },
    set onSelect(b) {
      i(b), y();
    },
    get value() {
      return s();
    },
    set value(b = []) {
      s(b), y();
    },
    get defaultValue() {
      return a();
    },
    set defaultValue(b = []) {
      a(b), y();
    },
    get expandAll() {
      return l();
    },
    set expandAll(b = !0) {
      l(b), y();
    },
    get multiple() {
      return u();
    },
    set multiple(b = !1) {
      u(b), y();
    },
    get expandValue() {
      return c();
    },
    set expandValue(b = []) {
      c(b), y();
    },
    get placeholder() {
      return d();
    },
    set placeholder(b) {
      d(b), y();
    }
  });
}
jr(["click"]);
ue(
  en,
  {
    items: {},
    onExpand: {},
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
const So = Math.min, Nr = Math.max, Si = Math.round, wn = (e) => ({
  x: e,
  y: e
}), j2 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, U2 = {
  start: "end",
  end: "start"
};
function qs(e, t, n) {
  return Nr(e, So(t, n));
}
function Ro(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function hr(e) {
  return e.split("-")[0];
}
function Bo(e) {
  return e.split("-")[1];
}
function xd(e) {
  return e === "x" ? "y" : "x";
}
function $a(e) {
  return e === "y" ? "height" : "width";
}
function Yr(e) {
  return ["top", "bottom"].includes(hr(e)) ? "y" : "x";
}
function Ea(e) {
  return xd(Yr(e));
}
function J2(e, t, n) {
  n === void 0 && (n = !1);
  const r = Bo(e), o = Ea(e), i = $a(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Pi(s)), [s, Pi(s)];
}
function Q2(e) {
  const t = Pi(e);
  return [Ys(e), t, Ys(t)];
}
function Ys(e) {
  return e.replace(/start|end/g, (t) => U2[t]);
}
function em(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function tm(e, t, n, r) {
  const o = Bo(e);
  let i = em(hr(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(Ys)))), i;
}
function Pi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => j2[t]);
}
function nm(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function bd(e) {
  return typeof e != "number" ? nm(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ni(e) {
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
function Zl(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = Yr(t), s = Ea(t), a = $a(s), l = hr(t), u = i === "y", c = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, f = r[a] / 2 - o[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = {
        x: c,
        y: r.y - o.height
      };
      break;
    case "bottom":
      h = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      h = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (Bo(t)) {
    case "start":
      h[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += f * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const rm = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, a = i.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: c,
    y: d
  } = Zl(u, r, l), f = r, h = {}, v = 0;
  for (let _ = 0; _ < a.length; _++) {
    const {
      name: x,
      fn: k
    } = a[_], {
      x: m,
      y: b,
      data: p,
      reset: C
    } = await k({
      x: c,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: h,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = m ?? c, d = b ?? d, h = {
      ...h,
      [x]: {
        ...h[x],
        ...p
      }
    }, C && v <= 50 && (v++, typeof C == "object" && (C.placement && (f = C.placement), C.rects && (u = C.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : C.rects), {
      x: c,
      y: d
    } = Zl(u, f, l)), _ = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: o,
    middlewareData: h
  };
};
async function Cd(e, t) {
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
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: h = 0
  } = Ro(t, e), v = bd(h), x = a[f ? d === "floating" ? "reference" : "floating" : d], k = Ni(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n ? x : x.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), m = d === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), p = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, C = Ni(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: m,
    offsetParent: b,
    strategy: l
  }) : m);
  return {
    top: (k.top - C.top + v.top) / p.y,
    bottom: (C.bottom - k.bottom + v.bottom) / p.y,
    left: (k.left - C.left + v.left) / p.x,
    right: (C.right - k.right + v.right) / p.x
  };
}
const om = (e) => ({
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
      element: u,
      padding: c = 0
    } = Ro(e, t) || {};
    if (u == null)
      return {};
    const d = bd(c), f = {
      x: n,
      y: r
    }, h = Ea(o), v = $a(h), _ = await s.getDimensions(u), x = h === "y", k = x ? "top" : "left", m = x ? "bottom" : "right", b = x ? "clientHeight" : "clientWidth", p = i.reference[v] + i.reference[h] - f[h] - i.floating[v], C = f[h] - i.reference[h], H = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let S = H ? H[b] : 0;
    (!S || !await (s.isElement == null ? void 0 : s.isElement(H))) && (S = a.floating[b] || i.floating[v]);
    const D = p / 2 - C / 2, L = S / 2 - _[v] / 2 - 1, A = So(d[k], L), I = So(d[m], L), O = A, R = S - _[v] - I, E = S / 2 - _[v] / 2 + D, N = qs(O, E, R), $ = !l.arrow && Bo(o) != null && E !== N && i.reference[v] / 2 - (E < O ? A : I) - _[v] / 2 < 0, T = $ ? E < O ? E - O : E - R : 0;
    return {
      [h]: f[h] + T,
      data: {
        [h]: N,
        centerOffset: E - N - T,
        ...$ && {
          alignmentOffset: T
        }
      },
      reset: $
    };
  }
}), im = function(e) {
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
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: _ = !0,
        ...x
      } = Ro(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const k = hr(o), m = Yr(a), b = hr(a) === a, p = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), C = f || (b || !_ ? [Pi(a)] : Q2(a)), H = v !== "none";
      !f && H && C.push(...tm(a, _, v, p));
      const S = [a, ...C], D = await Cd(t, x), L = [];
      let A = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && L.push(D[k]), d) {
        const E = J2(o, s, p);
        L.push(D[E[0]], D[E[1]]);
      }
      if (A = [...A, {
        placement: o,
        overflows: L
      }], !L.every((E) => E <= 0)) {
        var I, O;
        const E = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1, N = S[E];
        if (N)
          return {
            data: {
              index: E,
              overflows: A
            },
            reset: {
              placement: N
            }
          };
        let $ = (O = A.filter((T) => T.overflows[0] <= 0).sort((T, P) => T.overflows[1] - P.overflows[1])[0]) == null ? void 0 : O.placement;
        if (!$)
          switch (h) {
            case "bestFit": {
              var R;
              const T = (R = A.filter((P) => {
                if (H) {
                  const M = Yr(P.placement);
                  return M === m || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  M === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((M) => M > 0).reduce((M, z) => M + z, 0)]).sort((P, M) => P[1] - M[1])[0]) == null ? void 0 : R[0];
              T && ($ = T);
              break;
            }
            case "initialPlacement":
              $ = a;
              break;
          }
        if (o !== $)
          return {
            reset: {
              placement: $
            }
          };
      }
      return {};
    }
  };
};
async function sm(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = hr(n), a = Bo(n), l = Yr(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, c = i && l ? -1 : 1, d = Ro(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: v
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof v == "number" && (h = a === "end" ? v * -1 : v), l ? {
    x: h * c,
    y: f * u
  } : {
    x: f * u,
    y: h * c
  };
}
const am = function(e) {
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
      } = t, l = await sm(t, e);
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
}, lm = function(e) {
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
          fn: (x) => {
            let {
              x: k,
              y: m
            } = x;
            return {
              x: k,
              y: m
            };
          }
        },
        ...l
      } = Ro(e, t), u = {
        x: n,
        y: r
      }, c = await Cd(t, l), d = Yr(hr(o)), f = xd(d);
      let h = u[f], v = u[d];
      if (i) {
        const x = f === "y" ? "top" : "left", k = f === "y" ? "bottom" : "right", m = h + c[x], b = h - c[k];
        h = qs(m, h, b);
      }
      if (s) {
        const x = d === "y" ? "top" : "left", k = d === "y" ? "bottom" : "right", m = v + c[x], b = v - c[k];
        v = qs(m, v, b);
      }
      const _ = a.fn({
        ...t,
        [f]: h,
        [d]: v
      });
      return {
        ..._,
        data: {
          x: _.x - n,
          y: _.y - r,
          enabled: {
            [f]: i,
            [d]: s
          }
        }
      };
    }
  };
};
function Ji() {
  return typeof window < "u";
}
function Ur(e) {
  return kd(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Zt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Rn(e) {
  var t;
  return (t = (kd(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function kd(e) {
  return Ji() ? e instanceof Node || e instanceof Zt(e).Node : !1;
}
function dn(e) {
  return Ji() ? e instanceof Element || e instanceof Zt(e).Element : !1;
}
function $n(e) {
  return Ji() ? e instanceof HTMLElement || e instanceof Zt(e).HTMLElement : !1;
}
function Fl(e) {
  return !Ji() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Zt(e).ShadowRoot;
}
function qo(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = fn(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function um(e) {
  return ["table", "td", "th"].includes(Ur(e));
}
function Qi(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Sa(e) {
  const t = Pa(), n = dn(e) ? fn(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function cm(e) {
  let t = Qn(e);
  for (; $n(t) && !Zr(t); ) {
    if (Sa(t))
      return t;
    if (Qi(t))
      return null;
    t = Qn(t);
  }
  return null;
}
function Pa() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Zr(e) {
  return ["html", "body", "#document"].includes(Ur(e));
}
function fn(e) {
  return Zt(e).getComputedStyle(e);
}
function es(e) {
  return dn(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Qn(e) {
  if (Ur(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Fl(e) && e.host || // Fallback.
    Rn(e)
  );
  return Fl(t) ? t.host : t;
}
function $d(e) {
  const t = Qn(e);
  return Zr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : $n(t) && qo(t) ? t : $d(t);
}
function Ed(e, t, n) {
  var r;
  t === void 0 && (t = []);
  const o = $d(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Zt(o);
  return i ? (Zs(s), t.concat(s, s.visualViewport || [], qo(o) ? o : [], [])) : t.concat(o, Ed(o, []));
}
function Zs(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Sd(e) {
  const t = fn(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = $n(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, a = Si(n) !== i || Si(r) !== s;
  return a && (n = i, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Pd(e) {
  return dn(e) ? e : e.contextElement;
}
function Tr(e) {
  const t = Pd(e);
  if (!$n(t))
    return wn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = Sd(t);
  let s = (i ? Si(n.width) : n.width) / r, a = (i ? Si(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const dm = /* @__PURE__ */ wn(0);
function Nd(e) {
  const t = Zt(e);
  return !Pa() || !t.visualViewport ? dm : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function fm(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Zt(e) ? !1 : t;
}
function Po(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Pd(e);
  let s = wn(1);
  t && (r ? dn(r) && (s = Tr(r)) : s = Tr(e));
  const a = fm(i, n, r) ? Nd(i) : wn(0);
  let l = (o.left + a.x) / s.x, u = (o.top + a.y) / s.y, c = o.width / s.x, d = o.height / s.y;
  if (i) {
    const f = Zt(i), h = r && dn(r) ? Zt(r) : r;
    let v = f, _ = Zs(v);
    for (; _ && r && h !== v; ) {
      const x = Tr(_), k = _.getBoundingClientRect(), m = fn(_), b = k.left + (_.clientLeft + parseFloat(m.paddingLeft)) * x.x, p = k.top + (_.clientTop + parseFloat(m.paddingTop)) * x.y;
      l *= x.x, u *= x.y, c *= x.x, d *= x.y, l += b, u += p, v = Zt(_), _ = Zs(v);
    }
  }
  return Ni({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function Na(e, t) {
  const n = es(e).scrollLeft;
  return t ? t.left + n : Po(Rn(e)).left + n;
}
function Td(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Na(e, r)
  )), i = r.top + t.scrollTop;
  return {
    x: o,
    y: i
  };
}
function gm(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", s = Rn(r), a = t ? Qi(t.floating) : !1;
  if (r === s || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = wn(1);
  const c = wn(0), d = $n(r);
  if ((d || !d && !i) && ((Ur(r) !== "body" || qo(s)) && (l = es(r)), $n(r))) {
    const h = Po(r);
    u = Tr(r), c.x = h.x + r.clientLeft, c.y = h.y + r.clientTop;
  }
  const f = s && !d && !i ? Td(s, l, !0) : wn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function hm(e) {
  return Array.from(e.getClientRects());
}
function vm(e) {
  const t = Rn(e), n = es(e), r = e.ownerDocument.body, o = Nr(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Nr(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Na(e);
  const a = -n.scrollTop;
  return fn(r).direction === "rtl" && (s += Nr(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: a
  };
}
function pm(e, t) {
  const n = Zt(e), r = Rn(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = Pa();
    (!u || u && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function mm(e, t) {
  const n = Po(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = $n(e) ? Tr(e) : wn(1), s = e.clientWidth * i.x, a = e.clientHeight * i.y, l = o * i.x, u = r * i.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function Xl(e, t, n) {
  let r;
  if (t === "viewport")
    r = pm(e, n);
  else if (t === "document")
    r = vm(Rn(e));
  else if (dn(t))
    r = mm(t, n);
  else {
    const o = Nd(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Ni(r);
}
function Md(e, t) {
  const n = Qn(e);
  return n === t || !dn(n) || Zr(n) ? !1 : fn(n).position === "fixed" || Md(n, t);
}
function ym(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ed(e, []).filter((a) => dn(a) && Ur(a) !== "body"), o = null;
  const i = fn(e).position === "fixed";
  let s = i ? Qn(e) : e;
  for (; dn(s) && !Zr(s); ) {
    const a = fn(s), l = Sa(s);
    !l && a.position === "fixed" && (o = null), (i ? !l && !o : !l && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || qo(s) && !l && Md(e, s)) ? r = r.filter((c) => c !== s) : o = a, s = Qn(s);
  }
  return t.set(e, r), r;
}
function wm(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? Qi(t) ? [] : ym(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((u, c) => {
    const d = Xl(t, c, o);
    return u.top = Nr(d.top, u.top), u.right = So(d.right, u.right), u.bottom = So(d.bottom, u.bottom), u.left = Nr(d.left, u.left), u;
  }, Xl(t, a, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function _m(e) {
  const {
    width: t,
    height: n
  } = Sd(e);
  return {
    width: t,
    height: n
  };
}
function xm(e, t, n) {
  const r = $n(t), o = Rn(t), i = n === "fixed", s = Po(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = wn(0);
  if (r || !r && !i)
    if ((Ur(t) !== "body" || qo(o)) && (a = es(t)), r) {
      const f = Po(t, !0, i, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else o && (l.x = Na(o));
  const u = o && !r && !i ? Td(o, a) : wn(0), c = s.left + a.scrollLeft - l.x - u.x, d = s.top + a.scrollTop - l.y - u.y;
  return {
    x: c,
    y: d,
    width: s.width,
    height: s.height
  };
}
function ws(e) {
  return fn(e).position === "static";
}
function Wl(e, t) {
  if (!$n(e) || fn(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Rn(e) === n && (n = n.ownerDocument.body), n;
}
function Hd(e, t) {
  const n = Zt(e);
  if (Qi(e))
    return n;
  if (!$n(e)) {
    let o = Qn(e);
    for (; o && !Zr(o); ) {
      if (dn(o) && !ws(o))
        return o;
      o = Qn(o);
    }
    return n;
  }
  let r = Wl(e, t);
  for (; r && um(r) && ws(r); )
    r = Wl(r, t);
  return r && Zr(r) && ws(r) && !Sa(r) ? n : r || cm(e) || n;
}
const bm = async function(e) {
  const t = this.getOffsetParent || Hd, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: xm(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Cm(e) {
  return fn(e).direction === "rtl";
}
const km = {
  convertOffsetParentRelativeRectToViewportRelativeRect: gm,
  getDocumentElement: Rn,
  getClippingRect: wm,
  getOffsetParent: Hd,
  getElementRects: bm,
  getClientRects: hm,
  getDimensions: _m,
  getScale: Tr,
  isElement: dn,
  isRTL: Cm
}, $m = am, Em = lm, Sm = im, Pm = om, Nm = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: km,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return rm(e, t, {
    ...o,
    platform: i
  });
}, Tm = ({
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
    const k = document.querySelector(e);
    if (k)
      e = k;
    else
      throw new Error("element not found by document.querySelector('" + e + "')");
  }
  let u;
  if (typeof n == "string") {
    const k = document.querySelector(n);
    if (k)
      u = k;
    else
      throw new Error("element not found by document.querySelector('" + n + "')");
  } else
    u = n;
  let c;
  l && (c = document.createElement("div"), c.style.position = "absolute", c.style.backgroundColor = "#222", c.style.width = "8px", c.style.height = "8px", c.style.transform = "rotate(45deg)", c.style.display = "none", u.firstElementChild.before(c));
  function d() {
    Nm(e, u, {
      placement: r,
      middleware: [
        $m(o),
        // 手动偏移配置
        Sm(i),
        //自动翻转
        Em(s),
        //自动偏移（使得浮动元素能够进入视野）
        ...l ? [Pm({ element: c })] : []
      ]
    }).then(({ x: k, y: m, placement: b, middlewareData: p }) => {
      if (Object.assign(u.style, {
        left: `${k}px`,
        top: `${m}px`
      }), l) {
        const { x: C, y: H } = p.arrow, S = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[b.split("-")[0]];
        Object.assign(c.style, {
          zIndex: -1,
          left: C != null ? `${C}px` : "",
          top: H != null ? `${H}px` : "",
          right: "",
          bottom: "",
          [S]: "2px"
        });
      }
    });
  }
  let f = !1;
  function h() {
    u.style.display = "block", u.style.visibility = "block", u.style.position = "absolute", l && (c.style.display = "block"), f = !0, d();
  }
  function v() {
    u.style.display = "none", l && (c.style.display = "none"), f = !1;
  }
  function _(k) {
    k.stopPropagation(), f ? v() : h();
  }
  function x(k) {
    u.contains(k.target) || v();
  }
  return (!t || t.length == 0) && (t = ["click"]), t.forEach((k) => {
    e.addEventListener(k, _);
  }), document.addEventListener("click", x), {
    destroy() {
      t.forEach((k) => {
        e.removeEventListener(k, _);
      }), document.removeEventListener("click", x);
    },
    hide() {
      v();
    },
    isVisible() {
      return f;
    }
  };
};
var Mm = /* @__PURE__ */ ie('<div style="position: relative"><div><!></div> <div style="display: none; width: 100%;z-index: 9999"><!></div></div>');
function Jr(e, t) {
  de(t, !0);
  const n = w(t, "children", 7), r = w(t, "floating", 7), o = w(t, "placement", 7, "bottom");
  let i, s, a;
  tn(() => (a = Tm({
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
  var u = Mm(), c = F(u), d = F(c);
  cr(d, n), Y(c), kn(c, (v) => i = v, () => i);
  var f = B(c, 2), h = F(f);
  return cr(h, r), Y(f), kn(f, (v) => s = v, () => s), Y(u), V(e, u), fe({
    hide: l,
    get children() {
      return n();
    },
    set children(v) {
      n(v), y();
    },
    get floating() {
      return r();
    },
    set floating(v) {
      r(v), y();
    },
    get placement() {
      return o();
    },
    set placement(v = "bottom") {
      o(v), y();
    }
  });
}
ue(Jr, { children: {}, floating: {}, placement: {} }, [], ["hide"], !0);
function Qe(e, t) {
  de(t, !0);
  const n = w(t, "children", 7), r = w(t, "level", 7, 1), o = w(t, "mt", 7), i = w(t, "mb", 7);
  var s = et(), a = we(s);
  return S1(a, () => `h${r()}`, !1, (l, u) => {
    let c;
    $e(() => c = Qt(l, c, {
      class: "tf-heading",
      style: `margin-top:${o() || "0"};margin-bottom:${i() || "0"}`
    }));
    var d = et(), f = we(d);
    cr(f, () => n() ?? gt), V(u, d);
  }), V(e, s), fe({
    get children() {
      return n();
    },
    set children(l) {
      n(l), y();
    },
    get level() {
      return r();
    },
    set level(l = 1) {
      r(l), y();
    },
    get mt() {
      return o();
    },
    set mt(l) {
      o(l), y();
    },
    get mb() {
      return i();
    },
    set mb(l) {
      i(l), y();
    }
  });
}
ue(Qe, { children: {}, level: {}, mt: {}, mb: {} }, [], [], !0);
var Hm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="svelte-1rvn4a8"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z" class="svelte-1rvn4a8"></path></svg>');
const Dm = {
  hash: "svelte-1rvn4a8",
  code: ".input-btn-more {border:1px solid transparent;padding:3px;&:hover {background:#eee;border:1px solid transparent;}}"
};
function ts(e, t) {
  de(t, !0), tt(e, Dm);
  const n = /* @__PURE__ */ xt(t, ["$$slots", "$$events", "$$legacy", "$$host"]);
  je(e, lt(() => n, {
    get class() {
      return `input-btn-more ${t.class ?? ""}`;
    },
    children: (r, o) => {
      var i = Hm();
      V(r, i);
    },
    $$slots: { default: !0 }
  })), fe();
}
ue(ts, {}, [], [], !0);
const Vm = () => {
  const e = We();
  return {
    deleteNode: (n) => {
      e.nodes.update((r) => r.filter((o) => o.id !== n)), e.edges.update(
        (r) => r.filter((o) => o.source !== n && o.target !== n)
      );
    }
  };
}, Fr = (e = 16) => {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = new Uint8Array(e);
  return crypto.getRandomValues(n), Array.from(n, (r) => t[r % t.length]).join("");
}, Am = () => {
  const { nodes: e, nodeLookup: t } = We();
  return {
    copyNode: (r) => {
      var s;
      const i = (s = K(t).get(r)) == null ? void 0 : s.internals.userNode;
      if (i) {
        const a = Fr(), l = {
          ...i,
          id: a,
          position: {
            x: i.position.x + 50,
            y: i.position.y + 50
          }
        };
        e.update((u) => [...u, l]), e.update(
          (u) => u.map(
            (c) => c.id === a ? { ...c, selected: !0 } : { ...c, selected: !1 }
          )
        );
      }
    }
  };
}, er = () => ur("tinyflow_options");
function ht() {
  return ur("svelteflow__node_id");
}
var Om = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>'), Lm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path></svg>'), Im = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 18.3915V5.60846L18.2264 12L8 18.3915ZM6 3.80421V20.1957C6 20.9812 6.86395 21.46 7.53 21.0437L20.6432 12.848C21.2699 12.4563 21.2699 11.5436 20.6432 11.152L7.53 2.95621C6.86395 2.53993 6 3.01878 6 3.80421Z"></path></svg>'), zm = /* @__PURE__ */ ie('<div class="input-item svelte-1jesvb7">执行条件： <!></div>'), Rm = (e, t, n) => {
  const r = e.target.checked;
  t(n, { async: r });
}, Bm = /* @__PURE__ */ ie('<div class="settings svelte-1jesvb7"><div class="input-item svelte-1jesvb7">节点名称： <!></div> <div class="input-item svelte-1jesvb7">参数描述： <!></div> <!> <label class="input-item-inline svelte-1jesvb7"><span>异步执行：</span> <input type="checkbox"></label></div>'), qm = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.33946 17.0002C2.90721 16.2515 2.58277 15.4702 2.36133 14.6741C3.3338 14.1779 3.99972 13.1668 3.99972 12.0002C3.99972 10.8345 3.3348 9.824 2.36353 9.32741C2.81025 7.71651 3.65857 6.21627 4.86474 4.99001C5.7807 5.58416 6.98935 5.65534 7.99972 5.072C9.01009 4.48866 9.55277 3.40635 9.4962 2.31604C11.1613 1.8846 12.8847 1.90004 14.5031 2.31862C14.4475 3.40806 14.9901 4.48912 15.9997 5.072C17.0101 5.65532 18.2187 5.58416 19.1346 4.99007C19.7133 5.57986 20.2277 6.25151 20.66 7.00021C21.0922 7.7489 21.4167 8.53025 21.6381 9.32628C20.6656 9.82247 19.9997 10.8336 19.9997 12.0002C19.9997 13.166 20.6646 14.1764 21.6359 14.673C21.1892 16.2839 20.3409 17.7841 19.1347 19.0104C18.2187 18.4163 17.0101 18.3451 15.9997 18.9284C14.9893 19.5117 14.4467 20.5941 14.5032 21.6844C12.8382 22.1158 11.1148 22.1004 9.49633 21.6818C9.55191 20.5923 9.00929 19.5113 7.99972 18.9284C6.98938 18.3451 5.78079 18.4162 4.86484 19.0103C4.28617 18.4205 3.77172 17.7489 3.33946 17.0002ZM8.99972 17.1964C10.0911 17.8265 10.8749 18.8227 11.2503 19.9659C11.7486 20.0133 12.2502 20.014 12.7486 19.9675C13.1238 18.8237 13.9078 17.8268 14.9997 17.1964C16.0916 16.5659 17.347 16.3855 18.5252 16.6324C18.8146 16.224 19.0648 15.7892 19.2729 15.334C18.4706 14.4373 17.9997 13.2604 17.9997 12.0002C17.9997 10.74 18.4706 9.5632 19.2729 8.6665C19.1688 8.4405 19.0538 8.21822 18.9279 8.00021C18.802 7.78219 18.667 7.57148 18.5233 7.36842C17.3457 7.61476 16.0911 7.43414 14.9997 6.80405C13.9083 6.17395 13.1246 5.17768 12.7491 4.03455C12.2509 3.98714 11.7492 3.98646 11.2509 4.03292C10.8756 5.17671 10.0916 6.17364 8.99972 6.80405C7.9078 7.43447 6.65245 7.61494 5.47428 7.36803C5.18485 7.77641 4.93463 8.21117 4.72656 8.66637C5.52881 9.56311 5.99972 10.74 5.99972 12.0002C5.99972 13.2604 5.52883 14.4372 4.72656 15.3339C4.83067 15.5599 4.94564 15.7822 5.07152 16.0002C5.19739 16.2182 5.3324 16.4289 5.47612 16.632C6.65377 16.3857 7.90838 16.5663 8.99972 17.1964ZM11.9997 15.0002C10.3429 15.0002 8.99972 13.6571 8.99972 12.0002C8.99972 10.3434 10.3429 9.00021 11.9997 9.00021C13.6566 9.00021 14.9997 10.3434 14.9997 12.0002C14.9997 13.6571 13.6566 15.0002 11.9997 15.0002ZM11.9997 13.0002C12.552 13.0002 12.9997 12.5525 12.9997 12.0002C12.9997 11.4479 12.552 11.0002 11.9997 11.0002C11.4474 11.0002 10.9997 11.4479 10.9997 12.0002C10.9997 12.5525 11.4474 13.0002 11.9997 13.0002Z"></path></svg>'), Ym = /* @__PURE__ */ ie('<div class="tf-node-toolbar svelte-1jesvb7"><!> <!> <!> <!></div>'), Zm = /* @__PURE__ */ ie('<!> <div class="tf-node-wrapper"><div class="tf-node-wrapper-title">TinyFlow.ai</div> <div class="tf-node-wrapper-body"><!></div></div> <!> <!> <!>', 1);
const Fm = {
  hash: "svelte-1jesvb7",
  code: ".tf-node-toolbar.svelte-1jesvb7 {display:flex;gap:5px;padding:5px;border-radius:5px;background:#fff;border:1px solid #eee;box-shadow:0 0 5px rgba(0, 0, 0, 0.1);}.tf-node-toolbar-item {border:1px solid transparent;}.settings.svelte-1jesvb7 {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.settings.svelte-1jesvb7 .input-item:where(.svelte-1jesvb7) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}.settings.svelte-1jesvb7 .input-item-inline:where(.svelte-1jesvb7) {display:flex;align-items:center;font-size:12px;color:#666;}"
};
function vn(e, t) {
  de(t, !0), tt(e, Fm);
  const n = w(t, "data", 7), r = w(t, "id", 7, ""), o = w(t, "icon", 7), i = w(t, "handle", 7), s = w(t, "children", 7), a = w(t, "allowExecute", 7, !0), l = w(t, "allowCopy", 7, !0), u = w(t, "allowDelete", 7, !0), c = w(t, "allowSetting", 7, !0), d = w(t, "allowSettingOfCondition", 7, !0), f = w(t, "showSourceHandle", 7, !0), h = w(t, "showTargetHandle", 7, !0), v = w(t, "onCollapse", 7);
  let _ = n().expand ? ["key"] : [];
  const { updateNodeData: x, getNode: k } = Lt(), m = /* @__PURE__ */ Ne(() => [
    {
      key: "key",
      icon: o(),
      title: n().title,
      description: n().description,
      content: s()
    }
  ]), { deleteNode: b } = Vm(), { copyNode: p } = Am(), C = er(), H = () => {
    var M;
    (M = C.onNodeExecute) == null || M.call(C, k(r()));
  };
  let S = ht();
  var D = Zm(), L = we(D);
  {
    var A = (M) => {
      md(M, {
        get position() {
          return He.Top;
        },
        align: "end",
        children: (z, q) => {
          var X = Ym(), U = F(X);
          {
            var G = (Q) => {
              je(Q, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  b(r());
                },
                children: (re, Ee) => {
                  var _e = Om();
                  V(re, _e);
                },
                $$slots: { default: !0 }
              });
            };
            pe(U, (Q) => {
              u() && Q(G);
            });
          }
          var W = B(U, 2);
          {
            var le = (Q) => {
              je(Q, {
                class: "tf-node-toolbar-item",
                onclick: () => {
                  p(r());
                },
                children: (re, Ee) => {
                  var _e = Lm();
                  V(re, _e);
                },
                $$slots: { default: !0 }
              });
            };
            pe(W, (Q) => {
              l() && Q(le);
            });
          }
          var ye = B(W, 2);
          {
            var ge = (Q) => {
              je(Q, {
                class: "tf-node-toolbar-item",
                onclick: H,
                children: (re, Ee) => {
                  var _e = Im();
                  V(re, _e);
                },
                $$slots: { default: !0 }
              });
            };
            pe(ye, (Q) => {
              a() && Q(ge);
            });
          }
          var oe = B(ye, 2);
          {
            var Te = (Q) => {
              Jr(Q, {
                placement: "bottom",
                floating: (Ee) => {
                  var _e = Bm(), me = F(_e), j = B(F(me));
                  vt(j, {
                    style: "width: 100%;",
                    onchange: (Se) => {
                      const Ke = Se.target.value;
                      x(S, { title: Ke });
                    },
                    get value() {
                      return n().title;
                    }
                  }), Y(me);
                  var Pe = B(me, 2), Oe = B(F(Pe));
                  pt(Oe, {
                    rows: 3,
                    style: "width: 100%;",
                    onchange: (Se) => {
                      const Ke = Se.target.value;
                      x(S, { description: Ke });
                    },
                    get value() {
                      return n().description;
                    }
                  }), Y(Pe);
                  var Le = B(Pe, 2);
                  {
                    var ae = (Se) => {
                      var Ke = zm(), ut = B(F(Ke));
                      pt(ut, {
                        rows: 2,
                        style: "width: 100%;",
                        onchange: (te) => {
                          const Ze = te.target.value;
                          x(S, { condition: Ze });
                        },
                        get value() {
                          return n().condition;
                        }
                      }), Y(Ke), V(Se, Ke);
                    };
                    pe(Le, (Se) => {
                      d() && Se(ae);
                    });
                  }
                  var ve = B(Le, 2), Me = B(F(ve), 2);
                  ar(Me), Me.__change = [Rm, x, S], Y(ve), Y(_e), $e(() => M1(Me, !!n().async)), V(Ee, _e);
                },
                children: (Ee, _e) => {
                  je(Ee, {
                    class: "tf-node-toolbar-item",
                    children: (me, j) => {
                      var Pe = qm();
                      V(me, Pe);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { floating: !0, default: !0 }
              });
            };
            pe(oe, (Q) => {
              c() && Q(Te);
            });
          }
          Y(X), V(z, X);
        },
        $$slots: { default: !0 }
      });
    };
    pe(L, (M) => {
      (a() || l() || u()) && M(A);
    });
  }
  var I = B(L, 2), O = B(F(I), 2), R = F(O);
  _d(R, {
    get items() {
      return g(m);
    },
    activeKeys: _,
    onChange: (M, z) => {
      var q;
      x(r(), { expand: z == null ? void 0 : z.includes("key") }), (q = v()) == null || q(z != null && z.includes("key") ? "key" : "");
    }
  }), Y(O), Y(I);
  var E = B(I, 2);
  {
    var N = (M) => {
      Jn(M, {
        type: "target",
        get position() {
          return He.Left;
        },
        style: " left: -12px;top: 20px"
      });
    };
    pe(E, (M) => {
      h() && M(N);
    });
  }
  var $ = B(E, 2);
  {
    var T = (M) => {
      Jn(M, {
        type: "source",
        get position() {
          return He.Right;
        },
        style: "right: -12px;top: 20px"
      });
    };
    pe($, (M) => {
      f() && M(T);
    });
  }
  var P = B($, 2);
  return cr(P, () => i() ?? gt), V(e, D), fe({
    get data() {
      return n();
    },
    set data(M) {
      n(M), y();
    },
    get id() {
      return r();
    },
    set id(M = "") {
      r(M), y();
    },
    get icon() {
      return o();
    },
    set icon(M) {
      o(M), y();
    },
    get handle() {
      return i();
    },
    set handle(M) {
      i(M), y();
    },
    get children() {
      return s();
    },
    set children(M) {
      s(M), y();
    },
    get allowExecute() {
      return a();
    },
    set allowExecute(M = !0) {
      a(M), y();
    },
    get allowCopy() {
      return l();
    },
    set allowCopy(M = !0) {
      l(M), y();
    },
    get allowDelete() {
      return u();
    },
    set allowDelete(M = !0) {
      u(M), y();
    },
    get allowSetting() {
      return c();
    },
    set allowSetting(M = !0) {
      c(M), y();
    },
    get allowSettingOfCondition() {
      return d();
    },
    set allowSettingOfCondition(M = !0) {
      d(M), y();
    },
    get showSourceHandle() {
      return f();
    },
    set showSourceHandle(M = !0) {
      f(M), y();
    },
    get showTargetHandle() {
      return h();
    },
    set showTargetHandle(M = !0) {
      h(M), y();
    },
    get onCollapse() {
      return v();
    },
    set onCollapse(M) {
      v(M), y();
    }
  });
}
jr(["change"]);
ue(
  vn,
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
const Dd = [
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
], Xm = [
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
var Wm = /* @__PURE__ */ ie('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">参数类型： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), Km = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.5 10.5C3.675 10.5 3 11.175 3 12C3 12.825 3.675 13.5 4.5 13.5C5.325 13.5 6 12.825 6 12C6 11.175 5.325 10.5 4.5 10.5ZM19.5 10.5C18.675 10.5 18 11.175 18 12C18 12.825 18.675 13.5 19.5 13.5C20.325 13.5 21 12.825 21 12C21 11.175 20.325 10.5 19.5 10.5ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5Z"></path></svg>'), Gm = /* @__PURE__ */ ie('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const jm = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Vd(e, t) {
  de(t, !0), tt(e, jm);
  const [n, r] = rt(), o = () => ne(g(l), "$node", n), i = w(t, "parameter", 7), s = w(t, "index", 7);
  let a = ht(), l = /* @__PURE__ */ Ne(() => yr(a)), u = /* @__PURE__ */ Ne(() => {
    var L, A;
    return {
      ...i(),
      ...(A = (L = o()) == null ? void 0 : L.data) == null ? void 0 : A.parameters[s()]
    };
  });
  const { updateNodeData: c } = Lt(), d = (L, A) => {
    c(a, (I) => {
      let O = I.data.parameters;
      return O[s()][L] = A, { parameters: O };
    });
  }, f = (L) => {
    const A = L.target.value;
    d("name", A);
  }, h = (L) => {
    const A = L.target.checked;
    d("required", A);
  }, v = (L) => {
    const A = L.value;
    A && d("dataType", A);
  };
  let _;
  const x = () => {
    c(a, (L) => {
      let A = L.data.parameters;
      return A.splice(s(), 1), { parameters: [...A] };
    }), _ == null || _.hide();
  };
  var k = Gm(), m = we(k), b = F(m);
  vt(b, {
    style: "width: 100%;",
    get value() {
      return g(u).name;
    },
    placeholder: "请输入参数名称",
    oninput: f
  }), Y(m);
  var p = B(m, 2), C = F(p);
  yd(C, {
    get checked() {
      return g(u).required;
    },
    onchange: h
  }), Y(p);
  var H = B(p, 2), S = F(H);
  kn(
    Jr(S, {
      placement: "bottom",
      floating: (A) => {
        var I = Wm(), O = F(I), R = B(F(O));
        const E = /* @__PURE__ */ Ne(() => g(u).dataType ? [g(u).dataType] : ["String"]);
        en(R, {
          items: Dd,
          style: "width: 100%",
          onSelect: v,
          get value() {
            return g(E);
          }
        }), Y(O);
        var N = B(O, 2), $ = B(F(N));
        pt($, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(u).defaultValue;
          },
          onchange: (q) => {
            const X = q.target.value;
            d("defaultValue", X);
          }
        }), Y(N);
        var T = B(N, 2), P = B(F(T));
        pt(P, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(u).description;
          },
          onchange: (q) => {
            const X = q.target.value;
            d("description", X);
          }
        }), Y(T);
        var M = B(T, 2), z = F(M);
        je(z, {
          onclick: x,
          children: (q, X) => {
            Ae();
            var U = Ye("删除");
            V(q, U);
          },
          $$slots: { default: !0 }
        }), Y(M), Y(I), V(A, I);
      },
      children: (A, I) => {
        je(A, {
          class: "input-btn-more",
          children: (O, R) => {
            var E = Km();
            V(O, E);
          },
          $$slots: { default: !0 }
        });
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (A) => _ = A,
    () => _
  ), Y(H), V(e, k);
  var D = fe({
    get parameter() {
      return i();
    },
    set parameter(L) {
      i(L), y();
    },
    get index() {
      return s();
    },
    set index(L) {
      s(L), y();
    }
  });
  return r(), D;
}
ue(Vd, { parameter: {}, index: {} }, [], [], !0);
var Um = /* @__PURE__ */ ie('<div class="input-header svelte-3n0wca">参数名称</div> <div class="input-header svelte-3n0wca">必填</div> <div class="input-header svelte-3n0wca"></div>', 1), Jm = /* @__PURE__ */ ie('<div class="none-params svelte-3n0wca">无输入参数</div>'), Qm = /* @__PURE__ */ ie('<div class="input-container svelte-3n0wca"><!> <!></div>');
const ey = {
  hash: "svelte-3n0wca",
  code: `.input-container.svelte-3n0wca {display:grid;grid-template-columns:80% 10% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-3n0wca .none-params:where(.svelte-3n0wca) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-3n0wca .input-header:where(.svelte-3n0wca) {font-size:12px;color:#666;}`
};
function Ad(e, t) {
  de(t, !0), tt(e, ey);
  const [n, r] = rt(), o = () => ne(g(s), "$node", n);
  let i = ht(), s = /* @__PURE__ */ Ne(() => yr(i)), a = /* @__PURE__ */ Ne(() => {
    var f, h;
    return [...((h = (f = o()) == null ? void 0 : f.data) == null ? void 0 : h.parameters) || []];
  });
  var l = Qm(), u = F(l);
  {
    var c = (f) => {
      var h = Um();
      Ae(4), V(f, h);
    };
    pe(u, (f) => {
      g(a).length !== 0 && f(c);
    });
  }
  var d = B(u, 2);
  Tt(
    d,
    19,
    () => g(a),
    (f) => f.id,
    (f, h, v) => {
      Vd(f, {
        get parameter() {
          return g(h);
        },
        get index() {
          return g(v);
        }
      });
    },
    (f) => {
      var h = Jm();
      V(f, h);
    }
  ), Y(l), V(e, l), fe(), r();
}
ue(Ad, {}, [], [], !0);
const Ti = (e) => (!e || e.length == 0 || e.forEach((t) => {
  t.id || (t.id = Fr()), Ti(t.children);
}), e), Pn = () => {
  const { updateNodeData: e } = Lt();
  return {
    addParameter: (t, n = "parameters", r) => {
      Ti(r == null ? void 0 : r.children);
      const o = {
        ...r,
        id: Fr()
      };
      e(t, (i) => {
        let s = i.data[n];
        return s ? s.push(o) : s = [o], {
          [n]: [...s]
        };
      });
    }
  };
};
var ty = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z"></path></svg>'), ny = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ry = /* @__PURE__ */ ie('<div class="heading svelte-r5g35l"><!> <!></div> <!>', 1);
const oy = {
  hash: "svelte-r5g35l",
  code: ".heading.svelte-r5g35l {display:flex;margin-bottom:10px;}.input-btn-more {border:1px solid transparent;padding:3px;}.input-btn-more:hover {background:#eee;border:1px solid transparent;}"
};
function Od(e, t) {
  de(t, !0), tt(e, oy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ xt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Pn();
  return vn(e, lt(() => r, {
    get data() {
      return n();
    },
    allowExecute: !1,
    showTargetHandle: !1,
    allowSettingOfCondition: !1,
    icon: (a) => {
      var l = ty();
      V(a, l);
    },
    children: (a, l) => {
      var u = ry(), c = we(u), d = F(c);
      Qe(d, {
        level: 3,
        children: (v, _) => {
          Ae();
          var x = Ye("输入参数");
          V(v, x);
        },
        $$slots: { default: !0 }
      });
      var f = B(d, 2);
      je(f, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: () => {
          i(o);
        },
        children: (v, _) => {
          var x = ny();
          V(v, x);
        },
        $$slots: { default: !0 }
      }), Y(c);
      var h = B(c, 2);
      Ad(h, {}), V(a, u);
    },
    $$slots: { icon: !0, default: !0 }
  })), fe({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
ue(Od, { data: {} }, [], [], !0);
const Ld = (e, t, n) => {
  for (let r of n)
    r.target === t && r.source && (e.push(r.source), Ld(e, r.source, n));
}, Kl = (e, t) => {
  if (e.type === "startNode") {
    const n = e.data.parameters, r = [];
    if (n)
      for (const o of n)
        r.push({
          label: o.name + (t ? ` (Array<${o.dataType || "String"}>)` : ` (${o.dataType || "String"})`),
          value: e.id + "." + o.name
        });
    return {
      label: e.data.title,
      value: e.id,
      children: r
    };
  } else {
    if (e.type === "loopNode" && t)
      return {
        label: e.data.title,
        value: e.id,
        children: [
          {
            label: "loopItem",
            value: e.id + ".loop"
          },
          {
            label: "index (Number)",
            value: e.id + ".index"
          }
        ]
      };
    {
      const n = e.data.outputDefs;
      if (n) {
        const r = (o, i) => !o || o.length === 0 ? [] : o.map((s) => ({
          label: s.name + (t ? ` (Array<${s.dataType || "String"}>)` : ` (${s.dataType || "String"})`),
          // label: param.name ,
          value: i + "." + s.name,
          children: r(s.children, i + "." + s.name)
        }));
        return {
          label: e.data.title,
          value: e.id,
          children: r(n, e.id)
        };
      }
    }
  }
}, iy = (e = !1) => {
  const t = ht(), n = yr(t), { nodes: r, edges: o } = We();
  return Kn([n, r, o], ([i, s, a]) => {
    const l = [];
    if (e) {
      for (let u of s)
        if (u.parentId === i.id) {
          const c = Kl(u, u.parentId === i.id);
          c && l.push(c);
        }
    } else {
      const u = [];
      Ld(u, t, a);
      for (let c of s)
        if (u.includes(c.id)) {
          const d = Kl(c, c.parentId === i.id);
          d && l.push(d);
        }
    }
    return l;
  });
};
var sy = /* @__PURE__ */ ie('<div class="input-more-setting svelte-laou7w"><div class="input-more-item svelte-laou7w">数据来源： <!></div> <div class="input-more-item svelte-laou7w">默认值： <!></div> <div class="input-more-item svelte-laou7w">参数描述： <!></div> <div class="input-more-item svelte-laou7w"><!></div></div>'), ay = /* @__PURE__ */ ie('<div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div> <div class="input-item svelte-laou7w"><!></div>', 1);
const ly = {
  hash: "svelte-laou7w",
  code: ".input-item.svelte-laou7w {display:flex;align-items:center;}.input-more-setting.svelte-laou7w {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-laou7w .input-more-item:where(.svelte-laou7w) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Id(e, t) {
  de(t, !0), tt(e, ly);
  const [n, r] = rt(), o = () => ne(g(c), "$node", n), i = () => ne(b, "$selectItems", n);
  tn(() => {
    g(d).refType || x({ value: "ref" });
  });
  const s = w(t, "parameter", 7), a = w(t, "index", 7), l = w(t, "dataKeyName", 7);
  let u = ht(), c = /* @__PURE__ */ Ne(() => yr(u)), d = /* @__PURE__ */ Ne(() => {
    var N;
    return {
      ...s(),
      ...(N = o()) == null ? void 0 : N.data[l()][a()]
    };
  });
  const { updateNodeData: f } = Lt(), h = (N, $) => {
    f(u, (T) => {
      let P = T.data[l()];
      return P[a()] = { ...P[a()], [N]: $ }, { [l()]: P };
    });
  }, v = (N, $) => {
    const T = $.target.value;
    h(N, T);
  }, _ = (N) => {
    const $ = N.value;
    h("ref", $);
  }, x = (N) => {
    const $ = N.value;
    h("refType", $);
  };
  let k;
  const m = () => {
    f(u, (N) => {
      let $ = N.data[l()];
      return $.splice(a(), 1), { [l()]: [...$] };
    }), k == null || k.hide();
  }, b = iy();
  var p = ay(), C = we(p), H = F(C);
  const S = /* @__PURE__ */ Ne(() => g(d).nameDisabled === !0);
  vt(H, {
    style: "width: 100%;",
    get value() {
      return g(d).name;
    },
    placeholder: "请输入参数名称",
    get disabled() {
      return g(S);
    },
    oninput: (N) => v("name", N)
  }), Y(C);
  var D = B(C, 2), L = F(D);
  {
    var A = (N) => {
      vt(N, {
        get value() {
          return g(d).value;
        },
        placeholder: "请输入参数值",
        oninput: ($) => v("value", $)
      });
    }, I = (N, $) => {
      {
        var T = (P) => {
          const M = /* @__PURE__ */ Ne(() => [g(d).ref]);
          en(P, {
            get items() {
              return i();
            },
            style: "width: 100%",
            defaultValue: ["ref"],
            get value() {
              return g(M);
            },
            expandAll: !0,
            onSelect: _
          });
        };
        pe(
          N,
          (P) => {
            g(d).refType !== "input" && P(T);
          },
          $
        );
      }
    };
    pe(L, (N) => {
      g(d).refType === "fixed" ? N(A) : N(I, !1);
    });
  }
  Y(D);
  var O = B(D, 2), R = F(O);
  kn(
    Jr(R, {
      placement: "bottom",
      floating: ($) => {
        var T = sy(), P = F(T), M = B(F(P));
        const z = /* @__PURE__ */ Ne(() => g(d).refType ? [g(d).refType] : []);
        en(M, {
          items: Xm,
          style: "width: 100%",
          defaultValue: ["ref"],
          get value() {
            return g(z);
          },
          onSelect: x
        }), Y(P);
        var q = B(P, 2), X = B(F(q));
        pt(X, {
          rows: 1,
          style: "width: 100%;",
          onchange: (ye) => {
            v("defaultValue", ye);
          },
          get value() {
            return g(d).defaultValue;
          }
        }), Y(q);
        var U = B(q, 2), G = B(F(U));
        pt(G, {
          rows: 3,
          style: "width: 100%;",
          onchange: (ye) => {
            v("description", ye);
          },
          get value() {
            return g(d).description;
          }
        }), Y(U);
        var W = B(U, 2), le = F(W);
        je(le, {
          onclick: m,
          children: (ye, ge) => {
            Ae();
            var oe = Ye("删除");
            V(ye, oe);
          },
          $$slots: { default: !0 }
        }), Y(W), Y(T), V($, T);
      },
      children: ($, T) => {
        ts($, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    ($) => k = $,
    () => k
  ), Y(O), V(e, p);
  var E = fe({
    get parameter() {
      return s();
    },
    set parameter(N) {
      s(N), y();
    },
    get index() {
      return a();
    },
    set index(N) {
      a(N), y();
    },
    get dataKeyName() {
      return l();
    },
    set dataKeyName(N) {
      l(N), y();
    }
  });
  return r(), E;
}
ue(Id, { parameter: {}, index: {}, dataKeyName: {} }, [], [], !0);
var uy = /* @__PURE__ */ ie('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数值</div> <div class="input-header svelte-1sm1mgi"></div>', 1), cy = /* @__PURE__ */ ie('<div class="none-params svelte-1sm1mgi"> </div>'), dy = /* @__PURE__ */ ie('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const fy = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function qt(e, t) {
  de(t, !0), tt(e, fy);
  const [n, r] = rt(), o = () => ne(g(l), "$node", n), i = w(t, "noneParameterText", 7, "无输入参数"), s = w(t, "dataKeyName", 7, "parameters");
  let a = ht(), l = /* @__PURE__ */ Ne(() => yr(a)), u = /* @__PURE__ */ Ne(() => {
    var _;
    return [...((_ = o()) == null ? void 0 : _.data[s()]) || []];
  });
  var c = dy(), d = F(c);
  {
    var f = (_) => {
      var x = uy();
      Ae(4), V(_, x);
    };
    pe(d, (_) => {
      g(u).length !== 0 && _(f);
    });
  }
  var h = B(d, 2);
  Tt(
    h,
    19,
    () => g(u),
    (_) => _.id,
    (_, x, k) => {
      Id(_, {
        get parameter() {
          return g(x);
        },
        get index() {
          return g(k);
        },
        get dataKeyName() {
          return s();
        }
      });
    },
    (_) => {
      var x = cy(), k = F(x, !0);
      Y(x), $e(() => dt(k, i())), V(_, x);
    }
  ), Y(c), V(e, c);
  var v = fe({
    get noneParameterText() {
      return i();
    },
    set noneParameterText(_ = "无输入参数") {
      i(_), y();
    },
    get dataKeyName() {
      return s();
    },
    set dataKeyName(_ = "parameters") {
      s(_), y();
    }
  });
  return r(), v;
}
ue(qt, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var gy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>'), hy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), vy = /* @__PURE__ */ ie('<div class="heading svelte-11h445j"><!> <!></div> <!>', 1);
const py = {
  hash: "svelte-11h445j",
  code: ".heading.svelte-11h445j {display:flex;margin-bottom:10px;}"
};
function zd(e, t) {
  de(t, !0), tt(e, py);
  const n = w(t, "data", 7), r = /* @__PURE__ */ xt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Pn();
  return vn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      allowExecute: !1,
      showSourceHandle: !1,
      icon: (a) => {
        var l = gy();
        V(a, l);
      },
      children: (a, l) => {
        var u = vy(), c = we(u), d = F(c);
        Qe(d, {
          level: 3,
          children: (v, _) => {
            Ae();
            var x = Ye("输出参数");
            V(v, x);
          },
          $$slots: { default: !0 }
        });
        var f = B(d, 2);
        je(f, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (v, _) => {
            var x = hy();
            V(v, x);
          },
          $$slots: { default: !0 }
        }), Y(c);
        var h = B(c, 2);
        qt(h, {
          noneParameterText: "无输出参数",
          dataKeyName: "outputDefs"
        }), V(a, u);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
ue(zd, { data: {} }, [], [], !0);
var my = /* @__PURE__ */ ke('<svg style="transform: scaleY(-1)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13 8V16C13 17.6569 11.6569 19 10 19H7.82929C7.41746 20.1652 6.30622 21 5 21C3.34315 21 2 19.6569 2 18C2 16.3431 3.34315 15 5 15C6.30622 15 7.41746 15.8348 7.82929 17H10C10.5523 17 11 16.5523 11 16V8C11 6.34315 12.3431 5 14 5H17V2L22 6L17 10V7H14C13.4477 7 13 7.44772 13 8ZM5 19C5.55228 19 6 18.5523 6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19Z"></path></svg>'), yy = /* @__PURE__ */ ie('<div class="input-more-item svelte-1cfeest"><!></div>'), wy = /* @__PURE__ */ ie('<div class="input-more-setting svelte-1cfeest"><div class="input-more-item svelte-1cfeest">默认值： <!></div> <div class="input-more-item svelte-1cfeest">参数描述： <!></div> <!></div>'), _y = /* @__PURE__ */ ie('<div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!> <!></div> <div class="input-item svelte-1cfeest"><!></div>', 1);
const xy = {
  hash: "svelte-1cfeest",
  code: ".input-item.svelte-1cfeest {display:flex;align-items:center;gap:2px;}.input-more-setting.svelte-1cfeest {display:flex;flex-direction:column;gap:10px;padding:10px;background:#fff;border:1px solid #ddd;border-radius:5px;width:200px;box-shadow:0 0 10px 2px rgba(0, 0, 0, 0.1);}.input-more-setting.svelte-1cfeest .input-more-item:where(.svelte-1cfeest) {display:flex;flex-direction:column;gap:3px;font-size:12px;color:#666;}"
};
function Rd(e, t) {
  de(t, !0), tt(e, xy);
  const [n, r] = rt(), o = () => ne(g(u), "$node", n), i = w(t, "parameter", 7), s = w(t, "position", 7), a = w(t, "dataKeyName", 7);
  let l = ht(), u = /* @__PURE__ */ Ne(() => yr(l)), c = /* @__PURE__ */ Ne(() => {
    var M;
    let T = (M = o()) == null ? void 0 : M.data[a()], P;
    if (T && s().length > 0) {
      let z = T;
      for (let q = 0; q < s().length; q++) {
        const X = s()[q];
        q == s().length - 1 ? P = z[X] : z = z[X].children;
      }
    }
    return { ...i(), ...P };
  });
  const { updateNodeData: d } = Lt(), f = (T, P) => {
    d(l, (M) => {
      const z = M.data[a()];
      if (z && s().length > 0) {
        let q = z;
        for (let X = 0; X < s().length; X++) {
          const U = s()[X];
          X == s().length - 1 ? q[U] = { ...q[U], [T]: P } : q = z[U].children;
        }
      }
      return { [a()]: z };
    });
  }, h = (T) => {
    const P = T.target.value;
    f("name", P);
  }, v = (T) => {
    const P = T.value;
    f("dataType", P);
  };
  let _;
  const x = () => {
    d(l, (T) => {
      let P = T.data[a()];
      if (P && s().length > 0) {
        let M = P;
        for (let z = 0; z < s().length; z++) {
          const q = s()[z];
          z == s().length - 1 ? M.splice(q, 1) : M = M[q].children;
        }
      }
      return { [a()]: [...P] };
    }), _ == null || _.hide();
  }, k = () => {
    d(l, (T) => {
      let P = T.data[a()];
      if (P && s().length > 0) {
        let M = P;
        for (let z = 0; z < s().length; z++) {
          const q = s()[z];
          z == s().length - 1 ? M[q].children ? M[q].children.push({
            id: Fr(),
            name: "newParam",
            dataType: "String"
          }) : M[q].children = [
            {
              id: Fr(),
              name: "newParam",
              dataType: "String"
            }
          ] : M = M[q].children;
        }
      }
      return { [a()]: [...P] };
    });
  };
  var m = _y(), b = we(m), p = F(b);
  {
    var C = (T) => {
      var P = et(), M = we(P);
      Tt(M, 17, s, Or, (z, q) => {
        Ae();
        var X = Ye(" ");
        V(z, X);
      }), V(T, P);
    };
    pe(p, (T) => {
      s().length > 1 && T(C);
    });
  }
  var H = B(p, 2);
  const S = /* @__PURE__ */ Ne(() => g(c).nameDisabled === !0);
  vt(H, {
    style: "width: 100%;",
    get value() {
      return g(c).name;
    },
    placeholder: "请输入参数名称",
    oninput: h,
    get disabled() {
      return g(S);
    }
  }), Y(b);
  var D = B(b, 2), L = F(D);
  const A = /* @__PURE__ */ Ne(() => g(c).dataType ? [g(c).dataType] : []), I = /* @__PURE__ */ Ne(() => g(c).dataTypeDisabled === !0);
  en(L, {
    items: Dd,
    style: "width: 100%",
    defaultValue: ["String"],
    get value() {
      return g(A);
    },
    get disabled() {
      return g(I);
    },
    onSelect: v
  });
  var O = B(L, 2);
  {
    var R = (T) => {
      je(T, {
        class: "input-btn-more",
        style: "margin-left: auto",
        onclick: k,
        children: (P, M) => {
          var z = my();
          V(P, z);
        },
        $$slots: { default: !0 }
      });
    };
    pe(O, (T) => {
      (g(c).dataType === "Object" || g(c).dataType === "Array") && g(c).addChildDisabled !== !0 && T(R);
    });
  }
  Y(D);
  var E = B(D, 2), N = F(E);
  kn(
    Jr(N, {
      placement: "bottom",
      floating: (P) => {
        var M = wy(), z = F(M), q = B(F(z));
        const X = /* @__PURE__ */ Ne(() => g(c).defaultValue || "");
        pt(q, {
          rows: 1,
          style: "width: 100%;",
          get value() {
            return g(X);
          },
          onchange: (ge) => {
            const oe = ge.target.value;
            f("defaultValue", oe);
          }
        }), Y(z);
        var U = B(z, 2), G = B(F(U));
        const W = /* @__PURE__ */ Ne(() => g(c).description || "");
        pt(G, {
          rows: 3,
          style: "width: 100%;",
          get value() {
            return g(W);
          },
          onchange: (ge) => {
            const oe = ge.target.value;
            f("description", oe);
          }
        }), Y(U);
        var le = B(U, 2);
        {
          var ye = (ge) => {
            var oe = yy(), Te = F(oe);
            je(Te, {
              onclick: x,
              children: (Q, re) => {
                Ae();
                var Ee = Ye("删除");
                V(Q, Ee);
              },
              $$slots: { default: !0 }
            }), Y(oe), V(ge, oe);
          };
          pe(le, (ge) => {
            g(c).deleteDisabled !== !0 && ge(ye);
          });
        }
        Y(M), V(P, M);
      },
      children: (P, M) => {
        ts(P, {});
      },
      $$slots: { floating: !0, default: !0 }
    }),
    (P) => _ = P,
    () => _
  ), Y(E), V(e, m);
  var $ = fe({
    get parameter() {
      return i();
    },
    set parameter(T) {
      i(T), y();
    },
    get position() {
      return s();
    },
    set position(T) {
      s(T), y();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(T) {
      a(T), y();
    }
  });
  return r(), $;
}
ue(Rd, { parameter: {}, position: {}, dataKeyName: {} }, [], [], !0);
var by = /* @__PURE__ */ ie("<!> <!>", 1), Cy = /* @__PURE__ */ ie('<div class="none-params svelte-1sm1mgi"> </div>'), ky = /* @__PURE__ */ ie('<div class="input-header svelte-1sm1mgi">参数名称</div> <div class="input-header svelte-1sm1mgi">参数类型</div> <div class="input-header svelte-1sm1mgi"></div>', 1), $y = /* @__PURE__ */ ie('<div class="input-container svelte-1sm1mgi"><!> <!></div>');
const Ey = {
  hash: "svelte-1sm1mgi",
  code: `.input-container.svelte-1sm1mgi {display:grid;grid-template-columns:40% 50% 10%;row-gap:5px;column-gap:3px;}.input-container.svelte-1sm1mgi .none-params:where(.svelte-1sm1mgi) {font-size:12px;background:#f8f8f8;height:40px;display:flex;justify-content:center;align-items:center;border-radius:5px;width:calc(100% - 5px);grid-column:1 / -1;
  /* 从第一列开始到最后一列结束 */}.input-container.svelte-1sm1mgi .input-header:where(.svelte-1sm1mgi) {font-size:12px;color:#666;}`
};
function Bn(e, t) {
  de(t, !0), tt(e, Ey);
  const [n, r] = rt(), o = () => ne(g(u), "$node", n), i = (x, k = gt, m = gt) => {
    var b = et(), p = we(b);
    Tt(
      p,
      19,
      k,
      (C) => `${C.id}_${C.children ? C.children.length : 0}`,
      (C, H, S) => {
        var D = by(), L = we(D);
        const A = /* @__PURE__ */ Ne(() => [...m(), g(S)]);
        Rd(L, {
          get parameter() {
            return g(H);
          },
          get position() {
            return g(A);
          },
          get dataKeyName() {
            return a();
          }
        });
        var I = B(L, 2);
        {
          var O = (R) => {
            var E = /* @__PURE__ */ xe(() => [...m(), g(S)]);
            i(R, () => g(H).children, () => g(E));
          };
          pe(I, (R) => {
            g(H).children && R(O);
          });
        }
        V(C, D);
      },
      (C) => {
        var H = et(), S = we(H);
        {
          var D = (L) => {
            var A = Cy(), I = F(A, !0);
            Y(A), $e(() => dt(I, s())), V(L, A);
          };
          pe(S, (L) => {
            m().length === 0 && L(D);
          });
        }
        V(C, H);
      }
    ), V(x, b);
  }, s = w(t, "noneParameterText", 7, "无输出参数"), a = w(t, "dataKeyName", 7, "outputDefs");
  let l = ht(), u = /* @__PURE__ */ Ne(() => yr(l)), c = /* @__PURE__ */ Ne(() => {
    var x;
    return [...((x = o()) == null ? void 0 : x.data[a()]) || []];
  });
  var d = $y(), f = F(d);
  {
    var h = (x) => {
      var k = ky();
      Ae(4), V(x, k);
    };
    pe(f, (x) => {
      g(c).length !== 0 && x(h);
    });
  }
  var v = B(f, 2);
  i(v, () => g(c) || [], () => []), Y(d), V(e, d);
  var _ = fe({
    get noneParameterText() {
      return s();
    },
    set noneParameterText(x = "无输出参数") {
      s(x), y();
    },
    get dataKeyName() {
      return a();
    },
    set dataKeyName(x = "outputDefs") {
      a(x), y();
    }
  });
  return r(), _;
}
ue(Bn, { noneParameterText: {}, dataKeyName: {} }, [], [], !0);
var Sy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.7134 7.12811L20.4668 7.69379C20.2864 8.10792 19.7136 8.10792 19.5331 7.69379L19.2866 7.12811C18.8471 6.11947 18.0555 5.31641 17.0677 4.87708L16.308 4.53922C15.8973 4.35653 15.8973 3.75881 16.308 3.57612L17.0252 3.25714C18.0384 2.80651 18.8442 1.97373 19.2761 0.930828L19.5293 0.319534C19.7058 -0.106511 20.2942 -0.106511 20.4706 0.319534L20.7238 0.930828C21.1558 1.97373 21.9616 2.80651 22.9748 3.25714L23.6919 3.57612C24.1027 3.75881 24.1027 4.35653 23.6919 4.53922L22.9323 4.87708C21.9445 5.31641 21.1529 6.11947 20.7134 7.12811ZM9 2C13.0675 2 16.426 5.03562 16.9337 8.96494L19.1842 12.5037C19.3324 12.7367 19.3025 13.0847 18.9593 13.2317L17 14.071V17C17 18.1046 16.1046 19 15 19H13.001L13 22H4L4.00025 18.3061C4.00033 17.1252 3.56351 16.0087 2.7555 15.0011C1.65707 13.6313 1 11.8924 1 10C1 5.58172 4.58172 2 9 2ZM9 4C5.68629 4 3 6.68629 3 10C3 11.3849 3.46818 12.6929 4.31578 13.7499C5.40965 15.114 6.00036 16.6672 6.00025 18.3063L6.00013 20H11.0007L11.0017 17H15V12.7519L16.5497 12.0881L15.0072 9.66262L14.9501 9.22118C14.5665 6.25141 12.0243 4 9 4ZM19.4893 16.9929L21.1535 18.1024C22.32 16.3562 23 14.2576 23 12.0001C23 11.317 22.9378 10.6486 22.8186 10L20.8756 10.5C20.9574 10.9878 21 11.489 21 12.0001C21 13.8471 20.4436 15.5642 19.4893 16.9929Z"></path></svg>'), Py = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ny = (e, t, n) => t(n, { temperature: parseFloat(e.target.value) }), Ty = (e, t, n) => t(n, { topP: parseFloat(e.target.value) }), My = (e, t, n) => t(n, { topK: parseInt(e.target.value) }), Hy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Dy = /* @__PURE__ */ ie('<div class="heading svelte-q0cqsa"><!> <!></div> <!> <!> <div class="setting-title svelte-q0cqsa">模型</div> <div class="setting-item svelte-q0cqsa"><!> <!></div> <div class="setting-title svelte-q0cqsa">采样参数</div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="1" step="0.1"></div></div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input class="nodrag svelte-q0cqsa" type="range" min="0" max="100" step="1"></div></div> <div class="setting-title svelte-q0cqsa">系统提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="setting-title svelte-q0cqsa">用户提示词</div> <div class="setting-item svelte-q0cqsa"><!></div> <div class="heading svelte-q0cqsa"><!> <!> <!></div> <!>', 1);
const Vy = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Bd(e, t) {
  de(t, !0), tt(e, Vy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ xt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Pn(), s = er();
  let a = /* @__PURE__ */ $t(an([]));
  tn(async () => {
    var d, f;
    const c = await ((f = (d = s.provider) == null ? void 0 : d.llm) == null ? void 0 : f.call(d));
    g(a).push(...c || []);
  });
  const { updateNodeData: l } = Lt(), u = (c) => {
    l(o, () => ({ outType: c })), c === "text" ? l(o, {
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
  return un(() => {
    n().outType || u("text");
  }), vn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (d) => {
        var f = Sy();
        V(d, f);
      },
      children: (d, f) => {
        var h = Dy(), v = we(h), _ = F(v);
        Qe(_, {
          level: 3,
          children: (me, j) => {
            Ae();
            var Pe = Ye("输入参数");
            V(me, Pe);
          },
          $$slots: { default: !0 }
        });
        var x = B(_, 2);
        je(x, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (me, j) => {
            var Pe = Py();
            V(me, Pe);
          },
          $$slots: { default: !0 }
        }), Y(v);
        var k = B(v, 2);
        qt(k, {});
        var m = B(k, 2);
        Qe(m, {
          level: 3,
          mt: "10px",
          children: (me, j) => {
            Ae();
            var Pe = Ye("模型设置");
            V(me, Pe);
          },
          $$slots: { default: !0 }
        });
        var b = B(m, 4), p = F(b);
        const C = /* @__PURE__ */ Ne(() => n().llmId ? [n().llmId] : []);
        en(p, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择模型",
          onSelect: (me) => {
            const j = me.value;
            l(o, () => ({ llmId: j }));
          },
          get value() {
            return g(C);
          }
        });
        var H = B(p, 2);
        ts(H, {}), Y(b);
        var S = B(b, 4), D = F(S), L = F(D), A = F(L);
        Y(L);
        var I = B(L, 2);
        ar(I), I.__input = [Ny, l, o], Y(D), Y(S);
        var O = B(S, 2), R = F(O), E = F(R), N = F(E);
        Y(E);
        var $ = B(E, 2);
        ar($), $.__input = [Ty, l, o], Y(R), Y(O);
        var T = B(O, 2), P = F(T), M = F(P), z = F(M);
        Y(M);
        var q = B(M, 2);
        ar(q), q.__input = [My, l, o], Y(P), Y(T);
        var X = B(T, 4), U = F(X);
        const G = /* @__PURE__ */ Ne(() => n().systemPrompt || "");
        pt(U, {
          rows: 5,
          placeholder: "请输入系统提示词",
          style: "width: 100%",
          get value() {
            return g(G);
          },
          oninput: (me) => {
            l(o, { systemPrompt: me.target.value });
          }
        }), Y(X);
        var W = B(X, 4), le = F(W);
        const ye = /* @__PURE__ */ Ne(() => n().userPrompt || "");
        pt(le, {
          rows: 5,
          placeholder: "请输入用户提示词",
          style: "width: 100%",
          get value() {
            return g(ye);
          },
          oninput: (me) => {
            l(o, { userPrompt: me.target.value });
          }
        }), Y(W);
        var ge = B(W, 2), oe = F(ge);
        Qe(oe, {
          level: 3,
          mt: "10px",
          children: (me, j) => {
            Ae();
            var Pe = Ye("输出参数");
            V(me, Pe);
          },
          $$slots: { default: !0 }
        });
        var Te = B(oe, 2);
        const Q = /* @__PURE__ */ Ne(() => n().outType ? [n().outType] : []);
        en(Te, {
          items: [
            { label: "文本", value: "text" },
            { label: "JSON", value: "json" }
          ],
          style: "width: 100px;margin-left: auto",
          defaultValue: "text",
          onSelect: (me) => {
            u(me.value);
          },
          get value() {
            return g(Q);
          }
        });
        var re = B(Te, 2);
        {
          var Ee = (me) => {
            je(me, {
              class: "input-btn-more",
              style: "margin-left: 10px",
              onclick: () => {
                i(o, "outputDefs");
              },
              children: (j, Pe) => {
                var Oe = Hy();
                V(j, Oe);
              },
              $$slots: { default: !0 }
            });
          };
          pe(re, (me) => {
            n().outType === "json" && me(Ee);
          });
        }
        Y(ge);
        var _e = B(ge, 2);
        Bn(_e, {}), $e(() => {
          dt(A, `Temperature: ${n().temperature ?? 0.5}`), as(I, n().temperature ?? 0.5), dt(N, `Top P: ${n().topP ?? 0.9}`), as($, n().topP ?? 0.9), dt(z, `Top K: ${n().topK ?? 50}`), as(q, n().topK ?? 50);
        }), V(d, h);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(c) {
      n(c), y();
    }
  });
}
jr(["input"]);
ue(Bd, { data: {} }, [], [], !0);
var Ay = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12L15.9289 19.0711L14.5147 17.6569L20.1716 12L14.5147 6.34317L15.9289 4.92896L23 12ZM3.82843 12L9.48528 17.6569L8.07107 19.0711L1 12L8.07107 4.92896L9.48528 6.34317L3.82843 12Z"></path></svg>'), Oy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ly = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Iy = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">执行引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">执行代码</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!> <!></div> <!>', 1);
const zy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function qd(e, t) {
  de(t, !0), tt(e, zy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ xt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  tn(() => {
    n().engine || s(o, () => ({ engine: "qlexpress" }));
  });
  const o = ht(), { addParameter: i } = Pn(), { updateNodeData: s } = Lt(), a = [
    { label: "QLExpress", value: "qlexpress" },
    { label: "Groovy", value: "groovy" },
    { label: "JavaScript", value: "js" }
  ];
  return vn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Ay();
        V(u, c);
      },
      children: (u, c) => {
        var d = Iy(), f = we(d), h = F(f);
        Qe(h, {
          level: 3,
          children: (I, O) => {
            Ae();
            var R = Ye("输入参数");
            V(I, R);
          },
          $$slots: { default: !0 }
        });
        var v = B(h, 2);
        je(v, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (I, O) => {
            var R = Oy();
            V(I, R);
          },
          $$slots: { default: !0 }
        }), Y(f);
        var _ = B(f, 2);
        qt(_, {});
        var x = B(_, 2);
        Qe(x, {
          level: 3,
          mt: "10px",
          children: (I, O) => {
            Ae();
            var R = Ye("代码");
            V(I, R);
          },
          $$slots: { default: !0 }
        });
        var k = B(x, 4), m = F(k);
        const b = /* @__PURE__ */ Ne(() => n().engine ? [n().engine] : ["qlexpress"]);
        en(m, {
          items: a,
          style: "width: 100%",
          placeholder: "请选择执行引擎",
          onSelect: (I) => {
            const O = I.value;
            s(o, () => ({ engine: O }));
          },
          get value() {
            return g(b);
          }
        }), Y(k);
        var p = B(k, 4), C = F(p);
        const H = /* @__PURE__ */ Ne(() => n().code || "");
        pt(C, {
          rows: 10,
          placeholder: "请输入执行代码，注：输出内容需添加到_result中，如：_result.put(key, value)",
          style: "width: 100%",
          onchange: (I) => {
            s(o, () => ({ code: I.target.value }));
          },
          get value() {
            return g(H);
          }
        }), Y(p);
        var S = B(p, 2), D = F(S);
        Qe(D, {
          level: 3,
          mt: "10px",
          children: (I, O) => {
            Ae();
            var R = Ye("输出参数");
            V(I, R);
          },
          $$slots: { default: !0 }
        });
        var L = B(D, 2);
        je(L, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o, "outputDefs");
          },
          children: (I, O) => {
            var R = Ly();
            V(I, R);
          },
          $$slots: { default: !0 }
        }), Y(S);
        var A = B(S, 2);
        Bn(A, {}), V(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
ue(qd, { data: {} }, [], [], !0);
var Ry = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM7 8H17V11H15V10H13V14H14.5V16H9.5V14H11V10H9V11H7V8Z"></path></svg>'), By = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), qy = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const Yy = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Yd(e, t) {
  de(t, !0), tt(e, Yy);
  const n = w(t, "data", 7), r = /* @__PURE__ */ xt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Pn(), { updateNodeData: s } = Lt();
  return un(() => {
    (!n().outputDefs || n().outputDefs.length === 0) && i(o, "outputDefs", {
      name: "output",
      dataType: "String",
      dataTypeDisabled: !0,
      deleteDisabled: !0
    });
  }), vn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = Ry();
        V(l, u);
      },
      children: (l, u) => {
        var c = qy(), d = we(c), f = F(d);
        Qe(f, {
          level: 3,
          children: (H, S) => {
            Ae();
            var D = Ye("输入参数");
            V(H, D);
          },
          $$slots: { default: !0 }
        });
        var h = B(f, 2);
        je(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (H, S) => {
            var D = By();
            V(H, D);
          },
          $$slots: { default: !0 }
        }), Y(d);
        var v = B(d, 2);
        qt(v, {});
        var _ = B(v, 2);
        Qe(_, {
          level: 3,
          mt: "10px",
          mb: "10px",
          children: (H, S) => {
            Ae();
            var D = Ye("模板内容");
            V(H, D);
          },
          $$slots: { default: !0 }
        });
        var x = B(_, 2), k = F(x);
        const m = /* @__PURE__ */ Ne(() => n().template || "");
        pt(k, {
          rows: 10,
          placeholder: "请输入模板内容",
          style: "width: 100%",
          onchange: (H) => {
            s(o, () => ({ template: H.target.value }));
          },
          get value() {
            return g(m);
          }
        }), Y(x);
        var b = B(x, 2), p = F(b);
        Qe(p, {
          level: 3,
          mt: "10px",
          children: (H, S) => {
            Ae();
            var D = Ye("输出参数");
            V(H, D);
          },
          $$slots: { default: !0 }
        }), Y(b);
        var C = B(b, 2);
        Bn(C, {}), V(l, c);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(a) {
      n(a), y();
    }
  });
}
ue(Yd, { data: {} }, [], [], !0);
var Zy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.23509 6.45329C4.85101 7.89148 4 9.84636 4 12C4 16.4183 7.58172 20 12 20C13.0808 20 14.1116 19.7857 15.0521 19.3972C15.1671 18.6467 14.9148 17.9266 14.8116 17.6746C14.582 17.115 13.8241 16.1582 12.5589 14.8308C12.2212 14.4758 12.2429 14.2035 12.3636 13.3943L12.3775 13.3029C12.4595 12.7486 12.5971 12.4209 14.4622 12.1248C15.4097 11.9746 15.6589 12.3533 16.0043 12.8777C16.0425 12.9358 16.0807 12.9928 16.1198 13.0499C16.4479 13.5297 16.691 13.6394 17.0582 13.8064C17.2227 13.881 17.428 13.9751 17.7031 14.1314C18.3551 14.504 18.3551 14.9247 18.3551 15.8472V15.9518C18.3551 16.3434 18.3168 16.6872 18.2566 16.9859C19.3478 15.6185 20 13.8854 20 12C20 8.70089 18.003 5.8682 15.1519 4.64482C14.5987 5.01813 13.8398 5.54726 13.575 5.91C13.4396 6.09538 13.2482 7.04166 12.6257 7.11976C12.4626 7.14023 12.2438 7.12589 12.012 7.11097C11.3905 7.07058 10.5402 7.01606 10.268 7.75495C10.0952 8.2232 10.0648 9.49445 10.6239 10.1543C10.7134 10.2597 10.7307 10.4547 10.6699 10.6735C10.59 10.9608 10.4286 11.1356 10.3783 11.1717C10.2819 11.1163 10.0896 10.8931 9.95938 10.7412C9.64554 10.3765 9.25405 9.92233 8.74797 9.78176C8.56395 9.73083 8.36166 9.68867 8.16548 9.64736C7.6164 9.53227 6.99443 9.40134 6.84992 9.09302C6.74442 8.8672 6.74488 8.55621 6.74529 8.22764C6.74529 7.8112 6.74529 7.34029 6.54129 6.88256C6.46246 6.70541 6.35689 6.56446 6.23509 6.45329ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>'), Fy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Xy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Wy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Ky = /* @__PURE__ */ ie('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), Gy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), jy = /* @__PURE__ */ ie('<div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!>', 1), Uy = /* @__PURE__ */ ie('<div style="width: 100%"><!></div>'), Jy = /* @__PURE__ */ ie('<div style="width: 100%"><!></div>'), Qy = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ew = /* @__PURE__ */ ie('<div style="display: flex;gap: 2px;width: 100%;padding: 10px 0"><div><!></div> <div style="width: 100%"><!></div></div> <div class="heading svelte-1mo2w1q"><!> <!></div> <!> <div class="heading svelte-1mo2w1q" style="padding-top: 10px"><!> <!></div> <!> <!> <div class="radio-group svelte-1mo2w1q"><label class="svelte-1mo2w1q"><!>none</label> <label class="svelte-1mo2w1q"><!>form-data</label> <label class="svelte-1mo2w1q"><!>x-www-form-urlencoded</label> <label class="svelte-1mo2w1q"><!>json</label> <label class="svelte-1mo2w1q"><!>raw</label></div> <!> <!> <!> <!> <div class="heading svelte-1mo2w1q"><!> <!></div> <!>', 1);
const tw = {
  hash: "svelte-1mo2w1q",
  code: ".heading.svelte-1mo2w1q {display:flex;margin-bottom:10px;}.radio-group.svelte-1mo2w1q {display:flex;margin:10px 0;}.radio-group.svelte-1mo2w1q label:where(.svelte-1mo2w1q) {display:flex;font-size:14px;}"
};
function Zd(e, t) {
  de(t, !0), tt(e, tw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ xt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]);
  tn(() => {
    n().method || a(i, () => ({ method: "get" }));
  });
  const o = [
    { value: "get", label: "GET" },
    { value: "post", label: "POST" },
    { value: "put", label: "PUT" },
    { value: "delete", label: "DELETE" },
    { value: "head", label: "HEAD" },
    { value: "patch", label: "PATCH" }
  ], i = ht(), { addParameter: s } = Pn(), { updateNodeData: a } = Lt();
  return vn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (u) => {
        var c = Zy();
        V(u, c);
      },
      children: (u, c) => {
        var d = ew(), f = we(d), h = F(f), v = F(h);
        const _ = /* @__PURE__ */ Ne(() => n().method ? [n().method] : ["get"]);
        en(v, {
          items: o,
          style: "width: 100%",
          placeholder: "请选择请求方式",
          onSelect: (ae) => {
            const ve = ae.value;
            a(i, () => ({ method: ve }));
          },
          get value() {
            return g(_);
          }
        }), Y(h);
        var x = B(h, 2), k = F(x);
        const m = /* @__PURE__ */ Ne(() => n().url || "");
        vt(k, {
          placeholder: "请输入url",
          style: "width: 100%",
          onchange: (ae) => {
            a(i, () => ({ url: ae.target.value }));
          },
          get value() {
            return g(m);
          }
        }), Y(x), Y(f);
        var b = B(f, 2), p = F(b);
        Qe(p, {
          level: 3,
          children: (ae, ve) => {
            Ae();
            var Me = Ye("Http 头信息");
            V(ae, Me);
          },
          $$slots: { default: !0 }
        });
        var C = B(p, 2);
        je(C, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "headers");
          },
          children: (ae, ve) => {
            var Me = Fy();
            V(ae, Me);
          },
          $$slots: { default: !0 }
        }), Y(b);
        var H = B(b, 2);
        qt(H, { dataKeyName: "headers" });
        var S = B(H, 2), D = F(S);
        Qe(D, {
          level: 3,
          children: (ae, ve) => {
            Ae();
            var Me = Ye("参数");
            V(ae, Me);
          },
          $$slots: { default: !0 }
        });
        var L = B(D, 2);
        je(L, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "urlParameters");
          },
          children: (ae, ve) => {
            var Me = Xy();
            V(ae, Me);
          },
          $$slots: { default: !0 }
        }), Y(S);
        var A = B(S, 2);
        qt(A, { dataKeyName: "urlParameters" });
        var I = B(A, 2);
        Qe(I, {
          level: 3,
          mt: "10px",
          children: (ae, ve) => {
            Ae();
            var Me = Ye("Body");
            V(ae, Me);
          },
          $$slots: { default: !0 }
        });
        var O = B(I, 2), R = F(O), E = F(R);
        const N = /* @__PURE__ */ Ne(() => !n().bodyType);
        vt(E, {
          type: "radio",
          name: "bodyType",
          value: "",
          get checked() {
            return g(N);
          },
          onchange: (ae) => {
            var ve;
            (ve = ae.target) != null && ve.checked && a(i, { bodyType: "" });
          }
        }), Ae(), Y(R);
        var $ = B(R, 2), T = F($);
        const P = /* @__PURE__ */ Ne(() => n().bodyType === "form-data");
        vt(T, {
          type: "radio",
          name: "bodyType",
          value: "form-data",
          get checked() {
            return g(P);
          },
          onchange: (ae) => {
            var ve;
            (ve = ae.target) != null && ve.checked && a(i, { bodyType: "form-data" });
          }
        }), Ae(), Y($);
        var M = B($, 2), z = F(M);
        const q = /* @__PURE__ */ Ne(() => n().bodyType === "x-www-form-urlencoded");
        vt(z, {
          type: "radio",
          name: "bodyType",
          value: "x-www-form-urlencoded",
          get checked() {
            return g(q);
          },
          onchange: (ae) => {
            var ve;
            (ve = ae.target) != null && ve.checked && a(i, { bodyType: "x-www-form-urlencoded" });
          }
        }), Ae(), Y(M);
        var X = B(M, 2), U = F(X);
        const G = /* @__PURE__ */ Ne(() => n().bodyType === "json");
        vt(U, {
          type: "radio",
          name: "bodyType",
          value: "json",
          get checked() {
            return g(G);
          },
          onchange: (ae) => {
            var ve;
            (ve = ae.target) != null && ve.checked && a(i, { bodyType: "json" });
          }
        }), Ae(), Y(X);
        var W = B(X, 2), le = F(W);
        const ye = /* @__PURE__ */ Ne(() => n().bodyType === "raw");
        vt(le, {
          type: "radio",
          name: "bodyType",
          value: "raw",
          get checked() {
            return g(ye);
          },
          onchange: (ae) => {
            var ve;
            (ve = ae.target) != null && ve.checked && a(i, { bodyType: "raw" });
          }
        }), Ae(), Y(W), Y(O);
        var ge = B(O, 2);
        {
          var oe = (ae) => {
            var ve = Ky(), Me = we(ve), Se = F(Me);
            Qe(Se, {
              level: 3,
              children: (te, Ze) => {
                Ae();
                var ce = Ye("参数");
                V(te, ce);
              },
              $$slots: { default: !0 }
            });
            var Ke = B(Se, 2);
            je(Ke, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "fromData");
              },
              children: (te, Ze) => {
                var ce = Wy();
                V(te, ce);
              },
              $$slots: { default: !0 }
            }), Y(Me);
            var ut = B(Me, 2);
            qt(ut, { dataKeyName: "fromData" }), V(ae, ve);
          };
          pe(ge, (ae) => {
            n().bodyType === "form-data" && ae(oe);
          });
        }
        var Te = B(ge, 2);
        {
          var Q = (ae) => {
            var ve = jy(), Me = we(ve), Se = F(Me);
            Qe(Se, {
              level: 3,
              children: (te, Ze) => {
                Ae();
                var ce = Ye("参数");
                V(te, ce);
              },
              $$slots: { default: !0 }
            });
            var Ke = B(Se, 2);
            je(Ke, {
              class: "input-btn-more",
              style: "margin-left: auto",
              onclick: () => {
                s(i, "fromUrlencoded");
              },
              children: (te, Ze) => {
                var ce = Gy();
                V(te, ce);
              },
              $$slots: { default: !0 }
            }), Y(Me);
            var ut = B(Me, 2);
            qt(ut, { dataKeyName: "fromUrlencoded" }), V(ae, ve);
          };
          pe(Te, (ae) => {
            n().bodyType === "x-www-form-urlencoded" && ae(Q);
          });
        }
        var re = B(Te, 2);
        {
          var Ee = (ae) => {
            var ve = Uy(), Me = F(ve);
            pt(Me, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入 json 信息",
              get value() {
                return n().bodyJson;
              },
              oninput: (Se) => {
                a(i, { bodyJson: Se.target.value });
              }
            }), Y(ve), V(ae, ve);
          };
          pe(re, (ae) => {
            n().bodyType === "json" && ae(Ee);
          });
        }
        var _e = B(re, 2);
        {
          var me = (ae) => {
            var ve = Jy(), Me = F(ve);
            pt(Me, {
              rows: "5",
              style: "width: 100%",
              placeholder: "请输入请求信息",
              get value() {
                return n().bodyRaw;
              },
              oninput: (Se) => {
                a(i, { bodyRaw: Se.target.value });
              }
            }), Y(ve), V(ae, ve);
          };
          pe(_e, (ae) => {
            n().bodyType === "raw" && ae(me);
          });
        }
        var j = B(_e, 2), Pe = F(j);
        Qe(Pe, {
          level: 3,
          mt: "10px",
          children: (ae, ve) => {
            Ae();
            var Me = Ye("输出参数");
            V(ae, Me);
          },
          $$slots: { default: !0 }
        });
        var Oe = B(Pe, 2);
        je(Oe, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            s(i, "outputDefs");
          },
          children: (ae, ve) => {
            var Me = Qy();
            V(ae, Me);
          },
          $$slots: { default: !0 }
        }), Y(j);
        var Le = B(j, 2);
        Bn(Le, {}), V(u, d);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(l) {
      n(l), y();
    }
  });
}
ue(Zd, { data: {} }, [], [], !0);
var nw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5C13.567 5 12 6.567 12 8.5C12 10.433 13.567 12 15.5 12C17.433 12 19 10.433 19 8.5C19 6.567 17.433 5 15.5 5ZM10 8.5C10 5.46243 12.4624 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 9.6575 20.6424 10.7315 20.0317 11.6175L22.7071 14.2929L21.2929 15.7071L18.6175 13.0317C17.7315 13.6424 16.6575 14 15.5 14C12.4624 14 10 11.5376 10 8.5ZM3 4H8V6H3V4ZM3 11H8V13H3V11ZM21 18V20H3V18H21Z"></path></svg>'), rw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), ow = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">知识库</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">获取数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const iw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Fd(e, t) {
  de(t, !0), tt(e, iw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ xt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Pn(), s = er();
  let a = /* @__PURE__ */ $t(an([]));
  tn(async () => {
    var c, d;
    const u = await ((d = (c = s.provider) == null ? void 0 : c.knowledge) == null ? void 0 : d.call(c));
    g(a).push(...u || []);
  });
  const { updateNodeData: l } = Lt();
  return un(() => {
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
  }), vn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = nw();
        V(c, d);
      },
      children: (c, d) => {
        var f = ow(), h = we(f), v = F(h);
        Qe(v, {
          level: 3,
          children: (R, E) => {
            Ae();
            var N = Ye("输入参数");
            V(R, N);
          },
          $$slots: { default: !0 }
        });
        var _ = B(v, 2);
        je(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (R, E) => {
            var N = rw();
            V(R, N);
          },
          $$slots: { default: !0 }
        }), Y(h);
        var x = B(h, 2);
        qt(x, {});
        var k = B(x, 2);
        Qe(k, {
          level: 3,
          mt: "10px",
          children: (R, E) => {
            Ae();
            var N = Ye("知识库设置");
            V(R, N);
          },
          $$slots: { default: !0 }
        });
        var m = B(k, 4), b = F(m);
        const p = /* @__PURE__ */ Ne(() => n().knowledgeId ? [n().knowledgeId] : []);
        en(b, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择知识库",
          onSelect: (R) => {
            const E = R.value;
            l(o, () => ({ knowledgeId: E }));
          },
          get value() {
            return g(p);
          }
        }), Y(m);
        var C = B(m, 4), H = F(C);
        vt(H, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (R) => {
            const E = R.target.value;
            l(o, () => ({ keyword: E }));
          }
        }), Y(C);
        var S = B(C, 4), D = F(S);
        const L = /* @__PURE__ */ Ne(() => n().limit || "");
        vt(D, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          onchange: (R) => {
            const E = R.target.value;
            l(o, () => ({ limit: E }));
          },
          get value() {
            return g(L);
          }
        }), Y(S);
        var A = B(S, 2), I = F(A);
        Qe(I, {
          level: 3,
          mt: "10px",
          children: (R, E) => {
            Ae();
            var N = Ye("输出参数");
            V(R, N);
          },
          $$slots: { default: !0 }
        }), Y(A);
        var O = B(A, 2);
        Bn(O, {}), V(c, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
ue(Fd, { data: {} }, [], [], !0);
var sw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>'), aw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), lw = /* @__PURE__ */ ie('<div class="heading svelte-15t2v24"><!> <!></div> <!> <!> <div class="setting-title svelte-15t2v24">搜索引擎</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">关键字</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="setting-title svelte-15t2v24">搜索数据量</div> <div class="setting-item svelte-15t2v24"><!></div> <div class="heading svelte-15t2v24"><!></div> <!>', 1);
const uw = {
  hash: "svelte-15t2v24",
  code: ".heading.svelte-15t2v24 {display:flex;margin-bottom:10px;}.setting-title.svelte-15t2v24 {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-15t2v24 {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}"
};
function Xd(e, t) {
  de(t, !0), tt(e, uw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ xt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Pn(), s = er();
  let a = /* @__PURE__ */ $t(an([]));
  tn(async () => {
    var c, d;
    const u = await ((d = (c = s.provider) == null ? void 0 : c.searchEngine) == null ? void 0 : d.call(c));
    g(a).push(...u || []);
  });
  const { updateNodeData: l } = Lt();
  return un(() => {
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
  }), vn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (c) => {
        var d = sw();
        V(c, d);
      },
      children: (c, d) => {
        var f = lw(), h = we(f), v = F(h);
        Qe(v, {
          level: 3,
          children: (O, R) => {
            Ae();
            var E = Ye("输入参数");
            V(O, E);
          },
          $$slots: { default: !0 }
        });
        var _ = B(v, 2);
        je(_, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (O, R) => {
            var E = aw();
            V(O, E);
          },
          $$slots: { default: !0 }
        }), Y(h);
        var x = B(h, 2);
        qt(x, {});
        var k = B(x, 2);
        Qe(k, {
          level: 3,
          mt: "10px",
          children: (O, R) => {
            Ae();
            var E = Ye("搜索引擎设置");
            V(O, E);
          },
          $$slots: { default: !0 }
        });
        var m = B(k, 4), b = F(m);
        const p = /* @__PURE__ */ Ne(() => n().engine ? [n().engine] : []);
        en(b, {
          get items() {
            return g(a);
          },
          style: "width: 100%",
          placeholder: "请选择搜索引擎",
          onSelect: (O) => {
            const R = O.value;
            l(o, () => ({ engine: R }));
          },
          get value() {
            return g(p);
          }
        }), Y(m);
        var C = B(m, 4), H = F(C);
        vt(H, {
          placeholder: "请输入关键字",
          style: "width: 100%",
          get value() {
            return n().keyword;
          },
          onchange: (O) => {
            const R = O.target.value;
            l(o, () => ({ keyword: R }));
          }
        }), Y(C);
        var S = B(C, 4), D = F(S);
        vt(D, {
          placeholder: "搜索的数据条数",
          style: "width: 100%",
          get value() {
            return n().limit;
          },
          onchange: (O) => {
            const R = O.target.value;
            l(o, () => ({ limit: R }));
          }
        }), Y(S);
        var L = B(S, 2), A = F(L);
        Qe(A, {
          level: 3,
          mt: "10px",
          children: (O, R) => {
            Ae();
            var E = Ye("输出参数");
            V(O, E);
          },
          $$slots: { default: !0 }
        }), Y(L);
        var I = B(L, 2);
        Bn(I, {}), V(c, f);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(u) {
      n(u), y();
    }
  });
}
ue(Xd, { data: {} }, [], [], !0);
var cw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path></svg>'), dw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), fw = /* @__PURE__ */ ie('<div class="heading svelte-md8tgj"><!> <!></div> <!> <div class="heading svelte-md8tgj"><!></div> <!>', 1);
const gw = {
  hash: "svelte-md8tgj",
  code: ".heading.svelte-md8tgj {display:flex;margin-bottom:10px;}.loop_handle_wrapper ::after {content:'循环体';width:100px;height:20px;background:#000;color:#fff;display:flex;justify-content:center;align-items:center;}"
};
function Wd(e, t) {
  de(t, !0), tt(e, gw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ xt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Pn();
  return vn(e, lt(
    {
      get data() {
        return n();
      }
    },
    () => r,
    {
      icon: (l) => {
        var u = cw();
        V(l, u);
      },
      handle: (l) => {
        Jn(l, {
          type: "source",
          get position() {
            return He.Bottom;
          },
          id: "loop_handle",
          style: "bottom: -12px;width: 100px",
          class: "loop_handle_wrapper"
        });
      },
      children: (l, u) => {
        var c = fw(), d = we(c), f = F(d);
        Qe(f, {
          level: 3,
          children: (m, b) => {
            Ae();
            var p = Ye("循环变量");
            V(m, p);
          },
          $$slots: { default: !0 }
        });
        var h = B(f, 2);
        je(h, {
          class: "input-btn-more",
          style: "margin-left: auto",
          onclick: () => {
            i(o);
          },
          children: (m, b) => {
            var p = dw();
            V(m, p);
          },
          $$slots: { default: !0 }
        }), Y(d);
        var v = B(d, 2);
        qt(v, {});
        var _ = B(v, 2), x = F(_);
        Qe(x, {
          level: 3,
          mt: "10px",
          children: (m, b) => {
            Ae();
            var p = Ye("输出参数");
            V(m, p);
          },
          $$slots: { default: !0 }
        }), Y(_);
        var k = B(_, 2);
        Bn(k, {}), V(l, c);
      },
      $$slots: { icon: !0, handle: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(s) {
      n(s), y();
    }
  });
}
ue(Wd, { data: {} }, [], [], !0);
const hw = {
  startNode: Od,
  codeNode: qd,
  llmNode: Bd,
  templateNode: Yd,
  httpNode: Zd,
  knowledgeNode: Fd,
  searchEngineNode: Xd,
  loopNode: Wd,
  endNode: zd
};
var vw = /* @__PURE__ */ ie("<!> ", 1);
function Fs(e, t) {
  de(t, !0);
  const n = w(t, "icon", 7), r = w(t, "title", 7), o = w(t, "type", 7), i = w(t, "description", 7), s = w(t, "extra", 7);
  return je(e, {
    draggable: !0,
    ondragstart: (l) => {
      if (!l.dataTransfer)
        return null;
      const u = {
        type: o(),
        data: {
          title: r(),
          description: i(),
          ...s()
        }
      };
      l.dataTransfer.setData("application/tinyflow", JSON.stringify(u)), l.dataTransfer.effectAllowed = "move";
    },
    children: (l, u) => {
      var c = vw(), d = we(c);
      la(d, n);
      var f = B(d);
      $e(() => dt(f, ` ${r() ?? ""}`)), V(l, c);
    },
    $$slots: { default: !0 }
  }), fe({
    get icon() {
      return n();
    },
    set icon(l) {
      n(l), y();
    },
    get title() {
      return r();
    },
    set title(l) {
      r(l), y();
    },
    get type() {
      return o();
    },
    set type(l) {
      o(l), y();
    },
    get description() {
      return i();
    },
    set description(l) {
      i(l), y();
    },
    get extra() {
      return s();
    },
    set extra(l) {
      s(l), y();
    }
  });
}
ue(
  Fs,
  {
    icon: {},
    title: {},
    type: {},
    description: {},
    extra: {}
  },
  [],
  [],
  !0
);
var pw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path></svg>'), mw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path></svg>'), yw = /* @__PURE__ */ ie('<div><div class="tf-toolbar-container "><div class="tf-toolbar-container-header"><!></div> <div class="tf-toolbar-container-body"><div class="tf-toolbar-container-base"></div> <div class="tf-toolbar-container-tools"></div></div></div> <!></div>');
function Kd(e, t) {
  de(t, !0);
  let n = /* @__PURE__ */ $t("base"), r = /* @__PURE__ */ $t("show");
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
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6 5.1438V16.0002H18.3391L6 5.1438ZM4 2.932C4 2.07155 5.01456 1.61285 5.66056 2.18123L21.6501 16.2494C22.3423 16.8584 21.9116 18.0002 20.9896 18.0002H6V22H4V2.932Z"></path></svg>',
      title: "结束节点",
      type: "endNode",
      sortNo: 900,
      description: "结束定义输出参数"
    }
  ], i = [
    {
      label: "基础节点",
      value: "base"
    },
    {
      label: "业务工具",
      value: "tools"
    }
  ], s = [], a = er().customNodes;
  if (a) {
    const x = Object.keys(a).sort((k, m) => (a[k].sortNo || 0) - (a[m].sortNo || 0));
    for (let k of x)
      a[k].group === "base" ? o.push({ type: k, ...a[k] }) : s.push({
        icon: a[k].icon,
        title: a[k].title,
        type: k
      });
    o.sort((k, m) => (k.sortNo || 0) - (m.sortNo || 0));
  }
  var l = yw(), u = F(l), c = F(u), d = F(c);
  wd(d, {
    style: "width: 100%",
    items: i,
    onChange: (x) => {
      J(n, x.value.toString(), !0);
    }
  }), Y(c);
  var f = B(c, 2), h = F(f);
  Tt(h, 21, () => o, Or, (x, k) => {
    Fs(x, lt(() => g(k)));
  }), Y(h);
  var v = B(h, 2);
  Tt(v, 21, () => s, Or, (x, k) => {
    Fs(x, lt(() => g(k)));
  }), Y(v), Y(f), Y(u);
  var _ = B(u, 2);
  je(_, {
    onclick: () => {
      J(r, g(r) ? "" : "show", !0);
    },
    children: (x, k) => {
      var m = et(), b = we(m);
      {
        var p = (H) => {
          var S = pw();
          V(H, S);
        }, C = (H) => {
          var S = mw();
          V(H, S);
        };
        pe(b, (H) => {
          g(r) === "show" ? H(p) : H(C, !1);
        });
      }
      V(x, m);
    },
    $$slots: { default: !0 }
  }), Y(l), $e(() => {
    _t(l, 1, `tf-toolbar ${g(r) ?? ""}`), ft(h, `display: ${(g(n) === "base" ? "flex" : "none") ?? ""}`), ft(v, `display: ${(g(n) !== "base" ? "flex" : "none") ?? ""}`);
  }), V(e, l), fe();
}
ue(Kd, {}, [], [], !0);
const ww = () => {
  const { nodeLookup: e } = We();
  return {
    getNode: (n) => {
      var o;
      return (o = K(e).get(n)) == null ? void 0 : o.internals.userNode;
    }
  };
}, _w = () => {
  const { nodes: e } = We();
  return {
    ensureParentInNodesBefore: (n, r) => {
      e.update((o) => {
        let i = -1;
        for (let l = 0; l < o.length; l++)
          if (o[l].id === n) {
            i = l;
            break;
          }
        if (i <= 0)
          return o;
        let s = -1;
        for (let l = 0; l < i; l++)
          if (o[l].parentId === n || o[l].id === r) {
            s = l;
            break;
          }
        if (s == -1)
          return o;
        const a = o[i];
        for (let l = i; l > s; l--)
          o[l] = o[l - 1];
        return o[s] = a, o;
      });
    }
  };
}, xw = () => {
  const { edges: e } = We();
  return {
    getEdgesByTarget: (n) => K(e).filter((o) => o.target === n)
  };
};
var bw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Cw = /* @__PURE__ */ ie('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), kw = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), $w = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Ew = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><div class="slider-container svelte-q0cqsa"><span class="svelte-q0cqsa"> </span> <input></div></div>', 1), Sw = /* @__PURE__ */ ie('<div class="setting-title svelte-q0cqsa"> </div> <div class="setting-item svelte-q0cqsa"><!></div>', 1), Pw = /* @__PURE__ */ ke('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>'), Nw = /* @__PURE__ */ ie('<div class="heading svelte-q0cqsa"><!> <!></div> <!>', 1), Tw = /* @__PURE__ */ ie("<!> <!> <div></div> <!>", 1);
const Mw = {
  hash: "svelte-q0cqsa",
  code: `.heading.svelte-q0cqsa {display:flex;align-items:center;margin-bottom:10px;}.setting-title.svelte-q0cqsa {font-size:12px;color:#999;margin-bottom:4px;margin-top:10px;}.setting-item.svelte-q0cqsa {display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;gap:10px;}

    /* 新增样式 */.slider-container.svelte-q0cqsa {width:100%;display:flex;flex-direction:column;gap:4px;}.slider-container.svelte-q0cqsa span:where(.svelte-q0cqsa) {font-size:12px;color:#666;display:flex;justify-content:space-between;align-items:center;}input[type="range"].svelte-q0cqsa {width:100%;height:4px;background:#ddd;border-radius:2px;outline:none;-webkit-appearance:none;}input[type="range"].svelte-q0cqsa::-webkit-slider-thumb {-webkit-appearance:none;width:14px;height:14px;background:#007bff;border-radius:50%;cursor:pointer;}`
};
function Gd(e, t) {
  var _;
  de(t, !0), tt(e, Mw);
  const n = w(t, "data", 7), r = /* @__PURE__ */ xt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "$$host",
    "data"
  ]), o = ht(), { addParameter: i } = Pn(), s = Lt(), { updateNodeData: a } = s, l = { ...r, id: o, data: n() }, u = document.createElement("div"), d = er().customNodes[t.type];
  (_ = d.render) == null || _.call(d, u, l, s);
  const f = d.forms;
  let h;
  un(() => {
    n().expand && h && h.append(u);
  }), un(() => {
    var x;
    n() && ((x = d.onUpdate) == null || x.call(d, u, { ...l, data: n() }));
  }), un(() => {
    !n().parameters && d.parameters && a(o, {
      parameters: Ti(JSON.parse(JSON.stringify(d.parameters)))
    });
  }), un(() => {
    !n().outputDefs && d.outputDefs && a(o, {
      outputDefs: Ti(JSON.parse(JSON.stringify(d.outputDefs)))
    });
  });
  const v = /* @__PURE__ */ Ne(() => ({
    ...n(),
    description: d.description
  }));
  return vn(e, lt(
    {
      get data() {
        return g(v);
      }
    },
    () => r,
    {
      icon: (k) => {
        var m = et(), b = we(m);
        la(b, () => d.icon), V(k, m);
      },
      children: (k, m) => {
        var b = Tw(), p = we(b);
        {
          var C = (I) => {
            var O = Cw(), R = we(O), E = F(R);
            Qe(E, {
              level: 3,
              children: (P, M) => {
                Ae();
                var z = Ye("输入参数");
                V(P, z);
              },
              $$slots: { default: !0 }
            });
            var N = B(E, 2);
            {
              var $ = (P) => {
                je(P, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o);
                  },
                  children: (M, z) => {
                    var q = bw();
                    V(M, q);
                  },
                  $$slots: { default: !0 }
                });
              };
              pe(N, (P) => {
                d.parametersAddEnable !== !1 && P($);
              });
            }
            Y(R);
            var T = B(R, 2);
            qt(T, {}), V(I, O);
          };
          pe(p, (I) => {
            d.parametersEnable !== !1 && I(C);
          });
        }
        var H = B(p, 2);
        {
          var S = (I) => {
            var O = et(), R = we(O);
            Tt(R, 17, () => f, Or, (E, N) => {
              var $ = et(), T = we($);
              {
                var P = (z) => {
                  var q = kw(), X = we(q), U = F(X, !0);
                  Y(X);
                  var G = B(X, 2), W = F(G);
                  const le = /* @__PURE__ */ Ne(() => n()[g(N).name] || g(N).defaultValue);
                  vt(W, lt(
                    {
                      get placeholder() {
                        return g(N).placeholder;
                      },
                      style: "width: 100%",
                      get value() {
                        return g(le);
                      }
                    },
                    () => g(N).attrs,
                    {
                      onchange: (ye) => {
                        a(o, { [g(N).name]: ye.target.value });
                      }
                    }
                  )), Y(G), $e(() => dt(U, g(N).label)), V(z, q);
                }, M = (z, q) => {
                  {
                    var X = (G) => {
                      var W = $w(), le = we(W), ye = F(le, !0);
                      Y(le);
                      var ge = B(le, 2), oe = F(ge);
                      const Te = /* @__PURE__ */ Ne(() => n()[g(N).name] || g(N).defaultValue);
                      pt(oe, lt(
                        {
                          rows: 3,
                          get placeholder() {
                            return g(N).placeholder;
                          },
                          style: "width: 100%",
                          get value() {
                            return g(Te);
                          }
                        },
                        () => g(N).attrs,
                        {
                          onchange: (Q) => {
                            a(o, { [g(N).name]: Q.target.value });
                          }
                        }
                      )), Y(ge), $e(() => dt(ye, g(N).label)), V(G, W);
                    }, U = (G, W) => {
                      {
                        var le = (ge) => {
                          var oe = Ew(), Te = we(oe), Q = F(Te, !0);
                          Y(Te);
                          var re = B(Te, 2), Ee = F(re), _e = F(Ee), me = F(_e);
                          Y(_e);
                          var j = B(_e, 2);
                          ar(j);
                          var Pe = (Le) => a(o, {
                            [g(N).name]: parseFloat(Le.target.value)
                          });
                          let Oe;
                          Y(Ee), Y(re), $e(() => {
                            dt(Q, g(N).label), dt(me, `${g(N).description ?? ""}: ${n()[g(N).name] ?? g(N).defaultValue ?? ""}`), Oe = Qt(
                              j,
                              Oe,
                              {
                                class: "nodrag",
                                type: "range",
                                ...g(N).attrs,
                                value: n()[g(N).name] ?? g(N).defaultValue,
                                oninput: Pe
                              },
                              "svelte-q0cqsa"
                            );
                          }), V(ge, oe);
                        }, ye = (ge, oe) => {
                          {
                            var Te = (re) => {
                              var Ee = Sw(), _e = we(Ee), me = F(_e, !0);
                              Y(_e);
                              var j = B(_e, 2), Pe = F(j);
                              const Oe = /* @__PURE__ */ Ne(() => g(N).options || []), Le = /* @__PURE__ */ Ne(() => n()[g(N).name] ? [n()[g(N).name]] : [g(N).defaultValue]);
                              en(Pe, {
                                get items() {
                                  return g(Oe);
                                },
                                style: "width: 100%",
                                get placeholder() {
                                  return g(N).placeholder;
                                },
                                onSelect: (ae) => {
                                  const ve = ae.value;
                                  a(o, () => ({ [g(N).name]: ve }));
                                },
                                get value() {
                                  return g(Le);
                                }
                              }), Y(j), $e(() => dt(me, g(N).label)), V(re, Ee);
                            }, Q = (re, Ee) => {
                              {
                                var _e = (me) => {
                                  Qe(me, lt({ level: 3, mt: "10px" }, () => g(N).attrs, {
                                    children: (j, Pe) => {
                                      Ae();
                                      var Oe = Ye();
                                      $e(() => dt(Oe, g(N).label)), V(j, Oe);
                                    },
                                    $$slots: { default: !0 }
                                  }));
                                };
                                pe(
                                  re,
                                  (me) => {
                                    g(N).type === "heading" && me(_e);
                                  },
                                  Ee
                                );
                              }
                            };
                            pe(
                              ge,
                              (re) => {
                                g(N).type === "select" ? re(Te) : re(Q, !1);
                              },
                              oe
                            );
                          }
                        };
                        pe(
                          G,
                          (ge) => {
                            g(N).type === "slider" ? ge(le) : ge(ye, !1);
                          },
                          W
                        );
                      }
                    };
                    pe(
                      z,
                      (G) => {
                        g(N).type === "textarea" ? G(X) : G(U, !1);
                      },
                      q
                    );
                  }
                };
                pe(T, (z) => {
                  g(N).type === "input" ? z(P) : z(M, !1);
                });
              }
              V(E, $);
            }), V(I, O);
          };
          pe(H, (I) => {
            f && I(S);
          });
        }
        var D = B(H, 2);
        kn(D, (I) => h = I, () => h);
        var L = B(D, 2);
        {
          var A = (I) => {
            var O = Nw(), R = we(O), E = F(R);
            Qe(E, {
              level: 3,
              mt: "10px",
              children: (P, M) => {
                Ae();
                var z = Ye("输出参数");
                V(P, z);
              },
              $$slots: { default: !0 }
            });
            var N = B(E, 2);
            {
              var $ = (P) => {
                je(P, {
                  class: "input-btn-more",
                  style: "margin-left: auto",
                  onclick: () => {
                    i(o, "outputDefs");
                  },
                  children: (M, z) => {
                    var q = Pw();
                    V(M, q);
                  },
                  $$slots: { default: !0 }
                });
              };
              pe(N, (P) => {
                d.outputDefsAddEnable !== !1 && P($);
              });
            }
            Y(R);
            var T = B(R, 2);
            Bn(T, {}), V(I, O);
          };
          pe(L, (I) => {
            d.outputDefsEnable !== !1 && I(A);
          });
        }
        $e(() => {
          ft(D, d.rootStyle || ""), _t(D, 1, gn(d.rootClass), "svelte-q0cqsa");
        }), V(k, b);
      },
      $$slots: { icon: !0, default: !0 }
    }
  )), fe({
    get data() {
      return n();
    },
    set data(x) {
      n(x), y();
    }
  });
}
ue(Gd, { data: {} }, [], [], !0);
const Hw = () => {
  const e = We();
  return {
    updateEdgeData: (n, r, o) => {
      const i = K(e.edgeLookup).get(n);
      if (!i)
        return;
      const s = typeof r == "function" ? r(i) : r;
      i.data = o != null && o.replace ? s : { ...i.data, ...s }, e.edges.update(
        (a) => a.map((l) => l.id === n ? i : l)
      );
    }
  };
};
var Dw = /* @__PURE__ */ ie('<div class="panel-content svelte-1oe15vw"><div>边属性设置</div> <div class="setting-title svelte-1oe15vw">边条件设置</div> <div class="setting-item"><!></div></div>'), Vw = /* @__PURE__ */ ie("<!> <!> <!> <!>", 1), Aw = /* @__PURE__ */ ie('<div style="position: relative; height: 100%; width: 100%;overflow: hidden"><!> <!></div>');
const Ow = {
  hash: "svelte-1oe15vw",
  code: ".panel-content.svelte-1oe15vw {padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);width:200px;border:1px solid #efefef;}.setting-title.svelte-1oe15vw {margin:10px 0;font-size:12px;color:#999;}"
};
function jd(e, t) {
  de(t, !0), tt(e, Ow);
  const [n, r] = rt(), o = () => ne(D, "$nodes", n), i = () => ne(L, "$edges", n), s = () => ne(A, "$viewport", n), a = w(t, "onInit", 7), l = Lt();
  a()(l);
  let u = /* @__PURE__ */ $t(!1), c = /* @__PURE__ */ $t(void 0);
  const { updateEdgeData: d } = Hw(), f = (P) => {
    P.preventDefault(), P.dataTransfer && (P.dataTransfer.dropEffect = "move");
  }, h = (P) => {
    var U;
    P.preventDefault();
    const M = l.screenToFlowPosition({
      x: P.clientX - 250,
      y: P.clientY - 100
    }), z = (U = P.dataTransfer) == null ? void 0 : U.getData("application/tinyflow"), q = z ? JSON.parse(z) : {}, X = {
      id: `node_${Fr()}`,
      position: M,
      data: {},
      ...q
    };
    ii.addNode(X), ii.selectNodeOnly(X.id);
  }, { getNode: v } = ww(), _ = (P) => {
    const M = v(P.source), z = v(P.target);
    if (P.sourceHandle === "loop_handle" || M.parentId) {
      const q = l.getEdges();
      for (let X of q)
        if (X.target === P.target) {
          const U = v(X.source);
          if (P.sourceHandle === "loop_handle" && U.parentId !== M.id || M.parentId && U.parentId !== M.parentId)
            return !1;
        }
    }
    return !(!M.parentId && z.parentId && z.parentId !== M.id);
  }, { ensureParentInNodesBefore: x } = _w(), k = (P, M) => {
    if (!M.isValid)
      return;
    const z = M.toNode;
    if (z.parentId)
      return;
    const q = M.fromNode, X = M.fromHandle, U = { position: { ...z.position } };
    if (X.id === "loop_handle" ? U.parentId = q.id : q.parentId && (U.parentId = q.parentId), U.parentId) {
      const G = v(U.parentId);
      U.position = {
        x: z.position.x - G.position.x,
        y: z.position.y - G.position.y
      }, x(U.parentId, z.id), l.updateNode(z.id, U);
    }
  }, { getEdgesByTarget: m } = xw(), b = (P) => {
    P.edges.forEach((z) => {
      const q = v(z.target);
      if (q && q.parentId) {
        const X = m(z.target), U = v(q.parentId);
        if (X.length === 0)
          l.updateNode(q.id, {
            parentId: void 0,
            position: {
              x: q.position.x + U.position.x,
              y: q.position.y + U.position.y
            }
          });
        else {
          let G = !1;
          for (let W = 0; W < X.length; W++) {
            const le = X[W], ye = v(le.source);
            if (ye.parentId || ye.type === "loopNode") {
              G = !0;
              break;
            }
          }
          G || l.updateNode(q.id, {
            parentId: void 0,
            position: {
              x: q.position.x + U.position.x,
              y: q.position.y + U.position.y
            }
          });
        }
      }
    });
  }, p = (P, M) => {
  }, C = (P) => {
  }, H = {}, S = er().customNodes;
  if (S)
    for (let P of Object.keys(S))
      H[P] = Gd;
  const { nodes: D, edges: L, viewport: A } = We(), I = er().onDataChange;
  I && (D.subscribe(() => {
    I(
      {
        nodes: o(),
        edges: i(),
        viewport: s()
      },
      { eventType: "nodesChange" }
    );
  }), L.subscribe(() => {
    I(
      {
        nodes: o(),
        edges: i(),
        viewport: s()
      },
      { eventType: "edgesChange" }
    );
  }), A.subscribe(() => {
    I(
      {
        nodes: o(),
        edges: i(),
        viewport: s()
      },
      { eventType: "viewportChange" }
    );
  }));
  var O = Aw(), R = F(O);
  const E = /* @__PURE__ */ Ne(() => ({ ...hw, ...H })), N = /* @__PURE__ */ Ne(() => ({
    // animated: true,
    // label: 'edge label',
    markerEnd: {
      type: ko.ArrowClosed,
      // color: 'red',
      width: 20,
      height: 20
    }
  }));
  od(R, lt(
    {
      get nodeTypes() {
        return g(E);
      }
    },
    ii,
    {
      class: "tinyflow-logo",
      isValidConnection: _,
      onconnectend: k,
      onconnectstart: p,
      onconnect: C,
      connectionRadius: 50,
      ondelete: b,
      onclick: (P) => {
        const M = P.target;
        M.classList.contains("svelte-flow__edge-interaction") || M.classList.contains("panel-content") || M.closest(".panel-content") || (J(u, !1), J(c, null));
      },
      get defaultEdgeOptions() {
        return g(N);
      },
      $$events: {
        drop: h,
        dragover: f,
        edgeclick: (P) => {
          J(u, !0), J(c, P.detail.edge, !0);
        }
      },
      children: (P, M) => {
        var z = Vw(), q = we(z);
        hd(q, {});
        var X = B(q, 2);
        dd(X, {});
        var U = B(X, 2);
        pd(U, {});
        var G = B(U, 2);
        {
          var W = (le) => {
            zo(le, {
              children: (ye, ge) => {
                var oe = Dw(), Te = B(F(oe), 4), Q = F(Te);
                const re = /* @__PURE__ */ Ne(() => {
                  var Ee, _e;
                  return (_e = (Ee = g(c)) == null ? void 0 : Ee.data) == null ? void 0 : _e.condition;
                });
                pt(Q, {
                  rows: 3,
                  placeholder: "请输入边条件",
                  style: "width: 100%",
                  get value() {
                    return g(re);
                  },
                  onchange: (Ee) => {
                    g(c) && d(g(c).id, { condition: Ee.target.value });
                  }
                }), Y(Te), Y(oe), V(ye, oe);
              },
              $$slots: { default: !0 }
            });
          };
          pe(G, (le) => {
            g(u) && le(W);
          });
        }
        V(P, z);
      },
      $$slots: { default: !0 }
    }
  ));
  var $ = B(R, 2);
  Kd($, {}), Y(O), V(e, O);
  var T = fe({
    get onInit() {
      return a();
    },
    set onInit(P) {
      a(P), y();
    }
  });
  return r(), T;
}
ue(jd, { onInit: {} }, [], [], !0);
function Lw(e, t) {
  de(t, !0);
  const n = w(t, "options", 7), r = w(t, "onInit", 7);
  let { data: o } = n();
  if (typeof o == "string")
    try {
      o = JSON.parse(o.trim());
    } catch {
      console.error("Invalid JSON data:", o);
    }
  return ii.init((o == null ? void 0 : o.nodes) || [], (o == null ? void 0 : o.edges) || []), Ar("tinyflow_options", n()), id(e, {
    fitView: !0,
    children: (i, s) => {
      jd(i, {
        get onInit() {
          return r();
        }
      });
    },
    $$slots: { default: !0 }
  }), fe({
    get options() {
      return n();
    },
    set options(i) {
      n(i), y();
    },
    get onInit() {
      return r();
    },
    set onInit(i) {
      r(i), y();
    }
  });
}
customElements.define("tinyflow-component", ue(Lw, { options: {}, onInit: {} }, [], [], !1));
export {
  Yw as Tinyflow
};
//# sourceMappingURL=index.js.map
