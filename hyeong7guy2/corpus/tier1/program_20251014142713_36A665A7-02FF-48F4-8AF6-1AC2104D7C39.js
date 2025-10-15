function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v9 = f5[4] | 7;
            Array.length = Array;
            Array(1048576);
            function f13(a14, a15, a16) {
                return f13;
            }
            let v17 = -1098098658;
            function F21(a23, a24) {
                if (!new.target) { throw 'must be called with new'; }
                a24++;
                this.e = a24;
            }
            const v26 = new F21("2147483647", -3612);
            const v27 = new F21(f5, f5);
            v27.length = v27;
            let v28 = 30349n;
            ({"b":v28,"e":v17,...Int32Array} = v26);
            return v9;
        }
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
    f4();
}
const v31 = new F0(F0, F0);
class C32 {
    static [v31](a34, a35, a36) {
    }
}
