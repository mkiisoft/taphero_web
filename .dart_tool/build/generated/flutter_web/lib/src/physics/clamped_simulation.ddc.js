define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__physics__tolerance = Object.create(dart.library);
  const src__physics__utils = Object.create(dart.library);
  const src__physics__gravity_simulation = Object.create(dart.library);
  const src__physics__simulation = Object.create(dart.library);
  const src__physics__clamped_simulation = Object.create(dart.library);
  const src__physics__spring_simulation = Object.create(dart.library);
  const src__physics__friction_simulation = Object.create(dart.library);
  const $abs = dartx.abs;
  const $runtimeType = dartx.runtimeType;
  const $clamp = dartx.clamp;
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $sign = dartx.sign;
  src__physics__tolerance.Tolerance = class Tolerance extends core.Object {
    get distance() {
      return this[distance$];
    }
    set distance(value) {
      super.distance = value;
    }
    get time() {
      return this[time$];
    }
    set time(value) {
      super.time = value;
    }
    get velocity() {
      return this[velocity$];
    }
    set velocity(value) {
      super.velocity = value;
    }
    toString() {
      return "Tolerance(distance: ±" + dart.str(this.distance) + ", time: ±" + dart.str(this.time) + ", velocity: ±" + dart.str(this.velocity) + ")";
    }
  };
  (src__physics__tolerance.Tolerance.new = function(opts) {
    let distance = opts && 'distance' in opts ? opts.distance : src__physics__tolerance.Tolerance._epsilonDefault;
    let time = opts && 'time' in opts ? opts.time : src__physics__tolerance.Tolerance._epsilonDefault;
    let velocity = opts && 'velocity' in opts ? opts.velocity : src__physics__tolerance.Tolerance._epsilonDefault;
    this[distance$] = distance;
    this[time$] = time;
    this[velocity$] = velocity;
    ;
  }).prototype = src__physics__tolerance.Tolerance.prototype;
  dart.addTypeTests(src__physics__tolerance.Tolerance);
  const distance$ = Symbol("Tolerance.distance");
  const time$ = Symbol("Tolerance.time");
  const velocity$ = Symbol("Tolerance.velocity");
  dart.setLibraryUri(src__physics__tolerance.Tolerance, "package:flutter_web/src/physics/tolerance.dart");
  dart.setFieldSignature(src__physics__tolerance.Tolerance, () => ({
    __proto__: dart.getFields(src__physics__tolerance.Tolerance.__proto__),
    distance: dart.finalFieldType(core.double),
    time: dart.finalFieldType(core.double),
    velocity: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__physics__tolerance.Tolerance, ['toString']);
  dart.defineLazy(src__physics__tolerance.Tolerance, {
    /*src__physics__tolerance.Tolerance._epsilonDefault*/get _epsilonDefault() {
      return 0.001;
    },
    /*src__physics__tolerance.Tolerance.defaultTolerance*/get defaultTolerance() {
      return dart.const(new src__physics__tolerance.Tolerance.new());
    }
  });
  src__physics__utils.nearEqual = function(a, b, epsilon) {
    if (!(epsilon != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/physics/utils.dart", 11, 10, "epsilon != null");
    if (!(dart.notNull(epsilon) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/physics/utils.dart", 12, 10, "epsilon >= 0.0");
    if (a == null || b == null) return a == b;
    return dart.notNull(a) > dart.notNull(b) - dart.notNull(epsilon) && dart.notNull(a) < dart.notNull(b) + dart.notNull(epsilon) || a == b;
  };
  src__physics__utils.nearZero = function(a, epsilon) {
    return src__physics__utils.nearEqual(a, 0.0, epsilon);
  };
  const _a = dart.privateName(src__physics__gravity_simulation, "_a");
  const _x = dart.privateName(src__physics__gravity_simulation, "_x");
  const _v = dart.privateName(src__physics__gravity_simulation, "_v");
  const _end = dart.privateName(src__physics__gravity_simulation, "_end");
  src__physics__simulation.Simulation = class Simulation extends core.Object {
    get tolerance() {
      return this[tolerance$];
    }
    set tolerance(value) {
      this[tolerance$] = value;
    }
    toString() {
      return dart.str(this[$runtimeType]);
    }
  };
  (src__physics__simulation.Simulation.new = function(opts) {
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : src__physics__tolerance.Tolerance.defaultTolerance;
    this[tolerance$] = tolerance;
    ;
  }).prototype = src__physics__simulation.Simulation.prototype;
  dart.addTypeTests(src__physics__simulation.Simulation);
  const tolerance$ = Symbol("Simulation.tolerance");
  dart.setLibraryUri(src__physics__simulation.Simulation, "package:flutter_web/src/physics/simulation.dart");
  dart.setFieldSignature(src__physics__simulation.Simulation, () => ({
    __proto__: dart.getFields(src__physics__simulation.Simulation.__proto__),
    tolerance: dart.fieldType(src__physics__tolerance.Tolerance)
  }));
  dart.defineExtensionMethods(src__physics__simulation.Simulation, ['toString']);
  src__physics__gravity_simulation.GravitySimulation = class GravitySimulation extends src__physics__simulation.Simulation {
    x(time) {
      return dart.notNull(this[_x]) + dart.notNull(this[_v]) * dart.notNull(time) + 0.5 * dart.notNull(this[_a]) * dart.notNull(time) * dart.notNull(time);
    }
    dx(time) {
      return dart.notNull(this[_v]) + dart.notNull(time) * dart.notNull(this[_a]);
    }
    isDone(time) {
      return this.x(time)[$abs]() >= dart.notNull(this[_end]);
    }
  };
  (src__physics__gravity_simulation.GravitySimulation.new = function(acceleration, distance, endDistance, velocity) {
    if (!(acceleration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/physics/gravity_simulation.dart", 52, 16, "(acceleration != nul");
    if (!(distance != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/physics/gravity_simulation.dart", 53, 16, "(distance != nul");
    if (!(velocity != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/physics/gravity_simulation.dart", 54, 16, "(velocity != nul");
    if (!(endDistance != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/physics/gravity_simulation.dart", 55, 16, "(endDistance != nul");
    if (!(dart.notNull(endDistance) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/physics/gravity_simulation.dart", 56, 16, "(endDistance >= ");
    this[_a] = acceleration;
    this[_x] = distance;
    this[_v] = velocity;
    this[_end] = endDistance;
    src__physics__gravity_simulation.GravitySimulation.__proto__.new.call(this);
    ;
  }).prototype = src__physics__gravity_simulation.GravitySimulation.prototype;
  dart.addTypeTests(src__physics__gravity_simulation.GravitySimulation);
  dart.setMethodSignature(src__physics__gravity_simulation.GravitySimulation, () => ({
    __proto__: dart.getMethods(src__physics__gravity_simulation.GravitySimulation.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setLibraryUri(src__physics__gravity_simulation.GravitySimulation, "package:flutter_web/src/physics/gravity_simulation.dart");
  dart.setFieldSignature(src__physics__gravity_simulation.GravitySimulation, () => ({
    __proto__: dart.getFields(src__physics__gravity_simulation.GravitySimulation.__proto__),
    [_x]: dart.finalFieldType(core.double),
    [_v]: dart.finalFieldType(core.double),
    [_a]: dart.finalFieldType(core.double),
    [_end]: dart.finalFieldType(core.double)
  }));
  src__physics__clamped_simulation.ClampedSimulation = class ClampedSimulation extends src__physics__simulation.Simulation {
    get simulation() {
      return this[simulation$];
    }
    set simulation(value) {
      super.simulation = value;
    }
    get xMin() {
      return this[xMin$];
    }
    set xMin(value) {
      super.xMin = value;
    }
    get xMax() {
      return this[xMax$];
    }
    set xMax(value) {
      super.xMax = value;
    }
    get dxMin() {
      return this[dxMin$];
    }
    set dxMin(value) {
      super.dxMin = value;
    }
    get dxMax() {
      return this[dxMax$];
    }
    set dxMax(value) {
      super.dxMax = value;
    }
    x(time) {
      return this.simulation.x(time)[$clamp](this.xMin, this.xMax);
    }
    dx(time) {
      return this.simulation.dx(time)[$clamp](this.dxMin, this.dxMax);
    }
    isDone(time) {
      return this.simulation.isDone(time);
    }
  };
  (src__physics__clamped_simulation.ClampedSimulation.new = function(simulation, opts) {
    let xMin = opts && 'xMin' in opts ? opts.xMin : core.double.negativeInfinity;
    let xMax = opts && 'xMax' in opts ? opts.xMax : core.double.infinity;
    let dxMin = opts && 'dxMin' in opts ? opts.dxMin : core.double.negativeInfinity;
    let dxMax = opts && 'dxMax' in opts ? opts.dxMax : core.double.infinity;
    this[simulation$] = simulation;
    this[xMin$] = xMin;
    this[xMax$] = xMax;
    this[dxMin$] = dxMin;
    this[dxMax$] = dxMax;
    if (!(simulation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/physics/clamped_simulation.dart", 30, 16, "simulation != null");
    if (!(dart.notNull(xMax) >= dart.notNull(xMin))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/physics/clamped_simulation.dart", 31, 16, "xMax >= xMin");
    if (!(dart.notNull(dxMax) >= dart.notNull(dxMin))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/physics/clamped_simulation.dart", 32, 16, "dxMax >= dxMin");
    src__physics__clamped_simulation.ClampedSimulation.__proto__.new.call(this);
    ;
  }).prototype = src__physics__clamped_simulation.ClampedSimulation.prototype;
  dart.addTypeTests(src__physics__clamped_simulation.ClampedSimulation);
  const simulation$ = Symbol("ClampedSimulation.simulation");
  const xMin$ = Symbol("ClampedSimulation.xMin");
  const xMax$ = Symbol("ClampedSimulation.xMax");
  const dxMin$ = Symbol("ClampedSimulation.dxMin");
  const dxMax$ = Symbol("ClampedSimulation.dxMax");
  dart.setMethodSignature(src__physics__clamped_simulation.ClampedSimulation, () => ({
    __proto__: dart.getMethods(src__physics__clamped_simulation.ClampedSimulation.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setLibraryUri(src__physics__clamped_simulation.ClampedSimulation, "package:flutter_web/src/physics/clamped_simulation.dart");
  dart.setFieldSignature(src__physics__clamped_simulation.ClampedSimulation, () => ({
    __proto__: dart.getFields(src__physics__clamped_simulation.ClampedSimulation.__proto__),
    simulation: dart.finalFieldType(src__physics__simulation.Simulation),
    xMin: dart.finalFieldType(core.double),
    xMax: dart.finalFieldType(core.double),
    dxMin: dart.finalFieldType(core.double),
    dxMax: dart.finalFieldType(core.double)
  }));
  src__physics__spring_simulation.SpringDescription = class SpringDescription extends core.Object {
    get mass() {
      return this[mass$];
    }
    set mass(value) {
      super.mass = value;
    }
    get stiffness() {
      return this[stiffness$];
    }
    set stiffness(value) {
      super.stiffness = value;
    }
    get damping() {
      return this[damping$];
    }
    set damping(value) {
      super.damping = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(mass: " + this.mass[$toStringAsFixed](1) + ", stiffness: " + this.stiffness[$toStringAsFixed](1) + ", damping: " + this.damping[$toStringAsFixed](1) + ")";
    }
  };
  (src__physics__spring_simulation.SpringDescription.new = function(opts) {
    let mass = opts && 'mass' in opts ? opts.mass : null;
    let stiffness = opts && 'stiffness' in opts ? opts.stiffness : null;
    let damping = opts && 'damping' in opts ? opts.damping : null;
    this[mass$] = mass;
    this[stiffness$] = stiffness;
    this[damping$] = damping;
    ;
  }).prototype = src__physics__spring_simulation.SpringDescription.prototype;
  (src__physics__spring_simulation.SpringDescription.withDampingRatio = function(opts) {
    let mass = opts && 'mass' in opts ? opts.mass : null;
    let stiffness = opts && 'stiffness' in opts ? opts.stiffness : null;
    let ratio = opts && 'ratio' in opts ? opts.ratio : 1.0;
    this[mass$] = mass;
    this[stiffness$] = stiffness;
    this[damping$] = dart.notNull(ratio) * 2.0 * math.sqrt(dart.notNull(mass) * dart.notNull(stiffness));
    ;
  }).prototype = src__physics__spring_simulation.SpringDescription.prototype;
  dart.addTypeTests(src__physics__spring_simulation.SpringDescription);
  const mass$ = Symbol("SpringDescription.mass");
  const stiffness$ = Symbol("SpringDescription.stiffness");
  const damping$ = Symbol("SpringDescription.damping");
  dart.setLibraryUri(src__physics__spring_simulation.SpringDescription, "package:flutter_web/src/physics/spring_simulation.dart");
  dart.setFieldSignature(src__physics__spring_simulation.SpringDescription, () => ({
    __proto__: dart.getFields(src__physics__spring_simulation.SpringDescription.__proto__),
    mass: dart.finalFieldType(core.double),
    stiffness: dart.finalFieldType(core.double),
    damping: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__physics__spring_simulation.SpringDescription, ['toString']);
  const _name$ = dart.privateName(src__physics__spring_simulation, "_name");
  src__physics__spring_simulation.SpringType = class SpringType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (src__physics__spring_simulation.SpringType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = src__physics__spring_simulation.SpringType.prototype;
  dart.addTypeTests(src__physics__spring_simulation.SpringType);
  dart.setLibraryUri(src__physics__spring_simulation.SpringType, "package:flutter_web/src/physics/spring_simulation.dart");
  dart.setFieldSignature(src__physics__spring_simulation.SpringType, () => ({
    __proto__: dart.getFields(src__physics__spring_simulation.SpringType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__physics__spring_simulation.SpringType, ['toString']);
  src__physics__spring_simulation.SpringType.criticallyDamped = dart.const(new src__physics__spring_simulation.SpringType.new(0, "SpringType.criticallyDamped"));
  src__physics__spring_simulation.SpringType.underDamped = dart.const(new src__physics__spring_simulation.SpringType.new(1, "SpringType.underDamped"));
  src__physics__spring_simulation.SpringType.overDamped = dart.const(new src__physics__spring_simulation.SpringType.new(2, "SpringType.overDamped"));
  src__physics__spring_simulation.SpringType.values = dart.constList([src__physics__spring_simulation.SpringType.criticallyDamped, src__physics__spring_simulation.SpringType.underDamped, src__physics__spring_simulation.SpringType.overDamped], src__physics__spring_simulation.SpringType);
  const _endPosition = dart.privateName(src__physics__spring_simulation, "_endPosition");
  const _solution = dart.privateName(src__physics__spring_simulation, "_solution");
  src__physics__spring_simulation.SpringSimulation = class SpringSimulation extends src__physics__simulation.Simulation {
    get type() {
      return this[_solution].type;
    }
    x(time) {
      return dart.notNull(this[_endPosition]) + dart.notNull(this[_solution].x(time));
    }
    dx(time) {
      return this[_solution].dx(time);
    }
    isDone(time) {
      return dart.test(src__physics__utils.nearZero(this[_solution].x(time), this.tolerance.distance)) && dart.test(src__physics__utils.nearZero(this[_solution].dx(time), this.tolerance.velocity));
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(end: " + dart.str(this[_endPosition]) + ", " + dart.str(this.type) + ")";
    }
  };
  (src__physics__spring_simulation.SpringSimulation.new = function(spring, start, end, velocity, opts) {
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : src__physics__tolerance.Tolerance.defaultTolerance;
    this[_endPosition] = end;
    this[_solution] = src__physics__spring_simulation._SpringSolution.new(spring, dart.notNull(start) - dart.notNull(end), velocity);
    src__physics__spring_simulation.SpringSimulation.__proto__.new.call(this, {tolerance: tolerance});
    ;
  }).prototype = src__physics__spring_simulation.SpringSimulation.prototype;
  dart.addTypeTests(src__physics__spring_simulation.SpringSimulation);
  dart.setMethodSignature(src__physics__spring_simulation.SpringSimulation, () => ({
    __proto__: dart.getMethods(src__physics__spring_simulation.SpringSimulation.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setGetterSignature(src__physics__spring_simulation.SpringSimulation, () => ({
    __proto__: dart.getGetters(src__physics__spring_simulation.SpringSimulation.__proto__),
    type: src__physics__spring_simulation.SpringType
  }));
  dart.setLibraryUri(src__physics__spring_simulation.SpringSimulation, "package:flutter_web/src/physics/spring_simulation.dart");
  dart.setFieldSignature(src__physics__spring_simulation.SpringSimulation, () => ({
    __proto__: dart.getFields(src__physics__spring_simulation.SpringSimulation.__proto__),
    [_endPosition]: dart.finalFieldType(core.double),
    [_solution]: dart.finalFieldType(src__physics__spring_simulation._SpringSolution)
  }));
  dart.defineExtensionMethods(src__physics__spring_simulation.SpringSimulation, ['toString']);
  src__physics__spring_simulation.ScrollSpringSimulation = class ScrollSpringSimulation extends src__physics__spring_simulation.SpringSimulation {
    x(time) {
      return dart.test(this.isDone(time)) ? this[_endPosition] : super.x(time);
    }
  };
  (src__physics__spring_simulation.ScrollSpringSimulation.new = function(spring, start, end, velocity, opts) {
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : src__physics__tolerance.Tolerance.defaultTolerance;
    src__physics__spring_simulation.ScrollSpringSimulation.__proto__.new.call(this, spring, start, end, velocity, {tolerance: tolerance});
    ;
  }).prototype = src__physics__spring_simulation.ScrollSpringSimulation.prototype;
  dart.addTypeTests(src__physics__spring_simulation.ScrollSpringSimulation);
  dart.setLibraryUri(src__physics__spring_simulation.ScrollSpringSimulation, "package:flutter_web/src/physics/spring_simulation.dart");
  src__physics__spring_simulation._SpringSolution = class _SpringSolution extends core.Object {
    static new(spring, initialPosition, initialVelocity) {
      if (!(spring != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/physics/spring_simulation.dart", 148, 12, "rt(spring != n");
      if (!(spring.mass != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/physics/spring_simulation.dart", 149, 12, "rt(spring.mass != n");
      if (!(spring.stiffness != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/physics/spring_simulation.dart", 150, 12, "rt(spring.stiffness != n");
      if (!(spring.damping != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/physics/spring_simulation.dart", 151, 12, "rt(spring.damping != n");
      if (!(initialPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/physics/spring_simulation.dart", 152, 12, "rt(initialPosition != n");
      if (!(initialVelocity != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/physics/spring_simulation.dart", 153, 12, "rt(initialVelocity != n");
      let cmk = dart.notNull(spring.damping) * dart.notNull(spring.damping) - 4 * dart.notNull(spring.mass) * dart.notNull(spring.stiffness);
      if (cmk === 0.0) return src__physics__spring_simulation._CriticalSolution.new(spring, initialPosition, initialVelocity);
      if (cmk > 0.0) return src__physics__spring_simulation._OverdampedSolution.new(spring, initialPosition, initialVelocity);
      return src__physics__spring_simulation._UnderdampedSolution.new(spring, initialPosition, initialVelocity);
    }
  };
  (src__physics__spring_simulation._SpringSolution[dart.mixinNew] = function() {
  }).prototype = src__physics__spring_simulation._SpringSolution.prototype;
  dart.addTypeTests(src__physics__spring_simulation._SpringSolution);
  dart.setLibraryUri(src__physics__spring_simulation._SpringSolution, "package:flutter_web/src/physics/spring_simulation.dart");
  const _r = dart.privateName(src__physics__spring_simulation, "_r");
  const _c1 = dart.privateName(src__physics__spring_simulation, "_c1");
  const _c2 = dart.privateName(src__physics__spring_simulation, "_c2");
  src__physics__spring_simulation._CriticalSolution = class _CriticalSolution extends core.Object {
    static new(spring, distance, velocity) {
      let r = -dart.notNull(spring.damping) / (2.0 * dart.notNull(spring.mass));
      let c1 = distance;
      let c2 = dart.notNull(velocity) / (r * dart.notNull(distance));
      return new src__physics__spring_simulation._CriticalSolution.withArgs(r, c1, c2);
    }
    x(time) {
      return (dart.notNull(this[_c1]) + dart.notNull(this[_c2]) * dart.notNull(time)) * math.pow(math.e, dart.notNull(this[_r]) * dart.notNull(time));
    }
    dx(time) {
      let power = math.pow(math.e, dart.notNull(this[_r]) * dart.notNull(time));
      return dart.notNull(this[_r]) * (dart.notNull(this[_c1]) + dart.notNull(this[_c2]) * dart.notNull(time)) * power + dart.notNull(this[_c2]) * power;
    }
    get type() {
      return src__physics__spring_simulation.SpringType.criticallyDamped;
    }
  };
  (src__physics__spring_simulation._CriticalSolution.withArgs = function(r, c1, c2) {
    this[_r] = r;
    this[_c1] = c1;
    this[_c2] = c2;
    ;
  }).prototype = src__physics__spring_simulation._CriticalSolution.prototype;
  dart.addTypeTests(src__physics__spring_simulation._CriticalSolution);
  src__physics__spring_simulation._CriticalSolution[dart.implements] = () => [src__physics__spring_simulation._SpringSolution];
  dart.setMethodSignature(src__physics__spring_simulation._CriticalSolution, () => ({
    __proto__: dart.getMethods(src__physics__spring_simulation._CriticalSolution.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double])
  }));
  dart.setGetterSignature(src__physics__spring_simulation._CriticalSolution, () => ({
    __proto__: dart.getGetters(src__physics__spring_simulation._CriticalSolution.__proto__),
    type: src__physics__spring_simulation.SpringType
  }));
  dart.setLibraryUri(src__physics__spring_simulation._CriticalSolution, "package:flutter_web/src/physics/spring_simulation.dart");
  dart.setFieldSignature(src__physics__spring_simulation._CriticalSolution, () => ({
    __proto__: dart.getFields(src__physics__spring_simulation._CriticalSolution.__proto__),
    [_r]: dart.finalFieldType(core.double),
    [_c1]: dart.finalFieldType(core.double),
    [_c2]: dart.finalFieldType(core.double)
  }));
  const _r1 = dart.privateName(src__physics__spring_simulation, "_r1");
  const _r2 = dart.privateName(src__physics__spring_simulation, "_r2");
  src__physics__spring_simulation._OverdampedSolution = class _OverdampedSolution extends core.Object {
    static new(spring, distance, velocity) {
      let cmk = dart.notNull(spring.damping) * dart.notNull(spring.damping) - 4 * dart.notNull(spring.mass) * dart.notNull(spring.stiffness);
      let r1 = (-dart.notNull(spring.damping) - math.sqrt(cmk)) / (2.0 * dart.notNull(spring.mass));
      let r2 = (-dart.notNull(spring.damping) + math.sqrt(cmk)) / (2.0 * dart.notNull(spring.mass));
      let c2 = (dart.notNull(velocity) - r1 * dart.notNull(distance)) / (r2 - r1);
      let c1 = dart.notNull(distance) - c2;
      return new src__physics__spring_simulation._OverdampedSolution.withArgs(r1, r2, c1, c2);
    }
    x(time) {
      return dart.notNull(this[_c1]) * math.pow(math.e, dart.notNull(this[_r1]) * dart.notNull(time)) + dart.notNull(this[_c2]) * math.pow(math.e, dart.notNull(this[_r2]) * dart.notNull(time));
    }
    dx(time) {
      return dart.notNull(this[_c1]) * dart.notNull(this[_r1]) * math.pow(math.e, dart.notNull(this[_r1]) * dart.notNull(time)) + dart.notNull(this[_c2]) * dart.notNull(this[_r2]) * math.pow(math.e, dart.notNull(this[_r2]) * dart.notNull(time));
    }
    get type() {
      return src__physics__spring_simulation.SpringType.overDamped;
    }
  };
  (src__physics__spring_simulation._OverdampedSolution.withArgs = function(r1, r2, c1, c2) {
    this[_r1] = r1;
    this[_r2] = r2;
    this[_c1] = c1;
    this[_c2] = c2;
    ;
  }).prototype = src__physics__spring_simulation._OverdampedSolution.prototype;
  dart.addTypeTests(src__physics__spring_simulation._OverdampedSolution);
  src__physics__spring_simulation._OverdampedSolution[dart.implements] = () => [src__physics__spring_simulation._SpringSolution];
  dart.setMethodSignature(src__physics__spring_simulation._OverdampedSolution, () => ({
    __proto__: dart.getMethods(src__physics__spring_simulation._OverdampedSolution.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double])
  }));
  dart.setGetterSignature(src__physics__spring_simulation._OverdampedSolution, () => ({
    __proto__: dart.getGetters(src__physics__spring_simulation._OverdampedSolution.__proto__),
    type: src__physics__spring_simulation.SpringType
  }));
  dart.setLibraryUri(src__physics__spring_simulation._OverdampedSolution, "package:flutter_web/src/physics/spring_simulation.dart");
  dart.setFieldSignature(src__physics__spring_simulation._OverdampedSolution, () => ({
    __proto__: dart.getFields(src__physics__spring_simulation._OverdampedSolution.__proto__),
    [_r1]: dart.finalFieldType(core.double),
    [_r2]: dart.finalFieldType(core.double),
    [_c1]: dart.finalFieldType(core.double),
    [_c2]: dart.finalFieldType(core.double)
  }));
  const _w = dart.privateName(src__physics__spring_simulation, "_w");
  src__physics__spring_simulation._UnderdampedSolution = class _UnderdampedSolution extends core.Object {
    static new(spring, distance, velocity) {
      let w = math.sqrt(4.0 * dart.notNull(spring.mass) * dart.notNull(spring.stiffness) - dart.notNull(spring.damping) * dart.notNull(spring.damping)) / (2.0 * dart.notNull(spring.mass));
      let r = -(dart.notNull(spring.damping) / 2.0 * dart.notNull(spring.mass));
      let c1 = distance;
      let c2 = (dart.notNull(velocity) - r * dart.notNull(distance)) / w;
      return new src__physics__spring_simulation._UnderdampedSolution.withArgs(w, r, c1, c2);
    }
    x(time) {
      return math.pow(math.e, dart.notNull(this[_r]) * dart.notNull(time)) * (dart.notNull(this[_c1]) * math.cos(dart.notNull(this[_w]) * dart.notNull(time)) + dart.notNull(this[_c2]) * math.sin(dart.notNull(this[_w]) * dart.notNull(time)));
    }
    dx(time) {
      let power = math.pow(math.e, dart.notNull(this[_r]) * dart.notNull(time));
      let cosine = math.cos(dart.notNull(this[_w]) * dart.notNull(time));
      let sine = math.sin(dart.notNull(this[_w]) * dart.notNull(time));
      return power * (dart.notNull(this[_c2]) * dart.notNull(this[_w]) * cosine - dart.notNull(this[_c1]) * dart.notNull(this[_w]) * sine) + dart.notNull(this[_r]) * power * (dart.notNull(this[_c2]) * sine + dart.notNull(this[_c1]) * cosine);
    }
    get type() {
      return src__physics__spring_simulation.SpringType.underDamped;
    }
  };
  (src__physics__spring_simulation._UnderdampedSolution.withArgs = function(w, r, c1, c2) {
    this[_w] = w;
    this[_r] = r;
    this[_c1] = c1;
    this[_c2] = c2;
    ;
  }).prototype = src__physics__spring_simulation._UnderdampedSolution.prototype;
  dart.addTypeTests(src__physics__spring_simulation._UnderdampedSolution);
  src__physics__spring_simulation._UnderdampedSolution[dart.implements] = () => [src__physics__spring_simulation._SpringSolution];
  dart.setMethodSignature(src__physics__spring_simulation._UnderdampedSolution, () => ({
    __proto__: dart.getMethods(src__physics__spring_simulation._UnderdampedSolution.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double])
  }));
  dart.setGetterSignature(src__physics__spring_simulation._UnderdampedSolution, () => ({
    __proto__: dart.getGetters(src__physics__spring_simulation._UnderdampedSolution.__proto__),
    type: src__physics__spring_simulation.SpringType
  }));
  dart.setLibraryUri(src__physics__spring_simulation._UnderdampedSolution, "package:flutter_web/src/physics/spring_simulation.dart");
  dart.setFieldSignature(src__physics__spring_simulation._UnderdampedSolution, () => ({
    __proto__: dart.getFields(src__physics__spring_simulation._UnderdampedSolution.__proto__),
    [_w]: dart.finalFieldType(core.double),
    [_r]: dart.finalFieldType(core.double),
    [_c1]: dart.finalFieldType(core.double),
    [_c2]: dart.finalFieldType(core.double)
  }));
  const _drag = dart.privateName(src__physics__friction_simulation, "_drag");
  const _dragLog = dart.privateName(src__physics__friction_simulation, "_dragLog");
  const _x$ = dart.privateName(src__physics__friction_simulation, "_x");
  const _v$ = dart.privateName(src__physics__friction_simulation, "_v");
  src__physics__friction_simulation.FrictionSimulation = class FrictionSimulation extends src__physics__simulation.Simulation {
    static through(startPosition, endPosition, startVelocity, endVelocity) {
      if (!(startVelocity === 0.0 || endVelocity === 0.0 || startVelocity[$sign] === endVelocity[$sign])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/physics/friction_simulation.dart", 46, 12, "startVelocity == 0.0 ||\n        endVelocity == 0.0 ||\n        startVelocity.sign == endVelocity.sign");
      if (!(startVelocity[$abs]() >= endVelocity[$abs]())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/physics/friction_simulation.dart", 49, 12, "startVelocity.abs() >= endVelocity.abs()");
      if (!((dart.notNull(endPosition) - dart.notNull(startPosition))[$sign] === startVelocity[$sign])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/physics/friction_simulation.dart", 50, 12, "(endPosition - startPosition).sign == startVelocity.sign");
      return new src__physics__friction_simulation.FrictionSimulation.new(src__physics__friction_simulation.FrictionSimulation._dragFor(startPosition, endPosition, startVelocity, endVelocity), startPosition, startVelocity, {tolerance: new src__physics__tolerance.Tolerance.new({velocity: endVelocity[$abs]()})});
    }
    static _dragFor(startPosition, endPosition, startVelocity, endVelocity) {
      return math.pow(math.e, (dart.notNull(startVelocity) - dart.notNull(endVelocity)) / (dart.notNull(startPosition) - dart.notNull(endPosition)));
    }
    x(time) {
      return dart.notNull(this[_x$]) + dart.notNull(this[_v$]) * math.pow(this[_drag], time) / dart.notNull(this[_dragLog]) - dart.notNull(this[_v$]) / dart.notNull(this[_dragLog]);
    }
    dx(time) {
      return dart.notNull(this[_v$]) * math.pow(this[_drag], time);
    }
    get finalX() {
      return dart.notNull(this[_x$]) - dart.notNull(this[_v$]) / dart.notNull(this[_dragLog]);
    }
    timeAtX(x) {
      if (x == this[_x$]) return 0.0;
      if (this[_v$] === 0.0 || (dart.notNull(this[_v$]) > 0 ? dart.notNull(x) < dart.notNull(this[_x$]) || dart.notNull(x) > dart.notNull(this.finalX) : dart.notNull(x) > dart.notNull(this[_x$]) || dart.notNull(x) < dart.notNull(this.finalX))) return core.double.infinity;
      return math.log(dart.notNull(this[_dragLog]) * (dart.notNull(x) - dart.notNull(this[_x$])) / dart.notNull(this[_v$]) + 1.0) / dart.notNull(this[_dragLog]);
    }
    isDone(time) {
      return this.dx(time)[$abs]() < dart.notNull(this.tolerance.velocity);
    }
  };
  (src__physics__friction_simulation.FrictionSimulation.new = function(drag, position, velocity, opts) {
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : src__physics__tolerance.Tolerance.defaultTolerance;
    this[_drag] = drag;
    this[_dragLog] = math.log(drag);
    this[_x$] = position;
    this[_v$] = velocity;
    src__physics__friction_simulation.FrictionSimulation.__proto__.new.call(this, {tolerance: tolerance});
    ;
  }).prototype = src__physics__friction_simulation.FrictionSimulation.prototype;
  dart.addTypeTests(src__physics__friction_simulation.FrictionSimulation);
  dart.setMethodSignature(src__physics__friction_simulation.FrictionSimulation, () => ({
    __proto__: dart.getMethods(src__physics__friction_simulation.FrictionSimulation.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    timeAtX: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setGetterSignature(src__physics__friction_simulation.FrictionSimulation, () => ({
    __proto__: dart.getGetters(src__physics__friction_simulation.FrictionSimulation.__proto__),
    finalX: core.double
  }));
  dart.setLibraryUri(src__physics__friction_simulation.FrictionSimulation, "package:flutter_web/src/physics/friction_simulation.dart");
  dart.setFieldSignature(src__physics__friction_simulation.FrictionSimulation, () => ({
    __proto__: dart.getFields(src__physics__friction_simulation.FrictionSimulation.__proto__),
    [_drag]: dart.finalFieldType(core.double),
    [_dragLog]: dart.finalFieldType(core.double),
    [_x$]: dart.finalFieldType(core.double),
    [_v$]: dart.finalFieldType(core.double)
  }));
  const _minX$ = dart.privateName(src__physics__friction_simulation, "_minX");
  const _maxX$ = dart.privateName(src__physics__friction_simulation, "_maxX");
  src__physics__friction_simulation.BoundedFrictionSimulation = class BoundedFrictionSimulation extends src__physics__friction_simulation.FrictionSimulation {
    x(time) {
      return super.x(time)[$clamp](this[_minX$], this[_maxX$]);
    }
    isDone(time) {
      return dart.test(super.isDone(time)) || (dart.notNull(this.x(time)) - dart.notNull(this[_minX$]))[$abs]() < dart.notNull(this.tolerance.distance) || (dart.notNull(this.x(time)) - dart.notNull(this[_maxX$]))[$abs]() < dart.notNull(this.tolerance.distance);
    }
  };
  (src__physics__friction_simulation.BoundedFrictionSimulation.new = function(drag, position, velocity, _minX, _maxX) {
    this[_minX$] = _minX;
    this[_maxX$] = _maxX;
    if (!(position[$clamp](_minX, _maxX) === position)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/physics/friction_simulation.dart", 117, 16, "position.clamp(_minX, _maxX) == position");
    src__physics__friction_simulation.BoundedFrictionSimulation.__proto__.new.call(this, drag, position, velocity);
    ;
  }).prototype = src__physics__friction_simulation.BoundedFrictionSimulation.prototype;
  dart.addTypeTests(src__physics__friction_simulation.BoundedFrictionSimulation);
  dart.setLibraryUri(src__physics__friction_simulation.BoundedFrictionSimulation, "package:flutter_web/src/physics/friction_simulation.dart");
  dart.setFieldSignature(src__physics__friction_simulation.BoundedFrictionSimulation, () => ({
    __proto__: dart.getFields(src__physics__friction_simulation.BoundedFrictionSimulation.__proto__),
    [_minX$]: dart.finalFieldType(core.double),
    [_maxX$]: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/flutter_web/src/physics/clamped_simulation", {
    "package:flutter_web/src/physics/tolerance.dart": src__physics__tolerance,
    "package:flutter_web/src/physics/utils.dart": src__physics__utils,
    "package:flutter_web/src/physics/gravity_simulation.dart": src__physics__gravity_simulation,
    "package:flutter_web/src/physics/simulation.dart": src__physics__simulation,
    "package:flutter_web/src/physics/clamped_simulation.dart": src__physics__clamped_simulation,
    "package:flutter_web/src/physics/spring_simulation.dart": src__physics__spring_simulation,
    "package:flutter_web/src/physics/friction_simulation.dart": src__physics__friction_simulation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/flutter_web/src/physics/tolerance.dart","org-dartlang-app:///packages/flutter_web/src/physics/utils.dart","org-dartlang-app:///packages/flutter_web/src/physics/simulation.dart","org-dartlang-app:///packages/flutter_web/src/physics/gravity_simulation.dart","org-dartlang-app:///packages/flutter_web/src/physics/clamped_simulation.dart","org-dartlang-app:///packages/flutter_web/src/physics/spring_simulation.dart","org-dartlang-app:///packages/flutter_web/src/physics/friction_simulation.dart"],"names":[],"mappings":"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","file":"clamped_simulation.ddc.js"}');
  // Exports:
  return {
    src__physics__tolerance: src__physics__tolerance,
    src__physics__utils: src__physics__utils,
    src__physics__gravity_simulation: src__physics__gravity_simulation,
    src__physics__simulation: src__physics__simulation,
    src__physics__clamped_simulation: src__physics__clamped_simulation,
    src__physics__spring_simulation: src__physics__spring_simulation,
    src__physics__friction_simulation: src__physics__friction_simulation
  };
});

//# sourceMappingURL=clamped_simulation.ddc.js.map
