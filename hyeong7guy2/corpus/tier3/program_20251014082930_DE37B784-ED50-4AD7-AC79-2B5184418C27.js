let v0 = false;
function f1(a2) {
    if (!a2) {
        return;
    }
    function f4() {
        return f4;
    }
    WebAssembly.instantiateStreaming().catch(f4);
    return v0;
}
for (let i9 = 0;
    i9 < 25000;
    (() => {
        for (let i = 0; i < 5; i++) {
        }
        i9++;
    })()) {
    if (i9 === 24999) {
        v0 = true;
    }
    f1(v0);
}
