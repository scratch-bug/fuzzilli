const v2 = new Int16Array(5);
for (let i5 = 0; i5 < 10000; ++i5) {
    let v11 = 0;
    while (v11 < 4) {
        v11++;
        v2[v11] += 2299;
    }
}
