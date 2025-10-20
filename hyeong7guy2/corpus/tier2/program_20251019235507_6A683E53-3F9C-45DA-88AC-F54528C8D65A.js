const v0 = class {
    constructor(a2, a3) {
        gc();
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            const t5 = globalThis.performance.measureMemory;
            t5();
        }
        new F6();
    }
}
new v0();
new v0();
function F18(a20, a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    new Float64Array(1073741824);
}
new F18();
