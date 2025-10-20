function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        function f8() {
            function f9(a10) {
                const t6 = [0.6004161736043077,2.220446049250313e-16,-2.0,-0.0,2.2250738585072014e-308,-950085.4812895065,637.4360195336483,0.0,-917.2390671457272];
                t6[261] = 97;
                for (let v13 = 0; v13 < 500; v13++) {
                }
            }
            %OptimizeMaglevOnNextCall(f9);
            return f9;
        }
        Object.defineProperty(this, "toString", { get: f8 });
    }
    const v14 = new F4();
    class C15 {
        static [v14](a17, a18, a19) {
        }
    }
}
new F0();
