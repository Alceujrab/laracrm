import { r as reactExports, G as G$2, d as requireReact, e as reactDomExports, j as jsxRuntimeExports, u as useForm } from "./app-3e9XK7Ij.js";
import { T as TextInput, I as InputError } from "./TextInput-NLp4pFdO.js";
import { I as InputLabel } from "./InputLabel-B24MWDgx.js";
import { s as s$3, Y, K, y as y$2, n as n$5, o as o$5, a as o$6, u as u$5, b as s$4, t as t$3, T as T$2, p as p$3, l as l$4, f as f$6, c as u$6, i as i$4, d as s$5, A as A$1, e as Ke$1, O as Oe } from "./transition-BhKRD75I.js";
function l$3(n2) {
  var u2;
  return s$3.isServer ? null : n2 == null ? document : (u2 = n2 == null ? void 0 : n2.ownerDocument) != null ? u2 : document;
}
function r$4(n2) {
  var u2, o3;
  return s$3.isServer ? null : n2 == null ? document : (o3 = (u2 = n2 == null ? void 0 : n2.getRootNode) == null ? void 0 : u2.call(n2)) != null ? o3 : document;
}
function e$3(n2) {
  var u2, o3;
  return (o3 = (u2 = r$4(n2)) == null ? void 0 : u2.activeElement) != null ? o3 : null;
}
function d$2(n2) {
  return e$3(n2) === n2;
}
function n$4(e2) {
  return reactExports.useMemo(() => e2, Object.values(e2));
}
let e$2 = reactExports.createContext(void 0);
function a$a() {
  return reactExports.useContext(e$2);
}
let a$9 = "span";
var s$2 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(s$2 || {});
function l$2(t2, r2) {
  var n2;
  let { features: d2 = 1, ...e2 } = t2, o3 = { ref: r2, "aria-hidden": (d2 & 2) === 2 ? true : (n2 = e2["aria-hidden"]) != null ? n2 : void 0, hidden: (d2 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(d2 & 4) === 4 && (d2 & 2) !== 2 && { display: "none" } } };
  return K()({ ourProps: o3, theirProps: e2, slot: {}, defaultTag: a$9, name: "Hidden" });
}
let f$5 = Y(l$2);
function o$4(e2) {
  return typeof e2 != "object" || e2 === null ? false : "nodeType" in e2;
}
function t$2(e2) {
  return o$4(e2) && "tagName" in e2;
}
function n$3(e2) {
  return t$2(e2) && "accessKey" in e2;
}
function i$3(e2) {
  return t$2(e2) && "tabIndex" in e2;
}
function r$3(e2) {
  return t$2(e2) && "style" in e2;
}
function u$4(e2) {
  return n$3(e2) && e2.nodeName === "IFRAME";
}
function l$1(e2) {
  return n$3(e2) && e2.nodeName === "INPUT";
}
let a$8 = reactExports.createContext(null);
a$8.displayName = "DescriptionContext";
function f$4() {
  let r2 = reactExports.useContext(a$8);
  if (r2 === null) {
    let e2 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(e2, f$4), e2;
  }
  return r2;
}
function H$1() {
  let [r2, e2] = reactExports.useState([]);
  return [r2.length > 0 ? r2.join(" ") : void 0, reactExports.useMemo(() => function(t2) {
    let i2 = o$5((n2) => (e2((o3) => [...o3, n2]), () => e2((o3) => {
      let s2 = o3.slice(), p2 = s2.indexOf(n2);
      return p2 !== -1 && s2.splice(p2, 1), s2;
    }))), l2 = reactExports.useMemo(() => ({ register: i2, slot: t2.slot, name: t2.name, props: t2.props, value: t2.value }), [i2, t2.slot, t2.name, t2.props, t2.value]);
    return G$2.createElement(a$8.Provider, { value: l2 }, t2.children);
  }, [e2])];
}
let I$4 = "p";
function C$2(r2, e2) {
  let c2 = reactExports.useId(), t2 = a$a(), { id: i2 = `headlessui-description-${c2}`, ...l2 } = r2, n2 = f$4(), o3 = y$2(e2);
  n$5(() => n2.register(i2), [i2, n2.register]);
  let s2 = n$4({ ...n2.slot, disabled: t2 || false }), p2 = { ref: o3, ...n2.props, id: i2 };
  return K()({ ourProps: p2, theirProps: l2, slot: s2, defaultTag: I$4, name: n2.name || "Description" });
}
let _$2 = Y(C$2), M = Object.assign(_$2, {});
var o$3 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$3 || {});
let e$1 = reactExports.createContext(() => {
});
function C$1({ value: t2, children: o3 }) {
  return G$2.createElement(e$1.Provider, { value: t2 }, o3);
}
let a$7 = class a extends Map {
  constructor(t2) {
    super();
    this.factory = t2;
  }
  get(t2) {
    let e2 = super.get(t2);
    return e2 === void 0 && (e2 = this.factory(t2), this.set(t2, e2)), e2;
  }
};
var h$2 = Object.defineProperty;
var v$1 = (t2, e2, r2) => e2 in t2 ? h$2(t2, e2, { enumerable: true, configurable: true, writable: true, value: r2 }) : t2[e2] = r2;
var S$4 = (t2, e2, r2) => (v$1(t2, e2 + "", r2), r2), b = (t2, e2, r2) => {
  if (!e2.has(t2)) throw TypeError("Cannot " + r2);
};
var i$2 = (t2, e2, r2) => (b(t2, e2, "read from private field"), r2 ? r2.call(t2) : e2.get(t2)), c$3 = (t2, e2, r2) => {
  if (e2.has(t2)) throw TypeError("Cannot add the same private member more than once");
  e2 instanceof WeakSet ? e2.add(t2) : e2.set(t2, r2);
}, u$3 = (t2, e2, r2, s2) => (b(t2, e2, "write to private field"), e2.set(t2, r2), r2);
var n$2, a$6, o$2;
let T$1 = class T {
  constructor(e2) {
    c$3(this, n$2, {});
    c$3(this, a$6, new a$7(() => /* @__PURE__ */ new Set()));
    c$3(this, o$2, /* @__PURE__ */ new Set());
    S$4(this, "disposables", o$6());
    u$3(this, n$2, e2), s$3.isServer && this.disposables.microTask(() => {
      this.dispose();
    });
  }
  dispose() {
    this.disposables.dispose();
  }
  get state() {
    return i$2(this, n$2);
  }
  subscribe(e2, r2) {
    if (s$3.isServer) return () => {
    };
    let s2 = { selector: e2, callback: r2, current: e2(i$2(this, n$2)) };
    return i$2(this, o$2).add(s2), this.disposables.add(() => {
      i$2(this, o$2).delete(s2);
    });
  }
  on(e2, r2) {
    return s$3.isServer ? () => {
    } : (i$2(this, a$6).get(e2).add(r2), this.disposables.add(() => {
      i$2(this, a$6).get(e2).delete(r2);
    }));
  }
  send(e2) {
    let r2 = this.reduce(i$2(this, n$2), e2);
    if (r2 !== i$2(this, n$2)) {
      u$3(this, n$2, r2);
      for (let s2 of i$2(this, o$2)) {
        let l2 = s2.selector(i$2(this, n$2));
        j$2(s2.current, l2) || (s2.current = l2, s2.callback(l2));
      }
      for (let s2 of i$2(this, a$6).get(e2.type)) s2(i$2(this, n$2), e2);
    }
  }
};
n$2 = /* @__PURE__ */ new WeakMap(), a$6 = /* @__PURE__ */ new WeakMap(), o$2 = /* @__PURE__ */ new WeakMap();
function j$2(t2, e2) {
  return Object.is(t2, e2) ? true : typeof t2 != "object" || t2 === null || typeof e2 != "object" || e2 === null ? false : Array.isArray(t2) && Array.isArray(e2) ? t2.length !== e2.length ? false : f$3(t2[Symbol.iterator](), e2[Symbol.iterator]()) : t2 instanceof Map && e2 instanceof Map || t2 instanceof Set && e2 instanceof Set ? t2.size !== e2.size ? false : f$3(t2.entries(), e2.entries()) : p$2(t2) && p$2(e2) ? f$3(Object.entries(t2)[Symbol.iterator](), Object.entries(e2)[Symbol.iterator]()) : false;
}
function f$3(t2, e2) {
  do {
    let r2 = t2.next(), s2 = e2.next();
    if (r2.done && s2.done) return true;
    if (r2.done || s2.done || !Object.is(r2.value, s2.value)) return false;
  } while (true);
}
function p$2(t2) {
  if (Object.prototype.toString.call(t2) !== "[object Object]") return false;
  let e2 = Object.getPrototypeOf(t2);
  return e2 === null || Object.getPrototypeOf(e2) === null;
}
var a$5 = Object.defineProperty;
var r$2 = (e2, c2, t2) => c2 in e2 ? a$5(e2, c2, { enumerable: true, configurable: true, writable: true, value: t2 }) : e2[c2] = t2;
var p$1 = (e2, c2, t2) => (r$2(e2, typeof c2 != "symbol" ? c2 + "" : c2, t2), t2);
var k$1 = ((t2) => (t2[t2.Push = 0] = "Push", t2[t2.Pop = 1] = "Pop", t2))(k$1 || {});
let y$1 = { [0](e2, c2) {
  let t2 = c2.id, s2 = e2.stack, i2 = e2.stack.indexOf(t2);
  if (i2 !== -1) {
    let n2 = e2.stack.slice();
    return n2.splice(i2, 1), n2.push(t2), s2 = n2, { ...e2, stack: s2 };
  }
  return { ...e2, stack: [...e2.stack, t2] };
}, [1](e2, c2) {
  let t2 = c2.id, s2 = e2.stack.indexOf(t2);
  if (s2 === -1) return e2;
  let i2 = e2.stack.slice();
  return i2.splice(s2, 1), { ...e2, stack: i2 };
} };
let o$1 = class o extends T$1 {
  constructor() {
    super(...arguments);
    p$1(this, "actions", { push: (t2) => this.send({ type: 0, id: t2 }), pop: (t2) => this.send({ type: 1, id: t2 }) });
    p$1(this, "selectors", { isTop: (t2, s2) => t2.stack[t2.stack.length - 1] === s2, inStack: (t2, s2) => t2.stack.includes(s2) });
  }
  static new() {
    return new o({ stack: [] });
  }
  reduce(t2, s2) {
    return u$5(s2.type, y$1, t2, s2);
  }
};
const x$3 = new a$7(() => o$1.new());
var withSelector = { exports: {} };
var useSyncExternalStoreWithSelector_production = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredUseSyncExternalStoreWithSelector_production;
function requireUseSyncExternalStoreWithSelector_production() {
  if (hasRequiredUseSyncExternalStoreWithSelector_production) return useSyncExternalStoreWithSelector_production;
  hasRequiredUseSyncExternalStoreWithSelector_production = 1;
  var React = requireReact();
  function is(x2, y2) {
    return x2 === y2 && (0 !== x2 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
  }
  var objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = React.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
  useSyncExternalStoreWithSelector_production.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
    var instRef = useRef(null);
    if (null === instRef.current) {
      var inst = { hasValue: false, value: null };
      instRef.current = inst;
    } else inst = instRef.current;
    instRef = useMemo(
      function() {
        function memoizedSelector(nextSnapshot) {
          if (!hasMemo) {
            hasMemo = true;
            memoizedSnapshot = nextSnapshot;
            nextSnapshot = selector(nextSnapshot);
            if (void 0 !== isEqual && inst.hasValue) {
              var currentSelection = inst.value;
              if (isEqual(currentSelection, nextSnapshot))
                return memoizedSelection = currentSelection;
            }
            return memoizedSelection = nextSnapshot;
          }
          currentSelection = memoizedSelection;
          if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
          var nextSelection = selector(nextSnapshot);
          if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
            return memoizedSnapshot = nextSnapshot, currentSelection;
          memoizedSnapshot = nextSnapshot;
          return memoizedSelection = nextSelection;
        }
        var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
        return [
          function() {
            return memoizedSelector(getSnapshot());
          },
          null === maybeGetServerSnapshot ? void 0 : function() {
            return memoizedSelector(maybeGetServerSnapshot());
          }
        ];
      },
      [getSnapshot, getServerSnapshot, selector, isEqual]
    );
    var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
    useEffect(
      function() {
        inst.hasValue = true;
        inst.value = value;
      },
      [value]
    );
    useDebugValue(value);
    return value;
  };
  return useSyncExternalStoreWithSelector_production;
}
var hasRequiredWithSelector;
function requireWithSelector() {
  if (hasRequiredWithSelector) return withSelector.exports;
  hasRequiredWithSelector = 1;
  {
    withSelector.exports = requireUseSyncExternalStoreWithSelector_production();
  }
  return withSelector.exports;
}
var withSelectorExports = requireWithSelector();
function S$3(e2, n2, r2 = j$2) {
  return withSelectorExports.useSyncExternalStoreWithSelector(o$5((i2) => e2.subscribe(s$1, i2)), o$5(() => e2.state), o$5(() => e2.state), o$5(n2), r2);
}
function s$1(e2) {
  return e2;
}
function I$3(o3, s2) {
  let t2 = reactExports.useId(), r2 = x$3.get(s2), [i2, c2] = S$3(r2, reactExports.useCallback((e2) => [r2.selectors.isTop(e2, t2), r2.selectors.inStack(e2, t2)], [r2, t2]));
  return n$5(() => {
    if (o3) return r2.actions.push(t2), () => r2.actions.pop(t2);
  }, [r2, o3, t2]), o3 ? c2 ? i2 : true : false;
}
let f$2 = /* @__PURE__ */ new Map(), u$2 = /* @__PURE__ */ new Map();
function h$1(t2) {
  var e2;
  let r2 = (e2 = u$2.get(t2)) != null ? e2 : 0;
  return u$2.set(t2, r2 + 1), r2 !== 0 ? () => m$2(t2) : (f$2.set(t2, { "aria-hidden": t2.getAttribute("aria-hidden"), inert: t2.inert }), t2.setAttribute("aria-hidden", "true"), t2.inert = true, () => m$2(t2));
}
function m$2(t2) {
  var i2;
  let r2 = (i2 = u$2.get(t2)) != null ? i2 : 1;
  if (r2 === 1 ? u$2.delete(t2) : u$2.set(t2, r2 - 1), r2 !== 1) return;
  let e2 = f$2.get(t2);
  e2 && (e2["aria-hidden"] === null ? t2.removeAttribute("aria-hidden") : t2.setAttribute("aria-hidden", e2["aria-hidden"]), t2.inert = e2.inert, f$2.delete(t2));
}
function y(t2, { allowed: r2, disallowed: e2 } = {}) {
  let i2 = I$3(t2, "inert-others");
  n$5(() => {
    var d2, c2;
    if (!i2) return;
    let a3 = o$6();
    for (let n2 of (d2 = e2 == null ? void 0 : e2()) != null ? d2 : []) n2 && a3.add(h$1(n2));
    let s2 = (c2 = r2 == null ? void 0 : r2()) != null ? c2 : [];
    for (let n2 of s2) {
      if (!n2) continue;
      let l2 = l$3(n2);
      if (!l2) continue;
      let o3 = n2.parentElement;
      for (; o3 && o3 !== l2.body; ) {
        for (let p2 of o3.children) s2.some((E2) => p2.contains(E2)) || a3.add(h$1(p2));
        o3 = o3.parentElement;
      }
    }
    return a3.dispose;
  }, [i2, r2, e2]);
}
function p(s2, n2, o3) {
  let i2 = s$4((t2) => {
    let e2 = t2.getBoundingClientRect();
    e2.x === 0 && e2.y === 0 && e2.width === 0 && e2.height === 0 && o3();
  });
  reactExports.useEffect(() => {
    if (!s2) return;
    let t2 = n2 === null ? null : n$3(n2) ? n2 : n2.current;
    if (!t2) return;
    let e2 = o$6();
    if (typeof ResizeObserver != "undefined") {
      let r2 = new ResizeObserver(() => i2.current(t2));
      r2.observe(t2), e2.add(() => r2.disconnect());
    }
    if (typeof IntersectionObserver != "undefined") {
      let r2 = new IntersectionObserver(() => i2.current(t2));
      r2.observe(t2), e2.add(() => r2.disconnect());
    }
    return () => e2.dispose();
  }, [n2, i2, s2]);
}
let E$1 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "details>summary", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(","), S$2 = ["[data-autofocus]"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var T2 = ((o3) => (o3[o3.First = 1] = "First", o3[o3.Previous = 2] = "Previous", o3[o3.Next = 4] = "Next", o3[o3.Last = 8] = "Last", o3[o3.WrapAround = 16] = "WrapAround", o3[o3.NoScroll = 32] = "NoScroll", o3[o3.AutoFocus = 64] = "AutoFocus", o3))(T2 || {}), A = ((n2) => (n2[n2.Error = 0] = "Error", n2[n2.Overflow = 1] = "Overflow", n2[n2.Success = 2] = "Success", n2[n2.Underflow = 3] = "Underflow", n2))(A || {}), O$1 = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(O$1 || {});
function x$2(e2 = document.body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(E$1)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function h(e2 = document.body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(S$2)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var I$2 = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(I$2 || {});
function H(e2, r2 = 0) {
  var t2;
  return e2 === ((t2 = l$3(e2)) == null ? void 0 : t2.body) ? false : u$5(r2, { [0]() {
    return e2.matches(E$1);
  }, [1]() {
    let l2 = e2;
    for (; l2 !== null; ) {
      if (l2.matches(E$1)) return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
var g = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(g || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e2) => {
  e2.metaKey || e2.altKey || e2.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e2) => {
  e2.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e2.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function w$3(e2) {
  e2 == null || e2.focus({ preventScroll: true });
}
let _$1 = ["textarea", "input"].join(",");
function P(e2) {
  var r2, t2;
  return (t2 = (r2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r2.call(e2, _$1)) != null ? t2 : false;
}
function G$1(e2, r2 = (t2) => t2) {
  return e2.slice().sort((t2, l2) => {
    let n2 = r2(t2), a3 = r2(l2);
    if (n2 === null || a3 === null) return 0;
    let u2 = n2.compareDocumentPosition(a3);
    return u2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : u2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function v(e2, r2, { sorted: t2 = true, relativeTo: l2 = null, skipElements: n2 = [] } = {}) {
  let a3 = Array.isArray(e2) ? e2.length > 0 ? r$4(e2[0]) : document : r$4(e2), u2 = Array.isArray(e2) ? t2 ? G$1(e2) : e2 : r2 & 64 ? h(e2) : x$2(e2);
  n2.length > 0 && u2.length > 1 && (u2 = u2.filter((i2) => !n2.some((d2) => d2 != null && "current" in d2 ? (d2 == null ? void 0 : d2.current) === i2 : d2 === i2))), l2 = l2 != null ? l2 : a3 == null ? void 0 : a3.activeElement;
  let o3 = (() => {
    if (r2 & 5) return 1;
    if (r2 & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), M2 = (() => {
    if (r2 & 1) return 0;
    if (r2 & 2) return Math.max(0, u2.indexOf(l2)) - 1;
    if (r2 & 4) return Math.max(0, u2.indexOf(l2)) + 1;
    if (r2 & 8) return u2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), N = r2 & 32 ? { preventScroll: true } : {}, m2 = 0, c2 = u2.length, s2;
  do {
    if (m2 >= c2 || m2 + c2 <= 0) return 0;
    let i2 = M2 + m2;
    if (r2 & 16) i2 = (i2 + c2) % c2;
    else {
      if (i2 < 0) return 3;
      if (i2 >= c2) return 1;
    }
    s2 = u2[i2], s2 == null || s2.focus(N), m2 += o3;
  } while (s2 !== e$3(s2));
  return r2 & 6 && P(s2) && s2.select(), 2;
}
function t$1() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i$1() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n$1() {
  return t$1() || i$1();
}
function i(t2, e2, o3, n2) {
  let u2 = s$4(o3);
  reactExports.useEffect(() => {
    if (!t2) return;
    function r2(m2) {
      u2.current(m2);
    }
    return document.addEventListener(e2, r2, n2), () => document.removeEventListener(e2, r2, n2);
  }, [t2, e2, n2]);
}
function s(t2, e2, o3, n2) {
  let i2 = s$4(o3);
  reactExports.useEffect(() => {
    if (!t2) return;
    function r2(d2) {
      i2.current(d2);
    }
    return window.addEventListener(e2, r2, n2), () => window.removeEventListener(e2, r2, n2);
  }, [t2, e2, n2]);
}
const C = 30;
function k(o3, f2, h2) {
  let m2 = s$4(h2), s$12 = reactExports.useCallback(function(e2, c2) {
    if (e2.defaultPrevented) return;
    let r2 = c2(e2);
    if (r2 === null || !r2.getRootNode().contains(r2) || !r2.isConnected) return;
    let M2 = (function u2(n2) {
      return typeof n2 == "function" ? u2(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
    })(f2);
    for (let u2 of M2) if (u2 !== null && (u2.contains(r2) || e2.composed && e2.composedPath().includes(u2))) return;
    return !H(r2, I$2.Loose) && r2.tabIndex !== -1 && e2.preventDefault(), m2.current(e2, r2);
  }, [m2, f2]), i$12 = reactExports.useRef(null);
  i(o3, "pointerdown", (t2) => {
    var e2, c2;
    n$1() || (i$12.current = ((c2 = (e2 = t2.composedPath) == null ? void 0 : e2.call(t2)) == null ? void 0 : c2[0]) || t2.target);
  }, true), i(o3, "pointerup", (t2) => {
    if (n$1() || !i$12.current) return;
    let e2 = i$12.current;
    return i$12.current = null, s$12(t2, () => e2);
  }, true);
  let l2 = reactExports.useRef({ x: 0, y: 0 });
  i(o3, "touchstart", (t2) => {
    l2.current.x = t2.touches[0].clientX, l2.current.y = t2.touches[0].clientY;
  }, true), i(o3, "touchend", (t2) => {
    let e2 = { x: t2.changedTouches[0].clientX, y: t2.changedTouches[0].clientY };
    if (!(Math.abs(e2.x - l2.current.x) >= C || Math.abs(e2.y - l2.current.y) >= C)) return s$12(t2, () => i$3(t2.target) ? t2.target : null);
  }, true), s(o3, "blur", (t2) => s$12(t2, () => u$4(window.document.activeElement) ? window.document.activeElement : null), true);
}
function u$1(...e2) {
  return reactExports.useMemo(() => l$3(...e2), [...e2]);
}
function E(n2, e2, a3, t2) {
  let i2 = s$4(a3);
  reactExports.useEffect(() => {
    n2 = n2 != null ? n2 : window;
    function r2(o3) {
      i2.current(o3);
    }
    return n2.addEventListener(e2, r2, t2), () => n2.removeEventListener(e2, r2, t2);
  }, [n2, e2, t2]);
}
function o2(t2) {
  return reactExports.useSyncExternalStore(t2.subscribe, t2.getSnapshot, t2.getSnapshot);
}
function a$4(o3, r2) {
  let t2 = o3(), n2 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t2;
  }, subscribe(e2) {
    return n2.add(e2), () => n2.delete(e2);
  }, dispatch(e2, ...s2) {
    let i2 = r2[e2].call(t2, ...s2);
    i2 && (t2 = i2, n2.forEach((c2) => c2()));
  } };
}
function d$1() {
  let r2;
  return { before({ doc: e2 }) {
    var l2;
    let o3 = e2.documentElement, t2 = (l2 = e2.defaultView) != null ? l2 : window;
    r2 = Math.max(0, t2.innerWidth - o3.clientWidth);
  }, after({ doc: e2, d: o3 }) {
    let t2 = e2.documentElement, l2 = Math.max(0, t2.clientWidth - t2.offsetWidth), n2 = Math.max(0, r2 - l2);
    o3.style(t2, "paddingRight", `${n2}px`);
  } };
}
function w$2() {
  return t$1() ? { before({ doc: o3, d: r2, meta: m2 }) {
    function a3(s2) {
      for (let l2 of m2().containers) for (let c2 of l2()) if (c2.contains(s2)) return true;
      return false;
    }
    r2.microTask(() => {
      var c2;
      if (window.getComputedStyle(o3.documentElement).scrollBehavior !== "auto") {
        let t2 = o$6();
        t2.style(o3.documentElement, "scrollBehavior", "auto"), r2.add(() => r2.microTask(() => t2.dispose()));
      }
      let s2 = (c2 = window.scrollY) != null ? c2 : window.pageYOffset, l2 = null;
      r2.addEventListener(o3, "click", (t2) => {
        if (i$3(t2.target)) try {
          let e2 = t2.target.closest("a");
          if (!e2) return;
          let { hash: n2 } = new URL(e2.href), f2 = o3.querySelector(n2);
          i$3(f2) && !a3(f2) && (l2 = f2);
        } catch {
        }
      }, true), r2.group((t2) => {
        r2.addEventListener(o3, "touchstart", (e2) => {
          if (t2.dispose(), i$3(e2.target) && r$3(e2.target)) if (a3(e2.target)) {
            let n2 = e2.target;
            for (; n2.parentElement && a3(n2.parentElement); ) n2 = n2.parentElement;
            t2.style(n2, "overscrollBehavior", "contain");
          } else t2.style(e2.target, "touchAction", "none");
        });
      }), r2.addEventListener(o3, "touchmove", (t2) => {
        if (i$3(t2.target)) {
          if (l$1(t2.target)) return;
          if (a3(t2.target)) {
            let e2 = t2.target;
            for (; e2.parentElement && e2.dataset.headlessuiPortal !== "" && !(e2.scrollHeight > e2.clientHeight || e2.scrollWidth > e2.clientWidth); ) e2 = e2.parentElement;
            e2.dataset.headlessuiPortal === "" && t2.preventDefault();
          } else t2.preventDefault();
        }
      }, { passive: false }), r2.add(() => {
        var e2;
        let t2 = (e2 = window.scrollY) != null ? e2 : window.pageYOffset;
        s2 !== t2 && window.scrollTo(0, s2), l2 && l2.isConnected && (l2.scrollIntoView({ block: "nearest" }), l2 = null);
      });
    });
  } } : {};
}
function r$1() {
  return { before({ doc: e2, d: o3 }) {
    o3.style(e2.documentElement, "overflow", "hidden");
  } };
}
function r(e2) {
  let o3 = {};
  for (let t2 of e2) Object.assign(o3, t2(o3));
  return o3;
}
let c$2 = a$4(() => /* @__PURE__ */ new Map(), { PUSH(e2, o3) {
  var n2;
  let t2 = (n2 = this.get(e2)) != null ? n2 : { doc: e2, count: 0, d: o$6(), meta: /* @__PURE__ */ new Set(), computedMeta: {} };
  return t2.count++, t2.meta.add(o3), t2.computedMeta = r(t2.meta), this.set(e2, t2), this;
}, POP(e2, o3) {
  let t2 = this.get(e2);
  return t2 && (t2.count--, t2.meta.delete(o3), t2.computedMeta = r(t2.meta)), this;
}, SCROLL_PREVENT(e2) {
  let o3 = { doc: e2.doc, d: e2.d, meta() {
    return e2.computedMeta;
  } }, t2 = [w$2(), d$1(), r$1()];
  t2.forEach(({ before: n2 }) => n2 == null ? void 0 : n2(o3)), t2.forEach(({ after: n2 }) => n2 == null ? void 0 : n2(o3));
}, SCROLL_ALLOW({ d: e2 }) {
  e2.dispose();
}, TEARDOWN({ doc: e2 }) {
  this.delete(e2);
} });
c$2.subscribe(() => {
  let e2 = c$2.getSnapshot(), o3 = /* @__PURE__ */ new Map();
  for (let [t2] of e2) o3.set(t2, t2.documentElement.style.overflow);
  for (let t2 of e2.values()) {
    let n2 = o3.get(t2.doc) === "hidden", a3 = t2.count !== 0;
    (a3 && !n2 || !a3 && n2) && c$2.dispatch(t2.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t2), t2.count === 0 && c$2.dispatch("TEARDOWN", t2);
  }
});
function a$3(r2, e2, n2 = () => ({ containers: [] })) {
  let f2 = o2(c$2), o$12 = e2 ? f2.get(e2) : void 0, i2 = o$12 ? o$12.count > 0 : false;
  return n$5(() => {
    if (!(!e2 || !r2)) return c$2.dispatch("PUSH", e2, n2), () => c$2.dispatch("POP", e2, n2);
  }, [r2, e2]), i2;
}
function f$1(e2, c2, n2 = () => [document.body]) {
  let r2 = I$3(e2, "scroll-lock");
  a$3(r2, c2, (t2) => {
    var o3;
    return { containers: [...(o3 = t2.containers) != null ? o3 : [], n2] };
  });
}
function m$1(u2, t2) {
  let e2 = reactExports.useRef([]), r2 = o$5(u2);
  reactExports.useEffect(() => {
    let o3 = [...e2.current];
    for (let [a3, l2] of t2.entries()) if (e2.current[a3] !== l2) {
      let n2 = r2(t2, o3);
      return e2.current = t2, n2;
    }
  }, [r2, ...t2]);
}
function t(n2) {
  function e2() {
    document.readyState !== "loading" && (n2(), document.removeEventListener("DOMContentLoaded", e2));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e2), e2());
}
let n = [];
t(() => {
  function e2(t2) {
    if (!i$3(t2.target) || t2.target === document.body || n[0] === t2.target) return;
    let r2 = t2.target;
    r2 = r2.closest(E$1), n.unshift(r2 != null ? r2 : t2.target), n = n.filter((o3) => o3 != null && o3.isConnected), n.splice(10);
  }
  window.addEventListener("click", e2, { capture: true }), window.addEventListener("mousedown", e2, { capture: true }), window.addEventListener("focus", e2, { capture: true }), document.body.addEventListener("click", e2, { capture: true }), document.body.addEventListener("mousedown", e2, { capture: true }), document.body.addEventListener("focus", e2, { capture: true });
});
function c$1(t2) {
  let r2 = o$5(t2), e2 = reactExports.useRef(false);
  reactExports.useEffect(() => (e2.current = false, () => {
    e2.current = true, t$3(() => {
      e2.current && r2();
    });
  }), [r2]);
}
let e = reactExports.createContext(false);
function a$2() {
  return reactExports.useContext(e);
}
function l(o3) {
  return G$2.createElement(e.Provider, { value: o3.force }, o3.children);
}
function W(e2) {
  let o3 = a$2(), l2 = reactExports.useContext(c), [r2, p2] = reactExports.useState(() => {
    var s2;
    if (!o3 && l2 !== null) return (s2 = l2.current) != null ? s2 : null;
    if (s$3.isServer) return null;
    let t2 = e2 == null ? void 0 : e2.getElementById("headlessui-portal-root");
    if (t2) return t2;
    if (e2 === null) return null;
    let n2 = e2.createElement("div");
    return n2.setAttribute("id", "headlessui-portal-root"), e2.body.appendChild(n2);
  });
  return reactExports.useEffect(() => {
    r2 !== null && (e2 != null && e2.body.contains(r2) || e2 == null || e2.body.appendChild(r2));
  }, [r2, e2]), reactExports.useEffect(() => {
    o3 || l2 !== null && p2(l2.current);
  }, [l2, p2, o3]), r2;
}
let _ = reactExports.Fragment, j$1 = Y(function(o3, l2) {
  let { ownerDocument: r2 = null, ...p2 } = o3, t2 = reactExports.useRef(null), n2 = y$2(T$2((a3) => {
    t2.current = a3;
  }), l2), s2 = u$1(t2.current), C2 = r2 != null ? r2 : s2, u2 = W(C2), y2 = reactExports.useContext(m), g2 = p$3(), v2 = K();
  return c$1(() => {
    var a3;
    u2 && u2.childNodes.length <= 0 && ((a3 = u2.parentElement) == null || a3.removeChild(u2));
  }), u2 ? reactDomExports.createPortal(G$2.createElement("div", { "data-headlessui-portal": "", ref: (a3) => {
    g2.dispose(), y2 && a3 && g2.add(y2.register(a3));
  } }, v2({ ourProps: { ref: n2 }, theirProps: p2, slot: {}, defaultTag: _, name: "Portal" })), u2) : null;
});
function S$1(e2, o3) {
  let l2 = y$2(o3), { enabled: r2 = true, ownerDocument: p2, ...t2 } = e2, n2 = K();
  return r2 ? G$2.createElement(j$1, { ...t2, ownerDocument: p2, ref: l2 }) : n2({ ourProps: { ref: l2 }, theirProps: t2, slot: {}, defaultTag: _, name: "Portal" });
}
let I$1 = reactExports.Fragment, c = reactExports.createContext(null);
function D(e2, o3) {
  let { target: l2, ...r2 } = e2, t2 = { ref: y$2(o3) }, n2 = K();
  return G$2.createElement(c.Provider, { value: l2 }, n2({ ourProps: t2, theirProps: r2, defaultTag: I$1, name: "Popover.Group" }));
}
let m = reactExports.createContext(null);
function ee$1() {
  let e2 = reactExports.useContext(m), o3 = reactExports.useRef([]), l2 = o$5((t2) => (o3.current.push(t2), e2 && e2.register(t2), () => r2(t2))), r2 = o$5((t2) => {
    let n2 = o3.current.indexOf(t2);
    n2 !== -1 && o3.current.splice(n2, 1), e2 && e2.unregister(t2);
  }), p2 = reactExports.useMemo(() => ({ register: l2, unregister: r2, portals: o3 }), [l2, r2, o3]);
  return [o3, reactExports.useMemo(() => function({ children: n2 }) {
    return G$2.createElement(m.Provider, { value: p2 }, n2);
  }, [p2])];
}
let J = Y(S$1), X = Y(D), te$1 = Object.assign(J, { Group: X });
function a$1(o3, r2 = typeof document != "undefined" ? document.defaultView : null, t2) {
  let n2 = I$3(o3, "escape");
  E(r2, "keydown", (e2) => {
    n2 && (e2.defaultPrevented || e2.key === o$3.Escape && t2(e2));
  });
}
function f() {
  var t2;
  let [e2] = reactExports.useState(() => typeof window != "undefined" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [o3, c2] = reactExports.useState((t2 = e2 == null ? void 0 : e2.matches) != null ? t2 : false);
  return n$5(() => {
    if (!e2) return;
    function n2(r2) {
      c2(r2.matches);
    }
    return e2.addEventListener("change", n2), () => e2.removeEventListener("change", n2);
  }, [e2]), o3;
}
function S({ defaultContainers: l2 = [], portals: n2, mainTreeNode: o3 } = {}) {
  let c2 = o$5(() => {
    var r2, u2;
    let i2 = l$3(o3), t2 = [];
    for (let e2 of l2) e2 !== null && (t$2(e2) ? t2.push(e2) : "current" in e2 && t$2(e2.current) && t2.push(e2.current));
    if (n2 != null && n2.current) for (let e2 of n2.current) t2.push(e2);
    for (let e2 of (r2 = i2 == null ? void 0 : i2.querySelectorAll("html > *, body > *")) != null ? r2 : []) e2 !== document.body && e2 !== document.head && t$2(e2) && e2.id !== "headlessui-portal-root" && (o3 && (e2.contains(o3) || e2.contains((u2 = o3 == null ? void 0 : o3.getRootNode()) == null ? void 0 : u2.host)) || t2.some((E2) => e2.contains(E2)) || t2.push(e2));
    return t2;
  });
  return { resolveContainers: c2, contains: o$5((i2) => c2().some((t2) => t2.contains(i2))) };
}
let d = reactExports.createContext(null);
function j({ children: l2, node: n2 }) {
  let [o3, c2] = reactExports.useState(null), i2 = x$1(n2 != null ? n2 : o3);
  return G$2.createElement(d.Provider, { value: i2 }, l2, i2 === null && G$2.createElement(f$5, { features: s$2.Hidden, ref: (t2) => {
    var r2, u2;
    if (t2) {
      for (let e2 of (u2 = (r2 = l$3(t2)) == null ? void 0 : r2.querySelectorAll("html > *, body > *")) != null ? u2 : []) if (e2 !== document.body && e2 !== document.head && t$2(e2) && e2 != null && e2.contains(t2)) {
        c2(e2);
        break;
      }
    }
  } }));
}
function x$1(l2 = null) {
  var n2;
  return (n2 = reactExports.useContext(d)) != null ? n2 : l2;
}
var a2 = ((r2) => (r2[r2.Forwards = 0] = "Forwards", r2[r2.Backwards = 1] = "Backwards", r2))(a2 || {});
function u() {
  let e2 = reactExports.useRef(0);
  return s(true, "keydown", (r2) => {
    r2.key === "Tab" && (e2.current = r2.shiftKey ? 1 : 0);
  }, true), e2;
}
function x(o3) {
  if (!o3) return /* @__PURE__ */ new Set();
  if (typeof o3 == "function") return new Set(o3());
  let t2 = /* @__PURE__ */ new Set();
  for (let e2 of o3.current) t$2(e2.current) && t2.add(e2.current);
  return t2;
}
let $ = "div";
var G = ((n2) => (n2[n2.None = 0] = "None", n2[n2.InitialFocus = 1] = "InitialFocus", n2[n2.TabLock = 2] = "TabLock", n2[n2.FocusLock = 4] = "FocusLock", n2[n2.RestoreFocus = 8] = "RestoreFocus", n2[n2.AutoFocus = 16] = "AutoFocus", n2))(G || {});
function w$1(o3, t2) {
  let e2 = reactExports.useRef(null), r2 = y$2(e2, t2), { initialFocus: u$22, initialFocusFallback: a$12, containers: n2, features: s2 = 15, ...f2 } = o3;
  l$4() || (s2 = 0);
  let l2 = u$1(e2.current);
  re(s2, { ownerDocument: l2 });
  let T$12 = ne(s2, { ownerDocument: l2, container: e2, initialFocus: u$22, initialFocusFallback: a$12 });
  oe(s2, { ownerDocument: l2, container: e2, containers: n2, previousActiveElement: T$12 });
  let g2 = u(), A2 = o$5((c2) => {
    if (!n$3(e2.current)) return;
    let E2 = e2.current;
    ((V) => V())(() => {
      u$5(g2.current, { [a2.Forwards]: () => {
        v(E2, T2.First, { skipElements: [c2.relatedTarget, a$12] });
      }, [a2.Backwards]: () => {
        v(E2, T2.Last, { skipElements: [c2.relatedTarget, a$12] });
      } });
    });
  }), v$12 = I$3(!!(s2 & 2), "focus-trap#tab-lock"), N = p$3(), b2 = reactExports.useRef(false), k2 = { ref: r2, onKeyDown(c2) {
    c2.key == "Tab" && (b2.current = true, N.requestAnimationFrame(() => {
      b2.current = false;
    }));
  }, onBlur(c2) {
    if (!(s2 & 4)) return;
    let E2 = x(n2);
    n$3(e2.current) && E2.add(e2.current);
    let L = c2.relatedTarget;
    i$3(L) && L.dataset.headlessuiFocusGuard !== "true" && (I(E2, L) || (b2.current ? v(e2.current, u$5(g2.current, { [a2.Forwards]: () => T2.Next, [a2.Backwards]: () => T2.Previous }) | T2.WrapAround, { relativeTo: c2.target }) : i$3(c2.target) && w$3(c2.target)));
  } }, B = K();
  return G$2.createElement(G$2.Fragment, null, v$12 && G$2.createElement(f$5, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: A2, features: s$2.Focusable }), B({ ourProps: k2, theirProps: f2, defaultTag: $, name: "FocusTrap" }), v$12 && G$2.createElement(f$5, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: A2, features: s$2.Focusable }));
}
let ee = Y(w$1), ge = Object.assign(ee, { features: G });
function te(o3 = true) {
  let t2 = reactExports.useRef(n.slice());
  return m$1(([e2], [r2]) => {
    r2 === true && e2 === false && t$3(() => {
      t2.current.splice(0);
    }), r2 === false && e2 === true && (t2.current = n.slice());
  }, [o3, n, t2]), o$5(() => {
    var e2;
    return (e2 = t2.current.find((r2) => r2 != null && r2.isConnected)) != null ? e2 : null;
  });
}
function re(o3, { ownerDocument: t2 }) {
  let e2 = !!(o3 & 8), r2 = te(e2);
  m$1(() => {
    e2 || d$2(t2 == null ? void 0 : t2.body) && w$3(r2());
  }, [e2]), c$1(() => {
    e2 && w$3(r2());
  });
}
function ne(o3, { ownerDocument: t2, container: e2, initialFocus: r2, initialFocusFallback: u2 }) {
  let a3 = reactExports.useRef(null), n2 = I$3(!!(o3 & 1), "focus-trap#initial-focus"), s2 = f$6();
  return m$1(() => {
    if (o3 === 0) return;
    if (!n2) {
      u2 != null && u2.current && w$3(u2.current);
      return;
    }
    let f2 = e2.current;
    f2 && t$3(() => {
      if (!s2.current) return;
      let l2 = t2 == null ? void 0 : t2.activeElement;
      if (r2 != null && r2.current) {
        if ((r2 == null ? void 0 : r2.current) === l2) {
          a3.current = l2;
          return;
        }
      } else if (f2.contains(l2)) {
        a3.current = l2;
        return;
      }
      if (r2 != null && r2.current) w$3(r2.current);
      else {
        if (o3 & 16) {
          if (v(f2, T2.First | T2.AutoFocus) !== A.Error) return;
        } else if (v(f2, T2.First) !== A.Error) return;
        if (u2 != null && u2.current && (w$3(u2.current), (t2 == null ? void 0 : t2.activeElement) === u2.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      a3.current = t2 == null ? void 0 : t2.activeElement;
    });
  }, [u2, n2, o3]), a3;
}
function oe(o3, { ownerDocument: t2, container: e2, containers: r2, previousActiveElement: u2 }) {
  let a3 = f$6(), n2 = !!(o3 & 4);
  E(t2 == null ? void 0 : t2.defaultView, "focus", (s2) => {
    if (!n2 || !a3.current) return;
    let f2 = x(r2);
    n$3(e2.current) && f2.add(e2.current);
    let l2 = u2.current;
    if (!l2) return;
    let T3 = s2.target;
    n$3(T3) ? I(f2, T3) ? (u2.current = T3, w$3(T3)) : (s2.preventDefault(), s2.stopPropagation(), w$3(l2)) : w$3(u2.current);
  }, true);
}
function I(o3, t2) {
  for (let e2 of o3) if (e2.contains(t2)) return true;
  return false;
}
var we = ((o3) => (o3[o3.Open = 0] = "Open", o3[o3.Closed = 1] = "Closed", o3))(we || {}), Be = ((t2) => (t2[t2.SetTitleId = 0] = "SetTitleId", t2))(Be || {});
let Ue = { [0](e2, t2) {
  return e2.titleId === t2.id ? e2 : { ...e2, titleId: t2.id };
} }, w = reactExports.createContext(null);
w.displayName = "DialogContext";
function O(e2) {
  let t2 = reactExports.useContext(w);
  if (t2 === null) {
    let o3 = new Error(`<${e2} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o3, O), o3;
  }
  return t2;
}
function He(e2, t2) {
  return u$5(t2.type, Ue, e2, t2);
}
let z = Y(function(t2, o3) {
  let a3 = reactExports.useId(), { id: n2 = `headlessui-dialog-${a3}`, open: i2, onClose: p$12, initialFocus: d2, role: s2 = "dialog", autoFocus: f$22 = true, __demoMode: u2 = false, unmount: y$12 = false, ...S$12 } = t2, R = reactExports.useRef(false);
  s2 = (function() {
    return s2 === "dialog" || s2 === "alertdialog" ? s2 : (R.current || (R.current = true, console.warn(`Invalid role [${s2}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  })();
  let g2 = u$6();
  i2 === void 0 && g2 !== null && (i2 = (g2 & i$4.Open) === i$4.Open);
  let T3 = reactExports.useRef(null), I2 = y$2(T3, o3), F = u$1(T3.current), c2 = i2 ? 0 : 1, [b2, Q] = reactExports.useReducer(He, { titleId: null, descriptionId: null, panelRef: reactExports.createRef() }), m2 = o$5(() => p$12(false)), B = o$5((r2) => Q({ type: 0, id: r2 })), D2 = l$4() ? c2 === 0 : false, [Z, ee2] = ee$1(), te2 = { get current() {
    var r2;
    return (r2 = b2.panelRef.current) != null ? r2 : T3.current;
  } }, v2 = x$1(), { resolveContainers: M2 } = S({ mainTreeNode: v2, portals: Z, defaultContainers: [te2] }), U = g2 !== null ? (g2 & i$4.Closing) === i$4.Closing : false;
  y(u2 || U ? false : D2, { allowed: o$5(() => {
    var r2, W2;
    return [(W2 = (r2 = T3.current) == null ? void 0 : r2.closest("[data-headlessui-portal]")) != null ? W2 : null];
  }), disallowed: o$5(() => {
    var r2;
    return [(r2 = v2 == null ? void 0 : v2.closest("body > *:not(#headlessui-portal-root)")) != null ? r2 : null];
  }) });
  let P2 = x$3.get(null);
  n$5(() => {
    if (D2) return P2.actions.push(n2), () => P2.actions.pop(n2);
  }, [P2, n2, D2]);
  let H2 = S$3(P2, reactExports.useCallback((r2) => P2.selectors.isTop(r2, n2), [P2, n2]));
  k(H2, M2, (r2) => {
    r2.preventDefault(), m2();
  }), a$1(H2, F == null ? void 0 : F.defaultView, (r2) => {
    r2.preventDefault(), r2.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), m2();
  }), f$1(u2 || U ? false : D2, F, M2), p(D2, T3, m2);
  let [oe2, ne2] = H$1(), re2 = reactExports.useMemo(() => [{ dialogState: c2, close: m2, setTitleId: B, unmount: y$12 }, b2], [c2, m2, B, y$12, b2]), N = n$4({ open: c2 === 0 }), le = { ref: I2, id: n2, role: s2, tabIndex: -1, "aria-modal": u2 ? void 0 : c2 === 0 ? true : void 0, "aria-labelledby": b2.titleId, "aria-describedby": oe2, unmount: y$12 }, ae = !f(), E2 = G.None;
  D2 && !u2 && (E2 |= G.RestoreFocus, E2 |= G.TabLock, f$22 && (E2 |= G.AutoFocus), ae && (E2 |= G.InitialFocus));
  let ie = K();
  return G$2.createElement(s$5, null, G$2.createElement(l, { force: true }, G$2.createElement(te$1, null, G$2.createElement(w.Provider, { value: re2 }, G$2.createElement(X, { target: T3 }, G$2.createElement(l, { force: false }, G$2.createElement(ne2, { slot: N }, G$2.createElement(ee2, null, G$2.createElement(ge, { initialFocus: d2, initialFocusFallback: T3, containers: M2, features: E2 }, G$2.createElement(C$1, { value: m2 }, ie({ ourProps: le, theirProps: S$12, slot: N, defaultTag: Ne, features: We, visible: c2 === 0, name: "Dialog" })))))))))));
}), Ne = "div", We = A$1.RenderStrategy | A$1.Static;
function $e(e2, t2) {
  let { transition: o3 = false, open: a3, ...n2 } = e2, i2 = u$6(), p2 = e2.hasOwnProperty("open") || i2 !== null, d2 = e2.hasOwnProperty("onClose");
  if (!p2 && !d2) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!p2) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!d2) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i2 && typeof e2.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e2.open}`);
  if (typeof e2.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e2.onClose}`);
  return (a3 !== void 0 || o3) && !n2.static ? G$2.createElement(j, null, G$2.createElement(Ke$1, { show: a3, transition: o3, unmount: n2.unmount }, G$2.createElement(z, { ref: t2, ...n2 }))) : G$2.createElement(j, null, G$2.createElement(z, { ref: t2, open: a3, ...n2 }));
}
let je = "div";
function Ye(e2, t2) {
  let o3 = reactExports.useId(), { id: a3 = `headlessui-dialog-panel-${o3}`, transition: n2 = false, ...i2 } = e2, [{ dialogState: p2, unmount: d2 }, s2] = O("Dialog.Panel"), f2 = y$2(t2, s2.panelRef), u2 = n$4({ open: p2 === 0 }), y2 = o$5((I2) => {
    I2.stopPropagation();
  }), S2 = { ref: f2, id: a3, onClick: y2 }, R = n2 ? Oe : reactExports.Fragment, g2 = n2 ? { unmount: d2 } : {}, T3 = K();
  return G$2.createElement(R, { ...g2 }, T3({ ourProps: S2, theirProps: i2, slot: u2, defaultTag: je, name: "Dialog.Panel" }));
}
let Je = "div";
function Ke(e2, t2) {
  let { transition: o3 = false, ...a3 } = e2, [{ dialogState: n2, unmount: i2 }] = O("Dialog.Backdrop"), p2 = n$4({ open: n2 === 0 }), d2 = { ref: t2, "aria-hidden": true }, s2 = o3 ? Oe : reactExports.Fragment, f2 = o3 ? { unmount: i2 } : {}, u2 = K();
  return G$2.createElement(s2, { ...f2 }, u2({ ourProps: d2, theirProps: a3, slot: p2, defaultTag: Je, name: "Dialog.Backdrop" }));
}
let Xe = "h2";
function Ve(e2, t2) {
  let o3 = reactExports.useId(), { id: a3 = `headlessui-dialog-title-${o3}`, ...n2 } = e2, [{ dialogState: i2, setTitleId: p2 }] = O("Dialog.Title"), d2 = y$2(t2);
  reactExports.useEffect(() => (p2(a3), () => p2(null)), [a3, p2]);
  let s2 = n$4({ open: i2 === 0 }), f2 = { ref: d2, id: a3 };
  return K()({ ourProps: f2, theirProps: n2, slot: s2, defaultTag: Xe, name: "Dialog.Title" });
}
let qe = Y($e), ze = Y(Ye);
Y(Ke);
let Qe = Y(Ve), ht = Object.assign(qe, { Panel: ze, Title: Qe, Description: M });
function DangerButton({
  className = "",
  disabled,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      ...props,
      className: `inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700 dark:focus:ring-offset-gray-800 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
function Modal({
  children,
  show = false,
  maxWidth = "2xl",
  closeable = true,
  onClose = () => {
  }
}) {
  const close = () => {
    if (closeable) {
      onClose();
    }
  };
  const maxWidthClass = {
    sm: "sm:max-w-sm",
    md: "sm:max-w-md",
    lg: "sm:max-w-lg",
    xl: "sm:max-w-xl",
    "2xl": "sm:max-w-2xl"
  }[maxWidth];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ke$1, { show, leave: "duration-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    ht,
    {
      as: "div",
      id: "modal",
      className: "fixed inset-0 z-50 flex transform items-center overflow-y-auto px-4 py-6 transition-all sm:px-0",
      onClose: close,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Oe,
          {
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Oe,
          {
            enter: "ease-out duration-300",
            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            enterTo: "opacity-100 translate-y-0 sm:scale-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              ze,
              {
                className: `mb-6 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full dark:bg-gray-800 ${maxWidthClass}`,
                children
              }
            )
          }
        )
      ]
    }
  ) });
}
function SecondaryButton({
  type = "button",
  className = "",
  disabled,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      ...props,
      type,
      className: `inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800 ${disabled && "opacity-25"} ` + className,
      disabled,
      children
    }
  );
}
function DeleteUserForm({ className = "" }) {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = reactExports.useState(false);
  const passwordInput = reactExports.useRef();
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors,
    clearErrors
  } = useForm({
    password: ""
  });
  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };
  const deleteUser = (e2) => {
    e2.preventDefault();
    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset()
    });
  };
  const closeModal = () => {
    setConfirmingUserDeletion(false);
    clearErrors();
    reset();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: `space-y-6 ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: "Delete Account" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: "Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DangerButton, { onClick: confirmUserDeletion, children: "Delete Account" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, { show: confirmingUserDeletion, onClose: closeModal, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: deleteUser, className: "p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-medium text-gray-900 dark:text-gray-100", children: "Are you sure you want to delete your account?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-400", children: "Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          InputLabel,
          {
            htmlFor: "password",
            value: "Password",
            className: "sr-only"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            ref: passwordInput,
            value: data.password,
            onChange: (e2) => setData("password", e2.target.value),
            className: "mt-1 block w-3/4",
            isFocused: true,
            placeholder: "Password"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          InputError,
          {
            message: errors.password,
            className: "mt-2"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SecondaryButton, { onClick: closeModal, children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DangerButton, { className: "ms-3", disabled: processing, children: "Delete Account" })
      ] })
    ] }) })
  ] });
}
export {
  DeleteUserForm as default
};
