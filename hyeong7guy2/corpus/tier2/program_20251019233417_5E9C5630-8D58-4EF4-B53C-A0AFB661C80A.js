function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    let v4;
    try { v4 = this.constructor(a2, a2, F0, F0); } catch (e) {}
    function f5(a6, a7, a8) {
        const v9 = a6.valueOf(a8, F0, a8, f5, a8);
        const v10 = v9.length;
        v9.length = v9;
        function f11() {
            return this;
        }
        class C12 extends f11 {
        }
        C12.d = C12;
        function F13(a15, a16, a17, a18) {
            if (!new.target) { throw 'must be called with new'; }
        }
        new F13(v4, f5, f5, v10);
        function f20(a21) {
            return a21;
        }
        f20();
        function f23() {
            return v4;
        }
        f23.toString();
        return f11;
    }
    f5(this);
    f5(this);
    %OptimizeFunctionOnNextCall(f5);
}
const v27 = new F0();
new F0(v27, v27);
