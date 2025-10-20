function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i6 = 0, i7 = 10; i7; i7--) {
    }
    function f13(a14, a15, a16) {
        function F17(a19, a20, a21, a22) {
            if (!new.target) { throw 'must be called with new'; }
            function f23() {
                return f23;
            }
            function f24(a25) {
                for (let i31 = 0;
                    i31 < 1000;
                    (() => {
                        i31++;
                        const v69 = {
                            p(a37, a38, a39, a40) {
                                const t0 = [0,97,115,109,1,0,0,0,1,8,2,96,1,-4294967296,0,96,0,0,2,11,1,4096,105,2,112,1,5083,0,0,25];
                                delete t0[3];
                                return 0;
                            },
                        };
                        v69.p();
                    })()) {
                }
                return 4096;
            }
            Object.defineProperty(this, "e", { get: f23, set: f24 });
        }
        for (let i = 0; i < 5; i++) {
        }
        const v72 = new F17(F0, f13, F0, a3);
        v72.e = v72;
        return this;
    }
    f13(a2, a2, a2);
    %OptimizeFunctionOnNextCall(f13);
}
new F0();
const v75 = new F0();
new F0(F0, v75);
