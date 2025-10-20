("🙌🏿").constructor;
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    function f12() {
        function f13(a14) {
            function F15(a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v19 = new F15(F8, a14);
            F2 < v19.constructor;
            for (let i24 = 0, i25 = 10; i25; i25--) {
            }
        }
        return f13;
    }
    Object.defineProperty(this, "toString", { get: f12 });
}
const v31 = new F8(F8, F8);
class C32 {
    static [v31](a34, a35, a36) {
    }
}
