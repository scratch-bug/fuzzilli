function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    a3.e = a3;
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f8() {
        return F0;
    }
    function f9(a10) {
        return f9;
    }
    Object.defineProperty(F4, "e", { get: f8, set: f9 });
}
function f11() {
    return f11;
}
function f12(a13) {
    return F0;
}
Object.defineProperty(F0, "e", { get: f11, set: f12 });
new F0(f12, f11);
