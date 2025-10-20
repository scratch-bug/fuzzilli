function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F9(a11, a12, a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f15() {
                return a3;
            }
            function f16(a17) {
                const v20 = String.prototype.charCodeAt;
                let v21;
                try { v21 = v20.call(a6, -1); } catch (e) {}
                return v21;
            }
            Object.defineProperty(this, "e", { get: f15, set: f16 });
            this.e = -1;
        }
        new F9(a3, f4, a6, a3);
        return F0;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
