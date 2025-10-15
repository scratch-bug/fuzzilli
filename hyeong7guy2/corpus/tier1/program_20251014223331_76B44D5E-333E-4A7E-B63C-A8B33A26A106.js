const v1 = /na\b!/ugy;
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
        function f7(a8) {
            const v11 = f7[4] | 7;
            const v13 = { a: 1.1 };
            for (let v14 = 0; v14 < 5; v14++) {
                function F15(a17, a18) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                class C19 {
                    static [v13](a21, a22) {
                    }
                }
                try { F15.apply(v1, v11); } catch (e) {}
                Array(v11);
            }
        }
        f7();
        f7(a4);
        %OptimizeMaglevOnNextCall(f7);
        return f7;
    }
    Object.defineProperty(this, "toString", { get: f6 });
}
const v27 = new F2(F2, Array);
class C28 {
    static [v27](a30, a31, a32) {
    }
}
