function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7(a8, a9) {
                for (let i12 = 0, i13 = 10;
                    i13;
                    (() => {
                        i13--;
                        for (let v17 = 0; v17 < 5; v17++) {
                            v17 << Math.sign(v17);
                        }
                    })()) {
                }
                return a9;
            }
            f7(f5, F0);
            %OptimizeFunctionOnNextCall(f7);
            return a6;
        }
        f5.apply(F0, this, f5);
        f5();
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v26 = new F0(F0, F0);
class C27 {
    static [v26](a29, a30, a31) {
    }
}
