class C3 extends Uint8Array {
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
            class C15 extends F13 {
            }
            C15.firstDayOfWeek = 55202;
            const v17 = Intl.Locale;
            v17[Symbol.toPrimitive] = f12;
            new v17(v17, C15);
        }
        const v20 = new F7(this, F7);
        function f22() {
            return f22;
        }
        WebAssembly.compileStreaming(a5, v20).catch(f22);
    }
}
new C3();
