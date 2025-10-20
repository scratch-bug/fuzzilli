function f0() {
    function f1(a2, a3) {
        function f4(a5, a6, a7) {
            a5 != a5;
            a6 & a6;
            const v10 = {};
            Date[4] = 1563697887n;
            function F13(a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
                function f17() {
                    function f18(a19) {
                        const v21 = {};
                        const v23 = new ArrayBuffer(3725);
                        const v25 = new Float32Array(v23);
                        v25.set(Date);
                        return v10;
                    }
                    return f18;
                }
                Object.defineProperty(this, "toString", { get: f17 });
            }
            const v27 = new F13(Date, F13);
            try { v27.toString(); } catch (e) {}
            return f1;
        }
        f4(f0, f1, f1);
        f4();
        f4();
        const v32 = f4();
        f4();
        f4(f4, v32, f4(v32, a3, a2));
        f4();
        return f0;
    }
    const v37 = f1(f0, f0);
    %PrepareFunctionForOptimization(f1);
    %OptimizeMaglevOnNextCall(f1);
    f1();
    return v37;
}
const v39 = { construct: f0 };
v39.construct(v39);
