const v0 = class {
}
function f1() {
    return v0;
}
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = class extends F3 {
    constructor(a8, a9) {
        super();
        function F10(a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            BigUint64Array.toString = f1;
            function f15() {
                return "object";
            }
            function F16() {
                if (!new.target) { throw 'must be called with new'; }
            }
            F16.script = BigUint64Array;
            class C18 extends F16 {
            }
            const v20 = Intl.Locale;
            v20[Symbol.toPrimitive] = f15;
            try { new v20(v20, C18); } catch (e) {}
        }
        new F10();
        function f26() {
            return WebAssembly;
        }
        WebAssembly.compileStreaming(WebAssembly, a8).catch(f26);
    }
}
new v6(v6, f1);
