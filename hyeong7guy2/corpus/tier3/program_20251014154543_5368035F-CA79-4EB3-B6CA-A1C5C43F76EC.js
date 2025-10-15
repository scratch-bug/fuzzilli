function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                return f14;
            }
            f14.caller;
        }
        const v16 = new F8();
        function F17(a19, a20, a21, a22) {
            if (!new.target) { throw 'must be called with new'; }
            try { a21(); } catch (e) {}
            this.g = this;
        }
        const v24 = new F17(f4, F0, a6, v16);
        const v25 = v24.constructor;
        v25.prototype = v25;
        new v25();
        return f4;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v28 = new F0(F0, F0);
const v29 = v28.constructor;
const v30 = new v29(F0, F0, v29, F0, v29);
const v31 = new F0();
new F0(v30, v31);
