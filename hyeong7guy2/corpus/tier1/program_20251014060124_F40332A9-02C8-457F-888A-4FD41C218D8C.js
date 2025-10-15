function f1() {
    return Symbol;
}
function f2() {
    function f3(a4) {
        Intl.v8BreakIterator().first();
        return Symbol;
    }
    return f3;
}
function f8(a9) {
    return Symbol;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f8 });
try { new Uint16Array(f1); } catch (e) {}
for (let v13 = 0; v13 < 250; v13++) {
    v13 >> v13;
    const v15 = class {
    }
    const v16 = new v15();
    (typeof v16)[1];
}
