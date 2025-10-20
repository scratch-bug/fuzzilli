function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7(a8, a9, a10) {
                return String.fromCodePoint(65537).localeCompare();
            }
            const v15 = f7();
            f7(a2, v15, v15);
            %OptimizeFunctionOnNextCall(f7);
            return f7(f5, f5, f5);
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v18 = new F0();
class C19 {
    static [v18](a21, a22, a23) {
    }
}
