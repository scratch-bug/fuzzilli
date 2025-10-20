const v0 = [];
function f1(a2, a3) {
    const v4 = v0.keys;
    try { v4(); } catch (e) {}
    a2.cos();
    try {
        f1();
    } catch(e8) {
    }
    return v4;
}
f1(Math);
%OptimizeMaglevOnNextCall(f1);
try { f1(); } catch (e) {}
