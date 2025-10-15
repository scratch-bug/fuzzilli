function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
            }
            F10.b = "2147483647";
            ({"b":a2,"e":v7,...Int32Array} = F10);
            return "2147483647";
        }
        f5(f5);
        f5(F0);
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
