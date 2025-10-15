const v2 = new Int8Array(2648);
for (let i4 = 0; i4 < 25000; ++i4) {
    let v10 = 0;
    for (let i = 0; i < 5; i++) {
        v2[v10] **= v10++;
    }
}
