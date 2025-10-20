function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7(a8, a9) {
                for (let i12 = 0, i13 = 10;
                    i13;
                    (() => {
                        i13--;
                        for (let i18 = -65535; i18; i18++) {
                            i18 << Math.abs(i18);
                        }
                    })()) {
                }
                return f5;
            }
            f7(a3, f7);
            %OptimizeFunctionOnNextCall(f7);
        }
        f5.apply(f5);
        f5(f4);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v30 = new F0(F0, F0);
class C31 {
    static [v30](a33, a34, a35) {
    }
}
