function f1(a2, a3, a4) {
    try {
        Int32Array();
    } catch(e6) {
    }
    Math.round(-9007199254740992);
    return a2;
}
f1(f1, f1(), f1);
%OptimizeMaglevOnNextCall(f1);
f1();
