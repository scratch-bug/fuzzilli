function f0() {
    return f0;
}
function f1(a2, a3, a4) {
    const v5 = a4 | a4;
    const v11 = {
        construct(a7, a8) {
            ~a8;
            try { a7.construct(a2, f0); } catch (e) {}
            return v5;
        },
    };
    v11.construct(v11);
    return f1;
}
const t15 = f1();
t15();
%OptimizeMaglevOnNextCall(f1);
f1();
