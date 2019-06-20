define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const bosses = Object.create(dart.library);
  bosses.Bosses = class Bosses extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    get life() {
      return this[life$];
    }
    set life(value) {
      this[life$] = value;
    }
    get asset() {
      return this[asset$];
    }
    set asset(value) {
      this[asset$] = value;
    }
  };
  (bosses.Bosses.new = function(name, life, asset) {
    this[name$] = name;
    this[life$] = life;
    this[asset$] = asset;
    ;
  }).prototype = bosses.Bosses.prototype;
  dart.addTypeTests(bosses.Bosses);
  const name$ = Symbol("Bosses.name");
  const life$ = Symbol("Bosses.life");
  const asset$ = Symbol("Bosses.asset");
  dart.setLibraryUri(bosses.Bosses, "package:tap_hero_web/bosses.dart");
  dart.setFieldSignature(bosses.Bosses, () => ({
    __proto__: dart.getFields(bosses.Bosses.__proto__),
    name: dart.fieldType(core.String),
    life: dart.fieldType(core.int),
    asset: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/tap_hero_web/bosses", {
    "package:tap_hero_web/bosses.dart": bosses
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/tap_hero_web/bosses.dart"],"names":[],"mappings":";;;;;;;IACM;;;;;;IACA;;;;;;IACA;;;;;;;gCAEQ,MAAW,MAAW;IAAtB;IAAW;IAAW;;EAAM","file":"bosses.ddc.js"}');
  // Exports:
  return {
    bosses: bosses
  };
});

//# sourceMappingURL=bosses.ddc.js.map
