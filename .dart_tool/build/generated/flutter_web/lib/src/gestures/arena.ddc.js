define(['dart_sdk', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/scheduler/binding'], function(dart_sdk, assertions, ui, binding) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__util = assertions.src__util;
  const src__foundation__print = assertions.src__foundation__print;
  const src__foundation__assertions = assertions.src__foundation__assertions;
  const src__foundation__diagnostics = assertions.src__foundation__diagnostics;
  const src__foundation__bitfield = assertions.src__foundation__bitfield;
  const src__foundation__constants = assertions.src__foundation__constants;
  const src__foundation__binding = assertions.src__foundation__binding;
  const src__foundation__change_notifier = assertions.src__foundation__change_notifier;
  const ui$ = ui.ui;
  const src__scheduler__binding = binding.src__scheduler__binding;
  const src__gestures__arena = Object.create(dart.library);
  const src__gestures__debug = Object.create(dart.library);
  const src__gestures__pointer_router = Object.create(dart.library);
  const src__gestures__events = Object.create(dart.library);
  const src__gestures__scale = Object.create(dart.library);
  const src__gestures__velocity_tracker = Object.create(dart.library);
  const src__gestures__lsq_solver = Object.create(dart.library);
  const src__gestures__recognizer = Object.create(dart.library);
  const src__gestures__team = Object.create(dart.library);
  const src__gestures__binding = Object.create(dart.library);
  const src__gestures__pointer_signal_resolver = Object.create(dart.library);
  const src__gestures__hit_test = Object.create(dart.library);
  const src__gestures__converter = Object.create(dart.library);
  const src__gestures__constants = Object.create(dart.library);
  const src__gestures__multidrag = Object.create(dart.library);
  const src__gestures__drag_details = Object.create(dart.library);
  const src__gestures__drag = Object.create(dart.library);
  const src__gestures__tap = Object.create(dart.library);
  const src__gestures__eager = Object.create(dart.library);
  const src__gestures__force_press = Object.create(dart.library);
  const src__gestures__mouse_tracking = Object.create(dart.library);
  const src__gestures__multitap = Object.create(dart.library);
  const src__gestures__long_press = Object.create(dart.library);
  const src__gestures__monodrag = Object.create(dart.library);
  const $add = dartx.add;
  const $isEmpty = dartx.isEmpty;
  const $map = dartx.map;
  const $join = dartx.join;
  const $toString = dartx.toString;
  const $putIfAbsent = dartx.putIfAbsent;
  const $_get = dartx._get;
  const $remove = dartx.remove;
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  const $length = dartx.length;
  const $contains = dartx.contains;
  const $containsKey = dartx.containsKey;
  const $padRight = dartx.padRight;
  const $leftShift = dartx['<<'];
  const $_set = dartx._set;
  const $keys = dartx.keys;
  const $toDouble = dartx.toDouble;
  const $abs = dartx.abs;
  const $clear = dartx.clear;
  const $values = dartx.values;
  const $containsValue = dartx.containsValue;
  const $times = dartx['*'];
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $noSuchMethod = dartx.noSuchMethod;
  const $toList = dartx.toList;
  const $forEach = dartx.forEach;
  const $runtimeType = dartx.runtimeType;
  const $isNaN = dartx.isNaN;
  const $clamp = dartx.clamp;
  const $hashCode = dartx.hashCode;
  const $toRadixString = dartx.toRadixString;
  const $toSet = dartx.toSet;
  let JSArrayOfGestureArenaMember = () => (JSArrayOfGestureArenaMember = dart.constFn(_interceptors.JSArray$(src__gestures__arena.GestureArenaMember)))();
  let GestureArenaMemberToString = () => (GestureArenaMemberToString = dart.constFn(dart.fnType(core.String, [src__gestures__arena.GestureArenaMember])))();
  let IdentityMapOfint$_GestureArena = () => (IdentityMapOfint$_GestureArena = dart.constFn(_js_helper.IdentityMap$(core.int, src__gestures__arena._GestureArena)))();
  let VoidTo_GestureArena = () => (VoidTo_GestureArena = dart.constFn(dart.fnType(src__gestures__arena._GestureArena, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let PointerEventTovoid = () => (PointerEventTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__events.PointerEvent])))();
  let LinkedHashSetOfPointerEventTovoid = () => (LinkedHashSetOfPointerEventTovoid = dart.constFn(collection.LinkedHashSet$(PointerEventTovoid())))();
  let IdentityMapOfint$LinkedHashSetOfPointerEventTovoid = () => (IdentityMapOfint$LinkedHashSetOfPointerEventTovoid = dart.constFn(_js_helper.IdentityMap$(core.int, LinkedHashSetOfPointerEventTovoid())))();
  let _HashSetOfPointerEventTovoid = () => (_HashSetOfPointerEventTovoid = dart.constFn(collection._HashSet$(PointerEventTovoid())))();
  let VoidToLinkedHashSetOfPointerEventTovoid = () => (VoidToLinkedHashSetOfPointerEventTovoid = dart.constFn(dart.fnType(LinkedHashSetOfPointerEventTovoid(), [])))();
  let DiagnosticsPropertyOfPointerEvent = () => (DiagnosticsPropertyOfPointerEvent = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__gestures__events.PointerEvent)))();
  let SyncIterableOfDiagnosticsPropertyOfPointerEvent = () => (SyncIterableOfDiagnosticsPropertyOfPointerEvent = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfPointerEvent())))();
  let IterableOfDiagnosticsPropertyOfPointerEvent = () => (IterableOfDiagnosticsPropertyOfPointerEvent = dart.constFn(core.Iterable$(DiagnosticsPropertyOfPointerEvent())))();
  let VoidToIterableOfDiagnosticsPropertyOfPointerEvent = () => (VoidToIterableOfDiagnosticsPropertyOfPointerEvent = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfPointerEvent(), [])))();
  let ListOfPointerEventTovoid = () => (ListOfPointerEventTovoid = dart.constFn(core.List$(PointerEventTovoid())))();
  let DiagnosticsPropertyOfOffset = () => (DiagnosticsPropertyOfOffset = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(ui$.Offset)))();
  let DiagnosticsPropertyOfDuration = () => (DiagnosticsPropertyOfDuration = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(core.Duration)))();
  let EnumPropertyOfPointerDeviceKind = () => (EnumPropertyOfPointerDeviceKind = dart.constFn(src__foundation__diagnostics.EnumProperty$(ui$.PointerDeviceKind)))();
  let DiagnosticsPropertyOfbool = () => (DiagnosticsPropertyOfbool = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(core.bool)))();
  let IdentityMapOfint$VelocityTracker = () => (IdentityMapOfint$VelocityTracker = dart.constFn(_js_helper.IdentityMap$(core.int, src__gestures__velocity_tracker.VelocityTracker)))();
  let IdentityMapOfint$Offset = () => (IdentityMapOfint$Offset = dart.constFn(_js_helper.IdentityMap$(core.int, ui$.Offset)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let IdentityMapOfint$GestureArenaEntry = () => (IdentityMapOfint$GestureArenaEntry = dart.constFn(_js_helper.IdentityMap$(core.int, src__gestures__arena.GestureArenaEntry)))();
  let _IdentityHashSetOfint = () => (_IdentityHashSetOfint = dart.constFn(collection._IdentityHashSet$(core.int)))();
  let ListOfGestureArenaEntry = () => (ListOfGestureArenaEntry = dart.constFn(core.List$(src__gestures__arena.GestureArenaEntry)))();
  let IdentityMapOfint$PointerDeviceKind = () => (IdentityMapOfint$PointerDeviceKind = dart.constFn(_js_helper.IdentityMap$(core.int, ui$.PointerDeviceKind)))();
  let DiagnosticsPropertyOfGestureRecognizer = () => (DiagnosticsPropertyOfGestureRecognizer = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__gestures__recognizer.GestureRecognizer)))();
  let SyncIterableOfDiagnosticsNode = () => (SyncIterableOfDiagnosticsNode = dart.constFn(_js_helper.SyncIterable$(src__foundation__diagnostics.DiagnosticsNode)))();
  let IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(src__foundation__diagnostics.DiagnosticsNode)))();
  let VoidToIterableOfDiagnosticsNode = () => (VoidToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [])))();
  let DiagnosticsPropertyOfObject = () => (DiagnosticsPropertyOfObject = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(core.Object)))();
  let ListOf_PointAtTime = () => (ListOf_PointAtTime = dart.constFn(core.List$(src__gestures__velocity_tracker._PointAtTime)))();
  let JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  let EnumPropertyOfGestureRecognizerState = () => (EnumPropertyOfGestureRecognizerState = dart.constFn(src__foundation__diagnostics.EnumProperty$(src__gestures__recognizer.GestureRecognizerState)))();
  let IdentityMapOfint$_CombiningGestureArenaMember = () => (IdentityMapOfint$_CombiningGestureArenaMember = dart.constFn(_js_helper.IdentityMap$(core.int, src__gestures__team._CombiningGestureArenaMember)))();
  let VoidTo_CombiningGestureArenaMember = () => (VoidTo_CombiningGestureArenaMember = dart.constFn(dart.fnType(src__gestures__team._CombiningGestureArenaMember, [])))();
  let ListQueueOfPointerEvent = () => (ListQueueOfPointerEvent = dart.constFn(collection.ListQueue$(src__gestures__events.PointerEvent)))();
  let IdentityMapOfint$HitTestResult = () => (IdentityMapOfint$HitTestResult = dart.constFn(_js_helper.IdentityMap$(core.int, src__gestures__hit_test.HitTestResult)))();
  let DiagnosticsPropertyOfHitTestTarget = () => (DiagnosticsPropertyOfHitTestTarget = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__gestures__hit_test.HitTestTarget)))();
  let SyncIterableOfDiagnosticsPropertyOfObject = () => (SyncIterableOfDiagnosticsPropertyOfObject = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfObject())))();
  let IterableOfDiagnosticsPropertyOfObject = () => (IterableOfDiagnosticsPropertyOfObject = dart.constFn(core.Iterable$(DiagnosticsPropertyOfObject())))();
  let VoidToIterableOfDiagnosticsPropertyOfObject = () => (VoidToIterableOfDiagnosticsPropertyOfObject = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfObject(), [])))();
  let DiagnosticsPropertyOfPointerSignalEvent = () => (DiagnosticsPropertyOfPointerSignalEvent = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__gestures__events.PointerSignalEvent)))();
  let SyncIterableOfDiagnosticsPropertyOfPointerSignalEvent = () => (SyncIterableOfDiagnosticsPropertyOfPointerSignalEvent = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfPointerSignalEvent())))();
  let IterableOfDiagnosticsPropertyOfPointerSignalEvent = () => (IterableOfDiagnosticsPropertyOfPointerSignalEvent = dart.constFn(core.Iterable$(DiagnosticsPropertyOfPointerSignalEvent())))();
  let VoidToIterableOfDiagnosticsPropertyOfPointerSignalEvent = () => (VoidToIterableOfDiagnosticsPropertyOfPointerSignalEvent = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfPointerSignalEvent(), [])))();
  let JSArrayOfHitTestEntry = () => (JSArrayOfHitTestEntry = dart.constFn(_interceptors.JSArray$(src__gestures__hit_test.HitTestEntry)))();
  let VoidTo_PointerState = () => (VoidTo_PointerState = dart.constFn(dart.fnType(src__gestures__converter._PointerState, [])))();
  let SyncIterableOfPointerEvent = () => (SyncIterableOfPointerEvent = dart.constFn(_js_helper.SyncIterable$(src__gestures__events.PointerEvent)))();
  let IdentityMapOfint$_PointerState = () => (IdentityMapOfint$_PointerState = dart.constFn(_js_helper.IdentityMap$(core.int, src__gestures__converter._PointerState)))();
  let OffsetToDrag = () => (OffsetToDrag = dart.constFn(dart.fnType(src__gestures__drag.Drag, [ui$.Offset])))();
  let VoidToDrag = () => (VoidToDrag = dart.constFn(dart.fnType(src__gestures__drag.Drag, [])))();
  let doubleAnddoubleAnddoubleTodouble = () => (doubleAnddoubleAnddoubleTodouble = dart.constFn(dart.fnType(core.double, [core.double, core.double, core.double])))();
  let LinkedHashSetOfint = () => (LinkedHashSetOfint = dart.constFn(collection.LinkedHashSet$(core.int)))();
  let LinkedMapOfMouseTrackerAnnotation$_TrackedAnnotation = () => (LinkedMapOfMouseTrackerAnnotation$_TrackedAnnotation = dart.constFn(_js_helper.LinkedMap$(src__gestures__mouse_tracking.MouseTrackerAnnotation, src__gestures__mouse_tracking._TrackedAnnotation)))();
  let IdentityMapOfint$PointerEvent = () => (IdentityMapOfint$PointerEvent = dart.constFn(_js_helper.IdentityMap$(core.int, src__gestures__events.PointerEvent)))();
  let DurationToNull = () => (DurationToNull = dart.constFn(dart.fnType(core.Null, [core.Duration])))();
  let _TrackedAnnotationAndintTovoid = () => (_TrackedAnnotationAndintTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__mouse_tracking._TrackedAnnotation, core.int])))();
  let _TrackedAnnotationTovoid = () => (_TrackedAnnotationTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__mouse_tracking._TrackedAnnotation])))();
  let MouseTrackerAnnotationTo_TrackedAnnotation = () => (MouseTrackerAnnotationTo_TrackedAnnotation = dart.constFn(dart.fnType(src__gestures__mouse_tracking._TrackedAnnotation, [src__gestures__mouse_tracking.MouseTrackerAnnotation])))();
  let IdentityMapOfint$_TapTracker = () => (IdentityMapOfint$_TapTracker = dart.constFn(_js_helper.IdentityMap$(core.int, src__gestures__multitap._TapTracker)))();
  let IdentityMapOfint$_TapGesture = () => (IdentityMapOfint$_TapGesture = dart.constFn(_js_helper.IdentityMap$(core.int, src__gestures__multitap._TapGesture)))();
  let ListOf_TapGesture = () => (ListOf_TapGesture = dart.constFn(core.List$(src__gestures__multitap._TapGesture)))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  let EnumPropertyOfDragStartBehavior = () => (EnumPropertyOfDragStartBehavior = dart.constFn(src__foundation__diagnostics.EnumProperty$(src__gestures__recognizer.DragStartBehavior)))();
  const _name$ = dart.privateName(src__gestures__arena, "_name");
  src__gestures__arena.GestureDisposition = class GestureDisposition extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (src__gestures__arena.GestureDisposition.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = src__gestures__arena.GestureDisposition.prototype;
  dart.addTypeTests(src__gestures__arena.GestureDisposition);
  dart.setLibraryUri(src__gestures__arena.GestureDisposition, "package:flutter_web/src/gestures/arena.dart");
  dart.setFieldSignature(src__gestures__arena.GestureDisposition, () => ({
    __proto__: dart.getFields(src__gestures__arena.GestureDisposition.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__gestures__arena.GestureDisposition, ['toString']);
  src__gestures__arena.GestureDisposition.accepted = dart.const(new src__gestures__arena.GestureDisposition.new(0, "GestureDisposition.accepted"));
  src__gestures__arena.GestureDisposition.rejected = dart.const(new src__gestures__arena.GestureDisposition.new(1, "GestureDisposition.rejected"));
  src__gestures__arena.GestureDisposition.values = dart.constList([src__gestures__arena.GestureDisposition.accepted, src__gestures__arena.GestureDisposition.rejected], src__gestures__arena.GestureDisposition);
  src__gestures__arena.GestureArenaMember = class GestureArenaMember extends core.Object {};
  (src__gestures__arena.GestureArenaMember.new = function() {
    ;
  }).prototype = src__gestures__arena.GestureArenaMember.prototype;
  dart.addTypeTests(src__gestures__arena.GestureArenaMember);
  dart.setLibraryUri(src__gestures__arena.GestureArenaMember, "package:flutter_web/src/gestures/arena.dart");
  const _arena$ = dart.privateName(src__gestures__arena, "_arena");
  const _pointer$ = dart.privateName(src__gestures__arena, "_pointer");
  const _member$ = dart.privateName(src__gestures__arena, "_member");
  const _resolve = dart.privateName(src__gestures__arena, "_resolve");
  src__gestures__arena.GestureArenaEntry = class GestureArenaEntry extends core.Object {
    resolve(disposition) {
      this[_arena$][_resolve](this[_pointer$], this[_member$], disposition);
    }
  };
  (src__gestures__arena.GestureArenaEntry.__ = function(_arena, _pointer, _member) {
    this[_arena$] = _arena;
    this[_pointer$] = _pointer;
    this[_member$] = _member;
    ;
  }).prototype = src__gestures__arena.GestureArenaEntry.prototype;
  dart.addTypeTests(src__gestures__arena.GestureArenaEntry);
  dart.setMethodSignature(src__gestures__arena.GestureArenaEntry, () => ({
    __proto__: dart.getMethods(src__gestures__arena.GestureArenaEntry.__proto__),
    resolve: dart.fnType(dart.void, [src__gestures__arena.GestureDisposition])
  }));
  dart.setLibraryUri(src__gestures__arena.GestureArenaEntry, "package:flutter_web/src/gestures/arena.dart");
  dart.setFieldSignature(src__gestures__arena.GestureArenaEntry, () => ({
    __proto__: dart.getFields(src__gestures__arena.GestureArenaEntry.__proto__),
    [_arena$]: dart.finalFieldType(src__gestures__arena.GestureArenaManager),
    [_pointer$]: dart.finalFieldType(core.int),
    [_member$]: dart.finalFieldType(src__gestures__arena.GestureArenaMember)
  }));
  src__gestures__arena._GestureArena = class _GestureArena extends core.Object {
    add(member) {
      if (!dart.test(this.isOpen)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 70, 12, "isOpen");
      this.members[$add](member);
    }
    toString() {
      if (dart.test(src__util.assertionsEnabled)) {
        let buffer = new core.StringBuffer.new();
        if (dart.test(this.members[$isEmpty])) {
          buffer.write("<empty>");
        } else {
          buffer.write(this.members[$map](core.String, dart.fn(member => {
            if (dart.equals(member, this.eagerWinner)) return dart.str(member) + " (eager winner)";
            return dart.str(member);
          }, GestureArenaMemberToString()))[$join](", "));
        }
        if (dart.test(this.isOpen)) buffer.write(" [open]");
        if (dart.test(this.isHeld)) buffer.write(" [held]");
        if (dart.test(this.hasPendingSweep)) buffer.write(" [hasPendingSweep]");
        return buffer.toString();
      } else {
        return super[$toString]();
      }
    }
  };
  (src__gestures__arena._GestureArena.new = function() {
    this.members = JSArrayOfGestureArenaMember().of([]);
    this.isOpen = true;
    this.isHeld = false;
    this.hasPendingSweep = false;
    this.eagerWinner = null;
    ;
  }).prototype = src__gestures__arena._GestureArena.prototype;
  dart.addTypeTests(src__gestures__arena._GestureArena);
  dart.setMethodSignature(src__gestures__arena._GestureArena, () => ({
    __proto__: dart.getMethods(src__gestures__arena._GestureArena.__proto__),
    add: dart.fnType(dart.void, [src__gestures__arena.GestureArenaMember])
  }));
  dart.setLibraryUri(src__gestures__arena._GestureArena, "package:flutter_web/src/gestures/arena.dart");
  dart.setFieldSignature(src__gestures__arena._GestureArena, () => ({
    __proto__: dart.getFields(src__gestures__arena._GestureArena.__proto__),
    members: dart.finalFieldType(core.List$(src__gestures__arena.GestureArenaMember)),
    isOpen: dart.fieldType(core.bool),
    isHeld: dart.fieldType(core.bool),
    hasPendingSweep: dart.fieldType(core.bool),
    eagerWinner: dart.fieldType(src__gestures__arena.GestureArenaMember)
  }));
  dart.defineExtensionMethods(src__gestures__arena._GestureArena, ['toString']);
  const _arenas = dart.privateName(src__gestures__arena, "_arenas");
  const _debugLogDiagnostic = dart.privateName(src__gestures__arena, "_debugLogDiagnostic");
  const _tryToResolveArena = dart.privateName(src__gestures__arena, "_tryToResolveArena");
  const _resolveInFavorOf = dart.privateName(src__gestures__arena, "_resolveInFavorOf");
  const _resolveByDefault = dart.privateName(src__gestures__arena, "_resolveByDefault");
  src__gestures__arena.GestureArenaManager = class GestureArenaManager extends core.Object {
    add(pointer, member) {
      let state = this[_arenas][$putIfAbsent](pointer, dart.fn(() => {
        if (!dart.test(this[_debugLogDiagnostic](pointer, "★ Opening new gesture arena."))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 109, 14, "_debugLogDiagnostic(pointer, '★ Opening new gesture arena.");
        return new src__gestures__arena._GestureArena.new();
      }, VoidTo_GestureArena()));
      state.add(member);
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Adding: " + dart.str(member)))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 113, 12, "t(_debugLogDiagnostic(pointer, 'Adding: $member");
      return new src__gestures__arena.GestureArenaEntry.__(this, pointer, member);
    }
    close(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      state.isOpen = false;
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Closing", state))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 125, 12, "t(_debugLogDiagnostic(pointer, 'Closing', stat");
      this[_tryToResolveArena](pointer, state);
    }
    sweep(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      if (!!dart.test(state.isOpen)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 146, 12, "t(!state.isOp");
      if (dart.test(state.isHeld)) {
        state.hasPendingSweep = true;
        if (!dart.test(this[_debugLogDiagnostic](pointer, "Delaying sweep", state))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 149, 14, "t(_debugLogDiagnostic(pointer, 'Delaying sweep', stat");
        return;
      }
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Sweeping", state))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 152, 12, "t(_debugLogDiagnostic(pointer, 'Sweeping', stat");
      this[_arenas][$remove](pointer);
      if (dart.test(state.members[$isNotEmpty])) {
        if (!dart.test(this[_debugLogDiagnostic](pointer, "Winner: " + dart.str(state.members[$first])))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 156, 14, "t(_debugLogDiagnostic(pointer, 'Winner: ${state.members.first}");
        state.members[$first].acceptGesture(pointer);
        for (let i = 1; i < dart.notNull(state.members[$length]); i = i + 1)
          state.members[$_get](i).rejectGesture(pointer);
      }
    }
    hold(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      state.isHeld = true;
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Holding", state))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 181, 12, "t(_debugLogDiagnostic(pointer, 'Holding', stat");
    }
    release(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      state.isHeld = false;
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Releasing", state))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 198, 12, "t(_debugLogDiagnostic(pointer, 'Releasing', stat");
      if (dart.test(state.hasPendingSweep)) this.sweep(pointer);
    }
    [_resolve](pointer, member, disposition) {
      let t0;
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      if (!dart.test(this[_debugLogDiagnostic](pointer, (dart.equals(disposition, src__gestures__arena.GestureDisposition.accepted) ? "Accepting" : "Rejecting") + ": " + dart.str(member)))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 209, 12, "t(_debugLogDiagnostic(pointer,\n        '${disposition == GestureDisposition.accepted ? \"Accepting\" : \"Rejecting\"}: $member");
      if (!dart.test(state.members[$contains](member))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 211, 12, "t(state.members.contains(membe");
      if (dart.equals(disposition, src__gestures__arena.GestureDisposition.rejected)) {
        state.members[$remove](member);
        member.rejectGesture(pointer);
        if (!dart.test(state.isOpen)) this[_tryToResolveArena](pointer, state);
      } else {
        if (!dart.equals(disposition, src__gestures__arena.GestureDisposition.accepted)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 217, 14, "t(disposition == GestureDisposition.accept");
        if (dart.test(state.isOpen)) {
          t0 = state;
          t0.eagerWinner == null ? t0.eagerWinner = member : null;
        } else {
          if (!dart.test(this[_debugLogDiagnostic](pointer, "Self-declared winner: " + dart.str(member)))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 221, 16, "t(_debugLogDiagnostic(pointer, 'Self-declared winner: $member");
          this[_resolveInFavorOf](pointer, state, member);
        }
      }
    }
    [_tryToResolveArena](pointer, state) {
      if (!dart.equals(this[_arenas][$_get](pointer), state)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 228, 12, "t(_arenas[pointer] == sta");
      if (!!dart.test(state.isOpen)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 229, 12, "t(!state.isOp");
      if (state.members[$length] === 1) {
        async.scheduleMicrotask(dart.fn(() => this[_resolveByDefault](pointer, state), VoidTovoid()));
      } else if (dart.test(state.members[$isEmpty])) {
        this[_arenas][$remove](pointer);
        if (!dart.test(this[_debugLogDiagnostic](pointer, "Arena empty."))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 234, 14, "t(_debugLogDiagnostic(pointer, 'Arena empty.");
      } else if (state.eagerWinner != null) {
        if (!dart.test(this[_debugLogDiagnostic](pointer, "Eager winner: " + dart.str(state.eagerWinner)))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 237, 11, "  _debugLogDiagnostic(pointer, 'Eager winner: ${state.eagerWinner}");
        this[_resolveInFavorOf](pointer, state, state.eagerWinner);
      }
    }
    [_resolveByDefault](pointer, state) {
      if (!dart.test(this[_arenas][$containsKey](pointer))) return;
      if (!dart.equals(this[_arenas][$_get](pointer), state)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 244, 12, "t(_arenas[pointer] == sta");
      if (!!dart.test(state.isOpen)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 245, 12, "t(!state.isOp");
      let members = state.members;
      if (!(members[$length] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 247, 12, "t(members.length ==");
      this[_arenas][$remove](pointer);
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Default winner: " + dart.str(state.members[$first])))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 250, 9, "  _debugLogDiagnostic(pointer, 'Default winner: ${state.members.first}");
      state.members[$first].acceptGesture(pointer);
    }
    [_resolveInFavorOf](pointer, state, member) {
      if (!dart.equals(state, this[_arenas][$_get](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 256, 12, "t(state == _arenas[pointe");
      if (!(state != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 257, 12, "t(state != nu");
      if (!(state.eagerWinner == null || dart.equals(state.eagerWinner, member))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 258, 12, "t(state.eagerWinner == null || state.eagerWinner == memb");
      if (!!dart.test(state.isOpen)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 259, 12, "t(!state.isOp");
      this[_arenas][$remove](pointer);
      for (let rejectedMember of state.members) {
        if (!dart.equals(rejectedMember, member)) rejectedMember.rejectGesture(pointer);
      }
      member.acceptGesture(pointer);
    }
    [_debugLogDiagnostic](pointer, message, state) {
      if (state === void 0) state = null;
      if (!dart.test(dart.fn(() => {
        if (dart.test(src__gestures__debug.debugPrintGestureArenaDiagnostics)) {
          let count = state != null ? state.members[$length] : null;
          let s = count !== 1 ? "s" : "";
          src__foundation__print.debugPrint("Gesture arena " + dart.toString(pointer)[$padRight](4) + " ❙ " + dart.str(message) + (count != null ? " with " + dart.str(count) + " member" + s + "." : ""));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 268, 12, "t(() {\n      if (debugPrintGestureArenaDiagnostics) {\n        final int count = state != null ? state.members.length : null;\n        final String s = count != 1 ? 's' : '';\n        debugPrint(\n            'Gesture arena ${pointer.toString().padRight(4)} ❙ $message${count != null ? \" with $count member$s.\" : \"\"}');\n      }\n      return true;\n   ");
      return true;
    }
  };
  (src__gestures__arena.GestureArenaManager.new = function() {
    this[_arenas] = new (IdentityMapOfint$_GestureArena()).new();
    ;
  }).prototype = src__gestures__arena.GestureArenaManager.prototype;
  dart.addTypeTests(src__gestures__arena.GestureArenaManager);
  dart.setMethodSignature(src__gestures__arena.GestureArenaManager, () => ({
    __proto__: dart.getMethods(src__gestures__arena.GestureArenaManager.__proto__),
    add: dart.fnType(src__gestures__arena.GestureArenaEntry, [core.int, src__gestures__arena.GestureArenaMember]),
    close: dart.fnType(dart.void, [core.int]),
    sweep: dart.fnType(dart.void, [core.int]),
    hold: dart.fnType(dart.void, [core.int]),
    release: dart.fnType(dart.void, [core.int]),
    [_resolve]: dart.fnType(dart.void, [core.int, src__gestures__arena.GestureArenaMember, src__gestures__arena.GestureDisposition]),
    [_tryToResolveArena]: dart.fnType(dart.void, [core.int, src__gestures__arena._GestureArena]),
    [_resolveByDefault]: dart.fnType(dart.void, [core.int, src__gestures__arena._GestureArena]),
    [_resolveInFavorOf]: dart.fnType(dart.void, [core.int, src__gestures__arena._GestureArena, src__gestures__arena.GestureArenaMember]),
    [_debugLogDiagnostic]: dart.fnType(core.bool, [core.int, core.String], [src__gestures__arena._GestureArena])
  }));
  dart.setLibraryUri(src__gestures__arena.GestureArenaManager, "package:flutter_web/src/gestures/arena.dart");
  dart.setFieldSignature(src__gestures__arena.GestureArenaManager, () => ({
    __proto__: dart.getFields(src__gestures__arena.GestureArenaManager.__proto__),
    [_arenas]: dart.finalFieldType(core.Map$(core.int, src__gestures__arena._GestureArena))
  }));
  src__gestures__debug.debugAssertAllGesturesVarsUnset = function(reason) {
    if (!dart.test(dart.fn(() => {
      if (dart.test(src__gestures__debug.debugPrintHitTestResults) || dart.test(src__gestures__debug.debugPrintGestureArenaDiagnostics) || dart.test(src__gestures__debug.debugPrintRecognizerCallbacksTrace)) dart.throw(src__foundation__assertions.FlutterError.new(reason));
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/debug.dart", 61, 10, "() {\n    if (debugPrintHitTestResults ||\n        debugPrintGestureArenaDiagnostics ||\n        debugPrintRecognizerCallbacksTrace) throw FlutterError(reason);\n    return true;\n  }()");
    return true;
  };
  dart.defineLazy(src__gestures__debug, {
    /*src__gestures__debug.debugPrintHitTestResults*/get debugPrintHitTestResults() {
      return false;
    },
    set debugPrintHitTestResults(_) {},
    /*src__gestures__debug.debugPrintMouseHoverEvents*/get debugPrintMouseHoverEvents() {
      return false;
    },
    set debugPrintMouseHoverEvents(_) {},
    /*src__gestures__debug.debugPrintGestureArenaDiagnostics*/get debugPrintGestureArenaDiagnostics() {
      return false;
    },
    set debugPrintGestureArenaDiagnostics(_) {},
    /*src__gestures__debug.debugPrintRecognizerCallbacksTrace*/get debugPrintRecognizerCallbacksTrace() {
      return false;
    },
    set debugPrintRecognizerCallbacksTrace(_) {}
  });
  const _routeMap = dart.privateName(src__gestures__pointer_router, "_routeMap");
  const _globalRoutes = dart.privateName(src__gestures__pointer_router, "_globalRoutes");
  const _dispatch = dart.privateName(src__gestures__pointer_router, "_dispatch");
  src__gestures__pointer_router.PointerRouter = class PointerRouter extends core.Object {
    addRoute(pointer, route) {
      let routes = this[_routeMap][$putIfAbsent](pointer, dart.fn(() => new (_HashSetOfPointerEventTovoid()).new(), VoidToLinkedHashSetOfPointerEventTovoid()));
      if (!!dart.test(routes.contains(route))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/pointer_router.dart", 30, 12, "!routes.contains(route)");
      routes.add(route);
    }
    removeRoute(pointer, route) {
      if (!dart.test(this[_routeMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/pointer_router.dart", 42, 12, "_routeMap.containsKey(pointer)");
      let routes = this[_routeMap][$_get](pointer);
      if (!dart.test(routes.contains(route))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/pointer_router.dart", 44, 12, "routes.contains(route)");
      routes.remove(route);
      if (dart.test(routes[$isEmpty])) this[_routeMap][$remove](pointer);
    }
    addGlobalRoute(route) {
      if (!!dart.test(this[_globalRoutes].contains(route))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/pointer_router.dart", 56, 12, "!_globalRoutes.contains(route)");
      this[_globalRoutes].add(route);
    }
    removeGlobalRoute(route) {
      if (!dart.test(this[_globalRoutes].contains(route))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/pointer_router.dart", 68, 12, "_globalRoutes.contains(route)");
      this[_globalRoutes].remove(route);
    }
    [_dispatch](event, route) {
      try {
        route(event);
      } catch (e) {
        let exception = dart.getThrown(e);
        let stack = dart.stackTrace(e);
        src__foundation__assertions.FlutterError.reportError(new src__gestures__pointer_router.FlutterErrorDetailsForPointerRouter.new({exception: exception, stack: stack, library: "gesture library", context: new src__foundation__assertions.ErrorDescription.new("while routing a pointer event"), router: this, route: route, event: event, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfPointerEvent()).new(function*() {
            yield new (DiagnosticsPropertyOfPointerEvent()).new("Event", event, {style: src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty});
          }), VoidToIterableOfDiagnosticsPropertyOfPointerEvent())}));
      }
    }
    route(event) {
      let routes = this[_routeMap][$_get](event.pointer);
      let globalRoutes = ListOfPointerEventTovoid().from(this[_globalRoutes]);
      if (routes != null) {
        for (let route of ListOfPointerEventTovoid().from(routes)) {
          if (dart.test(routes.contains(route))) this[_dispatch](event, route);
        }
      }
      for (let route of globalRoutes) {
        if (dart.test(this[_globalRoutes].contains(route))) this[_dispatch](event, route);
      }
    }
  };
  (src__gestures__pointer_router.PointerRouter.new = function() {
    this[_routeMap] = new (IdentityMapOfint$LinkedHashSetOfPointerEventTovoid()).new();
    this[_globalRoutes] = new (_HashSetOfPointerEventTovoid()).new();
    ;
  }).prototype = src__gestures__pointer_router.PointerRouter.prototype;
  dart.addTypeTests(src__gestures__pointer_router.PointerRouter);
  dart.setMethodSignature(src__gestures__pointer_router.PointerRouter, () => ({
    __proto__: dart.getMethods(src__gestures__pointer_router.PointerRouter.__proto__),
    addRoute: dart.fnType(dart.void, [core.int, dart.fnType(dart.void, [src__gestures__events.PointerEvent])]),
    removeRoute: dart.fnType(dart.void, [core.int, dart.fnType(dart.void, [src__gestures__events.PointerEvent])]),
    addGlobalRoute: dart.fnType(dart.void, [dart.fnType(dart.void, [src__gestures__events.PointerEvent])]),
    removeGlobalRoute: dart.fnType(dart.void, [dart.fnType(dart.void, [src__gestures__events.PointerEvent])]),
    [_dispatch]: dart.fnType(dart.void, [src__gestures__events.PointerEvent, dart.fnType(dart.void, [src__gestures__events.PointerEvent])]),
    route: dart.fnType(dart.void, [src__gestures__events.PointerEvent])
  }));
  dart.setLibraryUri(src__gestures__pointer_router.PointerRouter, "package:flutter_web/src/gestures/pointer_router.dart");
  dart.setFieldSignature(src__gestures__pointer_router.PointerRouter, () => ({
    __proto__: dart.getFields(src__gestures__pointer_router.PointerRouter.__proto__),
    [_routeMap]: dart.finalFieldType(core.Map$(core.int, collection.LinkedHashSet$(dart.fnType(dart.void, [src__gestures__events.PointerEvent])))),
    [_globalRoutes]: dart.finalFieldType(collection.LinkedHashSet$(dart.fnType(dart.void, [src__gestures__events.PointerEvent])))
  }));
  src__gestures__pointer_router.FlutterErrorDetailsForPointerRouter = class FlutterErrorDetailsForPointerRouter extends src__foundation__assertions.FlutterErrorDetails {
    get router() {
      return this[router$];
    }
    set router(value) {
      super.router = value;
    }
    get route() {
      return this[route$];
    }
    set route(value) {
      super.route = value;
    }
    get event() {
      return this[event$];
    }
    set event(value) {
      super.event = value;
    }
  };
  (src__gestures__pointer_router.FlutterErrorDetailsForPointerRouter.new = function(opts) {
    let exception = opts && 'exception' in opts ? opts.exception : null;
    let stack = opts && 'stack' in opts ? opts.stack : null;
    let library = opts && 'library' in opts ? opts.library : null;
    let context = opts && 'context' in opts ? opts.context : null;
    let router = opts && 'router' in opts ? opts.router : null;
    let route = opts && 'route' in opts ? opts.route : null;
    let event = opts && 'event' in opts ? opts.event : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    let silent = opts && 'silent' in opts ? opts.silent : false;
    this[router$] = router;
    this[route$] = route;
    this[event$] = event;
    src__gestures__pointer_router.FlutterErrorDetailsForPointerRouter.__proto__.new.call(this, {exception: exception, stack: stack, library: library, context: context, informationCollector: informationCollector, silent: silent});
    ;
  }).prototype = src__gestures__pointer_router.FlutterErrorDetailsForPointerRouter.prototype;
  dart.addTypeTests(src__gestures__pointer_router.FlutterErrorDetailsForPointerRouter);
  const router$ = Symbol("FlutterErrorDetailsForPointerRouter.router");
  const route$ = Symbol("FlutterErrorDetailsForPointerRouter.route");
  const event$ = Symbol("FlutterErrorDetailsForPointerRouter.event");
  dart.setLibraryUri(src__gestures__pointer_router.FlutterErrorDetailsForPointerRouter, "package:flutter_web/src/gestures/pointer_router.dart");
  dart.setFieldSignature(src__gestures__pointer_router.FlutterErrorDetailsForPointerRouter, () => ({
    __proto__: dart.getFields(src__gestures__pointer_router.FlutterErrorDetailsForPointerRouter.__proto__),
    router: dart.finalFieldType(src__gestures__pointer_router.PointerRouter),
    route: dart.finalFieldType(dart.fnType(dart.void, [src__gestures__events.PointerEvent])),
    event: dart.finalFieldType(src__gestures__events.PointerEvent)
  }));
  src__gestures__events.PointerEvent = class PointerEvent extends src__foundation__diagnostics.Diagnosticable {
    get timeStamp() {
      return this[timeStamp$];
    }
    set timeStamp(value) {
      super.timeStamp = value;
    }
    get pointer() {
      return this[pointer$];
    }
    set pointer(value) {
      super.pointer = value;
    }
    get kind() {
      return this[kind$];
    }
    set kind(value) {
      super.kind = value;
    }
    get device() {
      return this[device$];
    }
    set device(value) {
      super.device = value;
    }
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    get delta() {
      return this[delta$];
    }
    set delta(value) {
      super.delta = value;
    }
    get buttons() {
      return this[buttons$];
    }
    set buttons(value) {
      super.buttons = value;
    }
    get down() {
      return this[down$];
    }
    set down(value) {
      super.down = value;
    }
    get obscured() {
      return this[obscured$];
    }
    set obscured(value) {
      super.obscured = value;
    }
    get pressure() {
      return this[pressure$];
    }
    set pressure(value) {
      super.pressure = value;
    }
    get pressureMin() {
      return this[pressureMin$];
    }
    set pressureMin(value) {
      super.pressureMin = value;
    }
    get pressureMax() {
      return this[pressureMax$];
    }
    set pressureMax(value) {
      super.pressureMax = value;
    }
    get distance() {
      return this[distance$];
    }
    set distance(value) {
      super.distance = value;
    }
    get distanceMax() {
      return this[distanceMax$];
    }
    set distanceMax(value) {
      super.distanceMax = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get radiusMajor() {
      return this[radiusMajor$];
    }
    set radiusMajor(value) {
      super.radiusMajor = value;
    }
    get radiusMinor() {
      return this[radiusMinor$];
    }
    set radiusMinor(value) {
      super.radiusMinor = value;
    }
    get radiusMin() {
      return this[radiusMin$];
    }
    set radiusMin(value) {
      super.radiusMin = value;
    }
    get radiusMax() {
      return this[radiusMax$];
    }
    set radiusMax(value) {
      super.radiusMax = value;
    }
    get orientation() {
      return this[orientation$];
    }
    set orientation(value) {
      super.orientation = value;
    }
    get tilt() {
      return this[tilt$];
    }
    set tilt(value) {
      super.tilt = value;
    }
    get platformData() {
      return this[platformData$];
    }
    set platformData(value) {
      super.platformData = value;
    }
    get synthesized() {
      return this[synthesized$];
    }
    set synthesized(value) {
      super.synthesized = value;
    }
    get distanceMin() {
      return 0.0;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfOffset()).new("position", this.position));
      properties.add(new (DiagnosticsPropertyOfOffset()).new("delta", this.delta, {defaultValue: ui$.Offset.zero, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new (DiagnosticsPropertyOfDuration()).new("timeStamp", this.timeStamp, {defaultValue: core.Duration.zero, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.IntProperty.new("pointer", this.pointer, {level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new (EnumPropertyOfPointerDeviceKind()).new("kind", this.kind, {level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.IntProperty.new("device", this.device, {defaultValue: 0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.IntProperty.new("buttons", this.buttons, {defaultValue: 0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("down", this.down, {level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("pressure", this.pressure, {defaultValue: 1.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("pressureMin", this.pressureMin, {defaultValue: 1.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("pressureMax", this.pressureMax, {defaultValue: 1.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("distance", this.distance, {defaultValue: 0.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("distanceMin", this.distanceMin, {defaultValue: 0.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("distanceMax", this.distanceMax, {defaultValue: 0.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("size", this.size, {defaultValue: 0.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("radiusMajor", this.radiusMajor, {defaultValue: 0.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("radiusMinor", this.radiusMinor, {defaultValue: 0.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("radiusMin", this.radiusMin, {defaultValue: 0.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("radiusMax", this.radiusMax, {defaultValue: 0.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("orientation", this.orientation, {defaultValue: 0.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("tilt", this.tilt, {defaultValue: 0.0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.IntProperty.new("platformData", this.platformData, {defaultValue: 0, level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.FlagProperty.new("obscured", {value: this.obscured, ifTrue: "obscured", level: src__foundation__diagnostics.DiagnosticLevel.debug}));
      properties.add(new src__foundation__diagnostics.FlagProperty.new("synthesized", {value: this.synthesized, ifTrue: "synthesized", level: src__foundation__diagnostics.DiagnosticLevel.debug}));
    }
    toStringFull() {
      return this.toString({minLevel: src__foundation__diagnostics.DiagnosticLevel.fine});
    }
  };
  (src__gestures__events.PointerEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.touch;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    let delta = opts && 'delta' in opts ? opts.delta : ui$.Offset.zero;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let down = opts && 'down' in opts ? opts.down : false;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressure = opts && 'pressure' in opts ? opts.pressure : 1.0;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1.0;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1.0;
    let distance = opts && 'distance' in opts ? opts.distance : 0.0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0.0;
    let size = opts && 'size' in opts ? opts.size : 0.0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0.0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0.0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0.0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0.0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0.0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0.0;
    let platformData = opts && 'platformData' in opts ? opts.platformData : 0;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    this[timeStamp$] = timeStamp;
    this[pointer$] = pointer;
    this[kind$] = kind;
    this[device$] = device;
    this[position$] = position;
    this[delta$] = delta;
    this[buttons$] = buttons;
    this[down$] = down;
    this[obscured$] = obscured;
    this[pressure$] = pressure;
    this[pressureMin$] = pressureMin;
    this[pressureMax$] = pressureMax;
    this[distance$] = distance;
    this[distanceMax$] = distanceMax;
    this[size$] = size;
    this[radiusMajor$] = radiusMajor;
    this[radiusMinor$] = radiusMinor;
    this[radiusMin$] = radiusMin;
    this[radiusMax$] = radiusMax;
    this[orientation$] = orientation;
    this[tilt$] = tilt;
    this[platformData$] = platformData;
    this[synthesized$] = synthesized;
    src__gestures__events.PointerEvent.__proto__.new.call(this);
    ;
  }).prototype = src__gestures__events.PointerEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerEvent);
  const timeStamp$ = Symbol("PointerEvent.timeStamp");
  const pointer$ = Symbol("PointerEvent.pointer");
  const kind$ = Symbol("PointerEvent.kind");
  const device$ = Symbol("PointerEvent.device");
  const position$ = Symbol("PointerEvent.position");
  const delta$ = Symbol("PointerEvent.delta");
  const buttons$ = Symbol("PointerEvent.buttons");
  const down$ = Symbol("PointerEvent.down");
  const obscured$ = Symbol("PointerEvent.obscured");
  const pressure$ = Symbol("PointerEvent.pressure");
  const pressureMin$ = Symbol("PointerEvent.pressureMin");
  const pressureMax$ = Symbol("PointerEvent.pressureMax");
  const distance$ = Symbol("PointerEvent.distance");
  const distanceMax$ = Symbol("PointerEvent.distanceMax");
  const size$ = Symbol("PointerEvent.size");
  const radiusMajor$ = Symbol("PointerEvent.radiusMajor");
  const radiusMinor$ = Symbol("PointerEvent.radiusMinor");
  const radiusMin$ = Symbol("PointerEvent.radiusMin");
  const radiusMax$ = Symbol("PointerEvent.radiusMax");
  const orientation$ = Symbol("PointerEvent.orientation");
  const tilt$ = Symbol("PointerEvent.tilt");
  const platformData$ = Symbol("PointerEvent.platformData");
  const synthesized$ = Symbol("PointerEvent.synthesized");
  dart.setMethodSignature(src__gestures__events.PointerEvent, () => ({
    __proto__: dart.getMethods(src__gestures__events.PointerEvent.__proto__),
    toStringFull: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(src__gestures__events.PointerEvent, () => ({
    __proto__: dart.getGetters(src__gestures__events.PointerEvent.__proto__),
    distanceMin: core.double
  }));
  dart.setLibraryUri(src__gestures__events.PointerEvent, "package:flutter_web/src/gestures/events.dart");
  dart.setFieldSignature(src__gestures__events.PointerEvent, () => ({
    __proto__: dart.getFields(src__gestures__events.PointerEvent.__proto__),
    timeStamp: dart.finalFieldType(core.Duration),
    pointer: dart.finalFieldType(core.int),
    kind: dart.finalFieldType(ui$.PointerDeviceKind),
    device: dart.finalFieldType(core.int),
    position: dart.finalFieldType(ui$.Offset),
    delta: dart.finalFieldType(ui$.Offset),
    buttons: dart.finalFieldType(core.int),
    down: dart.finalFieldType(core.bool),
    obscured: dart.finalFieldType(core.bool),
    pressure: dart.finalFieldType(core.double),
    pressureMin: dart.finalFieldType(core.double),
    pressureMax: dart.finalFieldType(core.double),
    distance: dart.finalFieldType(core.double),
    distanceMax: dart.finalFieldType(core.double),
    size: dart.finalFieldType(core.double),
    radiusMajor: dart.finalFieldType(core.double),
    radiusMinor: dart.finalFieldType(core.double),
    radiusMin: dart.finalFieldType(core.double),
    radiusMax: dart.finalFieldType(core.double),
    orientation: dart.finalFieldType(core.double),
    tilt: dart.finalFieldType(core.double),
    platformData: dart.finalFieldType(core.int),
    synthesized: dart.finalFieldType(core.bool)
  }));
  src__gestures__events.PointerAddedEvent = class PointerAddedEvent extends src__gestures__events.PointerEvent {};
  (src__gestures__events.PointerAddedEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.touch;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1.0;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1.0;
    let distance = opts && 'distance' in opts ? opts.distance : 0.0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0.0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0.0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0.0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0.0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0.0;
    src__gestures__events.PointerAddedEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt});
    ;
  }).prototype = src__gestures__events.PointerAddedEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerAddedEvent);
  dart.setLibraryUri(src__gestures__events.PointerAddedEvent, "package:flutter_web/src/gestures/events.dart");
  src__gestures__events.PointerRemovedEvent = class PointerRemovedEvent extends src__gestures__events.PointerEvent {};
  (src__gestures__events.PointerRemovedEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.touch;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1.0;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1.0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0.0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0.0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0.0;
    src__gestures__events.PointerRemovedEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distanceMax: distanceMax, radiusMin: radiusMin, radiusMax: radiusMax});
    ;
  }).prototype = src__gestures__events.PointerRemovedEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerRemovedEvent);
  dart.setLibraryUri(src__gestures__events.PointerRemovedEvent, "package:flutter_web/src/gestures/events.dart");
  src__gestures__events.PointerHoverEvent = class PointerHoverEvent extends src__gestures__events.PointerEvent {};
  (src__gestures__events.PointerHoverEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.touch;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    let delta = opts && 'delta' in opts ? opts.delta : ui$.Offset.zero;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1.0;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1.0;
    let distance = opts && 'distance' in opts ? opts.distance : 0.0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0.0;
    let size = opts && 'size' in opts ? opts.size : 0.0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0.0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0.0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0.0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0.0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0.0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0.0;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    src__gestures__events.PointerHoverEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, delta: delta, buttons: buttons, down: false, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, synthesized: synthesized});
    ;
  }).prototype = src__gestures__events.PointerHoverEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerHoverEvent);
  dart.setLibraryUri(src__gestures__events.PointerHoverEvent, "package:flutter_web/src/gestures/events.dart");
  src__gestures__events.PointerEnterEvent = class PointerEnterEvent extends src__gestures__events.PointerEvent {};
  (src__gestures__events.PointerEnterEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.touch;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    let delta = opts && 'delta' in opts ? opts.delta : ui$.Offset.zero;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1.0;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1.0;
    let distance = opts && 'distance' in opts ? opts.distance : 0.0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0.0;
    let size = opts && 'size' in opts ? opts.size : 0.0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0.0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0.0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0.0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0.0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0.0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0.0;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    src__gestures__events.PointerEnterEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, delta: delta, buttons: buttons, down: false, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, synthesized: synthesized});
    ;
  }).prototype = src__gestures__events.PointerEnterEvent.prototype;
  (src__gestures__events.PointerEnterEvent.fromHoverEvent = function(event) {
    src__gestures__events.PointerEnterEvent.fromMouseEvent.call(this, event);
  }).prototype = src__gestures__events.PointerEnterEvent.prototype;
  (src__gestures__events.PointerEnterEvent.fromMouseEvent = function(event) {
    let t1, t1$, t1$0, t1$1, t1$2, t1$3, t1$4, t1$5, t1$6, t1$7, t1$8, t1$9, t1$10, t1$11, t1$12, t1$13, t1$14, t1$15, t1$16;
    src__gestures__events.PointerEnterEvent.new.call(this, {timeStamp: (t1 = event, t1 == null ? null : t1.timeStamp), kind: (t1$ = event, t1$ == null ? null : t1$.kind), device: (t1$0 = event, t1$0 == null ? null : t1$0.device), position: (t1$1 = event, t1$1 == null ? null : t1$1.position), delta: (t1$2 = event, t1$2 == null ? null : t1$2.delta), buttons: (t1$3 = event, t1$3 == null ? null : t1$3.buttons), obscured: (t1$4 = event, t1$4 == null ? null : t1$4.obscured), pressureMin: (t1$5 = event, t1$5 == null ? null : t1$5.pressureMin), pressureMax: (t1$6 = event, t1$6 == null ? null : t1$6.pressureMax), distance: (t1$7 = event, t1$7 == null ? null : t1$7.distance), distanceMax: (t1$8 = event, t1$8 == null ? null : t1$8.distanceMax), size: (t1$9 = event, t1$9 == null ? null : t1$9.size), radiusMajor: (t1$10 = event, t1$10 == null ? null : t1$10.radiusMajor), radiusMinor: (t1$11 = event, t1$11 == null ? null : t1$11.radiusMinor), radiusMin: (t1$12 = event, t1$12 == null ? null : t1$12.radiusMin), radiusMax: (t1$13 = event, t1$13 == null ? null : t1$13.radiusMax), orientation: (t1$14 = event, t1$14 == null ? null : t1$14.orientation), tilt: (t1$15 = event, t1$15 == null ? null : t1$15.tilt), synthesized: (t1$16 = event, t1$16 == null ? null : t1$16.synthesized)});
  }).prototype = src__gestures__events.PointerEnterEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerEnterEvent);
  dart.setLibraryUri(src__gestures__events.PointerEnterEvent, "package:flutter_web/src/gestures/events.dart");
  src__gestures__events.PointerExitEvent = class PointerExitEvent extends src__gestures__events.PointerEvent {};
  (src__gestures__events.PointerExitEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.touch;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    let delta = opts && 'delta' in opts ? opts.delta : ui$.Offset.zero;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1.0;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1.0;
    let distance = opts && 'distance' in opts ? opts.distance : 0.0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0.0;
    let size = opts && 'size' in opts ? opts.size : 0.0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0.0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0.0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0.0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0.0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0.0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0.0;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    src__gestures__events.PointerExitEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, delta: delta, buttons: buttons, down: false, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, synthesized: synthesized});
    ;
  }).prototype = src__gestures__events.PointerExitEvent.prototype;
  (src__gestures__events.PointerExitEvent.fromHoverEvent = function(event) {
    src__gestures__events.PointerExitEvent.fromMouseEvent.call(this, event);
  }).prototype = src__gestures__events.PointerExitEvent.prototype;
  (src__gestures__events.PointerExitEvent.fromMouseEvent = function(event) {
    let t1, t1$, t1$0, t1$1, t1$2, t1$3, t1$4, t1$5, t1$6, t1$7, t1$8, t1$9, t1$10, t1$11, t1$12, t1$13, t1$14, t1$15, t1$16;
    src__gestures__events.PointerExitEvent.new.call(this, {timeStamp: (t1 = event, t1 == null ? null : t1.timeStamp), kind: (t1$ = event, t1$ == null ? null : t1$.kind), device: (t1$0 = event, t1$0 == null ? null : t1$0.device), position: (t1$1 = event, t1$1 == null ? null : t1$1.position), delta: (t1$2 = event, t1$2 == null ? null : t1$2.delta), buttons: (t1$3 = event, t1$3 == null ? null : t1$3.buttons), obscured: (t1$4 = event, t1$4 == null ? null : t1$4.obscured), pressureMin: (t1$5 = event, t1$5 == null ? null : t1$5.pressureMin), pressureMax: (t1$6 = event, t1$6 == null ? null : t1$6.pressureMax), distance: (t1$7 = event, t1$7 == null ? null : t1$7.distance), distanceMax: (t1$8 = event, t1$8 == null ? null : t1$8.distanceMax), size: (t1$9 = event, t1$9 == null ? null : t1$9.size), radiusMajor: (t1$10 = event, t1$10 == null ? null : t1$10.radiusMajor), radiusMinor: (t1$11 = event, t1$11 == null ? null : t1$11.radiusMinor), radiusMin: (t1$12 = event, t1$12 == null ? null : t1$12.radiusMin), radiusMax: (t1$13 = event, t1$13 == null ? null : t1$13.radiusMax), orientation: (t1$14 = event, t1$14 == null ? null : t1$14.orientation), tilt: (t1$15 = event, t1$15 == null ? null : t1$15.tilt), synthesized: (t1$16 = event, t1$16 == null ? null : t1$16.synthesized)});
  }).prototype = src__gestures__events.PointerExitEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerExitEvent);
  dart.setLibraryUri(src__gestures__events.PointerExitEvent, "package:flutter_web/src/gestures/events.dart");
  src__gestures__events.PointerDownEvent = class PointerDownEvent extends src__gestures__events.PointerEvent {};
  (src__gestures__events.PointerDownEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.touch;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    let buttons = opts && 'buttons' in opts ? opts.buttons : src__gestures__events.kPrimaryButton;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressure = opts && 'pressure' in opts ? opts.pressure : 1.0;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1.0;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1.0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0.0;
    let size = opts && 'size' in opts ? opts.size : 0.0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0.0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0.0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0.0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0.0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0.0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0.0;
    src__gestures__events.PointerDownEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, buttons: buttons, down: true, obscured: obscured, pressure: pressure, pressureMin: pressureMin, pressureMax: pressureMax, distance: 0.0, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt});
    ;
  }).prototype = src__gestures__events.PointerDownEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerDownEvent);
  dart.setLibraryUri(src__gestures__events.PointerDownEvent, "package:flutter_web/src/gestures/events.dart");
  src__gestures__events.PointerMoveEvent = class PointerMoveEvent extends src__gestures__events.PointerEvent {};
  (src__gestures__events.PointerMoveEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.touch;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    let delta = opts && 'delta' in opts ? opts.delta : ui$.Offset.zero;
    let buttons = opts && 'buttons' in opts ? opts.buttons : src__gestures__events.kPrimaryButton;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressure = opts && 'pressure' in opts ? opts.pressure : 1.0;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1.0;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1.0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0.0;
    let size = opts && 'size' in opts ? opts.size : 0.0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0.0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0.0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0.0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0.0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0.0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0.0;
    let platformData = opts && 'platformData' in opts ? opts.platformData : 0;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    src__gestures__events.PointerMoveEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, delta: delta, buttons: buttons, down: true, obscured: obscured, pressure: pressure, pressureMin: pressureMin, pressureMax: pressureMax, distance: 0.0, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, platformData: platformData, synthesized: synthesized});
    ;
  }).prototype = src__gestures__events.PointerMoveEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerMoveEvent);
  dart.setLibraryUri(src__gestures__events.PointerMoveEvent, "package:flutter_web/src/gestures/events.dart");
  src__gestures__events.PointerUpEvent = class PointerUpEvent extends src__gestures__events.PointerEvent {};
  (src__gestures__events.PointerUpEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.touch;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressure = opts && 'pressure' in opts ? opts.pressure : 0.0;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1.0;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1.0;
    let distance = opts && 'distance' in opts ? opts.distance : 0.0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0.0;
    let size = opts && 'size' in opts ? opts.size : 0.0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0.0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0.0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0.0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0.0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0.0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0.0;
    src__gestures__events.PointerUpEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, buttons: buttons, down: false, obscured: obscured, pressure: pressure, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt});
    ;
  }).prototype = src__gestures__events.PointerUpEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerUpEvent);
  dart.setLibraryUri(src__gestures__events.PointerUpEvent, "package:flutter_web/src/gestures/events.dart");
  src__gestures__events.PointerSignalEvent = class PointerSignalEvent extends src__gestures__events.PointerEvent {};
  (src__gestures__events.PointerSignalEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.mouse;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    src__gestures__events.PointerSignalEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position});
    ;
  }).prototype = src__gestures__events.PointerSignalEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerSignalEvent);
  dart.setLibraryUri(src__gestures__events.PointerSignalEvent, "package:flutter_web/src/gestures/events.dart");
  src__gestures__events.PointerScrollEvent = class PointerScrollEvent extends src__gestures__events.PointerSignalEvent {
    get scrollDelta() {
      return this[scrollDelta$];
    }
    set scrollDelta(value) {
      super.scrollDelta = value;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfOffset()).new("scrollDelta", this.scrollDelta));
    }
  };
  (src__gestures__events.PointerScrollEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.mouse;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    let scrollDelta = opts && 'scrollDelta' in opts ? opts.scrollDelta : ui$.Offset.zero;
    this[scrollDelta$] = scrollDelta;
    if (!(timeStamp != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/events.dart", 970, 16, "timeStamp != null");
    if (!(kind != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/events.dart", 971, 16, "kind != null");
    if (!(device != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/events.dart", 972, 16, "device != null");
    if (!(position != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/events.dart", 973, 16, "position != null");
    if (!(scrollDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/events.dart", 974, 16, "scrollDelta != null");
    src__gestures__events.PointerScrollEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position});
    ;
  }).prototype = src__gestures__events.PointerScrollEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerScrollEvent);
  const scrollDelta$ = Symbol("PointerScrollEvent.scrollDelta");
  dart.setLibraryUri(src__gestures__events.PointerScrollEvent, "package:flutter_web/src/gestures/events.dart");
  dart.setFieldSignature(src__gestures__events.PointerScrollEvent, () => ({
    __proto__: dart.getFields(src__gestures__events.PointerScrollEvent.__proto__),
    scrollDelta: dart.finalFieldType(ui$.Offset)
  }));
  src__gestures__events.PointerCancelEvent = class PointerCancelEvent extends src__gestures__events.PointerEvent {};
  (src__gestures__events.PointerCancelEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : core.Duration.zero;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : ui$.PointerDeviceKind.touch;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : ui$.Offset.zero;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1.0;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1.0;
    let distance = opts && 'distance' in opts ? opts.distance : 0.0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0.0;
    let size = opts && 'size' in opts ? opts.size : 0.0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0.0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0.0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0.0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0.0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0.0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0.0;
    src__gestures__events.PointerCancelEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, buttons: buttons, down: false, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt});
    ;
  }).prototype = src__gestures__events.PointerCancelEvent.prototype;
  dart.addTypeTests(src__gestures__events.PointerCancelEvent);
  dart.setLibraryUri(src__gestures__events.PointerCancelEvent, "package:flutter_web/src/gestures/events.dart");
  src__gestures__events.nthMouseButton = function(number) {
    return (src__gestures__events.kPrimaryMouseButton[$leftShift](dart.notNull(number) - 1) & dart.notNull(src__foundation__bitfield.kMaxUnsignedSMI)) >>> 0;
  };
  src__gestures__events.nthStylusButton = function(number) {
    return (src__gestures__events.kPrimaryStylusButton[$leftShift](dart.notNull(number) - 1) & dart.notNull(src__foundation__bitfield.kMaxUnsignedSMI)) >>> 0;
  };
  src__gestures__events.smallestButton = function(buttons) {
    return (dart.notNull(buttons) & -dart.notNull(buttons)) >>> 0;
  };
  src__gestures__events.isSingleButton = function(buttons) {
    return buttons !== 0 && src__gestures__events.smallestButton(buttons) == buttons;
  };
  dart.defineLazy(src__gestures__events, {
    /*src__gestures__events.kPrimaryButton*/get kPrimaryButton() {
      return 1;
    },
    /*src__gestures__events.kSecondaryButton*/get kSecondaryButton() {
      return 2;
    },
    /*src__gestures__events.kPrimaryMouseButton*/get kPrimaryMouseButton() {
      return src__gestures__events.kPrimaryButton;
    },
    /*src__gestures__events.kSecondaryMouseButton*/get kSecondaryMouseButton() {
      return src__gestures__events.kSecondaryButton;
    },
    /*src__gestures__events.kStylusContact*/get kStylusContact() {
      return src__gestures__events.kPrimaryButton;
    },
    /*src__gestures__events.kPrimaryStylusButton*/get kPrimaryStylusButton() {
      return src__gestures__events.kSecondaryButton;
    },
    /*src__gestures__events.kMiddleMouseButton*/get kMiddleMouseButton() {
      return 4;
    },
    /*src__gestures__events.kSecondaryStylusButton*/get kSecondaryStylusButton() {
      return 4;
    },
    /*src__gestures__events.kBackMouseButton*/get kBackMouseButton() {
      return 8;
    },
    /*src__gestures__events.kForwardMouseButton*/get kForwardMouseButton() {
      return 16;
    },
    /*src__gestures__events.kTouchContact*/get kTouchContact() {
      return src__gestures__events.kPrimaryButton;
    }
  });
  const _name$0 = dart.privateName(src__gestures__scale, "_name");
  src__gestures__scale._ScaleState = class _ScaleState extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (src__gestures__scale._ScaleState.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = src__gestures__scale._ScaleState.prototype;
  dart.addTypeTests(src__gestures__scale._ScaleState);
  dart.setLibraryUri(src__gestures__scale._ScaleState, "package:flutter_web/src/gestures/scale.dart");
  dart.setFieldSignature(src__gestures__scale._ScaleState, () => ({
    __proto__: dart.getFields(src__gestures__scale._ScaleState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__gestures__scale._ScaleState, ['toString']);
  src__gestures__scale._ScaleState.ready = dart.const(new src__gestures__scale._ScaleState.new(0, "_ScaleState.ready"));
  src__gestures__scale._ScaleState.possible = dart.const(new src__gestures__scale._ScaleState.new(1, "_ScaleState.possible"));
  src__gestures__scale._ScaleState.accepted = dart.const(new src__gestures__scale._ScaleState.new(2, "_ScaleState.accepted"));
  src__gestures__scale._ScaleState.started = dart.const(new src__gestures__scale._ScaleState.new(3, "_ScaleState.started"));
  src__gestures__scale._ScaleState.values = dart.constList([src__gestures__scale._ScaleState.ready, src__gestures__scale._ScaleState.possible, src__gestures__scale._ScaleState.accepted, src__gestures__scale._ScaleState.started], src__gestures__scale._ScaleState);
  src__gestures__scale.ScaleStartDetails = class ScaleStartDetails extends core.Object {
    get focalPoint() {
      return this[focalPoint$];
    }
    set focalPoint(value) {
      super.focalPoint = value;
    }
    toString() {
      return "ScaleStartDetails(focalPoint: " + dart.str(this.focalPoint) + ")";
    }
  };
  (src__gestures__scale.ScaleStartDetails.new = function(opts) {
    let focalPoint = opts && 'focalPoint' in opts ? opts.focalPoint : ui$.Offset.zero;
    this[focalPoint$] = focalPoint;
    if (!(focalPoint != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 38, 16, "focalPoint != null");
    ;
  }).prototype = src__gestures__scale.ScaleStartDetails.prototype;
  dart.addTypeTests(src__gestures__scale.ScaleStartDetails);
  const focalPoint$ = Symbol("ScaleStartDetails.focalPoint");
  dart.setLibraryUri(src__gestures__scale.ScaleStartDetails, "package:flutter_web/src/gestures/scale.dart");
  dart.setFieldSignature(src__gestures__scale.ScaleStartDetails, () => ({
    __proto__: dart.getFields(src__gestures__scale.ScaleStartDetails.__proto__),
    focalPoint: dart.finalFieldType(ui$.Offset)
  }));
  dart.defineExtensionMethods(src__gestures__scale.ScaleStartDetails, ['toString']);
  src__gestures__scale.ScaleUpdateDetails = class ScaleUpdateDetails extends core.Object {
    get focalPoint() {
      return this[focalPoint$0];
    }
    set focalPoint(value) {
      super.focalPoint = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    get horizontalScale() {
      return this[horizontalScale$];
    }
    set horizontalScale(value) {
      super.horizontalScale = value;
    }
    get verticalScale() {
      return this[verticalScale$];
    }
    set verticalScale(value) {
      super.verticalScale = value;
    }
    get rotation() {
      return this[rotation$];
    }
    set rotation(value) {
      super.rotation = value;
    }
    toString() {
      return "ScaleUpdateDetails(focalPoint: " + dart.str(this.focalPoint) + ", scale: " + dart.str(this.scale) + ", horizontalScale: " + dart.str(this.horizontalScale) + ", verticalScale: " + dart.str(this.verticalScale) + ", rotation: " + dart.str(this.rotation) + ")";
    }
  };
  (src__gestures__scale.ScaleUpdateDetails.new = function(opts) {
    let focalPoint = opts && 'focalPoint' in opts ? opts.focalPoint : ui$.Offset.zero;
    let scale = opts && 'scale' in opts ? opts.scale : 1.0;
    let horizontalScale = opts && 'horizontalScale' in opts ? opts.horizontalScale : 1.0;
    let verticalScale = opts && 'verticalScale' in opts ? opts.verticalScale : 1.0;
    let rotation = opts && 'rotation' in opts ? opts.rotation : 0.0;
    this[focalPoint$0] = focalPoint;
    this[scale$] = scale;
    this[horizontalScale$] = horizontalScale;
    this[verticalScale$] = verticalScale;
    this[rotation$] = rotation;
    if (!(focalPoint != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 61, 16, "focalPoint != null");
    if (!(scale != null && dart.notNull(scale) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 62, 16, "scale != null && scale >= 0.0");
    if (!(horizontalScale != null && dart.notNull(horizontalScale) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 63, 16, "horizontalScale != null && horizontalScale >= 0.0");
    if (!(verticalScale != null && dart.notNull(verticalScale) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 64, 16, "verticalScale != null && verticalScale >= 0.0");
    if (!(rotation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 65, 16, "rotation != null");
    ;
  }).prototype = src__gestures__scale.ScaleUpdateDetails.prototype;
  dart.addTypeTests(src__gestures__scale.ScaleUpdateDetails);
  const focalPoint$0 = Symbol("ScaleUpdateDetails.focalPoint");
  const scale$ = Symbol("ScaleUpdateDetails.scale");
  const horizontalScale$ = Symbol("ScaleUpdateDetails.horizontalScale");
  const verticalScale$ = Symbol("ScaleUpdateDetails.verticalScale");
  const rotation$ = Symbol("ScaleUpdateDetails.rotation");
  dart.setLibraryUri(src__gestures__scale.ScaleUpdateDetails, "package:flutter_web/src/gestures/scale.dart");
  dart.setFieldSignature(src__gestures__scale.ScaleUpdateDetails, () => ({
    __proto__: dart.getFields(src__gestures__scale.ScaleUpdateDetails.__proto__),
    focalPoint: dart.finalFieldType(ui$.Offset),
    scale: dart.finalFieldType(core.double),
    horizontalScale: dart.finalFieldType(core.double),
    verticalScale: dart.finalFieldType(core.double),
    rotation: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__gestures__scale.ScaleUpdateDetails, ['toString']);
  src__gestures__scale.ScaleEndDetails = class ScaleEndDetails extends core.Object {
    get velocity() {
      return this[velocity$];
    }
    set velocity(value) {
      super.velocity = value;
    }
    toString() {
      return "ScaleEndDetails(velocity: " + dart.str(this.velocity) + ")";
    }
  };
  (src__gestures__scale.ScaleEndDetails.new = function(opts) {
    let velocity = opts && 'velocity' in opts ? opts.velocity : src__gestures__velocity_tracker.Velocity.zero;
    this[velocity$] = velocity;
    if (!(velocity != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 121, 61, "velocity != null");
    ;
  }).prototype = src__gestures__scale.ScaleEndDetails.prototype;
  dart.addTypeTests(src__gestures__scale.ScaleEndDetails);
  const velocity$ = Symbol("ScaleEndDetails.velocity");
  dart.setLibraryUri(src__gestures__scale.ScaleEndDetails, "package:flutter_web/src/gestures/scale.dart");
  dart.setFieldSignature(src__gestures__scale.ScaleEndDetails, () => ({
    __proto__: dart.getFields(src__gestures__scale.ScaleEndDetails.__proto__),
    velocity: dart.finalFieldType(src__gestures__velocity_tracker.Velocity)
  }));
  dart.defineExtensionMethods(src__gestures__scale.ScaleEndDetails, ['toString']);
  src__gestures__scale._LineBetweenPointers = class _LineBetweenPointers extends core.Object {};
  (src__gestures__scale._LineBetweenPointers.new = function(opts) {
    let pointerStartLocation = opts && 'pointerStartLocation' in opts ? opts.pointerStartLocation : ui$.Offset.zero;
    let pointerStartId = opts && 'pointerStartId' in opts ? opts.pointerStartId : 0;
    let pointerEndLocation = opts && 'pointerEndLocation' in opts ? opts.pointerEndLocation : ui$.Offset.zero;
    let pointerEndId = opts && 'pointerEndId' in opts ? opts.pointerEndId : 1;
    this.pointerStartLocation = pointerStartLocation;
    this.pointerStartId = pointerStartId;
    this.pointerEndLocation = pointerEndLocation;
    this.pointerEndId = pointerEndId;
    if (!(pointerStartLocation != null && pointerEndLocation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 160, 16, "pointerStartLocation != null && pointerEndLocation != null");
    if (!(pointerStartId != null && pointerEndId != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 161, 16, "pointerStartId != null && pointerEndId != null");
    if (!(pointerStartId != pointerEndId)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 162, 16, "pointerStartId != pointerEndId");
    ;
  }).prototype = src__gestures__scale._LineBetweenPointers.prototype;
  dart.addTypeTests(src__gestures__scale._LineBetweenPointers);
  dart.setLibraryUri(src__gestures__scale._LineBetweenPointers, "package:flutter_web/src/gestures/scale.dart");
  dart.setFieldSignature(src__gestures__scale._LineBetweenPointers, () => ({
    __proto__: dart.getFields(src__gestures__scale._LineBetweenPointers.__proto__),
    pointerStartLocation: dart.finalFieldType(ui$.Offset),
    pointerStartId: dart.finalFieldType(core.int),
    pointerEndLocation: dart.finalFieldType(ui$.Offset),
    pointerEndId: dart.finalFieldType(core.int)
  }));
  const _state = dart.privateName(src__gestures__scale, "_state");
  const _initialFocalPoint = dart.privateName(src__gestures__scale, "_initialFocalPoint");
  const _currentFocalPoint = dart.privateName(src__gestures__scale, "_currentFocalPoint");
  const _initialSpan = dart.privateName(src__gestures__scale, "_initialSpan");
  const _currentSpan = dart.privateName(src__gestures__scale, "_currentSpan");
  const _initialHorizontalSpan = dart.privateName(src__gestures__scale, "_initialHorizontalSpan");
  const _currentHorizontalSpan = dart.privateName(src__gestures__scale, "_currentHorizontalSpan");
  const _initialVerticalSpan = dart.privateName(src__gestures__scale, "_initialVerticalSpan");
  const _currentVerticalSpan = dart.privateName(src__gestures__scale, "_currentVerticalSpan");
  const _initialLine = dart.privateName(src__gestures__scale, "_initialLine");
  const _currentLine = dart.privateName(src__gestures__scale, "_currentLine");
  const _pointerLocations = dart.privateName(src__gestures__scale, "_pointerLocations");
  const _pointerQueue = dart.privateName(src__gestures__scale, "_pointerQueue");
  const _velocityTrackers = dart.privateName(src__gestures__scale, "_velocityTrackers");
  const _scaleFactor = dart.privateName(src__gestures__scale, "_scaleFactor");
  const _horizontalScaleFactor = dart.privateName(src__gestures__scale, "_horizontalScaleFactor");
  const _verticalScaleFactor = dart.privateName(src__gestures__scale, "_verticalScaleFactor");
  const _computeRotationFactor = dart.privateName(src__gestures__scale, "_computeRotationFactor");
  const _updateLines = dart.privateName(src__gestures__scale, "_updateLines");
  const _update = dart.privateName(src__gestures__scale, "_update");
  const _reconfigure = dart.privateName(src__gestures__scale, "_reconfigure");
  const _advanceStateMachine = dart.privateName(src__gestures__scale, "_advanceStateMachine");
  const _dispatchOnStartCallbackIfNeeded = dart.privateName(src__gestures__scale, "_dispatchOnStartCallbackIfNeeded");
  const _entries = dart.privateName(src__gestures__recognizer, "_entries");
  const _trackedPointers = dart.privateName(src__gestures__recognizer, "_trackedPointers");
  const _team = dart.privateName(src__gestures__recognizer, "_team");
  const _addPointerToArena = dart.privateName(src__gestures__recognizer, "_addPointerToArena");
  const _pointerToKind = dart.privateName(src__gestures__recognizer, "_pointerToKind");
  const _kindFilter = dart.privateName(src__gestures__recognizer, "_kindFilter");
  const GestureArenaMember_DiagnosticableTreeMixin$ = class GestureArenaMember_DiagnosticableTreeMixin extends src__gestures__arena.GestureArenaMember {};
  (GestureArenaMember_DiagnosticableTreeMixin$.new = function() {
  }).prototype = GestureArenaMember_DiagnosticableTreeMixin$.prototype;
  dart.applyMixin(GestureArenaMember_DiagnosticableTreeMixin$, src__foundation__diagnostics.DiagnosticableTreeMixin);
  src__gestures__recognizer.GestureRecognizer = class GestureRecognizer extends GestureArenaMember_DiagnosticableTreeMixin$ {
    get debugOwner() {
      return this[debugOwner$];
    }
    set debugOwner(value) {
      super.debugOwner = value;
    }
    addPointer(event) {
      this[_pointerToKind][$_set](event.pointer, event.kind);
      if (dart.test(this.isPointerAllowed(event))) {
        this.addAllowedPointer(event);
      } else {
        this.handleNonAllowedPointer(event);
      }
    }
    addAllowedPointer(event) {
    }
    handleNonAllowedPointer(event) {
    }
    isPointerAllowed(event) {
      return this[_kindFilter] == null || dart.equals(this[_kindFilter], event.kind);
    }
    getKindForPointer(pointer) {
      if (!dart.test(this[_pointerToKind][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 142, 12, "_pointerToKind.containsKey(pointer)");
      return this[_pointerToKind][$_get](pointer);
    }
    dispose() {
    }
    invokeCallback(T, name, callback, opts) {
      let debugReport = opts && 'debugReport' in opts ? opts.debugReport : null;
      if (!(callback != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 171, 12, "callback != null");
      let result = null;
      try {
        if (!dart.test(dart.fn(() => {
          let t1;
          if (dart.test(src__gestures__debug.debugPrintRecognizerCallbacksTrace)) {
            let report = debugReport != null ? debugReport() : null;
            let prefix = dart.test(src__gestures__debug.debugPrintGestureArenaDiagnostics) ? " "[$times](19) + "❙ " : "";
            src__foundation__print.debugPrint(prefix + dart.str(this) + " calling " + dart.str(name) + " callback." + (dart.equals((t1 = report, t1 == null ? null : t1[$isNotEmpty]), true) ? " " + dart.str(report) : ""));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 174, 14, "() {\n        if (debugPrintRecognizerCallbacksTrace) {\n          final String report = debugReport != null ? debugReport() : null;\n          // The 19 in the line below is the width of the prefix used by\n          // _debugLogDiagnostic in arena.dart.\n          final String prefix =\n              debugPrintGestureArenaDiagnostics ? ' ' * 19 + '❙ ' : '';\n          debugPrint(\n              '$prefix$this calling $name callback.${report?.isNotEmpty == true ? \" $report\" : \"\"}');\n        }\n        return true;\n      }");
        result = callback();
      } catch (e) {
        let exception = dart.getThrown(e);
        let stack = dart.stackTrace(e);
        src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "gesture", context: new src__foundation__assertions.ErrorDescription.new("while handling a gesture"), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new((function*() {
            yield new src__foundation__diagnostics.StringProperty.new("Handler", name);
            yield new (DiagnosticsPropertyOfGestureRecognizer()).new("Recognizer", this, {style: src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty});
          }).bind(this)), VoidToIterableOfDiagnosticsNode())}));
      }
      return result;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfObject()).new("debugOwner", this.debugOwner, {defaultValue: null}));
    }
  };
  (src__gestures__recognizer.GestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[_pointerToKind] = new (IdentityMapOfint$PointerDeviceKind()).new();
    this[debugOwner$] = debugOwner;
    this[_kindFilter] = kind;
    ;
  }).prototype = src__gestures__recognizer.GestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__recognizer.GestureRecognizer);
  const debugOwner$ = Symbol("GestureRecognizer.debugOwner");
  dart.setMethodSignature(src__gestures__recognizer.GestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__recognizer.GestureRecognizer.__proto__),
    addPointer: dart.fnType(dart.void, [src__gestures__events.PointerDownEvent]),
    addAllowedPointer: dart.fnType(dart.void, [src__gestures__events.PointerDownEvent]),
    handleNonAllowedPointer: dart.fnType(dart.void, [src__gestures__events.PointerDownEvent]),
    isPointerAllowed: dart.fnType(core.bool, [src__gestures__events.PointerDownEvent]),
    getKindForPointer: dart.fnType(ui$.PointerDeviceKind, [core.int]),
    dispose: dart.fnType(dart.void, []),
    invokeCallback: dart.gFnType(T => [T, [core.String, dart.fnType(T, [])], {debugReport: dart.fnType(core.String, [])}])
  }));
  dart.setLibraryUri(src__gestures__recognizer.GestureRecognizer, "package:flutter_web/src/gestures/recognizer.dart");
  dart.setFieldSignature(src__gestures__recognizer.GestureRecognizer, () => ({
    __proto__: dart.getFields(src__gestures__recognizer.GestureRecognizer.__proto__),
    debugOwner: dart.finalFieldType(core.Object),
    [_kindFilter]: dart.finalFieldType(ui$.PointerDeviceKind),
    [_pointerToKind]: dart.finalFieldType(core.Map$(core.int, ui$.PointerDeviceKind))
  }));
  src__gestures__recognizer.OneSequenceGestureRecognizer = class OneSequenceGestureRecognizer extends src__gestures__recognizer.GestureRecognizer {
    handleNonAllowedPointer(event) {
      this.resolve(src__gestures__arena.GestureDisposition.rejected);
    }
    acceptGesture(pointer) {
    }
    rejectGesture(pointer) {
    }
    resolve(disposition) {
      let localEntries = ListOfGestureArenaEntry().from(this[_entries][$values]);
      this[_entries][$clear]();
      for (let entry of localEntries)
        entry.resolve(disposition);
    }
    dispose() {
      this.resolve(src__gestures__arena.GestureDisposition.rejected);
      for (let pointer of this[_trackedPointers])
        src__gestures__binding.GestureBinding.instance.pointerRouter.removeRoute(pointer, dart.bind(this, 'handleEvent'));
      this[_trackedPointers].clear();
      if (!dart.test(this[_entries][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 269, 12, "t(_entries.isEmp");
      super.dispose();
    }
    get team() {
      return this[_team];
    }
    set team(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 288, 12, "t(value != nu");
      if (!dart.test(this[_entries][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 289, 12, "t(_entries.isEmp");
      if (!dart.test(this[_trackedPointers][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 290, 12, "t(_trackedPointers.isEmp");
      if (!(this[_team] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 291, 12, "t(_team == nu");
      this[_team] = value;
    }
    [_addPointerToArena](pointer) {
      if (this[_team] != null) return this[_team].add(pointer, this);
      return src__gestures__binding.GestureBinding.instance.gestureArena.add(pointer, this);
    }
    startTrackingPointer(pointer) {
      src__gestures__binding.GestureBinding.instance.pointerRouter.addRoute(pointer, dart.bind(this, 'handleEvent'));
      this[_trackedPointers].add(pointer);
      if (!!dart.test(this[_entries][$containsValue](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 309, 12, "t(!_entries.containsValue(pointe");
      this[_entries][$_set](pointer, this[_addPointerToArena](pointer));
    }
    stopTrackingPointer(pointer) {
      if (dart.test(this[_trackedPointers].contains(pointer))) {
        src__gestures__binding.GestureBinding.instance.pointerRouter.removeRoute(pointer, dart.bind(this, 'handleEvent'));
        this[_trackedPointers].remove(pointer);
        if (dart.test(this[_trackedPointers][$isEmpty])) this.didStopTrackingLastPointer(pointer);
      }
    }
    stopTrackingIfPointerNoLongerDown(event) {
      if (src__gestures__events.PointerUpEvent.is(event) || src__gestures__events.PointerCancelEvent.is(event)) this.stopTrackingPointer(event.pointer);
    }
  };
  (src__gestures__recognizer.OneSequenceGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[_entries] = new (IdentityMapOfint$GestureArenaEntry()).new();
    this[_trackedPointers] = new (_IdentityHashSetOfint()).new();
    this[_team] = null;
    src__gestures__recognizer.OneSequenceGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = src__gestures__recognizer.OneSequenceGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__recognizer.OneSequenceGestureRecognizer);
  dart.setMethodSignature(src__gestures__recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__recognizer.OneSequenceGestureRecognizer.__proto__),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    resolve: dart.fnType(dart.void, [src__gestures__arena.GestureDisposition]),
    [_addPointerToArena]: dart.fnType(src__gestures__arena.GestureArenaEntry, [core.int]),
    startTrackingPointer: dart.fnType(dart.void, [core.int]),
    stopTrackingPointer: dart.fnType(dart.void, [core.int]),
    stopTrackingIfPointerNoLongerDown: dart.fnType(dart.void, [src__gestures__events.PointerEvent])
  }));
  dart.setGetterSignature(src__gestures__recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__recognizer.OneSequenceGestureRecognizer.__proto__),
    team: src__gestures__team.GestureArenaTeam
  }));
  dart.setSetterSignature(src__gestures__recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getSetters(src__gestures__recognizer.OneSequenceGestureRecognizer.__proto__),
    team: src__gestures__team.GestureArenaTeam
  }));
  dart.setLibraryUri(src__gestures__recognizer.OneSequenceGestureRecognizer, "package:flutter_web/src/gestures/recognizer.dart");
  dart.setFieldSignature(src__gestures__recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getFields(src__gestures__recognizer.OneSequenceGestureRecognizer.__proto__),
    [_entries]: dart.finalFieldType(core.Map$(core.int, src__gestures__arena.GestureArenaEntry)),
    [_trackedPointers]: dart.finalFieldType(core.Set$(core.int)),
    [_team]: dart.fieldType(src__gestures__team.GestureArenaTeam)
  }));
  src__gestures__scale.ScaleGestureRecognizer = class ScaleGestureRecognizer extends src__gestures__recognizer.OneSequenceGestureRecognizer {
    get onStart() {
      return this[onStart];
    }
    set onStart(value) {
      this[onStart] = value;
    }
    get onUpdate() {
      return this[onUpdate];
    }
    set onUpdate(value) {
      this[onUpdate] = value;
    }
    get onEnd() {
      return this[onEnd];
    }
    set onEnd(value) {
      this[onEnd] = value;
    }
    get [_scaleFactor]() {
      return dart.notNull(this[_initialSpan]) > 0.0 ? dart.notNull(this[_currentSpan]) / dart.notNull(this[_initialSpan]) : 1.0;
    }
    get [_horizontalScaleFactor]() {
      return dart.notNull(this[_initialHorizontalSpan]) > 0.0 ? dart.notNull(this[_currentHorizontalSpan]) / dart.notNull(this[_initialHorizontalSpan]) : 1.0;
    }
    get [_verticalScaleFactor]() {
      return dart.notNull(this[_initialVerticalSpan]) > 0.0 ? dart.notNull(this[_currentVerticalSpan]) / dart.notNull(this[_initialVerticalSpan]) : 1.0;
    }
    [_computeRotationFactor]() {
      if (this[_initialLine] == null || this[_currentLine] == null) {
        return 0.0;
      }
      let fx = this[_initialLine].pointerStartLocation.dx;
      let fy = this[_initialLine].pointerStartLocation.dy;
      let sx = this[_initialLine].pointerEndLocation.dx;
      let sy = this[_initialLine].pointerEndLocation.dy;
      let nfx = this[_currentLine].pointerStartLocation.dx;
      let nfy = this[_currentLine].pointerStartLocation.dy;
      let nsx = this[_currentLine].pointerEndLocation.dx;
      let nsy = this[_currentLine].pointerEndLocation.dy;
      let angle1 = math.atan2(dart.notNull(fy) - dart.notNull(sy), dart.notNull(fx) - dart.notNull(sx));
      let angle2 = math.atan2(dart.notNull(nfy) - dart.notNull(nsy), dart.notNull(nfx) - dart.notNull(nsx));
      return angle2 - angle1;
    }
    addAllowedPointer(event) {
      this.startTrackingPointer(event.pointer);
      this[_velocityTrackers][$_set](event.pointer, new src__gestures__velocity_tracker.VelocityTracker.new());
      if (dart.equals(this[_state], src__gestures__scale._ScaleState.ready)) {
        this[_state] = src__gestures__scale._ScaleState.possible;
        this[_initialSpan] = 0.0;
        this[_currentSpan] = 0.0;
        this[_initialHorizontalSpan] = 0.0;
        this[_currentHorizontalSpan] = 0.0;
        this[_initialVerticalSpan] = 0.0;
        this[_currentVerticalSpan] = 0.0;
        this[_pointerLocations] = new (IdentityMapOfint$Offset()).new();
        this[_pointerQueue] = JSArrayOfint().of([]);
      }
    }
    handleEvent(event) {
      if (!!dart.equals(this[_state], src__gestures__scale._ScaleState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 266, 12, "_state != _ScaleState.ready");
      let didChangeConfiguration = false;
      let shouldStartIfAccepted = false;
      if (src__gestures__events.PointerMoveEvent.is(event)) {
        let tracker = this[_velocityTrackers][$_get](event.pointer);
        if (!(tracker != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 271, 14, "tracker != null");
        if (!dart.test(event.synthesized)) tracker.addPosition(event.timeStamp, event.position);
        this[_pointerLocations][$_set](event.pointer, event.position);
        shouldStartIfAccepted = true;
      } else if (src__gestures__events.PointerDownEvent.is(event)) {
        this[_pointerLocations][$_set](event.pointer, event.position);
        this[_pointerQueue][$add](event.pointer);
        didChangeConfiguration = true;
        shouldStartIfAccepted = true;
      } else if (src__gestures__events.PointerUpEvent.is(event) || src__gestures__events.PointerCancelEvent.is(event)) {
        this[_pointerLocations][$remove](event.pointer);
        this[_pointerQueue][$remove](event.pointer);
        didChangeConfiguration = true;
      }
      this[_updateLines]();
      this[_update]();
      if (!didChangeConfiguration || dart.test(this[_reconfigure](event.pointer))) this[_advanceStateMachine](shouldStartIfAccepted);
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    [_update]() {
      let count = this[_pointerLocations][$keys][$length];
      let focalPoint = ui$.Offset.zero;
      for (let pointer of this[_pointerLocations][$keys])
        focalPoint = focalPoint['+'](this[_pointerLocations][$_get](pointer));
      this[_currentFocalPoint] = dart.notNull(count) > 0 ? focalPoint['/'](count[$toDouble]()) : ui$.Offset.zero;
      let totalDeviation = 0.0;
      let totalHorizontalDeviation = 0.0;
      let totalVerticalDeviation = 0.0;
      for (let pointer of this[_pointerLocations][$keys]) {
        totalDeviation = totalDeviation + dart.notNull(this[_currentFocalPoint]['-'](this[_pointerLocations][$_get](pointer)).distance);
        totalHorizontalDeviation = totalHorizontalDeviation + (dart.notNull(this[_currentFocalPoint].dx) - dart.notNull(this[_pointerLocations][$_get](pointer).dx))[$abs]();
        totalVerticalDeviation = totalVerticalDeviation + (dart.notNull(this[_currentFocalPoint].dy) - dart.notNull(this[_pointerLocations][$_get](pointer).dy))[$abs]();
      }
      this[_currentSpan] = dart.notNull(count) > 0 ? totalDeviation / dart.notNull(count) : 0.0;
      this[_currentHorizontalSpan] = dart.notNull(count) > 0 ? totalHorizontalDeviation / dart.notNull(count) : 0.0;
      this[_currentVerticalSpan] = dart.notNull(count) > 0 ? totalVerticalDeviation / dart.notNull(count) : 0.0;
    }
    [_updateLines]() {
      let count = this[_pointerLocations][$keys][$length];
      if (!(dart.notNull(this[_pointerQueue][$length]) >= dart.notNull(count))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 328, 12, "_pointerQueue.length >= count");
      if (dart.notNull(count) < 2) {
        this[_initialLine] = this[_currentLine];
      } else if (this[_initialLine] != null && this[_initialLine].pointerStartId == this[_pointerQueue][$_get](0) && this[_initialLine].pointerEndId == this[_pointerQueue][$_get](1)) {
        this[_currentLine] = new src__gestures__scale._LineBetweenPointers.new({pointerStartId: this[_pointerQueue][$_get](0), pointerStartLocation: this[_pointerLocations][$_get](this[_pointerQueue][$_get](0)), pointerEndId: this[_pointerQueue][$_get](1), pointerEndLocation: this[_pointerLocations][$_get](this[_pointerQueue][$_get](1))});
      } else {
        this[_initialLine] = new src__gestures__scale._LineBetweenPointers.new({pointerStartId: this[_pointerQueue][$_get](0), pointerStartLocation: this[_pointerLocations][$_get](this[_pointerQueue][$_get](0)), pointerEndId: this[_pointerQueue][$_get](1), pointerEndLocation: this[_pointerLocations][$_get](this[_pointerQueue][$_get](1))});
        this[_currentLine] = null;
      }
    }
    [_reconfigure](pointer) {
      this[_initialFocalPoint] = this[_currentFocalPoint];
      this[_initialSpan] = this[_currentSpan];
      this[_initialLine] = this[_currentLine];
      this[_initialHorizontalSpan] = this[_currentHorizontalSpan];
      this[_initialVerticalSpan] = this[_currentVerticalSpan];
      if (dart.equals(this[_state], src__gestures__scale._ScaleState.started)) {
        if (this.onEnd != null) {
          let tracker = this[_velocityTrackers][$_get](pointer);
          if (!(tracker != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 364, 16, "tracker != null");
          let velocity = tracker.getVelocity();
          if (dart.test(src__gestures__scale._isFlingGesture(velocity))) {
            let pixelsPerSecond = velocity.pixelsPerSecond;
            if (dart.notNull(pixelsPerSecond.distanceSquared) > dart.notNull(src__gestures__constants.kMaxFlingVelocity) * dart.notNull(src__gestures__constants.kMaxFlingVelocity)) velocity = new src__gestures__velocity_tracker.Velocity.new({pixelsPerSecond: pixelsPerSecond['/'](pixelsPerSecond.distance)['*'](src__gestures__constants.kMaxFlingVelocity)});
            this.invokeCallback(dart.void, "onEnd", dart.fn(() => this.onEnd(new src__gestures__scale.ScaleEndDetails.new({velocity: velocity})), VoidTovoid()));
          } else {
            this.invokeCallback(dart.void, "onEnd", dart.fn(() => this.onEnd(new src__gestures__scale.ScaleEndDetails.new({velocity: src__gestures__velocity_tracker.Velocity.zero})), VoidTovoid()));
          }
        }
        this[_state] = src__gestures__scale._ScaleState.accepted;
        return false;
      }
      return true;
    }
    [_advanceStateMachine](shouldStartIfAccepted) {
      if (dart.equals(this[_state], src__gestures__scale._ScaleState.ready)) this[_state] = src__gestures__scale._ScaleState.possible;
      if (dart.equals(this[_state], src__gestures__scale._ScaleState.possible)) {
        let spanDelta = (dart.notNull(this[_currentSpan]) - dart.notNull(this[_initialSpan]))[$abs]();
        let focalPointDelta = this[_currentFocalPoint]['-'](this[_initialFocalPoint]).distance;
        if (spanDelta > dart.notNull(src__gestures__constants.kScaleSlop) || dart.notNull(focalPointDelta) > dart.notNull(src__gestures__constants.kPanSlop)) this.resolve(src__gestures__arena.GestureDisposition.accepted);
      } else if (dart.notNull(this[_state].index) >= dart.notNull(src__gestures__scale._ScaleState.accepted.index)) {
        this.resolve(src__gestures__arena.GestureDisposition.accepted);
      }
      if (dart.equals(this[_state], src__gestures__scale._ScaleState.accepted) && dart.test(shouldStartIfAccepted)) {
        this[_state] = src__gestures__scale._ScaleState.started;
        this[_dispatchOnStartCallbackIfNeeded]();
      }
      if (dart.equals(this[_state], src__gestures__scale._ScaleState.started) && this.onUpdate != null) this.invokeCallback(dart.void, "onUpdate", dart.fn(() => {
        this.onUpdate(new src__gestures__scale.ScaleUpdateDetails.new({scale: this[_scaleFactor], horizontalScale: this[_horizontalScaleFactor], verticalScale: this[_verticalScaleFactor], focalPoint: this[_currentFocalPoint], rotation: this[_computeRotationFactor]()}));
      }, VoidToNull()));
    }
    [_dispatchOnStartCallbackIfNeeded]() {
      if (!dart.equals(this[_state], src__gestures__scale._ScaleState.started)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 418, 12, "_state == _ScaleState.started");
      if (this.onStart != null) this.invokeCallback(dart.void, "onStart", dart.fn(() => this.onStart(new src__gestures__scale.ScaleStartDetails.new({focalPoint: this[_currentFocalPoint]})), VoidTovoid()));
    }
    acceptGesture(pointer) {
      if (dart.equals(this[_state], src__gestures__scale._ScaleState.possible)) {
        this[_state] = src__gestures__scale._ScaleState.started;
        this[_dispatchOnStartCallbackIfNeeded]();
      }
    }
    rejectGesture(pointer) {
      this.stopTrackingPointer(pointer);
    }
    didStopTrackingLastPointer(pointer) {
      switch (this[_state]) {
        case src__gestures__scale._ScaleState.possible:
        {
          this.resolve(src__gestures__arena.GestureDisposition.rejected);
          break;
        }
        case src__gestures__scale._ScaleState.ready:
        {
          if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 444, 16, "false");
          break;
        }
        case src__gestures__scale._ScaleState.accepted:
        {
          break;
        }
        case src__gestures__scale._ScaleState.started:
        {
          if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 449, 16, "false");
          break;
        }
      }
      this[_state] = src__gestures__scale._ScaleState.ready;
    }
    dispose() {
      this[_velocityTrackers][$clear]();
      super.dispose();
    }
    get debugDescription() {
      return "scale";
    }
  };
  (src__gestures__scale.ScaleGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onStart] = null;
    this[onUpdate] = null;
    this[onEnd] = null;
    this[_state] = src__gestures__scale._ScaleState.ready;
    this[_initialFocalPoint] = null;
    this[_currentFocalPoint] = null;
    this[_initialSpan] = null;
    this[_currentSpan] = null;
    this[_initialHorizontalSpan] = null;
    this[_currentHorizontalSpan] = null;
    this[_initialVerticalSpan] = null;
    this[_currentVerticalSpan] = null;
    this[_initialLine] = null;
    this[_currentLine] = null;
    this[_pointerLocations] = null;
    this[_pointerQueue] = null;
    this[_velocityTrackers] = new (IdentityMapOfint$VelocityTracker()).new();
    src__gestures__scale.ScaleGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = src__gestures__scale.ScaleGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__scale.ScaleGestureRecognizer);
  const onStart = Symbol("ScaleGestureRecognizer.onStart");
  const onUpdate = Symbol("ScaleGestureRecognizer.onUpdate");
  const onEnd = Symbol("ScaleGestureRecognizer.onEnd");
  dart.setMethodSignature(src__gestures__scale.ScaleGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__scale.ScaleGestureRecognizer.__proto__),
    [_computeRotationFactor]: dart.fnType(core.double, []),
    addAllowedPointer: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    handleEvent: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    [_update]: dart.fnType(dart.void, []),
    [_updateLines]: dart.fnType(dart.void, []),
    [_reconfigure]: dart.fnType(core.bool, [core.int]),
    [_advanceStateMachine]: dart.fnType(dart.void, [core.bool]),
    [_dispatchOnStartCallbackIfNeeded]: dart.fnType(dart.void, []),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(src__gestures__scale.ScaleGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__scale.ScaleGestureRecognizer.__proto__),
    [_scaleFactor]: core.double,
    [_horizontalScaleFactor]: core.double,
    [_verticalScaleFactor]: core.double,
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__scale.ScaleGestureRecognizer, "package:flutter_web/src/gestures/scale.dart");
  dart.setFieldSignature(src__gestures__scale.ScaleGestureRecognizer, () => ({
    __proto__: dart.getFields(src__gestures__scale.ScaleGestureRecognizer.__proto__),
    onStart: dart.fieldType(dart.fnType(dart.void, [src__gestures__scale.ScaleStartDetails])),
    onUpdate: dart.fieldType(dart.fnType(dart.void, [src__gestures__scale.ScaleUpdateDetails])),
    onEnd: dart.fieldType(dart.fnType(dart.void, [src__gestures__scale.ScaleEndDetails])),
    [_state]: dart.fieldType(src__gestures__scale._ScaleState),
    [_initialFocalPoint]: dart.fieldType(ui$.Offset),
    [_currentFocalPoint]: dart.fieldType(ui$.Offset),
    [_initialSpan]: dart.fieldType(core.double),
    [_currentSpan]: dart.fieldType(core.double),
    [_initialHorizontalSpan]: dart.fieldType(core.double),
    [_currentHorizontalSpan]: dart.fieldType(core.double),
    [_initialVerticalSpan]: dart.fieldType(core.double),
    [_currentVerticalSpan]: dart.fieldType(core.double),
    [_initialLine]: dart.fieldType(src__gestures__scale._LineBetweenPointers),
    [_currentLine]: dart.fieldType(src__gestures__scale._LineBetweenPointers),
    [_pointerLocations]: dart.fieldType(core.Map$(core.int, ui$.Offset)),
    [_pointerQueue]: dart.fieldType(core.List$(core.int)),
    [_velocityTrackers]: dart.finalFieldType(core.Map$(core.int, src__gestures__velocity_tracker.VelocityTracker))
  }));
  src__gestures__scale._isFlingGesture = function(velocity) {
    if (!(velocity != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 142, 10, "velocity != null");
    let speedSquared = velocity.pixelsPerSecond.distanceSquared;
    return dart.notNull(speedSquared) > dart.notNull(src__gestures__constants.kMinFlingVelocity) * dart.notNull(src__gestures__constants.kMinFlingVelocity);
  };
  src__gestures__velocity_tracker.Velocity = class Velocity extends core.Object {
    get pixelsPerSecond() {
      return this[pixelsPerSecond$];
    }
    set pixelsPerSecond(value) {
      super.pixelsPerSecond = value;
    }
    _negate() {
      return new src__gestures__velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond._negate()});
    }
    ['-'](other) {
      return new src__gestures__velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['-'](other.pixelsPerSecond)});
    }
    ['+'](other) {
      return new src__gestures__velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['+'](other.pixelsPerSecond)});
    }
    clampMagnitude(minValue, maxValue) {
      if (!(minValue != null && dart.notNull(minValue) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/velocity_tracker.dart", 53, 12, "minValue != null && minValue >= 0.0");
      if (!(maxValue != null && dart.notNull(maxValue) >= 0.0 && dart.notNull(maxValue) >= dart.notNull(minValue))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/velocity_tracker.dart", 54, 12, "maxValue != null && maxValue >= 0.0 && maxValue >= minValue");
      let valueSquared = this.pixelsPerSecond.distanceSquared;
      if (dart.notNull(valueSquared) > dart.notNull(maxValue) * dart.notNull(maxValue)) return new src__gestures__velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['/'](this.pixelsPerSecond.distance)['*'](maxValue)});
      if (dart.notNull(valueSquared) < dart.notNull(minValue) * dart.notNull(minValue)) return new src__gestures__velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['/'](this.pixelsPerSecond.distance)['*'](minValue)});
      return this;
    }
    _equals(other) {
      if (other == null) return false;
      if (!src__gestures__velocity_tracker.Velocity.is(other)) return false;
      let typedOther = src__gestures__velocity_tracker.Velocity._check(other);
      return dart.equals(this.pixelsPerSecond, typedOther.pixelsPerSecond);
    }
    get hashCode() {
      return dart.hashCode(this.pixelsPerSecond);
    }
    toString() {
      return "Velocity(" + this.pixelsPerSecond.dx[$toStringAsFixed](1) + ", " + this.pixelsPerSecond.dy[$toStringAsFixed](1) + ")";
    }
  };
  (src__gestures__velocity_tracker.Velocity.new = function(opts) {
    let pixelsPerSecond = opts && 'pixelsPerSecond' in opts ? opts.pixelsPerSecond : null;
    this[pixelsPerSecond$] = pixelsPerSecond;
    if (!(pixelsPerSecond != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/velocity_tracker.dart", 21, 15, "pixelsPerSecond != null");
    ;
  }).prototype = src__gestures__velocity_tracker.Velocity.prototype;
  dart.addTypeTests(src__gestures__velocity_tracker.Velocity);
  const pixelsPerSecond$ = Symbol("Velocity.pixelsPerSecond");
  dart.setMethodSignature(src__gestures__velocity_tracker.Velocity, () => ({
    __proto__: dart.getMethods(src__gestures__velocity_tracker.Velocity.__proto__),
    _negate: dart.fnType(src__gestures__velocity_tracker.Velocity, []),
    '-': dart.fnType(src__gestures__velocity_tracker.Velocity, [src__gestures__velocity_tracker.Velocity]),
    '+': dart.fnType(src__gestures__velocity_tracker.Velocity, [src__gestures__velocity_tracker.Velocity]),
    clampMagnitude: dart.fnType(src__gestures__velocity_tracker.Velocity, [core.double, core.double])
  }));
  dart.setLibraryUri(src__gestures__velocity_tracker.Velocity, "package:flutter_web/src/gestures/velocity_tracker.dart");
  dart.setFieldSignature(src__gestures__velocity_tracker.Velocity, () => ({
    __proto__: dart.getFields(src__gestures__velocity_tracker.Velocity.__proto__),
    pixelsPerSecond: dart.finalFieldType(ui$.Offset)
  }));
  dart.defineExtensionMethods(src__gestures__velocity_tracker.Velocity, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__gestures__velocity_tracker.Velocity, ['hashCode']);
  dart.defineLazy(src__gestures__velocity_tracker.Velocity, {
    /*src__gestures__velocity_tracker.Velocity.zero*/get zero() {
      return dart.const(new src__gestures__velocity_tracker.Velocity.new({pixelsPerSecond: ui$.Offset.zero}));
    }
  });
  src__gestures__velocity_tracker.VelocityEstimate = class VelocityEstimate extends core.Object {
    get pixelsPerSecond() {
      return this[pixelsPerSecond$0];
    }
    set pixelsPerSecond(value) {
      super.pixelsPerSecond = value;
    }
    get confidence() {
      return this[confidence$];
    }
    set confidence(value) {
      super.confidence = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    toString() {
      return "VelocityEstimate(" + this.pixelsPerSecond.dx[$toStringAsFixed](1) + ", " + this.pixelsPerSecond.dy[$toStringAsFixed](1) + "; offset: " + dart.str(this.offset) + ", duration: " + dart.str(this.duration) + ", confidence: " + this.confidence[$toStringAsFixed](1) + ")";
    }
  };
  (src__gestures__velocity_tracker.VelocityEstimate.new = function(opts) {
    let pixelsPerSecond = opts && 'pixelsPerSecond' in opts ? opts.pixelsPerSecond : null;
    let confidence = opts && 'confidence' in opts ? opts.confidence : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let offset = opts && 'offset' in opts ? opts.offset : null;
    this[pixelsPerSecond$0] = pixelsPerSecond;
    this[confidence$] = confidence;
    this[duration$] = duration;
    this[offset$] = offset;
    if (!(pixelsPerSecond != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/velocity_tracker.dart", 104, 16, "pixelsPerSecond != null");
    if (!(confidence != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/velocity_tracker.dart", 105, 16, "confidence != null");
    if (!(duration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/velocity_tracker.dart", 106, 16, "duration != null");
    if (!(offset != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/velocity_tracker.dart", 107, 16, "offset != null");
    ;
  }).prototype = src__gestures__velocity_tracker.VelocityEstimate.prototype;
  dart.addTypeTests(src__gestures__velocity_tracker.VelocityEstimate);
  const pixelsPerSecond$0 = Symbol("VelocityEstimate.pixelsPerSecond");
  const confidence$ = Symbol("VelocityEstimate.confidence");
  const duration$ = Symbol("VelocityEstimate.duration");
  const offset$ = Symbol("VelocityEstimate.offset");
  dart.setLibraryUri(src__gestures__velocity_tracker.VelocityEstimate, "package:flutter_web/src/gestures/velocity_tracker.dart");
  dart.setFieldSignature(src__gestures__velocity_tracker.VelocityEstimate, () => ({
    __proto__: dart.getFields(src__gestures__velocity_tracker.VelocityEstimate.__proto__),
    pixelsPerSecond: dart.finalFieldType(ui$.Offset),
    confidence: dart.finalFieldType(core.double),
    duration: dart.finalFieldType(core.Duration),
    offset: dart.finalFieldType(ui$.Offset)
  }));
  dart.defineExtensionMethods(src__gestures__velocity_tracker.VelocityEstimate, ['toString']);
  src__gestures__velocity_tracker._PointAtTime = class _PointAtTime extends core.Object {
    toString() {
      return "_PointAtTime(" + dart.str(this.point) + " at " + dart.str(this.time) + ")";
    }
  };
  (src__gestures__velocity_tracker._PointAtTime.new = function(point, time) {
    this.point = point;
    this.time = time;
    if (!(point != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/velocity_tracker.dart", 133, 16, "point != null");
    if (!(time != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/velocity_tracker.dart", 134, 16, "time != null");
    ;
  }).prototype = src__gestures__velocity_tracker._PointAtTime.prototype;
  dart.addTypeTests(src__gestures__velocity_tracker._PointAtTime);
  dart.setLibraryUri(src__gestures__velocity_tracker._PointAtTime, "package:flutter_web/src/gestures/velocity_tracker.dart");
  dart.setFieldSignature(src__gestures__velocity_tracker._PointAtTime, () => ({
    __proto__: dart.getFields(src__gestures__velocity_tracker._PointAtTime.__proto__),
    time: dart.finalFieldType(core.Duration),
    point: dart.finalFieldType(ui$.Offset)
  }));
  dart.defineExtensionMethods(src__gestures__velocity_tracker._PointAtTime, ['toString']);
  const _samples = dart.privateName(src__gestures__velocity_tracker, "_samples");
  const _index = dart.privateName(src__gestures__velocity_tracker, "_index");
  src__gestures__velocity_tracker.VelocityTracker = class VelocityTracker extends core.Object {
    addPosition(time, position) {
      this[_index] = dart.notNull(this[_index]) + 1;
      if (this[_index] == src__gestures__velocity_tracker.VelocityTracker._historySize) this[_index] = 0;
      this[_samples][$_set](this[_index], new src__gestures__velocity_tracker._PointAtTime.new(position, time));
    }
    getVelocityEstimate() {
      let x = JSArrayOfdouble().of([]);
      let y = JSArrayOfdouble().of([]);
      let w = JSArrayOfdouble().of([]);
      let time = JSArrayOfdouble().of([]);
      let sampleCount = 0;
      let index = this[_index];
      let newestSample = this[_samples][$_get](index);
      if (newestSample == null) return null;
      let previousSample = newestSample;
      let oldestSample = newestSample;
      do {
        let sample = this[_samples][$_get](index);
        if (sample == null) break;
        let age = newestSample.time['-'](sample.time).inMilliseconds[$toDouble]();
        let delta = sample.time['-'](previousSample.time).inMilliseconds[$abs]()[$toDouble]();
        previousSample = sample;
        if (age > dart.notNull(src__gestures__velocity_tracker.VelocityTracker._horizonMilliseconds) || delta > dart.notNull(src__gestures__velocity_tracker.VelocityTracker._assumePointerMoveStoppedMilliseconds)) break;
        oldestSample = sample;
        let position = sample.point;
        x[$add](position.dx);
        y[$add](position.dy);
        w[$add](1.0);
        time[$add](-age);
        index = dart.notNull(index === 0 ? src__gestures__velocity_tracker.VelocityTracker._historySize : index) - 1;
        sampleCount = sampleCount + 1;
      } while (sampleCount < dart.notNull(src__gestures__velocity_tracker.VelocityTracker._historySize));
      if (sampleCount >= dart.notNull(src__gestures__velocity_tracker.VelocityTracker._minSampleSize)) {
        let xSolver = new src__gestures__lsq_solver.LeastSquaresSolver.new(time, x, w);
        let xFit = xSolver.solve(2);
        if (xFit != null) {
          let ySolver = new src__gestures__lsq_solver.LeastSquaresSolver.new(time, y, w);
          let yFit = ySolver.solve(2);
          if (yFit != null) {
            return new src__gestures__velocity_tracker.VelocityEstimate.new({pixelsPerSecond: new ui$.Offset.new(dart.notNull(xFit.coefficients[$_get](1)) * 1000, dart.notNull(yFit.coefficients[$_get](1)) * 1000), confidence: dart.notNull(xFit.confidence) * dart.notNull(yFit.confidence), duration: newestSample.time['-'](oldestSample.time), offset: newestSample.point['-'](oldestSample.point)});
          }
        }
      }
      return new src__gestures__velocity_tracker.VelocityEstimate.new({pixelsPerSecond: ui$.Offset.zero, confidence: 1.0, duration: newestSample.time['-'](oldestSample.time), offset: newestSample.point['-'](oldestSample.point)});
    }
    getVelocity() {
      let estimate = this.getVelocityEstimate();
      if (estimate == null || dart.equals(estimate.pixelsPerSecond, ui$.Offset.zero)) return src__gestures__velocity_tracker.Velocity.zero;
      return new src__gestures__velocity_tracker.Velocity.new({pixelsPerSecond: estimate.pixelsPerSecond});
    }
  };
  (src__gestures__velocity_tracker.VelocityTracker.new = function() {
    this[_samples] = ListOf_PointAtTime().new(src__gestures__velocity_tracker.VelocityTracker._historySize);
    this[_index] = 0;
    ;
  }).prototype = src__gestures__velocity_tracker.VelocityTracker.prototype;
  dart.addTypeTests(src__gestures__velocity_tracker.VelocityTracker);
  dart.setMethodSignature(src__gestures__velocity_tracker.VelocityTracker, () => ({
    __proto__: dart.getMethods(src__gestures__velocity_tracker.VelocityTracker.__proto__),
    addPosition: dart.fnType(dart.void, [core.Duration, ui$.Offset]),
    getVelocityEstimate: dart.fnType(src__gestures__velocity_tracker.VelocityEstimate, []),
    getVelocity: dart.fnType(src__gestures__velocity_tracker.Velocity, [])
  }));
  dart.setLibraryUri(src__gestures__velocity_tracker.VelocityTracker, "package:flutter_web/src/gestures/velocity_tracker.dart");
  dart.setFieldSignature(src__gestures__velocity_tracker.VelocityTracker, () => ({
    __proto__: dart.getFields(src__gestures__velocity_tracker.VelocityTracker.__proto__),
    [_samples]: dart.finalFieldType(core.List$(src__gestures__velocity_tracker._PointAtTime)),
    [_index]: dart.fieldType(core.int)
  }));
  dart.defineLazy(src__gestures__velocity_tracker.VelocityTracker, {
    /*src__gestures__velocity_tracker.VelocityTracker._assumePointerMoveStoppedMilliseconds*/get _assumePointerMoveStoppedMilliseconds() {
      return 40;
    },
    /*src__gestures__velocity_tracker.VelocityTracker._historySize*/get _historySize() {
      return 20;
    },
    /*src__gestures__velocity_tracker.VelocityTracker._horizonMilliseconds*/get _horizonMilliseconds() {
      return 100;
    },
    /*src__gestures__velocity_tracker.VelocityTracker._minSampleSize*/get _minSampleSize() {
      return 3;
    }
  });
  const _offset = dart.privateName(src__gestures__lsq_solver, "_offset");
  const _length = dart.privateName(src__gestures__lsq_solver, "_length");
  const _elements = dart.privateName(src__gestures__lsq_solver, "_elements");
  src__gestures__lsq_solver._Vector = class _Vector extends core.Object {
    _get(i) {
      return this[_elements][$_get](dart.notNull(i) + dart.notNull(this[_offset]));
    }
    _set(i, value$) {
      let value = value$;
      this[_elements][$_set](dart.notNull(i) + dart.notNull(this[_offset]), value);
      return value$;
    }
    ['*'](a) {
      let result = 0.0;
      for (let i = 0; i < dart.notNull(this[_length]); i = i + 1)
        result = result + dart.notNull(this._get(i)) * dart.notNull(a._get(i));
      return result;
    }
    norm() {
      return math.sqrt(this['*'](this));
    }
  };
  (src__gestures__lsq_solver._Vector.new = function(size) {
    this[_offset] = 0;
    this[_length] = size;
    this[_elements] = _native_typed_data.NativeFloat64List.new(size);
    ;
  }).prototype = src__gestures__lsq_solver._Vector.prototype;
  (src__gestures__lsq_solver._Vector.fromVOL = function(values, offset, length) {
    this[_offset] = offset;
    this[_length] = length;
    this[_elements] = values;
    ;
  }).prototype = src__gestures__lsq_solver._Vector.prototype;
  dart.addTypeTests(src__gestures__lsq_solver._Vector);
  dart.setMethodSignature(src__gestures__lsq_solver._Vector, () => ({
    __proto__: dart.getMethods(src__gestures__lsq_solver._Vector.__proto__),
    _get: dart.fnType(core.double, [core.int]),
    _set: dart.fnType(dart.void, [core.int, core.double]),
    '*': dart.fnType(core.double, [src__gestures__lsq_solver._Vector]),
    norm: dart.fnType(core.double, [])
  }));
  dart.setLibraryUri(src__gestures__lsq_solver._Vector, "package:flutter_web/src/gestures/lsq_solver.dart");
  dart.setFieldSignature(src__gestures__lsq_solver._Vector, () => ({
    __proto__: dart.getFields(src__gestures__lsq_solver._Vector.__proto__),
    [_offset]: dart.finalFieldType(core.int),
    [_length]: dart.finalFieldType(core.int),
    [_elements]: dart.finalFieldType(core.List$(core.double))
  }));
  const _columns = dart.privateName(src__gestures__lsq_solver, "_columns");
  src__gestures__lsq_solver._Matrix = class _Matrix extends core.Object {
    get(row, col) {
      return this[_elements][$_get](dart.notNull(row) * dart.notNull(this[_columns]) + dart.notNull(col));
    }
    set(row, col, value) {
      this[_elements][$_set](dart.notNull(row) * dart.notNull(this[_columns]) + dart.notNull(col), value);
    }
    getRow(row) {
      return new src__gestures__lsq_solver._Vector.fromVOL(this[_elements], dart.notNull(row) * dart.notNull(this[_columns]), this[_columns]);
    }
  };
  (src__gestures__lsq_solver._Matrix.new = function(rows, cols) {
    this[_columns] = cols;
    this[_elements] = _native_typed_data.NativeFloat64List.new(dart.notNull(rows) * dart.notNull(cols));
    ;
  }).prototype = src__gestures__lsq_solver._Matrix.prototype;
  dart.addTypeTests(src__gestures__lsq_solver._Matrix);
  dart.setMethodSignature(src__gestures__lsq_solver._Matrix, () => ({
    __proto__: dart.getMethods(src__gestures__lsq_solver._Matrix.__proto__),
    get: dart.fnType(core.double, [core.int, core.int]),
    set: dart.fnType(dart.void, [core.int, core.int, core.double]),
    getRow: dart.fnType(src__gestures__lsq_solver._Vector, [core.int])
  }));
  dart.setLibraryUri(src__gestures__lsq_solver._Matrix, "package:flutter_web/src/gestures/lsq_solver.dart");
  dart.setFieldSignature(src__gestures__lsq_solver._Matrix, () => ({
    __proto__: dart.getFields(src__gestures__lsq_solver._Matrix.__proto__),
    [_columns]: dart.finalFieldType(core.int),
    [_elements]: dart.finalFieldType(core.List$(core.double))
  }));
  src__gestures__lsq_solver.PolynomialFit = class PolynomialFit extends core.Object {
    get coefficients() {
      return this[coefficients];
    }
    set coefficients(value) {
      super.coefficients = value;
    }
    get confidence() {
      return this[confidence];
    }
    set confidence(value) {
      this[confidence] = value;
    }
  };
  (src__gestures__lsq_solver.PolynomialFit.new = function(degree) {
    this[confidence] = null;
    this[coefficients] = _native_typed_data.NativeFloat64List.new(dart.notNull(degree) + 1);
    ;
  }).prototype = src__gestures__lsq_solver.PolynomialFit.prototype;
  dart.addTypeTests(src__gestures__lsq_solver.PolynomialFit);
  const coefficients = Symbol("PolynomialFit.coefficients");
  const confidence = Symbol("PolynomialFit.confidence");
  dart.setLibraryUri(src__gestures__lsq_solver.PolynomialFit, "package:flutter_web/src/gestures/lsq_solver.dart");
  dart.setFieldSignature(src__gestures__lsq_solver.PolynomialFit, () => ({
    __proto__: dart.getFields(src__gestures__lsq_solver.PolynomialFit.__proto__),
    coefficients: dart.finalFieldType(core.List$(core.double)),
    confidence: dart.fieldType(core.double)
  }));
  src__gestures__lsq_solver.LeastSquaresSolver = class LeastSquaresSolver extends core.Object {
    get x() {
      return this[x$];
    }
    set x(value) {
      super.x = value;
    }
    get y() {
      return this[y$];
    }
    set y(value) {
      super.y = value;
    }
    get w() {
      return this[w$];
    }
    set w(value) {
      super.w = value;
    }
    solve(degree) {
      let t3, t2, t3$, t2$;
      if (dart.notNull(degree) > dart.notNull(this.x[$length])) return null;
      let result = new src__gestures__lsq_solver.PolynomialFit.new(degree);
      let m = this.x[$length];
      let n = dart.notNull(degree) + 1;
      let a = new src__gestures__lsq_solver._Matrix.new(n, m);
      for (let h = 0; h < dart.notNull(m); h = h + 1) {
        a.set(0, h, this.w[$_get](h));
        for (let i = 1; i < n; i = i + 1)
          a.set(i, h, dart.notNull(a.get(i - 1, h)) * dart.notNull(this.x[$_get](h)));
      }
      let q = new src__gestures__lsq_solver._Matrix.new(n, m);
      let r = new src__gestures__lsq_solver._Matrix.new(n, n);
      for (let j = 0; j < n; j = j + 1) {
        for (let h = 0; h < dart.notNull(m); h = h + 1)
          q.set(j, h, a.get(j, h));
        for (let i = 0; i < j; i = i + 1) {
          let dot = q.getRow(j)['*'](q.getRow(i));
          for (let h = 0; h < dart.notNull(m); h = h + 1)
            q.set(j, h, dart.notNull(q.get(j, h)) - dart.notNull(dot) * dart.notNull(q.get(i, h)));
        }
        let norm = q.getRow(j).norm();
        if (dart.notNull(norm) < dart.notNull(src__foundation__constants.precisionErrorTolerance)) {
          return null;
        }
        let inverseNorm = 1.0 / dart.notNull(norm);
        for (let h = 0; h < dart.notNull(m); h = h + 1)
          q.set(j, h, dart.notNull(q.get(j, h)) * inverseNorm);
        for (let i = 0; i < n; i = i + 1)
          r.set(j, i, i < j ? 0.0 : q.getRow(j)['*'](a.getRow(i)));
      }
      let wy = new src__gestures__lsq_solver._Vector.new(m);
      for (let h = 0; h < dart.notNull(m); h = h + 1)
        wy._set(h, dart.notNull(this.y[$_get](h)) * dart.notNull(this.w[$_get](h)));
      for (let i = n - 1; i >= 0; i = i - 1) {
        result.coefficients[$_set](i, q.getRow(i)['*'](wy));
        for (let j = n - 1; j > i; j = j - 1) {
          t2 = result.coefficients;
          t3 = i;
          t2[$_set](t3, dart.notNull(t2[$_get](t3)) - dart.notNull(r.get(i, j)) * dart.notNull(result.coefficients[$_get](j)));
        }
        t2$ = result.coefficients;
        t3$ = i;
        t2$[$_set](t3$, dart.notNull(t2$[$_get](t3$)) / dart.notNull(r.get(i, i)));
      }
      let yMean = 0.0;
      for (let h = 0; h < dart.notNull(m); h = h + 1)
        yMean = yMean + dart.notNull(this.y[$_get](h));
      yMean = yMean / dart.notNull(m);
      let sumSquaredError = 0.0;
      let sumSquaredTotal = 0.0;
      for (let h = 0; h < dart.notNull(m); h = h + 1) {
        let term = 1.0;
        let err = dart.notNull(this.y[$_get](h)) - dart.notNull(result.coefficients[$_get](0));
        for (let i = 1; i < n; i = i + 1) {
          term = term * dart.notNull(this.x[$_get](h));
          err = err - term * dart.notNull(result.coefficients[$_get](i));
        }
        sumSquaredError = sumSquaredError + dart.notNull(this.w[$_get](h)) * dart.notNull(this.w[$_get](h)) * err * err;
        let v = dart.notNull(this.y[$_get](h)) - yMean;
        sumSquaredTotal = sumSquaredTotal + dart.notNull(this.w[$_get](h)) * dart.notNull(this.w[$_get](h)) * v * v;
      }
      result.confidence = sumSquaredTotal <= dart.notNull(src__foundation__constants.precisionErrorTolerance) ? 1.0 : 1.0 - sumSquaredError / sumSquaredTotal;
      return result;
    }
  };
  (src__gestures__lsq_solver.LeastSquaresSolver.new = function(x, y, w) {
    this[x$] = x;
    this[y$] = y;
    this[w$] = w;
    if (!(x[$length] == y[$length])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/lsq_solver.dart", 86, 16, "x.length == y.length");
    if (!(y[$length] == w[$length])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/lsq_solver.dart", 87, 16, "y.length == w.length");
    ;
  }).prototype = src__gestures__lsq_solver.LeastSquaresSolver.prototype;
  dart.addTypeTests(src__gestures__lsq_solver.LeastSquaresSolver);
  const x$ = Symbol("LeastSquaresSolver.x");
  const y$ = Symbol("LeastSquaresSolver.y");
  const w$ = Symbol("LeastSquaresSolver.w");
  dart.setMethodSignature(src__gestures__lsq_solver.LeastSquaresSolver, () => ({
    __proto__: dart.getMethods(src__gestures__lsq_solver.LeastSquaresSolver.__proto__),
    solve: dart.fnType(src__gestures__lsq_solver.PolynomialFit, [core.int])
  }));
  dart.setLibraryUri(src__gestures__lsq_solver.LeastSquaresSolver, "package:flutter_web/src/gestures/lsq_solver.dart");
  dart.setFieldSignature(src__gestures__lsq_solver.LeastSquaresSolver, () => ({
    __proto__: dart.getFields(src__gestures__lsq_solver.LeastSquaresSolver.__proto__),
    x: dart.finalFieldType(core.List$(core.double)),
    y: dart.finalFieldType(core.List$(core.double)),
    w: dart.finalFieldType(core.List$(core.double))
  }));
  const _name$1 = dart.privateName(src__gestures__recognizer, "_name");
  src__gestures__recognizer.DragStartBehavior = class DragStartBehavior extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (src__gestures__recognizer.DragStartBehavior.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = src__gestures__recognizer.DragStartBehavior.prototype;
  dart.addTypeTests(src__gestures__recognizer.DragStartBehavior);
  dart.setLibraryUri(src__gestures__recognizer.DragStartBehavior, "package:flutter_web/src/gestures/recognizer.dart");
  dart.setFieldSignature(src__gestures__recognizer.DragStartBehavior, () => ({
    __proto__: dart.getFields(src__gestures__recognizer.DragStartBehavior.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__gestures__recognizer.DragStartBehavior, ['toString']);
  src__gestures__recognizer.DragStartBehavior.down = dart.const(new src__gestures__recognizer.DragStartBehavior.new(0, "DragStartBehavior.down"));
  src__gestures__recognizer.DragStartBehavior.start = dart.const(new src__gestures__recognizer.DragStartBehavior.new(1, "DragStartBehavior.start"));
  src__gestures__recognizer.DragStartBehavior.values = dart.constList([src__gestures__recognizer.DragStartBehavior.down, src__gestures__recognizer.DragStartBehavior.start], src__gestures__recognizer.DragStartBehavior);
  src__gestures__recognizer.GestureRecognizerState = class GestureRecognizerState extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (src__gestures__recognizer.GestureRecognizerState.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = src__gestures__recognizer.GestureRecognizerState.prototype;
  dart.addTypeTests(src__gestures__recognizer.GestureRecognizerState);
  dart.setLibraryUri(src__gestures__recognizer.GestureRecognizerState, "package:flutter_web/src/gestures/recognizer.dart");
  dart.setFieldSignature(src__gestures__recognizer.GestureRecognizerState, () => ({
    __proto__: dart.getFields(src__gestures__recognizer.GestureRecognizerState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__gestures__recognizer.GestureRecognizerState, ['toString']);
  src__gestures__recognizer.GestureRecognizerState.ready = dart.const(new src__gestures__recognizer.GestureRecognizerState.new(0, "GestureRecognizerState.ready"));
  src__gestures__recognizer.GestureRecognizerState.possible = dart.const(new src__gestures__recognizer.GestureRecognizerState.new(1, "GestureRecognizerState.possible"));
  src__gestures__recognizer.GestureRecognizerState.defunct = dart.const(new src__gestures__recognizer.GestureRecognizerState.new(2, "GestureRecognizerState.defunct"));
  src__gestures__recognizer.GestureRecognizerState.values = dart.constList([src__gestures__recognizer.GestureRecognizerState.ready, src__gestures__recognizer.GestureRecognizerState.possible, src__gestures__recognizer.GestureRecognizerState.defunct], src__gestures__recognizer.GestureRecognizerState);
  const _gestureAccepted = dart.privateName(src__gestures__recognizer, "_gestureAccepted");
  const _timer = dart.privateName(src__gestures__recognizer, "_timer");
  const _getDistance = dart.privateName(src__gestures__recognizer, "_getDistance");
  const _stopTimer = dart.privateName(src__gestures__recognizer, "_stopTimer");
  src__gestures__recognizer.PrimaryPointerGestureRecognizer = class PrimaryPointerGestureRecognizer extends src__gestures__recognizer.OneSequenceGestureRecognizer {
    get deadline() {
      return this[deadline$];
    }
    set deadline(value) {
      super.deadline = value;
    }
    get preAcceptSlopTolerance() {
      return this[preAcceptSlopTolerance$];
    }
    set preAcceptSlopTolerance(value) {
      super.preAcceptSlopTolerance = value;
    }
    get postAcceptSlopTolerance() {
      return this[postAcceptSlopTolerance$];
    }
    set postAcceptSlopTolerance(value) {
      super.postAcceptSlopTolerance = value;
    }
    get state() {
      return this[state];
    }
    set state(value) {
      this[state] = value;
    }
    get primaryPointer() {
      return this[primaryPointer];
    }
    set primaryPointer(value) {
      this[primaryPointer] = value;
    }
    get initialPosition() {
      return this[initialPosition];
    }
    set initialPosition(value) {
      this[initialPosition] = value;
    }
    addAllowedPointer(event) {
      this.startTrackingPointer(event.pointer);
      if (dart.equals(this.state, src__gestures__recognizer.GestureRecognizerState.ready)) {
        this.state = src__gestures__recognizer.GestureRecognizerState.possible;
        this.primaryPointer = event.pointer;
        this.initialPosition = event.position;
        if (this.deadline != null) this[_timer] = async.Timer.new(this.deadline, dart.fn(() => this.didExceedDeadlineWithEvent(event), VoidTovoid()));
      }
    }
    handleEvent(event) {
      if (!!dart.equals(this.state, src__gestures__recognizer.GestureRecognizerState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 441, 12, "t(state != GestureRecognizerState.rea");
      if (dart.equals(this.state, src__gestures__recognizer.GestureRecognizerState.possible) && event.pointer == this.primaryPointer) {
        let isPreAcceptSlopPastTolerance = !dart.test(this[_gestureAccepted]) && this.preAcceptSlopTolerance != null && dart.notNull(this[_getDistance](event)) > dart.notNull(this.preAcceptSlopTolerance);
        let isPostAcceptSlopPastTolerance = dart.test(this[_gestureAccepted]) && this.postAcceptSlopTolerance != null && dart.notNull(this[_getDistance](event)) > dart.notNull(this.postAcceptSlopTolerance);
        if (src__gestures__events.PointerMoveEvent.is(event) && (isPreAcceptSlopPastTolerance || isPostAcceptSlopPastTolerance)) {
          this.resolve(src__gestures__arena.GestureDisposition.rejected);
          this.stopTrackingPointer(this.primaryPointer);
        } else {
          this.handlePrimaryPointer(event);
        }
      }
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    didExceedDeadline() {
      if (!(this.deadline == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 472, 12, "t(deadline == nu");
    }
    didExceedDeadlineWithEvent(event) {
      this.didExceedDeadline();
    }
    acceptGesture(pointer) {
      this[_gestureAccepted] = true;
    }
    rejectGesture(pointer) {
      if (pointer == this.primaryPointer && dart.equals(this.state, src__gestures__recognizer.GestureRecognizerState.possible)) {
        this[_stopTimer]();
        this.state = src__gestures__recognizer.GestureRecognizerState.defunct;
      }
    }
    didStopTrackingLastPointer(pointer) {
      if (!!dart.equals(this.state, src__gestures__recognizer.GestureRecognizerState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 500, 12, "t(state != GestureRecognizerState.rea");
      this[_stopTimer]();
      this.state = src__gestures__recognizer.GestureRecognizerState.ready;
    }
    dispose() {
      this[_stopTimer]();
      super.dispose();
    }
    [_stopTimer]() {
      if (this[_timer] != null) {
        this[_timer].cancel();
        this[_timer] = null;
      }
    }
    [_getDistance](event) {
      let offset = event.position['-'](this.initialPosition);
      return offset.distance;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfGestureRecognizerState()).new("state", this.state));
    }
  };
  (src__gestures__recognizer.PrimaryPointerGestureRecognizer.new = function(opts) {
    let deadline = opts && 'deadline' in opts ? opts.deadline : null;
    let preAcceptSlopTolerance = opts && 'preAcceptSlopTolerance' in opts ? opts.preAcceptSlopTolerance : src__gestures__constants.kTouchSlop;
    let postAcceptSlopTolerance = opts && 'postAcceptSlopTolerance' in opts ? opts.postAcceptSlopTolerance : src__gestures__constants.kTouchSlop;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[state] = src__gestures__recognizer.GestureRecognizerState.ready;
    this[primaryPointer] = null;
    this[initialPosition] = null;
    this[_gestureAccepted] = false;
    this[_timer] = null;
    this[deadline$] = deadline;
    this[preAcceptSlopTolerance$] = preAcceptSlopTolerance;
    this[postAcceptSlopTolerance$] = postAcceptSlopTolerance;
    if (!(preAcceptSlopTolerance == null || dart.notNull(preAcceptSlopTolerance) >= 0)) dart.assertFailed("The preAcceptSlopTolerance must be positive or null", "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 379, 11, "  preAcceptSlopTolerance == null || preAcceptSlopTolerance >=");
    if (!(postAcceptSlopTolerance == null || dart.notNull(postAcceptSlopTolerance) >= 0)) dart.assertFailed("The postAcceptSlopTolerance must be positive or null", "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 383, 11, "  postAcceptSlopTolerance == null || postAcceptSlopTolerance >=");
    src__gestures__recognizer.PrimaryPointerGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = src__gestures__recognizer.PrimaryPointerGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__recognizer.PrimaryPointerGestureRecognizer);
  const deadline$ = Symbol("PrimaryPointerGestureRecognizer.deadline");
  const preAcceptSlopTolerance$ = Symbol("PrimaryPointerGestureRecognizer.preAcceptSlopTolerance");
  const postAcceptSlopTolerance$ = Symbol("PrimaryPointerGestureRecognizer.postAcceptSlopTolerance");
  const state = Symbol("PrimaryPointerGestureRecognizer.state");
  const primaryPointer = Symbol("PrimaryPointerGestureRecognizer.primaryPointer");
  const initialPosition = Symbol("PrimaryPointerGestureRecognizer.initialPosition");
  dart.setMethodSignature(src__gestures__recognizer.PrimaryPointerGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__recognizer.PrimaryPointerGestureRecognizer.__proto__),
    handleEvent: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    didExceedDeadline: dart.fnType(dart.void, []),
    didExceedDeadlineWithEvent: dart.fnType(dart.void, [src__gestures__events.PointerDownEvent]),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int]),
    [_stopTimer]: dart.fnType(dart.void, []),
    [_getDistance]: dart.fnType(core.double, [src__gestures__events.PointerEvent])
  }));
  dart.setLibraryUri(src__gestures__recognizer.PrimaryPointerGestureRecognizer, "package:flutter_web/src/gestures/recognizer.dart");
  dart.setFieldSignature(src__gestures__recognizer.PrimaryPointerGestureRecognizer, () => ({
    __proto__: dart.getFields(src__gestures__recognizer.PrimaryPointerGestureRecognizer.__proto__),
    deadline: dart.finalFieldType(core.Duration),
    preAcceptSlopTolerance: dart.finalFieldType(core.double),
    postAcceptSlopTolerance: dart.finalFieldType(core.double),
    state: dart.fieldType(src__gestures__recognizer.GestureRecognizerState),
    primaryPointer: dart.fieldType(core.int),
    initialPosition: dart.fieldType(ui$.Offset),
    [_gestureAccepted]: dart.fieldType(core.bool),
    [_timer]: dart.fieldType(async.Timer)
  }));
  const _combiner$ = dart.privateName(src__gestures__team, "_combiner");
  const _member$0 = dart.privateName(src__gestures__team, "_member");
  const _resolve$ = dart.privateName(src__gestures__team, "_resolve");
  let const$;
  const _arena = dart.privateName(src__gestures__team, "_arena");
  let const$0;
  const _pointer$0 = dart.privateName(src__gestures__team, "_pointer");
  let const$1;
  src__gestures__team._CombiningGestureArenaEntry = class _CombiningGestureArenaEntry extends core.Object {
    resolve(disposition) {
      this[_combiner$][_resolve$](this[_member$0], disposition);
    }
    get [_member$]() {
      return src__gestures__arena.GestureArenaMember._check(this[$noSuchMethod](new core._Invocation.getter(const$ || (const$ = dart.const(new _js_helper.PrivateSymbol.new('_member', _member$0))))));
    }
    get [_arena$]() {
      return src__gestures__arena.GestureArenaManager._check(this[$noSuchMethod](new core._Invocation.getter(const$0 || (const$0 = dart.const(new _js_helper.PrivateSymbol.new('_arena', _arena))))));
    }
    get [_pointer$]() {
      return core.int._check(this[$noSuchMethod](new core._Invocation.getter(const$1 || (const$1 = dart.const(new _js_helper.PrivateSymbol.new('_pointer', _pointer$0))))));
    }
  };
  (src__gestures__team._CombiningGestureArenaEntry.new = function(_combiner, _member) {
    this[_combiner$] = _combiner;
    this[_member$0] = _member;
    ;
  }).prototype = src__gestures__team._CombiningGestureArenaEntry.prototype;
  dart.addTypeTests(src__gestures__team._CombiningGestureArenaEntry);
  src__gestures__team._CombiningGestureArenaEntry[dart.implements] = () => [src__gestures__arena.GestureArenaEntry];
  dart.setMethodSignature(src__gestures__team._CombiningGestureArenaEntry, () => ({
    __proto__: dart.getMethods(src__gestures__team._CombiningGestureArenaEntry.__proto__),
    resolve: dart.fnType(dart.void, [src__gestures__arena.GestureDisposition])
  }));
  dart.setGetterSignature(src__gestures__team._CombiningGestureArenaEntry, () => ({
    __proto__: dart.getGetters(src__gestures__team._CombiningGestureArenaEntry.__proto__),
    [_member$]: src__gestures__arena.GestureArenaMember,
    [_arena$]: src__gestures__arena.GestureArenaManager,
    [_pointer$]: core.int
  }));
  dart.setLibraryUri(src__gestures__team._CombiningGestureArenaEntry, "package:flutter_web/src/gestures/team.dart");
  dart.setFieldSignature(src__gestures__team._CombiningGestureArenaEntry, () => ({
    __proto__: dart.getFields(src__gestures__team._CombiningGestureArenaEntry.__proto__),
    [_combiner$]: dart.finalFieldType(src__gestures__team._CombiningGestureArenaMember),
    [_member$0]: dart.finalFieldType(src__gestures__arena.GestureArenaMember)
  }));
  const _members = dart.privateName(src__gestures__team, "_members");
  const _resolved = dart.privateName(src__gestures__team, "_resolved");
  const _winner = dart.privateName(src__gestures__team, "_winner");
  const _entry = dart.privateName(src__gestures__team, "_entry");
  const _owner$ = dart.privateName(src__gestures__team, "_owner");
  const _close = dart.privateName(src__gestures__team, "_close");
  const _combiners = dart.privateName(src__gestures__team, "_combiners");
  const _add = dart.privateName(src__gestures__team, "_add");
  src__gestures__team._CombiningGestureArenaMember = class _CombiningGestureArenaMember extends src__gestures__arena.GestureArenaMember {
    acceptGesture(pointer) {
      let t2;
      if (!(this[_pointer$0] == pointer)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/team.dart", 33, 12, "_pointer == pointer");
      if (!(this[_winner] != null || dart.test(this[_members][$isNotEmpty]))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/team.dart", 34, 12, "_winner != null || _members.isNotEmpty");
      this[_close]();
      this[_winner] == null ? this[_winner] = (t2 = this[_owner$].captain, t2 == null ? this[_members][$_get](0) : t2) : null;
      for (let member of this[_members]) {
        if (!dart.equals(member, this[_winner])) member.rejectGesture(pointer);
      }
      this[_winner].acceptGesture(pointer);
    }
    rejectGesture(pointer) {
      if (!(this[_pointer$0] == pointer)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/team.dart", 45, 12, "_pointer == pointer");
      this[_close]();
      for (let member of this[_members])
        member.rejectGesture(pointer);
    }
    [_close]() {
      if (!!dart.test(this[_resolved])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/team.dart", 51, 12, "!_resolved");
      this[_resolved] = true;
      let combiner = this[_owner$][_combiners][$remove](this[_pointer$0]);
      if (!dart.equals(combiner, this)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/team.dart", 55, 12, "combiner == this");
    }
    [_add](pointer, member) {
      if (!!dart.test(this[_resolved])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/team.dart", 59, 12, "!_resolved");
      if (!(this[_pointer$0] == pointer)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/team.dart", 60, 12, "_pointer == pointer");
      this[_members][$add](member);
      this[_entry] == null ? this[_entry] = src__gestures__binding.GestureBinding.instance.gestureArena.add(pointer, this) : null;
      return new src__gestures__team._CombiningGestureArenaEntry.new(this, member);
    }
    [_resolve$](member, disposition) {
      let t2;
      if (dart.test(this[_resolved])) return;
      if (dart.equals(disposition, src__gestures__arena.GestureDisposition.rejected)) {
        this[_members][$remove](member);
        member.rejectGesture(this[_pointer$0]);
        if (dart.test(this[_members][$isEmpty])) this[_entry].resolve(disposition);
      } else {
        if (!dart.equals(disposition, src__gestures__arena.GestureDisposition.accepted)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/team.dart", 73, 14, "disposition == GestureDisposition.accepted");
        this[_winner] == null ? this[_winner] = (t2 = this[_owner$].captain, t2 == null ? member : t2) : null;
        this[_entry].resolve(disposition);
      }
    }
  };
  (src__gestures__team._CombiningGestureArenaMember.new = function(_owner, _pointer) {
    this[_members] = JSArrayOfGestureArenaMember().of([]);
    this[_resolved] = false;
    this[_winner] = null;
    this[_entry] = null;
    this[_owner$] = _owner;
    this[_pointer$0] = _pointer;
    ;
  }).prototype = src__gestures__team._CombiningGestureArenaMember.prototype;
  dart.addTypeTests(src__gestures__team._CombiningGestureArenaMember);
  dart.setMethodSignature(src__gestures__team._CombiningGestureArenaMember, () => ({
    __proto__: dart.getMethods(src__gestures__team._CombiningGestureArenaMember.__proto__),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    [_close]: dart.fnType(dart.void, []),
    [_add]: dart.fnType(src__gestures__arena.GestureArenaEntry, [core.int, src__gestures__arena.GestureArenaMember]),
    [_resolve$]: dart.fnType(dart.void, [src__gestures__arena.GestureArenaMember, src__gestures__arena.GestureDisposition])
  }));
  dart.setLibraryUri(src__gestures__team._CombiningGestureArenaMember, "package:flutter_web/src/gestures/team.dart");
  dart.setFieldSignature(src__gestures__team._CombiningGestureArenaMember, () => ({
    __proto__: dart.getFields(src__gestures__team._CombiningGestureArenaMember.__proto__),
    [_owner$]: dart.finalFieldType(src__gestures__team.GestureArenaTeam),
    [_members]: dart.finalFieldType(core.List$(src__gestures__arena.GestureArenaMember)),
    [_pointer$0]: dart.finalFieldType(core.int),
    [_resolved]: dart.fieldType(core.bool),
    [_winner]: dart.fieldType(src__gestures__arena.GestureArenaMember),
    [_entry]: dart.fieldType(src__gestures__arena.GestureArenaEntry)
  }));
  src__gestures__team.GestureArenaTeam = class GestureArenaTeam extends core.Object {
    get captain() {
      return this[captain];
    }
    set captain(value) {
      this[captain] = value;
    }
    add(pointer, member) {
      let combiner = this[_combiners][$putIfAbsent](pointer, dart.fn(() => new src__gestures__team._CombiningGestureArenaMember.new(this, pointer), VoidTo_CombiningGestureArenaMember()));
      return combiner[_add](pointer, member);
    }
  };
  (src__gestures__team.GestureArenaTeam.new = function() {
    this[_combiners] = new (IdentityMapOfint$_CombiningGestureArenaMember()).new();
    this[captain] = null;
    ;
  }).prototype = src__gestures__team.GestureArenaTeam.prototype;
  dart.addTypeTests(src__gestures__team.GestureArenaTeam);
  const captain = Symbol("GestureArenaTeam.captain");
  dart.setMethodSignature(src__gestures__team.GestureArenaTeam, () => ({
    __proto__: dart.getMethods(src__gestures__team.GestureArenaTeam.__proto__),
    add: dart.fnType(src__gestures__arena.GestureArenaEntry, [core.int, src__gestures__arena.GestureArenaMember])
  }));
  dart.setLibraryUri(src__gestures__team.GestureArenaTeam, "package:flutter_web/src/gestures/team.dart");
  dart.setFieldSignature(src__gestures__team.GestureArenaTeam, () => ({
    __proto__: dart.getFields(src__gestures__team.GestureArenaTeam.__proto__),
    [_combiners]: dart.finalFieldType(core.Map$(core.int, src__gestures__team._CombiningGestureArenaMember)),
    captain: dart.fieldType(src__gestures__arena.GestureArenaMember)
  }));
  const _pendingPointerEvents = dart.privateName(src__gestures__binding, "_pendingPointerEvents");
  const _hitTests = dart.privateName(src__gestures__binding, "_hitTests");
  const _handlePointerDataPacket = dart.privateName(src__gestures__binding, "_handlePointerDataPacket");
  const _flushPointerEventQueue = dart.privateName(src__gestures__binding, "_flushPointerEventQueue");
  const _handlePointerEvent = dart.privateName(src__gestures__binding, "_handlePointerEvent");
  src__gestures__binding.GestureBinding = class GestureBinding extends src__foundation__binding.BindingBase {
    static get instance() {
      return src__gestures__binding.GestureBinding._instance;
    }
  };
  src__gestures__binding.GestureBinding[dart.mixinOn] = BindingBase => class GestureBinding extends BindingBase {
    get pointerRouter() {
      return this[pointerRouter];
    }
    set pointerRouter(value) {
      super.pointerRouter = value;
    }
    get gestureArena() {
      return this[gestureArena];
    }
    set gestureArena(value) {
      super.gestureArena = value;
    }
    get pointerSignalResolver() {
      return this[pointerSignalResolver];
    }
    set pointerSignalResolver(value) {
      super.pointerSignalResolver = value;
    }
    initInstances() {
      super.initInstances();
      src__gestures__binding.GestureBinding._instance = this;
      this.window.onPointerDataPacket = dart.bind(this, _handlePointerDataPacket);
    }
    unlocked() {
      super.unlocked();
      this[_flushPointerEventQueue]();
    }
    [_handlePointerDataPacket](packet) {
      this[_pendingPointerEvents].addAll(src__gestures__converter.PointerEventConverter.expand(packet.data, this.window.devicePixelRatio));
      if (!dart.test(this.locked)) this[_flushPointerEventQueue]();
    }
    cancelPointer(pointer) {
      if (dart.test(this[_pendingPointerEvents][$isEmpty]) && !dart.test(this.locked)) async.scheduleMicrotask(dart.bind(this, _flushPointerEventQueue));
      this[_pendingPointerEvents].addFirst(new src__gestures__events.PointerCancelEvent.new({pointer: pointer}));
    }
    [_flushPointerEventQueue]() {
      if (!!dart.test(this.locked)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/binding.dart", 102, 12, "!locked");
      while (dart.test(this[_pendingPointerEvents][$isNotEmpty]))
        this[_handlePointerEvent](this[_pendingPointerEvents].removeFirst());
    }
    [_handlePointerEvent](event) {
      if (!!dart.test(this.locked)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/binding.dart", 125, 12, "!locked");
      let hitTestResult = null;
      if (src__gestures__events.PointerDownEvent.is(event) || src__gestures__events.PointerSignalEvent.is(event)) {
        if (!!dart.test(this[_hitTests][$containsKey](event.pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/binding.dart", 128, 14, "!_hitTests.containsKey(event.pointer)");
        hitTestResult = new src__gestures__hit_test.HitTestResult.new();
        this.hitTest(hitTestResult, event.position);
        if (src__gestures__events.PointerDownEvent.is(event)) {
          this[_hitTests][$_set](event.pointer, hitTestResult);
        }
        if (!dart.test(dart.fn(() => {
          if (dart.test(src__gestures__debug.debugPrintHitTestResults)) src__foundation__print.debugPrint(dart.str(event) + ": " + dart.str(hitTestResult));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/binding.dart", 134, 14, "() {\n        if (debugPrintHitTestResults) debugPrint('$event: $hitTestResult');\n        return true;\n      }()");
      } else if (src__gestures__events.PointerUpEvent.is(event) || src__gestures__events.PointerCancelEvent.is(event)) {
        hitTestResult = this[_hitTests][$remove](event.pointer);
      } else if (dart.test(event.down)) {
        hitTestResult = this[_hitTests][$_get](event.pointer);
      }
      if (!dart.test(dart.fn(() => {
        if (dart.test(src__gestures__debug.debugPrintMouseHoverEvents) && src__gestures__events.PointerHoverEvent.is(event)) src__foundation__print.debugPrint(dart.str(event));
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/binding.dart", 148, 12, "() {\n      if (debugPrintMouseHoverEvents && event is PointerHoverEvent)\n        debugPrint('$event');\n      return true;\n    }()");
      if (hitTestResult != null || src__gestures__events.PointerHoverEvent.is(event) || src__gestures__events.PointerAddedEvent.is(event) || src__gestures__events.PointerRemovedEvent.is(event)) {
        this.dispatchEvent(event, hitTestResult);
      }
    }
    hitTest(result, position) {
      result.add(new src__gestures__hit_test.HitTestEntry.new(this));
    }
    dispatchEvent(event, hitTestResult) {
      if (!!dart.test(this.locked)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/binding.dart", 175, 12, "!locked");
      if (hitTestResult == null) {
        if (!(src__gestures__events.PointerHoverEvent.is(event) || src__gestures__events.PointerAddedEvent.is(event) || src__gestures__events.PointerRemovedEvent.is(event))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/binding.dart", 179, 14, "event is PointerHoverEvent ||\n          event is PointerAddedEvent ||\n          event is PointerRemovedEvent");
        try {
          this.pointerRouter.route(event);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          src__foundation__assertions.FlutterError.reportError(new src__gestures__binding.FlutterErrorDetailsForPointerEventDispatcher.new({exception: exception, stack: stack, library: "gesture library", context: new src__foundation__assertions.ErrorDescription.new("while dispatching a non-hit-tested pointer event"), event: event, hitTestEntry: null, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfPointerEvent()).new(function*() {
              yield new (DiagnosticsPropertyOfPointerEvent()).new("Event", event, {style: src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty});
            }), VoidToIterableOfDiagnosticsPropertyOfPointerEvent())}));
        }
        return;
      }
      for (let entry of hitTestResult.path) {
        try {
          entry.target.handleEvent(event, entry);
        } catch (e$) {
          let exception = dart.getThrown(e$);
          let stack = dart.stackTrace(e$);
          src__foundation__assertions.FlutterError.reportError(new src__gestures__binding.FlutterErrorDetailsForPointerEventDispatcher.new({exception: exception, stack: stack, library: "gesture library", context: new src__foundation__assertions.ErrorDescription.new("while dispatching a pointer event"), event: event, hitTestEntry: entry, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfObject()).new(function*() {
              yield new (DiagnosticsPropertyOfPointerEvent()).new("Event", event, {style: src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty});
              yield new (DiagnosticsPropertyOfHitTestTarget()).new("Target", entry.target, {style: src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty});
            }), VoidToIterableOfDiagnosticsPropertyOfObject())}));
        }
      }
    }
    handleEvent(event, entry) {
      this.pointerRouter.route(event);
      if (src__gestures__events.PointerDownEvent.is(event)) {
        this.gestureArena.close(event.pointer);
      } else if (src__gestures__events.PointerUpEvent.is(event)) {
        this.gestureArena.sweep(event.pointer);
      } else if (src__gestures__events.PointerSignalEvent.is(event)) {
        this.pointerSignalResolver.resolve(event);
      }
    }
  };
  (src__gestures__binding.GestureBinding[dart.mixinNew] = function() {
    this[_pendingPointerEvents] = new (ListQueueOfPointerEvent()).new();
    this[pointerRouter] = new src__gestures__pointer_router.PointerRouter.new();
    this[gestureArena] = new src__gestures__arena.GestureArenaManager.new();
    this[pointerSignalResolver] = new src__gestures__pointer_signal_resolver.PointerSignalResolver.new();
    this[_hitTests] = new (IdentityMapOfint$HitTestResult()).new();
  }).prototype = src__gestures__binding.GestureBinding.prototype;
  dart.addTypeTests(src__gestures__binding.GestureBinding);
  const pointerRouter = Symbol("GestureBinding.pointerRouter");
  const gestureArena = Symbol("GestureBinding.gestureArena");
  const pointerSignalResolver = Symbol("GestureBinding.pointerSignalResolver");
  src__gestures__binding.GestureBinding[dart.implements] = () => [src__gestures__hit_test.HitTestable, src__gestures__hit_test.HitTestDispatcher, src__gestures__hit_test.HitTestTarget, src__foundation__binding.BindingBase];
  dart.setMethodSignature(src__gestures__binding.GestureBinding, () => ({
    __proto__: dart.getMethods(src__gestures__binding.GestureBinding.__proto__),
    [_handlePointerDataPacket]: dart.fnType(dart.void, [ui$.PointerDataPacket]),
    cancelPointer: dart.fnType(dart.void, [core.int]),
    [_flushPointerEventQueue]: dart.fnType(dart.void, []),
    [_handlePointerEvent]: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    hitTest: dart.fnType(dart.void, [src__gestures__hit_test.HitTestResult, ui$.Offset]),
    dispatchEvent: dart.fnType(dart.void, [src__gestures__events.PointerEvent, src__gestures__hit_test.HitTestResult]),
    handleEvent: dart.fnType(dart.void, [src__gestures__events.PointerEvent, src__gestures__hit_test.HitTestEntry])
  }));
  dart.setLibraryUri(src__gestures__binding.GestureBinding, "package:flutter_web/src/gestures/binding.dart");
  dart.setFieldSignature(src__gestures__binding.GestureBinding, () => ({
    __proto__: dart.getFields(src__gestures__binding.GestureBinding.__proto__),
    [_pendingPointerEvents]: dart.finalFieldType(collection.Queue$(src__gestures__events.PointerEvent)),
    pointerRouter: dart.finalFieldType(src__gestures__pointer_router.PointerRouter),
    gestureArena: dart.finalFieldType(src__gestures__arena.GestureArenaManager),
    pointerSignalResolver: dart.finalFieldType(src__gestures__pointer_signal_resolver.PointerSignalResolver),
    [_hitTests]: dart.finalFieldType(core.Map$(core.int, src__gestures__hit_test.HitTestResult))
  }));
  dart.defineLazy(src__gestures__binding.GestureBinding, {
    /*src__gestures__binding.GestureBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  });
  src__gestures__binding.FlutterErrorDetailsForPointerEventDispatcher = class FlutterErrorDetailsForPointerEventDispatcher extends src__foundation__assertions.FlutterErrorDetails {
    get event() {
      return this[event$0];
    }
    set event(value) {
      super.event = value;
    }
    get hitTestEntry() {
      return this[hitTestEntry$];
    }
    set hitTestEntry(value) {
      super.hitTestEntry = value;
    }
  };
  (src__gestures__binding.FlutterErrorDetailsForPointerEventDispatcher.new = function(opts) {
    let exception = opts && 'exception' in opts ? opts.exception : null;
    let stack = opts && 'stack' in opts ? opts.stack : null;
    let library = opts && 'library' in opts ? opts.library : null;
    let context = opts && 'context' in opts ? opts.context : null;
    let event = opts && 'event' in opts ? opts.event : null;
    let hitTestEntry = opts && 'hitTestEntry' in opts ? opts.hitTestEntry : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    let silent = opts && 'silent' in opts ? opts.silent : false;
    this[event$0] = event;
    this[hitTestEntry$] = hitTestEntry;
    src__gestures__binding.FlutterErrorDetailsForPointerEventDispatcher.__proto__.new.call(this, {exception: exception, stack: stack, library: library, context: context, informationCollector: informationCollector, silent: silent});
    ;
  }).prototype = src__gestures__binding.FlutterErrorDetailsForPointerEventDispatcher.prototype;
  dart.addTypeTests(src__gestures__binding.FlutterErrorDetailsForPointerEventDispatcher);
  const event$0 = Symbol("FlutterErrorDetailsForPointerEventDispatcher.event");
  const hitTestEntry$ = Symbol("FlutterErrorDetailsForPointerEventDispatcher.hitTestEntry");
  dart.setLibraryUri(src__gestures__binding.FlutterErrorDetailsForPointerEventDispatcher, "package:flutter_web/src/gestures/binding.dart");
  dart.setFieldSignature(src__gestures__binding.FlutterErrorDetailsForPointerEventDispatcher, () => ({
    __proto__: dart.getFields(src__gestures__binding.FlutterErrorDetailsForPointerEventDispatcher.__proto__),
    event: dart.finalFieldType(src__gestures__events.PointerEvent),
    hitTestEntry: dart.finalFieldType(src__gestures__hit_test.HitTestEntry)
  }));
  const _firstRegisteredCallback = dart.privateName(src__gestures__pointer_signal_resolver, "_firstRegisteredCallback");
  const _currentEvent = dart.privateName(src__gestures__pointer_signal_resolver, "_currentEvent");
  src__gestures__pointer_signal_resolver.PointerSignalResolver = class PointerSignalResolver extends core.Object {
    register(event, callback) {
      if (!(event != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/pointer_signal_resolver.dart", 32, 12, "event != null");
      if (!(callback != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/pointer_signal_resolver.dart", 33, 12, "callback != null");
      if (!(this[_currentEvent] == null || dart.equals(this[_currentEvent], event))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/pointer_signal_resolver.dart", 34, 12, "_currentEvent == null || _currentEvent == event");
      if (this[_firstRegisteredCallback] != null) {
        return;
      }
      this[_currentEvent] = event;
      this[_firstRegisteredCallback] = callback;
    }
    resolve(event) {
      if (this[_firstRegisteredCallback] == null) {
        if (!(this[_currentEvent] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/pointer_signal_resolver.dart", 49, 14, "_currentEvent == null");
        return;
      }
      if (!dart.equals(this[_currentEvent], event)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/pointer_signal_resolver.dart", 52, 12, "_currentEvent == event");
      try {
        this[_firstRegisteredCallback](event);
      } catch (e) {
        let exception = dart.getThrown(e);
        let stack = dart.stackTrace(e);
        src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "gesture library", context: new src__foundation__assertions.ErrorDescription.new("while resolving a PointerSignalEvent"), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfPointerSignalEvent()).new(function*() {
            yield new (DiagnosticsPropertyOfPointerSignalEvent()).new("Event", event, {style: src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty});
          }), VoidToIterableOfDiagnosticsPropertyOfPointerSignalEvent())}));
      }
      this[_firstRegisteredCallback] = null;
      this[_currentEvent] = null;
    }
  };
  (src__gestures__pointer_signal_resolver.PointerSignalResolver.new = function() {
    this[_firstRegisteredCallback] = null;
    this[_currentEvent] = null;
    ;
  }).prototype = src__gestures__pointer_signal_resolver.PointerSignalResolver.prototype;
  dart.addTypeTests(src__gestures__pointer_signal_resolver.PointerSignalResolver);
  dart.setMethodSignature(src__gestures__pointer_signal_resolver.PointerSignalResolver, () => ({
    __proto__: dart.getMethods(src__gestures__pointer_signal_resolver.PointerSignalResolver.__proto__),
    register: dart.fnType(dart.void, [src__gestures__events.PointerSignalEvent, dart.fnType(dart.void, [src__gestures__events.PointerSignalEvent])]),
    resolve: dart.fnType(dart.void, [src__gestures__events.PointerSignalEvent])
  }));
  dart.setLibraryUri(src__gestures__pointer_signal_resolver.PointerSignalResolver, "package:flutter_web/src/gestures/pointer_signal_resolver.dart");
  dart.setFieldSignature(src__gestures__pointer_signal_resolver.PointerSignalResolver, () => ({
    __proto__: dart.getFields(src__gestures__pointer_signal_resolver.PointerSignalResolver.__proto__),
    [_firstRegisteredCallback]: dart.fieldType(dart.fnType(dart.void, [src__gestures__events.PointerSignalEvent])),
    [_currentEvent]: dart.fieldType(src__gestures__events.PointerSignalEvent)
  }));
  src__gestures__hit_test.HitTestable = class HitTestable extends core.Object {
    static __() {
      return null;
    }
  };
  (src__gestures__hit_test.HitTestable[dart.mixinNew] = function() {
  }).prototype = src__gestures__hit_test.HitTestable.prototype;
  dart.addTypeTests(src__gestures__hit_test.HitTestable);
  dart.setLibraryUri(src__gestures__hit_test.HitTestable, "package:flutter_web/src/gestures/hit_test.dart");
  src__gestures__hit_test.HitTestDispatcher = class HitTestDispatcher extends core.Object {
    static __() {
      return null;
    }
  };
  (src__gestures__hit_test.HitTestDispatcher[dart.mixinNew] = function() {
  }).prototype = src__gestures__hit_test.HitTestDispatcher.prototype;
  dart.addTypeTests(src__gestures__hit_test.HitTestDispatcher);
  dart.setLibraryUri(src__gestures__hit_test.HitTestDispatcher, "package:flutter_web/src/gestures/hit_test.dart");
  src__gestures__hit_test.HitTestTarget = class HitTestTarget extends core.Object {
    static __() {
      return null;
    }
  };
  (src__gestures__hit_test.HitTestTarget[dart.mixinNew] = function() {
  }).prototype = src__gestures__hit_test.HitTestTarget.prototype;
  dart.addTypeTests(src__gestures__hit_test.HitTestTarget);
  dart.setLibraryUri(src__gestures__hit_test.HitTestTarget, "package:flutter_web/src/gestures/hit_test.dart");
  src__gestures__hit_test.HitTestEntry = class HitTestEntry extends core.Object {
    get target() {
      return this[target$];
    }
    set target(value) {
      super.target = value;
    }
    toString() {
      return dart.str(this.target);
    }
  };
  (src__gestures__hit_test.HitTestEntry.new = function(target) {
    this[target$] = target;
    ;
  }).prototype = src__gestures__hit_test.HitTestEntry.prototype;
  dart.addTypeTests(src__gestures__hit_test.HitTestEntry);
  const target$ = Symbol("HitTestEntry.target");
  dart.setLibraryUri(src__gestures__hit_test.HitTestEntry, "package:flutter_web/src/gestures/hit_test.dart");
  dart.setFieldSignature(src__gestures__hit_test.HitTestEntry, () => ({
    __proto__: dart.getFields(src__gestures__hit_test.HitTestEntry.__proto__),
    target: dart.finalFieldType(src__gestures__hit_test.HitTestTarget)
  }));
  dart.defineExtensionMethods(src__gestures__hit_test.HitTestEntry, ['toString']);
  const _path = dart.privateName(src__gestures__hit_test, "_path");
  src__gestures__hit_test.HitTestResult = class HitTestResult extends core.Object {
    get path() {
      return this[_path];
    }
    add(entry) {
      this[_path][$add](entry);
    }
    toString() {
      if (dart.test(src__util.assertionsEnabled)) {
        return "HitTestResult(" + dart.str(dart.test(this[_path][$isEmpty]) ? "<empty path>" : this[_path][$join](", ")) + ")";
      } else {
        return super[$toString]();
      }
    }
  };
  (src__gestures__hit_test.HitTestResult.new = function() {
    this[_path] = JSArrayOfHitTestEntry().of([]);
    ;
  }).prototype = src__gestures__hit_test.HitTestResult.prototype;
  (src__gestures__hit_test.HitTestResult.wrap = function(result) {
    this[_path] = result[_path];
    ;
  }).prototype = src__gestures__hit_test.HitTestResult.prototype;
  dart.addTypeTests(src__gestures__hit_test.HitTestResult);
  dart.setMethodSignature(src__gestures__hit_test.HitTestResult, () => ({
    __proto__: dart.getMethods(src__gestures__hit_test.HitTestResult.__proto__),
    add: dart.fnType(dart.void, [src__gestures__hit_test.HitTestEntry])
  }));
  dart.setGetterSignature(src__gestures__hit_test.HitTestResult, () => ({
    __proto__: dart.getGetters(src__gestures__hit_test.HitTestResult.__proto__),
    path: core.Iterable$(src__gestures__hit_test.HitTestEntry)
  }));
  dart.setLibraryUri(src__gestures__hit_test.HitTestResult, "package:flutter_web/src/gestures/hit_test.dart");
  dart.setFieldSignature(src__gestures__hit_test.HitTestResult, () => ({
    __proto__: dart.getFields(src__gestures__hit_test.HitTestResult.__proto__),
    [_path]: dart.finalFieldType(core.List$(src__gestures__hit_test.HitTestEntry))
  }));
  dart.defineExtensionMethods(src__gestures__hit_test.HitTestResult, ['toString']);
  const _pointer = dart.privateName(src__gestures__converter, "_pointer");
  const _down = dart.privateName(src__gestures__converter, "_down");
  src__gestures__converter._PointerState = class _PointerState extends core.Object {
    get pointer() {
      return this[_pointer];
    }
    startNewPointer() {
      src__gestures__converter._PointerState._pointerCount = dart.notNull(src__gestures__converter._PointerState._pointerCount) + 1;
      this[_pointer] = src__gestures__converter._PointerState._pointerCount;
    }
    get down() {
      return this[_down];
    }
    setDown() {
      if (!!dart.test(this[_down])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 27, 12, "!_down");
      this[_down] = true;
    }
    setUp() {
      if (!dart.test(this[_down])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 32, 12, "_down");
      this[_down] = false;
    }
    deltaTo(to) {
      return to['-'](this.lastPosition);
    }
    toString() {
      return "_PointerState(pointer: " + dart.str(this.pointer) + ", down: " + dart.str(this.down) + ", lastPosition: " + dart.str(this.lastPosition) + ")";
    }
  };
  (src__gestures__converter._PointerState.new = function(lastPosition) {
    this[_pointer] = null;
    this[_down] = false;
    this.lastPosition = lastPosition;
    ;
  }).prototype = src__gestures__converter._PointerState.prototype;
  dart.addTypeTests(src__gestures__converter._PointerState);
  dart.setMethodSignature(src__gestures__converter._PointerState, () => ({
    __proto__: dart.getMethods(src__gestures__converter._PointerState.__proto__),
    startNewPointer: dart.fnType(dart.void, []),
    setDown: dart.fnType(dart.void, []),
    setUp: dart.fnType(dart.void, []),
    deltaTo: dart.fnType(ui$.Offset, [ui$.Offset])
  }));
  dart.setGetterSignature(src__gestures__converter._PointerState, () => ({
    __proto__: dart.getGetters(src__gestures__converter._PointerState.__proto__),
    pointer: core.int,
    down: core.bool
  }));
  dart.setLibraryUri(src__gestures__converter._PointerState, "package:flutter_web/src/gestures/converter.dart");
  dart.setFieldSignature(src__gestures__converter._PointerState, () => ({
    __proto__: dart.getFields(src__gestures__converter._PointerState.__proto__),
    [_pointer]: dart.fieldType(core.int),
    [_down]: dart.fieldType(core.bool),
    lastPosition: dart.fieldType(ui$.Offset)
  }));
  dart.defineExtensionMethods(src__gestures__converter._PointerState, ['toString']);
  dart.defineLazy(src__gestures__converter._PointerState, {
    /*src__gestures__converter._PointerState._pointerCount*/get _pointerCount() {
      return 0;
    },
    set _pointerCount(_) {}
  });
  src__gestures__converter.PointerEventConverter = class PointerEventConverter extends core.Object {
    static clearPointers() {
      return src__gestures__converter.PointerEventConverter._pointers[$clear]();
    }
    static _ensureStateForPointer(datum, position) {
      return src__gestures__converter.PointerEventConverter._pointers[$putIfAbsent](datum.device, dart.fn(() => new src__gestures__converter._PointerState.new(position), VoidTo_PointerState()));
    }
    static expand(data, devicePixelRatio) {
      return new (SyncIterableOfPointerEvent()).new(function* expand() {
        for (let datum of data) {
          let position = new ui$.Offset.new(datum.physicalX, datum.physicalY)['/'](devicePixelRatio);
          let radiusMinor = src__gestures__converter.PointerEventConverter._toLogicalPixels(datum.radiusMinor, devicePixelRatio);
          let radiusMajor = src__gestures__converter.PointerEventConverter._toLogicalPixels(datum.radiusMajor, devicePixelRatio);
          let radiusMin = src__gestures__converter.PointerEventConverter._toLogicalPixels(datum.radiusMin, devicePixelRatio);
          let radiusMax = src__gestures__converter.PointerEventConverter._toLogicalPixels(datum.radiusMax, devicePixelRatio);
          let timeStamp = datum.timeStamp;
          let kind = datum.kind;
          if (!(datum.change != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 116, 14, "datum.change != null");
          if (datum.signalKind == null || dart.equals(datum.signalKind, ui$.PointerSignalKind.none)) {
            switch (datum.change) {
              case ui$.PointerChange.add:
              {
                if (!!dart.test(src__gestures__converter.PointerEventConverter._pointers[$containsKey](datum.device))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 121, 20, "!_pointers.containsKey(datum.device)");
                let state = src__gestures__converter.PointerEventConverter._ensureStateForPointer(datum, position);
                if (!dart.equals(state.lastPosition, position)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 123, 20, "state.lastPosition == position");
                yield new src__gestures__events.PointerAddedEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                break;
              }
              case ui$.PointerChange.hover:
              {
                let alreadyAdded = src__gestures__converter.PointerEventConverter._pointers[$containsKey](datum.device);
                let state = src__gestures__converter.PointerEventConverter._ensureStateForPointer(datum, position);
                if (!!dart.test(state.down)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 143, 20, "!state.down");
                if (!dart.test(alreadyAdded)) {
                  if (!dart.equals(state.lastPosition, position)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 145, 22, "state.lastPosition == position");
                  yield new src__gestures__events.PointerAddedEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                }
                yield new src__gestures__events.PointerHoverEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                state.lastPosition = position;
                break;
              }
              case ui$.PointerChange.down:
              {
                let alreadyAdded = src__gestures__converter.PointerEventConverter._pointers[$containsKey](datum.device);
                let state = src__gestures__converter.PointerEventConverter._ensureStateForPointer(datum, position);
                if (!!dart.test(state.down)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 187, 20, "!state.down");
                if (!dart.test(alreadyAdded)) {
                  if (!dart.equals(state.lastPosition, position)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 189, 22, "state.lastPosition == position");
                  yield new src__gestures__events.PointerAddedEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                }
                if (!dart.equals(state.lastPosition, position)) {
                  yield new src__gestures__events.PointerHoverEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, synthesized: true});
                  state.lastPosition = position;
                }
                state.startNewPointer();
                state.setDown();
                yield new src__gestures__events.PointerDownEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, buttons: src__gestures__converter._synthesiseDownButtons(datum.buttons, kind), obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                break;
              }
              case ui$.PointerChange.move:
              {
                if (!dart.test(src__gestures__converter.PointerEventConverter._pointers[$containsKey](datum.device))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 260, 20, "_pointers.containsKey(datum.device)");
                let state = src__gestures__converter.PointerEventConverter._pointers[$_get](datum.device);
                if (!dart.test(state.down)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 262, 20, "state.down");
                yield new src__gestures__events.PointerMoveEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: src__gestures__converter._synthesiseDownButtons(datum.buttons, kind), obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, platformData: datum.platformData});
                state.lastPosition = position;
                break;
              }
              case ui$.PointerChange.up:
              case ui$.PointerChange.cancel:
              {
                if (!dart.test(src__gestures__converter.PointerEventConverter._pointers[$containsKey](datum.device))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 289, 20, "_pointers.containsKey(datum.device)");
                let state = src__gestures__converter.PointerEventConverter._pointers[$_get](datum.device);
                if (!dart.test(state.down)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 291, 20, "state.down");
                if (!dart.equals(position, state.lastPosition)) {
                  yield new src__gestures__events.PointerMoveEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: src__gestures__converter._synthesiseDownButtons(datum.buttons, kind), obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, synthesized: true});
                  state.lastPosition = position;
                }
                if (!dart.equals(position, state.lastPosition)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 322, 20, "position == state.lastPosition");
                state.setUp();
                if (dart.equals(datum.change, ui$.PointerChange.up)) {
                  yield new src__gestures__events.PointerUpEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, buttons: datum.buttons, obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                } else {
                  yield new src__gestures__events.PointerCancelEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                }
                break;
              }
              case ui$.PointerChange.remove:
              {
                if (!dart.test(src__gestures__converter.PointerEventConverter._pointers[$containsKey](datum.device))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 370, 20, "_pointers.containsKey(datum.device)");
                let state = src__gestures__converter.PointerEventConverter._pointers[$_get](datum.device);
                if (dart.test(state.down)) {
                  yield new src__gestures__events.PointerCancelEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: state.lastPosition, buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                }
                if (!dart.equals(position, state.lastPosition)) {
                  yield new src__gestures__events.PointerHoverEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, synthesized: true});
                }
                src__gestures__converter.PointerEventConverter._pointers[$remove](datum.device);
                yield new src__gestures__events.PointerRemovedEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, radiusMin: radiusMin, radiusMax: radiusMax});
                break;
              }
            }
          } else {
            switch (datum.signalKind) {
              case ui$.PointerSignalKind.scroll:
              {
                if (!dart.test(src__gestures__converter.PointerEventConverter._pointers[$containsKey](datum.device))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 436, 20, "_pointers.containsKey(datum.device)");
                let state = src__gestures__converter.PointerEventConverter._ensureStateForPointer(datum, position);
                if (!dart.equals(state.lastPosition, position)) {
                  if (dart.test(state.down)) {
                    yield new src__gestures__events.PointerMoveEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: src__gestures__converter._synthesiseDownButtons(datum.buttons, kind), obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, synthesized: true});
                  } else {
                    yield new src__gestures__events.PointerHoverEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, synthesized: true});
                  }
                  state.lastPosition = position;
                }
                let scrollDelta = new ui$.Offset.new(datum.scrollDeltaX, datum.scrollDeltaY)['/'](devicePixelRatio);
                yield new src__gestures__events.PointerScrollEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, scrollDelta: scrollDelta});
                break;
              }
              case ui$.PointerSignalKind.none:
              {
                if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 504, 17, "false");
                break;
              }
              case ui$.PointerSignalKind.unknown:
              {
                break;
              }
            }
          }
        }
      });
    }
    static _toLogicalPixels(physicalPixels, devicePixelRatio) {
      return physicalPixels == null ? null : dart.notNull(physicalPixels) / dart.notNull(devicePixelRatio);
    }
  };
  (src__gestures__converter.PointerEventConverter.__ = function() {
    ;
  }).prototype = src__gestures__converter.PointerEventConverter.prototype;
  dart.addTypeTests(src__gestures__converter.PointerEventConverter);
  dart.setLibraryUri(src__gestures__converter.PointerEventConverter, "package:flutter_web/src/gestures/converter.dart");
  dart.defineLazy(src__gestures__converter.PointerEventConverter, {
    /*src__gestures__converter.PointerEventConverter._pointers*/get _pointers() {
      return new (IdentityMapOfint$_PointerState()).new();
    }
  });
  src__gestures__converter._synthesiseDownButtons = function(buttons, kind) {
    switch (kind) {
      case ui$.PointerDeviceKind.mouse:
      {
        return buttons;
      }
      case ui$.PointerDeviceKind.touch:
      case ui$.PointerDeviceKind.stylus:
      case ui$.PointerDeviceKind.invertedStylus:
      {
        return (dart.notNull(buttons) | dart.notNull(src__gestures__events.kPrimaryButton)) >>> 0;
      }
      default:
      {
        return buttons === 0 ? src__gestures__events.kPrimaryButton : buttons;
      }
    }
  };
  dart.defineLazy(src__gestures__constants, {
    /*src__gestures__constants.kPressTimeout*/get kPressTimeout() {
      return dart.const(new core.Duration.new({milliseconds: 100}));
    },
    /*src__gestures__constants.kHoverTapTimeout*/get kHoverTapTimeout() {
      return dart.const(new core.Duration.new({milliseconds: 150}));
    },
    /*src__gestures__constants.kHoverTapSlop*/get kHoverTapSlop() {
      return 20.0;
    },
    /*src__gestures__constants.kLongPressTimeout*/get kLongPressTimeout() {
      return dart.const(new core.Duration.new({milliseconds: 500}));
    },
    /*src__gestures__constants.kDoubleTapTimeout*/get kDoubleTapTimeout() {
      return dart.const(new core.Duration.new({milliseconds: 300}));
    },
    /*src__gestures__constants.kDoubleTapMinTime*/get kDoubleTapMinTime() {
      return dart.const(new core.Duration.new({milliseconds: 40}));
    },
    /*src__gestures__constants.kDoubleTapTouchSlop*/get kDoubleTapTouchSlop() {
      return src__gestures__constants.kTouchSlop;
    },
    /*src__gestures__constants.kDoubleTapSlop*/get kDoubleTapSlop() {
      return 100.0;
    },
    /*src__gestures__constants.kZoomControlsTimeout*/get kZoomControlsTimeout() {
      return dart.const(new core.Duration.new({milliseconds: 3000}));
    },
    /*src__gestures__constants.kTouchSlop*/get kTouchSlop() {
      return 18.0;
    },
    /*src__gestures__constants.kPagingTouchSlop*/get kPagingTouchSlop() {
      return dart.notNull(src__gestures__constants.kTouchSlop) * 2.0;
    },
    /*src__gestures__constants.kPanSlop*/get kPanSlop() {
      return dart.notNull(src__gestures__constants.kTouchSlop) * 2.0;
    },
    /*src__gestures__constants.kScaleSlop*/get kScaleSlop() {
      return src__gestures__constants.kTouchSlop;
    },
    /*src__gestures__constants.kWindowTouchSlop*/get kWindowTouchSlop() {
      return 16.0;
    },
    /*src__gestures__constants.kMinFlingVelocity*/get kMinFlingVelocity() {
      return 50.0;
    },
    /*src__gestures__constants.kMaxFlingVelocity*/get kMaxFlingVelocity() {
      return 8000.0;
    },
    /*src__gestures__constants.kJumpTapTimeout*/get kJumpTapTimeout() {
      return dart.const(new core.Duration.new({milliseconds: 500}));
    }
  });
  const _velocityTracker = dart.privateName(src__gestures__multidrag, "_velocityTracker");
  const _client = dart.privateName(src__gestures__multidrag, "_client");
  const _pendingDelta = dart.privateName(src__gestures__multidrag, "_pendingDelta");
  const _lastPendingEventTimestamp = dart.privateName(src__gestures__multidrag, "_lastPendingEventTimestamp");
  const _arenaEntry = dart.privateName(src__gestures__multidrag, "_arenaEntry");
  const _setArenaEntry = dart.privateName(src__gestures__multidrag, "_setArenaEntry");
  const _move = dart.privateName(src__gestures__multidrag, "_move");
  const _startDrag = dart.privateName(src__gestures__multidrag, "_startDrag");
  const _up = dart.privateName(src__gestures__multidrag, "_up");
  const _cancel = dart.privateName(src__gestures__multidrag, "_cancel");
  src__gestures__multidrag.MultiDragPointerState = class MultiDragPointerState extends core.Object {
    get initialPosition() {
      return this[initialPosition$];
    }
    set initialPosition(value) {
      super.initialPosition = value;
    }
    get pendingDelta() {
      return this[_pendingDelta];
    }
    [_setArenaEntry](entry) {
      if (!(this[_arenaEntry] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 51, 12, "_arenaEntry == null");
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 52, 12, "pendingDelta != null");
      if (!(this[_client] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 53, 12, "_client == null");
      this[_arenaEntry] = entry;
    }
    resolve(disposition) {
      this[_arenaEntry].resolve(disposition);
    }
    [_move](event) {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 65, 12, "_arenaEntry != null");
      if (!dart.test(event.synthesized)) this[_velocityTracker].addPosition(event.timeStamp, event.position);
      if (this[_client] != null) {
        if (!(this.pendingDelta == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 69, 14, "pendingDelta == null");
        this[_client].update(new src__gestures__drag_details.DragUpdateDetails.new({sourceTimeStamp: event.timeStamp, delta: event.delta, globalPosition: event.position}));
      } else {
        if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 77, 14, "pendingDelta != null");
        this[_pendingDelta] = this[_pendingDelta]['+'](event.delta);
        this[_lastPendingEventTimestamp] = event.timeStamp;
        this.checkForResolutionAfterMove();
      }
    }
    checkForResolutionAfterMove() {
    }
    rejected() {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 103, 12, "_arenaEntry != null");
      if (!(this[_client] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 104, 12, "_client == null");
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 105, 12, "pendingDelta != null");
      this[_pendingDelta] = null;
      this[_lastPendingEventTimestamp] = null;
      this[_arenaEntry] = null;
    }
    [_startDrag](client) {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 112, 12, "_arenaEntry != null");
      if (!(this[_client] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 113, 12, "_client == null");
      if (!(client != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 114, 12, "client != null");
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 115, 12, "pendingDelta != null");
      this[_client] = client;
      let details = new src__gestures__drag_details.DragUpdateDetails.new({sourceTimeStamp: this[_lastPendingEventTimestamp], delta: this.pendingDelta, globalPosition: this.initialPosition});
      this[_pendingDelta] = null;
      this[_lastPendingEventTimestamp] = null;
      this[_client].update(details);
    }
    [_up]() {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 129, 12, "_arenaEntry != null");
      if (this[_client] != null) {
        if (!(this.pendingDelta == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 131, 14, "pendingDelta == null");
        let details = new src__gestures__drag_details.DragEndDetails.new({velocity: this[_velocityTracker].getVelocity()});
        let client = this[_client];
        this[_client] = null;
        client.end(details);
      } else {
        if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 139, 14, "pendingDelta != null");
        this[_pendingDelta] = null;
        this[_lastPendingEventTimestamp] = null;
      }
    }
    [_cancel]() {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 146, 12, "_arenaEntry != null");
      if (this[_client] != null) {
        if (!(this.pendingDelta == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 148, 14, "pendingDelta == null");
        let client = this[_client];
        this[_client] = null;
        client.cancel();
      } else {
        if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 154, 14, "pendingDelta != null");
        this[_pendingDelta] = null;
        this[_lastPendingEventTimestamp] = null;
      }
    }
    dispose() {
      let t5;
      t5 = this[_arenaEntry];
      t5 == null ? null : t5.resolve(src__gestures__arena.GestureDisposition.rejected);
      this[_arenaEntry] = null;
      if (!dart.test(dart.fn(() => {
        this[_pendingDelta] = null;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 166, 12, "() {\n      _pendingDelta = null;\n      return true;\n    }()");
    }
  };
  (src__gestures__multidrag.MultiDragPointerState.new = function(initialPosition) {
    this[_velocityTracker] = new src__gestures__velocity_tracker.VelocityTracker.new();
    this[_client] = null;
    this[_pendingDelta] = ui$.Offset.zero;
    this[_lastPendingEventTimestamp] = null;
    this[_arenaEntry] = null;
    this[initialPosition$] = initialPosition;
    if (!(initialPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 30, 56, "initialPosition != null");
    ;
  }).prototype = src__gestures__multidrag.MultiDragPointerState.prototype;
  dart.addTypeTests(src__gestures__multidrag.MultiDragPointerState);
  const initialPosition$ = Symbol("MultiDragPointerState.initialPosition");
  dart.setMethodSignature(src__gestures__multidrag.MultiDragPointerState, () => ({
    __proto__: dart.getMethods(src__gestures__multidrag.MultiDragPointerState.__proto__),
    [_setArenaEntry]: dart.fnType(dart.void, [src__gestures__arena.GestureArenaEntry]),
    resolve: dart.fnType(dart.void, [src__gestures__arena.GestureDisposition]),
    [_move]: dart.fnType(dart.void, [src__gestures__events.PointerMoveEvent]),
    checkForResolutionAfterMove: dart.fnType(dart.void, []),
    rejected: dart.fnType(dart.void, []),
    [_startDrag]: dart.fnType(dart.void, [src__gestures__drag.Drag]),
    [_up]: dart.fnType(dart.void, []),
    [_cancel]: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__gestures__multidrag.MultiDragPointerState, () => ({
    __proto__: dart.getGetters(src__gestures__multidrag.MultiDragPointerState.__proto__),
    pendingDelta: ui$.Offset
  }));
  dart.setLibraryUri(src__gestures__multidrag.MultiDragPointerState, "package:flutter_web/src/gestures/multidrag.dart");
  dart.setFieldSignature(src__gestures__multidrag.MultiDragPointerState, () => ({
    __proto__: dart.getFields(src__gestures__multidrag.MultiDragPointerState.__proto__),
    initialPosition: dart.finalFieldType(ui$.Offset),
    [_velocityTracker]: dart.finalFieldType(src__gestures__velocity_tracker.VelocityTracker),
    [_client]: dart.fieldType(src__gestures__drag.Drag),
    [_pendingDelta]: dart.fieldType(ui$.Offset),
    [_lastPendingEventTimestamp]: dart.fieldType(core.Duration),
    [_arenaEntry]: dart.fieldType(src__gestures__arena.GestureArenaEntry)
  }));
  const _pointers = dart.privateName(src__gestures__multidrag, "_pointers");
  const _handleEvent = dart.privateName(src__gestures__multidrag, "_handleEvent");
  const _removeState = dart.privateName(src__gestures__multidrag, "_removeState");
  const _is_MultiDragGestureRecognizer_default = Symbol('_is_MultiDragGestureRecognizer_default');
  src__gestures__multidrag.MultiDragGestureRecognizer$ = dart.generic(T => {
    let IdentityMapOfint$T = () => (IdentityMapOfint$T = dart.constFn(_js_helper.IdentityMap$(core.int, T)))();
    class MultiDragGestureRecognizer extends src__gestures__recognizer.GestureRecognizer {
      get onStart() {
        return this[onStart];
      }
      set onStart(value) {
        this[onStart] = value;
      }
      addAllowedPointer(event) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 211, 12, "_pointers != null");
        if (!(event.pointer != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 212, 12, "event.pointer != null");
        if (!(event.position != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 213, 12, "event.position != null");
        if (!!dart.test(this[_pointers][$containsKey](event.pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 214, 12, "!_pointers.containsKey(event.pointer)");
        let state = this.createNewPointerState(event);
        this[_pointers][$_set](event.pointer, state);
        src__gestures__binding.GestureBinding.instance.pointerRouter.addRoute(event.pointer, dart.bind(this, _handleEvent));
        state[_setArenaEntry](src__gestures__binding.GestureBinding.instance.gestureArena.add(event.pointer, this));
      }
      [_handleEvent](event) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 228, 12, "_pointers != null");
        if (!(event.pointer != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 229, 12, "event.pointer != null");
        if (!(event.timeStamp != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 230, 12, "event.timeStamp != null");
        if (!(event.position != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 231, 12, "event.position != null");
        if (!dart.test(this[_pointers][$containsKey](event.pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 232, 12, "_pointers.containsKey(event.pointer)");
        let state = this[_pointers][$_get](event.pointer);
        if (src__gestures__events.PointerMoveEvent.is(event)) {
          state[_move](event);
        } else if (src__gestures__events.PointerUpEvent.is(event)) {
          if (!dart.equals(event.delta, ui$.Offset.zero)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 238, 14, "event.delta == Offset.zero");
          state[_up]();
          this[_removeState](event.pointer);
        } else if (src__gestures__events.PointerCancelEvent.is(event)) {
          if (!dart.equals(event.delta, ui$.Offset.zero)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 243, 14, "event.delta == Offset.zero");
          state[_cancel]();
          this[_removeState](event.pointer);
        } else if (!src__gestures__events.PointerDownEvent.is(event)) {
          if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 251, 14, "false");
        }
      }
      acceptGesture(pointer) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 257, 12, "_pointers != null");
        let state = this[_pointers][$_get](pointer);
        if (state == null) return;
        state.accepted(dart.fn(initialPosition => this[_startDrag](initialPosition, pointer), OffsetToDrag()));
      }
      [_startDrag](initialPosition, pointer) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 266, 12, "_pointers != null");
        let state = this[_pointers][$_get](pointer);
        if (!(state != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 268, 12, "state != null");
        if (!(state[_pendingDelta] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 269, 12, "state._pendingDelta != null");
        let drag = null;
        if (this.onStart != null) drag = this.invokeCallback(src__gestures__drag.Drag, "onStart", dart.fn(() => this.onStart(initialPosition), VoidToDrag()));
        if (drag != null) {
          state[_startDrag](drag);
        } else {
          this[_removeState](pointer);
        }
        return drag;
      }
      rejectGesture(pointer) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 283, 12, "_pointers != null");
        if (dart.test(this[_pointers][$containsKey](pointer))) {
          let state = this[_pointers][$_get](pointer);
          if (!(state != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 286, 14, "state != null");
          state.rejected();
          this[_removeState](pointer);
        }
      }
      [_removeState](pointer) {
        if (this[_pointers] == null) {
          return;
        }
        if (!dart.test(this[_pointers][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 298, 12, "_pointers.containsKey(pointer)");
        src__gestures__binding.GestureBinding.instance.pointerRouter.removeRoute(pointer, dart.bind(this, _handleEvent));
        this[_pointers][$remove](pointer).dispose();
      }
      dispose() {
        this[_pointers][$keys][$toList]()[$forEach](dart.bind(this, _removeState));
        if (!dart.test(this[_pointers][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 306, 12, "_pointers.isEmpty");
        this[_pointers] = null;
        super.dispose();
      }
    }
    (MultiDragGestureRecognizer.new = function(opts) {
      let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      this[onStart] = null;
      this[_pointers] = new (IdentityMapOfint$T()).new();
      MultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
      ;
    }).prototype = MultiDragGestureRecognizer.prototype;
    dart.addTypeTests(MultiDragGestureRecognizer);
    MultiDragGestureRecognizer.prototype[_is_MultiDragGestureRecognizer_default] = true;
    const onStart = Symbol("MultiDragGestureRecognizer.onStart");
    dart.setMethodSignature(MultiDragGestureRecognizer, () => ({
      __proto__: dart.getMethods(MultiDragGestureRecognizer.__proto__),
      [_handleEvent]: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
      acceptGesture: dart.fnType(dart.void, [core.int]),
      [_startDrag]: dart.fnType(src__gestures__drag.Drag, [ui$.Offset, core.int]),
      rejectGesture: dart.fnType(dart.void, [core.int]),
      [_removeState]: dart.fnType(dart.void, [core.int])
    }));
    dart.setLibraryUri(MultiDragGestureRecognizer, "package:flutter_web/src/gestures/multidrag.dart");
    dart.setFieldSignature(MultiDragGestureRecognizer, () => ({
      __proto__: dart.getFields(MultiDragGestureRecognizer.__proto__),
      onStart: dart.fieldType(dart.fnType(src__gestures__drag.Drag, [ui$.Offset])),
      [_pointers]: dart.fieldType(core.Map$(core.int, T))
    }));
    return MultiDragGestureRecognizer;
  });
  src__gestures__multidrag.MultiDragGestureRecognizer = src__gestures__multidrag.MultiDragGestureRecognizer$();
  dart.addTypeTests(src__gestures__multidrag.MultiDragGestureRecognizer, _is_MultiDragGestureRecognizer_default);
  src__gestures__multidrag._ImmediatePointerState = class _ImmediatePointerState extends src__gestures__multidrag.MultiDragPointerState {
    checkForResolutionAfterMove() {
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 317, 12, "pendingDelta != null");
      if (dart.notNull(this.pendingDelta.distance) > dart.notNull(src__gestures__constants.kTouchSlop)) this.resolve(src__gestures__arena.GestureDisposition.accepted);
    }
    accepted(starter) {
      starter(this.initialPosition);
    }
  };
  (src__gestures__multidrag._ImmediatePointerState.new = function(initialPosition) {
    src__gestures__multidrag._ImmediatePointerState.__proto__.new.call(this, initialPosition);
    ;
  }).prototype = src__gestures__multidrag._ImmediatePointerState.prototype;
  dart.addTypeTests(src__gestures__multidrag._ImmediatePointerState);
  dart.setMethodSignature(src__gestures__multidrag._ImmediatePointerState, () => ({
    __proto__: dart.getMethods(src__gestures__multidrag._ImmediatePointerState.__proto__),
    accepted: dart.fnType(dart.void, [dart.fnType(src__gestures__drag.Drag, [ui$.Offset])])
  }));
  dart.setLibraryUri(src__gestures__multidrag._ImmediatePointerState, "package:flutter_web/src/gestures/multidrag.dart");
  src__gestures__multidrag.ImmediateMultiDragGestureRecognizer = class ImmediateMultiDragGestureRecognizer extends src__gestures__multidrag.MultiDragGestureRecognizer$(src__gestures__multidrag._ImmediatePointerState) {
    createNewPointerState(event) {
      return new src__gestures__multidrag._ImmediatePointerState.new(event.position);
    }
    get debugDescription() {
      return "multidrag";
    }
  };
  (src__gestures__multidrag.ImmediateMultiDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    src__gestures__multidrag.ImmediateMultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = src__gestures__multidrag.ImmediateMultiDragGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__multidrag.ImmediateMultiDragGestureRecognizer);
  dart.setMethodSignature(src__gestures__multidrag.ImmediateMultiDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__multidrag.ImmediateMultiDragGestureRecognizer.__proto__),
    createNewPointerState: dart.fnType(src__gestures__multidrag._ImmediatePointerState, [src__gestures__events.PointerDownEvent])
  }));
  dart.setGetterSignature(src__gestures__multidrag.ImmediateMultiDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__multidrag.ImmediateMultiDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__multidrag.ImmediateMultiDragGestureRecognizer, "package:flutter_web/src/gestures/multidrag.dart");
  src__gestures__multidrag._HorizontalPointerState = class _HorizontalPointerState extends src__gestures__multidrag.MultiDragPointerState {
    checkForResolutionAfterMove() {
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 366, 12, "pendingDelta != null");
      if (this.pendingDelta.dx[$abs]() > dart.notNull(src__gestures__constants.kTouchSlop)) this.resolve(src__gestures__arena.GestureDisposition.accepted);
    }
    accepted(starter) {
      starter(this.initialPosition);
    }
  };
  (src__gestures__multidrag._HorizontalPointerState.new = function(initialPosition) {
    src__gestures__multidrag._HorizontalPointerState.__proto__.new.call(this, initialPosition);
    ;
  }).prototype = src__gestures__multidrag._HorizontalPointerState.prototype;
  dart.addTypeTests(src__gestures__multidrag._HorizontalPointerState);
  dart.setMethodSignature(src__gestures__multidrag._HorizontalPointerState, () => ({
    __proto__: dart.getMethods(src__gestures__multidrag._HorizontalPointerState.__proto__),
    accepted: dart.fnType(dart.void, [dart.fnType(src__gestures__drag.Drag, [ui$.Offset])])
  }));
  dart.setLibraryUri(src__gestures__multidrag._HorizontalPointerState, "package:flutter_web/src/gestures/multidrag.dart");
  src__gestures__multidrag.HorizontalMultiDragGestureRecognizer = class HorizontalMultiDragGestureRecognizer extends src__gestures__multidrag.MultiDragGestureRecognizer$(src__gestures__multidrag._HorizontalPointerState) {
    createNewPointerState(event) {
      return new src__gestures__multidrag._HorizontalPointerState.new(event.position);
    }
    get debugDescription() {
      return "horizontal multidrag";
    }
  };
  (src__gestures__multidrag.HorizontalMultiDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    src__gestures__multidrag.HorizontalMultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = src__gestures__multidrag.HorizontalMultiDragGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__multidrag.HorizontalMultiDragGestureRecognizer);
  dart.setMethodSignature(src__gestures__multidrag.HorizontalMultiDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__multidrag.HorizontalMultiDragGestureRecognizer.__proto__),
    createNewPointerState: dart.fnType(src__gestures__multidrag._HorizontalPointerState, [src__gestures__events.PointerDownEvent])
  }));
  dart.setGetterSignature(src__gestures__multidrag.HorizontalMultiDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__multidrag.HorizontalMultiDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__multidrag.HorizontalMultiDragGestureRecognizer, "package:flutter_web/src/gestures/multidrag.dart");
  src__gestures__multidrag._VerticalPointerState = class _VerticalPointerState extends src__gestures__multidrag.MultiDragPointerState {
    checkForResolutionAfterMove() {
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 415, 12, "pendingDelta != null");
      if (this.pendingDelta.dy[$abs]() > dart.notNull(src__gestures__constants.kTouchSlop)) this.resolve(src__gestures__arena.GestureDisposition.accepted);
    }
    accepted(starter) {
      starter(this.initialPosition);
    }
  };
  (src__gestures__multidrag._VerticalPointerState.new = function(initialPosition) {
    src__gestures__multidrag._VerticalPointerState.__proto__.new.call(this, initialPosition);
    ;
  }).prototype = src__gestures__multidrag._VerticalPointerState.prototype;
  dart.addTypeTests(src__gestures__multidrag._VerticalPointerState);
  dart.setMethodSignature(src__gestures__multidrag._VerticalPointerState, () => ({
    __proto__: dart.getMethods(src__gestures__multidrag._VerticalPointerState.__proto__),
    accepted: dart.fnType(dart.void, [dart.fnType(src__gestures__drag.Drag, [ui$.Offset])])
  }));
  dart.setLibraryUri(src__gestures__multidrag._VerticalPointerState, "package:flutter_web/src/gestures/multidrag.dart");
  src__gestures__multidrag.VerticalMultiDragGestureRecognizer = class VerticalMultiDragGestureRecognizer extends src__gestures__multidrag.MultiDragGestureRecognizer$(src__gestures__multidrag._VerticalPointerState) {
    createNewPointerState(event) {
      return new src__gestures__multidrag._VerticalPointerState.new(event.position);
    }
    get debugDescription() {
      return "vertical multidrag";
    }
  };
  (src__gestures__multidrag.VerticalMultiDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    src__gestures__multidrag.VerticalMultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = src__gestures__multidrag.VerticalMultiDragGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__multidrag.VerticalMultiDragGestureRecognizer);
  dart.setMethodSignature(src__gestures__multidrag.VerticalMultiDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__multidrag.VerticalMultiDragGestureRecognizer.__proto__),
    createNewPointerState: dart.fnType(src__gestures__multidrag._VerticalPointerState, [src__gestures__events.PointerDownEvent])
  }));
  dart.setGetterSignature(src__gestures__multidrag.VerticalMultiDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__multidrag.VerticalMultiDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__multidrag.VerticalMultiDragGestureRecognizer, "package:flutter_web/src/gestures/multidrag.dart");
  const _timer$ = dart.privateName(src__gestures__multidrag, "_timer");
  const _starter = dart.privateName(src__gestures__multidrag, "_starter");
  const _delayPassed = dart.privateName(src__gestures__multidrag, "_delayPassed");
  const _ensureTimerStopped = dart.privateName(src__gestures__multidrag, "_ensureTimerStopped");
  src__gestures__multidrag._DelayedPointerState = class _DelayedPointerState extends src__gestures__multidrag.MultiDragPointerState {
    [_delayPassed]() {
      if (!(this[_timer$] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 470, 12, "_timer != null");
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 471, 12, "pendingDelta != null");
      if (!(dart.notNull(this.pendingDelta.distance) <= dart.notNull(src__gestures__constants.kTouchSlop))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 472, 12, "pendingDelta.distance <= kTouchSlop");
      this[_timer$] = null;
      if (this[_starter] != null) {
        this[_starter](this.initialPosition);
        this[_starter] = null;
      } else {
        this.resolve(src__gestures__arena.GestureDisposition.accepted);
      }
      if (!(this[_starter] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 480, 12, "_starter == null");
    }
    [_ensureTimerStopped]() {
      let t5;
      t5 = this[_timer$];
      t5 == null ? null : t5.cancel();
      this[_timer$] = null;
    }
    accepted(starter) {
      if (!(this[_starter] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 490, 12, "_starter == null");
      if (this[_timer$] == null)
        starter(this.initialPosition);
      else
        this[_starter] = starter;
    }
    checkForResolutionAfterMove() {
      if (this[_timer$] == null) {
        if (!(this[_starter] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 505, 14, "_starter != null");
        return;
      }
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 508, 12, "pendingDelta != null");
      if (dart.notNull(this.pendingDelta.distance) > dart.notNull(src__gestures__constants.kTouchSlop)) {
        this.resolve(src__gestures__arena.GestureDisposition.rejected);
        this[_ensureTimerStopped]();
      }
    }
    dispose() {
      this[_ensureTimerStopped]();
      super.dispose();
    }
  };
  (src__gestures__multidrag._DelayedPointerState.new = function(initialPosition, delay) {
    this[_timer$] = null;
    this[_starter] = null;
    if (!(delay != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 461, 16, "delay != null");
    src__gestures__multidrag._DelayedPointerState.__proto__.new.call(this, initialPosition);
    this[_timer$] = async.Timer.new(delay, dart.bind(this, _delayPassed));
  }).prototype = src__gestures__multidrag._DelayedPointerState.prototype;
  dart.addTypeTests(src__gestures__multidrag._DelayedPointerState);
  dart.setMethodSignature(src__gestures__multidrag._DelayedPointerState, () => ({
    __proto__: dart.getMethods(src__gestures__multidrag._DelayedPointerState.__proto__),
    [_delayPassed]: dart.fnType(dart.void, []),
    [_ensureTimerStopped]: dart.fnType(dart.void, []),
    accepted: dart.fnType(dart.void, [dart.fnType(src__gestures__drag.Drag, [ui$.Offset])])
  }));
  dart.setLibraryUri(src__gestures__multidrag._DelayedPointerState, "package:flutter_web/src/gestures/multidrag.dart");
  dart.setFieldSignature(src__gestures__multidrag._DelayedPointerState, () => ({
    __proto__: dart.getFields(src__gestures__multidrag._DelayedPointerState.__proto__),
    [_timer$]: dart.fieldType(async.Timer),
    [_starter]: dart.fieldType(dart.fnType(src__gestures__drag.Drag, [ui$.Offset]))
  }));
  src__gestures__multidrag.DelayedMultiDragGestureRecognizer = class DelayedMultiDragGestureRecognizer extends src__gestures__multidrag.MultiDragGestureRecognizer$(src__gestures__multidrag._DelayedPointerState) {
    get delay() {
      return this[delay$];
    }
    set delay(value) {
      super.delay = value;
    }
    createNewPointerState(event) {
      return new src__gestures__multidrag._DelayedPointerState.new(event.position, this.delay);
    }
    get debugDescription() {
      return "long multidrag";
    }
  };
  (src__gestures__multidrag.DelayedMultiDragGestureRecognizer.new = function(opts) {
    let delay = opts && 'delay' in opts ? opts.delay : src__gestures__constants.kLongPressTimeout;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[delay$] = delay;
    if (!(delay != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 552, 16, "delay != null");
    src__gestures__multidrag.DelayedMultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = src__gestures__multidrag.DelayedMultiDragGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__multidrag.DelayedMultiDragGestureRecognizer);
  const delay$ = Symbol("DelayedMultiDragGestureRecognizer.delay");
  dart.setMethodSignature(src__gestures__multidrag.DelayedMultiDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__multidrag.DelayedMultiDragGestureRecognizer.__proto__),
    createNewPointerState: dart.fnType(src__gestures__multidrag._DelayedPointerState, [src__gestures__events.PointerDownEvent])
  }));
  dart.setGetterSignature(src__gestures__multidrag.DelayedMultiDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__multidrag.DelayedMultiDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__multidrag.DelayedMultiDragGestureRecognizer, "package:flutter_web/src/gestures/multidrag.dart");
  dart.setFieldSignature(src__gestures__multidrag.DelayedMultiDragGestureRecognizer, () => ({
    __proto__: dart.getFields(src__gestures__multidrag.DelayedMultiDragGestureRecognizer.__proto__),
    delay: dart.finalFieldType(core.Duration)
  }));
  src__gestures__drag_details.DragDownDetails = class DragDownDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.globalPosition) + ")";
    }
  };
  (src__gestures__drag_details.DragDownDetails.new = function(opts) {
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : ui$.Offset.zero;
    this[globalPosition$] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/drag_details.dart", 24, 16, "globalPosition != null");
    ;
  }).prototype = src__gestures__drag_details.DragDownDetails.prototype;
  dart.addTypeTests(src__gestures__drag_details.DragDownDetails);
  const globalPosition$ = Symbol("DragDownDetails.globalPosition");
  dart.setLibraryUri(src__gestures__drag_details.DragDownDetails, "package:flutter_web/src/gestures/drag_details.dart");
  dart.setFieldSignature(src__gestures__drag_details.DragDownDetails, () => ({
    __proto__: dart.getFields(src__gestures__drag_details.DragDownDetails.__proto__),
    globalPosition: dart.finalFieldType(ui$.Offset)
  }));
  dart.defineExtensionMethods(src__gestures__drag_details.DragDownDetails, ['toString']);
  src__gestures__drag_details.DragStartDetails = class DragStartDetails extends core.Object {
    get sourceTimeStamp() {
      return this[sourceTimeStamp$];
    }
    set sourceTimeStamp(value) {
      super.sourceTimeStamp = value;
    }
    get globalPosition() {
      return this[globalPosition$0];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.globalPosition) + ")";
    }
  };
  (src__gestures__drag_details.DragStartDetails.new = function(opts) {
    let sourceTimeStamp = opts && 'sourceTimeStamp' in opts ? opts.sourceTimeStamp : null;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : ui$.Offset.zero;
    this[sourceTimeStamp$] = sourceTimeStamp;
    this[globalPosition$0] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/drag_details.dart", 56, 16, "globalPosition != null");
    ;
  }).prototype = src__gestures__drag_details.DragStartDetails.prototype;
  dart.addTypeTests(src__gestures__drag_details.DragStartDetails);
  const sourceTimeStamp$ = Symbol("DragStartDetails.sourceTimeStamp");
  const globalPosition$0 = Symbol("DragStartDetails.globalPosition");
  dart.setLibraryUri(src__gestures__drag_details.DragStartDetails, "package:flutter_web/src/gestures/drag_details.dart");
  dart.setFieldSignature(src__gestures__drag_details.DragStartDetails, () => ({
    __proto__: dart.getFields(src__gestures__drag_details.DragStartDetails.__proto__),
    sourceTimeStamp: dart.finalFieldType(core.Duration),
    globalPosition: dart.finalFieldType(ui$.Offset)
  }));
  dart.defineExtensionMethods(src__gestures__drag_details.DragStartDetails, ['toString']);
  src__gestures__drag_details.DragUpdateDetails = class DragUpdateDetails extends core.Object {
    get sourceTimeStamp() {
      return this[sourceTimeStamp$0];
    }
    set sourceTimeStamp(value) {
      super.sourceTimeStamp = value;
    }
    get delta() {
      return this[delta$0];
    }
    set delta(value) {
      super.delta = value;
    }
    get primaryDelta() {
      return this[primaryDelta$];
    }
    set primaryDelta(value) {
      super.primaryDelta = value;
    }
    get globalPosition() {
      return this[globalPosition$1];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.delta) + ")";
    }
  };
  (src__gestures__drag_details.DragUpdateDetails.new = function(opts) {
    let sourceTimeStamp = opts && 'sourceTimeStamp' in opts ? opts.sourceTimeStamp : null;
    let delta = opts && 'delta' in opts ? opts.delta : ui$.Offset.zero;
    let primaryDelta = opts && 'primaryDelta' in opts ? opts.primaryDelta : null;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : null;
    this[sourceTimeStamp$0] = sourceTimeStamp;
    this[delta$0] = delta;
    this[primaryDelta$] = primaryDelta;
    this[globalPosition$1] = globalPosition;
    if (!(delta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/drag_details.dart", 107, 16, "delta != null");
    if (!(primaryDelta == null || primaryDelta == delta.dx && delta.dy === 0.0 || primaryDelta == delta.dy && delta.dx === 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/drag_details.dart", 108, 16, "primaryDelta == null ||\n            (primaryDelta == delta.dx && delta.dy == 0.0) ||\n            (primaryDelta == delta.dy && delta.dx == 0.0)");
    ;
  }).prototype = src__gestures__drag_details.DragUpdateDetails.prototype;
  dart.addTypeTests(src__gestures__drag_details.DragUpdateDetails);
  const sourceTimeStamp$0 = Symbol("DragUpdateDetails.sourceTimeStamp");
  const delta$0 = Symbol("DragUpdateDetails.delta");
  const primaryDelta$ = Symbol("DragUpdateDetails.primaryDelta");
  const globalPosition$1 = Symbol("DragUpdateDetails.globalPosition");
  dart.setLibraryUri(src__gestures__drag_details.DragUpdateDetails, "package:flutter_web/src/gestures/drag_details.dart");
  dart.setFieldSignature(src__gestures__drag_details.DragUpdateDetails, () => ({
    __proto__: dart.getFields(src__gestures__drag_details.DragUpdateDetails.__proto__),
    sourceTimeStamp: dart.finalFieldType(core.Duration),
    delta: dart.finalFieldType(ui$.Offset),
    primaryDelta: dart.finalFieldType(core.double),
    globalPosition: dart.finalFieldType(ui$.Offset)
  }));
  dart.defineExtensionMethods(src__gestures__drag_details.DragUpdateDetails, ['toString']);
  src__gestures__drag_details.DragEndDetails = class DragEndDetails extends core.Object {
    get velocity() {
      return this[velocity$0];
    }
    set velocity(value) {
      super.velocity = value;
    }
    get primaryVelocity() {
      return this[primaryVelocity$];
    }
    set primaryVelocity(value) {
      super.primaryVelocity = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.velocity) + ")";
    }
  };
  (src__gestures__drag_details.DragEndDetails.new = function(opts) {
    let velocity = opts && 'velocity' in opts ? opts.velocity : src__gestures__velocity_tracker.Velocity.zero;
    let primaryVelocity = opts && 'primaryVelocity' in opts ? opts.primaryVelocity : null;
    this[velocity$0] = velocity;
    this[primaryVelocity$] = primaryVelocity;
    if (!(velocity != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/drag_details.dart", 170, 16, "velocity != null");
    if (!(primaryVelocity == null || primaryVelocity == velocity.pixelsPerSecond.dx || primaryVelocity == velocity.pixelsPerSecond.dy)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/drag_details.dart", 171, 16, "primaryVelocity == null ||\n            primaryVelocity == velocity.pixelsPerSecond.dx ||\n            primaryVelocity == velocity.pixelsPerSecond.dy");
    ;
  }).prototype = src__gestures__drag_details.DragEndDetails.prototype;
  dart.addTypeTests(src__gestures__drag_details.DragEndDetails);
  const velocity$0 = Symbol("DragEndDetails.velocity");
  const primaryVelocity$ = Symbol("DragEndDetails.primaryVelocity");
  dart.setLibraryUri(src__gestures__drag_details.DragEndDetails, "package:flutter_web/src/gestures/drag_details.dart");
  dart.setFieldSignature(src__gestures__drag_details.DragEndDetails, () => ({
    __proto__: dart.getFields(src__gestures__drag_details.DragEndDetails.__proto__),
    velocity: dart.finalFieldType(src__gestures__velocity_tracker.Velocity),
    primaryVelocity: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__gestures__drag_details.DragEndDetails, ['toString']);
  src__gestures__drag.Drag = class Drag extends core.Object {
    update(details) {
    }
    end(details) {
    }
    cancel() {
    }
  };
  (src__gestures__drag.Drag.new = function() {
    ;
  }).prototype = src__gestures__drag.Drag.prototype;
  dart.addTypeTests(src__gestures__drag.Drag);
  dart.setMethodSignature(src__gestures__drag.Drag, () => ({
    __proto__: dart.getMethods(src__gestures__drag.Drag.__proto__),
    update: dart.fnType(dart.void, [src__gestures__drag_details.DragUpdateDetails]),
    end: dart.fnType(dart.void, [src__gestures__drag_details.DragEndDetails]),
    cancel: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(src__gestures__drag.Drag, "package:flutter_web/src/gestures/drag.dart");
  src__gestures__tap.TapDownDetails = class TapDownDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$2];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get kind() {
      return this[kind$0];
    }
    set kind(value) {
      super.kind = value;
    }
  };
  (src__gestures__tap.TapDownDetails.new = function(opts) {
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : ui$.Offset.zero;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[globalPosition$2] = globalPosition;
    this[kind$0] = kind;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/tap.dart", 26, 15, "globalPosition != null");
    ;
  }).prototype = src__gestures__tap.TapDownDetails.prototype;
  dart.addTypeTests(src__gestures__tap.TapDownDetails);
  const globalPosition$2 = Symbol("TapDownDetails.globalPosition");
  const kind$0 = Symbol("TapDownDetails.kind");
  dart.setLibraryUri(src__gestures__tap.TapDownDetails, "package:flutter_web/src/gestures/tap.dart");
  dart.setFieldSignature(src__gestures__tap.TapDownDetails, () => ({
    __proto__: dart.getFields(src__gestures__tap.TapDownDetails.__proto__),
    globalPosition: dart.finalFieldType(ui$.Offset),
    kind: dart.finalFieldType(ui$.PointerDeviceKind)
  }));
  src__gestures__tap.TapUpDetails = class TapUpDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$3];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
  };
  (src__gestures__tap.TapUpDetails.new = function(opts) {
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : ui$.Offset.zero;
    this[globalPosition$3] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/tap.dart", 56, 16, "globalPosition != null");
    ;
  }).prototype = src__gestures__tap.TapUpDetails.prototype;
  dart.addTypeTests(src__gestures__tap.TapUpDetails);
  const globalPosition$3 = Symbol("TapUpDetails.globalPosition");
  dart.setLibraryUri(src__gestures__tap.TapUpDetails, "package:flutter_web/src/gestures/tap.dart");
  dart.setFieldSignature(src__gestures__tap.TapUpDetails, () => ({
    __proto__: dart.getFields(src__gestures__tap.TapUpDetails.__proto__),
    globalPosition: dart.finalFieldType(ui$.Offset)
  }));
  const _sentTapDown = dart.privateName(src__gestures__tap, "_sentTapDown");
  const _wonArenaForPrimaryPointer = dart.privateName(src__gestures__tap, "_wonArenaForPrimaryPointer");
  const _finalPosition = dart.privateName(src__gestures__tap, "_finalPosition");
  const _initialButtons = dart.privateName(src__gestures__tap, "_initialButtons");
  const _checkUp = dart.privateName(src__gestures__tap, "_checkUp");
  const _checkCancel = dart.privateName(src__gestures__tap, "_checkCancel");
  const _reset = dart.privateName(src__gestures__tap, "_reset");
  const _checkDown = dart.privateName(src__gestures__tap, "_checkDown");
  src__gestures__tap.TapGestureRecognizer = class TapGestureRecognizer extends src__gestures__recognizer.PrimaryPointerGestureRecognizer {
    get onTapDown() {
      return this[onTapDown];
    }
    set onTapDown(value) {
      this[onTapDown] = value;
    }
    get onTapUp() {
      return this[onTapUp];
    }
    set onTapUp(value) {
      this[onTapUp] = value;
    }
    get onTap() {
      return this[onTap];
    }
    set onTap(value) {
      this[onTap] = value;
    }
    get onTapCancel() {
      return this[onTapCancel];
    }
    set onTapCancel(value) {
      this[onTapCancel] = value;
    }
    get onSecondaryTapDown() {
      return this[onSecondaryTapDown];
    }
    set onSecondaryTapDown(value) {
      this[onSecondaryTapDown] = value;
    }
    get onSecondaryTapUp() {
      return this[onSecondaryTapUp];
    }
    set onSecondaryTapUp(value) {
      this[onSecondaryTapUp] = value;
    }
    get onSecondaryTapCancel() {
      return this[onSecondaryTapCancel];
    }
    set onSecondaryTapCancel(value) {
      this[onSecondaryTapCancel] = value;
    }
    isPointerAllowed(event) {
      switch (event.buttons) {
        case src__gestures__events.kPrimaryButton:
        {
          if (this.onTapDown == null && this.onTap == null && this.onTapUp == null && this.onTapCancel == null) return false;
          break;
        }
        case src__gestures__events.kSecondaryButton:
        {
          if (this.onSecondaryTapDown == null && this.onSecondaryTapUp == null && this.onSecondaryTapCancel == null) return false;
          break;
        }
        default:
        {
          return false;
        }
      }
      return super.isPointerAllowed(event);
    }
    addAllowedPointer(event) {
      super.addAllowedPointer(event);
      this[_initialButtons] = event.buttons;
    }
    handlePrimaryPointer(event) {
      if (src__gestures__events.PointerUpEvent.is(event)) {
        this[_finalPosition] = event.position;
        this[_checkUp]();
      } else if (src__gestures__events.PointerCancelEvent.is(event)) {
        this.resolve(src__gestures__arena.GestureDisposition.rejected);
        if (dart.test(this[_sentTapDown])) {
          this[_checkCancel]("");
        }
        this[_reset]();
      } else if (event.buttons != this[_initialButtons]) {
        this.resolve(src__gestures__arena.GestureDisposition.rejected);
        this.stopTrackingPointer(this.primaryPointer);
      }
    }
    resolve(disposition) {
      if (dart.test(this[_wonArenaForPrimaryPointer]) && dart.equals(disposition, src__gestures__arena.GestureDisposition.rejected)) {
        if (!dart.test(this[_sentTapDown])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/tap.dart", 284, 14, "_sentTapDown");
        this[_checkCancel]("spontaneous ");
        this[_reset]();
      }
      super.resolve(disposition);
    }
    didExceedDeadlineWithEvent(event) {
      this[_checkDown](event.pointer);
    }
    acceptGesture(pointer) {
      super.acceptGesture(pointer);
      if (pointer == this.primaryPointer) {
        this[_checkDown](pointer);
        this[_wonArenaForPrimaryPointer] = true;
        this[_checkUp]();
      }
    }
    rejectGesture(pointer) {
      super.rejectGesture(pointer);
      if (pointer == this.primaryPointer) {
        if (!!dart.equals(this.state, src__gestures__recognizer.GestureRecognizerState.possible)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/tap.dart", 311, 14, "state != GestureRecognizerState.possible");
        if (dart.test(this[_sentTapDown])) this[_checkCancel]("forced ");
        this[_reset]();
      }
    }
    [_checkDown](pointer) {
      if (dart.test(this[_sentTapDown])) {
        return;
      }
      let details = new src__gestures__tap.TapDownDetails.new({globalPosition: this.initialPosition, kind: this.getKindForPointer(pointer)});
      switch (this[_initialButtons]) {
        case src__gestures__events.kPrimaryButton:
        {
          if (this.onTapDown != null) this.invokeCallback(dart.void, "onTapDown", dart.fn(() => this.onTapDown(details), VoidTovoid()));
          break;
        }
        case src__gestures__events.kSecondaryButton:
        {
          if (this.onSecondaryTapDown != null) this.invokeCallback(dart.void, "onSecondaryTapDown", dart.fn(() => this.onSecondaryTapDown(details), VoidTovoid()));
          break;
        }
        default:
      }
      this[_sentTapDown] = true;
    }
    [_checkUp]() {
      if (!dart.test(this[_wonArenaForPrimaryPointer]) || this[_finalPosition] == null) {
        return;
      }
      let details = new src__gestures__tap.TapUpDetails.new({globalPosition: this[_finalPosition]});
      switch (this[_initialButtons]) {
        case src__gestures__events.kPrimaryButton:
        {
          if (this.onTapUp != null) this.invokeCallback(dart.void, "onTapUp", dart.fn(() => this.onTapUp(details), VoidTovoid()));
          if (this.onTap != null) this.invokeCallback(dart.void, "onTap", this.onTap);
          break;
        }
        case src__gestures__events.kSecondaryButton:
        {
          if (this.onSecondaryTapUp != null) this.invokeCallback(dart.void, "onSecondaryTapUp", dart.fn(() => this.onSecondaryTapUp(details), VoidTovoid()));
          break;
        }
        default:
      }
      this[_reset]();
    }
    [_checkCancel](note) {
      switch (this[_initialButtons]) {
        case src__gestures__events.kPrimaryButton:
        {
          if (this.onTapCancel != null) this.invokeCallback(dart.void, dart.str(note) + "onTapCancel", this.onTapCancel);
          break;
        }
        case src__gestures__events.kSecondaryButton:
        {
          if (this.onSecondaryTapCancel != null) this.invokeCallback(dart.void, dart.str(note) + "onSecondaryTapCancel", this.onSecondaryTapCancel);
          break;
        }
        default:
      }
    }
    [_reset]() {
      this[_sentTapDown] = false;
      this[_wonArenaForPrimaryPointer] = false;
      this[_finalPosition] = null;
      this[_initialButtons] = null;
    }
    get debugDescription() {
      return "tap";
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new src__foundation__diagnostics.FlagProperty.new("wonArenaForPrimaryPointer", {value: this[_wonArenaForPrimaryPointer], ifTrue: "won arena"}));
      properties.add(new (DiagnosticsPropertyOfOffset()).new("finalPosition", this[_finalPosition], {defaultValue: null}));
      properties.add(new src__foundation__diagnostics.FlagProperty.new("sentTapDown", {value: this[_sentTapDown], ifTrue: "sent tap down"}));
    }
  };
  (src__gestures__tap.TapGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    this[onTapDown] = null;
    this[onTapUp] = null;
    this[onTap] = null;
    this[onTapCancel] = null;
    this[onSecondaryTapDown] = null;
    this[onSecondaryTapUp] = null;
    this[onSecondaryTapCancel] = null;
    this[_sentTapDown] = false;
    this[_wonArenaForPrimaryPointer] = false;
    this[_finalPosition] = null;
    this[_initialButtons] = null;
    src__gestures__tap.TapGestureRecognizer.__proto__.new.call(this, {deadline: src__gestures__constants.kPressTimeout, debugOwner: debugOwner});
    ;
  }).prototype = src__gestures__tap.TapGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__tap.TapGestureRecognizer);
  const onTapDown = Symbol("TapGestureRecognizer.onTapDown");
  const onTapUp = Symbol("TapGestureRecognizer.onTapUp");
  const onTap = Symbol("TapGestureRecognizer.onTap");
  const onTapCancel = Symbol("TapGestureRecognizer.onTapCancel");
  const onSecondaryTapDown = Symbol("TapGestureRecognizer.onSecondaryTapDown");
  const onSecondaryTapUp = Symbol("TapGestureRecognizer.onSecondaryTapUp");
  const onSecondaryTapCancel = Symbol("TapGestureRecognizer.onSecondaryTapCancel");
  dart.setMethodSignature(src__gestures__tap.TapGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__tap.TapGestureRecognizer.__proto__),
    handlePrimaryPointer: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    [_checkDown]: dart.fnType(dart.void, [core.int]),
    [_checkUp]: dart.fnType(dart.void, []),
    [_checkCancel]: dart.fnType(dart.void, [core.String]),
    [_reset]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__gestures__tap.TapGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__tap.TapGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__tap.TapGestureRecognizer, "package:flutter_web/src/gestures/tap.dart");
  dart.setFieldSignature(src__gestures__tap.TapGestureRecognizer, () => ({
    __proto__: dart.getFields(src__gestures__tap.TapGestureRecognizer.__proto__),
    onTapDown: dart.fieldType(dart.fnType(dart.void, [src__gestures__tap.TapDownDetails])),
    onTapUp: dart.fieldType(dart.fnType(dart.void, [src__gestures__tap.TapUpDetails])),
    onTap: dart.fieldType(dart.fnType(dart.void, [])),
    onTapCancel: dart.fieldType(dart.fnType(dart.void, [])),
    onSecondaryTapDown: dart.fieldType(dart.fnType(dart.void, [src__gestures__tap.TapDownDetails])),
    onSecondaryTapUp: dart.fieldType(dart.fnType(dart.void, [src__gestures__tap.TapUpDetails])),
    onSecondaryTapCancel: dart.fieldType(dart.fnType(dart.void, [])),
    [_sentTapDown]: dart.fieldType(core.bool),
    [_wonArenaForPrimaryPointer]: dart.fieldType(core.bool),
    [_finalPosition]: dart.fieldType(ui$.Offset),
    [_initialButtons]: dart.fieldType(core.int)
  }));
  src__gestures__eager.EagerGestureRecognizer = class EagerGestureRecognizer extends src__gestures__recognizer.OneSequenceGestureRecognizer {
    addAllowedPointer(event) {
      this.startTrackingPointer(event.pointer);
      this.resolve(src__gestures__arena.GestureDisposition.accepted);
      this.stopTrackingPointer(event.pointer);
    }
    get debugDescription() {
      return "eager";
    }
    didStopTrackingLastPointer(pointer) {
    }
    handleEvent(event) {
    }
  };
  (src__gestures__eager.EagerGestureRecognizer.new = function(opts) {
    let kind = opts && 'kind' in opts ? opts.kind : null;
    src__gestures__eager.EagerGestureRecognizer.__proto__.new.call(this, {kind: kind});
    ;
  }).prototype = src__gestures__eager.EagerGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__eager.EagerGestureRecognizer);
  dart.setMethodSignature(src__gestures__eager.EagerGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__eager.EagerGestureRecognizer.__proto__),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int]),
    handleEvent: dart.fnType(dart.void, [src__gestures__events.PointerEvent])
  }));
  dart.setGetterSignature(src__gestures__eager.EagerGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__eager.EagerGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__eager.EagerGestureRecognizer, "package:flutter_web/src/gestures/eager.dart");
  const _name$2 = dart.privateName(src__gestures__force_press, "_name");
  src__gestures__force_press._ForceState = class _ForceState extends core.Object {
    toString() {
      return this[_name$2];
    }
  };
  (src__gestures__force_press._ForceState.new = function(index, _name) {
    this.index = index;
    this[_name$2] = _name;
    ;
  }).prototype = src__gestures__force_press._ForceState.prototype;
  dart.addTypeTests(src__gestures__force_press._ForceState);
  dart.setLibraryUri(src__gestures__force_press._ForceState, "package:flutter_web/src/gestures/force_press.dart");
  dart.setFieldSignature(src__gestures__force_press._ForceState, () => ({
    __proto__: dart.getFields(src__gestures__force_press._ForceState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$2]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__gestures__force_press._ForceState, ['toString']);
  src__gestures__force_press._ForceState.ready = dart.const(new src__gestures__force_press._ForceState.new(0, "_ForceState.ready"));
  src__gestures__force_press._ForceState.possible = dart.const(new src__gestures__force_press._ForceState.new(1, "_ForceState.possible"));
  src__gestures__force_press._ForceState.accepted = dart.const(new src__gestures__force_press._ForceState.new(2, "_ForceState.accepted"));
  src__gestures__force_press._ForceState.started = dart.const(new src__gestures__force_press._ForceState.new(3, "_ForceState.started"));
  src__gestures__force_press._ForceState.peaked = dart.const(new src__gestures__force_press._ForceState.new(4, "_ForceState.peaked"));
  src__gestures__force_press._ForceState.values = dart.constList([src__gestures__force_press._ForceState.ready, src__gestures__force_press._ForceState.possible, src__gestures__force_press._ForceState.accepted, src__gestures__force_press._ForceState.started, src__gestures__force_press._ForceState.peaked], src__gestures__force_press._ForceState);
  src__gestures__force_press.ForcePressDetails = class ForcePressDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$4];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get pressure() {
      return this[pressure$0];
    }
    set pressure(value) {
      super.pressure = value;
    }
  };
  (src__gestures__force_press.ForcePressDetails.new = function(opts) {
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : null;
    let pressure = opts && 'pressure' in opts ? opts.pressure : null;
    this[globalPosition$4] = globalPosition;
    this[pressure$0] = pressure;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/force_press.dart", 55, 16, "globalPosition != null");
    if (!(pressure != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/force_press.dart", 56, 16, "pressure != null");
    ;
  }).prototype = src__gestures__force_press.ForcePressDetails.prototype;
  dart.addTypeTests(src__gestures__force_press.ForcePressDetails);
  const globalPosition$4 = Symbol("ForcePressDetails.globalPosition");
  const pressure$0 = Symbol("ForcePressDetails.pressure");
  dart.setLibraryUri(src__gestures__force_press.ForcePressDetails, "package:flutter_web/src/gestures/force_press.dart");
  dart.setFieldSignature(src__gestures__force_press.ForcePressDetails, () => ({
    __proto__: dart.getFields(src__gestures__force_press.ForcePressDetails.__proto__),
    globalPosition: dart.finalFieldType(ui$.Offset),
    pressure: dart.finalFieldType(core.double)
  }));
  const _lastPosition = dart.privateName(src__gestures__force_press, "_lastPosition");
  const _lastPressure = dart.privateName(src__gestures__force_press, "_lastPressure");
  const _state$ = dart.privateName(src__gestures__force_press, "_state");
  src__gestures__force_press.ForcePressGestureRecognizer = class ForcePressGestureRecognizer extends src__gestures__recognizer.OneSequenceGestureRecognizer {
    get onStart() {
      return this[onStart$];
    }
    set onStart(value) {
      this[onStart$] = value;
    }
    get onUpdate() {
      return this[onUpdate$];
    }
    set onUpdate(value) {
      this[onUpdate$] = value;
    }
    get onPeak() {
      return this[onPeak];
    }
    set onPeak(value) {
      this[onPeak] = value;
    }
    get onEnd() {
      return this[onEnd$];
    }
    set onEnd(value) {
      this[onEnd$] = value;
    }
    get startPressure() {
      return this[startPressure$];
    }
    set startPressure(value) {
      super.startPressure = value;
    }
    get peakPressure() {
      return this[peakPressure$];
    }
    set peakPressure(value) {
      super.peakPressure = value;
    }
    get interpolation() {
      return this[interpolation$];
    }
    set interpolation(value) {
      super.interpolation = value;
    }
    addAllowedPointer(event) {
      if (!src__gestures__events.PointerUpEvent.is(event) && dart.notNull(event.pressureMax) <= 1.0) {
        this.resolve(src__gestures__arena.GestureDisposition.rejected);
      } else {
        this.startTrackingPointer(event.pointer);
        if (dart.equals(this[_state$], src__gestures__force_press._ForceState.ready)) {
          this[_state$] = src__gestures__force_press._ForceState.possible;
          this[_lastPosition] = event.position;
        }
      }
    }
    handleEvent(event) {
      if (!!dart.equals(this[_state$], src__gestures__force_press._ForceState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/force_press.dart", 232, 12, "_state != _ForceState.ready");
      if (src__gestures__events.PointerMoveEvent.is(event) || src__gestures__events.PointerDownEvent.is(event)) {
        if (dart.notNull(event.pressure) > dart.notNull(event.pressureMax) || dart.notNull(event.pressure) < dart.notNull(event.pressureMin)) {
          src__foundation__print.debugPrint("The reported device pressure " + dart.toString(event.pressure) + " is outside of the device pressure range where: " + dart.toString(event.pressureMin) + " <= pressure <= " + dart.toString(event.pressureMax));
        }
        let pressure = this.interpolation(event.pressureMin, event.pressureMax, event.pressure);
        if (!(dart.notNull(pressure) >= 0.0 && dart.notNull(pressure) <= 1.0 || pressure[$isNaN])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/force_press.dart", 249, 14, "(pressure >= 0.0 &&\n                  pressure <=\n                      1.0) || // Interpolated pressure must be between 1.0 and 0.0...\n              pressure\n                  .isNaN");
        this[_lastPosition] = event.position;
        this[_lastPressure] = pressure;
        if (dart.equals(this[_state$], src__gestures__force_press._ForceState.possible)) {
          if (dart.notNull(pressure) > dart.notNull(this.startPressure)) {
            this[_state$] = src__gestures__force_press._ForceState.started;
            this.resolve(src__gestures__arena.GestureDisposition.accepted);
          } else if (dart.notNull(event.delta.distanceSquared) > dart.notNull(src__gestures__constants.kTouchSlop)) {
            this.resolve(src__gestures__arena.GestureDisposition.rejected);
          }
        }
        if (dart.notNull(pressure) > dart.notNull(this.startPressure) && dart.equals(this[_state$], src__gestures__force_press._ForceState.accepted)) {
          this[_state$] = src__gestures__force_press._ForceState.started;
          if (this.onStart != null) {
            this.invokeCallback(dart.void, "onStart", dart.fn(() => this.onStart(new src__gestures__force_press.ForcePressDetails.new({pressure: pressure, globalPosition: this[_lastPosition]})), VoidTovoid()));
          }
        }
        if (this.onPeak != null && dart.notNull(pressure) > dart.notNull(this.peakPressure) && dart.equals(this[_state$], src__gestures__force_press._ForceState.started)) {
          this[_state$] = src__gestures__force_press._ForceState.peaked;
          if (this.onPeak != null) {
            this.invokeCallback(dart.void, "onPeak", dart.fn(() => this.onPeak(new src__gestures__force_press.ForcePressDetails.new({pressure: pressure, globalPosition: event.position})), VoidTovoid()));
          }
        }
        if (this.onUpdate != null && !pressure[$isNaN] && (dart.equals(this[_state$], src__gestures__force_press._ForceState.started) || dart.equals(this[_state$], src__gestures__force_press._ForceState.peaked))) {
          if (this.onUpdate != null) {
            this.invokeCallback(dart.void, "onUpdate", dart.fn(() => this.onUpdate(new src__gestures__force_press.ForcePressDetails.new({pressure: pressure, globalPosition: event.position})), VoidTovoid()));
          }
        }
      }
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    acceptGesture(pointer) {
      if (dart.equals(this[_state$], src__gestures__force_press._ForceState.possible)) this[_state$] = src__gestures__force_press._ForceState.accepted;
      if (this.onStart != null && dart.equals(this[_state$], src__gestures__force_press._ForceState.started)) {
        this.invokeCallback(dart.void, "onStart", dart.fn(() => this.onStart(new src__gestures__force_press.ForcePressDetails.new({pressure: this[_lastPressure], globalPosition: this[_lastPosition]})), VoidTovoid()));
      }
    }
    didStopTrackingLastPointer(pointer) {
      let wasAccepted = dart.equals(this[_state$], src__gestures__force_press._ForceState.started) || dart.equals(this[_state$], src__gestures__force_press._ForceState.peaked);
      if (dart.equals(this[_state$], src__gestures__force_press._ForceState.possible)) {
        this.resolve(src__gestures__arena.GestureDisposition.rejected);
        return;
      }
      if (wasAccepted && this.onEnd != null) {
        if (this.onEnd != null) {
          this.invokeCallback(dart.void, "onEnd", dart.fn(() => this.onEnd(new src__gestures__force_press.ForcePressDetails.new({pressure: 0.0, globalPosition: this[_lastPosition]})), VoidTovoid()));
        }
      }
      this[_state$] = src__gestures__force_press._ForceState.ready;
    }
    rejectGesture(pointer) {
      this.stopTrackingPointer(pointer);
      this.didStopTrackingLastPointer(pointer);
    }
    static _inverseLerp(min, max, t) {
      if (!(dart.notNull(min) <= dart.notNull(max))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/force_press.dart", 351, 12, "min <= max");
      let value = (dart.notNull(t) - dart.notNull(min)) / (dart.notNull(max) - dart.notNull(min));
      if (!value[$isNaN]) value = value[$clamp](0.0, 1.0);
      return value;
    }
    get debugDescription() {
      return "force press";
    }
  };
  (src__gestures__force_press.ForcePressGestureRecognizer.new = function(opts) {
    let startPressure = opts && 'startPressure' in opts ? opts.startPressure : 0.4;
    let peakPressure = opts && 'peakPressure' in opts ? opts.peakPressure : 0.85;
    let interpolation = opts && 'interpolation' in opts ? opts.interpolation : dart.fn(src__gestures__force_press.ForcePressGestureRecognizer._inverseLerp, doubleAnddoubleAnddoubleTodouble());
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onStart$] = null;
    this[onUpdate$] = null;
    this[onPeak] = null;
    this[onEnd$] = null;
    this[_lastPosition] = null;
    this[_lastPressure] = null;
    this[_state$] = src__gestures__force_press._ForceState.ready;
    this[startPressure$] = startPressure;
    this[peakPressure$] = peakPressure;
    this[interpolation$] = interpolation;
    if (!(startPressure != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/force_press.dart", 131, 16, "startPressure != null");
    if (!(peakPressure != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/force_press.dart", 132, 16, "peakPressure != null");
    if (!(interpolation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/force_press.dart", 133, 16, "interpolation != null");
    if (!(dart.notNull(peakPressure) > dart.notNull(startPressure))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/force_press.dart", 134, 16, "peakPressure > startPressure");
    src__gestures__force_press.ForcePressGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = src__gestures__force_press.ForcePressGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__force_press.ForcePressGestureRecognizer);
  const onStart$ = Symbol("ForcePressGestureRecognizer.onStart");
  const onUpdate$ = Symbol("ForcePressGestureRecognizer.onUpdate");
  const onPeak = Symbol("ForcePressGestureRecognizer.onPeak");
  const onEnd$ = Symbol("ForcePressGestureRecognizer.onEnd");
  const startPressure$ = Symbol("ForcePressGestureRecognizer.startPressure");
  const peakPressure$ = Symbol("ForcePressGestureRecognizer.peakPressure");
  const interpolation$ = Symbol("ForcePressGestureRecognizer.interpolation");
  dart.setMethodSignature(src__gestures__force_press.ForcePressGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__force_press.ForcePressGestureRecognizer.__proto__),
    addAllowedPointer: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    handleEvent: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(src__gestures__force_press.ForcePressGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__force_press.ForcePressGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__force_press.ForcePressGestureRecognizer, "package:flutter_web/src/gestures/force_press.dart");
  dart.setFieldSignature(src__gestures__force_press.ForcePressGestureRecognizer, () => ({
    __proto__: dart.getFields(src__gestures__force_press.ForcePressGestureRecognizer.__proto__),
    onStart: dart.fieldType(dart.fnType(dart.void, [src__gestures__force_press.ForcePressDetails])),
    onUpdate: dart.fieldType(dart.fnType(dart.void, [src__gestures__force_press.ForcePressDetails])),
    onPeak: dart.fieldType(dart.fnType(dart.void, [src__gestures__force_press.ForcePressDetails])),
    onEnd: dart.fieldType(dart.fnType(dart.void, [src__gestures__force_press.ForcePressDetails])),
    startPressure: dart.finalFieldType(core.double),
    peakPressure: dart.finalFieldType(core.double),
    interpolation: dart.finalFieldType(dart.fnType(core.double, [core.double, core.double, core.double])),
    [_lastPosition]: dart.fieldType(ui$.Offset),
    [_lastPressure]: dart.fieldType(core.double),
    [_state$]: dart.fieldType(src__gestures__force_press._ForceState)
  }));
  src__gestures__mouse_tracking.MouseTrackerAnnotation = class MouseTrackerAnnotation extends core.Object {
    get onEnter() {
      return this[onEnter$];
    }
    set onEnter(value) {
      super.onEnter = value;
    }
    get onHover() {
      return this[onHover$];
    }
    set onHover(value) {
      super.onHover = value;
    }
    get onExit() {
      return this[onExit$];
    }
    set onExit(value) {
      super.onExit = value;
    }
    toString() {
      let none = this.onEnter == null && this.onExit == null && this.onHover == null ? " <none>" : "";
      return "[" + dart.str(this[$runtimeType]) + this[$hashCode][$toRadixString](16) + none + (this.onEnter == null ? "" : " onEnter") + (this.onHover == null ? "" : " onHover") + (this.onExit == null ? "" : " onExit") + "]";
    }
  };
  (src__gestures__mouse_tracking.MouseTrackerAnnotation.new = function(opts) {
    let onEnter = opts && 'onEnter' in opts ? opts.onEnter : null;
    let onHover = opts && 'onHover' in opts ? opts.onHover : null;
    let onExit = opts && 'onExit' in opts ? opts.onExit : null;
    this[onEnter$] = onEnter;
    this[onHover$] = onHover;
    this[onExit$] = onExit;
    ;
  }).prototype = src__gestures__mouse_tracking.MouseTrackerAnnotation.prototype;
  dart.addTypeTests(src__gestures__mouse_tracking.MouseTrackerAnnotation);
  const onEnter$ = Symbol("MouseTrackerAnnotation.onEnter");
  const onHover$ = Symbol("MouseTrackerAnnotation.onHover");
  const onExit$ = Symbol("MouseTrackerAnnotation.onExit");
  dart.setLibraryUri(src__gestures__mouse_tracking.MouseTrackerAnnotation, "package:flutter_web/src/gestures/mouse_tracking.dart");
  dart.setFieldSignature(src__gestures__mouse_tracking.MouseTrackerAnnotation, () => ({
    __proto__: dart.getFields(src__gestures__mouse_tracking.MouseTrackerAnnotation.__proto__),
    onEnter: dart.finalFieldType(dart.fnType(dart.void, [src__gestures__events.PointerEnterEvent])),
    onHover: dart.finalFieldType(dart.fnType(dart.void, [src__gestures__events.PointerHoverEvent])),
    onExit: dart.finalFieldType(dart.fnType(dart.void, [src__gestures__events.PointerExitEvent]))
  }));
  dart.defineExtensionMethods(src__gestures__mouse_tracking.MouseTrackerAnnotation, ['toString']);
  src__gestures__mouse_tracking._TrackedAnnotation = class _TrackedAnnotation extends core.Object {};
  (src__gestures__mouse_tracking._TrackedAnnotation.new = function(annotation) {
    this.activeDevices = LinkedHashSetOfint().new();
    this.annotation = annotation;
    ;
  }).prototype = src__gestures__mouse_tracking._TrackedAnnotation.prototype;
  dart.addTypeTests(src__gestures__mouse_tracking._TrackedAnnotation);
  dart.setLibraryUri(src__gestures__mouse_tracking._TrackedAnnotation, "package:flutter_web/src/gestures/mouse_tracking.dart");
  dart.setFieldSignature(src__gestures__mouse_tracking._TrackedAnnotation, () => ({
    __proto__: dart.getFields(src__gestures__mouse_tracking._TrackedAnnotation.__proto__),
    annotation: dart.finalFieldType(src__gestures__mouse_tracking.MouseTrackerAnnotation),
    activeDevices: dart.fieldType(core.Set$(core.int))
  }));
  const _trackedAnnotations = dart.privateName(src__gestures__mouse_tracking, "_trackedAnnotations");
  const _postFrameCheckScheduled = dart.privateName(src__gestures__mouse_tracking, "_postFrameCheckScheduled");
  const _lastMouseEvent = dart.privateName(src__gestures__mouse_tracking, "_lastMouseEvent");
  const _handleEvent$ = dart.privateName(src__gestures__mouse_tracking, "_handleEvent");
  const _scheduleMousePositionCheck = dart.privateName(src__gestures__mouse_tracking, "_scheduleMousePositionCheck");
  const _findAnnotation = dart.privateName(src__gestures__mouse_tracking, "_findAnnotation");
  const _addMouseEvent = dart.privateName(src__gestures__mouse_tracking, "_addMouseEvent");
  const _removeMouseEvent = dart.privateName(src__gestures__mouse_tracking, "_removeMouseEvent");
  src__gestures__mouse_tracking.MouseTracker = class MouseTracker extends src__foundation__change_notifier.ChangeNotifier {
    get annotationFinder() {
      return this[annotationFinder$];
    }
    set annotationFinder(value) {
      super.annotationFinder = value;
    }
    attachAnnotation(annotation) {
      this[_trackedAnnotations][$_set](annotation, new src__gestures__mouse_tracking._TrackedAnnotation.new(annotation));
      this[_scheduleMousePositionCheck]();
    }
    detachAnnotation(annotation) {
      let trackedAnnotation = this[_findAnnotation](annotation);
      for (let deviceId of trackedAnnotation.activeDevices) {
        if (annotation.onExit != null) {
          annotation.onExit(new src__gestures__events.PointerExitEvent.fromMouseEvent(this[_lastMouseEvent][$_get](deviceId)));
        }
      }
      this[_trackedAnnotations][$remove](annotation);
    }
    [_scheduleMousePositionCheck]() {
      if (dart.test(this[_trackedAnnotations][$isNotEmpty]) && !dart.test(this[_postFrameCheckScheduled])) {
        this[_postFrameCheckScheduled] = true;
        src__scheduler__binding.SchedulerBinding.instance.addPostFrameCallback(dart.fn(_ => {
          this[_postFrameCheckScheduled] = false;
          this.collectMousePositions();
        }, DurationToNull()));
        src__scheduler__binding.SchedulerBinding.instance.scheduleFrame();
      }
    }
    [_handleEvent$](event) {
      if (!dart.equals(event.kind, ui$.PointerDeviceKind.mouse)) {
        return;
      }
      let deviceId = event.device;
      if (src__gestures__events.PointerAddedEvent.is(event)) {
        this[_addMouseEvent](deviceId, event);
        return;
      }
      if (src__gestures__events.PointerRemovedEvent.is(event)) {
        this[_removeMouseEvent](deviceId);
        this[_scheduleMousePositionCheck]();
      } else {
        if (src__gestures__events.PointerMoveEvent.is(event) || src__gestures__events.PointerHoverEvent.is(event) || src__gestures__events.PointerDownEvent.is(event)) {
          if (!dart.test(this[_lastMouseEvent][$containsKey](deviceId)) || !dart.equals(this[_lastMouseEvent][$_get](deviceId).position, event.position)) {
            this[_scheduleMousePositionCheck]();
          }
          this[_addMouseEvent](deviceId, event);
        }
      }
    }
    [_findAnnotation](annotation) {
      let trackedAnnotation = this[_trackedAnnotations][$_get](annotation);
      if (!(trackedAnnotation != null)) dart.assertFailed("Unable to find annotation " + dart.str(annotation) + " in tracked annotations. " + "Check that attachAnnotation has been called for all annotated layers.", "org-dartlang-app:///packages/flutter_web/src/gestures/mouse_tracking.dart", 189, 9, "trackedAnnotation != null");
      return trackedAnnotation;
    }
    isAnnotationAttached(annotation) {
      return this[_trackedAnnotations][$containsKey](annotation);
    }
    collectMousePositions() {
      let t5, t5$, t5$0;
      const exitAnnotation = (trackedAnnotation, deviceId) => {
        let t5;
        if ((t5 = trackedAnnotation.annotation, t5 == null ? null : t5.onExit) != null && dart.test(trackedAnnotation.activeDevices.contains(deviceId))) {
          trackedAnnotation.annotation.onExit(new src__gestures__events.PointerExitEvent.fromMouseEvent(this[_lastMouseEvent][$_get](deviceId)));
          trackedAnnotation.activeDevices.remove(deviceId);
        }
      };
      dart.fn(exitAnnotation, _TrackedAnnotationAndintTovoid());
      function exitAllDevices(trackedAnnotation) {
        if (dart.test(trackedAnnotation.activeDevices[$isNotEmpty])) {
          let deviceIds = trackedAnnotation.activeDevices.toSet();
          for (let deviceId of deviceIds) {
            exitAnnotation(trackedAnnotation, deviceId);
          }
        }
      }
      dart.fn(exitAllDevices, _TrackedAnnotationTovoid());
      if (!dart.test(this.mouseIsConnected)) {
        this[_trackedAnnotations][$values][$forEach](exitAllDevices);
        return;
      }
      for (let deviceId of this[_lastMouseEvent][$keys]) {
        let lastEvent = this[_lastMouseEvent][$_get](deviceId);
        let hits = this.annotationFinder(lastEvent.position);
        if (dart.test(hits[$isEmpty])) {
          for (let trackedAnnotation of this[_trackedAnnotations][$values]) {
            exitAnnotation(trackedAnnotation, deviceId);
          }
          continue;
        }
        let hitAnnotations = hits[$map](src__gestures__mouse_tracking._TrackedAnnotation, dart.fn(hit => this[_findAnnotation](hit), MouseTrackerAnnotationTo_TrackedAnnotation()))[$toSet]();
        for (let hitAnnotation of hitAnnotations) {
          if (!dart.test(hitAnnotation.activeDevices.contains(deviceId))) {
            hitAnnotation.activeDevices.add(deviceId);
            if ((t5 = hitAnnotation.annotation, t5 == null ? null : t5.onEnter) != null) {
              hitAnnotation.annotation.onEnter(new src__gestures__events.PointerEnterEvent.fromMouseEvent(lastEvent));
            }
          }
          if ((t5$ = hitAnnotation.annotation, t5$ == null ? null : t5$.onHover) != null && src__gestures__events.PointerHoverEvent.is(lastEvent)) {
            hitAnnotation.annotation.onHover(lastEvent);
          }
          for (let trackedAnnotation of this[_trackedAnnotations][$values]) {
            if (dart.test(hitAnnotations.contains(trackedAnnotation))) {
              continue;
            }
            if (dart.test(trackedAnnotation.activeDevices.contains(deviceId))) {
              if ((t5$0 = trackedAnnotation.annotation, t5$0 == null ? null : t5$0.onExit) != null) {
                trackedAnnotation.annotation.onExit(new src__gestures__events.PointerExitEvent.fromMouseEvent(lastEvent));
              }
              trackedAnnotation.activeDevices.remove(deviceId);
            }
          }
        }
      }
    }
    [_addMouseEvent](deviceId, event) {
      let wasConnected = this.mouseIsConnected;
      this[_lastMouseEvent][$_set](deviceId, event);
      if (!dart.equals(this.mouseIsConnected, wasConnected)) {
        this.notifyListeners();
      }
    }
    [_removeMouseEvent](deviceId) {
      let wasConnected = this.mouseIsConnected;
      this[_lastMouseEvent][$remove](deviceId);
      if (!dart.equals(this.mouseIsConnected, wasConnected)) {
        this.notifyListeners();
      }
    }
    get mouseIsConnected() {
      return this[_lastMouseEvent][$isNotEmpty];
    }
  };
  (src__gestures__mouse_tracking.MouseTracker.new = function(router, annotationFinder) {
    this[_trackedAnnotations] = new (LinkedMapOfMouseTrackerAnnotation$_TrackedAnnotation()).new();
    this[_postFrameCheckScheduled] = false;
    this[_lastMouseEvent] = new (IdentityMapOfint$PointerEvent()).new();
    this[annotationFinder$] = annotationFinder;
    if (!(router != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/mouse_tracking.dart", 100, 16, "router != null");
    if (!(annotationFinder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/mouse_tracking.dart", 101, 16, "annotationFinder != null");
    src__gestures__mouse_tracking.MouseTracker.__proto__.new.call(this);
    router.addGlobalRoute(dart.bind(this, _handleEvent$));
  }).prototype = src__gestures__mouse_tracking.MouseTracker.prototype;
  dart.addTypeTests(src__gestures__mouse_tracking.MouseTracker);
  const annotationFinder$ = Symbol("MouseTracker.annotationFinder");
  dart.setMethodSignature(src__gestures__mouse_tracking.MouseTracker, () => ({
    __proto__: dart.getMethods(src__gestures__mouse_tracking.MouseTracker.__proto__),
    attachAnnotation: dart.fnType(dart.void, [src__gestures__mouse_tracking.MouseTrackerAnnotation]),
    detachAnnotation: dart.fnType(dart.void, [src__gestures__mouse_tracking.MouseTrackerAnnotation]),
    [_scheduleMousePositionCheck]: dart.fnType(dart.void, []),
    [_handleEvent$]: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    [_findAnnotation]: dart.fnType(src__gestures__mouse_tracking._TrackedAnnotation, [src__gestures__mouse_tracking.MouseTrackerAnnotation]),
    isAnnotationAttached: dart.fnType(core.bool, [src__gestures__mouse_tracking.MouseTrackerAnnotation]),
    collectMousePositions: dart.fnType(dart.void, []),
    [_addMouseEvent]: dart.fnType(dart.void, [core.int, src__gestures__events.PointerEvent]),
    [_removeMouseEvent]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(src__gestures__mouse_tracking.MouseTracker, () => ({
    __proto__: dart.getGetters(src__gestures__mouse_tracking.MouseTracker.__proto__),
    mouseIsConnected: core.bool
  }));
  dart.setLibraryUri(src__gestures__mouse_tracking.MouseTracker, "package:flutter_web/src/gestures/mouse_tracking.dart");
  dart.setFieldSignature(src__gestures__mouse_tracking.MouseTracker, () => ({
    __proto__: dart.getFields(src__gestures__mouse_tracking.MouseTracker.__proto__),
    annotationFinder: dart.finalFieldType(dart.fnType(core.Iterable$(src__gestures__mouse_tracking.MouseTrackerAnnotation), [ui$.Offset])),
    [_trackedAnnotations]: dart.finalFieldType(core.Map$(src__gestures__mouse_tracking.MouseTrackerAnnotation, src__gestures__mouse_tracking._TrackedAnnotation)),
    [_postFrameCheckScheduled]: dart.fieldType(core.bool),
    [_lastMouseEvent]: dart.finalFieldType(core.Map$(core.int, src__gestures__events.PointerEvent))
  }));
  const _timeout = dart.privateName(src__gestures__multitap, "_timeout");
  const _timer$0 = dart.privateName(src__gestures__multitap, "_timer");
  const _onTimeout = dart.privateName(src__gestures__multitap, "_onTimeout");
  src__gestures__multitap._CountdownZoned = class _CountdownZoned extends core.Object {
    get timeout() {
      return this[_timeout];
    }
    [_onTimeout]() {
      this[_timeout] = true;
    }
  };
  (src__gestures__multitap._CountdownZoned.new = function(opts) {
    let duration = opts && 'duration' in opts ? opts.duration : null;
    this[_timeout] = false;
    this[_timer$0] = null;
    if (!(duration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 46, 59, "duration != null");
    this[_timer$0] = async.Timer.new(duration, dart.bind(this, _onTimeout));
  }).prototype = src__gestures__multitap._CountdownZoned.prototype;
  dart.addTypeTests(src__gestures__multitap._CountdownZoned);
  dart.setMethodSignature(src__gestures__multitap._CountdownZoned, () => ({
    __proto__: dart.getMethods(src__gestures__multitap._CountdownZoned.__proto__),
    [_onTimeout]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__gestures__multitap._CountdownZoned, () => ({
    __proto__: dart.getGetters(src__gestures__multitap._CountdownZoned.__proto__),
    timeout: core.bool
  }));
  dart.setLibraryUri(src__gestures__multitap._CountdownZoned, "package:flutter_web/src/gestures/multitap.dart");
  dart.setFieldSignature(src__gestures__multitap._CountdownZoned, () => ({
    __proto__: dart.getFields(src__gestures__multitap._CountdownZoned.__proto__),
    [_timeout]: dart.fieldType(core.bool),
    [_timer$0]: dart.fieldType(async.Timer)
  }));
  const _isTrackingPointer = dart.privateName(src__gestures__multitap, "_isTrackingPointer");
  const _initialPosition = dart.privateName(src__gestures__multitap, "_initialPosition");
  const _doubleTapMinTimeCountdown = dart.privateName(src__gestures__multitap, "_doubleTapMinTimeCountdown");
  src__gestures__multitap._TapTracker = class _TapTracker extends core.Object {
    startTrackingPointer(route) {
      if (!dart.test(this[_isTrackingPointer])) {
        this[_isTrackingPointer] = true;
        src__gestures__binding.GestureBinding.instance.pointerRouter.addRoute(this.pointer, route);
      }
    }
    stopTrackingPointer(route) {
      if (dart.test(this[_isTrackingPointer])) {
        this[_isTrackingPointer] = false;
        src__gestures__binding.GestureBinding.instance.pointerRouter.removeRoute(this.pointer, route);
      }
    }
    isWithinTolerance(event, tolerance) {
      let offset = event.position['-'](this[_initialPosition]);
      return dart.notNull(offset.distance) <= dart.notNull(tolerance);
    }
    hasElapsedMinTime() {
      return this[_doubleTapMinTimeCountdown].timeout;
    }
    hasSameButton(event) {
      return event.buttons == this.initialButtons;
    }
  };
  (src__gestures__multitap._TapTracker.new = function(opts) {
    let event = opts && 'event' in opts ? opts.event : null;
    let entry = opts && 'entry' in opts ? opts.entry : null;
    let doubleTapMinTime = opts && 'doubleTapMinTime' in opts ? opts.doubleTapMinTime : null;
    this[_isTrackingPointer] = false;
    this.entry = entry;
    if (!(doubleTapMinTime != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 67, 16, "doubleTapMinTime != null");
    if (!(event != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 68, 16, "event != null");
    if (!(event.buttons != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 69, 16, "event.buttons != null");
    this.pointer = event.pointer;
    this[_initialPosition] = event.position;
    this.initialButtons = event.buttons;
    this[_doubleTapMinTimeCountdown] = new src__gestures__multitap._CountdownZoned.new({duration: doubleTapMinTime});
    ;
  }).prototype = src__gestures__multitap._TapTracker.prototype;
  dart.addTypeTests(src__gestures__multitap._TapTracker);
  dart.setMethodSignature(src__gestures__multitap._TapTracker, () => ({
    __proto__: dart.getMethods(src__gestures__multitap._TapTracker.__proto__),
    startTrackingPointer: dart.fnType(dart.void, [dart.fnType(dart.void, [src__gestures__events.PointerEvent])]),
    stopTrackingPointer: dart.fnType(dart.void, [dart.fnType(dart.void, [src__gestures__events.PointerEvent])]),
    isWithinTolerance: dart.fnType(core.bool, [src__gestures__events.PointerEvent, core.double]),
    hasElapsedMinTime: dart.fnType(core.bool, []),
    hasSameButton: dart.fnType(core.bool, [src__gestures__events.PointerDownEvent])
  }));
  dart.setLibraryUri(src__gestures__multitap._TapTracker, "package:flutter_web/src/gestures/multitap.dart");
  dart.setFieldSignature(src__gestures__multitap._TapTracker, () => ({
    __proto__: dart.getFields(src__gestures__multitap._TapTracker.__proto__),
    pointer: dart.finalFieldType(core.int),
    entry: dart.finalFieldType(src__gestures__arena.GestureArenaEntry),
    [_initialPosition]: dart.finalFieldType(ui$.Offset),
    initialButtons: dart.finalFieldType(core.int),
    [_doubleTapMinTimeCountdown]: dart.finalFieldType(src__gestures__multitap._CountdownZoned),
    [_isTrackingPointer]: dart.fieldType(core.bool)
  }));
  const _doubleTapTimer = dart.privateName(src__gestures__multitap, "_doubleTapTimer");
  const _firstTap = dart.privateName(src__gestures__multitap, "_firstTap");
  const _trackers = dart.privateName(src__gestures__multitap, "_trackers");
  const _reset$ = dart.privateName(src__gestures__multitap, "_reset");
  const _trackFirstTap = dart.privateName(src__gestures__multitap, "_trackFirstTap");
  const _stopDoubleTapTimer = dart.privateName(src__gestures__multitap, "_stopDoubleTapTimer");
  const _handleEvent$0 = dart.privateName(src__gestures__multitap, "_handleEvent");
  const _registerFirstTap = dart.privateName(src__gestures__multitap, "_registerFirstTap");
  const _registerSecondTap = dart.privateName(src__gestures__multitap, "_registerSecondTap");
  const _reject = dart.privateName(src__gestures__multitap, "_reject");
  const _freezeTracker = dart.privateName(src__gestures__multitap, "_freezeTracker");
  const _clearTrackers = dart.privateName(src__gestures__multitap, "_clearTrackers");
  const _startDoubleTapTimer = dart.privateName(src__gestures__multitap, "_startDoubleTapTimer");
  const _checkUp$ = dart.privateName(src__gestures__multitap, "_checkUp");
  src__gestures__multitap.DoubleTapGestureRecognizer = class DoubleTapGestureRecognizer extends src__gestures__recognizer.GestureRecognizer {
    get onDoubleTap() {
      return this[onDoubleTap];
    }
    set onDoubleTap(value) {
      this[onDoubleTap] = value;
    }
    isPointerAllowed(event) {
      if (this[_firstTap] == null) {
        switch (event.buttons) {
          case src__gestures__events.kPrimaryButton:
          {
            if (this.onDoubleTap == null) return false;
            break;
          }
          default:
          {
            return false;
          }
        }
      }
      return super.isPointerAllowed(src__gestures__events.PointerDownEvent._check(event));
    }
    addAllowedPointer(event) {
      if (this[_firstTap] != null) {
        if (!dart.test(this[_firstTap].isWithinTolerance(event, src__gestures__constants.kDoubleTapSlop))) {
          return;
        } else if (!dart.test(this[_firstTap].hasElapsedMinTime()) || !dart.test(this[_firstTap].hasSameButton(src__gestures__events.PointerDownEvent._check(event)))) {
          this[_reset$]();
          return this[_trackFirstTap](event);
        }
      }
      this[_trackFirstTap](event);
    }
    [_trackFirstTap](event) {
      this[_stopDoubleTapTimer]();
      let tracker = new src__gestures__multitap._TapTracker.new({event: src__gestures__events.PointerDownEvent._check(event), entry: src__gestures__binding.GestureBinding.instance.gestureArena.add(event.pointer, this), doubleTapMinTime: src__gestures__constants.kDoubleTapMinTime});
      this[_trackers][$_set](event.pointer, tracker);
      tracker.startTrackingPointer(dart.bind(this, _handleEvent$0));
    }
    [_handleEvent$0](event) {
      let tracker = this[_trackers][$_get](event.pointer);
      if (!(tracker != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 206, 12, "tracker != null");
      if (src__gestures__events.PointerUpEvent.is(event)) {
        if (this[_firstTap] == null)
          this[_registerFirstTap](tracker);
        else
          this[_registerSecondTap](tracker);
      } else if (src__gestures__events.PointerMoveEvent.is(event)) {
        if (!dart.test(tracker.isWithinTolerance(event, src__gestures__constants.kDoubleTapTouchSlop))) this[_reject](tracker);
      } else if (src__gestures__events.PointerCancelEvent.is(event)) {
        this[_reject](tracker);
      }
    }
    acceptGesture(pointer) {
    }
    rejectGesture(pointer) {
      let tracker = this[_trackers][$_get](pointer);
      if (tracker == null && this[_firstTap] != null && this[_firstTap].pointer == pointer) tracker = this[_firstTap];
      if (tracker != null) this[_reject](tracker);
    }
    [_reject](tracker) {
      this[_trackers][$remove](tracker.pointer);
      tracker.entry.resolve(src__gestures__arena.GestureDisposition.rejected);
      this[_freezeTracker](tracker);
      if (this[_firstTap] != null && (dart.test(this[_trackers][$isEmpty]) || dart.equals(tracker, this[_firstTap]))) this[_reset$]();
    }
    dispose() {
      this[_reset$]();
      super.dispose();
    }
    [_reset$]() {
      this[_stopDoubleTapTimer]();
      if (this[_firstTap] != null) {
        let tracker = this[_firstTap];
        this[_firstTap] = null;
        this[_reject](tracker);
        src__gestures__binding.GestureBinding.instance.gestureArena.release(tracker.pointer);
      }
      this[_clearTrackers]();
    }
    [_registerFirstTap](tracker) {
      this[_startDoubleTapTimer]();
      src__gestures__binding.GestureBinding.instance.gestureArena.hold(tracker.pointer);
      this[_freezeTracker](tracker);
      this[_trackers][$remove](tracker.pointer);
      this[_clearTrackers]();
      this[_firstTap] = tracker;
    }
    [_registerSecondTap](tracker) {
      this[_firstTap].entry.resolve(src__gestures__arena.GestureDisposition.accepted);
      tracker.entry.resolve(src__gestures__arena.GestureDisposition.accepted);
      this[_freezeTracker](tracker);
      this[_trackers][$remove](tracker.pointer);
      this[_checkUp$](tracker.initialButtons);
      this[_reset$]();
    }
    [_clearTrackers]() {
      this[_trackers][$values][$toList]()[$forEach](dart.bind(this, _reject));
      if (!dart.test(this[_trackers][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 285, 12, "_trackers.isEmpty");
    }
    [_freezeTracker](tracker) {
      tracker.stopTrackingPointer(dart.bind(this, _handleEvent$0));
    }
    [_startDoubleTapTimer]() {
      this[_doubleTapTimer] == null ? this[_doubleTapTimer] = async.Timer.new(src__gestures__constants.kDoubleTapTimeout, dart.bind(this, _reset$)) : null;
    }
    [_stopDoubleTapTimer]() {
      if (this[_doubleTapTimer] != null) {
        this[_doubleTapTimer].cancel();
        this[_doubleTapTimer] = null;
      }
    }
    [_checkUp$](buttons) {
      if (!(buttons == src__gestures__events.kPrimaryButton)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 304, 12, "buttons == kPrimaryButton");
      if (this.onDoubleTap != null) this.invokeCallback(dart.void, "onDoubleTap", this.onDoubleTap);
    }
    get debugDescription() {
      return "double tap";
    }
  };
  (src__gestures__multitap.DoubleTapGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onDoubleTap] = null;
    this[_doubleTapTimer] = null;
    this[_firstTap] = null;
    this[_trackers] = new (IdentityMapOfint$_TapTracker()).new();
    src__gestures__multitap.DoubleTapGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = src__gestures__multitap.DoubleTapGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__multitap.DoubleTapGestureRecognizer);
  const onDoubleTap = Symbol("DoubleTapGestureRecognizer.onDoubleTap");
  dart.setMethodSignature(src__gestures__multitap.DoubleTapGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__multitap.DoubleTapGestureRecognizer.__proto__),
    isPointerAllowed: dart.fnType(core.bool, [src__gestures__events.PointerEvent]),
    addAllowedPointer: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    [_trackFirstTap]: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    [_handleEvent$0]: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    [_reject]: dart.fnType(dart.void, [src__gestures__multitap._TapTracker]),
    [_reset$]: dart.fnType(dart.void, []),
    [_registerFirstTap]: dart.fnType(dart.void, [src__gestures__multitap._TapTracker]),
    [_registerSecondTap]: dart.fnType(dart.void, [src__gestures__multitap._TapTracker]),
    [_clearTrackers]: dart.fnType(dart.void, []),
    [_freezeTracker]: dart.fnType(dart.void, [src__gestures__multitap._TapTracker]),
    [_startDoubleTapTimer]: dart.fnType(dart.void, []),
    [_stopDoubleTapTimer]: dart.fnType(dart.void, []),
    [_checkUp$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(src__gestures__multitap.DoubleTapGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__multitap.DoubleTapGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__multitap.DoubleTapGestureRecognizer, "package:flutter_web/src/gestures/multitap.dart");
  dart.setFieldSignature(src__gestures__multitap.DoubleTapGestureRecognizer, () => ({
    __proto__: dart.getFields(src__gestures__multitap.DoubleTapGestureRecognizer.__proto__),
    onDoubleTap: dart.fieldType(dart.fnType(dart.void, [])),
    [_doubleTapTimer]: dart.fieldType(async.Timer),
    [_firstTap]: dart.fieldType(src__gestures__multitap._TapTracker),
    [_trackers]: dart.finalFieldType(core.Map$(core.int, src__gestures__multitap._TapTracker))
  }));
  const _wonArena = dart.privateName(src__gestures__multitap, "_wonArena");
  const _finalPosition$ = dart.privateName(src__gestures__multitap, "_finalPosition");
  const _lastPosition$ = dart.privateName(src__gestures__multitap, "_lastPosition");
  const _dispatchLongTap = dart.privateName(src__gestures__multitap, "_dispatchLongTap");
  const _check = dart.privateName(src__gestures__multitap, "_check");
  const _dispatchCancel = dart.privateName(src__gestures__multitap, "_dispatchCancel");
  const _dispatchTap = dart.privateName(src__gestures__multitap, "_dispatchTap");
  src__gestures__multitap._TapGesture = class _TapGesture extends src__gestures__multitap._TapTracker {
    handleEvent(event) {
      if (!(event.pointer == this.pointer)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 345, 12, "event.pointer == pointer");
      if (src__gestures__events.PointerMoveEvent.is(event)) {
        if (!dart.test(this.isWithinTolerance(event, src__gestures__constants.kTouchSlop)))
          this.cancel();
        else
          this[_lastPosition$] = event.position;
      } else if (src__gestures__events.PointerCancelEvent.is(event)) {
        this.cancel();
      } else if (src__gestures__events.PointerUpEvent.is(event)) {
        this.stopTrackingPointer(dart.bind(this, 'handleEvent'));
        this[_finalPosition$] = event.position;
        this[_check]();
      }
    }
    stopTrackingPointer(route) {
      let t5;
      t5 = this[_timer$0];
      t5 == null ? null : t5.cancel();
      this[_timer$0] = null;
      super.stopTrackingPointer(route);
    }
    accept() {
      this[_wonArena] = true;
      this[_check]();
    }
    reject() {
      this.stopTrackingPointer(dart.bind(this, 'handleEvent'));
      this.gestureRecognizer[_dispatchCancel](this.pointer);
    }
    cancel() {
      if (dart.test(this[_wonArena]))
        this.reject();
      else
        this.entry.resolve(src__gestures__arena.GestureDisposition.rejected);
    }
    [_check]() {
      if (dart.test(this[_wonArena]) && this[_finalPosition$] != null) this.gestureRecognizer[_dispatchTap](this.pointer, this[_finalPosition$]);
    }
  };
  (src__gestures__multitap._TapGesture.new = function(opts) {
    let gestureRecognizer = opts && 'gestureRecognizer' in opts ? opts.gestureRecognizer : null;
    let event = opts && 'event' in opts ? opts.event : null;
    let longTapDelay = opts && 'longTapDelay' in opts ? opts.longTapDelay : null;
    this[_wonArena] = false;
    this[_timer$0] = null;
    this[_finalPosition$] = null;
    this.gestureRecognizer = gestureRecognizer;
    this[_lastPosition$] = event.position;
    src__gestures__multitap._TapGesture.__proto__.new.call(this, {event: src__gestures__events.PointerDownEvent._check(event), entry: src__gestures__binding.GestureBinding.instance.gestureArena.add(event.pointer, gestureRecognizer), doubleTapMinTime: src__gestures__constants.kDoubleTapMinTime});
    this.startTrackingPointer(dart.bind(this, 'handleEvent'));
    if (dart.test(longTapDelay['>'](core.Duration.zero))) {
      this[_timer$0] = async.Timer.new(longTapDelay, dart.fn(() => {
        this[_timer$0] = null;
        this.gestureRecognizer[_dispatchLongTap](event.pointer, this[_lastPosition$]);
      }, VoidToNull()));
    }
  }).prototype = src__gestures__multitap._TapGesture.prototype;
  dart.addTypeTests(src__gestures__multitap._TapGesture);
  dart.setMethodSignature(src__gestures__multitap._TapGesture, () => ({
    __proto__: dart.getMethods(src__gestures__multitap._TapGesture.__proto__),
    handleEvent: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    accept: dart.fnType(dart.void, []),
    reject: dart.fnType(dart.void, []),
    cancel: dart.fnType(dart.void, []),
    [_check]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(src__gestures__multitap._TapGesture, "package:flutter_web/src/gestures/multitap.dart");
  dart.setFieldSignature(src__gestures__multitap._TapGesture, () => ({
    __proto__: dart.getFields(src__gestures__multitap._TapGesture.__proto__),
    gestureRecognizer: dart.finalFieldType(src__gestures__multitap.MultiTapGestureRecognizer),
    [_wonArena]: dart.fieldType(core.bool),
    [_timer$0]: dart.fieldType(async.Timer),
    [_lastPosition$]: dart.fieldType(ui$.Offset),
    [_finalPosition$]: dart.fieldType(ui$.Offset)
  }));
  const _gestureMap = dart.privateName(src__gestures__multitap, "_gestureMap");
  src__gestures__multitap.MultiTapGestureRecognizer = class MultiTapGestureRecognizer extends src__gestures__recognizer.GestureRecognizer {
    get onTapDown() {
      return this[onTapDown$];
    }
    set onTapDown(value) {
      this[onTapDown$] = value;
    }
    get onTapUp() {
      return this[onTapUp$];
    }
    set onTapUp(value) {
      this[onTapUp$] = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      this[onTap$] = value;
    }
    get onTapCancel() {
      return this[onTapCancel$];
    }
    set onTapCancel(value) {
      this[onTapCancel$] = value;
    }
    get longTapDelay() {
      return this[longTapDelay$];
    }
    set longTapDelay(value) {
      this[longTapDelay$] = value;
    }
    get onLongTapDown() {
      return this[onLongTapDown];
    }
    set onLongTapDown(value) {
      this[onLongTapDown] = value;
    }
    addAllowedPointer(event) {
      if (!!dart.test(this[_gestureMap][$containsKey](event.pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 438, 12, "!_gestureMap.containsKey(event.pointer)");
      this[_gestureMap][$_set](event.pointer, new src__gestures__multitap._TapGesture.new({gestureRecognizer: this, event: event, longTapDelay: this.longTapDelay}));
      if (this.onTapDown != null) this.invokeCallback(dart.void, "onTapDown", dart.fn(() => {
        this.onTapDown(event.pointer, new src__gestures__tap.TapDownDetails.new({globalPosition: event.position, kind: event.kind}));
      }, VoidToNull()));
    }
    acceptGesture(pointer) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 457, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$_get](pointer).accept();
    }
    rejectGesture(pointer) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 463, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$_get](pointer).reject();
      if (!!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 465, 12, "!_gestureMap.containsKey(pointer)");
    }
    [_dispatchCancel](pointer) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 469, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$remove](pointer);
      if (this.onTapCancel != null) this.invokeCallback(dart.void, "onTapCancel", dart.fn(() => this.onTapCancel(pointer), VoidTovoid()));
    }
    [_dispatchTap](pointer, globalPosition) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 476, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$remove](pointer);
      if (this.onTapUp != null) this.invokeCallback(dart.void, "onTapUp", dart.fn(() => this.onTapUp(pointer, new src__gestures__tap.TapUpDetails.new({globalPosition: globalPosition})), VoidTovoid()));
      if (this.onTap != null) this.invokeCallback(dart.void, "onTap", dart.fn(() => this.onTap(pointer), VoidTovoid()));
    }
    [_dispatchLongTap](pointer, lastPosition) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 485, 12, "_gestureMap.containsKey(pointer)");
      if (this.onLongTapDown != null) this.invokeCallback(dart.void, "onLongTapDown", dart.fn(() => {
        this.onLongTapDown(pointer, new src__gestures__tap.TapDownDetails.new({globalPosition: lastPosition, kind: this.getKindForPointer(pointer)}));
      }, VoidToNull()));
    }
    dispose() {
      let localGestures = ListOf_TapGesture().from(this[_gestureMap][$values]);
      for (let gesture of localGestures)
        gesture.cancel();
      if (!dart.test(this[_gestureMap][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 504, 12, "_gestureMap.isEmpty");
      super.dispose();
    }
    get debugDescription() {
      return "multitap";
    }
  };
  (src__gestures__multitap.MultiTapGestureRecognizer.new = function(opts) {
    let longTapDelay = opts && 'longTapDelay' in opts ? opts.longTapDelay : core.Duration.zero;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onTapDown$] = null;
    this[onTapUp$] = null;
    this[onTap$] = null;
    this[onTapCancel$] = null;
    this[onLongTapDown] = null;
    this[_gestureMap] = new (IdentityMapOfint$_TapGesture()).new();
    this[longTapDelay$] = longTapDelay;
    src__gestures__multitap.MultiTapGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = src__gestures__multitap.MultiTapGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__multitap.MultiTapGestureRecognizer);
  const onTapDown$ = Symbol("MultiTapGestureRecognizer.onTapDown");
  const onTapUp$ = Symbol("MultiTapGestureRecognizer.onTapUp");
  const onTap$ = Symbol("MultiTapGestureRecognizer.onTap");
  const onTapCancel$ = Symbol("MultiTapGestureRecognizer.onTapCancel");
  const longTapDelay$ = Symbol("MultiTapGestureRecognizer.longTapDelay");
  const onLongTapDown = Symbol("MultiTapGestureRecognizer.onLongTapDown");
  dart.setMethodSignature(src__gestures__multitap.MultiTapGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__multitap.MultiTapGestureRecognizer.__proto__),
    addAllowedPointer: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    [_dispatchCancel]: dart.fnType(dart.void, [core.int]),
    [_dispatchTap]: dart.fnType(dart.void, [core.int, ui$.Offset]),
    [_dispatchLongTap]: dart.fnType(dart.void, [core.int, ui$.Offset])
  }));
  dart.setGetterSignature(src__gestures__multitap.MultiTapGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__multitap.MultiTapGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__multitap.MultiTapGestureRecognizer, "package:flutter_web/src/gestures/multitap.dart");
  dart.setFieldSignature(src__gestures__multitap.MultiTapGestureRecognizer, () => ({
    __proto__: dart.getFields(src__gestures__multitap.MultiTapGestureRecognizer.__proto__),
    onTapDown: dart.fieldType(dart.fnType(dart.void, [core.int, src__gestures__tap.TapDownDetails])),
    onTapUp: dart.fieldType(dart.fnType(dart.void, [core.int, src__gestures__tap.TapUpDetails])),
    onTap: dart.fieldType(dart.fnType(dart.void, [core.int])),
    onTapCancel: dart.fieldType(dart.fnType(dart.void, [core.int])),
    longTapDelay: dart.fieldType(core.Duration),
    onLongTapDown: dart.fieldType(dart.fnType(dart.void, [core.int, src__gestures__tap.TapDownDetails])),
    [_gestureMap]: dart.finalFieldType(core.Map$(core.int, src__gestures__multitap._TapGesture))
  }));
  src__gestures__long_press.LongPressStartDetails = class LongPressStartDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$5];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
  };
  (src__gestures__long_press.LongPressStartDetails.new = function(opts) {
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : ui$.Offset.zero;
    this[globalPosition$5] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/long_press.dart", 59, 16, "globalPosition != null");
    ;
  }).prototype = src__gestures__long_press.LongPressStartDetails.prototype;
  dart.addTypeTests(src__gestures__long_press.LongPressStartDetails);
  const globalPosition$5 = Symbol("LongPressStartDetails.globalPosition");
  dart.setLibraryUri(src__gestures__long_press.LongPressStartDetails, "package:flutter_web/src/gestures/long_press.dart");
  dart.setFieldSignature(src__gestures__long_press.LongPressStartDetails, () => ({
    __proto__: dart.getFields(src__gestures__long_press.LongPressStartDetails.__proto__),
    globalPosition: dart.finalFieldType(ui$.Offset)
  }));
  src__gestures__long_press.LongPressMoveUpdateDetails = class LongPressMoveUpdateDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$6];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get offsetFromOrigin() {
      return this[offsetFromOrigin$];
    }
    set offsetFromOrigin(value) {
      super.offsetFromOrigin = value;
    }
  };
  (src__gestures__long_press.LongPressMoveUpdateDetails.new = function(opts) {
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : ui$.Offset.zero;
    let offsetFromOrigin = opts && 'offsetFromOrigin' in opts ? opts.offsetFromOrigin : ui$.Offset.zero;
    this[globalPosition$6] = globalPosition;
    this[offsetFromOrigin$] = offsetFromOrigin;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/long_press.dart", 79, 16, "globalPosition != null");
    if (!(offsetFromOrigin != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/long_press.dart", 80, 16, "offsetFromOrigin != null");
    ;
  }).prototype = src__gestures__long_press.LongPressMoveUpdateDetails.prototype;
  dart.addTypeTests(src__gestures__long_press.LongPressMoveUpdateDetails);
  const globalPosition$6 = Symbol("LongPressMoveUpdateDetails.globalPosition");
  const offsetFromOrigin$ = Symbol("LongPressMoveUpdateDetails.offsetFromOrigin");
  dart.setLibraryUri(src__gestures__long_press.LongPressMoveUpdateDetails, "package:flutter_web/src/gestures/long_press.dart");
  dart.setFieldSignature(src__gestures__long_press.LongPressMoveUpdateDetails, () => ({
    __proto__: dart.getFields(src__gestures__long_press.LongPressMoveUpdateDetails.__proto__),
    globalPosition: dart.finalFieldType(ui$.Offset),
    offsetFromOrigin: dart.finalFieldType(ui$.Offset)
  }));
  src__gestures__long_press.LongPressEndDetails = class LongPressEndDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$7];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
  };
  (src__gestures__long_press.LongPressEndDetails.new = function(opts) {
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : ui$.Offset.zero;
    this[globalPosition$7] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/long_press.dart", 103, 16, "globalPosition != null");
    ;
  }).prototype = src__gestures__long_press.LongPressEndDetails.prototype;
  dart.addTypeTests(src__gestures__long_press.LongPressEndDetails);
  const globalPosition$7 = Symbol("LongPressEndDetails.globalPosition");
  dart.setLibraryUri(src__gestures__long_press.LongPressEndDetails, "package:flutter_web/src/gestures/long_press.dart");
  dart.setFieldSignature(src__gestures__long_press.LongPressEndDetails, () => ({
    __proto__: dart.getFields(src__gestures__long_press.LongPressEndDetails.__proto__),
    globalPosition: dart.finalFieldType(ui$.Offset)
  }));
  const _longPressAccepted = dart.privateName(src__gestures__long_press, "_longPressAccepted");
  const _longPressOrigin = dart.privateName(src__gestures__long_press, "_longPressOrigin");
  const _initialButtons$ = dart.privateName(src__gestures__long_press, "_initialButtons");
  const _checkLongPressStart = dart.privateName(src__gestures__long_press, "_checkLongPressStart");
  const _checkLongPressEnd = dart.privateName(src__gestures__long_press, "_checkLongPressEnd");
  const _reset$0 = dart.privateName(src__gestures__long_press, "_reset");
  const _checkLongPressMoveUpdate = dart.privateName(src__gestures__long_press, "_checkLongPressMoveUpdate");
  src__gestures__long_press.LongPressGestureRecognizer = class LongPressGestureRecognizer extends src__gestures__recognizer.PrimaryPointerGestureRecognizer {
    get onLongPress() {
      return this[onLongPress];
    }
    set onLongPress(value) {
      this[onLongPress] = value;
    }
    get onLongPressStart() {
      return this[onLongPressStart];
    }
    set onLongPressStart(value) {
      this[onLongPressStart] = value;
    }
    get onLongPressMoveUpdate() {
      return this[onLongPressMoveUpdate];
    }
    set onLongPressMoveUpdate(value) {
      this[onLongPressMoveUpdate] = value;
    }
    get onLongPressUp() {
      return this[onLongPressUp];
    }
    set onLongPressUp(value) {
      this[onLongPressUp] = value;
    }
    get onLongPressEnd() {
      return this[onLongPressEnd];
    }
    set onLongPressEnd(value) {
      this[onLongPressEnd] = value;
    }
    isPointerAllowed(event) {
      switch (event.buttons) {
        case src__gestures__events.kPrimaryButton:
        {
          if (this.onLongPressStart == null && this.onLongPress == null && this.onLongPressMoveUpdate == null && this.onLongPressEnd == null && this.onLongPressUp == null) return false;
          break;
        }
        default:
        {
          return false;
        }
      }
      return super.isPointerAllowed(event);
    }
    didExceedDeadline() {
      this.resolve(src__gestures__arena.GestureDisposition.accepted);
      this[_longPressAccepted] = true;
      super.acceptGesture(this.primaryPointer);
      this[_checkLongPressStart]();
    }
    handlePrimaryPointer(event) {
      if (src__gestures__events.PointerUpEvent.is(event)) {
        if (dart.equals(this[_longPressAccepted], true)) {
          this[_checkLongPressEnd](event);
        } else {
          this.resolve(src__gestures__arena.GestureDisposition.rejected);
        }
        this[_reset$0]();
      } else if (src__gestures__events.PointerCancelEvent.is(event)) {
        this[_reset$0]();
      } else if (src__gestures__events.PointerDownEvent.is(event)) {
        this[_longPressOrigin] = event.position;
        this[_initialButtons$] = event.buttons;
      } else if (src__gestures__events.PointerMoveEvent.is(event)) {
        if (event.buttons != this[_initialButtons$]) {
          this.resolve(src__gestures__arena.GestureDisposition.rejected);
          this.stopTrackingPointer(this.primaryPointer);
        } else if (dart.test(this[_longPressAccepted])) {
          this[_checkLongPressMoveUpdate](event);
        }
      }
    }
    [_checkLongPressStart]() {
      if (!(this[_initialButtons$] == src__gestures__events.kPrimaryButton)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/long_press.dart", 249, 12, "_initialButtons == kPrimaryButton");
      let details = new src__gestures__long_press.LongPressStartDetails.new({globalPosition: this[_longPressOrigin]});
      if (this.onLongPressStart != null) this.invokeCallback(dart.void, "onLongPressStart", dart.fn(() => this.onLongPressStart(details), VoidTovoid()));
      if (this.onLongPress != null) this.invokeCallback(dart.void, "onLongPress", this.onLongPress);
    }
    [_checkLongPressMoveUpdate](event) {
      if (!(this[_initialButtons$] == src__gestures__events.kPrimaryButton)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/long_press.dart", 259, 12, "_initialButtons == kPrimaryButton");
      let details = new src__gestures__long_press.LongPressMoveUpdateDetails.new({globalPosition: event.position, offsetFromOrigin: event.position['-'](this[_longPressOrigin])});
      if (this.onLongPressMoveUpdate != null) this.invokeCallback(dart.void, "onLongPressMoveUpdate", dart.fn(() => this.onLongPressMoveUpdate(details), VoidTovoid()));
    }
    [_checkLongPressEnd](event) {
      if (!(this[_initialButtons$] == src__gestures__events.kPrimaryButton)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/long_press.dart", 270, 12, "_initialButtons == kPrimaryButton");
      let details = new src__gestures__long_press.LongPressEndDetails.new({globalPosition: event.position});
      if (this.onLongPressEnd != null) this.invokeCallback(dart.void, "onLongPressEnd", dart.fn(() => this.onLongPressEnd(details), VoidTovoid()));
      if (this.onLongPressUp != null) this.invokeCallback(dart.void, "onLongPressUp", this.onLongPressUp);
    }
    [_reset$0]() {
      this[_longPressAccepted] = false;
      this[_longPressOrigin] = null;
      this[_initialButtons$] = null;
    }
    resolve(disposition) {
      if (dart.test(this[_longPressAccepted]) && dart.equals(disposition, src__gestures__arena.GestureDisposition.rejected)) {
        this[_reset$0]();
      }
      super.resolve(disposition);
    }
    acceptGesture(pointer) {
    }
    get debugDescription() {
      return "long press";
    }
  };
  (src__gestures__long_press.LongPressGestureRecognizer.new = function(opts) {
    let postAcceptSlopTolerance = opts && 'postAcceptSlopTolerance' in opts ? opts.postAcceptSlopTolerance : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    this[_longPressAccepted] = false;
    this[_longPressOrigin] = null;
    this[_initialButtons$] = null;
    this[onLongPress] = null;
    this[onLongPressStart] = null;
    this[onLongPressMoveUpdate] = null;
    this[onLongPressUp] = null;
    this[onLongPressEnd] = null;
    src__gestures__long_press.LongPressGestureRecognizer.__proto__.new.call(this, {deadline: src__gestures__constants.kLongPressTimeout, postAcceptSlopTolerance: postAcceptSlopTolerance, kind: kind, debugOwner: debugOwner});
    ;
  }).prototype = src__gestures__long_press.LongPressGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__long_press.LongPressGestureRecognizer);
  const onLongPress = Symbol("LongPressGestureRecognizer.onLongPress");
  const onLongPressStart = Symbol("LongPressGestureRecognizer.onLongPressStart");
  const onLongPressMoveUpdate = Symbol("LongPressGestureRecognizer.onLongPressMoveUpdate");
  const onLongPressUp = Symbol("LongPressGestureRecognizer.onLongPressUp");
  const onLongPressEnd = Symbol("LongPressGestureRecognizer.onLongPressEnd");
  dart.setMethodSignature(src__gestures__long_press.LongPressGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__long_press.LongPressGestureRecognizer.__proto__),
    handlePrimaryPointer: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    [_checkLongPressStart]: dart.fnType(dart.void, []),
    [_checkLongPressMoveUpdate]: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    [_checkLongPressEnd]: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    [_reset$0]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__gestures__long_press.LongPressGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__long_press.LongPressGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__long_press.LongPressGestureRecognizer, "package:flutter_web/src/gestures/long_press.dart");
  dart.setFieldSignature(src__gestures__long_press.LongPressGestureRecognizer, () => ({
    __proto__: dart.getFields(src__gestures__long_press.LongPressGestureRecognizer.__proto__),
    [_longPressAccepted]: dart.fieldType(core.bool),
    [_longPressOrigin]: dart.fieldType(ui$.Offset),
    [_initialButtons$]: dart.fieldType(core.int),
    onLongPress: dart.fieldType(dart.fnType(dart.void, [])),
    onLongPressStart: dart.fieldType(dart.fnType(dart.void, [src__gestures__long_press.LongPressStartDetails])),
    onLongPressMoveUpdate: dart.fieldType(dart.fnType(dart.void, [src__gestures__long_press.LongPressMoveUpdateDetails])),
    onLongPressUp: dart.fieldType(dart.fnType(dart.void, [])),
    onLongPressEnd: dart.fieldType(dart.fnType(dart.void, [src__gestures__long_press.LongPressEndDetails]))
  }));
  const _name$3 = dart.privateName(src__gestures__monodrag, "_name");
  src__gestures__monodrag._DragState = class _DragState extends core.Object {
    toString() {
      return this[_name$3];
    }
  };
  (src__gestures__monodrag._DragState.new = function(index, _name) {
    this.index = index;
    this[_name$3] = _name;
    ;
  }).prototype = src__gestures__monodrag._DragState.prototype;
  dart.addTypeTests(src__gestures__monodrag._DragState);
  dart.setLibraryUri(src__gestures__monodrag._DragState, "package:flutter_web/src/gestures/monodrag.dart");
  dart.setFieldSignature(src__gestures__monodrag._DragState, () => ({
    __proto__: dart.getFields(src__gestures__monodrag._DragState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$3]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__gestures__monodrag._DragState, ['toString']);
  src__gestures__monodrag._DragState.ready = dart.const(new src__gestures__monodrag._DragState.new(0, "_DragState.ready"));
  src__gestures__monodrag._DragState.possible = dart.const(new src__gestures__monodrag._DragState.new(1, "_DragState.possible"));
  src__gestures__monodrag._DragState.accepted = dart.const(new src__gestures__monodrag._DragState.new(2, "_DragState.accepted"));
  src__gestures__monodrag._DragState.values = dart.constList([src__gestures__monodrag._DragState.ready, src__gestures__monodrag._DragState.possible, src__gestures__monodrag._DragState.accepted], src__gestures__monodrag._DragState);
  const _state$0 = dart.privateName(src__gestures__monodrag, "_state");
  const _initialPosition$ = dart.privateName(src__gestures__monodrag, "_initialPosition");
  const _pendingDragOffset = dart.privateName(src__gestures__monodrag, "_pendingDragOffset");
  const _lastPendingEventTimestamp$ = dart.privateName(src__gestures__monodrag, "_lastPendingEventTimestamp");
  const _initialButtons$0 = dart.privateName(src__gestures__monodrag, "_initialButtons");
  const _velocityTrackers$ = dart.privateName(src__gestures__monodrag, "_velocityTrackers");
  const _checkDown$ = dart.privateName(src__gestures__monodrag, "_checkDown");
  const _getDeltaForDetails = dart.privateName(src__gestures__monodrag, "_getDeltaForDetails");
  const _getPrimaryValueFromOffset = dart.privateName(src__gestures__monodrag, "_getPrimaryValueFromOffset");
  const _checkUpdate = dart.privateName(src__gestures__monodrag, "_checkUpdate");
  const _hasSufficientPendingDragDeltaToAccept = dart.privateName(src__gestures__monodrag, "_hasSufficientPendingDragDeltaToAccept");
  const _checkStart = dart.privateName(src__gestures__monodrag, "_checkStart");
  const _checkCancel$ = dart.privateName(src__gestures__monodrag, "_checkCancel");
  const _checkEnd = dart.privateName(src__gestures__monodrag, "_checkEnd");
  const _isFlingGesture = dart.privateName(src__gestures__monodrag, "_isFlingGesture");
  src__gestures__monodrag.DragGestureRecognizer = class DragGestureRecognizer extends src__gestures__recognizer.OneSequenceGestureRecognizer {
    get dragStartBehavior() {
      return this[dragStartBehavior$];
    }
    set dragStartBehavior(value) {
      this[dragStartBehavior$] = value;
    }
    get onDown() {
      return this[onDown];
    }
    set onDown(value) {
      this[onDown] = value;
    }
    get onStart() {
      return this[onStart$0];
    }
    set onStart(value) {
      this[onStart$0] = value;
    }
    get onUpdate() {
      return this[onUpdate$0];
    }
    set onUpdate(value) {
      this[onUpdate$0] = value;
    }
    get onEnd() {
      return this[onEnd$0];
    }
    set onEnd(value) {
      this[onEnd$0] = value;
    }
    get onCancel() {
      return this[onCancel];
    }
    set onCancel(value) {
      this[onCancel] = value;
    }
    get minFlingDistance() {
      return this[minFlingDistance];
    }
    set minFlingDistance(value) {
      this[minFlingDistance] = value;
    }
    get minFlingVelocity() {
      return this[minFlingVelocity];
    }
    set minFlingVelocity(value) {
      this[minFlingVelocity] = value;
    }
    get maxFlingVelocity() {
      return this[maxFlingVelocity];
    }
    set maxFlingVelocity(value) {
      this[maxFlingVelocity] = value;
    }
    isPointerAllowed(event) {
      if (this[_initialButtons$0] == null) {
        switch (event.buttons) {
          case src__gestures__events.kPrimaryButton:
          {
            if (this.onDown == null && this.onStart == null && this.onUpdate == null && this.onEnd == null && this.onCancel == null) return false;
            break;
          }
          default:
          {
            return false;
          }
        }
      } else {
        if (event.buttons != this[_initialButtons$0]) {
          return false;
        }
      }
      return super.isPointerAllowed(src__gestures__events.PointerDownEvent._check(event));
    }
    addAllowedPointer(event) {
      this.startTrackingPointer(event.pointer);
      this[_velocityTrackers$][$_set](event.pointer, new src__gestures__velocity_tracker.VelocityTracker.new());
      if (dart.equals(this[_state$0], src__gestures__monodrag._DragState.ready)) {
        this[_state$0] = src__gestures__monodrag._DragState.possible;
        this[_initialPosition$] = event.position;
        this[_initialButtons$0] = event.buttons;
        this[_pendingDragOffset] = ui$.Offset.zero;
        this[_lastPendingEventTimestamp$] = event.timeStamp;
        this[_checkDown$]();
      } else if (dart.equals(this[_state$0], src__gestures__monodrag._DragState.accepted)) {
        this.resolve(src__gestures__arena.GestureDisposition.accepted);
      }
    }
    handleEvent(event) {
      if (!!dart.equals(this[_state$0], src__gestures__monodrag._DragState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/monodrag.dart", 228, 12, "_state != _DragState.ready");
      if (!dart.test(event.synthesized) && (src__gestures__events.PointerDownEvent.is(event) || src__gestures__events.PointerMoveEvent.is(event))) {
        let tracker = this[_velocityTrackers$][$_get](event.pointer);
        if (!(tracker != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/monodrag.dart", 232, 14, "tracker != null");
        tracker.addPosition(event.timeStamp, event.position);
      }
      if (src__gestures__events.PointerMoveEvent.is(event)) {
        if (event.buttons != this[_initialButtons$0]) {
          this.resolve(src__gestures__arena.GestureDisposition.rejected);
          this.stopTrackingPointer(event.pointer);
          return;
        }
        let delta = event.delta;
        if (dart.equals(this[_state$0], src__gestures__monodrag._DragState.accepted)) {
          this[_checkUpdate]({sourceTimeStamp: event.timeStamp, delta: this[_getDeltaForDetails](delta), primaryDelta: this[_getPrimaryValueFromOffset](delta), globalPosition: event.position});
        } else {
          this[_pendingDragOffset] = this[_pendingDragOffset]['+'](delta);
          this[_lastPendingEventTimestamp$] = event.timeStamp;
          if (dart.test(this[_hasSufficientPendingDragDeltaToAccept])) this.resolve(src__gestures__arena.GestureDisposition.accepted);
        }
      }
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    acceptGesture(pointer) {
      if (!dart.equals(this[_state$0], src__gestures__monodrag._DragState.accepted)) {
        this[_state$0] = src__gestures__monodrag._DragState.accepted;
        let delta = this[_pendingDragOffset];
        let timestamp = this[_lastPendingEventTimestamp$];
        let updateDelta = null;
        switch (this.dragStartBehavior) {
          case src__gestures__recognizer.DragStartBehavior.start:
          {
            this[_initialPosition$] = this[_initialPosition$]['+'](delta);
            updateDelta = ui$.Offset.zero;
            break;
          }
          case src__gestures__recognizer.DragStartBehavior.down:
          {
            updateDelta = this[_getDeltaForDetails](delta);
            break;
          }
        }
        this[_pendingDragOffset] = ui$.Offset.zero;
        this[_lastPendingEventTimestamp$] = null;
        this[_checkStart](timestamp);
        if (!dart.equals(updateDelta, ui$.Offset.zero)) {
          this[_checkUpdate]({sourceTimeStamp: timestamp, delta: updateDelta, primaryDelta: this[_getPrimaryValueFromOffset](updateDelta), globalPosition: this[_initialPosition$]['+'](updateDelta)});
        }
      }
    }
    rejectGesture(pointer) {
      this.stopTrackingPointer(pointer);
    }
    didStopTrackingLastPointer(pointer) {
      if (!!dart.equals(this[_state$0], src__gestures__monodrag._DragState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/monodrag.dart", 298, 12, "_state != _DragState.ready");
      switch (this[_state$0]) {
        case src__gestures__monodrag._DragState.ready:
        {
          break;
        }
        case src__gestures__monodrag._DragState.possible:
        {
          this.resolve(src__gestures__arena.GestureDisposition.rejected);
          this[_checkCancel$]();
          break;
        }
        case src__gestures__monodrag._DragState.accepted:
        {
          this[_checkEnd](pointer);
          break;
        }
      }
      this[_velocityTrackers$][$clear]();
      this[_initialButtons$0] = null;
      this[_state$0] = src__gestures__monodrag._DragState.ready;
    }
    [_checkDown$]() {
      if (!(this[_initialButtons$0] == src__gestures__events.kPrimaryButton)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/monodrag.dart", 318, 12, "_initialButtons == kPrimaryButton");
      let details = new src__gestures__drag_details.DragDownDetails.new({globalPosition: this[_initialPosition$]});
      if (this.onDown != null) this.invokeCallback(dart.void, "onDown", dart.fn(() => this.onDown(details), VoidTovoid()));
    }
    [_checkStart](timestamp) {
      if (!(this[_initialButtons$0] == src__gestures__events.kPrimaryButton)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/monodrag.dart", 326, 12, "_initialButtons == kPrimaryButton");
      let details = new src__gestures__drag_details.DragStartDetails.new({sourceTimeStamp: timestamp, globalPosition: this[_initialPosition$]});
      if (this.onStart != null) this.invokeCallback(dart.void, "onStart", dart.fn(() => this.onStart(details), VoidTovoid()));
    }
    [_checkUpdate](opts) {
      let sourceTimeStamp = opts && 'sourceTimeStamp' in opts ? opts.sourceTimeStamp : null;
      let delta = opts && 'delta' in opts ? opts.delta : null;
      let primaryDelta = opts && 'primaryDelta' in opts ? opts.primaryDelta : null;
      let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : null;
      if (!(this[_initialButtons$0] == src__gestures__events.kPrimaryButton)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/monodrag.dart", 341, 12, "_initialButtons == kPrimaryButton");
      let details = new src__gestures__drag_details.DragUpdateDetails.new({sourceTimeStamp: sourceTimeStamp, delta: delta, primaryDelta: primaryDelta, globalPosition: globalPosition});
      if (this.onUpdate != null) this.invokeCallback(dart.void, "onUpdate", dart.fn(() => this.onUpdate(details), VoidTovoid()));
    }
    [_checkEnd](pointer) {
      let t5, t5$;
      if (!(this[_initialButtons$0] == src__gestures__events.kPrimaryButton)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/monodrag.dart", 353, 12, "_initialButtons == kPrimaryButton");
      if (this.onEnd == null) return;
      let tracker = this[_velocityTrackers$][$_get](pointer);
      if (!(tracker != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/monodrag.dart", 357, 12, "tracker != null");
      let details = null;
      let debugReport = null;
      let estimate = tracker.getVelocityEstimate();
      if (estimate != null && dart.test(this[_isFlingGesture](estimate))) {
        let velocity = new src__gestures__velocity_tracker.Velocity.new({pixelsPerSecond: estimate.pixelsPerSecond}).clampMagnitude((t5 = this.minFlingVelocity, t5 == null ? src__gestures__constants.kMinFlingVelocity : t5), (t5$ = this.maxFlingVelocity, t5$ == null ? src__gestures__constants.kMaxFlingVelocity : t5$));
        details = new src__gestures__drag_details.DragEndDetails.new({velocity: velocity, primaryVelocity: this[_getPrimaryValueFromOffset](velocity.pixelsPerSecond)});
        debugReport = dart.fn(() => dart.str(estimate) + "; fling at " + dart.str(velocity) + ".", VoidToString());
      } else {
        details = new src__gestures__drag_details.DragEndDetails.new({velocity: src__gestures__velocity_tracker.Velocity.zero, primaryVelocity: 0.0});
        debugReport = dart.fn(() => {
          if (estimate == null) return "Could not estimate velocity.";
          return dart.str(estimate) + "; judged to not be a fling.";
        }, VoidToString());
      }
      this.invokeCallback(dart.void, "onEnd", dart.fn(() => this.onEnd(details), VoidTovoid()), {debugReport: VoidToString()._check(debugReport)});
    }
    [_checkCancel$]() {
      if (!(this[_initialButtons$0] == src__gestures__events.kPrimaryButton)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/monodrag.dart", 390, 12, "_initialButtons == kPrimaryButton");
      if (this.onCancel != null) this.invokeCallback(dart.void, "onCancel", this.onCancel);
    }
    dispose() {
      this[_velocityTrackers$][$clear]();
      super.dispose();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfDragStartBehavior()).new("start behavior", this.dragStartBehavior));
    }
  };
  (src__gestures__monodrag.DragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : src__gestures__recognizer.DragStartBehavior.start;
    this[onDown] = null;
    this[onStart$0] = null;
    this[onUpdate$0] = null;
    this[onEnd$0] = null;
    this[onCancel] = null;
    this[minFlingDistance] = null;
    this[minFlingVelocity] = null;
    this[maxFlingVelocity] = null;
    this[_state$0] = src__gestures__monodrag._DragState.ready;
    this[_initialPosition$] = null;
    this[_pendingDragOffset] = null;
    this[_lastPendingEventTimestamp$] = null;
    this[_initialButtons$0] = null;
    this[_velocityTrackers$] = new (IdentityMapOfint$VelocityTracker()).new();
    this[dragStartBehavior$] = dragStartBehavior;
    if (!(dragStartBehavior != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/monodrag.dart", 66, 16, "dragStartBehavior != null");
    src__gestures__monodrag.DragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = src__gestures__monodrag.DragGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__monodrag.DragGestureRecognizer);
  const dragStartBehavior$ = Symbol("DragGestureRecognizer.dragStartBehavior");
  const onDown = Symbol("DragGestureRecognizer.onDown");
  const onStart$0 = Symbol("DragGestureRecognizer.onStart");
  const onUpdate$0 = Symbol("DragGestureRecognizer.onUpdate");
  const onEnd$0 = Symbol("DragGestureRecognizer.onEnd");
  const onCancel = Symbol("DragGestureRecognizer.onCancel");
  const minFlingDistance = Symbol("DragGestureRecognizer.minFlingDistance");
  const minFlingVelocity = Symbol("DragGestureRecognizer.minFlingVelocity");
  const maxFlingVelocity = Symbol("DragGestureRecognizer.maxFlingVelocity");
  dart.setMethodSignature(src__gestures__monodrag.DragGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__monodrag.DragGestureRecognizer.__proto__),
    isPointerAllowed: dart.fnType(core.bool, [src__gestures__events.PointerEvent]),
    addAllowedPointer: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    handleEvent: dart.fnType(dart.void, [src__gestures__events.PointerEvent]),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int]),
    [_checkDown$]: dart.fnType(dart.void, []),
    [_checkStart]: dart.fnType(dart.void, [core.Duration]),
    [_checkUpdate]: dart.fnType(dart.void, [], {delta: ui$.Offset, globalPosition: ui$.Offset, primaryDelta: core.double, sourceTimeStamp: core.Duration}),
    [_checkEnd]: dart.fnType(dart.void, [core.int]),
    [_checkCancel$]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(src__gestures__monodrag.DragGestureRecognizer, "package:flutter_web/src/gestures/monodrag.dart");
  dart.setFieldSignature(src__gestures__monodrag.DragGestureRecognizer, () => ({
    __proto__: dart.getFields(src__gestures__monodrag.DragGestureRecognizer.__proto__),
    dragStartBehavior: dart.fieldType(src__gestures__recognizer.DragStartBehavior),
    onDown: dart.fieldType(dart.fnType(dart.void, [src__gestures__drag_details.DragDownDetails])),
    onStart: dart.fieldType(dart.fnType(dart.void, [src__gestures__drag_details.DragStartDetails])),
    onUpdate: dart.fieldType(dart.fnType(dart.void, [src__gestures__drag_details.DragUpdateDetails])),
    onEnd: dart.fieldType(dart.fnType(dart.void, [src__gestures__drag_details.DragEndDetails])),
    onCancel: dart.fieldType(dart.fnType(dart.void, [])),
    minFlingDistance: dart.fieldType(core.double),
    minFlingVelocity: dart.fieldType(core.double),
    maxFlingVelocity: dart.fieldType(core.double),
    [_state$0]: dart.fieldType(src__gestures__monodrag._DragState),
    [_initialPosition$]: dart.fieldType(ui$.Offset),
    [_pendingDragOffset]: dart.fieldType(ui$.Offset),
    [_lastPendingEventTimestamp$]: dart.fieldType(core.Duration),
    [_initialButtons$0]: dart.fieldType(core.int),
    [_velocityTrackers$]: dart.finalFieldType(core.Map$(core.int, src__gestures__velocity_tracker.VelocityTracker))
  }));
  src__gestures__monodrag.VerticalDragGestureRecognizer = class VerticalDragGestureRecognizer extends src__gestures__monodrag.DragGestureRecognizer {
    [_isFlingGesture](estimate) {
      let t5, t5$;
      let minVelocity = (t5 = this.minFlingVelocity, t5 == null ? src__gestures__constants.kMinFlingVelocity : t5);
      let minDistance = (t5$ = this.minFlingDistance, t5$ == null ? src__gestures__constants.kTouchSlop : t5$);
      return estimate.pixelsPerSecond.dy[$abs]() > dart.notNull(minVelocity) && estimate.offset.dy[$abs]() > dart.notNull(minDistance);
    }
    get [_hasSufficientPendingDragDeltaToAccept]() {
      return this[_pendingDragOffset].dy[$abs]() > dart.notNull(src__gestures__constants.kTouchSlop);
    }
    [_getDeltaForDetails](delta) {
      return new ui$.Offset.new(0.0, delta.dy);
    }
    [_getPrimaryValueFromOffset](value) {
      return value.dy;
    }
    get debugDescription() {
      return "vertical drag";
    }
  };
  (src__gestures__monodrag.VerticalDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    src__gestures__monodrag.VerticalDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = src__gestures__monodrag.VerticalDragGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__monodrag.VerticalDragGestureRecognizer);
  dart.setMethodSignature(src__gestures__monodrag.VerticalDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__monodrag.VerticalDragGestureRecognizer.__proto__),
    [_isFlingGesture]: dart.fnType(core.bool, [src__gestures__velocity_tracker.VelocityEstimate]),
    [_getDeltaForDetails]: dart.fnType(ui$.Offset, [ui$.Offset]),
    [_getPrimaryValueFromOffset]: dart.fnType(core.double, [ui$.Offset])
  }));
  dart.setGetterSignature(src__gestures__monodrag.VerticalDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__monodrag.VerticalDragGestureRecognizer.__proto__),
    [_hasSufficientPendingDragDeltaToAccept]: core.bool,
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__monodrag.VerticalDragGestureRecognizer, "package:flutter_web/src/gestures/monodrag.dart");
  src__gestures__monodrag.HorizontalDragGestureRecognizer = class HorizontalDragGestureRecognizer extends src__gestures__monodrag.DragGestureRecognizer {
    [_isFlingGesture](estimate) {
      let t5, t5$;
      let minVelocity = (t5 = this.minFlingVelocity, t5 == null ? src__gestures__constants.kMinFlingVelocity : t5);
      let minDistance = (t5$ = this.minFlingDistance, t5$ == null ? src__gestures__constants.kTouchSlop : t5$);
      return estimate.pixelsPerSecond.dx[$abs]() > dart.notNull(minVelocity) && estimate.offset.dx[$abs]() > dart.notNull(minDistance);
    }
    get [_hasSufficientPendingDragDeltaToAccept]() {
      return this[_pendingDragOffset].dx[$abs]() > dart.notNull(src__gestures__constants.kTouchSlop);
    }
    [_getDeltaForDetails](delta) {
      return new ui$.Offset.new(delta.dx, 0.0);
    }
    [_getPrimaryValueFromOffset](value) {
      return value.dx;
    }
    get debugDescription() {
      return "horizontal drag";
    }
  };
  (src__gestures__monodrag.HorizontalDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    src__gestures__monodrag.HorizontalDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = src__gestures__monodrag.HorizontalDragGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__monodrag.HorizontalDragGestureRecognizer);
  dart.setMethodSignature(src__gestures__monodrag.HorizontalDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__monodrag.HorizontalDragGestureRecognizer.__proto__),
    [_isFlingGesture]: dart.fnType(core.bool, [src__gestures__velocity_tracker.VelocityEstimate]),
    [_getDeltaForDetails]: dart.fnType(ui$.Offset, [ui$.Offset]),
    [_getPrimaryValueFromOffset]: dart.fnType(core.double, [ui$.Offset])
  }));
  dart.setGetterSignature(src__gestures__monodrag.HorizontalDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__monodrag.HorizontalDragGestureRecognizer.__proto__),
    [_hasSufficientPendingDragDeltaToAccept]: core.bool,
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__monodrag.HorizontalDragGestureRecognizer, "package:flutter_web/src/gestures/monodrag.dart");
  src__gestures__monodrag.PanGestureRecognizer = class PanGestureRecognizer extends src__gestures__monodrag.DragGestureRecognizer {
    [_isFlingGesture](estimate) {
      let t5, t5$;
      let minVelocity = (t5 = this.minFlingVelocity, t5 == null ? src__gestures__constants.kMinFlingVelocity : t5);
      let minDistance = (t5$ = this.minFlingDistance, t5$ == null ? src__gestures__constants.kTouchSlop : t5$);
      return dart.notNull(estimate.pixelsPerSecond.distanceSquared) > dart.notNull(minVelocity) * dart.notNull(minVelocity) && dart.notNull(estimate.offset.distanceSquared) > dart.notNull(minDistance) * dart.notNull(minDistance);
    }
    get [_hasSufficientPendingDragDeltaToAccept]() {
      return dart.notNull(this[_pendingDragOffset].distance) > dart.notNull(src__gestures__constants.kPanSlop);
    }
    [_getDeltaForDetails](delta) {
      return delta;
    }
    [_getPrimaryValueFromOffset](value) {
      return null;
    }
    get debugDescription() {
      return "pan";
    }
  };
  (src__gestures__monodrag.PanGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    src__gestures__monodrag.PanGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner});
    ;
  }).prototype = src__gestures__monodrag.PanGestureRecognizer.prototype;
  dart.addTypeTests(src__gestures__monodrag.PanGestureRecognizer);
  dart.setMethodSignature(src__gestures__monodrag.PanGestureRecognizer, () => ({
    __proto__: dart.getMethods(src__gestures__monodrag.PanGestureRecognizer.__proto__),
    [_isFlingGesture]: dart.fnType(core.bool, [src__gestures__velocity_tracker.VelocityEstimate]),
    [_getDeltaForDetails]: dart.fnType(ui$.Offset, [ui$.Offset]),
    [_getPrimaryValueFromOffset]: dart.fnType(core.double, [ui$.Offset])
  }));
  dart.setGetterSignature(src__gestures__monodrag.PanGestureRecognizer, () => ({
    __proto__: dart.getGetters(src__gestures__monodrag.PanGestureRecognizer.__proto__),
    [_hasSufficientPendingDragDeltaToAccept]: core.bool,
    debugDescription: core.String
  }));
  dart.setLibraryUri(src__gestures__monodrag.PanGestureRecognizer, "package:flutter_web/src/gestures/monodrag.dart");
  dart.trackLibraries("packages/flutter_web/src/gestures/arena", {
    "package:flutter_web/src/gestures/arena.dart": src__gestures__arena,
    "package:flutter_web/src/gestures/debug.dart": src__gestures__debug,
    "package:flutter_web/src/gestures/pointer_router.dart": src__gestures__pointer_router,
    "package:flutter_web/src/gestures/events.dart": src__gestures__events,
    "package:flutter_web/src/gestures/scale.dart": src__gestures__scale,
    "package:flutter_web/src/gestures/velocity_tracker.dart": src__gestures__velocity_tracker,
    "package:flutter_web/src/gestures/lsq_solver.dart": src__gestures__lsq_solver,
    "package:flutter_web/src/gestures/recognizer.dart": src__gestures__recognizer,
    "package:flutter_web/src/gestures/team.dart": src__gestures__team,
    "package:flutter_web/src/gestures/binding.dart": src__gestures__binding,
    "package:flutter_web/src/gestures/pointer_signal_resolver.dart": src__gestures__pointer_signal_resolver,
    "package:flutter_web/src/gestures/hit_test.dart": src__gestures__hit_test,
    "package:flutter_web/src/gestures/converter.dart": src__gestures__converter,
    "package:flutter_web/src/gestures/constants.dart": src__gestures__constants,
    "package:flutter_web/src/gestures/multidrag.dart": src__gestures__multidrag,
    "package:flutter_web/src/gestures/drag_details.dart": src__gestures__drag_details,
    "package:flutter_web/src/gestures/drag.dart": src__gestures__drag,
    "package:flutter_web/src/gestures/tap.dart": src__gestures__tap,
    "package:flutter_web/src/gestures/eager.dart": src__gestures__eager,
    "package:flutter_web/src/gestures/force_press.dart": src__gestures__force_press,
    "package:flutter_web/src/gestures/mouse_tracking.dart": src__gestures__mouse_tracking,
    "package:flutter_web/src/gestures/multitap.dart": src__gestures__multitap,
    "package:flutter_web/src/gestures/long_press.dart": src__gestures__long_press,
    "package:flutter_web/src/gestures/monodrag.dart": src__gestures__monodrag
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart","org-dartlang-app:///packages/flutter_web/src/gestures/debug.dart","org-dartlang-app:///packages/flutter_web/src/gestures/pointer_router.dart","org-dartlang-app:///packages/flutter_web/src/gestures/events.dart","org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart","org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart","org-dartlang-app:///packages/flutter_web/src/gestures/velocity_tracker.dart","org-dartlang-app:///packages/flutter_web/src/gestures/lsq_solver.dart","org-dartlang-app:///packages/flutter_web/src/gestures/team.dart","org-dartlang-app:///packages/flutter_web/src/gestures/binding.dart","org-dartlang-app:///packages/flutter_web/src/gestures/pointer_signal_resolver.dart","org-dartlang-app:///packages/flutter_web/src/gestures/hit_test.dart","org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart","org-dartlang-app:///packages/flutter_web/src/gestures/constants.dart","org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart","org-dartlang-app:///packages/flutter_web/src/gestures/drag_details.dart","org-dartlang-app:///packages/flutter_web/src/gestures/drag.dart","org-dartlang-app:///packages/flutter_web/src/gestures/tap.dart","org-dartlang-app:///packages/flutter_web/src/gestures/eager.dart","org-dartlang-app:///packages/flutter_web/src/gestures/force_press.dart","org-dartlang-app:///packages/flutter_web/src/gestures/mouse_tracking.dart","org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart","org-dartlang-app:///packages/flutter_web/src/gestures/long_press.dart","org-dartlang-app:///packages/flutter_web/src/gestures/monodrag.dart"],"names":[],"mappings":"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","file":"arena.ddc.js"}');
  // Exports:
  return {
    src__gestures__arena: src__gestures__arena,
    src__gestures__debug: src__gestures__debug,
    src__gestures__pointer_router: src__gestures__pointer_router,
    src__gestures__events: src__gestures__events,
    src__gestures__scale: src__gestures__scale,
    src__gestures__velocity_tracker: src__gestures__velocity_tracker,
    src__gestures__lsq_solver: src__gestures__lsq_solver,
    src__gestures__recognizer: src__gestures__recognizer,
    src__gestures__team: src__gestures__team,
    src__gestures__binding: src__gestures__binding,
    src__gestures__pointer_signal_resolver: src__gestures__pointer_signal_resolver,
    src__gestures__hit_test: src__gestures__hit_test,
    src__gestures__converter: src__gestures__converter,
    src__gestures__constants: src__gestures__constants,
    src__gestures__multidrag: src__gestures__multidrag,
    src__gestures__drag_details: src__gestures__drag_details,
    src__gestures__drag: src__gestures__drag,
    src__gestures__tap: src__gestures__tap,
    src__gestures__eager: src__gestures__eager,
    src__gestures__force_press: src__gestures__force_press,
    src__gestures__mouse_tracking: src__gestures__mouse_tracking,
    src__gestures__multitap: src__gestures__multitap,
    src__gestures__long_press: src__gestures__long_press,
    src__gestures__monodrag: src__gestures__monodrag
  };
});

//# sourceMappingURL=arena.ddc.js.map
