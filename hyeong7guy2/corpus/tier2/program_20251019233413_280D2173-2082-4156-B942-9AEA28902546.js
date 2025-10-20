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
            F14.script = 3196;
            class C16 extends F14 {
            }
            const v18 = Intl.Locale;
            v18[Symbol.toPrimitive] = f13;
            try { new v18(v18, C16); } catch (e) {}
        }
        const v22 = new F8();
        function f24() {
            return a6;
        }
        WebAssembly.compileStreaming(WebAssembly, v22).catch(f24);
    }
}
new v4();
