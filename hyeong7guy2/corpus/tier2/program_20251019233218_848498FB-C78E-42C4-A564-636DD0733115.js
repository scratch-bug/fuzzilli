function f1(a2, a3, a4) {
    const v10 = {
        construct(a6, a7) {
            const v8 = this.construct;
            try { v8.apply(null, null); } catch (e) {}
            return a2;
        },
    };
    v10.construct();
    return null;
}
const v12 = f1.call();
f1(v12, v12, v12);
%OptimizeMaglevOnNextCall(f1);
f1();
