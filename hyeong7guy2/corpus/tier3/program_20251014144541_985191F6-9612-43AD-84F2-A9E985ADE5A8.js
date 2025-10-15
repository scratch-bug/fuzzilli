const v0 = class {
}
function f1(a2, a3) {
    try { new a2(); } catch (e) {}
    a3--;
    a3 ^ a3;
    const v7 = a2.cos();
    try {
        f1(a3, v0);
    } catch(e9) {
    }
    arguments[1] = arguments;
    return v7;
}
f1(Math);
%OptimizeMaglevOnNextCall(f1);
try { f1(); } catch (e) {}
