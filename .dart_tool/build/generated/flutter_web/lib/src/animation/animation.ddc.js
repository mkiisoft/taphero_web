define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web/services', 'packages/flutter_web/src/scheduler/binding', 'packages/flutter_web/src/gestures/arena', 'packages/flutter_web/src/services/clipboard', 'packages/flutter_web/src/physics/clamped_simulation'], function(dart_sdk, ui, assertions, services, binding, arena, clipboard, clamped_simulation) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const convert = dart_sdk.convert;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui$ = ui.ui;
  const src__util = assertions.src__util;
  const src__foundation__diagnostics = assertions.src__foundation__diagnostics;
  const src__foundation__change_notifier = assertions.src__foundation__change_notifier;
  const src__foundation__observer_list = assertions.src__foundation__observer_list;
  const src__foundation__assertions = assertions.src__foundation__assertions;
  const src__foundation__binding = assertions.src__foundation__binding;
  const src__foundation__synchronous_future = assertions.src__foundation__synchronous_future;
  const src__foundation__platform = assertions.src__foundation__platform;
  const src__foundation__collections = assertions.src__foundation__collections;
  const src__services__binding = services.src__services__binding;
  const src__services__asset_bundle = services.src__services__asset_bundle;
  const src__scheduler__binding = binding.src__scheduler__binding;
  const src__gestures__recognizer = arena.src__gestures__recognizer;
  const src__services__text_editing = clipboard.src__services__text_editing;
  const src__physics__tolerance = clamped_simulation.src__physics__tolerance;
  const src__physics__friction_simulation = clamped_simulation.src__physics__friction_simulation;
  const src__physics__spring_simulation = clamped_simulation.src__physics__spring_simulation;
  const src__physics__simulation = clamped_simulation.src__physics__simulation;
  const src__painting__alignment = Object.create(dart.library);
  const src__animation__tween_sequence = Object.create(dart.library);
  const src__animation__tween = Object.create(dart.library);
  const src__animation__curves = Object.create(dart.library);
  const src__animation__animations = Object.create(dart.library);
  const src__animation__listener_helpers = Object.create(dart.library);
  const src__animation__animation = Object.create(dart.library);
  const src__painting__border_radius = Object.create(dart.library);
  const src__painting__paint_utilities = Object.create(dart.library);
  const src__painting__basic_types = Object.create(dart.library);
  const src__painting__image_decoder = Object.create(dart.library);
  const src__painting__binding = Object.create(dart.library);
  const src__painting__image_cache = Object.create(dart.library);
  const src__painting__image_stream = Object.create(dart.library);
  const src__painting__image_resolution = Object.create(dart.library);
  const src__painting__image_provider = Object.create(dart.library);
  const src__painting__notched_shapes = Object.create(dart.library);
  const src__painting__geometry = Object.create(dart.library);
  const src__painting__gradient = Object.create(dart.library);
  const src__painting__text_span = Object.create(dart.library);
  const src__painting__text_style = Object.create(dart.library);
  const src__painting__strut_style = Object.create(dart.library);
  const src__widgets__icon_data = Object.create(dart.library);
  const src__widgets__icon_theme_data = Object.create(dart.library);
  const src__painting__text_painter = Object.create(dart.library);
  const src__painting__debug = Object.create(dart.library);
  const src__painting__fractional_offset = Object.create(dart.library);
  const src__semantics__binding = Object.create(dart.library);
  const src__semantics__debug = Object.create(dart.library);
  const src__painting__colors = Object.create(dart.library);
  const src__painting__clip = Object.create(dart.library);
  const src__painting__box_shadow = Object.create(dart.library);
  const src__painting__box_fit = Object.create(dart.library);
  const src__rendering__platform_view = Object.create(dart.library);
  const src__widgets__scroll_simulation = Object.create(dart.library);
  const $toString = dartx.toString;
  const $truncate = dartx.truncate;
  const $toDouble = dartx.toDouble;
  const $modulo = dartx['%'];
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $isNotEmpty = dartx.isNotEmpty;
  const $addAll = dartx.addAll;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $runtimeType = dartx.runtimeType;
  const $round = dartx.round;
  const $floor = dartx.floor;
  const $truncateToDouble = dartx.truncateToDouble;
  const $clamp = dartx.clamp;
  const $abs = dartx.abs;
  const $isFinite = dartx.isFinite;
  const $clear = dartx.clear;
  const $remove = dartx.remove;
  const $_set = dartx._set;
  const $first = dartx.first;
  const $keys = dartx.keys;
  const $_equals = dartx._equals;
  const $removeAt = dartx.removeAt;
  const $isEmpty = dartx.isEmpty;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $where = dartx.where;
  const $lastIndexOf = dartx.lastIndexOf;
  const $substring = dartx.substring;
  const $buffer = dartx.buffer;
  const $asUint8List = dartx.asUint8List;
  const $hashCode = dartx.hashCode;
  const $join = dartx.join;
  const $codeUnitAt = dartx.codeUnitAt;
  const $any = dartx.any;
  const $forEach = dartx.forEach;
  const $toRadixString = dartx.toRadixString;
  const $toUpperCase = dartx.toUpperCase;
  const $padLeft = dartx.padLeft;
  const $ceilToDouble = dartx.ceilToDouble;
  const $last = dartx.last;
  const $isNaN = dartx.isNaN;
  const $toInt = dartx.toInt;
  const $sign = dartx.sign;
  let JSArrayOf_Interval = () => (JSArrayOf_Interval = dart.constFn(_interceptors.JSArray$(src__animation__tween_sequence._Interval)))();
  let AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(src__animation__animation.Animation$(core.double)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let ObserverListOfVoidTovoid = () => (ObserverListOfVoidTovoid = dart.constFn(src__foundation__observer_list.ObserverList$(VoidTovoid())))();
  let ListOfVoidTovoid = () => (ListOfVoidTovoid = dart.constFn(core.List$(VoidTovoid())))();
  let DiagnosticsPropertyOfAnimationLocalListenersMixin = () => (DiagnosticsPropertyOfAnimationLocalListenersMixin = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__animation__listener_helpers.AnimationLocalListenersMixin)))();
  let SyncIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = () => (SyncIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfAnimationLocalListenersMixin())))();
  let IterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = () => (IterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = dart.constFn(core.Iterable$(DiagnosticsPropertyOfAnimationLocalListenersMixin())))();
  let VoidToIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = () => (VoidToIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin(), [])))();
  let AnimationStatusTovoid = () => (AnimationStatusTovoid = dart.constFn(dart.fnType(dart.void, [src__animation__animation.AnimationStatus])))();
  let ObserverListOfAnimationStatusTovoid = () => (ObserverListOfAnimationStatusTovoid = dart.constFn(src__foundation__observer_list.ObserverList$(AnimationStatusTovoid())))();
  let ListOfAnimationStatusTovoid = () => (ListOfAnimationStatusTovoid = dart.constFn(core.List$(AnimationStatusTovoid())))();
  let DiagnosticsPropertyOfAnimationLocalStatusListenersMixin = () => (DiagnosticsPropertyOfAnimationLocalStatusListenersMixin = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__animation__listener_helpers.AnimationLocalStatusListenersMixin)))();
  let SyncIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = () => (SyncIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfAnimationLocalStatusListenersMixin())))();
  let IterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = () => (IterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = dart.constFn(core.Iterable$(DiagnosticsPropertyOfAnimationLocalStatusListenersMixin())))();
  let VoidToIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = () => (VoidToIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin(), [])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let LinkedMapOfObject$ImageStreamCompleter = () => (LinkedMapOfObject$ImageStreamCompleter = dart.constFn(_js_helper.LinkedMap$(core.Object, src__painting__image_stream.ImageStreamCompleter)))();
  let LinkedMapOfObject$_CachedImage = () => (LinkedMapOfObject$_CachedImage = dart.constFn(_js_helper.LinkedMap$(core.Object, src__painting__image_cache._CachedImage)))();
  let ImageInfoAndboolTovoid = () => (ImageInfoAndboolTovoid = dart.constFn(dart.fnType(dart.void, [src__painting__image_stream.ImageInfo, core.bool])))();
  let JSArrayOf_ImageListenerPair = () => (JSArrayOf_ImageListenerPair = dart.constFn(_interceptors.JSArray$(src__painting__image_stream._ImageListenerPair)))();
  let ObjectFlagPropertyOfImageStreamCompleter = () => (ObjectFlagPropertyOfImageStreamCompleter = dart.constFn(src__foundation__diagnostics.ObjectFlagProperty$(src__painting__image_stream.ImageStreamCompleter)))();
  let ListOf_ImageListenerPair = () => (ListOf_ImageListenerPair = dart.constFn(core.List$(src__painting__image_stream._ImageListenerPair)))();
  let ObjectFlagPropertyOfListOf_ImageListenerPair = () => (ObjectFlagPropertyOfListOf_ImageListenerPair = dart.constFn(src__foundation__diagnostics.ObjectFlagProperty$(ListOf_ImageListenerPair())))();
  let _ImageListenerPairToFn = () => (_ImageListenerPairToFn = dart.constFn(dart.fnType(ImageInfoAndboolTovoid(), [src__painting__image_stream._ImageListenerPair])))();
  let dynamicAndStackTraceTovoid = () => (dynamicAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic, core.StackTrace])))();
  let _ImageListenerPairToFn$ = () => (_ImageListenerPairToFn$ = dart.constFn(dart.fnType(dynamicAndStackTraceTovoid(), [src__painting__image_stream._ImageListenerPair])))();
  let FnTobool = () => (FnTobool = dart.constFn(dart.fnType(core.bool, [dynamicAndStackTraceTovoid()])))();
  let DiagnosticsPropertyOfImageInfo = () => (DiagnosticsPropertyOfImageInfo = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__painting__image_stream.ImageInfo)))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let MapOfString$ListOfString = () => (MapOfString$ListOfString = dart.constFn(core.Map$(core.String, ListOfString())))();
  let FutureOfMapOfString$ListOfString = () => (FutureOfMapOfString$ListOfString = dart.constFn(async.Future$(MapOfString$ListOfString())))();
  let StringToFutureOfMapOfString$ListOfString = () => (StringToFutureOfMapOfString$ListOfString = dart.constFn(dart.fnType(FutureOfMapOfString$ListOfString(), [core.String])))();
  let SynchronousFutureOfAssetBundleImageKey = () => (SynchronousFutureOfAssetBundleImageKey = dart.constFn(src__foundation__synchronous_future.SynchronousFuture$(src__painting__image_provider.AssetBundleImageKey)))();
  let MapOfString$ListOfStringToNull = () => (MapOfString$ListOfStringToNull = dart.constFn(dart.fnType(core.Null, [MapOfString$ListOfString()])))();
  let CompleterOfAssetBundleImageKey = () => (CompleterOfAssetBundleImageKey = dart.constFn(async.Completer$(src__painting__image_provider.AssetBundleImageKey)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let LinkedHashMapOfString$ListOfString = () => (LinkedHashMapOfString$ListOfString = dart.constFn(collection.LinkedHashMap$(core.String, ListOfString())))();
  let StringToListOfString = () => (StringToListOfString = dart.constFn(dart.fnType(ListOfString(), [core.String])))();
  let SynchronousFutureOfMapOfString$ListOfString = () => (SynchronousFutureOfMapOfString$ListOfString = dart.constFn(src__foundation__synchronous_future.SynchronousFuture$(MapOfString$ListOfString())))();
  let SplayTreeMapOfdouble$String = () => (SplayTreeMapOfdouble$String = dart.constFn(collection.SplayTreeMap$(core.double, core.String)))();
  let DiagnosticsPropertyOfImageProvider = () => (DiagnosticsPropertyOfImageProvider = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__painting__image_provider.ImageProvider)))();
  let DiagnosticsPropertyOfAssetBundleImageKey = () => (DiagnosticsPropertyOfAssetBundleImageKey = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__painting__image_provider.AssetBundleImageKey)))();
  let DiagnosticsPropertyOfObject = () => (DiagnosticsPropertyOfObject = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(core.Object)))();
  let SyncIterableOfDiagnosticsPropertyOfObject = () => (SyncIterableOfDiagnosticsPropertyOfObject = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfObject())))();
  let IterableOfDiagnosticsPropertyOfObject = () => (IterableOfDiagnosticsPropertyOfObject = dart.constFn(core.Iterable$(DiagnosticsPropertyOfObject())))();
  let VoidToIterableOfDiagnosticsPropertyOfObject = () => (VoidToIterableOfDiagnosticsPropertyOfObject = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfObject(), [])))();
  let VoidToImageStreamCompleter = () => (VoidToImageStreamCompleter = dart.constFn(dart.fnType(src__painting__image_stream.ImageStreamCompleter, [])))();
  let DiagnosticsPropertyOfImageConfiguration = () => (DiagnosticsPropertyOfImageConfiguration = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__painting__image_provider.ImageConfiguration)))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let dynamicAndStackTraceToFutureOfNull = () => (dynamicAndStackTraceToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [dart.dynamic, core.StackTrace])))();
  let SynchronousFutureOfNetworkImage = () => (SynchronousFutureOfNetworkImage = dart.constFn(src__foundation__synchronous_future.SynchronousFuture$(src__painting__image_provider.NetworkImage)))();
  let DiagnosticsPropertyOfNetworkImage = () => (DiagnosticsPropertyOfNetworkImage = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__painting__image_provider.NetworkImage)))();
  let SyncIterableOfDiagnosticsPropertyOfImageProvider = () => (SyncIterableOfDiagnosticsPropertyOfImageProvider = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfImageProvider())))();
  let IterableOfDiagnosticsPropertyOfImageProvider = () => (IterableOfDiagnosticsPropertyOfImageProvider = dart.constFn(core.Iterable$(DiagnosticsPropertyOfImageProvider())))();
  let VoidToIterableOfDiagnosticsPropertyOfImageProvider = () => (VoidToIterableOfDiagnosticsPropertyOfImageProvider = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfImageProvider(), [])))();
  let SynchronousFutureOfMemoryImage = () => (SynchronousFutureOfMemoryImage = dart.constFn(src__foundation__synchronous_future.SynchronousFuture$(src__painting__image_provider.MemoryImage)))();
  let ListOfOffset = () => (ListOfOffset = dart.constFn(core.List$(ui$.Offset)))();
  let ListOfdouble = () => (ListOfdouble = dart.constFn(core.List$(core.double)))();
  let intTodouble = () => (intTodouble = dart.constFn(dart.fnType(core.double, [core.int])))();
  let ColorToColor = () => (ColorToColor = dart.constFn(dart.fnType(ui$.Color, [ui$.Color])))();
  let ColorToString = () => (ColorToString = dart.constFn(dart.fnType(core.String, [ui$.Color])))();
  let JSArrayOfColor = () => (JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui$.Color)))();
  let JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  let TextSpanTobool = () => (TextSpanTobool = dart.constFn(dart.fnType(core.bool, [src__painting__text_span.TextSpan])))();
  let DiagnosticsPropertyOfGestureRecognizer = () => (DiagnosticsPropertyOfGestureRecognizer = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__gestures__recognizer.GestureRecognizer)))();
  let TextSpanToDiagnosticsNode = () => (TextSpanToDiagnosticsNode = dart.constFn(dart.fnType(src__foundation__diagnostics.DiagnosticsNode, [src__painting__text_span.TextSpan])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(src__foundation__diagnostics.DiagnosticsNode)))();
  let DiagnosticsPropertyOfColor = () => (DiagnosticsPropertyOfColor = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(ui$.Color)))();
  let IterablePropertyOfString = () => (IterablePropertyOfString = dart.constFn(src__foundation__diagnostics.IterableProperty$(core.String)))();
  let DiagnosticsPropertyOfFontWeight = () => (DiagnosticsPropertyOfFontWeight = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(ui$.FontWeight)))();
  let EnumPropertyOfFontStyle = () => (EnumPropertyOfFontStyle = dart.constFn(src__foundation__diagnostics.EnumProperty$(ui$.FontStyle)))();
  let EnumPropertyOfTextBaseline = () => (EnumPropertyOfTextBaseline = dart.constFn(src__foundation__diagnostics.EnumProperty$(ui$.TextBaseline)))();
  let DiagnosticsPropertyOfLocale = () => (DiagnosticsPropertyOfLocale = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(ui$.Locale)))();
  let DiagnosticsPropertyOfPaint = () => (DiagnosticsPropertyOfPaint = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(ui$.Paint)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let DiagnosticsPropertyOfTextDecoration = () => (DiagnosticsPropertyOfTextDecoration = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(ui$.TextDecoration)))();
  let DiagnosticsNodeTobool = () => (DiagnosticsNodeTobool = dart.constFn(dart.fnType(core.bool, [src__foundation__diagnostics.DiagnosticsNode])))();
  let DiagnosticsPropertyOfbool = () => (DiagnosticsPropertyOfbool = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(core.bool)))();
  let JSArrayOfTextBox = () => (JSArrayOfTextBox = dart.constFn(_interceptors.JSArray$(ui$.TextBox)))();
  let boolTovoid = () => (boolTovoid = dart.constFn(dart.fnType(dart.void, [core.bool])))();
  let JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(src__painting__box_shadow.BoxShadow)))();
  const _x = dart.privateName(src__painting__alignment, "_x");
  const _start = dart.privateName(src__painting__alignment, "_start");
  const _y = dart.privateName(src__painting__alignment, "_y");
  src__painting__alignment.AlignmentGeometry = class AlignmentGeometry extends core.Object {
    add(other) {
      return new src__painting__alignment._MixedAlignment.new(dart.notNull(this[_x]) + dart.notNull(other[_x]), dart.notNull(this[_start]) + dart.notNull(other[_start]), dart.notNull(this[_y]) + dart.notNull(other[_y]));
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/alignment.dart", 101, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b['*'](t);
      if (b == null) return a['*'](1.0 - dart.notNull(t));
      if (src__painting__alignment.Alignment.is(a) && src__painting__alignment.Alignment.is(b)) return src__painting__alignment.Alignment.lerp(a, b, t);
      if (src__painting__alignment.AlignmentDirectional.is(a) && src__painting__alignment.AlignmentDirectional.is(b)) return src__painting__alignment.AlignmentDirectional.lerp(a, b, t);
      return new src__painting__alignment._MixedAlignment.new(ui$.lerpDouble(a[_x], b[_x], t), ui$.lerpDouble(a[_start], b[_start], t), ui$.lerpDouble(a[_y], b[_y], t));
    }
    toString() {
      if (dart.test(src__util.assertionsEnabled)) {
        if (this[_start] === 0.0) return src__painting__alignment.Alignment._stringify(this[_x], this[_y]);
        if (this[_x] === 0.0) return src__painting__alignment.AlignmentDirectional._stringify(this[_start], this[_y]);
        return dart.notNull(src__painting__alignment.Alignment._stringify(this[_x], this[_y])) + " + " + dart.notNull(src__painting__alignment.AlignmentDirectional._stringify(this[_start], 0.0));
      } else {
        return super[$toString]();
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (!src__painting__alignment.AlignmentGeometry.is(other)) return false;
      let typedOther = src__painting__alignment.AlignmentGeometry._check(other);
      return this[_x] == typedOther[_x] && this[_start] == typedOther[_start] && this[_y] == typedOther[_y];
    }
    get hashCode() {
      return ui$.hashValues(this[_x], this[_start], this[_y]);
    }
    get x() {
      return this[_x];
    }
    get y() {
      return this[_y];
    }
  };
  (src__painting__alignment.AlignmentGeometry.new = function() {
    ;
  }).prototype = src__painting__alignment.AlignmentGeometry.prototype;
  dart.addTypeTests(src__painting__alignment.AlignmentGeometry);
  dart.setMethodSignature(src__painting__alignment.AlignmentGeometry, () => ({
    __proto__: dart.getMethods(src__painting__alignment.AlignmentGeometry.__proto__),
    add: dart.fnType(src__painting__alignment.AlignmentGeometry, [src__painting__alignment.AlignmentGeometry])
  }));
  dart.setGetterSignature(src__painting__alignment.AlignmentGeometry, () => ({
    __proto__: dart.getGetters(src__painting__alignment.AlignmentGeometry.__proto__),
    x: core.double,
    y: core.double
  }));
  dart.setLibraryUri(src__painting__alignment.AlignmentGeometry, "package:flutter_web/src/painting/alignment.dart");
  dart.defineExtensionMethods(src__painting__alignment.AlignmentGeometry, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__painting__alignment.AlignmentGeometry, ['hashCode']);
  src__painting__alignment.Alignment = class Alignment extends src__painting__alignment.AlignmentGeometry {
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
    get [_x]() {
      return this.x;
    }
    get [_start]() {
      return 0.0;
    }
    get [_y]() {
      return this.y;
    }
    add(other) {
      if (src__painting__alignment.Alignment.is(other)) return this['+'](other);
      return super.add(other);
    }
    ['-'](other) {
      return new src__painting__alignment.Alignment.new(dart.notNull(this.x) - dart.notNull(other.x), dart.notNull(this.y) - dart.notNull(other.y));
    }
    ['+'](other) {
      return new src__painting__alignment.Alignment.new(dart.notNull(this.x) + dart.notNull(other.x), dart.notNull(this.y) + dart.notNull(other.y));
    }
    _negate() {
      return new src__painting__alignment.Alignment.new(-dart.notNull(this.x), -dart.notNull(this.y));
    }
    ['*'](other) {
      return new src__painting__alignment.Alignment.new(dart.notNull(this.x) * dart.notNull(other), dart.notNull(this.y) * dart.notNull(other));
    }
    ['/'](other) {
      return new src__painting__alignment.Alignment.new(dart.notNull(this.x) / dart.notNull(other), dart.notNull(this.y) / dart.notNull(other));
    }
    ['~/'](other) {
      return new src__painting__alignment.Alignment.new((dart.notNull(this.x) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this.y) / dart.notNull(other))[$truncate]()[$toDouble]());
    }
    ['%'](other) {
      return new src__painting__alignment.Alignment.new(this.x[$modulo](other), this.y[$modulo](other));
    }
    alongOffset(other) {
      let centerX = dart.notNull(other.dx) / 2.0;
      let centerY = dart.notNull(other.dy) / 2.0;
      return new ui$.Offset.new(centerX + dart.notNull(this.x) * centerX, centerY + dart.notNull(this.y) * centerY);
    }
    alongSize(other) {
      let centerX = dart.notNull(other.width) / 2.0;
      let centerY = dart.notNull(other.height) / 2.0;
      return new ui$.Offset.new(centerX + dart.notNull(this.x) * centerX, centerY + dart.notNull(this.y) * centerY);
    }
    withinRect(rect) {
      let halfWidth = dart.notNull(rect.width) / 2.0;
      let halfHeight = dart.notNull(rect.height) / 2.0;
      return new ui$.Offset.new(dart.notNull(rect.left) + halfWidth + dart.notNull(this.x) * halfWidth, dart.notNull(rect.top) + halfHeight + dart.notNull(this.y) * halfHeight);
    }
    inscribe(size, rect) {
      let halfWidthDelta = (dart.notNull(rect.width) - dart.notNull(size.width)) / 2.0;
      let halfHeightDelta = (dart.notNull(rect.height) - dart.notNull(size.height)) / 2.0;
      return new ui$.Rect.fromLTWH(dart.notNull(rect.left) + halfWidthDelta + dart.notNull(this.x) * halfWidthDelta, dart.notNull(rect.top) + halfHeightDelta + dart.notNull(this.y) * halfHeightDelta, size.width, size.height);
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/alignment.dart", 353, 12, "ert(t != ");
      if (a == null && b == null) return null;
      if (a == null) return new src__painting__alignment.Alignment.new(ui$.lerpDouble(0.0, b.x, t), ui$.lerpDouble(0.0, b.y, t));
      if (b == null) return new src__painting__alignment.Alignment.new(ui$.lerpDouble(a.x, 0.0, t), ui$.lerpDouble(a.y, 0.0, t));
      return new src__painting__alignment.Alignment.new(ui$.lerpDouble(a.x, b.x, t), ui$.lerpDouble(a.y, b.y, t));
    }
    static _stringify(x, y) {
      if (x === -1.0 && y === -1.0) return "topLeft";
      if (x === 0.0 && y === -1.0) return "topCenter";
      if (x === 1.0 && y === -1.0) return "topRight";
      if (x === -1.0 && y === 0.0) return "centerLeft";
      if (x === 0.0 && y === 0.0) return "center";
      if (x === 1.0 && y === 0.0) return "centerRight";
      if (x === -1.0 && y === 1.0) return "bottomLeft";
      if (x === 0.0 && y === 1.0) return "bottomCenter";
      if (x === 1.0 && y === 1.0) return "bottomRight";
      return "Alignment(" + x[$toStringAsFixed](1) + ", " + y[$toStringAsFixed](1) + ")";
    }
    resolve(direction) {
      return this;
    }
    toString() {
      if (dart.test(src__util.assertionsEnabled)) {
        return src__painting__alignment.Alignment._stringify(this.x, this.y);
      } else {
        return super.toString();
      }
    }
  };
  (src__painting__alignment.Alignment.new = function(x, y) {
    this[x$] = x;
    this[y$] = y;
    if (!(x != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/alignment.dart", 193, 16, "x != null");
    if (!(y != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/alignment.dart", 194, 16, "y != null");
    src__painting__alignment.Alignment.__proto__.new.call(this);
    ;
  }).prototype = src__painting__alignment.Alignment.prototype;
  dart.addTypeTests(src__painting__alignment.Alignment);
  const x$ = Symbol("Alignment.x");
  const y$ = Symbol("Alignment.y");
  dart.setMethodSignature(src__painting__alignment.Alignment, () => ({
    __proto__: dart.getMethods(src__painting__alignment.Alignment.__proto__),
    '-': dart.fnType(src__painting__alignment.Alignment, [src__painting__alignment.Alignment]),
    '+': dart.fnType(src__painting__alignment.Alignment, [src__painting__alignment.Alignment]),
    _negate: dart.fnType(src__painting__alignment.Alignment, []),
    '*': dart.fnType(src__painting__alignment.Alignment, [core.double]),
    '/': dart.fnType(src__painting__alignment.Alignment, [core.double]),
    '~/': dart.fnType(src__painting__alignment.Alignment, [core.double]),
    '%': dart.fnType(src__painting__alignment.Alignment, [core.double]),
    alongOffset: dart.fnType(ui$.Offset, [ui$.Offset]),
    alongSize: dart.fnType(ui$.Offset, [ui$.Size]),
    withinRect: dart.fnType(ui$.Offset, [ui$.Rect]),
    inscribe: dart.fnType(ui$.Rect, [ui$.Size, ui$.Rect]),
    resolve: dart.fnType(src__painting__alignment.Alignment, [ui$.TextDirection])
  }));
  dart.setGetterSignature(src__painting__alignment.Alignment, () => ({
    __proto__: dart.getGetters(src__painting__alignment.Alignment.__proto__),
    [_x]: core.double,
    [_start]: core.double,
    [_y]: core.double
  }));
  dart.setLibraryUri(src__painting__alignment.Alignment, "package:flutter_web/src/painting/alignment.dart");
  dart.setFieldSignature(src__painting__alignment.Alignment, () => ({
    __proto__: dart.getFields(src__painting__alignment.Alignment.__proto__),
    x: dart.finalFieldType(core.double),
    y: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__painting__alignment.Alignment, ['toString']);
  dart.defineLazy(src__painting__alignment.Alignment, {
    /*src__painting__alignment.Alignment.topLeft*/get topLeft() {
      return dart.const(new src__painting__alignment.Alignment.new(-1.0, -1.0));
    },
    /*src__painting__alignment.Alignment.topCenter*/get topCenter() {
      return dart.const(new src__painting__alignment.Alignment.new(0.0, -1.0));
    },
    /*src__painting__alignment.Alignment.topRight*/get topRight() {
      return dart.const(new src__painting__alignment.Alignment.new(1.0, -1.0));
    },
    /*src__painting__alignment.Alignment.centerLeft*/get centerLeft() {
      return dart.const(new src__painting__alignment.Alignment.new(-1.0, 0.0));
    },
    /*src__painting__alignment.Alignment.center*/get center() {
      return dart.const(new src__painting__alignment.Alignment.new(0.0, 0.0));
    },
    /*src__painting__alignment.Alignment.centerRight*/get centerRight() {
      return dart.const(new src__painting__alignment.Alignment.new(1.0, 0.0));
    },
    /*src__painting__alignment.Alignment.bottomLeft*/get bottomLeft() {
      return dart.const(new src__painting__alignment.Alignment.new(-1.0, 1.0));
    },
    /*src__painting__alignment.Alignment.bottomCenter*/get bottomCenter() {
      return dart.const(new src__painting__alignment.Alignment.new(0.0, 1.0));
    },
    /*src__painting__alignment.Alignment.bottomRight*/get bottomRight() {
      return dart.const(new src__painting__alignment.Alignment.new(1.0, 1.0));
    }
  });
  src__painting__alignment.AlignmentDirectional = class AlignmentDirectional extends src__painting__alignment.AlignmentGeometry {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get y() {
      return this[y$0];
    }
    set y(value) {
      super.y = value;
    }
    get [_x]() {
      return 0.0;
    }
    get [_start]() {
      return this.start;
    }
    get [_y]() {
      return this.y;
    }
    add(other) {
      if (src__painting__alignment.AlignmentDirectional.is(other)) return this['+'](other);
      return super.add(other);
    }
    ['-'](other) {
      return new src__painting__alignment.AlignmentDirectional.new(dart.notNull(this.start) - dart.notNull(other.start), dart.notNull(this.y) - dart.notNull(other.y));
    }
    ['+'](other) {
      return new src__painting__alignment.AlignmentDirectional.new(dart.notNull(this.start) + dart.notNull(other.start), dart.notNull(this.y) + dart.notNull(other.y));
    }
    _negate() {
      return new src__painting__alignment.AlignmentDirectional.new(-dart.notNull(this.start), -dart.notNull(this.y));
    }
    ['*'](other) {
      return new src__painting__alignment.AlignmentDirectional.new(dart.notNull(this.start) * dart.notNull(other), dart.notNull(this.y) * dart.notNull(other));
    }
    ['/'](other) {
      return new src__painting__alignment.AlignmentDirectional.new(dart.notNull(this.start) / dart.notNull(other), dart.notNull(this.y) / dart.notNull(other));
    }
    ['~/'](other) {
      return new src__painting__alignment.AlignmentDirectional.new((dart.notNull(this.start) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this.y) / dart.notNull(other))[$truncate]()[$toDouble]());
    }
    ['%'](other) {
      return new src__painting__alignment.AlignmentDirectional.new(this.start[$modulo](other), this.y[$modulo](other));
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/alignment.dart", 552, 12, "ert(t != ");
      if (a == null && b == null) return null;
      if (a == null) return new src__painting__alignment.AlignmentDirectional.new(ui$.lerpDouble(0.0, b.start, t), ui$.lerpDouble(0.0, b.y, t));
      if (b == null) return new src__painting__alignment.AlignmentDirectional.new(ui$.lerpDouble(a.start, 0.0, t), ui$.lerpDouble(a.y, 0.0, t));
      return new src__painting__alignment.AlignmentDirectional.new(ui$.lerpDouble(a.start, b.start, t), ui$.lerpDouble(a.y, b.y, t));
    }
    resolve(direction) {
      if (!(direction != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/alignment.dart", 566, 12, "ert(direction != ");
      switch (direction) {
        case ui$.TextDirection.rtl:
        {
          return new src__painting__alignment.Alignment.new(-dart.notNull(this.start), this.y);
        }
        case ui$.TextDirection.ltr:
        {
          return new src__painting__alignment.Alignment.new(this.start, this.y);
        }
      }
      return null;
    }
    static _stringify(start, y) {
      if (start === -1.0 && y === -1.0) return "AlignmentDirectional.topStart";
      if (start === 0.0 && y === -1.0) return "AlignmentDirectional.topCenter";
      if (start === 1.0 && y === -1.0) return "AlignmentDirectional.topEnd";
      if (start === -1.0 && y === 0.0) return "AlignmentDirectional.centerStart";
      if (start === 0.0 && y === 0.0) return "AlignmentDirectional.center";
      if (start === 1.0 && y === 0.0) return "AlignmentDirectional.centerEnd";
      if (start === -1.0 && y === 1.0) return "AlignmentDirectional.bottomStart";
      if (start === 0.0 && y === 1.0) return "AlignmentDirectional.bottomCenter";
      if (start === 1.0 && y === 1.0) return "AlignmentDirectional.bottomEnd";
      return "AlignmentDirectional(" + start[$toStringAsFixed](1) + ", " + y[$toStringAsFixed](1) + ")";
    }
    toString() {
      return src__painting__alignment.AlignmentDirectional._stringify(this.start, this.y);
    }
  };
  (src__painting__alignment.AlignmentDirectional.new = function(start, y) {
    this[start$] = start;
    this[y$0] = y;
    if (!(start != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/alignment.dart", 405, 16, "ert(start != ");
    if (!(y != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/alignment.dart", 406, 16, "ert(y != ");
    src__painting__alignment.AlignmentDirectional.__proto__.new.call(this);
    ;
  }).prototype = src__painting__alignment.AlignmentDirectional.prototype;
  dart.addTypeTests(src__painting__alignment.AlignmentDirectional);
  const start$ = Symbol("AlignmentDirectional.start");
  const y$0 = Symbol("AlignmentDirectional.y");
  dart.setMethodSignature(src__painting__alignment.AlignmentDirectional, () => ({
    __proto__: dart.getMethods(src__painting__alignment.AlignmentDirectional.__proto__),
    '-': dart.fnType(src__painting__alignment.AlignmentDirectional, [src__painting__alignment.AlignmentDirectional]),
    '+': dart.fnType(src__painting__alignment.AlignmentDirectional, [src__painting__alignment.AlignmentDirectional]),
    _negate: dart.fnType(src__painting__alignment.AlignmentDirectional, []),
    '*': dart.fnType(src__painting__alignment.AlignmentDirectional, [core.double]),
    '/': dart.fnType(src__painting__alignment.AlignmentDirectional, [core.double]),
    '~/': dart.fnType(src__painting__alignment.AlignmentDirectional, [core.double]),
    '%': dart.fnType(src__painting__alignment.AlignmentDirectional, [core.double]),
    resolve: dart.fnType(src__painting__alignment.Alignment, [ui$.TextDirection])
  }));
  dart.setGetterSignature(src__painting__alignment.AlignmentDirectional, () => ({
    __proto__: dart.getGetters(src__painting__alignment.AlignmentDirectional.__proto__),
    [_x]: core.double,
    [_start]: core.double,
    [_y]: core.double
  }));
  dart.setLibraryUri(src__painting__alignment.AlignmentDirectional, "package:flutter_web/src/painting/alignment.dart");
  dart.setFieldSignature(src__painting__alignment.AlignmentDirectional, () => ({
    __proto__: dart.getFields(src__painting__alignment.AlignmentDirectional.__proto__),
    start: dart.finalFieldType(core.double),
    y: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__painting__alignment.AlignmentDirectional, ['toString']);
  dart.defineLazy(src__painting__alignment.AlignmentDirectional, {
    /*src__painting__alignment.AlignmentDirectional.topStart*/get topStart() {
      return dart.const(new src__painting__alignment.AlignmentDirectional.new(-1.0, -1.0));
    },
    /*src__painting__alignment.AlignmentDirectional.topCenter*/get topCenter() {
      return dart.const(new src__painting__alignment.AlignmentDirectional.new(0.0, -1.0));
    },
    /*src__painting__alignment.AlignmentDirectional.topEnd*/get topEnd() {
      return dart.const(new src__painting__alignment.AlignmentDirectional.new(1.0, -1.0));
    },
    /*src__painting__alignment.AlignmentDirectional.centerStart*/get centerStart() {
      return dart.const(new src__painting__alignment.AlignmentDirectional.new(-1.0, 0.0));
    },
    /*src__painting__alignment.AlignmentDirectional.center*/get center() {
      return dart.const(new src__painting__alignment.AlignmentDirectional.new(0.0, 0.0));
    },
    /*src__painting__alignment.AlignmentDirectional.centerEnd*/get centerEnd() {
      return dart.const(new src__painting__alignment.AlignmentDirectional.new(1.0, 0.0));
    },
    /*src__painting__alignment.AlignmentDirectional.bottomStart*/get bottomStart() {
      return dart.const(new src__painting__alignment.AlignmentDirectional.new(-1.0, 1.0));
    },
    /*src__painting__alignment.AlignmentDirectional.bottomCenter*/get bottomCenter() {
      return dart.const(new src__painting__alignment.AlignmentDirectional.new(0.0, 1.0));
    },
    /*src__painting__alignment.AlignmentDirectional.bottomEnd*/get bottomEnd() {
      return dart.const(new src__painting__alignment.AlignmentDirectional.new(1.0, 1.0));
    }
  });
  src__painting__alignment._MixedAlignment = class _MixedAlignment extends src__painting__alignment.AlignmentGeometry {
    get [_x]() {
      return this[_x$];
    }
    set [_x](value) {
      super[_x] = value;
    }
    get [_start]() {
      return this[_start$];
    }
    set [_start](value) {
      super[_start] = value;
    }
    get [_y]() {
      return this[_y$];
    }
    set [_y](value) {
      super[_y] = value;
    }
    _negate() {
      return new src__painting__alignment._MixedAlignment.new(-dart.notNull(this[_x]), -dart.notNull(this[_start]), -dart.notNull(this[_y]));
    }
    ['*'](other) {
      return new src__painting__alignment._MixedAlignment.new(dart.notNull(this[_x]) * dart.notNull(other), dart.notNull(this[_start]) * dart.notNull(other), dart.notNull(this[_y]) * dart.notNull(other));
    }
    ['/'](other) {
      return new src__painting__alignment._MixedAlignment.new(dart.notNull(this[_x]) / dart.notNull(other), dart.notNull(this[_start]) / dart.notNull(other), dart.notNull(this[_y]) / dart.notNull(other));
    }
    ['~/'](other) {
      return new src__painting__alignment._MixedAlignment.new((dart.notNull(this[_x]) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this[_start]) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this[_y]) / dart.notNull(other))[$truncate]()[$toDouble]());
    }
    ['%'](other) {
      return new src__painting__alignment._MixedAlignment.new(this[_x][$modulo](other), this[_start][$modulo](other), this[_y][$modulo](other));
    }
    resolve(direction) {
      if (!(direction != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/alignment.dart", 653, 12, "ert(direction != ");
      switch (direction) {
        case ui$.TextDirection.rtl:
        {
          return new src__painting__alignment.Alignment.new(dart.notNull(this[_x]) - dart.notNull(this[_start]), this[_y]);
        }
        case ui$.TextDirection.ltr:
        {
          return new src__painting__alignment.Alignment.new(dart.notNull(this[_x]) + dart.notNull(this[_start]), this[_y]);
        }
      }
      return null;
    }
  };
  (src__painting__alignment._MixedAlignment.new = function(_x, _start, _y) {
    this[_x$] = _x;
    this[_start$] = _start;
    this[_y$] = _y;
    src__painting__alignment._MixedAlignment.__proto__.new.call(this);
    ;
  }).prototype = src__painting__alignment._MixedAlignment.prototype;
  dart.addTypeTests(src__painting__alignment._MixedAlignment);
  const _x$ = Symbol("_MixedAlignment._x");
  const _start$ = Symbol("_MixedAlignment._start");
  const _y$ = Symbol("_MixedAlignment._y");
  dart.setMethodSignature(src__painting__alignment._MixedAlignment, () => ({
    __proto__: dart.getMethods(src__painting__alignment._MixedAlignment.__proto__),
    _negate: dart.fnType(src__painting__alignment._MixedAlignment, []),
    '*': dart.fnType(src__painting__alignment._MixedAlignment, [core.double]),
    '/': dart.fnType(src__painting__alignment._MixedAlignment, [core.double]),
    '~/': dart.fnType(src__painting__alignment._MixedAlignment, [core.double]),
    '%': dart.fnType(src__painting__alignment._MixedAlignment, [core.double]),
    resolve: dart.fnType(src__painting__alignment.Alignment, [ui$.TextDirection])
  }));
  dart.setLibraryUri(src__painting__alignment._MixedAlignment, "package:flutter_web/src/painting/alignment.dart");
  dart.setFieldSignature(src__painting__alignment._MixedAlignment, () => ({
    __proto__: dart.getFields(src__painting__alignment._MixedAlignment.__proto__),
    [_x]: dart.finalFieldType(core.double),
    [_start]: dart.finalFieldType(core.double),
    [_y]: dart.finalFieldType(core.double)
  }));
  const _items = dart.privateName(src__animation__tween_sequence, "_items");
  const _intervals = dart.privateName(src__animation__tween_sequence, "_intervals");
  const _evaluateAt = dart.privateName(src__animation__tween_sequence, "_evaluateAt");
  const _is_Animatable_default = Symbol('_is_Animatable_default');
  src__animation__tween.Animatable$ = dart.generic(T => {
    let _AnimatedEvaluationOfT = () => (_AnimatedEvaluationOfT = dart.constFn(src__animation__tween._AnimatedEvaluation$(T)))();
    let _ChainedEvaluationOfT = () => (_ChainedEvaluationOfT = dart.constFn(src__animation__tween._ChainedEvaluation$(T)))();
    class Animatable extends core.Object {
      evaluate(animation) {
        return this.transform(animation.value);
      }
      animate(parent) {
        return new (_AnimatedEvaluationOfT()).new(parent, this);
      }
      chain(parent) {
        return new (_ChainedEvaluationOfT()).new(parent, this);
      }
    }
    (Animatable.new = function() {
      ;
    }).prototype = Animatable.prototype;
    dart.addTypeTests(Animatable);
    Animatable.prototype[_is_Animatable_default] = true;
    dart.setMethodSignature(Animatable, () => ({
      __proto__: dart.getMethods(Animatable.__proto__),
      evaluate: dart.fnType(T, [src__animation__animation.Animation$(core.double)]),
      animate: dart.fnType(src__animation__animation.Animation$(T), [src__animation__animation.Animation$(core.double)]),
      chain: dart.fnType(src__animation__tween.Animatable$(T), [src__animation__tween.Animatable$(core.double)])
    }));
    dart.setLibraryUri(Animatable, "package:flutter_web/src/animation/tween.dart");
    return Animatable;
  });
  src__animation__tween.Animatable = src__animation__tween.Animatable$();
  dart.addTypeTests(src__animation__tween.Animatable, _is_Animatable_default);
  const _is_TweenSequence_default = Symbol('_is_TweenSequence_default');
  src__animation__tween_sequence.TweenSequence$ = dart.generic(T => {
    let TweenSequenceItemOfT = () => (TweenSequenceItemOfT = dart.constFn(src__animation__tween_sequence.TweenSequenceItem$(T)))();
    let JSArrayOfTweenSequenceItemOfT = () => (JSArrayOfTweenSequenceItemOfT = dart.constFn(_interceptors.JSArray$(TweenSequenceItemOfT())))();
    class TweenSequence extends src__animation__tween.Animatable$(T) {
      [_evaluateAt](t, index) {
        let element = this[_items][$_get](index);
        let tInterval = this[_intervals][$_get](index).value(t);
        return element.tween.transform(tInterval);
      }
      transform(t) {
        if (!(dart.notNull(t) >= 0.0 && dart.notNull(t) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/tween_sequence.dart", 79, 12, "t >= 0.0 && t <= 1.0");
        if (t === 1.0) return this[_evaluateAt](t, dart.notNull(this[_items][$length]) - 1);
        for (let index = 0; index < dart.notNull(this[_items][$length]); index = index + 1) {
          if (dart.test(this[_intervals][$_get](index).contains(t))) return this[_evaluateAt](t, index);
        }
        if (!false) dart.assertFailed("TweenSequence.evaluate() could not find a interval for " + dart.str(t), "org-dartlang-app:///packages/flutter_web/src/animation/tween_sequence.dart", 85, 12, "false");
        return null;
      }
      toString() {
        return "TweenSequence(" + dart.str(this[_items][$length]) + " items)";
      }
    }
    (TweenSequence.new = function(items) {
      this[_items] = JSArrayOfTweenSequenceItemOfT().of([]);
      this[_intervals] = JSArrayOf_Interval().of([]);
      if (!(items != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/tween_sequence.dart", 51, 16, "items != null");
      if (!dart.test(items[$isNotEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/tween_sequence.dart", 52, 16, "items.isNotEmpty");
      TweenSequence.__proto__.new.call(this);
      this[_items][$addAll](items);
      let totalWeight = 0.0;
      for (let item of this[_items])
        totalWeight = totalWeight + dart.notNull(item.weight);
      if (!(totalWeight > 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/tween_sequence.dart", 57, 12, "totalWeight > 0.0");
      let start = 0.0;
      for (let i = 0; i < dart.notNull(this[_items][$length]); i = i + 1) {
        let end = i === dart.notNull(this[_items][$length]) - 1 ? 1.0 : start + dart.notNull(this[_items][$_get](i).weight) / totalWeight;
        this[_intervals][$add](new src__animation__tween_sequence._Interval.new(start, end));
        start = end;
      }
    }).prototype = TweenSequence.prototype;
    dart.addTypeTests(TweenSequence);
    TweenSequence.prototype[_is_TweenSequence_default] = true;
    dart.setMethodSignature(TweenSequence, () => ({
      __proto__: dart.getMethods(TweenSequence.__proto__),
      [_evaluateAt]: dart.fnType(T, [core.double, core.int]),
      transform: dart.fnType(T, [core.double])
    }));
    dart.setLibraryUri(TweenSequence, "package:flutter_web/src/animation/tween_sequence.dart");
    dart.setFieldSignature(TweenSequence, () => ({
      __proto__: dart.getFields(TweenSequence.__proto__),
      [_items]: dart.finalFieldType(core.List$(src__animation__tween_sequence.TweenSequenceItem$(T))),
      [_intervals]: dart.finalFieldType(core.List$(src__animation__tween_sequence._Interval))
    }));
    dart.defineExtensionMethods(TweenSequence, ['toString']);
    return TweenSequence;
  });
  src__animation__tween_sequence.TweenSequence = src__animation__tween_sequence.TweenSequence$();
  dart.addTypeTests(src__animation__tween_sequence.TweenSequence, _is_TweenSequence_default);
  const _is_TweenSequenceItem_default = Symbol('_is_TweenSequenceItem_default');
  src__animation__tween_sequence.TweenSequenceItem$ = dart.generic(T => {
    class TweenSequenceItem extends core.Object {
      get tween() {
        return this[tween$];
      }
      set tween(value) {
        super.tween = value;
      }
      get weight() {
        return this[weight$];
      }
      set weight(value) {
        super.weight = value;
      }
    }
    (TweenSequenceItem.new = function(opts) {
      let tween = opts && 'tween' in opts ? opts.tween : null;
      let weight = opts && 'weight' in opts ? opts.weight : null;
      this[tween$] = tween;
      this[weight$] = weight;
      if (!(tween != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/tween_sequence.dart", 101, 16, "tween != null");
      if (!(weight != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/tween_sequence.dart", 102, 16, "weight != null");
      if (!(dart.notNull(weight) > 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/tween_sequence.dart", 103, 16, "weight > 0.0");
      ;
    }).prototype = TweenSequenceItem.prototype;
    dart.addTypeTests(TweenSequenceItem);
    TweenSequenceItem.prototype[_is_TweenSequenceItem_default] = true;
    const tween$ = Symbol("TweenSequenceItem.tween");
    const weight$ = Symbol("TweenSequenceItem.weight");
    dart.setLibraryUri(TweenSequenceItem, "package:flutter_web/src/animation/tween_sequence.dart");
    dart.setFieldSignature(TweenSequenceItem, () => ({
      __proto__: dart.getFields(TweenSequenceItem.__proto__),
      tween: dart.finalFieldType(src__animation__tween.Animatable$(T)),
      weight: dart.finalFieldType(core.double)
    }));
    return TweenSequenceItem;
  });
  src__animation__tween_sequence.TweenSequenceItem = src__animation__tween_sequence.TweenSequenceItem$();
  dart.addTypeTests(src__animation__tween_sequence.TweenSequenceItem, _is_TweenSequenceItem_default);
  src__animation__tween_sequence._Interval = class _Interval extends core.Object {
    contains(t) {
      return dart.notNull(t) >= dart.notNull(this.start) && dart.notNull(t) < dart.notNull(this.end);
    }
    value(t) {
      return (dart.notNull(t) - dart.notNull(this.start)) / (dart.notNull(this.end) - dart.notNull(this.start));
    }
    toString() {
      return "<" + dart.str(this.start) + ", " + dart.str(this.end) + ">";
    }
  };
  (src__animation__tween_sequence._Interval.new = function(start, end) {
    this.start = start;
    this.end = end;
    if (!(dart.notNull(end) > dart.notNull(start))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/tween_sequence.dart", 130, 50, "end > start");
    ;
  }).prototype = src__animation__tween_sequence._Interval.prototype;
  dart.addTypeTests(src__animation__tween_sequence._Interval);
  dart.setMethodSignature(src__animation__tween_sequence._Interval, () => ({
    __proto__: dart.getMethods(src__animation__tween_sequence._Interval.__proto__),
    contains: dart.fnType(core.bool, [core.double]),
    value: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(src__animation__tween_sequence._Interval, "package:flutter_web/src/animation/tween_sequence.dart");
  dart.setFieldSignature(src__animation__tween_sequence._Interval, () => ({
    __proto__: dart.getFields(src__animation__tween_sequence._Interval.__proto__),
    start: dart.finalFieldType(core.double),
    end: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__animation__tween_sequence._Interval, ['toString']);
  const _evaluatable$ = dart.privateName(src__animation__tween, "_evaluatable");
  const _is_Animation_default = Symbol('_is_Animation_default');
  src__animation__animation.Animation$ = dart.generic(T => {
    class Animation extends src__foundation__change_notifier.Listenable {
      get isDismissed() {
        return dart.equals(this.status, src__animation__animation.AnimationStatus.dismissed);
      }
      get isCompleted() {
        return dart.equals(this.status, src__animation__animation.AnimationStatus.completed);
      }
      drive(U, child) {
        if (!AnimationOfdouble().is(this)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/animation.dart", 162, 12, "this is Animation<double>");
        return child.animate(AnimationOfdouble()._check(this));
      }
      toString() {
        return dart.str(src__foundation__diagnostics.describeIdentity(this)) + "(" + dart.str(this.toStringDetails()) + ")";
      }
      toStringDetails() {
        if (!(this.status != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/animation.dart", 187, 12, "status != null");
        let icon = null;
        switch (this.status) {
          case src__animation__animation.AnimationStatus.forward:
          {
            icon = "▶";
            break;
          }
          case src__animation__animation.AnimationStatus.reverse:
          {
            icon = "◀";
            break;
          }
          case src__animation__animation.AnimationStatus.completed:
          {
            icon = "⏭";
            break;
          }
          case src__animation__animation.AnimationStatus.dismissed:
          {
            icon = "⏮";
            break;
          }
        }
        if (!(icon != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/animation.dart", 203, 12, "icon != null");
        return dart.str(icon);
      }
    }
    (Animation.new = function() {
      Animation.__proto__.new.call(this);
      ;
    }).prototype = Animation.prototype;
    dart.addTypeTests(Animation);
    Animation.prototype[_is_Animation_default] = true;
    Animation[dart.implements] = () => [src__foundation__change_notifier.ValueListenable$(T)];
    dart.setMethodSignature(Animation, () => ({
      __proto__: dart.getMethods(Animation.__proto__),
      drive: dart.gFnType(U => [src__animation__animation.Animation$(U), [src__animation__tween.Animatable$(U)]]),
      toStringDetails: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(Animation, () => ({
      __proto__: dart.getGetters(Animation.__proto__),
      isDismissed: core.bool,
      isCompleted: core.bool
    }));
    dart.setLibraryUri(Animation, "package:flutter_web/src/animation/animation.dart");
    dart.defineExtensionMethods(Animation, ['toString']);
    return Animation;
  });
  src__animation__animation.Animation = src__animation__animation.Animation$();
  dart.addTypeTests(src__animation__animation.Animation, _is_Animation_default);
  const _is_AnimationWithParentMixin_default = Symbol('_is_AnimationWithParentMixin_default');
  src__animation__animations.AnimationWithParentMixin$ = dart.generic(T => {
    class AnimationWithParentMixin extends core.Object {}
    AnimationWithParentMixin[dart.mixinOn] = Object => class AnimationWithParentMixin extends Object {
      addListener(listener) {
        return this.parent.addListener(listener);
      }
      removeListener(listener) {
        return this.parent.removeListener(listener);
      }
      addStatusListener(listener) {
        return this.parent.addStatusListener(listener);
      }
      removeStatusListener(listener) {
        return this.parent.removeStatusListener(listener);
      }
      get status() {
        return this.parent.status;
      }
    };
    (AnimationWithParentMixin[dart.mixinNew] = function() {
    }).prototype = AnimationWithParentMixin.prototype;
    dart.addTypeTests(AnimationWithParentMixin);
    AnimationWithParentMixin.prototype[_is_AnimationWithParentMixin_default] = true;
    AnimationWithParentMixin[dart.implements] = () => [core.Object];
    dart.setMethodSignature(AnimationWithParentMixin, () => ({
      __proto__: dart.getMethods(AnimationWithParentMixin.__proto__),
      addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__animation__animation.AnimationStatus])]),
      removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__animation__animation.AnimationStatus])])
    }));
    dart.setGetterSignature(AnimationWithParentMixin, () => ({
      __proto__: dart.getGetters(AnimationWithParentMixin.__proto__),
      status: src__animation__animation.AnimationStatus
    }));
    dart.setLibraryUri(AnimationWithParentMixin, "package:flutter_web/src/animation/animations.dart");
    return AnimationWithParentMixin;
  });
  src__animation__animations.AnimationWithParentMixin = src__animation__animations.AnimationWithParentMixin$();
  dart.addTypeTests(src__animation__animations.AnimationWithParentMixin, _is_AnimationWithParentMixin_default);
  const _is__AnimatedEvaluation_default = Symbol('_is__AnimatedEvaluation_default');
  src__animation__tween._AnimatedEvaluation$ = dart.generic(T => {
    const Animation_AnimationWithParentMixin$ = class Animation_AnimationWithParentMixin extends src__animation__animation.Animation$(T) {};
    (Animation_AnimationWithParentMixin$.new = function() {
      Animation_AnimationWithParentMixin$.__proto__.new.call(this);
    }).prototype = Animation_AnimationWithParentMixin$.prototype;
    dart.applyMixin(Animation_AnimationWithParentMixin$, src__animation__animations.AnimationWithParentMixin$(core.double));
    class _AnimatedEvaluation extends Animation_AnimationWithParentMixin$ {
      get parent() {
        return this[parent$];
      }
      set parent(value) {
        super.parent = value;
      }
      get value() {
        return this[_evaluatable$].evaluate(this.parent);
      }
      toString() {
        return dart.str(this.parent) + "➩" + dart.str(this[_evaluatable$]) + "➩" + dart.str(this.value);
      }
      toStringDetails() {
        return dart.str(super.toStringDetails()) + " " + dart.str(this[_evaluatable$]);
      }
    }
    (_AnimatedEvaluation.new = function(parent, _evaluatable) {
      this[parent$] = parent;
      this[_evaluatable$] = _evaluatable;
      _AnimatedEvaluation.__proto__.new.call(this);
      ;
    }).prototype = _AnimatedEvaluation.prototype;
    dart.addTypeTests(_AnimatedEvaluation);
    _AnimatedEvaluation.prototype[_is__AnimatedEvaluation_default] = true;
    const parent$ = Symbol("_AnimatedEvaluation.parent");
    dart.setGetterSignature(_AnimatedEvaluation, () => ({
      __proto__: dart.getGetters(_AnimatedEvaluation.__proto__),
      value: T
    }));
    dart.setLibraryUri(_AnimatedEvaluation, "package:flutter_web/src/animation/tween.dart");
    dart.setFieldSignature(_AnimatedEvaluation, () => ({
      __proto__: dart.getFields(_AnimatedEvaluation.__proto__),
      parent: dart.finalFieldType(src__animation__animation.Animation$(core.double)),
      [_evaluatable$]: dart.finalFieldType(src__animation__tween.Animatable$(T))
    }));
    dart.defineExtensionMethods(_AnimatedEvaluation, ['toString']);
    return _AnimatedEvaluation;
  });
  src__animation__tween._AnimatedEvaluation = src__animation__tween._AnimatedEvaluation$();
  dart.addTypeTests(src__animation__tween._AnimatedEvaluation, _is__AnimatedEvaluation_default);
  const _parent$ = dart.privateName(src__animation__tween, "_parent");
  const _is__ChainedEvaluation_default = Symbol('_is__ChainedEvaluation_default');
  src__animation__tween._ChainedEvaluation$ = dart.generic(T => {
    class _ChainedEvaluation extends src__animation__tween.Animatable$(T) {
      transform(t) {
        return this[_evaluatable$].transform(this[_parent$].transform(t));
      }
      toString() {
        return dart.str(this[_parent$]) + "➩" + dart.str(this[_evaluatable$]);
      }
    }
    (_ChainedEvaluation.new = function(_parent, _evaluatable) {
      this[_parent$] = _parent;
      this[_evaluatable$] = _evaluatable;
      _ChainedEvaluation.__proto__.new.call(this);
      ;
    }).prototype = _ChainedEvaluation.prototype;
    dart.addTypeTests(_ChainedEvaluation);
    _ChainedEvaluation.prototype[_is__ChainedEvaluation_default] = true;
    dart.setMethodSignature(_ChainedEvaluation, () => ({
      __proto__: dart.getMethods(_ChainedEvaluation.__proto__),
      transform: dart.fnType(T, [core.double])
    }));
    dart.setLibraryUri(_ChainedEvaluation, "package:flutter_web/src/animation/tween.dart");
    dart.setFieldSignature(_ChainedEvaluation, () => ({
      __proto__: dart.getFields(_ChainedEvaluation.__proto__),
      [_parent$]: dart.finalFieldType(src__animation__tween.Animatable$(core.double)),
      [_evaluatable$]: dart.finalFieldType(src__animation__tween.Animatable$(T))
    }));
    dart.defineExtensionMethods(_ChainedEvaluation, ['toString']);
    return _ChainedEvaluation;
  });
  src__animation__tween._ChainedEvaluation = src__animation__tween._ChainedEvaluation$();
  dart.addTypeTests(src__animation__tween._ChainedEvaluation, _is__ChainedEvaluation_default);
  const _is_Tween_default = Symbol('_is_Tween_default');
  src__animation__tween.Tween$ = dart.generic(T => {
    class Tween extends src__animation__tween.Animatable$(T) {
      get begin() {
        return this[begin$];
      }
      set begin(value) {
        this[begin$] = T._check(value);
      }
      get end() {
        return this[end$];
      }
      set end(value) {
        this[end$] = T._check(value);
      }
      lerp(t) {
        if (!(this.begin != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/tween.dart", 238, 12, "ssert(begin !");
        if (!(this.end != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/tween.dart", 239, 12, "ssert(end !");
        return T._check(dart.dsend(this.begin, '+', [dart.dsend(dart.dsend(this.end, '-', [this.begin]), '*', [t])]));
      }
      transform(t) {
        if (t === 0.0) return this.begin;
        if (t === 1.0) return this.end;
        return this.lerp(t);
      }
      toString() {
        return dart.str(this[$runtimeType]) + "(" + dart.str(this.begin) + " → " + dart.str(this.end) + ")";
      }
    }
    (Tween.new = function(opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      this[begin$] = begin;
      this[end$] = end;
      Tween.__proto__.new.call(this);
      ;
    }).prototype = Tween.prototype;
    dart.addTypeTests(Tween);
    Tween.prototype[_is_Tween_default] = true;
    const begin$ = Symbol("Tween.begin");
    const end$ = Symbol("Tween.end");
    dart.setMethodSignature(Tween, () => ({
      __proto__: dart.getMethods(Tween.__proto__),
      lerp: dart.fnType(T, [core.double]),
      transform: dart.fnType(T, [core.double])
    }));
    dart.setLibraryUri(Tween, "package:flutter_web/src/animation/tween.dart");
    dart.setFieldSignature(Tween, () => ({
      __proto__: dart.getFields(Tween.__proto__),
      begin: dart.fieldType(T),
      end: dart.fieldType(T)
    }));
    dart.defineExtensionMethods(Tween, ['toString']);
    return Tween;
  });
  src__animation__tween.Tween = src__animation__tween.Tween$();
  dart.addTypeTests(src__animation__tween.Tween, _is_Tween_default);
  const _is_ReverseTween_default = Symbol('_is_ReverseTween_default');
  src__animation__tween.ReverseTween$ = dart.generic(T => {
    class ReverseTween extends src__animation__tween.Tween$(T) {
      get parent() {
        return this[parent$];
      }
      set parent(value) {
        super.parent = value;
      }
      lerp(t) {
        return this.parent.lerp(1.0 - dart.notNull(t));
      }
    }
    (ReverseTween.new = function(parent) {
      this[parent$] = parent;
      if (!(parent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/tween.dart", 270, 16, "ssert(parent !");
      ReverseTween.__proto__.new.call(this, {begin: parent.end, end: parent.begin});
      ;
    }).prototype = ReverseTween.prototype;
    dart.addTypeTests(ReverseTween);
    ReverseTween.prototype[_is_ReverseTween_default] = true;
    const parent$ = Symbol("ReverseTween.parent");
    dart.setLibraryUri(ReverseTween, "package:flutter_web/src/animation/tween.dart");
    dart.setFieldSignature(ReverseTween, () => ({
      __proto__: dart.getFields(ReverseTween.__proto__),
      parent: dart.finalFieldType(src__animation__tween.Tween$(T))
    }));
    return ReverseTween;
  });
  src__animation__tween.ReverseTween = src__animation__tween.ReverseTween$();
  dart.addTypeTests(src__animation__tween.ReverseTween, _is_ReverseTween_default);
  src__animation__tween.ColorTween = class ColorTween extends src__animation__tween.Tween$(ui$.Color) {
    lerp(t) {
      return ui$.Color.lerp(this.begin, this.end, t);
    }
  };
  (src__animation__tween.ColorTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    src__animation__tween.ColorTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = src__animation__tween.ColorTween.prototype;
  dart.addTypeTests(src__animation__tween.ColorTween);
  dart.setLibraryUri(src__animation__tween.ColorTween, "package:flutter_web/src/animation/tween.dart");
  src__animation__tween.SizeTween = class SizeTween extends src__animation__tween.Tween$(ui$.Size) {
    lerp(t) {
      return ui$.Size.lerp(this.begin, this.end, t);
    }
  };
  (src__animation__tween.SizeTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    src__animation__tween.SizeTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = src__animation__tween.SizeTween.prototype;
  dart.addTypeTests(src__animation__tween.SizeTween);
  dart.setLibraryUri(src__animation__tween.SizeTween, "package:flutter_web/src/animation/tween.dart");
  src__animation__tween.RectTween = class RectTween extends src__animation__tween.Tween$(ui$.Rect) {
    lerp(t) {
      return ui$.Rect.lerp(this.begin, this.end, t);
    }
  };
  (src__animation__tween.RectTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    src__animation__tween.RectTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = src__animation__tween.RectTween.prototype;
  dart.addTypeTests(src__animation__tween.RectTween);
  dart.setLibraryUri(src__animation__tween.RectTween, "package:flutter_web/src/animation/tween.dart");
  src__animation__tween.IntTween = class IntTween extends src__animation__tween.Tween$(core.int) {
    lerp(t) {
      return (dart.notNull(this.begin) + (dart.notNull(this.end) - dart.notNull(this.begin)) * dart.notNull(t))[$round]();
    }
  };
  (src__animation__tween.IntTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    src__animation__tween.IntTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = src__animation__tween.IntTween.prototype;
  dart.addTypeTests(src__animation__tween.IntTween);
  dart.setLibraryUri(src__animation__tween.IntTween, "package:flutter_web/src/animation/tween.dart");
  src__animation__tween.StepTween = class StepTween extends src__animation__tween.Tween$(core.int) {
    lerp(t) {
      return (dart.notNull(this.begin) + (dart.notNull(this.end) - dart.notNull(this.begin)) * dart.notNull(t))[$floor]();
    }
  };
  (src__animation__tween.StepTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    src__animation__tween.StepTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = src__animation__tween.StepTween.prototype;
  dart.addTypeTests(src__animation__tween.StepTween);
  dart.setLibraryUri(src__animation__tween.StepTween, "package:flutter_web/src/animation/tween.dart");
  const _is_ConstantTween_default = Symbol('_is_ConstantTween_default');
  src__animation__tween.ConstantTween$ = dart.generic(T => {
    class ConstantTween extends src__animation__tween.Tween$(T) {
      lerp(t) {
        return this.begin;
      }
      toString() {
        return dart.str(this[$runtimeType]) + "(value: begin)";
      }
    }
    (ConstantTween.new = function(value) {
      ConstantTween.__proto__.new.call(this, {begin: value, end: value});
      ;
    }).prototype = ConstantTween.prototype;
    dart.addTypeTests(ConstantTween);
    ConstantTween.prototype[_is_ConstantTween_default] = true;
    dart.setLibraryUri(ConstantTween, "package:flutter_web/src/animation/tween.dart");
    dart.defineExtensionMethods(ConstantTween, ['toString']);
    return ConstantTween;
  });
  src__animation__tween.ConstantTween = src__animation__tween.ConstantTween$();
  dart.addTypeTests(src__animation__tween.ConstantTween, _is_ConstantTween_default);
  src__animation__tween.CurveTween = class CurveTween extends src__animation__tween.Animatable$(core.double) {
    get curve() {
      return this[curve$];
    }
    set curve(value) {
      this[curve$] = value;
    }
    transform(t) {
      if (t === 0.0 || t === 1.0) {
        if (!(this.curve.transform(t)[$round]() === t)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/tween.dart", 444, 14, "ssert(curve.transform(t).round(");
        return t;
      }
      return this.curve.transform(t);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(curve: " + dart.str(this.curve) + ")";
    }
  };
  (src__animation__tween.CurveTween.new = function(opts) {
    let curve = opts && 'curve' in opts ? opts.curve : null;
    this[curve$] = curve;
    if (!(curve != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/tween.dart", 436, 47, "ssert(curve !");
    src__animation__tween.CurveTween.__proto__.new.call(this);
    ;
  }).prototype = src__animation__tween.CurveTween.prototype;
  dart.addTypeTests(src__animation__tween.CurveTween);
  const curve$ = Symbol("CurveTween.curve");
  dart.setMethodSignature(src__animation__tween.CurveTween, () => ({
    __proto__: dart.getMethods(src__animation__tween.CurveTween.__proto__),
    transform: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(src__animation__tween.CurveTween, "package:flutter_web/src/animation/tween.dart");
  dart.setFieldSignature(src__animation__tween.CurveTween, () => ({
    __proto__: dart.getFields(src__animation__tween.CurveTween.__proto__),
    curve: dart.fieldType(src__animation__curves.Curve)
  }));
  dart.defineExtensionMethods(src__animation__tween.CurveTween, ['toString']);
  src__animation__curves.Curve = class Curve extends core.Object {
    transform(t) {
      if (!(dart.notNull(t) >= 0.0 && dart.notNull(t) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/curves.dart", 44, 12, "t >= 0.0 && t <= 1.0");
      if (t === 0.0 || t === 1.0) {
        return t;
      }
      return this.transformInternal(t);
    }
    transformInternal(t) {
      dart.throw(new core.UnimplementedError.new());
    }
    get flipped() {
      return new src__animation__curves.FlippedCurve.new(this);
    }
    toString() {
      return dart.str(this[$runtimeType]);
    }
  };
  (src__animation__curves.Curve.new = function() {
    ;
  }).prototype = src__animation__curves.Curve.prototype;
  dart.addTypeTests(src__animation__curves.Curve);
  dart.setMethodSignature(src__animation__curves.Curve, () => ({
    __proto__: dart.getMethods(src__animation__curves.Curve.__proto__),
    transform: dart.fnType(core.double, [core.double]),
    transformInternal: dart.fnType(core.double, [core.double])
  }));
  dart.setGetterSignature(src__animation__curves.Curve, () => ({
    __proto__: dart.getGetters(src__animation__curves.Curve.__proto__),
    flipped: src__animation__curves.Curve
  }));
  dart.setLibraryUri(src__animation__curves.Curve, "package:flutter_web/src/animation/curves.dart");
  dart.defineExtensionMethods(src__animation__curves.Curve, ['toString']);
  src__animation__curves._Linear = class _Linear extends src__animation__curves.Curve {
    transformInternal(t) {
      return t;
    }
  };
  (src__animation__curves._Linear.__ = function() {
    src__animation__curves._Linear.__proto__.new.call(this);
    ;
  }).prototype = src__animation__curves._Linear.prototype;
  dart.addTypeTests(src__animation__curves._Linear);
  dart.setLibraryUri(src__animation__curves._Linear, "package:flutter_web/src/animation/curves.dart");
  src__animation__curves.SawTooth = class SawTooth extends src__animation__curves.Curve {
    get count() {
      return this[count$];
    }
    set count(value) {
      super.count = value;
    }
    transformInternal(t) {
      t = dart.notNull(t) * dart.notNull(this.count);
      return dart.notNull(t) - t[$truncateToDouble]();
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.count) + ")";
    }
  };
  (src__animation__curves.SawTooth.new = function(count) {
    this[count$] = count;
    if (!(count != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/curves.dart", 98, 39, "count != null");
    src__animation__curves.SawTooth.__proto__.new.call(this);
    ;
  }).prototype = src__animation__curves.SawTooth.prototype;
  dart.addTypeTests(src__animation__curves.SawTooth);
  const count$ = Symbol("SawTooth.count");
  dart.setLibraryUri(src__animation__curves.SawTooth, "package:flutter_web/src/animation/curves.dart");
  dart.setFieldSignature(src__animation__curves.SawTooth, () => ({
    __proto__: dart.getFields(src__animation__curves.SawTooth.__proto__),
    count: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__animation__curves.SawTooth, ['toString']);
  src__animation__curves.Interval = class Interval extends src__animation__curves.Curve {
    get begin() {
      return this[begin$];
    }
    set begin(value) {
      super.begin = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get curve() {
      return this[curve$0];
    }
    set curve(value) {
      super.curve = value;
    }
    transformInternal(t) {
      if (!(dart.notNull(this.begin) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/curves.dart", 148, 12, "begin >= 0.0");
      if (!(dart.notNull(this.begin) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/curves.dart", 149, 12, "begin <= 1.0");
      if (!(dart.notNull(this.end) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/curves.dart", 150, 12, "end >= 0.0");
      if (!(dart.notNull(this.end) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/curves.dart", 151, 12, "end <= 1.0");
      if (!(dart.notNull(this.end) >= dart.notNull(this.begin))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/curves.dart", 152, 12, "end >= begin");
      t = ((dart.notNull(t) - dart.notNull(this.begin)) / (dart.notNull(this.end) - dart.notNull(this.begin)))[$clamp](0.0, 1.0);
      if (t === 0.0 || t === 1.0) return t;
      return this.curve.transform(t);
    }
    toString() {
      if (!src__animation__curves._Linear.is(this.curve)) return dart.str(this[$runtimeType]) + "(" + dart.str(this.begin) + "⋯" + dart.str(this.end) + ")➩" + dart.str(this.curve);
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.begin) + "⋯" + dart.str(this.end) + ")";
    }
  };
  (src__animation__curves.Interval.new = function(begin, end, opts) {
    let curve = opts && 'curve' in opts ? opts.curve : src__animation__curves.Curves.linear;
    this[begin$] = begin;
    this[end$] = end;
    this[curve$0] = curve;
    if (!(begin != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/curves.dart", 129, 16, "begin != null");
    if (!(end != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/curves.dart", 130, 16, "end != null");
    if (!(curve != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/curves.dart", 131, 16, "curve != null");
    src__animation__curves.Interval.__proto__.new.call(this);
    ;
  }).prototype = src__animation__curves.Interval.prototype;
  dart.addTypeTests(src__animation__curves.Interval);
  const begin$ = Symbol("Interval.begin");
  const end$ = Symbol("Interval.end");
  const curve$0 = Symbol("Interval.curve");
  dart.setLibraryUri(src__animation__curves.Interval, "package:flutter_web/src/animation/curves.dart");
  dart.setFieldSignature(src__animation__curves.Interval, () => ({
    __proto__: dart.getFields(src__animation__curves.Interval.__proto__),
    begin: dart.finalFieldType(core.double),
    end: dart.finalFieldType(core.double),
    curve: dart.finalFieldType(src__animation__curves.Curve)
  }));
  dart.defineExtensionMethods(src__animation__curves.Interval, ['toString']);
  src__animation__curves.Threshold = class Threshold extends src__animation__curves.Curve {
    get threshold() {
      return this[threshold$];
    }
    set threshold(value) {
      super.threshold = value;
    }
    transformInternal(t) {
      if (!(dart.notNull(this.threshold) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/curves.dart", 181, 12, "threshold >= 0.0");
      if (!(dart.notNull(this.threshold) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/curves.dart", 182, 12, "threshold <= 1.0");
      return dart.notNull(t) < dart.notNull(this.threshold) ? 0.0 : 1.0;
    }
  };
  (src__animation__curves.Threshold.new = function(threshold) {
    this[threshold$] = threshold;
    if (!(threshold != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/curves.dart", 172, 44, "threshold != null");
    src__animation__curves.Threshold.__proto__.new.call(this);
    ;
  }).prototype = src__animation__curves.Threshold.prototype;
  dart.addTypeTests(src__animation__curves.Threshold);
  const threshold$ = Symbol("Threshold.threshold");
  dart.setLibraryUri(src__animation__curves.Threshold, "package:flutter_web/src/animation/curves.dart");
  dart.setFieldSignature(src__animation__curves.Threshold, () => ({
    __proto__: dart.getFields(src__animation__curves.Threshold.__proto__),
    threshold: dart.finalFieldType(core.double)
  }));
  const _evaluateCubic = dart.privateName(src__animation__curves, "_evaluateCubic");
  src__animation__curves.Cubic = class Cubic extends src__animation__curves.Curve {
    get a() {
      return this[a$];
    }
    set a(value) {
      super.a = value;
    }
    get b() {
      return this[b$];
    }
    set b(value) {
      super.b = value;
    }
    get c() {
      return this[c$];
    }
    set c(value) {
      super.c = value;
    }
    get d() {
      return this[d$];
    }
    set d(value) {
      super.d = value;
    }
    [_evaluateCubic](a, b, m) {
      return 3 * dart.notNull(a) * (1 - dart.notNull(m)) * (1 - dart.notNull(m)) * dart.notNull(m) + 3 * dart.notNull(b) * (1 - dart.notNull(m)) * dart.notNull(m) * dart.notNull(m) + dart.notNull(m) * dart.notNull(m) * dart.notNull(m);
    }
    transformInternal(t) {
      let start = 0.0;
      let end = 1.0;
      while (true) {
        let midpoint = (start + end) / 2;
        let estimate = this[_evaluateCubic](this.a, this.c, midpoint);
        if ((dart.notNull(t) - dart.notNull(estimate))[$abs]() < dart.notNull(src__animation__curves.Cubic._cubicErrorBound)) return this[_evaluateCubic](this.b, this.d, midpoint);
        if (dart.notNull(estimate) < dart.notNull(t))
          start = midpoint;
        else
          end = midpoint;
      }
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + this.a[$toStringAsFixed](2) + ", " + this.b[$toStringAsFixed](2) + ", " + this.c[$toStringAsFixed](2) + ", " + this.d[$toStringAsFixed](2) + ")";
    }
  };
  (src__animation__curves.Cubic.new = function(a, b, c, d) {
    this[a$] = a;
    this[b$] = b;
    this[c$] = c;
    this[d$] = d;
    if (!(a != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/curves.dart", 210, 16, "(a != nul");
    if (!(b != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/curves.dart", 211, 16, "(b != nul");
    if (!(c != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/curves.dart", 212, 16, "(c != nul");
    if (!(d != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/curves.dart", 213, 16, "(d != nul");
    src__animation__curves.Cubic.__proto__.new.call(this);
    ;
  }).prototype = src__animation__curves.Cubic.prototype;
  dart.addTypeTests(src__animation__curves.Cubic);
  const a$ = Symbol("Cubic.a");
  const b$ = Symbol("Cubic.b");
  const c$ = Symbol("Cubic.c");
  const d$ = Symbol("Cubic.d");
  dart.setMethodSignature(src__animation__curves.Cubic, () => ({
    __proto__: dart.getMethods(src__animation__curves.Cubic.__proto__),
    [_evaluateCubic]: dart.fnType(core.double, [core.double, core.double, core.double])
  }));
  dart.setLibraryUri(src__animation__curves.Cubic, "package:flutter_web/src/animation/curves.dart");
  dart.setFieldSignature(src__animation__curves.Cubic, () => ({
    __proto__: dart.getFields(src__animation__curves.Cubic.__proto__),
    a: dart.finalFieldType(core.double),
    b: dart.finalFieldType(core.double),
    c: dart.finalFieldType(core.double),
    d: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__animation__curves.Cubic, ['toString']);
  dart.defineLazy(src__animation__curves.Cubic, {
    /*src__animation__curves.Cubic._cubicErrorBound*/get _cubicErrorBound() {
      return 0.001;
    }
  });
  src__animation__curves.FlippedCurve = class FlippedCurve extends src__animation__curves.Curve {
    get curve() {
      return this[curve$1];
    }
    set curve(value) {
      super.curve = value;
    }
    transformInternal(t) {
      return 1.0 - dart.notNull(this.curve.transform(1.0 - dart.notNull(t)));
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.curve) + ")";
    }
  };
  (src__animation__curves.FlippedCurve.new = function(curve) {
    this[curve$1] = curve;
    if (!(curve != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/curves.dart", 289, 43, "(curve != nul");
    src__animation__curves.FlippedCurve.__proto__.new.call(this);
    ;
  }).prototype = src__animation__curves.FlippedCurve.prototype;
  dart.addTypeTests(src__animation__curves.FlippedCurve);
  const curve$1 = Symbol("FlippedCurve.curve");
  dart.setLibraryUri(src__animation__curves.FlippedCurve, "package:flutter_web/src/animation/curves.dart");
  dart.setFieldSignature(src__animation__curves.FlippedCurve, () => ({
    __proto__: dart.getFields(src__animation__curves.FlippedCurve.__proto__),
    curve: dart.finalFieldType(src__animation__curves.Curve)
  }));
  dart.defineExtensionMethods(src__animation__curves.FlippedCurve, ['toString']);
  src__animation__curves._DecelerateCurve = class _DecelerateCurve extends src__animation__curves.Curve {
    transformInternal(t) {
      t = 1.0 - dart.notNull(t);
      return 1.0 - dart.notNull(t) * dart.notNull(t);
    }
  };
  (src__animation__curves._DecelerateCurve.__ = function() {
    src__animation__curves._DecelerateCurve.__proto__.new.call(this);
    ;
  }).prototype = src__animation__curves._DecelerateCurve.prototype;
  dart.addTypeTests(src__animation__curves._DecelerateCurve);
  dart.setLibraryUri(src__animation__curves._DecelerateCurve, "package:flutter_web/src/animation/curves.dart");
  src__animation__curves._BounceInCurve = class _BounceInCurve extends src__animation__curves.Curve {
    transformInternal(t) {
      return 1.0 - dart.notNull(src__animation__curves._bounce(1.0 - dart.notNull(t)));
    }
  };
  (src__animation__curves._BounceInCurve.__ = function() {
    src__animation__curves._BounceInCurve.__proto__.new.call(this);
    ;
  }).prototype = src__animation__curves._BounceInCurve.prototype;
  dart.addTypeTests(src__animation__curves._BounceInCurve);
  dart.setLibraryUri(src__animation__curves._BounceInCurve, "package:flutter_web/src/animation/curves.dart");
  src__animation__curves._BounceOutCurve = class _BounceOutCurve extends src__animation__curves.Curve {
    transformInternal(t) {
      return src__animation__curves._bounce(t);
    }
  };
  (src__animation__curves._BounceOutCurve.__ = function() {
    src__animation__curves._BounceOutCurve.__proto__.new.call(this);
    ;
  }).prototype = src__animation__curves._BounceOutCurve.prototype;
  dart.addTypeTests(src__animation__curves._BounceOutCurve);
  dart.setLibraryUri(src__animation__curves._BounceOutCurve, "package:flutter_web/src/animation/curves.dart");
  src__animation__curves._BounceInOutCurve = class _BounceInOutCurve extends src__animation__curves.Curve {
    transformInternal(t) {
      if (dart.notNull(t) < 0.5)
        return (1.0 - dart.notNull(src__animation__curves._bounce(1.0 - dart.notNull(t) * 2.0))) * 0.5;
      else
        return dart.notNull(src__animation__curves._bounce(dart.notNull(t) * 2.0 - 1.0)) * 0.5 + 0.5;
    }
  };
  (src__animation__curves._BounceInOutCurve.__ = function() {
    src__animation__curves._BounceInOutCurve.__proto__.new.call(this);
    ;
  }).prototype = src__animation__curves._BounceInOutCurve.prototype;
  dart.addTypeTests(src__animation__curves._BounceInOutCurve);
  dart.setLibraryUri(src__animation__curves._BounceInOutCurve, "package:flutter_web/src/animation/curves.dart");
  src__animation__curves.ElasticInCurve = class ElasticInCurve extends src__animation__curves.Curve {
    get period() {
      return this[period$];
    }
    set period(value) {
      super.period = value;
    }
    transformInternal(t) {
      let s = dart.notNull(this.period) / 4.0;
      t = dart.notNull(t) - 1.0;
      return -math.pow(2.0, 10.0 * dart.notNull(t)) * math.sin((dart.notNull(t) - s) * (dart.notNull(math.pi) * 2.0) / dart.notNull(this.period));
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.period) + ")";
    }
  };
  (src__animation__curves.ElasticInCurve.new = function(period) {
    if (period === void 0) period = 0.4;
    this[period$] = period;
    src__animation__curves.ElasticInCurve.__proto__.new.call(this);
    ;
  }).prototype = src__animation__curves.ElasticInCurve.prototype;
  dart.addTypeTests(src__animation__curves.ElasticInCurve);
  const period$ = Symbol("ElasticInCurve.period");
  dart.setLibraryUri(src__animation__curves.ElasticInCurve, "package:flutter_web/src/animation/curves.dart");
  dart.setFieldSignature(src__animation__curves.ElasticInCurve, () => ({
    __proto__: dart.getFields(src__animation__curves.ElasticInCurve.__proto__),
    period: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__animation__curves.ElasticInCurve, ['toString']);
  src__animation__curves.ElasticOutCurve = class ElasticOutCurve extends src__animation__curves.Curve {
    get period() {
      return this[period$0];
    }
    set period(value) {
      super.period = value;
    }
    transformInternal(t) {
      let s = dart.notNull(this.period) / 4.0;
      return math.pow(2.0, -10 * dart.notNull(t)) * math.sin((dart.notNull(t) - s) * (dart.notNull(math.pi) * 2.0) / dart.notNull(this.period)) + 1.0;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.period) + ")";
    }
  };
  (src__animation__curves.ElasticOutCurve.new = function(period) {
    if (period === void 0) period = 0.4;
    this[period$0] = period;
    src__animation__curves.ElasticOutCurve.__proto__.new.call(this);
    ;
  }).prototype = src__animation__curves.ElasticOutCurve.prototype;
  dart.addTypeTests(src__animation__curves.ElasticOutCurve);
  const period$0 = Symbol("ElasticOutCurve.period");
  dart.setLibraryUri(src__animation__curves.ElasticOutCurve, "package:flutter_web/src/animation/curves.dart");
  dart.setFieldSignature(src__animation__curves.ElasticOutCurve, () => ({
    __proto__: dart.getFields(src__animation__curves.ElasticOutCurve.__proto__),
    period: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__animation__curves.ElasticOutCurve, ['toString']);
  src__animation__curves.ElasticInOutCurve = class ElasticInOutCurve extends src__animation__curves.Curve {
    get period() {
      return this[period$1];
    }
    set period(value) {
      super.period = value;
    }
    transformInternal(t) {
      let s = dart.notNull(this.period) / 4.0;
      t = 2.0 * dart.notNull(t) - 1.0;
      if (dart.notNull(t) < 0.0)
        return -0.5 * math.pow(2.0, 10.0 * dart.notNull(t)) * math.sin((dart.notNull(t) - s) * (dart.notNull(math.pi) * 2.0) / dart.notNull(this.period));
      else
        return math.pow(2.0, -10.0 * dart.notNull(t)) * math.sin((dart.notNull(t) - s) * (dart.notNull(math.pi) * 2.0) / dart.notNull(this.period)) * 0.5 + 1.0;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.period) + ")";
    }
  };
  (src__animation__curves.ElasticInOutCurve.new = function(period) {
    if (period === void 0) period = 0.4;
    this[period$1] = period;
    src__animation__curves.ElasticInOutCurve.__proto__.new.call(this);
    ;
  }).prototype = src__animation__curves.ElasticInOutCurve.prototype;
  dart.addTypeTests(src__animation__curves.ElasticInOutCurve);
  const period$1 = Symbol("ElasticInOutCurve.period");
  dart.setLibraryUri(src__animation__curves.ElasticInOutCurve, "package:flutter_web/src/animation/curves.dart");
  dart.setFieldSignature(src__animation__curves.ElasticInOutCurve, () => ({
    __proto__: dart.getFields(src__animation__curves.ElasticInOutCurve.__proto__),
    period: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__animation__curves.ElasticInOutCurve, ['toString']);
  src__animation__curves.Curves = class Curves extends core.Object {};
  (src__animation__curves.Curves.__ = function() {
    ;
  }).prototype = src__animation__curves.Curves.prototype;
  dart.addTypeTests(src__animation__curves.Curves);
  dart.setLibraryUri(src__animation__curves.Curves, "package:flutter_web/src/animation/curves.dart");
  dart.defineLazy(src__animation__curves.Curves, {
    /*src__animation__curves.Curves.linear*/get linear() {
      return dart.const(new src__animation__curves._Linear.__());
    },
    /*src__animation__curves.Curves.decelerate*/get decelerate() {
      return dart.const(new src__animation__curves._DecelerateCurve.__());
    },
    /*src__animation__curves.Curves.fastLinearToSlowEaseIn*/get fastLinearToSlowEaseIn() {
      return dart.const(new src__animation__curves.Cubic.new(0.18, 1.0, 0.04, 1.0));
    },
    /*src__animation__curves.Curves.ease*/get ease() {
      return dart.const(new src__animation__curves.Cubic.new(0.25, 0.1, 0.25, 1.0));
    },
    /*src__animation__curves.Curves.easeIn*/get easeIn() {
      return dart.const(new src__animation__curves.Cubic.new(0.42, 0.0, 1.0, 1.0));
    },
    /*src__animation__curves.Curves.easeInToLinear*/get easeInToLinear() {
      return dart.const(new src__animation__curves.Cubic.new(0.67, 0.03, 0.65, 0.09));
    },
    /*src__animation__curves.Curves.easeInSine*/get easeInSine() {
      return dart.const(new src__animation__curves.Cubic.new(0.47, 0.0, 0.745, 0.715));
    },
    /*src__animation__curves.Curves.easeInQuad*/get easeInQuad() {
      return dart.const(new src__animation__curves.Cubic.new(0.55, 0.085, 0.68, 0.53));
    },
    /*src__animation__curves.Curves.easeInCubic*/get easeInCubic() {
      return dart.const(new src__animation__curves.Cubic.new(0.55, 0.055, 0.675, 0.19));
    },
    /*src__animation__curves.Curves.easeInQuart*/get easeInQuart() {
      return dart.const(new src__animation__curves.Cubic.new(0.895, 0.03, 0.685, 0.22));
    },
    /*src__animation__curves.Curves.easeInQuint*/get easeInQuint() {
      return dart.const(new src__animation__curves.Cubic.new(0.755, 0.05, 0.855, 0.06));
    },
    /*src__animation__curves.Curves.easeInExpo*/get easeInExpo() {
      return dart.const(new src__animation__curves.Cubic.new(0.95, 0.05, 0.795, 0.035));
    },
    /*src__animation__curves.Curves.easeInCirc*/get easeInCirc() {
      return dart.const(new src__animation__curves.Cubic.new(0.6, 0.04, 0.98, 0.335));
    },
    /*src__animation__curves.Curves.easeInBack*/get easeInBack() {
      return dart.const(new src__animation__curves.Cubic.new(0.6, -0.28, 0.735, 0.045));
    },
    /*src__animation__curves.Curves.easeOut*/get easeOut() {
      return dart.const(new src__animation__curves.Cubic.new(0.0, 0.0, 0.58, 1.0));
    },
    /*src__animation__curves.Curves.linearToEaseOut*/get linearToEaseOut() {
      return dart.const(new src__animation__curves.Cubic.new(0.35, 0.91, 0.33, 0.97));
    },
    /*src__animation__curves.Curves.easeOutSine*/get easeOutSine() {
      return dart.const(new src__animation__curves.Cubic.new(0.39, 0.575, 0.565, 1.0));
    },
    /*src__animation__curves.Curves.easeOutQuad*/get easeOutQuad() {
      return dart.const(new src__animation__curves.Cubic.new(0.25, 0.46, 0.45, 0.94));
    },
    /*src__animation__curves.Curves.easeOutCubic*/get easeOutCubic() {
      return dart.const(new src__animation__curves.Cubic.new(0.215, 0.61, 0.355, 1.0));
    },
    /*src__animation__curves.Curves.easeOutQuart*/get easeOutQuart() {
      return dart.const(new src__animation__curves.Cubic.new(0.165, 0.84, 0.44, 1.0));
    },
    /*src__animation__curves.Curves.easeOutQuint*/get easeOutQuint() {
      return dart.const(new src__animation__curves.Cubic.new(0.23, 1.0, 0.32, 1.0));
    },
    /*src__animation__curves.Curves.easeOutExpo*/get easeOutExpo() {
      return dart.const(new src__animation__curves.Cubic.new(0.19, 1.0, 0.22, 1.0));
    },
    /*src__animation__curves.Curves.easeOutCirc*/get easeOutCirc() {
      return dart.const(new src__animation__curves.Cubic.new(0.075, 0.82, 0.165, 1.0));
    },
    /*src__animation__curves.Curves.easeOutBack*/get easeOutBack() {
      return dart.const(new src__animation__curves.Cubic.new(0.175, 0.885, 0.32, 1.275));
    },
    /*src__animation__curves.Curves.easeInOut*/get easeInOut() {
      return dart.const(new src__animation__curves.Cubic.new(0.42, 0.0, 0.58, 1.0));
    },
    /*src__animation__curves.Curves.easeInOutSine*/get easeInOutSine() {
      return dart.const(new src__animation__curves.Cubic.new(0.445, 0.05, 0.55, 0.95));
    },
    /*src__animation__curves.Curves.easeInOutQuad*/get easeInOutQuad() {
      return dart.const(new src__animation__curves.Cubic.new(0.455, 0.03, 0.515, 0.955));
    },
    /*src__animation__curves.Curves.easeInOutCubic*/get easeInOutCubic() {
      return dart.const(new src__animation__curves.Cubic.new(0.645, 0.045, 0.355, 1.0));
    },
    /*src__animation__curves.Curves.easeInOutQuart*/get easeInOutQuart() {
      return dart.const(new src__animation__curves.Cubic.new(0.77, 0.0, 0.175, 1.0));
    },
    /*src__animation__curves.Curves.easeInOutQuint*/get easeInOutQuint() {
      return dart.const(new src__animation__curves.Cubic.new(0.86, 0.0, 0.07, 1.0));
    },
    /*src__animation__curves.Curves.easeInOutExpo*/get easeInOutExpo() {
      return dart.const(new src__animation__curves.Cubic.new(1.0, 0.0, 0.0, 1.0));
    },
    /*src__animation__curves.Curves.easeInOutCirc*/get easeInOutCirc() {
      return dart.const(new src__animation__curves.Cubic.new(0.785, 0.135, 0.15, 0.86));
    },
    /*src__animation__curves.Curves.easeInOutBack*/get easeInOutBack() {
      return dart.const(new src__animation__curves.Cubic.new(0.68, -0.55, 0.265, 1.55));
    },
    /*src__animation__curves.Curves.fastOutSlowIn*/get fastOutSlowIn() {
      return dart.const(new src__animation__curves.Cubic.new(0.4, 0.0, 0.2, 1.0));
    },
    /*src__animation__curves.Curves.slowMiddle*/get slowMiddle() {
      return dart.const(new src__animation__curves.Cubic.new(0.15, 0.85, 0.85, 0.15));
    },
    /*src__animation__curves.Curves.bounceIn*/get bounceIn() {
      return dart.const(new src__animation__curves._BounceInCurve.__());
    },
    /*src__animation__curves.Curves.bounceOut*/get bounceOut() {
      return dart.const(new src__animation__curves._BounceOutCurve.__());
    },
    /*src__animation__curves.Curves.bounceInOut*/get bounceInOut() {
      return dart.const(new src__animation__curves._BounceInOutCurve.__());
    },
    /*src__animation__curves.Curves.elasticIn*/get elasticIn() {
      return dart.const(new src__animation__curves.ElasticInCurve.new());
    },
    /*src__animation__curves.Curves.elasticOut*/get elasticOut() {
      return dart.const(new src__animation__curves.ElasticOutCurve.new());
    },
    /*src__animation__curves.Curves.elasticInOut*/get elasticInOut() {
      return dart.const(new src__animation__curves.ElasticInOutCurve.new());
    }
  });
  src__animation__curves._bounce = function(t) {
    if (dart.notNull(t) < 1.0 / 2.75) {
      return 7.5625 * dart.notNull(t) * dart.notNull(t);
    } else if (dart.notNull(t) < 2 / 2.75) {
      t = dart.notNull(t) - 1.5 / 2.75;
      return 7.5625 * dart.notNull(t) * dart.notNull(t) + 0.75;
    } else if (dart.notNull(t) < 2.5 / 2.75) {
      t = dart.notNull(t) - 2.25 / 2.75;
      return 7.5625 * dart.notNull(t) * dart.notNull(t) + 0.9375;
    }
    t = dart.notNull(t) - 2.625 / 2.75;
    return 7.5625 * dart.notNull(t) * dart.notNull(t) + 0.984375;
  };
  src__animation__animations._AlwaysCompleteAnimation = class _AlwaysCompleteAnimation extends src__animation__animation.Animation$(core.double) {
    addListener(listener) {
    }
    removeListener(listener) {
    }
    addStatusListener(listener) {
    }
    removeStatusListener(listener) {
    }
    get status() {
      return src__animation__animation.AnimationStatus.completed;
    }
    get value() {
      return 1.0;
    }
    toString() {
      return "kAlwaysCompleteAnimation";
    }
  };
  (src__animation__animations._AlwaysCompleteAnimation.new = function() {
    src__animation__animations._AlwaysCompleteAnimation.__proto__.new.call(this);
    ;
  }).prototype = src__animation__animations._AlwaysCompleteAnimation.prototype;
  dart.addTypeTests(src__animation__animations._AlwaysCompleteAnimation);
  dart.setMethodSignature(src__animation__animations._AlwaysCompleteAnimation, () => ({
    __proto__: dart.getMethods(src__animation__animations._AlwaysCompleteAnimation.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__animation__animation.AnimationStatus])]),
    removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__animation__animation.AnimationStatus])])
  }));
  dart.setGetterSignature(src__animation__animations._AlwaysCompleteAnimation, () => ({
    __proto__: dart.getGetters(src__animation__animations._AlwaysCompleteAnimation.__proto__),
    status: src__animation__animation.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(src__animation__animations._AlwaysCompleteAnimation, "package:flutter_web/src/animation/animations.dart");
  dart.defineExtensionMethods(src__animation__animations._AlwaysCompleteAnimation, ['toString']);
  src__animation__animations._AlwaysDismissedAnimation = class _AlwaysDismissedAnimation extends src__animation__animation.Animation$(core.double) {
    addListener(listener) {
    }
    removeListener(listener) {
    }
    addStatusListener(listener) {
    }
    removeStatusListener(listener) {
    }
    get status() {
      return src__animation__animation.AnimationStatus.dismissed;
    }
    get value() {
      return 0.0;
    }
    toString() {
      return "kAlwaysDismissedAnimation";
    }
  };
  (src__animation__animations._AlwaysDismissedAnimation.new = function() {
    src__animation__animations._AlwaysDismissedAnimation.__proto__.new.call(this);
    ;
  }).prototype = src__animation__animations._AlwaysDismissedAnimation.prototype;
  dart.addTypeTests(src__animation__animations._AlwaysDismissedAnimation);
  dart.setMethodSignature(src__animation__animations._AlwaysDismissedAnimation, () => ({
    __proto__: dart.getMethods(src__animation__animations._AlwaysDismissedAnimation.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__animation__animation.AnimationStatus])]),
    removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__animation__animation.AnimationStatus])])
  }));
  dart.setGetterSignature(src__animation__animations._AlwaysDismissedAnimation, () => ({
    __proto__: dart.getGetters(src__animation__animations._AlwaysDismissedAnimation.__proto__),
    status: src__animation__animation.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(src__animation__animations._AlwaysDismissedAnimation, "package:flutter_web/src/animation/animations.dart");
  dart.defineExtensionMethods(src__animation__animations._AlwaysDismissedAnimation, ['toString']);
  const _is_AlwaysStoppedAnimation_default = Symbol('_is_AlwaysStoppedAnimation_default');
  src__animation__animations.AlwaysStoppedAnimation$ = dart.generic(T => {
    class AlwaysStoppedAnimation extends src__animation__animation.Animation$(T) {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      addListener(listener) {
      }
      removeListener(listener) {
      }
      addStatusListener(listener) {
      }
      removeStatusListener(listener) {
      }
      get status() {
        return src__animation__animation.AnimationStatus.forward;
      }
      toStringDetails() {
        return dart.str(super.toStringDetails()) + " " + dart.str(this.value) + "; paused";
      }
    }
    (AlwaysStoppedAnimation.new = function(value) {
      this[value$] = value;
      AlwaysStoppedAnimation.__proto__.new.call(this);
      ;
    }).prototype = AlwaysStoppedAnimation.prototype;
    dart.addTypeTests(AlwaysStoppedAnimation);
    AlwaysStoppedAnimation.prototype[_is_AlwaysStoppedAnimation_default] = true;
    const value$ = Symbol("AlwaysStoppedAnimation.value");
    dart.setMethodSignature(AlwaysStoppedAnimation, () => ({
      __proto__: dart.getMethods(AlwaysStoppedAnimation.__proto__),
      addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__animation__animation.AnimationStatus])]),
      removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__animation__animation.AnimationStatus])])
    }));
    dart.setGetterSignature(AlwaysStoppedAnimation, () => ({
      __proto__: dart.getGetters(AlwaysStoppedAnimation.__proto__),
      status: src__animation__animation.AnimationStatus
    }));
    dart.setLibraryUri(AlwaysStoppedAnimation, "package:flutter_web/src/animation/animations.dart");
    dart.setFieldSignature(AlwaysStoppedAnimation, () => ({
      __proto__: dart.getFields(AlwaysStoppedAnimation.__proto__),
      value: dart.finalFieldType(T)
    }));
    return AlwaysStoppedAnimation;
  });
  src__animation__animations.AlwaysStoppedAnimation = src__animation__animations.AlwaysStoppedAnimation$();
  dart.addTypeTests(src__animation__animations.AlwaysStoppedAnimation, _is_AlwaysStoppedAnimation_default);
  const _status = dart.privateName(src__animation__animations, "_status");
  const _value = dart.privateName(src__animation__animations, "_value");
  const _parent = dart.privateName(src__animation__animations, "_parent");
  const _listenerCounter = dart.privateName(src__animation__listener_helpers, "_listenerCounter");
  src__animation__listener_helpers.AnimationLazyListenerMixin = class AnimationLazyListenerMixin extends core.Object {};
  src__animation__listener_helpers.AnimationLazyListenerMixin[dart.mixinOn] = Object => class AnimationLazyListenerMixin extends Object {
    didRegisterListener() {
      if (!(dart.notNull(this[_listenerCounter]) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/listener_helpers.dart", 29, 12, "_listenerCounter >= 0");
      if (this[_listenerCounter] === 0) this.didStartListening();
      this[_listenerCounter] = dart.notNull(this[_listenerCounter]) + 1;
    }
    didUnregisterListener() {
      if (!(dart.notNull(this[_listenerCounter]) >= 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/listener_helpers.dart", 41, 12, "_listenerCounter >= 1");
      this[_listenerCounter] = dart.notNull(this[_listenerCounter]) - 1;
      if (this[_listenerCounter] === 0) this.didStopListening();
    }
    get isListening() {
      return dart.notNull(this[_listenerCounter]) > 0;
    }
  };
  (src__animation__listener_helpers.AnimationLazyListenerMixin[dart.mixinNew] = function() {
    this[_listenerCounter] = 0;
  }).prototype = src__animation__listener_helpers.AnimationLazyListenerMixin.prototype;
  dart.addTypeTests(src__animation__listener_helpers.AnimationLazyListenerMixin);
  src__animation__listener_helpers.AnimationLazyListenerMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(src__animation__listener_helpers.AnimationLazyListenerMixin, () => ({
    __proto__: dart.getMethods(src__animation__listener_helpers.AnimationLazyListenerMixin.__proto__),
    didRegisterListener: dart.fnType(dart.void, []),
    didUnregisterListener: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__animation__listener_helpers.AnimationLazyListenerMixin, () => ({
    __proto__: dart.getGetters(src__animation__listener_helpers.AnimationLazyListenerMixin.__proto__),
    isListening: core.bool
  }));
  dart.setLibraryUri(src__animation__listener_helpers.AnimationLazyListenerMixin, "package:flutter_web/src/animation/listener_helpers.dart");
  dart.setFieldSignature(src__animation__listener_helpers.AnimationLazyListenerMixin, () => ({
    __proto__: dart.getFields(src__animation__listener_helpers.AnimationLazyListenerMixin.__proto__),
    [_listenerCounter]: dart.fieldType(core.int)
  }));
  const _listeners = dart.privateName(src__animation__listener_helpers, "_listeners");
  src__animation__listener_helpers.AnimationLocalListenersMixin = class AnimationLocalListenersMixin extends core.Object {};
  src__animation__listener_helpers.AnimationLocalListenersMixin[dart.mixinOn] = Object => class AnimationLocalListenersMixin extends Object {
    addListener(listener) {
      this.didRegisterListener();
      this[_listeners].add(listener);
    }
    removeListener(listener) {
      let removed = this[_listeners].remove(listener);
      if (dart.test(removed)) {
        this.didUnregisterListener();
      }
    }
    notifyListeners() {
      let localListeners = ListOfVoidTovoid().from(this[_listeners]);
      for (let listener of localListeners) {
        try {
          if (dart.test(this[_listeners].contains(listener))) listener();
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "animation library", context: new src__foundation__assertions.ErrorDescription.new("while notifying listeners for " + dart.str(this[$runtimeType])), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin()).new((function*() {
              yield new (DiagnosticsPropertyOfAnimationLocalListenersMixin()).new("The " + dart.str(this[$runtimeType]) + " notifying listeners was", this, {style: src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty});
            }).bind(this)), VoidToIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin())}));
        }
      }
    }
  };
  (src__animation__listener_helpers.AnimationLocalListenersMixin[dart.mixinNew] = function() {
    this[_listeners] = new (ObserverListOfVoidTovoid()).new();
  }).prototype = src__animation__listener_helpers.AnimationLocalListenersMixin.prototype;
  dart.addTypeTests(src__animation__listener_helpers.AnimationLocalListenersMixin);
  src__animation__listener_helpers.AnimationLocalListenersMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(src__animation__listener_helpers.AnimationLocalListenersMixin, () => ({
    __proto__: dart.getMethods(src__animation__listener_helpers.AnimationLocalListenersMixin.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    notifyListeners: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(src__animation__listener_helpers.AnimationLocalListenersMixin, "package:flutter_web/src/animation/listener_helpers.dart");
  dart.setFieldSignature(src__animation__listener_helpers.AnimationLocalListenersMixin, () => ({
    __proto__: dart.getFields(src__animation__listener_helpers.AnimationLocalListenersMixin.__proto__),
    [_listeners]: dart.finalFieldType(src__foundation__observer_list.ObserverList$(dart.fnType(dart.void, [])))
  }));
  const _statusListeners = dart.privateName(src__animation__listener_helpers, "_statusListeners");
  src__animation__listener_helpers.AnimationLocalStatusListenersMixin = class AnimationLocalStatusListenersMixin extends core.Object {};
  src__animation__listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinOn] = Object => class AnimationLocalStatusListenersMixin extends Object {
    addStatusListener(listener) {
      this.didRegisterListener();
      this[_statusListeners].add(listener);
    }
    removeStatusListener(listener) {
      let removed = this[_statusListeners].remove(listener);
      if (dart.test(removed)) {
        this.didUnregisterListener();
      }
    }
    notifyStatusListeners(status) {
      let localListeners = ListOfAnimationStatusTovoid().from(this[_statusListeners]);
      for (let listener of localListeners) {
        try {
          if (dart.test(this[_statusListeners].contains(listener))) listener(status);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "animation library", context: new src__foundation__assertions.ErrorDescription.new("while notifying status listeners for " + dart.str(this[$runtimeType])), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin()).new((function*() {
              yield new (DiagnosticsPropertyOfAnimationLocalStatusListenersMixin()).new("The " + dart.str(this[$runtimeType]) + " notifying status listeners was", this, {style: src__foundation__diagnostics.DiagnosticsTreeStyle.errorProperty});
            }).bind(this)), VoidToIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin())}));
        }
      }
    }
  };
  (src__animation__listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew] = function() {
    this[_statusListeners] = new (ObserverListOfAnimationStatusTovoid()).new();
  }).prototype = src__animation__listener_helpers.AnimationLocalStatusListenersMixin.prototype;
  dart.addTypeTests(src__animation__listener_helpers.AnimationLocalStatusListenersMixin);
  src__animation__listener_helpers.AnimationLocalStatusListenersMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(src__animation__listener_helpers.AnimationLocalStatusListenersMixin, () => ({
    __proto__: dart.getMethods(src__animation__listener_helpers.AnimationLocalStatusListenersMixin.__proto__),
    addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__animation__animation.AnimationStatus])]),
    removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__animation__animation.AnimationStatus])]),
    notifyStatusListeners: dart.fnType(dart.void, [src__animation__animation.AnimationStatus])
  }));
  dart.setLibraryUri(src__animation__listener_helpers.AnimationLocalStatusListenersMixin, "package:flutter_web/src/animation/listener_helpers.dart");
  dart.setFieldSignature(src__animation__listener_helpers.AnimationLocalStatusListenersMixin, () => ({
    __proto__: dart.getFields(src__animation__listener_helpers.AnimationLocalStatusListenersMixin.__proto__),
    [_statusListeners]: dart.finalFieldType(src__foundation__observer_list.ObserverList$(dart.fnType(dart.void, [src__animation__animation.AnimationStatus])))
  }));
  const Animation_AnimationLazyListenerMixin$ = class Animation_AnimationLazyListenerMixin extends src__animation__animation.Animation$(core.double) {};
  (Animation_AnimationLazyListenerMixin$.new = function() {
    src__animation__listener_helpers.AnimationLazyListenerMixin[dart.mixinNew].call(this);
    Animation_AnimationLazyListenerMixin$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLazyListenerMixin$.prototype;
  dart.applyMixin(Animation_AnimationLazyListenerMixin$, src__animation__listener_helpers.AnimationLazyListenerMixin);
  const Animation_AnimationLocalListenersMixin$ = class Animation_AnimationLocalListenersMixin extends Animation_AnimationLazyListenerMixin$ {};
  (Animation_AnimationLocalListenersMixin$.new = function() {
    src__animation__listener_helpers.AnimationLocalListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalListenersMixin$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalListenersMixin$.prototype;
  dart.applyMixin(Animation_AnimationLocalListenersMixin$, src__animation__listener_helpers.AnimationLocalListenersMixin);
  const Animation_AnimationLocalStatusListenersMixin$ = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLocalListenersMixin$ {};
  (Animation_AnimationLocalStatusListenersMixin$.new = function() {
    src__animation__listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalStatusListenersMixin$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalStatusListenersMixin$.prototype;
  dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$, src__animation__listener_helpers.AnimationLocalStatusListenersMixin);
  src__animation__animations.ProxyAnimation = class ProxyAnimation extends Animation_AnimationLocalStatusListenersMixin$ {
    get parent() {
      return this[_parent];
    }
    set parent(value) {
      if (dart.equals(value, this[_parent])) return;
      if (this[_parent] != null) {
        this[_status] = this[_parent].status;
        this[_value] = this[_parent].value;
        if (dart.test(this.isListening)) this.didStopListening();
      }
      this[_parent] = value;
      if (this[_parent] != null) {
        if (dart.test(this.isListening)) this.didStartListening();
        if (this[_value] != this[_parent].value) this.notifyListeners();
        if (!dart.equals(this[_status], this[_parent].status)) this.notifyStatusListeners(this[_parent].status);
        this[_status] = null;
        this[_value] = null;
      }
    }
    didStartListening() {
      if (this[_parent] != null) {
        this[_parent].addListener(dart.bind(this, 'notifyListeners'));
        this[_parent].addStatusListener(dart.bind(this, 'notifyStatusListeners'));
      }
    }
    didStopListening() {
      if (this[_parent] != null) {
        this[_parent].removeListener(dart.bind(this, 'notifyListeners'));
        this[_parent].removeStatusListener(dart.bind(this, 'notifyStatusListeners'));
      }
    }
    get status() {
      return this[_parent] != null ? this[_parent].status : this[_status];
    }
    get value() {
      return this[_parent] != null ? this[_parent].value : this[_value];
    }
    toString() {
      if (this.parent == null) return dart.str(this[$runtimeType]) + "(null; " + dart.str(super.toStringDetails()) + " " + this.value[$toStringAsFixed](3) + ")";
      return dart.str(this.parent) + "➩" + dart.str(this[$runtimeType]);
    }
  };
  (src__animation__animations.ProxyAnimation.new = function(animation) {
    if (animation === void 0) animation = null;
    this[_status] = null;
    this[_value] = null;
    this[_parent] = null;
    src__animation__animations.ProxyAnimation.__proto__.new.call(this);
    this[_parent] = animation;
    if (this[_parent] == null) {
      this[_status] = src__animation__animation.AnimationStatus.dismissed;
      this[_value] = 0.0;
    }
  }).prototype = src__animation__animations.ProxyAnimation.prototype;
  dart.addTypeTests(src__animation__animations.ProxyAnimation);
  dart.setMethodSignature(src__animation__animations.ProxyAnimation, () => ({
    __proto__: dart.getMethods(src__animation__animations.ProxyAnimation.__proto__),
    didStartListening: dart.fnType(dart.void, []),
    didStopListening: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__animation__animations.ProxyAnimation, () => ({
    __proto__: dart.getGetters(src__animation__animations.ProxyAnimation.__proto__),
    parent: src__animation__animation.Animation$(core.double),
    status: src__animation__animation.AnimationStatus,
    value: core.double
  }));
  dart.setSetterSignature(src__animation__animations.ProxyAnimation, () => ({
    __proto__: dart.getSetters(src__animation__animations.ProxyAnimation.__proto__),
    parent: src__animation__animation.Animation$(core.double)
  }));
  dart.setLibraryUri(src__animation__animations.ProxyAnimation, "package:flutter_web/src/animation/animations.dart");
  dart.setFieldSignature(src__animation__animations.ProxyAnimation, () => ({
    __proto__: dart.getFields(src__animation__animations.ProxyAnimation.__proto__),
    [_status]: dart.fieldType(src__animation__animation.AnimationStatus),
    [_value]: dart.fieldType(core.double),
    [_parent]: dart.fieldType(src__animation__animation.Animation$(core.double))
  }));
  dart.defineExtensionMethods(src__animation__animations.ProxyAnimation, ['toString']);
  const _statusChangeHandler = dart.privateName(src__animation__animations, "_statusChangeHandler");
  const _reverseStatus = dart.privateName(src__animation__animations, "_reverseStatus");
  const Animation_AnimationLazyListenerMixin$$ = class Animation_AnimationLazyListenerMixin extends src__animation__animation.Animation$(core.double) {};
  (Animation_AnimationLazyListenerMixin$$.new = function() {
    src__animation__listener_helpers.AnimationLazyListenerMixin[dart.mixinNew].call(this);
    Animation_AnimationLazyListenerMixin$$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLazyListenerMixin$$.prototype;
  dart.applyMixin(Animation_AnimationLazyListenerMixin$$, src__animation__listener_helpers.AnimationLazyListenerMixin);
  const Animation_AnimationLocalStatusListenersMixin$$ = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLazyListenerMixin$$ {};
  (Animation_AnimationLocalStatusListenersMixin$$.new = function() {
    src__animation__listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalStatusListenersMixin$$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalStatusListenersMixin$$.prototype;
  dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$$, src__animation__listener_helpers.AnimationLocalStatusListenersMixin);
  src__animation__animations.ReverseAnimation = class ReverseAnimation extends Animation_AnimationLocalStatusListenersMixin$$ {
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      super.parent = value;
    }
    addListener(listener) {
      this.didRegisterListener();
      this.parent.addListener(listener);
    }
    removeListener(listener) {
      this.parent.removeListener(listener);
      this.didUnregisterListener();
    }
    didStartListening() {
      this.parent.addStatusListener(dart.bind(this, _statusChangeHandler));
    }
    didStopListening() {
      this.parent.removeStatusListener(dart.bind(this, _statusChangeHandler));
    }
    [_statusChangeHandler](status) {
      this.notifyStatusListeners(this[_reverseStatus](status));
    }
    get status() {
      return this[_reverseStatus](this.parent.status);
    }
    get value() {
      return 1.0 - dart.notNull(this.parent.value);
    }
    [_reverseStatus](status) {
      if (!(status != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/animations.dart", 301, 12, "status != null");
      switch (status) {
        case src__animation__animation.AnimationStatus.forward:
        {
          return src__animation__animation.AnimationStatus.reverse;
        }
        case src__animation__animation.AnimationStatus.reverse:
        {
          return src__animation__animation.AnimationStatus.forward;
        }
        case src__animation__animation.AnimationStatus.completed:
        {
          return src__animation__animation.AnimationStatus.dismissed;
        }
        case src__animation__animation.AnimationStatus.dismissed:
        {
          return src__animation__animation.AnimationStatus.completed;
        }
      }
      return null;
    }
    toString() {
      return dart.str(this.parent) + "➪" + dart.str(this[$runtimeType]);
    }
  };
  (src__animation__animations.ReverseAnimation.new = function(parent) {
    this[parent$] = parent;
    if (!(parent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/animations.dart", 263, 42, "parent != null");
    src__animation__animations.ReverseAnimation.__proto__.new.call(this);
    ;
  }).prototype = src__animation__animations.ReverseAnimation.prototype;
  dart.addTypeTests(src__animation__animations.ReverseAnimation);
  const parent$ = Symbol("ReverseAnimation.parent");
  dart.setMethodSignature(src__animation__animations.ReverseAnimation, () => ({
    __proto__: dart.getMethods(src__animation__animations.ReverseAnimation.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    didStartListening: dart.fnType(dart.void, []),
    didStopListening: dart.fnType(dart.void, []),
    [_statusChangeHandler]: dart.fnType(dart.void, [src__animation__animation.AnimationStatus]),
    [_reverseStatus]: dart.fnType(src__animation__animation.AnimationStatus, [src__animation__animation.AnimationStatus])
  }));
  dart.setGetterSignature(src__animation__animations.ReverseAnimation, () => ({
    __proto__: dart.getGetters(src__animation__animations.ReverseAnimation.__proto__),
    status: src__animation__animation.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(src__animation__animations.ReverseAnimation, "package:flutter_web/src/animation/animations.dart");
  dart.setFieldSignature(src__animation__animations.ReverseAnimation, () => ({
    __proto__: dart.getFields(src__animation__animations.ReverseAnimation.__proto__),
    parent: dart.finalFieldType(src__animation__animation.Animation$(core.double))
  }));
  dart.defineExtensionMethods(src__animation__animations.ReverseAnimation, ['toString']);
  const _curveDirection = dart.privateName(src__animation__animations, "_curveDirection");
  const _updateCurveDirection = dart.privateName(src__animation__animations, "_updateCurveDirection");
  const _useForwardCurve = dart.privateName(src__animation__animations, "_useForwardCurve");
  const Animation_AnimationWithParentMixin$ = class Animation_AnimationWithParentMixin extends src__animation__animation.Animation$(core.double) {};
  (Animation_AnimationWithParentMixin$.new = function() {
    Animation_AnimationWithParentMixin$.__proto__.new.call(this);
  }).prototype = Animation_AnimationWithParentMixin$.prototype;
  dart.applyMixin(Animation_AnimationWithParentMixin$, src__animation__animations.AnimationWithParentMixin$(core.double));
  src__animation__animations.CurvedAnimation = class CurvedAnimation extends Animation_AnimationWithParentMixin$ {
    get parent() {
      return this[parent$0];
    }
    set parent(value) {
      super.parent = value;
    }
    get curve() {
      return this[curve$2];
    }
    set curve(value) {
      this[curve$2] = value;
    }
    get reverseCurve() {
      return this[reverseCurve$];
    }
    set reverseCurve(value) {
      this[reverseCurve$] = value;
    }
    [_updateCurveDirection](status) {
      switch (status) {
        case src__animation__animation.AnimationStatus.dismissed:
        case src__animation__animation.AnimationStatus.completed:
        {
          this[_curveDirection] = null;
          break;
        }
        case src__animation__animation.AnimationStatus.forward:
        {
          this[_curveDirection] == null ? this[_curveDirection] = src__animation__animation.AnimationStatus.forward : null;
          break;
        }
        case src__animation__animation.AnimationStatus.reverse:
        {
          this[_curveDirection] == null ? this[_curveDirection] = src__animation__animation.AnimationStatus.reverse : null;
          break;
        }
      }
    }
    get [_useForwardCurve]() {
      let t2;
      return this.reverseCurve == null || !dart.equals((t2 = this[_curveDirection], t2 == null ? this.parent.status : t2), src__animation__animation.AnimationStatus.reverse);
    }
    get value() {
      let activeCurve = dart.test(this[_useForwardCurve]) ? this.curve : this.reverseCurve;
      let t = this.parent.value;
      if (activeCurve == null) return t;
      if (t === 0.0 || t === 1.0) {
        if (!dart.test(dart.fn(() => {
          let transformedValue = activeCurve.transform(t);
          let roundedTransformedValue = transformedValue[$round]()[$toDouble]();
          if (roundedTransformedValue !== t) {
            dart.throw(src__foundation__assertions.FlutterError.new("Invalid curve endpoint at " + dart.str(t) + ".\n" + "Curves must map 0.0 to near zero and 1.0 to near one but " + dart.str(dart.runtimeType(activeCurve)) + " mapped " + dart.str(t) + " to " + dart.str(transformedValue) + ", which " + "is near " + dart.str(roundedTransformedValue) + "."));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/animations.dart", 443, 14, "() {\n        final double transformedValue = activeCurve.transform(t);\n        final double roundedTransformedValue =\n            transformedValue.round().toDouble();\n        if (roundedTransformedValue != t) {\n          throw FlutterError('Invalid curve endpoint at $t.\\n'\n              'Curves must map 0.0 to near zero and 1.0 to near one but '\n              '${activeCurve.runtimeType} mapped $t to $transformedValue, which '\n              'is near $roundedTransformedValue.');\n        }\n        return true;\n      }()");
        return t;
      }
      return activeCurve.transform(t);
    }
    toString() {
      if (this.reverseCurve == null) return dart.str(this.parent) + "➩" + dart.str(this.curve);
      if (dart.test(this[_useForwardCurve])) return dart.str(this.parent) + "➩" + dart.str(this.curve) + "ₒₙ/" + dart.str(this.reverseCurve);
      return dart.str(this.parent) + "➩" + dart.str(this.curve) + "/" + dart.str(this.reverseCurve) + "ₒₙ";
    }
  };
  (src__animation__animations.CurvedAnimation.new = function(opts) {
    let parent = opts && 'parent' in opts ? opts.parent : null;
    let curve = opts && 'curve' in opts ? opts.curve : null;
    let reverseCurve = opts && 'reverseCurve' in opts ? opts.reverseCurve : null;
    this[_curveDirection] = null;
    this[parent$0] = parent;
    this[curve$2] = curve;
    this[reverseCurve$] = reverseCurve;
    if (!(parent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/animations.dart", 381, 16, "parent != null");
    if (!(curve != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/animations.dart", 382, 16, "curve != null");
    src__animation__animations.CurvedAnimation.__proto__.new.call(this);
    this[_updateCurveDirection](this.parent.status);
    this.parent.addStatusListener(dart.bind(this, _updateCurveDirection));
  }).prototype = src__animation__animations.CurvedAnimation.prototype;
  dart.addTypeTests(src__animation__animations.CurvedAnimation);
  const parent$0 = Symbol("CurvedAnimation.parent");
  const curve$2 = Symbol("CurvedAnimation.curve");
  const reverseCurve$ = Symbol("CurvedAnimation.reverseCurve");
  dart.setMethodSignature(src__animation__animations.CurvedAnimation, () => ({
    __proto__: dart.getMethods(src__animation__animations.CurvedAnimation.__proto__),
    [_updateCurveDirection]: dart.fnType(dart.void, [src__animation__animation.AnimationStatus])
  }));
  dart.setGetterSignature(src__animation__animations.CurvedAnimation, () => ({
    __proto__: dart.getGetters(src__animation__animations.CurvedAnimation.__proto__),
    [_useForwardCurve]: core.bool,
    value: core.double
  }));
  dart.setLibraryUri(src__animation__animations.CurvedAnimation, "package:flutter_web/src/animation/animations.dart");
  dart.setFieldSignature(src__animation__animations.CurvedAnimation, () => ({
    __proto__: dart.getFields(src__animation__animations.CurvedAnimation.__proto__),
    parent: dart.finalFieldType(src__animation__animation.Animation$(core.double)),
    curve: dart.fieldType(src__animation__curves.Curve),
    reverseCurve: dart.fieldType(src__animation__curves.Curve),
    [_curveDirection]: dart.fieldType(src__animation__animation.AnimationStatus)
  }));
  dart.defineExtensionMethods(src__animation__animations.CurvedAnimation, ['toString']);
  const _name$ = dart.privateName(src__animation__animations, "_name");
  src__animation__animations._TrainHoppingMode = class _TrainHoppingMode extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (src__animation__animations._TrainHoppingMode.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = src__animation__animations._TrainHoppingMode.prototype;
  dart.addTypeTests(src__animation__animations._TrainHoppingMode);
  dart.setLibraryUri(src__animation__animations._TrainHoppingMode, "package:flutter_web/src/animation/animations.dart");
  dart.setFieldSignature(src__animation__animations._TrainHoppingMode, () => ({
    __proto__: dart.getFields(src__animation__animations._TrainHoppingMode.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__animation__animations._TrainHoppingMode, ['toString']);
  src__animation__animations._TrainHoppingMode.minimize = dart.const(new src__animation__animations._TrainHoppingMode.new(0, "_TrainHoppingMode.minimize"));
  src__animation__animations._TrainHoppingMode.maximize = dart.const(new src__animation__animations._TrainHoppingMode.new(1, "_TrainHoppingMode.maximize"));
  src__animation__animations._TrainHoppingMode.values = dart.constList([src__animation__animations._TrainHoppingMode.minimize, src__animation__animations._TrainHoppingMode.maximize], src__animation__animations._TrainHoppingMode);
  const _mode = dart.privateName(src__animation__animations, "_mode");
  const _lastStatus = dart.privateName(src__animation__animations, "_lastStatus");
  const _lastValue = dart.privateName(src__animation__animations, "_lastValue");
  const _currentTrain$ = dart.privateName(src__animation__animations, "_currentTrain");
  const _nextTrain$ = dart.privateName(src__animation__animations, "_nextTrain");
  const _valueChangeHandler = dart.privateName(src__animation__animations, "_valueChangeHandler");
  src__animation__listener_helpers.AnimationEagerListenerMixin = class AnimationEagerListenerMixin extends core.Object {};
  src__animation__listener_helpers.AnimationEagerListenerMixin[dart.mixinOn] = Object => class AnimationEagerListenerMixin extends Object {
    didRegisterListener() {
    }
    didUnregisterListener() {
    }
    dispose() {
    }
  };
  (src__animation__listener_helpers.AnimationEagerListenerMixin[dart.mixinNew] = function() {
  }).prototype = src__animation__listener_helpers.AnimationEagerListenerMixin.prototype;
  dart.addTypeTests(src__animation__listener_helpers.AnimationEagerListenerMixin);
  src__animation__listener_helpers.AnimationEagerListenerMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(src__animation__listener_helpers.AnimationEagerListenerMixin, () => ({
    __proto__: dart.getMethods(src__animation__listener_helpers.AnimationEagerListenerMixin.__proto__),
    didRegisterListener: dart.fnType(dart.void, []),
    didUnregisterListener: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(src__animation__listener_helpers.AnimationEagerListenerMixin, "package:flutter_web/src/animation/listener_helpers.dart");
  const Animation_AnimationEagerListenerMixin$ = class Animation_AnimationEagerListenerMixin extends src__animation__animation.Animation$(core.double) {};
  (Animation_AnimationEagerListenerMixin$.new = function() {
    Animation_AnimationEagerListenerMixin$.__proto__.new.call(this);
  }).prototype = Animation_AnimationEagerListenerMixin$.prototype;
  dart.applyMixin(Animation_AnimationEagerListenerMixin$, src__animation__listener_helpers.AnimationEagerListenerMixin);
  const Animation_AnimationLocalListenersMixin$$ = class Animation_AnimationLocalListenersMixin extends Animation_AnimationEagerListenerMixin$ {};
  (Animation_AnimationLocalListenersMixin$$.new = function() {
    src__animation__listener_helpers.AnimationLocalListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalListenersMixin$$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalListenersMixin$$.prototype;
  dart.applyMixin(Animation_AnimationLocalListenersMixin$$, src__animation__listener_helpers.AnimationLocalListenersMixin);
  const Animation_AnimationLocalStatusListenersMixin$$0 = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLocalListenersMixin$$ {};
  (Animation_AnimationLocalStatusListenersMixin$$0.new = function() {
    src__animation__listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalStatusListenersMixin$$0.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalStatusListenersMixin$$0.prototype;
  dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$$0, src__animation__listener_helpers.AnimationLocalStatusListenersMixin);
  src__animation__animations.TrainHoppingAnimation = class TrainHoppingAnimation extends Animation_AnimationLocalStatusListenersMixin$$0 {
    get onSwitchedTrain() {
      return this[onSwitchedTrain$];
    }
    set onSwitchedTrain(value) {
      this[onSwitchedTrain$] = value;
    }
    get currentTrain() {
      return this[_currentTrain$];
    }
    [_statusChangeHandler](status) {
      if (!(this[_currentTrain$] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/animations.dart", 537, 12, "_currentTrain != null");
      if (!dart.equals(status, this[_lastStatus])) {
        this.notifyListeners();
        this[_lastStatus] = status;
      }
      if (!(this[_lastStatus] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/animations.dart", 542, 12, "_lastStatus != null");
    }
    get status() {
      return this[_currentTrain$].status;
    }
    [_valueChangeHandler]() {
      let t2;
      if (!(this[_currentTrain$] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/animations.dart", 550, 12, "_currentTrain != null");
      let hop = false;
      if (this[_nextTrain$] != null) {
        if (!(this[_mode] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/animations.dart", 553, 14, "_mode != null");
        switch (this[_mode]) {
          case src__animation__animations._TrainHoppingMode.minimize:
          {
            hop = dart.notNull(this[_nextTrain$].value) <= dart.notNull(this[_currentTrain$].value);
            break;
          }
          case src__animation__animations._TrainHoppingMode.maximize:
          {
            hop = dart.notNull(this[_nextTrain$].value) >= dart.notNull(this[_currentTrain$].value);
            break;
          }
        }
        if (hop) {
          t2 = this[_currentTrain$];
          t2.removeStatusListener(dart.bind(this, _statusChangeHandler));
          t2.removeListener(dart.bind(this, _valueChangeHandler));
          t2;
          this[_currentTrain$] = this[_nextTrain$];
          this[_nextTrain$] = null;
          this[_currentTrain$].addStatusListener(dart.bind(this, _statusChangeHandler));
          this[_statusChangeHandler](this[_currentTrain$].status);
        }
      }
      let newValue = this.value;
      if (newValue != this[_lastValue]) {
        this.notifyListeners();
        this[_lastValue] = newValue;
      }
      if (!(this[_lastValue] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/animations.dart", 577, 12, "_lastValue != null");
      if (hop && this.onSwitchedTrain != null) this.onSwitchedTrain();
    }
    get value() {
      return this[_currentTrain$].value;
    }
    dispose() {
      let t2;
      if (!(this[_currentTrain$] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/animations.dart", 588, 12, "_currentTrain != null");
      this[_currentTrain$].removeStatusListener(dart.bind(this, _statusChangeHandler));
      this[_currentTrain$].removeListener(dart.bind(this, _valueChangeHandler));
      this[_currentTrain$] = null;
      t2 = this[_nextTrain$];
      t2 == null ? null : t2.removeListener(dart.bind(this, _valueChangeHandler));
      this[_nextTrain$] = null;
      super.dispose();
    }
    toString() {
      if (this[_nextTrain$] != null) return dart.str(this.currentTrain) + "➩" + dart.str(this[$runtimeType]) + "(next: " + dart.str(this[_nextTrain$]) + ")";
      return dart.str(this.currentTrain) + "➩" + dart.str(this[$runtimeType]) + "(no next)";
    }
  };
  (src__animation__animations.TrainHoppingAnimation.new = function(_currentTrain, _nextTrain, opts) {
    let t2;
    let onSwitchedTrain = opts && 'onSwitchedTrain' in opts ? opts.onSwitchedTrain : null;
    this[_mode] = null;
    this[_lastStatus] = null;
    this[_lastValue] = null;
    this[_currentTrain$] = _currentTrain;
    this[_nextTrain$] = _nextTrain;
    this[onSwitchedTrain$] = onSwitchedTrain;
    if (!(_currentTrain != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/animations.dart", 501, 16, "_currentTrain != null");
    src__animation__animations.TrainHoppingAnimation.__proto__.new.call(this);
    if (this[_nextTrain$] != null) {
      if (this[_currentTrain$].value == this[_nextTrain$].value) {
        this[_currentTrain$] = this[_nextTrain$];
        this[_nextTrain$] = null;
      } else if (dart.notNull(this[_currentTrain$].value) > dart.notNull(this[_nextTrain$].value)) {
        this[_mode] = src__animation__animations._TrainHoppingMode.maximize;
      } else {
        if (!(dart.notNull(this[_currentTrain$].value) < dart.notNull(this[_nextTrain$].value))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/animations.dart", 509, 16, "_currentTrain.value < _nextTrain.value");
        this[_mode] = src__animation__animations._TrainHoppingMode.minimize;
      }
    }
    this[_currentTrain$].addStatusListener(dart.bind(this, _statusChangeHandler));
    this[_currentTrain$].addListener(dart.bind(this, _valueChangeHandler));
    t2 = this[_nextTrain$];
    t2 == null ? null : t2.addListener(dart.bind(this, _valueChangeHandler));
    if (!(this[_mode] != null || this[_nextTrain$] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/animations.dart", 516, 12, "_mode != null || _nextTrain == null");
  }).prototype = src__animation__animations.TrainHoppingAnimation.prototype;
  dart.addTypeTests(src__animation__animations.TrainHoppingAnimation);
  const onSwitchedTrain$ = Symbol("TrainHoppingAnimation.onSwitchedTrain");
  dart.setMethodSignature(src__animation__animations.TrainHoppingAnimation, () => ({
    __proto__: dart.getMethods(src__animation__animations.TrainHoppingAnimation.__proto__),
    [_statusChangeHandler]: dart.fnType(dart.void, [src__animation__animation.AnimationStatus]),
    [_valueChangeHandler]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__animation__animations.TrainHoppingAnimation, () => ({
    __proto__: dart.getGetters(src__animation__animations.TrainHoppingAnimation.__proto__),
    currentTrain: src__animation__animation.Animation$(core.double),
    status: src__animation__animation.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(src__animation__animations.TrainHoppingAnimation, "package:flutter_web/src/animation/animations.dart");
  dart.setFieldSignature(src__animation__animations.TrainHoppingAnimation, () => ({
    __proto__: dart.getFields(src__animation__animations.TrainHoppingAnimation.__proto__),
    [_currentTrain$]: dart.fieldType(src__animation__animation.Animation$(core.double)),
    [_nextTrain$]: dart.fieldType(src__animation__animation.Animation$(core.double)),
    [_mode]: dart.fieldType(src__animation__animations._TrainHoppingMode),
    onSwitchedTrain: dart.fieldType(dart.fnType(dart.void, [])),
    [_lastStatus]: dart.fieldType(src__animation__animation.AnimationStatus),
    [_lastValue]: dart.fieldType(core.double)
  }));
  dart.defineExtensionMethods(src__animation__animations.TrainHoppingAnimation, ['toString']);
  const _maybeNotifyListeners = dart.privateName(src__animation__animations, "_maybeNotifyListeners");
  const _maybeNotifyStatusListeners = dart.privateName(src__animation__animations, "_maybeNotifyStatusListeners");
  const _is_CompoundAnimation_default = Symbol('_is_CompoundAnimation_default');
  src__animation__animations.CompoundAnimation$ = dart.generic(T => {
    const Animation_AnimationLazyListenerMixin$ = class Animation_AnimationLazyListenerMixin extends src__animation__animation.Animation$(T) {};
    (Animation_AnimationLazyListenerMixin$.new = function() {
      src__animation__listener_helpers.AnimationLazyListenerMixin[dart.mixinNew].call(this);
      Animation_AnimationLazyListenerMixin$.__proto__.new.call(this);
    }).prototype = Animation_AnimationLazyListenerMixin$.prototype;
    dart.applyMixin(Animation_AnimationLazyListenerMixin$, src__animation__listener_helpers.AnimationLazyListenerMixin);
    const Animation_AnimationLocalListenersMixin$ = class Animation_AnimationLocalListenersMixin extends Animation_AnimationLazyListenerMixin$ {};
    (Animation_AnimationLocalListenersMixin$.new = function() {
      src__animation__listener_helpers.AnimationLocalListenersMixin[dart.mixinNew].call(this);
      Animation_AnimationLocalListenersMixin$.__proto__.new.call(this);
    }).prototype = Animation_AnimationLocalListenersMixin$.prototype;
    dart.applyMixin(Animation_AnimationLocalListenersMixin$, src__animation__listener_helpers.AnimationLocalListenersMixin);
    const Animation_AnimationLocalStatusListenersMixin$ = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLocalListenersMixin$ {};
    (Animation_AnimationLocalStatusListenersMixin$.new = function() {
      src__animation__listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew].call(this);
      Animation_AnimationLocalStatusListenersMixin$.__proto__.new.call(this);
    }).prototype = Animation_AnimationLocalStatusListenersMixin$.prototype;
    dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$, src__animation__listener_helpers.AnimationLocalStatusListenersMixin);
    class CompoundAnimation extends Animation_AnimationLocalStatusListenersMixin$ {
      get first() {
        return this[first$];
      }
      set first(value) {
        super.first = value;
      }
      get next() {
        return this[next$];
      }
      set next(value) {
        super.next = value;
      }
      didStartListening() {
        this.first.addListener(dart.bind(this, _maybeNotifyListeners));
        this.first.addStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
        this.next.addListener(dart.bind(this, _maybeNotifyListeners));
        this.next.addStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
      }
      didStopListening() {
        this.first.removeListener(dart.bind(this, _maybeNotifyListeners));
        this.first.removeStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
        this.next.removeListener(dart.bind(this, _maybeNotifyListeners));
        this.next.removeStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
      }
      get status() {
        if (dart.equals(this.next.status, src__animation__animation.AnimationStatus.forward) || dart.equals(this.next.status, src__animation__animation.AnimationStatus.reverse)) return this.next.status;
        return this.first.status;
      }
      toString() {
        return dart.str(this[$runtimeType]) + "(" + dart.str(this.first) + ", " + dart.str(this.next) + ")";
      }
      [_maybeNotifyStatusListeners](_) {
        if (!dart.equals(this.status, this[_lastStatus])) {
          this[_lastStatus] = this.status;
          this.notifyStatusListeners(this.status);
        }
      }
      [_maybeNotifyListeners]() {
        if (!dart.equals(this.value, this[_lastValue])) {
          this[_lastValue] = this.value;
          this.notifyListeners();
        }
      }
    }
    (CompoundAnimation.new = function(opts) {
      let first = opts && 'first' in opts ? opts.first : null;
      let next = opts && 'next' in opts ? opts.next : null;
      this[_lastStatus] = null;
      this[_lastValue] = null;
      this[first$] = first;
      this[next$] = next;
      if (!(first != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/animations.dart", 625, 16, "first != null");
      if (!(next != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/animation/animations.dart", 626, 16, "next != null");
      CompoundAnimation.__proto__.new.call(this);
      ;
    }).prototype = CompoundAnimation.prototype;
    dart.addTypeTests(CompoundAnimation);
    CompoundAnimation.prototype[_is_CompoundAnimation_default] = true;
    const first$ = Symbol("CompoundAnimation.first");
    const next$ = Symbol("CompoundAnimation.next");
    dart.setMethodSignature(CompoundAnimation, () => ({
      __proto__: dart.getMethods(CompoundAnimation.__proto__),
      didStartListening: dart.fnType(dart.void, []),
      didStopListening: dart.fnType(dart.void, []),
      [_maybeNotifyStatusListeners]: dart.fnType(dart.void, [src__animation__animation.AnimationStatus]),
      [_maybeNotifyListeners]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(CompoundAnimation, () => ({
      __proto__: dart.getGetters(CompoundAnimation.__proto__),
      status: src__animation__animation.AnimationStatus
    }));
    dart.setLibraryUri(CompoundAnimation, "package:flutter_web/src/animation/animations.dart");
    dart.setFieldSignature(CompoundAnimation, () => ({
      __proto__: dart.getFields(CompoundAnimation.__proto__),
      first: dart.finalFieldType(src__animation__animation.Animation$(T)),
      next: dart.finalFieldType(src__animation__animation.Animation$(T)),
      [_lastStatus]: dart.fieldType(src__animation__animation.AnimationStatus),
      [_lastValue]: dart.fieldType(T)
    }));
    dart.defineExtensionMethods(CompoundAnimation, ['toString']);
    return CompoundAnimation;
  });
  src__animation__animations.CompoundAnimation = src__animation__animations.CompoundAnimation$();
  dart.addTypeTests(src__animation__animations.CompoundAnimation, _is_CompoundAnimation_default);
  src__animation__animations.AnimationMean = class AnimationMean extends src__animation__animations.CompoundAnimation$(core.double) {
    get value() {
      return (dart.notNull(this.first.value) + dart.notNull(this.next.value)) / 2.0;
    }
  };
  (src__animation__animations.AnimationMean.new = function(opts) {
    let left = opts && 'left' in opts ? opts.left : null;
    let right = opts && 'right' in opts ? opts.right : null;
    src__animation__animations.AnimationMean.__proto__.new.call(this, {first: left, next: right});
    ;
  }).prototype = src__animation__animations.AnimationMean.prototype;
  dart.addTypeTests(src__animation__animations.AnimationMean);
  dart.setGetterSignature(src__animation__animations.AnimationMean, () => ({
    __proto__: dart.getGetters(src__animation__animations.AnimationMean.__proto__),
    value: core.double
  }));
  dart.setLibraryUri(src__animation__animations.AnimationMean, "package:flutter_web/src/animation/animations.dart");
  const _is_AnimationMax_default = Symbol('_is_AnimationMax_default');
  src__animation__animations.AnimationMax$ = dart.generic(T => {
    class AnimationMax extends src__animation__animations.CompoundAnimation$(T) {
      get value() {
        return math.max(T, this.first.value, this.next.value);
      }
    }
    (AnimationMax.new = function(first, next) {
      AnimationMax.__proto__.new.call(this, {first: first, next: next});
      ;
    }).prototype = AnimationMax.prototype;
    dart.addTypeTests(AnimationMax);
    AnimationMax.prototype[_is_AnimationMax_default] = true;
    dart.setGetterSignature(AnimationMax, () => ({
      __proto__: dart.getGetters(AnimationMax.__proto__),
      value: T
    }));
    dart.setLibraryUri(AnimationMax, "package:flutter_web/src/animation/animations.dart");
    return AnimationMax;
  });
  src__animation__animations.AnimationMax = src__animation__animations.AnimationMax$();
  dart.addTypeTests(src__animation__animations.AnimationMax, _is_AnimationMax_default);
  const _is_AnimationMin_default = Symbol('_is_AnimationMin_default');
  src__animation__animations.AnimationMin$ = dart.generic(T => {
    class AnimationMin extends src__animation__animations.CompoundAnimation$(T) {
      get value() {
        return math.min(T, this.first.value, this.next.value);
      }
    }
    (AnimationMin.new = function(first, next) {
      AnimationMin.__proto__.new.call(this, {first: first, next: next});
      ;
    }).prototype = AnimationMin.prototype;
    dart.addTypeTests(AnimationMin);
    AnimationMin.prototype[_is_AnimationMin_default] = true;
    dart.setGetterSignature(AnimationMin, () => ({
      __proto__: dart.getGetters(AnimationMin.__proto__),
      value: T
    }));
    dart.setLibraryUri(AnimationMin, "package:flutter_web/src/animation/animations.dart");
    return AnimationMin;
  });
  src__animation__animations.AnimationMin = src__animation__animations.AnimationMin$();
  dart.addTypeTests(src__animation__animations.AnimationMin, _is_AnimationMin_default);
  dart.defineLazy(src__animation__animations, {
    /*src__animation__animations.kAlwaysCompleteAnimation*/get kAlwaysCompleteAnimation() {
      return dart.const(new src__animation__animations._AlwaysCompleteAnimation.new());
    },
    /*src__animation__animations.kAlwaysDismissedAnimation*/get kAlwaysDismissedAnimation() {
      return dart.const(new src__animation__animations._AlwaysDismissedAnimation.new());
    }
  });
  const _name$0 = dart.privateName(src__animation__animation, "_name");
  src__animation__animation.AnimationStatus = class AnimationStatus extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (src__animation__animation.AnimationStatus.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = src__animation__animation.AnimationStatus.prototype;
  dart.addTypeTests(src__animation__animation.AnimationStatus);
  dart.setLibraryUri(src__animation__animation.AnimationStatus, "package:flutter_web/src/animation/animation.dart");
  dart.setFieldSignature(src__animation__animation.AnimationStatus, () => ({
    __proto__: dart.getFields(src__animation__animation.AnimationStatus.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__animation__animation.AnimationStatus, ['toString']);
  src__animation__animation.AnimationStatus.dismissed = dart.const(new src__animation__animation.AnimationStatus.new(0, "AnimationStatus.dismissed"));
  src__animation__animation.AnimationStatus.forward = dart.const(new src__animation__animation.AnimationStatus.new(1, "AnimationStatus.forward"));
  src__animation__animation.AnimationStatus.reverse = dart.const(new src__animation__animation.AnimationStatus.new(2, "AnimationStatus.reverse"));
  src__animation__animation.AnimationStatus.completed = dart.const(new src__animation__animation.AnimationStatus.new(3, "AnimationStatus.completed"));
  src__animation__animation.AnimationStatus.values = dart.constList([src__animation__animation.AnimationStatus.dismissed, src__animation__animation.AnimationStatus.forward, src__animation__animation.AnimationStatus.reverse, src__animation__animation.AnimationStatus.completed], src__animation__animation.AnimationStatus);
  const _topLeft = dart.privateName(src__painting__border_radius, "_topLeft");
  const _topRight = dart.privateName(src__painting__border_radius, "_topRight");
  const _bottomLeft = dart.privateName(src__painting__border_radius, "_bottomLeft");
  const _bottomRight = dart.privateName(src__painting__border_radius, "_bottomRight");
  const _topStart = dart.privateName(src__painting__border_radius, "_topStart");
  const _topEnd = dart.privateName(src__painting__border_radius, "_topEnd");
  const _bottomStart = dart.privateName(src__painting__border_radius, "_bottomStart");
  const _bottomEnd = dart.privateName(src__painting__border_radius, "_bottomEnd");
  src__painting__border_radius.BorderRadiusGeometry = class BorderRadiusGeometry extends core.Object {
    subtract(other) {
      return new src__painting__border_radius._MixedBorderRadius.new(this[_topLeft]['-'](other[_topLeft]), this[_topRight]['-'](other[_topRight]), this[_bottomLeft]['-'](other[_bottomLeft]), this[_bottomRight]['-'](other[_bottomRight]), this[_topStart]['-'](other[_topStart]), this[_topEnd]['-'](other[_topEnd]), this[_bottomStart]['-'](other[_bottomStart]), this[_bottomEnd]['-'](other[_bottomEnd]));
    }
    add(other) {
      return new src__painting__border_radius._MixedBorderRadius.new(this[_topLeft]['+'](other[_topLeft]), this[_topRight]['+'](other[_topRight]), this[_bottomLeft]['+'](other[_bottomLeft]), this[_bottomRight]['+'](other[_bottomRight]), this[_topStart]['+'](other[_topStart]), this[_topEnd]['+'](other[_topEnd]), this[_bottomStart]['+'](other[_bottomStart]), this[_bottomEnd]['+'](other[_bottomEnd]));
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/border_radius.dart", 148, 12, "t != null");
      if (a == null && b == null) return null;
      a == null ? a = src__painting__border_radius.BorderRadius.zero : null;
      b == null ? b = src__painting__border_radius.BorderRadius.zero : null;
      return a.add(b.subtract(a)['*'](t));
    }
    toString() {
      if (dart.test(src__util.assertionsEnabled)) {
        let visual = null;
        let logical = null;
        if (dart.equals(this[_topLeft], this[_topRight]) && dart.equals(this[_topRight], this[_bottomLeft]) && dart.equals(this[_bottomLeft], this[_bottomRight])) {
          if (!dart.equals(this[_topLeft], ui$.Radius.zero)) {
            if (this[_topLeft].x == this[_topLeft].y) {
              visual = "BorderRadius.circular(" + this[_topLeft].x[$toStringAsFixed](1) + ")";
            } else {
              visual = "BorderRadius.all(" + dart.str(this[_topLeft]) + ")";
            }
          }
        } else {
          let result = new core.StringBuffer.new();
          result.write("BorderRadius.only(");
          let comma = false;
          if (!dart.equals(this[_topLeft], ui$.Radius.zero)) {
            result.write("topLeft: " + dart.str(this[_topLeft]));
            comma = true;
          }
          if (!dart.equals(this[_topRight], ui$.Radius.zero)) {
            if (comma) result.write(", ");
            result.write("topRight: " + dart.str(this[_topRight]));
            comma = true;
          }
          if (!dart.equals(this[_bottomLeft], ui$.Radius.zero)) {
            if (comma) result.write(", ");
            result.write("bottomLeft: " + dart.str(this[_bottomLeft]));
            comma = true;
          }
          if (!dart.equals(this[_bottomRight], ui$.Radius.zero)) {
            if (comma) result.write(", ");
            result.write("bottomRight: " + dart.str(this[_bottomRight]));
          }
          result.write(")");
          visual = result.toString();
        }
        if (dart.equals(this[_topStart], this[_topEnd]) && dart.equals(this[_topEnd], this[_bottomEnd]) && dart.equals(this[_bottomEnd], this[_bottomStart])) {
          if (!dart.equals(this[_topStart], ui$.Radius.zero)) {
            if (this[_topStart].x == this[_topStart].y) {
              logical = "BorderRadiusDirectional.circular" + "(" + this[_topStart].x[$toStringAsFixed](1) + ")";
            } else {
              logical = "BorderRadiusDirectional.all(" + dart.str(this[_topStart]) + ")";
            }
          }
        } else {
          let result = new core.StringBuffer.new();
          result.write("BorderRadiusDirectional.only(");
          let comma = false;
          if (!dart.equals(this[_topStart], ui$.Radius.zero)) {
            result.write("topStart: " + dart.str(this[_topStart]));
            comma = true;
          }
          if (!dart.equals(this[_topEnd], ui$.Radius.zero)) {
            if (comma) result.write(", ");
            result.write("topEnd: " + dart.str(this[_topEnd]));
            comma = true;
          }
          if (!dart.equals(this[_bottomStart], ui$.Radius.zero)) {
            if (comma) result.write(", ");
            result.write("bottomStart: " + dart.str(this[_bottomStart]));
            comma = true;
          }
          if (!dart.equals(this[_bottomEnd], ui$.Radius.zero)) {
            if (comma) result.write(", ");
            result.write("bottomEnd: " + dart.str(this[_bottomEnd]));
          }
          result.write(")");
          logical = result.toString();
        }
        if (visual != null && logical != null) return dart.str(visual) + " + " + dart.str(logical);
        if (visual != null) return visual;
        if (logical != null) return logical;
        return "BorderRadius.zero";
      } else {
        return super[$toString]();
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(this[$runtimeType], dart.runtimeType(other))) return false;
      let typedOther = src__painting__border_radius.BorderRadiusGeometry._check(other);
      return dart.equals(this[_topLeft], typedOther[_topLeft]) && dart.equals(this[_topRight], typedOther[_topRight]) && dart.equals(this[_bottomLeft], typedOther[_bottomLeft]) && dart.equals(this[_bottomRight], typedOther[_bottomRight]) && dart.equals(this[_topStart], typedOther[_topStart]) && dart.equals(this[_topEnd], typedOther[_topEnd]) && dart.equals(this[_bottomStart], typedOther[_bottomStart]) && dart.equals(this[_bottomEnd], typedOther[_bottomEnd]);
    }
    get hashCode() {
      return ui$.hashValues(this[_topLeft], this[_topRight], this[_bottomLeft], this[_bottomRight], this[_topStart], this[_topEnd], this[_bottomStart], this[_bottomEnd]);
    }
  };
  (src__painting__border_radius.BorderRadiusGeometry.new = function() {
    ;
  }).prototype = src__painting__border_radius.BorderRadiusGeometry.prototype;
  dart.addTypeTests(src__painting__border_radius.BorderRadiusGeometry);
  dart.setMethodSignature(src__painting__border_radius.BorderRadiusGeometry, () => ({
    __proto__: dart.getMethods(src__painting__border_radius.BorderRadiusGeometry.__proto__),
    subtract: dart.fnType(src__painting__border_radius.BorderRadiusGeometry, [src__painting__border_radius.BorderRadiusGeometry]),
    add: dart.fnType(src__painting__border_radius.BorderRadiusGeometry, [src__painting__border_radius.BorderRadiusGeometry])
  }));
  dart.setLibraryUri(src__painting__border_radius.BorderRadiusGeometry, "package:flutter_web/src/painting/border_radius.dart");
  dart.defineExtensionMethods(src__painting__border_radius.BorderRadiusGeometry, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__painting__border_radius.BorderRadiusGeometry, ['hashCode']);
  src__painting__border_radius.BorderRadius = class BorderRadius extends src__painting__border_radius.BorderRadiusGeometry {
    get topLeft() {
      return this[topLeft$];
    }
    set topLeft(value) {
      super.topLeft = value;
    }
    get topRight() {
      return this[topRight$];
    }
    set topRight(value) {
      super.topRight = value;
    }
    get bottomLeft() {
      return this[bottomLeft$];
    }
    set bottomLeft(value) {
      super.bottomLeft = value;
    }
    get bottomRight() {
      return this[bottomRight$];
    }
    set bottomRight(value) {
      super.bottomRight = value;
    }
    get [_topLeft]() {
      return this.topLeft;
    }
    get [_topRight]() {
      return this.topRight;
    }
    get [_bottomLeft]() {
      return this.bottomLeft;
    }
    get [_bottomRight]() {
      return this.bottomRight;
    }
    get [_topStart]() {
      return ui$.Radius.zero;
    }
    get [_topEnd]() {
      return ui$.Radius.zero;
    }
    get [_bottomStart]() {
      return ui$.Radius.zero;
    }
    get [_bottomEnd]() {
      return ui$.Radius.zero;
    }
    toRRect(rect) {
      return new ui$.RRect.fromRectAndCorners(rect, {topLeft: this.topLeft, topRight: this.topRight, bottomLeft: this.bottomLeft, bottomRight: this.bottomRight});
    }
    subtract(other) {
      if (src__painting__border_radius.BorderRadius.is(other)) return this['-'](other);
      return super.subtract(other);
    }
    add(other) {
      if (src__painting__border_radius.BorderRadius.is(other)) return this['+'](other);
      return super.add(other);
    }
    ['-'](other) {
      return new src__painting__border_radius.BorderRadius.only({topLeft: this.topLeft['-'](other.topLeft), topRight: this.topRight['-'](other.topRight), bottomLeft: this.bottomLeft['-'](other.bottomLeft), bottomRight: this.bottomRight['-'](other.bottomRight)});
    }
    ['+'](other) {
      return new src__painting__border_radius.BorderRadius.only({topLeft: this.topLeft['+'](other.topLeft), topRight: this.topRight['+'](other.topRight), bottomLeft: this.bottomLeft['+'](other.bottomLeft), bottomRight: this.bottomRight['+'](other.bottomRight)});
    }
    _negate() {
      return new src__painting__border_radius.BorderRadius.only({topLeft: this.topLeft._negate(), topRight: this.topRight._negate(), bottomLeft: this.bottomLeft._negate(), bottomRight: this.bottomRight._negate()});
    }
    ['*'](other) {
      return new src__painting__border_radius.BorderRadius.only({topLeft: this.topLeft['*'](other), topRight: this.topRight['*'](other), bottomLeft: this.bottomLeft['*'](other), bottomRight: this.bottomRight['*'](other)});
    }
    ['/'](other) {
      return new src__painting__border_radius.BorderRadius.only({topLeft: this.topLeft['/'](other), topRight: this.topRight['/'](other), bottomLeft: this.bottomLeft['/'](other), bottomRight: this.bottomRight['/'](other)});
    }
    ['~/'](other) {
      return new src__painting__border_radius.BorderRadius.only({topLeft: this.topLeft['~/'](other), topRight: this.topRight['~/'](other), bottomLeft: this.bottomLeft['~/'](other), bottomRight: this.bottomRight['~/'](other)});
    }
    ['%'](other) {
      return new src__painting__border_radius.BorderRadius.only({topLeft: this.topLeft['%'](other), topRight: this.topRight['%'](other), bottomLeft: this.bottomLeft['%'](other), bottomRight: this.bottomRight['%'](other)});
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/border_radius.dart", 495, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b['*'](t);
      if (b == null) return a['*'](1.0 - dart.notNull(t));
      return new src__painting__border_radius.BorderRadius.only({topLeft: ui$.Radius.lerp(a.topLeft, b.topLeft, t), topRight: ui$.Radius.lerp(a.topRight, b.topRight, t), bottomLeft: ui$.Radius.lerp(a.bottomLeft, b.bottomLeft, t), bottomRight: ui$.Radius.lerp(a.bottomRight, b.bottomRight, t)});
    }
    resolve(direction) {
      return this;
    }
  };
  (src__painting__border_radius.BorderRadius.all = function(radius) {
    src__painting__border_radius.BorderRadius.only.call(this, {topLeft: radius, topRight: radius, bottomLeft: radius, bottomRight: radius});
  }).prototype = src__painting__border_radius.BorderRadius.prototype;
  (src__painting__border_radius.BorderRadius.circular = function(radius) {
    src__painting__border_radius.BorderRadius.all.call(this, new ui$.Radius.circular(radius));
  }).prototype = src__painting__border_radius.BorderRadius.prototype;
  (src__painting__border_radius.BorderRadius.vertical = function(opts) {
    let top = opts && 'top' in opts ? opts.top : ui$.Radius.zero;
    let bottom = opts && 'bottom' in opts ? opts.bottom : ui$.Radius.zero;
    src__painting__border_radius.BorderRadius.only.call(this, {topLeft: top, topRight: top, bottomLeft: bottom, bottomRight: bottom});
  }).prototype = src__painting__border_radius.BorderRadius.prototype;
  (src__painting__border_radius.BorderRadius.horizontal = function(opts) {
    let left = opts && 'left' in opts ? opts.left : ui$.Radius.zero;
    let right = opts && 'right' in opts ? opts.right : ui$.Radius.zero;
    src__painting__border_radius.BorderRadius.only.call(this, {topLeft: left, topRight: right, bottomLeft: left, bottomRight: right});
  }).prototype = src__painting__border_radius.BorderRadius.prototype;
  (src__painting__border_radius.BorderRadius.only = function(opts) {
    let topLeft = opts && 'topLeft' in opts ? opts.topLeft : ui$.Radius.zero;
    let topRight = opts && 'topRight' in opts ? opts.topRight : ui$.Radius.zero;
    let bottomLeft = opts && 'bottomLeft' in opts ? opts.bottomLeft : ui$.Radius.zero;
    let bottomRight = opts && 'bottomRight' in opts ? opts.bottomRight : ui$.Radius.zero;
    this[topLeft$] = topLeft;
    this[topRight$] = topRight;
    this[bottomLeft$] = bottomLeft;
    this[bottomRight$] = bottomRight;
    src__painting__border_radius.BorderRadius.__proto__.new.call(this);
    ;
  }).prototype = src__painting__border_radius.BorderRadius.prototype;
  dart.addTypeTests(src__painting__border_radius.BorderRadius);
  const topLeft$ = Symbol("BorderRadius.topLeft");
  const topRight$ = Symbol("BorderRadius.topRight");
  const bottomLeft$ = Symbol("BorderRadius.bottomLeft");
  const bottomRight$ = Symbol("BorderRadius.bottomRight");
  dart.setMethodSignature(src__painting__border_radius.BorderRadius, () => ({
    __proto__: dart.getMethods(src__painting__border_radius.BorderRadius.__proto__),
    toRRect: dart.fnType(ui$.RRect, [ui$.Rect]),
    '-': dart.fnType(src__painting__border_radius.BorderRadius, [src__painting__border_radius.BorderRadius]),
    '+': dart.fnType(src__painting__border_radius.BorderRadius, [src__painting__border_radius.BorderRadius]),
    _negate: dart.fnType(src__painting__border_radius.BorderRadius, []),
    '*': dart.fnType(src__painting__border_radius.BorderRadius, [core.double]),
    '/': dart.fnType(src__painting__border_radius.BorderRadius, [core.double]),
    '~/': dart.fnType(src__painting__border_radius.BorderRadius, [core.double]),
    '%': dart.fnType(src__painting__border_radius.BorderRadius, [core.double]),
    resolve: dart.fnType(src__painting__border_radius.BorderRadius, [ui$.TextDirection])
  }));
  dart.setGetterSignature(src__painting__border_radius.BorderRadius, () => ({
    __proto__: dart.getGetters(src__painting__border_radius.BorderRadius.__proto__),
    [_topLeft]: ui$.Radius,
    [_topRight]: ui$.Radius,
    [_bottomLeft]: ui$.Radius,
    [_bottomRight]: ui$.Radius,
    [_topStart]: ui$.Radius,
    [_topEnd]: ui$.Radius,
    [_bottomStart]: ui$.Radius,
    [_bottomEnd]: ui$.Radius
  }));
  dart.setLibraryUri(src__painting__border_radius.BorderRadius, "package:flutter_web/src/painting/border_radius.dart");
  dart.setFieldSignature(src__painting__border_radius.BorderRadius, () => ({
    __proto__: dart.getFields(src__painting__border_radius.BorderRadius.__proto__),
    topLeft: dart.finalFieldType(ui$.Radius),
    topRight: dart.finalFieldType(ui$.Radius),
    bottomLeft: dart.finalFieldType(ui$.Radius),
    bottomRight: dart.finalFieldType(ui$.Radius)
  }));
  dart.defineLazy(src__painting__border_radius.BorderRadius, {
    /*src__painting__border_radius.BorderRadius.zero*/get zero() {
      return dart.const(new src__painting__border_radius.BorderRadius.all(ui$.Radius.zero));
    }
  });
  src__painting__border_radius.BorderRadiusDirectional = class BorderRadiusDirectional extends src__painting__border_radius.BorderRadiusGeometry {
    get topStart() {
      return this[topStart$];
    }
    set topStart(value) {
      super.topStart = value;
    }
    get topEnd() {
      return this[topEnd$];
    }
    set topEnd(value) {
      super.topEnd = value;
    }
    get bottomStart() {
      return this[bottomStart$];
    }
    set bottomStart(value) {
      super.bottomStart = value;
    }
    get bottomEnd() {
      return this[bottomEnd$];
    }
    set bottomEnd(value) {
      super.bottomEnd = value;
    }
    get [_topStart]() {
      return this.topStart;
    }
    get [_topEnd]() {
      return this.topEnd;
    }
    get [_bottomStart]() {
      return this.bottomStart;
    }
    get [_bottomEnd]() {
      return this.bottomEnd;
    }
    get [_topLeft]() {
      return ui$.Radius.zero;
    }
    get [_topRight]() {
      return ui$.Radius.zero;
    }
    get [_bottomLeft]() {
      return ui$.Radius.zero;
    }
    get [_bottomRight]() {
      return ui$.Radius.zero;
    }
    subtract(other) {
      if (src__painting__border_radius.BorderRadiusDirectional.is(other)) return this['-'](other);
      return super.subtract(other);
    }
    add(other) {
      if (src__painting__border_radius.BorderRadiusDirectional.is(other)) return this['+'](other);
      return super.add(other);
    }
    ['-'](other) {
      return new src__painting__border_radius.BorderRadiusDirectional.only({topStart: this.topStart['-'](other.topStart), topEnd: this.topEnd['-'](other.topEnd), bottomStart: this.bottomStart['-'](other.bottomStart), bottomEnd: this.bottomEnd['-'](other.bottomEnd)});
    }
    ['+'](other) {
      return new src__painting__border_radius.BorderRadiusDirectional.only({topStart: this.topStart['+'](other.topStart), topEnd: this.topEnd['+'](other.topEnd), bottomStart: this.bottomStart['+'](other.bottomStart), bottomEnd: this.bottomEnd['+'](other.bottomEnd)});
    }
    _negate() {
      return new src__painting__border_radius.BorderRadiusDirectional.only({topStart: this.topStart._negate(), topEnd: this.topEnd._negate(), bottomStart: this.bottomStart._negate(), bottomEnd: this.bottomEnd._negate()});
    }
    ['*'](other) {
      return new src__painting__border_radius.BorderRadiusDirectional.only({topStart: this.topStart['*'](other), topEnd: this.topEnd['*'](other), bottomStart: this.bottomStart['*'](other), bottomEnd: this.bottomEnd['*'](other)});
    }
    ['/'](other) {
      return new src__painting__border_radius.BorderRadiusDirectional.only({topStart: this.topStart['/'](other), topEnd: this.topEnd['/'](other), bottomStart: this.bottomStart['/'](other), bottomEnd: this.bottomEnd['/'](other)});
    }
    ['~/'](other) {
      return new src__painting__border_radius.BorderRadiusDirectional.only({topStart: this.topStart['~/'](other), topEnd: this.topEnd['~/'](other), bottomStart: this.bottomStart['~/'](other), bottomEnd: this.bottomEnd['~/'](other)});
    }
    ['%'](other) {
      return new src__painting__border_radius.BorderRadiusDirectional.only({topStart: this.topStart['%'](other), topEnd: this.topEnd['%'](other), bottomStart: this.bottomStart['%'](other), bottomEnd: this.bottomEnd['%'](other)});
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/border_radius.dart", 721, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b['*'](t);
      if (b == null) return a['*'](1.0 - dart.notNull(t));
      return new src__painting__border_radius.BorderRadiusDirectional.only({topStart: ui$.Radius.lerp(a.topStart, b.topStart, t), topEnd: ui$.Radius.lerp(a.topEnd, b.topEnd, t), bottomStart: ui$.Radius.lerp(a.bottomStart, b.bottomStart, t), bottomEnd: ui$.Radius.lerp(a.bottomEnd, b.bottomEnd, t)});
    }
    resolve(direction) {
      if (!(direction != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/border_radius.dart", 735, 12, "direction != null");
      switch (direction) {
        case ui$.TextDirection.rtl:
        {
          return new src__painting__border_radius.BorderRadius.only({topLeft: this.topEnd, topRight: this.topStart, bottomLeft: this.bottomEnd, bottomRight: this.bottomStart});
        }
        case ui$.TextDirection.ltr:
        {
          return new src__painting__border_radius.BorderRadius.only({topLeft: this.topStart, topRight: this.topEnd, bottomLeft: this.bottomStart, bottomRight: this.bottomEnd});
        }
      }
      return null;
    }
  };
  (src__painting__border_radius.BorderRadiusDirectional.all = function(radius) {
    src__painting__border_radius.BorderRadiusDirectional.only.call(this, {topStart: radius, topEnd: radius, bottomStart: radius, bottomEnd: radius});
  }).prototype = src__painting__border_radius.BorderRadiusDirectional.prototype;
  (src__painting__border_radius.BorderRadiusDirectional.circular = function(radius) {
    src__painting__border_radius.BorderRadiusDirectional.all.call(this, new ui$.Radius.circular(radius));
  }).prototype = src__painting__border_radius.BorderRadiusDirectional.prototype;
  (src__painting__border_radius.BorderRadiusDirectional.vertical = function(opts) {
    let top = opts && 'top' in opts ? opts.top : ui$.Radius.zero;
    let bottom = opts && 'bottom' in opts ? opts.bottom : ui$.Radius.zero;
    src__painting__border_radius.BorderRadiusDirectional.only.call(this, {topStart: top, topEnd: top, bottomStart: bottom, bottomEnd: bottom});
  }).prototype = src__painting__border_radius.BorderRadiusDirectional.prototype;
  (src__painting__border_radius.BorderRadiusDirectional.horizontal = function(opts) {
    let start = opts && 'start' in opts ? opts.start : ui$.Radius.zero;
    let end = opts && 'end' in opts ? opts.end : ui$.Radius.zero;
    src__painting__border_radius.BorderRadiusDirectional.only.call(this, {topStart: start, topEnd: end, bottomStart: start, bottomEnd: end});
  }).prototype = src__painting__border_radius.BorderRadiusDirectional.prototype;
  (src__painting__border_radius.BorderRadiusDirectional.only = function(opts) {
    let topStart = opts && 'topStart' in opts ? opts.topStart : ui$.Radius.zero;
    let topEnd = opts && 'topEnd' in opts ? opts.topEnd : ui$.Radius.zero;
    let bottomStart = opts && 'bottomStart' in opts ? opts.bottomStart : ui$.Radius.zero;
    let bottomEnd = opts && 'bottomEnd' in opts ? opts.bottomEnd : ui$.Radius.zero;
    this[topStart$] = topStart;
    this[topEnd$] = topEnd;
    this[bottomStart$] = bottomStart;
    this[bottomEnd$] = bottomEnd;
    src__painting__border_radius.BorderRadiusDirectional.__proto__.new.call(this);
    ;
  }).prototype = src__painting__border_radius.BorderRadiusDirectional.prototype;
  dart.addTypeTests(src__painting__border_radius.BorderRadiusDirectional);
  const topStart$ = Symbol("BorderRadiusDirectional.topStart");
  const topEnd$ = Symbol("BorderRadiusDirectional.topEnd");
  const bottomStart$ = Symbol("BorderRadiusDirectional.bottomStart");
  const bottomEnd$ = Symbol("BorderRadiusDirectional.bottomEnd");
  dart.setMethodSignature(src__painting__border_radius.BorderRadiusDirectional, () => ({
    __proto__: dart.getMethods(src__painting__border_radius.BorderRadiusDirectional.__proto__),
    '-': dart.fnType(src__painting__border_radius.BorderRadiusDirectional, [src__painting__border_radius.BorderRadiusDirectional]),
    '+': dart.fnType(src__painting__border_radius.BorderRadiusDirectional, [src__painting__border_radius.BorderRadiusDirectional]),
    _negate: dart.fnType(src__painting__border_radius.BorderRadiusDirectional, []),
    '*': dart.fnType(src__painting__border_radius.BorderRadiusDirectional, [core.double]),
    '/': dart.fnType(src__painting__border_radius.BorderRadiusDirectional, [core.double]),
    '~/': dart.fnType(src__painting__border_radius.BorderRadiusDirectional, [core.double]),
    '%': dart.fnType(src__painting__border_radius.BorderRadiusDirectional, [core.double]),
    resolve: dart.fnType(src__painting__border_radius.BorderRadius, [ui$.TextDirection])
  }));
  dart.setGetterSignature(src__painting__border_radius.BorderRadiusDirectional, () => ({
    __proto__: dart.getGetters(src__painting__border_radius.BorderRadiusDirectional.__proto__),
    [_topStart]: ui$.Radius,
    [_topEnd]: ui$.Radius,
    [_bottomStart]: ui$.Radius,
    [_bottomEnd]: ui$.Radius,
    [_topLeft]: ui$.Radius,
    [_topRight]: ui$.Radius,
    [_bottomLeft]: ui$.Radius,
    [_bottomRight]: ui$.Radius
  }));
  dart.setLibraryUri(src__painting__border_radius.BorderRadiusDirectional, "package:flutter_web/src/painting/border_radius.dart");
  dart.setFieldSignature(src__painting__border_radius.BorderRadiusDirectional, () => ({
    __proto__: dart.getFields(src__painting__border_radius.BorderRadiusDirectional.__proto__),
    topStart: dart.finalFieldType(ui$.Radius),
    topEnd: dart.finalFieldType(ui$.Radius),
    bottomStart: dart.finalFieldType(ui$.Radius),
    bottomEnd: dart.finalFieldType(ui$.Radius)
  }));
  dart.defineLazy(src__painting__border_radius.BorderRadiusDirectional, {
    /*src__painting__border_radius.BorderRadiusDirectional.zero*/get zero() {
      return dart.const(new src__painting__border_radius.BorderRadiusDirectional.all(ui$.Radius.zero));
    }
  });
  src__painting__border_radius._MixedBorderRadius = class _MixedBorderRadius extends src__painting__border_radius.BorderRadiusGeometry {
    get [_topLeft]() {
      return this[_topLeft$];
    }
    set [_topLeft](value) {
      super[_topLeft] = value;
    }
    get [_topRight]() {
      return this[_topRight$];
    }
    set [_topRight](value) {
      super[_topRight] = value;
    }
    get [_bottomLeft]() {
      return this[_bottomLeft$];
    }
    set [_bottomLeft](value) {
      super[_bottomLeft] = value;
    }
    get [_bottomRight]() {
      return this[_bottomRight$];
    }
    set [_bottomRight](value) {
      super[_bottomRight] = value;
    }
    get [_topStart]() {
      return this[_topStart$];
    }
    set [_topStart](value) {
      super[_topStart] = value;
    }
    get [_topEnd]() {
      return this[_topEnd$];
    }
    set [_topEnd](value) {
      super[_topEnd] = value;
    }
    get [_bottomStart]() {
      return this[_bottomStart$];
    }
    set [_bottomStart](value) {
      super[_bottomStart] = value;
    }
    get [_bottomEnd]() {
      return this[_bottomEnd$];
    }
    set [_bottomEnd](value) {
      super[_bottomEnd] = value;
    }
    _negate() {
      return new src__painting__border_radius._MixedBorderRadius.new(this[_topLeft]._negate(), this[_topRight]._negate(), this[_bottomLeft]._negate(), this[_bottomRight]._negate(), this[_topStart]._negate(), this[_topEnd]._negate(), this[_bottomStart]._negate(), this[_bottomEnd]._negate());
    }
    ['*'](other) {
      return new src__painting__border_radius._MixedBorderRadius.new(this[_topLeft]['*'](other), this[_topRight]['*'](other), this[_bottomLeft]['*'](other), this[_bottomRight]['*'](other), this[_topStart]['*'](other), this[_topEnd]['*'](other), this[_bottomStart]['*'](other), this[_bottomEnd]['*'](other));
    }
    ['/'](other) {
      return new src__painting__border_radius._MixedBorderRadius.new(this[_topLeft]['/'](other), this[_topRight]['/'](other), this[_bottomLeft]['/'](other), this[_bottomRight]['/'](other), this[_topStart]['/'](other), this[_topEnd]['/'](other), this[_bottomStart]['/'](other), this[_bottomEnd]['/'](other));
    }
    ['~/'](other) {
      return new src__painting__border_radius._MixedBorderRadius.new(this[_topLeft]['~/'](other), this[_topRight]['~/'](other), this[_bottomLeft]['~/'](other), this[_bottomRight]['~/'](other), this[_topStart]['~/'](other), this[_topEnd]['~/'](other), this[_bottomStart]['~/'](other), this[_bottomEnd]['~/'](other));
    }
    ['%'](other) {
      return new src__painting__border_radius._MixedBorderRadius.new(this[_topLeft]['%'](other), this[_topRight]['%'](other), this[_bottomLeft]['%'](other), this[_bottomRight]['%'](other), this[_topStart]['%'](other), this[_topEnd]['%'](other), this[_bottomStart]['%'](other), this[_bottomEnd]['%'](other));
    }
    resolve(direction) {
      if (!(direction != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/border_radius.dart", 865, 12, "direction != null");
      switch (direction) {
        case ui$.TextDirection.rtl:
        {
          return new src__painting__border_radius.BorderRadius.only({topLeft: this[_topLeft]['+'](this[_topEnd]), topRight: this[_topRight]['+'](this[_topStart]), bottomLeft: this[_bottomLeft]['+'](this[_bottomEnd]), bottomRight: this[_bottomRight]['+'](this[_bottomStart])});
        }
        case ui$.TextDirection.ltr:
        {
          return new src__painting__border_radius.BorderRadius.only({topLeft: this[_topLeft]['+'](this[_topStart]), topRight: this[_topRight]['+'](this[_topEnd]), bottomLeft: this[_bottomLeft]['+'](this[_bottomStart]), bottomRight: this[_bottomRight]['+'](this[_bottomEnd])});
        }
      }
      return null;
    }
  };
  (src__painting__border_radius._MixedBorderRadius.new = function(_topLeft, _topRight, _bottomLeft, _bottomRight, _topStart, _topEnd, _bottomStart, _bottomEnd) {
    this[_topLeft$] = _topLeft;
    this[_topRight$] = _topRight;
    this[_bottomLeft$] = _bottomLeft;
    this[_bottomRight$] = _bottomRight;
    this[_topStart$] = _topStart;
    this[_topEnd$] = _topEnd;
    this[_bottomStart$] = _bottomStart;
    this[_bottomEnd$] = _bottomEnd;
    src__painting__border_radius._MixedBorderRadius.__proto__.new.call(this);
    ;
  }).prototype = src__painting__border_radius._MixedBorderRadius.prototype;
  dart.addTypeTests(src__painting__border_radius._MixedBorderRadius);
  const _topLeft$ = Symbol("_MixedBorderRadius._topLeft");
  const _topRight$ = Symbol("_MixedBorderRadius._topRight");
  const _bottomLeft$ = Symbol("_MixedBorderRadius._bottomLeft");
  const _bottomRight$ = Symbol("_MixedBorderRadius._bottomRight");
  const _topStart$ = Symbol("_MixedBorderRadius._topStart");
  const _topEnd$ = Symbol("_MixedBorderRadius._topEnd");
  const _bottomStart$ = Symbol("_MixedBorderRadius._bottomStart");
  const _bottomEnd$ = Symbol("_MixedBorderRadius._bottomEnd");
  dart.setMethodSignature(src__painting__border_radius._MixedBorderRadius, () => ({
    __proto__: dart.getMethods(src__painting__border_radius._MixedBorderRadius.__proto__),
    _negate: dart.fnType(src__painting__border_radius._MixedBorderRadius, []),
    '*': dart.fnType(src__painting__border_radius._MixedBorderRadius, [core.double]),
    '/': dart.fnType(src__painting__border_radius._MixedBorderRadius, [core.double]),
    '~/': dart.fnType(src__painting__border_radius._MixedBorderRadius, [core.double]),
    '%': dart.fnType(src__painting__border_radius._MixedBorderRadius, [core.double]),
    resolve: dart.fnType(src__painting__border_radius.BorderRadius, [ui$.TextDirection])
  }));
  dart.setLibraryUri(src__painting__border_radius._MixedBorderRadius, "package:flutter_web/src/painting/border_radius.dart");
  dart.setFieldSignature(src__painting__border_radius._MixedBorderRadius, () => ({
    __proto__: dart.getFields(src__painting__border_radius._MixedBorderRadius.__proto__),
    [_topLeft]: dart.finalFieldType(ui$.Radius),
    [_topRight]: dart.finalFieldType(ui$.Radius),
    [_bottomLeft]: dart.finalFieldType(ui$.Radius),
    [_bottomRight]: dart.finalFieldType(ui$.Radius),
    [_topStart]: dart.finalFieldType(ui$.Radius),
    [_topEnd]: dart.finalFieldType(ui$.Radius),
    [_bottomStart]: dart.finalFieldType(ui$.Radius),
    [_bottomEnd]: dart.finalFieldType(ui$.Radius)
  }));
  src__painting__paint_utilities.paintZigZag = function(canvas, paint, start, end, zigs, width) {
    let t2;
    if (!zigs[$isFinite]) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/paint_utilities.dart", 25, 10, "zigs.isFinite");
    if (!(dart.notNull(zigs) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/paint_utilities.dart", 26, 10, "zigs > 0");
    canvas.save();
    canvas.translate(start.dx, start.dy);
    end = end['-'](start);
    canvas.rotate(math.atan2(end.dy, end.dx));
    let length = end.distance;
    let spacing = dart.notNull(length) / (dart.notNull(zigs) * 2.0);
    let path = (t2 = new ui$.Path.new(), t2.moveTo(0.0, 0.0), t2);
    for (let index = 0; index < dart.notNull(zigs); index = index + 1) {
      let x = (index * 2.0 + 1.0) * spacing;
      let y = dart.notNull(width) * (index[$modulo](2.0) * 2.0 - 1.0);
      path.lineTo(x, y);
    }
    path.lineTo(length, 0.0);
    canvas.drawPath(path, paint);
    canvas.restore();
  };
  const _name$1 = dart.privateName(src__painting__basic_types, "_name");
  src__painting__basic_types.RenderComparison = class RenderComparison extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (src__painting__basic_types.RenderComparison.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = src__painting__basic_types.RenderComparison.prototype;
  dart.addTypeTests(src__painting__basic_types.RenderComparison);
  dart.setLibraryUri(src__painting__basic_types.RenderComparison, "package:flutter_web/src/painting/basic_types.dart");
  dart.setFieldSignature(src__painting__basic_types.RenderComparison, () => ({
    __proto__: dart.getFields(src__painting__basic_types.RenderComparison.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__painting__basic_types.RenderComparison, ['toString']);
  src__painting__basic_types.RenderComparison.identical = dart.const(new src__painting__basic_types.RenderComparison.new(0, "RenderComparison.identical"));
  src__painting__basic_types.RenderComparison.metadata = dart.const(new src__painting__basic_types.RenderComparison.new(1, "RenderComparison.metadata"));
  src__painting__basic_types.RenderComparison.paint = dart.const(new src__painting__basic_types.RenderComparison.new(2, "RenderComparison.paint"));
  src__painting__basic_types.RenderComparison.layout = dart.const(new src__painting__basic_types.RenderComparison.new(3, "RenderComparison.layout"));
  src__painting__basic_types.RenderComparison.values = dart.constList([src__painting__basic_types.RenderComparison.identical, src__painting__basic_types.RenderComparison.metadata, src__painting__basic_types.RenderComparison.paint, src__painting__basic_types.RenderComparison.layout], src__painting__basic_types.RenderComparison);
  src__painting__basic_types.Axis = class Axis extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (src__painting__basic_types.Axis.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = src__painting__basic_types.Axis.prototype;
  dart.addTypeTests(src__painting__basic_types.Axis);
  dart.setLibraryUri(src__painting__basic_types.Axis, "package:flutter_web/src/painting/basic_types.dart");
  dart.setFieldSignature(src__painting__basic_types.Axis, () => ({
    __proto__: dart.getFields(src__painting__basic_types.Axis.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__painting__basic_types.Axis, ['toString']);
  src__painting__basic_types.Axis.horizontal = dart.const(new src__painting__basic_types.Axis.new(0, "Axis.horizontal"));
  src__painting__basic_types.Axis.vertical = dart.const(new src__painting__basic_types.Axis.new(1, "Axis.vertical"));
  src__painting__basic_types.Axis.values = dart.constList([src__painting__basic_types.Axis.horizontal, src__painting__basic_types.Axis.vertical], src__painting__basic_types.Axis);
  src__painting__basic_types.VerticalDirection = class VerticalDirection extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (src__painting__basic_types.VerticalDirection.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = src__painting__basic_types.VerticalDirection.prototype;
  dart.addTypeTests(src__painting__basic_types.VerticalDirection);
  dart.setLibraryUri(src__painting__basic_types.VerticalDirection, "package:flutter_web/src/painting/basic_types.dart");
  dart.setFieldSignature(src__painting__basic_types.VerticalDirection, () => ({
    __proto__: dart.getFields(src__painting__basic_types.VerticalDirection.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__painting__basic_types.VerticalDirection, ['toString']);
  src__painting__basic_types.VerticalDirection.up = dart.const(new src__painting__basic_types.VerticalDirection.new(0, "VerticalDirection.up"));
  src__painting__basic_types.VerticalDirection.down = dart.const(new src__painting__basic_types.VerticalDirection.new(1, "VerticalDirection.down"));
  src__painting__basic_types.VerticalDirection.values = dart.constList([src__painting__basic_types.VerticalDirection.up, src__painting__basic_types.VerticalDirection.down], src__painting__basic_types.VerticalDirection);
  src__painting__basic_types.AxisDirection = class AxisDirection extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (src__painting__basic_types.AxisDirection.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = src__painting__basic_types.AxisDirection.prototype;
  dart.addTypeTests(src__painting__basic_types.AxisDirection);
  dart.setLibraryUri(src__painting__basic_types.AxisDirection, "package:flutter_web/src/painting/basic_types.dart");
  dart.setFieldSignature(src__painting__basic_types.AxisDirection, () => ({
    __proto__: dart.getFields(src__painting__basic_types.AxisDirection.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__painting__basic_types.AxisDirection, ['toString']);
  src__painting__basic_types.AxisDirection.up = dart.const(new src__painting__basic_types.AxisDirection.new(0, "AxisDirection.up"));
  src__painting__basic_types.AxisDirection.right = dart.const(new src__painting__basic_types.AxisDirection.new(1, "AxisDirection.right"));
  src__painting__basic_types.AxisDirection.down = dart.const(new src__painting__basic_types.AxisDirection.new(2, "AxisDirection.down"));
  src__painting__basic_types.AxisDirection.left = dart.const(new src__painting__basic_types.AxisDirection.new(3, "AxisDirection.left"));
  src__painting__basic_types.AxisDirection.values = dart.constList([src__painting__basic_types.AxisDirection.up, src__painting__basic_types.AxisDirection.right, src__painting__basic_types.AxisDirection.down, src__painting__basic_types.AxisDirection.left], src__painting__basic_types.AxisDirection);
  src__painting__basic_types.flipAxis = function(direction) {
    if (!(direction != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/basic_types.dart", 142, 10, "direction != null");
    switch (direction) {
      case src__painting__basic_types.Axis.horizontal:
      {
        return src__painting__basic_types.Axis.vertical;
      }
      case src__painting__basic_types.Axis.vertical:
      {
        return src__painting__basic_types.Axis.horizontal;
      }
    }
    return null;
  };
  src__painting__basic_types.axisDirectionToAxis = function(axisDirection) {
    if (!(axisDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/basic_types.dart", 213, 10, " assert(axisDirection");
    switch (axisDirection) {
      case src__painting__basic_types.AxisDirection.up:
      case src__painting__basic_types.AxisDirection.down:
      {
        return src__painting__basic_types.Axis.vertical;
      }
      case src__painting__basic_types.AxisDirection.left:
      case src__painting__basic_types.AxisDirection.right:
      {
        return src__painting__basic_types.Axis.horizontal;
      }
    }
    return null;
  };
  src__painting__basic_types.textDirectionToAxisDirection = function(textDirection) {
    if (!(textDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/basic_types.dart", 231, 10, " assert(textDirection");
    switch (textDirection) {
      case ui$.TextDirection.rtl:
      {
        return src__painting__basic_types.AxisDirection.left;
      }
      case ui$.TextDirection.ltr:
      {
        return src__painting__basic_types.AxisDirection.right;
      }
    }
    return null;
  };
  src__painting__basic_types.flipAxisDirection = function(axisDirection) {
    if (!(axisDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/basic_types.dart", 251, 10, " assert(axisDirection");
    switch (axisDirection) {
      case src__painting__basic_types.AxisDirection.up:
      {
        return src__painting__basic_types.AxisDirection.down;
      }
      case src__painting__basic_types.AxisDirection.right:
      {
        return src__painting__basic_types.AxisDirection.left;
      }
      case src__painting__basic_types.AxisDirection.down:
      {
        return src__painting__basic_types.AxisDirection.up;
      }
      case src__painting__basic_types.AxisDirection.left:
      {
        return src__painting__basic_types.AxisDirection.right;
      }
    }
    return null;
  };
  src__painting__basic_types.axisDirectionIsReversed = function(axisDirection) {
    if (!(axisDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/basic_types.dart", 271, 10, " assert(axisDirection");
    switch (axisDirection) {
      case src__painting__basic_types.AxisDirection.up:
      case src__painting__basic_types.AxisDirection.left:
      {
        return true;
      }
      case src__painting__basic_types.AxisDirection.down:
      case src__painting__basic_types.AxisDirection.right:
      {
        return false;
      }
    }
    return null;
  };
  src__painting__image_decoder.decodeImageFromList = function(bytes) {
    return async.async(ui$.Image, function* decodeImageFromList() {
      let codec = (yield src__painting__binding.PaintingBinding.instance.instantiateImageCodec(bytes));
      let frameInfo = (yield codec.getNextFrame());
      return frameInfo.image;
    });
  };
  const _imageCache = dart.privateName(src__painting__binding, "_imageCache");
  const _kDecodedCacheRatioCap = dart.privateName(src__painting__binding, "_kDecodedCacheRatioCap");
  src__painting__binding.PaintingBinding = class PaintingBinding extends core.Object {
    static get instance() {
      return src__painting__binding.PaintingBinding._instance;
    }
  };
  src__painting__binding.PaintingBinding[dart.mixinOn] = _PaintingBinding$BindingBase$ServicesBinding => class PaintingBinding extends _PaintingBinding$BindingBase$ServicesBinding {
    initInstances() {
      super.initInstances();
      src__painting__binding.PaintingBinding._instance = this;
      this[_imageCache] = this.createImageCache();
    }
    get imageCache() {
      return this[_imageCache];
    }
    createImageCache() {
      return new src__painting__image_cache.ImageCache.new();
    }
    get decodedCacheRatioCap() {
      return this[_kDecodedCacheRatioCap];
    }
    set decodedCacheRatioCap(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/binding.dart", 69, 12, "value != null");
      if (!(dart.notNull(value) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/binding.dart", 70, 12, "value >= 0.0");
      this[_kDecodedCacheRatioCap] = value;
    }
    instantiateImageCodec(list) {
      return ui$.instantiateImageCodec(list, {decodedCacheRatioCap: this.decodedCacheRatioCap});
    }
    evict(asset) {
      super.evict(asset);
      this.imageCache.clear();
    }
  };
  (src__painting__binding.PaintingBinding[dart.mixinNew] = function() {
    this[_imageCache] = null;
    this[_kDecodedCacheRatioCap] = src__painting__binding._kDefaultDecodedCacheRatioCap;
  }).prototype = src__painting__binding.PaintingBinding.prototype;
  dart.addTypeTests(src__painting__binding.PaintingBinding);
  src__painting__binding.PaintingBinding[dart.implements] = () => [src__services__binding.ServicesBinding, src__foundation__binding.BindingBase];
  dart.setMethodSignature(src__painting__binding.PaintingBinding, () => ({
    __proto__: dart.getMethods(src__painting__binding.PaintingBinding.__proto__),
    initInstances: dart.fnType(dart.void, []),
    createImageCache: dart.fnType(src__painting__image_cache.ImageCache, []),
    instantiateImageCodec: dart.fnType(async.Future$(ui$.Codec), [typed_data.Uint8List]),
    evict: dart.fnType(dart.void, [core.String])
  }));
  dart.setGetterSignature(src__painting__binding.PaintingBinding, () => ({
    __proto__: dart.getGetters(src__painting__binding.PaintingBinding.__proto__),
    imageCache: src__painting__image_cache.ImageCache,
    decodedCacheRatioCap: core.double
  }));
  dart.setSetterSignature(src__painting__binding.PaintingBinding, () => ({
    __proto__: dart.getSetters(src__painting__binding.PaintingBinding.__proto__),
    decodedCacheRatioCap: core.double
  }));
  dart.setLibraryUri(src__painting__binding.PaintingBinding, "package:flutter_web/src/painting/binding.dart");
  dart.setFieldSignature(src__painting__binding.PaintingBinding, () => ({
    __proto__: dart.getFields(src__painting__binding.PaintingBinding.__proto__),
    [_imageCache]: dart.fieldType(src__painting__image_cache.ImageCache),
    [_kDecodedCacheRatioCap]: dart.fieldType(core.double)
  }));
  dart.defineLazy(src__painting__binding.PaintingBinding, {
    /*src__painting__binding.PaintingBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  });
  dart.copyProperties(src__painting__binding, {
    get imageCache() {
      return src__painting__binding.PaintingBinding.instance.imageCache;
    }
  });
  dart.defineLazy(src__painting__binding, {
    /*src__painting__binding._kDefaultDecodedCacheRatioCap*/get _kDefaultDecodedCacheRatioCap() {
      return 25.0;
    }
  });
  const _pendingImages = dart.privateName(src__painting__image_cache, "_pendingImages");
  const _cache = dart.privateName(src__painting__image_cache, "_cache");
  const _maximumSize = dart.privateName(src__painting__image_cache, "_maximumSize");
  const _maximumSizeBytes = dart.privateName(src__painting__image_cache, "_maximumSizeBytes");
  const _currentSizeBytes = dart.privateName(src__painting__image_cache, "_currentSizeBytes");
  const _checkCacheSize = dart.privateName(src__painting__image_cache, "_checkCacheSize");
  src__painting__image_cache.ImageCache = class ImageCache extends core.Object {
    get maximumSize() {
      return this[_maximumSize];
    }
    set maximumSize(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_cache.dart", 47, 12, "value != null");
      if (!(dart.notNull(value) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_cache.dart", 48, 12, "value >= 0");
      if (value == this.maximumSize) return;
      this[_maximumSize] = value;
      if (this.maximumSize === 0) {
        this[_cache][$clear]();
        this[_currentSizeBytes] = 0;
      } else {
        this[_checkCacheSize]();
      }
    }
    get currentSize() {
      return this[_cache][$length];
    }
    get maximumSizeBytes() {
      return this[_maximumSizeBytes];
    }
    set maximumSizeBytes(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_cache.dart", 77, 12, "value != null");
      if (!(dart.notNull(value) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_cache.dart", 78, 12, "value >= 0");
      if (value == this[_maximumSizeBytes]) return;
      this[_maximumSizeBytes] = value;
      if (this[_maximumSizeBytes] === 0) {
        this[_cache][$clear]();
        this[_currentSizeBytes] = 0;
      } else {
        this[_checkCacheSize]();
      }
    }
    get currentSizeBytes() {
      return this[_currentSizeBytes];
    }
    clear() {
      this[_cache][$clear]();
      this[_currentSizeBytes] = 0;
    }
    evict(key) {
      let image = this[_cache][$remove](key);
      if (image != null) {
        this[_currentSizeBytes] = dart.notNull(this[_currentSizeBytes]) - dart.notNull(image.sizeBytes);
        return true;
      }
      return false;
    }
    putIfAbsent(key, loader) {
      if (!(key != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_cache.dart", 131, 12, "key != null");
      if (!(loader != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_cache.dart", 132, 12, "loader != null");
      let result = this[_pendingImages][$_get](key);
      if (result != null) return result;
      let image = this[_cache][$remove](key);
      if (image != null) {
        this[_cache][$_set](key, image);
        return image.completer;
      }
      result = loader();
      const listener = (info, syncCall) => {
        let t2;
        let imageSize = (t2 = info, t2 == null ? null : t2.image) == null ? 0 : dart.notNull(info.image.height) * dart.notNull(info.image.width) * 4;
        let image = new src__painting__image_cache._CachedImage.new(result, imageSize);
        if (dart.notNull(this.maximumSizeBytes) > 0 && imageSize > dart.notNull(this.maximumSizeBytes)) {
          this[_maximumSizeBytes] = imageSize + 1000;
        }
        this[_currentSizeBytes] = dart.notNull(this[_currentSizeBytes]) + imageSize;
        this[_pendingImages][$remove](key);
        this[_cache][$_set](key, image);
        result.removeListener(listener);
        this[_checkCacheSize]();
      };
      dart.fn(listener, ImageInfoAndboolTovoid());
      if (dart.notNull(this.maximumSize) > 0 && dart.notNull(this.maximumSizeBytes) > 0) {
        this[_pendingImages][$_set](key, result);
        result.addListener(listener);
      }
      return result;
    }
    [_checkCacheSize]() {
      while (dart.notNull(this[_currentSizeBytes]) > dart.notNull(this[_maximumSizeBytes]) || dart.notNull(this[_cache][$length]) > dart.notNull(this[_maximumSize])) {
        let key = this[_cache][$keys][$first];
        let image = this[_cache][$_get](key);
        this[_currentSizeBytes] = dart.notNull(this[_currentSizeBytes]) - dart.notNull(image.sizeBytes);
        this[_cache][$remove](key);
      }
      if (!(dart.notNull(this[_currentSizeBytes]) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_cache.dart", 179, 12, "_currentSizeBytes >= 0");
      if (!(dart.notNull(this[_cache][$length]) <= dart.notNull(this.maximumSize))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_cache.dart", 180, 12, "_cache.length <= maximumSize");
      if (!(dart.notNull(this[_currentSizeBytes]) <= dart.notNull(this.maximumSizeBytes))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_cache.dart", 181, 12, "_currentSizeBytes <= maximumSizeBytes");
    }
  };
  (src__painting__image_cache.ImageCache.new = function() {
    this[_pendingImages] = new (LinkedMapOfObject$ImageStreamCompleter()).new();
    this[_cache] = new (LinkedMapOfObject$_CachedImage()).new();
    this[_maximumSize] = src__painting__image_cache._kDefaultSize;
    this[_maximumSizeBytes] = src__painting__image_cache._kDefaultSizeBytes;
    this[_currentSizeBytes] = 0;
    ;
  }).prototype = src__painting__image_cache.ImageCache.prototype;
  dart.addTypeTests(src__painting__image_cache.ImageCache);
  dart.setMethodSignature(src__painting__image_cache.ImageCache, () => ({
    __proto__: dart.getMethods(src__painting__image_cache.ImageCache.__proto__),
    clear: dart.fnType(dart.void, []),
    evict: dart.fnType(core.bool, [core.Object]),
    putIfAbsent: dart.fnType(src__painting__image_stream.ImageStreamCompleter, [core.Object, dart.fnType(src__painting__image_stream.ImageStreamCompleter, [])]),
    [_checkCacheSize]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__painting__image_cache.ImageCache, () => ({
    __proto__: dart.getGetters(src__painting__image_cache.ImageCache.__proto__),
    maximumSize: core.int,
    currentSize: core.int,
    maximumSizeBytes: core.int,
    currentSizeBytes: core.int
  }));
  dart.setSetterSignature(src__painting__image_cache.ImageCache, () => ({
    __proto__: dart.getSetters(src__painting__image_cache.ImageCache.__proto__),
    maximumSize: core.int,
    maximumSizeBytes: core.int
  }));
  dart.setLibraryUri(src__painting__image_cache.ImageCache, "package:flutter_web/src/painting/image_cache.dart");
  dart.setFieldSignature(src__painting__image_cache.ImageCache, () => ({
    __proto__: dart.getFields(src__painting__image_cache.ImageCache.__proto__),
    [_pendingImages]: dart.finalFieldType(core.Map$(core.Object, src__painting__image_stream.ImageStreamCompleter)),
    [_cache]: dart.finalFieldType(core.Map$(core.Object, src__painting__image_cache._CachedImage)),
    [_maximumSize]: dart.fieldType(core.int),
    [_maximumSizeBytes]: dart.fieldType(core.int),
    [_currentSizeBytes]: dart.fieldType(core.int)
  }));
  src__painting__image_cache._CachedImage = class _CachedImage extends core.Object {};
  (src__painting__image_cache._CachedImage.new = function(completer, sizeBytes) {
    this.completer = completer;
    this.sizeBytes = sizeBytes;
    ;
  }).prototype = src__painting__image_cache._CachedImage.prototype;
  dart.addTypeTests(src__painting__image_cache._CachedImage);
  dart.setLibraryUri(src__painting__image_cache._CachedImage, "package:flutter_web/src/painting/image_cache.dart");
  dart.setFieldSignature(src__painting__image_cache._CachedImage, () => ({
    __proto__: dart.getFields(src__painting__image_cache._CachedImage.__proto__),
    completer: dart.finalFieldType(src__painting__image_stream.ImageStreamCompleter),
    sizeBytes: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(src__painting__image_cache, {
    /*src__painting__image_cache._kDefaultSize*/get _kDefaultSize() {
      return 1000;
    },
    /*src__painting__image_cache._kDefaultSizeBytes*/get _kDefaultSizeBytes() {
      return 100 << 20;
    }
  });
  src__painting__image_stream.ImageInfo = class ImageInfo extends core.Object {
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    toString() {
      return dart.str(this.image) + " @ " + this.scale[$toStringAsFixed](1) + "x";
    }
    get hashCode() {
      return ui$.hashValues(this.image, this.scale);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__painting__image_stream.ImageInfo._check(other);
      return dart.equals(typedOther.image, this.image) && typedOther.scale == this.scale;
    }
  };
  (src__painting__image_stream.ImageInfo.new = function(opts) {
    let image = opts && 'image' in opts ? opts.image : null;
    let scale = opts && 'scale' in opts ? opts.scale : 1.0;
    this[image$] = image;
    this[scale$] = scale;
    if (!(image != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_stream.dart", 23, 16, "image != null");
    if (!(scale != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_stream.dart", 24, 16, "scale != null");
    ;
  }).prototype = src__painting__image_stream.ImageInfo.prototype;
  dart.addTypeTests(src__painting__image_stream.ImageInfo);
  const image$ = Symbol("ImageInfo.image");
  const scale$ = Symbol("ImageInfo.scale");
  dart.setMethodSignature(src__painting__image_stream.ImageInfo, () => ({
    __proto__: dart.getMethods(src__painting__image_stream.ImageInfo.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(src__painting__image_stream.ImageInfo, "package:flutter_web/src/painting/image_stream.dart");
  dart.setFieldSignature(src__painting__image_stream.ImageInfo, () => ({
    __proto__: dart.getFields(src__painting__image_stream.ImageInfo.__proto__),
    image: dart.finalFieldType(ui$.Image),
    scale: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__painting__image_stream.ImageInfo, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__painting__image_stream.ImageInfo, ['hashCode']);
  src__painting__image_stream._ImageListenerPair = class _ImageListenerPair extends core.Object {};
  (src__painting__image_stream._ImageListenerPair.new = function(listener, errorListener) {
    this.listener = listener;
    this.errorListener = errorListener;
    ;
  }).prototype = src__painting__image_stream._ImageListenerPair.prototype;
  dart.addTypeTests(src__painting__image_stream._ImageListenerPair);
  dart.setLibraryUri(src__painting__image_stream._ImageListenerPair, "package:flutter_web/src/painting/image_stream.dart");
  dart.setFieldSignature(src__painting__image_stream._ImageListenerPair, () => ({
    __proto__: dart.getFields(src__painting__image_stream._ImageListenerPair.__proto__),
    listener: dart.finalFieldType(dart.fnType(dart.void, [src__painting__image_stream.ImageInfo, core.bool])),
    errorListener: dart.finalFieldType(dart.fnType(dart.void, [dart.dynamic, core.StackTrace]))
  }));
  const _completer = dart.privateName(src__painting__image_stream, "_completer");
  const _listeners$ = dart.privateName(src__painting__image_stream, "_listeners");
  src__painting__image_stream.ImageStream = class ImageStream extends src__foundation__diagnostics.Diagnosticable {
    get completer() {
      return this[_completer];
    }
    setCompleter(value) {
      if (!(this[_completer] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_stream.dart", 121, 12, "_completer == null");
      this[_completer] = value;
      if (this[_listeners$] != null) {
        let initialListeners = this[_listeners$];
        this[_listeners$] = null;
        for (let listenerPair of initialListeners) {
          this[_completer].addListener(listenerPair.listener, {onError: listenerPair.errorListener});
        }
      }
    }
    addListener(listener, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      if (this[_completer] != null) return this[_completer].addListener(listener, {onError: onError});
      this[_listeners$] == null ? this[_listeners$] = JSArrayOf_ImageListenerPair().of([]) : null;
      this[_listeners$][$add](new src__painting__image_stream._ImageListenerPair.new(listener, onError));
    }
    removeListener(listener) {
      if (this[_completer] != null) return this[_completer].removeListener(listener);
      if (!(this[_listeners$] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_stream.dart", 165, 12, "_listeners != null");
      for (let i = 0; i < dart.notNull(this[_listeners$][$length]); i = i + 1) {
        if (dart.equals(this[_listeners$][$_get](i).listener, listener)) {
          this[_listeners$][$removeAt](i);
          continue;
        }
      }
    }
    get key() {
      return this[_completer] != null ? this[_completer] : this;
    }
    debugFillProperties(properties) {
      let t2, t2$, t2$0, t2$1;
      super.debugFillProperties(properties);
      properties.add(new (ObjectFlagPropertyOfImageStreamCompleter()).new("completer", this[_completer], {ifPresent: (t2 = this[_completer], t2 == null ? null : t2.toStringShort()), ifNull: "unresolved"}));
      properties.add(new (ObjectFlagPropertyOfListOf_ImageListenerPair()).new("listeners", this[_listeners$], {ifPresent: dart.str((t2$ = this[_listeners$], t2$ == null ? null : t2$[$length])) + " listener" + ((t2$0 = this[_listeners$], t2$0 == null ? null : t2$0[$length]) === 1 ? "" : "s"), ifNull: "no listeners", level: this[_completer] != null ? src__foundation__diagnostics.DiagnosticLevel.hidden : src__foundation__diagnostics.DiagnosticLevel.info}));
      t2$1 = this[_completer];
      t2$1 == null ? null : t2$1.debugFillProperties(properties);
    }
  };
  (src__painting__image_stream.ImageStream.new = function() {
    this[_completer] = null;
    this[_listeners$] = null;
    src__painting__image_stream.ImageStream.__proto__.new.call(this);
    ;
  }).prototype = src__painting__image_stream.ImageStream.prototype;
  dart.addTypeTests(src__painting__image_stream.ImageStream);
  dart.setMethodSignature(src__painting__image_stream.ImageStream, () => ({
    __proto__: dart.getMethods(src__painting__image_stream.ImageStream.__proto__),
    setCompleter: dart.fnType(dart.void, [src__painting__image_stream.ImageStreamCompleter]),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__painting__image_stream.ImageInfo, core.bool])], {onError: dart.fnType(dart.void, [dart.dynamic, core.StackTrace])}),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__painting__image_stream.ImageInfo, core.bool])])
  }));
  dart.setGetterSignature(src__painting__image_stream.ImageStream, () => ({
    __proto__: dart.getGetters(src__painting__image_stream.ImageStream.__proto__),
    completer: src__painting__image_stream.ImageStreamCompleter,
    key: core.Object
  }));
  dart.setLibraryUri(src__painting__image_stream.ImageStream, "package:flutter_web/src/painting/image_stream.dart");
  dart.setFieldSignature(src__painting__image_stream.ImageStream, () => ({
    __proto__: dart.getFields(src__painting__image_stream.ImageStream.__proto__),
    [_completer]: dart.fieldType(src__painting__image_stream.ImageStreamCompleter),
    [_listeners$]: dart.fieldType(core.List$(src__painting__image_stream._ImageListenerPair))
  }));
  const _currentImage = dart.privateName(src__painting__image_stream, "_currentImage");
  const _currentError = dart.privateName(src__painting__image_stream, "_currentError");
  src__painting__image_stream.ImageStreamCompleter = class ImageStreamCompleter extends src__foundation__diagnostics.Diagnosticable {
    addListener(listener, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      this[_listeners$][$add](new src__painting__image_stream._ImageListenerPair.new(listener, onError));
      if (this[_currentImage] != null) {
        try {
          listener(this[_currentImage], true);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          this.reportError({context: "by a synchronously-called image listener", exception: exception, stack: stack});
        }
      }
      if (this[_currentError] != null && onError != null) {
        try {
          onError(this[_currentError].exception, this[_currentError].stack);
        } catch (e$) {
          let exception = dart.getThrown(e$);
          let stack = dart.stackTrace(e$);
          src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, library: "image resource service", context: new src__foundation__assertions.ErrorDescription.new("by a synchronously-called image error listener"), stack: stack}));
        }
      }
    }
    removeListener(listener) {
      for (let i = 0; i < dart.notNull(this[_listeners$][$length]); i = i + 1) {
        if (dart.equals(this[_listeners$][$_get](i).listener, listener)) {
          this[_listeners$][$removeAt](i);
          continue;
        }
      }
    }
    setImage(image) {
      this[_currentImage] = image;
      if (dart.test(this[_listeners$][$isEmpty])) return;
      let localListeners = this[_listeners$][$map](ImageInfoAndboolTovoid(), dart.fn(listenerPair => listenerPair.listener, _ImageListenerPairToFn()))[$toList]();
      for (let listener of localListeners) {
        try {
          listener(image, false);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          this.reportError({context: "by an image listener", exception: exception, stack: stack});
        }
      }
    }
    reportError(opts) {
      let context = opts && 'context' in opts ? opts.context : null;
      let exception = opts && 'exception' in opts ? opts.exception : null;
      let stack = opts && 'stack' in opts ? opts.stack : null;
      let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
      let silent = opts && 'silent' in opts ? opts.silent : false;
      this[_currentError] = new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "image resource service", context: new src__foundation__assertions.ErrorDescription.new(context), informationCollector: informationCollector, silent: silent});
      let localErrorListeners = this[_listeners$][$map](dynamicAndStackTraceTovoid(), dart.fn(listenerPair => listenerPair.errorListener, _ImageListenerPairToFn$()))[$where](dart.fn(errorListener => errorListener != null, FnTobool()))[$toList]();
      if (dart.test(localErrorListeners[$isEmpty])) {
        src__foundation__assertions.FlutterError.reportError(this[_currentError]);
      } else {
        for (let errorListener of localErrorListeners) {
          try {
            errorListener(exception, stack);
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({context: new src__foundation__assertions.ErrorDescription.new("by an image error listener"), library: "image resource service", exception: exception, stack: stack}));
          }
        }
      }
    }
    debugFillProperties(description) {
      let t6, t6$;
      super.debugFillProperties(description);
      description.add(new (DiagnosticsPropertyOfImageInfo()).new("current", this[_currentImage], {ifNull: "unresolved", showName: false}));
      description.add(new (ObjectFlagPropertyOfListOf_ImageListenerPair()).new("listeners", this[_listeners$], {ifPresent: dart.str((t6 = this[_listeners$], t6 == null ? null : t6[$length])) + " listener" + ((t6$ = this[_listeners$], t6$ == null ? null : t6$[$length]) === 1 ? "" : "s")}));
    }
  };
  (src__painting__image_stream.ImageStreamCompleter.new = function() {
    this[_listeners$] = JSArrayOf_ImageListenerPair().of([]);
    this[_currentImage] = null;
    this[_currentError] = null;
    src__painting__image_stream.ImageStreamCompleter.__proto__.new.call(this);
    ;
  }).prototype = src__painting__image_stream.ImageStreamCompleter.prototype;
  dart.addTypeTests(src__painting__image_stream.ImageStreamCompleter);
  dart.setMethodSignature(src__painting__image_stream.ImageStreamCompleter, () => ({
    __proto__: dart.getMethods(src__painting__image_stream.ImageStreamCompleter.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__painting__image_stream.ImageInfo, core.bool])], {onError: dart.fnType(dart.void, [dart.dynamic, core.StackTrace])}),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__painting__image_stream.ImageInfo, core.bool])]),
    setImage: dart.fnType(dart.void, [src__painting__image_stream.ImageInfo]),
    reportError: dart.fnType(dart.void, [], {context: core.String, exception: dart.dynamic, informationCollector: dart.fnType(core.Iterable$(src__foundation__diagnostics.DiagnosticsNode), []), silent: core.bool, stack: core.StackTrace})
  }));
  dart.setLibraryUri(src__painting__image_stream.ImageStreamCompleter, "package:flutter_web/src/painting/image_stream.dart");
  dart.setFieldSignature(src__painting__image_stream.ImageStreamCompleter, () => ({
    __proto__: dart.getFields(src__painting__image_stream.ImageStreamCompleter.__proto__),
    [_listeners$]: dart.finalFieldType(core.List$(src__painting__image_stream._ImageListenerPair)),
    [_currentImage]: dart.fieldType(src__painting__image_stream.ImageInfo),
    [_currentError]: dart.fieldType(src__foundation__assertions.FlutterErrorDetails)
  }));
  src__painting__image_stream.OneFrameImageStreamCompleter = class OneFrameImageStreamCompleter extends src__painting__image_stream.ImageStreamCompleter {};
  (src__painting__image_stream.OneFrameImageStreamCompleter.new = function(image, opts) {
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    if (!(image != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_stream.dart", 377, 16, "image != null");
    src__painting__image_stream.OneFrameImageStreamCompleter.__proto__.new.call(this);
    image.then(dart.void, dart.bind(this, 'setImage'), {onError: dart.fn((error, stack) => {
        this.reportError({context: "resolving a single-frame image stream", exception: error, stack: stack, informationCollector: informationCollector, silent: true});
      }, dynamicAndStackTraceToNull())});
  }).prototype = src__painting__image_stream.OneFrameImageStreamCompleter.prototype;
  dart.addTypeTests(src__painting__image_stream.OneFrameImageStreamCompleter);
  dart.setLibraryUri(src__painting__image_stream.OneFrameImageStreamCompleter, "package:flutter_web/src/painting/image_stream.dart");
  const _codec = dart.privateName(src__painting__image_stream, "_codec");
  const _nextFrame = dart.privateName(src__painting__image_stream, "_nextFrame");
  const _shownTimestamp = dart.privateName(src__painting__image_stream, "_shownTimestamp");
  const _frameDuration = dart.privateName(src__painting__image_stream, "_frameDuration");
  const _informationCollector = dart.privateName(src__painting__image_stream, "_informationCollector");
  const _scale = dart.privateName(src__painting__image_stream, "_scale");
  const _framesEmitted = dart.privateName(src__painting__image_stream, "_framesEmitted");
  const _timer = dart.privateName(src__painting__image_stream, "_timer");
  const _handleCodecReady = dart.privateName(src__painting__image_stream, "_handleCodecReady");
  const _decodeNextFrameAndSchedule = dart.privateName(src__painting__image_stream, "_decodeNextFrameAndSchedule");
  const _hasActiveListeners = dart.privateName(src__painting__image_stream, "_hasActiveListeners");
  const _isFirstFrame = dart.privateName(src__painting__image_stream, "_isFirstFrame");
  const _hasFrameDurationPassed = dart.privateName(src__painting__image_stream, "_hasFrameDurationPassed");
  const _emitFrame = dart.privateName(src__painting__image_stream, "_emitFrame");
  const _handleAppFrame = dart.privateName(src__painting__image_stream, "_handleAppFrame");
  src__painting__image_stream.MultiFrameImageStreamCompleter = class MultiFrameImageStreamCompleter extends src__painting__image_stream.ImageStreamCompleter {
    [_handleCodecReady](codec) {
      this[_codec] = codec;
      if (!(this[_codec] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_stream.dart", 466, 12, "_codec != null");
      this[_decodeNextFrameAndSchedule]();
    }
    [_handleAppFrame](timestamp) {
      if (!dart.test(this[_hasActiveListeners])) return;
      if (dart.test(this[_isFirstFrame]()) || dart.test(this[_hasFrameDurationPassed](timestamp))) {
        this[_emitFrame](new src__painting__image_stream.ImageInfo.new({image: this[_nextFrame].image, scale: this[_scale]}));
        this[_shownTimestamp] = timestamp;
        this[_frameDuration] = this[_nextFrame].duration;
        this[_nextFrame] = null;
        let completedCycles = (dart.notNull(this[_framesEmitted]) / dart.notNull(this[_codec].frameCount))[$truncate]();
        if (this[_codec].repetitionCount === -1 || completedCycles <= dart.notNull(this[_codec].repetitionCount)) {
          this[_decodeNextFrameAndSchedule]();
        }
        return;
      }
      let delay = this[_frameDuration]['-'](timestamp['-'](this[_shownTimestamp]));
      this[_timer] = async.Timer.new(delay['*'](src__scheduler__binding.timeDilation), dart.fn(() => {
        src__scheduler__binding.SchedulerBinding.instance.scheduleFrameCallback(dart.bind(this, _handleAppFrame));
      }, VoidToNull()));
    }
    [_isFirstFrame]() {
      return this[_frameDuration] == null;
    }
    [_hasFrameDurationPassed](timestamp) {
      if (!(this[_shownTimestamp] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_stream.dart", 496, 12, "_shownTimestamp != null");
      return timestamp['-'](this[_shownTimestamp])['>='](this[_frameDuration]);
    }
    [_decodeNextFrameAndSchedule]() {
      return async.async(dart.void, (function* _decodeNextFrameAndSchedule() {
        try {
          this[_nextFrame] = (yield this[_codec].getNextFrame());
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          this.reportError({context: "resolving an image frame", exception: exception, stack: stack, informationCollector: this[_informationCollector], silent: true});
          return;
        }
        if (this[_codec].frameCount === 1) {
          this[_emitFrame](new src__painting__image_stream.ImageInfo.new({image: this[_nextFrame].image, scale: this[_scale]}));
          return;
        }
        src__scheduler__binding.SchedulerBinding.instance.scheduleFrameCallback(dart.bind(this, _handleAppFrame));
      }).bind(this));
    }
    [_emitFrame](imageInfo) {
      this.setImage(imageInfo);
      this[_framesEmitted] = dart.notNull(this[_framesEmitted]) + 1;
    }
    get [_hasActiveListeners]() {
      return this[_listeners$][$isNotEmpty];
    }
    addListener(listener, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      if (!dart.test(this[_hasActiveListeners]) && this[_codec] != null) {
        this[_decodeNextFrameAndSchedule]();
      }
      super.addListener(listener, {onError: onError});
    }
    removeListener(listener) {
      let t7;
      super.removeListener(listener);
      if (!dart.test(this[_hasActiveListeners])) {
        t7 = this[_timer];
        t7 == null ? null : t7.cancel();
        this[_timer] = null;
      }
    }
  };
  (src__painting__image_stream.MultiFrameImageStreamCompleter.new = function(opts) {
    let codec = opts && 'codec' in opts ? opts.codec : null;
    let scale = opts && 'scale' in opts ? opts.scale : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    this[_codec] = null;
    this[_nextFrame] = null;
    this[_shownTimestamp] = null;
    this[_frameDuration] = null;
    if (!(codec != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_stream.dart", 435, 16, "codec != null");
    this[_informationCollector] = informationCollector;
    this[_scale] = scale;
    this[_framesEmitted] = 0;
    this[_timer] = null;
    src__painting__image_stream.MultiFrameImageStreamCompleter.__proto__.new.call(this);
    codec.then(dart.void, dart.bind(this, _handleCodecReady), {onError: dart.fn((error, stack) => {
        this.reportError({context: "resolving an image codec", exception: error, stack: stack, informationCollector: informationCollector, silent: true});
      }, dynamicAndStackTraceToNull())});
  }).prototype = src__painting__image_stream.MultiFrameImageStreamCompleter.prototype;
  dart.addTypeTests(src__painting__image_stream.MultiFrameImageStreamCompleter);
  dart.setMethodSignature(src__painting__image_stream.MultiFrameImageStreamCompleter, () => ({
    __proto__: dart.getMethods(src__painting__image_stream.MultiFrameImageStreamCompleter.__proto__),
    [_handleCodecReady]: dart.fnType(dart.void, [ui$.Codec]),
    [_handleAppFrame]: dart.fnType(dart.void, [core.Duration]),
    [_isFirstFrame]: dart.fnType(core.bool, []),
    [_hasFrameDurationPassed]: dart.fnType(core.bool, [core.Duration]),
    [_decodeNextFrameAndSchedule]: dart.fnType(async.Future$(dart.void), []),
    [_emitFrame]: dart.fnType(dart.void, [src__painting__image_stream.ImageInfo])
  }));
  dart.setGetterSignature(src__painting__image_stream.MultiFrameImageStreamCompleter, () => ({
    __proto__: dart.getGetters(src__painting__image_stream.MultiFrameImageStreamCompleter.__proto__),
    [_hasActiveListeners]: core.bool
  }));
  dart.setLibraryUri(src__painting__image_stream.MultiFrameImageStreamCompleter, "package:flutter_web/src/painting/image_stream.dart");
  dart.setFieldSignature(src__painting__image_stream.MultiFrameImageStreamCompleter, () => ({
    __proto__: dart.getFields(src__painting__image_stream.MultiFrameImageStreamCompleter.__proto__),
    [_codec]: dart.fieldType(ui$.Codec),
    [_scale]: dart.finalFieldType(core.double),
    [_informationCollector]: dart.finalFieldType(dart.fnType(core.Iterable$(src__foundation__diagnostics.DiagnosticsNode), [])),
    [_nextFrame]: dart.fieldType(ui$.FrameInfo),
    [_shownTimestamp]: dart.fieldType(core.Duration),
    [_frameDuration]: dart.fieldType(core.Duration),
    [_framesEmitted]: dart.fieldType(core.int),
    [_timer]: dart.fieldType(async.Timer)
  }));
  const _chooseVariant = dart.privateName(src__painting__image_resolution, "_chooseVariant");
  const _parseScale = dart.privateName(src__painting__image_resolution, "_parseScale");
  const _findNearest = dart.privateName(src__painting__image_resolution, "_findNearest");
  const _loadAsync = dart.privateName(src__painting__image_provider, "_loadAsync");
  const _is_ImageProvider_default = Symbol('_is_ImageProvider_default');
  src__painting__image_provider.ImageProvider$ = dart.generic(T => {
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    let DiagnosticsPropertyOfT = () => (DiagnosticsPropertyOfT = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(T)))();
    class ImageProvider extends core.Object {
      resolve(configuration) {
        if (!(configuration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_provider.dart", 257, 12, "configuration != null");
        let stream = new src__painting__image_stream.ImageStream.new();
        let obtainedKey = null;
        this.obtainKey(configuration).then(dart.void, dart.fn(key => {
          obtainedKey = key;
          stream.setCompleter(src__painting__binding.PaintingBinding.instance.imageCache.putIfAbsent(key, dart.fn(() => this.load(key), VoidToImageStreamCompleter())));
        }, TToNull())).catchError(dart.fn((exception, stack) => async.async(core.Null, (function*() {
          src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new src__foundation__assertions.ErrorDescription.new("while resolving an image"), silent: true, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfObject()).new((function*() {
              yield new (DiagnosticsPropertyOfImageProvider()).new("Image provider", this);
              yield new (DiagnosticsPropertyOfImageConfiguration()).new("Image configuration", configuration);
              yield new (DiagnosticsPropertyOfT()).new("Image key", obtainedKey, {defaultValue: null});
            }).bind(this)), VoidToIterableOfDiagnosticsPropertyOfObject())}));
          return null;
        }).bind(this)), dynamicAndStackTraceToFutureOfNull()));
        return stream;
      }
      evict(opts) {
        let cache = opts && 'cache' in opts ? opts.cache : null;
        let configuration = opts && 'configuration' in opts ? opts.configuration : src__painting__image_provider.ImageConfiguration.empty;
        return async.async(core.bool, (function* evict() {
          cache == null ? cache = src__painting__binding.imageCache : null;
          let key = (yield this.obtainKey(configuration));
          return cache.evict(key);
        }).bind(this));
      }
      toString() {
        return dart.str(this[$runtimeType]) + "()";
      }
    }
    (ImageProvider.new = function() {
      ;
    }).prototype = ImageProvider.prototype;
    dart.addTypeTests(ImageProvider);
    ImageProvider.prototype[_is_ImageProvider_default] = true;
    dart.setMethodSignature(ImageProvider, () => ({
      __proto__: dart.getMethods(ImageProvider.__proto__),
      resolve: dart.fnType(src__painting__image_stream.ImageStream, [src__painting__image_provider.ImageConfiguration]),
      evict: dart.fnType(async.Future$(core.bool), [], {cache: src__painting__image_cache.ImageCache, configuration: src__painting__image_provider.ImageConfiguration})
    }));
    dart.setLibraryUri(ImageProvider, "package:flutter_web/src/painting/image_provider.dart");
    dart.defineExtensionMethods(ImageProvider, ['toString']);
    return ImageProvider;
  });
  src__painting__image_provider.ImageProvider = src__painting__image_provider.ImageProvider$();
  dart.addTypeTests(src__painting__image_provider.ImageProvider, _is_ImageProvider_default);
  src__painting__image_provider.AssetBundleImageKey = class AssetBundleImageKey extends core.Object {
    get bundle() {
      return this[bundle$];
    }
    set bundle(value) {
      super.bundle = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get scale() {
      return this[scale$0];
    }
    set scale(value) {
      super.scale = value;
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__painting__image_provider.AssetBundleImageKey._check(other);
      return dart.equals(this.bundle, typedOther.bundle) && this.name == typedOther.name && this.scale == typedOther.scale;
    }
    get hashCode() {
      return ui$.hashValues(this.bundle, this.name, this.scale);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(bundle: " + dart.str(this.bundle) + ", name: \"" + dart.str(this.name) + "\", scale: " + dart.str(this.scale) + ")";
    }
  };
  (src__painting__image_provider.AssetBundleImageKey.new = function(opts) {
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let scale = opts && 'scale' in opts ? opts.scale : null;
    this[bundle$] = bundle;
    this[name$] = name;
    this[scale$0] = scale;
    if (!(bundle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_provider.dart", 360, 16, "bundle != null");
    if (!(name != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_provider.dart", 361, 16, "name != null");
    if (!(scale != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_provider.dart", 362, 16, "scale != null");
    ;
  }).prototype = src__painting__image_provider.AssetBundleImageKey.prototype;
  dart.addTypeTests(src__painting__image_provider.AssetBundleImageKey);
  const bundle$ = Symbol("AssetBundleImageKey.bundle");
  const name$ = Symbol("AssetBundleImageKey.name");
  const scale$0 = Symbol("AssetBundleImageKey.scale");
  dart.setLibraryUri(src__painting__image_provider.AssetBundleImageKey, "package:flutter_web/src/painting/image_provider.dart");
  dart.setFieldSignature(src__painting__image_provider.AssetBundleImageKey, () => ({
    __proto__: dart.getFields(src__painting__image_provider.AssetBundleImageKey.__proto__),
    bundle: dart.finalFieldType(src__services__asset_bundle.AssetBundle),
    name: dart.finalFieldType(core.String),
    scale: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__painting__image_provider.AssetBundleImageKey, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__painting__image_provider.AssetBundleImageKey, ['hashCode']);
  src__painting__image_provider.AssetBundleImageProvider = class AssetBundleImageProvider extends src__painting__image_provider.ImageProvider$(src__painting__image_provider.AssetBundleImageKey) {
    load(key) {
      src__painting__image_provider.AssetBundleImageKey._check(key);
      return new src__painting__image_stream.MultiFrameImageStreamCompleter.new({codec: this[_loadAsync](key), scale: key.scale, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfObject()).new((function*() {
          yield new (DiagnosticsPropertyOfImageProvider()).new("Image provider", this);
          yield new (DiagnosticsPropertyOfAssetBundleImageKey()).new("Image key", key);
        }).bind(this)), VoidToIterableOfDiagnosticsPropertyOfObject())});
    }
    [_loadAsync](key) {
      return async.async(ui$.Codec, function* _loadAsync() {
        let data = (yield key.bundle.load(key.name));
        if (data == null) dart.throw("Unable to read data");
        return yield src__painting__binding.PaintingBinding.instance.instantiateImageCodec(data[$buffer][$asUint8List]());
      });
    }
  };
  (src__painting__image_provider.AssetBundleImageProvider.new = function() {
    src__painting__image_provider.AssetBundleImageProvider.__proto__.new.call(this);
    ;
  }).prototype = src__painting__image_provider.AssetBundleImageProvider.prototype;
  dart.addTypeTests(src__painting__image_provider.AssetBundleImageProvider);
  dart.setMethodSignature(src__painting__image_provider.AssetBundleImageProvider, () => ({
    __proto__: dart.getMethods(src__painting__image_provider.AssetBundleImageProvider.__proto__),
    load: dart.fnType(src__painting__image_stream.ImageStreamCompleter, [core.Object]),
    [_loadAsync]: dart.fnType(async.Future$(ui$.Codec), [src__painting__image_provider.AssetBundleImageKey])
  }));
  dart.setLibraryUri(src__painting__image_provider.AssetBundleImageProvider, "package:flutter_web/src/painting/image_provider.dart");
  src__painting__image_resolution.AssetImage = class AssetImage extends src__painting__image_provider.AssetBundleImageProvider {
    get assetName() {
      return this[assetName$];
    }
    set assetName(value) {
      super.assetName = value;
    }
    get bundle() {
      return this[bundle$0];
    }
    set bundle(value) {
      super.bundle = value;
    }
    get package() {
      return this[package$];
    }
    set package(value) {
      super.package = value;
    }
    get keyName() {
      return this.package == null ? this.assetName : "packages/" + dart.str(this.package) + "/" + dart.str(this.assetName);
    }
    obtainKey(configuration) {
      let t7, t7$;
      let chosenBundle = (t7$ = (t7 = this.bundle, t7 == null ? configuration.bundle : t7), t7$ == null ? src__services__asset_bundle.rootBundle : t7$);
      let completer = null;
      let result = null;
      chosenBundle.loadStructuredData(MapOfString$ListOfString(), src__painting__image_resolution._kAssetManifestFileName, dart.fn(src__painting__image_resolution.AssetImage._manifestParser, StringToFutureOfMapOfString$ListOfString())).then(dart.void, dart.fn(manifest => {
        let chosenName = this[_chooseVariant](this.keyName, configuration, manifest == null ? null : manifest[$_get](this.keyName));
        let chosenScale = this[_parseScale](chosenName);
        let key = new src__painting__image_provider.AssetBundleImageKey.new({bundle: chosenBundle, name: chosenName, scale: chosenScale});
        if (completer != null) {
          completer.complete(key);
        } else {
          result = new (SynchronousFutureOfAssetBundleImageKey()).new(key);
        }
      }, MapOfString$ListOfStringToNull())).catchError(dart.fn((error, stack) => {
        if (!(completer != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_resolution.dart", 200, 14, "completer != null");
        if (!(result == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_resolution.dart", 201, 14, "result == null");
        completer.completeError(error, stack);
      }, dynamicAndStackTraceToNull()));
      if (result != null) {
        return result;
      }
      completer = CompleterOfAssetBundleImageKey().new();
      return completer.future;
    }
    static _manifestParser(jsonData) {
      if (jsonData == null) return null;
      let parsedJson = MapOfString$dynamic()._check(convert.json.decode(jsonData));
      let keys = parsedJson[$keys];
      let parsedManifest = LinkedHashMapOfString$ListOfString().fromIterables(keys, keys[$map](ListOfString(), dart.fn(key => ListOfString().from(core.Iterable._check(parsedJson[$_get](key))), StringToListOfString())));
      return new (SynchronousFutureOfMapOfString$ListOfString()).new(parsedManifest);
    }
    [_chooseVariant](main, config, candidates) {
      if (config.devicePixelRatio == null || candidates == null || dart.test(candidates[$isEmpty])) return main;
      let mapping = new (SplayTreeMapOfdouble$String()).new();
      for (let candidate of candidates)
        mapping._set(this[_parseScale](candidate), candidate);
      return this[_findNearest](mapping, config.devicePixelRatio);
    }
    [_findNearest](candidates, value) {
      if (dart.test(candidates.containsKey(value))) return candidates._get(value);
      let lower = candidates.lastKeyBefore(value);
      let upper = candidates.firstKeyAfter(value);
      if (lower == null) return candidates._get(upper);
      if (upper == null) return candidates._get(lower);
      if (dart.notNull(value) > (dart.notNull(lower) + dart.notNull(upper)) / 2)
        return candidates._get(upper);
      else
        return candidates._get(lower);
    }
    [_parseScale](key) {
      if (key == this.assetName) {
        return src__painting__image_resolution.AssetImage._naturalResolution;
      }
      let assetDir = key[$substring](0, key[$lastIndexOf]("/"));
      let match = src__painting__image_resolution.AssetImage._extractRatioRegExp.firstMatch(assetDir);
      if (match != null && dart.notNull(match.groupCount) > 0) return core.double.parse(match.group(1));
      return src__painting__image_resolution.AssetImage._naturalResolution;
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__painting__image_resolution.AssetImage._check(other);
      return this.keyName == typedOther.keyName && dart.equals(this.bundle, typedOther.bundle);
    }
    get hashCode() {
      return ui$.hashValues(this.keyName, this.bundle);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(bundle: " + dart.str(this.bundle) + ", name: \"" + dart.str(this.keyName) + "\")";
    }
  };
  (src__painting__image_resolution.AssetImage.new = function(assetName, opts) {
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let package$1 = opts && 'package' in opts ? opts.package : null;
    this[assetName$] = assetName;
    this[bundle$0] = bundle;
    this[package$] = package$1;
    if (!(assetName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_resolution.dart", 134, 15, "assetName != null");
    src__painting__image_resolution.AssetImage.__proto__.new.call(this);
    ;
  }).prototype = src__painting__image_resolution.AssetImage.prototype;
  dart.addTypeTests(src__painting__image_resolution.AssetImage);
  const assetName$ = Symbol("AssetImage.assetName");
  const bundle$0 = Symbol("AssetImage.bundle");
  const package$ = Symbol("AssetImage.package");
  dart.setMethodSignature(src__painting__image_resolution.AssetImage, () => ({
    __proto__: dart.getMethods(src__painting__image_resolution.AssetImage.__proto__),
    obtainKey: dart.fnType(async.Future$(src__painting__image_provider.AssetBundleImageKey), [src__painting__image_provider.ImageConfiguration]),
    [_chooseVariant]: dart.fnType(core.String, [core.String, src__painting__image_provider.ImageConfiguration, core.List$(core.String)]),
    [_findNearest]: dart.fnType(core.String, [collection.SplayTreeMap$(core.double, core.String), core.double]),
    [_parseScale]: dart.fnType(core.double, [core.String])
  }));
  dart.setGetterSignature(src__painting__image_resolution.AssetImage, () => ({
    __proto__: dart.getGetters(src__painting__image_resolution.AssetImage.__proto__),
    keyName: core.String
  }));
  dart.setLibraryUri(src__painting__image_resolution.AssetImage, "package:flutter_web/src/painting/image_resolution.dart");
  dart.setFieldSignature(src__painting__image_resolution.AssetImage, () => ({
    __proto__: dart.getFields(src__painting__image_resolution.AssetImage.__proto__),
    assetName: dart.finalFieldType(core.String),
    bundle: dart.finalFieldType(src__services__asset_bundle.AssetBundle),
    package: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__painting__image_resolution.AssetImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__painting__image_resolution.AssetImage, ['hashCode']);
  dart.defineLazy(src__painting__image_resolution.AssetImage, {
    /*src__painting__image_resolution.AssetImage._naturalResolution*/get _naturalResolution() {
      return 1.0;
    },
    /*src__painting__image_resolution.AssetImage._extractRatioRegExp*/get _extractRatioRegExp() {
      return core.RegExp.new("/?(\\d+(\\.\\d*)?)x$");
    }
  });
  dart.defineLazy(src__painting__image_resolution, {
    /*src__painting__image_resolution._kAssetManifestFileName*/get _kAssetManifestFileName() {
      return "AssetManifest.json";
    }
  });
  src__painting__image_provider.ImageConfiguration = class ImageConfiguration extends core.Object {
    get bundle() {
      return this[bundle$1];
    }
    set bundle(value) {
      super.bundle = value;
    }
    get devicePixelRatio() {
      return this[devicePixelRatio$];
    }
    set devicePixelRatio(value) {
      super.devicePixelRatio = value;
    }
    get locale() {
      return this[locale$];
    }
    set locale(value) {
      super.locale = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get platform() {
      return this[platform$];
    }
    set platform(value) {
      super.platform = value;
    }
    copyWith(opts) {
      let t7, t7$, t7$0, t7$1, t7$2, t7$3;
      let bundle = opts && 'bundle' in opts ? opts.bundle : null;
      let devicePixelRatio = opts && 'devicePixelRatio' in opts ? opts.devicePixelRatio : null;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let size = opts && 'size' in opts ? opts.size : null;
      let platform = opts && 'platform' in opts ? opts.platform : null;
      return new src__painting__image_provider.ImageConfiguration.new({bundle: (t7 = bundle, t7 == null ? this.bundle : t7), devicePixelRatio: (t7$ = devicePixelRatio, t7$ == null ? this.devicePixelRatio : t7$), locale: (t7$0 = locale, t7$0 == null ? this.locale : t7$0), textDirection: (t7$1 = textDirection, t7$1 == null ? this.textDirection : t7$1), size: (t7$2 = size, t7$2 == null ? this.size : t7$2), platform: src__foundation__platform.TargetPlatform._check((t7$3 = platform, t7$3 == null ? this.platform : t7$3))});
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__painting__image_provider.ImageConfiguration._check(other);
      return dart.equals(typedOther.bundle, this.bundle) && typedOther.devicePixelRatio == this.devicePixelRatio && dart.equals(typedOther.locale, this.locale) && dart.equals(typedOther.textDirection, this.textDirection) && dart.equals(typedOther.size, this.size) && dart.equals(typedOther.platform, this.platform);
    }
    get hashCode() {
      return ui$.hashValues(this.bundle, this.devicePixelRatio, this.locale, this.size, this.platform);
    }
    toString() {
      let result = new core.StringBuffer.new();
      result.write("ImageConfiguration(");
      let hasArguments = false;
      if (this.bundle != null) {
        if (hasArguments) result.write(", ");
        result.write("bundle: " + dart.str(this.bundle));
        hasArguments = true;
      }
      if (this.devicePixelRatio != null) {
        if (hasArguments) result.write(", ");
        result.write("devicePixelRatio: " + this.devicePixelRatio[$toStringAsFixed](1));
        hasArguments = true;
      }
      if (this.locale != null) {
        if (hasArguments) result.write(", ");
        result.write("locale: " + dart.str(this.locale));
        hasArguments = true;
      }
      if (this.textDirection != null) {
        if (hasArguments) result.write(", ");
        result.write("textDirection: " + dart.str(this.textDirection));
        hasArguments = true;
      }
      if (this.size != null) {
        if (hasArguments) result.write(", ");
        result.write("size: " + dart.str(this.size));
        hasArguments = true;
      }
      if (this.platform != null) {
        if (hasArguments) result.write(", ");
        result.write("platform: " + dart.str(src__foundation__diagnostics.describeEnum(this.platform)));
        hasArguments = true;
      }
      result.write(")");
      return result.toString();
    }
  };
  (src__painting__image_provider.ImageConfiguration.new = function(opts) {
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let devicePixelRatio = opts && 'devicePixelRatio' in opts ? opts.devicePixelRatio : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let platform = opts && 'platform' in opts ? opts.platform : null;
    this[bundle$1] = bundle;
    this[devicePixelRatio$] = devicePixelRatio;
    this[locale$] = locale;
    this[textDirection$] = textDirection;
    this[size$] = size;
    this[platform$] = platform;
    ;
  }).prototype = src__painting__image_provider.ImageConfiguration.prototype;
  dart.addTypeTests(src__painting__image_provider.ImageConfiguration);
  const bundle$1 = Symbol("ImageConfiguration.bundle");
  const devicePixelRatio$ = Symbol("ImageConfiguration.devicePixelRatio");
  const locale$ = Symbol("ImageConfiguration.locale");
  const textDirection$ = Symbol("ImageConfiguration.textDirection");
  const size$ = Symbol("ImageConfiguration.size");
  const platform$ = Symbol("ImageConfiguration.platform");
  dart.setMethodSignature(src__painting__image_provider.ImageConfiguration, () => ({
    __proto__: dart.getMethods(src__painting__image_provider.ImageConfiguration.__proto__),
    copyWith: dart.fnType(src__painting__image_provider.ImageConfiguration, [], {bundle: src__services__asset_bundle.AssetBundle, devicePixelRatio: core.double, locale: ui$.Locale, platform: core.String, size: ui$.Size, textDirection: ui$.TextDirection})
  }));
  dart.setLibraryUri(src__painting__image_provider.ImageConfiguration, "package:flutter_web/src/painting/image_provider.dart");
  dart.setFieldSignature(src__painting__image_provider.ImageConfiguration, () => ({
    __proto__: dart.getFields(src__painting__image_provider.ImageConfiguration.__proto__),
    bundle: dart.finalFieldType(src__services__asset_bundle.AssetBundle),
    devicePixelRatio: dart.finalFieldType(core.double),
    locale: dart.finalFieldType(ui$.Locale),
    textDirection: dart.finalFieldType(ui$.TextDirection),
    size: dart.finalFieldType(ui$.Size),
    platform: dart.finalFieldType(src__foundation__platform.TargetPlatform)
  }));
  dart.defineExtensionMethods(src__painting__image_provider.ImageConfiguration, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__painting__image_provider.ImageConfiguration, ['hashCode']);
  dart.defineLazy(src__painting__image_provider.ImageConfiguration, {
    /*src__painting__image_provider.ImageConfiguration.empty*/get empty() {
      return dart.const(new src__painting__image_provider.ImageConfiguration.new());
    }
  });
  src__painting__image_provider.NetworkImage = class NetworkImage extends src__painting__image_provider.ImageProvider {
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get scale() {
      return this[scale$1];
    }
    set scale(value) {
      super.scale = value;
    }
    get headers() {
      return this[headers$];
    }
    set headers(value) {
      super.headers = value;
    }
    obtainKey(configuration) {
      return new (SynchronousFutureOfNetworkImage()).new(this);
    }
    load(key) {
      src__painting__image_provider.NetworkImage._check(key);
      return new src__painting__image_stream.MultiFrameImageStreamCompleter.new({codec: this[_loadAsync](key), scale: key.scale, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfImageProvider()).new((function*() {
          yield new (DiagnosticsPropertyOfImageProvider()).new("Image provider", this);
          yield new (DiagnosticsPropertyOfNetworkImage()).new("Image key", key);
        }).bind(this)), VoidToIterableOfDiagnosticsPropertyOfImageProvider())});
    }
    [_loadAsync](key) {
      return async.async(ui$.Codec, (function* _loadAsync() {
        if (!dart.equals(key, this)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_provider.dart", 476, 12, "key == this");
        let resolved = core.Uri.base.resolve(key.url);
        return ui$.webOnlyInstantiateImageCodecFromUrl(resolved);
      }).bind(this));
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__painting__image_provider.NetworkImage._check(other);
      return this.url == typedOther.url && this.scale == typedOther.scale;
    }
    get hashCode() {
      return ui$.hashValues(this.url, this.scale);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(\"" + dart.str(this.url) + "\", scale: " + dart.str(this.scale) + ")";
    }
  };
  (src__painting__image_provider.NetworkImage.new = function(url, opts) {
    let scale = opts && 'scale' in opts ? opts.scale : 1.0;
    let headers = opts && 'headers' in opts ? opts.headers : null;
    this[url$] = url;
    this[scale$1] = scale;
    this[headers$] = headers;
    if (!(url != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_provider.dart", 446, 16, "url != null");
    if (!(scale != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_provider.dart", 447, 16, "scale != null");
    src__painting__image_provider.NetworkImage.__proto__.new.call(this);
    ;
  }).prototype = src__painting__image_provider.NetworkImage.prototype;
  dart.addTypeTests(src__painting__image_provider.NetworkImage);
  const url$ = Symbol("NetworkImage.url");
  const scale$1 = Symbol("NetworkImage.scale");
  const headers$ = Symbol("NetworkImage.headers");
  dart.setMethodSignature(src__painting__image_provider.NetworkImage, () => ({
    __proto__: dart.getMethods(src__painting__image_provider.NetworkImage.__proto__),
    obtainKey: dart.fnType(async.Future$(src__painting__image_provider.NetworkImage), [src__painting__image_provider.ImageConfiguration]),
    load: dart.fnType(src__painting__image_stream.ImageStreamCompleter, [core.Object]),
    [_loadAsync]: dart.fnType(async.Future$(ui$.Codec), [src__painting__image_provider.NetworkImage])
  }));
  dart.setLibraryUri(src__painting__image_provider.NetworkImage, "package:flutter_web/src/painting/image_provider.dart");
  dart.setFieldSignature(src__painting__image_provider.NetworkImage, () => ({
    __proto__: dart.getFields(src__painting__image_provider.NetworkImage.__proto__),
    url: dart.finalFieldType(core.String),
    scale: dart.finalFieldType(core.double),
    headers: dart.finalFieldType(core.Map$(core.String, core.String))
  }));
  dart.defineExtensionMethods(src__painting__image_provider.NetworkImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__painting__image_provider.NetworkImage, ['hashCode']);
  src__painting__image_provider.MemoryImage = class MemoryImage extends src__painting__image_provider.ImageProvider {
    get bytes() {
      return this[bytes$];
    }
    set bytes(value) {
      super.bytes = value;
    }
    get scale() {
      return this[scale$2];
    }
    set scale(value) {
      super.scale = value;
    }
    obtainKey(configuration) {
      return new (SynchronousFutureOfMemoryImage()).new(this);
    }
    load(key) {
      src__painting__image_provider.MemoryImage._check(key);
      return new src__painting__image_stream.MultiFrameImageStreamCompleter.new({codec: this[_loadAsync](key), scale: key.scale});
    }
    [_loadAsync](key) {
      if (!dart.equals(key, this)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_provider.dart", 534, 12, "key == this");
      return src__painting__binding.PaintingBinding.instance.instantiateImageCodec(this.bytes);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__painting__image_provider.MemoryImage._check(other);
      return dart.equals(this.bytes, typedOther.bytes) && this.scale == typedOther.scale;
    }
    get hashCode() {
      return ui$.hashValues(dart.hashCode(this.bytes), this.scale);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(src__foundation__diagnostics.describeIdentity(this.bytes)) + ", scale: " + dart.str(this.scale) + ")";
    }
  };
  (src__painting__image_provider.MemoryImage.new = function(bytes, opts) {
    let scale = opts && 'scale' in opts ? opts.scale : 1.0;
    this[bytes$] = bytes;
    this[scale$2] = scale;
    if (!(bytes != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_provider.dart", 513, 16, "bytes != null");
    if (!(scale != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_provider.dart", 514, 16, "scale != null");
    src__painting__image_provider.MemoryImage.__proto__.new.call(this);
    ;
  }).prototype = src__painting__image_provider.MemoryImage.prototype;
  dart.addTypeTests(src__painting__image_provider.MemoryImage);
  const bytes$ = Symbol("MemoryImage.bytes");
  const scale$2 = Symbol("MemoryImage.scale");
  dart.setMethodSignature(src__painting__image_provider.MemoryImage, () => ({
    __proto__: dart.getMethods(src__painting__image_provider.MemoryImage.__proto__),
    obtainKey: dart.fnType(async.Future$(src__painting__image_provider.MemoryImage), [src__painting__image_provider.ImageConfiguration]),
    load: dart.fnType(src__painting__image_stream.ImageStreamCompleter, [core.Object]),
    [_loadAsync]: dart.fnType(async.Future$(ui$.Codec), [src__painting__image_provider.MemoryImage])
  }));
  dart.setLibraryUri(src__painting__image_provider.MemoryImage, "package:flutter_web/src/painting/image_provider.dart");
  dart.setFieldSignature(src__painting__image_provider.MemoryImage, () => ({
    __proto__: dart.getFields(src__painting__image_provider.MemoryImage.__proto__),
    bytes: dart.finalFieldType(typed_data.Uint8List),
    scale: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__painting__image_provider.MemoryImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__painting__image_provider.MemoryImage, ['hashCode']);
  src__painting__image_provider.ExactAssetImage = class ExactAssetImage extends src__painting__image_provider.AssetBundleImageProvider {
    get assetName() {
      return this[assetName$0];
    }
    set assetName(value) {
      super.assetName = value;
    }
    get scale() {
      return this[scale$3];
    }
    set scale(value) {
      super.scale = value;
    }
    get bundle() {
      return this[bundle$2];
    }
    set bundle(value) {
      super.bundle = value;
    }
    get package() {
      return this[package$0];
    }
    set package(value) {
      super.package = value;
    }
    get keyName() {
      return this.package == null ? this.assetName : "packages/" + dart.str(this.package) + "/" + dart.str(this.assetName);
    }
    obtainKey(configuration) {
      let t7, t7$;
      return new (SynchronousFutureOfAssetBundleImageKey()).new(new src__painting__image_provider.AssetBundleImageKey.new({bundle: (t7$ = (t7 = this.bundle, t7 == null ? configuration.bundle : t7), t7$ == null ? src__services__asset_bundle.rootBundle : t7$), name: this.keyName, scale: this.scale}));
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__painting__image_provider.ExactAssetImage._check(other);
      return this.keyName == typedOther.keyName && this.scale == typedOther.scale && dart.equals(this.bundle, typedOther.bundle);
    }
    get hashCode() {
      return ui$.hashValues(this.keyName, this.scale, this.bundle);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(name: \"" + dart.str(this.keyName) + "\", scale: " + dart.str(this.scale) + ", bundle: " + dart.str(this.bundle) + ")";
    }
  };
  (src__painting__image_provider.ExactAssetImage.new = function(assetName, opts) {
    let scale = opts && 'scale' in opts ? opts.scale : 1.0;
    let bundle = opts && 'bundle' in opts ? opts.bundle : null;
    let package$1 = opts && 'package' in opts ? opts.package : null;
    this[assetName$0] = assetName;
    this[scale$3] = scale;
    this[bundle$2] = bundle;
    this[package$0] = package$1;
    if (!(assetName != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_provider.dart", 639, 16, "assetName != null");
    if (!(scale != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/image_provider.dart", 640, 16, "scale != null");
    src__painting__image_provider.ExactAssetImage.__proto__.new.call(this);
    ;
  }).prototype = src__painting__image_provider.ExactAssetImage.prototype;
  dart.addTypeTests(src__painting__image_provider.ExactAssetImage);
  const assetName$0 = Symbol("ExactAssetImage.assetName");
  const scale$3 = Symbol("ExactAssetImage.scale");
  const bundle$2 = Symbol("ExactAssetImage.bundle");
  const package$0 = Symbol("ExactAssetImage.package");
  dart.setMethodSignature(src__painting__image_provider.ExactAssetImage, () => ({
    __proto__: dart.getMethods(src__painting__image_provider.ExactAssetImage.__proto__),
    obtainKey: dart.fnType(async.Future$(src__painting__image_provider.AssetBundleImageKey), [src__painting__image_provider.ImageConfiguration])
  }));
  dart.setGetterSignature(src__painting__image_provider.ExactAssetImage, () => ({
    __proto__: dart.getGetters(src__painting__image_provider.ExactAssetImage.__proto__),
    keyName: core.String
  }));
  dart.setLibraryUri(src__painting__image_provider.ExactAssetImage, "package:flutter_web/src/painting/image_provider.dart");
  dart.setFieldSignature(src__painting__image_provider.ExactAssetImage, () => ({
    __proto__: dart.getFields(src__painting__image_provider.ExactAssetImage.__proto__),
    assetName: dart.finalFieldType(core.String),
    scale: dart.finalFieldType(core.double),
    bundle: dart.finalFieldType(src__services__asset_bundle.AssetBundle),
    package: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__painting__image_provider.ExactAssetImage, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__painting__image_provider.ExactAssetImage, ['hashCode']);
  src__painting__notched_shapes.NotchedShape = class NotchedShape extends core.Object {};
  (src__painting__notched_shapes.NotchedShape.new = function() {
    ;
  }).prototype = src__painting__notched_shapes.NotchedShape.prototype;
  dart.addTypeTests(src__painting__notched_shapes.NotchedShape);
  dart.setLibraryUri(src__painting__notched_shapes.NotchedShape, "package:flutter_web/src/painting/notched_shapes.dart");
  src__painting__notched_shapes.CircularNotchedRectangle = class CircularNotchedRectangle extends core.Object {
    getOuterPath(host, guest) {
      let t7, t8, t7$, t7$0;
      if (!dart.test(host.overlaps(guest))) {
        t7 = new ui$.Path.new();
        t7.addRect(host);
        return t7;
      }
      let notchRadius = dart.notNull(guest.width) / 2.0;
      let s1 = 15.0;
      let s2 = 1.0;
      let r = notchRadius;
      let a = -1.0 * r - s2;
      let b = dart.notNull(host.top) - dart.notNull(guest.center.dy);
      let n2 = math.sqrt(b * b * r * r * (a * a + b * b - r * r));
      let p2xA = (a * r * r - n2) / (a * a + b * b);
      let p2xB = (a * r * r + n2) / (a * a + b * b);
      let p2yA = math.sqrt(r * r - p2xA * p2xA);
      let p2yB = math.sqrt(r * r - p2xB * p2xB);
      let p = ListOfOffset().new(6);
      p[$_set](0, new ui$.Offset.new(a - s1, b));
      p[$_set](1, new ui$.Offset.new(a, b));
      let cmp = b < 0 ? -1.0 : 1.0;
      p[$_set](2, cmp * p2yA > cmp * p2yB ? new ui$.Offset.new(p2xA, p2yA) : new ui$.Offset.new(p2xB, p2yB));
      p[$_set](3, new ui$.Offset.new(-1.0 * dart.notNull(p[$_get](2).dx), p[$_get](2).dy));
      p[$_set](4, new ui$.Offset.new(-1.0 * dart.notNull(p[$_get](1).dx), p[$_get](1).dy));
      p[$_set](5, new ui$.Offset.new(-1.0 * dart.notNull(p[$_get](0).dx), p[$_get](0).dy));
      for (let i = 0; i < dart.notNull(p[$length]); i = i + 1) {
        t7$ = p;
        t8 = i;
        t7$[$_set](t8, t7$[$_get](t8)['+'](guest.center));
      }
      t7$0 = new ui$.Path.new();
      t7$0.moveTo(host.left, host.top);
      t7$0.lineTo(p[$_get](0).dx, p[$_get](0).dy);
      t7$0.quadraticBezierTo(p[$_get](1).dx, p[$_get](1).dy, p[$_get](2).dx, p[$_get](2).dy);
      t7$0.arcToPoint(p[$_get](3), {radius: new ui$.Radius.circular(notchRadius), clockwise: false});
      t7$0.quadraticBezierTo(p[$_get](4).dx, p[$_get](4).dy, p[$_get](5).dx, p[$_get](5).dy);
      t7$0.lineTo(host.right, host.top);
      t7$0.lineTo(host.right, host.bottom);
      t7$0.lineTo(host.left, host.bottom);
      t7$0.close();
      return t7$0;
    }
  };
  (src__painting__notched_shapes.CircularNotchedRectangle.new = function() {
    ;
  }).prototype = src__painting__notched_shapes.CircularNotchedRectangle.prototype;
  dart.addTypeTests(src__painting__notched_shapes.CircularNotchedRectangle);
  src__painting__notched_shapes.CircularNotchedRectangle[dart.implements] = () => [src__painting__notched_shapes.NotchedShape];
  dart.setMethodSignature(src__painting__notched_shapes.CircularNotchedRectangle, () => ({
    __proto__: dart.getMethods(src__painting__notched_shapes.CircularNotchedRectangle.__proto__),
    getOuterPath: dart.fnType(ui$.Path, [ui$.Rect, ui$.Rect])
  }));
  dart.setLibraryUri(src__painting__notched_shapes.CircularNotchedRectangle, "package:flutter_web/src/painting/notched_shapes.dart");
  src__painting__geometry.positionDependentBox = function(opts) {
    let size = opts && 'size' in opts ? opts.size : null;
    let childSize = opts && 'childSize' in opts ? opts.childSize : null;
    let target = opts && 'target' in opts ? opts.target : null;
    let preferBelow = opts && 'preferBelow' in opts ? opts.preferBelow : null;
    let verticalOffset = opts && 'verticalOffset' in opts ? opts.verticalOffset : 0.0;
    let margin = opts && 'margin' in opts ? opts.margin : 10.0;
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/geometry.dart", 49, 10, "size != null");
    if (!(childSize != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/geometry.dart", 50, 10, "childSize != null");
    if (!(target != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/geometry.dart", 51, 10, "target != null");
    if (!(verticalOffset != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/geometry.dart", 52, 10, "verticalOffset != null");
    if (!(preferBelow != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/geometry.dart", 53, 10, "preferBelow != null");
    if (!(margin != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/geometry.dart", 54, 10, "margin != null");
    let fitsBelow = dart.notNull(target.dy) + dart.notNull(verticalOffset) + dart.notNull(childSize.height) <= dart.notNull(size.height) - dart.notNull(margin);
    let fitsAbove = dart.notNull(target.dy) - dart.notNull(verticalOffset) - dart.notNull(childSize.height) >= dart.notNull(margin);
    let tooltipBelow = dart.test(preferBelow) ? fitsBelow || !fitsAbove : !(fitsAbove || !fitsBelow);
    let y = null;
    if (tooltipBelow)
      y = math.min(core.double, dart.notNull(target.dy) + dart.notNull(verticalOffset), dart.notNull(size.height) - dart.notNull(margin));
    else
      y = math.max(core.double, dart.notNull(target.dy) - dart.notNull(verticalOffset) - dart.notNull(childSize.height), margin);
    let x = null;
    if (dart.notNull(size.width) - dart.notNull(margin) * 2.0 < dart.notNull(childSize.width)) {
      x = (dart.notNull(size.width) - dart.notNull(childSize.width)) / 2.0;
    } else {
      let normalizedTargetX = target.dx[$clamp](margin, dart.notNull(size.width) - dart.notNull(margin));
      let edge = dart.notNull(margin) + dart.notNull(childSize.width) / 2.0;
      if (normalizedTargetX < edge) {
        x = margin;
      } else if (normalizedTargetX > dart.notNull(size.width) - edge) {
        x = dart.notNull(size.width) - dart.notNull(margin) - dart.notNull(childSize.width);
      } else {
        x = normalizedTargetX - dart.notNull(childSize.width) / 2.0;
      }
    }
    return new ui$.Offset.new(x, y);
  };
  src__painting__gradient._ColorsAndStops = class _ColorsAndStops extends core.Object {};
  (src__painting__gradient._ColorsAndStops.new = function(colors, stops) {
    this.colors = colors;
    this.stops = stops;
    ;
  }).prototype = src__painting__gradient._ColorsAndStops.prototype;
  dart.addTypeTests(src__painting__gradient._ColorsAndStops);
  dart.setLibraryUri(src__painting__gradient._ColorsAndStops, "package:flutter_web/src/painting/gradient.dart");
  dart.setFieldSignature(src__painting__gradient._ColorsAndStops, () => ({
    __proto__: dart.getFields(src__painting__gradient._ColorsAndStops.__proto__),
    colors: dart.finalFieldType(core.List$(ui$.Color)),
    stops: dart.finalFieldType(core.List$(core.double))
  }));
  const _impliedStops = dart.privateName(src__painting__gradient, "_impliedStops");
  src__painting__gradient.Gradient = class Gradient extends core.Object {
    get colors() {
      return this[colors$];
    }
    set colors(value) {
      super.colors = value;
    }
    get stops() {
      return this[stops$];
    }
    set stops(value) {
      super.stops = value;
    }
    [_impliedStops]() {
      if (this.stops != null) return this.stops;
      if (this.colors[$length] === 2) return null;
      if (!(dart.notNull(this.colors[$length]) >= 2)) dart.assertFailed("colors list must have at least two colors", "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 93, 12, "colors.length >= 2");
      let separation = 1.0 / (dart.notNull(this.colors[$length]) - 1);
      return ListOfdouble().generate(this.colors[$length], dart.fn(index => dart.notNull(index) * separation, intTodouble()), {growable: false});
    }
    lerpFrom(a, t) {
      if (a == null) return this.scale(t);
      return null;
    }
    lerpTo(b, t) {
      if (b == null) return this.scale(1.0 - dart.notNull(t));
      return null;
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 201, 12, "t != null");
      let result = null;
      if (b != null) result = b.lerpFrom(a, t);
      if (result == null && a != null) result = a.lerpTo(b, t);
      if (result != null) return result;
      if (a == null && b == null) return null;
      if (!(a != null && b != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 209, 12, "a != null && b != null");
      return dart.notNull(t) < 0.5 ? a.scale(1.0 - dart.notNull(t) * 2.0) : b.scale((dart.notNull(t) - 0.5) * 2.0);
    }
  };
  (src__painting__gradient.Gradient.new = function(opts) {
    let colors = opts && 'colors' in opts ? opts.colors : null;
    let stops = opts && 'stops' in opts ? opts.stops : null;
    this[colors$] = colors;
    this[stops$] = stops;
    if (!(colors != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 62, 15, "colors != null");
    ;
  }).prototype = src__painting__gradient.Gradient.prototype;
  dart.addTypeTests(src__painting__gradient.Gradient);
  const colors$ = Symbol("Gradient.colors");
  const stops$ = Symbol("Gradient.stops");
  dart.setMethodSignature(src__painting__gradient.Gradient, () => ({
    __proto__: dart.getMethods(src__painting__gradient.Gradient.__proto__),
    [_impliedStops]: dart.fnType(core.List$(core.double), []),
    lerpFrom: dart.fnType(src__painting__gradient.Gradient, [src__painting__gradient.Gradient, core.double]),
    lerpTo: dart.fnType(src__painting__gradient.Gradient, [src__painting__gradient.Gradient, core.double])
  }));
  dart.setLibraryUri(src__painting__gradient.Gradient, "package:flutter_web/src/painting/gradient.dart");
  dart.setFieldSignature(src__painting__gradient.Gradient, () => ({
    __proto__: dart.getFields(src__painting__gradient.Gradient.__proto__),
    colors: dart.finalFieldType(core.List$(ui$.Color)),
    stops: dart.finalFieldType(core.List$(core.double))
  }));
  const _getDirectionCss = dart.privateName(src__painting__gradient, "_getDirectionCss");
  src__painting__gradient.LinearGradient = class LinearGradient extends src__painting__gradient.Gradient {
    get begin() {
      return this[begin$0];
    }
    set begin(value) {
      super.begin = value;
    }
    get end() {
      return this[end$0];
    }
    set end(value) {
      super.end = value;
    }
    get tileMode() {
      return this[tileMode$];
    }
    set tileMode(value) {
      super.tileMode = value;
    }
    createShader(rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      return ui$.Gradient.linear(this.begin.resolve(textDirection).withinRect(rect), this.end.resolve(textDirection).withinRect(rect), this.colors, this[_impliedStops](), this.tileMode);
    }
    scale(factor) {
      return new src__painting__gradient.LinearGradient.new({begin: this.begin, end: this.end, colors: this.colors[$map](ui$.Color, dart.fn(color => ui$.Color.lerp(null, color, factor), ColorToColor()))[$toList](), stops: this.stops, tileMode: this.tileMode});
    }
    toCssString() {
      let buffer = new core.StringBuffer.new();
      if (dart.equals(this.tileMode, ui$.TileMode.repeated)) {
        buffer.write("repeating-");
      }
      buffer.write("linear-gradient(");
      let direction = this[_getDirectionCss]();
      if (direction != null) {
        buffer.write(direction);
        buffer.write(", ");
      }
      if (this.stops == null) {
        buffer.write(this.colors[$map](core.String, dart.fn(c => c.toCssString(), ColorToString()))[$join](", "));
      } else {
        if (this.colors[$length] != this.stops[$length]) {
          dart.throw(new core.ArgumentError.new("'colors' and 'stops' must be the same length."));
        }
        for (let i = 0; i < dart.notNull(this.colors[$length]); i = i + 1) {
          buffer.write(this.colors[$_get](i).toCssString());
          buffer.write(" ");
          buffer.write(dart.notNull(this.stops[$_get](i)) * 100);
          buffer.write("%");
          if (i !== dart.notNull(this.colors[$length]) - 1) {
            buffer.write(", ");
          }
        }
      }
      buffer.write(")");
      return buffer.toString();
    }
    [_getDirectionCss]() {
      if (dart.equals(this.begin, src__painting__alignment.Alignment.topCenter) && dart.equals(this.end, src__painting__alignment.Alignment.bottomCenter)) {
        return null;
      }
      if (dart.equals(this.begin, src__painting__alignment.Alignment.bottomCenter) && dart.equals(this.end, src__painting__alignment.Alignment.topCenter)) {
        return "to top";
      }
      if (dart.equals(this.begin, src__painting__alignment.Alignment.centerLeft) && dart.equals(this.end, src__painting__alignment.Alignment.centerRight)) {
        return "to right";
      }
      if (dart.equals(this.begin, src__painting__alignment.Alignment.centerRight) && dart.equals(this.end, src__painting__alignment.Alignment.centerLeft)) {
        return "to left";
      }
      if (dart.equals(this.begin, src__painting__alignment.Alignment.topLeft) && dart.equals(this.end, src__painting__alignment.Alignment.bottomRight)) {
        return "to bottom right";
      }
      if (dart.equals(this.begin, src__painting__alignment.Alignment.bottomLeft) && dart.equals(this.end, src__painting__alignment.Alignment.topRight)) {
        return "to top right";
      }
      if (dart.equals(this.begin, src__painting__alignment.Alignment.topRight) && dart.equals(this.end, src__painting__alignment.Alignment.bottomLeft)) {
        return "to bottom left";
      }
      if (dart.equals(this.begin, src__painting__alignment.Alignment.bottomRight) && dart.equals(this.end, src__painting__alignment.Alignment.topLeft)) {
        return "to top left";
      }
      let beginAlignment = src__painting__alignment.Alignment._check(this.begin);
      let endAlignment = src__painting__alignment.Alignment._check(this.end);
      let angle = math.atan2(dart.notNull(endAlignment.y) - dart.notNull(beginAlignment.y), dart.notNull(endAlignment.x) - dart.notNull(beginAlignment.x));
      return angle[$toStringAsFixed](4) + "rad";
    }
    lerpFrom(a, t) {
      if (a == null || src__painting__gradient.LinearGradient.is(a) && a.colors[$length] == this.colors[$length]) return src__painting__gradient.LinearGradient.lerp(src__painting__gradient.LinearGradient._check(a), this, t);
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (b == null || src__painting__gradient.LinearGradient.is(b) && b.colors[$length] == this.colors[$length]) return src__painting__gradient.LinearGradient.lerp(this, src__painting__gradient.LinearGradient._check(b), t);
      return super.lerpTo(b, t);
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 464, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b.scale(t);
      if (b == null) return a.scale(1.0 - dart.notNull(t));
      let interpolated = src__painting__gradient._interpolateColorsAndStops(a.colors, a.stops, b.colors, b.stops, t);
      return new src__painting__gradient.LinearGradient.new({begin: src__painting__alignment.AlignmentGeometry.lerp(a.begin, b.begin, t), end: src__painting__alignment.AlignmentGeometry.lerp(a.end, b.end, t), colors: interpolated.colors, stops: interpolated.stops, tileMode: dart.notNull(t) < 0.5 ? a.tileMode : b.tileMode});
    }
    get hashCode() {
      return ui$.hashValues(this.begin, this.end, this.tileMode, ui$.hashList(this.colors), ui$.hashList(this.stops));
    }
    _equals(other) {
      if (other == null) return false;
      let t7, t7$, t7$0, t7$1;
      if (this === other) return true;
      if (!src__painting__gradient.LinearGradient.is(other)) return false;
      let typedOther = src__painting__gradient.LinearGradient._check(other);
      if (!dart.equals(this.begin, typedOther.begin) || !dart.equals(this.end, typedOther.end) || !dart.equals(this.tileMode, typedOther.tileMode) || (t7 = this.colors, t7 == null ? null : t7[$length]) != (t7$ = typedOther.colors, t7$ == null ? null : t7$[$length]) || (t7$0 = this.stops, t7$0 == null ? null : t7$0[$length]) != (t7$1 = typedOther.stops, t7$1 == null ? null : t7$1[$length])) return false;
      if (this.colors != null) {
        if (!(typedOther.colors != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 494, 14, "typedOther.colors != null");
        if (!(this.colors[$length] == typedOther.colors[$length])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 495, 14, "colors.length == typedOther.colors.length");
        for (let i = 0; i < dart.notNull(this.colors[$length]); i = i + 1) {
          if (!dart.equals(this.colors[$_get](i), typedOther.colors[$_get](i))) return false;
        }
      }
      if (this.stops != null) {
        if (!(typedOther.stops != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 501, 14, "typedOther.stops != null");
        if (!(this.stops[$length] == typedOther.stops[$length])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 502, 14, "stops.length == typedOther.stops.length");
        for (let i = 0; i < dart.notNull(this.stops[$length]); i = i + 1) {
          if (this.stops[$_get](i) != typedOther.stops[$_get](i)) return false;
        }
      }
      return true;
    }
    toString() {
      if (dart.test(src__util.assertionsEnabled)) {
        return "LinearGradient(" + dart.str(this.begin) + ", " + dart.str(this.end) + ", " + dart.str(this.colors) + ", " + dart.str(this.stops) + ", " + dart.str(this.tileMode) + ")";
      } else {
        return super[$toString]();
      }
    }
  };
  (src__painting__gradient.LinearGradient.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : src__painting__alignment.Alignment.centerLeft;
    let end = opts && 'end' in opts ? opts.end : src__painting__alignment.Alignment.centerRight;
    let colors = opts && 'colors' in opts ? opts.colors : null;
    let stops = opts && 'stops' in opts ? opts.stops : null;
    let tileMode = opts && 'tileMode' in opts ? opts.tileMode : ui$.TileMode.clamp;
    this[begin$0] = begin;
    this[end$0] = end;
    this[tileMode$] = tileMode;
    if (!(begin != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 276, 16, "begin != null");
    if (!(end != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 277, 16, "end != null");
    if (!(tileMode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 278, 16, "tileMode != null");
    src__painting__gradient.LinearGradient.__proto__.new.call(this, {colors: colors, stops: stops});
    ;
  }).prototype = src__painting__gradient.LinearGradient.prototype;
  dart.addTypeTests(src__painting__gradient.LinearGradient);
  const begin$0 = Symbol("LinearGradient.begin");
  const end$0 = Symbol("LinearGradient.end");
  const tileMode$ = Symbol("LinearGradient.tileMode");
  dart.setMethodSignature(src__painting__gradient.LinearGradient, () => ({
    __proto__: dart.getMethods(src__painting__gradient.LinearGradient.__proto__),
    createShader: dart.fnType(ui$.Shader, [ui$.Rect], {textDirection: ui$.TextDirection}),
    scale: dart.fnType(src__painting__gradient.LinearGradient, [core.double]),
    toCssString: dart.fnType(core.String, []),
    [_getDirectionCss]: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(src__painting__gradient.LinearGradient, "package:flutter_web/src/painting/gradient.dart");
  dart.setFieldSignature(src__painting__gradient.LinearGradient, () => ({
    __proto__: dart.getFields(src__painting__gradient.LinearGradient.__proto__),
    begin: dart.finalFieldType(src__painting__alignment.AlignmentGeometry),
    end: dart.finalFieldType(src__painting__alignment.AlignmentGeometry),
    tileMode: dart.finalFieldType(ui$.TileMode)
  }));
  dart.defineExtensionMethods(src__painting__gradient.LinearGradient, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__painting__gradient.LinearGradient, ['hashCode']);
  src__painting__gradient.RadialGradient = class RadialGradient extends src__painting__gradient.Gradient {
    get center() {
      return this[center$];
    }
    set center(value) {
      super.center = value;
    }
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      super.radius = value;
    }
    get tileMode() {
      return this[tileMode$0];
    }
    set tileMode(value) {
      super.tileMode = value;
    }
    scale(factor) {
      return new src__painting__gradient.RadialGradient.new({center: this.center, radius: this.radius, colors: this.colors[$map](ui$.Color, dart.fn(color => ui$.Color.lerp(null, color, factor), ColorToColor()))[$toList](), stops: this.stops, tileMode: this.tileMode});
    }
    createShader(rect, opts) {
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      dart.throw(new core.UnimplementedError.new());
    }
    toCssString() {
      dart.throw(new core.UnimplementedError.new());
    }
    lerpFrom(a, t) {
      if (a == null || src__painting__gradient.RadialGradient.is(a) && a.colors[$length] == this.colors[$length]) return src__painting__gradient.RadialGradient.lerp(src__painting__gradient.RadialGradient._check(a), this, t);
      return super.lerpFrom(a, t);
    }
    lerpTo(b, t) {
      if (b == null || src__painting__gradient.RadialGradient.is(b) && b.colors[$length] == this.colors[$length]) return src__painting__gradient.RadialGradient.lerp(this, src__painting__gradient.RadialGradient._check(b), t);
      return super.lerpTo(b, t);
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 692, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b.scale(t);
      if (b == null) return a.scale(1.0 - dart.notNull(t));
      let interpolated = src__painting__gradient._interpolateColorsAndStops(a.colors, a.stops, b.colors, b.stops, t);
      return new src__painting__gradient.RadialGradient.new({center: src__painting__alignment.AlignmentGeometry.lerp(a.center, b.center, t), radius: math.max(core.double, 0.0, ui$.lerpDouble(a.radius, b.radius, t)), colors: interpolated.colors, stops: interpolated.stops, tileMode: dart.notNull(t) < 0.5 ? a.tileMode : b.tileMode});
    }
    get hashCode() {
      return ui$.hashValues(this.center, this.radius, this.tileMode, ui$.hashList(this.colors), ui$.hashList(this.stops));
    }
    _equals(other) {
      if (other == null) return false;
      let t7, t7$, t7$0, t7$1;
      if (this === other) return true;
      if (!src__painting__gradient.RadialGradient.is(other)) return false;
      let typedOther = src__painting__gradient.RadialGradient._check(other);
      if (!dart.equals(this.center, typedOther.center) || this.radius != typedOther.radius || !dart.equals(this.tileMode, typedOther.tileMode) || (t7 = this.colors, t7 == null ? null : t7[$length]) != (t7$ = typedOther.colors, t7$ == null ? null : t7$[$length]) || (t7$0 = this.stops, t7$0 == null ? null : t7$0[$length]) != (t7$1 = typedOther.stops, t7$1 == null ? null : t7$1[$length])) return false;
      if (this.colors != null) {
        if (!(typedOther.colors != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 722, 14, "typedOther.colors != null");
        if (!(this.colors[$length] == typedOther.colors[$length])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 723, 14, "colors.length == typedOther.colors.length");
        for (let i = 0; i < dart.notNull(this.colors[$length]); i = i + 1) {
          if (!dart.equals(this.colors[$_get](i), typedOther.colors[$_get](i))) return false;
        }
      }
      if (this.stops != null) {
        if (!(typedOther.stops != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 729, 14, "typedOther.stops != null");
        if (!(this.stops[$length] == typedOther.stops[$length])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 730, 14, "stops.length == typedOther.stops.length");
        for (let i = 0; i < dart.notNull(this.stops[$length]); i = i + 1) {
          if (this.stops[$_get](i) != typedOther.stops[$_get](i)) return false;
        }
      }
      return true;
    }
    toString() {
      if (dart.test(src__util.assertionsEnabled)) {
        return "RadialGradient(" + dart.str(this.center) + ", " + dart.str(this.radius) + ", " + dart.str(this.colors) + ", " + dart.str(this.stops) + ", " + dart.str(this.tileMode) + ")";
      } else {
        return super[$toString]();
      }
    }
  };
  (src__painting__gradient.RadialGradient.new = function(opts) {
    let center = opts && 'center' in opts ? opts.center : src__painting__alignment.Alignment.center;
    let radius = opts && 'radius' in opts ? opts.radius : 0.5;
    let colors = opts && 'colors' in opts ? opts.colors : null;
    let stops = opts && 'stops' in opts ? opts.stops : null;
    let tileMode = opts && 'tileMode' in opts ? opts.tileMode : ui$.TileMode.clamp;
    this[center$] = center;
    this[radius$] = radius;
    this[tileMode$0] = tileMode;
    if (!(center != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 586, 16, "center != null");
    if (!(radius != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 587, 16, "radius != null");
    if (!(tileMode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 588, 16, "tileMode != null");
    src__painting__gradient.RadialGradient.__proto__.new.call(this, {colors: colors, stops: stops});
    ;
  }).prototype = src__painting__gradient.RadialGradient.prototype;
  dart.addTypeTests(src__painting__gradient.RadialGradient);
  const center$ = Symbol("RadialGradient.center");
  const radius$ = Symbol("RadialGradient.radius");
  const tileMode$0 = Symbol("RadialGradient.tileMode");
  dart.setMethodSignature(src__painting__gradient.RadialGradient, () => ({
    __proto__: dart.getMethods(src__painting__gradient.RadialGradient.__proto__),
    scale: dart.fnType(src__painting__gradient.RadialGradient, [core.double]),
    createShader: dart.fnType(ui$.Shader, [ui$.Rect], {textDirection: ui$.TextDirection}),
    toCssString: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(src__painting__gradient.RadialGradient, "package:flutter_web/src/painting/gradient.dart");
  dart.setFieldSignature(src__painting__gradient.RadialGradient, () => ({
    __proto__: dart.getFields(src__painting__gradient.RadialGradient.__proto__),
    center: dart.finalFieldType(src__painting__alignment.AlignmentGeometry),
    radius: dart.finalFieldType(core.double),
    tileMode: dart.finalFieldType(ui$.TileMode)
  }));
  dart.defineExtensionMethods(src__painting__gradient.RadialGradient, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__painting__gradient.RadialGradient, ['hashCode']);
  let const$;
  let const$0;
  src__painting__gradient._interpolateColorsAndStops = function(aColors, aStops, bColors, bStops, t) {
    if (!(aColors[$length] == bColors[$length])) dart.assertFailed("Cannot interpolate between two gradients with " + "a different number of colors.", "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 23, 7, "aColors.length == bColors.length");
    if (!(aStops == null && aColors[$length] === 2 || aStops != null && aStops[$length] == aColors[$length])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 26, 10, "(aStops == null && aColors.length == 2) ||\n      (aStops != null && aStops.length == aColors.length)");
    if (!(bStops == null && bColors[$length] === 2 || bStops != null && bStops[$length] == bColors[$length])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 28, 10, "(bStops == null && bColors.length == 2) ||\n      (bStops != null && bStops.length == bColors.length)");
    let interpolatedColors = JSArrayOfColor().of([]);
    for (let i = 0; i < dart.notNull(aColors[$length]); i = i + 1)
      interpolatedColors[$add](ui$.Color.lerp(aColors[$_get](i), bColors[$_get](i), t));
    let interpolatedStops = null;
    if (aStops != null || bStops != null) {
      aStops == null ? aStops = const$ || (const$ = dart.constList([0.0, 1.0], core.double)) : null;
      bStops == null ? bStops = const$0 || (const$0 = dart.constList([0.0, 1.0], core.double)) : null;
      if (!(aStops[$length] == bStops[$length])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart", 37, 12, "aStops.length == bStops.length");
      interpolatedStops = JSArrayOfdouble().of([]);
      for (let i = 0; i < dart.notNull(aStops[$length]); i = i + 1)
        interpolatedStops[$add](ui$.lerpDouble(aStops[$_get](i), bStops[$_get](i), t)[$clamp](0.0, 1.0));
    }
    return new src__painting__gradient._ColorsAndStops.new(interpolatedColors, interpolatedStops);
  };
  let const$1;
  src__painting__text_span.TextSpan = class TextSpan extends src__foundation__diagnostics.DiagnosticableTree {
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
    get recognizer() {
      return this[recognizer$];
    }
    set recognizer(value) {
      super.recognizer = value;
    }
    get semanticsLabel() {
      return this[semanticsLabel$];
    }
    set semanticsLabel(value) {
      super.semanticsLabel = value;
    }
    build(builder, opts) {
      let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1.0;
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_span.dart", 181, 12, "debugAssertIsValid()");
      let hasStyle = this.style != null;
      if (hasStyle) builder.pushStyle(this.style.getTextStyle({textScaleFactor: textScaleFactor}));
      if (this.text != null) builder.addText(this.text);
      if (this.children != null) {
        for (let child of this.children) {
          if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_span.dart", 188, 16, "child != null");
          child.build(builder, {textScaleFactor: textScaleFactor});
        }
      }
      if (hasStyle) builder.pop();
    }
    visitTextSpan(visitor) {
      if (this.text != null) {
        if (!dart.test(visitor(this))) return false;
      }
      if (this.children != null) {
        for (let child of this.children) {
          if (!dart.test(child.visitTextSpan(visitor))) return false;
        }
      }
      return true;
    }
    getSpanForPosition(position) {
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_span.dart", 211, 12, "debugAssertIsValid()");
      let affinity = position.affinity;
      let targetOffset = position.offset;
      let offset = 0;
      let result = null;
      this.visitTextSpan(dart.fn(span => {
        if (!(result == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_span.dart", 217, 14, "result == null");
        let endOffset = offset + span.text.length;
        if (targetOffset === offset && dart.equals(affinity, ui$.TextAffinity.downstream) || dart.notNull(targetOffset) > offset && dart.notNull(targetOffset) < endOffset || targetOffset === endOffset && dart.equals(affinity, ui$.TextAffinity.upstream)) {
          result = span;
          return false;
        }
        offset = endOffset;
        return true;
      }, TextSpanTobool()));
      return result;
    }
    toPlainText(opts) {
      let includeSemanticsLabels = opts && 'includeSemanticsLabels' in opts ? opts.includeSemanticsLabels : true;
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_span.dart", 237, 12, "debugAssertIsValid()");
      let buffer = new core.StringBuffer.new();
      this.visitTextSpan(dart.fn(span => {
        if (span.semanticsLabel != null && dart.test(includeSemanticsLabels)) {
          buffer.write(span.semanticsLabel);
        } else {
          buffer.write(span.text);
        }
        return true;
      }, TextSpanTobool()));
      return buffer.toString();
    }
    codeUnitAt(index) {
      if (dart.notNull(index) < 0) return null;
      let offset = 0;
      let result = null;
      this.visitTextSpan(dart.fn(span => {
        if (dart.notNull(index) - offset < span.text.length) {
          result = span.text[$codeUnitAt](dart.notNull(index) - offset);
          return false;
        }
        offset = offset + span.text.length;
        return true;
      }, TextSpanTobool()));
      return result;
    }
    debugAssertIsValid() {
      if (!dart.test(dart.fn(() => {
        if (!dart.test(this.visitTextSpan(dart.fn(span => {
          if (span.children != null) {
            for (let child of span.children) {
              if (child == null) return false;
            }
          }
          return true;
        }, TextSpanTobool())))) {
          dart.throw(src__foundation__assertions.FlutterError.new("TextSpan contains a null child.\n" + "A TextSpan object with a non-null child list should not have any nulls in its child list.\n" + "The full text in question was:\n" + dart.str(this.toStringDeep({prefixLineOne: "  "}))));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_span.dart", 277, 12, "() {\n      if (!visitTextSpan((TextSpan span) {\n        if (span.children != null) {\n          for (TextSpan child in span.children) {\n            if (child == null) return false;\n          }\n        }\n        return true;\n      })) {\n        throw FlutterError('TextSpan contains a null child.\\n'\n            'A TextSpan object with a non-null child list should not have any nulls in its child list.\\n'\n            'The full text in question was:\\n'\n            '${toStringDeep(prefixLineOne: '  ')}');\n      }\n      return true;\n    }()");
      return true;
    }
    compareTo(other) {
      let t7, t7$;
      if (this === other) return src__painting__basic_types.RenderComparison.identical;
      if (other.text != this.text || (t7 = this.children, t7 == null ? null : t7[$length]) != (t7$ = other.children, t7$ == null ? null : t7$[$length]) || !(this.style == null)[$_equals](other.style == null)) return src__painting__basic_types.RenderComparison.layout;
      let result = dart.equals(this.recognizer, other.recognizer) ? src__painting__basic_types.RenderComparison.identical : src__painting__basic_types.RenderComparison.metadata;
      if (this.style != null) {
        let candidate = this.style.compareTo(other.style);
        if (dart.notNull(candidate.index) > dart.notNull(result.index)) result = candidate;
        if (dart.equals(result, src__painting__basic_types.RenderComparison.layout)) return result;
      }
      if (this.children != null) {
        for (let index = 0; index < dart.notNull(this.children[$length]); index = index + 1) {
          let candidate = this.children[$_get](index).compareTo(other.children[$_get](index));
          if (dart.notNull(candidate.index) > dart.notNull(result.index)) result = candidate;
          if (dart.equals(result, src__painting__basic_types.RenderComparison.layout)) return result;
        }
      }
      return result;
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__painting__text_span.TextSpan._check(other);
      return typedOther.text == this.text && dart.equals(typedOther.style, this.style) && dart.equals(typedOther.recognizer, this.recognizer) && typedOther.semanticsLabel == this.semanticsLabel && dart.test(src__foundation__collections.listEquals(src__painting__text_span.TextSpan, typedOther.children, this.children));
    }
    get hashCode() {
      return ui$.hashValues(this.style, this.text, this.recognizer, this.semanticsLabel, ui$.hashList(this.children));
    }
    toStringShort() {
      return dart.str(this[$runtimeType]);
    }
    debugFillProperties(properties) {
      let t7, t7$;
      super.debugFillProperties(properties);
      properties.defaultDiagnosticsTreeStyle = src__foundation__diagnostics.DiagnosticsTreeStyle.whitespace;
      if (this.style != null) this.style.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfGestureRecognizer()).new("recognizer", this.recognizer, {description: (t7$ = (t7 = this.recognizer, t7 == null ? null : dart.runtimeType(t7)), t7$ == null ? null : dart.toString(t7$)), defaultValue: null}));
      if (this.semanticsLabel != null) {
        properties.add(new src__foundation__diagnostics.StringProperty.new("semanticsLabel", this.semanticsLabel));
      }
      properties.add(new src__foundation__diagnostics.StringProperty.new("text", this.text, {showName: false, defaultValue: null}));
      if (this.style == null && this.text == null && this.children == null) properties.add(src__foundation__diagnostics.DiagnosticsNode.message("(empty)"));
    }
    debugDescribeChildren() {
      if (this.children == null) return const$1 || (const$1 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
      return this.children[$map](src__foundation__diagnostics.DiagnosticsNode, dart.fn(child => {
        if (child != null) {
          return child.toDiagnosticsNode();
        } else {
          return src__foundation__diagnostics.DiagnosticsNode.message("<null child>");
        }
      }, TextSpanToDiagnosticsNode()))[$toList]();
    }
  };
  (src__painting__text_span.TextSpan.new = function(opts) {
    let style = opts && 'style' in opts ? opts.style : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let recognizer = opts && 'recognizer' in opts ? opts.recognizer : null;
    let semanticsLabel = opts && 'semanticsLabel' in opts ? opts.semanticsLabel : null;
    this[style$] = style;
    this[text$] = text;
    this[children$] = children;
    this[recognizer$] = recognizer;
    this[semanticsLabel$] = semanticsLabel;
    src__painting__text_span.TextSpan.__proto__.new.call(this);
    ;
  }).prototype = src__painting__text_span.TextSpan.prototype;
  dart.addTypeTests(src__painting__text_span.TextSpan);
  const style$ = Symbol("TextSpan.style");
  const text$ = Symbol("TextSpan.text");
  const children$ = Symbol("TextSpan.children");
  const recognizer$ = Symbol("TextSpan.recognizer");
  const semanticsLabel$ = Symbol("TextSpan.semanticsLabel");
  dart.setMethodSignature(src__painting__text_span.TextSpan, () => ({
    __proto__: dart.getMethods(src__painting__text_span.TextSpan.__proto__),
    build: dart.fnType(dart.void, [ui$.ParagraphBuilder], {textScaleFactor: core.double}),
    visitTextSpan: dart.fnType(core.bool, [dart.fnType(core.bool, [src__painting__text_span.TextSpan])]),
    getSpanForPosition: dart.fnType(src__painting__text_span.TextSpan, [ui$.TextPosition]),
    toPlainText: dart.fnType(core.String, [], {includeSemanticsLabels: core.bool}),
    codeUnitAt: dart.fnType(core.int, [core.int]),
    debugAssertIsValid: dart.fnType(core.bool, []),
    compareTo: dart.fnType(src__painting__basic_types.RenderComparison, [src__painting__text_span.TextSpan])
  }));
  dart.setLibraryUri(src__painting__text_span.TextSpan, "package:flutter_web/src/painting/text_span.dart");
  dart.setFieldSignature(src__painting__text_span.TextSpan, () => ({
    __proto__: dart.getFields(src__painting__text_span.TextSpan.__proto__),
    style: dart.finalFieldType(src__painting__text_style.TextStyle),
    text: dart.finalFieldType(core.String),
    children: dart.finalFieldType(core.List$(src__painting__text_span.TextSpan)),
    recognizer: dart.finalFieldType(src__gestures__recognizer.GestureRecognizer),
    semanticsLabel: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__painting__text_span.TextSpan, ['_equals']);
  dart.defineExtensionAccessors(src__painting__text_span.TextSpan, ['hashCode']);
  const _fontFamilyFallback = dart.privateName(src__painting__text_style, "_fontFamilyFallback");
  const _package = dart.privateName(src__painting__text_style, "_package");
  src__painting__text_style.TextStyle = class TextStyle extends src__foundation__diagnostics.Diagnosticable {
    get inherit() {
      return this[inherit$];
    }
    set inherit(value) {
      super.inherit = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get fontFamily() {
      return this[fontFamily$];
    }
    set fontFamily(value) {
      super.fontFamily = value;
    }
    get fontSize() {
      return this[fontSize$];
    }
    set fontSize(value) {
      super.fontSize = value;
    }
    get fontWeight() {
      return this[fontWeight$];
    }
    set fontWeight(value) {
      super.fontWeight = value;
    }
    get fontStyle() {
      return this[fontStyle$];
    }
    set fontStyle(value) {
      super.fontStyle = value;
    }
    get letterSpacing() {
      return this[letterSpacing$];
    }
    set letterSpacing(value) {
      super.letterSpacing = value;
    }
    get wordSpacing() {
      return this[wordSpacing$];
    }
    set wordSpacing(value) {
      super.wordSpacing = value;
    }
    get textBaseline() {
      return this[textBaseline$];
    }
    set textBaseline(value) {
      super.textBaseline = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get locale() {
      return this[locale$0];
    }
    set locale(value) {
      super.locale = value;
    }
    get foreground() {
      return this[foreground$];
    }
    set foreground(value) {
      super.foreground = value;
    }
    get background() {
      return this[background$];
    }
    set background(value) {
      super.background = value;
    }
    get decoration() {
      return this[decoration$];
    }
    set decoration(value) {
      super.decoration = value;
    }
    get decorationColor() {
      return this[decorationColor$];
    }
    set decorationColor(value) {
      super.decorationColor = value;
    }
    get decorationStyle() {
      return this[decorationStyle$];
    }
    set decorationStyle(value) {
      super.decorationStyle = value;
    }
    get decorationThickness() {
      return this[decorationThickness$];
    }
    set decorationThickness(value) {
      super.decorationThickness = value;
    }
    get debugLabel() {
      return this[debugLabel$];
    }
    set debugLabel(value) {
      super.debugLabel = value;
    }
    get shadows() {
      return this[shadows$];
    }
    set shadows(value) {
      super.shadows = value;
    }
    get fontFamilyFallback() {
      return this[_package] != null && this[_fontFamilyFallback] != null ? this[_fontFamilyFallback][$map](core.String, dart.fn(str => "packages/" + dart.str(this[_package]) + "/" + dart.str(str), StringToString()))[$toList]() : this[_fontFamilyFallback];
    }
    copyWith(opts) {
      let t7, t7$, t7$0, t7$1, t7$2, t7$3, t7$4, t7$5, t7$6, t7$7, t7$8, t7$9, t7$10, t7$11, t7$12, t7$13, t7$14, t7$15, t7$16, t7$17;
      let inherit = opts && 'inherit' in opts ? opts.inherit : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
      let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
      let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
      let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
      let letterSpacing = opts && 'letterSpacing' in opts ? opts.letterSpacing : null;
      let wordSpacing = opts && 'wordSpacing' in opts ? opts.wordSpacing : null;
      let textBaseline = opts && 'textBaseline' in opts ? opts.textBaseline : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let foreground = opts && 'foreground' in opts ? opts.foreground : null;
      let background = opts && 'background' in opts ? opts.background : null;
      let shadows = opts && 'shadows' in opts ? opts.shadows : null;
      let decoration = opts && 'decoration' in opts ? opts.decoration : null;
      let decorationColor = opts && 'decorationColor' in opts ? opts.decorationColor : null;
      let decorationStyle = opts && 'decorationStyle' in opts ? opts.decorationStyle : null;
      let decorationThickness = opts && 'decorationThickness' in opts ? opts.decorationThickness : null;
      let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
      if (!(color == null || foreground == null)) dart.assertFailed(src__painting__text_style._kColorForegroundWarning, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 607, 12, "color == null || foreground == null");
      if (!(backgroundColor == null || background == null)) dart.assertFailed(src__painting__text_style._kColorBackgroundWarning, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 608, 12, "backgroundColor == null || background == null");
      let newDebugLabel = null;
      if (!dart.test(dart.fn(() => {
        let t7;
        if (this.debugLabel != null) newDebugLabel = (t7 = debugLabel, t7 == null ? "(" + dart.str(this.debugLabel) + ").copyWith" : t7);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 611, 12, "() {\n      if (this.debugLabel != null)\n        newDebugLabel = debugLabel ?? '(${this.debugLabel}).copyWith';\n      return true;\n    }()");
      return new src__painting__text_style.TextStyle.new({inherit: (t7 = inherit, t7 == null ? this.inherit : t7), color: this.foreground == null && foreground == null ? (t7$ = color, t7$ == null ? this.color : t7$) : null, backgroundColor: this.background == null && background == null ? (t7$0 = backgroundColor, t7$0 == null ? this.backgroundColor : t7$0) : null, fontFamily: (t7$1 = fontFamily, t7$1 == null ? this.fontFamily : t7$1), fontFamilyFallback: (t7$2 = fontFamilyFallback, t7$2 == null ? this.fontFamilyFallback : t7$2), fontSize: (t7$3 = fontSize, t7$3 == null ? this.fontSize : t7$3), fontWeight: (t7$4 = fontWeight, t7$4 == null ? this.fontWeight : t7$4), fontStyle: (t7$5 = fontStyle, t7$5 == null ? this.fontStyle : t7$5), letterSpacing: (t7$6 = letterSpacing, t7$6 == null ? this.letterSpacing : t7$6), wordSpacing: (t7$7 = wordSpacing, t7$7 == null ? this.wordSpacing : t7$7), textBaseline: (t7$8 = textBaseline, t7$8 == null ? this.textBaseline : t7$8), height: (t7$9 = height, t7$9 == null ? this.height : t7$9), locale: (t7$10 = locale, t7$10 == null ? this.locale : t7$10), foreground: (t7$11 = foreground, t7$11 == null ? this.foreground : t7$11), background: (t7$12 = background, t7$12 == null ? this.background : t7$12), shadows: (t7$13 = shadows, t7$13 == null ? this.shadows : t7$13), decoration: (t7$14 = decoration, t7$14 == null ? this.decoration : t7$14), decorationColor: (t7$15 = decorationColor, t7$15 == null ? this.decorationColor : t7$15), decorationStyle: (t7$16 = decorationStyle, t7$16 == null ? this.decorationStyle : t7$16), decorationThickness: (t7$17 = decorationThickness, t7$17 == null ? this.decorationThickness : t7$17), debugLabel: newDebugLabel});
    }
    apply(opts) {
      let t7, t7$, t7$0, t7$1, t7$2, t7$3, t7$4;
      let color = opts && 'color' in opts ? opts.color : null;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let decoration = opts && 'decoration' in opts ? opts.decoration : null;
      let decorationColor = opts && 'decorationColor' in opts ? opts.decorationColor : null;
      let decorationStyle = opts && 'decorationStyle' in opts ? opts.decorationStyle : null;
      let decorationThicknessFactor = opts && 'decorationThicknessFactor' in opts ? opts.decorationThicknessFactor : 1.0;
      let decorationThicknessDelta = opts && 'decorationThicknessDelta' in opts ? opts.decorationThicknessDelta : 0.0;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
      let fontSizeFactor = opts && 'fontSizeFactor' in opts ? opts.fontSizeFactor : 1.0;
      let fontSizeDelta = opts && 'fontSizeDelta' in opts ? opts.fontSizeDelta : 0.0;
      let fontWeightDelta = opts && 'fontWeightDelta' in opts ? opts.fontWeightDelta : 0;
      let letterSpacingFactor = opts && 'letterSpacingFactor' in opts ? opts.letterSpacingFactor : 1.0;
      let letterSpacingDelta = opts && 'letterSpacingDelta' in opts ? opts.letterSpacingDelta : 0.0;
      let wordSpacingFactor = opts && 'wordSpacingFactor' in opts ? opts.wordSpacingFactor : 1.0;
      let wordSpacingDelta = opts && 'wordSpacingDelta' in opts ? opts.wordSpacingDelta : 0.0;
      let heightFactor = opts && 'heightFactor' in opts ? opts.heightFactor : 1.0;
      let heightDelta = opts && 'heightDelta' in opts ? opts.heightDelta : 0.0;
      if (!(fontSizeFactor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 694, 12, "fontSizeFactor != null");
      if (!(fontSizeDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 695, 12, "fontSizeDelta != null");
      if (!(this.fontSize != null || fontSizeFactor === 1.0 && fontSizeDelta === 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 696, 12, "fontSize != null || (fontSizeFactor == 1.0 && fontSizeDelta == 0.0)");
      if (!(fontWeightDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 697, 12, "fontWeightDelta != null");
      if (!(this.fontWeight != null || fontWeightDelta === 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 698, 12, "fontWeight != null || fontWeightDelta == 0.0");
      if (!(letterSpacingFactor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 699, 12, "letterSpacingFactor != null");
      if (!(letterSpacingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 700, 12, "letterSpacingDelta != null");
      if (!(this.letterSpacing != null || letterSpacingFactor === 1.0 && letterSpacingDelta === 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 701, 12, "letterSpacing != null ||\n        (letterSpacingFactor == 1.0 && letterSpacingDelta == 0.0)");
      if (!(wordSpacingFactor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 703, 12, "wordSpacingFactor != null");
      if (!(wordSpacingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 704, 12, "wordSpacingDelta != null");
      if (!(this.wordSpacing != null || wordSpacingFactor === 1.0 && wordSpacingDelta === 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 705, 12, "wordSpacing != null ||\n        (wordSpacingFactor == 1.0 && wordSpacingDelta == 0.0)");
      if (!(heightFactor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 707, 12, "heightFactor != null");
      if (!(heightDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 708, 12, "heightDelta != null");
      if (!(heightFactor != null || heightFactor === 1.0 && heightDelta === 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 709, 12, "heightFactor != null || (heightFactor == 1.0 && heightDelta == 0.0)");
      if (!(decorationThicknessFactor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 710, 12, "decorationThicknessFactor != null");
      if (!(decorationThicknessDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 711, 12, "decorationThicknessDelta != null");
      if (!(this.decorationThickness != null || decorationThicknessFactor === 1.0 && decorationThicknessDelta === 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 712, 12, "decorationThickness != null ||\n        (decorationThicknessFactor == 1.0 && decorationThicknessDelta == 0.0)");
      let modifiedDebugLabel = null;
      if (!dart.test(dart.fn(() => {
        if (this.debugLabel != null) modifiedDebugLabel = "(" + dart.str(this.debugLabel) + ").apply";
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 716, 12, "() {\n      if (debugLabel != null) modifiedDebugLabel = '($debugLabel).apply';\n      return true;\n    }()");
      return new src__painting__text_style.TextStyle.new({inherit: this.inherit, color: this.foreground == null ? (t7 = color, t7 == null ? this.color : t7) : null, backgroundColor: this.background == null ? (t7$ = backgroundColor, t7$ == null ? this.backgroundColor : t7$) : null, fontFamily: (t7$0 = fontFamily, t7$0 == null ? this.fontFamily : t7$0), fontFamilyFallback: (t7$1 = fontFamilyFallback, t7$1 == null ? this.fontFamilyFallback : t7$1), fontSize: this.fontSize == null ? null : dart.notNull(this.fontSize) * dart.notNull(fontSizeFactor) + dart.notNull(fontSizeDelta), fontWeight: this.fontWeight == null ? null : ui$.FontWeight.values[$_get](dart.asInt((dart.notNull(this.fontWeight.index) + dart.notNull(fontWeightDelta))[$clamp](0, dart.notNull(ui$.FontWeight.values[$length]) - 1))), fontStyle: this.fontStyle, letterSpacing: this.letterSpacing == null ? null : dart.notNull(this.letterSpacing) * dart.notNull(letterSpacingFactor) + dart.notNull(letterSpacingDelta), wordSpacing: this.wordSpacing == null ? null : dart.notNull(this.wordSpacing) * dart.notNull(wordSpacingFactor) + dart.notNull(wordSpacingDelta), textBaseline: this.textBaseline, height: this.height == null ? null : dart.notNull(this.height) * dart.notNull(heightFactor) + dart.notNull(heightDelta), locale: this.locale, foreground: this.foreground, background: this.background, shadows: this.shadows, decoration: (t7$2 = decoration, t7$2 == null ? this.decoration : t7$2), decorationColor: (t7$3 = decorationColor, t7$3 == null ? this.decorationColor : t7$3), decorationStyle: (t7$4 = decorationStyle, t7$4 == null ? this.decorationStyle : t7$4), decorationThickness: this.decorationThickness == null ? null : dart.notNull(this.decorationThickness) * dart.notNull(decorationThicknessFactor) + dart.notNull(decorationThicknessDelta), debugLabel: modifiedDebugLabel});
    }
    merge(other) {
      if (other == null) return this;
      if (!dart.test(other.inherit)) return other;
      let mergedDebugLabel = null;
      if (!dart.test(dart.fn(() => {
        let t7, t7$;
        if (other.debugLabel != null || this.debugLabel != null) mergedDebugLabel = "(" + dart.str((t7 = this.debugLabel, t7 == null ? src__painting__text_style._kDefaultDebugLabel : t7)) + ").merge(" + dart.str((t7$ = other.debugLabel, t7$ == null ? src__painting__text_style._kDefaultDebugLabel : t7$)) + ")";
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 784, 12, "() {\n      if (other.debugLabel != null || debugLabel != null)\n        mergedDebugLabel =\n            '(${debugLabel ?? _kDefaultDebugLabel}).merge(${other.debugLabel ?? _kDefaultDebugLabel})';\n      return true;\n    }()");
      return this.copyWith({color: other.color, backgroundColor: other.backgroundColor, fontFamily: other.fontFamily, fontFamilyFallback: other.fontFamilyFallback, fontSize: other.fontSize, fontWeight: other.fontWeight, fontStyle: other.fontStyle, letterSpacing: other.letterSpacing, wordSpacing: other.wordSpacing, textBaseline: other.textBaseline, height: other.height, locale: other.locale, foreground: other.foreground, background: other.background, shadows: other.shadows, decoration: other.decoration, decorationColor: other.decorationColor, decorationStyle: other.decorationStyle, decorationThickness: other.decorationThickness, debugLabel: mergedDebugLabel});
    }
    static lerp(a, b, t) {
      let t7, t7$, t7$0, t7$1, t7$2, t7$3, t7$4, t7$5, t8, t7$6, t8$, t7$7, t8$0, t7$8, t8$1, t7$9, t7$10, t7$11;
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 829, 12, "t != null");
      if (!(a == null || b == null || dart.equals(a.inherit, b.inherit))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 830, 12, "a == null || b == null || a.inherit == b.inherit");
      if (a == null && b == null) {
        return null;
      }
      let lerpDebugLabel = null;
      if (!dart.test(dart.fn(() => {
        let t7, t7$, t7$0, t7$1;
        lerpDebugLabel = "lerp(" + dart.str((t7$ = (t7 = a, t7 == null ? null : t7.debugLabel), t7$ == null ? src__painting__text_style._kDefaultDebugLabel : t7$)) + " ⎯" + t[$toStringAsFixed](1) + "→ " + dart.str((t7$1 = (t7$0 = b, t7$0 == null ? null : t7$0.debugLabel), t7$1 == null ? src__painting__text_style._kDefaultDebugLabel : t7$1)) + ")";
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 836, 12, "() {\n      lerpDebugLabel =\n          'lerp(${a?.debugLabel ?? _kDefaultDebugLabel} ⎯${t.toStringAsFixed(1)}→ ${b?.debugLabel ?? _kDefaultDebugLabel})';\n      return true;\n   ");
      if (a == null) {
        return new src__painting__text_style.TextStyle.new({inherit: b.inherit, color: ui$.Color.lerp(null, b.color, t), backgroundColor: ui$.Color.lerp(null, b.backgroundColor, t), fontFamily: dart.notNull(t) < 0.5 ? null : b.fontFamily, fontFamilyFallback: dart.notNull(t) < 0.5 ? null : b.fontFamilyFallback, fontSize: dart.notNull(t) < 0.5 ? null : b.fontSize, fontWeight: ui$.FontWeight.lerp(null, b.fontWeight, t), fontStyle: dart.notNull(t) < 0.5 ? null : b.fontStyle, letterSpacing: dart.notNull(t) < 0.5 ? null : b.letterSpacing, wordSpacing: dart.notNull(t) < 0.5 ? null : b.wordSpacing, textBaseline: dart.notNull(t) < 0.5 ? null : b.textBaseline, height: dart.notNull(t) < 0.5 ? null : b.height, locale: dart.notNull(t) < 0.5 ? null : b.locale, foreground: dart.notNull(t) < 0.5 ? null : b.foreground, background: dart.notNull(t) < 0.5 ? null : b.background, decoration: dart.notNull(t) < 0.5 ? null : b.decoration, shadows: dart.notNull(t) < 0.5 ? null : b.shadows, decorationColor: ui$.Color.lerp(null, b.decorationColor, t), decorationStyle: dart.notNull(t) < 0.5 ? null : b.decorationStyle, decorationThickness: dart.notNull(t) < 0.5 ? null : b.decorationThickness, debugLabel: lerpDebugLabel});
      }
      if (b == null) {
        return new src__painting__text_style.TextStyle.new({inherit: a.inherit, color: ui$.Color.lerp(a.color, null, t), backgroundColor: ui$.Color.lerp(null, a.backgroundColor, t), fontFamily: dart.notNull(t) < 0.5 ? a.fontFamily : null, fontFamilyFallback: dart.notNull(t) < 0.5 ? a.fontFamilyFallback : null, fontSize: dart.notNull(t) < 0.5 ? a.fontSize : null, fontWeight: ui$.FontWeight.lerp(a.fontWeight, null, t), fontStyle: dart.notNull(t) < 0.5 ? a.fontStyle : null, letterSpacing: dart.notNull(t) < 0.5 ? a.letterSpacing : null, wordSpacing: dart.notNull(t) < 0.5 ? a.wordSpacing : null, textBaseline: dart.notNull(t) < 0.5 ? a.textBaseline : null, height: dart.notNull(t) < 0.5 ? a.height : null, locale: dart.notNull(t) < 0.5 ? a.locale : null, foreground: dart.notNull(t) < 0.5 ? a.foreground : null, background: dart.notNull(t) < 0.5 ? a.background : null, shadows: dart.notNull(t) < 0.5 ? a.shadows : null, decoration: dart.notNull(t) < 0.5 ? a.decoration : null, decorationColor: ui$.Color.lerp(a.decorationColor, null, t), decorationStyle: dart.notNull(t) < 0.5 ? a.decorationStyle : null, decorationThickness: dart.notNull(t) < 0.5 ? a.decorationThickness : null, debugLabel: lerpDebugLabel});
      }
      return new src__painting__text_style.TextStyle.new({inherit: b.inherit, color: a.foreground == null && b.foreground == null ? ui$.Color.lerp(a.color, b.color, t) : null, backgroundColor: a.background == null && b.background == null ? ui$.Color.lerp(a.backgroundColor, b.backgroundColor, t) : null, fontFamily: dart.notNull(t) < 0.5 ? a.fontFamily : b.fontFamily, fontFamilyFallback: dart.notNull(t) < 0.5 ? a.fontFamilyFallback : b.fontFamilyFallback, fontSize: ui$.lerpDouble((t7 = a.fontSize, t7 == null ? b.fontSize : t7), (t7$ = b.fontSize, t7$ == null ? a.fontSize : t7$), t), fontWeight: ui$.FontWeight.lerp(a.fontWeight, b.fontWeight, t), fontStyle: dart.notNull(t) < 0.5 ? a.fontStyle : b.fontStyle, letterSpacing: ui$.lerpDouble((t7$0 = a.letterSpacing, t7$0 == null ? b.letterSpacing : t7$0), (t7$1 = b.letterSpacing, t7$1 == null ? a.letterSpacing : t7$1), t), wordSpacing: ui$.lerpDouble((t7$2 = a.wordSpacing, t7$2 == null ? b.wordSpacing : t7$2), (t7$3 = b.wordSpacing, t7$3 == null ? a.wordSpacing : t7$3), t), textBaseline: dart.notNull(t) < 0.5 ? a.textBaseline : b.textBaseline, height: ui$.lerpDouble((t7$4 = a.height, t7$4 == null ? b.height : t7$4), (t7$5 = b.height, t7$5 == null ? a.height : t7$5), t), locale: dart.notNull(t) < 0.5 ? a.locale : b.locale, foreground: a.foreground != null || b.foreground != null ? dart.notNull(t) < 0.5 ? (t7$6 = a.foreground, t7$6 == null ? (t8 = new ui$.Paint.new(), t8.color = a.color, t8) : t7$6) : (t7$7 = b.foreground, t7$7 == null ? (t8$ = new ui$.Paint.new(), t8$.color = b.color, t8$) : t7$7) : null, background: a.background != null || b.background != null ? dart.notNull(t) < 0.5 ? (t7$8 = a.background, t7$8 == null ? (t8$0 = new ui$.Paint.new(), t8$0.color = a.backgroundColor, t8$0) : t7$8) : (t7$9 = b.background, t7$9 == null ? (t8$1 = new ui$.Paint.new(), t8$1.color = b.backgroundColor, t8$1) : t7$9) : null, shadows: dart.notNull(t) < 0.5 ? a.shadows : b.shadows, decoration: dart.notNull(t) < 0.5 ? a.decoration : b.decoration, decorationColor: ui$.Color.lerp(a.decorationColor, b.decorationColor, t), decorationStyle: dart.notNull(t) < 0.5 ? a.decorationStyle : b.decorationStyle, decorationThickness: ui$.lerpDouble((t7$10 = a.decorationThickness, t7$10 == null ? b.decorationThickness : t7$10), (t7$11 = b.decorationThickness, t7$11 == null ? a.decorationThickness : t7$11), t), debugLabel: lerpDebugLabel});
    }
    getTextStyle(opts) {
      let t8, t7;
      let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1.0;
      return new ui$.TextStyle.new({color: this.color, decoration: this.decoration, decorationColor: this.decorationColor, decorationStyle: this.decorationStyle, decorationThickness: this.decorationThickness, fontWeight: this.fontWeight, fontStyle: this.fontStyle, textBaseline: this.textBaseline, fontFamily: this.fontFamily, fontFamilyFallback: this.fontFamilyFallback, fontSize: this.fontSize == null ? null : dart.notNull(this.fontSize) * dart.notNull(textScaleFactor), letterSpacing: this.letterSpacing, wordSpacing: this.wordSpacing, height: this.height, locale: this.locale, foreground: this.foreground, background: (t7 = this.background, t7 == null ? this.backgroundColor != null ? (t8 = new ui$.Paint.new(), t8.color = this.backgroundColor, t8) : null : t7), shadows: this.shadows});
    }
    getParagraphStyle(opts) {
      let t7, t7$, t7$0, t7$1, t7$2, t7$3;
      let textAlign = opts && 'textAlign' in opts ? opts.textAlign : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1.0;
      let ellipsis = opts && 'ellipsis' in opts ? opts.ellipsis : null;
      let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
      let locale = opts && 'locale' in opts ? opts.locale : null;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
      let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
      let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
      if (!(textScaleFactor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 984, 12, "ert(textScaleFactor != ");
      if (!(maxLines == null || dart.notNull(maxLines) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 985, 12, "ert(maxLines == null || maxLines");
      return new ui$.ParagraphStyle.new({textAlign: textAlign, textDirection: textDirection, fontWeight: (t7 = fontWeight, t7 == null ? this.fontWeight : t7), fontStyle: (t7$ = fontStyle, t7$ == null ? this.fontStyle : t7$), fontFamily: (t7$0 = fontFamily, t7$0 == null ? this.fontFamily : t7$0), fontSize: dart.notNull((t7$2 = (t7$1 = fontSize, t7$1 == null ? this.fontSize : t7$1), t7$2 == null ? src__painting__text_style.TextStyle._defaultFontSize : t7$2)) * dart.notNull(textScaleFactor), height: (t7$3 = height, t7$3 == null ? this.height : t7$3), strutStyle: strutStyle == null ? null : new ui$.StrutStyle.new({fontFamily: strutStyle.fontFamily, fontFamilyFallback: strutStyle.fontFamilyFallback, fontSize: strutStyle.fontSize, height: strutStyle.height, leading: strutStyle.leading, fontWeight: strutStyle.fontWeight, fontStyle: strutStyle.fontStyle, forceStrutHeight: strutStyle.forceStrutHeight}), maxLines: maxLines, ellipsis: ellipsis, locale: locale});
    }
    compareTo(other) {
      if (this === other) return src__painting__basic_types.RenderComparison.identical;
      if (!dart.equals(this.inherit, other.inherit) || this.fontFamily != other.fontFamily || this.fontSize != other.fontSize || !dart.equals(this.fontWeight, other.fontWeight) || !dart.equals(this.fontStyle, other.fontStyle) || this.letterSpacing != other.letterSpacing || this.wordSpacing != other.wordSpacing || !dart.equals(this.textBaseline, other.textBaseline) || this.height != other.height || !dart.equals(this.locale, other.locale) || !dart.equals(this.foreground, other.foreground) || !dart.equals(this.background, other.background) || !dart.test(src__foundation__collections.listEquals(ui$.Shadow, this.shadows, other.shadows)) || !dart.test(src__foundation__collections.listEquals(core.String, this.fontFamilyFallback, other.fontFamilyFallback))) return src__painting__basic_types.RenderComparison.layout;
      if (!dart.equals(this.color, other.color) || !dart.equals(this.backgroundColor, other.backgroundColor) || !dart.equals(this.decoration, other.decoration) || !dart.equals(this.decorationColor, other.decorationColor) || !dart.equals(this.decorationStyle, other.decorationStyle) || this.decorationThickness != other.decorationThickness) return src__painting__basic_types.RenderComparison.paint;
      return src__painting__basic_types.RenderComparison.identical;
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__painting__text_style.TextStyle._check(other);
      return dart.equals(this.inherit, typedOther.inherit) && dart.equals(this.color, typedOther.color) && dart.equals(this.backgroundColor, typedOther.backgroundColor) && this.fontFamily == typedOther.fontFamily && this.fontSize == typedOther.fontSize && dart.equals(this.fontWeight, typedOther.fontWeight) && dart.equals(this.fontStyle, typedOther.fontStyle) && this.letterSpacing == typedOther.letterSpacing && this.wordSpacing == typedOther.wordSpacing && dart.equals(this.textBaseline, typedOther.textBaseline) && this.height == typedOther.height && dart.equals(this.locale, typedOther.locale) && dart.equals(this.foreground, typedOther.foreground) && dart.equals(this.background, typedOther.background) && dart.equals(this.decoration, typedOther.decoration) && dart.equals(this.decorationColor, typedOther.decorationColor) && dart.equals(this.decorationStyle, typedOther.decorationStyle) && this.decorationThickness == typedOther.decorationThickness && dart.test(src__foundation__collections.listEquals(ui$.Shadow, this.shadows, typedOther.shadows)) && dart.test(src__foundation__collections.listEquals(core.String, this.fontFamilyFallback, typedOther.fontFamilyFallback));
    }
    get hashCode() {
      return ui$.hashValues(this.inherit, this.color, this.backgroundColor, this.fontFamily, this.fontFamilyFallback, this.fontSize, this.fontWeight, this.fontStyle, this.letterSpacing, this.wordSpacing, this.textBaseline, this.height, this.locale, this.foreground, this.background, this.decoration, this.decorationColor, this.decorationStyle, this.shadows);
    }
    toStringShort() {
      return dart.str(this[$runtimeType]);
    }
    debugFillProperties(properties, opts) {
      let prefix = opts && 'prefix' in opts ? opts.prefix : "";
      super.debugFillProperties(properties);
      if (this.debugLabel != null) properties.add(new src__foundation__diagnostics.MessageProperty.new(dart.str(prefix) + "debugLabel", this.debugLabel));
      let styles = JSArrayOfDiagnosticsNode().of([]);
      styles[$add](new (DiagnosticsPropertyOfColor()).new(dart.str(prefix) + "color", this.color, {defaultValue: null}));
      styles[$add](new (DiagnosticsPropertyOfColor()).new(dart.str(prefix) + "backgroundColor", this.backgroundColor, {defaultValue: null}));
      styles[$add](new src__foundation__diagnostics.StringProperty.new(dart.str(prefix) + "family", this.fontFamily, {defaultValue: null, quoted: false}));
      styles[$add](new (IterablePropertyOfString()).new(dart.str(prefix) + "familyFallback", this.fontFamilyFallback, {defaultValue: null}));
      styles[$add](new src__foundation__diagnostics.DoubleProperty.new(dart.str(prefix) + "size", this.fontSize, {defaultValue: null}));
      let weightDescription = null;
      if (this.fontWeight != null) {
        weightDescription = dart.str(dart.notNull(this.fontWeight.index) + 1) + "00";
      }
      styles[$add](new (DiagnosticsPropertyOfFontWeight()).new(dart.str(prefix) + "weight", this.fontWeight, {description: weightDescription, defaultValue: null}));
      styles[$add](new (EnumPropertyOfFontStyle()).new(dart.str(prefix) + "style", this.fontStyle, {defaultValue: null}));
      styles[$add](new src__foundation__diagnostics.DoubleProperty.new(dart.str(prefix) + "letterSpacing", this.letterSpacing, {defaultValue: null}));
      styles[$add](new src__foundation__diagnostics.DoubleProperty.new(dart.str(prefix) + "wordSpacing", this.wordSpacing, {defaultValue: null}));
      styles[$add](new (EnumPropertyOfTextBaseline()).new(dart.str(prefix) + "baseline", this.textBaseline, {defaultValue: null}));
      styles[$add](new src__foundation__diagnostics.DoubleProperty.new(dart.str(prefix) + "height", this.height, {unit: "x", defaultValue: null}));
      styles[$add](new (DiagnosticsPropertyOfLocale()).new(dart.str(prefix) + "locale", this.locale, {defaultValue: null}));
      styles[$add](new (DiagnosticsPropertyOfPaint()).new(dart.str(prefix) + "foreground", this.foreground, {defaultValue: null}));
      styles[$add](new (DiagnosticsPropertyOfPaint()).new(dart.str(prefix) + "background", this.background, {defaultValue: null}));
      if (this.decoration != null || this.decorationColor != null || this.decorationStyle != null || this.decorationThickness != null) {
        let decorationDescription = JSArrayOfString().of([]);
        if (this.decorationStyle != null) decorationDescription[$add](src__foundation__diagnostics.describeEnum(this.decorationStyle));
        styles[$add](new (DiagnosticsPropertyOfColor()).new(dart.str(prefix) + "decorationColor", this.decorationColor, {defaultValue: null, level: src__foundation__diagnostics.DiagnosticLevel.fine}));
        if (this.decorationColor != null) decorationDescription[$add](dart.str(this.decorationColor));
        styles[$add](new (DiagnosticsPropertyOfTextDecoration()).new(dart.str(prefix) + "decoration", this.decoration, {defaultValue: null, level: src__foundation__diagnostics.DiagnosticLevel.hidden}));
        if (this.decoration != null) decorationDescription[$add](dart.str(this.decoration));
        if (!dart.test(decorationDescription[$isNotEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 1175, 14, "ert(decorationDescription.isNotE");
        styles[$add](new src__foundation__diagnostics.MessageProperty.new(dart.str(prefix) + "decoration", decorationDescription[$join](" ")));
        styles[$add](new src__foundation__diagnostics.DoubleProperty.new(dart.str(prefix) + "decorationThickness", this.decorationThickness, {unit: "x", defaultValue: null}));
      }
      let styleSpecified = styles[$any](dart.fn(n => !dart.test(n.isFiltered(src__foundation__diagnostics.DiagnosticLevel.info)), DiagnosticsNodeTobool()));
      properties.add(new (DiagnosticsPropertyOfbool()).new(dart.str(prefix) + "inherit", this.inherit, {level: !dart.test(styleSpecified) && dart.test(this.inherit) ? src__foundation__diagnostics.DiagnosticLevel.fine : src__foundation__diagnostics.DiagnosticLevel.info}));
      styles[$forEach](dart.bind(properties, 'add'));
      if (!dart.test(styleSpecified)) properties.add(new src__foundation__diagnostics.FlagProperty.new("inherit", {value: this.inherit, ifTrue: dart.str(prefix) + "<all styles inherited>", ifFalse: dart.str(prefix) + "<no style specified>"}));
    }
  };
  (src__painting__text_style.TextStyle.new = function(opts) {
    let inherit = opts && 'inherit' in opts ? opts.inherit : true;
    let color = opts && 'color' in opts ? opts.color : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
    let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
    let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
    let letterSpacing = opts && 'letterSpacing' in opts ? opts.letterSpacing : null;
    let wordSpacing = opts && 'wordSpacing' in opts ? opts.wordSpacing : null;
    let textBaseline = opts && 'textBaseline' in opts ? opts.textBaseline : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let foreground = opts && 'foreground' in opts ? opts.foreground : null;
    let background = opts && 'background' in opts ? opts.background : null;
    let shadows = opts && 'shadows' in opts ? opts.shadows : null;
    let decoration = opts && 'decoration' in opts ? opts.decoration : null;
    let decorationColor = opts && 'decorationColor' in opts ? opts.decorationColor : null;
    let decorationStyle = opts && 'decorationStyle' in opts ? opts.decorationStyle : null;
    let decorationThickness = opts && 'decorationThickness' in opts ? opts.decorationThickness : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
    let package$1 = opts && 'package' in opts ? opts.package : null;
    this[inherit$] = inherit;
    this[color$] = color;
    this[backgroundColor$] = backgroundColor;
    this[fontSize$] = fontSize;
    this[fontWeight$] = fontWeight;
    this[fontStyle$] = fontStyle;
    this[letterSpacing$] = letterSpacing;
    this[wordSpacing$] = wordSpacing;
    this[textBaseline$] = textBaseline;
    this[height$] = height;
    this[locale$0] = locale;
    this[foreground$] = foreground;
    this[background$] = background;
    this[shadows$] = shadows;
    this[decoration$] = decoration;
    this[decorationColor$] = decorationColor;
    this[decorationStyle$] = decorationStyle;
    this[decorationThickness$] = decorationThickness;
    this[debugLabel$] = debugLabel;
    this[fontFamily$] = package$1 == null ? fontFamily : "packages/" + dart.str(package$1) + "/" + dart.str(fontFamily);
    this[_fontFamilyFallback] = fontFamilyFallback;
    this[_package] = package$1;
    if (!(inherit != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 335, 16, "inherit != null");
    if (!(color == null || foreground == null)) dart.assertFailed(src__painting__text_style._kColorForegroundWarning, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 336, 16, "color == null || foreground == null");
    if (!(backgroundColor == null || background == null)) dart.assertFailed(src__painting__text_style._kColorBackgroundWarning, "org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart", 337, 16, "backgroundColor == null || background == null");
    src__painting__text_style.TextStyle.__proto__.new.call(this);
    ;
  }).prototype = src__painting__text_style.TextStyle.prototype;
  dart.addTypeTests(src__painting__text_style.TextStyle);
  const inherit$ = Symbol("TextStyle.inherit");
  const color$ = Symbol("TextStyle.color");
  const backgroundColor$ = Symbol("TextStyle.backgroundColor");
  const fontFamily$ = Symbol("TextStyle.fontFamily");
  const fontSize$ = Symbol("TextStyle.fontSize");
  const fontWeight$ = Symbol("TextStyle.fontWeight");
  const fontStyle$ = Symbol("TextStyle.fontStyle");
  const letterSpacing$ = Symbol("TextStyle.letterSpacing");
  const wordSpacing$ = Symbol("TextStyle.wordSpacing");
  const textBaseline$ = Symbol("TextStyle.textBaseline");
  const height$ = Symbol("TextStyle.height");
  const locale$0 = Symbol("TextStyle.locale");
  const foreground$ = Symbol("TextStyle.foreground");
  const background$ = Symbol("TextStyle.background");
  const decoration$ = Symbol("TextStyle.decoration");
  const decorationColor$ = Symbol("TextStyle.decorationColor");
  const decorationStyle$ = Symbol("TextStyle.decorationStyle");
  const decorationThickness$ = Symbol("TextStyle.decorationThickness");
  const debugLabel$ = Symbol("TextStyle.debugLabel");
  const shadows$ = Symbol("TextStyle.shadows");
  dart.setMethodSignature(src__painting__text_style.TextStyle, () => ({
    __proto__: dart.getMethods(src__painting__text_style.TextStyle.__proto__),
    copyWith: dart.fnType(src__painting__text_style.TextStyle, [], {background: ui$.Paint, backgroundColor: ui$.Color, color: ui$.Color, debugLabel: core.String, decoration: ui$.TextDecoration, decorationColor: ui$.Color, decorationStyle: ui$.TextDecorationStyle, decorationThickness: core.double, fontFamily: core.String, fontFamilyFallback: core.List$(core.String), fontSize: core.double, fontStyle: ui$.FontStyle, fontWeight: ui$.FontWeight, foreground: ui$.Paint, height: core.double, inherit: core.bool, letterSpacing: core.double, locale: ui$.Locale, shadows: core.List$(ui$.Shadow), textBaseline: ui$.TextBaseline, wordSpacing: core.double}),
    apply: dart.fnType(src__painting__text_style.TextStyle, [], {backgroundColor: ui$.Color, color: ui$.Color, decoration: ui$.TextDecoration, decorationColor: ui$.Color, decorationStyle: ui$.TextDecorationStyle, decorationThicknessDelta: core.double, decorationThicknessFactor: core.double, fontFamily: core.String, fontFamilyFallback: core.List$(core.String), fontSizeDelta: core.double, fontSizeFactor: core.double, fontWeightDelta: core.int, heightDelta: core.double, heightFactor: core.double, letterSpacingDelta: core.double, letterSpacingFactor: core.double, wordSpacingDelta: core.double, wordSpacingFactor: core.double}),
    merge: dart.fnType(src__painting__text_style.TextStyle, [src__painting__text_style.TextStyle]),
    getTextStyle: dart.fnType(ui$.TextStyle, [], {textScaleFactor: core.double}),
    getParagraphStyle: dart.fnType(ui$.ParagraphStyle, [], {ellipsis: core.String, fontFamily: core.String, fontSize: core.double, fontStyle: ui$.FontStyle, fontWeight: ui$.FontWeight, height: core.double, locale: ui$.Locale, maxLines: core.int, strutStyle: src__painting__strut_style.StrutStyle, textAlign: ui$.TextAlign, textDirection: ui$.TextDirection, textScaleFactor: core.double}),
    compareTo: dart.fnType(src__painting__basic_types.RenderComparison, [src__painting__text_style.TextStyle]),
    debugFillProperties: dart.fnType(dart.void, [src__foundation__diagnostics.DiagnosticPropertiesBuilder], {prefix: core.String})
  }));
  dart.setGetterSignature(src__painting__text_style.TextStyle, () => ({
    __proto__: dart.getGetters(src__painting__text_style.TextStyle.__proto__),
    fontFamilyFallback: core.List$(core.String)
  }));
  dart.setLibraryUri(src__painting__text_style.TextStyle, "package:flutter_web/src/painting/text_style.dart");
  dart.setFieldSignature(src__painting__text_style.TextStyle, () => ({
    __proto__: dart.getFields(src__painting__text_style.TextStyle.__proto__),
    inherit: dart.finalFieldType(core.bool),
    color: dart.finalFieldType(ui$.Color),
    backgroundColor: dart.finalFieldType(ui$.Color),
    fontFamily: dart.finalFieldType(core.String),
    [_fontFamilyFallback]: dart.finalFieldType(core.List$(core.String)),
    [_package]: dart.finalFieldType(core.String),
    fontSize: dart.finalFieldType(core.double),
    fontWeight: dart.finalFieldType(ui$.FontWeight),
    fontStyle: dart.finalFieldType(ui$.FontStyle),
    letterSpacing: dart.finalFieldType(core.double),
    wordSpacing: dart.finalFieldType(core.double),
    textBaseline: dart.finalFieldType(ui$.TextBaseline),
    height: dart.finalFieldType(core.double),
    locale: dart.finalFieldType(ui$.Locale),
    foreground: dart.finalFieldType(ui$.Paint),
    background: dart.finalFieldType(ui$.Paint),
    decoration: dart.finalFieldType(ui$.TextDecoration),
    decorationColor: dart.finalFieldType(ui$.Color),
    decorationStyle: dart.finalFieldType(ui$.TextDecorationStyle),
    decorationThickness: dart.finalFieldType(core.double),
    debugLabel: dart.finalFieldType(core.String),
    shadows: dart.finalFieldType(core.List$(ui$.Shadow))
  }));
  dart.defineExtensionMethods(src__painting__text_style.TextStyle, ['_equals']);
  dart.defineExtensionAccessors(src__painting__text_style.TextStyle, ['hashCode']);
  dart.defineLazy(src__painting__text_style.TextStyle, {
    /*src__painting__text_style.TextStyle._defaultFontSize*/get _defaultFontSize() {
      return 14.0;
    }
  });
  dart.defineLazy(src__painting__text_style, {
    /*src__painting__text_style._kDefaultDebugLabel*/get _kDefaultDebugLabel() {
      return "unknown";
    },
    /*src__painting__text_style._kColorForegroundWarning*/get _kColorForegroundWarning() {
      return "Cannot provide both a color and a foreground\n" + "The color argument is just a shorthand for \"foreground: new Paint()..color = color\".";
    },
    /*src__painting__text_style._kColorBackgroundWarning*/get _kColorBackgroundWarning() {
      return "Cannot provide both a backgroundColor and a background\n" + "The backgroundColor argument is just a shorthand for \"background: new Paint()..color = color\".";
    }
  });
  const _fontFamilyFallback$ = dart.privateName(src__painting__strut_style, "_fontFamilyFallback");
  const _package$ = dart.privateName(src__painting__strut_style, "_package");
  src__painting__strut_style.StrutStyle = class StrutStyle extends src__foundation__diagnostics.Diagnosticable {
    get fontFamily() {
      return this[fontFamily$0];
    }
    set fontFamily(value) {
      super.fontFamily = value;
    }
    get fontSize() {
      return this[fontSize$0];
    }
    set fontSize(value) {
      super.fontSize = value;
    }
    get height() {
      return this[height$0];
    }
    set height(value) {
      super.height = value;
    }
    get fontWeight() {
      return this[fontWeight$0];
    }
    set fontWeight(value) {
      super.fontWeight = value;
    }
    get fontStyle() {
      return this[fontStyle$0];
    }
    set fontStyle(value) {
      super.fontStyle = value;
    }
    get leading() {
      return this[leading$];
    }
    set leading(value) {
      super.leading = value;
    }
    get forceStrutHeight() {
      return this[forceStrutHeight$];
    }
    set forceStrutHeight(value) {
      super.forceStrutHeight = value;
    }
    get debugLabel() {
      return this[debugLabel$0];
    }
    set debugLabel(value) {
      super.debugLabel = value;
    }
    get fontFamilyFallback() {
      if (this[_package$] != null && this[_fontFamilyFallback$] != null) return this[_fontFamilyFallback$][$map](core.String, dart.fn(family => "packages/" + dart.str(this[_package$]) + "/" + dart.str(family), StringToString()))[$toList]();
      return this[_fontFamilyFallback$];
    }
    compareTo(other) {
      if (this === other) return src__painting__basic_types.RenderComparison.identical;
      if (this.fontFamily != other.fontFamily || this.fontSize != other.fontSize || !dart.equals(this.fontWeight, other.fontWeight) || !dart.equals(this.fontStyle, other.fontStyle) || this.height != other.height || this.leading != other.leading || !dart.equals(this.forceStrutHeight, other.forceStrutHeight) || !dart.test(src__foundation__collections.listEquals(core.String, this.fontFamilyFallback, other.fontFamilyFallback))) return src__painting__basic_types.RenderComparison.layout;
      return src__painting__basic_types.RenderComparison.identical;
    }
    inheritFromTextStyle(other) {
      let t7, t7$, t7$0, t7$1, t7$2, t7$3, t7$4;
      if (other == null) return this;
      return new src__painting__strut_style.StrutStyle.new({fontFamily: (t7 = this.fontFamily, t7 == null ? other.fontFamily : t7), fontFamilyFallback: (t7$ = this.fontFamilyFallback, t7$ == null ? other.fontFamilyFallback : t7$), fontSize: (t7$0 = this.fontSize, t7$0 == null ? other.fontSize : t7$0), height: (t7$1 = this.height, t7$1 == null ? other.height : t7$1), leading: this.leading, fontWeight: (t7$2 = this.fontWeight, t7$2 == null ? other.fontWeight : t7$2), fontStyle: (t7$3 = this.fontStyle, t7$3 == null ? other.fontStyle : t7$3), forceStrutHeight: this.forceStrutHeight, debugLabel: (t7$4 = this.debugLabel, t7$4 == null ? other.debugLabel : t7$4)});
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__painting__strut_style.StrutStyle._check(other);
      return this.fontFamily == typedOther.fontFamily && this.fontSize == typedOther.fontSize && dart.equals(this.fontWeight, typedOther.fontWeight) && dart.equals(this.fontStyle, typedOther.fontStyle) && this.height == typedOther.height && this.leading == typedOther.leading && dart.equals(this.forceStrutHeight, typedOther.forceStrutHeight);
    }
    get hashCode() {
      return ui$.hashValues(this.fontFamily, this.fontSize, this.fontWeight, this.fontStyle, this.height, this.leading, this.forceStrutHeight);
    }
    toStringShort() {
      return dart.str(this[$runtimeType]);
    }
    debugFillProperties(properties, opts) {
      let prefix = opts && 'prefix' in opts ? opts.prefix : "";
      super.debugFillProperties(properties);
      if (this.debugLabel != null) properties.add(new src__foundation__diagnostics.MessageProperty.new(dart.str(prefix) + "debugLabel", this.debugLabel));
      let styles = JSArrayOfDiagnosticsNode().of([]);
      styles[$add](new src__foundation__diagnostics.StringProperty.new(dart.str(prefix) + "family", this.fontFamily, {defaultValue: null, quoted: false}));
      styles[$add](new (IterablePropertyOfString()).new(dart.str(prefix) + "familyFallback", this.fontFamilyFallback, {defaultValue: null}));
      styles[$add](new src__foundation__diagnostics.DoubleProperty.new(dart.str(prefix) + "size", this.fontSize, {defaultValue: null}));
      let weightDescription = null;
      if (this.fontWeight != null) {
        weightDescription = "w" + dart.str(dart.notNull(this.fontWeight.index) + 1) + "00";
      }
      styles[$add](new (DiagnosticsPropertyOfFontWeight()).new(dart.str(prefix) + "weight", this.fontWeight, {description: weightDescription, defaultValue: null}));
      styles[$add](new (EnumPropertyOfFontStyle()).new(dart.str(prefix) + "style", this.fontStyle, {defaultValue: null}));
      styles[$add](new src__foundation__diagnostics.DoubleProperty.new(dart.str(prefix) + "height", this.height, {unit: "x", defaultValue: null}));
      styles[$add](new src__foundation__diagnostics.FlagProperty.new(dart.str(prefix) + "forceStrutHeight", {value: this.forceStrutHeight, defaultValue: null}));
      let styleSpecified = styles[$any](dart.fn(n => !dart.test(n.isFiltered(src__foundation__diagnostics.DiagnosticLevel.info)), DiagnosticsNodeTobool()));
      styles[$forEach](dart.bind(properties, 'add'));
      if (!dart.test(styleSpecified)) properties.add(new src__foundation__diagnostics.FlagProperty.new("forceStrutHeight", {value: this.forceStrutHeight, ifTrue: dart.str(prefix) + "<strut height forced>", ifFalse: dart.str(prefix) + "<strut height normal>"}));
    }
  };
  (src__painting__strut_style.StrutStyle.new = function(opts) {
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
    let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let leading = opts && 'leading' in opts ? opts.leading : null;
    let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
    let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
    let forceStrutHeight = opts && 'forceStrutHeight' in opts ? opts.forceStrutHeight : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let package$1 = opts && 'package' in opts ? opts.package : null;
    this[fontSize$0] = fontSize;
    this[height$0] = height;
    this[leading$] = leading;
    this[fontWeight$0] = fontWeight;
    this[fontStyle$0] = fontStyle;
    this[forceStrutHeight$] = forceStrutHeight;
    this[debugLabel$0] = debugLabel;
    this[fontFamily$0] = package$1 == null ? fontFamily : "packages/" + dart.str(package$1) + "/" + dart.str(fontFamily);
    this[_fontFamilyFallback$] = fontFamilyFallback;
    this[_package$] = package$1;
    if (!(fontSize == null || dart.notNull(fontSize) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/strut_style.dart", 291, 16, "t(fontSize == null || fontSize >");
    if (!(leading == null || dart.notNull(leading) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/strut_style.dart", 292, 16, "t(leading == null || leading >=");
    if (!(package$1 == null || package$1 != null && (fontFamily != null || fontFamilyFallback != null))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/strut_style.dart", 293, 16, "t(package == null ||\n            (package != null &&\n                (fontFamily != null || fontFamilyFallback != null");
    src__painting__strut_style.StrutStyle.__proto__.new.call(this);
    ;
  }).prototype = src__painting__strut_style.StrutStyle.prototype;
  (src__painting__strut_style.StrutStyle.fromTextStyle = function(textStyle, opts) {
    let t7, t7$, t7$0, t7$1, t7$2, t7$3;
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let fontFamilyFallback = opts && 'fontFamilyFallback' in opts ? opts.fontFamilyFallback : null;
    let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let leading = opts && 'leading' in opts ? opts.leading : null;
    let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
    let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
    let forceStrutHeight = opts && 'forceStrutHeight' in opts ? opts.forceStrutHeight : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let package$1 = opts && 'package' in opts ? opts.package : null;
    this[leading$] = leading;
    this[forceStrutHeight$] = forceStrutHeight;
    if (!(textStyle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/strut_style.dart", 325, 16, "t(textStyle != nu");
    if (!(fontSize == null || dart.notNull(fontSize) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/strut_style.dart", 326, 16, "t(fontSize == null || fontSize >");
    if (!(leading == null || dart.notNull(leading) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/strut_style.dart", 327, 16, "t(leading == null || leading >=");
    if (!(package$1 == null || package$1 != null && (fontFamily != null || fontFamilyFallback != null))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/strut_style.dart", 328, 16, "t(package == null ||\n            (package != null &&\n                (fontFamily != null || fontFamilyFallback != null");
    this[fontFamily$0] = fontFamily != null ? package$1 == null ? fontFamily : "packages/" + dart.str(package$1) + "/" + dart.str(fontFamily) : textStyle.fontFamily;
    this[_fontFamilyFallback$] = (t7 = fontFamilyFallback, t7 == null ? textStyle.fontFamilyFallback : t7);
    this[height$0] = (t7$ = height, t7$ == null ? textStyle.height : t7$);
    this[fontSize$0] = (t7$0 = fontSize, t7$0 == null ? textStyle.fontSize : t7$0);
    this[fontWeight$0] = (t7$1 = fontWeight, t7$1 == null ? textStyle.fontWeight : t7$1);
    this[fontStyle$0] = (t7$2 = fontStyle, t7$2 == null ? textStyle.fontStyle : t7$2);
    this[debugLabel$0] = (t7$3 = debugLabel, t7$3 == null ? textStyle.debugLabel : t7$3);
    this[_package$] = package$1;
    src__painting__strut_style.StrutStyle.__proto__.new.call(this);
    ;
  }).prototype = src__painting__strut_style.StrutStyle.prototype;
  dart.addTypeTests(src__painting__strut_style.StrutStyle);
  const fontFamily$0 = Symbol("StrutStyle.fontFamily");
  const fontSize$0 = Symbol("StrutStyle.fontSize");
  const height$0 = Symbol("StrutStyle.height");
  const fontWeight$0 = Symbol("StrutStyle.fontWeight");
  const fontStyle$0 = Symbol("StrutStyle.fontStyle");
  const leading$ = Symbol("StrutStyle.leading");
  const forceStrutHeight$ = Symbol("StrutStyle.forceStrutHeight");
  const debugLabel$0 = Symbol("StrutStyle.debugLabel");
  dart.setMethodSignature(src__painting__strut_style.StrutStyle, () => ({
    __proto__: dart.getMethods(src__painting__strut_style.StrutStyle.__proto__),
    compareTo: dart.fnType(src__painting__basic_types.RenderComparison, [src__painting__strut_style.StrutStyle]),
    inheritFromTextStyle: dart.fnType(src__painting__strut_style.StrutStyle, [src__painting__text_style.TextStyle]),
    debugFillProperties: dart.fnType(dart.void, [src__foundation__diagnostics.DiagnosticPropertiesBuilder], {prefix: core.String})
  }));
  dart.setGetterSignature(src__painting__strut_style.StrutStyle, () => ({
    __proto__: dart.getGetters(src__painting__strut_style.StrutStyle.__proto__),
    fontFamilyFallback: core.List$(core.String)
  }));
  dart.setLibraryUri(src__painting__strut_style.StrutStyle, "package:flutter_web/src/painting/strut_style.dart");
  dart.setFieldSignature(src__painting__strut_style.StrutStyle, () => ({
    __proto__: dart.getFields(src__painting__strut_style.StrutStyle.__proto__),
    fontFamily: dart.finalFieldType(core.String),
    [_fontFamilyFallback$]: dart.finalFieldType(core.List$(core.String)),
    [_package$]: dart.finalFieldType(core.String),
    fontSize: dart.finalFieldType(core.double),
    height: dart.finalFieldType(core.double),
    fontWeight: dart.finalFieldType(ui$.FontWeight),
    fontStyle: dart.finalFieldType(ui$.FontStyle),
    leading: dart.finalFieldType(core.double),
    forceStrutHeight: dart.finalFieldType(core.bool),
    debugLabel: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__painting__strut_style.StrutStyle, ['_equals']);
  dart.defineExtensionAccessors(src__painting__strut_style.StrutStyle, ['hashCode']);
  dart.defineLazy(src__painting__strut_style.StrutStyle, {
    /*src__painting__strut_style.StrutStyle.disabled*/get disabled() {
      return dart.const(new src__painting__strut_style.StrutStyle.new({height: 0.0, leading: 0.0}));
    }
  });
  src__widgets__icon_data.IconData = class IconData extends core.Object {
    get codePoint() {
      return this[codePoint$];
    }
    set codePoint(value) {
      super.codePoint = value;
    }
    get fontFamily() {
      return this[fontFamily$1];
    }
    set fontFamily(value) {
      super.fontFamily = value;
    }
    get fontPackage() {
      return this[fontPackage$];
    }
    set fontPackage(value) {
      super.fontPackage = value;
    }
    get matchTextDirection() {
      return this[matchTextDirection$];
    }
    set matchTextDirection(value) {
      super.matchTextDirection = value;
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(this[$runtimeType], dart.runtimeType(other))) return false;
      let typedOther = src__widgets__icon_data.IconData._check(other);
      return this.codePoint == typedOther.codePoint && this.fontFamily == typedOther.fontFamily && this.fontPackage == typedOther.fontPackage && dart.equals(this.matchTextDirection, typedOther.matchTextDirection);
    }
    get hashCode() {
      return ui$.hashValues(this.codePoint, this.fontFamily, this.fontPackage, this.matchTextDirection);
    }
    toString() {
      if (dart.test(src__util.assertionsEnabled)) {
        let data = this.codePoint[$toRadixString](16)[$toUpperCase]()[$padLeft](5, "0");
        return "IconData(U+" + data + ")";
      } else {
        return super[$toString]();
      }
    }
  };
  (src__widgets__icon_data.IconData.new = function(codePoint, opts) {
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let fontPackage = opts && 'fontPackage' in opts ? opts.fontPackage : null;
    let matchTextDirection = opts && 'matchTextDirection' in opts ? opts.matchTextDirection : false;
    this[codePoint$] = codePoint;
    this[fontFamily$1] = fontFamily;
    this[fontPackage$] = fontPackage;
    this[matchTextDirection$] = matchTextDirection;
    ;
  }).prototype = src__widgets__icon_data.IconData.prototype;
  dart.addTypeTests(src__widgets__icon_data.IconData);
  const codePoint$ = Symbol("IconData.codePoint");
  const fontFamily$1 = Symbol("IconData.fontFamily");
  const fontPackage$ = Symbol("IconData.fontPackage");
  const matchTextDirection$ = Symbol("IconData.matchTextDirection");
  dart.setLibraryUri(src__widgets__icon_data.IconData, "package:flutter_web/src/widgets/icon_data.dart");
  dart.setFieldSignature(src__widgets__icon_data.IconData, () => ({
    __proto__: dart.getFields(src__widgets__icon_data.IconData.__proto__),
    codePoint: dart.finalFieldType(core.int),
    fontFamily: dart.finalFieldType(core.String),
    fontPackage: dart.finalFieldType(core.String),
    matchTextDirection: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__widgets__icon_data.IconData, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__widgets__icon_data.IconData, ['hashCode']);
  const _opacity = dart.privateName(src__widgets__icon_theme_data, "_opacity");
  let const$2;
  src__widgets__icon_theme_data.IconThemeData = class IconThemeData extends src__foundation__diagnostics.Diagnosticable {
    get color() {
      return this[color$0];
    }
    set color(value) {
      super.color = value;
    }
    get size() {
      return this[size$0];
    }
    set size(value) {
      super.size = value;
    }
    copyWith(opts) {
      let t7, t7$, t7$0;
      let color = opts && 'color' in opts ? opts.color : null;
      let opacity = opts && 'opacity' in opts ? opts.opacity : null;
      let size = opts && 'size' in opts ? opts.size : null;
      return new src__widgets__icon_theme_data.IconThemeData.new({color: (t7 = color, t7 == null ? this.color : t7), opacity: (t7$ = opacity, t7$ == null ? this.opacity : t7$), size: (t7$0 = size, t7$0 == null ? this.size : t7$0)});
    }
    merge(other) {
      if (other == null) return this;
      return this.copyWith({color: other.color, opacity: other.opacity, size: other.size});
    }
    get isConcrete() {
      return this.color != null && this.opacity != null && this.size != null;
    }
    get opacity() {
      let t7;
      t7 = this[_opacity];
      return t7 == null ? null : t7[$clamp](0.0, 1.0);
    }
    static lerp(a, b, t) {
      let t7, t7$, t7$0, t7$1, t7$2, t7$3;
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/widgets/icon_theme_data.dart", 73, 12, "t != null");
      return new src__widgets__icon_theme_data.IconThemeData.new({color: ui$.Color.lerp((t7 = a, t7 == null ? null : t7.color), (t7$ = b, t7$ == null ? null : t7$.color), t), opacity: ui$.lerpDouble((t7$0 = a, t7$0 == null ? null : t7$0.opacity), (t7$1 = b, t7$1 == null ? null : t7$1.opacity), t), size: ui$.lerpDouble((t7$2 = a, t7$2 == null ? null : t7$2.size), (t7$3 = b, t7$3 == null ? null : t7$3.size), t)});
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__widgets__icon_theme_data.IconThemeData._check(other);
      return dart.equals(this.color, typedOther.color) && this.opacity == typedOther.opacity && this.size == typedOther.size;
    }
    get hashCode() {
      return ui$.hashValues(this.color, this.opacity, this.size);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfColor()).new("color", this.color, {defaultValue: null}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("opacity", this.opacity, {defaultValue: null}));
      properties.add(new src__foundation__diagnostics.DoubleProperty.new("size", this.size, {defaultValue: null}));
    }
  };
  (src__widgets__icon_theme_data.IconThemeData.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let opacity = opts && 'opacity' in opts ? opts.opacity : null;
    let size = opts && 'size' in opts ? opts.size : null;
    this[color$0] = color;
    this[size$0] = size;
    this[_opacity] = opacity;
    src__widgets__icon_theme_data.IconThemeData.__proto__.new.call(this);
    ;
  }).prototype = src__widgets__icon_theme_data.IconThemeData.prototype;
  (src__widgets__icon_theme_data.IconThemeData.fallback = function() {
    this[color$0] = const$2 || (const$2 = dart.const(new ui$.Color.new(4278190080)));
    this[_opacity] = 1.0;
    this[size$0] = 24.0;
    src__widgets__icon_theme_data.IconThemeData.__proto__.new.call(this);
    ;
  }).prototype = src__widgets__icon_theme_data.IconThemeData.prototype;
  dart.addTypeTests(src__widgets__icon_theme_data.IconThemeData);
  const color$0 = Symbol("IconThemeData.color");
  const size$0 = Symbol("IconThemeData.size");
  dart.setMethodSignature(src__widgets__icon_theme_data.IconThemeData, () => ({
    __proto__: dart.getMethods(src__widgets__icon_theme_data.IconThemeData.__proto__),
    copyWith: dart.fnType(src__widgets__icon_theme_data.IconThemeData, [], {color: ui$.Color, opacity: core.double, size: core.double}),
    merge: dart.fnType(src__widgets__icon_theme_data.IconThemeData, [src__widgets__icon_theme_data.IconThemeData])
  }));
  dart.setGetterSignature(src__widgets__icon_theme_data.IconThemeData, () => ({
    __proto__: dart.getGetters(src__widgets__icon_theme_data.IconThemeData.__proto__),
    isConcrete: core.bool,
    opacity: core.double
  }));
  dart.setLibraryUri(src__widgets__icon_theme_data.IconThemeData, "package:flutter_web/src/widgets/icon_theme_data.dart");
  dart.setFieldSignature(src__widgets__icon_theme_data.IconThemeData, () => ({
    __proto__: dart.getFields(src__widgets__icon_theme_data.IconThemeData.__proto__),
    color: dart.finalFieldType(ui$.Color),
    [_opacity]: dart.finalFieldType(core.double),
    size: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__widgets__icon_theme_data.IconThemeData, ['_equals']);
  dart.defineExtensionAccessors(src__widgets__icon_theme_data.IconThemeData, ['hashCode']);
  const _name$2 = dart.privateName(src__painting__text_painter, "_name");
  src__painting__text_painter.TextWidthBasis = class TextWidthBasis extends core.Object {
    toString() {
      return this[_name$2];
    }
  };
  (src__painting__text_painter.TextWidthBasis.new = function(index, _name) {
    this.index = index;
    this[_name$2] = _name;
    ;
  }).prototype = src__painting__text_painter.TextWidthBasis.prototype;
  dart.addTypeTests(src__painting__text_painter.TextWidthBasis);
  dart.setLibraryUri(src__painting__text_painter.TextWidthBasis, "package:flutter_web/src/painting/text_painter.dart");
  dart.setFieldSignature(src__painting__text_painter.TextWidthBasis, () => ({
    __proto__: dart.getFields(src__painting__text_painter.TextWidthBasis.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$2]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__painting__text_painter.TextWidthBasis, ['toString']);
  src__painting__text_painter.TextWidthBasis.parent = dart.const(new src__painting__text_painter.TextWidthBasis.new(0, "TextWidthBasis.parent"));
  src__painting__text_painter.TextWidthBasis.longestLine = dart.const(new src__painting__text_painter.TextWidthBasis.new(1, "TextWidthBasis.longestLine"));
  src__painting__text_painter.TextWidthBasis.values = dart.constList([src__painting__text_painter.TextWidthBasis.parent, src__painting__text_painter.TextWidthBasis.longestLine], src__painting__text_painter.TextWidthBasis);
  src__painting__text_painter._CaretMetrics = class _CaretMetrics extends core.Object {};
  (src__painting__text_painter._CaretMetrics.new = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let fullHeight = opts && 'fullHeight' in opts ? opts.fullHeight : null;
    this.offset = offset;
    this.fullHeight = fullHeight;
    ;
  }).prototype = src__painting__text_painter._CaretMetrics.prototype;
  dart.addTypeTests(src__painting__text_painter._CaretMetrics);
  dart.setLibraryUri(src__painting__text_painter._CaretMetrics, "package:flutter_web/src/painting/text_painter.dart");
  dart.setFieldSignature(src__painting__text_painter._CaretMetrics, () => ({
    __proto__: dart.getFields(src__painting__text_painter._CaretMetrics.__proto__),
    offset: dart.finalFieldType(ui$.Offset),
    fullHeight: dart.finalFieldType(core.double)
  }));
  const _paragraph = dart.privateName(src__painting__text_painter, "_paragraph");
  const _needsLayout = dart.privateName(src__painting__text_painter, "_needsLayout");
  const _layoutTemplate = dart.privateName(src__painting__text_painter, "_layoutTemplate");
  const _lastMinWidth = dart.privateName(src__painting__text_painter, "_lastMinWidth");
  const _lastMaxWidth = dart.privateName(src__painting__text_painter, "_lastMaxWidth");
  const _caretMetrics = dart.privateName(src__painting__text_painter, "_caretMetrics");
  const _previousCaretPosition = dart.privateName(src__painting__text_painter, "_previousCaretPosition");
  const _previousCaretPrototype = dart.privateName(src__painting__text_painter, "_previousCaretPrototype");
  const _text = dart.privateName(src__painting__text_painter, "_text");
  const _textAlign = dart.privateName(src__painting__text_painter, "_textAlign");
  const _textDirection = dart.privateName(src__painting__text_painter, "_textDirection");
  const _textScaleFactor = dart.privateName(src__painting__text_painter, "_textScaleFactor");
  const _maxLines = dart.privateName(src__painting__text_painter, "_maxLines");
  const _ellipsis = dart.privateName(src__painting__text_painter, "_ellipsis");
  const _locale = dart.privateName(src__painting__text_painter, "_locale");
  const _strutStyle = dart.privateName(src__painting__text_painter, "_strutStyle");
  const _textWidthBasis = dart.privateName(src__painting__text_painter, "_textWidthBasis");
  const _createParagraphStyle = dart.privateName(src__painting__text_painter, "_createParagraphStyle");
  let const$3;
  const _applyFloatingPointHack = dart.privateName(src__painting__text_painter, "_applyFloatingPointHack");
  const _isUtf16Surrogate = dart.privateName(src__painting__text_painter, "_isUtf16Surrogate");
  const _emptyOffset = dart.privateName(src__painting__text_painter, "_emptyOffset");
  const _getRectFromUpstream = dart.privateName(src__painting__text_painter, "_getRectFromUpstream");
  const _getRectFromDownstream = dart.privateName(src__painting__text_painter, "_getRectFromDownstream");
  const _computeCaretMetrics = dart.privateName(src__painting__text_painter, "_computeCaretMetrics");
  src__painting__text_painter.TextPainter = class TextPainter extends core.Object {
    get text() {
      return this[_text];
    }
    set text(value) {
      let t7, t7$;
      if (!(value == null || dart.test(value.debugAssertIsValid()))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 108, 12, "value == null || value.debugAssertIsValid()");
      if (dart.equals(this[_text], value)) return;
      if (!dart.equals((t7 = this[_text], t7 == null ? null : t7.style), (t7$ = value, t7$ == null ? null : t7$.style))) this[_layoutTemplate] = null;
      this[_text] = value;
      this[_paragraph] = null;
      this[_needsLayout] = true;
    }
    get textAlign() {
      return this[_textAlign];
    }
    set textAlign(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 124, 12, "value != null");
      if (dart.equals(this[_textAlign], value)) return;
      this[_textAlign] = value;
      this[_paragraph] = null;
      this[_needsLayout] = true;
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(value) {
      if (dart.equals(this[_textDirection], value)) return;
      this[_textDirection] = value;
      this[_paragraph] = null;
      this[_layoutTemplate] = null;
      this[_needsLayout] = true;
    }
    get textScaleFactor() {
      return this[_textScaleFactor];
    }
    set textScaleFactor(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 166, 12, "value != null");
      if (this[_textScaleFactor] == value) return;
      this[_textScaleFactor] = value;
      this[_paragraph] = null;
      this[_layoutTemplate] = null;
      this[_needsLayout] = true;
    }
    get ellipsis() {
      return this[_ellipsis];
    }
    set ellipsis(value) {
      if (!(value == null || value[$isNotEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 193, 12, "t(value == null || value.isNotEmp");
      if (this[_ellipsis] == value) return;
      this[_ellipsis] = value;
      this[_paragraph] = null;
      this[_needsLayout] = true;
    }
    get locale() {
      return this[_locale];
    }
    set locale(value) {
      if (dart.equals(this[_locale], value)) return;
      this[_locale] = value;
      this[_paragraph] = null;
      this[_needsLayout] = true;
    }
    get maxLines() {
      return this[_maxLines];
    }
    set maxLines(value) {
      if (!(value == null || dart.notNull(value) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 222, 12, "t(value == null || value >");
      if (this[_maxLines] == value) return;
      this[_maxLines] = value;
      this[_paragraph] = null;
      this[_needsLayout] = true;
    }
    get strutStyle() {
      return this[_strutStyle];
    }
    set strutStyle(value) {
      if (dart.equals(this[_strutStyle], value)) return;
      this[_strutStyle] = value;
      this[_paragraph] = null;
      this[_needsLayout] = true;
    }
    get textWidthBasis() {
      return this[_textWidthBasis];
    }
    set textWidthBasis(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 254, 12, "t(value != nu");
      if (dart.equals(this[_textWidthBasis], value)) return;
      this[_textWidthBasis] = value;
      this[_paragraph] = null;
      this[_needsLayout] = true;
    }
    [_createParagraphStyle](defaultTextDirection) {
      let t8, t7, t8$, t7$;
      if (defaultTextDirection === void 0) defaultTextDirection = null;
      if (!(this.textAlign != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 267, 12, "t(textAlign != nu");
      if (!(this.textDirection != null || defaultTextDirection != null)) dart.assertFailed("TextPainter.textDirection must be set to a non-null value before using the TextPainter.", "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 268, 12, "t(textDirection != null || defaultTextDirection != nu");
      t7$ = (t7 = this[_text].style, t7 == null ? null : t7.getParagraphStyle({textAlign: this.textAlign, textDirection: (t8 = this.textDirection, t8 == null ? defaultTextDirection : t8), textScaleFactor: this.textScaleFactor, maxLines: this[_maxLines], ellipsis: this[_ellipsis], locale: this[_locale], strutStyle: this[_strutStyle]}));
      return t7$ == null ? new ui$.ParagraphStyle.new({textAlign: this.textAlign, textDirection: (t8$ = this.textDirection, t8$ == null ? defaultTextDirection : t8$), maxLines: this.maxLines, ellipsis: this.ellipsis, locale: this.locale}) : t7$;
    }
    get preferredLineHeight() {
      let t7, t7$;
      if (this[_layoutTemplate] == null) {
        let builder = new ui$.ParagraphBuilder.new(this[_createParagraphStyle](ui$.TextDirection.rtl));
        if ((t7 = this.text, t7 == null ? null : t7.style) != null) builder.pushStyle(this.text.style.getTextStyle({textScaleFactor: this.textScaleFactor}));
        builder.addText(" ");
        this[_layoutTemplate] = (t7$ = builder.build(), t7$.layout(const$3 || (const$3 = dart.const(new ui$.ParagraphConstraints.new({width: core.double.infinity})))), t7$);
      }
      return this[_layoutTemplate].height;
    }
    [_applyFloatingPointHack](layoutValue) {
      return layoutValue[$ceilToDouble]();
    }
    get minIntrinsicWidth() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 331, 12, "t(!_needsLayo");
      return this[_applyFloatingPointHack](this[_paragraph].minIntrinsicWidth);
    }
    get maxIntrinsicWidth() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 339, 12, "t(!_needsLayo");
      return this[_applyFloatingPointHack](this[_paragraph].maxIntrinsicWidth);
    }
    get width() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 347, 12, "t(!_needsLayo");
      return this[_applyFloatingPointHack](this[_paragraph].width);
    }
    get height() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 358, 12, "t(!_needsLayo");
      return this[_applyFloatingPointHack](this[_paragraph].height);
    }
    get size() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 366, 12, "t(!_needsLayo");
      return new ui$.Size.new(this.width, this.height);
    }
    computeDistanceToActualBaseline(baseline) {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 375, 12, "t(!_needsLayo");
      if (!(baseline != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 376, 12, "t(baseline != nu");
      switch (baseline) {
        case ui$.TextBaseline.alphabetic:
        {
          return this[_paragraph].alphabeticBaseline;
        }
        case ui$.TextBaseline.ideographic:
        {
          return this[_paragraph].ideographicBaseline;
        }
      }
      return null;
    }
    get didExceedMaxLines() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 398, 12, "t(!_needsLayo");
      return this[_paragraph].didExceedMaxLines;
    }
    layout(opts) {
      let minWidth = opts && 'minWidth' in opts ? opts.minWidth : 0.0;
      let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : core.double.infinity;
      if (!(this.text != null)) dart.assertFailed("TextPainter.text must be set to a non-null value before using the TextPainter.", "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 414, 12, "t(text != nu");
      if (!(this.textDirection != null)) dart.assertFailed("TextPainter.textDirection must be set to a non-null value before using the TextPainter.", "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 416, 12, "t(textDirection != nu");
      if (!dart.test(this[_needsLayout]) && minWidth == this[_lastMinWidth] && maxWidth == this[_lastMaxWidth]) return;
      this[_needsLayout] = false;
      if (this[_paragraph] == null) {
        let builder = new ui$.ParagraphBuilder.new(this[_createParagraphStyle]());
        this[_text].build(builder, {textScaleFactor: this.textScaleFactor});
        this[_paragraph] = builder.build();
      }
      this[_lastMinWidth] = minWidth;
      this[_lastMaxWidth] = maxWidth;
      this[_paragraph].layout(new ui$.ParagraphConstraints.new({width: maxWidth}));
      if (minWidth != maxWidth) {
        let newWidth = this.maxIntrinsicWidth[$clamp](minWidth, maxWidth);
        if (newWidth !== this.width) this[_paragraph].layout(new ui$.ParagraphConstraints.new({width: newWidth}));
      }
    }
    paint(canvas, offset) {
      if (!dart.test(dart.fn(() => {
        if (dart.test(this[_needsLayout])) {
          dart.throw(src__foundation__assertions.FlutterError.new("TextPainter.paint called when text geometry was not yet calculated.\n" + "Please call layout() before paint() to position the text before painting it."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 450, 12, "t(() {\n      if (_needsLayout) {\n        throw FlutterError(\n            'TextPainter.paint called when text geometry was not yet calculated.\\n'\n            'Please call layout() before paint() to position the text before painting it.');\n      }\n      return true;\n    }");
      canvas.drawParagraph(this[_paragraph], offset);
    }
    [_isUtf16Surrogate](value) {
      return (dart.notNull(value) & 63488) === 55296;
    }
    getOffsetAfter(offset) {
      let nextCodeUnit = this[_text].codeUnitAt(offset);
      if (nextCodeUnit == null) return null;
      return dart.test(this[_isUtf16Surrogate](nextCodeUnit)) ? dart.notNull(offset) + 2 : dart.notNull(offset) + 1;
    }
    getOffsetBefore(offset) {
      let prevCodeUnit = this[_text].codeUnitAt(dart.notNull(offset) - 1);
      if (prevCodeUnit == null) return null;
      return dart.test(this[_isUtf16Surrogate](prevCodeUnit)) ? dart.notNull(offset) - 2 : dart.notNull(offset) - 1;
    }
    [_getRectFromUpstream](offset, caretPrototype) {
      let flattenedText = this[_text].toPlainText();
      let prevCodeUnit = this[_text].codeUnitAt(math.max(core.int, 0, dart.notNull(offset) - 1));
      if (prevCodeUnit == null) return null;
      let needsSearch = dart.test(this[_isUtf16Surrogate](prevCodeUnit)) || this[_text].codeUnitAt(offset) == src__painting__text_painter.TextPainter._zwjUtf16;
      let graphemeClusterLength = needsSearch ? 2 : 1;
      let boxes = JSArrayOfTextBox().of([]);
      while (dart.test(boxes[$isEmpty]) && flattenedText != null) {
        let prevRuneOffset = dart.notNull(offset) - graphemeClusterLength;
        boxes = this[_paragraph].getBoxesForRange(prevRuneOffset, offset);
        if (dart.test(boxes[$isEmpty])) {
          if (!needsSearch) break;
          if (prevRuneOffset < -flattenedText.length) break;
          graphemeClusterLength = graphemeClusterLength * 2;
          continue;
        }
        let box = boxes[$first];
        let NEWLINE_CODE_UNIT = 10;
        if (prevCodeUnit === NEWLINE_CODE_UNIT) {
          return new ui$.Rect.fromLTRB(this[_emptyOffset].dx, box.bottom, this[_emptyOffset].dx, dart.notNull(box.bottom) + dart.notNull(box.bottom) - dart.notNull(box.top));
        }
        let caretEnd = box.end;
        let dx = dart.equals(box.direction, ui$.TextDirection.rtl) ? dart.notNull(caretEnd) - dart.notNull(caretPrototype.width) : caretEnd;
        return new ui$.Rect.fromLTRB(math.min(core.double, dx, this.width), box.top, math.min(core.double, dx, this.width), box.bottom);
      }
      return null;
    }
    [_getRectFromDownstream](offset, caretPrototype) {
      let flattenedText = this[_text].toPlainText();
      let nextCodeUnit = this[_text].codeUnitAt(math.min(core.int, offset, flattenedText == null ? 0 : flattenedText.length - 1));
      if (nextCodeUnit == null) return null;
      let needsSearch = dart.test(this[_isUtf16Surrogate](nextCodeUnit)) || nextCodeUnit == src__painting__text_painter.TextPainter._zwjUtf16;
      let graphemeClusterLength = needsSearch ? 2 : 1;
      let boxes = JSArrayOfTextBox().of([]);
      while (dart.test(boxes[$isEmpty]) && flattenedText != null) {
        let nextRuneOffset = dart.notNull(offset) + graphemeClusterLength;
        boxes = this[_paragraph].getBoxesForRange(offset, nextRuneOffset);
        if (dart.test(boxes[$isEmpty])) {
          if (!needsSearch) break;
          if (nextRuneOffset >= flattenedText.length << 1 >>> 0) break;
          graphemeClusterLength = graphemeClusterLength * 2;
          continue;
        }
        let box = boxes[$last];
        let caretStart = box.start;
        let dx = dart.equals(box.direction, ui$.TextDirection.rtl) ? dart.notNull(caretStart) - dart.notNull(caretPrototype.width) : caretStart;
        return new ui$.Rect.fromLTRB(math.min(core.double, dx, this.width), box.top, math.min(core.double, dx, this.width), box.bottom);
      }
      return null;
    }
    get [_emptyOffset]() {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 582, 12, "t(!_needsLayo");
      if (!(this.textAlign != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 583, 12, "t(textAlign != nu");
      switch (this.textAlign) {
        case ui$.TextAlign.left:
        {
          return ui$.Offset.zero;
        }
        case ui$.TextAlign.right:
        {
          return new ui$.Offset.new(this.width, 0.0);
        }
        case ui$.TextAlign.center:
        {
          return new ui$.Offset.new(dart.notNull(this.width) / 2.0, 0.0);
        }
        case ui$.TextAlign.justify:
        case ui$.TextAlign.start:
        {
          if (!(this.textDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 593, 16, "t(textDirection != nu");
          switch (this.textDirection) {
            case ui$.TextDirection.rtl:
            {
              return new ui$.Offset.new(this.width, 0.0);
            }
            case ui$.TextDirection.ltr:
            {
              return ui$.Offset.zero;
            }
          }
          return null;
        }
        case ui$.TextAlign.end:
        {
          if (!(this.textDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 602, 16, "t(textDirection != nu");
          switch (this.textDirection) {
            case ui$.TextDirection.rtl:
            {
              return ui$.Offset.zero;
            }
            case ui$.TextDirection.ltr:
            {
              return new ui$.Offset.new(this.width, 0.0);
            }
          }
          return null;
        }
      }
      return null;
    }
    getOffsetForCaret(position, caretPrototype) {
      this[_computeCaretMetrics](position, caretPrototype);
      return this[_caretMetrics].offset;
    }
    getFullHeightForCaret(position, caretPrototype) {
      this[_computeCaretMetrics](position, caretPrototype);
      return this[_caretMetrics].fullHeight;
    }
    [_computeCaretMetrics](position, caretPrototype) {
      let t7, t7$;
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 644, 12, "t(!_needsLayo");
      if (dart.equals(position, this[_previousCaretPosition]) && dart.equals(caretPrototype, this[_previousCaretPrototype])) return;
      let offset = position.offset;
      if (!(position.affinity != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 648, 12, "t(position.affinity != nu");
      let rect = null;
      switch (position.affinity) {
        case ui$.TextAffinity.upstream:
        {
          {
            rect = (t7 = this[_getRectFromUpstream](offset, caretPrototype), t7 == null ? this[_getRectFromDownstream](offset, caretPrototype) : t7);
            break;
          }
        }
        case ui$.TextAffinity.downstream:
        {
          {
            rect = (t7$ = this[_getRectFromDownstream](offset, caretPrototype), t7$ == null ? this[_getRectFromUpstream](offset, caretPrototype) : t7$);
            break;
          }
        }
      }
      this[_caretMetrics] = new src__painting__text_painter._CaretMetrics.new({offset: rect != null ? new ui$.Offset.new(rect.left, rect.top) : this[_emptyOffset], fullHeight: rect != null ? dart.notNull(rect.bottom) - dart.notNull(rect.top) : null});
    }
    getBoxesForSelection(selection) {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 676, 12, "t(!_needsLayo");
      return this[_paragraph].getBoxesForRange(selection.start, selection.end);
    }
    getPositionForOffset(offset) {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 682, 12, "t(!_needsLayo");
      return this[_paragraph].getPositionForOffset(offset);
    }
    getWordBoundary(position) {
      if (!!dart.test(this[_needsLayout])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 694, 12, "t(!_needsLayo");
      let indices = this[_paragraph].getWordBoundary(position.offset);
      return new src__services__text_editing.TextRange.new({start: indices[$_get](0), end: indices[$_get](1)});
    }
  };
  (src__painting__text_painter.TextPainter.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : ui$.TextAlign.start;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1.0;
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
    let ellipsis = opts && 'ellipsis' in opts ? opts.ellipsis : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
    let textWidthBasis = opts && 'textWidthBasis' in opts ? opts.textWidthBasis : src__painting__text_painter.TextWidthBasis.parent;
    this[_paragraph] = null;
    this[_needsLayout] = true;
    this[_layoutTemplate] = null;
    this[_lastMinWidth] = null;
    this[_lastMaxWidth] = null;
    this[_caretMetrics] = null;
    this[_previousCaretPosition] = null;
    this[_previousCaretPrototype] = null;
    if (!(text == null || dart.test(text.debugAssertIsValid()))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 82, 16, "text == null || text.debugAssertIsValid()");
    if (!(textAlign != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 83, 16, "textAlign != null");
    if (!(textScaleFactor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 84, 16, "textScaleFactor != null");
    if (!(maxLines == null || dart.notNull(maxLines) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 85, 16, "maxLines == null || maxLines > 0");
    if (!(textWidthBasis != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart", 86, 16, "textWidthBasis != null");
    this[_text] = text;
    this[_textAlign] = textAlign;
    this[_textDirection] = textDirection;
    this[_textScaleFactor] = textScaleFactor;
    this[_maxLines] = maxLines;
    this[_ellipsis] = ellipsis;
    this[_locale] = locale;
    this[_strutStyle] = strutStyle;
    this[_textWidthBasis] = textWidthBasis;
    ;
  }).prototype = src__painting__text_painter.TextPainter.prototype;
  dart.addTypeTests(src__painting__text_painter.TextPainter);
  dart.setMethodSignature(src__painting__text_painter.TextPainter, () => ({
    __proto__: dart.getMethods(src__painting__text_painter.TextPainter.__proto__),
    [_createParagraphStyle]: dart.fnType(ui$.ParagraphStyle, [], [ui$.TextDirection]),
    [_applyFloatingPointHack]: dart.fnType(core.double, [core.double]),
    computeDistanceToActualBaseline: dart.fnType(core.double, [ui$.TextBaseline]),
    layout: dart.fnType(dart.void, [], {maxWidth: core.double, minWidth: core.double}),
    paint: dart.fnType(dart.void, [ui$.Canvas, ui$.Offset]),
    [_isUtf16Surrogate]: dart.fnType(core.bool, [core.int]),
    getOffsetAfter: dart.fnType(core.int, [core.int]),
    getOffsetBefore: dart.fnType(core.int, [core.int]),
    [_getRectFromUpstream]: dart.fnType(ui$.Rect, [core.int, ui$.Rect]),
    [_getRectFromDownstream]: dart.fnType(ui$.Rect, [core.int, ui$.Rect]),
    getOffsetForCaret: dart.fnType(ui$.Offset, [ui$.TextPosition, ui$.Rect]),
    getFullHeightForCaret: dart.fnType(core.double, [ui$.TextPosition, ui$.Rect]),
    [_computeCaretMetrics]: dart.fnType(dart.void, [ui$.TextPosition, ui$.Rect]),
    getBoxesForSelection: dart.fnType(core.List$(ui$.TextBox), [src__services__text_editing.TextSelection]),
    getPositionForOffset: dart.fnType(ui$.TextPosition, [ui$.Offset]),
    getWordBoundary: dart.fnType(src__services__text_editing.TextRange, [ui$.TextPosition])
  }));
  dart.setGetterSignature(src__painting__text_painter.TextPainter, () => ({
    __proto__: dart.getGetters(src__painting__text_painter.TextPainter.__proto__),
    text: src__painting__text_span.TextSpan,
    textAlign: ui$.TextAlign,
    textDirection: ui$.TextDirection,
    textScaleFactor: core.double,
    ellipsis: core.String,
    locale: ui$.Locale,
    maxLines: core.int,
    strutStyle: src__painting__strut_style.StrutStyle,
    textWidthBasis: src__painting__text_painter.TextWidthBasis,
    preferredLineHeight: core.double,
    minIntrinsicWidth: core.double,
    maxIntrinsicWidth: core.double,
    width: core.double,
    height: core.double,
    size: ui$.Size,
    didExceedMaxLines: core.bool,
    [_emptyOffset]: ui$.Offset
  }));
  dart.setSetterSignature(src__painting__text_painter.TextPainter, () => ({
    __proto__: dart.getSetters(src__painting__text_painter.TextPainter.__proto__),
    text: src__painting__text_span.TextSpan,
    textAlign: ui$.TextAlign,
    textDirection: ui$.TextDirection,
    textScaleFactor: core.double,
    ellipsis: core.String,
    locale: ui$.Locale,
    maxLines: core.int,
    strutStyle: src__painting__strut_style.StrutStyle,
    textWidthBasis: src__painting__text_painter.TextWidthBasis
  }));
  dart.setLibraryUri(src__painting__text_painter.TextPainter, "package:flutter_web/src/painting/text_painter.dart");
  dart.setFieldSignature(src__painting__text_painter.TextPainter, () => ({
    __proto__: dart.getFields(src__painting__text_painter.TextPainter.__proto__),
    [_paragraph]: dart.fieldType(ui$.Paragraph),
    [_needsLayout]: dart.fieldType(core.bool),
    [_text]: dart.fieldType(src__painting__text_span.TextSpan),
    [_textAlign]: dart.fieldType(ui$.TextAlign),
    [_textDirection]: dart.fieldType(ui$.TextDirection),
    [_textScaleFactor]: dart.fieldType(core.double),
    [_ellipsis]: dart.fieldType(core.String),
    [_locale]: dart.fieldType(ui$.Locale),
    [_maxLines]: dart.fieldType(core.int),
    [_strutStyle]: dart.fieldType(src__painting__strut_style.StrutStyle),
    [_textWidthBasis]: dart.fieldType(src__painting__text_painter.TextWidthBasis),
    [_layoutTemplate]: dart.fieldType(ui$.Paragraph),
    [_lastMinWidth]: dart.fieldType(core.double),
    [_lastMaxWidth]: dart.fieldType(core.double),
    [_caretMetrics]: dart.fieldType(src__painting__text_painter._CaretMetrics),
    [_previousCaretPosition]: dart.fieldType(ui$.TextPosition),
    [_previousCaretPrototype]: dart.fieldType(ui$.Rect)
  }));
  dart.defineLazy(src__painting__text_painter.TextPainter, {
    /*src__painting__text_painter.TextPainter._zwjUtf16*/get _zwjUtf16() {
      return 8205;
    }
  });
  src__painting__debug.debugAssertAllPaintingVarsUnset = function(reason, opts) {
    let debugDisableShadowsOverride = opts && 'debugDisableShadowsOverride' in opts ? opts.debugDisableShadowsOverride : false;
    if (!dart.test(dart.fn(() => {
      if (!dart.equals(src__painting__debug.debugDisableShadows, debugDisableShadowsOverride)) {
        dart.throw(src__foundation__assertions.FlutterError.new(reason));
      }
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/debug.dart", 28, 10, "() {\n    if (debugDisableShadows != debugDisableShadowsOverride) {\n      throw new FlutterError(reason);\n    }\n    return true;\n  }()");
    return true;
  };
  dart.defineLazy(src__painting__debug, {
    /*src__painting__debug.debugDisableShadows*/get debugDisableShadows() {
      return false;
    },
    set debugDisableShadows(_) {}
  });
  src__painting__fractional_offset.FractionalOffset = class FractionalOffset extends src__painting__alignment.Alignment {
    static fromOffsetAndSize(offset, size) {
      if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/fractional_offset.dart", 67, 12, "size != null");
      if (!(offset != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/fractional_offset.dart", 68, 12, "offset != null");
      return new src__painting__fractional_offset.FractionalOffset.new(dart.notNull(offset.dx) / dart.notNull(size.width), dart.notNull(offset.dy) / dart.notNull(size.height));
    }
    static fromOffsetAndRect(offset, rect) {
      return src__painting__fractional_offset.FractionalOffset.fromOffsetAndSize(offset['-'](rect.topLeft), rect.size);
    }
    get dx() {
      return (dart.notNull(this.x) + 1.0) / 2.0;
    }
    get dy() {
      return (dart.notNull(this.y) + 1.0) / 2.0;
    }
    ['-'](other) {
      if (!src__painting__fractional_offset.FractionalOffset.is(other)) return super['-'](other);
      let typedOther = src__painting__fractional_offset.FractionalOffset._check(other);
      return new src__painting__fractional_offset.FractionalOffset.new(dart.notNull(this.dx) - dart.notNull(typedOther.dx), dart.notNull(this.dy) - dart.notNull(typedOther.dy));
    }
    ['+'](other) {
      if (!src__painting__fractional_offset.FractionalOffset.is(other)) return super['+'](other);
      let typedOther = src__painting__fractional_offset.FractionalOffset._check(other);
      return new src__painting__fractional_offset.FractionalOffset.new(dart.notNull(this.dx) + dart.notNull(typedOther.dx), dart.notNull(this.dy) + dart.notNull(typedOther.dy));
    }
    _negate() {
      return new src__painting__fractional_offset.FractionalOffset.new(-dart.notNull(this.dx), -dart.notNull(this.dy));
    }
    ['*'](other) {
      return new src__painting__fractional_offset.FractionalOffset.new(dart.notNull(this.dx) * dart.notNull(other), dart.notNull(this.dy) * dart.notNull(other));
    }
    ['/'](other) {
      return new src__painting__fractional_offset.FractionalOffset.new(dart.notNull(this.dx) / dart.notNull(other), dart.notNull(this.dy) / dart.notNull(other));
    }
    ['~/'](other) {
      return new src__painting__fractional_offset.FractionalOffset.new((dart.notNull(this.dx) / dart.notNull(other))[$truncate]()[$toDouble](), (dart.notNull(this.dy) / dart.notNull(other))[$truncate]()[$toDouble]());
    }
    ['%'](other) {
      return new src__painting__fractional_offset.FractionalOffset.new(this.dx[$modulo](other), this.dy[$modulo](other));
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/fractional_offset.dart", 181, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return new src__painting__fractional_offset.FractionalOffset.new(ui$.lerpDouble(0.5, b.dx, t), ui$.lerpDouble(0.5, b.dy, t));
      if (b == null) return new src__painting__fractional_offset.FractionalOffset.new(ui$.lerpDouble(a.dx, 0.5, t), ui$.lerpDouble(a.dy, 0.5, t));
      return new src__painting__fractional_offset.FractionalOffset.new(ui$.lerpDouble(a.dx, b.dx, t), ui$.lerpDouble(a.dy, b.dy, t));
    }
    toString() {
      return "FractionalOffset(" + this.dx[$toStringAsFixed](1) + ", " + this.dy[$toStringAsFixed](1) + ")";
    }
  };
  (src__painting__fractional_offset.FractionalOffset.new = function(dx, dy) {
    if (!(dx != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/fractional_offset.dart", 58, 16, "dx != null");
    if (!(dy != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/fractional_offset.dart", 59, 16, "dy != null");
    src__painting__fractional_offset.FractionalOffset.__proto__.new.call(this, dart.notNull(dx) * 2.0 - 1.0, dart.notNull(dy) * 2.0 - 1.0);
    ;
  }).prototype = src__painting__fractional_offset.FractionalOffset.prototype;
  dart.addTypeTests(src__painting__fractional_offset.FractionalOffset);
  dart.setMethodSignature(src__painting__fractional_offset.FractionalOffset, () => ({
    __proto__: dart.getMethods(src__painting__fractional_offset.FractionalOffset.__proto__),
    _negate: dart.fnType(src__painting__fractional_offset.FractionalOffset, []),
    '*': dart.fnType(src__painting__fractional_offset.FractionalOffset, [core.double]),
    '/': dart.fnType(src__painting__fractional_offset.FractionalOffset, [core.double]),
    '~/': dart.fnType(src__painting__fractional_offset.FractionalOffset, [core.double]),
    '%': dart.fnType(src__painting__fractional_offset.FractionalOffset, [core.double])
  }));
  dart.setGetterSignature(src__painting__fractional_offset.FractionalOffset, () => ({
    __proto__: dart.getGetters(src__painting__fractional_offset.FractionalOffset.__proto__),
    dx: core.double,
    dy: core.double
  }));
  dart.setLibraryUri(src__painting__fractional_offset.FractionalOffset, "package:flutter_web/src/painting/fractional_offset.dart");
  dart.defineExtensionMethods(src__painting__fractional_offset.FractionalOffset, ['toString']);
  dart.defineLazy(src__painting__fractional_offset.FractionalOffset, {
    /*src__painting__fractional_offset.FractionalOffset.topLeft*/get topLeft() {
      return dart.const(new src__painting__fractional_offset.FractionalOffset.new(0.0, 0.0));
    },
    /*src__painting__fractional_offset.FractionalOffset.topCenter*/get topCenter() {
      return dart.const(new src__painting__fractional_offset.FractionalOffset.new(0.5, 0.0));
    },
    /*src__painting__fractional_offset.FractionalOffset.topRight*/get topRight() {
      return dart.const(new src__painting__fractional_offset.FractionalOffset.new(1.0, 0.0));
    },
    /*src__painting__fractional_offset.FractionalOffset.centerLeft*/get centerLeft() {
      return dart.const(new src__painting__fractional_offset.FractionalOffset.new(0.0, 0.5));
    },
    /*src__painting__fractional_offset.FractionalOffset.center*/get center() {
      return dart.const(new src__painting__fractional_offset.FractionalOffset.new(0.5, 0.5));
    },
    /*src__painting__fractional_offset.FractionalOffset.centerRight*/get centerRight() {
      return dart.const(new src__painting__fractional_offset.FractionalOffset.new(1.0, 0.5));
    },
    /*src__painting__fractional_offset.FractionalOffset.bottomLeft*/get bottomLeft() {
      return dart.const(new src__painting__fractional_offset.FractionalOffset.new(0.0, 1.0));
    },
    /*src__painting__fractional_offset.FractionalOffset.bottomCenter*/get bottomCenter() {
      return dart.const(new src__painting__fractional_offset.FractionalOffset.new(0.5, 1.0));
    },
    /*src__painting__fractional_offset.FractionalOffset.bottomRight*/get bottomRight() {
      return dart.const(new src__painting__fractional_offset.FractionalOffset.new(1.0, 1.0));
    }
  });
  const _accessibilityFeatures = dart.privateName(src__semantics__binding, "_accessibilityFeatures");
  src__semantics__binding.SemanticsBinding = class SemanticsBinding extends src__foundation__binding.BindingBase {
    static get instance() {
      return src__semantics__binding.SemanticsBinding._instance;
    }
  };
  src__semantics__binding.SemanticsBinding[dart.mixinOn] = BindingBase => class SemanticsBinding extends BindingBase {
    initInstances() {
      super.initInstances();
      src__semantics__binding.SemanticsBinding._instance = this;
      this[_accessibilityFeatures] = ui$.window.accessibilityFeatures;
    }
    handleAccessibilityFeaturesChanged() {
      this[_accessibilityFeatures] = ui$.window.accessibilityFeatures;
    }
    get accessibilityFeatures() {
      return this[_accessibilityFeatures];
    }
    get disableAnimations() {
      let value = this[_accessibilityFeatures].disableAnimations;
      if (!dart.test(dart.fn(() => {
        if (src__semantics__debug.debugSemanticsDisableAnimations != null) value = src__semantics__debug.debugSemanticsDisableAnimations;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/semantics/binding.dart", 52, 12, "() {\n      if (debugSemanticsDisableAnimations != null)\n        value = debugSemanticsDisableAnimations;\n      return true;\n    }()");
      return value;
    }
  };
  (src__semantics__binding.SemanticsBinding[dart.mixinNew] = function() {
    this[_accessibilityFeatures] = null;
  }).prototype = src__semantics__binding.SemanticsBinding.prototype;
  dart.addTypeTests(src__semantics__binding.SemanticsBinding);
  src__semantics__binding.SemanticsBinding[dart.implements] = () => [src__foundation__binding.BindingBase];
  dart.setMethodSignature(src__semantics__binding.SemanticsBinding, () => ({
    __proto__: dart.getMethods(src__semantics__binding.SemanticsBinding.__proto__),
    handleAccessibilityFeaturesChanged: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__semantics__binding.SemanticsBinding, () => ({
    __proto__: dart.getGetters(src__semantics__binding.SemanticsBinding.__proto__),
    accessibilityFeatures: ui$.AccessibilityFeatures,
    disableAnimations: core.bool
  }));
  dart.setLibraryUri(src__semantics__binding.SemanticsBinding, "package:flutter_web/src/semantics/binding.dart");
  dart.setFieldSignature(src__semantics__binding.SemanticsBinding, () => ({
    __proto__: dart.getFields(src__semantics__binding.SemanticsBinding.__proto__),
    [_accessibilityFeatures]: dart.fieldType(ui$.AccessibilityFeatures)
  }));
  dart.defineLazy(src__semantics__binding.SemanticsBinding, {
    /*src__semantics__binding.SemanticsBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  });
  dart.defineLazy(src__semantics__debug, {
    /*src__semantics__debug.debugSemanticsDisableAnimations*/get debugSemanticsDisableAnimations() {
      return null;
    },
    set debugSemanticsDisableAnimations(_) {}
  });
  const _scaleAlpha = dart.privateName(src__painting__colors, "_scaleAlpha");
  src__painting__colors.HSVColor = class HSVColor extends core.Object {
    get alpha() {
      return this[alpha$];
    }
    set alpha(value) {
      super.alpha = value;
    }
    get hue() {
      return this[hue$];
    }
    set hue(value) {
      super.hue = value;
    }
    get saturation() {
      return this[saturation$];
    }
    set saturation(value) {
      super.saturation = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    static fromColor(color) {
      let red = dart.notNull(color.red) / 255;
      let green = dart.notNull(color.green) / 255;
      let blue = dart.notNull(color.blue) / 255;
      let max = math.max(core.double, red, math.max(core.double, green, blue));
      let min = math.min(core.double, red, math.min(core.double, green, blue));
      let delta = max - min;
      let alpha = dart.notNull(color.alpha) / 255;
      let hue = src__painting__colors._getHue(red, green, blue, max, delta);
      let saturation = max === 0.0 ? 0.0 : delta / max;
      return new src__painting__colors.HSVColor.fromAHSV(alpha, hue, saturation, max);
    }
    withAlpha(alpha) {
      return new src__painting__colors.HSVColor.fromAHSV(alpha, this.hue, this.saturation, this.value);
    }
    withHue(hue) {
      return new src__painting__colors.HSVColor.fromAHSV(this.alpha, hue, this.saturation, this.value);
    }
    withSaturation(saturation) {
      return new src__painting__colors.HSVColor.fromAHSV(this.alpha, this.hue, saturation, this.value);
    }
    withValue(value) {
      return new src__painting__colors.HSVColor.fromAHSV(this.alpha, this.hue, this.saturation, value);
    }
    toColor() {
      let chroma = dart.notNull(this.saturation) * dart.notNull(this.value);
      let secondary = chroma * (1.0 - ((dart.notNull(this.hue) / 60.0)[$modulo](2.0) - 1.0)[$abs]());
      let match = dart.notNull(this.value) - chroma;
      return src__painting__colors._colorFromHue(this.alpha, this.hue, chroma, secondary, match);
    }
    [_scaleAlpha](factor) {
      return this.withAlpha(dart.notNull(this.alpha) * dart.notNull(factor));
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 204, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b[_scaleAlpha](t);
      if (b == null) return a[_scaleAlpha](1.0 - dart.notNull(t));
      return new src__painting__colors.HSVColor.fromAHSV(ui$.lerpDouble(a.alpha, b.alpha, t)[$clamp](0.0, 1.0), ui$.lerpDouble(a.hue, b.hue, t)[$modulo](360.0), ui$.lerpDouble(a.saturation, b.saturation, t)[$clamp](0.0, 1.0), ui$.lerpDouble(a.value, b.value, t)[$clamp](0.0, 1.0));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!src__painting__colors.HSVColor.is(other)) return false;
      let typedOther = src__painting__colors.HSVColor._check(other);
      return typedOther.alpha == this.alpha && typedOther.hue == this.hue && typedOther.saturation == this.saturation && typedOther.value == this.value;
    }
    get hashCode() {
      return ui$.hashValues(this.alpha, this.hue, this.saturation, this.value);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.alpha) + ", " + dart.str(this.hue) + ", " + dart.str(this.saturation) + ", " + dart.str(this.value) + ")";
    }
  };
  (src__painting__colors.HSVColor.fromAHSV = function(alpha, hue, saturation, value) {
    this[alpha$] = alpha;
    this[hue$] = hue;
    this[saturation$] = saturation;
    this[value$] = value;
    if (!(alpha != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 94, 16, "alpha != null");
    if (!(hue != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 95, 16, "hue != null");
    if (!(saturation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 96, 16, "saturation != null");
    if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 97, 16, "value != null");
    if (!(dart.notNull(alpha) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 98, 16, "alpha >= 0.0");
    if (!(dart.notNull(alpha) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 99, 16, "alpha <= 1.0");
    if (!(dart.notNull(hue) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 100, 16, "hue >= 0.0");
    if (!(dart.notNull(hue) <= 360.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 101, 16, "hue <= 360.0");
    if (!(dart.notNull(saturation) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 102, 16, "saturation >= 0.0");
    if (!(dart.notNull(saturation) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 103, 16, "saturation <= 1.0");
    if (!(dart.notNull(value) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 104, 16, "value >= 0.0");
    if (!(dart.notNull(value) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 105, 16, "value <= 1.0");
    ;
  }).prototype = src__painting__colors.HSVColor.prototype;
  dart.addTypeTests(src__painting__colors.HSVColor);
  const alpha$ = Symbol("HSVColor.alpha");
  const hue$ = Symbol("HSVColor.hue");
  const saturation$ = Symbol("HSVColor.saturation");
  const value$ = Symbol("HSVColor.value");
  dart.setMethodSignature(src__painting__colors.HSVColor, () => ({
    __proto__: dart.getMethods(src__painting__colors.HSVColor.__proto__),
    withAlpha: dart.fnType(src__painting__colors.HSVColor, [core.double]),
    withHue: dart.fnType(src__painting__colors.HSVColor, [core.double]),
    withSaturation: dart.fnType(src__painting__colors.HSVColor, [core.double]),
    withValue: dart.fnType(src__painting__colors.HSVColor, [core.double]),
    toColor: dart.fnType(ui$.Color, []),
    [_scaleAlpha]: dart.fnType(src__painting__colors.HSVColor, [core.double])
  }));
  dart.setLibraryUri(src__painting__colors.HSVColor, "package:flutter_web/src/painting/colors.dart");
  dart.setFieldSignature(src__painting__colors.HSVColor, () => ({
    __proto__: dart.getFields(src__painting__colors.HSVColor.__proto__),
    alpha: dart.finalFieldType(core.double),
    hue: dart.finalFieldType(core.double),
    saturation: dart.finalFieldType(core.double),
    value: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__painting__colors.HSVColor, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__painting__colors.HSVColor, ['hashCode']);
  src__painting__colors.HSLColor = class HSLColor extends core.Object {
    get alpha() {
      return this[alpha$0];
    }
    set alpha(value) {
      super.alpha = value;
    }
    get hue() {
      return this[hue$0];
    }
    set hue(value) {
      super.hue = value;
    }
    get saturation() {
      return this[saturation$0];
    }
    set saturation(value) {
      super.saturation = value;
    }
    get lightness() {
      return this[lightness$];
    }
    set lightness(value) {
      super.lightness = value;
    }
    static fromColor(color) {
      let red = dart.notNull(color.red) / 255;
      let green = dart.notNull(color.green) / 255;
      let blue = dart.notNull(color.blue) / 255;
      let max = math.max(core.double, red, math.max(core.double, green, blue));
      let min = math.min(core.double, red, math.min(core.double, green, blue));
      let delta = max - min;
      let alpha = dart.notNull(color.alpha) / 255;
      let hue = src__painting__colors._getHue(red, green, blue, max, delta);
      let lightness = (max + min) / 2.0;
      let saturation = lightness === 1.0 ? 0.0 : (delta / (1.0 - (2.0 * lightness - 1.0)[$abs]()))[$clamp](0.0, 1.0);
      return new src__painting__colors.HSLColor.fromAHSL(alpha, hue, saturation, lightness);
    }
    withAlpha(alpha) {
      return new src__painting__colors.HSLColor.fromAHSL(alpha, this.hue, this.saturation, this.lightness);
    }
    withHue(hue) {
      return new src__painting__colors.HSLColor.fromAHSL(this.alpha, hue, this.saturation, this.lightness);
    }
    withSaturation(saturation) {
      return new src__painting__colors.HSLColor.fromAHSL(this.alpha, this.hue, saturation, this.lightness);
    }
    withLightness(lightness) {
      return new src__painting__colors.HSLColor.fromAHSL(this.alpha, this.hue, this.saturation, lightness);
    }
    toColor() {
      let chroma = (1.0 - (2.0 * dart.notNull(this.lightness) - 1.0)[$abs]()) * dart.notNull(this.saturation);
      let secondary = chroma * (1.0 - ((dart.notNull(this.hue) / 60.0)[$modulo](2.0) - 1.0)[$abs]());
      let match = dart.notNull(this.lightness) - chroma / 2.0;
      return src__painting__colors._colorFromHue(this.alpha, this.hue, chroma, secondary, match);
    }
    [_scaleAlpha](factor) {
      return this.withAlpha(dart.notNull(this.alpha) * dart.notNull(factor));
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 386, 12, "t(t != nu");
      if (a == null && b == null) return null;
      if (a == null) return b[_scaleAlpha](t);
      if (b == null) return a[_scaleAlpha](1.0 - dart.notNull(t));
      return new src__painting__colors.HSLColor.fromAHSL(ui$.lerpDouble(a.alpha, b.alpha, t)[$clamp](0.0, 1.0), ui$.lerpDouble(a.hue, b.hue, t)[$modulo](360.0), ui$.lerpDouble(a.saturation, b.saturation, t)[$clamp](0.0, 1.0), ui$.lerpDouble(a.lightness, b.lightness, t)[$clamp](0.0, 1.0));
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!src__painting__colors.HSLColor.is(other)) return false;
      let typedOther = src__painting__colors.HSLColor._check(other);
      return typedOther.alpha == this.alpha && typedOther.hue == this.hue && typedOther.saturation == this.saturation && typedOther.lightness == this.lightness;
    }
    get hashCode() {
      return ui$.hashValues(this.alpha, this.hue, this.saturation, this.lightness);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.alpha) + ", " + dart.str(this.hue) + ", " + dart.str(this.saturation) + ", " + dart.str(this.lightness) + ")";
    }
  };
  (src__painting__colors.HSLColor.fromAHSL = function(alpha, hue, saturation, lightness) {
    this[alpha$0] = alpha;
    this[hue$0] = hue;
    this[saturation$0] = saturation;
    this[lightness$] = lightness;
    if (!(alpha != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 261, 16, "t(alpha != nu");
    if (!(hue != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 262, 16, "t(hue != nu");
    if (!(saturation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 263, 16, "t(saturation != nu");
    if (!(lightness != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 264, 16, "t(lightness != nu");
    if (!(dart.notNull(alpha) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 265, 16, "t(alpha >= 0");
    if (!(dart.notNull(alpha) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 266, 16, "t(alpha <= 1");
    if (!(dart.notNull(hue) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 267, 16, "t(hue >= 0");
    if (!(dart.notNull(hue) <= 360.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 268, 16, "t(hue <= 360");
    if (!(dart.notNull(saturation) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 269, 16, "t(saturation >= 0");
    if (!(dart.notNull(saturation) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 270, 16, "t(saturation <= 1");
    if (!(dart.notNull(lightness) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 271, 16, "t(lightness >= 0");
    if (!(dart.notNull(lightness) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/colors.dart", 272, 16, "t(lightness <= 1");
    ;
  }).prototype = src__painting__colors.HSLColor.prototype;
  dart.addTypeTests(src__painting__colors.HSLColor);
  const alpha$0 = Symbol("HSLColor.alpha");
  const hue$0 = Symbol("HSLColor.hue");
  const saturation$0 = Symbol("HSLColor.saturation");
  const lightness$ = Symbol("HSLColor.lightness");
  dart.setMethodSignature(src__painting__colors.HSLColor, () => ({
    __proto__: dart.getMethods(src__painting__colors.HSLColor.__proto__),
    withAlpha: dart.fnType(src__painting__colors.HSLColor, [core.double]),
    withHue: dart.fnType(src__painting__colors.HSLColor, [core.double]),
    withSaturation: dart.fnType(src__painting__colors.HSLColor, [core.double]),
    withLightness: dart.fnType(src__painting__colors.HSLColor, [core.double]),
    toColor: dart.fnType(ui$.Color, []),
    [_scaleAlpha]: dart.fnType(src__painting__colors.HSLColor, [core.double])
  }));
  dart.setLibraryUri(src__painting__colors.HSLColor, "package:flutter_web/src/painting/colors.dart");
  dart.setFieldSignature(src__painting__colors.HSLColor, () => ({
    __proto__: dart.getFields(src__painting__colors.HSLColor.__proto__),
    alpha: dart.finalFieldType(core.double),
    hue: dart.finalFieldType(core.double),
    saturation: dart.finalFieldType(core.double),
    lightness: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__painting__colors.HSLColor, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__painting__colors.HSLColor, ['hashCode']);
  const _swatch$ = dart.privateName(src__painting__colors, "_swatch");
  const _is_ColorSwatch_default = Symbol('_is_ColorSwatch_default');
  src__painting__colors.ColorSwatch$ = dart.generic(T => {
    let ColorSwatchOfT = () => (ColorSwatchOfT = dart.constFn(src__painting__colors.ColorSwatch$(T)))();
    class ColorSwatch extends ui$.Color {
      _get(index) {
        T._check(index);
        return this[_swatch$][$_get](index);
      }
      _equals(other) {
        if (other == null) return false;
        if (this === other) return true;
        if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
        let typedOther = ColorSwatchOfT()._check(other);
        return super._equals(other) && dart.equals(this[_swatch$], typedOther[_swatch$]);
      }
      get hashCode() {
        return ui$.hashValues(this[$runtimeType], this.value, this[_swatch$]);
      }
      toString() {
        return dart.str(this[$runtimeType]) + "(primary value: " + dart.str(super.toString()) + ")";
      }
    }
    (ColorSwatch.new = function(primary, _swatch) {
      this[_swatch$] = _swatch;
      ColorSwatch.__proto__.new.call(this, primary);
      ;
    }).prototype = ColorSwatch.prototype;
    dart.addTypeTests(ColorSwatch);
    ColorSwatch.prototype[_is_ColorSwatch_default] = true;
    dart.setMethodSignature(ColorSwatch, () => ({
      __proto__: dart.getMethods(ColorSwatch.__proto__),
      _get: dart.fnType(ui$.Color, [core.Object])
    }));
    dart.setLibraryUri(ColorSwatch, "package:flutter_web/src/painting/colors.dart");
    dart.setFieldSignature(ColorSwatch, () => ({
      __proto__: dart.getFields(ColorSwatch.__proto__),
      [_swatch$]: dart.finalFieldType(core.Map$(T, ui$.Color))
    }));
    dart.defineExtensionMethods(ColorSwatch, ['_equals', 'toString']);
    dart.defineExtensionAccessors(ColorSwatch, ['hashCode']);
    return ColorSwatch;
  });
  src__painting__colors.ColorSwatch = src__painting__colors.ColorSwatch$();
  dart.addTypeTests(src__painting__colors.ColorSwatch, _is_ColorSwatch_default);
  src__painting__colors._getHue = function(red, green, blue, max, delta) {
    let hue = null;
    if (max === 0.0) {
      hue = 0.0;
    } else if (max == red) {
      hue = 60.0 * ((dart.notNull(green) - dart.notNull(blue)) / dart.notNull(delta))[$modulo](6);
    } else if (max == green) {
      hue = 60.0 * ((dart.notNull(blue) - dart.notNull(red)) / dart.notNull(delta) + 2);
    } else if (max == blue) {
      hue = 60.0 * ((dart.notNull(red) - dart.notNull(green)) / dart.notNull(delta) + 4);
    }
    hue = hue[$isNaN] ? 0.0 : hue;
    return hue;
  };
  src__painting__colors._colorFromHue = function(alpha, hue, chroma, secondary, match) {
    let red = null;
    let green = null;
    let blue = null;
    if (dart.notNull(hue) < 60.0) {
      red = chroma;
      green = secondary;
      blue = 0.0;
    } else if (dart.notNull(hue) < 120.0) {
      red = secondary;
      green = chroma;
      blue = 0.0;
    } else if (dart.notNull(hue) < 180.0) {
      red = 0.0;
      green = chroma;
      blue = secondary;
    } else if (dart.notNull(hue) < 240.0) {
      red = 0.0;
      green = secondary;
      blue = chroma;
    } else if (dart.notNull(hue) < 300.0) {
      red = secondary;
      green = 0.0;
      blue = chroma;
    } else {
      red = chroma;
      green = 0.0;
      blue = secondary;
    }
    return new ui$.Color.fromARGB((dart.notNull(alpha) * 255)[$round](), ((dart.notNull(red) + dart.notNull(match)) * 255)[$round](), ((dart.notNull(green) + dart.notNull(match)) * 255)[$round](), ((dart.notNull(blue) + dart.notNull(match)) * 255)[$round]());
  };
  const _clipAndPaint = dart.privateName(src__painting__clip, "_clipAndPaint");
  src__painting__clip.ClipContext = class ClipContext extends core.Object {
    [_clipAndPaint](canvasClipCall, clipBehavior, bounds, painter) {
      if (!(canvasClipCall != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/clip.dart", 14, 12, "canvasClipCall != null");
      this.canvas.save();
      switch (clipBehavior) {
        case ui$.Clip.none:
        {
          break;
        }
        case ui$.Clip.hardEdge:
        {
          canvasClipCall(false);
          break;
        }
        case ui$.Clip.antiAlias:
        {
          canvasClipCall(true);
          break;
        }
        case ui$.Clip.antiAliasWithSaveLayer:
        {
          canvasClipCall(true);
          this.canvas.saveLayer(bounds, new ui$.Paint.new());
          break;
        }
      }
      painter();
      if (dart.equals(clipBehavior, ui$.Clip.antiAliasWithSaveLayer)) {
        this.canvas.restore();
      }
      this.canvas.restore();
    }
    clipPathAndPaint(path, clipBehavior, bounds, painter) {
      this[_clipAndPaint](dart.fn(doAntiAias => this.canvas.clipPath(path, {doAntiAlias: doAntiAias}), boolTovoid()), clipBehavior, bounds, painter);
    }
    clipRRectAndPaint(rrect, clipBehavior, bounds, painter) {
      this[_clipAndPaint](dart.fn(doAntiAias => this.canvas.clipRRect(rrect, {doAntiAlias: doAntiAias}), boolTovoid()), clipBehavior, bounds, painter);
    }
    clipRectAndPaint(rect, clipBehavior, bounds, painter) {
      this[_clipAndPaint](dart.fn(doAntiAias => this.canvas.clipRect(rect, {doAntiAlias: doAntiAias}), boolTovoid()), clipBehavior, bounds, painter);
    }
  };
  (src__painting__clip.ClipContext.new = function() {
    ;
  }).prototype = src__painting__clip.ClipContext.prototype;
  dart.addTypeTests(src__painting__clip.ClipContext);
  dart.setMethodSignature(src__painting__clip.ClipContext, () => ({
    __proto__: dart.getMethods(src__painting__clip.ClipContext.__proto__),
    [_clipAndPaint]: dart.fnType(dart.void, [dart.fnType(dart.void, [core.bool]), ui$.Clip, ui$.Rect, dart.fnType(dart.void, [])]),
    clipPathAndPaint: dart.fnType(dart.void, [ui$.Path, ui$.Clip, ui$.Rect, dart.fnType(dart.void, [])]),
    clipRRectAndPaint: dart.fnType(dart.void, [ui$.RRect, ui$.Clip, ui$.Rect, dart.fnType(dart.void, [])]),
    clipRectAndPaint: dart.fnType(dart.void, [ui$.Rect, ui$.Clip, ui$.Rect, dart.fnType(dart.void, [])])
  }));
  dart.setLibraryUri(src__painting__clip.ClipContext, "package:flutter_web/src/painting/clip.dart");
  let const$4;
  src__painting__box_shadow.BoxShadow = class BoxShadow extends core.Object {
    get color() {
      return this[color$1];
    }
    set color(value) {
      super.color = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get blurRadius() {
      return this[blurRadius$];
    }
    set blurRadius(value) {
      super.blurRadius = value;
    }
    get spreadRadius() {
      return this[spreadRadius$];
    }
    set spreadRadius(value) {
      super.spreadRadius = value;
    }
    static convertRadiusToSigma(radius) {
      return dart.notNull(radius) * 0.57735 + 0.5;
    }
    get blurSigma() {
      return src__painting__box_shadow.BoxShadow.convertRadiusToSigma(this.blurRadius);
    }
    toPaint() {
      let t7;
      let result = (t7 = new ui$.Paint.new(), t7.color = this.color, t7.maskFilter = new ui$.MaskFilter.blur(ui$.BlurStyle.normal, this.blurSigma), t7);
      if (!dart.test(dart.fn(() => {
        if (dart.test(src__painting__debug.debugDisableShadows)) result.maskFilter = null;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/box_shadow.dart", 73, 12, "() {\n      if (debugDisableShadows) result.maskFilter = null;\n      return true;\n    }()");
      return result;
    }
    scale(factor) {
      return new src__painting__box_shadow.BoxShadow.new({color: this.color, offset: this.offset['*'](factor), blurRadius: dart.notNull(this.blurRadius) * dart.notNull(factor), spreadRadius: dart.notNull(this.spreadRadius) * dart.notNull(factor)});
    }
    static lerp(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/box_shadow.dart", 108, 12, "t != null");
      if (a == null && b == null) return null;
      if (a == null) return b.scale(t);
      if (b == null) return a.scale(1.0 - dart.notNull(t));
      return new src__painting__box_shadow.BoxShadow.new({color: ui$.Color.lerp(a.color, b.color, t), offset: ui$.Offset.lerp(a.offset, b.offset, t), blurRadius: ui$.lerpDouble(a.blurRadius, b.blurRadius, t), spreadRadius: ui$.lerpDouble(a.spreadRadius, b.spreadRadius, t)});
    }
    static lerpList(a, b, t) {
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/painting/box_shadow.dart", 137, 12, "t != null");
      if (a == null && b == null) return null;
      a == null ? a = JSArrayOfBoxShadow().of([]) : null;
      b == null ? b = JSArrayOfBoxShadow().of([]) : null;
      let result = JSArrayOfBoxShadow().of([]);
      let commonLength = math.min(core.int, a[$length], b[$length]);
      for (let i = 0; i < commonLength; i = i + 1)
        result[$add](src__painting__box_shadow.BoxShadow.lerp(a[$_get](i), b[$_get](i), t));
      for (let i = commonLength; i < dart.notNull(a[$length]); i = i + 1)
        result[$add](a[$_get](i).scale(1.0 - dart.notNull(t)));
      for (let i = commonLength; i < dart.notNull(b[$length]); i = i + 1)
        result[$add](b[$_get](i).scale(t));
      return result;
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(this[$runtimeType], dart.runtimeType(other))) return false;
      let typedOther = src__painting__box_shadow.BoxShadow._check(other);
      return dart.equals(this.color, typedOther.color) && dart.equals(this.offset, typedOther.offset) && this.blurRadius == typedOther.blurRadius && this.spreadRadius == typedOther.spreadRadius;
    }
    get hashCode() {
      return ui$.hashValues(this.color, this.offset, this.blurRadius, this.spreadRadius);
    }
    toString() {
      if (dart.test(src__util.assertionsEnabled)) {
        return "BoxShadow(" + dart.str(this.color) + ", " + dart.str(this.offset) + ", " + dart.str(this.blurRadius) + ", " + dart.str(this.spreadRadius) + ")";
      } else {
        return super[$toString]();
      }
    }
    toCssString() {
      if (this.blurRadius === 0.0 && this.spreadRadius === 0.0) {
        return dart.str(this.offset.dx) + "px " + dart.str(this.offset.dy) + "px " + dart.str(this.color.toCssString());
      } else if (this.spreadRadius === 0.0) {
        return dart.str(this.offset.dx) + "px " + dart.str(this.offset.dy) + "px " + dart.str(this.blurRadius[$toInt]()) + "px " + dart.str(this.color.toCssString());
      } else {
        return dart.str(this.offset.dx) + "px " + dart.str(this.offset.dy) + "px " + dart.str(this.blurRadius[$toInt]()) + "px " + dart.str(this.spreadRadius[$toInt]()) + "px " + dart.str(this.color.toCssString());
      }
    }
  };
  (src__painting__box_shadow.BoxShadow.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : const$4 || (const$4 = dart.const(new ui$.Color.new(4278190080)));
    let offset = opts && 'offset' in opts ? opts.offset : ui$.Offset.zero;
    let blurRadius = opts && 'blurRadius' in opts ? opts.blurRadius : 0.0;
    let spreadRadius = opts && 'spreadRadius' in opts ? opts.spreadRadius : 0.0;
    this[color$1] = color;
    this[offset$] = offset;
    this[blurRadius$] = blurRadius;
    this[spreadRadius$] = spreadRadius;
    ;
  }).prototype = src__painting__box_shadow.BoxShadow.prototype;
  dart.addTypeTests(src__painting__box_shadow.BoxShadow);
  const color$1 = Symbol("BoxShadow.color");
  const offset$ = Symbol("BoxShadow.offset");
  const blurRadius$ = Symbol("BoxShadow.blurRadius");
  const spreadRadius$ = Symbol("BoxShadow.spreadRadius");
  dart.setMethodSignature(src__painting__box_shadow.BoxShadow, () => ({
    __proto__: dart.getMethods(src__painting__box_shadow.BoxShadow.__proto__),
    toPaint: dart.fnType(ui$.Paint, []),
    scale: dart.fnType(src__painting__box_shadow.BoxShadow, [core.double]),
    toCssString: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(src__painting__box_shadow.BoxShadow, () => ({
    __proto__: dart.getGetters(src__painting__box_shadow.BoxShadow.__proto__),
    blurSigma: core.double
  }));
  dart.setLibraryUri(src__painting__box_shadow.BoxShadow, "package:flutter_web/src/painting/box_shadow.dart");
  dart.setFieldSignature(src__painting__box_shadow.BoxShadow, () => ({
    __proto__: dart.getFields(src__painting__box_shadow.BoxShadow.__proto__),
    color: dart.finalFieldType(ui$.Color),
    offset: dart.finalFieldType(ui$.Offset),
    blurRadius: dart.finalFieldType(core.double),
    spreadRadius: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__painting__box_shadow.BoxShadow, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__painting__box_shadow.BoxShadow, ['hashCode']);
  const _name$3 = dart.privateName(src__painting__box_fit, "_name");
  src__painting__box_fit.BoxFit = class BoxFit extends core.Object {
    toString() {
      return this[_name$3];
    }
  };
  (src__painting__box_fit.BoxFit.new = function(index, _name) {
    this.index = index;
    this[_name$3] = _name;
    ;
  }).prototype = src__painting__box_fit.BoxFit.prototype;
  dart.addTypeTests(src__painting__box_fit.BoxFit);
  dart.setLibraryUri(src__painting__box_fit.BoxFit, "package:flutter_web/src/painting/box_fit.dart");
  dart.setFieldSignature(src__painting__box_fit.BoxFit, () => ({
    __proto__: dart.getFields(src__painting__box_fit.BoxFit.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$3]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__painting__box_fit.BoxFit, ['toString']);
  src__painting__box_fit.BoxFit.fill = dart.const(new src__painting__box_fit.BoxFit.new(0, "BoxFit.fill"));
  src__painting__box_fit.BoxFit.contain = dart.const(new src__painting__box_fit.BoxFit.new(1, "BoxFit.contain"));
  src__painting__box_fit.BoxFit.cover = dart.const(new src__painting__box_fit.BoxFit.new(2, "BoxFit.cover"));
  src__painting__box_fit.BoxFit.fitWidth = dart.const(new src__painting__box_fit.BoxFit.new(3, "BoxFit.fitWidth"));
  src__painting__box_fit.BoxFit.fitHeight = dart.const(new src__painting__box_fit.BoxFit.new(4, "BoxFit.fitHeight"));
  src__painting__box_fit.BoxFit.none = dart.const(new src__painting__box_fit.BoxFit.new(5, "BoxFit.none"));
  src__painting__box_fit.BoxFit.scaleDown = dart.const(new src__painting__box_fit.BoxFit.new(6, "BoxFit.scaleDown"));
  src__painting__box_fit.BoxFit.values = dart.constList([src__painting__box_fit.BoxFit.fill, src__painting__box_fit.BoxFit.contain, src__painting__box_fit.BoxFit.cover, src__painting__box_fit.BoxFit.fitWidth, src__painting__box_fit.BoxFit.fitHeight, src__painting__box_fit.BoxFit.none, src__painting__box_fit.BoxFit.scaleDown], src__painting__box_fit.BoxFit);
  src__painting__box_fit.FittedSizes = class FittedSizes extends core.Object {
    get source() {
      return this[source$];
    }
    set source(value) {
      super.source = value;
    }
    get destination() {
      return this[destination$];
    }
    set destination(value) {
      super.destination = value;
    }
  };
  (src__painting__box_fit.FittedSizes.new = function(source, destination) {
    this[source$] = source;
    this[destination$] = destination;
    ;
  }).prototype = src__painting__box_fit.FittedSizes.prototype;
  dart.addTypeTests(src__painting__box_fit.FittedSizes);
  const source$ = Symbol("FittedSizes.source");
  const destination$ = Symbol("FittedSizes.destination");
  dart.setLibraryUri(src__painting__box_fit.FittedSizes, "package:flutter_web/src/painting/box_fit.dart");
  dart.setFieldSignature(src__painting__box_fit.FittedSizes, () => ({
    __proto__: dart.getFields(src__painting__box_fit.FittedSizes.__proto__),
    source: dart.finalFieldType(ui$.Size),
    destination: dart.finalFieldType(ui$.Size)
  }));
  let const$5;
  src__painting__box_fit.applyBoxFit = function(fit, inputSize, outputSize) {
    if (dart.notNull(inputSize.height) <= 0.0 || dart.notNull(inputSize.width) <= 0.0 || dart.notNull(outputSize.height) <= 0.0 || dart.notNull(outputSize.width) <= 0.0) return const$5 || (const$5 = dart.const(new src__painting__box_fit.FittedSizes.new(ui$.Size.zero, ui$.Size.zero)));
    let sourceSize = null;
    let destinationSize = null;
    switch (fit) {
      case src__painting__box_fit.BoxFit.fill:
      {
        sourceSize = inputSize;
        destinationSize = outputSize;
        break;
      }
      case src__painting__box_fit.BoxFit.contain:
      {
        sourceSize = inputSize;
        if (dart.notNull(outputSize.width) / dart.notNull(outputSize.height) > dart.notNull(sourceSize.width) / dart.notNull(sourceSize.height))
          destinationSize = new ui$.Size.new(dart.notNull(sourceSize.width) * dart.notNull(outputSize.height) / dart.notNull(sourceSize.height), outputSize.height);
        else
          destinationSize = new ui$.Size.new(outputSize.width, dart.notNull(sourceSize.height) * dart.notNull(outputSize.width) / dart.notNull(sourceSize.width));
        break;
      }
      case src__painting__box_fit.BoxFit.cover:
      {
        if (dart.notNull(outputSize.width) / dart.notNull(outputSize.height) > dart.notNull(inputSize.width) / dart.notNull(inputSize.height)) {
          sourceSize = new ui$.Size.new(inputSize.width, dart.notNull(inputSize.width) * dart.notNull(outputSize.height) / dart.notNull(outputSize.width));
        } else {
          sourceSize = new ui$.Size.new(dart.notNull(inputSize.height) * dart.notNull(outputSize.width) / dart.notNull(outputSize.height), inputSize.height);
        }
        destinationSize = outputSize;
        break;
      }
      case src__painting__box_fit.BoxFit.fitWidth:
      {
        sourceSize = new ui$.Size.new(inputSize.width, dart.notNull(inputSize.width) * dart.notNull(outputSize.height) / dart.notNull(outputSize.width));
        destinationSize = new ui$.Size.new(outputSize.width, dart.notNull(sourceSize.height) * dart.notNull(outputSize.width) / dart.notNull(sourceSize.width));
        break;
      }
      case src__painting__box_fit.BoxFit.fitHeight:
      {
        sourceSize = new ui$.Size.new(dart.notNull(inputSize.height) * dart.notNull(outputSize.width) / dart.notNull(outputSize.height), inputSize.height);
        destinationSize = new ui$.Size.new(dart.notNull(sourceSize.width) * dart.notNull(outputSize.height) / dart.notNull(sourceSize.height), outputSize.height);
        break;
      }
      case src__painting__box_fit.BoxFit.none:
      {
        sourceSize = new ui$.Size.new(math.min(core.double, inputSize.width, outputSize.width), math.min(core.double, inputSize.height, outputSize.height));
        destinationSize = sourceSize;
        break;
      }
      case src__painting__box_fit.BoxFit.scaleDown:
      {
        sourceSize = inputSize;
        destinationSize = inputSize;
        let aspectRatio = dart.notNull(inputSize.width) / dart.notNull(inputSize.height);
        if (dart.notNull(destinationSize.height) > dart.notNull(outputSize.height)) destinationSize = new ui$.Size.new(dart.notNull(outputSize.height) * aspectRatio, outputSize.height);
        if (dart.notNull(destinationSize.width) > dart.notNull(outputSize.width)) destinationSize = new ui$.Size.new(outputSize.width, dart.notNull(outputSize.width) / aspectRatio);
        break;
      }
    }
    return new src__painting__box_fit.FittedSizes.new(sourceSize, destinationSize);
  };
  const _name$4 = dart.privateName(src__rendering__platform_view, "_name");
  src__rendering__platform_view.PlatformViewHitTestBehavior = class PlatformViewHitTestBehavior extends core.Object {
    toString() {
      return this[_name$4];
    }
  };
  (src__rendering__platform_view.PlatformViewHitTestBehavior.new = function(index, _name) {
    this.index = index;
    this[_name$4] = _name;
    ;
  }).prototype = src__rendering__platform_view.PlatformViewHitTestBehavior.prototype;
  dart.addTypeTests(src__rendering__platform_view.PlatformViewHitTestBehavior);
  dart.setLibraryUri(src__rendering__platform_view.PlatformViewHitTestBehavior, "package:flutter_web/src/rendering/platform_view.dart");
  dart.setFieldSignature(src__rendering__platform_view.PlatformViewHitTestBehavior, () => ({
    __proto__: dart.getFields(src__rendering__platform_view.PlatformViewHitTestBehavior.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$4]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__rendering__platform_view.PlatformViewHitTestBehavior, ['toString']);
  src__rendering__platform_view.PlatformViewHitTestBehavior.opaque = dart.const(new src__rendering__platform_view.PlatformViewHitTestBehavior.new(0, "PlatformViewHitTestBehavior.opaque"));
  src__rendering__platform_view.PlatformViewHitTestBehavior.translucent = dart.const(new src__rendering__platform_view.PlatformViewHitTestBehavior.new(1, "PlatformViewHitTestBehavior.translucent"));
  src__rendering__platform_view.PlatformViewHitTestBehavior.transparent = dart.const(new src__rendering__platform_view.PlatformViewHitTestBehavior.new(2, "PlatformViewHitTestBehavior.transparent"));
  src__rendering__platform_view.PlatformViewHitTestBehavior.values = dart.constList([src__rendering__platform_view.PlatformViewHitTestBehavior.opaque, src__rendering__platform_view.PlatformViewHitTestBehavior.translucent, src__rendering__platform_view.PlatformViewHitTestBehavior.transparent], src__rendering__platform_view.PlatformViewHitTestBehavior);
  const _frictionSimulation = dart.privateName(src__widgets__scroll_simulation, "_frictionSimulation");
  const _springSimulation = dart.privateName(src__widgets__scroll_simulation, "_springSimulation");
  const _springTime = dart.privateName(src__widgets__scroll_simulation, "_springTime");
  const _timeOffset = dart.privateName(src__widgets__scroll_simulation, "_timeOffset");
  const _underscrollSimulation = dart.privateName(src__widgets__scroll_simulation, "_underscrollSimulation");
  const _overscrollSimulation = dart.privateName(src__widgets__scroll_simulation, "_overscrollSimulation");
  const _simulation = dart.privateName(src__widgets__scroll_simulation, "_simulation");
  src__widgets__scroll_simulation.BouncingScrollSimulation = class BouncingScrollSimulation extends src__physics__simulation.Simulation {
    get leadingExtent() {
      return this[leadingExtent$];
    }
    set leadingExtent(value) {
      super.leadingExtent = value;
    }
    get trailingExtent() {
      return this[trailingExtent$];
    }
    set trailingExtent(value) {
      super.trailingExtent = value;
    }
    get spring() {
      return this[spring$];
    }
    set spring(value) {
      super.spring = value;
    }
    [_underscrollSimulation](x, dx) {
      return new src__physics__spring_simulation.ScrollSpringSimulation.new(this.spring, x, this.leadingExtent, dx);
    }
    [_overscrollSimulation](x, dx) {
      return new src__physics__spring_simulation.ScrollSpringSimulation.new(this.spring, x, this.trailingExtent, dx);
    }
    [_simulation](time) {
      let t7;
      let simulation = null;
      if (dart.notNull(time) > dart.notNull(this[_springTime])) {
        this[_timeOffset] = this[_springTime][$isFinite] ? this[_springTime] : 0.0;
        simulation = this[_springSimulation];
      } else {
        this[_timeOffset] = 0.0;
        simulation = this[_frictionSimulation];
      }
      t7 = simulation;
      t7.tolerance = this.tolerance;
      return t7;
    }
    x(time) {
      return this[_simulation](time).x(dart.notNull(time) - dart.notNull(this[_timeOffset]));
    }
    dx(time) {
      return this[_simulation](time).dx(dart.notNull(time) - dart.notNull(this[_timeOffset]));
    }
    isDone(time) {
      return this[_simulation](time).isDone(dart.notNull(time) - dart.notNull(this[_timeOffset]));
    }
    toString() {
      if (dart.test(src__util.assertionsEnabled)) {
        return dart.str(this[$runtimeType]) + "(leadingExtent: " + dart.str(this.leadingExtent) + ", " + "trailingExtent: " + dart.str(this.trailingExtent) + ")";
      } else {
        return super.toString();
      }
    }
  };
  (src__widgets__scroll_simulation.BouncingScrollSimulation.new = function(opts) {
    let position = opts && 'position' in opts ? opts.position : null;
    let velocity = opts && 'velocity' in opts ? opts.velocity : null;
    let leadingExtent = opts && 'leadingExtent' in opts ? opts.leadingExtent : null;
    let trailingExtent = opts && 'trailingExtent' in opts ? opts.trailingExtent : null;
    let spring = opts && 'spring' in opts ? opts.spring : null;
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : src__physics__tolerance.Tolerance.defaultTolerance;
    this[_frictionSimulation] = null;
    this[_springSimulation] = null;
    this[_springTime] = null;
    this[_timeOffset] = 0.0;
    this[leadingExtent$] = leadingExtent;
    this[trailingExtent$] = trailingExtent;
    this[spring$] = spring;
    if (!(position != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/widgets/scroll_simulation.dart", 40, 16, "position != null");
    if (!(velocity != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/widgets/scroll_simulation.dart", 41, 16, "velocity != null");
    if (!(leadingExtent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/widgets/scroll_simulation.dart", 42, 16, "leadingExtent != null");
    if (!(trailingExtent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/widgets/scroll_simulation.dart", 43, 16, "trailingExtent != null");
    if (!(dart.notNull(leadingExtent) <= dart.notNull(trailingExtent))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/widgets/scroll_simulation.dart", 44, 16, "leadingExtent <= trailingExtent");
    if (!(spring != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/widgets/scroll_simulation.dart", 45, 16, "spring != null");
    src__widgets__scroll_simulation.BouncingScrollSimulation.__proto__.new.call(this, {tolerance: tolerance});
    if (dart.notNull(position) < dart.notNull(this.leadingExtent)) {
      this[_springSimulation] = this[_underscrollSimulation](position, velocity);
      this[_springTime] = core.double.negativeInfinity;
    } else if (dart.notNull(position) > dart.notNull(this.trailingExtent)) {
      this[_springSimulation] = this[_overscrollSimulation](position, velocity);
      this[_springTime] = core.double.negativeInfinity;
    } else {
      this[_frictionSimulation] = new src__physics__friction_simulation.FrictionSimulation.new(0.135, position, velocity);
      let finalX = this[_frictionSimulation].finalX;
      if (dart.notNull(velocity) > 0.0 && dart.notNull(finalX) > dart.notNull(this.trailingExtent)) {
        this[_springTime] = this[_frictionSimulation].timeAtX(this.trailingExtent);
        this[_springSimulation] = this[_overscrollSimulation](this.trailingExtent, math.min(core.double, this[_frictionSimulation].dx(this[_springTime]), src__widgets__scroll_simulation.BouncingScrollSimulation.maxSpringTransferVelocity));
        if (!this[_springTime][$isFinite]) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/widgets/scroll_simulation.dart", 63, 16, "_springTime.isFinite");
      } else if (dart.notNull(velocity) < 0.0 && dart.notNull(finalX) < dart.notNull(this.leadingExtent)) {
        this[_springTime] = this[_frictionSimulation].timeAtX(this.leadingExtent);
        this[_springSimulation] = this[_underscrollSimulation](this.leadingExtent, math.min(core.double, this[_frictionSimulation].dx(this[_springTime]), src__widgets__scroll_simulation.BouncingScrollSimulation.maxSpringTransferVelocity));
        if (!this[_springTime][$isFinite]) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/widgets/scroll_simulation.dart", 71, 16, "_springTime.isFinite");
      } else {
        this[_springTime] = core.double.infinity;
      }
    }
    if (!(this[_springTime] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/widgets/scroll_simulation.dart", 76, 12, "_springTime != null");
  }).prototype = src__widgets__scroll_simulation.BouncingScrollSimulation.prototype;
  dart.addTypeTests(src__widgets__scroll_simulation.BouncingScrollSimulation);
  const leadingExtent$ = Symbol("BouncingScrollSimulation.leadingExtent");
  const trailingExtent$ = Symbol("BouncingScrollSimulation.trailingExtent");
  const spring$ = Symbol("BouncingScrollSimulation.spring");
  dart.setMethodSignature(src__widgets__scroll_simulation.BouncingScrollSimulation, () => ({
    __proto__: dart.getMethods(src__widgets__scroll_simulation.BouncingScrollSimulation.__proto__),
    [_underscrollSimulation]: dart.fnType(src__physics__simulation.Simulation, [core.double, core.double]),
    [_overscrollSimulation]: dart.fnType(src__physics__simulation.Simulation, [core.double, core.double]),
    [_simulation]: dart.fnType(src__physics__simulation.Simulation, [core.double]),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setLibraryUri(src__widgets__scroll_simulation.BouncingScrollSimulation, "package:flutter_web/src/widgets/scroll_simulation.dart");
  dart.setFieldSignature(src__widgets__scroll_simulation.BouncingScrollSimulation, () => ({
    __proto__: dart.getFields(src__widgets__scroll_simulation.BouncingScrollSimulation.__proto__),
    leadingExtent: dart.finalFieldType(core.double),
    trailingExtent: dart.finalFieldType(core.double),
    spring: dart.finalFieldType(src__physics__spring_simulation.SpringDescription),
    [_frictionSimulation]: dart.fieldType(src__physics__friction_simulation.FrictionSimulation),
    [_springSimulation]: dart.fieldType(src__physics__simulation.Simulation),
    [_springTime]: dart.fieldType(core.double),
    [_timeOffset]: dart.fieldType(core.double)
  }));
  dart.defineExtensionMethods(src__widgets__scroll_simulation.BouncingScrollSimulation, ['toString']);
  dart.defineLazy(src__widgets__scroll_simulation.BouncingScrollSimulation, {
    /*src__widgets__scroll_simulation.BouncingScrollSimulation.maxSpringTransferVelocity*/get maxSpringTransferVelocity() {
      return 5000.0;
    }
  });
  const _duration = dart.privateName(src__widgets__scroll_simulation, "_duration");
  const _distance = dart.privateName(src__widgets__scroll_simulation, "_distance");
  const _flingDuration = dart.privateName(src__widgets__scroll_simulation, "_flingDuration");
  src__widgets__scroll_simulation.ClampingScrollSimulation = class ClampingScrollSimulation extends src__physics__simulation.Simulation {
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    get velocity() {
      return this[velocity$];
    }
    set velocity(value) {
      super.velocity = value;
    }
    get friction() {
      return this[friction$];
    }
    set friction(value) {
      super.friction = value;
    }
    static _decelerationForFriction(friction) {
      return dart.notNull(friction) * 61774.04968;
    }
    [_flingDuration](velocity) {
      let scaledFriction = dart.notNull(this.friction) * dart.notNull(src__widgets__scroll_simulation.ClampingScrollSimulation._decelerationForFriction(0.84));
      let deceleration = math.log(0.35 * velocity[$abs]() / scaledFriction);
      return math.exp(deceleration / (dart.notNull(src__widgets__scroll_simulation.ClampingScrollSimulation._kDecelerationRate) - 1.0));
    }
    static _flingDistancePenetration(t) {
      return 1.2 * dart.notNull(t) * dart.notNull(t) * dart.notNull(t) - 3.27 * dart.notNull(t) * dart.notNull(t) + dart.notNull(src__widgets__scroll_simulation.ClampingScrollSimulation._initialVelocityPenetration) * dart.notNull(t);
    }
    static _flingVelocityPenetration(t) {
      return 3.6 * dart.notNull(t) * dart.notNull(t) - 6.54 * dart.notNull(t) + dart.notNull(src__widgets__scroll_simulation.ClampingScrollSimulation._initialVelocityPenetration);
    }
    x(time) {
      let t = (dart.notNull(time) / dart.notNull(this[_duration]))[$clamp](0.0, 1.0);
      return dart.notNull(this.position) + dart.notNull(this[_distance]) * dart.notNull(src__widgets__scroll_simulation.ClampingScrollSimulation._flingDistancePenetration(t)) * this.velocity[$sign];
    }
    dx(time) {
      let t = (dart.notNull(time) / dart.notNull(this[_duration]))[$clamp](0.0, 1.0);
      return dart.notNull(this[_distance]) * dart.notNull(src__widgets__scroll_simulation.ClampingScrollSimulation._flingVelocityPenetration(t)) * this.velocity[$sign] / dart.notNull(this[_duration]);
    }
    isDone(time) {
      return dart.notNull(time) >= dart.notNull(this[_duration]);
    }
  };
  (src__widgets__scroll_simulation.ClampingScrollSimulation.new = function(opts) {
    let position = opts && 'position' in opts ? opts.position : null;
    let velocity = opts && 'velocity' in opts ? opts.velocity : null;
    let friction = opts && 'friction' in opts ? opts.friction : 0.015;
    let tolerance = opts && 'tolerance' in opts ? opts.tolerance : src__physics__tolerance.Tolerance.defaultTolerance;
    this[_duration] = null;
    this[_distance] = null;
    this[position$] = position;
    this[velocity$] = velocity;
    this[friction$] = friction;
    if (!(src__widgets__scroll_simulation.ClampingScrollSimulation._flingVelocityPenetration(0.0) == src__widgets__scroll_simulation.ClampingScrollSimulation._initialVelocityPenetration)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/widgets/scroll_simulation.dart", 160, 16, "_flingVelocityPenetration(0.0) == _initialVelocityPenetration");
    src__widgets__scroll_simulation.ClampingScrollSimulation.__proto__.new.call(this, {tolerance: tolerance});
    this[_duration] = this[_flingDuration](this.velocity);
    this[_distance] = (dart.notNull(this.velocity) * dart.notNull(this[_duration]) / dart.notNull(src__widgets__scroll_simulation.ClampingScrollSimulation._initialVelocityPenetration))[$abs]();
  }).prototype = src__widgets__scroll_simulation.ClampingScrollSimulation.prototype;
  dart.addTypeTests(src__widgets__scroll_simulation.ClampingScrollSimulation);
  const position$ = Symbol("ClampingScrollSimulation.position");
  const velocity$ = Symbol("ClampingScrollSimulation.velocity");
  const friction$ = Symbol("ClampingScrollSimulation.friction");
  dart.setMethodSignature(src__widgets__scroll_simulation.ClampingScrollSimulation, () => ({
    __proto__: dart.getMethods(src__widgets__scroll_simulation.ClampingScrollSimulation.__proto__),
    [_flingDuration]: dart.fnType(core.double, [core.double]),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setLibraryUri(src__widgets__scroll_simulation.ClampingScrollSimulation, "package:flutter_web/src/widgets/scroll_simulation.dart");
  dart.setFieldSignature(src__widgets__scroll_simulation.ClampingScrollSimulation, () => ({
    __proto__: dart.getFields(src__widgets__scroll_simulation.ClampingScrollSimulation.__proto__),
    position: dart.finalFieldType(core.double),
    velocity: dart.finalFieldType(core.double),
    friction: dart.finalFieldType(core.double),
    [_duration]: dart.fieldType(core.double),
    [_distance]: dart.fieldType(core.double)
  }));
  dart.defineLazy(src__widgets__scroll_simulation.ClampingScrollSimulation, {
    /*src__widgets__scroll_simulation.ClampingScrollSimulation._kDecelerationRate*/get _kDecelerationRate() {
      return math.log(0.78) / math.log(0.9);
    },
    /*src__widgets__scroll_simulation.ClampingScrollSimulation._initialVelocityPenetration*/get _initialVelocityPenetration() {
      return 3.065;
    }
  });
  dart.setBaseClass(src__painting__image_provider.NetworkImage, src__painting__image_provider.ImageProvider$(src__painting__image_provider.NetworkImage));
  dart.setBaseClass(src__painting__image_provider.MemoryImage, src__painting__image_provider.ImageProvider$(src__painting__image_provider.MemoryImage));
  dart.trackLibraries("packages/flutter_web/src/animation/animation", {
    "package:flutter_web/src/painting/alignment.dart": src__painting__alignment,
    "package:flutter_web/src/animation/tween_sequence.dart": src__animation__tween_sequence,
    "package:flutter_web/src/animation/tween.dart": src__animation__tween,
    "package:flutter_web/src/animation/curves.dart": src__animation__curves,
    "package:flutter_web/src/animation/animations.dart": src__animation__animations,
    "package:flutter_web/src/animation/listener_helpers.dart": src__animation__listener_helpers,
    "package:flutter_web/src/animation/animation.dart": src__animation__animation,
    "package:flutter_web/src/painting/border_radius.dart": src__painting__border_radius,
    "package:flutter_web/src/painting/paint_utilities.dart": src__painting__paint_utilities,
    "package:flutter_web/src/painting/basic_types.dart": src__painting__basic_types,
    "package:flutter_web/src/painting/image_decoder.dart": src__painting__image_decoder,
    "package:flutter_web/src/painting/binding.dart": src__painting__binding,
    "package:flutter_web/src/painting/image_cache.dart": src__painting__image_cache,
    "package:flutter_web/src/painting/image_stream.dart": src__painting__image_stream,
    "package:flutter_web/src/painting/image_resolution.dart": src__painting__image_resolution,
    "package:flutter_web/src/painting/image_provider.dart": src__painting__image_provider,
    "package:flutter_web/src/painting/notched_shapes.dart": src__painting__notched_shapes,
    "package:flutter_web/src/painting/geometry.dart": src__painting__geometry,
    "package:flutter_web/src/painting/gradient.dart": src__painting__gradient,
    "package:flutter_web/src/painting/text_span.dart": src__painting__text_span,
    "package:flutter_web/src/painting/text_style.dart": src__painting__text_style,
    "package:flutter_web/src/painting/strut_style.dart": src__painting__strut_style,
    "package:flutter_web/src/widgets/icon_data.dart": src__widgets__icon_data,
    "package:flutter_web/src/widgets/icon_theme_data.dart": src__widgets__icon_theme_data,
    "package:flutter_web/src/painting/text_painter.dart": src__painting__text_painter,
    "package:flutter_web/src/painting/debug.dart": src__painting__debug,
    "package:flutter_web/src/painting/fractional_offset.dart": src__painting__fractional_offset,
    "package:flutter_web/src/semantics/binding.dart": src__semantics__binding,
    "package:flutter_web/src/semantics/debug.dart": src__semantics__debug,
    "package:flutter_web/src/painting/colors.dart": src__painting__colors,
    "package:flutter_web/src/painting/clip.dart": src__painting__clip,
    "package:flutter_web/src/painting/box_shadow.dart": src__painting__box_shadow,
    "package:flutter_web/src/painting/box_fit.dart": src__painting__box_fit,
    "package:flutter_web/src/rendering/platform_view.dart": src__rendering__platform_view,
    "package:flutter_web/src/widgets/scroll_simulation.dart": src__widgets__scroll_simulation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/flutter_web/src/painting/alignment.dart","org-dartlang-app:///packages/flutter_web/src/animation/tween.dart","org-dartlang-app:///packages/flutter_web/src/animation/tween_sequence.dart","org-dartlang-app:///packages/flutter_web/src/animation/animation.dart","org-dartlang-app:///packages/flutter_web/src/animation/animations.dart","org-dartlang-app:///packages/flutter_web/src/animation/curves.dart","org-dartlang-app:///packages/flutter_web/src/animation/listener_helpers.dart","org-dartlang-app:///packages/flutter_web/src/painting/border_radius.dart","org-dartlang-app:///packages/flutter_web/src/painting/paint_utilities.dart","org-dartlang-app:///packages/flutter_web/src/painting/basic_types.dart","org-dartlang-app:///packages/flutter_web/src/painting/image_decoder.dart","org-dartlang-app:///packages/flutter_web/src/painting/binding.dart","org-dartlang-app:///packages/flutter_web/src/painting/image_cache.dart","org-dartlang-app:///packages/flutter_web/src/painting/image_stream.dart","org-dartlang-app:///packages/flutter_web/src/painting/image_provider.dart","org-dartlang-app:///packages/flutter_web/src/painting/image_resolution.dart","org-dartlang-app:///packages/flutter_web/src/painting/notched_shapes.dart","org-dartlang-app:///packages/flutter_web/src/painting/geometry.dart","org-dartlang-app:///packages/flutter_web/src/painting/gradient.dart","org-dartlang-app:///packages/flutter_web/src/painting/text_span.dart","org-dartlang-app:///packages/flutter_web/src/painting/text_style.dart","org-dartlang-app:///packages/flutter_web/src/painting/strut_style.dart","org-dartlang-app:///packages/flutter_web/src/widgets/icon_data.dart","org-dartlang-app:///packages/flutter_web/src/widgets/icon_theme_data.dart","org-dartlang-app:///packages/flutter_web/src/painting/text_painter.dart","org-dartlang-app:///packages/flutter_web/src/painting/debug.dart","org-dartlang-app:///packages/flutter_web/src/painting/fractional_offset.dart","org-dartlang-app:///packages/flutter_web/src/semantics/binding.dart","org-dartlang-app:///packages/flutter_web/src/semantics/debug.dart","org-dartlang-app:///packages/flutter_web/src/painting/colors.dart","org-dartlang-app:///packages/flutter_web/src/painting/clip.dart","org-dartlang-app:///packages/flutter_web/src/painting/box_shadow.dart","org-dartlang-app:///packages/flutter_web/src/painting/box_fit.dart","org-dartlang-app:///packages/flutter_web/src/rendering/platform_view.dart","org-dartlang-app:///packages/flutter_web/src/widgets/scroll_simulation.dart"],"names":[],"mappings":"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","file":"animation.ddc.js"}');
  // Exports:
  return {
    src__painting__alignment: src__painting__alignment,
    src__animation__tween_sequence: src__animation__tween_sequence,
    src__animation__tween: src__animation__tween,
    src__animation__curves: src__animation__curves,
    src__animation__animations: src__animation__animations,
    src__animation__listener_helpers: src__animation__listener_helpers,
    src__animation__animation: src__animation__animation,
    src__painting__border_radius: src__painting__border_radius,
    src__painting__paint_utilities: src__painting__paint_utilities,
    src__painting__basic_types: src__painting__basic_types,
    src__painting__image_decoder: src__painting__image_decoder,
    src__painting__binding: src__painting__binding,
    src__painting__image_cache: src__painting__image_cache,
    src__painting__image_stream: src__painting__image_stream,
    src__painting__image_resolution: src__painting__image_resolution,
    src__painting__image_provider: src__painting__image_provider,
    src__painting__notched_shapes: src__painting__notched_shapes,
    src__painting__geometry: src__painting__geometry,
    src__painting__gradient: src__painting__gradient,
    src__painting__text_span: src__painting__text_span,
    src__painting__text_style: src__painting__text_style,
    src__painting__strut_style: src__painting__strut_style,
    src__widgets__icon_data: src__widgets__icon_data,
    src__widgets__icon_theme_data: src__widgets__icon_theme_data,
    src__painting__text_painter: src__painting__text_painter,
    src__painting__debug: src__painting__debug,
    src__painting__fractional_offset: src__painting__fractional_offset,
    src__semantics__binding: src__semantics__binding,
    src__semantics__debug: src__semantics__debug,
    src__painting__colors: src__painting__colors,
    src__painting__clip: src__painting__clip,
    src__painting__box_shadow: src__painting__box_shadow,
    src__painting__box_fit: src__painting__box_fit,
    src__rendering__platform_view: src__rendering__platform_view,
    src__widgets__scroll_simulation: src__widgets__scroll_simulation
  };
});

//# sourceMappingURL=animation.ddc.js.map
