function f3() {
    return Symbol;
}
function f4() {
    function f5(a6) {
        const v7 = Symbol.trimRight;
        v7(f4, v7, f5, Uint16Array);
        [...Symbol,...4096];
        return v7;
    }
    return f5;
}
function f10(a11) {
    return 4096;
}
Object.defineProperty(f3, Symbol.iterator, { configurable: true, enumerable: true, get: f4, set: f10 });
try { new Uint16Array(f3); } catch (e) {}
