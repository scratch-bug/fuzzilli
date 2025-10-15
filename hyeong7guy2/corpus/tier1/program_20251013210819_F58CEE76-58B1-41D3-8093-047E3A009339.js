function f0(a1) {
    let v2 = undefined;
    if (a1) {
        v2 = { p1: 1.1 };
    }
    const v5 = {};
    const v6 = { q1: v5 };
    if (a1) {
        v2.p1;
    }
}
for (let i9 = 0; i9 < 20000; i9++) {
    f0();
}
f0(true);
