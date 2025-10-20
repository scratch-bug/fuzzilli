let v1 = [Int8Array];
function f2(a3, a4) {
    ++v1;
    const v6 = a4.idx;
    for (let v7 = 0; v7 < 5; v7++) {
        for (let v8 = 0; v8 < 5; v8++) {
        }
    }
    return v6;
}
for (let i11 = 0; i11 < 25000; ++i11) {
    f2(false, { idx: 0 });
}
