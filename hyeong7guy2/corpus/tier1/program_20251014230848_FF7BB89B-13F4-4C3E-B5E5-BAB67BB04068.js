function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
async function f2(a3, a4) {
    class C5 {
    }
    Object.defineProperty(C5, "toReversed", { writable: true, configurable: true, enumerable: true, value: F0 });
    `toReversed` in C5;
    await f2;
    return a4;
}
f2();
f2(f2, F0);
%OptimizeFunctionOnNextCall(f2);
