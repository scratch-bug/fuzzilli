function f0(a1) {
    const v2 = [];
    v2[1] = 2;
    return v2;
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8() {
        function f9(a10) {
            ([a10])[4] | 7;
            new f0();
        }
        f9(f9);
        f9();
        %OptimizeMaglevOnNextCall(f9);
        return f9;
    }
    Object.defineProperty(this, "toString", { get: f8 });
}
const v18 = new F4(f0, f0);
class C19 {
    static [v18](a21, a22, a23) {
    }
}
