function F1(a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = class extends F1 {
    constructor(a6, a7) {
        super();
        function F8(a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            const v12 = new BigUint64Array();
            function f15() {
                return "object";
            }
            function F16() {
                if (!new.target) { throw 'must be called with new'; }
            }
            class C18 extends F16 {
            }
            C18.collation = v12;
            const v20 = Intl.Locale;
            v20[Symbol.toPrimitive] = f15;
            try { new v20(v20, C18); } catch (e) {}
        }
        new F8(this, BigUint64Array);
        function f25() {
            return f25;
        }
        WebAssembly.compileStreaming(this).catch(f25);
    }
}
new v4(BigUint64Array, v4);
