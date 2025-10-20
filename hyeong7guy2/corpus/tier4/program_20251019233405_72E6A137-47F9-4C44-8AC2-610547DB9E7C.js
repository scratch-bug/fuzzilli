function f1() {
    return 2;
}
function f4(a5, a6, a7) {
    a5[Symbol.toPrimitive] = f1;
    a5 **= 4294967297n;
    return 2;
}
try { f4(Set); } catch (e) {}
