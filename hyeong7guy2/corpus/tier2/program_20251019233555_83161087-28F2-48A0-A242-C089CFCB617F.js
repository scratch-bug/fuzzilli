const v3 = new Float32Array(243);
function f4() {
    return `4294967296`;
}
v3.toString = f4;
v3[62] = v3;
const t6 = ({ d: Uint32Array }).d;
new t6(v3);
