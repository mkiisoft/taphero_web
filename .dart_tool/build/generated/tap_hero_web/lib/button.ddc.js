define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material', 'packages/flutter_web/scheduler'], function(dart_sdk, animation, ui, animation$, material, scheduler) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__animation__animation_controller = animation.src__animation__animation_controller;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__widgets__gesture_detector = animation.src__widgets__gesture_detector;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__transitions = animation.src__widgets__transitions;
  const src__rendering__stack = animation.src__rendering__stack;
  const src__widgets__ticker_provider = animation.src__widgets__ticker_provider;
  const ui$ = ui.ui;
  const src__animation__tween = animation$.src__animation__tween;
  const src__animation__animations = animation$.src__animation__animations;
  const src__animation__curves = animation$.src__animation__curves;
  const src__painting__border_radius = animation$.src__painting__border_radius;
  const src__painting__colors = animation$.src__painting__colors;
  const src__animation__animation = animation$.src__animation__animation;
  const src__material__colors = material.src__material__colors;
  const src__scheduler__ticker = scheduler.src__scheduler__ticker;
  const button = Object.create(dart.library);
  const $truncate = dartx.truncate;
  const $clamp = dartx.clamp;
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(src__animation__tween.Tween$(core.double)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let BuildContextAndWidgetToTransform = () => (BuildContextAndWidgetToTransform = dart.constFn(dart.fnType(src__widgets__basic.Transform, [src__widgets__framework.BuildContext, src__widgets__framework.Widget])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let const$;
  button.FancyButton = class FancyButton extends src__widgets__framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    createState() {
      return new button._FancyButtonState.new();
    }
  };
  (button.FancyButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let duration = opts && 'duration' in opts ? opts.duration : const$ || (const$ = dart.const(new core.Duration.new({milliseconds: 160})));
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[size$] = size;
    this[color$] = color;
    this[duration$] = duration;
    this[onPressed$] = onPressed;
    button.FancyButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = button.FancyButton.prototype;
  dart.addTypeTests(button.FancyButton);
  const child$ = Symbol("FancyButton.child");
  const color$ = Symbol("FancyButton.color");
  const duration$ = Symbol("FancyButton.duration");
  const onPressed$ = Symbol("FancyButton.onPressed");
  const size$ = Symbol("FancyButton.size");
  dart.setMethodSignature(button.FancyButton, () => ({
    __proto__: dart.getMethods(button.FancyButton.__proto__),
    createState: dart.fnType(button._FancyButtonState, [])
  }));
  dart.setLibraryUri(button.FancyButton, "package:tap_hero_web/button.dart");
  dart.setFieldSignature(button.FancyButton, () => ({
    __proto__: dart.getFields(button.FancyButton.__proto__),
    child: dart.finalFieldType(src__widgets__framework.Widget),
    color: dart.finalFieldType(ui$.Color),
    duration: dart.finalFieldType(core.Duration),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, [])),
    size: dart.finalFieldType(core.double)
  }));
  const _animationController = dart.privateName(button, "_animationController");
  const _pressedAnimation = dart.privateName(button, "_pressedAnimation");
  const _downTicker = dart.privateName(button, "_downTicker");
  const _setupAnimation = dart.privateName(button, "_setupAnimation");
  const _onTapDown = dart.privateName(button, "_onTapDown");
  const _onTapUp = dart.privateName(button, "_onTapUp");
  const _onTapCancel = dart.privateName(button, "_onTapCancel");
  const _hslRelativeColor = dart.privateName(button, "_hslRelativeColor");
  let const$0;
  let const$1;
  let const$2;
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
  const State_TickerProviderStateMixin$ = class State_TickerProviderStateMixin extends src__widgets__framework.State$(button.FancyButton) {};
  (State_TickerProviderStateMixin$.new = function() {
    src__widgets__ticker_provider.TickerProviderStateMixin$(button.FancyButton)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$, src__widgets__ticker_provider.TickerProviderStateMixin$(button.FancyButton));
  button._FancyButtonState = class _FancyButtonState extends State_TickerProviderStateMixin$ {
    get buttonDepth() {
      return dart.notNull(this.widget.size) * 0.2;
    }
    [_setupAnimation]() {
      let t0, t0$, t0$0, t0$1;
      t0 = this[_animationController];
      t0 == null ? null : t0.stop();
      let oldControllerValue = (t0$0 = (t0$ = this[_animationController], t0$ == null ? null : t0$.value), t0$0 == null ? 0.0 : t0$0);
      t0$1 = this[_animationController];
      t0$1 == null ? null : t0$1.dispose();
      this[_animationController] = new src__animation__animation_controller.AnimationController.new({duration: new core.Duration.new({microseconds: (dart.notNull(this.widget.duration.inMicroseconds) / 2)[$truncate]()}), vsync: this, value: oldControllerValue});
      this[_pressedAnimation] = new (TweenOfdouble()).new({begin: -dart.notNull(this.buttonDepth), end: 0.0}).animate(new src__animation__animations.CurvedAnimation.new({parent: this[_animationController], curve: src__animation__curves.Curves.easeInOut}));
    }
    didUpdateWidget(oldWidget) {
      button.FancyButton._check(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!dart.equals(oldWidget.duration, this.widget.duration)) {
        this[_setupAnimation]();
      }
    }
    didChangeDependencies() {
      super.didChangeDependencies();
      this[_setupAnimation]();
    }
    dispose() {
      this[_animationController].dispose();
      super.dispose();
    }
    [_onTapDown](_) {
      if (this.widget.onPressed != null) {
        this[_downTicker] = this[_animationController].animateTo(1.0);
      }
    }
    [_onTapUp](_) {
      if (this.widget.onPressed != null) {
        this[_downTicker].whenComplete(dart.fn(() => {
          let t0;
          this[_animationController].animateTo(0.0);
          t0 = this.widget.onPressed;
          t0 == null ? null : t0();
        }, VoidToNull()));
      }
    }
    [_onTapCancel]() {
      if (this.widget.onPressed != null) {
        this[_animationController].reset();
      }
    }
    build(context) {
      let vertPadding = dart.notNull(this.widget.size) * 0.25;
      let horzPadding = dart.notNull(this.widget.size) * 0.5;
      let radius = new src__painting__border_radius.BorderRadius.circular(horzPadding * 0.5);
      return new src__widgets__container.Container.new({padding: this.widget.onPressed != null ? new src__painting__edge_insets.EdgeInsets.only({bottom: 2.0, left: 0.5, right: 0.5}) : null, decoration: new src__painting__box_decoration.BoxDecoration.new({color: src__material__colors.Colors.black87, borderRadius: radius}), child: new src__widgets__gesture_detector.GestureDetector.new({onTapDown: dart.bind(this, _onTapDown), onTapUp: dart.bind(this, _onTapUp), onTapCancel: dart.bind(this, _onTapCancel), child: new src__widgets__basic.IntrinsicWidth.new({child: new src__widgets__basic.IntrinsicHeight.new({child: new src__widgets__basic.Stack.new({children: JSArrayOfWidget().of([new src__widgets__container.Container.new({decoration: new src__painting__box_decoration.BoxDecoration.new({color: this[_hslRelativeColor]({s: -0.2, l: -0.2}), borderRadius: radius}), $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 107, column: 17, file: "org-dartlang-app:///packages/tap_hero_web/button.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 108, column: 19, name: "decoration"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__transitions.AnimatedBuilder.new({animation: this[_pressedAnimation], builder: dart.fn((context, child) => new src__widgets__basic.Transform.translate({offset: new ui$.Offset.new(0.0, this[_pressedAnimation].value), child: child, $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 116, column: 38, file: "org-dartlang-app:///packages/tap_hero_web/button.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 117, column: 23, name: "offset"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 118, column: 23, name: "child"})))], src__widgets__widget_inspector._Location))})))}), BuildContextAndWidgetToTransform()), child: new src__widgets__basic.Stack.new({overflow: src__rendering__stack.Overflow.visible, children: JSArrayOfWidget().of([new src__widgets__basic.ClipRRect.new({borderRadius: radius, child: new src__widgets__basic.Stack.new({children: JSArrayOfWidget().of([new src__widgets__container.DecoratedBox.new({decoration: new src__painting__box_decoration.BoxDecoration.new({color: this[_hslRelativeColor]({l: 0.06}), borderRadius: radius}), child: new src__widgets__basic.SizedBox.expand({$creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 133, column: 47, file: "org-dartlang-app:///packages/tap_hero_web/button.dart", parameterLocations: const$7 || (const$7 = dart.constList([], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 128, column: 29, file: "org-dartlang-app:///packages/tap_hero_web/button.dart", parameterLocations: const$11 || (const$11 = dart.constList([const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 129, column: 31, name: "decoration"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 133, column: 31, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Transform.translate({offset: new ui$.Offset.new(0.0, vertPadding * 2), child: new src__widgets__container.DecoratedBox.new({decoration: new src__painting__box_decoration.BoxDecoration.new({color: this[_hslRelativeColor](), borderRadius: radius}), child: new src__widgets__basic.SizedBox.expand({$creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 142, column: 49, file: "org-dartlang-app:///packages/tap_hero_web/button.dart", parameterLocations: const$13 || (const$13 = dart.constList([], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 137, column: 38, file: "org-dartlang-app:///packages/tap_hero_web/button.dart", parameterLocations: const$17 || (const$17 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 138, column: 33, name: "decoration"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 142, column: 33, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 135, column: 39, file: "org-dartlang-app:///packages/tap_hero_web/button.dart", parameterLocations: const$21 || (const$21 = dart.constList([const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 136, column: 31, name: "offset"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 137, column: 31, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 126, column: 32, file: "org-dartlang-app:///packages/tap_hero_web/button.dart", parameterLocations: const$24 || (const$24 = dart.constList([const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 127, column: 27, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 124, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/button.dart", parameterLocations: const$28 || (const$28 = dart.constList([const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 125, column: 25, name: "borderRadius"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 126, column: 25, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.symmetric({vertical: vertPadding, horizontal: horzPadding}), child: this.widget.child, $creationLocationd_0dea112b090073317d4: const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 148, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/button.dart", parameterLocations: const$32 || (const$32 = dart.constList([const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 149, column: 25, name: "padding"}))), const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 153, column: 25, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 121, column: 26, file: "org-dartlang-app:///packages/tap_hero_web/button.dart", parameterLocations: const$36 || (const$36 = dart.constList([const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 122, column: 21, name: "overflow"}))), const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 123, column: 21, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 113, column: 17, file: "org-dartlang-app:///packages/tap_hero_web/button.dart", parameterLocations: const$41 || (const$41 = dart.constList([const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 114, column: 19, name: "animation"}))), const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 115, column: 19, name: "builder"}))), const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 121, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 20, file: "org-dartlang-app:///packages/tap_hero_web/button.dart", parameterLocations: const$44 || (const$44 = dart.constList([const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 106, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 18, file: "org-dartlang-app:///packages/tap_hero_web/button.dart", parameterLocations: const$47 || (const$47 = dart.constList([const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 103, column: 16, file: "org-dartlang-app:///packages/tap_hero_web/button.dart", parameterLocations: const$50 || (const$50 = dart.constList([const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 14, file: "org-dartlang-app:///packages/tap_hero_web/button.dart", parameterLocations: const$56 || (const$56 = dart.constList([const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 9, name: "onTapDown"}))), const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 101, column: 9, name: "onTapUp"}))), const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 102, column: 9, name: "onTapCancel"}))), const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 103, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 93, column: 12, file: "org-dartlang-app:///packages/tap_hero_web/button.dart", parameterLocations: const$61 || (const$61 = dart.constList([const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 94, column: 7, name: "padding"}))), const$59 || (const$59 = dart.const(new src__widgets__widget_inspector._Location.new({line: 95, column: 7, name: "decoration"}))), const$60 || (const$60 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    [_hslRelativeColor](opts) {
      let h = opts && 'h' in opts ? opts.h : 0.0;
      let s = opts && 's' in opts ? opts.s : 0.0;
      let l = opts && 'l' in opts ? opts.l : 0.0;
      let hslColor = src__painting__colors.HSLColor.fromColor(this.widget.color);
      h = (dart.notNull(hslColor.hue) + dart.notNull(h))[$clamp](0.0, 360.0);
      s = (dart.notNull(hslColor.saturation) + dart.notNull(core.num._check(s)))[$clamp](0.0, 1.0);
      l = (dart.notNull(hslColor.lightness) + dart.notNull(core.num._check(l)))[$clamp](0.0, 1.0);
      return new src__painting__colors.HSLColor.fromAHSL(hslColor.alpha, h, core.double._check(s), core.double._check(l)).toColor();
    }
  };
  (button._FancyButtonState.new = function() {
    this[_animationController] = null;
    this[_pressedAnimation] = null;
    this[_downTicker] = null;
    button._FancyButtonState.__proto__.new.call(this);
    ;
  }).prototype = button._FancyButtonState.prototype;
  dart.addTypeTests(button._FancyButtonState);
  dart.setMethodSignature(button._FancyButtonState, () => ({
    __proto__: dart.getMethods(button._FancyButtonState.__proto__),
    [_setupAnimation]: dart.fnType(dart.void, []),
    [_onTapDown]: dart.fnType(dart.void, [dart.dynamic]),
    [_onTapUp]: dart.fnType(dart.void, [dart.dynamic]),
    [_onTapCancel]: dart.fnType(dart.void, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    [_hslRelativeColor]: dart.fnType(ui$.Color, [], {h: core.double, l: dart.dynamic, s: dart.dynamic})
  }));
  dart.setGetterSignature(button._FancyButtonState, () => ({
    __proto__: dart.getGetters(button._FancyButtonState.__proto__),
    buttonDepth: core.double
  }));
  dart.setLibraryUri(button._FancyButtonState, "package:tap_hero_web/button.dart");
  dart.setFieldSignature(button._FancyButtonState, () => ({
    __proto__: dart.getFields(button._FancyButtonState.__proto__),
    [_animationController]: dart.fieldType(src__animation__animation_controller.AnimationController),
    [_pressedAnimation]: dart.fieldType(src__animation__animation.Animation$(core.double)),
    [_downTicker]: dart.fieldType(src__scheduler__ticker.TickerFuture)
  }));
  dart.trackLibraries("packages/tap_hero_web/button", {
    "package:tap_hero_web/button.dart": button
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/tap_hero_web/button.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAYe;;;;;;IACD;;;;;;IACG;;;;;;IACI;;;;;;IAEN;;;;;;;AAGsB;IAAmB;;;QAhBhD;QACW;QACA;QACA;QACV,wDAAiB,oEAAuB;QACxC;;IAJU;IACA;IACA;IACV;IACA;AACF,sDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmBM,YAAY,cAAZ,AAAO,oBAAO;IAAG;;;WAGzC;0BAAsB;AAChB,gCAAiD,QAAN,MAAtB,iDAAsB,oBAAM,OAAG;aAC1D;4BAAsB;MACtB,6BAAuB,4EACX,qCAAsD,cAA/B,AAAO,AAAS,uCAAkB,0BAC5D,aACA,kBAAkB;MAE3B,0BAAoB,AAA6C,kCAAxB,cAAC,wBAAkB,cAC1D,4DAAwB,mCAAoC;IAEhE;oBAGiC;;MACzB,sBAAgB,SAAS;AAC/B,uBAAI,AAAU,SAAD,WAAa,AAAO;QAC/B;;IAEJ;;MAIQ;MACN;IACF;;MAIE,AAAqB;MACf;IACR;iBAEgB;AACd,UAAI,AAAO,yBAAa;QACtB,oBAAc,AAAqB,qCAAU;;IAEjD;eAEc;AACZ,UAAI,AAAO,yBAAa;QACtB,AAAY,+BAAa;;UACvB,AAAqB,qCAAU;eAC/B,AAAO;8BAAW;;;IAGxB;;AAGE,UAAI,AAAO,yBAAa;QACtB,AAAqB;;IAEzB;UAG0B;AAClB,wBAA0B,aAAZ,AAAO,oBAAO;AAC5B,wBAA0B,aAAZ,AAAO,oBAAO;AAC5B,mBAAsB,uDAAS,AAAY,WAAD,GAAG;AAEnD,YAAO,qDACI,AAAO,AAAkB,yBAAL,OAAmB,wDAAa,WAAS,YAAY,QAAO,kBAC7E,4DACI,oDACA,MAAM,WAEf,6EACM,sCACF,wCACI,4BACN,mDACE,oDACE,6CACa,sBAChB,uDACc,4DACH,4BAAqB,CAAC,QAAS,CAAC,qBACzB,MAAM,ocAGxB,8DACa,kCACF,SAAc,SAAgB,UACpB,qDACP,mBAAO,KAAK,AAAkB,uCAC/B,KAAK,umBAGT,6CACc,kDACD,sBAChB,qDACgB,MAAM,SACb,6CACa,sBAChB,0DACc,4DACH,4BAAqB,sBACd,MAAM,WAEN,46BAER,qDACA,mBAAO,KAAK,AAAY,WAAD,GAAG,WAC3B,0DACO,4DACH,yCACO,MAAM,WAEN,ggFAM1B,8CACsB,+DACR,WAAW,cACT,WAAW,WAElB,AAAO;IAWpC;;UAEgC,mCAAI;UAAK,mCAAI;UAAK,mCAAI;AAC9C,qBAAoB,yCAAU,AAAO;MAC3C,IAAuB,CAAL,aAAb,AAAS,QAAD,qBAAO,CAAC,WAAQ,KAAK;MAClC,IAA8B,CAAL,aAApB,AAAS,QAAD,4CAAc,CAAC,YAAQ,KAAK;MACzC,IAA6B,CAAL,aAAnB,AAAS,QAAD,2CAAa,CAAC,YAAQ,KAAK;AACxC,YAAgB,AAAkC,6CAAzB,AAAS,QAAD,QAAQ,CAAC,qBAAE,CAAC,sBAAE,CAAC;IAClD;;;IAnJoB;IACF;IAEL;;;EAiJf","file":"button.ddc.js"}');
  // Exports:
  return {
    button: button
  };
});

//# sourceMappingURL=button.ddc.js.map
