function f2(a3, a4, a5) {
    const v10 = {
        construct(a7, a8) {
            a8.prototype = a8;
            a7.construct;
            return Int8Array;
        },
    };
    const v11 = v10.construct(11, Int8Array);
    v10.construct(v10, v10);
    return v11;
}
f2.call();
f2();
%OptimizeMaglevOnNextCall(f2);
f2();
