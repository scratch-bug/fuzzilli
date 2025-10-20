function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function f5() {
    function f6() {
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            function f12() {
                return f6;
            }
            function f13(a14) {
                return a14;
            }
            Object.defineProperty(globalThis, "toString", { configurable: true, enumerable: true, get: f12, set: f13 });
            globalThis[f6] = f6;
            const v15 = globalThis.console;
            v15.error(v15, globalThis);
        }
        new F7();
        return F7;
    }
    f6.toString = Symbol;
    return f6;
}
Object.defineProperty(F1, "constructor", { configurable: true, enumerable: true, get: f5 });
const v18 = F1.constructor;
try { v18(); } catch (e) {}
