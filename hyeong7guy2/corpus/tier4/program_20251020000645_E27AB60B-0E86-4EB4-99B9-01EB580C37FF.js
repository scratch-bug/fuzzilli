Uint8ClampedArray.toString = Symbol;
const t1 = Intl.NumberFormat;
const v4 = t1(Uint8ClampedArray, Symbol);
try { v4.formatRange(Uint8ClampedArray, Symbol); } catch (e) {}
