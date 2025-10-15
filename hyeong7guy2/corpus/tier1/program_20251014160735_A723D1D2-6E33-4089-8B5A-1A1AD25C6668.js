function f1() {
    return f1;
}
function f2() {
    const t4 = Temporal.PlainDate;
    const v7 = new t4(15, 5, 5);
    v7.era;
}
function f9(a10) {
    return a10;
}
Object.defineProperty(f1, Symbol.iterator, { configurable: true, enumerable: true, get: f2, set: f9 });
new Uint16Array(f1);
