const v0 = /na\b!/ugy;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v10 = f6[4] | 7;
            const v12 = { a: 1.1 };
            for (let v13 = 0; v13 < 5; v13++) {
                function F14(a16, a17) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                try { F14.apply(v0, v10); } catch (e) {}
                const v19 = new F14();
                v19.length;
                this.a - v12;
            }
        }
        f6();
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v25 = new F1(v0, F1);
class C26 {
    static [v25](a28, a29, a30) {
    }
}
