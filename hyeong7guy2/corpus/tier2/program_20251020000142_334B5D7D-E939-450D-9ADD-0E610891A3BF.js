function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = (3)[4];
            let v10 = v9 >>> v9;
            v10--;
            let v12 = v10 * 0;
            v12++;
            return v9;
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v14 = new F1();
class C15 {
    static [v14](a17, a18, a19) {
    }
    static [v14](a21, a22, a23) {
    }
}
