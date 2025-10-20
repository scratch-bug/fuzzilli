function f1() {
    return true;
}
for (let i5 = 0, i6 = 10; i6; i6--) {
}
class C12 extends Int8Array {
}
C12.toString = f1;
function F13(a15) {
    if (!new.target) { throw 'must be called with new'; }
}
const v16 = class extends F13 {
    constructor(a18, a19) {
        super();
        function F20(a22, a23) {
            if (!new.target) { throw 'must be called with new'; }
            function f25() {
                return "object";
            }
            function F26() {
                if (!new.target) { throw 'must be called with new'; }
            }
            class C28 extends F26 {
            }
            C28.language = C12;
            const v30 = Intl.Locale;
            v30[Symbol.toPrimitive] = f25;
            try { new v30(v30, C28); } catch (e) {}
        }
        new F20();
        function f36() {
            return a18;
        }
        WebAssembly.compileStreaming(C12, a19).catch(f36);
    }
}
new v16();
