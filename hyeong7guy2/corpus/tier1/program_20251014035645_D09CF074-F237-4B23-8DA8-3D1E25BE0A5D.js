gc();
const v36 = [0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,7,1,1,109,1,102,0,0,7,8,1,4,109,97,105,110,0,0];
const v37 = new Uint8Array(v36);
const v39 = WebAssembly.Module;
Uint8Array.of(136, 23, 154, 124, 68, 116, 177, 1, 231, 162, 158, 210, 99, 165, 132, 95, 188, 135, 233, 39, 30, 212, 46, 167, 135, 77, 41, 85, 82, 166, 102, 227, 130, 255, 93, 86, 23, 176, 248, 217, 42, 19, 104, 51).toBase64(v36);
const v87 = new v39(v37);
function f88() {
    return 167;
}
const v89 = { f: f88 };
const v90 = { m: v89 };
const t11 = WebAssembly.Instance;
const v92 = new t11(v87, v90);
const t13 = v92.exports.main;
t13();
