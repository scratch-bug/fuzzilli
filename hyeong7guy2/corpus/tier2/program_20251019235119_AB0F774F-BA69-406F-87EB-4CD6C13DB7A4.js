function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function f5() {
    function f6() {
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            const v12 = Symbol.toPrimitive;
            globalThis.console.context(v12);
        }
        new F7(F1, f6);
        return F7;
    }
    return f6;
}
Object.defineProperty(F1, "constructor", { configurable: true, enumerable: true, get: f5 });
const v16 = F1.constructor;
try { v16(); } catch (e) {}
