function f1(a2) {
    const v3 = [1000000.0,0.5076811007001502,-3.827549768659783e+305,1.5629658911218462e+308,0.9506074433883002];
    v3[3131] = 256;
    const v5 = new Uint8ClampedArray(v3);
    v5.toSorted();
    return f1;
}
const v10 = new Worker(f1, { type: "function" });
function f11(a12) {
    return v10;
}
new Worker(f11, { type: "function" });
