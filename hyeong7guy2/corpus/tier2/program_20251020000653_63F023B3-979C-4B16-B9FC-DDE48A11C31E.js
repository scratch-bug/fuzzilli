function f1() {
    return f1;
}
function f2() {
    function f3(a4) {
        return Intl.v8BreakIterator(f3);
    }
    function f7() {
        return f3;
    }
    function f8(a9) {
        return f7;
    }
    Object.defineProperty(f3, 0, { configurable: true, enumerable: true, get: f7, set: f8 });
    f3[Symbol.toPrimitive] = f3;
    return f3;
}
function f11(a12) {
    return a12;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f11 });
try { new Uint16Array(f1); } catch (e) {}
