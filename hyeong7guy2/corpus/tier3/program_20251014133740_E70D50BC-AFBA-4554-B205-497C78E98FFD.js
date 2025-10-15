function f2(a3) {
    return Float32Array;
}
Intl.toString = f2;
Intl.type = Intl;
const v4 = Intl.DisplayNames;
try { new v4(Intl, Intl); } catch (e) {}
