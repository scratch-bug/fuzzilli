const v0 = [];
function f1() {
    v0[v0] = v0;
    return v0;
}
const v2 = [1.0361238576858123e+308,-1.325662891706506e+308];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8) {
        return f1();
    }
    a6[Symbol.toPrimitive] = f7;
}
const v12 = new F3(v2, v0);
function f13(a14, a15) {
    return f1();
}
v12.constructor = f13;
try { v12.constructor(); } catch (e) {}
