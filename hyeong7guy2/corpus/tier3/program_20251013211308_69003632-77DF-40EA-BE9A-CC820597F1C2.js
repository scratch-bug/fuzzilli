function f0(a1) {
    const v6 = [1.1,2.2,3.3,4.4];
    const v3 = v6;
    if (a1) {
        v6.push({});
    }
    v3[2] = 5.5;
}
for (let i12 = 0; i12 < 100000; i12++) {
    f0();
}
f0(true);
