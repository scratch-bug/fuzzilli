function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2() {
    return `34${F0}object`;
}
F0[Symbol.toPrimitive] = f2;
class C7 {
}
const v10 = Object(108);
function f11() {
    C7[F0] = Set;
    return Symbol;
}
function f12(a13) {
    return a13;
}
Object.defineProperty(v10, Symbol.toPrimitive, { configurable: true, get: f11, set: f12 });
try { v10.toPrecision(v10); } catch (e) {}
