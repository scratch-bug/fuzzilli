function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = new Map();
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f10(a11, a12, a13) {
            function F15(a17, a18, a19, a20) {
                if (!new.target) { throw 'must be called with new'; }
                function f21() {
                    return f21;
                }
                function f22(a23) {
                    const v24 = v5.__proto__;
                    try { v24.has(-1); } catch (e) {}
                }
                Object.defineProperty(this, "e", { get: f21, set: f22 });
                this.e = -1;
            }
            new F15();
            return this;
        }
        f10();
        %OptimizeFunctionOnNextCall(f10);
    }
    const v28 = new F6(this, F0);
    new F6(v28, a2);
    new F6();
}
new F0();
