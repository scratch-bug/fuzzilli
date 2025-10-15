class C0 {
    e;
}
class C1 extends C0 {
}
const v4 = class {
}
function f5() {
    for (let i6 = 3; i6 < 25000; i6++) {
        new C1();
    }
    return Int32Array;
}
Object.defineProperty(v4, Symbol.iterator, { writable: true, configurable: true, enumerable: true, value: f5 });
try { new Int32Array(v4); } catch (e) {}
