function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a2(); } catch (e) {}
    function f5() {
        function f6(a7) {
            const v9 = new Uint32Array(this, a3, a7);
            const v10 = v9.constructor;
            new v10();
            eval(v10);
            let v14 = v9.length;
            let v15 = v14++;
            v15--;
            return a2;
        }
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return a2;
    }
    f5();
    Object.defineProperty(this, "toString", { get: f5 });
}
const v19 = new F0(F0);
v19.toString;
