var f;
window.Yd = !0;
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var aa = aa || {}, k = this, l = function(a) {
  return void 0 !== a;
}, n = function(a, b, c) {
  a = a.split(".");
  c = c || k;
  a[0] in c || !c.execScript || c.execScript("var " + a[0]);
  for (var d;a.length && (d = a.shift());) {
    !a.length && l(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {};
  }
}, ba = function(a, b) {
  for (var c = a.split("."), d = b || k, e;e = c.shift();) {
    if (null != d[e]) {
      d = d[e];
    } else {
      return null;
    }
  }
  return d;
}, ca = function() {
}, da = function(a) {
  a.X = function() {
    return a.Sb ? a.Sb : a.Sb = new a;
  };
}, p = function(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}, ea = function(a) {
  var b = p(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}, q = function(a) {
  return "string" == typeof a;
}, fa = function(a) {
  return "boolean" == typeof a;
}, r = function(a) {
  return "function" == p(a);
}, ga = function(a, b, c) {
  return a.call.apply(a.bind, arguments);
}, ha = function(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}, s = function(a, b, c) {
  s = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ga : ha;
  return s.apply(null, arguments);
}, t = function(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
}, ia = Date.now || function() {
  return+new Date;
}, u = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.Qb = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.Xd = function(a, c, g) {
    return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
};
Function.prototype.bind = Function.prototype.bind || function(a, b) {
  if (1 < arguments.length) {
    var c = Array.prototype.slice.call(arguments, 1);
    c.unshift(this, a);
    return s.apply(null, c);
  }
  return s(this, a);
};
var v = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, v);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
};
u(v, Error);
v.prototype.name = "CustomError";
var ja = function(a, b) {
  for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1);e.length && 1 < c.length;) {
    d += c.shift() + e.shift();
  }
  return d + c.join("%s");
}, ra = function(a, b) {
  if (b) {
    a = a.replace(ka, "&amp;").replace(la, "&lt;").replace(ma, "&gt;").replace(na, "&quot;").replace(oa, "&#39;").replace(pa, "&#0;");
  } else {
    if (!qa.test(a)) {
      return a;
    }
    -1 != a.indexOf("&") && (a = a.replace(ka, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(la, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(ma, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(na, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(oa, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(pa, "&#0;"));
  }
  return a;
}, ka = /&/g, la = /</g, ma = />/g, na = /"/g, oa = /'/g, pa = /\x00/g, qa = /[\x00&<>"']/, w = function(a, b) {
  for (var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(d.length, e.length), h = 0;0 == c && h < g;h++) {
    var m = d[h] || "", M = e[h] || "", wa = RegExp("(\\d*)(\\D*)", "g"), tc = RegExp("(\\d*)(\\D*)", "g");
    do {
      var R = wa.exec(m) || ["", "", ""], S = tc.exec(M) || ["", "", ""];
      if (0 == R[0].length && 0 == S[0].length) {
        break;
      }
      c = sa(0 == R[1].length ? 0 : parseInt(R[1], 10), 0 == S[1].length ? 0 : parseInt(S[1], 10)) || sa(0 == R[2].length, 0 == S[2].length) || sa(R[2], S[2]);
    } while (0 == c);
  }
  return c;
}, sa = function(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
};
var ta = function(a, b) {
  b.unshift(a);
  v.call(this, ja.apply(null, b));
  b.shift();
};
u(ta, v);
ta.prototype.name = "AssertionError";
var ua = function(a, b, c, d) {
  var e = "Assertion failed";
  if (c) {
    var e = e + (": " + c), g = d
  } else {
    a && (e += ": " + a, g = b);
  }
  throw new ta("" + e, g || []);
}, x = function(a, b, c) {
  a || ua("", null, b, Array.prototype.slice.call(arguments, 2));
  return a;
}, va = function(a, b) {
  throw new ta("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}, xa = function(a, b, c) {
  r(a) || ua("Expected function but got %s: %s.", [p(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
var y = Array.prototype, z = y.indexOf ? function(a, b, c) {
  x(null != a.length);
  return y.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (q(a)) {
    return q(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, ya = y.forEach ? function(a, b, c) {
  x(null != a.length);
  y.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = q(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a);
  }
}, za = function(a, b, c) {
  var d = 0;
  ya(a, function(a, g, h) {
    b.call(c, a, g, h) && ++d;
  }, c);
  return d;
}, A = function(a, b, c) {
  t: {
    for (var d = a.length, e = q(a) ? a.split("") : a, g = 0;g < d;g++) {
      if (g in e && b.call(c, e[g], g, a)) {
        b = g;
        break t;
      }
    }
    b = -1;
  }
  return 0 > b ? null : q(a) ? a.charAt(b) : a[b];
}, Ba = function(a, b) {
  var c = z(a, b), d;
  (d = 0 <= c) && Aa(a, c);
  return d;
}, Aa = function(a, b) {
  x(null != a.length);
  return 1 == y.splice.call(a, b, 1).length;
}, Ca = function(a, b, c) {
  x(null != a.length);
  return 2 >= arguments.length ? y.slice.call(a, b) : y.slice.call(a, b, c);
}, Ea = function(a, b) {
  a.sort(b || Da);
}, Da = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
};
var B;
t: {
  var Fa = k.navigator;
  if (Fa) {
    var Ga = Fa.userAgent;
    if (Ga) {
      B = Ga;
      break t;
    }
  }
  B = "";
}
;var Ha = -1 != B.indexOf("Opera") || -1 != B.indexOf("OPR"), C = -1 != B.indexOf("Trident") || -1 != B.indexOf("MSIE"), Ia = -1 != B.indexOf("Gecko") && -1 == B.toLowerCase().indexOf("webkit") && !(-1 != B.indexOf("Trident") || -1 != B.indexOf("MSIE")), D = -1 != B.toLowerCase().indexOf("webkit"), Ja = function() {
  var a = k.document;
  return a ? a.documentMode : void 0;
}, Ka = function() {
  var a = "", b;
  if (Ha && k.opera) {
    return a = k.opera.version, r(a) ? a() : a;
  }
  Ia ? b = /rv\:([^\);]+)(\)|;)/ : C ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : D && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(B)) ? a[1] : "");
  return C && (b = Ja(), b > parseFloat(a)) ? String(b) : a;
}(), La = {}, E = function(a) {
  return La[a] || (La[a] = 0 <= w(Ka, a));
}, Ma = k.document, Na = Ma && C ? Ja() || ("CSS1Compat" == Ma.compatMode ? parseInt(Ka, 10) : 5) : void 0;
var Oa, Pa, Qa, Ra, Sa, Ta, Ua;
Ua = Ta = Sa = Ra = Qa = Pa = Oa = !1;
var F = B;
F && (-1 != F.indexOf("Firefox") ? Oa = !0 : -1 != F.indexOf("Camino") ? Pa = !0 : -1 != F.indexOf("iPhone") || -1 != F.indexOf("iPod") ? Qa = !0 : -1 != F.indexOf("iPad") ? Ra = !0 : -1 != F.indexOf("Chrome") ? Ta = !0 : -1 != F.indexOf("Android") ? Sa = !0 : -1 != F.indexOf("Safari") && (Ua = !0));
var Va = Oa, Wa = Pa, Xa = Qa, Ya = Ra, Za = Sa, $a = Ta, ab = Ua;
var G = function(a) {
  return(a = a.exec(B)) ? a[1] : "";
}, bb = function() {
  if (Va) {
    return G(/Firefox\/([0-9.]+)/);
  }
  if (C || Ha) {
    return Ka;
  }
  if ($a) {
    return G(/Chrome\/([0-9.]+)/);
  }
  if (ab) {
    return G(/Version\/([0-9.]+)/);
  }
  if (Xa || Ya) {
    var a;
    if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(B)) {
      return a[1] + "." + a[2];
    }
  } else {
    if (Za) {
      return(a = G(/Android\s+([0-9.]+)/)) ? a : G(/Version\/([0-9.]+)/);
    }
    if (Wa) {
      return G(/Camino\/([0-9.]+)/);
    }
  }
  return "";
}();
var cb = "undefined" != typeof chrome && !!chrome.mdns && !!chrome.cast && !!chrome.cast.channel && !!chrome.browserAction && !!chrome.browserAction.openPopup, db = function() {
  return l(chrome.runtime) ? chrome.runtime.id : "boadgeojelhgndaghljhdicfkmllpafd";
}, eb = "dliochdbjfkdbacpmhlcpmleaejidimm" === db(), fb = "boadgeojelhgndaghljhdicfkmllpafd" === db();
w(bb, 35);
var gb = !!chrome.cast && !!chrome.cast.streaming && 0 <= w(bb, 36);
var hb = "StopIteration" in k ? k.StopIteration : Error("StopIteration"), ib = function() {
};
ib.prototype.next = function() {
  throw hb;
};
ib.prototype.Md = function() {
  return this;
};
var jb = function(a, b, c) {
  for (var d in a) {
    if (b.call(c, a[d], d, a)) {
      return!0;
    }
  }
  return!1;
}, kb = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
}, lb = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
}, mb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), nb = function(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var g = 0;g < mb.length;g++) {
      c = mb[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
};
var H = function(a, b) {
  this.p = {};
  this.h = [];
  this.S = this.w = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1]);
    }
  } else {
    a && this.Dc(a);
  }
};
H.prototype.Fa = function() {
  return this.w;
};
H.prototype.qa = function() {
  this.T();
  for (var a = [], b = 0;b < this.h.length;b++) {
    a.push(this.p[this.h[b]]);
  }
  return a;
};
H.prototype.O = function() {
  this.T();
  return this.h.concat();
};
H.prototype.equals = function(a, b) {
  if (this === a) {
    return!0;
  }
  if (this.w != a.Fa()) {
    return!1;
  }
  var c = b || ob;
  this.T();
  for (var d, e = 0;d = this.h[e];e++) {
    if (!c(this.get(d), a.get(d))) {
      return!1;
    }
  }
  return!0;
};
var ob = function(a, b) {
  return a === b;
};
f = H.prototype;
f.clear = function() {
  this.p = {};
  this.S = this.w = this.h.length = 0;
};
f.remove = function(a) {
  return Object.prototype.hasOwnProperty.call(this.p, a) ? (delete this.p[a], this.w--, this.S++, this.h.length > 2 * this.w && this.T(), !0) : !1;
};
f.T = function() {
  if (this.w != this.h.length) {
    for (var a = 0, b = 0;a < this.h.length;) {
      var c = this.h[a];
      Object.prototype.hasOwnProperty.call(this.p, c) && (this.h[b++] = c);
      a++;
    }
    this.h.length = b;
  }
  if (this.w != this.h.length) {
    for (var d = {}, b = a = 0;a < this.h.length;) {
      c = this.h[a], Object.prototype.hasOwnProperty.call(d, c) || (this.h[b++] = c, d[c] = 1), a++;
    }
    this.h.length = b;
  }
};
f.get = function(a, b) {
  return Object.prototype.hasOwnProperty.call(this.p, a) ? this.p[a] : b;
};
f.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.p, a) || (this.w++, this.h.push(a), this.S++);
  this.p[a] = b;
};
f.Dc = function(a) {
  var b;
  a instanceof H ? (b = a.O(), a = a.qa()) : (b = lb(a), a = kb(a));
  for (var c = 0;c < b.length;c++) {
    this.set(b[c], a[c]);
  }
};
f.forEach = function(a, b) {
  for (var c = this.O(), d = 0;d < c.length;d++) {
    var e = c[d], g = this.get(e);
    a.call(b, g, e, this);
  }
};
f.clone = function() {
  return new H(this);
};
f.Md = function(a) {
  this.T();
  var b = 0, c = this.h, d = this.p, e = this.S, g = this, h = new ib;
  h.next = function() {
    for (;;) {
      if (e != g.S) {
        throw Error("The map has changed since the iterator was created");
      }
      if (b >= c.length) {
        throw hb;
      }
      var h = c[b++];
      return a ? h : d[h];
    }
  };
  return h;
};
var pb = function(a) {
  if ("function" == typeof a.qa) {
    return a.qa();
  }
  if (q(a)) {
    return a.split("");
  }
  if (ea(a)) {
    for (var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d]);
    }
    return b;
  }
  return kb(a);
}, qb = function(a, b, c) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, c);
  } else {
    if (ea(a) || q(a)) {
      ya(a, b, c);
    } else {
      var d;
      if ("function" == typeof a.O) {
        d = a.O();
      } else {
        if ("function" != typeof a.qa) {
          if (ea(a) || q(a)) {
            d = [];
            for (var e = a.length, g = 0;g < e;g++) {
              d.push(g);
            }
          } else {
            d = lb(a);
          }
        } else {
          d = void 0;
        }
      }
      for (var e = pb(a), g = e.length, h = 0;h < g;h++) {
        b.call(c, e[h], d && d[h], a);
      }
    }
  }
};
var sb = function(a, b) {
  try {
    var c;
    var d = ba("window.location.href");
    if (q(a)) {
      c = {message:a, name:"Unknown error", lineNumber:"Not available", fileName:d, stack:"Not available"};
    } else {
      var e, g, h = !1;
      try {
        e = a.lineNumber || a.Zd || "Not available";
      } catch (m) {
        e = "Not available", h = !0;
      }
      try {
        g = a.fileName || a.filename || a.sourceURL || k.$googDebugFname || d;
      } catch (M) {
        g = "Not available", h = !0;
      }
      c = !h && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {message:a.message || "Not available", name:a.name || "UnknownError", lineNumber:e, fileName:g, stack:a.stack || "Not available"};
    }
    return "Message: " + ra(c.message) + '\nUrl: <a href="view-source:' + c.fileName + '" target="_new">' + c.fileName + "</a>\nLine: " + c.lineNumber + "\n\nBrowser stack:\n" + ra(c.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + ra(rb(b) + "-> ");
  } catch (wa) {
    return "Exception trying to expose exception! You win, we lose. " + wa;
  }
}, rb = function(a) {
  var b;
  b || (b = tb(a || arguments.callee.caller, []));
  return b;
}, tb = function(a, b) {
  var c = [];
  if (0 <= z(b, a)) {
    c.push("[...circular reference...]");
  } else {
    if (a && 50 > b.length) {
      c.push(ub(a) + "(");
      for (var d = a.arguments, e = 0;d && e < d.length;e++) {
        0 < e && c.push(", ");
        var g;
        g = d[e];
        switch(typeof g) {
          case "object":
            g = g ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            g = String(g);
            break;
          case "boolean":
            g = g ? "true" : "false";
            break;
          case "function":
            g = (g = ub(g)) ? g : "[fn]";
            break;
          default:
            g = typeof g;
        }
        40 < g.length && (g = g.substr(0, 40) + "...");
        c.push(g);
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(tb(a.caller, b));
      } catch (h) {
        c.push("[exception trying to get caller]\n");
      }
    } else {
      a ? c.push("[...long stack...]") : c.push("[end]");
    }
  }
  return c.join("");
}, ub = function(a) {
  if (I[a]) {
    return I[a];
  }
  a = String(a);
  if (!I[a]) {
    var b = /function ([^\(]+)/.exec(a);
    I[a] = b ? b[1] : "[Anonymous]";
  }
  return I[a];
}, I = {};
var vb = function(a, b, c, d, e) {
  this.reset(a, b, c, d, e);
};
vb.prototype.Ja = null;
vb.prototype.Ia = null;
var wb = 0;
f = vb.prototype;
f.reset = function(a, b, c, d, e) {
  "number" == typeof e || wb++;
  this.cd = d || ia();
  this.C = a;
  this.ad = b;
  this.$c = c;
  delete this.Ja;
  delete this.Ia;
};
f.ub = function() {
  return this.$c;
};
f.Kc = function() {
  return this.Ja;
};
f.kd = function(a) {
  this.Ja = a;
};
f.Lc = function() {
  return this.Ia;
};
f.ld = function(a) {
  this.Ia = a;
};
f.Da = function() {
  return this.C;
};
f.ea = function(a) {
  this.C = a;
};
f.getMessage = function() {
  return this.ad;
};
f.Ab = function() {
  return this.cd;
};
var J = function(a) {
  this.yb = a;
  this.o = this.Ha = this.C = this.s = null;
}, K = function(a, b) {
  this.name = a;
  this.value = b;
};
K.prototype.toString = function() {
  return this.name;
};
var xb = new K("SHOUT", 1200), yb = new K("SEVERE", 1E3), zb = new K("WARNING", 900), Ab = new K("INFO", 800), Bb = new K("CONFIG", 700), Cb = new K("FINE", 500), Db = new K("FINER", 400);
f = J.prototype;
f.getName = function() {
  return this.yb;
};
f.gd = function(a) {
  this.o || (this.o = []);
  this.o.push(a);
};
f.jd = function(a) {
  var b = this.o;
  return!!b && Ba(b, a);
};
f.getParent = function() {
  return this.s;
};
f.getChildren = function() {
  this.Ha || (this.Ha = {});
  return this.Ha;
};
f.ea = function(a) {
  this.C = a;
};
f.Da = function() {
  return this.C;
};
f.Nb = function() {
  if (this.C) {
    return this.C;
  }
  if (this.s) {
    return this.s.Nb();
  }
  va("Root logger has no level set.");
  return null;
};
f.td = function(a) {
  return a.value >= this.Nb().value;
};
f.log = function(a, b, c) {
  this.td(a) && (r(b) && (b = b()), this.sd(this.Ob(a, b, c, J.prototype.log)));
};
f.Ob = function(a, b, c, d) {
  a = new vb(a, String(b), this.yb);
  c && (a.kd(c), a.ld(sb(c, d || J.prototype.Ob)));
  return a;
};
f.qb = function(a, b) {
  this.log(yb, a, b);
};
f.gb = function(a, b) {
  this.log(zb, a, b);
};
f.info = function(a, b) {
  this.log(Ab, a, b);
};
f.config = function(a, b) {
  this.log(Bb, a, b);
};
f.Rd = function(a, b) {
  this.log(Cb, a, b);
};
f.sd = function(a) {
  var b = "log:" + a.getMessage();
  k.console && (k.console.timeStamp ? k.console.timeStamp(b) : k.console.markTimeline && k.console.markTimeline(b));
  k.msWriteProfilerMark && k.msWriteProfilerMark(b);
  for (b = this;b;) {
    b.Od(a), b = b.getParent();
  }
};
f.Od = function(a) {
  if (this.o) {
    for (var b = 0, c;c = this.o[b];b++) {
      c(a);
    }
  }
};
f.Hd = function(a) {
  this.s = a;
};
f.Ed = function(a, b) {
  this.getChildren()[a] = b;
};
var Eb = {}, L = null, Fb = function() {
  L || (L = new J(""), Eb[""] = L, L.ea(Bb));
}, Gb = function() {
  Fb();
  return L;
}, Hb = function(a) {
  Fb();
  var b;
  if (!(b = Eb[a])) {
    b = new J(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Hb(a.substr(0, c));
    c.Ed(d, b);
    b.Hd(c);
    Eb[a] = b;
  }
  return b;
};
var N = function(a, b) {
  var c = Hb(a);
  b && c && c.ea(b);
  return c;
}, O = function(a, b, c) {
  a && a.Rd(b, c);
};
var Ib = chrome.i18n.getMessage("4014224501758376361", ["{{receiverName}}"]), Jb = chrome.i18n.getMessage("6046507125919556913"), Kb = chrome.i18n.getMessage("1189144544819350763"), Lb = chrome.i18n.getMessage("3430817026795535765"), Mb = chrome.i18n.getMessage("5056298333685549098", ["{{v2AppDomain}}"]), Nb = chrome.i18n.getMessage("7344649529753624682", ["{{v2AppDomain}}"]), Ob = chrome.i18n.getMessage("3278102219211539720"), Pb = chrome.i18n.getMessage("7484752158248863804"), Qb = chrome.i18n.getMessage("1717149362663359343", 
["{{v2AppDomain}}"]);
chrome.i18n.getMessage("4089994756445820175");
chrome.i18n.getMessage("780135806192376347");
chrome.i18n.getMessage("2438859709710567679");
chrome.i18n.getMessage("2076488708707463944");
chrome.i18n.getMessage("3996247341169314250");
chrome.i18n.getMessage("7053128562708856478");
chrome.i18n.getMessage("8500110749168055241");
chrome.i18n.getMessage("3844709005265884931");
chrome.i18n.getMessage("4224760847878375792");
chrome.i18n.getMessage("4584454172263179470");
chrome.i18n.getMessage("5823878688587296398");
chrome.i18n.getMessage("7008828272760191653");
chrome.i18n.getMessage("2377419936291389581");
chrome.i18n.getMessage("4324962226715124466");
chrome.i18n.getMessage("6039331491778328245");
chrome.i18n.getMessage("8887833628383960193");
chrome.i18n.getMessage("6118473811359442709");
chrome.i18n.getMessage("4272010402571776761");
chrome.i18n.getMessage("482442943064110817");
chrome.i18n.getMessage("5745355507138230213");
chrome.i18n.getMessage("7029426286291560071");
chrome.i18n.getMessage("8189622236075700665");
chrome.i18n.getMessage("6018881802001125637");
chrome.i18n.getMessage("4865676252029097872");
chrome.i18n.getMessage("6988652234001902672");
chrome.i18n.getMessage("6295154563386647404", ["{{attemptNumber}}"]);
var Rb = chrome.i18n.getMessage("6236792503803747284"), Sb = chrome.i18n.getMessage("3681271501407987946"), Tb = chrome.i18n.getMessage("1403598074357445300");
chrome.i18n.getMessage("8700054488486244094");
chrome.i18n.getMessage("7786163844034528352");
chrome.i18n.getMessage("3202350311251778009");
chrome.i18n.getMessage("8304164664901068767");
chrome.i18n.getMessage("6392731103614271560");
var Ub = function(a, b, c, d, e, g, h, m) {
  this.id = a;
  this.name = b;
  this.videoWidth = c;
  this.videoHeight = d;
  this.videoResolution = c + "x" + d;
  this.minVideoBitrate = e;
  this.maxVideoBitrate = g;
  this.videoQuality = h;
  this.audioBitrate = m;
}, P = new Ub("high", Sb, 1280, 720, 2E3, 2500, 56, 128), Vb = [new Ub("highest", Tb, 1280, 720, 4E3, 5E3, 56, 128), P, new Ub("low", Rb, 854, 480, 750, 1500, 56, 128)];
var Wb = function() {
  this.videoBitrate = P.maxVideoBitrate;
  this.minVideoBitrate = P.minVideoBitrate;
  this.maxVideoBitrate = P.maxVideoBitrate;
  this.videoQuality = P.videoQuality;
  this.minWidth = P.videoWidth;
  this.minHeight = P.videoHeight;
  this.audioBitrate = P.audioBitrate;
  this.useOpus = !0;
  this.bufferedMode = "on";
  this.bufferSizeMillis = 500;
  this.maxCastLatencyMillis = 300;
  this.maxFrameRate = 30;
  this.enablePacing = $a && 0 <= w(bb, 28);
  this.enableVideoTcp = this.enableAudioTcp = !1;
  this.zoomModeEnabled = this.enableAudioNack = !0;
  this.preferredVideoCodec = "CAST1";
};
Wb.prototype.update = function(a) {
  for (var b in this) {
    r(this[b]) || (null != a[b] && p(this[b]) == p(a[b]) ? this[b] = a[b] : N("cv.MirrorTabSettings").gb("Failed to load mirror settings for key [" + b + "]:" + a[b]));
  }
};
var Xb = function(a) {
  k.setTimeout(function() {
    throw a;
  }, 0);
}, Yb, Zb = function() {
  if (k.Promise && k.Promise.resolve) {
    var a = k.Promise.resolve();
    return function(b) {
      a.then(function() {
        try {
          b();
        } catch (a) {
          Xb(a);
        }
      });
    };
  }
  var b = k.MessageChannel;
  "undefined" === typeof b && "undefined" !== typeof window && window.postMessage && window.addEventListener && (b = function() {
    var a = document.createElement("iframe");
    a.style.display = "none";
    a.src = "";
    document.documentElement.appendChild(a);
    var b = a.contentWindow, a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), d = b.location.protocol + "//" + b.location.host, a = s(function(a) {
      if (a.origin == d || a.data == c) {
        this.port1.onmessage();
      }
    }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      b.postMessage(c, d);
    }};
  });
  if ("undefined" !== typeof b) {
    var c = new b, d = {}, e = d;
    c.port1.onmessage = function() {
      d = d.next;
      var a = d.Vb;
      d.Vb = null;
      a();
    };
    return function(a) {
      e.next = {Vb:a};
      e = e.next;
      c.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
    var b = document.createElement("script");
    b.onreadystatechange = function() {
      b.onreadystatechange = null;
      b.parentNode.removeChild(b);
      b = null;
      a();
      a = null;
    };
    document.documentElement.appendChild(b);
  } : function(a) {
    k.setTimeout(a, 0);
  };
};
var dc = function(a, b) {
  if (!$b) {
    var c = ac;
    r(k.setImmediate) ? k.setImmediate(c) : (Yb || (Yb = Zb()), Yb(c));
    $b = !0;
  }
  bc.push(new cc(a, b));
}, $b = !1, bc = [], ac = function() {
  for (;bc.length;) {
    var a = bc;
    bc = [];
    for (var b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        c.Sd.call(c.scope);
      } catch (d) {
        Xb(d);
      }
    }
  }
  $b = !1;
}, cc = function(a, b) {
  this.Sd = a;
  this.scope = b;
};
var ec = function(a) {
  a.prototype.then = a.prototype.then;
  a.prototype.$goog_Thenable = !0;
};
var Q = function(a, b) {
  this.f = 0;
  this.pb = void 0;
  this.l = this.s = null;
  this.ga = this.Ba = !1;
  try {
    var c = this;
    a.call(b, function(a) {
      c.L(2, a);
    }, function(a) {
      c.L(3, a);
    });
  } catch (d) {
    this.L(3, d);
  }
};
Q.prototype.then = function(a, b, c) {
  null != a && xa(a, "opt_onFulfilled should be a function.");
  null != b && xa(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
  return this.Nd(r(a) ? a : null, r(b) ? b : null, c);
};
ec(Q);
f = Q.prototype;
f.cancel = function(a) {
  0 == this.f && dc(function() {
    var b = new T(a);
    this.zb(b);
  }, this);
};
f.zb = function(a) {
  0 == this.f && (this.s ? this.s.Qc(this, a) : this.L(3, a));
};
f.Qc = function(a, b) {
  if (this.l) {
    for (var c = 0, d = -1, e = 0, g;g = this.l[e];e++) {
      if (g = g.ha) {
        if (c++, g == a && (d = e), 0 <= d && 1 < c) {
          break;
        }
      }
    }
    0 <= d && (0 == this.f && 1 == c ? this.zb(b) : (c = this.l.splice(d, 1)[0], this.vb(c, 3, b)));
  }
};
f.Yc = function(a) {
  this.l && this.l.length || 2 != this.f && 3 != this.f || this.wb();
  this.l || (this.l = []);
  this.l.push(a);
};
f.Nd = function(a, b, c) {
  var d = {ha:null, Hb:null, Ib:null};
  d.ha = new Q(function(e, g) {
    d.Hb = a ? function(b) {
      try {
        var d = a.call(c, b);
        e(d);
      } catch (M) {
        g(M);
      }
    } : e;
    d.Ib = b ? function(a) {
      try {
        var d = b.call(c, a);
        !l(d) && a instanceof T ? g(a) : e(d);
      } catch (M) {
        g(M);
      }
    } : g;
  });
  d.ha.s = this;
  this.Yc(d);
  return d.ha;
};
f.Cb = function(a) {
  x(1 == this.f);
  this.f = 0;
  this.L(2, a);
};
f.Db = function(a) {
  x(1 == this.f);
  this.f = 0;
  this.L(3, a);
};
f.L = function(a, b) {
  if (0 == this.f) {
    if (this == b) {
      a = 3, b = new TypeError("Promise cannot resolve to itself");
    } else {
      var c;
      if (b) {
        try {
          c = !!b.$goog_Thenable;
        } catch (d) {
          c = !1;
        }
      } else {
        c = !1;
      }
      if (c) {
        this.f = 1;
        b.then(this.Cb, this.Db, this);
        return;
      }
      c = typeof b;
      if ("object" == c && null != b || "function" == c) {
        try {
          var e = b.then;
          if (r(e)) {
            this.Vc(b, e);
            return;
          }
        } catch (g) {
          a = 3, b = g;
        }
      }
    }
    this.pb = b;
    this.f = a;
    this.wb();
    3 != a || b instanceof T || fc(this, b);
  }
};
f.Vc = function(a, b) {
  this.f = 1;
  var c = this, d = !1, e = function(a) {
    d || (d = !0, c.Cb(a));
  }, g = function(a) {
    d || (d = !0, c.Db(a));
  };
  try {
    b.call(a, e, g);
  } catch (h) {
    g(h);
  }
};
f.wb = function() {
  this.Ba || (this.Ba = !0, dc(this.Ad, this));
};
f.Ad = function() {
  for (;this.l && this.l.length;) {
    var a = this.l;
    this.l = [];
    for (var b = 0;b < a.length;b++) {
      this.vb(a[b], this.f, this.pb);
    }
  }
  this.Ba = !1;
};
f.vb = function(a, b, c) {
  2 == b ? a.Hb(c) : (this.rd(), a.Ib(c));
};
f.vd = function() {
};
f.rd = function() {
  var a;
  for (a = this;a && a.ga;a = a.s) {
    a.ga = !1;
  }
};
var fc = function(a, b) {
  a.ga = !0;
  dc(function() {
    a.ga && (a.vd(b), gc.call(null, b));
  });
}, gc = Xb, T = function(a) {
  v.call(this, a);
};
u(T, v);
T.prototype.name = "cancel";
var hc = function() {
};
u(hc, Error);
var ic = function() {
  this.f = "pending";
  this.o = [];
  this.I = this.Pc = void 0;
};
ec(ic);
var jc = function() {
  v.call(this, "Multiple attempts to set the state of this Result");
};
u(jc, v);
f = ic.prototype;
f.Pb = function() {
  return this.f;
};
f.hd = function() {
  return this.Pc;
};
f.getError = function() {
  return this.I;
};
f.md = function(a, b) {
  this.Ea() ? this.o.push({ed:a, scope:b || null}) : a.call(b, this);
};
f.Cd = function(a) {
  if (this.Ea()) {
    this.I = a, this.f = "error", this.Uc();
  } else {
    if (!this.xb()) {
      throw new jc;
    }
  }
};
f.Uc = function() {
  var a = this.o;
  this.o = [];
  for (var b = 0;b < a.length;b++) {
    var c = a[b];
    c.ed.call(c.scope, this);
  }
};
f.Ea = function() {
  return "pending" == this.f;
};
f.cancel = function() {
  return this.Ea() ? (this.Cd(new hc), !0) : !1;
};
f.xb = function() {
  return "error" == this.f && this.I instanceof hc;
};
f.then = function(a, b, c) {
  var d, e, g = new Q(function(a, b) {
    d = a;
    e = b;
  });
  this.md(function(a) {
    a.xb() ? g.cancel() : "success" == a.Pb() ? d(a.hd()) : "error" == a.Pb() && e(a.getError());
  });
  return g.then(a, b, c);
};
var kc = function() {
  this.hasNetworkSoftware = this.networkDescription = this.gpu = this.cpu = this.googleUsername = null;
};
var lc = function() {
  this.dismissClicks = this.earliestTimeToShowWarning = this.sessionsBeforeWarning = 0;
  this.statsCollectNotificationDismissed = this.intelBadCpuWarningDismissed = this.castAppNotificationDismissed = !1;
};
var mc = function() {
  this.d = N("cv.Settings");
  this.k = {};
  this.Ec();
};
da(mc);
mc.prototype.Ec = function() {
  this.k.tabCaptureSettings = new Wb;
  this.k.feedback = new kc;
  this.k.userNotification = new lc;
  this.k.siteTokens = {};
  this.k.mirrorLinkProtection = !0;
  this.k.sendStatsEnabled = !0;
  this.k.fixedIps = [];
  this.k.enableCloud = !1;
  this.k.cloudDevice = {};
  this.k.enableHangouts = !1;
  this.k.lastMirrorDataAutoSubmitTimeMillis = 0;
  this.k.useCastStreaming = gb && !1;
};
mc.prototype.xd = function() {
  return this.k.sendStatsEnabled;
};
var U = function(a, b) {
  mc.X().xd() && window._gaq && window._gaq.push(["_trackEvent", "UI", a, b, void 0]);
};
var nc = /<[^>]*>|&[^;]+;/g, oc = function(a, b) {
  return b ? a.replace(nc, "") : a;
}, pc = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"), qc = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]"), rc = /^http:\/\/.*/, sc = /\s+/, uc = /\d/;
var vc = function(a) {
  this.Pd = "number" == typeof a ? 0 < a ? 1 : 0 > a ? -1 : null : null == a ? null : a ? -1 : 1;
};
vc.prototype.Fd = function(a, b) {
  for (var c = 0, d = 0, e = !1, g = oc(a, b).split(sc), h = 0;h < g.length;h++) {
    var m = g[h];
    qc.test(oc(m, void 0)) ? (c++, d++) : rc.test(m) ? e = !0 : pc.test(oc(m, void 0)) ? d++ : uc.test(m) && (e = !0);
  }
  return 0 == d ? e ? 1 : 0 : .4 < c / d ? -1 : 1;
};
vc.prototype.nd = function(a, b) {
  return this.Gd(this.Fd(a, b));
};
vc.prototype.Gd = function(a) {
  return-1 == (0 == a ? this.Pd : a) ? "rtl" : "ltr";
};
if ("undefined" != typeof angular) {
  var wc = angular.module("chrome_i18n", []);
  chrome.runtime && chrome.runtime.getManifest && chrome.runtime.getManifest().default_locale && wc.directive("angularMessage", function() {
    return{restrict:"E", transclude:"element", replace:!0, controller:["$scope", function(a) {
      this.La = this.Ma = null;
      a.dirForText = s(function(a) {
        this.Ma || (this.Ma = chrome.i18n.getMessage("@@bidi_dir") || "ltr");
        this.La || (this.La = new vc("rtl" == this.Ma));
        return this.La.nd(a || "");
      }, this);
    }], compile:function(a, b) {
      var c = b.key, d = null, e = document.createElement("amr");
      c && !c.match(/^\d+$/) && (c = chrome.i18n.getMessage(c), null == c && e.setAttribute("id", "missing"));
      if (c) {
        var g = chrome.i18n.getMessage(c + "_ph"), d = [];
        if (null != g) {
          for (d = g.split("\ue000"), g = 0;g < d.length;++g) {
            d[g] = d[g].replace(/^{{(.*)}}$/, '<amrp dir="{{dirForText($1)}}">{{$1}}</amrp>');
          }
        }
        d = chrome.i18n.getMessage(c, d);
      } else {
        e.setAttribute("r", "nokey");
      }
      d ? e.innerHTML = d : (e.setAttribute("tl", "false"), e.innerHTML = a.html());
      a.replaceWith(e);
    }};
  });
}
;chrome.cast.media.Aa = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
n("chrome.cast.media.MediaCommand", chrome.cast.media.Aa, void 0);
chrome.cast.media.Jd = {GENERIC:0, TV_SHOW:1, MOVIE:2, MUSIC_TRACK:3, PHOTO:4};
n("chrome.cast.media.MetadataType", chrome.cast.media.Jd, void 0);
chrome.cast.media.u = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
n("chrome.cast.media.PlayerState", chrome.cast.media.u, void 0);
chrome.cast.media.Kd = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
n("chrome.cast.media.ResumeState", chrome.cast.media.Kd, void 0);
chrome.cast.media.Ld = {BUFFERED:"buffered", LIVE:"live", OTHER:"other"};
n("chrome.cast.media.StreamType", chrome.cast.media.Ld, void 0);
chrome.cast.media.Id = {CANCELLED:"CANCELLED", INTERRUPTED:"INTERRUPTED", FINISHED:"FINISHED", ERROR:"ERROR"};
n("chrome.cast.media.IdleReason", chrome.cast.media.Id, void 0);
var xc = function(a, b) {
  this.type = a;
  this.message = b;
}, yc = function(a, b) {
  this.id = a;
  this.isDefaultAction = b;
}, zc = function(a, b, c, d) {
  this.statsCollectNotificationDismissed = fa(c) ? c : !0;
  this.sendUsageEnabled = fa(d) ? d : !0;
  this.castAppNotificationDismissed = fa(a) ? a : !1;
  this.mirrorQualityId = b || P.id;
}, Ac = function(a, b, c, d, e, g, h) {
  this.receiverActs = a || [];
  this.issue = b;
  this.isV1AppInTab = g || !1;
  this.isV2AppInTab = !!h;
  this.v2AppDomain = h || null;
  this.currentActivity = c;
  this.desktopActivity = d;
  this.settings = e || new zc;
};
var Bc = function() {
};
Bc.prototype.Qd = !1;
Bc.prototype.Zc = function() {
  return this.Qd;
};
var V = function(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.F = !1;
  this.tb = !0;
};
V.prototype.stopPropagation = function() {
  this.F = !0;
};
V.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.tb = !1;
};
var Cc = function(a) {
  Cc[" "](a);
  return a;
};
Cc[" "] = ca;
var Dc = !C || C && 9 <= Na, Ec = C && !E("9");
!D || E("528");
Ia && E("1.9b") || C && E("8") || Ha && E("9.5") || D && E("528");
Ia && !E("8") || C && E("9");
var W = function(a, b) {
  V.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.W = this.state = null;
  a && this.wa(a, b);
};
u(W, V);
W.prototype.wa = function(a, b) {
  var c = this.type = a.type;
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if (d) {
    if (Ia) {
      var e;
      t: {
        try {
          Cc(d.nodeName);
          e = !0;
          break t;
        } catch (g) {
        }
        e = !1;
      }
      e || (d = null);
    }
  } else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
  }
  this.relatedTarget = d;
  this.offsetX = D || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = D || void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.W = a;
  a.defaultPrevented && this.preventDefault();
};
W.prototype.stopPropagation = function() {
  W.Qb.stopPropagation.call(this);
  this.W.stopPropagation ? this.W.stopPropagation() : this.W.cancelBubble = !0;
};
W.prototype.preventDefault = function() {
  W.Qb.preventDefault.call(this);
  var a = this.W;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Ec) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Fc = "closure_listenable_" + (1E6 * Math.random() | 0), Gc = 0;
