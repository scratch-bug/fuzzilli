const v1 = class {
}
function f3(a4, a5, a6) {
    let v7;
    try { v7 = a5.apply(); } catch (e) {}
    v7 ?? v7;
    const v20 = {
        construct(a10, a11) {
            const v19 = {
                m(a13, a14, a15, a16) {
                    eval();
                    return a16;
                },
            };
            return v1;
        },
    };
    const v21 = v20.propertyIsEnumerable;
    try { v21(f3, WeakSet); } catch (e) {}
    const v23 = `
    `;
    return v23;
}
f3.call(WeakSet, v1, v1);
const v25 = f3(f3, 11);
%OptimizeMaglevOnNextCall(f3);
f3(WeakSet, v25, WeakSet);
