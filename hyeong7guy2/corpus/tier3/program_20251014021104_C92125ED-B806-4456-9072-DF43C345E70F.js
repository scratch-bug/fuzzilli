class C1 extends Int16Array {
}
for (let i4 = 0;
    (() => {
        const v6 = i4 < 20000;
        new C1();
        C1[i4] <<= 64;
        return v6;
    })();
    i4++) {
}
