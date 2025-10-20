const v3 = new BigInt64Array(7);
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
                return v3;
            }
            function f21(a22) {
                return v7;
            }
            Object.defineProperty(C19, "firstDayOfWeek", { enumerable: true, get: f20, set: f21 });
            const v24 = Intl.Locale;
            v24[Symbol.toPrimitive] = f16;
            try { new v24(v24, C19); } catch (e) {}
        }
        new F11(this, a10);
        function f29() {
            return f29;
        }
        WebAssembly.compileStreaming().catch(f29);
    }
}
new v7(F4, BigInt64Array);
