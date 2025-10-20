function f0(a1) {
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        const v8 = globalThis.performance.measureMemory;
        const v9 = v8(F2, v8, f0, v8);
        function f10(a11, a12) {
            return a1;
        }
        v9.constructor = f10;
    }
    const v13 = new F2();
    return v13;
}
f0();
new Worker(f0, { type: "function" });
