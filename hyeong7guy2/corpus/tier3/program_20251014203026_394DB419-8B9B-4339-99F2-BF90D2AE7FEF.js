const v0 = class {
}
function f1(a2, a3) {
    a3 >> a3;
    const v5 = a2.cos();
    try {
        f1(a3, v0);
    } catch(e7) {
    }
    return v5;
}
f1[Symbol.toPrimitive] = f1;
f1(Math);
%OptimizeMaglevOnNextCall(f1);
try { f1(v0, f1); } catch (e) {}
