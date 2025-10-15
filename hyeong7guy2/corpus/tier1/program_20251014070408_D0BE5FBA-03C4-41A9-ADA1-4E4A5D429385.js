const v0 = class {
}
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1();
function F8() {
    if (!new.target) { throw 'must be called with new'; }
    const v10 = {};
    const v11 = {};
    v5.g = F8;
    const v12 = {};
    const v13 = {};
}
function f14() {
}
function f15() {
    return f14;
}
function f19() {
    const v22 = Array(1048576);
    let v23;
    try { v23 = v22.find(); } catch (e) {}
    for (let i26 = 0, i27 = 10; i27; i27 >>> i27, i27--) {
        Object.defineProperty(Array, v23, { writable: true, value: f14 });
        const v39 = {};
        const v40 = {};
        v40.c = SharedArrayBuffer;
        const v41 = {};
        v41.c = SharedArrayBuffer;
        v41.g = 6;
        const v42 = {};
        v42.c = SharedArrayBuffer;
        v42.b = 6;
        Array.__proto__ = v40;
        const v43 = Array(1048576);
        v43.f = v43;
    }
}
f19.length = f19;
const v44 = { next: f19 };
v44.d = v44;
const v45 = f19();
v45 ?? v45;
