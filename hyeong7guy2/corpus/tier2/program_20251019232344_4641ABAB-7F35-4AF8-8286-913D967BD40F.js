function f0() {
    let v1 = -9007199254740992;
    class C2 {
        constructor(a4, a5) {
            for (let v6 = 0; v6 < 5; v6++) {
                super.b >>>= v6;
                for (let i8 = 0;
                    i8 < 1;
                    (() => {
                        i8++;
                        class C13 {
                        }
                        C13.b = C13;
                        function F14() {
                            if (!new.target) { throw 'must be called with new'; }
                            return F14;
                        }
                    })()) {
                    v1 %= i8;
                }
            }
        }
    }
    const v17 = new C2();
    const v18 = v17.constructor;
    new v18();
    const v20 = new v18();
    return v20;
}
f0();
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0();
