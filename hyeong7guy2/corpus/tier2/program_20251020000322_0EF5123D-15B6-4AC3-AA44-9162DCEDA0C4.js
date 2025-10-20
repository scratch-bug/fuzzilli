function f0() {
    return f0;
}
function f1() {
    function f2(a3) {
        const v5 = Intl.Segmenter;
        const v7 = {};
        v7.granularity = f2;
        new v5("nqo", v7);
        return f0;
    }
    return f2;
}
function f9(a10) {
    return a10;
}
Object.defineProperty(f0, Symbol.iterator, { configurable: true, enumerable: true, get: f1, set: f9 });
try { new Uint16Array(f0); } catch (e) {}
