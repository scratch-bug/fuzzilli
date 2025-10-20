function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            function f12() {
                return "object";
            }
            function F13() {
                if (!new.target) { throw 'must be called with new'; }
            }
            F13.region = this;
            class C15 extends F13 {
            }
            const v17 = Intl.Locale;
            v17[Symbol.toPrimitive] = f12;
            try { new v17(v17, C15); } catch (e) {}
        }
        new F7(this, a6);
        function f23() {
            return f23;
        }
        WebAssembly.compileStreaming(this).catch(f23);
    }
}
new v3(v3, F0);
