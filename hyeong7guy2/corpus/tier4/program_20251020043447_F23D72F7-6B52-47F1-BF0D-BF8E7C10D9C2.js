class C0 {
}
function f1() {
    let v2 = 7;
    class C3 {
        constructor(a5, a6) {
            for (let v7 = 0; v7 < 5; v7++) {
                v7++;
                for (let i10 = 0; i10 < 1; i10++) {
                    v2 %= i10;
                    function f16(a17) {
                        return i10;
                    }
                    class C18 extends f16 {
                        static [f16] = C0;
                    }
                }
            }
        }
    }
    const v19 = new C3(v2, f1);
    return v19;
}
f1();
%PrepareFunctionForOptimization(f1);
%OptimizeFunctionOnNextCall(f1);
f1();
