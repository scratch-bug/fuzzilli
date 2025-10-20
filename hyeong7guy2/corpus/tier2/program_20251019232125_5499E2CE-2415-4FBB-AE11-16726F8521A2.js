function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function f7(a8, a9) {
                eval(a3);
                return F0;
            }
            `g${"number"}function`;
        }
        f5();
        f5(a2);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v16 = new F0();
class C17 {
    static [v16](a19, a20, a21) {
    }
}
