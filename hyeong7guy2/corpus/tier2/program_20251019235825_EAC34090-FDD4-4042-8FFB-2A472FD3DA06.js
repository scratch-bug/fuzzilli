function f1(a2, a3, a4) {
    const v21 = {
        construct(a6, a7) {
            function F9(a11, a12, a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                a11.BYTES_PER_ELEMENT = a11;
                a14--;
                this.f = a14;
            }
            const v16 = new F9(Int8Array, 1825, F9, 1825);
            const t7 = v16.constructor;
            const v18 = new t7(v16);
            const t9 = v18.constructor;
            new t9(v18);
            return this;
        },
    };
    v21.construct(v21, v21);
    v21.construct(Int8Array, v21);
    return f1;
}
f1.call(f1, f1);
f1();
%OptimizeMaglevOnNextCall(f1);
f1();
