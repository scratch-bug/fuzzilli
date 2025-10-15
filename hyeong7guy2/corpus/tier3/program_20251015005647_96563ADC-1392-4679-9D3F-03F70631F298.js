function f2() {
    return Int32Array;
}
Int32Array.toString = f2;
const v3 = [1073741825,-7,-54482,-31076,-15,-60860,1184888892];
try { v3.includes(12955, Int32Array); } catch (e) {}