var Hc = function(a, b, c, d, e, g) {
  this.D = a;
  this.proxy = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.ja = g;
  this.key = ++Gc;
  this.removed = this.ia = !1;
};
Hc.prototype.ma = function() {
  this.removed = !0;
  this.ja = this.src = this.proxy = this.D = null;
};
var Ic = function(a) {
  this.src = a;
  this.i = {};
  this.V = 0;
};
f = Ic.prototype;
f.fd = function() {
  return this.V;
};
f.add = function(a, b, c, d, e) {
  var g = a.toString();
  a = this.i[g];
  a || (a = this.i[g] = [], this.V++);
  var h = Jc(a, b, d, e);
  -1 < h ? (b = a[h], c || (b.ia = !1)) : (b = new Hc(b, null, this.src, g, !!d, e), b.ia = c, a.push(b));
  return b;
};
f.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.i)) {
    return!1;
  }
  var e = this.i[a];
  b = Jc(e, b, c, d);
  return-1 < b ? (e[b].ma(), Aa(e, b), 0 == e.length && (delete this.i[a], this.V--), !0) : !1;
};
f.Lb = function(a) {
  var b = a.type;
  if (!(b in this.i)) {
    return!1;
  }
  var c = Ba(this.i[b], a);
  c && (a.ma(), 0 == this.i[b].length && (delete this.i[b], this.V--));
  return c;
};
f.removeAll = function(a) {
  a = a && a.toString();
  var b = 0, c;
  for (c in this.i) {
    if (!a || c == a) {
      for (var d = this.i[c], e = 0;e < d.length;e++) {
        ++b, d[e].ma();
      }
      delete this.i[c];
      this.V--;
    }
  }
  return b;
};
f.Ka = function(a, b, c, d) {
  a = this.i[a.toString()];
  var e = -1;
  a && (e = Jc(a, b, c, d));
  return-1 < e ? a[e] : null;
};
f.hasListener = function(a, b) {
  var c = l(a), d = c ? a.toString() : "", e = l(b);
  return jb(this.i, function(a) {
    for (var h = 0;h < a.length;++h) {
      if (!(c && a[h].type != d || e && a[h].capture != b)) {
        return!0;
      }
    }
    return!1;
  });
};
var Jc = function(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var g = a[e];
    if (!g.removed && g.D == b && g.capture == !!c && g.ja == d) {
      return e;
    }
  }
  return-1;
};
var Kc = "closure_lm_" + (1E6 * Math.random() | 0), Lc = {}, Mc = 0, Nc = function(a, b, c, d, e) {
  if ("array" == p(b)) {
    for (var g = 0;g < b.length;g++) {
      Nc(a, b[g], c, d, e);
    }
    return null;
  }
  c = Oc(c);
  return a && a[Fc] ? a.listen(b, c, d, e) : Pc(a, b, c, !1, d, e);
}, Pc = function(a, b, c, d, e, g) {
  if (!b) {
    throw Error("Invalid event type");
  }
  var h = !!e, m = Qc(a);
  m || (a[Kc] = m = new Ic(a));
  c = m.add(b, c, d, e, g);
  if (c.proxy) {
    return c;
  }
  d = Rc();
  c.proxy = d;
  d.src = a;
  d.D = c;
  a.addEventListener ? a.addEventListener(b.toString(), d, h) : a.attachEvent(Sc(b.toString()), d);
  Mc++;
  return c;
}, Rc = function() {
  var a = Tc, b = Dc ? function(c) {
    return a.call(b.src, b.D, c);
  } : function(c) {
    c = a.call(b.src, b.D, c);
    if (!c) {
      return c;
    }
  };
  return b;
}, Uc = function(a, b, c, d, e) {
  if ("array" == p(b)) {
    for (var g = 0;g < b.length;g++) {
      Uc(a, b[g], c, d, e);
    }
    return null;
  }
  c = Oc(c);
  return a && a[Fc] ? a.Ud(b, c, d, e) : Pc(a, b, c, !0, d, e);
}, Vc = function(a, b, c, d, e) {
  if ("array" == p(b)) {
    for (var g = 0;g < b.length;g++) {
      Vc(a, b[g], c, d, e);
    }
    return null;
  }
  c = Oc(c);
  if (a && a[Fc]) {
    return a.Tb(b, c, d, e);
  }
  if (!a) {
    return!1;
  }
  if (a = Qc(a)) {
    if (b = a.Ka(b, c, !!d, e)) {
      return Wc(b);
    }
  }
  return!1;
}, Wc = function(a) {
  if ("number" == typeof a || !a || a.removed) {
    return!1;
  }
  var b = a.src;
  if (b && b[Fc]) {
    return b.Ca(a);
  }
  var c = a.type, d = a.proxy;
  b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(Sc(c), d);
  Mc--;
  (c = Qc(b)) ? (c.Lb(a), 0 == c.fd() && (c.src = null, b[Kc] = null)) : a.ma();
  return!0;
}, Sc = function(a) {
  return a in Lc ? Lc[a] : Lc[a] = "on" + a;
}, Yc = function(a, b, c, d) {
  var e = 1;
  if (a = Qc(a)) {
    if (b = a.i[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var g = b[a];
        g && g.capture == c && !g.removed && (e &= !1 !== Xc(g, d));
      }
    }
  }
  return Boolean(e);
}, Xc = function(a, b) {
  var c = a.D, d = a.ja || a.src;
  a.ia && Wc(a);
  return c.call(d, b);
}, Tc = function(a, b) {
  if (a.removed) {
    return!0;
  }
  if (!Dc) {
    var c = b || ba("window.event"), d = new W(c, this), e = !0;
    if (!(0 > c.keyCode || void 0 != c.returnValue)) {
      t: {
        var g = !1;
        if (0 == c.keyCode) {
          try {
            c.keyCode = -1;
            break t;
          } catch (h) {
            g = !0;
          }
        }
        if (g || void 0 == c.returnValue) {
          c.returnValue = !0;
        }
      }
      c = [];
      for (g = d.currentTarget;g;g = g.parentNode) {
        c.push(g);
      }
      for (var g = a.type, m = c.length - 1;!d.F && 0 <= m;m--) {
        d.currentTarget = c[m], e &= Yc(c[m], g, !0, d);
      }
      for (m = 0;!d.F && m < c.length;m++) {
        d.currentTarget = c[m], e &= Yc(c[m], g, !1, d);
      }
    }
    return e;
  }
  return Xc(a, new W(b, this));
}, Qc = function(a) {
  a = a[Kc];
  return a instanceof Ic ? a : null;
}, Zc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0), Oc = function(a) {
  x(a, "Listener can not be null.");
  if (r(a)) {
    return a;
  }
  x(a.handleEvent, "An object listener must have handleEvent method.");
  return a[Zc] || (a[Zc] = function(b) {
    return a.handleEvent(b);
  });
};
var $c = function() {
  this.A = new Ic(this);
  this.Wc = this;
};
u($c, Bc);
$c.prototype[Fc] = !0;
f = $c.prototype;
f.Wd = null;
f.Mb = function() {
  return this.Wd;
};
f.addEventListener = function(a, b, c, d) {
  Nc(this, a, b, c, d);
};
f.removeEventListener = function(a, b, c, d) {
  Vc(this, a, b, c, d);
};
f.dispatchEvent = function(a) {
  this.Gb();
  var b, c = this.Mb();
  if (c) {
    b = [];
    for (var d = 1;c;c = c.Mb()) {
      b.push(c), x(1E3 > ++d, "infinite loop");
    }
  }
  c = this.Wc;
  d = a.type || a;
  if (q(a)) {
    a = new V(a, c);
  } else {
    if (a instanceof V) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new V(d, c);
      nb(a, e);
    }
  }
  var e = !0, g;
  if (b) {
    for (var h = b.length - 1;!a.F && 0 <= h;h--) {
      g = a.currentTarget = b[h], e = g.pa(d, !0, a) && e;
    }
  }
  a.F || (g = a.currentTarget = c, e = g.pa(d, !0, a) && e, a.F || (e = g.pa(d, !1, a) && e));
  if (b) {
    for (h = 0;!a.F && h < b.length;h++) {
      g = a.currentTarget = b[h], e = g.pa(d, !1, a) && e;
    }
  }
  return e;
};
f.listen = function(a, b, c, d) {
  this.Gb();
  return this.A.add(String(a), b, !1, c, d);
};
f.Ud = function(a, b, c, d) {
  return this.A.add(String(a), b, !0, c, d);
};
f.Tb = function(a, b, c, d) {
  return this.A.remove(String(a), b, c, d);
};
f.Ca = function(a) {
  return this.A.Lb(a);
};
f.pa = function(a, b, c) {
  a = this.A.i[String(a)];
  if (!a) {
    return!0;
  }
  a = a.concat();
  for (var d = !0, e = 0;e < a.length;++e) {
    var g = a[e];
    if (g && !g.removed && g.capture == b) {
      var h = g.D, m = g.ja || g.src;
      g.ia && this.Ca(g);
      d = !1 !== h.call(m, c) && d;
    }
  }
  return d && !1 != c.tb;
};
f.Ka = function(a, b, c, d) {
  return this.A.Ka(String(a), b, c, d);
};
f.hasListener = function(a, b) {
  return this.A.hasListener(l(a) ? String(a) : void 0, b);
};
f.Gb = function() {
  x(this.A, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
};
var ad = function(a, b, c) {
  if (r(a)) {
    c && (a = s(a, c));
  } else {
    if (a && "function" == typeof a.handleEvent) {
      a = s(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : k.setTimeout(a, b || 0);
};
var bd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"), cd = D, dd = function(a, b) {
  if (cd) {
    cd = !1;
    var c = k.location;
    if (c) {
      var d = c.href;
      if (d && (d = (d = dd(3, d)) && decodeURIComponent(d)) && d != c.hostname) {
        throw cd = !0, Error();
      }
    }
  }
  return b.match(bd)[a] || null;
};
var ed = N("cv.TabUtils"), fd = null, gd = function(a) {
  a != chrome.windows.WINDOW_ID_NONE && (ed && ed.info("Newly focused window ID: " + a, void 0), fd = a);
}, hd = function() {
  chrome.windows.getLastFocused(function(a) {
    fd || (fd = a.id);
  });
  chrome.windows.onFocusChanged.addListener(gd);
}, jd = function(a, b) {
  chrome.tabs.get(a, function(a) {
    id(a, b);
  });
}, id = function(a, b) {
  if (a) {
    var c = a.id;
    chrome.windows.update(a.windowId, {focused:!0}, function() {
      chrome.tabs.update(c, {active:!0}, b);
    });
  } else {
    b(null);
  }
}, kd = function(a, b, c) {
  chrome.tabs.query({url:a}, function(a) {
    a && 0 < a.length ? id(a[0], c) : chrome.tabs.create({url:b}, c);
  });
};
var ld = function() {
};
ld.prototype.Ub = null;
ld.prototype.$a = function() {
  return this.Ub || (this.Ub = this.Dd());
};
var md, nd = function() {
};
u(nd, ld);
nd.prototype.Rb = function() {
  var a = this.Wb();
  return a ? new ActiveXObject(a) : new XMLHttpRequest;
};
nd.prototype.Dd = function() {
  var a = {};
  this.Wb() && (a[0] = !0, a[1] = !0);
  return a;
};
nd.prototype.Wb = function() {
  if (!this.Xb && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        return new ActiveXObject(c), this.Xb = c;
      } catch (d) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return this.Xb;
};
md = new nd;
var X = function(a) {
  $c.call(this);
  this.headers = new H;
  this.ba = a || null;
  this.H = !1;
  this.$ = this.c = null;
  this.M = this.Wa = this.aa = "";
  this.P = this.ua = this.Z = this.va = !1;
  this.J = 0;
  this.ca = null;
  this.N = "";
  this.da = this.ic = !1;
};
u(X, $c);
X.prototype.d = N("goog.net.XhrIo");
var od = /^https?$/i, pd = ["POST", "PUT"];
X.prototype.qd = function(a) {
  this.J = Math.max(0, a);
};
X.prototype.pd = function(a) {
  this.N = a;
};
X.prototype.send = function(a, b, c, d) {
  if (this.c) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.aa + "; newUri=" + a);
  }
  b = b ? b.toUpperCase() : "GET";
  this.aa = a;
  this.M = "";
  this.Wa = b;
  this.va = !1;
  this.H = !0;
  this.c = this.oc();
  this.$ = this.ba ? this.ba.$a() : md.$a();
  this.c.onreadystatechange = s(this.Va, this);
  try {
    O(this.d, this.r("Opening Xhr")), this.ua = !0, this.c.open(b, String(a), !0), this.ua = !1;
  } catch (e) {
    O(this.d, this.r("Error opening Xhr: " + e.message));
    this.I(5, e);
    return;
  }
  a = c || "";
  var g = this.headers.clone();
  d && qb(d, function(a, b) {
    g.set(b, a);
  });
  d = A(g.O(), qd);
  c = k.FormData && a instanceof k.FormData;
  !(0 <= z(pd, b)) || d || c || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  g.forEach(function(a, b) {
    this.c.setRequestHeader(b, a);
  }, this);
  this.N && (this.c.responseType = this.N);
  "withCredentials" in this.c && (this.c.withCredentials = this.ic);
  try {
    this.Za(), 0 < this.J && (this.da = rd(this.c), O(this.d, this.r("Will abort after " + this.J + "ms if incomplete, xhr2 " + this.da)), this.da ? (this.c.timeout = this.J, this.c.ontimeout = s(this.ab, this)) : this.ca = ad(this.ab, this.J, this)), O(this.d, this.r("Sending request")), this.Z = !0, this.c.send(a), this.Z = !1;
  } catch (h) {
    O(this.d, this.r("Send error: " + h.message)), this.I(5, h);
  }
};
var rd = function(a) {
  return C && E(9) && "number" == typeof a.timeout && l(a.ontimeout);
}, qd = function(a) {
  return "content-type" == a.toLowerCase();
};
f = X.prototype;
f.oc = function() {
  return this.ba ? this.ba.Rb() : md.Rb();
};
f.ab = function() {
  "undefined" != typeof aa && this.c && (this.M = "Timed out after " + this.J + "ms, aborting", O(this.d, this.r(this.M)), this.dispatchEvent("timeout"), this.abort(8));
};
f.I = function(a, b) {
  this.H = !1;
  this.c && (this.P = !0, this.c.abort(), this.P = !1);
  this.M = b;
  this.lb();
  this.ya();
};
f.lb = function() {
  this.va || (this.va = !0, this.dispatchEvent("complete"), this.dispatchEvent("error"));
};
f.abort = function() {
  this.c && this.H && (O(this.d, this.r("Aborting")), this.H = !1, this.P = !0, this.c.abort(), this.P = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), this.ya());
};
f.Va = function() {
  this.Zc() || (this.ua || this.Z || this.P ? this.Kb() : this.bd());
};
f.bd = function() {
  this.Kb();
};
f.Kb = function() {
  if (this.H && "undefined" != typeof aa) {
    if (this.$[1] && 4 == this.R() && 2 == this.fa()) {
      O(this.d, this.r("Local request error detected and ignored"));
    } else {
      if (this.Z && 4 == this.R()) {
        ad(this.Va, 0, this);
      } else {
        if (this.dispatchEvent("readystatechange"), this.za()) {
          O(this.d, this.r("Request complete"));
          this.H = !1;
          try {
            this.ob() ? (this.dispatchEvent("complete"), this.dispatchEvent("success")) : (this.M = this.wc() + " [" + this.fa() + "]", this.lb());
          } finally {
            this.ya();
          }
        }
      }
    }
  }
};
f.ya = function(a) {
  if (this.c) {
    this.Za();
    var b = this.c, c = this.$[0] ? ca : null;
    this.$ = this.c = null;
    a || this.dispatchEvent("ready");
    try {
      b.onreadystatechange = c;
    } catch (d) {
      (a = this.d) && a.qb("Problem encountered resetting onreadystatechange: " + d.message, void 0);
    }
  }
};
f.Za = function() {
  this.c && this.da && (this.c.ontimeout = null);
  "number" == typeof this.ca && (k.clearTimeout(this.ca), this.ca = null);
};
f.za = function() {
  return 4 == this.R();
};
f.ob = function() {
  var a = this.fa(), b;
  t: {
    switch(a) {
      case 200:
      ;
      case 201:
      ;
      case 202:
      ;
      case 204:
      ;
      case 206:
      ;
      case 304:
      ;
      case 1223:
        b = !0;
        break t;
      default:
        b = !1;
    }
  }
  return b || 0 === a && !this.wd();
};
f.wd = function() {
  var a = dd(1, String(this.aa));
  !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1));
  return od.test(a ? a.toLowerCase() : "");
};
f.R = function() {
  return this.c ? this.c.readyState : 0;
};
f.fa = function() {
  try {
    return 2 < this.R() ? this.c.status : -1;
  } catch (a) {
    return-1;
  }
};
f.wc = function() {
  try {
    return 2 < this.R() ? this.c.statusText : "";
  } catch (a) {
    return O(this.d, "Can not get status: " + a.message), "";
  }
};
f.od = function() {
  try {
    if (!this.c) {
      return null;
    }
    if ("response" in this.c) {
      return this.c.response;
    }
    switch(this.N) {
      case "":
      ;
      case "text":
        return this.c.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in this.c) {
          return this.c.mozResponseArrayBuffer;
        }
      ;
    }
    var a = this.d;
    a && a.qb("Response type " + this.N + " is not supported on this browser", void 0);
    return null;
  } catch (b) {
    return O(this.d, "Can not get response: " + b.message), null;
  }
};
f.getResponseHeader = function(a) {
  return this.c && this.za() ? this.c.getResponseHeader(a) : void 0;
};
f.getAllResponseHeaders = function() {
  return this.c && this.za() ? this.c.getAllResponseHeaders() : "";
};
f.r = function(a) {
  return a + " [" + this.Wa + " " + this.aa + " " + this.fa() + "]";
};
var sd = function(a) {
  kd("http://support.google.com/chromecast/go*", a, function() {
    window.close();
  });
}, td = function(a) {
  "feedback.html" == a ? U("popup-choice-help") : "options.html" == a && U("choice-options");
  a = chrome.extension.getURL(a);
  kd(a + "*", a, function() {
    window.close();
  });
}, ud = function(a, b) {
  var c = new X;
  c.pd("blob");
  c.qd(1500);
  Uc(c, ["complete", "timeout"], function() {
    if (c.ob()) {
      var a = window.webkitURL.createObjectURL(c.od());
      b(a);
    } else {
      b(null);
    }
  });
  c.send(a, "GET");
};
var Y = function() {
};
Y.prototype.getMessage = function(a, b) {
  return this.Td(a, b).message;
};
Y.prototype.Td = function(a, b) {
  for (var c = [], d = {}, e = /{{(\w+?)}}/g, g = e.exec(a);null != g;) {
    b ? b[g[1]] && (d[g[1]] = b[g[1]]) : d[g[1]] = d[g[1]], g = e.exec(a);
  }
  for (var h in d) {
    h && (b && (a = a.replace(new RegExp("{{" + h + "}}", "g"), d[h])), c.push(h));
  }
  return{message:a, bindings:c};
};
da(Y);
var vd = function(a, b, c, d) {
  this.n = Y.X();
  this.activity = a;
  this.t = !!this.activity.mediaPlayerStatus;
  this.K = this.activity.mediaPlayerStatus;
  this.Qa = this.t && 0 <= z(this.K.supportedCommands, chrome.cast.media.Aa.PAUSE);
  this.Na = this.t && (this.K.playerState == chrome.cast.media.u.PAUSED || this.K.playerState == chrome.cast.media.u.PLAYING);
  this.cc = this.t && this.K.playerState == chrome.cast.media.u.PAUSED ? "/data/play.png" : "/data/pause.png";
  this.Pa = this.t && 0 <= z(this.K.supportedCommands, chrome.cast.media.Aa.STREAM_MUTE);
  this.bc = this.t && this.K.muted ? "/data/mute.png" : "/data/unmute.png";
  this.Oa = "mirror_tab" == this.activity.activityType && this.activity.isLocal;
  this.ac = "/data/mirror_quality.png";
  this.Sa = this.Ac(b, c);
  this.ra = "none" != b && 0 < this.Sa.length && "custom_app" != this.activity.activityType;
  this.Zb = this.zc();
  this.dc = this.n.getMessage(Pb);
  this.$b = d ? d.activityId == a.id : !1;
};
vd.prototype.Ac = function(a, b) {
  switch(a) {
    case "create_session":
      return x(null != b, "Expecting v2 app domain "), this.n.getMessage(Qb, {v2AppDomain:b});
    case "cast_this_tab":
      return this.n.getMessage(Ob);
    case "cast_desktop":
      return this.n.getMessage(Lb);
    default:
      return "";
  }
};
vd.prototype.zc = function() {
  var a = this.Qa + this.Pa + this.Oa, b = 1 + this.ra;
  return 2 == a && 2 == b ? ["button", "large1"] : 1 == a && 2 == b ? ["button", "large2"] : 0 == a && 2 == b ? ["button", "large3"] : 2 == a && 1 == b ? ["button", "large4"] : ["button"];
};
var wd = function(a, b, c) {
  this.d = N("cv2.PopupActivityDetailCtrl");
  this.G = b;
  this.b = c;
  this.a = a;
  this.g = null;
  this.nc();
  a.$on("MODEL_UPDATE", s(this.B, this));
};
f = wd.prototype;
f.B = function() {
  O(this.d, "on model update");
  this.Y(this.b.j());
  this.a.$apply();
};
f.gc = function() {
  if (this.a.selectedActivity) {
    if (this.a.selectedActivity.iconUrl) {
      var a = this.a.selectedActivity.iconUrl;
      this.a.selectedActivity.iconUrl = "data/default_activity.png";
      "data/default_activity.png" != a && ud(a, s(function(a) {
        a && (this.a.selectedActivity.iconUrl = a, this.a.$apply());
      }, this));
    } else {
      this.a.selectedActivity.iconUrl = "data/default_activity.png";
    }
  }
};
f.lc = function() {
  var a = this.a.selectedActivity;
  !a || !a.tabId || 0 > a.tabId || jd(a.tabId, function(a) {
    a && window.close();
  });
};
f.bb = function(a, b) {
  return{activityId:a, data:b};
};
f.Y = function(a) {
  this.a.selectedActivity = this.b.Ra();
  this.a.selectedActivity && (this.gc(), this.g = new vd(this.a.selectedActivity, this.b.sa(), a.v2AppDomain, a.issue), this.a.enableMediaControls = this.g.t, this.a.showPlayPause = this.g.Qa, this.a.enablePlayPause = this.g.Na, this.a.playPauseIcon = this.g.cc, this.a.showMuteUnmute = this.g.Pa, this.a.muteUnmuteIcon = this.g.bc, this.a.showMirrorQuality = this.g.Oa, this.a.mirrorQualityIcon = this.g.ac, this.a.showCastAction = this.g.ra, this.a.castActionLabel = this.g.Sa, this.a.actionClass = 
  this.g.Zb, this.a.stopLabel = this.g.dc, this.a.hasActivityIssue = this.g.$b, this.a.sharedState = this.a.sharedState || {}, this.a.sharedState.selectingMirrorQuality = this.a.sharedState.selectingMirrorQuality || !1, this.a.isV1AppInTab = a.isV1AppInTab, this.a.settings = a.settings, this.a.updateSettings = s(this.hc, this));
};
f.hc = function() {
  var a = this.b.j();
  a.settings.mirrorQualityId = this.a.settings.mirrorQualityId;
  this.b.sendRequest("update_settings", a.settings);
};
f.nc = function() {
  this.Y(this.b.j());
  this.a.mirrorQualities = Vb;
  this.a.onClickLearnCastEnabledPage = t(sd, "http://support.google.com/chromecast/go/castenabledpage");
  this.a.changeDevice = s(function() {
    U("status-choice-devices");
    this.b.Ua(null);
    this.G.path("/receiver_picker");
  }, this);
  this.a.showOriginalTab = s(this.lc, this);
  this.a.doCastAction = s(function() {
    this.g.ra && this.a.selectedActivity && this.b.Ta(this.a.selectedActivity.receiver);
  }, this);
  this.a.playOrPause = s(function() {
    U("status-choice-playOrPause");
    this.g.t && this.kc();
  }, this);
  this.a.muteOrUmute = s(function() {
    U("status-choice-muteOrUmute");
    this.g.t && this.jc();
  }, this);
  this.a.stopActivity = s(this.mc, this);
};
f.kc = function() {
  var a = this.a.selectedActivity;
  if (a && a.mediaPlayerStatus && this.g.Na) {
    var b = this.bb(a.id, {}), c = null;
    switch(a.mediaPlayerStatus.playerState) {
      case chrome.cast.media.u.PLAYING:
        this.b.sendRequest("pause_media", b);
        c = chrome.cast.media.u.PAUSED;
        break;
      case chrome.cast.media.u.PAUSED:
        this.b.sendRequest("play_media", b), c = chrome.cast.media.u.PLAYING;
    }
    c && (a.mediaPlayerStatus.playerState = c, this.Y(this.b.j()));
  }
};
f.jc = function() {
  var a = this.a.selectedActivity;
  a && a.mediaPlayerStatus && (this.b.sendRequest("set_mute", this.bb(a.id, {muted:!a.mediaPlayerStatus.muted})), a.mediaPlayerStatus.muted = !a.mediaPlayerStatus.muted, this.Y(this.b.j()));
};
f.mc = function() {
  var a = this.a.selectedActivity;
  a && (this.b.sendRequest("stop_activity", a), this.a.selectedActivity = null, window.close());
};
var xd = function(a, b, c, d) {
  this.source = a;
  this.target = b;
  this.type = c;
  this.content = d;
  this.windowUrl = null;
};
var yd = function() {
  this.m = [];
  this.q = {};
};
u(yd, Bc);
f = yd.prototype;
f.Jb = 1;
f.oa = 0;
f.yd = function(a, b, c) {
  var d = this.q[a];
  d || (d = this.q[a] = []);
  var e = this.Jb;
  this.m[e] = a;
  this.m[e + 1] = b;
  this.m[e + 2] = c;
  this.Jb = e + 3;
  d.push(e);
  return e;
};
f.zd = function(a, b, c) {
  if (a = this.q[a]) {
    var d = this.m;
    if (a = A(a, function(a) {
      return d[a + 1] == b && d[a + 2] == c;
    })) {
      return this.la(a);
    }
  }
  return!1;
};
f.la = function(a) {
  if (0 != this.oa) {
    return this.na || (this.na = []), this.na.push(a), !1;
  }
  var b = this.m[a];
  if (b) {
    var c = this.q[b];
    c && Ba(c, a);
    delete this.m[a];
    delete this.m[a + 1];
    delete this.m[a + 2];
  }
  return!!b;
};
f.Fc = function(a, b) {
  var c = this.q[a];
  if (c) {
    this.oa++;
    for (var d = Ca(arguments, 1), e = 0, g = c.length;e < g;e++) {
      var h = c[e];
      this.m[h + 1].apply(this.m[h + 2], d);
    }
    this.oa--;
    if (this.na && 0 == this.oa) {
      for (;c = this.na.pop();) {
        this.la(c);
      }
    }
    return 0 != e;
  }
  return!1;
};
f.clear = function(a) {
  if (a) {
    var b = this.q[a];
    b && (ya(b, this.la, this), delete this.q[a]);
  } else {
    this.m.length = 0, this.q = {};
  }
};
f.Fa = function(a) {
  if (a) {
    var b = this.q[a];
    return b ? b.length : 0;
  }
  a = 0;
  for (b in this.q) {
    a += this.Fa(b);
  }
  return a;
};
var zd = function(a) {
  this.U = a;
  this.ka = new yd;
  this.d = N("cv.Messenger-" + a);
};
u(zd, Bc);
f = zd.prototype;
f.wa = function() {
  chrome.extension.onMessage.addListener(s(this.Vd, this));
};
f.ud = function(a, b, c, d) {
  O(this.d, "Sending message to " + a + ": " + JSON.stringify(c));
  chrome.extension.sendMessage(JSON.stringify(new xd(this.U, a, b, c)), d || ca);
};
f.Bd = function(a, b, c) {
  x("background" != this.U, "background page can NOT send message to itself");
  this.ud("background", a, b, c);
};
f.Vd = function(a, b) {
  x(q(a), "Expect a string. Got " + JSON.stringify(a));
  var c = JSON.parse(a);
  if (this.U == c.target && this.U != c.source && ("background" == this.U || "background" == c.source)) {
    var d;
    b.tab ? (d = b.tab, c.windowUrl && d.url != c.windowUrl && (d.url = c.windowUrl, d.title = "", d.favIconUrl = "")) : d = {id:-1};
    var e = this.d, g = "Getting message from tab " + d.id + ": " + JSON.stringify(c);
    e && e.log(Db, g, void 0);
    this.ka.Fc(c.type, d, c.content);
  }
};
f.listen = function(a, b, c) {
  return this.ka.yd(a, b, c);
};
f.Tb = function(a, b, c) {
  return this.ka.zd(a, b, c);
};
f.Ca = function(a) {
  return this.ka.la(a);
};
var Ad = function(a) {
  this.d = N("cv2.PopupDataService");
  this.xa = new zd("popup");
  this.e = new Ac([], null, null, null, null, !1, null);
  this.Q = null;
  this.v = void 0;
  this.eb = this.fb = null;
  this.a = a;
  this.xa.wa();
  this.xa.listen("event_to_popup", this.qc, this);
  this.sendRequest("init", {});
};
f = Ad.prototype;
f.sendRequest = function(a, b) {
  var c = new xc(a, b);
  this.xa.Bd("popup_menu_request", c);
  return c;
};
f.tc = function(a) {
  this.Q = a;
};
f.sc = function() {
  return this.Q;
};
f.sa = function() {
  return this.Q ? this.Q : !cb || !this.e.isV2AppInTab || this.e.currentActivity && "v2_app" == this.e.currentActivity.activityType ? this.e.currentActivity || this.e.desktopActivity ? "none" : "cast_this_tab" : "create_session";
};
f.Ta = function(a) {
  a = {receiver:a, isUserOverride:!!this.Q};
  switch(this.sa()) {
    case "cast_this_tab_audio":
      this.sendRequest("cast_this_tab_audio", a);
      break;
    case "cast_this_tab":
      this.sendRequest("cast_this_tab", a);
      break;
    case "cast_desktop":
      this.sendRequest("launch_desktop_mirror", a);
      break;
    case "create_session":
      this.sendRequest("create_session", a);
      break;
    default:
      return!1;
  }
  return!0;
};
f.nb = function(a) {
  this.e.issue && this.sendRequest("act_on_issue", new yc(this.e.issue.id, a));
};
f.j = function() {
  return this.e;
};
f.qc = function(a, b) {
  "model_update" == b.type && (this.e = b.message, this.vc(), this.uc(), this.a.$broadcast("MODEL_UPDATE"));
};
f.ta = function() {
  return this.eb;
};
f.Ra = function() {
  return this.v;
};
f.Ua = function(a) {
  this.v = a || null;
};
f.kb = function() {
  return this.fb;
};
f.ib = function(a) {
  this.fb = a;
};
f.uc = function() {
  var a = A(this.e.receiverActs, function(a) {
    return a.activity && a.activity.isInLaunch;
  });
  this.eb = a ? a.activity : null;
};
f.vc = function() {
  this.Tc();
  l(this.v) || (this.e.currentActivity ? this.v = this.e.currentActivity : 1 == this.Sc() && (this.v = this.Rc()));
};
f.Tc = function() {
  this.v && !A(this.e.receiverActs, s(function(a) {
    return a.activity && a.activity.id == this.v.id;
  }, this)) && (this.v = void 0);
};
f.Sc = function() {
  return za(this.e.receiverActs, function(a) {
    return a.activity && a.activity.isLocal;
  });
};
f.Rc = function() {
  var a = A(this.e.receiverActs, function(a) {
    return a.activity && a.activity.isLocal;
  });
  return a ? a.activity : null;
};
var Bd = function(a, b) {
  this.d = N("cv2.IssuerNotifierCtrl");
  this.a = a;
  this.b = b;
  this.rc();
  a.$on("MODEL_UPDATE", s(this.B, this));
};
Bd.prototype.B = function() {
  O(this.d, "on model update");
  this.hb();
  this.a.$apply();
};
Bd.prototype.hb = function() {
  var a = this.b.j().issue;
  a && (this.a.issueTitle = a.title, this.a.issueMessage = a.message, this.a.issueOptActText = a.optActionText, this.a.issueDefaultActText = a.defaultActionText, this.a.showIssueOptActButton = 0 < a.optActionText.length);
};
Bd.prototype.rc = function() {
  this.hb();
  this.a.actOnIssueWithOptAct = s(this.b.nb, this.b, !1);
  this.a.actOnIssueWithDefaultAct = s(this.b.nb, this.b, !0);
};
var Cd = function() {
  this.Yb = ia();
}, Dd = new Cd;
Cd.prototype.set = function(a) {
  this.Yb = a;
};
Cd.prototype.reset = function() {
  this.set(ia());
};
Cd.prototype.get = function() {
  return this.Yb;
};
var Ed = function(a) {
  this.Gc = a || "";
  this.Hc = Dd;
};
f = Ed.prototype;
f.Ic = !0;
f.rb = !0;
f.Nc = !0;
f.Mc = !0;
f.sb = !1;
f.Oc = !1;
var Z = function(a) {
  return 10 > a ? "0" + a : String(a);
}, Fd = function(a, b) {
  var c = (a.Ab() - b) / 1E3, d = c.toFixed(3), e = 0;
  if (1 > c) {
    e = 2;
  } else {
    for (;100 > c;) {
      e++, c *= 10;
    }
  }
  for (;0 < e--;) {
    d = " " + d;
  }
  return d;
}, Gd = function(a) {
  Ed.call(this, a);
};
u(Gd, Ed);
Gd.prototype.dd = function(a) {
  var b = [];
  b.push(this.Gc, " ");
  if (this.rb) {
    var c = new Date(a.Ab());
    b.push("[", Z(c.getFullYear() - 2E3) + Z(c.getMonth() + 1) + Z(c.getDate()) + " " + Z(c.getHours()) + ":" + Z(c.getMinutes()) + ":" + Z(c.getSeconds()) + "." + Z(Math.floor(c.getMilliseconds() / 10)), "] ");
  }
  this.Nc && b.push("[", Fd(a, this.Hc.get()), "s] ");
  this.Mc && b.push("[", a.ub(), "] ");
  this.Oc && b.push("[", a.Da().name, "] ");
  b.push(a.getMessage());
  this.sb && a.Kc() && b.push("\n", a.Lc());
  this.Ic && b.push("\n");
  return b.join("");
};
var Hd = function() {
  this.Fb = s(this.Xc, this);
  this.Ga = new Gd;
  this.Ga.rb = !1;
  this.Eb = this.Ga.sb = !1;
  this.Bb = "";
  this.Jc = {};
};
Hd.prototype.pc = function(a) {
  if (a != this.Eb) {
    var b = Gb();
    a ? b.gd(this.Fb) : b.jd(this.Fb);
    this.Eb = a;
  }
};
Hd.prototype.Xc = function(a) {
  if (!this.Jc[a.ub()]) {
    var b = this.Ga.dd(a), c = Id;
    if (c) {
      switch(a.Da()) {
        case xb:
          Jd(c, "info", b);
          break;
        case yb:
          Jd(c, "error", b);
          break;
        case zb:
          Jd(c, "warn", b);
          break;
        default:
          Jd(c, "debug", b);
      }
    } else {
      window.opera ? window.opera.postError(b) : this.Bb += b;
    }
  }
};
var Id = window.console, Jd = function(a, b, c) {
  if (a[b]) {
    a[b](c);
  } else {
    a.log(c);
  }
};
var Kd = function(a, b, c) {
  var d = new Hd;
  Gb().ea(Cb);
  d.pc(!0);
  this.d = N("cv2.PopupMenuCtrl");
  this.G = b;
  this.b = c;
  this.a = a;
  hd();
  this.cb();
  a.$on("MODEL_UPDATE", s(this.B, this));
};
Kd.prototype.B = function() {
  O(this.d, "on model update");
  this.cb();
};
Kd.prototype.cb = function() {
  var a = this.b.j(), b = "/receiver_picker";
  a.settings.statsCollectNotificationDismissed ? a.issue && "fatal" == a.issue.severity ? b = "/issue_notifier" : this.b.ta() ? b = "/waiting" : this.b.Ra() ? b = "/activity_detail" : a.isV1AppInTab && !a.settings.castAppNotificationDismissed && (b = "/v1_app_notification") : b = "/stats_collect_prompt";
  O(this.d, "Showing " + b);
  this.G.url(b);
  this.a.$$phase || this.a.$apply();
};
var Ld = function(a, b, c) {
  this.d = N("cv2.ReceiverPickerCtrl");
  this.G = b;
  this.b = c;
  this.e = c.j();
  this.a = a;
  this.n = Y.X();
  this.fc();
  this.ec();
  a.$on("MODEL_UPDATE", s(this.B, this));
};
f = Ld.prototype;
f.B = function() {
  O(this.d, "on model update");
  this.e = this.b.j();
  this.Xa();
  this.Ya();
  this.a.$apply();
};
f.fc = function() {
  this.Xa();
  this.a.onClickLearnCastEnabledPage = t(sd, "http://support.google.com/chromecast/go/castenabledpage");
  this.a.onClickReceiver = s(this.xc, this);
  this.a.onClickDeviceMissing = t(sd, "http://support.google.com/chromecast/go/nodevices");
  this.a.sendFeedback = t(td, "feedback.html");
  this.a.showOptions = t(td, "options.html");
  this.a.showHelp = s(this.yc, this);
  this.a.disableProjectScreen = (1920 < window.screen.width * window.devicePixelRatio || 1080 < window.screen.height * window.devicePixelRatio) && !(0 <= w(bb, 29));
};
f.ec = function() {
  this.a.data = this.a.data || {};
  this.Ya();
  this.a.data.selectingCastMode = !1;
  this.a.setUserCastAction = s(this.Bc, this);
};
f.Bc = function(a) {
  this.b.tc(a);
  this.a.data.castAction = a;
  this.jb();
  this.a.data.selectingCastMode = !1;
};
f.Ya = function() {
  this.e.isV2AppInTab && cb ? (this.a.offerCreateSession = !0, this.a.castAppLabel = this.n.getMessage(Nb, this.a)) : this.a.offerCreateSession = !1;
  this.a.data.castAction = this.b.sc();
};
f.Xa = function() {
  Ea(this.e.receiverActs, function(a, b) {
    var c = "cast" != a.receiver.receiverType;
    return c == ("cast" != b.receiver.receiverType) ? a.receiver.name.localeCompare(b.receiver.name) : c ? 1 : -1;
  });
  this.a.receiverActs = this.e.receiverActs;
  this.a.v2AppDomain = this.e.v2AppDomain;
  this.a.isV1AppInTab = this.e.isV1AppInTab;
  this.jb();
};
f.jb = function() {
  var a = null;
  switch(this.b.sa()) {
    case "create_session":
      a = this.n.getMessage(Mb, this.a);
      break;
    case "cast_this_tab":
      a = Jb;
      break;
    case "cast_desktop":
      a = Lb;
      break;
    case "cast_this_tab_audio":
      a = Kb;
      break;
    default:
      (a = this.d) && a.gb("Cannot set receiver picker title", void 0);
      return;
  }
  x(null != a);
  this.a.receiverListTitle = a;
};
f.Cc = function(a) {
  this.b.ib(a);
  this.G.path("/waiting");
};
f.xc = function(a) {
  this.b.ta() ? (a = this.d) && a.info("There is an activity in launch; cannot launch another activity", void 0) : a.activity ? (U("popup-choice-active"), this.b.Ua(a.activity), this.G.path("/activity_detail")) : (U("popup-choice-idle"), this.b.Ta(a.receiver) && ("custom" == a.receiver.receiverType ? window.close() : this.Cc(a.receiver)));
};
f.yc = function() {
  U("popup-choice-help");
  kd("http://support.google.com/chromecast/go/castfromchrome*", "http://support.google.com/chromecast/go/castfromchrome", function() {
    window.close();
  });
};
var Md = function(a, b) {
  this.b = b;
  this.a = a;
  this.n = Y.X();
  this.mb();
  a.$on("MODEL_UPDATE", s(this.mb, this));
};
Md.prototype.mb = function() {
  var a = this.b.ta();
  a ? this.a.waitingTitle = this.n.getMessage(Ib, {receiverName:a.receiver.name}) : this.b.kb() ? (a = this.b.kb(), this.b.ib(null), this.a.waitingTitle = "<b>" + this.n.getMessage(Ib, {receiverName:a.name}) + "</b>") : this.a.waitingTitle = "";
};
document.addEventListener("DOMContentLoaded", function() {
  var a = "UA-50032818-1";
  eb ? a = "UA-50032818-2" : fb && (a = "UA-50032818-3");
  window._gaq = window._gaq || [];
  window._gaq.push(["_setAccount", a]);
  window._gaq.push(["_trackPageview"]);
  a = document.createElement("script");
  a.type = "text/javascript";
  a.async = !0;
  a.src = "https://ssl.google-analytics.com/ga.js";
  var b = document.getElementsByTagName("script")[0];
  b.parentNode.insertBefore(a, b);
}, !1);
var $ = angular.module("popupMenu", ["ngSanitize", "chrome_i18n", "ngRoute"]);
$.factory("popupMenuDataService", ["$rootScope", function(a) {
  return new Ad(a);
}]);
$.controller("PopupMenuCtrl", ["$scope", "$location", "popupMenuDataService", Kd]);
$.controller("PopupIssuerNotifierCtrl", ["$scope", "popupMenuDataService", Bd]);
$.controller("PopupWaitingCtrl", ["$scope", "popupMenuDataService", Md]);
$.controller("PopupReceiverPickerCtrl", ["$scope", "$location", "popupMenuDataService", Ld]);
$.controller("PopupActivityDetailCtrl", ["$scope", "$location", "popupMenuDataService", wd]);
$.controller("PopupV1AppNotificationCtrl", ["$scope", "popupMenuDataService", function(a, b) {
  a.dismissCastAppNotification = function() {
    var a = b.j();
    a.settings.castAppNotificationDismissed = !0;
    b.sendRequest("update_settings", a.settings);
    window.close();
  };
}]);
$.controller("StatsCollectionPromptCtrl", ["$scope", "popupMenuDataService", function(a, b) {
  a.sendUsage = b.j().settings.sendUsageEnabled;
  var c = function(a, c) {
    var g = b.j();
    fa(c) && (g.settings.sendUsageEnabled = c);
    g.settings.statsCollectNotificationDismissed = a;
    b.sendRequest("update_settings", g.settings);
  };
  a.changeSendUsage = function() {
    c(!1, a.sendUsage);
  };
  a.dismiss = function() {
    c(!0);
    window.close();
  };
  a.$on("MODEL_UPDATE", function() {
    a.sendUsage = b.j().settings.sendUsageEnabled;
    a.$apply();
  });
}]);
$.config(["$routeProvider", function(a) {
  a.when("/", {templateUrl:"/popup_partials/initializing.html"}).when("/v1_app_notification", {controller:"PopupV1AppNotificationCtrl", templateUrl:"/popup_partials/v1_app_notification.html"}).when("/receiver_picker", {controller:"PopupReceiverPickerCtrl", templateUrl:"/popup_partials/receiver_picker.html"}).when("/activity_detail", {controller:"PopupActivityDetailCtrl", templateUrl:"/popup_partials/activity_detail.html"}).when("/issue_notifier", {controller:"PopupIssuerNotifierCtrl", templateUrl:"/popup_partials/issue_notifier.html"}).when("/waiting", 
  {controller:"PopupWaitingCtrl", templateUrl:"/popup_partials/waiting.html"}).when("/stats_collect_prompt", {controller:"StatsCollectionPromptCtrl", templateUrl:"/popup_partials/stats_collect_prompt.html"}).otherwise({redirectTo:"/"});
}]);
$.config(["$compileProvider", function(a) {
  a.imgSrcSanitizationWhitelist(/^\s*(https?|chrome-extension):|blob:chrome-extension%3A/);
}]);

