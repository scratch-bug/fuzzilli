function f2() {
    return f2;
}
const v4 = WebAssembly.instantiateStreaming().catch(f2);
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9() {
        function f10(a11, a12, a13) {
            function f14() {
                ("🙌🏿").charAt();
                return "🙌🏿";
            }
            const v17 = /\p{Script_Extensions=Greek}?/dsgmv;
            String.prototype.replace.call(f14, v17);
            function f22() {
                return a13;
            }
            f22.valueOf = f22;
            Object.defineProperty(this, 1265203758, { configurable: true, enumerable: true, get: f10 });
            return F5;
        }
        %OptimizeMaglevOnNextCall(f10);
        f10(v4, f10, F5);
        function f24(a25) {
        }
        return f24;
    }
    gc({ execution: "async", type: "major" });
    f9();
    Object.defineProperty(this, "toString", { get: f9 });
}
const v32 = new F5(268435440n, 268435440n);
const v33 = new F5(v4, v32);
class C34 {
    static [v33](a36, a37, a38) {
    }
}
