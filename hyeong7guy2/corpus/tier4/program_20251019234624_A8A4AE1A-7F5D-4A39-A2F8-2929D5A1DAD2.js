function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i3 = 255; i3 < 10000; i3++) {
    const v9 = +F0;
    -v9;
    !v9;
}
