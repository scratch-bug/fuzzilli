function f0(a1, a2, a3) {
    const v8 = {
        construct(a5, a6) {
            a6.prototype;
            f0.prototype = a2;
            return a6;
        },
    };
    v8.construct(a3, f0);
    return a2;
}
f0.call(f0, f0, f0, f0, f0);
f0();
%OptimizeMaglevOnNextCall(f0);
f0();
