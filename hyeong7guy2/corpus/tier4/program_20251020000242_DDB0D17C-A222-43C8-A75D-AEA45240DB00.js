class C2 extends WeakSet {
}
function f3() {
    Int8Array **= Int8Array;
    return Int8Array;
}
C2[Symbol.toPrimitive] = f3;
try { JSON.rawJSON(C2); } catch (e) {}
