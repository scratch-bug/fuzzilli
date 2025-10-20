function f2(a3, a4, a5) {
    const v11 = {
        construct(a7, a8) {
            this.propertyIsEnumerable(a4, a7, 11);
            a7.construct;
            return a3;
        },
    };
    v11.construct(a5);
    v11.construct(11);
    const v20 = {
        valueOf() {
            const v19 = {
                [v11](a16, a17, a18) {
                },
            };
            return a3;
        },
    };
    v11.construct(v11);
    return 11;
}
const v23 = f2(f2, f2.call(11, Int8Array, f2, Int8Array), Int8Array);
%OptimizeMaglevOnNextCall(f2);
f2(Int8Array, v23, f2);
