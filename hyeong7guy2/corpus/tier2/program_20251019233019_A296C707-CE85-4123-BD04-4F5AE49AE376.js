function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7(a8, a9) {
                for (let i11 = 10, i12 = 10;
                    i12;
                    (() => {
                        i12--;
                        for (let v16 = 0; v16 < 5; v16++) {
                            v16 << Math.abs(v16);
                            function F20(a22, a23) {
                                if (!new.target) { throw 'must be called with new'; }
                            }
                            v16++;
                        }
                    })()) {
                }
                return f5;
            }
            f7(f5, f5);
            %OptimizeFunctionOnNextCall(f7);
        }
        f5.apply();
        f5();
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v30 = new F0(F0, F0);
class C31 {
    static [v30](a33, a34, a35) {
    }
}
