var f;
window.ae = !0;
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
  a.ra = function() {
    return a.Nb ? a.Nb : a.Nb = new a;
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
};
Math.random();
var ga = function(a, b, c) {
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
  a.Lb = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.$d = function(a, c, g) {
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
}, ka = /&/g, la = /</g, ma = />/g, na = /"/g, oa = /'/g, pa = /\x00/g, qa = /[\x00&<>"']/, ta = function(a, b) {
  for (var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(d.length, e.length), h = 0;0 == c && h < g;h++) {
    var m = d[h] || "", M = e[h] || "", wa = RegExp("(\\d*)(\\D*)", "g"), qc = RegExp("(\\d*)(\\D*)", "g");
    do {
      var Q = wa.exec(m) || ["", "", ""], R = qc.exec(M) || ["", "", ""];
      if (0 == Q[0].length && 0 == R[0].length) {
        break;
      }
      c = sa(0 == Q[1].length ? 0 : parseInt(Q[1], 10), 0 == R[1].length ? 0 : parseInt(R[1], 10)) || sa(0 == Q[2].length, 0 == R[2].length) || sa(Q[2], R[2]);
    } while (0 == c);
  }
  return c;
}, sa = function(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
};
Math.random();
var ua = function(a, b) {
  b.unshift(a);
  v.call(this, ja.apply(null, b));
  b.shift();
};
u(ua, v);
ua.prototype.name = "AssertionError";
var va = function(a, b, c, d) {
  var e = "Assertion failed";
  if (c) {
    var e = e + (": " + c), g = d
  } else {
    a && (e += ": " + a, g = b);
  }
  throw new ua("" + e, g || []);
}, w = function(a, b, c) {
  a || va("", null, b, Array.prototype.slice.call(arguments, 2));
  return a;
}, xa = function(a, b) {
  throw new ua("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}, ya = function(a, b, c) {
  r(a) || va("Expected function but got %s: %s.", [p(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
var x = Array.prototype, y = x.indexOf ? function(a, b, c) {
  w(null != a.length);
  return x.indexOf.call(a, b, c);
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
}, za = x.forEach ? function(a, b, c) {
  w(null != a.length);
  x.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = q(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a);
  }
}, Aa = function(a, b, c) {
  var d = 0;
  za(a, function(a, g, h) {
    b.call(c, a, g, h) && ++d;
  }, c);
  return d;
}, z = function(a, b, c) {
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
}, Ca = function(a, b) {
  var c = y(a, b), d;
  (d = 0 <= c) && Ba(a, c);
  return d;
}, Ba = function(a, b) {
  w(null != a.length);
  return 1 == x.splice.call(a, b, 1).length;
}, Da = function(a, b, c) {
  w(null != a.length);
  return 2 >= arguments.length ? x.slice.call(a, b) : x.slice.call(a, b, c);
}, Fa = function(a, b) {
  a.sort(b || Ea);
}, Ea = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
};
var A;
t: {
  var Ga = k.navigator;
  if (Ga) {
    var Ha = Ga.userAgent;
    if (Ha) {
      A = Ha;
      break t;
    }
  }
  A = "";
}
;var Ia = -1 != A.indexOf("Opera") || -1 != A.indexOf("OPR"), B = -1 != A.indexOf("Trident") || -1 != A.indexOf("MSIE"), Ja = -1 != A.indexOf("Gecko") && -1 == A.toLowerCase().indexOf("webkit") && !(-1 != A.indexOf("Trident") || -1 != A.indexOf("MSIE")), C = -1 != A.toLowerCase().indexOf("webkit"), Ka = function() {
  var a = k.document;
  return a ? a.documentMode : void 0;
}, La = function() {
  var a = "", b;
  if (Ia && k.opera) {
    return a = k.opera.version, r(a) ? a() : a;
  }
  Ja ? b = /rv\:([^\);]+)(\)|;)/ : B ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : C && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(A)) ? a[1] : "");
  return B && (b = Ka(), b > parseFloat(a)) ? String(b) : a;
}(), Ma = {}, D = function(a) {
  return Ma[a] || (Ma[a] = 0 <= ta(La, a));
}, Na = k.document, Oa = Na && B ? Ka() || ("CSS1Compat" == Na.compatMode ? parseInt(La, 10) : 5) : void 0;
var Pa, Qa, Ra, Sa, Ta, Ua, Va;
Va = Ua = Ta = Sa = Ra = Qa = Pa = !1;
var E = A;
E && (-1 != E.indexOf("Firefox") ? Pa = !0 : -1 != E.indexOf("Camino") ? Qa = !0 : -1 != E.indexOf("iPhone") || -1 != E.indexOf("iPod") ? Ra = !0 : -1 != E.indexOf("iPad") ? Sa = !0 : -1 != E.indexOf("Chrome") ? Ua = !0 : -1 != E.indexOf("Android") ? Ta = !0 : -1 != E.indexOf("Safari") && (Va = !0));
var Wa = Pa, Xa = Qa, Ya = Ra, Za = Sa, $a = Ta, ab = Ua, bb = Va;
var F = function(a) {
  return(a = a.exec(A)) ? a[1] : "";
}, cb = function() {
  if (Wa) {
    return F(/Firefox\/([0-9.]+)/);
  }
  if (B || Ia) {
    return La;
  }
  if (ab) {
    return F(/Chrome\/([0-9.]+)/);
  }
  if (bb) {
    return F(/Version\/([0-9.]+)/);
  }
  if (Ya || Za) {
    var a;
    if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(A)) {
      return a[1] + "." + a[2];
    }
  } else {
    if ($a) {
      return(a = F(/Android\s+([0-9.]+)/)) ? a : F(/Version\/([0-9.]+)/);
    }
    if (Xa) {
      return F(/Camino\/([0-9.]+)/);
    }
  }
  return "";
}();
var db = "undefined" != typeof chrome && !!chrome.mdns && !!chrome.cast && !!chrome.cast.channel && !!chrome.browserAction && !!chrome.browserAction.openPopup, eb = function() {
  return l(chrome.runtime) ? chrome.runtime.id : "boadgeojelhgndaghljhdicfkmllpafd";
}, fb = "dliochdbjfkdbacpmhlcpmleaejidimm" === eb(), gb = "boadgeojelhgndaghljhdicfkmllpafd" === eb();
ta(cb, 35);
var hb = !!chrome.cast && !!chrome.cast.streaming && 0 <= ta(cb, 36);
var ib = "StopIteration" in k ? k.StopIteration : Error("StopIteration"), jb = function() {
};
jb.prototype.next = function() {
  throw ib;
};
jb.prototype.Qd = function() {
  return this;
};
var kb = function(a, b, c) {
  for (var d in a) {
    if (b.call(c, a[d], d, a)) {
      return!0;
    }
  }
  return!1;
}, lb = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
}, mb = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
}, nb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), ob = function(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var g = 0;g < nb.length;g++) {
      c = nb[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
}, pb = function(a) {
  var b = arguments.length;
  if (1 == b && "array" == p(arguments[0])) {
    return pb.apply(null, arguments[0]);
  }
  for (var c = {}, d = 0;d < b;d++) {
    c[arguments[d]] = !0;
  }
  return c;
};
var G = function(a, b) {
  this.o = {};
  this.h = [];
  this.S = this.v = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1]);
    }
  } else {
    a && this.zc(a);
  }
};
G.prototype.Ea = function() {
  return this.v;
};
G.prototype.qa = function() {
  this.T();
  for (var a = [], b = 0;b < this.h.length;b++) {
    a.push(this.o[this.h[b]]);
  }
  return a;
};
G.prototype.P = function() {
  this.T();
  return this.h.concat();
};
G.prototype.equals = function(a, b) {
  if (this === a) {
    return!0;
  }
  if (this.v != a.Ea()) {
    return!1;
  }
  var c = b || qb;
  this.T();
  for (var d, e = 0;d = this.h[e];e++) {
    if (!c(this.get(d), a.get(d))) {
      return!1;
    }
  }
  return!0;
};
var qb = function(a, b) {
  return a === b;
};
f = G.prototype;
f.clear = function() {
  this.o = {};
  this.S = this.v = this.h.length = 0;
};
f.remove = function(a) {
  return Object.prototype.hasOwnProperty.call(this.o, a) ? (delete this.o[a], this.v--, this.S++, this.h.length > 2 * this.v && this.T(), !0) : !1;
};
f.T = function() {
  if (this.v != this.h.length) {
    for (var a = 0, b = 0;a < this.h.length;) {
      var c = this.h[a];
      Object.prototype.hasOwnProperty.call(this.o, c) && (this.h[b++] = c);
      a++;
    }
    this.h.length = b;
  }
  if (this.v != this.h.length) {
    for (var d = {}, b = a = 0;a < this.h.length;) {
      c = this.h[a], Object.prototype.hasOwnProperty.call(d, c) || (this.h[b++] = c, d[c] = 1), a++;
    }
    this.h.length = b;
  }
};
f.get = function(a, b) {
  return Object.prototype.hasOwnProperty.call(this.o, a) ? this.o[a] : b;
};
f.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.o, a) || (this.v++, this.h.push(a), this.S++);
  this.o[a] = b;
};
f.zc = function(a) {
  var b;
  a instanceof G ? (b = a.P(), a = a.qa()) : (b = mb(a), a = lb(a));
  for (var c = 0;c < b.length;c++) {
    this.set(b[c], a[c]);
  }
};
f.forEach = function(a, b) {
  for (var c = this.P(), d = 0;d < c.length;d++) {
    var e = c[d], g = this.get(e);
    a.call(b, g, e, this);
  }
};
f.clone = function() {
  return new G(this);
};
f.Qd = function(a) {
  this.T();
  var b = 0, c = this.h, d = this.o, e = this.S, g = this, h = new jb;
  h.next = function() {
    for (;;) {
      if (e != g.S) {
        throw Error("The map has changed since the iterator was created");
      }
      if (b >= c.length) {
        throw ib;
      }
      var h = c[b++];
      return a ? h : d[h];
    }
  };
  return h;
};
var rb = function(a) {
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
  return lb(a);
}, sb = function(a, b, c) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, c);
  } else {
    if (ea(a) || q(a)) {
      za(a, b, c);
    } else {
      var d;
      if ("function" == typeof a.P) {
        d = a.P();
      } else {
        if ("function" != typeof a.qa) {
          if (ea(a) || q(a)) {
            d = [];
            for (var e = a.length, g = 0;g < e;g++) {
              d.push(g);
            }
          } else {
            d = mb(a);
          }
        } else {
          d = void 0;
        }
      }
      for (var e = rb(a), g = e.length, h = 0;h < g;h++) {
        b.call(c, e[h], d && d[h], a);
      }
    }
  }
};
var ub = function(a, b) {
  try {
    var c;
    var d = ba("window.location.href");
    if (q(a)) {
      c = {message:a, name:"Unknown error", lineNumber:"Not available", fileName:d, stack:"Not available"};
    } else {
      var e, g, h = !1;
      try {
        e = a.lineNumber || a.be || "Not available";
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
    return "Message: " + ra(c.message) + '\nUrl: <a href="view-source:' + c.fileName + '" target="_new">' + c.fileName + "</a>\nLine: " + c.lineNumber + "\n\nBrowser stack:\n" + ra(c.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + ra(tb(b) + "-> ");
  } catch (wa) {
    return "Exception trying to expose exception! You win, we lose. " + wa;
  }
}, tb = function(a) {
  var b;
  b || (b = vb(a || arguments.callee.caller, []));
  return b;
}, vb = function(a, b) {
  var c = [];
  if (0 <= y(b, a)) {
    c.push("[...circular reference...]");
  } else {
    if (a && 50 > b.length) {
      c.push(wb(a) + "(");
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
            g = (g = wb(g)) ? g : "[fn]";
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
        c.push(vb(a.caller, b));
      } catch (h) {
        c.push("[exception trying to get caller]\n");
      }
    } else {
      a ? c.push("[...long stack...]") : c.push("[end]");
    }
  }
  return c.join("");
}, wb = function(a) {
  if (H[a]) {
    return H[a];
  }
  a = String(a);
  if (!H[a]) {
    var b = /function ([^\(]+)/.exec(a);
    H[a] = b ? b[1] : "[Anonymous]";
  }
  return H[a];
}, H = {};
var xb = function(a, b, c, d, e) {
  this.reset(a, b, c, d, e);
};
xb.prototype.Ha = null;
xb.prototype.Ga = null;
var yb = 0;
f = xb.prototype;
f.reset = function(a, b, c, d, e) {
  "number" == typeof e || yb++;
  this.Yc = d || ia();
  this.D = a;
  this.Xc = b;
  this.Wc = c;
  delete this.Ha;
  delete this.Ga;
};
f.pb = function() {
  return this.Wc;
};
f.Gc = function() {
  return this.Ha;
};
f.hd = function(a) {
  this.Ha = a;
};
f.Hc = function() {
  return this.Ga;
};
f.jd = function(a) {
  this.Ga = a;
};
f.Ca = function() {
  return this.D;
};
f.da = function(a) {
  this.D = a;
};
f.getMessage = function() {
  return this.Xc;
};
f.wb = function() {
  return this.Yc;
};
var I = function(a) {
  this.tb = a;
  this.n = this.Fa = this.D = this.s = null;
}, J = function(a, b) {
  this.name = a;
  this.value = b;
};
J.prototype.toString = function() {
  return this.name;
};
var zb = new J("SHOUT", 1200), Ab = new J("SEVERE", 1E3), Bb = new J("WARNING", 900), Cb = new J("INFO", 800), Db = new J("CONFIG", 700), Eb = new J("FINE", 500), Fb = new J("FINER", 400);
f = I.prototype;
f.getName = function() {
  return this.tb;
};
f.ed = function(a) {
  this.n || (this.n = []);
  this.n.push(a);
};
f.gd = function(a) {
  var b = this.n;
  return!!b && Ca(b, a);
};
f.getParent = function() {
  return this.s;
};
f.getChildren = function() {
  this.Fa || (this.Fa = {});
  return this.Fa;
};
f.da = function(a) {
  this.D = a;
};
f.Ca = function() {
  return this.D;
};
f.Ib = function() {
  if (this.D) {
    return this.D;
  }
  if (this.s) {
    return this.s.Ib();
  }
  xa("Root logger has no level set.");
  return null;
};
f.rd = function(a) {
  return a.value >= this.Ib().value;
};
f.log = function(a, b, c) {
  this.rd(a) && (r(b) && (b = b()), this.qd(this.Jb(a, b, c, I.prototype.log)));
};
f.Jb = function(a, b, c, d) {
  a = new xb(a, String(b), this.tb);
  c && (a.hd(c), a.jd(ub(c, d || I.prototype.Jb)));
  return a;
};
f.jb = function(a, b) {
  this.log(Ab, a, b);
};
f.bb = function(a, b) {
  this.log(Bb, a, b);
};
f.info = function(a, b) {
  this.log(Cb, a, b);
};
f.config = function(a, b) {
  this.log(Db, a, b);
};
f.Vd = function(a, b) {
  this.log(Eb, a, b);
};
f.qd = function(a) {
  var b = "log:" + a.getMessage();
  k.console && (k.console.timeStamp ? k.console.timeStamp(b) : k.console.markTimeline && k.console.markTimeline(b));
  k.msWriteProfilerMark && k.msWriteProfilerMark(b);
  for (b = this;b;) {
    b.Sd(a), b = b.getParent();
  }
};
f.Sd = function(a) {
  if (this.n) {
    for (var b = 0, c;c = this.n[b];b++) {
      c(a);
    }
  }
};
f.Fd = function(a) {
  this.s = a;
};
f.Cd = function(a, b) {
  this.getChildren()[a] = b;
};
var Gb = {}, K = null, Hb = function() {
  K || (K = new I(""), Gb[""] = K, K.da(Db));
}, Ib = function() {
  Hb();
  return K;
}, Jb = function(a) {
  Hb();
  var b;
  if (!(b = Gb[a])) {
    b = new I(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Jb(a.substr(0, c));
    c.Cd(d, b);
    b.Fd(c);
    Gb[a] = b;
  }
  return b;
};
var L = function(a, b) {
  var c = Jb(a);
  b && c && c.da(b);
  return c;
}, N = function(a, b, c) {
  a && a.Vd(b, c);
};
chrome.i18n.getMessage("4014224501758376361", ["{{receiverName}}"]);
var Kb = chrome.i18n.getMessage("6046507125919556913"), Lb = chrome.i18n.getMessage("1189144544819350763"), Mb = chrome.i18n.getMessage("3430817026795535765"), Nb = chrome.i18n.getMessage("5056298333685549098", ["{{v2AppDomain}}"]), Ob = chrome.i18n.getMessage("7344649529753624682", ["{{v2AppDomain}}"]), Pb = chrome.i18n.getMessage("3278102219211539720"), Qb = chrome.i18n.getMessage("7484752158248863804"), Rb = chrome.i18n.getMessage("1717149362663359343", ["{{v2AppDomain}}"]);
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
var Sb = chrome.i18n.getMessage("6236792503803747284"), Tb = chrome.i18n.getMessage("3681271501407987946"), Ub = chrome.i18n.getMessage("1403598074357445300");
chrome.i18n.getMessage("8700054488486244094");
chrome.i18n.getMessage("7786163844034528352");
chrome.i18n.getMessage("3202350311251778009");
chrome.i18n.getMessage("8304164664901068767");
chrome.i18n.getMessage("6392731103614271560");
var Vb = function(a, b, c, d, e, g, h, m) {
  this.id = a;
  this.name = b;
  this.videoWidth = c;
  this.videoHeight = d;
  this.videoResolution = c + "x" + d;
  this.minVideoBitrate = e;
  this.maxVideoBitrate = g;
  this.videoQuality = h;
  this.audioBitrate = m;
}, O = new Vb("high", Tb, 1280, 720, 2E3, 2500, 56, 128), Wb = [new Vb("highest", Ub, 1280, 720, 4E3, 5E3, 56, 128), O, new Vb("low", Sb, 854, 480, 750, 1500, 56, 128)];
var Xb = function() {
  this.videoBitrate = O.maxVideoBitrate;
  this.minVideoBitrate = O.minVideoBitrate;
  this.maxVideoBitrate = O.maxVideoBitrate;
  this.videoQuality = O.videoQuality;
  this.minWidth = O.videoWidth;
  this.minHeight = O.videoHeight;
  this.audioBitrate = O.audioBitrate;
  this.bufferedMode = "on";
  this.bufferSizeMillis = 500;
  this.maxCastLatencyMillis = 300;
  this.maxFrameRate = 30;
  this.preferredVideoCodec = "CAST1";
};
Xb.prototype.update = function(a) {
  for (var b in this) {
    r(this[b]) || (null != a[b] && p(this[b]) == p(a[b]) ? this[b] = a[b] : L("cv.MirrorTabSettings").bb("Failed to load mirror settings for key [" + b + "]:" + a[b]));
  }
};
var Yb = function(a) {
  k.setTimeout(function() {
    throw a;
  }, 0);
}, Zb, $b = function() {
  if (k.Promise && k.Promise.resolve) {
    var a = k.Promise.resolve();
    return function(b) {
      a.then(function() {
        try {
          b();
        } catch (a) {
          Yb(a);
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
      var a = d.Qb;
      d.Qb = null;
      a();
    };
    return function(a) {
      e.next = {Qb:a};
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
var ec = function(a, b) {
  if (!ac) {
    var c = bc;
    r(k.setImmediate) ? k.setImmediate(c) : (Zb || (Zb = $b()), Zb(c));
    ac = !0;
  }
  cc.push(new dc(a, b));
}, ac = !1, cc = [], bc = function() {
  for (;cc.length;) {
    var a = cc;
    cc = [];
    for (var b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        c.Wd.call(c.scope);
      } catch (d) {
        Yb(d);
      }
    }
  }
  ac = !1;
}, dc = function(a, b) {
  this.Wd = a;
  this.scope = b;
};
var fc = function(a) {
  a.prototype.then = a.prototype.then;
  a.prototype.$goog_Thenable = !0;
};
var P = function(a, b) {
  this.f = 0;
  this.kb = void 0;
  this.l = this.s = null;
  this.fa = this.Aa = !1;
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
P.prototype.then = function(a, b, c) {
  null != a && ya(a, "opt_onFulfilled should be a function.");
  null != b && ya(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
  return this.Rd(r(a) ? a : null, r(b) ? b : null, c);
};
fc(P);
f = P.prototype;
f.cancel = function(a) {
  0 == this.f && ec(function() {
    var b = new S(a);
    this.ub(b);
  }, this);
};
f.ub = function(a) {
  0 == this.f && (this.s ? this.s.Pc(this, a) : this.L(3, a));
};
f.Pc = function(a, b) {
  if (this.l) {
    for (var c = 0, d = -1, e = 0, g;g = this.l[e];e++) {
      if (g = g.ga) {
        if (c++, g == a && (d = e), 0 <= d && 1 < c) {
          break;
        }
      }
    }
    0 <= d && (0 == this.f && 1 == c ? this.ub(b) : (c = this.l.splice(d, 1)[0], this.qb(c, 3, b)));
  }
};
f.Vc = function(a) {
  this.l && this.l.length || 2 != this.f && 3 != this.f || this.rb();
  this.l || (this.l = []);
  this.l.push(a);
};
f.Rd = function(a, b, c) {
  var d = {ga:null, Cb:null, Db:null};
  d.ga = new P(function(e, g) {
    d.Cb = a ? function(b) {
      try {
        var d = a.call(c, b);
        e(d);
      } catch (M) {
        g(M);
      }
    } : e;
    d.Db = b ? function(a) {
      try {
        var d = b.call(c, a);
        !l(d) && a instanceof S ? g(a) : e(d);
      } catch (M) {
        g(M);
      }
    } : g;
  });
  d.ga.s = this;
  this.Vc(d);
  return d.ga;
};
f.zb = function(a) {
  w(1 == this.f);
  this.f = 0;
  this.L(2, a);
};
f.Ab = function(a) {
  w(1 == this.f);
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
        b.then(this.zb, this.Ab, this);
        return;
      }
      c = typeof b;
      if ("object" == c && null != b || "function" == c) {
        try {
          var e = b.then;
          if (r(e)) {
            this.Sc(b, e);
            return;
          }
        } catch (g) {
          a = 3, b = g;
        }
      }
    }
    this.kb = b;
    this.f = a;
    this.rb();
    3 != a || b instanceof S || gc(this, b);
  }
};
f.Sc = function(a, b) {
  this.f = 1;
  var c = this, d = !1, e = function(a) {
    d || (d = !0, c.zb(a));
  }, g = function(a) {
    d || (d = !0, c.Ab(a));
  };
  try {
    b.call(a, e, g);
  } catch (h) {
    g(h);
  }
};
f.rb = function() {
  this.Aa || (this.Aa = !0, ec(this.xd, this));
};
f.xd = function() {
  for (;this.l && this.l.length;) {
    var a = this.l;
    this.l = [];
    for (var b = 0;b < a.length;b++) {
      this.qb(a[b], this.f, this.kb);
    }
  }
  this.Aa = !1;
};
f.qb = function(a, b, c) {
  2 == b ? a.Cb(c) : (this.pd(), a.Db(c));
};
f.td = function() {
};
f.pd = function() {
  var a;
  for (a = this;a && a.fa;a = a.s) {
    a.fa = !1;
  }
};
var gc = function(a, b) {
  a.fa = !0;
  ec(function() {
    a.fa && (a.td(b), hc.call(null, b));
  });
}, hc = Yb, S = function(a) {
  v.call(this, a);
};
u(S, v);
S.prototype.name = "cancel";
var ic = function() {
};
u(ic, Error);
var jc = function() {
  this.f = "pending";
  this.n = [];
  this.I = this.Oc = void 0;
};
fc(jc);
var kc = function() {
  v.call(this, "Multiple attempts to set the state of this Result");
};
u(kc, v);
f = jc.prototype;
f.Kb = function() {
  return this.f;
};
f.fd = function() {
  return this.Oc;
};
f.getError = function() {
  return this.I;
};
f.kd = function(a, b) {
  this.Da() ? this.n.push({callback:a, scope:b || null}) : a.call(b, this);
};
f.Ad = function(a) {
  if (this.Da()) {
    this.I = a, this.f = "error", this.Qc();
  } else {
    if (!this.sb()) {
      throw new kc;
    }
  }
};
f.Qc = function() {
  var a = this.n;
  this.n = [];
  for (var b = 0;b < a.length;b++) {
    var c = a[b];
    c.callback.call(c.scope, this);
  }
};
f.Da = function() {
  return "pending" == this.f;
};
f.cancel = function() {
  return this.Da() ? (this.Ad(new ic), !0) : !1;
};
f.sb = function() {
  return "error" == this.f && this.I instanceof ic;
};
f.then = function(a, b, c) {
  var d, e, g = new P(function(a, b) {
    d = a;
    e = b;
  });
  this.kd(function(a) {
    a.sb() ? g.cancel() : "success" == a.Kb() ? d(a.fd()) : "error" == a.Kb() && e(a.getError());
  });
  return g.then(a, b, c);
};
var lc = function() {
  this.hasNetworkSoftware = this.networkDescription = this.gpu = this.cpu = this.googleUsername = null;
};
var mc = function() {
  this.dismissClicks = this.earliestTimeToShowWarning = this.sessionsBeforeWarning = 0;
  this.statsCollectNotificationDismissed = this.intelBadCpuWarningDismissed = this.castAppNotificationDismissed = !1;
};
var nc = function() {
  this.c = L("cv.Settings");
  this.k = {};
  this.Ac();
};
da(nc);
nc.prototype.Ac = function() {
  this.k.tabCaptureSettings = new Xb;
  this.k.feedback = new lc;
  this.k.userNotification = new mc;
  this.k.siteTokens = {};
  this.k.mirrorLinkProtection = !0;
  this.k.sendStatsEnabled = !0;
  this.k.fixedIps = [];
  this.k.enableCloud = !1;
  this.k.cloudDevice = {};
  this.k.enableHangouts = !1;
  this.k.lastMirrorDataAutoSubmitTimeMillis = 0;
  this.k.useCastStreaming = hb && !1;
};
nc.prototype.yd = function() {
  return this.k.sendStatsEnabled;
};
var T = function(a, b) {
  nc.ra().yd() && window._gaq && window._gaq.push(["_trackEvent", "UI", a, b, void 0]);
};
pb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
var oc = /<[^>]*>|&[^;]+;/g, pc = function(a, b) {
  return b ? a.replace(oc, "") : a;
}, rc = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"), sc = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]"), tc = /^http:\/\/.*/, uc = /\s+/, vc = /\d/;
pb("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
pb("link", "script", "style");
var wc = function(a) {
  this.Td = "number" == typeof a ? 0 < a ? 1 : 0 > a ? -1 : null : null == a ? null : a ? -1 : 1;
};
wc.prototype.Dd = function(a, b) {
  for (var c = 0, d = 0, e = !1, g = pc(a, b).split(uc), h = 0;h < g.length;h++) {
    var m = g[h];
    sc.test(pc(m, void 0)) ? (c++, d++) : tc.test(m) ? e = !0 : rc.test(pc(m, void 0)) ? d++ : vc.test(m) && (e = !0);
  }
  return 0 == d ? e ? 1 : 0 : .4 < c / d ? -1 : 1;
};
wc.prototype.ld = function(a, b) {
  return this.Ed(this.Dd(a, b));
};
wc.prototype.Ed = function(a) {
  return-1 == (0 == a ? this.Td : a) ? "rtl" : "ltr";
};
if ("undefined" != typeof angular) {
  var xc = angular.module("chrome_i18n", []);
  chrome.runtime && chrome.runtime.getManifest && chrome.runtime.getManifest().default_locale && xc.directive("angularMessage", function() {
    return{restrict:"E", transclude:"element", replace:!0, controller:["$scope", function(a) {
      this.Ja = this.Ka = null;
      a.dirForText = s(function(a) {
        this.Ka || (this.Ka = chrome.i18n.getMessage("@@bidi_dir") || "ltr");
        this.Ja || (this.Ja = new wc("rtl" == this.Ka));
        return this.Ja.ld(a || "");
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
;chrome.cast.media.za = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
n("chrome.cast.media.MediaCommand", chrome.cast.media.za, void 0);
chrome.cast.media.Hd = {GENERIC:0, TV_SHOW:1, MOVIE:2, MUSIC_TRACK:3, PHOTO:4};
n("chrome.cast.media.MetadataType", chrome.cast.media.Hd, void 0);
chrome.cast.media.u = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
n("chrome.cast.media.PlayerState", chrome.cast.media.u, void 0);
chrome.cast.media.Id = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
n("chrome.cast.media.ResumeState", chrome.cast.media.Id, void 0);
chrome.cast.media.Jd = {BUFFERED:"buffered", LIVE:"live", OTHER:"other"};
n("chrome.cast.media.StreamType", chrome.cast.media.Jd, void 0);
chrome.cast.media.Gd = {CANCELLED:"CANCELLED", INTERRUPTED:"INTERRUPTED", FINISHED:"FINISHED", ERROR:"ERROR"};
n("chrome.cast.media.IdleReason", chrome.cast.media.Gd, void 0);
chrome.cast.media.Pd = {TEXT:"TEXT", AUDIO:"AUDIO", VIDEO:"VIDEO"};
n("chrome.cast.media.TrackType", chrome.cast.media.Pd, void 0);
chrome.cast.media.Nd = {SUBTITLES:"SUBTITLES", CAPTIONS:"CAPTIONS", DESCRIPTIONS:"DESCRIPTIONS", CHAPTERS:"CHAPTERS", METADATA:"METADATA"};
n("chrome.cast.media.TextTrackType", chrome.cast.media.Nd, void 0);
chrome.cast.media.Kd = {NONE:"NONE", OUTLINE:"OUTLINE", DROP_SHADOW:"DROP_SHADOW", RAISED:"RAISED", DEPRESSED:"DEPRESSED"};
n("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.Kd, void 0);
chrome.cast.media.Od = {NONE:"NONE", NORMAL:"NORMAL", ROUNDED_CORNERS:"ROUNDED_CORNERS"};
n("chrome.cast.media.TextTrackWindowType", chrome.cast.media.Od, void 0);
chrome.cast.media.Ld = {SANS_SERIF:"SANS_SERIF", MONOSPACED_SANS_SERIF:"MONOSPACED_SANS_SERIF", SERIF:"SERIF", MONOSPACED_SERIF:"MONOSPACED_SERIF", CASUAL:"CASUAL", CURSIVE:"CURSIVE", SMALL_CAPITALS:"SMALL_CAPITALS"};
n("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.Ld, void 0);
chrome.cast.media.Md = {NORMAL:"NORMAL", BOLD:"BOLD", BOLD_ITALIC:"BOLD_ITALIC", ITALIC:"ITALIC"};
n("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.Md, void 0);
var yc = function(a, b) {
  this.type = a;
  this.message = b;
}, zc = function(a, b) {
  this.id = a;
  this.isDefaultAction = b;
}, Ac = function(a, b, c, d) {
  this.statsCollectNotificationDismissed = fa(c) ? c : !0;
  this.sendUsageEnabled = fa(d) ? d : !0;
  this.castAppNotificationDismissed = fa(a) ? a : !1;
  this.mirrorQualityId = b || O.id;
}, Bc = function(a, b, c, d, e, g, h) {
  this.receiverActs = a || [];
  this.issue = b;
  this.isV1AppInTab = g || !1;
  this.isV2AppInTab = !!h;
  this.v2AppDomain = h || null;
  this.currentActivity = c;
  this.desktopActivity = d;
  this.settings = e || new Ac;
};
var U = function() {
};
U.prototype.Ud = !1;
U.prototype.isDisposed = function() {
  return this.Ud;
};
var V = function(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.G = !1;
  this.ob = !0;
};
V.prototype.stopPropagation = function() {
  this.G = !0;
};
V.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.ob = !1;
};
var Cc = function(a) {
  Cc[" "](a);
  return a;
};
Cc[" "] = ca;
var Dc = !B || B && 9 <= Oa, Ec = B && !D("9");
!C || D("528");
Ja && D("1.9b") || B && D("8") || Ia && D("9.5") || C && D("528");
Ja && !D("8") || B && D("9");
var W = function(a, b) {
  V.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.W = this.state = null;
  a && this.init(a, b);
};
u(W, V);
W.prototype.init = function(a, b) {
  var c = this.type = a.type;
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if (d) {
    if (Ja) {
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
  this.offsetX = C || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = C || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
  W.Lb.stopPropagation.call(this);
  this.W.stopPropagation ? this.W.stopPropagation() : this.W.cancelBubble = !0;
};
W.prototype.preventDefault = function() {
  W.Lb.preventDefault.call(this);
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
var X = "closure_listenable_" + (1E6 * Math.random() | 0), Fc = 0;
var Gc = function(a, b, c, d, e, g) {
  this.F = a;
  this.proxy = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.ia = g;
  this.key = ++Fc;
  this.removed = this.ha = !1;
};
Gc.prototype.ma = function() {
  this.removed = !0;
  this.ia = this.src = this.proxy = this.F = null;
};
var Hc = function(a) {
  this.src = a;
  this.i = {};
  this.V = 0;
};
f = Hc.prototype;
f.ad = function() {
  return this.V;
};
f.add = function(a, b, c, d, e) {
  var g = a.toString();
  a = this.i[g];
  a || (a = this.i[g] = [], this.V++);
  var h = Ic(a, b, d, e);
  -1 < h ? (b = a[h], c || (b.ha = !1)) : (b = new Gc(b, null, this.src, g, !!d, e), b.ha = c, a.push(b));
  return b;
};
f.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.i)) {
    return!1;
  }
  var e = this.i[a];
  b = Ic(e, b, c, d);
  return-1 < b ? (e[b].ma(), Ba(e, b), 0 == e.length && (delete this.i[a], this.V--), !0) : !1;
};
f.Fb = function(a) {
  var b = a.type;
  if (!(b in this.i)) {
    return!1;
  }
  var c = Ca(this.i[b], a);
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
f.Ia = function(a, b, c, d) {
  a = this.i[a.toString()];
  var e = -1;
  a && (e = Ic(a, b, c, d));
  return-1 < e ? a[e] : null;
};
f.hasListener = function(a, b) {
  var c = l(a), d = c ? a.toString() : "", e = l(b);
  return kb(this.i, function(a) {
    for (var h = 0;h < a.length;++h) {
      if (!(c && a[h].type != d || e && a[h].capture != b)) {
        return!0;
      }
    }
    return!1;
  });
};
var Ic = function(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var g = a[e];
    if (!g.removed && g.F == b && g.capture == !!c && g.ia == d) {
      return e;
    }
  }
  return-1;
};
var Jc = "closure_lm_" + (1E6 * Math.random() | 0), Kc = {}, Lc = 0, Mc = function(a, b, c, d, e) {
  if ("array" == p(b)) {
    for (var g = 0;g < b.length;g++) {
      Mc(a, b[g], c, d, e);
    }
    return null;
  }
  c = Nc(c);
  return a && a[X] ? a.listen(b, c, d, e) : Oc(a, b, c, !1, d, e);
}, Oc = function(a, b, c, d, e, g) {
  if (!b) {
    throw Error("Invalid event type");
  }
  var h = !!e, m = Pc(a);
  m || (a[Jc] = m = new Hc(a));
  c = m.add(b, c, d, e, g);
  if (c.proxy) {
    return c;
  }
  d = Qc();
  c.proxy = d;
  d.src = a;
  d.F = c;
  a.addEventListener ? a.addEventListener(b.toString(), d, h) : a.attachEvent(Rc(b.toString()), d);
  Lc++;
  return c;
}, Qc = function() {
  var a = Sc, b = Dc ? function(c) {
    return a.call(b.src, b.F, c);
  } : function(c) {
    c = a.call(b.src, b.F, c);
    if (!c) {
      return c;
    }
  };
  return b;
}, Tc = function(a, b, c, d, e) {
  if ("array" == p(b)) {
    for (var g = 0;g < b.length;g++) {
      Tc(a, b[g], c, d, e);
    }
    return null;
  }
  c = Nc(c);
  return a && a[X] ? a.Yd(b, c, d, e) : Oc(a, b, c, !0, d, e);
}, Uc = function(a, b, c, d, e) {
  if ("array" == p(b)) {
    for (var g = 0;g < b.length;g++) {
      Uc(a, b[g], c, d, e);
    }
    return null;
  }
  c = Nc(c);
  if (a && a[X]) {
    return a.Ob(b, c, d, e);
  }
  if (!a) {
    return!1;
  }
  if (a = Pc(a)) {
    if (b = a.Ia(b, c, !!d, e)) {
      return Vc(b);
    }
  }
  return!1;
}, Vc = function(a) {
  if ("number" == typeof a || !a || a.removed) {
    return!1;
  }
  var b = a.src;
  if (b && b[X]) {
    return b.Ba(a);
  }
  var c = a.type, d = a.proxy;
  b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(Rc(c), d);
  Lc--;
  (c = Pc(b)) ? (c.Fb(a), 0 == c.ad() && (c.src = null, b[Jc] = null)) : a.ma();
  return!0;
}, Rc = function(a) {
  return a in Kc ? Kc[a] : Kc[a] = "on" + a;
}, Xc = function(a, b, c, d) {
  var e = 1;
  if (a = Pc(a)) {
    if (b = a.i[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var g = b[a];
        g && g.capture == c && !g.removed && (e &= !1 !== Wc(g, d));
      }
    }
  }
  return Boolean(e);
}, Wc = function(a, b) {
  var c = a.F, d = a.ia || a.src;
  a.ha && Vc(a);
  return c.call(d, b);
}, Sc = function(a, b) {
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
      for (var g = a.type, m = c.length - 1;!d.G && 0 <= m;m--) {
        d.currentTarget = c[m], e &= Xc(c[m], g, !0, d);
      }
      for (m = 0;!d.G && m < c.length;m++) {
        d.currentTarget = c[m], e &= Xc(c[m], g, !1, d);
      }
    }
    return e;
  }
  return Wc(a, new W(b, this));
}, Pc = function(a) {
  a = a[Jc];
  return a instanceof Hc ? a : null;
}, Yc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0), Nc = function(a) {
  w(a, "Listener can not be null.");
  if (r(a)) {
    return a;
  }
  w(a.handleEvent, "An object listener must have handleEvent method.");
  a[Yc] || (a[Yc] = function(b) {
    return a.handleEvent(b);
  });
  return a[Yc];
};
var Zc = function() {
  this.w = new Hc(this);
  this.Tc = this;
  this.dd = null;
};
u(Zc, U);
Zc.prototype[X] = !0;
f = Zc.prototype;
f.Gb = function() {
  return this.dd;
};
f.addEventListener = function(a, b, c, d) {
  Mc(this, a, b, c, d);
};
f.removeEventListener = function(a, b, c, d) {
  Uc(this, a, b, c, d);
};
f.dispatchEvent = function(a) {
  this.Bb();
  var b, c = this.Gb();
  if (c) {
    b = [];
    for (var d = 1;c;c = c.Gb()) {
      b.push(c), w(1E3 > ++d, "infinite loop");
    }
  }
  c = this.Tc;
  d = a.type || a;
  if (q(a)) {
    a = new V(a, c);
  } else {
    if (a instanceof V) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new V(d, c);
      ob(a, e);
    }
  }
  var e = !0, g;
  if (b) {
    for (var h = b.length - 1;!a.G && 0 <= h;h--) {
      g = a.currentTarget = b[h], e = g.pa(d, !0, a) && e;
    }
  }
  a.G || (g = a.currentTarget = c, e = g.pa(d, !0, a) && e, a.G || (e = g.pa(d, !1, a) && e));
  if (b) {
    for (h = 0;!a.G && h < b.length;h++) {
      g = a.currentTarget = b[h], e = g.pa(d, !1, a) && e;
    }
  }
  return e;
};
f.listen = function(a, b, c, d) {
  this.Bb();
  return this.w.add(String(a), b, !1, c, d);
};
f.Yd = function(a, b, c, d) {
  return this.w.add(String(a), b, !0, c, d);
};
f.Ob = function(a, b, c, d) {
  return this.w.remove(String(a), b, c, d);
};
f.Ba = function(a) {
  return this.w.Fb(a);
};
f.pa = function(a, b, c) {
  a = this.w.i[String(a)];
  if (!a) {
    return!0;
  }
  a = a.concat();
  for (var d = !0, e = 0;e < a.length;++e) {
    var g = a[e];
    if (g && !g.removed && g.capture == b) {
      var h = g.F, m = g.ia || g.src;
      g.ha && this.Ba(g);
      d = !1 !== h.call(m, c) && d;
    }
  }
  return d && !1 != c.ob;
};
f.Ia = function(a, b, c, d) {
  return this.w.Ia(String(a), b, c, d);
};
f.hasListener = function(a, b) {
  return this.w.hasListener(l(a) ? String(a) : void 0, b);
};
f.Bb = function() {
  w(this.w, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
};
var $c = function(a, b, c) {
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
var ad = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/, bd = C, cd = function(a, b) {
  if (bd) {
    bd = !1;
    var c = k.location;
    if (c) {
      var d = c.href;
      if (d && (d = (d = cd(3, d)) && decodeURIComponent(d)) && d != c.hostname) {
        throw bd = !0, Error();
      }
    }
  }
  return b.match(ad)[a] || null;
};
var dd = L("cv.TabUtils"), ed = null, fd = function(a) {
  a != chrome.windows.WINDOW_ID_NONE && (N(dd, "Newly focused window ID: " + a), ed = a);
}, gd = function() {
  chrome.windows.getLastFocused(function(a) {
    ed || (ed = a.id);
  });
  chrome.windows.onFocusChanged.addListener(fd);
}, id = function(a, b) {
  chrome.tabs.get(a, function(a) {
    hd(a, b);
  });
}, hd = function(a, b) {
  if (a) {
    var c = a.id;
    chrome.windows.update(a.windowId, {focused:!0}, function() {
      chrome.tabs.update(c, {active:!0}, b);
    });
  } else {
    b(null);
  }
}, jd = function(a, b, c) {
  chrome.tabs.query({url:a}, function(a) {
    a && 0 < a.length ? hd(a[0], c) : chrome.tabs.create({url:b}, c);
  });
};
var kd = function() {
};
kd.prototype.Pb = null;
kd.prototype.Ya = function() {
  return this.Pb || (this.Pb = this.Bd());
};
var ld, md = function() {
};
u(md, kd);
md.prototype.Mb = function() {
  var a = this.Rb();
  return a ? new ActiveXObject(a) : new XMLHttpRequest;
};
md.prototype.Bd = function() {
  var a = {};
  this.Rb() && (a[0] = !0, a[1] = !0);
  return a;
};
md.prototype.Rb = function() {
  if (!this.Sb && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        return new ActiveXObject(c), this.Sb = c;
      } catch (d) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return this.Sb;
};
ld = new md;
var Y = function(a) {
  Zc.call(this);
  this.headers = new G;
  this.aa = a || null;
  this.H = !1;
  this.Z = this.b = null;
  this.N = this.Sa = this.$ = "";
  this.Q = this.ua = this.Y = this.va = !1;
  this.J = 0;
  this.ba = null;
  this.O = "";
  this.ca = this.bc = !1;
};
u(Y, Zc);
Y.prototype.c = L("goog.net.XhrIo");
var nd = /^https?$/i, od = ["POST", "PUT"];
Y.prototype.od = function(a) {
  this.J = Math.max(0, a);
};
Y.prototype.nd = function(a) {
  this.O = a;
};
Y.prototype.send = function(a, b, c, d) {
  if (this.b) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.$ + "; newUri=" + a);
  }
  b = b ? b.toUpperCase() : "GET";
  this.$ = a;
  this.N = "";
  this.Sa = b;
  this.va = !1;
  this.H = !0;
  this.b = this.jc();
  this.Z = this.aa ? this.aa.Ya() : ld.Ya();
  this.b.onreadystatechange = s(this.Ra, this);
  try {
    N(this.c, this.q("Opening Xhr")), this.ua = !0, this.b.open(b, String(a), !0), this.ua = !1;
  } catch (e) {
    N(this.c, this.q("Error opening Xhr: " + e.message));
    this.I(5, e);
    return;
  }
  a = c || "";
  var g = this.headers.clone();
  d && sb(d, function(a, b) {
    g.set(b, a);
  });
  d = z(g.P(), pd);
  c = k.FormData && a instanceof k.FormData;
  !(0 <= y(od, b)) || d || c || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  g.forEach(function(a, b) {
    this.b.setRequestHeader(b, a);
  }, this);
  this.O && (this.b.responseType = this.O);
  "withCredentials" in this.b && (this.b.withCredentials = this.bc);
  try {
    this.Xa(), 0 < this.J && (this.ca = qd(this.b), N(this.c, this.q("Will abort after " + this.J + "ms if incomplete, xhr2 " + this.ca)), this.ca ? (this.b.timeout = this.J, this.b.ontimeout = s(this.Za, this)) : this.ba = $c(this.Za, this.J, this)), N(this.c, this.q("Sending request")), this.Y = !0, this.b.send(a), this.Y = !1;
  } catch (h) {
    N(this.c, this.q("Send error: " + h.message)), this.I(5, h);
  }
};
var qd = function(a) {
  return B && D(9) && "number" == typeof a.timeout && l(a.ontimeout);
}, pd = function(a) {
  return "content-type" == a.toLowerCase();
};
f = Y.prototype;
f.jc = function() {
  return this.aa ? this.aa.Mb() : ld.Mb();
};
f.Za = function() {
  "undefined" != typeof aa && this.b && (this.N = "Timed out after " + this.J + "ms, aborting", N(this.c, this.q(this.N)), this.dispatchEvent("timeout"), this.abort(8));
};
f.I = function(a, b) {
  this.H = !1;
  this.b && (this.Q = !0, this.b.abort(), this.Q = !1);
  this.N = b;
  this.fb();
  this.xa();
};
f.fb = function() {
  this.va || (this.va = !0, this.dispatchEvent("complete"), this.dispatchEvent("error"));
};
f.abort = function() {
  this.b && this.H && (N(this.c, this.q("Aborting")), this.H = !1, this.Q = !0, this.b.abort(), this.Q = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), this.xa());
};
f.Ra = function() {
  this.isDisposed() || (this.ua || this.Y || this.Q ? this.Hb() : this.$c());
};
f.$c = function() {
  this.Hb();
};
f.Hb = function() {
  if (this.H && "undefined" != typeof aa) {
    if (this.Z[1] && 4 == this.R() && 2 == this.ea()) {
      N(this.c, this.q("Local request error detected and ignored"));
    } else {
      if (this.Y && 4 == this.R()) {
        $c(this.Ra, 0, this);
      } else {
        if (this.dispatchEvent("readystatechange"), this.ya()) {
          N(this.c, this.q("Request complete"));
          this.H = !1;
          try {
            this.ib() ? (this.dispatchEvent("complete"), this.dispatchEvent("success")) : (this.N = this.vc() + " [" + this.ea() + "]", this.fb());
          } finally {
            this.xa();
          }
        }
      }
    }
  }
};
f.xa = function(a) {
  if (this.b) {
    this.Xa();
    var b = this.b, c = this.Z[0] ? ca : null;
    this.Z = this.b = null;
    a || this.dispatchEvent("ready");
    try {
      b.onreadystatechange = c;
    } catch (d) {
      (a = this.c) && a.jb("Problem encountered resetting onreadystatechange: " + d.message, void 0);
    }
  }
};
f.Xa = function() {
  this.b && this.ca && (this.b.ontimeout = null);
  "number" == typeof this.ba && (k.clearTimeout(this.ba), this.ba = null);
};
f.ya = function() {
  return 4 == this.R();
};
f.ib = function() {
  var a = this.ea(), b;
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
  return b || 0 === a && !this.ud();
};
f.ud = function() {
  var a = cd(1, String(this.$));
  !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1));
  return nd.test(a ? a.toLowerCase() : "");
};
f.R = function() {
  return this.b ? this.b.readyState : 0;
};
f.ea = function() {
  try {
    return 2 < this.R() ? this.b.status : -1;
  } catch (a) {
    return-1;
  }
};
f.vc = function() {
  try {
    return 2 < this.R() ? this.b.statusText : "";
  } catch (a) {
    return N(this.c, "Can not get status: " + a.message), "";
  }
};
f.md = function() {
  try {
    if (!this.b) {
      return null;
    }
    if ("response" in this.b) {
      return this.b.response;
    }
    switch(this.O) {
      case "":
      ;
      case "text":
        return this.b.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in this.b) {
          return this.b.mozResponseArrayBuffer;
        }
      ;
    }
    var a = this.c;
    a && a.jb("Response type " + this.O + " is not supported on this browser", void 0);
    return null;
  } catch (b) {
    return N(this.c, "Can not get response: " + b.message), null;
  }
};
f.getResponseHeader = function(a) {
  return this.b && this.ya() ? this.b.getResponseHeader(a) : void 0;
};
f.getAllResponseHeaders = function() {
  return this.b && this.ya() ? this.b.getAllResponseHeaders() : "";
};
f.q = function(a) {
  return a + " [" + this.Sa + " " + this.$ + " " + this.ea() + "]";
};
var rd = function(a) {
  jd("http://support.google.com/chromecast/go*", a, function() {
    window.close();
  });
}, sd = function(a) {
  "feedback.html" == a ? T("popup-choice-help") : "options.html" == a && T("choice-options");
  a = chrome.extension.getURL(a);
  jd(a + "*", a, function() {
    window.close();
  });
}, td = function(a, b) {
  var c = new Y;
  c.nd("blob");
  c.od(1500);
  Tc(c, ["complete", "timeout"], function() {
    if (c.ib()) {
      var a = window.webkitURL.createObjectURL(c.md());
      b(a);
    } else {
      b(null);
    }
  });
  c.send(a, "GET");
};
var ud = function() {
};
ud.prototype.getMessage = function(a, b) {
  return this.Xd(a, b).message;
};
ud.prototype.Xd = function(a, b) {
  for (var c = [], d = {}, e = /{{(\w+?)}}/g, g = e.exec(a);null != g;) {
    b ? b[g[1]] && (d[g[1]] = b[g[1]]) : d[g[1]] = d[g[1]], g = e.exec(a);
  }
  for (var h in d) {
    h && (b && (a = a.replace(new RegExp("{{" + h + "}}", "g"), d[h])), c.push(h));
  }
  return{message:a, bindings:c};
};
da(ud);
var vd = function(a, b, c, d) {
  this.A = ud.ra();
  this.activity = a;
  this.t = !!this.activity.mediaPlayerStatus;
  this.K = this.activity.mediaPlayerStatus;
  this.Oa = this.t && 0 <= y(this.K.supportedCommands, chrome.cast.media.za.PAUSE);
  this.La = this.t && (this.K.playerState == chrome.cast.media.u.PAUSED || this.K.playerState == chrome.cast.media.u.PLAYING);
  this.Yb = this.t && this.K.playerState == chrome.cast.media.u.PAUSED ? "/data/play.png" : "/data/pause.png";
  this.Na = this.t && 0 <= y(this.K.supportedCommands, chrome.cast.media.za.STREAM_MUTE);
  this.Xb = this.t && this.K.muted ? "/data/mute.png" : "/data/unmute.png";
  this.Ma = "mirror_tab" == this.activity.activityType && this.activity.isLocal;
  this.Wb = "/data/mirror_quality.png";
  this.Qa = this.yc(b, c);
  this.sa = "none" != b && 0 < this.Qa.length && "custom_app" != this.activity.activityType;
  this.Ub = this.xc();
  this.Zb = this.A.getMessage(Qb);
  this.Vb = d ? d.activityId == a.id : !1;
};
vd.prototype.yc = function(a, b) {
  switch(a) {
    case "create_session":
      return w(null != b, "Expecting v2 app domain "), this.A.getMessage(Rb, {v2AppDomain:b});
    case "cast_this_tab":
      return this.A.getMessage(Pb);
    case "cast_desktop":
      return this.A.getMessage(Mb);
    default:
      return "";
  }
};
vd.prototype.xc = function() {
  var a = this.Oa + this.Na + this.Ma, b = 1 + this.sa;
  return 2 == a && 2 == b ? ["button", "large1"] : 1 == a && 2 == b ? ["button", "large2"] : 0 == a && 2 == b ? ["button", "large3"] : 2 == a && 1 == b ? ["button", "large4"] : ["button"];
};
var wd = function(a, b, c) {
  this.c = L("cv2.PopupActivityDetailCtrl");
  this.M = b;
  this.d = c;
  this.a = a;
  this.g = null;
  this.ic();
  a.$on("MODEL_UPDATE", s(this.B, this));
};
f = wd.prototype;
f.B = function() {
  N(this.c, "on model update");
  this.X(this.d.j());
  this.a.$apply();
};
f.cc = function() {
  if (this.a.selectedActivity) {
    if (this.a.selectedActivity.iconUrl) {
      var a = this.a.selectedActivity.iconUrl;
      this.a.selectedActivity.iconUrl = "data/default_activity.png";
      "data/default_activity.png" != a && td(a, s(function(a) {
        a && (this.a.selectedActivity.iconUrl = a, this.a.$apply());
      }, this));
    } else {
      this.a.selectedActivity.iconUrl = "data/default_activity.png";
    }
  }
};
f.gc = function() {
  var a = this.a.selectedActivity;
  !a || !a.tabId || 0 > a.tabId || id(a.tabId, function(a) {
    a && window.close();
  });
};
f.$a = function(a, b) {
  return{activityId:a, data:b};
};
f.X = function(a) {
  this.a.selectedActivity = this.d.Pa();
  this.a.selectedActivity && (this.cc(), this.g = new vd(this.a.selectedActivity, this.d.ta(), a.v2AppDomain, a.issue), this.a.enableMediaControls = this.g.t, this.a.showPlayPause = this.g.Oa, this.a.enablePlayPause = this.g.La, this.a.playPauseIcon = this.g.Yb, this.a.showMuteUnmute = this.g.Na, this.a.muteUnmuteIcon = this.g.Xb, this.a.showMirrorQuality = this.g.Ma, this.a.mirrorQualityIcon = this.g.Wb, this.a.showCastAction = this.g.sa, this.a.castActionLabel = this.g.Qa, this.a.actionClass = 
  this.g.Ub, this.a.stopLabel = this.g.Zb, this.a.hasActivityIssue = this.g.Vb, this.a.sharedState = this.a.sharedState || {}, this.a.sharedState.selectingMirrorQuality = this.a.sharedState.selectingMirrorQuality || !1, this.a.isV1AppInTab = a.isV1AppInTab, this.a.settings = a.settings, this.a.updateSettings = s(this.dc, this));
};
f.dc = function() {
  var a = this.d.j();
  a.settings.mirrorQualityId = this.a.settings.mirrorQualityId;
  this.d.sendRequest("update_settings", a.settings);
};
f.ic = function() {
  this.X(this.d.j());
  this.a.mirrorQualities = Wb;
  this.a.onClickLearnCastEnabledPage = t(rd, "http://support.google.com/chromecast/go/castenabledpage");
  this.a.changeDevice = s(function() {
    T("status-choice-devices");
    this.d.Va(null);
    this.M.path("/receiver_picker");
  }, this);
  this.a.showOriginalTab = s(this.gc, this);
  this.a.doCastAction = s(function() {
    this.g.sa && this.a.selectedActivity && this.d.Ua(this.a.selectedActivity.receiver);
  }, this);
  this.a.playOrPause = s(function() {
    T("status-choice-playOrPause");
    this.g.t && this.fc();
  }, this);
  this.a.muteOrUmute = s(function() {
    T("status-choice-muteOrUmute");
    this.g.t && this.ec();
  }, this);
  this.a.stopActivity = s(this.hc, this);
};
f.fc = function() {
  var a = this.a.selectedActivity;
  if (a && a.mediaPlayerStatus && this.g.La) {
    var b = this.$a(a.id, {}), c = null;
    switch(a.mediaPlayerStatus.playerState) {
      case chrome.cast.media.u.PLAYING:
        this.d.sendRequest("pause_media", b);
        c = chrome.cast.media.u.PAUSED;
        break;
      case chrome.cast.media.u.PAUSED:
        this.d.sendRequest("play_media", b), c = chrome.cast.media.u.PLAYING;
    }
    c && (a.mediaPlayerStatus.playerState = c, this.X(this.d.j()));
  }
};
f.ec = function() {
  var a = this.a.selectedActivity;
  a && a.mediaPlayerStatus && (this.d.sendRequest("set_mute", this.$a(a.id, {muted:!a.mediaPlayerStatus.muted})), a.mediaPlayerStatus.muted = !a.mediaPlayerStatus.muted, this.X(this.d.j()));
};
f.hc = function() {
  var a = this.a.selectedActivity;
  a && (this.d.sendRequest("stop_activity", a), this.a.selectedActivity = null, window.close());
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
  this.p = {};
};
u(yd, U);
f = yd.prototype;
f.Eb = 1;
f.oa = 0;
f.vd = function(a, b, c) {
  var d = this.p[a];
  d || (d = this.p[a] = []);
  var e = this.Eb;
  this.m[e] = a;
  this.m[e + 1] = b;
  this.m[e + 2] = c;
  this.Eb = e + 3;
  d.push(e);
  return e;
};
f.wd = function(a, b, c) {
  if (a = this.p[a]) {
    var d = this.m;
    if (a = z(a, function(a) {
      return d[a + 1] == b && d[a + 2] == c;
    })) {
      return this.ka(a);
    }
  }
  return!1;
};
f.ka = function(a) {
  if (0 != this.oa) {
    return this.na || (this.na = []), this.na.push(a), !1;
  }
  var b = this.m[a];
  if (b) {
    var c = this.p[b];
    c && Ca(c, a);
    delete this.m[a];
    delete this.m[a + 1];
    delete this.m[a + 2];
  }
  return!!b;
};
f.Dc = function(a, b) {
  var c = this.p[a];
  if (c) {
    this.oa++;
    for (var d = Da(arguments, 1), e = 0, g = c.length;e < g;e++) {
      var h = c[e];
      this.m[h + 1].apply(this.m[h + 2], d);
    }
    this.oa--;
    if (this.na && 0 == this.oa) {
      for (;c = this.na.pop();) {
        this.ka(c);
      }
    }
    return 0 != e;
  }
  return!1;
};
f.clear = function(a) {
  if (a) {
    var b = this.p[a];
    b && (za(b, this.ka, this), delete this.p[a]);
  } else {
    this.m.length = 0, this.p = {};
  }
};
f.Ea = function(a) {
  if (a) {
    var b = this.p[a];
    return b ? b.length : 0;
  }
  a = 0;
  for (b in this.p) {
    a += this.Ea(b);
  }
  return a;
};
var zd = function(a) {
  this.U = a;
  this.ja = new yd;
  this.c = L("cv.Messenger-" + a);
};
u(zd, U);
f = zd.prototype;
f.init = function() {
  chrome.extension.onMessage.addListener(s(this.Zd, this));
};
f.sd = function(a, b, c, d) {
  N(this.c, "Sending message to " + a + ": " + JSON.stringify(c));
  chrome.extension.sendMessage(JSON.stringify(new xd(this.U, a, b, c)), d || ca);
};
f.zd = function(a, b, c) {
  w("background" != this.U, "background page can NOT send message to itself");
  this.sd("background", a, b, c);
};
f.Zd = function(a, b) {
  w(q(a), "Expect a string. Got " + JSON.stringify(a));
  var c = JSON.parse(a);
  if (this.U == c.target && this.U != c.source && ("background" == this.U || "background" == c.source)) {
    var d;
    b.tab ? (d = b.tab, c.windowUrl && d.url != c.windowUrl && (d.url = c.windowUrl, d.title = "", d.favIconUrl = "")) : d = {id:-1};
    var e = this.c, g = "Getting message from tab " + d.id + ": " + JSON.stringify(c);
    e && e.log(Fb, g, void 0);
    this.ja.Dc(c.type, d, c.content);
  }
};
f.listen = function(a, b, c) {
  return this.ja.vd(a, b, c);
};
f.Ob = function(a, b, c) {
  return this.ja.wd(a, b, c);
};
f.Ba = function(a) {
  return this.ja.ka(a);
};
var Ad = function(a) {
  this.c = L("cv2.PopupDataService");
  this.wa = new zd("popup");
  this.e = new Bc([], null, null, null, null, !1, null);
  this.C = null;
  this.r = void 0;
  this.a = a;
  this.wa.init();
  this.wa.listen("event_to_popup", this.lc, this);
  this.sendRequest("init", {});
};
f = Ad.prototype;
f.sendRequest = function(a, b) {
  var c = new yc(a, b);
  this.wa.zd("popup_menu_request", c);
  return c;
};
f.oc = function(a) {
  this.C = a;
};
f.nc = function() {
  return this.C;
};
f.ta = function() {
  return this.r ? this.cd() : this.bd();
};
f.cd = function() {
  return this.C ? this.C : !db || !this.e.isV2AppInTab || this.e.currentActivity && "v2_app" == this.e.currentActivity.activityType ? this.e.currentActivity || this.e.desktopActivity ? "none" : "cast_this_tab" : "create_session";
};
f.bd = function() {
  return this.C ? this.C : db && this.e.isV2AppInTab ? "create_session" : "cast_this_tab";
};
f.Ua = function(a) {
  a = {receiver:a, isUserOverride:!!this.C};
  switch(this.ta()) {
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
f.hb = function(a) {
  this.e.issue && this.sendRequest("act_on_issue", new zc(this.e.issue.id, a));
};
f.j = function() {
  return this.e;
};
f.lc = function(a, b) {
  "model_update" == b.type && (this.e = b.message, this.qc(), this.pc(), this.a.$broadcast("MODEL_UPDATE"));
};
f.Pa = function() {
  return this.r;
};
f.Va = function(a) {
  this.r = a || null;
};
f.pc = function() {
  z(this.e.receiverActs, function(a) {
    return a.activity && a.activity.isInLaunch;
  });
};
f.qc = function() {
  this.Nc();
  l(this.r) || (this.e.currentActivity ? this.r = this.e.currentActivity : 1 == this.Mc() && (this.r = this.Lc()));
};
f.Nc = function() {
  if (this.r) {
    var a = z(this.e.receiverActs, s(function(a) {
      return a.activity && a.activity.id == this.r.id;
    }, this));
    this.r = a ? a.activity : void 0;
  }
};
f.Mc = function() {
  return Aa(this.e.receiverActs, function(a) {
    return a.activity && a.activity.isLocal;
  });
};
f.Lc = function() {
  var a = z(this.e.receiverActs, function(a) {
    return a.activity && a.activity.isLocal;
  });
  return a ? a.activity : null;
};
var Bd = function(a, b) {
  this.c = L("cv2.IssuerNotifierCtrl");
  this.a = a;
  this.d = b;
  this.mc();
  a.$on("MODEL_UPDATE", s(this.B, this));
};
Bd.prototype.B = function() {
  N(this.c, "on model update");
  this.cb();
  this.a.$apply();
};
Bd.prototype.cb = function() {
  var a = this.d.j().issue;
  a && (this.a.issueTitle = a.title, this.a.issueMessage = a.message, this.a.issueOptActText = a.optActionText, this.a.issueDefaultActText = a.defaultActionText, this.a.showIssueOptActButton = 0 < a.optActionText.length);
};
Bd.prototype.mc = function() {
  this.cb();
  this.a.actOnIssueWithOptAct = s(this.d.hb, this.d, !1);
  this.a.actOnIssueWithDefaultAct = s(this.d.hb, this.d, !0);
};
var Cd = function() {
  this.Tb = ia();
}, Dd = new Cd;
Cd.prototype.set = function(a) {
  this.Tb = a;
};
Cd.prototype.reset = function() {
  this.set(ia());
};
Cd.prototype.get = function() {
  return this.Tb;
};
var Ed = function(a) {
  this.Ec = a || "";
  this.Fc = Dd;
};
f = Ed.prototype;
f.lb = !0;
f.mb = !0;
f.Jc = !0;
f.Ic = !0;
f.nb = !1;
f.Kc = !1;
var Z = function(a) {
  return 10 > a ? "0" + a : String(a);
}, Fd = function(a, b) {
  var c = (a.wb() - b) / 1E3, d = c.toFixed(3), e = 0;
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
Gd.prototype.Zc = function(a) {
  var b = [];
  b.push(this.Ec, " ");
  if (this.mb) {
    var c = new Date(a.wb());
    b.push("[", Z(c.getFullYear() - 2E3) + Z(c.getMonth() + 1) + Z(c.getDate()) + " " + Z(c.getHours()) + ":" + Z(c.getMinutes()) + ":" + Z(c.getSeconds()) + "." + Z(Math.floor(c.getMilliseconds() / 10)), "] ");
  }
  this.Jc && b.push("[", Fd(a, this.Fc.get()), "s] ");
  this.Ic && b.push("[", a.pb(), "] ");
  this.Kc && b.push("[", a.Ca().name, "] ");
  b.push(a.getMessage());
  this.nb && a.Gc() && b.push("\n", a.Hc());
  this.lb && b.push("\n");
  return b.join("");
};
var Hd = function() {
  this.yb = s(this.Uc, this);
  this.la = new Gd;
  this.la.mb = !1;
  this.la.nb = !1;
  this.xb = this.la.lb = !1;
  this.vb = "";
  this.Bc = {};
};
Hd.prototype.kc = function(a) {
  if (a != this.xb) {
    var b = Ib();
    a ? b.ed(this.yb) : b.gd(this.yb);
    this.xb = a;
  }
};
Hd.prototype.Uc = function(a) {
  if (!this.Bc[a.pb()]) {
    var b = this.la.Zc(a), c = Id;
    if (c) {
      switch(a.Ca()) {
        case zb:
          Jd(c, "info", b);
          break;
        case Ab:
          Jd(c, "error", b);
          break;
        case Bb:
          Jd(c, "warn", b);
          break;
        default:
          Jd(c, "debug", b);
      }
    } else {
      this.vb += b;
    }
  }
};
var Id = k.console, Jd = function(a, b, c) {
  if (a[b]) {
    a[b](c);
  } else {
    a.log(c);
  }
};
var Kd = function(a, b, c) {
  var d = new Hd;
  Ib().da(Eb);
  d.kc(!0);
  this.c = L("cv2.PopupMenuCtrl");
  this.M = b;
  this.d = c;
  this.a = a;
  gd();
  this.ab();
  a.$on("MODEL_UPDATE", s(this.B, this));
};
Kd.prototype.B = function() {
  N(this.c, "on model update");
  this.ab();
};
Kd.prototype.ab = function() {
  var a = this.d.j(), b = "/receiver_picker";
  a.settings.statsCollectNotificationDismissed ? a.issue && "fatal" == a.issue.severity ? b = "/issue_notifier" : this.d.Pa() ? b = "/activity_detail" : a.isV1AppInTab && !a.settings.castAppNotificationDismissed && (b = "/v1_app_notification") : b = "/stats_collect_prompt";
  N(this.c, "Showing " + b);
  this.M.url(b);
  this.a.$$phase || this.a.$apply();
};
var Ld = function(a, b, c) {
  this.c = L("cv2.ReceiverPickerCtrl");
  this.M = b;
  this.d = c;
  this.e = c.j();
  this.a = a;
  this.A = ud.ra();
  this.ac();
  this.$b();
  a.$on("MODEL_UPDATE", s(this.B, this));
};
f = Ld.prototype;
f.B = function() {
  N(this.c, "on model update");
  this.e = this.d.j();
  this.Ta();
  this.Wa();
  this.a.$apply();
};
f.ac = function() {
  this.Ta();
  this.a.onClickLearnCastEnabledPage = t(rd, "http://support.google.com/chromecast/go/castenabledpage");
  this.a.onClickReceiver = s(this.tc, this);
  this.a.onClickDeviceMissing = t(rd, "http://support.google.com/chromecast/go/nodevices");
  this.a.sendFeedback = t(sd, "feedback.html");
  this.a.showOptions = t(sd, "options.html");
  this.a.castToHangoutReceiver = s(this.rc, this);
  this.a.showHelp = s(this.uc, this);
  this.a.disableProjectScreen = (1920 < window.screen.width * window.devicePixelRatio || 1080 < window.screen.height * window.devicePixelRatio) && !(0 <= ta(cb, 29));
  this.a.getReceiverIconClass = s(this.sc, this);
};
f.$b = function() {
  this.a.data = this.a.data || {};
  this.Wa();
  this.a.data.selectingCastMode = !1;
  this.a.setUserCastAction = s(this.wc, this);
};
f.wc = function(a) {
  this.d.oc(a);
  this.a.data.castAction = a;
  this.eb();
  this.a.data.selectingCastMode = !1;
};
f.Wa = function() {
  this.e.isV2AppInTab && db ? (this.a.offerCreateSession = !0, this.a.castAppLabel = this.A.getMessage(Ob, this.a)) : this.a.offerCreateSession = !1;
  this.a.data.castAction = this.d.nc();
};
f.Ta = function() {
  Fa(this.e.receiverActs, function(a, b) {
    var c = "cast" != a.receiver.receiverType;
    return c == ("cast" != b.receiver.receiverType) ? a.receiver.name.localeCompare(b.receiver.name) : c ? 1 : -1;
  });
  this.a.receiverActs = this.e.receiverActs;
  this.a.v2AppDomain = this.e.v2AppDomain;
  this.a.isV1AppInTab = this.e.isV1AppInTab;
  this.eb();
};
f.eb = function() {
  var a = null;
  switch(this.d.ta()) {
    case "create_session":
      a = this.A.getMessage(Nb, this.a);
      break;
    case "cast_this_tab":
      a = Kb;
      break;
    case "cast_desktop":
      a = Mb;
      break;
    case "cast_this_tab_audio":
      a = Lb;
      break;
    default:
      (a = this.c) && a.bb("Cannot set receiver picker title", void 0);
      return;
  }
  w(null != a);
  this.a.receiverListTitle = a;
};
f.Cc = function(a) {
  a.isInLaunch = !0;
};
f.tc = function(a) {
  a.receiver.isInLaunch ? (a = this.c) && a.info("There is an activity in launch; cannot launch another activity", void 0) : this.Rc(a) || this.gb(a);
};
f.gb = function(a) {
  a.activity ? (T("popup-choice-active"), this.d.Va(a.activity), this.M.path("/activity_detail")) : (T("popup-choice-idle"), this.d.Ua(a.receiver) && ("custom" == a.receiver.receiverType ? window.close() : this.Cc(a.receiver)));
};
f.Rc = function(a) {
  if ("hangoutsManualReceiverId" == a.receiver.id) {
    return this.a.manualHangout = !0, this.a.hangoutReceiver = a, N(this.c, "Manual hangout entry selected."), !0;
  }
  this.a.manualHangout = !1;
  this.a.hangoutReceiver = null;
  return!1;
};
f.rc = function() {
  var a = this.a.hangoutName, b = this.a.hangoutReceiver;
  a && (N(this.c, "Casting to hangout: " + a), b.receiver.id = "hangout|" + a, this.gb(b));
};
f.uc = function() {
  T("popup-choice-help");
  jd("http://support.google.com/chromecast/go/castfromchrome*", "http://support.google.com/chromecast/go/castfromchrome", function() {
    window.close();
  });
};
f.sc = function(a) {
  if (a.isInLaunch) {
    return "lauching-icon";
  }
  switch(a.receiverType) {
    case "cast":
      return "chromecast-device";
    case "hangout":
      return "hangout-device";
    default:
      return "generic-device";
  }
};
document.addEventListener("DOMContentLoaded", function() {
  var a = "UA-50032818-1";
  fb ? a = "UA-50032818-2" : gb && (a = "UA-50032818-3");
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
  a.when("/", {templateUrl:"/popup_partials/initializing.html"}).when("/v1_app_notification", {controller:"PopupV1AppNotificationCtrl", templateUrl:"/popup_partials/v1_app_notification.html"}).when("/receiver_picker", {controller:"PopupReceiverPickerCtrl", templateUrl:"/popup_partials/receiver_picker.html"}).when("/activity_detail", {controller:"PopupActivityDetailCtrl", templateUrl:"/popup_partials/activity_detail.html"}).when("/issue_notifier", {controller:"PopupIssuerNotifierCtrl", templateUrl:"/popup_partials/issue_notifier.html"}).when("/stats_collect_prompt", 
  {controller:"StatsCollectionPromptCtrl", templateUrl:"/popup_partials/stats_collect_prompt.html"}).otherwise({redirectTo:"/"});
}]);
$.config(["$compileProvider", function(a) {
  a.imgSrcSanitizationWhitelist(/^\s*(https?|chrome-extension):|blob:chrome-extension%3A/);
}]);

