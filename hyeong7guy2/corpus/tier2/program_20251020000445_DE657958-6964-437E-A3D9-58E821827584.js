function f2(a3, a4, a5) {
    const v11 = {
        construct(a7, a8) {
            const v9 = a7.construct;
            try { new v9(); } catch (e) {}
            a8.e = a8;
            return a5;
        },
    };
    v11.construct(11, Int8Array);
    v11.construct(v11, v11);
    return f2;
}
const t13 = f2(11, Int8Array, 11);
t13();
%OptimizeMaglevOnNextCall(f2);
f2();
