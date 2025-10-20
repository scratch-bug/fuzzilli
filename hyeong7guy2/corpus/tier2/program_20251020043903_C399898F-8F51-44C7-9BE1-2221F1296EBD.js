function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return a8;
            }
            function f16(a17) {
                for (let i22 = -15;
                    i22 < 2;
                    (() => {
                        i22++;
                        const v61 = {
                            p(a28, a29, a30, a31) {
                                const v41 = Symbol.iterator;
                                const v43 = {
                                    [v41]() {
                                    },
                                };
                                const t5 = [0,97,115,1000,715450504,0,0,0,1,8,2,96,1,-4294967296,0,96,0,0,2,11,1,4096,105,2,1073741825,4096,5083];
                                delete t5[3];
                            },
                        };
                        v61.p();
                    })()) {
                }
                return 2;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
        }
        const v64 = new F9(a3);
        v64.e = v64;
        function F65(a67, a68) {
            if (!new.target) { throw 'must be called with new'; }
            function f69() {
                return a8;
            }
            Object.defineProperty(this, "toString", { get: f69 });
        }
        new F65(F1, a4);
        for (let i73 = 0, i74 = 10; i74; i74--) {
        }
        for (let i82 = 0, i83 = 10;
            i83;
            (() => {
                const v86 = class {
                }
                --i83;
            })()) {
        }
    }
    f5(a4, f5, f5);
    %OptimizeFunctionOnNextCall(f5);
}
const v91 = new F1();
const v92 = new F1(v91, v91);
new F1(v92, v91);
