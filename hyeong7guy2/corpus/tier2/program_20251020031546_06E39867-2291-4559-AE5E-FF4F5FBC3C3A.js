function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                return a7;
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
                                return 5083;
                            },
                        };
                        v57.p();
                    })()) {
                }
                return a16;
            }
            Object.defineProperty(this, "e", { get: f14, set: f15 });
        }
        const v60 = new F8(a2);
        v60.e = v60;
        function F61(a63, a64) {
            if (!new.target) { throw 'must be called with new'; }
            function f65() {
                return f65;
            }
            Object.defineProperty(this, "toString", { get: f65 });
        }
        new F61(F0, a3);
        for (let i69 = 0, i70 = 10; i70; i70--) {
        }
        for (let i78 = 0, i79 = 10;
            i79;
            (() => {
                const v82 = class {
                }
                --i79;
            })()) {
        }
        return F0;
    }
    f4(F0, f4, f4);
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
