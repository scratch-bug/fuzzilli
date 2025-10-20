const v2 = { maxByteLength: 127 };
const v4 = new SharedArrayBuffer(8, v2);
const v6 = new BigInt64Array(v4);
function f7(a8, a9) {
    v6["set"](..."set");
    return a8;
}
try { f7(127, v2); } catch (e) {}
