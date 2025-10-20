function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                try {
                    const v12 = [];
                    v12[11] = Infinity;
                    const v13 = v12[4];
                    function f15(a16) {
                        eval(a3);
                        return f8;
                    }
                    Math.asinh(v13);
                    return a10;
                } catch(e20) {
                }
                const v21 = [1073741825,64569,536870888,3473,9007199254740991,859678970,-1073741824,9007199254740990];
                const v22 = {};
                Uint32Array.set(v21);
                return a6;
            }
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v25 = new F4(a2, this);
    class C26 {
        static [v25](a28, a29, a30) {
        }
        static [v25](a32, a33, a34) {
        }
    }
}
new F0(F0, F0);
