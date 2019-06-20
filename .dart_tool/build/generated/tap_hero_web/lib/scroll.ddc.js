define(['dart_sdk', 'packages/flutter_web/animation'], function(dart_sdk, animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__scroll_configuration = animation.src__widgets__scroll_configuration;
  const scroll = Object.create(dart.library);
  scroll.GlowBehavior = class GlowBehavior extends src__widgets__scroll_configuration.ScrollBehavior {
    buildViewportChrome(context, child, axisDirection) {
      return child;
    }
  };
  (scroll.GlowBehavior.new = function() {
    scroll.GlowBehavior.__proto__.new.call(this);
    ;
  }).prototype = scroll.GlowBehavior.prototype;
  dart.addTypeTests(scroll.GlowBehavior);
  dart.setLibraryUri(scroll.GlowBehavior, "package:tap_hero_web/scroll.dart");
  dart.trackLibraries("packages/tap_hero_web/scroll", {
    "package:tap_hero_web/scroll.dart": scroll
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/tap_hero_web/scroll.dart"],"names":[],"mappings":";;;;;;;;wBAI0C,SAAgB,OAAqB;AAC3E,YAAO,MAAK;IACd;;;;;EACF","file":"scroll.ddc.js"}');
  // Exports:
  return {
    scroll: scroll
  };
});

//# sourceMappingURL=scroll.ddc.js.map
