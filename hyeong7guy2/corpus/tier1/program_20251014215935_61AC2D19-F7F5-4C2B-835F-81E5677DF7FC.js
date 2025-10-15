const v0 = class {
}
function f2(a3, a4, a5) {
    const v10 = {
        construct(a7, a8) {
            a7.construct;
            return a4;
        },
    };
    v10.construct(11);
    v10["construct"](v0);
    return a3;
}
f2.call(f2, v0, v0, v0);
f2(f2, 11, 11);
%OptimizeMaglevOnNextCall(f2);
f2();
