function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const t4 = {};
            t4.e = f6;
            const t6 = {};
            t6.a = f6;
            const t8 = {};
            t8.h = WeakMap;
            const t10 = {};
            t10.g = f6;
            const v12 = [0.6004161736043077,2.220446049250313e-16,-2.0,-0.0,2.2250738585072014e-308,-950085.4812895065,637.4360195336483,0.0,-917.2390671457272];
            for (let v13 = 0; v13 < 10; v13++) {
                v12[v13] ||= v13;
            }
        }
        f6(f6);
        f6(WeakMap);
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v16 = new F1();
class C17 {
    static [v16](a19, a20, a21) {
    }
}
