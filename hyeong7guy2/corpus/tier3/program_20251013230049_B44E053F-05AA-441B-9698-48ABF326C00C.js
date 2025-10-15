class C0 {
}
const v1 = new C0();
let v2;
try { v2 = v1.p(v1); } catch (e) {}
let v3 = false;
function f4(a5) {
    const v6 = !a5;
    if (v6) {
        return;
    }
    function f7() {
        return v6;
    }
    WebAssembly.instantiateStreaming(WebAssembly, v2).catch(f7);
    return WebAssembly;
}
for (let i12 = 0; i12 < 25000; i12++) {
    if (i12 === 24999) {
        v3 = true;
    }
    f4(v3);
}
