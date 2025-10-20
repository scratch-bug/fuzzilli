const v4 = new SharedArrayBuffer(127, { maxByteLength: 127 });
const v6 = new BigInt64Array(v4);
function f7(a8, a9) {
    function f10(a11, a12, a13) {
        return a11;
    }
    const v16 = [Float64Array,v6];
    Worker(f10, { arguments: v16, type: "function" });
    return "function";
}
try { f7(); } catch (e) {}
