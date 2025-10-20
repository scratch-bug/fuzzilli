function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    let v7;
    try { v7 = this.constructor(v2, a6); } catch (e) {}
    function f8(a9) {
        const v10 = a9 >>> a9;
        v10 - v10;
        const v12 = a9 ?? a9;
        -v12;
        const v14 = v12 ?? v12;
        v14 ?? v14;
        let v38 = 142;
        v38++;
        Uint8Array.of(108, 179, 225, 20, 243, 55, 25, 64, 58, 11, 85, 77, 158, 239, 132, 131, 90, 16, 158, 164, 195, v38, 51, 26, 38, 97, 78, 128, 163, 45, 191, 238, 217, 26, 106, 4, 139, 239, 89, 187, -4096, 148, 67, 172, 240, 114, 70, 59, 35, 249, 230, 232, 100, 36, 215, 21, 189, 18, -7, 41);
        eval();
        return v7;
    }
    f8();
    f8();
    %OptimizeMaglevOnNextCall(f8);
    f8(F3);
}
const v84 = new F3(F3, v2);
const v85 = v84.constructor;
v85.prototype = v85;
const v86 = new v85();
const t30 = v86.constructor;
t30();
