const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ConfirmPassword-DySyLK4I.js","assets/TextInput-CK4xxAOF.js","assets/InputLabel-C6flOg_z.js","assets/PrimaryButton-X3WZgcgl.js","assets/GuestLayout-CuIhz0hI.js","assets/ForgotPassword-CwydMZyS.js","assets/Login-p3zyiv25.js","assets/Register-T8yK-OMV.js","assets/ResetPassword-DcqMUh0v.js","assets/VerifyEmail-BVijtl4N.js","assets/Index-LhmlgYyr.js","assets/AuthenticatedLayout-B6DnBtze.js","assets/transition-SoJuNQK0.js","assets/search-D-mc58C7.js","assets/createLucideIcon-C6NVuwOJ.js","assets/mail-aCxgJQ6o.js","assets/users-Kv6Gcbr3.js","assets/settings-CvJvE2as.js","assets/calendar-IU5HW2RZ.js","assets/chevron-right-BPfAUUu8.js","assets/x-yBa_plo7.js","assets/loader-circle-B30PDizQ.js","assets/CreateDealModal-bQdVVrrN.js","assets/type-BNCScW-u.js","assets/user-B9LZsL8o.js","assets/trophy-C_GGb1dT.js","assets/ConfiguracoesFunil-Cc6Ohn37.js","assets/plus-CGUw857e.js","assets/trash-2-CVGjSH52.js","assets/check-DWVOlzvz.js","assets/circle-alert-u10olA9G.js","assets/funnel-BLMA1-FI.js","assets/ellipsis-DxkafFqy.js","assets/Contatos-BY6uel2p.js","assets/download-rXIF6YDD.js","assets/Index-Ct8Rdep7.js","assets/upload-1D3adYUz.js","assets/square-pen-11Sg-IkL.js","assets/Dashboard-CxDRyBuT.js","assets/Index-D8Ebyj_T.js","assets/zap-ChWtpMBd.js","assets/inbox-C8pLJ0St.js","assets/ellipsis-vertical-CVmWcgJh.js","assets/list-DwDqrTiS.js","assets/Edit-1QqxX7NQ.js","assets/DeleteUserForm-DDmBwmgy.js","assets/UpdatePasswordForm-Bjo3s6uC.js","assets/UpdateProfileInformationForm-RoIPjr-L.js","assets/Index-D_XcNe8N.js","assets/activity-DWCsL_Ej.js","assets/share-2-CP0CPOef.js","assets/clock-BcOZUnCh.js","assets/circle-check-big-DqJJ9io1.js","assets/Automations-JUmGW_Md.js","assets/CustomFields-DdNH3pc4.js","assets/pen-line-CAiPTmku.js","assets/save-TYDEusDj.js","assets/General-DsiBxNZn.js","assets/building-2-D0XBh8gD.js","assets/globe-CVHr5jZm.js","assets/Index-BAFPI2oX.js","assets/Profile-Csbz0CBQ.js","assets/QuickReplies-C1MHv492.js","assets/Organization-C2mIHFQ6.js","assets/Index-B1xqa1eu.js"])))=>i.map(i=>d[i]);
function _mergeNamespaces(n, m2) {
  for (var i = 0; i < m2.length; i++) {
    const e = m2[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k2 in e) {
        if (k2 !== "default" && !(k2 in n)) {
          const d2 = Object.getOwnPropertyDescriptor(e, k2);
          if (d2) {
            Object.defineProperty(n, k2, d2.get ? d2 : {
              enumerable: true,
              get: () => e[k2]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/build/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    let allSettled2 = function(promises) {
      return Promise.all(
        promises.map(
          (p2) => Promise.resolve(p2).then(
            (value) => ({ status: "fulfilled", value }),
            (reason) => ({ status: "rejected", reason })
          )
        )
      );
    };
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = allSettled2(
      deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var f2 = n.default;
  if (typeof f2 == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f2, arguments, this.constructor);
      }
      return f2.apply(this, arguments);
    };
    a.prototype = f2.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k2) {
    var d2 = Object.getOwnPropertyDescriptor(n, k2);
    Object.defineProperty(a, k2, d2.get ? d2 : {
      enumerable: true,
      get: function() {
        return n[k2];
      }
    });
  });
  return a;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReact_production_min;
function requireReact_production_min() {
  if (hasRequiredReact_production_min) return react_production_min;
  hasRequiredReact_production_min = 1;
  var l2 = Symbol.for("react.element"), n = Symbol.for("react.portal"), p2 = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r2 = Symbol.for("react.profiler"), t2 = Symbol.for("react.provider"), u2 = Symbol.for("react.context"), v2 = Symbol.for("react.forward_ref"), w2 = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y2 = Symbol.for("react.lazy"), z = Symbol.iterator;
  function A(a) {
    if (null === a || "object" !== typeof a) return null;
    a = z && a[z] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  var B = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C2 = Object.assign, D = {};
  function E2(a, b2, e) {
    this.props = a;
    this.context = b2;
    this.refs = D;
    this.updater = e || B;
  }
  E2.prototype.isReactComponent = {};
  E2.prototype.setState = function(a, b2) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, b2, "setState");
  };
  E2.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function F() {
  }
  F.prototype = E2.prototype;
  function G2(a, b2, e) {
    this.props = a;
    this.context = b2;
    this.refs = D;
    this.updater = e || B;
  }
  var H = G2.prototype = new F();
  H.constructor = G2;
  C2(H, E2.prototype);
  H.isPureReactComponent = true;
  var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = { current: null }, L = { key: true, ref: true, __self: true, __source: true };
  function M(a, b2, e) {
    var d2, c2 = {}, k2 = null, h3 = null;
    if (null != b2) for (d2 in void 0 !== b2.ref && (h3 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2) J.call(b2, d2) && !L.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
    var g2 = arguments.length - 2;
    if (1 === g2) c2.children = e;
    else if (1 < g2) {
      for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++) f2[m2] = arguments[m2 + 2];
      c2.children = f2;
    }
    if (a && a.defaultProps) for (d2 in g2 = a.defaultProps, g2) void 0 === c2[d2] && (c2[d2] = g2[d2]);
    return { $$typeof: l2, type: a, key: k2, ref: h3, props: c2, _owner: K.current };
  }
  function N(a, b2) {
    return { $$typeof: l2, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
  }
  function O(a) {
    return "object" === typeof a && null !== a && a.$$typeof === l2;
  }
  function escape2(a) {
    var b2 = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(a2) {
      return b2[a2];
    });
  }
  var P = /\/+/g;
  function Q(a, b2) {
    return "object" === typeof a && null !== a && null != a.key ? escape2("" + a.key) : b2.toString(36);
  }
  function R(a, b2, e, d2, c2) {
    var k2 = typeof a;
    if ("undefined" === k2 || "boolean" === k2) a = null;
    var h3 = false;
    if (null === a) h3 = true;
    else switch (k2) {
      case "string":
      case "number":
        h3 = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l2:
          case n:
            h3 = true;
        }
    }
    if (h3) return h3 = a, c2 = c2(h3), a = "" === d2 ? "." + Q(h3, 0) : d2, I(c2) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c2, b2, e, "", function(a2) {
      return a2;
    })) : null != c2 && (O(c2) && (c2 = N(c2, e + (!c2.key || h3 && h3.key === c2.key ? "" : ("" + c2.key).replace(P, "$&/") + "/") + a)), b2.push(c2)), 1;
    h3 = 0;
    d2 = "" === d2 ? "." : d2 + ":";
    if (I(a)) for (var g2 = 0; g2 < a.length; g2++) {
      k2 = a[g2];
      var f2 = d2 + Q(k2, g2);
      h3 += R(k2, b2, e, f2, c2);
    }
    else if (f2 = A(a), "function" === typeof f2) for (a = f2.call(a), g2 = 0; !(k2 = a.next()).done; ) k2 = k2.value, f2 = d2 + Q(k2, g2++), h3 += R(k2, b2, e, f2, c2);
    else if ("object" === k2) throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
    return h3;
  }
  function S2(a, b2, e) {
    if (null == a) return a;
    var d2 = [], c2 = 0;
    R(a, d2, "", "", function(a2) {
      return b2.call(e, a2, c2++);
    });
    return d2;
  }
  function T(a) {
    if (-1 === a._status) {
      var b2 = a._result;
      b2 = b2();
      b2.then(function(b3) {
        if (0 === a._status || -1 === a._status) a._status = 1, a._result = b3;
      }, function(b3) {
        if (0 === a._status || -1 === a._status) a._status = 2, a._result = b3;
      });
      -1 === a._status && (a._status = 0, a._result = b2);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
  }
  var U = { current: null }, V = { transition: null }, W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
  function X() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  react_production_min.Children = { map: S2, forEach: function(a, b2, e) {
    S2(a, function() {
      b2.apply(this, arguments);
    }, e);
  }, count: function(a) {
    var b2 = 0;
    S2(a, function() {
      b2++;
    });
    return b2;
  }, toArray: function(a) {
    return S2(a, function(a2) {
      return a2;
    }) || [];
  }, only: function(a) {
    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  } };
  react_production_min.Component = E2;
  react_production_min.Fragment = p2;
  react_production_min.Profiler = r2;
  react_production_min.PureComponent = G2;
  react_production_min.StrictMode = q;
  react_production_min.Suspense = w2;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
  react_production_min.act = X;
  react_production_min.cloneElement = function(a, b2, e) {
    if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var d2 = C2({}, a.props), c2 = a.key, k2 = a.ref, h3 = a._owner;
    if (null != b2) {
      void 0 !== b2.ref && (k2 = b2.ref, h3 = K.current);
      void 0 !== b2.key && (c2 = "" + b2.key);
      if (a.type && a.type.defaultProps) var g2 = a.type.defaultProps;
      for (f2 in b2) J.call(b2, f2) && !L.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
    }
    var f2 = arguments.length - 2;
    if (1 === f2) d2.children = e;
    else if (1 < f2) {
      g2 = Array(f2);
      for (var m2 = 0; m2 < f2; m2++) g2[m2] = arguments[m2 + 2];
      d2.children = g2;
    }
    return { $$typeof: l2, type: a.type, key: c2, ref: k2, props: d2, _owner: h3 };
  };
  react_production_min.createContext = function(a) {
    a = { $$typeof: u2, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
    a.Provider = { $$typeof: t2, _context: a };
    return a.Consumer = a;
  };
  react_production_min.createElement = M;
  react_production_min.createFactory = function(a) {
    var b2 = M.bind(null, a);
    b2.type = a;
    return b2;
  };
  react_production_min.createRef = function() {
    return { current: null };
  };
  react_production_min.forwardRef = function(a) {
    return { $$typeof: v2, render: a };
  };
  react_production_min.isValidElement = O;
  react_production_min.lazy = function(a) {
    return { $$typeof: y2, _payload: { _status: -1, _result: a }, _init: T };
  };
  react_production_min.memo = function(a, b2) {
    return { $$typeof: x, type: a, compare: void 0 === b2 ? null : b2 };
  };
  react_production_min.startTransition = function(a) {
    var b2 = V.transition;
    V.transition = {};
    try {
      a();
    } finally {
      V.transition = b2;
    }
  };
  react_production_min.unstable_act = X;
  react_production_min.useCallback = function(a, b2) {
    return U.current.useCallback(a, b2);
  };
  react_production_min.useContext = function(a) {
    return U.current.useContext(a);
  };
  react_production_min.useDebugValue = function() {
  };
  react_production_min.useDeferredValue = function(a) {
    return U.current.useDeferredValue(a);
  };
  react_production_min.useEffect = function(a, b2) {
    return U.current.useEffect(a, b2);
  };
  react_production_min.useId = function() {
    return U.current.useId();
  };
  react_production_min.useImperativeHandle = function(a, b2, e) {
    return U.current.useImperativeHandle(a, b2, e);
  };
  react_production_min.useInsertionEffect = function(a, b2) {
    return U.current.useInsertionEffect(a, b2);
  };
  react_production_min.useLayoutEffect = function(a, b2) {
    return U.current.useLayoutEffect(a, b2);
  };
  react_production_min.useMemo = function(a, b2) {
    return U.current.useMemo(a, b2);
  };
  react_production_min.useReducer = function(a, b2, e) {
    return U.current.useReducer(a, b2, e);
  };
  react_production_min.useRef = function(a) {
    return U.current.useRef(a);
  };
  react_production_min.useState = function(a) {
    return U.current.useState(a);
  };
  react_production_min.useSyncExternalStore = function(a, b2, e) {
    return U.current.useSyncExternalStore(a, b2, e);
  };
  react_production_min.useTransition = function() {
    return U.current.useTransition();
  };
  react_production_min.version = "18.3.1";
  return react_production_min;
}
var hasRequiredReact;
function requireReact() {
  if (hasRequiredReact) return react.exports;
  hasRequiredReact = 1;
  {
    react.exports = requireReact_production_min();
  }
  return react.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var f2 = requireReact(), k2 = Symbol.for("react.element"), l2 = Symbol.for("react.fragment"), m2 = Object.prototype.hasOwnProperty, n = f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p2 = { key: true, ref: true, __self: true, __source: true };
  function q(c2, a, g2) {
    var b2, d2 = {}, e = null, h3 = null;
    void 0 !== g2 && (e = "" + g2);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h3 = a.ref);
    for (b2 in a) m2.call(a, b2) && !p2.hasOwnProperty(b2) && (d2[b2] = a[b2]);
    if (c2 && c2.defaultProps) for (b2 in a = c2.defaultProps, a) void 0 === d2[b2] && (d2[b2] = a[b2]);
    return { $$typeof: k2, type: c2, key: e, ref: h3, props: d2, _owner: n.current };
  }
  reactJsxRuntime_production_min.Fragment = l2;
  reactJsxRuntime_production_min.jsx = q;
  reactJsxRuntime_production_min.jsxs = q;
  return reactJsxRuntime_production_min;
}
var hasRequiredJsxRuntime;
function requireJsxRuntime() {
  if (hasRequiredJsxRuntime) return jsxRuntime.exports;
  hasRequiredJsxRuntime = 1;
  {
    jsxRuntime.exports = requireReactJsxRuntime_production_min();
  }
  return jsxRuntime.exports;
}
var jsxRuntimeExports = requireJsxRuntime();
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}
const { toString: toString$1 } = Object.prototype;
const { getPrototypeOf } = Object;
const { iterator, toStringTag } = Symbol;
const kindOf = /* @__PURE__ */ ((cache) => (thing) => {
  const str = toString$1.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
const kindOfTest = (type2) => {
  type2 = type2.toLowerCase();
  return (thing) => kindOf(thing) === type2;
};
const typeOfTest = (type2) => (thing) => typeof thing === type2;
const { isArray: isArray$1 } = Array;
const isUndefined = typeOfTest("undefined");
function isBuffer$1(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction$2(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
const isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
const isString = typeOfTest("string");
const isFunction$2 = typeOfTest("function");
const isNumber = typeOfTest("number");
const isObject$1 = (thing) => thing !== null && typeof thing === "object";
const isBoolean = (thing) => thing === true || thing === false;
const isPlainObject$1 = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype2 = getPrototypeOf(val);
  return (prototype2 === null || prototype2 === Object.prototype || Object.getPrototypeOf(prototype2) === null) && !(toStringTag in val) && !(iterator in val);
};
const isEmptyObject = (val) => {
  if (!isObject$1(val) || isBuffer$1(val)) {
    return false;
  }
  try {
    return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
  } catch (e) {
    return false;
  }
};
const isDate = kindOfTest("Date");
const isFile$2 = kindOfTest("File");
const isReactNativeBlob = (value) => {
  return !!(value && typeof value.uri !== "undefined");
};
const isReactNative = (formData) => formData && typeof formData.getParts !== "undefined";
const isBlob = kindOfTest("Blob");
const isFileList = kindOfTest("FileList");
const isStream = (val) => isObject$1(val) && isFunction$2(val.pipe);
function getGlobal() {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  return {};
}
const G$1 = getGlobal();
const FormDataCtor = typeof G$1.FormData !== "undefined" ? G$1.FormData : void 0;
const isFormData$1 = (thing) => {
  let kind;
  return thing && (FormDataCtor && thing instanceof FormDataCtor || isFunction$2(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
  kind === "object" && isFunction$2(thing.toString) && thing.toString() === "[object FormData]"));
};
const isURLSearchParams = kindOfTest("URLSearchParams");
const [isReadableStream, isRequest, isResponse, isHeaders] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(kindOfTest);
const trim = (str) => {
  return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
};
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i;
  let l2;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray$1(obj)) {
    for (i = 0, l2 = obj.length; i < l2; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    if (isBuffer$1(obj)) {
      return;
    }
    const keys2 = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys2.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys2[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  if (isBuffer$1(obj)) {
    return null;
  }
  key = key.toLowerCase();
  const keys2 = Object.keys(obj);
  let i = keys2.length;
  let _key;
  while (i-- > 0) {
    _key = keys2[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
const _global = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
const isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge$1() {
  const { caseless, skipUndefined } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue2 = (val, key) => {
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return;
    }
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject$1(result[targetKey]) && isPlainObject$1(val)) {
      result[targetKey] = merge$1(result[targetKey], val);
    } else if (isPlainObject$1(val)) {
      result[targetKey] = merge$1({}, val);
    } else if (isArray$1(val)) {
      result[targetKey] = val.slice();
    } else if (!skipUndefined || !isUndefined(val)) {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l2 = arguments.length; i < l2; i++) {
    arguments[i] && forEach(arguments[i], assignValue2);
  }
  return result;
}
const extend = (a, b2, thisArg, { allOwnKeys } = {}) => {
  forEach(
    b2,
    (val, key) => {
      if (thisArg && isFunction$2(val)) {
        Object.defineProperty(a, key, {
          value: bind(val, thisArg),
          writable: true,
          enumerable: true,
          configurable: true
        });
      } else {
        Object.defineProperty(a, key, {
          value: val,
          writable: true,
          enumerable: true,
          configurable: true
        });
      }
    },
    { allOwnKeys }
  );
  return a;
};
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  Object.defineProperty(constructor.prototype, "constructor", {
    value: constructor,
    writable: true,
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
const toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null) return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray$1(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};
const isTypedArray$1 = /* @__PURE__ */ ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[iterator];
  const _iterator = generator.call(obj);
  let result;
  while ((result = _iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};
const isHTMLForm = kindOfTest("HTMLFormElement");
const toCamelCase = (str) => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m2, p1, p2) {
    return p1.toUpperCase() + p2;
  });
};
const hasOwnProperty$e = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
const isRegExp = kindOfTest("RegExp");
const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction$2(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction$2(value)) return;
    descriptor.enumerable = false;
    if ("writable" in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};
const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray$1(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
const noop$1 = () => {
};
const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction$2(thing.append) && thing[toStringTag] === "FormData" && thing[iterator]);
}
const toJSONObject = (obj) => {
  const stack = new Array(10);
  const visit = (source, i) => {
    if (isObject$1(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (isBuffer$1(source)) {
        return source;
      }
      if (!("toJSON" in source)) {
        stack[i] = source;
        const target = isArray$1(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = void 0;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
const isAsyncFn = kindOfTest("AsyncFunction");
const isThenable = (thing) => thing && (isObject$1(thing) || isFunction$2(thing)) && isFunction$2(thing.then) && isFunction$2(thing.catch);
const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }
  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener(
      "message",
      ({ source, data }) => {
        if (source === _global && data === token) {
          callbacks.length && callbacks.shift()();
        }
      },
      false
    );
    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    };
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(typeof setImmediate === "function", isFunction$2(_global.postMessage));
const asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
const isIterable = (thing) => thing != null && isFunction$2(thing[iterator]);
const utils$2 = {
  isArray: isArray$1,
  isArrayBuffer,
  isBuffer: isBuffer$1,
  isFormData: isFormData$1,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject: isObject$1,
  isPlainObject: isPlainObject$1,
  isEmptyObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile: isFile$2,
  isReactNativeBlob,
  isReactNative,
  isBlob,
  isRegExp,
  isFunction: isFunction$2,
  isStream,
  isURLSearchParams,
  isTypedArray: isTypedArray$1,
  isFileList,
  forEach,
  merge: merge$1,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty: hasOwnProperty$e,
  hasOwnProp: hasOwnProperty$e,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop: noop$1,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap,
  isIterable
};
let AxiosError$1 = class AxiosError extends Error {
  static from(error, code, config2, request2, response, customProps) {
    const axiosError = new AxiosError(error.message, code || error.code, config2, request2, response);
    axiosError.cause = error;
    axiosError.name = error.name;
    if (error.status != null && axiosError.status == null) {
      axiosError.status = error.status;
    }
    customProps && Object.assign(axiosError, customProps);
    return axiosError;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(message, code, config2, request2, response) {
    super(message);
    Object.defineProperty(this, "message", {
      value: message,
      enumerable: true,
      writable: true,
      configurable: true
    });
    this.name = "AxiosError";
    this.isAxiosError = true;
    code && (this.code = code);
    config2 && (this.config = config2);
    request2 && (this.request = request2);
    if (response) {
      this.response = response;
      this.status = response.status;
    }
  }
  toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils$2.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
};
AxiosError$1.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
AxiosError$1.ERR_BAD_OPTION = "ERR_BAD_OPTION";
AxiosError$1.ECONNABORTED = "ECONNABORTED";
AxiosError$1.ETIMEDOUT = "ETIMEDOUT";
AxiosError$1.ERR_NETWORK = "ERR_NETWORK";
AxiosError$1.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
AxiosError$1.ERR_DEPRECATED = "ERR_DEPRECATED";
AxiosError$1.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
AxiosError$1.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
AxiosError$1.ERR_CANCELED = "ERR_CANCELED";
AxiosError$1.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
AxiosError$1.ERR_INVALID_URL = "ERR_INVALID_URL";
const httpAdapter = null;
function isVisitable(thing) {
  return utils$2.isPlainObject(thing) || utils$2.isArray(thing);
}
function removeBrackets(key) {
  return utils$2.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    token = removeBrackets(token);
    return !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils$2.isArray(arr) && !arr.some(isVisitable);
}
const predicates = utils$2.toFlatObject(utils$2, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData$1(obj, formData, options) {
  if (!utils$2.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData = formData || new FormData();
  options = utils$2.toFlatObject(
    options,
    {
      metaTokens: true,
      dots: false,
      indexes: false
    },
    false,
    function defined(option, source) {
      return !utils$2.isUndefined(source[option]);
    }
  );
  const metaTokens = options.metaTokens;
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
  const useBlob = _Blob && utils$2.isSpecCompliantForm(formData);
  if (!utils$2.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value) {
    if (value === null) return "";
    if (utils$2.isDate(value)) {
      return value.toISOString();
    }
    if (utils$2.isBoolean(value)) {
      return value.toString();
    }
    if (!useBlob && utils$2.isBlob(value)) {
      throw new AxiosError$1("Blob is not supported. Use a Buffer instead.");
    }
    if (utils$2.isArrayBuffer(value) || utils$2.isTypedArray(value)) {
      return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (utils$2.isReactNative(formData) && utils$2.isReactNativeBlob(value)) {
      formData.append(renderKey(path, key, dots), convertValue(value));
      return false;
    }
    if (value && !path && typeof value === "object") {
      if (utils$2.endsWith(key, "{}")) {
        key = metaTokens ? key : key.slice(0, -2);
        value = JSON.stringify(value);
      } else if (utils$2.isArray(value) && isFlatArray(value) || (utils$2.isFileList(value) || utils$2.endsWith(key, "[]")) && (arr = utils$2.toArray(value))) {
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils$2.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (utils$2.isUndefined(value)) return;
    if (stack.indexOf(value) !== -1) {
      throw Error("Circular reference detected in " + path.join("."));
    }
    stack.push(value);
    utils$2.forEach(value, function each(el, key) {
      const result = !(utils$2.isUndefined(el) || el === null) && visitor.call(formData, el, utils$2.isString(key) ? key.trim() : key, path, exposedHelpers);
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!utils$2.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build(obj);
  return formData;
}
function encode$1(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData$1(params, this, options);
}
const prototype = AxiosURLSearchParams.prototype;
prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode;
  const _options = utils$2.isFunction(options) ? {
    serialize: options
  } : options;
  const serializeFn = _options && _options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, _options);
  } else {
    serializedParams = utils$2.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, _options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}
class InterceptorManager {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils$2.forEach(this.handlers, function forEachHandler(h3) {
      if (h3 !== null) {
        fn(h3);
      }
    });
  }
}
const transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false,
  legacyInterceptorReqResOrdering: true
};
const URLSearchParams$1 = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams;
const FormData$1 = typeof FormData !== "undefined" ? FormData : null;
const Blob$1 = typeof Blob !== "undefined" ? Blob : null;
const platform$1 = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
const hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
const _navigator = typeof navigator === "object" && navigator || void 0;
const hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
const hasStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
const origin = hasBrowserEnv && window.location.href || "http://localhost";
const utils$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv,
  hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv,
  navigator: _navigator,
  origin
}, Symbol.toStringTag, { value: "Module" }));
const platform = {
  ...utils$1,
  ...platform$1
};
function toURLEncodedForm(data, options) {
  return toFormData$1(data, new platform.classes.URLSearchParams(), {
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils$2.isBuffer(value)) {
        this.append(key, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    },
    ...options
  });
}
function parsePropPath(name) {
  return utils$2.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
    return match[0] === "[]" ? "" : match[1] || match[0];
  });
}
function arrayToObject(arr) {
  const obj = {};
  const keys2 = Object.keys(arr);
  let i;
  const len = keys2.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys2[i];
    obj[key] = arr[key];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    if (name === "__proto__") return true;
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils$2.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils$2.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils$2.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && utils$2.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils$2.isFormData(formData) && utils$2.isFunction(formData.entries)) {
    const obj = {};
    utils$2.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
function stringifySafely(rawValue, parser, encoder) {
  if (utils$2.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils$2.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
const defaults = {
  transitional: transitionalDefaults,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function transformRequest(data, headers) {
      const contentType = headers.getContentType() || "";
      const hasJSONContentType = contentType.indexOf("application/json") > -1;
      const isObjectPayload = utils$2.isObject(data);
      if (isObjectPayload && utils$2.isHTMLForm(data)) {
        data = new FormData(data);
      }
      const isFormData2 = utils$2.isFormData(data);
      if (isFormData2) {
        return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
      }
      if (utils$2.isArrayBuffer(data) || utils$2.isBuffer(data) || utils$2.isStream(data) || utils$2.isFile(data) || utils$2.isBlob(data) || utils$2.isReadableStream(data)) {
        return data;
      }
      if (utils$2.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils$2.isURLSearchParams(data)) {
        headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
        return data.toString();
      }
      let isFileList2;
      if (isObjectPayload) {
        if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
          return toURLEncodedForm(data, this.formSerializer).toString();
        }
        if ((isFileList2 = utils$2.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
          const _FormData = this.env && this.env.FormData;
          return toFormData$1(
            isFileList2 ? { "files[]": data } : data,
            _FormData && new _FormData(),
            this.formSerializer
          );
        }
      }
      if (isObjectPayload || hasJSONContentType) {
        headers.setContentType("application/json", false);
        return stringifySafely(data);
      }
      return data;
    }
  ],
  transformResponse: [
    function transformResponse(data) {
      const transitional2 = this.transitional || defaults.transitional;
      const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
      const JSONRequested = this.responseType === "json";
      if (utils$2.isResponse(data) || utils$2.isReadableStream(data)) {
        return data;
      }
      if (data && utils$2.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
        const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
        const strictJSONParsing = !silentJSONParsing && JSONRequested;
        try {
          return JSON.parse(data, this.parseReviver);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === "SyntaxError") {
              throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response);
            }
            throw e;
          }
        }
      }
      return data;
    }
  ],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },
  validateStatus: function validateStatus(status2) {
    return status2 >= 200 && status2 < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
utils$2.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
  defaults.headers[method] = {};
});
const ignoreDuplicateOf = utils$2.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
const parseHeaders = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
    i = line.indexOf(":");
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === "set-cookie") {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    }
  });
  return parsed;
};
const $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils$2.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = /* @__PURE__ */ Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils$2.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils$2.isString(value)) return;
  if (utils$2.isString(filter2)) {
    return value.indexOf(filter2) !== -1;
  }
  if (utils$2.isRegExp(filter2)) {
    return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w2, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils$2.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
let AxiosHeaders$1 = class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error("header name must be a non-empty string");
      }
      const key = utils$2.findKey(self2, lHeader);
      if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
        self2[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils$2.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils$2.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils$2.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils$2.isObject(header) && utils$2.isIterable(header)) {
      let obj = {}, dest, key;
      for (const entry of header) {
        if (!utils$2.isArray(entry)) {
          throw TypeError("Object iterator must return a key-value pair");
        }
        obj[key = entry[0]] = (dest = obj[key]) ? utils$2.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]] : entry[1];
      }
      setHeaders(obj, valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$2.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils$2.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils$2.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils$2.findKey(this, header);
      return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils$2.findKey(self2, _header);
        if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
          delete self2[key];
          deleted = true;
        }
      }
    }
    if (utils$2.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys2 = Object.keys(this);
    let i = keys2.length;
    let deleted = false;
    while (i--) {
      const key = keys2[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self2 = this;
    const headers = {};
    utils$2.forEach(this, (value, header) => {
      const key = utils$2.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = /* @__PURE__ */ Object.create(null);
    utils$2.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils$2.isArray(value) ? value.join(", ") : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach((target) => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype2 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype2, _header);
        accessors[lHeader] = true;
      }
    }
    utils$2.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
};
AxiosHeaders$1.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
utils$2.reduceDescriptors(AxiosHeaders$1.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1);
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils$2.freezeMethods(AxiosHeaders$1);
function transformData(fns, response) {
  const config2 = this || defaults;
  const context = response || config2;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;
  utils$2.forEach(fns, function transform(fn) {
    data = fn.call(config2, data, headers.normalize(), response ? response.status : void 0);
  });
  headers.normalize();
  return data;
}
function isCancel$1(value) {
  return !!(value && value.__CANCEL__);
}
let CanceledError$1 = class CanceledError extends AxiosError$1 {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(message, config2, request2) {
    super(message == null ? "canceled" : message, AxiosError$1.ERR_CANCELED, config2, request2);
    this.name = "CanceledError";
    this.__CANCEL__ = true;
  }
};
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(
      new AxiosError$1(
        "Request failed with status code " + response.status,
        [AxiosError$1.ERR_BAD_REQUEST, AxiosError$1.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      )
    );
  }
}
function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || "";
}
function speedometer(samplesCount, min2) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min2 = min2 !== void 0 ? min2 : 1e3;
  return function push(chunkLength) {
    const now2 = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now2;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now2;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now2 - firstSampleTS < min2) {
      return;
    }
    const passed = startedAt && now2 - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1e3 / freq;
  let lastArgs;
  let timer;
  const invoke = (args, now2 = Date.now()) => {
    timestamp = now2;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn(...args);
  };
  const throttled = (...args) => {
    const now2 = Date.now();
    const passed = now2 - timestamp;
    if (passed >= threshold) {
      invoke(args, now2);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };
  const flush = () => lastArgs && invoke(lastArgs);
  return [throttled, flush];
}
const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);
  return throttle((e) => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : void 0;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate ? rate : void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? "download" : "upload"]: true
    };
    listener(data);
  }, freq);
};
const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;
  return [
    (loaded) => throttled[0]({
      lengthComputable,
      total,
      loaded
    }),
    throttled[1]
  ];
};
const asyncDecorator = (fn) => (...args) => utils$2.asap(() => fn(...args));
const isURLSameOrigin = platform.hasStandardBrowserEnv ? /* @__PURE__ */ ((origin2, isMSIE) => (url) => {
  url = new URL(url, platform.origin);
  return origin2.protocol === url.protocol && origin2.host === url.host && (isMSIE || origin2.port === url.port);
})(
  new URL(platform.origin),
  platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
) : () => true;
const cookies = platform.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure, sameSite) {
      if (typeof document === "undefined") return;
      const cookie = [`${name}=${encodeURIComponent(value)}`];
      if (utils$2.isNumber(expires)) {
        cookie.push(`expires=${new Date(expires).toUTCString()}`);
      }
      if (utils$2.isString(path)) {
        cookie.push(`path=${path}`);
      }
      if (utils$2.isString(domain)) {
        cookie.push(`domain=${domain}`);
      }
      if (secure === true) {
        cookie.push("secure");
      }
      if (utils$2.isString(sameSite)) {
        cookie.push(`SameSite=${sameSite}`);
      }
      document.cookie = cookie.join("; ");
    },
    read(name) {
      if (typeof document === "undefined") return null;
      const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
      return match ? decodeURIComponent(match[1]) : null;
    },
    remove(name) {
      this.write(name, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function isAbsoluteURL(url) {
  if (typeof url !== "string") {
    return false;
  }
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
  let isRelativeUrl = !isAbsoluteURL(requestedURL);
  if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}
const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? { ...thing } : thing;
function mergeConfig$2(config1, config2) {
  config2 = config2 || {};
  const config3 = {};
  function getMergedValue(target, source, prop, caseless) {
    if (utils$2.isPlainObject(target) && utils$2.isPlainObject(source)) {
      return utils$2.merge.call({ caseless }, target, source);
    } else if (utils$2.isPlainObject(source)) {
      return utils$2.merge({}, source);
    } else if (utils$2.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a, b2, prop, caseless) {
    if (!utils$2.isUndefined(b2)) {
      return getMergedValue(a, b2, prop, caseless);
    } else if (!utils$2.isUndefined(a)) {
      return getMergedValue(void 0, a, prop, caseless);
    }
  }
  function valueFromConfig2(a, b2) {
    if (!utils$2.isUndefined(b2)) {
      return getMergedValue(void 0, b2);
    }
  }
  function defaultToConfig2(a, b2) {
    if (!utils$2.isUndefined(b2)) {
      return getMergedValue(void 0, b2);
    } else if (!utils$2.isUndefined(a)) {
      return getMergedValue(void 0, a);
    }
  }
  function mergeDirectKeys(a, b2, prop) {
    if (prop in config2) {
      return getMergedValue(a, b2);
    } else if (prop in config1) {
      return getMergedValue(void 0, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b2, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b2), prop, true)
  };
  utils$2.forEach(Object.keys({ ...config1, ...config2 }), function computeConfigValue(prop) {
    if (prop === "__proto__" || prop === "constructor" || prop === "prototype") return;
    const merge2 = utils$2.hasOwnProp(mergeMap, prop) ? mergeMap[prop] : mergeDeepProperties;
    const configValue = merge2(config1[prop], config2[prop], prop);
    utils$2.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config3[prop] = configValue);
  });
  return config3;
}
const resolveConfig$1 = (config2) => {
  const newConfig = mergeConfig$2({}, config2);
  let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth } = newConfig;
  newConfig.headers = headers = AxiosHeaders$1.from(headers);
  newConfig.url = buildURL(
    buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls),
    config2.params,
    config2.paramsSerializer
  );
  if (auth) {
    headers.set(
      "Authorization",
      "Basic " + btoa(
        (auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : "")
      )
    );
  }
  if (utils$2.isFormData(data)) {
    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(void 0);
    } else if (utils$2.isFunction(data.getHeaders)) {
      const formHeaders = data.getHeaders();
      const allowedHeaders = ["content-type", "content-length"];
      Object.entries(formHeaders).forEach(([key, val]) => {
        if (allowedHeaders.includes(key.toLowerCase())) {
          headers.set(key, val);
        }
      });
    }
  }
  if (platform.hasStandardBrowserEnv) {
    withXSRFToken && utils$2.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
    if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin(newConfig.url)) {
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }
  return newConfig;
};
const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
const xhrAdapter = isXHRAdapterSupported && function(config2) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig$1(config2);
    let requestData = _config.data;
    const requestHeaders = AxiosHeaders$1.from(_config.headers).normalize();
    let { responseType, onUploadProgress, onDownloadProgress } = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;
    function done2() {
      flushUpload && flushUpload();
      flushDownload && flushDownload();
      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
      _config.signal && _config.signal.removeEventListener("abort", onCanceled);
    }
    let request2 = new XMLHttpRequest();
    request2.open(_config.method.toUpperCase(), _config.url, true);
    request2.timeout = _config.timeout;
    function onloadend() {
      if (!request2) {
        return;
      }
      const responseHeaders = AxiosHeaders$1.from(
        "getAllResponseHeaders" in request2 && request2.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === "text" || responseType === "json" ? request2.responseText : request2.response;
      const response = {
        data: responseData,
        status: request2.status,
        statusText: request2.statusText,
        headers: responseHeaders,
        config: config2,
        request: request2
      };
      settle(
        function _resolve(value) {
          resolve(value);
          done2();
        },
        function _reject(err) {
          reject(err);
          done2();
        },
        response
      );
      request2 = null;
    }
    if ("onloadend" in request2) {
      request2.onloadend = onloadend;
    } else {
      request2.onreadystatechange = function handleLoad() {
        if (!request2 || request2.readyState !== 4) {
          return;
        }
        if (request2.status === 0 && !(request2.responseURL && request2.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request2.onabort = function handleAbort() {
      if (!request2) {
        return;
      }
      reject(new AxiosError$1("Request aborted", AxiosError$1.ECONNABORTED, config2, request2));
      request2 = null;
    };
    request2.onerror = function handleError(event) {
      const msg = event && event.message ? event.message : "Network Error";
      const err = new AxiosError$1(msg, AxiosError$1.ERR_NETWORK, config2, request2);
      err.event = event || null;
      reject(err);
      request2 = null;
    };
    request2.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
      const transitional2 = _config.transitional || transitionalDefaults;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(
        new AxiosError$1(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError$1.ETIMEDOUT : AxiosError$1.ECONNABORTED,
          config2,
          request2
        )
      );
      request2 = null;
    };
    requestData === void 0 && requestHeaders.setContentType(null);
    if ("setRequestHeader" in request2) {
      utils$2.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request2.setRequestHeader(key, val);
      });
    }
    if (!utils$2.isUndefined(_config.withCredentials)) {
      request2.withCredentials = !!_config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request2.responseType = _config.responseType;
    }
    if (onDownloadProgress) {
      [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
      request2.addEventListener("progress", downloadThrottled);
    }
    if (onUploadProgress && request2.upload) {
      [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
      request2.upload.addEventListener("progress", uploadThrottled);
      request2.upload.addEventListener("loadend", flushUpload);
    }
    if (_config.cancelToken || _config.signal) {
      onCanceled = (cancel) => {
        if (!request2) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError$1(null, config2, request2) : cancel);
        request2.abort();
        request2 = null;
      };
      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
      }
    }
    const protocol = parseProtocol(_config.url);
    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(
        new AxiosError$1(
          "Unsupported protocol " + protocol + ":",
          AxiosError$1.ERR_BAD_REQUEST,
          config2
        )
      );
      return;
    }
    request2.send(requestData || null);
  });
};
const composeSignals = (signals, timeout) => {
  const { length } = signals = signals ? signals.filter(Boolean) : [];
  if (timeout || length) {
    let controller = new AbortController();
    let aborted;
    const onabort = function(reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(
          err instanceof AxiosError$1 ? err : new CanceledError$1(err instanceof Error ? err.message : err)
        );
      }
    };
    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new AxiosError$1(`timeout of ${timeout}ms exceeded`, AxiosError$1.ETIMEDOUT));
    }, timeout);
    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach((signal2) => {
          signal2.unsubscribe ? signal2.unsubscribe(onabort) : signal2.removeEventListener("abort", onabort);
        });
        signals = null;
      }
    };
    signals.forEach((signal2) => signal2.addEventListener("abort", onabort));
    const { signal } = controller;
    signal.unsubscribe = () => utils$2.asap(unsubscribe);
    return signal;
  }
};
const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;
  if (len < chunkSize) {
    yield chunk;
    return;
  }
  let pos = 0;
  let end;
  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};
const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};
const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }
  const reader = stream.getReader();
  try {
    for (; ; ) {
      const { done: done2, value } = await reader.read();
      if (done2) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};
const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator2 = readBytes(stream, chunkSize);
  let bytes = 0;
  let done2;
  let _onFinish = (e) => {
    if (!done2) {
      done2 = true;
      onFinish && onFinish(e);
    }
  };
  return new ReadableStream(
    {
      async pull(controller) {
        try {
          const { done: done3, value } = await iterator2.next();
          if (done3) {
            _onFinish();
            controller.close();
            return;
          }
          let len = value.byteLength;
          if (onProgress) {
            let loadedBytes = bytes += len;
            onProgress(loadedBytes);
          }
          controller.enqueue(new Uint8Array(value));
        } catch (err) {
          _onFinish(err);
          throw err;
        }
      },
      cancel(reason) {
        _onFinish(reason);
        return iterator2.return();
      }
    },
    {
      highWaterMark: 2
    }
  );
};
const DEFAULT_CHUNK_SIZE = 64 * 1024;
const { isFunction: isFunction$1 } = utils$2;
const globalFetchAPI = (({ Request: Request2, Response: Response2 }) => ({
  Request: Request2,
  Response: Response2
}))(utils$2.global);
const { ReadableStream: ReadableStream$1, TextEncoder: TextEncoder$1 } = utils$2.global;
const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false;
  }
};
const factory = (env) => {
  env = utils$2.merge.call(
    {
      skipUndefined: true
    },
    globalFetchAPI,
    env
  );
  const { fetch: envFetch, Request: Request2, Response: Response2 } = env;
  const isFetchSupported = envFetch ? isFunction$1(envFetch) : typeof fetch === "function";
  const isRequestSupported = isFunction$1(Request2);
  const isResponseSupported = isFunction$1(Response2);
  if (!isFetchSupported) {
    return false;
  }
  const isReadableStreamSupported = isFetchSupported && isFunction$1(ReadableStream$1);
  const encodeText = isFetchSupported && (typeof TextEncoder$1 === "function" ? /* @__PURE__ */ ((encoder) => (str) => encoder.encode(str))(new TextEncoder$1()) : async (str) => new Uint8Array(await new Request2(str).arrayBuffer()));
  const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(() => {
    let duplexAccessed = false;
    const hasContentType = new Request2(platform.origin, {
      body: new ReadableStream$1(),
      method: "POST",
      get duplex() {
        duplexAccessed = true;
        return "half";
      }
    }).headers.has("Content-Type");
    return duplexAccessed && !hasContentType;
  });
  const supportsResponseStream = isResponseSupported && isReadableStreamSupported && test(() => utils$2.isReadableStream(new Response2("").body));
  const resolvers = {
    stream: supportsResponseStream && ((res) => res.body)
  };
  isFetchSupported && (() => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type2) => {
      !resolvers[type2] && (resolvers[type2] = (res, config2) => {
        let method = res && res[type2];
        if (method) {
          return method.call(res);
        }
        throw new AxiosError$1(
          `Response type '${type2}' is not supported`,
          AxiosError$1.ERR_NOT_SUPPORT,
          config2
        );
      });
    });
  })();
  const getBodyLength = async (body) => {
    if (body == null) {
      return 0;
    }
    if (utils$2.isBlob(body)) {
      return body.size;
    }
    if (utils$2.isSpecCompliantForm(body)) {
      const _request = new Request2(platform.origin, {
        method: "POST",
        body
      });
      return (await _request.arrayBuffer()).byteLength;
    }
    if (utils$2.isArrayBufferView(body) || utils$2.isArrayBuffer(body)) {
      return body.byteLength;
    }
    if (utils$2.isURLSearchParams(body)) {
      body = body + "";
    }
    if (utils$2.isString(body)) {
      return (await encodeText(body)).byteLength;
    }
  };
  const resolveBodyLength = async (headers, body) => {
    const length = utils$2.toFiniteNumber(headers.getContentLength());
    return length == null ? getBodyLength(body) : length;
  };
  return async (config2) => {
    let {
      url,
      method,
      data,
      signal,
      cancelToken,
      timeout,
      onDownloadProgress,
      onUploadProgress,
      responseType,
      headers,
      withCredentials = "same-origin",
      fetchOptions
    } = resolveConfig$1(config2);
    let _fetch = envFetch || fetch;
    responseType = responseType ? (responseType + "").toLowerCase() : "text";
    let composedSignal = composeSignals(
      [signal, cancelToken && cancelToken.toAbortSignal()],
      timeout
    );
    let request2 = null;
    const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
      composedSignal.unsubscribe();
    });
    let requestContentLength;
    try {
      if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
        let _request = new Request2(url, {
          method: "POST",
          body: data,
          duplex: "half"
        });
        let contentTypeHeader;
        if (utils$2.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
          headers.setContentType(contentTypeHeader);
        }
        if (_request.body) {
          const [onProgress, flush] = progressEventDecorator(
            requestContentLength,
            progressEventReducer(asyncDecorator(onUploadProgress))
          );
          data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
        }
      }
      if (!utils$2.isString(withCredentials)) {
        withCredentials = withCredentials ? "include" : "omit";
      }
      const isCredentialsSupported = isRequestSupported && "credentials" in Request2.prototype;
      const resolvedOptions = {
        ...fetchOptions,
        signal: composedSignal,
        method: method.toUpperCase(),
        headers: headers.normalize().toJSON(),
        body: data,
        duplex: "half",
        credentials: isCredentialsSupported ? withCredentials : void 0
      };
      request2 = isRequestSupported && new Request2(url, resolvedOptions);
      let response = await (isRequestSupported ? _fetch(request2, fetchOptions) : _fetch(url, resolvedOptions));
      const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
      if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
        const options = {};
        ["status", "statusText", "headers"].forEach((prop) => {
          options[prop] = response[prop];
        });
        const responseContentLength = utils$2.toFiniteNumber(response.headers.get("content-length"));
        const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
          responseContentLength,
          progressEventReducer(asyncDecorator(onDownloadProgress), true)
        ) || [];
        response = new Response2(
          trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
            flush && flush();
            unsubscribe && unsubscribe();
          }),
          options
        );
      }
      responseType = responseType || "text";
      let responseData = await resolvers[utils$2.findKey(resolvers, responseType) || "text"](
        response,
        config2
      );
      !isStreamResponse && unsubscribe && unsubscribe();
      return await new Promise((resolve, reject) => {
        settle(resolve, reject, {
          data: responseData,
          headers: AxiosHeaders$1.from(response.headers),
          status: response.status,
          statusText: response.statusText,
          config: config2,
          request: request2
        });
      });
    } catch (err) {
      unsubscribe && unsubscribe();
      if (err && err.name === "TypeError" && /Load failed|fetch/i.test(err.message)) {
        throw Object.assign(
          new AxiosError$1(
            "Network Error",
            AxiosError$1.ERR_NETWORK,
            config2,
            request2,
            err && err.response
          ),
          {
            cause: err.cause || err
          }
        );
      }
      throw AxiosError$1.from(err, err && err.code, config2, request2, err && err.response);
    }
  };
};
const seedCache = /* @__PURE__ */ new Map();
const getFetch = (config2) => {
  let env = config2 && config2.env || {};
  const { fetch: fetch2, Request: Request2, Response: Response2 } = env;
  const seeds = [Request2, Response2, fetch2];
  let len = seeds.length, i = len, seed, target, map = seedCache;
  while (i--) {
    seed = seeds[i];
    target = map.get(seed);
    target === void 0 && map.set(seed, target = i ? /* @__PURE__ */ new Map() : factory(env));
    map = target;
  }
  return target;
};
getFetch();
const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter,
  fetch: {
    get: getFetch
  }
};
utils$2.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch (e) {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
const renderReason = (reason) => `- ${reason}`;
const isResolvedHandle = (adapter) => utils$2.isFunction(adapter) || adapter === null || adapter === false;
function getAdapter$1(adapters2, config2) {
  adapters2 = utils$2.isArray(adapters2) ? adapters2 : [adapters2];
  const { length } = adapters2;
  let nameOrAdapter;
  let adapter;
  const rejectedReasons = {};
  for (let i = 0; i < length; i++) {
    nameOrAdapter = adapters2[i];
    let id;
    adapter = nameOrAdapter;
    if (!isResolvedHandle(nameOrAdapter)) {
      adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
      if (adapter === void 0) {
        throw new AxiosError$1(`Unknown adapter '${id}'`);
      }
    }
    if (adapter && (utils$2.isFunction(adapter) || (adapter = adapter.get(config2)))) {
      break;
    }
    rejectedReasons[id || "#" + i] = adapter;
  }
  if (!adapter) {
    const reasons = Object.entries(rejectedReasons).map(
      ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
    );
    let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
    throw new AxiosError$1(
      `There is no suitable adapter to dispatch the request ` + s,
      "ERR_NOT_SUPPORT"
    );
  }
  return adapter;
}
const adapters = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: getAdapter$1,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: knownAdapters
};
function throwIfCancellationRequested(config2) {
  if (config2.cancelToken) {
    config2.cancelToken.throwIfRequested();
  }
  if (config2.signal && config2.signal.aborted) {
    throw new CanceledError$1(null, config2);
  }
}
function dispatchRequest(config2) {
  throwIfCancellationRequested(config2);
  config2.headers = AxiosHeaders$1.from(config2.headers);
  config2.data = transformData.call(config2, config2.transformRequest);
  if (["post", "put", "patch"].indexOf(config2.method) !== -1) {
    config2.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter = adapters.getAdapter(config2.adapter || defaults.adapter, config2);
  return adapter(config2).then(
    function onAdapterResolution(response) {
      throwIfCancellationRequested(config2);
      response.data = transformData.call(config2, config2.transformResponse, response);
      response.headers = AxiosHeaders$1.from(response.headers);
      return response;
    },
    function onAdapterRejection(reason) {
      if (!isCancel$1(reason)) {
        throwIfCancellationRequested(config2);
        if (reason && reason.response) {
          reason.response.data = transformData.call(
            config2,
            config2.transformResponse,
            reason.response
          );
          reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
        }
      }
      return Promise.reject(reason);
    }
  );
}
const VERSION$1 = "1.13.6";
const validators$1 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type2, i) => {
  validators$1[type2] = function validator2(thing) {
    return typeof thing === type2 || "a" + (i < 1 ? "n " : " ") + type2;
  };
});
const deprecatedWarnings = {};
validators$1.transitional = function transitional(validator2, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION$1 + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator2 === false) {
      throw new AxiosError$1(
        formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
        AxiosError$1.ERR_DEPRECATED
      );
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version + " and will be removed in the near future"
        )
      );
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
validators$1.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError$1("options must be an object", AxiosError$1.ERR_BAD_OPTION_VALUE);
  }
  const keys2 = Object.keys(options);
  let i = keys2.length;
  while (i-- > 0) {
    const opt = keys2[i];
    const validator2 = schema[opt];
    if (validator2) {
      const value = options[opt];
      const result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new AxiosError$1(
          "option " + opt + " must be " + result,
          AxiosError$1.ERR_BAD_OPTION_VALUE
        );
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError$1("Unknown option " + opt, AxiosError$1.ERR_BAD_OPTION);
    }
  }
}
const validator = {
  assertOptions,
  validators: validators$1
};
const validators = validator.validators;
let Axios$1 = class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig || {};
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config2) {
    try {
      return await this._request(configOrUrl, config2);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};
        Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = new Error();
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
        try {
          if (!err.stack) {
            err.stack = stack;
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
            err.stack += "\n" + stack;
          }
        } catch (e) {
        }
      }
      throw err;
    }
  }
  _request(configOrUrl, config2) {
    if (typeof configOrUrl === "string") {
      config2 = config2 || {};
      config2.url = configOrUrl;
    } else {
      config2 = configOrUrl || {};
    }
    config2 = mergeConfig$2(this.defaults, config2);
    const { transitional: transitional2, paramsSerializer, headers } = config2;
    if (transitional2 !== void 0) {
      validator.assertOptions(
        transitional2,
        {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean),
          legacyInterceptorReqResOrdering: validators.transitional(validators.boolean)
        },
        false
      );
    }
    if (paramsSerializer != null) {
      if (utils$2.isFunction(paramsSerializer)) {
        config2.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(
          paramsSerializer,
          {
            encode: validators.function,
            serialize: validators.function
          },
          true
        );
      }
    }
    if (config2.allowAbsoluteUrls !== void 0) ;
    else if (this.defaults.allowAbsoluteUrls !== void 0) {
      config2.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
    } else {
      config2.allowAbsoluteUrls = true;
    }
    validator.assertOptions(
      config2,
      {
        baseUrl: validators.spelling("baseURL"),
        withXsrfToken: validators.spelling("withXSRFToken")
      },
      true
    );
    config2.method = (config2.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders = headers && utils$2.merge(headers.common, headers[config2.method]);
    headers && utils$2.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (method) => {
      delete headers[method];
    });
    config2.headers = AxiosHeaders$1.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config2) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      const transitional3 = config2.transitional || transitionalDefaults;
      const legacyInterceptorReqResOrdering = transitional3 && transitional3.legacyInterceptorReqResOrdering;
      if (legacyInterceptorReqResOrdering) {
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      } else {
        requestInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      }
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), void 0];
      chain.unshift(...requestInterceptorChain);
      chain.push(...responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config2);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config2;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config2) {
    config2 = mergeConfig$2(this.defaults, config2);
    const fullPath = buildFullPath(config2.baseURL, config2.url, config2.allowAbsoluteUrls);
    return buildURL(fullPath, config2.params, config2.paramsSerializer);
  }
};
utils$2.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
  Axios$1.prototype[method] = function(url, config2) {
    return this.request(
      mergeConfig$2(config2 || {}, {
        method,
        url,
        data: (config2 || {}).data
      })
    );
  };
});
utils$2.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config2) {
      return this.request(
        mergeConfig$2(config2 || {}, {
          method,
          headers: isForm ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url,
          data
        })
      );
    };
  }
  Axios$1.prototype[method] = generateHTTPMethod();
  Axios$1.prototype[method + "Form"] = generateHTTPMethod(true);
});
let CancelToken$1 = class CancelToken {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;
    this.promise.then((cancel) => {
      if (!token._listeners) return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise = new Promise((resolve) => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config2, request2) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError$1(message, config2, request2);
      resolvePromise(token.reason);
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  toAbortSignal() {
    const controller = new AbortController();
    const abort = (err) => {
      controller.abort(err);
    };
    this.subscribe(abort);
    controller.signal.unsubscribe = () => this.unsubscribe(abort);
    return controller.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c2) {
      cancel = c2;
    });
    return {
      token,
      cancel
    };
  }
};
function spread$1(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}
function isAxiosError$1(payload) {
  return utils$2.isObject(payload) && payload.isAxiosError === true;
}
const HttpStatusCode$1 = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(HttpStatusCode$1).forEach(([key, value]) => {
  HttpStatusCode$1[value] = key;
});
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);
  utils$2.extend(instance, Axios$1.prototype, context, { allOwnKeys: true });
  utils$2.extend(instance, context, null, { allOwnKeys: true });
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig$2(defaultConfig, instanceConfig));
  };
  return instance;
}
const axios$1 = createInstance(defaults);
axios$1.Axios = Axios$1;
axios$1.CanceledError = CanceledError$1;
axios$1.CancelToken = CancelToken$1;
axios$1.isCancel = isCancel$1;
axios$1.VERSION = VERSION$1;
axios$1.toFormData = toFormData$1;
axios$1.AxiosError = AxiosError$1;
axios$1.Cancel = axios$1.CanceledError;
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread$1;
axios$1.isAxiosError = isAxiosError$1;
axios$1.mergeConfig = mergeConfig$2;
axios$1.AxiosHeaders = AxiosHeaders$1;
axios$1.formToJSON = (thing) => formDataToJSON(utils$2.isHTMLForm(thing) ? new FormData(thing) : thing);
axios$1.getAdapter = adapters.getAdapter;
axios$1.HttpStatusCode = HttpStatusCode$1;
axios$1.default = axios$1;
const {
  Axios: Axios2,
  AxiosError: AxiosError2,
  CanceledError: CanceledError2,
  isCancel,
  CancelToken: CancelToken2,
  VERSION,
  all: all2,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders: AxiosHeaders2,
  HttpStatusCode,
  formToJSON,
  getAdapter,
  mergeConfig: mergeConfig$1
} = axios$1;
class u {
  constructor() {
    this.notificationCreatedEvent = ".Illuminate\\Notifications\\Events\\BroadcastNotificationCreated";
  }
  /**
   * Listen for a whisper event on the channel instance.
   */
  listenForWhisper(e, t2) {
    return this.listen(".client-" + e, t2);
  }
  /**
   * Listen for an event on the channel instance.
   */
  notification(e) {
    return this.listen(this.notificationCreatedEvent, e);
  }
  /**
   * Stop listening for notification events on the channel instance.
   */
  stopListeningForNotification(e) {
    return this.stopListening(this.notificationCreatedEvent, e);
  }
  /**
   * Stop listening for a whisper event on the channel instance.
   */
  stopListeningForWhisper(e, t2) {
    return this.stopListening(".client-" + e, t2);
  }
}
class d {
  /**
   * Create a new class instance.
   */
  constructor(e) {
    this.namespace = e;
  }
  /**
   * Format the given event name.
   */
  format(e) {
    return [".", "\\"].includes(e.charAt(0)) ? e.substring(1) : (this.namespace && (e = this.namespace + "." + e), e.replace(/\./g, "\\"));
  }
  /**
   * Set the event namespace.
   */
  setNamespace(e) {
    this.namespace = e;
  }
}
function g(s) {
  try {
    return Reflect.construct(String, [], s), true;
  } catch {
    return false;
  }
}
class l extends u {
  /**
   * Create a new class instance.
   */
  constructor(e, t2, n) {
    super(), this.name = t2, this.pusher = e, this.options = n, this.eventFormatter = new d(this.options.namespace), this.subscribe();
  }
  /**
   * Subscribe to a Pusher channel.
   */
  subscribe() {
    this.subscription = this.pusher.subscribe(this.name);
  }
  /**
   * Unsubscribe from a Pusher channel.
   */
  unsubscribe() {
    this.pusher.unsubscribe(this.name);
  }
  /**
   * Listen for an event on the channel instance.
   */
  listen(e, t2) {
    return this.on(this.eventFormatter.format(e), t2), this;
  }
  /**
   * Listen for all events on the channel instance.
   */
  listenToAll(e) {
    return this.subscription.bind_global((t2, n) => {
      if (t2.startsWith("pusher:"))
        return;
      let i = String(this.options.namespace ?? "").replace(
        /\./g,
        "\\"
      ), a = t2.startsWith(i) ? t2.substring(i.length + 1) : "." + t2;
      e(a, n);
    }), this;
  }
  /**
   * Stop listening for an event on the channel instance.
   */
  stopListening(e, t2) {
    return t2 ? this.subscription.unbind(
      this.eventFormatter.format(e),
      t2
    ) : this.subscription.unbind(this.eventFormatter.format(e)), this;
  }
  /**
   * Stop listening for all events on the channel instance.
   */
  stopListeningToAll(e) {
    return e ? this.subscription.unbind_global(e) : this.subscription.unbind_global(), this;
  }
  /**
   * Register a callback to be called anytime a subscription succeeds.
   */
  subscribed(e) {
    return this.on("pusher:subscription_succeeded", () => {
      e();
    }), this;
  }
  /**
   * Register a callback to be called anytime a subscription error occurs.
   */
  error(e) {
    return this.on("pusher:subscription_error", (t2) => {
      e(t2);
    }), this;
  }
  /**
   * Bind a channel to an event.
   */
  on(e, t2) {
    return this.subscription.bind(e, t2), this;
  }
}
class f extends l {
  /**
   * Send a whisper event to other clients in the channel.
   */
  whisper(e, t2) {
    return this.pusher.channels.channels[this.name].trigger(
      `client-${e}`,
      t2
    ), this;
  }
}
class w extends l {
  /**
   * Send a whisper event to other clients in the channel.
   */
  whisper(e, t2) {
    return this.pusher.channels.channels[this.name].trigger(
      `client-${e}`,
      t2
    ), this;
  }
}
class _ extends f {
  /**
   * Register a callback to be called anytime the member list changes.
   */
  here(e) {
    return this.on("pusher:subscription_succeeded", (t2) => {
      e(Object.keys(t2.members).map((n) => t2.members[n]));
    }), this;
  }
  /**
   * Listen for someone joining the channel.
   */
  joining(e) {
    return this.on("pusher:member_added", (t2) => {
      e(t2.info);
    }), this;
  }
  /**
   * Send a whisper event to other clients in the channel.
   */
  whisper(e, t2) {
    return this.pusher.channels.channels[this.name].trigger(
      `client-${e}`,
      t2
    ), this;
  }
  /**
   * Listen for someone leaving the channel.
   */
  leaving(e) {
    return this.on("pusher:member_removed", (t2) => {
      e(t2.info);
    }), this;
  }
}
class b extends u {
  /**
   * Create a new class instance.
   */
  constructor(e, t2, n) {
    super(), this.events = {}, this.listeners = {}, this.name = t2, this.socket = e, this.options = n, this.eventFormatter = new d(this.options.namespace), this.subscribe();
  }
  /**
   * Subscribe to a Socket.io channel.
   */
  subscribe() {
    this.socket.emit("subscribe", {
      channel: this.name,
      auth: this.options.auth || {}
    });
  }
  /**
   * Unsubscribe from channel and ubind event callbacks.
   */
  unsubscribe() {
    this.unbind(), this.socket.emit("unsubscribe", {
      channel: this.name,
      auth: this.options.auth || {}
    });
  }
  /**
   * Listen for an event on the channel instance.
   */
  listen(e, t2) {
    return this.on(this.eventFormatter.format(e), t2), this;
  }
  /**
   * Stop listening for an event on the channel instance.
   */
  stopListening(e, t2) {
    return this.unbindEvent(this.eventFormatter.format(e), t2), this;
  }
  /**
   * Register a callback to be called anytime a subscription succeeds.
   */
  subscribed(e) {
    return this.on("connect", (t2) => {
      e(t2);
    }), this;
  }
  /**
   * Register a callback to be called anytime an error occurs.
   */
  error(e) {
    return this;
  }
  /**
   * Bind the channel's socket to an event and store the callback.
   */
  on(e, t2) {
    return this.listeners[e] = this.listeners[e] || [], this.events[e] || (this.events[e] = (n, i) => {
      this.name === n && this.listeners[e] && this.listeners[e].forEach((a) => a(i));
    }, this.socket.on(e, this.events[e])), this.listeners[e].push(t2), this;
  }
  /**
   * Unbind the channel's socket from all stored event callbacks.
   */
  unbind() {
    Object.keys(this.events).forEach((e) => {
      this.unbindEvent(e);
    });
  }
  /**
   * Unbind the listeners for the given event.
   */
  unbindEvent(e, t2) {
    this.listeners[e] = this.listeners[e] || [], t2 && (this.listeners[e] = this.listeners[e].filter(
      (n) => n !== t2
    )), (!t2 || this.listeners[e].length === 0) && (this.events[e] && (this.socket.removeListener(e, this.events[e]), delete this.events[e]), delete this.listeners[e]);
  }
}
class v extends b {
  /**
   * Send a whisper event to other clients in the channel.
   */
  whisper(e, t2) {
    return this.socket.emit("client event", {
      channel: this.name,
      event: `client-${e}`,
      data: t2
    }), this;
  }
}
class C extends v {
  /**
   * Register a callback to be called anytime the member list changes.
   */
  here(e) {
    return this.on("presence:subscribed", (t2) => {
      e(t2.map((n) => n.user_info));
    }), this;
  }
  /**
   * Listen for someone joining the channel.
   */
  joining(e) {
    return this.on(
      "presence:joining",
      (t2) => e(t2.user_info)
    ), this;
  }
  /**
   * Send a whisper event to other clients in the channel.
   */
  whisper(e, t2) {
    return this.socket.emit("client event", {
      channel: this.name,
      event: `client-${e}`,
      data: t2
    }), this;
  }
  /**
   * Listen for someone leaving the channel.
   */
  leaving(e) {
    return this.on(
      "presence:leaving",
      (t2) => e(t2.user_info)
    ), this;
  }
}
class c extends u {
  /**
   * Subscribe to a channel.
   */
  subscribe() {
  }
  /**
   * Unsubscribe from a channel.
   */
  unsubscribe() {
  }
  /**
   * Listen for an event on the channel instance.
   */
  listen(e, t2) {
    return this;
  }
  /**
   * Listen for all events on the channel instance.
   */
  listenToAll(e) {
    return this;
  }
  /**
   * Stop listening for an event on the channel instance.
   */
  stopListening(e, t2) {
    return this;
  }
  /**
   * Register a callback to be called anytime a subscription succeeds.
   */
  subscribed(e) {
    return this;
  }
  /**
   * Register a callback to be called anytime an error occurs.
   */
  error(e) {
    return this;
  }
  /**
   * Bind a channel to an event.
   */
  on(e, t2) {
    return this;
  }
}
class k extends c {
  /**
   * Send a whisper event to other clients in the channel.
   */
  whisper(e, t2) {
    return this;
  }
}
class y extends c {
  /**
   * Send a whisper event to other clients in the channel.
   */
  whisper(e, t2) {
    return this;
  }
}
class m extends k {
  /**
   * Register a callback to be called anytime the member list changes.
   */
  here(e) {
    return this;
  }
  /**
   * Listen for someone joining the channel.
   */
  joining(e) {
    return this;
  }
  /**
   * Send a whisper event to other clients in the channel.
   */
  whisper(e, t2) {
    return this;
  }
  /**
   * Listen for someone leaving the channel.
   */
  leaving(e) {
    return this;
  }
}
const h = class h2 {
  /**
   * Create a new class instance.
   */
  constructor(e) {
    this.setOptions(e), this.connect();
  }
  /**
   * Merge the custom options with the defaults.
   */
  setOptions(e) {
    this.options = {
      ...h2._defaultOptions,
      ...e,
      broadcaster: e.broadcaster
    };
    let t2 = this.csrfToken();
    t2 && (this.options.auth.headers["X-CSRF-TOKEN"] = t2, this.options.userAuthentication.headers["X-CSRF-TOKEN"] = t2), t2 = this.options.bearerToken, t2 && (this.options.auth.headers.Authorization = "Bearer " + t2, this.options.userAuthentication.headers.Authorization = "Bearer " + t2);
  }
  /**
   * Extract the CSRF token from the page.
   */
  csrfToken() {
    var e, t2;
    return typeof window < "u" && ((e = window.Laravel) != null && e.csrfToken) ? window.Laravel.csrfToken : this.options.csrfToken ? this.options.csrfToken : typeof document < "u" && typeof document.querySelector == "function" ? ((t2 = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : t2.getAttribute("content")) ?? null : null;
  }
};
h._defaultOptions = {
  auth: {
    headers: {}
  },
  authEndpoint: "/broadcasting/auth",
  userAuthentication: {
    endpoint: "/broadcasting/user-auth",
    headers: {}
  },
  csrfToken: null,
  bearerToken: null,
  host: null,
  key: null,
  namespace: "App.Events"
};
let r = h;
class o extends r {
  constructor() {
    super(...arguments), this.channels = {};
  }
  /**
   * Create a fresh Pusher connection.
   */
  connect() {
    if (typeof this.options.client < "u")
      this.pusher = this.options.client;
    else if (this.options.Pusher)
      this.pusher = new this.options.Pusher(
        this.options.key,
        this.options
      );
    else if (typeof window < "u" && typeof window.Pusher < "u")
      this.pusher = new window.Pusher(this.options.key, this.options);
    else
      throw new Error(
        "Pusher client not found. Should be globally available or passed via options.client"
      );
  }
  /**
   * Sign in the user via Pusher user authentication (https://pusher.com/docs/channels/using_channels/user-authentication/).
   */
  signin() {
    this.pusher.signin();
  }
  /**
   * Listen for an event on a channel instance.
   */
  listen(e, t2, n) {
    return this.channel(e).listen(t2, n);
  }
  /**
   * Get a channel instance by name.
   */
  channel(e) {
    return this.channels[e] || (this.channels[e] = new l(
      this.pusher,
      e,
      this.options
    )), this.channels[e];
  }
  /**
   * Get a private channel instance by name.
   */
  privateChannel(e) {
    return this.channels["private-" + e] || (this.channels["private-" + e] = new f(
      this.pusher,
      "private-" + e,
      this.options
    )), this.channels["private-" + e];
  }
  /**
   * Get a private encrypted channel instance by name.
   */
  encryptedPrivateChannel(e) {
    return this.channels["private-encrypted-" + e] || (this.channels["private-encrypted-" + e] = new w(
      this.pusher,
      "private-encrypted-" + e,
      this.options
    )), this.channels["private-encrypted-" + e];
  }
  /**
   * Get a presence channel instance by name.
   */
  presenceChannel(e) {
    return this.channels["presence-" + e] || (this.channels["presence-" + e] = new _(
      this.pusher,
      "presence-" + e,
      this.options
    )), this.channels["presence-" + e];
  }
  /**
   * Leave the given channel, as well as its private and presence variants.
   */
  leave(e) {
    [
      e,
      "private-" + e,
      "private-encrypted-" + e,
      "presence-" + e
    ].forEach((n) => {
      this.leaveChannel(n);
    });
  }
  /**
   * Leave the given channel.
   */
  leaveChannel(e) {
    this.channels[e] && (this.channels[e].unsubscribe(), delete this.channels[e]);
  }
  /**
   * Get the socket ID for the connection.
   */
  socketId() {
    return this.pusher.connection.socket_id;
  }
  /**
   * Get the current connection status.
   */
  connectionStatus() {
    const e = this.pusher.connection.state;
    switch (e) {
      case "connected":
      case "connecting":
        return e;
      case "failed":
      case "unavailable":
        return "failed";
      default:
        return "disconnected";
    }
  }
  /**
   * Subscribe to connection status changes.
   */
  onConnectionChange(e) {
    const t2 = () => {
      e(this.connectionStatus());
    }, n = ["state_change", "connected", "disconnected"];
    return n.forEach((i) => {
      this.pusher.connection.bind(i, t2);
    }), () => {
      n.forEach((i) => {
        this.pusher.connection.unbind(i, t2);
      });
    };
  }
  /**
   * Disconnect Pusher connection.
   */
  disconnect() {
    this.pusher.disconnect();
  }
}
class S extends r {
  constructor() {
    super(...arguments), this.channels = {};
  }
  /**
   * Create a fresh Socket.io connection.
   */
  connect() {
    let e = this.getSocketIO();
    this.socket = e(
      this.options.host ?? void 0,
      this.options
    ), this.socket.io.on("reconnect", () => {
      Object.values(this.channels).forEach((t2) => {
        t2.subscribe();
      });
    });
  }
  /**
   * Get socket.io module from global scope or options.
   */
  getSocketIO() {
    if (typeof this.options.client < "u")
      return this.options.client;
    if (typeof window < "u" && typeof window.io < "u")
      return window.io;
    throw new Error(
      "Socket.io client not found. Should be globally available or passed via options.client"
    );
  }
  /**
   * Listen for an event on a channel instance.
   */
  listen(e, t2, n) {
    return this.channel(e).listen(t2, n);
  }
  /**
   * Get a channel instance by name.
   */
  channel(e) {
    return this.channels[e] || (this.channels[e] = new b(
      this.socket,
      e,
      this.options
    )), this.channels[e];
  }
  /**
   * Get a private channel instance by name.
   */
  privateChannel(e) {
    return this.channels["private-" + e] || (this.channels["private-" + e] = new v(
      this.socket,
      "private-" + e,
      this.options
    )), this.channels["private-" + e];
  }
  /**
   * Get a presence channel instance by name.
   */
  presenceChannel(e) {
    return this.channels["presence-" + e] || (this.channels["presence-" + e] = new C(
      this.socket,
      "presence-" + e,
      this.options
    )), this.channels["presence-" + e];
  }
  /**
   * Leave the given channel, as well as its private and presence variants.
   */
  leave(e) {
    [e, "private-" + e, "presence-" + e].forEach((n) => {
      this.leaveChannel(n);
    });
  }
  /**
   * Leave the given channel.
   */
  leaveChannel(e) {
    this.channels[e] && (this.channels[e].unsubscribe(), delete this.channels[e]);
  }
  /**
   * Get the socket ID for the connection.
   */
  socketId() {
    return this.socket.id;
  }
  /**
   * Get the current connection status.
   */
  connectionStatus() {
    return this.socket.connected ? "connected" : this.socket.io._reconnecting ? "reconnecting" : this.socket.id !== void 0 ? "disconnected" : "connecting";
  }
  /**
   * Subscribe to connection status changes.
   */
  onConnectionChange(e) {
    const t2 = () => {
      e(this.connectionStatus());
    }, n = [
      "connect",
      "disconnect",
      "connect_error",
      "reconnect_attempt",
      "reconnect",
      "reconnect_error",
      "reconnect_failed"
    ];
    return n.forEach((i) => {
      this.socket.on(i, t2);
    }), () => {
      n.forEach((i) => {
        this.socket.off(i, t2);
      });
    };
  }
  /**
   * Disconnect Socketio connection.
   */
  disconnect() {
    this.socket.disconnect();
  }
}
class p extends r {
  constructor() {
    super(...arguments), this.channels = {};
  }
  /**
   * Create a fresh connection.
   */
  connect() {
  }
  /**
   * Listen for an event on a channel instance.
   */
  listen(e, t2, n) {
    return new c();
  }
  /**
   * Get a channel instance by name.
   */
  channel(e) {
    return new c();
  }
  /**
   * Get a private channel instance by name.
   */
  privateChannel(e) {
    return new k();
  }
  /**
   * Get a private encrypted channel instance by name.
   */
  encryptedPrivateChannel(e) {
    return new y();
  }
  /**
   * Get a presence channel instance by name.
   */
  presenceChannel(e) {
    return new m();
  }
  /**
   * Leave the given channel, as well as its private and presence variants.
   */
  leave(e) {
  }
  /**
   * Leave the given channel.
   */
  leaveChannel(e) {
  }
  /**
   * Get the socket ID for the connection.
   */
  socketId() {
    return "fake-socket-id";
  }
  /**
   * Get the current connection status.
   */
  connectionStatus() {
    return "connected";
  }
  /**
   * Subscribe to connection status changes.
   */
  onConnectionChange(e) {
    return () => {
    };
  }
  /**
   * Disconnect the connection.
   */
  disconnect() {
  }
}
class E {
  /**
   * Create a new class instance.
   */
  constructor(e) {
    this.options = e, this.connect(), this.options.withoutInterceptors || this.registerInterceptors();
  }
  /**
   * Get a channel instance by name.
   */
  channel(e) {
    return this.connector.channel(e);
  }
  /**
   * Create a new connection.
   */
  connect() {
    if (this.options.broadcaster === "reverb")
      this.connector = new o({
        ...this.options,
        cluster: ""
      });
    else if (this.options.broadcaster === "pusher")
      this.connector = new o(this.options);
    else if (this.options.broadcaster === "ably")
      this.connector = new o({
        ...this.options,
        cluster: "",
        broadcaster: "pusher"
      });
    else if (this.options.broadcaster === "socket.io")
      this.connector = new S(this.options);
    else if (this.options.broadcaster === "null")
      this.connector = new p(this.options);
    else if (typeof this.options.broadcaster == "function" && g(this.options.broadcaster))
      this.connector = new this.options.broadcaster(this.options);
    else
      throw new Error(
        `Broadcaster ${typeof this.options.broadcaster} ${String(this.options.broadcaster)} is not supported.`
      );
  }
  /**
   * Disconnect from the Echo server.
   */
  disconnect() {
    this.connector.disconnect();
  }
  /**
   * Get a presence channel instance by name.
   */
  join(e) {
    return this.connector.presenceChannel(e);
  }
  /**
   * Leave the given channel, as well as its private and presence variants.
   */
  leave(e) {
    this.connector.leave(e);
  }
  /**
   * Leave the given channel.
   */
  leaveChannel(e) {
    this.connector.leaveChannel(e);
  }
  /**
   * Leave all channels.
   */
  leaveAllChannels() {
    for (const e in this.connector.channels)
      this.leaveChannel(e);
  }
  /**
   * Listen for an event on a channel instance.
   */
  listen(e, t2, n) {
    return this.connector.listen(e, t2, n);
  }
  /**
   * Get a private channel instance by name.
   */
  private(e) {
    return this.connector.privateChannel(e);
  }
  /**
   * Get a private encrypted channel instance by name.
   */
  encryptedPrivate(e) {
    if (this.connectorSupportsEncryptedPrivateChannels(this.connector))
      return this.connector.encryptedPrivateChannel(e);
    throw new Error(
      `Broadcaster ${typeof this.options.broadcaster} ${String(
        this.options.broadcaster
      )} does not support encrypted private channels.`
    );
  }
  connectorSupportsEncryptedPrivateChannels(e) {
    return e instanceof o || e instanceof p;
  }
  /**
   * Get the Socket ID for the connection.
   */
  socketId() {
    return this.connector.socketId();
  }
  /**
   * Get the current connection status.
   */
  connectionStatus() {
    return this.connector.connectionStatus();
  }
  /**
   * Register 3rd party request interceptors. These are used to automatically
   * send a connections socket id to a Laravel app with a X-Socket-Id header.
   */
  registerInterceptors() {
    typeof Vue < "u" && (Vue != null && Vue.http) && this.registerVueRequestInterceptor(), typeof axios == "function" && this.registerAxiosRequestInterceptor(), typeof jQuery == "function" && this.registerjQueryAjaxSetup(), typeof Turbo == "object" && this.registerTurboRequestInterceptor();
  }
  /**
   * Register a Vue HTTP interceptor to add the X-Socket-ID header.
   */
  registerVueRequestInterceptor() {
    Vue.http.interceptors.push(
      (e, t2) => {
        this.socketId() && e.headers.set("X-Socket-ID", this.socketId()), t2();
      }
    );
  }
  /**
   * Register an Axios HTTP interceptor to add the X-Socket-ID header.
   */
  registerAxiosRequestInterceptor() {
    axios.interceptors.request.use(
      (e) => (this.socketId() && (e.headers["X-Socket-Id"] = this.socketId()), e)
    );
  }
  /**
   * Register jQuery AjaxPrefilter to add the X-Socket-ID header.
   */
  registerjQueryAjaxSetup() {
    typeof jQuery.ajax < "u" && jQuery.ajaxPrefilter(
      (e, t2, n) => {
        this.socketId() && n.setRequestHeader("X-Socket-Id", this.socketId());
      }
    );
  }
  /**
   * Register the Turbo Request interceptor to add the X-Socket-ID header.
   */
  registerTurboRequestInterceptor() {
    document.addEventListener(
      "turbo:before-fetch-request",
      (e) => {
        e.detail.fetchOptions.headers["X-Socket-Id"] = this.socketId();
      }
    );
  }
}
var pusher = { exports: {} };
/*!
 * Pusher JavaScript Library v8.4.0
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */
var hasRequiredPusher;
function requirePusher() {
  if (hasRequiredPusher) return pusher.exports;
  hasRequiredPusher = 1;
  (function(module2, exports$1) {
    (function webpackUniversalModuleDefinition(root2, factory2) {
      module2.exports = factory2();
    })(window, function() {
      return (
        /******/
        (function(modules) {
          var installedModules = {};
          function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
              return installedModules[moduleId].exports;
            }
            var module3 = installedModules[moduleId] = {
              /******/
              i: moduleId,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            modules[moduleId].call(module3.exports, module3, module3.exports, __webpack_require__);
            module3.l = true;
            return module3.exports;
          }
          __webpack_require__.m = modules;
          __webpack_require__.c = installedModules;
          __webpack_require__.d = function(exports$12, name, getter) {
            if (!__webpack_require__.o(exports$12, name)) {
              Object.defineProperty(exports$12, name, { enumerable: true, get: getter });
            }
          };
          __webpack_require__.r = function(exports$12) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
              Object.defineProperty(exports$12, Symbol.toStringTag, { value: "Module" });
            }
            Object.defineProperty(exports$12, "__esModule", { value: true });
          };
          __webpack_require__.t = function(value, mode) {
            if (mode & 1) value = __webpack_require__(value);
            if (mode & 8) return value;
            if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
            var ns = /* @__PURE__ */ Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", { enumerable: true, value });
            if (mode & 2 && typeof value != "string") for (var key in value) __webpack_require__.d(ns, key, (function(key2) {
              return value[key2];
            }).bind(null, key));
            return ns;
          };
          __webpack_require__.n = function(module3) {
            var getter = module3 && module3.__esModule ? (
              /******/
              function getDefault() {
                return module3["default"];
              }
            ) : (
              /******/
              function getModuleExports() {
                return module3;
              }
            );
            __webpack_require__.d(getter, "a", getter);
            return getter;
          };
          __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          __webpack_require__.p = "";
          return __webpack_require__(__webpack_require__.s = 2);
        })([
          /* 0 */
          /***/
          (function(module3, exports$12, __webpack_require__) {
            var __extends = this && this.__extends || /* @__PURE__ */ (function() {
              var extendStatics = function(d2, b2) {
                extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
                  d3.__proto__ = b3;
                } || function(d3, b3) {
                  for (var p2 in b3) if (b3.hasOwnProperty(p2)) d3[p2] = b3[p2];
                };
                return extendStatics(d2, b2);
              };
              return function(d2, b2) {
                extendStatics(d2, b2);
                function __() {
                  this.constructor = d2;
                }
                d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
              };
            })();
            Object.defineProperty(exports$12, "__esModule", { value: true });
            var INVALID_BYTE = 256;
            var Coder = (
              /** @class */
              (function() {
                function Coder2(_paddingCharacter) {
                  if (_paddingCharacter === void 0) {
                    _paddingCharacter = "=";
                  }
                  this._paddingCharacter = _paddingCharacter;
                }
                Coder2.prototype.encodedLength = function(length) {
                  if (!this._paddingCharacter) {
                    return (length * 8 + 5) / 6 | 0;
                  }
                  return (length + 2) / 3 * 4 | 0;
                };
                Coder2.prototype.encode = function(data) {
                  var out = "";
                  var i = 0;
                  for (; i < data.length - 2; i += 3) {
                    var c2 = data[i] << 16 | data[i + 1] << 8 | data[i + 2];
                    out += this._encodeByte(c2 >>> 3 * 6 & 63);
                    out += this._encodeByte(c2 >>> 2 * 6 & 63);
                    out += this._encodeByte(c2 >>> 1 * 6 & 63);
                    out += this._encodeByte(c2 >>> 0 * 6 & 63);
                  }
                  var left = data.length - i;
                  if (left > 0) {
                    var c2 = data[i] << 16 | (left === 2 ? data[i + 1] << 8 : 0);
                    out += this._encodeByte(c2 >>> 3 * 6 & 63);
                    out += this._encodeByte(c2 >>> 2 * 6 & 63);
                    if (left === 2) {
                      out += this._encodeByte(c2 >>> 1 * 6 & 63);
                    } else {
                      out += this._paddingCharacter || "";
                    }
                    out += this._paddingCharacter || "";
                  }
                  return out;
                };
                Coder2.prototype.maxDecodedLength = function(length) {
                  if (!this._paddingCharacter) {
                    return (length * 6 + 7) / 8 | 0;
                  }
                  return length / 4 * 3 | 0;
                };
                Coder2.prototype.decodedLength = function(s) {
                  return this.maxDecodedLength(s.length - this._getPaddingLength(s));
                };
                Coder2.prototype.decode = function(s) {
                  if (s.length === 0) {
                    return new Uint8Array(0);
                  }
                  var paddingLength = this._getPaddingLength(s);
                  var length = s.length - paddingLength;
                  var out = new Uint8Array(this.maxDecodedLength(length));
                  var op = 0;
                  var i = 0;
                  var haveBad = 0;
                  var v0 = 0, v1 = 0, v2 = 0, v3 = 0;
                  for (; i < length - 4; i += 4) {
                    v0 = this._decodeChar(s.charCodeAt(i + 0));
                    v1 = this._decodeChar(s.charCodeAt(i + 1));
                    v2 = this._decodeChar(s.charCodeAt(i + 2));
                    v3 = this._decodeChar(s.charCodeAt(i + 3));
                    out[op++] = v0 << 2 | v1 >>> 4;
                    out[op++] = v1 << 4 | v2 >>> 2;
                    out[op++] = v2 << 6 | v3;
                    haveBad |= v0 & INVALID_BYTE;
                    haveBad |= v1 & INVALID_BYTE;
                    haveBad |= v2 & INVALID_BYTE;
                    haveBad |= v3 & INVALID_BYTE;
                  }
                  if (i < length - 1) {
                    v0 = this._decodeChar(s.charCodeAt(i));
                    v1 = this._decodeChar(s.charCodeAt(i + 1));
                    out[op++] = v0 << 2 | v1 >>> 4;
                    haveBad |= v0 & INVALID_BYTE;
                    haveBad |= v1 & INVALID_BYTE;
                  }
                  if (i < length - 2) {
                    v2 = this._decodeChar(s.charCodeAt(i + 2));
                    out[op++] = v1 << 4 | v2 >>> 2;
                    haveBad |= v2 & INVALID_BYTE;
                  }
                  if (i < length - 3) {
                    v3 = this._decodeChar(s.charCodeAt(i + 3));
                    out[op++] = v2 << 6 | v3;
                    haveBad |= v3 & INVALID_BYTE;
                  }
                  if (haveBad !== 0) {
                    throw new Error("Base64Coder: incorrect characters for decoding");
                  }
                  return out;
                };
                Coder2.prototype._encodeByte = function(b2) {
                  var result = b2;
                  result += 65;
                  result += 25 - b2 >>> 8 & 0 - 65 - 26 + 97;
                  result += 51 - b2 >>> 8 & 26 - 97 - 52 + 48;
                  result += 61 - b2 >>> 8 & 52 - 48 - 62 + 43;
                  result += 62 - b2 >>> 8 & 62 - 43 - 63 + 47;
                  return String.fromCharCode(result);
                };
                Coder2.prototype._decodeChar = function(c2) {
                  var result = INVALID_BYTE;
                  result += (42 - c2 & c2 - 44) >>> 8 & -INVALID_BYTE + c2 - 43 + 62;
                  result += (46 - c2 & c2 - 48) >>> 8 & -INVALID_BYTE + c2 - 47 + 63;
                  result += (47 - c2 & c2 - 58) >>> 8 & -INVALID_BYTE + c2 - 48 + 52;
                  result += (64 - c2 & c2 - 91) >>> 8 & -INVALID_BYTE + c2 - 65 + 0;
                  result += (96 - c2 & c2 - 123) >>> 8 & -INVALID_BYTE + c2 - 97 + 26;
                  return result;
                };
                Coder2.prototype._getPaddingLength = function(s) {
                  var paddingLength = 0;
                  if (this._paddingCharacter) {
                    for (var i = s.length - 1; i >= 0; i--) {
                      if (s[i] !== this._paddingCharacter) {
                        break;
                      }
                      paddingLength++;
                    }
                    if (s.length < 4 || paddingLength > 2) {
                      throw new Error("Base64Coder: incorrect padding");
                    }
                  }
                  return paddingLength;
                };
                return Coder2;
              })()
            );
            exports$12.Coder = Coder;
            var stdCoder = new Coder();
            function encode2(data) {
              return stdCoder.encode(data);
            }
            exports$12.encode = encode2;
            function decode(s) {
              return stdCoder.decode(s);
            }
            exports$12.decode = decode;
            var URLSafeCoder = (
              /** @class */
              (function(_super) {
                __extends(URLSafeCoder2, _super);
                function URLSafeCoder2() {
                  return _super !== null && _super.apply(this, arguments) || this;
                }
                URLSafeCoder2.prototype._encodeByte = function(b2) {
                  var result = b2;
                  result += 65;
                  result += 25 - b2 >>> 8 & 0 - 65 - 26 + 97;
                  result += 51 - b2 >>> 8 & 26 - 97 - 52 + 48;
                  result += 61 - b2 >>> 8 & 52 - 48 - 62 + 45;
                  result += 62 - b2 >>> 8 & 62 - 45 - 63 + 95;
                  return String.fromCharCode(result);
                };
                URLSafeCoder2.prototype._decodeChar = function(c2) {
                  var result = INVALID_BYTE;
                  result += (44 - c2 & c2 - 46) >>> 8 & -INVALID_BYTE + c2 - 45 + 62;
                  result += (94 - c2 & c2 - 96) >>> 8 & -INVALID_BYTE + c2 - 95 + 63;
                  result += (47 - c2 & c2 - 58) >>> 8 & -INVALID_BYTE + c2 - 48 + 52;
                  result += (64 - c2 & c2 - 91) >>> 8 & -INVALID_BYTE + c2 - 65 + 0;
                  result += (96 - c2 & c2 - 123) >>> 8 & -INVALID_BYTE + c2 - 97 + 26;
                  return result;
                };
                return URLSafeCoder2;
              })(Coder)
            );
            exports$12.URLSafeCoder = URLSafeCoder;
            var urlSafeCoder = new URLSafeCoder();
            function encodeURLSafe(data) {
              return urlSafeCoder.encode(data);
            }
            exports$12.encodeURLSafe = encodeURLSafe;
            function decodeURLSafe(s) {
              return urlSafeCoder.decode(s);
            }
            exports$12.decodeURLSafe = decodeURLSafe;
            exports$12.encodedLength = function(length) {
              return stdCoder.encodedLength(length);
            };
            exports$12.maxDecodedLength = function(length) {
              return stdCoder.maxDecodedLength(length);
            };
            exports$12.decodedLength = function(s) {
              return stdCoder.decodedLength(s);
            };
          }),
          /* 1 */
          /***/
          (function(module3, exports$12, __webpack_require__) {
            Object.defineProperty(exports$12, "__esModule", { value: true });
            var INVALID_UTF16 = "utf8: invalid string";
            var INVALID_UTF8 = "utf8: invalid source encoding";
            function encode2(s) {
              var arr = new Uint8Array(encodedLength(s));
              var pos = 0;
              for (var i = 0; i < s.length; i++) {
                var c2 = s.charCodeAt(i);
                if (c2 < 128) {
                  arr[pos++] = c2;
                } else if (c2 < 2048) {
                  arr[pos++] = 192 | c2 >> 6;
                  arr[pos++] = 128 | c2 & 63;
                } else if (c2 < 55296) {
                  arr[pos++] = 224 | c2 >> 12;
                  arr[pos++] = 128 | c2 >> 6 & 63;
                  arr[pos++] = 128 | c2 & 63;
                } else {
                  i++;
                  c2 = (c2 & 1023) << 10;
                  c2 |= s.charCodeAt(i) & 1023;
                  c2 += 65536;
                  arr[pos++] = 240 | c2 >> 18;
                  arr[pos++] = 128 | c2 >> 12 & 63;
                  arr[pos++] = 128 | c2 >> 6 & 63;
                  arr[pos++] = 128 | c2 & 63;
                }
              }
              return arr;
            }
            exports$12.encode = encode2;
            function encodedLength(s) {
              var result = 0;
              for (var i = 0; i < s.length; i++) {
                var c2 = s.charCodeAt(i);
                if (c2 < 128) {
                  result += 1;
                } else if (c2 < 2048) {
                  result += 2;
                } else if (c2 < 55296) {
                  result += 3;
                } else if (c2 <= 57343) {
                  if (i >= s.length - 1) {
                    throw new Error(INVALID_UTF16);
                  }
                  i++;
                  result += 4;
                } else {
                  throw new Error(INVALID_UTF16);
                }
              }
              return result;
            }
            exports$12.encodedLength = encodedLength;
            function decode(arr) {
              var chars = [];
              for (var i = 0; i < arr.length; i++) {
                var b2 = arr[i];
                if (b2 & 128) {
                  var min2 = void 0;
                  if (b2 < 224) {
                    if (i >= arr.length) {
                      throw new Error(INVALID_UTF8);
                    }
                    var n1 = arr[++i];
                    if ((n1 & 192) !== 128) {
                      throw new Error(INVALID_UTF8);
                    }
                    b2 = (b2 & 31) << 6 | n1 & 63;
                    min2 = 128;
                  } else if (b2 < 240) {
                    if (i >= arr.length - 1) {
                      throw new Error(INVALID_UTF8);
                    }
                    var n1 = arr[++i];
                    var n2 = arr[++i];
                    if ((n1 & 192) !== 128 || (n2 & 192) !== 128) {
                      throw new Error(INVALID_UTF8);
                    }
                    b2 = (b2 & 15) << 12 | (n1 & 63) << 6 | n2 & 63;
                    min2 = 2048;
                  } else if (b2 < 248) {
                    if (i >= arr.length - 2) {
                      throw new Error(INVALID_UTF8);
                    }
                    var n1 = arr[++i];
                    var n2 = arr[++i];
                    var n3 = arr[++i];
                    if ((n1 & 192) !== 128 || (n2 & 192) !== 128 || (n3 & 192) !== 128) {
                      throw new Error(INVALID_UTF8);
                    }
                    b2 = (b2 & 15) << 18 | (n1 & 63) << 12 | (n2 & 63) << 6 | n3 & 63;
                    min2 = 65536;
                  } else {
                    throw new Error(INVALID_UTF8);
                  }
                  if (b2 < min2 || b2 >= 55296 && b2 <= 57343) {
                    throw new Error(INVALID_UTF8);
                  }
                  if (b2 >= 65536) {
                    if (b2 > 1114111) {
                      throw new Error(INVALID_UTF8);
                    }
                    b2 -= 65536;
                    chars.push(String.fromCharCode(55296 | b2 >> 10));
                    b2 = 56320 | b2 & 1023;
                  }
                }
                chars.push(String.fromCharCode(b2));
              }
              return chars.join("");
            }
            exports$12.decode = decode;
          }),
          /* 2 */
          /***/
          (function(module3, exports$12, __webpack_require__) {
            module3.exports = __webpack_require__(3).default;
          }),
          /* 3 */
          /***/
          (function(module3, __webpack_exports__, __webpack_require__) {
            __webpack_require__.r(__webpack_exports__);
            class ScriptReceiverFactory {
              constructor(prefix2, name) {
                this.lastId = 0;
                this.prefix = prefix2;
                this.name = name;
              }
              create(callback) {
                this.lastId++;
                var number = this.lastId;
                var id = this.prefix + number;
                var name = this.name + "[" + number + "]";
                var called = false;
                var callbackWrapper = function() {
                  if (!called) {
                    callback.apply(null, arguments);
                    called = true;
                  }
                };
                this[number] = callbackWrapper;
                return { number, id, name, callback: callbackWrapper };
              }
              remove(receiver) {
                delete this[receiver.number];
              }
            }
            var ScriptReceivers = new ScriptReceiverFactory("_pusher_script_", "Pusher.ScriptReceivers");
            var Defaults = {
              VERSION: "8.4.0",
              PROTOCOL: 7,
              wsPort: 80,
              wssPort: 443,
              wsPath: "",
              httpHost: "sockjs.pusher.com",
              httpPort: 80,
              httpsPort: 443,
              httpPath: "/pusher",
              stats_host: "stats.pusher.com",
              authEndpoint: "/pusher/auth",
              authTransport: "ajax",
              activityTimeout: 12e4,
              pongTimeout: 3e4,
              unavailableTimeout: 1e4,
              userAuthentication: {
                endpoint: "/pusher/user-auth",
                transport: "ajax"
              },
              channelAuthorization: {
                endpoint: "/pusher/auth",
                transport: "ajax"
              },
              cdn_http: "http://js.pusher.com",
              cdn_https: "https://js.pusher.com",
              dependency_suffix: ""
            };
            var defaults2 = Defaults;
            class dependency_loader_DependencyLoader {
              constructor(options) {
                this.options = options;
                this.receivers = options.receivers || ScriptReceivers;
                this.loading = {};
              }
              load(name, options, callback) {
                var self2 = this;
                if (self2.loading[name] && self2.loading[name].length > 0) {
                  self2.loading[name].push(callback);
                } else {
                  self2.loading[name] = [callback];
                  var request2 = runtime.createScriptRequest(self2.getPath(name, options));
                  var receiver = self2.receivers.create(function(error) {
                    self2.receivers.remove(receiver);
                    if (self2.loading[name]) {
                      var callbacks = self2.loading[name];
                      delete self2.loading[name];
                      var successCallback = function(wasSuccessful) {
                        if (!wasSuccessful) {
                          request2.cleanup();
                        }
                      };
                      for (var i = 0; i < callbacks.length; i++) {
                        callbacks[i](error, successCallback);
                      }
                    }
                  });
                  request2.send(receiver);
                }
              }
              getRoot(options) {
                var cdn;
                var protocol = runtime.getDocument().location.protocol;
                if (options && options.useTLS || protocol === "https:") {
                  cdn = this.options.cdn_https;
                } else {
                  cdn = this.options.cdn_http;
                }
                return cdn.replace(/\/*$/, "") + "/" + this.options.version;
              }
              getPath(name, options) {
                return this.getRoot(options) + "/" + name + this.options.suffix + ".js";
              }
            }
            var DependenciesReceivers = new ScriptReceiverFactory("_pusher_dependencies", "Pusher.DependenciesReceivers");
            var Dependencies = new dependency_loader_DependencyLoader({
              cdn_http: defaults2.cdn_http,
              cdn_https: defaults2.cdn_https,
              version: defaults2.VERSION,
              suffix: defaults2.dependency_suffix,
              receivers: DependenciesReceivers
            });
            const urlStore = {
              baseUrl: "https://pusher.com",
              urls: {
                authenticationEndpoint: {
                  path: "/docs/channels/server_api/authenticating_users"
                },
                authorizationEndpoint: {
                  path: "/docs/channels/server_api/authorizing-users/"
                },
                javascriptQuickStart: {
                  path: "/docs/javascript_quick_start"
                },
                triggeringClientEvents: {
                  path: "/docs/client_api_guide/client_events#trigger-events"
                },
                encryptedChannelSupport: {
                  fullUrl: "https://github.com/pusher/pusher-js/tree/cc491015371a4bde5743d1c87a0fbac0feb53195#encrypted-channel-support"
                }
              }
            };
            const buildLogSuffix = function(key) {
              const urlPrefix = "See:";
              const urlObj = urlStore.urls[key];
              if (!urlObj)
                return "";
              let url;
              if (urlObj.fullUrl) {
                url = urlObj.fullUrl;
              } else if (urlObj.path) {
                url = urlStore.baseUrl + urlObj.path;
              }
              if (!url)
                return "";
              return `${urlPrefix} ${url}`;
            };
            var url_store = { buildLogSuffix };
            var AuthRequestType;
            (function(AuthRequestType2) {
              AuthRequestType2["UserAuthentication"] = "user-authentication";
              AuthRequestType2["ChannelAuthorization"] = "channel-authorization";
            })(AuthRequestType || (AuthRequestType = {}));
            class BadEventName extends Error {
              constructor(msg) {
                super(msg);
                Object.setPrototypeOf(this, new.target.prototype);
              }
            }
            class BadChannelName extends Error {
              constructor(msg) {
                super(msg);
                Object.setPrototypeOf(this, new.target.prototype);
              }
            }
            class RequestTimedOut extends Error {
              constructor(msg) {
                super(msg);
                Object.setPrototypeOf(this, new.target.prototype);
              }
            }
            class TransportPriorityTooLow extends Error {
              constructor(msg) {
                super(msg);
                Object.setPrototypeOf(this, new.target.prototype);
              }
            }
            class TransportClosed extends Error {
              constructor(msg) {
                super(msg);
                Object.setPrototypeOf(this, new.target.prototype);
              }
            }
            class UnsupportedFeature extends Error {
              constructor(msg) {
                super(msg);
                Object.setPrototypeOf(this, new.target.prototype);
              }
            }
            class UnsupportedTransport extends Error {
              constructor(msg) {
                super(msg);
                Object.setPrototypeOf(this, new.target.prototype);
              }
            }
            class UnsupportedStrategy extends Error {
              constructor(msg) {
                super(msg);
                Object.setPrototypeOf(this, new.target.prototype);
              }
            }
            class HTTPAuthError extends Error {
              constructor(status2, msg) {
                super(msg);
                this.status = status2;
                Object.setPrototypeOf(this, new.target.prototype);
              }
            }
            const ajax = function(context, query, authOptions, authRequestType, callback) {
              const xhr = runtime.createXHR();
              xhr.open("POST", authOptions.endpoint, true);
              xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
              for (var headerName in authOptions.headers) {
                xhr.setRequestHeader(headerName, authOptions.headers[headerName]);
              }
              if (authOptions.headersProvider != null) {
                let dynamicHeaders = authOptions.headersProvider();
                for (var headerName in dynamicHeaders) {
                  xhr.setRequestHeader(headerName, dynamicHeaders[headerName]);
                }
              }
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                  if (xhr.status === 200) {
                    let data;
                    let parsed = false;
                    try {
                      data = JSON.parse(xhr.responseText);
                      parsed = true;
                    } catch (e) {
                      callback(new HTTPAuthError(200, `JSON returned from ${authRequestType.toString()} endpoint was invalid, yet status code was 200. Data was: ${xhr.responseText}`), null);
                    }
                    if (parsed) {
                      callback(null, data);
                    }
                  } else {
                    let suffix = "";
                    switch (authRequestType) {
                      case AuthRequestType.UserAuthentication:
                        suffix = url_store.buildLogSuffix("authenticationEndpoint");
                        break;
                      case AuthRequestType.ChannelAuthorization:
                        suffix = `Clients must be authorized to join private or presence channels. ${url_store.buildLogSuffix("authorizationEndpoint")}`;
                        break;
                    }
                    callback(new HTTPAuthError(xhr.status, `Unable to retrieve auth string from ${authRequestType.toString()} endpoint - received status: ${xhr.status} from ${authOptions.endpoint}. ${suffix}`), null);
                  }
                }
              };
              xhr.send(query);
              return xhr;
            };
            var xhr_auth = ajax;
            function encode2(s) {
              return btoa2(utob(s));
            }
            var fromCharCode = String.fromCharCode;
            var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            var cb_utob = function(c2) {
              var cc = c2.charCodeAt(0);
              return cc < 128 ? c2 : cc < 2048 ? fromCharCode(192 | cc >>> 6) + fromCharCode(128 | cc & 63) : fromCharCode(224 | cc >>> 12 & 15) + fromCharCode(128 | cc >>> 6 & 63) + fromCharCode(128 | cc & 63);
            };
            var utob = function(u2) {
              return u2.replace(/[^\x00-\x7F]/g, cb_utob);
            };
            var cb_encode = function(ccc) {
              var padlen = [0, 2, 1][ccc.length % 3];
              var ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0);
              var chars = [
                b64chars.charAt(ord >>> 18),
                b64chars.charAt(ord >>> 12 & 63),
                padlen >= 2 ? "=" : b64chars.charAt(ord >>> 6 & 63),
                padlen >= 1 ? "=" : b64chars.charAt(ord & 63)
              ];
              return chars.join("");
            };
            var btoa2 = window.btoa || function(b2) {
              return b2.replace(/[\s\S]{1,3}/g, cb_encode);
            };
            class Timer {
              constructor(set2, clear, delay, callback) {
                this.clear = clear;
                this.timer = set2(() => {
                  if (this.timer) {
                    this.timer = callback(this.timer);
                  }
                }, delay);
              }
              isRunning() {
                return this.timer !== null;
              }
              ensureAborted() {
                if (this.timer) {
                  this.clear(this.timer);
                  this.timer = null;
                }
              }
            }
            var abstract_timer = Timer;
            function timers_clearTimeout(timer) {
              window.clearTimeout(timer);
            }
            function timers_clearInterval(timer) {
              window.clearInterval(timer);
            }
            class timers_OneOffTimer extends abstract_timer {
              constructor(delay, callback) {
                super(setTimeout, timers_clearTimeout, delay, function(timer) {
                  callback();
                  return null;
                });
              }
            }
            class timers_PeriodicTimer extends abstract_timer {
              constructor(delay, callback) {
                super(setInterval, timers_clearInterval, delay, function(timer) {
                  callback();
                  return timer;
                });
              }
            }
            var Util = {
              now() {
                if (Date.now) {
                  return Date.now();
                } else {
                  return (/* @__PURE__ */ new Date()).valueOf();
                }
              },
              defer(callback) {
                return new timers_OneOffTimer(0, callback);
              },
              method(name, ...args) {
                var boundArguments = Array.prototype.slice.call(arguments, 1);
                return function(object) {
                  return object[name].apply(object, boundArguments.concat(arguments));
                };
              }
            };
            var util = Util;
            function extend2(target, ...sources) {
              for (var i = 0; i < sources.length; i++) {
                var extensions = sources[i];
                for (var property in extensions) {
                  if (extensions[property] && extensions[property].constructor && extensions[property].constructor === Object) {
                    target[property] = extend2(target[property] || {}, extensions[property]);
                  } else {
                    target[property] = extensions[property];
                  }
                }
              }
              return target;
            }
            function stringify() {
              var m2 = ["Pusher"];
              for (var i = 0; i < arguments.length; i++) {
                if (typeof arguments[i] === "string") {
                  m2.push(arguments[i]);
                } else {
                  m2.push(safeJSONStringify(arguments[i]));
                }
              }
              return m2.join(" : ");
            }
            function arrayIndexOf(array, item) {
              var nativeIndexOf = Array.prototype.indexOf;
              if (array === null) {
                return -1;
              }
              if (nativeIndexOf && array.indexOf === nativeIndexOf) {
                return array.indexOf(item);
              }
              for (var i = 0, l2 = array.length; i < l2; i++) {
                if (array[i] === item) {
                  return i;
                }
              }
              return -1;
            }
            function objectApply(object, f2) {
              for (var key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                  f2(object[key], key, object);
                }
              }
            }
            function keys2(object) {
              var keys3 = [];
              objectApply(object, function(_2, key) {
                keys3.push(key);
              });
              return keys3;
            }
            function values(object) {
              var values2 = [];
              objectApply(object, function(value) {
                values2.push(value);
              });
              return values2;
            }
            function apply2(array, f2, context) {
              for (var i = 0; i < array.length; i++) {
                f2.call(context || window, array[i], i, array);
              }
            }
            function map(array, f2) {
              var result = [];
              for (var i = 0; i < array.length; i++) {
                result.push(f2(array[i], i, array, result));
              }
              return result;
            }
            function mapObject(object, f2) {
              var result = {};
              objectApply(object, function(value, key) {
                result[key] = f2(value);
              });
              return result;
            }
            function filter2(array, test2) {
              test2 = test2 || function(value) {
                return !!value;
              };
              var result = [];
              for (var i = 0; i < array.length; i++) {
                if (test2(array[i], i, array, result)) {
                  result.push(array[i]);
                }
              }
              return result;
            }
            function filterObject(object, test2) {
              var result = {};
              objectApply(object, function(value, key) {
                if (test2 && test2(value, key, object, result) || Boolean(value)) {
                  result[key] = value;
                }
              });
              return result;
            }
            function flatten(object) {
              var result = [];
              objectApply(object, function(value, key) {
                result.push([key, value]);
              });
              return result;
            }
            function any(array, test2) {
              for (var i = 0; i < array.length; i++) {
                if (test2(array[i], i, array)) {
                  return true;
                }
              }
              return false;
            }
            function collections_all(array, test2) {
              for (var i = 0; i < array.length; i++) {
                if (!test2(array[i], i, array)) {
                  return false;
                }
              }
              return true;
            }
            function encodeParamsObject(data) {
              return mapObject(data, function(value) {
                if (typeof value === "object") {
                  value = safeJSONStringify(value);
                }
                return encodeURIComponent(encode2(value.toString()));
              });
            }
            function buildQueryString(data) {
              var params = filterObject(data, function(value) {
                return value !== void 0;
              });
              var query = map(flatten(encodeParamsObject(params)), util.method("join", "=")).join("&");
              return query;
            }
            function decycleObject(object) {
              var objects = [], paths = [];
              return (function derez(value, path) {
                var i, name, nu;
                switch (typeof value) {
                  case "object":
                    if (!value) {
                      return null;
                    }
                    for (i = 0; i < objects.length; i += 1) {
                      if (objects[i] === value) {
                        return { $ref: paths[i] };
                      }
                    }
                    objects.push(value);
                    paths.push(path);
                    if (Object.prototype.toString.apply(value) === "[object Array]") {
                      nu = [];
                      for (i = 0; i < value.length; i += 1) {
                        nu[i] = derez(value[i], path + "[" + i + "]");
                      }
                    } else {
                      nu = {};
                      for (name in value) {
                        if (Object.prototype.hasOwnProperty.call(value, name)) {
                          nu[name] = derez(value[name], path + "[" + JSON.stringify(name) + "]");
                        }
                      }
                    }
                    return nu;
                  case "number":
                  case "string":
                  case "boolean":
                    return value;
                }
              })(object, "$");
            }
            function safeJSONStringify(source) {
              try {
                return JSON.stringify(source);
              } catch (e) {
                return JSON.stringify(decycleObject(source));
              }
            }
            class logger_Logger {
              constructor() {
                this.globalLog = (message) => {
                  if (window.console && window.console.log) {
                    window.console.log(message);
                  }
                };
              }
              debug(...args) {
                this.log(this.globalLog, args);
              }
              warn(...args) {
                this.log(this.globalLogWarn, args);
              }
              error(...args) {
                this.log(this.globalLogError, args);
              }
              globalLogWarn(message) {
                if (window.console && window.console.warn) {
                  window.console.warn(message);
                } else {
                  this.globalLog(message);
                }
              }
              globalLogError(message) {
                if (window.console && window.console.error) {
                  window.console.error(message);
                } else {
                  this.globalLogWarn(message);
                }
              }
              log(defaultLoggingFunction, ...args) {
                var message = stringify.apply(this, arguments);
                if (core_pusher.log) {
                  core_pusher.log(message);
                } else if (core_pusher.logToConsole) {
                  const log = defaultLoggingFunction.bind(this);
                  log(message);
                }
              }
            }
            var logger = new logger_Logger();
            var jsonp = function(context, query, authOptions, authRequestType, callback) {
              if (authOptions.headers !== void 0 || authOptions.headersProvider != null) {
                logger.warn(`To send headers with the ${authRequestType.toString()} request, you must use AJAX, rather than JSONP.`);
              }
              var callbackName = context.nextAuthCallbackID.toString();
              context.nextAuthCallbackID++;
              var document2 = context.getDocument();
              var script = document2.createElement("script");
              context.auth_callbacks[callbackName] = function(data) {
                callback(null, data);
              };
              var callback_name = "Pusher.auth_callbacks['" + callbackName + "']";
              script.src = authOptions.endpoint + "?callback=" + encodeURIComponent(callback_name) + "&" + query;
              var head = document2.getElementsByTagName("head")[0] || document2.documentElement;
              head.insertBefore(script, head.firstChild);
            };
            var jsonp_auth = jsonp;
            class ScriptRequest {
              constructor(src) {
                this.src = src;
              }
              send(receiver) {
                var self2 = this;
                var errorString = "Error loading " + self2.src;
                self2.script = document.createElement("script");
                self2.script.id = receiver.id;
                self2.script.src = self2.src;
                self2.script.type = "text/javascript";
                self2.script.charset = "UTF-8";
                if (self2.script.addEventListener) {
                  self2.script.onerror = function() {
                    receiver.callback(errorString);
                  };
                  self2.script.onload = function() {
                    receiver.callback(null);
                  };
                } else {
                  self2.script.onreadystatechange = function() {
                    if (self2.script.readyState === "loaded" || self2.script.readyState === "complete") {
                      receiver.callback(null);
                    }
                  };
                }
                if (self2.script.async === void 0 && document.attachEvent && /opera/i.test(navigator.userAgent)) {
                  self2.errorScript = document.createElement("script");
                  self2.errorScript.id = receiver.id + "_error";
                  self2.errorScript.text = receiver.name + "('" + errorString + "');";
                  self2.script.async = self2.errorScript.async = false;
                } else {
                  self2.script.async = true;
                }
                var head = document.getElementsByTagName("head")[0];
                head.insertBefore(self2.script, head.firstChild);
                if (self2.errorScript) {
                  head.insertBefore(self2.errorScript, self2.script.nextSibling);
                }
              }
              cleanup() {
                if (this.script) {
                  this.script.onload = this.script.onerror = null;
                  this.script.onreadystatechange = null;
                }
                if (this.script && this.script.parentNode) {
                  this.script.parentNode.removeChild(this.script);
                }
                if (this.errorScript && this.errorScript.parentNode) {
                  this.errorScript.parentNode.removeChild(this.errorScript);
                }
                this.script = null;
                this.errorScript = null;
              }
            }
            class jsonp_request_JSONPRequest {
              constructor(url, data) {
                this.url = url;
                this.data = data;
              }
              send(receiver) {
                if (this.request) {
                  return;
                }
                var query = buildQueryString(this.data);
                var url = this.url + "/" + receiver.number + "?" + query;
                this.request = runtime.createScriptRequest(url);
                this.request.send(receiver);
              }
              cleanup() {
                if (this.request) {
                  this.request.cleanup();
                }
              }
            }
            var getAgent = function(sender, useTLS) {
              return function(data, callback) {
                var scheme = "http" + (useTLS ? "s" : "") + "://";
                var url = scheme + (sender.host || sender.options.host) + sender.options.path;
                var request2 = runtime.createJSONPRequest(url, data);
                var receiver = runtime.ScriptReceivers.create(function(error, result) {
                  ScriptReceivers.remove(receiver);
                  request2.cleanup();
                  if (result && result.host) {
                    sender.host = result.host;
                  }
                  if (callback) {
                    callback(error, result);
                  }
                });
                request2.send(receiver);
              };
            };
            var jsonp_timeline_jsonp = {
              name: "jsonp",
              getAgent
            };
            var jsonp_timeline = jsonp_timeline_jsonp;
            function getGenericURL(baseScheme, params, path) {
              var scheme = baseScheme + (params.useTLS ? "s" : "");
              var host = params.useTLS ? params.hostTLS : params.hostNonTLS;
              return scheme + "://" + host + path;
            }
            function getGenericPath(key, queryString) {
              var path = "/app/" + key;
              var query = "?protocol=" + defaults2.PROTOCOL + "&client=js&version=" + defaults2.VERSION + (queryString ? "&" + queryString : "");
              return path + query;
            }
            var ws = {
              getInitial: function(key, params) {
                var path = (params.httpPath || "") + getGenericPath(key, "flash=false");
                return getGenericURL("ws", params, path);
              }
            };
            var http = {
              getInitial: function(key, params) {
                var path = (params.httpPath || "/pusher") + getGenericPath(key);
                return getGenericURL("http", params, path);
              }
            };
            var sockjs = {
              getInitial: function(key, params) {
                return getGenericURL("http", params, params.httpPath || "/pusher");
              },
              getPath: function(key, params) {
                return getGenericPath(key);
              }
            };
            class callback_registry_CallbackRegistry {
              constructor() {
                this._callbacks = {};
              }
              get(name) {
                return this._callbacks[prefix(name)];
              }
              add(name, callback, context) {
                var prefixedEventName = prefix(name);
                this._callbacks[prefixedEventName] = this._callbacks[prefixedEventName] || [];
                this._callbacks[prefixedEventName].push({
                  fn: callback,
                  context
                });
              }
              remove(name, callback, context) {
                if (!name && !callback && !context) {
                  this._callbacks = {};
                  return;
                }
                var names = name ? [prefix(name)] : keys2(this._callbacks);
                if (callback || context) {
                  this.removeCallback(names, callback, context);
                } else {
                  this.removeAllCallbacks(names);
                }
              }
              removeCallback(names, callback, context) {
                apply2(names, function(name) {
                  this._callbacks[name] = filter2(this._callbacks[name] || [], function(binding) {
                    return callback && callback !== binding.fn || context && context !== binding.context;
                  });
                  if (this._callbacks[name].length === 0) {
                    delete this._callbacks[name];
                  }
                }, this);
              }
              removeAllCallbacks(names) {
                apply2(names, function(name) {
                  delete this._callbacks[name];
                }, this);
              }
            }
            function prefix(name) {
              return "_" + name;
            }
            class dispatcher_Dispatcher {
              constructor(failThrough) {
                this.callbacks = new callback_registry_CallbackRegistry();
                this.global_callbacks = [];
                this.failThrough = failThrough;
              }
              bind(eventName, callback, context) {
                this.callbacks.add(eventName, callback, context);
                return this;
              }
              bind_global(callback) {
                this.global_callbacks.push(callback);
                return this;
              }
              unbind(eventName, callback, context) {
                this.callbacks.remove(eventName, callback, context);
                return this;
              }
              unbind_global(callback) {
                if (!callback) {
                  this.global_callbacks = [];
                  return this;
                }
                this.global_callbacks = filter2(this.global_callbacks || [], (c2) => c2 !== callback);
                return this;
              }
              unbind_all() {
                this.unbind();
                this.unbind_global();
                return this;
              }
              emit(eventName, data, metadata) {
                for (var i = 0; i < this.global_callbacks.length; i++) {
                  this.global_callbacks[i](eventName, data);
                }
                var callbacks = this.callbacks.get(eventName);
                var args = [];
                if (metadata) {
                  args.push(data, metadata);
                } else if (data) {
                  args.push(data);
                }
                if (callbacks && callbacks.length > 0) {
                  for (var i = 0; i < callbacks.length; i++) {
                    callbacks[i].fn.apply(callbacks[i].context || window, args);
                  }
                } else if (this.failThrough) {
                  this.failThrough(eventName, data);
                }
                return this;
              }
            }
            class transport_connection_TransportConnection extends dispatcher_Dispatcher {
              constructor(hooks, name, priority, key, options) {
                super();
                this.initialize = runtime.transportConnectionInitializer;
                this.hooks = hooks;
                this.name = name;
                this.priority = priority;
                this.key = key;
                this.options = options;
                this.state = "new";
                this.timeline = options.timeline;
                this.activityTimeout = options.activityTimeout;
                this.id = this.timeline.generateUniqueID();
              }
              handlesActivityChecks() {
                return Boolean(this.hooks.handlesActivityChecks);
              }
              supportsPing() {
                return Boolean(this.hooks.supportsPing);
              }
              connect() {
                if (this.socket || this.state !== "initialized") {
                  return false;
                }
                var url = this.hooks.urls.getInitial(this.key, this.options);
                try {
                  this.socket = this.hooks.getSocket(url, this.options);
                } catch (e) {
                  util.defer(() => {
                    this.onError(e);
                    this.changeState("closed");
                  });
                  return false;
                }
                this.bindListeners();
                logger.debug("Connecting", { transport: this.name, url });
                this.changeState("connecting");
                return true;
              }
              close() {
                if (this.socket) {
                  this.socket.close();
                  return true;
                } else {
                  return false;
                }
              }
              send(data) {
                if (this.state === "open") {
                  util.defer(() => {
                    if (this.socket) {
                      this.socket.send(data);
                    }
                  });
                  return true;
                } else {
                  return false;
                }
              }
              ping() {
                if (this.state === "open" && this.supportsPing()) {
                  this.socket.ping();
                }
              }
              onOpen() {
                if (this.hooks.beforeOpen) {
                  this.hooks.beforeOpen(this.socket, this.hooks.urls.getPath(this.key, this.options));
                }
                this.changeState("open");
                this.socket.onopen = void 0;
              }
              onError(error) {
                this.emit("error", { type: "WebSocketError", error });
                this.timeline.error(this.buildTimelineMessage({ error: error.toString() }));
              }
              onClose(closeEvent) {
                if (closeEvent) {
                  this.changeState("closed", {
                    code: closeEvent.code,
                    reason: closeEvent.reason,
                    wasClean: closeEvent.wasClean
                  });
                } else {
                  this.changeState("closed");
                }
                this.unbindListeners();
                this.socket = void 0;
              }
              onMessage(message) {
                this.emit("message", message);
              }
              onActivity() {
                this.emit("activity");
              }
              bindListeners() {
                this.socket.onopen = () => {
                  this.onOpen();
                };
                this.socket.onerror = (error) => {
                  this.onError(error);
                };
                this.socket.onclose = (closeEvent) => {
                  this.onClose(closeEvent);
                };
                this.socket.onmessage = (message) => {
                  this.onMessage(message);
                };
                if (this.supportsPing()) {
                  this.socket.onactivity = () => {
                    this.onActivity();
                  };
                }
              }
              unbindListeners() {
                if (this.socket) {
                  this.socket.onopen = void 0;
                  this.socket.onerror = void 0;
                  this.socket.onclose = void 0;
                  this.socket.onmessage = void 0;
                  if (this.supportsPing()) {
                    this.socket.onactivity = void 0;
                  }
                }
              }
              changeState(state2, params) {
                this.state = state2;
                this.timeline.info(this.buildTimelineMessage({
                  state: state2,
                  params
                }));
                this.emit(state2, params);
              }
              buildTimelineMessage(message) {
                return extend2({ cid: this.id }, message);
              }
            }
            class transport_Transport {
              constructor(hooks) {
                this.hooks = hooks;
              }
              isSupported(environment) {
                return this.hooks.isSupported(environment);
              }
              createConnection(name, priority, key, options) {
                return new transport_connection_TransportConnection(this.hooks, name, priority, key, options);
              }
            }
            var WSTransport = new transport_Transport({
              urls: ws,
              handlesActivityChecks: false,
              supportsPing: false,
              isInitialized: function() {
                return Boolean(runtime.getWebSocketAPI());
              },
              isSupported: function() {
                return Boolean(runtime.getWebSocketAPI());
              },
              getSocket: function(url) {
                return runtime.createWebSocket(url);
              }
            });
            var httpConfiguration = {
              urls: http,
              handlesActivityChecks: false,
              supportsPing: true,
              isInitialized: function() {
                return true;
              }
            };
            var streamingConfiguration = extend2({
              getSocket: function(url) {
                return runtime.HTTPFactory.createStreamingSocket(url);
              }
            }, httpConfiguration);
            var pollingConfiguration = extend2({
              getSocket: function(url) {
                return runtime.HTTPFactory.createPollingSocket(url);
              }
            }, httpConfiguration);
            var xhrConfiguration = {
              isSupported: function() {
                return runtime.isXHRSupported();
              }
            };
            var XHRStreamingTransport = new transport_Transport(extend2({}, streamingConfiguration, xhrConfiguration));
            var XHRPollingTransport = new transport_Transport(extend2({}, pollingConfiguration, xhrConfiguration));
            var Transports = {
              ws: WSTransport,
              xhr_streaming: XHRStreamingTransport,
              xhr_polling: XHRPollingTransport
            };
            var transports = Transports;
            var SockJSTransport = new transport_Transport({
              file: "sockjs",
              urls: sockjs,
              handlesActivityChecks: true,
              supportsPing: false,
              isSupported: function() {
                return true;
              },
              isInitialized: function() {
                return window.SockJS !== void 0;
              },
              getSocket: function(url, options) {
                return new window.SockJS(url, null, {
                  js_path: Dependencies.getPath("sockjs", {
                    useTLS: options.useTLS
                  }),
                  ignore_null_origin: options.ignoreNullOrigin
                });
              },
              beforeOpen: function(socket, path) {
                socket.send(JSON.stringify({
                  path
                }));
              }
            });
            var xdrConfiguration = {
              isSupported: function(environment) {
                var yes = runtime.isXDRSupported(environment.useTLS);
                return yes;
              }
            };
            var XDRStreamingTransport = new transport_Transport(extend2({}, streamingConfiguration, xdrConfiguration));
            var XDRPollingTransport = new transport_Transport(extend2({}, pollingConfiguration, xdrConfiguration));
            transports.xdr_streaming = XDRStreamingTransport;
            transports.xdr_polling = XDRPollingTransport;
            transports.sockjs = SockJSTransport;
            var transports_transports = transports;
            class net_info_NetInfo extends dispatcher_Dispatcher {
              constructor() {
                super();
                var self2 = this;
                if (window.addEventListener !== void 0) {
                  window.addEventListener("online", function() {
                    self2.emit("online");
                  }, false);
                  window.addEventListener("offline", function() {
                    self2.emit("offline");
                  }, false);
                }
              }
              isOnline() {
                if (window.navigator.onLine === void 0) {
                  return true;
                } else {
                  return window.navigator.onLine;
                }
              }
            }
            var net_info_Network = new net_info_NetInfo();
            class assistant_to_the_transport_manager_AssistantToTheTransportManager {
              constructor(manager, transport, options) {
                this.manager = manager;
                this.transport = transport;
                this.minPingDelay = options.minPingDelay;
                this.maxPingDelay = options.maxPingDelay;
                this.pingDelay = void 0;
              }
              createConnection(name, priority, key, options) {
                options = extend2({}, options, {
                  activityTimeout: this.pingDelay
                });
                var connection = this.transport.createConnection(name, priority, key, options);
                var openTimestamp = null;
                var onOpen = function() {
                  connection.unbind("open", onOpen);
                  connection.bind("closed", onClosed);
                  openTimestamp = util.now();
                };
                var onClosed = (closeEvent) => {
                  connection.unbind("closed", onClosed);
                  if (closeEvent.code === 1002 || closeEvent.code === 1003) {
                    this.manager.reportDeath();
                  } else if (!closeEvent.wasClean && openTimestamp) {
                    var lifespan = util.now() - openTimestamp;
                    if (lifespan < 2 * this.maxPingDelay) {
                      this.manager.reportDeath();
                      this.pingDelay = Math.max(lifespan / 2, this.minPingDelay);
                    }
                  }
                };
                connection.bind("open", onOpen);
                return connection;
              }
              isSupported(environment) {
                return this.manager.isAlive() && this.transport.isSupported(environment);
              }
            }
            const Protocol = {
              decodeMessage: function(messageEvent) {
                try {
                  var messageData = JSON.parse(messageEvent.data);
                  var pusherEventData = messageData.data;
                  if (typeof pusherEventData === "string") {
                    try {
                      pusherEventData = JSON.parse(messageData.data);
                    } catch (e) {
                    }
                  }
                  var pusherEvent = {
                    event: messageData.event,
                    channel: messageData.channel,
                    data: pusherEventData
                  };
                  if (messageData.user_id) {
                    pusherEvent.user_id = messageData.user_id;
                  }
                  return pusherEvent;
                } catch (e) {
                  throw { type: "MessageParseError", error: e, data: messageEvent.data };
                }
              },
              encodeMessage: function(event) {
                return JSON.stringify(event);
              },
              processHandshake: function(messageEvent) {
                var message = Protocol.decodeMessage(messageEvent);
                if (message.event === "pusher:connection_established") {
                  if (!message.data.activity_timeout) {
                    throw "No activity timeout specified in handshake";
                  }
                  return {
                    action: "connected",
                    id: message.data.socket_id,
                    activityTimeout: message.data.activity_timeout * 1e3
                  };
                } else if (message.event === "pusher:error") {
                  return {
                    action: this.getCloseAction(message.data),
                    error: this.getCloseError(message.data)
                  };
                } else {
                  throw "Invalid handshake";
                }
              },
              getCloseAction: function(closeEvent) {
                if (closeEvent.code < 4e3) {
                  if (closeEvent.code >= 1002 && closeEvent.code <= 1004) {
                    return "backoff";
                  } else {
                    return null;
                  }
                } else if (closeEvent.code === 4e3) {
                  return "tls_only";
                } else if (closeEvent.code < 4100) {
                  return "refused";
                } else if (closeEvent.code < 4200) {
                  return "backoff";
                } else if (closeEvent.code < 4300) {
                  return "retry";
                } else {
                  return "refused";
                }
              },
              getCloseError: function(closeEvent) {
                if (closeEvent.code !== 1e3 && closeEvent.code !== 1001) {
                  return {
                    type: "PusherError",
                    data: {
                      code: closeEvent.code,
                      message: closeEvent.reason || closeEvent.message
                    }
                  };
                } else {
                  return null;
                }
              }
            };
            var protocol_protocol = Protocol;
            class connection_Connection extends dispatcher_Dispatcher {
              constructor(id, transport) {
                super();
                this.id = id;
                this.transport = transport;
                this.activityTimeout = transport.activityTimeout;
                this.bindListeners();
              }
              handlesActivityChecks() {
                return this.transport.handlesActivityChecks();
              }
              send(data) {
                return this.transport.send(data);
              }
              send_event(name, data, channel) {
                var event = { event: name, data };
                if (channel) {
                  event.channel = channel;
                }
                logger.debug("Event sent", event);
                return this.send(protocol_protocol.encodeMessage(event));
              }
              ping() {
                if (this.transport.supportsPing()) {
                  this.transport.ping();
                } else {
                  this.send_event("pusher:ping", {});
                }
              }
              close() {
                this.transport.close();
              }
              bindListeners() {
                var listeners = {
                  message: (messageEvent) => {
                    var pusherEvent;
                    try {
                      pusherEvent = protocol_protocol.decodeMessage(messageEvent);
                    } catch (e) {
                      this.emit("error", {
                        type: "MessageParseError",
                        error: e,
                        data: messageEvent.data
                      });
                    }
                    if (pusherEvent !== void 0) {
                      logger.debug("Event recd", pusherEvent);
                      switch (pusherEvent.event) {
                        case "pusher:error":
                          this.emit("error", {
                            type: "PusherError",
                            data: pusherEvent.data
                          });
                          break;
                        case "pusher:ping":
                          this.emit("ping");
                          break;
                        case "pusher:pong":
                          this.emit("pong");
                          break;
                      }
                      this.emit("message", pusherEvent);
                    }
                  },
                  activity: () => {
                    this.emit("activity");
                  },
                  error: (error) => {
                    this.emit("error", error);
                  },
                  closed: (closeEvent) => {
                    unbindListeners();
                    if (closeEvent && closeEvent.code) {
                      this.handleCloseEvent(closeEvent);
                    }
                    this.transport = null;
                    this.emit("closed");
                  }
                };
                var unbindListeners = () => {
                  objectApply(listeners, (listener, event) => {
                    this.transport.unbind(event, listener);
                  });
                };
                objectApply(listeners, (listener, event) => {
                  this.transport.bind(event, listener);
                });
              }
              handleCloseEvent(closeEvent) {
                var action = protocol_protocol.getCloseAction(closeEvent);
                var error = protocol_protocol.getCloseError(closeEvent);
                if (error) {
                  this.emit("error", error);
                }
                if (action) {
                  this.emit(action, { action, error });
                }
              }
            }
            class handshake_Handshake {
              constructor(transport, callback) {
                this.transport = transport;
                this.callback = callback;
                this.bindListeners();
              }
              close() {
                this.unbindListeners();
                this.transport.close();
              }
              bindListeners() {
                this.onMessage = (m2) => {
                  this.unbindListeners();
                  var result;
                  try {
                    result = protocol_protocol.processHandshake(m2);
                  } catch (e) {
                    this.finish("error", { error: e });
                    this.transport.close();
                    return;
                  }
                  if (result.action === "connected") {
                    this.finish("connected", {
                      connection: new connection_Connection(result.id, this.transport),
                      activityTimeout: result.activityTimeout
                    });
                  } else {
                    this.finish(result.action, { error: result.error });
                    this.transport.close();
                  }
                };
                this.onClosed = (closeEvent) => {
                  this.unbindListeners();
                  var action = protocol_protocol.getCloseAction(closeEvent) || "backoff";
                  var error = protocol_protocol.getCloseError(closeEvent);
                  this.finish(action, { error });
                };
                this.transport.bind("message", this.onMessage);
                this.transport.bind("closed", this.onClosed);
              }
              unbindListeners() {
                this.transport.unbind("message", this.onMessage);
                this.transport.unbind("closed", this.onClosed);
              }
              finish(action, params) {
                this.callback(extend2({ transport: this.transport, action }, params));
              }
            }
            class timeline_sender_TimelineSender {
              constructor(timeline, options) {
                this.timeline = timeline;
                this.options = options || {};
              }
              send(useTLS, callback) {
                if (this.timeline.isEmpty()) {
                  return;
                }
                this.timeline.send(runtime.TimelineTransport.getAgent(this, useTLS), callback);
              }
            }
            class channel_Channel extends dispatcher_Dispatcher {
              constructor(name, pusher2) {
                super(function(event, data) {
                  logger.debug("No callbacks on " + name + " for " + event);
                });
                this.name = name;
                this.pusher = pusher2;
                this.subscribed = false;
                this.subscriptionPending = false;
                this.subscriptionCancelled = false;
              }
              authorize(socketId, callback) {
                return callback(null, { auth: "" });
              }
              trigger(event, data) {
                if (event.indexOf("client-") !== 0) {
                  throw new BadEventName("Event '" + event + "' does not start with 'client-'");
                }
                if (!this.subscribed) {
                  var suffix = url_store.buildLogSuffix("triggeringClientEvents");
                  logger.warn(`Client event triggered before channel 'subscription_succeeded' event . ${suffix}`);
                }
                return this.pusher.send_event(event, data, this.name);
              }
              disconnect() {
                this.subscribed = false;
                this.subscriptionPending = false;
              }
              handleEvent(event) {
                var eventName = event.event;
                var data = event.data;
                if (eventName === "pusher_internal:subscription_succeeded") {
                  this.handleSubscriptionSucceededEvent(event);
                } else if (eventName === "pusher_internal:subscription_count") {
                  this.handleSubscriptionCountEvent(event);
                } else if (eventName.indexOf("pusher_internal:") !== 0) {
                  var metadata = {};
                  this.emit(eventName, data, metadata);
                }
              }
              handleSubscriptionSucceededEvent(event) {
                this.subscriptionPending = false;
                this.subscribed = true;
                if (this.subscriptionCancelled) {
                  this.pusher.unsubscribe(this.name);
                } else {
                  this.emit("pusher:subscription_succeeded", event.data);
                }
              }
              handleSubscriptionCountEvent(event) {
                if (event.data.subscription_count) {
                  this.subscriptionCount = event.data.subscription_count;
                }
                this.emit("pusher:subscription_count", event.data);
              }
              subscribe() {
                if (this.subscribed) {
                  return;
                }
                this.subscriptionPending = true;
                this.subscriptionCancelled = false;
                this.authorize(this.pusher.connection.socket_id, (error, data) => {
                  if (error) {
                    this.subscriptionPending = false;
                    logger.error(error.toString());
                    this.emit("pusher:subscription_error", Object.assign({}, {
                      type: "AuthError",
                      error: error.message
                    }, error instanceof HTTPAuthError ? { status: error.status } : {}));
                  } else {
                    this.pusher.send_event("pusher:subscribe", {
                      auth: data.auth,
                      channel_data: data.channel_data,
                      channel: this.name
                    });
                  }
                });
              }
              unsubscribe() {
                this.subscribed = false;
                this.pusher.send_event("pusher:unsubscribe", {
                  channel: this.name
                });
              }
              cancelSubscription() {
                this.subscriptionCancelled = true;
              }
              reinstateSubscription() {
                this.subscriptionCancelled = false;
              }
            }
            class private_channel_PrivateChannel extends channel_Channel {
              authorize(socketId, callback) {
                return this.pusher.config.channelAuthorizer({
                  channelName: this.name,
                  socketId
                }, callback);
              }
            }
            class members_Members {
              constructor() {
                this.reset();
              }
              get(id) {
                if (Object.prototype.hasOwnProperty.call(this.members, id)) {
                  return {
                    id,
                    info: this.members[id]
                  };
                } else {
                  return null;
                }
              }
              each(callback) {
                objectApply(this.members, (member, id) => {
                  callback(this.get(id));
                });
              }
              setMyID(id) {
                this.myID = id;
              }
              onSubscription(subscriptionData) {
                this.members = subscriptionData.presence.hash;
                this.count = subscriptionData.presence.count;
                this.me = this.get(this.myID);
              }
              addMember(memberData) {
                if (this.get(memberData.user_id) === null) {
                  this.count++;
                }
                this.members[memberData.user_id] = memberData.user_info;
                return this.get(memberData.user_id);
              }
              removeMember(memberData) {
                var member = this.get(memberData.user_id);
                if (member) {
                  delete this.members[memberData.user_id];
                  this.count--;
                }
                return member;
              }
              reset() {
                this.members = {};
                this.count = 0;
                this.myID = null;
                this.me = null;
              }
            }
            var __awaiter = function(thisArg, _arguments, P, generator) {
              function adopt(value) {
                return value instanceof P ? value : new P(function(resolve) {
                  resolve(value);
                });
              }
              return new (P || (P = Promise))(function(resolve, reject) {
                function fulfilled(value) {
                  try {
                    step(generator.next(value));
                  } catch (e) {
                    reject(e);
                  }
                }
                function rejected(value) {
                  try {
                    step(generator["throw"](value));
                  } catch (e) {
                    reject(e);
                  }
                }
                function step(result) {
                  result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments || [])).next());
              });
            };
            class presence_channel_PresenceChannel extends private_channel_PrivateChannel {
              constructor(name, pusher2) {
                super(name, pusher2);
                this.members = new members_Members();
              }
              authorize(socketId, callback) {
                super.authorize(socketId, (error, authData) => __awaiter(this, void 0, void 0, function* () {
                  if (!error) {
                    authData = authData;
                    if (authData.channel_data != null) {
                      var channelData = JSON.parse(authData.channel_data);
                      this.members.setMyID(channelData.user_id);
                    } else {
                      yield this.pusher.user.signinDonePromise;
                      if (this.pusher.user.user_data != null) {
                        this.members.setMyID(this.pusher.user.user_data.id);
                      } else {
                        let suffix = url_store.buildLogSuffix("authorizationEndpoint");
                        logger.error(`Invalid auth response for channel '${this.name}', expected 'channel_data' field. ${suffix}, or the user should be signed in.`);
                        callback("Invalid auth response");
                        return;
                      }
                    }
                  }
                  callback(error, authData);
                }));
              }
              handleEvent(event) {
                var eventName = event.event;
                if (eventName.indexOf("pusher_internal:") === 0) {
                  this.handleInternalEvent(event);
                } else {
                  var data = event.data;
                  var metadata = {};
                  if (event.user_id) {
                    metadata.user_id = event.user_id;
                  }
                  this.emit(eventName, data, metadata);
                }
              }
              handleInternalEvent(event) {
                var eventName = event.event;
                var data = event.data;
                switch (eventName) {
                  case "pusher_internal:subscription_succeeded":
                    this.handleSubscriptionSucceededEvent(event);
                    break;
                  case "pusher_internal:subscription_count":
                    this.handleSubscriptionCountEvent(event);
                    break;
                  case "pusher_internal:member_added":
                    var addedMember = this.members.addMember(data);
                    this.emit("pusher:member_added", addedMember);
                    break;
                  case "pusher_internal:member_removed":
                    var removedMember = this.members.removeMember(data);
                    if (removedMember) {
                      this.emit("pusher:member_removed", removedMember);
                    }
                    break;
                }
              }
              handleSubscriptionSucceededEvent(event) {
                this.subscriptionPending = false;
                this.subscribed = true;
                if (this.subscriptionCancelled) {
                  this.pusher.unsubscribe(this.name);
                } else {
                  this.members.onSubscription(event.data);
                  this.emit("pusher:subscription_succeeded", this.members);
                }
              }
              disconnect() {
                this.members.reset();
                super.disconnect();
              }
            }
            var utf8 = __webpack_require__(1);
            var base64 = __webpack_require__(0);
            class encrypted_channel_EncryptedChannel extends private_channel_PrivateChannel {
              constructor(name, pusher2, nacl) {
                super(name, pusher2);
                this.key = null;
                this.nacl = nacl;
              }
              authorize(socketId, callback) {
                super.authorize(socketId, (error, authData) => {
                  if (error) {
                    callback(error, authData);
                    return;
                  }
                  let sharedSecret = authData["shared_secret"];
                  if (!sharedSecret) {
                    callback(new Error(`No shared_secret key in auth payload for encrypted channel: ${this.name}`), null);
                    return;
                  }
                  this.key = Object(base64["decode"])(sharedSecret);
                  delete authData["shared_secret"];
                  callback(null, authData);
                });
              }
              trigger(event, data) {
                throw new UnsupportedFeature("Client events are not currently supported for encrypted channels");
              }
              handleEvent(event) {
                var eventName = event.event;
                var data = event.data;
                if (eventName.indexOf("pusher_internal:") === 0 || eventName.indexOf("pusher:") === 0) {
                  super.handleEvent(event);
                  return;
                }
                this.handleEncryptedEvent(eventName, data);
              }
              handleEncryptedEvent(event, data) {
                if (!this.key) {
                  logger.debug("Received encrypted event before key has been retrieved from the authEndpoint");
                  return;
                }
                if (!data.ciphertext || !data.nonce) {
                  logger.error("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: " + data);
                  return;
                }
                let cipherText = Object(base64["decode"])(data.ciphertext);
                if (cipherText.length < this.nacl.secretbox.overheadLength) {
                  logger.error(`Expected encrypted event ciphertext length to be ${this.nacl.secretbox.overheadLength}, got: ${cipherText.length}`);
                  return;
                }
                let nonce = Object(base64["decode"])(data.nonce);
                if (nonce.length < this.nacl.secretbox.nonceLength) {
                  logger.error(`Expected encrypted event nonce length to be ${this.nacl.secretbox.nonceLength}, got: ${nonce.length}`);
                  return;
                }
                let bytes = this.nacl.secretbox.open(cipherText, nonce, this.key);
                if (bytes === null) {
                  logger.debug("Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint...");
                  this.authorize(this.pusher.connection.socket_id, (error, authData) => {
                    if (error) {
                      logger.error(`Failed to make a request to the authEndpoint: ${authData}. Unable to fetch new key, so dropping encrypted event`);
                      return;
                    }
                    bytes = this.nacl.secretbox.open(cipherText, nonce, this.key);
                    if (bytes === null) {
                      logger.error(`Failed to decrypt event with new key. Dropping encrypted event`);
                      return;
                    }
                    this.emit(event, this.getDataToEmit(bytes));
                    return;
                  });
                  return;
                }
                this.emit(event, this.getDataToEmit(bytes));
              }
              getDataToEmit(bytes) {
                let raw = Object(utf8["decode"])(bytes);
                try {
                  return JSON.parse(raw);
                } catch (_a) {
                  return raw;
                }
              }
            }
            class connection_manager_ConnectionManager extends dispatcher_Dispatcher {
              constructor(key, options) {
                super();
                this.state = "initialized";
                this.connection = null;
                this.key = key;
                this.options = options;
                this.timeline = this.options.timeline;
                this.usingTLS = this.options.useTLS;
                this.errorCallbacks = this.buildErrorCallbacks();
                this.connectionCallbacks = this.buildConnectionCallbacks(this.errorCallbacks);
                this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
                var Network = runtime.getNetwork();
                Network.bind("online", () => {
                  this.timeline.info({ netinfo: "online" });
                  if (this.state === "connecting" || this.state === "unavailable") {
                    this.retryIn(0);
                  }
                });
                Network.bind("offline", () => {
                  this.timeline.info({ netinfo: "offline" });
                  if (this.connection) {
                    this.sendActivityCheck();
                  }
                });
                this.updateStrategy();
              }
              connect() {
                if (this.connection || this.runner) {
                  return;
                }
                if (!this.strategy.isSupported()) {
                  this.updateState("failed");
                  return;
                }
                this.updateState("connecting");
                this.startConnecting();
                this.setUnavailableTimer();
              }
              send(data) {
                if (this.connection) {
                  return this.connection.send(data);
                } else {
                  return false;
                }
              }
              send_event(name, data, channel) {
                if (this.connection) {
                  return this.connection.send_event(name, data, channel);
                } else {
                  return false;
                }
              }
              disconnect() {
                this.disconnectInternally();
                this.updateState("disconnected");
              }
              isUsingTLS() {
                return this.usingTLS;
              }
              startConnecting() {
                var callback = (error, handshake) => {
                  if (error) {
                    this.runner = this.strategy.connect(0, callback);
                  } else {
                    if (handshake.action === "error") {
                      this.emit("error", {
                        type: "HandshakeError",
                        error: handshake.error
                      });
                      this.timeline.error({ handshakeError: handshake.error });
                    } else {
                      this.abortConnecting();
                      this.handshakeCallbacks[handshake.action](handshake);
                    }
                  }
                };
                this.runner = this.strategy.connect(0, callback);
              }
              abortConnecting() {
                if (this.runner) {
                  this.runner.abort();
                  this.runner = null;
                }
              }
              disconnectInternally() {
                this.abortConnecting();
                this.clearRetryTimer();
                this.clearUnavailableTimer();
                if (this.connection) {
                  var connection = this.abandonConnection();
                  connection.close();
                }
              }
              updateStrategy() {
                this.strategy = this.options.getStrategy({
                  key: this.key,
                  timeline: this.timeline,
                  useTLS: this.usingTLS
                });
              }
              retryIn(delay) {
                this.timeline.info({ action: "retry", delay });
                if (delay > 0) {
                  this.emit("connecting_in", Math.round(delay / 1e3));
                }
                this.retryTimer = new timers_OneOffTimer(delay || 0, () => {
                  this.disconnectInternally();
                  this.connect();
                });
              }
              clearRetryTimer() {
                if (this.retryTimer) {
                  this.retryTimer.ensureAborted();
                  this.retryTimer = null;
                }
              }
              setUnavailableTimer() {
                this.unavailableTimer = new timers_OneOffTimer(this.options.unavailableTimeout, () => {
                  this.updateState("unavailable");
                });
              }
              clearUnavailableTimer() {
                if (this.unavailableTimer) {
                  this.unavailableTimer.ensureAborted();
                }
              }
              sendActivityCheck() {
                this.stopActivityCheck();
                this.connection.ping();
                this.activityTimer = new timers_OneOffTimer(this.options.pongTimeout, () => {
                  this.timeline.error({ pong_timed_out: this.options.pongTimeout });
                  this.retryIn(0);
                });
              }
              resetActivityCheck() {
                this.stopActivityCheck();
                if (this.connection && !this.connection.handlesActivityChecks()) {
                  this.activityTimer = new timers_OneOffTimer(this.activityTimeout, () => {
                    this.sendActivityCheck();
                  });
                }
              }
              stopActivityCheck() {
                if (this.activityTimer) {
                  this.activityTimer.ensureAborted();
                }
              }
              buildConnectionCallbacks(errorCallbacks) {
                return extend2({}, errorCallbacks, {
                  message: (message) => {
                    this.resetActivityCheck();
                    this.emit("message", message);
                  },
                  ping: () => {
                    this.send_event("pusher:pong", {});
                  },
                  activity: () => {
                    this.resetActivityCheck();
                  },
                  error: (error) => {
                    this.emit("error", error);
                  },
                  closed: () => {
                    this.abandonConnection();
                    if (this.shouldRetry()) {
                      this.retryIn(1e3);
                    }
                  }
                });
              }
              buildHandshakeCallbacks(errorCallbacks) {
                return extend2({}, errorCallbacks, {
                  connected: (handshake) => {
                    this.activityTimeout = Math.min(this.options.activityTimeout, handshake.activityTimeout, handshake.connection.activityTimeout || Infinity);
                    this.clearUnavailableTimer();
                    this.setConnection(handshake.connection);
                    this.socket_id = this.connection.id;
                    this.updateState("connected", { socket_id: this.socket_id });
                  }
                });
              }
              buildErrorCallbacks() {
                let withErrorEmitted = (callback) => {
                  return (result) => {
                    if (result.error) {
                      this.emit("error", { type: "WebSocketError", error: result.error });
                    }
                    callback(result);
                  };
                };
                return {
                  tls_only: withErrorEmitted(() => {
                    this.usingTLS = true;
                    this.updateStrategy();
                    this.retryIn(0);
                  }),
                  refused: withErrorEmitted(() => {
                    this.disconnect();
                  }),
                  backoff: withErrorEmitted(() => {
                    this.retryIn(1e3);
                  }),
                  retry: withErrorEmitted(() => {
                    this.retryIn(0);
                  })
                };
              }
              setConnection(connection) {
                this.connection = connection;
                for (var event in this.connectionCallbacks) {
                  this.connection.bind(event, this.connectionCallbacks[event]);
                }
                this.resetActivityCheck();
              }
              abandonConnection() {
                if (!this.connection) {
                  return;
                }
                this.stopActivityCheck();
                for (var event in this.connectionCallbacks) {
                  this.connection.unbind(event, this.connectionCallbacks[event]);
                }
                var connection = this.connection;
                this.connection = null;
                return connection;
              }
              updateState(newState, data) {
                var previousState = this.state;
                this.state = newState;
                if (previousState !== newState) {
                  var newStateDescription = newState;
                  if (newStateDescription === "connected") {
                    newStateDescription += " with new socket ID " + data.socket_id;
                  }
                  logger.debug("State changed", previousState + " -> " + newStateDescription);
                  this.timeline.info({ state: newState, params: data });
                  this.emit("state_change", { previous: previousState, current: newState });
                  this.emit(newState, data);
                }
              }
              shouldRetry() {
                return this.state === "connecting" || this.state === "connected";
              }
            }
            class channels_Channels {
              constructor() {
                this.channels = {};
              }
              add(name, pusher2) {
                if (!this.channels[name]) {
                  this.channels[name] = createChannel(name, pusher2);
                }
                return this.channels[name];
              }
              all() {
                return values(this.channels);
              }
              find(name) {
                return this.channels[name];
              }
              remove(name) {
                var channel = this.channels[name];
                delete this.channels[name];
                return channel;
              }
              disconnect() {
                objectApply(this.channels, function(channel) {
                  channel.disconnect();
                });
              }
            }
            function createChannel(name, pusher2) {
              if (name.indexOf("private-encrypted-") === 0) {
                if (pusher2.config.nacl) {
                  return factory2.createEncryptedChannel(name, pusher2, pusher2.config.nacl);
                }
                let errMsg = "Tried to subscribe to a private-encrypted- channel but no nacl implementation available";
                let suffix = url_store.buildLogSuffix("encryptedChannelSupport");
                throw new UnsupportedFeature(`${errMsg}. ${suffix}`);
              } else if (name.indexOf("private-") === 0) {
                return factory2.createPrivateChannel(name, pusher2);
              } else if (name.indexOf("presence-") === 0) {
                return factory2.createPresenceChannel(name, pusher2);
              } else if (name.indexOf("#") === 0) {
                throw new BadChannelName('Cannot create a channel with name "' + name + '".');
              } else {
                return factory2.createChannel(name, pusher2);
              }
            }
            var Factory = {
              createChannels() {
                return new channels_Channels();
              },
              createConnectionManager(key, options) {
                return new connection_manager_ConnectionManager(key, options);
              },
              createChannel(name, pusher2) {
                return new channel_Channel(name, pusher2);
              },
              createPrivateChannel(name, pusher2) {
                return new private_channel_PrivateChannel(name, pusher2);
              },
              createPresenceChannel(name, pusher2) {
                return new presence_channel_PresenceChannel(name, pusher2);
              },
              createEncryptedChannel(name, pusher2, nacl) {
                return new encrypted_channel_EncryptedChannel(name, pusher2, nacl);
              },
              createTimelineSender(timeline, options) {
                return new timeline_sender_TimelineSender(timeline, options);
              },
              createHandshake(transport, callback) {
                return new handshake_Handshake(transport, callback);
              },
              createAssistantToTheTransportManager(manager, transport, options) {
                return new assistant_to_the_transport_manager_AssistantToTheTransportManager(manager, transport, options);
              }
            };
            var factory2 = Factory;
            class transport_manager_TransportManager {
              constructor(options) {
                this.options = options || {};
                this.livesLeft = this.options.lives || Infinity;
              }
              getAssistant(transport) {
                return factory2.createAssistantToTheTransportManager(this, transport, {
                  minPingDelay: this.options.minPingDelay,
                  maxPingDelay: this.options.maxPingDelay
                });
              }
              isAlive() {
                return this.livesLeft > 0;
              }
              reportDeath() {
                this.livesLeft -= 1;
              }
            }
            class sequential_strategy_SequentialStrategy {
              constructor(strategies, options) {
                this.strategies = strategies;
                this.loop = Boolean(options.loop);
                this.failFast = Boolean(options.failFast);
                this.timeout = options.timeout;
                this.timeoutLimit = options.timeoutLimit;
              }
              isSupported() {
                return any(this.strategies, util.method("isSupported"));
              }
              connect(minPriority, callback) {
                var strategies = this.strategies;
                var current = 0;
                var timeout = this.timeout;
                var runner = null;
                var tryNextStrategy = (error, handshake) => {
                  if (handshake) {
                    callback(null, handshake);
                  } else {
                    current = current + 1;
                    if (this.loop) {
                      current = current % strategies.length;
                    }
                    if (current < strategies.length) {
                      if (timeout) {
                        timeout = timeout * 2;
                        if (this.timeoutLimit) {
                          timeout = Math.min(timeout, this.timeoutLimit);
                        }
                      }
                      runner = this.tryStrategy(strategies[current], minPriority, { timeout, failFast: this.failFast }, tryNextStrategy);
                    } else {
                      callback(true);
                    }
                  }
                };
                runner = this.tryStrategy(strategies[current], minPriority, { timeout, failFast: this.failFast }, tryNextStrategy);
                return {
                  abort: function() {
                    runner.abort();
                  },
                  forceMinPriority: function(p2) {
                    minPriority = p2;
                    if (runner) {
                      runner.forceMinPriority(p2);
                    }
                  }
                };
              }
              tryStrategy(strategy, minPriority, options, callback) {
                var timer = null;
                var runner = null;
                if (options.timeout > 0) {
                  timer = new timers_OneOffTimer(options.timeout, function() {
                    runner.abort();
                    callback(true);
                  });
                }
                runner = strategy.connect(minPriority, function(error, handshake) {
                  if (error && timer && timer.isRunning() && !options.failFast) {
                    return;
                  }
                  if (timer) {
                    timer.ensureAborted();
                  }
                  callback(error, handshake);
                });
                return {
                  abort: function() {
                    if (timer) {
                      timer.ensureAborted();
                    }
                    runner.abort();
                  },
                  forceMinPriority: function(p2) {
                    runner.forceMinPriority(p2);
                  }
                };
              }
            }
            class best_connected_ever_strategy_BestConnectedEverStrategy {
              constructor(strategies) {
                this.strategies = strategies;
              }
              isSupported() {
                return any(this.strategies, util.method("isSupported"));
              }
              connect(minPriority, callback) {
                return connect(this.strategies, minPriority, function(i, runners) {
                  return function(error, handshake) {
                    runners[i].error = error;
                    if (error) {
                      if (allRunnersFailed(runners)) {
                        callback(true);
                      }
                      return;
                    }
                    apply2(runners, function(runner) {
                      runner.forceMinPriority(handshake.transport.priority);
                    });
                    callback(null, handshake);
                  };
                });
              }
            }
            function connect(strategies, minPriority, callbackBuilder) {
              var runners = map(strategies, function(strategy, i, _2, rs) {
                return strategy.connect(minPriority, callbackBuilder(i, rs));
              });
              return {
                abort: function() {
                  apply2(runners, abortRunner);
                },
                forceMinPriority: function(p2) {
                  apply2(runners, function(runner) {
                    runner.forceMinPriority(p2);
                  });
                }
              };
            }
            function allRunnersFailed(runners) {
              return collections_all(runners, function(runner) {
                return Boolean(runner.error);
              });
            }
            function abortRunner(runner) {
              if (!runner.error && !runner.aborted) {
                runner.abort();
                runner.aborted = true;
              }
            }
            class websocket_prioritized_cached_strategy_WebSocketPrioritizedCachedStrategy {
              constructor(strategy, transports2, options) {
                this.strategy = strategy;
                this.transports = transports2;
                this.ttl = options.ttl || 1800 * 1e3;
                this.usingTLS = options.useTLS;
                this.timeline = options.timeline;
              }
              isSupported() {
                return this.strategy.isSupported();
              }
              connect(minPriority, callback) {
                var usingTLS = this.usingTLS;
                var info = fetchTransportCache(usingTLS);
                var cacheSkipCount = info && info.cacheSkipCount ? info.cacheSkipCount : 0;
                var strategies = [this.strategy];
                if (info && info.timestamp + this.ttl >= util.now()) {
                  var transport = this.transports[info.transport];
                  if (transport) {
                    if (["ws", "wss"].includes(info.transport) || cacheSkipCount > 3) {
                      this.timeline.info({
                        cached: true,
                        transport: info.transport,
                        latency: info.latency
                      });
                      strategies.push(new sequential_strategy_SequentialStrategy([transport], {
                        timeout: info.latency * 2 + 1e3,
                        failFast: true
                      }));
                    } else {
                      cacheSkipCount++;
                    }
                  }
                }
                var startTimestamp = util.now();
                var runner = strategies.pop().connect(minPriority, function cb(error, handshake) {
                  if (error) {
                    flushTransportCache(usingTLS);
                    if (strategies.length > 0) {
                      startTimestamp = util.now();
                      runner = strategies.pop().connect(minPriority, cb);
                    } else {
                      callback(error);
                    }
                  } else {
                    storeTransportCache(usingTLS, handshake.transport.name, util.now() - startTimestamp, cacheSkipCount);
                    callback(null, handshake);
                  }
                });
                return {
                  abort: function() {
                    runner.abort();
                  },
                  forceMinPriority: function(p2) {
                    minPriority = p2;
                    if (runner) {
                      runner.forceMinPriority(p2);
                    }
                  }
                };
              }
            }
            function getTransportCacheKey(usingTLS) {
              return "pusherTransport" + (usingTLS ? "TLS" : "NonTLS");
            }
            function fetchTransportCache(usingTLS) {
              var storage = runtime.getLocalStorage();
              if (storage) {
                try {
                  var serializedCache = storage[getTransportCacheKey(usingTLS)];
                  if (serializedCache) {
                    return JSON.parse(serializedCache);
                  }
                } catch (e) {
                  flushTransportCache(usingTLS);
                }
              }
              return null;
            }
            function storeTransportCache(usingTLS, transport, latency, cacheSkipCount) {
              var storage = runtime.getLocalStorage();
              if (storage) {
                try {
                  storage[getTransportCacheKey(usingTLS)] = safeJSONStringify({
                    timestamp: util.now(),
                    transport,
                    latency,
                    cacheSkipCount
                  });
                } catch (e) {
                }
              }
            }
            function flushTransportCache(usingTLS) {
              var storage = runtime.getLocalStorage();
              if (storage) {
                try {
                  delete storage[getTransportCacheKey(usingTLS)];
                } catch (e) {
                }
              }
            }
            class delayed_strategy_DelayedStrategy {
              constructor(strategy, { delay: number }) {
                this.strategy = strategy;
                this.options = { delay: number };
              }
              isSupported() {
                return this.strategy.isSupported();
              }
              connect(minPriority, callback) {
                var strategy = this.strategy;
                var runner;
                var timer = new timers_OneOffTimer(this.options.delay, function() {
                  runner = strategy.connect(minPriority, callback);
                });
                return {
                  abort: function() {
                    timer.ensureAborted();
                    if (runner) {
                      runner.abort();
                    }
                  },
                  forceMinPriority: function(p2) {
                    minPriority = p2;
                    if (runner) {
                      runner.forceMinPriority(p2);
                    }
                  }
                };
              }
            }
            class IfStrategy {
              constructor(test2, trueBranch, falseBranch) {
                this.test = test2;
                this.trueBranch = trueBranch;
                this.falseBranch = falseBranch;
              }
              isSupported() {
                var branch = this.test() ? this.trueBranch : this.falseBranch;
                return branch.isSupported();
              }
              connect(minPriority, callback) {
                var branch = this.test() ? this.trueBranch : this.falseBranch;
                return branch.connect(minPriority, callback);
              }
            }
            class FirstConnectedStrategy {
              constructor(strategy) {
                this.strategy = strategy;
              }
              isSupported() {
                return this.strategy.isSupported();
              }
              connect(minPriority, callback) {
                var runner = this.strategy.connect(minPriority, function(error, handshake) {
                  if (handshake) {
                    runner.abort();
                  }
                  callback(error, handshake);
                });
                return runner;
              }
            }
            function testSupportsStrategy(strategy) {
              return function() {
                return strategy.isSupported();
              };
            }
            var getDefaultStrategy = function(config2, baseOptions, defineTransport) {
              var definedTransports = {};
              function defineTransportStrategy(name, type2, priority, options, manager) {
                var transport = defineTransport(config2, name, type2, priority, options, manager);
                definedTransports[name] = transport;
                return transport;
              }
              var ws_options = Object.assign({}, baseOptions, {
                hostNonTLS: config2.wsHost + ":" + config2.wsPort,
                hostTLS: config2.wsHost + ":" + config2.wssPort,
                httpPath: config2.wsPath
              });
              var wss_options = Object.assign({}, ws_options, {
                useTLS: true
              });
              var sockjs_options = Object.assign({}, baseOptions, {
                hostNonTLS: config2.httpHost + ":" + config2.httpPort,
                hostTLS: config2.httpHost + ":" + config2.httpsPort,
                httpPath: config2.httpPath
              });
              var timeouts = {
                loop: true,
                timeout: 15e3,
                timeoutLimit: 6e4
              };
              var ws_manager = new transport_manager_TransportManager({
                minPingDelay: 1e4,
                maxPingDelay: config2.activityTimeout
              });
              var streaming_manager = new transport_manager_TransportManager({
                lives: 2,
                minPingDelay: 1e4,
                maxPingDelay: config2.activityTimeout
              });
              var ws_transport = defineTransportStrategy("ws", "ws", 3, ws_options, ws_manager);
              var wss_transport = defineTransportStrategy("wss", "ws", 3, wss_options, ws_manager);
              var sockjs_transport = defineTransportStrategy("sockjs", "sockjs", 1, sockjs_options);
              var xhr_streaming_transport = defineTransportStrategy("xhr_streaming", "xhr_streaming", 1, sockjs_options, streaming_manager);
              var xdr_streaming_transport = defineTransportStrategy("xdr_streaming", "xdr_streaming", 1, sockjs_options, streaming_manager);
              var xhr_polling_transport = defineTransportStrategy("xhr_polling", "xhr_polling", 1, sockjs_options);
              var xdr_polling_transport = defineTransportStrategy("xdr_polling", "xdr_polling", 1, sockjs_options);
              var ws_loop = new sequential_strategy_SequentialStrategy([ws_transport], timeouts);
              var wss_loop = new sequential_strategy_SequentialStrategy([wss_transport], timeouts);
              var sockjs_loop = new sequential_strategy_SequentialStrategy([sockjs_transport], timeouts);
              var streaming_loop = new sequential_strategy_SequentialStrategy([
                new IfStrategy(testSupportsStrategy(xhr_streaming_transport), xhr_streaming_transport, xdr_streaming_transport)
              ], timeouts);
              var polling_loop = new sequential_strategy_SequentialStrategy([
                new IfStrategy(testSupportsStrategy(xhr_polling_transport), xhr_polling_transport, xdr_polling_transport)
              ], timeouts);
              var http_loop = new sequential_strategy_SequentialStrategy([
                new IfStrategy(testSupportsStrategy(streaming_loop), new best_connected_ever_strategy_BestConnectedEverStrategy([
                  streaming_loop,
                  new delayed_strategy_DelayedStrategy(polling_loop, { delay: 4e3 })
                ]), polling_loop)
              ], timeouts);
              var http_fallback_loop = new IfStrategy(testSupportsStrategy(http_loop), http_loop, sockjs_loop);
              var wsStrategy;
              if (baseOptions.useTLS) {
                wsStrategy = new best_connected_ever_strategy_BestConnectedEverStrategy([
                  ws_loop,
                  new delayed_strategy_DelayedStrategy(http_fallback_loop, { delay: 2e3 })
                ]);
              } else {
                wsStrategy = new best_connected_ever_strategy_BestConnectedEverStrategy([
                  ws_loop,
                  new delayed_strategy_DelayedStrategy(wss_loop, { delay: 2e3 }),
                  new delayed_strategy_DelayedStrategy(http_fallback_loop, { delay: 5e3 })
                ]);
              }
              return new websocket_prioritized_cached_strategy_WebSocketPrioritizedCachedStrategy(new FirstConnectedStrategy(new IfStrategy(testSupportsStrategy(ws_transport), wsStrategy, http_fallback_loop)), definedTransports, {
                ttl: 18e5,
                timeline: baseOptions.timeline,
                useTLS: baseOptions.useTLS
              });
            };
            var default_strategy = getDefaultStrategy;
            var transport_connection_initializer = (function() {
              var self2 = this;
              self2.timeline.info(self2.buildTimelineMessage({
                transport: self2.name + (self2.options.useTLS ? "s" : "")
              }));
              if (self2.hooks.isInitialized()) {
                self2.changeState("initialized");
              } else if (self2.hooks.file) {
                self2.changeState("initializing");
                Dependencies.load(self2.hooks.file, { useTLS: self2.options.useTLS }, function(error, callback) {
                  if (self2.hooks.isInitialized()) {
                    self2.changeState("initialized");
                    callback(true);
                  } else {
                    if (error) {
                      self2.onError(error);
                    }
                    self2.onClose();
                    callback(false);
                  }
                });
              } else {
                self2.onClose();
              }
            });
            var http_xdomain_request_hooks = {
              getRequest: function(socket) {
                var xdr = new window.XDomainRequest();
                xdr.ontimeout = function() {
                  socket.emit("error", new RequestTimedOut());
                  socket.close();
                };
                xdr.onerror = function(e) {
                  socket.emit("error", e);
                  socket.close();
                };
                xdr.onprogress = function() {
                  if (xdr.responseText && xdr.responseText.length > 0) {
                    socket.onChunk(200, xdr.responseText);
                  }
                };
                xdr.onload = function() {
                  if (xdr.responseText && xdr.responseText.length > 0) {
                    socket.onChunk(200, xdr.responseText);
                  }
                  socket.emit("finished", 200);
                  socket.close();
                };
                return xdr;
              },
              abortRequest: function(xdr) {
                xdr.ontimeout = xdr.onerror = xdr.onprogress = xdr.onload = null;
                xdr.abort();
              }
            };
            var http_xdomain_request = http_xdomain_request_hooks;
            const MAX_BUFFER_LENGTH = 256 * 1024;
            class http_request_HTTPRequest extends dispatcher_Dispatcher {
              constructor(hooks, method, url) {
                super();
                this.hooks = hooks;
                this.method = method;
                this.url = url;
              }
              start(payload) {
                this.position = 0;
                this.xhr = this.hooks.getRequest(this);
                this.unloader = () => {
                  this.close();
                };
                runtime.addUnloadListener(this.unloader);
                this.xhr.open(this.method, this.url, true);
                if (this.xhr.setRequestHeader) {
                  this.xhr.setRequestHeader("Content-Type", "application/json");
                }
                this.xhr.send(payload);
              }
              close() {
                if (this.unloader) {
                  runtime.removeUnloadListener(this.unloader);
                  this.unloader = null;
                }
                if (this.xhr) {
                  this.hooks.abortRequest(this.xhr);
                  this.xhr = null;
                }
              }
              onChunk(status2, data) {
                while (true) {
                  var chunk = this.advanceBuffer(data);
                  if (chunk) {
                    this.emit("chunk", { status: status2, data: chunk });
                  } else {
                    break;
                  }
                }
                if (this.isBufferTooLong(data)) {
                  this.emit("buffer_too_long");
                }
              }
              advanceBuffer(buffer) {
                var unreadData = buffer.slice(this.position);
                var endOfLinePosition = unreadData.indexOf("\n");
                if (endOfLinePosition !== -1) {
                  this.position += endOfLinePosition + 1;
                  return unreadData.slice(0, endOfLinePosition);
                } else {
                  return null;
                }
              }
              isBufferTooLong(buffer) {
                return this.position === buffer.length && buffer.length > MAX_BUFFER_LENGTH;
              }
            }
            var State;
            (function(State2) {
              State2[State2["CONNECTING"] = 0] = "CONNECTING";
              State2[State2["OPEN"] = 1] = "OPEN";
              State2[State2["CLOSED"] = 3] = "CLOSED";
            })(State || (State = {}));
            var state = State;
            var autoIncrement = 1;
            class http_socket_HTTPSocket {
              constructor(hooks, url) {
                this.hooks = hooks;
                this.session = randomNumber(1e3) + "/" + randomString(8);
                this.location = getLocation(url);
                this.readyState = state.CONNECTING;
                this.openStream();
              }
              send(payload) {
                return this.sendRaw(JSON.stringify([payload]));
              }
              ping() {
                this.hooks.sendHeartbeat(this);
              }
              close(code, reason) {
                this.onClose(code, reason, true);
              }
              sendRaw(payload) {
                if (this.readyState === state.OPEN) {
                  try {
                    runtime.createSocketRequest("POST", getUniqueURL(getSendURL(this.location, this.session))).start(payload);
                    return true;
                  } catch (e) {
                    return false;
                  }
                } else {
                  return false;
                }
              }
              reconnect() {
                this.closeStream();
                this.openStream();
              }
              onClose(code, reason, wasClean) {
                this.closeStream();
                this.readyState = state.CLOSED;
                if (this.onclose) {
                  this.onclose({
                    code,
                    reason,
                    wasClean
                  });
                }
              }
              onChunk(chunk) {
                if (chunk.status !== 200) {
                  return;
                }
                if (this.readyState === state.OPEN) {
                  this.onActivity();
                }
                var payload;
                var type2 = chunk.data.slice(0, 1);
                switch (type2) {
                  case "o":
                    payload = JSON.parse(chunk.data.slice(1) || "{}");
                    this.onOpen(payload);
                    break;
                  case "a":
                    payload = JSON.parse(chunk.data.slice(1) || "[]");
                    for (var i = 0; i < payload.length; i++) {
                      this.onEvent(payload[i]);
                    }
                    break;
                  case "m":
                    payload = JSON.parse(chunk.data.slice(1) || "null");
                    this.onEvent(payload);
                    break;
                  case "h":
                    this.hooks.onHeartbeat(this);
                    break;
                  case "c":
                    payload = JSON.parse(chunk.data.slice(1) || "[]");
                    this.onClose(payload[0], payload[1], true);
                    break;
                }
              }
              onOpen(options) {
                if (this.readyState === state.CONNECTING) {
                  if (options && options.hostname) {
                    this.location.base = replaceHost(this.location.base, options.hostname);
                  }
                  this.readyState = state.OPEN;
                  if (this.onopen) {
                    this.onopen();
                  }
                } else {
                  this.onClose(1006, "Server lost session", true);
                }
              }
              onEvent(event) {
                if (this.readyState === state.OPEN && this.onmessage) {
                  this.onmessage({ data: event });
                }
              }
              onActivity() {
                if (this.onactivity) {
                  this.onactivity();
                }
              }
              onError(error) {
                if (this.onerror) {
                  this.onerror(error);
                }
              }
              openStream() {
                this.stream = runtime.createSocketRequest("POST", getUniqueURL(this.hooks.getReceiveURL(this.location, this.session)));
                this.stream.bind("chunk", (chunk) => {
                  this.onChunk(chunk);
                });
                this.stream.bind("finished", (status2) => {
                  this.hooks.onFinished(this, status2);
                });
                this.stream.bind("buffer_too_long", () => {
                  this.reconnect();
                });
                try {
                  this.stream.start();
                } catch (error) {
                  util.defer(() => {
                    this.onError(error);
                    this.onClose(1006, "Could not start streaming", false);
                  });
                }
              }
              closeStream() {
                if (this.stream) {
                  this.stream.unbind_all();
                  this.stream.close();
                  this.stream = null;
                }
              }
            }
            function getLocation(url) {
              var parts = /([^\?]*)\/*(\??.*)/.exec(url);
              return {
                base: parts[1],
                queryString: parts[2]
              };
            }
            function getSendURL(url, session) {
              return url.base + "/" + session + "/xhr_send";
            }
            function getUniqueURL(url) {
              var separator = url.indexOf("?") === -1 ? "?" : "&";
              return url + separator + "t=" + +/* @__PURE__ */ new Date() + "&n=" + autoIncrement++;
            }
            function replaceHost(url, hostname) {
              var urlParts = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(url);
              return urlParts[1] + hostname + urlParts[3];
            }
            function randomNumber(max2) {
              return runtime.randomInt(max2);
            }
            function randomString(length) {
              var result = [];
              for (var i = 0; i < length; i++) {
                result.push(randomNumber(32).toString(32));
              }
              return result.join("");
            }
            var http_socket = http_socket_HTTPSocket;
            var http_streaming_socket_hooks = {
              getReceiveURL: function(url, session) {
                return url.base + "/" + session + "/xhr_streaming" + url.queryString;
              },
              onHeartbeat: function(socket) {
                socket.sendRaw("[]");
              },
              sendHeartbeat: function(socket) {
                socket.sendRaw("[]");
              },
              onFinished: function(socket, status2) {
                socket.onClose(1006, "Connection interrupted (" + status2 + ")", false);
              }
            };
            var http_streaming_socket = http_streaming_socket_hooks;
            var http_polling_socket_hooks = {
              getReceiveURL: function(url, session) {
                return url.base + "/" + session + "/xhr" + url.queryString;
              },
              onHeartbeat: function() {
              },
              sendHeartbeat: function(socket) {
                socket.sendRaw("[]");
              },
              onFinished: function(socket, status2) {
                if (status2 === 200) {
                  socket.reconnect();
                } else {
                  socket.onClose(1006, "Connection interrupted (" + status2 + ")", false);
                }
              }
            };
            var http_polling_socket = http_polling_socket_hooks;
            var http_xhr_request_hooks = {
              getRequest: function(socket) {
                var Constructor = runtime.getXHRAPI();
                var xhr = new Constructor();
                xhr.onreadystatechange = xhr.onprogress = function() {
                  switch (xhr.readyState) {
                    case 3:
                      if (xhr.responseText && xhr.responseText.length > 0) {
                        socket.onChunk(xhr.status, xhr.responseText);
                      }
                      break;
                    case 4:
                      if (xhr.responseText && xhr.responseText.length > 0) {
                        socket.onChunk(xhr.status, xhr.responseText);
                      }
                      socket.emit("finished", xhr.status);
                      socket.close();
                      break;
                  }
                };
                return xhr;
              },
              abortRequest: function(xhr) {
                xhr.onreadystatechange = null;
                xhr.abort();
              }
            };
            var http_xhr_request = http_xhr_request_hooks;
            var HTTP = {
              createStreamingSocket(url) {
                return this.createSocket(http_streaming_socket, url);
              },
              createPollingSocket(url) {
                return this.createSocket(http_polling_socket, url);
              },
              createSocket(hooks, url) {
                return new http_socket(hooks, url);
              },
              createXHR(method, url) {
                return this.createRequest(http_xhr_request, method, url);
              },
              createRequest(hooks, method, url) {
                return new http_request_HTTPRequest(hooks, method, url);
              }
            };
            var http_http = HTTP;
            http_http.createXDR = function(method, url) {
              return this.createRequest(http_xdomain_request, method, url);
            };
            var web_http_http = http_http;
            var Runtime = {
              nextAuthCallbackID: 1,
              auth_callbacks: {},
              ScriptReceivers,
              DependenciesReceivers,
              getDefaultStrategy: default_strategy,
              Transports: transports_transports,
              transportConnectionInitializer: transport_connection_initializer,
              HTTPFactory: web_http_http,
              TimelineTransport: jsonp_timeline,
              getXHRAPI() {
                return window.XMLHttpRequest;
              },
              getWebSocketAPI() {
                return window.WebSocket || window.MozWebSocket;
              },
              setup(PusherClass) {
                window.Pusher = PusherClass;
                var initializeOnDocumentBody = () => {
                  this.onDocumentBody(PusherClass.ready);
                };
                if (!window.JSON) {
                  Dependencies.load("json2", {}, initializeOnDocumentBody);
                } else {
                  initializeOnDocumentBody();
                }
              },
              getDocument() {
                return document;
              },
              getProtocol() {
                return this.getDocument().location.protocol;
              },
              getAuthorizers() {
                return { ajax: xhr_auth, jsonp: jsonp_auth };
              },
              onDocumentBody(callback) {
                if (document.body) {
                  callback();
                } else {
                  setTimeout(() => {
                    this.onDocumentBody(callback);
                  }, 0);
                }
              },
              createJSONPRequest(url, data) {
                return new jsonp_request_JSONPRequest(url, data);
              },
              createScriptRequest(src) {
                return new ScriptRequest(src);
              },
              getLocalStorage() {
                try {
                  return window.localStorage;
                } catch (e) {
                  return void 0;
                }
              },
              createXHR() {
                if (this.getXHRAPI()) {
                  return this.createXMLHttpRequest();
                } else {
                  return this.createMicrosoftXHR();
                }
              },
              createXMLHttpRequest() {
                var Constructor = this.getXHRAPI();
                return new Constructor();
              },
              createMicrosoftXHR() {
                return new ActiveXObject("Microsoft.XMLHTTP");
              },
              getNetwork() {
                return net_info_Network;
              },
              createWebSocket(url) {
                var Constructor = this.getWebSocketAPI();
                return new Constructor(url);
              },
              createSocketRequest(method, url) {
                if (this.isXHRSupported()) {
                  return this.HTTPFactory.createXHR(method, url);
                } else if (this.isXDRSupported(url.indexOf("https:") === 0)) {
                  return this.HTTPFactory.createXDR(method, url);
                } else {
                  throw "Cross-origin HTTP requests are not supported";
                }
              },
              isXHRSupported() {
                var Constructor = this.getXHRAPI();
                return Boolean(Constructor) && new Constructor().withCredentials !== void 0;
              },
              isXDRSupported(useTLS) {
                var protocol = useTLS ? "https:" : "http:";
                var documentProtocol = this.getProtocol();
                return Boolean(window["XDomainRequest"]) && documentProtocol === protocol;
              },
              addUnloadListener(listener) {
                if (window.addEventListener !== void 0) {
                  window.addEventListener("unload", listener, false);
                } else if (window.attachEvent !== void 0) {
                  window.attachEvent("onunload", listener);
                }
              },
              removeUnloadListener(listener) {
                if (window.addEventListener !== void 0) {
                  window.removeEventListener("unload", listener, false);
                } else if (window.detachEvent !== void 0) {
                  window.detachEvent("onunload", listener);
                }
              },
              randomInt(max2) {
                const random = function() {
                  const crypto = window.crypto || window["msCrypto"];
                  const random2 = crypto.getRandomValues(new Uint32Array(1))[0];
                  return random2 / Math.pow(2, 32);
                };
                return Math.floor(random() * max2);
              }
            };
            var runtime = Runtime;
            var TimelineLevel;
            (function(TimelineLevel2) {
              TimelineLevel2[TimelineLevel2["ERROR"] = 3] = "ERROR";
              TimelineLevel2[TimelineLevel2["INFO"] = 6] = "INFO";
              TimelineLevel2[TimelineLevel2["DEBUG"] = 7] = "DEBUG";
            })(TimelineLevel || (TimelineLevel = {}));
            var timeline_level = TimelineLevel;
            class timeline_Timeline {
              constructor(key, session, options) {
                this.key = key;
                this.session = session;
                this.events = [];
                this.options = options || {};
                this.sent = 0;
                this.uniqueID = 0;
              }
              log(level, event) {
                if (level <= this.options.level) {
                  this.events.push(extend2({}, event, { timestamp: util.now() }));
                  if (this.options.limit && this.events.length > this.options.limit) {
                    this.events.shift();
                  }
                }
              }
              error(event) {
                this.log(timeline_level.ERROR, event);
              }
              info(event) {
                this.log(timeline_level.INFO, event);
              }
              debug(event) {
                this.log(timeline_level.DEBUG, event);
              }
              isEmpty() {
                return this.events.length === 0;
              }
              send(sendfn, callback) {
                var data = extend2({
                  session: this.session,
                  bundle: this.sent + 1,
                  key: this.key,
                  lib: "js",
                  version: this.options.version,
                  cluster: this.options.cluster,
                  features: this.options.features,
                  timeline: this.events
                }, this.options.params);
                this.events = [];
                sendfn(data, (error, result) => {
                  if (!error) {
                    this.sent++;
                  }
                  if (callback) {
                    callback(error, result);
                  }
                });
                return true;
              }
              generateUniqueID() {
                this.uniqueID++;
                return this.uniqueID;
              }
            }
            class transport_strategy_TransportStrategy {
              constructor(name, priority, transport, options) {
                this.name = name;
                this.priority = priority;
                this.transport = transport;
                this.options = options || {};
              }
              isSupported() {
                return this.transport.isSupported({
                  useTLS: this.options.useTLS
                });
              }
              connect(minPriority, callback) {
                if (!this.isSupported()) {
                  return failAttempt(new UnsupportedStrategy(), callback);
                } else if (this.priority < minPriority) {
                  return failAttempt(new TransportPriorityTooLow(), callback);
                }
                var connected = false;
                var transport = this.transport.createConnection(this.name, this.priority, this.options.key, this.options);
                var handshake = null;
                var onInitialized = function() {
                  transport.unbind("initialized", onInitialized);
                  transport.connect();
                };
                var onOpen = function() {
                  handshake = factory2.createHandshake(transport, function(result) {
                    connected = true;
                    unbindListeners();
                    callback(null, result);
                  });
                };
                var onError = function(error) {
                  unbindListeners();
                  callback(error);
                };
                var onClosed = function() {
                  unbindListeners();
                  var serializedTransport;
                  serializedTransport = safeJSONStringify(transport);
                  callback(new TransportClosed(serializedTransport));
                };
                var unbindListeners = function() {
                  transport.unbind("initialized", onInitialized);
                  transport.unbind("open", onOpen);
                  transport.unbind("error", onError);
                  transport.unbind("closed", onClosed);
                };
                transport.bind("initialized", onInitialized);
                transport.bind("open", onOpen);
                transport.bind("error", onError);
                transport.bind("closed", onClosed);
                transport.initialize();
                return {
                  abort: () => {
                    if (connected) {
                      return;
                    }
                    unbindListeners();
                    if (handshake) {
                      handshake.close();
                    } else {
                      transport.close();
                    }
                  },
                  forceMinPriority: (p2) => {
                    if (connected) {
                      return;
                    }
                    if (this.priority < p2) {
                      if (handshake) {
                        handshake.close();
                      } else {
                        transport.close();
                      }
                    }
                  }
                };
              }
            }
            function failAttempt(error, callback) {
              util.defer(function() {
                callback(error);
              });
              return {
                abort: function() {
                },
                forceMinPriority: function() {
                }
              };
            }
            const { Transports: strategy_builder_Transports } = runtime;
            var strategy_builder_defineTransport = function(config2, name, type2, priority, options, manager) {
              var transportClass = strategy_builder_Transports[type2];
              if (!transportClass) {
                throw new UnsupportedTransport(type2);
              }
              var enabled = (!config2.enabledTransports || arrayIndexOf(config2.enabledTransports, name) !== -1) && (!config2.disabledTransports || arrayIndexOf(config2.disabledTransports, name) === -1);
              var transport;
              if (enabled) {
                options = Object.assign({ ignoreNullOrigin: config2.ignoreNullOrigin }, options);
                transport = new transport_strategy_TransportStrategy(name, priority, manager ? manager.getAssistant(transportClass) : transportClass, options);
              } else {
                transport = strategy_builder_UnsupportedStrategy;
              }
              return transport;
            };
            var strategy_builder_UnsupportedStrategy = {
              isSupported: function() {
                return false;
              },
              connect: function(_2, callback) {
                var deferred = util.defer(function() {
                  callback(new UnsupportedStrategy());
                });
                return {
                  abort: function() {
                    deferred.ensureAborted();
                  },
                  forceMinPriority: function() {
                  }
                };
              }
            };
            function validateOptions(options) {
              if (options == null) {
                throw "You must pass an options object";
              }
              if (options.cluster == null) {
                throw "Options object must provide a cluster";
              }
              if ("disableStats" in options) {
                logger.warn("The disableStats option is deprecated in favor of enableStats");
              }
            }
            const composeChannelQuery = (params, authOptions) => {
              var query = "socket_id=" + encodeURIComponent(params.socketId);
              for (var key in authOptions.params) {
                query += "&" + encodeURIComponent(key) + "=" + encodeURIComponent(authOptions.params[key]);
              }
              if (authOptions.paramsProvider != null) {
                let dynamicParams = authOptions.paramsProvider();
                for (var key in dynamicParams) {
                  query += "&" + encodeURIComponent(key) + "=" + encodeURIComponent(dynamicParams[key]);
                }
              }
              return query;
            };
            const UserAuthenticator = (authOptions) => {
              if (typeof runtime.getAuthorizers()[authOptions.transport] === "undefined") {
                throw `'${authOptions.transport}' is not a recognized auth transport`;
              }
              return (params, callback) => {
                const query = composeChannelQuery(params, authOptions);
                runtime.getAuthorizers()[authOptions.transport](runtime, query, authOptions, AuthRequestType.UserAuthentication, callback);
              };
            };
            var user_authenticator = UserAuthenticator;
            const channel_authorizer_composeChannelQuery = (params, authOptions) => {
              var query = "socket_id=" + encodeURIComponent(params.socketId);
              query += "&channel_name=" + encodeURIComponent(params.channelName);
              for (var key in authOptions.params) {
                query += "&" + encodeURIComponent(key) + "=" + encodeURIComponent(authOptions.params[key]);
              }
              if (authOptions.paramsProvider != null) {
                let dynamicParams = authOptions.paramsProvider();
                for (var key in dynamicParams) {
                  query += "&" + encodeURIComponent(key) + "=" + encodeURIComponent(dynamicParams[key]);
                }
              }
              return query;
            };
            const ChannelAuthorizer = (authOptions) => {
              if (typeof runtime.getAuthorizers()[authOptions.transport] === "undefined") {
                throw `'${authOptions.transport}' is not a recognized auth transport`;
              }
              return (params, callback) => {
                const query = channel_authorizer_composeChannelQuery(params, authOptions);
                runtime.getAuthorizers()[authOptions.transport](runtime, query, authOptions, AuthRequestType.ChannelAuthorization, callback);
              };
            };
            var channel_authorizer = ChannelAuthorizer;
            const ChannelAuthorizerProxy = (pusher2, authOptions, channelAuthorizerGenerator) => {
              const deprecatedAuthorizerOptions = {
                authTransport: authOptions.transport,
                authEndpoint: authOptions.endpoint,
                auth: {
                  params: authOptions.params,
                  headers: authOptions.headers
                }
              };
              return (params, callback) => {
                const channel = pusher2.channel(params.channelName);
                const channelAuthorizer = channelAuthorizerGenerator(channel, deprecatedAuthorizerOptions);
                channelAuthorizer.authorize(params.socketId, callback);
              };
            };
            function getConfig(opts, pusher2) {
              let config2 = {
                activityTimeout: opts.activityTimeout || defaults2.activityTimeout,
                cluster: opts.cluster,
                httpPath: opts.httpPath || defaults2.httpPath,
                httpPort: opts.httpPort || defaults2.httpPort,
                httpsPort: opts.httpsPort || defaults2.httpsPort,
                pongTimeout: opts.pongTimeout || defaults2.pongTimeout,
                statsHost: opts.statsHost || defaults2.stats_host,
                unavailableTimeout: opts.unavailableTimeout || defaults2.unavailableTimeout,
                wsPath: opts.wsPath || defaults2.wsPath,
                wsPort: opts.wsPort || defaults2.wsPort,
                wssPort: opts.wssPort || defaults2.wssPort,
                enableStats: getEnableStatsConfig(opts),
                httpHost: getHttpHost(opts),
                useTLS: shouldUseTLS(opts),
                wsHost: getWebsocketHost(opts),
                userAuthenticator: buildUserAuthenticator(opts),
                channelAuthorizer: buildChannelAuthorizer(opts, pusher2)
              };
              if ("disabledTransports" in opts)
                config2.disabledTransports = opts.disabledTransports;
              if ("enabledTransports" in opts)
                config2.enabledTransports = opts.enabledTransports;
              if ("ignoreNullOrigin" in opts)
                config2.ignoreNullOrigin = opts.ignoreNullOrigin;
              if ("timelineParams" in opts)
                config2.timelineParams = opts.timelineParams;
              if ("nacl" in opts) {
                config2.nacl = opts.nacl;
              }
              return config2;
            }
            function getHttpHost(opts) {
              if (opts.httpHost) {
                return opts.httpHost;
              }
              if (opts.cluster) {
                return `sockjs-${opts.cluster}.pusher.com`;
              }
              return defaults2.httpHost;
            }
            function getWebsocketHost(opts) {
              if (opts.wsHost) {
                return opts.wsHost;
              }
              return getWebsocketHostFromCluster(opts.cluster);
            }
            function getWebsocketHostFromCluster(cluster) {
              return `ws-${cluster}.pusher.com`;
            }
            function shouldUseTLS(opts) {
              if (runtime.getProtocol() === "https:") {
                return true;
              } else if (opts.forceTLS === false) {
                return false;
              }
              return true;
            }
            function getEnableStatsConfig(opts) {
              if ("enableStats" in opts) {
                return opts.enableStats;
              }
              if ("disableStats" in opts) {
                return !opts.disableStats;
              }
              return false;
            }
            function buildUserAuthenticator(opts) {
              const userAuthentication = Object.assign(Object.assign({}, defaults2.userAuthentication), opts.userAuthentication);
              if ("customHandler" in userAuthentication && userAuthentication["customHandler"] != null) {
                return userAuthentication["customHandler"];
              }
              return user_authenticator(userAuthentication);
            }
            function buildChannelAuth(opts, pusher2) {
              let channelAuthorization;
              if ("channelAuthorization" in opts) {
                channelAuthorization = Object.assign(Object.assign({}, defaults2.channelAuthorization), opts.channelAuthorization);
              } else {
                channelAuthorization = {
                  transport: opts.authTransport || defaults2.authTransport,
                  endpoint: opts.authEndpoint || defaults2.authEndpoint
                };
                if ("auth" in opts) {
                  if ("params" in opts.auth)
                    channelAuthorization.params = opts.auth.params;
                  if ("headers" in opts.auth)
                    channelAuthorization.headers = opts.auth.headers;
                }
                if ("authorizer" in opts)
                  channelAuthorization.customHandler = ChannelAuthorizerProxy(pusher2, channelAuthorization, opts.authorizer);
              }
              return channelAuthorization;
            }
            function buildChannelAuthorizer(opts, pusher2) {
              const channelAuthorization = buildChannelAuth(opts, pusher2);
              if ("customHandler" in channelAuthorization && channelAuthorization["customHandler"] != null) {
                return channelAuthorization["customHandler"];
              }
              return channel_authorizer(channelAuthorization);
            }
            class watchlist_WatchlistFacade extends dispatcher_Dispatcher {
              constructor(pusher2) {
                super(function(eventName, data) {
                  logger.debug(`No callbacks on watchlist events for ${eventName}`);
                });
                this.pusher = pusher2;
                this.bindWatchlistInternalEvent();
              }
              handleEvent(pusherEvent) {
                pusherEvent.data.events.forEach((watchlistEvent) => {
                  this.emit(watchlistEvent.name, watchlistEvent);
                });
              }
              bindWatchlistInternalEvent() {
                this.pusher.connection.bind("message", (pusherEvent) => {
                  var eventName = pusherEvent.event;
                  if (eventName === "pusher_internal:watchlist_events") {
                    this.handleEvent(pusherEvent);
                  }
                });
              }
            }
            function flatPromise() {
              let resolve, reject;
              const promise = new Promise((res, rej) => {
                resolve = res;
                reject = rej;
              });
              return { promise, resolve, reject };
            }
            var flat_promise = flatPromise;
            class user_UserFacade extends dispatcher_Dispatcher {
              constructor(pusher2) {
                super(function(eventName, data) {
                  logger.debug("No callbacks on user for " + eventName);
                });
                this.signin_requested = false;
                this.user_data = null;
                this.serverToUserChannel = null;
                this.signinDonePromise = null;
                this._signinDoneResolve = null;
                this._onAuthorize = (err, authData) => {
                  if (err) {
                    logger.warn(`Error during signin: ${err}`);
                    this._cleanup();
                    return;
                  }
                  this.pusher.send_event("pusher:signin", {
                    auth: authData.auth,
                    user_data: authData.user_data
                  });
                };
                this.pusher = pusher2;
                this.pusher.connection.bind("state_change", ({ previous, current }) => {
                  if (previous !== "connected" && current === "connected") {
                    this._signin();
                  }
                  if (previous === "connected" && current !== "connected") {
                    this._cleanup();
                    this._newSigninPromiseIfNeeded();
                  }
                });
                this.watchlist = new watchlist_WatchlistFacade(pusher2);
                this.pusher.connection.bind("message", (event) => {
                  var eventName = event.event;
                  if (eventName === "pusher:signin_success") {
                    this._onSigninSuccess(event.data);
                  }
                  if (this.serverToUserChannel && this.serverToUserChannel.name === event.channel) {
                    this.serverToUserChannel.handleEvent(event);
                  }
                });
              }
              signin() {
                if (this.signin_requested) {
                  return;
                }
                this.signin_requested = true;
                this._signin();
              }
              _signin() {
                if (!this.signin_requested) {
                  return;
                }
                this._newSigninPromiseIfNeeded();
                if (this.pusher.connection.state !== "connected") {
                  return;
                }
                this.pusher.config.userAuthenticator({
                  socketId: this.pusher.connection.socket_id
                }, this._onAuthorize);
              }
              _onSigninSuccess(data) {
                try {
                  this.user_data = JSON.parse(data.user_data);
                } catch (e) {
                  logger.error(`Failed parsing user data after signin: ${data.user_data}`);
                  this._cleanup();
                  return;
                }
                if (typeof this.user_data.id !== "string" || this.user_data.id === "") {
                  logger.error(`user_data doesn't contain an id. user_data: ${this.user_data}`);
                  this._cleanup();
                  return;
                }
                this._signinDoneResolve();
                this._subscribeChannels();
              }
              _subscribeChannels() {
                const ensure_subscribed = (channel) => {
                  if (channel.subscriptionPending && channel.subscriptionCancelled) {
                    channel.reinstateSubscription();
                  } else if (!channel.subscriptionPending && this.pusher.connection.state === "connected") {
                    channel.subscribe();
                  }
                };
                this.serverToUserChannel = new channel_Channel(`#server-to-user-${this.user_data.id}`, this.pusher);
                this.serverToUserChannel.bind_global((eventName, data) => {
                  if (eventName.indexOf("pusher_internal:") === 0 || eventName.indexOf("pusher:") === 0) {
                    return;
                  }
                  this.emit(eventName, data);
                });
                ensure_subscribed(this.serverToUserChannel);
              }
              _cleanup() {
                this.user_data = null;
                if (this.serverToUserChannel) {
                  this.serverToUserChannel.unbind_all();
                  this.serverToUserChannel.disconnect();
                  this.serverToUserChannel = null;
                }
                if (this.signin_requested) {
                  this._signinDoneResolve();
                }
              }
              _newSigninPromiseIfNeeded() {
                if (!this.signin_requested) {
                  return;
                }
                if (this.signinDonePromise && !this.signinDonePromise.done) {
                  return;
                }
                const { promise, resolve } = flat_promise();
                promise.done = false;
                const setDone = () => {
                  promise.done = true;
                };
                promise.then(setDone).catch(setDone);
                this.signinDonePromise = promise;
                this._signinDoneResolve = resolve;
              }
            }
            class pusher_Pusher {
              static ready() {
                pusher_Pusher.isReady = true;
                for (var i = 0, l2 = pusher_Pusher.instances.length; i < l2; i++) {
                  pusher_Pusher.instances[i].connect();
                }
              }
              static getClientFeatures() {
                return keys2(filterObject({ ws: runtime.Transports.ws }, function(t2) {
                  return t2.isSupported({});
                }));
              }
              constructor(app_key, options) {
                checkAppKey(app_key);
                validateOptions(options);
                this.key = app_key;
                this.config = getConfig(options, this);
                this.channels = factory2.createChannels();
                this.global_emitter = new dispatcher_Dispatcher();
                this.sessionID = runtime.randomInt(1e9);
                this.timeline = new timeline_Timeline(this.key, this.sessionID, {
                  cluster: this.config.cluster,
                  features: pusher_Pusher.getClientFeatures(),
                  params: this.config.timelineParams || {},
                  limit: 50,
                  level: timeline_level.INFO,
                  version: defaults2.VERSION
                });
                if (this.config.enableStats) {
                  this.timelineSender = factory2.createTimelineSender(this.timeline, {
                    host: this.config.statsHost,
                    path: "/timeline/v2/" + runtime.TimelineTransport.name
                  });
                }
                var getStrategy = (options2) => {
                  return runtime.getDefaultStrategy(this.config, options2, strategy_builder_defineTransport);
                };
                this.connection = factory2.createConnectionManager(this.key, {
                  getStrategy,
                  timeline: this.timeline,
                  activityTimeout: this.config.activityTimeout,
                  pongTimeout: this.config.pongTimeout,
                  unavailableTimeout: this.config.unavailableTimeout,
                  useTLS: Boolean(this.config.useTLS)
                });
                this.connection.bind("connected", () => {
                  this.subscribeAll();
                  if (this.timelineSender) {
                    this.timelineSender.send(this.connection.isUsingTLS());
                  }
                });
                this.connection.bind("message", (event) => {
                  var eventName = event.event;
                  var internal = eventName.indexOf("pusher_internal:") === 0;
                  if (event.channel) {
                    var channel = this.channel(event.channel);
                    if (channel) {
                      channel.handleEvent(event);
                    }
                  }
                  if (!internal) {
                    this.global_emitter.emit(event.event, event.data);
                  }
                });
                this.connection.bind("connecting", () => {
                  this.channels.disconnect();
                });
                this.connection.bind("disconnected", () => {
                  this.channels.disconnect();
                });
                this.connection.bind("error", (err) => {
                  logger.warn(err);
                });
                pusher_Pusher.instances.push(this);
                this.timeline.info({ instances: pusher_Pusher.instances.length });
                this.user = new user_UserFacade(this);
                if (pusher_Pusher.isReady) {
                  this.connect();
                }
              }
              channel(name) {
                return this.channels.find(name);
              }
              allChannels() {
                return this.channels.all();
              }
              connect() {
                this.connection.connect();
                if (this.timelineSender) {
                  if (!this.timelineSenderTimer) {
                    var usingTLS = this.connection.isUsingTLS();
                    var timelineSender = this.timelineSender;
                    this.timelineSenderTimer = new timers_PeriodicTimer(6e4, function() {
                      timelineSender.send(usingTLS);
                    });
                  }
                }
              }
              disconnect() {
                this.connection.disconnect();
                if (this.timelineSenderTimer) {
                  this.timelineSenderTimer.ensureAborted();
                  this.timelineSenderTimer = null;
                }
              }
              bind(event_name, callback, context) {
                this.global_emitter.bind(event_name, callback, context);
                return this;
              }
              unbind(event_name, callback, context) {
                this.global_emitter.unbind(event_name, callback, context);
                return this;
              }
              bind_global(callback) {
                this.global_emitter.bind_global(callback);
                return this;
              }
              unbind_global(callback) {
                this.global_emitter.unbind_global(callback);
                return this;
              }
              unbind_all(callback) {
                this.global_emitter.unbind_all();
                return this;
              }
              subscribeAll() {
                var channelName;
                for (channelName in this.channels.channels) {
                  if (this.channels.channels.hasOwnProperty(channelName)) {
                    this.subscribe(channelName);
                  }
                }
              }
              subscribe(channel_name) {
                var channel = this.channels.add(channel_name, this);
                if (channel.subscriptionPending && channel.subscriptionCancelled) {
                  channel.reinstateSubscription();
                } else if (!channel.subscriptionPending && this.connection.state === "connected") {
                  channel.subscribe();
                }
                return channel;
              }
              unsubscribe(channel_name) {
                var channel = this.channels.find(channel_name);
                if (channel && channel.subscriptionPending) {
                  channel.cancelSubscription();
                } else {
                  channel = this.channels.remove(channel_name);
                  if (channel && channel.subscribed) {
                    channel.unsubscribe();
                  }
                }
              }
              send_event(event_name, data, channel) {
                return this.connection.send_event(event_name, data, channel);
              }
              shouldUseTLS() {
                return this.config.useTLS;
              }
              signin() {
                this.user.signin();
              }
            }
            pusher_Pusher.instances = [];
            pusher_Pusher.isReady = false;
            pusher_Pusher.logToConsole = false;
            pusher_Pusher.Runtime = runtime;
            pusher_Pusher.ScriptReceivers = runtime.ScriptReceivers;
            pusher_Pusher.DependenciesReceivers = runtime.DependenciesReceivers;
            pusher_Pusher.auth_callbacks = runtime.auth_callbacks;
            var core_pusher = __webpack_exports__["default"] = pusher_Pusher;
            function checkAppKey(key) {
              if (key === null || key === void 0) {
                throw "You must pass your app key when you instantiate Pusher.";
              }
            }
            runtime.setup(pusher_Pusher);
          })
          /******/
        ])
      );
    });
  })(pusher);
  return pusher.exports;
}
var pusherExports = requirePusher();
const Pusher = /* @__PURE__ */ getDefaultExportFromCjs(pusherExports);
window.axios = axios$1;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.Pusher = Pusher;
window.Echo = new E({
  broadcaster: "pusher",
  key: "401628d255afcf676d68",
  cluster: "sa1",
  wsHost: `ws-${"sa1"}.pusher.com`,
  wsPort: "443",
  wssPort: "443",
  forceTLS: true,
  enabledTransports: ["ws", "wss"]
});
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
var Symbol$1 = root.Symbol;
var objectProto$g = Object.prototype;
var hasOwnProperty$d = objectProto$g.hasOwnProperty;
var nativeObjectToString$1 = objectProto$g.toString;
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$d.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$f = Object.prototype;
var nativeObjectToString = objectProto$f.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag$3 = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$3;
}
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var isArray = Array.isArray;
var symbolProto$2 = Symbol$1 ? Symbol$1.prototype : void 0, symbolToString = symbolProto$2 ? symbolProto$2.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
function isObject(value) {
  var type2 = typeof value;
  return value != null && (type2 == "object" || type2 == "function");
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
function identity(value) {
  return value;
}
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root["__core-js_shared__"];
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
})();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$e = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$c = objectProto$e.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString$1.call(hasOwnProperty$c).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var WeakMap$1 = getNative(root, "WeakMap");
var objectCreate = Object.create;
var baseCreate = /* @__PURE__ */ (function() {
  function object() {
  }
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
})();
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var defineProperty = (function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
})();
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var setToString = shortOut(baseSetToString);
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type2 = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type2 == "number" || type2 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty) {
    defineProperty(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var objectProto$d = Object.prototype;
var hasOwnProperty$b = objectProto$d.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$b.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
var nativeMax$1 = Math.max;
function overRest(func, start2, transform) {
  start2 = nativeMax$1(start2 === void 0 ? func.length - 1 : start2, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax$1(args.length - start2, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start2 + index];
    }
    index = -1;
    var otherArgs = Array(start2 + 1);
    while (++index < start2) {
      otherArgs[index] = args[index];
    }
    otherArgs[start2] = transform(array);
    return apply(func, this, otherArgs);
  };
}
function baseRest(func, start2) {
  return setToString(overRest(func, start2, identity), func + "");
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type2 = typeof index;
  if (type2 == "number" ? isArrayLike(object) && isIndex(index, object.length) : type2 == "string" && index in object) {
    return eq(object[index], value);
  }
  return false;
}
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
var objectProto$c = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$c;
  return value === proto;
}
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var argsTag$3 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$3;
}
var objectProto$b = Object.prototype;
var hasOwnProperty$a = objectProto$b.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$b.propertyIsEnumerable;
var isArguments = baseIsArguments(/* @__PURE__ */ (function() {
  return arguments;
})()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$a.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
function stubFalse() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$2 = moduleExports$2 ? root.Buffer : void 0;
var nativeIsBuffer = Buffer$2 ? Buffer$2.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var argsTag$2 = "[object Arguments]", arrayTag$2 = "[object Array]", boolTag$3 = "[object Boolean]", dateTag$3 = "[object Date]", errorTag$2 = "[object Error]", funcTag$1 = "[object Function]", mapTag$5 = "[object Map]", numberTag$3 = "[object Number]", objectTag$4 = "[object Object]", regexpTag$3 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$3 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$3 = "[object ArrayBuffer]", dataViewTag$4 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$2] = typedArrayTags[arrayBufferTag$3] = typedArrayTags[boolTag$3] = typedArrayTags[dataViewTag$4] = typedArrayTags[dateTag$3] = typedArrayTags[errorTag$2] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$3] = typedArrayTags[objectTag$4] = typedArrayTags[regexpTag$3] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$3] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal.process;
var nodeUtil = (function() {
  try {
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
})();
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var objectProto$a = Object.prototype;
var hasOwnProperty$9 = objectProto$a.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$9.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var nativeKeys = overArg(Object.keys, Object);
var objectProto$9 = Object.prototype;
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$8.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$7.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type2 = typeof value;
  if (type2 == "number" || type2 == "symbol" || type2 == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var nativeCreate = getNative(Object, "create");
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$6.call(data, key) ? data[key] : void 0;
}
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== void 0 : hasOwnProperty$5.call(data, key);
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  return index < 0 ? void 0 : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root, "Map");
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$1 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type2 = typeof value;
  return type2 == "string" || type2 == "number" || type2 == "symbol" || type2 == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT$1 = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
function toString2(value) {
  return value == null ? "" : baseToString(value);
}
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString2(value));
}
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -Infinity ? "-0" : result;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : void 0;
}
function get$1(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet(object, path);
  return result === void 0 ? defaultValue : result;
}
function arrayPush(array, values) {
  var index = -1, length = values.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
var objectTag$3 = "[object Object]";
var funcProto = Function.prototype, objectProto$5 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$4.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
function basePropertyOf(object) {
  return function(key) {
    return object == null ? void 0 : object[key];
  };
}
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer$1 = moduleExports ? root.Buffer : void 0, allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$4 = Object.prototype;
var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}
var DataView$1 = getNative(root, "DataView");
var Promise$1 = getNative(root, "Promise");
var Set$1 = getNative(root, "Set");
var mapTag$4 = "[object Map]", objectTag$2 = "[object Object]", promiseTag = "[object Promise]", setTag$4 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$3 = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap$1);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$3 || Map$1 && getTag(new Map$1()) != mapTag$4 || Promise$1 && getTag(Promise$1.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag$4 || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag$1) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$2 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$3;
        case mapCtorString:
          return mapTag$4;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$4;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$3.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var Uint8Array$1 = root.Uint8Array;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = cloneArrayBuffer(dataView.buffer);
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf$1 = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", mapTag$3 = "[object Map]", numberTag$2 = "[object Number]", regexpTag$2 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$2 = "[object String]", symbolTag$2 = "[object Symbol]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$2:
      return cloneArrayBuffer(object);
    case boolTag$2:
    case dateTag$2:
      return new Ctor(+object);
    case dataViewTag$2:
      return cloneDataView(object);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$3:
      return new Ctor();
    case numberTag$2:
    case stringTag$2:
      return new Ctor(object);
    case regexpTag$2:
      return cloneRegExp(object);
    case setTag$3:
      return new Ctor();
    case symbolTag$2:
      return cloneSymbol(object);
  }
}
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
var mapTag$2 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag$2;
}
var nodeIsMap = nodeUtil && nodeUtil.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
var setTag$2 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag$2;
}
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var CLONE_DEEP_FLAG$1 = 1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag$1 = "[object Map]", numberTag$1 = "[object Number]", objectTag$1 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$1 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag$1] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$1] = cloneableTags[dataViewTag$1] = cloneableTags[boolTag$1] = cloneableTags[dateTag$1] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag$1] = cloneableTags[objectTag$1] = cloneableTags[regexpTag$1] = cloneableTags[setTag$1] = cloneableTags[stringTag$1] = cloneableTags[symbolTag$1] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1;
  if (result !== void 0) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
  } else {
    var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$1 || tag == argsTag$1 || isFunc && !object) {
      result = isFunc ? {} : initCloneObject(value);
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = getAllKeys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
function SetCache(values) {
  var index = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arraySome(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
function cacheHas(cache, key) {
  return cache.has(key);
}
var COMPARE_PARTIAL_FLAG$3 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen2 = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen2) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen2, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen2.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
function mapToArray(map) {
  var index = -1, result = Array(map.size);
  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
function setToArray(set2) {
  var index = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var COMPARE_PARTIAL_FLAG$2 = 1, COMPARE_UNORDERED_FLAG = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$1(object), new Uint8Array$1(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case regexpTag:
    case stringTag:
      return object == other + "";
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}
var COMPARE_PARTIAL_FLAG$1 = 1;
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$2.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var COMPARE_PARTIAL_FLAG = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty$1.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty$1.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var baseFor = createBaseFor();
var now = function() {
  return root.Date.now();
};
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce$1(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = true;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? true : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function assignMergeValue(object, key, value) {
  if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
function safeGet(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue(object, key, newValue);
}
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack());
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}
var htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
var escapeHtmlChar = basePropertyOf(htmlEscapes);
var reUnescapedHtml = /[&<>"']/g, reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
function escape$1(string) {
  string = toString2(string);
  return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
}
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}
function isEqual(value, other) {
  return baseIsEqual(value, other);
}
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);
  var index = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index < length) {
    var key = toKey(path[index]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = void 0;
      if (newValue === void 0) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
function set(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}
var type;
var hasRequiredType;
function requireType() {
  if (hasRequiredType) return type;
  hasRequiredType = 1;
  type = TypeError;
  return type;
}
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var objectInspect;
var hasRequiredObjectInspect;
function requireObjectInspect() {
  if (hasRequiredObjectInspect) return objectInspect;
  hasRequiredObjectInspect = 1;
  var hasMap = typeof Map === "function" && Map.prototype;
  var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
  var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
  var mapForEach = hasMap && Map.prototype.forEach;
  var hasSet = typeof Set === "function" && Set.prototype;
  var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
  var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
  var setForEach = hasSet && Set.prototype.forEach;
  var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
  var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
  var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
  var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
  var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
  var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
  var booleanValueOf = Boolean.prototype.valueOf;
  var objectToString2 = Object.prototype.toString;
  var functionToString = Function.prototype.toString;
  var $match = String.prototype.match;
  var $slice = String.prototype.slice;
  var $replace = String.prototype.replace;
  var $toUpperCase = String.prototype.toUpperCase;
  var $toLowerCase = String.prototype.toLowerCase;
  var $test = RegExp.prototype.test;
  var $concat = Array.prototype.concat;
  var $join = Array.prototype.join;
  var $arrSlice = Array.prototype.slice;
  var $floor = Math.floor;
  var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
  var gOPS = Object.getOwnPropertySymbols;
  var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
  var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
  var toStringTag2 = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
  var isEnumerable = Object.prototype.propertyIsEnumerable;
  var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
    return O.__proto__;
  } : null);
  function addNumericSeparator(num, str) {
    if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
      return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === "number") {
      var int = num < 0 ? -$floor(-num) : $floor(num);
      if (int !== num) {
        var intStr = String(int);
        var dec = $slice.call(str, intStr.length + 1);
        return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
      }
    }
    return $replace.call(str, sepRegex, "$&_");
  }
  var utilInspect = require$$0;
  var inspectCustom = utilInspect.custom;
  var inspectSymbol = isSymbol2(inspectCustom) ? inspectCustom : null;
  var quotes = {
    __proto__: null,
    "double": '"',
    single: "'"
  };
  var quoteREs = {
    __proto__: null,
    "double": /(["\\])/g,
    single: /(['\\])/g
  };
  objectInspect = function inspect_(obj, options, depth, seen2) {
    var opts = options || {};
    if (has2(opts, "quoteStyle") && !has2(quotes, opts.quoteStyle)) {
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (has2(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
      throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has2(opts, "customInspect") ? opts.customInspect : true;
    if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
      throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    }
    if (has2(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
      throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has2(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
      throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;
    if (typeof obj === "undefined") {
      return "undefined";
    }
    if (obj === null) {
      return "null";
    }
    if (typeof obj === "boolean") {
      return obj ? "true" : "false";
    }
    if (typeof obj === "string") {
      return inspectString(obj, opts);
    }
    if (typeof obj === "number") {
      if (obj === 0) {
        return Infinity / obj > 0 ? "0" : "-0";
      }
      var str = String(obj);
      return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === "bigint") {
      var bigIntStr = String(obj) + "n";
      return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }
    var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
    if (typeof depth === "undefined") {
      depth = 0;
    }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
      return isArray2(obj) ? "[Array]" : "[Object]";
    }
    var indent = getIndent(opts, depth);
    if (typeof seen2 === "undefined") {
      seen2 = [];
    } else if (indexOf(seen2, obj) >= 0) {
      return "[Circular]";
    }
    function inspect(value, from, noIndent) {
      if (from) {
        seen2 = $arrSlice.call(seen2);
        seen2.push(from);
      }
      if (noIndent) {
        var newOpts = {
          depth: opts.depth
        };
        if (has2(opts, "quoteStyle")) {
          newOpts.quoteStyle = opts.quoteStyle;
        }
        return inspect_(value, newOpts, depth + 1, seen2);
      }
      return inspect_(value, opts, depth + 1, seen2);
    }
    if (typeof obj === "function" && !isRegExp2(obj)) {
      var name = nameOf(obj);
      var keys2 = arrObjKeys(obj, inspect);
      return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys2.length > 0 ? " { " + $join.call(keys2, ", ") + " }" : "");
    }
    if (isSymbol2(obj)) {
      var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
      return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
      var s = "<" + $toLowerCase.call(String(obj.nodeName));
      var attrs = obj.attributes || [];
      for (var i = 0; i < attrs.length; i++) {
        s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
      }
      s += ">";
      if (obj.childNodes && obj.childNodes.length) {
        s += "...";
      }
      s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
      return s;
    }
    if (isArray2(obj)) {
      if (obj.length === 0) {
        return "[]";
      }
      var xs = arrObjKeys(obj, inspect);
      if (indent && !singleLineValues(xs)) {
        return "[" + indentedJoin(xs, indent) + "]";
      }
      return "[ " + $join.call(xs, ", ") + " ]";
    }
    if (isError(obj)) {
      var parts = arrObjKeys(obj, inspect);
      if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
        return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
      }
      if (parts.length === 0) {
        return "[" + String(obj) + "]";
      }
      return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
    }
    if (typeof obj === "object" && customInspect) {
      if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
        return utilInspect(obj, { depth: maxDepth - depth });
      } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
        return obj.inspect();
      }
    }
    if (isMap2(obj)) {
      var mapParts = [];
      if (mapForEach) {
        mapForEach.call(obj, function(value, key) {
          mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
        });
      }
      return collectionOf("Map", mapSize.call(obj), mapParts, indent);
    }
    if (isSet2(obj)) {
      var setParts = [];
      if (setForEach) {
        setForEach.call(obj, function(value) {
          setParts.push(inspect(value, obj));
        });
      }
      return collectionOf("Set", setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
      return weakCollectionOf("WeakMap");
    }
    if (isWeakSet(obj)) {
      return weakCollectionOf("WeakSet");
    }
    if (isWeakRef(obj)) {
      return weakCollectionOf("WeakRef");
    }
    if (isNumber2(obj)) {
      return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
      return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean2(obj)) {
      return markBoxed(booleanValueOf.call(obj));
    }
    if (isString2(obj)) {
      return markBoxed(inspect(String(obj)));
    }
    if (typeof window !== "undefined" && obj === window) {
      return "{ [object Window] }";
    }
    if (typeof globalThis !== "undefined" && obj === globalThis || typeof commonjsGlobal !== "undefined" && obj === commonjsGlobal) {
      return "{ [object globalThis] }";
    }
    if (!isDate2(obj) && !isRegExp2(obj)) {
      var ys = arrObjKeys(obj, inspect);
      var isPlainObject2 = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
      var protoTag = obj instanceof Object ? "" : "null prototype";
      var stringTag2 = !isPlainObject2 && toStringTag2 && Object(obj) === obj && toStringTag2 in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
      var constructorTag = isPlainObject2 || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
      var tag = constructorTag + (stringTag2 || protoTag ? "[" + $join.call($concat.call([], stringTag2 || [], protoTag || []), ": ") + "] " : "");
      if (ys.length === 0) {
        return tag + "{}";
      }
      if (indent) {
        return tag + "{" + indentedJoin(ys, indent) + "}";
      }
      return tag + "{ " + $join.call(ys, ", ") + " }";
    }
    return String(obj);
  };
  function wrapQuotes(s, defaultStyle, opts) {
    var style = opts.quoteStyle || defaultStyle;
    var quoteChar = quotes[style];
    return quoteChar + s + quoteChar;
  }
  function quote(s) {
    return $replace.call(String(s), /"/g, "&quot;");
  }
  function canTrustToString(obj) {
    return !toStringTag2 || !(typeof obj === "object" && (toStringTag2 in obj || typeof obj[toStringTag2] !== "undefined"));
  }
  function isArray2(obj) {
    return toStr(obj) === "[object Array]" && canTrustToString(obj);
  }
  function isDate2(obj) {
    return toStr(obj) === "[object Date]" && canTrustToString(obj);
  }
  function isRegExp2(obj) {
    return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
  }
  function isError(obj) {
    return toStr(obj) === "[object Error]" && canTrustToString(obj);
  }
  function isString2(obj) {
    return toStr(obj) === "[object String]" && canTrustToString(obj);
  }
  function isNumber2(obj) {
    return toStr(obj) === "[object Number]" && canTrustToString(obj);
  }
  function isBoolean2(obj) {
    return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
  }
  function isSymbol2(obj) {
    if (hasShammedSymbols) {
      return obj && typeof obj === "object" && obj instanceof Symbol;
    }
    if (typeof obj === "symbol") {
      return true;
    }
    if (!obj || typeof obj !== "object" || !symToString) {
      return false;
    }
    try {
      symToString.call(obj);
      return true;
    } catch (e) {
    }
    return false;
  }
  function isBigInt(obj) {
    if (!obj || typeof obj !== "object" || !bigIntValueOf) {
      return false;
    }
    try {
      bigIntValueOf.call(obj);
      return true;
    } catch (e) {
    }
    return false;
  }
  var hasOwn = Object.prototype.hasOwnProperty || function(key) {
    return key in this;
  };
  function has2(obj, key) {
    return hasOwn.call(obj, key);
  }
  function toStr(obj) {
    return objectToString2.call(obj);
  }
  function nameOf(f2) {
    if (f2.name) {
      return f2.name;
    }
    var m2 = $match.call(functionToString.call(f2), /^function\s*([\w$]+)/);
    if (m2) {
      return m2[1];
    }
    return null;
  }
  function indexOf(xs, x) {
    if (xs.indexOf) {
      return xs.indexOf(x);
    }
    for (var i = 0, l2 = xs.length; i < l2; i++) {
      if (xs[i] === x) {
        return i;
      }
    }
    return -1;
  }
  function isMap2(x) {
    if (!mapSize || !x || typeof x !== "object") {
      return false;
    }
    try {
      mapSize.call(x);
      try {
        setSize.call(x);
      } catch (s) {
        return true;
      }
      return x instanceof Map;
    } catch (e) {
    }
    return false;
  }
  function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== "object") {
      return false;
    }
    try {
      weakMapHas.call(x, weakMapHas);
      try {
        weakSetHas.call(x, weakSetHas);
      } catch (s) {
        return true;
      }
      return x instanceof WeakMap;
    } catch (e) {
    }
    return false;
  }
  function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== "object") {
      return false;
    }
    try {
      weakRefDeref.call(x);
      return true;
    } catch (e) {
    }
    return false;
  }
  function isSet2(x) {
    if (!setSize || !x || typeof x !== "object") {
      return false;
    }
    try {
      setSize.call(x);
      try {
        mapSize.call(x);
      } catch (m2) {
        return true;
      }
      return x instanceof Set;
    } catch (e) {
    }
    return false;
  }
  function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== "object") {
      return false;
    }
    try {
      weakSetHas.call(x, weakSetHas);
      try {
        weakMapHas.call(x, weakMapHas);
      } catch (s) {
        return true;
      }
      return x instanceof WeakSet;
    } catch (e) {
    }
    return false;
  }
  function isElement(x) {
    if (!x || typeof x !== "object") {
      return false;
    }
    if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
      return true;
    }
    return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
  }
  function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
      var remaining = str.length - opts.maxStringLength;
      var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
      return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    var quoteRE = quoteREs[opts.quoteStyle || "single"];
    quoteRE.lastIndex = 0;
    var s = $replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, "single", opts);
  }
  function lowbyte(c2) {
    var n = c2.charCodeAt(0);
    var x = {
      8: "b",
      9: "t",
      10: "n",
      12: "f",
      13: "r"
    }[n];
    if (x) {
      return "\\" + x;
    }
    return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
  }
  function markBoxed(str) {
    return "Object(" + str + ")";
  }
  function weakCollectionOf(type2) {
    return type2 + " { ? }";
  }
  function collectionOf(type2, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
    return type2 + " (" + size + ") {" + joinedEntries + "}";
  }
  function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
      if (indexOf(xs[i], "\n") >= 0) {
        return false;
      }
    }
    return true;
  }
  function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === "	") {
      baseIndent = "	";
    } else if (typeof opts.indent === "number" && opts.indent > 0) {
      baseIndent = $join.call(Array(opts.indent + 1), " ");
    } else {
      return null;
    }
    return {
      base: baseIndent,
      prev: $join.call(Array(depth + 1), baseIndent)
    };
  }
  function indentedJoin(xs, indent) {
    if (xs.length === 0) {
      return "";
    }
    var lineJoiner = "\n" + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
  }
  function arrObjKeys(obj, inspect) {
    var isArr = isArray2(obj);
    var xs = [];
    if (isArr) {
      xs.length = obj.length;
      for (var i = 0; i < obj.length; i++) {
        xs[i] = has2(obj, i) ? inspect(obj[i], obj) : "";
      }
    }
    var syms = typeof gOPS === "function" ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
      symMap = {};
      for (var k2 = 0; k2 < syms.length; k2++) {
        symMap["$" + syms[k2]] = syms[k2];
      }
    }
    for (var key in obj) {
      if (!has2(obj, key)) {
        continue;
      }
      if (isArr && String(Number(key)) === key && key < obj.length) {
        continue;
      }
      if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
        continue;
      } else if ($test.call(/[^\w$]/, key)) {
        xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
      } else {
        xs.push(key + ": " + inspect(obj[key], obj));
      }
    }
    if (typeof gOPS === "function") {
      for (var j = 0; j < syms.length; j++) {
        if (isEnumerable.call(obj, syms[j])) {
          xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
        }
      }
    }
    return xs;
  }
  return objectInspect;
}
var sideChannelList;
var hasRequiredSideChannelList;
function requireSideChannelList() {
  if (hasRequiredSideChannelList) return sideChannelList;
  hasRequiredSideChannelList = 1;
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var $TypeError = /* @__PURE__ */ requireType();
  var listGetNode = function(list, key, isDelete) {
    var prev = list;
    var curr;
    for (; (curr = prev.next) != null; prev = curr) {
      if (curr.key === key) {
        prev.next = curr.next;
        if (!isDelete) {
          curr.next = /** @type {NonNullable<typeof list.next>} */
          list.next;
          list.next = curr;
        }
        return curr;
      }
    }
  };
  var listGet = function(objects, key) {
    if (!objects) {
      return void 0;
    }
    var node = listGetNode(objects, key);
    return node && node.value;
  };
  var listSet = function(objects, key, value) {
    var node = listGetNode(objects, key);
    if (node) {
      node.value = value;
    } else {
      objects.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
      {
        // eslint-disable-line no-param-reassign, no-extra-parens
        key,
        next: objects.next,
        value
      };
    }
  };
  var listHas = function(objects, key) {
    if (!objects) {
      return false;
    }
    return !!listGetNode(objects, key);
  };
  var listDelete = function(objects, key) {
    if (objects) {
      return listGetNode(objects, key, true);
    }
  };
  sideChannelList = function getSideChannelList() {
    var $o;
    var channel = {
      assert: function(key) {
        if (!channel.has(key)) {
          throw new $TypeError("Side channel does not contain " + inspect(key));
        }
      },
      "delete": function(key) {
        var root2 = $o && $o.next;
        var deletedNode = listDelete($o, key);
        if (deletedNode && root2 && root2 === deletedNode) {
          $o = void 0;
        }
        return !!deletedNode;
      },
      get: function(key) {
        return listGet($o, key);
      },
      has: function(key) {
        return listHas($o, key);
      },
      set: function(key, value) {
        if (!$o) {
          $o = {
            next: void 0
          };
        }
        listSet(
          /** @type {NonNullable<typeof $o>} */
          $o,
          key,
          value
        );
      }
    };
    return channel;
  };
  return sideChannelList;
}
var esObjectAtoms;
var hasRequiredEsObjectAtoms;
function requireEsObjectAtoms() {
  if (hasRequiredEsObjectAtoms) return esObjectAtoms;
  hasRequiredEsObjectAtoms = 1;
  esObjectAtoms = Object;
  return esObjectAtoms;
}
var esErrors;
var hasRequiredEsErrors;
function requireEsErrors() {
  if (hasRequiredEsErrors) return esErrors;
  hasRequiredEsErrors = 1;
  esErrors = Error;
  return esErrors;
}
var _eval;
var hasRequired_eval;
function require_eval() {
  if (hasRequired_eval) return _eval;
  hasRequired_eval = 1;
  _eval = EvalError;
  return _eval;
}
var range;
var hasRequiredRange;
function requireRange() {
  if (hasRequiredRange) return range;
  hasRequiredRange = 1;
  range = RangeError;
  return range;
}
var ref;
var hasRequiredRef;
function requireRef() {
  if (hasRequiredRef) return ref;
  hasRequiredRef = 1;
  ref = ReferenceError;
  return ref;
}
var syntax;
var hasRequiredSyntax;
function requireSyntax() {
  if (hasRequiredSyntax) return syntax;
  hasRequiredSyntax = 1;
  syntax = SyntaxError;
  return syntax;
}
var uri;
var hasRequiredUri;
function requireUri() {
  if (hasRequiredUri) return uri;
  hasRequiredUri = 1;
  uri = URIError;
  return uri;
}
var abs;
var hasRequiredAbs;
function requireAbs() {
  if (hasRequiredAbs) return abs;
  hasRequiredAbs = 1;
  abs = Math.abs;
  return abs;
}
var floor;
var hasRequiredFloor;
function requireFloor() {
  if (hasRequiredFloor) return floor;
  hasRequiredFloor = 1;
  floor = Math.floor;
  return floor;
}
var max;
var hasRequiredMax;
function requireMax() {
  if (hasRequiredMax) return max;
  hasRequiredMax = 1;
  max = Math.max;
  return max;
}
var min;
var hasRequiredMin;
function requireMin() {
  if (hasRequiredMin) return min;
  hasRequiredMin = 1;
  min = Math.min;
  return min;
}
var pow;
var hasRequiredPow;
function requirePow() {
  if (hasRequiredPow) return pow;
  hasRequiredPow = 1;
  pow = Math.pow;
  return pow;
}
var round;
var hasRequiredRound;
function requireRound() {
  if (hasRequiredRound) return round;
  hasRequiredRound = 1;
  round = Math.round;
  return round;
}
var _isNaN;
var hasRequired_isNaN;
function require_isNaN() {
  if (hasRequired_isNaN) return _isNaN;
  hasRequired_isNaN = 1;
  _isNaN = Number.isNaN || function isNaN2(a) {
    return a !== a;
  };
  return _isNaN;
}
var sign;
var hasRequiredSign;
function requireSign() {
  if (hasRequiredSign) return sign;
  hasRequiredSign = 1;
  var $isNaN = /* @__PURE__ */ require_isNaN();
  sign = function sign2(number) {
    if ($isNaN(number) || number === 0) {
      return number;
    }
    return number < 0 ? -1 : 1;
  };
  return sign;
}
var gOPD;
var hasRequiredGOPD;
function requireGOPD() {
  if (hasRequiredGOPD) return gOPD;
  hasRequiredGOPD = 1;
  gOPD = Object.getOwnPropertyDescriptor;
  return gOPD;
}
var gopd;
var hasRequiredGopd;
function requireGopd() {
  if (hasRequiredGopd) return gopd;
  hasRequiredGopd = 1;
  var $gOPD = /* @__PURE__ */ requireGOPD();
  if ($gOPD) {
    try {
      $gOPD([], "length");
    } catch (e) {
      $gOPD = null;
    }
  }
  gopd = $gOPD;
  return gopd;
}
var esDefineProperty;
var hasRequiredEsDefineProperty;
function requireEsDefineProperty() {
  if (hasRequiredEsDefineProperty) return esDefineProperty;
  hasRequiredEsDefineProperty = 1;
  var $defineProperty = Object.defineProperty || false;
  if ($defineProperty) {
    try {
      $defineProperty({}, "a", { value: 1 });
    } catch (e) {
      $defineProperty = false;
    }
  }
  esDefineProperty = $defineProperty;
  return esDefineProperty;
}
var shams;
var hasRequiredShams;
function requireShams() {
  if (hasRequiredShams) return shams;
  hasRequiredShams = 1;
  shams = function hasSymbols2() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
      return false;
    }
    if (typeof Symbol.iterator === "symbol") {
      return true;
    }
    var obj = {};
    var sym = Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") {
      return false;
    }
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
      return false;
    }
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
      return false;
    }
    var symVal = 42;
    obj[sym] = symVal;
    for (var _2 in obj) {
      return false;
    }
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
      return false;
    }
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
      return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
      return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
      return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === "function") {
      var descriptor = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(obj, sym)
      );
      if (descriptor.value !== symVal || descriptor.enumerable !== true) {
        return false;
      }
    }
    return true;
  };
  return shams;
}
var hasSymbols;
var hasRequiredHasSymbols;
function requireHasSymbols() {
  if (hasRequiredHasSymbols) return hasSymbols;
  hasRequiredHasSymbols = 1;
  var origSymbol = typeof Symbol !== "undefined" && Symbol;
  var hasSymbolSham = requireShams();
  hasSymbols = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") {
      return false;
    }
    if (typeof Symbol !== "function") {
      return false;
    }
    if (typeof origSymbol("foo") !== "symbol") {
      return false;
    }
    if (typeof Symbol("bar") !== "symbol") {
      return false;
    }
    return hasSymbolSham();
  };
  return hasSymbols;
}
var Reflect_getPrototypeOf;
var hasRequiredReflect_getPrototypeOf;
function requireReflect_getPrototypeOf() {
  if (hasRequiredReflect_getPrototypeOf) return Reflect_getPrototypeOf;
  hasRequiredReflect_getPrototypeOf = 1;
  Reflect_getPrototypeOf = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
  return Reflect_getPrototypeOf;
}
var Object_getPrototypeOf;
var hasRequiredObject_getPrototypeOf;
function requireObject_getPrototypeOf() {
  if (hasRequiredObject_getPrototypeOf) return Object_getPrototypeOf;
  hasRequiredObject_getPrototypeOf = 1;
  var $Object = /* @__PURE__ */ requireEsObjectAtoms();
  Object_getPrototypeOf = $Object.getPrototypeOf || null;
  return Object_getPrototypeOf;
}
var implementation;
var hasRequiredImplementation;
function requireImplementation() {
  if (hasRequiredImplementation) return implementation;
  hasRequiredImplementation = 1;
  var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
  var toStr = Object.prototype.toString;
  var max2 = Math.max;
  var funcType = "[object Function]";
  var concatty = function concatty2(a, b2) {
    var arr = [];
    for (var i = 0; i < a.length; i += 1) {
      arr[i] = a[i];
    }
    for (var j = 0; j < b2.length; j += 1) {
      arr[j + a.length] = b2[j];
    }
    return arr;
  };
  var slicy = function slicy2(arrLike, offset) {
    var arr = [];
    for (var i = offset, j = 0; i < arrLike.length; i += 1, j += 1) {
      arr[j] = arrLike[i];
    }
    return arr;
  };
  var joiny = function(arr, joiner) {
    var str = "";
    for (var i = 0; i < arr.length; i += 1) {
      str += arr[i];
      if (i + 1 < arr.length) {
        str += joiner;
      }
    }
    return str;
  };
  implementation = function bind2(that) {
    var target = this;
    if (typeof target !== "function" || toStr.apply(target) !== funcType) {
      throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
      if (this instanceof bound) {
        var result = target.apply(
          this,
          concatty(args, arguments)
        );
        if (Object(result) === result) {
          return result;
        }
        return this;
      }
      return target.apply(
        that,
        concatty(args, arguments)
      );
    };
    var boundLength = max2(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
      boundArgs[i] = "$" + i;
    }
    bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
      var Empty = function Empty2() {
      };
      Empty.prototype = target.prototype;
      bound.prototype = new Empty();
      Empty.prototype = null;
    }
    return bound;
  };
  return implementation;
}
var functionBind;
var hasRequiredFunctionBind;
function requireFunctionBind() {
  if (hasRequiredFunctionBind) return functionBind;
  hasRequiredFunctionBind = 1;
  var implementation2 = requireImplementation();
  functionBind = Function.prototype.bind || implementation2;
  return functionBind;
}
var functionCall;
var hasRequiredFunctionCall;
function requireFunctionCall() {
  if (hasRequiredFunctionCall) return functionCall;
  hasRequiredFunctionCall = 1;
  functionCall = Function.prototype.call;
  return functionCall;
}
var functionApply;
var hasRequiredFunctionApply;
function requireFunctionApply() {
  if (hasRequiredFunctionApply) return functionApply;
  hasRequiredFunctionApply = 1;
  functionApply = Function.prototype.apply;
  return functionApply;
}
var reflectApply;
var hasRequiredReflectApply;
function requireReflectApply() {
  if (hasRequiredReflectApply) return reflectApply;
  hasRequiredReflectApply = 1;
  reflectApply = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
  return reflectApply;
}
var actualApply;
var hasRequiredActualApply;
function requireActualApply() {
  if (hasRequiredActualApply) return actualApply;
  hasRequiredActualApply = 1;
  var bind2 = requireFunctionBind();
  var $apply = requireFunctionApply();
  var $call = requireFunctionCall();
  var $reflectApply = requireReflectApply();
  actualApply = $reflectApply || bind2.call($call, $apply);
  return actualApply;
}
var callBindApplyHelpers;
var hasRequiredCallBindApplyHelpers;
function requireCallBindApplyHelpers() {
  if (hasRequiredCallBindApplyHelpers) return callBindApplyHelpers;
  hasRequiredCallBindApplyHelpers = 1;
  var bind2 = requireFunctionBind();
  var $TypeError = /* @__PURE__ */ requireType();
  var $call = requireFunctionCall();
  var $actualApply = requireActualApply();
  callBindApplyHelpers = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== "function") {
      throw new $TypeError("a function is required");
    }
    return $actualApply(bind2, $call, args);
  };
  return callBindApplyHelpers;
}
var get;
var hasRequiredGet;
function requireGet() {
  if (hasRequiredGet) return get;
  hasRequiredGet = 1;
  var callBind = requireCallBindApplyHelpers();
  var gOPD2 = /* @__PURE__ */ requireGopd();
  var hasProtoAccessor;
  try {
    hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (e) {
    if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
      throw e;
    }
  }
  var desc = !!hasProtoAccessor && gOPD2 && gOPD2(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  );
  var $Object = Object;
  var $getPrototypeOf = $Object.getPrototypeOf;
  get = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? (
    /** @type {import('./get')} */
    function getDunder(value) {
      return $getPrototypeOf(value == null ? value : $Object(value));
    }
  ) : false;
  return get;
}
var getProto;
var hasRequiredGetProto;
function requireGetProto() {
  if (hasRequiredGetProto) return getProto;
  hasRequiredGetProto = 1;
  var reflectGetProto = requireReflect_getPrototypeOf();
  var originalGetProto = requireObject_getPrototypeOf();
  var getDunderProto = /* @__PURE__ */ requireGet();
  getProto = reflectGetProto ? function getProto2(O) {
    return reflectGetProto(O);
  } : originalGetProto ? function getProto2(O) {
    if (!O || typeof O !== "object" && typeof O !== "function") {
      throw new TypeError("getProto: not an object");
    }
    return originalGetProto(O);
  } : getDunderProto ? function getProto2(O) {
    return getDunderProto(O);
  } : null;
  return getProto;
}
var hasown;
var hasRequiredHasown;
function requireHasown() {
  if (hasRequiredHasown) return hasown;
  hasRequiredHasown = 1;
  var call = Function.prototype.call;
  var $hasOwn = Object.prototype.hasOwnProperty;
  var bind2 = requireFunctionBind();
  hasown = bind2.call(call, $hasOwn);
  return hasown;
}
var getIntrinsic;
var hasRequiredGetIntrinsic;
function requireGetIntrinsic() {
  if (hasRequiredGetIntrinsic) return getIntrinsic;
  hasRequiredGetIntrinsic = 1;
  var undefined$1;
  var $Object = /* @__PURE__ */ requireEsObjectAtoms();
  var $Error = /* @__PURE__ */ requireEsErrors();
  var $EvalError = /* @__PURE__ */ require_eval();
  var $RangeError = /* @__PURE__ */ requireRange();
  var $ReferenceError = /* @__PURE__ */ requireRef();
  var $SyntaxError = /* @__PURE__ */ requireSyntax();
  var $TypeError = /* @__PURE__ */ requireType();
  var $URIError = /* @__PURE__ */ requireUri();
  var abs2 = /* @__PURE__ */ requireAbs();
  var floor2 = /* @__PURE__ */ requireFloor();
  var max2 = /* @__PURE__ */ requireMax();
  var min2 = /* @__PURE__ */ requireMin();
  var pow2 = /* @__PURE__ */ requirePow();
  var round2 = /* @__PURE__ */ requireRound();
  var sign2 = /* @__PURE__ */ requireSign();
  var $Function = Function;
  var getEvalledConstructor = function(expressionSyntax) {
    try {
      return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch (e) {
    }
  };
  var $gOPD = /* @__PURE__ */ requireGopd();
  var $defineProperty = /* @__PURE__ */ requireEsDefineProperty();
  var throwTypeError = function() {
    throw new $TypeError();
  };
  var ThrowTypeError = $gOPD ? (function() {
    try {
      arguments.callee;
      return throwTypeError;
    } catch (calleeThrows) {
      try {
        return $gOPD(arguments, "callee").get;
      } catch (gOPDthrows) {
        return throwTypeError;
      }
    }
  })() : throwTypeError;
  var hasSymbols2 = requireHasSymbols()();
  var getProto2 = requireGetProto();
  var $ObjectGPO = requireObject_getPrototypeOf();
  var $ReflectGPO = requireReflect_getPrototypeOf();
  var $apply = requireFunctionApply();
  var $call = requireFunctionCall();
  var needsEval = {};
  var TypedArray = typeof Uint8Array === "undefined" || !getProto2 ? undefined$1 : getProto2(Uint8Array);
  var INTRINSICS = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
    "%ArrayIteratorPrototype%": hasSymbols2 && getProto2 ? getProto2([][Symbol.iterator]()) : undefined$1,
    "%AsyncFromSyncIteratorPrototype%": undefined$1,
    "%AsyncFunction%": needsEval,
    "%AsyncGenerator%": needsEval,
    "%AsyncGeneratorFunction%": needsEval,
    "%AsyncIteratorPrototype%": needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
    "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined$1 : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined$1 : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": $Error,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": $EvalError,
    "%Float16Array%": typeof Float16Array === "undefined" ? undefined$1 : Float16Array,
    "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
    "%Function%": $Function,
    "%GeneratorFunction%": needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hasSymbols2 && getProto2 ? getProto2(getProto2([][Symbol.iterator]())) : undefined$1,
    "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
    "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols2 || !getProto2 ? undefined$1 : getProto2((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": $Object,
    "%Object.getOwnPropertyDescriptor%": $gOPD,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
    "%RangeError%": $RangeError,
    "%ReferenceError%": $ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols2 || !getProto2 ? undefined$1 : getProto2((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hasSymbols2 && getProto2 ? getProto2(""[Symbol.iterator]()) : undefined$1,
    "%Symbol%": hasSymbols2 ? Symbol : undefined$1,
    "%SyntaxError%": $SyntaxError,
    "%ThrowTypeError%": ThrowTypeError,
    "%TypedArray%": TypedArray,
    "%TypeError%": $TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
    "%URIError%": $URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet,
    "%Function.prototype.call%": $call,
    "%Function.prototype.apply%": $apply,
    "%Object.defineProperty%": $defineProperty,
    "%Object.getPrototypeOf%": $ObjectGPO,
    "%Math.abs%": abs2,
    "%Math.floor%": floor2,
    "%Math.max%": max2,
    "%Math.min%": min2,
    "%Math.pow%": pow2,
    "%Math.round%": round2,
    "%Math.sign%": sign2,
    "%Reflect.getPrototypeOf%": $ReflectGPO
  };
  if (getProto2) {
    try {
      null.error;
    } catch (e) {
      var errorProto = getProto2(getProto2(e));
      INTRINSICS["%Error.prototype%"] = errorProto;
    }
  }
  var doEval = function doEval2(name) {
    var value;
    if (name === "%AsyncFunction%") {
      value = getEvalledConstructor("async function () {}");
    } else if (name === "%GeneratorFunction%") {
      value = getEvalledConstructor("function* () {}");
    } else if (name === "%AsyncGeneratorFunction%") {
      value = getEvalledConstructor("async function* () {}");
    } else if (name === "%AsyncGenerator%") {
      var fn = doEval2("%AsyncGeneratorFunction%");
      if (fn) {
        value = fn.prototype;
      }
    } else if (name === "%AsyncIteratorPrototype%") {
      var gen = doEval2("%AsyncGenerator%");
      if (gen && getProto2) {
        value = getProto2(gen.prototype);
      }
    }
    INTRINSICS[name] = value;
    return value;
  };
  var LEGACY_ALIASES = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  };
  var bind2 = requireFunctionBind();
  var hasOwn = /* @__PURE__ */ requireHasown();
  var $concat = bind2.call($call, Array.prototype.concat);
  var $spliceApply = bind2.call($apply, Array.prototype.splice);
  var $replace = bind2.call($call, String.prototype.replace);
  var $strSlice = bind2.call($call, String.prototype.slice);
  var $exec = bind2.call($call, RegExp.prototype.exec);
  var rePropName2 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var reEscapeChar2 = /\\(\\)?/g;
  var stringToPath2 = function stringToPath3(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === "%" && last !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    } else if (last === "%" && first !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    }
    var result = [];
    $replace(string, rePropName2, function(match, number, quote, subString) {
      result[result.length] = quote ? $replace(subString, reEscapeChar2, "$1") : number || match;
    });
    return result;
  };
  var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
      alias = LEGACY_ALIASES[intrinsicName];
      intrinsicName = "%" + alias[0] + "%";
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
      var value = INTRINSICS[intrinsicName];
      if (value === needsEval) {
        value = doEval(intrinsicName);
      }
      if (typeof value === "undefined" && !allowMissing) {
        throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
      }
      return {
        alias,
        name: intrinsicName,
        value
      };
    }
    throw new $SyntaxError("intrinsic " + name + " does not exist!");
  };
  getIntrinsic = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== "string" || name.length === 0) {
      throw new $TypeError("intrinsic name must be a non-empty string");
    }
    if (arguments.length > 1 && typeof allowMissing !== "boolean") {
      throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
      throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    }
    var parts = stringToPath2(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
      intrinsicBaseName = alias[0];
      $spliceApply(parts, $concat([0, 1], alias));
    }
    for (var i = 1, isOwn = true; i < parts.length; i += 1) {
      var part = parts[i];
      var first = $strSlice(part, 0, 1);
      var last = $strSlice(part, -1);
      if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
        throw new $SyntaxError("property names with quotes must have matching quotes");
      }
      if (part === "constructor" || !isOwn) {
        skipFurtherCaching = true;
      }
      intrinsicBaseName += "." + part;
      intrinsicRealName = "%" + intrinsicBaseName + "%";
      if (hasOwn(INTRINSICS, intrinsicRealName)) {
        value = INTRINSICS[intrinsicRealName];
      } else if (value != null) {
        if (!(part in value)) {
          if (!allowMissing) {
            throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
          }
          return void undefined$1;
        }
        if ($gOPD && i + 1 >= parts.length) {
          var desc = $gOPD(value, part);
          isOwn = !!desc;
          if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
            value = desc.get;
          } else {
            value = value[part];
          }
        } else {
          isOwn = hasOwn(value, part);
          value = value[part];
        }
        if (isOwn && !skipFurtherCaching) {
          INTRINSICS[intrinsicRealName] = value;
        }
      }
    }
    return value;
  };
  return getIntrinsic;
}
var callBound;
var hasRequiredCallBound;
function requireCallBound() {
  if (hasRequiredCallBound) return callBound;
  hasRequiredCallBound = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var callBindBasic = requireCallBindApplyHelpers();
  var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
  callBound = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = (
      /** @type {(this: unknown, ...args: unknown[]) => unknown} */
      GetIntrinsic(name, !!allowMissing)
    );
    if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
      return callBindBasic(
        /** @type {const} */
        [intrinsic]
      );
    }
    return intrinsic;
  };
  return callBound;
}
var sideChannelMap;
var hasRequiredSideChannelMap;
function requireSideChannelMap() {
  if (hasRequiredSideChannelMap) return sideChannelMap;
  hasRequiredSideChannelMap = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var callBound2 = /* @__PURE__ */ requireCallBound();
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var $TypeError = /* @__PURE__ */ requireType();
  var $Map = GetIntrinsic("%Map%", true);
  var $mapGet = callBound2("Map.prototype.get", true);
  var $mapSet = callBound2("Map.prototype.set", true);
  var $mapHas = callBound2("Map.prototype.has", true);
  var $mapDelete = callBound2("Map.prototype.delete", true);
  var $mapSize = callBound2("Map.prototype.size", true);
  sideChannelMap = !!$Map && /** @type {Exclude<import('.'), false>} */
  function getSideChannelMap() {
    var $m;
    var channel = {
      assert: function(key) {
        if (!channel.has(key)) {
          throw new $TypeError("Side channel does not contain " + inspect(key));
        }
      },
      "delete": function(key) {
        if ($m) {
          var result = $mapDelete($m, key);
          if ($mapSize($m) === 0) {
            $m = void 0;
          }
          return result;
        }
        return false;
      },
      get: function(key) {
        if ($m) {
          return $mapGet($m, key);
        }
      },
      has: function(key) {
        if ($m) {
          return $mapHas($m, key);
        }
        return false;
      },
      set: function(key, value) {
        if (!$m) {
          $m = new $Map();
        }
        $mapSet($m, key, value);
      }
    };
    return channel;
  };
  return sideChannelMap;
}
var sideChannelWeakmap;
var hasRequiredSideChannelWeakmap;
function requireSideChannelWeakmap() {
  if (hasRequiredSideChannelWeakmap) return sideChannelWeakmap;
  hasRequiredSideChannelWeakmap = 1;
  var GetIntrinsic = /* @__PURE__ */ requireGetIntrinsic();
  var callBound2 = /* @__PURE__ */ requireCallBound();
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var getSideChannelMap = requireSideChannelMap();
  var $TypeError = /* @__PURE__ */ requireType();
  var $WeakMap = GetIntrinsic("%WeakMap%", true);
  var $weakMapGet = callBound2("WeakMap.prototype.get", true);
  var $weakMapSet = callBound2("WeakMap.prototype.set", true);
  var $weakMapHas = callBound2("WeakMap.prototype.has", true);
  var $weakMapDelete = callBound2("WeakMap.prototype.delete", true);
  sideChannelWeakmap = $WeakMap ? (
    /** @type {Exclude<import('.'), false>} */
    function getSideChannelWeakMap() {
      var $wm;
      var $m;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        "delete": function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapDelete($wm, key);
            }
          } else if (getSideChannelMap) {
            if ($m) {
              return $m["delete"](key);
            }
          }
          return false;
        },
        get: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapGet($wm, key);
            }
          }
          return $m && $m.get(key);
        },
        has: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapHas($wm, key);
            }
          }
          return !!$m && $m.has(key);
        },
        set: function(key, value) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if (!$wm) {
              $wm = new $WeakMap();
            }
            $weakMapSet($wm, key, value);
          } else if (getSideChannelMap) {
            if (!$m) {
              $m = getSideChannelMap();
            }
            $m.set(key, value);
          }
        }
      };
      return channel;
    }
  ) : getSideChannelMap;
  return sideChannelWeakmap;
}
var sideChannel;
var hasRequiredSideChannel;
function requireSideChannel() {
  if (hasRequiredSideChannel) return sideChannel;
  hasRequiredSideChannel = 1;
  var $TypeError = /* @__PURE__ */ requireType();
  var inspect = /* @__PURE__ */ requireObjectInspect();
  var getSideChannelList = requireSideChannelList();
  var getSideChannelMap = requireSideChannelMap();
  var getSideChannelWeakMap = requireSideChannelWeakmap();
  var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
  sideChannel = function getSideChannel() {
    var $channelData;
    var channel = {
      assert: function(key) {
        if (!channel.has(key)) {
          throw new $TypeError("Side channel does not contain " + inspect(key));
        }
      },
      "delete": function(key) {
        return !!$channelData && $channelData["delete"](key);
      },
      get: function(key) {
        return $channelData && $channelData.get(key);
      },
      has: function(key) {
        return !!$channelData && $channelData.has(key);
      },
      set: function(key, value) {
        if (!$channelData) {
          $channelData = makeChannel();
        }
        $channelData.set(key, value);
      }
    };
    return channel;
  };
  return sideChannel;
}
var formats;
var hasRequiredFormats;
function requireFormats() {
  if (hasRequiredFormats) return formats;
  hasRequiredFormats = 1;
  var replace = String.prototype.replace;
  var percentTwenties = /%20/g;
  var Format = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
  formats = {
    "default": Format.RFC3986,
    formatters: {
      RFC1738: function(value) {
        return replace.call(value, percentTwenties, "+");
      },
      RFC3986: function(value) {
        return String(value);
      }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
  };
  return formats;
}
var utils;
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils;
  hasRequiredUtils = 1;
  var formats2 = /* @__PURE__ */ requireFormats();
  var getSideChannel = requireSideChannel();
  var has2 = Object.prototype.hasOwnProperty;
  var isArray2 = Array.isArray;
  var overflowChannel = getSideChannel();
  var markOverflow = function markOverflow2(obj, maxIndex) {
    overflowChannel.set(obj, maxIndex);
    return obj;
  };
  var isOverflow = function isOverflow2(obj) {
    return overflowChannel.has(obj);
  };
  var getMaxIndex = function getMaxIndex2(obj) {
    return overflowChannel.get(obj);
  };
  var setMaxIndex = function setMaxIndex2(obj, maxIndex) {
    overflowChannel.set(obj, maxIndex);
  };
  var hexTable = (function() {
    var array = [];
    for (var i = 0; i < 256; ++i) {
      array[array.length] = "%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase();
    }
    return array;
  })();
  var compactQueue = function compactQueue2(queue5) {
    while (queue5.length > 1) {
      var item = queue5.pop();
      var obj = item.obj[item.prop];
      if (isArray2(obj)) {
        var compacted = [];
        for (var j = 0; j < obj.length; ++j) {
          if (typeof obj[j] !== "undefined") {
            compacted[compacted.length] = obj[j];
          }
        }
        item.obj[item.prop] = compacted;
      }
    }
  };
  var arrayToObject2 = function arrayToObject3(source, options) {
    var obj = options && options.plainObjects ? { __proto__: null } : {};
    for (var i = 0; i < source.length; ++i) {
      if (typeof source[i] !== "undefined") {
        obj[i] = source[i];
      }
    }
    return obj;
  };
  var merge2 = function merge3(target, source, options) {
    if (!source) {
      return target;
    }
    if (typeof source !== "object" && typeof source !== "function") {
      if (isArray2(target)) {
        var nextIndex = target.length;
        if (options && typeof options.arrayLimit === "number" && nextIndex > options.arrayLimit) {
          return markOverflow(arrayToObject2(target.concat(source), options), nextIndex);
        }
        target[nextIndex] = source;
      } else if (target && typeof target === "object") {
        if (isOverflow(target)) {
          var newIndex = getMaxIndex(target) + 1;
          target[newIndex] = source;
          setMaxIndex(target, newIndex);
        } else if (options && options.strictMerge) {
          return [target, source];
        } else if (options && (options.plainObjects || options.allowPrototypes) || !has2.call(Object.prototype, source)) {
          target[source] = true;
        }
      } else {
        return [target, source];
      }
      return target;
    }
    if (!target || typeof target !== "object") {
      if (isOverflow(source)) {
        var sourceKeys = Object.keys(source);
        var result = options && options.plainObjects ? { __proto__: null, 0: target } : { 0: target };
        for (var m2 = 0; m2 < sourceKeys.length; m2++) {
          var oldKey = parseInt(sourceKeys[m2], 10);
          result[oldKey + 1] = source[sourceKeys[m2]];
        }
        return markOverflow(result, getMaxIndex(source) + 1);
      }
      var combined = [target].concat(source);
      if (options && typeof options.arrayLimit === "number" && combined.length > options.arrayLimit) {
        return markOverflow(arrayToObject2(combined, options), combined.length - 1);
      }
      return combined;
    }
    var mergeTarget = target;
    if (isArray2(target) && !isArray2(source)) {
      mergeTarget = arrayToObject2(target, options);
    }
    if (isArray2(target) && isArray2(source)) {
      source.forEach(function(item, i) {
        if (has2.call(target, i)) {
          var targetItem = target[i];
          if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
            target[i] = merge3(targetItem, item, options);
          } else {
            target[target.length] = item;
          }
        } else {
          target[i] = item;
        }
      });
      return target;
    }
    return Object.keys(source).reduce(function(acc, key) {
      var value = source[key];
      if (has2.call(acc, key)) {
        acc[key] = merge3(acc[key], value, options);
      } else {
        acc[key] = value;
      }
      if (isOverflow(source) && !isOverflow(acc)) {
        markOverflow(acc, getMaxIndex(source));
      }
      if (isOverflow(acc)) {
        var keyNum = parseInt(key, 10);
        if (String(keyNum) === key && keyNum >= 0 && keyNum > getMaxIndex(acc)) {
          setMaxIndex(acc, keyNum);
        }
      }
      return acc;
    }, mergeTarget);
  };
  var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function(acc, key) {
      acc[key] = source[key];
      return acc;
    }, target);
  };
  var decode = function(str, defaultDecoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, " ");
    if (charset === "iso-8859-1") {
      return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    try {
      return decodeURIComponent(strWithoutPlus);
    } catch (e) {
      return strWithoutPlus;
    }
  };
  var limit = 1024;
  var encode2 = function encode3(str, defaultEncoder, charset, kind, format) {
    if (str.length === 0) {
      return str;
    }
    var string = str;
    if (typeof str === "symbol") {
      string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== "string") {
      string = String(str);
    }
    if (charset === "iso-8859-1") {
      return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
        return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
      });
    }
    var out = "";
    for (var j = 0; j < string.length; j += limit) {
      var segment = string.length >= limit ? string.slice(j, j + limit) : string;
      var arr = [];
      for (var i = 0; i < segment.length; ++i) {
        var c2 = segment.charCodeAt(i);
        if (c2 === 45 || c2 === 46 || c2 === 95 || c2 === 126 || c2 >= 48 && c2 <= 57 || c2 >= 65 && c2 <= 90 || c2 >= 97 && c2 <= 122 || format === formats2.RFC1738 && (c2 === 40 || c2 === 41)) {
          arr[arr.length] = segment.charAt(i);
          continue;
        }
        if (c2 < 128) {
          arr[arr.length] = hexTable[c2];
          continue;
        }
        if (c2 < 2048) {
          arr[arr.length] = hexTable[192 | c2 >> 6] + hexTable[128 | c2 & 63];
          continue;
        }
        if (c2 < 55296 || c2 >= 57344) {
          arr[arr.length] = hexTable[224 | c2 >> 12] + hexTable[128 | c2 >> 6 & 63] + hexTable[128 | c2 & 63];
          continue;
        }
        i += 1;
        c2 = 65536 + ((c2 & 1023) << 10 | segment.charCodeAt(i) & 1023);
        arr[arr.length] = hexTable[240 | c2 >> 18] + hexTable[128 | c2 >> 12 & 63] + hexTable[128 | c2 >> 6 & 63] + hexTable[128 | c2 & 63];
      }
      out += arr.join("");
    }
    return out;
  };
  var compact = function compact2(value) {
    var queue5 = [{ obj: { o: value }, prop: "o" }];
    var refs = [];
    for (var i = 0; i < queue5.length; ++i) {
      var item = queue5[i];
      var obj = item.obj[item.prop];
      var keys2 = Object.keys(obj);
      for (var j = 0; j < keys2.length; ++j) {
        var key = keys2[j];
        var val = obj[key];
        if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
          queue5[queue5.length] = { obj, prop: key };
          refs[refs.length] = val;
        }
      }
    }
    compactQueue(queue5);
    return value;
  };
  var isRegExp2 = function isRegExp3(obj) {
    return Object.prototype.toString.call(obj) === "[object RegExp]";
  };
  var isBuffer2 = function isBuffer3(obj) {
    if (!obj || typeof obj !== "object") {
      return false;
    }
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
  };
  var combine = function combine2(a, b2, arrayLimit, plainObjects) {
    if (isOverflow(a)) {
      var newIndex = getMaxIndex(a) + 1;
      a[newIndex] = b2;
      setMaxIndex(a, newIndex);
      return a;
    }
    var result = [].concat(a, b2);
    if (result.length > arrayLimit) {
      return markOverflow(arrayToObject2(result, { plainObjects }), result.length - 1);
    }
    return result;
  };
  var maybeMap = function maybeMap2(val, fn) {
    if (isArray2(val)) {
      var mapped = [];
      for (var i = 0; i < val.length; i += 1) {
        mapped[mapped.length] = fn(val[i]);
      }
      return mapped;
    }
    return fn(val);
  };
  utils = {
    arrayToObject: arrayToObject2,
    assign,
    combine,
    compact,
    decode,
    encode: encode2,
    isBuffer: isBuffer2,
    isOverflow,
    isRegExp: isRegExp2,
    markOverflow,
    maybeMap,
    merge: merge2
  };
  return utils;
}
var stringify_1;
var hasRequiredStringify;
function requireStringify() {
  if (hasRequiredStringify) return stringify_1;
  hasRequiredStringify = 1;
  var getSideChannel = requireSideChannel();
  var utils2 = /* @__PURE__ */ requireUtils();
  var formats2 = /* @__PURE__ */ requireFormats();
  var has2 = Object.prototype.hasOwnProperty;
  var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
      return prefix + "[]";
    },
    comma: "comma",
    indices: function indices(prefix, key) {
      return prefix + "[" + key + "]";
    },
    repeat: function repeat(prefix) {
      return prefix;
    }
  };
  var isArray2 = Array.isArray;
  var push = Array.prototype.push;
  var pushToArray = function(arr, valueOrArray) {
    push.apply(arr, isArray2(valueOrArray) ? valueOrArray : [valueOrArray]);
  };
  var toISO = Date.prototype.toISOString;
  var defaultFormat = formats2["default"];
  var defaults2 = {
    addQueryPrefix: false,
    allowDots: false,
    allowEmptyArrays: false,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: false,
    commaRoundTrip: false,
    delimiter: "&",
    encode: true,
    encodeDotInKeys: false,
    encoder: utils2.encode,
    encodeValuesOnly: false,
    filter: void 0,
    format: defaultFormat,
    formatter: formats2.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
      return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
  };
  var isNonNullishPrimitive = function isNonNullishPrimitive2(v2) {
    return typeof v2 === "string" || typeof v2 === "number" || typeof v2 === "boolean" || typeof v2 === "symbol" || typeof v2 === "bigint";
  };
  var sentinel = {};
  var stringify = function stringify2(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter2, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel2) {
    var obj = object;
    var tmpSc = sideChannel2;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
      var pos = tmpSc.get(object);
      step += 1;
      if (typeof pos !== "undefined") {
        if (pos === step) {
          throw new RangeError("Cyclic object value");
        } else {
          findFlag = true;
        }
      }
      if (typeof tmpSc.get(sentinel) === "undefined") {
        step = 0;
      }
    }
    if (typeof filter2 === "function") {
      obj = filter2(prefix, obj);
    } else if (obj instanceof Date) {
      obj = serializeDate(obj);
    } else if (generateArrayPrefix === "comma" && isArray2(obj)) {
      obj = utils2.maybeMap(obj, function(value2) {
        if (value2 instanceof Date) {
          return serializeDate(value2);
        }
        return value2;
      });
    }
    if (obj === null) {
      if (strictNullHandling) {
        return encoder && !encodeValuesOnly ? encoder(prefix, defaults2.encoder, charset, "key", format) : prefix;
      }
      obj = "";
    }
    if (isNonNullishPrimitive(obj) || utils2.isBuffer(obj)) {
      if (encoder) {
        var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults2.encoder, charset, "key", format);
        return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults2.encoder, charset, "value", format))];
      }
      return [formatter(prefix) + "=" + formatter(String(obj))];
    }
    var values = [];
    if (typeof obj === "undefined") {
      return values;
    }
    var objKeys;
    if (generateArrayPrefix === "comma" && isArray2(obj)) {
      if (encodeValuesOnly && encoder) {
        obj = utils2.maybeMap(obj, encoder);
      }
      objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
    } else if (isArray2(filter2)) {
      objKeys = filter2;
    } else {
      var keys2 = Object.keys(obj);
      objKeys = sort ? keys2.sort(sort) : keys2;
    }
    var encodedPrefix = encodeDotInKeys ? String(prefix).replace(/\./g, "%2E") : String(prefix);
    var adjustedPrefix = commaRoundTrip && isArray2(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
    if (allowEmptyArrays && isArray2(obj) && obj.length === 0) {
      return adjustedPrefix + "[]";
    }
    for (var j = 0; j < objKeys.length; ++j) {
      var key = objKeys[j];
      var value = typeof key === "object" && key && typeof key.value !== "undefined" ? key.value : obj[key];
      if (skipNulls && value === null) {
        continue;
      }
      var encodedKey = allowDots && encodeDotInKeys ? String(key).replace(/\./g, "%2E") : String(key);
      var keyPrefix = isArray2(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
      sideChannel2.set(object, step);
      var valueSideChannel = getSideChannel();
      valueSideChannel.set(sentinel, sideChannel2);
      pushToArray(values, stringify2(
        value,
        keyPrefix,
        generateArrayPrefix,
        commaRoundTrip,
        allowEmptyArrays,
        strictNullHandling,
        skipNulls,
        encodeDotInKeys,
        generateArrayPrefix === "comma" && encodeValuesOnly && isArray2(obj) ? null : encoder,
        filter2,
        sort,
        allowDots,
        serializeDate,
        format,
        formatter,
        encodeValuesOnly,
        charset,
        valueSideChannel
      ));
    }
    return values;
  };
  var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
    if (!opts) {
      return defaults2;
    }
    if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    }
    if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
      throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    }
    if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
      throw new TypeError("Encoder has to be a function.");
    }
    var charset = opts.charset || defaults2.charset;
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    }
    var format = formats2["default"];
    if (typeof opts.format !== "undefined") {
      if (!has2.call(formats2.formatters, opts.format)) {
        throw new TypeError("Unknown format option provided.");
      }
      format = opts.format;
    }
    var formatter = formats2.formatters[format];
    var filter2 = defaults2.filter;
    if (typeof opts.filter === "function" || isArray2(opts.filter)) {
      filter2 = opts.filter;
    }
    var arrayFormat;
    if (opts.arrayFormat in arrayPrefixGenerators) {
      arrayFormat = opts.arrayFormat;
    } else if ("indices" in opts) {
      arrayFormat = opts.indices ? "indices" : "repeat";
    } else {
      arrayFormat = defaults2.arrayFormat;
    }
    if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
      throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    }
    var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults2.allowDots : !!opts.allowDots;
    return {
      addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults2.addQueryPrefix,
      allowDots,
      allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults2.allowEmptyArrays,
      arrayFormat,
      charset,
      charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults2.charsetSentinel,
      commaRoundTrip: !!opts.commaRoundTrip,
      delimiter: typeof opts.delimiter === "undefined" ? defaults2.delimiter : opts.delimiter,
      encode: typeof opts.encode === "boolean" ? opts.encode : defaults2.encode,
      encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults2.encodeDotInKeys,
      encoder: typeof opts.encoder === "function" ? opts.encoder : defaults2.encoder,
      encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults2.encodeValuesOnly,
      filter: filter2,
      format,
      formatter,
      serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults2.serializeDate,
      skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults2.skipNulls,
      sort: typeof opts.sort === "function" ? opts.sort : null,
      strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults2.strictNullHandling
    };
  };
  stringify_1 = function(object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);
    var objKeys;
    var filter2;
    if (typeof options.filter === "function") {
      filter2 = options.filter;
      obj = filter2("", obj);
    } else if (isArray2(options.filter)) {
      filter2 = options.filter;
      objKeys = filter2;
    }
    var keys2 = [];
    if (typeof obj !== "object" || obj === null) {
      return "";
    }
    var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
    var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
    if (!objKeys) {
      objKeys = Object.keys(obj);
    }
    if (options.sort) {
      objKeys.sort(options.sort);
    }
    var sideChannel2 = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
      var key = objKeys[i];
      var value = obj[key];
      if (options.skipNulls && value === null) {
        continue;
      }
      pushToArray(keys2, stringify(
        value,
        key,
        generateArrayPrefix,
        commaRoundTrip,
        options.allowEmptyArrays,
        options.strictNullHandling,
        options.skipNulls,
        options.encodeDotInKeys,
        options.encode ? options.encoder : null,
        options.filter,
        options.sort,
        options.allowDots,
        options.serializeDate,
        options.format,
        options.formatter,
        options.encodeValuesOnly,
        options.charset,
        sideChannel2
      ));
    }
    var joined = keys2.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? "?" : "";
    if (options.charsetSentinel) {
      if (options.charset === "iso-8859-1") {
        prefix += "utf8=%26%2310003%3B&";
      } else {
        prefix += "utf8=%E2%9C%93&";
      }
    }
    return joined.length > 0 ? prefix + joined : "";
  };
  return stringify_1;
}
var parse;
var hasRequiredParse;
function requireParse() {
  if (hasRequiredParse) return parse;
  hasRequiredParse = 1;
  var utils2 = /* @__PURE__ */ requireUtils();
  var has2 = Object.prototype.hasOwnProperty;
  var isArray2 = Array.isArray;
  var defaults2 = {
    allowDots: false,
    allowEmptyArrays: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: false,
    comma: false,
    decodeDotInKeys: false,
    decoder: utils2.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1e3,
    parseArrays: true,
    plainObjects: false,
    strictDepth: false,
    strictMerge: true,
    strictNullHandling: false,
    throwOnLimitExceeded: false
  };
  var interpretNumericEntities = function(str) {
    return str.replace(/&#(\d+);/g, function($0, numberStr) {
      return String.fromCharCode(parseInt(numberStr, 10));
    });
  };
  var parseArrayValue = function(val, options, currentArrayLength) {
    if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
      return val.split(",");
    }
    if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) {
      throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
    }
    return val;
  };
  var isoSentinel = "utf8=%26%2310003%3B";
  var charsetSentinel = "utf8=%E2%9C%93";
  var parseValues = function parseQueryStringValues(str, options) {
    var obj = { __proto__: null };
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
    cleanStr = cleanStr.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
    var parts = cleanStr.split(
      options.delimiter,
      options.throwOnLimitExceeded ? limit + 1 : limit
    );
    if (options.throwOnLimitExceeded && parts.length > limit) {
      throw new RangeError("Parameter limit exceeded. Only " + limit + " parameter" + (limit === 1 ? "" : "s") + " allowed.");
    }
    var skipIndex = -1;
    var i;
    var charset = options.charset;
    if (options.charsetSentinel) {
      for (i = 0; i < parts.length; ++i) {
        if (parts[i].indexOf("utf8=") === 0) {
          if (parts[i] === charsetSentinel) {
            charset = "utf-8";
          } else if (parts[i] === isoSentinel) {
            charset = "iso-8859-1";
          }
          skipIndex = i;
          i = parts.length;
        }
      }
    }
    for (i = 0; i < parts.length; ++i) {
      if (i === skipIndex) {
        continue;
      }
      var part = parts[i];
      var bracketEqualsPos = part.indexOf("]=");
      var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
      var key;
      var val;
      if (pos === -1) {
        key = options.decoder(part, defaults2.decoder, charset, "key");
        val = options.strictNullHandling ? null : "";
      } else {
        key = options.decoder(part.slice(0, pos), defaults2.decoder, charset, "key");
        if (key !== null) {
          val = utils2.maybeMap(
            parseArrayValue(
              part.slice(pos + 1),
              options,
              isArray2(obj[key]) ? obj[key].length : 0
            ),
            function(encodedVal) {
              return options.decoder(encodedVal, defaults2.decoder, charset, "value");
            }
          );
        }
      }
      if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
        val = interpretNumericEntities(String(val));
      }
      if (part.indexOf("[]=") > -1) {
        val = isArray2(val) ? [val] : val;
      }
      if (options.comma && isArray2(val) && val.length > options.arrayLimit) {
        if (options.throwOnLimitExceeded) {
          throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
        }
        val = utils2.combine([], val, options.arrayLimit, options.plainObjects);
      }
      if (key !== null) {
        var existing = has2.call(obj, key);
        if (existing && (options.duplicates === "combine" || part.indexOf("[]=") > -1)) {
          obj[key] = utils2.combine(
            obj[key],
            val,
            options.arrayLimit,
            options.plainObjects
          );
        } else if (!existing || options.duplicates === "last") {
          obj[key] = val;
        }
      }
    }
    return obj;
  };
  var parseObject = function(chain, val, options, valuesParsed) {
    var currentArrayLength = 0;
    if (chain.length > 0 && chain[chain.length - 1] === "[]") {
      var parentKey = chain.slice(0, -1).join("");
      currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
    }
    var leaf = valuesParsed ? val : parseArrayValue(val, options, currentArrayLength);
    for (var i = chain.length - 1; i >= 0; --i) {
      var obj;
      var root2 = chain[i];
      if (root2 === "[]" && options.parseArrays) {
        if (utils2.isOverflow(leaf)) {
          obj = leaf;
        } else {
          obj = options.allowEmptyArrays && (leaf === "" || options.strictNullHandling && leaf === null) ? [] : utils2.combine(
            [],
            leaf,
            options.arrayLimit,
            options.plainObjects
          );
        }
      } else {
        obj = options.plainObjects ? { __proto__: null } : {};
        var cleanRoot = root2.charAt(0) === "[" && root2.charAt(root2.length - 1) === "]" ? root2.slice(1, -1) : root2;
        var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
        var index = parseInt(decodedRoot, 10);
        var isValidArrayIndex = !isNaN(index) && root2 !== decodedRoot && String(index) === decodedRoot && index >= 0 && options.parseArrays;
        if (!options.parseArrays && decodedRoot === "") {
          obj = { 0: leaf };
        } else if (isValidArrayIndex && index < options.arrayLimit) {
          obj = [];
          obj[index] = leaf;
        } else if (isValidArrayIndex && options.throwOnLimitExceeded) {
          throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
        } else if (isValidArrayIndex) {
          obj[index] = leaf;
          utils2.markOverflow(obj, index);
        } else if (decodedRoot !== "__proto__") {
          obj[decodedRoot] = leaf;
        }
      }
      leaf = obj;
    }
    return leaf;
  };
  var splitKeyIntoSegments = function splitKeyIntoSegments2(givenKey, options) {
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
    if (options.depth <= 0) {
      if (!options.plainObjects && has2.call(Object.prototype, key)) {
        if (!options.allowPrototypes) {
          return;
        }
      }
      return [key];
    }
    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;
    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;
    var keys2 = [];
    if (parent) {
      if (!options.plainObjects && has2.call(Object.prototype, parent)) {
        if (!options.allowPrototypes) {
          return;
        }
      }
      keys2[keys2.length] = parent;
    }
    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
      i += 1;
      var segmentContent = segment[1].slice(1, -1);
      if (!options.plainObjects && has2.call(Object.prototype, segmentContent)) {
        if (!options.allowPrototypes) {
          return;
        }
      }
      keys2[keys2.length] = segment[1];
    }
    if (segment) {
      if (options.strictDepth === true) {
        throw new RangeError("Input depth exceeded depth option of " + options.depth + " and strictDepth is true");
      }
      keys2[keys2.length] = "[" + key.slice(segment.index) + "]";
    }
    return keys2;
  };
  var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
      return;
    }
    var keys2 = splitKeyIntoSegments(givenKey, options);
    if (!keys2) {
      return;
    }
    return parseObject(keys2, val, options, valuesParsed);
  };
  var normalizeParseOptions = function normalizeParseOptions2(opts) {
    if (!opts) {
      return defaults2;
    }
    if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
      throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    }
    if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
      throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    }
    if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
      throw new TypeError("Decoder has to be a function.");
    }
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    }
    if (typeof opts.throwOnLimitExceeded !== "undefined" && typeof opts.throwOnLimitExceeded !== "boolean") {
      throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
    }
    var charset = typeof opts.charset === "undefined" ? defaults2.charset : opts.charset;
    var duplicates = typeof opts.duplicates === "undefined" ? defaults2.duplicates : opts.duplicates;
    if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
      throw new TypeError("The duplicates option must be either combine, first, or last");
    }
    var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults2.allowDots : !!opts.allowDots;
    return {
      allowDots,
      allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults2.allowEmptyArrays,
      allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults2.allowPrototypes,
      allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults2.allowSparse,
      arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults2.arrayLimit,
      charset,
      charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults2.charsetSentinel,
      comma: typeof opts.comma === "boolean" ? opts.comma : defaults2.comma,
      decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults2.decodeDotInKeys,
      decoder: typeof opts.decoder === "function" ? opts.decoder : defaults2.decoder,
      delimiter: typeof opts.delimiter === "string" || utils2.isRegExp(opts.delimiter) ? opts.delimiter : defaults2.delimiter,
      // eslint-disable-next-line no-implicit-coercion, no-extra-parens
      depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults2.depth,
      duplicates,
      ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
      interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults2.interpretNumericEntities,
      parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults2.parameterLimit,
      parseArrays: opts.parseArrays !== false,
      plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults2.plainObjects,
      strictDepth: typeof opts.strictDepth === "boolean" ? !!opts.strictDepth : defaults2.strictDepth,
      strictMerge: typeof opts.strictMerge === "boolean" ? !!opts.strictMerge : defaults2.strictMerge,
      strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults2.strictNullHandling,
      throwOnLimitExceeded: typeof opts.throwOnLimitExceeded === "boolean" ? opts.throwOnLimitExceeded : false
    };
  };
  parse = function(str, opts) {
    var options = normalizeParseOptions(opts);
    if (str === "" || str === null || typeof str === "undefined") {
      return options.plainObjects ? { __proto__: null } : {};
    }
    var tempObj = typeof str === "string" ? parseValues(str, options) : str;
    var obj = options.plainObjects ? { __proto__: null } : {};
    var keys2 = Object.keys(tempObj);
    for (var i = 0; i < keys2.length; ++i) {
      var key = keys2[i];
      var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
      obj = utils2.merge(obj, newObj, options);
    }
    if (options.allowSparse === true) {
      return obj;
    }
    return utils2.compact(obj);
  };
  return parse;
}
var lib;
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1;
  var stringify = /* @__PURE__ */ requireStringify();
  var parse2 = /* @__PURE__ */ requireParse();
  var formats2 = /* @__PURE__ */ requireFormats();
  lib = {
    formats: formats2,
    parse: parse2,
    stringify
  };
  return lib;
}
var libExports = /* @__PURE__ */ requireLib();
var Config = class {
  constructor(defaults2) {
    this.config = {};
    this.defaults = defaults2;
  }
  extend(defaults2) {
    if (defaults2) {
      this.defaults = { ...this.defaults, ...defaults2 };
    }
    return this;
  }
  replace(newConfig) {
    this.config = newConfig;
  }
  get(key) {
    return has(this.config, key) ? get$1(this.config, key) : get$1(this.defaults, key);
  }
  set(keyOrValues, value) {
    if (typeof keyOrValues === "string") {
      set(this.config, keyOrValues, value);
    } else {
      Object.entries(keyOrValues).forEach(([key, val]) => {
        set(this.config, key, val);
      });
    }
  }
};
var config$1 = new Config({
  form: {
    recentlySuccessfulDuration: 2e3,
    forceIndicesArrayFormatInFormData: true,
    withAllErrors: false
  },
  future: {
    preserveEqualProps: false,
    useDataInertiaHeadAttribute: false,
    useDialogForErrorModal: false,
    useScriptElementForInitialPage: false
  },
  prefetch: {
    cacheFor: 3e4,
    hoverDelay: 75
  }
});
function debounce(fn, delay) {
  let timeoutID;
  return function(...args) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => fn.apply(this, args), delay);
  };
}
function fireEvent(name, options) {
  return document.dispatchEvent(new CustomEvent(`inertia:${name}`, options));
}
var fireBeforeEvent = (visit) => {
  return fireEvent("before", { cancelable: true, detail: { visit } });
};
var fireErrorEvent = (errors) => {
  return fireEvent("error", { detail: { errors } });
};
var fireExceptionEvent = (exception) => {
  return fireEvent("exception", { cancelable: true, detail: { exception } });
};
var fireFinishEvent = (visit) => {
  return fireEvent("finish", { detail: { visit } });
};
var fireInvalidEvent = (response) => {
  return fireEvent("invalid", { cancelable: true, detail: { response } });
};
var fireBeforeUpdateEvent = (page2) => {
  return fireEvent("beforeUpdate", { detail: { page: page2 } });
};
var fireNavigateEvent = (page2) => {
  return fireEvent("navigate", { detail: { page: page2 } });
};
var fireProgressEvent = (progress3) => {
  return fireEvent("progress", { detail: { progress: progress3 } });
};
var fireStartEvent = (visit) => {
  return fireEvent("start", { detail: { visit } });
};
var fireSuccessEvent = (page2) => {
  return fireEvent("success", { detail: { page: page2 } });
};
var firePrefetchedEvent = (response, visit) => {
  return fireEvent("prefetched", { detail: { fetchedAt: Date.now(), response: response.data, visit } });
};
var firePrefetchingEvent = (visit) => {
  return fireEvent("prefetching", { detail: { visit } });
};
var fireFlashEvent = (flash) => {
  return fireEvent("flash", { detail: { flash } });
};
var SessionStorage = class {
  static set(key, value) {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    }
  }
  static get(key) {
    if (typeof window !== "undefined") {
      return JSON.parse(window.sessionStorage.getItem(key) || "null");
    }
  }
  static merge(key, value) {
    const existing = this.get(key);
    if (existing === null) {
      this.set(key, value);
    } else {
      this.set(key, { ...existing, ...value });
    }
  }
  static remove(key) {
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem(key);
    }
  }
  static removeNested(key, nestedKey) {
    const existing = this.get(key);
    if (existing !== null) {
      delete existing[nestedKey];
      this.set(key, existing);
    }
  }
  static exists(key) {
    try {
      return this.get(key) !== null;
    } catch (error) {
      return false;
    }
  }
  static clear() {
    if (typeof window !== "undefined") {
      window.sessionStorage.clear();
    }
  }
};
SessionStorage.locationVisitKey = "inertiaLocationVisit";
var encryptHistory = async (data) => {
  if (typeof window === "undefined") {
    throw new Error("Unable to encrypt history");
  }
  const iv = getIv();
  const storedKey = await getKeyFromSessionStorage();
  const key = await getOrCreateKey(storedKey);
  if (!key) {
    throw new Error("Unable to encrypt history");
  }
  const encrypted = await encryptData(iv, key, data);
  return encrypted;
};
var historySessionStorageKeys = {
  key: "historyKey",
  iv: "historyIv"
};
var decryptHistory = async (data) => {
  const iv = getIv();
  const storedKey = await getKeyFromSessionStorage();
  if (!storedKey) {
    throw new Error("Unable to decrypt history");
  }
  return await decryptData(iv, storedKey, data);
};
var encryptData = async (iv, key, data) => {
  if (typeof window === "undefined") {
    throw new Error("Unable to encrypt history");
  }
  if (typeof window.crypto.subtle === "undefined") {
    console.warn("Encryption is not supported in this environment. SSL is required.");
    return Promise.resolve(data);
  }
  const textEncoder = new TextEncoder();
  const str = JSON.stringify(data);
  const encoded = new Uint8Array(str.length * 3);
  const result = textEncoder.encodeInto(str, encoded);
  return window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv
    },
    key,
    encoded.subarray(0, result.written)
  );
};
var decryptData = async (iv, key, data) => {
  if (typeof window.crypto.subtle === "undefined") {
    console.warn("Decryption is not supported in this environment. SSL is required.");
    return Promise.resolve(data);
  }
  const decrypted = await window.crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv
    },
    key,
    data
  );
  return JSON.parse(new TextDecoder().decode(decrypted));
};
var getIv = () => {
  const ivString = SessionStorage.get(historySessionStorageKeys.iv);
  if (ivString) {
    return new Uint8Array(ivString);
  }
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  SessionStorage.set(historySessionStorageKeys.iv, Array.from(iv));
  return iv;
};
var createKey = async () => {
  if (typeof window.crypto.subtle === "undefined") {
    console.warn("Encryption is not supported in this environment. SSL is required.");
    return Promise.resolve(null);
  }
  return window.crypto.subtle.generateKey(
    {
      name: "AES-GCM",
      length: 256
    },
    true,
    ["encrypt", "decrypt"]
  );
};
var saveKey = async (key) => {
  if (typeof window.crypto.subtle === "undefined") {
    console.warn("Encryption is not supported in this environment. SSL is required.");
    return Promise.resolve();
  }
  const keyData = await window.crypto.subtle.exportKey("raw", key);
  SessionStorage.set(historySessionStorageKeys.key, Array.from(new Uint8Array(keyData)));
};
var getOrCreateKey = async (key) => {
  if (key) {
    return key;
  }
  const newKey = await createKey();
  if (!newKey) {
    return null;
  }
  await saveKey(newKey);
  return newKey;
};
var getKeyFromSessionStorage = async () => {
  const stringKey = SessionStorage.get(historySessionStorageKeys.key);
  if (!stringKey) {
    return null;
  }
  const key = await window.crypto.subtle.importKey(
    "raw",
    new Uint8Array(stringKey),
    {
      name: "AES-GCM",
      length: 256
    },
    true,
    ["encrypt", "decrypt"]
  );
  return key;
};
var objectsAreEqual = (obj1, obj2, excludeKeys) => {
  if (obj1 === obj2) {
    return true;
  }
  for (const key in obj1) {
    if (excludeKeys.includes(key)) {
      continue;
    }
    if (obj1[key] === obj2[key]) {
      continue;
    }
    if (!compareValues(obj1[key], obj2[key])) {
      return false;
    }
  }
  for (const key in obj2) {
    if (excludeKeys.includes(key)) {
      continue;
    }
    if (!(key in obj1)) {
      return false;
    }
  }
  return true;
};
var compareValues = (value1, value2) => {
  switch (typeof value1) {
    case "object":
      return objectsAreEqual(value1, value2, []);
    case "function":
      return value1.toString() === value2.toString();
    default:
      return value1 === value2;
  }
};
var conversionMap = {
  ms: 1,
  s: 1e3,
  m: 1e3 * 60,
  h: 1e3 * 60 * 60,
  d: 1e3 * 60 * 60 * 24
};
var timeToMs = (time) => {
  if (typeof time === "number") {
    return time;
  }
  for (const [unit, conversion] of Object.entries(conversionMap)) {
    if (time.endsWith(unit)) {
      return parseFloat(time) * conversion;
    }
  }
  return parseInt(time);
};
var PrefetchedRequests = class {
  constructor() {
    this.cached = [];
    this.inFlightRequests = [];
    this.removalTimers = [];
    this.currentUseId = null;
  }
  add(params, sendFunc, { cacheFor, cacheTags }) {
    const inFlight = this.findInFlight(params);
    if (inFlight) {
      return Promise.resolve();
    }
    const existing = this.findCached(params);
    if (!params.fresh && existing && existing.staleTimestamp > Date.now()) {
      return Promise.resolve();
    }
    const [stale, prefetchExpiresIn] = this.extractStaleValues(cacheFor);
    const promise = new Promise((resolve, reject) => {
      sendFunc({
        ...params,
        onCancel: () => {
          this.remove(params);
          params.onCancel();
          reject();
        },
        onError: (error) => {
          this.remove(params);
          params.onError(error);
          reject();
        },
        onPrefetching(visitParams) {
          params.onPrefetching(visitParams);
        },
        onPrefetched(response, visit) {
          params.onPrefetched(response, visit);
        },
        onPrefetchResponse(response) {
          resolve(response);
        },
        onPrefetchError(error) {
          prefetchedRequests.removeFromInFlight(params);
          reject(error);
        }
      });
    }).then((response) => {
      this.remove(params);
      const pageResponse = response.getPageResponse();
      page.mergeOncePropsIntoResponse(pageResponse);
      this.cached.push({
        params: { ...params },
        staleTimestamp: Date.now() + stale,
        expiresAt: Date.now() + prefetchExpiresIn,
        response: promise,
        singleUse: prefetchExpiresIn === 0,
        timestamp: Date.now(),
        inFlight: false,
        tags: Array.isArray(cacheTags) ? cacheTags : [cacheTags]
      });
      const oncePropExpiresIn = this.getShortestOncePropTtl(pageResponse);
      this.scheduleForRemoval(
        params,
        oncePropExpiresIn ? Math.min(prefetchExpiresIn, oncePropExpiresIn) : prefetchExpiresIn
      );
      this.removeFromInFlight(params);
      response.handlePrefetch();
      return response;
    });
    this.inFlightRequests.push({
      params: { ...params },
      response: promise,
      staleTimestamp: null,
      inFlight: true
    });
    return promise;
  }
  removeAll() {
    this.cached = [];
    this.removalTimers.forEach((removalTimer) => {
      clearTimeout(removalTimer.timer);
    });
    this.removalTimers = [];
  }
  removeByTags(tags) {
    this.cached = this.cached.filter((prefetched) => {
      return !prefetched.tags.some((tag) => tags.includes(tag));
    });
  }
  remove(params) {
    this.cached = this.cached.filter((prefetched) => {
      return !this.paramsAreEqual(prefetched.params, params);
    });
    this.clearTimer(params);
  }
  removeFromInFlight(params) {
    this.inFlightRequests = this.inFlightRequests.filter((prefetching) => {
      return !this.paramsAreEqual(prefetching.params, params);
    });
  }
  extractStaleValues(cacheFor) {
    const [stale, expires] = this.cacheForToStaleAndExpires(cacheFor);
    return [timeToMs(stale), timeToMs(expires)];
  }
  cacheForToStaleAndExpires(cacheFor) {
    if (!Array.isArray(cacheFor)) {
      return [cacheFor, cacheFor];
    }
    switch (cacheFor.length) {
      case 0:
        return [0, 0];
      case 1:
        return [cacheFor[0], cacheFor[0]];
      default:
        return [cacheFor[0], cacheFor[1]];
    }
  }
  clearTimer(params) {
    const timer = this.removalTimers.find((removalTimer) => {
      return this.paramsAreEqual(removalTimer.params, params);
    });
    if (timer) {
      clearTimeout(timer.timer);
      this.removalTimers = this.removalTimers.filter((removalTimer) => removalTimer !== timer);
    }
  }
  scheduleForRemoval(params, expiresIn) {
    if (typeof window === "undefined") {
      return;
    }
    this.clearTimer(params);
    if (expiresIn > 0) {
      const timer = window.setTimeout(() => this.remove(params), expiresIn);
      this.removalTimers.push({
        params,
        timer
      });
    }
  }
  get(params) {
    return this.findCached(params) || this.findInFlight(params);
  }
  use(prefetched, params) {
    const id = `${params.url.pathname}-${Date.now()}-${Math.random().toString(36).substring(7)}`;
    this.currentUseId = id;
    return prefetched.response.then((response) => {
      if (this.currentUseId !== id) {
        return;
      }
      response.mergeParams({ ...params, onPrefetched: () => {
      } });
      this.removeSingleUseItems(params);
      return response.handle();
    });
  }
  removeSingleUseItems(params) {
    this.cached = this.cached.filter((prefetched) => {
      if (!this.paramsAreEqual(prefetched.params, params)) {
        return true;
      }
      return !prefetched.singleUse;
    });
  }
  findCached(params) {
    return this.cached.find((prefetched) => {
      return this.paramsAreEqual(prefetched.params, params);
    }) || null;
  }
  findInFlight(params) {
    return this.inFlightRequests.find((prefetched) => {
      return this.paramsAreEqual(prefetched.params, params);
    }) || null;
  }
  withoutPurposePrefetchHeader(params) {
    const newParams = cloneDeep(params);
    if (newParams.headers["Purpose"] === "prefetch") {
      delete newParams.headers["Purpose"];
    }
    return newParams;
  }
  paramsAreEqual(params1, params2) {
    return objectsAreEqual(
      this.withoutPurposePrefetchHeader(params1),
      this.withoutPurposePrefetchHeader(params2),
      [
        "showProgress",
        "replace",
        "prefetch",
        "preserveScroll",
        "preserveState",
        "onBefore",
        "onBeforeUpdate",
        "onStart",
        "onProgress",
        "onFinish",
        "onCancel",
        "onSuccess",
        "onError",
        "onFlash",
        "onPrefetched",
        "onCancelToken",
        "onPrefetching",
        "async",
        "viewTransition"
      ]
    );
  }
  updateCachedOncePropsFromCurrentPage() {
    this.cached.forEach((prefetched) => {
      prefetched.response.then((response) => {
        const pageResponse = response.getPageResponse();
        page.mergeOncePropsIntoResponse(pageResponse, { force: true });
        for (const [group, deferredProps] of Object.entries(pageResponse.deferredProps ?? {})) {
          const remaining = deferredProps.filter((prop) => pageResponse.props[prop] === void 0);
          if (remaining.length > 0) {
            pageResponse.deferredProps[group] = remaining;
          } else {
            delete pageResponse.deferredProps[group];
          }
        }
        const oncePropExpiresIn = this.getShortestOncePropTtl(pageResponse);
        if (oncePropExpiresIn === null) {
          return;
        }
        const prefetchExpiresIn = prefetched.expiresAt - Date.now();
        const expiresIn = Math.min(prefetchExpiresIn, oncePropExpiresIn);
        if (expiresIn > 0) {
          this.scheduleForRemoval(prefetched.params, expiresIn);
        } else {
          this.remove(prefetched.params);
        }
      });
    });
  }
  getShortestOncePropTtl(page2) {
    const expiryTimestamps = Object.values(page2.onceProps ?? {}).map((onceProp) => onceProp.expiresAt).filter((expiresAt) => !!expiresAt);
    if (expiryTimestamps.length === 0) {
      return null;
    }
    return Math.min(...expiryTimestamps) - Date.now();
  }
};
var prefetchedRequests = new PrefetchedRequests();
var elementInViewport = (el) => {
  if (el.offsetParent === null) {
    return false;
  }
  const rect = el.getBoundingClientRect();
  const verticallyVisible = rect.top < window.innerHeight && rect.bottom >= 0;
  const horizontallyVisible = rect.left < window.innerWidth && rect.right >= 0;
  return verticallyVisible && horizontallyVisible;
};
var getScrollableParent = (element) => {
  const allowsVerticalScroll = (el) => {
    const computedStyle = window.getComputedStyle(el);
    if (["scroll", "overlay"].includes(computedStyle.overflowY)) {
      return true;
    }
    if (computedStyle.overflowY !== "auto") {
      return false;
    }
    if (["visible", "clip"].includes(computedStyle.overflowX)) {
      return true;
    }
    return hasDimensionConstraint(computedStyle.maxHeight, el.style.height) || isConstrainedByLayout(el, "height");
  };
  const allowsHorizontalScroll = (el) => {
    const computedStyle = window.getComputedStyle(el);
    if (["scroll", "overlay"].includes(computedStyle.overflowX)) {
      return true;
    }
    if (computedStyle.overflowX !== "auto") {
      return false;
    }
    if (["visible", "clip"].includes(computedStyle.overflowY)) {
      return true;
    }
    return hasDimensionConstraint(computedStyle.maxWidth, el.style.width) || isConstrainedByLayout(el, "width");
  };
  const hasDimensionConstraint = (computedMaxDimension, inlineStyleDimension) => {
    if (computedMaxDimension && computedMaxDimension !== "none" && computedMaxDimension !== "0px") {
      return true;
    }
    if (inlineStyleDimension && inlineStyleDimension !== "auto" && inlineStyleDimension !== "0") {
      return true;
    }
    return false;
  };
  const isConstrainedByLayout = (el, dimension) => {
    const parent2 = el.parentElement;
    if (!parent2) {
      return false;
    }
    const parentStyle = window.getComputedStyle(parent2);
    if (["flex", "inline-flex"].includes(parentStyle.display)) {
      const isColumnLayout = ["column", "column-reverse"].includes(parentStyle.flexDirection);
      return dimension === "height" ? isColumnLayout : !isColumnLayout;
    }
    return ["grid", "inline-grid"].includes(parentStyle.display);
  };
  let parent = element == null ? void 0 : element.parentElement;
  while (parent) {
    const allowsScroll = allowsVerticalScroll(parent) || allowsHorizontalScroll(parent);
    if (window.getComputedStyle(parent).display !== "contents" && allowsScroll) {
      return parent;
    }
    parent = parent.parentElement;
  }
  return null;
};
var getElementsInViewportFromCollection = (elements, referenceElement) => {
  if (!referenceElement) {
    return elements.filter((element) => elementInViewport(element));
  }
  const referenceIndex = elements.indexOf(referenceElement);
  const upwardElements = [];
  const downwardElements = [];
  for (let i = referenceIndex; i >= 0; i--) {
    const element = elements[i];
    if (elementInViewport(element)) {
      upwardElements.push(element);
    } else {
      break;
    }
  }
  for (let i = referenceIndex + 1; i < elements.length; i++) {
    const element = elements[i];
    if (elementInViewport(element)) {
      downwardElements.push(element);
    } else {
      break;
    }
  }
  return [...upwardElements.reverse(), ...downwardElements];
};
var requestAnimationFrame = (cb, times = 1) => {
  window.requestAnimationFrame(() => {
    if (times > 1) {
      requestAnimationFrame(cb, times - 1);
    } else {
      cb();
    }
  });
};
var getInitialPageFromDOM = (id, useScriptElement = false) => {
  if (typeof window === "undefined") {
    return null;
  }
  if (!useScriptElement) {
    const el = document.getElementById(id);
    if (el == null ? void 0 : el.dataset.page) {
      return JSON.parse(el.dataset.page);
    }
  }
  const scriptEl = document.querySelector(`script[data-page="${id}"][type="application/json"]`);
  if (scriptEl == null ? void 0 : scriptEl.textContent) {
    return JSON.parse(scriptEl.textContent);
  }
  return null;
};
var isServer = typeof window === "undefined";
var isFirefox = !isServer && /Firefox/i.test(window.navigator.userAgent);
var Scroll = class {
  static save() {
    history.saveScrollPositions(this.getScrollRegions());
  }
  static getScrollRegions() {
    return Array.from(this.regions()).map((region) => ({
      top: region.scrollTop,
      left: region.scrollLeft
    }));
  }
  static regions() {
    return document.querySelectorAll("[scroll-region]");
  }
  static scrollToTop() {
    if (isFirefox && getComputedStyle(document.documentElement).scrollBehavior === "smooth") {
      return requestAnimationFrame(() => window.scrollTo(0, 0), 2);
    }
    window.scrollTo(0, 0);
  }
  static reset() {
    const anchorHash = isServer ? null : window.location.hash;
    if (!anchorHash) {
      this.scrollToTop();
    }
    this.regions().forEach((region) => {
      if (typeof region.scrollTo === "function") {
        region.scrollTo(0, 0);
      } else {
        region.scrollTop = 0;
        region.scrollLeft = 0;
      }
    });
    this.save();
    this.scrollToAnchor();
  }
  static scrollToAnchor() {
    const anchorHash = isServer ? null : window.location.hash;
    if (anchorHash) {
      setTimeout(() => {
        const anchorElement = document.getElementById(anchorHash.slice(1));
        anchorElement ? anchorElement.scrollIntoView() : this.scrollToTop();
      });
    }
  }
  static restore(scrollRegions) {
    if (isServer) {
      return;
    }
    window.requestAnimationFrame(() => {
      this.restoreDocument();
      this.restoreScrollRegions(scrollRegions);
    });
  }
  static restoreScrollRegions(scrollRegions) {
    if (isServer) {
      return;
    }
    this.regions().forEach((region, index) => {
      const scrollPosition = scrollRegions[index];
      if (!scrollPosition) {
        return;
      }
      if (typeof region.scrollTo === "function") {
        region.scrollTo(scrollPosition.left, scrollPosition.top);
      } else {
        region.scrollTop = scrollPosition.top;
        region.scrollLeft = scrollPosition.left;
      }
    });
  }
  static restoreDocument() {
    const scrollPosition = history.getDocumentScrollPosition();
    window.scrollTo(scrollPosition.left, scrollPosition.top);
  }
  static onScroll(event) {
    const target = event.target;
    if (typeof target.hasAttribute === "function" && target.hasAttribute("scroll-region")) {
      this.save();
    }
  }
  static onWindowScroll() {
    history.saveDocumentScrollPosition({
      top: window.scrollY,
      left: window.scrollX
    });
  }
};
var isFile$1 = (value) => typeof File !== "undefined" && value instanceof File || value instanceof Blob || typeof FileList !== "undefined" && value instanceof FileList && value.length > 0;
function hasFiles$1(data) {
  return isFile$1(data) || data instanceof FormData && Array.from(data.values()).some((value) => hasFiles$1(value)) || typeof data === "object" && data !== null && Object.values(data).some((value) => hasFiles$1(value));
}
var isFormData = (value) => value instanceof FormData;
function objectToFormData(source, form = new FormData(), parentKey = null, queryStringArrayFormat = "brackets") {
  source = source || {};
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      append2(form, composeKey(parentKey, key, "indices"), source[key], queryStringArrayFormat);
    }
  }
  return form;
}
function composeKey(parent, key, format) {
  if (!parent) {
    return key;
  }
  return format === "brackets" ? `${parent}[]` : `${parent}[${key}]`;
}
function append2(form, key, value, format) {
  if (Array.isArray(value)) {
    return Array.from(value.keys()).forEach(
      (index) => append2(form, composeKey(key, index.toString(), format), value[index], format)
    );
  } else if (value instanceof Date) {
    return form.append(key, value.toISOString());
  } else if (value instanceof File) {
    return form.append(key, value, value.name);
  } else if (value instanceof Blob) {
    return form.append(key, value);
  } else if (typeof value === "boolean") {
    return form.append(key, value ? "1" : "0");
  } else if (typeof value === "string") {
    return form.append(key, value);
  } else if (typeof value === "number") {
    return form.append(key, `${value}`);
  } else if (value === null || value === void 0) {
    return form.append(key, "");
  }
  objectToFormData(value, form, key, format);
}
function hrefToUrl(href) {
  return new URL(href.toString(), typeof window === "undefined" ? void 0 : window.location.toString());
}
var transformUrlAndData = (href, data, method, forceFormData, queryStringArrayFormat) => {
  let url = typeof href === "string" ? hrefToUrl(href) : href;
  if ((hasFiles$1(data) || forceFormData) && !isFormData(data)) {
    if (config$1.get("form.forceIndicesArrayFormatInFormData")) {
      queryStringArrayFormat = "indices";
    }
    data = objectToFormData(data, new FormData(), null, queryStringArrayFormat);
  }
  if (isFormData(data)) {
    return [url, data];
  }
  const [_href, _data] = mergeDataIntoQueryString(method, url, data, queryStringArrayFormat);
  return [hrefToUrl(_href), _data];
};
function mergeDataIntoQueryString(method, href, data, qsArrayFormat = "brackets") {
  const hasDataForQueryString = method === "get" && !isFormData(data) && Object.keys(data).length > 0;
  const hasHost = urlHasProtocol(href.toString());
  const hasAbsolutePath = hasHost || href.toString().startsWith("/") || href.toString() === "";
  const hasRelativePath = !hasAbsolutePath && !href.toString().startsWith("#") && !href.toString().startsWith("?");
  const hasRelativePathWithDotPrefix = /^[.]{1,2}([/]|$)/.test(href.toString());
  const hasSearch = href.toString().includes("?") || hasDataForQueryString;
  const hasHash = href.toString().includes("#");
  const url = new URL(href.toString(), typeof window === "undefined" ? "http://localhost" : window.location.toString());
  if (hasDataForQueryString) {
    const hasIndices = /\[\d+\]/.test(decodeURIComponent(url.search));
    const parseOptions = { ignoreQueryPrefix: true, allowSparse: true };
    url.search = libExports.stringify(
      { ...libExports.parse(url.search, parseOptions), ...data },
      {
        encodeValuesOnly: true,
        arrayFormat: hasIndices ? "indices" : qsArrayFormat
      }
    );
  }
  return [
    [
      hasHost ? `${url.protocol}//${url.host}` : "",
      hasAbsolutePath ? url.pathname : "",
      hasRelativePath ? url.pathname.substring(hasRelativePathWithDotPrefix ? 0 : 1) : "",
      hasSearch ? url.search : "",
      hasHash ? url.hash : ""
    ].join(""),
    hasDataForQueryString ? {} : data
  ];
}
function urlWithoutHash(url) {
  url = new URL(url.href);
  url.hash = "";
  return url;
}
var setHashIfSameUrl = (originUrl, destinationUrl) => {
  if (originUrl.hash && !destinationUrl.hash && urlWithoutHash(originUrl).href === destinationUrl.href) {
    destinationUrl.hash = originUrl.hash;
  }
};
var isSameUrlWithoutHash = (url1, url2) => {
  return urlWithoutHash(url1).href === urlWithoutHash(url2).href;
};
var isSameUrlWithoutQueryOrHash = (url1, url2) => {
  return url1.origin === url2.origin && url1.pathname === url2.pathname;
};
function isUrlMethodPair(href) {
  return href !== null && typeof href === "object" && href !== void 0 && "url" in href && "method" in href;
}
function urlHasProtocol(url) {
  return /^([a-z][a-z0-9+.-]*:)?\/\/[^/]/i.test(url);
}
function urlToString(url, absolute) {
  const urlObj = typeof url === "string" ? hrefToUrl(url) : url;
  return absolute ? `${urlObj.protocol}//${urlObj.host}${urlObj.pathname}${urlObj.search}${urlObj.hash}` : `${urlObj.pathname}${urlObj.search}${urlObj.hash}`;
}
var CurrentPage = class {
  constructor() {
    this.componentId = {};
    this.listeners = [];
    this.isFirstPageLoad = true;
    this.cleared = false;
    this.pendingDeferredProps = null;
    this.historyQuotaExceeded = false;
  }
  init({
    initialPage,
    swapComponent: swapComponent2,
    resolveComponent,
    onFlash
  }) {
    this.page = { ...initialPage, flash: initialPage.flash ?? {} };
    this.swapComponent = swapComponent2;
    this.resolveComponent = resolveComponent;
    this.onFlashCallback = onFlash;
    eventHandler.on("historyQuotaExceeded", () => {
      this.historyQuotaExceeded = true;
    });
    return this;
  }
  set(page2, {
    replace = false,
    preserveScroll = false,
    preserveState = false,
    viewTransition = false
  } = {}) {
    if (Object.keys(page2.deferredProps || {}).length) {
      this.pendingDeferredProps = {
        deferredProps: page2.deferredProps,
        component: page2.component,
        url: page2.url
      };
      if (page2.initialDeferredProps === void 0) {
        page2.initialDeferredProps = page2.deferredProps;
      }
    }
    this.componentId = {};
    const componentId = this.componentId;
    if (page2.clearHistory) {
      history.clear();
    }
    return this.resolve(page2.component).then((component) => {
      if (componentId !== this.componentId) {
        return;
      }
      page2.rememberedState ?? (page2.rememberedState = {});
      const isServer3 = typeof window === "undefined";
      const location = !isServer3 ? window.location : new URL(page2.url);
      const scrollRegions = !isServer3 && preserveScroll ? Scroll.getScrollRegions() : [];
      replace = replace || isSameUrlWithoutHash(hrefToUrl(page2.url), location);
      const pageForHistory = { ...page2, flash: {} };
      return new Promise(
        (resolve) => replace ? history.replaceState(pageForHistory, resolve) : history.pushState(pageForHistory, resolve)
      ).then(() => {
        const isNewComponent = !this.isTheSame(page2);
        if (!isNewComponent && Object.keys(page2.props.errors || {}).length > 0) {
          viewTransition = false;
        }
        this.page = page2;
        this.cleared = false;
        if (this.hasOnceProps()) {
          prefetchedRequests.updateCachedOncePropsFromCurrentPage();
        }
        if (isNewComponent) {
          this.fireEventsFor("newComponent");
        }
        if (this.isFirstPageLoad) {
          this.fireEventsFor("firstLoad");
        }
        this.isFirstPageLoad = false;
        if (this.historyQuotaExceeded) {
          this.historyQuotaExceeded = false;
          return;
        }
        return this.swap({
          component,
          page: page2,
          preserveState,
          viewTransition
        }).then(() => {
          if (preserveScroll) {
            window.requestAnimationFrame(() => Scroll.restoreScrollRegions(scrollRegions));
          } else {
            Scroll.reset();
          }
          if (this.pendingDeferredProps && this.pendingDeferredProps.component === page2.component && this.pendingDeferredProps.url === page2.url) {
            eventHandler.fireInternalEvent("loadDeferredProps", this.pendingDeferredProps.deferredProps);
          }
          this.pendingDeferredProps = null;
          if (!replace) {
            fireNavigateEvent(page2);
          }
        });
      });
    });
  }
  setQuietly(page2, {
    preserveState = false
  } = {}) {
    return this.resolve(page2.component).then((component) => {
      this.page = page2;
      this.cleared = false;
      history.setCurrent(page2);
      return this.swap({ component, page: page2, preserveState, viewTransition: false });
    });
  }
  clear() {
    this.cleared = true;
  }
  isCleared() {
    return this.cleared;
  }
  get() {
    return this.page;
  }
  getWithoutFlashData() {
    return { ...this.page, flash: {} };
  }
  hasOnceProps() {
    return Object.keys(this.page.onceProps ?? {}).length > 0;
  }
  merge(data) {
    this.page = { ...this.page, ...data };
  }
  setFlash(flash) {
    var _a;
    this.page = { ...this.page, flash };
    (_a = this.onFlashCallback) == null ? void 0 : _a.call(this, flash);
  }
  setUrlHash(hash) {
    if (!this.page.url.includes(hash)) {
      this.page.url += hash;
    }
  }
  remember(data) {
    this.page.rememberedState = data;
  }
  swap({
    component,
    page: page2,
    preserveState,
    viewTransition
  }) {
    const doSwap = () => this.swapComponent({ component, page: page2, preserveState });
    if (!viewTransition || !(document == null ? void 0 : document.startViewTransition) || document.visibilityState === "hidden") {
      return doSwap();
    }
    const viewTransitionCallback = typeof viewTransition === "boolean" ? () => null : viewTransition;
    return new Promise((resolve) => {
      const transitionResult = document.startViewTransition(() => doSwap().then(resolve));
      viewTransitionCallback(transitionResult);
    });
  }
  resolve(component) {
    return Promise.resolve(this.resolveComponent(component));
  }
  isTheSame(page2) {
    return this.page.component === page2.component;
  }
  on(event, callback) {
    this.listeners.push({ event, callback });
    return () => {
      this.listeners = this.listeners.filter((listener) => listener.event !== event && listener.callback !== callback);
    };
  }
  fireEventsFor(event) {
    this.listeners.filter((listener) => listener.event === event).forEach((listener) => listener.callback());
  }
  mergeOncePropsIntoResponse(response, { force = false } = {}) {
    Object.entries(response.onceProps ?? {}).forEach(([key, onceProp]) => {
      var _a;
      const existingOnceProp = (_a = this.page.onceProps) == null ? void 0 : _a[key];
      if (existingOnceProp === void 0) {
        return;
      }
      if (force || response.props[onceProp.prop] === void 0) {
        response.props[onceProp.prop] = this.page.props[existingOnceProp.prop];
        response.onceProps[key].expiresAt = existingOnceProp.expiresAt;
      }
    });
  }
};
var page = new CurrentPage();
var Queue = class {
  constructor() {
    this.items = [];
    this.processingPromise = null;
  }
  add(item) {
    this.items.push(item);
    return this.process();
  }
  process() {
    this.processingPromise ?? (this.processingPromise = this.processNext().finally(() => {
      this.processingPromise = null;
    }));
    return this.processingPromise;
  }
  processNext() {
    const next = this.items.shift();
    if (next) {
      return Promise.resolve(next()).then(() => this.processNext());
    }
    return Promise.resolve();
  }
};
var isServer2 = typeof window === "undefined";
var queue = new Queue();
var isChromeIOS = !isServer2 && /CriOS/.test(window.navigator.userAgent);
var History = class {
  constructor() {
    this.rememberedState = "rememberedState";
    this.scrollRegions = "scrollRegions";
    this.preserveUrl = false;
    this.current = {};
    this.initialState = null;
  }
  remember(data, key) {
    var _a;
    this.replaceState({
      ...page.getWithoutFlashData(),
      rememberedState: {
        ...((_a = page.get()) == null ? void 0 : _a.rememberedState) ?? {},
        [key]: data
      }
    });
  }
  restore(key) {
    var _a, _b, _c, _d;
    if (!isServer2) {
      return ((_a = this.current[this.rememberedState]) == null ? void 0 : _a[key]) !== void 0 ? (_b = this.current[this.rememberedState]) == null ? void 0 : _b[key] : (_d = (_c = this.initialState) == null ? void 0 : _c[this.rememberedState]) == null ? void 0 : _d[key];
    }
  }
  pushState(page2, cb = null) {
    if (isServer2) {
      return;
    }
    if (this.preserveUrl) {
      cb && cb();
      return;
    }
    this.current = page2;
    queue.add(() => {
      return this.getPageData(page2).then((data) => {
        const doPush = () => this.doPushState({ page: data }, page2.url).then(() => cb == null ? void 0 : cb());
        if (isChromeIOS) {
          return new Promise((resolve) => {
            setTimeout(() => doPush().then(resolve));
          });
        }
        return doPush();
      });
    });
  }
  clonePageProps(page2) {
    try {
      structuredClone(page2.props);
      return page2;
    } catch {
      return {
        ...page2,
        props: cloneDeep(page2.props)
      };
    }
  }
  getPageData(page2) {
    const pageWithClonedProps = this.clonePageProps(page2);
    return new Promise((resolve) => {
      return page2.encryptHistory ? encryptHistory(pageWithClonedProps).then(resolve) : resolve(pageWithClonedProps);
    });
  }
  processQueue() {
    return queue.process();
  }
  decrypt(page2 = null) {
    var _a;
    if (isServer2) {
      return Promise.resolve(page2 ?? page.get());
    }
    const pageData = page2 ?? ((_a = window.history.state) == null ? void 0 : _a.page);
    return this.decryptPageData(pageData).then((data) => {
      if (!data) {
        throw new Error("Unable to decrypt history");
      }
      if (this.initialState === null) {
        this.initialState = data ?? void 0;
      } else {
        this.current = data ?? {};
      }
      return data;
    });
  }
  decryptPageData(pageData) {
    return pageData instanceof ArrayBuffer ? decryptHistory(pageData) : Promise.resolve(pageData);
  }
  saveScrollPositions(scrollRegions) {
    queue.add(() => {
      return Promise.resolve().then(() => {
        var _a;
        if (!((_a = window.history.state) == null ? void 0 : _a.page)) {
          return;
        }
        if (isEqual(this.getScrollRegions(), scrollRegions)) {
          return;
        }
        return this.doReplaceState({
          page: window.history.state.page,
          scrollRegions
        });
      });
    });
  }
  saveDocumentScrollPosition(scrollRegion) {
    queue.add(() => {
      return Promise.resolve().then(() => {
        var _a;
        if (!((_a = window.history.state) == null ? void 0 : _a.page)) {
          return;
        }
        if (isEqual(this.getDocumentScrollPosition(), scrollRegion)) {
          return;
        }
        return this.doReplaceState({
          page: window.history.state.page,
          documentScrollPosition: scrollRegion
        });
      });
    });
  }
  getScrollRegions() {
    var _a;
    return ((_a = window.history.state) == null ? void 0 : _a.scrollRegions) || [];
  }
  getDocumentScrollPosition() {
    var _a;
    return ((_a = window.history.state) == null ? void 0 : _a.documentScrollPosition) || { top: 0, left: 0 };
  }
  replaceState(page2, cb = null) {
    if (isEqual(this.current, page2)) {
      cb && cb();
      return;
    }
    const { flash, ...pageWithoutFlash } = page2;
    page.merge(pageWithoutFlash);
    if (isServer2) {
      return;
    }
    if (this.preserveUrl) {
      cb && cb();
      return;
    }
    this.current = page2;
    queue.add(() => {
      return this.getPageData(page2).then((data) => {
        const doReplace = () => this.doReplaceState({ page: data }, page2.url).then(() => cb == null ? void 0 : cb());
        if (isChromeIOS) {
          return new Promise((resolve) => {
            setTimeout(() => doReplace().then(resolve));
          });
        }
        return doReplace();
      });
    });
  }
  isHistoryThrottleError(error) {
    return error instanceof Error && error.name === "SecurityError" && (error.message.includes("history.pushState") || error.message.includes("history.replaceState"));
  }
  isQuotaExceededError(error) {
    return error instanceof Error && error.name === "QuotaExceededError";
  }
  withThrottleProtection(cb) {
    return Promise.resolve().then(() => {
      try {
        return cb();
      } catch (error) {
        if (!this.isHistoryThrottleError(error)) {
          throw error;
        }
        console.error(error.message);
      }
    });
  }
  doReplaceState(data, url) {
    return this.withThrottleProtection(() => {
      var _a, _b;
      window.history.replaceState(
        {
          ...data,
          scrollRegions: data.scrollRegions ?? ((_a = window.history.state) == null ? void 0 : _a.scrollRegions),
          documentScrollPosition: data.documentScrollPosition ?? ((_b = window.history.state) == null ? void 0 : _b.documentScrollPosition)
        },
        "",
        url
      );
    });
  }
  doPushState(data, url) {
    return this.withThrottleProtection(() => {
      try {
        window.history.pushState(data, "", url);
      } catch (error) {
        if (!this.isQuotaExceededError(error)) {
          throw error;
        }
        eventHandler.fireInternalEvent("historyQuotaExceeded", url);
      }
    });
  }
  getState(key, defaultValue) {
    var _a;
    return ((_a = this.current) == null ? void 0 : _a[key]) ?? defaultValue;
  }
  deleteState(key) {
    if (this.current[key] !== void 0) {
      delete this.current[key];
      this.replaceState(this.current);
    }
  }
  clearInitialState(key) {
    if (this.initialState && this.initialState[key] !== void 0) {
      delete this.initialState[key];
    }
  }
  browserHasHistoryEntry() {
    var _a;
    return !isServer2 && !!((_a = window.history.state) == null ? void 0 : _a.page);
  }
  clear() {
    SessionStorage.remove(historySessionStorageKeys.key);
    SessionStorage.remove(historySessionStorageKeys.iv);
  }
  setCurrent(page2) {
    this.current = page2;
  }
  isValidState(state) {
    return !!state.page;
  }
  getAllState() {
    return this.current;
  }
};
if (typeof window !== "undefined" && window.history.scrollRestoration) {
  window.history.scrollRestoration = "manual";
}
var history = new History();
var EventHandler = class {
  constructor() {
    this.internalListeners = [];
  }
  init() {
    if (typeof window !== "undefined") {
      window.addEventListener("popstate", this.handlePopstateEvent.bind(this));
      window.addEventListener("pageshow", this.handlePageshowEvent.bind(this));
      window.addEventListener("scroll", debounce(Scroll.onWindowScroll.bind(Scroll), 100), true);
    }
    if (typeof document !== "undefined") {
      document.addEventListener("scroll", debounce(Scroll.onScroll.bind(Scroll), 100), true);
    }
  }
  onGlobalEvent(type2, callback) {
    const listener = ((event) => {
      const response = callback(event);
      if (event.cancelable && !event.defaultPrevented && response === false) {
        event.preventDefault();
      }
    });
    return this.registerListener(`inertia:${type2}`, listener);
  }
  on(event, callback) {
    this.internalListeners.push({ event, listener: callback });
    return () => {
      this.internalListeners = this.internalListeners.filter((listener) => listener.listener !== callback);
    };
  }
  onMissingHistoryItem() {
    page.clear();
    this.fireInternalEvent("missingHistoryItem");
  }
  fireInternalEvent(event, ...args) {
    this.internalListeners.filter((listener) => listener.event === event).forEach((listener) => listener.listener(...args));
  }
  registerListener(type2, listener) {
    document.addEventListener(type2, listener);
    return () => document.removeEventListener(type2, listener);
  }
  // bfcache restores pages without firing `popstate`, so we use `pageshow` to
  // re-validate encrypted history entries after `clearHistory` removed the keys.
  // https://web.dev/articles/bfcache
  handlePageshowEvent(event) {
    if (event.persisted) {
      history.decrypt().catch(() => this.onMissingHistoryItem());
    }
  }
  handlePopstateEvent(event) {
    const state = event.state || null;
    if (state === null) {
      const url = hrefToUrl(page.get().url);
      url.hash = window.location.hash;
      history.replaceState({ ...page.getWithoutFlashData(), url: url.href });
      Scroll.reset();
      return;
    }
    if (!history.isValidState(state)) {
      return this.onMissingHistoryItem();
    }
    history.decrypt(state.page).then((data) => {
      if (page.get().version !== data.version) {
        this.onMissingHistoryItem();
        return;
      }
      router.cancelAll({ prefetch: false });
      page.setQuietly(data, { preserveState: false }).then(() => {
        Scroll.restore(history.getScrollRegions());
        fireNavigateEvent(page.get());
        const pendingDeferred = {};
        const pageProps = page.get().props;
        for (const [group, props] of Object.entries(data.initialDeferredProps ?? data.deferredProps ?? {})) {
          const missing = props.filter((prop) => pageProps[prop] === void 0);
          if (missing.length > 0) {
            pendingDeferred[group] = missing;
          }
        }
        if (Object.keys(pendingDeferred).length > 0) {
          this.fireInternalEvent("loadDeferredProps", pendingDeferred);
        }
      });
    }).catch(() => {
      this.onMissingHistoryItem();
    });
  }
};
var eventHandler = new EventHandler();
var NavigationType = class {
  constructor() {
    this.type = this.resolveType();
  }
  resolveType() {
    if (typeof window === "undefined") {
      return "navigate";
    }
    if (window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("navigation").length > 0) {
      return window.performance.getEntriesByType("navigation")[0].type;
    }
    return "navigate";
  }
  get() {
    return this.type;
  }
  isBackForward() {
    return this.type === "back_forward";
  }
  isReload() {
    return this.type === "reload";
  }
};
var navigationType = new NavigationType();
var InitialVisit = class {
  static handle() {
    this.clearRememberedStateOnReload();
    const scenarios = [this.handleBackForward, this.handleLocation, this.handleDefault];
    scenarios.find((handler) => handler.bind(this)());
  }
  static clearRememberedStateOnReload() {
    if (navigationType.isReload()) {
      history.deleteState(history.rememberedState);
      history.clearInitialState(history.rememberedState);
    }
  }
  static handleBackForward() {
    if (!navigationType.isBackForward() || !history.browserHasHistoryEntry()) {
      return false;
    }
    const scrollRegions = history.getScrollRegions();
    history.decrypt().then((data) => {
      page.set(data, { preserveScroll: true, preserveState: true }).then(() => {
        Scroll.restore(scrollRegions);
        fireNavigateEvent(page.get());
      });
    }).catch(() => {
      eventHandler.onMissingHistoryItem();
    });
    return true;
  }
  /**
   * @link https://inertiajs.com/redirects#external-redirects
   */
  static handleLocation() {
    if (!SessionStorage.exists(SessionStorage.locationVisitKey)) {
      return false;
    }
    const locationVisit = SessionStorage.get(SessionStorage.locationVisitKey) || {};
    SessionStorage.remove(SessionStorage.locationVisitKey);
    if (typeof window !== "undefined") {
      page.setUrlHash(window.location.hash);
    }
    history.decrypt(page.get()).then(() => {
      const rememberedState = history.getState(history.rememberedState, {});
      const scrollRegions = history.getScrollRegions();
      page.remember(rememberedState);
      page.set(page.get(), {
        preserveScroll: locationVisit.preserveScroll,
        preserveState: true
      }).then(() => {
        if (locationVisit.preserveScroll) {
          Scroll.restore(scrollRegions);
        }
        fireNavigateEvent(page.get());
      });
    }).catch(() => {
      eventHandler.onMissingHistoryItem();
    });
    return true;
  }
  static handleDefault() {
    if (typeof window !== "undefined") {
      page.setUrlHash(window.location.hash);
    }
    page.set(page.get(), { preserveScroll: true, preserveState: true }).then(() => {
      if (navigationType.isReload()) {
        Scroll.restore(history.getScrollRegions());
      } else {
        Scroll.scrollToAnchor();
      }
      const page2 = page.get();
      fireNavigateEvent(page2);
      const flash = page2.flash;
      if (Object.keys(flash).length > 0) {
        queueMicrotask(() => fireFlashEvent(flash));
      }
    });
  }
};
var Poll = class {
  constructor(interval, cb, options) {
    this.id = null;
    this.throttle = false;
    this.keepAlive = false;
    this.cbCount = 0;
    this.keepAlive = options.keepAlive ?? false;
    this.cb = cb;
    this.interval = interval;
    if (options.autoStart ?? true) {
      this.start();
    }
  }
  stop() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
  start() {
    if (typeof window === "undefined") {
      return;
    }
    this.stop();
    this.id = window.setInterval(() => {
      if (!this.throttle || this.cbCount % 10 === 0) {
        this.cb();
      }
      if (this.throttle) {
        this.cbCount++;
      }
    }, this.interval);
  }
  isInBackground(hidden) {
    this.throttle = this.keepAlive ? false : hidden;
    if (this.throttle) {
      this.cbCount = 0;
    }
  }
};
var Polls = class {
  constructor() {
    this.polls = [];
    this.setupVisibilityListener();
  }
  add(interval, cb, options) {
    const poll = new Poll(interval, cb, options);
    this.polls.push(poll);
    return {
      stop: () => poll.stop(),
      start: () => poll.start()
    };
  }
  clear() {
    this.polls.forEach((poll) => poll.stop());
    this.polls = [];
  }
  setupVisibilityListener() {
    if (typeof document === "undefined") {
      return;
    }
    document.addEventListener(
      "visibilitychange",
      () => {
        this.polls.forEach((poll) => poll.isInBackground(document.hidden));
      },
      false
    );
  }
};
var polls = new Polls();
var RequestParams = class _RequestParams {
  constructor(params) {
    this.callbacks = [];
    if (!params.prefetch) {
      this.params = params;
    } else {
      const wrappedCallbacks = {
        onBefore: this.wrapCallback(params, "onBefore"),
        onBeforeUpdate: this.wrapCallback(params, "onBeforeUpdate"),
        onStart: this.wrapCallback(params, "onStart"),
        onProgress: this.wrapCallback(params, "onProgress"),
        onFinish: this.wrapCallback(params, "onFinish"),
        onCancel: this.wrapCallback(params, "onCancel"),
        onSuccess: this.wrapCallback(params, "onSuccess"),
        onError: this.wrapCallback(params, "onError"),
        onFlash: this.wrapCallback(params, "onFlash"),
        onCancelToken: this.wrapCallback(params, "onCancelToken"),
        onPrefetched: this.wrapCallback(params, "onPrefetched"),
        onPrefetching: this.wrapCallback(params, "onPrefetching")
      };
      this.params = {
        ...params,
        ...wrappedCallbacks,
        onPrefetchResponse: params.onPrefetchResponse || (() => {
        }),
        onPrefetchError: params.onPrefetchError || (() => {
        })
      };
    }
  }
  static create(params) {
    return new _RequestParams(params);
  }
  data() {
    return this.params.method === "get" ? null : this.params.data;
  }
  queryParams() {
    return this.params.method === "get" ? this.params.data : {};
  }
  isPartial() {
    return this.params.only.length > 0 || this.params.except.length > 0 || this.params.reset.length > 0;
  }
  isPrefetch() {
    return this.params.prefetch === true;
  }
  isDeferredPropsRequest() {
    return this.params.deferredProps === true;
  }
  onCancelToken(cb) {
    this.params.onCancelToken({
      cancel: cb
    });
  }
  markAsFinished() {
    this.params.completed = true;
    this.params.cancelled = false;
    this.params.interrupted = false;
  }
  markAsCancelled({ cancelled = true, interrupted = false }) {
    this.params.onCancel();
    this.params.completed = false;
    this.params.cancelled = cancelled;
    this.params.interrupted = interrupted;
  }
  wasCancelledAtAll() {
    return this.params.cancelled || this.params.interrupted;
  }
  onFinish() {
    this.params.onFinish(this.params);
  }
  onStart() {
    this.params.onStart(this.params);
  }
  onPrefetching() {
    this.params.onPrefetching(this.params);
  }
  onPrefetchResponse(response) {
    if (this.params.onPrefetchResponse) {
      this.params.onPrefetchResponse(response);
    }
  }
  onPrefetchError(error) {
    if (this.params.onPrefetchError) {
      this.params.onPrefetchError(error);
    }
  }
  all() {
    return this.params;
  }
  headers() {
    const headers = {
      ...this.params.headers
    };
    if (this.isPartial()) {
      headers["X-Inertia-Partial-Component"] = page.get().component;
    }
    const only = this.params.only.concat(this.params.reset);
    if (only.length > 0) {
      headers["X-Inertia-Partial-Data"] = only.join(",");
    }
    if (this.params.except.length > 0) {
      headers["X-Inertia-Partial-Except"] = this.params.except.join(",");
    }
    if (this.params.reset.length > 0) {
      headers["X-Inertia-Reset"] = this.params.reset.join(",");
    }
    if (this.params.errorBag && this.params.errorBag.length > 0) {
      headers["X-Inertia-Error-Bag"] = this.params.errorBag;
    }
    return headers;
  }
  setPreserveOptions(page2) {
    this.params.preserveScroll = _RequestParams.resolvePreserveOption(this.params.preserveScroll, page2);
    this.params.preserveState = _RequestParams.resolvePreserveOption(this.params.preserveState, page2);
  }
  runCallbacks() {
    this.callbacks.forEach(({ name, args }) => {
      this.params[name](...args);
    });
  }
  merge(toMerge) {
    this.params = {
      ...this.params,
      ...toMerge
    };
  }
  wrapCallback(params, name) {
    return (...args) => {
      this.recordCallback(name, args);
      params[name](...args);
    };
  }
  recordCallback(name, args) {
    this.callbacks.push({ name, args });
  }
  static resolvePreserveOption(value, page2) {
    if (typeof value === "function") {
      return value(page2);
    }
    if (value === "errors") {
      return Object.keys(page2.props.errors || {}).length > 0;
    }
    return value;
  }
};
var modal_default = {
  modal: null,
  listener: null,
  createIframeAndPage(html) {
    if (typeof html === "object") {
      html = `All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>${JSON.stringify(
        html
      )}`;
    }
    const page2 = document.createElement("html");
    page2.innerHTML = html;
    page2.querySelectorAll("a").forEach((a) => a.setAttribute("target", "_top"));
    const iframe = document.createElement("iframe");
    iframe.style.backgroundColor = "white";
    iframe.style.borderRadius = "5px";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    return { iframe, page: page2 };
  },
  show(html) {
    const { iframe, page: page2 } = this.createIframeAndPage(html);
    this.modal = document.createElement("div");
    this.modal.style.position = "fixed";
    this.modal.style.width = "100vw";
    this.modal.style.height = "100vh";
    this.modal.style.padding = "50px";
    this.modal.style.boxSizing = "border-box";
    this.modal.style.backgroundColor = "rgba(0, 0, 0, .6)";
    this.modal.style.zIndex = 2e5;
    this.modal.addEventListener("click", () => this.hide());
    this.modal.appendChild(iframe);
    document.body.prepend(this.modal);
    document.body.style.overflow = "hidden";
    if (!iframe.contentWindow) {
      throw new Error("iframe not yet ready.");
    }
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(page2.outerHTML);
    iframe.contentWindow.document.close();
    this.listener = this.hideOnEscape.bind(this);
    document.addEventListener("keydown", this.listener);
  },
  hide() {
    this.modal.outerHTML = "";
    this.modal = null;
    document.body.style.overflow = "visible";
    document.removeEventListener("keydown", this.listener);
  },
  hideOnEscape(event) {
    if (event.keyCode === 27) {
      this.hide();
    }
  }
};
var dialog_default = {
  show(html) {
    const { iframe, page: page2 } = modal_default.createIframeAndPage(html);
    iframe.style.boxSizing = "border-box";
    iframe.style.display = "block";
    const dialog = document.createElement("dialog");
    dialog.id = "inertia-error-dialog";
    Object.assign(dialog.style, {
      width: "calc(100vw - 100px)",
      height: "calc(100vh - 100px)",
      padding: "0",
      margin: "auto",
      border: "none",
      backgroundColor: "transparent"
    });
    const dialogStyleElement = document.createElement("style");
    dialogStyleElement.textContent = `
      dialog#inertia-error-dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.6);
      }

      dialog#inertia-error-dialog:focus {
        outline: none;
      }
    `;
    document.head.appendChild(dialogStyleElement);
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        dialog.close();
      }
    });
    dialog.addEventListener("close", () => {
      dialogStyleElement.remove();
      dialog.remove();
    });
    dialog.appendChild(iframe);
    document.body.prepend(dialog);
    dialog.showModal();
    dialog.focus();
    if (!iframe.contentWindow) {
      throw new Error("iframe not yet ready.");
    }
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(page2.outerHTML);
    iframe.contentWindow.document.close();
  }
};
var queue2 = new Queue();
var Response = class _Response {
  constructor(requestParams, response, originatingPage) {
    this.requestParams = requestParams;
    this.response = response;
    this.originatingPage = originatingPage;
    this.wasPrefetched = false;
  }
  static create(params, response, originatingPage) {
    return new _Response(params, response, originatingPage);
  }
  async handlePrefetch() {
    if (isSameUrlWithoutHash(this.requestParams.all().url, window.location)) {
      this.handle();
    }
  }
  async handle() {
    return queue2.add(() => this.process());
  }
  async process() {
    if (this.requestParams.all().prefetch) {
      this.wasPrefetched = true;
      this.requestParams.all().prefetch = false;
      this.requestParams.all().onPrefetched(this.response, this.requestParams.all());
      firePrefetchedEvent(this.response, this.requestParams.all());
      return Promise.resolve();
    }
    this.requestParams.runCallbacks();
    if (!this.isInertiaResponse()) {
      return this.handleNonInertiaResponse();
    }
    await history.processQueue();
    history.preserveUrl = this.requestParams.all().preserveUrl;
    await this.setPage();
    const errors = page.get().props.errors || {};
    if (Object.keys(errors).length > 0) {
      const scopedErrors = this.getScopedErrors(errors);
      fireErrorEvent(scopedErrors);
      return this.requestParams.all().onError(scopedErrors);
    }
    router.flushByCacheTags(this.requestParams.all().invalidateCacheTags || []);
    if (!this.wasPrefetched) {
      router.flush(page.get().url);
    }
    const { flash } = page.get();
    if (Object.keys(flash).length > 0 && !this.requestParams.isDeferredPropsRequest()) {
      fireFlashEvent(flash);
      this.requestParams.all().onFlash(flash);
    }
    fireSuccessEvent(page.get());
    await this.requestParams.all().onSuccess(page.get());
    history.preserveUrl = false;
  }
  mergeParams(params) {
    this.requestParams.merge(params);
  }
  getPageResponse() {
    const data = this.getDataFromResponse(this.response.data);
    if (typeof data === "object") {
      return this.response.data = { ...data, flash: data.flash ?? {} };
    }
    return this.response.data = data;
  }
  async handleNonInertiaResponse() {
    if (this.isLocationVisit()) {
      const locationUrl = hrefToUrl(this.getHeader("x-inertia-location"));
      setHashIfSameUrl(this.requestParams.all().url, locationUrl);
      return this.locationVisit(locationUrl);
    }
    const response = {
      ...this.response,
      data: this.getDataFromResponse(this.response.data)
    };
    if (fireInvalidEvent(response)) {
      return config$1.get("future.useDialogForErrorModal") ? dialog_default.show(response.data) : modal_default.show(response.data);
    }
  }
  isInertiaResponse() {
    return this.hasHeader("x-inertia");
  }
  hasStatus(status2) {
    return this.response.status === status2;
  }
  getHeader(header) {
    return this.response.headers[header];
  }
  hasHeader(header) {
    return this.getHeader(header) !== void 0;
  }
  isLocationVisit() {
    return this.hasStatus(409) && this.hasHeader("x-inertia-location");
  }
  /**
   * @link https://inertiajs.com/redirects#external-redirects
   */
  locationVisit(url) {
    try {
      SessionStorage.set(SessionStorage.locationVisitKey, {
        preserveScroll: this.requestParams.all().preserveScroll === true
      });
      if (typeof window === "undefined") {
        return;
      }
      if (isSameUrlWithoutHash(window.location, url)) {
        window.location.reload();
      } else {
        window.location.href = url.href;
      }
    } catch (error) {
      return false;
    }
  }
  async setPage() {
    const pageResponse = this.getPageResponse();
    if (!this.shouldSetPage(pageResponse)) {
      return Promise.resolve();
    }
    this.mergeProps(pageResponse);
    page.mergeOncePropsIntoResponse(pageResponse);
    this.preserveEqualProps(pageResponse);
    await this.setRememberedState(pageResponse);
    this.requestParams.setPreserveOptions(pageResponse);
    pageResponse.url = history.preserveUrl ? page.get().url : this.pageUrl(pageResponse);
    this.requestParams.all().onBeforeUpdate(pageResponse);
    fireBeforeUpdateEvent(pageResponse);
    return page.set(pageResponse, {
      replace: this.requestParams.all().replace,
      preserveScroll: this.requestParams.all().preserveScroll,
      preserveState: this.requestParams.all().preserveState,
      viewTransition: this.requestParams.all().viewTransition
    });
  }
  getDataFromResponse(response) {
    if (typeof response !== "string") {
      return response;
    }
    try {
      return JSON.parse(response);
    } catch (error) {
      return response;
    }
  }
  shouldSetPage(pageResponse) {
    if (!this.requestParams.all().async) {
      return true;
    }
    if (this.originatingPage.component !== pageResponse.component) {
      return true;
    }
    if (this.originatingPage.component !== page.get().component) {
      return false;
    }
    const originatingUrl = hrefToUrl(this.originatingPage.url);
    const currentPageUrl = hrefToUrl(page.get().url);
    return originatingUrl.origin === currentPageUrl.origin && originatingUrl.pathname === currentPageUrl.pathname;
  }
  pageUrl(pageResponse) {
    const responseUrl = hrefToUrl(pageResponse.url);
    setHashIfSameUrl(this.requestParams.all().url, responseUrl);
    return responseUrl.pathname + responseUrl.search + responseUrl.hash;
  }
  preserveEqualProps(pageResponse) {
    if (pageResponse.component !== page.get().component || config$1.get("future.preserveEqualProps") !== true) {
      return;
    }
    const currentPageProps = page.get().props;
    Object.entries(pageResponse.props).forEach(([key, value]) => {
      if (isEqual(value, currentPageProps[key])) {
        pageResponse.props[key] = currentPageProps[key];
      }
    });
  }
  mergeProps(pageResponse) {
    if (!this.requestParams.isPartial() || pageResponse.component !== page.get().component) {
      return;
    }
    const propsToAppend = pageResponse.mergeProps || [];
    const propsToPrepend = pageResponse.prependProps || [];
    const propsToDeepMerge = pageResponse.deepMergeProps || [];
    const matchPropsOn = pageResponse.matchPropsOn || [];
    const mergeProp = (prop, shouldAppend) => {
      const currentProp = get$1(page.get().props, prop);
      const incomingProp = get$1(pageResponse.props, prop);
      if (Array.isArray(incomingProp)) {
        const newArray = this.mergeOrMatchItems(
          currentProp || [],
          incomingProp,
          prop,
          matchPropsOn,
          shouldAppend
        );
        set(pageResponse.props, prop, newArray);
      } else if (typeof incomingProp === "object" && incomingProp !== null) {
        const newObject = {
          ...currentProp || {},
          ...incomingProp
        };
        set(pageResponse.props, prop, newObject);
      }
    };
    propsToAppend.forEach((prop) => mergeProp(prop, true));
    propsToPrepend.forEach((prop) => mergeProp(prop, false));
    propsToDeepMerge.forEach((prop) => {
      const currentProp = page.get().props[prop];
      const incomingProp = pageResponse.props[prop];
      const deepMerge = (target, source, matchProp) => {
        if (Array.isArray(source)) {
          return this.mergeOrMatchItems(target, source, matchProp, matchPropsOn);
        }
        if (typeof source === "object" && source !== null) {
          return Object.keys(source).reduce(
            (acc, key) => {
              acc[key] = deepMerge(target ? target[key] : void 0, source[key], `${matchProp}.${key}`);
              return acc;
            },
            { ...target }
          );
        }
        return source;
      };
      pageResponse.props[prop] = deepMerge(currentProp, incomingProp, prop);
    });
    pageResponse.props = { ...page.get().props, ...pageResponse.props };
    if (this.requestParams.isDeferredPropsRequest()) {
      const currentErrors = page.get().props.errors;
      if (currentErrors && Object.keys(currentErrors).length > 0) {
        pageResponse.props.errors = currentErrors;
      }
    }
    if (page.get().scrollProps) {
      pageResponse.scrollProps = {
        ...page.get().scrollProps || {},
        ...pageResponse.scrollProps || {}
      };
    }
    if (page.hasOnceProps()) {
      pageResponse.onceProps = {
        ...page.get().onceProps || {},
        ...pageResponse.onceProps || {}
      };
    }
    pageResponse.flash = {
      ...page.get().flash,
      ...this.requestParams.isDeferredPropsRequest() ? {} : pageResponse.flash
    };
    const currentOriginalDeferred = page.get().initialDeferredProps;
    if (currentOriginalDeferred && Object.keys(currentOriginalDeferred).length > 0) {
      pageResponse.initialDeferredProps = currentOriginalDeferred;
    }
  }
  mergeOrMatchItems(existingItems, newItems, matchProp, matchPropsOn, shouldAppend = true) {
    const items = Array.isArray(existingItems) ? existingItems : [];
    const matchingKey = matchPropsOn.find((key) => {
      const keyPath = key.split(".").slice(0, -1).join(".");
      return keyPath === matchProp;
    });
    if (!matchingKey) {
      return shouldAppend ? [...items, ...newItems] : [...newItems, ...items];
    }
    const uniqueProperty = matchingKey.split(".").pop() || "";
    const newItemsMap = /* @__PURE__ */ new Map();
    newItems.forEach((item) => {
      if (this.hasUniqueProperty(item, uniqueProperty)) {
        newItemsMap.set(item[uniqueProperty], item);
      }
    });
    return shouldAppend ? this.appendWithMatching(items, newItems, newItemsMap, uniqueProperty) : this.prependWithMatching(items, newItems, newItemsMap, uniqueProperty);
  }
  appendWithMatching(existingItems, newItems, newItemsMap, uniqueProperty) {
    const updatedExisting = existingItems.map((item) => {
      if (this.hasUniqueProperty(item, uniqueProperty) && newItemsMap.has(item[uniqueProperty])) {
        return newItemsMap.get(item[uniqueProperty]);
      }
      return item;
    });
    const newItemsToAdd = newItems.filter((item) => {
      if (!this.hasUniqueProperty(item, uniqueProperty)) {
        return true;
      }
      return !existingItems.some(
        (existing) => this.hasUniqueProperty(existing, uniqueProperty) && existing[uniqueProperty] === item[uniqueProperty]
      );
    });
    return [...updatedExisting, ...newItemsToAdd];
  }
  prependWithMatching(existingItems, newItems, newItemsMap, uniqueProperty) {
    const untouchedExisting = existingItems.filter((item) => {
      if (this.hasUniqueProperty(item, uniqueProperty)) {
        return !newItemsMap.has(item[uniqueProperty]);
      }
      return true;
    });
    return [...newItems, ...untouchedExisting];
  }
  hasUniqueProperty(item, property) {
    return item && typeof item === "object" && property in item;
  }
  async setRememberedState(pageResponse) {
    const rememberedState = await history.getState(history.rememberedState, {});
    if (this.requestParams.all().preserveState && rememberedState && pageResponse.component === page.get().component) {
      pageResponse.rememberedState = rememberedState;
    }
  }
  getScopedErrors(errors) {
    if (!this.requestParams.all().errorBag) {
      return errors;
    }
    return errors[this.requestParams.all().errorBag || ""] || {};
  }
};
var Request = class _Request {
  constructor(params, page2) {
    this.page = page2;
    this.requestHasFinished = false;
    this.requestParams = RequestParams.create(params);
    this.cancelToken = new AbortController();
  }
  static create(params, page2) {
    return new _Request(params, page2);
  }
  isPrefetch() {
    return this.requestParams.isPrefetch();
  }
  async send() {
    this.requestParams.onCancelToken(() => this.cancel({ cancelled: true }));
    fireStartEvent(this.requestParams.all());
    this.requestParams.onStart();
    if (this.requestParams.all().prefetch) {
      this.requestParams.onPrefetching();
      firePrefetchingEvent(this.requestParams.all());
    }
    const originallyPrefetch = this.requestParams.all().prefetch;
    return axios$1({
      method: this.requestParams.all().method,
      url: urlWithoutHash(this.requestParams.all().url).href,
      data: this.requestParams.data(),
      params: this.requestParams.queryParams(),
      signal: this.cancelToken.signal,
      headers: this.getHeaders(),
      onUploadProgress: this.onProgress.bind(this),
      // Why text? This allows us to delay JSON.parse until we're ready to use the response,
      // helps with performance particularly on large responses + history encryption
      responseType: "text"
    }).then((response) => {
      this.response = Response.create(this.requestParams, response, this.page);
      return this.response.handle();
    }).catch((error) => {
      if (error == null ? void 0 : error.response) {
        this.response = Response.create(this.requestParams, error.response, this.page);
        return this.response.handle();
      }
      return Promise.reject(error);
    }).catch((error) => {
      if (axios$1.isCancel(error)) {
        return;
      }
      if (fireExceptionEvent(error)) {
        if (originallyPrefetch) {
          this.requestParams.onPrefetchError(error);
        }
        return Promise.reject(error);
      }
    }).finally(() => {
      this.finish();
      if (originallyPrefetch && this.response) {
        this.requestParams.onPrefetchResponse(this.response);
      }
    });
  }
  finish() {
    if (this.requestParams.wasCancelledAtAll()) {
      return;
    }
    this.requestParams.markAsFinished();
    this.fireFinishEvents();
  }
  fireFinishEvents() {
    if (this.requestHasFinished) {
      return;
    }
    this.requestHasFinished = true;
    fireFinishEvent(this.requestParams.all());
    this.requestParams.onFinish();
  }
  cancel({ cancelled = false, interrupted = false }) {
    if (this.requestHasFinished) {
      return;
    }
    this.cancelToken.abort();
    this.requestParams.markAsCancelled({ cancelled, interrupted });
    this.fireFinishEvents();
  }
  onProgress(progress3) {
    if (this.requestParams.data() instanceof FormData) {
      progress3.percentage = progress3.progress ? Math.round(progress3.progress * 100) : 0;
      fireProgressEvent(progress3);
      this.requestParams.all().onProgress(progress3);
    }
  }
  getHeaders() {
    const headers = {
      ...this.requestParams.headers(),
      Accept: "text/html, application/xhtml+xml",
      "X-Requested-With": "XMLHttpRequest",
      "X-Inertia": true
    };
    const page2 = page.get();
    if (page2.version) {
      headers["X-Inertia-Version"] = page2.version;
    }
    const onceProps = Object.entries(page2.onceProps || {}).filter(([, onceProp]) => {
      if (page2.props[onceProp.prop] === void 0) {
        return false;
      }
      return !onceProp.expiresAt || onceProp.expiresAt > Date.now();
    }).map(([key]) => key);
    if (onceProps.length > 0) {
      headers["X-Inertia-Except-Once-Props"] = onceProps.join(",");
    }
    return headers;
  }
};
var RequestStream = class {
  constructor({ maxConcurrent, interruptible }) {
    this.requests = [];
    this.maxConcurrent = maxConcurrent;
    this.interruptible = interruptible;
  }
  send(request2) {
    this.requests.push(request2);
    request2.send().finally(() => {
      this.requests = this.requests.filter((r2) => r2 !== request2);
    });
  }
  interruptInFlight() {
    this.cancel({ interrupted: true }, false);
  }
  cancelInFlight({ prefetch = true } = {}) {
    this.requests.filter((request2) => prefetch || !request2.isPrefetch()).forEach((request2) => request2.cancel({ cancelled: true }));
  }
  cancel({ cancelled = false, interrupted = false } = {}, force = false) {
    if (!force && !this.shouldCancel()) {
      return;
    }
    const request2 = this.requests.shift();
    request2 == null ? void 0 : request2.cancel({ cancelled, interrupted });
  }
  shouldCancel() {
    return this.interruptible && this.requests.length >= this.maxConcurrent;
  }
};
var Router = class {
  constructor() {
    this.syncRequestStream = new RequestStream({
      maxConcurrent: 1,
      interruptible: true
    });
    this.asyncRequestStream = new RequestStream({
      maxConcurrent: Infinity,
      interruptible: false
    });
    this.clientVisitQueue = new Queue();
  }
  init({
    initialPage,
    resolveComponent,
    swapComponent: swapComponent2,
    onFlash
  }) {
    page.init({
      initialPage,
      resolveComponent,
      swapComponent: swapComponent2,
      onFlash
    });
    InitialVisit.handle();
    eventHandler.init();
    eventHandler.on("missingHistoryItem", () => {
      if (typeof window !== "undefined") {
        this.visit(window.location.href, { preserveState: true, preserveScroll: true, replace: true });
      }
    });
    eventHandler.on("loadDeferredProps", (deferredProps) => {
      this.loadDeferredProps(deferredProps);
    });
    eventHandler.on("historyQuotaExceeded", (url) => {
      window.location.href = url;
    });
  }
  get(url, data = {}, options = {}) {
    return this.visit(url, { ...options, method: "get", data });
  }
  post(url, data = {}, options = {}) {
    return this.visit(url, { preserveState: true, ...options, method: "post", data });
  }
  put(url, data = {}, options = {}) {
    return this.visit(url, { preserveState: true, ...options, method: "put", data });
  }
  patch(url, data = {}, options = {}) {
    return this.visit(url, { preserveState: true, ...options, method: "patch", data });
  }
  delete(url, options = {}) {
    return this.visit(url, { preserveState: true, ...options, method: "delete" });
  }
  reload(options = {}) {
    return this.doReload(options);
  }
  doReload(options = {}) {
    if (typeof window === "undefined") {
      return;
    }
    return this.visit(window.location.href, {
      ...options,
      preserveScroll: true,
      preserveState: true,
      async: true,
      headers: {
        ...options.headers || {},
        "Cache-Control": "no-cache"
      }
    });
  }
  remember(data, key = "default") {
    history.remember(data, key);
  }
  restore(key = "default") {
    return history.restore(key);
  }
  on(type2, callback) {
    if (typeof window === "undefined") {
      return () => {
      };
    }
    return eventHandler.onGlobalEvent(type2, callback);
  }
  /**
   * @deprecated Use cancelAll() instead.
   */
  cancel() {
    this.syncRequestStream.cancelInFlight();
  }
  cancelAll({ async = true, prefetch = true, sync = true } = {}) {
    if (async) {
      this.asyncRequestStream.cancelInFlight({ prefetch });
    }
    if (sync) {
      this.syncRequestStream.cancelInFlight();
    }
  }
  poll(interval, requestOptions = {}, options = {}) {
    return polls.add(interval, () => this.reload(requestOptions), {
      autoStart: options.autoStart ?? true,
      keepAlive: options.keepAlive ?? false
    });
  }
  visit(href, options = {}) {
    const visit = this.getPendingVisit(href, {
      ...options,
      showProgress: options.showProgress ?? !options.async
    });
    const events = this.getVisitEvents(options);
    if (events.onBefore(visit) === false || !fireBeforeEvent(visit)) {
      return;
    }
    const currentPageUrl = hrefToUrl(page.get().url);
    const isPartialReload = visit.only.length > 0 || visit.except.length > 0 || visit.reset.length > 0;
    const isSamePage = isPartialReload ? isSameUrlWithoutQueryOrHash(visit.url, currentPageUrl) : isSameUrlWithoutHash(visit.url, currentPageUrl);
    if (!isSamePage) {
      this.asyncRequestStream.cancelInFlight({ prefetch: false });
    }
    if (!visit.async) {
      this.syncRequestStream.interruptInFlight();
    }
    if (!page.isCleared() && !visit.preserveUrl) {
      Scroll.save();
    }
    const requestParams = {
      ...visit,
      ...events
    };
    const prefetched = prefetchedRequests.get(requestParams);
    if (prefetched) {
      progress.reveal(prefetched.inFlight);
      prefetchedRequests.use(prefetched, requestParams);
    } else {
      progress.reveal(true);
      const requestStream = visit.async ? this.asyncRequestStream : this.syncRequestStream;
      requestStream.send(Request.create(requestParams, page.get()));
    }
  }
  getCached(href, options = {}) {
    return prefetchedRequests.findCached(this.getPrefetchParams(href, options));
  }
  flush(href, options = {}) {
    prefetchedRequests.remove(this.getPrefetchParams(href, options));
  }
  flushAll() {
    prefetchedRequests.removeAll();
  }
  flushByCacheTags(tags) {
    prefetchedRequests.removeByTags(Array.isArray(tags) ? tags : [tags]);
  }
  getPrefetching(href, options = {}) {
    return prefetchedRequests.findInFlight(this.getPrefetchParams(href, options));
  }
  prefetch(href, options = {}, prefetchOptions = {}) {
    const method = options.method ?? (isUrlMethodPair(href) ? href.method : "get");
    if (method !== "get") {
      throw new Error("Prefetch requests must use the GET method");
    }
    const visit = this.getPendingVisit(href, {
      ...options,
      async: true,
      showProgress: false,
      prefetch: true,
      viewTransition: false
    });
    const visitUrl = visit.url.origin + visit.url.pathname + visit.url.search;
    const currentUrl = window.location.origin + window.location.pathname + window.location.search;
    if (visitUrl === currentUrl) {
      return;
    }
    const events = this.getVisitEvents(options);
    if (events.onBefore(visit) === false || !fireBeforeEvent(visit)) {
      return;
    }
    progress.hide();
    this.asyncRequestStream.interruptInFlight();
    const requestParams = {
      ...visit,
      ...events
    };
    const ensureCurrentPageIsSet = () => {
      return new Promise((resolve) => {
        const checkIfPageIsDefined = () => {
          if (page.get()) {
            resolve();
          } else {
            setTimeout(checkIfPageIsDefined, 50);
          }
        };
        checkIfPageIsDefined();
      });
    };
    ensureCurrentPageIsSet().then(() => {
      prefetchedRequests.add(
        requestParams,
        (params) => {
          this.asyncRequestStream.send(Request.create(params, page.get()));
        },
        {
          cacheFor: config$1.get("prefetch.cacheFor"),
          cacheTags: [],
          ...prefetchOptions
        }
      );
    });
  }
  clearHistory() {
    history.clear();
  }
  decryptHistory() {
    return history.decrypt();
  }
  resolveComponent(component) {
    return page.resolve(component);
  }
  replace(params) {
    this.clientVisit(params, { replace: true });
  }
  replaceProp(name, value, options) {
    this.replace({
      preserveScroll: true,
      preserveState: true,
      props(currentProps) {
        const newValue = typeof value === "function" ? value(get$1(currentProps, name), currentProps) : value;
        return set(cloneDeep(currentProps), name, newValue);
      },
      ...options || {}
    });
  }
  appendToProp(name, value, options) {
    this.replaceProp(
      name,
      (currentValue, currentProps) => {
        const newValue = typeof value === "function" ? value(currentValue, currentProps) : value;
        if (!Array.isArray(currentValue)) {
          currentValue = currentValue !== void 0 ? [currentValue] : [];
        }
        return [...currentValue, newValue];
      },
      options
    );
  }
  prependToProp(name, value, options) {
    this.replaceProp(
      name,
      (currentValue, currentProps) => {
        const newValue = typeof value === "function" ? value(currentValue, currentProps) : value;
        if (!Array.isArray(currentValue)) {
          currentValue = currentValue !== void 0 ? [currentValue] : [];
        }
        return [newValue, ...currentValue];
      },
      options
    );
  }
  push(params) {
    this.clientVisit(params);
  }
  flash(keyOrData, value) {
    const current = page.get().flash;
    let flash;
    if (typeof keyOrData === "function") {
      flash = keyOrData(current);
    } else if (typeof keyOrData === "string") {
      flash = { ...current, [keyOrData]: value };
    } else if (keyOrData && Object.keys(keyOrData).length) {
      flash = { ...current, ...keyOrData };
    } else {
      return;
    }
    page.setFlash(flash);
    if (Object.keys(flash).length) {
      fireFlashEvent(flash);
    }
  }
  clientVisit(params, { replace = false } = {}) {
    this.clientVisitQueue.add(() => this.performClientVisit(params, { replace }));
  }
  performClientVisit(params, { replace = false } = {}) {
    const current = page.get();
    const onceProps = typeof params.props === "function" ? Object.fromEntries(
      Object.values(current.onceProps ?? {}).map((onceProp) => [onceProp.prop, current.props[onceProp.prop]])
    ) : {};
    const props = typeof params.props === "function" ? params.props(current.props, onceProps) : params.props ?? current.props;
    const flash = typeof params.flash === "function" ? params.flash(current.flash) : params.flash;
    const { viewTransition, onError, onFinish, onFlash, onSuccess, ...pageParams } = params;
    const page2 = {
      ...current,
      ...pageParams,
      flash: flash ?? {},
      props
    };
    const preserveScroll = RequestParams.resolvePreserveOption(params.preserveScroll ?? false, page2);
    const preserveState = RequestParams.resolvePreserveOption(params.preserveState ?? false, page2);
    return page.set(page2, {
      replace,
      preserveScroll,
      preserveState,
      viewTransition
    }).then(() => {
      const currentFlash = page.get().flash;
      if (Object.keys(currentFlash).length > 0) {
        fireFlashEvent(currentFlash);
        onFlash == null ? void 0 : onFlash(currentFlash);
      }
      const errors = page.get().props.errors || {};
      if (Object.keys(errors).length === 0) {
        onSuccess == null ? void 0 : onSuccess(page.get());
        return;
      }
      const scopedErrors = params.errorBag ? errors[params.errorBag || ""] || {} : errors;
      onError == null ? void 0 : onError(scopedErrors);
    }).finally(() => onFinish == null ? void 0 : onFinish(params));
  }
  getPrefetchParams(href, options) {
    return {
      ...this.getPendingVisit(href, {
        ...options,
        async: true,
        showProgress: false,
        prefetch: true,
        viewTransition: false
      }),
      ...this.getVisitEvents(options)
    };
  }
  getPendingVisit(href, options, pendingVisitOptions = {}) {
    if (isUrlMethodPair(href)) {
      const urlMethodPair = href;
      href = urlMethodPair.url;
      options.method = options.method ?? urlMethodPair.method;
    }
    const defaultVisitOptionsCallback = config$1.get("visitOptions");
    const configuredOptions = defaultVisitOptionsCallback ? defaultVisitOptionsCallback(href.toString(), cloneDeep(options)) || {} : {};
    const mergedOptions = {
      method: "get",
      data: {},
      replace: false,
      preserveScroll: false,
      preserveState: false,
      only: [],
      except: [],
      headers: {},
      errorBag: "",
      forceFormData: false,
      queryStringArrayFormat: "brackets",
      async: false,
      showProgress: true,
      fresh: false,
      reset: [],
      preserveUrl: false,
      prefetch: false,
      invalidateCacheTags: [],
      viewTransition: false,
      ...options,
      ...configuredOptions
    };
    const [url, _data] = transformUrlAndData(
      href,
      mergedOptions.data,
      mergedOptions.method,
      mergedOptions.forceFormData,
      mergedOptions.queryStringArrayFormat
    );
    const visit = {
      cancelled: false,
      completed: false,
      interrupted: false,
      ...mergedOptions,
      ...pendingVisitOptions,
      url,
      data: _data
    };
    if (visit.prefetch) {
      visit.headers["Purpose"] = "prefetch";
    }
    return visit;
  }
  getVisitEvents(options) {
    return {
      onCancelToken: options.onCancelToken || (() => {
      }),
      onBefore: options.onBefore || (() => {
      }),
      onBeforeUpdate: options.onBeforeUpdate || (() => {
      }),
      onStart: options.onStart || (() => {
      }),
      onProgress: options.onProgress || (() => {
      }),
      onFinish: options.onFinish || (() => {
      }),
      onCancel: options.onCancel || (() => {
      }),
      onSuccess: options.onSuccess || (() => {
      }),
      onError: options.onError || (() => {
      }),
      onFlash: options.onFlash || (() => {
      }),
      onPrefetched: options.onPrefetched || (() => {
      }),
      onPrefetching: options.onPrefetching || (() => {
      })
    };
  }
  loadDeferredProps(deferred) {
    if (deferred) {
      Object.entries(deferred).forEach(([_2, group]) => {
        this.doReload({ only: group, deferredProps: true });
      });
    }
  }
};
var UseFormUtils = class {
  /**
   * Creates a callback that returns a UrlMethodPair.
   *
   * createWayfinderCallback(urlMethodPair)
   * createWayfinderCallback(method, url)
   * createWayfinderCallback(() => urlMethodPair)
   * createWayfinderCallback(() => method, () => url)
   */
  static createWayfinderCallback(...args) {
    return () => {
      if (args.length === 1) {
        return isUrlMethodPair(args[0]) ? args[0] : args[0]();
      }
      return {
        method: typeof args[0] === "function" ? args[0]() : args[0],
        url: typeof args[1] === "function" ? args[1]() : args[1]
      };
    };
  }
  /**
   * Parses all useForm() arguments into { rememberKey, data, precognitionEndpoint }.
   *
   * useForm()
   * useForm(data)
   * useForm(rememberKey, data)
   * useForm(method, url, data)
   * useForm(urlMethodPair, data)
   *
   */
  static parseUseFormArguments(...args) {
    if (args.length === 0) {
      return {
        rememberKey: null,
        data: {},
        precognitionEndpoint: null
      };
    }
    if (args.length === 1) {
      return {
        rememberKey: null,
        data: args[0],
        precognitionEndpoint: null
      };
    }
    if (args.length === 2) {
      if (typeof args[0] === "string") {
        return {
          rememberKey: args[0],
          data: args[1],
          precognitionEndpoint: null
        };
      }
      return {
        rememberKey: null,
        data: args[1],
        precognitionEndpoint: this.createWayfinderCallback(args[0])
      };
    }
    return {
      rememberKey: null,
      data: args[2],
      precognitionEndpoint: this.createWayfinderCallback(args[0], args[1])
    };
  }
  /**
   * Parses all submission arguments into { method, url, options }.
   * It uses the Precognition endpoint if no explicit method/url are provided.
   *
   * form.submit(method, url)
   * form.submit(method, url, options)
   * form.submit(urlMethodPair)
   * form.submit(urlMethodPair, options)
   * form.submit()
   * form.submit(options)
   */
  static parseSubmitArguments(args, precognitionEndpoint) {
    if (args.length === 3 || args.length === 2 && typeof args[0] === "string") {
      return { method: args[0], url: args[1], options: args[2] ?? {} };
    }
    if (isUrlMethodPair(args[0])) {
      return { ...args[0], options: args[1] ?? {} };
    }
    return { ...precognitionEndpoint(), options: args[0] ?? {} };
  }
  /**
   * Merges headers into the Precognition validate() arguments.
   */
  static mergeHeadersForValidation(field, config2, headers) {
    const merge2 = (config3) => {
      config3.headers = {
        ...headers ?? {},
        ...config3.headers ?? {}
      };
      return config3;
    };
    if (field && typeof field === "object" && !("target" in field)) {
      field = merge2(field);
    } else if (config2 && typeof config2 === "object") {
      config2 = merge2(config2);
    } else if (typeof field === "string") {
      config2 = merge2(config2 ?? {});
    } else {
      field = merge2(field ?? {});
    }
    return [field, config2];
  }
};
function undotKey(key) {
  if (!key.includes(".")) {
    return key;
  }
  const transformSegment = (segment) => {
    if (segment.startsWith("[") && segment.endsWith("]")) {
      return segment;
    }
    return segment.split(".").reduce((result, part, index) => index === 0 ? part : `${result}[${part}]`);
  };
  return key.replace(/\\\./g, "__ESCAPED_DOT__").split(/(\[[^\]]*\])/).filter(Boolean).map(transformSegment).join("").replace(/__ESCAPED_DOT__/g, ".");
}
function parseKey(key) {
  const path = [];
  const pattern = /([^\[\]]+)|\[(\d*)\]/g;
  let match;
  while ((match = pattern.exec(key)) !== null) {
    if (match[1] !== void 0) {
      path.push(match[1]);
    } else if (match[2] !== void 0) {
      path.push(match[2] === "" ? "" : Number(match[2]));
    }
  }
  return path;
}
function setNestedObject(obj, path, value) {
  let current = obj;
  for (let i = 0; i < path.length - 1; i++) {
    if (!(path[i] in current)) {
      current[path[i]] = {};
    }
    current = current[path[i]];
  }
  current[path[path.length - 1]] = value;
}
function objectHasSequentialNumericKeys(value) {
  const keys2 = Object.keys(value);
  const numericKeys = keys2.filter((k2) => /^\d+$/.test(k2)).map(Number).sort((a, b2) => a - b2);
  return keys2.length === numericKeys.length && numericKeys.length > 0 && numericKeys[0] === 0 && numericKeys.every((n, i) => n === i);
}
function convertSequentialObjectsToArrays(value) {
  if (Array.isArray(value)) {
    return value.map(convertSequentialObjectsToArrays);
  }
  if (typeof value !== "object" || value === null || isFile$1(value)) {
    return value;
  }
  if (objectHasSequentialNumericKeys(value)) {
    const result2 = [];
    for (let i = 0; i < Object.keys(value).length; i++) {
      result2[i] = convertSequentialObjectsToArrays(value[i]);
    }
    return result2;
  }
  const result = {};
  for (const key in value) {
    result[key] = convertSequentialObjectsToArrays(value[key]);
  }
  return result;
}
function formDataToObject(source) {
  const form = {};
  for (const [key, value] of source.entries()) {
    if (value instanceof File && value.size === 0 && value.name === "") {
      continue;
    }
    const path = parseKey(undotKey(key));
    if (path[path.length - 1] === "") {
      const arrayPath = path.slice(0, -1);
      const existing = get$1(form, arrayPath);
      if (Array.isArray(existing)) {
        existing.push(value);
      } else if (existing && typeof existing === "object" && !isFile$1(existing)) {
        const numericKeys = Object.keys(existing).filter((k2) => /^\d+$/.test(k2)).map(Number).sort((a, b2) => a - b2);
        set(form, arrayPath, numericKeys.length > 0 ? [...numericKeys.map((k2) => existing[k2]), value] : [value]);
      } else {
        set(form, arrayPath, [value]);
      }
      continue;
    }
    setNestedObject(form, path.map(String), value);
  }
  return convertSequentialObjectsToArrays(form);
}
var Renderer = {
  preferredAttribute() {
    return config$1.get("future.useDataInertiaHeadAttribute") ? "data-inertia" : "inertia";
  },
  buildDOMElement(tag) {
    const template = document.createElement("template");
    template.innerHTML = tag;
    const node = template.content.firstChild;
    if (!tag.startsWith("<script ")) {
      return node;
    }
    const script = document.createElement("script");
    script.innerHTML = node.innerHTML;
    node.getAttributeNames().forEach((name) => {
      script.setAttribute(name, node.getAttribute(name) || "");
    });
    return script;
  },
  isInertiaManagedElement(element) {
    return element.nodeType === Node.ELEMENT_NODE && element.getAttribute(this.preferredAttribute()) !== null;
  },
  findMatchingElementIndex(element, elements) {
    const attribute = this.preferredAttribute();
    const key = element.getAttribute(attribute);
    if (key !== null) {
      return elements.findIndex((element2) => element2.getAttribute(attribute) === key);
    }
    return -1;
  },
  update: debounce(function(elements) {
    const sourceElements = elements.map((element) => this.buildDOMElement(element));
    const targetElements = Array.from(document.head.childNodes).filter(
      (element) => this.isInertiaManagedElement(element)
    );
    targetElements.forEach((targetElement) => {
      var _a, _b;
      const index = this.findMatchingElementIndex(targetElement, sourceElements);
      if (index === -1) {
        (_a = targetElement == null ? void 0 : targetElement.parentNode) == null ? void 0 : _a.removeChild(targetElement);
        return;
      }
      const sourceElement = sourceElements.splice(index, 1)[0];
      if (sourceElement && !targetElement.isEqualNode(sourceElement)) {
        (_b = targetElement == null ? void 0 : targetElement.parentNode) == null ? void 0 : _b.replaceChild(sourceElement, targetElement);
      }
    });
    sourceElements.forEach((element) => document.head.appendChild(element));
  }, 1)
};
function createHeadManager(isServer3, titleCallback, onUpdate) {
  const states = {};
  let lastProviderId = 0;
  function connect() {
    const id = lastProviderId += 1;
    states[id] = [];
    return id.toString();
  }
  function disconnect(id) {
    if (id === null || Object.keys(states).indexOf(id) === -1) {
      return;
    }
    delete states[id];
    commit();
  }
  function reconnect(id) {
    if (Object.keys(states).indexOf(id) === -1) {
      states[id] = [];
    }
  }
  function update(id, elements = []) {
    if (id !== null && Object.keys(states).indexOf(id) > -1) {
      states[id] = elements;
    }
    commit();
  }
  function collect() {
    const title = titleCallback("");
    const attribute = Renderer.preferredAttribute();
    const defaults2 = {
      ...title ? { title: `<title ${attribute}="">${title}</title>` } : {}
    };
    const elements = Object.values(states).reduce((carry, elements2) => carry.concat(elements2), []).reduce((carry, element) => {
      if (element.indexOf("<") === -1) {
        return carry;
      }
      if (element.indexOf("<title ") === 0) {
        const title2 = element.match(/(<title [^>]+>)(.*?)(<\/title>)/);
        carry.title = title2 ? `${title2[1]}${titleCallback(title2[2])}${title2[3]}` : element;
        return carry;
      }
      const match = element.match(attribute === "inertia" ? / inertia="[^"]+"/ : / data-inertia="[^"]+"/);
      if (match) {
        carry[match[0]] = element;
      } else {
        carry[Object.keys(carry).length] = element;
      }
      return carry;
    }, defaults2);
    return Object.values(elements);
  }
  function commit() {
    isServer3 ? onUpdate(collect()) : Renderer.update(collect());
  }
  commit();
  return {
    forceUpdate: commit,
    createProvider: function() {
      const id = connect();
      return {
        preferredAttribute: Renderer.preferredAttribute,
        reconnect: () => reconnect(id),
        update: (elements) => update(id, elements),
        disconnect: () => disconnect(id)
      };
    }
  };
}
var MERGE_INTENT_HEADER = "X-Inertia-Infinite-Scroll-Merge-Intent";
var useInfiniteScrollData = (options) => {
  const getScrollPropFromCurrentPage = () => {
    var _a;
    const scrollProp = (_a = page.get().scrollProps) == null ? void 0 : _a[options.getPropName()];
    if (scrollProp) {
      return scrollProp;
    }
    throw new Error(`The page object does not contain a scroll prop named "${options.getPropName()}".`);
  };
  const state = {
    component: null,
    loading: false,
    previousPage: null,
    nextPage: null,
    lastLoadedPage: null,
    requestCount: 0
  };
  const resetState = () => {
    const scrollProp = getScrollPropFromCurrentPage();
    state.component = page.get().component;
    state.loading = false;
    state.previousPage = scrollProp.previousPage;
    state.nextPage = scrollProp.nextPage;
    state.lastLoadedPage = scrollProp.currentPage;
    state.requestCount = 0;
  };
  const getRememberKey = () => `inertia:infinite-scroll-data:${options.getPropName()}`;
  if (typeof window !== "undefined") {
    resetState();
    const rememberedState = router.restore(getRememberKey());
    if (rememberedState && typeof rememberedState === "object" && rememberedState.lastLoadedPage === getScrollPropFromCurrentPage().currentPage) {
      state.previousPage = rememberedState.previousPage;
      state.nextPage = rememberedState.nextPage;
      state.lastLoadedPage = rememberedState.lastLoadedPage;
      state.requestCount = rememberedState.requestCount || 0;
    }
  }
  const removeEventListener = router.on("success", (event) => {
    var _a;
    if (state.component === event.detail.page.component && getScrollPropFromCurrentPage().reset) {
      resetState();
      (_a = options.onReset) == null ? void 0 : _a.call(options);
    }
  });
  const getScrollPropKeyForSide = (side) => {
    return side === "next" ? "nextPage" : "previousPage";
  };
  const findPageToLoad = (side) => {
    const pagePropName = getScrollPropKeyForSide(side);
    return state[pagePropName];
  };
  const syncStateOnSuccess = (side) => {
    const scrollProp = getScrollPropFromCurrentPage();
    const paginationProp = getScrollPropKeyForSide(side);
    state.lastLoadedPage = scrollProp.currentPage;
    state[paginationProp] = scrollProp[paginationProp];
    state.requestCount += 1;
    router.remember(
      {
        previousPage: state.previousPage,
        nextPage: state.nextPage,
        lastLoadedPage: state.lastLoadedPage,
        requestCount: state.requestCount
      },
      getRememberKey()
    );
  };
  const getPageName = () => getScrollPropFromCurrentPage().pageName;
  const getRequestCount = () => state.requestCount;
  const fetchPage = (side, reloadOptions = {}) => {
    const page2 = findPageToLoad(side);
    if (state.loading || page2 === null) {
      return;
    }
    state.loading = true;
    router.reload({
      ...reloadOptions,
      data: { [getPageName()]: page2 },
      only: [options.getPropName()],
      preserveUrl: true,
      // we handle URL updates manually via useInfiniteScrollQueryString()
      headers: {
        [MERGE_INTENT_HEADER]: side === "previous" ? "prepend" : "append",
        ...reloadOptions.headers
      },
      onBefore: (visit) => {
        var _a;
        side === "next" ? options.onBeforeNextRequest() : options.onBeforePreviousRequest();
        (_a = reloadOptions.onBefore) == null ? void 0 : _a.call(reloadOptions, visit);
      },
      onBeforeUpdate: (page3) => {
        var _a;
        options.onBeforeUpdate();
        (_a = reloadOptions.onBeforeUpdate) == null ? void 0 : _a.call(reloadOptions, page3);
      },
      onSuccess: (page3) => {
        var _a;
        syncStateOnSuccess(side);
        (_a = reloadOptions.onSuccess) == null ? void 0 : _a.call(reloadOptions, page3);
      },
      onFinish: (visit) => {
        var _a;
        state.loading = false;
        side === "next" ? options.onCompleteNextRequest(state.lastLoadedPage) : options.onCompletePreviousRequest(state.lastLoadedPage);
        (_a = reloadOptions.onFinish) == null ? void 0 : _a.call(reloadOptions, visit);
      }
    });
  };
  const getLastLoadedPage = () => state.lastLoadedPage;
  const hasPrevious = () => !!state.previousPage;
  const hasNext = () => !!state.nextPage;
  const fetchPrevious = (reloadOptions) => fetchPage("previous", reloadOptions);
  const fetchNext = (reloadOptions) => fetchPage("next", reloadOptions);
  return {
    getLastLoadedPage,
    getPageName,
    getRequestCount,
    hasPrevious,
    hasNext,
    fetchNext,
    fetchPrevious,
    removeEventListener
  };
};
var useIntersectionObservers = () => {
  const intersectionObservers = [];
  const newIntersectionObserver = (callback, options = {}) => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          callback(entry);
        }
      }
    }, options);
    intersectionObservers.push(observer);
    return observer;
  };
  const flushAll = () => {
    intersectionObservers.forEach((observer) => observer.disconnect());
    intersectionObservers.length = 0;
  };
  return {
    new: newIntersectionObserver,
    flushAll
  };
};
var INFINITE_SCROLL_PAGE_KEY = "infiniteScrollPage";
var INFINITE_SCROLL_IGNORE_KEY = "infiniteScrollIgnore";
var getPageFromElement = (element) => element.dataset[INFINITE_SCROLL_PAGE_KEY];
var useInfiniteScrollElementManager = (options) => {
  const intersectionObservers = useIntersectionObservers();
  let itemsObserver;
  let startElementObserver;
  let endElementObserver;
  let itemsMutationObserver;
  let triggersEnabled = false;
  const setupObservers = () => {
    itemsMutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) {
            return;
          }
          addedElements.add(node);
        });
      });
      rememberElementsDebounced();
    });
    itemsMutationObserver.observe(options.getItemsElement(), { childList: true });
    itemsObserver = intersectionObservers.new(
      (entry) => options.onItemIntersected(entry.target)
    );
    const observerOptions = {
      root: options.getScrollableParent(),
      rootMargin: `${Math.max(1, options.getTriggerMargin())}px`
    };
    startElementObserver = intersectionObservers.new(options.onPreviousTriggered, observerOptions);
    endElementObserver = intersectionObservers.new(options.onNextTriggered, observerOptions);
  };
  const enableTriggers = () => {
    if (triggersEnabled) {
      disableTriggers();
    }
    const startElement = options.getStartElement();
    const endElement = options.getEndElement();
    if (startElement && options.shouldFetchPrevious()) {
      startElementObserver.observe(startElement);
    }
    if (endElement && options.shouldFetchNext()) {
      endElementObserver.observe(endElement);
    }
    triggersEnabled = true;
  };
  const disableTriggers = () => {
    if (!triggersEnabled) {
      return;
    }
    startElementObserver.disconnect();
    endElementObserver.disconnect();
    triggersEnabled = false;
  };
  const refreshTriggers = () => {
    if (triggersEnabled) {
      enableTriggers();
    }
  };
  const flushAll = () => {
    disableTriggers();
    intersectionObservers.flushAll();
    itemsMutationObserver == null ? void 0 : itemsMutationObserver.disconnect();
  };
  const addedElements = /* @__PURE__ */ new Set();
  const elementIsUntagged = (element) => !(INFINITE_SCROLL_PAGE_KEY in element.dataset) && !(INFINITE_SCROLL_IGNORE_KEY in element.dataset);
  const processManuallyAddedElements = () => {
    Array.from(addedElements).forEach((element) => {
      if (elementIsUntagged(element)) {
        element.dataset[INFINITE_SCROLL_IGNORE_KEY] = "true";
      }
      itemsObserver.observe(element);
    });
    addedElements.clear();
  };
  const findUntaggedElements = (containerElement) => {
    return Array.from(
      containerElement.querySelectorAll(
        `:scope > *:not([data-infinite-scroll-page]):not([data-infinite-scroll-ignore])`
      )
    );
  };
  let hasRestoredElements = false;
  const processServerLoadedElements = (loadedPage) => {
    if (!hasRestoredElements) {
      hasRestoredElements = true;
      if (restoreElements()) {
        return;
      }
    }
    findUntaggedElements(options.getItemsElement()).forEach((element) => {
      if (elementIsUntagged(element)) {
        element.dataset[INFINITE_SCROLL_PAGE_KEY] = (loadedPage == null ? void 0 : loadedPage.toString()) || "1";
      }
      itemsObserver.observe(element);
    });
    rememberElements();
  };
  const getElementsRememberKey = () => `inertia:infinite-scroll-elements:${options.getPropName()}`;
  const rememberElements = () => {
    const pageElementRange = {};
    const childNodes = options.getItemsElement().childNodes;
    for (let index = 0; index < childNodes.length; index++) {
      const node = childNodes[index];
      if (node.nodeType !== Node.ELEMENT_NODE) {
        continue;
      }
      const page2 = getPageFromElement(node);
      if (typeof page2 === "undefined") {
        continue;
      }
      if (!(page2 in pageElementRange)) {
        pageElementRange[page2] = { from: index, to: index };
      } else {
        pageElementRange[page2].to = index;
      }
    }
    router.remember(pageElementRange, getElementsRememberKey());
  };
  const rememberElementsDebounced = debounce(rememberElements, 250);
  const restoreElements = () => {
    const pageElementRange = router.restore(getElementsRememberKey());
    if (!pageElementRange || typeof pageElementRange !== "object") {
      return false;
    }
    const childNodes = options.getItemsElement().childNodes;
    for (let index = 0; index < childNodes.length; index++) {
      const node = childNodes[index];
      if (node.nodeType !== Node.ELEMENT_NODE) {
        continue;
      }
      const element = node;
      let elementPage;
      for (const [page2, range2] of Object.entries(pageElementRange)) {
        if (index >= range2.from && index <= range2.to) {
          elementPage = page2;
          break;
        }
      }
      if (elementPage) {
        element.dataset[INFINITE_SCROLL_PAGE_KEY] = elementPage;
      } else if (!elementIsUntagged(element)) {
        continue;
      } else {
        element.dataset[INFINITE_SCROLL_IGNORE_KEY] = "true";
      }
      itemsObserver.observe(element);
    }
    return true;
  };
  return {
    setupObservers,
    enableTriggers,
    disableTriggers,
    refreshTriggers,
    flushAll,
    processManuallyAddedElements,
    processServerLoadedElements
  };
};
var queue3 = new Queue();
var initialUrl;
var payloadUrl;
var initialUrlWasAbsolute = null;
var useInfiniteScrollQueryString = (options) => {
  let enabled = true;
  const queuePageUpdate = (page2) => {
    queue3.add(() => {
      return new Promise((resolve) => {
        if (!enabled) {
          initialUrl = payloadUrl = null;
          return resolve();
        }
        if (!initialUrl || !payloadUrl) {
          const currentPageUrl = page.get().url;
          initialUrl = hrefToUrl(currentPageUrl);
          payloadUrl = hrefToUrl(currentPageUrl);
          initialUrlWasAbsolute = urlHasProtocol(currentPageUrl);
        }
        const pageName = options.getPageName();
        const searchParams = payloadUrl.searchParams;
        if (page2 === "1") {
          searchParams.delete(pageName);
        } else {
          searchParams.set(pageName, page2);
        }
        setTimeout(() => resolve());
      });
    }).finally(() => {
      if (enabled && initialUrl && payloadUrl && initialUrl.href !== payloadUrl.href && initialUrlWasAbsolute !== null) {
        router.replace({
          url: urlToString(payloadUrl, initialUrlWasAbsolute),
          preserveScroll: true,
          preserveState: true
        });
      }
      initialUrl = payloadUrl = initialUrlWasAbsolute = null;
    });
  };
  const onItemIntersected = debounce((itemElement) => {
    var _a;
    const itemsElement = options.getItemsElement();
    if (!enabled || options.shouldPreserveUrl() || !itemElement || !itemsElement) {
      return;
    }
    const pageMap = /* @__PURE__ */ new Map();
    const elements = [...itemsElement.children];
    getElementsInViewportFromCollection(elements, itemElement).forEach((element) => {
      const page2 = getPageFromElement(element) ?? "1";
      if (pageMap.has(page2)) {
        pageMap.set(page2, pageMap.get(page2) + 1);
      } else {
        pageMap.set(page2, 1);
      }
    });
    const sortedPages = Array.from(pageMap.entries()).sort((a, b2) => b2[1] - a[1]);
    const mostVisiblePage = (_a = sortedPages[0]) == null ? void 0 : _a[0];
    if (mostVisiblePage !== void 0) {
      queuePageUpdate(mostVisiblePage);
    }
  }, 250);
  return {
    onItemIntersected,
    cancel: () => enabled = false
  };
};
var useInfiniteScrollPreservation = (options) => {
  const createCallbacks = () => {
    let currentScrollTop;
    let referenceElement = null;
    let referenceElementTop = 0;
    const captureScrollPosition = () => {
      const scrollableContainer = options.getScrollableParent();
      const itemsElement = options.getItemsElement();
      currentScrollTop = (scrollableContainer == null ? void 0 : scrollableContainer.scrollTop) || window.scrollY;
      const visibleElements = getElementsInViewportFromCollection([...itemsElement.children]);
      if (visibleElements.length > 0) {
        referenceElement = visibleElements[0];
        const containerRect = (scrollableContainer == null ? void 0 : scrollableContainer.getBoundingClientRect()) || { top: 0 };
        const containerTop = scrollableContainer ? containerRect.top : 0;
        const rect = referenceElement.getBoundingClientRect();
        referenceElementTop = rect.top - containerTop;
      }
    };
    const restoreScrollPosition = () => {
      if (!referenceElement) {
        return;
      }
      let attempts = 0;
      let restored = false;
      const restore = () => {
        attempts++;
        if (restored || attempts > 10) {
          return false;
        }
        const scrollableContainer = options.getScrollableParent();
        const containerRect = (scrollableContainer == null ? void 0 : scrollableContainer.getBoundingClientRect()) || { top: 0 };
        const containerTop = scrollableContainer ? containerRect.top : 0;
        const newRect = referenceElement.getBoundingClientRect();
        const newElementTop = newRect.top - containerTop;
        const adjustment = newElementTop - referenceElementTop;
        if (adjustment === 0) {
          window.requestAnimationFrame(restore);
          return;
        }
        if (scrollableContainer) {
          scrollableContainer.scrollTo({ top: currentScrollTop + adjustment });
        } else {
          window.scrollTo(0, window.scrollY + adjustment);
        }
        restored = true;
      };
      window.requestAnimationFrame(restore);
    };
    return {
      captureScrollPosition,
      restoreScrollPosition
    };
  };
  return {
    createCallbacks
  };
};
function useInfiniteScroll(options) {
  const queryStringManager = useInfiniteScrollQueryString({ ...options, getPageName: () => dataManager.getPageName() });
  const scrollPreservation = useInfiniteScrollPreservation(options);
  const elementManager = useInfiniteScrollElementManager({
    ...options,
    // As items enter viewport, update URL to reflect the most visible page
    onItemIntersected: queryStringManager.onItemIntersected,
    onPreviousTriggered: () => dataManager.fetchPrevious(),
    onNextTriggered: () => dataManager.fetchNext()
  });
  const dataManager = useInfiniteScrollData({
    ...options,
    // Before updating page data, tag any manually added DOM elements
    // so they don't get confused with server-loaded content
    onBeforeUpdate: elementManager.processManuallyAddedElements,
    // After successful request, tag new server content
    onCompletePreviousRequest: (loadedPage) => {
      options.onCompletePreviousRequest();
      requestAnimationFrame(() => elementManager.processServerLoadedElements(loadedPage), 2);
    },
    onCompleteNextRequest: (loadedPage) => {
      options.onCompleteNextRequest();
      requestAnimationFrame(() => elementManager.processServerLoadedElements(loadedPage), 2);
    },
    onReset: options.onDataReset
  });
  const addScrollPreservationCallbacks = (reloadOptions) => {
    const { captureScrollPosition, restoreScrollPosition } = scrollPreservation.createCallbacks();
    const originalOnBeforeUpdate = reloadOptions.onBeforeUpdate || (() => {
    });
    const originalOnSuccess = reloadOptions.onSuccess || (() => {
    });
    reloadOptions.onBeforeUpdate = (page2) => {
      originalOnBeforeUpdate(page2);
      captureScrollPosition();
    };
    reloadOptions.onSuccess = (page2) => {
      originalOnSuccess(page2);
      restoreScrollPosition();
    };
    return reloadOptions;
  };
  const originalFetchNext = dataManager.fetchNext;
  dataManager.fetchNext = (reloadOptions = {}) => {
    if (options.inReverseMode()) {
      reloadOptions = addScrollPreservationCallbacks(reloadOptions);
    }
    originalFetchNext(reloadOptions);
  };
  const originalFetchPrevious = dataManager.fetchPrevious;
  dataManager.fetchPrevious = (reloadOptions = {}) => {
    if (!options.inReverseMode()) {
      reloadOptions = addScrollPreservationCallbacks(reloadOptions);
    }
    originalFetchPrevious(reloadOptions);
  };
  const removeEventListener = router.on("success", () => requestAnimationFrame(elementManager.refreshTriggers, 2));
  return {
    dataManager,
    elementManager,
    flush: () => {
      removeEventListener();
      dataManager.removeEventListener();
      elementManager.flushAll();
      queryStringManager.cancel();
    }
  };
}
function isContentEditableOrPrevented(event) {
  return event.target instanceof HTMLElement && event.target.isContentEditable || event.defaultPrevented;
}
function shouldIntercept(event) {
  const isLink = event.currentTarget.tagName.toLowerCase() === "a";
  return !(isContentEditableOrPrevented(event) || isLink && event.altKey || isLink && event.ctrlKey || isLink && event.metaKey || isLink && event.shiftKey || isLink && "button" in event && event.button !== 0);
}
function shouldNavigate(event) {
  const isButton = event.currentTarget.tagName.toLowerCase() === "button";
  return !isContentEditableOrPrevented(event) && (event.key === "Enter" || isButton && event.key === " ");
}
var baseComponentSelector = "nprogress";
var progress2;
var settings = {
  minimum: 0.08,
  easing: "linear",
  positionUsing: "translate3d",
  speed: 200,
  trickle: true,
  trickleSpeed: 200,
  showSpinner: true,
  barSelector: '[role="bar"]',
  spinnerSelector: '[role="spinner"]',
  parent: "body",
  color: "#29d",
  includeCSS: true,
  template: [
    '<div class="bar" role="bar">',
    '<div class="peg"></div>',
    "</div>",
    '<div class="spinner" role="spinner">',
    '<div class="spinner-icon"></div>',
    "</div>"
  ].join("")
};
var status = null;
var configure = (options) => {
  Object.assign(settings, options);
  if (settings.includeCSS) {
    injectCSS(settings.color);
  }
  progress2 = document.createElement("div");
  progress2.id = baseComponentSelector;
  progress2.innerHTML = settings.template;
};
var set5 = (n) => {
  const started = isStarted();
  n = clamp(n, settings.minimum, 1);
  status = n === 1 ? null : n;
  const progress3 = render(!started);
  const bar = progress3.querySelector(settings.barSelector);
  const speed = settings.speed;
  const ease = settings.easing;
  progress3.offsetWidth;
  queue4((next) => {
    const barStyles = (() => {
      if (settings.positionUsing === "translate3d") {
        return {
          transition: `all ${speed}ms ${ease}`,
          transform: `translate3d(${toBarPercentage(n)}%,0,0)`
        };
      }
      if (settings.positionUsing === "translate") {
        return {
          transition: `all ${speed}ms ${ease}`,
          transform: `translate(${toBarPercentage(n)}%,0)`
        };
      }
      return { marginLeft: `${toBarPercentage(n)}%` };
    })();
    for (const key in barStyles) {
      bar.style[key] = barStyles[key];
    }
    if (n !== 1) {
      return setTimeout(next, speed);
    }
    progress3.style.transition = "none";
    progress3.style.opacity = "1";
    progress3.offsetWidth;
    setTimeout(() => {
      progress3.style.transition = `all ${speed}ms linear`;
      progress3.style.opacity = "0";
      setTimeout(() => {
        remove();
        progress3.style.transition = "";
        progress3.style.opacity = "";
        next();
      }, speed);
    }, speed);
  });
};
var isStarted = () => typeof status === "number";
var start = () => {
  if (!status) {
    set5(0);
  }
  const work = function() {
    setTimeout(function() {
      if (!status) {
        return;
      }
      increaseByRandom();
      work();
    }, settings.trickleSpeed);
  };
  if (settings.trickle) {
    work();
  }
};
var done = (force) => {
  if (!force && !status) {
    return;
  }
  increaseByRandom(0.3 + 0.5 * Math.random());
  set5(1);
};
var increaseByRandom = (amount) => {
  const n = status;
  if (n === null) {
    return start();
  }
  if (n > 1) {
    return;
  }
  amount = typeof amount === "number" ? amount : (() => {
    const ranges = {
      0.1: [0, 0.2],
      0.04: [0.2, 0.5],
      0.02: [0.5, 0.8],
      5e-3: [0.8, 0.99]
    };
    for (const r2 in ranges) {
      if (n >= ranges[r2][0] && n < ranges[r2][1]) {
        return parseFloat(r2);
      }
    }
    return 0;
  })();
  return set5(clamp(n + amount, 0, 0.994));
};
var render = (fromStart) => {
  var _a;
  if (isRendered()) {
    return document.getElementById(baseComponentSelector);
  }
  document.documentElement.classList.add(`${baseComponentSelector}-busy`);
  const bar = progress2.querySelector(settings.barSelector);
  const perc = fromStart ? "-100" : toBarPercentage(status || 0);
  const parent = getParent();
  bar.style.transition = "all 0 linear";
  bar.style.transform = `translate3d(${perc}%,0,0)`;
  if (!settings.showSpinner) {
    (_a = progress2.querySelector(settings.spinnerSelector)) == null ? void 0 : _a.remove();
  }
  if (parent !== document.body) {
    parent.classList.add(`${baseComponentSelector}-custom-parent`);
  }
  parent.appendChild(progress2);
  return progress2;
};
var getParent = () => {
  return isDOM(settings.parent) ? settings.parent : document.querySelector(settings.parent);
};
var remove = () => {
  document.documentElement.classList.remove(`${baseComponentSelector}-busy`);
  getParent().classList.remove(`${baseComponentSelector}-custom-parent`);
  progress2 == null ? void 0 : progress2.remove();
};
var isRendered = () => {
  return document.getElementById(baseComponentSelector) !== null;
};
var isDOM = (obj) => {
  if (typeof HTMLElement === "object") {
    return obj instanceof HTMLElement;
  }
  return obj && typeof obj === "object" && obj.nodeType === 1 && typeof obj.nodeName === "string";
};
function clamp(n, min2, max2) {
  if (n < min2) {
    return min2;
  }
  if (n > max2) {
    return max2;
  }
  return n;
}
var toBarPercentage = (n) => (-1 + n) * 100;
var queue4 = /* @__PURE__ */ (() => {
  const pending = [];
  const next = () => {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  };
  return (fn) => {
    pending.push(fn);
    if (pending.length === 1) {
      next();
    }
  };
})();
var injectCSS = (color) => {
  const element = document.createElement("style");
  element.textContent = `
    #${baseComponentSelector} {
      pointer-events: none;
    }

    #${baseComponentSelector} .bar {
      background: ${color};

      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;

      width: 100%;
      height: 2px;
    }

    #${baseComponentSelector} .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
      opacity: 1.0;

      transform: rotate(3deg) translate(0px, -4px);
    }

    #${baseComponentSelector} .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }

    #${baseComponentSelector} .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;

      border: solid 2px transparent;
      border-top-color: ${color};
      border-left-color: ${color};
      border-radius: 50%;

      animation: ${baseComponentSelector}-spinner 400ms linear infinite;
    }

    .${baseComponentSelector}-custom-parent {
      overflow: hidden;
      position: relative;
    }

    .${baseComponentSelector}-custom-parent #${baseComponentSelector} .spinner,
    .${baseComponentSelector}-custom-parent #${baseComponentSelector} .bar {
      position: absolute;
    }

    @keyframes ${baseComponentSelector}-spinner {
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(element);
};
var show = () => {
  if (progress2) {
    progress2.style.display = "";
  }
};
var hide = () => {
  if (progress2) {
    progress2.style.display = "none";
  }
};
var progress_component_default = {
  configure,
  isStarted,
  done,
  set: set5,
  remove,
  start,
  status,
  show,
  hide
};
var Progress = class {
  constructor() {
    this.hideCount = 0;
  }
  start() {
    progress_component_default.start();
  }
  reveal(force = false) {
    this.hideCount = Math.max(0, this.hideCount - 1);
    if (force || this.hideCount === 0) {
      progress_component_default.show();
    }
  }
  hide() {
    this.hideCount++;
    progress_component_default.hide();
  }
  set(status2) {
    progress_component_default.set(Math.max(0, Math.min(1, status2)));
  }
  finish() {
    progress_component_default.done();
  }
  reset() {
    progress_component_default.set(0);
  }
  remove() {
    progress_component_default.done();
    progress_component_default.remove();
  }
  isStarted() {
    return progress_component_default.isStarted();
  }
  getStatus() {
    return progress_component_default.status;
  }
};
var progress = new Progress();
progress.reveal;
progress.hide;
function addEventListeners(delay) {
  document.addEventListener("inertia:start", (e) => handleStartEvent(e, delay));
  document.addEventListener("inertia:progress", handleProgressEvent);
}
function handleStartEvent(event, delay) {
  if (!event.detail.visit.showProgress) {
    progress.hide();
  }
  const timeout = setTimeout(() => progress.start(), delay);
  document.addEventListener("inertia:finish", (e) => finish(e, timeout), { once: true });
}
function handleProgressEvent(event) {
  var _a;
  if (progress.isStarted() && ((_a = event.detail.progress) == null ? void 0 : _a.percentage)) {
    progress.set(Math.max(progress.getStatus(), event.detail.progress.percentage / 100 * 0.9));
  }
}
function finish(event, timeout) {
  clearTimeout(timeout);
  if (!progress.isStarted()) {
    return;
  }
  if (event.detail.visit.completed) {
    progress.finish();
  } else if (event.detail.visit.interrupted) {
    progress.reset();
  } else if (event.detail.visit.cancelled) {
    progress.remove();
  }
}
function setupProgress({
  delay = 250,
  color = "#29d",
  includeCSS = true,
  showSpinner = false
} = {}) {
  addEventListeners(delay);
  progress_component_default.configure({ showSpinner, includeCSS, color });
}
var FormComponentResetSymbol = /* @__PURE__ */ Symbol("FormComponentReset");
function isFormElement(element) {
  return element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement;
}
function resetInputElement(input, defaultValues) {
  const oldValue = input.value;
  const oldChecked = input.checked;
  switch (input.type.toLowerCase()) {
    case "checkbox":
      input.checked = defaultValues.includes(input.value);
      break;
    case "radio":
      input.checked = defaultValues[0] === input.value;
      break;
    case "file":
      input.value = "";
      break;
    case "button":
    case "submit":
    case "reset":
    case "image":
      break;
    default:
      input.value = defaultValues[0] !== null && defaultValues[0] !== void 0 ? String(defaultValues[0]) : "";
  }
  return input.value !== oldValue || input.checked !== oldChecked;
}
function resetSelectElement(select, defaultValues) {
  const oldValue = select.value;
  const oldSelectedOptions = Array.from(select.selectedOptions).map((opt) => opt.value);
  if (select.multiple) {
    const defaultStrings = defaultValues.map((value) => String(value));
    Array.from(select.options).forEach((option) => {
      option.selected = defaultStrings.includes(option.value);
    });
  } else {
    select.value = defaultValues[0] !== void 0 ? String(defaultValues[0]) : "";
  }
  const newSelectedOptions = Array.from(select.selectedOptions).map((opt) => opt.value);
  const hasChanged = select.multiple ? JSON.stringify(oldSelectedOptions.sort()) !== JSON.stringify(newSelectedOptions.sort()) : select.value !== oldValue;
  return hasChanged;
}
function resetFormElement(element, defaultValues) {
  if (element.disabled) {
    if (element instanceof HTMLInputElement) {
      const oldValue = element.value;
      const oldChecked = element.checked;
      switch (element.type.toLowerCase()) {
        case "checkbox":
        case "radio":
          element.checked = element.defaultChecked;
          return element.checked !== oldChecked;
        case "file":
          element.value = "";
          return oldValue !== "";
        case "button":
        case "submit":
        case "reset":
        case "image":
          return false;
        default:
          element.value = element.defaultValue;
          return element.value !== oldValue;
      }
    } else if (element instanceof HTMLSelectElement) {
      const oldSelectedOptions = Array.from(element.selectedOptions).map((opt) => opt.value);
      Array.from(element.options).forEach((option) => {
        option.selected = option.defaultSelected;
      });
      const newSelectedOptions = Array.from(element.selectedOptions).map((opt) => opt.value);
      return JSON.stringify(oldSelectedOptions.sort()) !== JSON.stringify(newSelectedOptions.sort());
    } else if (element instanceof HTMLTextAreaElement) {
      const oldValue = element.value;
      element.value = element.defaultValue;
      return element.value !== oldValue;
    }
    return false;
  }
  if (element instanceof HTMLInputElement) {
    return resetInputElement(element, defaultValues);
  } else if (element instanceof HTMLSelectElement) {
    return resetSelectElement(element, defaultValues);
  } else if (element instanceof HTMLTextAreaElement) {
    const oldValue = element.value;
    element.value = defaultValues[0] !== void 0 ? String(defaultValues[0]) : "";
    return element.value !== oldValue;
  }
  return false;
}
function resetFieldElements(elements, defaultValues) {
  let hasChanged = false;
  if (elements instanceof RadioNodeList || elements instanceof HTMLCollection) {
    Array.from(elements).forEach((node, index) => {
      if (node instanceof Element && isFormElement(node)) {
        if (node instanceof HTMLInputElement && ["checkbox", "radio"].includes(node.type.toLowerCase())) {
          if (resetFormElement(node, defaultValues)) {
            hasChanged = true;
          }
        } else {
          const indexedDefaultValues = defaultValues[index] !== void 0 ? [defaultValues[index]] : [defaultValues[0] ?? null].filter(Boolean);
          if (resetFormElement(node, indexedDefaultValues)) {
            hasChanged = true;
          }
        }
      }
    });
  } else if (isFormElement(elements)) {
    hasChanged = resetFormElement(elements, defaultValues);
  }
  return hasChanged;
}
function resetFormFields(formElement, defaults2, fieldNames) {
  if (!formElement) {
    return;
  }
  const resetEntireForm = !fieldNames || fieldNames.length === 0;
  if (resetEntireForm) {
    const formData = new FormData(formElement);
    const formElementNames = Array.from(formElement.elements).map((el) => isFormElement(el) ? el.name : "").filter(Boolean);
    fieldNames = [.../* @__PURE__ */ new Set([...defaults2.keys(), ...formData.keys(), ...formElementNames])];
  }
  let hasChanged = false;
  fieldNames.forEach((fieldName) => {
    const elements = formElement.elements.namedItem(fieldName);
    if (elements) {
      if (resetFieldElements(elements, defaults2.getAll(fieldName))) {
        hasChanged = true;
      }
    }
  });
  if (hasChanged && resetEntireForm) {
    formElement.dispatchEvent(
      new CustomEvent("reset", { bubbles: true, cancelable: true, detail: { [FormComponentResetSymbol]: true } })
    );
  }
}
var router = new Router();
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
var reactExports = requireReact();
const G = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
const t = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: G
}, [reactExports]);
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredScheduler_production_min;
function requireScheduler_production_min() {
  if (hasRequiredScheduler_production_min) return scheduler_production_min;
  hasRequiredScheduler_production_min = 1;
  (function(exports$1) {
    function f2(a, b2) {
      var c2 = a.length;
      a.push(b2);
      a: for (; 0 < c2; ) {
        var d2 = c2 - 1 >>> 1, e = a[d2];
        if (0 < g2(e, b2)) a[d2] = b2, a[c2] = e, c2 = d2;
        else break a;
      }
    }
    function h3(a) {
      return 0 === a.length ? null : a[0];
    }
    function k2(a) {
      if (0 === a.length) return null;
      var b2 = a[0], c2 = a.pop();
      if (c2 !== b2) {
        a[0] = c2;
        a: for (var d2 = 0, e = a.length, w2 = e >>> 1; d2 < w2; ) {
          var m2 = 2 * (d2 + 1) - 1, C2 = a[m2], n = m2 + 1, x = a[n];
          if (0 > g2(C2, c2)) n < e && 0 > g2(x, C2) ? (a[d2] = x, a[n] = c2, d2 = n) : (a[d2] = C2, a[m2] = c2, d2 = m2);
          else if (n < e && 0 > g2(x, c2)) a[d2] = x, a[n] = c2, d2 = n;
          else break a;
        }
      }
      return b2;
    }
    function g2(a, b2) {
      var c2 = a.sortIndex - b2.sortIndex;
      return 0 !== c2 ? c2 : a.id - b2.id;
    }
    if ("object" === typeof performance && "function" === typeof performance.now) {
      var l2 = performance;
      exports$1.unstable_now = function() {
        return l2.now();
      };
    } else {
      var p2 = Date, q = p2.now();
      exports$1.unstable_now = function() {
        return p2.now() - q;
      };
    }
    var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z = false, A = false, B = false, D = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F = "undefined" !== typeof setImmediate ? setImmediate : null;
    "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function G2(a) {
      for (var b2 = h3(t2); null !== b2; ) {
        if (null === b2.callback) k2(t2);
        else if (b2.startTime <= a) k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
        else break;
        b2 = h3(t2);
      }
    }
    function H(a) {
      B = false;
      G2(a);
      if (!A) if (null !== h3(r2)) A = true, I(J);
      else {
        var b2 = h3(t2);
        null !== b2 && K(H, b2.startTime - a);
      }
    }
    function J(a, b2) {
      A = false;
      B && (B = false, E2(L), L = -1);
      z = true;
      var c2 = y2;
      try {
        G2(b2);
        for (v2 = h3(r2); null !== v2 && (!(v2.expirationTime > b2) || a && !M()); ) {
          var d2 = v2.callback;
          if ("function" === typeof d2) {
            v2.callback = null;
            y2 = v2.priorityLevel;
            var e = d2(v2.expirationTime <= b2);
            b2 = exports$1.unstable_now();
            "function" === typeof e ? v2.callback = e : v2 === h3(r2) && k2(r2);
            G2(b2);
          } else k2(r2);
          v2 = h3(r2);
        }
        if (null !== v2) var w2 = true;
        else {
          var m2 = h3(t2);
          null !== m2 && K(H, m2.startTime - b2);
          w2 = false;
        }
        return w2;
      } finally {
        v2 = null, y2 = c2, z = false;
      }
    }
    var N = false, O = null, L = -1, P = 5, Q = -1;
    function M() {
      return exports$1.unstable_now() - Q < P ? false : true;
    }
    function R() {
      if (null !== O) {
        var a = exports$1.unstable_now();
        Q = a;
        var b2 = true;
        try {
          b2 = O(true, a);
        } finally {
          b2 ? S2() : (N = false, O = null);
        }
      } else N = false;
    }
    var S2;
    if ("function" === typeof F) S2 = function() {
      F(R);
    };
    else if ("undefined" !== typeof MessageChannel) {
      var T = new MessageChannel(), U = T.port2;
      T.port1.onmessage = R;
      S2 = function() {
        U.postMessage(null);
      };
    } else S2 = function() {
      D(R, 0);
    };
    function I(a) {
      O = a;
      N || (N = true, S2());
    }
    function K(a, b2) {
      L = D(function() {
        a(exports$1.unstable_now());
      }, b2);
    }
    exports$1.unstable_IdlePriority = 5;
    exports$1.unstable_ImmediatePriority = 1;
    exports$1.unstable_LowPriority = 4;
    exports$1.unstable_NormalPriority = 3;
    exports$1.unstable_Profiling = null;
    exports$1.unstable_UserBlockingPriority = 2;
    exports$1.unstable_cancelCallback = function(a) {
      a.callback = null;
    };
    exports$1.unstable_continueExecution = function() {
      A || z || (A = true, I(J));
    };
    exports$1.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    exports$1.unstable_getCurrentPriorityLevel = function() {
      return y2;
    };
    exports$1.unstable_getFirstCallbackNode = function() {
      return h3(r2);
    };
    exports$1.unstable_next = function(a) {
      switch (y2) {
        case 1:
        case 2:
        case 3:
          var b2 = 3;
          break;
        default:
          b2 = y2;
      }
      var c2 = y2;
      y2 = b2;
      try {
        return a();
      } finally {
        y2 = c2;
      }
    };
    exports$1.unstable_pauseExecution = function() {
    };
    exports$1.unstable_requestPaint = function() {
    };
    exports$1.unstable_runWithPriority = function(a, b2) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a = 3;
      }
      var c2 = y2;
      y2 = a;
      try {
        return b2();
      } finally {
        y2 = c2;
      }
    };
    exports$1.unstable_scheduleCallback = function(a, b2, c2) {
      var d2 = exports$1.unstable_now();
      "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
      switch (a) {
        case 1:
          var e = -1;
          break;
        case 2:
          e = 250;
          break;
        case 5:
          e = 1073741823;
          break;
        case 4:
          e = 1e4;
          break;
        default:
          e = 5e3;
      }
      e = c2 + e;
      a = { id: u2++, callback: b2, priorityLevel: a, startTime: c2, expirationTime: e, sortIndex: -1 };
      c2 > d2 ? (a.sortIndex = c2, f2(t2, a), null === h3(r2) && a === h3(t2) && (B ? (E2(L), L = -1) : B = true, K(H, c2 - d2))) : (a.sortIndex = e, f2(r2, a), A || z || (A = true, I(J)));
      return a;
    };
    exports$1.unstable_shouldYield = M;
    exports$1.unstable_wrapCallback = function(a) {
      var b2 = y2;
      return function() {
        var c2 = y2;
        y2 = b2;
        try {
          return a.apply(this, arguments);
        } finally {
          y2 = c2;
        }
      };
    };
  })(scheduler_production_min);
  return scheduler_production_min;
}
var hasRequiredScheduler;
function requireScheduler() {
  if (hasRequiredScheduler) return scheduler.exports;
  hasRequiredScheduler = 1;
  {
    scheduler.exports = requireScheduler_production_min();
  }
  return scheduler.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactDom_production_min;
function requireReactDom_production_min() {
  if (hasRequiredReactDom_production_min) return reactDom_production_min;
  hasRequiredReactDom_production_min = 1;
  var aa = requireReact(), ca = requireScheduler();
  function p2(a) {
    for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++) b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
    return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var da = /* @__PURE__ */ new Set(), ea = {};
  function fa(a, b2) {
    ha(a, b2);
    ha(a + "Capture", b2);
  }
  function ha(a, b2) {
    ea[a] = b2;
    for (a = 0; a < b2.length; a++) da.add(b2[a]);
  }
  var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
  function oa(a) {
    if (ja.call(ma, a)) return true;
    if (ja.call(la, a)) return false;
    if (ka.test(a)) return ma[a] = true;
    la[a] = true;
    return false;
  }
  function pa(a, b2, c2, d2) {
    if (null !== c2 && 0 === c2.type) return false;
    switch (typeof b2) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        if (d2) return false;
        if (null !== c2) return !c2.acceptsBooleans;
        a = a.toLowerCase().slice(0, 5);
        return "data-" !== a && "aria-" !== a;
      default:
        return false;
    }
  }
  function qa(a, b2, c2, d2) {
    if (null === b2 || "undefined" === typeof b2 || pa(a, b2, c2, d2)) return true;
    if (d2) return false;
    if (null !== c2) switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return false === b2;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
    return false;
  }
  function v2(a, b2, c2, d2, e, f2, g2) {
    this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
    this.attributeName = d2;
    this.attributeNamespace = e;
    this.mustUseProperty = c2;
    this.propertyName = a;
    this.type = b2;
    this.sanitizeURL = f2;
    this.removeEmptyString = g2;
  }
  var z = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    z[a] = new v2(a, 0, false, a, null, false, false);
  });
  [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var b2 = a[0];
    z[b2] = new v2(b2, 1, false, a[1], null, false, false);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    z[a] = new v2(a, 2, false, a.toLowerCase(), null, false, false);
  });
  ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    z[a] = new v2(a, 2, false, a, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    z[a] = new v2(a, 3, false, a.toLowerCase(), null, false, false);
  });
  ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    z[a] = new v2(a, 3, true, a, null, false, false);
  });
  ["capture", "download"].forEach(function(a) {
    z[a] = new v2(a, 4, false, a, null, false, false);
  });
  ["cols", "rows", "size", "span"].forEach(function(a) {
    z[a] = new v2(a, 6, false, a, null, false, false);
  });
  ["rowSpan", "start"].forEach(function(a) {
    z[a] = new v2(a, 5, false, a.toLowerCase(), null, false, false);
  });
  var ra = /[\-:]([a-z])/g;
  function sa(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var b2 = a.replace(
      ra,
      sa
    );
    z[b2] = new v2(b2, 1, false, a, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var b2 = a.replace(ra, sa);
    z[b2] = new v2(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
  });
  ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var b2 = a.replace(ra, sa);
    z[b2] = new v2(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  ["tabIndex", "crossOrigin"].forEach(function(a) {
    z[a] = new v2(a, 1, false, a.toLowerCase(), null, false, false);
  });
  z.xlinkHref = new v2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  ["src", "href", "action", "formAction"].forEach(function(a) {
    z[a] = new v2(a, 1, false, a.toLowerCase(), null, true, true);
  });
  function ta(a, b2, c2, d2) {
    var e = z.hasOwnProperty(b2) ? z[b2] : null;
    if (null !== e ? 0 !== e.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1]) qa(b2, c2, e, d2) && (c2 = null), d2 || null === e ? oa(b2) && (null === c2 ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c2)) : e.mustUseProperty ? a[e.propertyName] = null === c2 ? 3 === e.type ? false : "" : c2 : (b2 = e.attributeName, d2 = e.attributeNamespace, null === c2 ? a.removeAttribute(b2) : (e = e.type, c2 = 3 === e || 4 === e && true === c2 ? "" : "" + c2, d2 ? a.setAttributeNS(d2, b2, c2) : a.setAttribute(b2, c2)));
  }
  var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
  var Ia = Symbol.for("react.offscreen");
  var Ja = Symbol.iterator;
  function Ka(a) {
    if (null === a || "object" !== typeof a) return null;
    a = Ja && a[Ja] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }
  var A = Object.assign, La;
  function Ma(a) {
    if (void 0 === La) try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      La = b2 && b2[1] || "";
    }
    return "\n" + La + a;
  }
  var Na = false;
  function Oa(a, b2) {
    if (!a || Na) return "";
    Na = true;
    var c2 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b2) if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l2) {
          var d2 = l2;
        }
        Reflect.construct(a, [], b2);
      } else {
        try {
          b2.call();
        } catch (l2) {
          d2 = l2;
        }
        a.call(b2.prototype);
      }
      else {
        try {
          throw Error();
        } catch (l2) {
          d2 = l2;
        }
        a();
      }
    } catch (l2) {
      if (l2 && d2 && "string" === typeof l2.stack) {
        for (var e = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e.length - 1, h3 = f2.length - 1; 1 <= g2 && 0 <= h3 && e[g2] !== f2[h3]; ) h3--;
        for (; 1 <= g2 && 0 <= h3; g2--, h3--) if (e[g2] !== f2[h3]) {
          if (1 !== g2 || 1 !== h3) {
            do
              if (g2--, h3--, 0 > h3 || e[g2] !== f2[h3]) {
                var k2 = "\n" + e[g2].replace(" at new ", " at ");
                a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                return k2;
              }
            while (1 <= g2 && 0 <= h3);
          }
          break;
        }
      }
    } finally {
      Na = false, Error.prepareStackTrace = c2;
    }
    return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
  }
  function Pa(a) {
    switch (a.tag) {
      case 5:
        return Ma(a.type);
      case 16:
        return Ma("Lazy");
      case 13:
        return Ma("Suspense");
      case 19:
        return Ma("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a = Oa(a.type, false), a;
      case 11:
        return a = Oa(a.type.render, false), a;
      case 1:
        return a = Oa(a.type, true), a;
      default:
        return "";
    }
  }
  function Qa(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;
    switch (a) {
      case ya:
        return "Fragment";
      case wa:
        return "Portal";
      case Aa:
        return "Profiler";
      case za:
        return "StrictMode";
      case Ea:
        return "Suspense";
      case Fa:
        return "SuspenseList";
    }
    if ("object" === typeof a) switch (a.$$typeof) {
      case Ca:
        return (a.displayName || "Context") + ".Consumer";
      case Ba:
        return (a._context.displayName || "Context") + ".Provider";
      case Da:
        var b2 = a.render;
        a = a.displayName;
        a || (a = b2.displayName || b2.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Ga:
        return b2 = a.displayName || null, null !== b2 ? b2 : Qa(a.type) || "Memo";
      case Ha:
        b2 = a._payload;
        a = a._init;
        try {
          return Qa(a(b2));
        } catch (c2) {
        }
    }
    return null;
  }
  function Ra(a) {
    var b2 = a.type;
    switch (a.tag) {
      case 24:
        return "Cache";
      case 9:
        return (b2.displayName || "Context") + ".Consumer";
      case 10:
        return (b2._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return a = b2.render, a = a.displayName || a.name || "", b2.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return b2;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Qa(b2);
      case 8:
        return b2 === za ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" === typeof b2) return b2.displayName || b2.name || null;
        if ("string" === typeof b2) return b2;
    }
    return null;
  }
  function Sa(a) {
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return a;
      case "object":
        return a;
      default:
        return "";
    }
  }
  function Ta(a) {
    var b2 = a.type;
    return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
  }
  function Ua(a) {
    var b2 = Ta(a) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d2 = "" + a[b2];
    if (!a.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
      var e = c2.get, f2 = c2.set;
      Object.defineProperty(a, b2, { configurable: true, get: function() {
        return e.call(this);
      }, set: function(a2) {
        d2 = "" + a2;
        f2.call(this, a2);
      } });
      Object.defineProperty(a, b2, { enumerable: c2.enumerable });
      return { getValue: function() {
        return d2;
      }, setValue: function(a2) {
        d2 = "" + a2;
      }, stopTracking: function() {
        a._valueTracker = null;
        delete a[b2];
      } };
    }
  }
  function Va(a) {
    a._valueTracker || (a._valueTracker = Ua(a));
  }
  function Wa(a) {
    if (!a) return false;
    var b2 = a._valueTracker;
    if (!b2) return true;
    var c2 = b2.getValue();
    var d2 = "";
    a && (d2 = Ta(a) ? a.checked ? "true" : "false" : a.value);
    a = d2;
    return a !== c2 ? (b2.setValue(a), true) : false;
  }
  function Xa(a) {
    a = a || ("undefined" !== typeof document ? document : void 0);
    if ("undefined" === typeof a) return null;
    try {
      return a.activeElement || a.body;
    } catch (b2) {
      return a.body;
    }
  }
  function Ya(a, b2) {
    var c2 = b2.checked;
    return A({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a._wrapperState.initialChecked });
  }
  function Za(a, b2) {
    var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
    c2 = Sa(null != b2.value ? b2.value : c2);
    a._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
  }
  function ab(a, b2) {
    b2 = b2.checked;
    null != b2 && ta(a, "checked", b2, false);
  }
  function bb(a, b2) {
    ab(a, b2);
    var c2 = Sa(b2.value), d2 = b2.type;
    if (null != c2) if ("number" === d2) {
      if (0 === c2 && "" === a.value || a.value != c2) a.value = "" + c2;
    } else a.value !== "" + c2 && (a.value = "" + c2);
    else if ("submit" === d2 || "reset" === d2) {
      a.removeAttribute("value");
      return;
    }
    b2.hasOwnProperty("value") ? cb(a, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a, b2.type, Sa(b2.defaultValue));
    null == b2.checked && null != b2.defaultChecked && (a.defaultChecked = !!b2.defaultChecked);
  }
  function db(a, b2, c2) {
    if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
      var d2 = b2.type;
      if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value)) return;
      b2 = "" + a._wrapperState.initialValue;
      c2 || b2 === a.value || (a.value = b2);
      a.defaultValue = b2;
    }
    c2 = a.name;
    "" !== c2 && (a.name = "");
    a.defaultChecked = !!a._wrapperState.initialChecked;
    "" !== c2 && (a.name = c2);
  }
  function cb(a, b2, c2) {
    if ("number" !== b2 || Xa(a.ownerDocument) !== a) null == c2 ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c2 && (a.defaultValue = "" + c2);
  }
  var eb = Array.isArray;
  function fb(a, b2, c2, d2) {
    a = a.options;
    if (b2) {
      b2 = {};
      for (var e = 0; e < c2.length; e++) b2["$" + c2[e]] = true;
      for (c2 = 0; c2 < a.length; c2++) e = b2.hasOwnProperty("$" + a[c2].value), a[c2].selected !== e && (a[c2].selected = e), e && d2 && (a[c2].defaultSelected = true);
    } else {
      c2 = "" + Sa(c2);
      b2 = null;
      for (e = 0; e < a.length; e++) {
        if (a[e].value === c2) {
          a[e].selected = true;
          d2 && (a[e].defaultSelected = true);
          return;
        }
        null !== b2 || a[e].disabled || (b2 = a[e]);
      }
      null !== b2 && (b2.selected = true);
    }
  }
  function gb(a, b2) {
    if (null != b2.dangerouslySetInnerHTML) throw Error(p2(91));
    return A({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
  }
  function hb(a, b2) {
    var c2 = b2.value;
    if (null == c2) {
      c2 = b2.children;
      b2 = b2.defaultValue;
      if (null != c2) {
        if (null != b2) throw Error(p2(92));
        if (eb(c2)) {
          if (1 < c2.length) throw Error(p2(93));
          c2 = c2[0];
        }
        b2 = c2;
      }
      null == b2 && (b2 = "");
      c2 = b2;
    }
    a._wrapperState = { initialValue: Sa(c2) };
  }
  function ib(a, b2) {
    var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
    null != c2 && (c2 = "" + c2, c2 !== a.value && (a.value = c2), null == b2.defaultValue && a.defaultValue !== c2 && (a.defaultValue = c2));
    null != d2 && (a.defaultValue = "" + d2);
  }
  function jb(a) {
    var b2 = a.textContent;
    b2 === a._wrapperState.initialValue && "" !== b2 && null !== b2 && (a.value = b2);
  }
  function kb(a) {
    switch (a) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function lb(a, b2) {
    return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b2) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a;
  }
  var mb, nb = (function(a) {
    return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e) {
      MSApp.execUnsafeLocalFunction(function() {
        return a(b2, c2, d2, e);
      });
    } : a;
  })(function(a, b2) {
    if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b2;
    else {
      mb = mb || document.createElement("div");
      mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
      for (b2 = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
      for (; b2.firstChild; ) a.appendChild(b2.firstChild);
    }
  });
  function ob(a, b2) {
    if (b2) {
      var c2 = a.firstChild;
      if (c2 && c2 === a.lastChild && 3 === c2.nodeType) {
        c2.nodeValue = b2;
        return;
      }
    }
    a.textContent = b2;
  }
  var pb = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, qb = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pb).forEach(function(a) {
    qb.forEach(function(b2) {
      b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
      pb[b2] = pb[a];
    });
  });
  function rb(a, b2, c2) {
    return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a) && pb[a] ? ("" + b2).trim() : b2 + "px";
  }
  function sb(a, b2) {
    a = a.style;
    for (var c2 in b2) if (b2.hasOwnProperty(c2)) {
      var d2 = 0 === c2.indexOf("--"), e = rb(c2, b2[c2], d2);
      "float" === c2 && (c2 = "cssFloat");
      d2 ? a.setProperty(c2, e) : a[c2] = e;
    }
  }
  var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
  function ub(a, b2) {
    if (b2) {
      if (tb[a] && (null != b2.children || null != b2.dangerouslySetInnerHTML)) throw Error(p2(137, a));
      if (null != b2.dangerouslySetInnerHTML) {
        if (null != b2.children) throw Error(p2(60));
        if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML)) throw Error(p2(61));
      }
      if (null != b2.style && "object" !== typeof b2.style) throw Error(p2(62));
    }
  }
  function vb(a, b2) {
    if (-1 === a.indexOf("-")) return "string" === typeof b2.is;
    switch (a) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var wb = null;
  function xb(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return 3 === a.nodeType ? a.parentNode : a;
  }
  var yb = null, zb = null, Ab = null;
  function Bb(a) {
    if (a = Cb(a)) {
      if ("function" !== typeof yb) throw Error(p2(280));
      var b2 = a.stateNode;
      b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
    }
  }
  function Eb(a) {
    zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
  }
  function Fb() {
    if (zb) {
      var a = zb, b2 = Ab;
      Ab = zb = null;
      Bb(a);
      if (b2) for (a = 0; a < b2.length; a++) Bb(b2[a]);
    }
  }
  function Gb(a, b2) {
    return a(b2);
  }
  function Hb() {
  }
  var Ib = false;
  function Jb(a, b2, c2) {
    if (Ib) return a(b2, c2);
    Ib = true;
    try {
      return Gb(a, b2, c2);
    } finally {
      if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
    }
  }
  function Kb(a, b2) {
    var c2 = a.stateNode;
    if (null === c2) return null;
    var d2 = Db(c2);
    if (null === d2) return null;
    c2 = d2[b2];
    a: switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d2 = !d2.disabled) || (a = a.type, d2 = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d2;
        break a;
      default:
        a = false;
    }
    if (a) return null;
    if (c2 && "function" !== typeof c2) throw Error(p2(231, b2, typeof c2));
    return c2;
  }
  var Lb = false;
  if (ia) try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a) {
    Lb = false;
  }
  function Nb(a, b2, c2, d2, e, f2, g2, h3, k2) {
    var l2 = Array.prototype.slice.call(arguments, 3);
    try {
      b2.apply(c2, l2);
    } catch (m2) {
      this.onError(m2);
    }
  }
  var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
    Ob = true;
    Pb = a;
  } };
  function Tb(a, b2, c2, d2, e, f2, g2, h3, k2) {
    Ob = false;
    Pb = null;
    Nb.apply(Sb, arguments);
  }
  function Ub(a, b2, c2, d2, e, f2, g2, h3, k2) {
    Tb.apply(this, arguments);
    if (Ob) {
      if (Ob) {
        var l2 = Pb;
        Ob = false;
        Pb = null;
      } else throw Error(p2(198));
      Qb || (Qb = true, Rb = l2);
    }
  }
  function Vb(a) {
    var b2 = a, c2 = a;
    if (a.alternate) for (; b2.return; ) b2 = b2.return;
    else {
      a = b2;
      do
        b2 = a, 0 !== (b2.flags & 4098) && (c2 = b2.return), a = b2.return;
      while (a);
    }
    return 3 === b2.tag ? c2 : null;
  }
  function Wb(a) {
    if (13 === a.tag) {
      var b2 = a.memoizedState;
      null === b2 && (a = a.alternate, null !== a && (b2 = a.memoizedState));
      if (null !== b2) return b2.dehydrated;
    }
    return null;
  }
  function Xb(a) {
    if (Vb(a) !== a) throw Error(p2(188));
  }
  function Yb(a) {
    var b2 = a.alternate;
    if (!b2) {
      b2 = Vb(a);
      if (null === b2) throw Error(p2(188));
      return b2 !== a ? null : a;
    }
    for (var c2 = a, d2 = b2; ; ) {
      var e = c2.return;
      if (null === e) break;
      var f2 = e.alternate;
      if (null === f2) {
        d2 = e.return;
        if (null !== d2) {
          c2 = d2;
          continue;
        }
        break;
      }
      if (e.child === f2.child) {
        for (f2 = e.child; f2; ) {
          if (f2 === c2) return Xb(e), a;
          if (f2 === d2) return Xb(e), b2;
          f2 = f2.sibling;
        }
        throw Error(p2(188));
      }
      if (c2.return !== d2.return) c2 = e, d2 = f2;
      else {
        for (var g2 = false, h3 = e.child; h3; ) {
          if (h3 === c2) {
            g2 = true;
            c2 = e;
            d2 = f2;
            break;
          }
          if (h3 === d2) {
            g2 = true;
            d2 = e;
            c2 = f2;
            break;
          }
          h3 = h3.sibling;
        }
        if (!g2) {
          for (h3 = f2.child; h3; ) {
            if (h3 === c2) {
              g2 = true;
              c2 = f2;
              d2 = e;
              break;
            }
            if (h3 === d2) {
              g2 = true;
              d2 = f2;
              c2 = e;
              break;
            }
            h3 = h3.sibling;
          }
          if (!g2) throw Error(p2(189));
        }
      }
      if (c2.alternate !== d2) throw Error(p2(190));
    }
    if (3 !== c2.tag) throw Error(p2(188));
    return c2.stateNode.current === c2 ? a : b2;
  }
  function Zb(a) {
    a = Yb(a);
    return null !== a ? $b(a) : null;
  }
  function $b(a) {
    if (5 === a.tag || 6 === a.tag) return a;
    for (a = a.child; null !== a; ) {
      var b2 = $b(a);
      if (null !== b2) return b2;
      a = a.sibling;
    }
    return null;
  }
  var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
  function mc(a) {
    if (lc && "function" === typeof lc.onCommitFiberRoot) try {
      lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b2) {
    }
  }
  var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
  function nc(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
  }
  var rc = 64, sc = 4194304;
  function tc(a) {
    switch (a & -a) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return a;
    }
  }
  function uc(a, b2) {
    var c2 = a.pendingLanes;
    if (0 === c2) return 0;
    var d2 = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g2 = c2 & 268435455;
    if (0 !== g2) {
      var h3 = g2 & ~e;
      0 !== h3 ? d2 = tc(h3) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
    } else g2 = c2 & ~e, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
    if (0 === d2) return 0;
    if (0 !== b2 && b2 !== d2 && 0 === (b2 & e) && (e = d2 & -d2, f2 = b2 & -b2, e >= f2 || 16 === e && 0 !== (f2 & 4194240))) return b2;
    0 !== (d2 & 4) && (d2 |= c2 & 16);
    b2 = a.entangledLanes;
    if (0 !== b2) for (a = a.entanglements, b2 &= d2; 0 < b2; ) c2 = 31 - oc(b2), e = 1 << c2, d2 |= a[c2], b2 &= ~e;
    return d2;
  }
  function vc(a, b2) {
    switch (a) {
      case 1:
      case 2:
      case 4:
        return b2 + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return b2 + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wc(a, b2) {
    for (var c2 = a.suspendedLanes, d2 = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
      var g2 = 31 - oc(f2), h3 = 1 << g2, k2 = e[g2];
      if (-1 === k2) {
        if (0 === (h3 & c2) || 0 !== (h3 & d2)) e[g2] = vc(h3, b2);
      } else k2 <= b2 && (a.expiredLanes |= h3);
      f2 &= ~h3;
    }
  }
  function xc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
  }
  function yc() {
    var a = rc;
    rc <<= 1;
    0 === (rc & 4194240) && (rc = 64);
    return a;
  }
  function zc(a) {
    for (var b2 = [], c2 = 0; 31 > c2; c2++) b2.push(a);
    return b2;
  }
  function Ac(a, b2, c2) {
    a.pendingLanes |= b2;
    536870912 !== b2 && (a.suspendedLanes = 0, a.pingedLanes = 0);
    a = a.eventTimes;
    b2 = 31 - oc(b2);
    a[b2] = c2;
  }
  function Bc(a, b2) {
    var c2 = a.pendingLanes & ~b2;
    a.pendingLanes = b2;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= b2;
    a.mutableReadLanes &= b2;
    a.entangledLanes &= b2;
    b2 = a.entanglements;
    var d2 = a.eventTimes;
    for (a = a.expirationTimes; 0 < c2; ) {
      var e = 31 - oc(c2), f2 = 1 << e;
      b2[e] = 0;
      d2[e] = -1;
      a[e] = -1;
      c2 &= ~f2;
    }
  }
  function Cc(a, b2) {
    var c2 = a.entangledLanes |= b2;
    for (a = a.entanglements; c2; ) {
      var d2 = 31 - oc(c2), e = 1 << d2;
      e & b2 | a[d2] & b2 && (a[d2] |= b2);
      c2 &= ~e;
    }
  }
  var C2 = 0;
  function Dc(a) {
    a &= -a;
    return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
  }
  var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Sc(a, b2) {
    switch (a) {
      case "focusin":
      case "focusout":
        Lc = null;
        break;
      case "dragenter":
      case "dragleave":
        Mc = null;
        break;
      case "mouseover":
      case "mouseout":
        Nc = null;
        break;
      case "pointerover":
      case "pointerout":
        Oc.delete(b2.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Pc.delete(b2.pointerId);
    }
  }
  function Tc(a, b2, c2, d2, e, f2) {
    if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a;
    a.eventSystemFlags |= d2;
    b2 = a.targetContainers;
    null !== e && -1 === b2.indexOf(e) && b2.push(e);
    return a;
  }
  function Uc(a, b2, c2, d2, e) {
    switch (b2) {
      case "focusin":
        return Lc = Tc(Lc, a, b2, c2, d2, e), true;
      case "dragenter":
        return Mc = Tc(Mc, a, b2, c2, d2, e), true;
      case "mouseover":
        return Nc = Tc(Nc, a, b2, c2, d2, e), true;
      case "pointerover":
        var f2 = e.pointerId;
        Oc.set(f2, Tc(Oc.get(f2) || null, a, b2, c2, d2, e));
        return true;
      case "gotpointercapture":
        return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b2, c2, d2, e)), true;
    }
    return false;
  }
  function Vc(a) {
    var b2 = Wc(a.target);
    if (null !== b2) {
      var c2 = Vb(b2);
      if (null !== c2) {
        if (b2 = c2.tag, 13 === b2) {
          if (b2 = Wb(c2), null !== b2) {
            a.blockedOn = b2;
            Ic(a.priority, function() {
              Gc(c2);
            });
            return;
          }
        } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
          a.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
          return;
        }
      }
    }
    a.blockedOn = null;
  }
  function Xc(a) {
    if (null !== a.blockedOn) return false;
    for (var b2 = a.targetContainers; 0 < b2.length; ) {
      var c2 = Yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
      if (null === c2) {
        c2 = a.nativeEvent;
        var d2 = new c2.constructor(c2.type, c2);
        wb = d2;
        c2.target.dispatchEvent(d2);
        wb = null;
      } else return b2 = Cb(c2), null !== b2 && Fc(b2), a.blockedOn = c2, false;
      b2.shift();
    }
    return true;
  }
  function Zc(a, b2, c2) {
    Xc(a) && c2.delete(b2);
  }
  function $c() {
    Jc = false;
    null !== Lc && Xc(Lc) && (Lc = null);
    null !== Mc && Xc(Mc) && (Mc = null);
    null !== Nc && Xc(Nc) && (Nc = null);
    Oc.forEach(Zc);
    Pc.forEach(Zc);
  }
  function ad(a, b2) {
    a.blockedOn === b2 && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
  }
  function bd(a) {
    function b2(b3) {
      return ad(b3, a);
    }
    if (0 < Kc.length) {
      ad(Kc[0], a);
      for (var c2 = 1; c2 < Kc.length; c2++) {
        var d2 = Kc[c2];
        d2.blockedOn === a && (d2.blockedOn = null);
      }
    }
    null !== Lc && ad(Lc, a);
    null !== Mc && ad(Mc, a);
    null !== Nc && ad(Nc, a);
    Oc.forEach(b2);
    Pc.forEach(b2);
    for (c2 = 0; c2 < Qc.length; c2++) d2 = Qc[c2], d2.blockedOn === a && (d2.blockedOn = null);
    for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); ) Vc(c2), null === c2.blockedOn && Qc.shift();
  }
  var cd = ua.ReactCurrentBatchConfig, dd = true;
  function ed(a, b2, c2, d2) {
    var e = C2, f2 = cd.transition;
    cd.transition = null;
    try {
      C2 = 1, fd(a, b2, c2, d2);
    } finally {
      C2 = e, cd.transition = f2;
    }
  }
  function gd(a, b2, c2, d2) {
    var e = C2, f2 = cd.transition;
    cd.transition = null;
    try {
      C2 = 4, fd(a, b2, c2, d2);
    } finally {
      C2 = e, cd.transition = f2;
    }
  }
  function fd(a, b2, c2, d2) {
    if (dd) {
      var e = Yc(a, b2, c2, d2);
      if (null === e) hd(a, b2, d2, id, c2), Sc(a, d2);
      else if (Uc(e, a, b2, c2, d2)) d2.stopPropagation();
      else if (Sc(a, d2), b2 & 4 && -1 < Rc.indexOf(a)) {
        for (; null !== e; ) {
          var f2 = Cb(e);
          null !== f2 && Ec(f2);
          f2 = Yc(a, b2, c2, d2);
          null === f2 && hd(a, b2, d2, id, c2);
          if (f2 === e) break;
          e = f2;
        }
        null !== e && d2.stopPropagation();
      } else hd(a, b2, d2, null, c2);
    }
  }
  var id = null;
  function Yc(a, b2, c2, d2) {
    id = null;
    a = xb(d2);
    a = Wc(a);
    if (null !== a) if (b2 = Vb(a), null === b2) a = null;
    else if (c2 = b2.tag, 13 === c2) {
      a = Wb(b2);
      if (null !== a) return a;
      a = null;
    } else if (3 === c2) {
      if (b2.stateNode.current.memoizedState.isDehydrated) return 3 === b2.tag ? b2.stateNode.containerInfo : null;
      a = null;
    } else b2 !== a && (a = null);
    id = a;
    return null;
  }
  function jd(a) {
    switch (a) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ec()) {
          case fc:
            return 1;
          case gc:
            return 4;
          case hc:
          case ic:
            return 16;
          case jc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var kd = null, ld = null, md = null;
  function nd() {
    if (md) return md;
    var a, b2 = ld, c2 = b2.length, d2, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
    for (a = 0; a < c2 && b2[a] === e[a]; a++) ;
    var g2 = c2 - a;
    for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e[f2 - d2]; d2++) ;
    return md = e.slice(a, 1 < d2 ? 1 - d2 : void 0);
  }
  function od(a) {
    var b2 = a.keyCode;
    "charCode" in a ? (a = a.charCode, 0 === a && 13 === b2 && (a = 13)) : a = b2;
    10 === a && (a = 13);
    return 32 <= a || 13 === a ? a : 0;
  }
  function pd() {
    return true;
  }
  function qd() {
    return false;
  }
  function rd(a) {
    function b2(b3, d2, e, f2, g2) {
      this._reactName = b3;
      this._targetInst = e;
      this.type = d2;
      this.nativeEvent = f2;
      this.target = g2;
      this.currentTarget = null;
      for (var c2 in a) a.hasOwnProperty(c2) && (b3 = a[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
      this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
      this.isPropagationStopped = qd;
      return this;
    }
    A(b2.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a2 = this.nativeEvent;
      a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
    }, stopPropagation: function() {
      var a2 = this.nativeEvent;
      a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
    }, persist: function() {
    }, isPersistent: pd });
    return b2;
  }
  var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
    return a.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
    return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
  }, movementX: function(a) {
    if ("movementX" in a) return a.movementX;
    a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
    return wd;
  }, movementY: function(a) {
    return "movementY" in a ? a.movementY : xd;
  } }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
  } }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Nd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Pd(a) {
    var b2 = this.nativeEvent;
    return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
  }
  function zd() {
    return Pd;
  }
  var Qd = A({}, ud, { key: function(a) {
    if (a.key) {
      var b2 = Md[a.key] || a.key;
      if ("Unidentified" !== b2) return b2;
    }
    return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
    return "keypress" === a.type ? od(a) : 0;
  }, keyCode: function(a) {
    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  }, which: function(a) {
    return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  } }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
    deltaX: function(a) {
      return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
    },
    deltaY: function(a) {
      return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
  ia && "documentMode" in document && (be = document.documentMode);
  var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
  function ge(a, b2) {
    switch (a) {
      case "keyup":
        return -1 !== $d.indexOf(b2.keyCode);
      case "keydown":
        return 229 !== b2.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function he(a) {
    a = a.detail;
    return "object" === typeof a && "data" in a ? a.data : null;
  }
  var ie = false;
  function je(a, b2) {
    switch (a) {
      case "compositionend":
        return he(b2);
      case "keypress":
        if (32 !== b2.which) return null;
        fe = true;
        return ee;
      case "textInput":
        return a = b2.data, a === ee && fe ? null : a;
      default:
        return null;
    }
  }
  function ke(a, b2) {
    if (ie) return "compositionend" === a || !ae && ge(a, b2) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
    switch (a) {
      case "paste":
        return null;
      case "keypress":
        if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
          if (b2.char && 1 < b2.char.length) return b2.char;
          if (b2.which) return String.fromCharCode(b2.which);
        }
        return null;
      case "compositionend":
        return de && "ko" !== b2.locale ? null : b2.data;
      default:
        return null;
    }
  }
  var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function me(a) {
    var b2 = a && a.nodeName && a.nodeName.toLowerCase();
    return "input" === b2 ? !!le[a.type] : "textarea" === b2 ? true : false;
  }
  function ne(a, b2, c2, d2) {
    Eb(d2);
    b2 = oe(b2, "onChange");
    0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a.push({ event: c2, listeners: b2 }));
  }
  var pe = null, qe = null;
  function re(a) {
    se(a, 0);
  }
  function te(a) {
    var b2 = ue(a);
    if (Wa(b2)) return a;
  }
  function ve(a, b2) {
    if ("change" === a) return b2;
  }
  var we = false;
  if (ia) {
    var xe;
    if (ia) {
      var ye = "oninput" in document;
      if (!ye) {
        var ze = document.createElement("div");
        ze.setAttribute("oninput", "return;");
        ye = "function" === typeof ze.oninput;
      }
      xe = ye;
    } else xe = false;
    we = xe && (!document.documentMode || 9 < document.documentMode);
  }
  function Ae() {
    pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
  }
  function Be(a) {
    if ("value" === a.propertyName && te(qe)) {
      var b2 = [];
      ne(b2, qe, a, xb(a));
      Jb(re, b2);
    }
  }
  function Ce(a, b2, c2) {
    "focusin" === a ? (Ae(), pe = b2, qe = c2, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
  }
  function De(a) {
    if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
  }
  function Ee(a, b2) {
    if ("click" === a) return te(b2);
  }
  function Fe(a, b2) {
    if ("input" === a || "change" === a) return te(b2);
  }
  function Ge(a, b2) {
    return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
  }
  var He = "function" === typeof Object.is ? Object.is : Ge;
  function Ie(a, b2) {
    if (He(a, b2)) return true;
    if ("object" !== typeof a || null === a || "object" !== typeof b2 || null === b2) return false;
    var c2 = Object.keys(a), d2 = Object.keys(b2);
    if (c2.length !== d2.length) return false;
    for (d2 = 0; d2 < c2.length; d2++) {
      var e = c2[d2];
      if (!ja.call(b2, e) || !He(a[e], b2[e])) return false;
    }
    return true;
  }
  function Je(a) {
    for (; a && a.firstChild; ) a = a.firstChild;
    return a;
  }
  function Ke(a, b2) {
    var c2 = Je(a);
    a = 0;
    for (var d2; c2; ) {
      if (3 === c2.nodeType) {
        d2 = a + c2.textContent.length;
        if (a <= b2 && d2 >= b2) return { node: c2, offset: b2 - a };
        a = d2;
      }
      a: {
        for (; c2; ) {
          if (c2.nextSibling) {
            c2 = c2.nextSibling;
            break a;
          }
          c2 = c2.parentNode;
        }
        c2 = void 0;
      }
      c2 = Je(c2);
    }
  }
  function Le(a, b2) {
    return a && b2 ? a === b2 ? true : a && 3 === a.nodeType ? false : b2 && 3 === b2.nodeType ? Le(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
  }
  function Me() {
    for (var a = window, b2 = Xa(); b2 instanceof a.HTMLIFrameElement; ) {
      try {
        var c2 = "string" === typeof b2.contentWindow.location.href;
      } catch (d2) {
        c2 = false;
      }
      if (c2) a = b2.contentWindow;
      else break;
      b2 = Xa(a.document);
    }
    return b2;
  }
  function Ne(a) {
    var b2 = a && a.nodeName && a.nodeName.toLowerCase();
    return b2 && ("input" === b2 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b2 || "true" === a.contentEditable);
  }
  function Oe(a) {
    var b2 = Me(), c2 = a.focusedElem, d2 = a.selectionRange;
    if (b2 !== c2 && c2 && c2.ownerDocument && Le(c2.ownerDocument.documentElement, c2)) {
      if (null !== d2 && Ne(c2)) {
        if (b2 = d2.start, a = d2.end, void 0 === a && (a = b2), "selectionStart" in c2) c2.selectionStart = b2, c2.selectionEnd = Math.min(a, c2.value.length);
        else if (a = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a.getSelection) {
          a = a.getSelection();
          var e = c2.textContent.length, f2 = Math.min(d2.start, e);
          d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e);
          !a.extend && f2 > d2 && (e = d2, d2 = f2, f2 = e);
          e = Ke(c2, f2);
          var g2 = Ke(
            c2,
            d2
          );
          e && g2 && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g2.node || a.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d2 ? (a.addRange(b2), a.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a.addRange(b2)));
        }
      }
      b2 = [];
      for (a = c2; a = a.parentNode; ) 1 === a.nodeType && b2.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      "function" === typeof c2.focus && c2.focus();
      for (c2 = 0; c2 < b2.length; c2++) a = b2[c2], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
    }
  }
  var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
  function Ue(a, b2, c2) {
    var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
    Te || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Ne(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Ie(Se, d2) || (Se = d2, d2 = oe(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a.push({ event: b2, listeners: d2 }), b2.target = Qe)));
  }
  function Ve(a, b2) {
    var c2 = {};
    c2[a.toLowerCase()] = b2.toLowerCase();
    c2["Webkit" + a] = "webkit" + b2;
    c2["Moz" + a] = "moz" + b2;
    return c2;
  }
  var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
  ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
  function Ze(a) {
    if (Xe[a]) return Xe[a];
    if (!We[a]) return a;
    var b2 = We[a], c2;
    for (c2 in b2) if (b2.hasOwnProperty(c2) && c2 in Ye) return Xe[a] = b2[c2];
    return a;
  }
  var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ff(a, b2) {
    df.set(a, b2);
    fa(b2, [a]);
  }
  for (var gf = 0; gf < ef.length; gf++) {
    var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
    ff(jf, "on" + kf);
  }
  ff($e, "onAnimationEnd");
  ff(af, "onAnimationIteration");
  ff(bf, "onAnimationStart");
  ff("dblclick", "onDoubleClick");
  ff("focusin", "onFocus");
  ff("focusout", "onBlur");
  ff(cf, "onTransitionEnd");
  ha("onMouseEnter", ["mouseout", "mouseover"]);
  ha("onMouseLeave", ["mouseout", "mouseover"]);
  ha("onPointerEnter", ["pointerout", "pointerover"]);
  ha("onPointerLeave", ["pointerout", "pointerover"]);
  fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
  function nf(a, b2, c2) {
    var d2 = a.type || "unknown-event";
    a.currentTarget = c2;
    Ub(d2, b2, void 0, a);
    a.currentTarget = null;
  }
  function se(a, b2) {
    b2 = 0 !== (b2 & 4);
    for (var c2 = 0; c2 < a.length; c2++) {
      var d2 = a[c2], e = d2.event;
      d2 = d2.listeners;
      a: {
        var f2 = void 0;
        if (b2) for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h3 = d2[g2], k2 = h3.instance, l2 = h3.currentTarget;
          h3 = h3.listener;
          if (k2 !== f2 && e.isPropagationStopped()) break a;
          nf(e, h3, l2);
          f2 = k2;
        }
        else for (g2 = 0; g2 < d2.length; g2++) {
          h3 = d2[g2];
          k2 = h3.instance;
          l2 = h3.currentTarget;
          h3 = h3.listener;
          if (k2 !== f2 && e.isPropagationStopped()) break a;
          nf(e, h3, l2);
          f2 = k2;
        }
      }
    }
    if (Qb) throw a = Rb, Qb = false, Rb = null, a;
  }
  function D(a, b2) {
    var c2 = b2[of];
    void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
    var d2 = a + "__bubble";
    c2.has(d2) || (pf(b2, a, 2, false), c2.add(d2));
  }
  function qf(a, b2, c2) {
    var d2 = 0;
    b2 && (d2 |= 4);
    pf(c2, a, d2, b2);
  }
  var rf = "_reactListening" + Math.random().toString(36).slice(2);
  function sf(a) {
    if (!a[rf]) {
      a[rf] = true;
      da.forEach(function(b3) {
        "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a), qf(b3, true, a));
      });
      var b2 = 9 === a.nodeType ? a : a.ownerDocument;
      null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
    }
  }
  function pf(a, b2, c2, d2) {
    switch (jd(b2)) {
      case 1:
        var e = ed;
        break;
      case 4:
        e = gd;
        break;
      default:
        e = fd;
    }
    c2 = e.bind(null, b2, c2, a);
    e = void 0;
    !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e = true);
    d2 ? void 0 !== e ? a.addEventListener(b2, c2, { capture: true, passive: e }) : a.addEventListener(b2, c2, true) : void 0 !== e ? a.addEventListener(b2, c2, { passive: e }) : a.addEventListener(b2, c2, false);
  }
  function hd(a, b2, c2, d2, e) {
    var f2 = d2;
    if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2) a: for (; ; ) {
      if (null === d2) return;
      var g2 = d2.tag;
      if (3 === g2 || 4 === g2) {
        var h3 = d2.stateNode.containerInfo;
        if (h3 === e || 8 === h3.nodeType && h3.parentNode === e) break;
        if (4 === g2) for (g2 = d2.return; null !== g2; ) {
          var k2 = g2.tag;
          if (3 === k2 || 4 === k2) {
            if (k2 = g2.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e) return;
          }
          g2 = g2.return;
        }
        for (; null !== h3; ) {
          g2 = Wc(h3);
          if (null === g2) return;
          k2 = g2.tag;
          if (5 === k2 || 6 === k2) {
            d2 = f2 = g2;
            continue a;
          }
          h3 = h3.parentNode;
        }
      }
      d2 = d2.return;
    }
    Jb(function() {
      var d3 = f2, e2 = xb(c2), g3 = [];
      a: {
        var h4 = df.get(a);
        if (void 0 !== h4) {
          var k3 = td, n = a;
          switch (a) {
            case "keypress":
              if (0 === od(c2)) break a;
            case "keydown":
            case "keyup":
              k3 = Rd;
              break;
            case "focusin":
              n = "focus";
              k3 = Fd;
              break;
            case "focusout":
              n = "blur";
              k3 = Fd;
              break;
            case "beforeblur":
            case "afterblur":
              k3 = Fd;
              break;
            case "click":
              if (2 === c2.button) break a;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k3 = Bd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k3 = Dd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k3 = Vd;
              break;
            case $e:
            case af:
            case bf:
              k3 = Hd;
              break;
            case cf:
              k3 = Xd;
              break;
            case "scroll":
              k3 = vd;
              break;
            case "wheel":
              k3 = Zd;
              break;
            case "copy":
            case "cut":
            case "paste":
              k3 = Jd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k3 = Td;
          }
          var t2 = 0 !== (b2 & 4), J = !t2 && "scroll" === a, x = t2 ? null !== h4 ? h4 + "Capture" : null : h4;
          t2 = [];
          for (var w2 = d3, u2; null !== w2; ) {
            u2 = w2;
            var F = u2.stateNode;
            5 === u2.tag && null !== F && (u2 = F, null !== x && (F = Kb(w2, x), null != F && t2.push(tf(w2, F, u2))));
            if (J) break;
            w2 = w2.return;
          }
          0 < t2.length && (h4 = new k3(h4, n, null, c2, e2), g3.push({ event: h4, listeners: t2 }));
        }
      }
      if (0 === (b2 & 7)) {
        a: {
          h4 = "mouseover" === a || "pointerover" === a;
          k3 = "mouseout" === a || "pointerout" === a;
          if (h4 && c2 !== wb && (n = c2.relatedTarget || c2.fromElement) && (Wc(n) || n[uf])) break a;
          if (k3 || h4) {
            h4 = e2.window === e2 ? e2 : (h4 = e2.ownerDocument) ? h4.defaultView || h4.parentWindow : window;
            if (k3) {
              if (n = c2.relatedTarget || c2.toElement, k3 = d3, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
            } else k3 = null, n = d3;
            if (k3 !== n) {
              t2 = Bd;
              F = "onMouseLeave";
              x = "onMouseEnter";
              w2 = "mouse";
              if ("pointerout" === a || "pointerover" === a) t2 = Td, F = "onPointerLeave", x = "onPointerEnter", w2 = "pointer";
              J = null == k3 ? h4 : ue(k3);
              u2 = null == n ? h4 : ue(n);
              h4 = new t2(F, w2 + "leave", k3, c2, e2);
              h4.target = J;
              h4.relatedTarget = u2;
              F = null;
              Wc(e2) === d3 && (t2 = new t2(x, w2 + "enter", n, c2, e2), t2.target = u2, t2.relatedTarget = J, F = t2);
              J = F;
              if (k3 && n) b: {
                t2 = k3;
                x = n;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2)) w2++;
                u2 = 0;
                for (F = x; F; F = vf(F)) u2++;
                for (; 0 < w2 - u2; ) t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; ) x = vf(x), u2--;
                for (; w2--; ) {
                  if (t2 === x || null !== x && t2 === x.alternate) break b;
                  t2 = vf(t2);
                  x = vf(x);
                }
                t2 = null;
              }
              else t2 = null;
              null !== k3 && wf(g3, h4, k3, t2, false);
              null !== n && null !== J && wf(g3, J, n, t2, true);
            }
          }
        }
        a: {
          h4 = d3 ? ue(d3) : window;
          k3 = h4.nodeName && h4.nodeName.toLowerCase();
          if ("select" === k3 || "input" === k3 && "file" === h4.type) var na = ve;
          else if (me(h4)) if (we) na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
          else (k3 = h4.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h4.type || "radio" === h4.type) && (na = Ee);
          if (na && (na = na(a, d3))) {
            ne(g3, na, c2, e2);
            break a;
          }
          xa && xa(a, h4, d3);
          "focusout" === a && (xa = h4._wrapperState) && xa.controlled && "number" === h4.type && cb(h4, "number", h4.value);
        }
        xa = d3 ? ue(d3) : window;
        switch (a) {
          case "focusin":
            if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d3, Se = null;
            break;
          case "focusout":
            Se = Re = Qe = null;
            break;
          case "mousedown":
            Te = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Te = false;
            Ue(g3, c2, e2);
            break;
          case "selectionchange":
            if (Pe) break;
          case "keydown":
          case "keyup":
            Ue(g3, c2, e2);
        }
        var $a;
        if (ae) b: {
          switch (a) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
        else ie ? ge(a, c2) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c2.keyCode && (ba = "onCompositionStart");
        ba && (de && "ko" !== c2.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d3, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c2, e2), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c2), null !== $a && (ba.data = $a))));
        if ($a = ce ? je(a, c2) : ke(a, c2)) d3 = oe(d3, "onBeforeInput"), 0 < d3.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c2, e2), g3.push({ event: e2, listeners: d3 }), e2.data = $a);
      }
      se(g3, b2);
    });
  }
  function tf(a, b2, c2) {
    return { instance: a, listener: b2, currentTarget: c2 };
  }
  function oe(a, b2) {
    for (var c2 = b2 + "Capture", d2 = []; null !== a; ) {
      var e = a, f2 = e.stateNode;
      5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a, c2), null != f2 && d2.unshift(tf(a, f2, e)), f2 = Kb(a, b2), null != f2 && d2.push(tf(a, f2, e)));
      a = a.return;
    }
    return d2;
  }
  function vf(a) {
    if (null === a) return null;
    do
      a = a.return;
    while (a && 5 !== a.tag);
    return a ? a : null;
  }
  function wf(a, b2, c2, d2, e) {
    for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
      var h3 = c2, k2 = h3.alternate, l2 = h3.stateNode;
      if (null !== k2 && k2 === d2) break;
      5 === h3.tag && null !== l2 && (h3 = l2, e ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h3))) : e || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h3))));
      c2 = c2.return;
    }
    0 !== g2.length && a.push({ event: b2, listeners: g2 });
  }
  var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
  function zf(a) {
    return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
  }
  function Af(a, b2, c2) {
    b2 = zf(b2);
    if (zf(a) !== b2 && c2) throw Error(p2(425));
  }
  function Bf() {
  }
  var Cf = null, Df = null;
  function Ef(a, b2) {
    return "textarea" === a || "noscript" === a || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
  }
  var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
    return Hf.resolve(null).then(a).catch(If);
  } : Ff;
  function If(a) {
    setTimeout(function() {
      throw a;
    });
  }
  function Kf(a, b2) {
    var c2 = b2, d2 = 0;
    do {
      var e = c2.nextSibling;
      a.removeChild(c2);
      if (e && 8 === e.nodeType) if (c2 = e.data, "/$" === c2) {
        if (0 === d2) {
          a.removeChild(e);
          bd(b2);
          return;
        }
        d2--;
      } else "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
      c2 = e;
    } while (c2);
    bd(b2);
  }
  function Lf(a) {
    for (; null != a; a = a.nextSibling) {
      var b2 = a.nodeType;
      if (1 === b2 || 3 === b2) break;
      if (8 === b2) {
        b2 = a.data;
        if ("$" === b2 || "$!" === b2 || "$?" === b2) break;
        if ("/$" === b2) return null;
      }
    }
    return a;
  }
  function Mf(a) {
    a = a.previousSibling;
    for (var b2 = 0; a; ) {
      if (8 === a.nodeType) {
        var c2 = a.data;
        if ("$" === c2 || "$!" === c2 || "$?" === c2) {
          if (0 === b2) return a;
          b2--;
        } else "/$" === c2 && b2++;
      }
      a = a.previousSibling;
    }
    return null;
  }
  var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
  function Wc(a) {
    var b2 = a[Of];
    if (b2) return b2;
    for (var c2 = a.parentNode; c2; ) {
      if (b2 = c2[uf] || c2[Of]) {
        c2 = b2.alternate;
        if (null !== b2.child || null !== c2 && null !== c2.child) for (a = Mf(a); null !== a; ) {
          if (c2 = a[Of]) return c2;
          a = Mf(a);
        }
        return b2;
      }
      a = c2;
      c2 = a.parentNode;
    }
    return null;
  }
  function Cb(a) {
    a = a[Of] || a[uf];
    return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
  }
  function ue(a) {
    if (5 === a.tag || 6 === a.tag) return a.stateNode;
    throw Error(p2(33));
  }
  function Db(a) {
    return a[Pf] || null;
  }
  var Sf = [], Tf = -1;
  function Uf(a) {
    return { current: a };
  }
  function E2(a) {
    0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
  }
  function G2(a, b2) {
    Tf++;
    Sf[Tf] = a.current;
    a.current = b2;
  }
  var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
  function Yf(a, b2) {
    var c2 = a.type.contextTypes;
    if (!c2) return Vf;
    var d2 = a.stateNode;
    if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2) return d2.__reactInternalMemoizedMaskedChildContext;
    var e = {}, f2;
    for (f2 in c2) e[f2] = b2[f2];
    d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }
  function Zf(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }
  function $f() {
    E2(Wf);
    E2(H);
  }
  function ag(a, b2, c2) {
    if (H.current !== Vf) throw Error(p2(168));
    G2(H, b2);
    G2(Wf, c2);
  }
  function bg(a, b2, c2) {
    var d2 = a.stateNode;
    b2 = b2.childContextTypes;
    if ("function" !== typeof d2.getChildContext) return c2;
    d2 = d2.getChildContext();
    for (var e in d2) if (!(e in b2)) throw Error(p2(108, Ra(a) || "Unknown", e));
    return A({}, c2, d2);
  }
  function cg(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
    Xf = H.current;
    G2(H, a);
    G2(Wf, Wf.current);
    return true;
  }
  function dg(a, b2, c2) {
    var d2 = a.stateNode;
    if (!d2) throw Error(p2(169));
    c2 ? (a = bg(a, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a, E2(Wf), E2(H), G2(H, a)) : E2(Wf);
    G2(Wf, c2);
  }
  var eg = null, fg = false, gg = false;
  function hg(a) {
    null === eg ? eg = [a] : eg.push(a);
  }
  function ig(a) {
    fg = true;
    hg(a);
  }
  function jg() {
    if (!gg && null !== eg) {
      gg = true;
      var a = 0, b2 = C2;
      try {
        var c2 = eg;
        for (C2 = 1; a < c2.length; a++) {
          var d2 = c2[a];
          do
            d2 = d2(true);
          while (null !== d2);
        }
        eg = null;
        fg = false;
      } catch (e) {
        throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
      } finally {
        C2 = b2, gg = false;
      }
    }
    return null;
  }
  var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
  function tg(a, b2) {
    kg[lg++] = ng;
    kg[lg++] = mg;
    mg = a;
    ng = b2;
  }
  function ug(a, b2, c2) {
    og[pg++] = rg;
    og[pg++] = sg;
    og[pg++] = qg;
    qg = a;
    var d2 = rg;
    a = sg;
    var e = 32 - oc(d2) - 1;
    d2 &= ~(1 << e);
    c2 += 1;
    var f2 = 32 - oc(b2) + e;
    if (30 < f2) {
      var g2 = e - e % 5;
      f2 = (d2 & (1 << g2) - 1).toString(32);
      d2 >>= g2;
      e -= g2;
      rg = 1 << 32 - oc(b2) + e | c2 << e | d2;
      sg = f2 + a;
    } else rg = 1 << f2 | c2 << e | d2, sg = a;
  }
  function vg(a) {
    null !== a.return && (tg(a, 1), ug(a, 1, 0));
  }
  function wg(a) {
    for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
    for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
  }
  var xg = null, yg = null, I = false, zg = null;
  function Ag(a, b2) {
    var c2 = Bg(5, null, null, 0);
    c2.elementType = "DELETED";
    c2.stateNode = b2;
    c2.return = a;
    b2 = a.deletions;
    null === b2 ? (a.deletions = [c2], a.flags |= 16) : b2.push(c2);
  }
  function Cg(a, b2) {
    switch (a.tag) {
      case 5:
        var c2 = a.type;
        b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
        return null !== b2 ? (a.stateNode = b2, xg = a, yg = Lf(b2.firstChild), true) : false;
      case 6:
        return b2 = "" === a.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a.stateNode = b2, xg = a, yg = null, true) : false;
      case 13:
        return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a, a.child = c2, xg = a, yg = null, true) : false;
      default:
        return false;
    }
  }
  function Dg(a) {
    return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
  }
  function Eg(a) {
    if (I) {
      var b2 = yg;
      if (b2) {
        var c2 = b2;
        if (!Cg(a, b2)) {
          if (Dg(a)) throw Error(p2(418));
          b2 = Lf(c2.nextSibling);
          var d2 = xg;
          b2 && Cg(a, b2) ? Ag(d2, c2) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
        }
      } else {
        if (Dg(a)) throw Error(p2(418));
        a.flags = a.flags & -4097 | 2;
        I = false;
        xg = a;
      }
    }
  }
  function Fg(a) {
    for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
    xg = a;
  }
  function Gg(a) {
    if (a !== xg) return false;
    if (!I) return Fg(a), I = true, false;
    var b2;
    (b2 = 3 !== a.tag) && !(b2 = 5 !== a.tag) && (b2 = a.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a.type, a.memoizedProps));
    if (b2 && (b2 = yg)) {
      if (Dg(a)) throw Hg(), Error(p2(418));
      for (; b2; ) Ag(a, b2), b2 = Lf(b2.nextSibling);
    }
    Fg(a);
    if (13 === a.tag) {
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(p2(317));
      a: {
        a = a.nextSibling;
        for (b2 = 0; a; ) {
          if (8 === a.nodeType) {
            var c2 = a.data;
            if ("/$" === c2) {
              if (0 === b2) {
                yg = Lf(a.nextSibling);
                break a;
              }
              b2--;
            } else "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
          }
          a = a.nextSibling;
        }
        yg = null;
      }
    } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
    return true;
  }
  function Hg() {
    for (var a = yg; a; ) a = Lf(a.nextSibling);
  }
  function Ig() {
    yg = xg = null;
    I = false;
  }
  function Jg(a) {
    null === zg ? zg = [a] : zg.push(a);
  }
  var Kg = ua.ReactCurrentBatchConfig;
  function Lg(a, b2, c2) {
    a = c2.ref;
    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
      if (c2._owner) {
        c2 = c2._owner;
        if (c2) {
          if (1 !== c2.tag) throw Error(p2(309));
          var d2 = c2.stateNode;
        }
        if (!d2) throw Error(p2(147, a));
        var e = d2, f2 = "" + a;
        if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2) return b2.ref;
        b2 = function(a2) {
          var b3 = e.refs;
          null === a2 ? delete b3[f2] : b3[f2] = a2;
        };
        b2._stringRef = f2;
        return b2;
      }
      if ("string" !== typeof a) throw Error(p2(284));
      if (!c2._owner) throw Error(p2(290, a));
    }
    return a;
  }
  function Mg(a, b2) {
    a = Object.prototype.toString.call(b2);
    throw Error(p2(31, "[object Object]" === a ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a));
  }
  function Ng(a) {
    var b2 = a._init;
    return b2(a._payload);
  }
  function Og(a) {
    function b2(b3, c3) {
      if (a) {
        var d3 = b3.deletions;
        null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
      }
    }
    function c2(c3, d3) {
      if (!a) return null;
      for (; null !== d3; ) b2(c3, d3), d3 = d3.sibling;
      return null;
    }
    function d2(a2, b3) {
      for (a2 = /* @__PURE__ */ new Map(); null !== b3; ) null !== b3.key ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
      return a2;
    }
    function e(a2, b3) {
      a2 = Pg(a2, b3);
      a2.index = 0;
      a2.sibling = null;
      return a2;
    }
    function f2(b3, c3, d3) {
      b3.index = d3;
      if (!a) return b3.flags |= 1048576, c3;
      d3 = b3.alternate;
      if (null !== d3) return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
      b3.flags |= 2;
      return c3;
    }
    function g2(b3) {
      a && null === b3.alternate && (b3.flags |= 2);
      return b3;
    }
    function h3(a2, b3, c3, d3) {
      if (null === b3 || 6 !== b3.tag) return b3 = Qg(c3, a2.mode, d3), b3.return = a2, b3;
      b3 = e(b3, c3);
      b3.return = a2;
      return b3;
    }
    function k2(a2, b3, c3, d3) {
      var f3 = c3.type;
      if (f3 === ya) return m2(a2, b3, c3.props.children, d3, c3.key);
      if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b3.type)) return d3 = e(b3, c3.props), d3.ref = Lg(a2, b3, c3), d3.return = a2, d3;
      d3 = Rg(c3.type, c3.key, c3.props, null, a2.mode, d3);
      d3.ref = Lg(a2, b3, c3);
      d3.return = a2;
      return d3;
    }
    function l2(a2, b3, c3, d3) {
      if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation) return b3 = Sg(c3, a2.mode, d3), b3.return = a2, b3;
      b3 = e(b3, c3.children || []);
      b3.return = a2;
      return b3;
    }
    function m2(a2, b3, c3, d3, f3) {
      if (null === b3 || 7 !== b3.tag) return b3 = Tg(c3, a2.mode, d3, f3), b3.return = a2, b3;
      b3 = e(b3, c3);
      b3.return = a2;
      return b3;
    }
    function q(a2, b3, c3) {
      if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3) return b3 = Qg("" + b3, a2.mode, c3), b3.return = a2, b3;
      if ("object" === typeof b3 && null !== b3) {
        switch (b3.$$typeof) {
          case va:
            return c3 = Rg(b3.type, b3.key, b3.props, null, a2.mode, c3), c3.ref = Lg(a2, null, b3), c3.return = a2, c3;
          case wa:
            return b3 = Sg(b3, a2.mode, c3), b3.return = a2, b3;
          case Ha:
            var d3 = b3._init;
            return q(a2, d3(b3._payload), c3);
        }
        if (eb(b3) || Ka(b3)) return b3 = Tg(b3, a2.mode, c3, null), b3.return = a2, b3;
        Mg(a2, b3);
      }
      return null;
    }
    function r2(a2, b3, c3, d3) {
      var e2 = null !== b3 ? b3.key : null;
      if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3) return null !== e2 ? null : h3(a2, b3, "" + c3, d3);
      if ("object" === typeof c3 && null !== c3) {
        switch (c3.$$typeof) {
          case va:
            return c3.key === e2 ? k2(a2, b3, c3, d3) : null;
          case wa:
            return c3.key === e2 ? l2(a2, b3, c3, d3) : null;
          case Ha:
            return e2 = c3._init, r2(
              a2,
              b3,
              e2(c3._payload),
              d3
            );
        }
        if (eb(c3) || Ka(c3)) return null !== e2 ? null : m2(a2, b3, c3, d3, null);
        Mg(a2, c3);
      }
      return null;
    }
    function y2(a2, b3, c3, d3, e2) {
      if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3) return a2 = a2.get(c3) || null, h3(b3, a2, "" + d3, e2);
      if ("object" === typeof d3 && null !== d3) {
        switch (d3.$$typeof) {
          case va:
            return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a2, d3, e2);
          case wa:
            return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a2, d3, e2);
          case Ha:
            var f3 = d3._init;
            return y2(a2, b3, c3, f3(d3._payload), e2);
        }
        if (eb(d3) || Ka(d3)) return a2 = a2.get(c3) || null, m2(b3, a2, d3, e2, null);
        Mg(b3, d3);
      }
      return null;
    }
    function n(e2, g3, h4, k3) {
      for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x = null; null !== u2 && w2 < h4.length; w2++) {
        u2.index > w2 ? (x = u2, u2 = null) : x = u2.sibling;
        var n2 = r2(e2, u2, h4[w2], k3);
        if (null === n2) {
          null === u2 && (u2 = x);
          break;
        }
        a && u2 && null === n2.alternate && b2(e2, u2);
        g3 = f2(n2, g3, w2);
        null === m3 ? l3 = n2 : m3.sibling = n2;
        m3 = n2;
        u2 = x;
      }
      if (w2 === h4.length) return c2(e2, u2), I && tg(e2, w2), l3;
      if (null === u2) {
        for (; w2 < h4.length; w2++) u2 = q(e2, h4[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
        I && tg(e2, w2);
        return l3;
      }
      for (u2 = d2(e2, u2); w2 < h4.length; w2++) x = y2(u2, e2, w2, h4[w2], k3), null !== x && (a && null !== x.alternate && u2.delete(null === x.key ? w2 : x.key), g3 = f2(x, g3, w2), null === m3 ? l3 = x : m3.sibling = x, m3 = x);
      a && u2.forEach(function(a2) {
        return b2(e2, a2);
      });
      I && tg(e2, w2);
      return l3;
    }
    function t2(e2, g3, h4, k3) {
      var l3 = Ka(h4);
      if ("function" !== typeof l3) throw Error(p2(150));
      h4 = l3.call(h4);
      if (null == h4) throw Error(p2(151));
      for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x = null, n2 = h4.next(); null !== m3 && !n2.done; w2++, n2 = h4.next()) {
        m3.index > w2 ? (x = m3, m3 = null) : x = m3.sibling;
        var t3 = r2(e2, m3, n2.value, k3);
        if (null === t3) {
          null === m3 && (m3 = x);
          break;
        }
        a && m3 && null === t3.alternate && b2(e2, m3);
        g3 = f2(t3, g3, w2);
        null === u2 ? l3 = t3 : u2.sibling = t3;
        u2 = t3;
        m3 = x;
      }
      if (n2.done) return c2(
        e2,
        m3
      ), I && tg(e2, w2), l3;
      if (null === m3) {
        for (; !n2.done; w2++, n2 = h4.next()) n2 = q(e2, n2.value, k3), null !== n2 && (g3 = f2(n2, g3, w2), null === u2 ? l3 = n2 : u2.sibling = n2, u2 = n2);
        I && tg(e2, w2);
        return l3;
      }
      for (m3 = d2(e2, m3); !n2.done; w2++, n2 = h4.next()) n2 = y2(m3, e2, w2, n2.value, k3), null !== n2 && (a && null !== n2.alternate && m3.delete(null === n2.key ? w2 : n2.key), g3 = f2(n2, g3, w2), null === u2 ? l3 = n2 : u2.sibling = n2, u2 = n2);
      a && m3.forEach(function(a2) {
        return b2(e2, a2);
      });
      I && tg(e2, w2);
      return l3;
    }
    function J(a2, d3, f3, h4) {
      "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
      if ("object" === typeof f3 && null !== f3) {
        switch (f3.$$typeof) {
          case va:
            a: {
              for (var k3 = f3.key, l3 = d3; null !== l3; ) {
                if (l3.key === k3) {
                  k3 = f3.type;
                  if (k3 === ya) {
                    if (7 === l3.tag) {
                      c2(a2, l3.sibling);
                      d3 = e(l3, f3.props.children);
                      d3.return = a2;
                      a2 = d3;
                      break a;
                    }
                  } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                    c2(a2, l3.sibling);
                    d3 = e(l3, f3.props);
                    d3.ref = Lg(a2, l3, f3);
                    d3.return = a2;
                    a2 = d3;
                    break a;
                  }
                  c2(a2, l3);
                  break;
                } else b2(a2, l3);
                l3 = l3.sibling;
              }
              f3.type === ya ? (d3 = Tg(f3.props.children, a2.mode, h4, f3.key), d3.return = a2, a2 = d3) : (h4 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h4), h4.ref = Lg(a2, d3, f3), h4.return = a2, a2 = h4);
            }
            return g2(a2);
          case wa:
            a: {
              for (l3 = f3.key; null !== d3; ) {
                if (d3.key === l3) if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a2, d3.sibling);
                  d3 = e(d3, f3.children || []);
                  d3.return = a2;
                  a2 = d3;
                  break a;
                } else {
                  c2(a2, d3);
                  break;
                }
                else b2(a2, d3);
                d3 = d3.sibling;
              }
              d3 = Sg(f3, a2.mode, h4);
              d3.return = a2;
              a2 = d3;
            }
            return g2(a2);
          case Ha:
            return l3 = f3._init, J(a2, d3, l3(f3._payload), h4);
        }
        if (eb(f3)) return n(a2, d3, f3, h4);
        if (Ka(f3)) return t2(a2, d3, f3, h4);
        Mg(a2, f3);
      }
      return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a2, d3.sibling), d3 = e(d3, f3), d3.return = a2, a2 = d3) : (c2(a2, d3), d3 = Qg(f3, a2.mode, h4), d3.return = a2, a2 = d3), g2(a2)) : c2(a2, d3);
    }
    return J;
  }
  var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
  function $g() {
    Zg = Yg = Xg = null;
  }
  function ah(a) {
    var b2 = Wg.current;
    E2(Wg);
    a._currentValue = b2;
  }
  function bh(a, b2, c2) {
    for (; null !== a; ) {
      var d2 = a.alternate;
      (a.childLanes & b2) !== b2 ? (a.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
      if (a === c2) break;
      a = a.return;
    }
  }
  function ch(a, b2) {
    Xg = a;
    Zg = Yg = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b2) && (dh = true), a.firstContext = null);
  }
  function eh(a) {
    var b2 = a._currentValue;
    if (Zg !== a) if (a = { context: a, memoizedValue: b2, next: null }, null === Yg) {
      if (null === Xg) throw Error(p2(308));
      Yg = a;
      Xg.dependencies = { lanes: 0, firstContext: a };
    } else Yg = Yg.next = a;
    return b2;
  }
  var fh = null;
  function gh(a) {
    null === fh ? fh = [a] : fh.push(a);
  }
  function hh(a, b2, c2, d2) {
    var e = b2.interleaved;
    null === e ? (c2.next = c2, gh(b2)) : (c2.next = e.next, e.next = c2);
    b2.interleaved = c2;
    return ih(a, d2);
  }
  function ih(a, b2) {
    a.lanes |= b2;
    var c2 = a.alternate;
    null !== c2 && (c2.lanes |= b2);
    c2 = a;
    for (a = a.return; null !== a; ) a.childLanes |= b2, c2 = a.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a, a = a.return;
    return 3 === c2.tag ? c2.stateNode : null;
  }
  var jh = false;
  function kh(a) {
    a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function lh(a, b2) {
    a = a.updateQueue;
    b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
  }
  function mh(a, b2) {
    return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
  }
  function nh(a, b2, c2) {
    var d2 = a.updateQueue;
    if (null === d2) return null;
    d2 = d2.shared;
    if (0 !== (K & 2)) {
      var e = d2.pending;
      null === e ? b2.next = b2 : (b2.next = e.next, e.next = b2);
      d2.pending = b2;
      return ih(a, c2);
    }
    e = d2.interleaved;
    null === e ? (b2.next = b2, gh(d2)) : (b2.next = e.next, e.next = b2);
    d2.interleaved = b2;
    return ih(a, c2);
  }
  function oh(a, b2, c2) {
    b2 = b2.updateQueue;
    if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
      var d2 = b2.lanes;
      d2 &= a.pendingLanes;
      c2 |= d2;
      b2.lanes = c2;
      Cc(a, c2);
    }
  }
  function ph(a, b2) {
    var c2 = a.updateQueue, d2 = a.alternate;
    if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
      var e = null, f2 = null;
      c2 = c2.firstBaseUpdate;
      if (null !== c2) {
        do {
          var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
          null === f2 ? e = f2 = g2 : f2 = f2.next = g2;
          c2 = c2.next;
        } while (null !== c2);
        null === f2 ? e = f2 = b2 : f2 = f2.next = b2;
      } else e = f2 = b2;
      c2 = { baseState: d2.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
      a.updateQueue = c2;
      return;
    }
    a = c2.lastBaseUpdate;
    null === a ? c2.firstBaseUpdate = b2 : a.next = b2;
    c2.lastBaseUpdate = b2;
  }
  function qh(a, b2, c2, d2) {
    var e = a.updateQueue;
    jh = false;
    var f2 = e.firstBaseUpdate, g2 = e.lastBaseUpdate, h3 = e.shared.pending;
    if (null !== h3) {
      e.shared.pending = null;
      var k2 = h3, l2 = k2.next;
      k2.next = null;
      null === g2 ? f2 = l2 : g2.next = l2;
      g2 = k2;
      var m2 = a.alternate;
      null !== m2 && (m2 = m2.updateQueue, h3 = m2.lastBaseUpdate, h3 !== g2 && (null === h3 ? m2.firstBaseUpdate = l2 : h3.next = l2, m2.lastBaseUpdate = k2));
    }
    if (null !== f2) {
      var q = e.baseState;
      g2 = 0;
      m2 = l2 = k2 = null;
      h3 = f2;
      do {
        var r2 = h3.lane, y2 = h3.eventTime;
        if ((d2 & r2) === r2) {
          null !== m2 && (m2 = m2.next = {
            eventTime: y2,
            lane: 0,
            tag: h3.tag,
            payload: h3.payload,
            callback: h3.callback,
            next: null
          });
          a: {
            var n = a, t2 = h3;
            r2 = b2;
            y2 = c2;
            switch (t2.tag) {
              case 1:
                n = t2.payload;
                if ("function" === typeof n) {
                  q = n.call(y2, q, r2);
                  break a;
                }
                q = n;
                break a;
              case 3:
                n.flags = n.flags & -65537 | 128;
              case 0:
                n = t2.payload;
                r2 = "function" === typeof n ? n.call(y2, q, r2) : n;
                if (null === r2 || void 0 === r2) break a;
                q = A({}, q, r2);
                break a;
              case 2:
                jh = true;
            }
          }
          null !== h3.callback && 0 !== h3.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h3] : r2.push(h3));
        } else y2 = { eventTime: y2, lane: r2, tag: h3.tag, payload: h3.payload, callback: h3.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q) : m2 = m2.next = y2, g2 |= r2;
        h3 = h3.next;
        if (null === h3) if (h3 = e.shared.pending, null === h3) break;
        else r2 = h3, h3 = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
      } while (1);
      null === m2 && (k2 = q);
      e.baseState = k2;
      e.firstBaseUpdate = l2;
      e.lastBaseUpdate = m2;
      b2 = e.shared.interleaved;
      if (null !== b2) {
        e = b2;
        do
          g2 |= e.lane, e = e.next;
        while (e !== b2);
      } else null === f2 && (e.shared.lanes = 0);
      rh |= g2;
      a.lanes = g2;
      a.memoizedState = q;
    }
  }
  function sh(a, b2, c2) {
    a = b2.effects;
    b2.effects = null;
    if (null !== a) for (b2 = 0; b2 < a.length; b2++) {
      var d2 = a[b2], e = d2.callback;
      if (null !== e) {
        d2.callback = null;
        d2 = c2;
        if ("function" !== typeof e) throw Error(p2(191, e));
        e.call(d2);
      }
    }
  }
  var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
  function xh(a) {
    if (a === th) throw Error(p2(174));
    return a;
  }
  function yh(a, b2) {
    G2(wh, b2);
    G2(vh, a);
    G2(uh, th);
    a = b2.nodeType;
    switch (a) {
      case 9:
      case 11:
        b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
        break;
      default:
        a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = lb(b2, a);
    }
    E2(uh);
    G2(uh, b2);
  }
  function zh() {
    E2(uh);
    E2(vh);
    E2(wh);
  }
  function Ah(a) {
    xh(wh.current);
    var b2 = xh(uh.current);
    var c2 = lb(b2, a.type);
    b2 !== c2 && (G2(vh, a), G2(uh, c2));
  }
  function Bh(a) {
    vh.current === a && (E2(uh), E2(vh));
  }
  var L = Uf(0);
  function Ch(a) {
    for (var b2 = a; null !== b2; ) {
      if (13 === b2.tag) {
        var c2 = b2.memoizedState;
        if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data)) return b2;
      } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
        if (0 !== (b2.flags & 128)) return b2;
      } else if (null !== b2.child) {
        b2.child.return = b2;
        b2 = b2.child;
        continue;
      }
      if (b2 === a) break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a) return null;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
    return null;
  }
  var Dh = [];
  function Eh() {
    for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
    Dh.length = 0;
  }
  var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
  function P() {
    throw Error(p2(321));
  }
  function Mh(a, b2) {
    if (null === b2) return false;
    for (var c2 = 0; c2 < b2.length && c2 < a.length; c2++) if (!He(a[c2], b2[c2])) return false;
    return true;
  }
  function Nh(a, b2, c2, d2, e, f2) {
    Hh = f2;
    M = b2;
    b2.memoizedState = null;
    b2.updateQueue = null;
    b2.lanes = 0;
    Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
    a = c2(d2, e);
    if (Jh) {
      f2 = 0;
      do {
        Jh = false;
        Kh = 0;
        if (25 <= f2) throw Error(p2(301));
        f2 += 1;
        O = N = null;
        b2.updateQueue = null;
        Fh.current = Qh;
        a = c2(d2, e);
      } while (Jh);
    }
    Fh.current = Rh;
    b2 = null !== N && null !== N.next;
    Hh = 0;
    O = N = M = null;
    Ih = false;
    if (b2) throw Error(p2(300));
    return a;
  }
  function Sh() {
    var a = 0 !== Kh;
    Kh = 0;
    return a;
  }
  function Th() {
    var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    null === O ? M.memoizedState = O = a : O = O.next = a;
    return O;
  }
  function Uh() {
    if (null === N) {
      var a = M.alternate;
      a = null !== a ? a.memoizedState : null;
    } else a = N.next;
    var b2 = null === O ? M.memoizedState : O.next;
    if (null !== b2) O = b2, N = a;
    else {
      if (null === a) throw Error(p2(310));
      N = a;
      a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
      null === O ? M.memoizedState = O = a : O = O.next = a;
    }
    return O;
  }
  function Vh(a, b2) {
    return "function" === typeof b2 ? b2(a) : b2;
  }
  function Wh(a) {
    var b2 = Uh(), c2 = b2.queue;
    if (null === c2) throw Error(p2(311));
    c2.lastRenderedReducer = a;
    var d2 = N, e = d2.baseQueue, f2 = c2.pending;
    if (null !== f2) {
      if (null !== e) {
        var g2 = e.next;
        e.next = f2.next;
        f2.next = g2;
      }
      d2.baseQueue = e = f2;
      c2.pending = null;
    }
    if (null !== e) {
      f2 = e.next;
      d2 = d2.baseState;
      var h3 = g2 = null, k2 = null, l2 = f2;
      do {
        var m2 = l2.lane;
        if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a(d2, l2.action);
        else {
          var q = {
            lane: m2,
            action: l2.action,
            hasEagerState: l2.hasEagerState,
            eagerState: l2.eagerState,
            next: null
          };
          null === k2 ? (h3 = k2 = q, g2 = d2) : k2 = k2.next = q;
          M.lanes |= m2;
          rh |= m2;
        }
        l2 = l2.next;
      } while (null !== l2 && l2 !== f2);
      null === k2 ? g2 = d2 : k2.next = h3;
      He(d2, b2.memoizedState) || (dh = true);
      b2.memoizedState = d2;
      b2.baseState = g2;
      b2.baseQueue = k2;
      c2.lastRenderedState = d2;
    }
    a = c2.interleaved;
    if (null !== a) {
      e = a;
      do
        f2 = e.lane, M.lanes |= f2, rh |= f2, e = e.next;
      while (e !== a);
    } else null === e && (c2.lanes = 0);
    return [b2.memoizedState, c2.dispatch];
  }
  function Xh(a) {
    var b2 = Uh(), c2 = b2.queue;
    if (null === c2) throw Error(p2(311));
    c2.lastRenderedReducer = a;
    var d2 = c2.dispatch, e = c2.pending, f2 = b2.memoizedState;
    if (null !== e) {
      c2.pending = null;
      var g2 = e = e.next;
      do
        f2 = a(f2, g2.action), g2 = g2.next;
      while (g2 !== e);
      He(f2, b2.memoizedState) || (dh = true);
      b2.memoizedState = f2;
      null === b2.baseQueue && (b2.baseState = f2);
      c2.lastRenderedState = f2;
    }
    return [f2, d2];
  }
  function Yh() {
  }
  function Zh(a, b2) {
    var c2 = M, d2 = Uh(), e = b2(), f2 = !He(d2.memoizedState, e);
    f2 && (d2.memoizedState = e, dh = true);
    d2 = d2.queue;
    $h(ai.bind(null, c2, d2, a), [a]);
    if (d2.getSnapshot !== b2 || f2 || null !== O && O.memoizedState.tag & 1) {
      c2.flags |= 2048;
      bi(9, ci.bind(null, c2, d2, e, b2), void 0, null);
      if (null === Q) throw Error(p2(349));
      0 !== (Hh & 30) || di(c2, b2, e);
    }
    return e;
  }
  function di(a, b2, c2) {
    a.flags |= 16384;
    a = { getSnapshot: b2, value: c2 };
    b2 = M.updateQueue;
    null === b2 ? (b2 = { lastEffect: null, stores: null }, M.updateQueue = b2, b2.stores = [a]) : (c2 = b2.stores, null === c2 ? b2.stores = [a] : c2.push(a));
  }
  function ci(a, b2, c2, d2) {
    b2.value = c2;
    b2.getSnapshot = d2;
    ei(b2) && fi(a);
  }
  function ai(a, b2, c2) {
    return c2(function() {
      ei(b2) && fi(a);
    });
  }
  function ei(a) {
    var b2 = a.getSnapshot;
    a = a.value;
    try {
      var c2 = b2();
      return !He(a, c2);
    } catch (d2) {
      return true;
    }
  }
  function fi(a) {
    var b2 = ih(a, 1);
    null !== b2 && gi(b2, a, 1, -1);
  }
  function hi(a) {
    var b2 = Th();
    "function" === typeof a && (a = a());
    b2.memoizedState = b2.baseState = a;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
    b2.queue = a;
    a = a.dispatch = ii.bind(null, M, a);
    return [b2.memoizedState, a];
  }
  function bi(a, b2, c2, d2) {
    a = { tag: a, create: b2, destroy: c2, deps: d2, next: null };
    b2 = M.updateQueue;
    null === b2 ? (b2 = { lastEffect: null, stores: null }, M.updateQueue = b2, b2.lastEffect = a.next = a) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a.next = a : (d2 = c2.next, c2.next = a, a.next = d2, b2.lastEffect = a));
    return a;
  }
  function ji() {
    return Uh().memoizedState;
  }
  function ki(a, b2, c2, d2) {
    var e = Th();
    M.flags |= a;
    e.memoizedState = bi(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
  }
  function li(a, b2, c2, d2) {
    var e = Uh();
    d2 = void 0 === d2 ? null : d2;
    var f2 = void 0;
    if (null !== N) {
      var g2 = N.memoizedState;
      f2 = g2.destroy;
      if (null !== d2 && Mh(d2, g2.deps)) {
        e.memoizedState = bi(b2, c2, f2, d2);
        return;
      }
    }
    M.flags |= a;
    e.memoizedState = bi(1 | b2, c2, f2, d2);
  }
  function mi(a, b2) {
    return ki(8390656, 8, a, b2);
  }
  function $h(a, b2) {
    return li(2048, 8, a, b2);
  }
  function ni(a, b2) {
    return li(4, 2, a, b2);
  }
  function oi(a, b2) {
    return li(4, 4, a, b2);
  }
  function pi(a, b2) {
    if ("function" === typeof b2) return a = a(), b2(a), function() {
      b2(null);
    };
    if (null !== b2 && void 0 !== b2) return a = a(), b2.current = a, function() {
      b2.current = null;
    };
  }
  function qi(a, b2, c2) {
    c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
    return li(4, 4, pi.bind(null, b2, a), c2);
  }
  function ri() {
  }
  function si(a, b2) {
    var c2 = Uh();
    b2 = void 0 === b2 ? null : b2;
    var d2 = c2.memoizedState;
    if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
    c2.memoizedState = [a, b2];
    return a;
  }
  function ti(a, b2) {
    var c2 = Uh();
    b2 = void 0 === b2 ? null : b2;
    var d2 = c2.memoizedState;
    if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
    a = a();
    c2.memoizedState = [a, b2];
    return a;
  }
  function ui(a, b2, c2) {
    if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c2;
    He(c2, b2) || (c2 = yc(), M.lanes |= c2, rh |= c2, a.baseState = true);
    return b2;
  }
  function vi(a, b2) {
    var c2 = C2;
    C2 = 0 !== c2 && 4 > c2 ? c2 : 4;
    a(true);
    var d2 = Gh.transition;
    Gh.transition = {};
    try {
      a(false), b2();
    } finally {
      C2 = c2, Gh.transition = d2;
    }
  }
  function wi() {
    return Uh().memoizedState;
  }
  function xi(a, b2, c2) {
    var d2 = yi(a);
    c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
    if (zi(a)) Ai(b2, c2);
    else if (c2 = hh(a, b2, c2, d2), null !== c2) {
      var e = R();
      gi(c2, a, d2, e);
      Bi(c2, b2, d2);
    }
  }
  function ii(a, b2, c2) {
    var d2 = yi(a), e = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
    if (zi(a)) Ai(b2, e);
    else {
      var f2 = a.alternate;
      if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
        var g2 = b2.lastRenderedState, h3 = f2(g2, c2);
        e.hasEagerState = true;
        e.eagerState = h3;
        if (He(h3, g2)) {
          var k2 = b2.interleaved;
          null === k2 ? (e.next = e, gh(b2)) : (e.next = k2.next, k2.next = e);
          b2.interleaved = e;
          return;
        }
      } catch (l2) {
      } finally {
      }
      c2 = hh(a, b2, e, d2);
      null !== c2 && (e = R(), gi(c2, a, d2, e), Bi(c2, b2, d2));
    }
  }
  function zi(a) {
    var b2 = a.alternate;
    return a === M || null !== b2 && b2 === M;
  }
  function Ai(a, b2) {
    Jh = Ih = true;
    var c2 = a.pending;
    null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
    a.pending = b2;
  }
  function Bi(a, b2, c2) {
    if (0 !== (c2 & 4194240)) {
      var d2 = b2.lanes;
      d2 &= a.pendingLanes;
      c2 |= d2;
      b2.lanes = c2;
      Cc(a, c2);
    }
  }
  var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b2) {
    Th().memoizedState = [a, void 0 === b2 ? null : b2];
    return a;
  }, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b2, c2) {
    c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
    return ki(
      4194308,
      4,
      pi.bind(null, b2, a),
      c2
    );
  }, useLayoutEffect: function(a, b2) {
    return ki(4194308, 4, a, b2);
  }, useInsertionEffect: function(a, b2) {
    return ki(4, 2, a, b2);
  }, useMemo: function(a, b2) {
    var c2 = Th();
    b2 = void 0 === b2 ? null : b2;
    a = a();
    c2.memoizedState = [a, b2];
    return a;
  }, useReducer: function(a, b2, c2) {
    var d2 = Th();
    b2 = void 0 !== c2 ? c2(b2) : b2;
    d2.memoizedState = d2.baseState = b2;
    a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
    d2.queue = a;
    a = a.dispatch = xi.bind(null, M, a);
    return [d2.memoizedState, a];
  }, useRef: function(a) {
    var b2 = Th();
    a = { current: a };
    return b2.memoizedState = a;
  }, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
    return Th().memoizedState = a;
  }, useTransition: function() {
    var a = hi(false), b2 = a[0];
    a = vi.bind(null, a[1]);
    Th().memoizedState = a;
    return [b2, a];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(a, b2, c2) {
    var d2 = M, e = Th();
    if (I) {
      if (void 0 === c2) throw Error(p2(407));
      c2 = c2();
    } else {
      c2 = b2();
      if (null === Q) throw Error(p2(349));
      0 !== (Hh & 30) || di(d2, b2, c2);
    }
    e.memoizedState = c2;
    var f2 = { value: c2, getSnapshot: b2 };
    e.queue = f2;
    mi(ai.bind(
      null,
      d2,
      f2,
      a
    ), [a]);
    d2.flags |= 2048;
    bi(9, ci.bind(null, d2, f2, c2, b2), void 0, null);
    return c2;
  }, useId: function() {
    var a = Th(), b2 = Q.identifierPrefix;
    if (I) {
      var c2 = sg;
      var d2 = rg;
      c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
      b2 = ":" + b2 + "R" + c2;
      c2 = Kh++;
      0 < c2 && (b2 += "H" + c2.toString(32));
      b2 += ":";
    } else c2 = Lh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
    return a.memoizedState = b2;
  }, unstable_isNewReconciler: false }, Ph = {
    readContext: eh,
    useCallback: si,
    useContext: eh,
    useEffect: $h,
    useImperativeHandle: qi,
    useInsertionEffect: ni,
    useLayoutEffect: oi,
    useMemo: ti,
    useReducer: Wh,
    useRef: ji,
    useState: function() {
      return Wh(Vh);
    },
    useDebugValue: ri,
    useDeferredValue: function(a) {
      var b2 = Uh();
      return ui(b2, N.memoizedState, a);
    },
    useTransition: function() {
      var a = Wh(Vh)[0], b2 = Uh().memoizedState;
      return [a, b2];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Zh,
    useId: wi,
    unstable_isNewReconciler: false
  }, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
    return Xh(Vh);
  }, useDebugValue: ri, useDeferredValue: function(a) {
    var b2 = Uh();
    return null === N ? b2.memoizedState = a : ui(b2, N.memoizedState, a);
  }, useTransition: function() {
    var a = Xh(Vh)[0], b2 = Uh().memoizedState;
    return [a, b2];
  }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
  function Ci(a, b2) {
    if (a && a.defaultProps) {
      b2 = A({}, b2);
      a = a.defaultProps;
      for (var c2 in a) void 0 === b2[c2] && (b2[c2] = a[c2]);
      return b2;
    }
    return b2;
  }
  function Di(a, b2, c2, d2) {
    b2 = a.memoizedState;
    c2 = c2(d2, b2);
    c2 = null === c2 || void 0 === c2 ? b2 : A({}, b2, c2);
    a.memoizedState = c2;
    0 === a.lanes && (a.updateQueue.baseState = c2);
  }
  var Ei = { isMounted: function(a) {
    return (a = a._reactInternals) ? Vb(a) === a : false;
  }, enqueueSetState: function(a, b2, c2) {
    a = a._reactInternals;
    var d2 = R(), e = yi(a), f2 = mh(d2, e);
    f2.payload = b2;
    void 0 !== c2 && null !== c2 && (f2.callback = c2);
    b2 = nh(a, f2, e);
    null !== b2 && (gi(b2, a, e, d2), oh(b2, a, e));
  }, enqueueReplaceState: function(a, b2, c2) {
    a = a._reactInternals;
    var d2 = R(), e = yi(a), f2 = mh(d2, e);
    f2.tag = 1;
    f2.payload = b2;
    void 0 !== c2 && null !== c2 && (f2.callback = c2);
    b2 = nh(a, f2, e);
    null !== b2 && (gi(b2, a, e, d2), oh(b2, a, e));
  }, enqueueForceUpdate: function(a, b2) {
    a = a._reactInternals;
    var c2 = R(), d2 = yi(a), e = mh(c2, d2);
    e.tag = 2;
    void 0 !== b2 && null !== b2 && (e.callback = b2);
    b2 = nh(a, e, d2);
    null !== b2 && (gi(b2, a, d2, c2), oh(b2, a, d2));
  } };
  function Fi(a, b2, c2, d2, e, f2, g2) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie(c2, d2) || !Ie(e, f2) : true;
  }
  function Gi(a, b2, c2) {
    var d2 = false, e = Vf;
    var f2 = b2.contextType;
    "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e = Zf(b2) ? Xf : H.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a, e) : Vf);
    b2 = new b2(c2, f2);
    a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
    b2.updater = Ei;
    a.stateNode = b2;
    b2._reactInternals = a;
    d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
    return b2;
  }
  function Hi(a, b2, c2, d2) {
    a = b2.state;
    "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
    "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
    b2.state !== a && Ei.enqueueReplaceState(b2, b2.state, null);
  }
  function Ii(a, b2, c2, d2) {
    var e = a.stateNode;
    e.props = c2;
    e.state = a.memoizedState;
    e.refs = {};
    kh(a);
    var f2 = b2.contextType;
    "object" === typeof f2 && null !== f2 ? e.context = eh(f2) : (f2 = Zf(b2) ? Xf : H.current, e.context = Yf(a, f2));
    e.state = a.memoizedState;
    f2 = b2.getDerivedStateFromProps;
    "function" === typeof f2 && (Di(a, b2, f2, c2), e.state = a.memoizedState);
    "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b2 = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b2 !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c2, e, d2), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4194308);
  }
  function Ji(a, b2) {
    try {
      var c2 = "", d2 = b2;
      do
        c2 += Pa(d2), d2 = d2.return;
      while (d2);
      var e = c2;
    } catch (f2) {
      e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
    }
    return { value: a, source: b2, stack: e, digest: null };
  }
  function Ki(a, b2, c2) {
    return { value: a, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
  }
  function Li(a, b2) {
    try {
      console.error(b2.value);
    } catch (c2) {
      setTimeout(function() {
        throw c2;
      });
    }
  }
  var Mi = "function" === typeof WeakMap ? WeakMap : Map;
  function Ni(a, b2, c2) {
    c2 = mh(-1, c2);
    c2.tag = 3;
    c2.payload = { element: null };
    var d2 = b2.value;
    c2.callback = function() {
      Oi || (Oi = true, Pi = d2);
      Li(a, b2);
    };
    return c2;
  }
  function Qi(a, b2, c2) {
    c2 = mh(-1, c2);
    c2.tag = 3;
    var d2 = a.type.getDerivedStateFromError;
    if ("function" === typeof d2) {
      var e = b2.value;
      c2.payload = function() {
        return d2(e);
      };
      c2.callback = function() {
        Li(a, b2);
      };
    }
    var f2 = a.stateNode;
    null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
      Li(a, b2);
      "function" !== typeof d2 && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
      var c3 = b2.stack;
      this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
    });
    return c2;
  }
  function Si(a, b2, c2) {
    var d2 = a.pingCache;
    if (null === d2) {
      d2 = a.pingCache = new Mi();
      var e = /* @__PURE__ */ new Set();
      d2.set(b2, e);
    } else e = d2.get(b2), void 0 === e && (e = /* @__PURE__ */ new Set(), d2.set(b2, e));
    e.has(c2) || (e.add(c2), a = Ti.bind(null, a, b2, c2), b2.then(a, a));
  }
  function Ui(a) {
    do {
      var b2;
      if (b2 = 13 === a.tag) b2 = a.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
      if (b2) return a;
      a = a.return;
    } while (null !== a);
    return null;
  }
  function Vi(a, b2, c2, d2, e) {
    if (0 === (a.mode & 1)) return a === b2 ? a.flags |= 65536 : (a.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = mh(-1, 1), b2.tag = 2, nh(c2, b2, 1))), c2.lanes |= 1), a;
    a.flags |= 65536;
    a.lanes = e;
    return a;
  }
  var Wi = ua.ReactCurrentOwner, dh = false;
  function Xi(a, b2, c2, d2) {
    b2.child = null === a ? Vg(b2, null, c2, d2) : Ug(b2, a.child, c2, d2);
  }
  function Yi(a, b2, c2, d2, e) {
    c2 = c2.render;
    var f2 = b2.ref;
    ch(b2, e);
    d2 = Nh(a, b2, c2, d2, f2, e);
    c2 = Sh();
    if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e, Zi(a, b2, e);
    I && c2 && vg(b2);
    b2.flags |= 1;
    Xi(a, b2, d2, e);
    return b2.child;
  }
  function $i(a, b2, c2, d2, e) {
    if (null === a) {
      var f2 = c2.type;
      if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps) return b2.tag = 15, b2.type = f2, bj(a, b2, f2, d2, e);
      a = Rg(c2.type, null, d2, b2, b2.mode, e);
      a.ref = b2.ref;
      a.return = b2;
      return b2.child = a;
    }
    f2 = a.child;
    if (0 === (a.lanes & e)) {
      var g2 = f2.memoizedProps;
      c2 = c2.compare;
      c2 = null !== c2 ? c2 : Ie;
      if (c2(g2, d2) && a.ref === b2.ref) return Zi(a, b2, e);
    }
    b2.flags |= 1;
    a = Pg(f2, d2);
    a.ref = b2.ref;
    a.return = b2;
    return b2.child = a;
  }
  function bj(a, b2, c2, d2, e) {
    if (null !== a) {
      var f2 = a.memoizedProps;
      if (Ie(f2, d2) && a.ref === b2.ref) if (dh = false, b2.pendingProps = d2 = f2, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
      else return b2.lanes = a.lanes, Zi(a, b2, e);
    }
    return cj(a, b2, c2, d2, e);
  }
  function dj(a, b2, c2) {
    var d2 = b2.pendingProps, e = d2.children, f2 = null !== a ? a.memoizedState : null;
    if ("hidden" === d2.mode) if (0 === (b2.mode & 1)) b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G2(ej, fj), fj |= c2;
    else {
      if (0 === (c2 & 1073741824)) return a = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b2.updateQueue = null, G2(ej, fj), fj |= a, null;
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d2 = null !== f2 ? f2.baseLanes : c2;
      G2(ej, fj);
      fj |= d2;
    }
    else null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G2(ej, fj), fj |= d2;
    Xi(a, b2, e, c2);
    return b2.child;
  }
  function gj(a, b2) {
    var c2 = b2.ref;
    if (null === a && null !== c2 || null !== a && a.ref !== c2) b2.flags |= 512, b2.flags |= 2097152;
  }
  function cj(a, b2, c2, d2, e) {
    var f2 = Zf(c2) ? Xf : H.current;
    f2 = Yf(b2, f2);
    ch(b2, e);
    c2 = Nh(a, b2, c2, d2, f2, e);
    d2 = Sh();
    if (null !== a && !dh) return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e, Zi(a, b2, e);
    I && d2 && vg(b2);
    b2.flags |= 1;
    Xi(a, b2, c2, e);
    return b2.child;
  }
  function hj(a, b2, c2, d2, e) {
    if (Zf(c2)) {
      var f2 = true;
      cg(b2);
    } else f2 = false;
    ch(b2, e);
    if (null === b2.stateNode) ij(a, b2), Gi(b2, c2, d2), Ii(b2, c2, d2, e), d2 = true;
    else if (null === a) {
      var g2 = b2.stateNode, h3 = b2.memoizedProps;
      g2.props = h3;
      var k2 = g2.context, l2 = c2.contextType;
      "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c2) ? Xf : H.current, l2 = Yf(b2, l2));
      var m2 = c2.getDerivedStateFromProps, q = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
      q || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h3 !== d2 || k2 !== l2) && Hi(b2, g2, d2, l2);
      jh = false;
      var r2 = b2.memoizedState;
      g2.state = r2;
      qh(b2, d2, g2, e);
      k2 = b2.memoizedState;
      h3 !== d2 || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b2, c2, m2, d2), k2 = b2.memoizedState), (h3 = jh || Fi(b2, c2, h3, d2, r2, k2, l2)) ? (q || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h3) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
    } else {
      g2 = b2.stateNode;
      lh(a, b2);
      h3 = b2.memoizedProps;
      l2 = b2.type === b2.elementType ? h3 : Ci(b2.type, h3);
      g2.props = l2;
      q = b2.pendingProps;
      r2 = g2.context;
      k2 = c2.contextType;
      "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c2) ? Xf : H.current, k2 = Yf(b2, k2));
      var y2 = c2.getDerivedStateFromProps;
      (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h3 !== q || r2 !== k2) && Hi(b2, g2, d2, k2);
      jh = false;
      r2 = b2.memoizedState;
      g2.state = r2;
      qh(b2, d2, g2, e);
      var n = b2.memoizedState;
      h3 !== q || r2 !== n || Wf.current || jh ? ("function" === typeof y2 && (Di(b2, c2, y2, d2), n = b2.memoizedState), (l2 = jh || Fi(b2, c2, l2, d2, r2, n, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h3 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h3 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n), g2.props = d2, g2.state = n, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h3 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h3 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), d2 = false);
    }
    return jj(a, b2, c2, d2, f2, e);
  }
  function jj(a, b2, c2, d2, e, f2) {
    gj(a, b2);
    var g2 = 0 !== (b2.flags & 128);
    if (!d2 && !g2) return e && dg(b2, c2, false), Zi(a, b2, f2);
    d2 = b2.stateNode;
    Wi.current = b2;
    var h3 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
    b2.flags |= 1;
    null !== a && g2 ? (b2.child = Ug(b2, a.child, null, f2), b2.child = Ug(b2, null, h3, f2)) : Xi(a, b2, h3, f2);
    b2.memoizedState = d2.state;
    e && dg(b2, c2, true);
    return b2.child;
  }
  function kj(a) {
    var b2 = a.stateNode;
    b2.pendingContext ? ag(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a, b2.context, false);
    yh(a, b2.containerInfo);
  }
  function lj(a, b2, c2, d2, e) {
    Ig();
    Jg(e);
    b2.flags |= 256;
    Xi(a, b2, c2, d2);
    return b2.child;
  }
  var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
  function nj(a) {
    return { baseLanes: a, cachePool: null, transitions: null };
  }
  function oj(a, b2, c2) {
    var d2 = b2.pendingProps, e = L.current, f2 = false, g2 = 0 !== (b2.flags & 128), h3;
    (h3 = g2) || (h3 = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
    if (h3) f2 = true, b2.flags &= -129;
    else if (null === a || null !== a.memoizedState) e |= 1;
    G2(L, e & 1);
    if (null === a) {
      Eg(b2);
      a = b2.memoizedState;
      if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
      g2 = d2.children;
      a = d2.fallback;
      return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = pj(g2, d2, 0, null), a = Tg(a, d2, c2, null), f2.return = b2, a.return = b2, f2.sibling = a, b2.child = f2, b2.child.memoizedState = nj(c2), b2.memoizedState = mj, a) : qj(b2, g2);
    }
    e = a.memoizedState;
    if (null !== e && (h3 = e.dehydrated, null !== h3)) return rj(a, b2, g2, d2, h3, e, c2);
    if (f2) {
      f2 = d2.fallback;
      g2 = b2.mode;
      e = a.child;
      h3 = e.sibling;
      var k2 = { mode: "hidden", children: d2.children };
      0 === (g2 & 1) && b2.child !== e ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = Pg(e, k2), d2.subtreeFlags = e.subtreeFlags & 14680064);
      null !== h3 ? f2 = Pg(h3, f2) : (f2 = Tg(f2, g2, c2, null), f2.flags |= 2);
      f2.return = b2;
      d2.return = b2;
      d2.sibling = f2;
      b2.child = d2;
      d2 = f2;
      f2 = b2.child;
      g2 = a.child.memoizedState;
      g2 = null === g2 ? nj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
      f2.memoizedState = g2;
      f2.childLanes = a.childLanes & ~c2;
      b2.memoizedState = mj;
      return d2;
    }
    f2 = a.child;
    a = f2.sibling;
    d2 = Pg(f2, { mode: "visible", children: d2.children });
    0 === (b2.mode & 1) && (d2.lanes = c2);
    d2.return = b2;
    d2.sibling = null;
    null !== a && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a], b2.flags |= 16) : c2.push(a));
    b2.child = d2;
    b2.memoizedState = null;
    return d2;
  }
  function qj(a, b2) {
    b2 = pj({ mode: "visible", children: b2 }, a.mode, 0, null);
    b2.return = a;
    return a.child = b2;
  }
  function sj(a, b2, c2, d2) {
    null !== d2 && Jg(d2);
    Ug(b2, a.child, null, c2);
    a = qj(b2, b2.pendingProps.children);
    a.flags |= 2;
    b2.memoizedState = null;
    return a;
  }
  function rj(a, b2, c2, d2, e, f2, g2) {
    if (c2) {
      if (b2.flags & 256) return b2.flags &= -257, d2 = Ki(Error(p2(422))), sj(a, b2, g2, d2);
      if (null !== b2.memoizedState) return b2.child = a.child, b2.flags |= 128, null;
      f2 = d2.fallback;
      e = b2.mode;
      d2 = pj({ mode: "visible", children: d2.children }, e, 0, null);
      f2 = Tg(f2, e, g2, null);
      f2.flags |= 2;
      d2.return = b2;
      f2.return = b2;
      d2.sibling = f2;
      b2.child = d2;
      0 !== (b2.mode & 1) && Ug(b2, a.child, null, g2);
      b2.child.memoizedState = nj(g2);
      b2.memoizedState = mj;
      return f2;
    }
    if (0 === (b2.mode & 1)) return sj(a, b2, g2, null);
    if ("$!" === e.data) {
      d2 = e.nextSibling && e.nextSibling.dataset;
      if (d2) var h3 = d2.dgst;
      d2 = h3;
      f2 = Error(p2(419));
      d2 = Ki(f2, d2, void 0);
      return sj(a, b2, g2, d2);
    }
    h3 = 0 !== (g2 & a.childLanes);
    if (dh || h3) {
      d2 = Q;
      if (null !== d2) {
        switch (g2 & -g2) {
          case 4:
            e = 2;
            break;
          case 16:
            e = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            e = 32;
            break;
          case 536870912:
            e = 268435456;
            break;
          default:
            e = 0;
        }
        e = 0 !== (e & (d2.suspendedLanes | g2)) ? 0 : e;
        0 !== e && e !== f2.retryLane && (f2.retryLane = e, ih(a, e), gi(d2, a, e, -1));
      }
      tj();
      d2 = Ki(Error(p2(421)));
      return sj(a, b2, g2, d2);
    }
    if ("$?" === e.data) return b2.flags |= 128, b2.child = a.child, b2 = uj.bind(null, a), e._reactRetry = b2, null;
    a = f2.treeContext;
    yg = Lf(e.nextSibling);
    xg = b2;
    I = true;
    zg = null;
    null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b2);
    b2 = qj(b2, d2.children);
    b2.flags |= 4096;
    return b2;
  }
  function vj(a, b2, c2) {
    a.lanes |= b2;
    var d2 = a.alternate;
    null !== d2 && (d2.lanes |= b2);
    bh(a.return, b2, c2);
  }
  function wj(a, b2, c2, d2, e) {
    var f2 = a.memoizedState;
    null === f2 ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e);
  }
  function xj(a, b2, c2) {
    var d2 = b2.pendingProps, e = d2.revealOrder, f2 = d2.tail;
    Xi(a, b2, d2.children, c2);
    d2 = L.current;
    if (0 !== (d2 & 2)) d2 = d2 & 1 | 2, b2.flags |= 128;
    else {
      if (null !== a && 0 !== (a.flags & 128)) a: for (a = b2.child; null !== a; ) {
        if (13 === a.tag) null !== a.memoizedState && vj(a, c2, b2);
        else if (19 === a.tag) vj(a, c2, b2);
        else if (null !== a.child) {
          a.child.return = a;
          a = a.child;
          continue;
        }
        if (a === b2) break a;
        for (; null === a.sibling; ) {
          if (null === a.return || a.return === b2) break a;
          a = a.return;
        }
        a.sibling.return = a.return;
        a = a.sibling;
      }
      d2 &= 1;
    }
    G2(L, d2);
    if (0 === (b2.mode & 1)) b2.memoizedState = null;
    else switch (e) {
      case "forwards":
        c2 = b2.child;
        for (e = null; null !== c2; ) a = c2.alternate, null !== a && null === Ch(a) && (e = c2), c2 = c2.sibling;
        c2 = e;
        null === c2 ? (e = b2.child, b2.child = null) : (e = c2.sibling, c2.sibling = null);
        wj(b2, false, e, c2, f2);
        break;
      case "backwards":
        c2 = null;
        e = b2.child;
        for (b2.child = null; null !== e; ) {
          a = e.alternate;
          if (null !== a && null === Ch(a)) {
            b2.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c2;
          c2 = e;
          e = a;
        }
        wj(b2, true, c2, null, f2);
        break;
      case "together":
        wj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
    return b2.child;
  }
  function ij(a, b2) {
    0 === (b2.mode & 1) && null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
  }
  function Zi(a, b2, c2) {
    null !== a && (b2.dependencies = a.dependencies);
    rh |= b2.lanes;
    if (0 === (c2 & b2.childLanes)) return null;
    if (null !== a && b2.child !== a.child) throw Error(p2(153));
    if (null !== b2.child) {
      a = b2.child;
      c2 = Pg(a, a.pendingProps);
      b2.child = c2;
      for (c2.return = b2; null !== a.sibling; ) a = a.sibling, c2 = c2.sibling = Pg(a, a.pendingProps), c2.return = b2;
      c2.sibling = null;
    }
    return b2.child;
  }
  function yj(a, b2, c2) {
    switch (b2.tag) {
      case 3:
        kj(b2);
        Ig();
        break;
      case 5:
        Ah(b2);
        break;
      case 1:
        Zf(b2.type) && cg(b2);
        break;
      case 4:
        yh(b2, b2.stateNode.containerInfo);
        break;
      case 10:
        var d2 = b2.type._context, e = b2.memoizedProps.value;
        G2(Wg, d2._currentValue);
        d2._currentValue = e;
        break;
      case 13:
        d2 = b2.memoizedState;
        if (null !== d2) {
          if (null !== d2.dehydrated) return G2(L, L.current & 1), b2.flags |= 128, null;
          if (0 !== (c2 & b2.child.childLanes)) return oj(a, b2, c2);
          G2(L, L.current & 1);
          a = Zi(a, b2, c2);
          return null !== a ? a.sibling : null;
        }
        G2(L, L.current & 1);
        break;
      case 19:
        d2 = 0 !== (c2 & b2.childLanes);
        if (0 !== (a.flags & 128)) {
          if (d2) return xj(a, b2, c2);
          b2.flags |= 128;
        }
        e = b2.memoizedState;
        null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
        G2(L, L.current);
        if (d2) break;
        else return null;
      case 22:
      case 23:
        return b2.lanes = 0, dj(a, b2, c2);
    }
    return Zi(a, b2, c2);
  }
  var zj, Aj, Bj, Cj;
  zj = function(a, b2) {
    for (var c2 = b2.child; null !== c2; ) {
      if (5 === c2.tag || 6 === c2.tag) a.appendChild(c2.stateNode);
      else if (4 !== c2.tag && null !== c2.child) {
        c2.child.return = c2;
        c2 = c2.child;
        continue;
      }
      if (c2 === b2) break;
      for (; null === c2.sibling; ) {
        if (null === c2.return || c2.return === b2) return;
        c2 = c2.return;
      }
      c2.sibling.return = c2.return;
      c2 = c2.sibling;
    }
  };
  Aj = function() {
  };
  Bj = function(a, b2, c2, d2) {
    var e = a.memoizedProps;
    if (e !== d2) {
      a = b2.stateNode;
      xh(uh.current);
      var f2 = null;
      switch (c2) {
        case "input":
          e = Ya(a, e);
          d2 = Ya(a, d2);
          f2 = [];
          break;
        case "select":
          e = A({}, e, { value: void 0 });
          d2 = A({}, d2, { value: void 0 });
          f2 = [];
          break;
        case "textarea":
          e = gb(a, e);
          d2 = gb(a, d2);
          f2 = [];
          break;
        default:
          "function" !== typeof e.onClick && "function" === typeof d2.onClick && (a.onclick = Bf);
      }
      ub(c2, d2);
      var g2;
      c2 = null;
      for (l2 in e) if (!d2.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2]) if ("style" === l2) {
        var h3 = e[l2];
        for (g2 in h3) h3.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
      } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
      for (l2 in d2) {
        var k2 = d2[l2];
        h3 = null != e ? e[l2] : void 0;
        if (d2.hasOwnProperty(l2) && k2 !== h3 && (null != k2 || null != h3)) if ("style" === l2) if (h3) {
          for (g2 in h3) !h3.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
          for (g2 in k2) k2.hasOwnProperty(g2) && h3[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
        } else c2 || (f2 || (f2 = []), f2.push(
          l2,
          c2
        )), c2 = k2;
        else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h3 = h3 ? h3.__html : void 0, null != k2 && h3 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h3 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
      }
      c2 && (f2 = f2 || []).push("style", c2);
      var l2 = f2;
      if (b2.updateQueue = l2) b2.flags |= 4;
    }
  };
  Cj = function(a, b2, c2, d2) {
    c2 !== d2 && (b2.flags |= 4);
  };
  function Dj(a, b2) {
    if (!I) switch (a.tailMode) {
      case "hidden":
        b2 = a.tail;
        for (var c2 = null; null !== b2; ) null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
        null === c2 ? a.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a.tail;
        for (var d2 = null; null !== c2; ) null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
        null === d2 ? b2 || null === a.tail ? a.tail = null : a.tail.sibling = null : d2.sibling = null;
    }
  }
  function S2(a) {
    var b2 = null !== a.alternate && a.alternate.child === a.child, c2 = 0, d2 = 0;
    if (b2) for (var e = a.child; null !== e; ) c2 |= e.lanes | e.childLanes, d2 |= e.subtreeFlags & 14680064, d2 |= e.flags & 14680064, e.return = a, e = e.sibling;
    else for (e = a.child; null !== e; ) c2 |= e.lanes | e.childLanes, d2 |= e.subtreeFlags, d2 |= e.flags, e.return = a, e = e.sibling;
    a.subtreeFlags |= d2;
    a.childLanes = c2;
    return b2;
  }
  function Ej(a, b2, c2) {
    var d2 = b2.pendingProps;
    wg(b2);
    switch (b2.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return S2(b2), null;
      case 1:
        return Zf(b2.type) && $f(), S2(b2), null;
      case 3:
        d2 = b2.stateNode;
        zh();
        E2(Wf);
        E2(H);
        Eh();
        d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
        if (null === a || null === a.child) Gg(b2) ? b2.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Fj(zg), zg = null));
        Aj(a, b2);
        S2(b2);
        return null;
      case 5:
        Bh(b2);
        var e = xh(wh.current);
        c2 = b2.type;
        if (null !== a && null != b2.stateNode) Bj(a, b2, c2, d2, e), a.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
        else {
          if (!d2) {
            if (null === b2.stateNode) throw Error(p2(166));
            S2(b2);
            return null;
          }
          a = xh(uh.current);
          if (Gg(b2)) {
            d2 = b2.stateNode;
            c2 = b2.type;
            var f2 = b2.memoizedProps;
            d2[Of] = b2;
            d2[Pf] = f2;
            a = 0 !== (b2.mode & 1);
            switch (c2) {
              case "dialog":
                D("cancel", d2);
                D("close", d2);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", d2);
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++) D(lf[e], d2);
                break;
              case "source":
                D("error", d2);
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  d2
                );
                D("load", d2);
                break;
              case "details":
                D("toggle", d2);
                break;
              case "input":
                Za(d2, f2);
                D("invalid", d2);
                break;
              case "select":
                d2._wrapperState = { wasMultiple: !!f2.multiple };
                D("invalid", d2);
                break;
              case "textarea":
                hb(d2, f2), D("invalid", d2);
            }
            ub(c2, f2);
            e = null;
            for (var g2 in f2) if (f2.hasOwnProperty(g2)) {
              var h3 = f2[g2];
              "children" === g2 ? "string" === typeof h3 ? d2.textContent !== h3 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h3, a), e = ["children", h3]) : "number" === typeof h3 && d2.textContent !== "" + h3 && (true !== f2.suppressHydrationWarning && Af(
                d2.textContent,
                h3,
                a
              ), e = ["children", "" + h3]) : ea.hasOwnProperty(g2) && null != h3 && "onScroll" === g2 && D("scroll", d2);
            }
            switch (c2) {
              case "input":
                Va(d2);
                db(d2, f2, true);
                break;
              case "textarea":
                Va(d2);
                jb(d2);
                break;
              case "select":
              case "option":
                break;
              default:
                "function" === typeof f2.onClick && (d2.onclick = Bf);
            }
            d2 = e;
            b2.updateQueue = d2;
            null !== d2 && (b2.flags |= 4);
          } else {
            g2 = 9 === e.nodeType ? e : e.ownerDocument;
            "http://www.w3.org/1999/xhtml" === a && (a = kb(c2));
            "http://www.w3.org/1999/xhtml" === a ? "script" === c2 ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d2.is ? a = g2.createElement(c2, { is: d2.is }) : (a = g2.createElement(c2), "select" === c2 && (g2 = a, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a = g2.createElementNS(a, c2);
            a[Of] = b2;
            a[Pf] = d2;
            zj(a, b2, false, false);
            b2.stateNode = a;
            a: {
              g2 = vb(c2, d2);
              switch (c2) {
                case "dialog":
                  D("cancel", a);
                  D("close", a);
                  e = d2;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  D("load", a);
                  e = d2;
                  break;
                case "video":
                case "audio":
                  for (e = 0; e < lf.length; e++) D(lf[e], a);
                  e = d2;
                  break;
                case "source":
                  D("error", a);
                  e = d2;
                  break;
                case "img":
                case "image":
                case "link":
                  D(
                    "error",
                    a
                  );
                  D("load", a);
                  e = d2;
                  break;
                case "details":
                  D("toggle", a);
                  e = d2;
                  break;
                case "input":
                  Za(a, d2);
                  e = Ya(a, d2);
                  D("invalid", a);
                  break;
                case "option":
                  e = d2;
                  break;
                case "select":
                  a._wrapperState = { wasMultiple: !!d2.multiple };
                  e = A({}, d2, { value: void 0 });
                  D("invalid", a);
                  break;
                case "textarea":
                  hb(a, d2);
                  e = gb(a, d2);
                  D("invalid", a);
                  break;
                default:
                  e = d2;
              }
              ub(c2, e);
              h3 = e;
              for (f2 in h3) if (h3.hasOwnProperty(f2)) {
                var k2 = h3[f2];
                "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g2));
              }
              switch (c2) {
                case "input":
                  Va(a);
                  db(a, d2, false);
                  break;
                case "textarea":
                  Va(a);
                  jb(a);
                  break;
                case "option":
                  null != d2.value && a.setAttribute("value", "" + Sa(d2.value));
                  break;
                case "select":
                  a.multiple = !!d2.multiple;
                  f2 = d2.value;
                  null != f2 ? fb(a, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                    a,
                    !!d2.multiple,
                    d2.defaultValue,
                    true
                  );
                  break;
                default:
                  "function" === typeof e.onClick && (a.onclick = Bf);
              }
              switch (c2) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d2 = !!d2.autoFocus;
                  break a;
                case "img":
                  d2 = true;
                  break a;
                default:
                  d2 = false;
              }
            }
            d2 && (b2.flags |= 4);
          }
          null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
        }
        S2(b2);
        return null;
      case 6:
        if (a && null != b2.stateNode) Cj(a, b2, a.memoizedProps, d2);
        else {
          if ("string" !== typeof d2 && null === b2.stateNode) throw Error(p2(166));
          c2 = xh(wh.current);
          xh(uh.current);
          if (Gg(b2)) {
            d2 = b2.stateNode;
            c2 = b2.memoizedProps;
            d2[Of] = b2;
            if (f2 = d2.nodeValue !== c2) {
              if (a = xg, null !== a) switch (a.tag) {
                case 3:
                  Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
                  break;
                case 5:
                  true !== a.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
              }
            }
            f2 && (b2.flags |= 4);
          } else d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
        }
        S2(b2);
        return null;
      case 13:
        E2(L);
        d2 = b2.memoizedState;
        if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
          if (I && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128)) Hg(), Ig(), b2.flags |= 98560, f2 = false;
          else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
            if (null === a) {
              if (!f2) throw Error(p2(318));
              f2 = b2.memoizedState;
              f2 = null !== f2 ? f2.dehydrated : null;
              if (!f2) throw Error(p2(317));
              f2[Of] = b2;
            } else Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
            S2(b2);
            f2 = false;
          } else null !== zg && (Fj(zg), zg = null), f2 = true;
          if (!f2) return b2.flags & 65536 ? b2 : null;
        }
        if (0 !== (b2.flags & 128)) return b2.lanes = c2, b2;
        d2 = null !== d2;
        d2 !== (null !== a && null !== a.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
        null !== b2.updateQueue && (b2.flags |= 4);
        S2(b2);
        return null;
      case 4:
        return zh(), Aj(a, b2), null === a && sf(b2.stateNode.containerInfo), S2(b2), null;
      case 10:
        return ah(b2.type._context), S2(b2), null;
      case 17:
        return Zf(b2.type) && $f(), S2(b2), null;
      case 19:
        E2(L);
        f2 = b2.memoizedState;
        if (null === f2) return S2(b2), null;
        d2 = 0 !== (b2.flags & 128);
        g2 = f2.rendering;
        if (null === g2) if (d2) Dj(f2, false);
        else {
          if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b2.child; null !== a; ) {
            g2 = Ch(a);
            if (null !== g2) {
              b2.flags |= 128;
              Dj(f2, false);
              d2 = g2.updateQueue;
              null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
              b2.subtreeFlags = 0;
              d2 = c2;
              for (c2 = b2.child; null !== c2; ) f2 = c2, a = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c2 = c2.sibling;
              G2(L, L.current & 1 | 2);
              return b2.child;
            }
            a = a.sibling;
          }
          null !== f2.tail && B() > Gj && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
        }
        else {
          if (!d2) if (a = Ch(g2), null !== a) {
            if (b2.flags |= 128, d2 = true, c2 = a.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I) return S2(b2), null;
          } else 2 * B() - f2.renderingStartTime > Gj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
          f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
        }
        if (null !== f2.tail) return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B(), b2.sibling = null, c2 = L.current, G2(L, d2 ? c2 & 1 | 2 : c2 & 1), b2;
        S2(b2);
        return null;
      case 22:
      case 23:
        return Hj(), d2 = null !== b2.memoizedState, null !== a && null !== a.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (fj & 1073741824) && (S2(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S2(b2), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p2(156, b2.tag));
  }
  function Ij(a, b2) {
    wg(b2);
    switch (b2.tag) {
      case 1:
        return Zf(b2.type) && $f(), a = b2.flags, a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
      case 3:
        return zh(), E2(Wf), E2(H), Eh(), a = b2.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b2.flags = a & -65537 | 128, b2) : null;
      case 5:
        return Bh(b2), null;
      case 13:
        E2(L);
        a = b2.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          if (null === b2.alternate) throw Error(p2(340));
          Ig();
        }
        a = b2.flags;
        return a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
      case 19:
        return E2(L), null;
      case 4:
        return zh(), null;
      case 10:
        return ah(b2.type._context), null;
      case 22:
      case 23:
        return Hj(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Jj = false, U = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
  function Lj(a, b2) {
    var c2 = a.ref;
    if (null !== c2) if ("function" === typeof c2) try {
      c2(null);
    } catch (d2) {
      W(a, b2, d2);
    }
    else c2.current = null;
  }
  function Mj(a, b2, c2) {
    try {
      c2();
    } catch (d2) {
      W(a, b2, d2);
    }
  }
  var Nj = false;
  function Oj(a, b2) {
    Cf = dd;
    a = Me();
    if (Ne(a)) {
      if ("selectionStart" in a) var c2 = { start: a.selectionStart, end: a.selectionEnd };
      else a: {
        c2 = (c2 = a.ownerDocument) && c2.defaultView || window;
        var d2 = c2.getSelection && c2.getSelection();
        if (d2 && 0 !== d2.rangeCount) {
          c2 = d2.anchorNode;
          var e = d2.anchorOffset, f2 = d2.focusNode;
          d2 = d2.focusOffset;
          try {
            c2.nodeType, f2.nodeType;
          } catch (F) {
            c2 = null;
            break a;
          }
          var g2 = 0, h3 = -1, k2 = -1, l2 = 0, m2 = 0, q = a, r2 = null;
          b: for (; ; ) {
            for (var y2; ; ) {
              q !== c2 || 0 !== e && 3 !== q.nodeType || (h3 = g2 + e);
              q !== f2 || 0 !== d2 && 3 !== q.nodeType || (k2 = g2 + d2);
              3 === q.nodeType && (g2 += q.nodeValue.length);
              if (null === (y2 = q.firstChild)) break;
              r2 = q;
              q = y2;
            }
            for (; ; ) {
              if (q === a) break b;
              r2 === c2 && ++l2 === e && (h3 = g2);
              r2 === f2 && ++m2 === d2 && (k2 = g2);
              if (null !== (y2 = q.nextSibling)) break;
              q = r2;
              r2 = q.parentNode;
            }
            q = y2;
          }
          c2 = -1 === h3 || -1 === k2 ? null : { start: h3, end: k2 };
        } else c2 = null;
      }
      c2 = c2 || { start: 0, end: 0 };
    } else c2 = null;
    Df = { focusedElem: a, selectionRange: c2 };
    dd = false;
    for (V = b2; null !== V; ) if (b2 = V, a = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a) a.return = b2, V = a;
    else for (; null !== V; ) {
      b2 = V;
      try {
        var n = b2.alternate;
        if (0 !== (b2.flags & 1024)) switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (null !== n) {
              var t2 = n.memoizedProps, J = n.memoizedState, x = b2.stateNode, w2 = x.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Ci(b2.type, t2), J);
              x.__reactInternalSnapshotBeforeUpdate = w2;
            }
            break;
          case 3:
            var u2 = b2.stateNode.containerInfo;
            1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(p2(163));
        }
      } catch (F) {
        W(b2, b2.return, F);
      }
      a = b2.sibling;
      if (null !== a) {
        a.return = b2.return;
        V = a;
        break;
      }
      V = b2.return;
    }
    n = Nj;
    Nj = false;
    return n;
  }
  function Pj(a, b2, c2) {
    var d2 = b2.updateQueue;
    d2 = null !== d2 ? d2.lastEffect : null;
    if (null !== d2) {
      var e = d2 = d2.next;
      do {
        if ((e.tag & a) === a) {
          var f2 = e.destroy;
          e.destroy = void 0;
          void 0 !== f2 && Mj(b2, c2, f2);
        }
        e = e.next;
      } while (e !== d2);
    }
  }
  function Qj(a, b2) {
    b2 = b2.updateQueue;
    b2 = null !== b2 ? b2.lastEffect : null;
    if (null !== b2) {
      var c2 = b2 = b2.next;
      do {
        if ((c2.tag & a) === a) {
          var d2 = c2.create;
          c2.destroy = d2();
        }
        c2 = c2.next;
      } while (c2 !== b2);
    }
  }
  function Rj(a) {
    var b2 = a.ref;
    if (null !== b2) {
      var c2 = a.stateNode;
      switch (a.tag) {
        case 5:
          a = c2;
          break;
        default:
          a = c2;
      }
      "function" === typeof b2 ? b2(a) : b2.current = a;
    }
  }
  function Sj(a) {
    var b2 = a.alternate;
    null !== b2 && (a.alternate = null, Sj(b2));
    a.child = null;
    a.deletions = null;
    a.sibling = null;
    5 === a.tag && (b2 = a.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
    a.stateNode = null;
    a.return = null;
    a.dependencies = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.stateNode = null;
    a.updateQueue = null;
  }
  function Tj(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }
  function Uj(a) {
    a: for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Tj(a.return)) return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2) continue a;
        if (null === a.child || 4 === a.tag) continue a;
        else a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2)) return a.stateNode;
    }
  }
  function Vj(a, b2, c2) {
    var d2 = a.tag;
    if (5 === d2 || 6 === d2) a = a.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a, b2) : c2.insertBefore(a, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a, c2)) : (b2 = c2, b2.appendChild(a)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
    else if (4 !== d2 && (a = a.child, null !== a)) for (Vj(a, b2, c2), a = a.sibling; null !== a; ) Vj(a, b2, c2), a = a.sibling;
  }
  function Wj(a, b2, c2) {
    var d2 = a.tag;
    if (5 === d2 || 6 === d2) a = a.stateNode, b2 ? c2.insertBefore(a, b2) : c2.appendChild(a);
    else if (4 !== d2 && (a = a.child, null !== a)) for (Wj(a, b2, c2), a = a.sibling; null !== a; ) Wj(a, b2, c2), a = a.sibling;
  }
  var X = null, Xj = false;
  function Yj(a, b2, c2) {
    for (c2 = c2.child; null !== c2; ) Zj(a, b2, c2), c2 = c2.sibling;
  }
  function Zj(a, b2, c2) {
    if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
      lc.onCommitFiberUnmount(kc, c2);
    } catch (h3) {
    }
    switch (c2.tag) {
      case 5:
        U || Lj(c2, b2);
      case 6:
        var d2 = X, e = Xj;
        X = null;
        Yj(a, b2, c2);
        X = d2;
        Xj = e;
        null !== X && (Xj ? (a = X, c2 = c2.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c2) : a.removeChild(c2)) : X.removeChild(c2.stateNode));
        break;
      case 18:
        null !== X && (Xj ? (a = X, c2 = c2.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c2) : 1 === a.nodeType && Kf(a, c2), bd(a)) : Kf(X, c2.stateNode));
        break;
      case 4:
        d2 = X;
        e = Xj;
        X = c2.stateNode.containerInfo;
        Xj = true;
        Yj(a, b2, c2);
        X = d2;
        Xj = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!U && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
          e = d2 = d2.next;
          do {
            var f2 = e, g2 = f2.destroy;
            f2 = f2.tag;
            void 0 !== g2 && (0 !== (f2 & 2) ? Mj(c2, b2, g2) : 0 !== (f2 & 4) && Mj(c2, b2, g2));
            e = e.next;
          } while (e !== d2);
        }
        Yj(a, b2, c2);
        break;
      case 1:
        if (!U && (Lj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount)) try {
          d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
        } catch (h3) {
          W(c2, b2, h3);
        }
        Yj(a, b2, c2);
        break;
      case 21:
        Yj(a, b2, c2);
        break;
      case 22:
        c2.mode & 1 ? (U = (d2 = U) || null !== c2.memoizedState, Yj(a, b2, c2), U = d2) : Yj(a, b2, c2);
        break;
      default:
        Yj(a, b2, c2);
    }
  }
  function ak(a) {
    var b2 = a.updateQueue;
    if (null !== b2) {
      a.updateQueue = null;
      var c2 = a.stateNode;
      null === c2 && (c2 = a.stateNode = new Kj());
      b2.forEach(function(b3) {
        var d2 = bk.bind(null, a, b3);
        c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
      });
    }
  }
  function ck(a, b2) {
    var c2 = b2.deletions;
    if (null !== c2) for (var d2 = 0; d2 < c2.length; d2++) {
      var e = c2[d2];
      try {
        var f2 = a, g2 = b2, h3 = g2;
        a: for (; null !== h3; ) {
          switch (h3.tag) {
            case 5:
              X = h3.stateNode;
              Xj = false;
              break a;
            case 3:
              X = h3.stateNode.containerInfo;
              Xj = true;
              break a;
            case 4:
              X = h3.stateNode.containerInfo;
              Xj = true;
              break a;
          }
          h3 = h3.return;
        }
        if (null === X) throw Error(p2(160));
        Zj(f2, g2, e);
        X = null;
        Xj = false;
        var k2 = e.alternate;
        null !== k2 && (k2.return = null);
        e.return = null;
      } catch (l2) {
        W(e, b2, l2);
      }
    }
    if (b2.subtreeFlags & 12854) for (b2 = b2.child; null !== b2; ) dk(b2, a), b2 = b2.sibling;
  }
  function dk(a, b2) {
    var c2 = a.alternate, d2 = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ck(b2, a);
        ek(a);
        if (d2 & 4) {
          try {
            Pj(3, a, a.return), Qj(3, a);
          } catch (t2) {
            W(a, a.return, t2);
          }
          try {
            Pj(5, a, a.return);
          } catch (t2) {
            W(a, a.return, t2);
          }
        }
        break;
      case 1:
        ck(b2, a);
        ek(a);
        d2 & 512 && null !== c2 && Lj(c2, c2.return);
        break;
      case 5:
        ck(b2, a);
        ek(a);
        d2 & 512 && null !== c2 && Lj(c2, c2.return);
        if (a.flags & 32) {
          var e = a.stateNode;
          try {
            ob(e, "");
          } catch (t2) {
            W(a, a.return, t2);
          }
        }
        if (d2 & 4 && (e = a.stateNode, null != e)) {
          var f2 = a.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h3 = a.type, k2 = a.updateQueue;
          a.updateQueue = null;
          if (null !== k2) try {
            "input" === h3 && "radio" === f2.type && null != f2.name && ab(e, f2);
            vb(h3, g2);
            var l2 = vb(h3, f2);
            for (g2 = 0; g2 < k2.length; g2 += 2) {
              var m2 = k2[g2], q = k2[g2 + 1];
              "style" === m2 ? sb(e, q) : "dangerouslySetInnerHTML" === m2 ? nb(e, q) : "children" === m2 ? ob(e, q) : ta(e, m2, q, l2);
            }
            switch (h3) {
              case "input":
                bb(e, f2);
                break;
              case "textarea":
                ib(e, f2);
                break;
              case "select":
                var r2 = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e[Pf] = f2;
          } catch (t2) {
            W(a, a.return, t2);
          }
        }
        break;
      case 6:
        ck(b2, a);
        ek(a);
        if (d2 & 4) {
          if (null === a.stateNode) throw Error(p2(162));
          e = a.stateNode;
          f2 = a.memoizedProps;
          try {
            e.nodeValue = f2;
          } catch (t2) {
            W(a, a.return, t2);
          }
        }
        break;
      case 3:
        ck(b2, a);
        ek(a);
        if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated) try {
          bd(b2.containerInfo);
        } catch (t2) {
          W(a, a.return, t2);
        }
        break;
      case 4:
        ck(b2, a);
        ek(a);
        break;
      case 13:
        ck(b2, a);
        ek(a);
        e = a.child;
        e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
        d2 & 4 && ak(a);
        break;
      case 22:
        m2 = null !== c2 && null !== c2.memoizedState;
        a.mode & 1 ? (U = (l2 = U) || m2, ck(b2, a), U = l2) : ck(b2, a);
        ek(a);
        if (d2 & 8192) {
          l2 = null !== a.memoizedState;
          if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1)) for (V = a, m2 = a.child; null !== m2; ) {
            for (q = V = m2; null !== V; ) {
              r2 = V;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pj(4, r2, r2.return);
                  break;
                case 1:
                  Lj(r2, r2.return);
                  var n = r2.stateNode;
                  if ("function" === typeof n.componentWillUnmount) {
                    d2 = r2;
                    c2 = r2.return;
                    try {
                      b2 = d2, n.props = b2.memoizedProps, n.state = b2.memoizedState, n.componentWillUnmount();
                    } catch (t2) {
                      W(d2, c2, t2);
                    }
                  }
                  break;
                case 5:
                  Lj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    gk(q);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V = y2) : gk(q);
            }
            m2 = m2.sibling;
          }
          a: for (m2 = null, q = a; ; ) {
            if (5 === q.tag) {
              if (null === m2) {
                m2 = q;
                try {
                  e = q.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h3 = q.stateNode, k2 = q.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h3.style.display = rb("display", g2));
                } catch (t2) {
                  W(a, a.return, t2);
                }
              }
            } else if (6 === q.tag) {
              if (null === m2) try {
                q.stateNode.nodeValue = l2 ? "" : q.memoizedProps;
              } catch (t2) {
                W(a, a.return, t2);
              }
            } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
              q.child.return = q;
              q = q.child;
              continue;
            }
            if (q === a) break a;
            for (; null === q.sibling; ) {
              if (null === q.return || q.return === a) break a;
              m2 === q && (m2 = null);
              q = q.return;
            }
            m2 === q && (m2 = null);
            q.sibling.return = q.return;
            q = q.sibling;
          }
        }
        break;
      case 19:
        ck(b2, a);
        ek(a);
        d2 & 4 && ak(a);
        break;
      case 21:
        break;
      default:
        ck(
          b2,
          a
        ), ek(a);
    }
  }
  function ek(a) {
    var b2 = a.flags;
    if (b2 & 2) {
      try {
        a: {
          for (var c2 = a.return; null !== c2; ) {
            if (Tj(c2)) {
              var d2 = c2;
              break a;
            }
            c2 = c2.return;
          }
          throw Error(p2(160));
        }
        switch (d2.tag) {
          case 5:
            var e = d2.stateNode;
            d2.flags & 32 && (ob(e, ""), d2.flags &= -33);
            var f2 = Uj(a);
            Wj(a, f2, e);
            break;
          case 3:
          case 4:
            var g2 = d2.stateNode.containerInfo, h3 = Uj(a);
            Vj(a, h3, g2);
            break;
          default:
            throw Error(p2(161));
        }
      } catch (k2) {
        W(a, a.return, k2);
      }
      a.flags &= -3;
    }
    b2 & 4096 && (a.flags &= -4097);
  }
  function hk(a, b2, c2) {
    V = a;
    ik(a);
  }
  function ik(a, b2, c2) {
    for (var d2 = 0 !== (a.mode & 1); null !== V; ) {
      var e = V, f2 = e.child;
      if (22 === e.tag && d2) {
        var g2 = null !== e.memoizedState || Jj;
        if (!g2) {
          var h3 = e.alternate, k2 = null !== h3 && null !== h3.memoizedState || U;
          h3 = Jj;
          var l2 = U;
          Jj = g2;
          if ((U = k2) && !l2) for (V = e; null !== V; ) g2 = V, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? jk(e) : null !== k2 ? (k2.return = g2, V = k2) : jk(e);
          for (; null !== f2; ) V = f2, ik(f2), f2 = f2.sibling;
          V = e;
          Jj = h3;
          U = l2;
        }
        kk(a);
      } else 0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V = f2) : kk(a);
    }
  }
  function kk(a) {
    for (; null !== V; ) {
      var b2 = V;
      if (0 !== (b2.flags & 8772)) {
        var c2 = b2.alternate;
        try {
          if (0 !== (b2.flags & 8772)) switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              U || Qj(5, b2);
              break;
            case 1:
              var d2 = b2.stateNode;
              if (b2.flags & 4 && !U) if (null === c2) d2.componentDidMount();
              else {
                var e = b2.elementType === b2.type ? c2.memoizedProps : Ci(b2.type, c2.memoizedProps);
                d2.componentDidUpdate(e, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
              }
              var f2 = b2.updateQueue;
              null !== f2 && sh(b2, f2, d2);
              break;
            case 3:
              var g2 = b2.updateQueue;
              if (null !== g2) {
                c2 = null;
                if (null !== b2.child) switch (b2.child.tag) {
                  case 5:
                    c2 = b2.child.stateNode;
                    break;
                  case 1:
                    c2 = b2.child.stateNode;
                }
                sh(b2, g2, c2);
              }
              break;
            case 5:
              var h3 = b2.stateNode;
              if (null === c2 && b2.flags & 4) {
                c2 = h3;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c2.focus();
                    break;
                  case "img":
                    k2.src && (c2.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b2.memoizedState) {
                var l2 = b2.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q = m2.dehydrated;
                    null !== q && bd(q);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p2(163));
          }
          U || b2.flags & 512 && Rj(b2);
        } catch (r2) {
          W(b2, b2.return, r2);
        }
      }
      if (b2 === a) {
        V = null;
        break;
      }
      c2 = b2.sibling;
      if (null !== c2) {
        c2.return = b2.return;
        V = c2;
        break;
      }
      V = b2.return;
    }
  }
  function gk(a) {
    for (; null !== V; ) {
      var b2 = V;
      if (b2 === a) {
        V = null;
        break;
      }
      var c2 = b2.sibling;
      if (null !== c2) {
        c2.return = b2.return;
        V = c2;
        break;
      }
      V = b2.return;
    }
  }
  function jk(a) {
    for (; null !== V; ) {
      var b2 = V;
      try {
        switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            var c2 = b2.return;
            try {
              Qj(4, b2);
            } catch (k2) {
              W(b2, c2, k2);
            }
            break;
          case 1:
            var d2 = b2.stateNode;
            if ("function" === typeof d2.componentDidMount) {
              var e = b2.return;
              try {
                d2.componentDidMount();
              } catch (k2) {
                W(b2, e, k2);
              }
            }
            var f2 = b2.return;
            try {
              Rj(b2);
            } catch (k2) {
              W(b2, f2, k2);
            }
            break;
          case 5:
            var g2 = b2.return;
            try {
              Rj(b2);
            } catch (k2) {
              W(b2, g2, k2);
            }
        }
      } catch (k2) {
        W(b2, b2.return, k2);
      }
      if (b2 === a) {
        V = null;
        break;
      }
      var h3 = b2.sibling;
      if (null !== h3) {
        h3.return = b2.return;
        V = h3;
        break;
      }
      V = b2.return;
    }
  }
  var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
  function R() {
    return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
  }
  function yi(a) {
    if (0 === (a.mode & 1)) return 1;
    if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
    if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
    a = C2;
    if (0 !== a) return a;
    a = window.event;
    a = void 0 === a ? 16 : jd(a.type);
    return a;
  }
  function gi(a, b2, c2, d2) {
    if (50 < yk) throw yk = 0, zk = null, Error(p2(185));
    Ac(a, c2, d2);
    if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c2), 4 === T && Ck(a, Z)), Dk(a, d2), 1 === c2 && 0 === K && 0 === (b2.mode & 1) && (Gj = B() + 500, fg && jg());
  }
  function Dk(a, b2) {
    var c2 = a.callbackNode;
    wc(a, b2);
    var d2 = uc(a, a === Q ? Z : 0);
    if (0 === d2) null !== c2 && bc(c2), a.callbackNode = null, a.callbackPriority = 0;
    else if (b2 = d2 & -d2, a.callbackPriority !== b2) {
      null != c2 && bc(c2);
      if (1 === b2) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
        0 === (K & 6) && jg();
      }), c2 = null;
      else {
        switch (Dc(d2)) {
          case 1:
            c2 = fc;
            break;
          case 4:
            c2 = gc;
            break;
          case 16:
            c2 = hc;
            break;
          case 536870912:
            c2 = jc;
            break;
          default:
            c2 = hc;
        }
        c2 = Fk(c2, Gk.bind(null, a));
      }
      a.callbackPriority = b2;
      a.callbackNode = c2;
    }
  }
  function Gk(a, b2) {
    Ak = -1;
    Bk = 0;
    if (0 !== (K & 6)) throw Error(p2(327));
    var c2 = a.callbackNode;
    if (Hk() && a.callbackNode !== c2) return null;
    var d2 = uc(a, a === Q ? Z : 0);
    if (0 === d2) return null;
    if (0 !== (d2 & 30) || 0 !== (d2 & a.expiredLanes) || b2) b2 = Ik(a, d2);
    else {
      b2 = d2;
      var e = K;
      K |= 2;
      var f2 = Jk();
      if (Q !== a || Z !== b2) uk = null, Gj = B() + 500, Kk(a, b2);
      do
        try {
          Lk();
          break;
        } catch (h3) {
          Mk(a, h3);
        }
      while (1);
      $g();
      mk.current = f2;
      K = e;
      null !== Y ? b2 = 0 : (Q = null, Z = 0, b2 = T);
    }
    if (0 !== b2) {
      2 === b2 && (e = xc(a), 0 !== e && (d2 = e, b2 = Nk(a, e)));
      if (1 === b2) throw c2 = pk, Kk(a, 0), Ck(a, d2), Dk(a, B()), c2;
      if (6 === b2) Ck(a, d2);
      else {
        e = a.current.alternate;
        if (0 === (d2 & 30) && !Ok(e) && (b2 = Ik(a, d2), 2 === b2 && (f2 = xc(a), 0 !== f2 && (d2 = f2, b2 = Nk(a, f2))), 1 === b2)) throw c2 = pk, Kk(a, 0), Ck(a, d2), Dk(a, B()), c2;
        a.finishedWork = e;
        a.finishedLanes = d2;
        switch (b2) {
          case 0:
          case 1:
            throw Error(p2(345));
          case 2:
            Pk(a, tk, uk);
            break;
          case 3:
            Ck(a, d2);
            if ((d2 & 130023424) === d2 && (b2 = fk + 500 - B(), 10 < b2)) {
              if (0 !== uc(a, 0)) break;
              e = a.suspendedLanes;
              if ((e & d2) !== d2) {
                R();
                a.pingedLanes |= a.suspendedLanes & e;
                break;
              }
              a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b2);
              break;
            }
            Pk(a, tk, uk);
            break;
          case 4:
            Ck(a, d2);
            if ((d2 & 4194240) === d2) break;
            b2 = a.eventTimes;
            for (e = -1; 0 < d2; ) {
              var g2 = 31 - oc(d2);
              f2 = 1 << g2;
              g2 = b2[g2];
              g2 > e && (e = g2);
              d2 &= ~f2;
            }
            d2 = e;
            d2 = B() - d2;
            d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * lk(d2 / 1960)) - d2;
            if (10 < d2) {
              a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d2);
              break;
            }
            Pk(a, tk, uk);
            break;
          case 5:
            Pk(a, tk, uk);
            break;
          default:
            throw Error(p2(329));
        }
      }
    }
    Dk(a, B());
    return a.callbackNode === c2 ? Gk.bind(null, a) : null;
  }
  function Nk(a, b2) {
    var c2 = sk;
    a.current.memoizedState.isDehydrated && (Kk(a, b2).flags |= 256);
    a = Ik(a, b2);
    2 !== a && (b2 = tk, tk = c2, null !== b2 && Fj(b2));
    return a;
  }
  function Fj(a) {
    null === tk ? tk = a : tk.push.apply(tk, a);
  }
  function Ok(a) {
    for (var b2 = a; ; ) {
      if (b2.flags & 16384) {
        var c2 = b2.updateQueue;
        if (null !== c2 && (c2 = c2.stores, null !== c2)) for (var d2 = 0; d2 < c2.length; d2++) {
          var e = c2[d2], f2 = e.getSnapshot;
          e = e.value;
          try {
            if (!He(f2(), e)) return false;
          } catch (g2) {
            return false;
          }
        }
      }
      c2 = b2.child;
      if (b2.subtreeFlags & 16384 && null !== c2) c2.return = b2, b2 = c2;
      else {
        if (b2 === a) break;
        for (; null === b2.sibling; ) {
          if (null === b2.return || b2.return === a) return true;
          b2 = b2.return;
        }
        b2.sibling.return = b2.return;
        b2 = b2.sibling;
      }
    }
    return true;
  }
  function Ck(a, b2) {
    b2 &= ~rk;
    b2 &= ~qk;
    a.suspendedLanes |= b2;
    a.pingedLanes &= ~b2;
    for (a = a.expirationTimes; 0 < b2; ) {
      var c2 = 31 - oc(b2), d2 = 1 << c2;
      a[c2] = -1;
      b2 &= ~d2;
    }
  }
  function Ek(a) {
    if (0 !== (K & 6)) throw Error(p2(327));
    Hk();
    var b2 = uc(a, 0);
    if (0 === (b2 & 1)) return Dk(a, B()), null;
    var c2 = Ik(a, b2);
    if (0 !== a.tag && 2 === c2) {
      var d2 = xc(a);
      0 !== d2 && (b2 = d2, c2 = Nk(a, d2));
    }
    if (1 === c2) throw c2 = pk, Kk(a, 0), Ck(a, b2), Dk(a, B()), c2;
    if (6 === c2) throw Error(p2(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b2;
    Pk(a, tk, uk);
    Dk(a, B());
    return null;
  }
  function Qk(a, b2) {
    var c2 = K;
    K |= 1;
    try {
      return a(b2);
    } finally {
      K = c2, 0 === K && (Gj = B() + 500, fg && jg());
    }
  }
  function Rk(a) {
    null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
    var b2 = K;
    K |= 1;
    var c2 = ok.transition, d2 = C2;
    try {
      if (ok.transition = null, C2 = 1, a) return a();
    } finally {
      C2 = d2, ok.transition = c2, K = b2, 0 === (K & 6) && jg();
    }
  }
  function Hj() {
    fj = ej.current;
    E2(ej);
  }
  function Kk(a, b2) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c2 = a.timeoutHandle;
    -1 !== c2 && (a.timeoutHandle = -1, Gf(c2));
    if (null !== Y) for (c2 = Y.return; null !== c2; ) {
      var d2 = c2;
      wg(d2);
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          null !== d2 && void 0 !== d2 && $f();
          break;
        case 3:
          zh();
          E2(Wf);
          E2(H);
          Eh();
          break;
        case 5:
          Bh(d2);
          break;
        case 4:
          zh();
          break;
        case 13:
          E2(L);
          break;
        case 19:
          E2(L);
          break;
        case 10:
          ah(d2.type._context);
          break;
        case 22:
        case 23:
          Hj();
      }
      c2 = c2.return;
    }
    Q = a;
    Y = a = Pg(a.current, null);
    Z = fj = b2;
    T = 0;
    pk = null;
    rk = qk = rh = 0;
    tk = sk = null;
    if (null !== fh) {
      for (b2 = 0; b2 < fh.length; b2++) if (c2 = fh[b2], d2 = c2.interleaved, null !== d2) {
        c2.interleaved = null;
        var e = d2.next, f2 = c2.pending;
        if (null !== f2) {
          var g2 = f2.next;
          f2.next = e;
          d2.next = g2;
        }
        c2.pending = d2;
      }
      fh = null;
    }
    return a;
  }
  function Mk(a, b2) {
    do {
      var c2 = Y;
      try {
        $g();
        Fh.current = Rh;
        if (Ih) {
          for (var d2 = M.memoizedState; null !== d2; ) {
            var e = d2.queue;
            null !== e && (e.pending = null);
            d2 = d2.next;
          }
          Ih = false;
        }
        Hh = 0;
        O = N = M = null;
        Jh = false;
        Kh = 0;
        nk.current = null;
        if (null === c2 || null === c2.return) {
          T = 1;
          pk = b2;
          Y = null;
          break;
        }
        a: {
          var f2 = a, g2 = c2.return, h3 = c2, k2 = b2;
          b2 = Z;
          h3.flags |= 32768;
          if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
            var l2 = k2, m2 = h3, q = m2.tag;
            if (0 === (m2.mode & 1) && (0 === q || 11 === q || 15 === q)) {
              var r2 = m2.alternate;
              r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
            }
            var y2 = Ui(g2);
            if (null !== y2) {
              y2.flags &= -257;
              Vi(y2, g2, h3, f2, b2);
              y2.mode & 1 && Si(f2, l2, b2);
              b2 = y2;
              k2 = l2;
              var n = b2.updateQueue;
              if (null === n) {
                var t2 = /* @__PURE__ */ new Set();
                t2.add(k2);
                b2.updateQueue = t2;
              } else n.add(k2);
              break a;
            } else {
              if (0 === (b2 & 1)) {
                Si(f2, l2, b2);
                tj();
                break a;
              }
              k2 = Error(p2(426));
            }
          } else if (I && h3.mode & 1) {
            var J = Ui(g2);
            if (null !== J) {
              0 === (J.flags & 65536) && (J.flags |= 256);
              Vi(J, g2, h3, f2, b2);
              Jg(Ji(k2, h3));
              break a;
            }
          }
          f2 = k2 = Ji(k2, h3);
          4 !== T && (T = 2);
          null === sk ? sk = [f2] : sk.push(f2);
          f2 = g2;
          do {
            switch (f2.tag) {
              case 3:
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var x = Ni(f2, k2, b2);
                ph(f2, x);
                break a;
              case 1:
                h3 = k2;
                var w2 = f2.type, u2 = f2.stateNode;
                if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                  f2.flags |= 65536;
                  b2 &= -b2;
                  f2.lanes |= b2;
                  var F = Qi(f2, h3, b2);
                  ph(f2, F);
                  break a;
                }
            }
            f2 = f2.return;
          } while (null !== f2);
        }
        Sk(c2);
      } catch (na) {
        b2 = na;
        Y === c2 && null !== c2 && (Y = c2 = c2.return);
        continue;
      }
      break;
    } while (1);
  }
  function Jk() {
    var a = mk.current;
    mk.current = Rh;
    return null === a ? Rh : a;
  }
  function tj() {
    if (0 === T || 3 === T || 2 === T) T = 4;
    null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
  }
  function Ik(a, b2) {
    var c2 = K;
    K |= 2;
    var d2 = Jk();
    if (Q !== a || Z !== b2) uk = null, Kk(a, b2);
    do
      try {
        Tk();
        break;
      } catch (e) {
        Mk(a, e);
      }
    while (1);
    $g();
    K = c2;
    mk.current = d2;
    if (null !== Y) throw Error(p2(261));
    Q = null;
    Z = 0;
    return T;
  }
  function Tk() {
    for (; null !== Y; ) Uk(Y);
  }
  function Lk() {
    for (; null !== Y && !cc(); ) Uk(Y);
  }
  function Uk(a) {
    var b2 = Vk(a.alternate, a, fj);
    a.memoizedProps = a.pendingProps;
    null === b2 ? Sk(a) : Y = b2;
    nk.current = null;
  }
  function Sk(a) {
    var b2 = a;
    do {
      var c2 = b2.alternate;
      a = b2.return;
      if (0 === (b2.flags & 32768)) {
        if (c2 = Ej(c2, b2, fj), null !== c2) {
          Y = c2;
          return;
        }
      } else {
        c2 = Ij(c2, b2);
        if (null !== c2) {
          c2.flags &= 32767;
          Y = c2;
          return;
        }
        if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
        else {
          T = 6;
          Y = null;
          return;
        }
      }
      b2 = b2.sibling;
      if (null !== b2) {
        Y = b2;
        return;
      }
      Y = b2 = a;
    } while (null !== b2);
    0 === T && (T = 5);
  }
  function Pk(a, b2, c2) {
    var d2 = C2, e = ok.transition;
    try {
      ok.transition = null, C2 = 1, Wk(a, b2, c2, d2);
    } finally {
      ok.transition = e, C2 = d2;
    }
    return null;
  }
  function Wk(a, b2, c2, d2) {
    do
      Hk();
    while (null !== wk);
    if (0 !== (K & 6)) throw Error(p2(327));
    c2 = a.finishedWork;
    var e = a.finishedLanes;
    if (null === c2) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c2 === a.current) throw Error(p2(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f2 = c2.lanes | c2.childLanes;
    Bc(a, f2);
    a === Q && (Y = Q = null, Z = 0);
    0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || vk || (vk = true, Fk(hc, function() {
      Hk();
      return null;
    }));
    f2 = 0 !== (c2.flags & 15990);
    if (0 !== (c2.subtreeFlags & 15990) || f2) {
      f2 = ok.transition;
      ok.transition = null;
      var g2 = C2;
      C2 = 1;
      var h3 = K;
      K |= 4;
      nk.current = null;
      Oj(a, c2);
      dk(c2, a);
      Oe(Df);
      dd = !!Cf;
      Df = Cf = null;
      a.current = c2;
      hk(c2);
      dc();
      K = h3;
      C2 = g2;
      ok.transition = f2;
    } else a.current = c2;
    vk && (vk = false, wk = a, xk = e);
    f2 = a.pendingLanes;
    0 === f2 && (Ri = null);
    mc(c2.stateNode);
    Dk(a, B());
    if (null !== b2) for (d2 = a.onRecoverableError, c2 = 0; c2 < b2.length; c2++) e = b2[c2], d2(e.value, { componentStack: e.stack, digest: e.digest });
    if (Oi) throw Oi = false, a = Pi, Pi = null, a;
    0 !== (xk & 1) && 0 !== a.tag && Hk();
    f2 = a.pendingLanes;
    0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
    jg();
    return null;
  }
  function Hk() {
    if (null !== wk) {
      var a = Dc(xk), b2 = ok.transition, c2 = C2;
      try {
        ok.transition = null;
        C2 = 16 > a ? 16 : a;
        if (null === wk) var d2 = false;
        else {
          a = wk;
          wk = null;
          xk = 0;
          if (0 !== (K & 6)) throw Error(p2(331));
          var e = K;
          K |= 4;
          for (V = a.current; null !== V; ) {
            var f2 = V, g2 = f2.child;
            if (0 !== (V.flags & 16)) {
              var h3 = f2.deletions;
              if (null !== h3) {
                for (var k2 = 0; k2 < h3.length; k2++) {
                  var l2 = h3[k2];
                  for (V = l2; null !== V; ) {
                    var m2 = V;
                    switch (m2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pj(8, m2, f2);
                    }
                    var q = m2.child;
                    if (null !== q) q.return = m2, V = q;
                    else for (; null !== V; ) {
                      m2 = V;
                      var r2 = m2.sibling, y2 = m2.return;
                      Sj(m2);
                      if (m2 === l2) {
                        V = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V = r2;
                        break;
                      }
                      V = y2;
                    }
                  }
                }
                var n = f2.alternate;
                if (null !== n) {
                  var t2 = n.child;
                  if (null !== t2) {
                    n.child = null;
                    do {
                      var J = t2.sibling;
                      t2.sibling = null;
                      t2 = J;
                    } while (null !== t2);
                  }
                }
                V = f2;
              }
            }
            if (0 !== (f2.subtreeFlags & 2064) && null !== g2) g2.return = f2, V = g2;
            else b: for (; null !== V; ) {
              f2 = V;
              if (0 !== (f2.flags & 2048)) switch (f2.tag) {
                case 0:
                case 11:
                case 15:
                  Pj(9, f2, f2.return);
              }
              var x = f2.sibling;
              if (null !== x) {
                x.return = f2.return;
                V = x;
                break b;
              }
              V = f2.return;
            }
          }
          var w2 = a.current;
          for (V = w2; null !== V; ) {
            g2 = V;
            var u2 = g2.child;
            if (0 !== (g2.subtreeFlags & 2064) && null !== u2) u2.return = g2, V = u2;
            else b: for (g2 = w2; null !== V; ) {
              h3 = V;
              if (0 !== (h3.flags & 2048)) try {
                switch (h3.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qj(9, h3);
                }
              } catch (na) {
                W(h3, h3.return, na);
              }
              if (h3 === g2) {
                V = null;
                break b;
              }
              var F = h3.sibling;
              if (null !== F) {
                F.return = h3.return;
                V = F;
                break b;
              }
              V = h3.return;
            }
          }
          K = e;
          jg();
          if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
            lc.onPostCommitFiberRoot(kc, a);
          } catch (na) {
          }
          d2 = true;
        }
        return d2;
      } finally {
        C2 = c2, ok.transition = b2;
      }
    }
    return false;
  }
  function Xk(a, b2, c2) {
    b2 = Ji(c2, b2);
    b2 = Ni(a, b2, 1);
    a = nh(a, b2, 1);
    b2 = R();
    null !== a && (Ac(a, 1, b2), Dk(a, b2));
  }
  function W(a, b2, c2) {
    if (3 === a.tag) Xk(a, a, c2);
    else for (; null !== b2; ) {
      if (3 === b2.tag) {
        Xk(b2, a, c2);
        break;
      } else if (1 === b2.tag) {
        var d2 = b2.stateNode;
        if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Ri || !Ri.has(d2))) {
          a = Ji(c2, a);
          a = Qi(b2, a, 1);
          b2 = nh(b2, a, 1);
          a = R();
          null !== b2 && (Ac(b2, 1, a), Dk(b2, a));
          break;
        }
      }
      b2 = b2.return;
    }
  }
  function Ti(a, b2, c2) {
    var d2 = a.pingCache;
    null !== d2 && d2.delete(b2);
    b2 = R();
    a.pingedLanes |= a.suspendedLanes & c2;
    Q === a && (Z & c2) === c2 && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c2);
    Dk(a, b2);
  }
  function Yk(a, b2) {
    0 === b2 && (0 === (a.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
    var c2 = R();
    a = ih(a, b2);
    null !== a && (Ac(a, b2, c2), Dk(a, c2));
  }
  function uj(a) {
    var b2 = a.memoizedState, c2 = 0;
    null !== b2 && (c2 = b2.retryLane);
    Yk(a, c2);
  }
  function bk(a, b2) {
    var c2 = 0;
    switch (a.tag) {
      case 13:
        var d2 = a.stateNode;
        var e = a.memoizedState;
        null !== e && (c2 = e.retryLane);
        break;
      case 19:
        d2 = a.stateNode;
        break;
      default:
        throw Error(p2(314));
    }
    null !== d2 && d2.delete(b2);
    Yk(a, c2);
  }
  var Vk;
  Vk = function(a, b2, c2) {
    if (null !== a) if (a.memoizedProps !== b2.pendingProps || Wf.current) dh = true;
    else {
      if (0 === (a.lanes & c2) && 0 === (b2.flags & 128)) return dh = false, yj(a, b2, c2);
      dh = 0 !== (a.flags & 131072) ? true : false;
    }
    else dh = false, I && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
    b2.lanes = 0;
    switch (b2.tag) {
      case 2:
        var d2 = b2.type;
        ij(a, b2);
        a = b2.pendingProps;
        var e = Yf(b2, H.current);
        ch(b2, c2);
        e = Nh(null, b2, d2, a, e, c2);
        var f2 = Sh();
        b2.flags |= 1;
        "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b2), e.updater = Ei, b2.stateNode = e, e._reactInternals = b2, Ii(b2, d2, a, c2), b2 = jj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I && f2 && vg(b2), Xi(null, b2, e, c2), b2 = b2.child);
        return b2;
      case 16:
        d2 = b2.elementType;
        a: {
          ij(a, b2);
          a = b2.pendingProps;
          e = d2._init;
          d2 = e(d2._payload);
          b2.type = d2;
          e = b2.tag = Zk(d2);
          a = Ci(d2, a);
          switch (e) {
            case 0:
              b2 = cj(null, b2, d2, a, c2);
              break a;
            case 1:
              b2 = hj(null, b2, d2, a, c2);
              break a;
            case 11:
              b2 = Yi(null, b2, d2, a, c2);
              break a;
            case 14:
              b2 = $i(null, b2, d2, Ci(d2.type, a), c2);
              break a;
          }
          throw Error(p2(
            306,
            d2,
            ""
          ));
        }
        return b2;
      case 0:
        return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : Ci(d2, e), cj(a, b2, d2, e, c2);
      case 1:
        return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : Ci(d2, e), hj(a, b2, d2, e, c2);
      case 3:
        a: {
          kj(b2);
          if (null === a) throw Error(p2(387));
          d2 = b2.pendingProps;
          f2 = b2.memoizedState;
          e = f2.element;
          lh(a, b2);
          qh(b2, d2, null, c2);
          var g2 = b2.memoizedState;
          d2 = g2.element;
          if (f2.isDehydrated) if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e = Ji(Error(p2(423)), b2);
            b2 = lj(a, b2, d2, c2, e);
            break a;
          } else if (d2 !== e) {
            e = Ji(Error(p2(424)), b2);
            b2 = lj(a, b2, d2, c2, e);
            break a;
          } else for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I = true, zg = null, c2 = Vg(b2, null, d2, c2), b2.child = c2; c2; ) c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
          else {
            Ig();
            if (d2 === e) {
              b2 = Zi(a, b2, c2);
              break a;
            }
            Xi(a, b2, d2, c2);
          }
          b2 = b2.child;
        }
        return b2;
      case 5:
        return Ah(b2), null === a && Eg(b2), d2 = b2.type, e = b2.pendingProps, f2 = null !== a ? a.memoizedProps : null, g2 = e.children, Ef(d2, e) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), gj(a, b2), Xi(a, b2, g2, c2), b2.child;
      case 6:
        return null === a && Eg(b2), null;
      case 13:
        return oj(a, b2, c2);
      case 4:
        return yh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a ? b2.child = Ug(b2, null, d2, c2) : Xi(a, b2, d2, c2), b2.child;
      case 11:
        return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : Ci(d2, e), Yi(a, b2, d2, e, c2);
      case 7:
        return Xi(a, b2, b2.pendingProps, c2), b2.child;
      case 8:
        return Xi(a, b2, b2.pendingProps.children, c2), b2.child;
      case 12:
        return Xi(a, b2, b2.pendingProps.children, c2), b2.child;
      case 10:
        a: {
          d2 = b2.type._context;
          e = b2.pendingProps;
          f2 = b2.memoizedProps;
          g2 = e.value;
          G2(Wg, d2._currentValue);
          d2._currentValue = g2;
          if (null !== f2) if (He(f2.value, g2)) {
            if (f2.children === e.children && !Wf.current) {
              b2 = Zi(a, b2, c2);
              break a;
            }
          } else for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
            var h3 = f2.dependencies;
            if (null !== h3) {
              g2 = f2.child;
              for (var k2 = h3.firstContext; null !== k2; ) {
                if (k2.context === d2) {
                  if (1 === f2.tag) {
                    k2 = mh(-1, c2 & -c2);
                    k2.tag = 2;
                    var l2 = f2.updateQueue;
                    if (null !== l2) {
                      l2 = l2.shared;
                      var m2 = l2.pending;
                      null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                      l2.pending = k2;
                    }
                  }
                  f2.lanes |= c2;
                  k2 = f2.alternate;
                  null !== k2 && (k2.lanes |= c2);
                  bh(
                    f2.return,
                    c2,
                    b2
                  );
                  h3.lanes |= c2;
                  break;
                }
                k2 = k2.next;
              }
            } else if (10 === f2.tag) g2 = f2.type === b2.type ? null : f2.child;
            else if (18 === f2.tag) {
              g2 = f2.return;
              if (null === g2) throw Error(p2(341));
              g2.lanes |= c2;
              h3 = g2.alternate;
              null !== h3 && (h3.lanes |= c2);
              bh(g2, c2, b2);
              g2 = f2.sibling;
            } else g2 = f2.child;
            if (null !== g2) g2.return = f2;
            else for (g2 = f2; null !== g2; ) {
              if (g2 === b2) {
                g2 = null;
                break;
              }
              f2 = g2.sibling;
              if (null !== f2) {
                f2.return = g2.return;
                g2 = f2;
                break;
              }
              g2 = g2.return;
            }
            f2 = g2;
          }
          Xi(a, b2, e.children, c2);
          b2 = b2.child;
        }
        return b2;
      case 9:
        return e = b2.type, d2 = b2.pendingProps.children, ch(b2, c2), e = eh(e), d2 = d2(e), b2.flags |= 1, Xi(a, b2, d2, c2), b2.child;
      case 14:
        return d2 = b2.type, e = Ci(d2, b2.pendingProps), e = Ci(d2.type, e), $i(a, b2, d2, e, c2);
      case 15:
        return bj(a, b2, b2.type, b2.pendingProps, c2);
      case 17:
        return d2 = b2.type, e = b2.pendingProps, e = b2.elementType === d2 ? e : Ci(d2, e), ij(a, b2), b2.tag = 1, Zf(d2) ? (a = true, cg(b2)) : a = false, ch(b2, c2), Gi(b2, d2, e), Ii(b2, d2, e, c2), jj(null, b2, d2, true, a, c2);
      case 19:
        return xj(a, b2, c2);
      case 22:
        return dj(a, b2, c2);
    }
    throw Error(p2(156, b2.tag));
  };
  function Fk(a, b2) {
    return ac(a, b2);
  }
  function $k(a, b2, c2, d2) {
    this.tag = a;
    this.key = c2;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b2;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d2;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Bg(a, b2, c2, d2) {
    return new $k(a, b2, c2, d2);
  }
  function aj(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }
  function Zk(a) {
    if ("function" === typeof a) return aj(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === Da) return 11;
      if (a === Ga) return 14;
    }
    return 2;
  }
  function Pg(a, b2) {
    var c2 = a.alternate;
    null === c2 ? (c2 = Bg(a.tag, b2, a.key, a.mode), c2.elementType = a.elementType, c2.type = a.type, c2.stateNode = a.stateNode, c2.alternate = a, a.alternate = c2) : (c2.pendingProps = b2, c2.type = a.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
    c2.flags = a.flags & 14680064;
    c2.childLanes = a.childLanes;
    c2.lanes = a.lanes;
    c2.child = a.child;
    c2.memoizedProps = a.memoizedProps;
    c2.memoizedState = a.memoizedState;
    c2.updateQueue = a.updateQueue;
    b2 = a.dependencies;
    c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
    c2.sibling = a.sibling;
    c2.index = a.index;
    c2.ref = a.ref;
    return c2;
  }
  function Rg(a, b2, c2, d2, e, f2) {
    var g2 = 2;
    d2 = a;
    if ("function" === typeof a) aj(a) && (g2 = 1);
    else if ("string" === typeof a) g2 = 5;
    else a: switch (a) {
      case ya:
        return Tg(c2.children, e, f2, b2);
      case za:
        g2 = 8;
        e |= 8;
        break;
      case Aa:
        return a = Bg(12, c2, b2, e | 2), a.elementType = Aa, a.lanes = f2, a;
      case Ea:
        return a = Bg(13, c2, b2, e), a.elementType = Ea, a.lanes = f2, a;
      case Fa:
        return a = Bg(19, c2, b2, e), a.elementType = Fa, a.lanes = f2, a;
      case Ia:
        return pj(c2, e, f2, b2);
      default:
        if ("object" === typeof a && null !== a) switch (a.$$typeof) {
          case Ba:
            g2 = 10;
            break a;
          case Ca:
            g2 = 9;
            break a;
          case Da:
            g2 = 11;
            break a;
          case Ga:
            g2 = 14;
            break a;
          case Ha:
            g2 = 16;
            d2 = null;
            break a;
        }
        throw Error(p2(130, null == a ? a : typeof a, ""));
    }
    b2 = Bg(g2, c2, b2, e);
    b2.elementType = a;
    b2.type = d2;
    b2.lanes = f2;
    return b2;
  }
  function Tg(a, b2, c2, d2) {
    a = Bg(7, a, d2, b2);
    a.lanes = c2;
    return a;
  }
  function pj(a, b2, c2, d2) {
    a = Bg(22, a, d2, b2);
    a.elementType = Ia;
    a.lanes = c2;
    a.stateNode = { isHidden: false };
    return a;
  }
  function Qg(a, b2, c2) {
    a = Bg(6, a, null, b2);
    a.lanes = c2;
    return a;
  }
  function Sg(a, b2, c2) {
    b2 = Bg(4, null !== a.children ? a.children : [], a.key, b2);
    b2.lanes = c2;
    b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
    return b2;
  }
  function al(a, b2, c2, d2, e) {
    this.tag = b2;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = zc(0);
    this.expirationTimes = zc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = zc(0);
    this.identifierPrefix = d2;
    this.onRecoverableError = e;
    this.mutableSourceEagerHydrationData = null;
  }
  function bl(a, b2, c2, d2, e, f2, g2, h3, k2) {
    a = new al(a, b2, c2, h3, k2);
    1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
    f2 = Bg(3, null, null, b2);
    a.current = f2;
    f2.stateNode = a;
    f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
    kh(f2);
    return a;
  }
  function cl(a, b2, c2) {
    var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a, containerInfo: b2, implementation: c2 };
  }
  function dl(a) {
    if (!a) return Vf;
    a = a._reactInternals;
    a: {
      if (Vb(a) !== a || 1 !== a.tag) throw Error(p2(170));
      var b2 = a;
      do {
        switch (b2.tag) {
          case 3:
            b2 = b2.stateNode.context;
            break a;
          case 1:
            if (Zf(b2.type)) {
              b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }
        }
        b2 = b2.return;
      } while (null !== b2);
      throw Error(p2(171));
    }
    if (1 === a.tag) {
      var c2 = a.type;
      if (Zf(c2)) return bg(a, c2, b2);
    }
    return b2;
  }
  function el(a, b2, c2, d2, e, f2, g2, h3, k2) {
    a = bl(c2, d2, true, a, e, f2, g2, h3, k2);
    a.context = dl(null);
    c2 = a.current;
    d2 = R();
    e = yi(c2);
    f2 = mh(d2, e);
    f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
    nh(c2, f2, e);
    a.current.lanes = e;
    Ac(a, e, d2);
    Dk(a, d2);
    return a;
  }
  function fl(a, b2, c2, d2) {
    var e = b2.current, f2 = R(), g2 = yi(e);
    c2 = dl(c2);
    null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
    b2 = mh(f2, g2);
    b2.payload = { element: a };
    d2 = void 0 === d2 ? null : d2;
    null !== d2 && (b2.callback = d2);
    a = nh(e, b2, g2);
    null !== a && (gi(a, e, g2, f2), oh(a, e, g2));
    return g2;
  }
  function gl(a) {
    a = a.current;
    if (!a.child) return null;
    switch (a.child.tag) {
      case 5:
        return a.child.stateNode;
      default:
        return a.child.stateNode;
    }
  }
  function hl(a, b2) {
    a = a.memoizedState;
    if (null !== a && null !== a.dehydrated) {
      var c2 = a.retryLane;
      a.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
    }
  }
  function il(a, b2) {
    hl(a, b2);
    (a = a.alternate) && hl(a, b2);
  }
  function jl() {
    return null;
  }
  var kl = "function" === typeof reportError ? reportError : function(a) {
    console.error(a);
  };
  function ll(a) {
    this._internalRoot = a;
  }
  ml.prototype.render = ll.prototype.render = function(a) {
    var b2 = this._internalRoot;
    if (null === b2) throw Error(p2(409));
    fl(a, b2, null, null);
  };
  ml.prototype.unmount = ll.prototype.unmount = function() {
    var a = this._internalRoot;
    if (null !== a) {
      this._internalRoot = null;
      var b2 = a.containerInfo;
      Rk(function() {
        fl(null, a, null, null);
      });
      b2[uf] = null;
    }
  };
  function ml(a) {
    this._internalRoot = a;
  }
  ml.prototype.unstable_scheduleHydration = function(a) {
    if (a) {
      var b2 = Hc();
      a = { blockedOn: null, target: a, priority: b2 };
      for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++) ;
      Qc.splice(c2, 0, a);
      0 === c2 && Vc(a);
    }
  };
  function nl(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
  }
  function ol(a) {
    return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
  }
  function pl() {
  }
  function ql(a, b2, c2, d2, e) {
    if (e) {
      if ("function" === typeof d2) {
        var f2 = d2;
        d2 = function() {
          var a2 = gl(g2);
          f2.call(a2);
        };
      }
      var g2 = el(b2, d2, a, 0, null, false, false, "", pl);
      a._reactRootContainer = g2;
      a[uf] = g2.current;
      sf(8 === a.nodeType ? a.parentNode : a);
      Rk();
      return g2;
    }
    for (; e = a.lastChild; ) a.removeChild(e);
    if ("function" === typeof d2) {
      var h3 = d2;
      d2 = function() {
        var a2 = gl(k2);
        h3.call(a2);
      };
    }
    var k2 = bl(a, 0, false, null, null, false, false, "", pl);
    a._reactRootContainer = k2;
    a[uf] = k2.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Rk(function() {
      fl(b2, k2, c2, d2);
    });
    return k2;
  }
  function rl(a, b2, c2, d2, e) {
    var f2 = c2._reactRootContainer;
    if (f2) {
      var g2 = f2;
      if ("function" === typeof e) {
        var h3 = e;
        e = function() {
          var a2 = gl(g2);
          h3.call(a2);
        };
      }
      fl(b2, g2, a, e);
    } else g2 = ql(c2, b2, a, e, d2);
    return gl(g2);
  }
  Ec = function(a) {
    switch (a.tag) {
      case 3:
        var b2 = a.stateNode;
        if (b2.current.memoizedState.isDehydrated) {
          var c2 = tc(b2.pendingLanes);
          0 !== c2 && (Cc(b2, c2 | 1), Dk(b2, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
        }
        break;
      case 13:
        Rk(function() {
          var b3 = ih(a, 1);
          if (null !== b3) {
            var c3 = R();
            gi(b3, a, 1, c3);
          }
        }), il(a, 1);
    }
  };
  Fc = function(a) {
    if (13 === a.tag) {
      var b2 = ih(a, 134217728);
      if (null !== b2) {
        var c2 = R();
        gi(b2, a, 134217728, c2);
      }
      il(a, 134217728);
    }
  };
  Gc = function(a) {
    if (13 === a.tag) {
      var b2 = yi(a), c2 = ih(a, b2);
      if (null !== c2) {
        var d2 = R();
        gi(c2, a, b2, d2);
      }
      il(a, b2);
    }
  };
  Hc = function() {
    return C2;
  };
  Ic = function(a, b2) {
    var c2 = C2;
    try {
      return C2 = a, b2();
    } finally {
      C2 = c2;
    }
  };
  yb = function(a, b2, c2) {
    switch (b2) {
      case "input":
        bb(a, c2);
        b2 = c2.name;
        if ("radio" === c2.type && null != b2) {
          for (c2 = a; c2.parentNode; ) c2 = c2.parentNode;
          c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
          for (b2 = 0; b2 < c2.length; b2++) {
            var d2 = c2[b2];
            if (d2 !== a && d2.form === a.form) {
              var e = Db(d2);
              if (!e) throw Error(p2(90));
              Wa(d2);
              bb(d2, e);
            }
          }
        }
        break;
      case "textarea":
        ib(a, c2);
        break;
      case "select":
        b2 = c2.value, null != b2 && fb(a, !!c2.multiple, b2, false);
    }
  };
  Gb = Qk;
  Hb = Rk;
  var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
  var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
    a = Zb(a);
    return null === a ? null : a.stateNode;
  }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vl.isDisabled && vl.supportsFiber) try {
      kc = vl.inject(ul), lc = vl;
    } catch (a) {
    }
  }
  reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
  reactDom_production_min.createPortal = function(a, b2) {
    var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!nl(b2)) throw Error(p2(200));
    return cl(a, b2, null, c2);
  };
  reactDom_production_min.createRoot = function(a, b2) {
    if (!nl(a)) throw Error(p2(299));
    var c2 = false, d2 = "", e = kl;
    null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e = b2.onRecoverableError));
    b2 = bl(a, 1, false, null, null, c2, false, d2, e);
    a[uf] = b2.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    return new ll(b2);
  };
  reactDom_production_min.findDOMNode = function(a) {
    if (null == a) return null;
    if (1 === a.nodeType) return a;
    var b2 = a._reactInternals;
    if (void 0 === b2) {
      if ("function" === typeof a.render) throw Error(p2(188));
      a = Object.keys(a).join(",");
      throw Error(p2(268, a));
    }
    a = Zb(b2);
    a = null === a ? null : a.stateNode;
    return a;
  };
  reactDom_production_min.flushSync = function(a) {
    return Rk(a);
  };
  reactDom_production_min.hydrate = function(a, b2, c2) {
    if (!ol(b2)) throw Error(p2(200));
    return rl(null, a, b2, true, c2);
  };
  reactDom_production_min.hydrateRoot = function(a, b2, c2) {
    if (!nl(a)) throw Error(p2(405));
    var d2 = null != c2 && c2.hydratedSources || null, e = false, f2 = "", g2 = kl;
    null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
    b2 = el(b2, null, a, 1, null != c2 ? c2 : null, e, false, f2, g2);
    a[uf] = b2.current;
    sf(a);
    if (d2) for (a = 0; a < d2.length; a++) c2 = d2[a], e = c2._getVersion, e = e(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e] : b2.mutableSourceEagerHydrationData.push(
      c2,
      e
    );
    return new ml(b2);
  };
  reactDom_production_min.render = function(a, b2, c2) {
    if (!ol(b2)) throw Error(p2(200));
    return rl(null, a, b2, false, c2);
  };
  reactDom_production_min.unmountComponentAtNode = function(a) {
    if (!ol(a)) throw Error(p2(40));
    return a._reactRootContainer ? (Rk(function() {
      rl(null, null, a, false, function() {
        a._reactRootContainer = null;
        a[uf] = null;
      });
    }), true) : false;
  };
  reactDom_production_min.unstable_batchedUpdates = Qk;
  reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b2, c2, d2) {
    if (!ol(c2)) throw Error(p2(200));
    if (null == a || void 0 === a._reactInternals) throw Error(p2(38));
    return rl(a, b2, c2, false, d2);
  };
  reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
  return reactDom_production_min;
}
var hasRequiredReactDom;
function requireReactDom() {
  if (hasRequiredReactDom) return reactDom.exports;
  hasRequiredReactDom = 1;
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    reactDom.exports = requireReactDom_production_min();
  }
  return reactDom.exports;
}
var reactDomExports = requireReactDom();
let axiosClient = axios$1.create();
let requestFingerprintResolver = (config2, axios2) => `${config2.method}:${config2.baseURL ?? axios2.defaults.baseURL ?? ""}${config2.url}`;
let successResolver = (response) => response.status === 204 && response.headers["precognition-success"] === "true";
const abortControllers = {};
const client$1 = {
  get: (url, data = {}, config2 = {}) => request(mergeConfig("get", url, data, config2)),
  post: (url, data = {}, config2 = {}) => request(mergeConfig("post", url, data, config2)),
  patch: (url, data = {}, config2 = {}) => request(mergeConfig("patch", url, data, config2)),
  put: (url, data = {}, config2 = {}) => request(mergeConfig("put", url, data, config2)),
  delete: (url, data = {}, config2 = {}) => request(mergeConfig("delete", url, data, config2)),
  use(axios2) {
    axiosClient = axios2;
    return client$1;
  },
  axios() {
    return axiosClient;
  },
  fingerprintRequestsUsing(callback) {
    requestFingerprintResolver = callback === null ? () => null : callback;
    return client$1;
  },
  determineSuccessUsing(callback) {
    successResolver = callback;
    return client$1;
  }
};
const mergeConfig = (method, url, data, config2) => ({
  url,
  method,
  ...config2,
  ...["get", "delete"].includes(method) ? {
    params: merge({}, data, config2 == null ? void 0 : config2.params)
  } : {
    data: merge({}, data, config2 == null ? void 0 : config2.data)
  }
});
const request = (userConfig = {}) => {
  const config2 = [
    resolveConfig,
    abortMatchingRequests,
    refreshAbortController
  ].reduce((config3, callback) => callback(config3), userConfig);
  if ((config2.onBefore ?? (() => true))() === false) {
    return Promise.resolve(null);
  }
  (config2.onStart ?? (() => null))();
  return axiosClient.request(config2).then(async (response) => {
    if (config2.precognitive) {
      validatePrecognitionResponse(response);
    }
    const status2 = response.status;
    let payload = response;
    if (config2.precognitive && config2.onPrecognitionSuccess && successResolver(payload)) {
      payload = await Promise.resolve(config2.onPrecognitionSuccess(payload) ?? payload);
    }
    if (config2.onSuccess && isSuccess(status2)) {
      payload = await Promise.resolve(config2.onSuccess(payload) ?? payload);
    }
    const statusHandler = resolveStatusHandler(config2, status2) ?? ((response2) => response2);
    return statusHandler(payload) ?? payload;
  }, (error) => {
    if (isNotServerGeneratedError(error)) {
      return Promise.reject(error);
    }
    if (config2.precognitive) {
      validatePrecognitionResponse(error.response);
    }
    const statusHandler = resolveStatusHandler(config2, error.response.status) ?? ((_2, error2) => Promise.reject(error2));
    return statusHandler(error.response, error);
  }).finally(config2.onFinish ?? (() => null));
};
const resolveConfig = (config2) => {
  const only = config2.only ?? config2.validate;
  return {
    ...config2,
    timeout: config2.timeout ?? axiosClient.defaults["timeout"] ?? 3e4,
    precognitive: config2.precognitive !== false,
    fingerprint: typeof config2.fingerprint === "undefined" ? requestFingerprintResolver(config2, axiosClient) : config2.fingerprint,
    headers: {
      ...config2.headers,
      "Content-Type": resolveContentType(config2),
      ...config2.precognitive !== false ? {
        Precognition: true
      } : {},
      ...only ? {
        "Precognition-Validate-Only": Array.from(only).join()
      } : {}
    }
  };
};
const isSuccess = (status2) => status2 >= 200 && status2 < 300;
const abortMatchingRequests = (config2) => {
  var _a;
  if (typeof config2.fingerprint !== "string") {
    return config2;
  }
  (_a = abortControllers[config2.fingerprint]) == null ? void 0 : _a.abort();
  delete abortControllers[config2.fingerprint];
  return config2;
};
const refreshAbortController = (config2) => {
  if (typeof config2.fingerprint !== "string" || config2.signal || config2.cancelToken || !config2.precognitive) {
    return config2;
  }
  abortControllers[config2.fingerprint] = new AbortController();
  return {
    ...config2,
    signal: abortControllers[config2.fingerprint].signal
  };
};
const validatePrecognitionResponse = (response) => {
  var _a;
  if (((_a = response.headers) == null ? void 0 : _a.precognition) !== "true") {
    throw Error("Did not receive a Precognition response. Ensure you have the Precognition middleware in place for the route.");
  }
};
const isNotServerGeneratedError = (error) => {
  var _a;
  return !isAxiosError(error) || typeof ((_a = error.response) == null ? void 0 : _a.status) !== "number" || isCancel(error);
};
const resolveStatusHandler = (config2, code) => ({
  401: config2.onUnauthorized,
  403: config2.onForbidden,
  404: config2.onNotFound,
  409: config2.onConflict,
  422: config2.onValidationError,
  423: config2.onLocked
})[code];
const resolveContentType = (config2) => {
  var _a, _b, _c;
  return ((_a = config2.headers) == null ? void 0 : _a["Content-Type"]) ?? ((_b = config2.headers) == null ? void 0 : _b["Content-type"]) ?? ((_c = config2.headers) == null ? void 0 : _c["content-type"]) ?? (hasFiles(config2.data) ? "multipart/form-data" : "application/json");
};
const hasFiles = (data) => isFile(data) || typeof data === "object" && data !== null && Object.values(data).some((value) => hasFiles(value));
const isFile = (value) => typeof File !== "undefined" && value instanceof File || value instanceof Blob || typeof FileList !== "undefined" && value instanceof FileList && value.length > 0;
const expandWildcardPaths = (pattern, data) => {
  if (!pattern.includes("*")) {
    return [pattern];
  }
  const parts = pattern.split(".");
  let paths = [""];
  for (const part of parts) {
    if (part === "*") {
      const expanded = [];
      for (const path of paths) {
        const value = path ? get$1(data, path) : data;
        if (Array.isArray(value)) {
          for (let index = 0; index < value.length; index++) {
            expanded.push(path ? `${path}.${index}` : String(index));
          }
        } else if (value !== null && typeof value === "object") {
          for (const key of Object.keys(value)) {
            expanded.push(path ? `${path}.${key}` : key);
          }
        }
      }
      paths = expanded;
    } else {
      paths = paths.map((path) => path ? `${path}.${part}` : part);
    }
  }
  return paths;
};
const keyMatchesPattern = (key, pattern) => {
  if (!pattern.includes("*")) {
    return key === pattern;
  }
  const regex = new RegExp("^" + pattern.replace(/\./g, "\\.").replace(/\*/g, "[^.]+") + "$");
  return regex.test(key);
};
const omitByPattern = (obj, patterns) => {
  return Object.fromEntries(Object.entries(obj).filter(([key]) => {
    return !patterns.some((pattern) => keyMatchesPattern(key, pattern));
  }));
};
const createValidator = (callback, initialData = {}) => {
  const listeners = {
    errorsChanged: [],
    touchedChanged: [],
    validatingChanged: [],
    validatedChanged: []
  };
  let validateFiles = false;
  let validating = false;
  const setValidating = (value) => {
    if (value !== validating) {
      validating = value;
      return listeners.validatingChanged;
    }
    return [];
  };
  let validated = [];
  const setValidated = (value) => {
    const uniqueNames = [...new Set(value)];
    if (validated.length !== uniqueNames.length || !uniqueNames.every((name) => validated.includes(name))) {
      validated = uniqueNames;
      return listeners.validatedChanged;
    }
    return [];
  };
  const valid = () => validated.filter((name) => typeof errors[name] === "undefined");
  let touched = [];
  const setTouched = (value) => {
    const uniqueNames = [...new Set(value)];
    if (touched.length !== uniqueNames.length || !uniqueNames.every((name) => touched.includes(name))) {
      touched = uniqueNames;
      return listeners.touchedChanged;
    }
    return [];
  };
  let errors = {};
  const setErrors = (value) => {
    const prepared = toValidationErrors(value);
    if (!isEqual(errors, prepared)) {
      errors = prepared;
      return listeners.errorsChanged;
    }
    return [];
  };
  const forgetError = (name) => {
    const newErrors = { ...errors };
    delete newErrors[resolveName(name)];
    return setErrors(newErrors);
  };
  const hasErrors = () => Object.keys(errors).length > 0;
  let debounceTimeoutDuration = 1500;
  const setDebounceTimeout = (value) => {
    debounceTimeoutDuration = value;
    validator2.cancel();
    validator2 = createValidator2();
  };
  let oldData = initialData;
  let validatingData = null;
  let oldTouched = [];
  let validatingTouched = null;
  const createValidator2 = () => debounce$1((instanceConfig) => {
    callback({
      get: (url, data = {}, globalConfig = {}) => client$1.get(url, parseData(data), resolveConfig2(globalConfig, instanceConfig, data)),
      post: (url, data = {}, globalConfig = {}) => client$1.post(url, parseData(data), resolveConfig2(globalConfig, instanceConfig, data)),
      patch: (url, data = {}, globalConfig = {}) => client$1.patch(url, parseData(data), resolveConfig2(globalConfig, instanceConfig, data)),
      put: (url, data = {}, globalConfig = {}) => client$1.put(url, parseData(data), resolveConfig2(globalConfig, instanceConfig, data)),
      delete: (url, data = {}, globalConfig = {}) => client$1.delete(url, parseData(data), resolveConfig2(globalConfig, instanceConfig, data))
    }).catch((error) => {
      var _a;
      if (isCancel(error)) {
        return null;
      }
      if (isAxiosError(error) && ((_a = error.response) == null ? void 0 : _a.status) === 422) {
        return null;
      }
      return Promise.reject(error);
    });
  }, debounceTimeoutDuration, { leading: true, trailing: true });
  let validator2 = createValidator2();
  const resolveConfig2 = (globalConfig, instanceConfig, data = {}) => {
    const config2 = {
      ...globalConfig,
      ...instanceConfig
    };
    const only = Array.from(config2.only ?? config2.validate ?? touched);
    return {
      ...instanceConfig,
      // Axios has special rules for merging global and local config. We
      // use their merge function here to make sure things like headers
      // merge in an expected way.
      ...mergeConfig$1(globalConfig, instanceConfig),
      only,
      timeout: config2.timeout ?? 5e3,
      onValidationError: (response, axiosError) => {
        [
          ...setValidated([...validated, ...only]),
          ...setErrors(merge(omitByPattern({ ...errors }, only), response.data.errors))
        ].forEach((listener) => listener());
        return config2.onValidationError ? config2.onValidationError(response, axiosError) : Promise.reject(axiosError);
      },
      onSuccess: (response) => {
        setValidated([...validated, ...only]).forEach((listener) => listener());
        return config2.onSuccess ? config2.onSuccess(response) : response;
      },
      onPrecognitionSuccess: (response) => {
        [
          ...setValidated([...validated, ...only]),
          ...setErrors(omitByPattern({ ...errors }, only))
        ].forEach((listener) => listener());
        return config2.onPrecognitionSuccess ? config2.onPrecognitionSuccess(response) : response;
      },
      onBefore: () => {
        const hasWildcards = touched.some((name) => name.includes("*"));
        const expandedTouched = hasWildcards ? [...new Set(touched.flatMap((name) => expandWildcardPaths(name, data)))] : touched;
        if (config2.onBeforeValidation && config2.onBeforeValidation({ data, touched: expandedTouched }, { data: oldData, touched: oldTouched }) === false) {
          return false;
        }
        const beforeResult = (config2.onBefore || (() => true))();
        if (beforeResult === false) {
          return false;
        }
        if (hasWildcards) {
          setTouched(expandedTouched).forEach((listener) => listener());
        }
        validatingTouched = touched;
        validatingData = data;
        return true;
      },
      onStart: () => {
        setValidating(true).forEach((listener) => listener());
        (config2.onStart ?? (() => null))();
      },
      onFinish: () => {
        setValidating(false).forEach((listener) => listener());
        oldTouched = validatingTouched;
        oldData = validatingData;
        validatingTouched = validatingData = null;
        (config2.onFinish ?? (() => null))();
      }
    };
  };
  const validate = (name, value, config2) => {
    if (typeof name === "undefined") {
      const only = Array.from((config2 == null ? void 0 : config2.only) ?? (config2 == null ? void 0 : config2.validate) ?? []);
      setTouched([...touched, ...only]).forEach((listener) => listener());
      validator2(config2 ?? {});
      return;
    }
    if (isFile(value) && !validateFiles) {
      console.warn('Precognition file validation is not active. Call the "validateFiles" function on your form to enable it.');
      return;
    }
    name = resolveName(name);
    if (name.includes("*") || get$1(oldData, name) !== value) {
      setTouched([name, ...touched]).forEach((listener) => listener());
      validator2(config2 ?? {});
    }
  };
  const parseData = (data) => validateFiles === false ? forgetFiles(data) : data;
  const form = {
    touched: () => touched,
    validate(name, value, config2) {
      if (typeof name === "object" && !("target" in name)) {
        config2 = name;
        name = value = void 0;
      }
      validate(name, value, config2);
      return form;
    },
    touch(input) {
      const inputs = Array.isArray(input) ? input : [resolveName(input)];
      setTouched([...touched, ...inputs]).forEach((listener) => listener());
      return form;
    },
    validating: () => validating,
    valid,
    errors: () => errors,
    hasErrors,
    setErrors(value) {
      setErrors(value).forEach((listener) => listener());
      return form;
    },
    forgetError(name) {
      forgetError(name).forEach((listener) => listener());
      return form;
    },
    defaults(data) {
      initialData = data;
      oldData = data;
      return form;
    },
    reset(...names) {
      if (names.length === 0) {
        setTouched([]).forEach((listener) => listener());
      } else {
        const newTouched = [...touched];
        names.forEach((name) => {
          if (newTouched.includes(name)) {
            newTouched.splice(newTouched.indexOf(name), 1);
          }
          set(oldData, name, get$1(initialData, name));
        });
        setTouched(newTouched).forEach((listener) => listener());
      }
      return form;
    },
    setTimeout(value) {
      setDebounceTimeout(value);
      return form;
    },
    on(event, callback2) {
      listeners[event].push(callback2);
      return form;
    },
    validateFiles() {
      validateFiles = true;
      return form;
    },
    withoutFileValidation() {
      validateFiles = false;
      return form;
    }
  };
  return form;
};
const toSimpleValidationErrors = (errors) => {
  return Object.keys(errors).reduce((carry, key) => ({
    ...carry,
    [key]: Array.isArray(errors[key]) ? errors[key][0] : errors[key]
  }), {});
};
const toValidationErrors = (errors) => {
  return Object.keys(errors).reduce((carry, key) => ({
    ...carry,
    [key]: typeof errors[key] === "string" ? [errors[key]] : errors[key]
  }), {});
};
const resolveName = (name) => {
  return typeof name !== "string" ? name.target.name : name;
};
const forgetFiles = (data) => {
  const newData = { ...data };
  Object.keys(newData).forEach((name) => {
    const value = newData[name];
    if (value === null) {
      return;
    }
    if (isFile(value)) {
      delete newData[name];
      return;
    }
    if (Array.isArray(value)) {
      newData[name] = Object.values(forgetFiles({ ...value }));
      return;
    }
    if (typeof value === "object") {
      newData[name] = forgetFiles(newData[name]);
      return;
    }
  });
  return newData;
};
var headContext = reactExports.createContext(null);
headContext.displayName = "InertiaHeadContext";
var HeadContext_default = headContext;
var pageContext = reactExports.createContext(null);
pageContext.displayName = "InertiaPageContext";
var PageContext_default = pageContext;
var currentIsInitialPage = true;
var routerIsInitialized = false;
var swapComponent = async () => {
  currentIsInitialPage = false;
};
function App({
  children,
  initialPage,
  initialComponent,
  resolveComponent,
  titleCallback,
  onHeadUpdate
}) {
  const [current, setCurrent] = reactExports.useState({
    component: initialComponent || null,
    page: { ...initialPage, flash: initialPage.flash ?? {} },
    key: null
  });
  const headManager = reactExports.useMemo(() => {
    return createHeadManager(
      typeof window === "undefined",
      titleCallback || ((title) => title),
      onHeadUpdate || (() => {
      })
    );
  }, []);
  if (!routerIsInitialized) {
    router.init({
      initialPage,
      resolveComponent,
      swapComponent: async (args) => swapComponent(args),
      onFlash: (flash) => {
        setCurrent((current2) => ({
          ...current2,
          page: { ...current2.page, flash }
        }));
      }
    });
    routerIsInitialized = true;
  }
  reactExports.useEffect(() => {
    swapComponent = async ({ component, page: page2, preserveState }) => {
      if (currentIsInitialPage) {
        currentIsInitialPage = false;
        return;
      }
      reactDomExports.flushSync(
        () => setCurrent((current2) => ({
          component,
          page: page2,
          key: preserveState ? current2.key : Date.now()
        }))
      );
    };
    router.on("navigate", () => headManager.forceUpdate());
  }, []);
  if (!current.component) {
    return reactExports.createElement(
      HeadContext_default.Provider,
      { value: headManager },
      reactExports.createElement(PageContext_default.Provider, { value: current.page }, null)
    );
  }
  const renderChildren = children || (({ Component, props, key }) => {
    const child = reactExports.createElement(Component, { key, ...props });
    if (typeof Component.layout === "function") {
      return Component.layout(child);
    }
    if (Array.isArray(Component.layout)) {
      return Component.layout.concat(child).reverse().reduce((children2, Layout) => reactExports.createElement(Layout, { children: children2, ...props }));
    }
    return child;
  });
  return reactExports.createElement(
    HeadContext_default.Provider,
    { value: headManager },
    reactExports.createElement(
      PageContext_default.Provider,
      { value: current.page },
      renderChildren({
        Component: current.component,
        key: current.key,
        props: current.page.props
      })
    )
  );
}
App.displayName = "Inertia";
async function createInertiaApp({
  id = "app",
  resolve,
  setup,
  title,
  progress: progress22 = {},
  page: page2,
  render: render2,
  defaults: defaults2 = {}
}) {
  config.replace(defaults2);
  const isServer3 = typeof window === "undefined";
  const useScriptElementForInitialPage = config.get("future.useScriptElementForInitialPage");
  const initialPage = page2 || getInitialPageFromDOM(id, useScriptElementForInitialPage);
  const resolveComponent = (name) => Promise.resolve(resolve(name)).then((module2) => module2.default || module2);
  let head = [];
  const reactApp = await Promise.all([
    resolveComponent(initialPage.component),
    router.decryptHistory().catch(() => {
    })
  ]).then(([initialComponent]) => {
    const props = {
      initialPage,
      initialComponent,
      resolveComponent,
      titleCallback: title
    };
    if (isServer3) {
      const ssrSetup = setup;
      return ssrSetup({
        el: null,
        App,
        props: { ...props, onHeadUpdate: (elements) => head = elements }
      });
    }
    const csrSetup = setup;
    return csrSetup({
      el: document.getElementById(id),
      App,
      props
    });
  });
  if (!isServer3 && progress22) {
    setupProgress(progress22);
  }
  if (isServer3 && render2) {
    const element = () => {
      if (!useScriptElementForInitialPage) {
        return reactExports.createElement(
          "div",
          {
            id,
            "data-page": JSON.stringify(initialPage)
          },
          reactApp
        );
      }
      return reactExports.createElement(
        reactExports.Fragment,
        null,
        reactExports.createElement("script", {
          "data-page": id,
          type: "application/json",
          dangerouslySetInnerHTML: { __html: JSON.stringify(initialPage).replace(/\//g, "\\/") }
        }),
        reactExports.createElement("div", { id }, reactApp)
      );
    };
    const body = await render2(element());
    return { head, body };
  }
}
function useIsomorphicLayoutEffect(effect, deps) {
  typeof window === "undefined" ? reactExports.useEffect(effect, deps) : reactExports.useLayoutEffect(effect, deps);
}
var isReact19 = typeof G.use === "function";
function usePage() {
  const page2 = isReact19 ? G.use(PageContext_default) : G.useContext(PageContext_default);
  if (!page2) {
    throw new Error("usePage must be used within the Inertia component");
  }
  return page2;
}
function useRemember(initialState, key, excludeKeysRef) {
  const [state, setState] = reactExports.useState(() => {
    const restored = router.restore(key);
    return restored !== void 0 ? restored : initialState;
  });
  reactExports.useEffect(() => {
    const keys2 = excludeKeysRef == null ? void 0 : excludeKeysRef.current;
    if (keys2 && keys2.length > 0 && typeof state === "object" && state !== null) {
      const filtered = { ...state };
      keys2.forEach((k2) => delete filtered[k2]);
      router.remember(filtered, key);
    } else {
      router.remember(state, key);
    }
  }, [state, key]);
  return [state, setState];
}
function useForm(...args) {
  const isMounted = reactExports.useRef(false);
  const parsedArgs = UseFormUtils.parseUseFormArguments(...args);
  const { rememberKey, data: initialData } = parsedArgs;
  const precognitionEndpoint = reactExports.useRef(parsedArgs.precognitionEndpoint);
  const [defaults2, setDefaults] = reactExports.useState(
    typeof initialData === "function" ? cloneDeep(initialData()) : cloneDeep(initialData)
  );
  const cancelToken = reactExports.useRef(null);
  const recentlySuccessfulTimeoutId = reactExports.useRef(void 0);
  const excludeKeysRef = reactExports.useRef([]);
  const [data, setData] = rememberKey ? useRemember(defaults2, `${rememberKey}:data`, excludeKeysRef) : reactExports.useState(defaults2);
  const [errors, setErrors] = rememberKey ? useRemember({}, `${rememberKey}:errors`) : reactExports.useState({});
  const [hasErrors, setHasErrors] = reactExports.useState(false);
  const [processing, setProcessing] = reactExports.useState(false);
  const [progress22, setProgress] = reactExports.useState(null);
  const [wasSuccessful, setWasSuccessful] = reactExports.useState(false);
  const [recentlySuccessful, setRecentlySuccessful] = reactExports.useState(false);
  const transform = reactExports.useRef((data2) => data2);
  const isDirty = reactExports.useMemo(() => !isEqual(data, defaults2), [data, defaults2]);
  const validatorRef = reactExports.useRef(null);
  const [validating, setValidating] = reactExports.useState(false);
  const [touchedFields, setTouchedFields] = reactExports.useState([]);
  const [validFields, setValidFields] = reactExports.useState([]);
  const withAllErrors = reactExports.useRef(null);
  reactExports.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  const setDefaultsCalledInOnSuccess = reactExports.useRef(false);
  const submit = reactExports.useCallback(
    (...args2) => {
      const { method, url, options } = UseFormUtils.parseSubmitArguments(args2, precognitionEndpoint.current);
      setDefaultsCalledInOnSuccess.current = false;
      const _options = {
        ...options,
        onCancelToken: (token) => {
          cancelToken.current = token;
          if (options.onCancelToken) {
            return options.onCancelToken(token);
          }
        },
        onBefore: (visit) => {
          setWasSuccessful(false);
          setRecentlySuccessful(false);
          clearTimeout(recentlySuccessfulTimeoutId.current);
          if (options.onBefore) {
            return options.onBefore(visit);
          }
        },
        onStart: (visit) => {
          setProcessing(true);
          if (options.onStart) {
            return options.onStart(visit);
          }
        },
        onProgress: (event) => {
          setProgress(event || null);
          if (options.onProgress) {
            return options.onProgress(event);
          }
        },
        onSuccess: async (page2) => {
          if (isMounted.current) {
            setProcessing(false);
            setProgress(null);
            setErrors({});
            setHasErrors(false);
            setWasSuccessful(true);
            setRecentlySuccessful(true);
            recentlySuccessfulTimeoutId.current = setTimeout(() => {
              if (isMounted.current) {
                setRecentlySuccessful(false);
              }
            }, config.get("form.recentlySuccessfulDuration"));
          }
          const onSuccess = options.onSuccess ? await options.onSuccess(page2) : null;
          if (isMounted.current && !setDefaultsCalledInOnSuccess.current) {
            setData((data2) => {
              setDefaults(cloneDeep(data2));
              return data2;
            });
          }
          return onSuccess;
        },
        onError: (errors2) => {
          var _a;
          if (isMounted.current) {
            setProcessing(false);
            setProgress(null);
            setErrors(errors2);
            setHasErrors(Object.keys(errors2).length > 0);
            (_a = validatorRef.current) == null ? void 0 : _a.setErrors(errors2);
          }
          if (options.onError) {
            return options.onError(errors2);
          }
        },
        onCancel: () => {
          if (isMounted.current) {
            setProcessing(false);
            setProgress(null);
          }
          if (options.onCancel) {
            return options.onCancel();
          }
        },
        onFinish: (visit) => {
          if (isMounted.current) {
            setProcessing(false);
            setProgress(null);
          }
          cancelToken.current = null;
          if (options.onFinish) {
            return options.onFinish(visit);
          }
        }
      };
      const transformedData = transform.current(data);
      if (method === "delete") {
        router.delete(url, { ..._options, data: transformedData });
      } else {
        router[method](url, transformedData, _options);
      }
    },
    [data, setErrors, transform]
  );
  const setDataFunction = reactExports.useCallback(
    (keyOrData, maybeValue) => {
      if (typeof keyOrData === "string") {
        setData((data2) => set(cloneDeep(data2), keyOrData, maybeValue));
      } else if (typeof keyOrData === "function") {
        setData((data2) => keyOrData(data2));
      } else {
        setData(keyOrData);
      }
    },
    [setData]
  );
  const [dataAsDefaults, setDataAsDefaults] = reactExports.useState(false);
  const dataRef = reactExports.useRef(data);
  reactExports.useEffect(() => {
    dataRef.current = data;
  });
  const setDefaultsFunction = reactExports.useCallback(
    (fieldOrFields, maybeValue) => {
      var _a;
      setDefaultsCalledInOnSuccess.current = true;
      let newDefaults = {};
      if (typeof fieldOrFields === "undefined") {
        newDefaults = { ...dataRef.current };
        setDefaults(dataRef.current);
        setDataAsDefaults(true);
      } else {
        setDefaults((defaults22) => {
          newDefaults = typeof fieldOrFields === "string" ? set(cloneDeep(defaults22), fieldOrFields, maybeValue) : Object.assign(cloneDeep(defaults22), fieldOrFields);
          return newDefaults;
        });
      }
      (_a = validatorRef.current) == null ? void 0 : _a.defaults(newDefaults);
    },
    [setDefaults]
  );
  useIsomorphicLayoutEffect(() => {
    if (!dataAsDefaults) {
      return;
    }
    if (isDirty) {
      setDefaults(data);
    }
    setDataAsDefaults(false);
  }, [dataAsDefaults]);
  const reset = reactExports.useCallback(
    (...fields) => {
      var _a;
      if (fields.length === 0) {
        setData(defaults2);
      } else {
        setData(
          (data2) => fields.filter((key) => has(defaults2, key)).reduce(
            (carry, key) => {
              return set(carry, key, get$1(defaults2, key));
            },
            { ...data2 }
          )
        );
      }
      (_a = validatorRef.current) == null ? void 0 : _a.reset(...fields);
    },
    [setData, defaults2]
  );
  const setError = reactExports.useCallback(
    (fieldOrFields, maybeValue) => {
      setErrors((errors2) => {
        var _a;
        const newErrors = {
          ...errors2,
          ...typeof fieldOrFields === "string" ? { [fieldOrFields]: maybeValue } : fieldOrFields
        };
        setHasErrors(Object.keys(newErrors).length > 0);
        (_a = validatorRef.current) == null ? void 0 : _a.setErrors(newErrors);
        return newErrors;
      });
    },
    [setErrors, setHasErrors]
  );
  const clearErrors = reactExports.useCallback(
    (...fields) => {
      setErrors((errors2) => {
        const newErrors = Object.keys(errors2).reduce(
          (carry, field) => ({
            ...carry,
            ...fields.length > 0 && !fields.includes(field) ? { [field]: errors2[field] } : {}
          }),
          {}
        );
        setHasErrors(Object.keys(newErrors).length > 0);
        if (validatorRef.current) {
          if (fields.length === 0) {
            validatorRef.current.setErrors({});
          } else {
            fields.forEach(validatorRef.current.forgetError);
          }
        }
        return newErrors;
      });
    },
    [setErrors, setHasErrors]
  );
  const resetAndClearErrors = reactExports.useCallback(
    (...fields) => {
      reset(...fields);
      clearErrors(...fields);
    },
    [reset, clearErrors]
  );
  const createSubmitMethod = (method) => (url, options = {}) => {
    submit(method, url, options);
  };
  const getMethod = reactExports.useCallback(createSubmitMethod("get"), [submit]);
  const post = reactExports.useCallback(createSubmitMethod("post"), [submit]);
  const put = reactExports.useCallback(createSubmitMethod("put"), [submit]);
  const patch = reactExports.useCallback(createSubmitMethod("patch"), [submit]);
  const deleteMethod = reactExports.useCallback(createSubmitMethod("delete"), [submit]);
  const cancel = reactExports.useCallback(() => {
    if (cancelToken.current) {
      cancelToken.current.cancel();
    }
  }, []);
  const transformFunction = reactExports.useCallback((callback) => {
    transform.current = callback;
  }, []);
  const form = {
    data,
    setData: setDataFunction,
    isDirty,
    errors,
    hasErrors,
    processing,
    progress: progress22,
    wasSuccessful,
    recentlySuccessful,
    transform: transformFunction,
    setDefaults: setDefaultsFunction,
    reset,
    setError,
    clearErrors,
    resetAndClearErrors,
    submit,
    get: getMethod,
    post,
    put,
    patch,
    delete: deleteMethod,
    cancel,
    dontRemember: (...keys2) => {
      excludeKeysRef.current = keys2;
      return form;
    }
  };
  const tap = (value, callback) => {
    callback(value);
    return value;
  };
  const valid = reactExports.useCallback(
    (field) => validFields.includes(field),
    [validFields]
  );
  const invalid = reactExports.useCallback((field) => field in errors, [errors]);
  const touched = reactExports.useCallback(
    (field) => typeof field === "string" ? touchedFields.includes(field) : touchedFields.length > 0,
    [touchedFields]
  );
  const validate = (field, config3) => {
    if (typeof field === "object" && !("target" in field)) {
      config3 = field;
      field = void 0;
    }
    if (field === void 0) {
      validatorRef.current.validate(config3);
    } else {
      const fieldName = resolveName(field);
      const currentData = dataRef.current;
      const transformedData = transform.current(currentData);
      validatorRef.current.validate(fieldName, get$1(transformedData, fieldName), config3);
    }
    return form;
  };
  const withPrecognition = (...args2) => {
    precognitionEndpoint.current = UseFormUtils.createWayfinderCallback(...args2);
    if (!validatorRef.current) {
      const validator2 = createValidator((client2) => {
        const { method, url } = precognitionEndpoint.current();
        const currentData = dataRef.current;
        const transformedData = transform.current(currentData);
        return client2[method](url, transformedData);
      }, cloneDeep(defaults2));
      validatorRef.current = validator2;
      validator2.on("validatingChanged", () => {
        setValidating(validator2.validating());
      }).on("validatedChanged", () => {
        setValidFields(validator2.valid());
      }).on("touchedChanged", () => {
        setTouchedFields(validator2.touched());
      }).on("errorsChanged", () => {
        const validationErrors = withAllErrors.current ?? config.get("form.withAllErrors") ? validator2.errors() : toSimpleValidationErrors(validator2.errors());
        setErrors(validationErrors);
        setHasErrors(Object.keys(validationErrors).length > 0);
        setValidFields(validator2.valid());
      });
    }
    const precognitiveForm = Object.assign(form, {
      validating,
      validator: () => validatorRef.current,
      valid,
      invalid,
      touched,
      withoutFileValidation: () => tap(precognitiveForm, () => {
        var _a;
        return (_a = validatorRef.current) == null ? void 0 : _a.withoutFileValidation();
      }),
      touch: (field, ...fields) => {
        var _a, _b, _c;
        if (Array.isArray(field)) {
          (_a = validatorRef.current) == null ? void 0 : _a.touch(field);
        } else if (typeof field === "string") {
          (_b = validatorRef.current) == null ? void 0 : _b.touch([field, ...fields]);
        } else {
          (_c = validatorRef.current) == null ? void 0 : _c.touch(field);
        }
        return precognitiveForm;
      },
      withAllErrors: () => tap(precognitiveForm, () => withAllErrors.current = true),
      setValidationTimeout: (duration) => tap(precognitiveForm, () => {
        var _a;
        return (_a = validatorRef.current) == null ? void 0 : _a.setTimeout(duration);
      }),
      validateFiles: () => tap(precognitiveForm, () => {
        var _a;
        return (_a = validatorRef.current) == null ? void 0 : _a.validateFiles();
      }),
      validate,
      setErrors: (errors2) => tap(precognitiveForm, () => form.setError(errors2)),
      forgetError: (field) => tap(
        precognitiveForm,
        () => form.clearErrors(resolveName(field))
      )
    });
    return precognitiveForm;
  };
  form.withPrecognition = withPrecognition;
  return precognitionEndpoint.current ? form.withPrecognition(precognitionEndpoint.current) : form;
}
var deferStateUpdate = (callback) => {
  typeof G.startTransition === "function" ? G.startTransition(callback) : setTimeout(callback, 0);
};
var noop = () => void 0;
var FormContext = reactExports.createContext(void 0);
var Form = reactExports.forwardRef(
  ({
    action = "",
    method = "get",
    headers = {},
    queryStringArrayFormat = "brackets",
    errorBag = null,
    showProgress = true,
    transform = (data) => data,
    options = {},
    onStart = noop,
    onProgress = noop,
    onFinish = noop,
    onBefore = noop,
    onCancel = noop,
    onSuccess = noop,
    onError = noop,
    onCancelToken = noop,
    onSubmitComplete = noop,
    disableWhileProcessing = false,
    resetOnError = false,
    resetOnSuccess = false,
    setDefaultsOnSuccess = false,
    invalidateCacheTags = [],
    validateFiles = false,
    validationTimeout = 1500,
    withAllErrors = null,
    children,
    ...props
  }, ref2) => {
    const getTransformedData = () => {
      const [_url, data] = getUrlAndData();
      return transform(data);
    };
    const form = useForm({}).withPrecognition(
      () => resolvedMethod,
      () => getUrlAndData()[0]
    ).setValidationTimeout(validationTimeout);
    if (validateFiles) {
      form.validateFiles();
    }
    if (withAllErrors ?? config$1.get("form.withAllErrors")) {
      form.withAllErrors();
    }
    form.transform(getTransformedData);
    const formElement = reactExports.useRef(void 0);
    const resolvedMethod = reactExports.useMemo(() => {
      return isUrlMethodPair(action) ? action.method : method.toLowerCase();
    }, [action, method]);
    const [isDirty, setIsDirty] = reactExports.useState(false);
    const defaultData = reactExports.useRef(new FormData());
    const getFormData = (submitter) => new FormData(formElement.current, submitter);
    const getData = (submitter) => formDataToObject(getFormData(submitter));
    const getUrlAndData = (submitter) => {
      return mergeDataIntoQueryString(
        resolvedMethod,
        isUrlMethodPair(action) ? action.url : action,
        getData(submitter),
        queryStringArrayFormat
      );
    };
    const updateDirtyState = (event) => {
      var _a;
      if (event.type === "reset" && ((_a = event.detail) == null ? void 0 : _a[FormComponentResetSymbol])) {
        event.preventDefault();
      }
      deferStateUpdate(
        () => setIsDirty(event.type === "reset" ? false : !isEqual(getData(), formDataToObject(defaultData.current)))
      );
    };
    const clearErrors = (...names) => {
      form.clearErrors(...names);
      return form;
    };
    reactExports.useEffect(() => {
      defaultData.current = getFormData();
      form.setDefaults(getData());
      const formEvents = ["input", "change", "reset"];
      formEvents.forEach((e) => formElement.current.addEventListener(e, updateDirtyState));
      return () => {
        formEvents.forEach((e) => {
          var _a;
          return (_a = formElement.current) == null ? void 0 : _a.removeEventListener(e, updateDirtyState);
        });
      };
    }, []);
    reactExports.useEffect(() => {
      form.setValidationTimeout(validationTimeout);
    }, [validationTimeout]);
    reactExports.useEffect(() => {
      if (validateFiles) {
        form.validateFiles();
      } else {
        form.withoutFileValidation();
      }
    }, [validateFiles]);
    const reset = (...fields) => {
      if (formElement.current) {
        resetFormFields(formElement.current, defaultData.current, fields);
      }
      form.reset(...fields);
    };
    const resetAndClearErrors = (...fields) => {
      clearErrors(...fields);
      reset(...fields);
    };
    const maybeReset = (resetOption) => {
      if (!resetOption) {
        return;
      }
      if (resetOption === true) {
        reset();
      } else if (resetOption.length > 0) {
        reset(...resetOption);
      }
    };
    const submit = (submitter) => {
      const [url, data] = getUrlAndData(submitter);
      const formTarget = submitter == null ? void 0 : submitter.getAttribute("formtarget");
      if (formTarget === "_blank" && resolvedMethod === "get") {
        window.open(url, "_blank");
        return;
      }
      const submitOptions = {
        headers,
        queryStringArrayFormat,
        errorBag,
        showProgress,
        invalidateCacheTags,
        onCancelToken,
        onBefore,
        onStart,
        onProgress,
        onFinish,
        onCancel,
        onSuccess: (...args) => {
          onSuccess(...args);
          onSubmitComplete({
            reset,
            defaults: defaults2
          });
          maybeReset(resetOnSuccess);
          if (setDefaultsOnSuccess === true) {
            defaults2();
          }
        },
        onError(...args) {
          onError(...args);
          maybeReset(resetOnError);
        },
        ...options
      };
      form.transform(() => transform(data));
      form.submit(resolvedMethod, url, submitOptions);
      form.transform(getTransformedData);
    };
    const defaults2 = () => {
      defaultData.current = getFormData();
      setIsDirty(false);
    };
    const exposed = {
      errors: form.errors,
      hasErrors: form.hasErrors,
      processing: form.processing,
      progress: form.progress,
      wasSuccessful: form.wasSuccessful,
      recentlySuccessful: form.recentlySuccessful,
      isDirty,
      clearErrors,
      resetAndClearErrors,
      setError: form.setError,
      reset,
      submit,
      defaults: defaults2,
      getData,
      getFormData,
      // Precognition
      validator: () => form.validator(),
      validating: form.validating,
      valid: form.valid,
      invalid: form.invalid,
      validate: (field, config3) => form.validate(...UseFormUtils.mergeHeadersForValidation(field, config3, headers)),
      touch: form.touch,
      touched: form.touched
    };
    reactExports.useImperativeHandle(ref2, () => exposed, [form, isDirty, submit]);
    const formNode = reactExports.createElement(
      "form",
      {
        ...props,
        ref: formElement,
        action: isUrlMethodPair(action) ? action.url : action,
        method: resolvedMethod,
        onSubmit: (event) => {
          event.preventDefault();
          submit(event.nativeEvent.submitter);
        },
        // React 19 supports passing a boolean to the `inert` attribute, but shows
        // a warning when receiving a string. Earlier versions require the string 'true'.
        // See: https://github.com/inertiajs/inertia/pull/2536
        inert: disableWhileProcessing && form.processing && (isReact19 ? true : "true")
      },
      typeof children === "function" ? children(exposed) : children
    );
    return reactExports.createElement(FormContext.Provider, { value: exposed }, formNode);
  }
);
Form.displayName = "InertiaForm";
var Head = function({ children, title }) {
  const headManager = reactExports.useContext(HeadContext_default);
  const provider = reactExports.useMemo(() => headManager.createProvider(), [headManager]);
  const isServer3 = typeof window === "undefined";
  reactExports.useEffect(() => {
    provider.reconnect();
    provider.update(renderNodes(children));
    return () => {
      provider.disconnect();
    };
  }, [provider, children, title]);
  function isUnaryTag(node) {
    return typeof node.type === "string" && [
      "area",
      "base",
      "br",
      "col",
      "embed",
      "hr",
      "img",
      "input",
      "keygen",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr"
    ].indexOf(node.type) > -1;
  }
  function renderTagStart(node) {
    const attrs = Object.keys(node.props).reduce((carry, name) => {
      if (["head-key", "children", "dangerouslySetInnerHTML"].includes(name)) {
        return carry;
      }
      const value = String(node.props[name]);
      if (value === "") {
        return carry + ` ${name}`;
      }
      return carry + ` ${name}="${escape$1(value)}"`;
    }, "");
    return `<${String(node.type)}${attrs}>`;
  }
  function renderTagChildren(node) {
    const { children: children2 } = node.props;
    if (typeof children2 === "string") {
      return children2;
    }
    if (Array.isArray(children2)) {
      return children2.reduce((html, child) => html + renderTag(child), "");
    }
    return "";
  }
  function renderTag(node) {
    let html = renderTagStart(node);
    if (node.props.children) {
      html += renderTagChildren(node);
    }
    if (node.props.dangerouslySetInnerHTML) {
      html += node.props.dangerouslySetInnerHTML.__html;
    }
    if (!isUnaryTag(node)) {
      html += `</${String(node.type)}>`;
    }
    return html;
  }
  function ensureNodeHasInertiaProp(node) {
    return G.cloneElement(node, {
      [provider.preferredAttribute()]: node.props["head-key"] !== void 0 ? node.props["head-key"] : ""
    });
  }
  function renderNode(node) {
    return renderTag(ensureNodeHasInertiaProp(node));
  }
  function renderNodes(nodes) {
    const elements = G.Children.toArray(nodes).filter((node) => node).map((node) => renderNode(node));
    if (title && !elements.find((tag) => tag.startsWith("<title"))) {
      elements.push(`<title ${provider.preferredAttribute()}>${title}</title>`);
    }
    return elements;
  }
  if (isServer3) {
    provider.update(renderNodes(children));
  }
  return null;
};
var Head_default = Head;
var resolveHTMLElement = (value, fallback) => {
  if (!value) {
    return fallback;
  }
  if (value && typeof value === "object" && "current" in value) {
    return value.current;
  }
  if (typeof value === "string") {
    return document.querySelector(value);
  }
  return fallback;
};
var renderSlot = (slotContent, slotProps, fallback = null) => {
  if (!slotContent) {
    return fallback;
  }
  return typeof slotContent === "function" ? slotContent(slotProps) : slotContent;
};
var InfiniteScroll = reactExports.forwardRef(
  ({
    data,
    buffer = 0,
    as = "div",
    manual = false,
    manualAfter = 0,
    preserveUrl = false,
    reverse = false,
    autoScroll,
    children,
    startElement,
    endElement,
    itemsElement,
    previous,
    next,
    loading,
    onlyNext = false,
    onlyPrevious = false,
    ...props
  }, ref2) => {
    const [startElementFromRef, setStartElementFromRef] = reactExports.useState(null);
    const startElementRef = reactExports.useCallback((node) => setStartElementFromRef(node), []);
    const [endElementFromRef, setEndElementFromRef] = reactExports.useState(null);
    const endElementRef = reactExports.useCallback((node) => setEndElementFromRef(node), []);
    const [itemsElementFromRef, setItemsElementFromRef] = reactExports.useState(null);
    const itemsElementRef = reactExports.useCallback((node) => setItemsElementFromRef(node), []);
    const [loadingPrevious, setLoadingPrevious] = reactExports.useState(false);
    const [loadingNext, setLoadingNext] = reactExports.useState(false);
    const [requestCount, setRequestCount] = reactExports.useState(0);
    const [hasPreviousPage, setHasPreviousPage] = reactExports.useState(false);
    const [hasNextPage, setHasNextPage] = reactExports.useState(false);
    const [resolvedStartElement, setResolvedStartElement] = reactExports.useState(null);
    const [resolvedEndElement, setResolvedEndElement] = reactExports.useState(null);
    const [resolvedItemsElement, setResolvedItemsElement] = reactExports.useState(null);
    reactExports.useEffect(() => {
      const element = startElement ? resolveHTMLElement(startElement, startElementFromRef) : startElementFromRef;
      setResolvedStartElement(element);
    }, [startElement, startElementFromRef]);
    reactExports.useEffect(() => {
      const element = endElement ? resolveHTMLElement(endElement, endElementFromRef) : endElementFromRef;
      setResolvedEndElement(element);
    }, [endElement, endElementFromRef]);
    reactExports.useEffect(() => {
      const element = itemsElement ? resolveHTMLElement(itemsElement, itemsElementFromRef) : itemsElementFromRef;
      setResolvedItemsElement(element);
    }, [itemsElement, itemsElementFromRef]);
    const scrollableParent = reactExports.useMemo(() => getScrollableParent(resolvedItemsElement), [resolvedItemsElement]);
    const callbackPropsRef = reactExports.useRef({
      buffer,
      onlyNext,
      onlyPrevious,
      reverse,
      preserveUrl
    });
    callbackPropsRef.current = {
      buffer,
      onlyNext,
      onlyPrevious,
      reverse,
      preserveUrl
    };
    const [infiniteScroll, setInfiniteScroll] = reactExports.useState(null);
    const dataManager = reactExports.useMemo(() => infiniteScroll == null ? void 0 : infiniteScroll.dataManager, [infiniteScroll]);
    const elementManager = reactExports.useMemo(() => infiniteScroll == null ? void 0 : infiniteScroll.elementManager, [infiniteScroll]);
    const scrollToBottom = reactExports.useCallback(() => {
      if (scrollableParent) {
        scrollableParent.scrollTo({
          top: scrollableParent.scrollHeight,
          behavior: "instant"
        });
      } else {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "instant"
        });
      }
    }, [scrollableParent]);
    reactExports.useEffect(() => {
      if (!resolvedItemsElement) {
        return;
      }
      function syncStateFromDataManager() {
        setRequestCount(infiniteScrollInstance.dataManager.getRequestCount());
        setHasPreviousPage(infiniteScrollInstance.dataManager.hasPrevious());
        setHasNextPage(infiniteScrollInstance.dataManager.hasNext());
      }
      const infiniteScrollInstance = useInfiniteScroll({
        // Data
        getPropName: () => data,
        inReverseMode: () => callbackPropsRef.current.reverse,
        shouldFetchNext: () => !callbackPropsRef.current.onlyPrevious,
        shouldFetchPrevious: () => !callbackPropsRef.current.onlyNext,
        shouldPreserveUrl: () => callbackPropsRef.current.preserveUrl,
        // Elements
        getTriggerMargin: () => callbackPropsRef.current.buffer,
        getStartElement: () => resolvedStartElement,
        getEndElement: () => resolvedEndElement,
        getItemsElement: () => resolvedItemsElement,
        getScrollableParent: () => scrollableParent,
        // Callbacks
        onBeforePreviousRequest: () => setLoadingPrevious(true),
        onBeforeNextRequest: () => setLoadingNext(true),
        onCompletePreviousRequest: () => {
          setLoadingPrevious(false);
          syncStateFromDataManager();
        },
        onCompleteNextRequest: () => {
          setLoadingNext(false);
          syncStateFromDataManager();
        },
        onDataReset: syncStateFromDataManager
      });
      setInfiniteScroll(infiniteScrollInstance);
      const { dataManager: dataManager2, elementManager: elementManager2 } = infiniteScrollInstance;
      syncStateFromDataManager();
      elementManager2.setupObservers();
      elementManager2.processServerLoadedElements(dataManager2.getLastLoadedPage());
      if (autoLoad) {
        elementManager2.enableTriggers();
      }
      return () => {
        infiniteScrollInstance.flush();
        setInfiniteScroll(null);
      };
    }, [data, resolvedItemsElement, resolvedStartElement, resolvedEndElement, scrollableParent]);
    const manualMode = reactExports.useMemo(
      () => manual || manualAfter > 0 && requestCount >= manualAfter,
      [manual, manualAfter, requestCount]
    );
    const autoLoad = reactExports.useMemo(() => !manualMode, [manualMode]);
    reactExports.useEffect(() => {
      autoLoad ? elementManager == null ? void 0 : elementManager.enableTriggers() : elementManager == null ? void 0 : elementManager.disableTriggers();
    }, [autoLoad, onlyNext, onlyPrevious, resolvedStartElement, resolvedEndElement]);
    reactExports.useEffect(() => {
      const shouldAutoScroll = autoScroll !== void 0 ? autoScroll : reverse;
      if (shouldAutoScroll) {
        scrollToBottom();
      }
    }, [scrollableParent]);
    reactExports.useImperativeHandle(
      ref2,
      () => ({
        fetchNext: (dataManager == null ? void 0 : dataManager.fetchNext) || (() => {
        }),
        fetchPrevious: (dataManager == null ? void 0 : dataManager.fetchPrevious) || (() => {
        }),
        hasPrevious: (dataManager == null ? void 0 : dataManager.hasPrevious) || (() => false),
        hasNext: (dataManager == null ? void 0 : dataManager.hasNext) || (() => false)
      }),
      [dataManager]
    );
    const headerAutoMode = autoLoad && !onlyNext;
    const footerAutoMode = autoLoad && !onlyPrevious;
    const sharedExposed = {
      loadingPrevious,
      loadingNext,
      hasPrevious: hasPreviousPage,
      hasNext: hasNextPage
    };
    const exposedPrevious = {
      loading: loadingPrevious,
      fetch: (dataManager == null ? void 0 : dataManager.fetchPrevious) ?? (() => {
      }),
      autoMode: headerAutoMode,
      manualMode: !headerAutoMode,
      hasMore: hasPreviousPage,
      ...sharedExposed
    };
    const exposedNext = {
      loading: loadingNext,
      fetch: (dataManager == null ? void 0 : dataManager.fetchNext) ?? (() => {
      }),
      autoMode: footerAutoMode,
      manualMode: !footerAutoMode,
      hasMore: hasNextPage,
      ...sharedExposed
    };
    const exposedSlot = {
      loading: loadingPrevious || loadingNext,
      loadingPrevious,
      loadingNext
    };
    const renderElements = [];
    if (!startElement) {
      renderElements.push(
        reactExports.createElement(
          "div",
          { ref: startElementRef },
          // Render previous slot or fallback to loading indicator
          renderSlot(previous, exposedPrevious, loadingPrevious ? renderSlot(loading, exposedPrevious) : null)
        )
      );
    }
    renderElements.push(
      reactExports.createElement(
        as,
        { ...props, ref: itemsElementRef },
        typeof children === "function" ? children(exposedSlot) : children
      )
    );
    if (!endElement) {
      renderElements.push(
        reactExports.createElement(
          "div",
          { ref: endElementRef },
          // Render next slot or fallback to loading indicator
          renderSlot(next, exposedNext, loadingNext ? renderSlot(loading, exposedNext) : null)
        )
      );
    }
    return reactExports.createElement(G.Fragment, {}, ...reverse ? [...renderElements].reverse() : renderElements);
  }
);
InfiniteScroll.displayName = "InertiaInfiniteScroll";
var noop2 = () => void 0;
var Link = reactExports.forwardRef(
  ({
    children,
    as = "a",
    data = {},
    href = "",
    method = "get",
    preserveScroll = false,
    preserveState = null,
    preserveUrl = false,
    replace = false,
    only = [],
    except = [],
    headers = {},
    queryStringArrayFormat = "brackets",
    async = false,
    onClick = noop2,
    onCancelToken = noop2,
    onBefore = noop2,
    onStart = noop2,
    onProgress = noop2,
    onFinish = noop2,
    onCancel = noop2,
    onSuccess = noop2,
    onError = noop2,
    onPrefetching = noop2,
    onPrefetched = noop2,
    prefetch = false,
    cacheFor = 0,
    cacheTags = [],
    viewTransition = false,
    ...props
  }, ref2) => {
    const [inFlightCount, setInFlightCount] = reactExports.useState(0);
    const hoverTimeout = reactExports.useRef(void 0);
    const _method = reactExports.useMemo(() => {
      return isUrlMethodPair(href) ? href.method : method.toLowerCase();
    }, [href, method]);
    const _as = reactExports.useMemo(() => {
      if (typeof as !== "string" || as.toLowerCase() !== "a") {
        return as;
      }
      return _method !== "get" ? "button" : as.toLowerCase();
    }, [as, _method]);
    const mergeDataArray = reactExports.useMemo(
      () => mergeDataIntoQueryString(_method, isUrlMethodPair(href) ? href.url : href, data, queryStringArrayFormat),
      [href, _method, data, queryStringArrayFormat]
    );
    const url = reactExports.useMemo(() => mergeDataArray[0], [mergeDataArray]);
    const _data = reactExports.useMemo(() => mergeDataArray[1], [mergeDataArray]);
    const baseParams = reactExports.useMemo(
      () => ({
        data: _data,
        method: _method,
        preserveScroll,
        preserveState: preserveState ?? _method !== "get",
        preserveUrl,
        replace,
        only,
        except,
        headers,
        async
      }),
      [_data, _method, preserveScroll, preserveState, preserveUrl, replace, only, except, headers, async]
    );
    const visitParams = reactExports.useMemo(
      () => ({
        ...baseParams,
        viewTransition,
        onCancelToken,
        onBefore,
        onStart(visit) {
          setInFlightCount((count) => count + 1);
          onStart(visit);
        },
        onProgress,
        onFinish(visit) {
          setInFlightCount((count) => count - 1);
          onFinish(visit);
        },
        onCancel,
        onSuccess,
        onError
      }),
      [
        baseParams,
        viewTransition,
        onCancelToken,
        onBefore,
        onStart,
        onProgress,
        onFinish,
        onCancel,
        onSuccess,
        onError
      ]
    );
    const prefetchModes = reactExports.useMemo(
      () => {
        if (prefetch === true) {
          return ["hover"];
        }
        if (prefetch === false) {
          return [];
        }
        if (Array.isArray(prefetch)) {
          return prefetch;
        }
        return [prefetch];
      },
      Array.isArray(prefetch) ? prefetch : [prefetch]
    );
    const cacheForValue = reactExports.useMemo(() => {
      if (cacheFor !== 0) {
        return cacheFor;
      }
      if (prefetchModes.length === 1 && prefetchModes[0] === "click") {
        return 0;
      }
      return config.get("prefetch.cacheFor");
    }, [cacheFor, prefetchModes]);
    const doPrefetch = reactExports.useMemo(() => {
      return () => {
        router.prefetch(
          url,
          {
            ...baseParams,
            onPrefetching,
            onPrefetched
          },
          { cacheFor: cacheForValue, cacheTags }
        );
      };
    }, [url, baseParams, onPrefetching, onPrefetched, cacheForValue, cacheTags]);
    reactExports.useEffect(() => {
      return () => {
        clearTimeout(hoverTimeout.current);
      };
    }, []);
    reactExports.useEffect(() => {
      if (prefetchModes.includes("mount")) {
        setTimeout(() => doPrefetch());
      }
    }, prefetchModes);
    const regularEvents = {
      onClick: (event) => {
        onClick(event);
        if (shouldIntercept(event)) {
          event.preventDefault();
          router.visit(url, visitParams);
        }
      }
    };
    const prefetchHoverEvents = {
      onMouseEnter: () => {
        hoverTimeout.current = window.setTimeout(() => {
          doPrefetch();
        }, config.get("prefetch.hoverDelay"));
      },
      onMouseLeave: () => {
        clearTimeout(hoverTimeout.current);
      },
      onClick: regularEvents.onClick
    };
    const prefetchClickEvents = {
      onMouseDown: (event) => {
        if (shouldIntercept(event)) {
          event.preventDefault();
          doPrefetch();
        }
      },
      onKeyDown: (event) => {
        if (shouldNavigate(event)) {
          event.preventDefault();
          doPrefetch();
        }
      },
      onMouseUp: (event) => {
        if (shouldIntercept(event)) {
          event.preventDefault();
          router.visit(url, visitParams);
        }
      },
      onKeyUp: (event) => {
        if (shouldNavigate(event)) {
          event.preventDefault();
          router.visit(url, visitParams);
        }
      },
      onClick: (event) => {
        onClick(event);
        if (shouldIntercept(event)) {
          event.preventDefault();
        }
      }
    };
    const elProps = reactExports.useMemo(() => {
      if (_as === "button") {
        return { type: "button" };
      }
      if (_as === "a" || typeof _as !== "string") {
        return { href: url };
      }
      return {};
    }, [_as, url]);
    return reactExports.createElement(
      _as,
      {
        ...props,
        ...elProps,
        ref: ref2,
        ...(() => {
          if (prefetchModes.includes("hover")) {
            return prefetchHoverEvents;
          }
          if (prefetchModes.includes("click")) {
            return prefetchClickEvents;
          }
          return regularEvents;
        })(),
        "data-loading": inFlightCount > 0 ? "" : void 0
      },
      children
    );
  }
);
Link.displayName = "InertiaLink";
var Link_default = Link;
var router3 = router;
var config = config$1.extend();
async function resolvePageComponent(path, pages) {
  for (const p2 of Array.isArray(path) ? path : [path]) {
    const page2 = pages[p2];
    if (typeof page2 === "undefined") {
      continue;
    }
    return typeof page2 === "function" ? page2() : page2;
  }
  throw new Error(`Page not found: ${path}`);
}
var client = {};
var hasRequiredClient;
function requireClient() {
  if (hasRequiredClient) return client;
  hasRequiredClient = 1;
  var m2 = requireReactDom();
  {
    client.createRoot = m2.createRoot;
    client.hydrateRoot = m2.hydrateRoot;
  }
  return client;
}
var clientExports = requireClient();
const appName = "Laravel";
createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(
    `./Pages/${name}.jsx`,
    /* @__PURE__ */ Object.assign({ "./Pages/Auth/ConfirmPassword.jsx": () => __vitePreload(() => import("./ConfirmPassword-DySyLK4I.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0), "./Pages/Auth/ForgotPassword.jsx": () => __vitePreload(() => import("./ForgotPassword-CwydMZyS.js"), true ? __vite__mapDeps([5,1,3,4]) : void 0), "./Pages/Auth/Login.jsx": () => __vitePreload(() => import("./Login-p3zyiv25.js"), true ? __vite__mapDeps([6,1,2,3,4]) : void 0), "./Pages/Auth/Register.jsx": () => __vitePreload(() => import("./Register-T8yK-OMV.js"), true ? __vite__mapDeps([7,1,2,3,4]) : void 0), "./Pages/Auth/ResetPassword.jsx": () => __vitePreload(() => import("./ResetPassword-DcqMUh0v.js"), true ? __vite__mapDeps([8,1,2,3,4]) : void 0), "./Pages/Auth/VerifyEmail.jsx": () => __vitePreload(() => import("./VerifyEmail-BVijtl4N.js"), true ? __vite__mapDeps([9,3,4]) : void 0), "./Pages/CRM/Index.jsx": () => __vitePreload(() => import("./Index-LhmlgYyr.js"), true ? __vite__mapDeps([10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]) : void 0), "./Pages/CRM/Tabs/ConfiguracoesFunil.jsx": () => __vitePreload(() => import("./ConfiguracoesFunil-Cc6Ohn37.js").then((n) => n.a), true ? __vite__mapDeps([26,17,14,27,28,20,29,30]) : void 0), "./Pages/CRM/Tabs/Contatos.jsx": () => __vitePreload(() => import("./Contatos-BY6uel2p.js"), true ? __vite__mapDeps([33,13,14,31,34,27,15,32,24]) : void 0), "./Pages/Catalog/Index.jsx": () => __vitePreload(() => import("./Index-Ct8Rdep7.js"), true ? __vite__mapDeps([35,11,12,13,14,15,16,17,18,19,36,27,31,29,30,37,28,20]) : void 0), "./Pages/Dashboard.jsx": () => __vitePreload(() => import("./Dashboard-CxDRyBuT.js"), true ? __vite__mapDeps([38,11,12,13,14,15,16,17,18,19]) : void 0), "./Pages/Inbox/Index.jsx": () => __vitePreload(() => import("./Index-D8Ebyj_T.js"), true ? __vite__mapDeps([39,11,12,13,14,15,16,17,18,19,22,20,23,24,40,41,37,42,29,43]) : void 0), "./Pages/Profile/Edit.jsx": () => __vitePreload(() => import("./Edit-1QqxX7NQ.js"), true ? __vite__mapDeps([44,11,12,13,14,15,16,17,18,19,45,1,2,46,3,47]) : void 0), "./Pages/Profile/Partials/DeleteUserForm.jsx": () => __vitePreload(() => import("./DeleteUserForm-DDmBwmgy.js"), true ? __vite__mapDeps([45,1,2,12]) : void 0), "./Pages/Profile/Partials/UpdatePasswordForm.jsx": () => __vitePreload(() => import("./UpdatePasswordForm-Bjo3s6uC.js"), true ? __vite__mapDeps([46,1,2,3,12]) : void 0), "./Pages/Profile/Partials/UpdateProfileInformationForm.jsx": () => __vitePreload(() => import("./UpdateProfileInformationForm-RoIPjr-L.js"), true ? __vite__mapDeps([47,1,2,3,12]) : void 0), "./Pages/Reports/Index.jsx": () => __vitePreload(() => import("./Index-D_XcNe8N.js"), true ? __vite__mapDeps([48,11,12,13,14,15,16,17,18,19,25,49,50,51,34,41,52]) : void 0), "./Pages/Settings/Automations.jsx": () => __vitePreload(() => import("./Automations-JUmGW_Md.js"), true ? __vite__mapDeps([53,40,14,27,49,19,28]) : void 0), "./Pages/Settings/CustomFields.jsx": () => __vitePreload(() => import("./CustomFields-DdNH3pc4.js").then((n) => n.a), true ? __vite__mapDeps([54,14,27,18,43,55,28,20,56]) : void 0), "./Pages/Settings/General.jsx": () => __vitePreload(() => import("./General-DsiBxNZn.js"), true ? __vite__mapDeps([57,58,14,59,36,56]) : void 0), "./Pages/Settings/Index.jsx": () => __vitePreload(() => import("./Index-BAFPI2oX.js"), true ? __vite__mapDeps([60,11,12,13,14,15,16,17,18,19,53,40,27,49,28,61,24,56,52,54,43,55,20,62,59,63,37,29,57,58,36,50]) : void 0), "./Pages/Settings/Organization.jsx": () => __vitePreload(() => import("./Organization-C2mIHFQ6.js").then((n) => n.a), true ? __vite__mapDeps([63,14,16,27,37,28,20,29]) : void 0), "./Pages/Settings/Profile.jsx": () => __vitePreload(() => import("./Profile-Csbz0CBQ.js"), true ? __vite__mapDeps([61,14,24,56,52]) : void 0), "./Pages/Settings/QuickReplies.jsx": () => __vitePreload(() => import("./QuickReplies-C1MHv492.js").then((n) => n.a), true ? __vite__mapDeps([62,14,27,13,59,24,55,28,56]) : void 0), "./Pages/Tasks/Index.jsx": () => __vitePreload(() => import("./Index-B1xqa1eu.js"), true ? __vite__mapDeps([64,11,12,13,14,15,16,17,18,19,20,23,58,24,51,30,21,27,42]) : void 0), "./Pages/Welcome.jsx": () => __vitePreload(() => import("./Welcome-BDTFaz3l.js"), true ? [] : void 0) })
  ),
  setup({ el, App: App2, props }) {
    const root2 = clientExports.createRoot(el);
    root2.render(/* @__PURE__ */ jsxRuntimeExports.jsx(App2, { ...props }));
  },
  progress: {
    color: "#4B5563"
  }
});
export {
  G,
  Head_default as H,
  Link_default as L,
  axios$1 as a,
  router3 as b,
  usePage as c,
  requireReact as d,
  reactDomExports as e,
  jsxRuntimeExports as j,
  reactExports as r,
  t,
  useForm as u
};
