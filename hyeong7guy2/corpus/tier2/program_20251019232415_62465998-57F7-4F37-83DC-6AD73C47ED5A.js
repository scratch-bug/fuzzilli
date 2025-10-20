for (let i3 = 0, i4 = 10; i4; i4--) {
}
class C10 extends Int8Array {
}
const v11 = new C10();
function F12(a14) {
    if (!new.target) { throw 'must be called with new'; }
}
const v15 = class extends F12 {
    constructor(a17, a18) {
        super();
        function F19(a21, a22) {
            if (!new.target) { throw 'must be called with new'; }
            function f24() {
                return "object";
            }
            function F25() {
                if (!new.target) { throw 'must be called with new'; }
            }
            class C27 extends F25 {
            }
            C27.language = v11;
            const v29 = Intl.Locale;
            v29[Symbol.toPrimitive] = f24;
            try { new v29(v29, C27); } catch (e) {}
        }
        new F19();
        function f35() {
            return C10;
        }
        WebAssembly.compileStreaming().catch(f35);
    }
}
new v15(v11, C10);
