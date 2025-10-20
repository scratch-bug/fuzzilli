const v1 = Symbol.toPrimitive;
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = class extends F2 {
    constructor(a7, a8) {
        super();
        function F9(a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                return "object";
            }
            function F15() {
                if (!new.target) { throw 'must be called with new'; }
            }
            class C17 extends F15 {
            }
            C17.hourCycle = a11;
            const v19 = Intl.Locale;
            v19[Symbol.toPrimitive] = f14;
            try { new v19(v19, C17); } catch (e) {}
        }
        new F9(v1);
        function f24() {
            return F2;
        }
        WebAssembly.compileStreaming().catch(f24);
    }
}
new v5(v5, v1);
