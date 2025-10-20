const v5 = new ArrayBuffer(3900, { maxByteLength: 3900 });
const v7 = new Uint16Array(v5);
function f8() {
    return 9007199254740990;
}
v7.toString = f8;
v7[372] = v7;
