function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                function F18(a20, a21) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f22() {
                        function f23(a24) {
                            typeof f23;
                            return f4;
                        }
                        f23(this);
                        return f23;
                    }
                    Object.defineProperty(this, "toString", { get: f22 });
                }
                const v27 = new F18(a17, a3);
                v27.toString();
            }
            new F14();
        }
        new F8(a6, a2, a5, a5);
        return a7;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
const v33 = new F0();
new F0(v33, F0);
