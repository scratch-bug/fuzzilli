const v0 = class {
}
function f1(a2, a3) {
    a3 >> a3;
    a2.cos();
    try {
        f1(a3, v0);
    } catch(e7) {
    }
    a3 | a3;
    return arguments[1];
}
f1(Math);
%OptimizeMaglevOnNextCall(f1);
try { f1(); } catch (e) {}
