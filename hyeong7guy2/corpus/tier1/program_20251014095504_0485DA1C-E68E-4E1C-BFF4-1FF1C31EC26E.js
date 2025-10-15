class C1 {
}
const v2 = C1.Module;
const v3 = {};
for (let i5 = 0; i5 < 20000; i5++) {
    const v11 = {};
    i5 % v11;
    const t6 = v2 ? v11 : v3;
    t6.c = "p";
}
