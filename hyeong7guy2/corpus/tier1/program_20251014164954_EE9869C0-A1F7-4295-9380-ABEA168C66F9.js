class C0 {
}
function f1(a2, a3) {
    const v4 = a2.log2;
    const v5 = v4(a2);
    class C6 {
    }
    C6.b = C0;
    C6.b = C6;
    try {
        f1(a3, v4);
    } catch(e8) {
    }
    v5[1] = arguments;
    return a3;
}
f1(Math);
%OptimizeMaglevOnNextCall(f1);
try { f1(C0, Math); } catch (e) {}
