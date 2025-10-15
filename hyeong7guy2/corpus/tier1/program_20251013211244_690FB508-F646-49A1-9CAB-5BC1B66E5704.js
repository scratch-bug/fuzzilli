function f0() {
    return f0;
}
function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F1();
const v5 = v4.constructor;
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this[1024] = F6;
    a9 & a9;
    this.b = a9;
}
function f13(a14, a15) {
    for (let v16 = 0; v16 < 25; v16++) {
        v5["p" + v16] = v16;
    }
    return F6;
}
F6.valueOf = f13;
new F6(f0, F6);
const v20 = class {
}
function f21() {
    return f21;
}
Object.defineProperty(v20, "constructor", { enumerable: true, get: f21 });
try { v20.constructor(); } catch (e) {}
