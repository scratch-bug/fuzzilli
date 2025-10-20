function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v9 = (3)[4];
            const v10 = v9 ** v9;
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
            }
            try { F11.apply(); } catch (e) {}
            return v10 * 20914;
        }
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v17 = new F1(20914, 20914);
class C18 {
    static [v17](a20, a21, a22) {
    }
    static [v17](a24, a25, a26) {
    }
}
