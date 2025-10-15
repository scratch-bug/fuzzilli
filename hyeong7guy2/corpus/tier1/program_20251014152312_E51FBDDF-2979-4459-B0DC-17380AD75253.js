function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            const v9 = {};
            let v11 = 30349n;
            let v12 = 0;
            do {
                v12++;
            } while (v12 < 9)
            ({"b":v11,"e":v7,...Int32Array} = -3612);
            eval(a2);
        }
        f5(a3);
        f5();
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v20 = new F0();
class C21 {
    static [v20](a23, a24, a25) {
    }
}
