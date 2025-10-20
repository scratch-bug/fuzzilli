function f2(a3, a4, a5) {
    const v12 = {
        construct(a7, a8) {
            try { a7.construct(a5); } catch (e) {}
            const v10 = a7 !== a7;
            v10 && v10;
            return 268435440n;
        },
    };
    v12.construct(v12);
    return f2;
}
const t12 = f2();
t12(WeakMap, 268435440n, 268435440n);
%OptimizeMaglevOnNextCall(f2);
f2();
