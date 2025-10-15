function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
class C5 extends Uint8ClampedArray {
}
new C5();
new C5();
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i16 = 0; i16 < 25000; i16++) {
        const v24 = [1,2];
        function f25() {
            v24[0] = 1.1;
        }
        const v27 = { valueOf: f25 };
        v24.push();
    }
}
new F10();
[1.254866709672204e+308,0.0,-2.5359888339958463,-2.220446049250313e-16];
const v32 = class extends Set {
}
new v32();
[];
const v35 = {};
for (let v36 = 0; v36 < 5; v36++) {
    v35.a = v36;
}
function F37(a39, a40) {
    if (!new.target) { throw 'must be called with new'; }
}
new F37();
new F37();
const v44 = new Int8Array();
v44.subarray();
new F37();
