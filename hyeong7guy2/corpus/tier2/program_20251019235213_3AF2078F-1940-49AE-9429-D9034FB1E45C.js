function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            try {
                a6 && (a6 !== a6);
            } catch(e9) {
            }
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v10 = new F0();
v10.toString();
class C12 {
    static [v10](a14, a15, a16) {
    }
}
