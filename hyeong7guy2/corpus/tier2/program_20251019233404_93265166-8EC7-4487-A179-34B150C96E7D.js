function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            -3612 == f5;
            this[4] | 7;
            let v14 = arguments;
            ({"b":v14,"e":v7,...Int32Array} = -3612);
            return v14;
        }
        f5(f5);
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v17 = new F0();
class C18 {
    static [v17](a20, a21, a22) {
    }
}
