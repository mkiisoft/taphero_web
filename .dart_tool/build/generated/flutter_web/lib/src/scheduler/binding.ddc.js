define(['dart_sdk', 'packages/flutter_web/src/foundation/assertions', 'packages/collection/src/priority_queue', 'packages/flutter_web/src/services/clipboard', 'packages/flutter_web_ui/ui', 'packages/flutter_web/services'], function(dart_sdk, assertions, priority_queue, clipboard, ui, services) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const developer = dart_sdk.developer;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__foundation__assertions = assertions.src__foundation__assertions;
  const src__foundation__constants = assertions.src__foundation__constants;
  const src__foundation__diagnostics = assertions.src__foundation__diagnostics;
  const src__foundation__print = assertions.src__foundation__print;
  const src__foundation__debug = assertions.src__foundation__debug;
  const src__foundation__binding = assertions.src__foundation__binding;
  const src__priority_queue = priority_queue.src__priority_queue;
  const src__services__system_channels = clipboard.src__services__system_channels;
  const ui$ = ui.ui;
  const src__services__binding = services.src__services__binding;
  const src__scheduler__debug = Object.create(dart.library);
  const src__scheduler__priority = Object.create(dart.library);
  const src__scheduler__binding = Object.create(dart.library);
  const $abs = dartx.abs;
  const $sign = dartx.sign;
  const $compareTo = dartx.compareTo;
  const $length = dartx.length;
  const $_set = dartx._set;
  const $remove = dartx.remove;
  const $keys = dartx.keys;
  const $_get = dartx._get;
  const $trimRight = dartx.trimRight;
  const $split = dartx.split;
  const $join = dartx.join;
  const $add = dartx.add;
  const $round = dartx.round;
  const $toString = dartx.toString;
  const $padRight = dartx.padRight;
  const $padLeft = dartx.padLeft;
  const $forEach = dartx.forEach;
  const $clear = dartx.clear;
  const $times = dartx['*'];
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let __Tobool = () => (__Tobool = dart.constFn(dart.fnType(core.bool, [], {priority: core.int, scheduler: src__scheduler__binding.SchedulerBinding})))();
  let HeapPriorityQueueOf_TaskEntry = () => (HeapPriorityQueueOf_TaskEntry = dart.constFn(src__priority_queue.HeapPriorityQueue$(src__scheduler__binding._TaskEntry)))();
  let _TaskEntryAnd_TaskEntryToint = () => (_TaskEntryAnd_TaskEntryToint = dart.constFn(dart.fnType(core.int, [src__scheduler__binding._TaskEntry, src__scheduler__binding._TaskEntry])))();
  let IdentityMapOfint$_FrameCallbackEntry = () => (IdentityMapOfint$_FrameCallbackEntry = dart.constFn(_js_helper.IdentityMap$(core.int, src__scheduler__binding._FrameCallbackEntry)))();
  let _IdentityHashSetOfint = () => (_IdentityHashSetOfint = dart.constFn(collection._IdentityHashSet$(core.int)))();
  let DurationTovoid = () => (DurationTovoid = dart.constFn(dart.fnType(dart.void, [core.Duration])))();
  let JSArrayOfDurationTovoid = () => (JSArrayOfDurationTovoid = dart.constFn(_interceptors.JSArray$(DurationTovoid())))();
  let FutureOfdouble = () => (FutureOfdouble = dart.constFn(async.Future$(core.double)))();
  let VoidToFutureOfdouble = () => (VoidToFutureOfdouble = dart.constFn(dart.fnType(FutureOfdouble(), [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let doubleToFutureOfNull = () => (doubleToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [core.double])))();
  let SyncIterableOfDiagnosticsStackTrace = () => (SyncIterableOfDiagnosticsStackTrace = dart.constFn(_js_helper.SyncIterable$(src__foundation__assertions.DiagnosticsStackTrace)))();
  let IterableOfDiagnosticsStackTrace = () => (IterableOfDiagnosticsStackTrace = dart.constFn(core.Iterable$(src__foundation__assertions.DiagnosticsStackTrace)))();
  let VoidToIterableOfDiagnosticsStackTrace = () => (VoidToIterableOfDiagnosticsStackTrace = dart.constFn(dart.fnType(IterableOfDiagnosticsStackTrace(), [])))();
  let LinkedHashMapOfint$_FrameCallbackEntry = () => (LinkedHashMapOfint$_FrameCallbackEntry = dart.constFn(collection.LinkedHashMap$(core.int, src__scheduler__binding._FrameCallbackEntry)))();
  let SyncIterableOfDiagnosticsNode = () => (SyncIterableOfDiagnosticsNode = dart.constFn(_js_helper.SyncIterable$(src__foundation__diagnostics.DiagnosticsNode)))();
  let IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(src__foundation__diagnostics.DiagnosticsNode)))();
  let VoidToIterableOfDiagnosticsNode = () => (VoidToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [])))();
  let CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  let DurationToNull = () => (DurationToNull = dart.constFn(dart.fnType(core.Null, [core.Duration])))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let intAnd_FrameCallbackEntryToNull = () => (intAnd_FrameCallbackEntryToNull = dart.constFn(dart.fnType(core.Null, [core.int, src__scheduler__binding._FrameCallbackEntry])))();
  let ListOfDurationTovoid = () => (ListOfDurationTovoid = dart.constFn(core.List$(DurationTovoid())))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  src__scheduler__debug.debugAssertAllSchedulerVarsUnset = function(reason) {
    if (!dart.test(dart.fn(() => {
      if (dart.test(src__scheduler__debug.debugPrintBeginFrameBanner) || dart.test(src__scheduler__debug.debugPrintEndFrameBanner)) {
        dart.throw(src__foundation__assertions.FlutterError.new(reason));
      }
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/debug.dart", 62, 10, "() {\n    if (debugPrintBeginFrameBanner || debugPrintEndFrameBanner) {\n      throw new FlutterError(reason);\n    }\n    return true;\n  }()");
    return true;
  };
  dart.defineLazy(src__scheduler__debug, {
    /*src__scheduler__debug.debugPrintBeginFrameBanner*/get debugPrintBeginFrameBanner() {
      return false;
    },
    set debugPrintBeginFrameBanner(_) {},
    /*src__scheduler__debug.debugPrintEndFrameBanner*/get debugPrintEndFrameBanner() {
      return false;
    },
    set debugPrintEndFrameBanner(_) {},
    /*src__scheduler__debug.debugPrintScheduleFrameStacks*/get debugPrintScheduleFrameStacks() {
      return false;
    },
    set debugPrintScheduleFrameStacks(_) {}
  });
  const _value$ = dart.privateName(src__scheduler__priority, "_value");
  src__scheduler__priority.Priority = class Priority extends core.Object {
    get value() {
      return this[_value$];
    }
    ['+'](offset) {
      if (offset[$abs]() > dart.notNull(src__scheduler__priority.Priority.kMaxOffset)) {
        offset = dart.notNull(src__scheduler__priority.Priority.kMaxOffset) * offset[$sign];
      }
      return new src__scheduler__priority.Priority.__(dart.notNull(this[_value$]) + dart.notNull(offset));
    }
    ['-'](offset) {
      return this['+'](-dart.notNull(offset));
    }
  };
  (src__scheduler__priority.Priority.__ = function(_value) {
    this[_value$] = _value;
    ;
  }).prototype = src__scheduler__priority.Priority.prototype;
  dart.addTypeTests(src__scheduler__priority.Priority);
  dart.setMethodSignature(src__scheduler__priority.Priority, () => ({
    __proto__: dart.getMethods(src__scheduler__priority.Priority.__proto__),
    '+': dart.fnType(src__scheduler__priority.Priority, [core.int]),
    '-': dart.fnType(src__scheduler__priority.Priority, [core.int])
  }));
  dart.setGetterSignature(src__scheduler__priority.Priority, () => ({
    __proto__: dart.getGetters(src__scheduler__priority.Priority.__proto__),
    value: core.int
  }));
  dart.setLibraryUri(src__scheduler__priority.Priority, "package:flutter_web/src/scheduler/priority.dart");
  dart.setFieldSignature(src__scheduler__priority.Priority, () => ({
    __proto__: dart.getFields(src__scheduler__priority.Priority.__proto__),
    [_value$]: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(src__scheduler__priority.Priority, {
    /*src__scheduler__priority.Priority.idle*/get idle() {
      return dart.const(new src__scheduler__priority.Priority.__(0));
    },
    /*src__scheduler__priority.Priority.animation*/get animation() {
      return dart.const(new src__scheduler__priority.Priority.__(100000));
    },
    /*src__scheduler__priority.Priority.touch*/get touch() {
      return dart.const(new src__scheduler__priority.Priority.__(200000));
    },
    /*src__scheduler__priority.Priority.kMaxOffset*/get kMaxOffset() {
      return 10000;
    }
  });
  const _is__TaskEntry_default = Symbol('_is__TaskEntry_default');
  src__scheduler__binding._TaskEntry$ = dart.generic(T => {
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    class _TaskEntry extends core.Object {
      get completer() {
        return this[completer];
      }
      set completer(value) {
        this[completer] = CompleterOfT()._check(value);
      }
      run() {
        let t0;
        if (!dart.test(src__foundation__constants.kReleaseMode)) {
          developer.Timeline.timeSync(core.Null, (t0 = this.debugLabel, t0 == null ? "Scheduled Task" : t0), dart.fn(() => {
            this.completer.complete(this.task());
          }, VoidToNull()), {flow: this.flow != null ? developer.Flow.step(this.flow.id) : null});
        } else {
          this.completer.complete(this.task());
        }
      }
    }
    (_TaskEntry.new = function(task, priority, debugLabel, flow) {
      this.debugStack = null;
      this[completer] = null;
      this.task = task;
      this.priority = priority;
      this.debugLabel = debugLabel;
      this.flow = flow;
      if (!dart.test(dart.fn(() => {
        this.debugStack = core.StackTrace.current;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 65, 12, "() {\n      debugStack = StackTrace.current;\n      return true;\n    }()");
      this.completer = CompleterOfT().new();
    }).prototype = _TaskEntry.prototype;
    dart.addTypeTests(_TaskEntry);
    _TaskEntry.prototype[_is__TaskEntry_default] = true;
    const completer = Symbol("_TaskEntry.completer");
    dart.setMethodSignature(_TaskEntry, () => ({
      __proto__: dart.getMethods(_TaskEntry.__proto__),
      run: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_TaskEntry, "package:flutter_web/src/scheduler/binding.dart");
    dart.setFieldSignature(_TaskEntry, () => ({
      __proto__: dart.getFields(_TaskEntry.__proto__),
      task: dart.finalFieldType(dart.fnType(T, [])),
      priority: dart.finalFieldType(core.int),
      debugLabel: dart.finalFieldType(core.String),
      flow: dart.finalFieldType(developer.Flow),
      debugStack: dart.fieldType(core.StackTrace),
      completer: dart.fieldType(async.Completer$(T))
    }));
    return _TaskEntry;
  });
  src__scheduler__binding._TaskEntry = src__scheduler__binding._TaskEntry$();
  dart.addTypeTests(src__scheduler__binding._TaskEntry, _is__TaskEntry_default);
  src__scheduler__binding._FrameCallbackEntry = class _FrameCallbackEntry extends core.Object {};
  (src__scheduler__binding._FrameCallbackEntry.new = function(callback, opts) {
    let rescheduling = opts && 'rescheduling' in opts ? opts.rescheduling : false;
    this.debugStack = null;
    this.callback = callback;
    if (!dart.test(dart.fn(() => {
      if (dart.test(rescheduling)) {
        if (!dart.test(dart.fn(() => {
          if (src__scheduler__binding._FrameCallbackEntry.debugCurrentCallbackStack == null) {
            dart.throw(src__foundation__assertions.FlutterError.new("scheduleFrameCallback called with rescheduling true, but no callback is in scope.\n" + "The \"rescheduling\" argument should only be set to true if the " + "callback is being reregistered from within the callback itself, " + "and only then if the callback itself is entirely synchronous. " + "If this is the initial registration of the callback, or if the " + "callback is asynchronous, then do not use the \"rescheduling\" " + "argument."));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 98, 16, "() {\n          if (debugCurrentCallbackStack == null) {\n            throw FlutterError(\n                'scheduleFrameCallback called with rescheduling true, but no callback is in scope.\\n'\n                'The \"rescheduling\" argument should only be set to true if the '\n                'callback is being reregistered from within the callback itself, '\n                'and only then if the callback itself is entirely synchronous. '\n                'If this is the initial registration of the callback, or if the '\n                'callback is asynchronous, then do not use the \"rescheduling\" '\n                'argument.');\n          }\n          return true;\n        }()");
        this.debugStack = src__scheduler__binding._FrameCallbackEntry.debugCurrentCallbackStack;
      } else {
        this.debugStack = core.StackTrace.current;
      }
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 96, 12, "() {\n      if (rescheduling) {\n        assert(() {\n          if (debugCurrentCallbackStack == null) {\n            throw FlutterError(\n                'scheduleFrameCallback called with rescheduling true, but no callback is in scope.\\n'\n                'The \"rescheduling\" argument should only be set to true if the '\n                'callback is being reregistered from within the callback itself, '\n                'and only then if the callback itself is entirely synchronous. '\n                'If this is the initial registration of the callback, or if the '\n                'callback is asynchronous, then do not use the \"rescheduling\" '\n                'argument.');\n          }\n          return true;\n        }());\n        debugStack = debugCurrentCallbackStack;\n      } else {\n        // TODO(ianh): trim the frames from this library, so that the call to scheduleFrameCallback is the top one\n        debugStack = StackTrace.current;\n      }\n      return true;\n    }()");
  }).prototype = src__scheduler__binding._FrameCallbackEntry.prototype;
  dart.addTypeTests(src__scheduler__binding._FrameCallbackEntry);
  dart.setLibraryUri(src__scheduler__binding._FrameCallbackEntry, "package:flutter_web/src/scheduler/binding.dart");
  dart.setFieldSignature(src__scheduler__binding._FrameCallbackEntry, () => ({
    __proto__: dart.getFields(src__scheduler__binding._FrameCallbackEntry.__proto__),
    callback: dart.finalFieldType(dart.fnType(dart.void, [core.Duration])),
    debugStack: dart.fieldType(core.StackTrace)
  }));
  dart.defineLazy(src__scheduler__binding._FrameCallbackEntry, {
    /*src__scheduler__binding._FrameCallbackEntry.debugCurrentCallbackStack*/get debugCurrentCallbackStack() {
      return null;
    },
    set debugCurrentCallbackStack(_) {}
  });
  const _name$ = dart.privateName(src__scheduler__binding, "_name");
  src__scheduler__binding.SchedulerPhase = class SchedulerPhase extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (src__scheduler__binding.SchedulerPhase.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = src__scheduler__binding.SchedulerPhase.prototype;
  dart.addTypeTests(src__scheduler__binding.SchedulerPhase);
  dart.setLibraryUri(src__scheduler__binding.SchedulerPhase, "package:flutter_web/src/scheduler/binding.dart");
  dart.setFieldSignature(src__scheduler__binding.SchedulerPhase, () => ({
    __proto__: dart.getFields(src__scheduler__binding.SchedulerPhase.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__scheduler__binding.SchedulerPhase, ['toString']);
  src__scheduler__binding.SchedulerPhase.idle = dart.const(new src__scheduler__binding.SchedulerPhase.new(0, "SchedulerPhase.idle"));
  src__scheduler__binding.SchedulerPhase.transientCallbacks = dart.const(new src__scheduler__binding.SchedulerPhase.new(1, "SchedulerPhase.transientCallbacks"));
  src__scheduler__binding.SchedulerPhase.midFrameMicrotasks = dart.const(new src__scheduler__binding.SchedulerPhase.new(2, "SchedulerPhase.midFrameMicrotasks"));
  src__scheduler__binding.SchedulerPhase.persistentCallbacks = dart.const(new src__scheduler__binding.SchedulerPhase.new(3, "SchedulerPhase.persistentCallbacks"));
  src__scheduler__binding.SchedulerPhase.postFrameCallbacks = dart.const(new src__scheduler__binding.SchedulerPhase.new(4, "SchedulerPhase.postFrameCallbacks"));
  src__scheduler__binding.SchedulerPhase.values = dart.constList([src__scheduler__binding.SchedulerPhase.idle, src__scheduler__binding.SchedulerPhase.transientCallbacks, src__scheduler__binding.SchedulerPhase.midFrameMicrotasks, src__scheduler__binding.SchedulerPhase.persistentCallbacks, src__scheduler__binding.SchedulerPhase.postFrameCallbacks], src__scheduler__binding.SchedulerPhase);
  const _lifecycleState = dart.privateName(src__scheduler__binding, "_lifecycleState");
  const _taskQueue = dart.privateName(src__scheduler__binding, "_taskQueue");
  const _hasRequestedAnEventLoopCallback = dart.privateName(src__scheduler__binding, "_hasRequestedAnEventLoopCallback");
  const _nextFrameCallbackId = dart.privateName(src__scheduler__binding, "_nextFrameCallbackId");
  const _transientCallbacks = dart.privateName(src__scheduler__binding, "_transientCallbacks");
  const _removedIds = dart.privateName(src__scheduler__binding, "_removedIds");
  const _persistentCallbacks = dart.privateName(src__scheduler__binding, "_persistentCallbacks");
  const _postFrameCallbacks = dart.privateName(src__scheduler__binding, "_postFrameCallbacks");
  const _nextFrameCompleter = dart.privateName(src__scheduler__binding, "_nextFrameCompleter");
  const _hasScheduledFrame = dart.privateName(src__scheduler__binding, "_hasScheduledFrame");
  const _schedulerPhase = dart.privateName(src__scheduler__binding, "_schedulerPhase");
  const _framesEnabled = dart.privateName(src__scheduler__binding, "_framesEnabled");
  const _warmUpFrame = dart.privateName(src__scheduler__binding, "_warmUpFrame");
  const _firstRawTimeStampInEpoch = dart.privateName(src__scheduler__binding, "_firstRawTimeStampInEpoch");
  const _epochStart = dart.privateName(src__scheduler__binding, "_epochStart");
  const _lastRawTimeStamp = dart.privateName(src__scheduler__binding, "_lastRawTimeStamp");
  const _currentFrameTimeStamp = dart.privateName(src__scheduler__binding, "_currentFrameTimeStamp");
  const _profileFrameNumber = dart.privateName(src__scheduler__binding, "_profileFrameNumber");
  const _profileFrameStopwatch = dart.privateName(src__scheduler__binding, "_profileFrameStopwatch");
  const _debugBanner = dart.privateName(src__scheduler__binding, "_debugBanner");
  const _ignoreNextEngineDrawFrame = dart.privateName(src__scheduler__binding, "_ignoreNextEngineDrawFrame");
  const _handleBeginFrame = dart.privateName(src__scheduler__binding, "_handleBeginFrame");
  const _handleDrawFrame = dart.privateName(src__scheduler__binding, "_handleDrawFrame");
  const _handleLifecycleMessage = dart.privateName(src__scheduler__binding, "_handleLifecycleMessage");
  const _setFramesEnabledState = dart.privateName(src__scheduler__binding, "_setFramesEnabledState");
  const _ensureEventLoopCallback = dart.privateName(src__scheduler__binding, "_ensureEventLoopCallback");
  const _runTasks = dart.privateName(src__scheduler__binding, "_runTasks");
  const _adjustForEpoch = dart.privateName(src__scheduler__binding, "_adjustForEpoch");
  const _invokeFrameCallback = dart.privateName(src__scheduler__binding, "_invokeFrameCallback");
  const _profileFramePostEvent = dart.privateName(src__scheduler__binding, "_profileFramePostEvent");
  src__scheduler__binding.SchedulerBinding = class SchedulerBinding extends core.Object {
    static get instance() {
      return src__scheduler__binding.SchedulerBinding._instance;
    }
    static _parseAppLifecycleMessage(message) {
      switch (message) {
        case "AppLifecycleState.paused":
        {
          return ui$.AppLifecycleState.paused;
        }
        case "AppLifecycleState.resumed":
        {
          return ui$.AppLifecycleState.resumed;
        }
        case "AppLifecycleState.inactive":
        {
          return ui$.AppLifecycleState.inactive;
        }
        case "AppLifecycleState.suspending":
        {
          return ui$.AppLifecycleState.suspending;
        }
      }
      return null;
    }
    static _taskSorter(e1, e2) {
      return -e1.priority[$compareTo](e2.priority);
    }
    static debugPrintTransientCallbackRegistrationStack() {
      if (!dart.test(dart.fn(() => {
        if (src__scheduler__binding._FrameCallbackEntry.debugCurrentCallbackStack != null) {
          src__foundation__print.debugPrint("When the current transient callback was registered, this was the stack:");
          src__foundation__print.debugPrint(src__foundation__assertions.FlutterError.defaultStackFilter(dart.toString(src__scheduler__binding._FrameCallbackEntry.debugCurrentCallbackStack)[$trimRight]()[$split]("\n"))[$join]("\n"));
        } else {
          src__foundation__print.debugPrint("No transient callback is currently executing.");
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 547, 12, " assert(() {\n      if (_FrameCallbackEntry.debugCurrentCallbackStack != null) {\n        debugPrint(\n            'When the current transient callback was registered, this was the stack:');\n        debugPrint(FlutterError.defaultStackFilter(_FrameCallbackEntry\n                .debugCurrentCallbackStack\n                .toString()\n                .trimRight()\n                .split('\\n'))\n            .join('\\n'));\n      } else {\n        debugPrint('No transient callback is currently executing.');\n      }\n      return true;");
    }
    static _debugDescribeTimeStamp(timeStamp, buffer) {
      if (dart.notNull(timeStamp.inDays) > 0) buffer.write(dart.str(timeStamp.inDays) + "d ");
      if (dart.notNull(timeStamp.inHours) > 0) buffer.write(dart.str(dart.notNull(timeStamp.inHours) - dart.notNull(timeStamp.inDays) * dart.notNull(core.Duration.hoursPerDay)) + "h ");
      if (dart.notNull(timeStamp.inMinutes) > 0) buffer.write(dart.str(dart.notNull(timeStamp.inMinutes) - dart.notNull(timeStamp.inHours) * dart.notNull(core.Duration.minutesPerHour)) + "m ");
      if (dart.notNull(timeStamp.inSeconds) > 0) buffer.write(dart.str(dart.notNull(timeStamp.inSeconds) - dart.notNull(timeStamp.inMinutes) * dart.notNull(core.Duration.secondsPerMinute)) + "s ");
      buffer.write(dart.str(dart.notNull(timeStamp.inMilliseconds) - dart.notNull(timeStamp.inSeconds) * dart.notNull(core.Duration.millisecondsPerSecond)));
      let microseconds = dart.notNull(timeStamp.inMicroseconds) - dart.notNull(timeStamp.inMilliseconds) * dart.notNull(core.Duration.microsecondsPerMillisecond);
      if (microseconds > 0) buffer.write("." + microseconds[$toString]()[$padLeft](3, "0"));
      buffer.write("ms");
    }
  };
  src__scheduler__binding.SchedulerBinding[dart.mixinOn] = _SchedulerBinding$BindingBase$ServicesBinding => class SchedulerBinding extends _SchedulerBinding$BindingBase$ServicesBinding {
    get schedulingStrategy() {
      return this[schedulingStrategy];
    }
    set schedulingStrategy(value) {
      this[schedulingStrategy] = value;
    }
    initInstances() {
      super.initInstances();
      src__scheduler__binding.SchedulerBinding._instance = this;
      this.window.onBeginFrame = dart.bind(this, _handleBeginFrame);
      this.window.onDrawFrame = dart.bind(this, _handleDrawFrame);
      src__services__system_channels.SystemChannels.lifecycle.setMessageHandler(dart.bind(this, _handleLifecycleMessage));
      this.readInitialLifecycleStateFromNativeWindow();
    }
    initServiceExtensions() {
      super.initServiceExtensions();
      if (!dart.test(src__foundation__constants.kReleaseMode)) {
        this.registerNumericServiceExtension({name: "timeDilation", getter: dart.fn(() => async.async(core.double, function*() {
            return src__scheduler__binding.timeDilation;
          }), VoidToFutureOfdouble()), setter: dart.fn(value => async.async(core.Null, function*() {
            src__scheduler__binding.timeDilation = value;
          }), doubleToFutureOfNull())});
      }
    }
    get lifecycleState() {
      return this[_lifecycleState];
    }
    readInitialLifecycleStateFromNativeWindow() {
      if (this[_lifecycleState] == null && src__scheduler__binding.SchedulerBinding._parseAppLifecycleMessage(this.window.initialLifecycleState) != null) {
        this[_handleLifecycleMessage](this.window.initialLifecycleState);
      }
    }
    handleAppLifecycleStateChanged(state) {
      if (!(state != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 262, 12, "state != null");
      this[_lifecycleState] = state;
      switch (state) {
        case ui$.AppLifecycleState.resumed:
        case ui$.AppLifecycleState.inactive:
        {
          this[_setFramesEnabledState](true);
          break;
        }
        case ui$.AppLifecycleState.paused:
        case ui$.AppLifecycleState.suspending:
        {
          this[_setFramesEnabledState](false);
          break;
        }
      }
    }
    [_handleLifecycleMessage](message) {
      return async.async(core.String, (function* _handleLifecycleMessage() {
        this.handleAppLifecycleStateChanged(src__scheduler__binding.SchedulerBinding._parseAppLifecycleMessage(message));
        return null;
      }).bind(this));
    }
    scheduleTask(T, task, priority, opts) {
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      let flow = opts && 'flow' in opts ? opts.flow : null;
      let isFirstTask = this[_taskQueue].isEmpty;
      let entry = new (src__scheduler__binding._TaskEntry$(T)).new(task, priority.value, debugLabel, flow);
      this[_taskQueue].add(entry);
      if (dart.test(isFirstTask) && !dart.test(this.locked)) this[_ensureEventLoopCallback]();
      return entry.completer.future;
    }
    unlocked() {
      super.unlocked();
      if (dart.test(this[_taskQueue].isNotEmpty)) this[_ensureEventLoopCallback]();
    }
    [_ensureEventLoopCallback]() {
      if (!!dart.test(this.locked)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 355, 12, "!locked");
      if (!dart.test(this[_taskQueue].isNotEmpty)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 356, 12, "_taskQueue.isNotEmpty");
      if (dart.test(this[_hasRequestedAnEventLoopCallback])) return;
      this[_hasRequestedAnEventLoopCallback] = true;
      async.Timer.run(dart.bind(this, _runTasks));
    }
    [_runTasks]() {
      this[_hasRequestedAnEventLoopCallback] = false;
      if (dart.test(this.handleEventLoopCallback())) this[_ensureEventLoopCallback]();
    }
    handleEventLoopCallback() {
      if (dart.test(this[_taskQueue].isEmpty) || dart.test(this.locked)) return false;
      let entry = this[_taskQueue].first;
      if (dart.test(this.schedulingStrategy({priority: entry.priority, scheduler: this}))) {
        try {
          this[_taskQueue].removeFirst();
          entry.run();
        } catch (e) {
          let exception = dart.getThrown(e);
          let exceptionStack = dart.stackTrace(e);
          let callbackStack = null;
          if (!dart.test(dart.fn(() => {
            callbackStack = entry.debugStack;
            return true;
          }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 389, 16, "() {\n          callbackStack = entry.debugStack;\n          return true;\n        }()");
          src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: exceptionStack, library: "scheduler library", context: new src__foundation__assertions.ErrorDescription.new("during a task callback"), informationCollector: callbackStack == null ? null : dart.fn(() => new (SyncIterableOfDiagnosticsStackTrace()).new(function*() {
              yield new src__foundation__assertions.DiagnosticsStackTrace.new("\nThis exception was thrown in the context of a scheduler callback. " + "When the scheduler callback was _registered_ (as opposed to when the " + "exception was thrown), this was the stack", callbackStack);
            }), VoidToIterableOfDiagnosticsStackTrace())}));
        }
        return this[_taskQueue].isNotEmpty;
      }
      return false;
    }
    get transientCallbackCount() {
      return this[_transientCallbacks][$length];
    }
    scheduleFrameCallback(callback, opts) {
      let rescheduling = opts && 'rescheduling' in opts ? opts.rescheduling : false;
      this.scheduleFrame();
      this[_nextFrameCallbackId] = dart.notNull(this[_nextFrameCallbackId]) + 1;
      this[_transientCallbacks][$_set](this[_nextFrameCallbackId], new src__scheduler__binding._FrameCallbackEntry.new(callback, {rescheduling: rescheduling}));
      return this[_nextFrameCallbackId];
    }
    cancelFrameCallbackWithId(id) {
      if (!(dart.notNull(id) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 466, 12, "id > 0");
      this[_transientCallbacks][$remove](id);
      this[_removedIds].add(id);
    }
    debugAssertNoTransientCallbacks(reason) {
      if (!dart.test(dart.fn(() => {
        if (dart.notNull(this.transientCallbackCount) > 0) {
          let count = this.transientCallbackCount;
          let callbacks = LinkedHashMapOfint$_FrameCallbackEntry().from(this[_transientCallbacks]);
          src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: reason, library: "scheduler library", informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new(function*() {
              if (count === 1) {
                yield new src__foundation__assertions.ErrorDescription.new("There was one transient callback left. " + "The stack trace for when it was registered is as follows:");
              } else {
                yield new src__foundation__assertions.ErrorDescription.new("There were " + dart.str(count) + " transient callbacks left. " + "The stack traces for when they were registered are as follows:");
              }
              for (let id of callbacks[$keys]) {
                let entry = callbacks[$_get](id);
                yield new src__foundation__assertions.DiagnosticsStackTrace.new("── callback " + dart.str(id) + " ──", entry.debugStack, {showSeparator: false});
              }
            }), VoidToIterableOfDiagnosticsNode())}));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 492, 12, "() {\n      if (transientCallbackCount > 0) {\n        // We cache the values so that we can produce them later\n        // even if the information collector is called after\n        // the problem has been resolved.\n        final int count = transientCallbackCount;\n        final Map<int, _FrameCallbackEntry> callbacks =\n            Map<int, _FrameCallbackEntry>.from(_transientCallbacks);\n        FlutterError.reportError(FlutterErrorDetails(\n          exception: reason,\n          library: 'scheduler library',\n          informationCollector: () sync* {\n            if (count == 1) {\n              // TODO(jacobr): I have added an extra line break in this case.\n              yield ErrorDescription('There was one transient callback left. '\n                  'The stack trace for when it was registered is as follows:');\n            } else {\n              yield ErrorDescription(\n                  'There were $count transient callbacks left. '\n                  'The stack traces for when they were registered are as follows:');\n            }\n            for (int id in callbacks.keys) {\n              final _FrameCallbackEntry entry = callbacks[id];\n              yield DiagnosticsStackTrace(\n                  '── callback $id ──', entry.debugStack,\n                  showSeparator: false);\n            }\n          },\n        ));\n      }\n      return true;");
      return true;
    }
    addPersistentFrameCallback(callback) {
      this[_persistentCallbacks][$add](callback);
    }
    addPostFrameCallback(callback) {
      this[_postFrameCallbacks][$add](callback);
    }
    get endOfFrame() {
      if (this[_nextFrameCompleter] == null) {
        if (dart.equals(this.schedulerPhase, src__scheduler__binding.SchedulerPhase.idle)) this.scheduleFrame();
        this[_nextFrameCompleter] = CompleterOfvoid().new();
        this.addPostFrameCallback(dart.fn(timeStamp => {
          this[_nextFrameCompleter].complete();
          this[_nextFrameCompleter] = null;
        }, DurationToNull()));
      }
      return this[_nextFrameCompleter].future;
    }
    get hasScheduledFrame() {
      return this[_hasScheduledFrame];
    }
    get schedulerPhase() {
      return this[_schedulerPhase];
    }
    get framesEnabled() {
      return this[_framesEnabled];
    }
    [_setFramesEnabledState](enabled) {
      if (dart.equals(this[_framesEnabled], enabled)) return;
      this[_framesEnabled] = enabled;
      if (dart.test(enabled)) this.scheduleFrame();
    }
    ensureVisualUpdate() {
      switch (this.schedulerPhase) {
        case src__scheduler__binding.SchedulerPhase.idle:
        case src__scheduler__binding.SchedulerPhase.postFrameCallbacks:
        {
          this.scheduleFrame();
          return;
        }
        case src__scheduler__binding.SchedulerPhase.transientCallbacks:
        case src__scheduler__binding.SchedulerPhase.midFrameMicrotasks:
        case src__scheduler__binding.SchedulerPhase.persistentCallbacks:
        {
          return;
        }
      }
    }
    scheduleFrame() {
      if (dart.test(this[_hasScheduledFrame]) || !dart.test(this[_framesEnabled])) return;
      if (!dart.test(dart.fn(() => {
        if (dart.test(src__scheduler__debug.debugPrintScheduleFrameStacks)) src__foundation__assertions.debugPrintStack({label: "scheduleFrame() called. Current phase is " + dart.str(this.schedulerPhase) + "."});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 706, 12, " assert(() {\n      if (debugPrintScheduleFrameStacks)\n        debugPrintStack(\n            label: 'scheduleFrame() called. Current phase is $schedulerPhase.');\n      return true;");
      this.window.scheduleFrame();
      this[_hasScheduledFrame] = true;
    }
    scheduleForcedFrame() {
      if (dart.test(this[_hasScheduledFrame])) return;
      if (!dart.test(dart.fn(() => {
        if (dart.test(src__scheduler__debug.debugPrintScheduleFrameStacks)) src__foundation__assertions.debugPrintStack({label: "scheduleForcedFrame() called. Current phase is " + dart.str(this.schedulerPhase) + "."});
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 737, 12, " assert(() {\n      if (debugPrintScheduleFrameStacks)\n        debugPrintStack(\n            label:\n                'scheduleForcedFrame() called. Current phase is $schedulerPhase.');\n      return true;");
      this.window.scheduleFrame();
      this[_hasScheduledFrame] = true;
    }
    scheduleWarmUpFrame() {
      if (dart.test(this[_warmUpFrame]) || !dart.equals(this.schedulerPhase, src__scheduler__binding.SchedulerPhase.idle)) return;
      this[_warmUpFrame] = true;
      developer.Timeline.startSync("Warm-up frame");
      let hadScheduledFrame = this[_hasScheduledFrame];
      async.Timer.run(dart.fn(() => {
        if (!dart.test(this[_warmUpFrame])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 773, 14, " assert(_war");
        this.handleBeginFrame(null);
      }, VoidToNull()));
      async.Timer.run(dart.fn(() => {
        if (!dart.test(this[_warmUpFrame])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 777, 14, " assert(_war");
        this.handleDrawFrame();
        this.resetEpoch();
        this[_warmUpFrame] = false;
        if (dart.test(hadScheduledFrame)) this.scheduleFrame();
      }, VoidToNull()));
      this.lockEvents(dart.fn(() => async.async(core.Null, (function*() {
        yield this.endOfFrame;
        developer.Timeline.finishSync();
      }).bind(this)), VoidToFutureOfNull()));
    }
    resetEpoch() {
      this[_epochStart] = this[_adjustForEpoch](this[_lastRawTimeStamp]);
      this[_firstRawTimeStampInEpoch] = null;
    }
    [_adjustForEpoch](rawTimeStamp) {
      let rawDurationSinceEpoch = this[_firstRawTimeStampInEpoch] == null ? core.Duration.zero : rawTimeStamp['-'](this[_firstRawTimeStampInEpoch]);
      return new core.Duration.new({microseconds: (dart.notNull(rawDurationSinceEpoch.inMicroseconds) / dart.notNull(src__scheduler__binding.timeDilation))[$round]() + dart.notNull(this[_epochStart].inMicroseconds)});
    }
    get currentFrameTimeStamp() {
      if (!(this[_currentFrameTimeStamp] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 849, 12, " assert(_currentFrameTimeStamp");
      return this[_currentFrameTimeStamp];
    }
    [_handleBeginFrame](rawTimeStamp) {
      if (dart.test(this[_warmUpFrame])) {
        if (!!dart.test(this[_ignoreNextEngineDrawFrame])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 862, 14, " assert(!_ignoreNextEngineD");
        this[_ignoreNextEngineDrawFrame] = true;
        return;
      }
      this.handleBeginFrame(rawTimeStamp);
    }
    [_handleDrawFrame]() {
      if (dart.test(this[_ignoreNextEngineDrawFrame])) {
        this[_ignoreNextEngineDrawFrame] = false;
        return;
      }
      this.handleDrawFrame();
    }
    handleBeginFrame(rawTimeStamp) {
      let t1;
      developer.Timeline.startSync("Frame", {arguments: src__foundation__debug.timelineWhitelistArguments});
      this[_firstRawTimeStampInEpoch] == null ? this[_firstRawTimeStampInEpoch] = rawTimeStamp : null;
      this[_currentFrameTimeStamp] = this[_adjustForEpoch]((t1 = rawTimeStamp, t1 == null ? this[_lastRawTimeStamp] : t1));
      if (rawTimeStamp != null) this[_lastRawTimeStamp] = rawTimeStamp;
      if (!dart.test(src__foundation__constants.kReleaseMode)) {
        this[_profileFrameNumber] = dart.notNull(this[_profileFrameNumber]) + 1;
        this[_profileFrameStopwatch].reset();
        this[_profileFrameStopwatch].start();
      }
      if (!dart.test(dart.fn(() => {
        if (dart.test(src__scheduler__debug.debugPrintBeginFrameBanner) || dart.test(src__scheduler__debug.debugPrintEndFrameBanner)) {
          let frameTimeStampDescription = new core.StringBuffer.new();
          if (rawTimeStamp != null) {
            src__scheduler__binding.SchedulerBinding._debugDescribeTimeStamp(this[_currentFrameTimeStamp], frameTimeStampDescription);
          } else {
            frameTimeStampDescription.write("(warm-up frame)");
          }
          this[_debugBanner] = "▄▄▄▄▄▄▄▄ Frame " + dart.toString(this[_profileFrameNumber])[$padRight](7) + "   " + frameTimeStampDescription.toString()[$padLeft](18) + " ▄▄▄▄▄▄▄▄";
          if (dart.test(src__scheduler__debug.debugPrintBeginFrameBanner)) src__foundation__print.debugPrint(this[_debugBanner]);
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 912, 12, " assert(() {\n      if (debugPrintBeginFrameBanner || debugPrintEndFrameBanner) {\n        final StringBuffer frameTimeStampDescription = StringBuffer();\n        if (rawTimeStamp != null) {\n          _debugDescribeTimeStamp(\n              _currentFrameTimeStamp, frameTimeStampDescription);\n        } else {\n          frameTimeStampDescription.write('(warm-up frame)');\n        }\n        _debugBanner =\n            '▄▄▄▄▄▄▄▄ Frame ${_profileFrameNumber.toString().padRight(7)}   ${frameTimeStampDescription.toString().padLeft(18)} ▄▄▄▄▄▄▄▄';\n        if (debugPrintBeginFrameBanner) debugPrint(_debugBan");
      if (!dart.equals(this.schedulerPhase, src__scheduler__binding.SchedulerPhase.idle)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 928, 12, "     return true;\n    }());\n\n    asse");
      this[_hasScheduledFrame] = false;
      try {
        developer.Timeline.startSync("Animate", {arguments: src__foundation__debug.timelineWhitelistArguments});
        this[_schedulerPhase] = src__scheduler__binding.SchedulerPhase.transientCallbacks;
        let callbacks = this[_transientCallbacks];
        this[_transientCallbacks] = new (IdentityMapOfint$_FrameCallbackEntry()).new();
        callbacks[$forEach](dart.fn((id, callbackEntry) => {
          if (!dart.test(this[_removedIds].contains(id))) this[_invokeFrameCallback](callbackEntry.callback, this[_currentFrameTimeStamp], callbackEntry.debugStack);
        }, intAnd_FrameCallbackEntryToNull()));
        this[_removedIds].clear();
      } finally {
        this[_schedulerPhase] = src__scheduler__binding.SchedulerPhase.midFrameMicrotasks;
      }
    }
    handleDrawFrame() {
      if (!dart.equals(this[_schedulerPhase], src__scheduler__binding.SchedulerPhase.midFrameMicrotasks)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 957, 12, ".\n  void handleDrawFrame() {\n    assert(_schedulerPh");
      developer.Timeline.finishSync();
      try {
        this[_schedulerPhase] = src__scheduler__binding.SchedulerPhase.persistentCallbacks;
        for (let callback of this[_persistentCallbacks])
          this[_invokeFrameCallback](callback, this[_currentFrameTimeStamp]);
        this[_schedulerPhase] = src__scheduler__binding.SchedulerPhase.postFrameCallbacks;
        let localPostFrameCallbacks = ListOfDurationTovoid().from(this[_postFrameCallbacks]);
        this[_postFrameCallbacks][$clear]();
        for (let callback of localPostFrameCallbacks)
          this[_invokeFrameCallback](callback, this[_currentFrameTimeStamp]);
      } finally {
        this[_schedulerPhase] = src__scheduler__binding.SchedulerPhase.idle;
        developer.Timeline.finishSync();
        if (!dart.test(src__foundation__constants.kReleaseMode)) {
          this[_profileFrameStopwatch].stop();
          this[_profileFramePostEvent]();
        }
        if (!dart.test(dart.fn(() => {
          if (dart.test(src__scheduler__debug.debugPrintEndFrameBanner)) src__foundation__print.debugPrint("▀"[$times](this[_debugBanner].length));
          this[_debugBanner] = null;
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 979, 14, "eFramePostEvent();\n      }\n      assert(() {\n        if (debugPrintEndFrameBanner) debugPrint('▀' * _debugBanner.length);\n        _debugBan");
        this[_currentFrameTimeStamp] = null;
      }
    }
    [_profileFramePostEvent]() {
      developer.postEvent("Flutter.Frame", new (IdentityMapOfString$dynamic()).from(["number", this[_profileFrameNumber], "startTime", this[_currentFrameTimeStamp].inMicroseconds, "elapsed", this[_profileFrameStopwatch].elapsedMicroseconds]));
    }
    [_invokeFrameCallback](callback, timeStamp, callbackStack) {
      if (callbackStack === void 0) callbackStack = null;
      if (!(callback != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 1023, 12, " [StackTrace cal");
      if (!(src__scheduler__binding._FrameCallbackEntry.debugCurrentCallbackStack == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 1024, 12, "\n    assert(callback != null);\n    assert(_FrameCallb");
      if (!dart.test(dart.fn(() => {
        src__scheduler__binding._FrameCallbackEntry.debugCurrentCallbackStack = callbackStack;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 1025, 12, "CurrentCallbackStack == null);\n    assert(() {\n      _FrameCallbackEntry.debugCurrentCallbackStack =");
      try {
        callback(timeStamp);
      } catch (e) {
        let exception = dart.getThrown(e);
        let exceptionStack = dart.stackTrace(e);
        src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: exceptionStack, library: "scheduler library", context: new src__foundation__assertions.ErrorDescription.new("during a scheduler callback"), informationCollector: callbackStack == null ? null : dart.fn(() => new (SyncIterableOfDiagnosticsStackTrace()).new(function*() {
            yield new src__foundation__assertions.DiagnosticsStackTrace.new("\nThis exception was thrown in the context of a scheduler callback. " + "When the scheduler callback was _registered_ (as opposed to when the " + "exception was thrown), this was the stack", callbackStack);
          }), VoidToIterableOfDiagnosticsStackTrace())}));
      }
      if (!dart.test(dart.fn(() => {
        src__scheduler__binding._FrameCallbackEntry.debugCurrentCallbackStack = null;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 1049, 12, "            },\n      ));\n    }\n    assert(() {\n      _FrameCallbackEntry.debugCurrentCallba");
    }
  };
  (src__scheduler__binding.SchedulerBinding[dart.mixinNew] = function() {
    this[_lifecycleState] = null;
    this[schedulingStrategy] = dart.fn(src__scheduler__binding.defaultSchedulingStrategy, __Tobool());
    this[_taskQueue] = new (HeapPriorityQueueOf_TaskEntry()).new(dart.fn(src__scheduler__binding.SchedulerBinding._taskSorter, _TaskEntryAnd_TaskEntryToint()));
    this[_hasRequestedAnEventLoopCallback] = false;
    this[_nextFrameCallbackId] = 0;
    this[_transientCallbacks] = new (IdentityMapOfint$_FrameCallbackEntry()).new();
    this[_removedIds] = new (_IdentityHashSetOfint()).new();
    this[_persistentCallbacks] = JSArrayOfDurationTovoid().of([]);
    this[_postFrameCallbacks] = JSArrayOfDurationTovoid().of([]);
    this[_nextFrameCompleter] = null;
    this[_hasScheduledFrame] = false;
    this[_schedulerPhase] = src__scheduler__binding.SchedulerPhase.idle;
    this[_framesEnabled] = true;
    this[_warmUpFrame] = false;
    this[_firstRawTimeStampInEpoch] = null;
    this[_epochStart] = core.Duration.zero;
    this[_lastRawTimeStamp] = core.Duration.zero;
    this[_currentFrameTimeStamp] = null;
    this[_profileFrameNumber] = 0;
    this[_profileFrameStopwatch] = new core.Stopwatch.new();
    this[_debugBanner] = null;
    this[_ignoreNextEngineDrawFrame] = false;
  }).prototype = src__scheduler__binding.SchedulerBinding.prototype;
  dart.addTypeTests(src__scheduler__binding.SchedulerBinding);
  const schedulingStrategy = Symbol("SchedulerBinding.schedulingStrategy");
  src__scheduler__binding.SchedulerBinding[dart.implements] = () => [src__services__binding.ServicesBinding, src__foundation__binding.BindingBase];
  dart.setMethodSignature(src__scheduler__binding.SchedulerBinding, () => ({
    __proto__: dart.getMethods(src__scheduler__binding.SchedulerBinding.__proto__),
    initInstances: dart.fnType(dart.void, []),
    initServiceExtensions: dart.fnType(dart.void, []),
    readInitialLifecycleStateFromNativeWindow: dart.fnType(dart.void, []),
    handleAppLifecycleStateChanged: dart.fnType(dart.void, [ui$.AppLifecycleState]),
    [_handleLifecycleMessage]: dart.fnType(async.Future$(core.String), [core.String]),
    scheduleTask: dart.gFnType(T => [async.Future$(T), [dart.fnType(T, []), src__scheduler__priority.Priority], {debugLabel: core.String, flow: developer.Flow}]),
    unlocked: dart.fnType(dart.void, []),
    [_ensureEventLoopCallback]: dart.fnType(dart.void, []),
    [_runTasks]: dart.fnType(dart.void, []),
    handleEventLoopCallback: dart.fnType(core.bool, []),
    scheduleFrameCallback: dart.fnType(core.int, [dart.fnType(dart.void, [core.Duration])], {rescheduling: core.bool}),
    cancelFrameCallbackWithId: dart.fnType(dart.void, [core.int]),
    debugAssertNoTransientCallbacks: dart.fnType(core.bool, [core.String]),
    addPersistentFrameCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [core.Duration])]),
    addPostFrameCallback: dart.fnType(dart.void, [dart.fnType(dart.void, [core.Duration])]),
    [_setFramesEnabledState]: dart.fnType(dart.void, [core.bool]),
    ensureVisualUpdate: dart.fnType(dart.void, []),
    scheduleFrame: dart.fnType(dart.void, []),
    scheduleForcedFrame: dart.fnType(dart.void, []),
    scheduleWarmUpFrame: dart.fnType(dart.void, []),
    resetEpoch: dart.fnType(dart.void, []),
    [_adjustForEpoch]: dart.fnType(core.Duration, [core.Duration]),
    [_handleBeginFrame]: dart.fnType(dart.void, [core.Duration]),
    [_handleDrawFrame]: dart.fnType(dart.void, []),
    handleBeginFrame: dart.fnType(dart.void, [core.Duration]),
    handleDrawFrame: dart.fnType(dart.void, []),
    [_profileFramePostEvent]: dart.fnType(dart.void, []),
    [_invokeFrameCallback]: dart.fnType(dart.void, [dart.fnType(dart.void, [core.Duration]), core.Duration], [core.StackTrace])
  }));
  dart.setGetterSignature(src__scheduler__binding.SchedulerBinding, () => ({
    __proto__: dart.getGetters(src__scheduler__binding.SchedulerBinding.__proto__),
    lifecycleState: ui$.AppLifecycleState,
    transientCallbackCount: core.int,
    endOfFrame: async.Future$(dart.void),
    hasScheduledFrame: core.bool,
    schedulerPhase: src__scheduler__binding.SchedulerPhase,
    framesEnabled: core.bool,
    currentFrameTimeStamp: core.Duration
  }));
  dart.setLibraryUri(src__scheduler__binding.SchedulerBinding, "package:flutter_web/src/scheduler/binding.dart");
  dart.setFieldSignature(src__scheduler__binding.SchedulerBinding, () => ({
    __proto__: dart.getFields(src__scheduler__binding.SchedulerBinding.__proto__),
    [_lifecycleState]: dart.fieldType(ui$.AppLifecycleState),
    schedulingStrategy: dart.fieldType(dart.fnType(core.bool, [], {priority: core.int, scheduler: src__scheduler__binding.SchedulerBinding})),
    [_taskQueue]: dart.finalFieldType(src__priority_queue.PriorityQueue$(src__scheduler__binding._TaskEntry)),
    [_hasRequestedAnEventLoopCallback]: dart.fieldType(core.bool),
    [_nextFrameCallbackId]: dart.fieldType(core.int),
    [_transientCallbacks]: dart.fieldType(core.Map$(core.int, src__scheduler__binding._FrameCallbackEntry)),
    [_removedIds]: dart.finalFieldType(core.Set$(core.int)),
    [_persistentCallbacks]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [core.Duration]))),
    [_postFrameCallbacks]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [core.Duration]))),
    [_nextFrameCompleter]: dart.fieldType(async.Completer$(dart.void)),
    [_hasScheduledFrame]: dart.fieldType(core.bool),
    [_schedulerPhase]: dart.fieldType(src__scheduler__binding.SchedulerPhase),
    [_framesEnabled]: dart.fieldType(core.bool),
    [_warmUpFrame]: dart.fieldType(core.bool),
    [_firstRawTimeStampInEpoch]: dart.fieldType(core.Duration),
    [_epochStart]: dart.fieldType(core.Duration),
    [_lastRawTimeStamp]: dart.fieldType(core.Duration),
    [_currentFrameTimeStamp]: dart.fieldType(core.Duration),
    [_profileFrameNumber]: dart.fieldType(core.int),
    [_profileFrameStopwatch]: dart.finalFieldType(core.Stopwatch),
    [_debugBanner]: dart.fieldType(core.String),
    [_ignoreNextEngineDrawFrame]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__scheduler__binding.SchedulerBinding, {
    /*src__scheduler__binding.SchedulerBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  });
  src__scheduler__binding.defaultSchedulingStrategy = function(opts) {
    let priority = opts && 'priority' in opts ? opts.priority : null;
    let scheduler = opts && 'scheduler' in opts ? opts.scheduler : null;
    if (dart.notNull(scheduler.transientCallbackCount) > 0) return dart.notNull(priority) >= dart.notNull(src__scheduler__priority.Priority.animation.value);
    return true;
  };
  dart.copyProperties(src__scheduler__binding, {
    get timeDilation() {
      return src__scheduler__binding._timeDilation;
    },
    set timeDilation(value) {
      let t2;
      if (!(dart.notNull(value) > 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart", 29, 10, "value > 0.0");
      if (src__scheduler__binding._timeDilation == value) return;
      t2 = src__scheduler__binding.SchedulerBinding.instance;
      t2 == null ? null : t2.resetEpoch();
      src__scheduler__binding._timeDilation = value;
    }
  });
  dart.defineLazy(src__scheduler__binding, {
    /*src__scheduler__binding._timeDilation*/get _timeDilation() {
      return 1.0;
    },
    set _timeDilation(_) {}
  });
  dart.trackLibraries("packages/flutter_web/src/scheduler/binding", {
    "package:flutter_web/src/scheduler/debug.dart": src__scheduler__debug,
    "package:flutter_web/src/scheduler/priority.dart": src__scheduler__priority,
    "package:flutter_web/src/scheduler/binding.dart": src__scheduler__binding
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/flutter_web/src/scheduler/debug.dart","org-dartlang-app:///packages/flutter_web/src/scheduler/priority.dart","org-dartlang-app:///packages/flutter_web/src/scheduler/binding.dart"],"names":[],"mappings":"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","file":"binding.ddc.js"}');
  // Exports:
  return {
    src__scheduler__debug: src__scheduler__debug,
    src__scheduler__priority: src__scheduler__priority,
    src__scheduler__binding: src__scheduler__binding
  };
});

//# sourceMappingURL=binding.ddc.js.map
