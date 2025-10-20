try {
    class C0 {
    }
    const v2 = {};
    v2.defineProperty = C0;
    const v3 = new Proxy(C0, v2);
    v3.a = v3;
} catch(e4) {
}
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10() {
            return F5;
        }
        class C11 extends f10 {
            constructor(a13) {
                eval();
            }
        }
        function f16(a17) {
            const v19 = d8.debugger;
            v19.disable(a8, f16, v19, F5, this);
            const v21 = v19.enable;
            return v21(v21);
        }
        return f16;
    }
    Object.defineProperty(this, "toString", { get: f9 });
}
const v23 = new F5();
class C24 {
    static [v23](a26, a27, a28) {
    }
}
