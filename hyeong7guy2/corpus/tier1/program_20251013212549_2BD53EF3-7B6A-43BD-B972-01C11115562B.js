let v0 = false;
function f1(a2) {
    if (!a2) {
        return;
    }
    function f4() {
        return f1;
    }
    const v9 = {
        start(a7) {
            const generator = f4;
            return a2;
        },
    };
    try { ReadableStream(); } catch (e) {}
    let v12;
    try { v12 = Response(); } catch (e) {}
    function f13() {
        return v9;
    }
    WebAssembly.instantiateStreaming(v12).catch(f13);
}
for (let i18 = 0; i18 < 25000; i18++) {
    if (i18 === 24999) {
        v0 = true;
    }
    f1(v0);
}
