function f0() {
    const t1 = [0.39346707945810944,-991803.8963643727];
    t1[15] |= 256;
    return 256;
}
let v3 = 2.2250738585072014e-308;
v3++;
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11) {
            const v13 = Array(v3);
            const v17 = {
                get e() {
                    return Date;
                },
            };
            const v20 = new Int16Array(Date);
            try { new Date(WeakSet, Date, 882, ...v20, ...v17); } catch (e) {}
            function F22(a24, a25, a26) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F22.constructor = f0;
            const t23 = F22.constructor;
            t23(f10, a11, v13);
        }
        f10();
        f10();
        %OptimizeMaglevOnNextCall(f10);
        return f10;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v31 = new F5(v3, v3);
class C32 {
    static [v31](a34, a35, a36) {
    }
}
