function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                return a3;
            }
            function f15(a16) {
                for (let i21 = -15;
                    i21 < 1000;
                    (() => {
                        i21++;
                        const v57 = {
                            p(a27, a28, a29, a30) {
                                const t0 = [0,97,115,1000,715450504,0,0,0,1,8,2,96,1,-4294967296,0,96,0,0,2,11,1,4096,105,2,112,1,5083];
                                delete t0[3];
                                return a7;
                            },
                        };
                        v57.p();
                    })()) {
                }
                return a6;
            }
            Object.defineProperty(this, "e", { get: f14, set: f15 });
        }
        const v60 = new F8(a2);
        v60.e = v60;
        return f4;
    }
    f4(F0, F0, a3);
    %OptimizeFunctionOnNextCall(f4);
}
const v62 = new F0(F0, F0);
new F0(v62, v62);
new F0();
