function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = [a3,a3];
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9() {
            function f10(a11) {
                const v12 = a11 >>> a11;
                const t8 = v4.constructor;
                t8(f9, v12);
                function f15(a16) {
                    return a16;
                }
                function F17(a19, a20) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                new F17(f15);
                return v12;
            }
            %OptimizeMaglevOnNextCall(f10);
            return f10;
        }
        Object.defineProperty(this, "toString", { get: f9 });
    }
    const v22 = new F5(F5, v4);
    class C23 {
        static [v22](a25, a26, a27) {
        }
    }
}
new F0(F0, F0);
new F0(F0, F0);
