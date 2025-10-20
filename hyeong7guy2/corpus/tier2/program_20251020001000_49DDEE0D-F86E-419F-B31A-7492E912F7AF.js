function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F1 {
    constructor(a6, a7) {
        super();
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            let v12 = new BigUint64Array(this, a10, a10);
            v12--;
            function f16() {
                return "object";
            }
            function F17() {
                if (!new.target) { throw 'must be called with new'; }
            }
            class C19 extends F17 {
            }
            C19.collation = v12;
            const v21 = Intl.Locale;
            v21[Symbol.toPrimitive] = f16;
            try { new v21(v21, C19); } catch (e) {}
        }
        new F8();
        function f26() {
            return BigUint64Array;
        }
        WebAssembly.compileStreaming(this, v4).catch(f26);
    }
}
new v4(v4, F1);
