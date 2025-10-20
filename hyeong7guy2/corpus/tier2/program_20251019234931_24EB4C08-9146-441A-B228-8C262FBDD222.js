const v2 = new Float64Array(536870912);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            class C11 extends WeakMap {
            }
            const v12 = v2[599];
            for (let i = 0; i < 5; i++) {
                for (let i14 = 0;
                    i14 < 1000;
                    (() => {
                        const v18 = i14++;
                        const v25 = {
                            p(a20, a21, a22, a23) {
                                return !v18;
                            },
                        };
                        v25.p();
                    })()) {
                }
            }
            return v12;
        }
        for (let i30 = 0, i31 = 10; i31; i31--) {
        }
        f8(a6);
        f8(a6);
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v39 = new F3(F3, Float64Array);
class C40 {
    static [v39](a42, a43, a44) {
    }
}
