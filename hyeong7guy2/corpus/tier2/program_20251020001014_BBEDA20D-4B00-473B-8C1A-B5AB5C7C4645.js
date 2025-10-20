function f0() {
    return f0;
}
function f1() {
    function f2(a3) {
        const v5 = Intl.Segmenter;
        const v7 = {};
        v7.granularity = f2;
        const v8 = new v5("nqo", v7);
        return v8;
    }
    function f9(a10, a11) {
        return Intl;
    }
    f2[Symbol.toPrimitive] = f9;
    return f2;
}
function f15(a16) {
    return f15;
}
Object.defineProperty(f0, Symbol.iterator, { configurable: true, enumerable: true, get: f1, set: f15 });
try { new Uint16Array(f0); } catch (e) {}
