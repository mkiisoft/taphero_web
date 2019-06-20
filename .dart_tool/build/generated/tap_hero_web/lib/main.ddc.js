define(['dart_sdk', 'packages/flutter_web/material', 'packages/tap_hero_web/game', 'packages/tap_hero_web/privacy', 'packages/tap_hero_web/support', 'packages/tap_hero_web/download', 'packages/flutter_web/animation'], function(dart_sdk, material, game, privacy, support, download, animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__app = material.src__material__app;
  const welcome = game.welcome;
  const game$ = game.game;
  const privacy$ = privacy.privacy;
  const support$ = support.support;
  const download$ = download.download;
  const src__widgets__navigator = animation.src__widgets__navigator;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__binding = animation.src__widgets__binding;
  const main = Object.create(dart.library);
  let RouteSettingsToRoute = () => (RouteSettingsToRoute = dart.constFn(dart.fnType(src__widgets__navigator.Route, [src__widgets__navigator.RouteSettings])))();
  let const$;
  let const$0;
  let const$1;
  let const$2;
  main.MyApp = class MyApp extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__app.MaterialApp.new({onGenerateRoute: dart.fn(settings => {
          switch (settings.name) {
            case "/":
            {
              return welcome.Welcome.route();
            }
            case "/game":
            {
              return game$.Game.route();
            }
            case "/privacy":
            {
              return privacy$.Privacy.route();
            }
            case "/support":
            {
              return support$.Support.route();
            }
            case "/download":
            {
              return download$.Download.route();
            }
            default:
            {
              return welcome.Welcome.route();
            }
          }
        }, RouteSettingsToRoute()), initialRoute: "/", $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 12, file: "org-dartlang-app:///packages/tap_hero_web/main.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 7, name: "onGenerateRoute"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 7, name: "initialRoute"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main.MyApp.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, "package:tap_hero_web/main.dart");
  let const$3;
  let const$4;
  main.main = function() {
    return src__widgets__binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 9, column: 23, file: "org-dartlang-app:///packages/tap_hero_web/main.dart", parameterLocations: const$3 || (const$3 = dart.constList([], src__widgets__widget_inspector._Location))})))}));
  };
  dart.trackLibraries("packages/tap_hero_web/main", {
    "package:tap_hero_web/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/tap_hero_web/main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;UAY4B;AACxB,YAAO,0DACY,QAAC;AAChB,kBAAO,AAAS,QAAD;gBACR;;AAAK,oBAAe;;gBACpB;;AAAS,oBAAY;;gBACrB;;AAAY,oBAAe;;gBAC3B;;AAAY,oBAAe;;gBAC3B;;AAAa,oBAAgB;;;;AACzB,oBAAe;;;kDAGd;IAQlB;;;;;;EACF;;;;;;;;;;AAzBe,wCAAO;EAAQ","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
