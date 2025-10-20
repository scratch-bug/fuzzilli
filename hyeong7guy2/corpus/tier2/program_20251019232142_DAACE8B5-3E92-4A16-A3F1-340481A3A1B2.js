function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = (3)[4];
            let v10 = v9 >>> v9;
            v10--;
            v10 * 0;
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v13 = new F1(0, 0);
class C14 {
    static [v13](a16, a17, a18) {
    }
    static [v13](a20, a21, a22) {
    }
}
