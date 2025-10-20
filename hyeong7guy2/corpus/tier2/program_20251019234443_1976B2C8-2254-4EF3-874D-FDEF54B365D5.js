function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            f5[4] | 7;
            const v11 = [0.6004161736043077,2.220446049250313e-16,-2.0,-0.0,2.2250738585072014e-308,-950085.4812895065,637.4360195336483,0.0,-917.2390671457272];
            v11[261] = 97;
            for (let v12 = 0; v12 < 500; v12++) {
                v11[v12] ||= v12;
            }
            return a3;
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v15 = new F0();
class C16 {
    static [v15](a18, a19, a20) {
    }
}
