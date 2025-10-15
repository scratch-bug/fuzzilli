function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = Intl.RelativeTimeFormat;
    new t2();
}
new F0();
for (let i11 = 0, i12 = 10; i12; i12--) {
}
