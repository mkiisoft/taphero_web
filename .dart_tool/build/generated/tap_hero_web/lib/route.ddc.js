define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, animation, material, ui, animation$) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__navigator = animation.src__widgets__navigator;
  const src__widgets__title = animation.src__widgets__title;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__transitions = animation.src__widgets__transitions;
  const src__widgets__pages = animation.src__widgets__pages;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__material__theme = material.src__material__theme;
  const ui$ = ui.ui;
  const src__animation__animation = animation$.src__animation__animation;
  const route = Object.create(dart.library);
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  route.FadeRoute = class FadeRoute extends src__widgets__pages.PageRoute {
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get builder() {
      return this[builder$];
    }
    set builder(value) {
      super.builder = value;
    }
    get barrierColor() {
      return null;
    }
    get barrierLabel() {
      return null;
    }
    get maintainState() {
      return true;
    }
    get transitionDuration() {
      return new core.Duration.new({milliseconds: 500});
    }
    buildPage(context, animation, secondaryAnimation) {
      return new src__widgets__title.Title.new({title: this.title, color: src__material__theme.Theme.of(context).primaryColor, child: this.builder(context), $creationLocationd_0dea112b090073317d4: const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 12, file: "org-dartlang-app:///packages/tap_hero_web/route.dart", parameterLocations: const$2 || (const$2 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 7, name: "title"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 7, name: "color"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    buildTransitions(context, animation, secondaryAnimation, child) {
      return new src__widgets__transitions.FadeTransition.new({opacity: animation, child: child, $creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 12, file: "org-dartlang-app:///packages/tap_hero_web/route.dart", parameterLocations: const$6 || (const$6 = dart.constList([const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 27, name: "opacity"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 47, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (route.FadeRoute.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    this[title$] = title;
    this[builder$] = builder;
    route.FadeRoute.__proto__.new.call(this, {settings: new src__widgets__navigator.RouteSettings.new({name: name})});
    ;
  }).prototype = route.FadeRoute.prototype;
  dart.addTypeTests(route.FadeRoute);
  const title$ = Symbol("FadeRoute.title");
  const builder$ = Symbol("FadeRoute.builder");
  dart.setMethodSignature(route.FadeRoute, () => ({
    __proto__: dart.getMethods(route.FadeRoute.__proto__),
    buildPage: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, src__animation__animation.Animation$(core.double), src__animation__animation.Animation$(core.double)])
  }));
  dart.setGetterSignature(route.FadeRoute, () => ({
    __proto__: dart.getGetters(route.FadeRoute.__proto__),
    barrierColor: ui$.Color,
    barrierLabel: core.String,
    maintainState: core.bool,
    transitionDuration: core.Duration
  }));
  dart.setLibraryUri(route.FadeRoute, "package:tap_hero_web/route.dart");
  dart.setFieldSignature(route.FadeRoute, () => ({
    __proto__: dart.getFields(route.FadeRoute.__proto__),
    title: dart.finalFieldType(core.String),
    builder: dart.finalFieldType(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]))
  }));
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  route.SimpleRoute = class SimpleRoute extends src__widgets__pages.PageRoute {
    get title() {
      return this[title$0];
    }
    set title(value) {
      super.title = value;
    }
    get builder() {
      return this[builder$0];
    }
    set builder(value) {
      super.builder = value;
    }
    get barrierColor() {
      return null;
    }
    get barrierLabel() {
      return null;
    }
    get maintainState() {
      return true;
    }
    get transitionDuration() {
      return new core.Duration.new({milliseconds: 200});
    }
    buildPage(context, animation, secondaryAnimation) {
      return new src__widgets__title.Title.new({title: this.title, color: src__material__theme.Theme.of(context).primaryColor, child: this.builder(context), $creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 12, file: "org-dartlang-app:///packages/tap_hero_web/route.dart", parameterLocations: const$11 || (const$11 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 7, name: "title"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 7, name: "color"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (route.SimpleRoute.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    this[title$0] = title;
    this[builder$0] = builder;
    route.SimpleRoute.__proto__.new.call(this, {settings: new src__widgets__navigator.RouteSettings.new({name: name})});
    ;
  }).prototype = route.SimpleRoute.prototype;
  dart.addTypeTests(route.SimpleRoute);
  const title$0 = Symbol("SimpleRoute.title");
  const builder$0 = Symbol("SimpleRoute.builder");
  dart.setMethodSignature(route.SimpleRoute, () => ({
    __proto__: dart.getMethods(route.SimpleRoute.__proto__),
    buildPage: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, src__animation__animation.Animation$(core.double), src__animation__animation.Animation$(core.double)])
  }));
  dart.setGetterSignature(route.SimpleRoute, () => ({
    __proto__: dart.getGetters(route.SimpleRoute.__proto__),
    barrierColor: ui$.Color,
    barrierLabel: core.String,
    maintainState: core.bool,
    transitionDuration: core.Duration
  }));
  dart.setLibraryUri(route.SimpleRoute, "package:tap_hero_web/route.dart");
  dart.setFieldSignature(route.SimpleRoute, () => ({
    __proto__: dart.getFields(route.SimpleRoute.__proto__),
    title: dart.finalFieldType(core.String),
    builder: dart.finalFieldType(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]))
  }));
  dart.trackLibraries("packages/tap_hero_web/route", {
    "package:tap_hero_web/route.dart": route
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/tap_hero_web/route.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;IAWe;;;;;;IACO;;;;;;;AAGM;IAAI;;AAGH;IAAI;;AAGL;IAAI;;AAGK,kDAAuB;IAAI;cAGhC,SAA2B,WAA6B;AACpF,YAAO,2CACO,mBACC,AAAY,8BAAT,OAAO,uBAChB,aAAQ,OAAO;IAE1B;qBAGqC,SAA2B,WAA6B,oBAA2B;AACtH,YAAO,4DAAwB,SAAS,SAAS,KAAK;IACxD;;;QAlCmB;QACF;QACA;IADA;IACA;AACZ,wDAAgB,qDACb,IAAI;;EACV;;;;;;;;;;;;;;;;;;;;;;;;;;;IAyCW;;;;;;IACO;;;;;;;AAGM;IAAI;;AAGH;IAAI;;AAGL;IAAI;;AAGK,kDAAuB;IAAI;cAGhC,SAA2B,WAA6B;AACpF,YAAO,2CACO,mBACC,AAAY,8BAAT,OAAO,uBAChB,aAAQ,OAAO;IAE1B;;;QA7BmB;QACF;QACA;IADA;IACA;AACZ,0DAAgB,qDACb,IAAI;;EACV","file":"route.ddc.js"}');
  // Exports:
  return {
    route: route
  };
});

//# sourceMappingURL=route.ddc.js.map
