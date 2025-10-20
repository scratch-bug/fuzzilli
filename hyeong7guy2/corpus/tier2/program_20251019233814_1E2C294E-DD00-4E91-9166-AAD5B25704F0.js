function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            async function f7(a8, a9) {
                for (let i11 = 10, i12 = 10; i12; i12--) {
                }
                class C18 {
                }
                C18.bind();
                return C18;
            }
            f7(F0, f4);
            %OptimizeFunctionOnNextCall(f7);
        }
        f5(f5.apply());
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v23 = new F0();
class C24 {
    static [v23](a26, a27, a28) {
    }
}
