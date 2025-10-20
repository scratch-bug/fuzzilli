Symbol[Symbol.toPrimitive] = Symbol;
const t1 = Intl.RelativeTimeFormat;
const v5 = new t1("gu");
try { v5.formatToParts("gu", Symbol); } catch (e) {}
