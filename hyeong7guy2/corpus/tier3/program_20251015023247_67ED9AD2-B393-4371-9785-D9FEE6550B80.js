function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = globalThis.performance.measureMemory;
    t2();
}
new F1();
