function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            function f11(a12, a13) {
                return this;
            }
            this.toString = f11;
            function f15() {
                return "object";
            }
            function F16() {
                if (!new.target) { throw 'must be called with new'; }
            }
            F16.region = this;
            class C18 extends F16 {
            }
            const v20 = Intl.Locale;
            v20[Symbol.toPrimitive] = f15;
            try { new v20(v20, C18); } catch (e) {}
        }
        new F7();
        function f26() {
            return f26;
        }
        WebAssembly.compileStreaming(v3, a6).catch(f26);
    }
}
new v3(v3, F0);
