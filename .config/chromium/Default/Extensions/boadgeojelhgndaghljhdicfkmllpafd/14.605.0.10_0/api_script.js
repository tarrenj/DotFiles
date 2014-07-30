var cast = cast || {};
cast.Message = function(source, target, seq, type, message) {
  this.source = source;
  this.target = target;
  this.seq = seq;
  this.type = type;
  this.message = message;
};
cast.AppRequestType = {REGISTER_CLIENT:"RegisterClient", ADD_RECEIVER_LISTENER:"AddReceiverListener", REMOVE_RECEIVER_LISTENER:"RemoveReceiverListener", LAUNCH_ACTIVITY:"LaunchActivity", JOIN_ACTIVITY:"JoinActivity", LEAVE_ACTIVITY:"LeaveActivity", STOP_ACTIVITY:"StopActivity", GET_ACTIVITY_STATUS:"GetActivityStatus", LOG_MESSAGE:"LogMessage", SEND_CUSTOM_MESSAGE:"SendCustomMessage", ADD_CUSTOM_MESSAGE_LISTENER:"AddCustomMessageListener", REMOVE_CUSTOM_MESSAGE_LISTENER:"RemoveCustomMessageListener", 
LOAD_MEDIA:"LoadMedia", PLAY_MEDIA:"PlayMedia", PAUSE_MEDIA:"PauseMedia", SET_MEDIA_VOLUME:"SetMediaVolume", SELECT_MEDIA_TRACKS:"SelectMediaTracks", MEDIA_STATUS:"MediaStatus", ADD_MEDIA_STATUS_LISTENER:"AddMediaStatusListener", REMOVE_MEDIA_STATUS_LISTENER:"RemoveMediaStatusListener", MEDIA_KEY_RESPONSE:"MediaKeyResponse", PONG:"pong"};
cast.ServiceEventType = {RELOAD_REQUEST:"ReloadRequest", RECEIVER_LIST:"ReceiverListUpdateEvent", ACTIVITY_STATUS:"ActivityStatusEvent", CUSTOM_MESSAGE:"CustomMessageEvent", CUSTOM_MESSAGE_RESULT:"CustomMessageResultEvent", MEDIA_RESULT:"MediaResultEvent", MEDIA_KEY_REQUEST:"MediaKeyRequest", PING:"ping"};
cast.ReceiverListEvent = function(activityType, receivers) {
  this.activityType = activityType;
  this.receivers = receivers;
};
cast.LogMessage = function(message) {
  this.source = window.location.origin && window.location.origin.split("//")[1] || window.location.origin || "unknown";
  this.message = message;
};
cast.MessageRequest = function(activityId, namespace, message) {
  this.activityId = activityId;
  this.namespace = namespace;
  this.message = message;
};
cast.NAME = "CastApi";
cast.Receiver = function(id, name) {
  this.id = id;
  this.name = name;
  this.isTabProjected = this.ipAddress = null;
};
cast.LaunchDescription = function() {
  this.url = this.text = null;
};
cast.LaunchRequest = function(activityType, receiver) {
  this.activityType = activityType;
  this.receiver = receiver;
  this.description = this.parameters = null;
  this.disconnectPolicy = "continue";
};
cast.ActivityStatus = function(activityId, status) {
  this.activityId = activityId;
  this.status = status;
  this.errorString = null;
  this.extraData = {};
};
cast.MediaPlayerStatus = function(activityId, state) {
  this.eventSequenceId = null;
  this.activityId = activityId;
  this.state = state;
  this.imageUrl = this.title = this.contentId = null;
  this.timeProgress = !1;
  this.error = this.mediaTracks = this.contentInfo = this.muted = this.volume = this.duration = this.position = null;
  this.hasPause = !0;
};
cast.MediaResult = function(activityId) {
  this.activityId = activityId;
  this.status = null;
  this.success = !1;
  this.errorString = null;
};
cast.MediaVolumeRequest = function(opt_volume, opt_muted) {
  this.volume = opt_volume;
  this.muted = opt_muted;
};
cast.MediaLoadRequest = function(src) {
  this.src = src;
  this.title = null;
  this.autoplay = !1;
  this.imageUrl = this.contentInfo = null;
};
cast.MediaPlayRequest = function(opt_position) {
  this.position = opt_position;
};
cast.MediaTrack = function(id, type) {
  this.id = id;
  this.type = type;
  this.selected = this.language = this.name = null;
};
cast.MediaSelectTracksRequest = function() {
  this.disabledTracks = this.enabledTracks = null;
};
cast.MediaKeyRequest = function(activityId, cmdId, method, requests) {
  this.activityId = activityId;
  this.cmdId = cmdId;
  this.method = method;
  this.requests = requests;
};
cast.MediaKeyResponse = function(cmdId, tokens) {
  this.cmdId = cmdId;
  this.tokens = tokens;
};
cast.Api = function() {
  this.receiverListeners_ = {};
  this.mediaStatusListeners_ = {};
  this.messageListeners_ = {};
  this.mediaKeyRequestListeners_ = {};
  this.pendingRequests_ = {};
  this.reloadTabRequestHandler_ = function() {
  };
  this.init();
};
cast.Api.prototype.setReloadTabRequestHandler = function(reloadTabRequestHandler) {
  this.reloadTabRequestHandler_ = reloadTabRequestHandler || function() {
  };
};
cast.Api.prototype.addReceiverListener = function(activityType, listener) {
  cast.Api.addToMap_(this.receiverListeners_, activityType, listener) && this.sendRequest(cast.AppRequestType.ADD_RECEIVER_LISTENER, activityType);
};
cast.Api.prototype.removeReceiverListener = function(activityType, listener) {
  cast.Api.removeFromMap_(this.receiverListeners_, activityType, listener) && this.sendRequest(cast.AppRequestType.REMOVE_RECEIVER_LISTENER, activityType);
};
cast.Api.prototype.launch = function(launchRequest, resultCallback) {
  var appRequest = this.sendRequest(cast.AppRequestType.LAUNCH_ACTIVITY, launchRequest), timeoutResult = new cast.ActivityStatus(null, "error");
  timeoutResult.errorString = "Launch timeout";
  this.addPendingRequest_(appRequest, resultCallback, timeoutResult, 2E4);
};
cast.Api.prototype.getActivityStatus = function(activityId, resultCallback) {
  var appRequest = this.sendRequest(cast.AppRequestType.GET_ACTIVITY_STATUS, activityId), timeoutResult = new cast.ActivityStatus(null, "error");
  timeoutResult.errorString = "Request timeout";
  this.addPendingRequest_(appRequest, resultCallback, timeoutResult);
};
cast.Api.prototype.stopActivity = function(activityId, resultCallback) {
  this.sendRequest(cast.AppRequestType.STOP_ACTIVITY, activityId);
  resultCallback(new cast.ActivityStatus(activityId, "stopped"));
};
cast.Api.prototype.loadMedia = function(activityId, loadRequest, resultCallback) {
  this.sendRampRequest_(activityId, cast.AppRequestType.LOAD_MEDIA, loadRequest, resultCallback);
};
cast.Api.prototype.playMedia = function(activityId, playRequest, resultCallback) {
  this.sendRampRequest_(activityId, cast.AppRequestType.PLAY_MEDIA, playRequest, resultCallback);
};
cast.Api.prototype.pauseMedia = function(activityId, resultCallback) {
  this.sendRampRequest_(activityId, cast.AppRequestType.PAUSE_MEDIA, {}, resultCallback);
};
cast.Api.prototype.setMediaVolume = function(activityId, volumeRequest, resultCallback) {
  this.sendRampRequest_(activityId, cast.AppRequestType.SET_MEDIA_VOLUME, volumeRequest, resultCallback);
};
cast.Api.prototype.selectMediaTracks = function(activityId, tracksRequest, resultCallback) {
  this.sendRampRequest_(activityId, cast.AppRequestType.SELECT_MEDIA_TRACKS, tracksRequest, resultCallback);
};
cast.Api.prototype.getMediaStatus = function(activityId, resultCallback) {
  this.sendRampRequest_(activityId, cast.AppRequestType.MEDIA_STATUS, {}, resultCallback);
};
cast.Api.prototype.sendMediaKeyResponse = function(activityId, response) {
  this.sendRampRequest_(activityId, cast.AppRequestType.MEDIA_KEY_RESPONSE, response, function() {
  });
};
cast.Api.prototype.addMediaStatusListener = function(activityId, listener) {
  cast.Api.addToMap_(this.mediaStatusListeners_, activityId, listener) && this.sendRequest(cast.AppRequestType.ADD_MEDIA_STATUS_LISTENER, activityId);
};
cast.Api.prototype.removeMediaStatusListener = function(activityId, listener) {
  cast.Api.removeFromMap_(this.mediaStatusListeners_, activityId, listener) && this.sendRequest(cast.AppRequestType.REMOVE_MEDIA_STATUS_LISTENER, activityId);
};
cast.Api.prototype.addMediaKeyRequestListener = function(activityId, listener) {
  cast.Api.addToMap_(this.mediaKeyRequestListeners_, activityId, listener);
};
cast.Api.prototype.removeMediaKeyRequestListener = function(activityId, listener) {
  cast.Api.removeFromMap_(this.mediaKeyRequestListeners_, activityId, listener);
};
cast.Api.prototype.sendMessage = function(activityId, namespace, message, resultCallback) {
  var request = this.sendRequest(cast.AppRequestType.SEND_CUSTOM_MESSAGE, new cast.MessageRequest(activityId, namespace, message));
  resultCallback && this.addPendingRequest_(request, resultCallback, "sendMessage timeout");
};
cast.Api.prototype.addMessageListener = function(activityId, namespace, listener) {
  cast.Api.addToMap_(this.messageListeners_, this.messageListenerKey_(namespace, activityId), listener) && this.sendRequest(cast.AppRequestType.ADD_CUSTOM_MESSAGE_LISTENER, [namespace, activityId]);
};
cast.Api.prototype.removeMessageListener = function(activityId, namespace, listener) {
  cast.Api.removeFromMap_(this.messageListeners_, this.messageListenerKey_(namespace, activityId), listener) && this.sendRequest(cast.AppRequestType.REMOVE_CUSTOM_MESSAGE_LISTENER, [namespace, activityId]);
};
cast.VERSION = [2, 4];
cast.MediaResult.createMediaResult = function(activityId, status) {
  var ret = new cast.MediaResult(activityId);
  ret.success = !0;
  ret.status = status;
  ret.errorString = null;
  return ret;
};
cast.MediaResult.createMediaResultError = function(activityId, error) {
  var ret = new cast.MediaResult(activityId);
  ret.success = !1;
  ret.status = null;
  ret.errorString = error;
  return ret;
};
cast.Api.prototype.logMessage = function(message) {
  this.sendRequest(cast.AppRequestType.LOG_MESSAGE, new cast.LogMessage(message));
};
cast.Api.REQUEST_TIMEOUT_MS_ = 3E3;
cast.Api.prototype.init = function() {
  window.addEventListener("message", this.onContentMessage.bind(this), !1);
  this.sendRequest(cast.AppRequestType.REGISTER_CLIENT, {});
};
cast.Api.prototype.sendRequest = function(requestType, request) {
  var appRequest = new cast.Message(cast.Client.getClientId(), cast.NAME, cast.Client.getNextSeq(), requestType, request);
  window.postMessage(appRequest, "*");
  return appRequest;
};
cast.Api.prototype.onContentMessage = function(event) {
  event.source == window && event.data && event.data.target == cast.Client.getClientId() && this.processCastMessage(event.data);
};
cast.Api.prototype.processCastMessage = function(castMessage) {
  var seqString = String(castMessage.seq), resultCallback = this.pendingRequests_[seqString];
  resultCallback && delete this.pendingRequests_[seqString];
  switch(castMessage.type) {
    case cast.ServiceEventType.RELOAD_REQUEST:
      this.reloadTabRequestHandler_();
      break;
    case cast.ServiceEventType.RECEIVER_LIST:
      this.onUpdateReceiverList_(castMessage.message);
      break;
    case cast.ServiceEventType.CUSTOM_MESSAGE:
      this.onCustomMessage_(castMessage);
      break;
    case cast.ServiceEventType.ACTIVITY_STATUS:
      this.onActivityStatus_(castMessage, resultCallback);
      break;
    case cast.ServiceEventType.MEDIA_RESULT:
      this.onMediaResult_(castMessage, resultCallback);
      break;
    case cast.ServiceEventType.MEDIA_KEY_REQUEST:
      this.onMediaKeyRequest_(castMessage);
      break;
    case cast.ServiceEventType.PING:
      this.sendRequest(cast.AppRequestType.PONG, {});
      break;
  }
};
cast.Api.prototype.onActivityStatus_ = function(castMessage, resultCallback) {
  resultCallback && (castMessage.seq == this.pendingLaunchSeq_ && (this.pendingLaunchSeq_ = null), resultCallback(castMessage.message));
};
cast.Api.prototype.onMediaResult_ = function(castMessage, resultCallback) {
  var mediaResult = castMessage.message;
  resultCallback && resultCallback(mediaResult);
  if (mediaResult.status) {
    var listeners = this.mediaStatusListeners_[mediaResult.activityId];
    listeners && listeners.forEach(function(l) {
      l(mediaResult.status);
    });
  }
};
cast.Api.prototype.onMediaKeyRequest_ = function(castMessage) {
  var mediaKeyRequest = castMessage.message, listeners = this.mediaKeyRequestListeners_[mediaKeyRequest.activityId];
  listeners && listeners.forEach(function(l) {
    l(mediaKeyRequest);
  });
};
cast.Api.prototype.onUpdateReceiverList_ = function(event) {
  var listeners = this.receiverListeners_[event.activityType];
  listeners && listeners.forEach(function(l) {
    l(event.receivers);
  });
};
cast.Api.prototype.addPendingRequest_ = function(request, resultCallback, timeoutResult, opt_timeoutMillis) {
  var seqString = String(request.seq);
  if (this.pendingRequests_[seqString]) {
    throw "Try to add a request with the same seq";
  }
  this.pendingRequests_[seqString] = resultCallback;
  var timeout = function() {
    this.pendingRequests_[seqString] && (delete this.pendingRequests_[seqString], resultCallback(timeoutResult));
  }.bind(this);
  setTimeout(timeout, opt_timeoutMillis || cast.Api.REQUEST_TIMEOUT_MS_);
};
cast.Api.addToMap_ = function(map, key, value) {
  var values = map[key];
  if (values) {
    return-1 == values.indexOf(value) && values.push(value), !1;
  }
  map[key] = [value];
  return!0;
};
cast.Api.removeFromMap_ = function(map, key, value) {
  var values = map[key];
  if (!values) {
    return!1;
  }
  var index = values.indexOf(value);
  if (-1 == index) {
    return!1;
  }
  if (1 == values.length) {
    return delete map[key], !0;
  }
  values.splice(index, 1);
  return!1;
};
cast.Api.prototype.messageListenerKey_ = function(namespace, activityId) {
  return activityId + "\x00" + namespace;
};
cast.Api.prototype.onCustomMessage_ = function(castMessage) {
  var messageRequest = castMessage.message, listeners = this.messageListeners_[this.messageListenerKey_(messageRequest.namespace, messageRequest.activityId)];
  listeners && listeners.forEach(function(l) {
    l(messageRequest.message);
  });
};
cast.Api.prototype.sendRampRequest_ = function(activityId, type, request, resultCallback) {
  var appRequest = this.sendRequest(type, {activityId:activityId, rampRequest:request}), timeoutResult = cast.MediaResult.createMediaResultError(activityId, "Request timeout");
  this.addPendingRequest_(appRequest, resultCallback, timeoutResult);
};
cast.Client = {};
cast.Client.clientIdBase_ = Math.floor(1E5 * Math.random());
cast.Client.nextSeq_ = 1E3 * cast.Client.clientIdBase_;
cast.Client.clientId_ = "client-" + String(cast.Client.clientIdBase_);
cast.Client.getNextSeq = function() {
  return cast.Client.nextSeq_++;
};
cast.Client.getClientId = function() {
  return cast.Client.clientId_;
};
cast.isAvailable = !0;
"undefined" != typeof chrome && "undefined" != typeof chrome.runtime && "undefined" != typeof chrome.runtime.getManifest || window.postMessage({source:cast.NAME, event:"Hello", api_version:cast.VERSION}, "*");

