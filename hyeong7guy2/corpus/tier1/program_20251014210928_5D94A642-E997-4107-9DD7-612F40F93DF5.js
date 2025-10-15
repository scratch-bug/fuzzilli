function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            const v8 = v7 - v7;
            v8 - v8;
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
            }
            let v15 = 30349n;
            ({"b":v15,"e":v7,...Int32Array} = F11);
        }
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v16 = new F0(F0, F0);
v16.toString(F0, v16, F0, v16, F0);
class C18 {
    static [v16](a20, a21, a22) {
    }
}
