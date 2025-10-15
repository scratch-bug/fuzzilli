function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i3 = 0; i3 < 20000; i3++) {
    Math.atan2(F0);
}
