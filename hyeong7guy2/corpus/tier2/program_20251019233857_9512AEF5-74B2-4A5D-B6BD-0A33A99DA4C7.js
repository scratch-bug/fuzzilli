function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7(a8) {
                try { a8.call(); } catch (e) {}
                function F10(a12, a13) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f14() {
                        function f15(a16) {
                            function F17(a19, a20) {
                                if (!new.target) { throw 'must be called with new'; }
                            }
                            F17.e <<= 100000;
                            return f7;
                        }
                        %OptimizeMaglevOnNextCall(f15);
                        return f15;
                    }
                    function F22() {
                        if (!new.target) { throw 'must be called with new'; }
                        new SharedArrayBuffer(128, { maxByteLength: 2147483649 });
                    }
                    new F22();
                    Object.defineProperty(this, "toString", { get: f14 });
                }
                const v30 = new F10(F0, f7);
                v30.toString();
                return f7;
            }
            f7(f7);
            function F34(a36, a37, a38, a39) {
                if (!new.target) { throw 'must be called with new'; }
                new Float64Array(1073741824);
            }
            new F34(a3, a3, 1073741824, f5);
        }
        f5();
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v44 = new F0();
class C45 {
    static [v44](a47, a48, a49) {
    }
}
