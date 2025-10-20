function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            this[4] | 7;
            f4 **= f5;
            let v13 = arguments;
            ({"b":v13,"e":v7,...Int32Array} = -3612);
        }
        f5();
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v16 = new F0(F0, F0);
class C17 {
    static [v16](a19, a20, a21) {
    }
}
