function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F1 {
    constructor(a6, a7) {
        super();
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            function f13() {
                return "object";
            }
            function F14() {
                if (!new.target) { throw 'must be called with new'; }
            }
            class C16 extends F14 {
            }
            function f17() {
                function f18() {
                    return Symbol;
                }
                f18.bind(null, ...{});
                return null;
            }
            Object.defineProperty(C16, "numeric", { enumerable: true, get: f17 });
            const v23 = Intl.Locale;
            v23[Symbol.toPrimitive] = f13;
            try { new v23(v23, C16); } catch (e) {}
        }
        new F8();
        function f28() {
            return a6;
        }
        WebAssembly.compileStreaming().catch(f28);
    }
}
new v4(Symbol, Symbol);
