const v1 = class {
}
const v2 = new v1();
new Float32Array();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    const t6 = globalThis.performance.measureMemory;
    t6(a7, Float32Array);
}
new F5(v2, v2);
