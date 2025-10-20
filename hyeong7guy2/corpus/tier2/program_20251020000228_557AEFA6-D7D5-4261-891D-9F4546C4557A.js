try {
    class C1 {
    }
    function f3() {
        return C1;
    }
    function f4() {
        function f5() {
            function F6(a8, a9) {
                if (!new.target) { throw 'must be called with new'; }
                const t10 = globalThis.performance.measureMemory;
                t10();
            }
            new F6(f5, Symbol);
            10 % 10;
            WeakMap.stack;
            new WeakSet();
            for (let v20 = 0; v20 < 5; v20++) {
                v20++;
            }
            return { done: WeakMap };
        }
        return { next: f5 };
    }
    const v25 = Symbol.iterator;
    const v26 = { [v25]: f4 };
    const v66 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
    async function f68() {
        const v71 = await WebAssembly.compile(v66);
        const t29 = WebAssembly.Instance;
        const v73 = new t29(v71);
        C1 >= v73;
        const v77 = Temporal.PlainMonthDay;
        const v80 = v77.from({ day: 7, month: 330 });
        function f81() {
            return f81;
        }
        function f82(a83) {
            return f81;
        }
        Object.defineProperty(v80, "year", { configurable: true, enumerable: true, get: f81, set: f82 });
        for (let v85 = 0; v85 < 5; v85++) {
            v85 < 1000;
            const v88 = v85++;
            const v97 = {
                p(a90, a91, a92, a93) {
                    return -1e-15 - !v88;
                },
            };
            v97.p();
        }
        return v73;
    }
    f68();
    try { f3.bind(null, ...v26); } catch (e) {}
} catch(e101) {
}
