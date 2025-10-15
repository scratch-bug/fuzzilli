function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i4 = 0; i4 < 20000; i4++) {
    --F0;
    Math.cos(F0);
}
