function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7(a8, a9) {
                for (let i12 = 0, i13 = 10;
                    i13;
                    (() => {
                        i13--;
                        for (let i18 = 0; i18 < 20000; i18++) {
                            i18 << Math.abs(i18);
                        }
                    })()) {
                }
                return a9;
            }
            f7();
            %OptimizeFunctionOnNextCall(f7);
        }
        f5.apply();
        f5(F0);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v32 = new F0(F0, F0);
class C33 {
    static [v32](a35, a36, a37) {
    }
}
