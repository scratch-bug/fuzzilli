const v1 = [128];
function f2() {
    return true;
}
v1.toString = f2;
const v6 = Object.seal(v1);
v6.indexOf(Float32Array, v6);
