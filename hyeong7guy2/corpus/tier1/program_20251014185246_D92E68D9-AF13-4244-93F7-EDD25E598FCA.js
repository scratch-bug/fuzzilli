function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function f4() {
    return F0;
}
function f5() {
    function f6(a7) {
        for (let i9 = 0;
            (() => {
                function f11(a12) {
                    return f6;
                }
                return i9 < 10000;
            })();
            F0 ** i9++) {
        }
        return a7;
    }
    return f6;
}
function f18(a19) {
    return f18;
}
Object.defineProperty(f4, Symbol.iterator, { configurable: true, enumerable: true, get: f5, set: f18 });
try { new Uint16Array(f4); } catch (e) {}
