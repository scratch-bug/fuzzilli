function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function f8(a9, a10, a11) {
    a10.construct = BigInt64Array;
    const v17 = {
        construct(a13, a14) {
            this.propertyIsEnumerable();
            a13.construct;
            return 11;
        },
    };
    v17.construct(F0);
    v17.construct(a11);
    v17.construct(11);
    const v27 = {
        valueOf() {
            const v26 = {
                [v17](a23, a24, a25) {
                },
            };
            return a11;
        },
    };
    return a9;
}
const v29 = f8(f8, f8.call(11, Int8Array, f8, Int8Array), Int8Array);
%OptimizeMaglevOnNextCall(f8);
f8(Int8Array, v29, f8);
