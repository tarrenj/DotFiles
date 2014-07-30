var b, chrome = window.chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var h = h || {};
h.global = this;
h.T = function(a) {
  return void 0 !== a;
};
h.Md = function(a, c, d) {
  a = a.split(".");
  d = d || h.global;
  a[0] in d || !d.execScript || d.execScript("var " + a[0]);
  for (var e;a.length && (e = a.shift());) {
    !a.length && h.T(c) ? d[e] = c : d = d[e] ? d[e] : d[e] = {};
  }
};
h.up = function(a, c) {
  h.Md(a, c);
};
h.Na = !0;
h.Im = "en";
h.lg = !0;
h.Ad = !1;
h.Vq = function(a) {
  h.Md(a);
};
h.gr = function(a) {
  if (!h.Na) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  }
};
h.Bp = function() {
};
h.ce = function(a, c) {
  for (var d = a.split("."), e = c || h.global, f;f = d.shift();) {
    if (h.Ud(e[f])) {
      e = e[f];
    } else {
      return null;
    }
  }
  return e;
};
h.Xp = function(a, c) {
  var d = c || h.global, e;
  for (e in a) {
    d[e] = a[e];
  }
};
h.yo = function(a, c, d) {
  if (h.Ef) {
    var e;
    a = a.replace(/\\/g, "/");
    for (var f = h.gb, g = 0;e = c[g];g++) {
      f.Ib[e] = a, a in f.Gd || (f.Gd[a] = {}), f.Gd[a][e] = !0;
    }
    for (e = 0;c = d[e];e++) {
      a in f.requires || (f.requires[a] = {}), f.requires[a][c] = !0;
    }
  }
};
h.Er = !1;
h.Sl = !0;
h.require = function() {
};
h.uc = "";
h.Lk = function() {
};
h.bq = function(a) {
  return a;
};
h.wo = function() {
  throw Error("unimplemented abstract method");
};
h.zo = function(a) {
  a.Re = function() {
    if (a.Jb) {
      return a.Jb;
    }
    h.Na && (h.Ff[h.Ff.length] = a);
    return a.Jb = new a;
  };
};
h.Ff = [];
h.Ef = !1;
h.Ef && (h.Oi = {}, h.gb = {Gd:{}, Ib:{}, requires:{}, xf:{}, vc:{}}, h.Lf = function() {
  var a = h.global.document;
  return "undefined" != typeof a && "write" in a;
}, h.wk = function() {
  if (h.global.tj) {
    h.uc = h.global.tj;
  } else {
    if (h.Lf()) {
      for (var a = h.global.document.getElementsByTagName("script"), c = a.length - 1;0 <= c;--c) {
        var d = a[c].src, e = d.lastIndexOf("?"), e = -1 == e ? d.length : e;
        if ("base.js" == d.substr(e - 7, 7)) {
          h.uc = d.substr(0, e - 7);
          break;
        }
      }
    }
  }
}, h.vf = function(a) {
  var c = h.global.Wk || h.jj;
  !h.gb.vc[a] && c(a) && (h.gb.vc[a] = !0);
}, h.jj = function(a) {
  if (h.Lf()) {
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
}, h.Hr = function() {
  function a(f) {
    if (!(f in e.vc)) {
      if (!(f in e.xf) && (e.xf[f] = !0, f in e.requires)) {
        for (var k in e.requires[f]) {
          if (!h.Tk(k)) {
            if (k in e.Ib) {
              a(e.Ib[k]);
            } else {
              throw Error("Undefined nameToPath for " + k);
            }
          }
        }
      }
      f in d || (d[f] = !0, c.push(f));
    }
  }
  var c = [], d = {}, e = h.gb, f;
  for (f in h.Oi) {
    e.vc[f] || a(f);
  }
  for (f = 0;f < c.length;f++) {
    if (c[f]) {
      h.vf(h.uc + c[f]);
    } else {
      throw Error("Undefined script input");
    }
  }
}, h.Op = function(a) {
  return a in h.gb.Ib ? h.gb.Ib[a] : null;
}, h.wk(), h.global.ml || h.vf(h.uc + "deps.js"));
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
h.ki = function(a) {
  return null === a;
};
h.Ud = function(a) {
  return null != a;
};
h.isArray = function(a) {
  return "array" == h.V(a);
};
h.D = function(a) {
  var c = h.V(a);
  return "array" == c || "object" == c && "number" == typeof a.length;
};
h.kq = function(a) {
  return h.isObject(a) && "function" == typeof a.getFullYear;
};
h.isString = function(a) {
  return "string" == typeof a;
};
h.si = function(a) {
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
h.Gb = function(a) {
  return a[h.Mb] || (a[h.Mb] = ++h.wj);
};
h.$p = function(a) {
  return!!a[h.Mb];
};
h.Nk = function(a) {
  "removeAttribute" in a && a.removeAttribute(h.Mb);
  try {
    delete a[h.Mb];
  } catch (c) {
  }
};
h.Mb = "closure_uid_" + (1E9 * Math.random() >>> 0);
h.wj = 0;
h.Gp = h.Gb;
h.Yq = h.Nk;
h.mj = function(a) {
  var c = h.V(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = h.mj(a[d]);
    }
    return c;
  }
  return a;
};
h.zj = function(a, c, d) {
  return a.call.apply(a.bind, arguments);
};
h.yj = function(a, c, d) {
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
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? h.bind = h.zj : h.bind = h.yj;
  return h.bind.apply(null, arguments);
};
h.Ee = function(a, c) {
  var d = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = d.slice();
    c.push.apply(c, arguments);
    return a.apply(this, c);
  };
};
h.mg = function(a, c) {
  for (var d in c) {
    a[d] = c[d];
  }
};
h.now = h.lg && Date.now || function() {
  return+new Date;
};
h.Wp = function(a) {
  if (h.global.execScript) {
    h.global.execScript(a, "JavaScript");
  } else {
    if (h.global.eval) {
      if (null == h.yc && (h.global.eval("var _et_ = 1;"), "undefined" != typeof h.global._et_ ? (delete h.global._et_, h.yc = !0) : h.yc = !1), h.yc) {
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
h.yc = null;
h.Ep = function(a, c) {
  var d = function(a) {
    return h.Wf[a] || a;
  }, e = function(a) {
    a = a.split("-");
    for (var c = [], e = 0;e < a.length;e++) {
      c.push(d(a[e]));
    }
    return c.join("-");
  }, e = h.Wf ? "BY_WHOLE" == h.xj ? d : e : function(a) {
    return a;
  };
  return c ? a + "-" + e(c) : e(a);
};
h.cr = function(a, c) {
  h.Wf = a;
  h.xj = c;
};
h.Ip = function(a, c) {
  var d = c || {}, e;
  for (e in d) {
    var f = ("" + d[e]).replace(/\$/g, "$$$$");
    a = a.replace(new RegExp("\\{\\$" + e + "\\}", "gi"), f);
  }
  return a;
};
h.Jp = function(a) {
  return a;
};
h.k = function(a, c, d) {
  h.Md(a, c, d);
};
h.Qa = function(a, c, d) {
  a[c] = d;
};
h.ja = function(a, c) {
  function d() {
  }
  d.prototype = c.prototype;
  a.oa = c.prototype;
  a.prototype = new d;
  a.prototype.constructor = a;
  a.sj = function(a, d, g) {
    var k = Array.prototype.slice.call(arguments, 2);
    return c.prototype[d].apply(a, k);
  };
};
h.sj = function(a, c, d) {
  var e = arguments.callee.caller;
  if (h.Ad || h.Na && !e) {
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
h.Tj = !0;
h.Tj && (Function.prototype.bind = Function.prototype.bind || function(a, c) {
  if (1 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 1);
    d.unshift(this, a);
    return h.bind.apply(null, d);
  }
  return h.bind(this, a);
}, Function.prototype.Ee = function(a) {
  var c = Array.prototype.slice.call(arguments);
  c.unshift(this, null);
  return h.bind.apply(null, c);
}, Function.prototype.ja = function(a) {
  h.ja(this, a);
}, Function.prototype.mg = function(a) {
  h.mg(this.prototype, a);
});
h.ia = function(a, c) {
  var d = c.constructor, e = c.Wi;
  if (!d || d == Object.prototype.constructor) {
    throw Error("constructor property is required.");
  }
  d = h.ia.Vi(d);
  a && h.ja(d, a);
  delete c.constructor;
  delete c.Wi;
  h.ia.Bf(d.prototype, c);
  null != e && (e instanceof Function ? e(d) : h.ia.Bf(d, e));
  return d;
};
h.ia.rj = h.Na;
h.ia.Vi = function(a) {
  if (h.ia.rj && Object.seal instanceof Function) {
    var c = function() {
      var d = a.apply(this, arguments) || this;
      this.constructor === c && Object.seal(d);
      return d;
    };
    return c;
  }
  return a;
};
h.ia.Gf = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
h.ia.Bf = function(a, c) {
  for (var d in c) {
    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
  for (var e = 0;e < h.ia.Gf.length;e++) {
    d = h.ia.Gf[e], Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
  }
};
var m = {Ba:{wm:"LAUNCH", If:"STOP", gk:"SET_VOLUME", Lj:"GET_STATUS", Pn:"RECEIVER_STATUS", ro:"CONNECT", so:"CLOSE", bm:"GET_APP_AVAILABILITY", uj:"LOAD", Om:"PAUSE", Qm:"SEEK", Pm:"PLAY", Sj:"STOP_MEDIA", Qj:"MEDIA_GET_STATUS", Rj:"MEDIA_SET_VOLUME", om:"INVALID_PLAYER_STATE", Hm:"LOAD_FAILED", Gm:"LOAD_CANCELLED", pm:"INVALID_REQUEST", Rm:"MEDIA_STATUS", xm:"LAUNCH_ERROR", Bn:"PING", Kn:"PONG"}, Ld:{}};
m.Ld[m.Ba.Sj] = m.Ba.If;
m.Ld[m.Ba.Rj] = m.Ba.gk;
m.Ld[m.Ba.Qj] = m.Ba.Lj;
m.al = function(a, c, d) {
  this.sessionId = a;
  this.namespaceName = c;
  this.message = d;
};
m.eo = function(a) {
  this.type = m.Ba.If;
  this.requestId = null;
  this.sessionId = a || null;
};
chrome.cast.Sf = {TAB_AND_ORIGIN_SCOPED:"tab_and_origin_scoped", ORIGIN_SCOPED:"origin_scoped", PAGE_SCOPED:"page_scoped"};
h.k("chrome.cast.AutoJoinPolicy", chrome.cast.Sf);
chrome.cast.Tf = {CREATE_SESSION:"create_session", CAST_THIS_TAB:"cast_this_tab"};
h.k("chrome.cast.DefaultActionPolicy", chrome.cast.Tf);
chrome.cast.Kd = {VIDEO_OUT:"video_out", AUDIO_OUT:"audio_out", VIDEO_IN:"video_in", AUDIO_IN:"audio_in"};
h.k("chrome.cast.Capability", chrome.cast.Kd);
chrome.cast.Ij = {CANCEL:"cancel", TIMEOUT:"timeout", API_NOT_INITIALIZED:"api_not_initialized", INVALID_PARAMETER:"invalid_parameter", EXTENSION_NOT_COMPATIBLE:"extension_not_compatible", EXTENSION_MISSING:"extension_missing", RECEIVER_UNAVAILABLE:"receiver_unavailable", SESSION_ERROR:"session_error", CHANNEL_ERROR:"channel_error", LOAD_MEDIA_FAILED:"load_media_failed"};
h.k("chrome.cast.ErrorCode", chrome.cast.Ij);
chrome.cast.dk = {AVAILABLE:"available", UNAVAILABLE:"unavailable"};
h.k("chrome.cast.ReceiverAvailability", chrome.cast.dk);
chrome.cast.kk = {CHROME:"chrome", IOS:"ios", ANDROID:"android"};
h.k("chrome.cast.SenderPlatform", chrome.cast.kk);
chrome.cast.jg = {CAST:"cast", DIAL:"dial", CUSTOM:"custom"};
h.k("chrome.cast.ReceiverType", chrome.cast.jg);
chrome.cast.Ej = {RUNNING:"running", STOPPED:"stopped", ERROR:"error"};
h.k("chrome.cast.DialAppState", chrome.cast.Ej);
chrome.cast.ck = {CAST:"cast", STOP:"stop"};
h.k("chrome.cast.ReceiverAction", chrome.cast.ck);
chrome.cast.VERSION = [1, 2];
h.k("chrome.cast.VERSION", chrome.cast.VERSION);
chrome.cast.La = function(a, c, d) {
  this.code = a;
  this.description = c || null;
  this.details = d || null;
};
h.k("chrome.cast.Error", chrome.cast.La);
chrome.cast.jk = function(a) {
  this.platform = a;
  this.packageId = this.url = null;
};
h.k("chrome.cast.SenderApplication", chrome.cast.jk);
chrome.cast.Oj = function(a) {
  this.url = a;
  this.width = this.height = null;
};
h.k("chrome.cast.Image", chrome.cast.Oj);
chrome.cast.Vf = function(a, c) {
  this.level = h.T(a) ? a : null;
  this.muted = h.T(c) ? c : null;
};
h.k("chrome.cast.Volume", chrome.cast.Vf);
chrome.cast.media.Vj = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
h.k("chrome.cast.media.MediaCommand", chrome.cast.media.Vj);
chrome.cast.media.ca = {GENERIC:0, TV_SHOW:1, MOVIE:2, MUSIC_TRACK:3, PHOTO:4};
h.k("chrome.cast.media.MetadataType", chrome.cast.media.ca);
chrome.cast.media.Uf = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
h.k("chrome.cast.media.PlayerState", chrome.cast.media.Uf);
chrome.cast.media.fk = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
h.k("chrome.cast.media.ResumeState", chrome.cast.media.fk);
chrome.cast.media.kg = {BUFFERED:"buffered", LIVE:"live", OTHER:"other"};
h.k("chrome.cast.media.StreamType", chrome.cast.media.kg);
chrome.cast.media.Nj = {CANCELLED:"CANCELLED", INTERRUPTED:"INTERRUPTED", FINISHED:"FINISHED", ERROR:"ERROR"};
h.k("chrome.cast.media.IdleReason", chrome.cast.media.Nj);
chrome.cast.media.Zj = function() {
  this.customData = null;
};
h.k("chrome.cast.media.PauseRequest", chrome.cast.media.Zj);
chrome.cast.media.ak = function() {
  this.customData = null;
};
h.k("chrome.cast.media.PlayRequest", chrome.cast.media.ak);
chrome.cast.media.ik = function() {
  this.customData = this.resumeState = this.currentTime = null;
};
h.k("chrome.cast.media.SeekRequest", chrome.cast.media.ik);
chrome.cast.media.mk = function() {
  this.customData = null;
};
h.k("chrome.cast.media.StopRequest", chrome.cast.media.mk);
chrome.cast.media.ok = function(a) {
  this.volume = a;
  this.customData = null;
};
h.k("chrome.cast.media.VolumeRequest", chrome.cast.media.ok);
chrome.cast.media.Pj = function(a) {
  this.type = m.Ba.uj;
  this.sessionId = this.requestId = null;
  this.media = a;
  this.autoplay = !0;
  this.customData = this.currentTime = null;
};
h.k("chrome.cast.media.LoadRequest", chrome.cast.media.Pj);
chrome.cast.media.Mj = function() {
  this.metadataType = this.type = chrome.cast.media.ca.GENERIC;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = null;
};
h.k("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.Mj);
chrome.cast.media.Xj = function() {
  this.metadataType = this.type = chrome.cast.media.ca.MOVIE;
  this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = null;
};
h.k("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.Xj);
chrome.cast.media.nk = function() {
  this.metadataType = this.type = chrome.cast.media.ca.TV_SHOW;
  this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = null;
};
h.k("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.nk);
chrome.cast.media.Yj = function() {
  this.metadataType = this.type = chrome.cast.media.ca.MUSIC_TRACK;
  this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = null;
};
h.k("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.Yj);
chrome.cast.media.$j = function() {
  this.metadataType = this.type = chrome.cast.media.ca.PHOTO;
  this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = null;
};
h.k("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.$j);
chrome.cast.media.Wj = function(a, c) {
  this.contentId = a;
  this.streamType = chrome.cast.media.kg.BUFFERED;
  this.contentType = c;
  this.customData = this.duration = this.metadata = null;
};
h.k("chrome.cast.media.MediaInfo", chrome.cast.media.Wj);
chrome.cast.media.Uj = function(a, c) {
  this.sessionId = a;
  this.mediaSessionId = c;
  this.media = null;
  this.playbackRate = 1;
  this.playerState = chrome.cast.media.Uf.IDLE;
  this.currentTime = 0;
  this.supportedMediaCommands = [];
  this.volume = new chrome.cast.Vf;
  this.customData = this.idleReason = null;
};
h.k("chrome.cast.media.Media", chrome.cast.media.Uj);
chrome.cast.media.Dj = "CC1AD845";
h.k("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.Dj);
chrome.cast.media.timeout = {};
h.k("chrome.cast.media.timeout", chrome.cast.media.timeout);
chrome.cast.media.timeout.load = 0;
h.Qa(chrome.cast.media.timeout, "load", chrome.cast.media.timeout.load);
chrome.cast.media.timeout.play = 0;
h.Qa(chrome.cast.media.timeout, "play", chrome.cast.media.timeout.play);
chrome.cast.media.timeout.pause = 0;
h.Qa(chrome.cast.media.timeout, "pause", chrome.cast.media.timeout.pause);
chrome.cast.media.timeout.seek = 0;
h.Qa(chrome.cast.media.timeout, "seek", chrome.cast.media.timeout.seek);
chrome.cast.media.timeout.stop = 0;
h.Qa(chrome.cast.media.timeout, "stop", chrome.cast.media.timeout.stop);
chrome.cast.media.timeout.Ok = 0;
h.Qa(chrome.cast.media.timeout, "setVolume", chrome.cast.media.timeout.Ok);
chrome.cast.Bj = function(a, c, d, e, f) {
  this.sessionRequest = a;
  this.sessionListener = c;
  this.receiverListener = d;
  this.autoJoinPolicy = e || chrome.cast.Sf.TAB_AND_ORIGIN_SCOPED;
  this.defaultActionPolicy = f || chrome.cast.Tf.CREATE_SESSION;
  this.customDialLaunchCallback = null;
};
h.k("chrome.cast.ApiConfig", chrome.cast.Bj);
chrome.cast.Hj = function(a, c) {
  this.appName = a;
  this.launchParameter = c || null;
};
h.k("chrome.cast.DialRequest", chrome.cast.Hj);
chrome.cast.Fj = function(a, c, d) {
  this.receiver = a;
  this.appState = c;
  this.extraData = d || null;
};
h.k("chrome.cast.DialLaunchData", chrome.cast.Fj);
chrome.cast.Gj = function(a, c) {
  this.doLaunch = a;
  this.launchParameter = c || null;
};
h.k("chrome.cast.DialLaunchResponse", chrome.cast.Gj);
chrome.cast.lk = function(a, c, d) {
  this.appId = a;
  this.capabilities = c || [chrome.cast.Kd.VIDEO_OUT, chrome.cast.Kd.AUDIO_OUT];
  this.dialRequest = null;
  this.requestSessionTimeout = d || chrome.cast.timeout.requestSession;
};
h.k("chrome.cast.SessionRequest", chrome.cast.lk);
chrome.cast.bk = function(a, c, d, e) {
  this.label = a;
  this.friendlyName = c;
  this.capabilities = d || [];
  this.volume = e || null;
  this.receiverType = chrome.cast.jg.CAST;
  this.displayStatus = this.isActiveInput = null;
};
h.k("chrome.cast.Receiver", chrome.cast.bk);
chrome.cast.ek = function(a, c) {
  this.statusText = a;
  this.appImages = c;
};
h.k("chrome.cast.ReceiverDisplayStatus", chrome.cast.ek);
chrome.cast.xc = function(a, c, d, e, f) {
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
h.k("chrome.cast.Session", chrome.cast.xc);
chrome.cast.xc.Cj = "custom_receiver_session_id";
h.Qa(chrome.cast.xc, "CUSTOM_RECEIVER_SESSION_ID", chrome.cast.xc.Cj);
chrome.cast.timeout = {};
h.k("chrome.cast.timeout", chrome.cast.timeout);
chrome.cast.timeout.requestSession = 1E4;
chrome.cast.timeout.stopSession = 3E3;
chrome.cast.timeout.setReceiverVolume = 3E3;
chrome.cast.timeout.sendCustomMessage = 3E3;
m.hg = function(a, c, d) {
  h.isNumber(d);
  this.Pa = !1;
};
m.hg.il = 432E5;
m.hg.Oq = function() {
};
m.sm = {};
m.rd = function(a, c, d, e, f, g) {
  this.type = a;
  this.message = c;
  this.seqNum = d || null;
  this.clientId = e || null;
  this.appOrigin = null;
  this.timeoutMillis = h.isNumber(f) ? f : 0;
  this.receiverId = g || null;
  this.receiverList = null;
};
m.L = {Si:"iframe_init_result", $e:"fail_to_connect_to_extension", ji:"client_reconnect", Gi:"v2_message", vi:"app_message", ll:"client_init", Jm:"log_message", Qn:"request_session", kl:"client_disconnect", Zn:"set_custom_receivers", vl:"custom_dial_launch_response", $n:"set_receiver_display_status", Ai:"receiver_availability", zi:"receiver_action", yi:"new_session", Fi:"update_session", Bi:"remove_session", wi:"app_message_success", Ei:"set_receiver_volume_success", Ci:"set_custom_receivers_success", 
ERROR:"error", xi:"custom_dial_launch_request", Di:"set_receiver_display_status_success"};
h.debug = {};
h.debug.La = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, h.debug.La);
  } else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
};
h.ja(h.debug.La, Error);
h.debug.La.prototype.name = "CustomError";
h.jf = {};
h.jf.qi = {pi:1, $k:2, fo:3, gl:4, Vl:5, Ul:6, Mn:7, nl:8, Al:9, Cl:10, Bl:11, tn:12};
h.c = {};
h.c.Yc = !1;
h.c.nh = {mh:"\u00a0"};
h.c.Ec = function(a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
h.c.tg = function(a, c) {
  var d = a.length - c.length;
  return 0 <= d && a.indexOf(c, d) == d;
};
h.c.ap = function(a, c) {
  return 0 == h.c.He(c, a.substr(0, c.length));
};
h.c.Zo = function(a, c) {
  return 0 == h.c.He(c, a.substr(a.length - c.length, c.length));
};
h.c.$o = function(a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
h.c.fh = function(a, c) {
  for (var d = a.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1);f.length && 1 < d.length;) {
    e += d.shift() + f.shift();
  }
  return e + d.join("%s");
};
h.c.gp = function(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
h.c.M = function(a) {
  return/^[\s\xa0]*$/.test(a);
};
h.c.mq = function(a) {
  return h.c.M(h.c.ah(a));
};
h.c.iq = function(a) {
  return!/[^\t\n\r ]/.test(a);
};
h.c.fq = function(a) {
  return!/[^a-zA-Z]/.test(a);
};
h.c.sq = function(a) {
  return!/[^0-9]/.test(a);
};
h.c.gq = function(a) {
  return!/[^a-zA-Z0-9]/.test(a);
};
h.c.wq = function(a) {
  return " " == a;
};
h.c.xq = function(a) {
  return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a;
};
h.c.qr = function(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ");
};
h.c.Yo = function(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n");
};
h.c.Mq = function(a) {
  return a.replace(/\xa0|\s/g, " ");
};
h.c.Lq = function(a) {
  return a.replace(/\xa0|[ \t]+/g, " ");
};
h.c.fp = function(a) {
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
h.c.He = function(a, c) {
  var d = String(a).toLowerCase(), e = String(c).toLowerCase();
  return d < e ? -1 : d == e ? 0 : 1;
};
h.c.Je = /(\.\d+)|(\d+)|(\D+)/g;
h.c.Pq = function(a, c) {
  if (a == c) {
    return 0;
  }
  if (!a) {
    return-1;
  }
  if (!c) {
    return 1;
  }
  for (var d = a.toLowerCase().match(h.c.Je), e = c.toLowerCase().match(h.c.Je), f = Math.min(d.length, e.length), g = 0;g < f;g++) {
    var k = d[g], l = e[g];
    if (k != l) {
      return d = parseInt(k, 10), !isNaN(d) && (e = parseInt(l, 10), !isNaN(e) && d - e) ? d - e : k < l ? -1 : 1;
    }
  }
  return d.length != e.length ? d.length - e.length : a < c ? -1 : 1;
};
h.c.kb = function(a) {
  return encodeURIComponent(String(a));
};
h.c.Tb = function(a) {
  return decodeURIComponent(a.replace(/\+/g, " "));
};
h.c.sh = function(a, c) {
  return a.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>");
};
h.c.Ab = function(a, c) {
  if (c) {
    a = a.replace(h.c.le, "&amp;").replace(h.c.oe, "&lt;").replace(h.c.ne, "&gt;").replace(h.c.qe, "&quot;").replace(h.c.re, "&#39;").replace(h.c.pe, "&#0;"), h.c.Yc && (a = a.replace(h.c.me, "&#101;"));
  } else {
    if (!h.c.Qg.test(a)) {
      return a;
    }
    -1 != a.indexOf("&") && (a = a.replace(h.c.le, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(h.c.oe, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(h.c.ne, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(h.c.qe, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(h.c.re, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(h.c.pe, "&#0;"));
    h.c.Yc && -1 != a.indexOf("e") && (a = a.replace(h.c.me, "&#101;"));
  }
  return a;
};
h.c.le = /&/g;
h.c.oe = /</g;
h.c.ne = />/g;
h.c.qe = /"/g;
h.c.re = /'/g;
h.c.pe = /\x00/g;
h.c.me = /e/g;
h.c.Qg = h.c.Yc ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
h.c.Ce = function(a) {
  return h.c.contains(a, "&") ? "document" in h.global ? h.c.Fe(a) : h.c.lh(a) : a;
};
h.c.Ar = function(a, c) {
  return h.c.contains(a, "&") ? h.c.Fe(a, c) : a;
};
h.c.Fe = function(a, c) {
  var d = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, e;
  e = c ? c.createElement("div") : h.global.document.createElement("div");
  return a.replace(h.c.rh, function(a, c) {
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
h.c.lh = function(a) {
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
h.c.rh = /&([^;\s<&]+);?/g;
h.c.Fr = function(a, c) {
  return h.c.sh(a.replace(/  /g, " &#160;"), c);
};
h.c.Tq = function(a) {
  return a.replace(/(^|[\n ]) /g, "$1" + h.c.nh.mh);
};
h.c.rr = function(a, c) {
  for (var d = c.length, e = 0;e < d;e++) {
    var f = 1 == d ? c : c.charAt(e);
    if (a.charAt(0) == f && a.charAt(a.length - 1) == f) {
      return a.substring(1, a.length - 1);
    }
  }
  return a;
};
h.c.truncate = function(a, c, d) {
  d && (a = h.c.Ce(a));
  a.length > c && (a = a.substring(0, c - 3) + "...");
  d && (a = h.c.Ab(a));
  return a;
};
h.c.zr = function(a, c, d, e) {
  d && (a = h.c.Ce(a));
  if (e && a.length > c) {
    e > c && (e = c), a = a.substring(0, c - e) + "..." + a.substring(a.length - e);
  } else {
    if (a.length > c) {
      e = Math.floor(c / 2);
      var f = a.length - e;
      a = a.substring(0, e + c % 2) + "..." + a.substring(f);
    }
  }
  d && (a = h.c.Ab(a));
  return a;
};
h.c.bd = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
h.c.kc = {"'":"\\'"};
h.c.quote = function(a) {
  a = String(a);
  if (a.quote) {
    return a.quote();
  }
  for (var c = ['"'], d = 0;d < a.length;d++) {
    var e = a.charAt(d), f = e.charCodeAt(0);
    c[d + 1] = h.c.bd[e] || (31 < f && 127 > f ? e : h.c.De(e));
  }
  c.push('"');
  return c.join("");
};
h.c.xp = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    c[d] = h.c.De(a.charAt(d));
  }
  return c.join("");
};
h.c.De = function(a) {
  if (a in h.c.kc) {
    return h.c.kc[a];
  }
  if (a in h.c.bd) {
    return h.c.kc[a] = h.c.bd[a];
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
  return h.c.kc[a] = c;
};
h.c.vr = function(a) {
  for (var c = {}, d = 0;d < a.length;d++) {
    c[a.charAt(d)] = !0;
  }
  return c;
};
h.c.contains = function(a, c) {
  return-1 != a.indexOf(c);
};
h.c.vg = function(a, c) {
  return h.c.contains(a.toLowerCase(), c.toLowerCase());
};
h.c.mp = function(a, c) {
  return a && c ? a.split(c).length - 1 : 0;
};
h.c.ob = function(a, c, d) {
  var e = a;
  0 <= c && c < a.length && 0 < d && (e = a.substr(0, c) + a.substr(c + d, a.length - c - d));
  return e;
};
h.c.remove = function(a, c) {
  var d = new RegExp(h.c.dd(c), "");
  return a.replace(d, "");
};
h.c.removeAll = function(a, c) {
  var d = new RegExp(h.c.dd(c), "g");
  return a.replace(d, "");
};
h.c.dd = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
h.c.repeat = function(a, c) {
  return Array(c + 1).join(a);
};
h.c.Rq = function(a, c, d) {
  a = h.T(d) ? a.toFixed(d) : String(a);
  d = a.indexOf(".");
  -1 == d && (d = a.length);
  return h.c.repeat("0", Math.max(0, c - d)) + a;
};
h.c.ah = function(a) {
  return null == a ? "" : String(a);
};
h.c.sg = function(a) {
  return Array.prototype.join.call(arguments, "");
};
h.c.Qd = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ h.now()).toString(36);
};
h.c.fc = function(a, c) {
  for (var d = 0, e = h.c.trim(String(a)).split("."), f = h.c.trim(String(c)).split("."), g = Math.max(e.length, f.length), k = 0;0 == d && k < g;k++) {
    var l = e[k] || "", n = f[k] || "", p = RegExp("(\\d*)(\\D*)", "g"), t = RegExp("(\\d*)(\\D*)", "g");
    do {
      var q = p.exec(l) || ["", "", ""], r = t.exec(n) || ["", "", ""];
      if (0 == q[0].length && 0 == r[0].length) {
        break;
      }
      d = h.c.ed(0 == q[1].length ? 0 : parseInt(q[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || h.c.ed(0 == q[2].length, 0 == r[2].length) || h.c.ed(q[2], r[2]);
    } while (0 == d);
  }
  return d;
};
h.c.ed = function(a, c) {
  return a < c ? -1 : a > c ? 1 : 0;
};
h.c.qh = 4294967296;
h.c.aq = function(a) {
  for (var c = 0, d = 0;d < a.length;++d) {
    c = 31 * c + a.charCodeAt(d), c %= h.c.qh;
  }
  return c;
};
h.c.th = 2147483648 * Math.random() | 0;
h.c.rp = function() {
  return "goog_" + h.c.th++;
};
h.c.wr = function(a) {
  var c = Number(a);
  return 0 == c && h.c.M(a) ? NaN : c;
};
h.c.rq = function(a) {
  return/^[a-z]+([A-Z][a-z]*)*$/.test(a);
};
h.c.yq = function(a) {
  return/^([A-Z][a-z]*)+$/.test(a);
};
h.c.ur = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, d) {
    return d.toUpperCase();
  });
};
h.c.xr = function(a) {
  return String(a).replace(/([A-Z])/g, "-$1").toLowerCase();
};
h.c.yr = function(a, c) {
  var d = h.isString(c) ? h.c.dd(c) : "\\s";
  return a.replace(new RegExp("(^" + (d ? "|[" + d + "]+" : "") + ")([a-z])", "g"), function(a, c, d) {
    return c + d.toUpperCase();
  });
};
h.c.Sq = function(a) {
  isFinite(a) && (a = String(a));
  return h.isString(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
};
h.c.lr = function(a, c, d) {
  a = a.split(c);
  for (var e = [];0 < d && a.length;) {
    e.push(a.shift()), d--;
  }
  a.length && e.push(a.join(c));
  return e;
};
h.m = {};
h.m.ha = h.Na;
h.m.sc = function(a, c) {
  c.unshift(a);
  h.debug.La.call(this, h.c.fh.apply(null, c));
  c.shift();
};
h.ja(h.m.sc, h.debug.La);
h.m.sc.prototype.name = "AssertionError";
h.m.ra = function(a, c, d, e) {
  var f = "Assertion failed";
  if (d) {
    var f = f + (": " + d), g = e
  } else {
    a && (f += ": " + a, g = c);
  }
  throw new h.m.sc("" + f, g || []);
};
h.m.assert = function(a, c, d) {
  h.m.ha && !a && h.m.ra("", null, c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.m.Ua = function(a, c) {
  if (h.m.ha) {
    throw new h.m.sc("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  }
};
h.m.No = function(a, c, d) {
  h.m.ha && !h.isNumber(a) && h.m.ra("Expected number but got %s: %s.", [h.V(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.m.Qo = function(a, c, d) {
  h.m.ha && !h.isString(a) && h.m.ra("Expected string but got %s: %s.", [h.V(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.m.Lo = function(a, c, d) {
  h.m.ha && !h.isFunction(a) && h.m.ra("Expected function but got %s: %s.", [h.V(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.m.Oo = function(a, c, d) {
  h.m.ha && !h.isObject(a) && h.m.ra("Expected object but got %s: %s.", [h.V(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.m.Io = function(a, c, d) {
  h.m.ha && !h.isArray(a) && h.m.ra("Expected array but got %s: %s.", [h.V(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.m.Jo = function(a, c, d) {
  h.m.ha && !h.si(a) && h.m.ra("Expected boolean but got %s: %s.", [h.V(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.m.Ko = function(a, c, d) {
  !h.m.ha || h.isObject(a) && a.nodeType == h.jf.qi.pi || h.m.ra("Expected Element but got %s: %s.", [h.V(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
h.m.Mo = function(a, c, d, e) {
  !h.m.ha || a instanceof c || h.m.ra("instanceof check failed.", null, d, Array.prototype.slice.call(arguments, 3));
  return a;
};
h.m.Po = function() {
  for (var a in Object.prototype) {
    h.m.Ua(a + " should not be enumerable in Object.prototype.");
  }
};
h.a = {};
h.ta = h.lg;
h.a.sa = !1;
h.a.Xd = function(a) {
  return a[a.length - 1];
};
h.a.Aq = h.a.Xd;
h.a.p = Array.prototype;
h.a.indexOf = h.ta && (h.a.sa || h.a.p.indexOf) ? function(a, c, d) {
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
h.a.lastIndexOf = h.ta && (h.a.sa || h.a.p.lastIndexOf) ? function(a, c, d) {
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
h.a.forEach = h.ta && (h.a.sa || h.a.p.forEach) ? function(a, c, d) {
  h.a.p.forEach.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = h.isString(a) ? a.split("") : a, g = 0;g < e;g++) {
    g in f && c.call(d, f[g], g, a);
  }
};
h.a.jh = function(a, c, d) {
  for (var e = a.length, f = h.isString(a) ? a.split("") : a, e = e - 1;0 <= e;--e) {
    e in f && c.call(d, f[e], e, a);
  }
};
h.a.filter = h.ta && (h.a.sa || h.a.p.filter) ? function(a, c, d) {
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
h.a.map = h.ta && (h.a.sa || h.a.p.map) ? function(a, c, d) {
  return h.a.p.map.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = Array(e), g = h.isString(a) ? a.split("") : a, k = 0;k < e;k++) {
    k in g && (f[k] = c.call(d, g[k], k, a));
  }
  return f;
};
h.a.reduce = h.ta && (h.a.sa || h.a.p.reduce) ? function(a, c, d, e) {
  e && (c = h.bind(c, e));
  return h.a.p.reduce.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  h.a.forEach(a, function(d, k) {
    f = c.call(e, f, d, k, a);
  });
  return f;
};
h.a.reduceRight = h.ta && (h.a.sa || h.a.p.reduceRight) ? function(a, c, d, e) {
  e && (c = h.bind(c, e));
  return h.a.p.reduceRight.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  h.a.jh(a, function(d, k) {
    f = c.call(e, f, d, k, a);
  });
  return f;
};
h.a.some = h.ta && (h.a.sa || h.a.p.some) ? function(a, c, d) {
  return h.a.p.some.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = h.isString(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && c.call(d, f[g], g, a)) {
      return!0;
    }
  }
  return!1;
};
h.a.every = h.ta && (h.a.sa || h.a.p.every) ? function(a, c, d) {
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
  c = h.a.ze(a, c, d);
  return 0 > c ? null : h.isString(a) ? a.charAt(c) : a[c];
};
h.a.ze = function(a, c, d) {
  for (var e = a.length, f = h.isString(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && c.call(d, f[g], g, a)) {
      return g;
    }
  }
  return-1;
};
h.a.zp = function(a, c, d) {
  c = h.a.hh(a, c, d);
  return 0 > c ? null : h.isString(a) ? a.charAt(c) : a[c];
};
h.a.hh = function(a, c, d) {
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
h.a.cq = function(a, c) {
  h.a.contains(a, c) || a.push(c);
};
h.a.Ae = function(a, c, d) {
  h.a.splice(a, d, 0, c);
};
h.a.dq = function(a, c, d) {
  h.Ee(h.a.splice, a, d, 0).apply(null, c);
};
h.a.insertBefore = function(a, c, d) {
  var e;
  2 == arguments.length || 0 > (e = h.a.indexOf(a, d)) ? a.push(c) : h.a.Ae(a, c, e);
};
h.a.remove = function(a, c) {
  var d = h.a.indexOf(a, c), e;
  (e = 0 <= d) && h.a.ob(a, d);
  return e;
};
h.a.ob = function(a, c) {
  return 1 == h.a.p.splice.call(a, c, 1).length;
};
h.a.Zq = function(a, c, d) {
  c = h.a.ze(a, c, d);
  return 0 <= c ? (h.a.ob(a, c), !0) : !1;
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
h.a.kh = function(a, c, d) {
  c = c || a;
  d = d || function() {
    return h.isObject(k) ? "o" + h.Gb(k) : (typeof k).charAt(0) + k;
  };
  for (var e = {}, f = 0, g = 0;g < a.length;) {
    var k = a[g++], l = d(k);
    Object.prototype.hasOwnProperty.call(e, l) || (e[l] = !0, c[f++] = k);
  }
  c.length = f;
};
h.a.xe = function(a, c, d) {
  return h.a.ye(a, d || h.a.Ka, !1, c);
};
h.a.To = function(a, c, d) {
  return h.a.ye(a, c, !0, void 0, d);
};
h.a.ye = function(a, c, d, e, f) {
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
h.a.mr = function(a, c) {
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
h.a.kr = function(a, c, d) {
  var e = d || h.a.Ka;
  h.a.sort(a, function(a, d) {
    return e(a[c], d[c]);
  });
};
h.a.Rd = function(a, c, d) {
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
  d = d || h.a.Zg;
  for (var f = 0;f < e;f++) {
    if (!d(a[f], c[f])) {
      return!1;
    }
  }
  return!0;
};
h.a.jp = function(a, c, d) {
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
h.a.Zg = function(a, c) {
  return a === c;
};
h.a.Ro = function(a, c, d) {
  d = h.a.xe(a, c, d);
  return 0 > d ? (h.a.Ae(a, c, -(d + 1)), !0) : !1;
};
h.a.So = function(a, c, d) {
  c = h.a.xe(a, c, d);
  return 0 <= c ? h.a.ob(a, c) : !1;
};
h.a.Uo = function(a, c, d) {
  for (var e = {}, f = 0;f < a.length;f++) {
    var g = a[f], k = c.call(d, g, f, a);
    h.T(k) && (e[k] || (e[k] = [])).push(g);
  }
  return e;
};
h.a.Pk = function(a, c, d) {
  var e = {};
  h.a.forEach(a, function(f, g) {
    e[c.call(d, f, g, a)] = f;
  });
  return e;
};
h.a.ac = function(a, c, d) {
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
h.a.ih = function(a) {
  for (var c = [], d = 0;d < arguments.length;d++) {
    var e = arguments[d];
    h.isArray(e) ? c.push.apply(c, h.a.ih.apply(null, e)) : c.push(e);
  }
  return c;
};
h.a.rotate = function(a, c) {
  a.length && (c %= a.length, 0 < c ? h.a.p.unshift.apply(a, a.splice(-c, c)) : 0 > c && h.a.p.push.apply(a, a.splice(0, -c)));
  return a;
};
h.a.Jq = function(a, c, d) {
  c = h.a.p.splice.call(a, c, 1);
  h.a.p.splice.call(a, d, 0, c[0]);
};
h.a.af = function(a) {
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
h.a.ir = function(a, c) {
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
h.r.Yl = h.r.constant(!1);
h.r.oo = h.r.constant(!0);
h.r.un = h.r.constant(null);
h.r.identity = function(a) {
  return a;
};
h.r.error = function(a) {
  return function() {
    throw Error(a);
  };
};
h.r.Ua = function(a) {
  return function() {
    throw a;
  };
};
h.r.Eq = function(a, c) {
  c = c || 0;
  return function() {
    return a.apply(this, Array.prototype.slice.call(arguments, 0, c));
  };
};
h.r.Nq = function(a) {
  return function() {
    return arguments[a];
  };
};
h.r.Gr = function(a, c) {
  return h.r.aj(a, h.r.constant(c));
};
h.r.kp = function(a, c) {
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
h.r.aj = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a, f = 0;f < d;f++) {
      a = c[f].apply(this, arguments);
    }
    return a;
  };
};
h.r.Ao = function(a) {
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
h.r.Qq = function(a) {
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
h.r.Hh = function(a) {
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
h.r.Xi = !0;
h.r.Xo = function(a) {
  var c = !1, d;
  return function() {
    if (!h.r.Xi) {
      return a();
    }
    c || (d = a(), c = !0);
    return d;
  };
};
h.n = {};
h.n.Wq = function(a) {
  return Math.floor(Math.random() * a);
};
h.n.Br = function(a, c) {
  return a + Math.random() * (c - a);
};
h.n.dp = function(a, c, d) {
  return Math.min(Math.max(a, c), d);
};
h.n.tf = function(a, c) {
  var d = a % c;
  return 0 > d * c ? d + c : d;
};
h.n.Bq = function(a, c, d) {
  return a + d * (c - a);
};
h.n.Kq = function(a, c, d) {
  return Math.abs(a - c) <= (d || 1E-6);
};
h.n.zd = function(a) {
  return h.n.tf(a, 360);
};
h.n.nr = function(a) {
  return h.n.tf(a, 2 * Math.PI);
};
h.n.uf = function(a) {
  return a * Math.PI / 180;
};
h.n.Mi = function(a) {
  return 180 * a / Math.PI;
};
h.n.Do = function(a, c) {
  return c * Math.cos(h.n.uf(a));
};
h.n.Eo = function(a, c) {
  return c * Math.sin(h.n.uf(a));
};
h.n.Bo = function(a, c, d, e) {
  return h.n.zd(h.n.Mi(Math.atan2(e - c, d - a)));
};
h.n.Co = function(a, c) {
  var d = h.n.zd(c) - h.n.zd(a);
  180 < d ? d -= 360 : -180 >= d && (d = 360 + d);
  return d;
};
h.n.jr = function(a) {
  return 0 == a ? 0 : 0 > a ? -1 : 1;
};
h.n.Gq = function(a, c, d, e) {
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
h.n.he = function(a) {
  return h.a.reduce(arguments, function(a, d) {
    return a + d;
  }, 0);
};
h.n.Ng = function(a) {
  return h.n.he.apply(null, arguments) / arguments.length;
};
h.n.Ni = function(a) {
  var c = arguments.length;
  if (2 > c) {
    return 0;
  }
  var d = h.n.Ng.apply(null, arguments);
  return h.n.he.apply(null, h.a.map(arguments, function(a) {
    return Math.pow(a - d, 2);
  })) / (c - 1);
};
h.n.or = function(a) {
  return Math.sqrt(h.n.Ni.apply(null, arguments));
};
h.n.qq = function(a) {
  return isFinite(a) && 0 == a % 1;
};
h.n.nq = function(a) {
  return isFinite(a) && !isNaN(a);
};
h.n.Fq = function(a) {
  if (0 < a) {
    var c = Math.round(Math.log(a) * Math.LOG10E);
    return c - (parseFloat("1e" + c) > a);
  }
  return 0 == a ? -Infinity : NaN;
};
h.n.br = function(a, c) {
  return Math.floor(a + (c || 2E-15));
};
h.n.ar = function(a, c) {
  return Math.ceil(a - (c || 2E-15));
};
h.e = {};
h.e.J = "StopIteration" in h.global ? h.global.StopIteration : Error("StopIteration");
h.e.s = function() {
};
h.e.s.prototype.next = function() {
  throw h.e.J;
};
h.e.s.prototype.xb = function() {
  return this;
};
h.e.B = function(a) {
  if (a instanceof h.e.s) {
    return a;
  }
  if ("function" == typeof a.xb) {
    return a.xb(!1);
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
h.e.yp = function(a, c, d) {
  return h.e.filter(a, h.r.Hh(c), d);
};
h.e.ac = function(a, c, d) {
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
h.e.bi = function(a) {
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
h.e.cp = function(a) {
  return h.e.bi.apply(void 0, a);
};
h.e.vp = function(a, c, d) {
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
h.e.sr = function(a, c, d) {
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
  var d = h.e.ci({}, a, c);
  return h.e.every(d, function(a) {
    return a[0] == a[1];
  });
};
h.e.Rh = function(a, c) {
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
h.e.sp = function(a) {
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
h.e.xo = function(a) {
  var c = h.e.B(a), d = 0;
  a = new h.e.s;
  a.next = function() {
    return d += c.next();
  };
  return a;
};
h.e.af = function(a) {
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
h.e.ci = function(a, c) {
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
h.e.lp = function(a, c) {
  var d = h.e.B(c);
  return h.e.filter(a, function() {
    return!!d.next();
  });
};
h.e.nc = function(a, c) {
  this.ee = h.e.B(a);
  this.fe = c || h.r.identity;
};
h.ja(h.e.nc, h.e.s);
h.e.nc.prototype.next = function() {
  for (;this.Bb == this.Cf;) {
    this.lc = this.ee.next(), this.Bb = this.fe(this.lc);
  }
  this.Cf = this.Bb;
  return[this.Bb, this.gj(this.Cf)];
};
h.e.nc.prototype.gj = function(a) {
  for (var c = [];this.Bb == a;) {
    c.push(this.lc);
    try {
      this.lc = this.ee.next();
    } catch (d) {
      if (d !== h.e.J) {
        throw d;
      }
      break;
    }
    this.Bb = this.fe(this.lc);
  }
  return c;
};
h.e.Yp = function(a, c) {
  return new h.e.nc(a, c);
};
h.e.pr = function(a, c, d) {
  var e = h.e.B(a);
  a = new h.e.s;
  a.next = function() {
    var a = h.e.za(e.next());
    return c.apply(d, h.a.concat(a, void 0, e));
  };
  return a;
};
h.e.tr = function(a, c) {
  var d = h.e.B(a), e = h.isNumber(c) ? c : 2, f = h.a.map(h.a.ac(e), function() {
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
h.e.wp = function(a, c) {
  return h.e.af(h.e.count(c), a);
};
h.e.ai = function(a, c) {
  var d = h.e.B(a), e = new h.e.s, f = c;
  e.next = function() {
    if (0 < f--) {
      return d.next();
    }
    throw h.e.J;
  };
  return e;
};
h.e.$h = function(a, c) {
  for (var d = h.e.B(a);0 < c--;) {
    h.e.Rh(d, null);
  }
  return d;
};
h.e.slice = function(a, c, d) {
  a = h.e.$h(a, c);
  h.isNumber(d) && (a = h.e.ai(a, d - c));
  return a;
};
h.e.ug = function(a) {
  var c = [];
  h.a.kh(a, c);
  return a.length != c.length;
};
h.e.pg = function(a, c) {
  var d = h.e.za(a), e = h.isNumber(c) ? c : d.length, d = h.a.repeat(d, e), d = h.e.product.apply(void 0, d);
  return h.e.filter(d, function(a) {
    return!h.e.ug(a);
  });
};
h.e.hp = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = h.e.za(a), f = h.e.ac(e.length), f = h.e.pg(f, c), g = h.e.filter(f, function(a) {
    return h.a.Rd(a);
  }), f = new h.e.s;
  f.next = function() {
    return h.a.map(g.next(), d);
  };
  return f;
};
h.e.ip = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = h.e.za(a), f = h.a.ac(e.length), f = h.a.repeat(f, c), f = h.e.product.apply(void 0, f), g = h.e.filter(f, function(a) {
    return h.a.Rd(a);
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
h.object.Cp = function(a) {
  for (var c in a) {
    return c;
  }
};
h.object.Dp = function(a) {
  for (var c in a) {
    return a[c];
  }
};
h.object.contains = function(a, c) {
  return h.object.cb(a, c);
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
h.object.Vp = function(a, c) {
  for (var d = h.D(c), e = d ? c : arguments, d = d ? 0 : 1;d < e.length && (a = a[e[d]], h.T(a));d++) {
  }
  return a;
};
h.object.Ea = function(a, c) {
  return c in a;
};
h.object.cb = function(a, c) {
  for (var d in a) {
    if (a[d] == c) {
      return!0;
    }
  }
  return!1;
};
h.object.xk = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return e;
    }
  }
};
h.object.Ap = function(a, c, d) {
  return(c = h.object.xk(a, c, d)) && a[c];
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
h.object.fr = function(a, c, d) {
  return c in a ? a[c] : a[c] = d;
};
h.object.clone = function(a) {
  var c = {}, d;
  for (d in a) {
    c[d] = a[d];
  }
  return c;
};
h.object.nj = function(a) {
  var c = h.V(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = h.object.nj(a[d]);
    }
    return c;
  }
  return a;
};
h.object.Qk = function(a) {
  var c = {}, d;
  for (d in a) {
    c[a[d]] = d;
  }
  return c;
};
h.object.ig = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
h.object.extend = function(a, c) {
  for (var d, e, f = 1;f < arguments.length;f++) {
    e = arguments[f];
    for (d in e) {
      a[d] = e[d];
    }
    for (var g = 0;g < h.object.ig.length;g++) {
      d = h.object.ig[g], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d]);
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
h.object.qk = function(a) {
  var c = arguments.length;
  if (1 == c && h.isArray(arguments[0])) {
    return h.object.qk.apply(null, arguments[0]);
  }
  for (var d = {}, e = 0;e < c;e++) {
    d[arguments[e]] = !0;
  }
  return d;
};
h.object.qp = function(a) {
  var c = a;
  Object.isFrozen && !Object.isFrozen(a) && (c = Object.create(a), Object.freeze(c));
  return c;
};
h.object.pq = function(a) {
  return!!Object.isFrozen && Object.isFrozen(a);
};
h.h = {};
h.h.K = function(a, c) {
  this.v = {};
  this.w = [];
  this.pb = this.t = 0;
  var d = arguments.length;
  if (1 < d) {
    if (d % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var e = 0;e < d;e += 2) {
      this.set(arguments[e], arguments[e + 1]);
    }
  } else {
    a && this.fd(a);
  }
};
b = h.h.K.prototype;
b.S = function() {
  return this.t;
};
b.u = function() {
  this.Va();
  for (var a = [], c = 0;c < this.w.length;c++) {
    a.push(this.v[this.w[c]]);
  }
  return a;
};
b.I = function() {
  this.Va();
  return this.w.concat();
};
b.Ea = function(a) {
  return h.h.K.Ja(this.v, a);
};
b.cb = function(a) {
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
  var d = c || h.h.K.Qh;
  this.Va();
  for (var e, f = 0;e = this.w[f];f++) {
    if (!d(this.get(e), a.get(e))) {
      return!1;
    }
  }
  return!0;
};
h.h.K.Qh = function(a, c) {
  return a === c;
};
b = h.h.K.prototype;
b.M = function() {
  return 0 == this.t;
};
b.clear = function() {
  this.v = {};
  this.pb = this.t = this.w.length = 0;
};
b.remove = function(a) {
  return h.h.K.Ja(this.v, a) ? (delete this.v[a], this.t--, this.pb++, this.w.length > 2 * this.t && this.Va(), !0) : !1;
};
b.Va = function() {
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
  h.h.K.Ja(this.v, a) || (this.t++, this.w.push(a), this.pb++);
  this.v[a] = c;
};
b.fd = function(a) {
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
b.Qk = function() {
  for (var a = new h.h.K, c = 0;c < this.w.length;c++) {
    var d = this.w[c];
    a.set(this.v[d], d);
  }
  return a;
};
b.Pk = function() {
  this.Va();
  for (var a = {}, c = 0;c < this.w.length;c++) {
    var d = this.w[c];
    a[d] = this.v[d];
  }
  return a;
};
b.xb = function(a) {
  this.Va();
  var c = 0, d = this.w, e = this.v, f = this.pb, g = this, k = new h.e.s;
  k.next = function() {
    for (;;) {
      if (f != g.pb) {
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
  return "function" == typeof a.contains ? a.contains(c) : "function" == typeof a.cb ? a.cb(c) : h.D(a) || h.isString(a) ? h.a.contains(a, c) : h.object.cb(a, c);
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
h.f.userAgent.l = {};
h.f.userAgent.l.Ze = function() {
  var a = h.f.userAgent.l.Vh();
  return a && (a = a.userAgent) ? a : "";
};
h.f.userAgent.l.Vh = function() {
  return h.global.navigator;
};
h.f.userAgent.l.Ye = h.f.userAgent.l.Ze();
h.f.userAgent.l.hr = function(a) {
  h.f.userAgent.l.Ye = a || h.f.userAgent.l.Ze();
};
h.f.userAgent.l.qb = function() {
  return h.f.userAgent.l.Ye;
};
h.f.userAgent.l.C = function(a) {
  return h.c.contains(h.f.userAgent.l.qb(), a);
};
h.f.userAgent.l.Xh = function(a) {
  return h.c.vg(h.f.userAgent.l.qb(), a);
};
h.f.userAgent.l.Gc = function(a) {
  for (var c = RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), d = [], e;e = c.exec(a);) {
    d.push([e[1], e[2], e[3] || void 0]);
  }
  return d;
};
h.f.userAgent.browser = {};
h.f.userAgent.browser.Jk = function() {
  return h.f.userAgent.l.C("Opera") || h.f.userAgent.l.C("OPR");
};
h.f.userAgent.browser.Ik = function() {
  return h.f.userAgent.l.C("Trident") || h.f.userAgent.l.C("MSIE");
};
h.f.userAgent.browser.Hk = function() {
  return h.f.userAgent.l.C("Firefox");
};
h.f.userAgent.browser.Kk = function() {
  return h.f.userAgent.l.C("Safari") && !h.f.userAgent.l.C("Chrome") && !h.f.userAgent.l.C("CriOS") && !h.f.userAgent.l.C("Android");
};
h.f.userAgent.browser.Gk = function() {
  return h.f.userAgent.l.C("Chrome") || h.f.userAgent.l.C("CriOS");
};
h.f.userAgent.browser.Fk = function() {
  return h.f.userAgent.l.C("Android") && !h.f.userAgent.l.C("Chrome") && !h.f.userAgent.l.C("CriOS");
};
h.f.userAgent.browser.Ne = h.f.userAgent.browser.Jk;
h.f.userAgent.browser.Me = h.f.userAgent.browser.Ik;
h.f.userAgent.browser.oq = h.f.userAgent.browser.Hk;
h.f.userAgent.browser.uq = h.f.userAgent.browser.Kk;
h.f.userAgent.browser.jq = h.f.userAgent.browser.Gk;
h.f.userAgent.browser.hq = h.f.userAgent.browser.Fk;
h.f.userAgent.browser.vq = function() {
  return h.f.userAgent.l.C("Silk");
};
h.f.userAgent.browser.Oc = function() {
  var a = h.f.userAgent.l.qb();
  if (h.f.userAgent.browser.Me()) {
    return h.f.userAgent.browser.Eh(a);
  }
  if (h.f.userAgent.browser.Ne()) {
    return h.f.userAgent.browser.Fh(a);
  }
  a = h.f.userAgent.l.Gc(a);
  return h.f.userAgent.browser.Td(a);
};
h.f.userAgent.browser.X = function(a) {
  return 0 <= h.c.fc(h.f.userAgent.browser.Oc(), a);
};
h.f.userAgent.browser.Eh = function(a) {
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
h.f.userAgent.browser.Fh = function(a) {
  a = h.f.userAgent.l.Gc(a);
  var c = h.a.Xd(a);
  return "OPR" == c[0] && c[1] ? c[1] : h.f.userAgent.browser.Td(a);
};
h.f.userAgent.browser.Td = function(a) {
  return a[2] && a[2][1] ? a[2][1] : "";
};
h.f.userAgent.R = {};
h.f.userAgent.R.tq = function() {
  return h.f.userAgent.l.C("Presto");
};
h.f.userAgent.R.ph = function() {
  return h.f.userAgent.l.C("Trident") || h.f.userAgent.l.C("MSIE");
};
h.f.userAgent.R.Ie = function() {
  return h.f.userAgent.l.Xh("WebKit");
};
h.f.userAgent.R.Bk = function() {
  return h.f.userAgent.l.C("Gecko") && !h.f.userAgent.R.Ie() && !h.f.userAgent.R.ph();
};
h.f.userAgent.R.Oc = function() {
  var a = h.f.userAgent.l.qb();
  if (a) {
    var a = h.f.userAgent.l.Gc(a), c = a[1];
    if (c) {
      return "Gecko" == c[0] ? h.f.userAgent.R.Gh(a, "Firefox") : c[1];
    }
    var a = a[0], d;
    if (a && (d = a[2]) && (d = /Trident\/([^\s;]+)/.exec(d))) {
      return d[1];
    }
  }
  return "";
};
h.f.userAgent.R.X = function(a) {
  return 0 <= h.c.fc(h.f.userAgent.R.Oc(), a);
};
h.f.userAgent.R.Gh = function(a, c) {
  var d = h.a.find(a, function(a) {
    return c == a[0];
  });
  return d && d[1] || "";
};
h.userAgent = {};
h.userAgent.Zf = !1;
h.userAgent.Yf = !1;
h.userAgent.eg = !1;
h.userAgent.Jd = !1;
h.userAgent.dg = !1;
h.userAgent.dh = !1;
h.userAgent.wc = h.userAgent.Zf || h.userAgent.Yf || h.userAgent.Jd || h.userAgent.eg || h.userAgent.dg;
h.userAgent.be = function() {
  return h.f.userAgent.l.qb();
};
h.userAgent.$c = function() {
  return h.global.navigator || null;
};
h.userAgent.Bd = h.userAgent.wc ? h.userAgent.dg : h.f.userAgent.browser.Ne();
h.userAgent.ba = h.userAgent.wc ? h.userAgent.Zf : h.f.userAgent.browser.Me();
h.userAgent.ic = h.userAgent.wc ? h.userAgent.Yf : h.f.userAgent.R.Bk();
h.userAgent.ea = h.userAgent.wc ? h.userAgent.eg || h.userAgent.Jd : h.f.userAgent.R.Ie();
h.userAgent.Ck = function() {
  return h.userAgent.ea && h.f.userAgent.l.C("Mobile");
};
h.userAgent.Um = h.userAgent.Jd || h.userAgent.Ck();
h.userAgent.Vn = h.userAgent.ea;
h.userAgent.rk = function() {
  var a = h.userAgent.$c();
  return a && a.platform || "";
};
h.userAgent.Zc = h.userAgent.rk();
h.userAgent.cg = !1;
h.userAgent.fg = !1;
h.userAgent.bg = !1;
h.userAgent.gg = !1;
h.userAgent.Xf = !1;
h.userAgent.ag = !1;
h.userAgent.$f = !1;
h.userAgent.Ca = h.userAgent.cg || h.userAgent.fg || h.userAgent.bg || h.userAgent.gg || h.userAgent.Xf || h.userAgent.ag || h.userAgent.$f;
h.userAgent.Ak = function() {
  h.userAgent.Wg = h.c.contains(h.userAgent.Zc, "Mac");
  h.userAgent.Xg = h.c.contains(h.userAgent.Zc, "Win");
  h.userAgent.Vg = h.c.contains(h.userAgent.Zc, "Linux");
  h.userAgent.Yg = !!h.userAgent.$c() && h.c.contains(h.userAgent.$c().appVersion || "", "X11");
  var a = h.userAgent.be();
  h.userAgent.Sg = !!a && h.c.contains(a, "Android");
  h.userAgent.Ug = !!a && h.c.contains(a, "iPhone");
  h.userAgent.Tg = !!a && h.c.contains(a, "iPad");
};
h.userAgent.Ca || h.userAgent.Ak();
h.userAgent.Mm = h.userAgent.Ca ? h.userAgent.cg : h.userAgent.Wg;
h.userAgent.uo = h.userAgent.Ca ? h.userAgent.fg : h.userAgent.Xg;
h.userAgent.zm = h.userAgent.Ca ? h.userAgent.bg : h.userAgent.Vg;
h.userAgent.vo = h.userAgent.Ca ? h.userAgent.gg : h.userAgent.Yg;
h.userAgent.ANDROID = h.userAgent.Ca ? h.userAgent.Xf : h.userAgent.Sg;
h.userAgent.rm = h.userAgent.Ca ? h.userAgent.ag : h.userAgent.Ug;
h.userAgent.qm = h.userAgent.Ca ? h.userAgent.$f : h.userAgent.Tg;
h.userAgent.sk = function() {
  var a = "", c;
  if (h.userAgent.Bd && h.global.opera) {
    return a = h.global.opera.version, h.isFunction(a) ? a() : a;
  }
  h.userAgent.ic ? c = /rv\:([^\);]+)(\)|;)/ : h.userAgent.ba ? c = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : h.userAgent.ea && (c = /WebKit\/(\S+)/);
  c && (a = (a = c.exec(h.userAgent.be())) ? a[1] : "");
  return h.userAgent.ba && (c = h.userAgent.sf(), c > parseFloat(a)) ? String(c) : a;
};
h.userAgent.sf = function() {
  var a = h.global.document;
  return a ? a.documentMode : void 0;
};
h.userAgent.VERSION = h.userAgent.sk();
h.userAgent.compare = function(a, c) {
  return h.c.fc(a, c);
};
h.userAgent.Be = {};
h.userAgent.X = function(a) {
  return h.userAgent.dh || h.userAgent.Be[a] || (h.userAgent.Be[a] = 0 <= h.c.fc(h.userAgent.VERSION, a));
};
h.userAgent.zq = h.userAgent.X;
h.userAgent.Od = function(a) {
  return h.userAgent.ba && h.userAgent.oj >= a;
};
h.userAgent.lq = h.userAgent.Od;
var s = h.global.document;
h.userAgent.oj = s && h.userAgent.ba ? h.userAgent.sf() || ("CSS1Compat" == s.compatMode ? parseInt(h.userAgent.VERSION, 10) : 5) : void 0;
h.uri = {};
h.uri.d = {};
h.uri.d.Cb = {Le:38, EQUAL:61, Bh:35, Ch:63};
h.uri.d.Cc = function(a, c, d, e, f, g, k) {
  var l = "";
  a && (l += a + ":");
  d && (l += "//", c && (l += c + "@"), l += d, e && (l += ":" + e));
  f && (l += f);
  g && (l += "?" + g);
  k && (l += "#" + k);
  return l;
};
h.uri.d.Ph = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
h.uri.d.o = {Ta:1, Rb:2, ua:3, va:4, Bc:5, Sb:6, Ac:7};
h.uri.d.split = function(a) {
  h.uri.d.Nh();
  return a.match(h.uri.d.Ph);
};
h.uri.d.gd = h.userAgent.ea;
h.uri.d.Nh = function() {
  if (h.uri.d.gd) {
    h.uri.d.gd = !1;
    var a = h.global.location;
    if (a) {
      var c = a.href;
      if (c && (c = h.uri.d.jb(c)) && c != a.hostname) {
        throw h.uri.d.gd = !0, Error();
      }
    }
  }
};
h.uri.d.mc = function(a) {
  return a && decodeURIComponent(a);
};
h.uri.d.ab = function(a, c) {
  return h.uri.d.split(c)[a] || null;
};
h.uri.d.Ra = function(a) {
  return h.uri.d.ab(h.uri.d.o.Ta, a);
};
h.uri.d.Fp = function(a) {
  a = h.uri.d.Ra(a);
  !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1));
  return a ? a.toLowerCase() : "";
};
h.uri.d.Lh = function(a) {
  return h.uri.d.ab(h.uri.d.o.Rb, a);
};
h.uri.d.Qb = function(a) {
  return h.uri.d.mc(h.uri.d.Lh(a));
};
h.uri.d.Ih = function(a) {
  return h.uri.d.ab(h.uri.d.o.ua, a);
};
h.uri.d.jb = function(a) {
  return h.uri.d.mc(h.uri.d.Ih(a));
};
h.uri.d.Pb = function(a) {
  return Number(h.uri.d.ab(h.uri.d.o.va, a)) || null;
};
h.uri.d.Kh = function(a) {
  return h.uri.d.ab(h.uri.d.o.Bc, a);
};
h.uri.d.Sa = function(a) {
  return h.uri.d.mc(h.uri.d.Kh(a));
};
h.uri.d.Pd = function(a) {
  return h.uri.d.ab(h.uri.d.o.Sb, a);
};
h.uri.d.Jh = function(a) {
  var c = a.indexOf("#");
  return 0 > c ? null : a.substr(c + 1);
};
h.uri.d.dr = function(a, c) {
  return h.uri.d.Sh(a) + (c ? "#" + c : "");
};
h.uri.d.Ob = function(a) {
  return h.uri.d.mc(h.uri.d.Jh(a));
};
h.uri.d.Oe = function(a) {
  a = h.uri.d.split(a);
  return h.uri.d.Cc(a[h.uri.d.o.Ta], a[h.uri.d.o.Rb], a[h.uri.d.o.ua], a[h.uri.d.o.va]);
};
h.uri.d.Np = function(a) {
  a = h.uri.d.split(a);
  return h.uri.d.Cc(null, null, null, null, a[h.uri.d.o.Bc], a[h.uri.d.o.Sb], a[h.uri.d.o.Ac]);
};
h.uri.d.Sh = function(a) {
  var c = a.indexOf("#");
  return 0 > c ? a : a.substr(0, c);
};
h.uri.d.yk = function(a, c) {
  var d = h.uri.d.split(a), e = h.uri.d.split(c);
  return d[h.uri.d.o.ua] == e[h.uri.d.o.ua] && d[h.uri.d.o.Ta] == e[h.uri.d.o.Ta] && d[h.uri.d.o.va] == e[h.uri.d.o.va];
};
h.uri.d.rg = function(a) {
  if (h.Na && (0 <= a.indexOf("#") || 0 <= a.indexOf("?"))) {
    throw Error("goog.uri.utils: Fragment or query identifiers are not supported: [" + a + "]");
  }
};
h.uri.d.Jc = function(a) {
  if (a[1]) {
    var c = a[0], d = c.indexOf("#");
    0 <= d && (a.push(c.substr(d)), a[0] = c = c.substr(0, d));
    d = c.indexOf("?");
    0 > d ? a[1] = "?" : d == c.length - 1 && (a[1] = void 0);
  }
  return a.join("");
};
h.uri.d.Mc = function(a, c, d) {
  if (h.isArray(c)) {
    for (var e = 0;e < c.length;e++) {
      h.uri.d.Mc(a, String(c[e]), d);
    }
  } else {
    null != c && d.push("&", a, "" === c ? "" : "=", h.c.kb(c));
  }
};
h.uri.d.hd = function(a, c, d) {
  for (d = d || 0;d < c.length;d += 2) {
    h.uri.d.Mc(c[d], c[d + 1], a);
  }
  return a;
};
h.uri.d.Vo = function(a, c) {
  var d = h.uri.d.hd([], a, c);
  d[0] = "";
  return d.join("");
};
h.uri.d.Pe = function(a, c) {
  for (var d in c) {
    h.uri.d.Mc(d, c[d], a);
  }
  return a;
};
h.uri.d.Wo = function(a) {
  a = h.uri.d.Pe([], a);
  a[0] = "";
  return a.join("");
};
h.uri.d.Fo = function(a, c) {
  return h.uri.d.Jc(2 == arguments.length ? h.uri.d.hd([a], arguments[1], 0) : h.uri.d.hd([a], arguments, 1));
};
h.uri.d.Go = function(a, c) {
  return h.uri.d.Jc(h.uri.d.Pe([a], c));
};
h.uri.d.Mh = function(a, c, d) {
  a = [a, "&", c];
  h.Ud(d) && a.push("=", h.c.kb(d));
  return h.uri.d.Jc(a);
};
h.uri.d.cc = function(a, c, d, e) {
  for (var f = d.length;0 <= (c = a.indexOf(d, c)) && c < e;) {
    var g = a.charCodeAt(c - 1);
    if (g == h.uri.d.Cb.Le || g == h.uri.d.Cb.Ch) {
      if (g = a.charCodeAt(c + f), !g || g == h.uri.d.Cb.EQUAL || g == h.uri.d.Cb.Le || g == h.uri.d.Cb.Bh) {
        return c;
      }
    }
    c += f + 1;
  }
  return-1;
};
h.uri.d.dc = /#|$/;
h.uri.d.Zp = function(a, c) {
  return 0 <= h.uri.d.cc(a, 0, c, a.search(h.uri.d.dc));
};
h.uri.d.Lp = function(a, c) {
  var d = a.search(h.uri.d.dc), e = h.uri.d.cc(a, 0, c, d);
  if (0 > e) {
    return null;
  }
  var f = a.indexOf("&", e);
  if (0 > f || f > d) {
    f = d;
  }
  e += c.length + 1;
  return h.c.Tb(a.substr(e, f - e));
};
h.uri.d.Mp = function(a, c) {
  for (var d = a.search(h.uri.d.dc), e = 0, f, g = [];0 <= (f = h.uri.d.cc(a, e, c, d));) {
    e = a.indexOf("&", f);
    if (0 > e || e > d) {
      e = d;
    }
    f += c.length + 1;
    g.push(h.c.Tb(a.substr(f, e - f)));
  }
  return g;
};
h.uri.d.Dh = /[?&]($|#)/;
h.uri.d.Oh = function(a, c) {
  for (var d = a.search(h.uri.d.dc), e = 0, f, g = [];0 <= (f = h.uri.d.cc(a, e, c, d));) {
    g.push(a.substring(e, f)), e = Math.min(a.indexOf("&", f) + 1 || d, d);
  }
  g.push(a.substr(e));
  return g.join("").replace(h.uri.d.Dh, "$1");
};
h.uri.d.qg = function(a, c, d) {
  return h.uri.d.Mh(h.uri.d.Oh(a, c), c, d);
};
h.uri.d.Ho = function(a, c) {
  h.uri.d.rg(a);
  h.c.tg(a, "/") && (a = a.substr(0, a.length - 1));
  h.c.Ec(c, "/") && (c = c.substr(1));
  return h.c.sg(a, "/", c);
};
h.uri.d.lb = function(a, c) {
  h.c.Ec(c, "/") || (c = "/" + c);
  var d = h.uri.d.split(a);
  return h.uri.d.Cc(d[h.uri.d.o.Ta], d[h.uri.d.o.Rb], d[h.uri.d.o.ua], d[h.uri.d.o.va], c, d[h.uri.d.o.Sb], d[h.uri.d.o.Ac]);
};
h.uri.d.Wd = {Vd:"zx"};
h.uri.d.Ek = function(a) {
  return h.uri.d.qg(a, h.uri.d.Wd.Vd, h.c.Qd());
};
h.i = function(a, c) {
  var d;
  a instanceof h.i ? (this.U = h.T(c) ? c : a.og(), this.Yb(a.Ra()), this.Zb(a.Qb()), this.Ub(a.jb()), this.Wb(a.Pb()), this.lb(a.Sa()), this.Xb(a.Pd().clone()), this.Vb(a.Ob())) : a && (d = h.uri.d.split(String(a))) ? (this.U = !!c, this.Yb(d[h.uri.d.o.Ta] || "", !0), this.Zb(d[h.uri.d.o.Rb] || "", !0), this.Ub(d[h.uri.d.o.ua] || "", !0), this.Wb(d[h.uri.d.o.va]), this.lb(d[h.uri.d.o.Bc] || "", !0), this.Xb(d[h.uri.d.o.Sb] || "", !0), this.Vb(d[h.uri.d.o.Ac] || "", !0)) : (this.U = !!c, this.Y = 
  new h.i.da(null, null, this.U));
};
h.i.ri = !1;
h.i.Dg = h.uri.d.Wd.Vd;
b = h.i.prototype;
b.fb = "";
b.xd = "";
b.ud = "";
b.P = null;
b.wd = "";
b.vd = "";
b.Dk = !1;
b.U = !1;
b.toString = function() {
  var a = [], c = this.Ra();
  c && a.push(h.i.rb(c, h.i.Yd), ":");
  if (c = this.jb()) {
    a.push("//");
    var d = this.Qb();
    d && a.push(h.i.rb(d, h.i.Yd), "@");
    a.push(h.c.kb(c));
    c = this.Pb();
    null != c && a.push(":", String(c));
  }
  if (c = this.Sa()) {
    this.Fc() && "/" != c.charAt(0) && a.push("/"), a.push(h.i.rb(c, "/" == c.charAt(0) ? h.i.xg : h.i.zg));
  }
  (c = this.wg()) && a.push("?", c);
  (c = this.Ob()) && a.push("#", h.i.rb(c, h.i.yg));
  return a.join("");
};
b.resolve = function(a) {
  var c = this.clone(), d = a.yh();
  d ? c.Yb(a.Ra()) : d = a.zh();
  d ? c.Zb(a.Qb()) : d = a.Fc();
  d ? c.Ub(a.jb()) : d = a.wh();
  var e = a.Sa();
  if (d) {
    c.Wb(a.Pb());
  } else {
    if (d = a.Ke()) {
      if ("/" != e.charAt(0)) {
        if (this.Fc() && !this.Ke()) {
          e = "/" + e;
        } else {
          var f = c.Sa().lastIndexOf("/");
          -1 != f && (e = c.Sa().substr(0, f + 1) + e);
        }
      }
      e = h.i.Ah(e);
    }
  }
  d ? c.lb(e) : d = a.xh();
  d ? c.Xb(a.uh()) : d = a.vh();
  d && c.Vb(a.Ob());
  return c;
};
b.clone = function() {
  return new h.i(this);
};
b.Ra = function() {
  return this.fb;
};
b.Yb = function(a, c) {
  this.ka();
  if (this.fb = c ? h.i.eb(a) : a) {
    this.fb = this.fb.replace(/:$/, "");
  }
  return this;
};
b.yh = function() {
  return!!this.fb;
};
b.Qb = function() {
  return this.xd;
};
b.Zb = function(a, c) {
  this.ka();
  this.xd = c ? h.i.eb(a) : a;
  return this;
};
b.zh = function() {
  return!!this.xd;
};
b.jb = function() {
  return this.ud;
};
b.Ub = function(a, c) {
  this.ka();
  this.ud = c ? h.i.eb(a) : a;
  return this;
};
b.Fc = function() {
  return!!this.ud;
};
b.Pb = function() {
  return this.P;
};
b.Wb = function(a) {
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
b.wh = function() {
  return null != this.P;
};
b.Sa = function() {
  return this.wd;
};
b.lb = function(a, c) {
  this.ka();
  this.wd = c ? h.i.eb(a) : a;
  return this;
};
b.Ke = function() {
  return!!this.wd;
};
b.xh = function() {
  return "" !== this.Y.toString();
};
b.Xb = function(a, c) {
  this.ka();
  a instanceof h.i.da ? (this.Y = a, this.Y.md(this.U)) : (c || (a = h.i.rb(a, h.i.di)), this.Y = new h.i.da(a, null, this.U));
  return this;
};
b.wg = function() {
  return this.Y.toString();
};
b.uh = function() {
  return this.Y.qj();
};
b.Pd = function() {
  return this.Y;
};
b.Eg = function(a, c) {
  this.ka();
  this.Y.set(a, c);
  return this;
};
b.Ki = function(a) {
  return this.Y.get(a);
};
b.Ob = function() {
  return this.vd;
};
b.Vb = function(a, c) {
  this.ka();
  this.vd = c ? h.i.eb(a) : a;
  return this;
};
b.vh = function() {
  return!!this.vd;
};
b.Ek = function() {
  this.ka();
  this.Eg(h.i.Dg, h.c.Qd());
  return this;
};
b.ka = function() {
  if (this.Dk) {
    throw Error("Tried to modify a read-only Uri");
  }
};
b.md = function(a) {
  this.U = a;
  this.Y && this.Y.md(a);
  return this;
};
b.og = function() {
  return this.U;
};
h.i.parse = function(a, c) {
  return a instanceof h.i ? a.clone() : new h.i(a, c);
};
h.i.create = function(a, c, d, e, f, g, k, l) {
  l = new h.i(null, l);
  a && l.Yb(a);
  c && l.Zb(c);
  d && l.Ub(d);
  e && l.Wb(e);
  f && l.lb(f);
  g && l.Xb(g);
  k && l.Vb(k);
  return l;
};
h.i.resolve = function(a, c) {
  a instanceof h.i || (a = h.i.parse(a));
  c instanceof h.i || (c = h.i.parse(c));
  return a.resolve(c);
};
h.i.Ah = function(a) {
  if (".." == a || "." == a) {
    return "";
  }
  if (h.c.contains(a, "./") || h.c.contains(a, "/.")) {
    var c = h.c.Ec(a, "/");
    a = a.split("/");
    for (var d = [], e = 0;e < a.length;) {
      var f = a[e++];
      "." == f ? c && e == a.length && d.push("") : ".." == f ? ((1 < d.length || 1 == d.length && "" != d[0]) && d.pop(), c && e == a.length && d.push("")) : (d.push(f), c = !0);
    }
    return d.join("/");
  }
  return a;
};
h.i.eb = function(a) {
  return a ? decodeURIComponent(a) : "";
};
h.i.rb = function(a, c) {
  return h.isString(a) ? encodeURI(a).replace(c, h.i.Ji) : null;
};
h.i.Ji = function(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
};
h.i.Yd = /[#\/\?@]/g;
h.i.zg = /[\#\?:]/g;
h.i.xg = /[\#\?]/g;
h.i.di = /[\#\?@]/g;
h.i.yg = /#/g;
h.i.yk = function(a, c) {
  var d = h.uri.d.split(a), e = h.uri.d.split(c);
  return d[h.uri.d.o.ua] == e[h.uri.d.o.ua] && d[h.uri.d.o.va] == e[h.uri.d.o.va];
};
h.i.da = function(a, c, d) {
  this.xa = a || null;
  this.U = !!d;
};
h.i.da.prototype.ma = function() {
  if (!this.A && (this.A = new h.h.K, this.t = 0, this.xa)) {
    for (var a = this.xa.split("&"), c = 0;c < a.length;c++) {
      var d = a[c].indexOf("="), e = null, f = null;
      0 <= d ? (e = a[c].substring(0, d), f = a[c].substring(d + 1)) : e = a[c];
      e = h.c.Tb(e);
      e = this.Da(e);
      this.add(e, f ? h.c.Tb(f) : "");
    }
  }
};
h.i.da.op = function(a, c, d) {
  c = h.h.I(a);
  if ("undefined" == typeof c) {
    throw Error("Keys are undefined");
  }
  d = new h.i.da(null, null, d);
  a = h.h.u(a);
  for (var e = 0;e < c.length;e++) {
    var f = c[e], g = a[e];
    h.isArray(g) ? d.de(f, g) : d.add(f, g);
  }
  return d;
};
h.i.da.np = function(a, c, d, e) {
  if (a.length != c.length) {
    throw Error("Mismatched lengths for keys/values");
  }
  d = new h.i.da(null, null, e);
  for (e = 0;e < a.length;e++) {
    d.add(a[e], c[e]);
  }
  return d;
};
b = h.i.da.prototype;
b.A = null;
b.t = null;
b.S = function() {
  this.ma();
  return this.t;
};
b.add = function(a, c) {
  this.ma();
  this.Ya();
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
  return this.A.Ea(a) ? (this.Ya(), this.t -= this.A.get(a).length, this.A.remove(a)) : !1;
};
b.clear = function() {
  this.Ya();
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
b.cb = function(a) {
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
  this.Ya();
  a = this.Da(a);
  this.Ea(a) && (this.t -= this.A.get(a).length);
  this.A.set(a, [c]);
  this.t++;
  return this;
};
b.get = function(a, c) {
  var d = a ? this.u(a) : [];
  return h.i.ri ? 0 < d.length ? d[0] : c : 0 < d.length ? String(d[0]) : c;
};
b.de = function(a, c) {
  this.remove(a);
  0 < c.length && (this.Ya(), this.A.set(this.Da(a), h.a.clone(c)), this.t += c.length);
};
b.toString = function() {
  if (this.xa) {
    return this.xa;
  }
  if (!this.A) {
    return "";
  }
  for (var a = [], c = this.A.I(), d = 0;d < c.length;d++) {
    for (var e = c[d], f = h.c.kb(e), e = this.u(e), g = 0;g < e.length;g++) {
      var k = f;
      "" !== e[g] && (k += "=" + h.c.kb(e[g]));
      a.push(k);
    }
  }
  return this.xa = a.join("&");
};
b.qj = function() {
  return h.i.eb(this.toString());
};
b.Ya = function() {
  this.xa = null;
};
b.clone = function() {
  var a = new h.i.da;
  a.xa = this.xa;
  this.A && (a.A = this.A.clone(), a.t = this.t);
  return a;
};
b.Da = function(a) {
  a = String(a);
  this.U && (a = a.toLowerCase());
  return a;
};
b.md = function(a) {
  a && !this.U && (this.ma(), this.Ya(), this.A.forEach(function(a, d) {
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
m.Dd = {};
m.Dd.Ti = function(a) {
  return h.i.parse(window.location.href).Ki(a) || null;
};
m.Dd.Kp = function(a) {
  return h.uri.d.Ra(a) ? h.uri.d.Oe(a) : h.uri.d.Oe("http://" + a);
};
h.h.xl = function() {
};
h.h.ga = function(a) {
  this.v = new h.h.K;
  a && this.fd(a);
};
h.h.ga.pd = function(a) {
  var c = typeof a;
  return "object" == c && a || "function" == c ? "o" + h.Gb(a) : c.substr(0, 1) + a;
};
b = h.h.ga.prototype;
b.S = function() {
  return this.v.S();
};
b.add = function(a) {
  this.v.set(h.h.ga.pd(a), a);
};
b.fd = function(a) {
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
  return this.v.remove(h.h.ga.pd(a));
};
b.clear = function() {
  this.v.clear();
};
b.M = function() {
  return this.v.M();
};
b.contains = function(a) {
  return this.v.Ea(h.h.ga.pd(a));
};
b.u = function() {
  return this.v.u();
};
b.clone = function() {
  return new h.h.ga(this);
};
b.equals = function(a) {
  return this.S() == h.h.S(a) && this.ui(a);
};
b.ui = function(a) {
  var c = h.h.S(a);
  if (this.S() > c) {
    return!1;
  }
  !(a instanceof h.h.ga) && 5 < c && (a = new h.h.ga(a));
  return h.h.every(this, function(c) {
    return h.h.contains(a, c);
  });
};
b.xb = function() {
  return this.v.xb(!1);
};
h.debug.Z = h.Na;
h.debug.bp = function(a, c, d) {
  d = d || h.global;
  var e = d.onerror, f = !!c;
  h.userAgent.ea && !h.userAgent.X("535.3") && (f = !f);
  d.onerror = function(c, d, l, n, p) {
    e && e(c, d, l, n, p);
    a({message:c, fileName:d, Ui:l, Vk:n, error:p});
    return f;
  };
};
h.debug.uk = function(a, c) {
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
h.debug.tp = function(a, c) {
  var d = [], e = function(a, g, k) {
    var l = g + "  ";
    k = new h.h.ga(k);
    try {
      if (h.T(a)) {
        if (h.ki(a)) {
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
  e(a, "", new h.h.ga);
  return d.join("");
};
h.debug.vk = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    h.isArray(a[d]) ? c.push(h.debug.vk(a[d])) : c.push(a[d]);
  }
  return "[ " + c.join(", ") + " ]";
};
h.debug.Uh = function(a, c) {
  try {
    var d = h.debug.bh(a);
    return "Message: " + h.c.Ab(d.message) + '\nUrl: <a href="view-source:' + d.fileName + '" target="_new">' + d.fileName + "</a>\nLine: " + d.lineNumber + "\n\nBrowser stack:\n" + h.c.Ab(d.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + h.c.Ab(h.debug.ad(c) + "-> ");
  } catch (e) {
    return "Exception trying to expose exception! You win, we lose. " + e;
  }
};
h.debug.bh = function(a) {
  var c = h.ce("window.location.href");
  if (h.isString(a)) {
    return{message:a, name:"Unknown error", lineNumber:"Not available", fileName:c, stack:"Not available"};
  }
  var d, e, f = !1;
  try {
    d = a.lineNumber || a.Ui || "Not available";
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
h.debug.Qf = function(a, c) {
  var d;
  "string" == typeof a ? (d = Error(a), Error.captureStackTrace && Error.captureStackTrace(d, h.debug.Qf)) : d = a;
  d.stack || (d.stack = h.debug.ad(h.debug.Qf));
  if (c) {
    for (var e = 0;d["message" + e];) {
      ++e;
    }
    d["message" + e] = String(c);
  }
  return d;
};
h.debug.pj = function(a) {
  if (h.Ad) {
    var c = h.debug.Df(h.debug.pj);
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
    if (e >= h.debug.ue) {
      c.push("[...long stack...]");
      break;
    }
  }
  a && e >= a ? c.push("[...reached max depth limit...]") : c.push("[end]");
  return c.join("");
};
h.debug.ue = 50;
h.debug.Df = function(a) {
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
h.debug.ad = function(a) {
  var c;
  h.Ad && (c = h.debug.Df(a || h.debug.ad));
  c || (c = h.debug.te(a || arguments.callee.caller, []));
  return c;
};
h.debug.te = function(a, c) {
  var d = [];
  if (h.a.contains(c, a)) {
    d.push("[...circular reference...]");
  } else {
    if (a && c.length < h.debug.ue) {
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
        d.push(h.debug.te(a.caller, c));
      } catch (k) {
        d.push("[exception trying to get caller]\n");
      }
    } else {
      a ? d.push("[...long stack...]") : d.push("[end]");
    }
  }
  return d.join("");
};
h.debug.er = function(a) {
  h.debug.Of = a;
};
h.debug.getFunctionName = function(a) {
  if (h.debug.ib[a]) {
    return h.debug.ib[a];
  }
  if (h.debug.Of) {
    var c = h.debug.Of(a);
    if (c) {
      return h.debug.ib[a] = c;
    }
  }
  a = String(a);
  h.debug.ib[a] || (c = /function ([^\(]+)/.exec(a), h.debug.ib[a] = c ? c[1] : "[Anonymous]");
  return h.debug.ib[a];
};
h.debug.Hq = function(a) {
  return a.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]");
};
h.debug.ib = {};
h.debug.Q = function(a, c, d, e, f) {
  this.reset(a, c, d, e, f);
};
h.debug.Q.prototype.zf = null;
h.debug.Q.prototype.yf = null;
h.debug.Q.Pi = !0;
h.debug.Q.Ri = 0;
h.debug.Q.prototype.reset = function(a, c, d, e, f) {
  h.debug.Q.Pi && ("number" == typeof f || h.debug.Q.Ri++);
  e || h.now();
  this.Pc = a;
  this.Qi = c;
  delete this.zf;
  delete this.yf;
};
h.debug.Q.prototype.Yh = function(a) {
  this.zf = a;
};
h.debug.Q.prototype.Zh = function(a) {
  this.yf = a;
};
h.debug.Q.prototype.getMessage = function() {
  return this.Qi;
};
h.debug.O = function() {
  this.clear();
};
h.debug.O.Re = function() {
  h.debug.O.Jb || (h.debug.O.Jb = new h.debug.O);
  return h.debug.O.Jb;
};
h.debug.O.tc = 0;
h.debug.O.prototype.Th = function(a, c, d) {
  var e = (this.qf + 1) % h.debug.O.tc;
  this.qf = e;
  if (this.rf) {
    return e = this.pf[e], e.reset(a, c, d), e;
  }
  this.rf = e == h.debug.O.tc - 1;
  return this.pf[e] = new h.debug.Q(a, c, d);
};
h.debug.O.Wh = function() {
  return 0 < h.debug.O.tc;
};
h.debug.O.prototype.clear = function() {
  this.pf = Array(h.debug.O.tc);
  this.qf = -1;
  this.rf = !1;
};
h.debug.g = function(a) {
  this.jd = a;
  this.Xa = this.Fd = this.Pc = this.Uc = null;
};
h.debug.g.qd = "";
h.debug.g.nb = !0;
h.debug.g.nb || (h.debug.g.Nc = []);
h.debug.g.j = function(a, c) {
  this.name = a;
  this.value = c;
};
h.debug.g.j.prototype.toString = function() {
  return this.name;
};
h.debug.g.j.sb = new h.debug.g.j("OFF", Infinity);
h.debug.g.j.hk = new h.debug.g.j("SHOUT", 1200);
h.debug.g.j.We = new h.debug.g.j("SEVERE", 1E3);
h.debug.g.j.Xe = new h.debug.g.j("WARNING", 900);
h.debug.g.j.Ve = new h.debug.g.j("INFO", 800);
h.debug.g.j.Te = new h.debug.g.j("CONFIG", 700);
h.debug.g.j.Ue = new h.debug.g.j("FINE", 500);
h.debug.g.j.Jj = new h.debug.g.j("FINER", 400);
h.debug.g.j.Kj = new h.debug.g.j("FINEST", 300);
h.debug.g.j.Aj = new h.debug.g.j("ALL", 0);
h.debug.g.j.kd = [h.debug.g.j.sb, h.debug.g.j.hk, h.debug.g.j.We, h.debug.g.j.Xe, h.debug.g.j.Ve, h.debug.g.j.Te, h.debug.g.j.Ue, h.debug.g.j.Jj, h.debug.g.j.Kj, h.debug.g.j.Aj];
h.debug.g.j.Aa = null;
h.debug.g.j.Qe = function() {
  h.debug.g.j.Aa = {};
  for (var a = 0, c;c = h.debug.g.j.kd[a];a++) {
    h.debug.g.j.Aa[c.value] = c, h.debug.g.j.Aa[c.name] = c;
  }
};
h.debug.g.j.Pp = function(a) {
  h.debug.g.j.Aa || h.debug.g.j.Qe();
  return h.debug.g.j.Aa[a] || null;
};
h.debug.g.j.Qp = function(a) {
  h.debug.g.j.Aa || h.debug.g.j.Qe();
  if (a in h.debug.g.j.Aa) {
    return h.debug.g.j.Aa[a];
  }
  for (var c = 0;c < h.debug.g.j.kd.length;++c) {
    var d = h.debug.g.j.kd[c];
    if (d.value <= a) {
      return d;
    }
  }
  return null;
};
h.debug.g.ii = function(a) {
  h.global.console && (h.global.console.timeStamp ? h.global.console.timeStamp(a) : h.global.console.markTimeline && h.global.console.markTimeline(a));
  h.global.msWriteProfilerMark && h.global.msWriteProfilerMark(a);
};
b = h.debug.g.prototype;
b.getName = function() {
  return this.jd;
};
b.Jf = function(a) {
  h.debug.Z && (h.debug.g.nb ? (this.Xa || (this.Xa = []), this.Xa.push(a)) : h.debug.g.Nc.push(a));
};
b.Mf = function(a) {
  if (h.debug.Z) {
    var c = h.debug.g.nb ? this.Xa : h.debug.g.Nc;
    return!!c && h.a.remove(c, a);
  }
  return!1;
};
b.getParent = function() {
  return this.Uc;
};
b.getChildren = function() {
  this.Fd || (this.Fd = {});
  return this.Fd;
};
b.ge = function() {
  if (!h.debug.Z) {
    return h.debug.g.j.sb;
  }
  if (!h.debug.g.nb) {
    return h.debug.g.Rk;
  }
  if (this.Pc) {
    return this.Pc;
  }
  if (this.Uc) {
    return this.Uc.ge();
  }
  h.m.Ua("Root logger has no level set.");
  return null;
};
b.fi = function(a) {
  return h.debug.Z && a.value >= this.ge().value;
};
b.log = function(a, c, d) {
  h.debug.Z && this.fi(a) && (h.isFunction(c) && (c = c()), this.ei(this.Se(a, c, d, h.debug.g.prototype.log)));
};
b.Se = function(a, c, d, e) {
  a = h.debug.O.Wh() ? h.debug.O.Re().Th(a, c, this.jd) : new h.debug.Q(a, String(c), this.jd);
  d && (a.Yh(d), a.Zh(h.debug.Uh(d, e || h.debug.g.prototype.Se)));
  return a;
};
b.vj = function(a, c) {
  h.debug.Z && this.log(h.debug.g.j.We, a, c);
};
b.Nf = function(a, c) {
  h.debug.Z && this.log(h.debug.g.j.Xe, a, c);
};
b.info = function(a, c) {
  h.debug.Z && this.log(h.debug.g.j.Ve, a, c);
};
b.config = function(a, c) {
  h.debug.Z && this.log(h.debug.g.j.Te, a, c);
};
b.Kf = function(a, c) {
  h.debug.Z && this.log(h.debug.g.j.Ue, a, c);
};
b.ei = function(a) {
  h.debug.g.ii("log:" + a.getMessage());
  if (h.debug.g.nb) {
    for (var c = this;c;) {
      c.hi(a), c = c.getParent();
    }
  } else {
    for (var c = 0, d;d = h.debug.g.Nc[c++];) {
      d(a);
    }
  }
};
b.hi = function(a) {
  if (this.Xa) {
    for (var c = 0, d;d = this.Xa[c];c++) {
      d(a);
    }
  }
};
h.debug.aa = {};
h.debug.aa.df = {};
h.debug.aa.ij = function() {
  h.debug.aa.cf || (h.debug.aa.df[h.debug.g.qd] = h.debug.aa.cf);
};
h.debug.aa.Hp = function() {
  return h.debug.aa.df;
};
h.debug.aa.Rp = function() {
  h.debug.aa.ij();
  return h.debug.aa.cf;
};
h.debug.aa.pp = function() {
  return function() {
  };
};
h.log = {};
h.log.Oa = h.debug.Z;
h.log.qd = h.debug.g.qd;
h.log.g = h.debug.g;
h.log.j = h.debug.g.j;
h.log.Q = h.debug.Q;
h.log.Jf = function(a, c) {
  h.log.Oa && a && a.Jf(c);
};
h.log.Mf = function(a, c) {
  return h.log.Oa && a ? a.Mf(c) : !1;
};
h.log.log = function(a, c, d, e) {
  h.log.Oa && a && a.log(c, d, e);
};
h.log.error = function(a, c, d) {
  h.log.Oa && a && a.vj(c, d);
};
h.log.Nf = function(a, c, d) {
  h.log.Oa && a && a.Nf(c, d);
};
h.log.info = function(a, c, d) {
  h.log.Oa && a && a.info(c, d);
};
h.log.Kf = function(a, c, d) {
  h.log.Oa && a && a.Kf(c, d);
};
h.tk = {};
h.tk.jm = function() {
};
h.q = function() {
  h.q.sd != h.q.td.sb && (h.q.Ma[h.Gb(this)] = this);
};
h.q.td = {sb:0, ti:1, nm:2};
h.q.sd = 0;
h.q.lm = !0;
h.q.Ma = {};
h.q.Tp = function() {
  var a = [], c;
  for (c in h.q.Ma) {
    h.q.Ma.hasOwnProperty(c) && a.push(h.q.Ma[Number(c)]);
  }
  return a;
};
h.q.ep = function() {
  h.q.Ma = {};
};
h.q.prototype.yd = !1;
h.q.prototype.Nd = function() {
  return this.yd;
};
h.q.prototype.Lb = function() {
  if (!this.yd && (this.yd = !0, this.na(), h.q.sd != h.q.td.sb)) {
    var a = h.Gb(this);
    if (h.q.sd == h.q.td.ti && !h.q.Ma.hasOwnProperty(a)) {
      throw Error(this + " did not call the goog.Disposable base constructor or was disposed of after a clearUndisposedObjects call");
    }
    delete h.q.Ma[a];
  }
};
h.q.prototype.na = function() {
  if (this.ng) {
    for (;this.ng.length;) {
      this.ng.shift()();
    }
  }
};
h.q.Nd = function(a) {
  return a && "function" == typeof a.Nd ? a.Nd() : !1;
};
h.Lb = function(a) {
  a && "function" == typeof a.Lb && a.Lb();
};
h.dj = function(a) {
  for (var c = 0, d = arguments.length;c < d;++c) {
    var e = arguments[c];
    h.D(e) ? h.dj.apply(null, e) : h.Lb(e);
  }
};
h.b = {};
h.b.we = function(a) {
  this.id = a;
};
h.b.we.prototype.toString = function() {
  return this.id;
};
h.b.Event = function(a, c) {
  this.type = a instanceof h.b.we ? String(a) : a;
  this.currentTarget = this.target = c;
  this.defaultPrevented = this.Ha = !1;
  this.ae = !0;
};
h.b.Event.prototype.na = function() {
};
h.b.Event.prototype.Lb = function() {
};
h.b.Event.prototype.stopPropagation = function() {
  this.Ha = !0;
};
h.b.Event.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.ae = !1;
};
h.b.Event.stopPropagation = function(a) {
  a.stopPropagation();
};
h.b.Event.preventDefault = function(a) {
  a.preventDefault();
};
h.debug.H = {};
h.debug.Xl = function() {
};
h.debug.H.hb = [];
h.debug.H.Cd = [];
h.debug.H.wf = !1;
h.debug.H.register = function(a) {
  h.debug.H.hb[h.debug.H.hb.length] = a;
  if (h.debug.H.wf) {
    for (var c = h.debug.H.Cd, d = 0;d < c.length;d++) {
      a(h.bind(c[d].wrap, c[d]));
    }
  }
};
h.debug.H.Iq = function(a) {
  h.debug.H.wf = !0;
  for (var c = h.bind(a.wrap, a), d = 0;d < h.debug.H.hb.length;d++) {
    h.debug.H.hb[d](c);
  }
  h.debug.H.Cd.push(a);
};
h.debug.H.Dr = function(a) {
  var c = h.debug.H.Cd;
  a = h.bind(a.Uk, a);
  for (var d = 0;d < h.debug.H.hb.length;d++) {
    h.debug.H.hb[d](a);
  }
  c.length--;
};
h.Ia = {};
h.Ia.object = function(a, c) {
  return c;
};
h.Ia.Id = function(a) {
  h.Ia.Id[" "](a);
  return a;
};
h.Ia.Id[" "] = h.Lk;
h.Ia.Og = function(a, c) {
  try {
    return h.Ia.Id(a[c]), !0;
  } catch (d) {
  }
  return!1;
};
h.b.bc = {gm:!h.userAgent.ba || h.userAgent.Od(9), Hc:!h.userAgent.ba || h.userAgent.Od(9), Pg:h.userAgent.ba && !h.userAgent.X("9"), fm:!h.userAgent.ea || h.userAgent.X("528"), em:h.userAgent.ic && h.userAgent.X("1.9b") || h.userAgent.ba && h.userAgent.X("8") || h.userAgent.Bd && h.userAgent.X("9.5") || h.userAgent.ea && h.userAgent.X("528"), im:h.userAgent.ic && !h.userAgent.X("8") || h.userAgent.ba && !h.userAgent.X("9"), mo:"ontouchstart" in h.global || !!(h.global.document && document.documentElement && 
"ontouchstart" in document.documentElement) || !(!h.global.navigator || !h.global.navigator.msMaxTouchPoints)};
h.b.zc = function(a) {
  return h.userAgent.ea ? "webkit" + a : h.userAgent.Bd ? "o" + a.toLowerCase() : a.toLowerCase();
};
h.b.ie = {jl:"click", Un:"rightclick", yl:"dblclick", Vm:"mousedown", Zm:"mouseup", Mg:"mouseover", Lg:"mouseout", Ym:"mousemove", Wm:"mouseenter", Xm:"mouseleave", Yn:"selectstart", um:"keypress", tm:"keydown", vm:"keyup", fl:"blur", Zl:"focus", zl:"deactivate", $l:h.userAgent.ba ? "focusin" : "DOMFocusIn", am:h.userAgent.ba ? "focusout" : "DOMFocusOut", hl:"change", Xn:"select", co:"submit", mm:"input", Nn:"propertychange", Ql:"dragstart", Ll:"drag", Nl:"dragenter", Pl:"dragover", Ol:"dragleave", 
Rl:"drop", Ml:"dragend", lo:"touchstart", ko:"touchmove", jo:"touchend", io:"touchcancel", el:"beforeunload", sl:"consolemessage", tl:"contextmenu", Fl:"DOMContentLoaded", ERROR:"error", hm:"help", Am:"load", Km:"losecapture", xn:"orientationchange", On:"readystatechange", Rn:"resize", Wn:"scroll", po:"unload", dm:"hashchange", yn:"pagehide", zn:"pageshow", Ln:"popstate", ul:"copy", An:"paste", wl:"cut", bl:"beforecopy", cl:"beforecut", dl:"beforepaste", wn:"online", vn:"offline", Sm:"message", rl:"connect", 
Zk:h.b.zc("AnimationStart"), Xk:h.b.zc("AnimationEnd"), Yk:h.b.zc("AnimationIteration"), no:h.b.zc("TransitionEnd"), Dn:"pointerdown", Jn:"pointerup", Cn:"pointercancel", Gn:"pointermove", In:"pointerover", Hn:"pointerout", En:"pointerenter", Fn:"pointerleave", cm:"gotpointercapture", Lm:"lostpointercapture", $m:"MSGestureChange", an:"MSGestureEnd", bn:"MSGestureHold", cn:"MSGestureStart", dn:"MSGestureTap", en:"MSGotPointerCapture", fn:"MSInertiaStart", gn:"MSLostPointerCapture", hn:"MSPointerCancel", 
jn:"MSPointerDown", kn:"MSPointerEnter", ln:"MSPointerHover", mn:"MSPointerLeave", nn:"MSPointerMove", pn:"MSPointerOut", qn:"MSPointerOver", rn:"MSPointerUp", ho:"textinput", pl:"compositionstart", ql:"compositionupdate", ol:"compositionend", Wl:"exit", Bm:"loadabort", Cm:"loadcommit", Dm:"loadredirect", Em:"loadstart", Fm:"loadstop", Sn:"responsive", ao:"sizechanged", qo:"unresponsive", to:"visibilitychange", bo:"storage", Kl:"DOMSubtreeModified", Gl:"DOMNodeInserted", Il:"DOMNodeRemoved", Jl:"DOMNodeRemovedFromDocument", 
Hl:"DOMNodeInsertedIntoDocument", Dl:"DOMAttrModified", El:"DOMCharacterDataModified"};
h.b.$ = function(a, c) {
  h.b.Event.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.ub = this.state = null;
  a && this.yb(a, c);
};
h.ja(h.b.$, h.b.Event);
h.b.$.sn = {ym:0, Tm:1, Tn:2};
h.b.$.km = [1, 4, 2];
h.b.$.prototype.yb = function(a, c) {
  var d = this.type = a.type;
  this.target = a.target || a.srcElement;
  this.currentTarget = c;
  var e = a.relatedTarget;
  e ? h.userAgent.ic && (h.Ia.Og(e, "nodeName") || (e = null)) : d == h.b.ie.Mg ? e = a.fromElement : d == h.b.ie.Lg && (e = a.toElement);
  this.relatedTarget = e;
  this.offsetX = h.userAgent.ea || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = h.userAgent.ea || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
  this.ub = a;
  a.defaultPrevented && this.preventDefault();
};
h.b.$.prototype.stopPropagation = function() {
  h.b.$.oa.stopPropagation.call(this);
  this.ub.stopPropagation ? this.ub.stopPropagation() : this.ub.cancelBubble = !0;
};
h.b.$.prototype.preventDefault = function() {
  h.b.$.oa.preventDefault.call(this);
  var a = this.ub;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, h.b.bc.Pg) {
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
h.b.N.se = "closure_listenable_" + (1E6 * Math.random() | 0);
h.b.N.pk = function(a) {
  a.prototype[h.b.N.se] = !0;
};
h.b.N.la = function(a) {
  return!(!a || !a[h.b.N.se]);
};
h.b.jc = function() {
};
h.b.jc.eh = 0;
h.b.jc.Rg = function() {
  return++h.b.jc.eh;
};
h.b.Wc = function(a, c, d, e, f, g) {
  this.Ga = a;
  this.proxy = c;
  this.src = d;
  this.type = e;
  this.capture = !!f;
  this.hc = g;
  this.key = h.b.jc.Rg();
  this.removed = this.Fa = !1;
};
h.b.Wc.Tl = !1;
h.b.Wc.prototype.$b = function() {
  this.removed = !0;
  this.hc = this.src = this.proxy = this.Ga = null;
};
h.b.wa = function(a) {
  this.src = a;
  this.F = {};
  this.mb = 0;
};
b = h.b.wa.prototype;
b.Fg = function() {
  return this.mb;
};
b.add = function(a, c, d, e, f) {
  var g = a.toString();
  a = this.F[g];
  a || (a = this.F[g] = [], this.mb++);
  var k = h.b.wa.Dc(a, c, e, f);
  -1 < k ? (c = a[k], d || (c.Fa = !1)) : (c = new h.b.Wc(c, null, this.src, g, !!e, f), c.Fa = d, a.push(c));
  return c;
};
b.remove = function(a, c, d, e) {
  a = a.toString();
  if (!(a in this.F)) {
    return!1;
  }
  var f = this.F[a];
  c = h.b.wa.Dc(f, c, d, e);
  return-1 < c ? (f[c].$b(), h.a.ob(f, c), 0 == f.length && (delete this.F[a], this.mb--), !0) : !1;
};
b.$d = function(a) {
  var c = a.type;
  if (!(c in this.F)) {
    return!1;
  }
  var d = h.a.remove(this.F[c], a);
  d && (a.$b(), 0 == this.F[c].length && (delete this.F[c], this.mb--));
  return d;
};
b.removeAll = function(a) {
  a = a && a.toString();
  var c = 0, d;
  for (d in this.F) {
    if (!a || d == a) {
      for (var e = this.F[d], f = 0;f < e.length;f++) {
        ++c, e[f].$b();
      }
      delete this.F[d];
      this.mb--;
    }
  }
  return c;
};
b.wb = function(a, c) {
  var d = this.F[a.toString()], e = [];
  if (d) {
    for (var f = 0;f < d.length;++f) {
      var g = d[f];
      g.capture == c && e.push(g);
    }
  }
  return e;
};
b.$a = function(a, c, d, e) {
  a = this.F[a.toString()];
  var f = -1;
  a && (f = h.b.wa.Dc(a, c, d, e));
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
h.b.wa.Dc = function(a, c, d, e) {
  for (var f = 0;f < a.length;++f) {
    var g = a[f];
    if (!g.removed && g.Ga == c && g.capture == !!d && g.hc == e) {
      return f;
    }
  }
  return-1;
};
h.b.Dq = {};
h.b.Ic = "closure_lm_" + (1E6 * Math.random() | 0);
h.b.gh = "on";
h.b.cd = {};
h.b.Lc = {Ag:0, Bg:1, Hg:2};
h.b.Kc = 2;
h.b.ec = 0;
h.b.listen = function(a, c, d, e, f) {
  if (h.isArray(c)) {
    for (var g = 0;g < c.length;g++) {
      h.b.listen(a, c[g], d, e, f);
    }
    return null;
  }
  d = h.b.gc(d);
  return h.b.N.la(a) ? a.listen(c, d, e, f) : h.b.je(a, c, d, !1, e, f);
};
h.b.je = function(a, c, d, e, f, g) {
  if (!c) {
    throw Error("Invalid event type");
  }
  var k = !!f;
  if (k && !h.b.bc.Hc) {
    if (h.b.Kc == h.b.Lc.Ag) {
      return h.m.Ua("Can not register capture listener in IE8-."), null;
    }
    if (h.b.Kc == h.b.Lc.Bg) {
      return null;
    }
  }
  var l = h.b.ya(a);
  l || (a[h.b.Ic] = l = new h.b.wa(a));
  d = l.add(c, d, e, f, g);
  if (d.proxy) {
    return d;
  }
  e = h.b.Cg();
  d.proxy = e;
  e.src = a;
  e.Ga = d;
  a.addEventListener ? a.addEventListener(c.toString(), e, k) : a.attachEvent(h.b.Sd(c.toString()), e);
  h.b.ec++;
  return d;
};
h.b.Cg = function() {
  var a = h.b.zb, c = h.b.bc.Hc ? function(d) {
    return a.call(c.src, c.Ga, d);
  } : function(d) {
    d = a.call(c.src, c.Ga, d);
    if (!d) {
      return d;
    }
  };
  return c;
};
h.b.Xc = function(a, c, d, e, f) {
  if (h.isArray(c)) {
    for (var g = 0;g < c.length;g++) {
      h.b.Xc(a, c[g], d, e, f);
    }
    return null;
  }
  d = h.b.gc(d);
  return h.b.N.la(a) ? a.Xc(c, d, e, f) : h.b.je(a, c, d, !0, e, f);
};
h.b.Cq = function(a, c, d, e, f) {
  c.listen(a, d, e, f);
};
h.b.vb = function(a, c, d, e, f) {
  if (h.isArray(c)) {
    for (var g = 0;g < c.length;g++) {
      h.b.vb(a, c[g], d, e, f);
    }
    return null;
  }
  d = h.b.gc(d);
  if (h.b.N.la(a)) {
    return a.vb(c, d, e, f);
  }
  if (!a) {
    return!1;
  }
  if (a = h.b.ya(a)) {
    if (c = a.$a(c, d, !!e, f)) {
      return h.b.Wa(c);
    }
  }
  return!1;
};
h.b.Wa = function(a) {
  if (h.isNumber(a) || !a || a.removed) {
    return!1;
  }
  var c = a.src;
  if (h.b.N.la(c)) {
    return c.Wa(a);
  }
  var d = a.type, e = a.proxy;
  c.removeEventListener ? c.removeEventListener(d, e, a.capture) : c.detachEvent && c.detachEvent(h.b.Sd(d), e);
  h.b.ec--;
  (d = h.b.ya(c)) ? (d.$d(a), 0 == d.Fg() && (d.src = null, c[h.b.Ic] = null)) : a.$b();
  return!0;
};
h.b.Cr = function(a, c, d, e, f) {
  c.vb(a, d, e, f);
};
h.b.removeAll = function(a, c) {
  if (!a) {
    return 0;
  }
  if (h.b.N.la(a)) {
    return a.Zd(c);
  }
  var d = h.b.ya(a);
  if (!d) {
    return 0;
  }
  var e = 0, f = c && c.toString(), g;
  for (g in d.F) {
    if (!f || g == f) {
      for (var k = d.F[g].concat(), l = 0;l < k.length;++l) {
        h.b.Wa(k[l]) && ++e;
      }
    }
  }
  return e;
};
h.b.Xq = function() {
  return h.b.ec = 0;
};
h.b.wb = function(a, c, d) {
  return h.b.N.la(a) ? a.wb(c, d) : a ? (a = h.b.ya(a)) ? a.wb(c, d) : [] : [];
};
h.b.$a = function(a, c, d, e, f) {
  d = h.b.gc(d);
  e = !!e;
  return h.b.N.la(a) ? a.$a(c, d, e, f) : a ? (a = h.b.ya(a)) ? a.$a(c, d, e, f) : null : null;
};
h.b.hasListener = function(a, c, d) {
  if (h.b.N.la(a)) {
    return a.hasListener(c, d);
  }
  a = h.b.ya(a);
  return!!a && a.hasListener(c, d);
};
h.b.uk = function(a) {
  var c = [], d;
  for (d in a) {
    a[d] && a[d].id ? c.push(d + " = " + a[d] + " (" + a[d].id + ")") : c.push(d + " = " + a[d]);
  }
  return c.join("\n");
};
h.b.Sd = function(a) {
  return a in h.b.cd ? h.b.cd[a] : h.b.cd[a] = h.b.gh + a;
};
h.b.bb = function(a, c, d, e) {
  return h.b.N.la(a) ? a.bb(c, d, e) : h.b.Qc(a, c, d, e);
};
h.b.Qc = function(a, c, d, e) {
  var f = 1;
  if (a = h.b.ya(a)) {
    if (c = a.F[c.toString()]) {
      for (c = c.concat(), a = 0;a < c.length;a++) {
        var g = c[a];
        g && g.capture == d && !g.removed && (f &= !1 !== h.b.Rc(g, e));
      }
    }
  }
  return Boolean(f);
};
h.b.Rc = function(a, c) {
  var d = a.Ga, e = a.hc || a.src;
  a.Fa && h.b.Wa(a);
  return d.call(e, c);
};
h.b.Sp = function() {
  return h.b.ec;
};
h.b.dispatchEvent = function(a, c) {
  return a.dispatchEvent(c);
};
h.b.Uq = function(a) {
  h.b.zb = a.Sk(h.b.zb);
};
h.b.zb = function(a, c) {
  if (a.removed) {
    return!0;
  }
  if (!h.b.bc.Hc) {
    var d = c || h.ce("window.event"), e = new h.b.$(d, this), f = !0;
    if (h.b.Kc == h.b.Lc.Hg) {
      if (!h.b.Ig(d)) {
        h.b.Jg(d);
        for (var d = [], g = e.currentTarget;g;g = g.parentNode) {
          d.push(g);
        }
        for (var g = a.type, k = d.length - 1;!e.Ha && 0 <= k;k--) {
          e.currentTarget = d[k], f &= h.b.Qc(d[k], g, !0, e);
        }
        for (k = 0;!e.Ha && k < d.length;k++) {
          e.currentTarget = d[k], f &= h.b.Qc(d[k], g, !1, e);
        }
      }
    } else {
      f = h.b.Rc(a, e);
    }
    return f;
  }
  return h.b.Rc(a, new h.b.$(c, this));
};
h.b.Jg = function(a) {
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
h.b.Ig = function(a) {
  return 0 > a.keyCode || void 0 != a.returnValue;
};
h.b.oh = 0;
h.b.Up = function(a) {
  return a + "_" + h.b.oh++;
};
h.b.ya = function(a) {
  a = a[h.b.Ic];
  return a instanceof h.b.wa ? a : null;
};
h.b.Ge = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
h.b.gc = function(a) {
  return h.isFunction(a) ? a : a[h.b.Ge] || (a[h.b.Ge] = function(c) {
    return a.handleEvent(c);
  });
};
h.debug.H.register(function(a) {
  h.b.zb = a(h.b.zb);
});
h.b.pa = function() {
  h.q.call(this);
  this.fa = new h.b.wa(this);
  this.Gg = this;
};
h.ja(h.b.pa, h.q);
h.b.N.pk(h.b.pa);
h.b.pa.Nm = 1E3;
b = h.b.pa.prototype;
b.ke = null;
b.ve = function() {
  return this.ke;
};
b.addEventListener = function(a, c, d, e) {
  h.b.listen(this, a, c, d, e);
};
b.removeEventListener = function(a, c, d, e) {
  h.b.vb(this, a, c, d, e);
};
b.dispatchEvent = function(a) {
  var c, d = this.ve();
  if (d) {
    for (c = [];d;d = d.ve()) {
      c.push(d);
    }
  }
  return h.b.pa.$g(this.Gg, a, c);
};
b.na = function() {
  h.b.pa.oa.na.call(this);
  this.Zd();
  this.ke = null;
};
b.listen = function(a, c, d, e) {
  return this.fa.add(String(a), c, !1, d, e);
};
b.Xc = function(a, c, d, e) {
  return this.fa.add(String(a), c, !0, d, e);
};
b.vb = function(a, c, d, e) {
  return this.fa.remove(String(a), c, d, e);
};
b.Wa = function(a) {
  return this.fa.$d(a);
};
b.Zd = function(a) {
  return this.fa ? this.fa.removeAll(a) : 0;
};
b.bb = function(a, c, d) {
  a = this.fa.F[String(a)];
  if (!a) {
    return!0;
  }
  a = a.concat();
  for (var e = !0, f = 0;f < a.length;++f) {
    var g = a[f];
    if (g && !g.removed && g.capture == c) {
      var k = g.Ga, l = g.hc || g.src;
      g.Fa && this.Wa(g);
      e = !1 !== k.call(l, d) && e;
    }
  }
  return e && !1 != d.ae;
};
b.wb = function(a, c) {
  return this.fa.wb(String(a), c);
};
b.$a = function(a, c, d, e) {
  return this.fa.$a(String(a), c, d, e);
};
b.hasListener = function(a, c) {
  return this.fa.hasListener(h.T(a) ? String(a) : void 0, c);
};
h.b.pa.$g = function(a, c, d) {
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
      g = c.currentTarget = d[k], f = g.bb(e, !0, c) && f;
    }
  }
  c.Ha || (g = c.currentTarget = a, f = g.bb(e, !0, c) && f, c.Ha || (f = g.bb(e, !1, c) && f));
  if (d) {
    for (k = 0;!c.Ha && k < d.length;k++) {
      g = c.currentTarget = d[k], f = g.bb(e, !1, c) && f;
    }
  }
  return f;
};
h.G = function(a, c) {
  h.b.pa.call(this);
  this.tb = a || 1;
  this.Za = c || h.G.Vc;
  this.Sc = h.bind(this.Kg, this);
  this.Tc = h.now();
};
h.ja(h.G, h.b.pa);
h.G.fj = 2147483647;
h.G.prototype.enabled = !1;
h.G.Vc = h.global;
h.G.Ii = .8;
b = h.G.prototype;
b.W = null;
b.setInterval = function(a) {
  this.tb = a;
  this.W && this.enabled ? (this.stop(), this.start()) : this.W && this.stop();
};
b.Kg = function() {
  if (this.enabled) {
    var a = h.now() - this.Tc;
    0 < a && a < this.tb * h.G.Ii ? this.W = this.Za.setTimeout(this.Sc, this.tb - a) : (this.W && (this.Za.clearTimeout(this.W), this.W = null), this.Hi(), this.enabled && (this.W = this.Za.setTimeout(this.Sc, this.tb), this.Tc = h.now()));
  }
};
b.Hi = function() {
  this.dispatchEvent(h.G.hj);
};
b.start = function() {
  this.enabled = !0;
  this.W || (this.W = this.Za.setTimeout(this.Sc, this.tb), this.Tc = h.now());
};
b.stop = function() {
  this.enabled = !1;
  this.W && (this.Za.clearTimeout(this.W), this.W = null);
};
b.na = function() {
  h.G.oa.na.call(this);
  this.stop();
  delete this.Za;
};
h.G.hj = "tick";
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
  return c > h.G.fj ? -1 : h.G.Vc.setTimeout(a, c || 0);
};
h.G.clear = function(a) {
  h.G.Vc.clearTimeout(a);
};
m.qa = function() {
  this.of = this.Db = 0;
  this.mf = 1;
  this.Eb = 0;
  this.nd = void 0;
  this.ef = this.ld = null;
  this.pc = 0;
  this.qc = !1;
  this.od = this.Fb = null;
};
h.ja(m.qa, h.q);
b = m.qa.prototype;
b.start = function(a, c, d) {
  if (this.nf()) {
    throw Error("Cannot call Retry.start more than once.");
  }
  if (!this.Db) {
    throw Error("Cannot use AsyncRetry without setting a nonzero retry delay.");
  }
  this.ld = a;
  this.Li = c || null;
  this.ef = d || null;
  h.G.Fa(h.bind(this.bf, this), 0);
};
b.bf = function() {
  this.Fb = null;
  if (this.Eb && this.pc >= this.Eb) {
    this.abort(this.nd);
  } else {
    if (!this.qc) {
      this.od = new m.qa.rc(this, this.pc);
      this.pc++;
      try {
        this.ld(this.od);
      } finally {
        this.qc || (this.Fb = h.G.Fa(h.bind(this.bf, this), this.Db)), this.gi();
      }
    }
  }
};
b.gi = function() {
  var a = this.Db * this.mf;
  this.of && (a = Math.min(a, this.of));
  this.Db = a;
};
b.mi = function(a, c) {
  this.Eb = a;
  this.nd = c;
  return this;
};
b.ni = function(a) {
  this.Db = a;
  return this;
};
b.li = function(a) {
  this.mf = a;
  return this;
};
b.lj = function(a) {
  if (!this.nf()) {
    throw Error("Not started yet.");
  }
  this.Hf(this.Li, a);
};
b.abort = function(a) {
  this.Hf(this.ef, a);
};
b.kj = function(a) {
  a === this.od && this.Eb && (this.pc < this.Eb || this.abort(this.nd));
};
b.Hf = function(a, c) {
  null != this.Fb && (h.G.clear(this.Fb), this.Fb = null);
  this.qc || (this.qc = !0, a && a(c));
};
b.na = function() {
  m.qa.oa.na.call(this);
  this.abort();
};
b.nf = function() {
  return null != this.ld;
};
m.qa.rc = function(a) {
  this.Hd = a;
  this.Pa = !1;
};
m.qa.rc.prototype.Ua = function() {
  this.Pa || (this.Pa = !0, this.Hd.kj(this));
};
m.qa.rc.prototype.oi = function(a) {
  this.Pa || (this.Pa = !0, this.Hd.lj(a));
};
m.qa.rc.prototype.abort = function(a) {
  this.Pa || (this.Pa = !0, this.Hd.abort(a));
};
m.Af = function(a) {
  this.Hb = a;
  this.Ed = this.P = null;
};
b = m.Af.prototype;
b.cj = function(a) {
  this.Ed = a;
};
b.gf = function(a) {
  a.clientId = this.Hb;
  if (!this.P && (this.hf(), !this.P)) {
    return;
  }
  this.P.postMessage(a);
};
b.hf = function() {
  !this.P && (this.P = chrome.runtime.connect({name:this.Hb})) && (this.P.onMessage.addListener(h.bind(this.ff, this)), this.P.onDisconnect.addListener(h.bind(this.ej, this)));
};
b.ff = function(a) {
  this.Ed && this.Ed(a);
};
b.ej = function() {
  this.P = null;
  var a = new m.qa;
  a.ni(100);
  a.li(2);
  a.mi(6);
  var c = h.bind(function(a) {
    this.hf();
    this.P ? a.oi() : a.Ua();
  }, this), d = h.bind(function() {
    this.gf(new m.rd(m.L.ji, null));
  }, this), e = h.bind(function() {
    this.ff(new m.rd(m.L.$e, null));
  }, this);
  a.start(c, d, e);
};
m.Kb = function(a) {
  this.Rf = a;
  this.Pf = null;
};
m.Kb.prototype.yb = function() {
  window.addEventListener("message", this.Mk.bind(this), !1);
};
m.Kb.prototype.bj = function(a) {
  this.Pf = a;
};
m.Kb.prototype.Mk = function(a) {
  if (a.source != window) {
    var c = a.data;
    this.Rf = c.appOrigin = a.origin;
    this.Pf(c);
  }
};
m.Kb.prototype.kf = function(a) {
  a.clientId = null;
  window.parent.postMessage(a, this.Rf);
};
m.Nb = function() {
  this.Hb = "client-" + String(Math.floor(1E5 * Math.random()));
  this.sessionRequest = null;
  this.oc = new m.Kb(m.Dd.Ti("appOrigin"));
  this.lf = new m.Af(this.Hb);
};
m.Nb.prototype.yb = function() {
  this.oc.yb();
  this.oc.bj(this.Yi.bind(this));
  this.lf.cj(this.Zi.bind(this));
  this.$i(null);
};
m.Nb.prototype.$i = function(a) {
  this.oc.kf(new m.rd(m.L.Si, a));
};
m.Nb.prototype.Yi = function(a) {
  a.clientId = this.Hb;
  this.lf.gf(a);
};
m.Nb.prototype.Zi = function(a) {
  switch(a.type) {
    case m.L.vi:
    ;
    case m.L.wi:
    ;
    case m.L.ERROR:
    ;
    case m.L.yi:
    ;
    case m.L.Fi:
    ;
    case m.L.Bi:
    ;
    case m.L.Ai:
    ;
    case m.L.Gi:
    ;
    case m.L.Ei:
    ;
    case m.L.Ci:
    ;
    case m.L.$e:
    ;
    case m.L.xi:
    ;
    case m.L.Di:
    ;
    case m.L.zi:
      this.oc.kf(a);
  }
};
m.zk = new m.Nb;
m.zk.yb();

