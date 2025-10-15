function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i3 = 0;
    (() => {
        let v4 = i3 >>> i3;
        v4--;
        F0 % v4;
        return i3 < 10000;
    })();
    ) {
    i3++;
}
