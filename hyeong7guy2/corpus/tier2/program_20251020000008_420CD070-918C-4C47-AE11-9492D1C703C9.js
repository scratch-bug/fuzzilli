function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9() {
            function f10(a11) {
                const v13 = new BigUint64Array();
                function F14(a16, a17, a18, a19) {
                    if (!new.target) { throw 'must be called with new'; }
                    v13[0];
                }
                const v23 = new Int16Array();
                const v24 = v23.length;
                for (let i27 = 0, i28 = 10; i28; i28--) {
                }
                const v34 = [1.6145556753008068e+308,805424.254752228,NaN,-132710.08433698223,900.2315999000423,2.220446049250313e-16,-4.0,230572.97492185445];
                let v35 = Symbol.toPrimitive;
                function F36(a38, a39) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f40(a41, a42, a43) {
                        v35 <<= v35;
                        return f9;
                    }
                    f40(v34);
                }
                const v45 = { millisecond: v24 };
            }
            f10();
            %OptimizeMaglevOnNextCall(f10);
            return f10;
        }
        Object.defineProperty(this, "toString", { get: f9 });
    }
    const v47 = new F5(a4, F1);
    class C48 {
        static [v47](a50, a51, a52) {
        }
    }
}
const v53 = new F1();
const t40 = v53.constructor;
new t40(Symbol);
