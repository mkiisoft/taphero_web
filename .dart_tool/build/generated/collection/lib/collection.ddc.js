define(['dart_sdk', 'packages/collection/src/canonicalized_map', 'packages/collection/src/utils'], function(dart_sdk, canonicalized_map, utils) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__unmodifiable_wrappers = canonicalized_map.src__unmodifiable_wrappers;
  const src__wrappers = canonicalized_map.src__wrappers;
  const src__utils = utils.src__utils;
  const src__combined_wrappers__combined_iterable = Object.create(dart.library);
  const src__queue_list = Object.create(dart.library);
  const src__union_set = Object.create(dart.library);
  const src__combined_wrappers__combined_list = Object.create(dart.library);
  const src__combined_wrappers__combined_map = Object.create(dart.library);
  const collection$ = Object.create(dart.library);
  const src__union_set_controller = Object.create(dart.library);
  const src__functions = Object.create(dart.library);
  const src__equality_set = Object.create(dart.library);
  const src__equality_map = Object.create(dart.library);
  const $iterator = dartx.iterator;
  const $map = dartx.map;
  const $contains = dartx.contains;
  const $any = dartx.any;
  const $isEmpty = dartx.isEmpty;
  const $every = dartx.every;
  const $length = dartx.length;
  const $fold = dartx.fold;
  const $setRange = dartx.setRange;
  const $_set = dartx._set;
  const $_get = dartx._get;
  const $fillRange = dartx.fillRange;
  const $rightShift = dartx['>>'];
  const $cast = dartx.cast;
  const $toSet = dartx.toSet;
  const $expand = dartx.expand;
  const $where = dartx.where;
  const $firstWhere = dartx.firstWhere;
  const $noSuchMethod = dartx.noSuchMethod;
  const $containsKey = dartx.containsKey;
  const $keys = dartx.keys;
  const $forEach = dartx.forEach;
  const $addAll = dartx.addAll;
  const $putIfAbsent = dartx.putIfAbsent;
  const $add = dartx.add;
  const $toList = dartx.toList;
  const $removeLast = dartx.removeLast;
  const $reversed = dartx.reversed;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const _iterables$ = dart.privateName(src__combined_wrappers__combined_iterable, "_iterables");
  const _is_CombinedIterableView_default = Symbol('_is_CombinedIterableView_default');
  src__combined_wrappers__combined_iterable.CombinedIterableView$ = dart.generic(T => {
    let _CombinedIteratorOfT = () => (_CombinedIteratorOfT = dart.constFn(src__combined_wrappers__combined_iterable._CombinedIterator$(T)))();
    let IteratorOfT = () => (IteratorOfT = dart.constFn(core.Iterator$(T)))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let IterableOfTToIteratorOfT = () => (IterableOfTToIteratorOfT = dart.constFn(dart.fnType(IteratorOfT(), [IterableOfT()])))();
    let IterableOfTTobool = () => (IterableOfTTobool = dart.constFn(dart.fnType(core.bool, [IterableOfT()])))();
    let intAndIterableOfTToint = () => (intAndIterableOfTToint = dart.constFn(dart.fnType(core.int, [core.int, IterableOfT()])))();
    class CombinedIterableView extends collection.IterableBase$(T) {
      get iterator() {
        return new (_CombinedIteratorOfT()).new(this[_iterables$][$map](IteratorOfT(), dart.fn(i => i[$iterator], IterableOfTToIteratorOfT()))[$iterator]);
      }
      contains(element) {
        return this[_iterables$][$any](dart.fn(i => i[$contains](element), IterableOfTTobool()));
      }
      get isEmpty() {
        return this[_iterables$][$every](dart.fn(i => i[$isEmpty], IterableOfTTobool()));
      }
      get length() {
        return this[_iterables$][$fold](core.int, 0, dart.fn((length, i) => dart.notNull(length) + dart.notNull(i[$length]), intAndIterableOfTToint()));
      }
    }
    (CombinedIterableView.new = function(_iterables) {
      this[_iterables$] = _iterables;
      CombinedIterableView.__proto__.new.call(this);
      ;
    }).prototype = CombinedIterableView.prototype;
    dart.addTypeTests(CombinedIterableView);
    CombinedIterableView.prototype[_is_CombinedIterableView_default] = true;
    dart.setGetterSignature(CombinedIterableView, () => ({
      __proto__: dart.getGetters(CombinedIterableView.__proto__),
      iterator: core.Iterator$(T),
      [$iterator]: core.Iterator$(T)
    }));
    dart.setLibraryUri(CombinedIterableView, "package:collection/src/combined_wrappers/combined_iterable.dart");
    dart.setFieldSignature(CombinedIterableView, () => ({
      __proto__: dart.getFields(CombinedIterableView.__proto__),
      [_iterables$]: dart.finalFieldType(core.Iterable$(core.Iterable$(T)))
    }));
    dart.defineExtensionMethods(CombinedIterableView, ['contains']);
    dart.defineExtensionAccessors(CombinedIterableView, ['iterator', 'isEmpty', 'length']);
    return CombinedIterableView;
  });
  src__combined_wrappers__combined_iterable.CombinedIterableView = src__combined_wrappers__combined_iterable.CombinedIterableView$();
  dart.addTypeTests(src__combined_wrappers__combined_iterable.CombinedIterableView, _is_CombinedIterableView_default);
  const _iterators$ = dart.privateName(src__combined_wrappers__combined_iterable, "_iterators");
  const _is__CombinedIterator_default = Symbol('_is__CombinedIterator_default');
  src__combined_wrappers__combined_iterable._CombinedIterator$ = dart.generic(T => {
    class _CombinedIterator extends core.Object {
      get current() {
        let t0;
        t0 = this[_iterators$].current;
        return t0 == null ? null : t0.current;
      }
      moveNext() {
        let current = this[_iterators$].current;
        if (current != null && dart.test(current.moveNext())) {
          return true;
        }
        return dart.test(this[_iterators$].moveNext()) && dart.test(this.moveNext());
      }
    }
    (_CombinedIterator.new = function(_iterators) {
      this[_iterators$] = _iterators;
      ;
    }).prototype = _CombinedIterator.prototype;
    dart.addTypeTests(_CombinedIterator);
    _CombinedIterator.prototype[_is__CombinedIterator_default] = true;
    _CombinedIterator[dart.implements] = () => [core.Iterator$(T)];
    dart.setMethodSignature(_CombinedIterator, () => ({
      __proto__: dart.getMethods(_CombinedIterator.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(_CombinedIterator, () => ({
      __proto__: dart.getGetters(_CombinedIterator.__proto__),
      current: T
    }));
    dart.setLibraryUri(_CombinedIterator, "package:collection/src/combined_wrappers/combined_iterable.dart");
    dart.setFieldSignature(_CombinedIterator, () => ({
      __proto__: dart.getFields(_CombinedIterator.__proto__),
      [_iterators$]: dart.finalFieldType(core.Iterator$(core.Iterator$(T)))
    }));
    return _CombinedIterator;
  });
  src__combined_wrappers__combined_iterable._CombinedIterator = src__combined_wrappers__combined_iterable._CombinedIterator$();
  dart.addTypeTests(src__combined_wrappers__combined_iterable._CombinedIterator, _is__CombinedIterator_default);
  const _table = dart.privateName(src__queue_list, "_table");
  const _head = dart.privateName(src__queue_list, "_head");
  const _tail = dart.privateName(src__queue_list, "_tail");
  const _add = dart.privateName(src__queue_list, "_add");
  const _preGrow = dart.privateName(src__queue_list, "_preGrow");
  const _grow = dart.privateName(src__queue_list, "_grow");
  const _writeToList = dart.privateName(src__queue_list, "_writeToList");
  const _is_QueueList_default = Symbol('_is_QueueList_default');
  src__queue_list.QueueList$ = dart.generic(E => {
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    const Object_ListMixin$ = class Object_ListMixin extends core.Object {};
    (Object_ListMixin$.new = function() {
    }).prototype = Object_ListMixin$.prototype;
    dart.applyMixin(Object_ListMixin$, collection.ListMixin$(E));
    class QueueList extends Object_ListMixin$ {
      get [_head]() {
        return this[_head$];
      }
      set [_head](value) {
        this[_head$] = value;
      }
      get [_tail]() {
        return this[_tail$];
      }
      set [_tail](value) {
        this[_tail$] = value;
      }
      static _castFrom(S, T, source) {
        return new (src__queue_list._CastQueueList$(S, T)).new(source);
      }
      static from(source) {
        let t0;
        if (core.List.is(source)) {
          let length = source[$length];
          let queue = new (src__queue_list.QueueList$(E)).new(dart.notNull(length) + 1);
          if (!(dart.notNull(queue[_table][$length]) > dart.notNull(length))) dart.assertFailed(null, "org-dartlang-app:///packages/collection/src/queue_list.dart", 57, 14, "queue._table.length > length");
          let sourceList = source;
          queue[_table][$setRange](0, length, sourceList, 0);
          queue[_tail] = length;
          return queue;
        } else {
          t0 = new (src__queue_list.QueueList$(E)).new();
          t0.addAll(source);
          return t0;
        }
      }
      add(element) {
        E._check(element);
        this[_add](element);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        if (core.List.is(iterable)) {
          let list = iterable;
          let addCount = list[$length];
          let length = this.length;
          if (dart.notNull(length) + dart.notNull(addCount) >= dart.notNull(this[_table][$length])) {
            this[_preGrow](dart.notNull(length) + dart.notNull(addCount));
            this[_table][$setRange](length, dart.notNull(length) + dart.notNull(addCount), list, 0);
            this[_tail] = dart.notNull(this[_tail]) + dart.notNull(addCount);
          } else {
            let endSpace = dart.notNull(this[_table][$length]) - dart.notNull(this[_tail]);
            if (dart.notNull(addCount) < endSpace) {
              this[_table][$setRange](this[_tail], dart.notNull(this[_tail]) + dart.notNull(addCount), list, 0);
              this[_tail] = dart.notNull(this[_tail]) + dart.notNull(addCount);
            } else {
              let preSpace = dart.notNull(addCount) - endSpace;
              this[_table][$setRange](this[_tail], dart.notNull(this[_tail]) + endSpace, list, 0);
              this[_table][$setRange](0, preSpace, list, endSpace);
              this[_tail] = preSpace;
            }
          }
        } else {
          for (let element of iterable)
            this[_add](element);
        }
      }
      cast(T) {
        return src__queue_list.QueueList._castFrom(E, T, this);
      }
      retype(T) {
        return this.cast(T);
      }
      toString() {
        return collection.IterableBase.iterableToFullString(this, "{", "}");
      }
      addLast(element) {
        E._check(element);
        this[_add](element);
      }
      addFirst(element) {
        E._check(element);
        this[_head] = (dart.notNull(this[_head]) - 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        this[_table][$_set](this[_head], element);
        if (this[_head] == this[_tail]) this[_grow]();
      }
      removeFirst() {
        if (this[_head] == this[_tail]) dart.throw(new core.StateError.new("No element"));
        let result = this[_table][$_get](this[_head]);
        this[_table][$_set](this[_head], null);
        this[_head] = (dart.notNull(this[_head]) + 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        return result;
      }
      removeLast() {
        if (this[_head] == this[_tail]) dart.throw(new core.StateError.new("No element"));
        this[_tail] = (dart.notNull(this[_tail]) - 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        let result = this[_table][$_get](this[_tail]);
        this[_table][$_set](this[_tail], null);
        return result;
      }
      get length() {
        return (dart.notNull(this[_tail]) - dart.notNull(this[_head]) & dart.notNull(this[_table][$length]) - 1) >>> 0;
      }
      set length(value) {
        if (dart.notNull(value) < 0) dart.throw(new core.RangeError.new("Length " + dart.str(value) + " may not be negative."));
        let delta = dart.notNull(value) - dart.notNull(this.length);
        if (delta >= 0) {
          if (dart.notNull(this[_table][$length]) <= dart.notNull(value)) {
            this[_preGrow](value);
          }
          this[_tail] = (dart.notNull(this[_tail]) + delta & dart.notNull(this[_table][$length]) - 1) >>> 0;
          return;
        }
        let newTail = dart.notNull(this[_tail]) + delta;
        if (newTail >= 0) {
          this[_table][$fillRange](newTail, this[_tail], null);
        } else {
          newTail = newTail + dart.notNull(this[_table][$length]);
          this[_table][$fillRange](0, this[_tail], null);
          this[_table][$fillRange](newTail, this[_table][$length], null);
        }
        this[_tail] = newTail;
      }
      _get(index) {
        if (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(this.length)) {
          dart.throw(new core.RangeError.new("Index " + dart.str(index) + " must be in the range [0.." + dart.str(this.length) + ")."));
        }
        return this[_table][$_get]((dart.notNull(this[_head]) + dart.notNull(index) & dart.notNull(this[_table][$length]) - 1) >>> 0);
      }
      _set(index, value$) {
        let value = value$;
        E._check(value);
        if (dart.notNull(index) < 0 || dart.notNull(index) >= dart.notNull(this.length)) {
          dart.throw(new core.RangeError.new("Index " + dart.str(index) + " must be in the range [0.." + dart.str(this.length) + ")."));
        }
        this[_table][$_set]((dart.notNull(this[_head]) + dart.notNull(index) & dart.notNull(this[_table][$length]) - 1) >>> 0, value);
        return value$;
      }
      static _isPowerOf2(number) {
        return (dart.notNull(number) & dart.notNull(number) - 1) === 0;
      }
      static _nextPowerOf2(number) {
        if (!(dart.notNull(number) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/collection/src/queue_list.dart", 192, 12, "number > 0");
        number = (dart.notNull(number) << 1 >>> 0) - 1;
        for (;;) {
          let nextNumber = (dart.notNull(number) & dart.notNull(number) - 1) >>> 0;
          if (nextNumber === 0) return number;
          number = nextNumber;
        }
      }
      [_add](element) {
        this[_table][$_set](this[_tail], element);
        this[_tail] = (dart.notNull(this[_tail]) + 1 & dart.notNull(this[_table][$length]) - 1) >>> 0;
        if (this[_head] == this[_tail]) this[_grow]();
      }
      [_grow]() {
        let newTable = ListOfE().new(dart.notNull(this[_table][$length]) * 2);
        let split = dart.notNull(this[_table][$length]) - dart.notNull(this[_head]);
        newTable[$setRange](0, split, this[_table], this[_head]);
        newTable[$setRange](split, split + dart.notNull(this[_head]), this[_table], 0);
        this[_head] = 0;
        this[_tail] = this[_table][$length];
        this[_table] = newTable;
      }
      [_writeToList](target) {
        if (!(dart.notNull(target[$length]) >= dart.notNull(this.length))) dart.assertFailed(null, "org-dartlang-app:///packages/collection/src/queue_list.dart", 220, 12, "target.length >= length");
        if (dart.notNull(this[_head]) <= dart.notNull(this[_tail])) {
          let length = dart.notNull(this[_tail]) - dart.notNull(this[_head]);
          target[$setRange](0, length, this[_table], this[_head]);
          return length;
        } else {
          let firstPartSize = dart.notNull(this[_table][$length]) - dart.notNull(this[_head]);
          target[$setRange](0, firstPartSize, this[_table], this[_head]);
          target[$setRange](firstPartSize, firstPartSize + dart.notNull(this[_tail]), this[_table], 0);
          return dart.notNull(this[_tail]) + firstPartSize;
        }
      }
      [_preGrow](newElementCount) {
        if (!(dart.notNull(newElementCount) >= dart.notNull(this.length))) dart.assertFailed(null, "org-dartlang-app:///packages/collection/src/queue_list.dart", 235, 12, "newElementCount >= length");
        newElementCount = dart.notNull(newElementCount) + newElementCount[$rightShift](1);
        let newCapacity = src__queue_list.QueueList._nextPowerOf2(newElementCount);
        let newTable = ListOfE().new(newCapacity);
        this[_tail] = this[_writeToList](newTable);
        this[_table] = newTable;
        this[_head] = 0;
      }
    }
    (QueueList.new = function(initialCapacity) {
      if (initialCapacity === void 0) initialCapacity = null;
      this[_table] = null;
      this[_head$] = 0;
      this[_tail$] = 0;
      if (initialCapacity == null || dart.notNull(initialCapacity) < dart.notNull(src__queue_list.QueueList._INITIAL_CAPACITY)) {
        initialCapacity = src__queue_list.QueueList._INITIAL_CAPACITY;
      } else if (!dart.test(src__queue_list.QueueList._isPowerOf2(initialCapacity))) {
        initialCapacity = src__queue_list.QueueList._nextPowerOf2(initialCapacity);
      }
      if (!dart.test(src__queue_list.QueueList._isPowerOf2(initialCapacity))) dart.assertFailed(null, "org-dartlang-app:///packages/collection/src/queue_list.dart", 45, 12, "_isPowerOf2(initialCapacity)");
      this[_table] = ListOfE().new(initialCapacity);
    }).prototype = QueueList.prototype;
    (QueueList.__ = function() {
      this[_table] = null;
      this[_tail$] = null;
      this[_head$] = null;
      ;
    }).prototype = QueueList.prototype;
    dart.addTypeTests(QueueList);
    QueueList.prototype[_is_QueueList_default] = true;
    const _head$ = Symbol("QueueList._head");
    const _tail$ = Symbol("QueueList._tail");
    QueueList[dart.implements] = () => [collection.Queue$(E)];
    dart.setMethodSignature(QueueList, () => ({
      __proto__: dart.getMethods(QueueList.__proto__),
      cast: dart.gFnType(T => [src__queue_list.QueueList$(T), []]),
      [$cast]: dart.gFnType(T => [src__queue_list.QueueList$(T), []]),
      retype: dart.gFnType(T => [src__queue_list.QueueList$(T), []]),
      addLast: dart.fnType(dart.void, [core.Object]),
      addFirst: dart.fnType(dart.void, [core.Object]),
      removeFirst: dart.fnType(E, []),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object]),
      [_add]: dart.fnType(dart.void, [E]),
      [_grow]: dart.fnType(dart.void, []),
      [_writeToList]: dart.fnType(core.int, [core.List$(E)]),
      [_preGrow]: dart.fnType(dart.void, [core.int])
    }));
    dart.setGetterSignature(QueueList, () => ({
      __proto__: dart.getGetters(QueueList.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setSetterSignature(QueueList, () => ({
      __proto__: dart.getSetters(QueueList.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(QueueList, "package:collection/src/queue_list.dart");
    dart.setFieldSignature(QueueList, () => ({
      __proto__: dart.getFields(QueueList.__proto__),
      [_table]: dart.fieldType(core.List$(E)),
      [_head]: dart.fieldType(core.int),
      [_tail]: dart.fieldType(core.int)
    }));
    dart.defineExtensionMethods(QueueList, [
      'add',
      'addAll',
      'cast',
      'toString',
      'removeLast',
      '_get',
      '_set'
    ]);
    dart.defineExtensionAccessors(QueueList, ['length']);
    return QueueList;
  });
  src__queue_list.QueueList = src__queue_list.QueueList$();
  dart.defineLazy(src__queue_list.QueueList, {
    /*src__queue_list.QueueList._INITIAL_CAPACITY*/get _INITIAL_CAPACITY() {
      return 8;
    }
  });
  dart.addTypeTests(src__queue_list.QueueList, _is_QueueList_default);
  const _delegate$ = dart.privateName(src__queue_list, "_delegate");
  const _is__CastQueueList_default = Symbol('_is__CastQueueList_default');
  src__queue_list._CastQueueList$ = dart.generic((S, T) => {
    class _CastQueueList extends src__queue_list.QueueList$(T) {
      get [_head]() {
        return this[_delegate$][_head];
      }
      set [_head](value) {
        return this[_delegate$][_head] = value;
      }
      get [_tail]() {
        return this[_delegate$][_tail];
      }
      set [_tail](value) {
        return this[_delegate$][_tail] = value;
      }
    }
    (_CastQueueList.new = function(_delegate) {
      this[_delegate$] = _delegate;
      _CastQueueList.__proto__.__.call(this);
      this[_table] = this[_delegate$][_table][$cast](T);
    }).prototype = _CastQueueList.prototype;
    dart.addTypeTests(_CastQueueList);
    _CastQueueList.prototype[_is__CastQueueList_default] = true;
    dart.setGetterSignature(_CastQueueList, () => ({
      __proto__: dart.getGetters(_CastQueueList.__proto__),
      [_head]: core.int,
      [_tail]: core.int
    }));
    dart.setSetterSignature(_CastQueueList, () => ({
      __proto__: dart.getSetters(_CastQueueList.__proto__),
      [_head]: core.int,
      [_tail]: core.int
    }));
    dart.setLibraryUri(_CastQueueList, "package:collection/src/queue_list.dart");
    dart.setFieldSignature(_CastQueueList, () => ({
      __proto__: dart.getFields(_CastQueueList.__proto__),
      [_delegate$]: dart.finalFieldType(src__queue_list.QueueList$(S))
    }));
    return _CastQueueList;
  });
  src__queue_list._CastQueueList = src__queue_list._CastQueueList$();
  dart.addTypeTests(src__queue_list._CastQueueList, _is__CastQueueList_default);
  const _sets$ = dart.privateName(src__union_set, "_sets");
  const _disjoint = dart.privateName(src__union_set, "_disjoint");
  const _iterable = dart.privateName(src__union_set, "_iterable");
  const _dedupIterable = dart.privateName(src__union_set, "_dedupIterable");
  const _is_UnionSet_default = Symbol('_is_UnionSet_default');
  src__union_set.UnionSet$ = dart.generic(E => {
    let SetOfE = () => (SetOfE = dart.constFn(core.Set$(E)))();
    let intAndSetOfEToint = () => (intAndSetOfEToint = dart.constFn(dart.fnType(core.int, [core.int, SetOfE()])))();
    let SetOfEToSetOfE = () => (SetOfEToSetOfE = dart.constFn(dart.fnType(SetOfE(), [SetOfE()])))();
    let _HashSetOfE = () => (_HashSetOfE = dart.constFn(collection._HashSet$(E)))();
    let ETobool = () => (ETobool = dart.constFn(dart.fnType(core.bool, [E])))();
    let SetOfETobool = () => (SetOfETobool = dart.constFn(dart.fnType(core.bool, [SetOfE()])))();
    let SetOfEToE = () => (SetOfEToE = dart.constFn(dart.fnType(E, [SetOfE()])))();
    const SetBase_UnmodifiableSetMixin$ = class SetBase_UnmodifiableSetMixin extends collection.SetBase$(E) {};
    (SetBase_UnmodifiableSetMixin$.new = function() {
    }).prototype = SetBase_UnmodifiableSetMixin$.prototype;
    dart.applyMixin(SetBase_UnmodifiableSetMixin$, src__unmodifiable_wrappers.UnmodifiableSetMixin$(E));
    class UnionSet extends SetBase_UnmodifiableSetMixin$ {
      get length() {
        return dart.test(this[_disjoint]) ? this[_sets$][$fold](core.int, 0, dart.fn((length, set) => dart.notNull(length) + dart.notNull(set[$length]), intAndSetOfEToint())) : this[_iterable][$length];
      }
      get iterator() {
        return this[_iterable][$iterator];
      }
      get [_iterable]() {
        return dart.test(this[_disjoint]) ? this[_sets$][$expand](E, dart.fn(set => set, SetOfEToSetOfE())) : this[_dedupIterable];
      }
      get [_dedupIterable]() {
        let seen = new (_HashSetOfE()).new();
        return this[_sets$][$expand](E, dart.fn(set => set, SetOfEToSetOfE()))[$where](dart.fn(element => {
          if (dart.test(seen.contains(element))) return false;
          seen.add(element);
          return true;
        }, ETobool()));
      }
      contains(element) {
        return this[_sets$][$any](dart.fn(set => set.contains(element), SetOfETobool()));
      }
      lookup(element) {
        if (element == null) return null;
        return this[_sets$][$map](E, dart.fn(set => set.lookup(element), SetOfEToE()))[$firstWhere](dart.fn(result => result != null, ETobool()), {orElse: dart.fn(() => null, VoidToNull())});
      }
      toSet() {
        let result = new (_HashSetOfE()).new();
        for (let set of this[_sets$]) {
          result.addAll(set);
        }
        return result;
      }
    }
    (UnionSet.new = function(_sets, opts) {
      let disjoint = opts && 'disjoint' in opts ? opts.disjoint : false;
      this[_sets$] = _sets;
      this[_disjoint] = disjoint;
      ;
    }).prototype = UnionSet.prototype;
    (UnionSet.from = function(sets, opts) {
      let disjoint = opts && 'disjoint' in opts ? opts.disjoint : false;
      UnionSet.new.call(this, sets[$toSet](), {disjoint: disjoint});
    }).prototype = UnionSet.prototype;
    dart.addTypeTests(UnionSet);
    UnionSet.prototype[_is_UnionSet_default] = true;
    dart.setMethodSignature(UnionSet, () => ({
      __proto__: dart.getMethods(UnionSet.__proto__),
      contains: dart.fnType(core.bool, [core.Object]),
      [$contains]: dart.fnType(core.bool, [core.Object]),
      lookup: dart.fnType(E, [core.Object]),
      toSet: dart.fnType(core.Set$(E), []),
      [$toSet]: dart.fnType(core.Set$(E), [])
    }));
    dart.setGetterSignature(UnionSet, () => ({
      __proto__: dart.getGetters(UnionSet.__proto__),
      length: core.int,
      [$length]: core.int,
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E),
      [_iterable]: core.Iterable$(E),
      [_dedupIterable]: core.Iterable$(E)
    }));
    dart.setLibraryUri(UnionSet, "package:collection/src/union_set.dart");
    dart.setFieldSignature(UnionSet, () => ({
      __proto__: dart.getFields(UnionSet.__proto__),
      [_sets$]: dart.finalFieldType(core.Set$(core.Set$(E))),
      [_disjoint]: dart.finalFieldType(core.bool)
    }));
    dart.defineExtensionMethods(UnionSet, ['contains', 'toSet']);
    dart.defineExtensionAccessors(UnionSet, ['length', 'iterator']);
    return UnionSet;
  });
  src__union_set.UnionSet = src__union_set.UnionSet$();
  dart.addTypeTests(src__union_set.UnionSet, _is_UnionSet_default);
  const _lists$ = dart.privateName(src__combined_wrappers__combined_list, "_lists");
  const _source = dart.privateName(src__combined_wrappers__combined_list, "_source");
  let const$;
  const _source$ = dart.privateName(collection, "_source");
  const _is_CombinedListView_default = Symbol('_is_CombinedListView_default');
  src__combined_wrappers__combined_list.CombinedListView$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let intAndListOfTToint = () => (intAndListOfTToint = dart.constFn(dart.fnType(core.int, [core.int, ListOfT()])))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    class CombinedListView extends collection.ListBase$(T) {
      static _throw() {
        dart.throw(new core.UnsupportedError.new("Cannot modify an unmodifiable List"));
      }
      set length(length) {
        src__combined_wrappers__combined_list.CombinedListView._throw();
      }
      get length() {
        return this[_lists$][$fold](core.int, 0, dart.fn((length, list) => dart.notNull(length) + dart.notNull(list[$length]), intAndListOfTToint()));
      }
      _get(index) {
        let initialIndex = index;
        for (let i = 0; i < dart.notNull(this[_lists$][$length]); i = i + 1) {
          let list = this[_lists$][$_get](i);
          if (dart.notNull(index) < dart.notNull(list[$length])) {
            return list[$_get](index);
          }
          index = dart.notNull(index) - dart.notNull(list[$length]);
        }
        dart.throw(new core.IndexError.new(initialIndex, this, "index", null, this.length));
      }
      _set(index, value$) {
        let value = value$;
        T._check(value);
        src__combined_wrappers__combined_list.CombinedListView._throw();
        return value$;
      }
      clear() {
        src__combined_wrappers__combined_list.CombinedListView._throw();
      }
      remove(element) {
        src__combined_wrappers__combined_list.CombinedListView._throw();
        return null;
      }
      removeWhere(test) {
        src__combined_wrappers__combined_list.CombinedListView._throw();
      }
      retainWhere(test) {
        src__combined_wrappers__combined_list.CombinedListView._throw();
      }
      get [_source$]() {
        return IterableOfT()._check(this[$noSuchMethod](new core._Invocation.getter(const$ || (const$ = dart.const(new _js_helper.PrivateSymbol.new('_source', _source))))));
      }
    }
    (CombinedListView.new = function(_lists) {
      this[_lists$] = _lists;
      ;
    }).prototype = CombinedListView.prototype;
    dart.addTypeTests(CombinedListView);
    CombinedListView.prototype[_is_CombinedListView_default] = true;
    CombinedListView[dart.implements] = () => [collection.UnmodifiableListView$(T)];
    dart.setMethodSignature(CombinedListView, () => ({
      __proto__: dart.getMethods(CombinedListView.__proto__),
      _get: dart.fnType(T, [core.int]),
      [$_get]: dart.fnType(T, [core.int]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object])
    }));
    dart.setGetterSignature(CombinedListView, () => ({
      __proto__: dart.getGetters(CombinedListView.__proto__),
      length: core.int,
      [$length]: core.int,
      [_source$]: core.Iterable$(T)
    }));
    dart.setSetterSignature(CombinedListView, () => ({
      __proto__: dart.getSetters(CombinedListView.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(CombinedListView, "package:collection/src/combined_wrappers/combined_list.dart");
    dart.setFieldSignature(CombinedListView, () => ({
      __proto__: dart.getFields(CombinedListView.__proto__),
      [_lists$]: dart.finalFieldType(core.List$(core.List$(T)))
    }));
    dart.defineExtensionMethods(CombinedListView, [
      '_get',
      '_set',
      'clear',
      'remove',
      'removeWhere',
      'retainWhere'
    ]);
    dart.defineExtensionAccessors(CombinedListView, ['length']);
    return CombinedListView;
  });
  src__combined_wrappers__combined_list.CombinedListView = src__combined_wrappers__combined_list.CombinedListView$();
  dart.addTypeTests(src__combined_wrappers__combined_list.CombinedListView, _is_CombinedListView_default);
  const _maps$ = dart.privateName(src__combined_wrappers__combined_map, "_maps");
  const _is_CombinedMapView_default = Symbol('_is_CombinedMapView_default');
  src__combined_wrappers__combined_map.CombinedMapView$ = dart.generic((K, V) => {
    let CombinedIterableViewOfK = () => (CombinedIterableViewOfK = dart.constFn(src__combined_wrappers__combined_iterable.CombinedIterableView$(K)))();
    let IterableOfK = () => (IterableOfK = dart.constFn(core.Iterable$(K)))();
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let MapOfK$VToIterableOfK = () => (MapOfK$VToIterableOfK = dart.constFn(dart.fnType(IterableOfK(), [MapOfK$V()])))();
    class CombinedMapView extends collection.UnmodifiableMapBase$(K, V) {
      _get(key) {
        for (let map of this[_maps$]) {
          let value = map[$_get](key);
          if (value != null || dart.test(map[$containsKey](value))) {
            return value;
          }
        }
        return null;
      }
      get keys() {
        return new (CombinedIterableViewOfK()).new(this[_maps$][$map](IterableOfK(), dart.fn(m => m[$keys], MapOfK$VToIterableOfK())));
      }
    }
    (CombinedMapView.new = function(_maps) {
      this[_maps$] = _maps;
      ;
    }).prototype = CombinedMapView.prototype;
    dart.addTypeTests(CombinedMapView);
    CombinedMapView.prototype[_is_CombinedMapView_default] = true;
    dart.setMethodSignature(CombinedMapView, () => ({
      __proto__: dart.getMethods(CombinedMapView.__proto__),
      _get: dart.fnType(V, [core.Object]),
      [$_get]: dart.fnType(V, [core.Object])
    }));
    dart.setGetterSignature(CombinedMapView, () => ({
      __proto__: dart.getGetters(CombinedMapView.__proto__),
      keys: core.Iterable$(K),
      [$keys]: core.Iterable$(K)
    }));
    dart.setLibraryUri(CombinedMapView, "package:collection/src/combined_wrappers/combined_map.dart");
    dart.setFieldSignature(CombinedMapView, () => ({
      __proto__: dart.getFields(CombinedMapView.__proto__),
      [_maps$]: dart.finalFieldType(core.Iterable$(core.Map$(K, V)))
    }));
    dart.defineExtensionMethods(CombinedMapView, ['_get']);
    dart.defineExtensionAccessors(CombinedMapView, ['keys']);
    return CombinedMapView;
  });
  src__combined_wrappers__combined_map.CombinedMapView = src__combined_wrappers__combined_map.CombinedMapView$();
  dart.addTypeTests(src__combined_wrappers__combined_map.CombinedMapView, _is_CombinedMapView_default);
  const _set = dart.privateName(src__union_set_controller, "_set");
  const _sets = dart.privateName(src__union_set_controller, "_sets");
  const _is_UnionSetController_default = Symbol('_is_UnionSetController_default');
  src__union_set_controller.UnionSetController$ = dart.generic(E => {
    let SetOfE = () => (SetOfE = dart.constFn(core.Set$(E)))();
    let _HashSetOfSetOfE = () => (_HashSetOfSetOfE = dart.constFn(collection._HashSet$(SetOfE())))();
    let UnionSetOfE = () => (UnionSetOfE = dart.constFn(src__union_set.UnionSet$(E)))();
    class UnionSetController extends core.Object {
      get set() {
        return this[_set];
      }
      add(component) {
        SetOfE()._check(component);
        this[_sets].add(component);
      }
      remove(component) {
        SetOfE()._check(component);
        return this[_sets].remove(component);
      }
    }
    (UnionSetController.new = function(opts) {
      let disjoint = opts && 'disjoint' in opts ? opts.disjoint : false;
      this[_set] = null;
      this[_sets] = new (_HashSetOfSetOfE()).new();
      this[_set] = new (UnionSetOfE()).new(this[_sets], {disjoint: disjoint});
    }).prototype = UnionSetController.prototype;
    dart.addTypeTests(UnionSetController);
    UnionSetController.prototype[_is_UnionSetController_default] = true;
    dart.setMethodSignature(UnionSetController, () => ({
      __proto__: dart.getMethods(UnionSetController.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(UnionSetController, () => ({
      __proto__: dart.getGetters(UnionSetController.__proto__),
      set: src__union_set.UnionSet$(E)
    }));
    dart.setLibraryUri(UnionSetController, "package:collection/src/union_set_controller.dart");
    dart.setFieldSignature(UnionSetController, () => ({
      __proto__: dart.getFields(UnionSetController.__proto__),
      [_set]: dart.fieldType(src__union_set.UnionSet$(E)),
      [_sets]: dart.finalFieldType(core.Set$(core.Set$(E)))
    }));
    return UnionSetController;
  });
  src__union_set_controller.UnionSetController = src__union_set_controller.UnionSetController$();
  dart.addTypeTests(src__union_set_controller.UnionSetController, _is_UnionSetController_default);
  src__functions.mapMap = function(K1, V1, K2, V2, map, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let value = opts && 'value' in opts ? opts.value : null;
    key == null ? key = dart.fn((mapKey, _) => K2.as(mapKey), dart.fnType(K2, [K1, V1])) : null;
    value == null ? value = dart.fn((_, mapValue) => V2.as(mapValue), dart.fnType(V2, [K1, V1])) : null;
    let result = new (_js_helper.LinkedMap$(K2, V2)).new();
    map[$forEach](dart.fn((mapKey, mapValue) => {
      result[$_set](key(mapKey, mapValue), value(mapKey, mapValue));
    }, dart.fnType(core.Null, [K1, V1])));
    return result;
  };
  src__functions.mergeMaps = function(K, V, map1, map2, opts) {
    let t0;
    let value = opts && 'value' in opts ? opts.value : null;
    let result = collection.LinkedHashMap$(K, V).from(map1);
    if (value == null) {
      t0 = result;
      t0[$addAll](map2);
      return t0;
    }
    map2[$forEach](dart.fn((key, mapValue) => {
      result[$_set](key, dart.test(result[$containsKey](key)) ? value(result[$_get](key), mapValue) : mapValue);
    }, dart.fnType(core.Null, [K, V])));
    return result;
  };
  src__functions.groupBy = function(S, T, values, key) {
    let map = new (_js_helper.LinkedMap$(T, core.List$(S))).new();
    for (let element of values) {
      let list = map[$putIfAbsent](key(element), dart.fn(() => _interceptors.JSArray$(S).of([]), dart.fnType(core.List$(S), [])));
      list[$add](element);
    }
    return map;
  };
  src__functions.minBy = function(S, T, values, orderBy, opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    compare == null ? compare = src__utils.defaultCompare(T) : null;
    let minValue = null;
    let minOrderBy = null;
    for (let element of values) {
      let elementOrderBy = orderBy(element);
      if (minOrderBy == null || dart.notNull(compare(elementOrderBy, minOrderBy)) < 0) {
        minValue = element;
        minOrderBy = elementOrderBy;
      }
    }
    return minValue;
  };
  src__functions.maxBy = function(S, T, values, orderBy, opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    compare == null ? compare = src__utils.defaultCompare(T) : null;
    let maxValue = null;
    let maxOrderBy = null;
    for (let element of values) {
      let elementOrderBy = orderBy(element);
      if (maxOrderBy == null || dart.notNull(compare(elementOrderBy, maxOrderBy)) > 0) {
        maxValue = element;
        maxOrderBy = elementOrderBy;
      }
    }
    return maxValue;
  };
  src__functions.transitiveClosure = function(T, graph) {
    let result = new (_js_helper.LinkedMap$(T, core.Set$(T))).new();
    graph[$forEach](dart.fn((vertex, edges) => {
      result[$_set](vertex, collection.LinkedHashSet$(T).from(edges));
    }, dart.fnType(core.Null, [T, core.Iterable$(T)])));
    let keys = graph[$keys][$toList]();
    for (let vertex1 of keys) {
      for (let vertex2 of keys) {
        for (let vertex3 of keys) {
          if (dart.test(result[$_get](vertex2).contains(vertex1)) && dart.test(result[$_get](vertex1).contains(vertex3))) {
            result[$_get](vertex2).add(vertex3);
          }
        }
      }
    }
    return result;
  };
  src__functions.stronglyConnectedComponents = function(T, graph) {
    let index = 0;
    let stack = _interceptors.JSArray$(T).of([]);
    let result = _interceptors.JSArray$(core.Set$(T)).of([]);
    let indices = new (_js_helper.LinkedMap$(T, core.int)).new();
    let lowLinks = new (_js_helper.LinkedMap$(T, core.int)).new();
    let onStack = new (collection._HashSet$(T)).new();
    function strongConnect(vertex) {
      indices[$_set](vertex, index);
      lowLinks[$_set](vertex, index);
      index = index + 1;
      stack[$add](vertex);
      onStack.add(vertex);
      for (let successor of graph[$_get](vertex)) {
        if (!dart.test(indices[$containsKey](successor))) {
          strongConnect(successor);
          lowLinks[$_set](vertex, math.min(core.int, lowLinks[$_get](vertex), lowLinks[$_get](successor)));
        } else if (dart.test(onStack.contains(successor))) {
          lowLinks[$_set](vertex, math.min(core.int, lowLinks[$_get](vertex), lowLinks[$_get](successor)));
        }
      }
      if (lowLinks[$_get](vertex) == indices[$_get](vertex)) {
        let component = new (collection._HashSet$(T)).new();
        let neighbor = null;
        do {
          neighbor = stack[$removeLast]();
          onStack.remove(neighbor);
          component.add(neighbor);
        } while (!dart.equals(neighbor, vertex));
        result[$add](component);
      }
    }
    dart.fn(strongConnect, dart.fnType(core.Null, [T]));
    for (let vertex of graph[$keys]) {
      if (!dart.test(indices[$containsKey](vertex))) strongConnect(vertex);
    }
    return result[$reversed][$toList]();
  };
  const _is_EqualitySet_default = Symbol('_is_EqualitySet_default');
  src__equality_set.EqualitySet$ = dart.generic(E => {
    let LinkedHashSetOfE = () => (LinkedHashSetOfE = dart.constFn(collection.LinkedHashSet$(E)))();
    class EqualitySet extends src__wrappers.DelegatingSet$(E) {}
    (EqualitySet.new = function(equality) {
      EqualitySet.__proto__.new.call(this, LinkedHashSetOfE().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
      ;
    }).prototype = EqualitySet.prototype;
    (EqualitySet.from = function(equality, other) {
      EqualitySet.__proto__.new.call(this, LinkedHashSetOfE().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
      this.addAll(other);
    }).prototype = EqualitySet.prototype;
    dart.addTypeTests(EqualitySet);
    EqualitySet.prototype[_is_EqualitySet_default] = true;
    dart.setLibraryUri(EqualitySet, "package:collection/src/equality_set.dart");
    return EqualitySet;
  });
  src__equality_set.EqualitySet = src__equality_set.EqualitySet$();
  dart.addTypeTests(src__equality_set.EqualitySet, _is_EqualitySet_default);
  const _is_EqualityMap_default = Symbol('_is_EqualityMap_default');
  src__equality_map.EqualityMap$ = dart.generic((K, V) => {
    let LinkedHashMapOfK$V = () => (LinkedHashMapOfK$V = dart.constFn(collection.LinkedHashMap$(K, V)))();
    class EqualityMap extends src__wrappers.DelegatingMap$(K, V) {}
    (EqualityMap.new = function(equality) {
      EqualityMap.__proto__.new.call(this, LinkedHashMapOfK$V().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
      ;
    }).prototype = EqualityMap.prototype;
    (EqualityMap.from = function(equality, other) {
      EqualityMap.__proto__.new.call(this, LinkedHashMapOfK$V().new({equals: dart.bind(equality, 'equals'), hashCode: dart.bind(equality, 'hash'), isValidKey: dart.bind(equality, 'isValidKey')}));
      this.addAll(other);
    }).prototype = EqualityMap.prototype;
    dart.addTypeTests(EqualityMap);
    EqualityMap.prototype[_is_EqualityMap_default] = true;
    dart.setLibraryUri(EqualityMap, "package:collection/src/equality_map.dart");
    return EqualityMap;
  });
  src__equality_map.EqualityMap = src__equality_map.EqualityMap$();
  dart.addTypeTests(src__equality_map.EqualityMap, _is_EqualityMap_default);
  dart.trackLibraries("packages/collection/collection", {
    "package:collection/src/combined_wrappers/combined_iterable.dart": src__combined_wrappers__combined_iterable,
    "package:collection/src/queue_list.dart": src__queue_list,
    "package:collection/src/union_set.dart": src__union_set,
    "package:collection/src/combined_wrappers/combined_list.dart": src__combined_wrappers__combined_list,
    "package:collection/src/combined_wrappers/combined_map.dart": src__combined_wrappers__combined_map,
    "package:collection/collection.dart": collection$,
    "package:collection/src/union_set_controller.dart": src__union_set_controller,
    "package:collection/src/functions.dart": src__functions,
    "package:collection/src/equality_set.dart": src__equality_set,
    "package:collection/src/equality_map.dart": src__equality_map
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/collection/src/combined_wrappers/combined_iterable.dart","org-dartlang-app:///packages/collection/src/queue_list.dart","org-dartlang-app:///packages/collection/src/union_set.dart","org-dartlang-app:///packages/collection/src/combined_wrappers/combined_list.dart","org-dartlang-app:///packages/collection/src/combined_wrappers/combined_map.dart","org-dartlang-app:///packages/collection/src/union_set_controller.dart","org-dartlang-app:///packages/collection/src/functions.dart","org-dartlang-app:///packages/collection/src/equality_set.dart","org-dartlang-app:///packages/collection/src/equality_map.dart"],"names":[],"mappings":"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","file":"collection.ddc.js"}');
  // Exports:
  return {
    src__combined_wrappers__combined_iterable: src__combined_wrappers__combined_iterable,
    src__queue_list: src__queue_list,
    src__union_set: src__union_set,
    src__combined_wrappers__combined_list: src__combined_wrappers__combined_list,
    src__combined_wrappers__combined_map: src__combined_wrappers__combined_map,
    collection: collection$,
    src__union_set_controller: src__union_set_controller,
    src__functions: src__functions,
    src__equality_set: src__equality_set,
    src__equality_map: src__equality_map
  };
});

//# sourceMappingURL=collection.ddc.js.map
