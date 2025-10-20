function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v14 = {
                p(a9, a10, a11, a12) {
                    super.h;
                    return this;
                },
                __proto__: null,
            };
            try { v14.p(); } catch (e) {}
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v16 = new F0();
class C17 {
    static [v16](a19, a20, a21) {
    }
}
