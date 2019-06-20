define(['dart_sdk', 'packages/tap_hero_web/route', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/tap_hero_web/button', 'packages/tap_hero_web/utils', 'packages/flutter_web/src/gestures/arena', 'packages/tap_hero_web/scroll', 'packages/tap_hero_web/powerups', 'packages/tap_hero_web/bosses'], function(dart_sdk, route, animation, material, animation$, ui, button, utils, arena, scroll, powerups, bosses) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const route$ = route.route;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__animation__animation_controller = animation.src__animation__animation_controller;
  const src__widgets__navigator = animation.src__widgets__navigator;
  const src__widgets__binding = animation.src__widgets__binding;
  const src__widgets__layout_builder = animation.src__widgets__layout_builder;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__safe_area = animation.src__widgets__safe_area;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__implicit_animations = animation.src__widgets__implicit_animations;
  const src__widgets__gesture_detector = animation.src__widgets__gesture_detector;
  const src__widgets__icon = animation.src__widgets__icon;
  const src__widgets__text = animation.src__widgets__text;
  const src__rendering__box = animation.src__rendering__box;
  const src__widgets__ticker_provider = animation.src__widgets__ticker_provider;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__scroll_configuration = animation.src__widgets__scroll_configuration;
  const src__widgets__scroll_view = animation.src__widgets__scroll_view;
  const src__widgets__will_pop_scope = animation.src__widgets__will_pop_scope;
  const src__material__colors = material.src__material__colors;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__icons = material.src__material__icons;
  const src__material__card = material.src__material__card;
  const src__material__material = material.src__material__material;
  const src__animation__tween = animation$.src__animation__tween;
  const src__animation__animations = animation$.src__animation__animations;
  const src__animation__curves = animation$.src__animation__curves;
  const src__animation__animation = animation$.src__animation__animation;
  const src__painting__box_fit = animation$.src__painting__box_fit;
  const src__painting__alignment = animation$.src__painting__alignment;
  const src__painting__text_style = animation$.src__painting__text_style;
  const ui$ = ui.ui;
  const button$ = button.button;
  const utils$ = utils.utils;
  const src__gestures__tap = arena.src__gestures__tap;
  const scroll$ = scroll.scroll;
  const powerups$ = powerups.powerups;
  const bosses$ = bosses.bosses;
  const welcome = Object.create(dart.library);
  const game = Object.create(dart.library);
  const $contains = dartx.contains;
  const $forEach = dartx.forEach;
  const $location = dartx.location;
  const $onLoadedData = dartx.onLoadedData;
  const $play = dartx.play;
  const $onLoad = dartx.onLoad;
  const $head = dartx.head;
  const $append = dartx.append;
  const $remove = dartx.remove;
  const $toString = dartx.toString;
  const $padLeft = dartx.padLeft;
  const $modulo = dartx['%'];
  const $length = dartx.length;
  const $_get = dartx._get;
  const $toDouble = dartx.toDouble;
  const $toInt = dartx.toInt;
  const $_set = dartx._set;
  const $share = dartx.share;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let BuildContextToWelcome = () => (BuildContextToWelcome = dart.constFn(dart.fnType(welcome.Welcome, [src__widgets__framework.BuildContext])))();
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(src__animation__tween.Tween$(core.double)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let AnimationStatusToNull = () => (AnimationStatusToNull = dart.constFn(dart.fnType(core.Null, [src__animation__animation.AnimationStatus])))();
  let EventToNull = () => (EventToNull = dart.constFn(dart.fnType(core.Null, [html.Event])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let BuildContextAndBoxConstraintsToStack = () => (BuildContextAndBoxConstraintsToStack = dart.constFn(dart.fnType(src__widgets__basic.Stack, [src__widgets__framework.BuildContext, src__rendering__box.BoxConstraints])))();
  let BuildContextToGame = () => (BuildContextToGame = dart.constFn(dart.fnType(game.Game, [src__widgets__framework.BuildContext])))();
  let LinkedMapOfString$String = () => (LinkedMapOfString$String = dart.constFn(_js_helper.LinkedMap$(core.String, core.String)))();
  let TapDownDetailsTovoid = () => (TapDownDetailsTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__tap.TapDownDetails])))();
  let TapUpDetailsTovoid = () => (TapUpDetailsTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__tap.TapUpDetails])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let BuildContextAndintToPadding = () => (BuildContextAndintToPadding = dart.constFn(dart.fnType(src__widgets__basic.Padding, [src__widgets__framework.BuildContext, core.int])))();
  let BuildContextAndBoxConstraintsToMaterial = () => (BuildContextAndBoxConstraintsToMaterial = dart.constFn(dart.fnType(src__material__material.Material, [src__widgets__framework.BuildContext, src__rendering__box.BoxConstraints])))();
  const _iOS = dart.privateName(welcome, "_iOS");
  welcome.Platform = class Platform extends core.Object {
    isIOS() {
      let matches = false;
      this[_iOS][$forEach](dart.fn(name => {
        if (html.window.navigator.platform[$contains](name) || html.window.navigator.userAgent[$contains](name)) {
          matches = true;
        }
      }, StringToNull()));
      return matches;
    }
    isAndroid() {
      return html.window.navigator.platform === "Android" || html.window.navigator.userAgent[$contains]("Android");
    }
    isMobile() {
      return dart.test(this.isAndroid()) || dart.test(this.isIOS());
    }
    name() {
      let name = "";
      if (dart.test(this.isAndroid())) {
        name = "Android";
      } else if (dart.test(this.isIOS())) {
        name = "iOS";
      }
      return name;
    }
    openStore() {
      if (dart.test(this.isAndroid())) {
        html.window[$location].href = "https://play.google.com/store/apps/details?id=com.marianozorilla.tap_hero";
      } else {
        html.window[$location].href = "https://apps.apple.com/app/taphero/id463855590";
      }
    }
  };
  (welcome.Platform.new = function() {
    this[_iOS] = JSArrayOfString().of(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"]);
    ;
  }).prototype = welcome.Platform.prototype;
  dart.addTypeTests(welcome.Platform);
  dart.setMethodSignature(welcome.Platform, () => ({
    __proto__: dart.getMethods(welcome.Platform.__proto__),
    isIOS: dart.fnType(core.bool, []),
    isAndroid: dart.fnType(core.bool, []),
    isMobile: dart.fnType(core.bool, []),
    name: dart.fnType(core.String, []),
    openStore: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(welcome.Platform, "package:tap_hero_web/welcome.dart");
  dart.setFieldSignature(welcome.Platform, () => ({
    __proto__: dart.getFields(welcome.Platform.__proto__),
    [_iOS]: dart.fieldType(core.List$(core.String))
  }));
  let const$;
  let const$0;
  let const$1;
  let const$2;
  welcome.Welcome = class Welcome extends src__widgets__framework.StatefulWidget {
    static routeAnim() {
      return new route$.FadeRoute.new({name: "/", title: "Tap Hero", builder: dart.fn(_ => new welcome.Welcome.new({$creationLocationd_0dea112b090073317d4: const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$ || (const$ = dart.constList([], src__widgets__widget_inspector._Location))})))}), BuildContextToWelcome())});
    }
    static route() {
      return new route$.SimpleRoute.new({name: "/", title: "Tap Hero", builder: dart.fn(_ => new welcome.Welcome.new({$creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 60, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$1 || (const$1 = dart.constList([], src__widgets__widget_inspector._Location))})))}), BuildContextToWelcome())});
    }
    createState() {
      return new welcome._WelcomeState.new();
    }
  };
  (welcome.Welcome.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    welcome.Welcome.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = welcome.Welcome.prototype;
  dart.addTypeTests(welcome.Welcome);
  dart.setMethodSignature(welcome.Welcome, () => ({
    __proto__: dart.getMethods(welcome.Welcome.__proto__),
    createState: dart.fnType(welcome._WelcomeState, [])
  }));
  dart.setLibraryUri(welcome.Welcome, "package:tap_hero_web/welcome.dart");
  const _controller = dart.privateName(welcome, "_controller");
  const _animationHero = dart.privateName(welcome, "_animationHero");
  const _animationBoss = dart.privateName(welcome, "_animationBoss");
  const _tapController = dart.privateName(welcome, "_tapController");
  const _tapAnimation = dart.privateName(welcome, "_tapAnimation");
  const _fadeController = dart.privateName(welcome, "_fadeController");
  const _fadeAnimation = dart.privateName(welcome, "_fadeAnimation");
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  let const$49;
  let const$50;
  let const$51;
  let const$52;
  let const$53;
  let const$54;
  let const$55;
  let const$56;
  let const$57;
  let const$58;
  let const$59;
  let const$60;
  let const$61;
  let const$62;
  let const$63;
  let const$64;
  let const$65;
  let const$66;
  let const$67;
  let const$68;
  let const$69;
  let const$70;
  let const$71;
  let const$72;
  let const$73;
  let const$74;
  let const$75;
  let const$76;
  let const$77;
  let const$78;
  let const$79;
  let const$80;
  let const$81;
  let const$82;
  let const$83;
  let const$84;
  let const$85;
  let const$86;
  let const$87;
  let const$88;
  let const$89;
  let const$90;
  let const$91;
  let const$92;
  let const$93;
  let const$94;
  let const$95;
  let const$96;
  let const$97;
  let const$98;
  let const$99;
  let const$100;
  let const$101;
  let const$102;
  let const$103;
  let const$104;
  let const$105;
  let const$106;
  let const$107;
  let const$108;
  let const$109;
  let const$110;
  let const$111;
  let const$112;
  let const$113;
  let const$114;
  let const$115;
  let const$116;
  let const$117;
  let const$118;
  let const$119;
  let const$120;
  let const$121;
  let const$122;
  let const$123;
  let const$124;
  let const$125;
  let const$126;
  let const$127;
  let const$128;
  let const$129;
  let const$130;
  let const$131;
  const State_WidgetsBindingObserver$ = class State_WidgetsBindingObserver extends src__widgets__framework.State$(welcome.Welcome) {};
  (State_WidgetsBindingObserver$.new = function() {
    State_WidgetsBindingObserver$.__proto__.new.call(this);
  }).prototype = State_WidgetsBindingObserver$.prototype;
  dart.applyMixin(State_WidgetsBindingObserver$, src__widgets__binding.WidgetsBindingObserver);
  const State_TickerProviderStateMixin$ = class State_TickerProviderStateMixin extends State_WidgetsBindingObserver$ {};
  (State_TickerProviderStateMixin$.new = function() {
    src__widgets__ticker_provider.TickerProviderStateMixin$(welcome.Welcome)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$, src__widgets__ticker_provider.TickerProviderStateMixin$(welcome.Welcome));
  welcome._WelcomeState = class _WelcomeState extends State_TickerProviderStateMixin$ {
    static skyAsset() {
      return "background/sky.png";
    }
    static logoAsset() {
      return "elements/taptaphero.png";
    }
    static heroAsset() {
      return "elements/hero.png";
    }
    static bossAsset() {
      return "elements/boss.png";
    }
    initGame() {
      if (dart.test(this.tapToPlay)) this[_fadeController].forward();
    }
    initAnimation() {
      let t0, t0$;
      this[_controller] = new src__animation__animation_controller.AnimationController.new({vsync: this, duration: const$3 || (const$3 = dart.const(new core.Duration.new({seconds: 3})))});
      this[_animationHero] = (t0 = new (TweenOfdouble()).new({begin: 0.0, end: 0.6}).animate(new src__animation__animations.CurvedAnimation.new({parent: this[_controller], curve: src__animation__curves.Curves.decelerate})), t0.addStatusListener(dart.fn(state => {
        if (dart.equals(state, src__animation__animation.AnimationStatus.completed)) {
          this.setState(dart.fn(() => {
            this.tapToPlay = true;
          }, VoidToNull()));
          this[_tapController].forward();
        }
      }, AnimationStatusToNull())), t0.addListener(dart.fn(() => {
        this.setState(dart.fn(() => {
          this.heroYAxis = core.double._check(this[_animationHero].value);
        }, VoidToNull()));
      }, VoidToNull())), t0);
      this[_animationBoss] = (t0$ = new (TweenOfdouble()).new({begin: 1.0, end: 0.6}).animate(new src__animation__animations.CurvedAnimation.new({parent: this[_controller], curve: src__animation__curves.Curves.decelerate})), t0$.addListener(dart.fn(() => {
        this.setState(dart.fn(() => {
          this.bossYAxis = core.double._check(this[_animationBoss].value);
        }, VoidToNull()));
      }, VoidToNull())), t0$);
      this[_controller].forward();
    }
    initTapAnimation() {
      let t0, t0$;
      this[_tapController] = new src__animation__animation_controller.AnimationController.new({vsync: this, duration: const$4 || (const$4 = dart.const(new core.Duration.new({seconds: 1})))});
      this[_tapAnimation] = (t0 = new (TweenOfdouble()).new({begin: 0.0, end: 1.0}).animate(new src__animation__animations.CurvedAnimation.new({parent: this[_tapController], curve: src__animation__curves.Curves.decelerate})), t0.addStatusListener(dart.fn(status => {
        if (dart.equals(status, src__animation__animation.AnimationStatus.completed)) {
          this[_tapController].reverse();
        } else if (dart.equals(status, src__animation__animation.AnimationStatus.dismissed)) {
          this[_tapController].forward();
        }
      }, AnimationStatusToNull())), t0.addListener(dart.fn(() => {
        this.setState(dart.fn(() => {
          this.tapAlpha = core.double._check(this[_tapAnimation].value);
        }, VoidToNull()));
      }, VoidToNull())), t0);
      this[_fadeController] = new src__animation__animation_controller.AnimationController.new({vsync: this, duration: const$5 || (const$5 = dart.const(new core.Duration.new({milliseconds: 500})))});
      this[_fadeAnimation] = (t0$ = new src__animation__tween.ColorTween.new({begin: src__material__colors.Colors.transparent, end: src__material__colors.Colors.black}).animate(new src__animation__animations.CurvedAnimation.new({parent: this[_fadeController], curve: src__animation__curves.Curves.decelerate})), t0$.addStatusListener(dart.fn(status => {
        if (dart.equals(status, src__animation__animation.AnimationStatus.completed)) {
          src__widgets__navigator.Navigator.of(this.context).pushReplacement(dart.dynamic, core.Object, game.Game.routeAnim());
        }
      }, AnimationStatusToNull())), t0$.addListener(dart.fn(() => {
        this.fade = ui$.Color._check(this[_fadeAnimation].value);
      }, VoidToNull())), t0$);
    }
    disposeAnimations() {
      this[_controller].dispose();
      this[_tapController].dispose();
      this[_fadeController].dispose();
    }
    initState() {
      super.initState();
      this.initTapAnimation();
      this.initAnimation();
      this.initAudio();
      src__widgets__binding.WidgetsBinding.instance.addObserver(this);
    }
    initAudio() {
      welcome._WelcomeState.musicPlaying = true;
      this.audio = html.AudioElement.new("assets/audio/welcome.mp3");
      this.audio.loop = true;
      this.audio.volume = 0.5;
      this.audio[$onLoadedData].first.then(dart.dynamic, dart.fn(e => {
        if (dart.test(this.mounted)) {
          this.audio[$play]();
        }
      }, EventToNull()));
      html.document[$onLoad].first.then(dart.dynamic, dart.fn(e => {
        html.document[$head][$append](this.audio);
        this.audio.load();
      }, EventToNull()));
    }
    didChangeDependencies() {
      super.didChangeDependencies();
    }
    deactivate() {
      if (this.audio != null) {
        this.audio.pause();
        this.audio[$remove]();
        welcome._WelcomeState.musicPlaying = false;
      }
      super.deactivate();
    }
    dispose() {
      src__widgets__binding.WidgetsBinding.instance.removeObserver(this);
      super.dispose();
    }
    didChangeAppLifecycleState(state) {
      super.didChangeAppLifecycleState(state);
    }
    switchMusic(opts) {
      let remove = opts && 'remove' in opts ? opts.remove : null;
      if (dart.test(welcome._WelcomeState.musicPlaying)) {
        if (this.audio != null) {
          this.audio.pause();
          if (dart.test(remove)) {
            this.audio[$remove]();
          }
        }
        welcome._WelcomeState.musicPlaying = false;
      } else {
        if (this.audio != null) {
          this.audio.pause();
          this.audio[$remove]();
          welcome._WelcomeState.musicPlaying = false;
        }
        this.initAudio();
      }
    }
    build(context) {
      return new src__material__scaffold.Scaffold.new({body: new src__widgets__layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => {
            let size = constraints.biggest.longestSide;
            return new src__widgets__basic.Stack.new({children: JSArrayOfWidget().of([new src__widgets__basic.SizedBox.expand({child: new src__widgets__image.Image.asset(welcome._WelcomeState.skyAsset(), {fit: src__painting__box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 249, column: 28, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$8 || (const$8 = dart.constList([const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 250, column: 17, name: "name"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 251, column: 17, name: "fit"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 248, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$11 || (const$11 = dart.constList([const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 249, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Align.new({alignment: src__painting__alignment.Alignment.center, child: new src__widgets__basic.Align.new({alignment: new src__painting__alignment.Alignment.new(0.0, -1.0), heightFactor: this.bossYAxis, child: new src__widgets__image.Image.asset(welcome._WelcomeState.bossAsset(), {width: size, height: size, fit: src__painting__box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 259, column: 30, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$17 || (const$17 = dart.constList([const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 260, column: 19, name: "name"}))), const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 261, column: 19, name: "width"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 262, column: 19, name: "height"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 263, column: 19, name: "fit"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 256, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$22 || (const$22 = dart.constList([const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 257, column: 17, name: "alignment"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 258, column: 17, name: "heightFactor"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 259, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 254, column: 13, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$26 || (const$26 = dart.constList([const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 255, column: 15, name: "alignment"}))), const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 256, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Align.new({alignment: src__painting__alignment.Alignment.bottomCenter, child: new src__widgets__basic.Align.new({alignment: src__painting__alignment.Alignment.topCenter, heightFactor: this.heroYAxis, child: new src__widgets__image.Image.asset(welcome._WelcomeState.heroAsset(), {width: dart.notNull(size) / 1.5, height: dart.notNull(size) / 1.5, fit: src__painting__box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 272, column: 30, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$32 || (const$32 = dart.constList([const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 273, column: 19, name: "name"}))), const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 274, column: 19, name: "width"}))), const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 275, column: 19, name: "height"}))), const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 276, column: 19, name: "fit"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 269, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$37 || (const$37 = dart.constList([const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 270, column: 17, name: "alignment"}))), const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 271, column: 17, name: "heightFactor"}))), const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 272, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 267, column: 13, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$41 || (const$41 = dart.constList([const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 268, column: 15, name: "alignment"}))), const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 269, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__safe_area.SafeArea.new({bottom: false, child: new src__widgets__container.Container.new({alignment: src__painting__alignment.Alignment.topCenter, padding: new src__painting__edge_insets.EdgeInsets.only({top: dart.notNull(constraints.maxHeight) * 0.04, left: 15.0, right: 15.0}), child: new src__widgets__image.Image.asset(welcome._WelcomeState.logoAsset(), {height: 150.0, fit: src__painting__box_fit.BoxFit.contain, $creationLocationd_0dea112b090073317d4: const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 285, column: 30, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$46 || (const$46 = dart.constList([const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 286, column: 19, name: "name"}))), const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 287, column: 19, name: "height"}))), const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 288, column: 19, name: "fit"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 282, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$51 || (const$51 = dart.constList([const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 283, column: 17, name: "alignment"}))), const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 284, column: 17, name: "padding"}))), const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 285, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 280, column: 13, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$55 || (const$55 = dart.constList([const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 281, column: 15, name: "bottom"}))), const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 282, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__safe_area.SafeArea.new({child: new src__widgets__basic.Opacity.new({opacity: this.tapAlpha, child: new src__widgets__container.Container.new({alignment: src__painting__alignment.Alignment.bottomCenter, padding: new src__painting__edge_insets.EdgeInsets.only({bottom: dart.notNull(constraints.maxHeight) * 0.12}), child: new src__widgets__image.Image.asset("elements/taptostart.png", {height: 55.0, $creationLocationd_0dea112b090073317d4: const$60 || (const$60 = dart.const(new src__widgets__widget_inspector._Location.new({line: 298, column: 32, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$59 || (const$59 = dart.constList([const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 299, column: 21, name: "name"}))), const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 300, column: 21, name: "height"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$65 || (const$65 = dart.const(new src__widgets__widget_inspector._Location.new({line: 295, column: 24, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$64 || (const$64 = dart.constList([const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 296, column: 19, name: "alignment"}))), const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 297, column: 19, name: "padding"}))), const$63 || (const$63 = dart.const(new src__widgets__widget_inspector._Location.new({line: 298, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$69 || (const$69 = dart.const(new src__widgets__widget_inspector._Location.new({line: 293, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$68 || (const$68 = dart.constList([const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 294, column: 17, name: "opacity"}))), const$67 || (const$67 = dart.const(new src__widgets__widget_inspector._Location.new({line: 295, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$72 || (const$72 = dart.const(new src__widgets__widget_inspector._Location.new({line: 292, column: 13, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$71 || (const$71 = dart.constList([const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 293, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__implicit_animations.AnimatedContainer.new({duration: new core.Duration.new({seconds: 2}), child: new src__widgets__gesture_detector.GestureDetector.new({onTap: dart.bind(this, 'initGame'), child: new src__widgets__container.Container.new({color: this.fade, $creationLocationd_0dea112b090073317d4: const$75 || (const$75 = dart.const(new src__widgets__widget_inspector._Location.new({line: 309, column: 24, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$74 || (const$74 = dart.constList([const$73 || (const$73 = dart.const(new src__widgets__widget_inspector._Location.new({line: 310, column: 19, name: "color"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$79 || (const$79 = dart.const(new src__widgets__widget_inspector._Location.new({line: 307, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$78 || (const$78 = dart.constList([const$76 || (const$76 = dart.const(new src__widgets__widget_inspector._Location.new({line: 308, column: 17, name: "onTap"}))), const$77 || (const$77 = dart.const(new src__widgets__widget_inspector._Location.new({line: 309, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$83 || (const$83 = dart.const(new src__widgets__widget_inspector._Location.new({line: 305, column: 13, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$82 || (const$82 = dart.constList([const$80 || (const$80 = dart.const(new src__widgets__widget_inspector._Location.new({line: 306, column: 15, name: "duration"}))), const$81 || (const$81 = dart.const(new src__widgets__widget_inspector._Location.new({line: 307, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 20.0, horizontal: 15.0}), child: new button$.FancyButton.new({child: new src__widgets__icon.Icon.new(src__material__icons.Icons.music_note, {size: 20.0, color: dart.test(welcome._WelcomeState.musicPlaying) ? src__material__colors.Colors.white : src__material__colors.Colors.black54, $creationLocationd_0dea112b090073317d4: const$88 || (const$88 = dart.const(new src__widgets__widget_inspector._Location.new({line: 317, column: 24, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$87 || (const$87 = dart.constList([const$84 || (const$84 = dart.const(new src__widgets__widget_inspector._Location.new({line: 318, column: 25, name: "icon"}))), const$85 || (const$85 = dart.const(new src__widgets__widget_inspector._Location.new({line: 319, column: 19, name: "size"}))), const$86 || (const$86 = dart.const(new src__widgets__widget_inspector._Location.new({line: 320, column: 19, name: "color"})))], src__widgets__widget_inspector._Location))})))}), size: 25.0, color: new ui$.Color.new(4284984411), onPressed: dart.fn(() => {
                      this.switchMusic({remove: false});
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$94 || (const$94 = dart.const(new src__widgets__widget_inspector._Location.new({line: 316, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$93 || (const$93 = dart.constList([const$89 || (const$89 = dart.const(new src__widgets__widget_inspector._Location.new({line: 317, column: 17, name: "child"}))), const$90 || (const$90 = dart.const(new src__widgets__widget_inspector._Location.new({line: 322, column: 17, name: "size"}))), const$91 || (const$91 = dart.const(new src__widgets__widget_inspector._Location.new({line: 323, column: 17, name: "color"}))), const$92 || (const$92 = dart.const(new src__widgets__widget_inspector._Location.new({line: 324, column: 17, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$98 || (const$98 = dart.const(new src__widgets__widget_inspector._Location.new({line: 314, column: 13, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$97 || (const$97 = dart.constList([const$95 || (const$95 = dart.const(new src__widgets__widget_inspector._Location.new({line: 315, column: 15, name: "padding"}))), const$96 || (const$96 = dart.const(new src__widgets__widget_inspector._Location.new({line: 316, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), dart.test(this.platform.isMobile()) ? new src__widgets__basic.Center.new({child: new src__widgets__basic.Align.new({alignment: src__painting__alignment.Alignment.bottomCenter, child: new src__widgets__basic.Padding.new({padding: const$99 || (const$99 = dart.const(new src__painting__edge_insets.EdgeInsets.only({bottom: 20.0}))), child: new button$.FancyButton.new({onPressed: dart.fn(() => {
                          this.platform.openStore();
                        }, VoidToNull()), child: new src__widgets__text.Text.new("Download the app for " + dart.str(this.platform.name()), {style: new src__painting__text_style.TextStyle.new({fontSize: 12.0, color: src__material__colors.Colors.white, fontFamily: "Gameplay"}), $creationLocationd_0dea112b090073317d4: const$103 || (const$103 = dart.const(new src__widgets__widget_inspector._Location.new({line: 339, column: 34, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$102 || (const$102 = dart.constList([const$100 || (const$100 = dart.const(new src__widgets__widget_inspector._Location.new({line: 340, column: 70, name: "data"}))), const$101 || (const$101 = dart.const(new src__widgets__widget_inspector._Location.new({line: 341, column: 29, name: "style"})))], src__widgets__widget_inspector._Location))})))}), size: 30.0, color: new ui$.Color.new(4284984411), $creationLocationd_0dea112b090073317d4: const$109 || (const$109 = dart.const(new src__widgets__widget_inspector._Location.new({line: 335, column: 32, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$108 || (const$108 = dart.constList([const$104 || (const$104 = dart.const(new src__widgets__widget_inspector._Location.new({line: 336, column: 27, name: "onPressed"}))), const$105 || (const$105 = dart.const(new src__widgets__widget_inspector._Location.new({line: 339, column: 27, name: "child"}))), const$106 || (const$106 = dart.const(new src__widgets__widget_inspector._Location.new({line: 343, column: 27, name: "size"}))), const$107 || (const$107 = dart.const(new src__widgets__widget_inspector._Location.new({line: 344, column: 27, name: "color"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$113 || (const$113 = dart.const(new src__widgets__widget_inspector._Location.new({line: 333, column: 30, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$112 || (const$112 = dart.constList([const$110 || (const$110 = dart.const(new src__widgets__widget_inspector._Location.new({line: 334, column: 25, name: "padding"}))), const$111 || (const$111 = dart.const(new src__widgets__widget_inspector._Location.new({line: 335, column: 25, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$117 || (const$117 = dart.const(new src__widgets__widget_inspector._Location.new({line: 331, column: 28, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$116 || (const$116 = dart.constList([const$114 || (const$114 = dart.const(new src__widgets__widget_inspector._Location.new({line: 332, column: 23, name: "alignment"}))), const$115 || (const$115 = dart.const(new src__widgets__widget_inspector._Location.new({line: 333, column: 23, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$120 || (const$120 = dart.const(new src__widgets__widget_inspector._Location.new({line: 330, column: 19, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$119 || (const$119 = dart.constList([const$118 || (const$118 = dart.const(new src__widgets__widget_inspector._Location.new({line: 331, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))}) : new src__widgets__container.Container.new({$creationLocationd_0dea112b090073317d4: const$122 || (const$122 = dart.const(new src__widgets__widget_inspector._Location.new({line: 349, column: 19, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$121 || (const$121 = dart.constList([], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$125 || (const$125 = dart.const(new src__widgets__widget_inspector._Location.new({line: 246, column: 16, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$124 || (const$124 = dart.constList([const$123 || (const$123 = dart.const(new src__widgets__widget_inspector._Location.new({line: 247, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))});
          }, BuildContextAndBoxConstraintsToStack()), $creationLocationd_0dea112b090073317d4: const$128 || (const$128 = dart.const(new src__widgets__widget_inspector._Location.new({line: 244, column: 13, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$127 || (const$127 = dart.constList([const$126 || (const$126 = dart.const(new src__widgets__widget_inspector._Location.new({line: 244, column: 27, name: "builder"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$131 || (const$131 = dart.const(new src__widgets__widget_inspector._Location.new({line: 243, column: 12, file: "org-dartlang-app:///packages/tap_hero_web/welcome.dart", parameterLocations: const$130 || (const$130 = dart.constList([const$129 || (const$129 = dart.const(new src__widgets__widget_inspector._Location.new({line: 244, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (welcome._WelcomeState.new = function() {
    this.heroYAxis = 0.0;
    this.bossYAxis = 1.0;
    this[_controller] = null;
    this[_animationHero] = null;
    this[_animationBoss] = null;
    this.tapToPlay = false;
    this.tapAlpha = 0.0;
    this[_tapController] = null;
    this[_tapAnimation] = null;
    this[_fadeController] = null;
    this[_fadeAnimation] = null;
    this.fade = src__material__colors.Colors.transparent;
    this.audio = null;
    this.platform = new welcome.Platform.new();
    welcome._WelcomeState.__proto__.new.call(this);
    ;
  }).prototype = welcome._WelcomeState.prototype;
  dart.addTypeTests(welcome._WelcomeState);
  dart.setMethodSignature(welcome._WelcomeState, () => ({
    __proto__: dart.getMethods(welcome._WelcomeState.__proto__),
    initGame: dart.fnType(dart.void, []),
    initAnimation: dart.fnType(dart.void, []),
    initTapAnimation: dart.fnType(dart.void, []),
    disposeAnimations: dart.fnType(dart.void, []),
    initAudio: dart.fnType(dart.void, []),
    switchMusic: dart.fnType(dart.void, [], {remove: core.bool}),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(welcome._WelcomeState, "package:tap_hero_web/welcome.dart");
  dart.setFieldSignature(welcome._WelcomeState, () => ({
    __proto__: dart.getFields(welcome._WelcomeState.__proto__),
    heroYAxis: dart.fieldType(core.double),
    bossYAxis: dart.fieldType(core.double),
    [_controller]: dart.fieldType(src__animation__animation_controller.AnimationController),
    [_animationHero]: dart.fieldType(src__animation__animation.Animation),
    [_animationBoss]: dart.fieldType(src__animation__animation.Animation),
    tapToPlay: dart.fieldType(core.bool),
    tapAlpha: dart.fieldType(core.double),
    [_tapController]: dart.fieldType(src__animation__animation_controller.AnimationController),
    [_tapAnimation]: dart.fieldType(src__animation__animation.Animation),
    [_fadeController]: dart.fieldType(src__animation__animation_controller.AnimationController),
    [_fadeAnimation]: dart.fieldType(src__animation__animation.Animation),
    fade: dart.fieldType(ui$.Color),
    audio: dart.fieldType(html.AudioElement),
    platform: dart.finalFieldType(welcome.Platform)
  }));
  dart.defineLazy(welcome._WelcomeState, {
    /*welcome._WelcomeState.musicPlaying*/get musicPlaying() {
      return false;
    },
    set musicPlaying(_) {}
  });
  let const$132;
  let const$133;
  let const$134;
  let const$135;
  game.Game = class Game extends src__widgets__framework.StatefulWidget {
    static routeAnim() {
      return new route$.FadeRoute.new({name: "/game", title: "Game On!", builder: dart.fn(_ => new game.Game.new({$creationLocationd_0dea112b090073317d4: const$133 || (const$133 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$132 || (const$132 = dart.constList([], src__widgets__widget_inspector._Location))})))}), BuildContextToGame())});
    }
    static route() {
      return new route$.SimpleRoute.new({name: "/game", title: "Game On!", builder: dart.fn(_ => new game.Game.new({$creationLocationd_0dea112b090073317d4: const$135 || (const$135 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$134 || (const$134 = dart.constList([], src__widgets__widget_inspector._Location))})))}), BuildContextToGame())});
    }
    createState() {
      return new game._GameState.new();
    }
  };
  (game.Game.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    game.Game.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = game.Game.prototype;
  dart.addTypeTests(game.Game);
  dart.setMethodSignature(game.Game, () => ({
    __proto__: dart.getMethods(game.Game.__proto__),
    createState: dart.fnType(game._GameState, [])
  }));
  dart.setLibraryUri(game.Game, "package:tap_hero_web/game.dart");
  let const$136;
  let const$137;
  let const$138;
  let const$139;
  let const$140;
  let const$141;
  let const$142;
  let const$143;
  let const$144;
  let const$145;
  let const$146;
  let const$147;
  let const$148;
  let const$149;
  let const$150;
  let const$151;
  let const$152;
  let const$153;
  let const$154;
  let const$155;
  let const$156;
  let const$157;
  let const$158;
  let const$159;
  let const$160;
  let const$161;
  let const$162;
  let const$163;
  let const$164;
  let const$165;
  let const$166;
  let const$167;
  let const$168;
  let const$169;
  let const$170;
  let const$171;
  let const$172;
  let const$173;
  let const$174;
  let const$175;
  let const$176;
  let const$177;
  let const$178;
  let const$179;
  let const$180;
  let const$181;
  let const$182;
  let const$183;
  let const$184;
  let const$185;
  let const$186;
  let const$187;
  let const$188;
  let const$189;
  let const$190;
  let const$191;
  let const$192;
  let const$193;
  let const$194;
  let const$195;
  let const$196;
  let const$197;
  let const$198;
  let const$199;
  let const$200;
  let const$201;
  let const$202;
  let const$203;
  let const$204;
  let const$205;
  let const$206;
  let const$207;
  let const$208;
  let const$209;
  let const$210;
  let const$211;
  let const$212;
  let const$213;
  let const$214;
  let const$215;
  let const$216;
  let const$217;
  let const$218;
  let const$219;
  let const$220;
  let const$221;
  let const$222;
  let const$223;
  let const$224;
  let const$225;
  let const$226;
  let const$227;
  let const$228;
  let const$229;
  let const$230;
  let const$231;
  let const$232;
  let const$233;
  let const$234;
  let const$235;
  let const$236;
  let const$237;
  let const$238;
  let const$239;
  let const$240;
  let const$241;
  let const$242;
  let const$243;
  let const$244;
  let const$245;
  let const$246;
  let const$247;
  let const$248;
  let const$249;
  let const$250;
  let const$251;
  let const$252;
  let const$253;
  let const$254;
  let const$255;
  let const$256;
  let const$257;
  let const$258;
  let const$259;
  let const$260;
  let const$261;
  let const$262;
  let const$263;
  let const$264;
  let const$265;
  let const$266;
  let const$267;
  let const$268;
  let const$269;
  let const$270;
  let const$271;
  let const$272;
  let const$273;
  let const$274;
  let const$275;
  let const$276;
  let const$277;
  let const$278;
  let const$279;
  let const$280;
  let const$281;
  let const$282;
  let const$283;
  let const$284;
  let const$285;
  let const$286;
  let const$287;
  let const$288;
  let const$289;
  let const$290;
  let const$291;
  let const$292;
  let const$293;
  let const$294;
  let const$295;
  let const$296;
  let const$297;
  let const$298;
  let const$299;
  let const$300;
  let const$301;
  let const$302;
  let const$303;
  let const$304;
  let const$305;
  let const$306;
  let const$307;
  let const$308;
  let const$309;
  let const$310;
  let const$311;
  let const$312;
  let const$313;
  let const$314;
  let const$315;
  let const$316;
  let const$317;
  let const$318;
  let const$319;
  let const$320;
  let const$321;
  let const$322;
  let const$323;
  let const$324;
  let const$325;
  let const$326;
  let const$327;
  let const$328;
  let const$329;
  let const$330;
  let const$331;
  let const$332;
  let const$333;
  let const$334;
  let const$335;
  let const$336;
  let const$337;
  let const$338;
  let const$339;
  let const$340;
  let const$341;
  let const$342;
  let const$343;
  let const$344;
  let const$345;
  let const$346;
  let const$347;
  let const$348;
  let const$349;
  let const$350;
  let const$351;
  let const$352;
  let const$353;
  let const$354;
  let const$355;
  let const$356;
  let const$357;
  let const$358;
  let const$359;
  let const$360;
  let const$361;
  let const$362;
  let const$363;
  let const$364;
  let const$365;
  let const$366;
  let const$367;
  let const$368;
  let const$369;
  let const$370;
  let const$371;
  let const$372;
  let const$373;
  let const$374;
  let const$375;
  let const$376;
  let const$377;
  let const$378;
  let const$379;
  let const$380;
  let const$381;
  let const$382;
  let const$383;
  let const$384;
  let const$385;
  let const$386;
  let const$387;
  let const$388;
  let const$389;
  let const$390;
  let const$391;
  let const$392;
  let const$393;
  let const$394;
  let const$395;
  let const$396;
  let const$397;
  let const$398;
  let const$399;
  let const$400;
  let const$401;
  let const$402;
  let const$403;
  let const$404;
  let const$405;
  let const$406;
  let const$407;
  let const$408;
  let const$409;
  let const$410;
  let const$411;
  let const$412;
  let const$413;
  let const$414;
  let const$415;
  let const$416;
  let const$417;
  let const$418;
  let const$419;
  let const$420;
  let const$421;
  let const$422;
  let const$423;
  let const$424;
  let const$425;
  let const$426;
  let const$427;
  let const$428;
  let const$429;
  let const$430;
  let const$431;
  let const$432;
  let const$433;
  let const$434;
  let const$435;
  let const$436;
  let const$437;
  let const$438;
  let const$439;
  let const$440;
  let const$441;
  let const$442;
  let const$443;
  let const$444;
  let const$445;
  let const$446;
  let const$447;
  let const$448;
  let const$449;
  let const$450;
  let const$451;
  let const$452;
  let const$453;
  let const$454;
  let const$455;
  let const$456;
  let const$457;
  let const$458;
  let const$459;
  let const$460;
  let const$461;
  let const$462;
  let const$463;
  let const$464;
  let const$465;
  let const$466;
  let const$467;
  let const$468;
  let const$469;
  let const$470;
  let const$471;
  let const$472;
  let const$473;
  let const$474;
  let const$475;
  let const$476;
  let const$477;
  let const$478;
  let const$479;
  let const$480;
  let const$481;
  let const$482;
  let const$483;
  let const$484;
  let const$485;
  let const$486;
  let const$487;
  let const$488;
  let const$489;
  let const$490;
  let const$491;
  let const$492;
  let const$493;
  let const$494;
  let const$495;
  let const$496;
  let const$497;
  let const$498;
  let const$499;
  let const$500;
  let const$501;
  let const$502;
  let const$503;
  let const$504;
  let const$505;
  let const$506;
  let const$507;
  let const$508;
  let const$509;
  let const$510;
  let const$511;
  let const$512;
  let const$513;
  let const$514;
  let const$515;
  let const$516;
  let const$517;
  let const$518;
  let const$519;
  let const$520;
  let const$521;
  let const$522;
  let const$523;
  let const$524;
  let const$525;
  let const$526;
  let const$527;
  let const$528;
  let const$529;
  let const$530;
  let const$531;
  let const$532;
  let const$533;
  let const$534;
  let const$535;
  let const$536;
  let const$537;
  let const$538;
  let const$539;
  let const$540;
  let const$541;
  let const$542;
  let const$543;
  let const$544;
  let const$545;
  let const$546;
  let const$547;
  let const$548;
  let const$549;
  let const$550;
  let const$551;
  let const$552;
  let const$553;
  let const$554;
  let const$555;
  let const$556;
  let const$557;
  let const$558;
  let const$559;
  let const$560;
  let const$561;
  let const$562;
  let const$563;
  const _backHome = dart.privateName(game, "_backHome");
  let const$564;
  let const$565;
  let const$566;
  let const$567;
  let const$568;
  let const$569;
  let const$570;
  let const$571;
  let const$572;
  let const$573;
  let const$574;
  let const$575;
  let const$576;
  let const$577;
  let const$578;
  let const$579;
  let const$580;
  const State_WidgetsBindingObserver$$ = class State_WidgetsBindingObserver extends src__widgets__framework.State$(game.Game) {};
  (State_WidgetsBindingObserver$$.new = function() {
    State_WidgetsBindingObserver$$.__proto__.new.call(this);
  }).prototype = State_WidgetsBindingObserver$$.prototype;
  dart.applyMixin(State_WidgetsBindingObserver$$, src__widgets__binding.WidgetsBindingObserver);
  const State_TickerProviderStateMixin$$ = class State_TickerProviderStateMixin extends State_WidgetsBindingObserver$$ {};
  (State_TickerProviderStateMixin$$.new = function() {
    src__widgets__ticker_provider.TickerProviderStateMixin$(game.Game)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$$.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$$.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$$, src__widgets__ticker_provider.TickerProviderStateMixin$(game.Game));
  game._GameState = class _GameState extends State_TickerProviderStateMixin$$ {
    static skyAsset() {
      return "background/sky.png";
    }
    static stageAsset() {
      return "background/front.png";
    }
    get timerString() {
      let duration = this.controller.duration['*'](this.controller.value);
      return dart.toString(duration.inMinutes)[$padLeft](2, "0") + ":" + duration.inSeconds[$modulo](60)[$toString]()[$padLeft](2, "0");
    }
    damage(details) {
      this.setState(dart.fn(() => {
        let t0;
        this.xAxis = dart.notNull(details.globalPosition.dx) - 40.0;
        this.yAxis = dart.notNull(details.globalPosition.dy) - 80.0;
        this.tap = true;
        if (dart.notNull(game._GameState.damageBar) - dart.notNull(game._GameState.damageUser) <= 0) {
          game._GameState.damageBar = dart.notNull(game._GameState.damageBar) - dart.notNull(game._GameState.damageUser);
          this.coins = dart.notNull(this.coins) + 20;
          game._GameState.multiplier = dart.notNull(this.bossIndex) + 1 >= dart.notNull(this.bosses[$length]) ? dart.notNull(game._GameState.multiplier) * 1.25 : game._GameState.multiplier;
          this.level = dart.notNull(this.bossIndex) + 1 >= dart.notNull(this.bosses[$length]) ? this.level = dart.notNull(this.level) + 1 : this.level;
          game._GameState.addedDuration = dart.notNull(this.bossIndex) + 1 >= dart.notNull(this.bosses[$length]) ? 1000 * 20 : 1000 * 10;
          this.bossIndex = dart.notNull(this.bossIndex) + 1 >= dart.notNull(this.bosses[$length]) ? 0 : this.bossIndex = dart.notNull(this.bossIndex) + 1;
          game._GameState.damageBar = this.bosses[$_get](this.bossIndex).life[$toDouble]() * dart.notNull(game._GameState.multiplier);
          this.earnedCoin = true;
          t0 = this.onEarnTime;
          t0 == null ? null : t0();
          async.Future.delayed(const$136 || (const$136 = dart.const(new core.Duration.new({seconds: 1}))), dart.fn(() => {
            this.setState(dart.fn(() => {
              this.earnedCoin = false;
            }, VoidToNull()));
          }, VoidToNull()));
        } else {
          game._GameState.damageBar = dart.notNull(game._GameState.damageBar) - dart.notNull(game._GameState.damageUser);
        }
      }, VoidToNull()));
    }
    hide(details) {
      this.setState(dart.fn(() => {
        this.tap = false;
      }, VoidToNull()));
    }
    width(context) {
      return src__widgets__media_query.MediaQuery.of(context).size.width;
    }
    height(context) {
      return src__widgets__media_query.MediaQuery.of(context).size.height;
    }
    listHeight(context) {
      return dart.notNull(this.width(context)) >= 700 ? this.height(context) : dart.notNull(this.height(context)) / 2.8;
    }
    buyPowerUp(index) {
      this.setState(dart.fn(() => {
        if (dart.notNull(this.coins) >= dart.notNull(this.list[$_get](index).coins)) {
          this.coins = dart.notNull(this.coins) - dart.notNull(this.list[$_get](index).coins);
          this.list[$_get](index).bought = true;
          game._GameState.damageUser = dart.notNull(game._GameState.damageUser) * dart.notNull(this.list[$_get](index).multiplier);
        }
      }, VoidToNull()));
    }
    coinVisibility(bought) {
      if (dart.test(bought)) {
        return new src__widgets__container.Container.new({$creationLocationd_0dea112b090073317d4: const$138 || (const$138 = dart.const(new src__widgets__widget_inspector._Location.new({line: 141, column: 14, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$137 || (const$137 = dart.constList([], src__widgets__widget_inspector._Location))})))});
      } else {
        return new src__widgets__basic.Padding.new({padding: const$139 || (const$139 = dart.const(new src__painting__edge_insets.EdgeInsets.only({right: 4.0}))), child: new src__widgets__image.Image.asset("elements/coin.png", {width: 13.0, height: 13.0, $creationLocationd_0dea112b090073317d4: const$144 || (const$144 = dart.const(new src__widgets__widget_inspector._Location.new({line: 145, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$143 || (const$143 = dart.constList([const$140 || (const$140 = dart.const(new src__widgets__widget_inspector._Location.new({line: 146, column: 11, name: "name"}))), const$141 || (const$141 = dart.const(new src__widgets__widget_inspector._Location.new({line: 147, column: 11, name: "width"}))), const$142 || (const$142 = dart.const(new src__widgets__widget_inspector._Location.new({line: 148, column: 11, name: "height"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$148 || (const$148 = dart.const(new src__widgets__widget_inspector._Location.new({line: 143, column: 14, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$147 || (const$147 = dart.constList([const$145 || (const$145 = dart.const(new src__widgets__widget_inspector._Location.new({line: 144, column: 9, name: "padding"}))), const$146 || (const$146 = dart.const(new src__widgets__widget_inspector._Location.new({line: 145, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
    }
    earnedCoins() {
      if (dart.test(this.earnedCoin)) {
        return new src__widgets__basic.Padding.new({padding: const$149 || (const$149 = dart.const(new src__painting__edge_insets.EdgeInsets.only({left: 5.0}))), child: new src__widgets__text.Text.new("+20", {style: utils$.Utils.textStyle(10.0, {color: src__material__colors.Colors.yellow}), $creationLocationd_0dea112b090073317d4: const$153 || (const$153 = dart.const(new src__widgets__widget_inspector._Location.new({line: 158, column: 16, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$152 || (const$152 = dart.constList([const$150 || (const$150 = dart.const(new src__widgets__widget_inspector._Location.new({line: 159, column: 11, name: "data"}))), const$151 || (const$151 = dart.const(new src__widgets__widget_inspector._Location.new({line: 160, column: 11, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$157 || (const$157 = dart.const(new src__widgets__widget_inspector._Location.new({line: 156, column: 14, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$156 || (const$156 = dart.constList([const$154 || (const$154 = dart.const(new src__widgets__widget_inspector._Location.new({line: 157, column: 9, name: "padding"}))), const$155 || (const$155 = dart.const(new src__widgets__widget_inspector._Location.new({line: 158, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      } else {
        return new src__widgets__container.Container.new({width: 0.0, height: 0.0, $creationLocationd_0dea112b090073317d4: const$161 || (const$161 = dart.const(new src__widgets__widget_inspector._Location.new({line: 164, column: 14, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$160 || (const$160 = dart.constList([const$158 || (const$158 = dart.const(new src__widgets__widget_inspector._Location.new({line: 165, column: 9, name: "width"}))), const$159 || (const$159 = dart.const(new src__widgets__widget_inspector._Location.new({line: 166, column: 9, name: "height"})))], src__widgets__widget_inspector._Location))})))});
      }
    }
    hitBox() {
      if (dart.test(this.tap)) {
        return new src__widgets__basic.Positioned.new({top: this.yAxis, left: this.xAxis, child: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new src__widgets__basic.Padding.new({padding: const$162 || (const$162 = dart.const(new src__painting__edge_insets.EdgeInsets.only({bottom: 20.0}))), child: new utils$.StrokeText.new("-" + game._GameState.damageUser[$toInt]()[$toString](), {fontSize: 14.0, fontFamily: "Gameplay", color: src__material__colors.Colors.red, strokeColor: src__material__colors.Colors.black, strokeWidth: 1.0, $creationLocationd_0dea112b090073317d4: const$170 || (const$170 = dart.const(new src__widgets__widget_inspector._Location.new({line: 180, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$169 || (const$169 = dart.constList([const$163 || (const$163 = dart.const(new src__widgets__widget_inspector._Location.new({line: 181, column: 52, name: "text"}))), const$164 || (const$164 = dart.const(new src__widgets__widget_inspector._Location.new({line: 182, column: 17, name: "fontSize"}))), const$165 || (const$165 = dart.const(new src__widgets__widget_inspector._Location.new({line: 183, column: 17, name: "fontFamily"}))), const$166 || (const$166 = dart.const(new src__widgets__widget_inspector._Location.new({line: 184, column: 17, name: "color"}))), const$167 || (const$167 = dart.const(new src__widgets__widget_inspector._Location.new({line: 185, column: 17, name: "strokeColor"}))), const$168 || (const$168 = dart.const(new src__widgets__widget_inspector._Location.new({line: 186, column: 17, name: "strokeWidth"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$174 || (const$174 = dart.const(new src__widgets__widget_inspector._Location.new({line: 178, column: 13, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$173 || (const$173 = dart.constList([const$171 || (const$171 = dart.const(new src__widgets__widget_inspector._Location.new({line: 179, column: 15, name: "padding"}))), const$172 || (const$172 = dart.const(new src__widgets__widget_inspector._Location.new({line: 180, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__image.Image.asset("elements/hit.png", {fit: src__painting__box_fit.BoxFit.fill, height: 80.0, width: 80.0, $creationLocationd_0dea112b090073317d4: const$180 || (const$180 = dart.const(new src__widgets__widget_inspector._Location.new({line: 189, column: 19, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$179 || (const$179 = dart.constList([const$175 || (const$175 = dart.const(new src__widgets__widget_inspector._Location.new({line: 190, column: 15, name: "name"}))), const$176 || (const$176 = dart.const(new src__widgets__widget_inspector._Location.new({line: 191, column: 15, name: "fit"}))), const$177 || (const$177 = dart.const(new src__widgets__widget_inspector._Location.new({line: 192, column: 15, name: "height"}))), const$178 || (const$178 = dart.const(new src__widgets__widget_inspector._Location.new({line: 193, column: 15, name: "width"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$183 || (const$183 = dart.const(new src__widgets__widget_inspector._Location.new({line: 176, column: 16, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$182 || (const$182 = dart.constList([const$181 || (const$181 = dart.const(new src__widgets__widget_inspector._Location.new({line: 177, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$188 || (const$188 = dart.const(new src__widgets__widget_inspector._Location.new({line: 173, column: 14, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$187 || (const$187 = dart.constList([const$184 || (const$184 = dart.const(new src__widgets__widget_inspector._Location.new({line: 174, column: 9, name: "top"}))), const$185 || (const$185 = dart.const(new src__widgets__widget_inspector._Location.new({line: 175, column: 9, name: "left"}))), const$186 || (const$186 = dart.const(new src__widgets__widget_inspector._Location.new({line: 176, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      } else {
        return new src__widgets__container.Container.new({width: 0.0, height: 0.0, $creationLocationd_0dea112b090073317d4: const$192 || (const$192 = dart.const(new src__widgets__widget_inspector._Location.new({line: 199, column: 14, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$191 || (const$191 = dart.constList([const$189 || (const$189 = dart.const(new src__widgets__widget_inspector._Location.new({line: 200, column: 9, name: "width"}))), const$190 || (const$190 = dart.const(new src__widgets__widget_inspector._Location.new({line: 201, column: 9, name: "height"})))], src__widgets__widget_inspector._Location))})))});
      }
    }
    hero() {
      return dart.test(this.tap) ? "character/attack.png" : "character/idle.png";
    }
    share() {
      let shareMap = new (LinkedMapOfString$String()).new();
      shareMap[$_set]("title", "Tap Hero");
      shareMap[$_set]("text", "Tap Hero: I survive until " + dart.str(this.bosses[$_get](this.bossIndex).name) + " LV" + dart.str(this.level) + "! Now is your turn!");
      html.window.navigator[$share](shareMap);
    }
    gameEngine(context) {
      return dart.notNull(this.width(context)) >= 700 ? new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([this.gamePanel(), this.sidePanel()]), $creationLocationd_0dea112b090073317d4: const$195 || (const$195 = dart.const(new src__widgets__widget_inspector._Location.new({line: 219, column: 11, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$194 || (const$194 = dart.constList([const$193 || (const$193 = dart.const(new src__widgets__widget_inspector._Location.new({line: 220, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))}) : new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([this.gamePanel(), this.sidePanel()]), $creationLocationd_0dea112b090073317d4: const$198 || (const$198 = dart.const(new src__widgets__widget_inspector._Location.new({line: 225, column: 11, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$197 || (const$197 = dart.constList([const$196 || (const$196 = dart.const(new src__widgets__widget_inspector._Location.new({line: 226, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))});
    }
    gamePanel() {
      return new src__widgets__basic.Align.new({alignment: src__painting__alignment.Alignment.topCenter, child: new src__widgets__container.Container.new({color: src__material__colors.Colors.transparent, height: dart.notNull(this.width(this.context)) >= 700 ? this.height(this.context) : dart.notNull(this.height(this.context)) - dart.notNull(this.listHeight(this.context)), width: dart.notNull(this.width(this.context)) >= 700 ? dart.notNull(this.width(this.context)) >= 700 && dart.notNull(this.width(this.context)) <= 900 ? 400.0 : dart.notNull(this.width(this.context)) - 400 : this.width(this.context), child: new src__widgets__basic.Stack.new({children: JSArrayOfWidget().of([new src__widgets__basic.SizedBox.expand({child: new src__widgets__image.Image.asset(game._GameState.skyAsset(), {fit: src__painting__box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: const$202 || (const$202 = dart.const(new src__widgets__widget_inspector._Location.new({line: 247, column: 28, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$201 || (const$201 = dart.constList([const$199 || (const$199 = dart.const(new src__widgets__widget_inspector._Location.new({line: 248, column: 17, name: "name"}))), const$200 || (const$200 = dart.const(new src__widgets__widget_inspector._Location.new({line: 249, column: 17, name: "fit"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$205 || (const$205 = dart.const(new src__widgets__widget_inspector._Location.new({line: 245, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$204 || (const$204 = dart.constList([const$203 || (const$203 = dart.const(new src__widgets__widget_inspector._Location.new({line: 247, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Align.new({child: new src__widgets__image.Image.asset(game._GameState.stageAsset(), {alignment: src__painting__alignment.Alignment.bottomCenter, fit: src__painting__box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: const$210 || (const$210 = dart.const(new src__widgets__widget_inspector._Location.new({line: 253, column: 28, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$209 || (const$209 = dart.constList([const$206 || (const$206 = dart.const(new src__widgets__widget_inspector._Location.new({line: 254, column: 17, name: "name"}))), const$207 || (const$207 = dart.const(new src__widgets__widget_inspector._Location.new({line: 255, column: 17, name: "alignment"}))), const$208 || (const$208 = dart.const(new src__widgets__widget_inspector._Location.new({line: 256, column: 17, name: "fit"})))], src__widgets__widget_inspector._Location))})))}), alignment: src__painting__alignment.Alignment.bottomCenter, $creationLocationd_0dea112b090073317d4: const$214 || (const$214 = dart.const(new src__widgets__widget_inspector._Location.new({line: 252, column: 13, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$213 || (const$213 = dart.constList([const$211 || (const$211 = dart.const(new src__widgets__widget_inspector._Location.new({line: 253, column: 15, name: "child"}))), const$212 || (const$212 = dart.const(new src__widgets__widget_inspector._Location.new({line: 258, column: 15, name: "alignment"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Align.new({child: new src__widgets__basic.Padding.new({padding: const$215 || (const$215 = dart.const(new src__painting__edge_insets.EdgeInsets.only({bottom: 80.0}))), child: new src__widgets__basic.Opacity.new({opacity: dart.test(this.tap) ? 0.4 : 1.0, child: new src__widgets__image.Image.asset(this.bosses[$_get](this.bossIndex).asset, {height: dart.notNull(this.width(this.context)) / 2.5 < 380 ? dart.notNull(this.width(this.context)) / 2.5 : 380.0, fit: src__painting__box_fit.BoxFit.fill, $creationLocationd_0dea112b090073317d4: const$220 || (const$220 = dart.const(new src__widgets__widget_inspector._Location.new({line: 265, column: 32, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$219 || (const$219 = dart.constList([const$216 || (const$216 = dart.const(new src__widgets__widget_inspector._Location.new({line: 266, column: 39, name: "name"}))), const$217 || (const$217 = dart.const(new src__widgets__widget_inspector._Location.new({line: 267, column: 21, name: "height"}))), const$218 || (const$218 = dart.const(new src__widgets__widget_inspector._Location.new({line: 268, column: 21, name: "fit"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$224 || (const$224 = dart.const(new src__widgets__widget_inspector._Location.new({line: 263, column: 24, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$223 || (const$223 = dart.constList([const$221 || (const$221 = dart.const(new src__widgets__widget_inspector._Location.new({line: 264, column: 19, name: "opacity"}))), const$222 || (const$222 = dart.const(new src__widgets__widget_inspector._Location.new({line: 265, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$228 || (const$228 = dart.const(new src__widgets__widget_inspector._Location.new({line: 261, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$227 || (const$227 = dart.constList([const$225 || (const$225 = dart.const(new src__widgets__widget_inspector._Location.new({line: 262, column: 17, name: "padding"}))), const$226 || (const$226 = dart.const(new src__widgets__widget_inspector._Location.new({line: 263, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), alignment: src__painting__alignment.Alignment.bottomCenter, $creationLocationd_0dea112b090073317d4: const$232 || (const$232 = dart.const(new src__widgets__widget_inspector._Location.new({line: 260, column: 13, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$231 || (const$231 = dart.constList([const$229 || (const$229 = dart.const(new src__widgets__widget_inspector._Location.new({line: 261, column: 15, name: "child"}))), const$230 || (const$230 = dart.const(new src__widgets__widget_inspector._Location.new({line: 272, column: 15, name: "alignment"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Align.new({child: new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.only({bottom: 50.0}), child: new src__widgets__image.Image.asset(this.hero(), {height: dart.notNull(this.width(this.context)) / 6 < 160 ? dart.notNull(this.width(this.context)) / 6 : 160.0, fit: src__painting__box_fit.BoxFit.fill, alignment: src__painting__alignment.Alignment.bottomCenter, $creationLocationd_0dea112b090073317d4: const$238 || (const$238 = dart.const(new src__widgets__widget_inspector._Location.new({line: 277, column: 30, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$237 || (const$237 = dart.constList([const$233 || (const$233 = dart.const(new src__widgets__widget_inspector._Location.new({line: 278, column: 19, name: "name"}))), const$234 || (const$234 = dart.const(new src__widgets__widget_inspector._Location.new({line: 279, column: 19, name: "height"}))), const$235 || (const$235 = dart.const(new src__widgets__widget_inspector._Location.new({line: 280, column: 19, name: "fit"}))), const$236 || (const$236 = dart.const(new src__widgets__widget_inspector._Location.new({line: 281, column: 19, name: "alignment"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$242 || (const$242 = dart.const(new src__widgets__widget_inspector._Location.new({line: 275, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$241 || (const$241 = dart.constList([const$239 || (const$239 = dart.const(new src__widgets__widget_inspector._Location.new({line: 276, column: 17, name: "padding"}))), const$240 || (const$240 = dart.const(new src__widgets__widget_inspector._Location.new({line: 277, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), alignment: src__painting__alignment.Alignment.bottomCenter, $creationLocationd_0dea112b090073317d4: const$246 || (const$246 = dart.const(new src__widgets__widget_inspector._Location.new({line: 274, column: 13, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$245 || (const$245 = dart.constList([const$243 || (const$243 = dart.const(new src__widgets__widget_inspector._Location.new({line: 275, column: 15, name: "child"}))), const$244 || (const$244 = dart.const(new src__widgets__widget_inspector._Location.new({line: 284, column: 15, name: "alignment"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 10.0}), child: new src__widgets__safe_area.SafeArea.new({child: new src__widgets__basic.Align.new({alignment: src__painting__alignment.Alignment.topCenter, child: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new src__widgets__basic.Align.new({alignment: src__painting__alignment.Alignment.topRight, child: new src__widgets__basic.Padding.new({padding: const$247 || (const$247 = dart.const(new src__painting__edge_insets.EdgeInsets.only({top: 10.0, bottom: 20.0, right: 15.0}))), child: new src__widgets__basic.Stack.new({children: JSArrayOfWidget().of([new button$.FancyButton.new({child: new src__widgets__text.Text.new("      " + dart.str(this.timerString), {style: new src__painting__text_style.TextStyle.new({fontSize: 20.0, color: src__material__colors.Colors.black87, fontFamily: "Gameplay"}), $creationLocationd_0dea112b090073317d4: const$251 || (const$251 = dart.const(new src__widgets__widget_inspector._Location.new({line: 299, column: 38, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$250 || (const$250 = dart.constList([const$248 || (const$248 = dart.const(new src__widgets__widget_inspector._Location.new({line: 300, column: 53, name: "data"}))), const$249 || (const$249 = dart.const(new src__widgets__widget_inspector._Location.new({line: 301, column: 33, name: "style"})))], src__widgets__widget_inspector._Location))})))}), size: 20.0, color: new ui$.Color.new(4293915629), $creationLocationd_0dea112b090073317d4: const$256 || (const$256 = dart.const(new src__widgets__widget_inspector._Location.new({line: 298, column: 29, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$255 || (const$255 = dart.constList([const$252 || (const$252 = dart.const(new src__widgets__widget_inspector._Location.new({line: 299, column: 31, name: "child"}))), const$253 || (const$253 = dart.const(new src__widgets__widget_inspector._Location.new({line: 307, column: 31, name: "size"}))), const$254 || (const$254 = dart.const(new src__widgets__widget_inspector._Location.new({line: 308, column: 31, name: "color"})))], src__widgets__widget_inspector._Location))})))}), new button$.FancyButton.new({child: new src__widgets__icon.Icon.new(src__material__icons.Icons.watch_later, {color: src__material__colors.Colors.black54, size: 20.0, $creationLocationd_0dea112b090073317d4: const$261 || (const$261 = dart.const(new src__widgets__widget_inspector._Location.new({line: 311, column: 38, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$260 || (const$260 = dart.constList([const$257 || (const$257 = dart.const(new src__widgets__widget_inspector._Location.new({line: 312, column: 39, name: "icon"}))), const$258 || (const$258 = dart.const(new src__widgets__widget_inspector._Location.new({line: 313, column: 33, name: "color"}))), const$259 || (const$259 = dart.const(new src__widgets__widget_inspector._Location.new({line: 314, column: 33, name: "size"})))], src__widgets__widget_inspector._Location))})))}), size: 20.0, color: this.clockColor, $creationLocationd_0dea112b090073317d4: const$266 || (const$266 = dart.const(new src__widgets__widget_inspector._Location.new({line: 310, column: 29, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$265 || (const$265 = dart.constList([const$262 || (const$262 = dart.const(new src__widgets__widget_inspector._Location.new({line: 311, column: 31, name: "child"}))), const$263 || (const$263 = dart.const(new src__widgets__widget_inspector._Location.new({line: 316, column: 31, name: "size"}))), const$264 || (const$264 = dart.const(new src__widgets__widget_inspector._Location.new({line: 317, column: 31, name: "color"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$269 || (const$269 = dart.const(new src__widgets__widget_inspector._Location.new({line: 297, column: 34, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$268 || (const$268 = dart.constList([const$267 || (const$267 = dart.const(new src__widgets__widget_inspector._Location.new({line: 297, column: 40, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$273 || (const$273 = dart.const(new src__widgets__widget_inspector._Location.new({line: 295, column: 32, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$272 || (const$272 = dart.constList([const$270 || (const$270 = dart.const(new src__widgets__widget_inspector._Location.new({line: 296, column: 27, name: "padding"}))), const$271 || (const$271 = dart.const(new src__widgets__widget_inspector._Location.new({line: 297, column: 27, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$277 || (const$277 = dart.const(new src__widgets__widget_inspector._Location.new({line: 293, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$276 || (const$276 = dart.constList([const$274 || (const$274 = dart.const(new src__widgets__widget_inspector._Location.new({line: 294, column: 25, name: "alignment"}))), const$275 || (const$275 = dart.const(new src__widgets__widget_inspector._Location.new({line: 295, column: 25, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Padding.new({padding: const$278 || (const$278 = dart.const(new src__painting__edge_insets.EdgeInsets.only({bottom: 8.0}))), child: new src__widgets__text.Text.new(dart.notNull(this.bosses[$_get](this.bossIndex).name) + "  LV" + dart.toString(this.level), {style: utils$.Utils.textStyle(15.0), $creationLocationd_0dea112b090073317d4: const$282 || (const$282 = dart.const(new src__widgets__widget_inspector._Location.new({line: 324, column: 32, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$281 || (const$281 = dart.constList([const$279 || (const$279 = dart.const(new src__widgets__widget_inspector._Location.new({line: 325, column: 59, name: "data"}))), const$280 || (const$280 = dart.const(new src__widgets__widget_inspector._Location.new({line: 326, column: 27, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$286 || (const$286 = dart.const(new src__widgets__widget_inspector._Location.new({line: 322, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$285 || (const$285 = dart.constList([const$283 || (const$283 = dart.const(new src__widgets__widget_inspector._Location.new({line: 323, column: 25, name: "padding"}))), const$284 || (const$284 = dart.const(new src__widgets__widget_inspector._Location.new({line: 324, column: 25, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new button$.FancyButton.new({child: new src__widgets__text.Text.new("LIFE:  " + game._GameState.damageBar[$toInt]()[$toString](), {style: utils$.Utils.textStyle(18.0), $creationLocationd_0dea112b090073317d4: const$290 || (const$290 = dart.const(new src__widgets__widget_inspector._Location.new({line: 330, column: 32, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$289 || (const$289 = dart.constList([const$287 || (const$287 = dart.const(new src__widgets__widget_inspector._Location.new({line: 331, column: 67, name: "data"}))), const$288 || (const$288 = dart.const(new src__widgets__widget_inspector._Location.new({line: 332, column: 27, name: "style"})))], src__widgets__widget_inspector._Location))})))}), size: 18.0, color: new ui$.Color.new(4291440692), $creationLocationd_0dea112b090073317d4: const$295 || (const$295 = dart.const(new src__widgets__widget_inspector._Location.new({line: 329, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$294 || (const$294 = dart.constList([const$291 || (const$291 = dart.const(new src__widgets__widget_inspector._Location.new({line: 330, column: 25, name: "child"}))), const$292 || (const$292 = dart.const(new src__widgets__widget_inspector._Location.new({line: 334, column: 25, name: "size"}))), const$293 || (const$293 = dart.const(new src__widgets__widget_inspector._Location.new({line: 335, column: 25, name: "color"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Padding.new({padding: const$296 || (const$296 = dart.const(new src__painting__edge_insets.EdgeInsets.all(8.0))), child: new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new src__widgets__text.Text.new("COINS: ", {style: utils$.Utils.textStyle(10.0), $creationLocationd_0dea112b090073317d4: const$300 || (const$300 = dart.const(new src__widgets__widget_inspector._Location.new({line: 342, column: 29, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$299 || (const$299 = dart.constList([const$297 || (const$297 = dart.const(new src__widgets__widget_inspector._Location.new({line: 343, column: 31, name: "data"}))), const$298 || (const$298 = dart.const(new src__widgets__widget_inspector._Location.new({line: 344, column: 31, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Padding.new({padding: const$301 || (const$301 = dart.const(new src__painting__edge_insets.EdgeInsets.only({left: 5.0}))), child: new src__widgets__text.Text.new(dart.toString(this.coins), {style: utils$.Utils.textStyle(10.0), $creationLocationd_0dea112b090073317d4: const$305 || (const$305 = dart.const(new src__widgets__widget_inspector._Location.new({line: 348, column: 38, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$304 || (const$304 = dart.constList([const$302 || (const$302 = dart.const(new src__widgets__widget_inspector._Location.new({line: 349, column: 39, name: "data"}))), const$303 || (const$303 = dart.const(new src__widgets__widget_inspector._Location.new({line: 350, column: 33, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$309 || (const$309 = dart.const(new src__widgets__widget_inspector._Location.new({line: 346, column: 29, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$308 || (const$308 = dart.constList([const$306 || (const$306 = dart.const(new src__widgets__widget_inspector._Location.new({line: 347, column: 31, name: "padding"}))), const$307 || (const$307 = dart.const(new src__widgets__widget_inspector._Location.new({line: 348, column: 31, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__image.Image.asset("elements/coin.png", {height: 12.2, $creationLocationd_0dea112b090073317d4: const$313 || (const$313 = dart.const(new src__widgets__widget_inspector._Location.new({line: 353, column: 35, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$312 || (const$312 = dart.constList([const$310 || (const$310 = dart.const(new src__widgets__widget_inspector._Location.new({line: 354, column: 31, name: "name"}))), const$311 || (const$311 = dart.const(new src__widgets__widget_inspector._Location.new({line: 355, column: 31, name: "height"})))], src__widgets__widget_inspector._Location))})))}), this.earnedCoins()]), $creationLocationd_0dea112b090073317d4: const$317 || (const$317 = dart.const(new src__widgets__widget_inspector._Location.new({line: 339, column: 32, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$316 || (const$316 = dart.constList([const$314 || (const$314 = dart.const(new src__widgets__widget_inspector._Location.new({line: 340, column: 27, name: "mainAxisAlignment"}))), const$315 || (const$315 = dart.const(new src__widgets__widget_inspector._Location.new({line: 341, column: 27, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$321 || (const$321 = dart.const(new src__widgets__widget_inspector._Location.new({line: 337, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$320 || (const$320 = dart.constList([const$318 || (const$318 = dart.const(new src__widgets__widget_inspector._Location.new({line: 338, column: 25, name: "padding"}))), const$319 || (const$319 = dart.const(new src__widgets__widget_inspector._Location.new({line: 339, column: 25, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$324 || (const$324 = dart.const(new src__widgets__widget_inspector._Location.new({line: 291, column: 26, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$323 || (const$323 = dart.constList([const$322 || (const$322 = dart.const(new src__widgets__widget_inspector._Location.new({line: 292, column: 21, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$328 || (const$328 = dart.const(new src__widgets__widget_inspector._Location.new({line: 289, column: 24, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$327 || (const$327 = dart.constList([const$325 || (const$325 = dart.const(new src__widgets__widget_inspector._Location.new({line: 290, column: 19, name: "alignment"}))), const$326 || (const$326 = dart.const(new src__widgets__widget_inspector._Location.new({line: 291, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$331 || (const$331 = dart.const(new src__widgets__widget_inspector._Location.new({line: 288, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$330 || (const$330 = dart.constList([const$329 || (const$329 = dart.const(new src__widgets__widget_inspector._Location.new({line: 289, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$335 || (const$335 = dart.const(new src__widgets__widget_inspector._Location.new({line: 286, column: 13, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$334 || (const$334 = dart.constList([const$332 || (const$332 = dart.const(new src__widgets__widget_inspector._Location.new({line: 287, column: 15, name: "margin"}))), const$333 || (const$333 = dart.const(new src__widgets__widget_inspector._Location.new({line: 288, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__gesture_detector.GestureDetector.new({onTapDown: dart.fn(details => this.damage(details), TapDownDetailsTovoid()), onTapUp: dart.fn(details => this.hide(null), TapUpDetailsTovoid()), onTapCancel: dart.fn(() => this.hide(null), VoidTovoid()), $creationLocationd_0dea112b090073317d4: const$340 || (const$340 = dart.const(new src__widgets__widget_inspector._Location.new({line: 366, column: 13, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$339 || (const$339 = dart.constList([const$336 || (const$336 = dart.const(new src__widgets__widget_inspector._Location.new({line: 367, column: 15, name: "onTapDown"}))), const$337 || (const$337 = dart.const(new src__widgets__widget_inspector._Location.new({line: 368, column: 15, name: "onTapUp"}))), const$338 || (const$338 = dart.const(new src__widgets__widget_inspector._Location.new({line: 369, column: 15, name: "onTapCancel"})))], src__widgets__widget_inspector._Location))})))}), this.hitBox(), new src__widgets__basic.Padding.new({padding: const$341 || (const$341 = dart.const(new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 20.0, horizontal: 15.0}))), child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new button$.FancyButton.new({child: new src__widgets__text.Text.new("X", {textAlign: ui$.TextAlign.center, style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontSize: 18.0, fontFamily: "Gameplay"}), $creationLocationd_0dea112b090073317d4: const$346 || (const$346 = dart.const(new src__widgets__widget_inspector._Location.new({line: 377, column: 28, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$345 || (const$345 = dart.constList([const$342 || (const$342 = dart.const(new src__widgets__widget_inspector._Location.new({line: 378, column: 23, name: "data"}))), const$343 || (const$343 = dart.const(new src__widgets__widget_inspector._Location.new({line: 379, column: 23, name: "textAlign"}))), const$344 || (const$344 = dart.const(new src__widgets__widget_inspector._Location.new({line: 380, column: 23, name: "style"})))], src__widgets__widget_inspector._Location))})))}), size: 25.0, color: new ui$.Color.new(4291440692), onPressed: dart.fn(() => {
                        src__widgets__navigator.Navigator.of(this.context).pushReplacement(dart.dynamic, core.Object, welcome.Welcome.route());
                      }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$352 || (const$352 = dart.const(new src__widgets__widget_inspector._Location.new({line: 376, column: 19, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$351 || (const$351 = dart.constList([const$347 || (const$347 = dart.const(new src__widgets__widget_inspector._Location.new({line: 377, column: 21, name: "child"}))), const$348 || (const$348 = dart.const(new src__widgets__widget_inspector._Location.new({line: 386, column: 21, name: "size"}))), const$349 || (const$349 = dart.const(new src__widgets__widget_inspector._Location.new({line: 387, column: 21, name: "color"}))), const$350 || (const$350 = dart.const(new src__widgets__widget_inspector._Location.new({line: 388, column: 21, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.only({left: 10.0}), child: new button$.FancyButton.new({child: new src__widgets__icon.Icon.new(src__material__icons.Icons.music_note, {size: 20.0, color: dart.test(this.musicPlaying) ? src__material__colors.Colors.white : src__material__colors.Colors.black54, $creationLocationd_0dea112b090073317d4: const$357 || (const$357 = dart.const(new src__widgets__widget_inspector._Location.new({line: 395, column: 30, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$356 || (const$356 = dart.constList([const$353 || (const$353 = dart.const(new src__widgets__widget_inspector._Location.new({line: 396, column: 31, name: "icon"}))), const$354 || (const$354 = dart.const(new src__widgets__widget_inspector._Location.new({line: 397, column: 25, name: "size"}))), const$355 || (const$355 = dart.const(new src__widgets__widget_inspector._Location.new({line: 398, column: 25, name: "color"})))], src__widgets__widget_inspector._Location))})))}), size: 25.0, color: new ui$.Color.new(4284984411), onPressed: dart.fn(() => {
                          this.switchMusic({remove: false});
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$363 || (const$363 = dart.const(new src__widgets__widget_inspector._Location.new({line: 394, column: 28, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$362 || (const$362 = dart.constList([const$358 || (const$358 = dart.const(new src__widgets__widget_inspector._Location.new({line: 395, column: 23, name: "child"}))), const$359 || (const$359 = dart.const(new src__widgets__widget_inspector._Location.new({line: 400, column: 23, name: "size"}))), const$360 || (const$360 = dart.const(new src__widgets__widget_inspector._Location.new({line: 401, column: 23, name: "color"}))), const$361 || (const$361 = dart.const(new src__widgets__widget_inspector._Location.new({line: 402, column: 23, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$367 || (const$367 = dart.const(new src__widgets__widget_inspector._Location.new({line: 392, column: 19, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$366 || (const$366 = dart.constList([const$364 || (const$364 = dart.const(new src__widgets__widget_inspector._Location.new({line: 393, column: 21, name: "padding"}))), const$365 || (const$365 = dart.const(new src__widgets__widget_inspector._Location.new({line: 394, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$370 || (const$370 = dart.const(new src__widgets__widget_inspector._Location.new({line: 374, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$369 || (const$369 = dart.constList([const$368 || (const$368 = dart.const(new src__widgets__widget_inspector._Location.new({line: 375, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$374 || (const$374 = dart.const(new src__widgets__widget_inspector._Location.new({line: 372, column: 13, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$373 || (const$373 = dart.constList([const$371 || (const$371 = dart.const(new src__widgets__widget_inspector._Location.new({line: 373, column: 15, name: "padding"}))), const$372 || (const$372 = dart.const(new src__widgets__widget_inspector._Location.new({line: 374, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$377 || (const$377 = dart.const(new src__widgets__widget_inspector._Location.new({line: 243, column: 16, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$376 || (const$376 = dart.constList([const$375 || (const$375 = dart.const(new src__widgets__widget_inspector._Location.new({line: 244, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$383 || (const$383 = dart.const(new src__widgets__widget_inspector._Location.new({line: 237, column: 14, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$382 || (const$382 = dart.constList([const$378 || (const$378 = dart.const(new src__widgets__widget_inspector._Location.new({line: 238, column: 9, name: "color"}))), const$379 || (const$379 = dart.const(new src__widgets__widget_inspector._Location.new({line: 239, column: 9, name: "height"}))), const$380 || (const$380 = dart.const(new src__widgets__widget_inspector._Location.new({line: 240, column: 9, name: "width"}))), const$381 || (const$381 = dart.const(new src__widgets__widget_inspector._Location.new({line: 243, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$387 || (const$387 = dart.const(new src__widgets__widget_inspector._Location.new({line: 234, column: 12, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$386 || (const$386 = dart.constList([const$384 || (const$384 = dart.const(new src__widgets__widget_inspector._Location.new({line: 236, column: 7, name: "alignment"}))), const$385 || (const$385 = dart.const(new src__widgets__widget_inspector._Location.new({line: 237, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    sidePanel() {
      return new src__widgets__container.Container.new({color: src__material__colors.Colors.black, height: this.listHeight(this.context), width: dart.notNull(this.width(this.context)) >= 700 ? dart.notNull(this.width(this.context)) >= 700 && dart.notNull(this.width(this.context)) <= 900 ? dart.notNull(this.width(this.context)) - 700 + 300 : 400.0 : this.width(this.context), child: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__basic.Expanded.new({child: new src__widgets__basic.Align.new({alignment: src__painting__alignment.Alignment.centerLeft, child: new src__widgets__basic.Padding.new({padding: const$388 || (const$388 = dart.const(new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 20.0, horizontal: 15.0}))), child: new src__widgets__text.Text.new("Power-Ups", {style: utils$.Utils.textStyle(12.0), $creationLocationd_0dea112b090073317d4: const$392 || (const$392 = dart.const(new src__widgets__widget_inspector._Location.new({line: 433, column: 28, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$391 || (const$391 = dart.constList([const$389 || (const$389 = dart.const(new src__widgets__widget_inspector._Location.new({line: 434, column: 23, name: "data"}))), const$390 || (const$390 = dart.const(new src__widgets__widget_inspector._Location.new({line: 435, column: 23, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$396 || (const$396 = dart.const(new src__widgets__widget_inspector._Location.new({line: 431, column: 26, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$395 || (const$395 = dart.constList([const$393 || (const$393 = dart.const(new src__widgets__widget_inspector._Location.new({line: 432, column: 21, name: "padding"}))), const$394 || (const$394 = dart.const(new src__widgets__widget_inspector._Location.new({line: 433, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$400 || (const$400 = dart.const(new src__widgets__widget_inspector._Location.new({line: 429, column: 24, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$399 || (const$399 = dart.constList([const$397 || (const$397 = dart.const(new src__widgets__widget_inspector._Location.new({line: 430, column: 19, name: "alignment"}))), const$398 || (const$398 = dart.const(new src__widgets__widget_inspector._Location.new({line: 431, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$403 || (const$403 = dart.const(new src__widgets__widget_inspector._Location.new({line: 428, column: 15, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$402 || (const$402 = dart.constList([const$401 || (const$401 = dart.const(new src__widgets__widget_inspector._Location.new({line: 429, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Align.new({alignment: src__painting__alignment.Alignment.centerRight, child: new src__widgets__basic.Padding.new({padding: const$404 || (const$404 = dart.const(new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 20.0, horizontal: 15.0}))), child: new button$.FancyButton.new({size: 20.0, color: new ui$.Color.new(4284984411), child: new src__widgets__basic.Padding.new({padding: const$405 || (const$405 = dart.const(new src__painting__edge_insets.EdgeInsets.all(8.0))), child: new src__widgets__text.Text.new("SHARE SCORE", {style: utils$.Utils.textStyle(12.0), $creationLocationd_0dea112b090073317d4: const$409 || (const$409 = dart.const(new src__widgets__widget_inspector._Location.new({line: 449, column: 30, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$408 || (const$408 = dart.constList([const$406 || (const$406 = dart.const(new src__widgets__widget_inspector._Location.new({line: 450, column: 25, name: "data"}))), const$407 || (const$407 = dart.const(new src__widgets__widget_inspector._Location.new({line: 451, column: 25, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$413 || (const$413 = dart.const(new src__widgets__widget_inspector._Location.new({line: 447, column: 28, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$412 || (const$412 = dart.constList([const$410 || (const$410 = dart.const(new src__widgets__widget_inspector._Location.new({line: 448, column: 23, name: "padding"}))), const$411 || (const$411 = dart.const(new src__widgets__widget_inspector._Location.new({line: 449, column: 23, name: "child"})))], src__widgets__widget_inspector._Location))})))}), onPressed: dart.bind(this, 'share'), $creationLocationd_0dea112b090073317d4: const$419 || (const$419 = dart.const(new src__widgets__widget_inspector._Location.new({line: 444, column: 26, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$418 || (const$418 = dart.constList([const$414 || (const$414 = dart.const(new src__widgets__widget_inspector._Location.new({line: 445, column: 21, name: "size"}))), const$415 || (const$415 = dart.const(new src__widgets__widget_inspector._Location.new({line: 446, column: 21, name: "color"}))), const$416 || (const$416 = dart.const(new src__widgets__widget_inspector._Location.new({line: 447, column: 21, name: "child"}))), const$417 || (const$417 = dart.const(new src__widgets__widget_inspector._Location.new({line: 454, column: 21, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$423 || (const$423 = dart.const(new src__widgets__widget_inspector._Location.new({line: 442, column: 24, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$422 || (const$422 = dart.constList([const$420 || (const$420 = dart.const(new src__widgets__widget_inspector._Location.new({line: 443, column: 19, name: "padding"}))), const$421 || (const$421 = dart.const(new src__widgets__widget_inspector._Location.new({line: 444, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$427 || (const$427 = dart.const(new src__widgets__widget_inspector._Location.new({line: 440, column: 15, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$426 || (const$426 = dart.constList([const$424 || (const$424 = dart.const(new src__widgets__widget_inspector._Location.new({line: 441, column: 17, name: "alignment"}))), const$425 || (const$425 = dart.const(new src__widgets__widget_inspector._Location.new({line: 442, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$430 || (const$430 = dart.const(new src__widgets__widget_inspector._Location.new({line: 426, column: 11, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$429 || (const$429 = dart.constList([const$428 || (const$428 = dart.const(new src__widgets__widget_inspector._Location.new({line: 427, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({child: new src__widgets__scroll_configuration.ScrollConfiguration.new({behavior: new scroll$.GlowBehavior.new(), child: new src__widgets__scroll_view.ListView.builder({padding: new src__painting__edge_insets.EdgeInsets.only({bottom: 20.0, left: 10.0, right: 10.0}), itemCount: this.list[$length], itemBuilder: dart.fn((context, position) => {
                    let powerUp = this.list[$_get](position);
                    let bgColor = !dart.test(powerUp.bought) && dart.notNull(this.coins) >= dart.notNull(powerUp.coins) ? 4286611584 : !dart.test(powerUp.bought) ? 4283453520 : 4280295456;
                    return new src__widgets__basic.Padding.new({padding: const$431 || (const$431 = dart.const(new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 5.0}))), child: new src__widgets__container.Container.new({height: 70.0, child: new src__material__card.Card.new({color: new ui$.Color.new(bgColor), child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__basic.Expanded.new({child: new src__widgets__basic.Padding.new({padding: const$432 || (const$432 = dart.const(new src__painting__edge_insets.EdgeInsets.symmetric({horizontal: 20.0}))), child: new src__widgets__text.Text.new(powerUp.name, {style: utils$.Utils.textStyle(11.0), $creationLocationd_0dea112b090073317d4: const$436 || (const$436 = dart.const(new src__widgets__widget_inspector._Location.new({line: 485, column: 40, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$435 || (const$435 = dart.constList([const$433 || (const$433 = dart.const(new src__widgets__widget_inspector._Location.new({line: 486, column: 43, name: "data"}))), const$434 || (const$434 = dart.const(new src__widgets__widget_inspector._Location.new({line: 487, column: 35, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$440 || (const$440 = dart.const(new src__widgets__widget_inspector._Location.new({line: 483, column: 38, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$439 || (const$439 = dart.constList([const$437 || (const$437 = dart.const(new src__widgets__widget_inspector._Location.new({line: 484, column: 33, name: "padding"}))), const$438 || (const$438 = dart.const(new src__widgets__widget_inspector._Location.new({line: 485, column: 33, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$443 || (const$443 = dart.const(new src__widgets__widget_inspector._Location.new({line: 482, column: 29, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$442 || (const$442 = dart.constList([const$441 || (const$441 = dart.const(new src__widgets__widget_inspector._Location.new({line: 483, column: 31, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Padding.new({padding: const$444 || (const$444 = dart.const(new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 8.0, horizontal: 20.0}))), child: new button$.FancyButton.new({size: 20.0, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__basic.Padding.new({padding: const$445 || (const$445 = dart.const(new src__painting__edge_insets.EdgeInsets.only({left: 10.0, bottom: 2.0, top: 2.0}))), child: new src__widgets__text.Text.new(!dart.test(powerUp.bought) ? "BUY" : "BOUGHT", {style: utils$.Utils.textStyle(13.0, {color: !dart.test(powerUp.bought) ? src__material__colors.Colors.white : src__material__colors.Colors.grey}), $creationLocationd_0dea112b090073317d4: const$449 || (const$449 = dart.const(new src__widgets__widget_inspector._Location.new({line: 499, column: 46, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$448 || (const$448 = dart.constList([const$446 || (const$446 = dart.const(new src__widgets__widget_inspector._Location.new({line: 500, column: 57, name: "data"}))), const$447 || (const$447 = dart.const(new src__widgets__widget_inspector._Location.new({line: 501, column: 41, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$453 || (const$453 = dart.const(new src__widgets__widget_inspector._Location.new({line: 497, column: 37, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$452 || (const$452 = dart.constList([const$450 || (const$450 = dart.const(new src__widgets__widget_inspector._Location.new({line: 498, column: 39, name: "padding"}))), const$451 || (const$451 = dart.const(new src__widgets__widget_inspector._Location.new({line: 499, column: 39, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.only({left: 8.0, right: !dart.test(powerUp.bought) ? 2.0 : 0.0}), child: new src__widgets__text.Text.new(!dart.test(powerUp.bought) ? dart.toString(powerUp.coins) : "", {style: utils$.Utils.textStyle(13.0), $creationLocationd_0dea112b090073317d4: const$457 || (const$457 = dart.const(new src__widgets__widget_inspector._Location.new({line: 507, column: 46, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$456 || (const$456 = dart.constList([const$454 || (const$454 = dart.const(new src__widgets__widget_inspector._Location.new({line: 508, column: 57, name: "data"}))), const$455 || (const$455 = dart.const(new src__widgets__widget_inspector._Location.new({line: 509, column: 41, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$461 || (const$461 = dart.const(new src__widgets__widget_inspector._Location.new({line: 505, column: 37, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$460 || (const$460 = dart.constList([const$458 || (const$458 = dart.const(new src__widgets__widget_inspector._Location.new({line: 506, column: 39, name: "padding"}))), const$459 || (const$459 = dart.const(new src__widgets__widget_inspector._Location.new({line: 507, column: 39, name: "child"})))], src__widgets__widget_inspector._Location))})))}), this.coinVisibility(powerUp.bought)]), $creationLocationd_0dea112b090073317d4: const$464 || (const$464 = dart.const(new src__widgets__widget_inspector._Location.new({line: 495, column: 40, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$463 || (const$463 = dart.constList([const$462 || (const$462 = dart.const(new src__widgets__widget_inspector._Location.new({line: 496, column: 35, name: "children"})))], src__widgets__widget_inspector._Location))})))}), color: !dart.test(powerUp.bought) && dart.notNull(this.coins) >= dart.notNull(powerUp.coins) ? src__material__colors.Colors.deepPurpleAccent : src__material__colors.Colors.deepPurple, onPressed: !dart.test(powerUp.bought) && dart.notNull(this.coins) >= dart.notNull(powerUp.coins) ? dart.fn(() => this.buyPowerUp(position), VoidTovoid()) : null, $creationLocationd_0dea112b090073317d4: const$470 || (const$470 = dart.const(new src__widgets__widget_inspector._Location.new({line: 493, column: 38, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$469 || (const$469 = dart.constList([const$465 || (const$465 = dart.const(new src__widgets__widget_inspector._Location.new({line: 494, column: 33, name: "size"}))), const$466 || (const$466 = dart.const(new src__widgets__widget_inspector._Location.new({line: 495, column: 33, name: "child"}))), const$467 || (const$467 = dart.const(new src__widgets__widget_inspector._Location.new({line: 515, column: 33, name: "color"}))), const$468 || (const$468 = dart.const(new src__widgets__widget_inspector._Location.new({line: 518, column: 33, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$474 || (const$474 = dart.const(new src__widgets__widget_inspector._Location.new({line: 491, column: 29, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$473 || (const$473 = dart.constList([const$471 || (const$471 = dart.const(new src__widgets__widget_inspector._Location.new({line: 492, column: 31, name: "padding"}))), const$472 || (const$472 = dart.const(new src__widgets__widget_inspector._Location.new({line: 493, column: 31, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$477 || (const$477 = dart.const(new src__widgets__widget_inspector._Location.new({line: 480, column: 32, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$476 || (const$476 = dart.constList([const$475 || (const$475 = dart.const(new src__widgets__widget_inspector._Location.new({line: 481, column: 27, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$481 || (const$481 = dart.const(new src__widgets__widget_inspector._Location.new({line: 478, column: 30, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$480 || (const$480 = dart.constList([const$478 || (const$478 = dart.const(new src__widgets__widget_inspector._Location.new({line: 479, column: 25, name: "color"}))), const$479 || (const$479 = dart.const(new src__widgets__widget_inspector._Location.new({line: 480, column: 25, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$485 || (const$485 = dart.const(new src__widgets__widget_inspector._Location.new({line: 476, column: 28, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$484 || (const$484 = dart.constList([const$482 || (const$482 = dart.const(new src__widgets__widget_inspector._Location.new({line: 477, column: 23, name: "height"}))), const$483 || (const$483 = dart.const(new src__widgets__widget_inspector._Location.new({line: 478, column: 23, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$489 || (const$489 = dart.const(new src__widgets__widget_inspector._Location.new({line: 472, column: 26, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$488 || (const$488 = dart.constList([const$486 || (const$486 = dart.const(new src__widgets__widget_inspector._Location.new({line: 473, column: 21, name: "padding"}))), const$487 || (const$487 = dart.const(new src__widgets__widget_inspector._Location.new({line: 476, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))});
                  }, BuildContextAndintToPadding()), $creationLocationd_0dea112b090073317d4: const$494 || (const$494 = dart.const(new src__widgets__widget_inspector._Location.new({line: 463, column: 31, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$493 || (const$493 = dart.constList([const$490 || (const$490 = dart.const(new src__widgets__widget_inspector._Location.new({line: 464, column: 17, name: "padding"}))), const$491 || (const$491 = dart.const(new src__widgets__widget_inspector._Location.new({line: 465, column: 17, name: "itemCount"}))), const$492 || (const$492 = dart.const(new src__widgets__widget_inspector._Location.new({line: 466, column: 17, name: "itemBuilder"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$498 || (const$498 = dart.const(new src__widgets__widget_inspector._Location.new({line: 461, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$497 || (const$497 = dart.constList([const$495 || (const$495 = dart.const(new src__widgets__widget_inspector._Location.new({line: 462, column: 15, name: "behavior"}))), const$496 || (const$496 = dart.const(new src__widgets__widget_inspector._Location.new({line: 463, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$501 || (const$501 = dart.const(new src__widgets__widget_inspector._Location.new({line: 460, column: 11, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$500 || (const$500 = dart.constList([const$499 || (const$499 = dart.const(new src__widgets__widget_inspector._Location.new({line: 461, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$505 || (const$505 = dart.const(new src__widgets__widget_inspector._Location.new({line: 423, column: 14, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$504 || (const$504 = dart.constList([const$502 || (const$502 = dart.const(new src__widgets__widget_inspector._Location.new({line: 424, column: 9, name: "mainAxisAlignment"}))), const$503 || (const$503 = dart.const(new src__widgets__widget_inspector._Location.new({line: 425, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$511 || (const$511 = dart.const(new src__widgets__widget_inspector._Location.new({line: 417, column: 12, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$510 || (const$510 = dart.constList([const$506 || (const$506 = dart.const(new src__widgets__widget_inspector._Location.new({line: 418, column: 7, name: "color"}))), const$507 || (const$507 = dart.const(new src__widgets__widget_inspector._Location.new({line: 419, column: 7, name: "height"}))), const$508 || (const$508 = dart.const(new src__widgets__widget_inspector._Location.new({line: 420, column: 7, name: "width"}))), const$509 || (const$509 = dart.const(new src__widgets__widget_inspector._Location.new({line: 423, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    initAudio() {
      this.audio = html.AudioElement.new("assets/audio/bgmusic.mp3");
      this.audio.autoplay = true;
      this.audio.loop = true;
      this.audio.volume = 0.5;
      html.document.body[$append](this.audio);
      this.musicPlaying = true;
    }
    initAudioGameOver() {
      this.audio = html.AudioElement.new("assets/audio/game_over.mp3");
      this.audio.autoplay = true;
      this.audio.loop = true;
      this.audio.volume = 0.5;
      html.document.body[$append](this.audio);
      this.musicPlaying = true;
    }
    initClock(opts) {
      let add = opts && 'add' in opts ? opts.add : null;
      if (this.controller == null) {
        this.durationBackup = this.duration;
      } else {
        let currentDuration = this.controller.duration['*'](this.controller.value);
        this.durationBackup = currentDuration.inMilliseconds;
        this.controller.stop();
      }
      this.controller = null;
      this.controller = new src__animation__animation_controller.AnimationController.new({vsync: this, duration: new core.Duration.new({milliseconds: dart.notNull(this.durationBackup) + dart.notNull(add)})});
      this.controller.reverse({from: this.controller.value === 0.0 ? 1.0 : this.controller.value});
      this.controller.addListener(dart.fn(() => {
        this.setState(dart.fn(() => {
          this.timerString;
          let duration = this.controller.duration['*'](this.controller.value);
          if (dart.notNull(duration.inMinutes) >= 0 && duration.inSeconds[$modulo](60) > 20) {
            this.clockColor = new ui$.Color.new(4284984411);
          }
          if (duration.inMinutes === 0 && duration.inSeconds[$modulo](60) < 20) {
            this.clockColor = new ui$.Color.new(4293747511);
          }
          if (duration.inMinutes === 0 && duration.inSeconds[$modulo](60) < 10) {
            this.clockColor = new ui$.Color.new(4291440692);
          }
        }, VoidToNull()));
      }, VoidToNull()));
      this.controller.addStatusListener(dart.fn(status => {
        if (dart.equals(status, src__animation__animation.AnimationStatus.dismissed)) {
          this.setState(dart.fn(() => {
            this.gameOver = true;
          }, VoidToNull()));
        }
      }, AnimationStatusToNull()));
    }
    didChangeDependencies() {
      super.didChangeDependencies();
    }
    deactivate() {
      if (this.audio != null) {
        this.audio.pause();
        this.audio[$remove]();
        this.musicPlaying = false;
      }
      super.deactivate();
    }
    initState() {
      super.initState();
      this.initClock({add: 0});
      this.onEarnTime = dart.fn(() => {
        this.initClock({add: game._GameState.addedDuration});
      }, VoidToNull());
      game._GameState.damageBar = this.bosses[$_get](this.bossIndex).life[$toDouble]() * dart.notNull(game._GameState.multiplier);
      this.initAudio();
      src__widgets__binding.WidgetsBinding.instance.addObserver(this);
    }
    dispose() {
      src__widgets__binding.WidgetsBinding.instance.removeObserver(this);
      super.dispose();
    }
    didChangeAppLifecycleState(state) {
      super.didChangeAppLifecycleState(state);
    }
    switchMusic(opts) {
      let remove = opts && 'remove' in opts ? opts.remove : null;
      if (dart.test(this.musicPlaying)) {
        this.audio.pause();
        if (dart.test(remove)) {
          this.audio[$remove]();
        }
        this.musicPlaying = false;
      } else {
        this.audio[$play]();
        this.musicPlaying = true;
      }
    }
    showGameOver() {
      if (dart.test(this.gameOver)) {
        if (dart.test(this.musicPlaying)) {
          this.musicPlaying = false;
          this.audio.pause();
        }
        if (!dart.test(this.musicPlaying)) {
          this.musicPlaying = true;
          this.initAudioGameOver();
        }
        return new src__widgets__basic.Stack.new({children: JSArrayOfWidget().of([new src__widgets__container.Container.new({color: new ui$.Color.new(3992977408), $creationLocationd_0dea112b090073317d4: const$514 || (const$514 = dart.const(new src__widgets__widget_inspector._Location.new({line: 659, column: 11, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$513 || (const$513 = dart.constList([const$512 || (const$512 = dart.const(new src__widgets__widget_inspector._Location.new({line: 660, column: 13, name: "color"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Padding.new({padding: const$515 || (const$515 = dart.const(new src__painting__edge_insets.EdgeInsets.all(20.0))), child: new src__widgets__basic.Center.new({child: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.center, children: JSArrayOfWidget().of([new button$.FancyButton.new({child: new src__widgets__text.Text.new("GAME OVER", {textAlign: ui$.TextAlign.center, style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontSize: dart.notNull(this.width(this.context)) / 12, fontFamily: "Gameplay"}), $creationLocationd_0dea112b090073317d4: const$520 || (const$520 = dart.const(new src__widgets__widget_inspector._Location.new({line: 669, column: 28, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$519 || (const$519 = dart.constList([const$516 || (const$516 = dart.const(new src__widgets__widget_inspector._Location.new({line: 670, column: 23, name: "data"}))), const$517 || (const$517 = dart.const(new src__widgets__widget_inspector._Location.new({line: 671, column: 23, name: "textAlign"}))), const$518 || (const$518 = dart.const(new src__widgets__widget_inspector._Location.new({line: 672, column: 23, name: "style"})))], src__widgets__widget_inspector._Location))})))}), size: dart.notNull(this.width(this.context)) / 10, color: new ui$.Color.new(4291440692), onPressed: dart.fn(() => {
                        src__widgets__navigator.Navigator.of(this.context).pop(core.Object);
                      }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$526 || (const$526 = dart.const(new src__widgets__widget_inspector._Location.new({line: 668, column: 19, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$525 || (const$525 = dart.constList([const$521 || (const$521 = dart.const(new src__widgets__widget_inspector._Location.new({line: 669, column: 21, name: "child"}))), const$522 || (const$522 = dart.const(new src__widgets__widget_inspector._Location.new({line: 678, column: 21, name: "size"}))), const$523 || (const$523 = dart.const(new src__widgets__widget_inspector._Location.new({line: 679, column: 21, name: "color"}))), const$524 || (const$524 = dart.const(new src__widgets__widget_inspector._Location.new({line: 680, column: 21, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Padding.new({padding: const$527 || (const$527 = dart.const(new src__painting__edge_insets.EdgeInsets.only({top: 30.0}))), child: new button$.FancyButton.new({child: new src__widgets__basic.Padding.new({padding: const$528 || (const$528 = dart.const(new src__painting__edge_insets.EdgeInsets.symmetric({horizontal: 15.0, vertical: 5.0}))), child: new src__widgets__text.Text.new("SHARE SCORE", {textAlign: ui$.TextAlign.center, style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontSize: dart.notNull(this.width(this.context)) / 25, fontFamily: "Gameplay"}), $creationLocationd_0dea112b090073317d4: const$533 || (const$533 = dart.const(new src__widgets__widget_inspector._Location.new({line: 689, column: 32, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$532 || (const$532 = dart.constList([const$529 || (const$529 = dart.const(new src__widgets__widget_inspector._Location.new({line: 690, column: 27, name: "data"}))), const$530 || (const$530 = dart.const(new src__widgets__widget_inspector._Location.new({line: 691, column: 27, name: "textAlign"}))), const$531 || (const$531 = dart.const(new src__widgets__widget_inspector._Location.new({line: 692, column: 27, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$537 || (const$537 = dart.const(new src__widgets__widget_inspector._Location.new({line: 687, column: 30, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$536 || (const$536 = dart.constList([const$534 || (const$534 = dart.const(new src__widgets__widget_inspector._Location.new({line: 688, column: 25, name: "padding"}))), const$535 || (const$535 = dart.const(new src__widgets__widget_inspector._Location.new({line: 689, column: 25, name: "child"})))], src__widgets__widget_inspector._Location))})))}), size: dart.notNull(this.width(this.context)) / 20, color: new ui$.Color.new(4284984411), onPressed: dart.bind(this, 'share'), $creationLocationd_0dea112b090073317d4: const$543 || (const$543 = dart.const(new src__widgets__widget_inspector._Location.new({line: 686, column: 28, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$542 || (const$542 = dart.constList([const$538 || (const$538 = dart.const(new src__widgets__widget_inspector._Location.new({line: 687, column: 23, name: "child"}))), const$539 || (const$539 = dart.const(new src__widgets__widget_inspector._Location.new({line: 699, column: 23, name: "size"}))), const$540 || (const$540 = dart.const(new src__widgets__widget_inspector._Location.new({line: 700, column: 23, name: "color"}))), const$541 || (const$541 = dart.const(new src__widgets__widget_inspector._Location.new({line: 701, column: 23, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$547 || (const$547 = dart.const(new src__widgets__widget_inspector._Location.new({line: 684, column: 19, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$546 || (const$546 = dart.constList([const$544 || (const$544 = dart.const(new src__widgets__widget_inspector._Location.new({line: 685, column: 21, name: "padding"}))), const$545 || (const$545 = dart.const(new src__widgets__widget_inspector._Location.new({line: 686, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$551 || (const$551 = dart.const(new src__widgets__widget_inspector._Location.new({line: 665, column: 22, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$550 || (const$550 = dart.constList([const$548 || (const$548 = dart.const(new src__widgets__widget_inspector._Location.new({line: 666, column: 17, name: "mainAxisAlignment"}))), const$549 || (const$549 = dart.const(new src__widgets__widget_inspector._Location.new({line: 667, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$554 || (const$554 = dart.const(new src__widgets__widget_inspector._Location.new({line: 664, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$553 || (const$553 = dart.constList([const$552 || (const$552 = dart.const(new src__widgets__widget_inspector._Location.new({line: 665, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$558 || (const$558 = dart.const(new src__widgets__widget_inspector._Location.new({line: 662, column: 11, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$557 || (const$557 = dart.constList([const$555 || (const$555 = dart.const(new src__widgets__widget_inspector._Location.new({line: 663, column: 13, name: "padding"}))), const$556 || (const$556 = dart.const(new src__widgets__widget_inspector._Location.new({line: 664, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$561 || (const$561 = dart.const(new src__widgets__widget_inspector._Location.new({line: 657, column: 14, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$560 || (const$560 = dart.constList([const$559 || (const$559 = dart.const(new src__widgets__widget_inspector._Location.new({line: 658, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))});
      } else {
        return new src__widgets__container.Container.new({$creationLocationd_0dea112b090073317d4: const$563 || (const$563 = dart.const(new src__widgets__widget_inspector._Location.new({line: 711, column: 14, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$562 || (const$562 = dart.constList([], src__widgets__widget_inspector._Location))})))});
      }
    }
    [_backHome]() {
      return async.async(core.bool, (function* _backHome() {
        return yield src__widgets__navigator.Navigator.pop(core.bool, this.context, true);
      }).bind(this));
    }
    build(context) {
      return new src__widgets__will_pop_scope.WillPopScope.new({onWillPop: dart.bind(this, _backHome), child: new src__widgets__layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => new src__material__material.Material.new({child: new src__widgets__basic.Stack.new({children: JSArrayOfWidget().of([this.gameEngine(context), this.showGameOver(), new src__widgets__text.Text.new(this.textEnd, {style: new src__painting__text_style.TextStyle.new({fontSize: 100.0}), $creationLocationd_0dea112b090073317d4: const$567 || (const$567 = dart.const(new src__widgets__widget_inspector._Location.new({line: 729, column: 15, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$566 || (const$566 = dart.constList([const$564 || (const$564 = dart.const(new src__widgets__widget_inspector._Location.new({line: 729, column: 20, name: "data"}))), const$565 || (const$565 = dart.const(new src__widgets__widget_inspector._Location.new({line: 729, column: 29, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$570 || (const$570 = dart.const(new src__widgets__widget_inspector._Location.new({line: 725, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$569 || (const$569 = dart.constList([const$568 || (const$568 = dart.const(new src__widgets__widget_inspector._Location.new({line: 726, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$573 || (const$573 = dart.const(new src__widgets__widget_inspector._Location.new({line: 724, column: 16, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$572 || (const$572 = dart.constList([const$571 || (const$571 = dart.const(new src__widgets__widget_inspector._Location.new({line: 725, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), BuildContextAndBoxConstraintsToMaterial()), $creationLocationd_0dea112b090073317d4: const$576 || (const$576 = dart.const(new src__widgets__widget_inspector._Location.new({line: 723, column: 14, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$575 || (const$575 = dart.constList([const$574 || (const$574 = dart.const(new src__widgets__widget_inspector._Location.new({line: 723, column: 28, name: "builder"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$580 || (const$580 = dart.const(new src__widgets__widget_inspector._Location.new({line: 721, column: 12, file: "org-dartlang-app:///packages/tap_hero_web/game.dart", parameterLocations: const$579 || (const$579 = dart.constList([const$577 || (const$577 = dart.const(new src__widgets__widget_inspector._Location.new({line: 722, column: 7, name: "onWillPop"}))), const$578 || (const$578 = dart.const(new src__widgets__widget_inspector._Location.new({line: 723, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (game._GameState.new = function() {
    this.controller = null;
    this.duration = 1000 * 30;
    this.durationBackup = null;
    this.list = utils$.Utils.getPowerUps();
    this.coins = 0;
    this.bosses = utils$.Utils.getBosses();
    this.bossIndex = 0;
    this.level = 1;
    this.tap = false;
    this.xAxis = 0.0;
    this.yAxis = 0.0;
    this.earnedCoin = false;
    this.threshold = false;
    this.musicPlaying = false;
    this.audio = null;
    this.onEarnTime = null;
    this.gameOver = false;
    this.clockColor = new ui$.Color.new(4284984411);
    this.textEnd = "";
    game._GameState.__proto__.new.call(this);
    ;
  }).prototype = game._GameState.prototype;
  dart.addTypeTests(game._GameState);
  dart.setMethodSignature(game._GameState, () => ({
    __proto__: dart.getMethods(game._GameState.__proto__),
    damage: dart.fnType(dart.void, [src__gestures__tap.TapDownDetails]),
    hide: dart.fnType(dart.void, [src__gestures__tap.TapUpDetails]),
    width: dart.fnType(core.double, [src__widgets__framework.BuildContext]),
    height: dart.fnType(core.double, [src__widgets__framework.BuildContext]),
    listHeight: dart.fnType(core.double, [src__widgets__framework.BuildContext]),
    buyPowerUp: dart.fnType(dart.void, [core.int]),
    coinVisibility: dart.fnType(src__widgets__framework.Widget, [core.bool]),
    earnedCoins: dart.fnType(src__widgets__framework.Widget, []),
    hitBox: dart.fnType(src__widgets__framework.Widget, []),
    hero: dart.fnType(core.String, []),
    share: dart.fnType(dart.void, []),
    gameEngine: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    gamePanel: dart.fnType(src__widgets__framework.Widget, []),
    sidePanel: dart.fnType(src__widgets__framework.Widget, []),
    initAudio: dart.fnType(dart.void, []),
    initAudioGameOver: dart.fnType(dart.void, []),
    initClock: dart.fnType(dart.void, [], {add: core.int}),
    switchMusic: dart.fnType(dart.void, [], {remove: core.bool}),
    showGameOver: dart.fnType(src__widgets__framework.Widget, []),
    [_backHome]: dart.fnType(async.Future$(core.bool), []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setGetterSignature(game._GameState, () => ({
    __proto__: dart.getGetters(game._GameState.__proto__),
    timerString: core.String
  }));
  dart.setLibraryUri(game._GameState, "package:tap_hero_web/game.dart");
  dart.setFieldSignature(game._GameState, () => ({
    __proto__: dart.getFields(game._GameState.__proto__),
    controller: dart.fieldType(src__animation__animation_controller.AnimationController),
    duration: dart.fieldType(core.int),
    durationBackup: dart.fieldType(core.int),
    list: dart.fieldType(core.List$(powerups$.PowerUps)),
    coins: dart.fieldType(core.int),
    bosses: dart.fieldType(core.List$(bosses$.Bosses)),
    bossIndex: dart.fieldType(core.int),
    level: dart.fieldType(core.int),
    tap: dart.fieldType(core.bool),
    xAxis: dart.fieldType(core.double),
    yAxis: dart.fieldType(core.double),
    earnedCoin: dart.fieldType(core.bool),
    threshold: dart.fieldType(core.bool),
    musicPlaying: dart.fieldType(core.bool),
    audio: dart.fieldType(html.AudioElement),
    onEarnTime: dart.fieldType(dart.fnType(dart.void, [])),
    gameOver: dart.fieldType(core.bool),
    clockColor: dart.fieldType(ui$.Color),
    textEnd: dart.fieldType(core.String)
  }));
  dart.defineLazy(game._GameState, {
    /*game._GameState.multiplier*/get multiplier() {
      return 1.0;
    },
    set multiplier(_) {},
    /*game._GameState.damageDefault*/get damageDefault() {
      return 980.0;
    },
    set damageDefault(_) {},
    /*game._GameState.damageBar*/get damageBar() {
      return game._GameState.damageDefault;
    },
    set damageBar(_) {},
    /*game._GameState.damageUser*/get damageUser() {
      return 30.0;
    },
    set damageUser(_) {},
    /*game._GameState.addedDuration*/get addedDuration() {
      return 1000 * 10;
    },
    set addedDuration(_) {}
  });
  dart.trackLibraries("packages/tap_hero_web/game", {
    "package:tap_hero_web/welcome.dart": welcome,
    "package:tap_hero_web/game.dart": game
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/tap_hero_web/welcome.dart","org-dartlang-app:///packages/tap_hero_web/game.dart"],"names":[],"mappings":"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","file":"game.ddc.js"}');
  // Exports:
  return {
    welcome: welcome,
    game: game
  };
});

//# sourceMappingURL=game.ddc.js.map
