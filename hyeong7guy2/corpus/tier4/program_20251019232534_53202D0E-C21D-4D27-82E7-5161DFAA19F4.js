function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i3 = 255; i3 < 10000; i3++) {
    !(+F0);
}
