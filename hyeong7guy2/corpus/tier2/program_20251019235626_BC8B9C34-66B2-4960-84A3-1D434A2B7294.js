function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function F14(a16, a17) {
                if (!new.target) { throw 'must be called with new'; }
                const v18 = -Infinity;
                function F19(a21, a22) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f23() {
                        function f24(a25) {
                            return (typeof f24).codePointAt(v18);
                        }
                        f24();
                        %OptimizeFunctionOnNextCall(f24);
                        return f24;
                    }
                    Object.defineProperty(this, "toString", { get: f23 });
                }
                const v29 = new F19();
                v29.toString();
            }
            new F14();
        }
        new F8();
        return a5;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
