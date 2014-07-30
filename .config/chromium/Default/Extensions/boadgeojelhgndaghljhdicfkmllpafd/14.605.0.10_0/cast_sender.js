(function() {var b, chrome = window.chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var g = g || {};
g.global = this;
g.ia = function(a) {
  return void 0 !== a;
};
g.Xd = function(a, c, d) {
  a = a.split(".");
  d = d || g.global;
  a[0] in d || !d.execScript || d.execScript("var " + a[0]);
  for (var e;a.length && (e = a.shift());) {
    !a.length && g.ia(c) ? d[e] = c : d = d[e] ? d[e] : d[e] = {};
  }
};
g.bq = function(a, c) {
  g.Xd(a, c);
};
g.Xa = !0;
g.wn = "en";
g.eh = !0;
g.Ad = !1;
g.Dr = function(a) {
  g.Xd(a);
};
g.Nr = function(a) {
  if (!g.Xa) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  }
};
g.nq = function() {
};
g.cl = function(a, c) {
  for (var d = a.split("."), e = c || g.global, f;f = d.shift();) {
    if (g.W(e[f])) {
      e = e[f];
    } else {
      return null;
    }
  }
  return e;
};
g.Fq = function(a, c) {
  var d = c || g.global, e;
  for (e in a) {
    d[e] = a[e];
  }
};
g.hp = function(a, c, d) {
  if (g.zg) {
    var e;
    a = a.replace(/\\/g, "/");
    for (var f = g.jb, h = 0;e = c[h];h++) {
      f.Fb[e] = a, a in f.Od || (f.Od[a] = {}), f.Od[a][e] = !0;
    }
    for (e = 0;c = d[e];e++) {
      a in f.requires || (f.requires[a] = {}), f.requires[a][c] = !0;
    }
  }
};
g.ps = !1;
g.Zm = !0;
g.require = function() {
};
g.xc = "";
g.Dj = function() {
};
g.Lq = function(a) {
  return a;
};
g.fp = function() {
  throw Error("unimplemented abstract method");
};
g.Pl = function(a) {
  a.Hc = function() {
    if (a.Gb) {
      return a.Gb;
    }
    g.Xa && (g.yg[g.yg.length] = a);
    return a.Gb = new a;
  };
};
g.yg = [];
g.zg = !1;
g.zg && (g.Rj = {}, g.jb = {Od:{}, Fb:{}, requires:{}, eg:{}, yc:{}}, g.Hg = function() {
  var a = g.global.document;
  return "undefined" != typeof a && "write" in a;
}, g.Tl = function() {
  if (g.global.Rk) {
    g.xc = g.global.Rk;
  } else {
    if (g.Hg()) {
      for (var a = g.global.document.getElementsByTagName("script"), c = a.length - 1;0 <= c;--c) {
        var d = a[c].src, e = d.lastIndexOf("?"), e = -1 == e ? d.length : e;
        if ("base.js" == d.substr(e - 7, 7)) {
          g.xc = d.substr(0, e - 7);
          break;
        }
      }
    }
  }
}, g.cg = function(a) {
  var c = g.global.xm || g.Lk;
  !g.jb.yc[a] && c(a) && (g.jb.yc[a] = !0);
}, g.Lk = function(a) {
  if (g.Hg()) {
    var c = g.global.document;
    if ("complete" == c.readyState) {
      if (/\bdeps.js$/.test(a)) {
        return!1;
      }
      throw Error('Cannot write "' + a + '" after document load');
    }
    c.write('<script type="text/javascript" src="' + a + '">\x3c/script>');
    return!0;
  }
  return!1;
}, g.us = function() {
  function a(f) {
    if (!(f in e.yc)) {
      if (!(f in e.eg) && (e.eg[f] = !0, f in e.requires)) {
        for (var k in e.requires[f]) {
          if (!g.vm(k)) {
            if (k in e.Fb) {
              a(e.Fb[k]);
            } else {
              throw Error("Undefined nameToPath for " + k);
            }
          }
        }
      }
      f in d || (d[f] = !0, c.push(f));
    }
  }
  var c = [], d = {}, e = g.jb, f;
  for (f in g.Rj) {
    e.yc[f] || a(f);
  }
  for (f = 0;f < c.length;f++) {
    if (c[f]) {
      g.cg(g.xc + c[f]);
    } else {
      throw Error("Undefined script input");
    }
  }
}, g.yq = function(a) {
  return a in g.jb.Fb ? g.jb.Fb[a] : null;
}, g.Tl(), g.global.Nm || g.cg(g.xc + "deps.js"));
g.ca = function(a) {
  var c = typeof a;
  if ("object" == c) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return c;
      }
      var d = Object.prototype.toString.call(a);
      if ("[object Window]" == d) {
        return "object";
      }
      if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == c && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return c;
};
g.Ic = function(a) {
  return null === a;
};
g.W = function(a) {
  return null != a;
};
g.isArray = function(a) {
  return "array" == g.ca(a);
};
g.M = function(a) {
  var c = g.ca(a);
  return "array" == c || "object" == c && "number" == typeof a.length;
};
g.Tq = function(a) {
  return g.isObject(a) && "function" == typeof a.getFullYear;
};
g.isString = function(a) {
  return "string" == typeof a;
};
g.Ha = function(a) {
  return "boolean" == typeof a;
};
g.isNumber = function(a) {
  return "number" == typeof a;
};
g.isFunction = function(a) {
  return "function" == g.ca(a);
};
g.isObject = function(a) {
  var c = typeof a;
  return "object" == c && null != a || "function" == c;
};
g.Yd = function(a) {
  return a[g.Jb] || (a[g.Jb] = ++g.Wk);
};
g.Iq = function(a) {
  return!!a[g.Jb];
};
g.mm = function(a) {
  "removeAttribute" in a && a.removeAttribute(g.Jb);
  try {
    delete a[g.Jb];
  } catch (c) {
  }
};
g.Jb = "closure_uid_" + (1E9 * Math.random() >>> 0);
g.Wk = 0;
g.tq = g.Yd;
g.Fr = g.mm;
g.Jk = function(a) {
  var c = g.ca(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = g.Jk(a[d]);
    }
    return c;
  }
  return a;
};
g.bl = function(a, c, d) {
  return a.call.apply(a.bind, arguments);
};
g.al = function(a, c, d) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var d = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(d, e);
      return a.apply(c, d);
    };
  }
  return function() {
    return a.apply(c, arguments);
  };
};
g.bind = function(a, c, d) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? g.bind = g.bl : g.bind = g.al;
  return g.bind.apply(null, arguments);
};
g.Vb = function(a, c) {
  var d = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = d.slice();
    c.push.apply(c, arguments);
    return a.apply(this, c);
  };
};
g.hh = function(a, c) {
  for (var d in c) {
    a[d] = c[d];
  }
};
g.now = g.eh && Date.now || function() {
  return+new Date;
};
g.Eq = function(a) {
  if (g.global.execScript) {
    g.global.execScript(a, "JavaScript");
  } else {
    if (g.global.eval) {
      if (null == g.Ec && (g.global.eval("var _et_ = 1;"), "undefined" != typeof g.global._et_ ? (delete g.global._et_, g.Ec = !0) : g.Ec = !1), g.Ec) {
        g.global.eval(a);
      } else {
        var c = g.global.document, d = c.createElement("script");
        d.type = "text/javascript";
        d.defer = !1;
        d.appendChild(c.createTextNode(a));
        c.body.appendChild(d);
        c.body.removeChild(d);
      }
    } else {
      throw Error("goog.globalEval not available");
    }
  }
};
g.Ec = null;
g.rq = function(a, c) {
  var d = function(a) {
    return g.Qg[a] || a;
  }, e = function(a) {
    a = a.split("-");
    for (var c = [], e = 0;e < a.length;e++) {
      c.push(d(a[e]));
    }
    return c.join("-");
  }, e = g.Qg ? "BY_WHOLE" == g.Zk ? d : e : function(a) {
    return a;
  };
  return c ? a + "-" + e(c) : e(a);
};
g.Kr = function(a, c) {
  g.Qg = a;
  g.Zk = c;
};
g.wq = function(a, c) {
  var d = c || {}, e;
  for (e in d) {
    var f = ("" + d[e]).replace(/\$/g, "$$$$");
    a = a.replace(new RegExp("\\{\\$" + e + "\\}", "gi"), f);
  }
  return a;
};
g.xq = function(a) {
  return a;
};
g.j = function(a, c, d) {
  g.Xd(a, c, d);
};
g.u = function(a, c, d) {
  a[c] = d;
};
g.za = function(a, c) {
  function d() {
  }
  d.prototype = c.prototype;
  a.Bc = c.prototype;
  a.prototype = new d;
  a.prototype.constructor = a;
  a.Xk = function(a, d, h) {
    var k = Array.prototype.slice.call(arguments, 2);
    return c.prototype[d].apply(a, k);
  };
};
g.Xk = function(a, c, d) {
  var e = arguments.callee.caller;
  if (g.Ad || g.Xa && !e) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (e.Bc) {
    return e.Bc.constructor.apply(a, Array.prototype.slice.call(arguments, 1));
  }
  for (var f = Array.prototype.slice.call(arguments, 2), h = !1, k = a.constructor;k;k = k.Bc && k.Bc.constructor) {
    if (k.prototype[c] === e) {
      h = !0;
    } else {
      if (h) {
        return k.prototype[c].apply(a, f);
      }
    }
  }
  if (a[c] === e) {
    return a.constructor.prototype[c].apply(a, f);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
g.scope = function(a) {
  a.call(g.global);
};
g.ul = !0;
g.ul && (Function.prototype.bind = Function.prototype.bind || function(a, c) {
  if (1 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 1);
    d.unshift(this, a);
    return g.bind.apply(null, d);
  }
  return g.bind(this, a);
}, Function.prototype.Vb = function(a) {
  var c = Array.prototype.slice.call(arguments);
  c.unshift(this, null);
  return g.bind.apply(null, c);
}, Function.prototype.za = function(a) {
  g.za(this, a);
}, Function.prototype.hh = function(a) {
  g.hh(this.prototype, a);
});
g.ya = function(a, c) {
  var d = c.constructor, e = c.bk;
  if (!d || d == Object.prototype.constructor) {
    throw Error("constructor property is required.");
  }
  d = g.ya.ak(d);
  a && g.za(d, a);
  delete c.constructor;
  delete c.bk;
  g.ya.qg(d.prototype, c);
  null != e && (e instanceof Function ? e(d) : g.ya.qg(d, e));
  return d;
};
g.ya.Ok = g.Xa;
g.ya.ak = function(a) {
  if (g.ya.Ok && Object.seal instanceof Function) {
    var c = function() {
      var d = a.apply(this, arguments) || this;
      this.constructor === c && Object.seal(d);
      return d;
    };
    return c;
  }
  return a;
};
g.ya.Eg = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
g.ya.qg = function(a, c) {
  for (var d in c) {
    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
  for (var e = 0;e < g.ya.Eg.length;e++) {
    d = g.ya.Eg[e], Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
};
chrome.cast.Ng = {TAB_AND_ORIGIN_SCOPED:"tab_and_origin_scoped", ORIGIN_SCOPED:"origin_scoped", PAGE_SCOPED:"page_scoped"};
g.j("chrome.cast.AutoJoinPolicy", chrome.cast.Ng);
chrome.cast.Og = {CREATE_SESSION:"create_session", CAST_THIS_TAB:"cast_this_tab"};
g.j("chrome.cast.DefaultActionPolicy", chrome.cast.Og);
chrome.cast.Td = {VIDEO_OUT:"video_out", AUDIO_OUT:"audio_out", VIDEO_IN:"video_in", AUDIO_IN:"audio_in"};
g.j("chrome.cast.Capability", chrome.cast.Td);
chrome.cast.pa = {CANCEL:"cancel", TIMEOUT:"timeout", API_NOT_INITIALIZED:"api_not_initialized", INVALID_PARAMETER:"invalid_parameter", EXTENSION_NOT_COMPATIBLE:"extension_not_compatible", EXTENSION_MISSING:"extension_missing", RECEIVER_UNAVAILABLE:"receiver_unavailable", SESSION_ERROR:"session_error", CHANNEL_ERROR:"channel_error", LOAD_MEDIA_FAILED:"load_media_failed"};
g.j("chrome.cast.ErrorCode", chrome.cast.pa);
chrome.cast.Dl = {AVAILABLE:"available", UNAVAILABLE:"unavailable"};
g.j("chrome.cast.ReceiverAvailability", chrome.cast.Dl);
chrome.cast.Kl = {CHROME:"chrome", IOS:"ios", ANDROID:"android"};
g.j("chrome.cast.SenderPlatform", chrome.cast.Kl);
chrome.cast.Sb = {CAST:"cast", DIAL:"dial", CUSTOM:"custom"};
g.j("chrome.cast.ReceiverType", chrome.cast.Sb);
chrome.cast.hl = {RUNNING:"running", STOPPED:"stopped", ERROR:"error"};
g.j("chrome.cast.DialAppState", chrome.cast.hl);
chrome.cast.Cl = {CAST:"cast", STOP:"stop"};
g.j("chrome.cast.ReceiverAction", chrome.cast.Cl);
chrome.cast.VERSION = [1, 2];
g.j("chrome.cast.VERSION", chrome.cast.VERSION);
chrome.cast.J = function(a, c, d) {
  this.code = a;
  this.description = c || null;
  this.details = d || null;
};
g.j("chrome.cast.Error", chrome.cast.J);
chrome.cast.Jl = function(a) {
  this.platform = a;
  this.packageId = this.url = null;
};
g.j("chrome.cast.SenderApplication", chrome.cast.Jl);
chrome.cast.ql = function(a) {
  this.url = a;
  this.width = this.height = null;
};
g.j("chrome.cast.Image", chrome.cast.ql);
chrome.cast.rc = function(a, c) {
  this.level = g.ia(a) ? a : null;
  this.muted = g.ia(c) ? c : null;
};
g.j("chrome.cast.Volume", chrome.cast.rc);
var l = {L:{rn:"LAUNCH", vg:"STOP", ug:"SET_VOLUME", tg:"GET_STATUS", Ak:"RECEIVER_STATUS", ap:"CONNECT", bp:"CLOSE", fn:"GET_APP_AVAILABILITY", Zf:"LOAD", zj:"PAUSE", Ej:"SEEK", Aj:"PLAY", Bf:"STOP_MEDIA", tl:"MEDIA_GET_STATUS", yf:"MEDIA_SET_VOLUME", jn:"INVALID_PLAYER_STATE", vn:"LOAD_FAILED", un:"LOAD_CANCELLED", kn:"INVALID_REQUEST", rd:"MEDIA_STATUS", tn:"LAUNCH_ERROR", Bo:"PING", Do:"PONG"}, Ud:{}};
l.Ud[l.L.Bf] = l.L.vg;
l.Ud[l.L.yf] = l.L.ug;
l.Ud[l.L.tl] = l.L.tg;
l.Xj = function(a, c, d) {
  this.sessionId = a;
  this.namespaceName = c;
  this.message = d;
};
l.Wj = function(a) {
  this.type = l.L.vg;
  this.requestId = null;
  this.sessionId = a || null;
};
chrome.cast.media.Kg = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
g.j("chrome.cast.media.MediaCommand", chrome.cast.media.Kg);
chrome.cast.media.la = {GENERIC:0, TV_SHOW:1, MOVIE:2, MUSIC_TRACK:3, PHOTO:4};
g.j("chrome.cast.media.MetadataType", chrome.cast.media.la);
chrome.cast.media.Bb = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
g.j("chrome.cast.media.PlayerState", chrome.cast.media.Bb);
chrome.cast.media.Gl = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
g.j("chrome.cast.media.ResumeState", chrome.cast.media.Gl);
chrome.cast.media.Kd = {BUFFERED:"buffered", LIVE:"live", OTHER:"other"};
g.j("chrome.cast.media.StreamType", chrome.cast.media.Kd);
chrome.cast.media.pl = {CANCELLED:"CANCELLED", INTERRUPTED:"INTERRUPTED", FINISHED:"FINISHED", ERROR:"ERROR"};
g.j("chrome.cast.media.IdleReason", chrome.cast.media.pl);
chrome.cast.media.Df = function() {
  this.customData = null;
};
g.j("chrome.cast.media.PauseRequest", chrome.cast.media.Df);
chrome.cast.media.Ef = function() {
  this.customData = null;
};
g.j("chrome.cast.media.PlayRequest", chrome.cast.media.Ef);
chrome.cast.media.Il = function() {
  this.customData = this.resumeState = this.currentTime = null;
};
g.j("chrome.cast.media.SeekRequest", chrome.cast.media.Il);
chrome.cast.media.Cf = function() {
  this.customData = null;
};
g.j("chrome.cast.media.StopRequest", chrome.cast.media.Cf);
chrome.cast.media.Nl = function(a) {
  this.volume = a;
  this.customData = null;
};
g.j("chrome.cast.media.VolumeRequest", chrome.cast.media.Nl);
chrome.cast.media.sl = function(a) {
  this.type = l.L.Zf;
  this.sessionId = this.requestId = null;
  this.media = a;
  this.autoplay = !0;
  this.customData = this.currentTime = null;
};
g.j("chrome.cast.media.LoadRequest", chrome.cast.media.sl);
chrome.cast.media.nl = function() {
  this.metadataType = this.type = chrome.cast.media.la.GENERIC;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = null;
};
g.j("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.nl);
chrome.cast.media.zl = function() {
  this.metadataType = this.type = chrome.cast.media.la.MOVIE;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = null;
};
g.j("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.zl);
chrome.cast.media.Ml = function() {
  this.metadataType = this.type = chrome.cast.media.la.TV_SHOW;
  this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = null;
};
g.j("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.Ml);
chrome.cast.media.Al = function() {
  this.metadataType = this.type = chrome.cast.media.la.MUSIC_TRACK;
  this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = null;
};
g.j("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.Al);
chrome.cast.media.Bl = function() {
  this.metadataType = this.type = chrome.cast.media.la.PHOTO;
  this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = null;
};
g.j("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.Bl);
chrome.cast.media.yl = function(a, c) {
  this.contentId = a;
  this.streamType = chrome.cast.media.Kd.BUFFERED;
  this.contentType = c;
  this.customData = this.duration = this.metadata = null;
};
g.j("chrome.cast.media.MediaInfo", chrome.cast.media.yl);
chrome.cast.media.s = function(a, c) {
  this.sessionId = a;
  this.mediaSessionId = c;
  this.media = null;
  this.playbackRate = 1;
  this.playerState = chrome.cast.media.Bb.IDLE;
  this.currentTime = 0;
  this.qd = -1;
  this.supportedMediaCommands = [];
  this.volume = new chrome.cast.rc;
  this.customData = this.idleReason = null;
  this.fc = this.ed = !1;
  this.Db = [];
};
g.j("chrome.cast.media.Media", chrome.cast.media.s);
chrome.cast.media.gl = "CC1AD845";
g.j("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.gl);
chrome.cast.media.timeout = {};
g.j("chrome.cast.media.timeout", chrome.cast.media.timeout);
chrome.cast.media.timeout.load = 0;
g.u(chrome.cast.media.timeout, "load", chrome.cast.media.timeout.load);
chrome.cast.media.timeout.play = 0;
g.u(chrome.cast.media.timeout, "play", chrome.cast.media.timeout.play);
chrome.cast.media.timeout.pause = 0;
g.u(chrome.cast.media.timeout, "pause", chrome.cast.media.timeout.pause);
chrome.cast.media.timeout.seek = 0;
g.u(chrome.cast.media.timeout, "seek", chrome.cast.media.timeout.seek);
chrome.cast.media.timeout.stop = 0;
g.u(chrome.cast.media.timeout, "stop", chrome.cast.media.timeout.stop);
chrome.cast.media.timeout.sc = 0;
g.u(chrome.cast.media.timeout, "setVolume", chrome.cast.media.timeout.sc);
chrome.cast.el = function(a, c, d, e, f) {
  this.sessionRequest = a;
  this.sessionListener = c;
  this.receiverListener = d;
  this.autoJoinPolicy = e || chrome.cast.Ng.TAB_AND_ORIGIN_SCOPED;
  this.defaultActionPolicy = f || chrome.cast.Og.CREATE_SESSION;
  this.customDialLaunchCallback = null;
};
g.j("chrome.cast.ApiConfig", chrome.cast.el);
chrome.cast.kl = function(a, c) {
  this.appName = a;
  this.launchParameter = c || null;
};
g.j("chrome.cast.DialRequest", chrome.cast.kl);
chrome.cast.il = function(a, c, d) {
  this.receiver = a;
  this.appState = c;
  this.extraData = d || null;
};
g.j("chrome.cast.DialLaunchData", chrome.cast.il);
chrome.cast.jl = function(a, c) {
  this.doLaunch = a;
  this.launchParameter = c || null;
};
g.j("chrome.cast.DialLaunchResponse", chrome.cast.jl);
chrome.cast.Ll = function(a, c, d) {
  this.appId = a;
  this.capabilities = c || [chrome.cast.Td.VIDEO_OUT, chrome.cast.Td.AUDIO_OUT];
  this.dialRequest = null;
  this.requestSessionTimeout = d || chrome.cast.timeout.requestSession;
};
g.j("chrome.cast.SessionRequest", chrome.cast.Ll);
chrome.cast.fa = function(a, c, d, e) {
  this.label = a;
  this.friendlyName = c;
  this.capabilities = d || [];
  this.volume = e || null;
  this.receiverType = chrome.cast.Sb.CAST;
  this.displayStatus = this.isActiveInput = null;
};
g.j("chrome.cast.Receiver", chrome.cast.fa);
chrome.cast.El = function(a, c) {
  this.statusText = a;
  this.appImages = c;
};
g.j("chrome.cast.ReceiverDisplayStatus", chrome.cast.El);
chrome.cast.n = function(a, c, d, e, f) {
  this.sessionId = a;
  this.appId = c;
  this.displayName = d;
  this.statusText = null;
  this.appImages = e;
  this.receiver = f;
  this.senderApps = [];
  this.namespaces = [];
  this.customData = null;
  this.media = [];
  this.transportId = "";
};
g.j("chrome.cast.Session", chrome.cast.n);
chrome.cast.n.xf = "custom_receiver_session_id";
g.u(chrome.cast.n, "CUSTOM_RECEIVER_SESSION_ID", chrome.cast.n.xf);
chrome.cast.timeout = {};
g.j("chrome.cast.timeout", chrome.cast.timeout);
chrome.cast.timeout.requestSession = 1E4;
chrome.cast.timeout.stopSession = 3E3;
chrome.cast.timeout.setReceiverVolume = 3E3;
chrome.cast.timeout.sendCustomMessage = 3E3;
l.tj = function(a) {
  this.sessionRequest = a.sessionRequest;
  this.autoJoinPolicy = a.autoJoinPolicy;
  this.defaultActionPolicy = a.defaultActionPolicy;
  this.useCustomDialLaunch = !!a.customDialLaunchCallback;
};
l.Nb = function(a) {
  return "urn:x-cast:com.google.cast." + a;
};
l.Wa = {Bk:l.Nb("tp.connection"), Ck:l.Nb("tp.heartbeat"), zk:l.Nb("receiver"), yk:l.Nb("media"), xg:l.Nb("webrtc")};
l.Wa.ok = function(a) {
  switch(a) {
    case l.Wa.Bk:
    ;
    case l.Wa.Ck:
    ;
    case l.Wa.zk:
    ;
    case l.Wa.yk:
    ;
    case l.Wa.xg:
      return!0;
    default:
      return!1;
  }
};
l.Gm = function() {
  this.displayName = this.appId = this.sessionId = this.transportId = "";
  this.statusText = null;
  this.appImages = [];
  this.senderApps = [];
  this.namespaces = [];
};
l.Jo = function() {
  this.type = l.L.tg;
  this.requestId = null;
};
l.Ko = function() {
  this.type = l.L.Ak;
  this.status = this.requestId = null;
};
l.Io = function() {
  this.channelUrl = this.volume = this.applications = null;
  this.isActiveInput = void 0;
};
l.ln = function() {
};
l.Ho = {AVAILABLE:"available", UNAVAILABLE:"unavailable", Wo:"unknown"};
l.mn = function() {
};
g.debug = {};
g.debug.J = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, g.debug.J);
  } else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
};
g.za(g.debug.J, Error);
g.debug.J.prototype.name = "CustomError";
g.rf = {};
g.rf.rj = {qj:1, Bm:2, To:3, Km:4, bn:5, an:6, Eo:7, Om:8, Wm:9, Ym:10, Xm:11, yo:12};
g.b = {};
g.b.Rc = !1;
g.b.Zh = {Yh:"\u00a0"};
g.b.jh = function(a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
g.b.fq = function(a, c) {
  var d = a.length - c.length;
  return 0 <= d && a.indexOf(c, d) == d;
};
g.b.Gp = function(a, c) {
  return 0 == g.b.Ce(c, a.substr(0, c.length));
};
g.b.Ep = function(a, c) {
  return 0 == g.b.Ce(c, a.substr(a.length - c.length, c.length));
};
g.b.Fp = function(a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
g.b.Oh = function(a, c) {
  for (var d = a.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1);f.length && 1 < d.length;) {
    e += d.shift() + f.shift();
  }
  return e + d.join("%s");
};
g.b.Np = function(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
g.b.Y = function(a) {
  return/^[\s\xa0]*$/.test(a);
};
g.b.Vq = function(a) {
  return g.b.Y(g.b.Ph(a));
};
g.b.Rq = function(a) {
  return!/[^\t\n\r ]/.test(a);
};
g.b.Oq = function(a) {
  return!/[^a-zA-Z]/.test(a);
};
g.b.dr = function(a) {
  return!/[^0-9]/.test(a);
};
g.b.Pq = function(a) {
  return!/[^a-zA-Z0-9]/.test(a);
};
g.b.ir = function(a) {
  return " " == a;
};
g.b.kr = function(a) {
  return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a;
};
g.b.$r = function(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ");
};
g.b.Dp = function(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n");
};
g.b.wr = function(a) {
  return a.replace(/\xa0|\s/g, " ");
};
g.b.vr = function(a) {
  return a.replace(/\xa0|[ \t]+/g, " ");
};
g.b.Mp = function(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
g.b.trim = function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
g.b.trimLeft = function(a) {
  return a.replace(/^[\s\xa0]+/, "");
};
g.b.trimRight = function(a) {
  return a.replace(/[\s\xa0]+$/, "");
};
g.b.Ce = function(a, c) {
  var d = String(a).toLowerCase(), e = String(c).toLowerCase();
  return d < e ? -1 : d == e ? 0 : 1;
};
g.b.Ee = /(\.\d+)|(\d+)|(\D+)/g;
g.b.yr = function(a, c) {
  if (a == c) {
    return 0;
  }
  if (!a) {
    return-1;
  }
  if (!c) {
    return 1;
  }
  for (var d = a.toLowerCase().match(g.b.Ee), e = c.toLowerCase().match(g.b.Ee), f = Math.min(d.length, e.length), h = 0;h < f;h++) {
    var k = d[h], m = e[h];
    if (k != m) {
      return d = parseInt(k, 10), !isNaN(d) && (e = parseInt(m, 10), !isNaN(e) && d - e) ? d - e : k < m ? -1 : 1;
    }
  }
  return d.length != e.length ? d.length - e.length : a < c ? -1 : 1;
};
g.b.os = function(a) {
  return encodeURIComponent(String(a));
};
g.b.ns = function(a) {
  return decodeURIComponent(a.replace(/\+/g, " "));
};
g.b.ei = function(a, c) {
  return a.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>");
};
g.b.eb = function(a, c) {
  if (c) {
    a = a.replace(g.b.le, "&amp;").replace(g.b.oe, "&lt;").replace(g.b.ne, "&gt;").replace(g.b.qe, "&quot;").replace(g.b.re, "&#39;").replace(g.b.pe, "&#0;"), g.b.Rc && (a = a.replace(g.b.me, "&#101;"));
  } else {
    if (!g.b.xh.test(a)) {
      return a;
    }
    -1 != a.indexOf("&") && (a = a.replace(g.b.le, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(g.b.oe, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(g.b.ne, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(g.b.qe, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(g.b.re, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(g.b.pe, "&#0;"));
    g.b.Rc && -1 != a.indexOf("e") && (a = a.replace(g.b.me, "&#101;"));
  }
  return a;
};
g.b.le = /&/g;
g.b.oe = /</g;
g.b.ne = />/g;
g.b.qe = /"/g;
g.b.re = /'/g;
g.b.pe = /\x00/g;
g.b.me = /e/g;
g.b.xh = g.b.Rc ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
g.b.Vc = function(a) {
  return g.b.contains(a, "&") ? "document" in g.global ? g.b.Be(a) : g.b.Xh(a) : a;
};
g.b.js = function(a, c) {
  return g.b.contains(a, "&") ? g.b.Be(a, c) : a;
};
g.b.Be = function(a, c) {
  var d = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, e;
  e = c ? c.createElement("div") : g.global.document.createElement("div");
  return a.replace(g.b.ai, function(a, c) {
    var k = d[a];
    if (k) {
      return k;
    }
    if ("#" == c.charAt(0)) {
      var m = Number("0" + c.substr(1));
      isNaN(m) || (k = String.fromCharCode(m));
    }
    k || (e.innerHTML = a + " ", k = e.firstChild.nodeValue.slice(0, -1));
    return d[a] = k;
  });
};
g.b.Xh = function(a) {
  return a.replace(/&([^;]+);/g, function(a, d) {
    switch(d) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return'"';
      default:
        if ("#" == d.charAt(0)) {
          var e = Number("0" + d.substr(1));
          if (!isNaN(e)) {
            return String.fromCharCode(e);
          }
        }
        return a;
    }
  });
};
g.b.ai = /&([^;\s<&]+);?/g;
g.b.rs = function(a, c) {
  return g.b.ei(a.replace(/  /g, " &#160;"), c);
};
g.b.Cr = function(a) {
  return a.replace(/(^|[\n ]) /g, "$1" + g.b.Zh.Yh);
};
g.b.as = function(a, c) {
  for (var d = c.length, e = 0;e < d;e++) {
    var f = 1 == d ? c : c.charAt(e);
    if (a.charAt(0) == f && a.charAt(a.length - 1) == f) {
      return a.substring(1, a.length - 1);
    }
  }
  return a;
};
g.b.truncate = function(a, c, d) {
  d && (a = g.b.Vc(a));
  a.length > c && (a = a.substring(0, c - 3) + "...");
  d && (a = g.b.eb(a));
  return a;
};
g.b.is = function(a, c, d, e) {
  d && (a = g.b.Vc(a));
  if (e && a.length > c) {
    e > c && (e = c), a = a.substring(0, c - e) + "..." + a.substring(a.length - e);
  } else {
    if (a.length > c) {
      e = Math.floor(c / 2);
      var f = a.length - e;
      a = a.substring(0, e + c % 2) + "..." + a.substring(f);
    }
  }
  d && (a = g.b.eb(a));
  return a;
};
g.b.Uc = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
g.b.Zb = {"'":"\\'"};
g.b.quote = function(a) {
  a = String(a);
  if (a.quote) {
    return a.quote();
  }
  for (var c = ['"'], d = 0;d < a.length;d++) {
    var e = a.charAt(d), f = e.charCodeAt(0);
    c[d + 1] = g.b.Uc[e] || (31 < f && 127 > f ? e : g.b.Ae(e));
  }
  c.push('"');
  return c.join("");
};
g.b.hq = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    c[d] = g.b.Ae(a.charAt(d));
  }
  return c.join("");
};
g.b.Ae = function(a) {
  if (a in g.b.Zb) {
    return g.b.Zb[a];
  }
  if (a in g.b.Uc) {
    return g.b.Zb[a] = g.b.Uc[a];
  }
  var c = a, d = a.charCodeAt(0);
  if (31 < d && 127 > d) {
    c = a;
  } else {
    if (256 > d) {
      if (c = "\\x", 16 > d || 256 < d) {
        c += "0";
      }
    } else {
      c = "\\u", 4096 > d && (c += "0");
    }
    c += d.toString(16).toUpperCase();
  }
  return g.b.Zb[a] = c;
};
g.b.es = function(a) {
  for (var c = {}, d = 0;d < a.length;d++) {
    c[a.charAt(d)] = !0;
  }
  return c;
};
g.b.contains = function(a, c) {
  return-1 != a.indexOf(c);
};
g.b.lh = function(a, c) {
  return g.b.contains(a.toLowerCase(), c.toLowerCase());
};
g.b.Up = function(a, c) {
  return a && c ? a.split(c).length - 1 : 0;
};
g.b.Tb = function(a, c, d) {
  var e = a;
  0 <= c && c < a.length && 0 < d && (e = a.substr(0, c) + a.substr(c + d, a.length - c - d));
  return e;
};
g.b.remove = function(a, c) {
  var d = new RegExp(g.b.Zc(c), "");
  return a.replace(d, "");
};
g.b.removeAll = function(a, c) {
  var d = new RegExp(g.b.Zc(c), "g");
  return a.replace(d, "");
};
g.b.Zc = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
g.b.repeat = function(a, c) {
  return Array(c + 1).join(a);
};
g.b.Ar = function(a, c, d) {
  a = g.ia(d) ? a.toFixed(d) : String(a);
  d = a.indexOf(".");
  -1 == d && (d = a.length);
  return g.b.repeat("0", Math.max(0, c - d)) + a;
};
g.b.Ph = function(a) {
  return null == a ? "" : String(a);
};
g.b.Ap = function(a) {
  return Array.prototype.join.call(arguments, "");
};
g.b.nh = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.now()).toString(36);
};
g.b.qb = function(a, c) {
  for (var d = 0, e = g.b.trim(String(a)).split("."), f = g.b.trim(String(c)).split("."), h = Math.max(e.length, f.length), k = 0;0 == d && k < h;k++) {
    var m = e[k] || "", n = f[k] || "", p = RegExp("(\\d*)(\\D*)", "g"), q = RegExp("(\\d*)(\\D*)", "g");
    do {
      var r = p.exec(m) || ["", "", ""], s = q.exec(n) || ["", "", ""];
      if (0 == r[0].length && 0 == s[0].length) {
        break;
      }
      d = g.b.$c(0 == r[1].length ? 0 : parseInt(r[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || g.b.$c(0 == r[2].length, 0 == s[2].length) || g.b.$c(r[2], s[2]);
    } while (0 == d);
  }
  return d;
};
g.b.$c = function(a, c) {
  return a < c ? -1 : a > c ? 1 : 0;
};
g.b.$h = 4294967296;
g.b.Jq = function(a) {
  for (var c = 0, d = 0;d < a.length;++d) {
    c = 31 * c + a.charCodeAt(d), c %= g.b.$h;
  }
  return c;
};
g.b.fi = 2147483648 * Math.random() | 0;
g.b.Yp = function() {
  return "goog_" + g.b.fi++;
};
g.b.fs = function(a) {
  var c = Number(a);
  return 0 == c && g.b.Y(a) ? NaN : c;
};
g.b.br = function(a) {
  return/^[a-z]+([A-Z][a-z]*)*$/.test(a);
};
g.b.lr = function(a) {
  return/^([A-Z][a-z]*)+$/.test(a);
};
g.b.ds = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, d) {
    return d.toUpperCase();
  });
};
g.b.gs = function(a) {
  return String(a).replace(/([A-Z])/g, "-$1").toLowerCase();
};
g.b.hs = function(a, c) {
  var d = g.isString(c) ? g.b.Zc(c) : "\\s";
  return a.replace(new RegExp("(^" + (d ? "|[" + d + "]+" : "") + ")([a-z])", "g"), function(a, c, d) {
    return c + d.toUpperCase();
  });
};
g.b.Br = function(a) {
  isFinite(a) && (a = String(a));
  return g.isString(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
};
g.b.Ur = function(a, c, d) {
  a = a.split(c);
  for (var e = [];0 < d && a.length;) {
    e.push(a.shift()), d--;
  }
  a.length && e.push(a.join(c));
  return e;
};
g.o = {};
g.o.ua = g.Xa;
g.o.tc = function(a, c) {
  c.unshift(a);
  g.debug.J.call(this, g.b.Oh.apply(null, c));
  c.shift();
};
g.za(g.o.tc, g.debug.J);
g.o.tc.prototype.name = "AssertionError";
g.o.Ca = function(a, c, d, e) {
  var f = "Assertion failed";
  if (d) {
    var f = f + (": " + d), h = e
  } else {
    a && (f += ": " + a, h = c);
  }
  throw new g.o.tc("" + f, h || []);
};
g.o.assert = function(a, c, d) {
  g.o.ua && !a && g.o.Ca("", null, c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.o.Mc = function(a, c) {
  if (g.o.ua) {
    throw new g.o.tc("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  }
};
g.o.sp = function(a, c, d) {
  g.o.ua && !g.isNumber(a) && g.o.Ca("Expected number but got %s: %s.", [g.ca(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.o.vp = function(a, c, d) {
  g.o.ua && !g.isString(a) && g.o.Ca("Expected string but got %s: %s.", [g.ca(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.o.qp = function(a, c, d) {
  g.o.ua && !g.isFunction(a) && g.o.Ca("Expected function but got %s: %s.", [g.ca(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.o.tp = function(a, c, d) {
  g.o.ua && !g.isObject(a) && g.o.Ca("Expected object but got %s: %s.", [g.ca(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.o.np = function(a, c, d) {
  g.o.ua && !g.isArray(a) && g.o.Ca("Expected array but got %s: %s.", [g.ca(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.o.op = function(a, c, d) {
  g.o.ua && !g.Ha(a) && g.o.Ca("Expected boolean but got %s: %s.", [g.ca(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.o.pp = function(a, c, d) {
  !g.o.ua || g.isObject(a) && a.nodeType == g.rf.rj.qj || g.o.Ca("Expected Element but got %s: %s.", [g.ca(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.o.rp = function(a, c, d, e) {
  !g.o.ua || a instanceof c || g.o.Ca("instanceof check failed.", null, d, Array.prototype.slice.call(arguments, 3));
  return a;
};
g.o.up = function() {
  for (var a in Object.prototype) {
    g.o.Mc(a + " should not be enumerable in Object.prototype.");
  }
};
g.a = {};
g.Fa = g.eh;
g.a.Ea = !1;
g.a.ce = function(a) {
  return a[a.length - 1];
};
g.a.mr = g.a.ce;
g.a.r = Array.prototype;
g.a.indexOf = g.Fa && (g.a.Ea || g.a.r.indexOf) ? function(a, c, d) {
  return g.a.r.indexOf.call(a, c, d);
} : function(a, c, d) {
  d = null == d ? 0 : 0 > d ? Math.max(0, a.length + d) : d;
  if (g.isString(a)) {
    return g.isString(c) && 1 == c.length ? a.indexOf(c, d) : -1;
  }
  for (;d < a.length;d++) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return-1;
};
g.a.lastIndexOf = g.Fa && (g.a.Ea || g.a.r.lastIndexOf) ? function(a, c, d) {
  return g.a.r.lastIndexOf.call(a, c, null == d ? a.length - 1 : d);
} : function(a, c, d) {
  d = null == d ? a.length - 1 : d;
  0 > d && (d = Math.max(0, a.length + d));
  if (g.isString(a)) {
    return g.isString(c) && 1 == c.length ? a.lastIndexOf(c, d) : -1;
  }
  for (;0 <= d;d--) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return-1;
};
g.a.forEach = g.Fa && (g.a.Ea || g.a.r.forEach) ? function(a, c, d) {
  g.a.r.forEach.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    h in f && c.call(d, f[h], h, a);
  }
};
g.a.Sh = function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, e = e - 1;0 <= e;--e) {
    e in f && c.call(d, f[e], e, a);
  }
};
g.a.filter = g.Fa && (g.a.Ea || g.a.r.filter) ? function(a, c, d) {
  return g.a.r.filter.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = [], h = 0, k = g.isString(a) ? a.split("") : a, m = 0;m < e;m++) {
    if (m in k) {
      var n = k[m];
      c.call(d, n, m, a) && (f[h++] = n);
    }
  }
  return f;
};
g.a.map = g.Fa && (g.a.Ea || g.a.r.map) ? function(a, c, d) {
  return g.a.r.map.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = Array(e), h = g.isString(a) ? a.split("") : a, k = 0;k < e;k++) {
    k in h && (f[k] = c.call(d, h[k], k, a));
  }
  return f;
};
g.a.reduce = g.Fa && (g.a.Ea || g.a.r.reduce) ? function(a, c, d, e) {
  e && (c = g.bind(c, e));
  return g.a.r.reduce.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  g.a.forEach(a, function(d, k) {
    f = c.call(e, f, d, k, a);
  });
  return f;
};
g.a.reduceRight = g.Fa && (g.a.Ea || g.a.r.reduceRight) ? function(a, c, d, e) {
  e && (c = g.bind(c, e));
  return g.a.r.reduceRight.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  g.a.Sh(a, function(d, k) {
    f = c.call(e, f, d, k, a);
  });
  return f;
};
g.a.some = g.Fa && (g.a.Ea || g.a.r.some) ? function(a, c, d) {
  return g.a.r.some.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in f && c.call(d, f[h], h, a)) {
      return!0;
    }
  }
  return!1;
};
g.a.every = g.Fa && (g.a.Ea || g.a.r.every) ? function(a, c, d) {
  return g.a.r.every.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in f && !c.call(d, f[h], h, a)) {
      return!1;
    }
  }
  return!0;
};
g.a.count = function(a, c, d) {
  var e = 0;
  g.a.forEach(a, function(a, h, k) {
    c.call(d, a, h, k) && ++e;
  }, d);
  return e;
};
g.a.find = function(a, c, d) {
  c = g.a.ve(a, c, d);
  return 0 > c ? null : g.isString(a) ? a.charAt(c) : a[c];
};
g.a.ve = function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in f && c.call(d, f[h], h, a)) {
      return h;
    }
  }
  return-1;
};
g.a.kq = function(a, c, d) {
  c = g.a.Qh(a, c, d);
  return 0 > c ? null : g.isString(a) ? a.charAt(c) : a[c];
};
g.a.Qh = function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, e = e - 1;0 <= e;e--) {
    if (e in f && c.call(d, f[e], e, a)) {
      return e;
    }
  }
  return-1;
};
g.a.contains = function(a, c) {
  return 0 <= g.a.indexOf(a, c);
};
g.a.Y = function(a) {
  return 0 == a.length;
};
g.a.clear = function(a) {
  if (!g.isArray(a)) {
    for (var c = a.length - 1;0 <= c;c--) {
      delete a[c];
    }
  }
  a.length = 0;
};
g.a.Mq = function(a, c) {
  g.a.contains(a, c) || a.push(c);
};
g.a.we = function(a, c, d) {
  g.a.splice(a, d, 0, c);
};
g.a.Nq = function(a, c, d) {
  g.Vb(g.a.splice, a, d, 0).apply(null, c);
};
g.a.insertBefore = function(a, c, d) {
  var e;
  2 == arguments.length || 0 > (e = g.a.indexOf(a, d)) ? a.push(c) : g.a.we(a, c, e);
};
g.a.remove = function(a, c) {
  var d = g.a.indexOf(a, c), e;
  (e = 0 <= d) && g.a.Tb(a, d);
  return e;
};
g.a.Tb = function(a, c) {
  return 1 == g.a.r.splice.call(a, c, 1).length;
};
g.a.Gr = function(a, c, d) {
  c = g.a.ve(a, c, d);
  return 0 <= c ? (g.a.Tb(a, c), !0) : !1;
};
g.a.concat = function(a) {
  return g.a.r.concat.apply(g.a.r, arguments);
};
g.a.join = function(a) {
  return g.a.r.concat.apply(g.a.r, arguments);
};
g.a.Ga = function(a) {
  var c = a.length;
  if (0 < c) {
    for (var d = Array(c), e = 0;e < c;e++) {
      d[e] = a[e];
    }
    return d;
  }
  return[];
};
g.a.clone = g.a.Ga;
g.a.extend = function(a, c) {
  for (var d = 1;d < arguments.length;d++) {
    var e = arguments[d], f;
    if (g.isArray(e) || (f = g.M(e)) && Object.prototype.hasOwnProperty.call(e, "callee")) {
      a.push.apply(a, e);
    } else {
      if (f) {
        for (var h = a.length, k = e.length, m = 0;m < k;m++) {
          a[h + m] = e[m];
        }
      } else {
        a.push(e);
      }
    }
  }
};
g.a.splice = function(a, c, d, e) {
  return g.a.r.splice.apply(a, g.a.slice(arguments, 1));
};
g.a.slice = function(a, c, d) {
  return 2 >= arguments.length ? g.a.r.slice.call(a, c) : g.a.r.slice.call(a, c, d);
};
g.a.Th = function(a, c, d) {
  c = c || a;
  d = d || function() {
    return g.isObject(k) ? "o" + g.Yd(k) : (typeof k).charAt(0) + k;
  };
  for (var e = {}, f = 0, h = 0;h < a.length;) {
    var k = a[h++], m = d(k);
    Object.prototype.hasOwnProperty.call(e, m) || (e[m] = !0, c[f++] = k);
  }
  c.length = f;
};
g.a.te = function(a, c, d) {
  return g.a.ue(a, d || g.a.Ra, !1, c);
};
g.a.yp = function(a, c, d) {
  return g.a.ue(a, c, !0, void 0, d);
};
g.a.ue = function(a, c, d, e, f) {
  for (var h = 0, k = a.length, m;h < k;) {
    var n = h + k >> 1, p;
    p = d ? c.call(f, a[n], n, a) : c(e, a[n]);
    0 < p ? h = n + 1 : (k = n, m = !p);
  }
  return m ? h : ~h;
};
g.a.sort = function(a, c) {
  a.sort(c || g.a.Ra);
};
g.a.Vr = function(a, c) {
  for (var d = 0;d < a.length;d++) {
    a[d] = {index:d, value:a[d]};
  }
  var e = c || g.a.Ra;
  g.a.sort(a, function(a, c) {
    return e(a.value, c.value) || a.index - c.index;
  });
  for (d = 0;d < a.length;d++) {
    a[d] = a[d].value;
  }
};
g.a.Tr = function(a, c, d) {
  var e = d || g.a.Ra;
  g.a.sort(a, function(a, d) {
    return e(a[c], d[c]);
  });
};
g.a.ae = function(a, c, d) {
  c = c || g.a.Ra;
  for (var e = 1;e < a.length;e++) {
    var f = c(a[e - 1], a[e]);
    if (0 < f || 0 == f && d) {
      return!1;
    }
  }
  return!0;
};
g.a.equals = function(a, c, d) {
  if (!g.M(a) || !g.M(c) || a.length != c.length) {
    return!1;
  }
  var e = a.length;
  d = d || g.a.wh;
  for (var f = 0;f < e;f++) {
    if (!d(a[f], c[f])) {
      return!1;
    }
  }
  return!0;
};
g.a.Qp = function(a, c, d) {
  d = d || g.a.Ra;
  for (var e = Math.min(a.length, c.length), f = 0;f < e;f++) {
    var h = d(a[f], c[f]);
    if (0 != h) {
      return h;
    }
  }
  return g.a.Ra(a.length, c.length);
};
g.a.Ra = function(a, c) {
  return a > c ? 1 : a < c ? -1 : 0;
};
g.a.wh = function(a, c) {
  return a === c;
};
g.a.wp = function(a, c, d) {
  d = g.a.te(a, c, d);
  return 0 > d ? (g.a.we(a, c, -(d + 1)), !0) : !1;
};
g.a.xp = function(a, c, d) {
  c = g.a.te(a, c, d);
  return 0 <= c ? g.a.Tb(a, c) : !1;
};
g.a.zp = function(a, c, d) {
  for (var e = {}, f = 0;f < a.length;f++) {
    var h = a[f], k = c.call(d, h, f, a);
    g.ia(k) && (e[k] || (e[k] = [])).push(h);
  }
  return e;
};
g.a.rm = function(a, c, d) {
  var e = {};
  g.a.forEach(a, function(f, h) {
    e[c.call(d, f, h, a)] = f;
  });
  return e;
};
g.a.Ob = function(a, c, d) {
  var e = [], f = 0, h = a;
  d = d || 1;
  void 0 !== c && (f = a, h = c);
  if (0 > d * (h - f)) {
    return[];
  }
  if (0 < d) {
    for (a = f;a < h;a += d) {
      e.push(a);
    }
  } else {
    for (a = f;a > h;a += d) {
      e.push(a);
    }
  }
  return e;
};
g.a.repeat = function(a, c) {
  for (var d = [], e = 0;e < c;e++) {
    d[e] = a;
  }
  return d;
};
g.a.Rh = function(a) {
  for (var c = [], d = 0;d < arguments.length;d++) {
    var e = arguments[d];
    g.isArray(e) ? c.push.apply(c, g.a.Rh.apply(null, e)) : c.push(e);
  }
  return c;
};
g.a.rotate = function(a, c) {
  a.length && (c %= a.length, 0 < c ? g.a.r.unshift.apply(a, a.splice(-c, c)) : 0 > c && g.a.r.push.apply(a, a.splice(0, -c)));
  return a;
};
g.a.tr = function(a, c, d) {
  c = g.a.r.splice.call(a, c, 1);
  g.a.r.splice.call(a, d, 0, c[0]);
};
g.a.Ve = function(a) {
  if (!arguments.length) {
    return[];
  }
  for (var c = [], d = 0;;d++) {
    for (var e = [], f = 0;f < arguments.length;f++) {
      var h = arguments[f];
      if (d >= h.length) {
        return c;
      }
      e.push(h[d]);
    }
    c.push(e);
  }
};
g.a.Qr = function(a, c) {
  for (var d = c || Math.random, e = a.length - 1;0 < e;e--) {
    var f = Math.floor(d() * (e + 1)), h = a[e];
    a[e] = a[f];
    a[f] = h;
  }
};
g.g = {};
g.g.Tm = function() {
};
g.t = {};
g.t.constant = function(a) {
  return function() {
    return a;
  };
};
g.t.en = g.t.constant(!1);
g.t.Uo = g.t.constant(!0);
g.t.zo = g.t.constant(null);
g.t.identity = function(a) {
  return a;
};
g.t.error = function(a) {
  return function() {
    throw Error(a);
  };
};
g.t.Mc = function(a) {
  return function() {
    throw a;
  };
};
g.t.or = function(a, c) {
  c = c || 0;
  return function() {
    return a.apply(this, Array.prototype.slice.call(arguments, 0, c));
  };
};
g.t.xr = function(a) {
  return function() {
    return arguments[a];
  };
};
g.t.ts = function(a, c) {
  return g.t.ek(a, g.t.constant(c));
};
g.t.Rp = function(a, c) {
  var d = arguments, e = d.length;
  return function() {
    var a;
    e && (a = d[e - 1].apply(this, arguments));
    for (var c = e - 2;0 <= c;c--) {
      a = d[c].call(this, a);
    }
    return a;
  };
};
g.t.ek = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a, f = 0;f < d;f++) {
      a = c[f].apply(this, arguments);
    }
    return a;
  };
};
g.t.ip = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a = 0;a < d;a++) {
      if (!c[a].apply(this, arguments)) {
        return!1;
      }
    }
    return!0;
  };
};
g.t.zr = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a = 0;a < d;a++) {
      if (c[a].apply(this, arguments)) {
        return!0;
      }
    }
    return!1;
  };
};
g.t.gi = function(a) {
  return function() {
    return!a.apply(this, arguments);
  };
};
g.t.create = function(a, c) {
  var d = function() {
  };
  d.prototype = a.prototype;
  d = new d;
  a.apply(d, Array.prototype.slice.call(arguments, 1));
  return d;
};
g.t.dk = !0;
g.t.Cp = function(a) {
  var c = !1, d;
  return function() {
    if (!g.t.dk) {
      return a();
    }
    c || (d = a(), c = !0);
    return d;
  };
};
g.p = {};
g.p.Er = function(a) {
  return Math.floor(Math.random() * a);
};
g.p.ks = function(a, c) {
  return a + Math.random() * (c - a);
};
g.p.Lp = function(a, c, d) {
  return Math.min(Math.max(a, c), d);
};
g.p.Wf = function(a, c) {
  var d = a % c;
  return 0 > d * c ? d + c : d;
};
g.p.nr = function(a, c, d) {
  return a + d * (c - a);
};
g.p.ur = function(a, c, d) {
  return Math.abs(a - c) <= (d || 1E-6);
};
g.p.wd = function(a) {
  return g.p.Wf(a, 360);
};
g.p.Wr = function(a) {
  return g.p.Wf(a, 2 * Math.PI);
};
g.p.Yf = function(a) {
  return a * Math.PI / 180;
};
g.p.Ij = function(a) {
  return 180 * a / Math.PI;
};
g.p.lp = function(a, c) {
  return c * Math.cos(g.p.Yf(a));
};
g.p.mp = function(a, c) {
  return c * Math.sin(g.p.Yf(a));
};
g.p.jp = function(a, c, d, e) {
  return g.p.wd(g.p.Ij(Math.atan2(e - c, d - a)));
};
g.p.kp = function(a, c) {
  var d = g.p.wd(c) - g.p.wd(a);
  180 < d ? d -= 360 : -180 >= d && (d = 360 + d);
  return d;
};
g.p.Rr = function(a) {
  return 0 == a ? 0 : 0 > a ? -1 : 1;
};
g.p.qr = function(a, c, d, e) {
  d = d || function(a, c) {
    return a == c;
  };
  e = e || function(c) {
    return a[c];
  };
  for (var f = a.length, h = c.length, k = [], m = 0;m < f + 1;m++) {
    k[m] = [], k[m][0] = 0;
  }
  for (var n = 0;n < h + 1;n++) {
    k[0][n] = 0;
  }
  for (m = 1;m <= f;m++) {
    for (n = 1;n <= h;n++) {
      d(a[m - 1], c[n - 1]) ? k[m][n] = k[m - 1][n - 1] + 1 : k[m][n] = Math.max(k[m - 1][n], k[m][n - 1]);
    }
  }
  for (var p = [], m = f, n = h;0 < m && 0 < n;) {
    d(a[m - 1], c[n - 1]) ? (p.unshift(e(m - 1, n - 1)), m--, n--) : k[m - 1][n] > k[m][n - 1] ? m-- : n--;
  }
  return p;
};
g.p.he = function(a) {
  return g.a.reduce(arguments, function(a, d) {
    return a + d;
  }, 0);
};
g.p.ph = function(a) {
  return g.p.he.apply(null, arguments) / arguments.length;
};
g.p.Pj = function(a) {
  var c = arguments.length;
  if (2 > c) {
    return 0;
  }
  var d = g.p.ph.apply(null, arguments);
  return g.p.he.apply(null, g.a.map(arguments, function(a) {
    return Math.pow(a - d, 2);
  })) / (c - 1);
};
g.p.Xr = function(a) {
  return Math.sqrt(g.p.Pj.apply(null, arguments));
};
g.p.ar = function(a) {
  return isFinite(a) && 0 == a % 1;
};
g.p.Wq = function(a) {
  return isFinite(a) && !isNaN(a);
};
g.p.pr = function(a) {
  if (0 < a) {
    var c = Math.round(Math.log(a) * Math.LOG10E);
    return c - (parseFloat("1e" + c) > a);
  }
  return 0 == a ? -Infinity : NaN;
};
g.p.Ir = function(a, c) {
  return Math.floor(a + (c || 2E-15));
};
g.p.Hr = function(a, c) {
  return Math.ceil(a - (c || 2E-15));
};
g.c = {};
g.c.Q = "StopIteration" in g.global ? g.global.StopIteration : Error("StopIteration");
g.c.w = function() {
};
g.c.w.prototype.next = function() {
  throw g.c.Q;
};
g.c.w.prototype.rb = function() {
  return this;
};
g.c.H = function(a) {
  if (a instanceof g.c.w) {
    return a;
  }
  if ("function" == typeof a.rb) {
    return a.rb(!1);
  }
  if (g.M(a)) {
    var c = 0, d = new g.c.w;
    d.next = function() {
      for (;;) {
        if (c >= a.length) {
          throw g.c.Q;
        }
        if (c in a) {
          return a[c++];
        }
        c++;
      }
    };
    return d;
  }
  throw Error("Not implemented");
};
g.c.forEach = function(a, c, d) {
  if (g.M(a)) {
    try {
      g.a.forEach(a, c, d);
    } catch (e) {
      if (e !== g.c.Q) {
        throw e;
      }
    }
  } else {
    a = g.c.H(a);
    try {
      for (;;) {
        c.call(d, a.next(), void 0, a);
      }
    } catch (f) {
      if (f !== g.c.Q) {
        throw f;
      }
    }
  }
};
g.c.filter = function(a, c, d) {
  var e = g.c.H(a);
  a = new g.c.w;
  a.next = function() {
    for (;;) {
      var a = e.next();
      if (c.call(d, a, void 0, e)) {
        return a;
      }
    }
  };
  return a;
};
g.c.jq = function(a, c, d) {
  return g.c.filter(a, g.t.gi(c), d);
};
g.c.Ob = function(a, c, d) {
  var e = 0, f = a, h = d || 1;
  1 < arguments.length && (e = a, f = c);
  if (0 == h) {
    throw Error("Range step argument must not be zero");
  }
  var k = new g.c.w;
  k.next = function() {
    if (0 < h && e >= f || 0 > h && e <= f) {
      throw g.c.Q;
    }
    var a = e;
    e += h;
    return a;
  };
  return k;
};
g.c.join = function(a, c) {
  return g.c.Ga(a).join(c);
};
g.c.map = function(a, c, d) {
  var e = g.c.H(a);
  a = new g.c.w;
  a.next = function() {
    var a = e.next();
    return c.call(d, a, void 0, e);
  };
  return a;
};
g.c.reduce = function(a, c, d, e) {
  var f = d;
  g.c.forEach(a, function(a) {
    f = c.call(e, f, a);
  });
  return f;
};
g.c.some = function(a, c, d) {
  a = g.c.H(a);
  try {
    for (;;) {
      if (c.call(d, a.next(), void 0, a)) {
        return!0;
      }
    }
  } catch (e) {
    if (e !== g.c.Q) {
      throw e;
    }
  }
  return!1;
};
g.c.every = function(a, c, d) {
  a = g.c.H(a);
  try {
    for (;;) {
      if (!c.call(d, a.next(), void 0, a)) {
        return!1;
      }
    }
  } catch (e) {
    if (e !== g.c.Q) {
      throw e;
    }
  }
  return!0;
};
g.c.Fi = function(a) {
  var c = g.c.H(arguments), d = new g.c.w, e = null;
  d.next = function() {
    for (;;) {
      if (null == e) {
        var a = c.next();
        e = g.c.H(a);
      }
      try {
        return e.next();
      } catch (d) {
        if (d !== g.c.Q) {
          throw d;
        }
        e = null;
      }
    }
  };
  return d;
};
g.c.Ip = function(a) {
  return g.c.Fi.apply(void 0, a);
};
g.c.cq = function(a, c, d) {
  var e = g.c.H(a);
  a = new g.c.w;
  var f = !0;
  a.next = function() {
    for (;;) {
      var a = e.next();
      if (!f || !c.call(d, a, void 0, e)) {
        return f = !1, a;
      }
    }
  };
  return a;
};
g.c.bs = function(a, c, d) {
  var e = g.c.H(a);
  a = new g.c.w;
  var f = !0;
  a.next = function() {
    for (;;) {
      if (f) {
        var a = e.next();
        if (c.call(d, a, void 0, e)) {
          return a;
        }
        f = !1;
      } else {
        throw g.c.Q;
      }
    }
  };
  return a;
};
g.c.Ga = function(a) {
  if (g.M(a)) {
    return g.a.Ga(a);
  }
  a = g.c.H(a);
  var c = [];
  g.c.forEach(a, function(a) {
    c.push(a);
  });
  return c;
};
g.c.equals = function(a, c) {
  var d = g.c.Gi({}, a, c);
  return g.c.every(d, function(a) {
    return a[0] == a[1];
  });
};
g.c.hi = function(a, c) {
  try {
    return g.c.H(a).next();
  } catch (d) {
    if (d != g.c.Q) {
      throw d;
    }
    return c;
  }
};
g.c.product = function(a) {
  if (g.a.some(arguments, function(a) {
    return!a.length;
  }) || !arguments.length) {
    return new g.c.w;
  }
  var c = new g.c.w, d = arguments, e = g.a.repeat(0, d.length);
  c.next = function() {
    if (e) {
      for (var a = g.a.map(e, function(a, c) {
        return d[c][a];
      }), c = e.length - 1;0 <= c;c--) {
        if (e[c] < d[c].length - 1) {
          e[c]++;
          break;
        }
        if (0 == c) {
          e = null;
          break;
        }
        e[c] = 0;
      }
      return a;
    }
    throw g.c.Q;
  };
  return c;
};
g.c.Zp = function(a) {
  var c = g.c.H(a), d = [], e = 0;
  a = new g.c.w;
  var f = !1;
  a.next = function() {
    var a = null;
    if (!f) {
      try {
        return a = c.next(), d.push(a), a;
      } catch (k) {
        if (k != g.c.Q || g.a.Y(d)) {
          throw k;
        }
        f = !0;
      }
    }
    a = d[e];
    e = (e + 1) % d.length;
    return a;
  };
  return a;
};
g.c.count = function(a, c) {
  var d = a || 0, e = g.ia(c) ? c : 1, f = new g.c.w;
  f.next = function() {
    var a = d;
    d += e;
    return a;
  };
  return f;
};
g.c.repeat = function(a) {
  var c = new g.c.w;
  c.next = g.t.constant(a);
  return c;
};
g.c.gp = function(a) {
  var c = g.c.H(a), d = 0;
  a = new g.c.w;
  a.next = function() {
    return d += c.next();
  };
  return a;
};
g.c.Ve = function(a) {
  var c = arguments, d = new g.c.w;
  if (0 < c.length) {
    var e = g.a.map(c, g.c.H);
    d.next = function() {
      return g.a.map(e, function(a) {
        return a.next();
      });
    };
  }
  return d;
};
g.c.Gi = function(a, c) {
  var d = g.a.slice(arguments, 1), e = new g.c.w;
  if (0 < d.length) {
    var f = g.a.map(d, g.c.H);
    e.next = function() {
      var c = !1, d = g.a.map(f, function(d) {
        var e;
        try {
          e = d.next(), c = !0;
        } catch (f) {
          if (f !== g.c.Q) {
            throw f;
          }
          e = a;
        }
        return e;
      });
      if (!c) {
        throw g.c.Q;
      }
      return d;
    };
  }
  return e;
};
g.c.Sp = function(a, c) {
  var d = g.c.H(c);
  return g.c.filter(a, function() {
    return!!d.next();
  });
};
g.c.hc = function(a, c) {
  this.de = g.c.H(a);
  this.ee = c || g.t.identity;
};
g.za(g.c.hc, g.c.w);
g.c.hc.prototype.next = function() {
  for (;this.ub == this.sg;) {
    this.Wb = this.de.next(), this.ub = this.ee(this.Wb);
  }
  this.sg = this.ub;
  return[this.ub, this.vk(this.sg)];
};
g.c.hc.prototype.vk = function(a) {
  for (var c = [];this.ub == a;) {
    c.push(this.Wb);
    try {
      this.Wb = this.de.next();
    } catch (d) {
      if (d !== g.c.Q) {
        throw d;
      }
      break;
    }
    this.ub = this.ee(this.Wb);
  }
  return c;
};
g.c.Gq = function(a, c) {
  return new g.c.hc(a, c);
};
g.c.Yr = function(a, c, d) {
  var e = g.c.H(a);
  a = new g.c.w;
  a.next = function() {
    var a = g.c.Ga(e.next());
    return c.apply(d, g.a.concat(a, void 0, e));
  };
  return a;
};
g.c.cs = function(a, c) {
  var d = g.c.H(a), e = g.isNumber(c) ? c : 2, f = g.a.map(g.a.Ob(e), function() {
    return[];
  }), h = function() {
    var a = d.next();
    g.a.forEach(f, function(c) {
      c.push(a);
    });
  };
  return g.a.map(f, function(a) {
    var c = new g.c.w;
    c.next = function() {
      g.a.Y(a) && h();
      return a.shift();
    };
    return c;
  });
};
g.c.gq = function(a, c) {
  return g.c.Ve(g.c.count(c), a);
};
g.c.vi = function(a, c) {
  var d = g.c.H(a), e = new g.c.w, f = c;
  e.next = function() {
    if (0 < f--) {
      return d.next();
    }
    throw g.c.Q;
  };
  return e;
};
g.c.ui = function(a, c) {
  for (var d = g.c.H(a);0 < c--;) {
    g.c.hi(d, null);
  }
  return d;
};
g.c.slice = function(a, c, d) {
  a = g.c.ui(a, c);
  g.isNumber(d) && (a = g.c.vi(a, d - c));
  return a;
};
g.c.kh = function(a) {
  var c = [];
  g.a.Th(a, c);
  return a.length != c.length;
};
g.c.ih = function(a, c) {
  var d = g.c.Ga(a), e = g.isNumber(c) ? c : d.length, d = g.a.repeat(d, e), d = g.c.product.apply(void 0, d);
  return g.c.filter(d, function(a) {
    return!g.c.kh(a);
  });
};
g.c.Op = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = g.c.Ga(a), f = g.c.Ob(e.length), f = g.c.ih(f, c), h = g.c.filter(f, function(a) {
    return g.a.ae(a);
  }), f = new g.c.w;
  f.next = function() {
    return g.a.map(h.next(), d);
  };
  return f;
};
g.c.Pp = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = g.c.Ga(a), f = g.a.Ob(e.length), f = g.a.repeat(f, c), f = g.c.product.apply(void 0, f), h = g.c.filter(f, function(a) {
    return g.a.ae(a);
  }), f = new g.c.w;
  f.next = function() {
    return g.a.map(h.next(), d);
  };
  return f;
};
g.object = {};
g.object.forEach = function(a, c, d) {
  for (var e in a) {
    c.call(d, a[e], e, a);
  }
};
g.object.filter = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    c.call(d, a[f], f, a) && (e[f] = a[f]);
  }
  return e;
};
g.object.map = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    e[f] = c.call(d, a[f], f, a);
  }
  return e;
};
g.object.some = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return!0;
    }
  }
  return!1;
};
g.object.every = function(a, c, d) {
  for (var e in a) {
    if (!c.call(d, a[e], e, a)) {
      return!1;
    }
  }
  return!0;
};
g.object.ga = function(a) {
  var c = 0, d;
  for (d in a) {
    c++;
  }
  return c;
};
g.object.pq = function(a) {
  for (var c in a) {
    return c;
  }
};
g.object.qq = function(a) {
  for (var c in a) {
    return a[c];
  }
};
g.object.contains = function(a, c) {
  return g.object.bb(a, c);
};
g.object.R = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = a[e];
  }
  return c;
};
g.object.ea = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = e;
  }
  return c;
};
g.object.Dq = function(a, c) {
  for (var d = g.M(c), e = d ? c : arguments, d = d ? 0 : 1;d < e.length && (a = a[e[d]], g.ia(a));d++) {
  }
  return a;
};
g.object.hf = function(a, c) {
  return c in a;
};
g.object.bb = function(a, c) {
  for (var d in a) {
    if (a[d] == c) {
      return!0;
    }
  }
  return!1;
};
g.object.Ul = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return e;
    }
  }
};
g.object.lq = function(a, c, d) {
  return(c = g.object.Ul(a, c, d)) && a[c];
};
g.object.Y = function(a) {
  for (var c in a) {
    return!1;
  }
  return!0;
};
g.object.clear = function(a) {
  for (var c in a) {
    delete a[c];
  }
};
g.object.remove = function(a, c) {
  var d;
  (d = c in a) && delete a[c];
  return d;
};
g.object.add = function(a, c, d) {
  if (c in a) {
    throw Error('The object already contains the key "' + c + '"');
  }
  g.object.set(a, c, d);
};
g.object.get = function(a, c, d) {
  return c in a ? a[c] : d;
};
g.object.set = function(a, c, d) {
  a[c] = d;
};
g.object.Mr = function(a, c, d) {
  return c in a ? a[c] : a[c] = d;
};
g.object.clone = function(a) {
  var c = {}, d;
  for (d in a) {
    c[d] = a[d];
  }
  return c;
};
g.object.Kk = function(a) {
  var c = g.ca(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = g.object.Kk(a[d]);
    }
    return c;
  }
  return a;
};
g.object.sm = function(a) {
  var c = {}, d;
  for (d in a) {
    c[a[d]] = d;
  }
  return c;
};
g.object.dh = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
g.object.extend = function(a, c) {
  for (var d, e, f = 1;f < arguments.length;f++) {
    e = arguments[f];
    for (d in e) {
      a[d] = e[d];
    }
    for (var h = 0;h < g.object.dh.length;h++) {
      d = g.object.dh[h], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d]);
    }
  }
};
g.object.create = function(a) {
  var c = arguments.length;
  if (1 == c && g.isArray(arguments[0])) {
    return g.object.create.apply(null, arguments[0]);
  }
  if (c % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var d = {}, e = 0;e < c;e += 2) {
    d[arguments[e]] = arguments[e + 1];
  }
  return d;
};
g.object.Ql = function(a) {
  var c = arguments.length;
  if (1 == c && g.isArray(arguments[0])) {
    return g.object.Ql.apply(null, arguments[0]);
  }
  for (var d = {}, e = 0;e < c;e++) {
    d[arguments[e]] = !0;
  }
  return d;
};
g.object.Xp = function(a) {
  var c = a;
  Object.isFrozen && !Object.isFrozen(a) && (c = Object.create(a), Object.freeze(c));
  return c;
};
g.object.Zq = function(a) {
  return!!Object.isFrozen && Object.isFrozen(a);
};
g.g.T = function(a, c) {
  this.q = {};
  this.C = [];
  this.ob = this.Aa = 0;
  var d = arguments.length;
  if (1 < d) {
    if (d % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var e = 0;e < d;e += 2) {
      this.set(arguments[e], arguments[e + 1]);
    }
  } else {
    a && this.ad(a);
  }
};
b = g.g.T.prototype;
b.ga = function() {
  return this.Aa;
};
b.R = function() {
  this.$a();
  for (var a = [], c = 0;c < this.C.length;c++) {
    a.push(this.q[this.C[c]]);
  }
  return a;
};
b.ea = function() {
  this.$a();
  return this.C.concat();
};
b.hf = function(a) {
  return g.g.T.Sa(this.q, a);
};
b.bb = function(a) {
  for (var c = 0;c < this.C.length;c++) {
    var d = this.C[c];
    if (g.g.T.Sa(this.q, d) && this.q[d] == a) {
      return!0;
    }
  }
  return!1;
};
b.equals = function(a, c) {
  if (this === a) {
    return!0;
  }
  if (this.Aa != a.ga()) {
    return!1;
  }
  var d = c || g.g.T.ti;
  this.$a();
  for (var e, f = 0;e = this.C[f];f++) {
    if (!d(this.get(e), a.get(e))) {
      return!1;
    }
  }
  return!0;
};
g.g.T.ti = function(a, c) {
  return a === c;
};
b = g.g.T.prototype;
b.Y = function() {
  return 0 == this.Aa;
};
b.clear = function() {
  this.q = {};
  this.ob = this.Aa = this.C.length = 0;
};
b.remove = function(a) {
  return g.g.T.Sa(this.q, a) ? (delete this.q[a], this.Aa--, this.ob++, this.C.length > 2 * this.Aa && this.$a(), !0) : !1;
};
b.$a = function() {
  if (this.Aa != this.C.length) {
    for (var a = 0, c = 0;a < this.C.length;) {
      var d = this.C[a];
      g.g.T.Sa(this.q, d) && (this.C[c++] = d);
      a++;
    }
    this.C.length = c;
  }
  if (this.Aa != this.C.length) {
    for (var e = {}, c = a = 0;a < this.C.length;) {
      d = this.C[a], g.g.T.Sa(e, d) || (this.C[c++] = d, e[d] = 1), a++;
    }
    this.C.length = c;
  }
};
b.get = function(a, c) {
  return g.g.T.Sa(this.q, a) ? this.q[a] : c;
};
b.set = function(a, c) {
  g.g.T.Sa(this.q, a) || (this.Aa++, this.C.push(a), this.ob++);
  this.q[a] = c;
};
b.ad = function(a) {
  var c;
  a instanceof g.g.T ? (c = a.ea(), a = a.R()) : (c = g.object.ea(a), a = g.object.R(a));
  for (var d = 0;d < c.length;d++) {
    this.set(c[d], a[d]);
  }
};
b.forEach = function(a, c) {
  for (var d = this.ea(), e = 0;e < d.length;e++) {
    var f = d[e], h = this.get(f);
    a.call(c, h, f, this);
  }
};
b.clone = function() {
  return new g.g.T(this);
};
b.sm = function() {
  for (var a = new g.g.T, c = 0;c < this.C.length;c++) {
    var d = this.C[c];
    a.set(this.q[d], d);
  }
  return a;
};
b.rm = function() {
  this.$a();
  for (var a = {}, c = 0;c < this.C.length;c++) {
    var d = this.C[c];
    a[d] = this.q[d];
  }
  return a;
};
b.rb = function(a) {
  this.$a();
  var c = 0, d = this.C, e = this.q, f = this.ob, h = this, k = new g.c.w;
  k.next = function() {
    for (;;) {
      if (f != h.ob) {
        throw Error("The map has changed since the iterator was created");
      }
      if (c >= d.length) {
        throw g.c.Q;
      }
      var k = d[c++];
      return a ? k : e[k];
    }
  };
  return k;
};
g.g.T.Sa = function(a, c) {
  return Object.prototype.hasOwnProperty.call(a, c);
};
g.g.ga = function(a) {
  return "function" == typeof a.ga ? a.ga() : g.M(a) || g.isString(a) ? a.length : g.object.ga(a);
};
g.g.R = function(a) {
  if ("function" == typeof a.R) {
    return a.R();
  }
  if (g.isString(a)) {
    return a.split("");
  }
  if (g.M(a)) {
    for (var c = [], d = a.length, e = 0;e < d;e++) {
      c.push(a[e]);
    }
    return c;
  }
  return g.object.R(a);
};
g.g.ea = function(a) {
  if ("function" == typeof a.ea) {
    return a.ea();
  }
  if ("function" != typeof a.R) {
    if (g.M(a) || g.isString(a)) {
      var c = [];
      a = a.length;
      for (var d = 0;d < a;d++) {
        c.push(d);
      }
      return c;
    }
    return g.object.ea(a);
  }
};
g.g.contains = function(a, c) {
  return "function" == typeof a.contains ? a.contains(c) : "function" == typeof a.bb ? a.bb(c) : g.M(a) || g.isString(a) ? g.a.contains(a, c) : g.object.bb(a, c);
};
g.g.Y = function(a) {
  return "function" == typeof a.Y ? a.Y() : g.M(a) || g.isString(a) ? g.a.Y(a) : g.object.Y(a);
};
g.g.clear = function(a) {
  "function" == typeof a.clear ? a.clear() : g.M(a) ? g.a.clear(a) : g.object.clear(a);
};
g.g.forEach = function(a, c, d) {
  if ("function" == typeof a.forEach) {
    a.forEach(c, d);
  } else {
    if (g.M(a) || g.isString(a)) {
      g.a.forEach(a, c, d);
    } else {
      for (var e = g.g.ea(a), f = g.g.R(a), h = f.length, k = 0;k < h;k++) {
        c.call(d, f[k], e && e[k], a);
      }
    }
  }
};
g.g.filter = function(a, c, d) {
  if ("function" == typeof a.filter) {
    return a.filter(c, d);
  }
  if (g.M(a) || g.isString(a)) {
    return g.a.filter(a, c, d);
  }
  var e, f = g.g.ea(a), h = g.g.R(a), k = h.length;
  if (f) {
    e = {};
    for (var m = 0;m < k;m++) {
      c.call(d, h[m], f[m], a) && (e[f[m]] = h[m]);
    }
  } else {
    for (e = [], m = 0;m < k;m++) {
      c.call(d, h[m], void 0, a) && e.push(h[m]);
    }
  }
  return e;
};
g.g.map = function(a, c, d) {
  if ("function" == typeof a.map) {
    return a.map(c, d);
  }
  if (g.M(a) || g.isString(a)) {
    return g.a.map(a, c, d);
  }
  var e, f = g.g.ea(a), h = g.g.R(a), k = h.length;
  if (f) {
    e = {};
    for (var m = 0;m < k;m++) {
      e[f[m]] = c.call(d, h[m], f[m], a);
    }
  } else {
    for (e = [], m = 0;m < k;m++) {
      e[m] = c.call(d, h[m], void 0, a);
    }
  }
  return e;
};
g.g.some = function(a, c, d) {
  if ("function" == typeof a.some) {
    return a.some(c, d);
  }
  if (g.M(a) || g.isString(a)) {
    return g.a.some(a, c, d);
  }
  for (var e = g.g.ea(a), f = g.g.R(a), h = f.length, k = 0;k < h;k++) {
    if (c.call(d, f[k], e && e[k], a)) {
      return!0;
    }
  }
  return!1;
};
g.g.every = function(a, c, d) {
  if ("function" == typeof a.every) {
    return a.every(c, d);
  }
  if (g.M(a) || g.isString(a)) {
    return g.a.every(a, c, d);
  }
  for (var e = g.g.ea(a), f = g.g.R(a), h = f.length, k = 0;k < h;k++) {
    if (!c.call(d, f[k], e && e[k], a)) {
      return!1;
    }
  }
  return!0;
};
g.g.ta = function(a) {
  this.q = new g.g.T;
  a && this.ad(a);
};
g.g.ta.jd = function(a) {
  var c = typeof a;
  return "object" == c && a || "function" == c ? "o" + g.Yd(a) : c.substr(0, 1) + a;
};
b = g.g.ta.prototype;
b.ga = function() {
  return this.q.ga();
};
b.add = function(a) {
  this.q.set(g.g.ta.jd(a), a);
};
b.ad = function(a) {
  a = g.g.R(a);
  for (var c = a.length, d = 0;d < c;d++) {
    this.add(a[d]);
  }
};
b.removeAll = function(a) {
  a = g.g.R(a);
  for (var c = a.length, d = 0;d < c;d++) {
    this.remove(a[d]);
  }
};
b.remove = function(a) {
  return this.q.remove(g.g.ta.jd(a));
};
b.clear = function() {
  this.q.clear();
};
b.Y = function() {
  return this.q.Y();
};
b.contains = function(a) {
  return this.q.hf(g.g.ta.jd(a));
};
b.R = function() {
  return this.q.R();
};
b.clone = function() {
  return new g.g.ta(this);
};
b.equals = function(a) {
  return this.ga() == g.g.ga(a) && this.vj(a);
};
b.vj = function(a) {
  var c = g.g.ga(a);
  if (this.ga() > c) {
    return!1;
  }
  !(a instanceof g.g.ta) && 5 < c && (a = new g.g.ta(a));
  return g.g.every(this, function(c) {
    return g.g.contains(a, c);
  });
};
b.rb = function() {
  return this.q.rb(!1);
};
g.d = {};
g.d.userAgent = {};
g.d.userAgent.l = {};
g.d.userAgent.l.Qe = function() {
  var a = g.d.userAgent.l.qi();
  return a && (a = a.userAgent) ? a : "";
};
g.d.userAgent.l.qi = function() {
  return g.global.navigator;
};
g.d.userAgent.l.Pe = g.d.userAgent.l.Qe();
g.d.userAgent.l.Pr = function(a) {
  g.d.userAgent.l.Pe = a || g.d.userAgent.l.Qe();
};
g.d.userAgent.l.pb = function() {
  return g.d.userAgent.l.Pe;
};
g.d.userAgent.l.K = function(a) {
  return g.b.contains(g.d.userAgent.l.pb(), a);
};
g.d.userAgent.l.ri = function(a) {
  return g.b.lh(g.d.userAgent.l.pb(), a);
};
g.d.userAgent.l.Gc = function(a) {
  for (var c = RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), d = [], e;e = c.exec(a);) {
    d.push([e[1], e[2], e[3] || void 0]);
  }
  return d;
};
g.d.userAgent.browser = {};
g.d.userAgent.browser.im = function() {
  return g.d.userAgent.l.K("Opera") || g.d.userAgent.l.K("OPR");
};
g.d.userAgent.browser.hm = function() {
  return g.d.userAgent.l.K("Trident") || g.d.userAgent.l.K("MSIE");
};
g.d.userAgent.browser.gm = function() {
  return g.d.userAgent.l.K("Firefox");
};
g.d.userAgent.browser.jm = function() {
  return g.d.userAgent.l.K("Safari") && !g.d.userAgent.l.K("Chrome") && !g.d.userAgent.l.K("CriOS") && !g.d.userAgent.l.K("Android");
};
g.d.userAgent.browser.fm = function() {
  return g.d.userAgent.l.K("Chrome") || g.d.userAgent.l.K("CriOS");
};
g.d.userAgent.browser.em = function() {
  return g.d.userAgent.l.K("Android") && !g.d.userAgent.l.K("Chrome") && !g.d.userAgent.l.K("CriOS");
};
g.d.userAgent.browser.Ge = g.d.userAgent.browser.im;
g.d.userAgent.browser.Fe = g.d.userAgent.browser.hm;
g.d.userAgent.browser.Xq = g.d.userAgent.browser.gm;
g.d.userAgent.browser.fr = g.d.userAgent.browser.jm;
g.d.userAgent.browser.Sq = g.d.userAgent.browser.fm;
g.d.userAgent.browser.Qq = g.d.userAgent.browser.em;
g.d.userAgent.browser.hr = function() {
  return g.d.userAgent.l.K("Silk");
};
g.d.userAgent.browser.Kc = function() {
  var a = g.d.userAgent.l.pb();
  if (g.d.userAgent.browser.Fe()) {
    return g.d.userAgent.browser.bi(a);
  }
  if (g.d.userAgent.browser.Ge()) {
    return g.d.userAgent.browser.ci(a);
  }
  a = g.d.userAgent.l.Gc(a);
  return g.d.userAgent.browser.be(a);
};
g.d.userAgent.browser.Cc = function(a) {
  return 0 <= g.b.qb(g.d.userAgent.browser.Kc(), a);
};
g.d.userAgent.browser.bi = function(a) {
  var c = /rv: *([\d\.]*)/.exec(a);
  if (c && c[1]) {
    return c[1];
  }
  var c = "", d = /MSIE +([\d\.]+)/.exec(a);
  if (d && d[1]) {
    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == d[1]) {
      if (a && a[1]) {
        switch(a[1]) {
          case "4.0":
            c = "8.0";
            break;
          case "5.0":
            c = "9.0";
            break;
          case "6.0":
            c = "10.0";
            break;
          case "7.0":
            c = "11.0";
        }
      } else {
        c = "7.0";
      }
    } else {
      c = d[1];
    }
  }
  return c;
};
g.d.userAgent.browser.ci = function(a) {
  a = g.d.userAgent.l.Gc(a);
  var c = g.a.ce(a);
  return "OPR" == c[0] && c[1] ? c[1] : g.d.userAgent.browser.be(a);
};
g.d.userAgent.browser.be = function(a) {
  return a[2] && a[2][1] ? a[2][1] : "";
};
g.d.userAgent.da = {};
g.d.userAgent.da.er = function() {
  return g.d.userAgent.l.K("Presto");
};
g.d.userAgent.da.Uh = function() {
  return g.d.userAgent.l.K("Trident") || g.d.userAgent.l.K("MSIE");
};
g.d.userAgent.da.xe = function() {
  return g.d.userAgent.l.ri("WebKit");
};
g.d.userAgent.da.am = function() {
  return g.d.userAgent.l.K("Gecko") && !g.d.userAgent.da.xe() && !g.d.userAgent.da.Uh();
};
g.d.userAgent.da.Kc = function() {
  var a = g.d.userAgent.l.pb();
  if (a) {
    var a = g.d.userAgent.l.Gc(a), c = a[1];
    if (c) {
      return "Gecko" == c[0] ? g.d.userAgent.da.di(a, "Firefox") : c[1];
    }
    var a = a[0], d;
    if (a && (d = a[2]) && (d = /Trident\/([^\s;]+)/.exec(d))) {
      return d[1];
    }
  }
  return "";
};
g.d.userAgent.da.Cc = function(a) {
  return 0 <= g.b.qb(g.d.userAgent.da.Kc(), a);
};
g.d.userAgent.da.di = function(a, c) {
  var d = g.a.find(a, function(a) {
    return c == a[0];
  });
  return d && d[1] || "";
};
g.userAgent = {};
g.userAgent.Qd = !1;
g.userAgent.Ug = !1;
g.userAgent.Yg = !1;
g.userAgent.Rd = !1;
g.userAgent.Sd = !1;
g.userAgent.Wh = !1;
g.userAgent.Dc = g.userAgent.Qd || g.userAgent.Ug || g.userAgent.Rd || g.userAgent.Yg || g.userAgent.Sd;
g.userAgent.ab = function() {
  return g.d.userAgent.l.pb();
};
g.userAgent.Qc = function() {
  return g.global.navigator || null;
};
g.userAgent.Ab = g.userAgent.Dc ? g.userAgent.Sd : g.d.userAgent.browser.Ge();
g.userAgent.Va = g.userAgent.Dc ? g.userAgent.Qd : g.d.userAgent.browser.Fe();
g.userAgent.fg = g.userAgent.Dc ? g.userAgent.Ug : g.d.userAgent.da.am();
g.userAgent.sb = g.userAgent.Dc ? g.userAgent.Yg || g.userAgent.Rd : g.d.userAgent.da.xe();
g.userAgent.bm = function() {
  return g.userAgent.sb && g.d.userAgent.l.K("Mobile");
};
g.userAgent.En = g.userAgent.Rd || g.userAgent.bm();
g.userAgent.Qf = g.userAgent.sb;
g.userAgent.Rl = function() {
  var a = g.userAgent.Qc();
  return a && a.platform || "";
};
g.userAgent.Pc = g.userAgent.Rl();
g.userAgent.Wg = !1;
g.userAgent.Zg = !1;
g.userAgent.Vg = !1;
g.userAgent.$g = !1;
g.userAgent.Kb = !1;
g.userAgent.Mb = !1;
g.userAgent.Lb = !1;
g.userAgent.Oa = g.userAgent.Wg || g.userAgent.Zg || g.userAgent.Vg || g.userAgent.$g || g.userAgent.Kb || g.userAgent.Mb || g.userAgent.Lb;
g.userAgent.Xl = function() {
  g.userAgent.th = g.b.contains(g.userAgent.Pc, "Mac");
  g.userAgent.uh = g.b.contains(g.userAgent.Pc, "Win");
  g.userAgent.sh = g.b.contains(g.userAgent.Pc, "Linux");
  g.userAgent.vh = !!g.userAgent.Qc() && g.b.contains(g.userAgent.Qc().appVersion || "", "X11");
  var a = g.userAgent.ab();
  g.userAgent.Rb = !!a && g.b.contains(a, "Android");
  g.userAgent.rh = !!a && g.b.contains(a, "iPhone");
  g.userAgent.qh = !!a && g.b.contains(a, "iPad");
};
g.userAgent.Oa || g.userAgent.Xl();
g.userAgent.zd = g.userAgent.Oa ? g.userAgent.Wg : g.userAgent.th;
g.userAgent.Bd = g.userAgent.Oa ? g.userAgent.Zg : g.userAgent.uh;
g.userAgent.yd = g.userAgent.Oa ? g.userAgent.Vg : g.userAgent.sh;
g.userAgent.ep = g.userAgent.Oa ? g.userAgent.$g : g.userAgent.vh;
g.userAgent.ANDROID = g.userAgent.Oa ? g.userAgent.Kb : g.userAgent.Rb;
g.userAgent.Pf = g.userAgent.Oa ? g.userAgent.Mb : g.userAgent.rh;
g.userAgent.Of = g.userAgent.Oa ? g.userAgent.Lb : g.userAgent.qh;
g.userAgent.Wd = function() {
  var a = "", c;
  if (g.userAgent.Ab && g.global.opera) {
    return a = g.global.opera.version, g.isFunction(a) ? a() : a;
  }
  g.userAgent.fg ? c = /rv\:([^\);]+)(\)|;)/ : g.userAgent.Va ? c = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : g.userAgent.sb && (c = /WebKit\/(\S+)/);
  c && (a = (a = c.exec(g.userAgent.ab())) ? a[1] : "");
  return g.userAgent.Va && (c = g.userAgent.gg(), c > parseFloat(a)) ? String(c) : a;
};
g.userAgent.gg = function() {
  var a = g.global.document;
  return a ? a.documentMode : void 0;
};
g.userAgent.VERSION = g.userAgent.Wd();
g.userAgent.compare = function(a, c) {
  return g.b.qb(a, c);
};
g.userAgent.ze = {};
g.userAgent.Cc = function(a) {
  return g.userAgent.Wh || g.userAgent.ze[a] || (g.userAgent.ze[a] = 0 <= g.b.qb(g.userAgent.VERSION, a));
};
g.userAgent.Fc = g.userAgent.Cc;
g.userAgent.$l = function(a) {
  return g.userAgent.Va && g.userAgent.Sk >= a;
};
g.userAgent.Uq = g.userAgent.$l;
var t = g.global.document;
g.userAgent.Sk = t && g.userAgent.Va ? g.userAgent.gg() || ("CSS1Compat" == t.compatMode ? parseInt(g.userAgent.VERSION, 10) : 5) : void 0;
g.debug.ja = g.Xa;
g.debug.Hp = function(a, c, d) {
  d = d || g.global;
  var e = d.onerror, f = !!c;
  g.userAgent.sb && !g.userAgent.Cc("535.3") && (f = !f);
  d.onerror = function(c, d, m, n, p) {
    e && e(c, d, m, n, p);
    a({message:c, fileName:d, Ik:m, ym:n, error:p});
    return f;
  };
};
g.debug.iq = function(a, c) {
  if ("undefined" == typeof a) {
    return "undefined";
  }
  if (null == a) {
    return "NULL";
  }
  var d = [], e;
  for (e in a) {
    if (c || !g.isFunction(a[e])) {
      var f = e + " = ";
      try {
        f += a[e];
      } catch (h) {
        f += "*** " + h + " ***";
      }
      d.push(f);
    }
  }
  return d.join("\n");
};
g.debug.aq = function(a, c) {
  var d = [], e = function(a, h, k) {
    var m = h + "  ";
    k = new g.g.ta(k);
    try {
      if (g.ia(a)) {
        if (g.Ic(a)) {
          d.push("NULL");
        } else {
          if (g.isString(a)) {
            d.push('"' + a.replace(/\n/g, "\n" + h) + '"');
          } else {
            if (g.isFunction(a)) {
              d.push(String(a).replace(/\n/g, "\n" + h));
            } else {
              if (g.isObject(a)) {
                if (k.contains(a)) {
                  d.push("*** reference loop detected ***");
                } else {
                  k.add(a);
                  d.push("{");
                  for (var n in a) {
                    if (c || !g.isFunction(a[n])) {
                      d.push("\n"), d.push(m), d.push(n + " = "), e(a[n], m, k);
                    }
                  }
                  d.push("\n" + h + "}");
                }
              } else {
                d.push(a);
              }
            }
          }
        }
      } else {
        d.push("undefined");
      }
    } catch (p) {
      d.push("*** " + p + " ***");
    }
  };
  e(a, "", new g.g.ta);
  return d.join("");
};
g.debug.Sl = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    g.isArray(a[d]) ? c.push(g.debug.Sl(a[d])) : c.push(a[d]);
  }
  return "[ " + c.join(", ") + " ]";
};
g.debug.mi = function(a, c) {
  try {
    var d = g.debug.Vh(a);
    return "Message: " + g.b.eb(d.message) + '\nUrl: <a href="view-source:' + d.fileName + '" target="_new">' + d.fileName + "</a>\nLine: " + d.lineNumber + "\n\nBrowser stack:\n" + g.b.eb(d.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + g.b.eb(g.debug.Tc(c) + "-> ");
  } catch (e) {
    return "Exception trying to expose exception! You win, we lose. " + e;
  }
};
g.debug.Vh = function(a) {
  var c = g.cl("window.location.href");
  if (g.isString(a)) {
    return{message:a, name:"Unknown error", lineNumber:"Not available", fileName:c, stack:"Not available"};
  }
  var d, e, f = !1;
  try {
    d = a.lineNumber || a.Ik || "Not available";
  } catch (h) {
    d = "Not available", f = !0;
  }
  try {
    e = a.fileName || a.filename || a.sourceURL || g.global.$googDebugFname || c;
  } catch (k) {
    e = "Not available", f = !0;
  }
  return!f && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {message:a.message || "Not available", name:a.name || "UnknownError", lineNumber:d, fileName:e, stack:a.stack || "Not available"};
};
g.debug.Mg = function(a, c) {
  var d;
  "string" == typeof a ? (d = Error(a), Error.captureStackTrace && Error.captureStackTrace(d, g.debug.Mg)) : d = a;
  d.stack || (d.stack = g.debug.Tc(g.debug.Mg));
  if (c) {
    for (var e = 0;d["message" + e];) {
      ++e;
    }
    d["message" + e] = String(c);
  }
  return d;
};
g.debug.Nk = function(a) {
  if (g.Ad) {
    var c = g.debug.wg(g.debug.Nk);
    if (c) {
      return c;
    }
  }
  for (var c = [], d = arguments.callee.caller, e = 0;d && (!a || e < a);) {
    c.push(g.debug.getFunctionName(d));
    c.push("()\n");
    try {
      d = d.caller;
    } catch (f) {
      c.push("[exception trying to get caller]\n");
      break;
    }
    e++;
    if (e >= g.debug.se) {
      c.push("[...long stack...]");
      break;
    }
  }
  a && e >= a ? c.push("[...reached max depth limit...]") : c.push("[end]");
  return c.join("");
};
g.debug.se = 50;
g.debug.wg = function(a) {
  var c = Error();
  if (Error.captureStackTrace) {
    return Error.captureStackTrace(c, a), String(c.stack);
  }
  try {
    throw c;
  } catch (d) {
    c = d;
  }
  return(a = c.stack) ? String(a) : null;
};
g.debug.Tc = function(a) {
  var c;
  g.Ad && (c = g.debug.wg(a || g.debug.Tc));
  c || (c = g.debug.ke(a || arguments.callee.caller, []));
  return c;
};
g.debug.ke = function(a, c) {
  var d = [];
  if (g.a.contains(c, a)) {
    d.push("[...circular reference...]");
  } else {
    if (a && c.length < g.debug.se) {
      d.push(g.debug.getFunctionName(a) + "(");
      for (var e = a.arguments, f = 0;e && f < e.length;f++) {
        0 < f && d.push(", ");
        var h;
        h = e[f];
        switch(typeof h) {
          case "object":
            h = h ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            h = String(h);
            break;
          case "boolean":
            h = h ? "true" : "false";
            break;
          case "function":
            h = (h = g.debug.getFunctionName(h)) ? h : "[fn]";
            break;
          default:
            h = typeof h;
        }
        40 < h.length && (h = h.substr(0, 40) + "...");
        d.push(h);
      }
      c.push(a);
      d.push(")\n");
      try {
        d.push(g.debug.ke(a.caller, c));
      } catch (k) {
        d.push("[exception trying to get caller]\n");
      }
    } else {
      a ? d.push("[...long stack...]") : d.push("[end]");
    }
  }
  return d.join("");
};
g.debug.Lr = function(a) {
  g.debug.Jg = a;
};
g.debug.getFunctionName = function(a) {
  if (g.debug.mb[a]) {
    return g.debug.mb[a];
  }
  if (g.debug.Jg) {
    var c = g.debug.Jg(a);
    if (c) {
      return g.debug.mb[a] = c;
    }
  }
  a = String(a);
  g.debug.mb[a] || (c = /function ([^\(]+)/.exec(a), g.debug.mb[a] = c ? c[1] : "[Anonymous]");
  return g.debug.mb[a];
};
g.debug.rr = function(a) {
  return a.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]");
};
g.debug.mb = {};
g.debug.aa = function(a, c, d, e, f) {
  this.reset(a, c, d, e, f);
};
g.debug.aa.prototype.og = null;
g.debug.aa.prototype.ng = null;
g.debug.aa.Tj = !0;
g.debug.aa.Vj = 0;
g.debug.aa.prototype.reset = function(a, c, d, e, f) {
  g.debug.aa.Tj && ("number" == typeof f || g.debug.aa.Vj++);
  e || g.now();
  this.Lc = a;
  this.Uj = c;
  delete this.og;
  delete this.ng;
};
g.debug.aa.prototype.oi = function(a) {
  this.og = a;
};
g.debug.aa.prototype.pi = function(a) {
  this.ng = a;
};
g.debug.aa.prototype.getMessage = function() {
  return this.Uj;
};
g.debug.X = function() {
  this.clear();
};
g.debug.X.Hc = function() {
  g.debug.X.Gb || (g.debug.X.Gb = new g.debug.X);
  return g.debug.X.Gb;
};
g.debug.X.vc = 0;
g.debug.X.prototype.li = function(a, c, d) {
  var e = (this.If + 1) % g.debug.X.vc;
  this.If = e;
  if (this.Jf) {
    return e = this.Hf[e], e.reset(a, c, d), e;
  }
  this.Jf = e == g.debug.X.vc - 1;
  return this.Hf[e] = new g.debug.aa(a, c, d);
};
g.debug.X.ni = function() {
  return 0 < g.debug.X.vc;
};
g.debug.X.prototype.clear = function() {
  this.Hf = Array(g.debug.X.vc);
  this.If = -1;
  this.Jf = !1;
};
g.debug.e = function(a) {
  this.Xc = a;
  this.na = this.Cd = this.Lc = this.ma = null;
};
g.debug.e.md = "";
g.debug.e.nb = !0;
g.debug.e.nb || (g.debug.e.Jc = []);
g.debug.e.i = function(a, c) {
  this.name = a;
  this.value = c;
};
g.debug.e.i.prototype.toString = function() {
  return this.name;
};
g.debug.e.i.Nc = new g.debug.e.i("OFF", Infinity);
g.debug.e.i.Hl = new g.debug.e.i("SHOUT", 1200);
g.debug.e.i.Ne = new g.debug.e.i("SEVERE", 1E3);
g.debug.e.i.cd = new g.debug.e.i("WARNING", 900);
g.debug.e.i.Me = new g.debug.e.i("INFO", 800);
g.debug.e.i.Ke = new g.debug.e.i("CONFIG", 700);
g.debug.e.i.Le = new g.debug.e.i("FINE", 500);
g.debug.e.i.ll = new g.debug.e.i("FINER", 400);
g.debug.e.i.ml = new g.debug.e.i("FINEST", 300);
g.debug.e.i.dl = new g.debug.e.i("ALL", 0);
g.debug.e.i.bd = [g.debug.e.i.Nc, g.debug.e.i.Hl, g.debug.e.i.Ne, g.debug.e.i.cd, g.debug.e.i.Me, g.debug.e.i.Ke, g.debug.e.i.Le, g.debug.e.i.ll, g.debug.e.i.ml, g.debug.e.i.dl];
g.debug.e.i.Ja = null;
g.debug.e.i.Je = function() {
  g.debug.e.i.Ja = {};
  for (var a = 0, c;c = g.debug.e.i.bd[a];a++) {
    g.debug.e.i.Ja[c.value] = c, g.debug.e.i.Ja[c.name] = c;
  }
};
g.debug.e.i.zq = function(a) {
  g.debug.e.i.Ja || g.debug.e.i.Je();
  return g.debug.e.i.Ja[a] || null;
};
g.debug.e.i.Aq = function(a) {
  g.debug.e.i.Ja || g.debug.e.i.Je();
  if (a in g.debug.e.i.Ja) {
    return g.debug.e.i.Ja[a];
  }
  for (var c = 0;c < g.debug.e.i.bd.length;++c) {
    var d = g.debug.e.i.bd[c];
    if (d.value <= a) {
      return d;
    }
  }
  return null;
};
g.debug.e.lj = function(a) {
  g.global.console && (g.global.console.timeStamp ? g.global.console.timeStamp(a) : g.global.console.markTimeline && g.global.console.markTimeline(a));
  g.global.msWriteProfilerMark && g.global.msWriteProfilerMark(a);
};
b = g.debug.e.prototype;
b.getName = function() {
  return this.Xc;
};
b.Fg = function(a) {
  g.debug.ja && (g.debug.e.nb ? (this.na || (this.na = []), this.na.push(a)) : g.debug.e.Jc.push(a));
};
b.Ig = function(a) {
  if (g.debug.ja) {
    var c = g.debug.e.nb ? this.na : g.debug.e.Jc;
    return!!c && g.a.remove(c, a);
  }
  return!1;
};
b.getParent = function() {
  return this.ma;
};
b.getChildren = function() {
  this.Cd || (this.Cd = {});
  return this.Cd;
};
b.ge = function() {
  if (!g.debug.ja) {
    return g.debug.e.i.Nc;
  }
  if (!g.debug.e.nb) {
    return g.debug.e.um;
  }
  if (this.Lc) {
    return this.Lc;
  }
  if (this.ma) {
    return this.ma.ge();
  }
  g.o.Mc("Root logger has no level set.");
  return null;
};
b.Ti = function(a) {
  return g.debug.ja && a.value >= this.ge().value;
};
b.log = function(a, c, d) {
  g.debug.ja && this.Ti(a) && (g.isFunction(c) && (c = c()), this.Si(this.Ie(a, c, d, g.debug.e.prototype.log)));
};
b.Ie = function(a, c, d, e) {
  a = g.debug.X.ni() ? g.debug.X.Hc().li(a, c, this.Xc) : new g.debug.aa(a, String(c), this.Xc);
  d && (a.oi(d), a.pi(g.debug.mi(d, e || g.debug.e.prototype.Ie)));
  return a;
};
b.Vk = function(a, c) {
  g.debug.ja && this.log(g.debug.e.i.Ne, a, c);
};
b.wc = function(a, c) {
  g.debug.ja && this.log(g.debug.e.i.cd, a, c);
};
b.info = function(a, c) {
  g.debug.ja && this.log(g.debug.e.i.Me, a, c);
};
b.config = function(a, c) {
  g.debug.ja && this.log(g.debug.e.i.Ke, a, c);
};
b.Gg = function(a, c) {
  g.debug.ja && this.log(g.debug.e.i.Le, a, c);
};
b.Si = function(a) {
  g.debug.e.lj("log:" + a.getMessage());
  if (g.debug.e.nb) {
    for (var c = this;c;) {
      c.kj(a), c = c.getParent();
    }
  } else {
    for (var c = 0, d;d = g.debug.e.Jc[c++];) {
      d(a);
    }
  }
};
b.kj = function(a) {
  if (this.na) {
    for (var c = 0, d;d = this.na[c];c++) {
      d(a);
    }
  }
};
g.debug.ka = {};
g.debug.ka.mf = {};
g.debug.ka.Eb = function() {
  g.debug.ka.jf || (g.debug.ka.mf[g.debug.e.md] = g.debug.ka.jf);
};
g.debug.ka.vq = function() {
  return g.debug.ka.mf;
};
g.debug.ka.Bq = function() {
  g.debug.ka.Eb();
  return g.debug.ka.jf;
};
g.debug.ka.Wp = function() {
  return function() {
  };
};
g.log = {};
g.log.Ya = g.debug.ja;
g.log.md = g.debug.e.md;
g.log.e = g.debug.e;
g.log.i = g.debug.e.i;
g.log.aa = g.debug.aa;
g.log.Fg = function(a, c) {
  g.log.Ya && a && a.Fg(c);
};
g.log.Ig = function(a, c) {
  return g.log.Ya && a ? a.Ig(c) : !1;
};
g.log.log = function(a, c, d, e) {
  g.log.Ya && a && a.log(c, d, e);
};
g.log.error = function(a, c, d) {
  g.log.Ya && a && a.Vk(c, d);
};
g.log.wc = function(a, c, d) {
  g.log.Ya && a && a.wc(c, d);
};
g.log.info = function(a, c, d) {
  g.log.Ya && a && a.info(c, d);
};
g.log.Gg = function(a, c, d) {
  g.log.Ya && a && a.Gg(c, d);
};
l.fh = {};
l.fh.Jr = function(a, c) {
  if (!a) {
    return a;
  }
  c && (a = g.b.truncate(a, c));
  return g.b.eb(a);
};
l.fh.ms = function(a) {
  return g.b.Vc(a);
};
l.k = {};
l.k.Hn = "Casting to {{receiverName}}";
l.k.Ln = "Cast this tab to...";
l.k.Mn = "Cast this tab (audio) to...";
l.k.Kn = "Cast entire screen to...";
l.k.In = "Cast {{v2AppDomain}} to...";
l.k.Jn = "Cast {{v2AppDomain}}";
l.k.On = "Cast this tab";
l.k.uo = "Stop casting";
l.k.Nn = "Cast {{v2AppDomain}}";
l.k.co = "Bug or Error";
l.k.fo = "Feature Request";
l.k.io = "Tab/Desktop Projection Quality";
l.k.eo = "Device Discovery";
l.k.ho = "Other";
l.k.ko = "Freezes";
l.k.no = "Jerky";
l.k.ro = "Occasional Stutter";
l.k.qo = "Smooth";
l.k.oo = "Perfect";
l.k.Xn = "N/A";
l.k.so = "Unwatchable";
l.k.po = "Poor";
l.k.jo = "Acceptable";
l.k.lo = "Good - DVD";
l.k.mo = "Great - HD";
l.k.Vn = "Unintelligible";
l.k.Un = "Poor";
l.k.Rn = "Acceptable - FM";
l.k.Sn = "Good";
l.k.Tn = "Perfect";
l.k.Wn = "Do you want to discard the feedback?";
l.k.$n = "Sending feedback...";
l.k.ao = "Unable to send feedback. Please try again later.";
l.k.bo = "Thank you for sending feedback.";
l.k.Zn = "Failed to send feedback. Retrying (this is attempt #{{attemptNumber}})...";
l.k.xl = "Standard (480p)";
l.k.vl = "High (720p)";
l.k.wl = "Extreme (720p high bitrate)";
l.k.to = "Google Cast extension options";
l.k.Yn = "Google Cast feedback";
l.k.Pn = "The Google Cast extension enables you to find and play content on your Chromecast device from your Chrome browser.\nWhen on Cast optimized sites, you'll see new options that let you play video on your TV via Chromecast - using your computer as a remote to browse for videos and to control playback.\nYou can also cast any of your tabs in Chrome to your TV, letting you enjoy sites, photos, or even video from the best screen in your home. Note that this feature is still in beta, and requires a fast computer and Wi-Fi network.\nChromecast hardware is required to use this extension. To find out more, visit http://google.com/chromecast.\nBy installing this item, you agree to the Google Terms of Service and Privacy Policy at https://www.google.com/intl/en/policies/.";
l.k.Gn = "The Google Cast extension enables you to find and play content on your Chromecast device from your Chrome browser.\nThis is the *BETA* channel of the Google Cast extension.  It is intended for developers and advanced users who want early access to upcoming APIs and features in advance of public release.  Most users should install the stable Google Cast extension (https://chrome.google.com/webstore/detail/google-cast/boadgeojelhgndaghljhdicfkmllpafd). The beta channel will often be less stable and contain more bugs.\nBy installing this item, you agree to the Google Terms of Service and Privacy Policy at https://www.google.com/intl/en/policies/.";
l.k.Qn = "Send content to your Chromecast and other devices that support Google Cast.";
l.h = {};
l.h.Vo = {xg:"webrtc", Im:"cast_streaming"};
l.h.Sm = {So:"tab", Vm:"desktop"};
l.h.dp = {cp:"VP8", Hm:"CAST1", gn:"H264", Fo:"rtx"};
l.h.F = function(a, c, d, e, f, h, k, m) {
  this.id = a;
  this.name = c;
  this.videoWidth = d;
  this.videoHeight = e;
  this.videoResolution = d + "x" + e;
  this.minVideoBitrate = f;
  this.maxVideoBitrate = h;
  this.videoQuality = k;
  this.audioBitrate = m;
};
l.h.F.bh = new l.h.F("high", l.k.vl, 1280, 720, 2E3, 2500, 56, 128);
l.h.F.rl = new l.h.F("low", l.k.xl, 854, 480, 750, 1500, 56, 128);
l.h.F.ol = new l.h.F("highest", l.k.wl, 1280, 720, 4E3, 5E3, 56, 128);
l.h.F.La = l.h.F.bh;
l.h.F.mh = [l.h.F.ol, l.h.F.bh, l.h.F.rl];
l.h.F.Qm = "custom";
l.h.F.uq = function(a) {
  return g.a.find(l.h.F.mh, function(c) {
    return c.id == a;
  });
};
l.U = {};
l.U.xk = {wk:"fatal", cd:"warning"};
l.U.Lo = {zm:"act_on_issue", Ro:"stop_activity", Co:"play_media", Ao:"pause_media", Oo:"set_mute", CAST_THIS_TAB:"cast_this_tab", Jm:"cast_this_tab_audio", CREATE_SESSION:"create_session", sn:"launch_desktop_mirror", INIT:"init", Xo:"update_settings"};
l.U.dn = {Fn:"model_update"};
l.U.Fm = {Yo:"v1_app", Zo:"v2_app", Pm:"custom_app", Dn:"mirror_tab", Cn:"mirror_screen"};
l.U.Message = function(a, c) {
  this.type = a;
  this.message = c;
};
l.U.Em = function(a, c, d, e, f, h, k, m, n) {
  this.id = a;
  this.receiver = new l.U.fa(c.id, c.uniqueId, c.name, c.receiverType);
  this.activityType = d;
  this.iconUrl = e || null;
  this.title = f || "";
  this.isInLaunch = h;
  this.mediaPlayerStatus = k || null;
  this.tabId = m || null;
  this.isLocal = n;
};
l.U.Sb = {CAST:"cast", DIAL:"dial", CUSTOM:"custom"};
l.U.fa = function(a, c, d, e) {
  this.id = a;
  this.uniqueId = c;
  this.name = d;
  this.receiverType = e;
};
l.U.qn = function(a, c, d, e, f, h, k) {
  this.id = a;
  this.title = c;
  this.message = d;
  this.defaultActionText = e;
  this.optActionText = f || "";
  this.severity = h || l.U.xk.wk;
  this.activityId = k || null;
};
l.U.Go = function(a, c) {
  this.receiver = a;
  this.activity = c;
};
l.U.Dm = function(a, c) {
  this.id = a;
  this.isDefaultAction = c;
};
l.U.B = function(a, c, d, e) {
  this.statsCollectNotificationDismissed = g.Ha(d) ? d : !0;
  this.sendUsageEnabled = g.Ha(e) ? e : !0;
  this.castAppNotificationDismissed = g.Ha(a) ? a : !1;
  this.mirrorQualityId = c || l.h.F.La.id;
};
l.U.xo = function(a, c, d, e, f, h, k) {
  this.receiverActs = a || [];
  this.issue = c;
  this.isV1AppInTab = h || !1;
  this.isV2AppInTab = !!k;
  this.v2AppDomain = k || null;
  this.currentActivity = d;
  this.desktopActivity = e;
  this.settings = f || new l.U.B;
};
l.U.vo = function() {
  this.playerState = chrome.cast.media.Bb.IDLE;
  this.muted = null;
  this.supportedCommands = [chrome.cast.media.Kg.PAUSE];
};
l.hn = function() {
};
g.userAgent.product = {};
g.userAgent.product.Tg = !1;
g.userAgent.product.Rg = !1;
g.userAgent.product.Mb = !1;
g.userAgent.product.Lb = !1;
g.userAgent.product.Kb = !1;
g.userAgent.product.Sg = !1;
g.userAgent.product.Xg = !1;
g.userAgent.product.Pa = g.userAgent.Qd || g.userAgent.Sd || g.userAgent.product.Tg || g.userAgent.product.Rg || g.userAgent.product.Mb || g.userAgent.product.Lb || g.userAgent.product.Kb || g.userAgent.product.Sg || g.userAgent.product.Xg;
g.userAgent.product.cc = function() {
  g.userAgent.product.jg = !1;
  g.userAgent.product.hg = !1;
  g.userAgent.product.lg = !1;
  g.userAgent.product.kg = !1;
  g.userAgent.product.Rb = !1;
  g.userAgent.product.ig = !1;
  g.userAgent.product.mg = !1;
  var a = g.userAgent.ab();
  a && (-1 != a.indexOf("Firefox") ? g.userAgent.product.jg = !0 : -1 != a.indexOf("Camino") ? g.userAgent.product.hg = !0 : -1 != a.indexOf("iPhone") || -1 != a.indexOf("iPod") ? g.userAgent.product.lg = !0 : -1 != a.indexOf("iPad") ? g.userAgent.product.kg = !0 : -1 != a.indexOf("Chrome") ? g.userAgent.product.ig = !0 : -1 != a.indexOf("Android") ? g.userAgent.product.Rb = !0 : -1 != a.indexOf("Safari") && (g.userAgent.product.mg = !0));
};
g.userAgent.product.Pa || g.userAgent.product.cc();
g.userAgent.product.Ab = g.userAgent.Ab;
g.userAgent.product.Va = g.userAgent.Va;
g.userAgent.product.Kj = g.userAgent.product.Pa ? g.userAgent.product.Tg : g.userAgent.product.jg;
g.userAgent.product.Jj = g.userAgent.product.Pa ? g.userAgent.product.Rg : g.userAgent.product.hg;
g.userAgent.product.Pf = g.userAgent.product.Pa ? g.userAgent.product.Mb : g.userAgent.product.lg;
g.userAgent.product.Of = g.userAgent.product.Pa ? g.userAgent.product.Lb : g.userAgent.product.kg;
g.userAgent.product.ANDROID = g.userAgent.product.Pa ? g.userAgent.product.Kb : g.userAgent.product.Rb;
g.userAgent.product.CHROME = g.userAgent.product.Pa ? g.userAgent.product.Sg : g.userAgent.product.ig;
g.userAgent.product.Qf = g.userAgent.product.Pa ? g.userAgent.product.Xg : g.userAgent.product.mg;
g.userAgent.product.Wd = function() {
  if (g.userAgent.product.Kj) {
    return g.userAgent.product.kb(/Firefox\/([0-9.]+)/);
  }
  if (g.userAgent.product.Va || g.userAgent.product.Ab) {
    return g.userAgent.VERSION;
  }
  if (g.userAgent.product.CHROME) {
    return g.userAgent.product.kb(/Chrome\/([0-9.]+)/);
  }
  if (g.userAgent.product.Qf) {
    return g.userAgent.product.kb(/Version\/([0-9.]+)/);
  }
  if (g.userAgent.product.Pf || g.userAgent.product.Of) {
    var a = g.userAgent.product.Sf(/Version\/(\S+).*Mobile\/(\S+)/);
    if (a) {
      return a[1] + "." + a[2];
    }
  } else {
    if (g.userAgent.product.ANDROID) {
      return(a = g.userAgent.product.kb(/Android\s+([0-9.]+)/)) ? a : g.userAgent.product.kb(/Version\/([0-9.]+)/);
    }
    if (g.userAgent.product.Jj) {
      return g.userAgent.product.kb(/Camino\/([0-9.]+)/);
    }
  }
  return "";
};
g.userAgent.product.kb = function(a) {
  return(a = g.userAgent.product.Sf(a)) ? a[1] : "";
};
g.userAgent.product.Sf = function(a) {
  return a.exec(g.userAgent.ab());
};
g.userAgent.product.VERSION = g.userAgent.product.Wd();
g.userAgent.product.Fc = function(a) {
  return 0 <= g.b.qb(g.userAgent.product.VERSION, a);
};
l.h.D = function() {
  this.videoBitrate = l.h.F.La.maxVideoBitrate;
  this.minVideoBitrate = l.h.F.La.minVideoBitrate;
  this.maxVideoBitrate = l.h.F.La.maxVideoBitrate;
  this.videoQuality = l.h.F.La.videoQuality;
  this.minWidth = l.h.F.La.videoWidth;
  this.minHeight = l.h.F.La.videoHeight;
  this.audioBitrate = l.h.F.La.audioBitrate;
  this.useOpus = !0;
  this.bufferedMode = l.h.D.wi.Ai;
  this.bufferSizeMillis = l.h.D.xi;
  this.maxCastLatencyMillis = l.h.D.yi;
  this.maxFrameRate = l.h.D.zi;
  this.enablePacing = l.h.D.Ci();
  this.enableVideoTcp = this.enableAudioTcp = !1;
  this.zoomModeEnabled = this.enableAudioNack = !0;
  this.preferredVideoCodec = "CAST1";
};
l.h.D.$m = !1;
l.h.D.wi = {Nc:"off", Cm:"auto", Ai:"on"};
l.h.D.pj = 100;
l.h.D.oj = 1E4;
l.h.D.An = 56;
l.h.D.yn = 128;
l.h.D.Bn = 100;
l.h.D.zn = 100;
l.h.D.xn = 1;
l.h.D.zi = 30;
l.h.D.$o = {"640x360":[640, 360], "854x480":[854, 480], "1280x720":[1280, 720], "1920x1080":[1920, 1080]};
l.h.D.prototype.update = function(a) {
  for (var c in this) {
    g.isFunction(this[c]) || g.W(a[c]) && g.ca(this[c]) == g.ca(a[c]) && (this[c] = a[c]);
  }
};
l.h.D.Tp = function(a) {
  return Math.min(l.h.D.oj, Math.max(l.h.D.pj, a));
};
l.h.D.Ci = function() {
  return g.userAgent.product.CHROME && g.userAgent.product.Fc(28);
};
l.h.D.xi = 500;
l.h.D.yi = 300;
l.xa = {};
l.xa.bg = function() {
  return null != g.userAgent.ab() && -1 != g.userAgent.ab().indexOf("CrOS");
};
l.xa.Hb = {Qj:"ChromeOS", Bd:"Windows", zd:"Mac", yd:"Linux", OTHER:"Other"};
l.xa.sq = function() {
  return l.xa.bg() ? l.xa.Hb.Qj : g.userAgent.Bd ? l.xa.Hb.Bd : g.userAgent.zd ? l.xa.Hb.zd : g.userAgent.yd ? l.xa.Hb.yd : l.xa.Hb.OTHER;
};
l.Config = {};
l.Config.fl = "dliochdbjfkdbacpmhlcpmleaejidimm";
l.Config.Dg = "boadgeojelhgndaghljhdicfkmllpafd";
l.Config.Ac = function() {
  return g.ia(chrome.runtime) ? chrome.runtime.id : l.Config.Dg;
};
l.Config.Nh = !0;
l.Config.Zl = l.Config.Ac() === l.Config.fl;
l.Config.cm = l.Config.Ac() === l.Config.Dg;
l.Config.Yq = g.userAgent.product.Fc(35);
l.Config.jr = "undefined" != typeof chrome && !!chrome.networkingPrivate && !!chrome.networkingPrivate.setWifiTDLSEnabledState && l.xa.bg();
l.Config.Mh = !!chrome.cast && !!chrome.cast.streaming && g.userAgent.product.Fc(36);
l.nn = function() {
};
l.h.yj = "0F5096E8";
l.h.Bj = l.Config.cm ? "9D8006F2" : l.Config.Zl ? "5B74E543" : chrome.extension && localStorage.WebrtcCastReceiverAppId || "58232327";
l.h.cr = function(a) {
  return a == l.h.yj || a == l.h.Bj;
};
g.debug.P = {};
g.debug.cn = function() {
};
g.debug.P.lb = [];
g.debug.P.xd = [];
g.debug.P.dg = !1;
g.debug.P.register = function(a) {
  g.debug.P.lb[g.debug.P.lb.length] = a;
  if (g.debug.P.dg) {
    for (var c = g.debug.P.xd, d = 0;d < c.length;d++) {
      a(g.bind(c[d].wrap, c[d]));
    }
  }
};
g.debug.P.sr = function(a) {
  g.debug.P.dg = !0;
  for (var c = g.bind(a.wrap, a), d = 0;d < g.debug.P.lb.length;d++) {
    g.debug.P.lb[d](c);
  }
  g.debug.P.xd.push(a);
};
g.debug.P.ls = function(a) {
  var c = g.debug.P.xd;
  a = g.bind(a.wm, a);
  for (var d = 0;d < g.debug.P.lb.length;d++) {
    g.debug.P.lb[d](a);
  }
  c.length--;
};
g.async = {};
g.async.Nd = function(a) {
  g.global.setTimeout(function() {
    throw a;
  }, 0);
};
g.async.Da = function(a, c) {
  var d = a;
  c && (d = g.bind(a, c));
  d = g.async.Da.Ag(d);
  g.isFunction(g.global.setImmediate) ? g.global.setImmediate(d) : (g.async.Da.Bg || (g.async.Da.Bg = g.async.Da.Gk()), g.async.Da.Bg(d));
};
g.async.Da.Gk = function() {
  if (g.global.Promise && g.global.Promise.resolve) {
    var a = g.global.Promise.resolve();
    return function(c) {
      a.then(function() {
        try {
          c();
        } catch (a) {
          g.async.Nd(a);
        }
      });
    };
  }
  var c = g.global.MessageChannel;
  "undefined" === typeof c && "undefined" !== typeof window && window.postMessage && window.addEventListener && (c = function() {
    var a = document.createElement("iframe");
    a.style.display = "none";
    a.src = "";
    document.documentElement.appendChild(a);
    var c = a.contentWindow, a = c.document;
    a.open();
    a.write("");
    a.close();
    var d = "callImmediate" + Math.random(), e = c.location.protocol + "//" + c.location.host, a = g.bind(function(a) {
      if (a.origin == e || a.data == d) {
        this.port1.onmessage();
      }
    }, this);
    c.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      c.postMessage(d, e);
    }};
  });
  if ("undefined" !== typeof c) {
    var d = new c, e = {}, f = e;
    d.port1.onmessage = function() {
      e = e.next;
      var a = e.Lg;
      e.Lg = null;
      a();
    };
    return function(a) {
      f.next = {Lg:a};
      f = f.next;
      d.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
    var c = document.createElement("script");
    c.onreadystatechange = function() {
      c.onreadystatechange = null;
      c.parentNode.removeChild(c);
      c = null;
      a();
      a = null;
    };
    document.documentElement.appendChild(c);
  } : function(a) {
    g.global.setTimeout(a, 0);
  };
};
g.async.Da.Ag = g.t.identity;
g.debug.P.register(function(a) {
  g.async.Da.Ag = a;
});
g.Na = {};
g.Na.Za = {};
g.Na.Za.Md = [];
g.Na.Za.Sr = function() {
  for (var a = g.Na.Za.Md, c = 0;c < a.length;c++) {
    g.Na.Za.Md[c]();
  }
};
g.Na.Za.tm = function(a) {
  g.Na.Za.Md.push(a);
};
g.async.run = function(a, c) {
  g.async.run.zc || (g.async.Da(g.async.run.qk), g.async.run.zc = !0);
  g.async.run.Ib.push(new g.async.run.nk(a, c));
};
g.async.run.zc = !1;
g.async.run.Ib = [];
g.Xa && (g.async.run.nm = function() {
  g.async.run.zc = !1;
  g.async.run.Ib = [];
}, g.Na.Za.tm(g.async.run.nm));
g.async.run.qk = function() {
  for (;g.async.run.Ib.length;) {
    var a = g.async.run.Ib;
    g.async.run.Ib = [];
    for (var c = 0;c < a.length;c++) {
      var d = a[c];
      try {
        d.Hk.call(d.scope);
      } catch (e) {
        g.async.Nd(e);
      }
    }
  }
  g.async.run.zc = !1;
};
g.async.run.nk = function(a, c) {
  this.Hk = a;
  this.scope = c;
};
g.promise = {};
g.promise.Mo = function() {
};
g.Ba = function() {
};
g.Ba.prototype.then = function() {
};
g.Ba.Nf = "$goog_Thenable";
g.Ba.gh = function(a) {
  g.u(a.prototype, "then", a.prototype.then);
  a.prototype[g.Ba.Nf] = !0;
};
g.Ba.Li = function(a) {
  if (!a) {
    return!1;
  }
  try {
    return!!a[g.Ba.Nf];
  } catch (c) {
    return!1;
  }
};
g.Promise = function(a, c) {
  this.N = g.Promise.G.oa;
  this.Oc = void 0;
  this.ha = this.ma = null;
  this.Wc = !1;
  0 < g.Promise.Ta ? this.Yb = 0 : 0 == g.Promise.Ta && (this.Xb = !1);
  g.Promise.tb && (this.Yc = [], this.De(Error("created")), this.ye = 0);
  try {
    var d = this;
    a.call(c, function(a) {
      d.qa(g.Promise.G.Ub, a);
    }, function(a) {
      d.qa(g.Promise.G.ra, a);
    });
  } catch (e) {
    this.qa(g.Promise.G.ra, e);
  }
};
g.Promise.tb = !1;
g.Promise.Ta = 0;
g.Promise.G = {oa:0, cf:1, Ub:2, ra:3};
g.Promise.resolve = function(a) {
  return new g.Promise(function(c) {
    c(a);
  });
};
g.Promise.reject = function(a) {
  return new g.Promise(function(c, d) {
    d(a);
  });
};
g.Promise.race = function(a) {
  return new g.Promise(function(c, d) {
    a.length || c(void 0);
    for (var e = 0, f;f = a[e];e++) {
      f.then(c, d);
    }
  });
};
g.Promise.all = function(a) {
  return new g.Promise(function(c, d) {
    var e = a.length, f = [];
    if (e) {
      for (var h = function(a, d) {
        e--;
        f[a] = d;
        0 == e && c(f);
      }, k = function(a) {
        d(a);
      }, m = 0, n;n = a[m];m++) {
        n.then(g.Vb(h, m), k);
      }
    } else {
      c(f);
    }
  });
};
g.Promise.mq = function(a) {
  return new g.Promise(function(c, d) {
    var e = a.length, f = [];
    if (e) {
      for (var h = function(a) {
        c(a);
      }, k = function(a, c) {
        e--;
        f[a] = c;
        0 == e && d(f);
      }, m = 0, n;n = a[m];m++) {
        n.then(h, g.Vb(k, m));
      }
    } else {
      c(void 0);
    }
  });
};
g.Promise.ss = function() {
  var a, c, d = new g.Promise(function(d, f) {
    a = d;
    c = f;
  });
  return new g.Promise.Fl(d, a, c);
};
g.Promise.prototype.then = function(a, c, d) {
  g.Promise.tb && this.De(Error("then"));
  return this.Qk(g.isFunction(a) ? a : null, g.isFunction(c) ? c : null, d);
};
g.Ba.gh(g.Promise);
b = g.Promise.prototype;
b.cancel = function(a) {
  this.N == g.Promise.G.oa && g.async.run(function() {
    var c = new g.Promise.vb(a);
    this.lf(c);
  }, this);
};
b.lf = function(a) {
  this.N == g.Promise.G.oa && (this.ma ? this.ma.mj(this, a) : this.qa(g.Promise.G.ra, a));
};
b.mj = function(a, c) {
  if (this.ha) {
    for (var d = 0, e = -1, f = 0, h;h = this.ha[f];f++) {
      if (h = h.gc) {
        if (d++, h == a && (e = f), 0 <= e && 1 < d) {
          break;
        }
      }
    }
    0 <= e && (this.N == g.Promise.G.oa && 1 == d ? this.lf(c) : (d = this.ha.splice(e, 1)[0], this.ff(d, g.Promise.G.ra, c)));
  }
};
b.Hj = function(a) {
  this.ha && this.ha.length || this.N != g.Promise.G.Ub && this.N != g.Promise.G.ra || this.Se();
  this.ha || (this.ha = []);
  this.ha.push(a);
};
b.Qk = function(a, c, d) {
  var e = {gc:null, sf:null, tf:null};
  e.gc = new g.Promise(function(f, h) {
    e.sf = a ? function(c) {
      try {
        var e = a.call(d, c);
        f(e);
      } catch (n) {
        h(n);
      }
    } : f;
    e.tf = c ? function(a) {
      try {
        var e = c.call(d, a);
        !g.ia(e) && a instanceof g.Promise.vb ? h(a) : f(e);
      } catch (n) {
        h(n);
      }
    } : h;
  });
  e.gc.ma = this;
  this.Hj(e);
  return e.gc;
};
b.df = function(a) {
  this.N = g.Promise.G.oa;
  this.qa(g.Promise.G.Ub, a);
};
b.ef = function(a) {
  this.N = g.Promise.G.oa;
  this.qa(g.Promise.G.ra, a);
};
b.qa = function(a, c) {
  if (this.N == g.Promise.G.oa) {
    if (this == c) {
      a = g.Promise.G.ra, c = new TypeError("Promise cannot resolve to itself");
    } else {
      if (g.Ba.Li(c)) {
        this.N = g.Promise.G.cf;
        c.then(this.df, this.ef, this);
        return;
      }
      if (g.isObject(c)) {
        try {
          var d = c.then;
          if (g.isFunction(d)) {
            this.Mi(c, d);
            return;
          }
        } catch (e) {
          a = g.Promise.G.ra, c = e;
        }
      }
    }
    this.Oc = c;
    this.N = a;
    this.Se();
    a != g.Promise.G.ra || c instanceof g.Promise.vb || g.Promise.Ki(this, c);
  }
};
b.Mi = function(a, c) {
  this.N = g.Promise.G.cf;
  var d = this, e = !1, f = function(a) {
    e || (e = !0, d.df(a));
  }, h = function(a) {
    e || (e = !0, d.ef(a));
  };
  try {
    c.call(a, f, h);
  } catch (k) {
    h(k);
  }
};
b.Se = function() {
  this.Wc || (this.Wc = !0, g.async.run(this.$k, this));
};
b.$k = function() {
  for (;this.ha && this.ha.length;) {
    var a = this.ha;
    this.ha = [];
    for (var c = 0;c < a.length;c++) {
      g.Promise.tb && this.ye++, this.ff(a[c], this.N, this.Oc);
    }
  }
  this.Wc = !1;
};
b.ff = function(a, c, d) {
  c == g.Promise.G.Ub ? a.sf(d) : (this.Oj(), a.tf(d));
};
b.De = function(a) {
  if (g.Promise.tb && g.isString(a.stack)) {
    var c = a.stack.split("\n", 4)[3];
    a = a.message;
    a += Array(11 - a.length).join(" ");
    this.Yc.push(a + c);
  }
};
b.rg = function(a) {
  if (g.Promise.tb && a && g.isString(a.stack) && this.Yc.length) {
    for (var c = ["Promise trace:"], d = this;d;d = d.ma) {
      for (var e = this.ye;0 <= e;e--) {
        c.push(d.Yc[e]);
      }
      c.push("Value: [" + (d.N == g.Promise.G.ra ? "REJECTED" : "FULFILLED") + "] <" + String(d.Oc) + ">");
    }
    a.stack += "\n\n" + c.join("\n");
  }
};
b.Oj = function() {
  if (0 < g.Promise.Ta) {
    for (var a = this;a && a.Yb;a = a.ma) {
      g.global.clearTimeout(a.Yb), a.Yb = 0;
    }
  } else {
    if (0 == g.Promise.Ta) {
      for (a = this;a && a.Xb;a = a.ma) {
        a.Xb = !1;
      }
    }
  }
};
g.Promise.Ki = function(a, c) {
  0 < g.Promise.Ta ? a.Yb = g.global.setTimeout(function() {
    a.rg(c);
    g.Promise.Ld.call(null, c);
  }, g.Promise.Ta) : 0 == g.Promise.Ta && (a.Xb = !0, g.async.run(function() {
    a.Xb && (a.rg(c), g.Promise.Ld.call(null, c));
  }));
};
g.Promise.Ld = g.async.Nd;
g.Promise.Or = function(a) {
  g.Promise.Ld = a;
};
g.Promise.vb = function(a) {
  g.debug.J.call(this, a);
};
g.za(g.Promise.vb, g.debug.J);
g.Promise.vb.prototype.name = "cancel";
g.Promise.Fl = function(a, c, d) {
  this.promise = a;
  this.resolve = c;
  this.reject = d;
};
g.result = {};
g.result.ba = function() {
};
g.result.ba.prototype.Mf = function() {
};
g.result.ba.Ua = {pf:"success", ERROR:"error", oa:"pending"};
b = g.result.ba.prototype;
b.vd = function() {
};
b.Lf = function() {
};
b.getError = function() {
};
b.cancel = function() {
};
b.mc = function() {
};
g.result.ba.sd = function() {
};
g.za(g.result.ba.sd, Error);
g.result.Ma = function() {
  this.N = g.result.ba.Ua.oa;
  this.na = [];
  this.kd = this.gf = void 0;
};
g.Ba.gh(g.result.Ma);
g.result.Ma.od = function() {
  g.debug.J.call(this, "Multiple attempts to set the state of this Result");
};
g.za(g.result.Ma.od, g.debug.J);
b = g.result.Ma.prototype;
b.vd = function() {
  return this.N;
};
b.Lf = function() {
  return this.gf;
};
b.getError = function() {
  return this.kd;
};
b.Mf = function(a, c) {
  this.lc() ? this.na.push({Fk:a, scope:c || null}) : a.call(c, this);
};
b.Mk = function(a) {
  if (this.lc()) {
    this.gf = a, this.N = g.result.ba.Ua.pf, this.qf();
  } else {
    if (!this.mc()) {
      throw new g.result.Ma.od;
    }
  }
};
b.Xf = function(a) {
  if (this.lc()) {
    this.kd = a, this.N = g.result.ba.Ua.ERROR, this.qf();
  } else {
    if (!this.mc()) {
      throw new g.result.Ma.od;
    }
  }
};
b.qf = function() {
  var a = this.na;
  this.na = [];
  for (var c = 0;c < a.length;c++) {
    var d = a[c];
    d.Fk.call(d.scope, this);
  }
};
b.lc = function() {
  return this.N == g.result.ba.Ua.oa;
};
b.cancel = function() {
  return this.lc() ? (this.Xf(new g.result.ba.sd), !0) : !1;
};
b.mc = function() {
  return this.N == g.result.ba.Ua.ERROR && this.kd instanceof g.result.ba.sd;
};
b.then = function(a, c, d) {
  var e, f, h = new g.Promise(function(a, c) {
    e = a;
    f = c;
  });
  this.Mf(function(a) {
    a.mc() ? h.cancel() : a.vd() == g.result.ba.Ua.pf ? e(a.Lf()) : a.vd() == g.result.ba.Ua.ERROR && f(a.getError());
  });
  return h.then(a, c, d);
};
g.result.Ma.oq = function(a) {
  var c = new g.result.Ma;
  a.then(c.Mk, c.Xf, c);
  return c;
};
l.Dh = function() {
  this.hasNetworkSoftware = this.networkDescription = this.gpu = this.cpu = this.googleUsername = null;
};
l.Lh = function() {
  this.dismissClicks = this.earliestTimeToShowWarning = this.sessionsBeforeWarning = 0;
  this.statsCollectNotificationDismissed = this.intelBadCpuWarningDismissed = this.castAppNotificationDismissed = !1;
};
l.B = function() {
  this.V = {};
  this.mk();
  this.Uf = this.Nj = this.Mj = !1;
};
g.Pl(l.B);
l.B.Rm = "ChromeCast";
l.B.Z = {fe:"receiverIdToken", Fh:"tabCaptureSettings", Jh:"userNotification", Ih:"siteTokens", Bh:"feedback", Ch:"fixedIps", zh:"enableCloud", yh:"cloudDevice", Ah:"enableHangouts", Gh:"mirrorLinkProtection", Hh:"sendStatsEnabled", Eh:"lastMirrorDataAutoSubmitTimeMillis", Kh:"useCastStreaming"};
l.B.Um = {appEngineReceiverIds:!0, receiverUrl:!0, flingEnabled:!0, customReceiverVersion:!0, enableCustomReceiverVersion:!0, sendUsageEnabled:!0};
l.B.prototype.mk = function() {
  this.V[l.B.Z.Fh] = new l.h.D;
  this.V[l.B.Z.Bh] = new l.Dh;
  this.V[l.B.Z.Jh] = new l.Lh;
  this.V[l.B.Z.Ih] = {};
  this.V[l.B.Z.Gh] = !0;
  this.V[l.B.Z.Hh] = !0;
  this.V[l.B.Z.Ch] = [];
  this.V[l.B.Z.zh] = !1;
  this.V[l.B.Z.yh] = {};
  this.V[l.B.Z.Ah] = !1;
  this.V[l.B.Z.Eh] = 0;
  this.V[l.B.Z.Kh] = l.Config.Mh && l.Config.Nh;
};
l.B.prototype.oh = function() {
  this.Mj ? (g.log.info(this.jc, "Saving settings to storage."), this.Nj ? (localStorage.settings = JSON.stringify(this.V), this.Uf && (chrome.storage.local.clear(), this.Uf = !1)) : chrome.storage.local.set(this.V, g.bind(function() {
    chrome.runtime.lastError ? g.log.wc(this.jc, "Failed to save settings to chrome.storage.") : g.log.info(this.jc, "Successfully saved settings to storage.");
  }, this))) : g.log.wc(this.jc, "Aborting saving settings before initialization.");
};
l.B.prototype.ki = function() {
  var a = this.V[l.B.Z.fe];
  a || (a = g.b.nh(), this.V[l.B.Z.fe] = a, this.oh());
  return a;
};
g.f = {};
g.f.Ni = function(a) {
  for (var c = [], d = 0, e = 0;e < a.length;e++) {
    for (var f = a.charCodeAt(e);255 < f;) {
      c[d++] = f & 255, f >>= 8;
    }
    c[d++] = f;
  }
  return c;
};
g.f.Oi = function(a) {
  if (8192 > a.length) {
    return String.fromCharCode.apply(null, a);
  }
  for (var c = "", d = 0;d < a.length;d += 8192) {
    var e = g.a.slice(a, d, d + 8192), c = c + String.fromCharCode.apply(null, e)
  }
  return c;
};
g.f.Bp = function(a) {
  return g.a.map(a, function(a) {
    a = a.toString(16);
    return 1 < a.length ? a : "0" + a;
  }).join("");
};
g.f.Kq = function(a) {
  for (var c = [], d = 0;d < a.length;d += 2) {
    c.push(parseInt(a.substring(d, d + 2), 16));
  }
  return c;
};
g.f.Zr = function(a) {
  a = a.replace(/\r\n/g, "\n");
  for (var c = [], d = 0, e = 0;e < a.length;e++) {
    var f = a.charCodeAt(e);
    128 > f ? c[d++] = f : (2048 > f ? c[d++] = f >> 6 | 192 : (c[d++] = f >> 12 | 224, c[d++] = f >> 6 & 63 | 128), c[d++] = f & 63 | 128);
  }
  return c;
};
g.f.qs = function(a) {
  for (var c = [], d = 0, e = 0;d < a.length;) {
    var f = a[d++];
    if (128 > f) {
      c[e++] = String.fromCharCode(f);
    } else {
      if (191 < f && 224 > f) {
        var h = a[d++];
        c[e++] = String.fromCharCode((f & 31) << 6 | h & 63);
      } else {
        var h = a[d++], k = a[d++];
        c[e++] = String.fromCharCode((f & 15) << 12 | (h & 63) << 6 | k & 63);
      }
    }
  }
  return c.join("");
};
g.f.vs = function(a, c) {
  for (var d = [], e = 0;e < a.length;e++) {
    d.push(a[e] ^ c[e]);
  }
  return d;
};
g.f.m = {};
g.f.m.wb = null;
g.f.m.gd = null;
g.f.m.ac = null;
g.f.m.fd = null;
g.f.m.ah = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
g.f.m.We = g.f.m.ah + "+/=";
g.f.m.Hi = g.f.m.ah + "-_.";
g.f.m.bf = g.userAgent.fg || g.userAgent.sb || g.userAgent.Ab || "function" == typeof g.global.atob;
g.f.m.He = function(a, c) {
  if (!g.M(a)) {
    throw Error("encodeByteArray takes an array as a parameter");
  }
  g.f.m.cc();
  for (var d = c ? g.f.m.ac : g.f.m.wb, e = [], f = 0;f < a.length;f += 3) {
    var h = a[f], k = f + 1 < a.length, m = k ? a[f + 1] : 0, n = f + 2 < a.length, p = n ? a[f + 2] : 0, q = h >> 2, h = (h & 3) << 4 | m >> 4, m = (m & 15) << 2 | p >> 6, p = p & 63;
    n || (p = 64, k || (m = 64));
    e.push(d[q], d[h], d[m], d[p]);
  }
  return e.join("");
};
g.f.m.dq = function(a, c) {
  return g.f.m.bf && !c ? g.global.btoa(a) : g.f.m.He(g.f.Ni(a), c);
};
g.f.m.$p = function(a, c) {
  return g.f.m.bf && !c ? g.global.atob(a) : g.f.Oi(g.f.m.Pi(a, c));
};
g.f.m.Pi = function(a, c) {
  g.f.m.cc();
  for (var d = c ? g.f.m.fd : g.f.m.gd, e = [], f = 0;f < a.length;) {
    var h = d[a.charAt(f++)], k = f < a.length ? d[a.charAt(f)] : 0;
    ++f;
    var m = f < a.length ? d[a.charAt(f)] : 64;
    ++f;
    var n = f < a.length ? d[a.charAt(f)] : 64;
    ++f;
    if (null == h || null == k || null == m || null == n) {
      throw Error();
    }
    e.push(h << 2 | k >> 4);
    64 != m && (e.push(k << 4 & 240 | m >> 2), 64 != n && e.push(m << 6 & 192 | n));
  }
  return e;
};
g.f.m.cc = function() {
  if (!g.f.m.wb) {
    g.f.m.wb = {};
    g.f.m.gd = {};
    g.f.m.ac = {};
    g.f.m.fd = {};
    for (var a = 0;a < g.f.m.We.length;a++) {
      g.f.m.wb[a] = g.f.m.We.charAt(a), g.f.m.gd[g.f.m.wb[a]] = a, g.f.m.ac[a] = g.f.m.Hi.charAt(a), g.f.m.fd[g.f.m.ac[a]] = a;
    }
  }
};
g.f.Ye = function() {
  this.Ka = -1;
};
g.f.hb = function() {
  g.f.Ye.call(this);
  this.Ka = 64;
  this.I = [];
  this.dd = [];
  this.Ii = [];
  this.ic = [];
  this.ic[0] = 128;
  for (var a = 1;a < this.Ka;++a) {
    this.ic[a] = 0;
  }
  this.bc = this.fb = 0;
  this.reset();
};
g.za(g.f.hb, g.f.Ye);
g.f.hb.prototype.reset = function() {
  this.I[0] = 1732584193;
  this.I[1] = 4023233417;
  this.I[2] = 2562383102;
  this.I[3] = 271733878;
  this.I[4] = 3285377520;
  this.bc = this.fb = 0;
};
g.f.hb.prototype.qc = function(a, c) {
  c || (c = 0);
  var d = this.Ii;
  if (g.isString(a)) {
    for (var e = 0;16 > e;e++) {
      d[e] = a.charCodeAt(c) << 24 | a.charCodeAt(c + 1) << 16 | a.charCodeAt(c + 2) << 8 | a.charCodeAt(c + 3), c += 4;
    }
  } else {
    for (e = 0;16 > e;e++) {
      d[e] = a[c] << 24 | a[c + 1] << 16 | a[c + 2] << 8 | a[c + 3], c += 4;
    }
  }
  for (e = 16;80 > e;e++) {
    var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
    d[e] = (f << 1 | f >>> 31) & 4294967295;
  }
  for (var h = this.I[0], k = this.I[1], m = this.I[2], n = this.I[3], p = this.I[4], q, e = 0;80 > e;e++) {
    40 > e ? 20 > e ? (f = n ^ k & (m ^ n), q = 1518500249) : (f = k ^ m ^ n, q = 1859775393) : 60 > e ? (f = k & m | n & (k | m), q = 2400959708) : (f = k ^ m ^ n, q = 3395469782), f = (h << 5 | h >>> 27) + f + p + q + d[e] & 4294967295, p = n, n = m, m = (k << 30 | k >>> 2) & 4294967295, k = h, h = f;
  }
  this.I[0] = this.I[0] + h & 4294967295;
  this.I[1] = this.I[1] + k & 4294967295;
  this.I[2] = this.I[2] + m & 4294967295;
  this.I[3] = this.I[3] + n & 4294967295;
  this.I[4] = this.I[4] + p & 4294967295;
};
g.f.hb.prototype.update = function(a, c) {
  g.ia(c) || (c = a.length);
  for (var d = c - this.Ka, e = 0, f = this.dd, h = this.fb;e < c;) {
    if (0 == h) {
      for (;e <= d;) {
        this.qc(a, e), e += this.Ka;
      }
    }
    if (g.isString(a)) {
      for (;e < c;) {
        if (f[h] = a.charCodeAt(e), ++h, ++e, h == this.Ka) {
          this.qc(f);
          h = 0;
          break;
        }
      }
    } else {
      for (;e < c;) {
        if (f[h] = a[e], ++h, ++e, h == this.Ka) {
          this.qc(f);
          h = 0;
          break;
        }
      }
    }
  }
  this.fb = h;
  this.bc += c;
};
g.f.hb.prototype.ji = function() {
  var a = [], c = 8 * this.bc;
  56 > this.fb ? this.update(this.ic, 56 - this.fb) : this.update(this.ic, this.Ka - (this.fb - 56));
  for (var d = this.Ka - 1;56 <= d;d--) {
    this.dd[d] = c & 255, c /= 256;
  }
  this.qc(this.dd);
  for (d = c = 0;5 > d;d++) {
    for (var e = 24;0 <= e;e -= 8) {
      a[c] = this.I[d] >> e & 255, ++c;
    }
  }
  return a;
};
l.nf = {};
l.nf.Qi = function(a) {
  var c = l.B.Hc().ki(), d = new g.f.hb;
  d.update(a);
  d.update(c);
  return "r" + g.f.m.He(d.ji(), !0);
};
l.fa = function(a, c, d, e, f) {
  this.hd = c;
  this.af = d;
  this.Ze = this.$e = !1;
  this.Ri = f || l.nf.Qi(d);
  new g.g.T;
};
l.fa.Vp = function(a) {
  var c = g.a.find(a.serviceData, function(a) {
    return g.b.jh(a, "id=");
  }), d = a.serviceName.indexOf("._googlecast.");
  if (!c || -1 == d) {
    return null;
  }
  var e = Number(a.serviceHostPort.substring(a.serviceHostPort.indexOf(":") + 1));
  if (isNaN(e) || 0 > e || 65535 < e) {
    return null;
  }
  d = a.serviceName.substring(0, d);
  c = c.substring(3).toLowerCase();
  return new l.fa(a.ipAddress, d, c, e);
};
l.fa.prototype.isLocal = function() {
  return!0;
};
l.fa.prototype.Ac = function() {
  return this.Ri;
};
l.fa.prototype.Ek = function() {
  return this.hd;
};
l.fa.prototype.equals = function(a) {
  return a instanceof l.fa ? this.af == a.af && this.hd == a.hd && this.$e == a.$e && this.ck == a.ck && this.Ze == a.Ze : !1;
};
l.va = {};
l.va.Cq = function(a, c) {
  if (!c.applications || 1 != c.applications.length) {
    return null;
  }
  var d = l.va.Dk(a, c.applications[0]);
  d.receiver.volume = c.volume;
  g.Ha(c.isActiveInput) && (d.receiver.isActiveInput = c.isActiveInput);
  return d;
};
l.va.Dk = function(a, c) {
  var d = l.va.Fj(a), d = new chrome.cast.n(c.sessionId, c.appId, c.displayName, c.appImages, d);
  d.senderApps = c.senderApps;
  d.namespaces = c.namespaces || [];
  d.transportId = c.transportId;
  return d;
};
l.va.Fj = function(a) {
  return new chrome.cast.fa(a.Ac(), a.Ek());
};
l.va.gr = function(a, c) {
  if (a.statusText != c.statusText) {
    return!0;
  }
  for (var d = a.namespaces || [], e = c.namespaces || [], f = 0;f < d.length;f++) {
    if (!e.some(function(a) {
      return a.name == d[f].name;
    })) {
      return!0;
    }
  }
  return a.receiver.volume.level != c.receiver.volume.level || a.receiver.volume.muted != c.receiver.volume.muted || JSON.stringify(a.customData) != JSON.stringify(c.customData) ? !0 : !1;
};
l.va.Cg = function(a) {
  g.isArray(a) ? a.forEach(l.va.Cg) : g.isObject(a) && Object.keys(a).forEach(function(c) {
    g.Ic(a[c]) ? delete a[c] : l.va.Cg(a[c]);
  });
};
l.va.Hq = function(a, c) {
  return a.namespaces.some(function(a) {
    return a.name == c;
  });
};
l.ag = function(a, c) {
  this.type = l.L.ug;
  this.requestId = null;
  this.volume = a;
  this.expectedVolume = c || null;
};
l.O = {};
l.O.Kp = function(a) {
  return!a || !g.isString(a.sessionId) || !g.W(a.media) || g.W(a.autoplay) && !g.Ha(a.autoplay) || g.W(a.currentTime) && !g.isNumber(a.currentTime) ? !1 : l.O.Gj(a.media);
};
l.O.Gj = function(a) {
  return!a || !g.isString(a.contentId) || 1E3 < a.contentId.length || !g.object.bb(chrome.cast.media.Kd, a.streamType) || !g.isString(a.contentType) || g.W(a.duration) && !g.isNumber(a.duration) ? !1 : !0;
};
l.O.Bi = function(a) {
  return!!a && g.W(a.sessionId) && g.W(a.namespaceName) && !l.Wa.ok(a.namespaceName);
};
l.O.Ji = function(a) {
  return a && g.isFunction(a.sessionListener) && g.isFunction(a.receiverListener) ? l.O.Oe(a.sessionRequest) : !1;
};
l.O.Ei = function(a) {
  return a ? !g.a.find(a, function(a) {
    return!(a.receiverType == chrome.cast.Sb.CUSTOM && g.W(a.friendlyName) && 0 == a.capabilities.length && g.Ic(a.volume));
  }) : !1;
};
l.O.Oe = function(a) {
  return!a || !g.W(a.appId) || g.W(a.dialRequest) && (!g.isString(a.dialRequest.appName) || g.W(a.dialRequest.launchParameter) && !g.isString(a.dialRequest.launchParameter)) ? !1 : !0;
};
l.O.si = function(a) {
  return a && g.W(a.volume) && l.O.$f(a.volume) ? g.W(a.expectedVolume) ? l.O.$f(a.expectedVolume) : !0 : !1;
};
l.O.$f = function(a) {
  return a ? g.W(a.level) ? g.isNumber(a.level) && 0 <= a.level && 1 >= a.level : g.Ha(a.muted) : !1;
};
l.O.Jp = function(a) {
  return!!a && g.Ha(a.doLaunch) && (!g.W(a.launchParameter) || g.isString(a.launchParameter));
};
l.S = function(a, c, d) {
  this.Ff = a;
  this.ld = c;
  this.nd = g.isNumber(d) ? d : 0;
  this.pc = !1;
  this.zb = null;
};
l.S.nj = 432E5;
l.S.prototype.sk = function() {
  return this.pc;
};
l.S.prototype.qa = function() {
  this.pc = !0;
  this.ld = this.Ff = null;
  this.zb && (clearTimeout(this.zb), this.zb = null);
};
l.S.Tf = function() {
};
l.S.prototype.Af = function() {
  var a = this.Ff;
  this.qa();
  return a || l.S.Tf;
};
l.S.prototype.zf = function() {
  var a = this.ld;
  this.qa();
  return a || l.S.Tf;
};
l.S.prototype.Re = function(a, c) {
  if (!this.pc && !this.zb) {
    var d = function() {
      if (!this.pc) {
        a && a();
        var d = this.ld;
        this.qa();
        if (0 < this.nd) {
          var f = new chrome.cast.J(chrome.cast.pa.TIMEOUT);
          c && (f.description = c);
          d(f);
        }
      }
    }.bind(this);
    this.zb = setTimeout(d, 0 < this.nd ? this.nd : l.S.nj);
  }
};
l.pn = {};
l.sa = function(a, c, d, e, f, h) {
  this.type = a;
  this.message = c;
  this.seqNum = d || null;
  this.clientId = e || null;
  this.appOrigin = null;
  this.timeoutMillis = g.isNumber(f) ? f : 0;
  this.receiverId = h || null;
  this.receiverList = null;
};
l.A = {kf:"iframe_init_result", Wi:"fail_to_connect_to_extension", Mm:"client_reconnect", Qb:"v2_message", je:"app_message", uj:"client_init", Cj:"log_message", ii:"request_session", Lm:"client_disconnect", Di:"set_custom_receivers", vf:"custom_dial_launch_response", sj:"set_receiver_display_status", Yi:"receiver_availability", Xi:"receiver_action", Te:"new_session", Ue:"update_session", Zi:"remove_session", Am:"app_message_success", Qo:"set_receiver_volume_success", No:"set_custom_receivers_success", 
ERROR:"error", Vi:"custom_dial_launch_request", Po:"set_receiver_display_status_success"};
l.nc = function() {
  this.q = {};
};
b = l.nc.prototype;
b.add = function(a, c) {
  var d = this.q[a];
  if (d) {
    return-1 == d.indexOf(c) && d.push(c), !1;
  }
  this.q[a] = [c];
  return!0;
};
b.remove = function(a, c) {
  var d = this.q[a];
  if (!d) {
    return!1;
  }
  var e = d.indexOf(c);
  if (-1 == e) {
    return!1;
  }
  if (1 == d.length) {
    return delete this.q[a], !0;
  }
  d.splice(e, 1);
  return!1;
};
b.pg = function(a) {
  if (!(a in this.q)) {
    return!1;
  }
  delete this.q[a];
  return!0;
};
b.Yj = function(a) {
  var c = !1;
  Object.keys(this.q).forEach(function(d) {
    0 == d.indexOf(a) && (delete this.q[d], c = !0);
  }, this);
  return c;
};
b.get = function(a) {
  return this.q[a] || [];
};
b.contains = function(a, c) {
  return-1 != this.get(a).indexOf(c);
};
l.wo = function() {
  this.type = l.L.rd;
  this.requestId = null;
  this.status = [];
  this.customData = null;
  this.sessionId = "";
};
chrome.cast.Cb = function(a, c) {
  this.Pk = a;
  this.Kf = c;
  this.Rf = null;
};
chrome.cast.Cb.prototype.ud = function() {
  window.addEventListener("message", this.km.bind(this), !1);
};
chrome.cast.Cb.prototype.Uk = function(a) {
  this.Rf = a;
};
chrome.cast.Cb.prototype.km = function(a) {
  a.source != window && a.origin == this.Kf && (a = a.data, a.type == l.A.kf && (this.Lj = !a.message), this.Rf(a));
};
chrome.cast.Cb.prototype.pd = function(a) {
  this.Lj && this.Pk.contentWindow.postMessage(a, this.Kf);
};
l.of = function() {
  this.ib = {};
  this.uc = {};
};
b = l.of.prototype;
b.Zj = function(a) {
  var c = this.ib[a];
  return c ? (c.media.forEach(function(a) {
    delete this.uc[this.td(a)];
  }, this), delete this.ib[a], !0) : !1;
};
b.Sj = function(a) {
  delete this.uc[this.td(a)];
  var c = this.ib[a.sessionId];
  c && (a = c.media.indexOf(a), -1 != a && c.media.splice(a, 1));
};
b.Yk = function(a) {
  if (a.sessionId == chrome.cast.n.xf) {
    return a;
  }
  var c = this.ib[a.sessionId];
  if (c) {
    return c.statusText = a.statusText, c.namespaces = a.namespaces || [], c.customData = a.customData, c.receiver.volume = a.receiver.volume, c;
  }
  var c = new chrome.cast.n(a.sessionId, a.appId, a.displayName, a.appImages, a.receiver), d;
  for (d in a) {
    "media" == d ? c.media = a.media.map(function(a) {
      a = this.uf(a);
      a.ed = !1;
      a.fc = !0;
      return a;
    }.bind(this)) : a.hasOwnProperty(d) && (c[d] = a[d]);
  }
  return this.ib[a.sessionId] = c;
};
b.uf = function(a) {
  var c = this.td(a), d = this.uc[c];
  d || (d = new chrome.cast.media.s(a.sessionId, a.mediaSessionId), this.uc[c] = d, (c = this.ib[a.sessionId]) && c.media.push(d));
  for (var e in a) {
    a.hasOwnProperty(e) && ("volume" == e ? (d.volume.level = a.volume.level, d.volume.muted = a.volume.muted) : d[e] = a[e]);
  }
  "currentTime" in a && (d.qd = g.now());
  return d;
};
b.td = function(a) {
  return a.sessionId + "#" + a.mediaSessionId;
};
chrome.cast.wa = function(a) {
  this.Ui = 1E3 * Math.floor(1E5 * Math.random());
  this.$b = a;
  this.gb = {};
  this.Pb = !1;
  this.cb = this.$ = this.Sc = null;
  this.kc = new l.nc;
  this.ec = new l.nc;
  this.xb = new l.nc;
  this.oc = [];
  this.dc = new l.of(this.jc);
  this.ie = !1;
};
b = chrome.cast.wa.prototype;
b.ud = function() {
  this.$b.Uk(this.Tk.bind(this));
};
b.rk = function() {
  return "a" + this.Ui++;
};
b.$i = function(a) {
  var c = a.seqNum;
  if (!c) {
    return!1;
  }
  var d = this.gb[c];
  if (d) {
    var e = a.message;
    a.type == l.A.ERROR ? d.zf()(a.message) : d.Af()(e);
    delete this.gb[c];
  }
  return!!d;
};
b.aj = function(a) {
  switch(a.type) {
    case l.A.Te:
    ;
    case l.A.Ue:
      a.message = this.xj(a.message);
      break;
    case l.A.Qb:
      a = a.message, a.type == l.L.rd && a.status && (a.status = a.status.map(this.wj.bind(this)));
  }
};
b.xj = function(a) {
  return this.dc.Yk(a);
};
b.Tk = function(a) {
  this.aj(a);
  if (!this.$i(a)) {
    switch(a.type) {
      case l.A.kf:
        this.bj(a);
        break;
      case l.A.Yi:
        this.hj(a);
        break;
      case l.A.Xi:
        this.gj(a);
        break;
      case l.A.Wi:
        this.ie = !0;
        break;
      case l.A.Te:
        this.fj(a);
        break;
      case l.A.Ue:
        this.jj(a);
        break;
      case l.A.Zi:
        this.ij(a);
        break;
      case l.A.je:
        this.dj(a.message);
        break;
      case l.A.Qb:
        this.ej(a);
        break;
      case l.A.Vi:
        this.cj(a);
    }
  }
};
b.cj = function(a) {
  var c = a.message;
  this.$ && this.$.customDialLaunchCallback && this.$.customDialLaunchCallback(c).then(g.bind(function(c) {
    this.$b.pd(new l.sa(l.A.vf, c, a.seqNum));
  }, this), g.bind(function() {
    this.$b.pd(new l.sa(l.A.vf, null, a.seqNum));
  }, this));
};
b.ej = function(a) {
  switch(a.message.type) {
    case l.L.rd:
      this.pk(a.message);
  }
};
b.pk = function(a) {
  a.status.forEach(this.Pg.bind(this));
};
b.fj = function(a) {
  this.$ && this.$.sessionListener(a.message);
};
b.jj = function(a) {
  (a = a.message) && this.xb.get(a.sessionId).forEach(function(a) {
    a(!0);
  });
};
b.ij = function(a) {
  a = a.message;
  this.dc.Zj(a) && (this.kc.Yj(a + "#"), this.ec.pg(a), this.xb.get(a).forEach(function(a) {
    a(!1);
  }), this.xb.pg(a));
};
b.dj = function(a) {
  this.Vl(a.sessionId, a.namespaceName).forEach(function(c) {
    c(a.namespaceName, a.message);
  });
};
b.hj = function(a) {
  if (this.$) {
    var c = a.message;
    a.receiverList ? this.$.receiverListener.apply(null, [c, a.receiverList]) : this.$.receiverListener(c);
  }
};
b.gj = function(a) {
  this.oc.forEach(function(c) {
    c(a.message.receiver, a.message.receiverAction);
  }, this);
};
b.bj = function(a) {
  (a = a.message) ? (this.Sc = a, this.cb && this.cb.zf()(a)) : (this.Pb = !0, this.Xe(), this.cb && this.cb.Af()(void 0));
};
b.Id = function(a, c, d) {
  this.Qa(d) && (a = a || [], l.O.Ei(a) ? this.Ia(new l.sa(l.A.Di, a), new l.S(c, d)) : d(new chrome.cast.J(chrome.cast.pa.INVALID_PARAMETER)));
};
chrome.cast.wa.prototype.setReceiverVolume = function(a, c, d, e) {
  this.Qa(e) && (l.O.si(c) ? (c.sessionId = a, this.Ia(new l.sa(l.A.Qb, c, null, null, chrome.cast.timeout.setReceiverVolume), new l.S(d, e, chrome.cast.timeout.setReceiverVolume))) : e(new chrome.cast.J(chrome.cast.pa.INVALID_PARAMETER)));
};
b = chrome.cast.wa.prototype;
b.wf = function(a, c, d, e) {
  this.Qa(d) && this.Ia(new l.sa(l.A.Qb, a, null, null, e), new l.S(c, d, e));
};
b.Fd = function(a) {
  this.Qa(g.Dj) && this.Ia(new l.sa(l.A.Cj, a));
};
b.Vf = function(a, c, d, e, f, h) {
  null != a && (d.mediaSessionId = a.mediaSessionId, d.sessionId = a.sessionId);
  d.requestId = null;
  d.type = c;
  this.wf(d, function(a) {
    a.status && 1 == a.status.length ? e(a.status[0]) : f(new chrome.cast.J(chrome.cast.pa.SESSION_ERROR));
  }, f, h);
};
b.lk = function(a, c, d) {
  this.Vf(null, l.L.Zf, a, function(a) {
    a.fc = !0;
    a.ed = !0;
    c(a);
  }.bind(this), d, chrome.cast.media.timeout.load);
};
b.yb = function(a, c, d, e, f, h) {
  this.Vf(a, c, d, function(a) {
    this.Pg(a);
    e();
  }.bind(this), f, h);
};
b.$j = function(a, c, d) {
  this.Qa(d) && (l.O.Bi(a) ? this.Ia(new l.sa(l.A.je, a, null, null, chrome.cast.timeout.sendCustomMessage), new l.S(c, d, chrome.cast.timeout.sendCustomMessage)) : d(new chrome.cast.J(chrome.cast.pa.INVALID_PARAMETER)));
};
b.Xe = function() {
  this.$ && this.Pb && this.Ia(new l.sa(l.A.uj, new l.tj(this.$)));
};
b.Ia = function(a, c) {
  var d = this.rk();
  a.seqNum = d;
  if (this.gb[d] && !this.gb[d].sk()) {
    throw "Try to send a request with the existing seqNum: " + a.seqNum;
  }
  c && (this.gb[d] = c, c.Re(function() {
    delete this.gb[d];
  }.bind(this)));
  this.$b.pd(a);
};
b.Eb = function(a, c, d) {
  l.O.Ji(a) ? this.Sc ? d(this.Sc) : this.$ ? c() : (this.$ = a, this.Pb ? (this.Xe(), c()) : (this.cb = new l.S(c, d, 5E3), this.cb.Re())) : d(new chrome.cast.J(chrome.cast.pa.INVALID_PARAMETER));
};
chrome.cast.wa.prototype.requestSession = function(a, c, d, e) {
  this.Qa(c) && (d && !l.O.Oe(d) ? c(new chrome.cast.J(chrome.cast.pa.INVALID_PARAMETER)) : (!d && this.$ && (d = this.$.sessionRequest), this.Ia(new l.sa(l.A.ii, d, null, null, d.requestSessionTimeout, e), new l.S(a, c, 0))));
};
chrome.cast.wa.tk = new chrome.cast.J(chrome.cast.pa.API_NOT_INITIALIZED);
chrome.cast.wa.uk = new chrome.cast.J(chrome.cast.pa.EXTENSION_MISSING);
b = chrome.cast.wa.prototype;
b.Qa = function(a) {
  return this.Pb ? this.ie ? (a(chrome.cast.wa.uk), !1) : !0 : (a(chrome.cast.wa.tk), !1);
};
b.Pd = function(a, c) {
  return a + "#" + c;
};
b.fk = function(a, c, d) {
  this.kc.add(this.Pd(a, c), d);
};
b.ik = function(a, c, d) {
  this.kc.remove(this.Pd(a, c), d);
};
b.Vl = function(a, c) {
  return this.kc.get(this.Pd(a, c));
};
b.Dd = function(a, c) {
  this.ec.add(a, c);
};
b.Gd = function(a, c) {
  this.ec.remove(a, c);
};
b.gk = function(a, c) {
  -1 == a.Db.indexOf(c) && a.Db.push(c);
};
b.jk = function(a, c) {
  var d = a.Db.indexOf(c);
  -1 != d && a.Db.splice(d, 1);
};
b.Pg = function(a) {
  if (a.fc) {
    var c = a.playerState != chrome.cast.media.Bb.IDLE;
    a.Db.forEach(function(a) {
      a(c);
    });
    c || this.dc.Sj(a);
  } else {
    a.fc = !0, a.ed || this.ec.get(a.sessionId).forEach(function(c) {
      c(a);
    });
  }
};
b.wj = function(a) {
  return this.dc.uf(a);
};
b.hk = function(a, c) {
  this.xb.add(a, c);
};
b.kk = function(a, c) {
  this.xb.remove(a, c);
};
b.Ed = function(a) {
  this.oc.push(a);
};
b.Hd = function(a) {
  a = this.oc.indexOf(a);
  0 <= a && this.oc.splice(a, 1);
};
b.Jd = function(a, c, d) {
  this.Qa(d) && this.Ia(new l.sa(l.A.sj, a), new l.S(c, d));
};
chrome.cast.Yl = !1;
g.j("chrome.cast.isAvailable", chrome.cast.Yl);
chrome.cast.v = null;
chrome.cast.Eb = function(a, c, d) {
  chrome.cast.v.Eb(a, c, d);
};
g.j("chrome.cast.initialize", chrome.cast.Eb);
chrome.cast.requestSession = function(a, c, d, e) {
  chrome.cast.v.requestSession(a, c, d, e);
};
g.j("chrome.cast.requestSession", chrome.cast.requestSession);
chrome.cast.Ed = function(a) {
  chrome.cast.v.Ed(a);
};
g.j("chrome.cast.addReceiverActionListener", chrome.cast.Ed);
chrome.cast.Hd = function(a) {
  chrome.cast.v.Hd(a);
};
g.j("chrome.cast.removeReceiverActionListener", chrome.cast.Hd);
chrome.cast.Fd = function(a) {
  chrome.cast.v.Fd(a);
};
g.j("chrome.cast.logMessage", chrome.cast.Fd);
chrome.cast.Id = function(a, c, d) {
  chrome.cast.v.Id(a, c, d);
};
g.j("chrome.cast.setCustomReceivers", chrome.cast.Id);
chrome.cast.Jd = function(a, c, d) {
  chrome.cast.v.Jd(a, c, d);
};
g.j("chrome.cast.setReceiverDisplayStatus", chrome.cast.Jd);
chrome.cast.n.prototype.pm = function(a, c, d) {
  chrome.cast.v.setReceiverVolume(this.sessionId, new l.ag(new chrome.cast.rc(a, null), this.receiver.volume), c, d);
};
g.u(chrome.cast.n.prototype, "setReceiverVolumeLevel", chrome.cast.n.prototype.pm);
chrome.cast.n.prototype.om = function(a, c, d) {
  chrome.cast.v.setReceiverVolume(this.sessionId, new l.ag(new chrome.cast.rc(null, a), this.receiver.volume), c, d);
};
g.u(chrome.cast.n.prototype, "setReceiverMuted", chrome.cast.n.prototype.om);
chrome.cast.n.prototype.stop = function(a, c) {
  chrome.cast.v.wf(new l.Wj(this.sessionId), a, c, chrome.cast.timeout.stopSession);
};
g.u(chrome.cast.n.prototype, "stop", chrome.cast.n.prototype.stop);
chrome.cast.n.prototype.sendMessage = function(a, c, d, e) {
  chrome.cast.v.$j(new l.Xj(this.sessionId, a, c), d, e);
};
g.u(chrome.cast.n.prototype, "sendMessage", chrome.cast.n.prototype.sendMessage);
chrome.cast.n.prototype.Vd = function(a) {
  chrome.cast.v.hk(this.sessionId, a);
};
g.u(chrome.cast.n.prototype, "addUpdateListener", chrome.cast.n.prototype.Vd);
chrome.cast.n.prototype.Zd = function(a) {
  chrome.cast.v.kk(this.sessionId, a);
};
g.u(chrome.cast.n.prototype, "removeUpdateListener", chrome.cast.n.prototype.Zd);
chrome.cast.n.prototype.Ol = function(a, c) {
  chrome.cast.v.fk(this.sessionId, a, c);
};
g.u(chrome.cast.n.prototype, "addMessageListener", chrome.cast.n.prototype.Ol);
chrome.cast.n.prototype.lm = function(a, c) {
  chrome.cast.v.ik(this.sessionId, a, c);
};
g.u(chrome.cast.n.prototype, "removeMessageListener", chrome.cast.n.prototype.lm);
chrome.cast.n.prototype.Dd = function(a) {
  chrome.cast.v.Dd(this.sessionId, a);
};
g.u(chrome.cast.n.prototype, "addMediaListener", chrome.cast.n.prototype.Dd);
chrome.cast.n.prototype.Gd = function(a) {
  chrome.cast.v.Gd(this.sessionId, a);
};
g.u(chrome.cast.n.prototype, "removeMediaListener", chrome.cast.n.prototype.Gd);
chrome.cast.n.prototype.dm = function(a, c, d) {
  a.sessionId = this.sessionId;
  chrome.cast.v.lk(a, c, d);
};
g.u(chrome.cast.n.prototype, "loadMedia", chrome.cast.n.prototype.dm);
chrome.cast.media.s.prototype.play = function(a, c, d) {
  a || (a = new chrome.cast.media.Ef);
  chrome.cast.v.yb(this, l.L.Aj, a, c, d, chrome.cast.media.timeout.play);
};
g.u(chrome.cast.media.s.prototype, "play", chrome.cast.media.s.prototype.play);
chrome.cast.media.s.prototype.pause = function(a, c, d) {
  a || (a = new chrome.cast.media.Df);
  chrome.cast.v.yb(this, l.L.zj, a, c, d, chrome.cast.media.timeout.pause);
};
g.u(chrome.cast.media.s.prototype, "pause", chrome.cast.media.s.prototype.pause);
chrome.cast.media.s.prototype.seek = function(a, c, d) {
  chrome.cast.v.yb(this, l.L.Ej, a, c, d, chrome.cast.media.timeout.seek);
};
g.u(chrome.cast.media.s.prototype, "seek", chrome.cast.media.s.prototype.seek);
chrome.cast.media.s.prototype.stop = function(a, c, d) {
  a || (a = new chrome.cast.media.Cf);
  chrome.cast.v.yb(this, l.L.Bf, a, c, d, chrome.cast.media.timeout.stop);
};
g.u(chrome.cast.media.s.prototype, "stop", chrome.cast.media.s.prototype.stop);
chrome.cast.media.s.prototype.sc = function(a, c, d) {
  chrome.cast.v.yb(this, l.L.yf, a, c, d, chrome.cast.media.timeout.sc);
};
g.u(chrome.cast.media.s.prototype, "setVolume", chrome.cast.media.s.prototype.sc);
chrome.cast.media.s.prototype.qm = function(a) {
  return-1 < this.supportedMediaCommands.indexOf(a);
};
g.u(chrome.cast.media.s.prototype, "supportsCommand", chrome.cast.media.s.prototype.qm);
chrome.cast.media.s.prototype.Wl = function() {
  if (this.playerState == chrome.cast.media.Bb.PLAYING && 0 <= this.qd) {
    var a = (g.now() - this.qd) / 1E3, a = this.currentTime + this.playbackRate * a;
    this.media && null != this.media.duration && a > this.media.duration && (a = this.media.duration);
    0 > a && (a = 0);
    return a;
  }
  return this.currentTime;
};
g.u(chrome.cast.media.s.prototype, "getEstimatedTime", chrome.cast.media.s.prototype.Wl);
chrome.cast.media.s.prototype.Vd = function(a) {
  chrome.cast.v.gk(this, a);
};
g.u(chrome.cast.media.s.prototype, "addUpdateListener", chrome.cast.media.s.prototype.Vd);
chrome.cast.media.s.prototype.Zd = function(a) {
  chrome.cast.v.jk(this, a);
};
g.u(chrome.cast.media.s.prototype, "removeUpdateListener", chrome.cast.media.s.prototype.Zd);
chrome.cast.$d = function() {
  if (!chrome.cast.Gf && (chrome.cast.Gf = !0, chrome.cast.extensionId)) {
    var a = "chrome-extension://" + chrome.cast.extensionId, c = a + "/api_iframe.html", d = document.createElement("iframe");
    d.src = c + "?appOrigin=" + window.location.origin;
    d.setAttribute("style", "display:none");
    document.body.appendChild(d);
    a = new chrome.cast.Cb(d, a);
    a.ud();
    chrome.cast.v = new chrome.cast.wa(a);
    chrome.cast.v.ud();
    chrome.cast.isAvailable = !0;
    (a = window.__onGCastApiAvailable) && "function" == typeof a && a(!0);
  }
};
chrome.cast.Gf = !1;
"complete" == document.readyState ? chrome.cast.$d() : (window.addEventListener("load", chrome.cast.$d, !1), window.addEventListener("DOMContentLoaded", chrome.cast.$d, !1));
})();
