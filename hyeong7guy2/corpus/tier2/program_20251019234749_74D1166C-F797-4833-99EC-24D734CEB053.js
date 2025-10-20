function f0() {
    return f0;
}
function f1() {
    function f2(a3) {
        const v5 = Intl.Segmenter;
        const v7 = {};
        function f8() {
            return f2;
        }
        function f9(a10) {
            return f0;
        }
        Object.defineProperty(v7, "localeMatcher", { get: f8, set: f9 });
        new v5("nqo", v7);
        return f8;
    }
    f2.toString = f2;
    return f2;
}
function f12(a13) {
    return a13;
}
Object.defineProperty(f0, Symbol.iterator, { configurable: true, enumerable: true, get: f1, set: f12 });
try { new Uint16Array(f0); } catch (e) {}
