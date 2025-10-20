function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7() {
                for (let i9 = 0;
                    (() => {
                        for (let v10 = 0; v10 < 5; v10++) {
                        }
                        i9 < 100000;
                        return a2;
                    })();
                    ) {
                }
                return f5;
            }
            f7();
            %PrepareFunctionForOptimization(f7);
            %OptimizeFunctionOnNextCall(f7);
            f7();
            eval(a6);
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v19 = new F0();
class C20 {
    static [v19](a22, a23, a24) {
    }
}
