function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            for (let i8 = 0; i8 < 20000; i8++) {
                Math.trunc();
            }
            return eval();
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v18 = new F0(F0, F0);
class C19 {
    static [v18](a21, a22, a23) {
    }
}
