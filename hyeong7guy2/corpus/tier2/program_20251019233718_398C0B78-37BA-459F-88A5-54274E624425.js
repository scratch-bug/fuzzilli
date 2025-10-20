function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v8 = new Uint32Array();
            const v9 = v8.length;
            -v9;
            ("frZom").normalize();
            let v13 = v9 / v9;
            for (let v14 = 0; v14 < 5; v14++) {
            }
            return v13--;
        }
        f5.apply();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v18 = new F0();
class C19 {
    static [v18](a21, a22, a23) {
    }
}
