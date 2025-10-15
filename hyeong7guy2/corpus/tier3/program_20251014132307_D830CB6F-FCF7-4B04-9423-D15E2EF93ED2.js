const v1 = class extends Float32Array {
}
const v2 = new v1();
for (let i4 = 0;
    i4 < 10000;
    (() => {
        v2[5] = i4;
        i4++;
    })()) {
}
