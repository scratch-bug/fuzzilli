const v1 = new Map();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            function f17() {
                return a16;
            }
            function f18(a19) {
                const v20 = v1.__proto__;
                try { v20.values(); } catch (e) {}
                return this;
            }
            Object.defineProperty(this, "e", { get: f17, set: f18 });
            this.e = -1;
        }
        new F11(this, a8, F11, v1);
        return a8;
    }
    f6.call();
    const v24 = f6(this, F2);
    try { v24.apply(a4, F2, a5, a5); } catch (e) {}
    %OptimizeFunctionOnNextCall(f6);
}
new F2();
new F2();
