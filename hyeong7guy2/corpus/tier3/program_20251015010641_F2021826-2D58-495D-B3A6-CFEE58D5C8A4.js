for (let v0 = 0; v0 < 100; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        const t3 = globalThis.performance.measureMemory;
        t3();
    }
    new F1();
}
