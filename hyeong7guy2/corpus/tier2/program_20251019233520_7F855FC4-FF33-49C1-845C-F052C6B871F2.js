function f0() {
    return f0;
}
function f1() {
    eval(eval);
    try {
        for (let i6 = 0; i6 < 100000; ++i6) {
        }
    } catch(e12) {
        const v14 = {
            [Symbol]() {
            },
        };
    }
}
function f15(a16) {
    return a16;
}
Object.defineProperty(f0, Symbol.iterator, { configurable: true, enumerable: true, get: f1, set: f15 });
new Uint16Array(f0);
