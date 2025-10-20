function f1() {
    return BigUint64Array;
}
BigUint64Array[Symbol.toPrimitive] = f1;
function f4(a5) {
    return a5 in BigUint64Array;
}
f4();
try { f4(BigUint64Array); } catch (e) {}
