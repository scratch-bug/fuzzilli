function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = [a2,a2,a2];
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9() {
            function f10(a11) {
                const v12 = a11 >>> a11;
                const t8 = v4.constructor;
                t8(f9, v12);
            }
            %OptimizeMaglevOnNextCall(f10);
            return f10;
        }
        Object.defineProperty(this, "toString", { get: f9 });
    }
    const v15 = new F5();
    class C16 {
        static [v15](a18, a19, a20) {
        }
    }
}
new F0(F0, F0);
new F0();
