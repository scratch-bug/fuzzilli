function f1() {
    return f1;
}
function f2() {
    function f3(a4) {
        const t5 = Intl.Segmenter;
        const v7 = new t5();
        const t7 = v7.segment;
        t7();
        return Symbol;
    }
    return f3;
}
function f10(a11) {
    return a11;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f10 });
try { new Uint16Array(f1); } catch (e) {}
