const v3 = Intl.NumberFormat;
const v4 = v3(Intl, v3);
try { v4.formatRange(Uint8ClampedArray, Symbol); } catch (e) {}
