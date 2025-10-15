const v0 = class {
}
function f1(a2, a3) {
    const v4 = a3 << a3;
    a2.cos();
    try {
        f1(a3, v0);
    } catch(e7) {
    }
    a3 | a3;
    arguments[1] = arguments;
    return v4;
}
f1(Math);
%OptimizeMaglevOnNextCall(f1);
try { f1(v0, v0); } catch (e) {}
