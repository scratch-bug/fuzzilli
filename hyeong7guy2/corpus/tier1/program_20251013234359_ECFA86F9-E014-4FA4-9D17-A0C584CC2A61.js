new ArrayBuffer(4096, {});
function f12(a13) {
    return a13;
}
function f15() {
}
function f16(a17) {
    return f16;
}
Object.defineProperty(BigUint64Array, 1000, { configurable: true, enumerable: true, get: f15, set: f16 });
function F21(a23) {
    if (!new.target) { throw 'must be called with new'; }
    this();
    return 3;
}
function f27() {
    return 0;
}
function F28() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 49853;
    this.c = 49853;
}
new F28();
class C34 {
}
const v37 = {
    get c() {
    },
};
const v39 = Object.create(v37);
function f40(a41, a42) {
    a41.toISOString = a42;
}
for (let i44 = 0; i44 < 20000; i44++) {
    const v53 = i44 ? { a: 1 } : v39;
    const v54 = {};
    const v58 = {};
    f40(v53, v54, 0, C34, C34);
}
