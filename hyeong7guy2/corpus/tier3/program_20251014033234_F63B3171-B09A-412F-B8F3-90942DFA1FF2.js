Uint8ClampedArray.toString = Symbol;
const v3 = Intl.DisplayNames;
v3[0] = Uint8ClampedArray;
try { new v3(v3); } catch (e) {}
