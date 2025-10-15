function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v7 = [1.0,3.0,0.0,-227.58916076392484,0.42004328565961524,-1.5126910759658791e+308];
            try { v7(v7, a2, f4, v7); } catch (e) {}
            ("p").startsWith();
            return a6;
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v13 = new F0(F0, F0);
v13.toString();
