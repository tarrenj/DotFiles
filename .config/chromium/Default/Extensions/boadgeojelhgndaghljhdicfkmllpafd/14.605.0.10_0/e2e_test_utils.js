/**
 * @fileoverview Utils for E2E test.
 * @author haibinlu@google.com (Haibin Lu)
 */


/**
 * @param {!angular.Scope} $scope The Angular scope object.
 * @constructor
 */
function E2eTestUtilsCtrl($scope) {
  this.scope_ = $scope;
  this.e2eTestService = null;
  setTimeout(this.init_.bind(this), 1000);
}

/**
 * Inits e2e_test_utils page.
 * @private
 */
E2eTestUtilsCtrl.prototype.init_ = function() {
  var backgroundPage = chrome.extension.getBackgroundPage();
  this.e2eTestService = backgroundPage.cv.E2ETestService.getService();

  this.scope_['getWebRtcStats'] = (function() {
    this.scope_['webrtcStats'] = this.e2eTestService.getWebRtcStats();
  }).bind(this);

  this.scope_['getV2MirroringStats'] = (function() {
    this.e2eTestService.getStatsOfLatestCastMirrorSession().then(
      function(stats) {
        this.scope_['v2MirroringStats'] = JSON.stringify(stats);
        this.safeApply_();
      }, null, this).thenCatch(function(error) {
      this.scope_['v2MirroringStats'] = 'Failed to get stats, error: ' +
          String(error);
      this.safeApply_();
    }, this);
  }).bind(this);

  this.scope_['uploadV2MirroringLogs'] = (function() {
    this.e2eTestService.uploadLogsOfLatestCastMirrorSession().then(
      function(reportId) {
        console.log('Report id: ' + reportId);
        this.scope_['v2LogsId'] = reportId;
        this.safeApply_();
      }, null, this).thenCatch(
        function(error) {
          this.scope_['v2LogsId'] = 'Failed to upload logs, error: ' +
              String(error);
          this.safeApply_();
        }, this);
  }).bind(this);

  this.scope_['getMirrorId'] = (function() {
    this.scope_['mirrorId'] = String(this.e2eTestService.getMirrorId());
  }).bind(this);

  this.scope_['stopAllActivities'] = (function() {
    this.e2eTestService.stopAllActivities();
  }).bind(this);

  this.scope_['stopActivityById'] = (function() {
    if (!this.scope_['activityIdToStop']) {
      return;
    }
    this.e2eTestService.stopActivityById(this.scope_['activityIdToStop']);
  }).bind(this);

  this.scope_['openTabThenMirror'] = (function() {
    if (!this.scope_['url'] || !this.scope_['receiverIp']) {
      return;
    }
    this.e2eTestService.openUrlThenMirror(this.scope_['receiverIp'],
      this.scope_['url']);
  }).bind(this);

  this.scope_['openTabThenMirrorV2'] = (function() {
    if (!this.scope_['urlV2'] || !this.scope_['receiverIpV2']) {
      return;
    }
    this.e2eTestService.openUrlThenMirrorV2(this.scope_['receiverIpV2'],
      this.scope_['urlV2']);
  }).bind(this);

  this.scope_['stopV2Mirroring'] = (function() {
    this.e2eTestService.stopCastMirroring();
  }).bind(this);

  this.scope_['desktopMirror'] = (function() {
    if (!this.scope_['receiverIp']) {
      return;
    }
    this.e2eTestService.desktopMirror(this.scope_['receiverIp']);
  }).bind(this);

  this.safeApply_();
};

/**
 * @private
 */
E2eTestUtilsCtrl.prototype.safeApply_ = function() {
  if (!this.scope_.$$phase) {
    this.scope_.$apply();
  }
};
