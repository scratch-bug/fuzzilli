const v0 = /na\b!/ugy;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            const v8 = f6[4];
            const v10 = v8 | 7;
            const v12 = { a: 1.1 };
            for (let v13 = 0; v13 < 5; v13++) {
                function F14(a16, a17) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                try { F14.apply(v0, v10); } catch (e) {}
                this.a - v12;
                const v22 = { __proto__: null };
            }
            return v8;
        }
        f6(F1);
        f6();
        %OptimizeMaglevOnNextCall(f6);
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v25 = new F1(F1, F1);
class C26 {
    static [v25](a28, a29, a30) {
    }
}
