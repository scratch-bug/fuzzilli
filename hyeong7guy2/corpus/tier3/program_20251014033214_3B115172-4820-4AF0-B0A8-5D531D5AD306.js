function f0() {
    return f0;
}
ArrayBuffer[6] = f0;
for (let i3 = 0;
    i3 < 20000;
    (() => {
        try {
        } catch(e7) {
        }
    })()) {
    ++i3;
    ArrayBuffer[6] |= i3;
}
