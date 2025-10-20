function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7) {
        a7 >>> a7;
        const v9 = a7 ?? a7;
        const v10 = v9 ?? v9;
        v10 ?? v10;
        let v13 = 108;
        v13--;
        let v17 = 20;
        v17--;
        58 - 58;
        239 - 239;
        131 * 131;
        158 + 158;
        let v38 = 164;
        const v39 = v38--;
        let v40 = 195;
        v40--;
        let v42 = 142;
        v42++;
        let v45 = 26;
        v45++;
        78 | 78;
        238 - 238;
        let v57 = 217;
        v57--;
        139 - 139;
        const v87 = Uint8Array.of(v13, 179, 225, v17, 243, 55, 25, 64, 58, 11, 85, 77, 158, 239, 132, 131, 90, 16, 158, v38, v40, v42, 51, v45, 38, 97, 78, 128, 163, 45, 191, 238, v57, 26, 106, 4, 139, 239, 89, 187, -4096, 148, 67, 172, 240, 114, 70, 59, 35, 249, 230, 232, 100, 36, 215, 21, 189, 18, -7, 41);
        v87[3] = v87;
        try { v87(a4, F0, v39); } catch (e) {}
        eval();
    }
    f6();
    f6();
    %OptimizeMaglevOnNextCall(f6);
    f6(F2);
}
const v94 = new F2();
const t42 = v94.constructor;
new t42();
