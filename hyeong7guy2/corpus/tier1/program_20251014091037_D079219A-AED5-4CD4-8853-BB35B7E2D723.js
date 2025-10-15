function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            try { this.call(F0, F0, this); } catch (e) {}
            function f16() {
                return -1;
            }
            function f17(a18) {
                return f17;
            }
            Object.defineProperty(this, "e", { get: f16, set: f17 });
            this.e = -1;
        }
        let v19;
        try { v19 = new F9(); } catch (e) {}
        F9.prototype = F9;
        new F9(this, F9, a2, -1);
        return v19;
    }
    f4(f4, a2, a2);
    %OptimizeFunctionOnNextCall(f4);
}
const v22 = new F0();
new F0(v22, v22);
new F0();
