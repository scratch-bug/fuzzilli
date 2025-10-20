function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v6 = globalThis.performance.measureMemory;
    const v7 = v6.bind();
    v6(F0).then(v7);
}
new F0(F0, F0);
