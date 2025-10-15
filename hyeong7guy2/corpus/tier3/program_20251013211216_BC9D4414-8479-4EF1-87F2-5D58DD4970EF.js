function poc() {
    let obj = {};
    for (let i4 = 0; i4 < 1024; i4++) {
        obj["prop" + i4] = i4;
    }
    try {
        structuredClone(obj);
    } catch(e14) {
    }
}
for (let i16 = 0; i16 < 100; i16++) {
    poc();
}
poc();
