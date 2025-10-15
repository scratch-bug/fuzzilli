function f0(a1) {
    const v4 = new Array(a1[1]);
    return v4;
}
const v7 = [1.1,{}];
for (let i9 = 0; i9 < 20000; i9++) {
    v7[1] = 2;
    f0(v7);
}
