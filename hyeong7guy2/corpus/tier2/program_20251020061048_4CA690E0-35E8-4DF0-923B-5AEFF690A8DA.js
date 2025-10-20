function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a3(); } catch (e) {}
    function f5() {
        function f6(a7) {
            function F10(a12, a13, a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                a15--;
                const v18 = new Uint32Array();
                const v19 = v18.length;
                v19 | v19;
                const v21 = { month: v19 };
                this.f = a15;
            }
            const v22 = new F10(Int8Array, 7, F10, 7);
            const t15 = v22.constructor;
            new t15();
            return F0;
        }
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return F0;
    }
    f5();
    f5();
}
new F0(F0, F0);
