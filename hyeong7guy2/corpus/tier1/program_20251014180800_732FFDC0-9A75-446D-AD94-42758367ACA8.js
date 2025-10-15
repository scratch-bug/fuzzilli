function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            let v7 = -1098098658;
            const v9 = {};
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
            }
            let v14 = 30349n;
            ({"b":v14,"e":v7,...Int32Array} = F10);
            const v16 = class {
            }
            try { v16(); } catch (e) {}
            const v18 = v16.valueOf;
            v18.length = v18;
            eval(v14);
        }
        f5();
        f5(f5);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v22 = new F0(F0, F0);
class C23 {
    static [v22](a25, a26, a27) {
    }
}
