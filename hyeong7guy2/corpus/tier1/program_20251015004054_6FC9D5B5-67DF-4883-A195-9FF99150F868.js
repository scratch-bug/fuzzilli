const v1 = class {
}
function f3(a4, a5, a6) {
    try { a5.apply(f3, a6); } catch (e) {}
    const v19 = {
        construct(a9, a10) {
            const v18 = {
                m(a12, a13, a14, a15) {
                    eval();
                    return f3;
                },
            };
            return a6;
        },
    };
    return v19;
}
f3.call(WeakSet, v1, v1);
f3(f3, 11);
%OptimizeMaglevOnNextCall(f3);
f3();
