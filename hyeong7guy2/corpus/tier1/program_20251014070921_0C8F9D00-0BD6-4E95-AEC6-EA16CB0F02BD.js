const v0 = [10];
const v1 = [-6.500828732468278,-3.0,4.706470474493489,2.2250738585072014e-308];
function f2() {
    return v1;
}
function f3(a4) {
    return f2;
}
Object.defineProperty(v1, "constructor", { enumerable: true, get: f2, set: f3 });
class C5 {
    m(a7, a8, a9, a10) {
        Object.defineProperty(a9, "constructor", { writable: true, enumerable: true, value: f2 });
    }
}
const v11 = new C5();
try { v11.m(C5, v0, v1); } catch (e) {}
