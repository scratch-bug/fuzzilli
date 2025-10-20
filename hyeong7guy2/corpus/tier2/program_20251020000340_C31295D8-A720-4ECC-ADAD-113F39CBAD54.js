function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            if (!this) {
                for (let i = 0; i < 5; i++) {
                    for (let [i11, i12] = (() => {
                            function f7(a8) {
                                return f7;
                            }
                            return [0, 10];
                        })();
                        i12;
                        ) {
                    }
                }
            }
        }
        f5(f5(f5));
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
