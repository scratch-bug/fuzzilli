function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7() {
                ArrayBuffer.constructor;
                const v13 = {
                    n(a11, a12) {
                        return a3;
                    },
                };
                for (let v14 = 0; v14 < 5; v14++) {
                    function f15(a16, a17) {
                        return a3;
                    }
                }
            }
            const v18 = f7();
            v18 >> v18;
            Math.abs(v18);
            return v18;
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v24 = new F0();
v24.toString();
