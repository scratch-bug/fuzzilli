const v2 = new Float64Array(536870912);
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7() {
        function f8(a9) {
            const v10 = v2[599];
            for (let i = 0; i < 5; i++) {
                for (let i12 = 0;
                    i12 < 1000;
                    (() => {
                        const v16 = i12++;
                        const v23 = {
                            p(a18, a19, a20, a21) {
                                !v16;
                                return v16;
                            },
                        };
                        v23.p();
                    })()) {
                }
            }
            return v10;
        }
        for (let i28 = 0, i29 = 10; i29; i29--) {
        }
        %OptimizeMaglevOnNextCall(f8);
        return f8;
    }
    Object.defineProperty(this, "toString", { get: f7 });
}
const v35 = new F3(Float64Array, Float64Array);
class C36 {
    static [v35](a38, a39, a40) {
    }
    static [v35](a42, a43, a44) {
    }
}
