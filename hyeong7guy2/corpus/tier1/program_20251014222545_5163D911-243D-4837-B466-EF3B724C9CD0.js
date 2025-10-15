function f0() {
    return f0;
}
function f1() {
    function f2(a3) {
        function f4(a5, a6) {
            return f4;
        }
        const v8 = Intl.Segmenter;
        const v10 = {};
        v10.localeMatcher = f4;
        new v8("nqo", v10);
        return f1;
    }
    return f2;
}
function f12(a13) {
    return f12;
}
Object.defineProperty(f0, Symbol.iterator, { configurable: true, enumerable: true, get: f1, set: f12 });
try { new Uint16Array(f0); } catch (e) {}
