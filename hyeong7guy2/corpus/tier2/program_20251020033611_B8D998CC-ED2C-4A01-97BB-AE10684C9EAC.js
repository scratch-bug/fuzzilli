function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            for (let i9 = undefined, i10 = 10;
                (() => {
                    function f11(a12) {
                        return i9;
                    }
                    return i10;
                })();
                i10--) {
            }
            let v18 = false;
            for (let v19 = 0; v19 < 5; v19++) {
                if (v19 === 24998) {
                    v18 = true;
                }
            }
            const v27 = {
                [Symbol]() {
                    eval();
                },
            };
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v28 = new F0(F0, F0);
class C29 {
    static [v28](a31, a32, a33) {
    }
    static [v28](a35, a36, a37) {
    }
}
