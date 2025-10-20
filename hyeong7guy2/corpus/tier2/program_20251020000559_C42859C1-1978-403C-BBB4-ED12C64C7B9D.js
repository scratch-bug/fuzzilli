function f1() {
}
const v3 = Symbol.toPrimitive;
BigUint64Array[v3] = f1;
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = class extends F4 {
    constructor(a9, a10) {
        super();
        function F11(a13, a14) {
            if (!new.target) { throw 'must be called with new'; }
            function f16() {
                return "object";
            }
            function F17() {
                if (!new.target) { throw 'must be called with new'; }
            }
            class C19 extends F17 {
            }
            function f20() {
                return F11;
            }
            Object.defineProperty(C19, "numeric", { enumerable: true, get: f20 });
            C19.collation = BigUint64Array;
            const v22 = Intl.Locale;
            v22[Symbol.toPrimitive] = f16;
            try { new v22(v22, C19); } catch (e) {}
        }
        new F11(v3, a10);
        function f27() {
            return F11;
        }
        WebAssembly.compileStreaming().catch(f27);
    }
}
new v7(v3, F4);
