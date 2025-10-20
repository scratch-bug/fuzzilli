function f0(a1) {
    return f0;
}
class C2 extends f0 {
    constructor(a4, a5, a6, a7) {
        super();
    }
}
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    function f12() {
        function f13(a14) {
            const v17 = f13[4] | 7;
            const v19 = { a: 1.1 };
            new C2(v17, f13, 1.1, this);
            v19.a;
        }
        f13();
        f13();
        %OptimizeMaglevOnNextCall(f13);
        return f13;
    }
    Object.defineProperty(this, "toString", { get: f12 });
}
const v24 = new F8(f0, f0);
class C25 {
    static [v24](a27, a28, a29) {
    }
}
