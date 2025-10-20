function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    gc({ execution: "async", type: "minor" });
}
const v11 = new F0(F0, F0, F0, F0);
const t5 = v11.constructor;
new t5();
new Int8Array(4294967295);
