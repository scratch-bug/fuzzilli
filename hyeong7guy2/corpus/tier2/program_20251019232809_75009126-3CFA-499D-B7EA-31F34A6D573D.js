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
            function f17() {
                function f18(a19) {
                    return Math.asinh();
                }
                return f18;
            }
            Object.defineProperty(this, "toString", { get: f17 });
            const v22 = Intl.Locale;
            v22[Symbol.toPrimitive] = f12;
            try { new v22(v22, C15); } catch (e) {}
        }
        const v26 = new F7();
        function f28() {
            return a5;
        }
        WebAssembly.compileStreaming(WebAssembly, v26).catch(f28);
    }
}
new v3(F0, F0);
