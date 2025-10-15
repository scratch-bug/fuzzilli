class C3 {
    #m(a5) {
        return this[this];
    }
    get b() {
        return this;
    }
}
new C3();
new C3();
new C3();
new Int32Array(2311);
let v17 = false;
function f18(a19) {
    const v20 = !a19;
    if (v20) {
        return;
    }
    function f21() {
        return f18;
    }
    const v26 = {
        start(a24) {
            const generator = f21;
            return a19;
        },
    };
    try { ReadableStream(-8n, v20, 7.459219185388292); } catch (e) {}
    let v29;
    try { v29 = Response(); } catch (e) {}
    function f30() {
        return v26;
    }
    WebAssembly.instantiateStreaming(v29).catch(f30);
}
for (let i35 = 0; i35 < 25000; i35++) {
    if (i35 > 24999) {
        v17 = true;
    }
    f18(v17);
}
