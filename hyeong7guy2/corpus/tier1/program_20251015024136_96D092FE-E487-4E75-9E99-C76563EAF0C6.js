const v1 = /na\b!/ugy;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v11 = f7[4] | 7;
            const v13 = { a: 1.1 };
            for (let i15 = 0;
                (() => {
                    Symbol.g = Symbol;
                    return i15 < 20000;
                })();
                i15++) {
                for (const v22 in /(fp*)/iv) {
                }
            }
            for (let v23 = 0; v23 < 5; v23++) {
                function F24(a26, a27) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                try { F24.apply(v1, v11); } catch (e) {}
                this.a - v13;
                const v32 = { __proto__: null };
            }
            return a4;
        }
        f7(a4);
        f7();
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v35 = new F2();
class C36 {
    static [v35](a38, a39, a40) {
    }
}
