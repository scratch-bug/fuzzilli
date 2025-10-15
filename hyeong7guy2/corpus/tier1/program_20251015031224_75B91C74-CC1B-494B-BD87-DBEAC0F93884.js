function f1(a2, a3, a4) {
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
    }
    F5.d = a3;
    F5.d = -268435456;
    F5.d >>>= 100000;
    return f1;
}
const v10 = f1(f1, f1, f1);
f1();
%OptimizeMaglevOnNextCall(f1);
f1(f1, v10, -268435456);
