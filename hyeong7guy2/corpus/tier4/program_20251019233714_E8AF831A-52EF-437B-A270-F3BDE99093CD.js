function f0() {
    return f0;
}
for (let i3 = (() => {
        let v1 = 0;
        v1--;
        return v1;
    })();
    i3 < 20000;
    ++i3) {
    f0 >>> i3;
}
