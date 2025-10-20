function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
function f5() {
    function f6() {
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            const v12 = Symbol.toPrimitive;
            function F13(a15, a16) {
                if (!new.target) { throw 'must be called with new'; }
                function F18(a20, a21, a22, a23) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f24() {
                        return F7;
                    }
                    function f25(a26) {
                        const v29 = Number(-9007199254740992n);
                        return v29 + v29;
                    }
                    Object.defineProperty(this, "e", { get: f24, set: f25 });
                    this.e = -1;
                }
                new F18(f6, F7, F7, F7);
            }
            new F13(F7, Symbol);
            globalThis[v12] = f6;
            const v33 = globalThis.console;
            v33.error(v33, globalThis);
        }
        const v35 = new F7(F1, f5);
        return v35;
    }
    return f6;
}
Object.defineProperty(F1, "constructor", { configurable: true, enumerable: true, get: f5 });
const v36 = F1.constructor;
try { v36(); } catch (e) {}
