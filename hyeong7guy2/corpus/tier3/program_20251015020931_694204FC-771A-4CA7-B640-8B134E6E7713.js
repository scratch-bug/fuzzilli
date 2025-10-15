function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = globalThis.performance.measureMemory;
    t2();
}
new F2(2147483649, 2147483649);
new BigInt64Array(2147483649);
