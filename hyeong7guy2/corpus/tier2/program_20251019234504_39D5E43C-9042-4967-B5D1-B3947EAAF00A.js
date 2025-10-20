const v0 = class {
}
function f1(a2) {
    const v4 = eval();
    for (let i6 = 0; i6 < 20000; i6++) {
        Math.random();
    }
    return v4;
}
const v14 = f1(f1);
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    const v21 = Date.prototype.toTimeString;
    try { v21(); } catch (e) {}
}
new F15(f1, v14);
function f24() {
    return v0;
}
function f25() {
    Temporal.PlainDate.compare(v0, 1468);
    return 1468;
}
function f30(a31) {
    return a31;
}
Object.defineProperty(f24, Symbol.iterator, { configurable: true, enumerable: true, get: f25, set: f30 });
try { new Uint16Array(f24); } catch (e) {}
