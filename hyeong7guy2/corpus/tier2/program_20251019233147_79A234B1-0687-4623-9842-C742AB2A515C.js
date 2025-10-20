function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f8(a9) {
                function F10(a12, a13) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f14() {
                        function f15(a16) {
                            function f17(a18) {
                                return a18;
                            }
                            const v19 = [F0,F0,F0];
                            for (let v20 = 0; v20 < 5; v20++) {
                                v19.forEach(f17);
                            }
                            return f14;
                        }
                        return f15;
                    }
                    Object.defineProperty(this, "toString", { get: f14 });
                }
                const v22 = new F10(F0, F0);
                v22.toString(a2, v22, v22, F10, f5);
                return f5;
            }
            f8(a6);
            const v27 = -439501.18159386097 >>> ({}).a;
            const v28 = v27 !== v27;
            Math.cosh(1000);
            v28 || v28;
        }
        f5(f5(F0));
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v35 = new F0(F0, F0);
class C36 {
    static [v35](a38, a39, a40) {
    }
    static [v35](a42, a43, a44) {
    }
}
