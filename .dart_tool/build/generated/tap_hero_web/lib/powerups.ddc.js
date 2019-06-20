define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const powerups = Object.create(dart.library);
  powerups.PowerUps = class PowerUps extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    get multiplier() {
      return this[multiplier$];
    }
    set multiplier(value) {
      this[multiplier$] = value;
    }
    get bought() {
      return this[bought$];
    }
    set bought(value) {
      this[bought$] = value;
    }
    get coins() {
      return this[coins$];
    }
    set coins(value) {
      this[coins$] = value;
    }
  };
  (powerups.PowerUps.new = function(name, multiplier, bought, coins) {
    this[name$] = name;
    this[multiplier$] = multiplier;
    this[bought$] = bought;
    this[coins$] = coins;
    ;
  }).prototype = powerups.PowerUps.prototype;
  dart.addTypeTests(powerups.PowerUps);
  const name$ = Symbol("PowerUps.name");
  const multiplier$ = Symbol("PowerUps.multiplier");
  const bought$ = Symbol("PowerUps.bought");
  const coins$ = Symbol("PowerUps.coins");
  dart.setLibraryUri(powerups.PowerUps, "package:tap_hero_web/powerups.dart");
  dart.setFieldSignature(powerups.PowerUps, () => ({
    __proto__: dart.getFields(powerups.PowerUps.__proto__),
    name: dart.fieldType(core.String),
    multiplier: dart.fieldType(core.double),
    bought: dart.fieldType(core.bool),
    coins: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/tap_hero_web/powerups", {
    "package:tap_hero_web/powerups.dart": powerups
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/tap_hero_web/powerups.dart"],"names":[],"mappings":";;;;;;;IACM;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;oCACU,MAAW,YAAiB,QAAa;IAAzC;IAAW;IAAiB;IAAa;;EAAM","file":"powerups.ddc.js"}');
  // Exports:
  return {
    powerups: powerups
  };
});

//# sourceMappingURL=powerups.ddc.js.map
