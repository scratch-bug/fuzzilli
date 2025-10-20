class C1 extends Map {
}
const v2 = new C1();
v2.getOrInsert();
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F4(v2);
v7.h = v2;
function f9(a10) {
    function f11(a12, a13, a14) {
        return a12;
    }
    const v17 = { type: "function" };
    v17.flushDenormals = v7;
    const v18 = new Worker(f11, v17);
    v18.postMessage(v17);
    return a10;
}
WeakMap[Symbol.toPrimitive] = f9;
class C23 {
    [WeakMap] = -1000000000000.0;
}
