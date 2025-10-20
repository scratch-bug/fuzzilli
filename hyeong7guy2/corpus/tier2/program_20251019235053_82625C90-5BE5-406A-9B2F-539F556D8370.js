function f1(a2) {
    return a2;
}
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
}
function f6() {
    return Symbol;
}
function f7(a8) {
    const v10 = d8.profiler;
    try { v10.setOnProfileEndListener(); } catch (e) {}
    return F3;
}
Object.defineProperty(F3, Symbol.toPrimitive, { enumerable: true, get: f6, set: f7 });
F3[Symbol.toPrimitive] = f1;
