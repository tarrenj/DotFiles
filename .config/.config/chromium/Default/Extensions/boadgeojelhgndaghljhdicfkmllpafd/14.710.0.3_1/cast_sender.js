(function() {var b, chrome = window.chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var g = g || {};
g.global = this;
g.ja = function(a) {
  return void 0 !== a;
};
g.Zd = function(a, c, d) {
  a = a.split(".");
  d = d || g.global;
  a[0] in d || !d.execScript || d.execScript("var " + a[0]);
  for (var e;a.length && (e = a.shift());) {
    !a.length && g.ja(c) ? d[e] = c : d = d[e] ? d[e] : d[e] = {};
  }
};
g.xq = function(a, c) {
  g.Zd(a, c);
};
g.Ya = !0;
g.Qn = "en";
g.ih = !0;
g.Cd = !1;
g.Wr = function(a) {
  g.Zd(a);
};
g.gs = function(a) {
  if (!g.Ya) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  }
};
g.Iq = function() {
};
g.kl = function(a, c) {
  for (var d = a.split("."), e = c || g.global, f;f = d.shift();) {
    if (g.Y(e[f])) {
      e = e[f];
    } else {
      return null;
    }
  }
  return e;
};
g.ar = function(a, c) {
  var d = c || g.global, e;
  for (e in a) {
    d[e] = a[e];
  }
};
g.Ep = function(a, c, d) {
  if (g.Dg) {
    var e;
    a = a.replace(/\\/g, "/");
    for (var f = g.kb, h = 0;e = c[h];h++) {
      f.Fb[e] = a, a in f.Qd || (f.Qd[a] = {}), f.Qd[a][e] = !0;
    }
    for (e = 0;c = d[e];e++) {
      a in f.requires || (f.requires[a] = {}), f.requires[a][c] = !0;
    }
  }
};
g.Ks = !1;
g.vn = !0;
g.require = function() {
};
g.Ac = "";
g.xf = function() {
};
g.gr = function(a) {
  return a;
};
g.Cp = function() {
  throw Error("unimplemented abstract method");
};
g.im = function(a) {
  a.Kc = function() {
    if (a.Gb) {
      return a.Gb;
    }
    g.Ya && (g.Cg[g.Cg.length] = a);
    return a.Gb = new a;
  };
};
g.Cg = [];
g.Dg = !1;
g.Dg && (g.dk = {}, g.kb = {Qd:{}, Fb:{}, requires:{}, hg:{}, Bc:{}}, g.Lg = function() {
  var a = g.global.document;
  return "undefined" != typeof a && "write" in a;
}, g.mm = function() {
  if (g.global.Zk) {
    g.Ac = g.global.Zk;
  } else {
    if (g.Lg()) {
      for (var a = g.global.document.getElementsByTagName("script"), c = a.length - 1;0 <= c;--c) {
        var d = a[c].src, e = d.lastIndexOf("?"), e = -1 == e ? d.length : e;
        if ("base.js" == d.substr(e - 7, 7)) {
          g.Ac = d.substr(0, e - 7);
          break;
        }
      }
    }
  }
}, g.fg = function(a) {
  var c = g.global.Pm || g.Rk;
  !g.kb.Bc[a] && c(a) && (g.kb.Bc[a] = !0);
}, g.Rk = function(a) {
  if (g.Lg()) {
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
}, g.Ps = function() {
  function a(f) {
    if (!(f in e.Bc)) {
      if (!(f in e.hg) && (e.hg[f] = !0, f in e.requires)) {
        for (var l in e.requires[f]) {
          if (!g.Nm(l)) {
            if (l in e.Fb) {
              a(e.Fb[l]);
            } else {
              throw Error("Undefined nameToPath for " + l);
            }
          }
        }
      }
      f in d || (d[f] = !0, c.push(f));
    }
  }
  var c = [], d = {}, e = g.kb, f;
  for (f in g.dk) {
    e.Bc[f] || a(f);
  }
  for (f = 0;f < c.length;f++) {
    if (c[f]) {
      g.fg(g.Ac + c[f]);
    } else {
      throw Error("Undefined script input");
    }
  }
}, g.Tq = function(a) {
  return a in g.kb.Fb ? g.kb.Fb[a] : null;
}, g.mm(), g.global.gn || g.fg(g.Ac + "deps.js"));
g.ea = function(a) {
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
g.Y = function(a) {
  return null != a;
};
g.isArray = function(a) {
  return "array" == g.ea(a);
};
g.M = function(a) {
  var c = g.ea(a);
  return "array" == c || "object" == c && "number" == typeof a.length;
};
g.nr = function(a) {
  return g.isObject(a) && "function" == typeof a.getFullYear;
};
g.isString = function(a) {
  return "string" == typeof a;
};
g.Ja = function(a) {
  return "boolean" == typeof a;
};
g.isNumber = function(a) {
  return "number" == typeof a;
};
g.isFunction = function(a) {
  return "function" == g.ea(a);
};
g.isObject = function(a) {
  var c = typeof a;
  return "object" == c && null != a || "function" == c;
};
g.$d = function(a) {
  return a[g.Jb] || (a[g.Jb] = ++g.dl);
};
g.dr = function(a) {
  return!!a[g.Jb];
};
g.Fm = function(a) {
  "removeAttribute" in a && a.removeAttribute(g.Jb);
  try {
    delete a[g.Jb];
  } catch (c) {
  }
};
g.Jb = "closure_uid_" + (1E9 * Math.random() >>> 0);
g.dl = 0;
g.Oq = g.$d;
g.Yr = g.Fm;
g.Pk = function(a) {
  var c = g.ea(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = g.Pk(a[d]);
    }
    return c;
  }
  return a;
};
g.jl = function(a, c, d) {
  return a.call.apply(a.bind, arguments);
};
g.il = function(a, c, d) {
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
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? g.bind = g.jl : g.bind = g.il;
  return g.bind.apply(null, arguments);
};
g.Ub = function(a, c) {
  var d = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = d.slice();
    c.push.apply(c, arguments);
    return a.apply(this, c);
  };
};
g.lh = function(a, c) {
  for (var d in c) {
    a[d] = c[d];
  }
};
g.now = g.ih && Date.now || function() {
  return+new Date;
};
g.Zq = function(a) {
  if (g.global.execScript) {
    g.global.execScript(a, "JavaScript");
  } else {
    if (g.global.eval) {
      if (null == g.Gc && (g.global.eval("var _et_ = 1;"), "undefined" != typeof g.global._et_ ? (delete g.global._et_, g.Gc = !0) : g.Gc = !1), g.Gc) {
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
g.Gc = null;
g.Mq = function(a, c) {
  var d = function(a) {
    return g.Ug[a] || a;
  }, e = function(a) {
    a = a.split("-");
    for (var c = [], e = 0;e < a.length;e++) {
      c.push(d(a[e]));
    }
    return c.join("-");
  }, e = g.Ug ? "BY_WHOLE" == g.gl ? d : e : function(a) {
    return a;
  };
  return c ? a + "-" + e(c) : e(a);
};
g.cs = function(a, c) {
  g.Ug = a;
  g.gl = c;
};
g.Rq = function(a, c) {
  c && (a = a.replace(/\{\$([^}]+)}/g, function(a, e) {
    return e in c ? c[e] : a;
  }));
  return a;
};
g.Sq = function(a) {
  return a;
};
g.g = function(a, c, d) {
  g.Zd(a, c, d);
};
g.s = function(a, c, d) {
  a[c] = d;
};
g.Aa = function(a, c) {
  function d() {
  }
  d.prototype = c.prototype;
  a.Dc = c.prototype;
  a.prototype = new d;
  a.prototype.constructor = a;
  a.el = function(a, d, h) {
    var l = Array.prototype.slice.call(arguments, 2);
    return c.prototype[d].apply(a, l);
  };
};
g.el = function(a, c, d) {
  var e = arguments.callee.caller;
  if (g.Cd || g.Ya && !e) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (e.Dc) {
    return e.Dc.constructor.apply(a, Array.prototype.slice.call(arguments, 1));
  }
  for (var f = Array.prototype.slice.call(arguments, 2), h = !1, l = a.constructor;l;l = l.Dc && l.Dc.constructor) {
    if (l.prototype[c] === e) {
      h = !0;
    } else {
      if (h) {
        return l.prototype[c].apply(a, f);
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
g.El = !0;
g.El && (Function.prototype.bind = Function.prototype.bind || function(a, c) {
  if (1 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 1);
    d.unshift(this, a);
    return g.bind.apply(null, d);
  }
  return g.bind(this, a);
}, Function.prototype.Ub = function(a) {
  var c = Array.prototype.slice.call(arguments);
  c.unshift(this, null);
  return g.bind.apply(null, c);
}, Function.prototype.Aa = function(a) {
  g.Aa(this, a);
}, Function.prototype.lh = function(a) {
  g.lh(this.prototype, a);
});
g.ya = function(a, c) {
  var d = c.constructor, e = c.vk;
  d && d != Object.prototype.constructor || (d = function() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  d = g.ya.uk(d, a);
  a && g.Aa(d, a);
  delete c.constructor;
  delete c.vk;
  g.ya.vg(d.prototype, c);
  null != e && (e instanceof Function ? e(d) : g.ya.vg(d, e));
  return d;
};
g.ya.Sk = g.Ya;
g.ya.uk = function(a, c) {
  if (g.ya.Sk && Object.seal instanceof Function) {
    if (c && c.prototype && c.prototype[g.Tk]) {
      return a;
    }
    var d = function() {
      var c = a.apply(this, arguments) || this;
      this.constructor === d && Object.seal(c);
      return c;
    };
    return d;
  }
  return a;
};
g.ya.Ig = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
g.ya.vg = function(a, c) {
  for (var d in c) {
    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
  for (var e = 0;e < g.ya.Ig.length;e++) {
    d = g.ya.Ig[e], Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
};
g.vs = function() {
};
g.Tk = "goog_defineClass_legacy_unsealable";
chrome.cast.Rg = {TAB_AND_ORIGIN_SCOPED:"tab_and_origin_scoped", ORIGIN_SCOPED:"origin_scoped", PAGE_SCOPED:"page_scoped"};
g.g("chrome.cast.AutoJoinPolicy", chrome.cast.Rg);
chrome.cast.Sg = {CREATE_SESSION:"create_session", CAST_THIS_TAB:"cast_this_tab"};
g.g("chrome.cast.DefaultActionPolicy", chrome.cast.Sg);
chrome.cast.Vd = {VIDEO_OUT:"video_out", AUDIO_OUT:"audio_out", VIDEO_IN:"video_in", AUDIO_IN:"audio_in"};
g.g("chrome.cast.Capability", chrome.cast.Vd);
chrome.cast.ta = {CANCEL:"cancel", TIMEOUT:"timeout", API_NOT_INITIALIZED:"api_not_initialized", INVALID_PARAMETER:"invalid_parameter", EXTENSION_NOT_COMPATIBLE:"extension_not_compatible", EXTENSION_MISSING:"extension_missing", RECEIVER_UNAVAILABLE:"receiver_unavailable", SESSION_ERROR:"session_error", CHANNEL_ERROR:"channel_error", LOAD_MEDIA_FAILED:"load_media_failed"};
g.g("chrome.cast.ErrorCode", chrome.cast.ta);
chrome.cast.Nl = {AVAILABLE:"available", UNAVAILABLE:"unavailable"};
g.g("chrome.cast.ReceiverAvailability", chrome.cast.Nl);
chrome.cast.Ul = {CHROME:"chrome", IOS:"ios", ANDROID:"android"};
g.g("chrome.cast.SenderPlatform", chrome.cast.Ul);
chrome.cast.tb = {CAST:"cast", DIAL:"dial", HANGOUT:"hangout", CUSTOM:"custom"};
g.g("chrome.cast.ReceiverType", chrome.cast.tb);
chrome.cast.sl = {RUNNING:"running", STOPPED:"stopped", ERROR:"error"};
g.g("chrome.cast.DialAppState", chrome.cast.sl);
chrome.cast.Ml = {CAST:"cast", STOP:"stop"};
g.g("chrome.cast.ReceiverAction", chrome.cast.Ml);
chrome.cast.VERSION = [1, 2];
g.g("chrome.cast.VERSION", chrome.cast.VERSION);
chrome.cast.Error = function(a, c, d) {
  this.code = a;
  this.description = c || null;
  this.details = d || null;
};
g.g("chrome.cast.Error", chrome.cast.Error);
chrome.cast.Tl = function(a) {
  this.platform = a;
  this.packageId = this.url = null;
};
g.g("chrome.cast.SenderApplication", chrome.cast.Tl);
chrome.cast.Image = function(a) {
  this.url = a;
  this.width = this.height = null;
};
g.g("chrome.cast.Image", chrome.cast.Image);
chrome.cast.vc = function(a, c) {
  this.level = g.ja(a) ? a : null;
  this.muted = g.ja(c) ? c : null;
};
g.g("chrome.cast.Volume", chrome.cast.vc);
var k = {I:{Ln:"LAUNCH", zg:"STOP", yg:"SET_VOLUME", xg:"GET_STATUS", Hk:"RECEIVER_STATUS", xp:"CONNECT", yp:"CLOSE", Cn:"GET_APP_AVAILABILITY", Zf:"LOAD", Ij:"PAUSE", Nj:"SEEK", Jj:"PLAY", Af:"STOP_MEDIA", wf:"MEDIA_GET_STATUS", yf:"MEDIA_SET_VOLUME", Hj:"EDIT_TRACKS_INFO", Fn:"INVALID_PLAYER_STATE", Pn:"LOAD_FAILED", On:"LOAD_CANCELLED", Gn:"INVALID_REQUEST", sd:"MEDIA_STATUS", Nn:"LAUNCH_ERROR", Xo:"PING", Zo:"PONG"}, Wd:{}};
k.Wd[k.I.Af] = k.I.zg;
k.Wd[k.I.yf] = k.I.yg;
k.Wd[k.I.wf] = k.I.xg;
k.gk = function(a, c, d) {
  this.sessionId = a;
  this.namespaceName = c;
  this.message = d;
};
k.fk = function(a) {
  this.type = k.I.zg;
  this.requestId = null;
  this.sessionId = a || null;
};
chrome.cast.media.Og = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
g.g("chrome.cast.media.MediaCommand", chrome.cast.media.Og);
chrome.cast.media.pa = {GENERIC:0, TV_SHOW:1, MOVIE:2, MUSIC_TRACK:3, PHOTO:4};
g.g("chrome.cast.media.MetadataType", chrome.cast.media.pa);
chrome.cast.media.Bb = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
g.g("chrome.cast.media.PlayerState", chrome.cast.media.Bb);
chrome.cast.media.Ql = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
g.g("chrome.cast.media.ResumeState", chrome.cast.media.Ql);
chrome.cast.media.Md = {BUFFERED:"buffered", LIVE:"live", OTHER:"other"};
g.g("chrome.cast.media.StreamType", chrome.cast.media.Md);
chrome.cast.media.Bl = {CANCELLED:"CANCELLED", INTERRUPTED:"INTERRUPTED", FINISHED:"FINISHED", ERROR:"ERROR"};
g.g("chrome.cast.media.IdleReason", chrome.cast.media.Bl);
chrome.cast.media.cm = {TEXT:"TEXT", AUDIO:"AUDIO", VIDEO:"VIDEO"};
g.g("chrome.cast.media.TrackType", chrome.cast.media.cm);
chrome.cast.media.$l = {SUBTITLES:"SUBTITLES", CAPTIONS:"CAPTIONS", DESCRIPTIONS:"DESCRIPTIONS", CHAPTERS:"CHAPTERS", METADATA:"METADATA"};
g.g("chrome.cast.media.TextTrackType", chrome.cast.media.$l);
chrome.cast.media.Wl = {NONE:"NONE", OUTLINE:"OUTLINE", DROP_SHADOW:"DROP_SHADOW", RAISED:"RAISED", DEPRESSED:"DEPRESSED"};
g.g("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.Wl);
chrome.cast.media.am = {NONE:"NONE", NORMAL:"NORMAL", ROUNDED_CORNERS:"ROUNDED_CORNERS"};
g.g("chrome.cast.media.TextTrackWindowType", chrome.cast.media.am);
chrome.cast.media.Xl = {SANS_SERIF:"SANS_SERIF", MONOSPACED_SANS_SERIF:"MONOSPACED_SANS_SERIF", SERIF:"SERIF", MONOSPACED_SERIF:"MONOSPACED_SERIF", CASUAL:"CASUAL", CURSIVE:"CURSIVE", SMALL_CAPITALS:"SMALL_CAPITALS"};
g.g("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.Xl);
chrome.cast.media.Yl = {NORMAL:"NORMAL", BOLD:"BOLD", BOLD_ITALIC:"BOLD_ITALIC", ITALIC:"ITALIC"};
g.g("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.Yl);
chrome.cast.media.vf = function() {
  this.customData = null;
};
g.g("chrome.cast.media.GetStatusRequest", chrome.cast.media.vf);
chrome.cast.media.Df = function() {
  this.customData = null;
};
g.g("chrome.cast.media.PauseRequest", chrome.cast.media.Df);
chrome.cast.media.Ef = function() {
  this.customData = null;
};
g.g("chrome.cast.media.PlayRequest", chrome.cast.media.Ef);
chrome.cast.media.Sl = function() {
  this.customData = this.resumeState = this.currentTime = null;
};
g.g("chrome.cast.media.SeekRequest", chrome.cast.media.Sl);
chrome.cast.media.Bf = function() {
  this.customData = null;
};
g.g("chrome.cast.media.StopRequest", chrome.cast.media.Bf);
chrome.cast.media.fm = function(a) {
  this.volume = a;
  this.customData = null;
};
g.g("chrome.cast.media.VolumeRequest", chrome.cast.media.fm);
chrome.cast.media.Dl = function(a) {
  this.type = k.I.Zf;
  this.sessionId = this.requestId = null;
  this.media = a;
  this.activeTrackIds = null;
  this.autoplay = !0;
  this.customData = this.currentTime = null;
};
g.g("chrome.cast.media.LoadRequest", chrome.cast.media.Dl);
chrome.cast.media.wl = function(a, c) {
  this.requestId = null;
  this.activeTrackIds = a || null;
  this.textTrackStyle = c || null;
};
g.g("chrome.cast.media.EditTracksInfoRequest", chrome.cast.media.wl);
chrome.cast.media.zl = function() {
  this.metadataType = this.type = chrome.cast.media.pa.GENERIC;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = null;
};
g.g("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.zl);
chrome.cast.media.Jl = function() {
  this.metadataType = this.type = chrome.cast.media.pa.MOVIE;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = null;
};
g.g("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.Jl);
chrome.cast.media.dm = function() {
  this.metadataType = this.type = chrome.cast.media.pa.TV_SHOW;
  this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = null;
};
g.g("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.dm);
chrome.cast.media.Kl = function() {
  this.metadataType = this.type = chrome.cast.media.pa.MUSIC_TRACK;
  this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = null;
};
g.g("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.Kl);
chrome.cast.media.Ll = function() {
  this.metadataType = this.type = chrome.cast.media.pa.PHOTO;
  this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = null;
};
g.g("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.Ll);
chrome.cast.media.Il = function(a, c) {
  this.contentId = a;
  this.streamType = chrome.cast.media.Md.BUFFERED;
  this.contentType = c;
  this.customData = this.textTrackStyle = this.tracks = this.duration = this.metadata = null;
};
g.g("chrome.cast.media.MediaInfo", chrome.cast.media.Il);
chrome.cast.media.q = function(a, c) {
  this.sessionId = a;
  this.mediaSessionId = c;
  this.media = null;
  this.playbackRate = 1;
  this.playerState = chrome.cast.media.Bb.IDLE;
  this.currentTime = 0;
  this.pd = -1;
  this.supportedMediaCommands = [];
  this.volume = new chrome.cast.vc;
  this.customData = this.activeTrackIds = this.idleReason = null;
  this.ec = this.gd = !1;
  this.Eb = [];
};
g.g("chrome.cast.media.Media", chrome.cast.media.q);
chrome.cast.media.ql = "CC1AD845";
g.g("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.ql);
chrome.cast.media.timeout = {};
g.g("chrome.cast.media.timeout", chrome.cast.media.timeout);
chrome.cast.media.timeout.load = 0;
g.s(chrome.cast.media.timeout, "load", chrome.cast.media.timeout.load);
chrome.cast.media.timeout.rc = 0;
g.s(chrome.cast.media.timeout, "getStatus", chrome.cast.media.timeout.rc);
chrome.cast.media.timeout.play = 0;
g.s(chrome.cast.media.timeout, "play", chrome.cast.media.timeout.play);
chrome.cast.media.timeout.pause = 0;
g.s(chrome.cast.media.timeout, "pause", chrome.cast.media.timeout.pause);
chrome.cast.media.timeout.seek = 0;
g.s(chrome.cast.media.timeout, "seek", chrome.cast.media.timeout.seek);
chrome.cast.media.timeout.stop = 0;
g.s(chrome.cast.media.timeout, "stop", chrome.cast.media.timeout.stop);
chrome.cast.media.timeout.uc = 0;
g.s(chrome.cast.media.timeout, "setVolume", chrome.cast.media.timeout.uc);
chrome.cast.media.timeout.wc = 0;
g.s(chrome.cast.media.timeout, "editTracksInfo", chrome.cast.media.timeout.wc);
chrome.cast.media.bm = function(a, c) {
  this.trackId = a;
  this.trackContentType = this.trackContentId = null;
  this.type = c;
  this.customData = this.subtype = this.language = this.name = null;
};
g.g("chrome.cast.media.Track", chrome.cast.media.bm);
chrome.cast.media.Zl = function() {
  this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.fontScale = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = null;
};
g.g("chrome.cast.media.TextTrackStyle", chrome.cast.media.Zl);
chrome.cast.ml = function(a, c, d, e, f) {
  this.sessionRequest = a;
  this.sessionListener = c;
  this.receiverListener = d;
  this.autoJoinPolicy = e || chrome.cast.Rg.TAB_AND_ORIGIN_SCOPED;
  this.defaultActionPolicy = f || chrome.cast.Sg.CREATE_SESSION;
  this.customDialLaunchCallback = null;
};
g.g("chrome.cast.ApiConfig", chrome.cast.ml);
chrome.cast.vl = function(a, c) {
  this.appName = a;
  this.launchParameter = c || null;
};
g.g("chrome.cast.DialRequest", chrome.cast.vl);
chrome.cast.tl = function(a, c, d) {
  this.receiver = a;
  this.appState = c;
  this.extraData = d || null;
};
g.g("chrome.cast.DialLaunchData", chrome.cast.tl);
chrome.cast.ul = function(a, c) {
  this.doLaunch = a;
  this.launchParameter = c || null;
};
g.g("chrome.cast.DialLaunchResponse", chrome.cast.ul);
chrome.cast.Vl = function(a, c, d) {
  this.appId = a;
  this.capabilities = c || [chrome.cast.Vd.VIDEO_OUT, chrome.cast.Vd.AUDIO_OUT];
  this.dialRequest = null;
  this.requestSessionTimeout = d || chrome.cast.timeout.requestSession;
  this.language = null;
};
g.g("chrome.cast.SessionRequest", chrome.cast.Vl);
chrome.cast.Fa = function(a, c, d, e) {
  this.label = a;
  this.friendlyName = c;
  this.capabilities = d || [];
  this.volume = e || null;
  this.receiverType = chrome.cast.tb.CAST;
  this.displayStatus = this.isActiveInput = null;
};
g.g("chrome.cast.Receiver", chrome.cast.Fa);
chrome.cast.Ol = function(a, c) {
  this.statusText = a;
  this.appImages = c;
};
g.g("chrome.cast.ReceiverDisplayStatus", chrome.cast.Ol);
chrome.cast.o = function(a, c, d, e, f) {
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
g.g("chrome.cast.Session", chrome.cast.o);
chrome.cast.o.Ff = "custom_receiver_session_id";
g.s(chrome.cast.o, "CUSTOM_RECEIVER_SESSION_ID", chrome.cast.o.Ff);
chrome.cast.timeout = {};
g.g("chrome.cast.timeout", chrome.cast.timeout);
chrome.cast.timeout.requestSession = 1E4;
chrome.cast.timeout.stopSession = 3E3;
chrome.cast.timeout.setReceiverVolume = 3E3;
chrome.cast.timeout.sendCustomMessage = 3E3;
k.Dj = function(a) {
  this.sessionRequest = a.sessionRequest;
  this.autoJoinPolicy = a.autoJoinPolicy;
  this.defaultActionPolicy = a.defaultActionPolicy;
  this.useCustomDialLaunch = !!a.customDialLaunchCallback;
};
k.Zm = function() {
  this.displayName = this.appId = this.sessionId = this.transportId = "";
  this.statusText = null;
  this.appImages = [];
  this.senderApps = [];
  this.namespaces = [];
};
k.fp = function() {
  this.type = k.I.xg;
  this.requestId = null;
};
k.gp = function() {
  this.type = k.I.Hk;
  this.status = this.requestId = null;
};
k.ep = function() {
  this.channelUrl = this.volume = this.applications = null;
  this.isActiveInput = void 0;
};
k.Hn = function() {
};
g.debug = {};
g.debug.Error = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, g.debug.Error);
  } else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
};
g.Aa(g.debug.Error, Error);
g.debug.Error.prototype.name = "CustomError";
g.rf = {};
g.rf.tj = {sj:1, Tm:2, TEXT:3, cn:4, yn:5, xn:6, $o:7, jn:8, rn:9, tn:10, sn:11, Uo:12};
g.b = {};
g.b.Sc = !1;
g.b.di = {ci:"\u00a0"};
g.b.Dh = function(a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
g.b.Aq = function(a, c) {
  var d = a.length - c.length;
  return 0 <= d && a.indexOf(c, d) == d;
};
g.b.bq = function(a, c) {
  return 0 == g.b.Fe(c, a.substr(0, c.length));
};
g.b.$p = function(a, c) {
  return 0 == g.b.Fe(c, a.substr(a.length - c.length, c.length));
};
g.b.aq = function(a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
g.b.li = function(a, c) {
  for (var d = a.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1);f.length && 1 < d.length;) {
    e += d.shift() + f.shift();
  }
  return e + d.join("%s");
};
g.b.jq = function(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
g.b.X = function(a) {
  return/^[\s\xa0]*$/.test(a);
};
g.b.pr = function(a) {
  return g.b.X(g.b.Uh(a));
};
g.b.lr = function(a) {
  return!/[^\t\n\r ]/.test(a);
};
g.b.ir = function(a) {
  return!/[^a-zA-Z]/.test(a);
};
g.b.xr = function(a) {
  return!/[^0-9]/.test(a);
};
g.b.jr = function(a) {
  return!/[^a-zA-Z0-9]/.test(a);
};
g.b.Cr = function(a) {
  return " " == a;
};
g.b.Er = function(a) {
  return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a;
};
g.b.ts = function(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ");
};
g.b.Zp = function(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n");
};
g.b.Qr = function(a) {
  return a.replace(/\xa0|\s/g, " ");
};
g.b.Pr = function(a) {
  return a.replace(/\xa0|[ \t]+/g, " ");
};
g.b.iq = function(a) {
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
g.b.Fe = function(a, c) {
  var d = String(a).toLowerCase(), e = String(c).toLowerCase();
  return d < e ? -1 : d == e ? 0 : 1;
};
g.b.He = /(\.\d+)|(\d+)|(\D+)/g;
g.b.Sr = function(a, c) {
  if (a == c) {
    return 0;
  }
  if (!a) {
    return-1;
  }
  if (!c) {
    return 1;
  }
  for (var d = a.toLowerCase().match(g.b.He), e = c.toLowerCase().match(g.b.He), f = Math.min(d.length, e.length), h = 0;h < f;h++) {
    var l = d[h], m = e[h];
    if (l != m) {
      return d = parseInt(l, 10), !isNaN(d) && (e = parseInt(m, 10), !isNaN(e) && d - e) ? d - e : l < m ? -1 : 1;
    }
  }
  return d.length != e.length ? d.length - e.length : a < c ? -1 : 1;
};
g.b.Js = function(a) {
  return encodeURIComponent(String(a));
};
g.b.Is = function(a) {
  return decodeURIComponent(a.replace(/\+/g, " "));
};
g.b.ki = function(a, c) {
  return a.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>");
};
g.b.fb = function(a, c) {
  if (c) {
    a = a.replace(g.b.me, "&amp;").replace(g.b.pe, "&lt;").replace(g.b.oe, "&gt;").replace(g.b.re, "&quot;").replace(g.b.se, "&#39;").replace(g.b.qe, "&#0;"), g.b.Sc && (a = a.replace(g.b.ne, "&#101;"));
  } else {
    if (!g.b.Bh.test(a)) {
      return a;
    }
    -1 != a.indexOf("&") && (a = a.replace(g.b.me, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(g.b.pe, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(g.b.oe, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(g.b.re, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(g.b.se, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(g.b.qe, "&#0;"));
    g.b.Sc && -1 != a.indexOf("e") && (a = a.replace(g.b.ne, "&#101;"));
  }
  return a;
};
g.b.me = /&/g;
g.b.pe = /</g;
g.b.oe = />/g;
g.b.re = /"/g;
g.b.se = /'/g;
g.b.qe = /\x00/g;
g.b.ne = /e/g;
g.b.Bh = g.b.Sc ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
g.b.Wc = function(a) {
  return g.b.contains(a, "&") ? "document" in g.global ? g.b.Ee(a) : g.b.bi(a) : a;
};
g.b.Es = function(a, c) {
  return g.b.contains(a, "&") ? g.b.Ee(a, c) : a;
};
g.b.Ee = function(a, c) {
  var d = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, e;
  e = c ? c.createElement("div") : g.global.document.createElement("div");
  return a.replace(g.b.gi, function(a, c) {
    var l = d[a];
    if (l) {
      return l;
    }
    if ("#" == c.charAt(0)) {
      var m = Number("0" + c.substr(1));
      isNaN(m) || (l = String.fromCharCode(m));
    }
    l || (e.innerHTML = a + " ", l = e.firstChild.nodeValue.slice(0, -1));
    return d[a] = l;
  });
};
g.b.bi = function(a) {
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
g.b.gi = /&([^;\s<&]+);?/g;
g.b.Ms = function(a, c) {
  return g.b.ki(a.replace(/  /g, " &#160;"), c);
};
g.b.Vr = function(a) {
  return a.replace(/(^|[\n ]) /g, "$1" + g.b.di.ci);
};
g.b.us = function(a, c) {
  for (var d = c.length, e = 0;e < d;e++) {
    var f = 1 == d ? c : c.charAt(e);
    if (a.charAt(0) == f && a.charAt(a.length - 1) == f) {
      return a.substring(1, a.length - 1);
    }
  }
  return a;
};
g.b.truncate = function(a, c, d) {
  d && (a = g.b.Wc(a));
  a.length > c && (a = a.substring(0, c - 3) + "...");
  d && (a = g.b.fb(a));
  return a;
};
g.b.Ds = function(a, c, d, e) {
  d && (a = g.b.Wc(a));
  if (e && a.length > c) {
    e > c && (e = c), a = a.substring(0, c - e) + "..." + a.substring(a.length - e);
  } else {
    if (a.length > c) {
      e = Math.floor(c / 2);
      var f = a.length - e;
      a = a.substring(0, e + c % 2) + "..." + a.substring(f);
    }
  }
  d && (a = g.b.fb(a));
  return a;
};
g.b.Vc = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
g.b.Zb = {"'":"\\'"};
g.b.quote = function(a) {
  a = String(a);
  if (a.quote) {
    return a.quote();
  }
  for (var c = ['"'], d = 0;d < a.length;d++) {
    var e = a.charAt(d), f = e.charCodeAt(0);
    c[d + 1] = g.b.Vc[e] || (31 < f && 127 > f ? e : g.b.De(e));
  }
  c.push('"');
  return c.join("");
};
g.b.Cq = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    c[d] = g.b.De(a.charAt(d));
  }
  return c.join("");
};
g.b.De = function(a) {
  if (a in g.b.Zb) {
    return g.b.Zb[a];
  }
  if (a in g.b.Vc) {
    return g.b.Zb[a] = g.b.Vc[a];
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
g.b.zs = function(a) {
  for (var c = {}, d = 0;d < a.length;d++) {
    c[a.charAt(d)] = !0;
  }
  return c;
};
g.b.contains = function(a, c) {
  return-1 != a.indexOf(c);
};
g.b.ph = function(a, c) {
  return g.b.contains(a.toLowerCase(), c.toLowerCase());
};
g.b.qq = function(a, c) {
  return a && c ? a.split(c).length - 1 : 0;
};
g.b.Sb = function(a, c, d) {
  var e = a;
  0 <= c && c < a.length && 0 < d && (e = a.substr(0, c) + a.substr(c + d, a.length - c - d));
  return e;
};
g.b.remove = function(a, c) {
  var d = new RegExp(g.b.bd(c), "");
  return a.replace(d, "");
};
g.b.removeAll = function(a, c) {
  var d = new RegExp(g.b.bd(c), "g");
  return a.replace(d, "");
};
g.b.bd = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
g.b.repeat = function(a, c) {
  return Array(c + 1).join(a);
};
g.b.Ur = function(a, c, d) {
  a = g.ja(d) ? a.toFixed(d) : String(a);
  d = a.indexOf(".");
  -1 == d && (d = a.length);
  return g.b.repeat("0", Math.max(0, c - d)) + a;
};
g.b.Uh = function(a) {
  return null == a ? "" : String(a);
};
g.b.Wp = function(a) {
  return Array.prototype.join.call(arguments, "");
};
g.b.rh = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.now()).toString(36);
};
g.b.rb = function(a, c) {
  for (var d = 0, e = g.b.trim(String(a)).split("."), f = g.b.trim(String(c)).split("."), h = Math.max(e.length, f.length), l = 0;0 == d && l < h;l++) {
    var m = e[l] || "", n = f[l] || "", p = RegExp("(\\d*)(\\D*)", "g"), q = RegExp("(\\d*)(\\D*)", "g");
    do {
      var r = p.exec(m) || ["", "", ""], s = q.exec(n) || ["", "", ""];
      if (0 == r[0].length && 0 == s[0].length) {
        break;
      }
      d = g.b.cd(0 == r[1].length ? 0 : parseInt(r[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || g.b.cd(0 == r[2].length, 0 == s[2].length) || g.b.cd(r[2], s[2]);
    } while (0 == d);
  }
  return d;
};
g.b.cd = function(a, c) {
  return a < c ? -1 : a > c ? 1 : 0;
};
g.b.fi = 4294967296;
g.b.er = function(a) {
  for (var c = 0, d = 0;d < a.length;++d) {
    c = 31 * c + a.charCodeAt(d), c %= g.b.fi;
  }
  return c;
};
g.b.mi = 2147483648 * Math.random() | 0;
g.b.tq = function() {
  return "goog_" + g.b.mi++;
};
g.b.As = function(a) {
  var c = Number(a);
  return 0 == c && g.b.X(a) ? NaN : c;
};
g.b.vr = function(a) {
  return/^[a-z]+([A-Z][a-z]*)*$/.test(a);
};
g.b.Fr = function(a) {
  return/^([A-Z][a-z]*)+$/.test(a);
};
g.b.ys = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, d) {
    return d.toUpperCase();
  });
};
g.b.Bs = function(a) {
  return String(a).replace(/([A-Z])/g, "-$1").toLowerCase();
};
g.b.Cs = function(a, c) {
  var d = g.isString(c) ? g.b.bd(c) : "\\s";
  return a.replace(new RegExp("(^" + (d ? "|[" + d + "]+" : "") + ")([a-z])", "g"), function(a, c, d) {
    return c + d.toUpperCase();
  });
};
g.b.parseInt = function(a) {
  isFinite(a) && (a = String(a));
  return g.isString(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
};
g.b.ns = function(a, c, d) {
  a = a.split(c);
  for (var e = [];0 < d && a.length;) {
    e.push(a.shift()), d--;
  }
  a.length && e.push(a.join(c));
  return e;
};
g.k = {};
g.k.ma = g.Ya;
g.k.tc = function(a, c) {
  c.unshift(a);
  g.debug.Error.call(this, g.b.li.apply(null, c));
  c.shift();
};
g.Aa(g.k.tc, g.debug.Error);
g.k.tc.prototype.name = "AssertionError";
g.k.pl = function(a) {
  throw a;
};
g.k.td = g.k.pl;
g.k.Da = function(a, c, d, e) {
  var f = "Assertion failed";
  if (d) {
    var f = f + (": " + d), h = e
  } else {
    a && (f += ": " + a, h = c);
  }
  a = new g.k.tc("" + f, h || []);
  g.k.td(a);
};
g.k.ds = function(a) {
  g.k.ma && (g.k.td = a);
};
g.k.assert = function(a, c, d) {
  g.k.ma && !a && g.k.Da("", null, c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.k.Nc = function(a, c) {
  g.k.ma && g.k.td(new g.k.tc("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)));
};
g.k.Pp = function(a, c, d) {
  g.k.ma && !g.isNumber(a) && g.k.Da("Expected number but got %s: %s.", [g.ea(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.k.Rp = function(a, c, d) {
  g.k.ma && !g.isString(a) && g.k.Da("Expected string but got %s: %s.", [g.ea(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.k.Np = function(a, c, d) {
  g.k.ma && !g.isFunction(a) && g.k.Da("Expected function but got %s: %s.", [g.ea(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.k.Qp = function(a, c, d) {
  g.k.ma && !g.isObject(a) && g.k.Da("Expected object but got %s: %s.", [g.ea(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.k.Kp = function(a, c, d) {
  g.k.ma && !g.isArray(a) && g.k.Da("Expected array but got %s: %s.", [g.ea(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.k.Lp = function(a, c, d) {
  g.k.ma && !g.Ja(a) && g.k.Da("Expected boolean but got %s: %s.", [g.ea(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.k.Mp = function(a, c, d) {
  !g.k.ma || g.isObject(a) && a.nodeType == g.rf.tj.sj || g.k.Da("Expected Element but got %s: %s.", [g.ea(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.k.Op = function(a, c, d, e) {
  !g.k.ma || a instanceof c || g.k.Da("instanceof check failed.", null, d, Array.prototype.slice.call(arguments, 3));
  return a;
};
g.k.ei = function() {
  for (var a in Object.prototype) {
    g.k.Nc(a + " should not be enumerable in Object.prototype.");
  }
};
g.a = {};
g.Ha = g.ih;
g.a.Ga = !1;
g.a.fe = function(a) {
  return a[a.length - 1];
};
g.a.Gr = g.a.fe;
g.a.u = Array.prototype;
g.a.indexOf = g.Ha && (g.a.Ga || g.a.u.indexOf) ? function(a, c, d) {
  return g.a.u.indexOf.call(a, c, d);
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
g.a.lastIndexOf = g.Ha && (g.a.Ga || g.a.u.lastIndexOf) ? function(a, c, d) {
  return g.a.u.lastIndexOf.call(a, c, null == d ? a.length - 1 : d);
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
g.a.forEach = g.Ha && (g.a.Ga || g.a.u.forEach) ? function(a, c, d) {
  g.a.u.forEach.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    h in f && c.call(d, f[h], h, a);
  }
};
g.a.Xh = function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, e = e - 1;0 <= e;--e) {
    e in f && c.call(d, f[e], e, a);
  }
};
g.a.filter = g.Ha && (g.a.Ga || g.a.u.filter) ? function(a, c, d) {
  return g.a.u.filter.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = [], h = 0, l = g.isString(a) ? a.split("") : a, m = 0;m < e;m++) {
    if (m in l) {
      var n = l[m];
      c.call(d, n, m, a) && (f[h++] = n);
    }
  }
  return f;
};
g.a.map = g.Ha && (g.a.Ga || g.a.u.map) ? function(a, c, d) {
  return g.a.u.map.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = Array(e), h = g.isString(a) ? a.split("") : a, l = 0;l < e;l++) {
    l in h && (f[l] = c.call(d, h[l], l, a));
  }
  return f;
};
g.a.reduce = g.Ha && (g.a.Ga || g.a.u.reduce) ? function(a, c, d, e) {
  e && (c = g.bind(c, e));
  return g.a.u.reduce.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  g.a.forEach(a, function(d, l) {
    f = c.call(e, f, d, l, a);
  });
  return f;
};
g.a.reduceRight = g.Ha && (g.a.Ga || g.a.u.reduceRight) ? function(a, c, d, e) {
  e && (c = g.bind(c, e));
  return g.a.u.reduceRight.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  g.a.Xh(a, function(d, l) {
    f = c.call(e, f, d, l, a);
  });
  return f;
};
g.a.some = g.Ha && (g.a.Ga || g.a.u.some) ? function(a, c, d) {
  return g.a.u.some.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in f && c.call(d, f[h], h, a)) {
      return!0;
    }
  }
  return!1;
};
g.a.every = g.Ha && (g.a.Ga || g.a.u.every) ? function(a, c, d) {
  return g.a.u.every.call(a, c, d);
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
  g.a.forEach(a, function(a, h, l) {
    c.call(d, a, h, l) && ++e;
  }, d);
  return e;
};
g.a.find = function(a, c, d) {
  c = g.a.ye(a, c, d);
  return 0 > c ? null : g.isString(a) ? a.charAt(c) : a[c];
};
g.a.ye = function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in f && c.call(d, f[h], h, a)) {
      return h;
    }
  }
  return-1;
};
g.a.Fq = function(a, c, d) {
  c = g.a.Vh(a, c, d);
  return 0 > c ? null : g.isString(a) ? a.charAt(c) : a[c];
};
g.a.Vh = function(a, c, d) {
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
g.a.X = function(a) {
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
g.a.insert = function(a, c) {
  g.a.contains(a, c) || a.push(c);
};
g.a.ze = function(a, c, d) {
  g.a.splice(a, d, 0, c);
};
g.a.hr = function(a, c, d) {
  g.Ub(g.a.splice, a, d, 0).apply(null, c);
};
g.a.insertBefore = function(a, c, d) {
  var e;
  2 == arguments.length || 0 > (e = g.a.indexOf(a, d)) ? a.push(c) : g.a.ze(a, c, e);
};
g.a.remove = function(a, c) {
  var d = g.a.indexOf(a, c), e;
  (e = 0 <= d) && g.a.Sb(a, d);
  return e;
};
g.a.Sb = function(a, c) {
  return 1 == g.a.u.splice.call(a, c, 1).length;
};
g.a.Zr = function(a, c, d) {
  c = g.a.ye(a, c, d);
  return 0 <= c ? (g.a.Sb(a, c), !0) : !1;
};
g.a.concat = function(a) {
  return g.a.u.concat.apply(g.a.u, arguments);
};
g.a.join = function(a) {
  return g.a.u.concat.apply(g.a.u, arguments);
};
g.a.Ia = function(a) {
  var c = a.length;
  if (0 < c) {
    for (var d = Array(c), e = 0;e < c;e++) {
      d[e] = a[e];
    }
    return d;
  }
  return[];
};
g.a.clone = g.a.Ia;
g.a.extend = function(a, c) {
  for (var d = 1;d < arguments.length;d++) {
    var e = arguments[d], f;
    if (g.isArray(e) || (f = g.M(e)) && Object.prototype.hasOwnProperty.call(e, "callee")) {
      a.push.apply(a, e);
    } else {
      if (f) {
        for (var h = a.length, l = e.length, m = 0;m < l;m++) {
          a[h + m] = e[m];
        }
      } else {
        a.push(e);
      }
    }
  }
};
g.a.splice = function(a, c, d, e) {
  return g.a.u.splice.apply(a, g.a.slice(arguments, 1));
};
g.a.slice = function(a, c, d) {
  return 2 >= arguments.length ? g.a.u.slice.call(a, c) : g.a.u.slice.call(a, c, d);
};
g.a.Zh = function(a, c, d) {
  c = c || a;
  d = d || function() {
    return g.isObject(l) ? "o" + g.$d(l) : (typeof l).charAt(0) + l;
  };
  for (var e = {}, f = 0, h = 0;h < a.length;) {
    var l = a[h++], m = d(l);
    Object.prototype.hasOwnProperty.call(e, m) || (e[m] = !0, c[f++] = l);
  }
  c.length = f;
};
g.a.ve = function(a, c, d) {
  return g.a.we(a, d || g.a.Ta, !1, c);
};
g.a.Up = function(a, c, d) {
  return g.a.we(a, c, !0, void 0, d);
};
g.a.we = function(a, c, d, e, f) {
  for (var h = 0, l = a.length, m;h < l;) {
    var n = h + l >> 1, p;
    p = d ? c.call(f, a[n], n, a) : c(e, a[n]);
    0 < p ? h = n + 1 : (l = n, m = !p);
  }
  return m ? h : ~h;
};
g.a.sort = function(a, c) {
  a.sort(c || g.a.Ta);
};
g.a.os = function(a, c) {
  for (var d = 0;d < a.length;d++) {
    a[d] = {index:d, value:a[d]};
  }
  var e = c || g.a.Ta;
  g.a.sort(a, function(a, c) {
    return e(a.value, c.value) || a.index - c.index;
  });
  for (d = 0;d < a.length;d++) {
    a[d] = a[d].value;
  }
};
g.a.ms = function(a, c, d) {
  var e = d || g.a.Ta;
  g.a.sort(a, function(a, d) {
    return e(a[c], d[c]);
  });
};
g.a.de = function(a, c, d) {
  c = c || g.a.Ta;
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
  d = d || g.a.Ah;
  for (var f = 0;f < e;f++) {
    if (!d(a[f], c[f])) {
      return!1;
    }
  }
  return!0;
};
g.a.mq = function(a, c, d) {
  d = d || g.a.Ta;
  for (var e = Math.min(a.length, c.length), f = 0;f < e;f++) {
    var h = d(a[f], c[f]);
    if (0 != h) {
      return h;
    }
  }
  return g.a.Ta(a.length, c.length);
};
g.a.Ta = function(a, c) {
  return a > c ? 1 : a < c ? -1 : 0;
};
g.a.Ah = function(a, c) {
  return a === c;
};
g.a.Sp = function(a, c, d) {
  d = g.a.ve(a, c, d);
  return 0 > d ? (g.a.ze(a, c, -(d + 1)), !0) : !1;
};
g.a.Tp = function(a, c, d) {
  c = g.a.ve(a, c, d);
  return 0 <= c ? g.a.Sb(a, c) : !1;
};
g.a.Vp = function(a, c, d) {
  for (var e = {}, f = 0;f < a.length;f++) {
    var h = a[f], l = c.call(d, h, f, a);
    g.ja(l) && (e[l] || (e[l] = [])).push(h);
  }
  return e;
};
g.a.Km = function(a, c, d) {
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
g.a.Wh = function(a) {
  for (var c = [], d = 0;d < arguments.length;d++) {
    var e = arguments[d];
    g.isArray(e) ? c.push.apply(c, g.a.Wh.apply(null, e)) : c.push(e);
  }
  return c;
};
g.a.rotate = function(a, c) {
  a.length && (c %= a.length, 0 < c ? g.a.u.unshift.apply(a, a.splice(-c, c)) : 0 > c && g.a.u.push.apply(a, a.splice(0, -c)));
  return a;
};
g.a.Nr = function(a, c, d) {
  c = g.a.u.splice.call(a, c, 1);
  g.a.u.splice.call(a, d, 0, c[0]);
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
g.a.js = function(a, c) {
  for (var d = c || Math.random, e = a.length - 1;0 < e;e--) {
    var f = Math.floor(d() * (e + 1)), h = a[e];
    a[e] = a[f];
    a[f] = h;
  }
};
g.f = {};
g.f.pn = function() {
};
g.v = {};
g.v.constant = function(a) {
  return function() {
    return a;
  };
};
g.v.Bn = g.v.constant(!1);
g.v.rp = g.v.constant(!0);
g.v.Vo = g.v.constant(null);
g.v.identity = function(a) {
  return a;
};
g.v.error = function(a) {
  return function() {
    throw Error(a);
  };
};
g.v.Nc = function(a) {
  return function() {
    throw a;
  };
};
g.v.Ir = function(a, c) {
  c = c || 0;
  return function() {
    return a.apply(this, Array.prototype.slice.call(arguments, 0, c));
  };
};
g.v.Rr = function(a) {
  return function() {
    return arguments[a];
  };
};
g.v.Os = function(a, c) {
  return g.v.xk(a, g.v.constant(c));
};
g.v.nq = function(a, c) {
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
g.v.xk = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a, f = 0;f < d;f++) {
      a = c[f].apply(this, arguments);
    }
    return a;
  };
};
g.v.Fp = function(a) {
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
g.v.Tr = function(a) {
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
g.v.ni = function(a) {
  return function() {
    return!a.apply(this, arguments);
  };
};
g.v.create = function(a, c) {
  var d = function() {
  };
  d.prototype = a.prototype;
  d = new d;
  a.apply(d, Array.prototype.slice.call(arguments, 1));
  return d;
};
g.v.wk = !0;
g.v.Yp = function(a) {
  var c = !1, d;
  return function() {
    if (!g.v.wk) {
      return a();
    }
    c || (d = a(), c = !0);
    return d;
  };
};
g.p = {};
g.p.Xr = function(a) {
  return Math.floor(Math.random() * a);
};
g.p.Fs = function(a, c) {
  return a + Math.random() * (c - a);
};
g.p.hq = function(a, c, d) {
  return Math.min(Math.max(a, c), d);
};
g.p.ag = function(a, c) {
  var d = a % c;
  return 0 > d * c ? d + c : d;
};
g.p.Hr = function(a, c, d) {
  return a + d * (c - a);
};
g.p.Or = function(a, c, d) {
  return Math.abs(a - c) <= (d || 1E-6);
};
g.p.yd = function(a) {
  return g.p.ag(a, 360);
};
g.p.ps = function(a) {
  return g.p.ag(a, 2 * Math.PI);
};
g.p.cg = function(a) {
  return a * Math.PI / 180;
};
g.p.Uj = function(a) {
  return 180 * a / Math.PI;
};
g.p.Ip = function(a, c) {
  return c * Math.cos(g.p.cg(a));
};
g.p.Jp = function(a, c) {
  return c * Math.sin(g.p.cg(a));
};
g.p.Gp = function(a, c, d, e) {
  return g.p.yd(g.p.Uj(Math.atan2(e - c, d - a)));
};
g.p.Hp = function(a, c) {
  var d = g.p.yd(c) - g.p.yd(a);
  180 < d ? d -= 360 : -180 >= d && (d = 360 + d);
  return d;
};
g.p.ks = function(a) {
  return 0 == a ? 0 : 0 > a ? -1 : 1;
};
g.p.Kr = function(a, c, d, e) {
  d = d || function(a, c) {
    return a == c;
  };
  e = e || function(c) {
    return a[c];
  };
  for (var f = a.length, h = c.length, l = [], m = 0;m < f + 1;m++) {
    l[m] = [], l[m][0] = 0;
  }
  for (var n = 0;n < h + 1;n++) {
    l[0][n] = 0;
  }
  for (m = 1;m <= f;m++) {
    for (n = 1;n <= h;n++) {
      d(a[m - 1], c[n - 1]) ? l[m][n] = l[m - 1][n - 1] + 1 : l[m][n] = Math.max(l[m - 1][n], l[m][n - 1]);
    }
  }
  for (var p = [], m = f, n = h;0 < m && 0 < n;) {
    d(a[m - 1], c[n - 1]) ? (p.unshift(e(m - 1, n - 1)), m--, n--) : l[m - 1][n] > l[m][n - 1] ? m-- : n--;
  }
  return p;
};
g.p.ke = function(a) {
  return g.a.reduce(arguments, function(a, d) {
    return a + d;
  }, 0);
};
g.p.th = function(a) {
  return g.p.ke.apply(null, arguments) / arguments.length;
};
g.p.bk = function(a) {
  var c = arguments.length;
  if (2 > c) {
    return 0;
  }
  var d = g.p.th.apply(null, arguments);
  return g.p.ke.apply(null, g.a.map(arguments, function(a) {
    return Math.pow(a - d, 2);
  })) / (c - 1);
};
g.p.qs = function(a) {
  return Math.sqrt(g.p.bk.apply(null, arguments));
};
g.p.ur = function(a) {
  return isFinite(a) && 0 == a % 1;
};
g.p.qr = function(a) {
  return isFinite(a) && !isNaN(a);
};
g.p.Jr = function(a) {
  if (0 < a) {
    var c = Math.round(Math.log(a) * Math.LOG10E);
    return c - (parseFloat("1e" + c) > a);
  }
  return 0 == a ? -Infinity : NaN;
};
g.p.as = function(a, c) {
  return Math.floor(a + (c || 2E-15));
};
g.p.$r = function(a, c) {
  return Math.ceil(a - (c || 2E-15));
};
g.c = {};
g.c.R = "StopIteration" in g.global ? g.global.StopIteration : Error("StopIteration");
g.c.A = function() {
};
g.c.A.prototype.next = function() {
  throw g.c.R;
};
g.c.A.prototype.cb = function() {
  return this;
};
g.c.H = function(a) {
  if (a instanceof g.c.A) {
    return a;
  }
  if ("function" == typeof a.cb) {
    return a.cb(!1);
  }
  if (g.M(a)) {
    var c = 0, d = new g.c.A;
    d.next = function() {
      for (;;) {
        if (c >= a.length) {
          throw g.c.R;
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
      if (e !== g.c.R) {
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
      if (f !== g.c.R) {
        throw f;
      }
    }
  }
};
g.c.filter = function(a, c, d) {
  var e = g.c.H(a);
  a = new g.c.A;
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
g.c.Eq = function(a, c, d) {
  return g.c.filter(a, g.v.ni(c), d);
};
g.c.Ob = function(a, c, d) {
  var e = 0, f = a, h = d || 1;
  1 < arguments.length && (e = a, f = c);
  if (0 == h) {
    throw Error("Range step argument must not be zero");
  }
  var l = new g.c.A;
  l.next = function() {
    if (0 < h && e >= f || 0 > h && e <= f) {
      throw g.c.R;
    }
    var a = e;
    e += h;
    return a;
  };
  return l;
};
g.c.join = function(a, c) {
  return g.c.Ia(a).join(c);
};
g.c.map = function(a, c, d) {
  var e = g.c.H(a);
  a = new g.c.A;
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
    if (e !== g.c.R) {
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
    if (e !== g.c.R) {
      throw e;
    }
  }
  return!0;
};
g.c.Bi = function(a) {
  var c = g.c.H(arguments), d = new g.c.A, e = null;
  d.next = function() {
    for (;;) {
      if (null == e) {
        var a = c.next();
        e = g.c.H(a);
      }
      try {
        return e.next();
      } catch (d) {
        if (d !== g.c.R) {
          throw d;
        }
        e = null;
      }
    }
  };
  return d;
};
g.c.dq = function(a) {
  return g.c.Bi.apply(void 0, a);
};
g.c.yq = function(a, c, d) {
  var e = g.c.H(a);
  a = new g.c.A;
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
g.c.ws = function(a, c, d) {
  var e = g.c.H(a);
  a = new g.c.A;
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
        throw g.c.R;
      }
    }
  };
  return a;
};
g.c.Ia = function(a) {
  if (g.M(a)) {
    return g.a.Ia(a);
  }
  a = g.c.H(a);
  var c = [];
  g.c.forEach(a, function(a) {
    c.push(a);
  });
  return c;
};
g.c.equals = function(a, c) {
  var d = g.c.Ci({}, a, c);
  return g.c.every(d, function(a) {
    return a[0] == a[1];
  });
};
g.c.oi = function(a, c) {
  try {
    return g.c.H(a).next();
  } catch (d) {
    if (d != g.c.R) {
      throw d;
    }
    return c;
  }
};
g.c.product = function(a) {
  if (g.a.some(arguments, function(a) {
    return!a.length;
  }) || !arguments.length) {
    return new g.c.A;
  }
  var c = new g.c.A, d = arguments, e = g.a.repeat(0, d.length);
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
    throw g.c.R;
  };
  return c;
};
g.c.uq = function(a) {
  var c = g.c.H(a), d = [], e = 0;
  a = new g.c.A;
  var f = !1;
  a.next = function() {
    var a = null;
    if (!f) {
      try {
        return a = c.next(), d.push(a), a;
      } catch (l) {
        if (l != g.c.R || g.a.X(d)) {
          throw l;
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
  var d = a || 0, e = g.ja(c) ? c : 1, f = new g.c.A;
  f.next = function() {
    var a = d;
    d += e;
    return a;
  };
  return f;
};
g.c.repeat = function(a) {
  var c = new g.c.A;
  c.next = g.v.constant(a);
  return c;
};
g.c.Dp = function(a) {
  var c = g.c.H(a), d = 0;
  a = new g.c.A;
  a.next = function() {
    return d += c.next();
  };
  return a;
};
g.c.Ve = function(a) {
  var c = arguments, d = new g.c.A;
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
g.c.Ci = function(a, c) {
  var d = g.a.slice(arguments, 1), e = new g.c.A;
  if (0 < d.length) {
    var f = g.a.map(d, g.c.H);
    e.next = function() {
      var c = !1, d = g.a.map(f, function(d) {
        var e;
        try {
          e = d.next(), c = !0;
        } catch (f) {
          if (f !== g.c.R) {
            throw f;
          }
          e = a;
        }
        return e;
      });
      if (!c) {
        throw g.c.R;
      }
      return d;
    };
  }
  return e;
};
g.c.oq = function(a, c) {
  var d = g.c.H(c);
  return g.c.filter(a, function() {
    return!!d.next();
  });
};
g.c.hc = function(a, c) {
  this.he = g.c.H(a);
  this.ie = c || g.v.identity;
};
g.Aa(g.c.hc, g.c.A);
g.c.hc.prototype.next = function() {
  for (;this.vb == this.Ag;) {
    this.Vb = this.he.next(), this.vb = this.ie(this.Vb);
  }
  this.Ag = this.vb;
  return[this.vb, this.Gk(this.Ag)];
};
g.c.hc.prototype.Gk = function(a) {
  for (var c = [];this.vb == a;) {
    c.push(this.Vb);
    try {
      this.Vb = this.he.next();
    } catch (d) {
      if (d !== g.c.R) {
        throw d;
      }
      break;
    }
    this.vb = this.ie(this.Vb);
  }
  return c;
};
g.c.br = function(a, c) {
  return new g.c.hc(a, c);
};
g.c.rs = function(a, c, d) {
  var e = g.c.H(a);
  a = new g.c.A;
  a.next = function() {
    var a = g.c.Ia(e.next());
    return c.apply(d, g.a.concat(a, void 0, e));
  };
  return a;
};
g.c.xs = function(a, c) {
  var d = g.c.H(a), e = g.isNumber(c) ? c : 2, f = g.a.map(g.a.Ob(e), function() {
    return[];
  }), h = function() {
    var a = d.next();
    g.a.forEach(f, function(c) {
      c.push(a);
    });
  };
  return g.a.map(f, function(a) {
    var c = new g.c.A;
    c.next = function() {
      g.a.X(a) && h();
      return a.shift();
    };
    return c;
  });
};
g.c.Bq = function(a, c) {
  return g.c.Ve(g.c.count(c), a);
};
g.c.Ai = function(a, c) {
  var d = g.c.H(a), e = new g.c.A, f = c;
  e.next = function() {
    if (0 < f--) {
      return d.next();
    }
    throw g.c.R;
  };
  return e;
};
g.c.zi = function(a, c) {
  for (var d = g.c.H(a);0 < c--;) {
    g.c.oi(d, null);
  }
  return d;
};
g.c.slice = function(a, c, d) {
  a = g.c.zi(a, c);
  g.isNumber(d) && (a = g.c.Ai(a, d - c));
  return a;
};
g.c.oh = function(a) {
  var c = [];
  g.a.Zh(a, c);
  return a.length != c.length;
};
g.c.nh = function(a, c) {
  var d = g.c.Ia(a), e = g.isNumber(c) ? c : d.length, d = g.a.repeat(d, e), d = g.c.product.apply(void 0, d);
  return g.c.filter(d, function(a) {
    return!g.c.oh(a);
  });
};
g.c.kq = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = g.c.Ia(a), f = g.c.Ob(e.length), f = g.c.nh(f, c), h = g.c.filter(f, function(a) {
    return g.a.de(a);
  }), f = new g.c.A;
  f.next = function() {
    return g.a.map(h.next(), d);
  };
  return f;
};
g.c.lq = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = g.c.Ia(a), f = g.a.Ob(e.length), f = g.a.repeat(f, c), f = g.c.product.apply(void 0, f), h = g.c.filter(f, function(a) {
    return g.a.de(a);
  }), f = new g.c.A;
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
g.object.ha = function(a) {
  var c = 0, d;
  for (d in a) {
    c++;
  }
  return c;
};
g.object.Kq = function(a) {
  for (var c in a) {
    return c;
  }
};
g.object.Lq = function(a) {
  for (var c in a) {
    return a[c];
  }
};
g.object.contains = function(a, c) {
  return g.object.eb(a, c);
};
g.object.N = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = a[e];
  }
  return c;
};
g.object.ga = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = e;
  }
  return c;
};
g.object.Yq = function(a, c) {
  for (var d = g.M(c), e = d ? c : arguments, d = d ? 0 : 1;d < e.length && (a = a[e[d]], g.ja(a));d++) {
  }
  return a;
};
g.object.$e = function(a, c) {
  return c in a;
};
g.object.eb = function(a, c) {
  for (var d in a) {
    if (a[d] == c) {
      return!0;
    }
  }
  return!1;
};
g.object.nm = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return e;
    }
  }
};
g.object.Gq = function(a, c, d) {
  return(c = g.object.nm(a, c, d)) && a[c];
};
g.object.X = function(a) {
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
g.object.fs = function(a, c, d) {
  return c in a ? a[c] : a[c] = d;
};
g.object.clone = function(a) {
  var c = {}, d;
  for (d in a) {
    c[d] = a[d];
  }
  return c;
};
g.object.Qk = function(a) {
  var c = g.ea(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = g.object.Qk(a[d]);
    }
    return c;
  }
  return a;
};
g.object.mh = function(a) {
  var c = {}, d;
  for (d in a) {
    c[a[d]] = d;
  }
  return c;
};
g.object.hh = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
g.object.extend = function(a, c) {
  for (var d, e, f = 1;f < arguments.length;f++) {
    e = arguments[f];
    for (d in e) {
      a[d] = e[d];
    }
    for (var h = 0;h < g.object.hh.length;h++) {
      d = g.object.hh[h], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d]);
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
g.object.jm = function(a) {
  var c = arguments.length;
  if (1 == c && g.isArray(arguments[0])) {
    return g.object.jm.apply(null, arguments[0]);
  }
  for (var d = {}, e = 0;e < c;e++) {
    d[arguments[e]] = !0;
  }
  return d;
};
g.object.sq = function(a) {
  var c = a;
  Object.isFrozen && !Object.isFrozen(a) && (c = Object.create(a), Object.freeze(c));
  return c;
};
g.object.tr = function(a) {
  return!!Object.isFrozen && Object.isFrozen(a);
};
g.f.S = function(a, c) {
  this.r = {};
  this.C = [];
  this.pb = this.Ba = 0;
  var d = arguments.length;
  if (1 < d) {
    if (d % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var e = 0;e < d;e += 2) {
      this.set(arguments[e], arguments[e + 1]);
    }
  } else {
    a && this.Xc(a);
  }
};
b = g.f.S.prototype;
b.ha = function() {
  return this.Ba;
};
b.N = function() {
  this.ab();
  for (var a = [], c = 0;c < this.C.length;c++) {
    a.push(this.r[this.C[c]]);
  }
  return a;
};
b.ga = function() {
  this.ab();
  return this.C.concat();
};
b.$e = function(a) {
  return g.f.S.Sa(this.r, a);
};
b.eb = function(a) {
  for (var c = 0;c < this.C.length;c++) {
    var d = this.C[c];
    if (g.f.S.Sa(this.r, d) && this.r[d] == a) {
      return!0;
    }
  }
  return!1;
};
b.equals = function(a, c) {
  if (this === a) {
    return!0;
  }
  if (this.Ba != a.ha()) {
    return!1;
  }
  var d = c || g.f.S.pi;
  this.ab();
  for (var e, f = 0;e = this.C[f];f++) {
    if (!d(this.get(e), a.get(e))) {
      return!1;
    }
  }
  return!0;
};
g.f.S.pi = function(a, c) {
  return a === c;
};
b = g.f.S.prototype;
b.X = function() {
  return 0 == this.Ba;
};
b.clear = function() {
  this.r = {};
  this.pb = this.Ba = this.C.length = 0;
};
b.remove = function(a) {
  return g.f.S.Sa(this.r, a) ? (delete this.r[a], this.Ba--, this.pb++, this.C.length > 2 * this.Ba && this.ab(), !0) : !1;
};
b.ab = function() {
  if (this.Ba != this.C.length) {
    for (var a = 0, c = 0;a < this.C.length;) {
      var d = this.C[a];
      g.f.S.Sa(this.r, d) && (this.C[c++] = d);
      a++;
    }
    this.C.length = c;
  }
  if (this.Ba != this.C.length) {
    for (var e = {}, c = a = 0;a < this.C.length;) {
      d = this.C[a], g.f.S.Sa(e, d) || (this.C[c++] = d, e[d] = 1), a++;
    }
    this.C.length = c;
  }
};
b.get = function(a, c) {
  return g.f.S.Sa(this.r, a) ? this.r[a] : c;
};
b.set = function(a, c) {
  g.f.S.Sa(this.r, a) || (this.Ba++, this.C.push(a), this.pb++);
  this.r[a] = c;
};
b.Xc = function(a) {
  var c;
  a instanceof g.f.S ? (c = a.ga(), a = a.N()) : (c = g.object.ga(a), a = g.object.N(a));
  for (var d = 0;d < c.length;d++) {
    this.set(c[d], a[d]);
  }
};
b.forEach = function(a, c) {
  for (var d = this.ga(), e = 0;e < d.length;e++) {
    var f = d[e], h = this.get(f);
    a.call(c, h, f, this);
  }
};
b.clone = function() {
  return new g.f.S(this);
};
b.mh = function() {
  for (var a = new g.f.S, c = 0;c < this.C.length;c++) {
    var d = this.C[c];
    a.set(this.r[d], d);
  }
  return a;
};
b.Km = function() {
  this.ab();
  for (var a = {}, c = 0;c < this.C.length;c++) {
    var d = this.C[c];
    a[d] = this.r[d];
  }
  return a;
};
b.cb = function(a) {
  this.ab();
  var c = 0, d = this.C, e = this.r, f = this.pb, h = this, l = new g.c.A;
  l.next = function() {
    for (;;) {
      if (f != h.pb) {
        throw Error("The map has changed since the iterator was created");
      }
      if (c >= d.length) {
        throw g.c.R;
      }
      var l = d[c++];
      return a ? l : e[l];
    }
  };
  return l;
};
g.f.S.Sa = function(a, c) {
  return Object.prototype.hasOwnProperty.call(a, c);
};
g.f.ha = function(a) {
  return "function" == typeof a.ha ? a.ha() : g.M(a) || g.isString(a) ? a.length : g.object.ha(a);
};
g.f.N = function(a) {
  if ("function" == typeof a.N) {
    return a.N();
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
  return g.object.N(a);
};
g.f.ga = function(a) {
  if ("function" == typeof a.ga) {
    return a.ga();
  }
  if ("function" != typeof a.N) {
    if (g.M(a) || g.isString(a)) {
      var c = [];
      a = a.length;
      for (var d = 0;d < a;d++) {
        c.push(d);
      }
      return c;
    }
    return g.object.ga(a);
  }
};
g.f.contains = function(a, c) {
  return "function" == typeof a.contains ? a.contains(c) : "function" == typeof a.eb ? a.eb(c) : g.M(a) || g.isString(a) ? g.a.contains(a, c) : g.object.eb(a, c);
};
g.f.X = function(a) {
  return "function" == typeof a.X ? a.X() : g.M(a) || g.isString(a) ? g.a.X(a) : g.object.X(a);
};
g.f.clear = function(a) {
  "function" == typeof a.clear ? a.clear() : g.M(a) ? g.a.clear(a) : g.object.clear(a);
};
g.f.forEach = function(a, c, d) {
  if ("function" == typeof a.forEach) {
    a.forEach(c, d);
  } else {
    if (g.M(a) || g.isString(a)) {
      g.a.forEach(a, c, d);
    } else {
      for (var e = g.f.ga(a), f = g.f.N(a), h = f.length, l = 0;l < h;l++) {
        c.call(d, f[l], e && e[l], a);
      }
    }
  }
};
g.f.filter = function(a, c, d) {
  if ("function" == typeof a.filter) {
    return a.filter(c, d);
  }
  if (g.M(a) || g.isString(a)) {
    return g.a.filter(a, c, d);
  }
  var e, f = g.f.ga(a), h = g.f.N(a), l = h.length;
  if (f) {
    e = {};
    for (var m = 0;m < l;m++) {
      c.call(d, h[m], f[m], a) && (e[f[m]] = h[m]);
    }
  } else {
    for (e = [], m = 0;m < l;m++) {
      c.call(d, h[m], void 0, a) && e.push(h[m]);
    }
  }
  return e;
};
g.f.map = function(a, c, d) {
  if ("function" == typeof a.map) {
    return a.map(c, d);
  }
  if (g.M(a) || g.isString(a)) {
    return g.a.map(a, c, d);
  }
  var e, f = g.f.ga(a), h = g.f.N(a), l = h.length;
  if (f) {
    e = {};
    for (var m = 0;m < l;m++) {
      e[f[m]] = c.call(d, h[m], f[m], a);
    }
  } else {
    for (e = [], m = 0;m < l;m++) {
      e[m] = c.call(d, h[m], void 0, a);
    }
  }
  return e;
};
g.f.some = function(a, c, d) {
  if ("function" == typeof a.some) {
    return a.some(c, d);
  }
  if (g.M(a) || g.isString(a)) {
    return g.a.some(a, c, d);
  }
  for (var e = g.f.ga(a), f = g.f.N(a), h = f.length, l = 0;l < h;l++) {
    if (c.call(d, f[l], e && e[l], a)) {
      return!0;
    }
  }
  return!1;
};
g.f.every = function(a, c, d) {
  if ("function" == typeof a.every) {
    return a.every(c, d);
  }
  if (g.M(a) || g.isString(a)) {
    return g.a.every(a, c, d);
  }
  for (var e = g.f.ga(a), f = g.f.N(a), h = f.length, l = 0;l < h;l++) {
    if (!c.call(d, f[l], e && e[l], a)) {
      return!1;
    }
  }
  return!0;
};
g.f.wa = function(a) {
  this.r = new g.f.S;
  a && this.Xc(a);
};
g.f.wa.kd = function(a) {
  var c = typeof a;
  return "object" == c && a || "function" == c ? "o" + g.$d(a) : c.substr(0, 1) + a;
};
b = g.f.wa.prototype;
b.ha = function() {
  return this.r.ha();
};
b.add = function(a) {
  this.r.set(g.f.wa.kd(a), a);
};
b.Xc = function(a) {
  a = g.f.N(a);
  for (var c = a.length, d = 0;d < c;d++) {
    this.add(a[d]);
  }
};
b.removeAll = function(a) {
  a = g.f.N(a);
  for (var c = a.length, d = 0;d < c;d++) {
    this.remove(a[d]);
  }
};
b.remove = function(a) {
  return this.r.remove(g.f.wa.kd(a));
};
b.clear = function() {
  this.r.clear();
};
b.X = function() {
  return this.r.X();
};
b.contains = function(a) {
  return this.r.$e(g.f.wa.kd(a));
};
b.N = function() {
  return this.r.N();
};
b.clone = function() {
  return new g.f.wa(this);
};
b.equals = function(a) {
  return this.ha() == g.f.ha(a) && this.pc(a);
};
b.pc = function(a) {
  var c = g.f.ha(a);
  if (this.ha() > c) {
    return!1;
  }
  !(a instanceof g.f.wa) && 5 < c && (a = new g.f.wa(a));
  return g.f.every(this, function(c) {
    return g.f.contains(a, c);
  });
};
b.cb = function() {
  return this.r.cb(!1);
};
g.d = {};
g.d.userAgent = {};
g.d.userAgent.m = {};
g.d.userAgent.m.Se = function() {
  var a = g.d.userAgent.m.xi();
  return a && (a = a.userAgent) ? a : "";
};
g.d.userAgent.m.xi = function() {
  return g.global.navigator;
};
g.d.userAgent.m.Re = g.d.userAgent.m.Se();
g.d.userAgent.m.is = function(a) {
  g.d.userAgent.m.Re = a || g.d.userAgent.m.Se();
};
g.d.userAgent.m.qb = function() {
  return g.d.userAgent.m.Re;
};
g.d.userAgent.m.L = function(a) {
  return g.b.contains(g.d.userAgent.m.qb(), a);
};
g.d.userAgent.m.yi = function(a) {
  return g.b.ph(g.d.userAgent.m.qb(), a);
};
g.d.userAgent.m.Hc = function(a) {
  for (var c = RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), d = [], e;e = c.exec(a);) {
    d.push([e[1], e[2], e[3] || void 0]);
  }
  return d;
};
g.d.userAgent.browser = {};
g.d.userAgent.browser.Bm = function() {
  return g.d.userAgent.m.L("Opera") || g.d.userAgent.m.L("OPR");
};
g.d.userAgent.browser.Am = function() {
  return g.d.userAgent.m.L("Trident") || g.d.userAgent.m.L("MSIE");
};
g.d.userAgent.browser.zm = function() {
  return g.d.userAgent.m.L("Firefox");
};
g.d.userAgent.browser.Cm = function() {
  return g.d.userAgent.m.L("Safari") && !g.d.userAgent.m.L("Chrome") && !g.d.userAgent.m.L("CriOS") && !g.d.userAgent.m.L("Android");
};
g.d.userAgent.browser.ym = function() {
  return g.d.userAgent.m.L("Chrome") || g.d.userAgent.m.L("CriOS");
};
g.d.userAgent.browser.xm = function() {
  return g.d.userAgent.m.L("Android") && !g.d.userAgent.m.L("Chrome") && !g.d.userAgent.m.L("CriOS");
};
g.d.userAgent.browser.Je = g.d.userAgent.browser.Bm;
g.d.userAgent.browser.Ie = g.d.userAgent.browser.Am;
g.d.userAgent.browser.rr = g.d.userAgent.browser.zm;
g.d.userAgent.browser.zr = g.d.userAgent.browser.Cm;
g.d.userAgent.browser.mr = g.d.userAgent.browser.ym;
g.d.userAgent.browser.kr = g.d.userAgent.browser.xm;
g.d.userAgent.browser.Br = function() {
  return g.d.userAgent.m.L("Silk");
};
g.d.userAgent.browser.Mc = function() {
  var a = g.d.userAgent.m.qb();
  if (g.d.userAgent.browser.Ie()) {
    return g.d.userAgent.browser.hi(a);
  }
  if (g.d.userAgent.browser.Je()) {
    return g.d.userAgent.browser.ii(a);
  }
  a = g.d.userAgent.m.Hc(a);
  return g.d.userAgent.browser.ee(a);
};
g.d.userAgent.browser.Ec = function(a) {
  return 0 <= g.b.rb(g.d.userAgent.browser.Mc(), a);
};
g.d.userAgent.browser.hi = function(a) {
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
g.d.userAgent.browser.ii = function(a) {
  a = g.d.userAgent.m.Hc(a);
  var c = g.a.fe(a);
  return "OPR" == c[0] && c[1] ? c[1] : g.d.userAgent.browser.ee(a);
};
g.d.userAgent.browser.ee = function(a) {
  return a[2] && a[2][1] ? a[2][1] : "";
};
g.d.userAgent.fa = {};
g.d.userAgent.fa.yr = function() {
  return g.d.userAgent.m.L("Presto");
};
g.d.userAgent.fa.Yh = function() {
  return g.d.userAgent.m.L("Trident") || g.d.userAgent.m.L("MSIE");
};
g.d.userAgent.fa.Ae = function() {
  return g.d.userAgent.m.yi("WebKit");
};
g.d.userAgent.fa.tm = function() {
  return g.d.userAgent.m.L("Gecko") && !g.d.userAgent.fa.Ae() && !g.d.userAgent.fa.Yh();
};
g.d.userAgent.fa.Mc = function() {
  var a = g.d.userAgent.m.qb();
  if (a) {
    var a = g.d.userAgent.m.Hc(a), c = a[1];
    if (c) {
      return "Gecko" == c[0] ? g.d.userAgent.fa.ji(a, "Firefox") : c[1];
    }
    var a = a[0], d;
    if (a && (d = a[2]) && (d = /Trident\/([^\s;]+)/.exec(d))) {
      return d[1];
    }
  }
  return "";
};
g.d.userAgent.fa.Ec = function(a) {
  return 0 <= g.b.rb(g.d.userAgent.fa.Mc(), a);
};
g.d.userAgent.fa.ji = function(a, c) {
  var d = g.a.find(a, function(a) {
    return c == a[0];
  });
  return d && d[1] || "";
};
g.userAgent = {};
g.userAgent.Sd = !1;
g.userAgent.Yg = !1;
g.userAgent.bh = !1;
g.userAgent.Td = !1;
g.userAgent.Ud = !1;
g.userAgent.ai = !1;
g.userAgent.Fc = g.userAgent.Sd || g.userAgent.Yg || g.userAgent.Td || g.userAgent.bh || g.userAgent.Ud;
g.userAgent.bb = function() {
  return g.d.userAgent.m.qb();
};
g.userAgent.Rc = function() {
  return g.global.navigator || null;
};
g.userAgent.Ab = g.userAgent.Fc ? g.userAgent.Ud : g.d.userAgent.browser.Je();
g.userAgent.Xa = g.userAgent.Fc ? g.userAgent.Sd : g.d.userAgent.browser.Ie();
g.userAgent.ig = g.userAgent.Fc ? g.userAgent.Yg : g.d.userAgent.fa.tm();
g.userAgent.sb = g.userAgent.Fc ? g.userAgent.bh || g.userAgent.Td : g.d.userAgent.fa.Ae();
g.userAgent.um = function() {
  return g.userAgent.sb && g.d.userAgent.m.L("Mobile");
};
g.userAgent.$n = g.userAgent.Td || g.userAgent.um();
g.userAgent.Vf = g.userAgent.sb;
g.userAgent.km = function() {
  var a = g.userAgent.Rc();
  return a && a.platform || "";
};
g.userAgent.Qc = g.userAgent.km();
g.userAgent.$g = !1;
g.userAgent.dh = !1;
g.userAgent.Zg = !1;
g.userAgent.eh = !1;
g.userAgent.Kb = !1;
g.userAgent.Mb = !1;
g.userAgent.Lb = !1;
g.userAgent.Qa = g.userAgent.$g || g.userAgent.dh || g.userAgent.Zg || g.userAgent.eh || g.userAgent.Kb || g.userAgent.Mb || g.userAgent.Lb;
g.userAgent.qm = function() {
  g.userAgent.xh = g.b.contains(g.userAgent.Qc, "Mac");
  g.userAgent.yh = g.b.contains(g.userAgent.Qc, "Win");
  g.userAgent.wh = g.b.contains(g.userAgent.Qc, "Linux");
  g.userAgent.zh = !!g.userAgent.Rc() && g.b.contains(g.userAgent.Rc().appVersion || "", "X11");
  var a = g.userAgent.bb();
  g.userAgent.Rb = !!a && g.b.contains(a, "Android");
  g.userAgent.vh = !!a && g.b.contains(a, "iPhone");
  g.userAgent.uh = !!a && g.b.contains(a, "iPad");
};
g.userAgent.Qa || g.userAgent.qm();
g.userAgent.Bd = g.userAgent.Qa ? g.userAgent.$g : g.userAgent.xh;
g.userAgent.Dd = g.userAgent.Qa ? g.userAgent.dh : g.userAgent.yh;
g.userAgent.Ad = g.userAgent.Qa ? g.userAgent.Zg : g.userAgent.wh;
g.userAgent.Bp = g.userAgent.Qa ? g.userAgent.eh : g.userAgent.zh;
g.userAgent.ANDROID = g.userAgent.Qa ? g.userAgent.Kb : g.userAgent.Rb;
g.userAgent.Uf = g.userAgent.Qa ? g.userAgent.Mb : g.userAgent.vh;
g.userAgent.Tf = g.userAgent.Qa ? g.userAgent.Lb : g.userAgent.uh;
g.userAgent.Yd = function() {
  var a = "", c;
  if (g.userAgent.Ab && g.global.opera) {
    return a = g.global.opera.version, g.isFunction(a) ? a() : a;
  }
  g.userAgent.ig ? c = /rv\:([^\);]+)(\)|;)/ : g.userAgent.Xa ? c = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : g.userAgent.sb && (c = /WebKit\/(\S+)/);
  c && (a = (a = c.exec(g.userAgent.bb())) ? a[1] : "");
  return g.userAgent.Xa && (c = g.userAgent.jg(), c > parseFloat(a)) ? String(c) : a;
};
g.userAgent.jg = function() {
  var a = g.global.document;
  return a ? a.documentMode : void 0;
};
g.userAgent.VERSION = g.userAgent.Yd();
g.userAgent.compare = function(a, c) {
  return g.b.rb(a, c);
};
g.userAgent.Ce = {};
g.userAgent.Ec = function(a) {
  return g.userAgent.ai || g.userAgent.Ce[a] || (g.userAgent.Ce[a] = 0 <= g.b.rb(g.userAgent.VERSION, a));
};
g.userAgent.ae = g.userAgent.Ec;
g.userAgent.sm = function(a) {
  return g.userAgent.Xa && g.userAgent.$k >= a;
};
g.userAgent.or = g.userAgent.sm;
var t = g.global.document;
g.userAgent.$k = t && g.userAgent.Xa ? g.userAgent.jg() || ("CSS1Compat" == t.compatMode ? parseInt(g.userAgent.VERSION, 10) : 5) : void 0;
g.debug.ka = g.Ya;
g.debug.cq = function(a, c, d) {
  d = d || g.global;
  var e = d.onerror, f = !!c;
  g.userAgent.sb && !g.userAgent.Ec("535.3") && (f = !f);
  d.onerror = function(c, d, m, n, p) {
    e && e(c, d, m, n, p);
    a({message:c, fileName:d, Ok:m, Qm:n, error:p});
    return f;
  };
};
g.debug.Dq = function(a, c) {
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
g.debug.wq = function(a, c) {
  var d = [], e = function(a, h, l) {
    var m = h + "  ";
    l = new g.f.wa(l);
    try {
      if (g.ja(a)) {
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
                if (l.contains(a)) {
                  d.push("*** reference loop detected ***");
                } else {
                  l.add(a);
                  d.push("{");
                  for (var n in a) {
                    if (c || !g.isFunction(a[n])) {
                      d.push("\n"), d.push(m), d.push(n + " = "), e(a[n], m, l);
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
  e(a, "", new g.f.wa);
  return d.join("");
};
g.debug.lm = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    g.isArray(a[d]) ? c.push(g.debug.lm(a[d])) : c.push(a[d]);
  }
  return "[ " + c.join(", ") + " ]";
};
g.debug.ti = function(a, c) {
  try {
    var d = g.debug.$h(a);
    return "Message: " + g.b.fb(d.message) + '\nUrl: <a href="view-source:' + d.fileName + '" target="_new">' + d.fileName + "</a>\nLine: " + d.lineNumber + "\n\nBrowser stack:\n" + g.b.fb(d.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + g.b.fb(g.debug.Uc(c) + "-> ");
  } catch (e) {
    return "Exception trying to expose exception! You win, we lose. " + e;
  }
};
g.debug.$h = function(a) {
  var c = g.kl("window.location.href");
  if (g.isString(a)) {
    return{message:a, name:"Unknown error", lineNumber:"Not available", fileName:c, stack:"Not available"};
  }
  var d, e, f = !1;
  try {
    d = a.lineNumber || a.Ok || "Not available";
  } catch (h) {
    d = "Not available", f = !0;
  }
  try {
    e = a.fileName || a.filename || a.sourceURL || g.global.$googDebugFname || c;
  } catch (l) {
    e = "Not available", f = !0;
  }
  return!f && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {message:a.message || "Not available", name:a.name || "UnknownError", lineNumber:d, fileName:e, stack:a.stack || "Not available"};
};
g.debug.Qg = function(a, c) {
  var d;
  "string" == typeof a ? (d = Error(a), Error.captureStackTrace && Error.captureStackTrace(d, g.debug.Qg)) : d = a;
  d.stack || (d.stack = g.debug.Uc(g.debug.Qg));
  if (c) {
    for (var e = 0;d["message" + e];) {
      ++e;
    }
    d["message" + e] = String(c);
  }
  return d;
};
g.debug.Vk = function(a) {
  if (g.Cd) {
    var c = g.debug.Bg(g.debug.Vk);
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
    if (e >= g.debug.ue) {
      c.push("[...long stack...]");
      break;
    }
  }
  a && e >= a ? c.push("[...reached max depth limit...]") : c.push("[end]");
  return c.join("");
};
g.debug.ue = 50;
g.debug.Bg = function(a) {
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
g.debug.Uc = function(a) {
  var c;
  g.Cd && (c = g.debug.Bg(a || g.debug.Uc));
  c || (c = g.debug.te(a || arguments.callee.caller, []));
  return c;
};
g.debug.te = function(a, c) {
  var d = [];
  if (g.a.contains(c, a)) {
    d.push("[...circular reference...]");
  } else {
    if (a && c.length < g.debug.ue) {
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
        d.push(g.debug.te(a.caller, c));
      } catch (l) {
        d.push("[exception trying to get caller]\n");
      }
    } else {
      a ? d.push("[...long stack...]") : d.push("[end]");
    }
  }
  return d.join("");
};
g.debug.es = function(a) {
  g.debug.Ng = a;
};
g.debug.getFunctionName = function(a) {
  if (g.debug.nb[a]) {
    return g.debug.nb[a];
  }
  if (g.debug.Ng) {
    var c = g.debug.Ng(a);
    if (c) {
      return g.debug.nb[a] = c;
    }
  }
  a = String(a);
  g.debug.nb[a] || (c = /function ([^\(]+)/.exec(a), g.debug.nb[a] = c ? c[1] : "[Anonymous]");
  return g.debug.nb[a];
};
g.debug.Lr = function(a) {
  return a.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]");
};
g.debug.nb = {};
g.debug.ca = function(a, c, d, e, f) {
  this.reset(a, c, d, e, f);
};
g.debug.ca.prototype.sg = null;
g.debug.ca.prototype.rg = null;
g.debug.ca.hk = !0;
g.debug.ca.jk = 0;
g.debug.ca.prototype.reset = function(a, c, d, e, f) {
  g.debug.ca.hk && ("number" == typeof f || g.debug.ca.jk++);
  e || g.now();
  this.Lc = a;
  this.ik = c;
  delete this.sg;
  delete this.rg;
};
g.debug.ca.prototype.vi = function(a) {
  this.sg = a;
};
g.debug.ca.prototype.wi = function(a) {
  this.rg = a;
};
g.debug.ca.prototype.getMessage = function() {
  return this.ik;
};
g.debug.$ = function() {
  this.clear();
};
g.debug.$.Kc = function() {
  g.debug.$.Gb || (g.debug.$.Gb = new g.debug.$);
  return g.debug.$.Gb;
};
g.debug.$.yc = 0;
g.debug.$.prototype.si = function(a, c, d) {
  var e = (this.Lf + 1) % g.debug.$.yc;
  this.Lf = e;
  if (this.Mf) {
    return e = this.Kf[e], e.reset(a, c, d), e;
  }
  this.Mf = e == g.debug.$.yc - 1;
  return this.Kf[e] = new g.debug.ca(a, c, d);
};
g.debug.$.ui = function() {
  return 0 < g.debug.$.yc;
};
g.debug.$.prototype.clear = function() {
  this.Kf = Array(g.debug.$.yc);
  this.Lf = -1;
  this.Mf = !1;
};
g.debug.e = function(a) {
  this.$c = a;
  this.ra = this.Ed = this.Lc = this.qa = null;
};
g.debug.e.nd = "";
g.debug.e.ob = !0;
g.debug.e.ob || (g.debug.e.Jc = []);
g.debug.e.i = function(a, c) {
  this.name = a;
  this.value = c;
};
g.debug.e.i.prototype.toString = function() {
  return this.name;
};
g.debug.e.i.Oc = new g.debug.e.i("OFF", Infinity);
g.debug.e.i.Rl = new g.debug.e.i("SHOUT", 1200);
g.debug.e.i.Pe = new g.debug.e.i("SEVERE", 1E3);
g.debug.e.i.ed = new g.debug.e.i("WARNING", 900);
g.debug.e.i.Oe = new g.debug.e.i("INFO", 800);
g.debug.e.i.Me = new g.debug.e.i("CONFIG", 700);
g.debug.e.i.Ne = new g.debug.e.i("FINE", 500);
g.debug.e.i.xl = new g.debug.e.i("FINER", 400);
g.debug.e.i.yl = new g.debug.e.i("FINEST", 300);
g.debug.e.i.ll = new g.debug.e.i("ALL", 0);
g.debug.e.i.dd = [g.debug.e.i.Oc, g.debug.e.i.Rl, g.debug.e.i.Pe, g.debug.e.i.ed, g.debug.e.i.Oe, g.debug.e.i.Me, g.debug.e.i.Ne, g.debug.e.i.xl, g.debug.e.i.yl, g.debug.e.i.ll];
g.debug.e.i.La = null;
g.debug.e.i.Le = function() {
  g.debug.e.i.La = {};
  for (var a = 0, c;c = g.debug.e.i.dd[a];a++) {
    g.debug.e.i.La[c.value] = c, g.debug.e.i.La[c.name] = c;
  }
};
g.debug.e.i.Uq = function(a) {
  g.debug.e.i.La || g.debug.e.i.Le();
  return g.debug.e.i.La[a] || null;
};
g.debug.e.i.Vq = function(a) {
  g.debug.e.i.La || g.debug.e.i.Le();
  if (a in g.debug.e.i.La) {
    return g.debug.e.i.La[a];
  }
  for (var c = 0;c < g.debug.e.i.dd.length;++c) {
    var d = g.debug.e.i.dd[c];
    if (d.value <= a) {
      return d;
    }
  }
  return null;
};
g.debug.e.vj = function(a) {
  g.global.console && (g.global.console.timeStamp ? g.global.console.timeStamp(a) : g.global.console.markTimeline && g.global.console.markTimeline(a));
  g.global.msWriteProfilerMark && g.global.msWriteProfilerMark(a);
};
b = g.debug.e.prototype;
b.getName = function() {
  return this.$c;
};
b.Jg = function(a) {
  g.debug.ka && (g.debug.e.ob ? (this.ra || (this.ra = []), this.ra.push(a)) : g.debug.e.Jc.push(a));
};
b.Mg = function(a) {
  if (g.debug.ka) {
    var c = g.debug.e.ob ? this.ra : g.debug.e.Jc;
    return!!c && g.a.remove(c, a);
  }
  return!1;
};
b.getParent = function() {
  return this.qa;
};
b.getChildren = function() {
  this.Ed || (this.Ed = {});
  return this.Ed;
};
b.ge = function() {
  if (!g.debug.ka) {
    return g.debug.e.i.Oc;
  }
  if (!g.debug.e.ob) {
    return g.debug.e.Mm;
  }
  if (this.Lc) {
    return this.Lc;
  }
  if (this.qa) {
    return this.qa.ge();
  }
  g.k.Nc("Root logger has no level set.");
  return null;
};
b.aj = function(a) {
  return g.debug.ka && a.value >= this.ge().value;
};
b.log = function(a, c, d) {
  g.debug.ka && this.aj(a) && (g.isFunction(c) && (c = c()), this.$i(this.Ke(a, c, d, g.debug.e.prototype.log)));
};
b.Ke = function(a, c, d, e) {
  a = g.debug.$.ui() ? g.debug.$.Kc().si(a, c, this.$c) : new g.debug.ca(a, String(c), this.$c);
  d && (a.vi(d), a.wi(g.debug.ti(d, e || g.debug.e.prototype.Ke)));
  return a;
};
b.cl = function(a, c) {
  g.debug.ka && this.log(g.debug.e.i.Pe, a, c);
};
b.zc = function(a, c) {
  g.debug.ka && this.log(g.debug.e.i.ed, a, c);
};
b.info = function(a, c) {
  g.debug.ka && this.log(g.debug.e.i.Oe, a, c);
};
b.config = function(a, c) {
  g.debug.ka && this.log(g.debug.e.i.Me, a, c);
};
b.Kg = function(a, c) {
  g.debug.ka && this.log(g.debug.e.i.Ne, a, c);
};
b.$i = function(a) {
  g.debug.e.vj("log:" + a.getMessage());
  if (g.debug.e.ob) {
    for (var c = this;c;) {
      c.uj(a), c = c.getParent();
    }
  } else {
    for (var c = 0, d;d = g.debug.e.Jc[c++];) {
      d(a);
    }
  }
};
b.uj = function(a) {
  if (this.ra) {
    for (var c = 0, d;d = this.ra[c];c++) {
      d(a);
    }
  }
};
g.debug.na = {};
g.debug.na.of = {};
g.debug.na.Db = function() {
  g.debug.na.hf || (g.debug.na.of[g.debug.e.nd] = g.debug.na.hf);
};
g.debug.na.Qq = function() {
  return g.debug.na.of;
};
g.debug.na.Wq = function() {
  g.debug.na.Db();
  return g.debug.na.hf;
};
g.debug.na.rq = function() {
  return function() {
  };
};
g.log = {};
g.log.Za = g.debug.ka;
g.log.nd = g.debug.e.nd;
g.log.e = g.debug.e;
g.log.i = g.debug.e.i;
g.log.ca = g.debug.ca;
g.log.Jg = function(a, c) {
  g.log.Za && a && a.Jg(c);
};
g.log.Mg = function(a, c) {
  return g.log.Za && a ? a.Mg(c) : !1;
};
g.log.log = function(a, c, d, e) {
  g.log.Za && a && a.log(c, d, e);
};
g.log.error = function(a, c, d) {
  g.log.Za && a && a.cl(c, d);
};
g.log.zc = function(a, c, d) {
  g.log.Za && a && a.zc(c, d);
};
g.log.info = function(a, c, d) {
  g.log.Za && a && a.info(c, d);
};
g.log.Kg = function(a, c, d) {
  g.log.Za && a && a.Kg(c, d);
};
g.f.Z = function(a) {
  this.W = {};
  if (a) {
    for (var c = 0;c < a.length;c++) {
      this.W[g.f.Z.Yb(a[c])] = null;
    }
  }
  g.k.ei();
};
g.f.Z.yj = {};
g.f.Z.Yb = function(a) {
  return a in g.f.Z.yj || 32 == String(a).charCodeAt(0) ? " " + a : a;
};
g.f.Z.ld = function(a) {
  return 32 == a.charCodeAt(0) ? a.substr(1) : a;
};
b = g.f.Z.prototype;
b.add = function(a) {
  this.W[g.f.Z.Yb(a)] = null;
};
b.zj = function(a) {
  for (var c in a.W) {
    this.W[c] = null;
  }
};
b.clear = function() {
  this.W = {};
};
b.clone = function() {
  var a = new g.f.Z;
  a.zj(this);
  return a;
};
b.contains = function(a) {
  return g.f.Z.Yb(a) in this.W;
};
b.equals = function(a) {
  return this.pc(a) && a.pc(this);
};
b.forEach = function(a, c) {
  for (var d in this.W) {
    a.call(c, g.f.Z.ld(d), void 0, this);
  }
};
b.ha = Object.keys ? function() {
  return Object.keys(this.W).length;
} : function() {
  var a = 0, c;
  for (c in this.W) {
    a++;
  }
  return a;
};
b.N = Object.keys ? function() {
  return Object.keys(this.W).map(g.f.Z.ld, this);
} : function() {
  var a = [], c;
  for (c in this.W) {
    a.push(g.f.Z.ld(c));
  }
  return a;
};
b.X = function() {
  for (var a in this.W) {
    return!1;
  }
  return!0;
};
b.pc = function(a) {
  for (var c in this.W) {
    if (!(c in a.W)) {
      return!1;
    }
  }
  return!0;
};
b.remove = function(a) {
  a = g.f.Z.Yb(a);
  return a in this.W ? (delete this.W[a], !0) : !1;
};
b.cb = function() {
  return g.c.H(this.N());
};
k.jh = {};
k.jh.bs = function(a, c) {
  if (!a) {
    return a;
  }
  c && (a = g.b.truncate(a, c));
  return g.b.fb(a);
};
k.jh.Hs = function(a) {
  return g.b.Wc(a);
};
k.l = {};
k.l.co = "Casting to {{receiverName}}";
k.l.io = "Cast this tab to...";
k.l.jo = "Cast this tab (audio) to...";
k.l.ho = "Cast entire screen to...";
k.l.eo = "Cast {{v2AppDomain}} to...";
k.l.fo = "Cast {{v2AppDomain}}";
k.l.lo = "Cast this tab";
k.l.Qo = "Stop casting";
k.l.ko = "Cast {{v2AppDomain}}";
k.l.Ao = "Bug or Error";
k.l.Co = "Feature Request";
k.l.Eo = "Tab/Desktop Projection Quality";
k.l.Bo = "Device Discovery";
k.l.Do = "Other";
k.l.Go = "Freezes";
k.l.Jo = "Jerky";
k.l.No = "Occasional Stutter";
k.l.Mo = "Smooth";
k.l.Ko = "Perfect";
k.l.uo = "N/A";
k.l.Oo = "Unwatchable";
k.l.Lo = "Poor";
k.l.Fo = "Acceptable";
k.l.Ho = "Good - DVD";
k.l.Io = "Great - HD";
k.l.so = "Unintelligible";
k.l.ro = "Poor";
k.l.oo = "Acceptable - FM";
k.l.po = "Good";
k.l.qo = "Perfect";
k.l.to = "Do you want to discard the feedback?";
k.l.xo = "Sending feedback...";
k.l.yo = "Unable to send feedback. Please try again later.";
k.l.zo = "Thank you for sending feedback.";
k.l.wo = "Failed to send feedback. Retrying (this is attempt #{{attemptNumber}})...";
k.l.Hl = "Standard (480p)";
k.l.Fl = "High (720p)";
k.l.Gl = "Extreme (720p high bitrate)";
k.l.Po = "Google Cast extension options";
k.l.vo = "Google Cast feedback";
k.l.mo = "The Google Cast extension enables you to find and play content on your Chromecast device from your Chrome browser.\nWhen on Cast optimized sites, you'll see new options that let you play video on your TV via Chromecast - using your computer as a remote to browse for videos and to control playback.\nYou can also cast any of your tabs in Chrome to your TV, letting you enjoy sites, photos, or even video from the best screen in your home. Note that this feature is still in beta, and requires a fast computer and Wi-Fi network.\nChromecast hardware is required to use this extension. To find out more, visit http://google.com/chromecast.\nBy installing this item, you agree to the Google Terms of Service and Privacy Policy at https://www.google.com/intl/en/policies/.";
k.l.bo = "The Google Cast extension enables you to find and play content on your Chromecast device from your Chrome browser.\nThis is the *BETA* channel of the Google Cast extension.  It is intended for developers and advanced users who want early access to upcoming APIs and features in advance of public release.  Most users should install the stable Google Cast extension (https://chrome.google.com/webstore/detail/google-cast/boadgeojelhgndaghljhdicfkmllpafd). The beta channel will often be less stable and contain more bugs.\nBy installing this item, you agree to the Google Terms of Service and Privacy Policy at https://www.google.com/intl/en/policies/.";
k.l.no = "Send content to your Chromecast and other devices that support Google Cast.";
k.j = {};
k.j.sp = {gm:"webrtc", an:"cast_streaming"};
k.j.nn = {op:"tab", qn:"desktop"};
k.j.Ap = {zp:"VP8", $m:"CAST1", Dn:"H264", cp:"rtx"};
k.j.D = function(a, c, d, e, f, h, l, m) {
  this.id = a;
  this.name = c;
  this.videoWidth = d;
  this.videoHeight = e;
  this.videoResolution = d + "x" + e;
  this.minVideoBitrate = f;
  this.maxVideoBitrate = h;
  this.videoQuality = l;
  this.audioBitrate = m;
};
k.j.D.gh = new k.j.D("high", k.l.Fl, 1280, 720, 2E3, 2500, 56, 128);
k.j.D.Cl = new k.j.D("low", k.l.Hl, 854, 480, 750, 1500, 56, 128);
k.j.D.Al = new k.j.D("highest", k.l.Gl, 1280, 720, 4E3, 5E3, 56, 128);
k.j.D.Na = k.j.D.gh;
k.j.D.qh = [k.j.D.Al, k.j.D.gh, k.j.D.Cl];
k.j.D.ln = "custom";
k.j.D.Pq = function(a) {
  return g.a.find(k.j.D.qh, function(c) {
    return c.id == a;
  });
};
k.U = {};
k.U.Jk = {Ik:"fatal", ed:"warning"};
k.U.hp = {Rm:"act_on_issue", np:"stop_activity", Yo:"play_media", Wo:"pause_media", kp:"set_mute", CAST_THIS_TAB:"cast_this_tab", bn:"cast_this_tab_audio", CREATE_SESSION:"create_session", Mn:"launch_desktop_mirror", INIT:"init", tp:"update_settings"};
k.U.An = {ao:"model_update"};
k.U.Xm = {up:"v1_app", vp:"v2_app", kn:"custom_app", Zn:"mirror_tab", Yn:"mirror_screen"};
k.U.Message = function(a, c) {
  this.type = a;
  this.message = c;
};
k.U.Wm = function(a, c, d, e, f, h, l, m) {
  this.id = a;
  this.receiver = new k.U.Fa(c.id, c.uniqueId, c.name, c.receiverType);
  this.activityType = d;
  this.iconUrl = e || null;
  this.title = f || "";
  this.mediaPlayerStatus = h || null;
  this.tabId = l || null;
  this.isLocal = m;
};
k.U.tb = {CAST:"cast", DIAL:"dial", HANGOUT:"hangout", CUSTOM:"custom"};
k.U.Fa = function(a, c, d, e) {
  this.id = a;
  this.uniqueId = c;
  this.name = d;
  this.receiverType = e;
  this.isInLaunch = !1;
};
k.U.Kn = function(a, c, d, e, f, h, l) {
  this.id = a;
  this.title = c;
  this.message = d;
  this.defaultActionText = e;
  this.optActionText = f || "";
  this.severity = h || k.U.Jk.Ik;
  this.activityId = l || null;
};
k.U.dp = function(a, c) {
  this.receiver = a;
  this.activity = c;
};
k.U.Vm = function(a, c) {
  this.id = a;
  this.isDefaultAction = c;
};
k.U.B = function(a, c, d, e) {
  this.statsCollectNotificationDismissed = g.Ja(d) ? d : !0;
  this.sendUsageEnabled = g.Ja(e) ? e : !0;
  this.castAppNotificationDismissed = g.Ja(a) ? a : !1;
  this.mirrorQualityId = c || k.j.D.Na.id;
};
k.U.To = function(a, c, d, e, f, h, l) {
  this.receiverActs = a || [];
  this.issue = c;
  this.isV1AppInTab = h || !1;
  this.isV2AppInTab = !!l;
  this.v2AppDomain = l || null;
  this.currentActivity = d;
  this.desktopActivity = e;
  this.settings = f || new k.U.B;
};
k.U.Ro = function() {
  this.playerState = chrome.cast.media.Bb.IDLE;
  this.muted = null;
  this.supportedCommands = [chrome.cast.media.Og.PAUSE];
};
k.En = function() {
};
g.userAgent.product = {};
g.userAgent.product.Xg = !1;
g.userAgent.product.Vg = !1;
g.userAgent.product.Mb = !1;
g.userAgent.product.Lb = !1;
g.userAgent.product.Kb = !1;
g.userAgent.product.Wg = !1;
g.userAgent.product.ah = !1;
g.userAgent.product.Ra = g.userAgent.Sd || g.userAgent.Ud || g.userAgent.product.Xg || g.userAgent.product.Vg || g.userAgent.product.Mb || g.userAgent.product.Lb || g.userAgent.product.Kb || g.userAgent.product.Wg || g.userAgent.product.ah;
g.userAgent.product.cc = function() {
  g.userAgent.product.ng = !1;
  g.userAgent.product.lg = !1;
  g.userAgent.product.pg = !1;
  g.userAgent.product.og = !1;
  g.userAgent.product.Rb = !1;
  g.userAgent.product.mg = !1;
  g.userAgent.product.qg = !1;
  var a = g.userAgent.bb();
  a && (-1 != a.indexOf("Firefox") ? g.userAgent.product.ng = !0 : -1 != a.indexOf("Camino") ? g.userAgent.product.lg = !0 : -1 != a.indexOf("iPhone") || -1 != a.indexOf("iPod") ? g.userAgent.product.pg = !0 : -1 != a.indexOf("iPad") ? g.userAgent.product.og = !0 : -1 != a.indexOf("Chrome") ? g.userAgent.product.mg = !0 : -1 != a.indexOf("Android") ? g.userAgent.product.Rb = !0 : -1 != a.indexOf("Safari") && (g.userAgent.product.qg = !0));
};
g.userAgent.product.Ra || g.userAgent.product.cc();
g.userAgent.product.Ab = g.userAgent.Ab;
g.userAgent.product.Xa = g.userAgent.Xa;
g.userAgent.product.Wj = g.userAgent.product.Ra ? g.userAgent.product.Xg : g.userAgent.product.ng;
g.userAgent.product.Vj = g.userAgent.product.Ra ? g.userAgent.product.Vg : g.userAgent.product.lg;
g.userAgent.product.Uf = g.userAgent.product.Ra ? g.userAgent.product.Mb : g.userAgent.product.pg;
g.userAgent.product.Tf = g.userAgent.product.Ra ? g.userAgent.product.Lb : g.userAgent.product.og;
g.userAgent.product.ANDROID = g.userAgent.product.Ra ? g.userAgent.product.Kb : g.userAgent.product.Rb;
g.userAgent.product.CHROME = g.userAgent.product.Ra ? g.userAgent.product.Wg : g.userAgent.product.mg;
g.userAgent.product.Vf = g.userAgent.product.Ra ? g.userAgent.product.ah : g.userAgent.product.qg;
g.userAgent.product.Yd = function() {
  if (g.userAgent.product.Wj) {
    return g.userAgent.product.lb(/Firefox\/([0-9.]+)/);
  }
  if (g.userAgent.product.Xa || g.userAgent.product.Ab) {
    return g.userAgent.VERSION;
  }
  if (g.userAgent.product.CHROME) {
    return g.userAgent.product.lb(/Chrome\/([0-9.]+)/);
  }
  if (g.userAgent.product.Vf) {
    return g.userAgent.product.lb(/Version\/([0-9.]+)/);
  }
  if (g.userAgent.product.Uf || g.userAgent.product.Tf) {
    var a = g.userAgent.product.Wf(/Version\/(\S+).*Mobile\/(\S+)/);
    if (a) {
      return a[1] + "." + a[2];
    }
  } else {
    if (g.userAgent.product.ANDROID) {
      return(a = g.userAgent.product.lb(/Android\s+([0-9.]+)/)) ? a : g.userAgent.product.lb(/Version\/([0-9.]+)/);
    }
    if (g.userAgent.product.Vj) {
      return g.userAgent.product.lb(/Camino\/([0-9.]+)/);
    }
  }
  return "";
};
g.userAgent.product.lb = function(a) {
  return(a = g.userAgent.product.Wf(a)) ? a[1] : "";
};
g.userAgent.product.Wf = function(a) {
  return a.exec(g.userAgent.bb());
};
g.userAgent.product.VERSION = g.userAgent.product.Yd();
g.userAgent.product.ae = function(a) {
  return 0 <= g.b.rb(g.userAgent.product.VERSION, a);
};
k.j.G = function() {
  this.videoBitrate = k.j.D.Na.maxVideoBitrate;
  this.minVideoBitrate = k.j.D.Na.minVideoBitrate;
  this.maxVideoBitrate = k.j.D.Na.maxVideoBitrate;
  this.videoQuality = k.j.D.Na.videoQuality;
  this.minWidth = k.j.D.Na.videoWidth;
  this.minHeight = k.j.D.Na.videoHeight;
  this.audioBitrate = k.j.D.Na.audioBitrate;
  this.bufferedMode = k.j.G.Ki.Oi;
  this.bufferSizeMillis = k.j.G.Li;
  this.maxCastLatencyMillis = k.j.G.Mi;
  this.maxFrameRate = k.j.G.Ni;
  this.preferredVideoCodec = "CAST1";
};
k.j.G.rl = {enablePacing:!0, enableAudioTcp:!0, enableVideoTcp:!0, enableAudioNack:!0, useOpus:!0, zoomModeEnabled:!0};
k.j.G.wn = !1;
k.j.G.Ki = {Oc:"off", Um:"auto", Oi:"on"};
k.j.G.Bj = 100;
k.j.G.Aj = 1E4;
k.j.G.Wn = 56;
k.j.G.Sn = 128;
k.j.G.Xn = 100;
k.j.G.Vn = 100;
k.j.G.Rn = 1;
k.j.G.Ni = 30;
k.j.G.wp = {"640x360":[640, 360], "854x480":[854, 480], "1280x720":[1280, 720], "1920x1080":[1920, 1080]};
k.j.G.prototype.update = function(a) {
  for (var c in this) {
    g.isFunction(this[c]) || g.Y(a[c]) && g.ea(this[c]) == g.ea(a[c]) && (this[c] = a[c]);
  }
};
k.j.G.pq = function(a) {
  return Math.min(k.j.G.Aj, Math.max(k.j.G.Bj, a));
};
k.j.G.Li = 500;
k.j.G.Mi = 300;
k.za = {};
k.za.eg = function() {
  return null != g.userAgent.bb() && -1 != g.userAgent.bb().indexOf("CrOS");
};
k.za.Hb = {ck:"ChromeOS", Dd:"Windows", Bd:"Mac", Ad:"Linux", OTHER:"Other"};
k.za.Nq = function() {
  return k.za.eg() ? k.za.Hb.ck : g.userAgent.Dd ? k.za.Hb.Dd : g.userAgent.Bd ? k.za.Hb.Bd : g.userAgent.Ad ? k.za.Hb.Ad : k.za.Hb.OTHER;
};
k.Config = {};
k.Config.nl = "dliochdbjfkdbacpmhlcpmleaejidimm";
k.Config.Hg = "boadgeojelhgndaghljhdicfkmllpafd";
k.Config.getId = function() {
  return g.ja(chrome.runtime) ? chrome.runtime.id : k.Config.Hg;
};
k.Config.Th = !0;
k.Config.rm = k.Config.getId() === k.Config.nl;
k.Config.vm = k.Config.getId() === k.Config.Hg;
k.Config.sr = g.userAgent.product.ae(35);
k.Config.Dr = "undefined" != typeof chrome && !!chrome.networkingPrivate && !!chrome.networkingPrivate.setWifiTDLSEnabledState && k.za.eg();
k.Config.Sh = !!chrome.cast && !!chrome.cast.streaming && g.userAgent.product.ae(36);
k.In = function() {
};
k.j.Oj = "0F5096E8";
k.j.Pj = k.Config.vm ? "9D8006F2" : k.Config.rm ? "5B74E543" : chrome.extension && localStorage.WebrtcCastReceiverAppId || "58232327";
k.j.wr = function(a) {
  return a == k.j.Oj || a == k.j.Pj;
};
g.debug.Q = {};
g.debug.zn = function() {
};
g.debug.Q.mb = [];
g.debug.Q.zd = [];
g.debug.Q.gg = !1;
g.debug.Q.register = function(a) {
  g.debug.Q.mb[g.debug.Q.mb.length] = a;
  if (g.debug.Q.gg) {
    for (var c = g.debug.Q.zd, d = 0;d < c.length;d++) {
      a(g.bind(c[d].wrap, c[d]));
    }
  }
};
g.debug.Q.Mr = function(a) {
  g.debug.Q.gg = !0;
  for (var c = g.bind(a.wrap, a), d = 0;d < g.debug.Q.mb.length;d++) {
    g.debug.Q.mb[d](c);
  }
  g.debug.Q.zd.push(a);
};
g.debug.Q.Gs = function(a) {
  var c = g.debug.Q.zd;
  a = g.bind(a.Om, a);
  for (var d = 0;d < g.debug.Q.mb.length;d++) {
    g.debug.Q.mb[d](a);
  }
  c.length--;
};
g.async = {};
g.async.Pd = function(a) {
  g.global.setTimeout(function() {
    throw a;
  }, 0);
};
g.async.Ea = function(a, c) {
  var d = a;
  c && (d = g.bind(a, c));
  d = g.async.Ea.Eg(d);
  g.isFunction(g.global.setImmediate) ? g.global.setImmediate(d) : (g.async.Ea.Fg || (g.async.Ea.Fg = g.async.Ea.Mk()), g.async.Ea.Fg(d));
};
g.async.Ea.Mk = function() {
  if (g.global.Promise && g.global.Promise.resolve) {
    var a = g.global.Promise.resolve();
    return function(c) {
      a.then(function() {
        try {
          c();
        } catch (a) {
          g.async.Pd(a);
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
      var a = e.Pg;
      e.Pg = null;
      a();
    };
    return function(a) {
      f.next = {Pg:a};
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
g.async.Ea.Eg = g.v.identity;
g.debug.Q.register(function(a) {
  g.async.Ea.Eg = a;
});
g.Pa = {};
g.Pa.$a = {};
g.Pa.$a.Od = [];
g.Pa.$a.ls = function() {
  for (var a = g.Pa.$a.Od, c = 0;c < a.length;c++) {
    g.Pa.$a.Od[c]();
  }
};
g.Pa.$a.Lm = function(a) {
  g.Pa.$a.Od.push(a);
};
g.async.run = function(a, c) {
  g.async.run.Cc || (g.async.Ea(g.async.run.Bk), g.async.run.Cc = !0);
  g.async.run.Ib.push(new g.async.run.Ak(a, c));
};
g.async.run.Cc = !1;
g.async.run.Ib = [];
g.Ya && (g.async.run.Gm = function() {
  g.async.run.Cc = !1;
  g.async.run.Ib = [];
}, g.Pa.$a.Lm(g.async.run.Gm));
g.async.run.Bk = function() {
  for (;g.async.run.Ib.length;) {
    var a = g.async.run.Ib;
    g.async.run.Ib = [];
    for (var c = 0;c < a.length;c++) {
      var d = a[c];
      try {
        d.Nk.call(d.scope);
      } catch (e) {
        g.async.Pd(e);
      }
    }
  }
  g.async.run.Cc = !1;
};
g.async.run.Ak = function(a, c) {
  this.Nk = a;
  this.scope = c;
};
g.promise = {};
g.promise.ip = function() {
};
g.Thenable = function() {
};
g.Thenable.prototype.then = function() {
};
g.Thenable.kg = "$goog_Thenable";
g.Thenable.kh = function(a) {
  g.s(a.prototype, "then", a.prototype.then);
  a.prototype[g.Thenable.kg] = !0;
};
g.Thenable.Yi = function(a) {
  if (!a) {
    return!1;
  }
  try {
    return!!a[g.Thenable.kg];
  } catch (c) {
    return!1;
  }
};
g.Promise = function(a, c) {
  this.O = g.Promise.F.sa;
  this.Pc = void 0;
  this.ia = this.qa = null;
  this.Zc = !1;
  0 < g.Promise.Ua ? this.Xb = 0 : 0 == g.Promise.Ua && (this.Wb = !1);
  g.Promise.ub && (this.ad = [], this.Ge(Error("created")), this.Be = 0);
  try {
    var d = this;
    a.call(c, function(a) {
      d.ua(g.Promise.F.Tb, a);
    }, function(a) {
      d.ua(g.Promise.F.va, a);
    });
  } catch (e) {
    this.ua(g.Promise.F.va, e);
  }
};
g.Promise.ub = !1;
g.Promise.Ua = 0;
g.Promise.F = {sa:0, jf:1, Tb:2, va:3};
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
      }, l = function(a) {
        d(a);
      }, m = 0, n;n = a[m];m++) {
        n.then(g.Ub(h, m), l);
      }
    } else {
      c(f);
    }
  });
};
g.Promise.Hq = function(a) {
  return new g.Promise(function(c, d) {
    var e = a.length, f = [];
    if (e) {
      for (var h = function(a) {
        c(a);
      }, l = function(a, c) {
        e--;
        f[a] = c;
        0 == e && d(f);
      }, m = 0, n;n = a[m];m++) {
        n.then(h, g.Ub(l, m));
      }
    } else {
      c(void 0);
    }
  });
};
g.Promise.Ns = function() {
  var a, c, d = new g.Promise(function(d, f) {
    a = d;
    c = f;
  });
  return new g.Promise.Pl(d, a, c);
};
g.Promise.prototype.then = function(a, c, d) {
  g.Promise.ub && this.Ge(Error("then"));
  return this.Xk(g.isFunction(a) ? a : null, g.isFunction(c) ? c : null, d);
};
g.Thenable.kh(g.Promise);
b = g.Promise.prototype;
b.cancel = function(a) {
  this.O == g.Promise.F.sa && g.async.run(function() {
    var c = new g.Promise.xb(a);
    this.mf(c);
  }, this);
};
b.mf = function(a) {
  this.O == g.Promise.F.sa && (this.qa ? this.qa.wj(this, a) : this.ua(g.Promise.F.va, a));
};
b.wj = function(a, c) {
  if (this.ia) {
    for (var d = 0, e = -1, f = 0, h;h = this.ia[f];f++) {
      if (h = h.gc) {
        if (d++, h == a && (e = f), 0 <= e && 1 < d) {
          break;
        }
      }
    }
    0 <= e && (this.O == g.Promise.F.sa && 1 == d ? this.mf(c) : (d = this.ia.splice(e, 1)[0], this.ef(d, g.Promise.F.va, c)));
  }
};
b.Sj = function(a) {
  this.ia && this.ia.length || this.O != g.Promise.F.Tb && this.O != g.Promise.F.va || this.af();
  this.ia || (this.ia = []);
  this.ia.push(a);
};
b.Xk = function(a, c, d) {
  var e = {gc:null, tf:null, uf:null};
  e.gc = new g.Promise(function(f, h) {
    e.tf = a ? function(c) {
      try {
        var e = a.call(d, c);
        f(e);
      } catch (n) {
        h(n);
      }
    } : f;
    e.uf = c ? function(a) {
      try {
        var e = c.call(d, a);
        !g.ja(e) && a instanceof g.Promise.xb ? h(a) : f(e);
      } catch (n) {
        h(n);
      }
    } : h;
  });
  e.gc.qa = this;
  this.Sj(e);
  return e.gc;
};
b.kf = function(a) {
  this.O = g.Promise.F.sa;
  this.ua(g.Promise.F.Tb, a);
};
b.lf = function(a) {
  this.O = g.Promise.F.sa;
  this.ua(g.Promise.F.va, a);
};
b.ua = function(a, c) {
  if (this.O == g.Promise.F.sa) {
    if (this == c) {
      a = g.Promise.F.va, c = new TypeError("Promise cannot resolve to itself");
    } else {
      if (g.Thenable.Yi(c)) {
        this.O = g.Promise.F.jf;
        c.then(this.kf, this.lf, this);
        return;
      }
      if (g.isObject(c)) {
        try {
          var d = c.then;
          if (g.isFunction(d)) {
            this.Zi(c, d);
            return;
          }
        } catch (e) {
          a = g.Promise.F.va, c = e;
        }
      }
    }
    this.Pc = c;
    this.O = a;
    this.af();
    a != g.Promise.F.va || c instanceof g.Promise.xb || g.Promise.Xi(this, c);
  }
};
b.Zi = function(a, c) {
  this.O = g.Promise.F.jf;
  var d = this, e = !1, f = function(a) {
    e || (e = !0, d.kf(a));
  }, h = function(a) {
    e || (e = !0, d.lf(a));
  };
  try {
    c.call(a, f, h);
  } catch (l) {
    h(l);
  }
};
b.af = function() {
  this.Zc || (this.Zc = !0, g.async.run(this.hl, this));
};
b.hl = function() {
  for (;this.ia && this.ia.length;) {
    var a = this.ia;
    this.ia = [];
    for (var c = 0;c < a.length;c++) {
      g.Promise.ub && this.Be++, this.ef(a[c], this.O, this.Pc);
    }
  }
  this.Zc = !1;
};
b.ef = function(a, c, d) {
  c == g.Promise.F.Tb ? a.tf(d) : (this.ak(), a.uf(d));
};
b.Ge = function(a) {
  if (g.Promise.ub && g.isString(a.stack)) {
    var c = a.stack.split("\n", 4)[3];
    a = a.message;
    a += Array(11 - a.length).join(" ");
    this.ad.push(a + c);
  }
};
b.wg = function(a) {
  if (g.Promise.ub && a && g.isString(a.stack) && this.ad.length) {
    for (var c = ["Promise trace:"], d = this;d;d = d.qa) {
      for (var e = this.Be;0 <= e;e--) {
        c.push(d.ad[e]);
      }
      c.push("Value: [" + (d.O == g.Promise.F.va ? "REJECTED" : "FULFILLED") + "] <" + String(d.Pc) + ">");
    }
    a.stack += "\n\n" + c.join("\n");
  }
};
b.ak = function() {
  if (0 < g.Promise.Ua) {
    for (var a = this;a && a.Xb;a = a.qa) {
      g.global.clearTimeout(a.Xb), a.Xb = 0;
    }
  } else {
    if (0 == g.Promise.Ua) {
      for (a = this;a && a.Wb;a = a.qa) {
        a.Wb = !1;
      }
    }
  }
};
g.Promise.Xi = function(a, c) {
  0 < g.Promise.Ua ? a.Xb = g.global.setTimeout(function() {
    a.wg(c);
    g.Promise.Nd.call(null, c);
  }, g.Promise.Ua) : 0 == g.Promise.Ua && (a.Wb = !0, g.async.run(function() {
    a.Wb && (a.wg(c), g.Promise.Nd.call(null, c));
  }));
};
g.Promise.Nd = g.async.Pd;
g.Promise.hs = function(a) {
  g.Promise.Nd = a;
};
g.Promise.xb = function(a) {
  g.debug.Error.call(this, a);
};
g.Aa(g.Promise.xb, g.debug.Error);
g.Promise.xb.prototype.name = "cancel";
g.Promise.Pl = function(a, c, d) {
  this.promise = a;
  this.resolve = c;
  this.reject = d;
};
g.result = {};
g.result.da = function() {
};
g.result.da.prototype.Qf = function() {
};
g.result.da.Va = {qf:"success", ERROR:"error", sa:"pending"};
b = g.result.da.prototype;
b.xd = function() {
};
b.Pf = function() {
};
b.getError = function() {
};
b.cancel = function() {
};
b.mc = function() {
};
g.result.da.vd = function() {
};
g.Aa(g.result.da.vd, Error);
g.result.Oa = function() {
  this.O = g.result.da.Va.sa;
  this.ra = [];
  this.md = this.ff = void 0;
};
g.Thenable.kh(g.result.Oa);
g.result.Oa.od = function() {
  g.debug.Error.call(this, "Multiple attempts to set the state of this Result");
};
g.Aa(g.result.Oa.od, g.debug.Error);
b = g.result.Oa.prototype;
b.xd = function() {
  return this.O;
};
b.Pf = function() {
  return this.ff;
};
b.getError = function() {
  return this.md;
};
b.Qf = function(a, c) {
  this.lc() ? this.ra.push({callback:a, scope:c || null}) : a.call(c, this);
};
b.Uk = function(a) {
  if (this.lc()) {
    this.ff = a, this.O = g.result.da.Va.qf, this.sf();
  } else {
    if (!this.mc()) {
      throw new g.result.Oa.od;
    }
  }
};
b.bg = function(a) {
  if (this.lc()) {
    this.md = a, this.O = g.result.da.Va.ERROR, this.sf();
  } else {
    if (!this.mc()) {
      throw new g.result.Oa.od;
    }
  }
};
b.sf = function() {
  var a = this.ra;
  this.ra = [];
  for (var c = 0;c < a.length;c++) {
    var d = a[c];
    d.callback.call(d.scope, this);
  }
};
b.lc = function() {
  return this.O == g.result.da.Va.sa;
};
b.cancel = function() {
  return this.lc() ? (this.bg(new g.result.da.vd), !0) : !1;
};
b.mc = function() {
  return this.O == g.result.da.Va.ERROR && this.md instanceof g.result.da.vd;
};
b.then = function(a, c, d) {
  var e, f, h = new g.Promise(function(a, c) {
    e = a;
    f = c;
  });
  this.Qf(function(a) {
    a.mc() ? h.cancel() : a.xd() == g.result.da.Va.qf ? e(a.Pf()) : a.xd() == g.result.da.Va.ERROR && f(a.getError());
  });
  return h.then(a, c, d);
};
g.result.Oa.Jq = function(a) {
  var c = new g.result.Oa;
  a.then(c.Uk, c.bg, c);
  return c;
};
k.Jh = function() {
  this.hasNetworkSoftware = this.networkDescription = this.gpu = this.cpu = this.googleUsername = null;
};
k.Rh = function() {
  this.dismissClicks = this.earliestTimeToShowWarning = this.sessionsBeforeWarning = 0;
  this.statsCollectNotificationDismissed = this.intelBadCpuWarningDismissed = this.castAppNotificationDismissed = !1;
};
k.B = function() {
  this.V = {};
  this.zk();
  this.Yf = this.Yj = this.Xj = !1;
};
g.im(k.B);
k.B.mn = "ChromeCast";
k.B.aa = {je:"receiverIdToken", Lh:"tabCaptureSettings", Ph:"userNotification", Oh:"siteTokens", Hh:"feedback", Ih:"fixedIps", Fh:"enableCloud", Eh:"cloudDevice", Gh:"enableHangouts", Mh:"mirrorLinkProtection", Nh:"sendStatsEnabled", Kh:"lastMirrorDataAutoSubmitTimeMillis", Qh:"useCastStreaming"};
k.B.rl = {appEngineReceiverIds:!0, receiverUrl:!0, flingEnabled:!0, customReceiverVersion:!0, enableCustomReceiverVersion:!0, sendUsageEnabled:!0};
k.B.prototype.zk = function() {
  this.V[k.B.aa.Lh] = new k.j.G;
  this.V[k.B.aa.Hh] = new k.Jh;
  this.V[k.B.aa.Ph] = new k.Rh;
  this.V[k.B.aa.Oh] = {};
  this.V[k.B.aa.Mh] = !0;
  this.V[k.B.aa.Nh] = !0;
  this.V[k.B.aa.Ih] = [];
  this.V[k.B.aa.Fh] = !1;
  this.V[k.B.aa.Eh] = {};
  this.V[k.B.aa.Gh] = !1;
  this.V[k.B.aa.Kh] = 0;
  this.V[k.B.aa.Qh] = k.Config.Sh && k.Config.Th;
};
k.B.prototype.sh = function() {
  this.Xj ? (g.log.info(this.jc, "Saving settings to storage."), this.Yj ? (localStorage.settings = JSON.stringify(this.V), this.Yf && (chrome.storage.local.clear(), this.Yf = !1)) : chrome.storage.local.set(this.V, g.bind(function() {
    chrome.runtime.lastError ? g.log.zc(this.jc, "Failed to save settings to chrome.storage.") : g.log.info(this.jc, "Successfully saved settings to storage.");
  }, this))) : g.log.zc(this.jc, "Aborting saving settings before initialization.");
};
k.B.prototype.ri = function() {
  var a = this.V[k.B.aa.je];
  a || (a = g.b.rh(), this.V[k.B.aa.je] = a, this.sh());
  return a;
};
g.h = {};
g.h.Ui = function(a) {
  for (var c = [], d = 0, e = 0;e < a.length;e++) {
    for (var f = a.charCodeAt(e);255 < f;) {
      c[d++] = f & 255, f >>= 8;
    }
    c[d++] = f;
  }
  return c;
};
g.h.Vi = function(a) {
  if (8192 > a.length) {
    return String.fromCharCode.apply(null, a);
  }
  for (var c = "", d = 0;d < a.length;d += 8192) {
    var e = g.a.slice(a, d, d + 8192), c = c + String.fromCharCode.apply(null, e)
  }
  return c;
};
g.h.Xp = function(a) {
  return g.a.map(a, function(a) {
    a = a.toString(16);
    return 1 < a.length ? a : "0" + a;
  }).join("");
};
g.h.fr = function(a) {
  for (var c = [], d = 0;d < a.length;d += 2) {
    c.push(parseInt(a.substring(d, d + 2), 16));
  }
  return c;
};
g.h.ss = function(a) {
  a = a.replace(/\r\n/g, "\n");
  for (var c = [], d = 0, e = 0;e < a.length;e++) {
    var f = a.charCodeAt(e);
    128 > f ? c[d++] = f : (2048 > f ? c[d++] = f >> 6 | 192 : (c[d++] = f >> 12 | 224, c[d++] = f >> 6 & 63 | 128), c[d++] = f & 63 | 128);
  }
  return c;
};
g.h.Ls = function(a) {
  for (var c = [], d = 0, e = 0;d < a.length;) {
    var f = a[d++];
    if (128 > f) {
      c[e++] = String.fromCharCode(f);
    } else {
      if (191 < f && 224 > f) {
        var h = a[d++];
        c[e++] = String.fromCharCode((f & 31) << 6 | h & 63);
      } else {
        var h = a[d++], l = a[d++];
        c[e++] = String.fromCharCode((f & 15) << 12 | (h & 63) << 6 | l & 63);
      }
    }
  }
  return c.join("");
};
g.h.Qs = function(a, c) {
  for (var d = [], e = 0;e < a.length;e++) {
    d.push(a[e] ^ c[e]);
  }
  return d;
};
g.h.n = {};
g.h.n.wb = null;
g.h.n.jd = null;
g.h.n.ac = null;
g.h.n.hd = null;
g.h.n.fh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
g.h.n.Xe = g.h.n.fh + "+/=";
g.h.n.Ei = g.h.n.fh + "-_.";
g.h.n.cf = g.userAgent.ig || g.userAgent.sb || g.userAgent.Ab || "function" == typeof g.global.atob;
g.h.n.Qe = function(a, c) {
  if (!g.M(a)) {
    throw Error("encodeByteArray takes an array as a parameter");
  }
  g.h.n.cc();
  for (var d = c ? g.h.n.ac : g.h.n.wb, e = [], f = 0;f < a.length;f += 3) {
    var h = a[f], l = f + 1 < a.length, m = l ? a[f + 1] : 0, n = f + 2 < a.length, p = n ? a[f + 2] : 0, q = h >> 2, h = (h & 3) << 4 | m >> 4, m = (m & 15) << 2 | p >> 6, p = p & 63;
    n || (p = 64, l || (m = 64));
    e.push(d[q], d[h], d[m], d[p]);
  }
  return e.join("");
};
g.h.n.zq = function(a, c) {
  return g.h.n.cf && !c ? g.global.btoa(a) : g.h.n.Qe(g.h.Ui(a), c);
};
g.h.n.vq = function(a, c) {
  return g.h.n.cf && !c ? g.global.atob(a) : g.h.Vi(g.h.n.Wi(a, c));
};
g.h.n.Wi = function(a, c) {
  g.h.n.cc();
  for (var d = c ? g.h.n.hd : g.h.n.jd, e = [], f = 0;f < a.length;) {
    var h = d[a.charAt(f++)], l = f < a.length ? d[a.charAt(f)] : 0;
    ++f;
    var m = f < a.length ? d[a.charAt(f)] : 64;
    ++f;
    var n = f < a.length ? d[a.charAt(f)] : 64;
    ++f;
    if (null == h || null == l || null == m || null == n) {
      throw Error();
    }
    e.push(h << 2 | l >> 4);
    64 != m && (e.push(l << 4 & 240 | m >> 2), 64 != n && e.push(m << 6 & 192 | n));
  }
  return e;
};
g.h.n.cc = function() {
  if (!g.h.n.wb) {
    g.h.n.wb = {};
    g.h.n.jd = {};
    g.h.n.ac = {};
    g.h.n.hd = {};
    for (var a = 0;a < g.h.n.Xe.length;a++) {
      g.h.n.wb[a] = g.h.n.Xe.charAt(a), g.h.n.jd[g.h.n.wb[a]] = a, g.h.n.ac[a] = g.h.n.Ei.charAt(a), g.h.n.hd[g.h.n.ac[a]] = a;
    }
  }
};
g.h.bf = function() {
  this.Ma = -1;
};
g.h.Sha1 = function() {
  g.h.bf.call(this);
  this.Ma = 64;
  this.J = [];
  this.fd = [];
  this.Pi = [];
  this.ic = [];
  this.ic[0] = 128;
  for (var a = 1;a < this.Ma;++a) {
    this.ic[a] = 0;
  }
  this.bc = this.hb = 0;
  this.reset();
};
g.Aa(g.h.Sha1, g.h.bf);
g.h.Sha1.prototype.reset = function() {
  this.J[0] = 1732584193;
  this.J[1] = 4023233417;
  this.J[2] = 2562383102;
  this.J[3] = 271733878;
  this.J[4] = 3285377520;
  this.bc = this.hb = 0;
};
g.h.Sha1.prototype.qc = function(a, c) {
  c || (c = 0);
  var d = this.Pi;
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
  for (var h = this.J[0], l = this.J[1], m = this.J[2], n = this.J[3], p = this.J[4], q, e = 0;80 > e;e++) {
    40 > e ? 20 > e ? (f = n ^ l & (m ^ n), q = 1518500249) : (f = l ^ m ^ n, q = 1859775393) : 60 > e ? (f = l & m | n & (l | m), q = 2400959708) : (f = l ^ m ^ n, q = 3395469782), f = (h << 5 | h >>> 27) + f + p + q + d[e] & 4294967295, p = n, n = m, m = (l << 30 | l >>> 2) & 4294967295, l = h, h = f;
  }
  this.J[0] = this.J[0] + h & 4294967295;
  this.J[1] = this.J[1] + l & 4294967295;
  this.J[2] = this.J[2] + m & 4294967295;
  this.J[3] = this.J[3] + n & 4294967295;
  this.J[4] = this.J[4] + p & 4294967295;
};
g.h.Sha1.prototype.update = function(a, c) {
  g.ja(c) || (c = a.length);
  for (var d = c - this.Ma, e = 0, f = this.fd, h = this.hb;e < c;) {
    if (0 == h) {
      for (;e <= d;) {
        this.qc(a, e), e += this.Ma;
      }
    }
    if (g.isString(a)) {
      for (;e < c;) {
        if (f[h] = a.charCodeAt(e), ++h, ++e, h == this.Ma) {
          this.qc(f);
          h = 0;
          break;
        }
      }
    } else {
      for (;e < c;) {
        if (f[h] = a[e], ++h, ++e, h == this.Ma) {
          this.qc(f);
          h = 0;
          break;
        }
      }
    }
  }
  this.hb = h;
  this.bc += c;
};
g.h.Sha1.prototype.qi = function() {
  var a = [], c = 8 * this.bc;
  56 > this.hb ? this.update(this.ic, 56 - this.hb) : this.update(this.ic, this.Ma - (this.hb - 56));
  for (var d = this.Ma - 1;56 <= d;d--) {
    this.fd[d] = c & 255, c /= 256;
  }
  this.qc(this.fd);
  for (d = c = 0;5 > d;d++) {
    for (var e = 24;0 <= e;e -= 8) {
      a[c] = this.J[d] >> e & 255, ++c;
    }
  }
  return a;
};
k.Ye = {};
k.Ye.Hi = function(a) {
  var c = k.B.Kc().ri(), d = new g.h.Sha1;
  d.update(a);
  d.update(c);
  return "r" + g.h.n.Qe(d.qi(), !0);
};
k.Fa = function(a, c) {
  this.Gi = a;
  this.Ze = c;
  this.Ji = null;
  this.Ii = k.Ye.Hi(c);
  new g.f.S;
  new g.f.Z;
  this.Fi = new g.f.Z;
};
k.Fa.ap = {CAST:"cast", DIAL:"dial", Un:"mesi", hn:"cloud"};
k.Fa.Ym = {AVAILABLE:"available", UNAVAILABLE:"unavailable", em:"unknown"};
k.Fa.un = {dn:"chromecast", em:"unknown"};
b = k.Fa.prototype;
b.isLocal = function() {
  return!!this.Ji;
};
b.Yk = function() {
  return this.Gi;
};
b.getId = function() {
  return this.Ii;
};
b.isAvailable = function(a) {
  return this.Fi.contains(a);
};
b.equals = function(a) {
  return this.Ze == a.Ze;
};
k.K = {};
k.K.Tc = "urn:x-cast:";
k.K.Ch = 128;
k.K.$j = function(a) {
  return a.length > k.K.Tc.length && g.b.Dh(a, k.K.Tc) && a.length <= k.K.Ch;
};
k.K.Nb = function(a) {
  return k.K.Tc + "com.google.cast." + a;
};
k.K.ol = {pp:k.K.Nb("tp.connection"), qp:k.K.Nb("tp.heartbeat"), bp:k.K.Nb("receiver"), Tn:k.K.Nb("media"), gm:k.K.Nb("webrtc")};
k.K.Kk = g.object.mh(k.K.ol);
k.K.Zj = function(a) {
  return k.K.Kk.hasOwnProperty(a);
};
k.xa = {};
k.xa.Xq = function(a, c) {
  if (!c.applications || 1 != c.applications.length) {
    return null;
  }
  var d = k.xa.Lk(a, c.applications[0]);
  d.receiver.volume = c.volume;
  g.Ja(c.isActiveInput) && (d.receiver.isActiveInput = c.isActiveInput);
  return d;
};
k.xa.Lk = function(a, c) {
  var d = k.xa.Qj(a), d = new chrome.cast.o(c.sessionId, c.appId, c.displayName, c.appImages, d);
  d.senderApps = c.senderApps;
  d.namespaces = c.namespaces || [];
  d.transportId = c.transportId;
  d.statusText = c.statusText;
  return d;
};
k.xa.Qj = function(a) {
  return new chrome.cast.Fa(a.getId(), a.Yk());
};
k.xa.Ar = function(a, c) {
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
k.xa.Gg = function(a) {
  g.isArray(a) ? a.forEach(k.xa.Gg) : g.isObject(a) && Object.keys(a).forEach(function(c) {
    g.Ic(a[c]) ? delete a[c] : k.xa.Gg(a[c]);
  });
};
k.xa.cr = function(a, c) {
  return a.namespaces.some(function(a) {
    return a.name == c;
  });
};
k.$f = function(a, c) {
  this.type = k.I.yg;
  this.requestId = null;
  this.volume = a;
  this.expectedVolume = c || null;
};
k.P = {};
k.P.gq = function(a) {
  return!a || !g.isString(a.sessionId) || !g.Y(a.media) || g.Y(a.autoplay) && !g.Ja(a.autoplay) || g.Y(a.currentTime) && !g.isNumber(a.currentTime) ? !1 : k.P.Rj(a.media);
};
k.P.Rj = function(a) {
  return!a || !g.isString(a.contentId) || 1E3 < a.contentId.length || !g.object.eb(chrome.cast.media.Md, a.streamType) || !g.isString(a.contentType) || g.Y(a.duration) && !g.isNumber(a.duration) ? !1 : !0;
};
k.P.Ri = function(a) {
  return!!a && g.Y(a.sessionId) && g.isString(a.namespaceName) && k.K.$j(a.namespaceName) && !k.K.Zj(a.namespaceName);
};
k.P.xj = function(a) {
  return a && g.isFunction(a.sessionListener) && g.isFunction(a.receiverListener) ? k.P.We(a.sessionRequest) : !1;
};
k.P.Ti = function(a) {
  return a ? !g.a.find(a, function(a) {
    return!((a.receiverType == chrome.cast.tb.CUSTOM || a.receiverType == chrome.cast.tb.DIAL) && g.Y(a.friendlyName) && 0 == a.capabilities.length && g.Ic(a.volume));
  }) : !1;
};
k.P.We = function(a) {
  return!a || !g.Y(a.appId) || g.Y(a.dialRequest) && (!g.isString(a.dialRequest.appName) || g.Y(a.dialRequest.launchParameter) && !g.isString(a.dialRequest.launchParameter)) ? !1 : !0;
};
k.P.Qi = function(a) {
  return a && g.Y(a.volume) && k.P.dg(a.volume) ? g.Y(a.expectedVolume) ? k.P.dg(a.expectedVolume) : !0 : !1;
};
k.P.dg = function(a) {
  return a ? g.Y(a.level) ? g.isNumber(a.level) && 0 <= a.level && 1 >= a.level : g.Ja(a.muted) : !1;
};
k.P.fq = function(a) {
  return!!a && g.Ja(a.doLaunch) && (!g.Y(a.launchParameter) || g.isString(a.launchParameter));
};
k.T = function(a, c, d) {
  this.If = a;
  this.rd = c;
  this.ud = g.isNumber(d) ? d : 0;
  this.sc = !1;
  this.zb = null;
};
k.T.Kj = 432E5;
k.T.prototype.Fk = function() {
  return this.sc;
};
k.T.prototype.ua = function() {
  this.sc = !0;
  this.rd = this.If = null;
  this.zb && (clearTimeout(this.zb), this.zb = null);
};
k.T.Xf = function() {
};
k.T.prototype.Hf = function() {
  var a = this.If;
  this.ua();
  return a || k.T.Xf;
};
k.T.prototype.Gf = function() {
  var a = this.rd;
  this.ua();
  return a || k.T.Xf;
};
k.T.prototype.df = function(a, c) {
  if (!this.sc && !this.zb) {
    var d = function() {
      if (!this.sc) {
        a && a();
        var d = this.rd;
        this.ua();
        if (0 < this.ud) {
          var f = new chrome.cast.Error(chrome.cast.ta.TIMEOUT);
          c && (f.description = c);
          d(f);
        }
      }
    }.bind(this);
    this.zb = setTimeout(d, 0 < this.ud ? this.ud : k.T.Kj);
  }
};
k.Jn = {};
k.la = function(a, c, d, e, f, h) {
  this.type = a;
  this.message = c;
  this.seqNum = d || null;
  this.clientId = e || null;
  this.appOrigin = null;
  this.timeoutMillis = g.isNumber(f) ? f : 0;
  this.receiverId = h || null;
  this.receiverList = null;
};
k.w = {gf:"iframe_init_result", dj:"fail_to_connect_to_extension", fn:"client_reconnect", Qb:"v2_message", xe:"app_message", Ej:"client_init", Lj:"log_message", Di:"request_session", Mj:"request_session_by_id", en:"client_disconnect", Si:"set_custom_receivers", Cf:"custom_dial_launch_response", Cj:"set_receiver_display_status", fj:"receiver_availability", ej:"receiver_action", Te:"new_session", Ue:"update_session", gj:"remove_session", Sm:"app_message_success", mp:"set_receiver_volume_success", jp:"set_custom_receivers_success", 
ERROR:"error", cj:"custom_dial_launch_request", lp:"set_receiver_display_status_success"};
k.nc = function() {
  this.r = {};
};
b = k.nc.prototype;
b.add = function(a, c) {
  var d = this.r[a];
  if (d) {
    return-1 == d.indexOf(c) && d.push(c), !1;
  }
  this.r[a] = [c];
  return!0;
};
b.remove = function(a, c) {
  var d = this.r[a];
  if (!d) {
    return!1;
  }
  var e = d.indexOf(c);
  if (-1 == e) {
    return!1;
  }
  if (1 == d.length) {
    return delete this.r[a], !0;
  }
  d.splice(e, 1);
  return!1;
};
b.ug = function(a) {
  if (!(a in this.r)) {
    return!1;
  }
  delete this.r[a];
  return!0;
};
b.pk = function(a) {
  var c = !1;
  Object.keys(this.r).forEach(function(d) {
    0 == d.indexOf(a) && (delete this.r[d], c = !0);
  }, this);
  return c;
};
b.get = function(a) {
  return this.r[a] || [];
};
b.contains = function(a, c) {
  return-1 != this.get(a).indexOf(c);
};
k.So = function() {
  this.type = k.I.sd;
  this.requestId = null;
  this.status = [];
  this.customData = null;
  this.sessionId = "";
};
chrome.cast.Cb = function(a, c) {
  this.Wk = a;
  this.Of = c;
  this.Rf = null;
};
chrome.cast.Cb.prototype.init = function() {
  window.addEventListener("message", this.Dm.bind(this), !1);
};
chrome.cast.Cb.prototype.bl = function(a) {
  this.Rf = a;
};
chrome.cast.Cb.prototype.Dm = function(a) {
  a.source != window && a.origin == this.Of && (a = a.data, a.type == k.w.gf && (this.Tj = !a.message), this.Rf(a));
};
chrome.cast.Cb.prototype.qd = function(a) {
  this.Tj && this.Wk.contentWindow.postMessage(a, this.Of);
};
k.pf = function() {
  this.jb = {};
  this.xc = {};
};
b = k.pf.prototype;
b.rk = function(a) {
  var c = this.jb[a];
  return c ? (c.media.forEach(function(a) {
    delete this.xc[this.wd(a)];
  }, this), delete this.jb[a], !0) : !1;
};
b.ek = function(a) {
  delete this.xc[this.wd(a)];
  var c = this.jb[a.sessionId];
  c && (a = c.media.indexOf(a), -1 != a && c.media.splice(a, 1));
};
b.fl = function(a) {
  if (a.sessionId == chrome.cast.o.Ff) {
    return a;
  }
  var c = this.jb[a.sessionId];
  if (c) {
    return c.statusText = a.statusText, c.namespaces = a.namespaces || [], c.customData = a.customData, c.receiver.volume = a.receiver.volume, c;
  }
  var c = new chrome.cast.o(a.sessionId, a.appId, a.displayName, a.appImages, a.receiver), d;
  for (d in a) {
    "media" == d ? c.media = a.media.map(function(a) {
      a = this.zf(a);
      a.gd = !1;
      a.ec = !0;
      return a;
    }.bind(this)) : a.hasOwnProperty(d) && (c[d] = a[d]);
  }
  return this.jb[a.sessionId] = c;
};
b.zf = function(a) {
  var c = this.wd(a), d = this.xc[c];
  d || (d = new chrome.cast.media.q(a.sessionId, a.mediaSessionId), this.xc[c] = d, (c = this.jb[a.sessionId]) && c.media.push(d));
  for (var e in a) {
    a.hasOwnProperty(e) && ("volume" == e ? (d.volume.level = a.volume.level, d.volume.muted = a.volume.muted) : d[e] = a[e]);
  }
  "currentTime" in a && (d.pd = g.now());
  return d;
};
b.wd = function(a) {
  return a.sessionId + "#" + a.mediaSessionId;
};
chrome.cast.oa = function(a) {
  this.bj = 1E3 * Math.floor(1E5 * Math.random());
  this.$b = a;
  this.ib = {};
  this.Pb = !1;
  this.gb = this.ba = this.Yc = null;
  this.kc = new k.nc;
  this.fc = new k.nc;
  this.yb = new k.nc;
  this.oc = [];
  this.dc = new k.pf(this.jc);
  this.le = !1;
};
b = chrome.cast.oa.prototype;
b.init = function() {
  this.$b.bl(this.al.bind(this));
};
b.Ek = function() {
  return "a" + this.bj++;
};
b.hj = function(a) {
  var c = a.seqNum;
  if (!c) {
    return!1;
  }
  var d = this.ib[c];
  if (d) {
    var e = a.message;
    a.type == k.w.ERROR ? d.Gf()(a.message) : d.Hf()(e);
    delete this.ib[c];
  }
  return!!d;
};
b.ij = function(a) {
  switch(a.type) {
    case k.w.Te:
    ;
    case k.w.Ue:
      a.message = this.Gj(a.message);
      break;
    case k.w.Qb:
      a = a.message, a.type == k.I.sd && a.status && (a.status = a.status.map(this.Fj.bind(this)));
  }
};
b.Gj = function(a) {
  return this.dc.fl(a);
};
b.al = function(a) {
  this.ij(a);
  if (!this.hj(a)) {
    switch(a.type) {
      case k.w.gf:
        this.jj(a);
        break;
      case k.w.fj:
        this.pj(a);
        break;
      case k.w.ej:
        this.oj(a);
        break;
      case k.w.dj:
        this.le = !0;
        break;
      case k.w.Te:
        this.nj(a);
        break;
      case k.w.Ue:
        this.rj(a);
        break;
      case k.w.gj:
        this.qj(a);
        break;
      case k.w.xe:
        this.lj(a.message);
        break;
      case k.w.Qb:
        this.mj(a);
        break;
      case k.w.cj:
        this.kj(a);
    }
  }
};
b.kj = function(a) {
  var c = a.message;
  this.ba && this.ba.customDialLaunchCallback && this.ba.customDialLaunchCallback(c).then(g.bind(function(c) {
    this.$b.qd(new k.la(k.w.Cf, c, a.seqNum));
  }, this), g.bind(function() {
    this.$b.qd(new k.la(k.w.Cf, null, a.seqNum));
  }, this));
};
b.mj = function(a) {
  switch(a.message.type) {
    case k.I.sd:
      this.yk(a.message);
  }
};
b.yk = function(a) {
  a.status.forEach(this.Tg.bind(this));
};
b.nj = function(a) {
  this.ba && this.ba.sessionListener(a.message);
};
b.rj = function(a) {
  (a = a.message) && this.yb.get(a.sessionId).forEach(function(a) {
    a(!0);
  });
};
b.qj = function(a) {
  a = a.message;
  this.dc.rk(a) && (this.kc.pk(a + "#"), this.fc.ug(a), this.yb.get(a).forEach(function(a) {
    a(!1);
  }), this.yb.ug(a));
};
b.lj = function(a) {
  this.om(a.sessionId, a.namespaceName).forEach(function(c) {
    c(a.namespaceName, a.message);
  });
};
b.pj = function(a) {
  if (this.ba) {
    var c = a.message;
    a.receiverList ? this.ba.receiverListener.apply(null, [c, a.receiverList]) : this.ba.receiverListener(c);
  }
};
b.oj = function(a) {
  this.oc.forEach(function(c) {
    c(a.message.receiver, a.message.receiverAction);
  }, this);
};
b.jj = function(a) {
  (a = a.message) ? (this.Yc = a, this.gb && this.gb.Gf()(a)) : (this.Pb = !0, this.nf(), this.gb && this.gb.Hf()(void 0));
};
b.Kd = function(a, c, d) {
  this.Ka(d) && (a = a || [], k.P.Ti(a) ? this.Ca(new k.la(k.w.Si, a), new k.T(c, d)) : d(new chrome.cast.Error(chrome.cast.ta.INVALID_PARAMETER)));
};
chrome.cast.oa.prototype.setReceiverVolume = function(a, c, d, e) {
  this.Ka(e) && (k.P.Qi(c) ? (c.sessionId = a, this.Ca(new k.la(k.w.Qb, c, null, null, chrome.cast.timeout.setReceiverVolume), new k.T(d, e, chrome.cast.timeout.setReceiverVolume))) : e(new chrome.cast.Error(chrome.cast.ta.INVALID_PARAMETER)));
};
b = chrome.cast.oa.prototype;
b.Nf = function(a, c, d, e) {
  this.Ka(d) && this.Ca(new k.la(k.w.Qb, a, null, null, e), new k.T(c, d, e));
};
b.Hd = function(a) {
  this.Ka(g.xf) && this.Ca(new k.la(k.w.Lj, a));
};
b.Sf = function(a, c, d, e, f, h) {
  null != a && (d.mediaSessionId = a.mediaSessionId, d.sessionId = a.sessionId);
  d.requestId = null;
  d.type = c;
  this.Nf(d, function(a) {
    a.status && 1 == a.status.length ? e(a.status[0]) : f(new chrome.cast.Error(chrome.cast.ta.SESSION_ERROR));
  }, f, h);
};
b.tk = function(a, c, d) {
  this.Sf(null, k.I.Zf, a, function(a) {
    a.ec = !0;
    a.gd = !0;
    c(a);
  }.bind(this), d, chrome.cast.media.timeout.load);
};
b.Wa = function(a, c, d, e, f, h) {
  this.Sf(a, c, d, function(a) {
    this.Tg(a);
    e();
  }.bind(this), f, h);
};
b.kk = function(a, c, d) {
  this.Ka(d) && (k.P.Ri(a) ? this.Ca(new k.la(k.w.xe, a, null, null, chrome.cast.timeout.sendCustomMessage), new k.T(c, d, chrome.cast.timeout.sendCustomMessage)) : d(new chrome.cast.Error(chrome.cast.ta.INVALID_PARAMETER)));
};
b.nf = function() {
  this.ba && this.Pb && this.Ca(new k.la(k.w.Ej, new k.Dj(this.ba)));
};
b.Ca = function(a, c) {
  var d = this.Ek();
  a.seqNum = d;
  if (this.ib[d] && !this.ib[d].Fk()) {
    throw "Try to send a request with the existing seqNum: " + a.seqNum;
  }
  c && (this.ib[d] = c, c.df(function() {
    delete this.ib[d];
  }.bind(this)));
  this.$b.qd(a);
};
b.Db = function(a, c, d) {
  k.P.xj(a) ? this.Yc ? d(this.Yc) : this.ba ? c() : (this.ba = a, this.Pb ? (this.nf(), c()) : (this.gb = new k.T(c, d, 5E3), this.gb.df())) : d(new chrome.cast.Error(chrome.cast.ta.INVALID_PARAMETER));
};
chrome.cast.oa.prototype.requestSession = function(a, c, d, e) {
  this.Ka(c) && (d && !k.P.We(d) ? c(new chrome.cast.Error(chrome.cast.ta.INVALID_PARAMETER)) : (!d && this.ba && (d = this.ba.sessionRequest), this.Ca(new k.la(k.w.Di, d, null, null, d.requestSessionTimeout, e), new k.T(a, c, 0))));
};
chrome.cast.oa.prototype.tg = function(a) {
  this.Ka(g.xf) && a && this.Ca(new k.la(k.w.Mj, a));
};
chrome.cast.oa.Ck = new chrome.cast.Error(chrome.cast.ta.API_NOT_INITIALIZED);
chrome.cast.oa.Dk = new chrome.cast.Error(chrome.cast.ta.EXTENSION_MISSING);
b = chrome.cast.oa.prototype;
b.Ka = function(a) {
  return this.Pb ? this.le ? (a(chrome.cast.oa.Dk), !1) : !0 : (a(chrome.cast.oa.Ck), !1);
};
b.Rd = function(a, c) {
  return a + "#" + c;
};
b.lk = function(a, c, d) {
  this.kc.add(this.Rd(a, c), d);
};
b.ok = function(a, c, d) {
  this.kc.remove(this.Rd(a, c), d);
};
b.om = function(a, c) {
  return this.kc.get(this.Rd(a, c));
};
b.Fd = function(a, c) {
  this.fc.add(a, c);
};
b.Id = function(a, c) {
  this.fc.remove(a, c);
};
b.mk = function(a, c) {
  -1 == a.Eb.indexOf(c) && a.Eb.push(c);
};
b.qk = function(a, c) {
  var d = a.Eb.indexOf(c);
  -1 != d && a.Eb.splice(d, 1);
};
b.Tg = function(a) {
  if (a.ec) {
    var c = a.playerState != chrome.cast.media.Bb.IDLE;
    a.Eb.forEach(function(a) {
      a(c);
    });
    c || this.dc.ek(a);
  } else {
    a.ec = !0, a.gd || this.fc.get(a.sessionId).forEach(function(c) {
      c(a);
    });
  }
};
b.Fj = function(a) {
  return this.dc.zf(a);
};
b.nk = function(a, c) {
  this.yb.add(a, c);
};
b.sk = function(a, c) {
  this.yb.remove(a, c);
};
b.Gd = function(a) {
  this.oc.push(a);
};
b.Jd = function(a) {
  a = this.oc.indexOf(a);
  0 <= a && this.oc.splice(a, 1);
};
b.Ld = function(a, c, d) {
  this.Ka(d) && this.Ca(new k.la(k.w.Cj, a), new k.T(c, d));
};
chrome.cast.isAvailable = !1;
g.g("chrome.cast.isAvailable", chrome.cast.isAvailable);
chrome.cast.t = null;
chrome.cast.Db = function(a, c, d) {
  chrome.cast.t.Db(a, c, d);
};
g.g("chrome.cast.initialize", chrome.cast.Db);
chrome.cast.requestSession = function(a, c, d, e) {
  chrome.cast.t.requestSession(a, c, d, e);
};
g.g("chrome.cast.requestSession", chrome.cast.requestSession);
chrome.cast.tg = function(a) {
  chrome.cast.t.tg(a);
};
chrome.cast.Gd = function(a) {
  chrome.cast.t.Gd(a);
};
g.g("chrome.cast.addReceiverActionListener", chrome.cast.Gd);
chrome.cast.Jd = function(a) {
  chrome.cast.t.Jd(a);
};
g.g("chrome.cast.removeReceiverActionListener", chrome.cast.Jd);
chrome.cast.Hd = function(a) {
  chrome.cast.t.Hd(a);
};
g.g("chrome.cast.logMessage", chrome.cast.Hd);
chrome.cast.Kd = function(a, c, d) {
  chrome.cast.t.Kd(a, c, d);
};
g.g("chrome.cast.setCustomReceivers", chrome.cast.Kd);
chrome.cast.Ld = function(a, c, d) {
  chrome.cast.t.Ld(a, c, d);
};
g.g("chrome.cast.setReceiverDisplayStatus", chrome.cast.Ld);
chrome.cast.o.prototype.Im = function(a, c, d) {
  chrome.cast.t.setReceiverVolume(this.sessionId, new k.$f(new chrome.cast.vc(a, null), this.receiver.volume), c, d);
};
g.s(chrome.cast.o.prototype, "setReceiverVolumeLevel", chrome.cast.o.prototype.Im);
chrome.cast.o.prototype.Hm = function(a, c, d) {
  chrome.cast.t.setReceiverVolume(this.sessionId, new k.$f(new chrome.cast.vc(null, a), this.receiver.volume), c, d);
};
g.s(chrome.cast.o.prototype, "setReceiverMuted", chrome.cast.o.prototype.Hm);
chrome.cast.o.prototype.stop = function(a, c) {
  chrome.cast.t.Nf(new k.fk(this.sessionId), a, c, chrome.cast.timeout.stopSession);
};
g.s(chrome.cast.o.prototype, "stop", chrome.cast.o.prototype.stop);
chrome.cast.o.prototype.sendMessage = function(a, c, d, e) {
  chrome.cast.t.kk(new k.gk(this.sessionId, a, c), d, e);
};
g.s(chrome.cast.o.prototype, "sendMessage", chrome.cast.o.prototype.sendMessage);
chrome.cast.o.prototype.Xd = function(a) {
  chrome.cast.t.nk(this.sessionId, a);
};
g.s(chrome.cast.o.prototype, "addUpdateListener", chrome.cast.o.prototype.Xd);
chrome.cast.o.prototype.be = function(a) {
  chrome.cast.t.sk(this.sessionId, a);
};
g.s(chrome.cast.o.prototype, "removeUpdateListener", chrome.cast.o.prototype.be);
chrome.cast.o.prototype.hm = function(a, c) {
  chrome.cast.t.lk(this.sessionId, a, c);
};
g.s(chrome.cast.o.prototype, "addMessageListener", chrome.cast.o.prototype.hm);
chrome.cast.o.prototype.Em = function(a, c) {
  chrome.cast.t.ok(this.sessionId, a, c);
};
g.s(chrome.cast.o.prototype, "removeMessageListener", chrome.cast.o.prototype.Em);
chrome.cast.o.prototype.Fd = function(a) {
  chrome.cast.t.Fd(this.sessionId, a);
};
g.s(chrome.cast.o.prototype, "addMediaListener", chrome.cast.o.prototype.Fd);
chrome.cast.o.prototype.Id = function(a) {
  chrome.cast.t.Id(this.sessionId, a);
};
g.s(chrome.cast.o.prototype, "removeMediaListener", chrome.cast.o.prototype.Id);
chrome.cast.o.prototype.wm = function(a, c, d) {
  a.sessionId = this.sessionId;
  chrome.cast.t.tk(a, c, d);
};
g.s(chrome.cast.o.prototype, "loadMedia", chrome.cast.o.prototype.wm);
chrome.cast.media.q.prototype.rc = function(a, c, d) {
  a || (a = new chrome.cast.media.vf);
  chrome.cast.t.Wa(this, k.I.wf, a, c, d, chrome.cast.media.timeout.rc);
};
g.s(chrome.cast.media.q.prototype, "getStatus", chrome.cast.media.q.prototype.rc);
chrome.cast.media.q.prototype.play = function(a, c, d) {
  a || (a = new chrome.cast.media.Ef);
  chrome.cast.t.Wa(this, k.I.Jj, a, c, d, chrome.cast.media.timeout.play);
};
g.s(chrome.cast.media.q.prototype, "play", chrome.cast.media.q.prototype.play);
chrome.cast.media.q.prototype.pause = function(a, c, d) {
  a || (a = new chrome.cast.media.Df);
  chrome.cast.t.Wa(this, k.I.Ij, a, c, d, chrome.cast.media.timeout.pause);
};
g.s(chrome.cast.media.q.prototype, "pause", chrome.cast.media.q.prototype.pause);
chrome.cast.media.q.prototype.seek = function(a, c, d) {
  chrome.cast.t.Wa(this, k.I.Nj, a, c, d, chrome.cast.media.timeout.seek);
};
g.s(chrome.cast.media.q.prototype, "seek", chrome.cast.media.q.prototype.seek);
chrome.cast.media.q.prototype.stop = function(a, c, d) {
  a || (a = new chrome.cast.media.Bf);
  chrome.cast.t.Wa(this, k.I.Af, a, c, d, chrome.cast.media.timeout.stop);
};
g.s(chrome.cast.media.q.prototype, "stop", chrome.cast.media.q.prototype.stop);
chrome.cast.media.q.prototype.uc = function(a, c, d) {
  chrome.cast.t.Wa(this, k.I.yf, a, c, d, chrome.cast.media.timeout.uc);
};
g.s(chrome.cast.media.q.prototype, "setVolume", chrome.cast.media.q.prototype.uc);
chrome.cast.media.q.prototype.wc = function(a, c, d) {
  chrome.cast.t.Wa(this, k.I.Hj, a, c, d, chrome.cast.media.timeout.wc);
};
g.s(chrome.cast.media.q.prototype, "editTracksInfo", chrome.cast.media.q.prototype.wc);
chrome.cast.media.q.prototype.Jm = function(a) {
  return-1 < this.supportedMediaCommands.indexOf(a);
};
g.s(chrome.cast.media.q.prototype, "supportsCommand", chrome.cast.media.q.prototype.Jm);
chrome.cast.media.q.prototype.pm = function() {
  if (this.playerState == chrome.cast.media.Bb.PLAYING && 0 <= this.pd) {
    var a = (g.now() - this.pd) / 1E3, a = this.currentTime + this.playbackRate * a;
    this.media && null != this.media.duration && a > this.media.duration && (a = this.media.duration);
    0 > a && (a = 0);
    return a;
  }
  return this.currentTime;
};
g.s(chrome.cast.media.q.prototype, "getEstimatedTime", chrome.cast.media.q.prototype.pm);
chrome.cast.media.q.prototype.Xd = function(a) {
  chrome.cast.t.mk(this, a);
};
g.s(chrome.cast.media.q.prototype, "addUpdateListener", chrome.cast.media.q.prototype.Xd);
chrome.cast.media.q.prototype.be = function(a) {
  chrome.cast.t.qk(this, a);
};
g.s(chrome.cast.media.q.prototype, "removeUpdateListener", chrome.cast.media.q.prototype.be);
chrome.cast.ce = function() {
  if (!chrome.cast.Jf && (chrome.cast.Jf = !0, chrome.cast.extensionId)) {
    var a = "chrome-extension://" + chrome.cast.extensionId, c = a + "/api_iframe.html", d = document.createElement("iframe");
    d.src = c + "?appOrigin=" + window.location.origin;
    d.setAttribute("style", "display:none");
    document.body.appendChild(d);
    a = new chrome.cast.Cb(d, a);
    a.init();
    chrome.cast.t = new chrome.cast.oa(a);
    chrome.cast.t.init();
    chrome.cast.isAvailable = !0;
    (a = window.__onGCastApiAvailable) && "function" == typeof a && a(!0);
  }
};
chrome.cast.Jf = !1;
"complete" == document.readyState ? chrome.cast.ce() : (window.addEventListener("load", chrome.cast.ce, !1), window.addEventListener("DOMContentLoaded", chrome.cast.ce, !1));
})();
