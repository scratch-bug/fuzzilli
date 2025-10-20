function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = class extends F4 {
}
Array.h = v7;
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    Object.defineProperty(a13, "of", { configurable: true, enumerable: true, value: F0 });
}
new F10(1000000000.0, Array);
