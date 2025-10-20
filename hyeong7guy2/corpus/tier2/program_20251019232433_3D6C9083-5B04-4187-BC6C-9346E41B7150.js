function f0() {
    const v2 = { 747: Map };
    const t1 = [0.39346707945810944,-991803.8963643727];
    t1[15] |= 256;
    return Map;
}
let v5 = 2.2250738585072014e-308;
const v6 = v5++;
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    function f11() {
        function f12(a13) {
            const v15 = Array(v5);
            function F16(a18, a19, a20) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F16.constructor = f0;
            const t17 = F16.constructor;
            t17(f12, a13, v15);
            return a10;
        }
        f12.apply(f12, f12, v5, f12, v6);
        f12();
        %OptimizeMaglevOnNextCall(f12);
        return f12;
    }
    Object.defineProperty(this, "toString", { get: f11 });
}
const v25 = new F7(f0, f0);
const t29 = v25.toString;
t29(v6, F7);
