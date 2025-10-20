function f3(a4, a5, a6) {
    a4.construct = BigInt64Array;
    const v12 = {
        construct(a8, a9) {
            this.propertyIsEnumerable(a5, a8, 11, a4, 11);
            a8.construct;
            return 11;
        },
    };
    v12.construct(a6);
    v12.construct(11);
    const v21 = {
        valueOf() {
            const v20 = {
                [v12](a17, a18, a19) {
                },
            };
            return v20;
        },
    };
    return v12.construct(v12);
}
const v24 = f3(f3, f3.call(11, Int8Array, f3, Int8Array), Int8Array);
%OptimizeMaglevOnNextCall(f3);
f3(Int8Array, v24, f3);
