// Generated by CoffeeScript 1.6.2
(function() {
  var g, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  if ((_ref = this.vichrome) == null) {
    this.vichrome = {};
  }

  g = this.vichrome;

  g.Mode = (function() {
    function Mode() {}

    Mode.prototype.exit = function() {};

    Mode.prototype.enter = function() {};

    Mode.prototype.getUseNumPrefix = function() {
      return false;
    };

    Mode.prototype.enterInteractiveOpen = function(baseCom, opt) {
      var dscr, executer, sources;

      dscr = baseCom;
      sources = [];
      if (opt.bookmark) {
        dscr += " Bookmark";
        sources.push({
          "class": "CandSourceBookmark"
        });
      }
      if (opt.history) {
        dscr += " History";
        sources.push({
          "class": "CandSourceHistory"
        });
      }
      if (opt.web) {
        dscr += " Web";
        sources.push({
          "class": "CandSourceWebSuggest"
        });
      }
      if (!opt.bookmark && !opt.history && !opt.web) {
        if (opt.search) {
          baseCom += " g";
          dscr += " Google Search";
          sources = [
            {
              "class": "CandSourceGoogleSuggest"
            }
          ];
        } else {
          sources = [
            {
              "class": "CandSourceGoogleSuggest",
              num: 3,
              reqPrefix: true
            }, {
              "class": "CandSourceWebSuggest",
              num: 3
            }, {
              "class": "CandSourceBookmark",
              num: 3
            }, {
              "class": "CandSourceHistory",
              num: 3
            }
          ];
        }
      }
      executer = (new g.CommandExecuter).setDescription(dscr).set(baseCom);
      return g.model.enterCommandMode(executer, sources);
    };

    Mode.prototype.reqOpen = function(args) {
      var arg, bookmark, com, history, i, interactive, opt, search, url, urls, web, word, _i, _j, _len, _len1;

      urls = [];
      for (_i = 0, _len = args.length; _i < _len; _i++) {
        arg = args[_i];
        switch (arg) {
          case "-i":
            interactive = true;
            break;
          case "-b":
            bookmark = true;
            break;
          case "-w":
            web = true;
            break;
          case "-h":
            history = true;
            break;
          case "-g":
          case "g":
            search = true;
            break;
          default:
            urls.push(arg.replace(/%url/g, g.view.getHref()));
        }
      }
      if (interactive || bookmark || history || web) {
        opt = {
          bookmark: bookmark,
          history: history,
          web: web,
          search: search
        };
        com = "Open" + urls.join(' ');
        return this.enterInteractiveOpen(com, opt);
      } else if (search) {
        word = "";
        for (_j = 0, _len1 = urls.length; _j < _len1; _j++) {
          i = urls[_j];
          word += "+" + encodeURIComponent(i);
        }
        word = word.substr(1);
        url = "http://" + g.model.getSetting("searchEngine") + "/search?gcx=c&sourceid=chrome&ie=UTF-8&q=" + word + "&qscrl=1";
        return g.view.open(url, "_self");
      } else {
        return chrome.extension.sendRequest({
          command: "ExtendURL",
          url: urls[0]
        }, function(url) {
          return g.view.open(url, "_self");
        });
      }
    };

    Mode.prototype.reqTabOpenNew = function(args, times) {
      var arg, bookmark, com, history, i, interactive, opt, search, url, web, word, words, _i, _j, _len, _len1;

      words = [];
      if (times > 10) {
        times = 1;
      }
      for (_i = 0, _len = args.length; _i < _len; _i++) {
        arg = args[_i];
        switch (arg) {
          case "-i":
            interactive = true;
            break;
          case "-b":
            bookmark = true;
            break;
          case "-w":
            web = true;
            break;
          case "-h":
            history = true;
            break;
          case "-g":
          case "g":
            search = true;
            break;
          default:
            words.push(arg.replace(/%url/g, g.view.getHref()));
        }
      }
      if (interactive || bookmark || history || web) {
        opt = {
          bookmark: bookmark,
          history: history,
          web: web,
          search: search
        };
        com = "TabOpenNew " + words.join(' ');
        return this.enterInteractiveOpen(com, opt);
      } else if (search) {
        word = "";
        for (_j = 0, _len1 = words.length; _j < _len1; _j++) {
          i = words[_j];
          word += "+" + encodeURIComponent(i);
        }
        word = word.substr(1);
        url = "http://" + g.model.getSetting("searchEngine") + "/search?gcx=c&sourceid=chrome&ie=UTF-8&q=" + word + "&qscrl=1";
        return chrome.extension.sendRequest({
          command: "TabOpenNew",
          args: [url],
          times: times
        }, g.handler.onCommandResponse);
      } else {
        return chrome.extension.sendRequest({
          command: "TabOpenNew",
          args: words,
          times: times,
          extend: true
        }, g.handler.onCommandResponse);
      }
    };

    Mode.prototype.blur = function() {};

    Mode.prototype.reqScrollDown = function(args, times) {
      return g.view.scrollBy(0, g.model.getSetting("scrollPixelCount") * times);
    };

    Mode.prototype.reqScrollUp = function(args, times) {
      return g.view.scrollBy(0, -g.model.getSetting("scrollPixelCount") * times);
    };

    Mode.prototype.reqScrollLeft = function(args, times) {
      return g.view.scrollBy(-g.model.getSetting("scrollPixelCount") * times, 0);
    };

    Mode.prototype.reqScrollRight = function(args, times) {
      return g.view.scrollBy(g.model.getSetting("scrollPixelCount") * times, 0);
    };

    Mode.prototype.reqPageHalfDown = function(args, times) {
      return g.view.scrollHalfPage({
        hor: 0,
        ver: times
      });
    };

    Mode.prototype.reqPageHalfUp = function(args, times) {
      return g.view.scrollHalfPage({
        hor: 0,
        ver: -times
      });
    };

    Mode.prototype.reqPageDown = function(args, times) {
      return g.view.scrollHalfPage({
        hor: 0,
        ver: 2 * times
      });
    };

    Mode.prototype.reqPageUp = function(args, times) {
      return g.view.scrollHalfPage({
        hor: 0,
        ver: -2 * times
      });
    };

    Mode.prototype.reqGoTop = function() {
      g.model.setPageMark();
      return g.view.goTop();
    };

    Mode.prototype.reqGoBottom = function() {
      g.model.setPageMark();
      return g.view.goBottom();
    };

    Mode.prototype.reqBackHist = function() {
      return g.view.backHist();
    };

    Mode.prototype.reqForwardHist = function() {
      return g.view.forwardHist();
    };

    Mode.prototype.reqTabReload = function() {
      return g.view.reload();
    };

    Mode.prototype.reqGoSearchModeForward = function() {
      return g.model.enterSearchMode(false);
    };

    Mode.prototype.reqGoSearchModeBackward = function() {
      return g.model.enterSearchMode(true);
    };

    Mode.prototype.reqGoLinkTextSearchMode = function() {
      return g.model.enterSearchMode(false, new g.LinkTextSearcher);
    };

    Mode.prototype.reqGoEmergencyMode = function() {
      return g.model.enterEmergencyMode();
    };

    Mode.prototype.reqBackToPageMark = function() {
      return g.model.goPageMark();
    };

    Mode.prototype.reqEscape = function() {
      g.view.blurActiveElement();
      g.model.escape();
      return typeof this.escape === "function" ? this.escape() : void 0;
    };

    Mode.prototype.reqGoFMode = function(args) {
      var arg, continuous, newTab, opt, _i, _len;

      for (_i = 0, _len = args.length; _i < _len; _i++) {
        arg = args[_i];
        switch (arg) {
          case "--newtab":
            newTab = true;
            break;
          case "--continuous":
            continuous = true;
        }
      }
      opt = {
        newTab: newTab,
        continuous: continuous
      };
      return g.model.enterFMode(opt);
    };

    Mode.prototype.reqGoExtFMode = function(args) {
      var arg, opt, _i, _len;

      opt = {};
      for (_i = 0, _len = args.length; _i < _len; _i++) {
        arg = args[_i];
        switch (arg) {
          case "--focus":
            opt.mode = 'focus';
            break;
          case "--yank":
            opt.mode = 'yank';
            break;
          case "--open":
            opt.mode = 'open';
            break;
          case "--opentab":
            opt.mode = 'opentab';
        }
      }
      if (opt.mode != null) {
        return g.model.enterFMode(opt);
      } else {
        return g.model.enterExtFMode();
      }
    };

    Mode.prototype.reqGoCommandMode = function(args) {
      var sources;

      sources = [
        {
          "class": "CandSourceCommand"
        }, {
          "class": "CandSourceAlias"
        }
      ];
      return g.model.enterCommandMode(new g.CommandExecuter, sources);
    };

    Mode.prototype.reqFocusOnFirstInput = function(args, times) {
      g.model.setPageMark();
      return g.view.focusInput(times - 1);
    };

    Mode.prototype.reqTabList = function() {
      var executer, sources;

      sources = [
        {
          "class": "CandSourceTabs"
        }
      ];
      executer = (new g.CommandExecuter).set("MoveToNextTab").setDescription("TabList");
      return g.model.enterCommandMode(executer, sources);
    };

    Mode.prototype.reqBarrelRoll = function() {
      $(document.body).addClass('vichrome-barrelroll');
      return setTimeout(function() {
        return $(document.body).removeClass('vichrome-barrelroll');
      }, 2000);
    };

    Mode.prototype.reqHideJimmy = function() {
      return $("div#centralNotice").hide();
    };

    Mode.prototype.reqToggleImageSize = function() {
      var evt;

      if (document.images.length === 1) {
        evt = document.createEvent('MouseEvents');
        evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        return document.images[0].dispatchEvent(evt);
      }
    };

    Mode.prototype.req_ChangeLogLevel = function(args) {
      if (!args || args.length < 1) {
        return;
      }
      if (g.logLevels[args[0]] != null) {
        return g.LOG_LEVEL = g.logLevels[args[0]];
      } else {
        return g.view.setStatusLineText("log level '" + args[0] + "' doesn't exist", 2000);
      }
    };

    Mode.prototype.getKeyMapping = function() {
      return g.model.getNMap();
    };

    return Mode;

  })();

  g.NormalMode = (function(_super) {
    __extends(NormalMode, _super);

    function NormalMode() {
      _ref1 = NormalMode.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    NormalMode.prototype.getName = function() {
      return "NormalMode";
    };

    NormalMode.prototype.getUseNumPrefix = function() {
      return true;
    };

    NormalMode.prototype.prePostKeyEvent = function(key, ctrl, alt, meta) {
      return true;
    };

    NormalMode.prototype.escape = function() {
      return g.model.cancelSearchHighlight();
    };

    NormalMode.prototype.enter = function() {};

    NormalMode.prototype.reqNextSearch = function() {
      return g.model.goNextSearchResult(false);
    };

    NormalMode.prototype.reqPrevSearch = function() {
      return g.model.goNextSearchResult(true);
    };

    return NormalMode;

  })(g.Mode);

  g.InsertMode = (function(_super) {
    __extends(InsertMode, _super);

    function InsertMode() {
      _ref2 = InsertMode.__super__.constructor.apply(this, arguments);
      return _ref2;
    }

    InsertMode.prototype.getName = function() {
      return "InsertMode";
    };

    InsertMode.prototype.blur = function() {
      return g.model.enterNormalMode();
    };

    InsertMode.prototype.getKeyMapping = function() {
      return g.model.getIMap();
    };

    InsertMode.prototype.prePostKeyEvent = function(key, ctrl, alt, meta) {
      if (ctrl || alt || meta) {
        return true;
      }
      if (g.KeyManager.isNumber(key) || g.KeyManager.isAlphabet(key)) {
        return false;
      }
      return true;
    };

    return InsertMode;

  })(g.Mode);

  g.SearchMode = (function(_super) {
    __extends(SearchMode, _super);

    function SearchMode() {
      _ref3 = SearchMode.__super__.constructor.apply(this, arguments);
      return _ref3;
    }

    SearchMode.prototype.getName = function() {
      return "SearchMode";
    };

    SearchMode.prototype.init = function(searcher_, backward_, opt_) {
      this.opt = opt_ != null ? opt_ : {
        wrap: g.model.getSetting("wrapSearch"),
        ignoreCase: g.model.getSetting("ignoreCase"),
        incSearch: g.model.getSetting("incSearch"),
        useMigemo: g.model.getSetting("useMigemo"),
        minIncSearch: g.model.getSetting("minIncSearch"),
        minMigemoLength: g.model.getSetting("minMigemoLength"),
        backward: backward_
      };
      this.searcher = searcher_.init(this.opt);
      this.backward = backward_;
      return this;
    };

    SearchMode.prototype.cancelSearch = function() {
      g.model.goPageMark();
      this.searcher.finalize();
      return g.model.enterNormalMode();
    };

    SearchMode.prototype.prePostKeyEvent = function(key, ctrl, alt, meta) {
      return true;
    };

    SearchMode.prototype.escape = function() {
      return this.cancelSearch();
    };

    SearchMode.prototype.enter = function() {
      var param, sources;

      sources = [
        {
          "class": "CandSourceSearchHist"
        }
      ];
      g.view.setStatusLineText("");
      param = {
        sources: sources,
        mode: 'Search',
        modeChar: this.backward === true ? '?' : '/',
        incSearch: this.opt.incSearch
      };
      return g.model.openCommandBox(param);
    };

    SearchMode.prototype.exit = function() {
      g.view.hideCommandFrame();
      return window.focus();
    };

    SearchMode.prototype.notifyInputUpdated = function(msg) {
      var _this = this;

      if (this.waiting) {
        clearTimeout(this.timerId);
      }
      this.timerId = setTimeout(function() {
        g.logger.e("set");
        _this.searcher.updateInput(msg.word);
        return _this.waiting = false;
      }, 200);
      return this.waiting = true;
    };

    SearchMode.prototype.notifySearchFixed = function(msg) {
      if (this.waiting) {
        clearTimeout(this.timerId);
        this.waiting = false;
      }
      this.searcher.fix(msg.word);
      g.model.setSearcher(this.searcher);
      return g.model.enterNormalMode();
    };

    SearchMode.prototype.getKeyMapping = function() {
      return g.model.getCMap();
    };

    return SearchMode;

  })(g.Mode);

  g.CommandMode = (function(_super) {
    __extends(CommandMode, _super);

    function CommandMode() {
      _ref4 = CommandMode.__super__.constructor.apply(this, arguments);
      return _ref4;
    }

    CommandMode.prototype.getName = function() {
      return "CommandMode";
    };

    CommandMode.prototype.reqExecuteCommand = function(req) {
      var e;

      try {
        this.executer.set(req.commandLine).parse().execute();
        g.view.hideStatusLine();
      } catch (_error) {
        e = _error;
        g.view.setStatusLineText("Command Not Found : " + this.executer.get(), 2000);
      }
      return g.model.enterNormalMode();
    };

    CommandMode.prototype.prePostKeyEvent = function(key, ctrl, alt, meta) {
      return true;
    };

    CommandMode.prototype.enter = function() {
      var param, _ref5;

      if ((_ref5 = this.executer) == null) {
        this.executer = new g.CommandExecuter;
      }
      if (this.executer.getDescription() != null) {
        g.view.setStatusLineText(this.executer.getDescription());
      } else {
        g.view.setStatusLineText(this.executer.get());
      }
      param = {
        sources: this.sources,
        mode: 'Command',
        modeChar: ':'
      };
      return g.model.openCommandBox(param);
    };

    CommandMode.prototype.exit = function() {
      g.view.hideCommandFrame();
      return window.focus();
    };

    CommandMode.prototype.getKeyMapping = function() {
      return g.model.getCMap();
    };

    CommandMode.prototype.setExecuter = function(executer) {
      this.executer = executer;
      return this;
    };

    CommandMode.prototype.setSources = function(sources) {
      this.sources = sources;
      return this;
    };

    return CommandMode;

  })(g.Mode);

  g.EmergencyMode = (function(_super) {
    __extends(EmergencyMode, _super);

    function EmergencyMode() {
      _ref5 = EmergencyMode.__super__.constructor.apply(this, arguments);
      return _ref5;
    }

    EmergencyMode.prototype.getName = function() {
      return "EmergencyMode";
    };

    EmergencyMode.prototype.prePostKeyEvent = function(key, ctrl, alt, meta) {
      return true;
    };

    EmergencyMode.prototype.enter = function() {
      var key, keyMap, mapped, text;

      keyMap = g.model.getEMap();
      text = "Emergency Mode: press ";
      for (key in keyMap) {
        mapped = keyMap[key];
        if (mapped === "Escape") {
          text += key + ", ";
        }
      }
      text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/, $/, " ");
      text += "to escape";
      return g.view.setStatusLineText(text);
    };

    EmergencyMode.prototype.exit = function() {
      return g.view.hideStatusLine();
    };

    EmergencyMode.prototype.blur = function(target) {
      if (g.util.isEmbededFlash(target)) {
        return g.model.enterNormalMode();
      }
    };

    EmergencyMode.prototype.getKeyMapping = function() {
      return g.model.getEMap();
    };

    return EmergencyMode;

  })(g.Mode);

  g.FMode = (function(_super) {
    __extends(FMode, _super);

    function FMode() {
      _ref6 = FMode.__super__.constructor.apply(this, arguments);
      return _ref6;
    }

    FMode.prototype.hitMode = {
      focus: function(target) {
        $(target).focus();
        if (g.util.isEditable(target)) {
          return g.model.enterInsertMode();
        } else if (!this.opt.continuous) {
          return g.model.enterNormalMode();
        }
      },
      open: function(target, primary) {
        if (primary == null) {
          primary = false;
        }
        this.hitMode.focus.call(this, target);
        return g.util.dispatchMouseClickEvent(target, primary, false, false);
      },
      opentab: function(target) {
        return this.hitMode.open.call(this, target, true);
      },
      yank: function(target) {
        var qualifyURL, url;

        String.prototype.escapeHTML = function() {
          return this.split('&').join('&amp;').split('"').join('&quot;').split('<').join('&lt;');
        };
        qualifyURL = function(url) {
          var element;

          element = document.createElement('span');
          element.innerHTML = '<a href="' + url.escapeHTML() + '">&nbsp;</a>';
          return element.firstChild.href;
        };
        url = qualifyURL($(target).attr('href'));
        if (url != null) {
          (new g.CommandExecuter).set("Copy " + url).parse().execute();
        }
        return g.model.enterNormalMode();
      },
      yanktext: function(target) {
        var text;

        text = $(target).html();
        if (text != null) {
          (new g.CommandExecuter).set("Copy " + text).parse().execute();
        }
        return g.model.enterNormalMode();
      }
    };

    FMode.prototype.getName = function() {
      return "FMode";
    };

    FMode.prototype.setOption = function(opt) {
      this.opt = opt;
      return this;
    };

    FMode.prototype.statusLineHeader = function() {
      return "f Mode (" + (this.opt.mode || '') + "): ";
    };

    FMode.prototype.hit = function(target) {
      var mode, _ref7;

      mode = this.opt.mode || (this.opt.newTab ? 'opentab' : 'open');
      return (_ref7 = this.hitMode[mode]) != null ? _ref7.call(this, target) : void 0;
    };

    FMode.prototype.isValidKey = function(key) {
      return (this.keys.indexOf(key) >= 0 && key.length === 1) || (key === 'BS') || (key === 'DEL');
    };

    FMode.prototype.searchTarget = function() {
      var elem, i, _i, _len, _ref7;

      _ref7 = this.hints;
      for (i = _i = 0, _len = _ref7.length; _i < _len; i = ++_i) {
        elem = _ref7[i];
        if (this.currentInput === elem.key) {
          return elem.target;
        }
      }
      return null;
    };

    FMode.prototype.treatNewInput = function(key) {
      var target;

      if (key === "BS" || key === "DEL") {
        if (this.currentInput.length === 0) {
          g.model.enterNormalMode();
          return;
        }
        this.currentInput = this.currentInput.slice(0, this.currentInput.length - 1);
      } else {
        this.currentInput += key;
      }
      g.view.setStatusLineText(this.statusLineHeader() + this.currentInput);
      if (this.currentInput.length < this.keyLength) {
        this.updateHints();
      } else {
        target = this.searchTarget();
        if (target != null) {
          this.hit(target);
        } else {
          if (!this.opt.continuous) {
            g.model.enterNormalMode();
          }
        }
        if (this.opt.continuous) {
          this.currentInput = "";
          return g.view.setStatusLineText(this.statusLineHeader());
        } else {
          return g.view.hideStatusLine();
        }
      }
    };

    FMode.prototype.prePostKeyEvent = function(key, ctrl, alt, meta) {
      if (key === "ESC") {
        return true;
      }
      if (ctrl || alt || meta) {
        return true;
      }
      if (g.model.getSetting("fModeIgnoreCase")) {
        key = key.toUpperCase();
      }
      if (this.isValidKey(key)) {
        event.stopPropagation();
        event.preventDefault();
        this.treatNewInput(key);
        return false;
      } else {
        return true;
      }
    };

    FMode.prototype.getKeyLength = function(candiNum) {
      if (candiNum === 1) {
        return 1;
      }
      if (this.keys.length === 1) {
        return 1;
      }
      return Math.ceil(Math.log(candiNum) / Math.log(this.keys.length));
    };

    FMode.prototype.updateHints = function() {
      var c, hint, _i, _j, _k, _len, _len1, _len2, _ref7, _ref8, _ref9, _results;

      _ref7 = this.hints;
      _results = [];
      for (_i = 0, _len = _ref7.length; _i < _len; _i++) {
        hint = _ref7[_i];
        if (hint.key.indexOf(this.currentInput) === 0) {
          hint.elem.find("span#vichromehintchar").remove();
          _ref8 = this.currentInput;
          for (_j = 0, _len1 = _ref8.length; _j < _len1; _j++) {
            c = _ref8[_j];
            hint.elem = hint.elem.append($('<span id="vichromehintchar" />').css("color", g.model.getSetting("hintColorSelected")).html(c));
          }
          _ref9 = hint.key.slice(this.currentInput.length);
          for (_k = 0, _len2 = _ref9.length; _k < _len2; _k++) {
            c = _ref9[_k];
            hint.elem = hint.elem.append($('<span id="vichromehintchar" />').css("color", g.model.getSetting("hintColor")).html(c));
          }
          if (!hint.elem.is(':visible')) {
            this.showFunc.call(hint.elem);
          }
          _results.push($(hint.target).addClass('vichrome-fModeTarget'));
        } else {
          this.hideFunc.call(hint.elem);
          _results.push($(hint.target).removeClass('vichrome-fModeTarget'));
        }
      }
      return _results;
    };

    FMode.prototype.createHints = function(links) {
      var c, elem, hint, hintHeight, i, j, k, key, left, offset, tmpElem, top, _i, _j, _k, _len, _len1, _len2, _ref7, _ref8, _results;

      for (i = _i = 0, _len = links.length; _i < _len; i = ++_i) {
        elem = links[i];
        key = '';
        j = this.keyLength;
        k = i;
        while (j--) {
          key = key + this.keys.charAt(k % this.keys.length);
          k /= this.keys.length;
        }
        this.hints[i] = {};
        this.hints[i].key = key;
        this.hints[i].target = elem;
        $(elem).addClass('vichrome-fModeTarget');
      }
      hintHeight = "" + (g.model.getSetting("hintFontSize") + 4) + "px";
      tmpElem = $('<span id="vichromehint" />').css("height", hintHeight).css("line-height", hintHeight).css("font-size", "" + g.model.getSetting("hintFontSize") + "px").css("background-color", g.model.getSetting("hintBackgroundColor"));
      _ref7 = this.hints;
      _results = [];
      for (_j = 0, _len1 = _ref7.length; _j < _len1; _j++) {
        hint = _ref7[_j];
        offset = hint.target._offset_;
        top = offset.top - 7;
        left = offset.left - 7;
        if (top < 0) {
          top = 0;
        }
        if (left < 0) {
          left = 0;
        }
        elem = tmpElem.clone().css("top", top).css("left", left);
        _ref8 = hint.key;
        for (_k = 0, _len2 = _ref8.length; _k < _len2; _k++) {
          c = _ref8[_k];
          elem = elem.append($('<span id="vichromehintchar" />').html(c)).css("color", g.model.getSetting("hintColor")).hide();
        }
        hint.elem = elem;
        $('html').append(hint.elem);
        _results.push(this.showFunc.call(hint.elem));
      }
      return _results;
    };

    FMode.prototype.enter = function() {
      var links;

      this.currentInput = "";
      this.hints = [];
      if (g.model.getSetting("useFModeAnimation")) {
        this.showFunc = function() {
          return this.fadeIn(200);
        };
        this.hideFunc = function() {
          return this.fadeOut(200);
        };
      } else {
        this.showFunc = $.fn.show;
        this.hideFunc = $.fn.hide;
      }
      links = $('a:_visible,*:input:_visible,.button:_visible');
      $('img[usemap^="#"]:_visible').each(function() {
        var areas, mapName, offset;

        offset = this._offset_;
        mapName = $(this).attr('usemap').slice(1);
        areas = $('map[name="' + mapName + '"] area');
        return areas.each(function() {
          var coords;

          if ($(this).attr('shape') !== 'default') {
            coords = $(this).attr('coords').split(',');
            this._offset_ = {
              top: offset.top + ~~coords[1],
              left: offset.left + ~~coords[0]
            };
          } else {
            this._offset_ = offset;
          }
          return links.push(this);
        });
      });
      if (links.length === 0) {
        g.view.setStatusLineText("No visible links found", 2000);
        setTimeout((function() {
          return g.model.enterNormalMode();
        }), 0);
        return;
      }
      this.keys = g.model.getSetting("fModeAvailableKeys");
      if (g.model.getSetting("fModeIgnoreCase")) {
        this.keys = this.keys.toUpperCase();
      }
      this.keyLength = this.getKeyLength(links.length);
      this.createHints(links);
      return g.view.setStatusLineText(this.statusLineHeader());
    };

    FMode.prototype.exit = function() {
      $('span#vichromehint').remove();
      return $('.vichrome-fModeTarget').removeClass('vichrome-fModeTarget');
    };

    return FMode;

  })(g.Mode);

  g.ExtFMode = (function(_super) {
    __extends(ExtFMode, _super);

    function ExtFMode() {
      _ref7 = ExtFMode.__super__.constructor.apply(this, arguments);
      return _ref7;
    }

    ExtFMode.prototype.modeTable = {
      'f': 'focus',
      'o': 'open',
      'O': 'opentab',
      'y': 'yank',
      'Y': 'yanktext'
    };

    ExtFMode.prototype.getName = function() {
      return "ExtFMode";
    };

    ExtFMode.prototype.setOption = function(opt) {
      this.opt = opt;
      return this;
    };

    ExtFMode.prototype.prePostKeyEvent = function(key, ctrl, alt, meta) {
      if (ctrl || alt || meta) {
        return true;
      }
      if (this.modeTable[key] != null) {
        event.stopPropagation();
        event.preventDefault();
        this.opt.mode = this.modeTable[key];
        g.model.enterFMode(this.opt);
        return false;
      } else {
        return true;
      }
    };

    ExtFMode.prototype.enter = function() {
      return g.view.setStatusLineText('f Mode : select ext mode');
    };

    ExtFMode.prototype.exit = function() {
      $('span#vichromehint').remove();
      return $('.vichrome-fModeTarget').removeClass('vichrome-fModeTarget');
    };

    return ExtFMode;

  })(g.Mode);

  $.extend($.expr[':'], {
    _visible: function(elem) {
      var offset, winH, winLeft, winTop, winW;

      winLeft = window.pageXOffset;
      winTop = window.pageYOffset;
      winH = window.innerHeight;
      winW = window.innerWidth;
      offset = $(elem).offset();
      if (winTop > offset.top || winTop + winH < offset.top) {
        return false;
      }
      if (winLeft > offset.left || offset.left > winLeft + winW) {
        return false;
      }
      if ($.expr[':'].hidden(elem)) {
        return false;
      }
      if ($.css(elem, 'visibility') === 'hidden') {
        return false;
      }
      elem._offset_ = offset;
      return true;
    }
  });

}).call(this);
