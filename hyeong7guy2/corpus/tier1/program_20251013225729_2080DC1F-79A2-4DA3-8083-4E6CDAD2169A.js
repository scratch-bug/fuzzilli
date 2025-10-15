let v0 = -4294967297;
const v1 = v0++;
let v2 = false;
function f3(a4) {
    const v5 = ~a4;
    const v6 = a4 & a4;
    v6 << v6;
    const v8 = v1 ?? a4;
    const v9 = v8 + v8;
    if (v2) {
        v8(v9, v5, a4, v0, a4);
    } else {
        try {
        const t0 = null;
        t0(v1, v5);
        } catch (e) {}
    }
    return f3;
}
try {
    for (let v13 = 0; v13 < 100; v13++) {
        f3();
    }
    v2 = true;
    f3();
} catch(e17) {
    const t26 = e17.constructor;
    t26(e17);
}
