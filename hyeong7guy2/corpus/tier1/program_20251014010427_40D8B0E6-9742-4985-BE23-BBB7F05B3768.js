class C0 {
}
function f2() {
    return `toReversed` in C0;
}
f2();
Object.defineProperty(C0, 1, { configurable: true, enumerable: true, set: Symbol });
gc();
f2();
