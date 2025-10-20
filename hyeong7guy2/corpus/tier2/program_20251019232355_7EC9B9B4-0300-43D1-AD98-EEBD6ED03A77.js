function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F1 {
    constructor(a6, a7) {
        super();
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                return "object";
            }
            function F15() {
                if (!new.target) { throw 'must be called with new'; }
            }
            class C17 extends F15 {
            }
            C17.region = -1;
            const v19 = Intl.Locale;
            v19[Symbol.toPrimitive] = f14;
            try { new v19(v19, C17); } catch (e) {}
        }
        new F8(F1, Symbol);
        function f24() {
            return F8;
        }
        WebAssembly.compileStreaming().catch(f24);
    }
}
new v4(Symbol, F1);
