function f0(a1) {
    parseInt(a1, 16);
}
for (let i6 = 0; i6 < 25000; i6++) {
    f0(false);
}
f0(true);
