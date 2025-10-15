function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 16;
    this.a = 16;
}
new F0();
class C5 {
}
new C5();
class C8 {
}
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = C8;
}
class C13 extends F9 {
}
const v15 = {};
for (let v16 = 0; v16 < 1000; v16++) {
    function F17() {
        if (!new.target) { throw 'must be called with new'; }
        const t21 = globalThis.performance.measureMemory;
        t21();
    }
    new F17();
}
