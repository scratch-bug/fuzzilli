function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    let v4;
    try { v4 = new a2(); } catch (e) {}
    function f5() {
        function f6(a7) {
            let v9 = Uint32Array.length;
            v9++;
            try { a7(F0, f6, a2); } catch (e) {}
            return !v9;
        }
        f6(v4);
        %OptimizeMaglevOnNextCall(f6);
        return F0;
    }
    f5();
    Object.defineProperty(this, "toString", { get: f5 });
}
const v15 = new F0(F0);
v15.toString;
