function f0(a1) {
    new Array(a1, f0);
    return f0;
}
for (let i5 = 1; i5 < 20000; i5++) {
    f0();
}
