class C2 {
}
new C2();
const v4 = new C2();
new Int8Array();
function f8() {
}
class C12 {
}
function f13() {
    function f14(a15, a16) {
        const v19 = new SharedArrayBuffer();
        const v21 = new DataView(v19);
        try { v21.setFloat64(); } catch (e) {}
        const v23 = class {
            constructor(a25, a26) {
                gc();
                function F29(a31, a32) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                new F29();
            }
        }
        const v35 = new WeakRef(Int32Array);
        v35[64] = v4;
        Int32Array[1];
        Int32Array[3];
        new v23();
        new v23();
        new Float64Array(1073741824);
    }
    %PrepareFunctionForOptimization(f14);
    f14();
}
({ construct: f13 }).construct();
