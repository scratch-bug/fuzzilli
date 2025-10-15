const v0 = class {
}
function f2(a3, a4, a5) {
    try { a4.apply(); } catch (e) {}
    const v10 = {
        construct(a8, a9) {
            return a4;
        },
    };
    return v0;
}
f2.call(f2, v0, v0);
f2(f2, 11);
%OptimizeMaglevOnNextCall(f2);
f2();
