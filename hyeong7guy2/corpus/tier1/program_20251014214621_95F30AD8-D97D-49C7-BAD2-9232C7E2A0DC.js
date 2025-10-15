const v1 = [693913.4712015034,-314050.5385797281];
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v10 = -9007199254740990 >> a4;
            const t6 = v1.constructor;
            t6(v10, F2);
        }
        f7();
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v15 = new F2();
class C16 {
    static [v15](a18, a19, a20) {
    }
}
