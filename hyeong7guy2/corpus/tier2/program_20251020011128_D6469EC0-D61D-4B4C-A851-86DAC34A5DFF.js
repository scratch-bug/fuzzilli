class C0 {
}
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    new a5(a5, C0);
    function f9() {
        function f10(a11) {
            const v12 = [-4294967295,-4294967295,-4294967295];
            v12[11] = Infinity;
            const v13 = v12[4];
            try { Math(Math, f10, a11, Math, f10); } catch (e) {}
            Math.asinh(v13);
            return v13;
        }
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
    this.toString(Infinity, a4);
}
new F2(-4294967295, F2);
