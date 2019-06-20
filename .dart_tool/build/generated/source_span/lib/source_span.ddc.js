define(['dart_sdk', 'packages/path/path', 'packages/charcode/ascii', 'packages/term_glyph/src/generated/ascii_glyph_set'], function(dart_sdk, path, ascii, ascii_glyph_set) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const path$ = path.path;
  const ascii$ = ascii.ascii;
  const src__generated__top_level = ascii_glyph_set.src__generated__top_level;
  const term_glyph = ascii_glyph_set.term_glyph;
  const src__span_mixin = Object.create(dart.library);
  const src__utils = Object.create(dart.library);
  const src__span_with_context = Object.create(dart.library);
  const src__span = Object.create(dart.library);
  const src__location = Object.create(dart.library);
  const src__highlighter = Object.create(dart.library);
  const src__colors = Object.create(dart.library);
  const source_span = Object.create(dart.library);
  const src__span_exception = Object.create(dart.library);
  const src__location_mixin = Object.create(dart.library);
  const src__file = Object.create(dart.library);
  const $substring = dartx.substring;
  const $isEmpty = dartx.isEmpty;
  const $runtimeType = dartx.runtimeType;
  const $compareTo = dartx.compareTo;
  const $codeUnits = dartx.codeUnits;
  const $indexOf = dartx.indexOf;
  const $lastIndexOf = dartx.lastIndexOf;
  const $contains = dartx.contains;
  const $abs = dartx.abs;
  const $toString = dartx.toString;
  const $codeUnitAt = dartx.codeUnitAt;
  const $replaceAll = dartx.replaceAll;
  const $endsWith = dartx.endsWith;
  const $split = dartx.split;
  const $length = dartx.length;
  const $times = dartx['*'];
  const $last = dartx.last;
  const $removeLast = dartx.removeLast;
  const $first = dartx.first;
  const $skip = dartx.skip;
  const $take = dartx.take;
  const $_get = dartx._get;
  const $padRight = dartx.padRight;
  const $runes = dartx.runes;
  const $toList = dartx.toList;
  const $add = dartx.add;
  const $truncate = dartx.truncate;
  const $sublist = dartx.sublist;
  const $noSuchMethod = dartx.noSuchMethod;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  src__span_mixin.SourceSpanMixin = class SourceSpanMixin extends core.Object {
    get sourceUrl() {
      return this.start.sourceUrl;
    }
    get length() {
      return dart.notNull(this.end.offset) - dart.notNull(this.start.offset);
    }
    compareTo(other) {
      src__span.SourceSpan._check(other);
      let result = this.start.compareTo(other.start);
      return result === 0 ? this.end.compareTo(other.end) : result;
    }
    union(other) {
      if (!dart.equals(this.sourceUrl, other.sourceUrl)) {
        dart.throw(new core.ArgumentError.new("Source URLs \"" + dart.str(this.sourceUrl) + "\" and " + " \"" + dart.str(other.sourceUrl) + "\" don't match."));
      }
      let start = src__utils.min(this.start, other.start);
      let end = src__utils.max(this.end, other.end);
      let beginSpan = dart.equals(start, this.start) ? this : other;
      let endSpan = dart.equals(end, this.end) ? this : other;
      if (dart.notNull(beginSpan.end.compareTo(endSpan.start)) < 0) {
        dart.throw(new core.ArgumentError.new("Spans " + dart.str(this) + " and " + dart.str(other) + " are disjoint."));
      }
      let text = dart.notNull(beginSpan.text) + endSpan.text[$substring](beginSpan.end.distance(endSpan.start));
      return src__span.SourceSpan.new(src__location.SourceLocation._check(start), src__location.SourceLocation._check(end), text);
    }
    message(message, opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      let buffer = new core.StringBuffer.new();
      buffer.write("line " + dart.str(dart.notNull(this.start.line) + 1) + ", column " + dart.str(dart.notNull(this.start.column) + 1));
      if (this.sourceUrl != null) buffer.write(" of " + dart.str(path$.prettyUri(this.sourceUrl)));
      buffer.write(": " + dart.str(message));
      let highlight = this.highlight({color: color});
      if (!highlight[$isEmpty]) {
        buffer.writeln();
        buffer.write(highlight);
      }
      return buffer.toString();
    }
    highlight(opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      if (!src__span_with_context.SourceSpanWithContext.is(this) && this.length === 0) return "";
      return src__highlighter.Highlighter.new(this, {color: color}).highlight();
    }
    _equals(other) {
      if (other == null) return false;
      return src__span.SourceSpan.is(other) && dart.equals(this.start, other.start) && dart.equals(this.end, other.end);
    }
    get hashCode() {
      return dart.notNull(dart.hashCode(this.start)) + 31 * dart.notNull(dart.hashCode(this.end));
    }
    toString() {
      return "<" + dart.str(this[$runtimeType]) + ": from " + dart.str(this.start) + " to " + dart.str(this.end) + " \"" + dart.str(this.text) + "\">";
    }
  };
  (src__span_mixin.SourceSpanMixin.new = function() {
    ;
  }).prototype = src__span_mixin.SourceSpanMixin.prototype;
  dart.addTypeTests(src__span_mixin.SourceSpanMixin);
  src__span_mixin.SourceSpanMixin[dart.implements] = () => [src__span.SourceSpan];
  dart.setMethodSignature(src__span_mixin.SourceSpanMixin, () => ({
    __proto__: dart.getMethods(src__span_mixin.SourceSpanMixin.__proto__),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object]),
    union: dart.fnType(src__span.SourceSpan, [src__span.SourceSpan]),
    message: dart.fnType(core.String, [core.String], {color: dart.dynamic}),
    highlight: dart.fnType(core.String, [], {color: dart.dynamic})
  }));
  dart.setGetterSignature(src__span_mixin.SourceSpanMixin, () => ({
    __proto__: dart.getGetters(src__span_mixin.SourceSpanMixin.__proto__),
    sourceUrl: core.Uri,
    length: core.int
  }));
  dart.setLibraryUri(src__span_mixin.SourceSpanMixin, "package:source_span/src/span_mixin.dart");
  dart.defineExtensionMethods(src__span_mixin.SourceSpanMixin, ['compareTo', '_equals', 'toString']);
  dart.defineExtensionAccessors(src__span_mixin.SourceSpanMixin, ['hashCode']);
  src__utils.min = function(obj1, obj2) {
    return dart.notNull(obj1[$compareTo](obj2)) > 0 ? obj2 : obj1;
  };
  src__utils.max = function(obj1, obj2) {
    return dart.notNull(obj1[$compareTo](obj2)) > 0 ? obj1 : obj2;
  };
  src__utils.countCodeUnits = function(string, codeUnit) {
    let count = 0;
    for (let codeUnitToCheck of string[$codeUnits]) {
      if (codeUnitToCheck == codeUnit) count = count + 1;
    }
    return count;
  };
  src__utils.findLineStart = function(context, text, column) {
    if (text[$isEmpty]) {
      let beginningOfLine = 0;
      while (true) {
        let index = context[$indexOf]("\n", beginningOfLine);
        if (index === -1) {
          return context.length - beginningOfLine >= dart.notNull(column) ? beginningOfLine : null;
        }
        if (index - beginningOfLine >= dart.notNull(column)) return beginningOfLine;
        beginningOfLine = index + 1;
      }
    }
    let index = context[$indexOf](text);
    while (index !== -1) {
      let lineStart = index === 0 ? 0 : context[$lastIndexOf]("\n", index - 1) + 1;
      let textColumn = index - lineStart;
      if (column === textColumn) return lineStart;
      index = context[$indexOf](text, index + 1);
    }
    return null;
  };
  const _context$ = dart.privateName(src__span_with_context, "_context");
  src__span.SourceSpanBase = class SourceSpanBase extends src__span_mixin.SourceSpanMixin {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
  };
  (src__span.SourceSpanBase.new = function(start, end, text) {
    this[start$] = start;
    this[end$] = end;
    this[text$] = text;
    if (!dart.equals(this.end.sourceUrl, this.start.sourceUrl)) {
      dart.throw(new core.ArgumentError.new("Source URLs \"" + dart.str(this.start.sourceUrl) + "\" and " + " \"" + dart.str(this.end.sourceUrl) + "\" don't match."));
    } else if (dart.notNull(this.end.offset) < dart.notNull(this.start.offset)) {
      dart.throw(new core.ArgumentError.new("End " + dart.str(this.end) + " must come after start " + dart.str(this.start) + "."));
    } else if (this.text.length !== this.start.distance(this.end)) {
      dart.throw(new core.ArgumentError.new("Text \"" + dart.str(this.text) + "\" must be " + dart.str(this.start.distance(this.end)) + " " + "characters long."));
    }
  }).prototype = src__span.SourceSpanBase.prototype;
  dart.addTypeTests(src__span.SourceSpanBase);
  const start$ = Symbol("SourceSpanBase.start");
  const end$ = Symbol("SourceSpanBase.end");
  const text$ = Symbol("SourceSpanBase.text");
  dart.setLibraryUri(src__span.SourceSpanBase, "package:source_span/src/span.dart");
  dart.setFieldSignature(src__span.SourceSpanBase, () => ({
    __proto__: dart.getFields(src__span.SourceSpanBase.__proto__),
    start: dart.finalFieldType(src__location.SourceLocation),
    end: dart.finalFieldType(src__location.SourceLocation),
    text: dart.finalFieldType(core.String)
  }));
  src__span_with_context.SourceSpanWithContext = class SourceSpanWithContext extends src__span.SourceSpanBase {
    get context() {
      return this[_context$];
    }
  };
  (src__span_with_context.SourceSpanWithContext.new = function(start, end, text, _context) {
    this[_context$] = _context;
    src__span_with_context.SourceSpanWithContext.__proto__.new.call(this, start, end, text);
    if (!this.context[$contains](text)) {
      dart.throw(new core.ArgumentError.new("The context line \"" + dart.str(this.context) + "\" must contain \"" + dart.str(text) + "\"."));
    }
    if (src__utils.findLineStart(this.context, text, start.column) == null) {
      dart.throw(new core.ArgumentError.new("The span text \"" + dart.str(text) + "\" must start at " + "column " + dart.str(dart.notNull(start.column) + 1) + " in a line within \"" + dart.str(this.context) + "\"."));
    }
  }).prototype = src__span_with_context.SourceSpanWithContext.prototype;
  dart.addTypeTests(src__span_with_context.SourceSpanWithContext);
  dart.setGetterSignature(src__span_with_context.SourceSpanWithContext, () => ({
    __proto__: dart.getGetters(src__span_with_context.SourceSpanWithContext.__proto__),
    context: core.String
  }));
  dart.setLibraryUri(src__span_with_context.SourceSpanWithContext, "package:source_span/src/span_with_context.dart");
  dart.setFieldSignature(src__span_with_context.SourceSpanWithContext, () => ({
    __proto__: dart.getFields(src__span_with_context.SourceSpanWithContext.__proto__),
    [_context$]: dart.finalFieldType(core.String)
  }));
  src__span.SourceSpan = class SourceSpan extends core.Object {
    static new(start, end, text) {
      return new src__span.SourceSpanBase.new(start, end, text);
    }
  };
  (src__span.SourceSpan[dart.mixinNew] = function() {
  }).prototype = src__span.SourceSpan.prototype;
  dart.addTypeTests(src__span.SourceSpan);
  src__span.SourceSpan[dart.implements] = () => [core.Comparable$(src__span.SourceSpan)];
  dart.setLibraryUri(src__span.SourceSpan, "package:source_span/src/span.dart");
  src__location.SourceLocation = class SourceLocation extends core.Object {
    get sourceUrl() {
      return this[sourceUrl$];
    }
    set sourceUrl(value) {
      super.sourceUrl = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get line() {
      return this[line$];
    }
    set line(value) {
      super.line = value;
    }
    get column() {
      return this[column$];
    }
    set column(value) {
      super.column = value;
    }
    get toolString() {
      let source = this.sourceUrl == null ? "unknown source" : this.sourceUrl;
      return dart.str(source) + ":" + dart.str(dart.notNull(this.line) + 1) + ":" + dart.str(dart.notNull(this.column) + 1);
    }
    distance(other) {
      if (!dart.equals(this.sourceUrl, other.sourceUrl)) {
        dart.throw(new core.ArgumentError.new("Source URLs \"" + dart.str(this.sourceUrl) + "\" and " + "\"" + dart.str(other.sourceUrl) + "\" don't match."));
      }
      return (dart.notNull(this.offset) - dart.notNull(other.offset))[$abs]();
    }
    pointSpan() {
      return src__span.SourceSpan.new(this, this, "");
    }
    compareTo(other) {
      src__location.SourceLocation._check(other);
      if (!dart.equals(this.sourceUrl, other.sourceUrl)) {
        dart.throw(new core.ArgumentError.new("Source URLs \"" + dart.str(this.sourceUrl) + "\" and " + "\"" + dart.str(other.sourceUrl) + "\" don't match."));
      }
      return dart.notNull(this.offset) - dart.notNull(other.offset);
    }
    _equals(other) {
      if (other == null) return false;
      return src__location.SourceLocation.is(other) && dart.equals(this.sourceUrl, other.sourceUrl) && this.offset == other.offset;
    }
    get hashCode() {
      return dart.notNull(dart.hashCode(this.sourceUrl)) + dart.notNull(this.offset);
    }
    toString() {
      return "<" + dart.str(this[$runtimeType]) + ": " + dart.str(this.offset) + " " + dart.str(this.toolString) + ">";
    }
  };
  (src__location.SourceLocation.new = function(offset, opts) {
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let line = opts && 'line' in opts ? opts.line : null;
    let column = opts && 'column' in opts ? opts.column : null;
    this[sourceUrl$] = core.Uri._check(typeof sourceUrl == 'string' ? core.Uri.parse(sourceUrl) : sourceUrl);
    this[offset$] = offset;
    this[line$] = line == null ? 0 : line;
    this[column$] = column == null ? offset : column;
    if (dart.notNull(offset) < 0) {
      dart.throw(new core.RangeError.new("Offset may not be negative, was " + dart.str(offset) + "."));
    } else if (line != null && dart.notNull(line) < 0) {
      dart.throw(new core.RangeError.new("Line may not be negative, was " + dart.str(line) + "."));
    } else if (column != null && dart.notNull(column) < 0) {
      dart.throw(new core.RangeError.new("Column may not be negative, was " + dart.str(column) + "."));
    }
  }).prototype = src__location.SourceLocation.prototype;
  dart.addTypeTests(src__location.SourceLocation);
  const sourceUrl$ = Symbol("SourceLocation.sourceUrl");
  const offset$ = Symbol("SourceLocation.offset");
  const line$ = Symbol("SourceLocation.line");
  const column$ = Symbol("SourceLocation.column");
  src__location.SourceLocation[dart.implements] = () => [core.Comparable$(src__location.SourceLocation)];
  dart.setMethodSignature(src__location.SourceLocation, () => ({
    __proto__: dart.getMethods(src__location.SourceLocation.__proto__),
    distance: dart.fnType(core.int, [src__location.SourceLocation]),
    pointSpan: dart.fnType(src__span.SourceSpan, []),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object])
  }));
  dart.setGetterSignature(src__location.SourceLocation, () => ({
    __proto__: dart.getGetters(src__location.SourceLocation.__proto__),
    toolString: core.String
  }));
  dart.setLibraryUri(src__location.SourceLocation, "package:source_span/src/location.dart");
  dart.setFieldSignature(src__location.SourceLocation, () => ({
    __proto__: dart.getFields(src__location.SourceLocation.__proto__),
    sourceUrl: dart.finalFieldType(core.Uri),
    offset: dart.finalFieldType(core.int),
    line: dart.finalFieldType(core.int),
    column: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__location.SourceLocation, ['compareTo', '_equals', 'toString']);
  dart.defineExtensionAccessors(src__location.SourceLocation, ['hashCode']);
  src__location.SourceLocationBase = class SourceLocationBase extends src__location.SourceLocation {};
  (src__location.SourceLocationBase.new = function(offset, opts) {
    let sourceUrl = opts && 'sourceUrl' in opts ? opts.sourceUrl : null;
    let line = opts && 'line' in opts ? opts.line : null;
    let column = opts && 'column' in opts ? opts.column : null;
    src__location.SourceLocationBase.__proto__.new.call(this, offset, {sourceUrl: sourceUrl, line: line, column: column});
    ;
  }).prototype = src__location.SourceLocationBase.prototype;
  dart.addTypeTests(src__location.SourceLocationBase);
  dart.setLibraryUri(src__location.SourceLocationBase, "package:source_span/src/location.dart");
  const _buffer = dart.privateName(src__highlighter, "_buffer");
  const _span$ = dart.privateName(src__highlighter, "_span");
  const _color$ = dart.privateName(src__highlighter, "_color");
  const _multiline = dart.privateName(src__highlighter, "_multiline");
  const _paddingBeforeSidebar = dart.privateName(src__highlighter, "_paddingBeforeSidebar");
  const _paddingAfterSidebar = dart.privateName(src__highlighter, "_paddingAfterSidebar");
  const _writeSidebar = dart.privateName(src__highlighter, "_writeSidebar");
  const _writeText = dart.privateName(src__highlighter, "_writeText");
  const _writeFirstLine = dart.privateName(src__highlighter, "_writeFirstLine");
  const _writeIntermediateLines = dart.privateName(src__highlighter, "_writeIntermediateLines");
  const _writeLastLine = dart.privateName(src__highlighter, "_writeLastLine");
  const _writeTrailingLines = dart.privateName(src__highlighter, "_writeTrailingLines");
  const _isOnlyWhitespace = dart.privateName(src__highlighter, "_isOnlyWhitespace");
  const _colorize = dart.privateName(src__highlighter, "_colorize");
  const _countTabs = dart.privateName(src__highlighter, "_countTabs");
  src__highlighter.Highlighter = class Highlighter extends core.Object {
    get [_paddingAfterSidebar]() {
      return dart.test(this[_multiline]) ? 3 : 1;
    }
    static new(span, opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      if (dart.equals(color, true)) color = src__colors.RED;
      if (dart.equals(color, false)) color = null;
      let newSpan = src__highlighter.Highlighter._normalizeContext(span);
      newSpan = src__highlighter.Highlighter._normalizeNewlines(newSpan);
      newSpan = src__highlighter.Highlighter._normalizeTrailingNewline(newSpan);
      newSpan = src__highlighter.Highlighter._normalizeEndOfLine(newSpan);
      return new src__highlighter.Highlighter.__(newSpan, core.String._check(color));
    }
    static _normalizeContext(span) {
      return src__span_with_context.SourceSpanWithContext.is(span) && src__utils.findLineStart(span.context, span.text, span.start.column) != null ? span : new src__span_with_context.SourceSpanWithContext.new(new src__location.SourceLocation.new(span.start.offset, {sourceUrl: span.sourceUrl, line: 0, column: 0}), new src__location.SourceLocation.new(span.end.offset, {sourceUrl: span.sourceUrl, line: src__utils.countCodeUnits(span.text, ascii$.$lf), column: src__highlighter.Highlighter._lastLineLength(span.text)}), span.text, span.text);
    }
    static _normalizeNewlines(span) {
      let text = span.text;
      if (!text[$contains]("\r\n")) return span;
      let endOffset = span.end.offset;
      for (let i = 0; i < text.length - 1; i = i + 1) {
        if (text[$codeUnitAt](i) === ascii$.$cr && text[$codeUnitAt](i + 1) === ascii$.$lf) {
          endOffset = dart.notNull(endOffset) - 1;
        }
      }
      return new src__span_with_context.SourceSpanWithContext.new(span.start, new src__location.SourceLocation.new(endOffset, {sourceUrl: span.sourceUrl, line: span.end.line, column: span.end.column}), text[$replaceAll]("\r\n", "\n"), span.context[$replaceAll]("\r\n", "\n"));
    }
    static _normalizeTrailingNewline(span) {
      if (!span.context[$endsWith]("\n")) return span;
      if (span.text[$endsWith]("\n\n")) return span;
      let context = span.context[$substring](0, span.context.length - 1);
      let text = span.text;
      let start = span.start;
      let end = span.end;
      if (span.text[$endsWith]("\n") && dart.test(src__highlighter.Highlighter._isTextAtEndOfContext(span))) {
        text = span.text[$substring](0, span.text.length - 1);
        end = new src__location.SourceLocation.new(dart.notNull(span.end.offset) - 1, {sourceUrl: span.sourceUrl, line: dart.notNull(span.end.line) - 1, column: src__highlighter.Highlighter._lastLineLength(text)});
        start = span.start.offset == span.end.offset ? end : span.start;
      }
      return new src__span_with_context.SourceSpanWithContext.new(start, end, text, context);
    }
    static _normalizeEndOfLine(span) {
      if (span.end.column !== 0) return span;
      if (span.end.line == span.start.line) return span;
      let text = span.text[$substring](0, span.text.length - 1);
      return new src__span_with_context.SourceSpanWithContext.new(span.start, new src__location.SourceLocation.new(dart.notNull(span.end.offset) - 1, {sourceUrl: span.sourceUrl, line: dart.notNull(span.end.line) - 1, column: src__highlighter.Highlighter._lastLineLength(text)}), text, span.context);
    }
    static _lastLineLength(text) {
      if (text[$isEmpty]) return 0;
      if (text[$codeUnitAt](text.length - 1) === ascii$.$lf) {
        return text.length === 1 ? 0 : text.length - text[$lastIndexOf]("\n", text.length - 2) - 1;
      } else {
        return text.length - text[$lastIndexOf]("\n") - 1;
      }
    }
    static _isTextAtEndOfContext(span) {
      return dart.notNull(src__utils.findLineStart(span.context, span.text, span.start.column)) + dart.notNull(span.start.column) + dart.notNull(span.length) === span.context.length;
    }
    highlight() {
      this[_writeSidebar]({end: src__generated__top_level.downEnd});
      this[_buffer].writeln();
      let lineStart = src__utils.findLineStart(this[_span$].context, this[_span$].text, this[_span$].start.column);
      if (!(lineStart != null)) dart.assertFailed(null, "org-dartlang-app:///packages/source_span/src/highlighter.dart", 197, 12, "lineStart != null");
      let context = this[_span$].context;
      if (dart.notNull(lineStart) > 0) {
        let lines = context[$substring](0, dart.notNull(lineStart) - 1)[$split]("\n");
        let lineNumber = dart.notNull(this[_span$].start.line) - dart.notNull(lines[$length]);
        for (let line of lines) {
          this[_writeSidebar]({line: lineNumber});
          this[_buffer].write(" "[$times](this[_paddingAfterSidebar]));
          this[_writeText](line);
          this[_buffer].writeln();
          lineNumber = lineNumber + 1;
        }
        context = context[$substring](lineStart);
      }
      let lines = context[$split]("\n");
      let lastLineIndex = dart.notNull(this[_span$].end.line) - dart.notNull(this[_span$].start.line);
      if (lines[$last][$isEmpty] && dart.notNull(lines[$length]) > lastLineIndex + 1) {
        lines[$removeLast]();
      }
      this[_writeFirstLine](lines[$first]);
      if (dart.test(this[_multiline])) {
        this[_writeIntermediateLines](lines[$skip](1)[$take](lastLineIndex - 1));
        this[_writeLastLine](lines[$_get](lastLineIndex));
      }
      this[_writeTrailingLines](lines[$skip](lastLineIndex + 1));
      this[_writeSidebar]({end: src__generated__top_level.upEnd});
      return dart.toString(this[_buffer]);
    }
    [_writeFirstLine](line) {
      this[_writeSidebar]({line: this[_span$].start.line});
      let startColumn = math.min(core.int, this[_span$].start.column, line.length);
      let endColumn = math.min(core.int, startColumn + dart.notNull(this[_span$].end.offset) - dart.notNull(this[_span$].start.offset), line.length);
      let textBefore = line[$substring](0, startColumn);
      if (dart.test(this[_multiline]) && dart.test(this[_isOnlyWhitespace](textBefore))) {
        this[_buffer].write(" ");
        this[_colorize](dart.fn(() => {
          this[_buffer].write(term_glyph.glyphOrAscii("┌", "/"));
          this[_buffer].write(" ");
          this[_writeText](line);
        }, VoidToNull()));
        this[_buffer].writeln();
        return;
      }
      this[_buffer].write(" "[$times](this[_paddingAfterSidebar]));
      this[_writeText](textBefore);
      let textInside = line[$substring](startColumn, endColumn);
      this[_colorize](dart.fn(() => this[_writeText](textInside), VoidTovoid()));
      this[_writeText](line[$substring](endColumn));
      this[_buffer].writeln();
      let tabsBefore = this[_countTabs](textBefore);
      let tabsInside = this[_countTabs](textInside);
      startColumn = startColumn + dart.notNull(tabsBefore) * (dart.notNull(src__highlighter.Highlighter._spacesPerTab) - 1);
      endColumn = endColumn + (dart.notNull(tabsBefore) + dart.notNull(tabsInside)) * (dart.notNull(src__highlighter.Highlighter._spacesPerTab) - 1);
      this[_writeSidebar]();
      if (dart.test(this[_multiline])) {
        this[_buffer].write(" ");
        this[_colorize](dart.fn(() => {
          this[_buffer].write(src__generated__top_level.topLeftCorner);
          this[_buffer].write(src__generated__top_level.horizontalLine[$times](startColumn + 1));
          this[_buffer].write("^");
        }, VoidToNull()));
      } else {
        this[_buffer].write(" "[$times](startColumn + 1));
        this[_colorize](dart.fn(() => this[_buffer].write("^"[$times](math.max(core.int, endColumn - startColumn, 1))), VoidTovoid()));
      }
      this[_buffer].writeln();
    }
    [_writeIntermediateLines](lines) {
      if (!dart.test(this[_multiline])) dart.assertFailed(null, "org-dartlang-app:///packages/source_span/src/highlighter.dart", 294, 12, "t(_multili");
      let lineNumber = dart.notNull(this[_span$].start.line) + 1;
      for (let line of lines) {
        this[_writeSidebar]({line: lineNumber});
        this[_buffer].write(" ");
        this[_colorize](dart.fn(() => {
          this[_buffer].write(src__generated__top_level.verticalLine);
          this[_buffer].write(" ");
          this[_writeText](line);
        }, VoidToNull()));
        this[_buffer].writeln();
        lineNumber = lineNumber + 1;
      }
    }
    [_writeLastLine](line) {
      if (!dart.test(this[_multiline])) dart.assertFailed(null, "org-dartlang-app:///packages/source_span/src/highlighter.dart", 315, 12, "t(_multili");
      this[_writeSidebar]({line: this[_span$].end.line});
      let endColumn = math.min(core.int, this[_span$].end.column, line.length);
      if (dart.test(this[_multiline]) && endColumn === line.length) {
        this[_buffer].write(" ");
        this[_colorize](dart.fn(() => {
          this[_buffer].write(term_glyph.glyphOrAscii("└", "\\"));
          this[_buffer].write(" ");
          this[_writeText](line);
        }, VoidToNull()));
        this[_buffer].writeln();
        return;
      }
      this[_buffer].write(" ");
      let textInside = line[$substring](0, endColumn);
      this[_colorize](dart.fn(() => {
        this[_buffer].write(src__generated__top_level.verticalLine);
        this[_buffer].write(" ");
        this[_writeText](textInside);
      }, VoidToNull()));
      this[_writeText](line[$substring](endColumn));
      this[_buffer].writeln();
      let tabsInside = this[_countTabs](textInside);
      endColumn = endColumn + dart.notNull(tabsInside) * (dart.notNull(src__highlighter.Highlighter._spacesPerTab) - 1);
      this[_writeSidebar]();
      this[_buffer].write(" ");
      this[_colorize](dart.fn(() => {
        this[_buffer].write(src__generated__top_level.bottomLeftCorner);
        this[_buffer].write(src__generated__top_level.horizontalLine[$times](endColumn));
        this[_buffer].write("^");
      }, VoidToNull()));
      this[_buffer].writeln();
    }
    [_writeTrailingLines](lines) {
      let lineNumber = dart.notNull(this[_span$].end.line) + 1;
      for (let line of lines) {
        this[_writeSidebar]({line: lineNumber});
        this[_buffer].write(" "[$times](this[_paddingAfterSidebar]));
        this[_writeText](line);
        this[_buffer].writeln();
        lineNumber = lineNumber + 1;
      }
    }
    [_writeText](text) {
      for (let char of text[$codeUnits]) {
        if (char == ascii$.$tab) {
          this[_buffer].write(" "[$times](src__highlighter.Highlighter._spacesPerTab));
        } else {
          this[_buffer].writeCharCode(char);
        }
      }
    }
    [_writeSidebar](opts) {
      let line = opts && 'line' in opts ? opts.line : null;
      let end = opts && 'end' in opts ? opts.end : null;
      this[_colorize](dart.fn(() => {
        let t0;
        if (line != null) {
          this[_buffer].write((dart.notNull(line) + 1)[$toString]()[$padRight](this[_paddingBeforeSidebar]));
        } else {
          this[_buffer].write(" "[$times](this[_paddingBeforeSidebar]));
        }
        this[_buffer].write((t0 = end, t0 == null ? src__generated__top_level.verticalLine : t0));
      }, VoidToNull()), {color: src__colors.BLUE});
    }
    [_countTabs](text) {
      let count = 0;
      for (let char of text[$codeUnits]) {
        if (char == ascii$.$tab) count = count + 1;
      }
      return count;
    }
    [_isOnlyWhitespace](text) {
      for (let char of text[$codeUnits]) {
        if (char != ascii$.$space && char != ascii$.$tab) return false;
      }
      return true;
    }
    [_colorize](callback, opts) {
      let t0;
      let color = opts && 'color' in opts ? opts.color : null;
      if (this[_color$] != null) this[_buffer].write((t0 = color, t0 == null ? this[_color$] : t0));
      callback();
      if (this[_color$] != null) this[_buffer].write(src__colors.NONE);
    }
  };
  (src__highlighter.Highlighter.__ = function(_span, _color) {
    this[_buffer] = new core.StringBuffer.new();
    this[_span$] = _span;
    this[_color$] = _color;
    this[_multiline] = _span.start.line != _span.end.line;
    this[_paddingBeforeSidebar] = dart.toString(_span.end.line).length + 1;
    ;
  }).prototype = src__highlighter.Highlighter.prototype;
  dart.addTypeTests(src__highlighter.Highlighter);
  dart.setMethodSignature(src__highlighter.Highlighter, () => ({
    __proto__: dart.getMethods(src__highlighter.Highlighter.__proto__),
    highlight: dart.fnType(core.String, []),
    [_writeFirstLine]: dart.fnType(dart.void, [core.String]),
    [_writeIntermediateLines]: dart.fnType(dart.void, [core.Iterable$(core.String)]),
    [_writeLastLine]: dart.fnType(dart.void, [core.String]),
    [_writeTrailingLines]: dart.fnType(dart.void, [core.Iterable$(core.String)]),
    [_writeText]: dart.fnType(dart.void, [core.String]),
    [_writeSidebar]: dart.fnType(dart.void, [], {end: core.String, line: core.int}),
    [_countTabs]: dart.fnType(core.int, [core.String]),
    [_isOnlyWhitespace]: dart.fnType(core.bool, [core.String]),
    [_colorize]: dart.fnType(dart.void, [dart.fnType(dart.void, [])], {color: core.String})
  }));
  dart.setGetterSignature(src__highlighter.Highlighter, () => ({
    __proto__: dart.getGetters(src__highlighter.Highlighter.__proto__),
    [_paddingAfterSidebar]: core.int
  }));
  dart.setLibraryUri(src__highlighter.Highlighter, "package:source_span/src/highlighter.dart");
  dart.setFieldSignature(src__highlighter.Highlighter, () => ({
    __proto__: dart.getFields(src__highlighter.Highlighter.__proto__),
    [_span$]: dart.finalFieldType(src__span_with_context.SourceSpanWithContext),
    [_color$]: dart.finalFieldType(core.String),
    [_multiline]: dart.finalFieldType(core.bool),
    [_paddingBeforeSidebar]: dart.finalFieldType(core.int),
    [_buffer]: dart.finalFieldType(core.StringBuffer)
  }));
  dart.defineLazy(src__highlighter.Highlighter, {
    /*src__highlighter.Highlighter._spacesPerTab*/get _spacesPerTab() {
      return 4;
    }
  });
  dart.defineLazy(src__colors, {
    /*src__colors.RED*/get RED() {
      return "[31m";
    },
    /*src__colors.YELLOW*/get YELLOW() {
      return "[33m";
    },
    /*src__colors.BLUE*/get BLUE() {
      return "[34m";
    },
    /*src__colors.NONE*/get NONE() {
      return "[0m";
    }
  });
  const _message$ = dart.privateName(src__span_exception, "_message");
  const _span$0 = dart.privateName(src__span_exception, "_span");
  src__span_exception.SourceSpanException = class SourceSpanException extends core.Object {
    get message() {
      return this[_message$];
    }
    get span() {
      return this[_span$0];
    }
    toString(opts) {
      let color = opts && 'color' in opts ? opts.color : null;
      if (this.span == null) return this.message;
      return "Error on " + dart.notNull(this.span.message(this.message, {color: color}));
    }
  };
  (src__span_exception.SourceSpanException.new = function(_message, _span) {
    this[_message$] = _message;
    this[_span$0] = _span;
    ;
  }).prototype = src__span_exception.SourceSpanException.prototype;
  dart.addTypeTests(src__span_exception.SourceSpanException);
  src__span_exception.SourceSpanException[dart.implements] = () => [core.Exception];
  dart.setMethodSignature(src__span_exception.SourceSpanException, () => ({
    __proto__: dart.getMethods(src__span_exception.SourceSpanException.__proto__),
    toString: dart.fnType(core.String, [], {color: dart.dynamic}),
    [$toString]: dart.fnType(core.String, [], {color: dart.dynamic})
  }));
  dart.setGetterSignature(src__span_exception.SourceSpanException, () => ({
    __proto__: dart.getGetters(src__span_exception.SourceSpanException.__proto__),
    message: core.String,
    span: src__span.SourceSpan
  }));
  dart.setLibraryUri(src__span_exception.SourceSpanException, "package:source_span/src/span_exception.dart");
  dart.setFieldSignature(src__span_exception.SourceSpanException, () => ({
    __proto__: dart.getFields(src__span_exception.SourceSpanException.__proto__),
    [_message$]: dart.finalFieldType(core.String),
    [_span$0]: dart.finalFieldType(src__span.SourceSpan)
  }));
  dart.defineExtensionMethods(src__span_exception.SourceSpanException, ['toString']);
  const _source$ = dart.privateName(src__span_exception, "_source");
  src__span_exception.SourceSpanFormatException = class SourceSpanFormatException extends src__span_exception.SourceSpanException {
    get source() {
      return this[_source$];
    }
    get offset() {
      return this.span == null ? null : this.span.start.offset;
    }
  };
  (src__span_exception.SourceSpanFormatException.new = function(message, span, _source) {
    if (_source === void 0) _source = null;
    this[_source$] = _source;
    src__span_exception.SourceSpanFormatException.__proto__.new.call(this, message, span);
    ;
  }).prototype = src__span_exception.SourceSpanFormatException.prototype;
  dart.addTypeTests(src__span_exception.SourceSpanFormatException);
  src__span_exception.SourceSpanFormatException[dart.implements] = () => [core.FormatException];
  dart.setGetterSignature(src__span_exception.SourceSpanFormatException, () => ({
    __proto__: dart.getGetters(src__span_exception.SourceSpanFormatException.__proto__),
    source: dart.dynamic,
    offset: core.int
  }));
  dart.setLibraryUri(src__span_exception.SourceSpanFormatException, "package:source_span/src/span_exception.dart");
  dart.setFieldSignature(src__span_exception.SourceSpanFormatException, () => ({
    __proto__: dart.getFields(src__span_exception.SourceSpanFormatException.__proto__),
    [_source$]: dart.finalFieldType(dart.dynamic)
  }));
  src__location_mixin.SourceLocationMixin = class SourceLocationMixin extends core.Object {
    get toolString() {
      let source = this.sourceUrl == null ? "unknown source" : this.sourceUrl;
      return dart.str(source) + ":" + dart.str(dart.notNull(this.line) + 1) + ":" + dart.str(dart.notNull(this.column) + 1);
    }
    distance(other) {
      if (!dart.equals(this.sourceUrl, other.sourceUrl)) {
        dart.throw(new core.ArgumentError.new("Source URLs \"" + dart.str(this.sourceUrl) + "\" and " + "\"" + dart.str(other.sourceUrl) + "\" don't match."));
      }
      return (dart.notNull(this.offset) - dart.notNull(other.offset))[$abs]();
    }
    pointSpan() {
      return src__span.SourceSpan.new(this, this, "");
    }
    compareTo(other) {
      src__location.SourceLocation._check(other);
      if (!dart.equals(this.sourceUrl, other.sourceUrl)) {
        dart.throw(new core.ArgumentError.new("Source URLs \"" + dart.str(this.sourceUrl) + "\" and " + "\"" + dart.str(other.sourceUrl) + "\" don't match."));
      }
      return dart.notNull(this.offset) - dart.notNull(other.offset);
    }
    _equals(other) {
      if (other == null) return false;
      return src__location.SourceLocation.is(other) && dart.equals(this.sourceUrl, other.sourceUrl) && this.offset == other.offset;
    }
    get hashCode() {
      return dart.notNull(dart.hashCode(this.sourceUrl)) + dart.notNull(this.offset);
    }
    toString() {
      return "<" + dart.str(this[$runtimeType]) + ": " + dart.str(this.offset) + " " + dart.str(this.toolString) + ">";
    }
  };
  (src__location_mixin.SourceLocationMixin.new = function() {
    ;
  }).prototype = src__location_mixin.SourceLocationMixin.prototype;
  dart.addTypeTests(src__location_mixin.SourceLocationMixin);
  src__location_mixin.SourceLocationMixin[dart.implements] = () => [src__location.SourceLocation];
  dart.setMethodSignature(src__location_mixin.SourceLocationMixin, () => ({
    __proto__: dart.getMethods(src__location_mixin.SourceLocationMixin.__proto__),
    distance: dart.fnType(core.int, [src__location.SourceLocation]),
    pointSpan: dart.fnType(src__span.SourceSpan, []),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object])
  }));
  dart.setGetterSignature(src__location_mixin.SourceLocationMixin, () => ({
    __proto__: dart.getGetters(src__location_mixin.SourceLocationMixin.__proto__),
    toolString: core.String
  }));
  dart.setLibraryUri(src__location_mixin.SourceLocationMixin, "package:source_span/src/location_mixin.dart");
  dart.defineExtensionMethods(src__location_mixin.SourceLocationMixin, ['compareTo', '_equals', 'toString']);
  dart.defineExtensionAccessors(src__location_mixin.SourceLocationMixin, ['hashCode']);
  const _lineStarts = dart.privateName(src__file, "_lineStarts");
  const _cachedLine = dart.privateName(src__file, "_cachedLine");
  const _decodedChars = dart.privateName(src__file, "_decodedChars");
  const _isNearCachedLine = dart.privateName(src__file, "_isNearCachedLine");
  const _binarySearch = dart.privateName(src__file, "_binarySearch");
  src__file.SourceFile = class SourceFile extends core.Object {
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get length() {
      return this[_decodedChars][$length];
    }
    get lines() {
      return this[_lineStarts][$length];
    }
    span(start, end) {
      if (end === void 0) end = null;
      if (end == null) end = this.length;
      return new src__file._FileSpan.new(this, start, end);
    }
    location(offset) {
      return new src__file.FileLocation.__(this, offset);
    }
    getLine(offset) {
      if (dart.notNull(offset) < 0) {
        dart.throw(new core.RangeError.new("Offset may not be negative, was " + dart.str(offset) + "."));
      } else if (dart.notNull(offset) > dart.notNull(this.length)) {
        dart.throw(new core.RangeError.new("Offset " + dart.str(offset) + " must not be greater than the number " + "of characters in the file, " + dart.str(this.length) + "."));
      }
      if (dart.notNull(offset) < dart.notNull(this[_lineStarts][$first])) return -1;
      if (dart.notNull(offset) >= dart.notNull(this[_lineStarts][$last])) return dart.notNull(this[_lineStarts][$length]) - 1;
      if (dart.test(this[_isNearCachedLine](offset))) return this[_cachedLine];
      this[_cachedLine] = dart.notNull(this[_binarySearch](offset)) - 1;
      return this[_cachedLine];
    }
    [_isNearCachedLine](offset) {
      if (this[_cachedLine] == null) return false;
      if (dart.notNull(offset) < dart.notNull(this[_lineStarts][$_get](this[_cachedLine]))) return false;
      if (dart.notNull(this[_cachedLine]) >= dart.notNull(this[_lineStarts][$length]) - 1 || dart.notNull(offset) < dart.notNull(this[_lineStarts][$_get](dart.notNull(this[_cachedLine]) + 1))) {
        return true;
      }
      if (dart.notNull(this[_cachedLine]) >= dart.notNull(this[_lineStarts][$length]) - 2 || dart.notNull(offset) < dart.notNull(this[_lineStarts][$_get](dart.notNull(this[_cachedLine]) + 2))) {
        this[_cachedLine] = dart.notNull(this[_cachedLine]) + 1;
        return true;
      }
      return false;
    }
    [_binarySearch](offset) {
      let min = 0;
      let max = dart.notNull(this[_lineStarts][$length]) - 1;
      while (min < max) {
        let half = min + ((max - min) / 2)[$truncate]();
        if (dart.notNull(this[_lineStarts][$_get](half)) > dart.notNull(offset)) {
          max = half;
        } else {
          min = half + 1;
        }
      }
      return max;
    }
    getColumn(offset, opts) {
      let line = opts && 'line' in opts ? opts.line : null;
      if (dart.notNull(offset) < 0) {
        dart.throw(new core.RangeError.new("Offset may not be negative, was " + dart.str(offset) + "."));
      } else if (dart.notNull(offset) > dart.notNull(this.length)) {
        dart.throw(new core.RangeError.new("Offset " + dart.str(offset) + " must be not be greater than the " + "number of characters in the file, " + dart.str(this.length) + "."));
      }
      if (line == null) {
        line = this.getLine(offset);
      } else if (dart.notNull(line) < 0) {
        dart.throw(new core.RangeError.new("Line may not be negative, was " + dart.str(line) + "."));
      } else if (dart.notNull(line) >= dart.notNull(this.lines)) {
        dart.throw(new core.RangeError.new("Line " + dart.str(line) + " must be less than the number of " + "lines in the file, " + dart.str(this.lines) + "."));
      }
      let lineStart = this[_lineStarts][$_get](line);
      if (dart.notNull(lineStart) > dart.notNull(offset)) {
        dart.throw(new core.RangeError.new("Line " + dart.str(line) + " comes after offset " + dart.str(offset) + "."));
      }
      return dart.notNull(offset) - dart.notNull(lineStart);
    }
    getOffset(line, column) {
      if (column === void 0) column = null;
      if (column == null) column = 0;
      if (dart.notNull(line) < 0) {
        dart.throw(new core.RangeError.new("Line may not be negative, was " + dart.str(line) + "."));
      } else if (dart.notNull(line) >= dart.notNull(this.lines)) {
        dart.throw(new core.RangeError.new("Line " + dart.str(line) + " must be less than the number of " + "lines in the file, " + dart.str(this.lines) + "."));
      } else if (dart.notNull(column) < 0) {
        dart.throw(new core.RangeError.new("Column may not be negative, was " + dart.str(column) + "."));
      }
      let result = dart.notNull(this[_lineStarts][$_get](line)) + dart.notNull(column);
      if (result > dart.notNull(this.length) || dart.notNull(line) + 1 < dart.notNull(this.lines) && result >= dart.notNull(this[_lineStarts][$_get](dart.notNull(line) + 1))) {
        dart.throw(new core.RangeError.new("Line " + dart.str(line) + " doesn't have " + dart.str(column) + " columns."));
      }
      return result;
    }
    getText(start, end) {
      if (end === void 0) end = null;
      return core.String.fromCharCodes(this[_decodedChars][$sublist](start, end));
    }
  };
  (src__file.SourceFile.new = function(text, opts) {
    let url = opts && 'url' in opts ? opts.url : null;
    src__file.SourceFile.decoded.call(this, text[$runes], {url: url});
  }).prototype = src__file.SourceFile.prototype;
  (src__file.SourceFile.fromString = function(text, opts) {
    let url = opts && 'url' in opts ? opts.url : null;
    src__file.SourceFile.decoded.call(this, text[$codeUnits], {url: url});
  }).prototype = src__file.SourceFile.prototype;
  (src__file.SourceFile.decoded = function(decodedChars, opts) {
    let url = opts && 'url' in opts ? opts.url : null;
    this[_lineStarts] = JSArrayOfint().of([0]);
    this[_cachedLine] = null;
    this[url$] = core.Uri._check(typeof url == 'string' ? core.Uri.parse(url) : url);
    this[_decodedChars] = _native_typed_data.NativeUint32List.fromList(decodedChars[$toList]());
    for (let i = 0; i < dart.notNull(this[_decodedChars][$length]); i = i + 1) {
      let c = this[_decodedChars][$_get](i);
      if (c == src__file._CR) {
        let j = i + 1;
        if (j >= dart.notNull(this[_decodedChars][$length]) || this[_decodedChars][$_get](j) != src__file._LF) c = src__file._LF;
      }
      if (c == src__file._LF) this[_lineStarts][$add](i + 1);
    }
  }).prototype = src__file.SourceFile.prototype;
  dart.addTypeTests(src__file.SourceFile);
  const url$ = Symbol("SourceFile.url");
  dart.setMethodSignature(src__file.SourceFile, () => ({
    __proto__: dart.getMethods(src__file.SourceFile.__proto__),
    span: dart.fnType(src__file.FileSpan, [core.int], [core.int]),
    location: dart.fnType(src__file.FileLocation, [core.int]),
    getLine: dart.fnType(core.int, [core.int]),
    [_isNearCachedLine]: dart.fnType(core.bool, [core.int]),
    [_binarySearch]: dart.fnType(core.int, [core.int]),
    getColumn: dart.fnType(core.int, [core.int], {line: core.int}),
    getOffset: dart.fnType(core.int, [core.int], [core.int]),
    getText: dart.fnType(core.String, [core.int], [core.int])
  }));
  dart.setGetterSignature(src__file.SourceFile, () => ({
    __proto__: dart.getGetters(src__file.SourceFile.__proto__),
    length: core.int,
    lines: core.int
  }));
  dart.setLibraryUri(src__file.SourceFile, "package:source_span/src/file.dart");
  dart.setFieldSignature(src__file.SourceFile, () => ({
    __proto__: dart.getFields(src__file.SourceFile.__proto__),
    url: dart.finalFieldType(core.Uri),
    [_lineStarts]: dart.finalFieldType(core.List$(core.int)),
    [_decodedChars]: dart.finalFieldType(typed_data.Uint32List),
    [_cachedLine]: dart.fieldType(core.int)
  }));
  src__file.FileLocation = class FileLocation extends src__location_mixin.SourceLocationMixin {
    get file() {
      return this[file$];
    }
    set file(value) {
      super.file = value;
    }
    get offset() {
      return this[offset$0];
    }
    set offset(value) {
      super.offset = value;
    }
    get sourceUrl() {
      return this.file.url;
    }
    get line() {
      return this.file.getLine(this.offset);
    }
    get column() {
      return this.file.getColumn(this.offset);
    }
    pointSpan() {
      return new src__file._FileSpan.new(this.file, this.offset, this.offset);
    }
  };
  (src__file.FileLocation.__ = function(file, offset) {
    this[file$] = file;
    this[offset$0] = offset;
    if (dart.notNull(this.offset) < 0) {
      dart.throw(new core.RangeError.new("Offset may not be negative, was " + dart.str(this.offset) + "."));
    } else if (dart.notNull(this.offset) > dart.notNull(this.file.length)) {
      dart.throw(new core.RangeError.new("Offset " + dart.str(this.offset) + " must not be greater than the number " + "of characters in the file, " + dart.str(this.file.length) + "."));
    }
  }).prototype = src__file.FileLocation.prototype;
  dart.addTypeTests(src__file.FileLocation);
  const file$ = Symbol("FileLocation.file");
  const offset$0 = Symbol("FileLocation.offset");
  src__file.FileLocation[dart.implements] = () => [src__location.SourceLocation];
  dart.setMethodSignature(src__file.FileLocation, () => ({
    __proto__: dart.getMethods(src__file.FileLocation.__proto__),
    pointSpan: dart.fnType(src__file.FileSpan, [])
  }));
  dart.setGetterSignature(src__file.FileLocation, () => ({
    __proto__: dart.getGetters(src__file.FileLocation.__proto__),
    sourceUrl: core.Uri,
    line: core.int,
    column: core.int
  }));
  dart.setLibraryUri(src__file.FileLocation, "package:source_span/src/file.dart");
  dart.setFieldSignature(src__file.FileLocation, () => ({
    __proto__: dart.getFields(src__file.FileLocation.__proto__),
    file: dart.finalFieldType(src__file.SourceFile),
    offset: dart.finalFieldType(core.int)
  }));
  src__file.FileSpan = class FileSpan extends core.Object {};
  (src__file.FileSpan.new = function() {
    ;
  }).prototype = src__file.FileSpan.prototype;
  dart.addTypeTests(src__file.FileSpan);
  src__file.FileSpan[dart.implements] = () => [src__span_with_context.SourceSpanWithContext];
  dart.setLibraryUri(src__file.FileSpan, "package:source_span/src/file.dart");
  const _start$ = dart.privateName(src__file, "_start");
  const _end$ = dart.privateName(src__file, "_end");
  const _context = dart.privateName(src__file, "_context");
  let const$;
  src__file._FileSpan = class _FileSpan extends src__span_mixin.SourceSpanMixin {
    get sourceUrl() {
      return this.file.url;
    }
    get length() {
      return dart.notNull(this[_end$]) - dart.notNull(this[_start$]);
    }
    get start() {
      return new src__file.FileLocation.__(this.file, this[_start$]);
    }
    get end() {
      return new src__file.FileLocation.__(this.file, this[_end$]);
    }
    get text() {
      return this.file.getText(this[_start$], this[_end$]);
    }
    get context() {
      let endLine = this.file.getLine(this[_end$]);
      let endColumn = this.file.getColumn(this[_end$]);
      let endOffset = null;
      if (endColumn === 0 && endLine !== 0) {
        if (this.length === 0) {
          return endLine === dart.notNull(this.file.lines) - 1 ? "" : this.file.getText(this.file.getOffset(endLine), this.file.getOffset(dart.notNull(endLine) + 1));
        }
        endOffset = this[_end$];
      } else if (endLine === dart.notNull(this.file.lines) - 1) {
        endOffset = this.file.length;
      } else {
        endOffset = this.file.getOffset(dart.notNull(endLine) + 1);
      }
      return this.file.getText(this.file.getOffset(this.file.getLine(this[_start$])), endOffset);
    }
    compareTo(other) {
      src__span.SourceSpan._check(other);
      if (!src__file._FileSpan.is(other)) return super.compareTo(other);
      let otherFile = src__file._FileSpan._check(other);
      let result = this[_start$][$compareTo](otherFile[_start$]);
      return result === 0 ? this[_end$][$compareTo](otherFile[_end$]) : result;
    }
    union(other) {
      if (!src__file.FileSpan.is(other)) return super.union(other);
      let span = src__file._FileSpan._check(this.expand(src__file.FileSpan._check(other)));
      if (src__file._FileSpan.is(other)) {
        if (dart.notNull(this[_start$]) > dart.notNull(other[_end$]) || dart.notNull(other[_start$]) > dart.notNull(this[_end$])) {
          dart.throw(new core.ArgumentError.new("Spans " + dart.str(this) + " and " + dart.str(other) + " are disjoint."));
        }
      } else {
        if (dart.notNull(this[_start$]) > dart.notNull(other.end.offset) || dart.notNull(other.start.offset) > dart.notNull(this[_end$])) {
          dart.throw(new core.ArgumentError.new("Spans " + dart.str(this) + " and " + dart.str(other) + " are disjoint."));
        }
      }
      return span;
    }
    _equals(other) {
      if (other == null) return false;
      if (!src__file.FileSpan.is(other)) return super._equals(other);
      if (!src__file._FileSpan.is(other)) {
        return super._equals(other) && dart.equals(this.sourceUrl, dart.dload(other, 'sourceUrl'));
      }
      return core.identical(this[_start$], dart.dload(other, _start$)) && core.identical(this[_end$], dart.dload(other, _end$)) && dart.equals(this.sourceUrl, dart.dload(other, 'sourceUrl'));
    }
    get hashCode() {
      return super.hashCode;
    }
    expand(other) {
      if (!dart.equals(this.sourceUrl, other.sourceUrl)) {
        dart.throw(new core.ArgumentError.new("Source URLs \"" + dart.str(this.sourceUrl) + "\" and " + " \"" + dart.str(other.sourceUrl) + "\" don't match."));
      }
      if (src__file._FileSpan.is(other)) {
        let start = math.min(core.int, this[_start$], other[_start$]);
        let end = math.max(core.int, this[_end$], other[_end$]);
        return new src__file._FileSpan.new(this.file, start, end);
      } else {
        let start = math.min(core.int, this[_start$], other.start.offset);
        let end = math.max(core.int, this[_end$], other.end.offset);
        return new src__file._FileSpan.new(this.file, start, end);
      }
    }
    get [_context$]() {
      return core.String._check(this[$noSuchMethod](new core._Invocation.getter(const$ || (const$ = dart.const(new _js_helper.PrivateSymbol.new('_context', _context))))));
    }
  };
  (src__file._FileSpan.new = function(file, _start, _end) {
    this.file = file;
    this[_start$] = _start;
    this[_end$] = _end;
    if (dart.notNull(this[_end$]) < dart.notNull(this[_start$])) {
      dart.throw(new core.ArgumentError.new("End " + dart.str(this[_end$]) + " must come after start " + dart.str(this[_start$]) + "."));
    } else if (dart.notNull(this[_end$]) > dart.notNull(this.file.length)) {
      dart.throw(new core.RangeError.new("End " + dart.str(this[_end$]) + " must not be greater than the number " + "of characters in the file, " + dart.str(this.file.length) + "."));
    } else if (dart.notNull(this[_start$]) < 0) {
      dart.throw(new core.RangeError.new("Start may not be negative, was " + dart.str(this[_start$]) + "."));
    }
  }).prototype = src__file._FileSpan.prototype;
  dart.addTypeTests(src__file._FileSpan);
  src__file._FileSpan[dart.implements] = () => [src__file.FileSpan];
  dart.setMethodSignature(src__file._FileSpan, () => ({
    __proto__: dart.getMethods(src__file._FileSpan.__proto__),
    expand: dart.fnType(src__file.FileSpan, [src__file.FileSpan])
  }));
  dart.setGetterSignature(src__file._FileSpan, () => ({
    __proto__: dart.getGetters(src__file._FileSpan.__proto__),
    start: src__file.FileLocation,
    end: src__file.FileLocation,
    text: core.String,
    context: core.String,
    [_context$]: core.String
  }));
  dart.setLibraryUri(src__file._FileSpan, "package:source_span/src/file.dart");
  dart.setFieldSignature(src__file._FileSpan, () => ({
    __proto__: dart.getFields(src__file._FileSpan.__proto__),
    file: dart.finalFieldType(src__file.SourceFile),
    [_start$]: dart.finalFieldType(core.int),
    [_end$]: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__file._FileSpan, ['compareTo', '_equals']);
  dart.defineExtensionAccessors(src__file._FileSpan, ['hashCode']);
  dart.defineLazy(src__file, {
    /*src__file._LF*/get _LF() {
      return 10;
    },
    /*src__file._CR*/get _CR() {
      return 13;
    }
  });
  dart.trackLibraries("packages/source_span/source_span", {
    "package:source_span/src/span_mixin.dart": src__span_mixin,
    "package:source_span/src/utils.dart": src__utils,
    "package:source_span/src/span_with_context.dart": src__span_with_context,
    "package:source_span/src/span.dart": src__span,
    "package:source_span/src/location.dart": src__location,
    "package:source_span/src/highlighter.dart": src__highlighter,
    "package:source_span/src/colors.dart": src__colors,
    "package:source_span/source_span.dart": source_span,
    "package:source_span/src/span_exception.dart": src__span_exception,
    "package:source_span/src/location_mixin.dart": src__location_mixin,
    "package:source_span/src/file.dart": src__file
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/source_span/src/span_mixin.dart","org-dartlang-app:///packages/source_span/src/utils.dart","org-dartlang-app:///packages/source_span/src/span.dart","org-dartlang-app:///packages/source_span/src/span_with_context.dart","org-dartlang-app:///packages/source_span/src/location.dart","org-dartlang-app:///packages/source_span/src/highlighter.dart","org-dartlang-app:///packages/source_span/src/colors.dart","org-dartlang-app:///packages/source_span/src/span_exception.dart","org-dartlang-app:///packages/source_span/src/location_mixin.dart","org-dartlang-app:///packages/source_span/src/file.dart"],"names":[],"mappings":"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","file":"source_span.ddc.js"}');
  // Exports:
  return {
    src__span_mixin: src__span_mixin,
    src__utils: src__utils,
    src__span_with_context: src__span_with_context,
    src__span: src__span,
    src__location: src__location,
    src__highlighter: src__highlighter,
    src__colors: src__colors,
    source_span: source_span,
    src__span_exception: src__span_exception,
    src__location_mixin: src__location_mixin,
    src__file: src__file
  };
});

//# sourceMappingURL=source_span.ddc.js.map
