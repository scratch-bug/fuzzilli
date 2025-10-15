function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
F0.prototype = F0;
const v5 = new F0(F0, F0, F0);
Float32Array[2] = v5;
const v8 = globalThis.Float16Array;
try { new v8(Float32Array); } catch (e) {}
