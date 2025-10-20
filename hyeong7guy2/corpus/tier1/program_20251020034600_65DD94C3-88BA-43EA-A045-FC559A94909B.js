function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function f8(a9, a10, a11) {
    a9.construct = BigInt64Array;
    const v17 = {
        construct(a13, a14) {
            this.propertyIsEnumerable(a10, a13, 11);
            a13.construct;
            return this;
        },
    };
    v17.construct(F1);
    v17.construct(a11);
    v17.construct(11);
    const v27 = {
        valueOf() {
            const v26 = {
                [v17](a23, a24, a25) {
                },
            };
            return this;
        },
    };
    v17.construct(v17);
    return v27;
}
const v30 = f8(2, f8.call(11, Int8Array, f8, Int8Array), Int8Array);
%OptimizeMaglevOnNextCall(f8);
f8(Int8Array, v30, f8);
