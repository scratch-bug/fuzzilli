function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4, a5) {
    const v8 = Math.round(-9007199254740992);
    F0 ^ 92;
    return v8 & v8;
}
const v12 = f2();
f2(F0, v12, v12);
%OptimizeMaglevOnNextCall(f2);
f2(f2, f2, f2);
