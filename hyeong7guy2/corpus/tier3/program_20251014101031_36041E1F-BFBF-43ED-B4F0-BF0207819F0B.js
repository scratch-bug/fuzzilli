const v2 = new Int8Array(1705);
for (let i5 = 0;
    i5 < 25000;
    (() => {
        v2[4] += 127;
        i5++;
    })()) {
}
