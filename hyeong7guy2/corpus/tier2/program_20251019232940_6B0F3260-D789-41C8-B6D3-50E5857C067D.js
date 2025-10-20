function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                function f11() {
                    function f12(a13) {
                        class C14 {
                            static g;
                            static set g(a16) {
                            }
                            static {
                                eval(a3);
                            }
                        }
                        return C14;
                    }
                    return f12;
                }
                Object.defineProperty(this, "toString", { get: f11 });
            }
            const v20 = new F7(F0, a6);
            const t23 = v20.toString;
            t23();
            return f5;
        }
        f5(F0);
        f5(f4);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v25 = new F0(F0, F0);
v25.toString(v25, F0);
