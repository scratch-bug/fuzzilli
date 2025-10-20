function f2(a3, a4, a5) {
    const v12 = {
        construct(a7, a8) {
            a7 >>> a7;
            a8.length = a8;
            const v10 = a7.construct;
            v10 ?? v10;
        },
    };
    v12.construct(11, Int8Array);
    v12.construct(v12, v12);
    return f2;
}
const t13 = f2();
t13();
%OptimizeMaglevOnNextCall(f2);
f2();
