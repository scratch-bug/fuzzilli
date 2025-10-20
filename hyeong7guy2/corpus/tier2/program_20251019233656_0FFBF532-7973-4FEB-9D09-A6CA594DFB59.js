function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    let v4;
    try { v4 = new a2(); } catch (e) {}
    function f5() {
        function f6(a7) {
            a7.bind();
            const v10 = new Uint32Array();
            return !v10.length;
        }
        f6(f6);
        %OptimizeMaglevOnNextCall(f6);
        return v4;
    }
    f5();
    Object.defineProperty(this, "toString", { get: f5 });
}
const v15 = new F0(F0);
v15.toString;
