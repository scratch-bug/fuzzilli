function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            try { this(); } catch (e) {}
        }
        const v15 = new F8();
        const t8 = v15.constructor;
        const v17 = new t8();
        v17.length = v17;
        return a5;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
const v20 = new F0();
const t18 = v20.constructor;
new t18();
