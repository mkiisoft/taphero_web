define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/tap_hero_web/main'], function(dart_sdk, ui, main) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui$ = ui.ui;
  const main$ = main.main;
  const main$0 = Object.create(dart.library);
  main$0.main = function() {
    return async.async(dart.dynamic, function* main() {
      yield ui$.webOnlyInitializePlatform();
      main$.main();
    });
  };
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main$0
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///web/main.dart"],"names":[],"mappings":";;;;;;;;;;AAGI;MACF,MAAM;MACN;IACF","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main$0
  };
});

//# sourceMappingURL=main.ddc.js.map
