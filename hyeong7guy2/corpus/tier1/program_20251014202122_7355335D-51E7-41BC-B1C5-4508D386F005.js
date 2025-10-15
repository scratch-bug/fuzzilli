function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            function f10() {
                Symbol[Symbol.toPrimitive] = Symbol;
                return Symbol;
            }
            f10(129);
            const v13 = eval(a5);
            v13 | v13;
            return a8;
        }
        f7(129);
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v17 = new F2();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
