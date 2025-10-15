function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                function f11() {
                    function f12(a13) {
                        return a3;
                    }
                    return f12;
                }
                Object.defineProperty(this, "toString", { get: f11 });
            }
            const v14 = new F7();
            const v15 = v14.toString;
            v15(a3, f5, v15, f5, v14);
        }
        f5();
        f5(this);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v19 = new F0();
class C20 {
    static [v19](a22, a23, a24) {
    }
}
