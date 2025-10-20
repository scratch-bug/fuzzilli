function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            this[4] | 7;
            for (let v11 = 0; v11 < 5; v11++) {
                Math.abs(v11);
            }
            arguments[2];
        }
        f5(a3);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    f4();
    Object.defineProperty(this, "toString", { get: f4 });
}
const v17 = new F0(F0, F0);
class C18 {
    static [v17](a20, a21, a22) {
    }
}
