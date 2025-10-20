function f0() {
    class C1 {
    }
    const v2 = C1.toString();
    function f3(a4, a5) {
        try { arguments[v2](); } catch (e) {}
        return a4;
    }
    f3(C1, f0);
    %OptimizeMaglevOnNextCall(f3);
}
const v9 = class extends f0 {
}
const v10 = new v9();
const t14 = v10.constructor;
new t14(v10, v10);
new v9();
