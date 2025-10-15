function f0(a1, a2) {
    if (a2) {
        a2[0];
    }
    a1?.[0] | 0;
    return 0;
}
const v8 = [100];
for (let i10 = 0; i10 < 25000; i10++) {
    v8[0] = 100;
    f0(v8);
}
f0(v8, true);
/c[xyz]/mus;
