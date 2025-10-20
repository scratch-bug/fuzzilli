class C0 {
    constructor(a2, a3) {
        const v42 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,7,1,3,101,120,112,0,0,10,6,1,4,0,65,42,11]);
        gc();
        function F76(a78, a79) {
            if (!new.target) { throw 'must be called with new'; }
            const t6 = globalThis.performance.measureMemory;
            t6();
        }
        new F76();
        const v96 = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,2,11,1,3,101,110,118,3,105,109,112,0,0,7,10,1,6,114,101,95,101,120,112,0,0]);
        async function f97() {
            await WebAssembly.compile(v42);
            WebAssembly.compile(v96);
            return 115;
        }
        f97();
    }
}
new C0();
const v103 = new C0();
new C0(C0, v103);
