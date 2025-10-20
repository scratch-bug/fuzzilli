for (let i2 = 0, i3 = 10; i3; i3--) {
}
function f9(a10) {
    function F11(a13, a14) {
        if (!new.target) { throw 'must be called with new'; }
        const t5 = globalThis.performance.measureMemory;
        t5();
    }
    const v19 = new F11();
    return v19;
}
f9();
new Worker(f9, { type: "function" });
