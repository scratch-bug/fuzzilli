const v0 = [];
function f2() {
    function f3(a4) {
        const v5 = [];
        v5[11] = Infinity;
        const v6 = v5[4];
        v6 - v6;
    }
    %OptimizeMaglevOnNextCall(f3);
    return f3;
}
Object.defineProperty(v0, "toString", { get: f2 });
class C8 {
    static [v0](a10, a11) {
    }
    static [v0](a13, a14, a15) {
    }
}
