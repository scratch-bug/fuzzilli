const v6 = new ArrayBuffer(3900, { maxByteLength: 3900 });
const v7 = new Int32Array(v6);
function f8() {
    return 9007199254740990;
}
v7.toString = f8;
v7[372] = v7;
