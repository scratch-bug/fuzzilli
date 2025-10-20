function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v11 = new F7(F7, f4);
            const v13 = Symbol.dispose;
            const v15 = {
                [v13]() {
                },
            };
            using v16 = v15;
            const t14 = v11.constructor;
            const v18 = new t14(v16, f5);
            v18.constructor;
        }
        f5(f5);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v22 = new F0();
class C23 {
    static [v22](a25, a26, a27) {
    }
}
