try {
    function f0() {
    }
    class C1 extends f0 {
    }
    class C2 {
    }
    function F3() {
        if (!new.target) { throw 'must be called with new'; }
        const t9 = globalThis.performance.measureMemory;
        t9();
    }
    new F3();
} catch(e10) {
}
