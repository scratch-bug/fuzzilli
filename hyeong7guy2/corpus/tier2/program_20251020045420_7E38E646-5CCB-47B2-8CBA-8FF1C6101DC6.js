for (let v0 = 0; v0 < 5; v0++) {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        function f5() {
            function f6(a7) {
                return a7;
            }
            return f6;
        }
        Object.defineProperty(this, "toString", { configurable: true, get: f5 });
    }
    const v8 = new F1();
    class C9 {
        static [v8](a11, a12, a13) {
        }
        static [v8](a15, a16, a17) {
        }
    }
}
function F18(a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    function f22() {
        function f23(a24) {
            new Float64Array(536870912);
        }
        f23(a21);
        f23(F18);
        return f23;
    }
    Object.defineProperty(this, "toString", { get: f22 });
}
const v30 = new F18(F18, F18);
class C31 {
    static [v30](a33, a34, a35) {
    }
    static [v30](a37, a38, a39) {
    }
}
