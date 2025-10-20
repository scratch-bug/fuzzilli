function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function F5(a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            function f9(a10, a11, a12) {
                function f13() {
                    return this;
                }
                class C14 extends f13 {
                }
                const v15 = `unit${C14}bigint`;
                C14[v15] = v15;
                return C14;
            }
            f9();
            %OptimizeFunctionOnNextCall(f9);
        }
        const v17 = new F5(F5, a2);
        new F5(v17, f4);
        new F5(a2, F0);
        function f20(a21) {
        }
        return f20;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v22 = new F0(F0, F0);
class C23 {
    static [v22](a25, a26, a27) {
    }
}
