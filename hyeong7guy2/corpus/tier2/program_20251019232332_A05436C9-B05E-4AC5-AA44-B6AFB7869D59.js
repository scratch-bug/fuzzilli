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
            C16.language = 10000;
            const v18 = Intl.Locale;
            v18[Symbol.toPrimitive] = f13;
            try { new v18(v18, C16); } catch (e) {}
        }
        new F8();
        function f24() {
            return f24;
        }
        WebAssembly.compileStreaming(v4).catch(f24);
    }
}
new v4();
