function f0() {
    return f0;
}
ArrayBuffer[6] = f0;
for (let i3 = 0;
    (() => {
        const v4 = {};
        const v5 = {};
        return i3 < 20000;
    })();
    ) {
    ArrayBuffer[6] |= ++i3;
}
