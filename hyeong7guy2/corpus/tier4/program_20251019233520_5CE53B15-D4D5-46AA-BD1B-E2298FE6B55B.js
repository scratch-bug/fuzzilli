function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function F8(a10, a11) {
        if (!new.target) { throw 'must be called with new'; }
        function f12(a13, a14, a15) {
            const v17 = [-28740];
            class C18 {
            }
            function F19(a21, a22, a23, a24) {
                if (!new.target) { throw 'must be called with new'; }
                const v25 = a24.constructor;
                try { v25.asUintN(5, this); } catch (e) {}
            }
            new F19(v17, -1, C18, -42066n);
            return this;
        }
        f12(F0, a5, a3);
        %OptimizeFunctionOnNextCall(f12);
    }
    new F8();
    new F8();
}
const v31 = new F0(F0, F0, F0, F0);
new F0(F0, v31, F0, v31);
