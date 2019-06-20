define(['dart_sdk', 'packages/flutter_web/src/scheduler/binding', 'packages/flutter_web/src/foundation/assertions'], function(dart_sdk, binding, assertions) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__scheduler__binding = binding.src__scheduler__binding;
  const src__foundation__assertions = assertions.src__foundation__assertions;
  const scheduler = Object.create(dart.library);
  const src__scheduler__ticker = Object.create(dart.library);
  const $_equals = dartx._equals;
  const $runtimeType = dartx.runtimeType;
  const $trimRight = dartx.trimRight;
  const $split = dartx.split;
  const $forEach = dartx.forEach;
  const $toString = dartx.toString;
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let CompleterOfNull = () => (CompleterOfNull = dart.constFn(async.Completer$(core.Null)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let FutureOrOfNull = () => (FutureOrOfNull = dart.constFn(async.FutureOr$(core.Null)))();
  let VoidToFutureOrOfNull = () => (VoidToFutureOrOfNull = dart.constFn(dart.fnType(FutureOrOfNull(), [])))();
  src__scheduler__ticker.TickerProvider = class TickerProvider extends core.Object {};
  (src__scheduler__ticker.TickerProvider.new = function() {
    ;
  }).prototype = src__scheduler__ticker.TickerProvider.prototype;
  dart.addTypeTests(src__scheduler__ticker.TickerProvider);
  dart.setLibraryUri(src__scheduler__ticker.TickerProvider, "package:flutter_web/src/scheduler/ticker.dart");
  const _future = dart.privateName(src__scheduler__ticker, "_future");
  const _muted = dart.privateName(src__scheduler__ticker, "_muted");
  const _startTime = dart.privateName(src__scheduler__ticker, "_startTime");
  const _animationId = dart.privateName(src__scheduler__ticker, "_animationId");
  const _debugCreationStack = dart.privateName(src__scheduler__ticker, "_debugCreationStack");
  const _onTick$ = dart.privateName(src__scheduler__ticker, "_onTick");
  const _cancel = dart.privateName(src__scheduler__ticker, "_cancel");
  const _complete = dart.privateName(src__scheduler__ticker, "_complete");
  const _tick = dart.privateName(src__scheduler__ticker, "_tick");
  src__scheduler__ticker.Ticker = class Ticker extends core.Object {
    get debugLabel() {
      return this[debugLabel$];
    }
    set debugLabel(value) {
      super.debugLabel = value;
    }
    get muted() {
      return this[_muted];
    }
    set muted(value) {
      if (dart.equals(value, this.muted)) return;
      this[_muted] = value;
      if (dart.test(value)) {
        this.unscheduleTick();
      } else if (dart.test(this.shouldScheduleTick)) {
        this.scheduleTick();
      }
    }
    get isTicking() {
      if (this[_future] == null) return false;
      if (dart.test(this.muted)) return false;
      if (dart.test(src__scheduler__binding.SchedulerBinding.instance.framesEnabled)) return true;
      if (!dart.equals(src__scheduler__binding.SchedulerBinding.instance.schedulerPhase, src__scheduler__binding.SchedulerPhase.idle)) return true;
      return false;
    }
    get isActive() {
      return this[_future] != null;
    }
    start() {
      if (!dart.test(dart.fn(() => {
        if (dart.test(this.isActive)) {
          dart.throw(src__foundation__assertions.FlutterError.new("A ticker was started twice.\n" + "A ticker that is already active cannot be started again without first stopping it.\n" + "The affected ticker was: " + dart.str(this.toString({debugIncludeStack: true}))));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/ticker.dart", 143, 12, "() {\n      if (isActive) {\n        throw FlutterError('A ticker was started twice.\\n'\n            'A ticker that is already active cannot be started again without first stopping it.\\n'\n            'The affected ticker was: ${toString(debugIncludeStack: true)}');\n      }\n      return true;\n    }()");
      if (!(this[_startTime] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/ticker.dart", 151, 12, "_startTime == null");
      this[_future] = new src__scheduler__ticker.TickerFuture.__();
      if (dart.test(this.shouldScheduleTick)) {
        this.scheduleTick();
      }
      if (dart.notNull(src__scheduler__binding.SchedulerBinding.instance.schedulerPhase.index) > dart.notNull(src__scheduler__binding.SchedulerPhase.idle.index) && dart.notNull(src__scheduler__binding.SchedulerBinding.instance.schedulerPhase.index) < dart.notNull(src__scheduler__binding.SchedulerPhase.postFrameCallbacks.index)) this[_startTime] = src__scheduler__binding.SchedulerBinding.instance.currentFrameTimeStamp;
      return this[_future];
    }
    stop(opts) {
      let canceled = opts && 'canceled' in opts ? opts.canceled : false;
      if (!dart.test(this.isActive)) return;
      let localFuture = this[_future];
      this[_future] = null;
      this[_startTime] = null;
      if (!!dart.test(this.isActive)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/ticker.dart", 187, 12, "!isActive");
      this.unscheduleTick();
      if (dart.test(canceled)) {
        localFuture[_cancel](this);
      } else {
        localFuture[_complete]();
      }
    }
    get scheduled() {
      return this[_animationId] != null;
    }
    get shouldScheduleTick() {
      return !dart.test(this.muted) && dart.test(this.isActive) && !dart.test(this.scheduled);
    }
    [_tick](timeStamp) {
      if (!dart.test(this.isTicking)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/ticker.dart", 218, 12, "isTicking");
      if (!dart.test(this.scheduled)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/ticker.dart", 219, 12, "scheduled");
      this[_animationId] = null;
      this[_startTime] == null ? this[_startTime] = timeStamp : null;
      this[_onTick$](timeStamp['-'](this[_startTime]));
      if (dart.test(this.shouldScheduleTick)) this.scheduleTick({rescheduling: true});
    }
    scheduleTick(opts) {
      let rescheduling = opts && 'rescheduling' in opts ? opts.rescheduling : false;
      if (!!dart.test(this.scheduled)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/ticker.dart", 235, 12, "!scheduled");
      if (!dart.test(this.shouldScheduleTick)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/ticker.dart", 236, 12, "shouldScheduleTick");
      this[_animationId] = src__scheduler__binding.SchedulerBinding.instance.scheduleFrameCallback(dart.bind(this, _tick), {rescheduling: rescheduling});
    }
    unscheduleTick() {
      if (dart.test(this.scheduled)) {
        src__scheduler__binding.SchedulerBinding.instance.cancelFrameCallbackWithId(this[_animationId]);
        this[_animationId] = null;
      }
      if (!!dart.test(this.shouldScheduleTick)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/ticker.dart", 253, 12, "!shouldScheduleTick");
    }
    absorbTicker(originalTicker) {
      if (!!dart.test(this.isActive)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/ticker.dart", 266, 12, "!isActive");
      if (!(this[_future] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/ticker.dart", 267, 12, "_future == null");
      if (!(this[_startTime] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/ticker.dart", 268, 12, "_startTime == null");
      if (!(this[_animationId] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/ticker.dart", 269, 12, "_animationId == null");
      if (!(originalTicker[_future] == null)[$_equals](originalTicker[_startTime] == null)) dart.assertFailed("Cannot absorb Ticker after it has been disposed.", "org-dartlang-app:///packages/flutter_web/src/scheduler/ticker.dart", 271, 9, "(originalTicker._future == null) == (originalTicker._startTime == null)");
      if (originalTicker[_future] != null) {
        this[_future] = originalTicker[_future];
        this[_startTime] = originalTicker[_startTime];
        if (dart.test(this.shouldScheduleTick)) this.scheduleTick();
        originalTicker[_future] = null;
        originalTicker.unscheduleTick();
      }
      originalTicker.dispose();
    }
    dispose() {
      if (this[_future] != null) {
        let localFuture = this[_future];
        this[_future] = null;
        if (!!dart.test(this.isActive)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/ticker.dart", 291, 14, "!isActive");
        this.unscheduleTick();
        localFuture[_cancel](this);
      }
      if (!dart.test(dart.fn(() => {
        this[_startTime] = core.Duration.zero;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/ticker.dart", 295, 12, "() {\n      // We intentionally don't null out _startTime. This means that if start()\n      // was ever called, the object is now in a bogus state. This weakly helps\n      // catch cases of use-after-dispose.\n      _startTime = Duration.zero;\n      return true;\n    }()");
    }
    toString(opts) {
      let debugIncludeStack = opts && 'debugIncludeStack' in opts ? opts.debugIncludeStack : false;
      let buffer = new core.StringBuffer.new();
      buffer.write(dart.str(this[$runtimeType]) + "(");
      if (!dart.test(dart.fn(() => {
        let t0;
        buffer.write((t0 = this.debugLabel, t0 == null ? "" : t0));
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/ticker.dart", 314, 12, "() {\n      buffer.write(debugLabel ?? '');\n      return true;\n    }()");
      buffer.write(")");
      if (!dart.test(dart.fn(() => {
        if (dart.test(debugIncludeStack)) {
          buffer.writeln();
          buffer.writeln("The stack trace when the " + dart.str(this[$runtimeType]) + " was actually created was:");
          src__foundation__assertions.FlutterError.defaultStackFilter(dart.toString(this[_debugCreationStack])[$trimRight]()[$split]("\n"))[$forEach](dart.bind(buffer, 'writeln'));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/ticker.dart", 319, 12, "() {\n      if (debugIncludeStack) {\n        buffer.writeln();\n        buffer.writeln(\n            'The stack trace when the $runtimeType was actually created was:');\n        FlutterError.defaultStackFilter(\n                _debugCreationStack.toString().trimRight().split('\\n'))\n            .forEach(buffer.writeln);\n      }\n      return true;\n    }()");
      return buffer.toString();
    }
  };
  (src__scheduler__ticker.Ticker.new = function(_onTick, opts) {
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    this[_future] = null;
    this[_muted] = false;
    this[_startTime] = null;
    this[_animationId] = null;
    this[_debugCreationStack] = null;
    this[_onTick$] = _onTick;
    this[debugLabel$] = debugLabel;
    if (!dart.test(dart.fn(() => {
      this[_debugCreationStack] = core.StackTrace.current;
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/ticker.dart", 63, 12, "() {\n      _debugCreationStack = StackTrace.current;\n      return true;\n    }()");
  }).prototype = src__scheduler__ticker.Ticker.prototype;
  dart.addTypeTests(src__scheduler__ticker.Ticker);
  const debugLabel$ = Symbol("Ticker.debugLabel");
  dart.setMethodSignature(src__scheduler__ticker.Ticker, () => ({
    __proto__: dart.getMethods(src__scheduler__ticker.Ticker.__proto__),
    start: dart.fnType(src__scheduler__ticker.TickerFuture, []),
    stop: dart.fnType(dart.void, [], {canceled: core.bool}),
    [_tick]: dart.fnType(dart.void, [core.Duration]),
    scheduleTick: dart.fnType(dart.void, [], {rescheduling: core.bool}),
    unscheduleTick: dart.fnType(dart.void, []),
    absorbTicker: dart.fnType(dart.void, [src__scheduler__ticker.Ticker]),
    dispose: dart.fnType(dart.void, []),
    toString: dart.fnType(core.String, [], {debugIncludeStack: core.bool}),
    [$toString]: dart.fnType(core.String, [], {debugIncludeStack: core.bool})
  }));
  dart.setGetterSignature(src__scheduler__ticker.Ticker, () => ({
    __proto__: dart.getGetters(src__scheduler__ticker.Ticker.__proto__),
    muted: core.bool,
    isTicking: core.bool,
    isActive: core.bool,
    scheduled: core.bool,
    shouldScheduleTick: core.bool
  }));
  dart.setSetterSignature(src__scheduler__ticker.Ticker, () => ({
    __proto__: dart.getSetters(src__scheduler__ticker.Ticker.__proto__),
    muted: core.bool
  }));
  dart.setLibraryUri(src__scheduler__ticker.Ticker, "package:flutter_web/src/scheduler/ticker.dart");
  dart.setFieldSignature(src__scheduler__ticker.Ticker, () => ({
    __proto__: dart.getFields(src__scheduler__ticker.Ticker.__proto__),
    [_future]: dart.fieldType(src__scheduler__ticker.TickerFuture),
    [_muted]: dart.fieldType(core.bool),
    [_startTime]: dart.fieldType(core.Duration),
    [_onTick$]: dart.finalFieldType(dart.fnType(dart.void, [core.Duration])),
    [_animationId]: dart.fieldType(core.int),
    debugLabel: dart.finalFieldType(core.String),
    [_debugCreationStack]: dart.fieldType(core.StackTrace)
  }));
  dart.defineExtensionMethods(src__scheduler__ticker.Ticker, ['toString']);
  const _primaryCompleter = dart.privateName(src__scheduler__ticker, "_primaryCompleter");
  const _secondaryCompleter = dart.privateName(src__scheduler__ticker, "_secondaryCompleter");
  const _completed = dart.privateName(src__scheduler__ticker, "_completed");
  let const$;
  src__scheduler__ticker.TickerFuture = class TickerFuture extends core.Object {
    [_complete]() {
      let t0;
      if (!(this[_completed] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/ticker.dart", 370, 12, "_completed == null");
      this[_completed] = true;
      this[_primaryCompleter].complete(null);
      t0 = this[_secondaryCompleter];
      t0 == null ? null : t0.complete(null);
    }
    [_cancel](ticker) {
      let t0;
      if (!(this[_completed] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/ticker.dart", 377, 12, "_completed == null");
      this[_completed] = false;
      t0 = this[_secondaryCompleter];
      t0 == null ? null : t0.completeError(new src__scheduler__ticker.TickerCanceled.new(ticker));
    }
    whenCompleteOrCancel(callback) {
      function thunk(value) {
        callback();
        return null;
      }
      dart.fn(thunk, dynamicToNull());
      this.orCancel.then(dart.dynamic, thunk, {onError: thunk});
    }
    get orCancel() {
      if (this[_secondaryCompleter] == null) {
        this[_secondaryCompleter] = CompleterOfNull().new();
        if (this[_completed] != null) {
          if (dart.test(this[_completed])) {
            this[_secondaryCompleter].complete(null);
          } else {
            this[_secondaryCompleter].completeError(const$ || (const$ = dart.const(new src__scheduler__ticker.TickerCanceled.new())));
          }
        }
      }
      return this[_secondaryCompleter].future;
    }
    asStream() {
      return this[_primaryCompleter].future.asStream();
    }
    catchError(onError, opts) {
      let test = opts && 'test' in opts ? opts.test : null;
      return this[_primaryCompleter].future.catchError(onError, {test: test});
    }
    then(E, f, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      return this[_primaryCompleter].future.then(E, dart.fnType(async.FutureOr$(E), [core.Null])._check(f), {onError: onError});
    }
    timeout(timeLimit, opts) {
      let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
      VoidTodynamic()._check(onTimeout);
      return this[_primaryCompleter].future.timeout(timeLimit, {onTimeout: VoidToFutureOrOfNull()._check(onTimeout)});
    }
    whenComplete(action) {
      return this[_primaryCompleter].future.whenComplete(action);
    }
  };
  (src__scheduler__ticker.TickerFuture.__ = function() {
    this[_primaryCompleter] = CompleterOfNull().new();
    this[_secondaryCompleter] = null;
    this[_completed] = null;
    ;
  }).prototype = src__scheduler__ticker.TickerFuture.prototype;
  (src__scheduler__ticker.TickerFuture.complete = function() {
    this[_primaryCompleter] = CompleterOfNull().new();
    this[_secondaryCompleter] = null;
    this[_completed] = null;
    this[_complete]();
  }).prototype = src__scheduler__ticker.TickerFuture.prototype;
  src__scheduler__ticker.TickerFuture.prototype[dart.isFuture] = true;
  dart.addTypeTests(src__scheduler__ticker.TickerFuture);
  src__scheduler__ticker.TickerFuture[dart.implements] = () => [async.Future$(dart.void)];
  dart.setMethodSignature(src__scheduler__ticker.TickerFuture, () => ({
    __proto__: dart.getMethods(src__scheduler__ticker.TickerFuture.__proto__),
    [_complete]: dart.fnType(dart.void, []),
    [_cancel]: dart.fnType(dart.void, [src__scheduler__ticker.Ticker]),
    whenCompleteOrCancel: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    asStream: dart.fnType(async.Stream$(core.Null), []),
    catchError: dart.fnType(async.Future$(dart.void), [core.Function], {test: dart.fnType(core.bool, [dart.dynamic])}),
    then: dart.gFnType(E => [async.Future$(E), [dart.fnType(dart.dynamic, [core.Null])], {onError: core.Function}]),
    timeout: dart.fnType(async.Future$(dart.void), [core.Duration], {onTimeout: core.Object}),
    whenComplete: dart.fnType(async.Future$(dart.void), [dart.fnType(dart.dynamic, [])])
  }));
  dart.setGetterSignature(src__scheduler__ticker.TickerFuture, () => ({
    __proto__: dart.getGetters(src__scheduler__ticker.TickerFuture.__proto__),
    orCancel: async.Future$(dart.void)
  }));
  dart.setLibraryUri(src__scheduler__ticker.TickerFuture, "package:flutter_web/src/scheduler/ticker.dart");
  dart.setFieldSignature(src__scheduler__ticker.TickerFuture, () => ({
    __proto__: dart.getFields(src__scheduler__ticker.TickerFuture.__proto__),
    [_primaryCompleter]: dart.finalFieldType(async.Completer$(core.Null)),
    [_secondaryCompleter]: dart.fieldType(async.Completer$(core.Null)),
    [_completed]: dart.fieldType(core.bool)
  }));
  src__scheduler__ticker.TickerCanceled = class TickerCanceled extends core.Object {
    get ticker() {
      return this[ticker$];
    }
    set ticker(value) {
      super.ticker = value;
    }
    toString() {
      if (this.ticker != null) return "This ticker was canceled: " + dart.str(this.ticker);
      return "The ticker was canceled before the \"orCancel\" property was first " + "used.";
    }
  };
  (src__scheduler__ticker.TickerCanceled.new = function(ticker) {
    if (ticker === void 0) ticker = null;
    this[ticker$] = ticker;
    ;
  }).prototype = src__scheduler__ticker.TickerCanceled.prototype;
  dart.addTypeTests(src__scheduler__ticker.TickerCanceled);
  const ticker$ = Symbol("TickerCanceled.ticker");
  src__scheduler__ticker.TickerCanceled[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(src__scheduler__ticker.TickerCanceled, "package:flutter_web/src/scheduler/ticker.dart");
  dart.setFieldSignature(src__scheduler__ticker.TickerCanceled, () => ({
    __proto__: dart.getFields(src__scheduler__ticker.TickerCanceled.__proto__),
    ticker: dart.finalFieldType(src__scheduler__ticker.Ticker)
  }));
  dart.defineExtensionMethods(src__scheduler__ticker.TickerCanceled, ['toString']);
  dart.trackLibraries("packages/flutter_web/scheduler", {
    "package:flutter_web/scheduler.dart": scheduler,
    "package:flutter_web/src/scheduler/ticker.dart": src__scheduler__ticker
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/flutter_web/src/scheduler/ticker.dart"],"names":[],"mappings":"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","file":"scheduler.ddc.js"}');
  // Exports:
  return {
    scheduler: scheduler,
    src__scheduler__ticker: src__scheduler__ticker
  };
});

//# sourceMappingURL=scheduler.ddc.js.map
