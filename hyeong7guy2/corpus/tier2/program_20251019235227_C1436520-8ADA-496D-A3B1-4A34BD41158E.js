function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                const v12 = new Int16Array();
                eval(a2);
                const v15 = v12.length;
                const v16 = {};
                v15 - v15;
                return a7;
            }
            f9(F0);
            f9(this);
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v20 = new F4();
    class C21 {
        static [v20](a23, a24, a25) {
        }
    }
}
new F0(F0, F0);
