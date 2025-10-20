function f0() {
    function f1(a2, a3) {
        const v4 = a2 ?? a2;
        const t3 = globalThis.encodeURI;
        t3(v4);
        const v9 = -7;
        -(v9 & v9);
        return v9;
    }
    f1(f1, f1);
    f1(f0);
    %OptimizeMaglevOnNextCall(f1);
    f1(f0, f0);
    return f0;
}
const v15 = { construct: f0 };
v15.construct(v15, v15, f0);
