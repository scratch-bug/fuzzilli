function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f9() {
            return a2;
        }
        WebAssembly.compileStreaming(this, a3).catch(f9);
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            function f18() {
                return F0;
            }
            function f19(a20) {
                for (let i25 = 0;
                    i25 < 1000;
                    (() => {
                        i25++;
                        const v61 = {
                            p(a31, a32, a33, a34) {
                                const t0 = [0,97,115,109,1,0,0,0,1,8,2,96,1,-4294967296,0,96,0,0,2,11,1,4096,105,2,112,1,5083];
                                delete t0[3];
                                return 0;
                            },
                        };
                        v61.p(f19, a6, 2, a3);
                    })()) {
                }
                const v66 = {
                    [Symbol]() {
                    },
                };
                return WebAssembly;
            }
            Object.defineProperty(this, "e", { get: f18, set: f19 });
        }
        const v67 = new F12(F0, f9, F12, f9);
        v67.e = v67;
        return F0;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
