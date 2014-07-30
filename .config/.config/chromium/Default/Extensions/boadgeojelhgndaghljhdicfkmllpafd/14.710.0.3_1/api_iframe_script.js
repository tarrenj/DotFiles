var b, chrome = window.chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var h = h || {};
h.global = this;
h.T = function(a) {
  return void 0 !== a;
};
h.Ld = function(a, c, d) {
  a = a.split(".");
  d = d || h.global;
  a[0] in d || !d.execScript || d.execScript("var " + a[0]);
  for (var e;a.length && (e = a.shift());) {
    !a.length && h.T(c) ? d[e] = c : d = d[e] ? d[e] : d[e] = {};
  }
};
h.Ep = function(a, c) {
  h.Ld(a, c);
};
h.Ma = !0;
h.Rm = "en";
h.ig = !0;
h.zd = !1;
h.cr = function(a) {
  h.Ld(a);
};
h.or = function(a) {
  if (!h.Ma) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  }
};
h.Lp = function() {
};
h.be = function(a, c) {
  for (var d = a.split("."), e = c || h.global, f;f = d.shift();) {
    if (h.Sd(e[f])) {
      e = e[f];
    } else {
      return null;
    }
  }
  return e;
};
h.gq = function(a, c) {
  var d = c || h.global, e;
  for (e in a) {
    d[e] = a[e];
  }
};
h.Io = function(a, c, d) {
  if (h.Bf) {
    var e;
    a = a.replace(/\\/g, "/");
    for (var f = h.eb, g = 0;e = c[g];g++) {
      f.Fb[e] = a, a in f.Fd || (f.Fd[a] = {}), f.Fd[a][e] = !0;
    }
    for (e = 0;c = d[e];e++) {
      a in f.requires || (f.requires[a] = {}), f.requires[a][c] = !0;
    }
  }
};
h.Nr = !1;
h.am = !0;
h.require = function() {
};
h.rc = "";
h.Uk = function() {
};
h.lq = function(a) {
  return a;
};
h.Go = function() {
  throw Error("unimplemented abstract method");
};
h.Jo = function(a) {
  a.Oe = function() {
    if (a.Gb) {
      return a.Gb;
    }
    h.Ma && (h.Cf[h.Cf.length] = a);
    return a.Gb = new a;
  };
};
h.Cf = [];
h.Bf = !1;
h.Bf && (h.Ki = {}, h.eb = {Fd:{}, Fb:{}, requires:{}, uf:{}, sc:{}}, h.If = function() {
  var a = h.global.document;
  return "undefined" != typeof a && "write" in a;
}, h.Ek = function() {
  if (h.global.qj) {
    h.rc = h.global.qj;
  } else {
    if (h.If()) {
      for (var a = h.global.document.getElementsByTagName("script"), c = a.length - 1;0 <= c;--c) {
        var d = a[c].src, e = d.lastIndexOf("?"), e = -1 == e ? d.length : e;
        if ("base.js" == d.substr(e - 7, 7)) {
          h.rc = d.substr(0, e - 7);
          break;
        }
      }
    }
  }
}, h.sf = function(a) {
  var c = h.global.el || h.fj;
  !h.eb.sc[a] && c(a) && (h.eb.sc[a] = !0);
}, h.fj = function(a) {
  if (h.If()) {
    var c = h.global.document;
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
}, h.Qr = function() {
  function a(f) {
    if (!(f in e.sc)) {
      if (!(f in e.uf) && (e.uf[f] = !0, f in e.requires)) {
        for (var k in e.requires[f]) {
          if (!h.bl(k)) {
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
  var c = [], d = {}, e = h.eb, f;
  for (f in h.Ki) {
    e.sc[f] || a(f);
  }
  for (f = 0;f < c.length;f++) {
    if (c[f]) {
      h.sf(h.rc + c[f]);
    } else {
      throw Error("Undefined script input");
    }
  }
}, h.Xp = function(a) {
  return a in h.eb.Fb ? h.eb.Fb[a] : null;
}, h.Ek(), h.global.vl || h.sf(h.rc + "deps.js"));
h.V = function(a) {
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
h.ji = function(a) {
  return null === a;
};
h.Sd = function(a) {
  return null != a;
};
h.isArray = function(a) {
  return "array" == h.V(a);
};
h.D = function(a) {
  var c = h.V(a);
  return "array" == c || "object" == c && "number" == typeof a.length;
};
h.sq = function(a) {
  return h.isObject(a) && "function" == typeof a.getFullYear;
};
h.isString = function(a) {
  return "string" == typeof a;
};
h.ii = function(a) {
  return "boolean" == typeof a;
};
h.isNumber = function(a) {
  return "number" == typeof a;
};
h.isFunction = function(a) {
  return "function" == h.V(a);
};
h.isObject = function(a) {
  var c = typeof a;
  return "object" == c && null != a || "function" == c;
};
h.Db = function(a) {
  return a[h.Jb] || (a[h.Jb] = ++h.tj);
};
h.jq = function(a) {
  return!!a[h.Jb];
};
h.Wk = function(a) {
  "removeAttribute" in a && a.removeAttribute(h.Jb);
  try {
    delete a[h.Jb];
  } catch (c) {
  }
};
h.Jb = "closure_uid_" + (1E9 * Math.random() >>> 0);
h.tj = 0;
h.Qp = h.Db;
h.fr = h.Wk;
h.kj = function(a) {
  var c = h.V(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = h.kj(a[d]);
    }
    return c;
  }
  return a;
};
h.wj = function(a, c, d) {
  return a.call.apply(a.bind, arguments);
};
h.vj = function(a, c, d) {
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
h.bind = function(a, c, d) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? h.bind = h.wj : h.bind = h.vj;
  return h.bind.apply(null, arguments);
};
h.Ce = function(a, c) {
  var d = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = d.slice();
    c.push.apply(c, arguments);
    return a.apply(this, c);
  };
};
h.jg = function(a, c) {
  for (var d in c) {
    a[d] = c[d];
  }
};
h.now = h.ig && Date.now || function() {
  return+new Date;
};
h.fq = function(a) {
  if (h.global.execScript) {
    h.global.execScript(a, "JavaScript");
  } else {
    if (h.global.eval) {
      if (null == h.vc && (h.global.eval("var _et_ = 1;"), "undefined" != typeof h.global._et_ ? (delete h.global._et_, h.vc = !0) : h.vc = !1), h.vc) {
        h.global.eval(a);
      } else {
        var c = h.global.document, d = c.createElement("script");
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
h.vc = null;
h.Op = function(a, c) {
  var d = function(a) {
    return h.Tf[a] || a;
  }, e = function(a) {
    a = a.split("-");
    for (var c = [], e = 0;e < a.length;e++) {
      c.push(d(a[e]));
    }
    return c.join("-");
  }, e = h.Tf ? "BY_WHOLE" == h.uj ? d : e : function(a) {
    return a;
  };
  return c ? a + "-" + e(c) : e(a);
};
h.jr = function(a, c) {
  h.Tf = a;
  h.uj = c;
};
h.Sp = function(a, c) {
  c && (a = a.replace(/\{\$([^}]+)}/g, function(a, e) {
    return e in c ? c[e] : a;
  }));
  return a;
};
h.Tp = function(a) {
  return a;
};
h.k = function(a, c, d) {
  h.Ld(a, c, d);
};
h.ta = function(a, c, d) {
  a[c] = d;
};
h.ja = function(a, c) {
  function d() {
  }
  d.prototype = c.prototype;
  a.oa = c.prototype;
  a.prototype = new d;
  a.prototype.constructor = a;
  a.pj = function(a, d, g) {
    var k = Array.prototype.slice.call(arguments, 2);
    return c.prototype[d].apply(a, k);
  };
};
h.pj = function(a, c, d) {
  var e = arguments.callee.caller;
  if (h.zd || h.Ma && !e) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (e.oa) {
    return e.oa.constructor.apply(a, Array.prototype.slice.call(arguments, 1));
  }
  for (var f = Array.prototype.slice.call(arguments, 2), g = !1, k = a.constructor;k;k = k.oa && k.oa.constructor) {
    if (k.prototype[c] === e) {
      g = !0;
    } else {
      if (g) {
        return k.prototype[c].apply(a, f);
      }
    }
  }
  if (a[c] === e) {
    return a.constructor.prototype[c].apply(a, f);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
h.scope = function(a) {
  a.call(h.global);
};
h.Sj = !0;
h.Sj && (Function.prototype.bind = Function.prototype.bind || function(a, c) {
  if (1 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 1);
    d.unshift(this, a);
    return h.bind.apply(null, d);
  }
  return h.bind(this, a);
}, Function.prototype.Ce = function(a) {
  var c = Array.prototype.slice.call(arguments);
  c.unshift(this, null);
  return h.bind.apply(null, c);
}, Function.prototype.ja = function(a) {
  h.ja(this, a);
}, Function.prototype.jg = function(a) {
  h.jg(this.prototype, a);
});
h.ia = function(a, c) {
  var d = c.constructor, e = c.Si;
  d && d != Object.prototype.constructor || (d = function() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  d = h.ia.Ri(d, a);
  a && h.ja(d, a);
  delete c.constructor;
  delete c.Si;
  h.ia.yf(d.prototype, c);
  null != e && (e instanceof Function ? e(d) : h.ia.yf(d, e));
  return d;
};
h.ia.gj = h.Ma;
h.ia.Ri = function(a, c) {
  if (h.ia.gj && Object.seal instanceof Function) {
    if (c && c.prototype && c.prototype[h.hj]) {
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
h.ia.Df = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
h.ia.yf = function(a, c) {
  for (var d in c) {
    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
  for (var e = 0;e < h.ia.Df.length;e++) {
    d = h.ia.Df[e], Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
};
h.Ar = function() {
};
h.hj = "goog_defineClass_legacy_unsealable";
var m = {Ba:{Fm:"LAUNCH", Ff:"STOP", fk:"SET_VOLUME", Kj:"GET_STATUS", Zn:"RECEIVER_STATUS", Bo:"CONNECT", Co:"CLOSE", km:"GET_APP_AVAILABILITY", rj:"LOAD", Ym:"PAUSE", $m:"SEEK", Zm:"PLAY", Rj:"STOP_MEDIA", Pj:"MEDIA_GET_STATUS", Qj:"MEDIA_SET_VOLUME", Xm:"EDIT_TRACKS_INFO", xm:"INVALID_PLAYER_STATE", Qm:"LOAD_FAILED", Pm:"LOAD_CANCELLED", ym:"INVALID_REQUEST", an:"MEDIA_STATUS", Gm:"LAUNCH_ERROR", Ln:"PING", Un:"PONG"}, Kd:{}};
m.Kd[m.Ba.Rj] = m.Ba.Ff;
m.Kd[m.Ba.Qj] = m.Ba.fk;
m.Kd[m.Ba.Pj] = m.Ba.Kj;
m.jl = function(a, c, d) {
  this.sessionId = a;
  this.namespaceName = c;
  this.message = d;
};
m.qo = function(a) {
  this.type = m.Ba.Ff;
  this.requestId = null;
  this.sessionId = a || null;
};
chrome.cast.Pf = {TAB_AND_ORIGIN_SCOPED:"tab_and_origin_scoped", ORIGIN_SCOPED:"origin_scoped", PAGE_SCOPED:"page_scoped"};
h.k("chrome.cast.AutoJoinPolicy", chrome.cast.Pf);
chrome.cast.Qf = {CREATE_SESSION:"create_session", CAST_THIS_TAB:"cast_this_tab"};
h.k("chrome.cast.DefaultActionPolicy", chrome.cast.Qf);
chrome.cast.Jd = {VIDEO_OUT:"video_out", AUDIO_OUT:"audio_out", VIDEO_IN:"video_in", AUDIO_IN:"audio_in"};
h.k("chrome.cast.Capability", chrome.cast.Jd);
chrome.cast.Hj = {CANCEL:"cancel", TIMEOUT:"timeout", API_NOT_INITIALIZED:"api_not_initialized", INVALID_PARAMETER:"invalid_parameter", EXTENSION_NOT_COMPATIBLE:"extension_not_compatible", EXTENSION_MISSING:"extension_missing", RECEIVER_UNAVAILABLE:"receiver_unavailable", SESSION_ERROR:"session_error", CHANNEL_ERROR:"channel_error", LOAD_MEDIA_FAILED:"load_media_failed"};
h.k("chrome.cast.ErrorCode", chrome.cast.Hj);
chrome.cast.ck = {AVAILABLE:"available", UNAVAILABLE:"unavailable"};
h.k("chrome.cast.ReceiverAvailability", chrome.cast.ck);
chrome.cast.jk = {CHROME:"chrome", IOS:"ios", ANDROID:"android"};
h.k("chrome.cast.SenderPlatform", chrome.cast.jk);
chrome.cast.gg = {CAST:"cast", DIAL:"dial", HANGOUT:"hangout", CUSTOM:"custom"};
h.k("chrome.cast.ReceiverType", chrome.cast.gg);
chrome.cast.Cj = {RUNNING:"running", STOPPED:"stopped", ERROR:"error"};
h.k("chrome.cast.DialAppState", chrome.cast.Cj);
chrome.cast.bk = {CAST:"cast", STOP:"stop"};
h.k("chrome.cast.ReceiverAction", chrome.cast.bk);
chrome.cast.VERSION = [1, 2];
h.k("chrome.cast.VERSION", chrome.cast.VERSION);
chrome.cast.Error = function(a, c, d) {
  this.code = a;
  this.description = c || null;
  this.details = d || null;
};
h.k("chrome.cast.Error", chrome.cast.Error);
chrome.cast.ik = function(a) {
  this.platform = a;
  this.packageId = this.url = null;
};
h.k("chrome.cast.SenderApplication", chrome.cast.ik);
chrome.cast.Image = function(a) {
  this.url = a;
  this.width = this.height = null;
};
h.k("chrome.cast.Image", chrome.cast.Image);
chrome.cast.Sf = function(a, c) {
  this.level = h.T(a) ? a : null;
  this.muted = h.T(c) ? c : null;
};
h.k("chrome.cast.Volume", chrome.cast.Sf);
chrome.cast.media.Uj = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
h.k("chrome.cast.media.MediaCommand", chrome.cast.media.Uj);
chrome.cast.media.da = {GENERIC:0, TV_SHOW:1, MOVIE:2, MUSIC_TRACK:3, PHOTO:4};
h.k("chrome.cast.media.MetadataType", chrome.cast.media.da);
chrome.cast.media.Rf = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
h.k("chrome.cast.media.PlayerState", chrome.cast.media.Rf);
chrome.cast.media.ek = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
h.k("chrome.cast.media.ResumeState", chrome.cast.media.ek);
chrome.cast.media.hg = {BUFFERED:"buffered", LIVE:"live", OTHER:"other"};
h.k("chrome.cast.media.StreamType", chrome.cast.media.hg);
chrome.cast.media.Nj = {CANCELLED:"CANCELLED", INTERRUPTED:"INTERRUPTED", FINISHED:"FINISHED", ERROR:"ERROR"};
h.k("chrome.cast.media.IdleReason", chrome.cast.media.Nj);
chrome.cast.media.tk = {TEXT:"TEXT", AUDIO:"AUDIO", VIDEO:"VIDEO"};
h.k("chrome.cast.media.TrackType", chrome.cast.media.tk);
chrome.cast.media.qk = {SUBTITLES:"SUBTITLES", CAPTIONS:"CAPTIONS", DESCRIPTIONS:"DESCRIPTIONS", CHAPTERS:"CHAPTERS", METADATA:"METADATA"};
h.k("chrome.cast.media.TextTrackType", chrome.cast.media.qk);
chrome.cast.media.mk = {NONE:"NONE", OUTLINE:"OUTLINE", DROP_SHADOW:"DROP_SHADOW", RAISED:"RAISED", DEPRESSED:"DEPRESSED"};
h.k("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.mk);
chrome.cast.media.rk = {NONE:"NONE", NORMAL:"NORMAL", ROUNDED_CORNERS:"ROUNDED_CORNERS"};
h.k("chrome.cast.media.TextTrackWindowType", chrome.cast.media.rk);
chrome.cast.media.nk = {SANS_SERIF:"SANS_SERIF", MONOSPACED_SANS_SERIF:"MONOSPACED_SANS_SERIF", SERIF:"SERIF", MONOSPACED_SERIF:"MONOSPACED_SERIF", CASUAL:"CASUAL", CURSIVE:"CURSIVE", SMALL_CAPITALS:"SMALL_CAPITALS"};
h.k("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.nk);
chrome.cast.media.ok = {NORMAL:"NORMAL", BOLD:"BOLD", BOLD_ITALIC:"BOLD_ITALIC", ITALIC:"ITALIC"};
h.k("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.ok);
chrome.cast.media.Mj = function() {
  this.customData = null;
};
h.k("chrome.cast.media.GetStatusRequest", chrome.cast.media.Mj);
chrome.cast.media.Yj = function() {
  this.customData = null;
};
h.k("chrome.cast.media.PauseRequest", chrome.cast.media.Yj);
chrome.cast.media.$j = function() {
  this.customData = null;
};
h.k("chrome.cast.media.PlayRequest", chrome.cast.media.$j);
chrome.cast.media.hk = function() {
  this.customData = this.resumeState = this.currentTime = null;
};
h.k("chrome.cast.media.SeekRequest", chrome.cast.media.hk);
chrome.cast.media.lk = function() {
  this.customData = null;
};
h.k("chrome.cast.media.StopRequest", chrome.cast.media.lk);
chrome.cast.media.vk = function(a) {
  this.volume = a;
  this.customData = null;
};
h.k("chrome.cast.media.VolumeRequest", chrome.cast.media.vk);
chrome.cast.media.Oj = function(a) {
  this.type = m.Ba.rj;
  this.sessionId = this.requestId = null;
  this.media = a;
  this.activeTrackIds = null;
  this.autoplay = !0;
  this.customData = this.currentTime = null;
};
h.k("chrome.cast.media.LoadRequest", chrome.cast.media.Oj);
chrome.cast.media.Gj = function(a, c) {
  this.requestId = null;
  this.activeTrackIds = a || null;
  this.textTrackStyle = c || null;
};
h.k("chrome.cast.media.EditTracksInfoRequest", chrome.cast.media.Gj);
chrome.cast.media.Lj = function() {
  this.metadataType = this.type = chrome.cast.media.da.GENERIC;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = null;
};
h.k("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.Lj);
chrome.cast.media.Wj = function() {
  this.metadataType = this.type = chrome.cast.media.da.MOVIE;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = null;
};
h.k("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.Wj);
chrome.cast.media.uk = function() {
  this.metadataType = this.type = chrome.cast.media.da.TV_SHOW;
  this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = null;
};
h.k("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.uk);
chrome.cast.media.Xj = function() {
  this.metadataType = this.type = chrome.cast.media.da.MUSIC_TRACK;
  this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = null;
};
h.k("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.Xj);
chrome.cast.media.Zj = function() {
  this.metadataType = this.type = chrome.cast.media.da.PHOTO;
  this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = null;
};
h.k("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.Zj);
chrome.cast.media.Vj = function(a, c) {
  this.contentId = a;
  this.streamType = chrome.cast.media.hg.BUFFERED;
  this.contentType = c;
  this.customData = this.textTrackStyle = this.tracks = this.duration = this.metadata = null;
};
h.k("chrome.cast.media.MediaInfo", chrome.cast.media.Vj);
chrome.cast.media.Tj = function(a, c) {
  this.sessionId = a;
  this.mediaSessionId = c;
  this.media = null;
  this.playbackRate = 1;
  this.playerState = chrome.cast.media.Rf.IDLE;
  this.currentTime = 0;
  this.supportedMediaCommands = [];
  this.volume = new chrome.cast.Sf;
  this.customData = this.activeTrackIds = this.idleReason = null;
};
h.k("chrome.cast.media.Media", chrome.cast.media.Tj);
chrome.cast.media.Bj = "CC1AD845";
h.k("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.Bj);
chrome.cast.media.timeout = {};
h.k("chrome.cast.media.timeout", chrome.cast.media.timeout);
chrome.cast.media.timeout.load = 0;
h.ta(chrome.cast.media.timeout, "load", chrome.cast.media.timeout.load);
chrome.cast.media.timeout.Gk = 0;
h.ta(chrome.cast.media.timeout, "getStatus", chrome.cast.media.timeout.Gk);
chrome.cast.media.timeout.play = 0;
h.ta(chrome.cast.media.timeout, "play", chrome.cast.media.timeout.play);
chrome.cast.media.timeout.pause = 0;
h.ta(chrome.cast.media.timeout, "pause", chrome.cast.media.timeout.pause);
chrome.cast.media.timeout.seek = 0;
h.ta(chrome.cast.media.timeout, "seek", chrome.cast.media.timeout.seek);
chrome.cast.media.timeout.stop = 0;
h.ta(chrome.cast.media.timeout, "stop", chrome.cast.media.timeout.stop);
chrome.cast.media.timeout.Xk = 0;
h.ta(chrome.cast.media.timeout, "setVolume", chrome.cast.media.timeout.Xk);
chrome.cast.media.timeout.Bk = 0;
h.ta(chrome.cast.media.timeout, "editTracksInfo", chrome.cast.media.timeout.Bk);
chrome.cast.media.sk = function(a, c) {
  this.trackId = a;
  this.trackContentType = this.trackContentId = null;
  this.type = c;
  this.customData = this.subtype = this.language = this.name = null;
};
h.k("chrome.cast.media.Track", chrome.cast.media.sk);
chrome.cast.media.pk = function() {
  this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.fontScale = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = null;
};
h.k("chrome.cast.media.TextTrackStyle", chrome.cast.media.pk);
chrome.cast.yj = function(a, c, d, e, f) {
  this.sessionRequest = a;
  this.sessionListener = c;
  this.receiverListener = d;
  this.autoJoinPolicy = e || chrome.cast.Pf.TAB_AND_ORIGIN_SCOPED;
  this.defaultActionPolicy = f || chrome.cast.Qf.CREATE_SESSION;
  this.customDialLaunchCallback = null;
};
h.k("chrome.cast.ApiConfig", chrome.cast.yj);
chrome.cast.Fj = function(a, c) {
  this.appName = a;
  this.launchParameter = c || null;
};
h.k("chrome.cast.DialRequest", chrome.cast.Fj);
chrome.cast.Dj = function(a, c, d) {
  this.receiver = a;
  this.appState = c;
  this.extraData = d || null;
};
h.k("chrome.cast.DialLaunchData", chrome.cast.Dj);
chrome.cast.Ej = function(a, c) {
  this.doLaunch = a;
  this.launchParameter = c || null;
};
h.k("chrome.cast.DialLaunchResponse", chrome.cast.Ej);
chrome.cast.kk = function(a, c, d) {
  this.appId = a;
  this.capabilities = c || [chrome.cast.Jd.VIDEO_OUT, chrome.cast.Jd.AUDIO_OUT];
  this.dialRequest = null;
  this.requestSessionTimeout = d || chrome.cast.timeout.requestSession;
  this.language = null;
};
h.k("chrome.cast.SessionRequest", chrome.cast.kk);
chrome.cast.ak = function(a, c, d, e) {
  this.label = a;
  this.friendlyName = c;
  this.capabilities = d || [];
  this.volume = e || null;
  this.receiverType = chrome.cast.gg.CAST;
  this.displayStatus = this.isActiveInput = null;
};
h.k("chrome.cast.Receiver", chrome.cast.ak);
chrome.cast.dk = function(a, c) {
  this.statusText = a;
  this.appImages = c;
};
h.k("chrome.cast.ReceiverDisplayStatus", chrome.cast.dk);
chrome.cast.uc = function(a, c, d, e, f) {
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
h.k("chrome.cast.Session", chrome.cast.uc);
chrome.cast.uc.zj = "custom_receiver_session_id";
h.ta(chrome.cast.uc, "CUSTOM_RECEIVER_SESSION_ID", chrome.cast.uc.zj);
chrome.cast.timeout = {};
h.k("chrome.cast.timeout", chrome.cast.timeout);
chrome.cast.timeout.requestSession = 1E4;
chrome.cast.timeout.stopSession = 3E3;
chrome.cast.timeout.setReceiverVolume = 3E3;
chrome.cast.timeout.sendCustomMessage = 3E3;
m.eg = function(a, c, d) {
  h.isNumber(d);
  this.Oa = !1;
};
m.eg.rl = 432E5;
m.eg.Wq = function() {
};
m.Bm = {};
m.pd = function(a, c, d, e, f, g) {
  this.type = a;
  this.message = c;
  this.seqNum = d || null;
  this.clientId = e || null;
  this.appOrigin = null;
  this.timeoutMillis = h.isNumber(f) ? f : 0;
  this.receiverId = g || null;
  this.receiverList = null;
};
m.L = {Oi:"iframe_init_result", Xe:"fail_to_connect_to_extension", hi:"client_reconnect", Ci:"v2_message", ri:"app_message", ul:"client_init", Sm:"log_message", $n:"request_session", ao:"request_session_by_id", tl:"client_disconnect", lo:"set_custom_receivers", El:"custom_dial_launch_response", mo:"set_receiver_display_status", wi:"receiver_availability", vi:"receiver_action", ui:"new_session", Bi:"update_session", xi:"remove_session", si:"app_message_success", Ai:"set_receiver_volume_success", yi:"set_custom_receivers_success", 
ERROR:"error", ti:"custom_dial_launch_request", zi:"set_receiver_display_status_success"};
h.debug = {};
h.debug.Error = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, h.debug.Error);
  } else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
};
h.ja(h.debug.Error, Error);
h.debug.Error.prototype.name = "CustomError";
h.ff = {};
h.ff.ei = {di:1, il:2, TEXT:3, pl:4, dm:5, cm:6, Wn:7, wl:8, Jl:9, Ll:10, Kl:11, Dn:12};
h.c = {};
h.c.Vc = !1;
h.c.jh = {ih:"\u00a0"};
h.c.Bc = function(a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
h.c.pg = function(a, c) {
  var d = a.length - c.length;
  return 0 <= d && a.indexOf(c, d) == d;
};
h.c.kp = function(a, c) {
  return 0 == h.c.Ee(c, a.substr(0, c.length));
};
h.c.ip = function(a, c) {
  return 0 == h.c.Ee(c, a.substr(a.length - c.length, c.length));
};
h.c.jp = function(a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
h.c.oh = function(a, c) {
  for (var d = a.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1);f.length && 1 < d.length;) {
    e += d.shift() + f.shift();
  }
  return e + d.join("%s");
};
h.c.qp = function(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
h.c.M = function(a) {
  return/^[\s\xa0]*$/.test(a);
};
h.c.uq = function(a) {
  return h.c.M(h.c.Wg(a));
};
h.c.qq = function(a) {
  return!/[^\t\n\r ]/.test(a);
};
h.c.nq = function(a) {
  return!/[^a-zA-Z]/.test(a);
};
h.c.Aq = function(a) {
  return!/[^0-9]/.test(a);
};
h.c.oq = function(a) {
  return!/[^a-zA-Z0-9]/.test(a);
};
h.c.Eq = function(a) {
  return " " == a;
};
h.c.Fq = function(a) {
  return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a;
};
h.c.yr = function(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ");
};
h.c.hp = function(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n");
};
h.c.Uq = function(a) {
  return a.replace(/\xa0|\s/g, " ");
};
h.c.Tq = function(a) {
  return a.replace(/\xa0|[ \t]+/g, " ");
};
h.c.pp = function(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
h.c.trim = function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
h.c.trimLeft = function(a) {
  return a.replace(/^[\s\xa0]+/, "");
};
h.c.trimRight = function(a) {
  return a.replace(/[\s\xa0]+$/, "");
};
h.c.Ee = function(a, c) {
  var d = String(a).toLowerCase(), e = String(c).toLowerCase();
  return d < e ? -1 : d == e ? 0 : 1;
};
h.c.Ge = /(\.\d+)|(\d+)|(\D+)/g;
h.c.Xq = function(a, c) {
  if (a == c) {
    return 0;
  }
  if (!a) {
    return-1;
  }
  if (!c) {
    return 1;
  }
  for (var d = a.toLowerCase().match(h.c.Ge), e = c.toLowerCase().match(h.c.Ge), f = Math.min(d.length, e.length), g = 0;g < f;g++) {
    var k = d[g], l = e[g];
    if (k != l) {
      return d = parseInt(k, 10), !isNaN(d) && (e = parseInt(l, 10), !isNaN(e) && d - e) ? d - e : k < l ? -1 : 1;
    }
  }
  return d.length != e.length ? d.length - e.length : a < c ? -1 : 1;
};
h.c.ib = function(a) {
  return encodeURIComponent(String(a));
};
h.c.Qb = function(a) {
  return decodeURIComponent(a.replace(/\+/g, " "));
};
h.c.nh = function(a, c) {
  return a.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>");
};
h.c.xb = function(a, c) {
  if (c) {
    a = a.replace(h.c.je, "&amp;").replace(h.c.me, "&lt;").replace(h.c.le, "&gt;").replace(h.c.oe, "&quot;").replace(h.c.pe, "&#39;").replace(h.c.ne, "&#0;"), h.c.Vc && (a = a.replace(h.c.ke, "&#101;"));
  } else {
    if (!h.c.Ng.test(a)) {
      return a;
    }
    -1 != a.indexOf("&") && (a = a.replace(h.c.je, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(h.c.me, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(h.c.le, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(h.c.oe, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(h.c.pe, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(h.c.ne, "&#0;"));
    h.c.Vc && -1 != a.indexOf("e") && (a = a.replace(h.c.ke, "&#101;"));
  }
  return a;
};
h.c.je = /&/g;
h.c.me = /</g;
h.c.le = />/g;
h.c.oe = /"/g;
h.c.pe = /'/g;
h.c.ne = /\x00/g;
h.c.ke = /e/g;
h.c.Ng = h.c.Vc ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
h.c.Ae = function(a) {
  return h.c.contains(a, "&") ? "document" in h.global ? h.c.De(a) : h.c.gh(a) : a;
};
h.c.Jr = function(a, c) {
  return h.c.contains(a, "&") ? h.c.De(a, c) : a;
};
h.c.De = function(a, c) {
  var d = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, e;
  e = c ? c.createElement("div") : h.global.document.createElement("div");
  return a.replace(h.c.mh, function(a, c) {
    var k = d[a];
    if (k) {
      return k;
    }
    if ("#" == c.charAt(0)) {
      var l = Number("0" + c.substr(1));
      isNaN(l) || (k = String.fromCharCode(l));
    }
    k || (e.innerHTML = a + " ", k = e.firstChild.nodeValue.slice(0, -1));
    return d[a] = k;
  });
};
h.c.gh = function(a) {
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
h.c.mh = /&([^;\s<&]+);?/g;
h.c.Or = function(a, c) {
  return h.c.nh(a.replace(/  /g, " &#160;"), c);
};
h.c.ar = function(a) {
  return a.replace(/(^|[\n ]) /g, "$1" + h.c.jh.ih);
};
h.c.zr = function(a, c) {
  for (var d = c.length, e = 0;e < d;e++) {
    var f = 1 == d ? c : c.charAt(e);
    if (a.charAt(0) == f && a.charAt(a.length - 1) == f) {
      return a.substring(1, a.length - 1);
    }
  }
  return a;
};
h.c.truncate = function(a, c, d) {
  d && (a = h.c.Ae(a));
  a.length > c && (a = a.substring(0, c - 3) + "...");
  d && (a = h.c.xb(a));
  return a;
};
h.c.Ir = function(a, c, d, e) {
  d && (a = h.c.Ae(a));
  if (e && a.length > c) {
    e > c && (e = c), a = a.substring(0, c - e) + "..." + a.substring(a.length - e);
  } else {
    if (a.length > c) {
      e = Math.floor(c / 2);
      var f = a.length - e;
      a = a.substring(0, e + c % 2) + "..." + a.substring(f);
    }
  }
  d && (a = h.c.xb(a));
  return a;
};
h.c.Zc = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
h.c.hc = {"'":"\\'"};
h.c.quote = function(a) {
  a = String(a);
  if (a.quote) {
    return a.quote();
  }
  for (var c = ['"'], d = 0;d < a.length;d++) {
    var e = a.charAt(d), f = e.charCodeAt(0);
    c[d + 1] = h.c.Zc[e] || (31 < f && 127 > f ? e : h.c.Be(e));
  }
  c.push('"');
  return c.join("");
};
h.c.Hp = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    c[d] = h.c.Be(a.charAt(d));
  }
  return c.join("");
};
h.c.Be = function(a) {
  if (a in h.c.hc) {
    return h.c.hc[a];
  }
  if (a in h.c.Zc) {
    return h.c.hc[a] = h.c.Zc[a];
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
  return h.c.hc[a] = c;
};
h.c.Er = function(a) {
  for (var c = {}, d = 0;d < a.length;d++) {
    c[a.charAt(d)] = !0;
  }
  return c;
};
h.c.contains = function(a, c) {
  return-1 != a.indexOf(c);
};
h.c.rg = function(a, c) {
  return h.c.contains(a.toLowerCase(), c.toLowerCase());
};
h.c.wp = function(a, c) {
  return a && c ? a.split(c).length - 1 : 0;
};
h.c.mb = function(a, c, d) {
  var e = a;
  0 <= c && c < a.length && 0 < d && (e = a.substr(0, c) + a.substr(c + d, a.length - c - d));
  return e;
};
h.c.remove = function(a, c) {
  var d = new RegExp(h.c.bd(c), "");
  return a.replace(d, "");
};
h.c.removeAll = function(a, c) {
  var d = new RegExp(h.c.bd(c), "g");
  return a.replace(d, "");
};
h.c.bd = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
h.c.repeat = function(a, c) {
  return Array(c + 1).join(a);
};
h.c.Zq = function(a, c, d) {
  a = h.T(d) ? a.toFixed(d) : String(a);
  d = a.indexOf(".");
  -1 == d && (d = a.length);
  return h.c.repeat("0", Math.max(0, c - d)) + a;
};
h.c.Wg = function(a) {
  return null == a ? "" : String(a);
};
h.c.og = function(a) {
  return Array.prototype.join.call(arguments, "");
};
h.c.Od = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ h.now()).toString(36);
};
h.c.cc = function(a, c) {
  for (var d = 0, e = h.c.trim(String(a)).split("."), f = h.c.trim(String(c)).split("."), g = Math.max(e.length, f.length), k = 0;0 == d && k < g;k++) {
    var l = e[k] || "", n = f[k] || "", p = RegExp("(\\d*)(\\D*)", "g"), t = RegExp("(\\d*)(\\D*)", "g");
    do {
      var q = p.exec(l) || ["", "", ""], r = t.exec(n) || ["", "", ""];
      if (0 == q[0].length && 0 == r[0].length) {
        break;
      }
      d = h.c.cd(0 == q[1].length ? 0 : parseInt(q[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || h.c.cd(0 == q[2].length, 0 == r[2].length) || h.c.cd(q[2], r[2]);
    } while (0 == d);
  }
  return d;
};
h.c.cd = function(a, c) {
  return a < c ? -1 : a > c ? 1 : 0;
};
h.c.lh = 4294967296;
h.c.kq = function(a) {
  for (var c = 0, d = 0;d < a.length;++d) {
    c = 31 * c + a.charCodeAt(d), c %= h.c.lh;
  }
  return c;
};
h.c.ph = 2147483648 * Math.random() | 0;
h.c.Bp = function() {
  return "goog_" + h.c.ph++;
};
h.c.Fr = function(a) {
  var c = Number(a);
  return 0 == c && h.c.M(a) ? NaN : c;
};
h.c.zq = function(a) {
  return/^[a-z]+([A-Z][a-z]*)*$/.test(a);
};
h.c.Gq = function(a) {
  return/^([A-Z][a-z]*)+$/.test(a);
};
h.c.Dr = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, d) {
    return d.toUpperCase();
  });
};
h.c.Gr = function(a) {
  return String(a).replace(/([A-Z])/g, "-$1").toLowerCase();
};
h.c.Hr = function(a, c) {
  var d = h.isString(c) ? h.c.bd(c) : "\\s";
  return a.replace(new RegExp("(^" + (d ? "|[" + d + "]+" : "") + ")([a-z])", "g"), function(a, c, d) {
    return c + d.toUpperCase();
  });
};
h.c.parseInt = function(a) {
  isFinite(a) && (a = String(a));
  return h.isString(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
};
h.c.tr = function(a, c, d) {
  a = a.split(c);
  for (var e = [];0 < d && a.length;) {
    e.push(a.shift()), d--;
  }
  a.length && e.push(a.join(c));
  return e;
};
h.l = {};
h.l.aa = h.Ma;
h.l.pc = function(a, c) {
  c.unshift(a);
  h.debug.Error.call(this, h.c.oh.apply(null, c));
  c.shift();
};
h.ja(h.l.pc, h.debug.Error);
h.l.pc.prototype.name = "AssertionError";
h.l.Aj = function(a) {
  throw a;
};
h.l.xd = h.l.Aj;
h.l.qa = function(a, c, d, e) {
  var f = "Assertion failed";
  if (d) {
    var f = f + (": " + d), g = e
  } else {
    a && (f += ": " + a, g = c);
  }
  a = new h.l.pc("" + f, g || []);
  h.l.xd(a);
};
h.l.kr = function(a) {
  h.l.aa && (h.l.xd = a);
};
h.l.assert = function(a, c, d) {
  h.l.aa && !a && h.l.qa("", null, c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.l.Sa = function(a, c) {
  h.l.aa && h.l.xd(new h.l.pc("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)));
};
h.l.Xo = function(a, c, d) {
  h.l.aa && !h.isNumber(a) && h.l.qa("Expected number but got %s: %s.", [h.V(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.l.$o = function(a, c, d) {
  h.l.aa && !h.isString(a) && h.l.qa("Expected string but got %s: %s.", [h.V(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.l.Vo = function(a, c, d) {
  h.l.aa && !h.isFunction(a) && h.l.qa("Expected function but got %s: %s.", [h.V(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.l.Yo = function(a, c, d) {
  h.l.aa && !h.isObject(a) && h.l.qa("Expected object but got %s: %s.", [h.V(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.l.So = function(a, c, d) {
  h.l.aa && !h.isArray(a) && h.l.qa("Expected array but got %s: %s.", [h.V(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.l.To = function(a, c, d) {
  h.l.aa && !h.ii(a) && h.l.qa("Expected boolean but got %s: %s.", [h.V(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.l.Uo = function(a, c, d) {
  !h.l.aa || h.isObject(a) && a.nodeType == h.ff.ei.di || h.l.qa("Expected Element but got %s: %s.", [h.V(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.l.Wo = function(a, c, d, e) {
  !h.l.aa || a instanceof c || h.l.qa("instanceof check failed.", null, d, Array.prototype.slice.call(arguments, 3));
  return a;
};
h.l.Zo = function() {
  for (var a in Object.prototype) {
    h.l.Sa(a + " should not be enumerable in Object.prototype.");
  }
};
h.a = {};
h.sa = h.ig;
h.a.ra = !1;
h.a.Vd = function(a) {
  return a[a.length - 1];
};
h.a.Iq = h.a.Vd;
h.a.p = Array.prototype;
h.a.indexOf = h.sa && (h.a.ra || h.a.p.indexOf) ? function(a, c, d) {
  return h.a.p.indexOf.call(a, c, d);
} : function(a, c, d) {
  d = null == d ? 0 : 0 > d ? Math.max(0, a.length + d) : d;
  if (h.isString(a)) {
    return h.isString(c) && 1 == c.length ? a.indexOf(c, d) : -1;
  }
  for (;d < a.length;d++) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return-1;
};
h.a.lastIndexOf = h.sa && (h.a.ra || h.a.p.lastIndexOf) ? function(a, c, d) {
  return h.a.p.lastIndexOf.call(a, c, null == d ? a.length - 1 : d);
} : function(a, c, d) {
  d = null == d ? a.length - 1 : d;
  0 > d && (d = Math.max(0, a.length + d));
  if (h.isString(a)) {
    return h.isString(c) && 1 == c.length ? a.lastIndexOf(c, d) : -1;
  }
  for (;0 <= d;d--) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return-1;
};
h.a.forEach = h.sa && (h.a.ra || h.a.p.forEach) ? function(a, c, d) {
  h.a.p.forEach.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = h.isString(a) ? a.split("") : a, g = 0;g < e;g++) {
    g in f && c.call(d, f[g], g, a);
  }
};
h.a.eh = function(a, c, d) {
  for (var e = a.length, f = h.isString(a) ? a.split("") : a, e = e - 1;0 <= e;--e) {
    e in f && c.call(d, f[e], e, a);
  }
};
h.a.filter = h.sa && (h.a.ra || h.a.p.filter) ? function(a, c, d) {
  return h.a.p.filter.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = [], g = 0, k = h.isString(a) ? a.split("") : a, l = 0;l < e;l++) {
    if (l in k) {
      var n = k[l];
      c.call(d, n, l, a) && (f[g++] = n);
    }
  }
  return f;
};
h.a.map = h.sa && (h.a.ra || h.a.p.map) ? function(a, c, d) {
  return h.a.p.map.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = Array(e), g = h.isString(a) ? a.split("") : a, k = 0;k < e;k++) {
    k in g && (f[k] = c.call(d, g[k], k, a));
  }
  return f;
};
h.a.reduce = h.sa && (h.a.ra || h.a.p.reduce) ? function(a, c, d, e) {
  e && (c = h.bind(c, e));
  return h.a.p.reduce.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  h.a.forEach(a, function(d, k) {
    f = c.call(e, f, d, k, a);
  });
  return f;
};
h.a.reduceRight = h.sa && (h.a.ra || h.a.p.reduceRight) ? function(a, c, d, e) {
  e && (c = h.bind(c, e));
  return h.a.p.reduceRight.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  h.a.eh(a, function(d, k) {
    f = c.call(e, f, d, k, a);
  });
  return f;
};
h.a.some = h.sa && (h.a.ra || h.a.p.some) ? function(a, c, d) {
  return h.a.p.some.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = h.isString(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && c.call(d, f[g], g, a)) {
      return!0;
    }
  }
  return!1;
};
h.a.every = h.sa && (h.a.ra || h.a.p.every) ? function(a, c, d) {
  return h.a.p.every.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = h.isString(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && !c.call(d, f[g], g, a)) {
      return!1;
    }
  }
  return!0;
};
h.a.count = function(a, c, d) {
  var e = 0;
  h.a.forEach(a, function(a, g, k) {
    c.call(d, a, g, k) && ++e;
  }, d);
  return e;
};
h.a.find = function(a, c, d) {
  c = h.a.we(a, c, d);
  return 0 > c ? null : h.isString(a) ? a.charAt(c) : a[c];
};
h.a.we = function(a, c, d) {
  for (var e = a.length, f = h.isString(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && c.call(d, f[g], g, a)) {
      return g;
    }
  }
  return-1;
};
h.a.Jp = function(a, c, d) {
  c = h.a.bh(a, c, d);
  return 0 > c ? null : h.isString(a) ? a.charAt(c) : a[c];
};
h.a.bh = function(a, c, d) {
  for (var e = a.length, f = h.isString(a) ? a.split("") : a, e = e - 1;0 <= e;e--) {
    if (e in f && c.call(d, f[e], e, a)) {
      return e;
    }
  }
  return-1;
};
h.a.contains = function(a, c) {
  return 0 <= h.a.indexOf(a, c);
};
h.a.M = function(a) {
  return 0 == a.length;
};
h.a.clear = function(a) {
  if (!h.isArray(a)) {
    for (var c = a.length - 1;0 <= c;c--) {
      delete a[c];
    }
  }
  a.length = 0;
};
h.a.insert = function(a, c) {
  h.a.contains(a, c) || a.push(c);
};
h.a.ye = function(a, c, d) {
  h.a.splice(a, d, 0, c);
};
h.a.mq = function(a, c, d) {
  h.Ce(h.a.splice, a, d, 0).apply(null, c);
};
h.a.insertBefore = function(a, c, d) {
  var e;
  2 == arguments.length || 0 > (e = h.a.indexOf(a, d)) ? a.push(c) : h.a.ye(a, c, e);
};
h.a.remove = function(a, c) {
  var d = h.a.indexOf(a, c), e;
  (e = 0 <= d) && h.a.mb(a, d);
  return e;
};
h.a.mb = function(a, c) {
  return 1 == h.a.p.splice.call(a, c, 1).length;
};
h.a.gr = function(a, c, d) {
  c = h.a.we(a, c, d);
  return 0 <= c ? (h.a.mb(a, c), !0) : !1;
};
h.a.concat = function(a) {
  return h.a.p.concat.apply(h.a.p, arguments);
};
h.a.join = function(a) {
  return h.a.p.concat.apply(h.a.p, arguments);
};
h.a.za = function(a) {
  var c = a.length;
  if (0 < c) {
    for (var d = Array(c), e = 0;e < c;e++) {
      d[e] = a[e];
    }
    return d;
  }
  return[];
};
h.a.clone = h.a.za;
h.a.extend = function(a, c) {
  for (var d = 1;d < arguments.length;d++) {
    var e = arguments[d], f;
    if (h.isArray(e) || (f = h.D(e)) && Object.prototype.hasOwnProperty.call(e, "callee")) {
      a.push.apply(a, e);
    } else {
      if (f) {
        for (var g = a.length, k = e.length, l = 0;l < k;l++) {
          a[g + l] = e[l];
        }
      } else {
        a.push(e);
      }
    }
  }
};
h.a.splice = function(a, c, d, e) {
  return h.a.p.splice.apply(a, h.a.slice(arguments, 1));
};
h.a.slice = function(a, c, d) {
  return 2 >= arguments.length ? h.a.p.slice.call(a, c) : h.a.p.slice.call(a, c, d);
};
h.a.fh = function(a, c, d) {
  c = c || a;
  d = d || function() {
    return h.isObject(k) ? "o" + h.Db(k) : (typeof k).charAt(0) + k;
  };
  for (var e = {}, f = 0, g = 0;g < a.length;) {
    var k = a[g++], l = d(k);
    Object.prototype.hasOwnProperty.call(e, l) || (e[l] = !0, c[f++] = k);
  }
  c.length = f;
};
h.a.ue = function(a, c, d) {
  return h.a.ve(a, d || h.a.Ka, !1, c);
};
h.a.cp = function(a, c, d) {
  return h.a.ve(a, c, !0, void 0, d);
};
h.a.ve = function(a, c, d, e, f) {
  for (var g = 0, k = a.length, l;g < k;) {
    var n = g + k >> 1, p;
    p = d ? c.call(f, a[n], n, a) : c(e, a[n]);
    0 < p ? g = n + 1 : (k = n, l = !p);
  }
  return l ? g : ~g;
};
h.a.sort = function(a, c) {
  a.sort(c || h.a.Ka);
};
h.a.ur = function(a, c) {
  for (var d = 0;d < a.length;d++) {
    a[d] = {index:d, value:a[d]};
  }
  var e = c || h.a.Ka;
  h.a.sort(a, function(a, c) {
    return e(a.value, c.value) || a.index - c.index;
  });
  for (d = 0;d < a.length;d++) {
    a[d] = a[d].value;
  }
};
h.a.sr = function(a, c, d) {
  var e = d || h.a.Ka;
  h.a.sort(a, function(a, d) {
    return e(a[c], d[c]);
  });
};
h.a.Pd = function(a, c, d) {
  c = c || h.a.Ka;
  for (var e = 1;e < a.length;e++) {
    var f = c(a[e - 1], a[e]);
    if (0 < f || 0 == f && d) {
      return!1;
    }
  }
  return!0;
};
h.a.equals = function(a, c, d) {
  if (!h.D(a) || !h.D(c) || a.length != c.length) {
    return!1;
  }
  var e = a.length;
  d = d || h.a.Vg;
  for (var f = 0;f < e;f++) {
    if (!d(a[f], c[f])) {
      return!1;
    }
  }
  return!0;
};
h.a.tp = function(a, c, d) {
  d = d || h.a.Ka;
  for (var e = Math.min(a.length, c.length), f = 0;f < e;f++) {
    var g = d(a[f], c[f]);
    if (0 != g) {
      return g;
    }
  }
  return h.a.Ka(a.length, c.length);
};
h.a.Ka = function(a, c) {
  return a > c ? 1 : a < c ? -1 : 0;
};
h.a.Vg = function(a, c) {
  return a === c;
};
h.a.ap = function(a, c, d) {
  d = h.a.ue(a, c, d);
  return 0 > d ? (h.a.ye(a, c, -(d + 1)), !0) : !1;
};
h.a.bp = function(a, c, d) {
  c = h.a.ue(a, c, d);
  return 0 <= c ? h.a.mb(a, c) : !1;
};
h.a.dp = function(a, c, d) {
  for (var e = {}, f = 0;f < a.length;f++) {
    var g = a[f], k = c.call(d, g, f, a);
    h.T(k) && (e[k] || (e[k] = [])).push(g);
  }
  return e;
};
h.a.Yk = function(a, c, d) {
  var e = {};
  h.a.forEach(a, function(f, g) {
    e[c.call(d, f, g, a)] = f;
  });
  return e;
};
h.a.Yb = function(a, c, d) {
  var e = [], f = 0, g = a;
  d = d || 1;
  void 0 !== c && (f = a, g = c);
  if (0 > d * (g - f)) {
    return[];
  }
  if (0 < d) {
    for (a = f;a < g;a += d) {
      e.push(a);
    }
  } else {
    for (a = f;a > g;a += d) {
      e.push(a);
    }
  }
  return e;
};
h.a.repeat = function(a, c) {
  for (var d = [], e = 0;e < c;e++) {
    d[e] = a;
  }
  return d;
};
h.a.dh = function(a) {
  for (var c = [], d = 0;d < arguments.length;d++) {
    var e = arguments[d];
    h.isArray(e) ? c.push.apply(c, h.a.dh.apply(null, e)) : c.push(e);
  }
  return c;
};
h.a.rotate = function(a, c) {
  a.length && (c %= a.length, 0 < c ? h.a.p.unshift.apply(a, a.splice(-c, c)) : 0 > c && h.a.p.push.apply(a, a.splice(0, -c)));
  return a;
};
h.a.Rq = function(a, c, d) {
  c = h.a.p.splice.call(a, c, 1);
  h.a.p.splice.call(a, d, 0, c[0]);
};
h.a.Ye = function(a) {
  if (!arguments.length) {
    return[];
  }
  for (var c = [], d = 0;;d++) {
    for (var e = [], f = 0;f < arguments.length;f++) {
      var g = arguments[f];
      if (d >= g.length) {
        return c;
      }
      e.push(g[d]);
    }
    c.push(e);
  }
};
h.a.qr = function(a, c) {
  for (var d = c || Math.random, e = a.length - 1;0 < e;e--) {
    var f = Math.floor(d() * (e + 1)), g = a[e];
    a[e] = a[f];
    a[f] = g;
  }
};
h.r = {};
h.r.constant = function(a) {
  return function() {
    return a;
  };
};
h.r.gm = h.r.constant(!1);
h.r.yo = h.r.constant(!0);
h.r.En = h.r.constant(null);
h.r.identity = function(a) {
  return a;
};
h.r.error = function(a) {
  return function() {
    throw Error(a);
  };
};
h.r.Sa = function(a) {
  return function() {
    throw a;
  };
};
h.r.Mq = function(a, c) {
  c = c || 0;
  return function() {
    return a.apply(this, Array.prototype.slice.call(arguments, 0, c));
  };
};
h.r.Vq = function(a) {
  return function() {
    return arguments[a];
  };
};
h.r.Pr = function(a, c) {
  return h.r.Ui(a, h.r.constant(c));
};
h.r.up = function(a, c) {
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
h.r.Ui = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a, f = 0;f < d;f++) {
      a = c[f].apply(this, arguments);
    }
    return a;
  };
};
h.r.Ko = function(a) {
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
h.r.Yq = function(a) {
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
h.r.Dh = function(a) {
  return function() {
    return!a.apply(this, arguments);
  };
};
h.r.create = function(a, c) {
  var d = function() {
  };
  d.prototype = a.prototype;
  d = new d;
  a.apply(d, Array.prototype.slice.call(arguments, 1));
  return d;
};
h.r.Ti = !0;
h.r.gp = function(a) {
  var c = !1, d;
  return function() {
    if (!h.r.Ti) {
      return a();
    }
    c || (d = a(), c = !0);
    return d;
  };
};
h.n = {};
h.n.dr = function(a) {
  return Math.floor(Math.random() * a);
};
h.n.Kr = function(a, c) {
  return a + Math.random() * (c - a);
};
h.n.np = function(a, c, d) {
  return Math.min(Math.max(a, c), d);
};
h.n.qf = function(a, c) {
  var d = a % c;
  return 0 > d * c ? d + c : d;
};
h.n.Jq = function(a, c, d) {
  return a + d * (c - a);
};
h.n.Sq = function(a, c, d) {
  return Math.abs(a - c) <= (d || 1E-6);
};
h.n.yd = function(a) {
  return h.n.qf(a, 360);
};
h.n.vr = function(a) {
  return h.n.qf(a, 2 * Math.PI);
};
h.n.rf = function(a) {
  return a * Math.PI / 180;
};
h.n.Ii = function(a) {
  return 180 * a / Math.PI;
};
h.n.No = function(a, c) {
  return c * Math.cos(h.n.rf(a));
};
h.n.Oo = function(a, c) {
  return c * Math.sin(h.n.rf(a));
};
h.n.Lo = function(a, c, d, e) {
  return h.n.yd(h.n.Ii(Math.atan2(e - c, d - a)));
};
h.n.Mo = function(a, c) {
  var d = h.n.yd(c) - h.n.yd(a);
  180 < d ? d -= 360 : -180 >= d && (d = 360 + d);
  return d;
};
h.n.rr = function(a) {
  return 0 == a ? 0 : 0 > a ? -1 : 1;
};
h.n.Oq = function(a, c, d, e) {
  d = d || function(a, c) {
    return a == c;
  };
  e = e || function(c) {
    return a[c];
  };
  for (var f = a.length, g = c.length, k = [], l = 0;l < f + 1;l++) {
    k[l] = [], k[l][0] = 0;
  }
  for (var n = 0;n < g + 1;n++) {
    k[0][n] = 0;
  }
  for (l = 1;l <= f;l++) {
    for (n = 1;n <= g;n++) {
      d(a[l - 1], c[n - 1]) ? k[l][n] = k[l - 1][n - 1] + 1 : k[l][n] = Math.max(k[l - 1][n], k[l][n - 1]);
    }
  }
  for (var p = [], l = f, n = g;0 < l && 0 < n;) {
    d(a[l - 1], c[n - 1]) ? (p.unshift(e(l - 1, n - 1)), l--, n--) : k[l - 1][n] > k[l][n - 1] ? l-- : n--;
  }
  return p;
};
h.n.ie = function(a) {
  return h.a.reduce(arguments, function(a, d) {
    return a + d;
  }, 0);
};
h.n.Kg = function(a) {
  return h.n.ie.apply(null, arguments) / arguments.length;
};
h.n.Ji = function(a) {
  var c = arguments.length;
  if (2 > c) {
    return 0;
  }
  var d = h.n.Kg.apply(null, arguments);
  return h.n.ie.apply(null, h.a.map(arguments, function(a) {
    return Math.pow(a - d, 2);
  })) / (c - 1);
};
h.n.wr = function(a) {
  return Math.sqrt(h.n.Ji.apply(null, arguments));
};
h.n.yq = function(a) {
  return isFinite(a) && 0 == a % 1;
};
h.n.vq = function(a) {
  return isFinite(a) && !isNaN(a);
};
h.n.Nq = function(a) {
  if (0 < a) {
    var c = Math.round(Math.log(a) * Math.LOG10E);
    return c - (parseFloat("1e" + c) > a);
  }
  return 0 == a ? -Infinity : NaN;
};
h.n.ir = function(a, c) {
  return Math.floor(a + (c || 2E-15));
};
h.n.hr = function(a, c) {
  return Math.ceil(a - (c || 2E-15));
};
h.e = {};
h.e.J = "StopIteration" in h.global ? h.global.StopIteration : Error("StopIteration");
h.e.s = function() {
};
h.e.s.prototype.next = function() {
  throw h.e.J;
};
h.e.s.prototype.vb = function() {
  return this;
};
h.e.B = function(a) {
  if (a instanceof h.e.s) {
    return a;
  }
  if ("function" == typeof a.vb) {
    return a.vb(!1);
  }
  if (h.D(a)) {
    var c = 0, d = new h.e.s;
    d.next = function() {
      for (;;) {
        if (c >= a.length) {
          throw h.e.J;
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
h.e.forEach = function(a, c, d) {
  if (h.D(a)) {
    try {
      h.a.forEach(a, c, d);
    } catch (e) {
      if (e !== h.e.J) {
        throw e;
      }
    }
  } else {
    a = h.e.B(a);
    try {
      for (;;) {
        c.call(d, a.next(), void 0, a);
      }
    } catch (f) {
      if (f !== h.e.J) {
        throw f;
      }
    }
  }
};
h.e.filter = function(a, c, d) {
  var e = h.e.B(a);
  a = new h.e.s;
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
h.e.Ip = function(a, c, d) {
  return h.e.filter(a, h.r.Dh(c), d);
};
h.e.Yb = function(a, c, d) {
  var e = 0, f = a, g = d || 1;
  1 < arguments.length && (e = a, f = c);
  if (0 == g) {
    throw Error("Range step argument must not be zero");
  }
  var k = new h.e.s;
  k.next = function() {
    if (0 < g && e >= f || 0 > g && e <= f) {
      throw h.e.J;
    }
    var a = e;
    e += g;
    return a;
  };
  return k;
};
h.e.join = function(a, c) {
  return h.e.za(a).join(c);
};
h.e.map = function(a, c, d) {
  var e = h.e.B(a);
  a = new h.e.s;
  a.next = function() {
    var a = e.next();
    return c.call(d, a, void 0, e);
  };
  return a;
};
h.e.reduce = function(a, c, d, e) {
  var f = d;
  h.e.forEach(a, function(a) {
    f = c.call(e, f, a);
  });
  return f;
};
h.e.some = function(a, c, d) {
  a = h.e.B(a);
  try {
    for (;;) {
      if (c.call(d, a.next(), void 0, a)) {
        return!0;
      }
    }
  } catch (e) {
    if (e !== h.e.J) {
      throw e;
    }
  }
  return!1;
};
h.e.every = function(a, c, d) {
  a = h.e.B(a);
  try {
    for (;;) {
      if (!c.call(d, a.next(), void 0, a)) {
        return!1;
      }
    }
  } catch (e) {
    if (e !== h.e.J) {
      throw e;
    }
  }
  return!0;
};
h.e.Yh = function(a) {
  var c = h.e.B(arguments), d = new h.e.s, e = null;
  d.next = function() {
    for (;;) {
      if (null == e) {
        var a = c.next();
        e = h.e.B(a);
      }
      try {
        return e.next();
      } catch (d) {
        if (d !== h.e.J) {
          throw d;
        }
        e = null;
      }
    }
  };
  return d;
};
h.e.mp = function(a) {
  return h.e.Yh.apply(void 0, a);
};
h.e.Fp = function(a, c, d) {
  var e = h.e.B(a);
  a = new h.e.s;
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
h.e.Br = function(a, c, d) {
  var e = h.e.B(a);
  a = new h.e.s;
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
        throw h.e.J;
      }
    }
  };
  return a;
};
h.e.za = function(a) {
  if (h.D(a)) {
    return h.a.za(a);
  }
  a = h.e.B(a);
  var c = [];
  h.e.forEach(a, function(a) {
    c.push(a);
  });
  return c;
};
h.e.equals = function(a, c) {
  var d = h.e.Zh({}, a, c);
  return h.e.every(d, function(a) {
    return a[0] == a[1];
  });
};
h.e.Nh = function(a, c) {
  try {
    return h.e.B(a).next();
  } catch (d) {
    if (d != h.e.J) {
      throw d;
    }
    return c;
  }
};
h.e.product = function(a) {
  if (h.a.some(arguments, function(a) {
    return!a.length;
  }) || !arguments.length) {
    return new h.e.s;
  }
  var c = new h.e.s, d = arguments, e = h.a.repeat(0, d.length);
  c.next = function() {
    if (e) {
      for (var a = h.a.map(e, function(a, c) {
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
    throw h.e.J;
  };
  return c;
};
h.e.Cp = function(a) {
  var c = h.e.B(a), d = [], e = 0;
  a = new h.e.s;
  var f = !1;
  a.next = function() {
    var a = null;
    if (!f) {
      try {
        return a = c.next(), d.push(a), a;
      } catch (k) {
        if (k != h.e.J || h.a.M(d)) {
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
h.e.count = function(a, c) {
  var d = a || 0, e = h.T(c) ? c : 1, f = new h.e.s;
  f.next = function() {
    var a = d;
    d += e;
    return a;
  };
  return f;
};
h.e.repeat = function(a) {
  var c = new h.e.s;
  c.next = h.r.constant(a);
  return c;
};
h.e.Ho = function(a) {
  var c = h.e.B(a), d = 0;
  a = new h.e.s;
  a.next = function() {
    return d += c.next();
  };
  return a;
};
h.e.Ye = function(a) {
  var c = arguments, d = new h.e.s;
  if (0 < c.length) {
    var e = h.a.map(c, h.e.B);
    d.next = function() {
      return h.a.map(e, function(a) {
        return a.next();
      });
    };
  }
  return d;
};
h.e.Zh = function(a, c) {
  var d = h.a.slice(arguments, 1), e = new h.e.s;
  if (0 < d.length) {
    var f = h.a.map(d, h.e.B);
    e.next = function() {
      var c = !1, d = h.a.map(f, function(d) {
        var e;
        try {
          e = d.next(), c = !0;
        } catch (f) {
          if (f !== h.e.J) {
            throw f;
          }
          e = a;
        }
        return e;
      });
      if (!c) {
        throw h.e.J;
      }
      return d;
    };
  }
  return e;
};
h.e.vp = function(a, c) {
  var d = h.e.B(c);
  return h.e.filter(a, function() {
    return!!d.next();
  });
};
h.e.kc = function(a, c) {
  this.ee = h.e.B(a);
  this.fe = c || h.r.identity;
};
h.ja(h.e.kc, h.e.s);
h.e.kc.prototype.next = function() {
  for (;this.yb == this.zf;) {
    this.ic = this.ee.next(), this.yb = this.fe(this.ic);
  }
  this.zf = this.yb;
  return[this.yb, this.Yi(this.zf)];
};
h.e.kc.prototype.Yi = function(a) {
  for (var c = [];this.yb == a;) {
    c.push(this.ic);
    try {
      this.ic = this.ee.next();
    } catch (d) {
      if (d !== h.e.J) {
        throw d;
      }
      break;
    }
    this.yb = this.fe(this.ic);
  }
  return c;
};
h.e.hq = function(a, c) {
  return new h.e.kc(a, c);
};
h.e.xr = function(a, c, d) {
  var e = h.e.B(a);
  a = new h.e.s;
  a.next = function() {
    var a = h.e.za(e.next());
    return c.apply(d, h.a.concat(a, void 0, e));
  };
  return a;
};
h.e.Cr = function(a, c) {
  var d = h.e.B(a), e = h.isNumber(c) ? c : 2, f = h.a.map(h.a.Yb(e), function() {
    return[];
  }), g = function() {
    var a = d.next();
    h.a.forEach(f, function(c) {
      c.push(a);
    });
  };
  return h.a.map(f, function(a) {
    var c = new h.e.s;
    c.next = function() {
      h.a.M(a) && g();
      return a.shift();
    };
    return c;
  });
};
h.e.Gp = function(a, c) {
  return h.e.Ye(h.e.count(c), a);
};
h.e.Xh = function(a, c) {
  var d = h.e.B(a), e = new h.e.s, f = c;
  e.next = function() {
    if (0 < f--) {
      return d.next();
    }
    throw h.e.J;
  };
  return e;
};
h.e.Wh = function(a, c) {
  for (var d = h.e.B(a);0 < c--;) {
    h.e.Nh(d, null);
  }
  return d;
};
h.e.slice = function(a, c, d) {
  a = h.e.Wh(a, c);
  h.isNumber(d) && (a = h.e.Xh(a, d - c));
  return a;
};
h.e.qg = function(a) {
  var c = [];
  h.a.fh(a, c);
  return a.length != c.length;
};
h.e.mg = function(a, c) {
  var d = h.e.za(a), e = h.isNumber(c) ? c : d.length, d = h.a.repeat(d, e), d = h.e.product.apply(void 0, d);
  return h.e.filter(d, function(a) {
    return!h.e.qg(a);
  });
};
h.e.rp = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = h.e.za(a), f = h.e.Yb(e.length), f = h.e.mg(f, c), g = h.e.filter(f, function(a) {
    return h.a.Pd(a);
  }), f = new h.e.s;
  f.next = function() {
    return h.a.map(g.next(), d);
  };
  return f;
};
h.e.sp = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = h.e.za(a), f = h.a.Yb(e.length), f = h.a.repeat(f, c), f = h.e.product.apply(void 0, f), g = h.e.filter(f, function(a) {
    return h.a.Pd(a);
  }), f = new h.e.s;
  f.next = function() {
    return h.a.map(g.next(), d);
  };
  return f;
};
h.object = {};
h.object.forEach = function(a, c, d) {
  for (var e in a) {
    c.call(d, a[e], e, a);
  }
};
h.object.filter = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    c.call(d, a[f], f, a) && (e[f] = a[f]);
  }
  return e;
};
h.object.map = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    e[f] = c.call(d, a[f], f, a);
  }
  return e;
};
h.object.some = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return!0;
    }
  }
  return!1;
};
h.object.every = function(a, c, d) {
  for (var e in a) {
    if (!c.call(d, a[e], e, a)) {
      return!1;
    }
  }
  return!0;
};
h.object.S = function(a) {
  var c = 0, d;
  for (d in a) {
    c++;
  }
  return c;
};
h.object.Mp = function(a) {
  for (var c in a) {
    return c;
  }
};
h.object.Np = function(a) {
  for (var c in a) {
    return a[c];
  }
};
h.object.contains = function(a, c) {
  return h.object.ab(a, c);
};
h.object.u = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = a[e];
  }
  return c;
};
h.object.I = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = e;
  }
  return c;
};
h.object.dq = function(a, c) {
  for (var d = h.D(c), e = d ? c : arguments, d = d ? 0 : 1;d < e.length && (a = a[e[d]], h.T(a));d++) {
  }
  return a;
};
h.object.Ea = function(a, c) {
  return c in a;
};
h.object.ab = function(a, c) {
  for (var d in a) {
    if (a[d] == c) {
      return!0;
    }
  }
  return!1;
};
h.object.Fk = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return e;
    }
  }
};
h.object.Kp = function(a, c, d) {
  return(c = h.object.Fk(a, c, d)) && a[c];
};
h.object.M = function(a) {
  for (var c in a) {
    return!1;
  }
  return!0;
};
h.object.clear = function(a) {
  for (var c in a) {
    delete a[c];
  }
};
h.object.remove = function(a, c) {
  var d;
  (d = c in a) && delete a[c];
  return d;
};
h.object.add = function(a, c, d) {
  if (c in a) {
    throw Error('The object already contains the key "' + c + '"');
  }
  h.object.set(a, c, d);
};
h.object.get = function(a, c, d) {
  return c in a ? a[c] : d;
};
h.object.set = function(a, c, d) {
  a[c] = d;
};
h.object.nr = function(a, c, d) {
  return c in a ? a[c] : a[c] = d;
};
h.object.clone = function(a) {
  var c = {}, d;
  for (d in a) {
    c[d] = a[d];
  }
  return c;
};
h.object.lj = function(a) {
  var c = h.V(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = h.object.lj(a[d]);
    }
    return c;
  }
  return a;
};
h.object.Zk = function(a) {
  var c = {}, d;
  for (d in a) {
    c[a[d]] = d;
  }
  return c;
};
h.object.fg = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
h.object.extend = function(a, c) {
  for (var d, e, f = 1;f < arguments.length;f++) {
    e = arguments[f];
    for (d in e) {
      a[d] = e[d];
    }
    for (var g = 0;g < h.object.fg.length;g++) {
      d = h.object.fg[g], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d]);
    }
  }
};
h.object.create = function(a) {
  var c = arguments.length;
  if (1 == c && h.isArray(arguments[0])) {
    return h.object.create.apply(null, arguments[0]);
  }
  if (c % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var d = {}, e = 0;e < c;e += 2) {
    d[arguments[e]] = arguments[e + 1];
  }
  return d;
};
h.object.xk = function(a) {
  var c = arguments.length;
  if (1 == c && h.isArray(arguments[0])) {
    return h.object.xk.apply(null, arguments[0]);
  }
  for (var d = {}, e = 0;e < c;e++) {
    d[arguments[e]] = !0;
  }
  return d;
};
h.object.Ap = function(a) {
  var c = a;
  Object.isFrozen && !Object.isFrozen(a) && (c = Object.create(a), Object.freeze(c));
  return c;
};
h.object.xq = function(a) {
  return!!Object.isFrozen && Object.isFrozen(a);
};
h.h = {};
h.h.K = function(a, c) {
  this.v = {};
  this.w = [];
  this.nb = this.t = 0;
  var d = arguments.length;
  if (1 < d) {
    if (d % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var e = 0;e < d;e += 2) {
      this.set(arguments[e], arguments[e + 1]);
    }
  } else {
    a && this.dd(a);
  }
};
b = h.h.K.prototype;
b.S = function() {
  return this.t;
};
b.u = function() {
  this.Ta();
  for (var a = [], c = 0;c < this.w.length;c++) {
    a.push(this.v[this.w[c]]);
  }
  return a;
};
b.I = function() {
  this.Ta();
  return this.w.concat();
};
b.Ea = function(a) {
  return h.h.K.Ja(this.v, a);
};
b.ab = function(a) {
  for (var c = 0;c < this.w.length;c++) {
    var d = this.w[c];
    if (h.h.K.Ja(this.v, d) && this.v[d] == a) {
      return!0;
    }
  }
  return!1;
};
b.equals = function(a, c) {
  if (this === a) {
    return!0;
  }
  if (this.t != a.S()) {
    return!1;
  }
  var d = c || h.h.K.Mh;
  this.Ta();
  for (var e, f = 0;e = this.w[f];f++) {
    if (!d(this.get(e), a.get(e))) {
      return!1;
    }
  }
  return!0;
};
h.h.K.Mh = function(a, c) {
  return a === c;
};
b = h.h.K.prototype;
b.M = function() {
  return 0 == this.t;
};
b.clear = function() {
  this.v = {};
  this.nb = this.t = this.w.length = 0;
};
b.remove = function(a) {
  return h.h.K.Ja(this.v, a) ? (delete this.v[a], this.t--, this.nb++, this.w.length > 2 * this.t && this.Ta(), !0) : !1;
};
b.Ta = function() {
  if (this.t != this.w.length) {
    for (var a = 0, c = 0;a < this.w.length;) {
      var d = this.w[a];
      h.h.K.Ja(this.v, d) && (this.w[c++] = d);
      a++;
    }
    this.w.length = c;
  }
  if (this.t != this.w.length) {
    for (var e = {}, c = a = 0;a < this.w.length;) {
      d = this.w[a], h.h.K.Ja(e, d) || (this.w[c++] = d, e[d] = 1), a++;
    }
    this.w.length = c;
  }
};
b.get = function(a, c) {
  return h.h.K.Ja(this.v, a) ? this.v[a] : c;
};
b.set = function(a, c) {
  h.h.K.Ja(this.v, a) || (this.t++, this.w.push(a), this.nb++);
  this.v[a] = c;
};
b.dd = function(a) {
  var c;
  a instanceof h.h.K ? (c = a.I(), a = a.u()) : (c = h.object.I(a), a = h.object.u(a));
  for (var d = 0;d < c.length;d++) {
    this.set(c[d], a[d]);
  }
};
b.forEach = function(a, c) {
  for (var d = this.I(), e = 0;e < d.length;e++) {
    var f = d[e], g = this.get(f);
    a.call(c, g, f, this);
  }
};
b.clone = function() {
  return new h.h.K(this);
};
b.Zk = function() {
  for (var a = new h.h.K, c = 0;c < this.w.length;c++) {
    var d = this.w[c];
    a.set(this.v[d], d);
  }
  return a;
};
b.Yk = function() {
  this.Ta();
  for (var a = {}, c = 0;c < this.w.length;c++) {
    var d = this.w[c];
    a[d] = this.v[d];
  }
  return a;
};
b.vb = function(a) {
  this.Ta();
  var c = 0, d = this.w, e = this.v, f = this.nb, g = this, k = new h.e.s;
  k.next = function() {
    for (;;) {
      if (f != g.nb) {
        throw Error("The map has changed since the iterator was created");
      }
      if (c >= d.length) {
        throw h.e.J;
      }
      var k = d[c++];
      return a ? k : e[k];
    }
  };
  return k;
};
h.h.K.Ja = function(a, c) {
  return Object.prototype.hasOwnProperty.call(a, c);
};
h.h.S = function(a) {
  return "function" == typeof a.S ? a.S() : h.D(a) || h.isString(a) ? a.length : h.object.S(a);
};
h.h.u = function(a) {
  if ("function" == typeof a.u) {
    return a.u();
  }
  if (h.isString(a)) {
    return a.split("");
  }
  if (h.D(a)) {
    for (var c = [], d = a.length, e = 0;e < d;e++) {
      c.push(a[e]);
    }
    return c;
  }
  return h.object.u(a);
};
h.h.I = function(a) {
  if ("function" == typeof a.I) {
    return a.I();
  }
  if ("function" != typeof a.u) {
    if (h.D(a) || h.isString(a)) {
      var c = [];
      a = a.length;
      for (var d = 0;d < a;d++) {
        c.push(d);
      }
      return c;
    }
    return h.object.I(a);
  }
};
h.h.contains = function(a, c) {
  return "function" == typeof a.contains ? a.contains(c) : "function" == typeof a.ab ? a.ab(c) : h.D(a) || h.isString(a) ? h.a.contains(a, c) : h.object.ab(a, c);
};
h.h.M = function(a) {
  return "function" == typeof a.M ? a.M() : h.D(a) || h.isString(a) ? h.a.M(a) : h.object.M(a);
};
h.h.clear = function(a) {
  "function" == typeof a.clear ? a.clear() : h.D(a) ? h.a.clear(a) : h.object.clear(a);
};
h.h.forEach = function(a, c, d) {
  if ("function" == typeof a.forEach) {
    a.forEach(c, d);
  } else {
    if (h.D(a) || h.isString(a)) {
      h.a.forEach(a, c, d);
    } else {
      for (var e = h.h.I(a), f = h.h.u(a), g = f.length, k = 0;k < g;k++) {
        c.call(d, f[k], e && e[k], a);
      }
    }
  }
};
h.h.filter = function(a, c, d) {
  if ("function" == typeof a.filter) {
    return a.filter(c, d);
  }
  if (h.D(a) || h.isString(a)) {
    return h.a.filter(a, c, d);
  }
  var e, f = h.h.I(a), g = h.h.u(a), k = g.length;
  if (f) {
    e = {};
    for (var l = 0;l < k;l++) {
      c.call(d, g[l], f[l], a) && (e[f[l]] = g[l]);
    }
  } else {
    for (e = [], l = 0;l < k;l++) {
      c.call(d, g[l], void 0, a) && e.push(g[l]);
    }
  }
  return e;
};
h.h.map = function(a, c, d) {
  if ("function" == typeof a.map) {
    return a.map(c, d);
  }
  if (h.D(a) || h.isString(a)) {
    return h.a.map(a, c, d);
  }
  var e, f = h.h.I(a), g = h.h.u(a), k = g.length;
  if (f) {
    e = {};
    for (var l = 0;l < k;l++) {
      e[f[l]] = c.call(d, g[l], f[l], a);
    }
  } else {
    for (e = [], l = 0;l < k;l++) {
      e[l] = c.call(d, g[l], void 0, a);
    }
  }
  return e;
};
h.h.some = function(a, c, d) {
  if ("function" == typeof a.some) {
    return a.some(c, d);
  }
  if (h.D(a) || h.isString(a)) {
    return h.a.some(a, c, d);
  }
  for (var e = h.h.I(a), f = h.h.u(a), g = f.length, k = 0;k < g;k++) {
    if (c.call(d, f[k], e && e[k], a)) {
      return!0;
    }
  }
  return!1;
};
h.h.every = function(a, c, d) {
  if ("function" == typeof a.every) {
    return a.every(c, d);
  }
  if (h.D(a) || h.isString(a)) {
    return h.a.every(a, c, d);
  }
  for (var e = h.h.I(a), f = h.h.u(a), g = f.length, k = 0;k < g;k++) {
    if (!c.call(d, f[k], e && e[k], a)) {
      return!1;
    }
  }
  return!0;
};
h.f = {};
h.f.userAgent = {};
h.f.userAgent.m = {};
h.f.userAgent.m.We = function() {
  var a = h.f.userAgent.m.Rh();
  return a && (a = a.userAgent) ? a : "";
};
h.f.userAgent.m.Rh = function() {
  return h.global.navigator;
};
h.f.userAgent.m.Ve = h.f.userAgent.m.We();
h.f.userAgent.m.pr = function(a) {
  h.f.userAgent.m.Ve = a || h.f.userAgent.m.We();
};
h.f.userAgent.m.ob = function() {
  return h.f.userAgent.m.Ve;
};
h.f.userAgent.m.C = function(a) {
  return h.c.contains(h.f.userAgent.m.ob(), a);
};
h.f.userAgent.m.Th = function(a) {
  return h.c.rg(h.f.userAgent.m.ob(), a);
};
h.f.userAgent.m.Dc = function(a) {
  for (var c = RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), d = [], e;e = c.exec(a);) {
    d.push([e[1], e[2], e[3] || void 0]);
  }
  return d;
};
h.f.userAgent.browser = {};
h.f.userAgent.browser.Sk = function() {
  return h.f.userAgent.m.C("Opera") || h.f.userAgent.m.C("OPR");
};
h.f.userAgent.browser.Rk = function() {
  return h.f.userAgent.m.C("Trident") || h.f.userAgent.m.C("MSIE");
};
h.f.userAgent.browser.Qk = function() {
  return h.f.userAgent.m.C("Firefox");
};
h.f.userAgent.browser.Tk = function() {
  return h.f.userAgent.m.C("Safari") && !h.f.userAgent.m.C("Chrome") && !h.f.userAgent.m.C("CriOS") && !h.f.userAgent.m.C("Android");
};
h.f.userAgent.browser.Pk = function() {
  return h.f.userAgent.m.C("Chrome") || h.f.userAgent.m.C("CriOS");
};
h.f.userAgent.browser.Ok = function() {
  return h.f.userAgent.m.C("Android") && !h.f.userAgent.m.C("Chrome") && !h.f.userAgent.m.C("CriOS");
};
h.f.userAgent.browser.Ke = h.f.userAgent.browser.Sk;
h.f.userAgent.browser.Je = h.f.userAgent.browser.Rk;
h.f.userAgent.browser.wq = h.f.userAgent.browser.Qk;
h.f.userAgent.browser.Cq = h.f.userAgent.browser.Tk;
h.f.userAgent.browser.rq = h.f.userAgent.browser.Pk;
h.f.userAgent.browser.pq = h.f.userAgent.browser.Ok;
h.f.userAgent.browser.Dq = function() {
  return h.f.userAgent.m.C("Silk");
};
h.f.userAgent.browser.Lc = function() {
  var a = h.f.userAgent.m.ob();
  if (h.f.userAgent.browser.Je()) {
    return h.f.userAgent.browser.Ah(a);
  }
  if (h.f.userAgent.browser.Ke()) {
    return h.f.userAgent.browser.Bh(a);
  }
  a = h.f.userAgent.m.Dc(a);
  return h.f.userAgent.browser.Rd(a);
};
h.f.userAgent.browser.X = function(a) {
  return 0 <= h.c.cc(h.f.userAgent.browser.Lc(), a);
};
h.f.userAgent.browser.Ah = function(a) {
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
h.f.userAgent.browser.Bh = function(a) {
  a = h.f.userAgent.m.Dc(a);
  var c = h.a.Vd(a);
  return "OPR" == c[0] && c[1] ? c[1] : h.f.userAgent.browser.Rd(a);
};
h.f.userAgent.browser.Rd = function(a) {
  return a[2] && a[2][1] ? a[2][1] : "";
};
h.f.userAgent.R = {};
h.f.userAgent.R.Bq = function() {
  return h.f.userAgent.m.C("Presto");
};
h.f.userAgent.R.kh = function() {
  return h.f.userAgent.m.C("Trident") || h.f.userAgent.m.C("MSIE");
};
h.f.userAgent.R.Fe = function() {
  return h.f.userAgent.m.Th("WebKit");
};
h.f.userAgent.R.Kk = function() {
  return h.f.userAgent.m.C("Gecko") && !h.f.userAgent.R.Fe() && !h.f.userAgent.R.kh();
};
h.f.userAgent.R.Lc = function() {
  var a = h.f.userAgent.m.ob();
  if (a) {
    var a = h.f.userAgent.m.Dc(a), c = a[1];
    if (c) {
      return "Gecko" == c[0] ? h.f.userAgent.R.Ch(a, "Firefox") : c[1];
    }
    var a = a[0], d;
    if (a && (d = a[2]) && (d = /Trident\/([^\s;]+)/.exec(d))) {
      return d[1];
    }
  }
  return "";
};
h.f.userAgent.R.X = function(a) {
  return 0 <= h.c.cc(h.f.userAgent.R.Lc(), a);
};
h.f.userAgent.R.Ch = function(a, c) {
  var d = h.a.find(a, function(a) {
    return c == a[0];
  });
  return d && d[1] || "";
};
h.userAgent = {};
h.userAgent.Wf = !1;
h.userAgent.Vf = !1;
h.userAgent.bg = !1;
h.userAgent.Id = !1;
h.userAgent.ag = !1;
h.userAgent.Zg = !1;
h.userAgent.tc = h.userAgent.Wf || h.userAgent.Vf || h.userAgent.Id || h.userAgent.bg || h.userAgent.ag;
h.userAgent.ae = function() {
  return h.f.userAgent.m.ob();
};
h.userAgent.Xc = function() {
  return h.global.navigator || null;
};
h.userAgent.Ad = h.userAgent.tc ? h.userAgent.ag : h.f.userAgent.browser.Ke();
h.userAgent.ca = h.userAgent.tc ? h.userAgent.Wf : h.f.userAgent.browser.Je();
h.userAgent.fc = h.userAgent.tc ? h.userAgent.Vf : h.f.userAgent.R.Kk();
h.userAgent.fa = h.userAgent.tc ? h.userAgent.bg || h.userAgent.Id : h.f.userAgent.R.Fe();
h.userAgent.Lk = function() {
  return h.userAgent.fa && h.f.userAgent.m.C("Mobile");
};
h.userAgent.dn = h.userAgent.Id || h.userAgent.Lk();
h.userAgent.ho = h.userAgent.fa;
h.userAgent.yk = function() {
  var a = h.userAgent.Xc();
  return a && a.platform || "";
};
h.userAgent.Wc = h.userAgent.yk();
h.userAgent.$f = !1;
h.userAgent.cg = !1;
h.userAgent.Zf = !1;
h.userAgent.dg = !1;
h.userAgent.Uf = !1;
h.userAgent.Yf = !1;
h.userAgent.Xf = !1;
h.userAgent.Ca = h.userAgent.$f || h.userAgent.cg || h.userAgent.Zf || h.userAgent.dg || h.userAgent.Uf || h.userAgent.Yf || h.userAgent.Xf;
h.userAgent.Jk = function() {
  h.userAgent.Sg = h.c.contains(h.userAgent.Wc, "Mac");
  h.userAgent.Tg = h.c.contains(h.userAgent.Wc, "Win");
  h.userAgent.Rg = h.c.contains(h.userAgent.Wc, "Linux");
  h.userAgent.Ug = !!h.userAgent.Xc() && h.c.contains(h.userAgent.Xc().appVersion || "", "X11");
  var a = h.userAgent.ae();
  h.userAgent.Og = !!a && h.c.contains(a, "Android");
  h.userAgent.Qg = !!a && h.c.contains(a, "iPhone");
  h.userAgent.Pg = !!a && h.c.contains(a, "iPad");
};
h.userAgent.Ca || h.userAgent.Jk();
h.userAgent.Vm = h.userAgent.Ca ? h.userAgent.$f : h.userAgent.Sg;
h.userAgent.Eo = h.userAgent.Ca ? h.userAgent.cg : h.userAgent.Tg;
h.userAgent.Im = h.userAgent.Ca ? h.userAgent.Zf : h.userAgent.Rg;
h.userAgent.Fo = h.userAgent.Ca ? h.userAgent.dg : h.userAgent.Ug;
h.userAgent.ANDROID = h.userAgent.Ca ? h.userAgent.Uf : h.userAgent.Og;
h.userAgent.Am = h.userAgent.Ca ? h.userAgent.Yf : h.userAgent.Qg;
h.userAgent.zm = h.userAgent.Ca ? h.userAgent.Xf : h.userAgent.Pg;
h.userAgent.zk = function() {
  var a = "", c;
  if (h.userAgent.Ad && h.global.opera) {
    return a = h.global.opera.version, h.isFunction(a) ? a() : a;
  }
  h.userAgent.fc ? c = /rv\:([^\);]+)(\)|;)/ : h.userAgent.ca ? c = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : h.userAgent.fa && (c = /WebKit\/(\S+)/);
  c && (a = (a = c.exec(h.userAgent.ae())) ? a[1] : "");
  return h.userAgent.ca && (c = h.userAgent.pf(), c > parseFloat(a)) ? String(c) : a;
};
h.userAgent.pf = function() {
  var a = h.global.document;
  return a ? a.documentMode : void 0;
};
h.userAgent.VERSION = h.userAgent.zk();
h.userAgent.compare = function(a, c) {
  return h.c.cc(a, c);
};
h.userAgent.ze = {};
h.userAgent.X = function(a) {
  return h.userAgent.Zg || h.userAgent.ze[a] || (h.userAgent.ze[a] = 0 <= h.c.cc(h.userAgent.VERSION, a));
};
h.userAgent.Hq = h.userAgent.X;
h.userAgent.Md = function(a) {
  return h.userAgent.ca && h.userAgent.mj >= a;
};
h.userAgent.tq = h.userAgent.Md;
var s = h.global.document;
h.userAgent.mj = s && h.userAgent.ca ? h.userAgent.pf() || ("CSS1Compat" == s.compatMode ? parseInt(h.userAgent.VERSION, 10) : 5) : void 0;
h.uri = {};
h.uri.d = {};
h.uri.d.zb = {Ie:38, EQUAL:61, xh:35, yh:63};
h.uri.d.zc = function(a, c, d, e, f, g, k) {
  var l = "";
  a && (l += a + ":");
  d && (l += "//", c && (l += c + "@"), l += d, e && (l += ":" + e));
  f && (l += f);
  g && (l += "?" + g);
  k && (l += "#" + k);
  return l;
};
h.uri.d.Lh = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
h.uri.d.o = {Ra:1, Ob:2, ua:3, va:4, yc:5, Pb:6, xc:7};
h.uri.d.split = function(a) {
  h.uri.d.Jh();
  return a.match(h.uri.d.Lh);
};
h.uri.d.ed = h.userAgent.fa;
h.uri.d.Jh = function() {
  if (h.uri.d.ed) {
    h.uri.d.ed = !1;
    var a = h.global.location;
    if (a) {
      var c = a.href;
      if (c && (c = h.uri.d.hb(c)) && c != a.hostname) {
        throw h.uri.d.ed = !0, Error();
      }
    }
  }
};
h.uri.d.jc = function(a) {
  return a && decodeURIComponent(a);
};
h.uri.d.Za = function(a, c) {
  return h.uri.d.split(c)[a] || null;
};
h.uri.d.Pa = function(a) {
  return h.uri.d.Za(h.uri.d.o.Ra, a);
};
h.uri.d.Pp = function(a) {
  a = h.uri.d.Pa(a);
  !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1));
  return a ? a.toLowerCase() : "";
};
h.uri.d.Hh = function(a) {
  return h.uri.d.Za(h.uri.d.o.Ob, a);
};
h.uri.d.Nb = function(a) {
  return h.uri.d.jc(h.uri.d.Hh(a));
};
h.uri.d.Eh = function(a) {
  return h.uri.d.Za(h.uri.d.o.ua, a);
};
h.uri.d.hb = function(a) {
  return h.uri.d.jc(h.uri.d.Eh(a));
};
h.uri.d.Mb = function(a) {
  return Number(h.uri.d.Za(h.uri.d.o.va, a)) || null;
};
h.uri.d.Gh = function(a) {
  return h.uri.d.Za(h.uri.d.o.yc, a);
};
h.uri.d.Qa = function(a) {
  return h.uri.d.jc(h.uri.d.Gh(a));
};
h.uri.d.Nd = function(a) {
  return h.uri.d.Za(h.uri.d.o.Pb, a);
};
h.uri.d.Fh = function(a) {
  var c = a.indexOf("#");
  return 0 > c ? null : a.substr(c + 1);
};
h.uri.d.lr = function(a, c) {
  return h.uri.d.Oh(a) + (c ? "#" + c : "");
};
h.uri.d.Lb = function(a) {
  return h.uri.d.jc(h.uri.d.Fh(a));
};
h.uri.d.Le = function(a) {
  a = h.uri.d.split(a);
  return h.uri.d.zc(a[h.uri.d.o.Ra], a[h.uri.d.o.Ob], a[h.uri.d.o.ua], a[h.uri.d.o.va]);
};
h.uri.d.Wp = function(a) {
  a = h.uri.d.split(a);
  return h.uri.d.zc(null, null, null, null, a[h.uri.d.o.yc], a[h.uri.d.o.Pb], a[h.uri.d.o.xc]);
};
h.uri.d.Oh = function(a) {
  var c = a.indexOf("#");
  return 0 > c ? a : a.substr(0, c);
};
h.uri.d.Hk = function(a, c) {
  var d = h.uri.d.split(a), e = h.uri.d.split(c);
  return d[h.uri.d.o.ua] == e[h.uri.d.o.ua] && d[h.uri.d.o.Ra] == e[h.uri.d.o.Ra] && d[h.uri.d.o.va] == e[h.uri.d.o.va];
};
h.uri.d.ng = function(a) {
  if (h.Ma && (0 <= a.indexOf("#") || 0 <= a.indexOf("?"))) {
    throw Error("goog.uri.utils: Fragment or query identifiers are not supported: [" + a + "]");
  }
};
h.uri.d.Ic = function(a) {
  if (a[1]) {
    var c = a[0], d = c.indexOf("#");
    0 <= d && (a.push(c.substr(d)), a[0] = c = c.substr(0, d));
    d = c.indexOf("?");
    0 > d ? a[1] = "?" : d == c.length - 1 && (a[1] = void 0);
  }
  return a.join("");
};
h.uri.d.Jc = function(a, c, d) {
  if (h.isArray(c)) {
    for (var e = 0;e < c.length;e++) {
      h.uri.d.Jc(a, String(c[e]), d);
    }
  } else {
    null != c && d.push("&", a, "" === c ? "" : "=", h.c.ib(c));
  }
};
h.uri.d.fd = function(a, c, d) {
  for (d = d || 0;d < c.length;d += 2) {
    h.uri.d.Jc(c[d], c[d + 1], a);
  }
  return a;
};
h.uri.d.ep = function(a, c) {
  var d = h.uri.d.fd([], a, c);
  d[0] = "";
  return d.join("");
};
h.uri.d.Me = function(a, c) {
  for (var d in c) {
    h.uri.d.Jc(d, c[d], a);
  }
  return a;
};
h.uri.d.fp = function(a) {
  a = h.uri.d.Me([], a);
  a[0] = "";
  return a.join("");
};
h.uri.d.Po = function(a, c) {
  return h.uri.d.Ic(2 == arguments.length ? h.uri.d.fd([a], arguments[1], 0) : h.uri.d.fd([a], arguments, 1));
};
h.uri.d.Qo = function(a, c) {
  return h.uri.d.Ic(h.uri.d.Me([a], c));
};
h.uri.d.Ih = function(a, c, d) {
  a = [a, "&", c];
  h.Sd(d) && a.push("=", h.c.ib(d));
  return h.uri.d.Ic(a);
};
h.uri.d.ac = function(a, c, d, e) {
  for (var f = d.length;0 <= (c = a.indexOf(d, c)) && c < e;) {
    var g = a.charCodeAt(c - 1);
    if (g == h.uri.d.zb.Ie || g == h.uri.d.zb.yh) {
      if (g = a.charCodeAt(c + f), !g || g == h.uri.d.zb.EQUAL || g == h.uri.d.zb.Ie || g == h.uri.d.zb.xh) {
        return c;
      }
    }
    c += f + 1;
  }
  return-1;
};
h.uri.d.bc = /#|$/;
h.uri.d.iq = function(a, c) {
  return 0 <= h.uri.d.ac(a, 0, c, a.search(h.uri.d.bc));
};
h.uri.d.Up = function(a, c) {
  var d = a.search(h.uri.d.bc), e = h.uri.d.ac(a, 0, c, d);
  if (0 > e) {
    return null;
  }
  var f = a.indexOf("&", e);
  if (0 > f || f > d) {
    f = d;
  }
  e += c.length + 1;
  return h.c.Qb(a.substr(e, f - e));
};
h.uri.d.Vp = function(a, c) {
  for (var d = a.search(h.uri.d.bc), e = 0, f, g = [];0 <= (f = h.uri.d.ac(a, e, c, d));) {
    e = a.indexOf("&", f);
    if (0 > e || e > d) {
      e = d;
    }
    f += c.length + 1;
    g.push(h.c.Qb(a.substr(f, e - f)));
  }
  return g;
};
h.uri.d.zh = /[?&]($|#)/;
h.uri.d.Kh = function(a, c) {
  for (var d = a.search(h.uri.d.bc), e = 0, f, g = [];0 <= (f = h.uri.d.ac(a, e, c, d));) {
    g.push(a.substring(e, f)), e = Math.min(a.indexOf("&", f) + 1 || d, d);
  }
  g.push(a.substr(e));
  return g.join("").replace(h.uri.d.zh, "$1");
};
h.uri.d.setParam = function(a, c, d) {
  return h.uri.d.Ih(h.uri.d.Kh(a, c), c, d);
};
h.uri.d.Ro = function(a, c) {
  h.uri.d.ng(a);
  h.c.pg(a, "/") && (a = a.substr(0, a.length - 1));
  h.c.Bc(c, "/") && (c = c.substr(1));
  return h.c.og(a, "/", c);
};
h.uri.d.jb = function(a, c) {
  h.c.Bc(c, "/") || (c = "/" + c);
  var d = h.uri.d.split(a);
  return h.uri.d.zc(d[h.uri.d.o.Ra], d[h.uri.d.o.Ob], d[h.uri.d.o.ua], d[h.uri.d.o.va], c, d[h.uri.d.o.Pb], d[h.uri.d.o.xc]);
};
h.uri.d.Ud = {Td:"zx"};
h.uri.d.Nk = function(a) {
  return h.uri.d.setParam(a, h.uri.d.Ud.Td, h.c.Od());
};
h.i = function(a, c) {
  var d;
  a instanceof h.i ? (this.U = h.T(c) ? c : a.lg(), this.Vb(a.Pa()), this.Wb(a.Nb()), this.Rb(a.hb()), this.Tb(a.Mb()), this.jb(a.Qa()), this.Ub(a.Nd().clone()), this.Sb(a.Lb())) : a && (d = h.uri.d.split(String(a))) ? (this.U = !!c, this.Vb(d[h.uri.d.o.Ra] || "", !0), this.Wb(d[h.uri.d.o.Ob] || "", !0), this.Rb(d[h.uri.d.o.ua] || "", !0), this.Tb(d[h.uri.d.o.va]), this.jb(d[h.uri.d.o.yc] || "", !0), this.Ub(d[h.uri.d.o.Pb] || "", !0), this.Sb(d[h.uri.d.o.xc] || "", !0)) : (this.U = !!c, this.Z = 
  new h.i.ea(null, null, this.U));
};
h.i.oi = !1;
h.i.zg = h.uri.d.Ud.Td;
b = h.i.prototype;
b.cb = "";
b.vd = "";
b.sd = "";
b.P = null;
b.ud = "";
b.td = "";
b.Mk = !1;
b.U = !1;
b.toString = function() {
  var a = [], c = this.Pa();
  c && a.push(h.i.pb(c, h.i.Wd), ":");
  if (c = this.hb()) {
    a.push("//");
    var d = this.Nb();
    d && a.push(h.i.pb(d, h.i.Wd), "@");
    a.push(h.c.ib(c));
    c = this.Mb();
    null != c && a.push(":", String(c));
  }
  if (c = this.Qa()) {
    this.Cc() && "/" != c.charAt(0) && a.push("/"), a.push(h.i.pb(c, "/" == c.charAt(0) ? h.i.wg : h.i.yg));
  }
  (c = this.ug()) && a.push("?", c);
  (c = this.Lb()) && a.push("#", h.i.pb(c, h.i.xg));
  return a.join("");
};
b.resolve = function(a) {
  var c = this.clone(), d = a.uh();
  d ? c.Vb(a.Pa()) : d = a.vh();
  d ? c.Wb(a.Nb()) : d = a.Cc();
  d ? c.Rb(a.hb()) : d = a.sh();
  var e = a.Qa();
  if (d) {
    c.Tb(a.Mb());
  } else {
    if (d = a.He()) {
      if ("/" != e.charAt(0)) {
        if (this.Cc() && !this.He()) {
          e = "/" + e;
        } else {
          var f = c.Qa().lastIndexOf("/");
          -1 != f && (e = c.Qa().substr(0, f + 1) + e);
        }
      }
      e = h.i.wh(e);
    }
  }
  d ? c.jb(e) : d = a.th();
  d ? c.Ub(a.qh()) : d = a.rh();
  d && c.Sb(a.Lb());
  return c;
};
b.clone = function() {
  return new h.i(this);
};
b.Pa = function() {
  return this.cb;
};
b.Vb = function(a, c) {
  this.ka();
  if (this.cb = c ? h.i.bb(a) : a) {
    this.cb = this.cb.replace(/:$/, "");
  }
  return this;
};
b.uh = function() {
  return!!this.cb;
};
b.Nb = function() {
  return this.vd;
};
b.Wb = function(a, c) {
  this.ka();
  this.vd = c ? h.i.bb(a) : a;
  return this;
};
b.vh = function() {
  return!!this.vd;
};
b.hb = function() {
  return this.sd;
};
b.Rb = function(a, c) {
  this.ka();
  this.sd = c ? h.i.bb(a) : a;
  return this;
};
b.Cc = function() {
  return!!this.sd;
};
b.Mb = function() {
  return this.P;
};
b.Tb = function(a) {
  this.ka();
  if (a) {
    a = Number(a);
    if (isNaN(a) || 0 > a) {
      throw Error("Bad port number " + a);
    }
    this.P = a;
  } else {
    this.P = null;
  }
  return this;
};
b.sh = function() {
  return null != this.P;
};
b.Qa = function() {
  return this.ud;
};
b.jb = function(a, c) {
  this.ka();
  this.ud = c ? h.i.bb(a) : a;
  return this;
};
b.He = function() {
  return!!this.ud;
};
b.th = function() {
  return "" !== this.Z.toString();
};
b.Ub = function(a, c) {
  this.ka();
  a instanceof h.i.ea ? (this.Z = a, this.Z.kd(this.U)) : (c || (a = h.i.pb(a, h.i.$h)), this.Z = new h.i.ea(a, null, this.U));
  return this;
};
b.ug = function() {
  return this.Z.toString();
};
b.qh = function() {
  return this.Z.oj();
};
b.Nd = function() {
  return this.Z;
};
b.Ag = function(a, c) {
  this.ka();
  this.Z.set(a, c);
  return this;
};
b.Gi = function(a) {
  return this.Z.get(a);
};
b.Lb = function() {
  return this.td;
};
b.Sb = function(a, c) {
  this.ka();
  this.td = c ? h.i.bb(a) : a;
  return this;
};
b.rh = function() {
  return!!this.td;
};
b.Nk = function() {
  this.ka();
  this.Ag(h.i.zg, h.c.Od());
  return this;
};
b.ka = function() {
  if (this.Mk) {
    throw Error("Tried to modify a read-only Uri");
  }
};
b.kd = function(a) {
  this.U = a;
  this.Z && this.Z.kd(a);
  return this;
};
b.lg = function() {
  return this.U;
};
h.i.parse = function(a, c) {
  return a instanceof h.i ? a.clone() : new h.i(a, c);
};
h.i.create = function(a, c, d, e, f, g, k, l) {
  l = new h.i(null, l);
  a && l.Vb(a);
  c && l.Wb(c);
  d && l.Rb(d);
  e && l.Tb(e);
  f && l.jb(f);
  g && l.Ub(g);
  k && l.Sb(k);
  return l;
};
h.i.resolve = function(a, c) {
  a instanceof h.i || (a = h.i.parse(a));
  c instanceof h.i || (c = h.i.parse(c));
  return a.resolve(c);
};
h.i.wh = function(a) {
  if (".." == a || "." == a) {
    return "";
  }
  if (h.c.contains(a, "./") || h.c.contains(a, "/.")) {
    var c = h.c.Bc(a, "/");
    a = a.split("/");
    for (var d = [], e = 0;e < a.length;) {
      var f = a[e++];
      "." == f ? c && e == a.length && d.push("") : ".." == f ? ((1 < d.length || 1 == d.length && "" != d[0]) && d.pop(), c && e == a.length && d.push("")) : (d.push(f), c = !0);
    }
    return d.join("/");
  }
  return a;
};
h.i.bb = function(a) {
  return a ? decodeURIComponent(a) : "";
};
h.i.pb = function(a, c) {
  return h.isString(a) ? encodeURI(a).replace(c, h.i.Fi) : null;
};
h.i.Fi = function(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
};
h.i.Wd = /[#\/\?@]/g;
h.i.yg = /[\#\?:]/g;
h.i.wg = /[\#\?]/g;
h.i.$h = /[\#\?@]/g;
h.i.xg = /#/g;
h.i.Hk = function(a, c) {
  var d = h.uri.d.split(a), e = h.uri.d.split(c);
  return d[h.uri.d.o.ua] == e[h.uri.d.o.ua] && d[h.uri.d.o.va] == e[h.uri.d.o.va];
};
h.i.ea = function(a, c, d) {
  this.xa = a || null;
  this.U = !!d;
};
h.i.ea.prototype.ma = function() {
  if (!this.A && (this.A = new h.h.K, this.t = 0, this.xa)) {
    for (var a = this.xa.split("&"), c = 0;c < a.length;c++) {
      var d = a[c].indexOf("="), e = null, f = null;
      0 <= d ? (e = a[c].substring(0, d), f = a[c].substring(d + 1)) : e = a[c];
      e = h.c.Qb(e);
      e = this.Da(e);
      this.add(e, f ? h.c.Qb(f) : "");
    }
  }
};
h.i.ea.yp = function(a, c, d) {
  c = h.h.I(a);
  if ("undefined" == typeof c) {
    throw Error("Keys are undefined");
  }
  d = new h.i.ea(null, null, d);
  a = h.h.u(a);
  for (var e = 0;e < c.length;e++) {
    var f = c[e], g = a[e];
    h.isArray(g) ? d.de(f, g) : d.add(f, g);
  }
  return d;
};
h.i.ea.xp = function(a, c, d, e) {
  if (a.length != c.length) {
    throw Error("Mismatched lengths for keys/values");
  }
  d = new h.i.ea(null, null, e);
  for (e = 0;e < a.length;e++) {
    d.add(a[e], c[e]);
  }
  return d;
};
b = h.i.ea.prototype;
b.A = null;
b.t = null;
b.S = function() {
  this.ma();
  return this.t;
};
b.add = function(a, c) {
  this.ma();
  this.Wa();
  a = this.Da(a);
  var d = this.A.get(a);
  d || this.A.set(a, d = []);
  d.push(c);
  this.t++;
  return this;
};
b.remove = function(a) {
  this.ma();
  a = this.Da(a);
  return this.A.Ea(a) ? (this.Wa(), this.t -= this.A.get(a).length, this.A.remove(a)) : !1;
};
b.clear = function() {
  this.Wa();
  this.A = null;
  this.t = 0;
};
b.M = function() {
  this.ma();
  return 0 == this.t;
};
b.Ea = function(a) {
  this.ma();
  a = this.Da(a);
  return this.A.Ea(a);
};
b.ab = function(a) {
  var c = this.u();
  return h.a.contains(c, a);
};
b.I = function() {
  this.ma();
  for (var a = this.A.u(), c = this.A.I(), d = [], e = 0;e < c.length;e++) {
    for (var f = a[e], g = 0;g < f.length;g++) {
      d.push(c[e]);
    }
  }
  return d;
};
b.u = function(a) {
  this.ma();
  var c = [];
  if (h.isString(a)) {
    this.Ea(a) && (c = h.a.concat(c, this.A.get(this.Da(a))));
  } else {
    a = this.A.u();
    for (var d = 0;d < a.length;d++) {
      c = h.a.concat(c, a[d]);
    }
  }
  return c;
};
b.set = function(a, c) {
  this.ma();
  this.Wa();
  a = this.Da(a);
  this.Ea(a) && (this.t -= this.A.get(a).length);
  this.A.set(a, [c]);
  this.t++;
  return this;
};
b.get = function(a, c) {
  var d = a ? this.u(a) : [];
  return h.i.oi ? 0 < d.length ? d[0] : c : 0 < d.length ? String(d[0]) : c;
};
b.de = function(a, c) {
  this.remove(a);
  0 < c.length && (this.Wa(), this.A.set(this.Da(a), h.a.clone(c)), this.t += c.length);
};
b.toString = function() {
  if (this.xa) {
    return this.xa;
  }
  if (!this.A) {
    return "";
  }
  for (var a = [], c = this.A.I(), d = 0;d < c.length;d++) {
    for (var e = c[d], f = h.c.ib(e), e = this.u(e), g = 0;g < e.length;g++) {
      var k = f;
      "" !== e[g] && (k += "=" + h.c.ib(e[g]));
      a.push(k);
    }
  }
  return this.xa = a.join("&");
};
b.oj = function() {
  return h.i.bb(this.toString());
};
b.Wa = function() {
  this.xa = null;
};
b.clone = function() {
  var a = new h.i.ea;
  a.xa = this.xa;
  this.A && (a.A = this.A.clone(), a.t = this.t);
  return a;
};
b.Da = function(a) {
  a = String(a);
  this.U && (a = a.toLowerCase());
  return a;
};
b.kd = function(a) {
  a && !this.U && (this.ma(), this.Wa(), this.A.forEach(function(a, d) {
    var e = d.toLowerCase();
    d != e && (this.remove(d), this.de(e, a));
  }, this));
  this.U = a;
};
b.extend = function(a) {
  for (var c = 0;c < arguments.length;c++) {
    h.h.forEach(arguments[c], function(a, c) {
      this.add(c, a);
    }, this);
  }
};
m.Cd = {};
m.Cd.Pi = function(a) {
  return h.i.parse(window.location.href).Gi(a) || null;
};
m.Cd.getOrigin = function(a) {
  return h.uri.d.Pa(a) ? h.uri.d.Le(a) : h.uri.d.Le("http://" + a);
};
h.h.Gl = function() {
};
h.h.ha = function(a) {
  this.v = new h.h.K;
  a && this.dd(a);
};
h.h.ha.nd = function(a) {
  var c = typeof a;
  return "object" == c && a || "function" == c ? "o" + h.Db(a) : c.substr(0, 1) + a;
};
b = h.h.ha.prototype;
b.S = function() {
  return this.v.S();
};
b.add = function(a) {
  this.v.set(h.h.ha.nd(a), a);
};
b.dd = function(a) {
  a = h.h.u(a);
  for (var c = a.length, d = 0;d < c;d++) {
    this.add(a[d]);
  }
};
b.removeAll = function(a) {
  a = h.h.u(a);
  for (var c = a.length, d = 0;d < c;d++) {
    this.remove(a[d]);
  }
};
b.remove = function(a) {
  return this.v.remove(h.h.ha.nd(a));
};
b.clear = function() {
  this.v.clear();
};
b.M = function() {
  return this.v.M();
};
b.contains = function(a) {
  return this.v.Ea(h.h.ha.nd(a));
};
b.u = function() {
  return this.v.u();
};
b.clone = function() {
  return new h.h.ha(this);
};
b.equals = function(a) {
  return this.S() == h.h.S(a) && this.qi(a);
};
b.qi = function(a) {
  var c = h.h.S(a);
  if (this.S() > c) {
    return!1;
  }
  !(a instanceof h.h.ha) && 5 < c && (a = new h.h.ha(a));
  return h.h.every(this, function(c) {
    return h.h.contains(a, c);
  });
};
b.vb = function() {
  return this.v.vb(!1);
};
h.debug.Y = h.Ma;
h.debug.lp = function(a, c, d) {
  d = d || h.global;
  var e = d.onerror, f = !!c;
  h.userAgent.fa && !h.userAgent.X("535.3") && (f = !f);
  d.onerror = function(c, d, l, n, p) {
    e && e(c, d, l, n, p);
    a({message:c, fileName:d, Qi:l, dl:n, error:p});
    return f;
  };
};
h.debug.Ck = function(a, c) {
  if ("undefined" == typeof a) {
    return "undefined";
  }
  if (null == a) {
    return "NULL";
  }
  var d = [], e;
  for (e in a) {
    if (c || !h.isFunction(a[e])) {
      var f = e + " = ";
      try {
        f += a[e];
      } catch (g) {
        f += "*** " + g + " ***";
      }
      d.push(f);
    }
  }
  return d.join("\n");
};
h.debug.Dp = function(a, c) {
  var d = [], e = function(a, g, k) {
    var l = g + "  ";
    k = new h.h.ha(k);
    try {
      if (h.T(a)) {
        if (h.ji(a)) {
          d.push("NULL");
        } else {
          if (h.isString(a)) {
            d.push('"' + a.replace(/\n/g, "\n" + g) + '"');
          } else {
            if (h.isFunction(a)) {
              d.push(String(a).replace(/\n/g, "\n" + g));
            } else {
              if (h.isObject(a)) {
                if (k.contains(a)) {
                  d.push("*** reference loop detected ***");
                } else {
                  k.add(a);
                  d.push("{");
                  for (var n in a) {
                    if (c || !h.isFunction(a[n])) {
                      d.push("\n"), d.push(l), d.push(n + " = "), e(a[n], l, k);
                    }
                  }
                  d.push("\n" + g + "}");
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
  e(a, "", new h.h.ha);
  return d.join("");
};
h.debug.Dk = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    h.isArray(a[d]) ? c.push(h.debug.Dk(a[d])) : c.push(a[d]);
  }
  return "[ " + c.join(", ") + " ]";
};
h.debug.Qh = function(a, c) {
  try {
    var d = h.debug.Xg(a);
    return "Message: " + h.c.xb(d.message) + '\nUrl: <a href="view-source:' + d.fileName + '" target="_new">' + d.fileName + "</a>\nLine: " + d.lineNumber + "\n\nBrowser stack:\n" + h.c.xb(d.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + h.c.xb(h.debug.Yc(c) + "-> ");
  } catch (e) {
    return "Exception trying to expose exception! You win, we lose. " + e;
  }
};
h.debug.Xg = function(a) {
  var c = h.be("window.location.href");
  if (h.isString(a)) {
    return{message:a, name:"Unknown error", lineNumber:"Not available", fileName:c, stack:"Not available"};
  }
  var d, e, f = !1;
  try {
    d = a.lineNumber || a.Qi || "Not available";
  } catch (g) {
    d = "Not available", f = !0;
  }
  try {
    e = a.fileName || a.filename || a.sourceURL || h.global.$googDebugFname || c;
  } catch (k) {
    e = "Not available", f = !0;
  }
  return!f && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {message:a.message || "Not available", name:a.name || "UnknownError", lineNumber:d, fileName:e, stack:a.stack || "Not available"};
};
h.debug.Nf = function(a, c) {
  var d;
  "string" == typeof a ? (d = Error(a), Error.captureStackTrace && Error.captureStackTrace(d, h.debug.Nf)) : d = a;
  d.stack || (d.stack = h.debug.Yc(h.debug.Nf));
  if (c) {
    for (var e = 0;d["message" + e];) {
      ++e;
    }
    d["message" + e] = String(c);
  }
  return d;
};
h.debug.nj = function(a) {
  if (h.zd) {
    var c = h.debug.Af(h.debug.nj);
    if (c) {
      return c;
    }
  }
  for (var c = [], d = arguments.callee.caller, e = 0;d && (!a || e < a);) {
    c.push(h.debug.getFunctionName(d));
    c.push("()\n");
    try {
      d = d.caller;
    } catch (f) {
      c.push("[exception trying to get caller]\n");
      break;
    }
    e++;
    if (e >= h.debug.se) {
      c.push("[...long stack...]");
      break;
    }
  }
  a && e >= a ? c.push("[...reached max depth limit...]") : c.push("[end]");
  return c.join("");
};
h.debug.se = 50;
h.debug.Af = function(a) {
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
h.debug.Yc = function(a) {
  var c;
  h.zd && (c = h.debug.Af(a || h.debug.Yc));
  c || (c = h.debug.re(a || arguments.callee.caller, []));
  return c;
};
h.debug.re = function(a, c) {
  var d = [];
  if (h.a.contains(c, a)) {
    d.push("[...circular reference...]");
  } else {
    if (a && c.length < h.debug.se) {
      d.push(h.debug.getFunctionName(a) + "(");
      for (var e = a.arguments, f = 0;e && f < e.length;f++) {
        0 < f && d.push(", ");
        var g;
        g = e[f];
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
            g = (g = h.debug.getFunctionName(g)) ? g : "[fn]";
            break;
          default:
            g = typeof g;
        }
        40 < g.length && (g = g.substr(0, 40) + "...");
        d.push(g);
      }
      c.push(a);
      d.push(")\n");
      try {
        d.push(h.debug.re(a.caller, c));
      } catch (k) {
        d.push("[exception trying to get caller]\n");
      }
    } else {
      a ? d.push("[...long stack...]") : d.push("[end]");
    }
  }
  return d.join("");
};
h.debug.mr = function(a) {
  h.debug.Lf = a;
};
h.debug.getFunctionName = function(a) {
  if (h.debug.gb[a]) {
    return h.debug.gb[a];
  }
  if (h.debug.Lf) {
    var c = h.debug.Lf(a);
    if (c) {
      return h.debug.gb[a] = c;
    }
  }
  a = String(a);
  h.debug.gb[a] || (c = /function ([^\(]+)/.exec(a), h.debug.gb[a] = c ? c[1] : "[Anonymous]");
  return h.debug.gb[a];
};
h.debug.Pq = function(a) {
  return a.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]");
};
h.debug.gb = {};
h.debug.Q = function(a, c, d, e, f) {
  this.reset(a, c, d, e, f);
};
h.debug.Q.prototype.wf = null;
h.debug.Q.prototype.vf = null;
h.debug.Q.Li = !0;
h.debug.Q.Ni = 0;
h.debug.Q.prototype.reset = function(a, c, d, e, f) {
  h.debug.Q.Li && ("number" == typeof f || h.debug.Q.Ni++);
  e || h.now();
  this.Mc = a;
  this.Mi = c;
  delete this.wf;
  delete this.vf;
};
h.debug.Q.prototype.Uh = function(a) {
  this.wf = a;
};
h.debug.Q.prototype.Vh = function(a) {
  this.vf = a;
};
h.debug.Q.prototype.getMessage = function() {
  return this.Mi;
};
h.debug.O = function() {
  this.clear();
};
h.debug.O.Oe = function() {
  h.debug.O.Gb || (h.debug.O.Gb = new h.debug.O);
  return h.debug.O.Gb;
};
h.debug.O.qc = 0;
h.debug.O.prototype.Ph = function(a, c, d) {
  var e = (this.nf + 1) % h.debug.O.qc;
  this.nf = e;
  if (this.of) {
    return e = this.mf[e], e.reset(a, c, d), e;
  }
  this.of = e == h.debug.O.qc - 1;
  return this.mf[e] = new h.debug.Q(a, c, d);
};
h.debug.O.Sh = function() {
  return 0 < h.debug.O.qc;
};
h.debug.O.prototype.clear = function() {
  this.mf = Array(h.debug.O.qc);
  this.nf = -1;
  this.of = !1;
};
h.debug.g = function(a) {
  this.gd = a;
  this.Va = this.Ed = this.Mc = this.Rc = null;
};
h.debug.g.od = "";
h.debug.g.kb = !0;
h.debug.g.kb || (h.debug.g.Kc = []);
h.debug.g.j = function(a, c) {
  this.name = a;
  this.value = c;
};
h.debug.g.j.prototype.toString = function() {
  return this.name;
};
h.debug.g.j.qb = new h.debug.g.j("OFF", Infinity);
h.debug.g.j.gk = new h.debug.g.j("SHOUT", 1200);
h.debug.g.j.Te = new h.debug.g.j("SEVERE", 1E3);
h.debug.g.j.Ue = new h.debug.g.j("WARNING", 900);
h.debug.g.j.Se = new h.debug.g.j("INFO", 800);
h.debug.g.j.Qe = new h.debug.g.j("CONFIG", 700);
h.debug.g.j.Re = new h.debug.g.j("FINE", 500);
h.debug.g.j.Ij = new h.debug.g.j("FINER", 400);
h.debug.g.j.Jj = new h.debug.g.j("FINEST", 300);
h.debug.g.j.xj = new h.debug.g.j("ALL", 0);
h.debug.g.j.hd = [h.debug.g.j.qb, h.debug.g.j.gk, h.debug.g.j.Te, h.debug.g.j.Ue, h.debug.g.j.Se, h.debug.g.j.Qe, h.debug.g.j.Re, h.debug.g.j.Ij, h.debug.g.j.Jj, h.debug.g.j.xj];
h.debug.g.j.Aa = null;
h.debug.g.j.Ne = function() {
  h.debug.g.j.Aa = {};
  for (var a = 0, c;c = h.debug.g.j.hd[a];a++) {
    h.debug.g.j.Aa[c.value] = c, h.debug.g.j.Aa[c.name] = c;
  }
};
h.debug.g.j.Yp = function(a) {
  h.debug.g.j.Aa || h.debug.g.j.Ne();
  return h.debug.g.j.Aa[a] || null;
};
h.debug.g.j.Zp = function(a) {
  h.debug.g.j.Aa || h.debug.g.j.Ne();
  if (a in h.debug.g.j.Aa) {
    return h.debug.g.j.Aa[a];
  }
  for (var c = 0;c < h.debug.g.j.hd.length;++c) {
    var d = h.debug.g.j.hd[c];
    if (d.value <= a) {
      return d;
    }
  }
  return null;
};
h.debug.g.gi = function(a) {
  h.global.console && (h.global.console.timeStamp ? h.global.console.timeStamp(a) : h.global.console.markTimeline && h.global.console.markTimeline(a));
  h.global.msWriteProfilerMark && h.global.msWriteProfilerMark(a);
};
b = h.debug.g.prototype;
b.getName = function() {
  return this.gd;
};
b.Gf = function(a) {
  h.debug.Y && (h.debug.g.kb ? (this.Va || (this.Va = []), this.Va.push(a)) : h.debug.g.Kc.push(a));
};
b.Jf = function(a) {
  if (h.debug.Y) {
    var c = h.debug.g.kb ? this.Va : h.debug.g.Kc;
    return!!c && h.a.remove(c, a);
  }
  return!1;
};
b.getParent = function() {
  return this.Rc;
};
b.getChildren = function() {
  this.Ed || (this.Ed = {});
  return this.Ed;
};
b.ce = function() {
  if (!h.debug.Y) {
    return h.debug.g.j.qb;
  }
  if (!h.debug.g.kb) {
    return h.debug.g.$k;
  }
  if (this.Mc) {
    return this.Mc;
  }
  if (this.Rc) {
    return this.Rc.ce();
  }
  h.l.Sa("Root logger has no level set.");
  return null;
};
b.bi = function(a) {
  return h.debug.Y && a.value >= this.ce().value;
};
b.log = function(a, c, d) {
  h.debug.Y && this.bi(a) && (h.isFunction(c) && (c = c()), this.ai(this.Pe(a, c, d, h.debug.g.prototype.log)));
};
b.Pe = function(a, c, d, e) {
  a = h.debug.O.Sh() ? h.debug.O.Oe().Ph(a, c, this.gd) : new h.debug.Q(a, String(c), this.gd);
  d && (a.Uh(d), a.Vh(h.debug.Qh(d, e || h.debug.g.prototype.Pe)));
  return a;
};
b.sj = function(a, c) {
  h.debug.Y && this.log(h.debug.g.j.Te, a, c);
};
b.Kf = function(a, c) {
  h.debug.Y && this.log(h.debug.g.j.Ue, a, c);
};
b.info = function(a, c) {
  h.debug.Y && this.log(h.debug.g.j.Se, a, c);
};
b.config = function(a, c) {
  h.debug.Y && this.log(h.debug.g.j.Qe, a, c);
};
b.Hf = function(a, c) {
  h.debug.Y && this.log(h.debug.g.j.Re, a, c);
};
b.ai = function(a) {
  h.debug.g.gi("log:" + a.getMessage());
  if (h.debug.g.kb) {
    for (var c = this;c;) {
      c.fi(a), c = c.getParent();
    }
  } else {
    for (var c = 0, d;d = h.debug.g.Kc[c++];) {
      d(a);
    }
  }
};
b.fi = function(a) {
  if (this.Va) {
    for (var c = 0, d;d = this.Va[c];c++) {
      d(a);
    }
  }
};
h.debug.ba = {};
h.debug.ba.af = {};
h.debug.ba.ej = function() {
  h.debug.ba.$e || (h.debug.ba.af[h.debug.g.od] = h.debug.ba.$e);
};
h.debug.ba.Rp = function() {
  return h.debug.ba.af;
};
h.debug.ba.$p = function() {
  h.debug.ba.ej();
  return h.debug.ba.$e;
};
h.debug.ba.zp = function() {
  return function() {
  };
};
h.log = {};
h.log.Na = h.debug.Y;
h.log.od = h.debug.g.od;
h.log.g = h.debug.g;
h.log.j = h.debug.g.j;
h.log.Q = h.debug.Q;
h.log.Gf = function(a, c) {
  h.log.Na && a && a.Gf(c);
};
h.log.Jf = function(a, c) {
  return h.log.Na && a ? a.Jf(c) : !1;
};
h.log.log = function(a, c, d, e) {
  h.log.Na && a && a.log(c, d, e);
};
h.log.error = function(a, c, d) {
  h.log.Na && a && a.sj(c, d);
};
h.log.Kf = function(a, c, d) {
  h.log.Na && a && a.Kf(c, d);
};
h.log.info = function(a, c, d) {
  h.log.Na && a && a.info(c, d);
};
h.log.Hf = function(a, c, d) {
  h.log.Na && a && a.Hf(c, d);
};
h.Ak = {};
h.Ak.sm = function() {
};
h.q = function() {
  h.q.qd != h.q.rd.qb && (h.q.La[h.Db(this)] = this);
};
h.q.rd = {qb:0, pi:1, wm:2};
h.q.qd = 0;
h.q.um = !0;
h.q.La = {};
h.q.bq = function() {
  var a = [], c;
  for (c in h.q.La) {
    h.q.La.hasOwnProperty(c) && a.push(h.q.La[Number(c)]);
  }
  return a;
};
h.q.op = function() {
  h.q.La = {};
};
h.q.prototype.wd = !1;
h.q.prototype.isDisposed = function() {
  return this.wd;
};
h.q.prototype.Ib = function() {
  if (!this.wd && (this.wd = !0, this.na(), h.q.qd != h.q.rd.qb)) {
    var a = h.Db(this);
    if (h.q.qd == h.q.rd.pi && !h.q.La.hasOwnProperty(a)) {
      throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
    }
    delete h.q.La[a];
  }
};
h.q.prototype.na = function() {
  if (this.kg) {
    for (;this.kg.length;) {
      this.kg.shift()();
    }
  }
};
h.q.isDisposed = function(a) {
  return a && "function" == typeof a.isDisposed ? a.isDisposed() : !1;
};
h.Ib = function(a) {
  a && "function" == typeof a.Ib && a.Ib();
};
h.Vi = function(a) {
  for (var c = 0, d = arguments.length;c < d;++c) {
    var e = arguments[c];
    h.D(e) ? h.Vi.apply(null, e) : h.Ib(e);
  }
};
h.b = {};
h.b.te = function(a) {
  this.id = a;
};
h.b.te.prototype.toString = function() {
  return this.id;
};
h.b.Event = function(a, c) {
  this.type = a instanceof h.b.te ? String(a) : a;
  this.currentTarget = this.target = c;
  this.defaultPrevented = this.Ha = !1;
  this.$d = !0;
};
h.b.Event.prototype.na = function() {
};
h.b.Event.prototype.Ib = function() {
};
h.b.Event.prototype.stopPropagation = function() {
  this.Ha = !0;
};
h.b.Event.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.$d = !1;
};
h.b.Event.stopPropagation = function(a) {
  a.stopPropagation();
};
h.b.Event.preventDefault = function(a) {
  a.preventDefault();
};
h.debug.H = {};
h.debug.fm = function() {
};
h.debug.H.fb = [];
h.debug.H.Bd = [];
h.debug.H.tf = !1;
h.debug.H.register = function(a) {
  h.debug.H.fb[h.debug.H.fb.length] = a;
  if (h.debug.H.tf) {
    for (var c = h.debug.H.Bd, d = 0;d < c.length;d++) {
      a(h.bind(c[d].wrap, c[d]));
    }
  }
};
h.debug.H.Qq = function(a) {
  h.debug.H.tf = !0;
  for (var c = h.bind(a.wrap, a), d = 0;d < h.debug.H.fb.length;d++) {
    h.debug.H.fb[d](c);
  }
  h.debug.H.Bd.push(a);
};
h.debug.H.Mr = function(a) {
  var c = h.debug.H.Bd;
  a = h.bind(a.cl, a);
  for (var d = 0;d < h.debug.H.fb.length;d++) {
    h.debug.H.fb[d](a);
  }
  c.length--;
};
h.Ia = {};
h.Ia.object = function(a, c) {
  return c;
};
h.Ia.Hd = function(a) {
  h.Ia.Hd[" "](a);
  return a;
};
h.Ia.Hd[" "] = h.Uk;
h.Ia.Jg = function(a, c) {
  try {
    return h.Ia.Hd(a[c]), !0;
  } catch (d) {
  }
  return!1;
};
h.b.Zb = {pm:!h.userAgent.ca || h.userAgent.Md(9), Ec:!h.userAgent.ca || h.userAgent.Md(9), Lg:h.userAgent.ca && !h.userAgent.X("9"), om:!h.userAgent.fa || h.userAgent.X("528"), nm:h.userAgent.fc && h.userAgent.X("1.9b") || h.userAgent.ca && h.userAgent.X("8") || h.userAgent.Ad && h.userAgent.X("9.5") || h.userAgent.fa && h.userAgent.X("528"), rm:h.userAgent.fc && !h.userAgent.X("8") || h.userAgent.ca && !h.userAgent.X("9"), wo:"ontouchstart" in h.global || !!(h.global.document && document.documentElement && 
"ontouchstart" in document.documentElement) || !(!h.global.navigator || !h.global.navigator.msMaxTouchPoints)};
h.b.wc = function(a) {
  return h.userAgent.fa ? "webkit" + a : h.userAgent.Ad ? "o" + a.toLowerCase() : a.toLowerCase();
};
h.b.ge = {sl:"click", fo:"rightclick", Hl:"dblclick", en:"mousedown", jn:"mouseup", Ig:"mouseover", Hg:"mouseout", hn:"mousemove", fn:"mouseenter", gn:"mouseleave", ko:"selectstart", Dm:"keypress", Cm:"keydown", Em:"keyup", ol:"blur", hm:"focus", Il:"deactivate", im:h.userAgent.ca ? "focusin" : "DOMFocusIn", jm:h.userAgent.ca ? "focusout" : "DOMFocusOut", ql:"change", jo:"select", po:"submit", vm:"input", Xn:"propertychange", Zl:"dragstart", Ul:"drag", Wl:"dragenter", Yl:"dragover", Xl:"dragleave", 
$l:"drop", Vl:"dragend", vo:"touchstart", uo:"touchmove", to:"touchend", so:"touchcancel", nl:"beforeunload", Bl:"consolemessage", Cl:"contextmenu", Ol:"DOMContentLoaded", ERROR:"error", qm:"help", Jm:"load", Tm:"losecapture", Hn:"orientationchange", Yn:"readystatechange", bo:"resize", io:"scroll", zo:"unload", mm:"hashchange", In:"pagehide", Jn:"pageshow", Vn:"popstate", Dl:"copy", Kn:"paste", Fl:"cut", kl:"beforecopy", ll:"beforecut", ml:"beforepaste", Gn:"online", Fn:"offline", bn:"message", Al:"connect", 
hl:h.b.wc("AnimationStart"), fl:h.b.wc("AnimationEnd"), gl:h.b.wc("AnimationIteration"), xo:h.b.wc("TransitionEnd"), Nn:"pointerdown", Tn:"pointerup", Mn:"pointercancel", Qn:"pointermove", Sn:"pointerover", Rn:"pointerout", On:"pointerenter", Pn:"pointerleave", lm:"gotpointercapture", Um:"lostpointercapture", kn:"MSGestureChange", ln:"MSGestureEnd", mn:"MSGestureHold", nn:"MSGestureStart", pn:"MSGestureTap", qn:"MSGotPointerCapture", rn:"MSInertiaStart", sn:"MSLostPointerCapture", tn:"MSPointerCancel", 
un:"MSPointerDown", vn:"MSPointerEnter", wn:"MSPointerHover", xn:"MSPointerLeave", yn:"MSPointerMove", zn:"MSPointerOut", An:"MSPointerOver", Bn:"MSPointerUp", ro:"textinput", yl:"compositionstart", zl:"compositionupdate", xl:"compositionend", em:"exit", Km:"loadabort", Lm:"loadcommit", Mm:"loadredirect", Nm:"loadstart", Om:"loadstop", co:"responsive", no:"sizechanged", Ao:"unresponsive", Do:"visibilitychange", oo:"storage", Tl:"DOMSubtreeModified", Pl:"DOMNodeInserted", Rl:"DOMNodeRemoved", Sl:"DOMNodeRemovedFromDocument", 
Ql:"DOMNodeInsertedIntoDocument", Ml:"DOMAttrModified", Nl:"DOMCharacterDataModified"};
h.b.$ = function(a, c) {
  h.b.Event.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.rb = this.state = null;
  a && this.init(a, c);
};
h.ja(h.b.$, h.b.Event);
h.b.$.Cn = {Hm:0, cn:1, eo:2};
h.b.$.tm = [1, 4, 2];
h.b.$.prototype.init = function(a, c) {
  var d = this.type = a.type;
  this.target = a.target || a.srcElement;
  this.currentTarget = c;
  var e = a.relatedTarget;
  e ? h.userAgent.fc && (h.Ia.Jg(e, "nodeName") || (e = null)) : d == h.b.ge.Ig ? e = a.fromElement : d == h.b.ge.Hg && (e = a.toElement);
  this.relatedTarget = e;
  this.offsetX = h.userAgent.fa || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = h.userAgent.fa || void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == d ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.rb = a;
  a.defaultPrevented && this.preventDefault();
};
h.b.$.prototype.stopPropagation = function() {
  h.b.$.oa.stopPropagation.call(this);
  this.rb.stopPropagation ? this.rb.stopPropagation() : this.rb.cancelBubble = !0;
};
h.b.$.prototype.preventDefault = function() {
  h.b.$.oa.preventDefault.call(this);
  var a = this.rb;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, h.b.Zb.Lg) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (c) {
      }
    }
  }
};
h.b.$.prototype.na = function() {
};
h.b.N = function() {
};
h.b.N.qe = "closure_listenable_" + (1E6 * Math.random() | 0);
h.b.N.wk = function(a) {
  a.prototype[h.b.N.qe] = !0;
};
h.b.N.la = function(a) {
  return!(!a || !a[h.b.N.qe]);
};
h.b.gc = function() {
};
h.b.gc.$g = 0;
h.b.gc.Mg = function() {
  return++h.b.gc.$g;
};
h.b.Tc = function(a, c, d, e, f, g) {
  this.Ga = a;
  this.proxy = c;
  this.src = d;
  this.type = e;
  this.capture = !!f;
  this.ec = g;
  this.key = h.b.gc.Mg();
  this.removed = this.Fa = !1;
};
h.b.Tc.bm = !1;
h.b.Tc.prototype.Xb = function() {
  this.removed = !0;
  this.ec = this.src = this.proxy = this.Ga = null;
};
h.b.wa = function(a) {
  this.src = a;
  this.F = {};
  this.lb = 0;
};
b = h.b.wa.prototype;
b.Bg = function() {
  return this.lb;
};
b.add = function(a, c, d, e, f) {
  var g = a.toString();
  a = this.F[g];
  a || (a = this.F[g] = [], this.lb++);
  var k = h.b.wa.Ac(a, c, e, f);
  -1 < k ? (c = a[k], d || (c.Fa = !1)) : (c = new h.b.Tc(c, null, this.src, g, !!e, f), c.Fa = d, a.push(c));
  return c;
};
b.remove = function(a, c, d, e) {
  a = a.toString();
  if (!(a in this.F)) {
    return!1;
  }
  var f = this.F[a];
  c = h.b.wa.Ac(f, c, d, e);
  return-1 < c ? (f[c].Xb(), h.a.mb(f, c), 0 == f.length && (delete this.F[a], this.lb--), !0) : !1;
};
b.Yd = function(a) {
  var c = a.type;
  if (!(c in this.F)) {
    return!1;
  }
  var d = h.a.remove(this.F[c], a);
  d && (a.Xb(), 0 == this.F[c].length && (delete this.F[c], this.lb--));
  return d;
};
b.removeAll = function(a) {
  a = a && a.toString();
  var c = 0, d;
  for (d in this.F) {
    if (!a || d == a) {
      for (var e = this.F[d], f = 0;f < e.length;f++) {
        ++c, e[f].Xb();
      }
      delete this.F[d];
      this.lb--;
    }
  }
  return c;
};
b.ub = function(a, c) {
  var d = this.F[a.toString()], e = [];
  if (d) {
    for (var f = 0;f < d.length;++f) {
      var g = d[f];
      g.capture == c && e.push(g);
    }
  }
  return e;
};
b.Ya = function(a, c, d, e) {
  a = this.F[a.toString()];
  var f = -1;
  a && (f = h.b.wa.Ac(a, c, d, e));
  return-1 < f ? a[f] : null;
};
b.hasListener = function(a, c) {
  var d = h.T(a), e = d ? a.toString() : "", f = h.T(c);
  return h.object.some(this.F, function(a) {
    for (var k = 0;k < a.length;++k) {
      if (!(d && a[k].type != e || f && a[k].capture != c)) {
        return!0;
      }
    }
    return!1;
  });
};
h.b.wa.Ac = function(a, c, d, e) {
  for (var f = 0;f < a.length;++f) {
    var g = a[f];
    if (!g.removed && g.Ga == c && g.capture == !!d && g.ec == e) {
      return f;
    }
  }
  return-1;
};
h.b.Lq = {};
h.b.Fc = "closure_lm_" + (1E6 * Math.random() | 0);
h.b.ah = "on";
h.b.$c = {};
h.b.Hc = {sg:0, tg:1, Cg:2};
h.b.Gc = 2;
h.b.$b = 0;
h.b.listen = function(a, c, d, e, f) {
  if (h.isArray(c)) {
    for (var g = 0;g < c.length;g++) {
      h.b.listen(a, c[g], d, e, f);
    }
    return null;
  }
  d = h.b.dc(d);
  return h.b.N.la(a) ? a.listen(c, d, e, f) : h.b.he(a, c, d, !1, e, f);
};
h.b.he = function(a, c, d, e, f, g) {
  if (!c) {
    throw Error("Invalid event type");
  }
  var k = !!f;
  if (k && !h.b.Zb.Ec) {
    if (h.b.Gc == h.b.Hc.sg) {
      return h.l.Sa("Can not register capture listener in IE8-."), null;
    }
    if (h.b.Gc == h.b.Hc.tg) {
      return null;
    }
  }
  var l = h.b.ya(a);
  l || (a[h.b.Fc] = l = new h.b.wa(a));
  d = l.add(c, d, e, f, g);
  if (d.proxy) {
    return d;
  }
  e = h.b.vg();
  d.proxy = e;
  e.src = a;
  e.Ga = d;
  a.addEventListener ? a.addEventListener(c.toString(), e, k) : a.attachEvent(h.b.Qd(c.toString()), e);
  h.b.$b++;
  return d;
};
h.b.vg = function() {
  var a = h.b.wb, c = h.b.Zb.Ec ? function(d) {
    return a.call(c.src, c.Ga, d);
  } : function(d) {
    d = a.call(c.src, c.Ga, d);
    if (!d) {
      return d;
    }
  };
  return c;
};
h.b.Uc = function(a, c, d, e, f) {
  if (h.isArray(c)) {
    for (var g = 0;g < c.length;g++) {
      h.b.Uc(a, c[g], d, e, f);
    }
    return null;
  }
  d = h.b.dc(d);
  return h.b.N.la(a) ? a.Uc(c, d, e, f) : h.b.he(a, c, d, !0, e, f);
};
h.b.Kq = function(a, c, d, e, f) {
  c.listen(a, d, e, f);
};
h.b.tb = function(a, c, d, e, f) {
  if (h.isArray(c)) {
    for (var g = 0;g < c.length;g++) {
      h.b.tb(a, c[g], d, e, f);
    }
    return null;
  }
  d = h.b.dc(d);
  if (h.b.N.la(a)) {
    return a.tb(c, d, e, f);
  }
  if (!a) {
    return!1;
  }
  if (a = h.b.ya(a)) {
    if (c = a.Ya(c, d, !!e, f)) {
      return h.b.Ua(c);
    }
  }
  return!1;
};
h.b.Ua = function(a) {
  if (h.isNumber(a) || !a || a.removed) {
    return!1;
  }
  var c = a.src;
  if (h.b.N.la(c)) {
    return c.Ua(a);
  }
  var d = a.type, e = a.proxy;
  c.removeEventListener ? c.removeEventListener(d, e, a.capture) : c.detachEvent && c.detachEvent(h.b.Qd(d), e);
  h.b.$b--;
  (d = h.b.ya(c)) ? (d.Yd(a), 0 == d.Bg() && (d.src = null, c[h.b.Fc] = null)) : a.Xb();
  return!0;
};
h.b.Lr = function(a, c, d, e, f) {
  c.tb(a, d, e, f);
};
h.b.removeAll = function(a, c) {
  if (!a) {
    return 0;
  }
  if (h.b.N.la(a)) {
    return a.Xd(c);
  }
  var d = h.b.ya(a);
  if (!d) {
    return 0;
  }
  var e = 0, f = c && c.toString(), g;
  for (g in d.F) {
    if (!f || g == f) {
      for (var k = d.F[g].concat(), l = 0;l < k.length;++l) {
        h.b.Ua(k[l]) && ++e;
      }
    }
  }
  return e;
};
h.b.er = function() {
  return h.b.$b = 0;
};
h.b.ub = function(a, c, d) {
  return h.b.N.la(a) ? a.ub(c, d) : a ? (a = h.b.ya(a)) ? a.ub(c, d) : [] : [];
};
h.b.Ya = function(a, c, d, e, f) {
  d = h.b.dc(d);
  e = !!e;
  return h.b.N.la(a) ? a.Ya(c, d, e, f) : a ? (a = h.b.ya(a)) ? a.Ya(c, d, e, f) : null : null;
};
h.b.hasListener = function(a, c, d) {
  if (h.b.N.la(a)) {
    return a.hasListener(c, d);
  }
  a = h.b.ya(a);
  return!!a && a.hasListener(c, d);
};
h.b.Ck = function(a) {
  var c = [], d;
  for (d in a) {
    a[d] && a[d].id ? c.push(d + " = " + a[d] + " (" + a[d].id + ")") : c.push(d + " = " + a[d]);
  }
  return c.join("\n");
};
h.b.Qd = function(a) {
  return a in h.b.$c ? h.b.$c[a] : h.b.$c[a] = h.b.ah + a;
};
h.b.$a = function(a, c, d, e) {
  return h.b.N.la(a) ? a.$a(c, d, e) : h.b.Nc(a, c, d, e);
};
h.b.Nc = function(a, c, d, e) {
  var f = 1;
  if (a = h.b.ya(a)) {
    if (c = a.F[c.toString()]) {
      for (c = c.concat(), a = 0;a < c.length;a++) {
        var g = c[a];
        g && g.capture == d && !g.removed && (f &= !1 !== h.b.Oc(g, e));
      }
    }
  }
  return Boolean(f);
};
h.b.Oc = function(a, c) {
  var d = a.Ga, e = a.ec || a.src;
  a.Fa && h.b.Ua(a);
  return d.call(e, c);
};
h.b.aq = function() {
  return h.b.$b;
};
h.b.dispatchEvent = function(a, c) {
  return a.dispatchEvent(c);
};
h.b.br = function(a) {
  h.b.wb = a.al(h.b.wb);
};
h.b.wb = function(a, c) {
  if (a.removed) {
    return!0;
  }
  if (!h.b.Zb.Ec) {
    var d = c || h.be("window.event"), e = new h.b.$(d, this), f = !0;
    if (h.b.Gc == h.b.Hc.Cg) {
      if (!h.b.Eg(d)) {
        h.b.Fg(d);
        for (var d = [], g = e.currentTarget;g;g = g.parentNode) {
          d.push(g);
        }
        for (var g = a.type, k = d.length - 1;!e.Ha && 0 <= k;k--) {
          e.currentTarget = d[k], f &= h.b.Nc(d[k], g, !0, e);
        }
        for (k = 0;!e.Ha && k < d.length;k++) {
          e.currentTarget = d[k], f &= h.b.Nc(d[k], g, !1, e);
        }
      }
    } else {
      f = h.b.Oc(a, e);
    }
    return f;
  }
  return h.b.Oc(a, new h.b.$(c, this));
};
h.b.Fg = function(a) {
  var c = !1;
  if (0 == a.keyCode) {
    try {
      a.keyCode = -1;
      return;
    } catch (d) {
      c = !0;
    }
  }
  if (c || void 0 == a.returnValue) {
    a.returnValue = !0;
  }
};
h.b.Eg = function(a) {
  return 0 > a.keyCode || void 0 != a.returnValue;
};
h.b.hh = 0;
h.b.cq = function(a) {
  return a + "_" + h.b.hh++;
};
h.b.ya = function(a) {
  a = a[h.b.Fc];
  return a instanceof h.b.wa ? a : null;
};
h.b.ad = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
h.b.dc = function(a) {
  if (h.isFunction(a)) {
    return a;
  }
  a[h.b.ad] || (a[h.b.ad] = function(c) {
    return a.handleEvent(c);
  });
  return a[h.b.ad];
};
h.debug.H.register(function(a) {
  h.b.wb = a(h.b.wb);
});
h.b.EventTarget = function() {
  h.q.call(this);
  this.ga = new h.b.wa(this);
  this.Dg = this;
  this.Zd = null;
};
h.ja(h.b.EventTarget, h.q);
h.b.N.wk(h.b.EventTarget);
h.b.EventTarget.Wm = 1E3;
b = h.b.EventTarget.prototype;
b.xe = function() {
  return this.Zd;
};
b.addEventListener = function(a, c, d, e) {
  h.b.listen(this, a, c, d, e);
};
b.removeEventListener = function(a, c, d, e) {
  h.b.tb(this, a, c, d, e);
};
b.dispatchEvent = function(a) {
  var c, d = this.xe();
  if (d) {
    for (c = [];d;d = d.xe()) {
      c.push(d);
    }
  }
  return h.b.EventTarget.Yg(this.Dg, a, c);
};
b.na = function() {
  h.b.EventTarget.oa.na.call(this);
  this.Xd();
  this.Zd = null;
};
b.listen = function(a, c, d, e) {
  return this.ga.add(String(a), c, !1, d, e);
};
b.Uc = function(a, c, d, e) {
  return this.ga.add(String(a), c, !0, d, e);
};
b.tb = function(a, c, d, e) {
  return this.ga.remove(String(a), c, d, e);
};
b.Ua = function(a) {
  return this.ga.Yd(a);
};
b.Xd = function(a) {
  return this.ga ? this.ga.removeAll(a) : 0;
};
b.$a = function(a, c, d) {
  a = this.ga.F[String(a)];
  if (!a) {
    return!0;
  }
  a = a.concat();
  for (var e = !0, f = 0;f < a.length;++f) {
    var g = a[f];
    if (g && !g.removed && g.capture == c) {
      var k = g.Ga, l = g.ec || g.src;
      g.Fa && this.Ua(g);
      e = !1 !== k.call(l, d) && e;
    }
  }
  return e && !1 != d.$d;
};
b.ub = function(a, c) {
  return this.ga.ub(String(a), c);
};
b.Ya = function(a, c, d, e) {
  return this.ga.Ya(String(a), c, d, e);
};
b.hasListener = function(a, c) {
  return this.ga.hasListener(h.T(a) ? String(a) : void 0, c);
};
h.b.EventTarget.Yg = function(a, c, d) {
  var e = c.type || c;
  if (h.isString(c)) {
    c = new h.b.Event(c, a);
  } else {
    if (c instanceof h.b.Event) {
      c.target = c.target || a;
    } else {
      var f = c;
      c = new h.b.Event(e, a);
      h.object.extend(c, f);
    }
  }
  var f = !0, g;
  if (d) {
    for (var k = d.length - 1;!c.Ha && 0 <= k;k--) {
      g = c.currentTarget = d[k], f = g.$a(e, !0, c) && f;
    }
  }
  c.Ha || (g = c.currentTarget = a, f = g.$a(e, !0, c) && f, c.Ha || (f = g.$a(e, !1, c) && f));
  if (d) {
    for (k = 0;!c.Ha && k < d.length;k++) {
      g = c.currentTarget = d[k], f = g.$a(e, !1, c) && f;
    }
  }
  return f;
};
h.G = function(a, c) {
  h.b.EventTarget.call(this);
  this.sb = a || 1;
  this.Xa = c || h.G.Sc;
  this.Pc = h.bind(this.Gg, this);
  this.Qc = h.now();
};
h.ja(h.G, h.b.EventTarget);
h.G.Xi = 2147483647;
h.G.prototype.enabled = !1;
h.G.Sc = h.global;
h.G.Ei = .8;
b = h.G.prototype;
b.W = null;
b.setInterval = function(a) {
  this.sb = a;
  this.W && this.enabled ? (this.stop(), this.start()) : this.W && this.stop();
};
b.Gg = function() {
  if (this.enabled) {
    var a = h.now() - this.Qc;
    0 < a && a < this.sb * h.G.Ei ? this.W = this.Xa.setTimeout(this.Pc, this.sb - a) : (this.W && (this.Xa.clearTimeout(this.W), this.W = null), this.Di(), this.enabled && (this.W = this.Xa.setTimeout(this.Pc, this.sb), this.Qc = h.now()));
  }
};
b.Di = function() {
  this.dispatchEvent(h.G.dj);
};
b.start = function() {
  this.enabled = !0;
  this.W || (this.W = this.Xa.setTimeout(this.Pc, this.sb), this.Qc = h.now());
};
b.stop = function() {
  this.enabled = !1;
  this.W && (this.Xa.clearTimeout(this.W), this.W = null);
};
b.na = function() {
  h.G.oa.na.call(this);
  this.stop();
  delete this.Xa;
};
h.G.dj = "tick";
h.G.Fa = function(a, c, d) {
  if (h.isFunction(a)) {
    d && (a = h.bind(a, d));
  } else {
    if (a && "function" == typeof a.handleEvent) {
      a = h.bind(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return c > h.G.Xi ? -1 : h.G.Sc.setTimeout(a, c || 0);
};
h.G.clear = function(a) {
  h.G.Sc.clearTimeout(a);
};
m.pa = function() {
  this.kf = this.Ab = 0;
  this.hf = 1;
  this.Bb = 0;
  this.ld = void 0;
  this.bf = this.jd = null;
  this.mc = 0;
  this.nc = !1;
  this.md = this.Cb = null;
};
h.ja(m.pa, h.q);
b = m.pa.prototype;
b.start = function(a, c, d) {
  if (this.jf()) {
    throw Error("Cannot call Retry.start more than once.");
  }
  if (!this.Ab) {
    throw Error("Cannot use AsyncRetry without setting a nonzero retry delay.");
  }
  this.jd = a;
  this.Hi = c || null;
  this.bf = d || null;
  h.G.Fa(h.bind(this.Ze, this), 0);
};
b.Ze = function() {
  this.Cb = null;
  if (this.Bb && this.mc >= this.Bb) {
    this.abort(this.ld);
  } else {
    if (!this.nc) {
      this.md = new m.pa.oc(this, this.mc);
      this.mc++;
      try {
        this.jd(this.md);
      } finally {
        this.nc || (this.Cb = h.G.Fa(h.bind(this.Ze, this), this.Ab)), this.ci();
      }
    }
  }
};
b.ci = function() {
  var a = this.Ab * this.hf;
  this.kf && (a = Math.min(a, this.kf));
  this.Ab = a;
};
b.li = function(a, c) {
  this.Bb = a;
  this.ld = c;
  return this;
};
b.mi = function(a) {
  this.Ab = a;
  return this;
};
b.ki = function(a) {
  this.hf = a;
  return this;
};
b.jj = function(a) {
  if (!this.jf()) {
    throw Error("Not started yet.");
  }
  this.Ef(this.Hi, a);
};
b.abort = function(a) {
  this.Ef(this.bf, a);
};
b.ij = function(a) {
  a === this.md && this.Bb && (this.mc < this.Bb || this.abort(this.ld));
};
b.Ef = function(a, c) {
  null != this.Cb && (h.G.clear(this.Cb), this.Cb = null);
  this.nc || (this.nc = !0, a && a(c));
};
b.na = function() {
  m.pa.oa.na.call(this);
  this.abort();
};
b.jf = function() {
  return null != this.jd;
};
m.pa.oc = function(a) {
  this.Gd = a;
  this.Oa = !1;
};
m.pa.oc.prototype.Sa = function() {
  this.Oa || (this.Oa = !0, this.Gd.ij(this));
};
m.pa.oc.prototype.ni = function(a) {
  this.Oa || (this.Oa = !0, this.Gd.jj(a));
};
m.pa.oc.prototype.abort = function(a) {
  this.Oa || (this.Oa = !0, this.Gd.abort(a));
};
m.xf = function(a) {
  this.Eb = a;
  this.Dd = this.P = null;
};
b = m.xf.prototype;
b.cj = function(a) {
  this.Dd = a;
};
b.df = function(a) {
  a.clientId = this.Eb;
  if (!this.P && (this.ef(), !this.P)) {
    return;
  }
  this.P.postMessage(a);
};
b.ef = function() {
  !this.P && (this.P = chrome.runtime.connect({name:this.Eb})) && (this.P.onMessage.addListener(h.bind(this.cf, this)), this.P.onDisconnect.addListener(h.bind(this.Wi, this)));
};
b.cf = function(a) {
  this.Dd && this.Dd(a);
};
b.Wi = function() {
  this.P = null;
  var a = new m.pa;
  a.mi(100);
  a.ki(2);
  a.li(6);
  var c = h.bind(function(a) {
    this.ef();
    this.P ? a.ni() : a.Sa();
  }, this), d = h.bind(function() {
    this.df(new m.pd(m.L.hi, null));
  }, this), e = h.bind(function() {
    this.cf(new m.pd(m.L.Xe, null));
  }, this);
  a.start(c, d, e);
};
m.Hb = function(a) {
  this.Of = a;
  this.Mf = null;
};
m.Hb.prototype.init = function() {
  window.addEventListener("message", this.Vk.bind(this), !1);
};
m.Hb.prototype.bj = function(a) {
  this.Mf = a;
};
m.Hb.prototype.Vk = function(a) {
  if (a.source != window) {
    var c = a.data;
    this.Of = c.appOrigin = a.origin;
    this.Mf(c);
  }
};
m.Hb.prototype.gf = function(a) {
  a.clientId = null;
  window.parent.postMessage(a, this.Of);
};
m.Kb = function() {
  this.Eb = "client-" + String(Math.floor(1E5 * Math.random()));
  this.sessionRequest = null;
  this.lc = new m.Hb(m.Cd.Pi("appOrigin"));
  this.lf = new m.xf(this.Eb);
};
m.Kb.prototype.init = function() {
  this.lc.init();
  this.lc.bj(this.Zi.bind(this));
  this.lf.cj(this.$i.bind(this));
  this.aj(null);
};
m.Kb.prototype.aj = function(a) {
  this.lc.gf(new m.pd(m.L.Oi, a));
};
m.Kb.prototype.Zi = function(a) {
  a.clientId = this.Eb;
  this.lf.df(a);
};
m.Kb.prototype.$i = function(a) {
  switch(a.type) {
    case m.L.ri:
    ;
    case m.L.si:
    ;
    case m.L.ERROR:
    ;
    case m.L.ui:
    ;
    case m.L.Bi:
    ;
    case m.L.xi:
    ;
    case m.L.wi:
    ;
    case m.L.Ci:
    ;
    case m.L.Ai:
    ;
    case m.L.yi:
    ;
    case m.L.Xe:
    ;
    case m.L.ti:
    ;
    case m.L.zi:
    ;
    case m.L.vi:
      this.lc.gf(a);
  }
};
m.Ik = new m.Kb;
m.Ik.init();

